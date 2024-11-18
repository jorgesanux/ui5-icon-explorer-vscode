export type SAPIconList = {
	[key: string]: number
};

export type SAPTagList = {
	[key: string]: {
		tags: string[]
	}
};

export type Icon = {
	content: number,
	tags: string[]
};

export type IconList = {
	[key: string]: Icon
}

export enum CopyType {
	URI,
	SYMBOL,
	UNICODE
}

export const icons: SAPIconList = {
	'accidental-leave': 0xe000,
	'account': 0xe001,
	'wrench': 0xe002,
	'windows-doors': 0xe003,
	'washing-machine': 0xe004,
	'visits': 0xe005,
	'video': 0xe006,
	'travel-expense': 0x1e007,
	'temperature': 0xe008,
	'task': 0x1e009,
	'synchronize': 0xe00a,
	'survey': 0x1e00b,
	'settings': 0xe00c,
	'search': 0x1e00d,
	'sales-document': 0x1e00e,
	'retail-store': 0xe00f,
	'refresh': 0xe010,
	'product': 0xe011,
	'present': 0xe012,
	'ppt-attachment': 0xe013,
	'pool': 0xe014,
	'pie-chart': 0xe015,
	'picture': 0xe016,
	'photo-voltaic': 0xe017,
	'phone': 0xe018,
	'pending': 0xe019,
	'pdf-attachment': 0x1e01a,
	'past': 0x1e01b,
	'outgoing-call': 0xe01c,
	'opportunity': 0xe01d,
	'opportunities': 0x1e01e,
	'notes': 0xe01f,
	'money-bills': 0x1e020,
	'map': 0xe021,
	'log': 0xe022,
	'line-charts': 0xe023,
	'lightbulb': 0xe024,
	'leads': 0xe025,
	'lead': 0x1e026,
	'laptop': 0xe027,
	'kpi-managing-my-area': 0x1e028,
	'kpi-corporate-performance': 0x1e029,
	'incoming-call': 0xe02a,
	'inbox': 0xe02b,
	'horizontal-bar-chart': 0xe02c,
	'history': 0xe02d,
	'heating-cooling': 0xe02e,
	'gantt-bars': 0xe02f,
	'future': 0x1e030,
	'fridge': 0xe031,
	'fallback': 0xe032,
	'expense-report': 0x1e033,
	'excel-attachment': 0xe034,
	'energy-saving-lightbulb': 0xe035,
	'employee': 0xe036,
	'email': 0xe037,
	'edit': 0xe038,
	'duplicate': 0xe039,
	'download': 0xe03a,
	'doc-attachment': 0xe03b,
	'dishwasher': 0xe03c,
	'delete': 0xe03d,
	'decline': 0xe03e,
	'complete': 0x1e03f,
	'competitor': 0xe040,
	'collections-management': 0xe041,
	'chalkboard': 0x1e042,
	'cart': 0xe043,
	'card': 0xe044,
	'camera': 0xe045,
	'calendar': 0x1e046,
	'begin': 0xe047,
	'basket': 0xe048,
	'bar-chart': 0xe049,
	'attachment': 0xe04a,
	'arrow-top': 0xe04b,
	'arrow-right': 0xe04c,
	'arrow-left': 0xe04d,
	'arrow-bottom': 0xe04e,
	'approvals': 0x1e04f,
	'appointment': 0xe050,
	'alphabetical-order': 0x1e051,
	'along-stacked-chart': 0xe052,
	'alert': 0xe053,
	'addresses': 0xe054,
	'address-book': 0x1e055,
	'add-filter': 0xe056,
	'add-favorite': 0xe057,
	'add': 0xe058,
	'activities': 0x1e059,
	'action': 0xe05a,
	'accept': 0x1e05b,
	'hint': 0x1e05c,
	'group': 0xe05d,
	'check-availability': 0x1e05e,
	'weather-proofing': 0xe05f,
	'payment-approval': 0x1e060,
	'batch-payments': 0x1e061,
	'bed': 0xe062,
	'arobase': 0x1e063,
	'family-care': 0xe064,
	'favorite': 0xe065,
	'navigation-right-arrow': 0xe066,
	'navigation-left-arrow': 0xe067,
	'e-care': 0xe068,
	'less': 0xe069,
	'lateness': 0xe06a,
	'lab': 0xe06b,
	'internet-browser': 0xe06c,
	'instance': 0xe06d,
	'inspection': 0xe06e,
	'image-viewer': 0xe06f,
	'home': 0xe070,
	'grid': 0xe071,
	'goalseek': 0xe072,
	'general-leave-request': 0xe073,
	'create-leave-request': 0xe074,
	'flight': 0xe075,
	'filter': 0xe076,
	'favorite-list': 0xe077,
	'factory': 0xe078,
	'endoscopy': 0xe079,
	'employee-pane': 0xe07a,
	'employee-approvals': 0x1e07b,
	'email-read': 0xe07c,
	'electrocardiogram': 0xe07d,
	'documents': 0xe07e,
	'decision': 0xe07f,
	'database': 0xe080,
	'customer-history': 0xe081,
	'customer': 0xe082,
	'credit-card': 0xe083,
	'create-entry-time': 0xe084,
	'contacts': 0xe085,
	'compare': 0xe086,
	'clinical-order': 0xe087,
	'chain-link': 0xe088,
	'pull-down': 0xe089,
	'cargo-train': 0xe08a,
	'car-rental': 0xe08b,
	'business-card': 0xe08c,
	'bar-code': 0xe08d,
	'folder-blank': 0xe08e,
	'passenger-train': 0xe08f,
	'question-mark': 0x1e090,
	'world': 0xe091,
	'iphone': 0xe092,
	'ipad': 0xe093,
	'warning': 0xe094,
	'sort': 0xe095,
	'course-book': 0xe096,
	'course-program': 0xe097,
	'add-coursebook': 0xe098,
	'print': 0xe099,
	'save': 0xe09a,
	'play': 0x1e09b,
	'pause': 0xe09c,
	'record': 0xe09d,
	'response': 0xe09e,
	'pushpin-on': 0xe09f,
	'pushpin-off': 0xe0a0,
	'unfavorite': 0xe0a1,
	'learning-assistant': 0xe0a2,
	'timesheet': 0xe0a3,
	'time-entry-request': 0xe0a4,
	'list': 0xe0a5,
	'action-settings': 0xe0a6,
	'share': 0xe0a7,
	'feed': 0xe0a8,
	'role': 0xe0a9,
	'flag': 0x1e0aa,
	'post': 0xe0ab,
	'inspect': 0xe0ac,
	'inspect-down': 0xe0ad,
	'appointment-2': 0xe0ae,
	'target-group': 0xe0af,
	'marketing-campaign': 0xe0b0,
	'notification': 0xe0b1,
	'message-error': 0xe0b1,
	'comment': 0xe0b2,
	'shipping-status': 0xe0b3,
	'collaborate': 0xe0b4,
	'shortcut': 0xe0b5,
	'lead-outdated': 0x1e0b6,
	'tools-opportunity': 0xe0b7,
	'permission': 0xe0b8,
	'supplier': 0xe0b9,
	'table-view': 0xe0ba,
	'table-chart': 0xe0bb,
	'switch-views': 0xe0bc,
	'e-learning': 0xe0bd,
	'manager': 0xe0be,
	'switch-classes': 0xe0bf,
	'simple-payment': 0x1e0c0,
	'signature': 0xe0c1,
	'sales-order-item': 0x1e0c2,
	'sales-order': 0x1e0c3,
	'request': 0xe0c4,
	'receipt': 0xe0c5,
	'puzzle': 0xe0c6,
	'process': 0xe0c7,
	'private': 0xe0c8,
	'popup-window': 0xe0c9,
	'person-placeholder': 0xe0ca,
	'per-diem': 0x1e0cb,
	'paper-plane': 0xe0cc,
	'paid-leave': 0x1e0cd,
	'pdf-reader': 0x1e0ce,
	'overview-chart': 0xe0cf,
	'overlay': 0xe0d0,
	'org-chart': 0xe0d1,
	'number-sign': 0xe0d2,
	'notification-2': 0xe0d3,
	'my-sales-order': 0x1e0d4,
	'meal': 0xe0d5,
	'loan': 0x1e0d6,
	'order-status': 0x1e0d7,
	'customer-order-entry': 0x1e0d8,
	'performance': 0xe0d9,
	'menu': 0xe0da,
	'employee-lookup': 0xe0db,
	'education': 0xe0dc,
	'customer-briefing': 0xe0dd,
	'customer-and-contacts': 0xe0de,
	'my-view': 0xe0df,
	'accelerated': 0xe0e0,
	'to-be-reviewed': 0xe0e1,
	'warning2': 0xe0e2,
	'feeder-arrow': 0xe0e3,
	'quality-issue': 0xe0e4,
	'workflow-tasks': 0xe0e5,
	'create': 0xe0e6,
	'home-share': 0xe0e7,
	'globe': 0x1e0e8,
	'tags': 0xe0e9,
	'work-history': 0xe0ea,
	'x-ray': 0xe0eb,
	'wounds-doc': 0xe0ec,
	'web-cam': 0xe0ed,
	'waiver': 0x1e0ee,
	'vertical-bar-chart': 0xe0ef,
	'upstacked-chart': 0xe0f0,
	'trip-report': 0xe0f1,
	'microphone': 0xe0f2,
	'unpaid-leave': 0x1e0f3,
	'tree': 0xe0f4,
	'toaster-up': 0xe0f5,
	'toaster-top': 0xe0f6,
	'toaster-down': 0xe0f7,
	'time-account': 0xe0f8,
	'theater': 0xe0f9,
	'taxi': 0xe0fa,
	'subway-train': 0xe0fb,
	'study-leave': 0xe0fc,
	'stethoscope': 0xe0fd,
	'step': 0xe0fe,
	'sonography': 0xe0ff,
	'soccor': 0xe100,
	'soccer': 0xe100,
	'physical-activity': 0xe101,
	'pharmacy': 0xe102,
	'official-service': 0xe103,
	'offsite-work': 0xe104,
	'nutrition-activity': 0xe105,
	'newspaper': 0xe106,
	'monitor-payments': 0x1e107,
	'map-2': 0xe108,
	'machine': 0xe109,
	'mri-scan': 0xe10a,
	'end-user-experience-monitoring': 0xe10b,
	'unwired': 0xe10c,
	'customer-financial-fact-sheet': 0x1e10d,
	'retail-store-manager': 0xe10e,
	'Netweaver-business-client': 0xe10f,
	'electronic-medical-record': 0xe110,
	'eam-work-order': 0x1e111,
	'customer-view': 0xe112,
	'crm-service-manager': 0xe113,
	'crm-sales': 0x1e114,
	'widgets': 0x1e115,
	'commission-check': 0x1e116,
	'collections-insight': 0x1e117,
	'clinical-tast-tracker': 0xe118,
	'clinical-task-tracker': 0xe118,
	'citizen-connect': 0xe119,
	'cart-approval': 0x1e11a,
	'capital-projects': 0x1e11b,
	'bo-strategy-management': 0xe11c,
	'business-objects-mobile': 0xe11d,
	'business-objects-explorer': 0xe11e,
	'business-objects-experience': 0xe11f,
	'bbyd-dashboard': 0xe120,
	'bbyd-active-sales': 0x1e121,
	'business-by-design': 0x1e122,
	'business-one': 0x1e123,
	'sap-box': 0xe124,
	'manager-insight': 0xe125,
	'accounting-document-verification': 0x1e126,
	'hr-approval': 0x1e127,
	'idea-wall': 0xe128,
	'Chart-Tree-Map': 0xe129,
	'cart-5': 0xe12a,
	'cart-4': 0xe12b,
	'wallet': 0xe12c,
	'vehicle-repair': 0xe12d,
	'upload': 0xe12e,
	'unlocked': 0xe12f,
	'umbrella': 0xe130,
	'travel-request': 0x1e131,
	'travel-expense-report': 0x1e132,
	'travel-itinerary': 0xe133,
	'time-overtime': 0x1e134,
	'thing-type': 0xe135,
	'technical-object': 0xe136,
	'tag': 0xe137,
	'syringe': 0xe138,
	'syntax': 0xe139,
	'suitcase': 0xe13a,
	'simulate': 0xe13b,
	'shield': 0xe13c,
	'share-2': 0xe13d,
	'sales-quote': 0x1e13e,
	'repost': 0xe13f,
	'provision': 0xe140,
	'projector': 0xe141,
	'add-product': 0xe142,
	'pipeline-analysis': 0xe143,
	'add-photo': 0xe144,
	'palette': 0xe145,
	'nurse': 0xe146,
	'sales-notification': 0x1e147,
	'mileage': 0xe148,
	'meeting-room': 0xe149,
	'media-forward': 0x1e14a,
	'media-play': 0x1e14b,
	'media-pause': 0xe14c,
	'media-reverse': 0x1e14d,
	'media-rewind': 0x1e14e,
	'measurement-document': 0xe14f,
	'measuring-point': 0xe150,
	'measure': 0xe151,
	'map-3': 0xe152,
	'locked': 0xe153,
	'letter': 0xe154,
	'journey-arrive': 0xe155,
	'journey-change': 0xe156,
	'journey-depart': 0xe157,
	'it-system': 0xe158,
	'it-instance': 0xe159,
	'it-host': 0xe15a,
	'iphone-2': 0xe15b,
	'ipad-2': 0xe15c,
	'inventory': 0xe15d,
	'insurance-house': 0xe15e,
	'insurance-life': 0xe15f,
	'insurance-car': 0xe160,
	'initiative': 0xe161,
	'incident': 0x1e162,
	'group-2': 0xe163,
	'goal': 0xe164,
	'functional-location': 0xe165,
	'full-screen': 0xe166,
	'form': 0xe167,
	'fob-watch': 0xe168,
	'blank-tag': 0xe169,
	'family-protection': 0xe16a,
	'folder': 0xe16b,
	'fax-machine': 0xe16c,
	'example': 0xe16d,
	'eraser': 0xe16e,
	'employee-rejections': 0xe16f,
	'drop-down-list': 0xe170,
	'draw-rectangle': 0xe171,
	'document': 0xe172,
	'doctor': 0xe173,
	'discussion-2': 0xe174,
	'discussion': 0xe175,
	'dimension': 0xe176,
	'customer-and-supplier': 0xe177,
	'crop': 0xe178,
	'add-contact': 0xe179,
	'compare-2': 0xe17a,
	'color-fill': 0xe17b,
	'collision': 0xe17c,
	'curriculum': 0xe17d,
	'chart-axis': 0xe17e,
	'full-stacked-chart': 0xe17f,
	'full-stacked-column-chart': 0xe180,
	'vertical-bar-chart-2': 0xe181,
	'horizontal-bar-chart-2': 0xe182,
	'horizontal-stacked-chart': 0xe183,
	'vertical-stacked-chart': 0xe184,
	'choropleth-chart': 0x1e185,
	'geographic-bubble-chart': 0x1e186,
	'multiple-radar-chart': 0xe187,
	'radar-chart': 0xe188,
	'crossed-line-chart': 0xe189,
	'multiple-line-chart': 0xe18a,
	'multiple-bar-chart': 0xe18b,
	'line-chart': 0xe18c,
	'line-chart-dual-axis': 0xe18d,
	'bubble-chart': 0xe18e,
	'scatter-chart': 0xe18f,
	'multiple-pie-chart': 0xe190,
	'column-chart-dual-axis': 0xe191,
	'tag-cloud-chart': 0xe192,
	'area-chart': 0xe193,
	'cause': 0xe194,
	'cart-3': 0xe195,
	'cart-2': 0xe196,
	'bus-public-transport': 0xe197,
	'burglary': 0xe198,
	'building': 0xe199,
	'border': 0xe19a,
	'bookmark': 0xe19b,
	'badge': 0xe19c,
	'attachment-audio': 0xe19d,
	'attachment-video': 0xe19e,
	'attachment-html': 0xe19f,
	'attachment-photo': 0xe1a0,
	'attachment-e-pub': 0xe1a1,
	'attachment-zip-file': 0xe1a2,
	'attachment-text-file': 0xe1a3,
	'add-equipment': 0xe1a4,
	'add-activity': 0x1e1a5,
	'activity-individual': 0xe1a6,
	'activity-2': 0x1e1a7,
	'add-activity-2': 0x1e1a8,
	'activity-items': 0xe1a9,
	'activity-assigned-to-goal': 0xe1aa,
	'status-completed': 0xe1ab,
	'status-positive': 0xe1ab,
	'status-error': 0xe1ac,
	'status-negative': 0xe1ac,
	'status-inactive': 0xe1ad,
	'status-in-process': 0xe1ae,
	'status-critical': 0xe1ae,
	'blank-tag-2': 0xe1af,
	'cart-full': 0xe1b0,
	'locate-me': 0xe1b1,
	'paging': 0xe1b2,
	'company-view': 0xe1b3,
	'document-text': 0xe1b4,
	'explorer': 0xe1b5,
	'personnel-view': 0xe1b6,
	'sorting-ranking': 0xe1b7,
	'drill-down': 0xe1b8,
	'drill-up': 0xe1b9,
	'vds-file': 0xe1ba,
	'sap-logo-shape': 0x1e1bb,
	'folder-full': 0xe1bc,
	'system-exit': 0xe1bd,
	'system-exit-2': 0xe1be,
	'close-command-field': 0xe1bf,
	'open-command-field': 0xe1c0,
	'sys-enter-2': 0x1e1c1,
	'sys-enter': 0x1e1c2,
	'sys-help-2': 0x1e1c3,
	'sys-help': 0x1e1c4,
	'sys-back': 0xe1c5,
	'sys-back-2': 0xe1c6,
	'sys-cancel': 0xe1c7,
	'sys-cancel-2': 0xe1c8,
	'open-folder': 0xe1c9,
	'sys-find-next': 0xe1ca,
	'sys-find': 0xe1cb,
	'sys-monitor': 0xe1cc,
	'sys-prev-page': 0xe1cd,
	'sys-first-page': 0xe1ce,
	'sys-next-page': 0xe1cf,
	'sys-last-page': 0xe1d0,
	'generate-shortcut': 0xe1d1,
	'create-session': 0xe1d2,
	'display-more': 0xe1d3,
	'enter-more': 0xe1d4,
	'zoom-in': 0xe1d5,
	'zoom-out': 0xe1d6,
	'header': 0xe1d7,
	'detail-view': 0xe1d8,
	'show-edit': 0xe1d8,
	'collapse': 0xe1d9,
	'expand': 0xe1da,
	'positive': 0xe1db,
	'negative': 0xe1dc,
	'display': 0xe1dd,
	'menu2': 0xe1de,
	'redo': 0xe1df,
	'undo': 0xe1e0,
	'navigation-up-arrow': 0xe1e1,
	'navigation-down-arrow': 0xe1e2,
	'down': 0xe1e3,
	'up': 0xe1e4,
	'shelf': 0xe1e5,
	'background': 0xe1e6,
	'resize': 0xe1e7,
	'move': 0xe1e8,
	'show': 0xe1e9,
	'hide': 0xe1ea,
	'nav-back': 0xe1eb,
	'error': 0xe1ec,
	'slim-arrow-right': 0xe1ed,
	'slim-arrow-left': 0xe1ee,
	'slim-arrow-down': 0xe1ef,
	'slim-arrow-up': 0xe1f0,
	'forward': 0xe1f1,
	'overflow': 0xe1f2,
	'value-help': 0xe1f3,
	'multi-select': 0x1e1f4,
	'exit-full-screen': 0xe1f5,
	'sys-add': 0xe1f6,
	'sys-minus': 0xe1f7,
	'dropdown': 0xe1f8,
	'expand-group': 0xe1f9,
	'vertical-grip': 0xe1fa,
	'horizontal-grip': 0xe1fb,
	'sort-descending': 0xe1fc,
	'sort-ascending': 0xe1fd,
	'arrow-down': 0xe1fe,
	'legend': 0xe1ff,
	'collapse-group': 0xe200,
	'message-warning': 0xe201,
	'message-information': 0x1e202,
	'message-success': 0x1e203,
	'restart': 0xe204,
	'stop': 0xe205,
	'add-process': 0xe206,
	'cancel-maintenance': 0xe207,
	'activate': 0xe208,
	'resize-horizontal': 0xe209,
	'resize-vertical': 0xe20a,
	'connected': 0xe20b,
	'disconnected': 0xe20c,
	'edit-outside': 0xe20d,
	'key': 0xe20e,
	'minimize': 0xe20f,
	'back-to-top': 0xe210,
	'hello-world': 0xe211,
	'outbox': 0xe212,
	'donut-chart': 0xe213,
	'heatmap-chart': 0xe214,
	'horizontal-bullet-chart': 0xe215,
	'vertical-bullet-chart': 0xe216,
	'call': 0xe217,
	'download-from-cloud': 0xe218,
	'upload-to-cloud': 0xe219,
	'jam': 0xe21a,
	'sap-ui5': 0xe21b,
	'message-popup': 0xe21c,
	'cloud': 0xe21d,
	'horizontal-waterfall-chart': 0x1e21e,
	'vertical-waterfall-chart': 0x1e21f,
	'broken-link': 0xe220,
	'headset': 0xe221,
	'thumb-up': 0x1e222,
	'thumb-down': 0x1e223,
	'multiselect-all': 0x1e224,
	'multiselect-none': 0x1e225,
	'scissors': 0xe226,
	'sound': 0x1e227,
	'sound-loud': 0x1e228,
	'sound-off': 0x1e229,
	'date-time': 0x1e22a,
	'user-settings': 0xe22b,
	'key-user-settings': 0xe22c,
	'developer-settings': 0xe22d,
	'text-formatting': 0x1e22e,
	'bold-text': 0x1e22f,
	'italic-text': 0x1e230,
	'underline-text': 0x1e231,
	'text-align-justified': 0x1e232,
	'text-align-left': 0x1e233,
	'text-align-center': 0x1e234,
	'text-align-right': 0x1e235,
	'bullet-text': 0x1e236,
	'numbered-text': 0x1e237,
	'co': 0xe238,
	'ui-notifications': 0xe239,
	'bell': 0xe23a,
	'cancel-share': 0xe23b,
	'write-new-document': 0xe23c,
	'write-new': 0xe23d,
	'cancel': 0x1e23e,
	'screen-split-one': 0xe23f,
	'screen-split-two': 0xe240,
	'screen-split-three': 0xe241,
	'customize': 0xe242,
	'user-edit': 0xe243,
	'source-code': 0xe244,
	'copy': 0xe245,
	'paste': 0xe246,
	'line-chart-time-axis': 0x1e247,
	'clear-filter': 0xe248,
	'reset': 0xe249,
	'trend-up': 0xe24a,
	'trend-down': 0xe24b,
	'cursor-arrow': 0xe24c,
	'add-document': 0xe24d,
	'create-form': 0xe24e,
	'resize-corner': 0xe24f,
	'chevron-phase': 0xe250,
	'chevron-phase-2': 0xe251,
	'rhombus-milestone': 0xe252,
	'rhombus-milestone-2': 0xe253,
	'circle-task': 0xe254,
	'circle-task-2': 0xe255,
	'project-definition-triangle': 0xe256,
	'project-definition-triangle-2': 0xe257,
	'master-task-triangle': 0xe258,
	'master-task-triangle-2': 0xe259,
	'program-triangles': 0xe25a,
	'program-triangles-2': 0xe25b,
	'mirrored-task-circle': 0xe25c,
	'mirrored-task-circle-2': 0xe25d,
	'checklist-item': 0xe25e,
	'checklist-item-2': 0xe25f,
	'checklist': 0xe260,
	'checklist-2': 0xe261,
	'chart-table-view': 0xe262,
	'filter-analytics': 0xe263,
	'filter-facets': 0xe264,
	'filter-fields': 0xe265,
	'indent': 0xe266,
	'outdent': 0xe267,
	'heading1': 0x1e268,
	'heading2': 0x1e269,
	'heading3': 0x1e26a,
	'decrease-line-height': 0xe26b,
	'increase-line-height': 0xe26c,
	'fx': 0x1e26d,
	'add-folder': 0xe26e,
	'away': 0xe26f,
	'busy': 0xe270,
	'appear-offline': 0xe271,
	'blur': 0xe272,
	'pixelate': 0xe273,
	'horizontal-combination-chart': 0xe274,
	'add-employee': 0xe275,
	'text-color': 0x1e276,
	'browse-folder': 0xe277,
	'primary-key': 0xe278,
	'two-keys': 0xe279,
	'strikethrough': 0xe27a,
	'text': 0xe27b,
	'responsive': 0xe27c,
	'desktop-mobile': 0xe27d,
	'table-row': 0xe27e,
	'table-column': 0xe27f,
	'validate': 0x1e280,
	'keyboard-and-mouse': 0xe281,
	'touch': 0xe282,
	'expand-all': 0xe283,
	'collapse-all': 0xe284,
	'combine': 0xe285,
	'split': 0xe286,
	'megamenu': 0xe287,
	'feedback': 0xe288,
	'information': 0xe289,
	's4hana': 0x1e28a,
	'translate': 0x1e28b,
	'clear-all': 0xe28c,
	'command-line-interfaces': 0xe28d,
	'sum': 0x1e28e,
	'qr-code': 0x1e28f,
	'space-navigation': 0xe290,
	'in-progress': 0x1e291,
	'not-editable': 0xe292,
	'heart': 0xe293,
	'heart-2': 0xe294,
	'tri-state': 0xe295,
	'bookmark-2': 0xe296,
	'detail-less': 0xe297,
	'detail-more': 0xe298,
	'flag-2': 0x1e299,
	'folder-2': 0xe29a,
	'paint-bucket': 0xe29b,
	'direction-arrows': 0xe29c,
	'non-binary': 0xe29d,
	'female': 0xe29e,
	'male': 0x1e29f,
	'bell-2': 0xe2a0,
	'accessibility': 0xe2a1,
	'high-priority': 0xe2a2,
	'da': 0x1e2a3,
	'da-2': 0x1e2a4,
	'ai': 0x1e2a5,
	'in-progress-2': 0x1e2a6,
	'unsynchronize': 0x1e2a7,
	'gender-male-and-female': 0x1e300,
	'rotate': 0xe301,
	'locate-me-2': 0xe302,
	'map-fill': 0xe303,
	'cloud-check': 0x1e304,
	'enablement': 0x1e305,
	'biometric-thumb': 0xe306,
	'biometric-face': 0xe307,
	'people-connected': 0xe308,
	'light-mode': 0xe309,
	'dark-mode': 0xe30a,
	'select-appointments': 0x1e30b,
	'time-off': 0xe30c,
	'add-calendar': 0xe30d,
	'currency': 0xe30e
};

