import { $n as Output, A as contentChild, Ac as Injector, Al as ɵɵdefineInjectable, Bc as PLATFORM_ID, Bt as computed, Ca as ɵɵclassProp, Co as ɵɵelementStart, Da as ɵɵconditionalCreate, Dr as ViewEncapsulation, En as ElementRef, Fn as Injectable, Gs as ɵɵtemplate, Hs as ɵɵstyleProp, In as Input, Js as ɵɵtextInterpolate, O as booleanAttribute, On as HostBinding, Qo as ɵɵlistener, Rl as ɵɵnamespaceSVG, Sa as ɵɵclassMap, So as ɵɵelementEnd, Ta as ɵɵconditional, Tl as signal, Ts as ɵɵrepeaterCreate, Vs as ɵɵstyleMap, Wi as setClassMetadata, X as input, _c as DOCUMENT, an as ChangeDetectionStrategy, ao as ɵɵdefineNgModule, at as output, bs as ɵɵqueryAdvance, ca as ɵɵInheritDefinitionFeature, cn as Component, cs as ɵɵprojectionDef, da as ɵɵadvance, dl as inject, es as ɵɵnextContext, i as ContentChild, il as effect, io as ɵɵdefineDirective, ir as Renderer2, jl as ɵɵdefineInjector, jo as ɵɵgetInheritedFactory, ka as ɵɵcontentQuerySignal, kc as InjectionToken, la as ɵɵNgOnChangesFeature, lo as ɵɵdomElement, ls as ɵɵproperty, ml as isSignal, ol as forwardRef, qc as SecurityContext, qn as NgModule, qs as ɵɵtext, r as ChangeDetectorRef, ro as ɵɵdefineComponent, rt as numberAttribute, sa as ɵɵHostDirectivesFeature, ss as ɵɵprojection, ua as ɵɵProvidersFeature, vc as DestroyRef, vo as ɵɵelement, wn as Directive, ws as ɵɵrepeater, ya as ɵɵattribute, yo as ɵɵelementContainer } from "./core-Dl1ZlCfZ.js";
import { r as DomSanitizer } from "./platform-browser-CYzEm8Qv.js";
import { a as isPlatformServer, c as CommonModule, i as isPlatformBrowser, u as NgTemplateOutlet } from "./common-CxQw7uMl.js";
import { $ as c$2, B as R$1, G as st, J as A, K as w, Q as b, R as Ft, U as k, V as W, W as le, X as C, Z as K, _ as R, at as x$1, it as p$1, nt as l$1, q as zt, rt as m$1, v as S, z as L } from "./dist-BNvepxnO.js";
import { a as showInvalidLicenseBanner, c as base_default, l as UseStyle, n as PrimeNG, o as SharedModule, s as BaseStyle } from "./primeng-config-Cd0Qftah.js";
//#region node_modules/@primeuix/utils/dist/classnames/index.mjs
function c$1(...e) {
	let t = [];
	for (let s = 0; s < e.length; s++) {
		let n = e[s];
		if (!n) continue;
		let r = typeof n;
		if (r === "string" || r === "number") t.push(n);
		else if (r === "object") {
			let o = Array.isArray(n) ? [c$1(...n)] : Object.entries(n).map(([i, u]) => u ? i : void 0);
			t = o.length ? t.concat(o.filter((i) => !!i)) : t;
		}
	}
	return t.join(" ").trim();
}
//#endregion
//#region node_modules/@primeuix/utils/dist/mergeprops/index.mjs
var c = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var x = Object.prototype.hasOwnProperty;
var y = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? c(t, o, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : t[o] = e;
var l = (t, o) => {
	for (var e in o || (o = {})) x.call(o, e) && m(t, e, o[e]);
	if (d) for (var e of d(o)) y.call(o, e) && m(t, e, o[e]);
	return t;
};
function i(...t) {
	let o = [];
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (!n) continue;
		let r = typeof n;
		if (r === "string" || r === "number") o.push(n);
		else if (r === "object") {
			let a = Array.isArray(n) ? [i(...n)] : Object.entries(n).map(([s, f]) => f ? s : void 0);
			o = a.length ? o.concat(a.filter((s) => !!s)) : o;
		}
	}
	return o.join(" ").trim();
}
function u(t) {
	return typeof t == "function" && "call" in t && "apply" in t;
}
function p({ skipUndefined: t = !1 }, ...o) {
	return o == null ? void 0 : o.reduce((e, n = {}) => {
		for (let r in n) {
			let a = n[r];
			if (!(t && a === void 0)) if (r === "style") e.style = l(l({}, e.style), n.style);
			else if (r === "class" || r === "className") e[r] = i(e[r], n[r]);
			else if (u(a)) {
				let s = e[r];
				e[r] = s ? (...f) => {
					s(...f), a(...f);
				} : a;
			} else e[r] = a;
		}
		return e;
	}, {});
}
function F(...t) {
	return p({ skipUndefined: !1 }, ...t);
}
//#endregion
//#region node_modules/@primeuix/utils/dist/uuid/index.mjs
var t = {};
function s(n = "pui_id_") {
	return Object.hasOwn(t, n) || (t[n] = 0), t[n]++, `${n}${t[n]}`;
}
//#endregion
//#region node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle = class BaseComponentStyle extends BaseStyle {
	name = "common";
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBaseComponentStyle_BaseFactory = void 0;
		return function BaseComponentStyle_Factory(__ngFactoryType__) {
			return (ɵBaseComponentStyle_BaseFactory || (ɵBaseComponentStyle_BaseFactory = ɵɵgetInheritedFactory(BaseComponentStyle)))(__ngFactoryType__ || BaseComponentStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: BaseComponentStyle,
		factory: BaseComponentStyle.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponentStyle, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var PARENT_INSTANCE = new InjectionToken("PARENT_INSTANCE");
var BaseComponent = class BaseComponent {
	document = inject(DOCUMENT);
	platformId = inject(PLATFORM_ID);
	el = inject(ElementRef);
	injector = inject(Injector);
	cd = inject(ChangeDetectorRef);
	renderer = inject(Renderer2);
	config = inject(PrimeNG);
	$parentInstance = inject(PARENT_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	baseComponentStyle = inject(BaseComponentStyle);
	baseStyle = inject(BaseStyle);
	scopedStyleEl;
	parent = this.$params.parent;
	cn = c$1;
	_themeScopedListener;
	themeChangeListenerMap = /* @__PURE__ */ new Map();
	dt = input(...ngDevMode ? [void 0, { debugName: "dt" }] : /* istanbul ignore next */ []);
	unstyled = input(...ngDevMode ? [void 0, { debugName: "unstyled" }] : /* istanbul ignore next */ []);
	pt = input(...ngDevMode ? [void 0, { debugName: "pt" }] : /* istanbul ignore next */ []);
	ptOptions = input(...ngDevMode ? [void 0, { debugName: "ptOptions" }] : /* istanbul ignore next */ []);
	$attrSelector = s("pc");
	get $name() {
		return this["componentName"] || "UnknownComponent";
	}
	get $hostName() {
		const hostName = this["hostName"];
		return isSignal(hostName) ? hostName() : hostName;
	}
	get $el() {
		return this.el?.nativeElement;
	}
	directivePT = signal(void 0, ...ngDevMode ? [{ debugName: "directivePT" }] : /* istanbul ignore next */ []);
	directiveUnstyled = signal(void 0, ...ngDevMode ? [{ debugName: "directiveUnstyled" }] : /* istanbul ignore next */ []);
	$unstyled = computed(() => this.unstyled() ?? this.directiveUnstyled() ?? this.config?.unstyled() ?? false, ...ngDevMode ? [{ debugName: "$unstyled" }] : /* istanbul ignore next */ []);
	$pt = computed(() => x$1(this.pt() || this.directivePT(), this.$params), ...ngDevMode ? [{ debugName: "$pt" }] : /* istanbul ignore next */ []);
	get $globalPT() {
		return this._getPT(this.config?.pt(), void 0, (value) => x$1(value, this.$params));
	}
	get $defaultPT() {
		return this._getPT(this.config?.pt(), void 0, (value) => this._getOptionValue(value, this.$hostName || this.$name, this.$params) || x$1(value, this.$params));
	}
	_$styleCache;
	get $style() {
		if (!this._$styleCache) this._$styleCache = {
			theme: void 0,
			css: void 0,
			classes: void 0,
			inlineStyles: void 0,
			...(this._getHostInstance(this) || {}).$style,
			...this["_componentStyle"]
		};
		return this._$styleCache;
	}
	get $styleOptions() {
		return { nonce: this.config?.csp().nonce };
	}
	_$paramsCache;
	get $params() {
		if (!this._$paramsCache) {
			const parentInstance = this._getHostInstance(this) || this.$parentInstance;
			this._$paramsCache = {
				instance: this,
				parent: { instance: parentInstance }
			};
		}
		return this._$paramsCache;
	}
	onInit() {}
	onChanges(_changes) {}
	onDoCheck() {}
	onAfterContentInit() {}
	onAfterContentChecked() {}
	onAfterViewInit() {}
	onAfterViewChecked() {}
	onDestroy() {}
	constructor() {
		this._shareStylesWithShadowRoot();
		effect((onCleanup) => {
			if (this.document && !isPlatformServer(this.platformId)) {
				if (this.dt()) {
					this._loadScopedThemeStyles(this.dt());
					this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt());
					this._themeChangeListener("_themeScopedListener", this._themeScopedListener);
				} else this._unloadScopedThemeStyles();
			}
			onCleanup(() => {
				this._offThemeChangeListener("_themeScopedListener");
			});
		});
		effect((onCleanup) => {
			if (this.document && !isPlatformServer(this.platformId)) {
				if (!this.$unstyled()) {
					this._loadCoreStyles();
					this._themeChangeListener("_loadCoreStyles", this._loadCoreStyles);
				}
			}
			onCleanup(() => {
				this._offThemeChangeListener("_loadCoreStyles");
			});
		});
		this._hook("onBeforeInit");
	}
	ngOnInit() {
		this._$paramsCache = void 0;
		this._$styleCache = void 0;
		this._loadCoreStyles();
		this._loadStyles();
		this.onInit();
		this._hook("onInit");
	}
	ngOnChanges(changes) {
		this.onChanges(changes);
		this._hook("onChanges", changes);
	}
	ngDoCheck() {
		this.onDoCheck();
		this._hook("onDoCheck");
	}
	ngAfterContentInit() {
		this.onAfterContentInit();
		this._hook("onAfterContentInit");
	}
	ngAfterContentChecked() {
		this.onAfterContentChecked();
		this._hook("onAfterContentChecked");
	}
	ngAfterViewInit() {
		this.$el?.setAttribute(this.$attrSelector, "");
		if (this.config?.verified() === false) showInvalidLicenseBanner();
		this.onAfterViewInit();
		this._hook("onAfterViewInit");
	}
	ngAfterViewChecked() {
		this.onAfterViewChecked();
		this._hook("onAfterViewChecked");
	}
	ngOnDestroy() {
		this._removeThemeListeners();
		this._unloadScopedThemeStyles();
		this.onDestroy();
		this._hook("onDestroy");
	}
	_mergeProps(fn, ...args) {
		return m$1(fn) ? fn(...args) : F(...args);
	}
	_getHostInstance(instance) {
		return instance ? this.$hostName ? this.$name === this.$hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
	}
	_getPropValue(name) {
		return this[name] || this._getHostInstance(this)?.[name];
	}
	_getOptionValue(options, key = "", params = {}) {
		return K(options, key, params);
	}
	_hook(hookName, ...args) {
		if (this.$hostName) return;
		if (!this.pt() && !this.directivePT() && !this.config?.pt()) return;
		const selfHook = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${hookName}`);
		const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);
		selfHook?.(...args);
		defaultHook?.(...args);
	}
	_load() {
		if (!base_default.isStyleNameLoaded("base")) {
			this.baseStyle.loadBaseCSS(this.$styleOptions);
			this._loadGlobalStyles();
			base_default.setLoadedStyleName("base");
		}
		this._loadThemeStyles();
	}
	_loadStyles() {
		this._load();
		this._themeChangeListener("_load", () => this._load());
	}
	_shareStylesWithShadowRoot() {
		if (isPlatformServer(this.platformId)) return;
		const rootNode = this.$el?.getRootNode?.();
		if (typeof ShadowRoot === "undefined" || !(rootNode instanceof ShadowRoot)) return;
		inject(DestroyRef).onDestroy(inject(UseStyle).addShadowRoot(rootNode));
	}
	_loadGlobalStyles() {
		const globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
		if (l$1(globalCSS)) this.baseStyle.load(globalCSS, {
			name: "global",
			...this.$styleOptions
		});
	}
	_loadCoreStyles() {
		if (!base_default.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
			this.baseComponentStyle.loadCSS(this.$styleOptions);
			this.$style.loadCSS(this.$styleOptions);
			base_default.setLoadedStyleName(this.$style.name);
		}
	}
	_loadThemeStyles() {
		if (this.$unstyled() || this.config?.theme() === "none") return;
		if (!S.isStyleNameLoaded("common")) {
			const { primitive, semantic, global, style } = this.$style?.getCommonTheme?.() || {};
			this.baseStyle.load(primitive?.css, {
				name: "primitive-variables",
				variables: true,
				...this.$styleOptions
			});
			this.baseStyle.load(semantic?.css, {
				name: "semantic-variables",
				variables: true,
				...this.$styleOptions
			});
			this.baseStyle.load(global?.css, {
				name: "global-variables",
				variables: true,
				...this.$styleOptions
			});
			this.baseStyle.loadBaseStyle({
				name: "global-style",
				...this.$styleOptions
			}, style);
			S.setLoadedStyleName("common");
		}
		if (!S.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
			const { css, style } = this.$style?.getComponentTheme?.() || {};
			this.$style?.load(css, {
				name: `${this.$style?.name}-variables`,
				variables: true,
				...this.$styleOptions
			});
			this.$style?.loadStyle({
				name: `${this.$style?.name}-style`,
				...this.$styleOptions
			}, style);
			S.setLoadedStyleName(this.$style?.name);
		}
		if (!S.isStyleNameLoaded("layer-order")) {
			const layerOrder = this.$style?.getLayerOrderThemeCSS?.();
			this.baseStyle.load(layerOrder, {
				name: "layer-order",
				first: true,
				...this.$styleOptions
			});
			S.setLoadedStyleName("layer-order");
		}
	}
	_loadScopedThemeStyles(preset) {
		if (this.config?.theme()?.options?.cssVariables === false && this.$style?.name) {
			if (S.addScopedToken({ [this.$style.name]: preset })) {
				S.deleteLoadedStyleName(this.$style.name);
				this._loadThemeStyles();
			}
		}
		const { css } = this.$style?.getPresetTheme?.(preset, `[${this.$attrSelector}]`) || {};
		const scopedStyle = this.$style?.load(css, {
			name: `${this.$attrSelector}-${this.$style?.name}`,
			...this.$styleOptions
		});
		this.scopedStyleEl = scopedStyle?.el;
	}
	_unloadScopedThemeStyles() {
		this.baseStyle.useStyle.remove(`${this.$attrSelector}-${this.$style?.name}`);
	}
	_themeChangeListener(id, callback = () => {}) {
		this._offThemeChangeListener(id);
		base_default.clearLoadedStyleNames();
		const hold = callback.bind(this);
		this.themeChangeListenerMap.set(id, hold);
		R.on("theme:change", hold);
	}
	_removeThemeListeners() {
		this._offThemeChangeListener("_themeScopedListener");
		this._offThemeChangeListener("_loadCoreStyles");
		this._offThemeChangeListener("_load");
	}
	_offThemeChangeListener(id) {
		if (this.themeChangeListenerMap.has(id)) {
			R.off("theme:change", this.themeChangeListenerMap.get(id));
			this.themeChangeListenerMap.delete(id);
		}
	}
	_getPTValue(obj = {}, key = "", params = {}, searchInDefaultPT = true) {
		const searchOut = /./g.test(key) && !!params[key.split(".")[0]];
		const { mergeSections = true, mergeProps: useMergeProps = false } = this._getPropValue("ptOptions")?.() || this.config?.["ptOptions"]?.() || {};
		const global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
		const self = searchOut ? void 0 : this._usePT(this._getPT(obj, this.$hostName || this.$name), this._getPTClassValue, key, {
			...params,
			global: global || {}
		});
		const datasets = this._getPTDatasets(key);
		return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : {
			...global,
			...self,
			...datasets
		} : {
			...self,
			...datasets
		};
	}
	_getPTDatasets(key = "") {
		const datasetPrefix = "data-pc-";
		const isExtended = key === "root" && l$1(this.$pt()?.["data-pc-section"]);
		return key !== "transition" && {
			...key === "root" && {
				[`${datasetPrefix}name`]: C(isExtended ? this.$pt()?.["data-pc-section"] : this.$name),
				...isExtended && { [`${datasetPrefix}extend`]: C(this.$name) },
				[`${this.$attrSelector}`]: ""
			},
			[`${datasetPrefix}section`]: C(key.includes(".") ? key.split(".").at(-1) ?? "" : key)
		};
	}
	_getPTClassValue(options, key, params) {
		const value = this._getOptionValue(options, key, params);
		return c$2(value) || A(value) ? { class: value } : value;
	}
	_getPT(pt, key = "", callback) {
		const getValue = (value, checkSameKey = false) => {
			const computedValue = callback ? callback(value) : value;
			const _key = C(key);
			const _cKey = C(this.$hostName || this.$name);
			return (checkSameKey ? _key !== _cKey ? computedValue?.[_key] : void 0 : computedValue?.[_key]) ?? computedValue;
		};
		return pt != null && Object.prototype.hasOwnProperty.call(pt, "_usept") ? {
			_usept: pt["_usept"],
			originalValue: getValue(pt.originalValue),
			value: getValue(pt.value)
		} : getValue(pt, true);
	}
	_usePT(pt, callback, key, params) {
		const fn = (value) => callback?.call(this, value, key, params);
		if (pt != null && Object.prototype.hasOwnProperty.call(pt, "_usept")) {
			const { mergeSections = true, mergeProps: useMergeProps = false } = pt["_usept"] || this.config?.["ptOptions"]() || {};
			const originalValue = fn(pt.originalValue);
			const value = fn(pt.value);
			if (originalValue === void 0 && value === void 0) return void 0;
			else if (c$2(value)) return value;
			else if (c$2(originalValue)) return originalValue;
			return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : {
				...originalValue,
				...value
			} : value;
		}
		return fn(pt);
	}
	_useGlobalPT(callback, key, params) {
		return this._usePT(this.$globalPT, callback, key, params);
	}
	_useDefaultPT(callback, key, params) {
		return this._usePT(this.$defaultPT, callback, key, params);
	}
	ptm(key = "", params = {}) {
		return this._getPTValue(this.$pt(), key, {
			...this.$params,
			...params
		});
	}
	ptms(keys, params = {}) {
		return keys.reduce((acc, arg) => {
			acc = F(acc, this.ptm(arg, params)) || {};
			return acc;
		}, {});
	}
	ptmo(obj = {}, key = "", params = {}) {
		return this._getPTValue(obj, key, {
			instance: this,
			...params
		}, false);
	}
	cx(key, params = {}) {
		return !this.$unstyled() ? c$1(this._getOptionValue(this.$style.classes, key, {
			...this.$params,
			...params
		})) : void 0;
	}
	sx(key = "", when = true, params = {}) {
		if (when) {
			const self = this._getOptionValue(this.$style.inlineStyles, key, {
				...this.$params,
				...params
			});
			return {
				...this._getOptionValue(this.baseComponentStyle.inlineStyles, key, {
					...this.$params,
					...params
				}),
				...self
			};
		}
	}
	translate(key, subKey) {
		const value = this.config.getTranslation(key);
		return subKey ? value?.[subKey] : value;
	}
	static ɵfac = function BaseComponent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BaseComponent)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: BaseComponent,
		inputs: {
			dt: [1, "dt"],
			unstyled: [1, "unstyled"],
			pt: [1, "pt"],
			ptOptions: [1, "ptOptions"]
		},
		features: [ɵɵProvidersFeature([BaseComponentStyle, BaseStyle]), ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
		type: Directive,
		args: [{
			standalone: true,
			providers: [BaseComponentStyle, BaseStyle]
		}]
	}], () => [], {
		dt: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "dt",
				required: false
			}]
		}],
		unstyled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "unstyled",
				required: false
			}]
		}],
		pt: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pt",
				required: false
			}]
		}],
		ptOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ptOptions",
				required: false
			}]
		}]
	});
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-bind.mjs
var SANITIZED_SINKS = {
	innerhtml: SecurityContext.HTML,
	srcdoc: SecurityContext.HTML,
	href: SecurityContext.URL,
	src: SecurityContext.URL,
	action: SecurityContext.URL,
	formaction: SecurityContext.URL
};
var REJECTED_SINKS = /* @__PURE__ */ new Set(["outerhtml"]);
var Bind = class Bind {
	pBind = input(void 0, ...ngDevMode ? [{ debugName: "pBind" }] : /* istanbul ignore next */ []);
	_attrs = signal(void 0, ...ngDevMode ? [{ debugName: "_attrs" }] : /* istanbul ignore next */ []);
	attrs = computed(() => this._attrs() || this.pBind(), ...ngDevMode ? [{ debugName: "attrs" }] : /* istanbul ignore next */ []);
	styles = computed(() => this.attrs()?.style, ...ngDevMode ? [{ debugName: "styles" }] : /* istanbul ignore next */ []);
	classes = computed(() => c$1(this.attrs()?.class), ...ngDevMode ? [{ debugName: "classes" }] : /* istanbul ignore next */ []);
	listeners = [];
	el = inject(ElementRef);
	renderer = inject(Renderer2);
	sanitizer = inject(DomSanitizer);
	constructor() {
		effect(() => {
			const attrs = this.attrs() || {};
			const rest = Object.fromEntries(Object.entries(attrs).filter(([key]) => key !== "style" && key !== "class"));
			for (const [key, value] of Object.entries(rest)) {
				const normalizedKey = key.toLowerCase();
				if (normalizedKey.startsWith("on")) {
					if (typeof value === "function") {
						const eventName = normalizedKey.slice(2);
						if (!this.listeners.some((l) => l.eventName === eventName)) {
							const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
							this.listeners.push({
								eventName,
								unlisten
							});
						}
					}
				} else if (value === null || value === void 0) this.renderer.removeAttribute(this.el.nativeElement, key);
				else if (REJECTED_SINKS.has(normalizedKey)) continue;
				else if (SANITIZED_SINKS[normalizedKey] !== void 0) {
					const safe = this.sanitizer.sanitize(SANITIZED_SINKS[normalizedKey], value.toString()) ?? "";
					this.renderer.setAttribute(this.el.nativeElement, key, safe);
					if (key in this.el.nativeElement) this.el.nativeElement[key] = safe;
				} else {
					this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
					if (key in this.el.nativeElement) this.el.nativeElement[key] = value;
				}
			}
		});
	}
	ngOnDestroy() {
		this.clearListeners();
	}
	setAttrs(attrs) {
		if (!b(this._attrs(), attrs)) this._attrs.set(attrs);
	}
	clearListeners() {
		this.listeners.forEach(({ unlisten }) => unlisten());
		this.listeners = [];
	}
	static ɵfac = function Bind_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Bind)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: Bind,
		selectors: [[
			"",
			"pBind",
			""
		]],
		hostVars: 4,
		hostBindings: function Bind_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵstyleMap(ctx.styles());
				ɵɵclassMap(ctx.classes());
			}
		},
		inputs: { pBind: [1, "pBind"] }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bind, [{
		type: Directive,
		args: [{
			selector: "[pBind]",
			standalone: true,
			host: {
				"[style]": "styles()",
				"[class]": "classes()"
			}
		}]
	}], () => [], { pBind: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "pBind",
			required: false
		}]
	}] });
})();
var BindModule = class BindModule {
	static ɵfac = function BindModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BindModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: BindModule,
		imports: [Bind],
		exports: [Bind]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindModule, [{
		type: NgModule,
		args: [{
			imports: [Bind],
			exports: [Bind]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-fluid.mjs
var classes$3 = { root: "p-fluid" };
var FluidStyle = class FluidStyle extends BaseStyle {
	name = "fluid";
	classes = classes$3;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵFluidStyle_BaseFactory = void 0;
		return function FluidStyle_Factory(__ngFactoryType__) {
			return (ɵFluidStyle_BaseFactory || (ɵFluidStyle_BaseFactory = ɵɵgetInheritedFactory(FluidStyle)))(__ngFactoryType__ || FluidStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: FluidStyle,
		factory: FluidStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidStyle, [{ type: Injectable }], null, null);
})();
var FluidClasses;
(function(FluidClasses) {
	FluidClasses["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var FLUID_INSTANCE = new InjectionToken("FLUID_INSTANCE");
var Fluid = class Fluid extends BaseComponent {
	componentName = "Fluid";
	$pcFluid = inject(FLUID_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	_componentStyle = inject(FluidStyle);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵFluid_BaseFactory = void 0;
		return function Fluid_Factory(__ngFactoryType__) {
			return (ɵFluid_BaseFactory || (ɵFluid_BaseFactory = ɵɵgetInheritedFactory(Fluid)))(__ngFactoryType__ || Fluid);
		};
	})();
	static ɵcmp = (function() {
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Fluid,
			selectors: [["p-fluid"]],
			hostVars: 2,
			hostBindings: function Fluid_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassMap(ctx.cx("root"));
			},
			features: [
				ɵɵProvidersFeature([
					FluidStyle,
					{
						provide: FLUID_INSTANCE,
						useExisting: Fluid
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Fluid
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: ["*"],
			decls: 1,
			vars: 0,
			template: function Fluid_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
				}
			},
			dependencies: [CommonModule],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fluid, [{
		type: Component,
		args: [{
			selector: "p-fluid",
			template: ` <ng-content></ng-content> `,
			standalone: true,
			imports: [CommonModule],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				FluidStyle,
				{
					provide: FLUID_INSTANCE,
					useExisting: Fluid
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Fluid
				}
			],
			host: { "[class]": "cx('root')" },
			hostDirectives: [Bind]
		}]
	}], null, null);
})();
var FluidModule = class FluidModule {
	static ɵfac = function FluidModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FluidModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: FluidModule,
		imports: [Fluid],
		exports: [Fluid]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [Fluid] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidModule, [{
		type: NgModule,
		args: [{
			imports: [Fluid],
			exports: [Fluid]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-ripple.mjs
var style$1$3 = `
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;
var classes$2 = { root: "p-ink" };
var RippleStyle = class RippleStyle extends BaseStyle {
	name = "ripple";
	style = style$1$3;
	classes = classes$2;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵRippleStyle_BaseFactory = void 0;
		return function RippleStyle_Factory(__ngFactoryType__) {
			return (ɵRippleStyle_BaseFactory || (ɵRippleStyle_BaseFactory = ɵɵgetInheritedFactory(RippleStyle)))(__ngFactoryType__ || RippleStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: RippleStyle,
		factory: RippleStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleStyle, [{ type: Injectable }], null, null);
})();
var RippleClasses;
(function(RippleClasses) {
	RippleClasses["root"] = "p-ink";
})(RippleClasses || (RippleClasses = {}));
var Ripple = class Ripple extends BaseComponent {
	componentName = "Ripple";
	_componentStyle = inject(RippleStyle);
	animationListener;
	mouseDownListener;
	timeout;
	constructor() {
		super();
		effect(() => {
			if (isPlatformBrowser(this.platformId)) {
				if (this.config.ripple()) {
					this.create();
					this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
				} else this.remove();
			}
		});
	}
	onMouseDown(event) {
		let ink = this.getInk();
		if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") return;
		if (!this.$unstyled()) W(ink, "p-ink-active");
		ink.setAttribute("data-p-ink-active", "false");
		if (!Ft(ink) && !zt(ink)) {
			let d = Math.max(L(this.el.nativeElement), k(this.el.nativeElement));
			ink.style.height = d + "px";
			ink.style.width = d + "px";
		}
		const offset = st(this.el.nativeElement);
		let x = event.pageX - offset.left + this.document.body.scrollTop - zt(ink) / 2;
		let y = event.pageY - offset.top + this.document.body.scrollLeft - Ft(ink) / 2;
		this.renderer.setStyle(ink, "top", y + "px");
		this.renderer.setStyle(ink, "left", x + "px");
		if (!this.$unstyled()) R$1(ink, "p-ink-active");
		ink.setAttribute("data-p-ink-active", "true");
		this.timeout = setTimeout(() => {
			let ink = this.getInk();
			if (ink) {
				if (!this.$unstyled()) W(ink, "p-ink-active");
				ink.setAttribute("data-p-ink-active", "false");
			}
		}, 401);
	}
	getInk() {
		const children = this.el.nativeElement.children;
		for (let i = 0; i < children.length; i++) if (typeof children[i].className === "string" && children[i].className.indexOf("p-ink") !== -1) return children[i];
		return null;
	}
	resetInk() {
		let ink = this.getInk();
		if (ink) {
			if (!this.$unstyled()) W(ink, "p-ink-active");
			ink.setAttribute("data-p-ink-active", "false");
		}
	}
	onAnimationEnd(event) {
		if (this.timeout) clearTimeout(this.timeout);
		if (!this.$unstyled()) W(event.currentTarget, "p-ink-active");
		event.currentTarget.setAttribute("data-p-ink-active", "false");
	}
	create() {
		let ink = this.renderer.createElement("span");
		this.renderer.addClass(ink, "p-ink");
		this.renderer.appendChild(this.el.nativeElement, ink);
		this.renderer.setAttribute(ink, "data-p-ink", "true");
		this.renderer.setAttribute(ink, "data-p-ink-active", "false");
		this.renderer.setAttribute(ink, "aria-hidden", "true");
		this.renderer.setAttribute(ink, "role", "presentation");
		if (!this.animationListener) this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
	}
	remove() {
		let ink = this.getInk();
		if (ink) {
			if (this.mouseDownListener) this.mouseDownListener();
			if (this.animationListener) this.animationListener();
			this.mouseDownListener = null;
			this.animationListener = null;
			le(ink);
		}
	}
	onDestroy() {
		if (this.config && this.config.ripple()) this.remove();
	}
	static ɵfac = function Ripple_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Ripple)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: Ripple,
		selectors: [[
			"",
			"pRipple",
			""
		]],
		hostAttrs: [1, "p-ripple"],
		features: [ɵɵProvidersFeature([RippleStyle]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
		type: Directive,
		args: [{
			selector: "[pRipple]",
			host: { class: "p-ripple" },
			standalone: true,
			providers: [RippleStyle]
		}]
	}], () => [], null);
})();
var RippleModule = class RippleModule {
	static ɵfac = function RippleModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || RippleModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: RippleModule,
		imports: [Ripple],
		exports: [Ripple]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
		type: NgModule,
		args: [{
			imports: [Ripple],
			exports: [Ripple]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@primeuix/styles/dist/button/index.mjs
var style$2 = "\n    .p-button {\n        display: inline-flex;\n        cursor: pointer;\n        user-select: none;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        color: dt('button.primary.color');\n        background: dt('button.primary.background');\n        border: 1px solid dt('button.primary.border.color');\n        padding: dt('button.padding.y') dt('button.padding.x');\n        font-size: dt('button.font.size');\n        font-weight: dt('button.label.font.weight');\n        transition:\n            background dt('button.transition.duration'),\n            color dt('button.transition.duration'),\n            border-color dt('button.transition.duration'),\n            outline-color dt('button.transition.duration'),\n            box-shadow dt('button.transition.duration');\n        border-radius: dt('button.border.radius');\n        outline-color: transparent;\n        gap: dt('button.gap');\n    }\n\n    .p-button:disabled {\n        cursor: default;\n    }\n\n    .p-button-icon-right {\n        order: 1;\n    }\n\n    .p-button-icon-right:dir(rtl) {\n        order: -1;\n    }\n\n    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {\n        order: 1;\n    }\n\n    .p-button-icon-bottom {\n        order: 2;\n    }\n\n    .p-button-icon-only {\n        width: dt('button.icon.only.width');\n        padding-inline-start: 0;\n        padding-inline-end: 0;\n        gap: 0;\n    }\n\n    .p-button-icon-only.p-button-rounded {\n        border-radius: 50%;\n        height: dt('button.icon.only.width');\n    }\n\n    .p-button-icon-only .p-button-label {\n        visibility: hidden;\n        width: 0;\n    }\n\n    .p-button-icon-only::after {\n        content: \"\xA0\";\n        visibility: hidden;\n        width: 0;\n    }\n\n    .p-button-sm {\n        font-size: dt('button.sm.font.size');\n        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');\n    }\n\n    .p-button-sm .p-button-icon {\n        font-size: dt('button.sm.font.size');\n    }\n\n    .p-button-sm.p-button-icon-only {\n        width: dt('button.sm.icon.only.width');\n    }\n\n    .p-button-sm.p-button-icon-only.p-button-rounded {\n        height: dt('button.sm.icon.only.width');\n    }\n\n    .p-button-lg {\n        font-size: dt('button.lg.font.size');\n        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');\n    }\n\n    .p-button-lg .p-button-icon {\n        font-size: dt('button.lg.font.size');\n    }\n\n    .p-button-lg.p-button-icon-only {\n        width: dt('button.lg.icon.only.width');\n    }\n\n    .p-button-lg.p-button-icon-only.p-button-rounded {\n        height: dt('button.lg.icon.only.width');\n    }\n\n    .p-button-vertical {\n        flex-direction: column;\n    }\n\n    .p-button-label {\n        font-weight: dt('button.label.font.weight');\n    }\n\n    .p-button-fluid {\n        width: 100%;\n    }\n\n    .p-button-fluid.p-button-icon-only {\n        width: dt('button.icon.only.width');\n    }\n\n    .p-button:not(:disabled):hover {\n        background: dt('button.primary.hover.background');\n        border: 1px solid dt('button.primary.hover.border.color');\n        color: dt('button.primary.hover.color');\n    }\n\n    .p-button:not(:disabled):active {\n        background: dt('button.primary.active.background');\n        border: 1px solid dt('button.primary.active.border.color');\n        color: dt('button.primary.active.color');\n    }\n\n    .p-button:focus-visible {\n        box-shadow: dt('button.primary.focus.ring.shadow');\n        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');\n        outline-offset: dt('button.focus.ring.offset');\n    }\n\n    .p-button .p-badge {\n        min-width: dt('button.badge.size');\n        height: dt('button.badge.size');\n        line-height: dt('button.badge.size');\n    }\n\n    .p-button-raised {\n        box-shadow: dt('button.raised.shadow');\n    }\n\n    .p-button-rounded {\n        border-radius: dt('button.rounded.border.radius');\n    }\n\n    .p-button-secondary {\n        background: dt('button.secondary.background');\n        border: 1px solid dt('button.secondary.border.color');\n        color: dt('button.secondary.color');\n    }\n\n    .p-button-secondary:not(:disabled):hover {\n        background: dt('button.secondary.hover.background');\n        border: 1px solid dt('button.secondary.hover.border.color');\n        color: dt('button.secondary.hover.color');\n    }\n\n    .p-button-secondary:not(:disabled):active {\n        background: dt('button.secondary.active.background');\n        border: 1px solid dt('button.secondary.active.border.color');\n        color: dt('button.secondary.active.color');\n    }\n\n    .p-button-secondary:focus-visible {\n        outline-color: dt('button.secondary.focus.ring.color');\n        box-shadow: dt('button.secondary.focus.ring.shadow');\n    }\n\n    .p-button-success {\n        background: dt('button.success.background');\n        border: 1px solid dt('button.success.border.color');\n        color: dt('button.success.color');\n    }\n\n    .p-button-success:not(:disabled):hover {\n        background: dt('button.success.hover.background');\n        border: 1px solid dt('button.success.hover.border.color');\n        color: dt('button.success.hover.color');\n    }\n\n    .p-button-success:not(:disabled):active {\n        background: dt('button.success.active.background');\n        border: 1px solid dt('button.success.active.border.color');\n        color: dt('button.success.active.color');\n    }\n\n    .p-button-success:focus-visible {\n        outline-color: dt('button.success.focus.ring.color');\n        box-shadow: dt('button.success.focus.ring.shadow');\n    }\n\n    .p-button-info {\n        background: dt('button.info.background');\n        border: 1px solid dt('button.info.border.color');\n        color: dt('button.info.color');\n    }\n\n    .p-button-info:not(:disabled):hover {\n        background: dt('button.info.hover.background');\n        border: 1px solid dt('button.info.hover.border.color');\n        color: dt('button.info.hover.color');\n    }\n\n    .p-button-info:not(:disabled):active {\n        background: dt('button.info.active.background');\n        border: 1px solid dt('button.info.active.border.color');\n        color: dt('button.info.active.color');\n    }\n\n    .p-button-info:focus-visible {\n        outline-color: dt('button.info.focus.ring.color');\n        box-shadow: dt('button.info.focus.ring.shadow');\n    }\n\n    .p-button-warn {\n        background: dt('button.warn.background');\n        border: 1px solid dt('button.warn.border.color');\n        color: dt('button.warn.color');\n    }\n\n    .p-button-warn:not(:disabled):hover {\n        background: dt('button.warn.hover.background');\n        border: 1px solid dt('button.warn.hover.border.color');\n        color: dt('button.warn.hover.color');\n    }\n\n    .p-button-warn:not(:disabled):active {\n        background: dt('button.warn.active.background');\n        border: 1px solid dt('button.warn.active.border.color');\n        color: dt('button.warn.active.color');\n    }\n\n    .p-button-warn:focus-visible {\n        outline-color: dt('button.warn.focus.ring.color');\n        box-shadow: dt('button.warn.focus.ring.shadow');\n    }\n\n    .p-button-help {\n        background: dt('button.help.background');\n        border: 1px solid dt('button.help.border.color');\n        color: dt('button.help.color');\n    }\n\n    .p-button-help:not(:disabled):hover {\n        background: dt('button.help.hover.background');\n        border: 1px solid dt('button.help.hover.border.color');\n        color: dt('button.help.hover.color');\n    }\n\n    .p-button-help:not(:disabled):active {\n        background: dt('button.help.active.background');\n        border: 1px solid dt('button.help.active.border.color');\n        color: dt('button.help.active.color');\n    }\n\n    .p-button-help:focus-visible {\n        outline-color: dt('button.help.focus.ring.color');\n        box-shadow: dt('button.help.focus.ring.shadow');\n    }\n\n    .p-button-danger {\n        background: dt('button.danger.background');\n        border: 1px solid dt('button.danger.border.color');\n        color: dt('button.danger.color');\n    }\n\n    .p-button-danger:not(:disabled):hover {\n        background: dt('button.danger.hover.background');\n        border: 1px solid dt('button.danger.hover.border.color');\n        color: dt('button.danger.hover.color');\n    }\n\n    .p-button-danger:not(:disabled):active {\n        background: dt('button.danger.active.background');\n        border: 1px solid dt('button.danger.active.border.color');\n        color: dt('button.danger.active.color');\n    }\n\n    .p-button-danger:focus-visible {\n        outline-color: dt('button.danger.focus.ring.color');\n        box-shadow: dt('button.danger.focus.ring.shadow');\n    }\n\n    .p-button-contrast {\n        background: dt('button.contrast.background');\n        border: 1px solid dt('button.contrast.border.color');\n        color: dt('button.contrast.color');\n    }\n\n    .p-button-contrast:not(:disabled):hover {\n        background: dt('button.contrast.hover.background');\n        border: 1px solid dt('button.contrast.hover.border.color');\n        color: dt('button.contrast.hover.color');\n    }\n\n    .p-button-contrast:not(:disabled):active {\n        background: dt('button.contrast.active.background');\n        border: 1px solid dt('button.contrast.active.border.color');\n        color: dt('button.contrast.active.color');\n    }\n\n    .p-button-contrast:focus-visible {\n        outline-color: dt('button.contrast.focus.ring.color');\n        box-shadow: dt('button.contrast.focus.ring.shadow');\n    }\n\n    .p-button-outlined {\n        background: transparent;\n        border-color: dt('button.outlined.primary.border.color');\n        color: dt('button.outlined.primary.color');\n    }\n\n    .p-button-outlined:not(:disabled):hover {\n        background: dt('button.outlined.primary.hover.background');\n        border-color: dt('button.outlined.primary.border.color');\n        color: dt('button.outlined.primary.color');\n    }\n\n    .p-button-outlined:not(:disabled):active {\n        background: dt('button.outlined.primary.active.background');\n        border-color: dt('button.outlined.primary.border.color');\n        color: dt('button.outlined.primary.color');\n    }\n\n    .p-button-outlined.p-button-secondary {\n        border-color: dt('button.outlined.secondary.border.color');\n        color: dt('button.outlined.secondary.color');\n    }\n\n    .p-button-outlined.p-button-secondary:not(:disabled):hover {\n        background: dt('button.outlined.secondary.hover.background');\n        border-color: dt('button.outlined.secondary.border.color');\n        color: dt('button.outlined.secondary.color');\n    }\n\n    .p-button-outlined.p-button-secondary:not(:disabled):active {\n        background: dt('button.outlined.secondary.active.background');\n        border-color: dt('button.outlined.secondary.border.color');\n        color: dt('button.outlined.secondary.color');\n    }\n\n    .p-button-outlined.p-button-success {\n        border-color: dt('button.outlined.success.border.color');\n        color: dt('button.outlined.success.color');\n    }\n\n    .p-button-outlined.p-button-success:not(:disabled):hover {\n        background: dt('button.outlined.success.hover.background');\n        border-color: dt('button.outlined.success.border.color');\n        color: dt('button.outlined.success.color');\n    }\n\n    .p-button-outlined.p-button-success:not(:disabled):active {\n        background: dt('button.outlined.success.active.background');\n        border-color: dt('button.outlined.success.border.color');\n        color: dt('button.outlined.success.color');\n    }\n\n    .p-button-outlined.p-button-info {\n        border-color: dt('button.outlined.info.border.color');\n        color: dt('button.outlined.info.color');\n    }\n\n    .p-button-outlined.p-button-info:not(:disabled):hover {\n        background: dt('button.outlined.info.hover.background');\n        border-color: dt('button.outlined.info.border.color');\n        color: dt('button.outlined.info.color');\n    }\n\n    .p-button-outlined.p-button-info:not(:disabled):active {\n        background: dt('button.outlined.info.active.background');\n        border-color: dt('button.outlined.info.border.color');\n        color: dt('button.outlined.info.color');\n    }\n\n    .p-button-outlined.p-button-warn {\n        border-color: dt('button.outlined.warn.border.color');\n        color: dt('button.outlined.warn.color');\n    }\n\n    .p-button-outlined.p-button-warn:not(:disabled):hover {\n        background: dt('button.outlined.warn.hover.background');\n        border-color: dt('button.outlined.warn.border.color');\n        color: dt('button.outlined.warn.color');\n    }\n\n    .p-button-outlined.p-button-warn:not(:disabled):active {\n        background: dt('button.outlined.warn.active.background');\n        border-color: dt('button.outlined.warn.border.color');\n        color: dt('button.outlined.warn.color');\n    }\n\n    .p-button-outlined.p-button-help {\n        border-color: dt('button.outlined.help.border.color');\n        color: dt('button.outlined.help.color');\n    }\n\n    .p-button-outlined.p-button-help:not(:disabled):hover {\n        background: dt('button.outlined.help.hover.background');\n        border-color: dt('button.outlined.help.border.color');\n        color: dt('button.outlined.help.color');\n    }\n\n    .p-button-outlined.p-button-help:not(:disabled):active {\n        background: dt('button.outlined.help.active.background');\n        border-color: dt('button.outlined.help.border.color');\n        color: dt('button.outlined.help.color');\n    }\n\n    .p-button-outlined.p-button-danger {\n        border-color: dt('button.outlined.danger.border.color');\n        color: dt('button.outlined.danger.color');\n    }\n\n    .p-button-outlined.p-button-danger:not(:disabled):hover {\n        background: dt('button.outlined.danger.hover.background');\n        border-color: dt('button.outlined.danger.border.color');\n        color: dt('button.outlined.danger.color');\n    }\n\n    .p-button-outlined.p-button-danger:not(:disabled):active {\n        background: dt('button.outlined.danger.active.background');\n        border-color: dt('button.outlined.danger.border.color');\n        color: dt('button.outlined.danger.color');\n    }\n\n    .p-button-outlined.p-button-contrast {\n        border-color: dt('button.outlined.contrast.border.color');\n        color: dt('button.outlined.contrast.color');\n    }\n\n    .p-button-outlined.p-button-contrast:not(:disabled):hover {\n        background: dt('button.outlined.contrast.hover.background');\n        border-color: dt('button.outlined.contrast.border.color');\n        color: dt('button.outlined.contrast.color');\n    }\n\n    .p-button-outlined.p-button-contrast:not(:disabled):active {\n        background: dt('button.outlined.contrast.active.background');\n        border-color: dt('button.outlined.contrast.border.color');\n        color: dt('button.outlined.contrast.color');\n    }\n\n    .p-button-outlined.p-button-plain {\n        border-color: dt('button.outlined.plain.border.color');\n        color: dt('button.outlined.plain.color');\n    }\n\n    .p-button-outlined.p-button-plain:not(:disabled):hover {\n        background: dt('button.outlined.plain.hover.background');\n        border-color: dt('button.outlined.plain.border.color');\n        color: dt('button.outlined.plain.color');\n    }\n\n    .p-button-outlined.p-button-plain:not(:disabled):active {\n        background: dt('button.outlined.plain.active.background');\n        border-color: dt('button.outlined.plain.border.color');\n        color: dt('button.outlined.plain.color');\n    }\n\n    .p-button-text {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.primary.color');\n    }\n\n    .p-button-text:not(:disabled):hover {\n        background: dt('button.text.primary.hover.background');\n        border-color: transparent;\n        color: dt('button.text.primary.color');\n    }\n\n    .p-button-text:not(:disabled):active {\n        background: dt('button.text.primary.active.background');\n        border-color: transparent;\n        color: dt('button.text.primary.color');\n    }\n\n    .p-button-text.p-button-secondary {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.secondary.color');\n    }\n\n    .p-button-text.p-button-secondary:not(:disabled):hover {\n        background: dt('button.text.secondary.hover.background');\n        border-color: transparent;\n        color: dt('button.text.secondary.color');\n    }\n\n    .p-button-text.p-button-secondary:not(:disabled):active {\n        background: dt('button.text.secondary.active.background');\n        border-color: transparent;\n        color: dt('button.text.secondary.color');\n    }\n\n    .p-button-text.p-button-success {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.success.color');\n    }\n\n    .p-button-text.p-button-success:not(:disabled):hover {\n        background: dt('button.text.success.hover.background');\n        border-color: transparent;\n        color: dt('button.text.success.color');\n    }\n\n    .p-button-text.p-button-success:not(:disabled):active {\n        background: dt('button.text.success.active.background');\n        border-color: transparent;\n        color: dt('button.text.success.color');\n    }\n\n    .p-button-text.p-button-info {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.info.color');\n    }\n\n    .p-button-text.p-button-info:not(:disabled):hover {\n        background: dt('button.text.info.hover.background');\n        border-color: transparent;\n        color: dt('button.text.info.color');\n    }\n\n    .p-button-text.p-button-info:not(:disabled):active {\n        background: dt('button.text.info.active.background');\n        border-color: transparent;\n        color: dt('button.text.info.color');\n    }\n\n    .p-button-text.p-button-warn {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.warn.color');\n    }\n\n    .p-button-text.p-button-warn:not(:disabled):hover {\n        background: dt('button.text.warn.hover.background');\n        border-color: transparent;\n        color: dt('button.text.warn.color');\n    }\n\n    .p-button-text.p-button-warn:not(:disabled):active {\n        background: dt('button.text.warn.active.background');\n        border-color: transparent;\n        color: dt('button.text.warn.color');\n    }\n\n    .p-button-text.p-button-help {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.help.color');\n    }\n\n    .p-button-text.p-button-help:not(:disabled):hover {\n        background: dt('button.text.help.hover.background');\n        border-color: transparent;\n        color: dt('button.text.help.color');\n    }\n\n    .p-button-text.p-button-help:not(:disabled):active {\n        background: dt('button.text.help.active.background');\n        border-color: transparent;\n        color: dt('button.text.help.color');\n    }\n\n    .p-button-text.p-button-danger {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.danger.color');\n    }\n\n    .p-button-text.p-button-danger:not(:disabled):hover {\n        background: dt('button.text.danger.hover.background');\n        border-color: transparent;\n        color: dt('button.text.danger.color');\n    }\n\n    .p-button-text.p-button-danger:not(:disabled):active {\n        background: dt('button.text.danger.active.background');\n        border-color: transparent;\n        color: dt('button.text.danger.color');\n    }\n\n    .p-button-text.p-button-contrast {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.contrast.color');\n    }\n\n    .p-button-text.p-button-contrast:not(:disabled):hover {\n        background: dt('button.text.contrast.hover.background');\n        border-color: transparent;\n        color: dt('button.text.contrast.color');\n    }\n\n    .p-button-text.p-button-contrast:not(:disabled):active {\n        background: dt('button.text.contrast.active.background');\n        border-color: transparent;\n        color: dt('button.text.contrast.color');\n    }\n\n    .p-button-text.p-button-plain {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.plain.color');\n    }\n\n    .p-button-text.p-button-plain:not(:disabled):hover {\n        background: dt('button.text.plain.hover.background');\n        border-color: transparent;\n        color: dt('button.text.plain.color');\n    }\n\n    .p-button-text.p-button-plain:not(:disabled):active {\n        background: dt('button.text.plain.active.background');\n        border-color: transparent;\n        color: dt('button.text.plain.color');\n    }\n\n    .p-button-link {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.link.color');\n    }\n\n    .p-button-link:not(:disabled):hover {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.link.hover.color');\n    }\n\n    .p-button-link:not(:disabled):hover .p-button-label {\n        text-decoration: underline;\n    }\n\n    .p-button-link:not(:disabled):active {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.link.active.color');\n    }\n";
//#endregion
//#region node_modules/@primeicons/core/dist/esm/utils.mjs
function a(n) {
	if (!(n == null || n === "")) return typeof n == "number" || /^\d+(\.\d+)?$/.test(n) ? `${n}px` : `${n}`;
}
//#endregion
//#region node_modules/@primeicons/angular/fesm2022/primeicons-angular-core.mjs
var ICON_TEMPLATE = `
        @for (node of iconNodes(); track node[1]['key'] || $index) {
            @switch (node[0]) {
                @case ('path') {
                    <svg:path
                        [attr.d]="node[1]['d']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.fill-rule]="node[1]['fillRule']"
                        [attr.clip-rule]="node[1]['clipRule']"
                        [attr.stroke]="node[1]['stroke']"
                        [attr.stroke-width]="node[1]['strokeWidth']"
                        [attr.stroke-opacity]="node[1]['strokeOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('circle') {
                    <svg:circle
                        [attr.cx]="node[1]['cx']"
                        [attr.cy]="node[1]['cy']"
                        [attr.r]="node[1]['r']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('rect') {
                    <svg:rect
                        [attr.x]="node[1]['x']"
                        [attr.y]="node[1]['y']"
                        [attr.width]="node[1]['width']"
                        [attr.height]="node[1]['height']"
                        [attr.rx]="node[1]['rx']"
                        [attr.ry]="node[1]['ry']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('line') {
                    <svg:line
                        [attr.x1]="node[1]['x1']"
                        [attr.y1]="node[1]['y1']"
                        [attr.x2]="node[1]['x2']"
                        [attr.y2]="node[1]['y2']"
                        [attr.stroke]="node[1]['stroke']"
                        [attr.stroke-opacity]="node[1]['strokeOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('polyline') {
                    <svg:polyline
                        [attr.points]="node[1]['points']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('polygon') {
                    <svg:polygon
                        [attr.points]="node[1]['points']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
                @case ('ellipse') {
                    <svg:ellipse
                        [attr.cx]="node[1]['cx']"
                        [attr.cy]="node[1]['cy']"
                        [attr.rx]="node[1]['rx']"
                        [attr.ry]="node[1]['ry']"
                        [attr.fill]="node[1]['fill']"
                        [attr.fill-opacity]="node[1]['fillOpacity']"
                        [attr.opacity]="node[1]['opacity']"
                    />
                }
            }
        }
`;
var CoreIcon = class CoreIcon {
	_iconSignal = signal(null, ...ngDevMode ? [{ debugName: "_iconSignal" }] : /* istanbul ignore next */ []);
	get _icon() {
		return this._iconSignal();
	}
	set _icon(value) {
		this._iconSignal.set(value);
	}
	size = input(void 0, ...ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []);
	color = input(void 0, ...ngDevMode ? [{ debugName: "color" }] : /* istanbul ignore next */ []);
	styleClass = input(void 0, ...ngDevMode ? [{ debugName: "styleClass" }] : /* istanbul ignore next */ []);
	spin = input(void 0, ...ngDevMode ? [{ debugName: "spin" }] : /* istanbul ignore next */ []);
	iconNodes = computed(() => this._iconSignal()?.nodes ?? [], ...ngDevMode ? [{ debugName: "iconNodes" }] : /* istanbul ignore next */ []);
	computedSize = computed(() => this.size() ?? 20, ...ngDevMode ? [{ debugName: "computedSize" }] : /* istanbul ignore next */ []);
	computedClass = computed(() => {
		const icon = this._iconSignal();
		return c$1("p-icon", icon?.name && `p-icon-${icon.name}`, this.spin() && "p-icon-spin", this.styleClass());
	}, ...ngDevMode ? [{ debugName: "computedClass" }] : /* istanbul ignore next */ []);
	get hostWidth() {
		return this.computedSize();
	}
	get hostHeight() {
		return this.computedSize();
	}
	get hostViewBox() {
		return this._iconSignal()?.svg?.viewBox;
	}
	get hostFill() {
		return this._iconSignal()?.svg?.fill;
	}
	get hostXmlns() {
		return this._iconSignal()?.svg?.xmlns;
	}
	hostAriaHidden = "true";
	get hostClass() {
		return this.computedClass();
	}
	get hostColor() {
		return this.color() || null;
	}
	get hostIconSize() {
		return a(this.size()) ?? null;
	}
	static ɵfac = function CoreIcon_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CoreIcon)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: CoreIcon,
		hostVars: 12,
		hostBindings: function CoreIcon_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵattribute("width", ctx.hostWidth)("height", ctx.hostHeight)("viewBox", ctx.hostViewBox)("fill", ctx.hostFill)("xmlns", ctx.hostXmlns)("aria-hidden", ctx.hostAriaHidden);
				ɵɵclassMap(ctx.hostClass);
				ɵɵstyleProp("color", ctx.hostColor)("--%NS%px-icon-size", ctx.hostIconSize);
			}
		},
		inputs: {
			size: [1, "size"],
			color: [1, "color"],
			styleClass: [1, "styleClass"],
			spin: [1, "spin"]
		}
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoreIcon, [{ type: Directive }], null, {
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}],
		color: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "color",
				required: false
			}]
		}],
		styleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "styleClass",
				required: false
			}]
		}],
		spin: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "spin",
				required: false
			}]
		}],
		hostWidth: [{
			type: HostBinding,
			args: ["attr.width"]
		}],
		hostHeight: [{
			type: HostBinding,
			args: ["attr.height"]
		}],
		hostViewBox: [{
			type: HostBinding,
			args: ["attr.viewBox"]
		}],
		hostFill: [{
			type: HostBinding,
			args: ["attr.fill"]
		}],
		hostXmlns: [{
			type: HostBinding,
			args: ["attr.xmlns"]
		}],
		hostAriaHidden: [{
			type: HostBinding,
			args: ["attr.aria-hidden"]
		}],
		hostClass: [{
			type: HostBinding,
			args: ["class"]
		}],
		hostColor: [{
			type: HostBinding,
			args: ["style.color"]
		}],
		hostIconSize: [{
			type: HostBinding,
			args: ["style.--px-icon-size"]
		}]
	});
})();
//#endregion
//#region node_modules/@primeicons/core/dist/esm/icons/spinner.mjs
var e = {
	name: "spinner",
	meta: { tags: [
		"spinner",
		"loading",
		"process",
		"wait",
		"buffering"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M1 10C1 5.02579 5.02579 1 10 1C12.3905 1 14.562 1.9393 16.1738 3.45312C16.4756 3.73669 16.4905 4.21178 16.207 4.51367C15.9235 4.81558 15.4484 4.83039 15.1465 4.54688C13.7983 3.2807 11.9895 2.5 10 2.5C5.85421 2.5 2.5 5.85421 2.5 10C2.5 14.1458 5.85421 17.5 10 17.5C14.1458 17.5 17.5 14.1458 17.5 10C17.5 9.58579 17.8358 9.25 18.25 9.25C18.6642 9.25 19 9.58579 19 10C19 14.9742 14.9742 19 10 19C5.02579 19 1 14.9742 1 10Z",
		fill: "currentColor",
		key: "p4wko0"
	}]]
};
//#endregion
//#region node_modules/@primeicons/angular/fesm2022/primeicons-angular-spinner.mjs
var Spinner = class Spinner extends CoreIcon {
	constructor() {
		super();
		this._icon = e;
	}
	static ɵfac = function Spinner_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Spinner)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Spinner_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Spinner_For_1_Case_0_Template, 1, 9, ":svg:path")(1, Spinner_For_1_Case_1_Template, 1, 6, ":svg:circle")(2, Spinner_For_1_Case_2_Template, 1, 9, ":svg:rect")(3, Spinner_For_1_Case_3_Template, 1, 7, ":svg:line")(4, Spinner_For_1_Case_4_Template, 1, 4, ":svg:polyline")(5, Spinner_For_1_Case_5_Template, 1, 4, ":svg:polygon")(6, Spinner_For_1_Case_6_Template, 1, 7, ":svg:ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Spinner,
			selectors: [[
				"svg",
				"data-p-icon",
				"spinner"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Spinner_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Spinner_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Spinner, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"spinner\"]",
			standalone: true,
			template: ICON_TEMPLATE
		}]
	}], () => [], null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class DomHandler {
	static zindex = 1e3;
	static calculatedScrollbarWidth = null;
	static calculatedScrollbarHeight = null;
	static browser;
	static addClass(element, className) {
		if (element && className) {
			if (element.classList) element.classList.add(className);
			else element.className += " " + className;
		}
	}
	static addMultipleClasses(element, className) {
		if (element && className) {
			if (element.classList) {
				let styles = className.trim().split(" ");
				for (let i = 0; i < styles.length; i++) element.classList.add(styles[i]);
			} else {
				let styles = className.split(" ");
				for (let i = 0; i < styles.length; i++) element.className += " " + styles[i];
			}
		}
	}
	static removeClass(element, className) {
		if (element && className) {
			if (element.classList) element.classList.remove(className);
			else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
		}
	}
	static removeMultipleClasses(element, classNames) {
		if (element && classNames) [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
	}
	static hasClass(element, className) {
		if (element && className) {
			if (element.classList) return element.classList.contains(className);
			else return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
		}
		return false;
	}
	static siblings(element) {
		return Array.prototype.filter.call(element.parentNode.children, function(child) {
			return child !== element;
		});
	}
	static find(element, selector) {
		return Array.from(element.querySelectorAll(selector));
	}
	static findSingle(element, selector) {
		return this.isElement(element) ? element.querySelector(selector) : null;
	}
	static index(element) {
		let children = element.parentNode.childNodes;
		let num = 0;
		for (let i = 0; i < children.length; i++) {
			if (children[i] == element) return num;
			if (children[i].nodeType == 1) num++;
		}
		return -1;
	}
	static indexWithinGroup(element, attributeName) {
		let children = element.parentNode ? element.parentNode.childNodes : [];
		let num = 0;
		for (let i = 0; i < children.length; i++) {
			if (children[i] == element) return num;
			if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1) num++;
		}
		return -1;
	}
	static appendOverlay(overlay, target, appendTo = "self") {
		if (appendTo !== "self" && overlay && target) this.appendChild(overlay, target);
	}
	static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
		if (overlay && target) {
			if (calculateMinWidth) overlay.style.minWidth = `${DomHandler.getOuterWidth(target)}px`;
			if (appendTo === "self") this.relativePosition(overlay, target);
			else this.absolutePosition(overlay, target);
		}
	}
	static relativePosition(element, target, gutter = true) {
		const getClosestRelativeElement = (el) => {
			if (!el) return;
			return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
		};
		const elementDimensions = element.offsetParent ? {
			width: element.offsetWidth,
			height: element.offsetHeight
		} : this.getHiddenElementDimensions(element);
		const targetHeight = target.offsetHeight;
		const targetOffset = target.getBoundingClientRect();
		const windowScrollTop = this.getWindowScrollTop();
		const windowScrollLeft = this.getWindowScrollLeft();
		const viewport = this.getViewport();
		const relativeElementOffset = getClosestRelativeElement(element)?.getBoundingClientRect() || {
			top: -1 * windowScrollTop,
			left: -1 * windowScrollLeft
		};
		let top, left, origin = "top";
		if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
			top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
			origin = "bottom";
			if (targetOffset.top + top < 0) top = -1 * targetOffset.top;
		} else {
			top = targetHeight + targetOffset.top - relativeElementOffset.top;
			origin = "top";
		}
		const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
		const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
		if (elementDimensions.width > viewport.width) left = (targetOffset.left - relativeElementOffset.left) * -1;
		else if (horizontalOverflow > 0) left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
		else left = targetOffset.left - relativeElementOffset.left;
		element.style.top = top + "px";
		element.style.left = left + "px";
		element.style.transformOrigin = origin;
		if (gutter) {
			const gutterValue = w(/-anchor-gutter$/)?.value;
			element.style.marginTop = origin === "bottom" ? `calc(${gutterValue ?? "2px"} * -1)` : gutterValue ?? "";
		}
	}
	static absolutePosition(element, target, gutter = true) {
		const elementDimensions = element.offsetParent ? {
			width: element.offsetWidth,
			height: element.offsetHeight
		} : this.getHiddenElementDimensions(element);
		const elementOuterHeight = elementDimensions.height;
		const elementOuterWidth = elementDimensions.width;
		const targetOuterHeight = target.offsetHeight;
		const targetOuterWidth = target.offsetWidth;
		const targetOffset = target.getBoundingClientRect();
		const windowScrollTop = this.getWindowScrollTop();
		const windowScrollLeft = this.getWindowScrollLeft();
		const viewport = this.getViewport();
		let top, left;
		if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
			top = targetOffset.top + windowScrollTop - elementOuterHeight;
			element.style.transformOrigin = "bottom";
			if (top < 0) top = windowScrollTop;
		} else {
			top = targetOuterHeight + targetOffset.top + windowScrollTop;
			element.style.transformOrigin = "top";
		}
		if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
		else left = targetOffset.left + windowScrollLeft;
		element.style.top = top + "px";
		element.style.left = left + "px";
		if (gutter) element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))";
	}
	static getParents(element, parents = []) {
		const parent = element["parentNode"] instanceof ShadowRoot ? element["parentNode"].host : element["parentNode"];
		return parent == null ? parents : this.getParents(parent, parents.concat([parent]));
	}
	static getScrollableParents(element) {
		let scrollableParents = [];
		if (element) {
			let parents = this.getParents(element);
			const overflowRegex = /(auto|scroll)/;
			const overflowCheck = (node) => {
				let styleDeclaration = window["getComputedStyle"](node, null);
				return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
			};
			for (let parent of parents) {
				let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
				if (scrollSelectors) {
					let selectors = scrollSelectors.split(",");
					for (let selector of selectors) {
						let el = this.findSingle(parent, selector);
						if (el && overflowCheck(el)) scrollableParents.push(el);
					}
				}
				if (parent.nodeType !== 9 && overflowCheck(parent)) scrollableParents.push(parent);
			}
		}
		return scrollableParents;
	}
	static getHiddenElementOuterHeight(element) {
		element.style.visibility = "hidden";
		element.style.display = "block";
		let elementHeight = element.offsetHeight;
		element.style.display = "none";
		element.style.visibility = "visible";
		return elementHeight;
	}
	static getHiddenElementOuterWidth(element) {
		element.style.visibility = "hidden";
		element.style.display = "block";
		let elementWidth = element.offsetWidth;
		element.style.display = "none";
		element.style.visibility = "visible";
		return elementWidth;
	}
	static getHiddenElementDimensions(element) {
		let dimensions = {};
		element.style.visibility = "hidden";
		element.style.display = "block";
		dimensions.width = element.offsetWidth;
		dimensions.height = element.offsetHeight;
		element.style.display = "none";
		element.style.visibility = "visible";
		return dimensions;
	}
	static scrollInView(container, item) {
		let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
		let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
		let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
		let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
		let containerRect = container.getBoundingClientRect();
		let offset = item.getBoundingClientRect().top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
		let scroll = container.scrollTop;
		let elementHeight = container.clientHeight;
		let itemHeight = this.getOuterHeight(item);
		if (offset < 0) container.scrollTop = scroll + offset;
		else if (offset + itemHeight > elementHeight) container.scrollTop = scroll + offset - elementHeight + itemHeight;
	}
	static fadeIn(element, duration) {
		element.style.opacity = 0;
		let last = +/* @__PURE__ */ new Date();
		let opacity = 0;
		let tick = function() {
			opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
			element.style.opacity = opacity;
			last = +/* @__PURE__ */ new Date();
			if (+opacity < 1) {
				if (window.requestAnimationFrame) window.requestAnimationFrame(tick);
				else setTimeout(tick, 16);
			}
		};
		tick();
	}
	static fadeOut(element, ms) {
		let opacity = 1, interval = 50, gap = interval / ms;
		let fading = setInterval(() => {
			opacity = opacity - gap;
			if (opacity <= 0) {
				opacity = 0;
				clearInterval(fading);
			}
			element.style.opacity = opacity;
		}, interval);
	}
	static getWindowScrollTop() {
		let doc = document.documentElement;
		return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	}
	static getWindowScrollLeft() {
		let doc = document.documentElement;
		return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	}
	static matches(element, selector) {
		let p = Element.prototype;
		return (p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s) {
			return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
		}).call(element, selector);
	}
	static getOuterWidth(el, margin) {
		let width = el.offsetWidth;
		if (margin) {
			let style = getComputedStyle(el);
			width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
		}
		return width;
	}
	static getHorizontalPadding(el) {
		let style = getComputedStyle(el);
		return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
	}
	static getHorizontalMargin(el) {
		let style = getComputedStyle(el);
		return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
	}
	static innerWidth(el) {
		let width = el.offsetWidth;
		let style = getComputedStyle(el);
		width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		return width;
	}
	static width(el) {
		let width = el.offsetWidth;
		let style = getComputedStyle(el);
		width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		return width;
	}
	static getInnerHeight(el) {
		let height = el.offsetHeight;
		let style = getComputedStyle(el);
		height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		return height;
	}
	static getOuterHeight(el, margin) {
		let height = el.offsetHeight;
		if (margin) {
			let style = getComputedStyle(el);
			height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
		}
		return height;
	}
	static getHeight(el) {
		let height = el.offsetHeight;
		let style = getComputedStyle(el);
		height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		return height;
	}
	static getWidth(el) {
		let width = el.offsetWidth;
		let style = getComputedStyle(el);
		width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		return width;
	}
	static getViewport() {
		let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0];
		return {
			width: win.innerWidth || e.clientWidth || g.clientWidth,
			height: win.innerHeight || e.clientHeight || g.clientHeight
		};
	}
	static getOffset(el) {
		let rect = el.getBoundingClientRect();
		return {
			top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
			left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
		};
	}
	static replaceElementWith(element, replacementElement) {
		let parentNode = element.parentNode;
		if (!parentNode) throw `Can't replace element`;
		return parentNode.replaceChild(replacementElement, element);
	}
	static getUserAgent() {
		if (navigator && this.isClient()) return navigator.userAgent;
	}
	static isIE() {
		let ua = window.navigator.userAgent;
		if (ua.indexOf("MSIE ") > 0) return true;
		if (ua.indexOf("Trident/") > 0) return true;
		if (ua.indexOf("Edge/") > 0) return true;
		return false;
	}
	static isIOS() {
		return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
	}
	static isAndroid() {
		return /(android)/i.test(navigator.userAgent);
	}
	static isTouchDevice() {
		return "ontouchstart" in window || navigator.maxTouchPoints > 0;
	}
	static appendChild(element, target) {
		if (this.isElement(target)) target.appendChild(element);
		else if (target && target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);
		else throw "Cannot append " + target + " to " + element;
	}
	static removeChild(element, target) {
		if (this.isElement(target)) target.removeChild(element);
		else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);
		else throw "Cannot remove " + element + " from " + target;
	}
	static removeElement(element) {
		if (!("remove" in Element.prototype)) element.parentNode?.removeChild(element);
		else element.remove();
	}
	static isElement(obj) {
		return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
	}
	static calculateScrollbarWidth(el) {
		if (el) {
			let style = getComputedStyle(el);
			return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
		} else {
			if (this.calculatedScrollbarWidth !== null) return this.calculatedScrollbarWidth;
			let scrollDiv = document.createElement("div");
			scrollDiv.className = "p-scrollbar-measure";
			document.body.appendChild(scrollDiv);
			let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
			this.calculatedScrollbarWidth = scrollbarWidth;
			return scrollbarWidth;
		}
	}
	static calculateScrollbarHeight() {
		if (this.calculatedScrollbarHeight !== null) return this.calculatedScrollbarHeight;
		let scrollDiv = document.createElement("div");
		scrollDiv.className = "p-scrollbar-measure";
		document.body.appendChild(scrollDiv);
		let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
		document.body.removeChild(scrollDiv);
		this.calculatedScrollbarWidth = scrollbarHeight;
		return scrollbarHeight;
	}
	static invokeElementMethod(element, methodName, args) {
		element[methodName].apply(element, args);
	}
	static clearSelection() {
		if (window.getSelection && window.getSelection()) {
			if (window.getSelection()?.empty) window.getSelection()?.empty();
			else if (window.getSelection()?.removeAllRanges && (window.getSelection()?.rangeCount || 0) > 0 && (window.getSelection()?.getRangeAt(0)?.getClientRects()?.length || 0) > 0) window.getSelection()?.removeAllRanges();
		} else if (document["selection"] && document["selection"].empty) try {
			document["selection"].empty();
		} catch {}
	}
	static getBrowser() {
		if (!this.browser) {
			let matched = this.resolveUserAgent();
			this.browser = {};
			if (matched.browser) {
				this.browser[matched.browser] = true;
				this.browser["version"] = matched.version;
			}
			if (this.browser["chrome"]) this.browser["webkit"] = true;
			else if (this.browser["webkit"]) this.browser["safari"] = true;
		}
		return this.browser;
	}
	static resolveUserAgent() {
		let ua = navigator.userAgent.toLowerCase();
		let match = /(chrome)[ /]([\w.]+)/.exec(ua) || /(webkit)[ /]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
		return {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	}
	static isInteger(value) {
		if (Number.isInteger) return Number.isInteger(value);
		else return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
	}
	static isHidden(element) {
		return !element || element.offsetParent === null;
	}
	static isVisible(element) {
		return element && element.offsetParent != null;
	}
	static isExist(element) {
		return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
	}
	static focus(element, options) {
		if (element && document.activeElement !== element) element.focus(options);
	}
	static getFocusableSelectorString(selector = "") {
		return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
	}
	static getFocusableElements(element, selector = "") {
		let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
		let visibleFocusableElements = [];
		for (let focusableElement of focusableElements) {
			const computedStyle = getComputedStyle(focusableElement);
			if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden") visibleFocusableElements.push(focusableElement);
		}
		return visibleFocusableElements;
	}
	static getFocusableElement(element, selector = "") {
		let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
		if (focusableElement) {
			const computedStyle = getComputedStyle(focusableElement);
			if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden") return focusableElement;
		}
		return null;
	}
	static getFirstFocusableElement(element, selector = "") {
		const focusableElements = this.getFocusableElements(element, selector);
		return focusableElements.length > 0 ? focusableElements[0] : null;
	}
	static getLastFocusableElement(element, selector) {
		const focusableElements = this.getFocusableElements(element, selector);
		return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
	}
	static getNextFocusableElement(element, reverse = false) {
		const focusableElements = DomHandler.getFocusableElements(element);
		let index = 0;
		if (focusableElements && focusableElements.length > 0) {
			const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
			if (reverse) {
				if (focusedIndex == -1 || focusedIndex === 0) index = focusableElements.length - 1;
				else index = focusedIndex - 1;
			} else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) index = focusedIndex + 1;
		}
		return focusableElements[index];
	}
	static generateZIndex() {
		this.zindex = this.zindex || 999;
		return ++this.zindex;
	}
	static getSelection() {
		if (window.getSelection) return window.getSelection()?.toString();
		else if (document.getSelection) return document.getSelection()?.toString();
		else if (document["selection"]) return document["selection"].createRange().text;
		return null;
	}
	static getTargetElement(target, el) {
		if (!target) return null;
		switch (target) {
			case "document": return document;
			case "window": return window;
			case "@next": return el?.nextElementSibling;
			case "@prev": return el?.previousElementSibling;
			case "@parent": return el?.parentElement;
			case "@grandparent": return el?.parentElement?.parentElement;
			default: {
				const type = typeof target;
				if (type === "string") return document.querySelector(target);
				else if (type === "object" && Object.prototype.hasOwnProperty.call(target, "nativeElement")) return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
				const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
				const element = isFunction(target) ? target() : target;
				return element && element.nodeType === 9 || this.isExist(element) ? element : null;
			}
		}
	}
	static isClient() {
		return !!(typeof window !== "undefined" && window.document && window.document.createElement);
	}
	static getAttribute(element, name) {
		if (element) {
			const value = element.getAttribute(name);
			if (!isNaN(value)) return +value;
			if (value === "true" || value === "false") return value === "true";
			return value;
		}
	}
	static calculateBodyScrollbarWidth() {
		return window.innerWidth - document.documentElement.offsetWidth;
	}
	static blockBodyScroll(className = "p-overflow-hidden") {
		document.body.style.setProperty("--px-scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
		this.addClass(document.body, className);
	}
	static unblockBodyScroll(className = "p-overflow-hidden") {
		document.body.style.removeProperty("--px-scrollbar-width");
		this.removeClass(document.body, className);
	}
	static createElement(type, attributes = {}, ...children) {
		if (type) {
			const element = document.createElement(type);
			this.setAttributes(element, attributes);
			element.append(...children);
			return element;
		}
	}
	static setAttribute(element, attribute = "", value) {
		if (this.isElement(element) && value !== null && value !== void 0) element.setAttribute(attribute, value);
	}
	static setAttributes(element, attributes = {}) {
		if (this.isElement(element)) {
			const computedStyles = (rule, value) => {
				const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
				return [value].flat().reduce((cv, v) => {
					if (v !== null && v !== void 0) {
						const type = typeof v;
						if (type === "string" || type === "number") cv.push(v);
						else if (type === "object") {
							const _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : _v ? _k : void 0);
							cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
						}
					}
					return cv;
				}, styles);
			};
			Object.entries(attributes).forEach(([key, value]) => {
				if (value !== void 0 && value !== null) {
					const matchedEvent = key.match(/^on(.+)/);
					if (matchedEvent) element.addEventListener(matchedEvent[1].toLowerCase(), value);
					else if (key === "pBind") this.setAttributes(element, value);
					else {
						value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
						if (element.$attrs = element.$attrs || {}) element.$attrs[key] = value;
						element.setAttribute(key, value);
					}
				}
			});
		}
	}
	static isFocusableElement(element, selector = "") {
		return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
	}
};
//#endregion
//#region node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class AutoFocus extends BaseComponent {
	autofocus = input(false, {
		...ngDevMode ? { debugName: "autofocus" } : /* istanbul ignore next */ {},
		alias: "pAutoFocus",
		transform: booleanAttribute
	});
	focused = false;
	host = inject(ElementRef);
	onAfterContentChecked() {
		if (this.autofocus() === false) this.host.nativeElement.removeAttribute("autofocus");
		else this.host.nativeElement.setAttribute("autofocus", true);
		if (!this.focused) this.autoFocus();
	}
	onAfterViewChecked() {
		if (!this.focused) this.autoFocus();
	}
	autoFocus() {
		if (isPlatformBrowser(this.platformId) && this.autofocus()) setTimeout(() => {
			const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
			if (focusableElements.length === 0) this.host.nativeElement.focus();
			if (focusableElements.length > 0) focusableElements[0].focus();
			this.focused = true;
		});
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵAutoFocus_BaseFactory = void 0;
		return function AutoFocus_Factory(__ngFactoryType__) {
			return (ɵAutoFocus_BaseFactory || (ɵAutoFocus_BaseFactory = ɵɵgetInheritedFactory(AutoFocus)))(__ngFactoryType__ || AutoFocus);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: AutoFocus,
		selectors: [[
			"",
			"pAutoFocus",
			""
		]],
		inputs: { autofocus: [
			1,
			"pAutoFocus",
			"autofocus"
		] },
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
		type: Directive,
		args: [{
			selector: "[pAutoFocus]",
			standalone: true
		}]
	}], null, { autofocus: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "pAutoFocus",
			required: false
		}]
	}] });
})();
var AutoFocusModule = class AutoFocusModule {
	static ɵfac = function AutoFocusModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AutoFocusModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: AutoFocusModule,
		imports: [AutoFocus],
		exports: [AutoFocus]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
		type: NgModule,
		args: [{
			imports: [AutoFocus],
			exports: [AutoFocus]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-badge.mjs
var style$1 = `
    
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }

`;
var classes$1 = { root: ({ instance }) => {
	const value = instance.value();
	const size = instance.size();
	const badgeSize = instance.badgeSize();
	const severity = instance.severity();
	return ["p-badge p-component", {
		"p-badge-circle": l$1(value) && String(value).length === 1,
		"p-badge-dot": p$1(value),
		"p-badge-sm": size === "small" || badgeSize === "small",
		"p-badge-lg": size === "large" || badgeSize === "large",
		"p-badge-xl": size === "xlarge" || badgeSize === "xlarge",
		"p-badge-info": severity === "info",
		"p-badge-success": severity === "success",
		"p-badge-warn": severity === "warn",
		"p-badge-danger": severity === "danger",
		"p-badge-secondary": severity === "secondary",
		"p-badge-contrast": severity === "contrast"
	}];
} };
var BadgeStyle = class BadgeStyle extends BaseStyle {
	name = "badge";
	style = style$1;
	classes = classes$1;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBadgeStyle_BaseFactory = void 0;
		return function BadgeStyle_Factory(__ngFactoryType__) {
			return (ɵBadgeStyle_BaseFactory || (ɵBadgeStyle_BaseFactory = ɵɵgetInheritedFactory(BadgeStyle)))(__ngFactoryType__ || BadgeStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: BadgeStyle,
		factory: BadgeStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeStyle, [{ type: Injectable }], null, null);
})();
var BadgeClasses;
(function(BadgeClasses) {
	BadgeClasses["root"] = "p-badge";
})(BadgeClasses || (BadgeClasses = {}));
var BADGE_INSTANCE = new InjectionToken("BADGE_INSTANCE");
var Badge = class Badge extends BaseComponent {
	componentName = "Badge";
	$pcBadge = inject(BADGE_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	badgeSize = input(...ngDevMode ? [void 0, { debugName: "badgeSize" }] : /* istanbul ignore next */ []);
	size = input(...ngDevMode ? [void 0, { debugName: "size" }] : /* istanbul ignore next */ []);
	severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : /* istanbul ignore next */ []);
	value = input(...ngDevMode ? [void 0, { debugName: "value" }] : /* istanbul ignore next */ []);
	badgeDisabled = input(false, {
		...ngDevMode ? { debugName: "badgeDisabled" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	_componentStyle = inject(BadgeStyle);
	displayStyle = computed(() => this.badgeDisabled() ? "none" : null, ...ngDevMode ? [{ debugName: "displayStyle" }] : /* istanbul ignore next */ []);
	dataP = computed(() => {
		const value = this.value();
		const severity = this.severity();
		const size = this.size();
		return this.cn({
			circle: value != null && String(value).length === 1,
			empty: value == null,
			disabled: this.badgeDisabled(),
			[severity]: severity,
			[size]: size
		});
	}, ...ngDevMode ? [{ debugName: "dataP" }] : /* istanbul ignore next */ []);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBadge_BaseFactory = void 0;
		return function Badge_Factory(__ngFactoryType__) {
			return (ɵBadge_BaseFactory || (ɵBadge_BaseFactory = ɵɵgetInheritedFactory(Badge)))(__ngFactoryType__ || Badge);
		};
	})();
	static ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({
		type: Badge,
		selectors: [["p-badge"]],
		hostVars: 5,
		hostBindings: function Badge_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵattribute("data-p", ctx.dataP());
				ɵɵclassMap(ctx.cx("root"));
				ɵɵstyleProp("display", ctx.displayStyle());
			}
		},
		inputs: {
			badgeSize: [1, "badgeSize"],
			size: [1, "size"],
			severity: [1, "severity"],
			value: [1, "value"],
			badgeDisabled: [1, "badgeDisabled"]
		},
		features: [
			ɵɵProvidersFeature([
				BadgeStyle,
				{
					provide: BADGE_INSTANCE,
					useExisting: Badge
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Badge
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		],
		decls: 1,
		vars: 1,
		template: function Badge_Template(rf, ctx) {
			if (rf & 1) ɵɵtext(0);
			if (rf & 2) ɵɵtextInterpolate(ctx.value());
		},
		dependencies: [SharedModule],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Badge, [{
		type: Component,
		args: [{
			selector: "p-badge",
			template: `{{ value() }}`,
			standalone: true,
			imports: [SharedModule],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				BadgeStyle,
				{
					provide: BADGE_INSTANCE,
					useExisting: Badge
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Badge
				}
			],
			host: {
				"[class]": "cx('root')",
				"[style.display]": "displayStyle()",
				"[attr.data-p]": "dataP()"
			},
			hostDirectives: [Bind]
		}]
	}], null, {
		badgeSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "badgeSize",
				required: false
			}]
		}],
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}],
		severity: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "severity",
				required: false
			}]
		}],
		value: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "value",
				required: false
			}]
		}],
		badgeDisabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "badgeDisabled",
				required: false
			}]
		}]
	});
})();
var BadgeModule = class BadgeModule {
	static ɵfac = function BadgeModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BadgeModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: BadgeModule,
		imports: [Badge, SharedModule],
		exports: [Badge, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Badge,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
		type: NgModule,
		args: [{
			imports: [Badge, SharedModule],
			exports: [Badge, SharedModule]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-button.mjs
var classes = {
	root: ({ instance }) => {
		const hasIcon = instance.hasIcon();
		const label = instance.label();
		const buttonProps = instance.buttonProps();
		const loading = instance.loading();
		const link = instance.link();
		const severity = instance.severity();
		const raised = instance.raised();
		const rounded = instance.rounded();
		const text = instance.text();
		const variant = instance.variant();
		const outlined = instance.outlined();
		const size = instance.size();
		const plain = instance.plain();
		const badge = instance.badge();
		const hasFluid = instance.hasFluid();
		const iconPos = instance.iconPos();
		return ["p-button p-component", {
			"p-button-icon-only": hasIcon && !label && !buttonProps?.label && !badge,
			"p-button-vertical": (iconPos === "top" || iconPos === "bottom") && label,
			"p-button-loading": loading || buttonProps?.loading,
			"p-button-link": link || buttonProps?.link,
			[`p-button-${severity || buttonProps?.severity}`]: severity || buttonProps?.severity,
			"p-button-raised": raised || buttonProps?.raised,
			"p-button-rounded": rounded || buttonProps?.rounded,
			"p-button-text": text || variant === "text" || buttonProps?.text || buttonProps?.variant === "text",
			"p-button-outlined": outlined || variant === "outlined" || buttonProps?.outlined || buttonProps?.variant === "outlined",
			"p-button-sm": size === "small" || buttonProps?.size === "small",
			"p-button-lg": size === "large" || buttonProps?.size === "large",
			"p-button-plain": plain || buttonProps?.plain,
			"p-button-fluid": hasFluid
		}];
	},
	loadingIcon: "p-button-loading-icon",
	icon: ({ instance }) => {
		const iconPos = instance.iconPos();
		const buttonProps = instance.buttonProps();
		const label = instance.label();
		const icon = instance.icon();
		return [
			"p-button-icon",
			{
				[`p-button-icon-${iconPos || buttonProps?.iconPos}`]: label || buttonProps?.label,
				"p-button-icon-left": (iconPos === "left" || buttonProps?.iconPos === "left") && label || buttonProps?.label,
				"p-button-icon-right": (iconPos === "right" || buttonProps?.iconPos === "right") && label || buttonProps?.label,
				"p-button-icon-top": (iconPos === "top" || buttonProps?.iconPos === "top") && label || buttonProps?.label,
				"p-button-icon-bottom": (iconPos === "bottom" || buttonProps?.iconPos === "bottom") && label || buttonProps?.label
			},
			icon,
			buttonProps?.icon
		];
	},
	spinnerIcon: ({ instance }) => Object.entries(instance.cx("icon")).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon"),
	label: "p-button-label"
};
var ButtonStyle = class ButtonStyle extends BaseStyle {
	name = "button";
	style = style$2;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵButtonStyle_BaseFactory = void 0;
		return function ButtonStyle_Factory(__ngFactoryType__) {
			return (ɵButtonStyle_BaseFactory || (ɵButtonStyle_BaseFactory = ɵɵgetInheritedFactory(ButtonStyle)))(__ngFactoryType__ || ButtonStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: ButtonStyle,
		factory: ButtonStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonStyle, [{ type: Injectable }], null, null);
})();
var ButtonClasses;
(function(ButtonClasses) {
	ButtonClasses["root"] = "p-button";
	ButtonClasses["loadingIcon"] = "p-button-loading-icon";
	ButtonClasses["icon"] = "p-button-icon";
	ButtonClasses["label"] = "p-button-label";
})(ButtonClasses || (ButtonClasses = {}));
var BUTTON_INSTANCE = new InjectionToken("BUTTON_INSTANCE");
var Button = class Button extends BaseComponent {
	componentName = "Button";
	hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : /* istanbul ignore next */ []);
	$pcButton = inject(BUTTON_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	_componentStyle = inject(ButtonStyle);
	type = input("button", ...ngDevMode ? [{ debugName: "type" }] : /* istanbul ignore next */ []);
	badge = input(...ngDevMode ? [void 0, { debugName: "badge" }] : /* istanbul ignore next */ []);
	disabled = input(false, {
		...ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	raised = input(false, {
		...ngDevMode ? { debugName: "raised" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	rounded = input(false, {
		...ngDevMode ? { debugName: "rounded" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	text = input(false, {
		...ngDevMode ? { debugName: "text" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	plain = input(false, {
		...ngDevMode ? { debugName: "plain" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	outlined = input(false, {
		...ngDevMode ? { debugName: "outlined" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	link = input(false, {
		...ngDevMode ? { debugName: "link" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	tabindex = input(0, {
		...ngDevMode ? { debugName: "tabindex" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	size = input(...ngDevMode ? [void 0, { debugName: "size" }] : /* istanbul ignore next */ []);
	variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : /* istanbul ignore next */ []);
	style = input(...ngDevMode ? [void 0, { debugName: "style" }] : /* istanbul ignore next */ []);
	styleClass = input(...ngDevMode ? [void 0, { debugName: "styleClass" }] : /* istanbul ignore next */ []);
	badgeSeverity = input("secondary", ...ngDevMode ? [{ debugName: "badgeSeverity" }] : /* istanbul ignore next */ []);
	ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : /* istanbul ignore next */ []);
	autofocus = input(false, {
		...ngDevMode ? { debugName: "autofocus" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	iconPos = input("left", ...ngDevMode ? [{ debugName: "iconPos" }] : /* istanbul ignore next */ []);
	icon = input(...ngDevMode ? [void 0, { debugName: "icon" }] : /* istanbul ignore next */ []);
	label = input(...ngDevMode ? [void 0, { debugName: "label" }] : /* istanbul ignore next */ []);
	loading = input(false, {
		...ngDevMode ? { debugName: "loading" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	loadingIcon = input(...ngDevMode ? [void 0, { debugName: "loadingIcon" }] : /* istanbul ignore next */ []);
	severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : /* istanbul ignore next */ []);
	buttonProps = input(...ngDevMode ? [void 0, { debugName: "buttonProps" }] : /* istanbul ignore next */ []);
	fluid = input(void 0, {
		...ngDevMode ? { debugName: "fluid" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	iconOnly = input(false, {
		...ngDevMode ? { debugName: "iconOnly" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	onClick = output();
	onFocus = output();
	onBlur = output();
	contentTemplate = contentChild("content", {
		...ngDevMode ? { debugName: "contentTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	loadingIconTemplate = contentChild("loadingicon", {
		...ngDevMode ? { debugName: "loadingIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	iconTemplate = contentChild("icon", {
		...ngDevMode ? { debugName: "iconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	pcFluid = inject(Fluid, {
		optional: true,
		host: true,
		skipSelf: true
	});
	hasFluid = computed(() => this.fluid() ?? !!this.pcFluid, ...ngDevMode ? [{ debugName: "hasFluid" }] : /* istanbul ignore next */ []);
	$type = computed(() => this.type() || this.buttonProps()?.type, ...ngDevMode ? [{ debugName: "$type" }] : /* istanbul ignore next */ []);
	$ariaLabel = computed(() => this.ariaLabel() || this.buttonProps()?.ariaLabel, ...ngDevMode ? [{ debugName: "$ariaLabel" }] : /* istanbul ignore next */ []);
	mergedStyle = computed(() => this.style() || this.buttonProps()?.style, ...ngDevMode ? [{ debugName: "mergedStyle" }] : /* istanbul ignore next */ []);
	$disabled = computed(() => this.disabled() || this.loading() || this.buttonProps()?.disabled, ...ngDevMode ? [{ debugName: "$disabled" }] : /* istanbul ignore next */ []);
	$severity = computed(() => this.severity() || this.buttonProps()?.severity, ...ngDevMode ? [{ debugName: "$severity" }] : /* istanbul ignore next */ []);
	$tabindex = computed(() => this.tabindex() || this.buttonProps()?.tabindex, ...ngDevMode ? [{ debugName: "$tabindex" }] : /* istanbul ignore next */ []);
	$autofocus = computed(() => this.autofocus() || this.buttonProps()?.autofocus, ...ngDevMode ? [{ debugName: "$autofocus" }] : /* istanbul ignore next */ []);
	$loading = computed(() => this.loading() || this.buttonProps()?.loading, ...ngDevMode ? [{ debugName: "$loading" }] : /* istanbul ignore next */ []);
	$icon = computed(() => this.icon() || this.buttonProps()?.icon, ...ngDevMode ? [{ debugName: "$icon" }] : /* istanbul ignore next */ []);
	$label = computed(() => this.label() || this.buttonProps()?.label, ...ngDevMode ? [{ debugName: "$label" }] : /* istanbul ignore next */ []);
	$badge = computed(() => this.badge() || this.buttonProps()?.badge, ...ngDevMode ? [{ debugName: "$badge" }] : /* istanbul ignore next */ []);
	$loadingIcon = computed(() => this.loadingIcon() || this.buttonProps()?.loadingIcon, ...ngDevMode ? [{ debugName: "$loadingIcon" }] : /* istanbul ignore next */ []);
	$badgeSeverity = computed(() => this.badgeSeverity() || this.buttonProps()?.badgeSeverity, ...ngDevMode ? [{ debugName: "$badgeSeverity" }] : /* istanbul ignore next */ []);
	showLabel = computed(() => !this.contentTemplate() && this.$label(), ...ngDevMode ? [{ debugName: "showLabel" }] : /* istanbul ignore next */ []);
	showBadge = computed(() => !this.contentTemplate() && this.$badge(), ...ngDevMode ? [{ debugName: "showBadge" }] : /* istanbul ignore next */ []);
	hasIcon = computed(() => this.$icon() || this.iconTemplate() || this.loadingIcon() || this.loadingIconTemplate(), ...ngDevMode ? [{ debugName: "hasIcon" }] : /* istanbul ignore next */ []);
	$outlined = computed(() => this.outlined() || this.variant() === "outlined" || this.buttonProps()?.outlined || this.buttonProps()?.variant === "outlined", ...ngDevMode ? [{ debugName: "$outlined" }] : /* istanbul ignore next */ []);
	$text = computed(() => this.text() || this.variant() === "text" || this.buttonProps()?.text || this.buttonProps()?.variant === "text", ...ngDevMode ? [{ debugName: "$text" }] : /* istanbul ignore next */ []);
	$iconOnly = computed(() => this.iconOnly() || this.hasIcon() && !this.$label() && !this.$badge(), ...ngDevMode ? [{ debugName: "$iconOnly" }] : /* istanbul ignore next */ []);
	dataP = computed(() => this.cn({
		[this.size()]: this.size(),
		"icon-only": this.$iconOnly(),
		loading: this.$loading(),
		fluid: this.hasFluid(),
		rounded: this.rounded(),
		raised: this.raised(),
		outlined: this.$outlined(),
		text: this.$text(),
		link: this.link(),
		vertical: (this.iconPos() === "top" || this.iconPos() === "bottom") && this.$label()
	}), ...ngDevMode ? [{ debugName: "dataP" }] : /* istanbul ignore next */ []);
	dataIconP = computed(() => this.cn({
		[this.iconPos()]: this.iconPos(),
		[this.size()]: this.size()
	}), ...ngDevMode ? [{ debugName: "dataIconP" }] : /* istanbul ignore next */ []);
	dataLabelP = computed(() => this.cn({
		[this.size()]: this.size(),
		"icon-only": this.$iconOnly()
	}), ...ngDevMode ? [{ debugName: "dataLabelP" }] : /* istanbul ignore next */ []);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptm("host"));
	}
	getLoadingIconTemplateContext() {
		return {
			class: this.cx("loadingIcon"),
			pt: this.ptm("loadingIcon")
		};
	}
	getIconTemplateContext() {
		return {
			class: this.cx("icon"),
			pt: this.ptm("icon")
		};
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵButton_BaseFactory = void 0;
		return function Button_Factory(__ngFactoryType__) {
			return (ɵButton_BaseFactory || (ɵButton_BaseFactory = ɵɵgetInheritedFactory(Button)))(__ngFactoryType__ || Button);
		};
	})();
	static ɵcmp = (function() {
		const _c0 = ["content"];
		const _c1 = ["loadingicon"];
		const _c2 = ["icon"];
		const _c3 = ["*"];
		function Button_ng_container_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Button_Conditional_3_Conditional_0_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 5);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), "pi-spin", ctx_r0.$loadingIcon()));
				ɵɵproperty("pBind", ctx_r0.ptm("loadingIcon"));
				ɵɵattribute("aria-hidden", true);
			}
		}
		function Button_Conditional_3_Conditional_0_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 6);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), ctx_r0.cx("spinnerIcon")));
				ɵɵproperty("spin", true)("pBind", ctx_r0.ptm("loadingIcon"));
				ɵɵattribute("aria-hidden", true);
			}
		}
		function Button_Conditional_3_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Button_Conditional_3_Conditional_0_Conditional_0_Template, 1, 4, "span", 2)(1, Button_Conditional_3_Conditional_0_Conditional_1_Template, 1, 5, ":svg:svg", 4);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵconditional(ctx_r0.$loadingIcon() ? 0 : 1);
			}
		}
		function Button_Conditional_3_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Button_Conditional_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Button_Conditional_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingIconTemplate())("ngTemplateOutletContext", ctx_r0.getLoadingIconTemplateContext());
			}
		}
		function Button_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Button_Conditional_3_Conditional_0_Template, 2, 1)(1, Button_Conditional_3_Conditional_1_Template, 1, 2, "ng-container");
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵconditional(!ctx_r0.loadingIconTemplate() ? 0 : 1);
			}
		}
		function Button_Conditional_4_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 5);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.$icon()));
				ɵɵproperty("pBind", ctx_r0.ptm("icon"));
				ɵɵattribute("data-p", ctx_r0.dataIconP());
			}
		}
		function Button_Conditional_4_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Button_Conditional_4_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Button_Conditional_4_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate())("ngTemplateOutletContext", ctx_r0.getIconTemplateContext());
			}
		}
		function Button_Conditional_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵconditionalCreate(0, Button_Conditional_4_Conditional_0_Template, 1, 4, "span", 2);
				ɵɵconditionalCreate(1, Button_Conditional_4_Conditional_1_Template, 1, 2, "ng-container");
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵconditional(ctx_r0.$icon() && !ctx_r0.iconTemplate() ? 0 : -1);
				ɵɵadvance();
				ɵɵconditional(!ctx_r0.icon() && ctx_r0.iconTemplate() ? 1 : -1);
			}
		}
		function Button_Conditional_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 5);
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("label"));
				ɵɵproperty("pBind", ctx_r0.ptm("label"));
				ɵɵattribute("aria-hidden", ctx_r0.$icon() && !ctx_r0.$label())("data-p", ctx_r0.dataLabelP());
				ɵɵadvance();
				ɵɵtextInterpolate(ctx_r0.$label());
			}
		}
		function Button_Conditional_6_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "p-badge", 3);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵproperty("value", ctx_r0.$badge())("severity", ctx_r0.$badgeSeverity())("pt", ctx_r0.ptm("pcBadge"))("unstyled", ctx_r0.unstyled());
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Button,
			selectors: [["p-button"]],
			contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.contentTemplate, _c0, 4)(dirIndex, ctx.loadingIconTemplate, _c1, 4)(dirIndex, ctx.iconTemplate, _c2, 4);
				if (rf & 2) ɵɵqueryAdvance(3);
			},
			inputs: {
				hostName: [1, "hostName"],
				type: [1, "type"],
				badge: [1, "badge"],
				disabled: [1, "disabled"],
				raised: [1, "raised"],
				rounded: [1, "rounded"],
				text: [1, "text"],
				plain: [1, "plain"],
				outlined: [1, "outlined"],
				link: [1, "link"],
				tabindex: [1, "tabindex"],
				size: [1, "size"],
				variant: [1, "variant"],
				style: [1, "style"],
				styleClass: [1, "styleClass"],
				badgeSeverity: [1, "badgeSeverity"],
				ariaLabel: [1, "ariaLabel"],
				autofocus: [1, "autofocus"],
				iconPos: [1, "iconPos"],
				icon: [1, "icon"],
				label: [1, "label"],
				loading: [1, "loading"],
				loadingIcon: [1, "loadingIcon"],
				severity: [1, "severity"],
				buttonProps: [1, "buttonProps"],
				fluid: [1, "fluid"],
				iconOnly: [1, "iconOnly"]
			},
			outputs: {
				onClick: "onClick",
				onFocus: "onFocus",
				onBlur: "onBlur"
			},
			features: [
				ɵɵProvidersFeature([
					ButtonStyle,
					{
						provide: BUTTON_INSTANCE,
						useExisting: Button
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Button
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c3,
			decls: 7,
			vars: 18,
			consts: [
				[
					"pRipple",
					"",
					3,
					"click",
					"focus",
					"blur",
					"disabled",
					"pAutoFocus",
					"pBind"
				],
				[4, "ngTemplateOutlet"],
				[
					3,
					"class",
					"pBind"
				],
				[
					3,
					"value",
					"severity",
					"pt",
					"unstyled"
				],
				[
					"data-p-icon",
					"spinner",
					3,
					"class",
					"spin",
					"pBind"
				],
				[3, "pBind"],
				[
					"data-p-icon",
					"spinner",
					3,
					"spin",
					"pBind"
				],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				]
			],
			template: function Button_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵelementStart(0, "button", 0);
					ɵɵlistener("click", function Button_Template_button_click_0_listener($event) {
						return ctx.onClick.emit($event);
					})("focus", function Button_Template_button_focus_0_listener($event) {
						return ctx.onFocus.emit($event);
					})("blur", function Button_Template_button_blur_0_listener($event) {
						return ctx.onBlur.emit($event);
					});
					ɵɵprojection(1);
					ɵɵtemplate(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1);
					ɵɵconditionalCreate(3, Button_Conditional_3_Template, 2, 1);
					ɵɵconditionalCreate(4, Button_Conditional_4_Template, 2, 2);
					ɵɵconditionalCreate(5, Button_Conditional_5_Template, 2, 6, "span", 2);
					ɵɵconditionalCreate(6, Button_Conditional_6_Template, 1, 4, "p-badge", 3);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵstyleMap(ctx.mergedStyle());
					ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass(), ctx.buttonProps()?.styleClass));
					ɵɵproperty("disabled", ctx.$disabled())("pAutoFocus", ctx.$autofocus())("pBind", ctx.ptm("root"));
					ɵɵattribute("type", ctx.$type())("aria-label", ctx.$ariaLabel())("tabindex", ctx.$tabindex())("data-p", ctx.dataP())("data-p-disabled", ctx.$disabled())("data-p-severity", ctx.$severity());
					ɵɵadvance(2);
					ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate());
					ɵɵadvance();
					ɵɵconditional(ctx.$loading() ? 3 : -1);
					ɵɵadvance();
					ɵɵconditional(!ctx.$loading() ? 4 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showLabel() ? 5 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showBadge() ? 6 : -1);
				}
			},
			dependencies: [
				NgTemplateOutlet,
				Ripple,
				AutoFocus,
				Spinner,
				BadgeModule,
				Badge,
				Bind
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
		type: Component,
		args: [{
			selector: "p-button",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				Ripple,
				AutoFocus,
				Spinner,
				BadgeModule,
				Bind
			],
			template: `
        <button
            [attr.type]="$type()"
            [attr.aria-label]="$ariaLabel()"
            [style]="mergedStyle()"
            [disabled]="$disabled()"
            [class]="cn(cx('root'), styleClass(), buttonProps()?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.tabindex]="$tabindex()"
            [pAutoFocus]="$autofocus()"
            [pBind]="ptm('root')"
            [attr.data-p]="dataP()"
            [attr.data-p-disabled]="$disabled()"
            [attr.data-p-severity]="$severity()"
        >
            <ng-content />
            <ng-container *ngTemplateOutlet="contentTemplate()" />
            @if ($loading()) {
                @if (!loadingIconTemplate()) {
                    @if ($loadingIcon()) {
                        <span [class]="cn(cx('loadingIcon'), 'pi-spin', $loadingIcon())" [pBind]="ptm('loadingIcon')" [attr.aria-hidden]="true"></span>
                    } @else {
                        <svg data-p-icon="spinner" [class]="cn(cx('loadingIcon'), cx('spinnerIcon'))" [spin]="true" [pBind]="ptm('loadingIcon')" [attr.aria-hidden]="true" />
                    }
                } @else {
                    <ng-container *ngTemplateOutlet="loadingIconTemplate(); context: getLoadingIconTemplateContext()" />
                }
            }
            @if (!$loading()) {
                @if ($icon() && !iconTemplate()) {
                    <span [class]="cn(cx('icon'), $icon())" [pBind]="ptm('icon')" [attr.data-p]="dataIconP()"></span>
                }
                @if (!icon() && iconTemplate()) {
                    <ng-container *ngTemplateOutlet="iconTemplate(); context: getIconTemplateContext()" />
                }
            }
            @if (showLabel()) {
                <span [class]="cx('label')" [attr.aria-hidden]="$icon() && !$label()" [pBind]="ptm('label')" [attr.data-p]="dataLabelP()">{{ $label() }}</span>
            }
            @if (showBadge()) {
                <p-badge [value]="$badge()" [severity]="$badgeSeverity()" [pt]="ptm('pcBadge')" [unstyled]="unstyled()" />
            }
        </button>
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				ButtonStyle,
				{
					provide: BUTTON_INSTANCE,
					useExisting: Button
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Button
				}
			],
			hostDirectives: [Bind]
		}]
	}], null, {
		hostName: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "hostName",
				required: false
			}]
		}],
		type: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "type",
				required: false
			}]
		}],
		badge: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "badge",
				required: false
			}]
		}],
		disabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}],
		raised: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "raised",
				required: false
			}]
		}],
		rounded: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "rounded",
				required: false
			}]
		}],
		text: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "text",
				required: false
			}]
		}],
		plain: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "plain",
				required: false
			}]
		}],
		outlined: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "outlined",
				required: false
			}]
		}],
		link: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "link",
				required: false
			}]
		}],
		tabindex: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "tabindex",
				required: false
			}]
		}],
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}],
		variant: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "variant",
				required: false
			}]
		}],
		style: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "style",
				required: false
			}]
		}],
		styleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "styleClass",
				required: false
			}]
		}],
		badgeSeverity: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "badgeSeverity",
				required: false
			}]
		}],
		ariaLabel: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaLabel",
				required: false
			}]
		}],
		autofocus: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "autofocus",
				required: false
			}]
		}],
		iconPos: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "iconPos",
				required: false
			}]
		}],
		icon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "icon",
				required: false
			}]
		}],
		label: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "label",
				required: false
			}]
		}],
		loading: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "loading",
				required: false
			}]
		}],
		loadingIcon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "loadingIcon",
				required: false
			}]
		}],
		severity: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "severity",
				required: false
			}]
		}],
		buttonProps: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "buttonProps",
				required: false
			}]
		}],
		fluid: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "fluid",
				required: false
			}]
		}],
		iconOnly: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "iconOnly",
				required: false
			}]
		}],
		onClick: [{
			type: Output,
			args: ["onClick"]
		}],
		onFocus: [{
			type: Output,
			args: ["onFocus"]
		}],
		onBlur: [{
			type: Output,
			args: ["onBlur"]
		}],
		contentTemplate: [{
			type: ContentChild,
			args: ["content", {
				descendants: false,
				isSignal: true
			}]
		}],
		loadingIconTemplate: [{
			type: ContentChild,
			args: ["loadingicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		iconTemplate: [{
			type: ContentChild,
			args: ["icon", {
				descendants: false,
				isSignal: true
			}]
		}]
	});
})();
var BUTTON_ICON_INSTANCE = new InjectionToken("BUTTON_ICON_INSTANCE");
var ButtonIcon = class ButtonIcon extends BaseComponent {
	componentName = "ButtonIcon";
	pButtonIconPT = input(...ngDevMode ? [void 0, { debugName: "pButtonIconPT" }] : /* istanbul ignore next */ []);
	pButtonUnstyled = input(...ngDevMode ? [void 0, { debugName: "pButtonUnstyled" }] : /* istanbul ignore next */ []);
	$pcButtonIcon = inject(BUTTON_ICON_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	constructor() {
		super();
		effect(() => {
			const pt = this.pButtonIconPT();
			if (pt) this.directivePT.set(pt);
		});
		effect(() => {
			if (this.pButtonUnstyled()) this.directiveUnstyled.set(this.pButtonUnstyled());
		});
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = function ButtonIcon_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ButtonIcon)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: ButtonIcon,
		selectors: [[
			"",
			"pButtonIcon",
			""
		]],
		hostVars: 2,
		hostBindings: function ButtonIcon_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("p-button-icon", !ctx.$unstyled() && true);
		},
		inputs: {
			pButtonIconPT: [1, "pButtonIconPT"],
			pButtonUnstyled: [1, "pButtonUnstyled"]
		},
		features: [
			ɵɵProvidersFeature([
				ButtonStyle,
				{
					provide: BUTTON_ICON_INSTANCE,
					useExisting: ButtonIcon
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonIcon
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonIcon, [{
		type: Directive,
		args: [{
			selector: "[pButtonIcon]",
			providers: [
				ButtonStyle,
				{
					provide: BUTTON_ICON_INSTANCE,
					useExisting: ButtonIcon
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonIcon
				}
			],
			standalone: true,
			host: { "[class.p-button-icon]": "!$unstyled() && true" },
			hostDirectives: [Bind]
		}]
	}], () => [], {
		pButtonIconPT: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonIconPT",
				required: false
			}]
		}],
		pButtonUnstyled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonUnstyled",
				required: false
			}]
		}]
	});
})();
var BUTTON_LABEL_INSTANCE = new InjectionToken("BUTTON_LABEL_INSTANCE");
var ButtonLabel = class ButtonLabel extends BaseComponent {
	componentName = "ButtonLabel";
	pButtonLabelPT = input(...ngDevMode ? [void 0, { debugName: "pButtonLabelPT" }] : /* istanbul ignore next */ []);
	pButtonLabelUnstyled = input(...ngDevMode ? [void 0, { debugName: "pButtonLabelUnstyled" }] : /* istanbul ignore next */ []);
	$pcButtonLabel = inject(BUTTON_LABEL_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	constructor() {
		super();
		effect(() => {
			const pt = this.pButtonLabelPT();
			if (pt) this.directivePT.set(pt);
		});
		effect(() => {
			if (this.pButtonLabelUnstyled()) this.directiveUnstyled.set(this.pButtonLabelUnstyled());
		});
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = function ButtonLabel_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ButtonLabel)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: ButtonLabel,
		selectors: [[
			"",
			"pButtonLabel",
			""
		]],
		hostVars: 2,
		hostBindings: function ButtonLabel_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("p-button-label", !ctx.$unstyled() && true);
		},
		inputs: {
			pButtonLabelPT: [1, "pButtonLabelPT"],
			pButtonLabelUnstyled: [1, "pButtonLabelUnstyled"]
		},
		features: [
			ɵɵProvidersFeature([
				ButtonStyle,
				{
					provide: BUTTON_LABEL_INSTANCE,
					useExisting: ButtonLabel
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonLabel
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonLabel, [{
		type: Directive,
		args: [{
			selector: "[pButtonLabel]",
			providers: [
				ButtonStyle,
				{
					provide: BUTTON_LABEL_INSTANCE,
					useExisting: ButtonLabel
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonLabel
				}
			],
			standalone: true,
			host: { "[class.p-button-label]": "!$unstyled() && true" },
			hostDirectives: [Bind]
		}]
	}], () => [], {
		pButtonLabelPT: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonLabelPT",
				required: false
			}]
		}],
		pButtonLabelUnstyled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonLabelUnstyled",
				required: false
			}]
		}]
	});
})();
var BUTTON_DIRECTIVE_INSTANCE = new InjectionToken("BUTTON_DIRECTIVE_INSTANCE");
var ButtonDirective = class ButtonDirective extends BaseComponent {
	componentName = "Button";
	pButton = input(void 0, ...ngDevMode ? [{ debugName: "pButton" }] : /* istanbul ignore next */ []);
	pButtonPT = input(...ngDevMode ? [void 0, { debugName: "pButtonPT" }] : /* istanbul ignore next */ []);
	pButtonUnstyled = input(...ngDevMode ? [void 0, { debugName: "pButtonUnstyled" }] : /* istanbul ignore next */ []);
	hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : /* istanbul ignore next */ []);
	text = input(false, {
		...ngDevMode ? { debugName: "text" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	plain = input(false, {
		...ngDevMode ? { debugName: "plain" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	raised = input(false, {
		...ngDevMode ? { debugName: "raised" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	size = input(...ngDevMode ? [void 0, { debugName: "size" }] : /* istanbul ignore next */ []);
	outlined = input(false, {
		...ngDevMode ? { debugName: "outlined" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	link = input(false, {
		...ngDevMode ? { debugName: "link" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	rounded = input(false, {
		...ngDevMode ? { debugName: "rounded" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	fluid = input(void 0, {
		...ngDevMode ? { debugName: "fluid" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : /* istanbul ignore next */ []);
	iconOnly = input(false, {
		...ngDevMode ? { debugName: "iconOnly" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	loading = input(false, {
		...ngDevMode ? { debugName: "loading" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : /* istanbul ignore next */ []);
	$pcButtonDirective = inject(BUTTON_DIRECTIVE_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	pcFluid = inject(Fluid, {
		optional: true,
		host: true,
		skipSelf: true
	});
	_componentStyle = inject(ButtonStyle);
	iconSignal = contentChild(ButtonIcon, {
		...ngDevMode ? { debugName: "iconSignal" } : /* istanbul ignore next */ {},
		descendants: false
	});
	labelSignal = contentChild(ButtonLabel, {
		...ngDevMode ? { debugName: "labelSignal" } : /* istanbul ignore next */ {},
		descendants: false
	});
	isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()), ...ngDevMode ? [{ debugName: "isIconOnly" }] : /* istanbul ignore next */ []);
	styleClass = computed(() => {
		if (this.$unstyled()) return "";
		const v = this.pButton();
		const o = typeof v === "object" && v !== null ? v : {};
		const stringSeverity = typeof v === "string" && v !== "" ? v : void 0;
		const severity = o.severity ?? stringSeverity ?? this.severity();
		const size = o.size ?? this.size();
		const variant = o.variant ?? this.variant();
		const base = this.cn("p-button", "p-component", {
			"p-button-icon-only": this.iconOnly() || o.iconOnly || this.isIconOnly(),
			"p-button-loading": this.loading(),
			"p-disabled": this.loading(),
			"p-button-text": this.text() || variant === "text" || o.text,
			"p-button-outlined": this.outlined() || variant === "outlined" || o.outlined,
			"p-button-link": this.link() || variant === "link" || o.link,
			"p-button-plain": this.plain() || o.plain,
			"p-button-raised": this.raised() || o.raised,
			"p-button-rounded": this.rounded() || o.rounded,
			"p-button-sm": size === "small",
			"p-button-lg": size === "large",
			"p-button-fluid": this.fluid() ?? o.fluid ?? !!this.pcFluid,
			[`p-button-${severity}`]: !!severity
		});
		return o.styleClass ? `${base} ${o.styleClass}` : base;
	}, ...ngDevMode ? [{ debugName: "styleClass" }] : /* istanbul ignore next */ []);
	hostStyle = computed(() => {
		const v = this.pButton();
		return (typeof v === "object" && v !== null ? v : {}).style ?? null;
	}, ...ngDevMode ? [{ debugName: "hostStyle" }] : /* istanbul ignore next */ []);
	constructor() {
		super();
		effect(() => {
			const pt = this.pButtonPT();
			if (pt) this.directivePT.set(pt);
		});
		effect(() => {
			const unstyled = this.pButtonUnstyled();
			if (unstyled !== void 0) this.directiveUnstyled.set(unstyled);
		});
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptm("root"));
	}
	static ɵfac = function ButtonDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ButtonDirective)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: ButtonDirective,
		selectors: [[
			"",
			"pButton",
			""
		]],
		contentQueries: function ButtonDirective_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.iconSignal, ButtonIcon, 4)(dirIndex, ctx.labelSignal, ButtonLabel, 4);
			if (rf & 2) ɵɵqueryAdvance(2);
		},
		hostVars: 4,
		hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵstyleMap(ctx.hostStyle());
				ɵɵclassMap(ctx.styleClass());
			}
		},
		inputs: {
			pButton: [1, "pButton"],
			pButtonPT: [1, "pButtonPT"],
			pButtonUnstyled: [1, "pButtonUnstyled"],
			hostName: [1, "hostName"],
			text: [1, "text"],
			plain: [1, "plain"],
			raised: [1, "raised"],
			size: [1, "size"],
			outlined: [1, "outlined"],
			link: [1, "link"],
			rounded: [1, "rounded"],
			fluid: [1, "fluid"],
			variant: [1, "variant"],
			iconOnly: [1, "iconOnly"],
			loading: [1, "loading"],
			severity: [1, "severity"]
		},
		features: [
			ɵɵProvidersFeature([
				ButtonStyle,
				{
					provide: BUTTON_DIRECTIVE_INSTANCE,
					useExisting: ButtonDirective
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonDirective
				}
			]),
			ɵɵHostDirectivesFeature([Bind, Ripple]),
			ɵɵInheritDefinitionFeature
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
		type: Directive,
		args: [{
			selector: "[pButton]",
			standalone: true,
			providers: [
				ButtonStyle,
				{
					provide: BUTTON_DIRECTIVE_INSTANCE,
					useExisting: ButtonDirective
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonDirective
				}
			],
			host: {
				"[class]": "styleClass()",
				"[style]": "hostStyle()"
			},
			hostDirectives: [Bind, Ripple]
		}]
	}], () => [], {
		pButton: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButton",
				required: false
			}]
		}],
		pButtonPT: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonPT",
				required: false
			}]
		}],
		pButtonUnstyled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonUnstyled",
				required: false
			}]
		}],
		hostName: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "hostName",
				required: false
			}]
		}],
		text: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "text",
				required: false
			}]
		}],
		plain: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "plain",
				required: false
			}]
		}],
		raised: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "raised",
				required: false
			}]
		}],
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}],
		outlined: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "outlined",
				required: false
			}]
		}],
		link: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "link",
				required: false
			}]
		}],
		rounded: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "rounded",
				required: false
			}]
		}],
		fluid: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "fluid",
				required: false
			}]
		}],
		variant: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "variant",
				required: false
			}]
		}],
		iconOnly: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "iconOnly",
				required: false
			}]
		}],
		loading: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "loading",
				required: false
			}]
		}],
		severity: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "severity",
				required: false
			}]
		}],
		iconSignal: [{
			type: ContentChild,
			args: [forwardRef(() => ButtonIcon), {
				descendants: false,
				isSignal: true
			}]
		}],
		labelSignal: [{
			type: ContentChild,
			args: [forwardRef(() => ButtonLabel), {
				descendants: false,
				isSignal: true
			}]
		}]
	});
})();
var ButtonModule = class ButtonModule {
	static ɵfac = function ButtonModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ButtonModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: ButtonModule,
		imports: [
			ButtonDirective,
			Button,
			ButtonLabel,
			ButtonIcon
		],
		exports: [
			ButtonDirective,
			Button,
			ButtonLabel,
			ButtonIcon
		]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [Button] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
		type: NgModule,
		args: [{
			imports: [
				ButtonDirective,
				Button,
				ButtonLabel,
				ButtonIcon
			],
			exports: [
				ButtonDirective,
				Button,
				ButtonLabel,
				ButtonIcon
			]
		}]
	}], null, null);
})();
//#endregion
export { BUTTON_ICON_INSTANCE, BUTTON_INSTANCE, BUTTON_LABEL_INSTANCE, Button, ButtonClasses, ButtonDirective, ButtonIcon, ButtonLabel, ButtonModule, ButtonStyle };
