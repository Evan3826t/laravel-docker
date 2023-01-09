/*
 jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (p, va) { "object" == typeof module && "object" == typeof module.exports ? module.exports = p.document ? va(p, !0) : function (p) { if (!p.document) throw Error("jQuery requires a window with a document"); return va(p) } : va(p) }("undefined" != typeof window ? window : this, function (p, va) {
    function fb(a, b, c) { var d, e = (b = b || q).createElement("script"); if (e.text = a, c) for (d in Xb) c[d] && (e[d] = c[d]); b.head.appendChild(e).parentNode.removeChild(e) } function ia(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ja[gb.call(a)] ||
            "object" : typeof a
    } function Qa(a) { var b = !!a && "length" in a && a.length, c = ia(a); return !r(a) && !ka(a) && ("array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a) } function N(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() } function Ra(a, b, c) { return r(b) ? d.grep(a, function (a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? d.grep(a, function (a) { return a === b !== c }) : "string" != typeof b ? d.grep(a, function (a) { return -1 < ba.call(b, a) !== c }) : d.filter(b, a, c) } function hb(a, b) { for (; (a = a[b]) && 1 !== a.nodeType;); return a }
    function Yb(a) { var b = {}; return d.each(a.match(R) || [], function (a, d) { b[d] = !0 }), b } function la(a) { return a } function Ba(a) { throw a; } function ib(a, b, c, d) { var f; try { a && r(f = a.promise) ? f.call(a).done(b).fail(c) : a && r(f = a.then) ? f.call(a, b, c) : b.apply(void 0, [a].slice(d)) } catch (g) { c.apply(void 0, [g]) } } function Ca() { q.removeEventListener("DOMContentLoaded", Ca); p.removeEventListener("load", Ca); d.ready() } function Zb(a, b) { return b.toUpperCase() } function J(a) { return a.replace($b, "ms-").replace(ac, Zb) } function ca() {
        this.expando =
        d.expando + ca.uid++
    } function jb(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(bc, "-$\x26").toLowerCase(), "string" == typeof (c = a.getAttribute(d))) { try { d = c, c = "true" === d || "false" !== d && ("null" === d ? null : d === +d + "" ? +d : cc.test(d) ? JSON.parse(d) : d) } catch (e) { } D.set(a, b, c) } else c = void 0; return c } function kb(a, b, c, f) {
        var e, g, h = 20, k = f ? function () { return f.cur() } : function () { return d.css(a, b, "") }, l = k(), n = c && c[3] || (d.cssNumber[b] ? "" : "px"), m = (d.cssNumber[b] || "px" !== n && +l) && ma.exec(d.css(a, b)); if (m &&
            m[3] !== n) { l /= 2; n = n || m[3]; for (m = +l || 1; h--;)d.style(a, b, m + n), 0 >= (1 - g) * (1 - (g = k() / l || .5)) && (h = 0), m /= g; m *= 2; d.style(a, b, m + n); c = c || [] } return c && (m = +m || +l || 0, e = c[1] ? m + (c[1] + 1) * c[2] : +c[2], f && (f.unit = n, f.start = m, f.end = e)), e
    } function na(a, b) {
        for (var c, f, e = [], g = 0, h = a.length; g < h; g++)if ((f = a[g]).style) if (c = f.style.display, b) {
            if ("none" === c && (e[g] = x.get(f, "display") || null, e[g] || (f.style.display = "")), "" === f.style.display && Da(f)) {
                c = g; var k = void 0; var l = f.ownerDocument; var n = f.nodeName; l = (f = lb[n]) || (k = l.body.appendChild(l.createElement(n)),
                    f = d.css(k, "display"), k.parentNode.removeChild(k), "none" === f && (f = "block"), lb[n] = f, f); e[c] = l
            }
        } else "none" !== c && (e[g] = "none", x.set(f, "display", c)); for (g = 0; g < h; g++)null != e[g] && (a[g].style.display = e[g]); return a
    } function z(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && N(a, b) ? d.merge([a], c) : c } function Sa(a, b) {
        for (var c = 0, d = a.length; c < d; c++)x.set(a[c], "globalEval", !b || x.get(b[c],
            "globalEval"))
    } function mb(a, b, c, f, e) {
        for (var g, h, k, l, n = b.createDocumentFragment(), m = [], w = 0, v = a.length; w < v; w++)if ((g = a[w]) || 0 === g) if ("object" === ia(g)) d.merge(m, g.nodeType ? [g] : g); else if (dc.test(g)) { h = h || n.appendChild(b.createElement("div")); k = (nb.exec(g) || ["", ""])[1].toLowerCase(); k = K[k] || K._default; h.innerHTML = k[1] + d.htmlPrefilter(g) + k[2]; for (k = k[0]; k--;)h = h.lastChild; d.merge(m, h.childNodes); (h = n.firstChild).textContent = "" } else m.push(b.createTextNode(g)); n.textContent = ""; for (w = 0; g = m[w++];)if (f &&
            -1 < d.inArray(g, f)) e && e.push(g); else if (l = d.contains(g.ownerDocument, g), h = z(n.appendChild(g), "script"), l && Sa(h), c) for (k = 0; g = h[k++];)ob.test(g.type || "") && c.push(g); return n
    } function Ea() { return !0 } function X() { return !1 } function pb() { try { return q.activeElement } catch (a) { } } function Ta(a, b, c, f, e, g) {
        var h, k; if ("object" == typeof b) { "string" != typeof c && (f = f || c, c = void 0); for (k in b) Ta(a, k, c, f, b[k], g); return a } if (null == f && null == e ? (e = c, f = c = void 0) : null == e && ("string" == typeof c ? (e = f, f = void 0) : (e = f, f = c, c = void 0)),
            !1 === e) e = X; else if (!e) return a; return 1 === g && (h = e, (e = function (a) { return d().off(a), h.apply(this, arguments) }).guid = h.guid || (h.guid = d.guid++)), a.each(function () { d.event.add(this, b, e, f, c) })
    } function qb(a, b) { return N(a, "table") && N(11 !== b.nodeType ? b : b.firstChild, "tr") ? d(a).children("tbody")[0] || a : a } function ec(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function fc(a) { return "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type"), a } function rb(a, b) {
        var c, f, e,
        g, h, k; if (1 === b.nodeType) { if (x.hasData(a) && (c = x.access(a), f = x.set(b, c), k = c.events)) for (e in delete f.handle, f.events = {}, k) for (c = 0, f = k[e].length; c < f; c++)d.event.add(b, e, k[e][c]); D.hasData(a) && (g = D.access(a), h = d.extend({}, g), D.set(b, h)) }
    } function oa(a, b, c, f) {
        b = sb.apply([], b); var e, g, h, k = 0, l = a.length, n = l - 1, m = b[0], w = r(m); if (w || 1 < l && "string" == typeof m && !u.checkClone && gc.test(m)) return a.each(function (d) { var e = a.eq(d); w && (b[0] = m.call(this, d, e.html())); oa(e, b, c, f) }); if (l && (e = mb(b, a[0].ownerDocument, !1, a,
            f), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || f)) { for (h = (g = d.map(z(e, "script"), ec)).length; k < l; k++) { var v = e; k !== n && (v = d.clone(v, !0, !0), h && d.merge(g, z(v, "script"))); c.call(a[k], v, k) } if (h) for (e = g[g.length - 1].ownerDocument, d.map(g, fc), k = 0; k < h; k++)v = g[k], ob.test(v.type || "") && !x.access(v, "globalEval") && d.contains(e, v) && (v.src && "module" !== (v.type || "").toLowerCase() ? d._evalUrl && d._evalUrl(v.src) : fb(v.textContent.replace(hc, ""), e, v)) } return a
    } function tb(a, b, c) {
        for (var f = b ? d.filter(b, a) : a, e = 0; null !=
            (b = f[e]); e++)c || 1 !== b.nodeType || d.cleanData(z(b)), b.parentNode && (c && d.contains(b.ownerDocument, b) && Sa(z(b, "script")), b.parentNode.removeChild(b)); return a
    } function pa(a, b, c) { var f, e, g, h, k = a.style; return (c = c || Ga(a)) && ("" !== (h = c.getPropertyValue(b) || c[b]) || d.contains(a.ownerDocument, a) || (h = d.style(a, b)), !u.pixelBoxStyles() && Ua.test(h) && ic.test(b) && (f = k.width, e = k.minWidth, g = k.maxWidth, k.minWidth = k.maxWidth = k.width = h, h = c.width, k.width = f, k.minWidth = e, k.maxWidth = g)), void 0 !== h ? h + "" : h } function ub(a, b) {
        return {
            get: function () {
                if (!a()) return (this.get =
                    b).apply(this, arguments); delete this.get
            }
        }
    } function vb(a) { var b = d.cssProps[a]; if (!b) { b = d.cssProps; a: { var c = a; if (!(c in wb)) { for (var f = c[0].toUpperCase() + c.slice(1), e = xb.length; e--;)if ((c = xb[e] + f) in wb) break a; c = void 0 } } b = b[a] = c || a } return b } function yb(a, b, c) { return (a = ma.exec(b)) ? Math.max(0, a[2] - (c || 0)) + (a[3] || "px") : b } function Va(a, b, c, f, e, g) {
        var h = "width" === b ? 1 : 0, k = 0, l = 0; if (c === (f ? "border" : "content")) return 0; for (; 4 > h; h += 2)"margin" === c && (l += d.css(a, c + Y[h], !0, e)), f ? ("content" === c && (l -= d.css(a, "padding" +
            Y[h], !0, e)), "margin" !== c && (l -= d.css(a, "border" + Y[h] + "Width", !0, e))) : (l += d.css(a, "padding" + Y[h], !0, e), "padding" !== c ? l += d.css(a, "border" + Y[h] + "Width", !0, e) : k += d.css(a, "border" + Y[h] + "Width", !0, e)); return !f && 0 <= g && (l += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - g - l - k - .5))), l
    } function zb(a, b, c) {
        var f = Ga(a), e = pa(a, b, f), g = "border-box" === d.css(a, "boxSizing", !1, f), h = g; if (Ua.test(e)) { if (!c) return e; e = "auto" } return h = h && (u.boxSizingReliable() || e === a.style[b]), ("auto" === e || !parseFloat(e) &&
            "inline" === d.css(a, "display", !1, f)) && (e = a["offset" + b[0].toUpperCase() + b.slice(1)], h = !0), (e = parseFloat(e) || 0) + Va(a, b, c || (g ? "border" : "content"), h, f, e) + "px"
    } function A(a, b, c, d, e) { return new A.prototype.init(a, b, c, d, e) } function Wa() { Ha && (!1 === q.hidden && p.requestAnimationFrame ? p.requestAnimationFrame(Wa) : p.setTimeout(Wa, d.fx.interval), d.fx.tick()) } function Ab() { return p.setTimeout(function () { qa = void 0 }), qa = Date.now() } function Ia(a, b) {
        var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; 4 > d; d += 2 - b)e["margin" + (c = Y[d])] = e["padding" +
            c] = a; return b && (e.opacity = e.width = a), e
    } function Bb(a, b, c) { for (var d, e = (M.tweeners[b] || []).concat(M.tweeners["*"]), g = 0, h = e.length; g < h; g++)if (d = e[g].call(c, b, a)) return d } function jc(a, b) { var c, f, e, g, h; for (c in a) if (f = J(c), e = b[f], g = a[c], Array.isArray(g) && (e = g[1], g = a[c] = g[0]), c !== f && (a[f] = g, delete a[c]), (h = d.cssHooks[f]) && "expand" in h) for (c in g = h.expand(g), delete a[f], g) c in a || (a[c] = g[c], b[c] = e); else b[f] = e } function M(a, b, c) {
        var f, e = 0, g = M.prefilters.length, h = d.Deferred().always(function () { delete k.elem }),
        k = function () { if (f) return !1; var b = qa || Ab(); b = Math.max(0, l.startTime + l.duration - b); for (var c = 1 - (b / l.duration || 0), d = 0, e = l.tweens.length; d < e; d++)l.tweens[d].run(c); return h.notifyWith(a, [l, c, b]), 1 > c && e ? b : (e || h.notifyWith(a, [l, 1, 0]), h.resolveWith(a, [l]), !1) }, l = h.promise({
            elem: a, props: d.extend({}, b), opts: d.extend(!0, { specialEasing: {}, easing: d.easing._default }, c), originalProperties: b, originalOptions: c, startTime: qa || Ab(), duration: c.duration, tweens: [], createTween: function (b, c) {
                b = d.Tween(a, l.opts, b, c, l.opts.specialEasing[b] ||
                    l.opts.easing); return l.tweens.push(b), b
            }, stop: function (b) { var c = 0, d = b ? l.tweens.length : 0; if (f) return this; for (f = !0; c < d; c++)l.tweens[c].run(1); return b ? (h.notifyWith(a, [l, 1, 0]), h.resolveWith(a, [l, b])) : h.rejectWith(a, [l, b]), this }
        }); c = l.props; for (jc(c, l.opts.specialEasing); e < g; e++)if (b = M.prefilters[e].call(l, a, c, l.opts)) return r(b.stop) && (d._queueHooks(l.elem, l.opts.queue).stop = b.stop.bind(b)), b; return d.map(c, Bb, l), r(l.opts.start) && l.opts.start.call(a, l), l.progress(l.opts.progress).done(l.opts.done,
            l.opts.complete).fail(l.opts.fail).always(l.opts.always), d.fx.timer(d.extend(k, { elem: a, anim: l, queue: l.opts.queue })), l
    } function aa(a) { return (a.match(R) || []).join(" ") } function H(a) { return a.getAttribute && a.getAttribute("class") || "" } function Xa(a) { return Array.isArray(a) ? a : "string" == typeof a ? a.match(R) || [] : [] } function Ya(a, b, c, f) {
        var e; if (Array.isArray(b)) d.each(b, function (b, d) { c || kc.test(a) ? f(a, d) : Ya(a + "[" + ("object" == typeof d && null != d ? b : "") + "]", d, c, f) }); else if (c || "object" !== ia(b)) f(a, b); else for (e in b) Ya(a +
            "[" + e + "]", b[e], c, f)
    } function Cb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d = 0, e = b.toLowerCase().match(R) || []; if (r(c)) for (; b = e[d++];)"+" === b[0] ? (b = b.slice(1) || "*", (a[b] = a[b] || []).unshift(c)) : (a[b] = a[b] || []).push(c) } } function Db(a, b, c, f) { function e(k) { var l; return g[k] = !0, d.each(a[k] || [], function (a, d) { a = d(b, c, f); return "string" != typeof a || h || g[a] ? h ? !(l = a) : void 0 : (b.dataTypes.unshift(a), e(a), !1) }), l } var g = {}, h = a === Za; return e(b.dataTypes[0]) || !g["*"] && e("*") } function $a(a, b) {
        var c, f,
        e = d.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : f || (f = {}))[c] = b[c]); return f && d.extend(!0, a, f), a
    } var da = [], q = p.document, lc = Object.getPrototypeOf, S = da.slice, sb = da.concat, ab = da.push, ba = da.indexOf, ja = {}, gb = ja.toString, Ja = ja.hasOwnProperty, Eb = Ja.toString, mc = Eb.call(Object), u = {}, r = function (a) { return "function" == typeof a && "number" != typeof a.nodeType }, ka = function (a) { return null != a && a === a.window }, Xb = { type: !0, src: !0, noModule: !0 }, d = function (a, b) { return new d.fn.init(a, b) }, nc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    d.fn = d.prototype = {
        jquery: "3.3.1", constructor: d, length: 0, toArray: function () { return S.call(this) }, get: function (a) { return null == a ? S.call(this) : 0 > a ? this[a + this.length] : this[a] }, pushStack: function (a) { a = d.merge(this.constructor(), a); return a.prevObject = this, a }, each: function (a) { return d.each(this, a) }, map: function (a) { return this.pushStack(d.map(this, function (b, c) { return a.call(b, c, b) })) }, slice: function () { return this.pushStack(S.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) },
        eq: function (a) { var b = this.length; a = +a + (0 > a ? b : 0); return this.pushStack(0 <= a && a < b ? [this[a]] : []) }, end: function () { return this.prevObject || this.constructor() }, push: ab, sort: da.sort, splice: da.splice
    }; d.extend = d.fn.extend = function () {
        var a, b, c, f, e, g = arguments[0] || {}, h = 1, k = arguments.length, l = !1; "boolean" == typeof g && (l = g, g = arguments[h] || {}, h++); "object" == typeof g || r(g) || (g = {}); for (h === k && (g = this, h--); h < k; h++)if (null != (a = arguments[h])) for (b in a) {
            var n = g[b]; g !== (c = a[b]) && (l && c && (d.isPlainObject(c) || (f = Array.isArray(c))) ?
                (f ? (f = !1, e = n && Array.isArray(n) ? n : []) : e = n && d.isPlainObject(n) ? n : {}, g[b] = d.extend(l, e, c)) : void 0 !== c && (g[b] = c))
        } return g
    }; d.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw Error(a); }, noop: function () { }, isPlainObject: function (a) { var b, c; return !(!a || "[object Object]" !== gb.call(a)) && (!(b = lc(a)) || "function" == typeof (c = Ja.call(b, "constructor") && b.constructor) && Eb.call(c) === mc) }, isEmptyObject: function (a) { for (var b in a) return !1; return !0 }, globalEval: function (a) { fb(a) },
        each: function (a, b) { var c, d = 0; if (Qa(a)) for (c = a.length; d < c && !1 !== b.call(a[d], d, a[d]); d++); else for (d in a) if (!1 === b.call(a[d], d, a[d])) break; return a }, trim: function (a) { return null == a ? "" : (a + "").replace(nc, "") }, makeArray: function (a, b) { b = b || []; return null != a && (Qa(Object(a)) ? d.merge(b, "string" == typeof a ? [a] : a) : ab.call(b, a)), b }, inArray: function (a, b, c) { return null == b ? -1 : ba.call(b, a, c) }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d]; return a.length = e, a }, grep: function (a, b, c) {
            var d =
                [], e = 0, g = a.length; for (c = !c; e < g; e++)!b(a[e], e) !== c && d.push(a[e]); return d
        }, map: function (a, b, c) { var d, e, g = 0, h = []; if (Qa(a)) for (d = a.length; g < d; g++)null != (e = b(a[g], g, c)) && h.push(e); else for (g in a) null != (e = b(a[g], g, c)) && h.push(e); return sb.apply([], h) }, guid: 1, support: u
    }); "function" == typeof Symbol && (d.fn[Symbol.iterator] = da[Symbol.iterator]); d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { ja["[object " + b + "]"] = b.toLowerCase() }); var ha = function (a) {
        function b(a,
            b, c, d) {
                var e, f, g, t, h = b && b.ownerDocument, k = b ? b.nodeType : 9; if (c = c || [], "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return c; if (!d && ((b ? b.ownerDocument || b : G) !== F && wa(b), b = b || F, T)) {
                    if (11 !== k && (t = va.exec(a))) if (e = t[1]) if (9 === k) { if (!(f = b.getElementById(e))) return c; if (f.id === e) return c.push(f), c } else { if (h && (f = h.getElementById(e)) && Aa(b, f) && f.id === e) return c.push(f), c } else {
                        if (t[2]) return sa.apply(c, b.getElementsByTagName(a)), c; if ((e = t[3]) && L.getElementsByClassName && b.getElementsByClassName) return sa.apply(c,
                            b.getElementsByClassName(e)), c
                    } if (!(!L.qsa || La[a + " "] || B && B.test(a))) { if (1 !== k) { h = b; var P = a } else if ("object" !== b.nodeName.toLowerCase()) { (g = b.getAttribute("id")) ? g = g.replace(ma, pa) : b.setAttribute("id", g = C); for (e = (f = ba(a)).length; e--;)f[e] = "#" + g + " " + p(f[e]); P = f.join(","); h = ca.test(a) && w(b.parentNode) || b } if (P) try { return sa.apply(c, h.querySelectorAll(P)), c } catch (Rc) { } finally { g === C && b.removeAttribute("id") } }
                } return U(a.replace(S, "$1"), b, c, d)
        } function c() {
            function a(c, d) {
                return b.push(c + " ") > y.cacheLength &&
                    delete a[b.shift()], a[c + " "] = d
            } var b = []; return a
        } function d(a) { return a[C] = !0, a } function e(a) { var b = F.createElement("fieldset"); try { return !!a(b) } catch (I) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b) } } function g(a, b) { a = a.split("|"); for (var c = a.length; c--;)y.attrHandle[a[c]] = b } function h(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d) return d; if (c) for (; c = c.nextSibling;)if (c === b) return -1; return a ? 1 : -1 } function k(a) {
            return function (b) {
                return "input" ===
                    b.nodeName.toLowerCase() && b.type === a
            }
        } function l(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function n(a) { return function (b) { return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && xa(b) === a : b.disabled === a : "label" in b && b.disabled === a } } function m(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)c[e =
                        f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        } function w(a) { return a && "undefined" != typeof a.getElementsByTagName && a } function v() { } function p(a) { for (var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value; return d } function Fa(a, b, c) {
            var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = K++; return b.first ? function (b, c, e) { for (; b = b[d];)if (1 === b.nodeType || g) return a(b, c, e); return !1 } : function (b, c, t) {
                var k, l, P, m = [A, h]; if (t) for (; b = b[d];) { if ((1 === b.nodeType || g) && a(b, c, t)) return !0 } else for (; b = b[d];)if (1 === b.nodeType || g) if (P = b[C] || (b[C] =
                    {}), l = P[b.uniqueID] || (P[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else { if ((k = l[f]) && k[0] === A && k[1] === h) return m[2] = k[2]; if (l[f] = m, m[2] = a(b, c, t)) return !0 } return !1
            }
        } function x(a) { return 1 < a.length ? function (b, c, d) { for (var e = a.length; e--;)if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function r(a, b, c, d, e) { for (var f, g = [], h = 0, t = a.length, k = null != b; h < t; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), k && b.push(h))); return g } function q(a, c, e, f, g, h) {
            return f && !f[C] && (f = q(f)), g && !g[C] && (g = q(g, h)), d(function (d,
                h, t, k) {
                    var l, P = [], m = [], ra = h.length, I; if (!(I = d)) { I = c || "*"; for (var n = t.nodeType ? [t] : t, za = [], w = 0, Ka = n.length; w < Ka; w++)b(I, n[w], za); I = za } I = !a || !d && c ? I : r(I, P, a, t, k); n = e ? g || (d ? a : ra || f) ? [] : h : I; if (e && e(I, n, t, k), f) { var p = r(n, m); f(p, [], t, k); for (t = p.length; t--;)(l = p[t]) && (n[m[t]] = !(I[m[t]] = l)) } if (d) { if (g || a) { if (g) { p = []; for (t = n.length; t--;)(l = n[t]) && p.push(I[t] = l); g(null, n = [], p, k) } for (t = n.length; t--;)(l = n[t]) && -1 < (p = g ? H(d, l) : P[t]) && (d[p] = !(h[p] = l)) } } else n = r(n === h ? n.splice(ra, n.length) : n), g ? g(null, h, n, k) : sa.apply(h,
                        n)
            })
        } function u(a) {
            var b, c, d = a.length, e = y.relative[a[0].type]; var f = e || y.relative[" "]; for (var g = e ? 1 : 0, h = Fa(function (a) { return a === b }, f, !0), t = Fa(function (a) { return -1 < H(b, a) }, f, !0), k = [function (a, c, d) { a = !e && (d || c !== Ma) || ((b = c).nodeType ? h(a, c, d) : t(a, c, d)); return b = null, a }]; g < d; g++)if (f = y.relative[a[g].type]) k = [Fa(x(k), f)]; else {
                if ((f = y.filter[a[g].type].apply(null, a[g].matches))[C]) {
                    for (c = ++g; c < d && !y.relative[a[c].type]; c++); return q(1 < g && x(k), 1 < g && p(a.slice(0, g - 1).concat({
                        value: " " === a[g - 2].type ? "*" :
                            ""
                    })).replace(S, "$1"), f, g < c && u(a.slice(g, c)), c < d && u(a = a.slice(c)), c < d && p(a))
                } k.push(f)
            } return x(k)
        } function E(a, c) {
            var e = 0 < c.length, f = 0 < a.length, g = function (d, g, h, t, k) {
                var l, m, P = 0, I = "0", ra = d && [], n = [], za = Ma, w = d || f && y.find.TAG("*", k), Ka = A += null == za ? 1 : Math.random() || .1, p = w.length; for (k && (Ma = g === F || g || k); I !== p && null != (l = w[I]); I++) { if (f && l) { var v = 0; for (g || l.ownerDocument === F || (wa(l), h = !T); m = a[v++];)if (m(l, g || F, h)) { t.push(l); break } k && (A = Ka) } e && ((l = !m && l) && P--, d && ra.push(l)) } if (P += I, e && I !== P) {
                    for (v = 0; m = c[v++];)m(ra,
                        n, g, h); if (d) { if (0 < P) for (; I--;)ra[I] || n[I] || (n[I] = Y.call(t)); n = r(n) } sa.apply(t, n); k && !d && 0 < n.length && 1 < P + c.length && b.uniqueSort(t)
                } return k && (A = Ka, Ma = za), ra
            }; return e ? d(g) : g
        } var O, y, Q, U, Ma, ta, D, F, V, T, B, z, Na, Aa, C = "sizzle" + 1 * new Date, G = a.document, A = 0, K = 0, Gb = c(), M = c(), La = c(), N = function (a, b) { return a === b && (D = !0), 0 }, R = {}.hasOwnProperty, J = [], Y = J.pop, Z = J.push, sa = J.push, aa = J.slice, H = function (a, b) { for (var c = 0, d = a.length; c < d; c++)if (a[c] === b) return c; return -1 }, da = /[\x20\t\r\n\f]+/g, S = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            ha = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ia = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ka = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, la = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, na = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, X = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/, PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            }, oa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, W = /^[^{]+\{\s*\[native \w/,
            va = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ca = /[+~]/, ea = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, fa = function (a, b, c) { a = "0x" + b - 65536; return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320) }, ma = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, pa = function (a, b) { return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a }, ua = function () { wa() }, xa = Fa(function (a) { return !0 === a.disabled && ("form" in a || "label" in a) }, {
                dir: "parentNode",
                next: "legend"
            }); try { sa.apply(J = aa.call(G.childNodes), G.childNodes), J[G.childNodes.length].nodeType } catch (t) { sa = { apply: J.length ? function (a, b) { Z.apply(a, aa.call(b)) } : function (a, b) { for (var c = a.length, d = 0; a[c++] = b[d++];); a.length = c - 1 } } } var L = b.support = {}; var ya = b.isXML = function (a) { a = a && (a.ownerDocument || a).documentElement; return !!a && "HTML" !== a.nodeName }; var wa = b.setDocument = function (a) {
                var b, c; a = a ? a.ownerDocument || a : G; return a !== F && 9 === a.nodeType && a.documentElement ? (F = a, V = F.documentElement, T = !ya(F), G !==
                    F && (c = F.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", ua, !1) : c.attachEvent && c.attachEvent("onunload", ua)), L.attributes = e(function (a) { return a.className = "i", !a.getAttribute("className") }), L.getElementsByTagName = e(function (a) { return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length }), L.getElementsByClassName = W.test(F.getElementsByClassName), L.getById = e(function (a) { return V.appendChild(a).id = C, !F.getElementsByName || !F.getElementsByName(C).length }), L.getById ?
                        (y.filter.ID = function (a) { var b = a.replace(ea, fa); return function (a) { return a.getAttribute("id") === b } }, y.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && T) return (a = b.getElementById(a)) ? [a] : [] }) : (y.filter.ID = function (a) { var b = a.replace(ea, fa); return function (a) { return (a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b } }, y.find.ID = function (a, b) {
                            if ("undefined" != typeof b.getElementById && T) {
                                var c, d = b.getElementById(a); if (d) {
                                    if ((c = d.getAttributeNode("id")) && c.value ===
                                        a) return [d]; var e = b.getElementsByName(a); for (b = 0; d = e[b++];)if ((c = d.getAttributeNode("id")) && c.value === a) return [d]
                                } return []
                            }
                        }), y.find.TAG = L.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : L.qsa ? b.querySelectorAll(a) : void 0 } : function (a, b) { var c = [], d = 0; b = b.getElementsByTagName(a); if ("*" === a) { for (; a = b[d++];)1 === a.nodeType && c.push(a); return c } return b }, y.find.CLASS = L.getElementsByClassName && function (a, b) {
                            if ("undefined" != typeof b.getElementsByClassName &&
                                T) return b.getElementsByClassName(a)
                        }, z = [], B = [], (L.qsa = W.test(F.querySelectorAll)) && (e(function (a) {
                            V.appendChild(a).innerHTML = "\x3ca id\x3d'" + C + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + C + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e"; a.querySelectorAll("[msallowcapture^\x3d'']").length && B.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")"); a.querySelectorAll("[selected]").length || B.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                            a.querySelectorAll("[id~\x3d" + C + "-]").length || B.push("~\x3d"); a.querySelectorAll(":checked").length || B.push(":checked"); a.querySelectorAll("a#" + C + "+*").length || B.push(".#.+[+~]")
                        }), e(function (a) {
                            a.innerHTML = "\x3ca href\x3d'' disabled\x3d'disabled'\x3e\x3c/a\x3e\x3cselect disabled\x3d'disabled'\x3e\x3coption/\x3e\x3c/select\x3e"; var b = F.createElement("input"); b.setAttribute("type", "hidden"); a.appendChild(b).setAttribute("name", "D"); a.querySelectorAll("[name\x3dd]").length && B.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
                            2 !== a.querySelectorAll(":enabled").length && B.push(":enabled", ":disabled"); V.appendChild(a).disabled = !0; 2 !== a.querySelectorAll(":disabled").length && B.push(":enabled", ":disabled"); a.querySelectorAll("*,:x"); B.push(",.*:")
                        })), (L.matchesSelector = W.test(Na = V.matches || V.webkitMatchesSelector || V.mozMatchesSelector || V.oMatchesSelector || V.msMatchesSelector)) && e(function (a) { L.disconnectedMatch = Na.call(a, "*"); Na.call(a, "[s!\x3d'']:x"); z.push("!\x3d", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)") }),
                    B = B.length && new RegExp(B.join("|")), z = z.length && new RegExp(z.join("|")), b = W.test(V.compareDocumentPosition), Aa = b || W.test(V.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a; b = b && b.parentNode; return a === b || !(!b || 1 !== b.nodeType || !(c.contains ? c.contains(b) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(b))) } : function (a, b) { if (b) for (; b = b.parentNode;)if (b === a) return !0; return !1 }, N = b ? function (a, b) {
                        if (a === b) return D = !0, 0; var c = !a.compareDocumentPosition - !b.compareDocumentPosition; return c ||
                            (1 & (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1) || !L.sortDetached && b.compareDocumentPosition(a) === c ? a === F || a.ownerDocument === G && Aa(G, a) ? -1 : b === F || b.ownerDocument === G && Aa(G, b) ? 1 : ta ? H(ta, a) - H(ta, b) : 0 : 4 & c ? -1 : 1)
                    } : function (a, b) {
                        if (a === b) return D = !0, 0; var c = 0, d = a.parentNode, e = b.parentNode, f = [a], g = [b]; if (!d || !e) return a === F ? -1 : b === F ? 1 : d ? -1 : e ? 1 : ta ? H(ta, a) - H(ta, b) : 0; if (d === e) return h(a, b); for (; a = a.parentNode;)f.unshift(a); for (a = b; a = a.parentNode;)g.unshift(a); for (; f[c] === g[c];)c++;
                        return c ? h(f[c], g[c]) : f[c] === G ? -1 : g[c] === G ? 1 : 0
                    }, F) : F
            }; b.matches = function (a, c) { return b(a, null, null, c) }; b.matchesSelector = function (a, c) { if ((a.ownerDocument || a) !== F && wa(a), c = c.replace(ka, "\x3d'$1']"), !(!L.matchesSelector || !T || La[c + " "] || z && z.test(c) || B && B.test(c))) try { var d = Na.call(a, c); if (d || L.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (ra) { } return 0 < b(c, F, null, [a]).length }; b.contains = function (a, b) { return (a.ownerDocument || a) !== F && wa(a), Aa(a, b) }; b.attr = function (a, b) {
                (a.ownerDocument ||
                    a) !== F && wa(a); var c = y.attrHandle[b.toLowerCase()]; c = c && R.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !T) : void 0; return void 0 !== c ? c : L.attributes || !T ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
            }; b.escape = function (a) { return (a + "").replace(ma, pa) }; b.error = function (a) { throw Error("Syntax error, unrecognized expression: " + a); }; b.uniqueSort = function (a) {
                var b, c = [], d = 0, e = 0; if (D = !L.detectDuplicates, ta = !L.sortStable && a.slice(0), a.sort(N), D) {
                    for (; b = a[e++];)b === a[e] && (d = c.push(e)); for (; d--;)a.splice(c[d],
                        1)
                } return ta = null, a
            }; var ja = b.getText = function (a) { var b, c = "", d = 0; if (b = a.nodeType) if (1 === b || 9 === b || 11 === b) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += ja(a) } else { if (3 === b || 4 === b) return a.nodeValue } else for (; b = a[d++];)c += ja(b); return c }; (y = b.selectors = {
                cacheLength: 50, createPseudo: d, match: X, attrHandle: {}, find: {}, relative: { "\x3e": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: {
                    ATTR: function (a) {
                        return a[1] =
                            a[1].replace(ea, fa), a[3] = (a[3] || a[4] || a[5] || "").replace(ea, fa), "~\x3d" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a }, PSEUDO: function (a) {
                        var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = ba(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0,
                            b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                }, filter: {
                    TAG: function (a) { var b = a.replace(ea, fa).toLowerCase(); return "*" === a ? function () { return !0 } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function (a) { var b = Gb[a + " "]; return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), Gb(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") })) }, ATTR: function (a, c, d) {
                        return function (e) {
                            e = b.attr(e,
                                a); return null == e ? "!\x3d" === c : !c || (e += "", "\x3d" === c ? e === d : "!\x3d" === c ? e !== d : "^\x3d" === c ? d && 0 === e.indexOf(d) : "*\x3d" === c ? d && -1 < e.indexOf(d) : "$\x3d" === c ? d && e.slice(-d.length) === d : "~\x3d" === c ? -1 < (" " + e.replace(da, " ") + " ").indexOf(d) : "|\x3d" === c && (e === d || e.slice(0, d.length + 1) === d + "-"))
                        }
                    }, CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode } : function (b, c, k) {
                            var l, m, t, n; c = f !== g ? "nextSibling" : "previousSibling"; var w =
                                b.parentNode, P = h && b.nodeName.toLowerCase(), I = !k && !h, p = !1; if (w) {
                                    if (f) { for (; c;) { for (t = b; t = t[c];)if (h ? t.nodeName.toLowerCase() === P : 1 === t.nodeType) return !1; var v = c = "only" === a && !v && "nextSibling" } return !0 } if (v = [g ? w.firstChild : w.lastChild], g && I) for (p = (n = (l = (k = (m = (t = w)[C] || (t[C] = {}))[t.uniqueID] || (m[t.uniqueID] = {}))[a] || [])[0] === A && l[1]) && l[2], t = n && w.childNodes[n]; t = ++n && t && t[c] || (p = n = 0) || v.pop();) { if (1 === t.nodeType && ++p && t === b) { k[a] = [A, n, p]; break } } else if (I && (p = n = (l = ((m = (t = b)[C] || (t[C] = {}))[t.uniqueID] ||
                                        (m[t.uniqueID] = {}))[a] || [])[0] === A && l[1]), !1 === p) for (; (t = ++n && t && t[c] || (p = n = 0) || v.pop()) && ((h ? t.nodeName.toLowerCase() !== P : 1 !== t.nodeType) || !++p || (I && ((k = (m = t[C] || (t[C] = {}))[t.uniqueID] || (m[t.uniqueID] = {}))[a] = [A, p]), t !== b));); return (p -= e) === d || 0 == p % d && 0 <= p / d
                                }
                        }
                    }, PSEUDO: function (a, c) {
                        var e, f = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); return f[C] ? f(c) : 1 < f.length ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;)a[d =
                                H(a, e[g])] = !(b[d] = e[g])
                        }) : function (a) { return f(a, 0, e) }) : f
                    }
                }, pseudos: {
                    not: d(function (a) { var b = [], c = [], e = Q(a.replace(S, "$1")); return e[C] ? d(function (a, b, c, d) { var f; c = e(a, null, d, []); for (d = a.length; d--;)(f = c[d]) && (a[d] = !(b[d] = f)) }) : function (a, d, f) { return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop() } }), has: d(function (a) { return function (c) { return 0 < b(a, c).length } }), contains: d(function (a) { return a = a.replace(ea, fa), function (b) { return -1 < (b.textContent || b.innerText || ja(b)).indexOf(a) } }), lang: d(function (a) {
                        return na.test(a ||
                            "") || b.error("unsupported lang: " + a), a = a.replace(ea, fa).toLowerCase(), function (b) { var c; do if (c = T ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 }
                    }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function (a) { return a === V }, focus: function (a) { return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: n(!1), disabled: n(!0),
                    checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType) return !1; return !0 }, parent: function (a) { return !y.pseudos.empty(a) }, header: function (a) { return qa.test(a.nodeName) }, input: function (a) { return oa.test(a.nodeName) }, button: function (a) {
                        var b = a.nodeName.toLowerCase(); return "input" === b && "button" ===
                            a.type || "button" === b
                    }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: m(function () { return [0] }), last: m(function (a, b) { return [b - 1] }), eq: m(function (a, b, c) { return [0 > c ? c + b : c] }), even: m(function (a, b) { for (var c = 0; c < b; c += 2)a.push(c); return a }), odd: m(function (a, b) { for (var c = 1; c < b; c += 2)a.push(c); return a }), lt: m(function (a, b, c) { for (b = 0 > c ? c + b : c; 0 <= --b;)a.push(b); return a }), gt: m(function (a, b, c) {
                        for (c = 0 > c ? c + b : c; ++c <
                            b;)a.push(c); return a
                    })
                }
            }).pseudos.nth = y.pseudos.eq; for (O in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) y.pseudos[O] = k(O); for (O in { submit: !0, reset: !0 }) y.pseudos[O] = l(O); v.prototype = y.filters = y.pseudos; y.setFilters = new v; var ba = b.tokenize = function (a, c) {
                var d, e, f, g, h; if (g = M[a + " "]) return c ? 0 : g.slice(0); g = a; var k = []; for (h = y.preFilter; g;) {
                    l && !(d = ha.exec(g)) || (d && (g = g.slice(d[0].length) || g), k.push(e = [])); var l = !1; (d = ia.exec(g)) && (l = d.shift(), e.push({ value: l, type: d[0].replace(S, " ") }), g = g.slice(l.length));
                    for (f in y.filter) !(d = X[f].exec(g)) || h[f] && !(d = h[f](d)) || (l = d.shift(), e.push({ value: l, type: f, matches: d }), g = g.slice(l.length)); if (!l) break
                } return c ? g.length : g ? b.error(a) : M(a, k).slice(0)
            }; return Q = b.compile = function (a, b) { var c, d = [], e = [], f = La[a + " "]; if (!f) { b || (b = ba(a)); for (c = b.length; c--;)(f = u(b[c]))[C] ? d.push(f) : e.push(f); (f = La(a, E(e, d))).selector = a } return f }, U = b.select = function (a, b, c, d) {
                var e, f, g, h, k, l = "function" == typeof a && a, m = !d && ba(a = l.selector || a); if (c = c || [], 1 === m.length) {
                    if (2 < (f = m[0] = m[0].slice(0)).length &&
                        "ID" === (g = f[0]).type && 9 === b.nodeType && T && y.relative[f[1].type]) { if (!(b = (y.find.ID(g.matches[0].replace(ea, fa), b) || [])[0])) return c; l && (b = b.parentNode); a = a.slice(f.shift().value.length) } for (e = X.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)if ((k = y.find[h]) && (d = k(g.matches[0].replace(ea, fa), ca.test(f[0].type) && w(b.parentNode) || b))) { if (f.splice(e, 1), !(a = d.length && p(f))) return sa.apply(c, d), c; break }
                } return (l || Q(a, m))(d, b, !T, c, !b || ca.test(a) && w(b.parentNode) || b), c
            }, L.sortStable =
                C.split("").sort(N).join("") === C, L.detectDuplicates = !!D, wa(), L.sortDetached = e(function (a) { return 1 & a.compareDocumentPosition(F.createElement("fieldset")) }), e(function (a) { return a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e", "#" === a.firstChild.getAttribute("href") }) || g("type|href|height|width", function (a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), L.attributes && e(function (a) { return a.innerHTML = "\x3cinput/\x3e", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) ||
                g("value", function (a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), e(function (a) { return null == a.getAttribute("disabled") }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, c) { var d; if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), b
    }(p); d.find = ha; d.expr = ha.selectors; d.expr[":"] = d.expr.pseudos; d.uniqueSort = d.unique = ha.uniqueSort; d.text = ha.getText;
    d.isXMLDoc = ha.isXML; d.contains = ha.contains; d.escapeSelector = ha.escape; var W = function (a, b, c) { for (var f = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType;)if (1 === a.nodeType) { if (e && d(a).is(c)) break; f.push(a) } return f }, Hb = function (a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c }, Ib = d.expr.match.needsContext, Jb = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; d.filter = function (a, b, c) {
        var f = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === f.nodeType ? d.find.matchesSelector(f,
            a) ? [f] : [] : d.find.matches(a, d.grep(b, function (a) { return 1 === a.nodeType }))
    }; d.fn.extend({
        find: function (a) { var b, c = this.length, f = this; if ("string" != typeof a) return this.pushStack(d(a).filter(function () { for (b = 0; b < c; b++)if (d.contains(f[b], this)) return !0 })); var e = this.pushStack([]); for (b = 0; b < c; b++)d.find(a, f[b], e); return 1 < c ? d.uniqueSort(e) : e }, filter: function (a) { return this.pushStack(Ra(this, a || [], !1)) }, not: function (a) { return this.pushStack(Ra(this, a || [], !0)) }, is: function (a) {
            return !!Ra(this, "string" == typeof a &&
                Ib.test(a) ? d(a) : a || [], !1).length
        }
    }); var pc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (d.fn.init = function (a, b, c) {
        var f, e; if (!a) return this; if (c = c || qc, "string" == typeof a) {
            if (!(f = "\x3c" === a[0] && "\x3e" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : pc.exec(a)) || !f[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (f[1]) {
                if (b = b instanceof d ? b[0] : b, d.merge(this, d.parseHTML(f[1], b && b.nodeType ? b.ownerDocument || b : q, !0)), Jb.test(f[1]) && d.isPlainObject(b)) for (f in b) r(this[f]) ? this[f](b[f]) : this.attr(f,
                    b[f]); return this
            } return (e = q.getElementById(f[2])) && (this[0] = e, this.length = 1), this
        } return a.nodeType ? (this[0] = a, this.length = 1, this) : r(a) ? void 0 !== c.ready ? c.ready(a) : a(d) : d.makeArray(a, this)
    }).prototype = d.fn; var qc = d(q); var rc = /^(?:parents|prev(?:Until|All))/, sc = { children: !0, contents: !0, next: !0, prev: !0 }; d.fn.extend({
        has: function (a) { var b = d(a, this), c = b.length; return this.filter(function () { for (var a = 0; a < c; a++)if (d.contains(this, b[a])) return !0 }) }, closest: function (a, b) {
            var c, f = 0, e = this.length, g = [], h = "string" !=
                typeof a && d(a); if (!Ib.test(a)) for (; f < e; f++)for (c = this[f]; c && c !== b; c = c.parentNode)if (11 > c.nodeType && (h ? -1 < h.index(c) : 1 === c.nodeType && d.find.matchesSelector(c, a))) { g.push(c); break } return this.pushStack(1 < g.length ? d.uniqueSort(g) : g)
        }, index: function (a) { return a ? "string" == typeof a ? ba.call(d(a), this[0]) : ba.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (a, b) { return this.pushStack(d.uniqueSort(d.merge(this.get(), d(a, b)))) }, addBack: function (a) {
            return this.add(null ==
                a ? this.prevObject : this.prevObject.filter(a))
        }
    }); d.each({
        parent: function (a) { return (a = a.parentNode) && 11 !== a.nodeType ? a : null }, parents: function (a) { return W(a, "parentNode") }, parentsUntil: function (a, b, c) { return W(a, "parentNode", c) }, next: function (a) { return hb(a, "nextSibling") }, prev: function (a) { return hb(a, "previousSibling") }, nextAll: function (a) { return W(a, "nextSibling") }, prevAll: function (a) { return W(a, "previousSibling") }, nextUntil: function (a, b, c) { return W(a, "nextSibling", c) }, prevUntil: function (a, b, c) {
            return W(a,
                "previousSibling", c)
        }, siblings: function (a) { return Hb((a.parentNode || {}).firstChild, a) }, children: function (a) { return Hb(a.firstChild) }, contents: function (a) { return N(a, "iframe") ? a.contentDocument : (N(a, "template") && (a = a.content || a), d.merge([], a.childNodes)) }
    }, function (a, b) { d.fn[a] = function (c, f) { var e = d.map(this, b, c); return "Until" !== a.slice(-5) && (f = c), f && "string" == typeof f && (e = d.filter(f, e)), 1 < this.length && (sc[a] || d.uniqueSort(e), rc.test(a) && e.reverse()), this.pushStack(e) } }); var R = /[^\x20\t\r\n\f]+/g;
    d.Callbacks = function (a) {
        a = "string" == typeof a ? Yb(a) : d.extend({}, a); var b, c, f, e, g = [], h = [], k = -1, l = function () { e = e || a.once; for (f = b = !0; h.length; k = -1)for (c = h.shift(); ++k < g.length;)!1 === g[k].apply(c[0], c[1]) && a.stopOnFalse && (k = g.length, c = !1); a.memory || (c = !1); b = !1; e && (g = c ? [] : "") }, n = {
            add: function () { return g && (c && !b && (k = g.length - 1, h.push(c)), function v(b) { d.each(b, function (b, c) { r(c) ? a.unique && n.has(c) || g.push(c) : c && c.length && "string" !== ia(c) && v(c) }) }(arguments), c && !b && l()), this }, remove: function () {
                return d.each(arguments,
                    function (a, b) { for (var c; -1 < (c = d.inArray(b, g, c));)g.splice(c, 1), c <= k && k-- }), this
            }, has: function (a) { return a ? -1 < d.inArray(a, g) : 0 < g.length }, empty: function () { return g && (g = []), this }, disable: function () { return e = h = [], g = c = "", this }, disabled: function () { return !g }, lock: function () { return e = h = [], c || b || (g = c = ""), this }, locked: function () { return !!e }, fireWith: function (a, c) { return e || (c = [a, (c = c || []).slice ? c.slice() : c], h.push(c), b || l()), this }, fire: function () { return n.fireWith(this, arguments), this }, fired: function () { return !!f }
        };
        return n
    }; d.extend({
        Deferred: function (a) {
            var b = [["notify", "progress", d.Callbacks("memory"), d.Callbacks("memory"), 2], ["resolve", "done", d.Callbacks("once memory"), d.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", d.Callbacks("once memory"), d.Callbacks("once memory"), 1, "rejected"]], c = "pending", f = {
                state: function () { return c }, always: function () { return e.done(arguments).fail(arguments), this }, "catch": function (a) { return f.then(null, a) }, pipe: function () {
                    var a = arguments; return d.Deferred(function (c) {
                        d.each(b,
                            function (b, d) { var f = r(a[d[4]]) && a[d[4]]; e[d[1]](function () { var a = f && f.apply(this, arguments); a && r(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[d[0] + "With"](this, f ? [a] : arguments) }) }); a = null
                    }).promise()
                }, then: function (a, c, e) {
                    function f(a, b, c, e) {
                        return function () {
                            var h = this, k = arguments, l = function () {
                                var d; if (!(a < g)) {
                                    if ((d = c.apply(h, k)) === b.promise()) throw new TypeError("Thenable self-resolution"); var l = d && ("object" == typeof d || "function" == typeof d) && d.then; r(l) ? e ? l.call(d,
                                        f(g, b, la, e), f(g, b, Ba, e)) : (g++, l.call(d, f(g, b, la, e), f(g, b, Ba, e), f(g, b, la, b.notifyWith))) : (c !== la && (h = void 0, k = [d]), (e || b.resolveWith)(h, k))
                                }
                            }, m = e ? l : function () { try { l() } catch (Fb) { d.Deferred.exceptionHook && d.Deferred.exceptionHook(Fb, m.stackTrace), a + 1 >= g && (c !== Ba && (h = void 0, k = [Fb]), b.rejectWith(h, k)) } }; a ? m() : (d.Deferred.getStackHook && (m.stackTrace = d.Deferred.getStackHook()), p.setTimeout(m))
                        }
                    } var g = 0; return d.Deferred(function (d) {
                        b[0][3].add(f(0, d, r(e) ? e : la, d.notifyWith)); b[1][3].add(f(0, d, r(a) ? a : la));
                        b[2][3].add(f(0, d, r(c) ? c : Ba))
                    }).promise()
                }, promise: function (a) { return null != a ? d.extend(a, f) : f }
            }, e = {}; return d.each(b, function (a, d) { var g = d[2], h = d[5]; f[d[1]] = g.add; h && g.add(function () { c = h }, b[3 - a][2].disable, b[3 - a][3].disable, b[0][2].lock, b[0][3].lock); g.add(d[3].fire); e[d[0]] = function () { return e[d[0] + "With"](this === e ? void 0 : this, arguments), this }; e[d[0] + "With"] = g.fireWith }), f.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = arguments.length, c = b, f = Array(c), e = S.call(arguments), g = d.Deferred(), h = function (a) {
                return function (c) {
                    f[a] =
                    this; e[a] = 1 < arguments.length ? S.call(arguments) : c; --b || g.resolveWith(f, e)
                }
            }; if (1 >= b && (ib(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r(e[c] && e[c].then))) return g.then(); for (; c--;)ib(e[c], h(c), g.reject); return g.promise()
        }
    }); var tc = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; d.Deferred.exceptionHook = function (a, b) { p.console && p.console.warn && a && tc.test(a.name) && p.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b) }; d.readyException = function (a) {
        p.setTimeout(function () {
            throw a;
        })
    }; var bb = d.Deferred(); d.fn.ready = function (a) { return bb.then(a)["catch"](function (a) { d.readyException(a) }), this }; d.extend({ isReady: !1, readyWait: 1, ready: function (a) { (!0 === a ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== a && 0 < --d.readyWait || bb.resolveWith(q, [d])) } }); d.ready.then = bb.then; "complete" === q.readyState || "loading" !== q.readyState && !q.documentElement.doScroll ? p.setTimeout(d.ready) : (q.addEventListener("DOMContentLoaded", Ca), p.addEventListener("load", Ca)); var Z = function (a, b, c, f, e, g, h) {
        var k = 0, l =
            a.length, n = null == c; if ("object" === ia(c)) for (k in e = !0, c) Z(a, b, k, c[k], !0, g, h); else if (void 0 !== f && (e = !0, r(f) || (h = !0), n && (h ? (b.call(a, f), b = null) : (n = b, b = function (a, b, c) { return n.call(d(a), c) })), b)) for (; k < l; k++)b(a[k], c, h ? f : f.call(a[k], k, b(a[k], c))); return e ? a : n ? b.call(a) : l ? b(a[0], c) : g
    }, $b = /^-ms-/, ac = /-([a-z])/g, Oa = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; ca.uid = 1; ca.prototype = {
        cache: function (a) {
            var b = a[this.expando]; return b || (b = {}, Oa(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a,
                this.expando, { value: b, configurable: !0 }))), b
        }, set: function (a, b, c) { var d; a = this.cache(a); if ("string" == typeof b) a[J(b)] = c; else for (d in b) a[J(d)] = b[d]; return a }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][J(b)] }, access: function (a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function (a, b) {
            var c = a[this.expando]; if (void 0 !== c) {
                if (void 0 !== b) {
                    var f = (b = Array.isArray(b) ? b.map(J) : (b = J(b)) in c ? [b] : b.match(R) ||
                        []).length; for (; f--;)delete c[b[f]]
                } (void 0 === b || d.isEmptyObject(c)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        }, hasData: function (a) { a = a[this.expando]; return void 0 !== a && !d.isEmptyObject(a) }
    }; var x = new ca, D = new ca, cc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, bc = /[A-Z]/g; d.extend({
        hasData: function (a) { return D.hasData(a) || x.hasData(a) }, data: function (a, b, c) { return D.access(a, b, c) }, removeData: function (a, b) { D.remove(a, b) }, _data: function (a, b, c) { return x.access(a, b, c) }, _removeData: function (a, b) {
            x.remove(a,
                b)
        }
    }); d.fn.extend({
        data: function (a, b) {
            var c, d, e, g = this[0], h = g && g.attributes; if (void 0 === a) { if (this.length && (e = D.get(g), 1 === g.nodeType && !x.get(g, "hasDataAttrs"))) { for (c = h.length; c--;)h[c] && 0 === (d = h[c].name).indexOf("data-") && (d = J(d.slice(5)), jb(g, d, e[d])); x.set(g, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function () { D.set(this, a) }) : Z(this, function (b) { var c; if (g && void 0 === b) { if (void 0 !== (c = D.get(g, a)) || void 0 !== (c = jb(g, a))) return c } else this.each(function () { D.set(this, a, b) }) }, null,
                b, 1 < arguments.length, null, !0)
        }, removeData: function (a) { return this.each(function () { D.remove(this, a) }) }
    }); d.extend({
        queue: function (a, b, c) { var f; if (a) return b = (b || "fx") + "queue", f = x.get(a, b), c && (!f || Array.isArray(c) ? f = x.access(a, b, d.makeArray(c)) : f.push(c)), f || [] }, dequeue: function (a, b) { b = b || "fx"; var c = d.queue(a, b), f = c.length, e = c.shift(), g = d._queueHooks(a, b), h = function () { d.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), f--); e && ("fx" === b && c.unshift("inprogress"), delete g.stop, e.call(a, h, g)); !f && g && g.empty.fire() },
        _queueHooks: function (a, b) { var c = b + "queueHooks"; return x.get(a, c) || x.access(a, c, { empty: d.Callbacks("once memory").add(function () { x.remove(a, [b + "queue", c]) }) }) }
    }); d.fn.extend({
        queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? d.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = d.queue(this, a, b); d._queueHooks(this, a); "fx" === a && "inprogress" !== c[0] && d.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { d.dequeue(this, a) }) }, clearQueue: function (a) {
            return this.queue(a ||
                "fx", [])
        }, promise: function (a, b) { var c, f = 1, e = d.Deferred(), g = this, h = this.length, k = function () { --f || e.resolveWith(g, [g]) }; "string" != typeof a && (b = a, a = void 0); for (a = a || "fx"; h--;)(c = x.get(g[h], a + "queueHooks")) && c.empty && (f++, c.empty.add(k)); return k(), e.promise(b) }
    }); var Kb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ma = new RegExp("^(?:([+-])\x3d|)(" + Kb + ")([a-z%]*)$", "i"), Y = ["Top", "Right", "Bottom", "Left"], Da = function (a, b) {
        return "none" === (a = b || a).style.display || "" === a.style.display && d.contains(a.ownerDocument,
            a) && "none" === d.css(a, "display")
    }, Lb = function (a, b, c, d) { var e, f = {}; for (e in b) f[e] = a.style[e], a.style[e] = b[e]; c = c.apply(a, d || []); for (e in b) a.style[e] = f[e]; return c }, lb = {}; d.fn.extend({ show: function () { return na(this, !0) }, hide: function () { return na(this) }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { Da(this) ? d(this).show() : d(this).hide() }) } }); var Mb = /^(?:checkbox|radio)$/i, nb = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ob = /^$|^module$|\/(?:java|ecma)script/i, K = {
        option: [1,
            "\x3cselect multiple\x3d'multiple'\x3e", "\x3c/select\x3e"], thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"], col: [2, "\x3ctable\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"], tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"], td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"], _default: [0, "", ""]
    }; K.optgroup = K.option; K.tbody = K.tfoot = K.colgroup = K.caption = K.thead; K.th = K.td; var dc = /<|&#?\w+;/; !function () {
        var a = q.createDocumentFragment().appendChild(q.createElement("div")),
        b = q.createElement("input"); b.setAttribute("type", "radio"); b.setAttribute("checked", "checked"); b.setAttribute("name", "t"); a.appendChild(b); u.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked; a.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e"; u.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    }(); var Pa = q.documentElement, uc = /^key/, vc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Nb = /^([^.]*)(?:\.(.+)|)/; d.event = {
        global: {}, add: function (a, b, c, f, e) {
            var g, h, k, l, n, m, p, v, r; if (n = x.get(a)) for (c.handler &&
                (c = (g = c).handler, e = g.selector), e && d.find.matchesSelector(Pa, e), c.guid || (c.guid = d.guid++), (l = n.events) || (l = n.events = {}), (h = n.handle) || (h = n.handle = function (b) { return "undefined" != typeof d && d.event.triggered !== b.type ? d.event.dispatch.apply(a, arguments) : void 0 }), n = (b = (b || "").match(R) || [""]).length; n--;) {
                    var q = r = (k = Nb.exec(b[n]) || [])[1]; k = (k[2] || "").split(".").sort(); q && (p = d.event.special[q] || {}, q = (e ? p.delegateType : p.bindType) || q, p = d.event.special[q] || {}, m = d.extend({
                        type: q, origType: r, data: f, handler: c, guid: c.guid,
                        selector: e, needsContext: e && d.expr.match.needsContext.test(e), namespace: k.join(".")
                    }, g), (v = l[q]) || ((v = l[q] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(a, f, k, h) || a.addEventListener && a.addEventListener(q, h)), p.add && (p.add.call(a, m), m.handler.guid || (m.handler.guid = c.guid)), e ? v.splice(v.delegateCount++, 0, m) : v.push(m), d.event.global[q] = !0)
            }
        }, remove: function (a, b, c, f, e) {
            var g, h, k, l, n, m, p, v, r = x.hasData(a) && x.get(a); if (r && (l = r.events)) {
                for (n = (b = (b || "").match(R) || [""]).length; n--;)if (k = Nb.exec(b[n]) || [],
                    m = v = k[1], p = (k[2] || "").split(".").sort(), m) { var q = d.event.special[m] || {}; var u = l[m = (f ? q.delegateType : q.bindType) || m] || []; k = k[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"); for (h = g = u.length; g--;) { var A = u[g]; !e && v !== A.origType || c && c.guid !== A.guid || k && !k.test(A.namespace) || f && f !== A.selector && ("**" !== f || !A.selector) || (u.splice(g, 1), A.selector && u.delegateCount--, q.remove && q.remove.call(a, A)) } h && !u.length && (q.teardown && !1 !== q.teardown.call(a, p, r.handle) || d.removeEvent(a, m, r.handle), delete l[m]) } else for (m in l) d.event.remove(a,
                        m + b[n], c, f, !0); d.isEmptyObject(l) && x.remove(a, "handle events")
            }
        }, dispatch: function (a) {
            var b = d.event.fix(a), c, f, e, g, h = Array(arguments.length); var k = (x.get(this, "events") || {})[b.type] || []; var l = d.event.special[b.type] || {}; h[0] = b; for (c = 1; c < arguments.length; c++)h[c] = arguments[c]; if (b.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, b)) {
                var n = d.event.handlers.call(this, b, k); for (c = 0; (e = n[c++]) && !b.isPropagationStopped();)for (b.currentTarget = e.elem, k = 0; (g = e.handlers[k++]) && !b.isImmediatePropagationStopped();)b.rnamespace &&
                    !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, void 0 !== (f = ((d.event.special[g.origType] || {}).handle || g.handler).apply(e.elem, h)) && !1 === (b.result = f) && (b.preventDefault(), b.stopPropagation())); return l.postDispatch && l.postDispatch.call(this, b), b.result
            }
        }, handlers: function (a, b) {
            var c, f, e, g = [], h = b.delegateCount, k = a.target; if (h && k.nodeType && !("click" === a.type && 1 <= a.button)) for (; k !== this; k = k.parentNode || this)if (1 === k.nodeType && ("click" !== a.type || !0 !== k.disabled)) {
                var l = []; var n = {}; for (c =
                    0; c < h; c++)void 0 === n[e = (f = b[c]).selector + " "] && (n[e] = f.needsContext ? -1 < d(e, this).index(k) : d.find(e, this, null, [k]).length), n[e] && l.push(f); l.length && g.push({ elem: k, handlers: l })
            } return k = this, h < b.length && g.push({ elem: k, handlers: b.slice(h) }), g
        }, addProp: function (a, b) {
            Object.defineProperty(d.Event.prototype, a, {
                enumerable: !0, configurable: !0, get: r(b) ? function () { if (this.originalEvent) return b(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[a] }, set: function (b) {
                    Object.defineProperty(this,
                        a, { enumerable: !0, configurable: !0, writable: !0, value: b })
                }
            })
        }, fix: function (a) { return a[d.expando] ? a : new d.Event(a) }, special: {
            load: { noBubble: !0 }, focus: { trigger: function () { if (this !== pb() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function () { if (this === pb() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1 }, _default: function (a) { return N(a.target, "a") } }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !==
                    a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }; d.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }; d.Event = function (a, b) {
        if (!(this instanceof d.Event)) return new d.Event(a, b); a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? Ea : X, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) :
            this.type = a; b && d.extend(this, b); this.timeStamp = a && a.timeStamp || Date.now(); this[d.expando] = !0
    }; d.Event.prototype = {
        constructor: d.Event, isDefaultPrevented: X, isPropagationStopped: X, isImmediatePropagationStopped: X, isSimulated: !1, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = Ea; a && !this.isSimulated && a.preventDefault() }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = Ea; a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function () {
            var a =
                this.originalEvent; this.isImmediatePropagationStopped = Ea; a && !this.isSimulated && a.stopImmediatePropagation(); this.stopPropagation()
        }
    }; d.each({
        altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (a) {
            var b = a.button;
            return null == a.which && uc.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && vc.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, d.event.addProp); d.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { d.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, e = a.relatedTarget, g = a.handleObj; return e && (e === this || d.contains(this, e)) || (a.type = g.origType, c = g.handler.apply(this, arguments), a.type = b), c } } }); d.fn.extend({
        on: function (a,
            b, c, d) { return Ta(this, a, b, c, d) }, one: function (a, b, c, d) { return Ta(this, a, b, c, d, 1) }, off: function (a, b, c) { var f, e; if (a && a.preventDefault && a.handleObj) return f = a.handleObj, d(a.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = X), this.each(function () { d.event.remove(this, a, c, b) }) }
    }); var wc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        xc = /<script|<style|<link/i, gc = /checked\s*(?:[^=]|=\s*.checked.)/i, hc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; d.extend({
            htmlPrefilter: function (a) { return a.replace(wc, "\x3c$1\x3e\x3c/$2\x3e") }, clone: function (a, b, c) {
                var f, e, g = a.cloneNode(!0), h = d.contains(a.ownerDocument, a); if (!(u.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a))) {
                    var k = z(g); var l = 0; for (f = (e = z(a)).length; l < f; l++) {
                        var n = e[l], m = k[l], p = m.nodeName.toLowerCase(); "input" === p && Mb.test(n.type) ? m.checked = n.checked : "input" !== p &&
                            "textarea" !== p || (m.defaultValue = n.defaultValue)
                    }
                } if (b) if (c) for (e = e || z(a), k = k || z(g), l = 0, f = e.length; l < f; l++)rb(e[l], k[l]); else rb(a, g); return 0 < (k = z(g, "script")).length && Sa(k, !h && z(a, "script")), g
            }, cleanData: function (a) { for (var b, c, f, e = d.event.special, g = 0; void 0 !== (c = a[g]); g++)if (Oa(c)) { if (b = c[x.expando]) { if (b.events) for (f in b.events) e[f] ? d.event.remove(c, f) : d.removeEvent(c, f, b.handle); c[x.expando] = void 0 } c[D.expando] && (c[D.expando] = void 0) } }
        }); d.fn.extend({
            detach: function (a) { return tb(this, a, !0) },
            remove: function (a) { return tb(this, a) }, text: function (a) { return Z(this, function (a) { return void 0 === a ? d.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function () { return oa(this, arguments, function (a) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qb(this, a).appendChild(a) }) }, prepend: function () {
                return oa(this, arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b =
                            qb(this, a); b.insertBefore(a, b.firstChild)
                    }
                })
            }, before: function () { return oa(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function () { return oa(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (d.cleanData(z(a, !1)), a.textContent = ""); return this }, clone: function (a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function () { return d.clone(this, a, b) }) },
            html: function (a) { return Z(this, function (a) { var b = this[0] || {}, f = 0, e = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !xc.test(a) && !K[(nb.exec(a) || ["", ""])[1].toLowerCase()]) { a = d.htmlPrefilter(a); try { for (; f < e; f++)1 === (b = this[f] || {}).nodeType && (d.cleanData(z(b, !1)), b.innerHTML = a); b = 0 } catch (g) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function () {
                var a = []; return oa(this, arguments, function (b) {
                    var c = this.parentNode; 0 > d.inArray(this, a) && (d.cleanData(z(this)),
                        c && c.replaceChild(b, this))
                }, a)
            }
        }); d.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { d.fn[a] = function (a) { for (var c = [], e = d(a), g = e.length - 1, h = 0; h <= g; h++)a = h === g ? this : this.clone(!0), d(e[h])[b](a), ab.apply(c, a.get()); return this.pushStack(c) } }); var Ua = new RegExp("^(" + Kb + ")(?!px)[a-z%]+$", "i"), Ga = function (a) { var b = a.ownerDocument.defaultView; return b && b.opener || (b = p), b.getComputedStyle(a) }, ic = new RegExp(Y.join("|"), "i"); !function () {
            function a() {
                if (k) {
                    h.style.cssText =
                    "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"; k.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"; Pa.appendChild(h).appendChild(k); var a = p.getComputedStyle(k); b = "1%" !== a.top; g = 12 === Math.round(parseFloat(a.marginLeft)); k.style.right = "60%"; e = 36 === Math.round(parseFloat(a.right)); c = 36 === Math.round(parseFloat(a.width)); k.style.position = "absolute"; f = 36 === k.offsetWidth || "absolute"; Pa.removeChild(h);
                    k = null
                }
            } var b, c, f, e, g, h = q.createElement("div"), k = q.createElement("div"); k.style && (k.style.backgroundClip = "content-box", k.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === k.style.backgroundClip, d.extend(u, { boxSizingReliable: function () { return a(), c }, pixelBoxStyles: function () { return a(), e }, pixelPosition: function () { return a(), b }, reliableMarginLeft: function () { return a(), g }, scrollboxSize: function () { return a(), f } }))
        }(); var yc = /^(none|table(?!-c[ea]).+)/, Ob = /^--/, zc = {
            position: "absolute",
            visibility: "hidden", display: "block"
        }, Pb = { letterSpacing: "0", fontWeight: "400" }, xb = ["Webkit", "Moz", "ms"], wb = q.createElement("div").style; d.extend({
            cssHooks: { opacity: { get: function (a, b) { if (b) return a = pa(a, "opacity"), "" === a ? "1" : a } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (a, b, c, f) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, g, h,
                    k = J(b), l = Ob.test(b), n = a.style; if (l || (b = vb(k)), h = d.cssHooks[b] || d.cssHooks[k], void 0 === c) return h && "get" in h && void 0 !== (e = h.get(a, !1, f)) ? e : n[b]; "string" == (g = typeof c) && (e = ma.exec(c)) && e[1] && (c = kb(a, b, e), g = "number"); null != c && c === c && ("number" === g && (c += e && e[3] || (d.cssNumber[k] ? "" : "px")), u.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (n[b] = "inherit"), h && "set" in h && void 0 === (c = h.set(a, c, f)) || (l ? n.setProperty(b, c) : n[b] = c))
                }
            }, css: function (a, b, c, f) {
                var e, g, h, k = J(b); return Ob.test(b) || (b = vb(k)), (h =
                    d.cssHooks[b] || d.cssHooks[k]) && "get" in h && (e = h.get(a, !0, c)), void 0 === e && (e = pa(a, b, f)), "normal" === e && b in Pb && (e = Pb[b]), "" === c || c ? (g = parseFloat(e), !0 === c || isFinite(g) ? g || 0 : e) : e
            }
        }); d.each(["height", "width"], function (a, b) {
            d.cssHooks[b] = {
                get: function (a, f, e) { if (f) return !yc.test(d.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? zb(a, b, e) : Lb(a, zc, function () { return zb(a, b, e) }) }, set: function (a, f, e) {
                    var c, h = Ga(a), k = "border-box" === d.css(a, "boxSizing", !1, h); e = e && Va(a, b, e, k, h); return k &&
                        u.scrollboxSize() === h.position && (e -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(h[b]) - Va(a, b, "border", !1, h) - .5)), e && (c = ma.exec(f)) && "px" !== (c[3] || "px") && (a.style[b] = f, f = d.css(a, b)), yb(a, f, e)
                }
            }
        }); d.cssHooks.marginLeft = ub(u.reliableMarginLeft, function (a, b) { if (b) return (parseFloat(pa(a, "marginLeft")) || a.getBoundingClientRect().left - Lb(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left })) + "px" }); d.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
            d.cssHooks[a + b] =
            { expand: function (c) { var d = 0, e = {}; for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + Y[d] + b] = c[d] || c[d - 2] || c[0]; return e } }; "margin" !== a && (d.cssHooks[a + b].set = yb)
        }); d.fn.extend({ css: function (a, b) { return Z(this, function (a, b, e) { var c, f = {}, k = 0; if (Array.isArray(b)) { e = Ga(a); for (c = b.length; k < c; k++)f[b[k]] = d.css(a, b[k], !1, e); return f } return void 0 !== e ? d.style(a, b, e) : d.css(a, b) }, a, b, 1 < arguments.length) } }); d.Tween = A; A.prototype = {
            constructor: A, init: function (a, b, c, f, e, g) {
                this.elem = a; this.prop = c; this.easing =
                    e || d.easing._default; this.options = b; this.start = this.now = this.cur(); this.end = f; this.unit = g || (d.cssNumber[c] ? "" : "px")
            }, cur: function () { var a = A.propHooks[this.prop]; return a && a.get ? a.get(this) : A.propHooks._default.get(this) }, run: function (a) {
                var b, c = A.propHooks[this.prop]; return this.options.duration ? this.pos = b = d.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now,
                    this), c && c.set ? c.set(this) : A.propHooks._default.set(this), this
            }
        }; A.prototype.init.prototype = A.prototype; A.propHooks = { _default: { get: function (a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = d.css(a.elem, a.prop, "")) && "auto" !== b ? b : 0 }, set: function (a) { d.fx.step[a.prop] ? d.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[d.cssProps[a.prop]] && !d.cssHooks[a.prop] ? a.elem[a.prop] = a.now : d.style(a.elem, a.prop, a.now + a.unit) } } }; A.propHooks.scrollTop =
            A.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }; d.easing = { linear: function (a) { return a }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }; d.fx = A.prototype.init; d.fx.step = {}; var qa, Ha, Ac = /^(?:toggle|show|hide)$/, Bc = /queueHooks$/; d.Animation = d.extend(M, {
                tweeners: { "*": [function (a, b) { var c = this.createTween(a, b); return kb(c.elem, a, ma.exec(b), c), c }] }, tweener: function (a, b) {
                    r(a) ? (b = a, a = ["*"]) : a = a.match(R); for (var c, d = 0, e = a.length; d < e; d++)c =
                        a[d], M.tweeners[c] = M.tweeners[c] || [], M.tweeners[c].unshift(b)
                }, prefilters: [function (a, b, c) {
                    var f, e, g, h, k, l, n, m = "width" in b || "height" in b, p = this, v = {}, q = a.style, r = a.nodeType && Da(a), u = x.get(a, "fxshow"); c.queue || (null == (h = d._queueHooks(a, "fx")).unqueued && (h.unqueued = 0, k = h.empty.fire, h.empty.fire = function () { h.unqueued || k() }), h.unqueued++, p.always(function () { p.always(function () { h.unqueued--; d.queue(a, "fx").length || h.empty.fire() }) })); for (f in b) if (e = b[f], Ac.test(e)) {
                        if (delete b[f], g = g || "toggle" === e, e ===
                            (r ? "hide" : "show")) { if ("show" !== e || !u || void 0 === u[f]) continue; r = !0 } v[f] = u && u[f] || d.style(a, f)
                    } if ((b = !d.isEmptyObject(b)) || !d.isEmptyObject(v)) for (f in m && 1 === a.nodeType && (c.overflow = [q.overflow, q.overflowX, q.overflowY], null == (l = u && u.display) && (l = x.get(a, "display")), "none" === (n = d.css(a, "display")) && (l ? n = l : (na([a], !0), l = a.style.display || l, n = d.css(a, "display"), na([a]))), ("inline" === n || "inline-block" === n && null != l) && "none" === d.css(a, "float") && (b || (p.done(function () { q.display = l }), null == l && (n = q.display, l =
                        "none" === n ? "" : n)), q.display = "inline-block")), c.overflow && (q.overflow = "hidden", p.always(function () { q.overflow = c.overflow[0]; q.overflowX = c.overflow[1]; q.overflowY = c.overflow[2] })), b = !1, v) b || (u ? "hidden" in u && (r = u.hidden) : u = x.access(a, "fxshow", { display: l }), g && (u.hidden = !r), r && na([a], !0), p.done(function () { r || na([a]); x.remove(a, "fxshow"); for (f in v) d.style(a, f, v[f]) })), b = Bb(r ? u[f] : 0, f, p), f in u || (u[f] = b.start, r && (b.end = b.start, b.start = 0))
                }], prefilter: function (a, b) { b ? M.prefilters.unshift(a) : M.prefilters.push(a) }
            });
    d.speed = function (a, b, c) { var f = a && "object" == typeof a ? d.extend({}, a) : { complete: c || !c && b || r(a) && a, duration: a, easing: c && b || b && !r(b) && b }; return d.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration in d.fx.speeds ? f.duration = d.fx.speeds[f.duration] : f.duration = d.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function () { r(f.old) && f.old.call(this); f.queue && d.dequeue(this, f.queue) }, f }; d.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(Da).css("opacity",
                0).show().end().animate({ opacity: b }, a, c, d)
        }, animate: function (a, b, c, f) { var e = d.isEmptyObject(a), g = d.speed(b, c, f); b = function () { var b = M(this, d.extend({}, a), g); (e || x.get(this, "finish")) && b.stop(!0) }; return b.finish = b, e || !1 === g.queue ? this.each(b) : this.queue(g.queue, b) }, stop: function (a, b, c) {
            var f = function (a) { var b = a.stop; delete a.stop; b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                var b = !0, g = null != a && a + "queueHooks", h = d.timers, k = x.get(this); if (g) k[g] &&
                    k[g].stop && f(k[g]); else for (g in k) k[g] && k[g].stop && Bc.test(g) && f(k[g]); for (g = h.length; g--;)h[g].elem !== this || null != a && h[g].queue !== a || (h[g].anim.stop(c), b = !1, h.splice(g, 1)); !b && c || d.dequeue(this, a)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var b = x.get(this), c = b[a + "queue"]; var f = b[a + "queueHooks"]; var e = d.timers, g = c ? c.length : 0; b.finish = !0; d.queue(this, a, []); f && f.stop && f.stop.call(this, !0); for (f = e.length; f--;)e[f].elem === this && e[f].queue === a && (e[f].anim.stop(!0), e.splice(f,
                    1)); for (f = 0; f < g; f++)c[f] && c[f].finish && c[f].finish.call(this); delete b.finish
            })
        }
    }); d.each(["toggle", "show", "hide"], function (a, b) { var c = d.fn[b]; d.fn[b] = function (a, d, g) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ia(b, !0), a, d, g) } }); d.each({ slideDown: Ia("show"), slideUp: Ia("hide"), slideToggle: Ia("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { d.fn[a] = function (a, d, e) { return this.animate(b, a, d, e) } }); d.timers = []; d.fx.tick =
        function () { var a, b = 0, c = d.timers; for (qa = Date.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1); c.length || d.fx.stop(); qa = void 0 }; d.fx.timer = function (a) { d.timers.push(a); d.fx.start() }; d.fx.interval = 13; d.fx.start = function () { Ha || (Ha = !0, Wa()) }; d.fx.stop = function () { Ha = null }; d.fx.speeds = { slow: 600, fast: 200, _default: 400 }; d.fn.delay = function (a, b) { return a = d.fx ? d.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, d) { var c = p.setTimeout(b, a); d.stop = function () { p.clearTimeout(c) } }) }; (function () {
            var a = q.createElement("input"),
            b = q.createElement("select").appendChild(q.createElement("option")); a.type = "checkbox"; u.checkOn = "" !== a.value; u.optSelected = b.selected; (a = q.createElement("input")).value = "t"; a.type = "radio"; u.radioValue = "t" === a.value
        })(); var ua = d.expr.attrHandle; d.fn.extend({ attr: function (a, b) { return Z(this, d.attr, a, b, 1 < arguments.length) }, removeAttr: function (a) { return this.each(function () { d.removeAttr(this, a) }) } }); d.extend({
            attr: function (a, b, c) {
                var f, e, g = a.nodeType; if (3 !== g && 8 !== g && 2 !== g) return "undefined" == typeof a.getAttribute ?
                    d.prop(a, b, c) : (1 === g && d.isXMLDoc(a) || (e = d.attrHooks[b.toLowerCase()] || (d.expr.match.bool.test(b) ? Cc : void 0)), void 0 !== c ? null === c ? void d.removeAttr(a, b) : e && "set" in e && void 0 !== (f = e.set(a, c, b)) ? f : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (f = e.get(a, b)) ? f : null == (f = d.find.attr(a, b)) ? void 0 : f)
            }, attrHooks: { type: { set: function (a, b) { if (!u.radioValue && "radio" === b && N(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function (a, b) {
                var c = 0, d = b && b.match(R); if (d && 1 ===
                    a.nodeType) for (; b = d[c++];)a.removeAttribute(b)
            }
        }); var Cc = { set: function (a, b, c) { return !1 === b ? d.removeAttr(a, c) : a.setAttribute(c, c), c } }; d.each(d.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = ua[b] || d.find.attr; ua[b] = function (a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = ua[g], ua[g] = e, e = null != c(a, b, d) ? g : null, ua[g] = f), e } }); var Dc = /^(?:input|select|textarea|button)$/i, Ec = /^(?:a|area)$/i; d.fn.extend({
            prop: function (a, b) { return Z(this, d.prop, a, b, 1 < arguments.length) }, removeProp: function (a) {
                return this.each(function () {
                    delete this[d.propFix[a] ||
                    a]
                })
            }
        }); d.extend({ prop: function (a, b, c) { var f, e, g = a.nodeType; if (3 !== g && 8 !== g && 2 !== g) return 1 === g && d.isXMLDoc(a) || (b = d.propFix[b] || b, e = d.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (f = e.set(a, c, b)) ? f : a[b] = c : e && "get" in e && null !== (f = e.get(a, b)) ? f : a[b] }, propHooks: { tabIndex: { get: function (a) { var b = d.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : Dc.test(a.nodeName) || Ec.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }); u.optSelected || (d.propHooks.selected = {
            get: function (a) {
                a =
                a.parentNode; return a && a.parentNode && a.parentNode.selectedIndex, null
            }, set: function (a) { a = a.parentNode; a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex) }
        }); d.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () { d.propFix[this.toLowerCase()] = this }); d.fn.extend({
            addClass: function (a) {
                var b, c, f, e, g, h, k, l = 0; if (r(a)) return this.each(function (b) { d(this).addClass(a.call(this, b, H(this))) }); if ((b = Xa(a)).length) for (; c = this[l++];)if (e =
                    H(c), f = 1 === c.nodeType && " " + aa(e) + " ") { for (h = 0; g = b[h++];)0 > f.indexOf(" " + g + " ") && (f += g + " "); e !== (k = aa(f)) && c.setAttribute("class", k) } return this
            }, removeClass: function (a) {
                var b, c, f, e, g, h, k, l = 0; if (r(a)) return this.each(function (b) { d(this).removeClass(a.call(this, b, H(this))) }); if (!arguments.length) return this.attr("class", ""); if ((b = Xa(a)).length) for (; c = this[l++];)if (e = H(c), f = 1 === c.nodeType && " " + aa(e) + " ") {
                    for (h = 0; g = b[h++];)for (; -1 < f.indexOf(" " + g + " ");)f = f.replace(" " + g + " ", " "); e !== (k = aa(f)) && c.setAttribute("class",
                        k)
                } return this
            }, toggleClass: function (a, b) {
                var c = typeof a, f = "string" === c || Array.isArray(a); return "boolean" == typeof b && f ? b ? this.addClass(a) : this.removeClass(a) : r(a) ? this.each(function (c) { d(this).toggleClass(a.call(this, c, H(this), b), b) }) : this.each(function () {
                    var b, g; if (f) { var h = 0; var k = d(this); for (g = Xa(a); b = g[h++];)k.hasClass(b) ? k.removeClass(b) : k.addClass(b) } else void 0 !== a && "boolean" !== c || ((b = H(this)) && x.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : x.get(this,
                        "__className__") || ""))
                })
            }, hasClass: function (a) { var b, c = 0; for (a = " " + a + " "; b = this[c++];)if (1 === b.nodeType && -1 < (" " + aa(H(b)) + " ").indexOf(a)) return !0; return !1 }
        }); var Fc = /\r/g; d.fn.extend({
            val: function (a) {
                var b, c, f, e = this[0]; if (arguments.length) return f = r(a), this.each(function (c) {
                    var e; 1 === this.nodeType && (null == (e = f ? a.call(this, c, d(this).val()) : a) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = d.map(e, function (a) { return null == a ? "" : a + "" })), (b = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                }); if (e) return (b = d.valHooks[e.type] || d.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : "string" == typeof (c = e.value) ? c.replace(Fc, "") : null == c ? "" : c
            }
        }); d.extend({
            valHooks: {
                option: { get: function (a) { var b = d.find.attr(a, "value"); return null != b ? b : aa(d.text(a)) } }, select: {
                    get: function (a) {
                        var b, c, f = a.options, e = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], k = g ? e + 1 : f.length; for (c = 0 > e ? k : g ? e : 0; c < k; c++)if (!(!(b = f[c]).selected &&
                            c !== e || b.disabled || b.parentNode.disabled && N(b.parentNode, "optgroup"))) { if (a = d(b).val(), g) return a; h.push(a) } return h
                    }, set: function (a, b) { var c, f, e = a.options; b = d.makeArray(b); for (var g = e.length; g--;)((f = e[g]).selected = -1 < d.inArray(d.valHooks.option.get(f), b)) && (c = !0); return c || (a.selectedIndex = -1), b }
                }
            }
        }); d.each(["radio", "checkbox"], function () {
            d.valHooks[this] = { set: function (a, b) { if (Array.isArray(b)) return a.checked = -1 < d.inArray(d(a).val(), b) } }; u.checkOn || (d.valHooks[this].get = function (a) {
                return null ===
                    a.getAttribute("value") ? "on" : a.value
            })
        }); u.focusin = "onfocusin" in p; var Qb = /^(?:focusinfocus|focusoutblur)$/, Rb = function (a) { a.stopPropagation() }; d.extend(d.event, {
            trigger: function (a, b, c, f) {
                var e, g, h, k, l, n, m = [c || q], w = Ja.call(a, "type") ? a.type : a; var v = Ja.call(a, "namespace") ? a.namespace.split(".") : []; if (e = n = g = c = c || q, 3 !== c.nodeType && 8 !== c.nodeType && !Qb.test(w + d.event.triggered) && (-1 < w.indexOf(".") && (w = (v = w.split(".")).shift(), v.sort()), h = 0 > w.indexOf(":") && "on" + w, a = a[d.expando] ? a : new d.Event(w, "object" ==
                    typeof a && a), a.isTrigger = f ? 2 : 3, a.namespace = v.join("."), a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : d.makeArray(b, [a]), l = d.event.special[w] || {}, f || !l.trigger || !1 !== l.trigger.apply(c, b))) {
                        if (!f && !l.noBubble && !ka(c)) { var u = l.delegateType || w; for (Qb.test(u + w) || (e = e.parentNode); e; e = e.parentNode)m.push(e), g = e; g === (c.ownerDocument || q) && m.push(g.defaultView || g.parentWindow || p) } for (v = 0; (e = m[v++]) && !a.isPropagationStopped();)n =
                            e, a.type = 1 < v ? u : l.bindType || w, (k = (x.get(e, "events") || {})[a.type] && x.get(e, "handle")) && k.apply(e, b), (k = h && e[h]) && k.apply && Oa(e) && (a.result = k.apply(e, b), !1 === a.result && a.preventDefault()); return a.type = w, f || a.isDefaultPrevented() || l._default && !1 !== l._default.apply(m.pop(), b) || !Oa(c) || h && r(c[w]) && !ka(c) && ((g = c[h]) && (c[h] = null), d.event.triggered = w, a.isPropagationStopped() && n.addEventListener(w, Rb), c[w](), a.isPropagationStopped() && n.removeEventListener(w, Rb), d.event.triggered = void 0, g && (c[h] = g)), a.result
                }
            },
            simulate: function (a, b, c) { a = d.extend(new d.Event, c, { type: a, isSimulated: !0 }); d.event.trigger(a, null, b) }
        }); d.fn.extend({ trigger: function (a, b) { return this.each(function () { d.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { var c = this[0]; if (c) return d.event.trigger(a, b, c, !0) } }); u.focusin || d.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
            var c = function (a) { d.event.simulate(b, a.target, d.event.fix(a)) }; d.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this, e = x.access(d, b); e || d.addEventListener(a,
                        c, !0); x.access(d, b, (e || 0) + 1)
                }, teardown: function () { var d = this.ownerDocument || this, e = x.access(d, b) - 1; e ? x.access(d, b, e) : (d.removeEventListener(a, c, !0), x.remove(d, b)) }
            }
        }); var xa = p.location, Sb = Date.now(), cb = /\?/; d.parseXML = function (a) { if (!a || "string" != typeof a) return null; try { var b = (new p.DOMParser).parseFromString(a, "text/xml") } catch (c) { b = void 0 } return b && !b.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + a), b }; var kc = /\[\]$/, Tb = /\r?\n/g, Gc = /^(?:submit|button|image|reset|file)$/i,
            Hc = /^(?:input|select|textarea|keygen)/i; d.param = function (a, b) { var c, f = [], e = function (a, b) { b = r(b) ? b() : b; f[f.length] = encodeURIComponent(a) + "\x3d" + encodeURIComponent(null == b ? "" : b) }; if (Array.isArray(a) || a.jquery && !d.isPlainObject(a)) d.each(a, function () { e(this.name, this.value) }); else for (c in a) Ya(c, a[c], b, e); return f.join("\x26") }; d.fn.extend({
                serialize: function () { return d.param(this.serializeArray()) }, serializeArray: function () {
                    return this.map(function () {
                        var a = d.prop(this, "elements"); return a ? d.makeArray(a) :
                            this
                    }).filter(function () { var a = this.type; return this.name && !d(this).is(":disabled") && Hc.test(this.nodeName) && !Gc.test(a) && (this.checked || !Mb.test(a)) }).map(function (a, b) { a = d(this).val(); return null == a ? null : Array.isArray(a) ? d.map(a, function (a) { return { name: b.name, value: a.replace(Tb, "\r\n") } }) : { name: b.name, value: a.replace(Tb, "\r\n") } }).get()
                }
            }); var Ic = /%20/g, Jc = /#.*$/, Kc = /([?&])_=[^&]*/, Lc = /^(.*?):[ \t]*([^\r\n]*)$/gm, Mc = /^(?:GET|HEAD)$/, Nc = /^\/\//, Ub = {}, Za = {}, Vb = "*/".concat("*"), db = q.createElement("a");
    db.href = xa.href; d.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: xa.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xa.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8", accepts: { "*": Vb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: {
                xml: "responseXML", text: "responseText",
                json: "responseJSON"
            }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": d.parseXML }, flatOptions: { url: !0, context: !0 }
        }, ajaxSetup: function (a, b) { return b ? $a($a(a, d.ajaxSettings), b) : $a(d.ajaxSettings, a) }, ajaxPrefilter: Cb(Ub), ajaxTransport: Cb(Za), ajax: function (a, b) {
            function c(a, b, c, g) {
                var l, n, q, w = b; if (!y) {
                    y = !0; h && p.clearTimeout(h); f = void 0; e = g || ""; E.readyState = 0 < a ? 4 : 0; g = 200 <= a && 300 > a || 304 === a; if (c) {
                        var B = m; for (var Q = E, z, D, C, G, J = B.contents, U = B.dataTypes; "*" === U[0];)U.shift(), void 0 ===
                            z && (z = B.mimeType || Q.getResponseHeader("Content-Type")); if (z) for (D in J) if (J[D] && J[D].test(z)) { U.unshift(D); break } if (U[0] in c) C = U[0]; else { for (D in c) { if (!U[0] || B.converters[D + " " + U[0]]) { C = D; break } G || (G = D) } C = C || G } c = C ? (C !== U[0] && U.unshift(C), c[C]) : void 0; B = c
                    } a: {
                        c = m; z = B; D = E; C = g; var H, N, K; B = {}; Q = c.dataTypes.slice(); if (Q[1]) for (H in c.converters) B[H.toLowerCase()] = c.converters[H]; for (G = Q.shift(); G;)if (c.responseFields[G] && (D[c.responseFields[G]] = z), !K && C && c.dataFilter && (z = c.dataFilter(z, c.dataType)), K =
                            G, G = Q.shift()) if ("*" === G) G = K; else if ("*" !== K && K !== G) { if (!(H = B[K + " " + G] || B["* " + G])) for (M in B) if ((N = M.split(" "))[1] === G && (H = B[K + " " + N[0]] || B["* " + N[0]])) { !0 === H ? H = B[M] : !0 !== B[M] && (G = N[0], Q.unshift(N[1])); break } if (!0 !== H) if (H && c["throws"]) z = H(z); else try { z = H(z) } catch (oc) { var M = { state: "parsererror", error: H ? oc : "No conversion from " + K + " to " + G }; break a } } M = { state: "success", data: z }
                    } B = M; g ? (m.ifModified && ((q = E.getResponseHeader("Last-Modified")) && (d.lastModified[O] = q), (q = E.getResponseHeader("etag")) && (d.etag[O] =
                        q)), 204 === a || "HEAD" === m.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = B.state, l = B.data, g = !(n = B.error))) : (n = w, !a && w || (w = "error", 0 > a && (a = 0))); E.status = a; E.statusText = (b || w) + ""; g ? u.resolveWith(r, [l, w, E]) : u.rejectWith(r, [E, w, n]); E.statusCode(A); A = void 0; k && v.trigger(g ? "ajaxSuccess" : "ajaxError", [E, m, g ? l : n]); x.fireWith(r, [E, w]); k && (v.trigger("ajaxComplete", [E, m]), --d.active || d.event.trigger("ajaxStop"))
                }
            } "object" == typeof a && (b = a, a = void 0); b = b || {}; var f, e, g, h, k, l, n, m = d.ajaxSetup({}, b), r = m.context || m, v = m.context &&
                (r.nodeType || r.jquery) ? d(r) : d.event, u = d.Deferred(), x = d.Callbacks("once memory"), A = m.statusCode || {}, z = {}, D = {}, J = "canceled", E = {
                    readyState: 0, getResponseHeader: function (a) { var b; if (y) { if (!g) for (g = {}; b = Lc.exec(e);)g[b[1].toLowerCase()] = b[2]; b = g[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function () { return y ? e : null }, setRequestHeader: function (a, b) { return null == y && (a = D[a.toLowerCase()] = D[a.toLowerCase()] || a, z[a] = b), this }, overrideMimeType: function (a) { return null == y && (m.mimeType = a), this },
                    statusCode: function (a) { var b; if (a) if (y) E.always(a[E.status]); else for (b in a) A[b] = [A[b], a[b]]; return this }, abort: function (a) { a = a || J; return f && f.abort(a), c(0, a), this }
                }; if (u.promise(E), m.url = ((a || m.url || xa.href) + "").replace(Nc, xa.protocol + "//"), m.type = b.method || b.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(R) || [""], null == m.crossDomain) {
                    a = q.createElement("a"); try { a.href = m.url, a.href = a.href, m.crossDomain = db.protocol + "//" + db.host != a.protocol + "//" + a.host } catch (Q) {
                        m.crossDomain =
                        !0
                    }
                } if (m.data && m.processData && "string" != typeof m.data && (m.data = d.param(m.data, m.traditional)), Db(Ub, m, b, E), y) return E; (k = d.event && m.global) && 0 == d.active++ && d.event.trigger("ajaxStart"); m.type = m.type.toUpperCase(); m.hasContent = !Mc.test(m.type); var O = m.url.replace(Jc, ""); m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ic, "+")) : (n = m.url.slice(O.length), m.data && (m.processData || "string" == typeof m.data) && (O += (cb.test(O) ? "\x26" :
                    "?") + m.data, delete m.data), !1 === m.cache && (O = O.replace(Kc, "$1"), n = (cb.test(O) ? "\x26" : "?") + "_\x3d" + Sb++ + n), m.url = O + n); m.ifModified && (d.lastModified[O] && E.setRequestHeader("If-Modified-Since", d.lastModified[O]), d.etag[O] && E.setRequestHeader("If-None-Match", d.etag[O])); (m.data && m.hasContent && !1 !== m.contentType || b.contentType) && E.setRequestHeader("Content-Type", m.contentType); E.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Vb +
                        "; q\x3d0.01" : "") : m.accepts["*"]); for (l in m.headers) E.setRequestHeader(l, m.headers[l]); if (m.beforeSend && (!1 === m.beforeSend.call(r, E, m) || y)) return E.abort(); if (J = "abort", x.add(m.complete), E.done(m.success), E.fail(m.error), f = Db(Za, m, b, E)) { if (E.readyState = 1, k && v.trigger("ajaxSend", [E, m]), y) return E; m.async && 0 < m.timeout && (h = p.setTimeout(function () { E.abort("timeout") }, m.timeout)); try { var y = !1; f.send(z, c) } catch (Q) { if (y) throw Q; c(-1, Q) } } else c(-1, "No Transport"); return E
        }, getJSON: function (a, b, c) {
            return d.get(a,
                b, c, "json")
        }, getScript: function (a, b) { return d.get(a, void 0, b, "script") }
    }); d.each(["get", "post"], function (a, b) { d[b] = function (a, f, e, g) { return r(f) && (g = g || e, e = f, f = void 0), d.ajax(d.extend({ url: a, type: b, dataType: g, data: f, success: e }, d.isPlainObject(a) && a)) } }); d._evalUrl = function (a) { return d.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }; d.fn.extend({
        wrapAll: function (a) {
            var b; return this[0] && (r(a) && (a = a.call(this[0])), b = d(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode &&
                b.insertBefore(this[0]), b.map(function () { for (var a = this; a.firstElementChild;)a = a.firstElementChild; return a }).append(this)), this
        }, wrapInner: function (a) { return r(a) ? this.each(function (b) { d(this).wrapInner(a.call(this, b)) }) : this.each(function () { var b = d(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function (a) { var b = r(a); return this.each(function (c) { d(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function (a) {
            return this.parent(a).not("body").each(function () { d(this).replaceWith(this.childNodes) }),
                this
        }
    }); d.expr.pseudos.hidden = function (a) { return !d.expr.pseudos.visible(a) }; d.expr.pseudos.visible = function (a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }; d.ajaxSettings.xhr = function () { try { return new p.XMLHttpRequest } catch (a) { } }; var Oc = { 0: 200, 1223: 204 }, ya = d.ajaxSettings.xhr(); u.cors = !!ya && "withCredentials" in ya; u.ajax = ya = !!ya; d.ajaxTransport(function (a) {
        var b, c; if (u.cors || ya && !a.crossDomain) return {
            send: function (d, e) {
                var f, h = a.xhr(); if (h.open(a.type, a.url, a.async, a.username,
                    a.password), a.xhrFields) for (f in a.xhrFields) h[f] = a.xhrFields[f]; a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType); a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest"); for (f in d) h.setRequestHeader(f, d[f]); b = function (a) {
                        return function () {
                            b && (b = c = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? e(0, "error") : e(h.status, h.statusText) : e(Oc[h.status] || h.status, h.statusText, "text" !== (h.responseType ||
                                "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()))
                        }
                    }; h.onload = b(); c = h.onerror = h.ontimeout = b("error"); void 0 !== h.onabort ? h.onabort = c : h.onreadystatechange = function () { 4 === h.readyState && p.setTimeout(function () { b && c() }) }; b = b("abort"); try { h.send(a.hasContent && a.data || null) } catch (k) { if (b) throw k; }
            }, abort: function () { b && b() }
        }
    }); d.ajaxPrefilter(function (a) { a.crossDomain && (a.contents.script = !1) }); d.ajaxSetup({
        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
        contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) { return d.globalEval(a), a } }
    }); d.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1); a.crossDomain && (a.type = "GET") }); d.ajaxTransport("script", function (a) { if (a.crossDomain) { var b, c; return { send: function (f, e) { b = d("\x3cscript\x3e").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) { b.remove(); c = null; a && e("error" === a.type ? 404 : 200, a.type) }); q.head.appendChild(b[0]) }, abort: function () { c && c() } } } });
    var Wb = [], eb = /(=)\?(?=&|$)|\?\?/; d.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Wb.pop() || d.expando + "_" + Sb++; return this[a] = !0, a } }); d.ajaxPrefilter("json jsonp", function (a, b, c) {
        var f, e, g, h = !1 !== a.jsonp && (eb.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && eb.test(a.data) && "data"); if (h || "jsonp" === a.dataTypes[0]) return f = a.jsonpCallback = r(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace(eb, "$1" + f) : !1 !==
            a.jsonp && (a.url += (cb.test(a.url) ? "\x26" : "?") + a.jsonp + "\x3d" + f), a.converters["script json"] = function () { return g || d.error(f + " was not called"), g[0] }, a.dataTypes[0] = "json", e = p[f], p[f] = function () { g = arguments }, c.always(function () { void 0 === e ? d(p).removeProp(f) : p[f] = e; a[f] && (a.jsonpCallback = b.jsonpCallback, Wb.push(f)); g && r(e) && e(g[0]); g = e = void 0 }), "script"
    }); u.createHTMLDocument = function () {
        var a = q.implementation.createHTMLDocument("").body; return a.innerHTML = "\x3cform\x3e\x3c/form\x3e\x3cform\x3e\x3c/form\x3e",
            2 === a.childNodes.length
    }(); d.parseHTML = function (a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var f, e, g; return b || (u.createHTMLDocument ? ((f = (b = q.implementation.createHTMLDocument("")).createElement("base")).href = q.location.href, b.head.appendChild(f)) : b = q), e = Jb.exec(a), g = !c && [], e ? [b.createElement(e[1])] : (e = mb([a], b, g), g && g.length && d(g).remove(), d.merge([], e.childNodes)) }; d.fn.load = function (a, b, c) {
        var f, e, g, h = this, k = a.indexOf(" "); return -1 < k && (f = aa(a.slice(k)), a = a.slice(0, k)),
            r(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), 0 < h.length && d.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) { g = arguments; h.html(f ? d("\x3cdiv\x3e").append(d.parseHTML(a)).find(f) : a) }).always(c && function (a, b) { h.each(function () { c.apply(this, g || [a.responseText, b, a]) }) }), this
    }; d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) { d.fn[b] = function (a) { return this.on(b, a) } }); d.expr.pseudos.animated = function (a) {
        return d.grep(d.timers, function (b) {
            return a ===
                b.elem
        }).length
    }; d.offset = { setOffset: function (a, b, c) { var f, e, g, h = d.css(a, "position"), k = d(a), l = {}; "static" === h && (a.style.position = "relative"); var n = k.offset(); var m = d.css(a, "top"); var p = d.css(a, "left"); ("absolute" === h || "fixed" === h) && -1 < (m + p).indexOf("auto") ? (g = (f = k.position()).top, e = f.left) : (g = parseFloat(m) || 0, e = parseFloat(p) || 0); r(b) && (b = b.call(a, c, d.extend({}, n))); null != b.top && (l.top = b.top - n.top + g); null != b.left && (l.left = b.left - n.left + e); "using" in b ? b.using.call(a, l) : k.css(l) } }; d.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 ===
                a ? this : this.each(function (b) { d.offset.setOffset(this, a, b) }); var b, c, f = this[0]; if (f) return f.getClientRects().length ? (b = f.getBoundingClientRect(), c = f.ownerDocument.defaultView, { top: b.top + c.pageYOffset, left: b.left + c.pageXOffset }) : { top: 0, left: 0 }
        }, position: function () {
            if (this[0]) {
                var a, b = this[0], c = { top: 0, left: 0 }; if ("fixed" === d.css(b, "position")) var f = b.getBoundingClientRect(); else {
                    f = this.offset(); var e = b.ownerDocument; for (a = b.offsetParent || e.documentElement; a && (a === e.body || a === e.documentElement) && "static" ===
                        d.css(a, "position");)a = a.parentNode; a && a !== b && 1 === a.nodeType && ((c = d(a).offset()).top += d.css(a, "borderTopWidth", !0), c.left += d.css(a, "borderLeftWidth", !0))
                } return { top: f.top - c.top - d.css(b, "marginTop", !0), left: f.left - c.left - d.css(b, "marginLeft", !0) }
            }
        }, offsetParent: function () { return this.map(function () { for (var a = this.offsetParent; a && "static" === d.css(a, "position");)a = a.offsetParent; return a || Pa }) }
    }); d.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = "pageYOffset" === b; d.fn[a] =
            function (d) { return Z(this, function (a, d, f) { var e; if (ka(a) ? e = a : 9 === a.nodeType && (e = a.defaultView), void 0 === f) return e ? e[b] : a[d]; e ? e.scrollTo(c ? e.pageXOffset : f, c ? f : e.pageYOffset) : a[d] = f }, a, d, arguments.length) }
    }); d.each(["top", "left"], function (a, b) { d.cssHooks[b] = ub(u.pixelPosition, function (a, f) { if (f) return f = pa(a, b), Ua.test(f) ? d(a).position()[b] + "px" : f }) }); d.each({ Height: "height", Width: "width" }, function (a, b) {
        d.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, f) {
            d.fn[f] = function (e, g) {
                var h = arguments.length &&
                    (c || "boolean" != typeof e), k = c || (!0 === e || !0 === g ? "margin" : "border"); return Z(this, function (b, c, e) { var g; return ka(b) ? 0 === f.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (g = b.documentElement, Math.max(b.body["scroll" + a], g["scroll" + a], b.body["offset" + a], g["offset" + a], g["client" + a])) : void 0 === e ? d.css(b, c, k) : d.style(b, c, e, k) }, b, h ? e : void 0, h)
            }
        })
    }); d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function (a, b) { d.fn[b] = function (a, d) { return 0 < arguments.length ? this.on(b, null, a, d) : this.trigger(b) } }); d.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) } }); d.fn.extend({ bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }); d.proxy = function (a, b) {
            var c, f, e; if ("string" == typeof b && (c = a[b],
                b = a, a = c), r(a)) return f = S.call(arguments, 2), e = function () { return a.apply(b || this, f.concat(S.call(arguments))) }, e.guid = a.guid = a.guid || d.guid++, e
        }; d.holdReady = function (a) { a ? d.readyWait++ : d.ready(!0) }; d.isArray = Array.isArray; d.parseJSON = JSON.parse; d.nodeName = N; d.isFunction = r; d.isWindow = ka; d.camelCase = J; d.type = ia; d.now = Date.now; d.isNumeric = function (a) { var b = d.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }; "function" == typeof define && define.amd && define("jquery", [], function () { return d });
    var Pc = p.jQuery, Qc = p.$; return d.noConflict = function (a) { return p.$ === d && (p.$ = Qc), a && p.jQuery === d && (p.jQuery = Pc), d }, va || (p.jQuery = p.$ = d), d
}); jQuery.uaMatch = function (p) { p = p.toLowerCase(); p = /(chrome)[ \/]([\w.]+)/.exec(p) || /(webkit)[ \/]([\w.]+)/.exec(p) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(p) || /(msie) ([\w.]+)/.exec(p) || 0 > p.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(p) || []; return { browser: p[1] || "", version: p[2] || "0" } };
jQuery.browser || (matched = jQuery.uaMatch(navigator.userAgent), browser = {}, matched.browser && (browser[matched.browser] = !0, browser.version = matched.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0), jQuery.browser = browser);