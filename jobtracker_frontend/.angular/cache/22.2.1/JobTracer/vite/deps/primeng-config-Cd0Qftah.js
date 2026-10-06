import { Al as ɵɵdefineInjectable, Bc as PLATFORM_ID, Di as provideAppInitializer, Fn as Injectable, In as Input, Tl as signal, Ul as Subject, Wi as setClassMetadata, _c as DOCUMENT, _l as makeEnvironmentProviders, ao as ɵɵdefineNgModule, cn as Component, co as ɵɵdirectiveInject, cs as ɵɵprojectionDef, dl as inject, il as effect, io as ɵɵdefineDirective, jl as ɵɵdefineInjector, jo as ɵɵgetInheritedFactory, kc as InjectionToken, qn as NgModule, qt as untracked, ro as ɵɵdefineComponent, ss as ɵɵprojection, vr as TemplateRef, wn as Directive } from "./core-Dl1ZlCfZ.js";
import { c as CommonModule } from "./common-CxQw7uMl.js";
import { H as ce$1, L as $$1, Q as b$1, Y as B$1, _ as R$1, at as x$1, et as d$1, m as N$1, tt as ee$1, v as S$1, w as gs } from "./dist-BNvepxnO.js";
//#region node_modules/@primeuix/styles/dist/base/index.mjs
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-component {\n        font-family: dt('typography.font.family');\n        font-feature-settings: inherit;\n        line-height: dt('typography.line.height');\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: var(--px-icon-size, dt('icon.size'));\n        height: var(--px-icon-size, dt('icon.size'));\n        flex-shrink: 0;\n    }\n\n    .p-icon-spin {\n        -webkit-animation: p-icon-spin 2s infinite linear;\n        animation: p-icon-spin 2s infinite linear;\n    }\n\n    @-webkit-keyframes p-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    @keyframes p-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";
//#endregion
//#region node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class UseStyle {
	document = inject(DOCUMENT);
	styleSheets = /* @__PURE__ */ new Map();
	shadowRoots = /* @__PURE__ */ new Set();
	addShadowRoot(shadowRoot) {
		if (!this.isAdoptionSupported() || !(shadowRoot instanceof ShadowRoot)) return () => {};
		if (!this.shadowRoots.has(shadowRoot)) {
			this.shadowRoots.add(shadowRoot);
			shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, ...[...this.styleSheets.values()].filter((styleSheet) => !shadowRoot.adoptedStyleSheets.includes(styleSheet))];
		}
		return () => this.removeShadowRoot(shadowRoot);
	}
	removeShadowRoot(shadowRoot) {
		if (!this.shadowRoots.delete(shadowRoot)) return;
		const styleSheets = new Set(this.styleSheets.values());
		shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets.filter((styleSheet) => !styleSheets.has(styleSheet));
	}
	remove(name) {
		const styleSheet = this.styleSheets.get(name);
		this.styleSheets.delete(name);
		this.document?.querySelector(`style[data-primeng-style-id="${name}"]`)?.remove();
		if (!styleSheet) return;
		this.shadowRoots.forEach((shadowRoot) => {
			shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets.filter((adopted) => adopted !== styleSheet);
		});
	}
	use(css, options = {}) {
		let cssRef = css;
		let styleRef = null;
		const { name = `style_${++_id}`, id = void 0, media = void 0, nonce = void 0, first = false, variables = false } = options;
		if (!this.document) return;
		styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
		if (styleRef) {
			if (!styleRef.isConnected) {
				cssRef = css;
				const HEAD = this.document.head;
				ce$1(styleRef, "nonce", nonce);
				if (first && HEAD.firstChild) HEAD.insertBefore(styleRef, HEAD.firstChild);
				else HEAD.appendChild(styleRef);
				$$1(styleRef, {
					type: "text/css",
					media,
					nonce,
					"data-primeng-style-id": name
				});
			}
			if (styleRef.textContent !== cssRef) styleRef.textContent = cssRef;
		}
		if (!variables) this.adoptStyleSheet(name, cssRef ?? "", first);
		return {
			id,
			name,
			el: styleRef,
			css: cssRef
		};
	}
	adoptStyleSheet(name, css, first) {
		if (!this.isAdoptionSupported()) return;
		const styleSheet = this.styleSheets.get(name);
		if (styleSheet) {
			styleSheet.replaceSync(css);
			return;
		}
		const added = new CSSStyleSheet();
		added.replaceSync(css);
		this.styleSheets = first ? new Map([[name, added], ...this.styleSheets]) : this.styleSheets.set(name, added);
		this.shadowRoots.forEach((shadowRoot) => {
			shadowRoot.adoptedStyleSheets = first ? [added, ...shadowRoot.adoptedStyleSheets] : [...shadowRoot.adoptedStyleSheets, added];
		});
	}
	isAdoptionSupported() {
		return typeof ShadowRoot !== "undefined" && typeof CSSStyleSheet !== "undefined" && typeof CSSStyleSheet.prototype.replaceSync === "function";
	}
	static ɵfac = function UseStyle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || UseStyle)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: UseStyle,
		factory: UseStyle.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-base.mjs
