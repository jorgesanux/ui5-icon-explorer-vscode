import * as vscode from 'vscode';

import { CopyType, IconList, icons, tags } from './icons';

export function activate(context: vscode.ExtensionContext) {
	const sapUi5IconProvider = new UI5IconExplorerProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.commands.registerCommand('ui5IconExplorer.copyOption.sapURI', (args) => {
			sapUi5IconProvider.copyIcon(args.icon, CopyType.URI);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('ui5IconExplorer.copyOption.symbol', (args) => {
			sapUi5IconProvider.copyIcon(args.icon, CopyType.SYMBOL);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('ui5IconExplorer.copyOption.unicode', (args) => {
			sapUi5IconProvider.copyIcon(args.icon, CopyType.UNICODE);
		})
	);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(UI5IconExplorerProvider.viewType, sapUi5IconProvider, {
			webviewOptions: {
				retainContextWhenHidden: true,
			}
		}),
	);
}

// This method is called when your extension is deactivated
export function deactivate() { }

enum MessageType {
	CopyIcon = "copyIcon",
	SearchIcon = "searchIcon",
	ResultSearchIcon = "resultSearchIcon",
}

type MessageData = {
	type: MessageType,
	complex?: object | Array<any>,
	simple?: string,
};

class IconHelper {
	private static _instance: IconHelper;
	private iconList: IconList;

	private constructor() {
		this.iconList = this.generateIconList();
	}

	public static getInstance(): IconHelper {
		if (this._instance === undefined) {
			this._instance = new IconHelper();
		}
		return this._instance;
	}

	private stringSort(a: string, b: string): number {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	}

	private generateIconList(): IconList {
		const iconList: IconList = {};
		const iconNameList = Object.keys(icons).sort(this.stringSort);
		for (const iconName of iconNameList) {
			const content = icons[iconName];
			iconList[iconName] = {
				content: content & 0xFFFF, //Remove control Unicode bits (UTF-16)
				tags: tags[iconName]?.tags.sort(this.stringSort) || []
			}
		}
		return iconList;
	}

	public searchIcon(querySearch: string, caseSensitive: boolean = false): Object {
		if (querySearch === "") return this.iconList;

		let search = caseSensitive ? querySearch : querySearch.toLowerCase();
		const results: IconList = {};
		for (const iconKey in this.iconList) {
			const icon = this.iconList[iconKey];
			const lowerIconKey = caseSensitive ? iconKey : iconKey.toLowerCase();
			const lowerTags = caseSensitive ? icon.tags : icon.tags.map(tag => tag.toLowerCase());
			if (lowerIconKey.includes(search) || lowerTags.some(tag => tag.includes(search))) {
				results[iconKey] = this.iconList[iconKey];
			}
		}
		return results;
	}

	public copyIconSAPURI(iconKey: string): string {
		return `sap-icon://${iconKey}`;
	}

	public copyIconSymbol(iconKey: string): string {
		return String.fromCharCode(this.iconList[iconKey].content);
	}

	public copyIconUnicode(iconKey: string): string {
		return `x${this.iconList[iconKey].content.toString(16)}`;
	}
}

class UI5IconExplorerProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'ui5IconExplorerWebView';
	private _view?: vscode.WebviewView;
	private iconHelper = IconHelper.getInstance();

	constructor(
		private readonly _extensionUri: vscode.Uri,
	) { }

	private messageReceiver(receivedData: MessageData): void {
		switch (receivedData.type) {
			case MessageType.CopyIcon:
				this.copyIcon(receivedData.simple || "", CopyType.URI);
				break;
			case MessageType.SearchIcon:
				const resultIcons = this.iconHelper.searchIcon(receivedData.simple || "");
				this.messageSender({
					type: MessageType.ResultSearchIcon,
					complex: resultIcons
				});
				break;
		}
	}

	private messageSender(messageData: MessageData): void {
		this._view?.webview.postMessage(messageData);
	}

	public copyIcon(icon: string, typeValue: CopyType): void {
		let iconCopyResult: string = "";
		switch (typeValue) {
			case CopyType.URI:
				iconCopyResult = this.iconHelper.copyIconSAPURI(icon);
				break;
			case CopyType.SYMBOL:
				iconCopyResult = this.iconHelper.copyIconSymbol(icon);
				break;
			case CopyType.UNICODE:
				iconCopyResult = this.iconHelper.copyIconUnicode(icon);
				break;
		}
		vscode.env.clipboard.writeText(iconCopyResult);
		vscode.window.showInformationMessage(`Icon "${icon}" copied to clipboard.`);
	}

	private constructResourceUri(path: string): vscode.Uri | undefined {
		return this._view?.webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, path));
	}

	private async readIndexHtml(): Promise<string> {
		const htmlPath = vscode.Uri.joinPath(this._extensionUri, "dist/web/resources/index.html");
		const htmlFile = await vscode.workspace.fs.readFile(htmlPath);
		const textDecoder = new TextDecoder();
		return textDecoder.decode(htmlFile);
	}

	private async _getHtmlForWebView(): Promise<string> {
		const htmlFile = await this.readIndexHtml();
		const jsScriptMainUri = this.constructResourceUri("dist/web/resources/js/main.js");
		const cssMain = this.constructResourceUri("dist/web/resources/css/main.css");
		const cssCodicons = this.constructResourceUri("dist/web/resources/css/codicon.css");
		const nonce = getNonce();

		return htmlFile
			.replace("{cssMain}", cssMain?.toString() || "")
			.replace("{cssCodicons}", cssCodicons?.toString() || "")
			.replace("{jsScriptMainUri}", jsScriptMainUri?.toString() || "")
			.replace(/\{webview.cspSource\}/g, this._view?.webview.cspSource || "")
			.replace(/\{nonce\}/g, nonce);
	}

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext<unknown>,
		token: vscode.CancellationToken
	): void | Thenable<void> {
		this._view = webviewView;

		this._view.webview.options = {
			enableScripts: true,
			localResourceRoots: [
				vscode.Uri.joinPath(this._extensionUri, "dist"),
				this._extensionUri
			]
		};

		this._getHtmlForWebView().then(html => {
			if (!this._view) return;

			this._view.webview.html = html;
		});

		this._view.webview.onDidReceiveMessage(receivedMessage => {
			this.messageReceiver(receivedMessage as MessageData);
		});
	}
}

function getNonce() {
	let nonce = '';
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 64; i++) {
		nonce += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return nonce;
}