export const tags: SAPTagList = {
	"accelerated": {
		"tags": [
			"calendar",
			"speed",
			"time"
		]
	},
	"accept": {
		"tags": [
			"accept",
			"affirmative",
			"approve",
			"checkmark",
			"correct",
			"tick"
		]
	},
	"accessibility": {
		"tags": [
			"accessibility",
			"accessible",
			"inclusion",
			"inclusive",
			"people",
			"person",
			"user"
		]
	},
	"accidental-leave": {
		"tags": [
			"accidental",
			"cross",
			"emergency",
			"hospital",
			"leave",
			"medical",
			"plus"
		]
	},
	"account": {
		"tags": [
			"account",
			"menu",
			"person",
			"settings",
			"user"
		]
	},
	"accounting-document-verification": {
		"tags": [
			"accounting",
			"approve",
			"coins",
			"document",
			"money",
			"verify"
		]
	},
	"action": {
		"tags": [
			"actions",
			"arrow",
			"collection",
			"forward actions",
			"more actions",
			"share options"
		]
	},
	"action-settings": {
		"tags": [
			"cogwheel",
			"configuration",
			"customize",
			"modify",
			"settings",
			"tools"
		]
	},
	"activate": {
		"tags": [
			"activate",
			"ignite",
			"initiate",
			"magic",
			"spark",
			"wand"
		]
	},
	"activities": {
		"tags": [
			"activities",
			"list",
			"tasks",
			"to do"
		]
	},
	"activity-2": {
		"tags": [
			"activities",
			"activity",
			"check list",
			"correct",
			"list",
			"success",
			"tasks",
			"tick mark",
			"to do"
		]
	},
	"activity-assigned-to-goal": {
		"tags": [
			"activities",
			"activity",
			"assigned to goal",
			"objective",
			"target",
			"tasks",
			"to do"
		]
	},
	"activity-individual": {
		"tags": [
			"activities",
			"activity",
			"individual",
			"list",
			"person",
			"tasks",
			"to do"
		]
	},
	"activity-items": {
		"tags": [
			"activities",
			"activity",
			"items",
			"list",
			"tasks",
			"to do"
		]
	},
	"add": {
		"tags": [
			"add",
			"add item",
			"add object",
			"add row",
			"additional",
			"another",
			"more",
			"plus"
		]
	},
	"add-activity": {
		"tags": [
			"activities",
			"activity",
			"add",
			"additional",
			"another",
			"list",
			"more",
			"plus",
			"tasks",
			"to do"
		]
	},
	"add-activity-2": {
		"tags": [
			"activities",
			"activity",
			"add",
			"additional",
			"another",
			"check list",
			"correct",
			"list",
			"more",
			"plus",
			"success",
			"tasks",
			"tick mark",
			"to do"
		]
	},
	"add-calendar": {
		"tags": [
			"add",
			"appointment",
			"calendar",
			"leave",
			"plus",
			"request",
			"vacation"
		]
	},
	"add-contact": {
		"tags": [
			"add",
			"additional",
			"address",
			"another",
			"business card",
			"contact",
			"customer",
			"details",
			"information",
			"more",
			"person",
			"plus"
		]
	},
	"add-coursebook": {
		"tags": [
			"add",
			"additional",
			"another",
			"bookmark",
			"course",
			"course book",
			"e book",
			"education",
			"knowledge",
			"learning",
			"more",
			"open",
			"plus",
			"program"
		]
	},
	"add-document": {
		"tags": [
			"add",
			"additional",
			"another",
			"document",
			"file",
			"more",
			"new",
			"page",
			"plus",
			"text"
		]
	},
	"add-employee": {
		"tags": [
			"add",
			"additional",
			"contacts",
			"customer",
			"employee",
			"hr",
			"human resources",
			"individual",
			"person",
			"plus",
			"user"
		]
	},
	"add-equipment": {
		"tags": [
			"add",
			"additional",
			"another",
			"configuration",
			"control",
			"more",
			"plus",
			"settings",
			"tool",
			"wrench"
		]
	},
	"add-favorite": {
		"tags": [
			"add",
			"additional",
			"another",
			"favorite",
			"favourite",
			"more",
			"plus",
			"star"
		]
	},
	"add-filter": {
		"tags": [
			"add",
			"additional",
			"aggregate",
			"another",
			"data",
			"filter",
			"more",
			"organise",
			"plus"
		]
	},
	"add-folder": {
		"tags": [
			"add",
			"additional",
			"directory",
			"folder",
			"library"
		]
	},
	"add-photo": {
		"tags": [
			"add",
			"additional",
			"another",
			"camera",
			"device",
			"image",
			"more",
			"photograph",
			"plus",
			"snap shot"
		]
	},
	"add-process": {
		"tags": [
			"add",
			"additional",
			"another",
			"more",
			"plus",
			"process"
		]
	},
	"add-product": {
		"tags": [
			"add",
			"additional",
			"another",
			"box",
			"inventory",
			"more",
			"package",
			"plus",
			"product",
			"unit"
		]
	},
	"address-book": {
		"tags": [
			"@",
			"addresses",
			"at",
			"companies",
			"contacts",
			"customers",
			"directory",
			"e-mail",
			"email"
		]
	},
	"addresses": {
		"tags": [
			"addresses",
			"companies",
			"contacts",
			"customers",
			"directory",
			"e-mail",
			"email",
			"homes",
			"houses"
		]
	},
	"ai": {
		"tags": [
			"ai",
			"artificial",
			"artificial intelligence",
			"assistance",
			"automate",
			"automation",
			"contextual understanding",
			"digital",
			"generate",
			"generic",
			"information",
			"intelligence",
			"machine",
			"machine learning",
			"magic",
			"robot",
			"situation",
			"sparkle",
			"star",
			"virtual"
		]
	},
	"alert": {
		"tags": [
			"critical",
			"message",
			"notifications",
			"status",
			"warning"
		]
	},
	"along-stacked-chart": {
		"tags": [
			"analytics",
			"bar",
			"chart",
			"data",
			"display"
		]
	},
	"alphabetical-order": {
		"tags": [
			"a to z",
			"alphabet",
			"descending",
			"function",
			"letters",
			"order",
			"sorting"
		]
	},
	"appear-offline": {
		"tags": [
			"appear-offline",
			"blocked",
			"circle",
			"hide",
			"me",
			"offline"
		]
	},
	"appointment": {
		"tags": [
			"appointment",
			"calendar",
			"date picker",
			"day",
			"month",
			"week"
		]
	},
	"appointment-2": {
		"tags": [
			"appointment",
			"calendar",
			"date picker",
			"day",
			"month",
			"week"
		]
	},
	"approvals": {
		"tags": [
			"accepted",
			"approvals",
			"checkmark",
			"details",
			"form",
			"text"
		]
	},
	"area-chart": {
		"tags": [
			"analytics",
			"area",
			"chart",
			"data",
			"display"
		]
	},
	"arobase": {
		"tags": [
			"@",
			"address",
			"at",
			"email"
		]
	},
	"arrow-bottom": {
		"tags": [
			"arrow bottom",
			"down"
		]
	},
	"arrow-down": {
		"tags": [
			"arrow",
			"circle",
			"down",
			"management",
			"megamenu",
			"options",
			"selection",
			"variant"
		]
	},
	"arrow-left": {
		"tags": [
			"arrow left"
		]
	},
	"arrow-right": {
		"tags": [
			"arrow right"
		]
	},
	"arrow-top": {
		"tags": [
			"arrow top",
			"up"
		]
	},
	"attachment": {
		"tags": [
			"attach",
			"file",
			"paper clip"
		]
	},
	"attachment-audio": {
		"tags": [
			"attachment",
			"audio",
			"document",
			"file",
			"page",
			"sound"
		]
	},
	"attachment-e-pub": {
		"tags": [
			"document",
			"e book",
			"e pub",
			"electronic publication",
			"file",
			"page"
		]
	},
	"attachment-html": {
		"tags": [
			"attachment",
			"document",
			"file",
			"html",
			"page",
			"web",
			"website"
		]
	},
	"attachment-photo": {
		"tags": [
			"attachment",
			"document",
			"file",
			"image",
			"page",
			"photo"
		]
	},
	"attachment-text-file": {
		"tags": [
			"document",
			"file",
			"page",
			"text"
		]
	},
	"attachment-video": {
		"tags": [
			"attachment",
			"document",
			"file",
			"film",
			"movie",
			"page",
			"video"
		]
	},
	"attachment-zip-file": {
		"tags": [
			"compressed",
			"document",
			"file",
			"page",
			"zip"
		]
	},
	"away": {
		"tags": [
			"appear away",
			"availability",
			"away",
			"be right back",
			"chronicle",
			"clock",
			"me",
			"off work",
			"time"
		]
	},
	"back-to-top": {
		"tags": [
			"arrow",
			"back to top",
			"beginning",
			"jump",
			"up"
		]
	},
	"background": {
		"tags": [
			"hills",
			"image",
			"mountains",
			"picture",
			"placeholder",
			"sun"
		]
	},
	"badge": {
		"tags": [
			"authority",
			"award",
			"badge",
			"coat of arms",
			"identity",
			"insignia",
			"legitimate",
			"membership",
			"rank",
			"service",
			"star"
		]
	},
	"bar-chart": {
		"tags": [
			"analytics",
			"chart",
			"column",
			"data",
			"display"
		]
	},
	"bar-code": {
		"tags": [
			"bar code",
			"document",
			"file",
			"scan",
			"verify"
		]
	},
	"basket": {
		"tags": [
			"basket",
			"shopping"
		]
	},
	"batch-payments": {
		"tags": [
			"bills",
			"documents",
			"folder",
			"money",
			"open",
			"payments"
		]
	},
	"bbyd-active-sales": {
		"tags": [
			"active",
			"approvals",
			"book",
			"business by design",
			"check",
			"sales",
			"search"
		]
	},
	"bbyd-dashboard": {
		"tags": [
			"business by design",
			"dashboard"
		]
	},
	"bed": {
		"tags": [
			"bed",
			"hospital",
			"ill",
			"medical",
			"night",
			"sick",
			"sleep",
			"snooze",
			"tired"
		]
	},
	"begin": {
		"tags": [
			"arrows",
			"begin",
			"start"
		]
	},
	"bell": {
		"tags": [
			"alarm",
			"alerts",
			"bell",
			"notify"
		]
	},
	"bell-2": {
		"tags": [
			"alarm",
			"alerts",
			"bell",
			"filled",
			"full",
			"notify"
		]
	},
	"biometric-face": {
		"tags": [
			"face",
			"faceid",
			"id",
			"recognition",
			"viewfinder"
		]
	},
	"biometric-thumb": {
		"tags": [
			"finger",
			"fingerprint",
			"id",
			"recognition",
			"thumb"
		]
	},
	"blank-tag": {
		"tags": [
			"blank",
			"indicator",
			"label",
			"marker",
			"tag"
		]
	},
	"blank-tag-2": {
		"tags": [
			"blank",
			"indicator",
			"label",
			"marker",
			"tag"
		]
	},
	"blur": {
		"tags": [
			"blur",
			"blurry",
			"distort",
			"edit",
			"effects",
			"filter",
			"image",
			"modify",
			"screenshot",
			"smudge",
			"tool"
		]
	},
	"bo-strategy-management": {
		"tags": [
			"bo strategy management",
			"business",
			"circle",
			"object"
		]
	},
	"bold-text": {
		"tags": [
			"bold",
			"bulk",
			"fat",
			"format",
			"rich-text",
			"text",
			"text decoration",
			"text edit",
			"weight"
		]
	},
	"bookmark": {
		"tags": [
			"bookmark",
			"later",
			"marker",
			"save"
		]
	},
	"bookmark-2": {
		"tags": [
			"bookmark",
			"choose me",
			"later",
			"marker",
			"not selected",
			"remove selection",
			"save",
			"unfilled"
		]
	},
	"border": {
		"tags": [
			"border",
			"outline",
			"square"
		]
	},
	"broken-link": {
		"tags": [
			"broken",
			"chain",
			"hyperlink",
			"unlink"
		]
	},
	"browse-folder": {
		"tags": [
			"browse",
			"browse folder",
			"directory",
			"find",
			"folder",
			"library",
			"look up",
			"search"
		]
	},
	"bubble-chart": {
		"tags": [
			"analytics",
			"bubble chart",
			"chart",
			"data",
			"display"
		]
	},
	"building": {
		"tags": [
			"building",
			"company",
			"factory",
			"firm",
			"office"
		]
	},
	"bullet-text": {
		"tags": [
			"bullet",
			"dots",
			"rich-text",
			"text",
			"text edit"
		]
	},
	"burglary": {
		"tags": [
			"bank",
			"burglary",
			"loss",
			"money",
			"robbery",
			"safe",
			"theft",
			"thief",
			"unsafe"
		]
	},
	"bus-public-transport": {
		"tags": [
			"bus",
			"public",
			"traffic",
			"vehicle"
		]
	},
	"business-by-design": {
		"tags": [
			"business by design"
		]
	},
	"business-card": {
		"tags": [
			"address",
			"business card",
			"colleague",
			"contact",
			"details",
			"identification",
			"networking",
			"person",
			"profile"
		]
	},
	"business-objects-experience": {
		"tags": [
			"analytics",
			"bar",
			"business objects experience",
			"chart",
			"column",
			"combination",
			"data",
			"display",
			"line-chart",
			"vertical"
		]
	},
	"business-objects-explorer": {
		"tags": [
			"business objects explorer",
			"compass"
		]
	},
	"business-objects-mobile": {
		"tags": [
			"analytics",
			"business objects mobile",
			"chart",
			"data",
			"display"
		]
	},
	"business-one": {
		"tags": [
			"business one"
		]
	},
	"busy": {
		"tags": [
			"blocked",
			"busy",
			"circle",
			"dot",
			"me",
			"not responsive",
			"unavailable",
			"working"
		]
	},
	"calendar": {
		"tags": [
			"calendar"
		]
	},
	"call": {
		"tags": [
			"call",
			"communicate",
			"phone",
			"telephone"
		]
	},
	"camera": {
		"tags": [
			"camera",
			"device",
			"image",
			"photograph",
			"snap shot"
		]
	},
	"cancel": {
		"tags": [
			"cancel",
			"do not",
			"forbidden",
			"not allowed",
			"unable"
		]
	},
	"cancel-maintenance": {
		"tags": [
			"cancel maintenance",
			"configuration",
			"control",
			"settings",
			"tool",
			"wrench"
		]
	},
	"cancel-share": {
		"tags": [
			"cancel distribution",
			"cancel share",
			"do not share with connections"
		]
	},
	"capital-projects": {
		"tags": [
			"building",
			"capital projects",
			"dollar",
			"money"
		]
	},
	"car-rental": {
		"tags": [
			"auto",
			"car",
			"company car",
			"hire",
			"rental",
			"transportation",
			"vehicle"
		]
	},
	"card": {
		"tags": [
			"card",
			"hills",
			"image",
			"mountains",
			"picture",
			"placeholder",
			"sun"
		]
	},
	"cargo-train": {
		"tags": [
			"cargo",
			"delivery",
			"train",
			"transit"
		]
	},
	"cart": {
		"tags": [
			"basket",
			"cart",
			"shopping",
			"trolley"
		]
	},
	"cart-2": {
		"tags": [
			"arrow",
			"basket",
			"cart",
			"clear",
			"empty",
			"remove",
			"shopping",
			"take out",
			"trolley",
			"up"
		]
	},
	"cart-3": {
		"tags": [
			"add",
			"arrow",
			"basket",
			"cart",
			"down",
			"insert",
			"item",
			"put in",
			"shopping",
			"trolley"
		]
	},
	"cart-4": {
		"tags": [
			"add",
			"additional",
			"another",
			"basket",
			"cart",
			"insert",
			"item",
			"more",
			"plus",
			"put in",
			"shopping",
			"trolley"
		]
	},
	"cart-5": {
		"tags": [
			"basket",
			"cart",
			"item",
			"sap",
			"shopping",
			"trolley"
		]
	},
	"cart-approval": {
		"tags": [
			"accept",
			"approval",
			"approve",
			"basket",
			"cart",
			"check",
			"item",
			"shopping",
			"trolley"
		]
	},
	"cart-full": {
		"tags": [
			"basket",
			"capacity",
			"cart",
			"full",
			"load",
			"shopping",
			"trolley"
		]
	},
	"cause": {
		"tags": [
			"arrow",
			"get",
			"incoming",
			"reason",
			"relocate",
			"take"
		]
	},
	"chain-link": {
		"tags": [
			"chain",
			"hyperlink",
			"link"
		]
	},
	"chalkboard": {
		"tags": [
			"chalkboard",
			"classroom",
			"college",
			"education",
			"learning",
			"school",
			"teaching"
		]
	},
	"chart-axis": {
		"tags": [
			"analytics",
			"arrows",
			"chart",
			"chart axis",
			"data",
			"directions",
			"display"
		]
	},
	"chart-table-view": {
		"tags": [
			"analytics",
			"chart",
			"columns",
			"data",
			"display",
			"grid",
			"rows",
			"table",
			"view",
			"waffle"
		]
	},
	"Chart-Tree-Map": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display"
		]
	},
	"check-availability": {
		"tags": [
			"appointment",
			"availability",
			"calendar",
			"check",
			"date picker",
			"day",
			"find",
			"look up",
			"month",
			"search",
			"week"
		]
	},
	"checklist": {
		"tags": [
			"analytics",
			"chart",
			"checklist",
			"data",
			"display",
			"gantt",
			"shape"
		]
	},
	"checklist-2": {
		"tags": [
			"analytics",
			"chart",
			"checklist",
			"data",
			"display",
			"gantt",
			"shape"
		]
	},
	"checklist-item": {
		"tags": [
			"analytics",
			"chart",
			"checklist",
			"data",
			"display",
			"gantt",
			"item",
			"shape"
		]
	},
	"checklist-item-2": {
		"tags": [
			"analytics",
			"chart",
			"checklist",
			"data",
			"display",
			"gantt",
			"item",
			"shape"
		]
	},
	"chevron-phase": {
		"tags": [
			"analytics",
			"chart",
			"chevron",
			"data",
			"display",
			"gantt",
			"phase",
			"shape"
		]
	},
	"chevron-phase-2": {
		"tags": [
			"analytics",
			"chart",
			"chevron",
			"data",
			"display",
			"gantt",
			"phase",
			"shape"
		]
	},
	"choropleth-chart": {
		"tags": [
			"analytics",
			"chart",
			"choropleth chart",
			"data",
			"display",
			"geographic",
			"map",
			"world"
		]
	},
	"circle-task": {
		"tags": [
			"analytics",
			"chart",
			"circle",
			"data",
			"display",
			"gantt",
			"shape",
			"task"
		]
	},
	"circle-task-2": {
		"tags": [
			"analytics",
			"chart",
			"circle",
			"data",
			"display",
			"gantt",
			"shape",
			"task"
		]
	},
	"citizen-connect": {
		"tags": [
			"citizen connect",
			"collaborate",
			"colleagues",
			"communication",
			"design thinking",
			"peer to peer",
			"people",
			"project",
			"teamwork",
			"together",
			"work"
		]
	},
	"clear-all": {
		"tags": [
			"check",
			"clear",
			"clear-all",
			"delete",
			"remove",
			"square",
			"uncheck",
			"x"
		]
	},
	"clear-filter": {
		"tags": [
			"aggregate",
			"cancel",
			"clear",
			"data",
			"delete",
			"filter",
			"organise",
			"remove"
		]
	},
	"clinical-order": {
		"tags": [
			"clinical",
			"document",
			"file",
			"medical",
			"page",
			"text"
		]
	},
	"clinical-task-tracker": {
		"tags": [
			"check boxes",
			"checklist",
			"clinical",
			"clipboard",
			"medical",
			"task",
			"tracker"
		]
	},
	"close-command-field": {
		"tags": [
			"arrow",
			"close command field",
			"left",
			"navigation",
			"page left",
			"previous"
		]
	},
	"cloud": {
		"tags": [
			"big data",
			"cloud",
			"platform",
			"sap",
			"storage"
		]
	},
	"cloud-check": {
		"tags": [
			"check",
			"cloud",
			"data"
		]
	},
	"co": {
		"tags": [
			"assistant",
			"co pilot",
			"launchpad",
			"mnemonics"
		]
	},
	"collaborate": {
		"tags": [
			"collaborate",
			"colleagues",
			"communication",
			"design thinking",
			"group",
			"peer to peer",
			"people",
			"project",
			"team",
			"teamwork",
			"together",
			"work"
		]
	},
	"collapse": {
		"tags": [
			"arrow",
			"collapse all",
			"minus",
			"ungroup all"
		]
	},
	"collapse-all": {
		"tags": [
			"all",
			"arrow",
			"close",
			"close all",
			"collapse",
			"collapse all",
			"list",
			"table",
			"tree"
		]
	},
	"collapse-group": {
		"tags": [
			"arrow",
			"collapse",
			"group",
			"move to top"
		]
	},
	"collections-insight": {
		"tags": [
			"bill",
			"billing",
			"collections",
			"dollar",
			"envelope",
			"expense",
			"insight",
			"invoice",
			"money",
			"quote",
			"report",
			"sales"
		]
	},
	"collections-management": {
		"tags": [
			"accounting",
			"calculator",
			"collections management",
			"counting",
			"simulate",
			"total"
		]
	},
	"collision": {
		"tags": [
			"accident",
			"car",
			"crash",
			"damage"
		]
	},
	"color-fill": {
		"tags": [
			"color",
			"filled",
			"square"
		]
	},
	"column-chart-dual-axis": {
		"tags": [
			"analytics",
			"chart",
			"column",
			"data",
			"display",
			"dual axis"
		]
	},
	"combine": {
		"tags": [
			"aggregate",
			"arrow",
			"arrow-right",
			"arrows-right",
			"combine",
			"combine-split",
			"glue",
			"interflow",
			"join",
			"meld",
			"merge",
			"runtime adaptation",
			"runtime authoring",
			"settings",
			"together",
			"ui adaptation",
			"unite"
		]
	},
	"command-line-interfaces": {
		"tags": [
			"code",
			"command",
			"command-line",
			"develop",
			"interfaces",
			"programming",
			"source",
			"source-code",
			"syntax",
			"technical",
			"write"
		]
	},
	"comment": {
		"tags": [
			"bubble",
			"comment",
			"discussion",
			"speech"
		]
	},
	"commission-check": {
		"tags": [
			"coins",
			"commission check",
			"money",
			"percentage",
			"search",
			"stack"
		]
	},
	"company-view": {
		"tags": [
			"company",
			"firm",
			"group",
			"overview",
			"personnel",
			"view"
		]
	},
	"compare": {
		"tags": [
			"balance",
			"compare",
			"compare",
			"comparison",
			"justice",
			"law",
			"legal",
			"measure",
			"scale",
			"weight"
		]
	},
	"compare-2": {
		"tags": [
			"balance",
			"compare",
			"comparison",
			"justice",
			"law",
			"legal",
			"measure",
			"scale",
			"weight"
		]
	},
	"competitor": {
		"tags": [
			"award",
			"competitor",
			"cup",
			"prize",
			"trophy",
			"winner"
		]
	},
	"complete": {
		"tags": [
			"affirmative",
			"checkmark",
			"complete",
			"enter",
			"finish",
			"tick"
		]
	},
	"connected": {
		"tags": [
			"connected",
			"on",
			"plug",
			"state"
		]
	},
	"contacts": {
		"tags": [
			"address",
			"companies",
			"contacts",
			"customers",
			"directory",
			"e-mail",
			"email",
			"phone book",
			"phone numbers"
		]
	},
	"copy": {
		"tags": [
			"copy",
			"document",
			"duplicate",
			"file",
			"text"
		]
	},
	"course-book": {
		"tags": [
			"bookmark",
			"course",
			"course book",
			"e book",
			"education",
			"knowledge",
			"learning",
			"open",
			"program"
		]
	},
	"course-program": {
		"tags": [
			"attachment",
			"bookmark",
			"course",
			"coursebook",
			"document",
			"e book",
			"education",
			"file",
			"knowledge",
			"learning",
			"open",
			"page",
			"program"
		]
	},
	"create": {
		"tags": [
			"attachment",
			"create",
			"document",
			"file",
			"new",
			"page"
		]
	},
	"create-entry-time": {
		"tags": [
			"add",
			"additional",
			"another",
			"attachment",
			"clock",
			"create entry time",
			"days",
			"document",
			"file",
			"hours",
			"more",
			"page",
			"plus",
			"timesheet",
			"workday"
		]
	},
	"create-form": {
		"tags": [
			"add",
			"additional",
			"another",
			"create",
			"form",
			"more",
			"new",
			"plus"
		]
	},
	"create-leave-request": {
		"tags": [
			"add",
			"additional",
			"another",
			"create",
			"deck chair",
			"holiday",
			"leave",
			"more",
			"plus",
			"request",
			"sun",
			"vacation"
		]
	},
	"create-session": {
		"tags": [
			"create",
			"session"
		]
	},
	"credit-card": {
		"tags": [
			"book online",
			"buy",
			"credit card",
			"debit",
			"master-card",
			"money",
			"order",
			"purchase",
			"shopping"
		]
	},
	"crm-sales": {
		"tags": [
			"crm sales",
			"customer",
			"list",
			"management",
			"money",
			"person",
			"relationship",
			"star"
		]
	},
	"crm-service-manager": {
		"tags": [
			"crm service manager",
			"dropdown",
			"list",
			"task"
		]
	},
	"crop": {
		"tags": [
			"clip",
			"crop",
			"cut",
			"image",
			"object",
			"picture",
			"shape",
			"snip"
		]
	},
	"crossed-line-chart": {
		"tags": [
			"analytics",
			"chart",
			"crossed line chart",
			"data",
			"display"
		]
	},
	"currency": {
		"tags": [
			"bills",
			"cash",
			"currency",
			"money",
			"payment"
		]
	},
	"curriculum": {
		"tags": [
			"content",
			"curriculum",
			"documents",
			"folder",
			"learning"
		]
	},
	"cursor-arrow": {
		"tags": [
			"arrow",
			"cursor",
			"mouse",
			"pointer",
			"select"
		]
	},
	"customer": {
		"tags": [
			"circle",
			"customer",
			"human",
			"individual",
			"me",
			"person",
			"profile",
			"user"
		]
	},
	"customer-and-contacts": {
		"tags": [
			"address",
			"contacts",
			"customer",
			"e-mail",
			"email",
			"individual",
			"person",
			"user"
		]
	},
	"customer-and-supplier": {
		"tags": [
			"buyer",
			"customer and supplier",
			"inventory",
			"package",
			"person",
			"product",
			"returns",
			"satisfaction",
			"seller",
			"warehouse"
		]
	},
	"customer-briefing": {
		"tags": [
			"address",
			"briefing",
			"contacts",
			"customer",
			"e-mail",
			"email",
			"individual",
			"person",
			"user"
		]
	},
	"customer-financial-fact-sheet": {
		"tags": [
			"attachment",
			"customer",
			"document",
			"fact sheet",
			"file",
			"financial",
			"money",
			"page"
		]
	},
	"customer-history": {
		"tags": [
			"account",
			"clock",
			"customer",
			"history",
			"person",
			"user"
		]
	},
	"customer-order-entry": {
		"tags": [
			"agreement",
			"contract",
			"customer",
			"entry",
			"order",
			"sign",
			"signature"
		]
	},
	"customer-view": {
		"tags": [
			"analytics",
			"customer",
			"overview",
			"view"
		]
	},
	"customize": {
		"tags": [
			"configuration",
			"customize",
			"equaliser",
			"fine tune",
			"modify",
			"settings",
			"settings"
		]
	},
	"da": {
		"tags": [
			"ai",
			"artificial",
			"artificial intelligence",
			"assistance",
			"assistant",
			"chatbot",
			"contextual understanding",
			"conversational ai",
			"digital",
			"intelligence",
			"machine",
			"machine learning",
			"npl",
			"NPL",
			"virtual",
			"voice recognition"
		]
	},
	"da-2": {
		"tags": [
			"ai",
			"artificial",
			"artificial intelligence",
			"assistance",
			"assistant",
			"chatbot",
			"contextual understanding",
			"conversational ai",
			"digital",
			"filled",
			"full",
			"intelligence",
			"machine",
			"machine learning",
			"npl",
			"NPL",
			"virtual",
			"voice recognition"
		]
	},
	"dark-mode": {
		"tags": [
			"dark",
			"mode",
			"moon",
			"night"
		]
	},
	"database": {
		"tags": [
			"backend",
			"big data",
			"complex",
			"complicated",
			"cube",
			"database",
			"information",
			"simple"
		]
	},
	"date-time": {
		"tags": [
			"date",
			"time"
		]
	},
	"decision": {
		"tags": [
			"agreement",
			"colleagues",
			"contract",
			"decision",
			"hand shake",
			"hands"
		]
	},
	"decline": {
		"tags": [
			"cancel",
			"close",
			"decline",
			"delete",
			"reject",
			"remove",
			"x"
		]
	},
	"decrease-line-height": {
		"tags": [
			"arrows",
			"compress",
			"decrease",
			"leading",
			"less space",
			"line height",
			"reduce",
			"rich-text",
			"spacing",
			"text edit"
		]
	},
	"delete": {
		"tags": [
			"bin",
			"delete",
			"rubbish",
			"trash can"
		]
	},
	"desktop-mobile": {
		"tags": [
			"adaptive",
			"compact",
			"cozy",
			"desktop",
			"mobile",
			"phone",
			"responsive",
			"tablet",
			"web app"
		]
	},
	"detail-less": {
		"tags": [
			"data",
			"detail",
			"hide",
			"hide detail",
			"information",
			"less",
			"popin",
			"reduce",
			"table"
		]
	},
	"detail-more": {
		"tags": [
			"data",
			"detail",
			"extend",
			"grow",
			"information",
			"more",
			"popin",
			"show",
			"show detail",
			"table"
		]
	},
	"detail-view": {
		"tags": [
			"detail",
			"find",
			"form",
			"look up",
			"search",
			"view"
		]
	},
	"developer-settings": {
		"tags": [
			"cogwheel",
			"configuration",
			"customize",
			"developer",
			"modify",
			"runtime authoring",
			"settings",
			"tools"
		]
	},
	"dimension": {
		"tags": [
			"dimension",
			"layers",
			"stacked"
		]
	},
	"direction-arrows": {
		"tags": [
			"arrow",
			"direction",
			"left",
			"right",
			"slider"
		]
	},
	"disconnected": {
		"tags": [
			"disconnected",
			"plug",
			"state",
			"unplug"
		]
	},
	"discussion": {
		"tags": [
			"blank",
			"bubble",
			"comment",
			"discussion",
			"speech"
		]
	},
	"discussion-2": {
		"tags": [
			"bubble",
			"comment",
			"discussion",
			"speech",
			"text"
		]
	},
	"dishwasher": {
		"tags": [
			"appliance",
			"dish",
			"dishwasher",
			"wash"
		]
	},
	"display": {
		"tags": [
			"details",
			"display",
			"glasses",
			"inspect",
			"spectacles"
		]
	},
	"display-more": {
		"tags": [
			"arrow",
			"details",
			"display",
			"more"
		]
	},
	"doc-attachment": {
		"tags": [
			"attachment",
			"document",
			"file",
			"page",
			"text",
			"word"
		]
	},
	"doctor": {
		"tags": [
			"cross",
			"doctor",
			"emergency",
			"hospital",
			"medical"
		]
	},
	"document": {
		"tags": [
			"attachment",
			"blank",
			"document",
			"file",
			"new",
			"page"
		]
	},
	"document-text": {
		"tags": [
			"document",
			"file",
			"page",
			"text"
		]
	},
	"documents": {
		"tags": [
			"attachment",
			"document",
			"documents",
			"file",
			"page"
		]
	},
	"donut-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display"
		]
	},
	"down": {
		"tags": [
			"down",
			"megamenu",
			"triangle"
		]
	},
	"download": {
		"tags": [
			"arrow",
			"download"
		]
	},
	"download-from-cloud": {
		"tags": [
			"arrow",
			"cloud",
			"download"
		]
	},
	"draw-rectangle": {
		"tags": [
			"create",
			"draw",
			"rectangle",
			"resize",
			"shape"
		]
	},
	"drill-down": {
		"tags": [
			"arrow",
			"detail",
			"drill down",
			"hierarchy",
			"level",
			"megamenu"
		]
	},
	"drill-up": {
		"tags": [
			"arrow",
			"detail",
			"drill up",
			"hierarchy",
			"level"
		]
	},
	"drop-down-list": {
		"tags": [
			"arrow",
			"drop down",
			"dropdown",
			"filter",
			"group",
			"list",
			"megamenu",
			"settings",
			"sort",
			"table",
			"view",
			"view settings",
			"view-settings"
		]
	},
	"dropdown": {
		"tags": [
			"arrow",
			"dropdown",
			"megamenu",
			"menu",
			"menu button"
		]
	},
	"duplicate": {
		"tags": [
			"arrow",
			"duplicate",
			"objects"
		]
	},
	"e-care": {
		"tags": [
			"digital customer care",
			"e care",
			"electronic",
			"environment",
			"health",
			"leaf",
			"leaves",
			"nature",
			"organic",
			"service"
		]
	},
	"e-learning": {
		"tags": [
			"bookmark",
			"college",
			"computer",
			"course",
			"e book",
			"e learning",
			"education",
			"knowledge",
			"open",
			"school",
			"screen"
		]
	},
	"eam-work-order": {
		"tags": [
			"check",
			"enterprise asset management",
			"hard hat",
			"order",
			"tick mark",
			"work"
		]
	},
	"edit": {
		"tags": [
			"edit",
			"modify",
			"pen",
			"pencil",
			"text",
			"write"
		]
	},
	"edit-outside": {
		"tags": [
			"arrow",
			"edit",
			"modify",
			"outside",
			"pen",
			"pencil",
			"text",
			"write"
		]
	},
	"education": {
		"tags": [
			"bookmark",
			"college",
			"course",
			"e book",
			"education",
			"knowledge",
			"learning",
			"open",
			"school"
		]
	},
	"electrocardiogram": {
		"tags": [
			"electrocardiogram",
			"heart",
			"medical",
			"monitor",
			"scan"
		]
	},
	"electronic-medical-record": {
		"tags": [
			"cross",
			"electronic medical record",
			"emergency",
			"hospital",
			"medical"
		]
	},
	"email": {
		"tags": [
			"correspondence",
			"e-mail",
			"electronic mail",
			"email",
			"envelope",
			"mail"
		]
	},
	"email-read": {
		"tags": [
			"e-mail",
			"envelope",
			"letter",
			"mail",
			"open",
			"read"
		]
	},
	"employee": {
		"tags": [
			"employee",
			"member",
			"operator",
			"person",
			"representative",
			"user"
		]
	},
	"employee-approvals": {
		"tags": [
			"accept",
			"approval",
			"employee",
			"hr",
			"human resources",
			"person"
		]
	},
	"employee-lookup": {
		"tags": [
			"contacts",
			"customer",
			"find",
			"individual",
			"look up",
			"person",
			"search",
			"user"
		]
	},
	"employee-pane": {
		"tags": [
			"employee",
			"me",
			"member",
			"operator",
			"person",
			"profile",
			"representative",
			"user"
		]
	},
	"employee-rejections": {
		"tags": [
			"employee",
			"hr",
			"human resources",
			"person",
			"rejections",
			"x"
		]
	},
	"enablement": {
		"tags": [
			"chart",
			"enable",
			"people",
			"person",
			"setting",
			"tool",
			"widgets",
			"wrench"
		]
	},
	"end-user-experience-monitoring": {
		"tags": [
			"end user experience monitoring",
			"gauge",
			"measure",
			"monitor",
			"speed"
		]
	},
	"endoscopy": {
		"tags": [
			"endoscopy",
			"medical",
			"procedure"
		]
	},
	"energy-saving-lightbulb": {
		"tags": [
			"eco",
			"energy saving",
			"idea",
			"lamp",
			"light",
			"lightbulb"
		]
	},
	"enter-more": {
		"tags": [
			"arrow",
			"details",
			"enter",
			"more"
		]
	},
	"eraser": {
		"tags": [
			"erase",
			"pen",
			"pencil",
			"remove",
			"text",
			"undo"
		]
	},
	"error": {
		"tags": [
			"error",
			"message",
			"negative",
			"notifications",
			"solid",
			"status"
		]
	},
	"example": {
		"tags": [
			"cicles",
			"dots",
			"example",
			"individual",
			"odd"
		]
	},
	"excel-attachment": {
		"tags": [
			"accounting",
			"attachment",
			"document",
			"excel",
			"file",
			"page",
			"spreadsheet"
		]
	},
	"exit-full-screen": {
		"tags": [
			"arrow",
			"exit",
			"fullscreen"
		]
	},
	"expand": {
		"tags": [
			"arrow",
			"expand all",
			"group all",
			"plus"
		]
	},
	"expand-all": {
		"tags": [
			"all",
			"arrow",
			"expand",
			"expand all",
			"list",
			"open",
			"open all",
			"table",
			"tree"
		]
	},
	"expand-group": {
		"tags": [
			"arrow",
			"expand",
			"group",
			"move to bottom"
		]
	},
	"expense-report": {
		"tags": [
			"documents",
			"dollar",
			"expense",
			"money",
			"report"
		]
	},
	"explorer": {
		"tags": [
			"compass",
			"explorer"
		]
	},
	"factory": {
		"tags": [
			"factory",
			"manufacturing",
			"production",
			"supplier"
		]
	},
	"fallback": {
		"tags": [
			"directory",
			"fallback",
			"folder",
			"library",
			"marked",
			"object"
		]
	},
	"family-care": {
		"tags": [
			"family",
			"people",
			"protection"
		]
	},
	"family-protection": {
		"tags": [
			"family",
			"house",
			"people",
			"protection",
			"roof"
		]
	},
	"favorite": {
		"tags": [
			"favorite",
			"favourite",
			"filled",
			"full",
			"star",
			"starred"
		]
	},
	"favorite-list": {
		"tags": [
			"favorite",
			"favourite",
			"list",
			"menu",
			"star"
		]
	},
	"fax-machine": {
		"tags": [
			"communicate",
			"fax",
			"machine"
		]
	},
	"feed": {
		"tags": [
			"feed",
			"input",
			"latest",
			"messages",
			"news",
			"real-time",
			"updates"
		]
	},
	"feedback": {
		"tags": [
			"callout",
			"comment",
			"feedback",
			"shell",
			"smiley",
			"speech"
		]
	},
	"feeder-arrow": {
		"tags": [
			"arrow",
			"enter text",
			"execute",
			"feeder",
			"input",
			"send"
		]
	},
	"female": {
		"tags": [
			"female",
			"gender",
			"girl",
			"shapes",
			"symbol",
			"woman"
		]
	},
	"filter": {
		"tags": [
			"aggregate",
			"data",
			"filter",
			"organise"
		]
	},
	"filter-analytics": {
		"tags": [
			"analytics",
			"chart",
			"customize",
			"data",
			"display",
			"filter",
			"organise"
		]
	},
	"filter-facets": {
		"tags": [
			"analytics",
			"chart",
			"customize",
			"data",
			"display",
			"filter",
			"organise"
		]
	},
	"filter-fields": {
		"tags": [
			"analytics",
			"chart",
			"customize",
			"data",
			"display",
			"filter",
			"organise"
		]
	},
	"flag": {
		"tags": [
			"flag",
			"important",
			"mark",
			"marker"
		]
	},
	"flag-2": {
		"tags": [
			"choose me",
			"flag",
			"important",
			"mark",
			"not selected",
			"remove marker",
			"remove selection",
			"unfilled",
			"unflag",
			"unmark"
		]
	},
	"flight": {
		"tags": [
			"Aeroplane",
			"flight",
			"holiday",
			"plane",
			"shipment",
			"transit",
			"travel",
			"trip"
		]
	},
	"fob-watch": {
		"tags": [
			"countdown",
			"fob watch",
			"stop watch",
			"time",
			"timer"
		]
	},
	"folder": {
		"tags": [
			"details",
			"directory",
			"folder",
			"library"
		]
	},
	"folder-2": {
		"tags": [
			"choose",
			"content",
			"detail",
			"filled",
			"folder",
			"full",
			"selected"
		]
	},
	"folder-blank": {
		"tags": [
			"blank",
			"directory",
			"folder",
			"library"
		]
	},
	"folder-full": {
		"tags": [
			"content",
			"contents",
			"detail",
			"directory",
			"folder",
			"full",
			"library"
		]
	},
	"form": {
		"tags": [
			"details",
			"form",
			"text"
		]
	},
	"forward": {
		"tags": [
			"arrow",
			"forward"
		]
	},
	"fridge": {
		"tags": [
			"appliance",
			"cooler",
			"freezer",
			"fridge",
			"icebox",
			"refrigerator"
		]
	},
	"full-screen": {
		"tags": [
			"arrow",
			"full",
			"screen"
		]
	},
	"full-stacked-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"full stacked chart"
		]
	},
	"full-stacked-column-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"full stacked column chart"
		]
	},
	"functional-location": {
		"tags": [
			"arrow",
			"functional",
			"locate",
			"location",
			"map",
			"me",
			"navigation",
			"pointer"
		]
	},
	"future": {
		"tags": [
			"arrow",
			"clock",
			"future",
			"hereafter",
			"time"
		]
	},
	"fx": {
		"tags": [
			"calculation",
			"conditions",
			"effects",
			"formula",
			"function",
			"fx",
			"letters",
			"mathematics",
			"sum"
		]
	},
	"gantt-bars": {
		"tags": [
			"bars",
			"calendar",
			"chart",
			"gantt",
			"gantt bars",
			"schedule"
		]
	},
	"gender-male-and-female": {
		"tags": [
			"boy",
			"female",
			"gender",
			"girl",
			"male",
			"man",
			"shapes",
			"symbol",
			"woman"
		]
	},
	"general-leave-request": {
		"tags": [
			"chair",
			"create",
			"deck",
			"holiday",
			"leave",
			"request",
			"sun",
			"vacation"
		]
	},
	"generate-shortcut": {
		"tags": [
			"arrow",
			"generate",
			"shortcut"
		]
	},
	"geographic-bubble-chart": {
		"tags": [
			"analytics",
			"bubble",
			"chart",
			"data",
			"display",
			"geographic",
			"map",
			"world"
		]
	},
	"globe": {
		"tags": [
			"earth",
			"geographical",
			"global",
			"globe",
			"international",
			"planet",
			"world"
		]
	},
	"goal": {
		"tags": [
			"aim",
			"goal",
			"objective",
			"result",
			"target"
		]
	},
	"goalseek": {
		"tags": [
			"aim",
			"goal",
			"goalseek",
			"objective",
			"result",
			"target"
		]
	},
	"grid": {
		"tags": [
			"boxes",
			"grid",
			"layout",
			"modular",
			"squares",
			"waffle"
		]
	},
	"group": {
		"tags": [
			"audience",
			"category",
			"collaborate",
			"communication",
			"customers",
			"design thinking",
			"group",
			"peer to peer",
			"people",
			"project",
			"team",
			"teamwork",
			"together",
			"work"
		]
	},
	"group-2": {
		"tags": [
			"aggregate",
			"data",
			"group",
			"list",
			"table"
		]
	},
	"header": {
		"tags": [
			"header",
			"maximize",
			"screen"
		]
	},
	"heading1": {
		"tags": [
			"h1",
			"header",
			"heading",
			"large text",
			"level 1",
			"rich-text",
			"text edit",
			"title"
		]
	},
	"heading2": {
		"tags": [
			"h2",
			"header",
			"heading",
			"large text",
			"level 2",
			"rich-text",
			"text edit",
			"title"
		]
	},
	"heading3": {
		"tags": [
			"h3",
			"header",
			"heading",
			"large text",
			"level 3",
			"rich-text",
			"text edit",
			"title"
		]
	},
	"headset": {
		"tags": [
			"call",
			"headset",
			"help",
			"listen",
			"mic",
			"support",
			"talk"
		]
	},
	"heart": {
		"tags": [
			"care",
			"choose",
			"content",
			"emotion",
			"favorite",
			"feeling",
			"filled",
			"full",
			"heart",
			"love",
			"selected"
		]
	},
	"heart-2": {
		"tags": [
			"care",
			"choose me",
			"emotion",
			"empty",
			"feeling",
			"heart",
			"love",
			"not loved",
			"not selected",
			"unfavorite",
			"unfilled",
			"unfulfilled",
			"unloved"
		]
	},
	"heating-cooling": {
		"tags": [
			"ac",
			"air conditioning",
			"cold",
			"heat",
			"snowflake",
			"sun",
			"temperature"
		]
	},
	"heatmap-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display"
		]
	},
	"hello-world": {
		"tags": [
			"bubble",
			"hello",
			"ui5",
			"world"
		]
	},
	"hide": {
		"tags": [
			"eye",
			"hide"
		]
	},
	"high-priority": {
		"tags": [
			"!",
			"alert",
			"critical",
			"exclamation",
			"message",
			"notification",
			"status",
			"warning"
		]
	},
	"hint": {
		"tags": [
			"about",
			"details",
			"hint",
			"information"
		]
	},
	"history": {
		"tags": [
			"chronicle",
			"clock",
			"history",
			"past",
			"time"
		]
	},
	"home": {
		"tags": [
			"home",
			"house",
			"index",
			"landing page",
			"main",
			"start"
		]
	},
	"home-share": {
		"tags": [
			"arrow",
			"earth",
			"geographical",
			"global distribution",
			"globe",
			"planet",
			"share",
			"world"
		]
	},
	"horizontal-bar-chart": {
		"tags": [
			"analytics",
			"bar",
			"chart",
			"data",
			"display",
			"horizontal"
		]
	},
	"horizontal-bar-chart-2": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"horizontal bar chart"
		]
	},
	"horizontal-bullet-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display"
		]
	},
	"horizontal-combination-chart": {
		"tags": [
			"analytics",
			"bar",
			"chart",
			"combination",
			"data",
			"display",
			"horizontal",
			"line-chart"
		]
	},
	"horizontal-grip": {
		"tags": [
			"grip",
			"horizontal",
			"move down",
			"move up",
			"splitter"
		]
	},
	"horizontal-stacked-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"horizontal stacked chart"
		]
	},
	"horizontal-waterfall-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display"
		]
	},
	"hr-approval": {
		"tags": [
			"accept",
			"approval",
			"employee",
			"hr",
			"human resources",
			"person"
		]
	},
	"idea-wall": {
		"tags": [
			"collaborate",
			"design thinking",
			"idea",
			"improve",
			"peer to peer",
			"project",
			"teamwork",
			"together",
			"wall",
			"work"
		]
	},
	"image-viewer": {
		"tags": [
			"carousel",
			"hills",
			"image",
			"lightbox",
			"mountains",
			"picture",
			"placeholder",
			"sun",
			"viewer"
		]
	},
	"in-progress": {
		"tags": [
			"clock",
			"current",
			"in process",
			"on-going",
			"Square",
			"status",
			"Time",
			"working"
		]
	},
	"in-progress-2": {
		"tags": [
			"clock",
			"current",
			"filled",
			"full",
			"in process",
			"on-going",
			"Square",
			"status",
			"Time",
			"working"
		]
	},
	"inbox": {
		"tags": [
			"arrow",
			"in",
			"inbox"
		]
	},
	"incident": {
		"tags": [
			"incident",
			"message",
			"question"
		]
	},
	"incoming-call": {
		"tags": [
			"arrow",
			"call",
			"communicate",
			"incoming",
			"phone",
			"telephone"
		]
	},
	"increase-line-height": {
		"tags": [
			"arrows",
			"enlarge",
			"expand",
			"increase",
			"leading",
			"line height",
			"more space",
			"rich-text",
			"spacing",
			"text edit"
		]
	},
	"indent": {
		"tags": [
			"align",
			"arrows",
			"indent",
			"move right",
			"paragraph",
			"rich-text",
			"spacing",
			"text edit"
		]
	},
	"information": {
		"tags": [
			"filled",
			"i",
			"info",
			"information",
			"message",
			"message-information",
			"notification"
		]
	},
	"initiative": {
		"tags": [
			"arrow",
			"begin",
			"circle",
			"enter",
			"initiate",
			"initiative",
			"right"
		]
	},
	"inspect": {
		"tags": [
			"arrow",
			"dialog",
			"inspect",
			"popout",
			"popup"
		]
	},
	"inspect-down": {
		"tags": [
			"cancel",
			"close",
			"dialog",
			"popup",
			"x"
		]
	},
	"inspection": {
		"tags": [
			"document",
			"inspect",
			"search"
		]
	},
	"instance": {
		"tags": [
			"chevron",
			"clock",
			"instance",
			"process"
		]
	},
	"insurance-car": {
		"tags": [
			"attachment",
			"car",
			"document",
			"file",
			"insurance",
			"page"
		]
	},
	"insurance-house": {
		"tags": [
			"attachment",
			"document",
			"file",
			"house",
			"insurance",
			"page"
		]
	},
	"insurance-life": {
		"tags": [
			"attachment",
			"document",
			"file",
			"insurance",
			"life",
			"page"
		]
	},
	"internet-browser": {
		"tags": [
			"browser",
			"globe",
			"html",
			"internet",
			"screen",
			"web app",
			"website",
			"www"
		]
	},
	"inventory": {
		"tags": [
			"inventory",
			"tools",
			"truck",
			"wrench"
		]
	},
	"ipad": {
		"tags": [
			"cozy",
			"ipad",
			"mobile",
			"portrait",
			"responsive",
			"tablet"
		]
	},
	"ipad-2": {
		"tags": [
			"cozy",
			"ipad",
			"landscape",
			"mobile",
			"responsive",
			"tablet"
		]
	},
	"iphone": {
		"tags": [
			"cozy",
			"iphone",
			"mobile",
			"phone",
			"portrait",
			"responsive",
			"smart phone",
			"tablet"
		]
	},
	"iphone-2": {
		"tags": [
			"cozy",
			"iphone",
			"landscape",
			"mobile",
			"phone",
			"responsive",
			"smart phone",
			"tablet"
		]
	},
	"it-host": {
		"tags": [
			"computer",
			"device",
			"host",
			"it",
			"machine",
			"server",
			"technology"
		]
	},
	"it-instance": {
		"tags": [
			"computer",
			"device",
			"instance",
			"it",
			"machine",
			"server",
			"technology"
		]
	},
	"it-system": {
		"tags": [
			"computer",
			"device",
			"it",
			"machine",
			"server",
			"system",
			"technology"
		]
	},
	"italic-text": {
		"tags": [
			"format",
			"italic",
			"leaning",
			"rich-text",
			"slanted",
			"text",
			"text decoration",
			"text edit"
		]
	},
	"jam": {
		"tags": [
			"collaborate",
			"jam",
			"logo",
			"sap",
			"share",
			"social"
		]
	},
	"journey-arrive": {
		"tags": [
			"arrive",
			"arrow",
			"journey",
			"placement"
		]
	},
	"journey-change": {
		"tags": [
			"arrow",
			"change",
			"direction",
			"journey",
			"placement"
		]
	},
	"journey-depart": {
		"tags": [
			"arrow",
			"depart",
			"journey",
			"move",
			"placement"
		]
	},
	"key": {
		"tags": [
			"data",
			"foreign",
			"important",
			"key",
			"lock"
		]
	},
	"key-user-settings": {
		"tags": [
			"administrator",
			"cogwheel",
			"configuration",
			"customize",
			"key user",
			"modify",
			"runtime authoring",
			"settings",
			"tools"
		]
	},
	"keyboard-and-mouse": {
		"tags": [
			"click",
			"compact",
			"condensed",
			"controls",
			"desktop",
			"devices",
			"keyboard",
			"mouse"
		]
	},
	"kpi-corporate-performance": {
		"tags": [
			"chart",
			"checkmark",
			"kpi",
			"line",
			"performance"
		]
	},
	"kpi-managing-my-area": {
		"tags": [
			"checkmark",
			"equal to",
			"kpi",
			"person",
			"user"
		]
	},
	"lab": {
		"tags": [
			"chemicals",
			"chemistry",
			"lab",
			"laboratory",
			"liquid",
			"mixture",
			"science"
		]
	},
	"laptop": {
		"tags": [
			"computer",
			"device",
			"laptop"
		]
	},
	"lateness": {
		"tags": [
			"hour glass",
			"lateness",
			"loading",
			"out of time",
			"sand",
			"time",
			"timer",
			"waiting"
		]
	},
	"lead": {
		"tags": [
			"currency",
			"dollar",
			"money",
			"payment"
		]
	},
	"lead-outdated": {
		"tags": [
			"circle",
			"dollar",
			"lead outdated"
		]
	},
	"leads": {
		"tags": [
			"equal to",
			"leads",
			"person",
			"star",
			"user"
		]
	},
	"learning-assistant": {
		"tags": [
			"assistant",
			"bookmark",
			"college",
			"course",
			"e book",
			"education",
			"help",
			"knowledge",
			"learning",
			"open",
			"professor",
			"school",
			"teacher",
			"tutor"
		]
	},
	"legend": {
		"tags": [
			"calendar",
			"charts",
			"colors",
			"description",
			"legend",
			"planning",
			"table"
		]
	},
	"less": {
		"tags": [
			"less",
			"minus",
			"subtract"
		]
	},
	"letter": {
		"tags": [
			"address",
			"contact",
			"correspondence",
			"envelope",
			"letter",
			"mail",
			"post",
			"postal"
		]
	},
	"light-mode": {
		"tags": [
			"day",
			"light",
			"mode",
			"sun",
			"sunny"
		]
	},
	"lightbulb": {
		"tags": [
			"idea",
			"lamp",
			"light",
			"lightbulb"
		]
	},
	"line-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"line chart"
		]
	},
	"line-chart-dual-axis": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"dual axis",
			"line chart"
		]
	},
	"line-chart-time-axis": {
		"tags": [
			"axis",
			"chart",
			"line",
			"time"
		]
	},
	"line-charts": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display"
		]
	},
	"list": {
		"tags": [
			"list",
			"ordered",
			"text"
		]
	},
	"loan": {
		"tags": [
			"bank",
			"dollar",
			"money bag",
			"tag"
		]
	},
	"locate-me": {
		"tags": [
			"arrow",
			"locate",
			"location",
			"map",
			"me",
			"navigation",
			"pointer"
		]
	},
	"locate-me-2": {
		"tags": [
			"arrow",
			"filled",
			"locate",
			"location",
			"map",
			"me",
			"navigation",
			"pointer"
		]
	},
	"locked": {
		"tags": [
			"forbidden",
			"in use",
			"locked",
			"padlock",
			"private",
			"restricted",
			"safe",
			"status"
		]
	},
	"log": {
		"tags": [
			"log",
			"log off",
			"log on",
			"logout"
		]
	},
	"machine": {
		"tags": [
			"factory",
			"machine",
			"production",
			"supplier",
			"technical"
		]
	},
	"male": {
		"tags": [
			"boy",
			"gender",
			"male",
			"man",
			"shapes",
			"symbol"
		]
	},
	"manager": {
		"tags": [
			"board",
			"company",
			"conference",
			"inform",
			"keynote",
			"leader",
			"manager",
			"meeting",
			"overview",
			"presentation",
			"speech"
		]
	},
	"manager-insight": {
		"tags": [
			"analyse",
			"board",
			"company",
			"inform",
			"insight",
			"manager",
			"overview",
			"report"
		]
	},
	"map": {
		"tags": [
			"area",
			"location",
			"map",
			"pin",
			"place"
		]
	},
	"map-2": {
		"tags": [
			"card",
			"destination",
			"hunt",
			"location",
			"map",
			"navigation"
		]
	},
	"map-3": {
		"tags": [
			"card",
			"destination",
			"find",
			"hunt",
			"location",
			"map",
			"navigation",
			"treasure",
			"x marks the spot"
		]
	},
	"map-fill": {
		"tags": [
			"area",
			"fill",
			"filled",
			"location",
			"map",
			"pin",
			"place",
			"solid"
		]
	},
	"marketing-campaign": {
		"tags": [
			"announcement",
			"loud speaker",
			"marketing campaign",
			"megaphone",
			"notify",
			"public address"
		]
	},
	"master-task-triangle": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"gantt",
			"master",
			"shape",
			"task",
			"triangle"
		]
	},
	"master-task-triangle-2": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"gantt",
			"master",
			"shape",
			"task",
			"triangle"
		]
	},
	"meal": {
		"tags": [
			"dine",
			"dinner",
			"eating",
			"expenses",
			"knife and fork",
			"lunch",
			"meal"
		]
	},
	"measure": {
		"tags": [
			"calculation",
			"calibrate",
			"calibration",
			"measure",
			"precision",
			"scale",
			"technical",
			"weight"
		]
	},
	"measurement-document": {
		"tags": [
			"calculation",
			"calibrate",
			"calibration",
			"measure",
			"precision",
			"scale",
			"technical",
			"weight"
		]
	},
	"measuring-point": {
		"tags": [
			"arrow",
			"measure",
			"point",
			"precision",
			"scale"
		]
	},
	"media-forward": {
		"tags": [
			"arrow",
			"end",
			"finish",
			"forward",
			"media"
		]
	},
	"media-pause": {
		"tags": [
			"arrow",
			"media",
			"pause"
		]
	},
	"media-play": {
		"tags": [
			"arrow",
			"media",
			"play"
		]
	},
	"media-reverse": {
		"tags": [
			"arrow",
			"media",
			"reverse"
		]
	},
	"media-rewind": {
		"tags": [
			"arrow",
			"back",
			"media",
			"rewind",
			"start"
		]
	},
	"meeting-room": {
		"tags": [
			"collaborate",
			"colleagues",
			"meeting",
			"peer to peer",
			"room",
			"teamwork"
		]
	},
	"megamenu": {
		"tags": [
			"arrow",
			"arrow-down",
			"arrows-down",
			"down",
			"navigation",
			"shell"
		]
	},
	"menu": {
		"tags": [
			"list",
			"menu"
		]
	},
	"menu2": {
		"tags": [
			"hamburger menu",
			"main menu",
			"menu"
		]
	},
	"message-error": {
		"tags": [
			"error",
			"message",
			"negative",
			"notifications",
			"status"
		]
	},
	"message-information": {
		"tags": [
			"information",
			"message",
			"neutral",
			"notifications",
			"status"
		]
	},
	"message-popup": {
		"tags": [
			"bubble",
			"exclamation",
			"message",
			"notifications",
			"popup",
			"speech",
			"status"
		]
	},
	"message-success": {
		"tags": [
			"message",
			"notifications",
			"positive",
			"status",
			"success"
		]
	},
	"message-warning": {
		"tags": [
			"critical",
			"message",
			"notifications",
			"status",
			"warning"
		]
	},
	"microphone": {
		"tags": [
			"announcement",
			"audio",
			"dictate",
			"keynote",
			"mic",
			"microphone",
			"record",
			"speech",
			"talk"
		]
	},
	"mileage": {
		"tags": [
			"fill up",
			"fuel",
			"gas",
			"mileage",
			"petrol",
			"station",
			"tank"
		]
	},
	"minimize": {
		"tags": [
			"hide",
			"minimize",
			"reduce",
			"screen",
			"window"
		]
	},
	"mirrored-task-circle": {
		"tags": [
			"analytics",
			"chart",
			"circle",
			"data",
			"display",
			"gantt",
			"mirrored",
			"shape",
			"task"
		]
	},
	"mirrored-task-circle-2": {
		"tags": [
			"analytics",
			"chart",
			"circle",
			"data",
			"display",
			"gantt",
			"mirrored",
			"shape",
			"task"
		]
	},
	"money-bills": {
		"tags": [
			"bills",
			"cash",
			"dollar",
			"money",
			"payment"
		]
	},
	"monitor-payments": {
		"tags": [
			"bill",
			"billing",
			"dollar",
			"envelope",
			"expense",
			"invoice",
			"money",
			"monitor payments",
			"quote",
			"report",
			"sales"
		]
	},
	"move": {
		"tags": [
			"down",
			"left",
			"move",
			"relocate",
			"right",
			"up"
		]
	},
	"mri-scan": {
		"tags": [
			"medical",
			"mri",
			"scan"
		]
	},
	"multi-select": {
		"tags": [
			"data",
			"list",
			"multi select",
			"table"
		]
	},
	"multiple-bar-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"multiple bar chart"
		]
	},
	"multiple-line-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"multiple line chart"
		]
	},
	"multiple-pie-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"multiple",
			"pie chart"
		]
	},
	"multiple-radar-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"multiple radar chart"
		]
	},
	"multiselect-all": {
		"tags": [
			"all",
			"data",
			"list",
			"multi select",
			"selected",
			"table"
		]
	},
	"multiselect-none": {
		"tags": [
			"data",
			"deselected",
			"list",
			"multi select",
			"none",
			"table"
		]
	},
	"my-sales-order": {
		"tags": [
			"bill",
			"details",
			"document",
			"invoice",
			"money",
			"order",
			"page",
			"quote",
			"sales"
		]
	},
	"my-view": {
		"tags": [
			"cutomer",
			"individual",
			"monitor",
			"my view",
			"person",
			"profile",
			"tv",
			"user",
			"video call"
		]
	},
	"nav-back": {
		"tags": [
			"arrow",
			"back",
			"navigation",
			"previous"
		]
	},
	"navigation-down-arrow": {
		"tags": [
			"arrow",
			"collapse",
			"down",
			"expanded tree",
			"megamenu",
			"navigation",
			"tree arrow"
		]
	},
	"navigation-left-arrow": {
		"tags": [
			"arrow",
			"left",
			"navigation"
		]
	},
	"navigation-right-arrow": {
		"tags": [
			"arrow",
			"collapsed tree",
			"expand",
			"navigation",
			"right",
			"tree arrow"
		]
	},
	"navigation-up-arrow": {
		"tags": [
			"arrow",
			"navigation",
			"up"
		]
	},
	"negative": {
		"tags": [
			"minus",
			"negative",
			"remove",
			"subtract"
		]
	},
	"Netweaver-business-client": {
		"tags": [
			"bird",
			"netweaver business client"
		]
	},
	"newspaper": {
		"tags": [
			"headlines",
			"latest",
			"newspaper",
			"updates"
		]
	},
	"non-binary": {
		"tags": [
			"gender",
			"non-binary",
			"shapes",
			"symbol"
		]
	},
	"not-editable": {
		"tags": [
			"crossed-out",
			"editable false",
			"not editable",
			"pencil",
			"status"
		]
	},
	"notes": {
		"tags": [
			"draft",
			"info",
			"marks",
			"notes"
		]
	},
	"notification-2": {
		"tags": [
			"bubble",
			"comment",
			"discussion",
			"notification",
			"speech"
		]
	},
	"number-sign": {
		"tags": [
			"#'",
			"hash",
			"number sign"
		]
	},
	"numbered-text": {
		"tags": [
			"1, 2, 3",
			"numbered",
			"rich-text",
			"text",
			"text edit"
		]
	},
	"nurse": {
		"tags": [
			"cross",
			"emergency",
			"hospital",
			"medical",
			"nurse"
		]
	},
	"nutrition-activity": {
		"tags": [
			"activity",
			"apple",
			"fruit",
			"health",
			"nutrition"
		]
	},
	"official-service": {
		"tags": [
			"authority",
			"court house",
			"government",
			"law",
			"legal",
			"official",
			"service"
		]
	},
	"offsite-work": {
		"tags": [
			"company",
			"external",
			"office",
			"offsite work",
			"outside"
		]
	},
	"open-command-field": {
		"tags": [
			"arrow",
			"navigation",
			"next",
			"open command field",
			"page right",
			"right"
		]
	},
	"open-folder": {
		"tags": [
			"folder",
			"open"
		]
	},
	"opportunities": {
		"tags": [
			"dollar",
			"equal to",
			"opportunity",
			"person",
			"user"
		]
	},
	"opportunity": {
		"tags": [
			"chart",
			"exchange",
			"line",
			"market",
			"opportunity",
			"star",
			"stock",
			"trade"
		]
	},
	"order-status": {
		"tags": [
			"attachment",
			"document",
			"file",
			"order",
			"page",
			"status"
		]
	},
	"org-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"map",
			"org",
			"overview",
			"tree"
		]
	},
	"outbox": {
		"tags": [
			"arrow",
			"out",
			"outbox"
		]
	},
	"outdent": {
		"tags": [
			"align",
			"arrows",
			"move left",
			"outdent",
			"paragraph",
			"rich-text",
			"spacing",
			"text edit"
		]
	},
	"outgoing-call": {
		"tags": [
			"arrow",
			"call",
			"communicate",
			"outgoing",
			"phone",
			"telephone"
		]
	},
	"overflow": {
		"tags": [
			"dots",
			"ellipsis",
			"more",
			"overflow"
		]
	},
	"overlay": {
		"tags": [
			"circle",
			"dot",
			"overlay"
		]
	},
	"overview-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"map",
			"org",
			"overview"
		]
	},
	"paging": {
		"tags": [
			"navigation",
			"paging"
		]
	},
	"paid-leave": {
		"tags": [
			"approved",
			"bill",
			"dollar",
			"money",
			"paid leave"
		]
	},
	"paint-bucket": {
		"tags": [
			"bucket",
			"color",
			"colour",
			"drop",
			"fill",
			"filled",
			"spill"
		]
	},
	"palette": {
		"tags": [
			"artist",
			"color",
			"design",
			"mixing",
			"paint",
			"palette",
			"spot",
			"theme"
		]
	},
	"paper-plane": {
		"tags": [
			"flight",
			"fly",
			"folded",
			"message",
			"note",
			"paper",
			"plane",
			"send"
		]
	},
	"passenger-train": {
		"tags": [
			"passenger",
			"public transportation",
			"train"
		]
	},
	"past": {
		"tags": [
			"bygone",
			"clock",
			"former",
			"late",
			"past",
			"time"
		]
	},
	"paste": {
		"tags": [
			"clipboards",
			"document",
			"file",
			"paste",
			"text"
		]
	},
	"pause": {
		"tags": [
			"pause"
		]
	},
	"payment-approval": {
		"tags": [
			"accept",
			"approval",
			"bill",
			"checkmark",
			"details",
			"money",
			"quote",
			"sales",
			"simple payment"
		]
	},
	"pdf-attachment": {
		"tags": [
			"attachment",
			"document",
			"file",
			"page",
			"pdf"
		]
	},
	"pdf-reader": {
		"tags": [
			"display",
			"document",
			"file",
			"pdf reader"
		]
	},
	"pending": {
		"tags": [
			"awaiting",
			"clock",
			"pend",
			"pending",
			"time",
			"unresolved",
			"unsettled"
		]
	},
	"people-connected": {
		"tags": [
			"collaborate",
			"collaboration",
			"connected",
			"connection",
			"people",
			"task-center",
			"team",
			"work"
		]
	},
	"per-diem": {
		"tags": [
			"calendar",
			"euro",
			"per diem",
			"time"
		]
	},
	"performance": {
		"tags": [
			"gauge",
			"measure",
			"monitor",
			"performance",
			"speed"
		]
	},
	"permission": {
		"tags": [
			"access",
			"document",
			"file",
			"granted",
			"open",
			"page",
			"permission",
			"restrictions",
			"unlocked"
		]
	},
	"person-placeholder": {
		"tags": [
			"customer",
			"human",
			"individual",
			"me",
			"person",
			"profile",
			"user"
		]
	},
	"personnel-view": {
		"tags": [
			"overview",
			"person",
			"personnel",
			"profile",
			"view"
		]
	},
	"pharmacy": {
		"tags": [
			"drugs",
			"medication",
			"medicine",
			"pain",
			"pharmacy",
			"pills"
		]
	},
	"phone": {
		"tags": [
			"call",
			"dial",
			"landline",
			"number",
			"phone",
			"telephone"
		]
	},
	"photo-voltaic": {
		"tags": [
			"electricity",
			"panel",
			"photovoltaic",
			"power",
			"solar",
			"sun",
			"voltaic"
		]
	},
	"physical-activity": {
		"tags": [
			"jogging",
			"physical activity",
			"run",
			"running"
		]
	},
	"picture": {
		"tags": [
			"image",
			"photo",
			"photograph",
			"picture",
			"shot"
		]
	},
	"pie-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"pie",
			"segments"
		]
	},
	"pipeline-analysis": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"kebab"
		]
	},
	"pixelate": {
		"tags": [
			"distort",
			"dots",
			"edit",
			"image",
			"modify",
			"noise",
			"pixel",
			"pixelate",
			"resolution",
			"screenshot",
			"squares",
			"tool"
		]
	},
	"play": {
		"tags": [
			"play"
		]
	},
	"pool": {
		"tags": [
			"basin",
			"pool",
			"swim"
		]
	},
	"popup-window": {
		"tags": [
			"computer",
			"dialog",
			"popout",
			"popup",
			"screen",
			"window"
		]
	},
	"positive": {
		"tags": [
			"plus",
			"positive"
		]
	},
	"post": {
		"tags": [
			"bubble",
			"comment",
			"post",
			"speech"
		]
	},
	"ppt-attachment": {
		"tags": [
			"attachment",
			"document",
			"file",
			"page",
			"powerpoint",
			"ppt"
		]
	},
	"present": {
		"tags": [
			"clock",
			"current",
			"present",
			"star",
			"time"
		]
	},
	"primary-key": {
		"tags": [
			"data",
			"important",
			"key",
			"lock",
			"primary"
		]
	},
	"print": {
		"tags": [
			"document",
			"file",
			"hard copy",
			"output",
			"paper",
			"print",
			"printer",
			"send to print"
		]
	},
	"private": {
		"tags": [
			"customer",
			"forbidden",
			"human",
			"in use",
			"individual",
			"locked",
			"occupied",
			"person",
			"private",
			"restricted",
			"user"
		]
	},
	"process": {
		"tags": [
			"arrow",
			"chevron",
			"flow",
			"process"
		]
	},
	"product": {
		"tags": [
			"commodity",
			"goods",
			"merchandise",
			"package",
			"product",
			"stock"
		]
	},
	"program-triangles": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"gantt",
			"program",
			"shape",
			"triangle"
		]
	},
	"program-triangles-2": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"gantt",
			"program",
			"shape",
			"triangle"
		]
	},
	"project-definition-triangle": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"definition",
			"display",
			"gantt",
			"project",
			"shape",
			"triangle"
		]
	},
	"project-definition-triangle-2": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"definition",
			"display",
			"gantt",
			"project",
			"shape",
			"triangle"
		]
	},
	"projector": {
		"tags": [
			"beamer",
			"keynote",
			"movie",
			"presentation",
			"projector",
			"show"
		]
	},
	"provision": {
		"tags": [
			"analytics",
			"chart",
			"columns",
			"customize",
			"data",
			"display",
			"grid",
			"modify",
			"rows",
			"settings",
			"table",
			"waffle"
		]
	},
	"pull-down": {
		"tags": [
			"arrow",
			"navigation",
			"pull down",
			"refresh"
		]
	},
	"pushpin-off": {
		"tags": [
			"off",
			"on",
			"pin",
			"pushpin",
			"remove pin",
			"snap",
			"stick",
			"unpin",
			"unstick"
		]
	},
	"pushpin-on": {
		"tags": [
			"attachment",
			"document",
			"file",
			"off",
			"on",
			"page",
			"pin",
			"pushpin",
			"remove pin",
			"snap",
			"stick",
			"unpin",
			"unstick"
		]
	},
	"puzzle": {
		"tags": [
			"challenge",
			"fit",
			"jigsaw",
			"objects",
			"pieces",
			"puzzle",
			"thinking",
			"together"
		]
	},
	"qr-code": {
		"tags": [
			"code",
			"qr",
			"qr-code",
			"qrcode",
			"scan"
		]
	},
	"quality-issue": {
		"tags": [
			"attention",
			"details",
			"problem",
			"quality issue",
			"status",
			"warning"
		]
	},
	"question-mark": {
		"tags": [
			"message",
			"neutral",
			"notifications",
			"question mark",
			"status"
		]
	},
	"radar-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"radar-chart"
		]
	},
	"receipt": {
		"tags": [
			"bill",
			"details",
			"money",
			"proof",
			"receipt",
			"sale"
		]
	},
	"record": {
		"tags": [
			"record"
		]
	},
	"redo": {
		"tags": [
			"arrow",
			"forwards",
			"history",
			"previous state",
			"redo"
		]
	},
	"refresh": {
		"tags": [
			"arrow",
			"refresh",
			"reload"
		]
	},
	"repost": {
		"tags": [
			"circulate",
			"post again"
		]
	},
	"request": {
		"tags": [
			"document",
			"edit",
			"file",
			"new",
			"page",
			"pen",
			"pencil",
			"request",
			"text",
			"write"
		]
	},
	"reset": {
		"tags": [
			"cancel",
			"reset",
			"x"
		]
	},
	"resize": {
		"tags": [
			"bigger",
			"resize",
			"smaller"
		]
	},
	"resize-corner": {
		"tags": [
			"corner",
			"dialog",
			"resize"
		]
	},
	"resize-horizontal": {
		"tags": [
			"arrows",
			"bigger",
			"column",
			"enlarge",
			"horizontal",
			"lines",
			"reduce",
			"resize",
			"screen",
			"side to side",
			"smaller"
		]
	},
	"resize-vertical": {
		"tags": [
			"arrows",
			"bigger",
			"enlarge",
			"lines",
			"reduce",
			"resize",
			"row",
			"screen",
			"smaller",
			"up and down",
			"vertical"
		]
	},
	"response": {
		"tags": [
			"arrow",
			"reply",
			"response"
		]
	},
	"responsive": {
		"tags": [
			"adaptive",
			"compact",
			"cozy",
			"desktop",
			"mobile",
			"phone",
			"tablet",
			"web app"
		]
	},
	"restart": {
		"tags": [
			"play",
			"process",
			"restart"
		]
	},
	"retail-store": {
		"tags": [
			"market",
			"retail",
			"shop",
			"store"
		]
	},
	"retail-store-manager": {
		"tags": [
			"retail store manager"
		]
	},
	"rhombus-milestone": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"gantt",
			"milestone",
			"rhombus",
			"shape"
		]
	},
	"rhombus-milestone-2": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"gantt",
			"milestone",
			"rhombus",
			"shape"
		]
	},
	"role": {
		"tags": [
			"access",
			"customer",
			"granted",
			"individual",
			"open",
			"permission",
			"person",
			"restrictions",
			"unlocked",
			"user"
		]
	},
	"rotate": {
		"tags": [
			"around",
			"arrow",
			"direction",
			"object",
			"rotate",
			"square"
		]
	},
	"s4hana": {
		"tags": [
			"HANA",
			"hana",
			"product",
			"product switch",
			"S/4",
			"S/4HANA",
			"s4",
			"s4hana",
			"switch"
		]
	},
	"sales-document": {
		"tags": [
			"document",
			"file",
			"money",
			"page",
			"sales",
			"text"
		]
	},
	"sales-notification": {
		"tags": [
			"bubble",
			"notification",
			"sales"
		]
	},
	"sales-order": {
		"tags": [
			"bill",
			"details",
			"document",
			"file",
			"money",
			"page",
			"quote",
			"sales order"
		]
	},
	"sales-order-item": {
		"tags": [
			"bill",
			"details",
			"document",
			"file",
			"money",
			"page",
			"quote",
			"sales order item"
		]
	},
	"sales-quote": {
		"tags": [
			"bill",
			"details",
			"document",
			"file",
			"money",
			"page",
			"quote",
			"sales",
			"text"
		]
	},
	"sap-box": {
		"tags": [
			"box",
			"collection",
			"container",
			"directory",
			"documents",
			"files",
			"filing",
			"storage",
			"work load"
		]
	},
	"sap-logo-shape": {
		"tags": [
			"logo",
			"sap",
			"shape"
		]
	},
	"sap-ui5": {
		"tags": [
			"development",
			"framework",
			"sap",
			"ui5"
		]
	},
	"save": {
		"tags": [
			"diskette",
			"floppy disc",
			"hard disc",
			"local disc",
			"save"
		]
	},
	"scatter-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"scatter chart"
		]
	},
	"scissors": {
		"tags": [
			"clipboards",
			"cut",
			"document",
			"file",
			"scissors",
			"text"
		]
	},
	"screen-split-one": {
		"tags": [
			"detail",
			"master",
			"screen",
			"split",
			"split app",
			"two"
		]
	},
	"screen-split-three": {
		"tags": [
			"columns",
			"screen",
			"split",
			"three"
		]
	},
	"screen-split-two": {
		"tags": [
			"half",
			"screen",
			"split",
			"two"
		]
	},
	"search": {
		"tags": [
			"glass",
			"magnifier",
			"search"
		]
	},
	"select-appointments": {
		"tags": [
			"appointment",
			"calendar",
			"check",
			"choose",
			"date picker",
			"day",
			"month",
			"select",
			"week"
		]
	},
	"settings": {
		"tags": [
			"cogwheels",
			"configuration",
			"customize",
			"modify",
			"settings",
			"tools"
		]
	},
	"share": {
		"tags": [
			"arrow",
			"distribute",
			"reshare",
			"share"
		]
	},
	"share-2": {
		"tags": [
			"distribute",
			"share",
			"share with connections"
		]
	},
	"shelf": {
		"tags": [
			"compartments",
			"drawers",
			"shelf",
			"storage"
		]
	},
	"shield": {
		"tags": [
			"authority",
			"defense",
			"important",
			"legitimate",
			"official",
			"protection",
			"security"
		]
	},
	"shipping-status": {
		"tags": [
			"delivery",
			"lorry",
			"products",
			"shipment",
			"shipping status",
			"supplier",
			"transit",
			"truck",
			"van"
		]
	},
	"shortcut": {
		"tags": [
			"arrow",
			"redirect",
			"shortcut"
		]
	},
	"show": {
		"tags": [
			"eye",
			"show"
		]
	},
	"show-edit": {
		"tags": [
			"detail",
			"find",
			"form",
			"look up",
			"search",
			"view"
		]
	},
	"signature": {
		"tags": [
			"pen",
			"pencil",
			"sign",
			"signature"
		]
	},
	"simple-payment": {
		"tags": [
			"bill",
			"details",
			"money",
			"quote",
			"sales",
			"simple payment"
		]
	},
	"simulate": {
		"tags": [
			"algorithm",
			"calculate",
			"calculation",
			"calculator",
			"count",
			"counting",
			"digits",
			"divide",
			"mathematician",
			"mathematics",
			"numbers",
			"simulate",
			"tot up"
		]
	},
	"slim-arrow-down": {
		"tags": [
			"arrow",
			"combobox",
			"down",
			"multi combobox",
			"select navigation",
			"skinny",
			"slim",
			"thin"
		]
	},
	"slim-arrow-left": {
		"tags": [
			"arrow",
			"left",
			"scroll left",
			"skinny",
			"slim",
			"thin"
		]
	},
	"slim-arrow-right": {
		"tags": [
			"arrow",
			"right",
			"scroll right",
			"skinny",
			"slim",
			"thin"
		]
	},
	"slim-arrow-up": {
		"tags": [
			"arrow",
			"skinny",
			"slim",
			"thin",
			"up"
		]
	},
	"soccer": {
		"tags": [
			"ball",
			"football",
			"soccer",
			"world cup"
		]
	},
	"sonography": {
		"tags": [
			"medical",
			"sonography",
			"ultrasonography",
			"ultrasound"
		]
	},
	"sort": {
		"tags": [
			"aggregate",
			"arrow",
			"ascending",
			"descending",
			"sort"
		]
	},
	"sort-ascending": {
		"tags": [
			"aggregate",
			"ascending",
			"sort",
			"table",
			"up"
		]
	},
	"sort-descending": {
		"tags": [
			"aggregate",
			"descending",
			"down",
			"sort",
			"table"
		]
	},
	"sorting-ranking": {
		"tags": [
			"arrow",
			"ascending",
			"descending",
			"ranking",
			"sort"
		]
	},
	"sound": {
		"tags": [
			"audio",
			"sound",
			"speaker"
		]
	},
	"sound-loud": {
		"tags": [
			"audio",
			"loud",
			"louder",
			"sound",
			"speaker"
		]
	},
	"sound-off": {
		"tags": [
			"audio",
			"cancel",
			"mute",
			"off",
			"quiet",
			"sound",
			"speaker"
		]
	},
	"source-code": {
		"tags": [
			"code",
			"develop",
			"source",
			"syntax",
			"write"
		]
	},
	"space-navigation": {
		"tags": [
			"circle",
			"line",
			"navigation",
			"shape",
			"space"
		]
	},
	"split": {
		"tags": [
			"arrow",
			"arrows-right",
			"break",
			"cleave",
			"clove",
			"cut up",
			"runtime adaptation",
			"runtime authoring",
			"separate",
			"settings",
			"split",
			"ui adaptation",
			"user"
		]
	},
	"status-critical": {
		"tags": [
			"critical",
			"in process",
			"led",
			"lifecycle",
			"street sign",
			"traffic lights",
			"warning"
		]
	},
	"status-inactive": {
		"tags": [
			"inactive",
			"information",
			"led",
			"lifecycle",
			"neutral",
			"street sign",
			"traffic lights"
		]
	},
	"status-negative": {
		"tags": [
			"attention",
			"led",
			"lifecycle",
			"negative",
			"street sign",
			"traffic lights"
		]
	},
	"status-positive": {
		"tags": [
			"completed",
			"led",
			"lifecycle",
			"on track",
			"positive",
			"street sign",
			"traffic lights"
		]
	},
	"step": {
		"tags": [
			"arrow",
			"flow",
			"process",
			"step"
		]
	},
	"stethoscope": {
		"tags": [
			"doctor",
			"health",
			"hospital",
			"medical",
			"nurse",
			"stethoscope"
		]
	},
	"stop": {
		"tags": [
			"play",
			"process",
			"stop"
		]
	},
	"strikethrough": {
		"tags": [
			"cross out",
			"edit",
			"formatting",
			"letters",
			"options",
			"review",
			"rich",
			"rich-text",
			"strike"
		]
	},
	"study-leave": {
		"tags": [
			"college",
			"education",
			"graduate",
			"qualification",
			"school",
			"student",
			"study"
		]
	},
	"subway-train": {
		"tags": [
			"subway train",
			"tube",
			"underground"
		]
	},
	"suitcase": {
		"tags": [
			"articles",
			"business trip",
			"collection",
			"items",
			"personal",
			"possessions",
			"suitcase",
			"travel"
		]
	},
	"sum": {
		"tags": [
			"addition",
			"aggregate",
			"amount",
			"covariance",
			"covariance matrix",
			"sigma",
			"sum",
			"summation",
			"total"
		]
	},
	"supplier": {
		"tags": [
			"buyer",
			"deliveries",
			"inventory",
			"package",
			"person",
			"product",
			"returns",
			"satisfaction",
			"seller",
			"supplier",
			"warehouse"
		]
	},
	"survey": {
		"tags": [
			"checkbox",
			"checklist",
			"checkmark",
			"form",
			"list",
			"survey",
			"x"
		]
	},
	"switch-classes": {
		"tags": [
			"arrange",
			"classes",
			"objects",
			"switch",
			"views"
		]
	},
	"switch-views": {
		"tags": [
			"arrange",
			"objects",
			"switch",
			"views"
		]
	},
	"synchronize": {
		"tags": [
			"arrow",
			"refresh",
			"reload",
			"synchronize"
		]
	},
	"syntax": {
		"tags": [
			"code",
			"develop",
			"source",
			"syntax",
			"write"
		]
	},
	"syringe": {
		"tags": [
			"emergency",
			"hospital",
			"injection",
			"medical",
			"needle",
			"shot",
			"syringe"
		]
	},
	"sys-add": {
		"tags": [
			"add",
			"add item",
			"add object",
			"add row",
			"additional",
			"another",
			"more",
			"plus"
		]
	},
	"sys-back": {
		"tags": [
			"arrows",
			"back",
			"system"
		]
	},
	"sys-back-2": {
		"tags": [
			"arrows",
			"back",
			"system"
		]
	},
	"sys-cancel": {
		"tags": [
			"cancel",
			"clear",
			"error",
			"message",
			"message-error",
			"notification",
			"remove",
			"status",
			"x"
		]
	},
	"sys-cancel-2": {
		"tags": [
			"cancel",
			"clear",
			"error",
			"filled",
			"message",
			"message-error",
			"notification",
			"remove",
			"status",
			"x"
		]
	},
	"sys-enter": {
		"tags": [
			"affirmative",
			"check",
			"checkmark",
			"correct",
			"enter",
			"message",
			"positive",
			"status",
			"success",
			"system",
			"tick"
		]
	},
	"sys-enter-2": {
		"tags": [
			"affirmative",
			"available",
			"check",
			"checkmark",
			"correct",
			"enter",
			"filled",
			"me",
			"message",
			"notification",
			"online",
			"positive",
			"present",
			"status",
			"success",
			"system",
			"tick"
		]
	},
	"sys-find": {
		"tags": [
			"binoculars",
			"find",
			"look up"
		]
	},
	"sys-find-next": {
		"tags": [
			"add",
			"additional",
			"another",
			"binoculars",
			"find",
			"look up",
			"more",
			"plus"
		]
	},
	"sys-first-page": {
		"tags": [
			"arrows",
			"first",
			"page",
			"system",
			"top",
			"up"
		]
	},
	"sys-help": {
		"tags": [
			"circle",
			"help",
			"question",
			"system"
		]
	},
	"sys-help-2": {
		"tags": [
			"circle",
			"filled",
			"help",
			"question",
			"system"
		]
	},
	"sys-last-page": {
		"tags": [
			"arrows",
			"bottom",
			"down",
			"last",
			"page",
			"system"
		]
	},
	"sys-minus": {
		"tags": [
			"minus",
			"remove",
			"subtract"
		]
	},
	"sys-monitor": {
		"tags": [
			"monitor",
			"screen",
			"tv"
		]
	},
	"sys-next-page": {
		"tags": [
			"arrows",
			"down",
			"next",
			"page",
			"system"
		]
	},
	"sys-prev-page": {
		"tags": [
			"arrows",
			"page",
			"previous",
			"system",
			"up"
		]
	},
	"system-exit": {
		"tags": [
			"exit",
			"system"
		]
	},
	"system-exit-2": {
		"tags": [
			"exit",
			"system"
		]
	},
	"table-chart": {
		"tags": [
			"analytics",
			"chart",
			"columns",
			"data",
			"display",
			"grid",
			"rows",
			"table",
			"view",
			"waffle"
		]
	},
	"table-column": {
		"tags": [
			"columns",
			"data",
			"display",
			"grid",
			"table",
			"table column",
			"view",
			"waffle"
		]
	},
	"table-row": {
		"tags": [
			"data",
			"display",
			"grid",
			"rows",
			"table",
			"table row",
			"view",
			"waffle"
		]
	},
	"table-view": {
		"tags": [
			"analytics",
			"chart",
			"columns",
			"data",
			"display",
			"grid",
			"rows",
			"table",
			"view",
			"waffle"
		]
	},
	"tag": {
		"tags": [
			"detail",
			"indicator",
			"label",
			"marker",
			"tag"
		]
	},
	"tag-cloud-chart": {
		"tags": [
			"analytics",
			"chart",
			"cloud",
			"data",
			"display",
			"speech",
			"tag"
		]
	},
	"tags": {
		"tags": [
			"detail",
			"indicator",
			"label",
			"marker",
			"tag"
		]
	},
	"target-group": {
		"tags": [
			"arrow",
			"audience",
			"dart",
			"dartboard",
			"goal",
			"specific",
			"target group"
		]
	},
	"task": {
		"tags": [
			"checkbox",
			"checklist",
			"checkmark",
			"clipboard",
			"list",
			"task"
		]
	},
	"taxi": {
		"tags": [
			"cab",
			"car",
			"taxi",
			"transportation"
		]
	},
	"technical-object": {
		"tags": [
			"component",
			"fine tune",
			"fix",
			"object",
			"technical",
			"tool",
			"tweak",
			"work",
			"wrench"
		]
	},
	"temperature": {
		"tags": [
			"cold",
			"cool",
			"health",
			"heat",
			"hot",
			"illness",
			"medical",
			"sickness",
			"temperature"
		]
	},
	"text": {
		"tags": [
			"edit",
			"formatting",
			"input",
			"letters",
			"rich",
			"rich-text",
			"text"
		]
	},
	"text-align-center": {
		"tags": [
			"align",
			"center",
			"rich-text",
			"text",
			"text edit"
		]
	},
	"text-align-justified": {
		"tags": [
			"align",
			"justified",
			"rich-text",
			"text",
			"text edit"
		]
	},
	"text-align-left": {
		"tags": [
			"align",
			"left",
			"rich-text",
			"text",
			"text edit"
		]
	},
	"text-align-right": {
		"tags": [
			"align",
			"rich-text",
			"right",
			"text",
			"text edit"
		]
	},
	"text-color": {
		"tags": [
			"color",
			"colour",
			"edit",
			"formatting",
			"letters",
			"options",
			"rich",
			"rich-text"
		]
	},
	"text-formatting": {
		"tags": [
			"customize",
			"format",
			"options",
			"rich-text",
			"text",
			"text decoration",
			"text edit"
		]
	},
	"theater": {
		"tags": [
			"masks",
			"play",
			"show",
			"theater"
		]
	},
	"thing-type": {
		"tags": [
			"bubble",
			"popup",
			"speech",
			"thing-type"
		]
	},
	"thumb-down": {
		"tags": [
			"dislike",
			"down",
			"negative",
			"thumbs"
		]
	},
	"thumb-up": {
		"tags": [
			"appreciate",
			"like",
			"positive",
			"thumbs",
			"up"
		]
	},
	"time-account": {
		"tags": [
			"account",
			"clock",
			"list",
			"time"
		]
	},
	"time-entry-request": {
		"tags": [
			"clock",
			"entry",
			"list",
			"request",
			"time"
		]
	},
	"time-off": {
		"tags": [
			"appointment",
			"calendar",
			"holiday",
			"leave",
			"out",
			"out-of-office",
			"request",
			"vacation"
		]
	},
	"time-overtime": {
		"tags": [
			"clock",
			"hours",
			"money",
			"overtime",
			"time"
		]
	},
	"timesheet": {
		"tags": [
			"attachment",
			"clock",
			"days",
			"document",
			"file",
			"hours",
			"page",
			"timesheet",
			"workday"
		]
	},
	"to-be-reviewed": {
		"tags": [
			"indicator",
			"information",
			"to be reviewed"
		]
	},
	"toaster-down": {
		"tags": [
			"details",
			"down",
			"toaster"
		]
	},
	"toaster-top": {
		"tags": [
			"details",
			"toaster",
			"top"
		]
	},
	"toaster-up": {
		"tags": [
			"details",
			"toaster",
			"up"
		]
	},
	"tools-opportunity": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"map",
			"org",
			"overview",
			"tree"
		]
	},
	"touch": {
		"tags": [
			"comfortable",
			"controls",
			"cozy",
			"devices",
			"finger",
			"mobile",
			"press",
			"touch"
		]
	},
	"translate": {
		"tags": [
			"A",
			"arrows",
			"letters",
			"text",
			"translate",
			"translation"
		]
	},
	"travel-expense": {
		"tags": [
			"billing",
			"budget",
			"cost",
			"dollar",
			"expense",
			"flight",
			"holiday",
			"invoice",
			"money",
			"payments",
			"plane",
			"travel",
			"trip"
		]
	},
	"travel-expense-report": {
		"tags": [
			"bill",
			"billing",
			"envelope",
			"expense",
			"invoice",
			"quote",
			"report",
			"sales",
			"travel"
		]
	},
	"travel-itinerary": {
		"tags": [
			"airplane",
			"car",
			"drive",
			"flight",
			"itinerary",
			"plan",
			"plane",
			"schedule",
			"travel"
		]
	},
	"travel-request": {
		"tags": [
			"bubble",
			"exclamation",
			"help",
			"notifications",
			"question",
			"status"
		]
	},
	"tree": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"map",
			"org",
			"overview",
			"tree"
		]
	},
	"trend-down": {
		"tags": [
			"arrow",
			"decline",
			"decrease",
			"diagonal",
			"down",
			"trend"
		]
	},
	"trend-up": {
		"tags": [
			"arrow",
			"diagonal",
			"improve",
			"increase",
			"trend",
			"up"
		]
	},
	"tri-state": {
		"tags": [
			"box",
			"list",
			"partial",
			"selected",
			"selection",
			"square",
			"state",
			"table",
			"third",
			"tree",
			"tri",
			"tri-state"
		]
	},
	"trip-report": {
		"tags": [
			"analytics",
			"business trip",
			"chart",
			"data",
			"display",
			"report",
			"suitcase",
			"trip"
		]
	},
	"two-keys": {
		"tags": [
			"data",
			"foreign",
			"important",
			"key",
			"lock",
			"primary"
		]
	},
	"ui-notifications": {
		"tags": [
			"alerts",
			"launchpad",
			"notifications",
			"notify",
			"ui"
		]
	},
	"umbrella": {
		"tags": [
			"brolly",
			"keep dry",
			"rain",
			"shelter",
			"umbrella"
		]
	},
	"underline-text": {
		"tags": [
			"format",
			"rich-text",
			"text",
			"text decoration",
			"text edit",
			"underline"
		]
	},
	"undo": {
		"tags": [
			"arrow",
			"backwards",
			"history",
			"previous state",
			"undo"
		]
	},
	"unfavorite": {
		"tags": [
			"add to favorite",
			"empty",
			"no favorite",
			"not favorite at the moment",
			"not starred",
			"remove",
			"removed",
			"star",
			"unfavorite"
		]
	},
	"unlocked": {
		"tags": [
			"access",
			"available",
			"open",
			"open padlock",
			"status",
			"unlocked",
			"unrestricted"
		]
	},
	"unpaid-leave": {
		"tags": [
			"bill",
			"dollar",
			"money",
			"rejected",
			"unpaid leave"
		]
	},
	"unsynchronize": {
		"tags": [
			"arrow",
			"disconnect",
			"unsync",
			"unsynchronize",
			"x"
		]
	},
	"unwired": {
		"tags": [
			"gauge",
			"measure",
			"monitor",
			"performance",
			"speed",
			"unwired"
		]
	},
	"up": {
		"tags": [
			"triangle",
			"up"
		]
	},
	"upload": {
		"tags": [
			"arrow",
			"upload"
		]
	},
	"upload-to-cloud": {
		"tags": [
			"arrow",
			"cloud",
			"save",
			"upload"
		]
	},
	"upstacked-chart": {
		"tags": [
			"analytics",
			"chart",
			"column",
			"data",
			"display",
			"upstacked",
			"vertical"
		]
	},
	"user-edit": {
		"tags": [
			"edit",
			"pen",
			"pencil",
			"person",
			"user"
		]
	},
	"user-settings": {
		"tags": [
			"cogwheel",
			"configuration",
			"customize",
			"modify",
			"person",
			"runtime authoring",
			"settings",
			"settings",
			"tools",
			"user"
		]
	},
	"validate": {
		"tags": [
			"approve",
			"certify",
			"check",
			"decision",
			"message",
			"reject",
			"security",
			"status",
			"validate"
		]
	},
	"value-help": {
		"tags": [
			"assistance",
			"help",
			"multi input",
			"popup",
			"value"
		]
	},
	"vds-file": {
		"tags": [
			"attachment",
			"document",
			"file",
			"page",
			"text",
			"vds",
			"Visual Design Stream"
		]
	},
	"vehicle-repair": {
		"tags": [
			"accident",
			"car",
			"crash",
			"damage",
			"fix",
			"garage",
			"repair",
			"vehicle"
		]
	},
	"vertical-bar-chart": {
		"tags": [
			"analytics",
			"bar",
			"chart",
			"column",
			"data",
			"display",
			"vertical"
		]
	},
	"vertical-bar-chart-2": {
		"tags": [
			"analytics",
			"chart",
			"column",
			"data",
			"display",
			"vertical bar chart"
		]
	},
	"vertical-bullet-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display"
		]
	},
	"vertical-grip": {
		"tags": [
			"grip",
			"move left",
			"move right",
			"splitter",
			"vertical"
		]
	},
	"vertical-stacked-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display",
			"vertical stacked chart"
		]
	},
	"vertical-waterfall-chart": {
		"tags": [
			"analytics",
			"chart",
			"data",
			"display"
		]
	},
	"video": {
		"tags": [
			"camera",
			"clip",
			"movie",
			"recorder",
			"video"
		]
	},
	"visits": {
		"tags": [
			"arrow",
			"door",
			"entry",
			"login",
			"user",
			"visit"
		]
	},
	"waiver": {
		"tags": [
			"money bag",
			"percentage",
			"waiver"
		]
	},
	"wallet": {
		"tags": [
			"allowance",
			"bank",
			"cash",
			"coins",
			"money",
			"notes",
			"purse",
			"wallet",
			"wealth",
			"worth"
		]
	},
	"warning": {
		"tags": [
			"exclamation mark",
			"indicator",
			"information",
			"warning"
		]
	},
	"warning2": {
		"tags": [
			"indicator",
			"information",
			"to be reviewed",
			"warning"
		]
	},
	"washing-machine": {
		"tags": [
			"clean",
			"laundry",
			"machine",
			"purify",
			"wash",
			"washing"
		]
	},
	"weather-proofing": {
		"tags": [
			"proofing",
			"protection",
			"weather"
		]
	},
	"web-cam": {
		"tags": [
			"camera",
			"live",
			"video",
			"visual",
			"web cam"
		]
	},
	"widgets": {
		"tags": [
			"apps",
			"dollar",
			"music",
			"plane",
			"random",
			"star",
			"widgets"
		]
	},
	"windows-doors": {
		"tags": [
			"door",
			"entry",
			"window"
		]
	},
	"work-history": {
		"tags": [
			"folder",
			"person",
			"work history"
		]
	},
	"workflow-tasks": {
		"tags": [
			"calendar",
			"process",
			"project",
			"steps",
			"task",
			"workflow"
		]
	},
	"world": {
		"tags": [
			"earth",
			"geographical",
			"global",
			"globe",
			"international",
			"planet",
			"world"
		]
	},
	"wounds-doc": {
		"tags": [
			"accident",
			"cross",
			"doc",
			"emergency",
			"health",
			"hospital",
			"illness",
			"injury",
			"patient",
			"wounds"
		]
	},
	"wrench": {
		"tags": [
			"configuration",
			"control",
			"settings",
			"tool",
			"wrench"
		]
	},
	"write-new": {
		"tags": [
			"create",
			"new",
			"pen",
			"pencil",
			"write"
		]
	},
	"write-new-document": {
		"tags": [
			"document",
			"edit",
			"file",
			"new",
			"page",
			"pen",
			"pencil",
			"text",
			"write"
		]
	},
	"x-ray": {
		"tags": [
			"medical",
			"procedure",
			"scan",
			"x ray"
		]
	},
	"zoom-in": {
		"tags": [
			"bigger",
			"enlarge",
			"glass",
			"in",
			"magnify",
			"plus",
			"zoom"
		]
	},
	"zoom-out": {
		"tags": [
			"glass",
			"minus",
			"out",
			"reduce",
			"smaller",
			"zoom"
		]
	}
};