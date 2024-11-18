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
	"pharmacy": {
		"tags": [
			"medicine",
			"pills",
			"drugs",
			"pharmacy",
			"pain",
			"medication"
		]
	},
	"message-success": {
		"tags": [
			"message",
			"success",
			"positive",
			"notifications",
			"status"
		]
	},
	"hr-approval": {
		"tags": [
			"person",
			"accept",
			"approval",
			"employee",
			"hr",
			"human resources"
		]
	},
	"sales-order": {
		"tags": [
			"document",
			"page",
			"file",
			"sales order",
			"money",
			"bill",
			"details",
			"quote"
		]
	},
	"share-2": {
		"tags": [
			"share",
			"distribute",
			"share with connections"
		]
	},
	"customer-and-contacts": {
		"tags": [
			"customer",
			"user",
			"person",
			"individual",
			"contacts",
			"address",
			"email",
			"e-mail"
		]
	},
	"horizontal-waterfall-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"question-mark": {
		"tags": [
			"message",
			"question mark",
			"neutral",
			"notifications",
			"status"
		]
	},
	"collections-management": {
		"tags": [
			"calculator",
			"counting",
			"simulate",
			"collections management",
			"total",
			"accounting"
		]
	},
	"cargo-train": {
		"tags": [
			"train",
			"cargo",
			"delivery",
			"transit"
		]
	},
	"search": {
		"tags": [
			"search",
			"magnifier",
			"glass"
		]
	},
	"sales-order-item": {
		"tags": [
			"document",
			"page",
			"file",
			"sales order item",
			"money",
			"bill",
			"details",
			"quote"
		]
	},
	"multiple-radar-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"multiple radar chart"
		]
	},
	"business-card": {
		"tags": [
			"business card",
			"contact",
			"networking",
			"colleague",
			"person",
			"address",
			"identification",
			"details",
			"profile"
		]
	},
	"warning2": {
		"tags": [
			"warning",
			"to be reviewed",
			"indicator",
			"information"
		]
	},
	"role": {
		"tags": [
			"person",
			"individual",
			"user",
			"customer",
			"permission",
			"access",
			"granted",
			"open",
			"restrictions",
			"unlocked"
		]
	},
	"paging": {
		"tags": [
			"paging",
			"navigation"
		]
	},
	"video": {
		"tags": [
			"camera",
			"recorder",
			"video",
			"movie",
			"clip"
		]
	},
	"collision": {
		"tags": [
			"car",
			"crash",
			"accident",
			"damage"
		]
	},
	"create-form": {
		"tags": [
			"create",
			"form",
			"new",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"message-error": {
		"tags": [
			"message",
			"error",
			"negative",
			"notifications",
			"status"
		]
	},
	"cart-approval": {
		"tags": [
			"cart",
			"trolley",
			"basket",
			"shopping",
			"item",
			"approve",
			"approval",
			"accept",
			"check"
		]
	},
	"image-viewer": {
		"tags": [
			"image",
			"placeholder",
			"picture",
			"hills",
			"mountains",
			"sun",
			"viewer",
			"carousel",
			"lightbox"
		]
	},
	"manager-insight": {
		"tags": [
			"manager",
			"insight",
			"company",
			"overview",
			"analyse",
			"inform",
			"board",
			"report"
		]
	},
	"microphone": {
		"tags": [
			"microphone",
			"mic",
			"keynote",
			"announcement",
			"speech",
			"talk",
			"audio",
			"dictate",
			"record"
		]
	},
	"duplicate": {
		"tags": [
			"duplicate",
			"objects",
			"arrow"
		]
	},
	"sort-descending": {
		"tags": [
			"sort",
			"descending",
			"down",
			"table",
			"aggregate"
		]
	},
	"theater": {
		"tags": [
			"theater",
			"show",
			"play",
			"masks"
		]
	},
	"doc-attachment": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"word",
			"text"
		]
	},
	"header": {
		"tags": [
			"maximize",
			"header",
			"screen"
		]
	},
	"sound-loud": {
		"tags": [
			"sound",
			"audio",
			"audio",
			"speaker",
			"loud",
			"louder"
		]
	},
	"lead-outdated": {
		"tags": [
			"lead outdated",
			"circle",
			"dollar"
		]
	},
	"fallback": {
		"tags": [
			"folder",
			"fallback",
			"marked",
			"object"
		]
	},
	"blank-tag": {
		"tags": [
			"tag",
			"label",
			"marker",
			"indicator",
			"blank"
		]
	},
	"horizontal-bar-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"bar",
			"horizontal"
		]
	},
	"per-diem": {
		"tags": [
			"euro",
			"time",
			"per diem",
			"calendar"
		]
	},
	"multiple-line-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"multiple line chart"
		]
	},
	"paste": {
		"tags": [
			"paste",
			"document",
			"clipboards",
			"file",
			"text"
		]
	},
	"toaster-down": {
		"tags": [
			"toaster",
			"down",
			"details"
		]
	},
	"business-by-design": {
		"tags": [
			"business by design"
		]
	},
	"activity-individual": {
		"tags": [
			"activity",
			"activities",
			"tasks",
			"to do",
			"list",
			"individual",
			"person"
		]
	},
	"add-document": {
		"tags": [
			"document",
			"page",
			"file",
			"text",
			"new",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"inbox": {
		"tags": [
			"inbox",
			"in",
			"arrow"
		]
	},
	"full-screen": {
		"tags": [
			"full",
			"screen",
			"arrow"
		]
	},
	"batch-payments": {
		"tags": [
			"folder",
			"open",
			"money",
			"documents"
		]
	},
	"feeder-arrow": {
		"tags": [
			"feeder",
			"arrow",
			"input",
			"enter text",
			"execute",
			"send"
		]
	},
	"sap-logo-shape": {
		"tags": [
			"sap",
			"logo",
			"shape"
		]
	},
	"travel-expense": {
		"tags": [
			"plane",
			"dollar",
			"money",
			"trip",
			"expense",
			"travel",
			"holiday",
			"flight",
			"budget",
			"billing",
			"invoice",
			"cost",
			"payments"
		]
	},
	"status-negative": {
		"tags": [
			"negative",
			"attention",
			"led",
			"traffic lights",
			"street sign",
			"lifecycle"
		]
	},
	"photo-voltaic": {
		"tags": [
			"photovoltaic",
			"voltaic",
			"electricity",
			"power",
			"solar",
			"panel",
			"sun"
		]
	},
	"cancel-maintenance": {
		"tags": [
			"wrench",
			"control",
			"configuration",
			"settings",
			"tool",
			"cancel maintenance"
		]
	},
	"sys-find-next": {
		"tags": [
			"find",
			"binoculars",
			"look up",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"text-align-justified": {
		"tags": [
			"align",
			"text",
			"justified",
			"text edit",
			"rich-text"
		]
	},
	"map": {
		"tags": [
			"map",
			"pin",
			"location",
			"place",
			"area"
		]
	},
	"internet-browser": {
		"tags": [
			"screen",
			"internet",
			"website",
			"browser",
			"web app",
			"globe",
			"www",
			"html"
		]
	},
	"bubble-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"bubble chart"
		]
	},
	"meeting-room": {
		"tags": [
			"meeting",
			"room",
			"collaborate",
			"colleagues",
			"teamwork",
			"peer to peer"
		]
	},
	"synchronize": {
		"tags": [
			"synchronize",
			"reload",
			"refresh",
			"arrow"
		]
	},
	"org-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"overview",
			"map",
			"org",
			"tree"
		]
	},
	"tags": {
		"tags": [
			"tag",
			"label",
			"marker",
			"indicator",
			"detail"
		]
	},
	"trend-down": {
		"tags": [
			"trend",
			"down",
			"diagonal",
			"decrease",
			"decline",
			"arrow"
		]
	},
	"value-help": {
		"tags": [
			"value",
			"help",
			"popup",
			"assistance",
			"multi input"
		]
	},
	"developer-settings": {
		"tags": [
			"settings",
			"cogwheel",
			"configuration",
			"settings",
			"tools",
			"modify",
			"customize",
			"developer",
			"runtime authoring"
		]
	},
	"time-account": {
		"tags": [
			"time",
			"account",
			"clock",
			"list"
		]
	},
	"rhombus-milestone": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"rhombus",
			"milestone"
		]
	},
	"add-contact": {
		"tags": [
			"person",
			"contact",
			"business card",
			"customer",
			"details",
			"address",
			"information",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"pushpin-on": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"pin",
			"pushpin",
			"stick",
			"unstick",
			"snap",
			"remove pin",
			"unpin",
			"off",
			"on"
		]
	},
	"full-stacked-column-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"full stacked column chart"
		]
	},
	"history": {
		"tags": [
			"time",
			"clock",
			"history",
			"past",
			"chronicle"
		]
	},
	"drop-down-list": {
		"tags": [
			"dropdown",
			"list",
			"arrow",
			"megamenu"
		]
	},
	"target-group": {
		"tags": [
			"arrow",
			"dart",
			"dartboard",
			"target group",
			"goal",
			"audience",
			"specific"
		]
	},
	"travel-itinerary": {
		"tags": [
			"travel",
			"airplane",
			"plane",
			"car",
			"itinerary",
			"schedule",
			"plan",
			"flight",
			"drive"
		]
	},
	"legend": {
		"tags": [
			"legend",
			"description",
			"colors",
			"charts",
			"table",
			"planning",
			"calendar"
		]
	},
	"background": {
		"tags": [
			"image",
			"placeholder",
			"picture",
			"hills",
			"mountains",
			"sun"
		]
	},
	"notes": {
		"tags": [
			"notes",
			"marks",
			"info",
			"draft"
		]
	},
	"menu2": {
		"tags": [
			"menu",
			"hamburger menu",
			"main menu"
		]
	},
	"business-objects-mobile": {
		"tags": [
			"business objects mobile",
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"settings": {
		"tags": [
			"cogwheels",
			"configuration",
			"settings",
			"tools",
			"modify",
			"customize"
		]
	},
	"switch-views": {
		"tags": [
			"switch",
			"views",
			"objects",
			"arrange"
		]
	},
	"vds-file": {
		"tags": [
			"document",
			"page",
			"file",
			"text",
			"attachment",
			"Visual Design Stream",
			"vds"
		]
	},
	"lead": {
		"tags": [
			"money",
			"dollar",
			"currency",
			"payment"
		]
	},
	"add-equipment": {
		"tags": [
			"wrench",
			"control",
			"configuration",
			"settings",
			"tool",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"wallet": {
		"tags": [
			"money",
			"wallet",
			"purse",
			"coins",
			"bank",
			"allowance",
			"worth",
			"wealth",
			"cash",
			"notes"
		]
	},
	"doctor": {
		"tags": [
			"doctor",
			"medical",
			"cross",
			"emergency",
			"hospital"
		]
	},
	"pause": {
		"tags": [
			"pause"
		]
	},
	"idea-wall": {
		"tags": [
			"idea",
			"wall",
			"collaborate",
			"teamwork",
			"peer to peer",
			"design thinking",
			"work",
			"together",
			"project",
			"improve"
		]
	},
	"media-reverse": {
		"tags": [
			"reverse",
			"media",
			"arrow"
		]
	},
	"vertical-stacked-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"vertical stacked chart"
		]
	},
	"future": {
		"tags": [
			"time",
			"clock",
			"arrow",
			"future",
			"hereafter"
		]
	},
	"measurement-document": {
		"tags": [
			"measure",
			"weight",
			"scale",
			"precision",
			"technical",
			"calibrate",
			"calibration",
			"calculation"
		]
	},
	"jam": {
		"tags": [
			"sap",
			"logo",
			"jam",
			"social",
			"collaborate",
			"share"
		]
	},
	"sys-help": {
		"tags": [
			"system",
			"help",
			"circle",
			"question"
		]
	},
	"clinical-order": {
		"tags": [
			"document",
			"page",
			"file",
			"text",
			"medical",
			"clinical"
		]
	},
	"wrench": {
		"tags": [
			"wrench",
			"control",
			"configuration",
			"settings",
			"tool"
		]
	},
	"key": {
		"tags": [
			"key",
			"data",
			"lock",
			"important"
		]
	},
	"umbrella": {
		"tags": [
			"rain",
			"umbrella",
			"brolly",
			"shelter",
			"keep dry"
		]
	},
	"display": {
		"tags": [
			"display",
			"details",
			"inspect",
			"spectacles",
			"glasses"
		]
	},
	"navigation-down-arrow": {
		"tags": [
			"navigation",
			"down",
			"collapse",
			"expanded tree",
			"tree arrow",
			"arrow",
			"megamenu"
		]
	},
	"screen-split-two": {
		"tags": [
			"screen",
			"split",
			"two",
			"half"
		]
	},
	"media-play": {
		"tags": [
			"play",
			"media",
			"arrow"
		]
	},
	"co": {
		"tags": [
			"co pilot",
			"mnemonics",
			"assistant",
			"launchpad"
		]
	},
	"lightbulb": {
		"tags": [
			"lightbulb",
			"light",
			"lamp",
			"idea"
		]
	},
	"overflow": {
		"tags": [
			"overflow",
			"dots",
			"ellipsis",
			"more"
		]
	},
	"drill-down": {
		"tags": [
			"drill down",
			"arrow",
			"detail",
			"hierarchy",
			"level",
			"megamenu"
		]
	},
	"capital-projects": {
		"tags": [
			"capital projects",
			"building",
			"dollar",
			"money"
		]
	},
	"factory": {
		"tags": [
			"factory",
			"production",
			"supplier",
			"manufacturing"
		]
	},
	"paper-plane": {
		"tags": [
			"send",
			"flight",
			"paper",
			"plane",
			"fly",
			"message",
			"note",
			"folded"
		]
	},
	"pdf-reader": {
		"tags": [
			"pdf reader",
			"document",
			"display",
			"file"
		]
	},
	"example": {
		"tags": [
			"example",
			"dots",
			"cicles",
			"individual",
			"odd"
		]
	},
	"curriculum": {
		"tags": [
			"folder",
			"curriculum",
			"learning",
			"documents",
			"content"
		]
	},
	"washing-machine": {
		"tags": [
			"washing",
			"machine",
			"laundry",
			"clean",
			"wash",
			"purify"
		]
	},
	"locate-me": {
		"tags": [
			"arrow",
			"locate",
			"me",
			"map",
			"location",
			"pointer",
			"navigation"
		]
	},
	"simulate": {
		"tags": [
			"calculator",
			"calculate",
			"count",
			"numbers",
			"counting",
			"simulate",
			"divide",
			"calculation",
			"tot up",
			"digits",
			"algorithm",
			"mathematician",
			"mathematics"
		]
	},
	"measure": {
		"tags": [
			"measure",
			"weight",
			"scale",
			"precision",
			"technical",
			"calibrate",
			"calibration",
			"calculation"
		]
	},
	"date-time": {
		"tags": [
			"date",
			"time"
		]
	},
	"ipad": {
		"tags": [
			"ipad",
			"tablet",
			"portrait",
			"mobile",
			"responsive",
			"cozy"
		]
	},
	"horizontal-stacked-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"horizontal stacked chart"
		]
	},
	"sales-document": {
		"tags": [
			"document",
			"page",
			"file",
			"text",
			"sales",
			"money"
		]
	},
	"collapse-group": {
		"tags": [
			"collapse",
			"group",
			"move to top",
			"arrow"
		]
	},
	"education": {
		"tags": [
			"education",
			"course",
			"learning",
			"e book",
			"bookmark",
			"open",
			"knowledge",
			"school",
			"college"
		]
	},
	"lab": {
		"tags": [
			"lab",
			"chemicals",
			"liquid",
			"mixture",
			"chemistry",
			"science",
			"laboratory"
		]
	},
	"course-book": {
		"tags": [
			"education",
			"course",
			"learning",
			"e book",
			"bookmark",
			"open",
			"knowledge",
			"course book",
			"program"
		]
	},
	"system-exit-2": {
		"tags": [
			"system",
			"exit"
		]
	},
	"response": {
		"tags": [
			"reply",
			"response",
			"arrow"
		]
	},
	"write-new": {
		"tags": [
			"write",
			"new",
			"create",
			"pencil",
			"pen"
		]
	},
	"numbered-text": {
		"tags": [
			"numbered",
			"text",
			"1, 2, 3",
			"text edit",
			"rich-text"
		]
	},
	"endoscopy": {
		"tags": [
			"endoscopy",
			"medical",
			"procedure"
		]
	},
	"pull-down": {
		"tags": [
			"navigation",
			"pull down",
			"refresh",
			"arrow"
		]
	},
	"employee": {
		"tags": [
			"user",
			"person",
			"employee",
			"member",
			"operator",
			"representative"
		]
	},
	"table-view": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"table",
			"grid",
			"waffle",
			"view",
			"columns",
			"rows"
		]
	},
	"calendar": {
		"tags": [
			"calendar"
		]
	},
	"eam-work-order": {
		"tags": [
			"enterprise asset management",
			"work",
			"order",
			"hard hat",
			"check",
			"tick mark"
		]
	},
	"course-program": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"course",
			"education",
			"course",
			"learning",
			"e book",
			"bookmark",
			"open",
			"knowledge",
			"coursebook",
			"program"
		]
	},
	"edit": {
		"tags": [
			"pencil",
			"pen",
			"write",
			"edit",
			"modify",
			"text"
		]
	},
	"sonography": {
		"tags": [
			"sonography",
			"medical",
			"ultrasound",
			"ultrasonography"
		]
	},
	"bar-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"minimize": {
		"tags": [
			"minimize",
			"screen",
			"window",
			"reduce",
			"hide"
		]
	},
	"add-filter": {
		"tags": [
			"filter",
			"organise",
			"aggregate",
			"data",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"dimension": {
		"tags": [
			"dimension",
			"layers",
			"stacked"
		]
	},
	"detail-view": {
		"tags": [
			"search",
			"form",
			"look up",
			"find",
			"view",
			"detial"
		]
	},
	"status-inactive": {
		"tags": [
			"inactive",
			"neutral",
			"information",
			"led",
			"traffic lights",
			"street sign",
			"lifecycle"
		]
	},
	"inspect-down": {
		"tags": [
			"cancel",
			"x",
			"close",
			"dialog",
			"popup"
		]
	},
	"person-placeholder": {
		"tags": [
			"person",
			"individual",
			"user",
			"customer",
			"human",
			"profile",
			"me"
		]
	},
	"visits": {
		"tags": [
			"user",
			"arrow",
			"door",
			"visit",
			"login",
			"entry"
		]
	},
	"it-system": {
		"tags": [
			"server",
			"it",
			"machine",
			"computer",
			"technology",
			"device",
			"system"
		]
	},
	"zoom-out": {
		"tags": [
			"zoom",
			"out",
			"glass",
			"minus",
			"reduce",
			"smaller"
		]
	},
	"subway-train": {
		"tags": [
			"subway train",
			"underground",
			"tube"
		]
	},
	"trend-up": {
		"tags": [
			"trend",
			"up",
			"diagonal",
			"increase",
			"improve",
			"arrow"
		]
	},
	"insurance-life": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"insurance",
			"life"
		]
	},
	"sys-minus": {
		"tags": [
			"minus",
			"remove",
			"subtract"
		]
	},
	"manager": {
		"tags": [
			"manager",
			"company",
			"overview",
			"inform",
			"board",
			"leader",
			"conference",
			"meeting",
			"keynote",
			"speech",
			"presentation"
		]
	},
	"sap-box": {
		"tags": [
			"container",
			"box",
			"work load",
			"collection",
			"documents",
			"files",
			"filing",
			"directory",
			"storage"
		]
	},
	"time-entry-request": {
		"tags": [
			"time",
			"entry",
			"request",
			"clock",
			"list"
		]
	},
	"insurance-car": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"insurance",
			"car"
		]
	},
	"increase-line-height": {
		"tags": [
			"increase",
			"line height",
			"leading",
			"text edit",
			"spacing",
			"rich-text",
			"more space",
			"enlarge",
			"expand",
			"arrows"
		]
	},
	"exit-full-screen": {
		"tags": [
			"exit",
			"fullscreen",
			"arrow"
		]
	},
	"receipt": {
		"tags": [
			"money",
			"bill",
			"details",
			"proof",
			"sale",
			"receipt"
		]
	},
	"chart-axis": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"chart axis",
			"arrows",
			"directions"
		]
	},
	"activate": {
		"tags": [
			"activate",
			"ignite",
			"initiate",
			"magic",
			"wand",
			"spark"
		]
	},
	"cart-2": {
		"tags": [
			"cart",
			"trolley",
			"basket",
			"shopping",
			"empty",
			"remove",
			"take out",
			"clear",
			"up",
			"arrow"
		]
	},
	"vertical-bar-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"bar",
			"vertical"
		]
	},
	"generate-shortcut": {
		"tags": [
			"generate",
			"shortcut",
			"arrow"
		]
	},
	"time-overtime": {
		"tags": [
			"time",
			"overtime",
			"clock",
			"money",
			"hours"
		]
	},
	"expand-group": {
		"tags": [
			"expand",
			"group",
			"move to bottom",
			"arrow"
		]
	},
	"cart-4": {
		"tags": [
			"cart",
			"trolley",
			"basket",
			"shopping",
			"item",
			"add",
			"put in",
			"insert",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"employee-rejections": {
		"tags": [
			"person",
			"x",
			"rejections",
			"employee",
			"hr",
			"human resources"
		]
	},
	"cart-3": {
		"tags": [
			"cart",
			"trolley",
			"basket",
			"shopping",
			"item",
			"add",
			"put in",
			"insert",
			"down",
			"arrow"
		]
	},
	"pending": {
		"tags": [
			"time",
			"clock",
			"pend",
			"pending",
			"awaiting",
			"unresolved",
			"unsettled"
		]
	},
	"reset": {
		"tags": [
			"reset",
			"x",
			"cancel"
		]
	},
	"cart-5": {
		"tags": [
			"cart",
			"trolley",
			"basket",
			"shopping",
			"item",
			"sap"
		]
	},
	"activities": {
		"tags": [
			"activities",
			"tasks",
			"to do",
			"list"
		]
	},
	"border": {
		"tags": [
			"border",
			"square",
			"outline"
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
	"nav-back": {
		"tags": [
			"navigation",
			"back",
			"previous",
			"arrow"
		]
	},
	"refresh": {
		"tags": [
			"reload",
			"refresh",
			"arrow"
		]
	},
	"move": {
		"tags": [
			"move",
			"relocate",
			"left",
			"right",
			"up",
			"down"
		]
	},
	"employee-lookup": {
		"tags": [
			"customer",
			"user",
			"person",
			"individual",
			"contacts",
			"look up",
			"find",
			"search"
		]
	},
	"navigation-up-arrow": {
		"tags": [
			"navigation",
			"up",
			"arrow"
		]
	},
	"back-to-top": {
		"tags": [
			"back to top",
			"jump",
			"beginning",
			"arrow",
			"up"
		]
	},
	"menu": {
		"tags": [
			"menu",
			"list"
		]
	},
	"text-align-left": {
		"tags": [
			"align",
			"text",
			"left",
			"text edit",
			"rich-text"
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
	"document-text": {
		"tags": [
			"document",
			"page",
			"file",
			"text"
		]
	},
	"tag-cloud-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"speech",
			"tag",
			"cloud"
		]
	},
	"scissors": {
		"tags": [
			"cut",
			"scissors",
			"document",
			"clipboards",
			"file",
			"text"
		]
	},
	"burglary": {
		"tags": [
			"money",
			"thief",
			"loss",
			"theft",
			"safe",
			"unsafe",
			"burglary",
			"robbery",
			"bank"
		]
	},
	"lateness": {
		"tags": [
			"time",
			"timer",
			"waiting",
			"lateness",
			"loading",
			"hour glass",
			"sand",
			"out of time"
		]
	},
	"x-ray": {
		"tags": [
			"x ray",
			"procedure",
			"scan",
			"medical"
		]
	},
	"comment": {
		"tags": [
			"speech",
			"bubble",
			"comment",
			"discussion"
		]
	},
	"business-one": {
		"tags": [
			"business one"
		]
	},
	"newspaper": {
		"tags": [
			"newspaper",
			"headlines",
			"latest",
			"updates"
		]
	},
	"incident": {
		"tags": [
			"incident",
			"question",
			"message"
		]
	},
	"outbox": {
		"tags": [
			"outbox",
			"out",
			"arrow"
		]
	},
	"home": {
		"tags": [
			"home",
			"house",
			"index",
			"landing page",
			"start",
			"main"
		]
	},
	"family-care": {
		"tags": [
			"family",
			"protection",
			"people",
			"family"
		]
	},
	"waiver": {
		"tags": [
			"waiver",
			"money bag",
			"percentage"
		]
	},
	"ui-notifications": {
		"tags": [
			"notify",
			"ui",
			"notifications",
			"alerts",
			"launchpad"
		]
	},
	"retail-store-manager": {
		"tags": [
			"retail store manager"
		]
	},
	"attachment-photo": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"photo",
			"image"
		]
	},
	"paid-leave": {
		"tags": [
			"paid leave",
			"money",
			"dollar",
			"bill",
			"approved"
		]
	},
	"slim-arrow-left": {
		"tags": [
			"slim",
			"thin",
			"skinny",
			"arrow",
			"left",
			"scroll left"
		]
	},
	"sys-back-2": {
		"tags": [
			"system",
			"back",
			"arrows"
		]
	},
	"expense-report": {
		"tags": [
			"expense",
			"report",
			"documents",
			"money",
			"dollar"
		]
	},
	"dropdown": {
		"tags": [
			"dropdown",
			"menu",
			"menu button",
			"arrow",
			"megamenu"
		]
	},
	"decision": {
		"tags": [
			"hand shake",
			"decision",
			"hands",
			"agreement",
			"colleagues",
			"contract"
		]
	},
	"upload": {
		"tags": [
			"upload",
			"arrow"
		]
	},
	"family-protection": {
		"tags": [
			"family",
			"protection",
			"people",
			"house",
			"roof",
			"family"
		]
	},
	"monitor-payments": {
		"tags": [
			"report",
			"bill",
			"billing",
			"sales",
			"expense",
			"quote",
			"envelope",
			"invoice",
			"dollar",
			"money",
			"monitor payments"
		]
	},
	"sys-cancel": {
		"tags": [
			"clear",
			"remove",
			"cancel",
			"x"
		]
	},
	"fob-watch": {
		"tags": [
			"fob watch",
			"time",
			"stop watch",
			"timer",
			"countdown"
		]
	},
	"ipad-2": {
		"tags": [
			"ipad",
			"landscape",
			"tablet",
			"mobile",
			"responsive",
			"cozy"
		]
	},
	"restart": {
		"tags": [
			"restart",
			"process",
			"play"
		]
	},
	"hello-world": {
		"tags": [
			"bubble",
			"ui5",
			"hello",
			"world"
		]
	},
	"sys-monitor": {
		"tags": [
			"screen",
			"monitor",
			"tv"
		]
	},
	"product": {
		"tags": [
			"product",
			"commodity",
			"goods",
			"stock",
			"merchandise",
			"package"
		]
	},
	"flight": {
		"tags": [
			"plane",
			"trip",
			"travel",
			"holiday",
			"flight",
			"Aeroplane",
			"transit",
			"shipment"
		]
	},
	"crossed-line-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"crossed line chart"
		]
	},
	"wounds-doc": {
		"tags": [
			"wounds",
			"doc",
			"injury",
			"accident",
			"hospital",
			"patient",
			"emergency",
			"health",
			"illness",
			"cross"
		]
	},
	"filter-facets": {
		"tags": [
			"analytics",
			"filter",
			"organise",
			"chart",
			"customize",
			"display",
			"data"
		]
	},
	"gantt-bars": {
		"tags": [
			"calendar",
			"gantt",
			"bars",
			"gantt bars",
			"chart",
			"schedule"
		]
	},
	"account": {
		"tags": [
			"user",
			"menu",
			"settings"
		]
	},
	"arrow-bottom": {
		"tags": [
			"arrow bottom",
			"down"
		]
	},
	"repost": {
		"tags": [
			"post again",
			"circulate"
		]
	},
	"warning": {
		"tags": [
			"warning",
			"exclamation mark",
			"indicator",
			"information"
		]
	},
	"cause": {
		"tags": [
			"get",
			"reason",
			"incoming",
			"arrow",
			"relocate",
			"take"
		]
	},
	"offsite-work": {
		"tags": [
			"offsite work",
			"external",
			"company",
			"office",
			"outside"
		]
	},
	"save": {
		"tags": [
			"save",
			"diskette",
			"floppy disc",
			"local disc",
			"hard disc"
		]
	},
	"energy-saving-lightbulb": {
		"tags": [
			"lightbulb",
			"light",
			"lamp",
			"idea",
			"eco",
			"energy saving"
		]
	},
	"palette": {
		"tags": [
			"palette",
			"paint",
			"color",
			"spot",
			"mixing",
			"artist",
			"theme",
			"design"
		]
	},
	"program-triangles-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"triangle",
			"program"
		]
	},
	"choropleth-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"choropleth chart",
			"geographic",
			"map",
			"world"
		]
	},
	"notification-2": {
		"tags": [
			"speech",
			"bubble",
			"comment",
			"discussion",
			"notification"
		]
	},
	"checklist": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"checklist"
		]
	},
	"attachment-video": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"video",
			"film",
			"movie"
		]
	},
	"soccer": {
		"tags": [
			"soccer",
			"ball",
			"football",
			"world cup"
		]
	},
	"create-leave-request": {
		"tags": [
			"holiday",
			"vacation",
			"leave",
			"request",
			"deck chair",
			"sun",
			"create",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"Chart-Tree-Map": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"request": {
		"tags": [
			"document",
			"page",
			"file",
			"text",
			"edit",
			"write",
			"new",
			"pencil",
			"pen",
			"request"
		]
	},
	"goalseek": {
		"tags": [
			"goal",
			"goalseek",
			"target",
			"result",
			"objective",
			"aim"
		]
	},
	"action": {
		"tags": [
			"actions",
			"collection",
			"share options",
			"forward actions",
			"more actions",
			"arrow"
		]
	},
	"outgoing-call": {
		"tags": [
			"call",
			"communicate",
			"phone",
			"telephone",
			"outgoing",
			"arrow"
		]
	},
	"sap-ui5": {
		"tags": [
			"ui5",
			"framework",
			"development",
			"sap"
		]
	},
	"sys-first-page": {
		"tags": [
			"system",
			"first",
			"page",
			"up",
			"top",
			"arrows"
		]
	},
	"radar-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"radar-chart"
		]
	},
	"table-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"table",
			"columns",
			"rows",
			"grid",
			"waffle",
			"view"
		]
	},
	"study-leave": {
		"tags": [
			"study",
			"education",
			"graduate",
			"school",
			"college",
			"student",
			"qualification"
		]
	},
	"heading2": {
		"tags": [
			"heading",
			"header",
			"h2",
			"large text",
			"title",
			"level 2",
			"text edit",
			"rich-text"
		]
	},
	"bed": {
		"tags": [
			"bed",
			"sleep",
			"ill",
			"hospital",
			"sick",
			"medical",
			"tired",
			"snooze",
			"night"
		]
	},
	"heading1": {
		"tags": [
			"heading",
			"header",
			"h1",
			"large text",
			"title",
			"level 1",
			"text edit",
			"rich-text"
		]
	},
	"customer-history": {
		"tags": [
			"person",
			"history",
			"customer",
			"user",
			"clock",
			"account"
		]
	},
	"heading3": {
		"tags": [
			"heading",
			"header",
			"h3",
			"large text",
			"title",
			"level 3",
			"text edit",
			"rich-text"
		]
	},
	"general-leave-request": {
		"tags": [
			"holiday",
			"vacation",
			"leave",
			"request",
			"deck",
			"chair",
			"sun",
			"create"
		]
	},
	"machine": {
		"tags": [
			"machine",
			"factory",
			"production",
			"supplier",
			"technical"
		]
	},
	"vertical-bullet-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"open-command-field": {
		"tags": [
			"open command field",
			"navigation",
			"right",
			"page right",
			"next",
			"arrow"
		]
	},
	"business-objects-explorer": {
		"tags": [
			"business objects explorer",
			"compass"
		]
	},
	"approvals": {
		"tags": [
			"form",
			"details",
			"text",
			"approvals",
			"accepted",
			"checkmark"
		]
	},
	"flag": {
		"tags": [
			"flag",
			"mark",
			"marker",
			"important"
		]
	},
	"underline-text": {
		"tags": [
			"underline",
			"text",
			"format",
			"text decoration",
			"text edit",
			"rich-text"
		]
	},
	"appointment-2": {
		"tags": [
			"date picker",
			"calendar",
			"month",
			"week",
			"day",
			"appointment"
		]
	},
	"overlay": {
		"tags": [
			"overlay",
			"circle",
			"dot"
		]
	},
	"attachment-audio": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"audio",
			"sound"
		]
	},
	"redo": {
		"tags": [
			"redo",
			"arrow",
			"previous state",
			"history",
			"forwards"
		]
	},
	"arobase": {
		"tags": [
			"at",
			"@",
			"email",
			"address"
		]
	},
	"sys-enter": {
		"tags": [
			"system",
			"enter",
			"correct",
			"tick",
			"affirmative"
		]
	},
	"line-chart-dual-axis": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"line chart",
			"dual axis"
		]
	},
	"create-session": {
		"tags": [
			"create",
			"session"
		]
	},
	"headset": {
		"tags": [
			"headset",
			"call",
			"help",
			"support",
			"talk",
			"mic",
			"listen"
		]
	},
	"heatmap-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"checklist-item": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"checklist",
			"item"
		]
	},
	"rhombus-milestone-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"rhombus",
			"milestone"
		]
	},
	"key-user-settings": {
		"tags": [
			"settings",
			"cogwheel",
			"configuration",
			"settings",
			"tools",
			"modify",
			"customize",
			"administrator",
			"key user",
			"runtime authoring"
		]
	},
	"vertical-grip": {
		"tags": [
			"vertical",
			"grip",
			"move left",
			"move right",
			"splitter"
		]
	},
	"add": {
		"tags": [
			"add",
			"plus",
			"additional",
			"another",
			"more",
			"add row",
			"add object",
			"add item"
		]
	},
	"mri-scan": {
		"tags": [
			"mri",
			"scan",
			"medical"
		]
	},
	"slim-arrow-down": {
		"tags": [
			"slim",
			"thin",
			"skinny",
			"arrow",
			"down",
			"select navigation",
			"combobox",
			"multi combobox"
		]
	},
	"chart-table-view": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"table",
			"columns",
			"rows",
			"grid",
			"waffle",
			"view"
		]
	},
	"it-host": {
		"tags": [
			"server",
			"it",
			"machine",
			"computer",
			"technology",
			"device",
			"host"
		]
	},
	"grid": {
		"tags": [
			"grid",
			"waffle",
			"layout",
			"boxes",
			"squares",
			"modular"
		]
	},
	"line-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"line chart"
		]
	},
	"outdent": {
		"tags": [
			"outdent",
			"paragraph",
			"move left",
			"align",
			"text edit",
			"spacing",
			"rich-text",
			"arrows"
		]
	},
	"less": {
		"tags": [
			"less",
			"minus",
			"subtract"
		]
	},
	"my-sales-order": {
		"tags": [
			"document",
			"page",
			"sales",
			"order",
			"money",
			"bill",
			"details",
			"quote",
			"invoice"
		]
	},
	"puzzle": {
		"tags": [
			"puzzle",
			"pieces",
			"fit",
			"together",
			"jigsaw",
			"thinking",
			"objects",
			"challenge"
		]
	},
	"building": {
		"tags": [
			"building",
			"company",
			"firm",
			"factory",
			"office"
		]
	},
	"crm-service-manager": {
		"tags": [
			"crm service manager",
			"task",
			"dropdown",
			"list"
		]
	},
	"task": {
		"tags": [
			"clipboard",
			"task",
			"checkbox",
			"checklist",
			"list",
			"checkmark"
		]
	},
	"play": {
		"tags": [
			"play"
		]
	},
	"list": {
		"tags": [
			"list",
			"text",
			"ordered"
		]
	},
	"hint": {
		"tags": [
			"information",
			"hint",
			"about",
			"details"
		]
	},
	"message-warning": {
		"tags": [
			"message",
			"warning",
			"critical",
			"notifications",
			"status"
		]
	},
	"past": {
		"tags": [
			"time",
			"clock",
			"past",
			"bygone",
			"former",
			"late"
		]
	},
	"provision": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"table",
			"columns",
			"rows",
			"grid",
			"waffle",
			"settings",
			"modify",
			"customize"
		]
	},
	"print": {
		"tags": [
			"print",
			"printer",
			"send to print",
			"hard copy",
			"output",
			"paper",
			"document",
			"file"
		]
	},
	"database": {
		"tags": [
			"database",
			"big data",
			"cube",
			"complex",
			"complicated",
			"simple",
			"information",
			"backend"
		]
	},
	"multiselect-none": {
		"tags": [
			"multi select",
			"list",
			"table",
			"data",
			"none",
			"deselected"
		]
	},
	"web-cam": {
		"tags": [
			"web cam",
			"camera",
			"live",
			"video",
			"visual"
		]
	},
	"opportunity": {
		"tags": [
			"chart",
			"line",
			"star",
			"opportunity",
			"stock",
			"market",
			"exchange",
			"trade"
		]
	},
	"mirrored-task-circle": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"mirrored",
			"circle",
			"task"
		]
	},
	"journey-depart": {
		"tags": [
			"journey",
			"depart",
			"arrow",
			"move",
			"placement"
		]
	},
	"sorting-ranking": {
		"tags": [
			"sort",
			"ranking",
			"ascending",
			"descending",
			"arrow"
		]
	},
	"text-align-center": {
		"tags": [
			"align",
			"text",
			"center",
			"text edit",
			"rich-text"
		]
	},
	"user-edit": {
		"tags": [
			"user",
			"edit",
			"person",
			"pencil",
			"pen"
		]
	},
	"step": {
		"tags": [
			"process",
			"flow",
			"step",
			"arrow"
		]
	},
	"master-task-triangle-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"triangle",
			"task",
			"master"
		]
	},
	"discussion": {
		"tags": [
			"speech",
			"bubble",
			"comment",
			"discussion",
			"blank"
		]
	},
	"resize-horizontal": {
		"tags": [
			"resize",
			"horizontal",
			"column",
			"screen",
			"bigger",
			"smaller",
			"enlarge",
			"reduce",
			"arrows",
			"lines",
			"side to side"
		]
	},
	"display-more": {
		"tags": [
			"display",
			"details",
			"more",
			"arrow"
		]
	},
	"bo-strategy-management": {
		"tags": [
			"bo strategy management",
			"business",
			"object",
			"circle"
		]
	},
	"customer": {
		"tags": [
			"person",
			"individual",
			"user",
			"customer",
			"human",
			"circle",
			"profile",
			"me"
		]
	},
	"attachment-zip-file": {
		"tags": [
			"document",
			"page",
			"file",
			"zip",
			"compressed"
		]
	},
	"temperature": {
		"tags": [
			"temperature",
			"hot",
			"heat",
			"cold",
			"cool",
			"illness",
			"sickness",
			"health",
			"medical"
		]
	},
	"unlocked": {
		"tags": [
			"unlocked",
			"open padlock",
			"open",
			"status",
			"available",
			"access",
			"unrestricted"
		]
	},
	"hide": {
		"tags": [
			"hide",
			"eye"
		]
	},
	"forward": {
		"tags": [
			"forward",
			"arrow"
		]
	},
	"status-critical": {
		"tags": [
			"critical",
			"in process",
			"warning",
			"led",
			"traffic lights",
			"street sign",
			"lifecycle"
		]
	},
	"incoming-call": {
		"tags": [
			"call",
			"communicate",
			"incoming",
			"phone",
			"telephone",
			"arrow"
		]
	},
	"home-share": {
		"tags": [
			"globe",
			"world",
			"geographical",
			"earth",
			"planet",
			"share",
			"global distribution",
			"arrow"
		]
	},
	"journey-arrive": {
		"tags": [
			"journey",
			"arrive",
			"arrow",
			"placement"
		]
	},
	"navigation-left-arrow": {
		"tags": [
			"navigation",
			"left",
			"arrow"
		]
	},
	"opportunities": {
		"tags": [
			"user",
			"person",
			"dollar",
			"equal to",
			"opportunity"
		]
	},
	"upstacked-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"upstacked"
		]
	},
	"donut-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"supplier": {
		"tags": [
			"supplier",
			"package",
			"product",
			"satisfaction",
			"returns",
			"deliveries",
			"warehouse",
			"person",
			"seller",
			"buyer",
			"inventory"
		]
	},
	"signature": {
		"tags": [
			"pencil",
			"pen",
			"signature",
			"sign"
		]
	},
	"circle-task": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"circle",
			"task"
		]
	},
	"copy": {
		"tags": [
			"copy",
			"document",
			"file",
			"duplicate",
			"text"
		]
	},
	"close-command-field": {
		"tags": [
			"close command field",
			"navigation",
			"left",
			"page left",
			"previous",
			"arrow"
		]
	},
	"activity-2": {
		"tags": [
			"activity",
			"activities",
			"tasks",
			"to do",
			"list",
			"check list",
			"correct",
			"success",
			"tick mark"
		]
	},
	"windows-doors": {
		"tags": [
			"window",
			"door",
			"entry"
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
	"mileage": {
		"tags": [
			"mileage",
			"tank",
			"petrol",
			"fuel",
			"fill up",
			"gas",
			"station"
		]
	},
	"fax-machine": {
		"tags": [
			"fax",
			"machine",
			"communicate"
		]
	},
	"pdf-attachment": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"pdf"
		]
	},
	"sys-find": {
		"tags": [
			"find",
			"binoculars",
			"look up"
		]
	},
	"master-task-triangle": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"triangle",
			"task",
			"master"
		]
	},
	"text-align-right": {
		"tags": [
			"align",
			"text",
			"right",
			"text edit",
			"rich-text"
		]
	},
	"learning-assistant": {
		"tags": [
			"education",
			"course",
			"learning",
			"e book",
			"bookmark",
			"open",
			"knowledge",
			"school",
			"college",
			"help",
			"tutor",
			"assistant",
			"teacher",
			"professor"
		]
	},
	"favorite": {
		"tags": [
			"favorite",
			"favourite",
			"star"
		]
	},
	"log": {
		"tags": [
			"log",
			"logout",
			"log on",
			"log off"
		]
	},
	"loan": {
		"tags": [
			"money bag",
			"bank",
			"dollar",
			"tag"
		]
	},
	"toaster-top": {
		"tags": [
			"toaster",
			"top",
			"details"
		]
	},
	"download-from-cloud": {
		"tags": [
			"download",
			"cloud",
			"arrow"
		]
	},
	"sys-enter-2": {
		"tags": [
			"system",
			"enter",
			"correct",
			"tick",
			"affirmative"
		]
	},
	"sys-last-page": {
		"tags": [
			"system",
			"last",
			"page",
			"down",
			"bottom",
			"arrows"
		]
	},
	"to-be-reviewed": {
		"tags": [
			"to be reviewed",
			"indicator",
			"information"
		]
	},
	"electrocardiogram": {
		"tags": [
			"electrocardiogram",
			"heart",
			"scan",
			"monitor",
			"medical"
		]
	},
	"marketing-campaign": {
		"tags": [
			"marketing campaign",
			"loud speaker",
			"megaphone",
			"notify",
			"announcenment",
			"public address"
		]
	},
	"timesheet": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"timesheet",
			"clock",
			"hours",
			"days",
			"workday"
		]
	},
	"horizontal-bar-chart-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"horizontal bar chart"
		]
	},
	"navigation-right-arrow": {
		"tags": [
			"navigation",
			"right",
			"expand",
			"collapsed tree",
			"tree arrow",
			"arrow"
		]
	},
	"sort": {
		"tags": [
			"sort",
			"aggregate",
			"ascending",
			"descending",
			"arrow"
		]
	},
	"taxi": {
		"tags": [
			"car",
			"taxi",
			"cab",
			"transportation"
		]
	},
	"sys-next-page": {
		"tags": [
			"system",
			"next",
			"page",
			"down",
			"arrows"
		]
	},
	"full-stacked-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"full stacked chart"
		]
	},
	"sys-back": {
		"tags": [
			"system",
			"back",
			"arrows"
		]
	},
	"multiselect-all": {
		"tags": [
			"multi select",
			"list",
			"table",
			"data",
			"all",
			"selected"
		]
	},
	"collections-insight": {
		"tags": [
			"collections",
			"insight",
			"report",
			"bill",
			"billing",
			"sales",
			"expense",
			"quote",
			"envelope",
			"invoice",
			"dollar",
			"money"
		]
	},
	"attachment-text-file": {
		"tags": [
			"document",
			"page",
			"file",
			"text"
		]
	},
	"arrow-right": {
		"tags": [
			"arrow right"
		]
	},
	"source-code": {
		"tags": [
			"source",
			"code",
			"develop",
			"write",
			"syntax"
		]
	},
	"leads": {
		"tags": [
			"user",
			"person",
			"leads",
			"star",
			"equal to"
		]
	},
	"document": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"blank",
			"new"
		]
	},
	"column-chart-dual-axis": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"column",
			"dual axis"
		]
	},
	"syringe": {
		"tags": [
			"medical",
			"emergency",
			"hospital",
			"syringe",
			"needle",
			"shot",
			"injection"
		]
	},
	"switch-classes": {
		"tags": [
			"switch",
			"views",
			"objects",
			"arrange",
			"classes"
		]
	},
	"thing-type": {
		"tags": [
			"popup",
			"speech",
			"bubble",
			"thing-type"
		]
	},
	"initiative": {
		"tags": [
			"initiative",
			"initiate",
			"begin",
			"enter",
			"right",
			"arrow",
			"circle"
		]
	},
	"documents": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"documents"
		]
	},
	"unpaid-leave": {
		"tags": [
			"unpaid leave",
			"money",
			"dollar",
			"bill",
			"rejected"
		]
	},
	"checklist-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"checklist"
		]
	},
	"clinical-task-tracker": {
		"tags": [
			"clinical",
			"task",
			"tracker",
			"clipboard",
			"medical",
			"checklist",
			"check boxes"
		]
	},
	"arrow-left": {
		"tags": [
			"arrow left"
		]
	},
	"up": {
		"tags": [
			"up",
			"triangle"
		]
	},
	"functional-location": {
		"tags": [
			"arrow",
			"locate",
			"me",
			"map",
			"location",
			"pointer",
			"navigation",
			"functional"
		]
	},
	"vehicle-repair": {
		"tags": [
			"car",
			"crash",
			"accident",
			"damage",
			"repair",
			"fix",
			"garage",
			"vehicle"
		]
	},
	"inventory": {
		"tags": [
			"inventory",
			"truck",
			"wrench",
			"tools"
		]
	},
	"basket": {
		"tags": [
			"basket",
			"shopping"
		]
	},
	"end-user-experience-monitoring": {
		"tags": [
			"end user experience monitoring",
			"gauge",
			"measure",
			"speed",
			"monitor"
		]
	},
	"down": {
		"tags": [
			"down",
			"triangle",
			"megamenu"
		]
	},
	"pipeline-analysis": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"competitor": {
		"tags": [
			"competitor",
			"winner",
			"prize",
			"award",
			"trophy",
			"cup"
		]
	},
	"world": {
		"tags": [
			"globe",
			"world",
			"goegraphical",
			"earth",
			"planet",
			"international",
			"global"
		]
	},
	"customer-briefing": {
		"tags": [
			"customer",
			"user",
			"person",
			"individual",
			"contacts",
			"address",
			"email",
			"e-mail",
			"briefing"
		]
	},
	"add-activity-2": {
		"tags": [
			"activity",
			"activities",
			"tasks",
			"to do",
			"list",
			"check list",
			"correct",
			"success",
			"tick mark",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"iphone-2": {
		"tags": [
			"iphone",
			"phone",
			"smart phone",
			"landscape",
			"tablet",
			"mobile",
			"responsive",
			"cozy"
		]
	},
	"cancel": {
		"tags": [
			"unable",
			"forbidden",
			"do not",
			"cancel",
			"not allowed",
			"not allowed"
		]
	},
	"pushpin-off": {
		"tags": [
			"pin",
			"pushpin",
			"stick",
			"unstick",
			"snap",
			"remove pin",
			"unpin",
			"off",
			"on"
		]
	},
	"download": {
		"tags": [
			"download",
			"arrow"
		]
	},
	"inspection": {
		"tags": [
			"search",
			"document",
			"inspect"
		]
	},
	"scatter-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"scatter chart"
		]
	},
	"retail-store": {
		"tags": [
			"shop",
			"store",
			"retail",
			"market"
		]
	},
	"crop": {
		"tags": [
			"crop",
			"clip",
			"snip",
			"cut",
			"picture",
			"image",
			"shape",
			"obect"
		]
	},
	"contacts": {
		"tags": [
			"customers",
			"contacts",
			"address",
			"email",
			"e-mail",
			"phone book",
			"directory",
			"phone numbers",
			"companies"
		]
	},
	"folder-full": {
		"tags": [
			"folder",
			"full"
		]
	},
	"filter-fields": {
		"tags": [
			"analytics",
			"filter",
			"organise",
			"chart",
			"customize",
			"display",
			"data"
		]
	},
	"unwired": {
		"tags": [
			"unwired",
			"gauge",
			"measure",
			"speed",
			"monitor",
			"performance"
		]
	},
	"bbyd-active-sales": {
		"tags": [
			"business by design",
			"active",
			"sales",
			"search",
			"approvals",
			"check",
			"book"
		]
	},
	"expand": {
		"tags": [
			"expand all",
			"plus",
			"group all",
			"arrow"
		]
	},
	"card": {
		"tags": [
			"image",
			"placeholder",
			"picture",
			"hills",
			"mountains",
			"sun",
			"card"
		]
	},
	"blank-tag-2": {
		"tags": [
			"tag",
			"label",
			"marker",
			"indicator",
			"blank"
		]
	},
	"instance": {
		"tags": [
			"instance",
			"process",
			"clock",
			"chevron"
		]
	},
	"collapse": {
		"tags": [
			"collapse all",
			"minus",
			"ungroup all",
			"arrow"
		]
	},
	"draw-rectangle": {
		"tags": [
			"draw",
			"rectangle",
			"resize",
			"shape",
			"create"
		]
	},
	"physical-activity": {
		"tags": [
			"physical activity",
			"runing",
			"run",
			"jogging"
		]
	},
	"address-book": {
		"tags": [
			"customers",
			"contacts",
			"addresses",
			"email",
			"e-mail",
			"directory",
			"companies",
			"@",
			"at"
		]
	},
	"multi-select": {
		"tags": [
			"multi select",
			"list",
			"table",
			"data"
		]
	},
	"add-activity": {
		"tags": [
			"activity",
			"activities",
			"tasks",
			"to do",
			"list",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"customer-view": {
		"tags": [
			"customer",
			"view",
			"analytics",
			"overview"
		]
	},
	"technical-object": {
		"tags": [
			"technical",
			"object",
			"wrench",
			"tool",
			"fine tune",
			"tweak",
			"fix",
			"work",
			"component"
		]
	},
	"cart": {
		"tags": [
			"cart",
			"trolley",
			"basket",
			"shopping"
		]
	},
	"collaborate": {
		"tags": [
			"group",
			"team",
			"people",
			"colleagues",
			"communication",
			"collaborate",
			"teamwork",
			"peer to peer",
			"design thinking",
			"work",
			"together",
			"project"
		]
	},
	"message-information": {
		"tags": [
			"message",
			"information",
			"neutral",
			"notifications",
			"status"
		]
	},
	"arrow-top": {
		"tags": [
			"arrow top",
			"up"
		]
	},
	"bell": {
		"tags": [
			"bell",
			"alarm",
			"notify",
			"alerts"
		]
	},
	"syntax": {
		"tags": [
			"source",
			"code",
			"develop",
			"write",
			"syntax"
		]
	},
	"checklist-item-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"checklist",
			"item"
		]
	},
	"project-definition-triangle-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"triangle",
			"project",
			"definition"
		]
	},
	"email": {
		"tags": [
			"envelope",
			"email",
			"e-mail",
			"electronic mail",
			"mail",
			"correspondence"
		]
	},
	"sound": {
		"tags": [
			"sound",
			"audio",
			"audio",
			"speaker"
		]
	},
	"edit-outside": {
		"tags": [
			"pencil",
			"pen",
			"write",
			"edit",
			"modify",
			"text",
			"outside",
			"arrow"
		]
	},
	"Netweaver-business-client": {
		"tags": [
			"netweaver business client",
			"bird"
		]
	},
	"user-settings": {
		"tags": [
			"settings",
			"cogwheel",
			"configuration",
			"settings",
			"tools",
			"modify",
			"customize",
			"person",
			"user",
			"runtime authoring"
		]
	},
	"credit-card": {
		"tags": [
			"credit card",
			"master-card",
			"money",
			"debit",
			"order",
			"buy",
			"purchase",
			"shopping",
			"book online"
		]
	},
	"check-availability": {
		"tags": [
			"date picker",
			"calendar",
			"month",
			"week",
			"day",
			"appointment",
			"search",
			"look up",
			"check",
			"availability",
			"find"
		]
	},
	"employee-pane": {
		"tags": [
			"user",
			"person",
			"employee",
			"member",
			"operator",
			"representative",
			"profile",
			"me"
		]
	},
	"nutrition-activity": {
		"tags": [
			"apple",
			"nutrition",
			"activity",
			"health",
			"fruit"
		]
	},
	"alphabetical-order": {
		"tags": [
			"function",
			"alphabet",
			"letters",
			"a to z",
			"descending",
			"sorting",
			"order"
		]
	},
	"along-stacked-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"passenger-train": {
		"tags": [
			"train",
			"public transportation",
			"passenger"
		]
	},
	"group-2": {
		"tags": [
			"group",
			"data",
			"aggregate",
			"list",
			"table"
		]
	},
	"personnel-view": {
		"tags": [
			"view",
			"person",
			"profile",
			"personnel",
			"overview"
		]
	},
	"complete": {
		"tags": [
			"complete",
			"checkmark",
			"tick",
			"affirmative",
			"enter",
			"finish"
		]
	},
	"performance": {
		"tags": [
			"gauge",
			"measure",
			"speed",
			"monitor",
			"performance"
		]
	},
	"feed": {
		"tags": [
			"feed",
			"messages",
			"input",
			"news",
			"updates",
			"latest",
			"real-time"
		]
	},
	"broken-link": {
		"tags": [
			"unlink",
			"broken",
			"chain",
			"hyperlink"
		]
	},
	"mirrored-task-circle-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"mirrored",
			"circle",
			"task"
		]
	},
	"globe": {
		"tags": [
			"globe",
			"world",
			"goegraphical",
			"earth",
			"planet",
			"international",
			"global"
		]
	},
	"e-care": {
		"tags": [
			"e care",
			"digital customer care",
			"service",
			"electronic",
			"leaf",
			"leaves",
			"nature",
			"organic",
			"health",
			"environment"
		]
	},
	"eraser": {
		"tags": [
			"pencil",
			"pen",
			"erase",
			"remove",
			"undo",
			"text"
		]
	},
	"sound-off": {
		"tags": [
			"sound",
			"audio",
			"off",
			"mute",
			"quiet",
			"speaker",
			"cancel"
		]
	},
	"camera": {
		"tags": [
			"camera",
			"photograph",
			"device",
			"image",
			"snap shot"
		]
	},
	"attachment": {
		"tags": [
			"attach",
			"file",
			"paper clip"
		]
	},
	"write-new-document": {
		"tags": [
			"document",
			"page",
			"file",
			"text",
			"edit",
			"write",
			"new",
			"pencil",
			"pen"
		]
	},
	"iphone": {
		"tags": [
			"iphone",
			"phone",
			"smart phone",
			"portrait",
			"tablet",
			"mobile",
			"responsive",
			"cozy"
		]
	},
	"vertical-bar-chart-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"vertical bar chart"
		]
	},
	"appointment": {
		"tags": [
			"date picker",
			"calendar",
			"month",
			"week",
			"day",
			"appointment"
		]
	},
	"upload-to-cloud": {
		"tags": [
			"save",
			"upload",
			"cloud",
			"arrow"
		]
	},
	"message-popup": {
		"tags": [
			"message",
			"popup",
			"speech",
			"bubble",
			"exclamation",
			"notifications",
			"status"
		]
	},
	"circle-task-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"circle",
			"task"
		]
	},
	"kpi-managing-my-area": {
		"tags": [
			"user",
			"person",
			"kpi",
			"checkmark",
			"equal to"
		]
	},
	"project-definition-triangle": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"triangle",
			"project",
			"definition"
		]
	},
	"widgets": {
		"tags": [
			"widgets",
			"random",
			"star",
			"dollar",
			"plane",
			"music",
			"apps"
		]
	},
	"cursor-arrow": {
		"tags": [
			"cursor",
			"arrow",
			"mouse",
			"pointer",
			"select"
		]
	},
	"work-history": {
		"tags": [
			"folder",
			"person",
			"work history"
		]
	},
	"bold-text": {
		"tags": [
			"bold",
			"fat",
			"bulk",
			"weight",
			"text",
			"format",
			"text decoration",
			"text edit",
			"rich-text"
		]
	},
	"accept": {
		"tags": [
			"accept",
			"approve",
			"correct",
			"checkmark",
			"tick",
			"affirmative"
		]
	},
	"tag": {
		"tags": [
			"tag",
			"label",
			"marker",
			"indicator",
			"detail"
		]
	},
	"media-pause": {
		"tags": [
			"pause",
			"media",
			"arrow"
		]
	},
	"resize-corner": {
		"tags": [
			"resize",
			"dialog",
			"corner"
		]
	},
	"customize": {
		"tags": [
			"settings",
			"configuration",
			"settings",
			"modify",
			"customize",
			"equaliser",
			"fine tune"
		]
	},
	"tree": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"overview",
			"map",
			"org",
			"tree"
		]
	},
	"area-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"area"
		]
	},
	"attachment-html": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"html",
			"web",
			"website"
		]
	},
	"laptop": {
		"tags": [
			"laptop",
			"device",
			"computer"
		]
	},
	"accounting-document-verification": {
		"tags": [
			"document",
			"approve",
			"verify",
			"accounting",
			"money",
			"coins"
		]
	},
	"shelf": {
		"tags": [
			"shelf",
			"storage",
			"drawers",
			"compartments"
		]
	},
	"add-photo": {
		"tags": [
			"camera",
			"photograph",
			"device",
			"image",
			"snap shot",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"vertical-waterfall-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"dishwasher": {
		"tags": [
			"dishwasher",
			"dish",
			"wash",
			"appliance"
		]
	},
	"bullet-text": {
		"tags": [
			"bullet",
			"text",
			"dots",
			"text edit",
			"rich-text"
		]
	},
	"projector": {
		"tags": [
			"beamer",
			"projector",
			"show",
			"movie",
			"presentation",
			"keynote"
		]
	},
	"horizontal-grip": {
		"tags": [
			"horizontal",
			"grip",
			"move up",
			"move down",
			"splitter"
		]
	},
	"media-rewind": {
		"tags": [
			"rewind",
			"media",
			"arrow",
			"start",
			"back"
		]
	},
	"form": {
		"tags": [
			"form",
			"details",
			"text"
		]
	},
	"customer-financial-fact-sheet": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"customer",
			"financial",
			"fact sheet",
			"money"
		]
	},
	"alert": {
		"tags": [
			"message",
			"warning",
			"critical",
			"notifications",
			"status"
		]
	},
	"compare": {
		"tags": [
			"compare",
			"law",
			"justice",
			"scale",
			"measure",
			"weight",
			"balance",
			"compare",
			"comparison"
		]
	},
	"favorite-list": {
		"tags": [
			"favorite",
			"favourite",
			"star",
			"menu",
			"list"
		]
	},
	"clear-filter": {
		"tags": [
			"filter",
			"organise",
			"aggregate",
			"data",
			"clear",
			"delete",
			"remove",
			"cancel"
		]
	},
	"commission-check": {
		"tags": [
			"commission check",
			"coins",
			"stack",
			"search",
			"percentage",
			"money"
		]
	},
	"create": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"create",
			"new"
		]
	},
	"goal": {
		"tags": [
			"goal",
			"target",
			"result",
			"objective",
			"aim"
		]
	},
	"attachment-e-pub": {
		"tags": [
			"document",
			"page",
			"file",
			"e pub",
			"electronic publication",
			"e book"
		]
	},
	"discussion-2": {
		"tags": [
			"speech",
			"bubble",
			"comment",
			"discussion",
			"text"
		]
	},
	"record": {
		"tags": [
			"record"
		]
	},
	"accidental-leave": {
		"tags": [
			"accidental",
			"leave",
			"medical",
			"cross",
			"plus",
			"emergency",
			"hospital"
		]
	},
	"present": {
		"tags": [
			"time",
			"clock",
			"star",
			"current",
			"present"
		]
	},
	"travel-request": {
		"tags": [
			"bubble",
			"question",
			"exclamation",
			"notifications",
			"status",
			"help"
		]
	},
	"text-formatting": {
		"tags": [
			"customize",
			"text",
			"format",
			"options",
			"text decoration",
			"text edit",
			"rich-text"
		]
	},
	"it-instance": {
		"tags": [
			"server",
			"it",
			"machine",
			"computer",
			"technology",
			"device",
			"instance"
		]
	},
	"locked": {
		"tags": [
			"locked",
			"padlock",
			"private",
			"status",
			"in use",
			"forbidden",
			"restricted",
			"safe"
		]
	},
	"addresses": {
		"tags": [
			"customers",
			"contacts",
			"addresses",
			"email",
			"e-mail",
			"directory",
			"companies",
			"houses",
			"homes"
		]
	},
	"shield": {
		"tags": [
			"authority",
			"legitimate",
			"official",
			"important",
			"protection",
			"defense",
			"security"
		]
	},
	"inspect": {
		"tags": [
			"inspect",
			"dialog",
			"popup",
			"popout",
			"arrow"
		]
	},
	"italic-text": {
		"tags": [
			"itlalic",
			"slanted",
			"leaning",
			"text",
			"format",
			"text decoration",
			"text edit",
			"rich-text"
		]
	},
	"thumb-down": {
		"tags": [
			"thumbs",
			"down",
			"dislike",
			"negative"
		]
	},
	"cancel-share": {
		"tags": [
			"cancel share",
			"cancel distribution",
			"do not share with connections"
		]
	},
	"cart-full": {
		"tags": [
			"cart",
			"trolley",
			"basket",
			"shopping",
			"full",
			"capacity",
			"load"
		]
	},
	"private": {
		"tags": [
			"person",
			"individual",
			"user",
			"customer",
			"human",
			"locked",
			"in use",
			"occupied",
			"restricted",
			"private",
			"forbidden"
		]
	},
	"geographic-bubble-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"geographic",
			"bubble",
			"map",
			"world"
		]
	},
	"media-forward": {
		"tags": [
			"forward",
			"media",
			"arrow",
			"end",
			"finish"
		]
	},
	"journey-change": {
		"tags": [
			"journey",
			"change",
			"direction",
			"arrow",
			"placement"
		]
	},
	"color-fill": {
		"tags": [
			"square",
			"filled",
			"color"
		]
	},
	"decrease-line-height": {
		"tags": [
			"decrease",
			"line height",
			"leading",
			"text edit",
			"spacing",
			"rich-text",
			"less space",
			"reduce",
			"compress",
			"arrows"
		]
	},
	"delete": {
		"tags": [
			"bin",
			"trash can",
			"rubbish",
			"delete"
		]
	},
	"screen-split-one": {
		"tags": [
			"screen",
			"split",
			"two",
			"master",
			"detail",
			"split app"
		]
	},
	"workflow-tasks": {
		"tags": [
			"calendar",
			"workflow",
			"task",
			"process",
			"steps",
			"project"
		]
	},
	"system-exit": {
		"tags": [
			"system",
			"exit"
		]
	},
	"crm-sales": {
		"tags": [
			"crm sales",
			"customer",
			"relationship",
			"management",
			"person",
			"star",
			"money",
			"list"
		]
	},
	"disconnected": {
		"tags": [
			"plug",
			"disconnected",
			"unplug",
			"state"
		]
	},
	"post": {
		"tags": [
			"speech",
			"bubble",
			"comment",
			"post"
		]
	},
	"car-rental": {
		"tags": [
			"car",
			"auto",
			"rental",
			"company car",
			"hire",
			"vehicle",
			"transportation"
		]
	},
	"screen-split-three": {
		"tags": [
			"screen",
			"split",
			"three",
			"columns"
		]
	},
	"action-settings": {
		"tags": [
			"settings",
			"cogwheel",
			"configuration",
			"tools",
			"modify",
			"customize"
		]
	},
	"money-bills": {
		"tags": [
			"money",
			"cash",
			"payment",
			"bills",
			"dollar"
		]
	},
	"resize-vertical": {
		"tags": [
			"resize",
			"vertical",
			"row",
			"screen",
			"bigger",
			"smaller",
			"enlarge",
			"reduce",
			"arrows",
			"lines",
			"up and down"
		]
	},
	"drill-up": {
		"tags": [
			"drill up",
			"arrow",
			"detail",
			"hierarchy",
			"level"
		]
	},
	"popup-window": {
		"tags": [
			"computer",
			"dialog",
			"popup",
			"window",
			"screen",
			"popout"
		]
	},
	"heating-cooling": {
		"tags": [
			"temperature",
			"air conditioning",
			"ac",
			"heat",
			"cold",
			"sun",
			"snowflake"
		]
	},
	"process": {
		"tags": [
			"process",
			"flow",
			"arrow",
			"chevron"
		]
	},
	"folder": {
		"tags": [
			"folder",
			"details"
		]
	},
	"chevron-phase": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"chevron",
			"phase"
		]
	},
	"thumb-up": {
		"tags": [
			"thumbs",
			"up",
			"like",
			"appreciate",
			"positive"
		]
	},
	"cloud": {
		"tags": [
			"cloud",
			"platform",
			"storage",
			"big data",
			"sap"
		]
	},
	"sales-quote": {
		"tags": [
			"document",
			"page",
			"file",
			"text",
			"sales",
			"money",
			"bill",
			"details",
			"quote"
		]
	},
	"badge": {
		"tags": [
			"badge",
			"insignia",
			"star",
			"service",
			"identity",
			"authority",
			"legitimate",
			"coat of arms",
			"membership",
			"award",
			"rank"
		]
	},
	"sales-notification": {
		"tags": [
			"bubble",
			"sales",
			"notification"
		]
	},
	"trip-report": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"suitcase",
			"trip",
			"report",
			"business trip"
		]
	},
	"unfavorite": {
		"tags": [
			"remove",
			"unfavorite",
			"star"
		]
	},
	"phone": {
		"tags": [
			"phone",
			"telephone",
			"landline",
			"number",
			"call",
			"dial"
		]
	},
	"ppt-attachment": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"ppt",
			"powerpoint"
		]
	},
	"undo": {
		"tags": [
			"undo",
			"arrow",
			"previous state",
			"history",
			"backwards"
		]
	},
	"connected": {
		"tags": [
			"plug",
			"connected",
			"on",
			"state"
		]
	},
	"decline": {
		"tags": [
			"reject",
			"close",
			"remove",
			"cancel",
			"x",
			"decline"
		]
	},
	"quality-issue": {
		"tags": [
			"quality issue",
			"warning",
			"problem",
			"attention",
			"status",
			"details"
		]
	},
	"show": {
		"tags": [
			"show",
			"eye"
		]
	},
	"line-charts": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"official-service": {
		"tags": [
			"official",
			"service",
			"government",
			"court house",
			"law",
			"legal",
			"authority",
			"official"
		]
	},
	"citizen-connect": {
		"tags": [
			"citizen connect",
			"people",
			"colleagues",
			"communication",
			"collaborate",
			"teamwork",
			"peer to peer",
			"design thinking",
			"work",
			"together",
			"project"
		]
	},
	"resize": {
		"tags": [
			"resize",
			"bigger",
			"smaller"
		]
	},
	"accelerated": {
		"tags": [
			"calendar",
			"time",
			"speed"
		]
	},
	"explorer": {
		"tags": [
			"explorer",
			"compass"
		]
	},
	"stethoscope": {
		"tags": [
			"stethoscope",
			"medical",
			"health",
			"doctor",
			"hospital",
			"nurse"
		]
	},
	"nurse": {
		"tags": [
			"nurse",
			"medical",
			"cross",
			"emergency",
			"hospital"
		]
	},
	"zoom-in": {
		"tags": [
			"zoom",
			"in",
			"magnify",
			"glass",
			"plus",
			"enlarge",
			"bigger"
		]
	},
	"survey": {
		"tags": [
			"survey",
			"form",
			"checklist",
			"list",
			"checkbox",
			"checkmark",
			"x"
		]
	},
	"map-2": {
		"tags": [
			"map",
			"card",
			"navigation",
			"hunt",
			"destination",
			"location"
		]
	},
	"weather-proofing": {
		"tags": [
			"weather",
			"proofing",
			"protection"
		]
	},
	"map-3": {
		"tags": [
			"map",
			"card",
			"x marks the spot",
			"treasure",
			"navigation",
			"hunt",
			"find",
			"destination",
			"location"
		]
	},
	"chevron-phase-2": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"chevron",
			"phase"
		]
	},
	"positive": {
		"tags": [
			"plus",
			"positive"
		]
	},
	"business-objects-experience": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"business objects experience"
		]
	},
	"order-status": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"order",
			"status"
		]
	},
	"activity-assigned-to-goal": {
		"tags": [
			"activity",
			"activities",
			"tasks",
			"to do",
			"assigned to goal",
			"target",
			"objective"
		]
	},
	"indent": {
		"tags": [
			"indent",
			"paragraph",
			"move right",
			"align",
			"text edit",
			"spacing",
			"rich-text",
			"arrows"
		]
	},
	"my-view": {
		"tags": [
			"my view",
			"person",
			"profile",
			"tv",
			"monitor",
			"video call",
			"individual",
			"cutomer",
			"user"
		]
	},
	"letter": {
		"tags": [
			"letter",
			"mail",
			"post",
			"postal",
			"envelope",
			"address",
			"contact",
			"correspondence"
		]
	},
	"create-entry-time": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"timesheet",
			"clock",
			"hours",
			"days",
			"workday",
			"create entry time",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"slim-arrow-up": {
		"tags": [
			"slim",
			"thin",
			"skinny",
			"arrow",
			"up"
		]
	},
	"filter-analytics": {
		"tags": [
			"analytics",
			"filter",
			"organise",
			"chart",
			"customize",
			"display",
			"data"
		]
	},
	"permission": {
		"tags": [
			"document",
			"page",
			"file",
			"permission",
			"access",
			"granted",
			"open",
			"restrictions",
			"unlocked"
		]
	},
	"payment-approval": {
		"tags": [
			"sales",
			"simple payment",
			"money",
			"bill",
			"details",
			"quote",
			"accept",
			"approval",
			"checkmark"
		]
	},
	"add-process": {
		"tags": [
			"process",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"pie-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"pie",
			"segments"
		]
	},
	"compare-2": {
		"tags": [
			"compare",
			"law",
			"justice",
			"scale",
			"measure",
			"weight",
			"balance",
			"compare",
			"comparison"
		]
	},
	"sys-prev-page": {
		"tags": [
			"system",
			"previous",
			"page",
			"up",
			"arrows"
		]
	},
	"open-folder": {
		"tags": [
			"folder",
			"open"
		]
	},
	"excel-attachment": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"excel",
			"spreadsheet",
			"accounting"
		]
	},
	"picture": {
		"tags": [
			"picture",
			"photo",
			"photograph",
			"shot",
			"image"
		]
	},
	"chain-link": {
		"tags": [
			"link",
			"chain",
			"hyperlink"
		]
	},
	"shipping-status": {
		"tags": [
			"shipping status",
			"truck",
			"products",
			"delivery",
			"supplier",
			"transit",
			"lorry",
			"van",
			"shipment"
		]
	},
	"add-product": {
		"tags": [
			"product",
			"box",
			"package",
			"unit",
			"inventory",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"kpi-corporate-performance": {
		"tags": [
			"chart",
			"line",
			"kpi",
			"checkmark",
			"performance"
		]
	},
	"e-learning": {
		"tags": [
			"education",
			"course",
			"e learning",
			"e book",
			"bookmark",
			"open",
			"knowledge",
			"school",
			"college",
			"computer",
			"screen"
		]
	},
	"filter": {
		"tags": [
			"filter",
			"organise",
			"aggregate",
			"data"
		]
	},
	"program-triangles": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"gantt",
			"shape",
			"triangle",
			"program"
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
	"stop": {
		"tags": [
			"stop",
			"process",
			"play"
		]
	},
	"sys-add": {
		"tags": [
			"add",
			"plus",
			"additional",
			"another",
			"more",
			"add row",
			"add object",
			"add item"
		]
	},
	"multiple-pie-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"multiple",
			"pie chart"
		]
	},
	"simple-payment": {
		"tags": [
			"sales",
			"simple payment",
			"money",
			"bill",
			"details",
			"quote"
		]
	},
	"sort-ascending": {
		"tags": [
			"sort",
			"ascending",
			"up",
			"table",
			"aggregate"
		]
	},
	"email-read": {
		"tags": [
			"mail",
			"letter",
			"e-mail",
			"envelope",
			"open",
			"read"
		]
	},
	"chalkboard": {
		"tags": [
			"chalkboard",
			"education",
			"teaching",
			"learning",
			"classroom",
			"school",
			"college"
		]
	},
	"arrow-down": {
		"tags": [
			"arrow",
			"circle",
			"down",
			"variant",
			"management",
			"selection",
			"options",
			"megamenu"
		]
	},
	"bbyd-dashboard": {
		"tags": [
			"business by design",
			"dashboard"
		]
	},
	"customer-order-entry": {
		"tags": [
			"sign",
			"signature",
			"order",
			"entry",
			"customer",
			"contract",
			"agreement"
		]
	},
	"horizontal-bullet-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data"
		]
	},
	"shortcut": {
		"tags": [
			"shortcut",
			"redirect",
			"arrow"
		]
	},
	"toaster-up": {
		"tags": [
			"toaster",
			"up",
			"details"
		]
	},
	"share": {
		"tags": [
			"share",
			"reshare",
			"distribute",
			"arrow"
		]
	},
	"pool": {
		"tags": [
			"pool",
			"basin",
			"swim"
		]
	},
	"add-favorite": {
		"tags": [
			"favorite",
			"favourite",
			"star",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"customer-and-supplier": {
		"tags": [
			"customer and supplier",
			"package",
			"product",
			"satisfaction",
			"returns",
			"warehouse",
			"person",
			"seller",
			"buyer",
			"inventory"
		]
	},
	"meal": {
		"tags": [
			"meal",
			"knife and fork",
			"dinner",
			"lunch",
			"eating",
			"dine",
			"expenses"
		]
	},
	"insurance-house": {
		"tags": [
			"document",
			"page",
			"file",
			"attachment",
			"insurance",
			"house"
		]
	},
	"employee-approvals": {
		"tags": [
			"person",
			"accept",
			"approval",
			"employee",
			"hr",
			"human resources"
		]
	},
	"error": {
		"tags": [
			"message",
			"error",
			"negative",
			"notifications",
			"status",
			"solid"
		]
	},
	"electronic-medical-record": {
		"tags": [
			"electronic medical record",
			"medical",
			"cross",
			"emergency",
			"hospital"
		]
	},
	"suitcase": {
		"tags": [
			"travel",
			"suitcase",
			"business trip",
			"personal",
			"possessions",
			"articles",
			"items",
			"collection"
		]
	},
	"enter-more": {
		"tags": [
			"enter",
			"details",
			"more",
			"arrow"
		]
	},
	"tools-opportunity": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"overview",
			"map",
			"org",
			"tree"
		]
	},
	"measuring-point": {
		"tags": [
			"measure",
			"point",
			"scale",
			"precision",
			"arrow"
		]
	},
	"activity-items": {
		"tags": [
			"activity",
			"activities",
			"tasks",
			"to do",
			"list",
			"items"
		]
	},
	"sys-help-2": {
		"tags": [
			"system",
			"help",
			"circle",
			"question"
		]
	},
	"add-coursebook": {
		"tags": [
			"education",
			"course",
			"learning",
			"e book",
			"bookmark",
			"open",
			"knowledge",
			"course book",
			"program",
			"add",
			"plus",
			"additional",
			"another",
			"more"
		]
	},
	"overview-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"overview",
			"map",
			"org"
		]
	},
	"status-positive": {
		"tags": [
			"positive",
			"completed",
			"on track",
			"led",
			"traffic lights",
			"street sign",
			"lifecycle"
		]
	},
	"folder-blank": {
		"tags": [
			"folder",
			"blank"
		]
	},
	"begin": {
		"tags": [
			"begin",
			"start",
			"arrows"
		]
	},
	"line-chart-time-axis": {
		"tags": [
			"chart",
			"line",
			"time",
			"axis"
		]
	},
	"slim-arrow-right": {
		"tags": [
			"slim",
			"thin",
			"skinny",
			"arrow",
			"right",
			"scroll right"
		]
	},
	"number-sign": {
		"tags": [
			"number sign",
			"hash",
			"#'"
		]
	},
	"travel-expense-report": {
		"tags": [
			"report",
			"bill",
			"billing",
			"sales",
			"travel",
			"expense",
			"quote",
			"envelope",
			"invoice"
		]
	},
	"fridge": {
		"tags": [
			"fridge",
			"refrigerator",
			"icebox",
			"freezer",
			"cooler",
			"appliance"
		]
	},
	"multiple-bar-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"multiple bar chart"
		]
	},
	"company-view": {
		"tags": [
			"view",
			"group",
			"company",
			"personnel",
			"firm",
			"overview"
		]
	},
	"negative": {
		"tags": [
			"minus",
			"remove",
			"subtract",
			"negative"
		]
	},
	"group": {
		"tags": [
			"group",
			"team",
			"people",
			"communication",
			"collaborate",
			"teamwork",
			"peer to peer",
			"design thinking",
			"work",
			"together",
			"project",
			"customers",
			"audience",
			"category"
		]
	},
	"sys-cancel-2": {
		"tags": [
			"clear",
			"remove",
			"cancel",
			"x"
		]
	},
	"add-folder": {
		"tags": [
			"folder",
			"add",
			"directory",
			"additional",
			"library"
		]
	},
	"away": {
		"tags": [
			"time",
			"clock",
			"away",
			"availability",
			"chronicle",
			"be right back",
			"appear away",
			"off work",
			"me"
		]
	},
	"busy": {
		"tags": [
			"busy",
			"unavailable",
			"not responsive",
			"blocked",
			"circle",
			"dot",
			"me",
			"working"
		]
	},
	"appear-offline": {
		"tags": [
			"appear-offline",
			"offline",
			"hide",
			"blocked",
			"circle",
			"me"
		]
	},
	"blur": {
		"tags": [
			"blur",
			"tool",
			"screenshot",
			"image",
			"edit",
			"modify",
			"distort",
			"smudge",
			"blurry",
			"filter",
			"effects"
		]
	},
	"pixelate": {
		"tags": [
			"pixel",
			"tool",
			"screenshot",
			"image",
			"edit",
			"modify",
			"distort",
			"pixelate",
			"squares",
			"dots",
			"resolution",
			"noise"
		]
	},
	"horizontal-combination-chart": {
		"tags": [
			"analytics",
			"chart",
			"display",
			"data",
			"combination",
			"line-chart",
			"bar",
			"horizontal"
		]
	},
	"add-employee": {
		"tags": [
			"customer",
			"user",
			"person",
			"individual",
			"contacts",
			"add",
			"additional",
			"employee",
			"hr",
			"human resources",
			"plus"
		]
	},
	"text-color": {
		"tags": [
			"color",
			"formatting",
			"edit",
			"colour",
			"letters",
			"rich",
			"rich-text",
			"options"
		]
	},
	"browse-folder": {
		"tags": [
			"browse folder",
			"search",
			"look up",
			"folder",
			"browse",
			"directory",
			"library",
			"find"
		]
	},
	"primary-key": {
		"tags": [
			"key",
			"primary",
			"data",
			"lock",
			"important"
		]
	},
	"two-keys": {
		"tags": [
			"key",
			"primary",
			"foreign",
			"data",
			"lock",
			"important"
		]
	},
	"strikethrough": {
		"tags": [
			"strike",
			"formatting",
			"edit",
			"cross out",
			"letters",
			"rich",
			"rich-text",
			"options",
			"review"
		]
	},
	"text": {
		"tags": [
			"text",
			"formatting",
			"edit",
			"input",
			"letters",
			"rich",
			"rich-text"
		]
	},
	"responsive": {
		"tags": [
			"desktop",
			"tablet",
			"mobile",
			"phone",
			"adaptive",
			"cozy",
			"compact",
			"web app"
		]
	},
	"desktop-mobile": {
		"tags": [
			"desktop",
			"tablet",
			"mobile",
			"phone",
			"adaptive",
			"cozy",
			"compact",
			"web app",
			"responsive",
			"adaptive"
		]
	},
	"table-row": {
		"tags": [
			"display",
			"data",
			"table",
			"table row",
			"grid",
			"waffle",
			"view",
			"rows"
		]
	},
	"table-column": {
		"tags": [
			"display",
			"data",
			"table",
			"table column",
			"grid",
			"waffle",
			"view",
			"columns"
		]
	},
	"validate": {
		"tags": [
			"message",
			"check",
			"validate",
			"security",
			"status",
			"approve",
			"reject",
			"decision",
			"certify"
		]
	},
	"keyboard-and-mouse": {
		"tags": [
			"mouse",
			"desktop",
			"click",
			"keyboard",
			"compact",
			"condensed",
			"controls",
			"devices"
		]
	},
	"touch": {
		"tags": [
			"finger",
			"mobile",
			"press",
			"touch",
			"cozy",
			"comfortable",
			"controls",
			"devices"
		]
	},
	"expand-all": {
		"tags": [
			"expand",
			"all",
			"open",
			"open all",
			"expand all",
			"arrow",
			"table",
			"tree",
			"list"
		]
	},
	"collapse-all": {
		"tags": [
			"collapse",
			"all",
			"close",
			"close all",
			"collapse all",
			"arrow",
			"table",
			"tree",
			"list"
		]
	},
	"combine": {
		"tags": [
			"merge",
			"arrow",
			"combine",
			"glue",
			"together",
			"join",
			"meld",
			"unite",
			"aggregate",
			"interflow",
			"runtime authoring",
			"runtime adaptation",
			"ui adaptation",
			"arrows-right"
		]
	},
	"split": {
		"tags": [
			"split",
			"arrow",
			"separate",
			"break",
			"cleave",
			"clove",
			"cut up",
			"runtime authoring",
			"runtime adaptation",
			"ui adaptation",
			"arrows-right"
		]
	},
	"megamenu": {
		"tags": [
			"navigation",
			"arrows-down",
			"arrow-down",
			"down",
			"shell"
		]
	},
	"feedback": {
		"tags": [
			"feedback",
			"smiley",
			"comment",
			"shell",
			"callout",
			"speech"
		]
	},
	"information": {
		"tags": [
			"information",
			"info",
			"message",
			"message-information",
			"i",
			"filled",
			"notification"
		]
	},
	"s4hana": {
		"tags": [
			"s4hana",
			"S/4HANA",
			"S/4",
			"hana",
			"product switch",
			"product",
			"switch"
		]
	},
	"translate": {
		"tags": [
			"translate",
			"text",
			"letters",
			"translation",
			"A",
			"arrows"
		]
	},
	"clear-all": {
		"tags": [
			"clear",
			"clear-all",
			"square",
			"x",
			"delete",
			"remove",
			"check",
			"uncheck"
		]
	},
	"command-line-interfaces": {
		"tags": [
			"command",
			"command-line",
			"interfaces",
			"code",
			"develop",
			"source",
			"source-code",
			"write",
			"syntax",
			"programming",
			"technical"
		]
	},
	"sum": {
		"tags": [
			"sigma",
			"sum",
			"summation",
			"addition",
			"total",
			"aggregate",
			"amount",
			"covariance",
			"covariance matrix"
		]
	},
	"qr-code": {
		"tags": [
			"qr",
			"qrcode",
			"qr-code",
			"scan",
			"code"
		]
	},
	"space-navigation": {
		"tags": [
			"space",
			"navigation",
			"circle",
			"shape",
			"line"
		]
	},
	"in-progress": {
		"tags": [
			"in process",
			"status",
			"working",
			"current",
			"on-going",
			"clock",
			"Time",
			"Square"
		]
	},
	"not-editable": {
		"tags": [
			"not editable",
			"pencil",
			"status",
			"editable false",
			"crossed-out"
		]
	},
	"bookmark-2": {
		"tags": [
			"bookmark",
			"later",
			"marker",
			"save",
			"remove selection",
			"choose me",
			"not selected",
			"unfilled"
		]
	},
	"detail-less": {
		"tags": [
			"detail",
			"hide detail",
			"popin",
			"table",
			"less",
			"information",
			"data",
			"hide",
			"reduce"
		]
	},
	"detail-more": {
		"tags": [
			"detail",
			"show detail",
			"popin",
			"table",
			"more",
			"information",
			"data",
			"show",
			"extend",
			"grow"
		]
	},
	"flag-2": {
		"tags": [
			"unflag",
			"flag",
			"unmark",
			"mark",
			"remove marker",
			"important",
			"remove selection",
			"choose me",
			"not selected",
			"unfilled"
		]
	},
	"folder-2": {
		"tags": [
			"folder",
			"full",
			"content",
			"detail",
			"choose",
			"selected",
			"filled"
		]
	},
	"heart": {
		"tags": [
			"heart",
			"full",
			"love",
			"feeling",
			"emotion",
			"care",
			"favorite",
			"choose",
			"selected",
			"filled",
			"content"
		]
	},
	"heart-2": {
		"tags": [
			"heart",
			"empty",
			"unfulfilled",
			"love",
			"unloved",
			"not loved",
			"feeling",
			"emotion",
			"care",
			"unfavorite",
			"choose me",
			"not selected",
			"unfilled"
		]
	},
	"paint-bucket": {
		"tags": [
			"filled",
			"color",
			"colour",
			"bucket",
			"spill",
			"drop",
			"fill"
		]
	},
	"tri-state": {
		"tags": [
			"third",
			"state",
			"parial",
			"selected",
			"square",
			"box",
			"table",
			"tree",
			"list",
			"selection",
			"tri",
			"tri-state"
		]
	},
	"non-binary": {
		"tags": [
			"non-binary",
			"shapes",
			"symbol",
			"gender"
		]
	},
	"direction-arrows": {
		"tags": [
			"arrow",
			"slider",
			"direction",
			"left",
			"right"
		]
	},
	"female": {
		"tags": [
			"female",
			"woman",
			"girl",
			"shapes",
			"symbol",
			"gender"
		]
	},
	"gender-male-and-female": {
		"tags": [
			"male",
			"man",
			"boy",
			"female",
			"woman",
			"girl",
			"shapes",
			"symbol",
			"gender"
		]
	},
	"male": {
		"tags": [
			"male",
			"man",
			"boy",
			"shapes",
			"symbol",
			"gender"
		]
	},
	"rotate": {
		"tags": [
			"arrow",
			"square",
			"object",
			"rotate",
			"around",
			"direction"
		]
	},
	"cloud-check": {
		"tags": [
			"cloud",
			"check",
			"data"
		]
	},
	"enablement": {
		"tags": [
			"people",
			"person",
			"setting",
			"chart",
			"enable",
			"tool",
			"wrench",
			"widgets"
		]
	},
	"locate-me-2": {
		"tags": [
			"arrow",
			"locate",
			"me",
			"map",
			"location",
			"pointer",
			"navigation",
			"filled"
		]
	},
	"map-fill": {
		"tags": [
			"map",
			"pin",
			"location",
			"place",
			"area",
			"solid",
			"fill",
			"filled"
		]
	},
	"biometric-face": {
		"tags": [
			"face",
			"faceid",
			"viewfinder",
			"id",
			"recognition"
		]
	},
	"biometric-thumb": {
		"tags": [
			"fingerprint",
			"finger",
			"thumb",
			"id",
			"recognition"
		]
	},
	"dark-mode": {
		"tags": [
			"dark",
			"moon",
			"night",
			"mode"
		]
	},
	"light-mode": {
		"tags": [
			"light",
			"sun",
			"sunny",
			"mode",
			"day"
		]
	},
	"people-connected": {
		"tags": [
			"people",
			"connection",
			"connected",
			"collaboration",
			"task-center",
			"team",
			"collaborate",
			"work"
		]
	},
	"select-appointments": {
		"tags": [
			"date picker",
			"calendar",
			"month",
			"week",
			"day",
			"appointment",
			"check",
			"select",
			"choose"
		]
	},
	"accessibility": {
		"tags": [
			"user",
			"person",
			"accessible",
			"accessibility",
			"inclusive",
			"inclusion",
			"people"
		]
	},
	"add-calendar": {
		"tags": [
			"appointment",
			"vacation",
			"leave",
			"request",
			"add",
			"plus",
			"calendar"
		]
	},
	"bell-2": {
		"tags": [
			"bell",
			"alarm",
			"notify",
			"alerts",
			"full",
			"filled"
		]
	},
	"currency": {
		"tags": [
			"money",
			"bills",
			"currency",
			"payment",
			"cash"
		]
	},
	"high-priority": {
		"tags": [
			"warning",
			"critical",
			"message",
			"alert",
			"status",
			"!",
			"notification",
			"exclamation"
		]
	},
	"time-off": {
		"tags": [
			"holiday",
			"vacation",
			"leave",
			"request",
			"out-of-office",
			"out",
			"appointment",
			"calendar"
		]
	},
	"da": {
		"tags": [
			"artificial intelligence",
			"voice recognition",
			"npl",
			"NPL",
			"assistant",
			"chatbot",
			"machine learning",
			"ai",
			"digital",
			"assistance",
			"virtual",
			"intelligence",
			"conversational ai",
			"contextual understanding",
			"artificial",
			"machine"
		]
	},
	"da-2": {
		"tags": [
			"artificial intelligence",
			"voice recognition",
			"npl",
			"NPL",
			"assistant",
			"chatbot",
			"machine learning",
			"ai",
			"digital",
			"assistance",
			"virtual",
			"intelligence",
			"conversational ai",
			"contextual understanding",
			"artificial",
			"machine",
			"filled",
			"full"
		]
	},
	"ai": {
		"tags": [
			"artificial intelligence",
			"star",
			"information",
			"sparkle",
			"magic",
			"generate",
			"automate",
			"automation",
			"generic",
			"situation",
			"machine learning",
			"ai",
			"digital",
			"assistance",
			"virtual",
			"intelligence",
			"contextual understanding",
			"artificial",
			"robot",
			"machine"
		]
	},
	"in-progress-2": {
		"tags": [
			"in process",
			"status",
			"working",
			"current",
			"on-going",
			"clock",
			"Time",
			"Square",
			"filled",
			"full"
		]
	}
}