var base_default = {
	_loadedStyleNames: /* @__PURE__ */ new Set(),
	getLoadedStyleNames() {
		return this._loadedStyleNames;
	},
	isStyleNameLoaded(name) {
		return this._loadedStyleNames.has(name);
	},
	setLoadedStyleName(name) {
		this._loadedStyleNames.add(name);
	},
	deleteLoadedStyleName(name) {
		this._loadedStyleNames.delete(name);
	},
	clearLoadedStyleNames() {
		this._loadedStyleNames.clear();
	}
};
var css$1 = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`;
var BaseStyle = class BaseStyle {
	name = "base";
	useStyle = inject(UseStyle);
	css = void 0;
	style = void 0;
	classes = {};
	inlineStyles = {};
	load = (style, options = {}, transform = (cs) => cs) => {
		const computedStyle = transform(gs`${x$1(style, { dt: N$1 })}`);
		return computedStyle ? this.useStyle.use(B$1(computedStyle), {
			name: this.name,
			...options
		}) : {};
	};
	loadCSS = (options = {}) => this.load(this.css, options);
	loadStyle = (options = {}, style = "") => this.load(this.style, options, (computedStyle = "") => S$1.transformCSS(options.name || this.name, `${computedStyle}${gs`${style}`}`));
	loadBaseCSS = (options = {}) => this.load(css$1, options);
	loadBaseStyle = (options = {}, style$1 = "") => this.load(style, options, (computedStyle = "") => S$1.transformCSS(options.name || this.name, `${computedStyle}${gs`${style$1}`}`));
	getCommonTheme = (params) => S$1.getCommon(this.name, params);
	getComponentTheme = (params) => S$1.getComponent(this.name, params);
	getPresetTheme = (preset, selector, params) => S$1.getCustomPreset(this.name, preset, selector, params);
	getLayerOrderThemeCSS = () => S$1.getLayerOrderCSS(this.name);
	getStyleSheet = (extendedCSS = "", props = {}) => {
		if (this.css) {
			const _css = x$1(this.css, { dt: N$1 });
			const _style = B$1(gs`${_css}${extendedCSS}`);
			const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
			return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
		}
		return "";
	};
	getCommonThemeStyleSheet = (params, props = {}) => S$1.getCommonStyleSheet(this.name, params, props);
	getThemeStyleSheet = (params, props = {}) => {
		let css$2 = [S$1.getStyleSheet(this.name, params, props)];
		if (this.style) {
			const name = this.name === "base" ? "global-style" : `${this.name}-style`;
			const _css = gs`${x$1(this.style, { dt: N$1 })}`;
			const _style = B$1(S$1.transformCSS(name, _css));
			const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
			css$2.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
		}
		return css$2.join("");
	};
	static ɵfac = function BaseStyle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BaseStyle)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: BaseStyle,
		factory: BaseStyle.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-api.mjs
var ConfirmEventType;
(function(ConfirmEventType) {
	ConfirmEventType[ConfirmEventType["ACCEPT"] = 0] = "ACCEPT";
	ConfirmEventType[ConfirmEventType["REJECT"] = 1] = "REJECT";
	ConfirmEventType[ConfirmEventType["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class ConfirmationService {
	requireConfirmationSource = new Subject();
	acceptConfirmationSource = new Subject();
	requireConfirmation$ = this.requireConfirmationSource.asObservable();
	accept = this.acceptConfirmationSource.asObservable();
	confirm(confirmation) {
		this.requireConfirmationSource.next(confirmation);
		return this;
	}
	close() {
		this.requireConfirmationSource.next(null);
		return this;
	}
	onAccept() {
		this.acceptConfirmationSource.next(null);
	}
	static ɵfac = function ConfirmationService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ConfirmationService)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: ConfirmationService,
		factory: ConfirmationService.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{ type: Injectable }], null, null);
})();
var ContextMenuService = class ContextMenuService {
	activeItemKeyChange = new Subject();
	activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
	activeItemKey;
	changeKey(key) {
		this.activeItemKey = key;
		this.activeItemKeyChange.next(this.activeItemKey);
	}
	reset() {
		this.activeItemKey = null;
		this.activeItemKeyChange.next(this.activeItemKey);
	}
	static ɵfac = function ContextMenuService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ContextMenuService)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: ContextMenuService,
		factory: ContextMenuService.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{ type: Injectable }], null, null);
})();
var FilterMatchMode = class {
	static STARTS_WITH = "startsWith";
	static CONTAINS = "contains";
	static NOT_CONTAINS = "notContains";
	static ENDS_WITH = "endsWith";
	static EQUALS = "equals";
	static NOT_EQUALS = "notEquals";
	static IN = "in";
	static LESS_THAN = "lt";
	static LESS_THAN_OR_EQUAL_TO = "lte";
	static GREATER_THAN = "gt";
	static GREATER_THAN_OR_EQUAL_TO = "gte";
	static BETWEEN = "between";
	static IS = "is";
	static IS_NOT = "isNot";
	static BEFORE = "before";
	static AFTER = "after";
	static DATE_IS = "dateIs";
	static DATE_IS_NOT = "dateIsNot";
	static DATE_BEFORE = "dateBefore";
	static DATE_AFTER = "dateAfter";
};
var FilterService = class FilterService {
	filters = {
		startsWith: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") return true;
			if (value === void 0 || value === null) return false;
			let filterValue = ee$1(filter.toString()).toLocaleLowerCase(filterLocale);
			return ee$1(value.toString()).toLocaleLowerCase(filterLocale).slice(0, filterValue.length) === filterValue;
		},
		contains: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") return true;
			if (value === void 0 || value === null) return false;
			let filterValue = ee$1(filter.toString()).toLocaleLowerCase(filterLocale);
			return ee$1(value.toString()).toLocaleLowerCase(filterLocale).indexOf(filterValue) !== -1;
		},
		notContains: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") return true;
			if (value === void 0 || value === null) return false;
			let filterValue = ee$1(filter.toString()).toLocaleLowerCase(filterLocale);
			return ee$1(value.toString()).toLocaleLowerCase(filterLocale).indexOf(filterValue) === -1;
		},
		endsWith: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") return true;
			if (value === void 0 || value === null) return false;
			let filterValue = ee$1(filter.toString()).toLocaleLowerCase(filterLocale);
			let stringValue = ee$1(value.toString()).toLocaleLowerCase(filterLocale);
			return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
		},
		equals: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") return true;
			if (value === void 0 || value === null) return false;
			if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
			else if (value == filter) return true;
			else return ee$1(value.toString()).toLocaleLowerCase(filterLocale) == ee$1(filter.toString()).toLocaleLowerCase(filterLocale);
		},
		notEquals: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") return true;
			if (value === void 0 || value === null) return true;
			if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
			else if (value == filter) return false;
			else return ee$1(value.toString()).toLocaleLowerCase(filterLocale) != ee$1(filter.toString()).toLocaleLowerCase(filterLocale);
		},
		in: (value, filter) => {
			if (filter === void 0 || filter === null || filter.length === 0) return true;
			for (let i = 0; i < filter.length; i++) if (b$1(value, filter[i])) return true;
			return false;
		},
		between: (value, filter) => {
			if (filter == null || filter[0] == null || filter[1] == null) return true;
			if (value === void 0 || value === null) return false;
			if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
			else return filter[0] <= value && value <= filter[1];
		},
		lt: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null) return true;
			if (value === void 0 || value === null) return false;
			if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
			else return value < filter;
		},
		lte: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null) return true;
			if (value === void 0 || value === null) return false;
			if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
			else return value <= filter;
		},
		gt: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null) return true;
			if (value === void 0 || value === null) return false;
			if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
			else return value > filter;
		},
		gte: (value, filter, filterLocale) => {
			if (filter === void 0 || filter === null) return true;
			if (value === void 0 || value === null) return false;
			if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
			else return value >= filter;
		},
		is: (value, filter, filterLocale) => this.filters.equals(value, filter, filterLocale),
		isNot: (value, filter, filterLocale) => this.filters.notEquals(value, filter, filterLocale),
		before: (value, filter, filterLocale) => this.filters.lt(value, filter, filterLocale),
		after: (value, filter, filterLocale) => this.filters.gt(value, filter, filterLocale),
		dateIs: (value, filter) => {
			if (filter === void 0 || filter === null) return true;
			if (value === void 0 || value === null) return false;
			return value.toDateString() === filter.toDateString();
		},
		dateIsNot: (value, filter) => {
			if (filter === void 0 || filter === null) return true;
			if (value === void 0 || value === null) return false;
			return value.toDateString() !== filter.toDateString();
		},
		dateBefore: (value, filter) => {
			if (filter === void 0 || filter === null) return true;
			if (value === void 0 || value === null) return false;
			return value.getTime() < filter.getTime();
		},
		dateAfter: (value, filter) => {
			if (filter === void 0 || filter === null) return true;
			if (value === void 0 || value === null) return false;
			value.setHours(0, 0, 0, 0);
			return value.getTime() > filter.getTime();
		}
	};
	filter(value, fields, filterValue, filterMatchMode, filterLocale) {
		let filteredItems = [];
		if (value) for (let item of value) for (let field of fields) {
			let fieldValue = d$1(item, field);
			if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
				filteredItems.push(item);
				break;
			}
		}
		return filteredItems;
	}
	register(rule, fn) {
		this.filters[rule] = fn;
	}
	static ɵfac = function FilterService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FilterService)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: FilterService,
		factory: FilterService.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var MessageService = class MessageService {
	messageSource = new Subject();
	clearSource = new Subject();
	messageObserver = this.messageSource.asObservable();
	clearObserver = this.clearSource.asObservable();
	add(message) {
		if (message) this.messageSource.next(message);
	}
	addAll(messages) {
		if (messages && messages.length) this.messageSource.next(messages);
	}
	clear(key) {
		this.clearSource.next(key || null);
	}
	static ɵfac = function MessageService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MessageService)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: MessageService,
		factory: MessageService.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{ type: Injectable }], null, null);
})();
var OverlayService = class OverlayService {
	clickSource = new Subject();
	parentDragSource = new Subject();
	clickObservable = this.clickSource.asObservable();
	parentDragObservable = this.parentDragSource.asObservable();
	add(event) {
		if (event) this.clickSource.next(event);
	}
	emitParentDrag(container) {
		this.parentDragSource.next(container);
	}
	static ɵfac = function OverlayService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || OverlayService)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: OverlayService,
		factory: OverlayService.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var Header = class Header {
	static ɵfac = function Header_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Header)();
	};
	static ɵcmp = (function() {
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Header,
			selectors: [["p-header"]],
			standalone: false,
			ngContentSelectors: ["*"],
			decls: 1,
			vars: 0,
			template: function Header_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
				}
			},
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
		type: Component,
		args: [{
			selector: "p-header",
			template: "<ng-content></ng-content>",
			standalone: false
		}]
	}], null, null);
})();
var Footer = class Footer {
	static ɵfac = function Footer_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Footer)();
	};
	static ɵcmp = (function() {
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Footer,
			selectors: [["p-footer"]],
			standalone: false,
			ngContentSelectors: ["*"],
			decls: 1,
			vars: 0,
			template: function Footer_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
				}
			},
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
		type: Component,
		args: [{
			selector: "p-footer",
			template: "<ng-content></ng-content>",
			standalone: false
		}]
	}], null, null);
})();
var PrimeTemplate = class PrimeTemplate {
	template;
	type;
	name;
	constructor(template) {
		this.template = template;
	}
	getType() {
		return this.name;
	}
	static ɵfac = function PrimeTemplate_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PrimeTemplate)(ɵɵdirectiveInject(TemplateRef));
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: PrimeTemplate,
		selectors: [[
			"",
			"pTemplate",
			""
		]],
		inputs: {
			type: "type",
			name: [
				0,
				"pTemplate",
				"name"
			]
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
		type: Directive,
		args: [{
			selector: "[pTemplate]",
			standalone: true
		}]
	}], () => [{ type: TemplateRef }], {
		type: [{ type: Input }],
		name: [{
			type: Input,
			args: ["pTemplate"]
		}]
	});
})();
var SharedModule = class SharedModule {
	static ɵfac = function SharedModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SharedModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: SharedModule,
		declarations: [Header, Footer],
		imports: [CommonModule, PrimeTemplate],
		exports: [
			Header,
			Footer,
			PrimeTemplate
		]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [CommonModule] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
		type: NgModule,
		args: [{
			imports: [CommonModule, PrimeTemplate],
			exports: [
				Header,
				Footer,
				PrimeTemplate
			],
			declarations: [Header, Footer]
		}]
	}], null, null);
})();
var TreeDragDropService = class TreeDragDropService {
	dragStartSource = new Subject();
	dragStopSource = new Subject();
	dragStart$ = this.dragStartSource.asObservable();
	dragStop$ = this.dragStopSource.asObservable();
	startDrag(event) {
		this.dragStartSource.next(event);
	}
	stopDrag(event) {
		this.dragStopSource.next(event);
	}
	static ɵfac = function TreeDragDropService_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || TreeDragDropService)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: TreeDragDropService,
		factory: TreeDragDropService.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{ type: Injectable }], null, null);
})();
//#endregion
//#region node_modules/@primeui/license-manager/dist/index.mjs
var e = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty;
var n = Object.prototype.propertyIsEnumerable;
var i = (t, r, n) => r in t ? e(t, r, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : t[r] = n;
var o = (e, o) => {
	for (var c in o || (o = {})) r.call(o, c) && i(e, c, o[c]);
	if (t) for (var c of t(o)) n.call(o, c) && i(e, c, o[c]);
	return e;
};
var c = (e, t, r) => new Promise((n, i) => {
	var o = (e) => {
		try {
			u(r.next(e));
		} catch (e) {
			i(e);
		}
	}, c = (e) => {
		try {
			u(r.throw(e));
		} catch (e) {
			i(e);
		}
	}, u = (e) => e.done ? n(e.value) : Promise.resolve(e.value).then(o, c);
	u((r = r.apply(e, t)).next());
});
var u = class extends Error {};
var l = (e) => " " === e || "\n" === e || "\r" === e || "	" === e;
var a = (e) => void 0 !== e && e >= "0" && e <= "9";
function s(e) {
	if (void 0 === e) throw new u("Bad escape");
	if (e >= "0" && e <= "9") return e.charCodeAt(0) - 48;
	if (e >= "a" && e <= "f") return e.charCodeAt(0) - 87;
	if (e >= "A" && e <= "F") return e.charCodeAt(0) - 55;
	throw new u("Bad escape");
}
var f = (() => {
	const e = Object.create(null);
	for (let t = 0; t < 64; t++) e["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[t]] = t;
	return e;
})();
function d(e) {
	if (1 == e.length % 4) throw new Error("Invalid base64url length");
	const t = Math.floor(6 * e.length / 8), r = new Uint8Array(t);
	let n = 0, i = 0, o = 0;
	for (let t = 0; t < e.length; t++) {
		const u = f[e[t]];
		if (void 0 === u) throw new Error("Invalid base64url character");
		n = n << 6 | u, i += 6, i >= 8 && (i -= 8, r[o++] = n >> i & 255);
	}
	if (i > 0 && n & (1 << i) - 1) throw new Error("Invalid base64url trailing bits");
	return r;
}
var y = Object.freeze({
	primeui: "primeui",
	scheduler: "primeui-pro:scheduler",
	texteditor: "primeui-pro:text-editor",
	charts: "primeui-pro:charts",
	diagram: "primeui-pro:diagram",
	pdfviewer: "primeui-pro:pdf-viewer",
	taskboard: "primeui-pro:task-board",
	datagrid: "primeui-pro:datagrid",
	ganttchart: "primeui-pro:gantt-chart",
	filemanager: "primeui-pro:file-manager"
});
var g = 16;
var v = 65536;
var m = () => new Array(g).fill(0);
function b(e) {
	const t = m();
	let r = e;
	for (let e = 0; e < g && 0 !== r; e++) t[e] = r % v, r = Math.floor(r / v);
	return t;
}
var x = m();
var U = b(1);
var E = (() => {
	const e = m();
	e[0] = 65517;
	for (let t = 1; t < 15; t++) e[t] = 65535;
	return e[15] = 32767, e;
})();
function z(e, t) {
	let r = t;
	for (; 0 !== r;) {
		let t = 38 * r;
		r = 0;
		for (let r = 0; r < g; r++) {
			const n = e[r] + t;
			if (t = Math.floor(n / v), e[r] = n - t * v, 0 === t) break;
		}
		r = t;
	}
}
function k(e, t) {
	const r = new Array(32).fill(0);
	for (let n = 0; n < g; n++) {
		const i = e[n];
		if (0 !== i) {
			for (let e = 0; e < g; e++) r[n + e] = r[n + e] + i * t[e];
			if (n % 4 == 3) {
				let e = 0;
				for (let t = 0; t < 32; t++) {
					const n = r[t] + e;
					e = Math.floor(n / v), r[t] = n - e * v;
				}
			}
		}
	}
	return function(e) {
		for (let t = g; t < e.length; t++) e[t - g] = e[t - g] + 38 * e[t], e[t] = 0;
		let t = 0;
		for (let r = 0; r < g; r++) {
			const n = e[r] + t;
			t = Math.floor(n / v), e[r] = n - t * v;
		}
		const r = e.slice(0, g);
		return z(r, t), r;
	}(r);
}
function A(e) {
	return k(e, e);
}
function O(e, t) {
	const r = m();
	let n = 0;
	for (let i = 0; i < g; i++) {
		const o = e[i] + t[i] + n;
		n = o >= v ? 1 : 0, r[i] = o - n * v;
	}
	return z(r, n), r;
}
function j(e, t) {
	const r = m();
	let n = 0;
	for (let i = 0; i < g; i++) {
		const o = e[i] - t[i] - n;
		n = o < 0 ? 1 : 0, r[i] = o + n * v;
	}
	return z(r, -n), r;
}
function P(e) {
	return j(x, e);
}
function I(e) {
	for (let t = 15; t >= 0; t--) {
		if (e[t] > E[t]) return !0;
		if (e[t] < E[t]) return !1;
	}
	return !0;
}
function D(e) {
	const t = function(e) {
		const t = e.slice();
		let r = 0;
		for (let e = 0; e < g; e++) {
			const n = t[e] + r;
			r = Math.floor(n / v), t[e] = n - r * v;
		}
		z(t, r);
		for (let e = 0; e < 2 && I(t); e++) {
			let e = 0;
			for (let r = 0; r < g; r++) {
				const n = t[r] - E[r] - e;
				e = n < 0 ? 1 : 0, t[r] = n + e * v;
			}
		}
		return t;
	}(e), r = /* @__PURE__ */ new Uint8Array(32);
	for (let e = 0; e < g; e++) r[2 * e] = 255 & t[e], r[2 * e + 1] = t[e] >> 8 & 255;
	return r;
}
function T(e) {
	const t = D(e);
	let r = 0;
	for (let e = 0; e < 32; e++) r |= t[e];
	return 0 === r;
}
function F(e, t) {
	return T(j(e, t));
}
function C(e, t) {
	let r = e;
	for (let e = 0; e < t; e++) r = A(r);
	return r;
}
function M(e) {
	const t = A(e), r = k(e, C(t, 2)), n = k(t, r), i = k(r, A(n)), o = k(C(i, 5), i), c = k(C(o, 10), o), l = k(C(k(C(c, 20), c), 10), o), a = k(C(l, 50), l);
	return {
		z11: n,
		z250: k(C(k(C(a, 100), a), 50), l)
	};
}
function $(e) {
	const { z11: t, z250: r } = M(e);
	return k(C(r, 5), t);
}
var B = k(P(b(121665)), $(b(121666)));
var N = (() => {
	const e = /* @__PURE__ */ new Uint8Array(32);
	e[0] = 251;
	for (let t = 1; t < 31; t++) e[t] = 255;
	e[31] = 31;
	let t = U, r = b(2);
	for (let n = 0; n < 32; n++) for (let i = 0; i < 8; i++) 1 == (e[n] >> i & 1) && (t = k(t, r)), r = A(r);
	return t;
})();
function L(e, t) {
	const r = k(j(e.y, e.x), j(t.y, t.x)), n = k(O(e.y, e.x), O(t.y, t.x)), i = k(k(O(B, B), e.t), t.t), o = k(O(e.z, e.z), t.z), c = j(n, r), u = j(o, i), l = O(o, i), a = O(n, r);
	return {
		x: k(c, u),
		y: k(l, a),
		z: k(u, l),
		t: k(c, a)
	};
}
function S(e) {
	return L(e, e);
}
function _(e, t) {
	let r = {
		x: x.slice(),
		y: U.slice(),
		z: U.slice(),
		t: x.slice()
	}, n = !1;
	for (let i = e.length - 1; i >= 0; i--) for (let o = 7; o >= 0; o--) n && (r = S(r)), 1 == (e[i] >> o & 1) && (n ? r = L(r, t) : (r = {
		x: t.x.slice(),
		y: t.y.slice(),
		z: t.z.slice(),
		t: t.t.slice()
	}, n = !0));
	return r;
}
function V(e) {
	if (32 !== e.length) return null;
	const t = Uint8Array.from(e), r = 1 == (t[31] >> 7 & 1);
	t[31] = 127 & t[31];
	const n = function(e) {
		const t = m();
		for (let r = 0; r < g; r++) t[r] = e[2 * r] | e[2 * r + 1] << 8;
		return t;
	}(t);
	if (I(n)) return null;
	const i = A(n), o = j(i, U), c = O(k(B, i), U), u = k(A(c), c), l = k(A(u), c);
	let a = k(k(o, u), function(e) {
		const { z250: t } = M(e);
		return k(C(t, 2), e);
	}(k(o, l)));
	return F(k(A(a), c), o) || (a = k(a, N), F(k(A(a), c), o)) ? T(a) && r ? null : (!(1 & ~D(a)[0]) !== r && (a = P(a)), {
		x: a,
		y: n,
		z: U.slice(),
		t: k(a, n)
	}) : null;
}
var W = (() => {
	const e = V(D(k(b(4), $(b(5)))));
	if (!e) throw new Error("[@primeui/license-manager] Ed25519 base point failed to initialise");
	return e;
})();
function G(e) {
	const t = S(S(S(e)));
	return T(k(t.x, t.z)) && F(t.y, t.z);
}
var R = new Uint8Array([
	237,
	211,
	245,
	92,
	26,
	99,
	18,
	88,
	214,
	156,
	247,
	162,
	222,
	249,
	222,
	20,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	16
]);
function q(e) {
	for (let t = 31; t >= 0; t--) {
		if (e[t] < R[t]) return !0;
		if (e[t] > R[t]) return !1;
	}
	return !1;
}
var K = Object.freeze({
	primeui: "PrimeUI",
	scheduler: "Scheduler",
	texteditor: "TextEditor",
	charts: "Charts",
	diagram: "Diagram",
	pdfviewer: "PDF Viewer",
	taskboard: "Task Board",
	datagrid: "DataGrid",
	ganttchart: "Gantt",
	filemanager: "File Manager"
});
var H = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
function J(e) {
	return H(K, e) ? K[e] : "PrimeUI";
}
function Q(e) {
	return H(y, e) ? y[e] : void 0;
}
function X(e, t = "PrimeUI") {
	switch (e) {
		case "active": return `${t} license is active.`;
		case "grace": return `${t} license is in its grace period. Renew soon to keep using this version.`;
		case "expired": return `${t} license does not cover this version. Renew at primeui.store, or downgrade to a version released within your updates window.`;
		case "tampered": return `${t} license signature is invalid.`;
		case "wrong-product": return `License does not cover ${t}.`;
		case "missing": return `No license key configured for ${t}.`;
		case "invalid": return `${t} license is malformed.`;
		case "unconfigured": return `${t} license is not configured.`;
		default: return `${t} license status unknown.`;
	}
}
var Y = [
	[1116352408, 3609767458],
	[1899447441, 602891725],
	[3049323471, 3964484399],
	[3921009573, 2173295548],
	[961987163, 4081628472],
	[1508970993, 3053834265],
	[2453635748, 2937671579],
	[2870763221, 3664609560],
	[3624381080, 2734883394],
	[310598401, 1164996542],
	[607225278, 1323610764],
	[1426881987, 3590304994],
	[1925078388, 4068182383],
	[2162078206, 991336113],
	[2614888103, 633803317],
	[3248222580, 3479774868],
	[3835390401, 2666613458],
	[4022224774, 944711139],
	[264347078, 2341262773],
	[604807628, 2007800933],
	[770255983, 1495990901],
	[1249150122, 1856431235],
	[1555081692, 3175218132],
	[1996064986, 2198950837],
	[2554220882, 3999719339],
	[2821834349, 766784016],
	[2952996808, 2566594879],
	[3210313671, 3203337956],
	[3336571891, 1034457026],
	[3584528711, 2466948901],
	[113926993, 3758326383],
	[338241895, 168717936],
	[666307205, 1188179964],
	[773529912, 1546045734],
	[1294757372, 1522805485],
	[1396182291, 2643833823],
	[1695183700, 2343527390],
	[1986661051, 1014477480],
	[2177026350, 1206759142],
	[2456956037, 344077627],
	[2730485921, 1290863460],
	[2820302411, 3158454273],
	[3259730800, 3505952657],
	[3345764771, 106217008],
	[3516065817, 3606008344],
	[3600352804, 1432725776],
	[4094571909, 1467031594],
	[275423344, 851169720],
	[430227734, 3100823752],
	[506948616, 1363258195],
	[659060556, 3750685593],
	[883997877, 3785050280],
	[958139571, 3318307427],
	[1322822218, 3812723403],
	[1537002063, 2003034995],
	[1747873779, 3602036899],
	[1955562222, 1575990012],
	[2024104815, 1125592928],
	[2227730452, 2716904306],
	[2361852424, 442776044],
	[2428436474, 593698344],
	[2756734187, 3733110249],
	[3204031479, 2999351573],
	[3329325298, 3815920427],
	[3391569614, 3928383900],
	[3515267271, 566280711],
	[3940187606, 3454069534],
	[4118630271, 4000239992],
	[116418474, 1914138554],
	[174292421, 2731055270],
	[289380356, 3203993006],
	[460393269, 320620315],
	[685471733, 587496836],
	[852142971, 1086792851],
	[1017036298, 365543100],
	[1126000580, 2618297676],
	[1288033470, 3409855158],
	[1501505948, 4234509866],
	[1607167915, 987167468],
	[1816402316, 1246189591]
];
var Z = [
	[1779033703, 4089235720],
	[3144134277, 2227873595],
	[1013904242, 4271175723],
	[2773480762, 1595750129],
	[1359893119, 2917565137],
	[2600822924, 725511199],
	[528734635, 4215389547],
	[1541459225, 327033209]
];
function ee(e, t, r) {
	return 32 === r ? [0 | t, 0 | e] : r < 32 ? [e >>> r | t << 32 - r, t >>> r | e << 32 - r] : [t >>> r - 32 | e << 64 - r, e >>> r - 32 | t << 64 - r];
}
function te(e, t, r) {
	return r < 32 ? [e >>> r, t >>> r | e << 32 - r] : [0, e >>> r - 32];
}
function re(e, t, r, n) {
	const i = (t >>> 0) + (n >>> 0);
	return [e + r + (i / 4294967296 | 0) | 0, 0 | i];
}
function ne(e) {
	const t = e.length, r = Math.floor(t / 536870912), n = t << 3 >>> 0, i = 128 * Math.ceil((t + 17) / 128), o = new Uint8Array(i);
	o.set(e), o[t] = 128;
	const c = new DataView(o.buffer);
	c.setUint32(i - 8, r), c.setUint32(i - 4, n);
	const u = Z.map((e) => [e[0], e[1]]), l = new Array(160);
	for (let e = 0; e < i; e += 128) {
		for (let t = 0; t < 16; t++) l[2 * t] = c.getUint32(e + 8 * t), l[2 * t + 1] = c.getUint32(e + 8 * t + 4);
		for (let e = 16; e < 80; e++) {
			const t = l[2 * (e - 15)], r = l[2 * (e - 15) + 1], [n, i] = ee(t, r, 1), [o, c] = ee(t, r, 8), [u, a] = te(t, r, 7), s = n ^ o ^ u, f = i ^ c ^ a, d = l[2 * (e - 2)], p = l[2 * (e - 2) + 1], [h, w] = ee(d, p, 19), [y, g] = ee(d, p, 61), [v, m] = te(d, p, 6), b = h ^ y ^ v, x = w ^ g ^ m;
			let [U, E] = re(l[2 * (e - 16)], l[2 * (e - 16) + 1], s, f);
			[U, E] = re(U, E, l[2 * (e - 7)], l[2 * (e - 7) + 1]), [U, E] = re(U, E, b, x), l[2 * e] = U, l[2 * e + 1] = E;
		}
		let [t, r] = u[0], [n, i] = u[1], [o, a] = u[2], [s, f] = u[3], [d, p] = u[4], [h, w] = u[5], [y, g] = u[6], [v, m] = u[7];
		for (let e = 0; e < 80; e++) {
			const [c, u] = ee(d, p, 14), [b, x] = ee(d, p, 18), [U, E] = ee(d, p, 41), z = c ^ b ^ U, k = u ^ x ^ E, A = d & h ^ ~d & y, O = p & w ^ ~p & g;
			let [j, P] = re(v, m, z, k);
			[j, P] = re(j, P, A, O), [j, P] = re(j, P, Y[e][0], Y[e][1]), [j, P] = re(j, P, l[2 * e], l[2 * e + 1]);
			const [I, D] = ee(t, r, 28), [T, F] = ee(t, r, 34), [C, M] = ee(t, r, 39), [S, _] = re(I ^ T ^ C, D ^ F ^ M, t & n ^ t & o ^ n & o, r & i ^ r & a ^ i & a);
			v = y, m = g, y = h, g = w, h = d, w = p, [d, p] = re(s, f, j, P), s = o, f = a, o = n, a = i, n = t, i = r, [t, r] = re(j, P, S, _);
		}
		u[0] = re(u[0][0], u[0][1], t, r), u[1] = re(u[1][0], u[1][1], n, i), u[2] = re(u[2][0], u[2][1], o, a), u[3] = re(u[3][0], u[3][1], s, f), u[4] = re(u[4][0], u[4][1], d, p), u[5] = re(u[5][0], u[5][1], h, w), u[6] = re(u[6][0], u[6][1], y, g), u[7] = re(u[7][0], u[7][1], v, m);
	}
	const a = /* @__PURE__ */ new Uint8Array(64), s = new DataView(a.buffer);
	for (let e = 0; e < 8; e++) s.setUint32(8 * e, u[e][0] >>> 0), s.setUint32(8 * e + 4, u[e][1] >>> 0);
	return a;
}
var ie = 864e5;
var oe = Date.UTC(2025, 0, 1);
var ce = (() => Object.assign(Object.create(null), {
	community: !0,
	commercial: !0
}))();
var ue = Object.create(null);
var le = [];
function ae(e) {
	let t = "";
	for (let r = 0; r < e.length; r++) t += (256 | e[r]).toString(16).slice(1);
	return t;
}
function se(e, t, r = {}) {
	return o({
		valid: "active" === e || "grace" === e,
		status: e,
		message: X(e, t)
	}, r);
}
function fe(e) {
	return "community" === e.tier;
}
function de(e, t) {
	return c(this, null, function* () {
		const r = t.productLabel;
		if ("string" != typeof e || e.length > 2048 || !e.includes(".")) return se("invalid", r);
		const n = e.split(".");
		if (2 !== n.length) return se("invalid", r);
		const [i, o] = n;
		let f;
		try {
			f = function(e) {
				let t = 0;
				const r = () => {
					for (; t < e.length && l(e[t]);) t++;
				}, n = (r) => {
					if (e.substr(t, r.length) !== r) throw new u("Unexpected token");
					t += r.length;
				}, i = () => {
					let r = "";
					for (;;) {
						if (t >= e.length) throw new u("Unterminated string");
						const n = e[t++];
						if ("\"" === n) return r;
						if (n < " ") throw new u("Control character in string");
						if ("\\" !== n) {
							r += n;
							continue;
						}
						const i = e[t++];
						switch (i) {
							case "\"":
							case "\\":
							case "/":
								r += i;
								break;
							case "b":
								r += "\b";
								break;
							case "f":
								r += "\f";
								break;
							case "n":
								r += "\n";
								break;
							case "r":
								r += "\r";
								break;
							case "t":
								r += "	";
								break;
							case "u": {
								const n = s(e[t]) << 12 | s(e[t + 1]) << 8 | s(e[t + 2]) << 4 | s(e[t + 3]);
								t += 4, r += String.fromCharCode(n);
								break;
							}
							default: throw new u("Bad escape");
						}
					}
				}, o = (c) => {
					if (c > 16) throw new u("Too deep");
					r();
					const l = e[t];
					if (void 0 === l) throw new u("Unexpected end");
					if ("{" === l) {
						t++;
						const n = {};
						if (r(), "}" === e[t]) return t++, n;
						for (;;) {
							if (r(), "\"" !== e[t]) throw new u("Expected key");
							t++;
							const l = i();
							if ("__proto__" === l || Object.prototype.hasOwnProperty.call(n, l)) throw new u("Bad key");
							if (r(), ":" !== e[t]) throw new u("Expected colon");
							if (t++, n[l] = o(c + 1), r(), "," !== e[t]) {
								if ("}" === e[t]) return t++, n;
								throw new u("Expected , or }");
							}
							t++;
						}
					}
					if ("[" === l) {
						t++;
						const n = [];
						if (r(), "]" === e[t]) return t++, n;
						for (;;) {
							if (n.push(o(c + 1)), r(), "," !== e[t]) {
								if ("]" === e[t]) return t++, n;
								throw new u("Expected , or ]");
							}
							t++;
						}
					}
					if ("\"" === l) return t++, i();
					if ("t" === l) return n("true"), !0;
					if ("f" === l) return n("false"), !1;
					if ("n" === l) return n("null"), null;
					if ("-" === l || a(l)) return (() => {
						const r = t;
						if ("-" === e[t] && t++, "0" === e[t]) t++;
						else {
							if (!a(e[t])) throw new u("Bad number");
							for (; a(e[t]);) t++;
						}
						if ("." === e[t]) {
							if (t++, !a(e[t])) throw new u("Bad number");
							for (; a(e[t]);) t++;
						}
						if ("e" === e[t] || "E" === e[t]) {
							if (t++, "+" !== e[t] && "-" !== e[t] || t++, !a(e[t])) throw new u("Bad number");
							for (; a(e[t]);) t++;
						}
						return Number(e.slice(r, t));
					})();
					throw new u("Unexpected token");
				}, c = o(0);
				if (r(), t !== e.length) throw new u("Trailing characters");
				return c;
			}(function(e) {
				const t = [];
				let r = 0;
				for (; r < e.length;) {
					const n = e[r++];
					if (n < 128) {
						t.push(n);
						continue;
					}
					let i, o, c;
					if (n >= 194 && n <= 223) i = 31 & n, o = 1, c = 128;
					else if (n >= 224 && n <= 239) i = 15 & n, o = 2, c = 2048;
					else {
						if (!(n >= 240 && n <= 244)) throw new u("Invalid UTF-8");
						i = 7 & n, o = 3, c = 65536;
					}
					if (r + o > e.length) throw new u("Invalid UTF-8");
					for (let t = 0; t < o; t++) {
						const t = e[r++];
						if (128 != (192 & t)) throw new u("Invalid UTF-8");
						i = i << 6 | 63 & t;
					}
					if (i < c || i > 1114111 || i >= 55296 && i <= 57343) throw new u("Invalid UTF-8");
					i >= 65536 ? (i -= 65536, t.push(55296 | i >> 10, 56320 | 1023 & i)) : t.push(i);
				}
				let n = "";
				for (let e = 0; e < t.length; e += 4096) n += String.fromCharCode.apply(null, t.slice(e, e + 4096));
				return n;
			}(d(i)));
		} catch (e) {
			return se("invalid", r);
		}
		if (!f || "object" != typeof f || Array.isArray(f)) return se("invalid", r);
		const p = f, y = (e) => Object.prototype.hasOwnProperty.call(p, e) ? p[e] : void 0, g = {
			id: y("id"),
			product: y("product"),
			tier: y("tier"),
			type: y("type"),
			iat: y("iat"),
			exp: y("exp")
		};
		if ("string" != typeof g.product || "string" != typeof g.type || !Number.isFinite(g.exp) || !Number.isFinite(g.iat) || "string" != typeof g.id) return se("invalid", r);
		if (void 0 !== g.tier && ("string" != typeof g.tier || !0 !== ce[g.tier])) return se("invalid", r);
		if (g.product === "primeui" && void 0 === g.tier) return se("invalid", r);
		let v, m, b;
		try {
			v = d(o), m = new TextEncoder().encode(i);
		} catch (e) {
			return se("invalid", r);
		}
		try {
			b = function(e) {
				if (!/^[0-9a-fA-F]*$/.test(e)) throw new Error("Invalid hex character");
				const t = /* @__PURE__ */ new Uint8Array(32);
				for (let r = 0; r < t.length; r++) t[r] = parseInt(e.slice(2 * r, 2 * r + 2), 16);
				return t;
			}("dae75e66b9f59bebf87d4bb29ca6494f37deccfcc2b132b98ee159ee7505373b");
		} catch (e) {
			return se("invalid", r);
		}
		let x = !1;
		try {
			x = yield function(e, t, r) {
				return c(this, null, function* () {
					if (!function(e, t, r) {
						const n = ae(r) + ":" + ae(e) + ":" + ae(t), i = ue[n];
						if (!0 === i || !1 === i) return i;
						const o = function(e, t, r, n) {
							if (64 !== e.length || 32 !== r.length) return !1;
							const i = e.slice(32, 64);
							if (!q(i)) return !1;
							const o = V(r);
							if (!o) return !1;
							if (G(o)) return !1;
							const c = e.slice(0, 32), u = V(c);
							if (!u) return !1;
							if (G(u)) return !1;
							const l = new Uint8Array(64 + t.length);
							l.set(c, 0), l.set(r, 32), l.set(t, 64);
							const a = function(e) {
								const t = /* @__PURE__ */ new Uint8Array(32);
								for (let r = e.length - 1; r >= 0; r--) {
									let n = e[r];
									for (let e = 0; e < 32; e++) {
										const r = 256 * t[e] + n;
										t[e] = 255 & r, n = r >> 8;
									}
									for (; n > 0 || !q(t);) {
										let e = 0;
										for (let r = 0; r < 32; r++) {
											const n = t[r] - R[r] - e;
											e = n < 0 ? 1 : 0, t[r] = n + 256 * e;
										}
										n -= e, n < 0 && (n = 0);
									}
								}
								return t;
							}(n(l)), s = _(i, W);
							return d = L(u, _(a, o)), F(k((f = s).x, d.z), k(d.x, f.z)) && F(k(f.y, d.z), k(d.y, f.z));
							var f, d;
						}(e, t, r, ne);
						return le.length >= 32 && delete ue[le.shift()], le.push(n), ue[n] = !0 === o, !0 === o;
					}(e, t, r)) return !1;
					const i = yield function(e, t, r) {
						return c(this, null, function* () {
							var n;
							const i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0, o = null == (n = null == i ? void 0 : i.crypto) ? void 0 : n.subtle;
							if (o) try {
								const n = yield o.importKey("raw", r, { name: "Ed25519" }, !1, ["verify"]);
								return yield o.verify({ name: "Ed25519" }, n, e, t);
							} catch (e) {
								return;
							}
						});
					}(e, t, r);
					return void 0 === i || !0 === i;
				});
			}(v, m, b);
		} catch (e) {
			return se("tampered", r, { payload: g });
		}
		if (!x) return se("tampered", r, { payload: g });
		if (!function(e, t) {
			return e.product === t || !(!t.startsWith("primeui-pro:") || e.product !== "primeui" || "commercial" !== e.tier);
		}(g, t.product)) return se("wrong-product", r, { payload: g });
		const U = 1e3 * g.exp, E = Date.now(), z = Math.floor((U - E) / ie), A = function(e) {
			const t = function(e) {
				if ("number" == typeof e) return Number.isFinite(e) ? 1e3 * e : null;
				if ("string" != typeof e || "" === e) return null;
				const t = Date.parse(e);
				return Number.isNaN(t) ? null : t;
			}(e);
			return null !== t && t >= oe ? t : null;
		}(t.releaseDate);
		if (null === A && !fe(g)) return se("invalid", r, {
			daysUntilExpiry: z,
			payload: g
		});
		if (null !== A && A > U) return se("expired", r, {
			daysUntilExpiry: z,
			payload: g
		});
		if (fe(g)) {
			if (E > U + 30 * ie) return se("expired", r, {
				daysUntilExpiry: z,
				payload: g
			});
			if (E > U) return se("grace", r, {
				daysUntilExpiry: z,
				payload: g
			});
		}
		return se("active", r, {
			daysUntilExpiry: z,
			payload: g
		});
	});
}
function pe(e, t) {
	const r = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
	return "string" == typeof r ? r : void 0;
}
function he(e, t) {
	return {
		valid: !1,
		status: e,
		message: X(e, t)
	};
}
function we(e, t) {
	const r = {};
	return {
		verify(t, n) {
			return c(this, null, function* () {
				const i = Q(t), c = J(t), u = null == n ? void 0 : n.releaseDate;
				if (!i) return he("invalid", c);
				const l = pe(e, t), a = pe(e, "primeui");
				if (l) {
					const e = yield de(l, o({
						product: i,
						productLabel: c,
						releaseDate: u
					}, r));
					if (e.valid) return e;
					if ("wrong-product" !== e.status) return e;
				}
				return a && "primeui" !== t && i.startsWith("primeui-pro:") ? de(a, o({
					product: i,
					productLabel: c,
					releaseDate: u
				}, r)) : he(l ? "wrong-product" : "missing", c);
			});
		},
		has(t) {
			const r = Q(t);
			return !!r && (!!pe(e, t) || "primeui" !== t && r.startsWith("primeui-pro:") && !!pe(e, "primeui"));
		}
	};
}
var ye = null;
function ge(e, t) {
	if (!e) throw new Error("[@primeui/license-manager] registerLicense: keys argument is required.");
	return ye = we(e);
}
function me(e, t) {
	if (!ye) {
		const t = J(e);
		return Promise.resolve({
			valid: !1,
			status: "unconfigured",
			message: X("unconfigured", t)
		});
	}
	return ye.verify(e, t);
}
//#endregion
//#region node_modules/primeng/fesm2022/primeng-license.mjs
function showInvalidLicenseBanner() {
	if (typeof document === "undefined") return;
	if (document.getElementById("p-license-host")) return;
	const host = document.createElement("div");
	host.id = "p-license-host";
	host.style.cssText = "all:initial;position:fixed;bottom:16px;right:16px;z-index:2147483647;pointer-events:none;";
	const shadow = host.attachShadow({ mode: "closed" });
	shadow.innerHTML = "<div role=\"alert\" style=\"padding:10px 14px;background:#991b1b;color:#fff;font:600 13px/1.2 system-ui,-apple-system,sans-serif;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.2);\">Invalid PrimeUI License</div>";
	document.body.appendChild(host);
}
//#endregion
//#region node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class ThemeProvider {
	theme = signal(void 0, ...ngDevMode ? [{ debugName: "theme" }] : /* istanbul ignore next */ []);
	csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : /* istanbul ignore next */ []);
	isThemeChanged = false;
	document = inject(DOCUMENT);
	baseStyle = inject(BaseStyle);
	constructor() {
		effect(() => {
			R$1.on("theme:change", (newTheme) => {
				untracked(() => {
					this.isThemeChanged = true;
					this.theme.set(newTheme);
				});
			});
		});
		effect(() => {
			const themeValue = this.theme();
			if (this.document && themeValue) {
				if (!this.isThemeChanged) this.onThemeChange(themeValue);
				this.isThemeChanged = false;
			}
		});
	}
	ngOnDestroy() {
		S$1.clearLoadedStyleNames();
		R$1.clear();
	}
	onThemeChange(value) {
		S$1.setTheme(value);
		if (this.document) this.loadCommonTheme();
	}
	loadCommonTheme() {
		if (this.theme() === "none") return;
		if (!S$1.isStyleNameLoaded("common")) {
			const { primitive, semantic, global, style } = this.baseStyle.getCommonTheme?.() || {};
			const styleOptions = { nonce: this.csp?.()?.nonce };
			this.baseStyle.load(primitive?.css, {
				name: "primitive-variables",
				variables: true,
				...styleOptions
			});
			this.baseStyle.load(semantic?.css, {
				name: "semantic-variables",
				variables: true,
				...styleOptions
			});
			this.baseStyle.load(global?.css, {
				name: "global-variables",
				variables: true,
				...styleOptions
			});
			this.baseStyle.loadBaseStyle({
				name: "global-style",
				...styleOptions
			}, style);
			S$1.setLoadedStyleName("common");
		}
	}
	setThemeConfig(config) {
		const { theme, csp } = config || {};
		if (theme) this.theme.set(theme);
		if (csp) this.csp.set(csp);
	}
	static ɵfac = function ThemeProvider_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ThemeProvider)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: ThemeProvider,
		factory: ThemeProvider.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
var PrimeNG = class PrimeNG extends ThemeProvider {
	ripple = signal(false, ...ngDevMode ? [{ debugName: "ripple" }] : /* istanbul ignore next */ []);
	platformId = inject(PLATFORM_ID);
	inputVariant = signal(null, ...ngDevMode ? [{ debugName: "inputVariant" }] : /* istanbul ignore next */ []);
	_verified = signal(null, ...ngDevMode ? [{ debugName: "_verified" }] : /* istanbul ignore next */ []);
	verified = this._verified.asReadonly();
	overlayAppendTo = signal("self", ...ngDevMode ? [{ debugName: "overlayAppendTo" }] : /* istanbul ignore next */ []);
	overlayOptions = {};
	csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : /* istanbul ignore next */ []);
	unstyled = signal(void 0, ...ngDevMode ? [{ debugName: "unstyled" }] : /* istanbul ignore next */ []);
	pt = signal(void 0, ...ngDevMode ? [{ debugName: "pt" }] : /* istanbul ignore next */ []);
	ptOptions = signal(void 0, ...ngDevMode ? [{ debugName: "ptOptions" }] : /* istanbul ignore next */ []);
	filterMatchModeOptions = {
		text: [
			FilterMatchMode.STARTS_WITH,
			FilterMatchMode.CONTAINS,
			FilterMatchMode.NOT_CONTAINS,
			FilterMatchMode.ENDS_WITH,
			FilterMatchMode.EQUALS,
			FilterMatchMode.NOT_EQUALS
		],
		numeric: [
			FilterMatchMode.EQUALS,
			FilterMatchMode.NOT_EQUALS,
			FilterMatchMode.LESS_THAN,
			FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
			FilterMatchMode.GREATER_THAN,
			FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
		],
		date: [
			FilterMatchMode.DATE_IS,
			FilterMatchMode.DATE_IS_NOT,
			FilterMatchMode.DATE_BEFORE,
			FilterMatchMode.DATE_AFTER
		]
	};
	translation = {
		startsWith: "Starts with",
		contains: "Contains",
		notContains: "Not contains",
		endsWith: "Ends with",
		equals: "Equals",
		notEquals: "Not equals",
		noFilter: "No Filter",
		lt: "Less than",
		lte: "Less than or equal to",
		gt: "Greater than",
		gte: "Greater than or equal to",
		is: "Is",
		isNot: "Is not",
		before: "Before",
		after: "After",
		dateIs: "Date is",
		dateIsNot: "Date is not",
		dateBefore: "Date is before",
		dateAfter: "Date is after",
		clear: "Clear",
		apply: "Apply",
		matchAll: "Match All",
		matchAny: "Match Any",
		addRule: "Add Rule",
		removeRule: "Remove Rule",
		accept: "Yes",
		reject: "No",
		choose: "Choose",
		completed: "Completed",
		upload: "Upload",
		cancel: "Cancel",
		pending: "Pending",
		fileSizeTypes: [
			"B",
			"KB",
			"MB",
			"GB",
			"TB",
			"PB",
			"EB",
			"ZB",
			"YB"
		],
		dayNames: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		dayNamesShort: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		dayNamesMin: [
			"Su",
			"Mo",
			"Tu",
			"We",
			"Th",
			"Fr",
			"Sa"
		],
		monthNames: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		monthNamesShort: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		chooseYear: "Choose Year",
		chooseMonth: "Choose Month",
		chooseDate: "Choose Date",
		prevDecade: "Previous Decade",
		nextDecade: "Next Decade",
		prevYear: "Previous Year",
		nextYear: "Next Year",
		prevMonth: "Previous Month",
		nextMonth: "Next Month",
		prevHour: "Previous Hour",
		nextHour: "Next Hour",
		prevMinute: "Previous Minute",
		nextMinute: "Next Minute",
		prevSecond: "Previous Second",
		nextSecond: "Next Second",
		am: "am",
		pm: "pm",
		dateFormat: "mm/dd/yy",
		firstDayOfWeek: 0,
		today: "Today",
		weekHeader: "Wk",
		weak: "Weak",
		medium: "Medium",
		strong: "Strong",
		passwordPrompt: "Enter a password",
		emptyMessage: "No results found",
		searchMessage: "Search results are available",
		selectionMessage: "{0} items selected",
		emptySelectionMessage: "No selected item",
		emptySearchMessage: "No results found",
		emptyFilterMessage: "No results found",
		fileChosenMessage: "Files",
		noFileChosenMessage: "No file chosen",
		aria: {
			trueLabel: "True",
			falseLabel: "False",
			nullLabel: "Not Selected",
			star: "1 star",
			stars: "{star} stars",
			selectAll: "All items selected",
			unselectAll: "All items unselected",
			close: "Close",
			previous: "Previous",
			next: "Next",
			navigation: "Navigation",
			scrollTop: "Scroll Top",
			moveTop: "Move Top",
			moveUp: "Move Up",
			moveDown: "Move Down",
			moveBottom: "Move Bottom",
			moveToTarget: "Move to Target",
			moveToSource: "Move to Source",
			moveAllToTarget: "Move All to Target",
			moveAllToSource: "Move All to Source",
			pageLabel: "{page}",
			firstPageLabel: "First Page",
			lastPageLabel: "Last Page",
			nextPageLabel: "Next Page",
			prevPageLabel: "Previous Page",
			rowsPerPageLabel: "Rows per page",
			previousPageLabel: "Previous Page",
			jumpToPageDropdownLabel: "Jump to Page Dropdown",
			jumpToPageInputLabel: "Jump to Page Input",
			selectRow: "Row Selected",
			unselectRow: "Row Unselected",
			expandRow: "Row Expanded",
			collapseRow: "Row Collapsed",
			expand: "Expand",
			collapse: "Collapse",
			showFilterMenu: "Show Filter Menu",
			hideFilterMenu: "Hide Filter Menu",
			filterOperator: "Filter Operator",
			filterConstraint: "Filter Constraint",
			editRow: "Row Edit",
			saveEdit: "Save Edit",
			cancelEdit: "Cancel Edit",
			listView: "List View",
			gridView: "Grid View",
			slide: "Slide",
			slideNumber: "{slideNumber}",
			zoomImage: "Zoom Image",
			zoomIn: "Zoom In",
			zoomOut: "Zoom Out",
			rotateRight: "Rotate Right",
			rotateLeft: "Rotate Left",
			listLabel: "Option List",
			selectColor: "Select a color",
			removeLabel: "Remove",
			browseFiles: "Browse Files",
			maximizeLabel: "Maximize",
			minimizeLabel: "Minimize"
		}
	};
	zIndex = {
		modal: 1100,
		overlay: 1e3,
		menu: 1e3,
		tooltip: 1100
	};
	translationSource = new Subject();
	translationObserver = this.translationSource.asObservable();
	_setVerified(value) {
		this._verified.set(value);
	}
	getTranslation(key) {
		return this.translation[key];
	}
	setTranslation(value) {
		this.translation = {
			...this.translation,
			...value
		};
		this.translationSource.next(this.translation);
	}
	setConfig(config) {
		const { csp, ripple, inputVariant, theme, overlayOptions, translation, filterMatchModeOptions, overlayAppendTo, zIndex, ptOptions, pt, unstyled } = config || {};
		if (csp) this.csp.set(csp);
		if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
		if (ripple) this.ripple.set(ripple);
		if (inputVariant) this.inputVariant.set(inputVariant);
		if (overlayOptions) this.overlayOptions = overlayOptions;
		if (translation) this.setTranslation(translation);
		if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
		if (zIndex) this.zIndex = zIndex;
		if (pt) this.pt.set(pt);
		if (ptOptions) this.ptOptions.set(ptOptions);
		if (unstyled) this.unstyled.set(unstyled);
		if (theme) this.setThemeConfig({
			theme,
			csp
		});
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵPrimeNG_BaseFactory = void 0;
		return function PrimeNG_Factory(__ngFactoryType__) {
			return (ɵPrimeNG_BaseFactory || (ɵPrimeNG_BaseFactory = ɵɵgetInheritedFactory(PrimeNG)))(__ngFactoryType__ || PrimeNG);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: PrimeNG,
		factory: PrimeNG.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
var RELEASE_DATE = "2026-09-29";
function providePrimeNG(...features) {
	const providers = features?.map((feature) => ({
		provide: PRIME_NG_CONFIG,
		useValue: feature,
		multi: false
	}));
	const initializer = provideAppInitializer(() => {
		const PrimeNGConfig = inject(PrimeNG);
		features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
		const license = features?.map((f) => f.license).find(Boolean);
		if (license) ge({ primeui: license });
		me("primeui", { releaseDate: RELEASE_DATE }).then((result) => {
			PrimeNGConfig._setVerified(result.valid);
			if (!result.valid) {
				console.warn(`[PrimeUI] ${result.message}`);
				showInvalidLicenseBanner();
			}
		});
	});
	return makeEnvironmentProviders([...providers, initializer]);
}
//#endregion
export { showInvalidLicenseBanner as a, base_default as c, providePrimeNG as i, UseStyle as l, PrimeNG as n, SharedModule as o, ThemeProvider as r, BaseStyle as s, PRIME_NG_CONFIG as t };
