(function () { function p(l, m, h) { function k(f, d) { if (!m[f]) { if (!l[f]) { var g = "function" == typeof require && require; if (!d && g) return g(f, !0); if (n) return n(f, !0); d = Error("Cannot find module '" + f + "'"); throw d.code = "MODULE_NOT_FOUND", d; } d = m[f] = { exports: {} }; l[f][0].call(d.exports, function (d) { return k(l[f][1][d] || d) }, d, d.exports, p, l, m, h) } return m[f].exports } for (var n = "function" == typeof require && require, g = 0; g < h.length; g++)k(h[g]); return k } return p })()({
    1: [function (p, l, m) {
        function h() {
            window.logitech.acceptedCookieGroups =
            k(); if ("undefined" === typeof utag_data || "undefined" === typeof window.logitech.initUtagSync || "undefined" === typeof window.logitech.initUtagAsync) 500 > v && window.requestAnimationFrame(h), v++; else if (!0 !== w) { w = !0; console.log("Tealium/utag ready", window.logitech.acceptedCookieGroups); try { window.logitech.initUtagSync() } catch (a) { console.error("Tealium utag.sync failed to initialize"), console.error(a) } try { window.logitech.initUtagAsync() } catch (a) { console.error("Tealium utag.js failed to initialize"), console.error(a) } }
        }
        function k() { var a = []; if ("undefined" !== typeof OnetrustActiveGroups) a = OnetrustActiveGroups.split(","), a = a.filter(function (a) { return "" !== a && void 0 !== a && null !== a }); else if (n("OptanonConsent")) { var b = document.cookie.split("; ").find(function (a) { return a.startsWith("OptanonConsent\x3d") }).substr(15); b = decodeURIComponent(b); b.split("\x26").find(function (a) { return a.startsWith("groups\x3d") }).split("\x3d")[1].split(",").forEach(function (b) { b = b.split(":"); "1" === b[1] && a.push(b[0]) }) } return a } function n(a) {
            return document.cookie.split(";").some(function (b) {
                return 0 ===
                    b.trim().indexOf(a + "\x3d")
            }) ? !0 : !1
        } function g() { q.forEach(function (a) { window.logitech.insertScript(a.url, a.selector, a.callback, a.groupId) }); r.forEach(function (a) { window.logitech.insertHtml(a.html, a.selector, a.callback, a.groupId) }) } function f(a, b, e, c) {
            console.log("removeTargetPageFlicker"); (function (a, c, e) { if (a) { var d = b.createElement("style"); d.id = c; d.innerHTML = e; a.appendChild(d) } })(b.getElementsByTagName("head")[0], "at-body-style", e); setTimeout(function () {
                var a = b.getElementsByTagName("head")[0]; if (a) {
                    var c =
                        b.getElementById("at-body-style"); c && a.removeChild(c)
                }
            }, c)
        } function d(a) { document.body ? a.call(this) : window.requestAnimationFrame(function () { d(a) }) } window.logitech = window.logitech || {}; var q = [], r = [], v = 0, t = !1, u = !1, w = !1; window.logitech.COOKIES_STRICTLY_NECESSARY = "C0001"; window.logitech.COOKIES_ANALYTICS = "C0002"; window.logitech.COOKIES_FUNCTIONAL = "C0003"; window.logitech.COOKIES_MARKETING = "C0004"; window.logitech.COOKIES_SOCIAL_MEDIA = "C0005"; window.logitech.acceptedCookieGroups = k(); 0 < window.logitech.acceptedCookieGroups.length ?
            h() : f(window, document, "body.wcm-publish {opacity: 0 !important}", 3E3); window.OptanonWrapper = function () {
                console.log("OneTrust initialized", OnetrustActiveGroups); u = !0; h(); g(); OneTrust.OnConsentChanged(function (a) {
                    window.logitech.acceptedCookieGroups = k(); console.log("OneTrust consent changed", window.logitech.acceptedCookieGroups); try { window.logitech.reinitUtagSync() } catch (e) { console.error("Tealium utag.sync failed to re-initialize"), console.error(e) } try { utag.view(utag_data) } catch (e) {
                        console.error("utag.view(utag_data) failed"),
                        console.error(e)
                    } g()
                }); var a = document.getElementById("onetrust-consent-sdk"); a && (a.setAttribute("role", "region"), a.setAttribute("aria-label", "Cookies Consent"))
            }; window.logitech.doesUserAllowCookiesFor = function (a) { if ("string" !== typeof a) return !1; a = a.toUpperCase(); for (var b = 0, e = window.logitech.acceptedCookieGroups.length; b < e; b++)if (a === window.logitech.acceptedCookieGroups[b]) return !0; return !1 }; window.logitech.insertScript = function (a, b, e, c) {
                b = b || "head"; Array.isArray(c) && (c = c.join("-")); var d = q.some(function (c) {
                    return c.url ===
                        a && c.selector === b
                }); !0 !== d && q.push({ url: a, selector: b, callback: e, groupId: c }); t ? (console.log("We're in author mode. Allow script to load.", a), c = document.createElement("script"), c.src = a, c.type = "text/javascript", "function" === typeof e && c.addEventListener("load", e), "head" !== b && (b = "#" + b), document.querySelector(b).appendChild(c)) : u ? (console.log("OneTrust.InsertScript exists. Letting OneTrust manage", a), OneTrust.InsertScript(a, b, e, null, c)) : !0 !== d && console.log("OneTrust.InsertScript does not exist. Cache it and wait",
                    a)
            }; window.logitech.insertHtml = function (a, b, d, c) {
                Array.isArray(c) && (c = c.join("-")); var e = r.some(function (c) { return c.html === a && c.selector === b }); !0 !== e && r.push({ html: a, selector: b, callback: d, groupId: c }); t ? (console.log("We're in author mode. Allow html to be added.", a), c = document.createElement("div"), c.innerHTML = a, document.querySelector("#" + b).appendChild(c), "function" === typeof d && d.call(this)) : u ? (console.log("OneTrust.InsertHtml exists. Letting OneTrust manage", a), OneTrust.InsertHtml(a, b, d, null, c)) :
                    !0 !== e && console.log("OneTrust.InsertHtml does not exist. Cache it and wait", a)
            }; d(function () { if (t = document.body.classList.contains("edit") || document.body.classList.contains("wcm-edit") || document.body.classList.contains("preview") || document.body.classList.contains("wcm-preview")) console.log("In authoring mode, force utag and scripts to load"), h(), g() })
    }, {}]
}, {}, [1]);