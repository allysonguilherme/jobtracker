//#region node_modules/@primeuix/utils/dist/object/index.mjs
var ce$2 = Object.defineProperty;
var $$2 = Object.getOwnPropertySymbols;
var pe$1 = Object.prototype.hasOwnProperty;
var ge$2 = Object.prototype.propertyIsEnumerable;
var q = (e, t, n) => t in e ? ce$2(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n;
var E$1 = (e, t) => {
	for (var n in t || (t = {})) pe$1.call(t, n) && q(e, n, t[n]);
	if ($$2) for (var n of $$2(t)) ge$2.call(t, n) && q(e, n, t[n]);
	return e;
};
function p$1(e) {
	return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function O$1(e, t, n) {
	if (e === t || e !== e && t !== t) return !0;
	if (!e || !t || typeof e != "object" || typeof t != "object") return !1;
	n || (n = /* @__PURE__ */ new WeakMap());
	let r = n.get(e);
	if (r != null && r.has(t)) return !0;
	r || n.set(e, r = /* @__PURE__ */ new WeakSet()), r.add(t);
	let o = Array.isArray(e), u = Array.isArray(t), i = !0;
	if (o && u) {
		if (e.length !== t.length) i = !1;
		else for (let f = e.length; f-- !== 0;) if (!O$1(e[f], t[f], n)) {
			i = !1;
			break;
		}
	} else if (o !== u) i = !1;
	else {
		let f = e instanceof Date, a = t instanceof Date;
		if (f !== a) i = !1;
		else if (f && a) i = e.getTime() === t.getTime();
		else {
			let y = e instanceof RegExp, k = t instanceof RegExp;
			if (y !== k) i = !1;
			else if (y && k) i = e.toString() === t.toString();
			else if (e instanceof Map || t instanceof Map) {
				if (!(e instanceof Map && t instanceof Map) || e.size !== t.size) i = !1;
				else for (let [g, w] of e) if (!t.has(g) || !O$1(w, t.get(g), n)) {
					i = !1;
					break;
				}
			} else if (e instanceof Set || t instanceof Set) {
				if (!(e instanceof Set && t instanceof Set) || e.size !== t.size) i = !1;
				else for (let g of e) if (!t.has(g)) {
					i = !1;
					break;
				}
			} else {
				let g = Object.keys(e), w = g.length;
				if (w !== Object.keys(t).length) i = !1;
				else {
					for (let h = w; h-- !== 0;) if (!Object.prototype.hasOwnProperty.call(t, g[h])) {
						i = !1;
						break;
					}
					if (i) for (let h = w; h-- !== 0;) {
						let M = g[h];
						if (!O$1(e[M], t[M], n)) {
							i = !1;
							break;
						}
					}
				}
			}
		}
	}
	return i || r.delete(t), i;
}
function R$2(e, t) {
	return O$1(e, t);
}
function m(e) {
	return typeof e == "function" && "call" in e && "apply" in e;
}
function l(e) {
	return !p$1(e);
}
function d(e, t) {
	if (!e || !t) return null;
	let n = e;
	try {
		let r = n[t];
		if (l(r)) return r;
	} catch (r) {}
	if (Object.keys(n).length) {
		if (m(t)) return t(e);
		if (t.indexOf(".") === -1) return n[t];
		{
			let r = t.split("."), o = e;
			for (let u = 0, i = r.length; u < i; ++u) {
				if (o == null) return null;
				o = o[r[u]];
			}
			return o;
		}
	}
	return null;
}
function b(e, t, n) {
	return n ? d(e, n) === d(t, n) : R$2(e, t);
}
function s(e, t = !0) {
	return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
var me$1 = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
function S$2(e, t, n, r = /* @__PURE__ */ new WeakSet()) {
	let o = E$1({}, e);
	Object.keys(o).length === 0 && !n.has(t) && n.set(t, o);
	let u = !r.has(t);
	return u && r.add(t), Object.keys(t).forEach((i) => {
		var y, k;
		if (me$1.has(i)) return;
		let f = i, a = t[f];
		s(a) && f in e && s(e[f]) ? o[f] = r.has(a) ? (y = n.get(a)) != null ? y : S$2({}, a, n, r) : S$2(e[f], a, n, r) : s(a) ? o[f] = (k = n.get(a)) != null ? k : S$2({}, a, n, r) : o[f] = a;
	}), u && r.delete(t), o;
}
function F(...e) {
	return e.reduce((t, n) => S$2(t, n || {}, /* @__PURE__ */ new WeakMap()), {});
}
function x$1(e, ...t) {
	return m(e) ? e(...t) : e;
}
function c(e, t = !0) {
	return typeof e == "string" && (t || e !== "");
}
function C$1(e) {
	return c(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function K$1(e, t = "", n = {}) {
	let r = C$1(t).split("."), o = r.shift();
	if (o) {
		if (s(e) || Array.isArray(e)) return K$1(x$1(e[Object.keys(e).find((i) => C$1(i) === o) || ""], n), r.join("."), n);
		return;
	}
	return x$1(e, n);
}
function A$2(e, t = !0) {
	return Array.isArray(e) && (t || e.length !== 0);
}
function Z(e) {
	return l(e) && !isNaN(e);
}
function H(e, t) {
	if (t) {
		t.lastIndex = 0;
		let n = t.test(e);
		return t.lastIndex = 0, n;
	}
	return !1;
}
function Q$1(...e) {
	return F(...e);
}
function de$1(e, t) {
	let n = 0;
	for (; t - 1 - n >= 0 && e[t - 1 - n] === "\\";) n++;
	return n % 2 === 1;
}
function X$2(e) {
	return e.replace(/[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function B(e) {
	if (!e) return e;
	let t = "", n = "", r = 0;
	for (; r < e.length;) {
		let o = e[r];
		if (o === "/" && e[r + 1] === "*") {
			let u = e.indexOf("*/", r + 2);
			r = u === -1 ? e.length : u + 2;
		} else if (o === "\"" || o === "'") {
			t += X$2(n), n = "";
			let u = r + 1;
			for (; u < e.length && (e[u] !== o || de$1(e, u));) u++;
			t += e.slice(r, Math.min(u + 1, e.length)), r = u + 1;
		} else n += o, r++;
	}
	return (t + X$2(n)).trim();
}
function N$1(e = {}, t = "") {
	return Object.entries(e).reduce((n, [r, o]) => {
		let u = t ? `${t}.${r}` : r;
		return s(o) ? n = n.concat(N$1(o, u)) : n.push(u), n;
	}, []);
}
var xe$2 = /[\xC0-\xFF\u0100-\u017E]/;
var j$1 = {
	A: /[\xC0-\xC5\u0100\u0102\u0104]/g,
	AE: /[\xC6]/g,
	C: /[\xC7\u0106\u0108\u010A\u010C]/g,
	D: /[\xD0\u010E\u0110]/g,
	E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,
	G: /[\u011C\u011E\u0120\u0122]/g,
	H: /[\u0124\u0126]/g,
	I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,
	IJ: /[\u0132]/g,
	J: /[\u0134]/g,
	K: /[\u0136]/g,
	L: /[\u0139\u013B\u013D\u013F\u0141]/g,
	N: /[\xD1\u0143\u0145\u0147\u014A]/g,
	O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,
	OE: /[\u0152]/g,
	R: /[\u0154\u0156\u0158]/g,
	S: /[\u015A\u015C\u015E\u0160]/g,
	T: /[\u0162\u0164\u0166]/g,
	U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,
	W: /[\u0174]/g,
	Y: /[\xDD\u0176\u0178]/g,
	Z: /[\u0179\u017B\u017D]/g,
	a: /[\xE0-\xE5\u0101\u0103\u0105]/g,
	ae: /[\xE6]/g,
	c: /[\xE7\u0107\u0109\u010B\u010D]/g,
	d: /[\u010F\u0111]/g,
	e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,
	g: /[\u011D\u011F\u0121\u0123]/g,
	i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,
	ij: /[\u0133]/g,
	j: /[\u0135]/g,
	k: /[\u0137\u0138]/g,
	l: /[\u013A\u013C\u013E\u0140\u0142]/g,
	n: /[\xF1\u0144\u0146\u0148\u014B]/g,
	p: /[\xFE]/g,
	o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,
	oe: /[\u0153]/g,
	r: /[\u0155\u0157\u0159]/g,
	s: /[\u015B\u015D\u015F\u0161]/g,
	t: /[\u0163\u0165\u0167]/g,
	u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,
	w: /[\u0175]/g,
	y: /[\xFD\xFF\u0177]/g,
	z: /[\u017A\u017C\u017E]/g
};
function ee(e) {
	if (e && xe$2.test(e)) for (let t in j$1) e = e.replace(j$1[t], t);
	return e;
}
function fe(e) {
	return c(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
function ae(e) {
	return c(e) ? e.replace(/[A-Z]/g, (t, n) => n === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
//#endregion
//#region node_modules/@primeuix/utils/dist/eventbus/index.mjs
function v() {
	let s = /* @__PURE__ */ new Map(), r = {
		on(n, t) {
			let e = s.get(n);
			return e ? e.push(t) : e = [t], s.set(n, e), r;
		},
		off(n, t) {
			let e = s.get(n);
			if (e) {
				let o = e.indexOf(t);
				o !== -1 && e.splice(o, 1);
			}
			return r;
		},
		emit(n, ...t) {
			let e = s.get(n);
			e && e.forEach((o) => {
				o(t[0]);
			});
		},
		clear() {
			s.clear();
		}
	};
	return r;
}
//#endregion
//#region node_modules/@primeuix/utils/dist/dom/index.mjs
function I(t, e) {
	return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : !1;
}
function R$1(t, e) {
	if (t && e) {
		let o = (n) => {
			I(t, n) || (t.classList ? t.classList.add(n) : t.className += " " + n);
		};
		[e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
	}
}
function W(t, e) {
	if (t && e) {
		let o = (n) => {
			t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
		};
		[e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
	}
}
function w(t) {
	if (typeof document == "undefined") return null;
	for (let e of Array.from(document.styleSheets || [])) try {
		for (let o of Array.from(e.cssRules || [])) {
			let n = o.style;
			if (n) {
				for (let r of Array.from(n)) if (t.lastIndex = 0, t.test(r)) return {
					name: r,
					value: n.getPropertyValue(r).trim()
				};
			}
		}
	} catch (o) {
		continue;
	}
	return null;
}
function E(t) {
	return t ? Math.abs(t.scrollLeft) : 0;
}
var ge$1 = /expression\s*\(|url\s*\(\s*['"]?\s*(?:javascript|vbscript):|@import\s+['"]?\s*(?:javascript|vbscript|data):/i;
var xt$1 = /url\s*\(\s*['"]?\s*(data:[^'")]*)/gi;
var he$1 = /* @__PURE__ */ new Set([
	"href",
	"src",
	"xlink:href",
	"action",
	"formaction"
]);
var ye$1 = /* @__PURE__ */ new Set([
	"http",
	"https",
	"mailto",
	"tel",
	"sms",
	"ftp",
	"ftps",
	"blob"
]);
var wt = /^data:image\/(?:png|gif|jpeg|jpg|webp|bmp|avif);base64,[a-z0-9+/=\s]+$/i;
function _(t) {
	if (typeof t != "string") return !1;
	if (ge$1.test(t)) return !0;
	xt$1.lastIndex = 0;
	let e;
	for (; e = xt$1.exec(t);) if (!wt.test(e[1].trim())) return !0;
	return !1;
}
function be(t) {
	let e = "";
	for (let o of t) {
		let n = o.charCodeAt(0);
		n <= 31 || n === 127 || /\s/.test(o) || (e += o);
	}
	return e;
}
function xe$1(t, e) {
	var i, s;
	let o = be(t), n = e.toLowerCase();
	if (o.startsWith("#") || o.startsWith("/") || o.startsWith("./") || o.startsWith("../") || o.startsWith("?")) return !0;
	let r = (s = (i = o.match(/^([a-z][a-z0-9+.-]*):/i)) == null ? void 0 : i[1]) == null ? void 0 : s.toLowerCase();
	return r ? r === "data" ? (n === "src" || n === "xlink:href") && wt.test(t.trim()) : ye$1.has(r) : !0;
}
function P$1(t, e) {
	return typeof e == "string" && he$1.has(t.toLowerCase()) && !xe$1(e, t);
}
function O(t, e) {
	return t.toLowerCase() === "srcdoc" && typeof e == "string" && /<\s*script\b|on\w+\s*=|javascript:|data:text\/html/i.test(e);
}
function Ee(t) {
	return t.startsWith("--") ? t : t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function X$1(t, e, o = {}) {
	o.clear && (t.style.cssText = ""), e.forEach((n) => {
		let r = n.indexOf(":");
		if (r < 0) return;
		let i = n.slice(0, r).trim(), s = n.slice(r + 1).trim();
		if (!i || _(s)) return;
		let l = "";
		/!\s*important$/i.test(s) && (s = s.replace(/!\s*important$/i, "").trim(), l = "important"), t.style.setProperty(i, s, l);
	});
}
function Se$1(t, e) {
	let o = 0;
	for (; e - 1 - o >= 0 && t[e - 1 - o] === "\\";) o++;
	return o % 2 === 1;
}
function ve$1(t) {
	let e = [], o = 0, n = "", r = 0;
	for (let i = 0; i < t.length; i++) {
		let s = t[i];
		n ? s === n && !Se$1(t, i) && (n = "") : s === "'" || s === "\"" ? n = s : s === "(" ? r++ : s === ")" ? r = Math.max(0, r - 1) : s === ";" && r === 0 && (e.push(t.slice(o, i)), o = i + 1);
	}
	return e.push(t.slice(o)), e;
}
function S$1(t, e, o = {}) {
	if (typeof e == "string") {
		X$1(t, ve$1(e), o);
		return;
	}
	o.clear && (t.style.cssText = ""), Object.entries(e).forEach(([n, r]) => {
		if (r == null || _(r)) return;
		let i = String(r), s = "";
		/!\s*important$/i.test(i) && (i = i.replace(/!\s*important$/i, "").trim(), s = "important"), t.style.setProperty(Ee(n), i, s);
	});
}
function L$1(t, e) {
	if (t instanceof HTMLElement) {
		let o = t.offsetWidth;
		if (e) {
			let n = getComputedStyle(t);
			o += parseFloat(n.marginLeft) + parseFloat(n.marginRight);
		}
		return o;
	}
	return 0;
}
function p(t) {
	return typeof Element != "undefined" ? t instanceof Element : t !== null && typeof t == "object" && t.nodeType === 1 && typeof t.nodeName == "string";
}
function A$1(t, e, o) {
	if (typeof o != "function" && !(typeof o == "object" && o !== null && "handleEvent" in o)) return;
	let n = t, r = n._pListeners || (n._pListeners = []), i = !1;
	for (let s = r.length - 1; s >= 0; s--) r[s][0] === e && (r[s][1] === o ? i = !0 : (t.removeEventListener(e, r[s][1]), r.splice(s, 1)));
	i || (t.addEventListener(e, o), r.push([e, o]));
}
function $$1(t, e = {}) {
	if (p(t)) {
		let o = t == null ? void 0 : t.$attrs, n = (s, l) => {
			let d = o != null && o[s] ? [o[s]] : [];
			return [l].flat().reduce((f, a) => {
				if (a != null) {
					let u = typeof a;
					if (u === "string" || u === "number") f.push(a);
					else if (u === "object") {
						let c = Array.isArray(a) ? n(s, a) : Object.entries(a).map(([m, v]) => s === "style" && (v || v === 0) ? `${m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${v}` : v ? m : void 0);
						f = c.length ? f.concat(c.filter((m) => !!m)) : f;
					}
				}
				return f;
			}, d);
		}, r = (s) => {
			X$1(t, n("style", s));
		}, i = t;
		Object.entries(e).forEach(([s, l]) => {
			if (l != null) {
				let d = s.match(/^on(.+)/);
				if (d) A$1(t, d[1].toLowerCase(), l);
				else if (s === "p-bind" || s === "pBind") $$1(t, l);
				else if (s === "style") r(l), i.$attrs = i.$attrs || {}, i.$attrs[s] = t.style.cssText;
				else {
					if (P$1(s, l) || O(s, l)) return;
					l = s === "class" ? [...new Set(n("class", l))].join(" ").trim() : l, i.$attrs = i.$attrs || {}, i.$attrs[s] = l, t.setAttribute(s, l);
				}
			}
		});
	}
}
function Q(t) {
	return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function J(t, e = {}) {
	return t ? `<style${Object.entries(e).reduce((o, [n, r]) => o + ` ${n}="${Q(r)}"`, "")}>${t}</style>` : "";
}
function Ft(t) {
	if (t) {
		let e = t.offsetHeight, o = getComputedStyle(t);
		return e -= parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) + parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), e;
	}
	return 0;
}
function st(t) {
	if (t) {
		let e = t.getBoundingClientRect();
		return {
			top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
			left: e.left + (window.pageXOffset || E(document.documentElement) || E(document.body) || 0)
		};
	}
	return {
		top: "auto",
		left: "auto"
	};
}
function k(t, e) {
	if (t) {
		let o = t.offsetHeight;
		if (e) {
			let n = getComputedStyle(t);
			o += parseFloat(n.marginTop) + parseFloat(n.marginBottom);
		}
		return o;
	}
	return 0;
}
function zt$1(t) {
	if (t) {
		let e = t.offsetWidth, o = getComputedStyle(t);
		return e -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight) + parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), e;
	}
	return 0;
}
function le(t) {
	var e;
	t && ("remove" in Element.prototype ? t.remove() : (e = t.parentNode) == null || e.removeChild(t));
}
function ce$1(t, e = "", o) {
	if (p(t) && o !== null && o !== void 0) {
		let n = e.toLowerCase();
		if (/^on[a-z]/.test(n)) {
			A$1(t, n.slice(2), o);
			return;
		}
		if (n === "style") {
			typeof o == "string" ? S$1(t, o, { clear: !0 }) : typeof o == "object" && S$1(t, o);
			return;
		}
		if (P$1(e, o) || O(e, o)) return;
		t.setAttribute(e, o);
	}
}
//#endregion
//#region node_modules/@primeuix/styled/dist/index.mjs
var nt = Object.defineProperty;
var ot = Object.defineProperties;
var it = Object.getOwnPropertyDescriptors;
var te = Object.getOwnPropertySymbols;
var Se = Object.prototype.hasOwnProperty;
var Oe = Object.prototype.propertyIsEnumerable;
var ye = (e, t, s) => t in e ? nt(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: s
}) : e[t] = s;
var y = (e, t) => {
	for (var s in t || (t = {})) Se.call(t, s) && ye(e, s, t[s]);
	if (te) for (var s of te(t)) Oe.call(t, s) && ye(e, s, t[s]);
	return e;
};
var C = (e, t) => ot(e, it(t));
var V = (e, t) => {
	var s = {};
	for (var r in e) Se.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
	if (e != null && te) for (var r of te(e)) t.indexOf(r) < 0 && Oe.call(e, r) && (s[r] = e[r]);
	return s;
};
function xe(e, ...t) {
	return F(e, ...t);
}
var R = v();
var P = /{([^}]*)}/g;
var re = /(\d+\s+[+*/-]\s+\d+)/g;
var ne = /var\([^)]+\)/g;
function K(e) {
	return c(e) ? e.replace(/[A-Z]/g, (t, s) => s === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function zt(e, t) {
	A$2(e) ? e.push(...t || []) : s(e) && Object.assign(e, t);
}
function Pe(e) {
	return s(e) && Object.prototype.hasOwnProperty.call(e, "$value") && Object.prototype.hasOwnProperty.call(e, "$type") ? e.$value : e;
}
function Gt(e, t = "") {
	return [
		"opacity",
		"z-index",
		"line-height",
		"font-weight",
		"flex",
		"flex-grow",
		"flex-shrink",
		"order"
	].some((r) => t.endsWith(r)) ? e : `${e}`.trim().split(" ").map((i) => Z(i) ? `${i}px` : i).join(" ");
}
function pt(e) {
	return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function oe(e = "", t = "") {
	return pt(`${c(e, !1) && c(t, !1) ? `${e}-` : e}${t}`);
}
function ce(e = "", t = "") {
	return `--${oe(e, t)}`;
}
function gt(e = "") {
	return ((e.match(/{/g) || []).length + (e.match(/}/g) || []).length) % 2 !== 0;
}
function L(e, t = "", s = "", r = [], o) {
	if (c(e)) {
		let i = e.trim();
		if (gt(i)) return;
		if (H(i, P)) {
			let n = i.replaceAll(P, (u) => {
				return `var(${ce(s, fe(u.replace(/{|}/g, "").split(".").filter((l) => !r.some((c) => H(l, c))).join("-")))}${l(o) ? `, ${o}` : ""})`;
			});
			return H(n.replace(ne, "0"), re) ? `calc(${n})` : n;
		}
		return i;
	} else if (Z(e)) return e;
}
function It(e = {}, t) {
	if (c(t)) {
		let s = t.trim();
		return H(s, P) ? s.replaceAll(P, (r) => K$1(e, r.replace(/{|}/g, ""))) : s;
	} else if (Z(t)) return t;
}
function $e(e, t, s) {
	c(t, !1) && e.push(`${t}:${s};`);
}
function j(e, t) {
	return e ? `${e}{${t}}` : "";
}
function ue(e, t) {
	if (e.indexOf("dt(") === -1) return e;
	function s(n, u) {
		let m = [], a = 0, l = "", c = null, p = 0;
		for (; a <= n.length;) {
			let g = n[a];
			if ((g === "\"" || g === "'" || g === "`") && n[a - 1] !== "\\" && (c = c === g ? null : g), !c && (g === "(" && p++, g === ")" && p--, (g === "," || a === n.length) && p === 0)) {
				let f = l.trim();
				f.startsWith("dt(") ? m.push(ue(f, u)) : m.push(r(f)), l = "", a++;
				continue;
			}
			g !== void 0 && (l += g), a++;
		}
		return m;
	}
	function r(n) {
		let u = n[0];
		if ((u === "\"" || u === "'" || u === "`") && n[n.length - 1] === u) return n.slice(1, -1);
		let m = Number(n);
		return isNaN(m) ? n : m;
	}
	let o = [], i = [];
	for (let n = 0; n < e.length; n++) if (e[n] === "d" && e.slice(n, n + 3) === "dt(") i.push(n), n += 2;
	else if (e[n] === ")" && i.length > 0) {
		let u = i.pop();
		i.length === 0 && o.push([u, n]);
	}
	if (!o.length) return e;
	for (let n = o.length - 1; n >= 0; n--) {
		let [u, m] = o[n], c = t(...s(e.slice(u + 3, m), t));
		e = e.slice(0, u) + c + e.slice(m + 1);
	}
	return e;
}
function ve(e) {
	return e.length === 4 ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
}
function Ce(e) {
	let t = parseInt(e.substring(1), 16);
	return {
		r: t >> 16 & 255,
		g: t >> 8 & 255,
		b: t & 255
	};
}
function ft(e, t, s) {
	return `#${e.toString(16).padStart(2, "0")}${t.toString(16).padStart(2, "0")}${s.toString(16).padStart(2, "0")}`;
}
var Ve = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
var X = (e, t, s) => {
	if (!Ve.test(e) || !Ve.test(t)) return t;
	e = ve(e), t = ve(t);
	let i = (s / 100 * 2 - 1 + 1) / 2, n = 1 - i, u = Ce(e), m = Ce(t);
	return ft(Math.round(u.r * i + m.r * n), Math.round(u.g * i + m.g * n), Math.round(u.b * i + m.b * n));
};
var de = (e, t) => X("#000000", e, t);
var me = (e, t) => X("#ffffff", e, t);
var Re = [
	50,
	100,
	200,
	300,
	400,
	500,
	600,
	700,
	800,
	900,
	950
];
var Tt = (e) => {
	if (H(e, P)) {
		let t = e.replace(/{|}/g, "");
		return Re.reduce((s, r) => (s[r] = `{${t}.${r}}`, s), {});
	}
	return Re.reduce((t, s, r) => (t[s] = r <= 5 ? me(e, (5 - r) * 19) : de(e, (r - 5) * 15), t), {});
};
var St = (e, t) => {
	let s = e.split("."), r = "";
	for (let o = 0; o < s.length; o++) {
		let i = K(s[o]);
		t.lastIndex = 0, !t.test(i) && (r = r ? `${r}.${i}` : i);
	}
	return r;
};
var he = (e, t, s, r, o) => {
	if (typeof e != "string") return e != null ? e : S.getTokenValue(t);
	if (P.lastIndex = 0, !P.test(e)) return e;
	let i = t.slice(0, t.indexOf("."));
	return L(e.replace(P, (u) => {
		let m = u.slice(1, -1), a = m.indexOf(".");
		if ((a === -1 ? m : m.slice(0, a)) !== i) return u;
		let l = S.getTokenValue(m);
		return l == null ? u : `${l}`;
	}), void 0, s, [r], o);
};
var Ot = (e, t, s, r) => {
	var l, c, p, g;
	let o = St(e, s), i = S.tokens, n = i.__strictCache;
	n || (n = /* @__PURE__ */ new Map(), Object.defineProperty(i, "__strictCache", {
		value: n,
		enumerable: !1,
		configurable: !0
	}));
	let u = r == null || typeof r != "object", m = u && r != null ? `${t}|${o}|${r}` : `${t}|${o}`, a = u ? n.get(m) : void 0;
	if (a === void 0 && (!u || !n.has(m))) {
		let f = (l = i[o]) == null ? void 0 : l.paths, h = f == null ? void 0 : f.find((k) => k.scheme === "none"), d = (c = f == null ? void 0 : f.find((k) => k.scheme === "light")) != null ? c : h, T = (p = f == null ? void 0 : f.find((k) => k.scheme === "dark")) != null ? p : h;
		if (d && T && d !== T) {
			let k = he(d.value, o, t, s, r), b = he(T.value, o, t, s, r);
			a = k === b ? k : `light-dark(${k},${b})`;
		} else a = he((g = d != null ? d : T) == null ? void 0 : g.value, o, t, s, r);
		u && n.set(m, a);
	}
	return S.hasScopedTokenPath(o) ? L(`{${o}}`, void 0, t, [s], a) : a;
};
var us = (e) => {
	var i, n, u;
	let t = S.getTheme(), s = `${(i = pe(t, e, void 0, "variable")) != null ? i : ""}`;
	return {
		name: (u = (n = s.match(/--[\w-]+/g)) == null ? void 0 : n[0]) != null ? u : "",
		variable: s,
		value: pe(t, e, void 0, "value")
	};
};
var N = (e, t, s) => pe(S.getTheme(), e, t, s);
var pe = (e = {}, t, s, r) => {
	var m, a, l, c, p, g, f, h, d, T;
	if (!t) return "";
	let o = (m = S.defaults) == null ? void 0 : m.variable, i = (p = (a = e == null ? void 0 : e.options) == null ? void 0 : a.prefix) != null ? p : (c = (l = S.defaults) == null ? void 0 : l.options) == null ? void 0 : c.prefix, n = (T = (d = (g = e == null ? void 0 : e.options) == null ? void 0 : g.cssVariables) != null ? d : (h = (f = S.defaults) == null ? void 0 : f.options) == null ? void 0 : h.cssVariables) != null ? T : !0;
	if (r === "value") return S.getTokenValue(t);
	if (p$1(r) && !n) return Ot(t, i, o.excludedKeyRegex, s);
	return L(H(t, P) ? t : `{${t}}`, void 0, i, [o.excludedKeyRegex], s);
};
var xt = (...e) => {
	var t;
	return `${(t = N(...e)) != null ? t : ""}`;
};
function gs(e, ...t) {
	if (e instanceof Array) return ue(e.reduce((r, o, i) => {
		var n;
		return r + o + ((n = x$1(t[i], { dt: N })) != null ? n : "");
	}, ""), xt);
	return x$1(e, { dt: N });
}
var A = (e = {}) => {
	let { preset: t, options: s } = e;
	return {
		preset(r) {
			return t = t ? Q$1(t, r) : r, this;
		},
		options(r) {
			return s = s ? y(y({}, s), r) : r, this;
		},
		primaryPalette(r) {
			let { semantic: o } = t || {};
			return t = C(y({}, t), { semantic: C(y({}, o), { primary: r }) }), this;
		},
		surfacePalette(r) {
			var m, a, l;
			let o = (m = t == null ? void 0 : t.semantic) != null ? m : {}, i = r && Object.hasOwn(r, "light") ? r.light : r, n = r && Object.hasOwn(r, "dark") ? r.dark : r, u = { colorScheme: {
				light: y(y({}, (a = o.colorScheme) == null ? void 0 : a.light), !!i && { surface: i }),
				dark: y(y({}, (l = o.colorScheme) == null ? void 0 : l.dark), !!n && { surface: n })
			} };
			return t = C(y({}, t), { semantic: y(y({}, o), u) }), this;
		},
		define({ useDefaultPreset: r = !1, useDefaultOptions: o = !1 } = {}) {
			return {
				preset: r ? S.getPreset() : t,
				options: o ? S.getOptions() : s
			};
		},
		update({ mergePresets: r = !0, mergeOptions: o = !0 } = {}) {
			let i = {
				preset: r ? Q$1(S.getPreset(), t != null ? t : {}) : t,
				options: o ? y(y({}, S.getOptions()), s) : s
			};
			return S.setTheme(i), i;
		},
		use(r) {
			let o = this.define(r);
			return S.setTheme(o), o;
		}
	};
};
function ge(e, t = {}) {
	let s$4 = S.defaults.variable, { prefix: r = s$4.prefix, selector: o = s$4.selector, excludedKeyRegex: i = s$4.excludedKeyRegex } = t, n = [], u = [], m = [{
		node: e,
		path: r
	}];
	for (; m.length;) {
		let { node: l, path: c } = m.pop();
		for (let p in l) {
			let g = l[p], f = Pe(g), d = H(p, i) ? oe(c) : oe(c, fe(p));
			if (s(f)) m.push({
				node: f,
				path: d
			});
			else {
				let T = ce(d), k = L(f, d, r, [i]);
				$e(u, T, k == null ? k : `${k}`);
				let b = d;
				r && b.startsWith(r + "-") && (b = b.slice(r.length + 1)), n.push(b.replace(/-/g, "."));
			}
		}
	}
	let a = u.join("");
	return {
		value: u,
		tokens: n,
		declarations: a,
		css: j(o, a)
	};
}
var $ = {
	regex: {
		rules: {
			class: {
				pattern: /^\.([a-zA-Z][\w-]*)$/,
				resolve(e) {
					return {
						type: "class",
						selector: e,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			attr: {
				pattern: /^\[(.*)\]$/,
				resolve(e) {
					return {
						type: "attr",
						selector: `:root${e},:host${e}`,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			media: {
				pattern: /^@media (.*)$/,
				resolve(e) {
					return {
						type: "media",
						selector: e,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			system: {
				pattern: /^system$/,
				resolve(e) {
					return {
						type: "system",
						selector: "@media (prefers-color-scheme: dark)",
						matched: this.pattern.test(e.trim())
					};
				}
			},
			custom: { resolve(e) {
				return {
					type: "custom",
					selector: e,
					matched: !0
				};
			} }
		},
		resolve(e) {
			let t = Object.keys(this.rules).filter((s) => s !== "custom").map((s) => this.rules[s]);
			return [e].flat().map((s) => {
				var r;
				return (r = t.map((o) => o.resolve(s)).find((o) => o.matched)) != null ? r : this.rules.custom.resolve(s);
			});
		}
	},
	_toVariables(e, t) {
		return ge(e, { prefix: t == null ? void 0 : t.prefix });
	},
	getCommon({ name: e = "", theme: t = {}, params: s, set: r, defaults: o }) {
		var k, b, O, v, E, _, w;
		let { preset: i, options: n } = t, u, m, a, l$1, c, p, g;
		if (l(i)) {
			let { primitive: z, semantic: G, extend: I } = i, f = G || {}, { colorScheme: ae } = f, U = V(f, ["colorScheme"]), h = I || {}, { colorScheme: H } = h, M = V(h, ["colorScheme"]), d = ae || {}, { dark: B } = d, W = V(d, ["dark"]), T = H || {}, { dark: q } = T, F = V(T, ["dark"]), Z = l(z) ? this._toVariables({ primitive: z }, n) : {}, J = l(U) ? this._toVariables({ semantic: U }, n) : {}, Q = l(W) ? this._toVariables({ light: W }, n) : {}, Y = l(B) ? this._toVariables({ dark: B }, n) : {}, ee = l(M) ? this._toVariables({ semantic: M }, n) : {}, Te = l(F) ? this._toVariables({ light: F }, n) : {}, be = l(q) ? this._toVariables({ dark: q }, n) : {}, [Ke, Xe] = [(k = Z.declarations) != null ? k : "", Z.tokens], [ze, Ge] = [(b = J.declarations) != null ? b : "", J.tokens || []], [Ie, Ue] = [(O = Q.declarations) != null ? O : "", Q.tokens || []], [He, We] = [(v = Y.declarations) != null ? v : "", Y.tokens || []], [qe, Fe] = [(E = ee.declarations) != null ? E : "", ee.tokens || []], [Ze, Je] = [(_ = Te.declarations) != null ? _ : "", Te.tokens || []], [Qe, Ye] = [(w = be.declarations) != null ? w : "", be.tokens || []];
			u = this.transformCSS(e, Ke, "light", "variable", n, r, o), m = Xe;
			a = `${this.transformCSS(e, `${ze}${Ie}`, "light", "variable", n, r, o)}${this.transformCSS(e, `${He}`, "dark", "variable", n, r, o)}`, l$1 = [.../* @__PURE__ */ new Set([
				...Ge,
				...Ue,
				...We
			])];
			c = `${this.transformCSS(e, `${qe}${Ze}color-scheme:light`, "light", "variable", n, r, o)}${this.transformCSS(e, `${Qe}color-scheme:dark`, "dark", "variable", n, r, o)}`, p = [.../* @__PURE__ */ new Set([
				...Fe,
				...Je,
				...Ye
			])], g = x$1(i.css, { dt: N });
		}
		return {
			primitive: {
				css: u,
				tokens: m
			},
			semantic: {
				css: a,
				tokens: l$1
			},
			global: {
				css: c,
				tokens: p
			},
			style: g
		};
	},
	getPreset({ name: e = "", preset: t = {}, options: s, params: r, set: o, defaults: i, selector: n, isScopedTokenPaths: u }) {
		var c, d, T, k;
		let m, a, l$2;
		if (l(t) && ((c = s == null ? void 0 : s.cssVariables) == null || c || u)) {
			let b = e.replace("-directive", ""), p = t, { colorScheme: O, extend: v, css: E } = p, _ = V(p, [
				"colorScheme",
				"extend",
				"css"
			]), g = v || {}, { colorScheme: w } = g, z = V(g, ["colorScheme"]), f = O || {}, { dark: G } = f, I = V(f, ["dark"]), h = w || {}, { dark: ae } = h, U = V(h, ["dark"]), H = l(_) ? this._toVariables({ [b]: y(y({}, _), z) }, s) : {}, M = l(I) ? this._toVariables({ [b]: y(y({}, I), U) }, s) : {}, B = l(G) ? this._toVariables({ [b]: y(y({}, G), ae) }, s) : {}, [W, q] = [(d = H.declarations) != null ? d : "", H.tokens || []], [F, Z] = [(T = M.declarations) != null ? T : "", M.tokens || []], [J, Q] = [(k = B.declarations) != null ? k : "", B.tokens || []];
			m = `${this.transformCSS(b, `${W}${F}`, "light", "variable", s, o, i, n)}${this.transformCSS(b, J, "dark", "variable", s, o, i, n)}`, a = [.../* @__PURE__ */ new Set([
				...q,
				...Z,
				...Q
			])], l$2 = x$1(E, { dt: N });
		}
		return {
			css: m,
			tokens: a,
			style: l$2
		};
	},
	getScopedSelector(e, t) {
		if (!(!(t != null && t.scoped) || !e)) return `[data-styled="${e}"]`;
	},
	getPresetC({ name: e = "", theme: t = {}, params: s, set: r, defaults: o }) {
		var a;
		let { preset: i, options: n } = t, u = (a = i == null ? void 0 : i.components) == null ? void 0 : a[e], m = this.getScopedSelector(e, n);
		return this.getPreset({
			name: e,
			preset: u,
			options: n,
			params: s,
			set: r,
			defaults: o,
			selector: m
		});
	},
	getPresetD({ name: e = "", theme: t = {}, params: s, set: r, defaults: o }) {
		var l, c;
		let i = e.replace("-directive", ""), { preset: n, options: u } = t, m = ((l = n == null ? void 0 : n.components) == null ? void 0 : l[i]) || ((c = n == null ? void 0 : n.directives) == null ? void 0 : c[i]), a = this.getScopedSelector(i, u);
		return this.getPreset({
			name: i,
			preset: m,
			options: u,
			params: s,
			set: r,
			defaults: o,
			selector: a
		});
	},
	applyDarkColorScheme(e) {
		let t = e.darkModeSelector;
		return !(t === "none" || t === !1);
	},
	getColorSchemeOption(e, t) {
		var s;
		return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (s = e.darkModeSelector) != null ? s : t.options.darkModeSelector) : [];
	},
	getLayerOrder(e, t = {}, s, r) {
		let { cssLayer: o } = t;
		return o ? `@layer ${x$1(o.order || o.name || "primeui", s)}` : "";
	},
	getCommonStyleSheet({ name: e = "", theme: t = {}, params: s$1, props: r = {}, set: o, defaults: i }) {
		let n = this.getCommon({
			name: e,
			theme: t,
			params: s$1,
			set: o,
			defaults: i
		}), u = Object.entries(r).reduce((m, [a, l]) => (m.push(`${a}="${Q(l)}"`), m), []).join(" ");
		return Object.entries(n || {}).reduce((m, [a, l]) => {
			if (s(l) && Object.hasOwn(l, "css")) {
				let c = B(l.css), p = `${a}-variables`;
				m.push(`<style type="text/css" data-primevue-style-id="${p}" ${u}>${c}</style>`);
			}
			return m;
		}, []).join("");
	},
	getStyleSheet({ name: e = "", theme: t = {}, params: s, props: r = {}, set: o, defaults: i }) {
		var a;
		let n = {
			name: e,
			theme: t,
			params: s,
			set: o,
			defaults: i
		}, u = (a = e.includes("-directive") ? this.getPresetD(n) : this.getPresetC(n)) == null ? void 0 : a.css, m = Object.entries(r).reduce((l, [c, p]) => (l.push(`${c}="${Q(p)}"`), l), []).join(" ");
		return u ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${m}>${B(u)}</style>` : "";
	},
	createTokens(e = {}, t, s$2 = "", r = "", o = {}) {
		let i = function(a, l, c, p) {
			return a.replace(P, (g) => {
				var T;
				let f = g.slice(1, -1), h = this.tokens[f];
				if (!h) return console.warn(`Token not found for path: ${f}`), "__UNRESOLVED__";
				let d = h.computed(l, c, p);
				if (Array.isArray(d) && d.length === 2) {
					let k = d[0].value, b = d[1].value;
					return k === b ? k != null ? k : "__UNRESOLVED__" : `light-dark(${k},${b})`;
				}
				return (T = d == null ? void 0 : d.value) != null ? T : "__UNRESOLVED__";
			});
		}, n = function(a, l, c, p) {
			if (a.indexOf("light-dark(") === -1) return a;
			let g = [], f = a.length, h = 0;
			for (; h < f;) {
				let d = a.indexOf("light-dark(", h);
				if (d === -1) {
					g.push(a.slice(h));
					break;
				}
				g.push(a.slice(h, d));
				let T = 1, k = d + 11, b = -1;
				for (; k < f && T > 0;) {
					let _ = a.charCodeAt(k);
					_ === 40 ? T++ : _ === 41 ? T-- : _ === 44 && T === 1 && b === -1 && (b = k), k++;
				}
				if (T !== 0 || b === -1) {
					g.push(a.slice(d));
					break;
				}
				let O = a.slice(d + 11, b).trim(), v = a.slice(b + 1, k - 1).trim(), E = l && l !== "none" ? l : null;
				if (E === "light") g.push(n.call(this, O, "light", c, p));
				else if (E === "dark") g.push(n.call(this, v, "dark", c, p));
				else {
					let _ = i.call(this, n.call(this, O, "light", c, p), "light", c, p), w = i.call(this, n.call(this, v, "dark", c, p), "dark", c, p);
					g.push(_ === w ? _ : `light-dark(${_},${w})`);
				}
				h = k;
			}
			return g.join("");
		}, u = function(a, l = {}, c = []) {
			if (c.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), {
				colorScheme: a,
				path: this.path,
				paths: l,
				value: void 0
			};
			c.push(this.path), l.name = this.path, l.binding || (l.binding = {});
			let p = this.value;
			if (typeof this.value == "string") {
				let g = this.value.trim(), f = g.indexOf("light-dark(") !== -1, h = g.indexOf("{") !== -1;
				if (f || h) {
					let d = f ? n.call(this, g, a, l, c) : g, T = d.indexOf("{") !== -1 ? i.call(this, d, a, l, c) : d;
					re.lastIndex = 0, ne.lastIndex = 0, p = re.test(T.replace(ne, "0")) ? `calc(${T})` : T;
				}
			}
			return p$1(l.binding) && delete l.binding, c.pop(), {
				colorScheme: a,
				path: this.path,
				paths: l,
				value: typeof p == "string" && p.indexOf("__UNRESOLVED__") !== -1 ? void 0 : p
			};
		}, m = (a, l, c) => {
			Object.entries(a).forEach(([p, g]) => {
				let f = H(p, t.variable.excludedKeyRegex) ? l : l ? `${l}.${K(p)}` : K(p), h = c ? `${c}.${p}` : p;
				s(g) ? m(g, f, h) : (o[f] || (o[f] = {
					paths: [],
					computed: (d, T = {}, k = []) => {
						let b = o[f].paths;
						if (b.length === 1) {
							let O = b[0], v = O.scheme !== "none" ? O.scheme : d;
							return O.computed(v, T.binding, k);
						} else if (d && d !== "none") for (let O = 0; O < b.length; O++) {
							let v = b[O];
							if (v.scheme === d) return v.computed(d, T.binding, k);
						}
						return b.map((O) => O.computed(O.scheme, T[O.scheme], k));
					}
				}), o[f].paths.push({
					path: h,
					value: g,
					scheme: h.includes("colorScheme.light") ? "light" : h.includes("colorScheme.dark") ? "dark" : "none",
					computed: u,
					tokens: o
				}));
			});
		};
		return m(e, s$2, r), o;
	},
	getTokenValue(e, t, s) {
		var p, g, f;
		let r = e.__cache;
		r || (r = /* @__PURE__ */ new Map(), Object.defineProperty(e, "__cache", {
			value: r,
			enumerable: !1,
			configurable: !0
		}));
		let o = r.get(t);
		if (o !== void 0 || r.has(t)) return o;
		let i = s.variable.excludedKeyRegex, n = t.split("."), u = [];
		for (let h = 0; h < n.length; h++) {
			let d = n[h];
			i.lastIndex = 0, i.test(d.toLowerCase()) || u.push(d);
		}
		let m = u.join("."), a = t.indexOf("colorScheme.light") !== -1 ? "light" : t.indexOf("colorScheme.dark") !== -1 ? "dark" : void 0, l = e[m];
		if (!l) {
			r.set(t, void 0);
			return;
		}
		let c;
		if (a) {
			let h = l.computed(a);
			if (Array.isArray(h)) {
				for (let d = 0; d < h.length; d++) if (((p = h[d]) == null ? void 0 : p.colorScheme) === a) {
					c = h[d].value;
					break;
				}
			} else c = h == null ? void 0 : h.value;
		} else {
			let h = l.computed("light"), d = l.computed("dark"), T, k;
			if (Array.isArray(h)) {
				for (let b = 0; b < h.length; b++) if (((g = h[b]) == null ? void 0 : g.colorScheme) === "light") {
					T = h[b].value;
					break;
				}
			} else T = h == null ? void 0 : h.value;
			if (Array.isArray(d)) {
				for (let b = 0; b < d.length; b++) if (((f = d[b]) == null ? void 0 : f.colorScheme) === "dark") {
					k = d[b].value;
					break;
				}
			} else k = d == null ? void 0 : d.value;
			T === void 0 && k === void 0 ? c = void 0 : T === void 0 ? c = k : k === void 0 || T === k ? c = T : c = `light-dark(${T},${k})`;
		}
		return r.set(t, c), c;
	},
	getSelectorRule(e, t, s, r, o = ":root,:host") {
		return s === "class" || s === "attr" ? j(l(t) ? `${e}${t},${e} ${t}` : e, r) : j(e, j(t != null ? t : o, r));
	},
	transformCSS(e, t, s$3, r, o = {}, i, n, u) {
		var m, a;
		if (l(t)) {
			let { cssLayer: l$3 } = o;
			if (r !== "style") {
				let c = this.getColorSchemeOption(o, n), p = (a = (m = n == null ? void 0 : n.variable) == null ? void 0 : m.selector) != null ? a : ":root,:host";
				t = s$3 === "dark" ? c.reduce((g, { type: f, selector: h }) => (l(h) && (g += h.includes("[CSS]") ? h.replace("[CSS]", t) : this.getSelectorRule(h, u, f, t, p)), g), "") : j(u != null ? u : p, t);
			}
			if (l$3) {
				let c = {
					name: "primeui",
					order: "primeui"
				};
				s(l$3) && (c.name = x$1(l$3.name, {
					name: e,
					type: r
				})), l(c.name) && (t = j(`@layer ${c.name}`, t), i?.layerNames(c.name));
			}
			return t;
		}
		return "";
	}
};
var S = {
	defaults: {
		variable: {
			prefix: "p",
			selector: ":root,:host",
			excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
		},
		options: {
			prefix: "p",
			darkModeSelector: "system",
			cssLayer: !1,
			cssVariables: !0,
			scoped: !1
		}
	},
	_theme: void 0,
	_layerNames: /* @__PURE__ */ new Set(),
	_loadedStyleNames: /* @__PURE__ */ new Set(),
	_loadingStyles: /* @__PURE__ */ new Set(),
	_tokens: {},
	_scopedTokenPaths: /* @__PURE__ */ new Set(),
	update(e = {}) {
		let { theme: t } = e;
		t && (this._theme = C(y({}, t), { options: y(y({}, this.defaults.options), t.options) }), this._tokens = $.createTokens(this.preset, this.defaults), this.resetCaches());
	},
	get theme() {
		return this._theme;
	},
	get preset() {
		var e;
		return ((e = this.theme) == null ? void 0 : e.preset) || {};
	},
	get options() {
		var e;
		return ((e = this.theme) == null ? void 0 : e.options) || {};
	},
	get tokens() {
		return this._tokens;
	},
	hasScopedTokenPath(e) {
		return this._scopedTokenPaths.has(e);
	},
	getScopedTokenPaths() {
		return [...this._scopedTokenPaths];
	},
	addScopedToken(e) {
		let t = !1;
		return e && Object.keys(e).length && N$1(e).forEach((s) => {
			let r = ae(s);
			this._scopedTokenPaths.has(r) || (this._scopedTokenPaths.add(r), t = !0);
		}), t;
	},
	clearScopedTokenPaths() {
		this._scopedTokenPaths.clear();
	},
	getTheme() {
		return this.theme;
	},
	setTheme(e) {
		this.update({ theme: e }), R.emit("theme:change", e);
	},
	getPreset() {
		return this.preset;
	},
	setPreset(e) {
		this._theme = C(y({}, this.theme), { preset: e }), this._tokens = $.createTokens(e, this.defaults), this.resetCaches(), R.emit("preset:change", e), R.emit("theme:change", this.theme);
	},
	getOptions() {
		return this.options;
	},
	setOptions(e) {
		this._theme = C(y({}, this.theme), { options: e }), this.resetStyleCaches(), R.emit("options:change", e), R.emit("theme:change", this.theme);
	},
	resetStyleCaches() {
		this.clearLoadedStyleNames(), this.clearLayerNames();
	},
	resetCaches() {
		this.resetStyleCaches(), this.clearScopedTokenPaths();
	},
	getLayerNames() {
		return [...this._layerNames];
	},
	setLayerNames(e) {
		this._layerNames.add(e);
	},
	clearLayerNames() {
		this._layerNames.clear();
	},
	getLoadedStyleNames() {
		return this._loadedStyleNames;
	},
	isStyleNameLoaded(e) {
		return this._loadedStyleNames.has(e);
	},
	setLoadedStyleName(e) {
		this._loadedStyleNames.add(e);
	},
	deleteLoadedStyleName(e) {
		this._loadedStyleNames.delete(e);
	},
	clearLoadedStyleNames() {
		this._loadedStyleNames.clear();
	},
	getTokenValue(e) {
		return $.getTokenValue(this.tokens, e, this.defaults);
	},
	getCommon(e = "", t) {
		return $.getCommon({
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	getComponent(e = "", t) {
		let s = {
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return $.getPresetC(s);
	},
	getDirective(e = "", t) {
		let s = {
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return $.getPresetD(s);
	},
	getCustomPreset(e = "", t, s, r) {
		let o = {
			name: e,
			preset: t,
			options: this.options,
			selector: s,
			params: r,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) },
			isScopedTokenPaths: !0
		};
		return $.getPreset(o);
	},
	getLayerOrderCSS(e = "") {
		return $.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
	},
	transformCSS(e = "", t, s = "style", r) {
		return $.transformCSS(e, t, r, s, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
	},
	getCommonStyleSheet(e = "", t, s = {}) {
		return $.getCommonStyleSheet({
			name: e,
			theme: this.theme,
			params: t,
			props: s,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	getStyleSheet(e, t, s = {}) {
		return $.getStyleSheet({
			name: e,
			theme: this.theme,
			params: t,
			props: s,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	onStyleMounted(e) {
		this._loadingStyles.add(e);
	},
	onStyleUpdated(e) {
		this._loadingStyles.add(e);
	},
	onStyleLoaded(e, { name: t }) {
		this._loadingStyles.size && (this._loadingStyles.delete(t), R.emit(`theme:${t}:load`, e), this._loadingStyles.size || R.emit("theme:load"));
	}
};
function De(...e) {
	let t = F(S.getPreset(), ...e);
	return S.setPreset(t), t;
}
function Le(e) {
	return A().primaryPalette(e != null ? e : {}).update().preset;
}
function Ae(e) {
	return A().surfacePalette(e != null ? e : {}).update().preset;
}
function Me(e, ...t) {
	let s = F(e, ...t);
	return S.setPreset(s), s;
}
function Be(e) {
	return A(e).update({
		mergePresets: !1,
		mergeOptions: !1
	});
}
var ke = class {
	constructor({ attrs: t } = {}) {
		this._styles = /* @__PURE__ */ new Map(), this._attrs = t || {};
	}
	get(t) {
		return this._styles.get(t);
	}
	has(t) {
		return this._styles.has(t);
	}
	delete(t) {
		this._styles.delete(t);
	}
	clear() {
		this._styles.clear();
	}
	add(t, s) {
		if (l(s)) {
			let r = {
				name: t,
				css: s,
				attrs: this._attrs,
				markup: J(s, this._attrs)
			};
			this._styles.set(t, C(y({}, r), { element: this.createStyleElement(r) }));
		}
	}
	update() {}
	getStyles() {
		return this._styles;
	}
	getAllCSS() {
		return [...this._styles.values()].map((t) => t.css).filter((t) => !!t);
	}
	getAllMarkup() {
		return [...this._styles.values()].map((t) => t.markup).filter((t) => !!t);
	}
	getAllElements() {
		return [...this._styles.values()].map((t) => t.element);
	}
	createStyleElement(t = {}) {}
};
var Dt = ke;
//#endregion
export { c as $, pe as A, R$1 as B, ge as C, me as D, j as E, xe as F, st as G, ce$1 as H, zt as I, A$2 as J, w as K, $$1 as L, re as M, ue as N, ne as O, us as P, b as Q, Ft as R, de as S, gt as T, k as U, W as V, le as W, C$1 as X, B as Y, K$1 as Z, R as _, Be as a, x$1 as at, X as b, Gt as c, L as d, d as et, Le as f, Pe as g, P as h, Ae as i, p$1 as it, pt as j, oe as k, It as l, N as m, $e as n, l as nt, De as o, Me as p, zt$1 as q, A as r, m as rt, Dt as s, $ as t, ee as tt, K as u, S as v, gs as w, ce as x, Tt as y, L$1 as z };
