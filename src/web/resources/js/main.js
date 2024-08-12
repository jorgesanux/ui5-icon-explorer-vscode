const vscode = acquireVsCodeApi();
const domParser = new DOMParser();

const inputSearch = document.getElementById('inputSearch');
const btnClearSearch = document.getElementById('btnClearSearch');
const iconListContainer = document.querySelector(".icons-list");

function generateIconCard({
    content,
    name,
    tags = []
}) {
    const rawTags = tags.join(", ");

    return `
        <div class="icon-card" title="Tags: ${rawTags}" 
            data-id-icon="${name}"
            data-vscode-context='{"webviewSection": "iconCard", "preventDefaultContextMenuItems": true, "icon": "${name}"}'>
            <div class="icon-card__body">
                <span data-sap-ui-icon-content="${content}" class="sapUiIcon icon-card__icon"></span>
                <span class="icon-card__name">${name}</span>
            </div>
            <!-- <div class="icon-card__footer">
                <button class="icon-card__button" title="Copy icon name" data-id-icon="${name}">
                    <span class="codicon codicon-clippy"></span>
                </button>
            </div> -->
        </div>
    `;
}

function generateIconList(iconList) {
    return Object.keys(iconList).map(iconKey => {
        const icon = iconList[iconKey];
        return generateIconCard({
            content: String.fromCharCode(icon.content),
            name: iconKey,
            tags: icon.tags
        });
    }).join("");
}

function setIconListToDOM(htmlIconCards) {
    const domCard = domParser.parseFromString(htmlIconCards, "text/html");
    iconListContainer.replaceChildren(...domCard.body.childNodes);
}

function searchIcon(query = "") {
    vscode.postMessage({
        type: "searchIcon",
        simple: query
    });
}

function initEvents() {
    //Send events
    inputSearch.addEventListener('keyup', (event) => {
        if (event.key !== "Enter") return;
        searchIcon(inputSearch.value);
    });
    iconListContainer.addEventListener('click', (event) => {
        const target = event.target.closest("[data-id-icon]");
        if (!target) return;
        if (!target.dataset.idIcon) return;

        vscode.postMessage({
            type: "copyIcon",
            simple: target.dataset.idIcon
        });
    });
    window.addEventListener("DOMContentLoaded", () => {
        searchIcon();
    });
    btnClearSearch.addEventListener('click', () => {
        inputSearch.value = "";
        searchIcon();
    });

    //Receive events
    let icons;
    window.addEventListener("message", (event) => {
        const receivedData = event.data;
        switch (receivedData.type) {
            case "resultSearchIcon":
                icons = receivedData.complex;
                const domIconList = generateIconList(receivedData.complex);
                setIconListToDOM(domIconList);
                break;
        }
    });
}

function init() {
    initEvents();
}

init();