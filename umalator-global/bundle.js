(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../node_modules/dlv/dist/dlv.umd.js
  var require_dlv_umd = __commonJS({
    "../node_modules/dlv/dist/dlv.umd.js"(exports, module) {
      !function(t3, n3) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = function(t4, n4, e4, i4, o4) {
          for (n4 = n4.split ? n4.split(".") : n4, i4 = 0; i4 < n4.length; i4++)
            t4 = t4 ? t4[n4[i4]] : o4;
          return t4 === o4 ? e4 : t4;
        } : "function" == typeof define && define.amd ? define(function() {
          return function(t4, n4, e4, i4, o4) {
            for (n4 = n4.split ? n4.split(".") : n4, i4 = 0; i4 < n4.length; i4++)
              t4 = t4 ? t4[n4[i4]] : o4;
            return t4 === o4 ? e4 : t4;
          };
        }) : t3.dlv = function(t4, n4, e4, i4, o4) {
          for (n4 = n4.split ? n4.split(".") : n4, i4 = 0; i4 < n4.length; i4++)
            t4 = t4 ? t4[n4[i4]] : o4;
          return t4 === o4 ? e4 : t4;
        };
      }(exports);
    }
  });

  // mockAssert-ns:assert
  var require_assert = __commonJS({
    "mockAssert-ns:assert"(exports, module) {
      module.exports = { strict: function() {
      } };
    }
  });

  // ../node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var t;
  var i;
  var o;
  var r;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var v = Array.isArray;
  function h(n3, l4) {
    for (var u3 in l4)
      n3[u3] = l4[u3];
    return n3;
  }
  function p(n3) {
    var l4 = n3.parentNode;
    l4 && l4.removeChild(n3);
  }
  function y(l4, u3, t3) {
    var i4, o4, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? i4 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l4 && null != l4.defaultProps)
      for (r3 in l4.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l4.defaultProps[r3]);
    return d(l4, f3, i4, o4, null);
  }
  function d(n3, t3, i4, o4, r3) {
    var f3 = { type: n3, props: t3, key: i4, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function k(n3) {
    return n3.children;
  }
  function b(n3, l4) {
    this.props = n3, this.context = l4;
  }
  function g(n3, l4) {
    if (null == l4)
      return n3.__ ? g(n3.__, n3.__.__k.indexOf(n3) + 1) : null;
    for (var u3; l4 < n3.__k.length; l4++)
      if (null != (u3 = n3.__k[l4]) && null != u3.__e)
        return u3.__d || u3.__e;
    return "function" == typeof n3.type ? g(n3) : null;
  }
  function m(n3) {
    var l4, u3;
    if (null != (n3 = n3.__) && null != n3.__c) {
      for (n3.__e = n3.__c.base = null, l4 = 0; l4 < n3.__k.length; l4++)
        if (null != (u3 = n3.__k[l4]) && null != u3.__e) {
          n3.__e = n3.__c.base = u3.__e;
          break;
        }
      return m(n3);
    }
  }
  function w(n3) {
    (!n3.__d && (n3.__d = true) && i.push(n3) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
  }
  function x() {
    var n3, l4, u3, t3, o4, r3, e4, c3, s3;
    for (i.sort(f); n3 = i.shift(); )
      n3.__d && (l4 = i.length, t3 = void 0, o4 = void 0, r3 = void 0, c3 = (e4 = (u3 = n3).__v).__e, (s3 = u3.__P) && (t3 = [], o4 = [], (r3 = h({}, e4)).__v = e4.__v + 1, z(s3, e4, r3, u3.__n, void 0 !== s3.ownerSVGElement, null != e4.__h ? [c3] : null, t3, null == c3 ? g(e4) : c3, e4.__h, o4), L(t3, e4, o4), e4.__e != c3 && m(e4)), i.length > l4 && i.sort(f));
    x.__r = 0;
  }
  function P(n3, l4, u3, t3, i4, o4, r3, f3, e4, a4, h3) {
    var p4, y3, _2, b3, m3, w3, x3, P2, C2, D2 = 0, H2 = t3 && t3.__k || s, I2 = H2.length, T3 = I2, j3 = l4.length;
    for (u3.__k = [], p4 = 0; p4 < j3; p4++)
      null != (b3 = u3.__k[p4] = null == (b3 = l4[p4]) || "boolean" == typeof b3 || "function" == typeof b3 ? null : "string" == typeof b3 || "number" == typeof b3 || "bigint" == typeof b3 ? d(null, b3, null, null, b3) : v(b3) ? d(k, { children: b3 }, null, null, null) : b3.__b > 0 ? d(b3.type, b3.props, b3.key, b3.ref ? b3.ref : null, b3.__v) : b3) ? (b3.__ = u3, b3.__b = u3.__b + 1, -1 === (P2 = A(b3, H2, x3 = p4 + D2, T3)) ? _2 = c : (_2 = H2[P2] || c, H2[P2] = void 0, T3--), z(n3, b3, _2, i4, o4, r3, f3, e4, a4, h3), m3 = b3.__e, (y3 = b3.ref) && _2.ref != y3 && (_2.ref && N(_2.ref, null, b3), h3.push(y3, b3.__c || m3, b3)), null != m3 && (null == w3 && (w3 = m3), (C2 = _2 === c || null === _2.__v) ? -1 == P2 && D2-- : P2 !== x3 && (P2 === x3 + 1 ? D2++ : P2 > x3 ? T3 > j3 - x3 ? D2 += P2 - x3 : D2-- : D2 = P2 < x3 && P2 == x3 - 1 ? P2 - x3 : 0), x3 = p4 + D2, "function" != typeof b3.type || P2 === x3 && _2.__k !== b3.__k ? "function" == typeof b3.type || P2 === x3 && !C2 ? void 0 !== b3.__d ? (e4 = b3.__d, b3.__d = void 0) : e4 = m3.nextSibling : e4 = S(n3, m3, e4) : e4 = $(b3, e4, n3), "function" == typeof u3.type && (u3.__d = e4))) : (_2 = H2[p4]) && null == _2.key && _2.__e && (_2.__e == e4 && (_2.__ = t3, e4 = g(_2)), O(_2, _2, false), H2[p4] = null);
    for (u3.__e = w3, p4 = I2; p4--; )
      null != H2[p4] && ("function" == typeof u3.type && null != H2[p4].__e && H2[p4].__e == u3.__d && (u3.__d = H2[p4].__e.nextSibling), O(H2[p4], H2[p4]));
  }
  function $(n3, l4, u3) {
    for (var t3, i4 = n3.__k, o4 = 0; i4 && o4 < i4.length; o4++)
      (t3 = i4[o4]) && (t3.__ = n3, l4 = "function" == typeof t3.type ? $(t3, l4, u3) : S(u3, t3.__e, l4));
    return l4;
  }
  function S(n3, l4, u3) {
    return null == u3 || u3.parentNode !== n3 ? n3.insertBefore(l4, null) : l4 == u3 && null != l4.parentNode || n3.insertBefore(l4, u3), l4.nextSibling;
  }
  function A(n3, l4, u3, t3) {
    var i4 = n3.key, o4 = n3.type, r3 = u3 - 1, f3 = u3 + 1, e4 = l4[u3];
    if (null === e4 || e4 && i4 == e4.key && o4 === e4.type)
      return u3;
    if (t3 > (null != e4 ? 1 : 0))
      for (; r3 >= 0 || f3 < l4.length; ) {
        if (r3 >= 0) {
          if ((e4 = l4[r3]) && i4 == e4.key && o4 === e4.type)
            return r3;
          r3--;
        }
        if (f3 < l4.length) {
          if ((e4 = l4[f3]) && i4 == e4.key && o4 === e4.type)
            return f3;
          f3++;
        }
      }
    return -1;
  }
  function D(n3, l4, u3, t3, i4) {
    var o4;
    for (o4 in u3)
      "children" === o4 || "key" === o4 || o4 in l4 || I(n3, o4, null, u3[o4], t3);
    for (o4 in l4)
      i4 && "function" != typeof l4[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u3[o4] === l4[o4] || I(n3, o4, l4[o4], u3[o4], t3);
  }
  function H(n3, l4, u3) {
    "-" === l4[0] ? n3.setProperty(l4, null == u3 ? "" : u3) : n3[l4] = null == u3 ? "" : "number" != typeof u3 || a.test(l4) ? u3 : u3 + "px";
  }
  function I(n3, l4, u3, t3, i4) {
    var o4;
    n:
      if ("style" === l4)
        if ("string" == typeof u3)
          n3.style.cssText = u3;
        else {
          if ("string" == typeof t3 && (n3.style.cssText = t3 = ""), t3)
            for (l4 in t3)
              u3 && l4 in u3 || H(n3.style, l4, "");
          if (u3)
            for (l4 in u3)
              t3 && u3[l4] === t3[l4] || H(n3.style, l4, u3[l4]);
        }
      else if ("o" === l4[0] && "n" === l4[1])
        o4 = l4 !== (l4 = l4.replace(/(PointerCapture)$|Capture$/, "$1")), l4 = l4.toLowerCase() in n3 ? l4.toLowerCase().slice(2) : l4.slice(2), n3.l || (n3.l = {}), n3.l[l4 + o4] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = Date.now(), n3.addEventListener(l4, o4 ? j : T, o4)) : n3.removeEventListener(l4, o4 ? j : T, o4);
      else if ("dangerouslySetInnerHTML" !== l4) {
        if (i4)
          l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l4 && "height" !== l4 && "href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && "rowSpan" !== l4 && "colSpan" !== l4 && "role" !== l4 && l4 in n3)
          try {
            n3[l4] = null == u3 ? "" : u3;
            break n;
          } catch (n4) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l4[4] ? n3.removeAttribute(l4) : n3.setAttribute(l4, u3));
      }
  }
  function T(n3) {
    var u3 = this.l[n3.type + false];
    if (n3.t) {
      if (n3.t <= u3.u)
        return;
    } else
      n3.t = Date.now();
    return u3(l.event ? l.event(n3) : n3);
  }
  function j(n3) {
    return this.l[n3.type + true](l.event ? l.event(n3) : n3);
  }
  function z(n3, u3, t3, i4, o4, r3, f3, e4, c3, s3) {
    var a4, p4, y3, d3, _2, g3, m3, w3, x3, $2, C2, S2, A2, D2, H2, I2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != t3.__h && (c3 = t3.__h, e4 = u3.__e = t3.__e, u3.__h = null, r3 = [e4]), (a4 = l.__b) && a4(u3);
    n:
      if ("function" == typeof I2)
        try {
          if (w3 = u3.props, x3 = (a4 = I2.contextType) && i4[a4.__c], $2 = a4 ? x3 ? x3.props.value : a4.__ : i4, t3.__c ? m3 = (p4 = u3.__c = t3.__c).__ = p4.__E : ("prototype" in I2 && I2.prototype.render ? u3.__c = p4 = new I2(w3, $2) : (u3.__c = p4 = new b(w3, $2), p4.constructor = I2, p4.render = q), x3 && x3.sub(p4), p4.props = w3, p4.state || (p4.state = {}), p4.context = $2, p4.__n = i4, y3 = p4.__d = true, p4.__h = [], p4._sb = []), null == p4.__s && (p4.__s = p4.state), null != I2.getDerivedStateFromProps && (p4.__s == p4.state && (p4.__s = h({}, p4.__s)), h(p4.__s, I2.getDerivedStateFromProps(w3, p4.__s))), d3 = p4.props, _2 = p4.state, p4.__v = u3, y3)
            null == I2.getDerivedStateFromProps && null != p4.componentWillMount && p4.componentWillMount(), null != p4.componentDidMount && p4.__h.push(p4.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && w3 !== d3 && null != p4.componentWillReceiveProps && p4.componentWillReceiveProps(w3, $2), !p4.__e && (null != p4.shouldComponentUpdate && false === p4.shouldComponentUpdate(w3, p4.__s, $2) || u3.__v === t3.__v)) {
              for (u3.__v !== t3.__v && (p4.props = w3, p4.state = p4.__s, p4.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.forEach(function(n4) {
                n4 && (n4.__ = u3);
              }), C2 = 0; C2 < p4._sb.length; C2++)
                p4.__h.push(p4._sb[C2]);
              p4._sb = [], p4.__h.length && f3.push(p4);
              break n;
            }
            null != p4.componentWillUpdate && p4.componentWillUpdate(w3, p4.__s, $2), null != p4.componentDidUpdate && p4.__h.push(function() {
              p4.componentDidUpdate(d3, _2, g3);
            });
          }
          if (p4.context = $2, p4.props = w3, p4.__P = n3, p4.__e = false, S2 = l.__r, A2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (p4.state = p4.__s, p4.__d = false, S2 && S2(u3), a4 = p4.render(p4.props, p4.state, p4.context), D2 = 0; D2 < p4._sb.length; D2++)
              p4.__h.push(p4._sb[D2]);
            p4._sb = [];
          } else
            do {
              p4.__d = false, S2 && S2(u3), a4 = p4.render(p4.props, p4.state, p4.context), p4.state = p4.__s;
            } while (p4.__d && ++A2 < 25);
          p4.state = p4.__s, null != p4.getChildContext && (i4 = h(h({}, i4), p4.getChildContext())), y3 || null == p4.getSnapshotBeforeUpdate || (g3 = p4.getSnapshotBeforeUpdate(d3, _2)), P(n3, v(H2 = null != a4 && a4.type === k && null == a4.key ? a4.props.children : a4) ? H2 : [H2], u3, t3, i4, o4, r3, f3, e4, c3, s3), p4.base = u3.__e, u3.__h = null, p4.__h.length && f3.push(p4), m3 && (p4.__E = p4.__ = null);
        } catch (n4) {
          u3.__v = null, (c3 || null != r3) && (u3.__e = e4, u3.__h = !!c3, r3[r3.indexOf(e4)] = null), l.__e(n4, u3, t3);
        }
      else
        null == r3 && u3.__v === t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : u3.__e = M(t3.__e, u3, t3, i4, o4, r3, f3, c3, s3);
    (a4 = l.diffed) && a4(u3);
  }
  function L(n3, u3, t3) {
    for (var i4 = 0; i4 < t3.length; i4++)
      N(t3[i4], t3[++i4], t3[++i4]);
    l.__c && l.__c(u3, n3), n3.some(function(u4) {
      try {
        n3 = u4.__h, u4.__h = [], n3.some(function(n4) {
          n4.call(u4);
        });
      } catch (n4) {
        l.__e(n4, u4.__v);
      }
    });
  }
  function M(l4, u3, t3, i4, o4, r3, f3, e4, s3) {
    var a4, h3, y3, d3 = t3.props, _2 = u3.props, k3 = u3.type, b3 = 0;
    if ("svg" === k3 && (o4 = true), null != r3) {
      for (; b3 < r3.length; b3++)
        if ((a4 = r3[b3]) && "setAttribute" in a4 == !!k3 && (k3 ? a4.localName === k3 : 3 === a4.nodeType)) {
          l4 = a4, r3[b3] = null;
          break;
        }
    }
    if (null == l4) {
      if (null === k3)
        return document.createTextNode(_2);
      l4 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", k3) : document.createElement(k3, _2.is && _2), r3 = null, e4 = false;
    }
    if (null === k3)
      d3 === _2 || e4 && l4.data === _2 || (l4.data = _2);
    else {
      if (r3 = r3 && n.call(l4.childNodes), h3 = (d3 = t3.props || c).dangerouslySetInnerHTML, y3 = _2.dangerouslySetInnerHTML, !e4) {
        if (null != r3)
          for (d3 = {}, b3 = 0; b3 < l4.attributes.length; b3++)
            d3[l4.attributes[b3].name] = l4.attributes[b3].value;
        (y3 || h3) && (y3 && (h3 && y3.__html == h3.__html || y3.__html === l4.innerHTML) || (l4.innerHTML = y3 && y3.__html || ""));
      }
      if (D(l4, _2, d3, o4, e4), y3)
        u3.__k = [];
      else if (P(l4, v(b3 = u3.props.children) ? b3 : [b3], u3, t3, i4, o4 && "foreignObject" !== k3, r3, f3, r3 ? r3[0] : t3.__k && g(t3, 0), e4, s3), null != r3)
        for (b3 = r3.length; b3--; )
          null != r3[b3] && p(r3[b3]);
      e4 || ("value" in _2 && void 0 !== (b3 = _2.value) && (b3 !== l4.value || "progress" === k3 && !b3 || "option" === k3 && b3 !== d3.value) && I(l4, "value", b3, d3.value, false), "checked" in _2 && void 0 !== (b3 = _2.checked) && b3 !== l4.checked && I(l4, "checked", b3, d3.checked, false));
    }
    return l4;
  }
  function N(n3, u3, t3) {
    try {
      "function" == typeof n3 ? n3(u3) : n3.current = u3;
    } catch (n4) {
      l.__e(n4, t3);
    }
  }
  function O(n3, u3, t3) {
    var i4, o4;
    if (l.unmount && l.unmount(n3), (i4 = n3.ref) && (i4.current && i4.current !== n3.__e || N(i4, null, u3)), null != (i4 = n3.__c)) {
      if (i4.componentWillUnmount)
        try {
          i4.componentWillUnmount();
        } catch (n4) {
          l.__e(n4, u3);
        }
      i4.base = i4.__P = null, n3.__c = void 0;
    }
    if (i4 = n3.__k)
      for (o4 = 0; o4 < i4.length; o4++)
        i4[o4] && O(i4[o4], u3, t3 || "function" != typeof n3.type);
    t3 || null == n3.__e || p(n3.__e), n3.__ = n3.__e = n3.__d = void 0;
  }
  function q(n3, l4, u3) {
    return this.constructor(n3, u3);
  }
  function B(u3, t3, i4) {
    var o4, r3, f3, e4;
    l.__ && l.__(u3, t3), r3 = (o4 = "function" == typeof i4) ? null : i4 && i4.__k || t3.__k, f3 = [], e4 = [], z(t3, u3 = (!o4 && i4 || t3).__k = y(k, null, [u3]), r3 || c, c, void 0 !== t3.ownerSVGElement, !o4 && i4 ? [i4] : r3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f3, !o4 && i4 ? i4 : r3 ? r3.__e : t3.firstChild, o4, e4), L(f3, u3, e4);
  }
  function F(l4, u3, t3) {
    var i4, o4, r3, f3, e4 = h({}, l4.props);
    for (r3 in l4.type && l4.type.defaultProps && (f3 = l4.type.defaultProps), u3)
      "key" == r3 ? i4 = u3[r3] : "ref" == r3 ? o4 = u3[r3] : e4[r3] = void 0 === u3[r3] && void 0 !== f3 ? f3[r3] : u3[r3];
    return arguments.length > 2 && (e4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), d(l4.type, e4, i4 || l4.key, o4 || l4.ref, null);
  }
  function G(n3, l4) {
    var u3 = { __c: l4 = "__cC" + e++, __: n3, Consumer: function(n4, l5) {
      return n4.children(l5);
    }, Provider: function(n4) {
      var u4, t3;
      return this.getChildContext || (u4 = [], (t3 = {})[l4] = this, this.getChildContext = function() {
        return t3;
      }, this.shouldComponentUpdate = function(n5) {
        this.props.value !== n5.value && u4.some(function(n6) {
          n6.__e = true, w(n6);
        });
      }, this.sub = function(n5) {
        u4.push(n5);
        var l5 = n5.componentWillUnmount;
        n5.componentWillUnmount = function() {
          u4.splice(u4.indexOf(n5), 1), l5 && l5.call(n5);
        };
      }), n4.children;
    } };
    return u3.Provider.__ = u3.Consumer.contextType = u3;
  }
  n = s.slice, l = { __e: function(n3, l4, u3, t3) {
    for (var i4, o4, r3; l4 = l4.__; )
      if ((i4 = l4.__c) && !i4.__)
        try {
          if ((o4 = i4.constructor) && null != o4.getDerivedStateFromError && (i4.setState(o4.getDerivedStateFromError(n3)), r3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n3, t3 || {}), r3 = i4.__d), r3)
            return i4.__E = i4;
        } catch (l5) {
          n3 = l5;
        }
    throw n3;
  } }, u = 0, t = function(n3) {
    return null != n3 && void 0 === n3.constructor;
  }, b.prototype.setState = function(n3, l4) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n3 && (n3 = n3(h({}, u3), this.props)), n3 && h(u3, n3), null != n3 && this.__v && (l4 && this._sb.push(l4), w(this));
  }, b.prototype.forceUpdate = function(n3) {
    this.__v && (this.__e = true, n3 && this.__h.push(n3), w(this));
  }, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n3, l4) {
    return n3.__v.__b - l4.__v.__b;
  }, x.__r = 0, e = 0;

  // ../node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l.__b;
  var a2 = l.__r;
  var v2 = l.diffed;
  var l2 = l.__c;
  var m2 = l.unmount;
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i4 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i4.__.length && i4.__.push({ __V: c2 }), i4.__[t3];
  }
  function h2(n3) {
    return o2 = 1, s2(B2, n3);
  }
  function s2(n3, u3, i4) {
    var o4 = d2(t2++, 2);
    if (o4.t = n3, !o4.__c && (o4.__ = [i4 ? i4(u3) : B2(void 0, u3), function(n4) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n4);
      t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      var f3 = function(n4, t3, r3) {
        if (!o4.__c.__H)
          return true;
        var u4 = o4.__c.__H.__.filter(function(n5) {
          return n5.__c;
        });
        if (u4.every(function(n5) {
          return !n5.__N;
        }))
          return !c3 || c3.call(this, n4, t3, r3);
        var i5 = false;
        return u4.forEach(function(n5) {
          if (n5.__N) {
            var t4 = n5.__[0];
            n5.__ = n5.__N, n5.__N = void 0, t4 !== n5.__[0] && (i5 = true);
          }
        }), !(!i5 && o4.__c.props === n4) && (!c3 || c3.call(this, n4, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e4 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n4, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n4, t3, r3), c3 = u4;
        }
        e4 && e4.call(this, n4, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o4.__N || o4.__;
  }
  function p2(u3, i4) {
    var o4 = d2(t2++, 3);
    !l.__s && z2(o4.__H, i4) && (o4.__ = u3, o4.i = i4, r2.__H.__h.push(o4));
  }
  function _(n3) {
    return o2 = 5, F2(function() {
      return { current: n3 };
    }, []);
  }
  function F2(n3, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n3(), u3.i = r3, u3.__h = n3, u3.__V) : u3.__;
  }
  function T2(n3, t3) {
    return o2 = 8, F2(function() {
      return n3;
    }, t3);
  }
  function q2(n3) {
    var u3 = r2.context[n3.__c], i4 = d2(t2++, 9);
    return i4.c = n3, u3 ? (null == i4.__ && (i4.__ = true, u3.sub(r2)), u3.props.value) : n3.__;
  }
  function V() {
    var n3 = d2(t2++, 11);
    if (!n3.__) {
      for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; )
        u3 = u3.__;
      var i4 = u3.__m || (u3.__m = [0, 0]);
      n3.__ = "P" + i4[0] + "-" + i4[1]++;
    }
    return n3.__;
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  l.__b = function(n3) {
    r2 = null, e2 && e2(n3);
  }, l.__r = function(n3) {
    a2 && a2(n3), t2 = 0;
    var i4 = (r2 = n3.__c).__H;
    i4 && (u2 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n4) {
      n4.__N && (n4.__ = n4.__N), n4.__V = c2, n4.__N = n4.i = void 0;
    })) : (i4.__h.forEach(k2), i4.__h.forEach(w2), i4.__h = [], t2 = 0)), u2 = r2;
  }, l.diffed = function(t3) {
    v2 && v2(t3);
    var o4 = t3.__c;
    o4 && o4.__H && (o4.__H.__h.length && (1 !== f2.push(o4) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o4.__H.__.forEach(function(n3) {
      n3.i && (n3.__H = n3.i), n3.__V !== c2 && (n3.__ = n3.__V), n3.i = void 0, n3.__V = c2;
    })), u2 = r2 = null;
  }, l.__c = function(t3, r3) {
    r3.some(function(t4) {
      try {
        t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n3) {
          return !n3.__ || w2(n3);
        });
      } catch (u3) {
        r3.some(function(n3) {
          n3.__h && (n3.__h = []);
        }), r3 = [], l.__e(u3, t4.__v);
      }
    }), l2 && l2(t3, r3);
  }, l.unmount = function(t3) {
    m2 && m2(t3);
    var r3, u3 = t3.__c;
    u3 && u3.__H && (u3.__H.__.forEach(function(n3) {
      try {
        k2(n3);
      } catch (n4) {
        r3 = n4;
      }
    }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n3) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n3);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n3) {
    var t3 = r2, u3 = n3.__c;
    "function" == typeof u3 && (n3.__c = void 0, u3()), r2 = t3;
  }
  function w2(n3) {
    var t3 = r2;
    n3.__c = n3.__(), r2 = t3;
  }
  function z2(n3, t3) {
    return !n3 || n3.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n3[r3];
    });
  }
  function B2(n3, t3) {
    return "function" == typeof t3 ? t3(n3) : t3;
  }

  // ../node_modules/preact-i18n/dist/preact-i18n.esm.js
  var import_dlv = __toESM(require_dlv_umd());

  // ../node_modules/preact-markup/dist/preact-markup.module.js
  var e3;
  var o3 = {};
  function n2(r3, t3, e4) {
    if (3 === r3.nodeType) {
      var o4 = "textContent" in r3 ? r3.textContent : r3.nodeValue || "";
      if (false !== n2.options.trim) {
        var a4 = 0 === t3 || t3 === e4.length - 1;
        if ((!(o4 = o4.match(/^[\s\n]+$/g) && "all" !== n2.options.trim ? " " : o4.replace(/(^[\s\n]+|[\s\n]+$)/g, "all" === n2.options.trim || a4 ? "" : " ")) || " " === o4) && e4.length > 1 && a4)
          return null;
      }
      return o4;
    }
    if (1 !== r3.nodeType)
      return null;
    var p4 = String(r3.nodeName).toLowerCase();
    if ("script" === p4 && !n2.options.allowScripts)
      return null;
    var l4, s3, u3 = n2.h(p4, function(r4) {
      var t4 = r4 && r4.length;
      if (!t4)
        return null;
      for (var e6 = {}, o5 = 0; o5 < t4; o5++) {
        var a5 = r4[o5], i4 = a5.name, p5 = a5.value;
        "on" === i4.substring(0, 2) && n2.options.allowEvents && (p5 = new Function(p5)), e6[i4] = p5;
      }
      return e6;
    }(r3.attributes), (s3 = (l4 = r3.childNodes) && Array.prototype.map.call(l4, n2).filter(i3)) && s3.length ? s3 : null);
    return n2.visitor && n2.visitor(u3), u3;
  }
  var a3;
  var i3 = function(r3) {
    return r3;
  };
  var p3 = {};
  function l3(r3) {
    var t3 = (r3.type || "").toLowerCase(), e4 = l3.map;
    e4 && e4.hasOwnProperty(t3) ? (r3.type = e4[t3], r3.props = Object.keys(r3.props || {}).reduce(function(t4, e6) {
      var o4;
      return t4[o4 = e6, o4.replace(/-(.)/g, function(r4, t5) {
        return t5.toUpperCase();
      })] = r3.props[e6], t4;
    }, {})) : r3.type = t3.replace(/[^a-z0-9-]/i, "");
  }
  var preact_markup_module_default = function(t3) {
    function i4() {
      t3.apply(this, arguments);
    }
    return t3 && (i4.__proto__ = t3), (i4.prototype = Object.create(t3 && t3.prototype)).constructor = i4, i4.setReviver = function(r3) {
      a3 = r3;
    }, i4.prototype.shouldComponentUpdate = function(r3) {
      var t4 = this.props;
      return r3.wrap !== t4.wrap || r3.type !== t4.type || r3.markup !== t4.markup;
    }, i4.prototype.setComponents = function(r3) {
      if (this.map = {}, r3) {
        for (var t4 in r3)
          if (r3.hasOwnProperty(t4)) {
            var e4 = t4.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g, "$1$3-$2$4").toLowerCase();
            this.map[e4] = r3[t4];
          }
      }
    }, i4.prototype.render = function(t4) {
      var i5 = t4.wrap;
      void 0 === i5 && (i5 = true);
      var s3, u3 = t4.type, c3 = t4.markup, m3 = t4.components, v3 = t4.reviver, f3 = t4.onError, d3 = t4["allow-scripts"], h3 = t4["allow-events"], y3 = t4.trim, w3 = function(r3, t5) {
        var e4 = {};
        for (var o4 in r3)
          Object.prototype.hasOwnProperty.call(r3, o4) && -1 === t5.indexOf(o4) && (e4[o4] = r3[o4]);
        return e4;
      }(t4, ["wrap", "type", "markup", "components", "reviver", "onError", "allow-scripts", "allow-events", "trim"]), C2 = v3 || this.reviver || this.constructor.prototype.reviver || a3 || y;
      this.setComponents(m3);
      var g3 = { allowScripts: d3, allowEvents: h3, trim: y3 };
      try {
        s3 = function(r3, t5, a4, i6, s4) {
          var u4 = function(r4, t6) {
            var o4, n3, a5, i7, p4 = "html" === t6 ? "text/html" : "application/xml";
            "html" === t6 ? (i7 = "body", a5 = "<!DOCTYPE html>\n<html><body>" + r4 + "</body></html>") : (i7 = "xml", a5 = '<?xml version="1.0" encoding="UTF-8"?>\n<xml>' + r4 + "</xml>");
            try {
              o4 = new DOMParser().parseFromString(a5, p4);
            } catch (r5) {
              n3 = r5;
            }
            if (o4 || "html" !== t6 || ((o4 = e3 || (e3 = function() {
              if (document.implementation && document.implementation.createHTMLDocument)
                return document.implementation.createHTMLDocument("");
              var r5 = document.createElement("iframe");
              return r5.style.cssText = "position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;", r5.setAttribute("sandbox", "allow-forms"), document.body.appendChild(r5), r5.contentWindow.document;
            }())).open(), o4.write(a5), o4.close()), o4) {
              var l4 = o4.getElementsByTagName(i7)[0], s5 = l4.firstChild;
              return r4 && !s5 && (l4.error = "Document parse failed."), s5 && "parsererror" === String(s5.nodeName).toLowerCase() && (s5.removeChild(s5.firstChild), s5.removeChild(s5.lastChild), l4.error = s5.textContent || s5.nodeValue || n3 || "Unknown error", l4.removeChild(s5)), l4;
            }
          }(r3, t5);
          if (u4 && u4.error)
            throw new Error(u4.error);
          var c4 = u4 && u4.body || u4;
          l3.map = i6 || p3;
          var m4 = c4 && function(r4, t6, e4, a5) {
            return n2.visitor = t6, n2.h = e4, n2.options = a5 || o3, n2(r4);
          }(c4, l3, a4, s4);
          return l3.map = null, m4 && m4.props && m4.props.children || null;
        }(c3, u3, C2, this.map, g3);
      } catch (r3) {
        f3 ? f3({ error: r3 }) : "undefined" != typeof console && console.error && console.error("preact-markup: " + r3);
      }
      if (false === i5)
        return s3 || null;
      var x3 = w3.hasOwnProperty("className") ? "className" : "class", b3 = w3[x3];
      return b3 ? b3.splice ? b3.splice(0, 0, "markup") : "string" == typeof b3 ? w3[x3] += " markup" : "object" == typeof b3 && (b3.markup = true) : w3[x3] = "markup", C2("div", w3, s3 || null);
    }, i4;
  }(b);

  // ../node_modules/preact-i18n/dist/preact-i18n.esm.js
  var IntlContext = G({ intl: {} });
  function defined(obj) {
    return obj !== null && obj !== void 0;
  }
  function assign(obj, props) {
    for (var i4 in props) {
      obj[i4] = props[i4];
    }
    return obj;
  }
  function deepAssign(target, source) {
    var out = assign({}, target);
    for (var i4 in source) {
      if (source.hasOwnProperty(i4)) {
        if (target[i4] && source[i4] && typeof target[i4] === "object" && typeof source[i4] === "object") {
          out[i4] = deepAssign(target[i4], source[i4]);
        } else {
          out[i4] = target[i4] || source[i4];
        }
      }
    }
    return out;
  }
  function select(properties) {
    properties = properties || {};
    if (typeof properties === "string") {
      properties = properties.split(",");
    }
    if ("join" in properties) {
      var selected = {};
      for (var i4 = 0; i4 < properties.length; i4++) {
        var val = properties[i4].trim();
        if (val) {
          selected[val.split(".").pop()] = val;
        }
      }
      return selected;
    }
    return properties;
  }
  function objectWithoutProperties(obj, exclude) {
    var target = {};
    for (var k3 in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k3) && exclude.indexOf(k3) === -1)
        target[k3] = obj[k3];
    return target;
  }
  var URL_FLAG = /[?&#]intl=show/;
  function IntlProvider(ref) {
    var scope = ref.scope;
    var mark = ref.mark;
    var definition = ref.definition;
    var rest3 = objectWithoutProperties(ref, ["scope", "mark", "definition"]);
    var props = rest3;
    var ref$1 = q2(IntlContext);
    var parentIntl = ref$1.intl;
    var intl2 = assign({}, parentIntl || {});
    if (scope) {
      intl2.scope = scope;
    }
    if (definition) {
      intl2.dictionary = deepAssign(intl2.dictionary || {}, definition);
    }
    if (mark || typeof location !== "undefined" && String(location).match(URL_FLAG)) {
      intl2.mark = true;
    }
    return y(
      IntlContext.Provider,
      { value: { intl: intl2 } },
      props.children
    );
  }
  function intl(Child, options) {
    if (arguments.length < 2) {
      options = Child;
      return function(Child2) {
        return intl(Child2, options);
      };
    }
    function IntlProviderWrapper(props) {
      return y(
        IntlProvider,
        options || {},
        y(Child, props)
      );
    }
    IntlProviderWrapper.getWrappedComponent = Child && Child.getWrappedComponent || function() {
      return Child;
    };
    return IntlProviderWrapper;
  }
  var EMPTY = {};
  function template(template2, fields, scope, dictionary) {
    return template2 && template2.replace(/\{\{([\w.-]+)\}\}/g, replacer.bind(null, fields || EMPTY, scope, dictionary));
  }
  function replacer(currentFields, scope, dictionary, s3, field) {
    var parts = field.split("."), v3 = currentFields;
    for (var i4 = 0; i4 < parts.length; i4++) {
      v3 = v3[parts[i4]];
      if (v3 == null) {
        return "";
      }
      if (v3 && v3.type === Text) {
        return translate(v3.props.id, scope, dictionary, v3.props.fields, v3.props.plural, v3.props.fallback);
      }
    }
    if (typeof v3 === "string" && v3.match(/\{\{/)) {
      v3 = template(v3, currentFields);
    }
    return v3;
  }
  function translate(id3, scope, dictionary, fields, plural, fallback) {
    if (scope) {
      id3 = scope + "." + id3;
    }
    var value = dictionary && (0, import_dlv.default)(dictionary, id3);
    if ((plural || plural === 0) && value && typeof value === "object") {
      if (value.splice) {
        value = value[plural] || value[0];
      } else if (plural === 0 && defined(value.none || value.zero)) {
        value = value.none || value.zero;
      } else if (plural === 1 && defined(value.one || value.singular)) {
        value = value.one || value.singular;
      } else {
        value = value.some || value.many || value.plural || value.other || value;
      }
    }
    return value && template(value, fields, scope, dictionary) || fallback || null;
  }
  function HighlightI18N(ref) {
    var value = ref.value;
    var id3 = ref.id;
    var ref$1 = q2(IntlContext);
    var intl2 = ref$1.intl;
    if (intl2 && intl2.mark) {
      var dictionaryKey = "dictionary" + (intl2 && intl2.scope ? "." + intl2.scope : "") + "." + id3;
      return y(
        "mark",
        {
          style: {
            background: value ? (0, import_dlv.default)(intl2, dictionaryKey) ? "rgba(119,231,117,.5)" : "rgba(229,226,41,.5)" : "rgba(228,147,51,.5)"
          },
          title: id3
        },
        value
      );
    }
    return value;
  }
  function Text(ref) {
    var id3 = ref.id;
    var fallback = ref.children;
    var plural = ref.plural;
    var fields = ref.fields;
    var ref$1 = q2(IntlContext);
    var intl2 = ref$1.intl;
    var value = translate(
      id3,
      intl2 && intl2.scope,
      intl2 && intl2.dictionary,
      fields,
      plural,
      fallback
    );
    return y(HighlightI18N, { id: id3, value });
  }
  function translateMapping(props, intl2, onlyTextNodes) {
    var out = {};
    intl2 = intl2 || {};
    props = select(props);
    for (var name in props) {
      if (props.hasOwnProperty(name) && props[name]) {
        var def = props[name];
        if (!onlyTextNodes && typeof def === "string") {
          out[name] = translate(def, intl2.scope, intl2.dictionary);
        } else if (def.type === Text) {
          def = assign({
            // use children as fallback content
            fallback: def.props.children
          }, def.props);
          out[name] = translate(def.id, intl2.scope, intl2.dictionary, def.fields, def.plural, def.fallback);
        }
      }
    }
    return out;
  }
  function Localizer(ref) {
    var children2 = ref.children;
    var ref$1 = q2(IntlContext);
    var intl2 = ref$1.intl;
    return children2 && children2.length ? children2.map(function(child) {
      return F(child, translateMapping(child.props, intl2, true));
    }) : children2 && F(children2, translateMapping(children2.props, intl2, true));
  }
  function objectWithoutProperties$1(obj, exclude) {
    var target = {};
    for (var k3 in obj)
      if (Object.prototype.hasOwnProperty.call(obj, k3) && exclude.indexOf(k3) === -1)
        target[k3] = obj[k3];
    return target;
  }
  function MarkupText(ref) {
    var id3 = ref.id;
    var fields = ref.fields;
    var plural = ref.plural;
    var children2 = ref.children;
    var rest3 = objectWithoutProperties$1(ref, ["id", "fields", "plural", "children"]);
    var props = rest3;
    return y(
      Localizer,
      null,
      y(Html, Object.assign({}, { html: y(Text, { id: id3, fields, plural, children: children2 }), id: id3 }, props))
    );
  }
  function Html(ref) {
    var html = ref.html;
    var id3 = ref.id;
    var rest3 = objectWithoutProperties$1(ref, ["html", "id"]);
    var props = rest3;
    return y(HighlightI18N, {
      id: id3,
      value: !html ? html : typeof html === "string" ? y(preact_markup_module_default, Object.assign({}, { type: "html", trim: false }, props, { markup: html })) : y("span", null, html)
    });
  }
  function withText(mapping) {
    return function withTextWrapper(Child) {
      function WithTextWrapper(props, context) {
        var ref = q2(IntlContext);
        var intl2 = ref.intl;
        var map5 = typeof mapping === "function" ? mapping(props, { intl: intl2 }) : mapping;
        var translations = translateMapping(map5, intl2);
        return y(Child, assign(assign({}, props), translations));
      }
      WithTextWrapper.getWrappedComponent = Child && Child.getWrappedComponent || function() {
        return Child;
      };
      return WithTextWrapper;
    };
  }
  function useText(mapping) {
    var ref = q2(IntlContext);
    var intl2 = ref.intl;
    return translateMapping(
      typeof mapping === "function" ? mapping({ intl: intl2 }) : mapping,
      intl2
    );
  }
  intl.intl = intl;
  intl.IntlContext = IntlContext;
  intl.IntlProvider = IntlProvider;
  intl.Text = Text;
  intl.MarkupText = MarkupText;
  intl.Localizer = Localizer;
  intl.withText = withText;
  intl.useText = useText;
  intl.translate = translate;

  // ../node_modules/immutable/dist/immutable.es.js
  var DELETE = "delete";
  var SHIFT = 5;
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;
  var NOT_SET = {};
  function MakeRef() {
    return { value: false };
  }
  function SetRef(ref) {
    if (ref) {
      ref.value = true;
    }
  }
  function OwnerID() {
  }
  function ensureSize(iter) {
    if (iter.size === void 0) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }
  function wrapIndex(iter, index) {
    if (typeof index !== "number") {
      var uint32Index = index >>> 0;
      if ("" + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }
  function returnTrue() {
    return true;
  }
  function wholeSlice(begin, end, size) {
    return (begin === 0 && !isNeg(begin) || size !== void 0 && begin <= -size) && (end === void 0 || size !== void 0 && end >= size);
  }
  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }
  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }
  function resolveIndex(index, size, defaultIndex) {
    return index === void 0 ? defaultIndex : isNeg(index) ? size === Infinity ? size : Math.max(0, size + index) | 0 : size === void 0 || size === index ? index : Math.min(size, index) | 0;
  }
  function isNeg(value) {
    return value < 0 || value === 0 && 1 / value === -Infinity;
  }
  var IS_COLLECTION_SYMBOL = "@@__IMMUTABLE_ITERABLE__@@";
  function isCollection(maybeCollection) {
    return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
  }
  var IS_KEYED_SYMBOL = "@@__IMMUTABLE_KEYED__@@";
  function isKeyed(maybeKeyed) {
    return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
  }
  var IS_INDEXED_SYMBOL = "@@__IMMUTABLE_INDEXED__@@";
  function isIndexed(maybeIndexed) {
    return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
  }
  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }
  var Collection = function Collection2(value) {
    return isCollection(value) ? value : Seq(value);
  };
  var KeyedCollection = /* @__PURE__ */ function(Collection5) {
    function KeyedCollection3(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }
    if (Collection5)
      KeyedCollection3.__proto__ = Collection5;
    KeyedCollection3.prototype = Object.create(Collection5 && Collection5.prototype);
    KeyedCollection3.prototype.constructor = KeyedCollection3;
    return KeyedCollection3;
  }(Collection);
  var IndexedCollection = /* @__PURE__ */ function(Collection5) {
    function IndexedCollection3(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }
    if (Collection5)
      IndexedCollection3.__proto__ = Collection5;
    IndexedCollection3.prototype = Object.create(Collection5 && Collection5.prototype);
    IndexedCollection3.prototype.constructor = IndexedCollection3;
    return IndexedCollection3;
  }(Collection);
  var SetCollection = /* @__PURE__ */ function(Collection5) {
    function SetCollection3(value) {
      return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
    }
    if (Collection5)
      SetCollection3.__proto__ = Collection5;
    SetCollection3.prototype = Object.create(Collection5 && Collection5.prototype);
    SetCollection3.prototype.constructor = SetCollection3;
    return SetCollection3;
  }(Collection);
  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;
  var IS_SEQ_SYMBOL = "@@__IMMUTABLE_SEQ__@@";
  function isSeq(maybeSeq) {
    return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
  }
  var IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
  function isRecord(maybeRecord) {
    return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
  }
  function isImmutable(maybeImmutable) {
    return isCollection(maybeImmutable) || isRecord(maybeImmutable);
  }
  var IS_ORDERED_SYMBOL = "@@__IMMUTABLE_ORDERED__@@";
  function isOrdered(maybeOrdered) {
    return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
  }
  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;
  var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = "@@iterator";
  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
  var Iterator = function Iterator2(next) {
    this.next = next;
  };
  Iterator.prototype.toString = function toString() {
    return "[Iterator]";
  };
  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;
  Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
    return this.toString();
  };
  Iterator.prototype[ITERATOR_SYMBOL] = function() {
    return this;
  };
  function iteratorValue(type2, k3, v3, iteratorResult) {
    var value = type2 === 0 ? k3 : type2 === 1 ? v3 : [k3, v3];
    iteratorResult ? iteratorResult.value = value : iteratorResult = {
      value,
      done: false
    };
    return iteratorResult;
  }
  function iteratorDone() {
    return { value: void 0, done: true };
  }
  function hasIterator(maybeIterable) {
    if (Array.isArray(maybeIterable)) {
      return true;
    }
    return !!getIteratorFn(maybeIterable);
  }
  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === "function";
  }
  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }
  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }
  function isEntriesIterable(maybeIterable) {
    var iteratorFn = getIteratorFn(maybeIterable);
    return iteratorFn && iteratorFn === maybeIterable.entries;
  }
  function isKeysIterable(maybeIterable) {
    var iteratorFn = getIteratorFn(maybeIterable);
    return iteratorFn && iteratorFn === maybeIterable.keys;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function isArrayLike(value) {
    if (Array.isArray(value) || typeof value === "string") {
      return true;
    }
    return value && typeof value === "object" && Number.isInteger(value.length) && value.length >= 0 && (value.length === 0 ? (
      // Only {length: 0} is considered Array-like.
      Object.keys(value).length === 1
    ) : (
      // An object is only Array-like if it has a property where the last value
      // in the array-like may be found (which could be undefined).
      value.hasOwnProperty(value.length - 1)
    ));
  }
  var Seq = /* @__PURE__ */ function(Collection5) {
    function Seq3(value) {
      return value === void 0 || value === null ? emptySequence() : isImmutable(value) ? value.toSeq() : seqFromValue(value);
    }
    if (Collection5)
      Seq3.__proto__ = Collection5;
    Seq3.prototype = Object.create(Collection5 && Collection5.prototype);
    Seq3.prototype.constructor = Seq3;
    Seq3.prototype.toSeq = function toSeq5() {
      return this;
    };
    Seq3.prototype.toString = function toString8() {
      return this.__toString("Seq {", "}");
    };
    Seq3.prototype.cacheResult = function cacheResult() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };
    Seq3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var cache = this._cache;
      if (cache) {
        var size = cache.length;
        var i4 = 0;
        while (i4 !== size) {
          var entry = cache[reverse5 ? size - ++i4 : i4++];
          if (fn(entry[1], entry[0], this) === false) {
            break;
          }
        }
        return i4;
      }
      return this.__iterateUncached(fn, reverse5);
    };
    Seq3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var cache = this._cache;
      if (cache) {
        var size = cache.length;
        var i4 = 0;
        return new Iterator(function() {
          if (i4 === size) {
            return iteratorDone();
          }
          var entry = cache[reverse5 ? size - ++i4 : i4++];
          return iteratorValue(type2, entry[0], entry[1]);
        });
      }
      return this.__iteratorUncached(type2, reverse5);
    };
    return Seq3;
  }(Collection);
  var KeyedSeq = /* @__PURE__ */ function(Seq3) {
    function KeyedSeq3(value) {
      return value === void 0 || value === null ? emptySequence().toKeyedSeq() : isCollection(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : isRecord(value) ? value.toSeq() : keyedSeqFromValue(value);
    }
    if (Seq3)
      KeyedSeq3.__proto__ = Seq3;
    KeyedSeq3.prototype = Object.create(Seq3 && Seq3.prototype);
    KeyedSeq3.prototype.constructor = KeyedSeq3;
    KeyedSeq3.prototype.toKeyedSeq = function toKeyedSeq5() {
      return this;
    };
    return KeyedSeq3;
  }(Seq);
  var IndexedSeq = /* @__PURE__ */ function(Seq3) {
    function IndexedSeq3(value) {
      return value === void 0 || value === null ? emptySequence() : isCollection(value) ? isKeyed(value) ? value.entrySeq() : value.toIndexedSeq() : isRecord(value) ? value.toSeq().entrySeq() : indexedSeqFromValue(value);
    }
    if (Seq3)
      IndexedSeq3.__proto__ = Seq3;
    IndexedSeq3.prototype = Object.create(Seq3 && Seq3.prototype);
    IndexedSeq3.prototype.constructor = IndexedSeq3;
    IndexedSeq3.of = function of() {
      return IndexedSeq3(arguments);
    };
    IndexedSeq3.prototype.toIndexedSeq = function toIndexedSeq3() {
      return this;
    };
    IndexedSeq3.prototype.toString = function toString8() {
      return this.__toString("Seq [", "]");
    };
    return IndexedSeq3;
  }(Seq);
  var SetSeq = /* @__PURE__ */ function(Seq3) {
    function SetSeq3(value) {
      return (isCollection(value) && !isAssociative(value) ? value : IndexedSeq(value)).toSetSeq();
    }
    if (Seq3)
      SetSeq3.__proto__ = Seq3;
    SetSeq3.prototype = Object.create(Seq3 && Seq3.prototype);
    SetSeq3.prototype.constructor = SetSeq3;
    SetSeq3.of = function of() {
      return SetSeq3(arguments);
    };
    SetSeq3.prototype.toSetSeq = function toSetSeq3() {
      return this;
    };
    return SetSeq3;
  }(Seq);
  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;
  Seq.prototype[IS_SEQ_SYMBOL] = true;
  var ArraySeq = /* @__PURE__ */ function(IndexedSeq3) {
    function ArraySeq3(array3) {
      this._array = array3;
      this.size = array3.length;
    }
    if (IndexedSeq3)
      ArraySeq3.__proto__ = IndexedSeq3;
    ArraySeq3.prototype = Object.create(IndexedSeq3 && IndexedSeq3.prototype);
    ArraySeq3.prototype.constructor = ArraySeq3;
    ArraySeq3.prototype.get = function get24(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };
    ArraySeq3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var array3 = this._array;
      var size = array3.length;
      var i4 = 0;
      while (i4 !== size) {
        var ii = reverse5 ? size - ++i4 : i4++;
        if (fn(array3[ii], ii, this) === false) {
          break;
        }
      }
      return i4;
    };
    ArraySeq3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var array3 = this._array;
      var size = array3.length;
      var i4 = 0;
      return new Iterator(function() {
        if (i4 === size) {
          return iteratorDone();
        }
        var ii = reverse5 ? size - ++i4 : i4++;
        return iteratorValue(type2, ii, array3[ii]);
      });
    };
    return ArraySeq3;
  }(IndexedSeq);
  var ObjectSeq = /* @__PURE__ */ function(KeyedSeq3) {
    function ObjectSeq3(object) {
      var keys3 = Object.keys(object).concat(
        Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : []
      );
      this._object = object;
      this._keys = keys3;
      this.size = keys3.length;
    }
    if (KeyedSeq3)
      ObjectSeq3.__proto__ = KeyedSeq3;
    ObjectSeq3.prototype = Object.create(KeyedSeq3 && KeyedSeq3.prototype);
    ObjectSeq3.prototype.constructor = ObjectSeq3;
    ObjectSeq3.prototype.get = function get24(key, notSetValue) {
      if (notSetValue !== void 0 && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };
    ObjectSeq3.prototype.has = function has9(key) {
      return hasOwnProperty.call(this._object, key);
    };
    ObjectSeq3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var object = this._object;
      var keys3 = this._keys;
      var size = keys3.length;
      var i4 = 0;
      while (i4 !== size) {
        var key = keys3[reverse5 ? size - ++i4 : i4++];
        if (fn(object[key], key, this) === false) {
          break;
        }
      }
      return i4;
    };
    ObjectSeq3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var object = this._object;
      var keys3 = this._keys;
      var size = keys3.length;
      var i4 = 0;
      return new Iterator(function() {
        if (i4 === size) {
          return iteratorDone();
        }
        var key = keys3[reverse5 ? size - ++i4 : i4++];
        return iteratorValue(type2, key, object[key]);
      });
    };
    return ObjectSeq3;
  }(KeyedSeq);
  ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;
  var CollectionSeq = /* @__PURE__ */ function(IndexedSeq3) {
    function CollectionSeq3(collection) {
      this._collection = collection;
      this.size = collection.length || collection.size;
    }
    if (IndexedSeq3)
      CollectionSeq3.__proto__ = IndexedSeq3;
    CollectionSeq3.prototype = Object.create(IndexedSeq3 && IndexedSeq3.prototype);
    CollectionSeq3.prototype.constructor = CollectionSeq3;
    CollectionSeq3.prototype.__iterateUncached = function __iterateUncached(fn, reverse5) {
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var collection = this._collection;
      var iterator = getIterator(collection);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };
    CollectionSeq3.prototype.__iteratorUncached = function __iteratorUncached(type2, reverse5) {
      if (reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      var collection = this._collection;
      var iterator = getIterator(collection);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type2, iterations++, step.value);
      });
    };
    return CollectionSeq3;
  }(IndexedSeq);
  var EMPTY_SEQ;
  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }
  function keyedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) {
      return seq.fromEntrySeq();
    }
    if (typeof value === "object") {
      return new ObjectSeq(value);
    }
    throw new TypeError(
      "Expected Array or collection object of [k, v] entries, or keyed object: " + value
    );
  }
  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) {
      return seq;
    }
    throw new TypeError(
      "Expected Array or collection object of values: " + value
    );
  }
  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) {
      return isEntriesIterable(value) ? seq.fromEntrySeq() : isKeysIterable(value) ? seq.toSetSeq() : seq;
    }
    if (typeof value === "object") {
      return new ObjectSeq(value);
    }
    throw new TypeError(
      "Expected Array or collection object of values, or keyed object: " + value
    );
  }
  function maybeIndexedSeqFromValue(value) {
    return isArrayLike(value) ? new ArraySeq(value) : hasIterator(value) ? new CollectionSeq(value) : void 0;
  }
  var IS_MAP_SYMBOL = "@@__IMMUTABLE_MAP__@@";
  function isMap(maybeMap) {
    return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
  }
  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }
  function isValueObject(maybeValue) {
    return Boolean(
      maybeValue && typeof maybeValue.equals === "function" && typeof maybeValue.hashCode === "function"
    );
  }
  function is(valueA, valueB) {
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    return !!(isValueObject(valueA) && isValueObject(valueB) && valueA.equals(valueB));
  }
  var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul2(a4, b3) {
    a4 |= 0;
    b3 |= 0;
    var c3 = a4 & 65535;
    var d3 = b3 & 65535;
    return c3 * d3 + ((a4 >>> 16) * d3 + c3 * (b3 >>> 16) << 16 >>> 0) | 0;
  };
  function smi(i32) {
    return i32 >>> 1 & 1073741824 | i32 & 3221225471;
  }
  var defaultValueOf = Object.prototype.valueOf;
  function hash(o4) {
    if (o4 == null) {
      return hashNullish(o4);
    }
    if (typeof o4.hashCode === "function") {
      return smi(o4.hashCode(o4));
    }
    var v3 = valueOf(o4);
    if (v3 == null) {
      return hashNullish(v3);
    }
    switch (typeof v3) {
      case "boolean":
        return v3 ? 1108378657 : 1108378656;
      case "number":
        return hashNumber(v3);
      case "string":
        return v3.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(v3) : hashString(v3);
      case "object":
      case "function":
        return hashJSObj(v3);
      case "symbol":
        return hashSymbol(v3);
      default:
        if (typeof v3.toString === "function") {
          return hashString(v3.toString());
        }
        throw new Error("Value type " + typeof v3 + " cannot be hashed.");
    }
  }
  function hashNullish(nullish) {
    return nullish === null ? 1108378658 : (
      /* undefined */
      1108378659
    );
  }
  function hashNumber(n3) {
    if (n3 !== n3 || n3 === Infinity) {
      return 0;
    }
    var hash3 = n3 | 0;
    if (hash3 !== n3) {
      hash3 ^= n3 * 4294967295;
    }
    while (n3 > 4294967295) {
      n3 /= 4294967295;
      hash3 ^= n3;
    }
    return smi(hash3);
  }
  function cachedHashString(string) {
    var hashed = stringHashCache[string];
    if (hashed === void 0) {
      hashed = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hashed;
    }
    return hashed;
  }
  function hashString(string) {
    var hashed = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hashed = 31 * hashed + string.charCodeAt(ii) | 0;
    }
    return smi(hashed);
  }
  function hashSymbol(sym) {
    var hashed = symbolMap[sym];
    if (hashed !== void 0) {
      return hashed;
    }
    hashed = nextHash();
    symbolMap[sym] = hashed;
    return hashed;
  }
  function hashJSObj(obj) {
    var hashed;
    if (usingWeakMap) {
      hashed = weakMap.get(obj);
      if (hashed !== void 0) {
        return hashed;
      }
    }
    hashed = obj[UID_HASH_KEY];
    if (hashed !== void 0) {
      return hashed;
    }
    if (!canDefineProperty) {
      hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hashed !== void 0) {
        return hashed;
      }
      hashed = getIENodeHash(obj);
      if (hashed !== void 0) {
        return hashed;
      }
    }
    hashed = nextHash();
    if (usingWeakMap) {
      weakMap.set(obj, hashed);
    } else if (isExtensible !== void 0 && isExtensible(obj) === false) {
      throw new Error("Non-extensible objects are not allowed as keys.");
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: hashed
      });
    } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(
          this,
          arguments
        );
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
    } else if (obj.nodeType !== void 0) {
      obj[UID_HASH_KEY] = hashed;
    } else {
      throw new Error("Unable to set a non-enumerable property on object.");
    }
    return hashed;
  }
  var isExtensible = Object.isExtensible;
  var canDefineProperty = function() {
    try {
      Object.defineProperty({}, "@", {});
      return true;
    } catch (e4) {
      return false;
    }
  }();
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1:
          return node.uniqueID;
        case 9:
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }
  function valueOf(obj) {
    return obj.valueOf !== defaultValueOf && typeof obj.valueOf === "function" ? obj.valueOf(obj) : obj;
  }
  function nextHash() {
    var nextHash2 = ++_objHashUID;
    if (_objHashUID & 1073741824) {
      _objHashUID = 0;
    }
    return nextHash2;
  }
  var usingWeakMap = typeof WeakMap === "function";
  var weakMap;
  if (usingWeakMap) {
    weakMap = /* @__PURE__ */ new WeakMap();
  }
  var symbolMap = /* @__PURE__ */ Object.create(null);
  var _objHashUID = 0;
  var UID_HASH_KEY = "__immutablehash__";
  if (typeof Symbol === "function") {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }
  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};
  var ToKeyedSequence = /* @__PURE__ */ function(KeyedSeq3) {
    function ToKeyedSequence3(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }
    if (KeyedSeq3)
      ToKeyedSequence3.__proto__ = KeyedSeq3;
    ToKeyedSequence3.prototype = Object.create(KeyedSeq3 && KeyedSeq3.prototype);
    ToKeyedSequence3.prototype.constructor = ToKeyedSequence3;
    ToKeyedSequence3.prototype.get = function get24(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };
    ToKeyedSequence3.prototype.has = function has9(key) {
      return this._iter.has(key);
    };
    ToKeyedSequence3.prototype.valueSeq = function valueSeq3() {
      return this._iter.valueSeq();
    };
    ToKeyedSequence3.prototype.reverse = function reverse5() {
      var this$1$1 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function() {
          return this$1$1._iter.toSeq().reverse();
        };
      }
      return reversedSequence;
    };
    ToKeyedSequence3.prototype.map = function map5(mapper, context) {
      var this$1$1 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function() {
          return this$1$1._iter.toSeq().map(mapper, context);
        };
      }
      return mappedSequence;
    };
    ToKeyedSequence3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1$1 = this;
      return this._iter.__iterate(function(v3, k3) {
        return fn(v3, k3, this$1$1);
      }, reverse5);
    };
    ToKeyedSequence3.prototype.__iterator = function __iterator3(type2, reverse5) {
      return this._iter.__iterator(type2, reverse5);
    };
    return ToKeyedSequence3;
  }(KeyedSeq);
  ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;
  var ToIndexedSequence = /* @__PURE__ */ function(IndexedSeq3) {
    function ToIndexedSequence3(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    if (IndexedSeq3)
      ToIndexedSequence3.__proto__ = IndexedSeq3;
    ToIndexedSequence3.prototype = Object.create(IndexedSeq3 && IndexedSeq3.prototype);
    ToIndexedSequence3.prototype.constructor = ToIndexedSequence3;
    ToIndexedSequence3.prototype.includes = function includes5(value) {
      return this._iter.includes(value);
    };
    ToIndexedSequence3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1$1 = this;
      var i4 = 0;
      reverse5 && ensureSize(this);
      return this._iter.__iterate(
        function(v3) {
          return fn(v3, reverse5 ? this$1$1.size - ++i4 : i4++, this$1$1);
        },
        reverse5
      );
    };
    ToIndexedSequence3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var this$1$1 = this;
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse5);
      var i4 = 0;
      reverse5 && ensureSize(this);
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(
          type2,
          reverse5 ? this$1$1.size - ++i4 : i4++,
          step.value,
          step
        );
      });
    };
    return ToIndexedSequence3;
  }(IndexedSeq);
  var ToSetSequence = /* @__PURE__ */ function(SetSeq3) {
    function ToSetSequence3(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    if (SetSeq3)
      ToSetSequence3.__proto__ = SetSeq3;
    ToSetSequence3.prototype = Object.create(SetSeq3 && SetSeq3.prototype);
    ToSetSequence3.prototype.constructor = ToSetSequence3;
    ToSetSequence3.prototype.has = function has9(key) {
      return this._iter.includes(key);
    };
    ToSetSequence3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1$1 = this;
      return this._iter.__iterate(function(v3) {
        return fn(v3, v3, this$1$1);
      }, reverse5);
    };
    ToSetSequence3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse5);
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type2, step.value, step.value, step);
      });
    };
    return ToSetSequence3;
  }(SetSeq);
  var FromEntriesSequence = /* @__PURE__ */ function(KeyedSeq3) {
    function FromEntriesSequence3(entries5) {
      this._iter = entries5;
      this.size = entries5.size;
    }
    if (KeyedSeq3)
      FromEntriesSequence3.__proto__ = KeyedSeq3;
    FromEntriesSequence3.prototype = Object.create(KeyedSeq3 && KeyedSeq3.prototype);
    FromEntriesSequence3.prototype.constructor = FromEntriesSequence3;
    FromEntriesSequence3.prototype.entrySeq = function entrySeq3() {
      return this._iter.toSeq();
    };
    FromEntriesSequence3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1$1 = this;
      return this._iter.__iterate(function(entry) {
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return fn(
            indexedCollection ? entry.get(1) : entry[1],
            indexedCollection ? entry.get(0) : entry[0],
            this$1$1
          );
        }
      }, reverse5);
    };
    FromEntriesSequence3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse5);
      return new Iterator(function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          if (entry) {
            validateEntry(entry);
            var indexedCollection = isCollection(entry);
            return iteratorValue(
              type2,
              indexedCollection ? entry.get(0) : entry[0],
              indexedCollection ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };
    return FromEntriesSequence3;
  }(KeyedSeq);
  ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
  function flipFactory(collection) {
    var flipSequence = makeSequence(collection);
    flipSequence._iter = collection;
    flipSequence.size = collection.size;
    flipSequence.flip = function() {
      return collection;
    };
    flipSequence.reverse = function() {
      var reversedSequence = collection.reverse.apply(this);
      reversedSequence.flip = function() {
        return collection.reverse();
      };
      return reversedSequence;
    };
    flipSequence.has = function(key) {
      return collection.includes(key);
    };
    flipSequence.includes = function(key) {
      return collection.has(key);
    };
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function(fn, reverse5) {
      var this$1$1 = this;
      return collection.__iterate(function(v3, k3) {
        return fn(k3, v3, this$1$1) !== false;
      }, reverse5);
    };
    flipSequence.__iteratorUncached = function(type2, reverse5) {
      if (type2 === ITERATE_ENTRIES) {
        var iterator = collection.__iterator(type2, reverse5);
        return new Iterator(function() {
          var step = iterator.next();
          if (!step.done) {
            var k3 = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k3;
          }
          return step;
        });
      }
      return collection.__iterator(
        type2 === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse5
      );
    };
    return flipSequence;
  }
  function mapFactory(collection, mapper, context) {
    var mappedSequence = makeSequence(collection);
    mappedSequence.size = collection.size;
    mappedSequence.has = function(key) {
      return collection.has(key);
    };
    mappedSequence.get = function(key, notSetValue) {
      var v3 = collection.get(key, NOT_SET);
      return v3 === NOT_SET ? notSetValue : mapper.call(context, v3, key, collection);
    };
    mappedSequence.__iterateUncached = function(fn, reverse5) {
      var this$1$1 = this;
      return collection.__iterate(
        function(v3, k3, c3) {
          return fn(mapper.call(context, v3, k3, c3), k3, this$1$1) !== false;
        },
        reverse5
      );
    };
    mappedSequence.__iteratorUncached = function(type2, reverse5) {
      var iterator = collection.__iterator(ITERATE_ENTRIES, reverse5);
      return new Iterator(function() {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type2,
          key,
          mapper.call(context, entry[1], key, collection),
          step
        );
      });
    };
    return mappedSequence;
  }
  function reverseFactory(collection, useKeys) {
    var this$1$1 = this;
    var reversedSequence = makeSequence(collection);
    reversedSequence._iter = collection;
    reversedSequence.size = collection.size;
    reversedSequence.reverse = function() {
      return collection;
    };
    if (collection.flip) {
      reversedSequence.flip = function() {
        var flipSequence = flipFactory(collection);
        flipSequence.reverse = function() {
          return collection.flip();
        };
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) {
      return collection.get(useKeys ? key : -1 - key, notSetValue);
    };
    reversedSequence.has = function(key) {
      return collection.has(useKeys ? key : -1 - key);
    };
    reversedSequence.includes = function(value) {
      return collection.includes(value);
    };
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function(fn, reverse5) {
      var this$1$12 = this;
      var i4 = 0;
      reverse5 && ensureSize(collection);
      return collection.__iterate(
        function(v3, k3) {
          return fn(v3, useKeys ? k3 : reverse5 ? this$1$12.size - ++i4 : i4++, this$1$12);
        },
        !reverse5
      );
    };
    reversedSequence.__iterator = function(type2, reverse5) {
      var i4 = 0;
      reverse5 && ensureSize(collection);
      var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse5);
      return new Iterator(function() {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        return iteratorValue(
          type2,
          useKeys ? entry[0] : reverse5 ? this$1$1.size - ++i4 : i4++,
          entry[1],
          step
        );
      });
    };
    return reversedSequence;
  }
  function filterFactory(collection, predicate, context, useKeys) {
    var filterSequence = makeSequence(collection);
    if (useKeys) {
      filterSequence.has = function(key) {
        var v3 = collection.get(key, NOT_SET);
        return v3 !== NOT_SET && !!predicate.call(context, v3, key, collection);
      };
      filterSequence.get = function(key, notSetValue) {
        var v3 = collection.get(key, NOT_SET);
        return v3 !== NOT_SET && predicate.call(context, v3, key, collection) ? v3 : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function(fn, reverse5) {
      var this$1$1 = this;
      var iterations = 0;
      collection.__iterate(function(v3, k3, c3) {
        if (predicate.call(context, v3, k3, c3)) {
          iterations++;
          return fn(v3, useKeys ? k3 : iterations - 1, this$1$1);
        }
      }, reverse5);
      return iterations;
    };
    filterSequence.__iteratorUncached = function(type2, reverse5) {
      var iterator = collection.__iterator(ITERATE_ENTRIES, reverse5);
      var iterations = 0;
      return new Iterator(function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, collection)) {
            return iteratorValue(type2, useKeys ? key : iterations++, value, step);
          }
        }
      });
    };
    return filterSequence;
  }
  function countByFactory(collection, grouper, context) {
    var groups = Map2().asMutable();
    collection.__iterate(function(v3, k3) {
      groups.update(grouper.call(context, v3, k3, collection), 0, function(a4) {
        return a4 + 1;
      });
    });
    return groups.asImmutable();
  }
  function groupByFactory(collection, grouper, context) {
    var isKeyedIter = isKeyed(collection);
    var groups = (isOrdered(collection) ? OrderedMap() : Map2()).asMutable();
    collection.__iterate(function(v3, k3) {
      groups.update(
        grouper.call(context, v3, k3, collection),
        function(a4) {
          return a4 = a4 || [], a4.push(isKeyedIter ? [k3, v3] : v3), a4;
        }
      );
    });
    var coerce = collectionClass(collection);
    return groups.map(function(arr) {
      return reify(collection, coerce(arr));
    }).asImmutable();
  }
  function partitionFactory(collection, predicate, context) {
    var isKeyedIter = isKeyed(collection);
    var groups = [[], []];
    collection.__iterate(function(v3, k3) {
      groups[predicate.call(context, v3, k3, collection) ? 1 : 0].push(
        isKeyedIter ? [k3, v3] : v3
      );
    });
    var coerce = collectionClass(collection);
    return groups.map(function(arr) {
      return reify(collection, coerce(arr));
    });
  }
  function sliceFactory(collection, begin, end, useKeys) {
    var originalSize = collection.size;
    if (wholeSlice(begin, end, originalSize)) {
      return collection;
    }
    if (typeof originalSize === "undefined" && (begin < 0 || end < 0)) {
      return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
    }
    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }
    var sliceSeq = makeSequence(collection);
    sliceSeq.size = sliceSize === 0 ? sliceSize : collection.size && sliceSize || void 0;
    if (!useKeys && isSeq(collection) && sliceSize >= 0) {
      sliceSeq.get = function(index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ? collection.get(index + resolvedBegin, notSetValue) : notSetValue;
      };
    }
    sliceSeq.__iterateUncached = function(fn, reverse5) {
      var this$1$1 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      collection.__iterate(function(v3, k3) {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v3, useKeys ? k3 : iterations - 1, this$1$1) !== false && iterations !== sliceSize;
        }
      });
      return iterations;
    };
    sliceSeq.__iteratorUncached = function(type2, reverse5) {
      if (sliceSize !== 0 && reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      if (sliceSize === 0) {
        return new Iterator(iteratorDone);
      }
      var iterator = collection.__iterator(type2, reverse5);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function() {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type2 === ITERATE_VALUES || step.done) {
          return step;
        }
        if (type2 === ITERATE_KEYS) {
          return iteratorValue(type2, iterations - 1, void 0, step);
        }
        return iteratorValue(type2, iterations - 1, step.value[1], step);
      });
    };
    return sliceSeq;
  }
  function takeWhileFactory(collection, predicate, context) {
    var takeSequence = makeSequence(collection);
    takeSequence.__iterateUncached = function(fn, reverse5) {
      var this$1$1 = this;
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var iterations = 0;
      collection.__iterate(
        function(v3, k3, c3) {
          return predicate.call(context, v3, k3, c3) && ++iterations && fn(v3, k3, this$1$1);
        }
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type2, reverse5) {
      var this$1$1 = this;
      if (reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      var iterator = collection.__iterator(ITERATE_ENTRIES, reverse5);
      var iterating = true;
      return new Iterator(function() {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k3 = entry[0];
        var v3 = entry[1];
        if (!predicate.call(context, v3, k3, this$1$1)) {
          iterating = false;
          return iteratorDone();
        }
        return type2 === ITERATE_ENTRIES ? step : iteratorValue(type2, k3, v3, step);
      });
    };
    return takeSequence;
  }
  function skipWhileFactory(collection, predicate, context, useKeys) {
    var skipSequence = makeSequence(collection);
    skipSequence.__iterateUncached = function(fn, reverse5) {
      var this$1$1 = this;
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var isSkipping = true;
      var iterations = 0;
      collection.__iterate(function(v3, k3, c3) {
        if (!(isSkipping && (isSkipping = predicate.call(context, v3, k3, c3)))) {
          iterations++;
          return fn(v3, useKeys ? k3 : iterations - 1, this$1$1);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type2, reverse5) {
      var this$1$1 = this;
      if (reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      var iterator = collection.__iterator(ITERATE_ENTRIES, reverse5);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function() {
        var step;
        var k3;
        var v3;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type2 === ITERATE_VALUES) {
              return step;
            }
            if (type2 === ITERATE_KEYS) {
              return iteratorValue(type2, iterations++, void 0, step);
            }
            return iteratorValue(type2, iterations++, step.value[1], step);
          }
          var entry = step.value;
          k3 = entry[0];
          v3 = entry[1];
          skipping && (skipping = predicate.call(context, v3, k3, this$1$1));
        } while (skipping);
        return type2 === ITERATE_ENTRIES ? step : iteratorValue(type2, k3, v3, step);
      });
    };
    return skipSequence;
  }
  function concatFactory(collection, values3) {
    var isKeyedCollection = isKeyed(collection);
    var iters = [collection].concat(values3).map(function(v3) {
      if (!isCollection(v3)) {
        v3 = isKeyedCollection ? keyedSeqFromValue(v3) : indexedSeqFromValue(Array.isArray(v3) ? v3 : [v3]);
      } else if (isKeyedCollection) {
        v3 = KeyedCollection(v3);
      }
      return v3;
    }).filter(function(v3) {
      return v3.size !== 0;
    });
    if (iters.length === 0) {
      return collection;
    }
    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === collection || isKeyedCollection && isKeyed(singleton) || isIndexed(collection) && isIndexed(singleton)) {
        return singleton;
      }
    }
    var concatSeq = new ArraySeq(iters);
    if (isKeyedCollection) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(collection)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(function(sum, seq) {
      if (sum !== void 0) {
        var size = seq.size;
        if (size !== void 0) {
          return sum + size;
        }
      }
    }, 0);
    return concatSeq;
  }
  function flattenFactory(collection, depth, useKeys) {
    var flatSequence = makeSequence(collection);
    flatSequence.__iterateUncached = function(fn, reverse5) {
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {
        iter.__iterate(function(v3, k3) {
          if ((!depth || currentDepth < depth) && isCollection(v3)) {
            flatDeep(v3, currentDepth + 1);
          } else {
            iterations++;
            if (fn(v3, useKeys ? k3 : iterations - 1, flatSequence) === false) {
              stopped = true;
            }
          }
          return !stopped;
        }, reverse5);
      }
      flatDeep(collection, 0);
      return iterations;
    };
    flatSequence.__iteratorUncached = function(type2, reverse5) {
      if (reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      var iterator = collection.__iterator(type2, reverse5);
      var stack = [];
      var iterations = 0;
      return new Iterator(function() {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v3 = step.value;
          if (type2 === ITERATE_ENTRIES) {
            v3 = v3[1];
          }
          if ((!depth || stack.length < depth) && isCollection(v3)) {
            stack.push(iterator);
            iterator = v3.__iterator(type2, reverse5);
          } else {
            return useKeys ? step : iteratorValue(type2, iterations++, v3, step);
          }
        }
        return iteratorDone();
      });
    };
    return flatSequence;
  }
  function flatMapFactory(collection, mapper, context) {
    var coerce = collectionClass(collection);
    return collection.toSeq().map(function(v3, k3) {
      return coerce(mapper.call(context, v3, k3, collection));
    }).flatten(true);
  }
  function interposeFactory(collection, separator) {
    var interposedSequence = makeSequence(collection);
    interposedSequence.size = collection.size && collection.size * 2 - 1;
    interposedSequence.__iterateUncached = function(fn, reverse5) {
      var this$1$1 = this;
      var iterations = 0;
      collection.__iterate(
        function(v3) {
          return (!iterations || fn(separator, iterations++, this$1$1) !== false) && fn(v3, iterations++, this$1$1) !== false;
        },
        reverse5
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type2, reverse5) {
      var iterator = collection.__iterator(ITERATE_VALUES, reverse5);
      var iterations = 0;
      var step;
      return new Iterator(function() {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ? iteratorValue(type2, iterations++, separator) : iteratorValue(type2, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }
  function sortFactory(collection, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedCollection = isKeyed(collection);
    var index = 0;
    var entries5 = collection.toSeq().map(function(v3, k3) {
      return [k3, v3, index++, mapper ? mapper(v3, k3, collection) : v3];
    }).valueSeq().toArray();
    entries5.sort(function(a4, b3) {
      return comparator(a4[3], b3[3]) || a4[2] - b3[2];
    }).forEach(
      isKeyedCollection ? function(v3, i4) {
        entries5[i4].length = 2;
      } : function(v3, i4) {
        entries5[i4] = v3[1];
      }
    );
    return isKeyedCollection ? KeyedSeq(entries5) : isIndexed(collection) ? IndexedSeq(entries5) : SetSeq(entries5);
  }
  function maxFactory(collection, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = collection.toSeq().map(function(v3, k3) {
        return [v3, mapper(v3, k3, collection)];
      }).reduce(function(a4, b3) {
        return maxCompare(comparator, a4[1], b3[1]) ? b3 : a4;
      });
      return entry && entry[0];
    }
    return collection.reduce(function(a4, b3) {
      return maxCompare(comparator, a4, b3) ? b3 : a4;
    });
  }
  function maxCompare(comparator, a4, b3) {
    var comp = comparator(b3, a4);
    return comp === 0 && b3 !== a4 && (b3 === void 0 || b3 === null || b3 !== b3) || comp > 0;
  }
  function zipWithFactory(keyIter, zipper, iters, zipAll3) {
    var zipSequence = makeSequence(keyIter);
    var sizes = new ArraySeq(iters).map(function(i4) {
      return i4.size;
    });
    zipSequence.size = zipAll3 ? sizes.max() : sizes.min();
    zipSequence.__iterate = function(fn, reverse5) {
      var iterator = this.__iterator(ITERATE_VALUES, reverse5);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type2, reverse5) {
      var iterators = iters.map(
        function(i4) {
          return i4 = Collection(i4), getIterator(reverse5 ? i4.reverse() : i4);
        }
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function() {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i4) {
            return i4.next();
          });
          isDone = zipAll3 ? steps.every(function(s3) {
            return s3.done;
          }) : steps.some(function(s3) {
            return s3.done;
          });
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type2,
          iterations++,
          zipper.apply(
            null,
            steps.map(function(s3) {
              return s3.value;
            })
          )
        );
      });
    };
    return zipSequence;
  }
  function reify(iter, seq) {
    return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
  }
  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError("Expected [K, V] tuple: " + entry);
    }
  }
  function collectionClass(collection) {
    return isKeyed(collection) ? KeyedCollection : isIndexed(collection) ? IndexedCollection : SetCollection;
  }
  function makeSequence(collection) {
    return Object.create(
      (isKeyed(collection) ? KeyedSeq : isIndexed(collection) ? IndexedSeq : SetSeq).prototype
    );
  }
  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    }
    return Seq.prototype.cacheResult.call(this);
  }
  function defaultComparator(a4, b3) {
    if (a4 === void 0 && b3 === void 0) {
      return 0;
    }
    if (a4 === void 0) {
      return 1;
    }
    if (b3 === void 0) {
      return -1;
    }
    return a4 > b3 ? 1 : a4 < b3 ? -1 : 0;
  }
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }
  function invariant(condition, error) {
    if (!condition) {
      throw new Error(error);
    }
  }
  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      "Cannot perform this action with an infinite size."
    );
  }
  function coerceKeyPath(keyPath) {
    if (isArrayLike(keyPath) && typeof keyPath !== "string") {
      return keyPath;
    }
    if (isOrdered(keyPath)) {
      return keyPath.toArray();
    }
    throw new TypeError(
      "Invalid keyPath: expected Ordered Collection or Array: " + keyPath
    );
  }
  var toString2 = Object.prototype.toString;
  function isPlainObject(value) {
    if (!value || typeof value !== "object" || toString2.call(value) !== "[object Object]") {
      return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    var parentProto = proto;
    var nextProto = Object.getPrototypeOf(proto);
    while (nextProto !== null) {
      parentProto = nextProto;
      nextProto = Object.getPrototypeOf(parentProto);
    }
    return parentProto === proto;
  }
  function isDataStructure(value) {
    return typeof value === "object" && (isImmutable(value) || Array.isArray(value) || isPlainObject(value));
  }
  function quoteString(value) {
    try {
      return typeof value === "string" ? JSON.stringify(value) : String(value);
    } catch (_ignoreError) {
      return JSON.stringify(value);
    }
  }
  function has(collection, key) {
    return isImmutable(collection) ? collection.has(key) : isDataStructure(collection) && hasOwnProperty.call(collection, key);
  }
  function get(collection, key, notSetValue) {
    return isImmutable(collection) ? collection.get(key, notSetValue) : !has(collection, key) ? notSetValue : typeof collection.get === "function" ? collection.get(key) : collection[key];
  }
  function shallowCopy(from) {
    if (Array.isArray(from)) {
      return arrCopy(from);
    }
    var to = {};
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    return to;
  }
  function remove(collection, key) {
    if (!isDataStructure(collection)) {
      throw new TypeError(
        "Cannot update non-data-structure value: " + collection
      );
    }
    if (isImmutable(collection)) {
      if (!collection.remove) {
        throw new TypeError(
          "Cannot update immutable value without .remove() method: " + collection
        );
      }
      return collection.remove(key);
    }
    if (!hasOwnProperty.call(collection, key)) {
      return collection;
    }
    var collectionCopy = shallowCopy(collection);
    if (Array.isArray(collectionCopy)) {
      collectionCopy.splice(key, 1);
    } else {
      delete collectionCopy[key];
    }
    return collectionCopy;
  }
  function set(collection, key, value) {
    if (!isDataStructure(collection)) {
      throw new TypeError(
        "Cannot update non-data-structure value: " + collection
      );
    }
    if (isImmutable(collection)) {
      if (!collection.set) {
        throw new TypeError(
          "Cannot update immutable value without .set() method: " + collection
        );
      }
      return collection.set(key, value);
    }
    if (hasOwnProperty.call(collection, key) && value === collection[key]) {
      return collection;
    }
    var collectionCopy = shallowCopy(collection);
    collectionCopy[key] = value;
    return collectionCopy;
  }
  function updateIn$1(collection, keyPath, notSetValue, updater) {
    if (!updater) {
      updater = notSetValue;
      notSetValue = void 0;
    }
    var updatedValue = updateInDeeply(
      isImmutable(collection),
      collection,
      coerceKeyPath(keyPath),
      0,
      notSetValue,
      updater
    );
    return updatedValue === NOT_SET ? notSetValue : updatedValue;
  }
  function updateInDeeply(inImmutable, existing, keyPath, i4, notSetValue, updater) {
    var wasNotSet = existing === NOT_SET;
    if (i4 === keyPath.length) {
      var existingValue = wasNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    if (!wasNotSet && !isDataStructure(existing)) {
      throw new TypeError(
        "Cannot update within non-data-structure value in path [" + keyPath.slice(0, i4).map(quoteString) + "]: " + existing
      );
    }
    var key = keyPath[i4];
    var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
    var nextUpdated = updateInDeeply(
      nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
      nextExisting,
      keyPath,
      i4 + 1,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? remove(existing, key) : set(
      wasNotSet ? inImmutable ? emptyMap() : {} : existing,
      key,
      nextUpdated
    );
  }
  function setIn$1(collection, keyPath, value) {
    return updateIn$1(collection, keyPath, NOT_SET, function() {
      return value;
    });
  }
  function setIn(keyPath, v3) {
    return setIn$1(this, keyPath, v3);
  }
  function removeIn(collection, keyPath) {
    return updateIn$1(collection, keyPath, function() {
      return NOT_SET;
    });
  }
  function deleteIn(keyPath) {
    return removeIn(this, keyPath);
  }
  function update$1(collection, key, notSetValue, updater) {
    return updateIn$1(collection, [key], notSetValue, updater);
  }
  function update(key, notSetValue, updater) {
    return arguments.length === 1 ? key(this) : update$1(this, key, notSetValue, updater);
  }
  function updateIn(keyPath, notSetValue, updater) {
    return updateIn$1(this, keyPath, notSetValue, updater);
  }
  function merge$1() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    return mergeIntoKeyedWith(this, iters);
  }
  function mergeWith$1(merger) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
      iters[len] = arguments[len + 1];
    if (typeof merger !== "function") {
      throw new TypeError("Invalid merger function: " + merger);
    }
    return mergeIntoKeyedWith(this, iters, merger);
  }
  function mergeIntoKeyedWith(collection, collections, merger) {
    var iters = [];
    for (var ii = 0; ii < collections.length; ii++) {
      var collection$1 = KeyedCollection(collections[ii]);
      if (collection$1.size !== 0) {
        iters.push(collection$1);
      }
    }
    if (iters.length === 0) {
      return collection;
    }
    if (collection.toSeq().size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection2) {
      var mergeIntoCollection = merger ? function(value, key) {
        update$1(
          collection2,
          key,
          NOT_SET,
          function(oldVal) {
            return oldVal === NOT_SET ? value : merger(oldVal, value, key);
          }
        );
      } : function(value, key) {
        collection2.set(key, value);
      };
      for (var ii2 = 0; ii2 < iters.length; ii2++) {
        iters[ii2].forEach(mergeIntoCollection);
      }
    });
  }
  function mergeDeepWithSources(collection, sources, merger) {
    return mergeWithSources(collection, sources, deepMergerWith(merger));
  }
  function mergeWithSources(collection, sources, merger) {
    if (!isDataStructure(collection)) {
      throw new TypeError(
        "Cannot merge into non-data-structure value: " + collection
      );
    }
    if (isImmutable(collection)) {
      return typeof merger === "function" && collection.mergeWith ? collection.mergeWith.apply(collection, [merger].concat(sources)) : collection.merge ? collection.merge.apply(collection, sources) : collection.concat.apply(collection, sources);
    }
    var isArray = Array.isArray(collection);
    var merged = collection;
    var Collection5 = isArray ? IndexedCollection : KeyedCollection;
    var mergeItem = isArray ? function(value) {
      if (merged === collection) {
        merged = shallowCopy(merged);
      }
      merged.push(value);
    } : function(value, key) {
      var hasVal = hasOwnProperty.call(merged, key);
      var nextVal = hasVal && merger ? merger(merged[key], value, key) : value;
      if (!hasVal || nextVal !== merged[key]) {
        if (merged === collection) {
          merged = shallowCopy(merged);
        }
        merged[key] = nextVal;
      }
    };
    for (var i4 = 0; i4 < sources.length; i4++) {
      Collection5(sources[i4]).forEach(mergeItem);
    }
    return merged;
  }
  function deepMergerWith(merger) {
    function deepMerger(oldValue, newValue, key) {
      return isDataStructure(oldValue) && isDataStructure(newValue) && areMergeable(oldValue, newValue) ? mergeWithSources(oldValue, [newValue], deepMerger) : merger ? merger(oldValue, newValue, key) : newValue;
    }
    return deepMerger;
  }
  function areMergeable(oldDataStructure, newDataStructure) {
    var oldSeq = Seq(oldDataStructure);
    var newSeq = Seq(newDataStructure);
    return isIndexed(oldSeq) === isIndexed(newSeq) && isKeyed(oldSeq) === isKeyed(newSeq);
  }
  function mergeDeep() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    return mergeDeepWithSources(this, iters);
  }
  function mergeDeepWith(merger) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
      iters[len] = arguments[len + 1];
    return mergeDeepWithSources(this, iters, merger);
  }
  function mergeIn(keyPath) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
      iters[len] = arguments[len + 1];
    return updateIn$1(this, keyPath, emptyMap(), function(m3) {
      return mergeWithSources(m3, iters);
    });
  }
  function mergeDeepIn(keyPath) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
      iters[len] = arguments[len + 1];
    return updateIn$1(
      this,
      keyPath,
      emptyMap(),
      function(m3) {
        return mergeDeepWithSources(m3, iters);
      }
    );
  }
  function withMutations(fn) {
    var mutable = this.asMutable();
    fn(mutable);
    return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
  }
  function asMutable() {
    return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
  }
  function asImmutable() {
    return this.__ensureOwner();
  }
  function wasAltered() {
    return this.__altered;
  }
  var Map2 = /* @__PURE__ */ function(KeyedCollection3) {
    function Map4(value) {
      return value === void 0 || value === null ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map5) {
        var iter = KeyedCollection3(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v3, k3) {
          return map5.set(k3, v3);
        });
      });
    }
    if (KeyedCollection3)
      Map4.__proto__ = KeyedCollection3;
    Map4.prototype = Object.create(KeyedCollection3 && KeyedCollection3.prototype);
    Map4.prototype.constructor = Map4;
    Map4.prototype.toString = function toString8() {
      return this.__toString("Map {", "}");
    };
    Map4.prototype.get = function get24(k3, notSetValue) {
      return this._root ? this._root.get(0, void 0, k3, notSetValue) : notSetValue;
    };
    Map4.prototype.set = function set7(k3, v3) {
      return updateMap(this, k3, v3);
    };
    Map4.prototype.remove = function remove7(k3) {
      return updateMap(this, k3, NOT_SET);
    };
    Map4.prototype.deleteAll = function deleteAll(keys3) {
      var collection = Collection(keys3);
      if (collection.size === 0) {
        return this;
      }
      return this.withMutations(function(map5) {
        collection.forEach(function(key) {
          return map5.remove(key);
        });
      });
    };
    Map4.prototype.clear = function clear3() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };
    Map4.prototype.sort = function sort3(comparator) {
      return OrderedMap(sortFactory(this, comparator));
    };
    Map4.prototype.sortBy = function sortBy3(mapper, comparator) {
      return OrderedMap(sortFactory(this, comparator, mapper));
    };
    Map4.prototype.map = function map5(mapper, context) {
      var this$1$1 = this;
      return this.withMutations(function(map6) {
        map6.forEach(function(value, key) {
          map6.set(key, mapper.call(context, value, key, this$1$1));
        });
      });
    };
    Map4.prototype.__iterator = function __iterator3(type2, reverse5) {
      return new MapIterator(this, type2, reverse5);
    };
    Map4.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1$1 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry) {
        iterations++;
        return fn(entry[1], entry[0], this$1$1);
      }, reverse5);
      return iterations;
    };
    Map4.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptyMap();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };
    return Map4;
  }(KeyedCollection);
  Map2.isMap = isMap;
  var MapPrototype = Map2.prototype;
  MapPrototype[IS_MAP_SYMBOL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeAll = MapPrototype.deleteAll;
  MapPrototype.setIn = setIn;
  MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
  MapPrototype.update = update;
  MapPrototype.updateIn = updateIn;
  MapPrototype.merge = MapPrototype.concat = merge$1;
  MapPrototype.mergeWith = mergeWith$1;
  MapPrototype.mergeDeep = mergeDeep;
  MapPrototype.mergeDeepWith = mergeDeepWith;
  MapPrototype.mergeIn = mergeIn;
  MapPrototype.mergeDeepIn = mergeDeepIn;
  MapPrototype.withMutations = withMutations;
  MapPrototype.wasAltered = wasAltered;
  MapPrototype.asImmutable = asImmutable;
  MapPrototype["@@transducer/init"] = MapPrototype.asMutable = asMutable;
  MapPrototype["@@transducer/step"] = function(result, arr) {
    return result.set(arr[0], arr[1]);
  };
  MapPrototype["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  var ArrayMapNode = function ArrayMapNode2(ownerID, entries5) {
    this.ownerID = ownerID;
    this.entries = entries5;
  };
  ArrayMapNode.prototype.get = function get2(shift, keyHash, key, notSetValue) {
    var entries5 = this.entries;
    for (var ii = 0, len = entries5.length; ii < len; ii++) {
      if (is(key, entries5[ii][0])) {
        return entries5[ii][1];
      }
    }
    return notSetValue;
  };
  ArrayMapNode.prototype.update = function update2(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var entries5 = this.entries;
    var idx = 0;
    var len = entries5.length;
    for (; idx < len; idx++) {
      if (is(key, entries5[idx][0])) {
        break;
      }
    }
    var exists = idx < len;
    if (exists ? entries5[idx][1] === value : removed) {
      return this;
    }
    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);
    if (removed && entries5.length === 1) {
      return;
    }
    if (!exists && !removed && entries5.length >= MAX_ARRAY_MAP_SIZE) {
      return createNodes(ownerID, entries5, key, value);
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries5 : arrCopy(entries5);
    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
    }
    if (isEditable) {
      this.entries = newEntries;
      return this;
    }
    return new ArrayMapNode(ownerID, newEntries);
  };
  var BitmapIndexedNode = function BitmapIndexedNode2(ownerID, bitmap, nodes) {
    this.ownerID = ownerID;
    this.bitmap = bitmap;
    this.nodes = nodes;
  };
  BitmapIndexedNode.prototype.get = function get3(shift, keyHash, key, notSetValue) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
    var bitmap = this.bitmap;
    return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(
      shift + SHIFT,
      keyHash,
      key,
      notSetValue
    );
  };
  BitmapIndexedNode.prototype.update = function update3(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var bit = 1 << keyHashFrag;
    var bitmap = this.bitmap;
    var exists = (bitmap & bit) !== 0;
    if (!exists && value === NOT_SET) {
      return this;
    }
    var idx = popCount(bitmap & bit - 1);
    var nodes = this.nodes;
    var node = exists ? nodes[idx] : void 0;
    var newNode = updateNode(
      node,
      ownerID,
      shift + SHIFT,
      keyHash,
      key,
      value,
      didChangeSize,
      didAlter
    );
    if (newNode === node) {
      return this;
    }
    if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
      return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
    }
    if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
      return nodes[idx ^ 1];
    }
    if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
      return newNode;
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
    var newNodes = exists ? newNode ? setAt(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
    if (isEditable) {
      this.bitmap = newBitmap;
      this.nodes = newNodes;
      return this;
    }
    return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
  };
  var HashArrayMapNode = function HashArrayMapNode2(ownerID, count4, nodes) {
    this.ownerID = ownerID;
    this.count = count4;
    this.nodes = nodes;
  };
  HashArrayMapNode.prototype.get = function get4(shift, keyHash, key, notSetValue) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var node = this.nodes[idx];
    return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
  };
  HashArrayMapNode.prototype.update = function update4(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var removed = value === NOT_SET;
    var nodes = this.nodes;
    var node = nodes[idx];
    if (removed && !node) {
      return this;
    }
    var newNode = updateNode(
      node,
      ownerID,
      shift + SHIFT,
      keyHash,
      key,
      value,
      didChangeSize,
      didAlter
    );
    if (newNode === node) {
      return this;
    }
    var newCount = this.count;
    if (!node) {
      newCount++;
    } else if (!newNode) {
      newCount--;
      if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
        return packNodes(ownerID, nodes, newCount, idx);
      }
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newNodes = setAt(nodes, idx, newNode, isEditable);
    if (isEditable) {
      this.count = newCount;
      this.nodes = newNodes;
      return this;
    }
    return new HashArrayMapNode(ownerID, newCount, newNodes);
  };
  var HashCollisionNode = function HashCollisionNode2(ownerID, keyHash, entries5) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entries = entries5;
  };
  HashCollisionNode.prototype.get = function get5(shift, keyHash, key, notSetValue) {
    var entries5 = this.entries;
    for (var ii = 0, len = entries5.length; ii < len; ii++) {
      if (is(key, entries5[ii][0])) {
        return entries5[ii][1];
      }
    }
    return notSetValue;
  };
  HashCollisionNode.prototype.update = function update5(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var removed = value === NOT_SET;
    if (keyHash !== this.keyHash) {
      if (removed) {
        return this;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
    }
    var entries5 = this.entries;
    var idx = 0;
    var len = entries5.length;
    for (; idx < len; idx++) {
      if (is(key, entries5[idx][0])) {
        break;
      }
    }
    var exists = idx < len;
    if (exists ? entries5[idx][1] === value : removed) {
      return this;
    }
    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);
    if (removed && len === 2) {
      return new ValueNode(ownerID, this.keyHash, entries5[idx ^ 1]);
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries5 : arrCopy(entries5);
    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
    }
    if (isEditable) {
      this.entries = newEntries;
      return this;
    }
    return new HashCollisionNode(ownerID, this.keyHash, newEntries);
  };
  var ValueNode = function ValueNode2(ownerID, keyHash, entry) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entry = entry;
  };
  ValueNode.prototype.get = function get6(shift, keyHash, key, notSetValue) {
    return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
  };
  ValueNode.prototype.update = function update6(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var keyMatch = is(key, this.entry[0]);
    if (keyMatch ? value === this.entry[1] : removed) {
      return this;
    }
    SetRef(didAlter);
    if (removed) {
      SetRef(didChangeSize);
      return;
    }
    if (keyMatch) {
      if (ownerID && ownerID === this.ownerID) {
        this.entry[1] = value;
        return this;
      }
      return new ValueNode(ownerID, this.keyHash, [key, value]);
    }
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
  };
  ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse5) {
    var entries5 = this.entries;
    for (var ii = 0, maxIndex = entries5.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries5[reverse5 ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  };
  BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse5) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse5 ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse5) === false) {
        return false;
      }
    }
  };
  ValueNode.prototype.iterate = function(fn, reverse5) {
    return fn(this.entry);
  };
  var MapIterator = /* @__PURE__ */ function(Iterator5) {
    function MapIterator3(map5, type2, reverse5) {
      this._type = type2;
      this._reverse = reverse5;
      this._stack = map5._root && mapIteratorFrame(map5._root);
    }
    if (Iterator5)
      MapIterator3.__proto__ = Iterator5;
    MapIterator3.prototype = Object.create(Iterator5 && Iterator5.prototype);
    MapIterator3.prototype.constructor = MapIterator3;
    MapIterator3.prototype.next = function next() {
      var type2 = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex = void 0;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type2, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(
              type2,
              node.entries[this._reverse ? maxIndex - index : index]
            );
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type2, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };
    return MapIterator3;
  }(Iterator);
  function mapIteratorValue(type2, entry) {
    return iteratorValue(type2, entry[0], entry[1]);
  }
  function mapIteratorFrame(node, prev) {
    return {
      node,
      index: 0,
      __prev: prev
    };
  }
  function makeMap(size, root2, ownerID, hash3) {
    var map5 = Object.create(MapPrototype);
    map5.size = size;
    map5._root = root2;
    map5.__ownerID = ownerID;
    map5.__hash = hash3;
    map5.__altered = false;
    return map5;
  }
  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }
  function updateMap(map5, k3, v3) {
    var newRoot;
    var newSize;
    if (!map5._root) {
      if (v3 === NOT_SET) {
        return map5;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map5.__ownerID, [[k3, v3]]);
    } else {
      var didChangeSize = MakeRef();
      var didAlter = MakeRef();
      newRoot = updateNode(
        map5._root,
        map5.__ownerID,
        0,
        void 0,
        k3,
        v3,
        didChangeSize,
        didAlter
      );
      if (!didAlter.value) {
        return map5;
      }
      newSize = map5.size + (didChangeSize.value ? v3 === NOT_SET ? -1 : 1 : 0);
    }
    if (map5.__ownerID) {
      map5.size = newSize;
      map5._root = newRoot;
      map5.__hash = void 0;
      map5.__altered = true;
      return map5;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }
  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(
      ownerID,
      shift,
      keyHash,
      key,
      value,
      didChangeSize,
      didAlter
    );
  }
  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }
  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }
    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var newNode;
    var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
    return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
  }
  function createNodes(ownerID, entries5, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries5.length; ii++) {
      var entry = entries5[ii];
      node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
    }
    return node;
  }
  function packNodes(ownerID, nodes, count4, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count4);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== void 0 && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }
  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count4 = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count4++] : void 0;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count4 + 1, expandedNodes);
  }
  function popCount(x3) {
    x3 -= x3 >> 1 & 1431655765;
    x3 = (x3 & 858993459) + (x3 >> 2 & 858993459);
    x3 = x3 + (x3 >> 4) & 252645135;
    x3 += x3 >> 8;
    x3 += x3 >> 16;
    return x3 & 127;
  }
  function setAt(array3, idx, val, canEdit) {
    var newArray = canEdit ? array3 : arrCopy(array3);
    newArray[idx] = val;
    return newArray;
  }
  function spliceIn(array3, idx, val, canEdit) {
    var newLen = array3.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array3[idx] = val;
      return array3;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array3[ii + after];
      }
    }
    return newArray;
  }
  function spliceOut(array3, idx, canEdit) {
    var newLen = array3.length - 1;
    if (canEdit && idx === newLen) {
      array3.pop();
      return array3;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array3[ii + after];
    }
    return newArray;
  }
  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
  var IS_LIST_SYMBOL = "@@__IMMUTABLE_LIST__@@";
  function isList(maybeList) {
    return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
  }
  var List = /* @__PURE__ */ function(IndexedCollection3) {
    function List3(value) {
      var empty2 = emptyList();
      if (value === void 0 || value === null) {
        return empty2;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedCollection3(value);
      var size = iter.size;
      if (size === 0) {
        return empty2;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty2.withMutations(function(list) {
        list.setSize(size);
        iter.forEach(function(v3, i4) {
          return list.set(i4, v3);
        });
      });
    }
    if (IndexedCollection3)
      List3.__proto__ = IndexedCollection3;
    List3.prototype = Object.create(IndexedCollection3 && IndexedCollection3.prototype);
    List3.prototype.constructor = List3;
    List3.of = function of() {
      return this(arguments);
    };
    List3.prototype.toString = function toString8() {
      return this.__toString("List [", "]");
    };
    List3.prototype.get = function get24(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };
    List3.prototype.set = function set7(index, value) {
      return updateList(this, index, value);
    };
    List3.prototype.remove = function remove7(index) {
      return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
    };
    List3.prototype.insert = function insert(index, value) {
      return this.splice(index, 0, value);
    };
    List3.prototype.clear = function clear3() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };
    List3.prototype.push = function push() {
      var values3 = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list) {
        setListBounds(list, 0, oldSize + values3.length);
        for (var ii = 0; ii < values3.length; ii++) {
          list.set(oldSize + ii, values3[ii]);
        }
      });
    };
    List3.prototype.pop = function pop() {
      return setListBounds(this, 0, -1);
    };
    List3.prototype.unshift = function unshift() {
      var values3 = arguments;
      return this.withMutations(function(list) {
        setListBounds(list, -values3.length);
        for (var ii = 0; ii < values3.length; ii++) {
          list.set(ii, values3[ii]);
        }
      });
    };
    List3.prototype.shift = function shift() {
      return setListBounds(this, 1);
    };
    List3.prototype.concat = function concat3() {
      var arguments$1 = arguments;
      var seqs = [];
      for (var i4 = 0; i4 < arguments.length; i4++) {
        var argument = arguments$1[i4];
        var seq = IndexedCollection3(
          typeof argument !== "string" && hasIterator(argument) ? argument : [argument]
        );
        if (seq.size !== 0) {
          seqs.push(seq);
        }
      }
      if (seqs.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
        return this.constructor(seqs[0]);
      }
      return this.withMutations(function(list) {
        seqs.forEach(function(seq2) {
          return seq2.forEach(function(value) {
            return list.push(value);
          });
        });
      });
    };
    List3.prototype.setSize = function setSize(size) {
      return setListBounds(this, 0, size);
    };
    List3.prototype.map = function map5(mapper, context) {
      var this$1$1 = this;
      return this.withMutations(function(list) {
        for (var i4 = 0; i4 < this$1$1.size; i4++) {
          list.set(i4, mapper.call(context, list.get(i4), i4, this$1$1));
        }
      });
    };
    List3.prototype.slice = function slice7(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };
    List3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var index = reverse5 ? this.size : 0;
      var values3 = iterateList(this, reverse5);
      return new Iterator(function() {
        var value = values3();
        return value === DONE ? iteratorDone() : iteratorValue(type2, reverse5 ? --index : index++, value);
      });
    };
    List3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var index = reverse5 ? this.size : 0;
      var values3 = iterateList(this, reverse5);
      var value;
      while ((value = values3()) !== DONE) {
        if (fn(value, reverse5 ? --index : index++, this) === false) {
          break;
        }
      }
      return index;
    };
    List3.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptyList();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeList(
        this._origin,
        this._capacity,
        this._level,
        this._root,
        this._tail,
        ownerID,
        this.__hash
      );
    };
    return List3;
  }(IndexedCollection);
  List.isList = isList;
  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SYMBOL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.merge = ListPrototype.concat;
  ListPrototype.setIn = setIn;
  ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
  ListPrototype.update = update;
  ListPrototype.updateIn = updateIn;
  ListPrototype.mergeIn = mergeIn;
  ListPrototype.mergeDeepIn = mergeDeepIn;
  ListPrototype.withMutations = withMutations;
  ListPrototype.wasAltered = wasAltered;
  ListPrototype.asImmutable = asImmutable;
  ListPrototype["@@transducer/init"] = ListPrototype.asMutable = asMutable;
  ListPrototype["@@transducer/step"] = function(result, arr) {
    return result.push(arr);
  };
  ListPrototype["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  var VNode = function VNode2(array3, ownerID) {
    this.array = array3;
    this.ownerID = ownerID;
  };
  VNode.prototype.removeBefore = function removeBefore(ownerID, level, index) {
    if ((index & (1 << level + SHIFT) - 1) === 0 || this.array.length === 0) {
      return this;
    }
    var originIndex = index >>> level & MASK;
    if (originIndex >= this.array.length) {
      return new VNode([], ownerID);
    }
    var removingFirst = originIndex === 0;
    var newChild;
    if (level > 0) {
      var oldChild = this.array[originIndex];
      newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
      if (newChild === oldChild && removingFirst) {
        return this;
      }
    }
    if (removingFirst && !newChild) {
      return this;
    }
    var editable = editableVNode(this, ownerID);
    if (!removingFirst) {
      for (var ii = 0; ii < originIndex; ii++) {
        editable.array[ii] = void 0;
      }
    }
    if (newChild) {
      editable.array[originIndex] = newChild;
    }
    return editable;
  };
  VNode.prototype.removeAfter = function removeAfter(ownerID, level, index) {
    if (index === (level ? 1 << level + SHIFT : SIZE) || this.array.length === 0) {
      return this;
    }
    var sizeIndex = index - 1 >>> level & MASK;
    if (sizeIndex >= this.array.length) {
      return this;
    }
    var newChild;
    if (level > 0) {
      var oldChild = this.array[sizeIndex];
      newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
      if (newChild === oldChild && sizeIndex === this.array.length - 1) {
        return this;
      }
    }
    var editable = editableVNode(this, ownerID);
    editable.array.splice(sizeIndex + 1);
    if (newChild) {
      editable.array[sizeIndex] = newChild;
    }
    return editable;
  };
  var DONE = {};
  function iterateList(list, reverse5) {
    var left2 = list._origin;
    var right2 = list._capacity;
    var tailPos = getTailOffset(right2);
    var tail = list._tail;
    return iterateNodeOrLeaf(list._root, list._level, 0);
    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
    }
    function iterateLeaf(node, offset) {
      var array3 = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left2 ? 0 : left2 - offset;
      var to = right2 - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function() {
        if (from === to) {
          return DONE;
        }
        var idx = reverse5 ? --to : from++;
        return array3 && array3[idx];
      };
    }
    function iterateNode(node, level, offset) {
      var values3;
      var array3 = node && node.array;
      var from = offset > left2 ? 0 : left2 - offset >> level;
      var to = (right2 - offset >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function() {
        while (true) {
          if (values3) {
            var value = values3();
            if (value !== DONE) {
              return value;
            }
            values3 = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse5 ? --to : from++;
          values3 = iterateNodeOrLeaf(
            array3 && array3[idx],
            level - SHIFT,
            offset + (idx << level)
          );
        }
      };
    }
  }
  function makeList(origin, capacity, level, root2, tail, ownerID, hash3) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root2;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash3;
    list.__altered = false;
    return list;
  }
  function emptyList() {
    return makeList(0, 0, SHIFT);
  }
  function updateList(list, index, value) {
    index = wrapIndex(list, index);
    if (index !== index) {
      return list;
    }
    if (index >= list.size || index < 0) {
      return list.withMutations(function(list2) {
        index < 0 ? setListBounds(list2, index).set(0, value) : setListBounds(list2, 0, index + 1).set(index, value);
      });
    }
    index += list._origin;
    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef();
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(
        newRoot,
        list.__ownerID,
        list._level,
        index,
        value,
        didAlter
      );
    }
    if (!didAlter.value) {
      return list;
    }
    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = void 0;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }
  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = index >>> level & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === void 0) {
      return node;
    }
    var newNode;
    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(
        lowerNode,
        ownerID,
        level - SHIFT,
        index,
        value,
        didAlter
      );
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }
    if (nodeHas && node.array[idx] === value) {
      return node;
    }
    if (didAlter) {
      SetRef(didAlter);
    }
    newNode = editableVNode(node, ownerID);
    if (value === void 0 && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }
  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }
  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << list._level + SHIFT) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[rawIndex >>> level & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }
  function setListBounds(list, begin, end) {
    if (begin !== void 0) {
      begin |= 0;
    }
    if (end !== void 0) {
      end |= 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === void 0 ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }
    if (newOrigin >= newCapacity) {
      return list.clear();
    }
    var newLevel = list._level;
    var newRoot = list._root;
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(
        newRoot && newRoot.array.length ? [void 0, newRoot] : [],
        owner
      );
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }
    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);
    while (newTailOffset >= 1 << newLevel + SHIFT) {
      newRoot = new VNode(
        newRoot && newRoot.array.length ? [newRoot] : [],
        owner
      );
      newLevel += SHIFT;
    }
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = oldTailOffset >>> level & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
    }
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;
      while (newRoot) {
        var beginIndex = newOrigin >>> newLevel & MASK;
        if (beginIndex !== newTailOffset >>> newLevel & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(
          owner,
          newLevel,
          newTailOffset - offsetShift
        );
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }
    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = void 0;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }
  function getTailOffset(size) {
    return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
  }
  var OrderedMap = /* @__PURE__ */ function(Map4) {
    function OrderedMap3(value) {
      return value === void 0 || value === null ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map5) {
        var iter = KeyedCollection(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v3, k3) {
          return map5.set(k3, v3);
        });
      });
    }
    if (Map4)
      OrderedMap3.__proto__ = Map4;
    OrderedMap3.prototype = Object.create(Map4 && Map4.prototype);
    OrderedMap3.prototype.constructor = OrderedMap3;
    OrderedMap3.of = function of() {
      return this(arguments);
    };
    OrderedMap3.prototype.toString = function toString8() {
      return this.__toString("OrderedMap {", "}");
    };
    OrderedMap3.prototype.get = function get24(k3, notSetValue) {
      var index = this._map.get(k3);
      return index !== void 0 ? this._list.get(index)[1] : notSetValue;
    };
    OrderedMap3.prototype.clear = function clear3() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        this.__altered = true;
        return this;
      }
      return emptyOrderedMap();
    };
    OrderedMap3.prototype.set = function set7(k3, v3) {
      return updateOrderedMap(this, k3, v3);
    };
    OrderedMap3.prototype.remove = function remove7(k3) {
      return updateOrderedMap(this, k3, NOT_SET);
    };
    OrderedMap3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1$1 = this;
      return this._list.__iterate(
        function(entry) {
          return entry && fn(entry[1], entry[0], this$1$1);
        },
        reverse5
      );
    };
    OrderedMap3.prototype.__iterator = function __iterator3(type2, reverse5) {
      return this._list.fromEntrySeq().__iterator(type2, reverse5);
    };
    OrderedMap3.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        if (this.size === 0) {
          return emptyOrderedMap();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };
    return OrderedMap3;
  }(Map2);
  OrderedMap.isOrderedMap = isOrderedMap;
  OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
  function makeOrderedMap(map5, list, ownerID, hash3) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map5 ? map5.size : 0;
    omap._map = map5;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash3;
    omap.__altered = false;
    return omap;
  }
  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }
  function updateOrderedMap(omap, k3, v3) {
    var map5 = omap._map;
    var list = omap._list;
    var i4 = map5.get(k3);
    var has9 = i4 !== void 0;
    var newMap;
    var newList;
    if (v3 === NOT_SET) {
      if (!has9) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map5.size * 2) {
        newList = list.filter(function(entry, idx) {
          return entry !== void 0 && i4 !== idx;
        });
        newMap = newList.toKeyedSeq().map(function(entry) {
          return entry[0];
        }).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map5.remove(k3);
        newList = i4 === list.size - 1 ? list.pop() : list.set(i4, void 0);
      }
    } else if (has9) {
      if (v3 === list.get(i4)[1]) {
        return omap;
      }
      newMap = map5;
      newList = list.set(i4, [k3, v3]);
    } else {
      newMap = map5.set(k3, list.size);
      newList = list.set(list.size, [k3, v3]);
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = void 0;
      omap.__altered = true;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }
  var IS_STACK_SYMBOL = "@@__IMMUTABLE_STACK__@@";
  function isStack(maybeStack) {
    return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
  }
  var Stack = /* @__PURE__ */ function(IndexedCollection3) {
    function Stack3(value) {
      return value === void 0 || value === null ? emptyStack() : isStack(value) ? value : emptyStack().pushAll(value);
    }
    if (IndexedCollection3)
      Stack3.__proto__ = IndexedCollection3;
    Stack3.prototype = Object.create(IndexedCollection3 && IndexedCollection3.prototype);
    Stack3.prototype.constructor = Stack3;
    Stack3.of = function of() {
      return this(arguments);
    };
    Stack3.prototype.toString = function toString8() {
      return this.__toString("Stack [", "]");
    };
    Stack3.prototype.get = function get24(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };
    Stack3.prototype.peek = function peek() {
      return this._head && this._head.value;
    };
    Stack3.prototype.push = function push() {
      var arguments$1 = arguments;
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments$1[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack3.prototype.pushAll = function pushAll(iter) {
      iter = IndexedCollection3(iter);
      if (iter.size === 0) {
        return this;
      }
      if (this.size === 0 && isStack(iter)) {
        return iter;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.__iterate(
        function(value) {
          newSize++;
          head = {
            value,
            next: head
          };
        },
        /* reverse */
        true
      );
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack3.prototype.pop = function pop() {
      return this.slice(1);
    };
    Stack3.prototype.clear = function clear3() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = void 0;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };
    Stack3.prototype.slice = function slice7(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        return IndexedCollection3.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack3.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptyStack();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };
    Stack3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1$1 = this;
      if (reverse5) {
        return new ArraySeq(this.toArray()).__iterate(
          function(v3, k3) {
            return fn(v3, k3, this$1$1);
          },
          reverse5
        );
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };
    Stack3.prototype.__iterator = function __iterator3(type2, reverse5) {
      if (reverse5) {
        return new ArraySeq(this.toArray()).__iterator(type2, reverse5);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function() {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type2, iterations++, value);
        }
        return iteratorDone();
      });
    };
    return Stack3;
  }(IndexedCollection);
  Stack.isStack = isStack;
  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SYMBOL] = true;
  StackPrototype.shift = StackPrototype.pop;
  StackPrototype.unshift = StackPrototype.push;
  StackPrototype.unshiftAll = StackPrototype.pushAll;
  StackPrototype.withMutations = withMutations;
  StackPrototype.wasAltered = wasAltered;
  StackPrototype.asImmutable = asImmutable;
  StackPrototype["@@transducer/init"] = StackPrototype.asMutable = asMutable;
  StackPrototype["@@transducer/step"] = function(result, arr) {
    return result.unshift(arr);
  };
  StackPrototype["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  function makeStack(size, head, ownerID, hash3) {
    var map5 = Object.create(StackPrototype);
    map5.size = size;
    map5._head = head;
    map5.__ownerID = ownerID;
    map5.__hash = hash3;
    map5.__altered = false;
    return map5;
  }
  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }
  var IS_SET_SYMBOL = "@@__IMMUTABLE_SET__@@";
  function isSet(maybeSet) {
    return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
  }
  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }
  function deepEqual(a4, b3) {
    if (a4 === b3) {
      return true;
    }
    if (!isCollection(b3) || a4.size !== void 0 && b3.size !== void 0 && a4.size !== b3.size || a4.__hash !== void 0 && b3.__hash !== void 0 && a4.__hash !== b3.__hash || isKeyed(a4) !== isKeyed(b3) || isIndexed(a4) !== isIndexed(b3) || isOrdered(a4) !== isOrdered(b3)) {
      return false;
    }
    if (a4.size === 0 && b3.size === 0) {
      return true;
    }
    var notAssociative = !isAssociative(a4);
    if (isOrdered(a4)) {
      var entries5 = a4.entries();
      return b3.every(function(v3, k3) {
        var entry = entries5.next().value;
        return entry && is(entry[1], v3) && (notAssociative || is(entry[0], k3));
      }) && entries5.next().done;
    }
    var flipped = false;
    if (a4.size === void 0) {
      if (b3.size === void 0) {
        if (typeof a4.cacheResult === "function") {
          a4.cacheResult();
        }
      } else {
        flipped = true;
        var _2 = a4;
        a4 = b3;
        b3 = _2;
      }
    }
    var allEqual = true;
    var bSize = b3.__iterate(function(v3, k3) {
      if (notAssociative ? !a4.has(v3) : flipped ? !is(v3, a4.get(k3, NOT_SET)) : !is(a4.get(k3, NOT_SET), v3)) {
        allEqual = false;
        return false;
      }
    });
    return allEqual && a4.size === bSize;
  }
  function mixin(ctor, methods) {
    var keyCopier = function(key) {
      ctor.prototype[key] = methods[key];
    };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }
  function toJS(value) {
    if (!value || typeof value !== "object") {
      return value;
    }
    if (!isCollection(value)) {
      if (!isDataStructure(value)) {
        return value;
      }
      value = Seq(value);
    }
    if (isKeyed(value)) {
      var result$1 = {};
      value.__iterate(function(v3, k3) {
        result$1[k3] = toJS(v3);
      });
      return result$1;
    }
    var result = [];
    value.__iterate(function(v3) {
      result.push(toJS(v3));
    });
    return result;
  }
  var Set2 = /* @__PURE__ */ function(SetCollection3) {
    function Set4(value) {
      return value === void 0 || value === null ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set7) {
        var iter = SetCollection3(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v3) {
          return set7.add(v3);
        });
      });
    }
    if (SetCollection3)
      Set4.__proto__ = SetCollection3;
    Set4.prototype = Object.create(SetCollection3 && SetCollection3.prototype);
    Set4.prototype.constructor = Set4;
    Set4.of = function of() {
      return this(arguments);
    };
    Set4.fromKeys = function fromKeys(value) {
      return this(KeyedCollection(value).keySeq());
    };
    Set4.intersect = function intersect(sets) {
      sets = Collection(sets).toArray();
      return sets.length ? SetPrototype.intersect.apply(Set4(sets.pop()), sets) : emptySet();
    };
    Set4.union = function union(sets) {
      sets = Collection(sets).toArray();
      return sets.length ? SetPrototype.union.apply(Set4(sets.pop()), sets) : emptySet();
    };
    Set4.prototype.toString = function toString8() {
      return this.__toString("Set {", "}");
    };
    Set4.prototype.has = function has9(value) {
      return this._map.has(value);
    };
    Set4.prototype.add = function add(value) {
      return updateSet(this, this._map.set(value, value));
    };
    Set4.prototype.remove = function remove7(value) {
      return updateSet(this, this._map.remove(value));
    };
    Set4.prototype.clear = function clear3() {
      return updateSet(this, this._map.clear());
    };
    Set4.prototype.map = function map5(mapper, context) {
      var this$1$1 = this;
      var didChanges = false;
      var newMap = updateSet(
        this,
        this._map.mapEntries(function(ref) {
          var v3 = ref[1];
          var mapped = mapper.call(context, v3, v3, this$1$1);
          if (mapped !== v3) {
            didChanges = true;
          }
          return [mapped, mapped];
        }, context)
      );
      return didChanges ? newMap : this;
    };
    Set4.prototype.union = function union() {
      var iters = [], len = arguments.length;
      while (len--)
        iters[len] = arguments[len];
      iters = iters.filter(function(x3) {
        return x3.size !== 0;
      });
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set7) {
        for (var ii = 0; ii < iters.length; ii++) {
          if (typeof iters[ii] === "string") {
            set7.add(iters[ii]);
          } else {
            SetCollection3(iters[ii]).forEach(function(value) {
              return set7.add(value);
            });
          }
        }
      });
    };
    Set4.prototype.intersect = function intersect() {
      var iters = [], len = arguments.length;
      while (len--)
        iters[len] = arguments[len];
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetCollection3(iter);
      });
      var toRemove = [];
      this.forEach(function(value) {
        if (!iters.every(function(iter) {
          return iter.includes(value);
        })) {
          toRemove.push(value);
        }
      });
      return this.withMutations(function(set7) {
        toRemove.forEach(function(value) {
          set7.remove(value);
        });
      });
    };
    Set4.prototype.subtract = function subtract() {
      var iters = [], len = arguments.length;
      while (len--)
        iters[len] = arguments[len];
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetCollection3(iter);
      });
      var toRemove = [];
      this.forEach(function(value) {
        if (iters.some(function(iter) {
          return iter.includes(value);
        })) {
          toRemove.push(value);
        }
      });
      return this.withMutations(function(set7) {
        toRemove.forEach(function(value) {
          set7.remove(value);
        });
      });
    };
    Set4.prototype.sort = function sort3(comparator) {
      return OrderedSet(sortFactory(this, comparator));
    };
    Set4.prototype.sortBy = function sortBy3(mapper, comparator) {
      return OrderedSet(sortFactory(this, comparator, mapper));
    };
    Set4.prototype.wasAltered = function wasAltered5() {
      return this._map.wasAltered();
    };
    Set4.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1$1 = this;
      return this._map.__iterate(function(k3) {
        return fn(k3, k3, this$1$1);
      }, reverse5);
    };
    Set4.prototype.__iterator = function __iterator3(type2, reverse5) {
      return this._map.__iterator(type2, reverse5);
    };
    Set4.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        if (this.size === 0) {
          return this.__empty();
        }
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };
    return Set4;
  }(SetCollection);
  Set2.isSet = isSet;
  var SetPrototype = Set2.prototype;
  SetPrototype[IS_SET_SYMBOL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
  SetPrototype.withMutations = withMutations;
  SetPrototype.asImmutable = asImmutable;
  SetPrototype["@@transducer/init"] = SetPrototype.asMutable = asMutable;
  SetPrototype["@@transducer/step"] = function(result, arr) {
    return result.add(arr);
  };
  SetPrototype["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;
  function updateSet(set7, newMap) {
    if (set7.__ownerID) {
      set7.size = newMap.size;
      set7._map = newMap;
      return set7;
    }
    return newMap === set7._map ? set7 : newMap.size === 0 ? set7.__empty() : set7.__make(newMap);
  }
  function makeSet(map5, ownerID) {
    var set7 = Object.create(SetPrototype);
    set7.size = map5 ? map5.size : 0;
    set7._map = map5;
    set7.__ownerID = ownerID;
    return set7;
  }
  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }
  var Range = /* @__PURE__ */ function(IndexedSeq3) {
    function Range3(start2, end, step) {
      if (step === void 0)
        step = 1;
      if (!(this instanceof Range3)) {
        return new Range3(start2, end, step);
      }
      invariant(step !== 0, "Cannot step a Range by 0");
      invariant(
        start2 !== void 0,
        "You must define a start value when using Range"
      );
      invariant(
        end !== void 0,
        "You must define an end value when using Range"
      );
      step = Math.abs(step);
      if (end < start2) {
        step = -step;
      }
      this._start = start2;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start2) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }
    if (IndexedSeq3)
      Range3.__proto__ = IndexedSeq3;
    Range3.prototype = Object.create(IndexedSeq3 && IndexedSeq3.prototype);
    Range3.prototype.constructor = Range3;
    Range3.prototype.toString = function toString8() {
      if (this.size === 0) {
        return "Range []";
      }
      return "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
    };
    Range3.prototype.get = function get24(index, notSetValue) {
      return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
    };
    Range3.prototype.includes = function includes5(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
    };
    Range3.prototype.slice = function slice7(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range3(0, 0);
      }
      return new Range3(
        this.get(begin, this._end),
        this.get(end, this._end),
        this._step
      );
    };
    Range3.prototype.indexOf = function indexOf3(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index;
        }
      }
      return -1;
    };
    Range3.prototype.lastIndexOf = function lastIndexOf3(searchValue) {
      return this.indexOf(searchValue);
    };
    Range3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var size = this.size;
      var step = this._step;
      var value = reverse5 ? this._start + (size - 1) * step : this._start;
      var i4 = 0;
      while (i4 !== size) {
        if (fn(value, reverse5 ? size - ++i4 : i4++, this) === false) {
          break;
        }
        value += reverse5 ? -step : step;
      }
      return i4;
    };
    Range3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var size = this.size;
      var step = this._step;
      var value = reverse5 ? this._start + (size - 1) * step : this._start;
      var i4 = 0;
      return new Iterator(function() {
        if (i4 === size) {
          return iteratorDone();
        }
        var v3 = value;
        value += reverse5 ? -step : step;
        return iteratorValue(type2, reverse5 ? size - ++i4 : i4++, v3);
      });
    };
    Range3.prototype.equals = function equals5(other) {
      return other instanceof Range3 ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
    };
    return Range3;
  }(IndexedSeq);
  var EMPTY_RANGE;
  function getIn$1(collection, searchKeyPath, notSetValue) {
    var keyPath = coerceKeyPath(searchKeyPath);
    var i4 = 0;
    while (i4 !== keyPath.length) {
      collection = get(collection, keyPath[i4++], NOT_SET);
      if (collection === NOT_SET) {
        return notSetValue;
      }
    }
    return collection;
  }
  function getIn(searchKeyPath, notSetValue) {
    return getIn$1(this, searchKeyPath, notSetValue);
  }
  function hasIn$1(collection, keyPath) {
    return getIn$1(collection, keyPath, NOT_SET) !== NOT_SET;
  }
  function hasIn(searchKeyPath) {
    return hasIn$1(this, searchKeyPath);
  }
  function toObject() {
    assertNotInfinite(this.size);
    var object = {};
    this.__iterate(function(v3, k3) {
      object[k3] = v3;
    });
    return object;
  }
  Collection.Iterator = Iterator;
  mixin(Collection, {
    // ### Conversion to other types
    toArray: function toArray() {
      assertNotInfinite(this.size);
      var array3 = new Array(this.size || 0);
      var useTuples = isKeyed(this);
      var i4 = 0;
      this.__iterate(function(v3, k3) {
        array3[i4++] = useTuples ? [k3, v3] : v3;
      });
      return array3;
    },
    toIndexedSeq: function toIndexedSeq() {
      return new ToIndexedSequence(this);
    },
    toJS: function toJS$1() {
      return toJS(this);
    },
    toKeyedSeq: function toKeyedSeq() {
      return new ToKeyedSequence(this, true);
    },
    toMap: function toMap() {
      return Map2(this.toKeyedSeq());
    },
    toObject,
    toOrderedMap: function toOrderedMap() {
      return OrderedMap(this.toKeyedSeq());
    },
    toOrderedSet: function toOrderedSet() {
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },
    toSet: function toSet() {
      return Set2(isKeyed(this) ? this.valueSeq() : this);
    },
    toSetSeq: function toSetSeq() {
      return new ToSetSequence(this);
    },
    toSeq: function toSeq() {
      return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
    },
    toStack: function toStack() {
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },
    toList: function toList() {
      return List(isKeyed(this) ? this.valueSeq() : this);
    },
    // ### Common JavaScript methods and properties
    toString: function toString3() {
      return "[Collection]";
    },
    __toString: function __toString(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    concat: function concat() {
      var values3 = [], len = arguments.length;
      while (len--)
        values3[len] = arguments[len];
      return reify(this, concatFactory(this, values3));
    },
    includes: function includes(searchValue) {
      return this.some(function(value) {
        return is(value, searchValue);
      });
    },
    entries: function entries() {
      return this.__iterator(ITERATE_ENTRIES);
    },
    every: function every(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v3, k3, c3) {
        if (!predicate.call(context, v3, k3, c3)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },
    filter: function filter(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },
    partition: function partition(predicate, context) {
      return partitionFactory(this, predicate, context);
    },
    find: function find(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },
    forEach: function forEach(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },
    join: function join(separator) {
      assertNotInfinite(this.size);
      separator = separator !== void 0 ? "" + separator : ",";
      var joined = "";
      var isFirst = true;
      this.__iterate(function(v3) {
        isFirst ? isFirst = false : joined += separator;
        joined += v3 !== null && v3 !== void 0 ? v3.toString() : "";
      });
      return joined;
    },
    keys: function keys() {
      return this.__iterator(ITERATE_KEYS);
    },
    map: function map(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },
    reduce: function reduce$1(reducer, initialReduction, context) {
      return reduce(
        this,
        reducer,
        initialReduction,
        context,
        arguments.length < 2,
        false
      );
    },
    reduceRight: function reduceRight(reducer, initialReduction, context) {
      return reduce(
        this,
        reducer,
        initialReduction,
        context,
        arguments.length < 2,
        true
      );
    },
    reverse: function reverse() {
      return reify(this, reverseFactory(this, true));
    },
    slice: function slice(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },
    some: function some(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = false;
      this.__iterate(function(v3, k3, c3) {
        if (predicate.call(context, v3, k3, c3)) {
          returnValue = true;
          return false;
        }
      });
      return returnValue;
    },
    sort: function sort(comparator) {
      return reify(this, sortFactory(this, comparator));
    },
    values: function values() {
      return this.__iterator(ITERATE_VALUES);
    },
    // ### More sequential methods
    butLast: function butLast() {
      return this.slice(0, -1);
    },
    isEmpty: function isEmpty() {
      return this.size !== void 0 ? this.size === 0 : !this.some(function() {
        return true;
      });
    },
    count: function count(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },
    countBy: function countBy(grouper, context) {
      return countByFactory(this, grouper, context);
    },
    equals: function equals(other) {
      return deepEqual(this, other);
    },
    entrySeq: function entrySeq() {
      var collection = this;
      if (collection._cache) {
        return new ArraySeq(collection._cache);
      }
      var entriesSequence = collection.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function() {
        return collection.toSeq();
      };
      return entriesSequence;
    },
    filterNot: function filterNot(predicate, context) {
      return this.filter(not(predicate), context);
    },
    findEntry: function findEntry(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v3, k3, c3) {
        if (predicate.call(context, v3, k3, c3)) {
          found = [k3, v3];
          return false;
        }
      });
      return found;
    },
    findKey: function findKey(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },
    findLast: function findLast(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },
    findLastEntry: function findLastEntry(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },
    findLastKey: function findLastKey(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },
    first: function first(notSetValue) {
      return this.find(returnTrue, null, notSetValue);
    },
    flatMap: function flatMap(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },
    flatten: function flatten(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },
    fromEntrySeq: function fromEntrySeq() {
      return new FromEntriesSequence(this);
    },
    get: function get7(searchKey, notSetValue) {
      return this.find(function(_2, key) {
        return is(key, searchKey);
      }, void 0, notSetValue);
    },
    getIn,
    groupBy: function groupBy(grouper, context) {
      return groupByFactory(this, grouper, context);
    },
    has: function has2(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },
    hasIn,
    isSubset: function isSubset(iter) {
      iter = typeof iter.includes === "function" ? iter : Collection(iter);
      return this.every(function(value) {
        return iter.includes(value);
      });
    },
    isSuperset: function isSuperset(iter) {
      iter = typeof iter.isSubset === "function" ? iter : Collection(iter);
      return iter.isSubset(this);
    },
    keyOf: function keyOf(searchValue) {
      return this.findKey(function(value) {
        return is(value, searchValue);
      });
    },
    keySeq: function keySeq() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },
    last: function last(notSetValue) {
      return this.toSeq().reverse().first(notSetValue);
    },
    lastKeyOf: function lastKeyOf(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },
    max: function max(comparator) {
      return maxFactory(this, comparator);
    },
    maxBy: function maxBy(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },
    min: function min(comparator) {
      return maxFactory(
        this,
        comparator ? neg(comparator) : defaultNegComparator
      );
    },
    minBy: function minBy(mapper, comparator) {
      return maxFactory(
        this,
        comparator ? neg(comparator) : defaultNegComparator,
        mapper
      );
    },
    rest: function rest() {
      return this.slice(1);
    },
    skip: function skip(amount) {
      return amount === 0 ? this : this.slice(Math.max(0, amount));
    },
    skipLast: function skipLast(amount) {
      return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
    },
    skipWhile: function skipWhile(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },
    skipUntil: function skipUntil(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },
    sortBy: function sortBy(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },
    take: function take(amount) {
      return this.slice(0, Math.max(0, amount));
    },
    takeLast: function takeLast(amount) {
      return this.slice(-Math.max(0, amount));
    },
    takeWhile: function takeWhile(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },
    takeUntil: function takeUntil(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },
    update: function update7(fn) {
      return fn(this);
    },
    valueSeq: function valueSeq() {
      return this.toIndexedSeq();
    },
    // ### Hashable Object
    hashCode: function hashCode() {
      return this.__hash || (this.__hash = hashCollection(this));
    }
    // ### Internal
    // abstract __iterate(fn, reverse)
    // abstract __iterator(type, reverse)
  });
  var CollectionPrototype = Collection.prototype;
  CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
  CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
  CollectionPrototype.toJSON = CollectionPrototype.toArray;
  CollectionPrototype.__toStringMapper = quoteString;
  CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
    return this.toString();
  };
  CollectionPrototype.chain = CollectionPrototype.flatMap;
  CollectionPrototype.contains = CollectionPrototype.includes;
  mixin(KeyedCollection, {
    // ### More sequential methods
    flip: function flip() {
      return reify(this, flipFactory(this));
    },
    mapEntries: function mapEntries(mapper, context) {
      var this$1$1 = this;
      var iterations = 0;
      return reify(
        this,
        this.toSeq().map(function(v3, k3) {
          return mapper.call(context, [k3, v3], iterations++, this$1$1);
        }).fromEntrySeq()
      );
    },
    mapKeys: function mapKeys(mapper, context) {
      var this$1$1 = this;
      return reify(
        this,
        this.toSeq().flip().map(function(k3, v3) {
          return mapper.call(context, k3, v3, this$1$1);
        }).flip()
      );
    }
  });
  var KeyedCollectionPrototype = KeyedCollection.prototype;
  KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
  KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
  KeyedCollectionPrototype.toJSON = toObject;
  KeyedCollectionPrototype.__toStringMapper = function(v3, k3) {
    return quoteString(k3) + ": " + quoteString(v3);
  };
  mixin(IndexedCollection, {
    // ### Conversion to other types
    toKeyedSeq: function toKeyedSeq2() {
      return new ToKeyedSequence(this, false);
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    filter: function filter2(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },
    findIndex: function findIndex(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    indexOf: function indexOf(searchValue) {
      var key = this.keyOf(searchValue);
      return key === void 0 ? -1 : key;
    },
    lastIndexOf: function lastIndexOf(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === void 0 ? -1 : key;
    },
    reverse: function reverse2() {
      return reify(this, reverseFactory(this, false));
    },
    slice: function slice2(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },
    splice: function splice(index, removeNum) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum || 0, 0);
      if (numArgs === 0 || numArgs === 2 && !removeNum) {
        return this;
      }
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },
    // ### More collection methods
    findLastIndex: function findLastIndex(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    first: function first2(notSetValue) {
      return this.get(0, notSetValue);
    },
    flatten: function flatten2(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },
    get: function get8(index, notSetValue) {
      index = wrapIndex(this, index);
      return index < 0 || this.size === Infinity || this.size !== void 0 && index > this.size ? notSetValue : this.find(function(_2, key) {
        return key === index;
      }, void 0, notSetValue);
    },
    has: function has3(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
    },
    interpose: function interpose(separator) {
      return reify(this, interposeFactory(this, separator));
    },
    interleave: function interleave() {
      var collections = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * collections.length;
      }
      return reify(this, interleaved);
    },
    keySeq: function keySeq2() {
      return Range(0, this.size);
    },
    last: function last2(notSetValue) {
      return this.get(-1, notSetValue);
    },
    skipWhile: function skipWhile2(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },
    zip: function zip() {
      var collections = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, collections));
    },
    zipAll: function zipAll() {
      var collections = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, collections, true));
    },
    zipWith: function zipWith(zipper) {
      var collections = arrCopy(arguments);
      collections[0] = this;
      return reify(this, zipWithFactory(this, zipper, collections));
    }
  });
  var IndexedCollectionPrototype = IndexedCollection.prototype;
  IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
  IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;
  mixin(SetCollection, {
    // ### ES6 Collection methods (ES6 Array and Map)
    get: function get9(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },
    includes: function includes2(value) {
      return this.has(value);
    },
    // ### More sequential methods
    keySeq: function keySeq3() {
      return this.valueSeq();
    }
  });
  var SetCollectionPrototype = SetCollection.prototype;
  SetCollectionPrototype.has = CollectionPrototype.includes;
  SetCollectionPrototype.contains = SetCollectionPrototype.includes;
  SetCollectionPrototype.keys = SetCollectionPrototype.values;
  mixin(KeyedSeq, KeyedCollectionPrototype);
  mixin(IndexedSeq, IndexedCollectionPrototype);
  mixin(SetSeq, SetCollectionPrototype);
  function reduce(collection, reducer, reduction, context, useFirst, reverse5) {
    assertNotInfinite(collection.size);
    collection.__iterate(function(v3, k3, c3) {
      if (useFirst) {
        useFirst = false;
        reduction = v3;
      } else {
        reduction = reducer.call(context, reduction, v3, k3, c3);
      }
    }, reverse5);
    return reduction;
  }
  function keyMapper(v3, k3) {
    return k3;
  }
  function entryMapper(v3, k3) {
    return [k3, v3];
  }
  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  }
  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    };
  }
  function defaultZipper() {
    return arrCopy(arguments);
  }
  function defaultNegComparator(a4, b3) {
    return a4 < b3 ? 1 : a4 > b3 ? -1 : 0;
  }
  function hashCollection(collection) {
    if (collection.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(collection);
    var keyed = isKeyed(collection);
    var h3 = ordered ? 1 : 0;
    collection.__iterate(
      keyed ? ordered ? function(v3, k3) {
        h3 = 31 * h3 + hashMerge(hash(v3), hash(k3)) | 0;
      } : function(v3, k3) {
        h3 = h3 + hashMerge(hash(v3), hash(k3)) | 0;
      } : ordered ? function(v3) {
        h3 = 31 * h3 + hash(v3) | 0;
      } : function(v3) {
        h3 = h3 + hash(v3) | 0;
      }
    );
    return murmurHashOfSize(collection.size, h3);
  }
  function murmurHashOfSize(size, h3) {
    h3 = imul(h3, 3432918353);
    h3 = imul(h3 << 15 | h3 >>> -15, 461845907);
    h3 = imul(h3 << 13 | h3 >>> -13, 5);
    h3 = (h3 + 3864292196 | 0) ^ size;
    h3 = imul(h3 ^ h3 >>> 16, 2246822507);
    h3 = imul(h3 ^ h3 >>> 13, 3266489909);
    h3 = smi(h3 ^ h3 >>> 16);
    return h3;
  }
  function hashMerge(a4, b3) {
    return a4 ^ b3 + 2654435769 + (a4 << 6) + (a4 >> 2) | 0;
  }
  var OrderedSet = /* @__PURE__ */ function(Set4) {
    function OrderedSet3(value) {
      return value === void 0 || value === null ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set7) {
        var iter = SetCollection(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v3) {
          return set7.add(v3);
        });
      });
    }
    if (Set4)
      OrderedSet3.__proto__ = Set4;
    OrderedSet3.prototype = Object.create(Set4 && Set4.prototype);
    OrderedSet3.prototype.constructor = OrderedSet3;
    OrderedSet3.of = function of() {
      return this(arguments);
    };
    OrderedSet3.fromKeys = function fromKeys(value) {
      return this(KeyedCollection(value).keySeq());
    };
    OrderedSet3.prototype.toString = function toString8() {
      return this.__toString("OrderedSet {", "}");
    };
    return OrderedSet3;
  }(Set2);
  OrderedSet.isOrderedSet = isOrderedSet;
  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
  OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
  OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;
  OrderedSetPrototype.zipAll = IndexedCollectionPrototype.zipAll;
  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;
  function makeOrderedSet(map5, ownerID) {
    var set7 = Object.create(OrderedSetPrototype);
    set7.size = map5 ? map5.size : 0;
    set7._map = map5;
    set7.__ownerID = ownerID;
    return set7;
  }
  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }
  function throwOnInvalidDefaultValues(defaultValues) {
    if (isRecord(defaultValues)) {
      throw new Error(
        "Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead."
      );
    }
    if (isImmutable(defaultValues)) {
      throw new Error(
        "Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead."
      );
    }
    if (defaultValues === null || typeof defaultValues !== "object") {
      throw new Error(
        "Can not call `Record` with a non-object as default values. Use a plain javascript object instead."
      );
    }
  }
  var Record = function Record2(defaultValues, name) {
    var hasInitialized;
    throwOnInvalidDefaultValues(defaultValues);
    var RecordType = function Record5(values3) {
      var this$1$1 = this;
      if (values3 instanceof RecordType) {
        return values3;
      }
      if (!(this instanceof RecordType)) {
        return new RecordType(values3);
      }
      if (!hasInitialized) {
        hasInitialized = true;
        var keys3 = Object.keys(defaultValues);
        var indices = RecordTypePrototype._indices = {};
        RecordTypePrototype._name = name;
        RecordTypePrototype._keys = keys3;
        RecordTypePrototype._defaultValues = defaultValues;
        for (var i4 = 0; i4 < keys3.length; i4++) {
          var propName = keys3[i4];
          indices[propName] = i4;
          if (RecordTypePrototype[propName]) {
            typeof console === "object" && console.warn && console.warn(
              "Cannot define " + recordName(this) + ' with property "' + propName + '" since that property name is part of the Record API.'
            );
          } else {
            setProp(RecordTypePrototype, propName);
          }
        }
      }
      this.__ownerID = void 0;
      this._values = List().withMutations(function(l4) {
        l4.setSize(this$1$1._keys.length);
        KeyedCollection(values3).forEach(function(v3, k3) {
          l4.set(this$1$1._indices[k3], v3 === this$1$1._defaultValues[k3] ? void 0 : v3);
        });
      });
      return this;
    };
    var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
    RecordTypePrototype.constructor = RecordType;
    if (name) {
      RecordType.displayName = name;
    }
    return RecordType;
  };
  Record.prototype.toString = function toString4() {
    var str = recordName(this) + " { ";
    var keys3 = this._keys;
    var k3;
    for (var i4 = 0, l4 = keys3.length; i4 !== l4; i4++) {
      k3 = keys3[i4];
      str += (i4 ? ", " : "") + k3 + ": " + quoteString(this.get(k3));
    }
    return str + " }";
  };
  Record.prototype.equals = function equals2(other) {
    return this === other || isRecord(other) && recordSeq(this).equals(recordSeq(other));
  };
  Record.prototype.hashCode = function hashCode2() {
    return recordSeq(this).hashCode();
  };
  Record.prototype.has = function has4(k3) {
    return this._indices.hasOwnProperty(k3);
  };
  Record.prototype.get = function get10(k3, notSetValue) {
    if (!this.has(k3)) {
      return notSetValue;
    }
    var index = this._indices[k3];
    var value = this._values.get(index);
    return value === void 0 ? this._defaultValues[k3] : value;
  };
  Record.prototype.set = function set2(k3, v3) {
    if (this.has(k3)) {
      var newValues = this._values.set(
        this._indices[k3],
        v3 === this._defaultValues[k3] ? void 0 : v3
      );
      if (newValues !== this._values && !this.__ownerID) {
        return makeRecord(this, newValues);
      }
    }
    return this;
  };
  Record.prototype.remove = function remove2(k3) {
    return this.set(k3);
  };
  Record.prototype.clear = function clear() {
    var newValues = this._values.clear().setSize(this._keys.length);
    return this.__ownerID ? this : makeRecord(this, newValues);
  };
  Record.prototype.wasAltered = function wasAltered2() {
    return this._values.wasAltered();
  };
  Record.prototype.toSeq = function toSeq2() {
    return recordSeq(this);
  };
  Record.prototype.toJS = function toJS$12() {
    return toJS(this);
  };
  Record.prototype.entries = function entries2() {
    return this.__iterator(ITERATE_ENTRIES);
  };
  Record.prototype.__iterator = function __iterator(type2, reverse5) {
    return recordSeq(this).__iterator(type2, reverse5);
  };
  Record.prototype.__iterate = function __iterate(fn, reverse5) {
    return recordSeq(this).__iterate(fn, reverse5);
  };
  Record.prototype.__ensureOwner = function __ensureOwner(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newValues = this._values.__ensureOwner(ownerID);
    if (!ownerID) {
      this.__ownerID = ownerID;
      this._values = newValues;
      return this;
    }
    return makeRecord(this, newValues, ownerID);
  };
  Record.isRecord = isRecord;
  Record.getDescriptiveName = recordName;
  var RecordPrototype = Record.prototype;
  RecordPrototype[IS_RECORD_SYMBOL] = true;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
  RecordPrototype.getIn = getIn;
  RecordPrototype.hasIn = CollectionPrototype.hasIn;
  RecordPrototype.merge = merge$1;
  RecordPrototype.mergeWith = mergeWith$1;
  RecordPrototype.mergeIn = mergeIn;
  RecordPrototype.mergeDeep = mergeDeep;
  RecordPrototype.mergeDeepWith = mergeDeepWith;
  RecordPrototype.mergeDeepIn = mergeDeepIn;
  RecordPrototype.setIn = setIn;
  RecordPrototype.update = update;
  RecordPrototype.updateIn = updateIn;
  RecordPrototype.withMutations = withMutations;
  RecordPrototype.asMutable = asMutable;
  RecordPrototype.asImmutable = asImmutable;
  RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
  RecordPrototype.toJSON = RecordPrototype.toObject = CollectionPrototype.toObject;
  RecordPrototype.inspect = RecordPrototype.toSource = function() {
    return this.toString();
  };
  function makeRecord(likeRecord, values3, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._values = values3;
    record.__ownerID = ownerID;
    return record;
  }
  function recordName(record) {
    return record.constructor.displayName || record.constructor.name || "Record";
  }
  function recordSeq(record) {
    return keyedSeqFromValue(record._keys.map(function(k3) {
      return [k3, record.get(k3)];
    }));
  }
  function setProp(prototype, name) {
    try {
      Object.defineProperty(prototype, name, {
        get: function() {
          return this.get(name);
        },
        set: function(value) {
          invariant(this.__ownerID, "Cannot set on an immutable record.");
          this.set(name, value);
        }
      });
    } catch (error) {
    }
  }

  // ../node_modules/d3-array/src/ascending.js
  function ascending(a4, b3) {
    return a4 == null || b3 == null ? NaN : a4 < b3 ? -1 : a4 > b3 ? 1 : a4 >= b3 ? 0 : NaN;
  }

  // ../node_modules/d3-array/src/descending.js
  function descending(a4, b3) {
    return a4 == null || b3 == null ? NaN : b3 < a4 ? -1 : b3 > a4 ? 1 : b3 >= a4 ? 0 : NaN;
  }

  // ../node_modules/d3-array/src/bisector.js
  function bisector(f3) {
    let compare1, compare2, delta;
    if (f3.length !== 2) {
      compare1 = ascending;
      compare2 = (d3, x3) => ascending(f3(d3), x3);
      delta = (d3, x3) => f3(d3) - x3;
    } else {
      compare1 = f3 === ascending || f3 === descending ? f3 : zero;
      compare2 = f3;
      delta = f3;
    }
    function left2(a4, x3, lo = 0, hi = a4.length) {
      if (lo < hi) {
        if (compare1(x3, x3) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a4[mid], x3) < 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function right2(a4, x3, lo = 0, hi = a4.length) {
      if (lo < hi) {
        if (compare1(x3, x3) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a4[mid], x3) <= 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function center2(a4, x3, lo = 0, hi = a4.length) {
      const i4 = left2(a4, x3, lo, hi - 1);
      return i4 > lo && delta(a4[i4 - 1], x3) > -delta(a4[i4], x3) ? i4 - 1 : i4;
    }
    return { left: left2, center: center2, right: right2 };
  }
  function zero() {
    return 0;
  }

  // ../node_modules/d3-array/src/number.js
  function number(x3) {
    return x3 === null ? NaN : +x3;
  }

  // ../node_modules/d3-array/src/bisect.js
  var ascendingBisect = bisector(ascending);
  var bisectRight = ascendingBisect.right;
  var bisectLeft = ascendingBisect.left;
  var bisectCenter = bisector(number).center;
  var bisect_default = bisectRight;

  // ../node_modules/d3-array/src/count.js
  function count2(values3, valueof) {
    let count4 = 0;
    if (valueof === void 0) {
      for (let value of values3) {
        if (value != null && (value = +value) >= value) {
          ++count4;
        }
      }
    } else {
      let index = -1;
      for (let value of values3) {
        if ((value = valueof(value, ++index, values3)) != null && (value = +value) >= value) {
          ++count4;
        }
      }
    }
    return count4;
  }

  // ../node_modules/d3-array/src/extent.js
  function extent(values3, valueof) {
    let min4;
    let max5;
    if (valueof === void 0) {
      for (const value of values3) {
        if (value != null) {
          if (min4 === void 0) {
            if (value >= value)
              min4 = max5 = value;
          } else {
            if (min4 > value)
              min4 = value;
            if (max5 < value)
              max5 = value;
          }
        }
      }
    } else {
      let index = -1;
      for (let value of values3) {
        if ((value = valueof(value, ++index, values3)) != null) {
          if (min4 === void 0) {
            if (value >= value)
              min4 = max5 = value;
          } else {
            if (min4 > value)
              min4 = value;
            if (max5 < value)
              max5 = value;
          }
        }
      }
    }
    return [min4, max5];
  }

  // ../node_modules/d3-array/src/identity.js
  function identity(x3) {
    return x3;
  }

  // ../node_modules/d3-array/src/array.js
  var array = Array.prototype;
  var slice3 = array.slice;
  var map2 = array.map;

  // ../node_modules/d3-array/src/constant.js
  function constant(x3) {
    return () => x3;
  }

  // ../node_modules/d3-array/src/ticks.js
  var e10 = Math.sqrt(50);
  var e5 = Math.sqrt(10);
  var e22 = Math.sqrt(2);
  function tickSpec(start2, stop, count4) {
    const step = (stop - start2) / Math.max(0, count4), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e22 ? 2 : 1;
    let i1, i22, inc;
    if (power < 0) {
      inc = Math.pow(10, -power) / factor;
      i1 = Math.round(start2 * inc);
      i22 = Math.round(stop * inc);
      if (i1 / inc < start2)
        ++i1;
      if (i22 / inc > stop)
        --i22;
      inc = -inc;
    } else {
      inc = Math.pow(10, power) * factor;
      i1 = Math.round(start2 / inc);
      i22 = Math.round(stop / inc);
      if (i1 * inc < start2)
        ++i1;
      if (i22 * inc > stop)
        --i22;
    }
    if (i22 < i1 && 0.5 <= count4 && count4 < 2)
      return tickSpec(start2, stop, count4 * 2);
    return [i1, i22, inc];
  }
  function ticks(start2, stop, count4) {
    stop = +stop, start2 = +start2, count4 = +count4;
    if (!(count4 > 0))
      return [];
    if (start2 === stop)
      return [start2];
    const reverse5 = stop < start2, [i1, i22, inc] = reverse5 ? tickSpec(stop, start2, count4) : tickSpec(start2, stop, count4);
    if (!(i22 >= i1))
      return [];
    const n3 = i22 - i1 + 1, ticks2 = new Array(n3);
    if (reverse5) {
      if (inc < 0)
        for (let i4 = 0; i4 < n3; ++i4)
          ticks2[i4] = (i22 - i4) / -inc;
      else
        for (let i4 = 0; i4 < n3; ++i4)
          ticks2[i4] = (i22 - i4) * inc;
    } else {
      if (inc < 0)
        for (let i4 = 0; i4 < n3; ++i4)
          ticks2[i4] = (i1 + i4) / -inc;
      else
        for (let i4 = 0; i4 < n3; ++i4)
          ticks2[i4] = (i1 + i4) * inc;
    }
    return ticks2;
  }
  function tickIncrement(start2, stop, count4) {
    stop = +stop, start2 = +start2, count4 = +count4;
    return tickSpec(start2, stop, count4)[2];
  }
  function tickStep(start2, stop, count4) {
    stop = +stop, start2 = +start2, count4 = +count4;
    const reverse5 = stop < start2, inc = reverse5 ? tickIncrement(stop, start2, count4) : tickIncrement(start2, stop, count4);
    return (reverse5 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
  }

  // ../node_modules/d3-array/src/nice.js
  function nice(start2, stop, count4) {
    let prestep;
    while (true) {
      const step = tickIncrement(start2, stop, count4);
      if (step === prestep || step === 0 || !isFinite(step)) {
        return [start2, stop];
      } else if (step > 0) {
        start2 = Math.floor(start2 / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start2 = Math.ceil(start2 * step) / step;
        stop = Math.floor(stop * step) / step;
      }
      prestep = step;
    }
  }

  // ../node_modules/d3-array/src/threshold/sturges.js
  function thresholdSturges(values3) {
    return Math.max(1, Math.ceil(Math.log(count2(values3)) / Math.LN2) + 1);
  }

  // ../node_modules/d3-array/src/bin.js
  function bin() {
    var value = identity, domain = extent, threshold = thresholdSturges;
    function histogram(data) {
      if (!Array.isArray(data))
        data = Array.from(data);
      var i4, n3 = data.length, x3, step, values3 = new Array(n3);
      for (i4 = 0; i4 < n3; ++i4) {
        values3[i4] = value(data[i4], i4, data);
      }
      var xz = domain(values3), x0 = xz[0], x1 = xz[1], tz = threshold(values3, x0, x1);
      if (!Array.isArray(tz)) {
        const max5 = x1, tn = +tz;
        if (domain === extent)
          [x0, x1] = nice(x0, x1, tn);
        tz = ticks(x0, x1, tn);
        if (tz[0] <= x0)
          step = tickIncrement(x0, x1, tn);
        if (tz[tz.length - 1] >= x1) {
          if (max5 >= x1 && domain === extent) {
            const step2 = tickIncrement(x0, x1, tn);
            if (isFinite(step2)) {
              if (step2 > 0) {
                x1 = (Math.floor(x1 / step2) + 1) * step2;
              } else if (step2 < 0) {
                x1 = (Math.ceil(x1 * -step2) + 1) / -step2;
              }
            }
          } else {
            tz.pop();
          }
        }
      }
      var m3 = tz.length, a4 = 0, b3 = m3;
      while (tz[a4] <= x0)
        ++a4;
      while (tz[b3 - 1] > x1)
        --b3;
      if (a4 || b3 < m3)
        tz = tz.slice(a4, b3), m3 = b3 - a4;
      var bins = new Array(m3 + 1), bin2;
      for (i4 = 0; i4 <= m3; ++i4) {
        bin2 = bins[i4] = [];
        bin2.x0 = i4 > 0 ? tz[i4 - 1] : x0;
        bin2.x1 = i4 < m3 ? tz[i4] : x1;
      }
      if (isFinite(step)) {
        if (step > 0) {
          for (i4 = 0; i4 < n3; ++i4) {
            if ((x3 = values3[i4]) != null && x0 <= x3 && x3 <= x1) {
              bins[Math.min(m3, Math.floor((x3 - x0) / step))].push(data[i4]);
            }
          }
        } else if (step < 0) {
          for (i4 = 0; i4 < n3; ++i4) {
            if ((x3 = values3[i4]) != null && x0 <= x3 && x3 <= x1) {
              const j3 = Math.floor((x0 - x3) * step);
              bins[Math.min(m3, j3 + (tz[j3] <= x3))].push(data[i4]);
            }
          }
        }
      } else {
        for (i4 = 0; i4 < n3; ++i4) {
          if ((x3 = values3[i4]) != null && x0 <= x3 && x3 <= x1) {
            bins[bisect_default(tz, x3, 0, m3)].push(data[i4]);
          }
        }
      }
      return bins;
    }
    histogram.value = function(_2) {
      return arguments.length ? (value = typeof _2 === "function" ? _2 : constant(_2), histogram) : value;
    };
    histogram.domain = function(_2) {
      return arguments.length ? (domain = typeof _2 === "function" ? _2 : constant([_2[0], _2[1]]), histogram) : domain;
    };
    histogram.thresholds = function(_2) {
      return arguments.length ? (threshold = typeof _2 === "function" ? _2 : constant(Array.isArray(_2) ? slice3.call(_2) : _2), histogram) : threshold;
    };
    return histogram;
  }

  // ../node_modules/d3-array/src/max.js
  function max2(values3, valueof) {
    let max5;
    if (valueof === void 0) {
      for (const value of values3) {
        if (value != null && (max5 < value || max5 === void 0 && value >= value)) {
          max5 = value;
        }
      }
    } else {
      let index = -1;
      for (let value of values3) {
        if ((value = valueof(value, ++index, values3)) != null && (max5 < value || max5 === void 0 && value >= value)) {
          max5 = value;
        }
      }
    }
    return max5;
  }

  // ../node_modules/d3-axis/src/identity.js
  function identity_default(x3) {
    return x3;
  }

  // ../node_modules/d3-axis/src/axis.js
  var top = 1;
  var right = 2;
  var bottom = 3;
  var left = 4;
  var epsilon = 1e-6;
  function translateX(x3) {
    return "translate(" + x3 + ",0)";
  }
  function translateY(y3) {
    return "translate(0," + y3 + ")";
  }
  function number2(scale) {
    return (d3) => +scale(d3);
  }
  function center(scale, offset) {
    offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
    if (scale.round())
      offset = Math.round(offset);
    return (d3) => +scale(d3) + offset;
  }
  function entering() {
    return !this.__axis;
  }
  function axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat2 = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5, k3 = orient === top || orient === left ? -1 : 1, x3 = orient === left || orient === right ? "x" : "y", transform2 = orient === top || orient === bottom ? translateX : translateY;
    function axis2(context) {
      var values3 = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format2 = tickFormat2 == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity_default : tickFormat2, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + offset, range1 = +range[range.length - 1] + offset, position = (scale.bandwidth ? center : number2)(scale.copy(), offset), selection2 = context.selection ? context.selection() : context, path2 = selection2.selectAll(".domain").data([null]), tick = selection2.selectAll(".tick").data(values3, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
      path2 = path2.merge(path2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
      tick = tick.merge(tickEnter);
      line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x3 + "2", k3 * tickSizeInner));
      text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x3, k3 * spacing).attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));
      if (context !== selection2) {
        path2 = path2.transition(context);
        tick = tick.transition(context);
        line = line.transition(context);
        text = text.transition(context);
        tickExit = tickExit.transition(context).attr("opacity", epsilon).attr("transform", function(d3) {
          return isFinite(d3 = position(d3)) ? transform2(d3 + offset) : this.getAttribute("transform");
        });
        tickEnter.attr("opacity", epsilon).attr("transform", function(d3) {
          var p4 = this.parentNode.__axis;
          return transform2((p4 && isFinite(p4 = p4(d3)) ? p4 : position(d3)) + offset);
        });
      }
      tickExit.remove();
      path2.attr("d", orient === left || orient === right ? tickSizeOuter ? "M" + k3 * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k3 * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k3 * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k3 * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1);
      tick.attr("opacity", 1).attr("transform", function(d3) {
        return transform2(position(d3) + offset);
      });
      line.attr(x3 + "2", k3 * tickSizeInner);
      text.attr(x3, k3 * spacing).text(format2);
      selection2.filter(entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");
      selection2.each(function() {
        this.__axis = position;
      });
    }
    axis2.scale = function(_2) {
      return arguments.length ? (scale = _2, axis2) : scale;
    };
    axis2.ticks = function() {
      return tickArguments = Array.from(arguments), axis2;
    };
    axis2.tickArguments = function(_2) {
      return arguments.length ? (tickArguments = _2 == null ? [] : Array.from(_2), axis2) : tickArguments.slice();
    };
    axis2.tickValues = function(_2) {
      return arguments.length ? (tickValues = _2 == null ? null : Array.from(_2), axis2) : tickValues && tickValues.slice();
    };
    axis2.tickFormat = function(_2) {
      return arguments.length ? (tickFormat2 = _2, axis2) : tickFormat2;
    };
    axis2.tickSize = function(_2) {
      return arguments.length ? (tickSizeInner = tickSizeOuter = +_2, axis2) : tickSizeInner;
    };
    axis2.tickSizeInner = function(_2) {
      return arguments.length ? (tickSizeInner = +_2, axis2) : tickSizeInner;
    };
    axis2.tickSizeOuter = function(_2) {
      return arguments.length ? (tickSizeOuter = +_2, axis2) : tickSizeOuter;
    };
    axis2.tickPadding = function(_2) {
      return arguments.length ? (tickPadding = +_2, axis2) : tickPadding;
    };
    axis2.offset = function(_2) {
      return arguments.length ? (offset = +_2, axis2) : offset;
    };
    return axis2;
  }
  function axisBottom(scale) {
    return axis(bottom, scale);
  }
  function axisLeft(scale) {
    return axis(left, scale);
  }

  // ../node_modules/d3-dispatch/src/dispatch.js
  var noop = { value: () => {
  } };
  function dispatch() {
    for (var i4 = 0, n3 = arguments.length, _2 = {}, t3; i4 < n3; ++i4) {
      if (!(t3 = arguments[i4] + "") || t3 in _2 || /[\s.]/.test(t3))
        throw new Error("illegal type: " + t3);
      _2[t3] = [];
    }
    return new Dispatch(_2);
  }
  function Dispatch(_2) {
    this._ = _2;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t3) {
      var name = "", i4 = t3.indexOf(".");
      if (i4 >= 0)
        name = t3.slice(i4 + 1), t3 = t3.slice(0, i4);
      if (t3 && !types.hasOwnProperty(t3))
        throw new Error("unknown type: " + t3);
      return { type: t3, name };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _2 = this._, T3 = parseTypenames(typename + "", _2), t3, i4 = -1, n3 = T3.length;
      if (arguments.length < 2) {
        while (++i4 < n3)
          if ((t3 = (typename = T3[i4]).type) && (t3 = get11(_2[t3], typename.name)))
            return t3;
        return;
      }
      if (callback != null && typeof callback !== "function")
        throw new Error("invalid callback: " + callback);
      while (++i4 < n3) {
        if (t3 = (typename = T3[i4]).type)
          _2[t3] = set3(_2[t3], typename.name, callback);
        else if (callback == null)
          for (t3 in _2)
            _2[t3] = set3(_2[t3], typename.name, null);
      }
      return this;
    },
    copy: function() {
      var copy2 = {}, _2 = this._;
      for (var t3 in _2)
        copy2[t3] = _2[t3].slice();
      return new Dispatch(copy2);
    },
    call: function(type2, that) {
      if ((n3 = arguments.length - 2) > 0)
        for (var args = new Array(n3), i4 = 0, n3, t3; i4 < n3; ++i4)
          args[i4] = arguments[i4 + 2];
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (t3 = this._[type2], i4 = 0, n3 = t3.length; i4 < n3; ++i4)
        t3[i4].value.apply(that, args);
    },
    apply: function(type2, that, args) {
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (var t3 = this._[type2], i4 = 0, n3 = t3.length; i4 < n3; ++i4)
        t3[i4].value.apply(that, args);
    }
  };
  function get11(type2, name) {
    for (var i4 = 0, n3 = type2.length, c3; i4 < n3; ++i4) {
      if ((c3 = type2[i4]).name === name) {
        return c3.value;
      }
    }
  }
  function set3(type2, name, callback) {
    for (var i4 = 0, n3 = type2.length; i4 < n3; ++i4) {
      if (type2[i4].name === name) {
        type2[i4] = noop, type2 = type2.slice(0, i4).concat(type2.slice(i4 + 1));
        break;
      }
    }
    if (callback != null)
      type2.push({ name, value: callback });
    return type2;
  }
  var dispatch_default = dispatch;

  // ../node_modules/d3-selection/src/namespaces.js
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces_default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  // ../node_modules/d3-selection/src/namespace.js
  function namespace_default(name) {
    var prefix = name += "", i4 = prefix.indexOf(":");
    if (i4 >= 0 && (prefix = name.slice(0, i4)) !== "xmlns")
      name = name.slice(i4 + 1);
    return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
  }

  // ../node_modules/d3-selection/src/creator.js
  function creatorInherit(name) {
    return function() {
      var document2 = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator_default(name) {
    var fullname = namespace_default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  // ../node_modules/d3-selection/src/selector.js
  function none() {
  }
  function selector_default(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  // ../node_modules/d3-selection/src/selection/select.js
  function select_default(select2) {
    if (typeof select2 !== "function")
      select2 = selector_default(select2);
    for (var groups = this._groups, m3 = groups.length, subgroups = new Array(m3), j3 = 0; j3 < m3; ++j3) {
      for (var group = groups[j3], n3 = group.length, subgroup = subgroups[j3] = new Array(n3), node, subnode, i4 = 0; i4 < n3; ++i4) {
        if ((node = group[i4]) && (subnode = select2.call(node, node.__data__, i4, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i4] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // ../node_modules/d3-selection/src/array.js
  function array2(x3) {
    return x3 == null ? [] : Array.isArray(x3) ? x3 : Array.from(x3);
  }

  // ../node_modules/d3-selection/src/selectorAll.js
  function empty() {
    return [];
  }
  function selectorAll_default(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  // ../node_modules/d3-selection/src/selection/selectAll.js
  function arrayAll(select2) {
    return function() {
      return array2(select2.apply(this, arguments));
    };
  }
  function selectAll_default(select2) {
    if (typeof select2 === "function")
      select2 = arrayAll(select2);
    else
      select2 = selectorAll_default(select2);
    for (var groups = this._groups, m3 = groups.length, subgroups = [], parents = [], j3 = 0; j3 < m3; ++j3) {
      for (var group = groups[j3], n3 = group.length, node, i4 = 0; i4 < n3; ++i4) {
        if (node = group[i4]) {
          subgroups.push(select2.call(node, node.__data__, i4, group));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  }

  // ../node_modules/d3-selection/src/matcher.js
  function matcher_default(selector) {
    return function() {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }

  // ../node_modules/d3-selection/src/selection/selectChild.js
  var find2 = Array.prototype.find;
  function childFind(match) {
    return function() {
      return find2.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selectChild_default(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  // ../node_modules/d3-selection/src/selection/selectChildren.js
  var filter3 = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function() {
      return filter3.call(this.children, match);
    };
  }
  function selectChildren_default(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  // ../node_modules/d3-selection/src/selection/filter.js
  function filter_default(match) {
    if (typeof match !== "function")
      match = matcher_default(match);
    for (var groups = this._groups, m3 = groups.length, subgroups = new Array(m3), j3 = 0; j3 < m3; ++j3) {
      for (var group = groups[j3], n3 = group.length, subgroup = subgroups[j3] = [], node, i4 = 0; i4 < n3; ++i4) {
        if ((node = group[i4]) && match.call(node, node.__data__, i4, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // ../node_modules/d3-selection/src/selection/sparse.js
  function sparse_default(update9) {
    return new Array(update9.length);
  }

  // ../node_modules/d3-selection/src/selection/enter.js
  function enter_default() {
    return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
  }
  function EnterNode(parent, datum2) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum2;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  // ../node_modules/d3-selection/src/constant.js
  function constant_default(x3) {
    return function() {
      return x3;
    };
  }

  // ../node_modules/d3-selection/src/selection/data.js
  function bindIndex(parent, group, enter, update9, exit, data) {
    var i4 = 0, node, groupLength = group.length, dataLength = data.length;
    for (; i4 < dataLength; ++i4) {
      if (node = group[i4]) {
        node.__data__ = data[i4];
        update9[i4] = node;
      } else {
        enter[i4] = new EnterNode(parent, data[i4]);
      }
    }
    for (; i4 < groupLength; ++i4) {
      if (node = group[i4]) {
        exit[i4] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update9, exit, data, key) {
    var i4, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    for (i4 = 0; i4 < groupLength; ++i4) {
      if (node = group[i4]) {
        keyValues[i4] = keyValue = key.call(node, node.__data__, i4, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i4] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }
    for (i4 = 0; i4 < dataLength; ++i4) {
      keyValue = key.call(parent, data[i4], i4, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update9[i4] = node;
        node.__data__ = data[i4];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i4] = new EnterNode(parent, data[i4]);
      }
    }
    for (i4 = 0; i4 < groupLength; ++i4) {
      if ((node = group[i4]) && nodeByKeyValue.get(keyValues[i4]) === node) {
        exit[i4] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function data_default(value, key) {
    if (!arguments.length)
      return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
      value = constant_default(value);
    for (var m3 = groups.length, update9 = new Array(m3), enter = new Array(m3), exit = new Array(m3), j3 = 0; j3 < m3; ++j3) {
      var parent = parents[j3], group = groups[j3], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j3, parents)), dataLength = data.length, enterGroup = enter[j3] = new Array(dataLength), updateGroup = update9[j3] = new Array(dataLength), exitGroup = exit[j3] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1)
            i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength)
            ;
          previous._next = next || null;
        }
      }
    }
    update9 = new Selection(update9, parents);
    update9._enter = enter;
    update9._exit = exit;
    return update9;
  }
  function arraylike(data) {
    return typeof data === "object" && "length" in data ? data : Array.from(data);
  }

  // ../node_modules/d3-selection/src/selection/exit.js
  function exit_default() {
    return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
  }

  // ../node_modules/d3-selection/src/selection/join.js
  function join_default(onenter, onupdate, onexit) {
    var enter = this.enter(), update9 = this, exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter)
        enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update9 = onupdate(update9);
      if (update9)
        update9 = update9.selection();
    }
    if (onexit == null)
      exit.remove();
    else
      onexit(exit);
    return enter && update9 ? enter.merge(update9).order() : update9;
  }

  // ../node_modules/d3-selection/src/selection/merge.js
  function merge_default(context) {
    var selection2 = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m3 = Math.min(m0, m1), merges = new Array(m0), j3 = 0; j3 < m3; ++j3) {
      for (var group0 = groups0[j3], group1 = groups1[j3], n3 = group0.length, merge2 = merges[j3] = new Array(n3), node, i4 = 0; i4 < n3; ++i4) {
        if (node = group0[i4] || group1[i4]) {
          merge2[i4] = node;
        }
      }
    }
    for (; j3 < m0; ++j3) {
      merges[j3] = groups0[j3];
    }
    return new Selection(merges, this._parents);
  }

  // ../node_modules/d3-selection/src/selection/order.js
  function order_default() {
    for (var groups = this._groups, j3 = -1, m3 = groups.length; ++j3 < m3; ) {
      for (var group = groups[j3], i4 = group.length - 1, next = group[i4], node; --i4 >= 0; ) {
        if (node = group[i4]) {
          if (next && node.compareDocumentPosition(next) ^ 4)
            next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }

  // ../node_modules/d3-selection/src/selection/sort.js
  function sort_default(compare) {
    if (!compare)
      compare = ascending2;
    function compareNode(a4, b3) {
      return a4 && b3 ? compare(a4.__data__, b3.__data__) : !a4 - !b3;
    }
    for (var groups = this._groups, m3 = groups.length, sortgroups = new Array(m3), j3 = 0; j3 < m3; ++j3) {
      for (var group = groups[j3], n3 = group.length, sortgroup = sortgroups[j3] = new Array(n3), node, i4 = 0; i4 < n3; ++i4) {
        if (node = group[i4]) {
          sortgroup[i4] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending2(a4, b3) {
    return a4 < b3 ? -1 : a4 > b3 ? 1 : a4 >= b3 ? 0 : NaN;
  }

  // ../node_modules/d3-selection/src/selection/call.js
  function call_default() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  // ../node_modules/d3-selection/src/selection/nodes.js
  function nodes_default() {
    return Array.from(this);
  }

  // ../node_modules/d3-selection/src/selection/node.js
  function node_default() {
    for (var groups = this._groups, j3 = 0, m3 = groups.length; j3 < m3; ++j3) {
      for (var group = groups[j3], i4 = 0, n3 = group.length; i4 < n3; ++i4) {
        var node = group[i4];
        if (node)
          return node;
      }
    }
    return null;
  }

  // ../node_modules/d3-selection/src/selection/size.js
  function size_default() {
    let size = 0;
    for (const node of this)
      ++size;
    return size;
  }

  // ../node_modules/d3-selection/src/selection/empty.js
  function empty_default() {
    return !this.node();
  }

  // ../node_modules/d3-selection/src/selection/each.js
  function each_default(callback) {
    for (var groups = this._groups, j3 = 0, m3 = groups.length; j3 < m3; ++j3) {
      for (var group = groups[j3], i4 = 0, n3 = group.length, node; i4 < n3; ++i4) {
        if (node = group[i4])
          callback.call(node, node.__data__, i4, group);
      }
    }
    return this;
  }

  // ../node_modules/d3-selection/src/selection/attr.js
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function() {
      var v3 = value.apply(this, arguments);
      if (v3 == null)
        this.removeAttribute(name);
      else
        this.setAttribute(name, v3);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function() {
      var v3 = value.apply(this, arguments);
      if (v3 == null)
        this.removeAttributeNS(fullname.space, fullname.local);
      else
        this.setAttributeNS(fullname.space, fullname.local, v3);
    };
  }
  function attr_default(name, value) {
    var fullname = namespace_default(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }

  // ../node_modules/d3-selection/src/window.js
  function window_default(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
  }

  // ../node_modules/d3-selection/src/selection/style.js
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function() {
      var v3 = value.apply(this, arguments);
      if (v3 == null)
        this.style.removeProperty(name);
      else
        this.style.setProperty(name, v3, priority);
    };
  }
  function style_default(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  // ../node_modules/d3-selection/src/selection/property.js
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function() {
      var v3 = value.apply(this, arguments);
      if (v3 == null)
        delete this[name];
      else
        this[name] = v3;
    };
  }
  function property_default(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  // ../node_modules/d3-selection/src/selection/classed.js
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function(name) {
      var i4 = this._names.indexOf(name);
      if (i4 < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i4 = this._names.indexOf(name);
      if (i4 >= 0) {
        this._names.splice(i4, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node), i4 = -1, n3 = names.length;
    while (++i4 < n3)
      list.add(names[i4]);
  }
  function classedRemove(node, names) {
    var list = classList(node), i4 = -1, n3 = names.length;
    while (++i4 < n3)
      list.remove(names[i4]);
  }
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function classed_default(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i4 = -1, n3 = names.length;
      while (++i4 < n3)
        if (!list.contains(names[i4]))
          return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  // ../node_modules/d3-selection/src/selection/text.js
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function() {
      var v3 = value.apply(this, arguments);
      this.textContent = v3 == null ? "" : v3;
    };
  }
  function text_default(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }

  // ../node_modules/d3-selection/src/selection/html.js
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function() {
      var v3 = value.apply(this, arguments);
      this.innerHTML = v3 == null ? "" : v3;
    };
  }
  function html_default(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  // ../node_modules/d3-selection/src/selection/raise.js
  function raise() {
    if (this.nextSibling)
      this.parentNode.appendChild(this);
  }
  function raise_default() {
    return this.each(raise);
  }

  // ../node_modules/d3-selection/src/selection/lower.js
  function lower() {
    if (this.previousSibling)
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function lower_default() {
    return this.each(lower);
  }

  // ../node_modules/d3-selection/src/selection/append.js
  function append_default(name) {
    var create2 = typeof name === "function" ? name : creator_default(name);
    return this.select(function() {
      return this.appendChild(create2.apply(this, arguments));
    });
  }

  // ../node_modules/d3-selection/src/selection/insert.js
  function constantNull() {
    return null;
  }
  function insert_default(name, before) {
    var create2 = typeof name === "function" ? name : creator_default(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
    return this.select(function() {
      return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
    });
  }

  // ../node_modules/d3-selection/src/selection/remove.js
  function remove3() {
    var parent = this.parentNode;
    if (parent)
      parent.removeChild(this);
  }
  function remove_default() {
    return this.each(remove3);
  }

  // ../node_modules/d3-selection/src/selection/clone.js
  function selection_cloneShallow() {
    var clone2 = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone2, this.nextSibling) : clone2;
  }
  function selection_cloneDeep() {
    var clone2 = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone2, this.nextSibling) : clone2;
  }
  function clone_default(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  // ../node_modules/d3-selection/src/selection/datum.js
  function datum_default(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  // ../node_modules/d3-selection/src/selection/on.js
  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames2(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t3) {
      var name = "", i4 = t3.indexOf(".");
      if (i4 >= 0)
        name = t3.slice(i4 + 1), t3 = t3.slice(0, i4);
      return { type: t3, name };
    });
  }
  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on)
        return;
      for (var j3 = 0, i4 = -1, m3 = on.length, o4; j3 < m3; ++j3) {
        if (o4 = on[j3], (!typename.type || o4.type === typename.type) && o4.name === typename.name) {
          this.removeEventListener(o4.type, o4.listener, o4.options);
        } else {
          on[++i4] = o4;
        }
      }
      if (++i4)
        on.length = i4;
      else
        delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o4, listener = contextListener(value);
      if (on)
        for (var j3 = 0, m3 = on.length; j3 < m3; ++j3) {
          if ((o4 = on[j3]).type === typename.type && o4.name === typename.name) {
            this.removeEventListener(o4.type, o4.listener, o4.options);
            this.addEventListener(o4.type, o4.listener = listener, o4.options = options);
            o4.value = value;
            return;
          }
        }
      this.addEventListener(typename.type, listener, options);
      o4 = { type: typename.type, name: typename.name, value, listener, options };
      if (!on)
        this.__on = [o4];
      else
        on.push(o4);
    };
  }
  function on_default(typename, value, options) {
    var typenames = parseTypenames2(typename + ""), i4, n3 = typenames.length, t3;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on)
        for (var j3 = 0, m3 = on.length, o4; j3 < m3; ++j3) {
          for (i4 = 0, o4 = on[j3]; i4 < n3; ++i4) {
            if ((t3 = typenames[i4]).type === o4.type && t3.name === o4.name) {
              return o4.value;
            }
          }
        }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i4 = 0; i4 < n3; ++i4)
      this.each(on(typenames[i4], value, options));
    return this;
  }

  // ../node_modules/d3-selection/src/selection/dispatch.js
  function dispatchEvent(node, type2, params) {
    var window2 = window_default(node), event = window2.CustomEvent;
    if (typeof event === "function") {
      event = new event(type2, params);
    } else {
      event = window2.document.createEvent("Event");
      if (params)
        event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
      else
        event.initEvent(type2, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params);
    };
  }
  function dispatchFunction(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params.apply(this, arguments));
    };
  }
  function dispatch_default2(type2, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
  }

  // ../node_modules/d3-selection/src/selection/iterator.js
  function* iterator_default() {
    for (var groups = this._groups, j3 = 0, m3 = groups.length; j3 < m3; ++j3) {
      for (var group = groups[j3], i4 = 0, n3 = group.length, node; i4 < n3; ++i4) {
        if (node = group[i4])
          yield node;
      }
    }
  }

  // ../node_modules/d3-selection/src/selection/index.js
  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: select_default,
    selectAll: selectAll_default,
    selectChild: selectChild_default,
    selectChildren: selectChildren_default,
    filter: filter_default,
    data: data_default,
    enter: enter_default,
    exit: exit_default,
    join: join_default,
    merge: merge_default,
    selection: selection_selection,
    order: order_default,
    sort: sort_default,
    call: call_default,
    nodes: nodes_default,
    node: node_default,
    size: size_default,
    empty: empty_default,
    each: each_default,
    attr: attr_default,
    style: style_default,
    property: property_default,
    classed: classed_default,
    text: text_default,
    html: html_default,
    raise: raise_default,
    lower: lower_default,
    append: append_default,
    insert: insert_default,
    remove: remove_default,
    clone: clone_default,
    datum: datum_default,
    on: on_default,
    dispatch: dispatch_default2,
    [Symbol.iterator]: iterator_default
  };
  var selection_default = selection;

  // ../node_modules/d3-selection/src/select.js
  function select_default2(selector) {
    return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
  }

  // ../node_modules/d3-color/src/define.js
  function define_default(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition)
      prototype[key] = definition[key];
    return prototype;
  }

  // ../node_modules/d3-color/src/color.js
  function Color() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex = /^#([0-9a-f]{3,8})$/;
  var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
  var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
  var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
  var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
  var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
  var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define_default(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format2) {
    var m3, l4;
    format2 = (format2 + "").trim().toLowerCase();
    return (m3 = reHex.exec(format2)) ? (l4 = m3[1].length, m3 = parseInt(m3[1], 16), l4 === 6 ? rgbn(m3) : l4 === 3 ? new Rgb(m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, (m3 & 15) << 4 | m3 & 15, 1) : l4 === 8 ? rgba(m3 >> 24 & 255, m3 >> 16 & 255, m3 >> 8 & 255, (m3 & 255) / 255) : l4 === 4 ? rgba(m3 >> 12 & 15 | m3 >> 8 & 240, m3 >> 8 & 15 | m3 >> 4 & 240, m3 >> 4 & 15 | m3 & 240, ((m3 & 15) << 4 | m3 & 15) / 255) : null) : (m3 = reRgbInteger.exec(format2)) ? new Rgb(m3[1], m3[2], m3[3], 1) : (m3 = reRgbPercent.exec(format2)) ? new Rgb(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, 1) : (m3 = reRgbaInteger.exec(format2)) ? rgba(m3[1], m3[2], m3[3], m3[4]) : (m3 = reRgbaPercent.exec(format2)) ? rgba(m3[1] * 255 / 100, m3[2] * 255 / 100, m3[3] * 255 / 100, m3[4]) : (m3 = reHslPercent.exec(format2)) ? hsla(m3[1], m3[2] / 100, m3[3] / 100, 1) : (m3 = reHslaPercent.exec(format2)) ? hsla(m3[1], m3[2] / 100, m3[3] / 100, m3[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n3) {
    return new Rgb(n3 >> 16 & 255, n3 >> 8 & 255, n3 & 255, 1);
  }
  function rgba(r3, g3, b3, a4) {
    if (a4 <= 0)
      r3 = g3 = b3 = NaN;
    return new Rgb(r3, g3, b3, a4);
  }
  function rgbConvert(o4) {
    if (!(o4 instanceof Color))
      o4 = color(o4);
    if (!o4)
      return new Rgb();
    o4 = o4.rgb();
    return new Rgb(o4.r, o4.g, o4.b, o4.opacity);
  }
  function rgb(r3, g3, b3, opacity) {
    return arguments.length === 1 ? rgbConvert(r3) : new Rgb(r3, g3, b3, opacity == null ? 1 : opacity);
  }
  function Rgb(r3, g3, b3, opacity) {
    this.r = +r3;
    this.g = +g3;
    this.b = +b3;
    this.opacity = +opacity;
  }
  define_default(Rgb, rgb, extend(Color, {
    brighter(k3) {
      k3 = k3 == null ? brighter : Math.pow(brighter, k3);
      return new Rgb(this.r * k3, this.g * k3, this.b * k3, this.opacity);
    },
    darker(k3) {
      k3 = k3 == null ? darker : Math.pow(darker, k3);
      return new Rgb(this.r * k3, this.g * k3, this.b * k3, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }
  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function rgb_formatRgb() {
    const a4 = clampa(this.opacity);
    return `${a4 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a4 === 1 ? ")" : `, ${a4})`}`;
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h3, s3, l4, a4) {
    if (a4 <= 0)
      h3 = s3 = l4 = NaN;
    else if (l4 <= 0 || l4 >= 1)
      h3 = s3 = NaN;
    else if (s3 <= 0)
      h3 = NaN;
    return new Hsl(h3, s3, l4, a4);
  }
  function hslConvert(o4) {
    if (o4 instanceof Hsl)
      return new Hsl(o4.h, o4.s, o4.l, o4.opacity);
    if (!(o4 instanceof Color))
      o4 = color(o4);
    if (!o4)
      return new Hsl();
    if (o4 instanceof Hsl)
      return o4;
    o4 = o4.rgb();
    var r3 = o4.r / 255, g3 = o4.g / 255, b3 = o4.b / 255, min4 = Math.min(r3, g3, b3), max5 = Math.max(r3, g3, b3), h3 = NaN, s3 = max5 - min4, l4 = (max5 + min4) / 2;
    if (s3) {
      if (r3 === max5)
        h3 = (g3 - b3) / s3 + (g3 < b3) * 6;
      else if (g3 === max5)
        h3 = (b3 - r3) / s3 + 2;
      else
        h3 = (r3 - g3) / s3 + 4;
      s3 /= l4 < 0.5 ? max5 + min4 : 2 - max5 - min4;
      h3 *= 60;
    } else {
      s3 = l4 > 0 && l4 < 1 ? 0 : h3;
    }
    return new Hsl(h3, s3, l4, o4.opacity);
  }
  function hsl(h3, s3, l4, opacity) {
    return arguments.length === 1 ? hslConvert(h3) : new Hsl(h3, s3, l4, opacity == null ? 1 : opacity);
  }
  function Hsl(h3, s3, l4, opacity) {
    this.h = +h3;
    this.s = +s3;
    this.l = +l4;
    this.opacity = +opacity;
  }
  define_default(Hsl, hsl, extend(Color, {
    brighter(k3) {
      k3 = k3 == null ? brighter : Math.pow(brighter, k3);
      return new Hsl(this.h, this.s, this.l * k3, this.opacity);
    },
    darker(k3) {
      k3 = k3 == null ? darker : Math.pow(darker, k3);
      return new Hsl(this.h, this.s, this.l * k3, this.opacity);
    },
    rgb() {
      var h3 = this.h % 360 + (this.h < 0) * 360, s3 = isNaN(h3) || isNaN(this.s) ? 0 : this.s, l4 = this.l, m22 = l4 + (l4 < 0.5 ? l4 : 1 - l4) * s3, m1 = 2 * l4 - m22;
      return new Rgb(
        hsl2rgb(h3 >= 240 ? h3 - 240 : h3 + 120, m1, m22),
        hsl2rgb(h3, m1, m22),
        hsl2rgb(h3 < 120 ? h3 + 240 : h3 - 120, m1, m22),
        this.opacity
      );
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl() {
      const a4 = clampa(this.opacity);
      return `${a4 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a4 === 1 ? ")" : `, ${a4})`}`;
    }
  }));
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }
  function hsl2rgb(h3, m1, m22) {
    return (h3 < 60 ? m1 + (m22 - m1) * h3 / 60 : h3 < 180 ? m22 : h3 < 240 ? m1 + (m22 - m1) * (240 - h3) / 60 : m1) * 255;
  }

  // ../node_modules/d3-interpolate/src/basis.js
  function basis(t1, v0, v1, v22, v3) {
    var t22 = t1 * t1, t3 = t22 * t1;
    return ((1 - 3 * t1 + 3 * t22 - t3) * v0 + (4 - 6 * t22 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t22 - 3 * t3) * v22 + t3 * v3) / 6;
  }
  function basis_default(values3) {
    var n3 = values3.length - 1;
    return function(t3) {
      var i4 = t3 <= 0 ? t3 = 0 : t3 >= 1 ? (t3 = 1, n3 - 1) : Math.floor(t3 * n3), v1 = values3[i4], v22 = values3[i4 + 1], v0 = i4 > 0 ? values3[i4 - 1] : 2 * v1 - v22, v3 = i4 < n3 - 1 ? values3[i4 + 2] : 2 * v22 - v1;
      return basis((t3 - i4 / n3) * n3, v0, v1, v22, v3);
    };
  }

  // ../node_modules/d3-interpolate/src/basisClosed.js
  function basisClosed_default(values3) {
    var n3 = values3.length;
    return function(t3) {
      var i4 = Math.floor(((t3 %= 1) < 0 ? ++t3 : t3) * n3), v0 = values3[(i4 + n3 - 1) % n3], v1 = values3[i4 % n3], v22 = values3[(i4 + 1) % n3], v3 = values3[(i4 + 2) % n3];
      return basis((t3 - i4 / n3) * n3, v0, v1, v22, v3);
    };
  }

  // ../node_modules/d3-interpolate/src/constant.js
  var constant_default2 = (x3) => () => x3;

  // ../node_modules/d3-interpolate/src/color.js
  function linear(a4, d3) {
    return function(t3) {
      return a4 + t3 * d3;
    };
  }
  function exponential(a4, b3, y3) {
    return a4 = Math.pow(a4, y3), b3 = Math.pow(b3, y3) - a4, y3 = 1 / y3, function(t3) {
      return Math.pow(a4 + t3 * b3, y3);
    };
  }
  function gamma(y3) {
    return (y3 = +y3) === 1 ? nogamma : function(a4, b3) {
      return b3 - a4 ? exponential(a4, b3, y3) : constant_default2(isNaN(a4) ? b3 : a4);
    };
  }
  function nogamma(a4, b3) {
    var d3 = b3 - a4;
    return d3 ? linear(a4, d3) : constant_default2(isNaN(a4) ? b3 : a4);
  }

  // ../node_modules/d3-interpolate/src/rgb.js
  var rgb_default = function rgbGamma(y3) {
    var color2 = gamma(y3);
    function rgb2(start2, end) {
      var r3 = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g3 = color2(start2.g, end.g), b3 = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
      return function(t3) {
        start2.r = r3(t3);
        start2.g = g3(t3);
        start2.b = b3(t3);
        start2.opacity = opacity(t3);
        return start2 + "";
      };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
  }(1);
  function rgbSpline(spline) {
    return function(colors) {
      var n3 = colors.length, r3 = new Array(n3), g3 = new Array(n3), b3 = new Array(n3), i4, color2;
      for (i4 = 0; i4 < n3; ++i4) {
        color2 = rgb(colors[i4]);
        r3[i4] = color2.r || 0;
        g3[i4] = color2.g || 0;
        b3[i4] = color2.b || 0;
      }
      r3 = spline(r3);
      g3 = spline(g3);
      b3 = spline(b3);
      color2.opacity = 1;
      return function(t3) {
        color2.r = r3(t3);
        color2.g = g3(t3);
        color2.b = b3(t3);
        return color2 + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis_default);
  var rgbBasisClosed = rgbSpline(basisClosed_default);

  // ../node_modules/d3-interpolate/src/numberArray.js
  function numberArray_default(a4, b3) {
    if (!b3)
      b3 = [];
    var n3 = a4 ? Math.min(b3.length, a4.length) : 0, c3 = b3.slice(), i4;
    return function(t3) {
      for (i4 = 0; i4 < n3; ++i4)
        c3[i4] = a4[i4] * (1 - t3) + b3[i4] * t3;
      return c3;
    };
  }
  function isNumberArray(x3) {
    return ArrayBuffer.isView(x3) && !(x3 instanceof DataView);
  }

  // ../node_modules/d3-interpolate/src/array.js
  function genericArray(a4, b3) {
    var nb = b3 ? b3.length : 0, na = a4 ? Math.min(nb, a4.length) : 0, x3 = new Array(na), c3 = new Array(nb), i4;
    for (i4 = 0; i4 < na; ++i4)
      x3[i4] = value_default(a4[i4], b3[i4]);
    for (; i4 < nb; ++i4)
      c3[i4] = b3[i4];
    return function(t3) {
      for (i4 = 0; i4 < na; ++i4)
        c3[i4] = x3[i4](t3);
      return c3;
    };
  }

  // ../node_modules/d3-interpolate/src/date.js
  function date_default(a4, b3) {
    var d3 = /* @__PURE__ */ new Date();
    return a4 = +a4, b3 = +b3, function(t3) {
      return d3.setTime(a4 * (1 - t3) + b3 * t3), d3;
    };
  }

  // ../node_modules/d3-interpolate/src/number.js
  function number_default(a4, b3) {
    return a4 = +a4, b3 = +b3, function(t3) {
      return a4 * (1 - t3) + b3 * t3;
    };
  }

  // ../node_modules/d3-interpolate/src/object.js
  function object_default(a4, b3) {
    var i4 = {}, c3 = {}, k3;
    if (a4 === null || typeof a4 !== "object")
      a4 = {};
    if (b3 === null || typeof b3 !== "object")
      b3 = {};
    for (k3 in b3) {
      if (k3 in a4) {
        i4[k3] = value_default(a4[k3], b3[k3]);
      } else {
        c3[k3] = b3[k3];
      }
    }
    return function(t3) {
      for (k3 in i4)
        c3[k3] = i4[k3](t3);
      return c3;
    };
  }

  // ../node_modules/d3-interpolate/src/string.js
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero2(b3) {
    return function() {
      return b3;
    };
  }
  function one(b3) {
    return function(t3) {
      return b3(t3) + "";
    };
  }
  function string_default(a4, b3) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i4 = -1, s3 = [], q3 = [];
    a4 = a4 + "", b3 = b3 + "";
    while ((am = reA.exec(a4)) && (bm = reB.exec(b3))) {
      if ((bs = bm.index) > bi) {
        bs = b3.slice(bi, bs);
        if (s3[i4])
          s3[i4] += bs;
        else
          s3[++i4] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s3[i4])
          s3[i4] += bm;
        else
          s3[++i4] = bm;
      } else {
        s3[++i4] = null;
        q3.push({ i: i4, x: number_default(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b3.length) {
      bs = b3.slice(bi);
      if (s3[i4])
        s3[i4] += bs;
      else
        s3[++i4] = bs;
    }
    return s3.length < 2 ? q3[0] ? one(q3[0].x) : zero2(b3) : (b3 = q3.length, function(t3) {
      for (var i5 = 0, o4; i5 < b3; ++i5)
        s3[(o4 = q3[i5]).i] = o4.x(t3);
      return s3.join("");
    });
  }

  // ../node_modules/d3-interpolate/src/value.js
  function value_default(a4, b3) {
    var t3 = typeof b3, c3;
    return b3 == null || t3 === "boolean" ? constant_default2(b3) : (t3 === "number" ? number_default : t3 === "string" ? (c3 = color(b3)) ? (b3 = c3, rgb_default) : string_default : b3 instanceof color ? rgb_default : b3 instanceof Date ? date_default : isNumberArray(b3) ? numberArray_default : Array.isArray(b3) ? genericArray : typeof b3.valueOf !== "function" && typeof b3.toString !== "function" || isNaN(b3) ? object_default : number_default)(a4, b3);
  }

  // ../node_modules/d3-interpolate/src/round.js
  function round_default(a4, b3) {
    return a4 = +a4, b3 = +b3, function(t3) {
      return Math.round(a4 * (1 - t3) + b3 * t3);
    };
  }

  // ../node_modules/d3-interpolate/src/transform/decompose.js
  var degrees = 180 / Math.PI;
  var identity2 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose_default(a4, b3, c3, d3, e4, f3) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a4 * a4 + b3 * b3))
      a4 /= scaleX, b3 /= scaleX;
    if (skewX = a4 * c3 + b3 * d3)
      c3 -= a4 * skewX, d3 -= b3 * skewX;
    if (scaleY = Math.sqrt(c3 * c3 + d3 * d3))
      c3 /= scaleY, d3 /= scaleY, skewX /= scaleY;
    if (a4 * d3 < b3 * c3)
      a4 = -a4, b3 = -b3, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e4,
      translateY: f3,
      rotate: Math.atan2(b3, a4) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX,
      scaleY
    };
  }

  // ../node_modules/d3-interpolate/src/transform/parse.js
  var svgNode;
  function parseCss(value) {
    const m3 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m3.isIdentity ? identity2 : decompose_default(m3.a, m3.b, m3.c, m3.d, m3.e, m3.f);
  }
  function parseSvg(value) {
    if (value == null)
      return identity2;
    if (!svgNode)
      svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate()))
      return identity2;
    value = value.matrix;
    return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  // ../node_modules/d3-interpolate/src/transform/index.js
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s3) {
      return s3.length ? s3.pop() + " " : "";
    }
    function translate2(xa, ya, xb, yb, s3, q3) {
      if (xa !== xb || ya !== yb) {
        var i4 = s3.push("translate(", null, pxComma, null, pxParen);
        q3.push({ i: i4 - 4, x: number_default(xa, xb) }, { i: i4 - 2, x: number_default(ya, yb) });
      } else if (xb || yb) {
        s3.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a4, b3, s3, q3) {
      if (a4 !== b3) {
        if (a4 - b3 > 180)
          b3 += 360;
        else if (b3 - a4 > 180)
          a4 += 360;
        q3.push({ i: s3.push(pop(s3) + "rotate(", null, degParen) - 2, x: number_default(a4, b3) });
      } else if (b3) {
        s3.push(pop(s3) + "rotate(" + b3 + degParen);
      }
    }
    function skewX(a4, b3, s3, q3) {
      if (a4 !== b3) {
        q3.push({ i: s3.push(pop(s3) + "skewX(", null, degParen) - 2, x: number_default(a4, b3) });
      } else if (b3) {
        s3.push(pop(s3) + "skewX(" + b3 + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s3, q3) {
      if (xa !== xb || ya !== yb) {
        var i4 = s3.push(pop(s3) + "scale(", null, ",", null, ")");
        q3.push({ i: i4 - 4, x: number_default(xa, xb) }, { i: i4 - 2, x: number_default(ya, yb) });
      } else if (xb !== 1 || yb !== 1) {
        s3.push(pop(s3) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function(a4, b3) {
      var s3 = [], q3 = [];
      a4 = parse(a4), b3 = parse(b3);
      translate2(a4.translateX, a4.translateY, b3.translateX, b3.translateY, s3, q3);
      rotate(a4.rotate, b3.rotate, s3, q3);
      skewX(a4.skewX, b3.skewX, s3, q3);
      scale(a4.scaleX, a4.scaleY, b3.scaleX, b3.scaleY, s3, q3);
      a4 = b3 = null;
      return function(t3) {
        var i4 = -1, n3 = q3.length, o4;
        while (++i4 < n3)
          s3[(o4 = q3[i4]).i] = o4.x(t3);
        return s3.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  // ../node_modules/d3-timer/src/timer.js
  var frame = 0;
  var timeout = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f3) {
    setTimeout(f3, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function")
        throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail)
          taskTail._next = this;
        else
          taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t3 = new Timer();
    t3.restart(callback, delay, time);
    return t3;
  }
  function timerFlush() {
    now();
    ++frame;
    var t3 = taskHead, e4;
    while (t3) {
      if ((e4 = clockNow - t3._time) >= 0)
        t3._call.call(void 0, e4);
      t3 = t3._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now2 = clock.now(), delay = now2 - clockLast;
    if (delay > pokeDelay)
      clockSkew -= delay, clockLast = now2;
  }
  function nap() {
    var t0, t1 = taskHead, t22, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time)
          time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t22 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t22 : taskHead = t22;
      }
    }
    taskTail = t0;
    sleep(time);
  }
  function sleep(time) {
    if (frame)
      return;
    if (timeout)
      timeout = clearTimeout(timeout);
    var delay = time - clockNow;
    if (delay > 24) {
      if (time < Infinity)
        timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval)
        interval = clearInterval(interval);
    } else {
      if (!interval)
        clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  // ../node_modules/d3-timer/src/timeout.js
  function timeout_default(callback, delay, time) {
    var t3 = new Timer();
    delay = delay == null ? 0 : +delay;
    t3.restart((elapsed) => {
      t3.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t3;
  }

  // ../node_modules/d3-transition/src/transition/schedule.js
  var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule_default(node, name, id3, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules)
      node.__transition = {};
    else if (id3 in schedules)
      return;
    create(node, id3, {
      name,
      index,
      // For context during callback.
      group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id3) {
    var schedule = get12(node, id3);
    if (schedule.state > CREATED)
      throw new Error("too late; already scheduled");
    return schedule;
  }
  function set4(node, id3) {
    var schedule = get12(node, id3);
    if (schedule.state > STARTED)
      throw new Error("too late; already running");
    return schedule;
  }
  function get12(node, id3) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id3]))
      throw new Error("transition not found");
    return schedule;
  }
  function create(node, id3, self) {
    var schedules = node.__transition, tween;
    schedules[id3] = self;
    self.timer = timer(schedule, 0, self.time);
    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start2, self.delay, self.time);
      if (self.delay <= elapsed)
        start2(elapsed - self.delay);
    }
    function start2(elapsed) {
      var i4, j3, n3, o4;
      if (self.state !== SCHEDULED)
        return stop();
      for (i4 in schedules) {
        o4 = schedules[i4];
        if (o4.name !== self.name)
          continue;
        if (o4.state === STARTED)
          return timeout_default(start2);
        if (o4.state === RUNNING) {
          o4.state = ENDED;
          o4.timer.stop();
          o4.on.call("interrupt", node, node.__data__, o4.index, o4.group);
          delete schedules[i4];
        } else if (+i4 < id3) {
          o4.state = ENDED;
          o4.timer.stop();
          o4.on.call("cancel", node, node.__data__, o4.index, o4.group);
          delete schedules[i4];
        }
      }
      timeout_default(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING)
        return;
      self.state = STARTED;
      tween = new Array(n3 = self.tween.length);
      for (i4 = 0, j3 = -1; i4 < n3; ++i4) {
        if (o4 = self.tween[i4].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j3] = o4;
        }
      }
      tween.length = j3 + 1;
    }
    function tick(elapsed) {
      var t3 = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i4 = -1, n3 = tween.length;
      while (++i4 < n3) {
        tween[i4].call(node, t3);
      }
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id3];
      for (var i4 in schedules)
        return;
      delete node.__transition;
    }
  }

  // ../node_modules/d3-transition/src/interrupt.js
  function interrupt_default(node, name) {
    var schedules = node.__transition, schedule, active, empty2 = true, i4;
    if (!schedules)
      return;
    name = name == null ? null : name + "";
    for (i4 in schedules) {
      if ((schedule = schedules[i4]).name !== name) {
        empty2 = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i4];
    }
    if (empty2)
      delete node.__transition;
  }

  // ../node_modules/d3-transition/src/selection/interrupt.js
  function interrupt_default2(name) {
    return this.each(function() {
      interrupt_default(this, name);
    });
  }

  // ../node_modules/d3-transition/src/transition/tween.js
  function tweenRemove(id3, name) {
    var tween0, tween1;
    return function() {
      var schedule = set4(this, id3), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i4 = 0, n3 = tween1.length; i4 < n3; ++i4) {
          if (tween1[i4].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i4, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id3, name, value) {
    var tween0, tween1;
    if (typeof value !== "function")
      throw new Error();
    return function() {
      var schedule = set4(this, id3), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t3 = { name, value }, i4 = 0, n3 = tween1.length; i4 < n3; ++i4) {
          if (tween1[i4].name === name) {
            tween1[i4] = t3;
            break;
          }
        }
        if (i4 === n3)
          tween1.push(t3);
      }
      schedule.tween = tween1;
    };
  }
  function tween_default(name, value) {
    var id3 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get12(this.node(), id3).tween;
      for (var i4 = 0, n3 = tween.length, t3; i4 < n3; ++i4) {
        if ((t3 = tween[i4]).name === name) {
          return t3.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id3, name, value));
  }
  function tweenValue(transition2, name, value) {
    var id3 = transition2._id;
    transition2.each(function() {
      var schedule = set4(this, id3);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
      return get12(node, id3).value[name];
    };
  }

  // ../node_modules/d3-transition/src/transition/interpolate.js
  function interpolate_default(a4, b3) {
    var c3;
    return (typeof b3 === "number" ? number_default : b3 instanceof color ? rgb_default : (c3 = color(b3)) ? (b3 = c3, rgb_default) : string_default)(a4, b3);
  }

  // ../node_modules/d3-transition/src/transition/attr.js
  function attrRemove2(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS2(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS2(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS2(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attr_default2(name, value) {
    var fullname = namespace_default(name), i4 = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i4, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i4, value));
  }

  // ../node_modules/d3-transition/src/transition/attrTween.js
  function attrInterpolate(name, i4) {
    return function(t3) {
      this.setAttribute(name, i4.call(this, t3));
    };
  }
  function attrInterpolateNS(fullname, i4) {
    return function(t3) {
      this.setAttributeNS(fullname.space, fullname.local, i4.call(this, t3));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i4 = value.apply(this, arguments);
      if (i4 !== i0)
        t0 = (i0 = i4) && attrInterpolateNS(fullname, i4);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i4 = value.apply(this, arguments);
      if (i4 !== i0)
        t0 = (i0 = i4) && attrInterpolate(name, i4);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween_default(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    var fullname = namespace_default(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  // ../node_modules/d3-transition/src/transition/delay.js
  function delayFunction(id3, value) {
    return function() {
      init(this, id3).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id3, value) {
    return value = +value, function() {
      init(this, id3).delay = value;
    };
  }
  function delay_default(value) {
    var id3 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id3, value)) : get12(this.node(), id3).delay;
  }

  // ../node_modules/d3-transition/src/transition/duration.js
  function durationFunction(id3, value) {
    return function() {
      set4(this, id3).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id3, value) {
    return value = +value, function() {
      set4(this, id3).duration = value;
    };
  }
  function duration_default(value) {
    var id3 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id3, value)) : get12(this.node(), id3).duration;
  }

  // ../node_modules/d3-transition/src/transition/ease.js
  function easeConstant(id3, value) {
    if (typeof value !== "function")
      throw new Error();
    return function() {
      set4(this, id3).ease = value;
    };
  }
  function ease_default(value) {
    var id3 = this._id;
    return arguments.length ? this.each(easeConstant(id3, value)) : get12(this.node(), id3).ease;
  }

  // ../node_modules/d3-transition/src/transition/easeVarying.js
  function easeVarying(id3, value) {
    return function() {
      var v3 = value.apply(this, arguments);
      if (typeof v3 !== "function")
        throw new Error();
      set4(this, id3).ease = v3;
    };
  }
  function easeVarying_default(value) {
    if (typeof value !== "function")
      throw new Error();
    return this.each(easeVarying(this._id, value));
  }

  // ../node_modules/d3-transition/src/transition/filter.js
  function filter_default2(match) {
    if (typeof match !== "function")
      match = matcher_default(match);
    for (var groups = this._groups, m3 = groups.length, subgroups = new Array(m3), j3 = 0; j3 < m3; ++j3) {
      for (var group = groups[j3], n3 = group.length, subgroup = subgroups[j3] = [], node, i4 = 0; i4 < n3; ++i4) {
        if ((node = group[i4]) && match.call(node, node.__data__, i4, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  // ../node_modules/d3-transition/src/transition/merge.js
  function merge_default2(transition2) {
    if (transition2._id !== this._id)
      throw new Error();
    for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m3 = Math.min(m0, m1), merges = new Array(m0), j3 = 0; j3 < m3; ++j3) {
      for (var group0 = groups0[j3], group1 = groups1[j3], n3 = group0.length, merge2 = merges[j3] = new Array(n3), node, i4 = 0; i4 < n3; ++i4) {
        if (node = group0[i4] || group1[i4]) {
          merge2[i4] = node;
        }
      }
    }
    for (; j3 < m0; ++j3) {
      merges[j3] = groups0[j3];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }

  // ../node_modules/d3-transition/src/transition/on.js
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t3) {
      var i4 = t3.indexOf(".");
      if (i4 >= 0)
        t3 = t3.slice(0, i4);
      return !t3 || t3 === "start";
    });
  }
  function onFunction(id3, name, listener) {
    var on0, on1, sit = start(name) ? init : set4;
    return function() {
      var schedule = sit(this, id3), on = schedule.on;
      if (on !== on0)
        (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function on_default2(name, listener) {
    var id3 = this._id;
    return arguments.length < 2 ? get12(this.node(), id3).on.on(name) : this.each(onFunction(id3, name, listener));
  }

  // ../node_modules/d3-transition/src/transition/remove.js
  function removeFunction(id3) {
    return function() {
      var parent = this.parentNode;
      for (var i4 in this.__transition)
        if (+i4 !== id3)
          return;
      if (parent)
        parent.removeChild(this);
    };
  }
  function remove_default2() {
    return this.on("end.remove", removeFunction(this._id));
  }

  // ../node_modules/d3-transition/src/transition/select.js
  function select_default3(select2) {
    var name = this._name, id3 = this._id;
    if (typeof select2 !== "function")
      select2 = selector_default(select2);
    for (var groups = this._groups, m3 = groups.length, subgroups = new Array(m3), j3 = 0; j3 < m3; ++j3) {
      for (var group = groups[j3], n3 = group.length, subgroup = subgroups[j3] = new Array(n3), node, subnode, i4 = 0; i4 < n3; ++i4) {
        if ((node = group[i4]) && (subnode = select2.call(node, node.__data__, i4, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i4] = subnode;
          schedule_default(subgroup[i4], name, id3, i4, subgroup, get12(node, id3));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id3);
  }

  // ../node_modules/d3-transition/src/transition/selectAll.js
  function selectAll_default2(select2) {
    var name = this._name, id3 = this._id;
    if (typeof select2 !== "function")
      select2 = selectorAll_default(select2);
    for (var groups = this._groups, m3 = groups.length, subgroups = [], parents = [], j3 = 0; j3 < m3; ++j3) {
      for (var group = groups[j3], n3 = group.length, node, i4 = 0; i4 < n3; ++i4) {
        if (node = group[i4]) {
          for (var children2 = select2.call(node, node.__data__, i4, group), child, inherit2 = get12(node, id3), k3 = 0, l4 = children2.length; k3 < l4; ++k3) {
            if (child = children2[k3]) {
              schedule_default(child, name, id3, k3, children2, inherit2);
            }
          }
          subgroups.push(children2);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id3);
  }

  // ../node_modules/d3-transition/src/transition/selection.js
  var Selection2 = selection_default.prototype.constructor;
  function selection_default2() {
    return new Selection2(this._groups, this._parents);
  }

  // ../node_modules/d3-transition/src/transition/style.js
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove2(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
      if (value1 == null)
        string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id3, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove7;
    return function() {
      var schedule = set4(this, id3), on = schedule.on, listener = schedule.value[key] == null ? remove7 || (remove7 = styleRemove2(name)) : void 0;
      if (on !== on0 || listener0 !== listener)
        (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }
  function style_default2(name, value, priority) {
    var i4 = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
    return value == null ? this.styleTween(name, styleNull(name, i4)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i4, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i4, value), priority).on("end.style." + name, null);
  }

  // ../node_modules/d3-transition/src/transition/styleTween.js
  function styleInterpolate(name, i4, priority) {
    return function(t3) {
      this.style.setProperty(name, i4.call(this, t3), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t3, i0;
    function tween() {
      var i4 = value.apply(this, arguments);
      if (i4 !== i0)
        t3 = (i0 = i4) && styleInterpolate(name, i4, priority);
      return t3;
    }
    tween._value = value;
    return tween;
  }
  function styleTween_default(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  // ../node_modules/d3-transition/src/transition/text.js
  function textConstant2(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction2(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function text_default2(value) {
    return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
  }

  // ../node_modules/d3-transition/src/transition/textTween.js
  function textInterpolate(i4) {
    return function(t3) {
      this.textContent = i4.call(this, t3);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i4 = value.apply(this, arguments);
      if (i4 !== i0)
        t0 = (i0 = i4) && textInterpolate(i4);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function textTween_default(value) {
    var key = "text";
    if (arguments.length < 1)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, textTween(value));
  }

  // ../node_modules/d3-transition/src/transition/transition.js
  function transition_default() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m3 = groups.length, j3 = 0; j3 < m3; ++j3) {
      for (var group = groups[j3], n3 = group.length, node, i4 = 0; i4 < n3; ++i4) {
        if (node = group[i4]) {
          var inherit2 = get12(node, id0);
          schedule_default(node, name, id1, i4, group, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }

  // ../node_modules/d3-transition/src/transition/end.js
  function end_default() {
    var on0, on1, that = this, id3 = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = { value: reject }, end = { value: function() {
        if (--size === 0)
          resolve();
      } };
      that.each(function() {
        var schedule = set4(this, id3), on = schedule.on;
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });
      if (size === 0)
        resolve();
    });
  }

  // ../node_modules/d3-transition/src/transition/index.js
  var id = 0;
  function Transition(groups, parents, name, id3) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id3;
  }
  function transition(name) {
    return selection_default().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection_default.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: select_default3,
    selectAll: selectAll_default2,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: filter_default2,
    merge: merge_default2,
    selection: selection_default2,
    transition: transition_default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: on_default2,
    attr: attr_default2,
    attrTween: attrTween_default,
    style: style_default2,
    styleTween: styleTween_default,
    text: text_default2,
    textTween: textTween_default,
    remove: remove_default2,
    tween: tween_default,
    delay: delay_default,
    duration: duration_default,
    ease: ease_default,
    easeVarying: easeVarying_default,
    end: end_default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  // ../node_modules/d3-ease/src/cubic.js
  function cubicInOut(t3) {
    return ((t3 *= 2) <= 1 ? t3 * t3 * t3 : (t3 -= 2) * t3 * t3 + 2) / 2;
  }

  // ../node_modules/d3-transition/src/selection/transition.js
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id3) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id3])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id3} not found`);
      }
    }
    return timing;
  }
  function transition_default2(name) {
    var id3, timing;
    if (name instanceof Transition) {
      id3 = name._id, name = name._name;
    } else {
      id3 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m3 = groups.length, j3 = 0; j3 < m3; ++j3) {
      for (var group = groups[j3], n3 = group.length, node, i4 = 0; i4 < n3; ++i4) {
        if (node = group[i4]) {
          schedule_default(node, name, id3, i4, group, timing || inherit(node, id3));
        }
      }
    }
    return new Transition(groups, this._parents, name, id3);
  }

  // ../node_modules/d3-transition/src/selection/index.js
  selection_default.prototype.interrupt = interrupt_default2;
  selection_default.prototype.transition = transition_default2;

  // ../node_modules/d3-brush/src/brush.js
  var { abs, max: max3, min: min2 } = Math;
  function number1(e4) {
    return [+e4[0], +e4[1]];
  }
  function number22(e4) {
    return [number1(e4[0]), number1(e4[1])];
  }
  var X = {
    name: "x",
    handles: ["w", "e"].map(type),
    input: function(x3, e4) {
      return x3 == null ? null : [[+x3[0], e4[0][1]], [+x3[1], e4[1][1]]];
    },
    output: function(xy) {
      return xy && [xy[0][0], xy[1][0]];
    }
  };
  var Y = {
    name: "y",
    handles: ["n", "s"].map(type),
    input: function(y3, e4) {
      return y3 == null ? null : [[e4[0][0], +y3[0]], [e4[1][0], +y3[1]]];
    },
    output: function(xy) {
      return xy && [xy[0][1], xy[1][1]];
    }
  };
  var XY = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
    input: function(xy) {
      return xy == null ? null : number22(xy);
    },
    output: function(xy) {
      return xy;
    }
  };
  function type(t3) {
    return { type: t3 };
  }

  // ../node_modules/d3-path/src/path.js
  var pi = Math.PI;
  var tau = 2 * pi;
  var epsilon2 = 1e-6;
  var tauEpsilon = tau - epsilon2;
  function append(strings) {
    this._ += strings[0];
    for (let i4 = 1, n3 = strings.length; i4 < n3; ++i4) {
      this._ += arguments[i4] + strings[i4];
    }
  }
  function appendRound(digits) {
    let d3 = Math.floor(digits);
    if (!(d3 >= 0))
      throw new Error(`invalid digits: ${digits}`);
    if (d3 > 15)
      return append;
    const k3 = 10 ** d3;
    return function(strings) {
      this._ += strings[0];
      for (let i4 = 1, n3 = strings.length; i4 < n3; ++i4) {
        this._ += Math.round(arguments[i4] * k3) / k3 + strings[i4];
      }
    };
  }
  var Path = class {
    constructor(digits) {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null;
      this._ = "";
      this._append = digits == null ? append : appendRound(digits);
    }
    moveTo(x3, y3) {
      this._append`M${this._x0 = this._x1 = +x3},${this._y0 = this._y1 = +y3}`;
    }
    closePath() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._append`Z`;
      }
    }
    lineTo(x3, y3) {
      this._append`L${this._x1 = +x3},${this._y1 = +y3}`;
    }
    quadraticCurveTo(x1, y1, x3, y3) {
      this._append`Q${+x1},${+y1},${this._x1 = +x3},${this._y1 = +y3}`;
    }
    bezierCurveTo(x1, y1, x22, y22, x3, y3) {
      this._append`C${+x1},${+y1},${+x22},${+y22},${this._x1 = +x3},${this._y1 = +y3}`;
    }
    arcTo(x1, y1, x22, y22, r3) {
      x1 = +x1, y1 = +y1, x22 = +x22, y22 = +y22, r3 = +r3;
      if (r3 < 0)
        throw new Error(`negative radius: ${r3}`);
      let x0 = this._x1, y0 = this._y1, x21 = x22 - x1, y21 = y22 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
      if (this._x1 === null) {
        this._append`M${this._x1 = x1},${this._y1 = y1}`;
      } else if (!(l01_2 > epsilon2))
        ;
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon2) || !r3) {
        this._append`L${this._x1 = x1},${this._y1 = y1}`;
      } else {
        let x20 = x22 - x0, y20 = y22 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l4 = r3 * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l4 / l01, t21 = l4 / l21;
        if (Math.abs(t01 - 1) > epsilon2) {
          this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
        }
        this._append`A${r3},${r3},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
      }
    }
    arc(x3, y3, r3, a0, a1, ccw) {
      x3 = +x3, y3 = +y3, r3 = +r3, ccw = !!ccw;
      if (r3 < 0)
        throw new Error(`negative radius: ${r3}`);
      let dx = r3 * Math.cos(a0), dy = r3 * Math.sin(a0), x0 = x3 + dx, y0 = y3 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
      if (this._x1 === null) {
        this._append`M${x0},${y0}`;
      } else if (Math.abs(this._x1 - x0) > epsilon2 || Math.abs(this._y1 - y0) > epsilon2) {
        this._append`L${x0},${y0}`;
      }
      if (!r3)
        return;
      if (da < 0)
        da = da % tau + tau;
      if (da > tauEpsilon) {
        this._append`A${r3},${r3},0,1,${cw},${x3 - dx},${y3 - dy}A${r3},${r3},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
      } else if (da > epsilon2) {
        this._append`A${r3},${r3},0,${+(da >= pi)},${cw},${this._x1 = x3 + r3 * Math.cos(a1)},${this._y1 = y3 + r3 * Math.sin(a1)}`;
      }
    }
    rect(x3, y3, w3, h3) {
      this._append`M${this._x0 = this._x1 = +x3},${this._y0 = this._y1 = +y3}h${w3 = +w3}v${+h3}h${-w3}Z`;
    }
    toString() {
      return this._;
    }
  };
  function path() {
    return new Path();
  }
  path.prototype = Path.prototype;

  // ../node_modules/d3-format/src/formatDecimal.js
  function formatDecimal_default(x3) {
    return Math.abs(x3 = Math.round(x3)) >= 1e21 ? x3.toLocaleString("en").replace(/,/g, "") : x3.toString(10);
  }
  function formatDecimalParts(x3, p4) {
    if ((i4 = (x3 = p4 ? x3.toExponential(p4 - 1) : x3.toExponential()).indexOf("e")) < 0)
      return null;
    var i4, coefficient = x3.slice(0, i4);
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x3.slice(i4 + 1)
    ];
  }

  // ../node_modules/d3-format/src/exponent.js
  function exponent_default(x3) {
    return x3 = formatDecimalParts(Math.abs(x3)), x3 ? x3[1] : NaN;
  }

  // ../node_modules/d3-format/src/formatGroup.js
  function formatGroup_default(grouping, thousands) {
    return function(value, width) {
      var i4 = value.length, t3 = [], j3 = 0, g3 = grouping[0], length = 0;
      while (i4 > 0 && g3 > 0) {
        if (length + g3 + 1 > width)
          g3 = Math.max(1, width - length);
        t3.push(value.substring(i4 -= g3, i4 + g3));
        if ((length += g3 + 1) > width)
          break;
        g3 = grouping[j3 = (j3 + 1) % grouping.length];
      }
      return t3.reverse().join(thousands);
    };
  }

  // ../node_modules/d3-format/src/formatNumerals.js
  function formatNumerals_default(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i4) {
        return numerals[+i4];
      });
    };
  }

  // ../node_modules/d3-format/src/formatSpecifier.js
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier)))
      throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }
  formatSpecifier.prototype = FormatSpecifier.prototype;
  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
    this.align = specifier.align === void 0 ? ">" : specifier.align + "";
    this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === void 0 ? void 0 : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === void 0 ? "" : specifier.type + "";
  }
  FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };

  // ../node_modules/d3-format/src/formatTrim.js
  function formatTrim_default(s3) {
    out:
      for (var n3 = s3.length, i4 = 1, i0 = -1, i1; i4 < n3; ++i4) {
        switch (s3[i4]) {
          case ".":
            i0 = i1 = i4;
            break;
          case "0":
            if (i0 === 0)
              i0 = i4;
            i1 = i4;
            break;
          default:
            if (!+s3[i4])
              break out;
            if (i0 > 0)
              i0 = 0;
            break;
        }
      }
    return i0 > 0 ? s3.slice(0, i0) + s3.slice(i1 + 1) : s3;
  }

  // ../node_modules/d3-format/src/formatPrefixAuto.js
  var prefixExponent;
  function formatPrefixAuto_default(x3, p4) {
    var d3 = formatDecimalParts(x3, p4);
    if (!d3)
      return x3 + "";
    var coefficient = d3[0], exponent = d3[1], i4 = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n3 = coefficient.length;
    return i4 === n3 ? coefficient : i4 > n3 ? coefficient + new Array(i4 - n3 + 1).join("0") : i4 > 0 ? coefficient.slice(0, i4) + "." + coefficient.slice(i4) : "0." + new Array(1 - i4).join("0") + formatDecimalParts(x3, Math.max(0, p4 + i4 - 1))[0];
  }

  // ../node_modules/d3-format/src/formatRounded.js
  function formatRounded_default(x3, p4) {
    var d3 = formatDecimalParts(x3, p4);
    if (!d3)
      return x3 + "";
    var coefficient = d3[0], exponent = d3[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  // ../node_modules/d3-format/src/formatTypes.js
  var formatTypes_default = {
    "%": (x3, p4) => (x3 * 100).toFixed(p4),
    "b": (x3) => Math.round(x3).toString(2),
    "c": (x3) => x3 + "",
    "d": formatDecimal_default,
    "e": (x3, p4) => x3.toExponential(p4),
    "f": (x3, p4) => x3.toFixed(p4),
    "g": (x3, p4) => x3.toPrecision(p4),
    "o": (x3) => Math.round(x3).toString(8),
    "p": (x3, p4) => formatRounded_default(x3 * 100, p4),
    "r": formatRounded_default,
    "s": formatPrefixAuto_default,
    "X": (x3) => Math.round(x3).toString(16).toUpperCase(),
    "x": (x3) => Math.round(x3).toString(16)
  };

  // ../node_modules/d3-format/src/identity.js
  function identity_default2(x3) {
    return x3;
  }

  // ../node_modules/d3-format/src/locale.js
  var map3 = Array.prototype.map;
  var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function locale_default(locale2) {
    var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity_default2 : formatGroup_default(map3.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity_default2 : formatNumerals_default(map3.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "\u2212" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
      if (type2 === "n")
        comma = true, type2 = "g";
      else if (!formatTypes_default[type2])
        precision === void 0 && (precision = 12), trim = true, type2 = "g";
      if (zero3 || fill === "0" && align === "=")
        zero3 = true, fill = "0", align = "=";
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
      var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
      precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format2(value) {
        var valuePrefix = prefix, valueSuffix = suffix, i4, n3, c3;
        if (type2 === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;
          var valueNegative = value < 0 || 1 / value < 0;
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
          if (trim)
            value = formatTrim_default(value);
          if (valueNegative && +value === 0 && sign !== "+")
            valueNegative = false;
          valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
          if (maybeSuffix) {
            i4 = -1, n3 = value.length;
            while (++i4 < n3) {
              if (c3 = value.charCodeAt(i4), 48 > c3 || c3 > 57) {
                valueSuffix = (c3 === 46 ? decimal + value.slice(i4 + 1) : value.slice(i4)) + valueSuffix;
                value = value.slice(0, i4);
                break;
              }
            }
          }
        }
        if (comma && !zero3)
          value = group(value, Infinity);
        var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
        if (comma && zero3)
          value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding;
            break;
          case "=":
            value = valuePrefix + padding + value + valueSuffix;
            break;
          case "^":
            value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
            break;
          default:
            value = padding + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format2.toString = function() {
        return specifier + "";
      };
      return format2;
    }
    function formatPrefix2(specifier, value) {
      var f3 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e4 = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k3 = Math.pow(10, -e4), prefix = prefixes[8 + e4 / 3];
      return function(value2) {
        return f3(k3 * value2) + prefix;
      };
    }
    return {
      format: newFormat,
      formatPrefix: formatPrefix2
    };
  }

  // ../node_modules/d3-format/src/defaultLocale.js
  var locale;
  var format;
  var formatPrefix;
  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale(definition) {
    locale = locale_default(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  // ../node_modules/d3-format/src/precisionFixed.js
  function precisionFixed_default(step) {
    return Math.max(0, -exponent_default(Math.abs(step)));
  }

  // ../node_modules/d3-format/src/precisionPrefix.js
  function precisionPrefix_default(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
  }

  // ../node_modules/d3-format/src/precisionRound.js
  function precisionRound_default(step, max5) {
    step = Math.abs(step), max5 = Math.abs(max5) - step;
    return Math.max(0, exponent_default(max5) - exponent_default(step)) + 1;
  }

  // ../node_modules/d3-scale/src/init.js
  function initRange(domain, range) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range).domain(domain);
        break;
    }
    return this;
  }

  // ../node_modules/d3-scale/src/constant.js
  function constants(x3) {
    return function() {
      return x3;
    };
  }

  // ../node_modules/d3-scale/src/number.js
  function number3(x3) {
    return +x3;
  }

  // ../node_modules/d3-scale/src/continuous.js
  var unit = [0, 1];
  function identity3(x3) {
    return x3;
  }
  function normalize(a4, b3) {
    return (b3 -= a4 = +a4) ? function(x3) {
      return (x3 - a4) / b3;
    } : constants(isNaN(b3) ? NaN : 0.5);
  }
  function clamper(a4, b3) {
    var t3;
    if (a4 > b3)
      t3 = a4, a4 = b3, b3 = t3;
    return function(x3) {
      return Math.max(a4, Math.min(b3, x3));
    };
  }
  function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0)
      d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else
      d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x3) {
      return r0(d0(x3));
    };
  }
  function polymap(domain, range, interpolate) {
    var j3 = Math.min(domain.length, range.length) - 1, d3 = new Array(j3), r3 = new Array(j3), i4 = -1;
    if (domain[j3] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++i4 < j3) {
      d3[i4] = normalize(domain[i4], domain[i4 + 1]);
      r3[i4] = interpolate(range[i4], range[i4 + 1]);
    }
    return function(x3) {
      var i5 = bisect_default(domain, x3, 1, j3) - 1;
      return r3[i5](d3[i5](x3));
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
  }
  function transformer() {
    var domain = unit, range = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity3, piecewise, output, input;
    function rescale() {
      var n3 = Math.min(domain.length, range.length);
      if (clamp !== identity3)
        clamp = clamper(domain[0], domain[n3 - 1]);
      piecewise = n3 > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }
    function scale(x3) {
      return x3 == null || isNaN(x3 = +x3) ? unknown : (output || (output = piecewise(domain.map(transform2), range, interpolate)))(transform2(clamp(x3)));
    }
    scale.invert = function(y3) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform2), number_default)))(y3)));
    };
    scale.domain = function(_2) {
      return arguments.length ? (domain = Array.from(_2, number3), rescale()) : domain.slice();
    };
    scale.range = function(_2) {
      return arguments.length ? (range = Array.from(_2), rescale()) : range.slice();
    };
    scale.rangeRound = function(_2) {
      return range = Array.from(_2), interpolate = round_default, rescale();
    };
    scale.clamp = function(_2) {
      return arguments.length ? (clamp = _2 ? true : identity3, rescale()) : clamp !== identity3;
    };
    scale.interpolate = function(_2) {
      return arguments.length ? (interpolate = _2, rescale()) : interpolate;
    };
    scale.unknown = function(_2) {
      return arguments.length ? (unknown = _2, scale) : unknown;
    };
    return function(t3, u3) {
      transform2 = t3, untransform = u3;
      return rescale();
    };
  }
  function continuous() {
    return transformer()(identity3, identity3);
  }

  // ../node_modules/d3-scale/src/tickFormat.js
  function tickFormat(start2, stop, count4, specifier) {
    var step = tickStep(start2, stop, count4), precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start2), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
          specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop)))))
          specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
          specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  // ../node_modules/d3-scale/src/linear.js
  function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count4) {
      var d3 = domain();
      return ticks(d3[0], d3[d3.length - 1], count4 == null ? 10 : count4);
    };
    scale.tickFormat = function(count4, specifier) {
      var d3 = domain();
      return tickFormat(d3[0], d3[d3.length - 1], count4 == null ? 10 : count4, specifier);
    };
    scale.nice = function(count4) {
      if (count4 == null)
        count4 = 10;
      var d3 = domain();
      var i0 = 0;
      var i1 = d3.length - 1;
      var start2 = d3[i0];
      var stop = d3[i1];
      var prestep;
      var step;
      var maxIter = 10;
      if (stop < start2) {
        step = start2, start2 = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      while (maxIter-- > 0) {
        step = tickIncrement(start2, stop, count4);
        if (step === prestep) {
          d3[i0] = start2;
          d3[i1] = stop;
          return domain(d3);
        } else if (step > 0) {
          start2 = Math.floor(start2 / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start2 = Math.ceil(start2 * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }
      return scale;
    };
    return scale;
  }
  function linear2() {
    var scale = continuous();
    scale.copy = function() {
      return copy(scale, linear2());
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
  }

  // ../node_modules/d3-shape/src/constant.js
  function constant_default4(x3) {
    return function constant2() {
      return x3;
    };
  }

  // ../node_modules/d3-shape/src/path.js
  function withPath(shape) {
    let digits = 3;
    shape.digits = function(_2) {
      if (!arguments.length)
        return digits;
      if (_2 == null) {
        digits = null;
      } else {
        const d3 = Math.floor(_2);
        if (!(d3 >= 0))
          throw new RangeError(`invalid digits: ${_2}`);
        digits = d3;
      }
      return shape;
    };
    return () => new Path(digits);
  }

  // ../node_modules/d3-shape/src/array.js
  var slice4 = Array.prototype.slice;
  function array_default(x3) {
    return typeof x3 === "object" && "length" in x3 ? x3 : Array.from(x3);
  }

  // ../node_modules/d3-shape/src/curve/linear.js
  function Linear(context) {
    this._context = context;
  }
  Linear.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x3, y3) {
      x3 = +x3, y3 = +y3;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x3, y3) : this._context.moveTo(x3, y3);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(x3, y3);
          break;
      }
    }
  };
  function linear_default(context) {
    return new Linear(context);
  }

  // ../node_modules/d3-shape/src/point.js
  function x2(p4) {
    return p4[0];
  }
  function y2(p4) {
    return p4[1];
  }

  // ../node_modules/d3-shape/src/line.js
  function line_default(x3, y3) {
    var defined2 = constant_default4(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
    x3 = typeof x3 === "function" ? x3 : x3 === void 0 ? x2 : constant_default4(x3);
    y3 = typeof y3 === "function" ? y3 : y3 === void 0 ? y2 : constant_default4(y3);
    function line(data) {
      var i4, n3 = (data = array_default(data)).length, d3, defined0 = false, buffer;
      if (context == null)
        output = curve(buffer = path2());
      for (i4 = 0; i4 <= n3; ++i4) {
        if (!(i4 < n3 && defined2(d3 = data[i4], i4, data)) === defined0) {
          if (defined0 = !defined0)
            output.lineStart();
          else
            output.lineEnd();
        }
        if (defined0)
          output.point(+x3(d3, i4, data), +y3(d3, i4, data));
      }
      if (buffer)
        return output = null, buffer + "" || null;
    }
    line.x = function(_2) {
      return arguments.length ? (x3 = typeof _2 === "function" ? _2 : constant_default4(+_2), line) : x3;
    };
    line.y = function(_2) {
      return arguments.length ? (y3 = typeof _2 === "function" ? _2 : constant_default4(+_2), line) : y3;
    };
    line.defined = function(_2) {
      return arguments.length ? (defined2 = typeof _2 === "function" ? _2 : constant_default4(!!_2), line) : defined2;
    };
    line.curve = function(_2) {
      return arguments.length ? (curve = _2, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function(_2) {
      return arguments.length ? (_2 == null ? context = output = null : output = curve(context = _2), line) : context;
    };
    return line;
  }

  // ../node_modules/d3-zoom/src/transform.js
  function Transform(k3, x3, y3) {
    this.k = k3;
    this.x = x3;
    this.y = y3;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function(k3) {
      return k3 === 1 ? this : new Transform(this.k * k3, this.x, this.y);
    },
    translate: function(x3, y3) {
      return x3 === 0 & y3 === 0 ? this : new Transform(this.k, this.x + this.k * x3, this.y + this.k * y3);
    },
    apply: function(point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function(x3) {
      return x3 * this.k + this.x;
    },
    applyY: function(y3) {
      return y3 * this.k + this.y;
    },
    invert: function(location2) {
      return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
    },
    invertX: function(x3) {
      return (x3 - this.x) / this.k;
    },
    invertY: function(y3) {
      return (y3 - this.y) / this.k;
    },
    rescaleX: function(x3) {
      return x3.copy().domain(x3.range().map(this.invertX, this).map(x3.invert, x3));
    },
    rescaleY: function(y3) {
      return y3.copy().domain(y3.range().map(this.invertY, this).map(y3.invert, y3));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity4 = new Transform(1, 0, 0);
  transform.prototype = Transform.prototype;
  function transform(node) {
    while (!node.__zoom)
      if (!(node = node.parentNode))
        return identity4;
    return node.__zoom;
  }

  // course_data.json
  var course_data_default = { "10101": { corners: [{ length: 275, start: 400 }, { length: 275, start: 675 }], course: 1, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10001, slopes: [], straights: [{ end: 400, start: 0 }, { end: 1200, start: 950 }], surface: 1, turn: 1 }, "10102": { corners: [{ length: 275, start: 150 }, { length: 275, start: 700 }, { length: 275, start: 975 }], course: 1, courseSetStatus: [], distance: 1500, distanceType: 2, raceTrackId: 10001, slopes: [], straights: [{ end: 700, start: 425 }, { end: 1500, start: 1250 }], surface: 1, turn: 1 }, "10103": { corners: [{ length: 275, start: 175 }, { length: 275, start: 450 }, { length: 275, start: 1e3 }, { length: 275, start: 1275 }], course: 1, courseSetStatus: [], distance: 1800, distanceType: 2, raceTrackId: 10001, slopes: [], straights: [{ end: 175, start: 0 }, { end: 1e3, start: 725 }, { end: 1800, start: 1550 }], surface: 1, turn: 1 }, "10104": { corners: [{ length: 275, start: 375 }, { length: 275, start: 650 }, { length: 275, start: 1200 }, { length: 275, start: 1475 }], course: 1, courseSetStatus: [3], distance: 2e3, distanceType: 3, raceTrackId: 10001, slopes: [], straights: [{ end: 375, start: 0 }, { end: 1200, start: 925 }, { end: 2e3, start: 1750 }], surface: 1, turn: 1 }, "10105": { corners: [{ length: 275, start: 175 }, { length: 275, start: 450 }, { length: 275, start: 975 }, { length: 275, start: 1250 }, { length: 275, start: 1800 }, { length: 275, start: 2075 }], course: 1, courseSetStatus: [2], distance: 2600, distanceType: 4, raceTrackId: 10001, slopes: [], straights: [{ end: 175, start: 0 }, { end: 975, start: 725 }, { end: 1800, start: 1525 }, { end: 2600, start: 2350 }], surface: 1, turn: 1 }, "10106": { corners: [{ length: 230, start: 280 }, { length: 230, start: 510 }], course: 1, courseSetStatus: [], distance: 1e3, distanceType: 1, raceTrackId: 10001, slopes: [], straights: [{ end: 280, start: 0 }, { end: 1e3, start: 740 }], surface: 2, turn: 1 }, "10107": { corners: [{ length: 230, start: 240 }, { length: 230, start: 470 }, { length: 230, start: 980 }, { length: 230, start: 1210 }], course: 1, courseSetStatus: [1], distance: 1700, distanceType: 2, raceTrackId: 10001, slopes: [], straights: [{ end: 240, start: 0 }, { end: 980, start: 700 }, { end: 1700, start: 1440 }], surface: 2, turn: 1 }, "10108": { corners: [{ length: 230, start: 200 }, { length: 230, start: 430 }, { length: 230, start: 940 }, { length: 230, start: 1170 }, { length: 230, start: 1680 }, { length: 230, start: 1910 }], course: 1, courseSetStatus: [], distance: 2400, distanceType: 3, raceTrackId: 10001, slopes: [], straights: [{ end: 200, start: 0 }, { end: 940, start: 660 }, { end: 1680, start: 1408 }, { end: 2400, start: 2140 }], surface: 2, turn: 1 }, "10201": { corners: [{ length: 220, start: 310 }, { length: 220, start: 530 }], course: 1, courseSetStatus: [], distance: 1e3, distanceType: 1, raceTrackId: 10002, slopes: [{ length: 555, slope: 1e4, start: 0 }], straights: [{ end: 310, start: 0 }, { end: 1e3, start: 750 }], surface: 1, turn: 1 }, "10202": { corners: [{ length: 220, start: 510 }, { length: 220, start: 730 }], course: 1, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10002, slopes: [{ length: 755, slope: 1e4, start: 0 }], straights: [{ end: 510, start: 0 }, { end: 1200, start: 950 }], surface: 1, turn: 1 }, "10203": { corners: [{ length: 220, start: 320 }, { length: 220, start: 540 }, { length: 220, start: 1110 }, { length: 220, start: 1330 }], course: 1, courseSetStatus: [3], distance: 1800, distanceType: 2, raceTrackId: 10002, slopes: [{ length: 200, slope: -1e4, start: 220 }, { length: 720, slope: 1e4, start: 665 }], straights: [{ end: 320, start: 0 }, { end: 1110, start: 760 }, { end: 1800, start: 1550 }], surface: 1, turn: 1 }, "10204": { corners: [{ length: 220, start: 520 }, { length: 220, start: 740 }, { length: 220, start: 1310 }, { length: 220, start: 1530 }], course: 1, courseSetStatus: [1], distance: 2e3, distanceType: 3, raceTrackId: 10002, slopes: [{ length: 200, slope: -1e4, start: 420 }, { length: 720, slope: 1e4, start: 865 }], straights: [{ end: 520, start: 0 }, { end: 1310, start: 960 }, { end: 2e3, start: 1750 }], surface: 1, turn: 1 }, "10205": { corners: [{ length: 230, start: 240 }, { length: 230, start: 470 }, { length: 230, start: 1070 }, { length: 230, start: 1300 }, { length: 230, start: 1890 }, { length: 230, start: 2120 }], course: 1, courseSetStatus: [2], distance: 2600, distanceType: 4, raceTrackId: 10002, slopes: [{ length: 495, slope: 1e4, start: 0 }, { length: 200, slope: -1e4, start: 970 }, { length: 720, slope: 1e4, start: 1425 }], straights: [{ end: 240, start: 0 }, { end: 1070, start: 700 }, { end: 1890, start: 1530 }, { end: 2600, start: 2350 }], surface: 1, turn: 1 }, "10206": { corners: [{ length: 190, start: 370 }, { length: 190, start: 560 }], course: 1, courseSetStatus: [], distance: 1e3, distanceType: 1, raceTrackId: 10002, slopes: [], straights: [{ end: 370, start: 0 }, { end: 1e3, start: 750 }], surface: 2, turn: 1 }, "10207": { corners: [{ length: 190, start: 350 }, { length: 190, start: 540 }, { length: 190, start: 1070 }, { length: 190, start: 1260 }], course: 1, courseSetStatus: [], distance: 1700, distanceType: 2, raceTrackId: 10002, slopes: [{ length: 340, slope: -1e4, start: 275 }, { length: 670, slope: 1e4, start: 615 }], straights: [{ end: 350, start: 0 }, { end: 1070, start: 730 }, { end: 1700, start: 1450 }], surface: 2, turn: 1 }, "10208": { corners: [{ length: 190, start: 292 }, { length: 190, start: 482 }, { length: 190, start: 1040 }, { length: 190, start: 1230 }, { length: 190, start: 1770 }, { length: 190, start: 1960 }], course: 1, courseSetStatus: [2], distance: 2400, distanceType: 3, raceTrackId: 10002, slopes: [], straights: [{ end: 292, start: 0 }, { end: 1040, start: 672 }, { end: 1770, start: 1420 }, { end: 2400, start: 2150 }], surface: 2, turn: 1 }, "10301": { corners: [], course: 1, courseSetStatus: [3], distance: 1e3, distanceType: 1, raceTrackId: 10003, slopes: [], straights: [{ end: 649.9, start: 0 }, { end: 1e3, start: 650 }], surface: 1, turn: 4 }, "10302": { corners: [{ length: 200, start: 430 }, { length: 210, start: 640 }], course: 2, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10003, slopes: [], straights: [{ end: 430, start: 0 }, { end: 1200, start: 850 }], surface: 1, turn: 2 }, "10303": { corners: [{ length: 200, start: 650 }, { length: 200, start: 850 }], course: 2, courseSetStatus: [], distance: 1400, distanceType: 1, raceTrackId: 10003, slopes: [], straights: [{ end: 650, start: 0 }, { end: 1400, start: 1050 }], surface: 1, turn: 2 }, "10304": { corners: [{ length: 200, start: 550 }, { length: 200, start: 750 }], course: 3, courseSetStatus: [], distance: 1600, distanceType: 2, raceTrackId: 10003, slopes: [{ length: 350, slope: 1e4, start: 250 }, { length: 300, slope: -15e3, start: 600 }], straights: [{ end: 550, start: 0 }, { end: 1600, start: 950 }], surface: 1, turn: 2 }, "10305": { corners: [{ length: 200, start: 750 }, { length: 200, start: 950 }], course: 3, courseSetStatus: [3], distance: 1800, distanceType: 2, raceTrackId: 10003, slopes: [{ length: 350, slope: 1e4, start: 450 }, { length: 300, slope: -15e3, start: 800 }], straights: [{ end: 750, start: 0 }, { end: 1800, start: 1150 }], surface: 1, turn: 2 }, "10306": { corners: [{ length: 200, start: 420 }, { length: 200, start: 620 }, { length: 200, start: 1250 }, { length: 200, start: 1450 }], course: 2, courseSetStatus: [2, 3], distance: 2e3, distanceType: 3, raceTrackId: 10003, slopes: [], straights: [{ end: 420, start: 0 }, { end: 1250, start: 820 }, { end: 2e3, start: 1650 }], surface: 1, turn: 2 }, "10307": { corners: [{ length: 200, start: 950 }, { length: 200, start: 1150 }], course: 3, courseSetStatus: [2, 3], distance: 2e3, distanceType: 3, raceTrackId: 10003, slopes: [{ length: 300, slope: -15e3, start: 1e3 }, { length: 350, slope: 1e4, start: 650 }], straights: [{ end: 950, start: 0 }, { end: 2e3, start: 1350 }], surface: 1, turn: 2 }, "10308": { corners: [{ length: 200, start: 650 }, { length: 200, start: 850 }, { length: 200, start: 1450 }, { length: 200, start: 1650 }], course: 2, courseSetStatus: [1], distance: 2200, distanceType: 3, raceTrackId: 10003, slopes: [], straights: [{ end: 650, start: 0 }, { end: 1450, start: 1050 }, { end: 2200, start: 1850 }], surface: 1, turn: 2 }, "10309": { corners: [{ length: 200, start: 810 }, { length: 200, start: 1010 }, { length: 200, start: 1650 }, { length: 200, start: 1850 }], course: 2, courseSetStatus: [], distance: 2400, distanceType: 3, raceTrackId: 10003, slopes: [], straights: [{ end: 810, start: 0 }, { end: 1650, start: 1210 }, { end: 2400, start: 2050 }], surface: 1, turn: 2 }, "10310": { corners: [{ length: 150, start: 600 }, { length: 150, start: 750 }], course: 1, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10003, slopes: [], straights: [{ end: 600, start: 0 }, { end: 1200, start: 900 }], surface: 2, turn: 2 }, "10311": { corners: [{ length: 160, start: 400 }, { length: 160, start: 560 }, { length: 160, start: 1140 }, { length: 160, start: 1300 }], course: 1, courseSetStatus: [5], distance: 1800, distanceType: 2, raceTrackId: 10003, slopes: [], straights: [{ end: 400, start: 0 }, { end: 1140, start: 720 }, { end: 1800, start: 1460 }], surface: 2, turn: 2 }, "10312": { corners: [{ length: 160, start: 380 }, { length: 160, start: 540 }, { length: 160, start: 1120 }, { length: 160, start: 1280 }, { length: 160, start: 1850 }, { length: 160, start: 2010 }], course: 1, courseSetStatus: [], distance: 2500, distanceType: 4, raceTrackId: 10003, slopes: [], straights: [{ end: 380, start: 0 }, { end: 1120, start: 700 }, { end: 1850, start: 1440 }, { end: 2500, start: 2170 }], surface: 2, turn: 2 }, "10401": { corners: [{ length: 300, start: 420 }, { length: 200, start: 720 }], course: 1, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10004, slopes: [{ length: 100, slope: 15e3, start: 180 }], straights: [{ end: 420, start: 0 }, { end: 1200, start: 920 }], surface: 1, turn: 1 }, "10402": { corners: [{ length: 200, start: 330 }, { length: 200, start: 530 }, { length: 300, start: 1020 }, { length: 200, start: 1320 }], course: 1, courseSetStatus: [2], distance: 1800, distanceType: 2, raceTrackId: 10004, slopes: [{ length: 100, slope: 15e3, start: 780 }], straights: [{ end: 330, start: 0 }, { end: 1020, start: 730 }, { end: 1800, start: 1520 }], surface: 1, turn: 1 }, "10403": { corners: [{ length: 200, start: 530 }, { length: 200, start: 730 }, { length: 300, start: 1220 }, { length: 200, start: 1520 }], course: 1, courseSetStatus: [2], distance: 2e3, distanceType: 3, raceTrackId: 10004, slopes: [{ length: 100, slope: 15e3, start: 980 }], straights: [{ end: 530, start: 0 }, { end: 1220, start: 930 }, { end: 2e3, start: 1720 }], surface: 1, turn: 1 }, "10404": { corners: [{ length: 300, start: 220 }, { length: 200, start: 520 }, { length: 200, start: 1130 }, { length: 200, start: 1330 }, { length: 300, start: 1820 }, { length: 200, start: 2120 }], course: 1, courseSetStatus: [], distance: 2600, distanceType: 4, raceTrackId: 10004, slopes: [{ length: 80, slope: 15e3, start: 0 }, { length: 100, slope: 15e3, start: 1580 }], straights: [{ end: 220, start: 0 }, { end: 1130, start: 720 }, { end: 1820, start: 1530 }, { end: 2600, start: 2320 }], surface: 1, turn: 1 }, "10405": { corners: [{ length: 210, start: 500 }, { length: 160, start: 710 }], course: 1, courseSetStatus: [], distance: 1150, distanceType: 1, raceTrackId: 10004, slopes: [], straights: [{ end: 500, start: 0 }, { end: 1150, start: 870 }], surface: 2, turn: 1 }, "10406": { corners: [{ length: 170, start: 360 }, { length: 170, start: 530 }, { length: 210, start: 1050 }, { length: 160, start: 1260 }], course: 1, courseSetStatus: [3], distance: 1700, distanceType: 2, raceTrackId: 10004, slopes: [{ length: 320, slope: -1e4, start: 285 }], straights: [{ end: 360, start: 0 }, { end: 1050, start: 700 }, { end: 1700, start: 1420 }], surface: 2, turn: 1 }, "10407": { corners: [{ length: 210, start: 310 }, { length: 160, start: 520 }, { length: 170, start: 1060 }, { length: 170, start: 1230 }, { length: 210, start: 1750 }, { length: 160, start: 1960 }], course: 1, courseSetStatus: [2], distance: 2400, distanceType: 3, raceTrackId: 10004, slopes: [], straights: [{ end: 310, start: 0 }, { end: 1060, start: 680 }, { end: 1750, start: 1400 }, { end: 2400, start: 2120 }], surface: 2, turn: 1 }, "10501": { corners: [{ length: 350, start: 300 }, { length: 250, start: 650 }], course: 3, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10005, slopes: [{ length: 200, slope: -15e3, start: 0 }, { length: 110, slope: 2e4, start: 1025 }], straights: [{ end: 1200, start: 900 }], surface: 1, turn: 1 }, "10502": { corners: [{ length: 450, start: 50 }, { length: 350, start: 700 }, { length: 250, start: 1050 }], course: 3, courseSetStatus: [3], distance: 1600, distanceType: 2, raceTrackId: 10005, slopes: [{ length: 300, slope: -15e3, start: 300 }, { length: 110, slope: 2e4, start: 1425 }], straights: [{ end: 1600, start: 1300 }], surface: 1, turn: 1 }, "10503": { corners: [{ length: 250, start: 175 }, { length: 250, start: 425 }, { length: 250, start: 1e3 }, { length: 250, start: 1250 }], course: 2, courseSetStatus: [], distance: 1800, distanceType: 2, raceTrackId: 10005, slopes: [{ length: 35, slope: 2e4, start: 1 }, { length: 200, slope: 15e3, start: 125 }, { length: 400, slope: -15e3, start: 425 }, { length: 110, slope: 2e4, start: 1625 }], straights: [{ end: 175, start: 0 }, { end: 1e3, start: 675 }, { end: 1800, start: 1500 }], surface: 1, turn: 1 }, "10504": { corners: [{ length: 250, start: 375 }, { length: 250, start: 625 }, { length: 250, start: 1200 }, { length: 250, start: 1450 }], course: 2, courseSetStatus: [1], distance: 2e3, distanceType: 3, raceTrackId: 10005, slopes: [{ length: 200, slope: 15e3, start: 325 }, { length: 110, slope: 2e4, start: 125 }, { length: 400, slope: -15e3, start: 625 }, { length: 110, slope: 2e4, start: 1825 }], straights: [{ end: 375, start: 0 }, { end: 1200, start: 875 }, { end: 2e3, start: 1700 }], surface: 1, turn: 1 }, "10505": { corners: [{ length: 247, start: 403 }, { length: 450, start: 650 }, { length: 350, start: 1300 }, { length: 250, start: 1650 }], course: 3, courseSetStatus: [2, 4], distance: 2200, distanceType: 3, raceTrackId: 10005, slopes: [{ length: 110, slope: 2e4, start: 153 }, { length: 200, slope: 15e3, start: 353 }, { length: 300, slope: -15e3, start: 900 }, { length: 110, slope: 2e4, start: 2025 }], straights: [{ end: 403, start: 0 }, { end: 2200, start: 1900 }], surface: 1, turn: 1 }, "10506": { corners: [{ length: 146, start: 100 }, { length: 250, start: 246 }, { length: 250, start: 875 }, { length: 250, start: 1125 }, { length: 250, start: 1700 }, { length: 250, start: 1950 }], course: 2, courseSetStatus: [2, 4], distance: 2500, distanceType: 4, raceTrackId: 10005, slopes: [{ length: 110, slope: 2e4, start: 621 }, { length: 200, slope: 15e3, start: 825 }, { length: 400, slope: -15e3, start: 1125 }, { length: 110, slope: 2e4, start: 2325 }], straights: [{ end: 875, start: 496 }, { end: 1700, start: 1375 }, { end: 2500, start: 2200 }], surface: 1, turn: 1 }, "10507": { corners: [{ length: 250, start: 290 }, { length: 250, start: 540 }, { length: 250, start: 1115 }, { length: 250, start: 1365 }, { length: 250, start: 1975 }, { length: 250, start: 2225 }, { length: 250, start: 2800 }, { length: 250, start: 3050 }], course: 2, courseSetStatus: [2], distance: 3600, distanceType: 4, raceTrackId: 10005, slopes: [{ length: 110, slope: 2e4, start: 40 }, { length: 200, slope: 15e3, start: 240 }, { length: 400, slope: -15e3, start: 540 }, { length: 110, slope: 2e4, start: 1740 }, { length: 200, slope: 15e3, start: 1925 }, { length: 400, slope: -15e3, start: 2225 }, { length: 110, slope: 2e4, start: 3425 }], straights: [{ end: 290, start: 0 }, { end: 1115, start: 790 }, { end: 1975, start: 1615 }, { end: 2800, start: 2475 }, { end: 3600, start: 3300 }], surface: 1, turn: 1 }, "10508": { corners: [{ length: 200, start: 500 }, { length: 200, start: 700 }], course: 1, courseSetStatus: [3], distance: 1200, distanceType: 1, raceTrackId: 10005, slopes: [{ length: 175, slope: -15e3, start: 175 }, { length: 175, slope: 15e3, start: 1e3 }], straights: [{ end: 500, start: 0 }, { end: 1200, start: 900 }], surface: 2, turn: 1 }, "10509": { corners: [{ length: 200, start: 350 }, { length: 200, start: 550 }, { length: 200, start: 1100 }, { length: 200, start: 1300 }], course: 1, courseSetStatus: [3], distance: 1800, distanceType: 2, raceTrackId: 10005, slopes: [{ length: 175, slope: 15e3, start: 100 }, { length: 175, slope: 1e4, start: 350 }, { length: 175, slope: -15e3, start: 775 }, { length: 175, slope: 15e3, start: 1600 }], straights: [{ end: 350, start: 0 }, { end: 1100, start: 750 }, { end: 1800, start: 1500 }], surface: 2, turn: 1 }, "10510": { corners: [{ length: 200, start: 200 }, { length: 200, start: 400 }, { length: 200, start: 950 }, { length: 200, start: 1150 }, { length: 200, start: 1700 }, { length: 200, start: 1900 }], course: 1, courseSetStatus: [2], distance: 2400, distanceType: 3, raceTrackId: 10005, slopes: [], straights: [{ end: 200, start: 0 }, { end: 950, start: 600 }, { end: 1700, start: 1350 }, { end: 2400, start: 2100 }], surface: 2, turn: 1 }, "10511": { corners: [{ length: 200, start: 300 }, { length: 200, start: 500 }, { length: 200, start: 1050 }, { length: 200, start: 1250 }, { length: 200, start: 1800 }, { length: 200, start: 2e3 }], course: 1, courseSetStatus: [], distance: 2500, distanceType: 4, raceTrackId: 10005, slopes: [], straights: [{ end: 300, start: 0 }, { end: 1050, start: 700 }, { end: 1800, start: 1450 }, { end: 2500, start: 2200 }], surface: 2, turn: 1 }, "10601": { corners: [{ length: 275, start: 350 }, { length: 275, start: 625 }], course: 1, courseSetStatus: [2, 3], distance: 1400, distanceType: 1, raceTrackId: 10006, slopes: [{ length: 75, slope: 2e4, start: 125 }, { length: 250, slope: -15e3, start: 250 }, { length: 150, slope: 15e3, start: 950 }], straights: [{ end: 350, start: 0 }, { end: 1400, start: 900 }], surface: 1, turn: 2 }, "10602": { corners: [{ length: 275, start: 550 }, { length: 275, start: 825 }], course: 1, courseSetStatus: [2, 4], distance: 1600, distanceType: 2, raceTrackId: 10006, slopes: [{ length: 250, slope: -15e3, start: 450 }, { length: 75, slope: 2e4, start: 325 }, { length: 150, slope: 15e3, start: 1150 }], straights: [{ end: 550, start: 0 }, { end: 1600, start: 1100 }], surface: 1, turn: 2 }, "10603": { corners: [{ length: 250, start: 75 }, { length: 275, start: 750 }, { length: 275, start: 1025 }], course: 1, courseSetStatus: [1], distance: 1800, distanceType: 2, raceTrackId: 10006, slopes: [{ length: 75, slope: 2e4, start: 525 }, { length: 250, slope: -15e3, start: 650 }, { length: 150, slope: 15e3, start: 1350 }], straights: [{ end: 750, start: 325 }, { end: 1800, start: 1300 }], surface: 1, turn: 2 }, "10604": { corners: [{ length: 200, start: 200 }, { length: 275, start: 950 }, { length: 275, start: 1225 }], course: 1, courseSetStatus: [], distance: 2e3, distanceType: 3, raceTrackId: 10006, slopes: [{ length: 75, slope: 2e4, start: 725 }, { length: 250, slope: -15e3, start: 850 }, { length: 150, slope: 15e3, start: 1550 }], straights: [{ end: 950, start: 400 }, { end: 2e3, start: 1500 }], surface: 1, turn: 2 }, "10605": { corners: [{ length: 250, start: 225 }, { length: 325, start: 475 }, { length: 275, start: 1250 }, { length: 275, start: 1525 }], course: 1, courseSetStatus: [3], distance: 2300, distanceType: 3, raceTrackId: 10006, slopes: [{ length: 75, slope: 2e4, start: 1025 }, { length: 250, slope: -15e3, start: 1150 }, { length: 150, slope: 15e3, start: 1850 }], straights: [{ end: 225, start: 0 }, { end: 1250, start: 800 }, { end: 2300, start: 1800 }], surface: 1, turn: 2 }, "10606": { corners: [{ length: 250, start: 325 }, { length: 325, start: 575 }, { length: 275, start: 1350 }, { length: 275, start: 1625 }], course: 1, courseSetStatus: [], distance: 2400, distanceType: 3, raceTrackId: 10006, slopes: [{ length: 40, slope: 15e3, start: 0 }, { length: 75, slope: 2e4, start: 1125 }, { length: 250, slope: -15e3, start: 1250 }, { length: 150, slope: 15e3, start: 1950 }], straights: [{ end: 325, start: 0 }, { end: 1350, start: 900 }, { end: 2400, start: 1900 }], surface: 1, turn: 2 }, "10607": { corners: [{ length: 250, start: 425 }, { length: 325, start: 675 }, { length: 275, start: 1450 }, { length: 275, start: 1725 }], course: 1, courseSetStatus: [2], distance: 2500, distanceType: 4, raceTrackId: 10006, slopes: [{ length: 140, slope: 15e3, start: 0 }, { length: 75, slope: 2e4, start: 1225 }, { length: 250, slope: -15e3, start: 1350 }, { length: 150, slope: 15e3, start: 2050 }], straights: [{ end: 425, start: 0 }, { end: 1450, start: 1e3 }, { end: 2500, start: 2e3 }], surface: 1, turn: 2 }, "10608": { corners: [{ length: 275, start: 292 }, { length: 275, start: 567 }, { length: 250, start: 1325 }, { length: 325, start: 1575 }, { length: 275, start: 2350 }, { length: 275, start: 2625 }], course: 1, courseSetStatus: [], distance: 3400, distanceType: 4, raceTrackId: 10006, slopes: [{ length: 75, slope: 2e4, start: 67 }, { length: 250, slope: -15e3, start: 192 }, { length: 150, slope: 15e3, start: 892 }, { length: 75, slope: 2e4, start: 2125 }, { length: 250, slope: -15e3, start: 2250 }, { length: 150, slope: 15e3, start: 2950 }], straights: [{ end: 292, start: 0 }, { end: 1325, start: 842 }, { end: 2350, start: 1900 }, { end: 3400, start: 2900 }], surface: 1, turn: 2 }, "10609": { corners: [{ length: 225, start: 350 }, { length: 225, start: 575 }], course: 1, courseSetStatus: [1], distance: 1300, distanceType: 1, raceTrackId: 10006, slopes: [{ length: 200, slope: -1e4, start: 275 }, { length: 250, slope: 15e3, start: 800 }], straights: [{ end: 350, start: 0 }, { end: 1300, start: 800 }], surface: 2, turn: 2 }, "10610": { corners: [{ length: 225, start: 450 }, { length: 225, start: 675 }], course: 1, courseSetStatus: [2], distance: 1400, distanceType: 1, raceTrackId: 10006, slopes: [{ length: 200, slope: -1e4, start: 375 }, { length: 250, slope: 15e3, start: 900 }], straights: [{ end: 450, start: 0 }, { end: 1400, start: 900 }], surface: 2, turn: 2 }, "10611": { corners: [{ length: 225, start: 650 }, { length: 225, start: 875 }], course: 1, courseSetStatus: [1, 2], distance: 1600, distanceType: 2, raceTrackId: 10006, slopes: [{ length: 200, slope: -1e4, start: 575 }, { length: 250, slope: 15e3, start: 1100 }], straights: [{ end: 650, start: 0 }, { end: 1600, start: 1100 }], surface: 2, turn: 2 }, "10612": { corners: [{ length: 250, start: 200 }, { length: 250, start: 450 }, { length: 225, start: 1150 }, { length: 225, start: 1375 }], course: 1, courseSetStatus: [], distance: 2100, distanceType: 3, raceTrackId: 10006, slopes: [{ length: 200, slope: -1e4, start: 1075 }, { length: 250, slope: 15e3, start: 1600 }], straights: [{ end: 200, start: 0 }, { end: 1150, start: 700 }, { end: 2100, start: 1600 }], surface: 2, turn: 2 }, "10613": { corners: [{ length: 250, start: 500 }, { length: 250, start: 750 }, { length: 225, start: 1450 }, { length: 225, start: 1675 }, { length: 500, start: 2348 }], course: 1, courseSetStatus: [2], distance: 2400, distanceType: 3, raceTrackId: 10006, slopes: [], straights: [{ end: 500, start: 0 }, { end: 1450, start: 1e3 }, { end: 2400, start: 1900 }], surface: 2, turn: 2 }, "10701": { corners: [{ length: 250, start: 300 }, { length: 250, start: 550 }], course: 1, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10007, slopes: [{ length: 775, slope: -1e4, start: 100 }, { length: 100, slope: 2e4, start: 875 }], straights: [{ end: 300, start: 0 }, { end: 1200, start: 800 }], surface: 1, turn: 2 }, "10702": { corners: [{ length: 250, start: 500 }, { length: 250, start: 750 }], course: 1, courseSetStatus: [], distance: 1400, distanceType: 1, raceTrackId: 10007, slopes: [{ length: 775, slope: -1e4, start: 300 }, { length: 100, slope: 2e4, start: 1075 }], straights: [{ end: 500, start: 0 }, { end: 1400, start: 1e3 }], surface: 1, turn: 2 }, "10703": { corners: [{ length: 150, start: 150 }, { length: 250, start: 700 }, { length: 250, start: 950 }], course: 1, courseSetStatus: [1], distance: 1600, distanceType: 2, raceTrackId: 10007, slopes: [{ length: 775, slope: -1e4, start: 500 }, { length: 100, slope: 2e4, start: 1275 }], straights: [{ end: 700, start: 300 }, { end: 1600, start: 1200 }], surface: 1, turn: 2 }, "10704": { corners: [{ length: 200, start: 300 }, { length: 200, start: 500 }, { length: 250, start: 1100 }, { length: 250, start: 1350 }], course: 1, courseSetStatus: [], distance: 2e3, distanceType: 3, raceTrackId: 10007, slopes: [{ length: 50, slope: 2e4, start: 0 }, { length: 775, slope: -1e4, start: 900 }, { length: 100, slope: 2e4, start: 1675 }], straights: [{ end: 300, start: 0 }, { end: 1100, start: 700 }, { end: 2e3, start: 1600 }], surface: 1, turn: 2 }, "10705": { corners: [{ length: 200, start: 500 }, { length: 200, start: 700 }, { length: 250, start: 1300 }, { length: 250, start: 1550 }], course: 1, courseSetStatus: [2], distance: 2200, distanceType: 3, raceTrackId: 10007, slopes: [{ length: 150, slope: -1e4, start: 0 }, { length: 100, slope: 2e4, start: 150 }, { length: 775, slope: -1e4, start: 1100 }, { length: 100, slope: 2e4, start: 1875 }], straights: [{ end: 500, start: 0 }, { end: 1300, start: 900 }, { end: 2200, start: 1800 }], surface: 1, turn: 2 }, "10706": { corners: [{ length: 200, start: 400 }, { length: 200, start: 600 }], course: 1, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10007, slopes: [], straights: [{ end: 400, start: 0 }, { end: 1200, start: 800 }], surface: 2, turn: 2 }, "10707": { corners: [{ length: 200, start: 600 }, { length: 200, start: 800 }], course: 1, courseSetStatus: [], distance: 1400, distanceType: 1, raceTrackId: 10007, slopes: [{ length: 600, slope: -15e3, start: 425 }, { length: 150, slope: 15e3, start: 1025 }], straights: [{ end: 600, start: 0 }, { end: 1400, start: 1e3 }], surface: 2, turn: 2 }, "10708": { corners: [{ length: 165, start: 270 }, { length: 165, start: 435 }, { length: 200, start: 1e3 }, { length: 200, start: 1200 }], course: 1, courseSetStatus: [2], distance: 1800, distanceType: 2, raceTrackId: 10007, slopes: [{ length: 50, slope: 15e3, start: 0 }, { length: 600, slope: -15e3, start: 825 }, { length: 150, slope: 15e3, start: 1425 }], straights: [{ end: 270, start: 0 }, { end: 1e3, start: 600 }, { end: 1800, start: 1400 }], surface: 2, turn: 2 }, "10709": { corners: [{ length: 165, start: 370 }, { length: 165, start: 535 }, { length: 200, start: 1100 }, { length: 200, start: 1300 }], course: 1, courseSetStatus: [], distance: 1900, distanceType: 3, raceTrackId: 10007, slopes: [], straights: [{ end: 370, start: 0 }, { end: 1100, start: 700 }, { end: 1900, start: 1500 }], surface: 2, turn: 2 }, "10801": { corners: [{ length: 275, start: 320 }, { length: 275, start: 595 }], course: 2, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10008, slopes: [{ length: 175, slope: 15e3, start: 120 }, { length: 150, slope: -15e3, start: 420 }], straights: [{ end: 320, start: 0 }, { end: 1200, start: 870 }], surface: 1, turn: 1 }, "10802": { corners: [{ length: 275, start: 520 }, { length: 275, start: 795 }], course: 2, courseSetStatus: [], distance: 1400, distanceType: 1, raceTrackId: 10008, slopes: [{ length: 175, slope: 15e3, start: 320 }, { length: 150, slope: -15e3, start: 620 }], straights: [{ end: 520, start: 0 }, { end: 1400, start: 1070 }], surface: 1, turn: 1 }, "10803": { corners: [{ length: 250, start: 500 }, { length: 250, start: 750 }], course: 3, courseSetStatus: [], distance: 1400, distanceType: 1, raceTrackId: 10008, slopes: [{ length: 100, slope: 2e4, start: 250 }, { length: 225, slope: 1e4, start: 350 }, { length: 150, slope: -2e4, start: 575 }], straights: [{ end: 500, start: 0 }, { end: 1400, start: 1e3 }], surface: 1, turn: 1 }, "10804": { corners: [{ length: 275, start: 720 }, { length: 275, start: 995 }], course: 2, courseSetStatus: [1], distance: 1600, distanceType: 2, raceTrackId: 10008, slopes: [{ length: 175, slope: 15e3, start: 520 }, { length: 150, slope: -15e3, start: 820 }], straights: [{ end: 720, start: 200 }, { end: 1600, start: 1270 }], surface: 1, turn: 1 }, "10805": { corners: [{ length: 250, start: 700 }, { length: 250, start: 950 }], course: 3, courseSetStatus: [1], distance: 1600, distanceType: 2, raceTrackId: 10008, slopes: [{ length: 100, slope: 2e4, start: 450 }, { length: 225, slope: 1e4, start: 550 }, { length: 150, slope: -2e4, start: 775 }], straights: [{ end: 700, start: 200 }, { end: 1600, start: 1200 }], surface: 1, turn: 1 }, "10806": { corners: [{ length: 250, start: 900 }, { length: 250, start: 1150 }], course: 3, courseSetStatus: [], distance: 1800, distanceType: 2, raceTrackId: 10008, slopes: [{ length: 100, slope: 2e4, start: 650 }, { length: 225, slope: 1e4, start: 750 }, { length: 150, slope: -2e4, start: 975 }], straights: [{ end: 900, start: 400 }, { end: 1800, start: 1400 }], surface: 1, turn: 1 }, "10807": { corners: [{ length: 185, start: 400 }, { length: 185, start: 585 }, { length: 250, start: 1170 }, { length: 250, start: 1420 }], course: 2, courseSetStatus: [3], distance: 2e3, distanceType: 3, raceTrackId: 10008, slopes: [{ length: 175, slope: 15e3, start: 970 }, { length: 150, slope: -15e3, start: 1270 }], straights: [{ end: 400, start: 0 }, { end: 1170, start: 770 }, { end: 2e3, start: 1670 }], surface: 1, turn: 1 }, "10808": { corners: [{ length: 200, start: 400 }, { length: 200, start: 600 }, { length: 250, start: 1300 }, { length: 250, start: 1550 }], course: 3, courseSetStatus: [1], distance: 2200, distanceType: 3, raceTrackId: 10008, slopes: [{ length: 100, slope: 2e4, start: 1050 }, { length: 225, slope: 1e4, start: 1150 }, { length: 150, slope: -2e4, start: 1375 }], straights: [{ end: 400, start: 0 }, { end: 1300, start: 800 }, { end: 2200, start: 1800 }], surface: 1, turn: 1 }, "10809": { corners: [{ length: 200, start: 600 }, { length: 200, start: 800 }, { length: 250, start: 1500 }, { length: 250, start: 1750 }], course: 3, courseSetStatus: [3], distance: 2400, distanceType: 3, raceTrackId: 10008, slopes: [{ length: 225, slope: 1e4, start: 1350 }, { length: 100, slope: 2e4, start: 1250 }, { length: 150, slope: -2e4, start: 1575 }], straights: [{ end: 600, start: 0 }, { end: 1500, start: 1e3 }, { end: 2400, start: 2e3 }], surface: 1, turn: 1 }, "10810": { corners: [{ length: 250, start: 261 }, { length: 250, start: 511 }, { length: 200, start: 1250 }, { length: 200, start: 1450 }, { length: 250, start: 2100 }, { length: 250, start: 2350 }], course: 3, courseSetStatus: [3, 5], distance: 3e3, distanceType: 4, raceTrackId: 10008, slopes: [{ length: 100, slope: 2e4, start: 11 }, { length: 225, slope: 1e4, start: 111 }, { length: 150, slope: -2e4, start: 336 }, { length: 225, slope: 1e4, start: 1950 }, { length: 100, slope: 2e4, start: 1850 }, { length: 150, slope: -2e4, start: 2175 }], straights: [{ end: 261, start: 0 }, { end: 1250, start: 761 }, { end: 2100, start: 1650 }, { end: 3e3, start: 2600 }], surface: 1, turn: 1 }, "10811": { corners: [{ length: 250, start: 458 }, { length: 250, start: 708 }, { length: 200, start: 1450 }, { length: 200, start: 1650 }, { length: 250, start: 2300 }, { length: 250, start: 2550 }], course: 3, courseSetStatus: [], distance: 3200, distanceType: 4, raceTrackId: 10008, slopes: [{ length: 100, slope: 2e4, start: 208 }, { length: 225, slope: 1e4, start: 308 }, { length: 150, slope: -2e4, start: 533 }, { length: 100, slope: 2e4, start: 2050 }, { length: 150, slope: -2e4, start: 2375 }, { length: 225, slope: 1e4, start: 2150 }], straights: [{ end: 458, start: 0 }, { end: 1450, start: 958 }, { end: 2300, start: 1850 }, { end: 3200, start: 2800 }], surface: 1, turn: 1 }, "10812": { corners: [{ length: 225, start: 400 }, { length: 225, start: 625 }], course: 1, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10008, slopes: [{ length: 200, slope: 15e3, start: 175 }, { length: 200, slope: -15e3, start: 475 }], straights: [{ end: 400, start: 0 }, { end: 1200, start: 850 }], surface: 2, turn: 1 }, "10813": { corners: [{ length: 225, start: 600 }, { length: 225, start: 825 }], course: 1, courseSetStatus: [], distance: 1400, distanceType: 1, raceTrackId: 10008, slopes: [{ length: 200, slope: 15e3, start: 375 }, { length: 200, slope: -15e3, start: 675 }], straights: [{ end: 600, start: 100 }, { end: 1400, start: 1050 }], surface: 2, turn: 1 }, "10814": { corners: [{ length: 150, start: 300 }, { length: 150, start: 450 }, { length: 225, start: 1e3 }, { length: 225, start: 1225 }], course: 1, courseSetStatus: [], distance: 1800, distanceType: 2, raceTrackId: 10008, slopes: [{ length: 200, slope: 15e3, start: 775 }, { length: 200, slope: -15e3, start: 1075 }], straights: [{ end: 300, start: 0 }, { end: 1e3, start: 600 }, { end: 1800, start: 1450 }], surface: 2, turn: 1 }, "10815": { corners: [{ length: 150, start: 400 }, { length: 150, start: 550 }, { length: 225, start: 1100 }, { length: 225, start: 1325 }], course: 1, courseSetStatus: [], distance: 1900, distanceType: 3, raceTrackId: 10008, slopes: [{ length: 200, slope: 15e3, start: 875 }, { length: 200, slope: -15e3, start: 1175 }], straights: [{ end: 400, start: 0 }, { end: 1100, start: 700 }, { end: 1900, start: 1550 }], surface: 2, turn: 1 }, "10901": { corners: [{ length: 300, start: 250 }, { length: 300, start: 550 }], course: 2, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10009, slopes: [{ length: 595, slope: -1e4, start: 400 }, { length: 125, slope: 2e4, start: 1e3 }], straights: [{ end: 250, start: 0 }, { end: 1200, start: 850 }], surface: 1, turn: 1 }, "10902": { corners: [{ length: 300, start: 450 }, { length: 300, start: 750 }], course: 2, courseSetStatus: [], distance: 1400, distanceType: 1, raceTrackId: 10009, slopes: [{ length: 595, slope: -1e4, start: 600 }, { length: 125, slope: 2e4, start: 1200 }], straights: [{ end: 450, start: 0 }, { end: 1400, start: 1050 }], surface: 1, turn: 1 }, "10903": { corners: [{ length: 350, start: 450 }, { length: 350, start: 800 }], course: 3, courseSetStatus: [3], distance: 1600, distanceType: 2, raceTrackId: 10009, slopes: [{ length: 400, slope: -1e4, start: 950 }, { length: 120, slope: 2e4, start: 1405 }], straights: [{ end: 450, start: 0 }, { end: 1600, start: 1150 }], surface: 1, turn: 1 }, "10904": { corners: [{ length: 350, start: 650 }, { length: 350, start: 1e3 }], course: 3, courseSetStatus: [3], distance: 1800, distanceType: 2, raceTrackId: 10009, slopes: [{ length: 400, slope: -1e4, start: 1150 }, { length: 120, slope: 2e4, start: 1605 }], straights: [{ end: 650, start: 0 }, { end: 1800, start: 1350 }], surface: 1, turn: 1 }, "10905": { corners: [{ length: 190, start: 370 }, { length: 190, start: 560 }, { length: 300, start: 1050 }, { length: 300, start: 1350 }], course: 2, courseSetStatus: [4], distance: 2e3, distanceType: 3, raceTrackId: 10009, slopes: [{ length: 140, slope: -1e4, start: 0 }, { length: 125, slope: 2e4, start: 145 }, { length: 595, slope: -1e4, start: 1200 }, { length: 125, slope: 2e4, start: 1800 }], straights: [{ end: 370, start: 0 }, { end: 1050, start: 750 }, { end: 2e3, start: 1650 }], surface: 1, turn: 1 }, "10906": { corners: [{ length: 190, start: 520 }, { length: 190, start: 710 }, { length: 300, start: 1250 }, { length: 300, start: 1550 }], course: 2, courseSetStatus: [1], distance: 2200, distanceType: 3, raceTrackId: 10009, slopes: [{ length: 290, slope: -1e4, start: 0 }, { length: 125, slope: 2e4, start: 295 }, { length: 595, slope: -1e4, start: 1400 }, { length: 125, slope: 2e4, start: 2e3 }], straights: [{ end: 520, start: 0 }, { end: 1250, start: 900 }, { end: 2200, start: 1850 }], surface: 1, turn: 1 }, "10907": { corners: [{ length: 190, start: 382 }, { length: 190, start: 558 }, { length: 350, start: 1250 }, { length: 350, start: 1600 }], course: 3, courseSetStatus: [3], distance: 2400, distanceType: 3, raceTrackId: 10009, slopes: [{ length: 132, slope: -1e4, start: 0 }, { length: 120, slope: 2e4, start: 187 }, { length: 400, slope: -1e4, start: 1750 }, { length: 120, slope: 2e4, start: 2205 }], straights: [{ end: 1250, start: 750 }, { end: 2400, start: 1950 }], surface: 1, turn: 1 }, "10908": { corners: [{ length: 190, start: 570 }, { length: 190, start: 760 }, { length: 350, start: 1450 }, { length: 350, start: 1800 }], course: 3, courseSetStatus: [], distance: 2600, distanceType: 4, raceTrackId: 10009, slopes: [{ length: 315, slope: -1e4, start: 0 }, { length: 120, slope: 2e4, start: 370 }, { length: 400, slope: -1e4, start: 1950 }, { length: 120, slope: 2e4, start: 2405 }], straights: [{ end: 570, start: 0 }, { end: 1450, start: 950 }, { end: 2600, start: 2150 }], surface: 1, turn: 1 }, "10909": { corners: [{ length: 300, start: 348 }, { length: 300, start: 648 }, { length: 190, start: 1320 }, { length: 190, start: 1510 }, { length: 300, start: 2050 }, { length: 300, start: 2350 }], course: 2, courseSetStatus: [3], distance: 3e3, distanceType: 4, raceTrackId: 10009, slopes: [{ length: 595, slope: -1e4, start: 498 }, { length: 125, slope: 2e4, start: 1095 }, { length: 595, slope: -1e4, start: 2200 }, { length: 125, slope: 2e4, start: 2800 }], straights: [{ end: 348, start: 0 }, { end: 1320, start: 948 }, { end: 2050, start: 1700 }, { end: 3e3, start: 2650 }], surface: 1, turn: 1 }, "10910": { corners: [{ length: 250, start: 350 }, { length: 250, start: 600 }], course: 1, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10009, slopes: [], straights: [{ end: 350, start: 0 }, { end: 1200, start: 850 }], surface: 2, turn: 1 }, "10911": { corners: [{ length: 250, start: 550 }, { length: 250, start: 800 }], course: 1, courseSetStatus: [], distance: 1400, distanceType: 1, raceTrackId: 10009, slopes: [{ length: 125, slope: 15e3, start: 1200 }], straights: [{ end: 550, start: 0 }, { end: 1400, start: 1050 }], surface: 2, turn: 1 }, "10912": { corners: [{ length: 150, start: 330 }, { length: 150, start: 480 }, { length: 250, start: 950 }, { length: 250, start: 1200 }], course: 1, courseSetStatus: [], distance: 1800, distanceType: 2, raceTrackId: 10009, slopes: [{ length: 125, slope: 15e3, start: 105 }, { length: 125, slope: 15e3, start: 1599 }], straights: [{ end: 330, start: 0 }, { end: 950, start: 630 }, { end: 1800, start: 1449 }], surface: 2, turn: 1 }, "10913": { corners: [{ length: 150, start: 500 }, { length: 150, start: 650 }, { length: 250, start: 1150 }, { length: 250, start: 1400 }], course: 1, courseSetStatus: [2, 3], distance: 2e3, distanceType: 3, raceTrackId: 10009, slopes: [{ length: 125, slope: 15e3, start: 275 }, { length: 125, slope: 15e3, start: 1800 }], straights: [{ end: 500, start: 0 }, { end: 1150, start: 800 }, { end: 2e3, start: 1650 }], surface: 2, turn: 1 }, "10914": { corners: [{ length: 350, start: 370 }, { length: 350, start: 720 }, { length: 190, start: 1520 }, { length: 190, start: 1710 }, { length: 300, start: 2250 }, { length: 300, start: 2550 }], course: 4, courseSetStatus: [], distance: 3200, distanceType: 4, raceTrackId: 10009, slopes: [{ length: 400, slope: -1e4, start: 870 }, { length: 120, slope: 2e4, start: 1325 }, { length: 595, slope: -1e4, start: 2400 }, { length: 125, slope: 2e4, start: 3e3 }], straights: [{ end: 370, start: 0 }, { end: 1520, start: 1070 }, { end: 2250, start: 1900 }, { end: 3200, start: 2850 }], surface: 1, turn: 1 }, "11001": { corners: [{ length: 205, start: 500 }, { length: 205, start: 705 }], course: 1, courseSetStatus: [1], distance: 1200, distanceType: 1, raceTrackId: 10010, slopes: [{ length: 60, slope: -15e3, start: 0 }], straights: [{ end: 500, start: 0 }, { end: 1200, start: 910 }], surface: 1, turn: 1 }, "11002": { corners: [{ length: 205, start: 290 }, { length: 205, start: 495 }, { length: 205, start: 1100 }, { length: 205, start: 1305 }], course: 1, courseSetStatus: [], distance: 1800, distanceType: 2, raceTrackId: 10010, slopes: [{ length: 255, slope: 15e3, start: 280 }], straights: [{ end: 290, start: 0 }, { end: 1100, start: 700 }, { end: 1800, start: 1510 }], surface: 1, turn: 1 }, "11003": { corners: [{ length: 205, start: 490 }, { length: 205, start: 695 }, { length: 205, start: 1300 }, { length: 205, start: 1505 }], course: 1, courseSetStatus: [3], distance: 2e3, distanceType: 3, raceTrackId: 10010, slopes: [{ length: 255, slope: 15e3, start: 480 }], straights: [{ end: 490, start: 0 }, { end: 1300, start: 900 }, { end: 2e3, start: 1710 }], surface: 1, turn: 1 }, "11004": { corners: [{ length: 205, start: 309 }, { length: 205, start: 514 }, { length: 205, start: 1110 }, { length: 205, start: 1315 }, { length: 205, start: 1900 }, { length: 205, start: 2105 }], course: 1, courseSetStatus: [2], distance: 2600, distanceType: 4, raceTrackId: 10010, slopes: [{ length: 255, slope: 15e3, start: 1100 }], straights: [{ end: 309, start: 0 }, { end: 1110, start: 719 }, { end: 1900, start: 1520 }, { end: 2600, start: 2310 }], surface: 1, turn: 1 }, "11005": { corners: [{ length: 180, start: 360 }, { length: 180, start: 540 }], course: 1, courseSetStatus: [1], distance: 1e3, distanceType: 1, raceTrackId: 10010, slopes: [], straights: [{ end: 360, start: 0 }, { end: 1e3, start: 720 }], surface: 2, turn: 1 }, "11006": { corners: [{ length: 180, start: 340 }, { length: 180, start: 520 }, { length: 180, start: 1060 }, { length: 180, start: 1240 }], course: 1, courseSetStatus: [], distance: 1700, distanceType: 2, raceTrackId: 10010, slopes: [{ length: 150, slope: 15e3, start: 370 }], straights: [{ end: 340, start: 0 }, { end: 1060, start: 700 }, { end: 1700, start: 1420 }], surface: 2, turn: 1 }, "11007": { corners: [{ length: 180, start: 312 }, { length: 180, start: 492 }, { length: 180, start: 1040 }, { length: 180, start: 1220 }, { length: 180, start: 1760 }, { length: 180, start: 1940 }], course: 1, courseSetStatus: [], distance: 2400, distanceType: 3, raceTrackId: 10010, slopes: [], straights: [{ end: 312, start: 0 }, { end: 1040, start: 672 }, { end: 1760, start: 1400 }, { end: 2400, start: 2120 }], surface: 2, turn: 1 }, "11101": { corners: [{ length: 150, start: 500 }, { length: 150, start: 650 }], course: 1, courseSetStatus: [], distance: 1200, distanceType: 1, raceTrackId: 10101, slopes: [], straights: [{ end: 500, start: 0 }, { end: 1200, start: 812 }], surface: 2, turn: 1 }, "11102": { corners: [{ length: 150, start: 300 }, { length: 150, start: 500 }, { length: 150, start: 1100 }, { length: 150, start: 1250 }], course: 1, courseSetStatus: [], distance: 1800, distanceType: 2, raceTrackId: 10101, slopes: [], straights: [{ end: 301, start: 0 }, { end: 1100.23, start: 600 }, { end: 1800, start: 1400 }], surface: 2, turn: 1 }, "11103": { corners: [{ length: 150, start: 500 }, { length: 150, start: 650 }, { length: 150, start: 1300 }, { length: 150, start: 1450 }], course: 1, courseSetStatus: [], distance: 2e3, distanceType: 3, raceTrackId: 10101, slopes: [], straights: [{ end: 500, start: 0 }, { end: 1300, start: 800 }, { end: 2e3, start: 1600 }], surface: 2, turn: 1 } };

  // ../../skilltool/CourseData.ts
  var assert = require_assert().strict;
  var Surface = /* @__PURE__ */ ((Surface2) => {
    Surface2[Surface2["Turf"] = 1] = "Turf";
    Surface2[Surface2["Dirt"] = 2] = "Dirt";
    return Surface2;
  })(Surface || {});
  var DistanceType = /* @__PURE__ */ ((DistanceType3) => {
    DistanceType3[DistanceType3["Short"] = 1] = "Short";
    DistanceType3[DistanceType3["Mile"] = 2] = "Mile";
    DistanceType3[DistanceType3["Mid"] = 3] = "Mid";
    DistanceType3[DistanceType3["Long"] = 4] = "Long";
    return DistanceType3;
  })(DistanceType || {});
  var Orientation = /* @__PURE__ */ ((Orientation3) => {
    Orientation3[Orientation3["Clockwise"] = 1] = "Clockwise";
    Orientation3[Orientation3["Counterclockwise"] = 2] = "Counterclockwise";
    Orientation3[Orientation3["UnusedOrientation"] = 3] = "UnusedOrientation";
    Orientation3[Orientation3["NoTurns"] = 4] = "NoTurns";
    return Orientation3;
  })(Orientation || {});
  var CourseHelpers;
  ((CourseHelpers2) => {
    function assertIsPhase(phase) {
      assert(phase == 0 || phase == 1 || phase == 2 || phase == 3);
    }
    CourseHelpers2.assertIsPhase = assertIsPhase;
    function assertIsSurface(surface) {
      assert(Surface.hasOwnProperty(surface));
    }
    CourseHelpers2.assertIsSurface = assertIsSurface;
    function assertIsDistanceType(distanceType) {
      assert(DistanceType.hasOwnProperty(distanceType));
    }
    CourseHelpers2.assertIsDistanceType = assertIsDistanceType;
    function assertIsOrientation(orientation) {
      assert(Orientation.hasOwnProperty(orientation));
    }
    CourseHelpers2.assertIsOrientation = assertIsOrientation;
    function isSortedByStart(arr) {
      const init2 = [true, -1];
      function isSorted2(a4, b3) {
        return [a4[0] && b3.start > a4[1], b3.start];
      }
      return arr.reduce(isSorted2, init2)[0];
    }
    CourseHelpers2.isSortedByStart = isSortedByStart;
    function phaseStart(distance, phase) {
      switch (phase) {
        case 0:
          return 0;
        case 1:
          return distance * 1 / 6;
        case 2:
          return distance * 2 / 3;
        case 3:
          return distance * 5 / 6;
      }
    }
    CourseHelpers2.phaseStart = phaseStart;
    function phaseEnd(distance, phase) {
      switch (phase) {
        case 0:
          return distance * 1 / 6;
        case 1:
          return distance * 2 / 3;
        case 2:
          return distance * 5 / 6;
        case 3:
          return distance;
      }
    }
    CourseHelpers2.phaseEnd = phaseEnd;
    function courseSpeedModifier(course, stats) {
      const statvalues = [0, stats.speed, stats.stamina, stats.power, stats.guts, stats.wisdom].map((x3) => Math.min(x3, 901));
      return 1 + course.courseSetStatus.map(
        (stat) => (1 + Math.floor(statvalues[stat] / 300.01)) * 0.05
      ).reduce((a4, b3) => a4 + b3, 0) / Math.max(course.courseSetStatus.length, 1);
    }
    CourseHelpers2.courseSpeedModifier = courseSpeedModifier;
    function getCourse(courseId) {
      const course = course_data_default[courseId];
      if (!isSortedByStart(course.slopes))
        course.slopes.sort((a4, b3) => a4.start - b3.start);
      Object.keys(course).forEach((k3) => Object.freeze(course[k3]));
      return Object.freeze(course);
    }
    CourseHelpers2.getCourse = getCourse;
  })(CourseHelpers || (CourseHelpers = {}));

  // ../../skilltool/HorseTypes.ts
  var assert2 = require_assert().strict;
  var Strategy = /* @__PURE__ */ ((Strategy2) => {
    Strategy2[Strategy2["Nige"] = 1] = "Nige";
    Strategy2[Strategy2["Senkou"] = 2] = "Senkou";
    Strategy2[Strategy2["Sasi"] = 3] = "Sasi";
    Strategy2[Strategy2["Oikomi"] = 4] = "Oikomi";
    Strategy2[Strategy2["Oonige"] = 5] = "Oonige";
    return Strategy2;
  })(Strategy || {});
  var StrategyHelpers;
  ((StrategyHelpers2) => {
    function assertIsStrategy(strategy) {
      assert2(Strategy.hasOwnProperty(strategy));
    }
    StrategyHelpers2.assertIsStrategy = assertIsStrategy;
    function strategyMatches(s1, s22) {
      return s1 == s22 || s1 == 1 /* Nige */ && s22 == 5 /* Oonige */ || s1 == 5 /* Oonige */ && s22 == 1 /* Nige */;
    }
    StrategyHelpers2.strategyMatches = strategyMatches;
  })(StrategyHelpers || (StrategyHelpers = {}));

  // ../../skilltool/Region.ts
  var Region = class _Region {
    constructor(start2, end) {
      this.start = start2;
      this.end = end;
    }
    intersect(other) {
      const start2 = Math.max(this.start, other.start);
      const end = Math.min(this.end, other.end);
      if (end <= start2) {
        return new _Region(-1, -1);
      } else {
        return new _Region(start2, end);
      }
    }
    fullyContains(other) {
      return this.start <= other.start && this.end >= other.end;
    }
  };
  var RegionList = class _RegionList extends Array {
    rmap(f3) {
      const out = new _RegionList();
      this.forEach((r3) => {
        const newr = f3(r3);
        if (Array.isArray(newr)) {
          newr.forEach((nr) => {
            if (nr.start > -1) {
              out.push(nr);
            }
          });
        } else if (newr.start > -1) {
          out.push(newr);
        }
      });
      return out;
    }
    union(other) {
      const u3 = [];
      const r3 = new _RegionList();
      u3.push.apply(u3, this);
      u3.push.apply(u3, other);
      if (u3.length == 0) {
        return r3;
      }
      u3.sort((a4, b3) => a4.start - b3.start);
      r3.push(u3.reduce((a4, b3) => {
        if (a4.fullyContains(b3)) {
          return a4;
        } else if (a4.start <= b3.start && b3.start < a4.end) {
          return new Region(a4.start, b3.end);
        } else if (a4.start < b3.end && b3.end <= a4.end) {
          return new Region(b3.start, a4.end);
        } else {
          r3.push(a4);
          return b3;
        }
      }));
      return r3;
    }
  };

  // ../../skilltool/Random.ts
  var Rule30CARng = class {
    constructor(seedLo, seedHi = 0) {
      // for very slightly better statistical properties
      //
      //     int32() {
      //         let k = 0;
      //         for (let i = 0; i < 32; ++i) {
      //             k = (k << 1) | (this.lo & 1);
      //             this.step();
      //         }
      //         return k >>> 0;
      //     }
      //
      // (obviously, would also have to also change random() to use int32())
      // this is about 3× slower
      this.int32 = this.int32_first;
      this.hi = seedHi >>> 0;
      this.lo = seedLo >>> 0;
    }
    step() {
      let rot = this.hi >>> 31;
      const rolhi = this.hi << 1 | this.lo >>> 31;
      const rollo = this.lo << 1 | rot;
      rot = this.hi << 31;
      const rorhi = this.hi >>> 1 | this.lo << 31;
      const rorlo = this.lo >>> 1 | rot;
      this.hi = rorhi ^ (this.hi | rolhi);
      this.lo = rorlo ^ (this.lo | rollo);
    }
    // NB. when sampling multiple bits it is MUCH BETTER to generate two integers at once like this
    // generating just `x` fails a PractRand FPF test at 4mb while using both is good until Node runs out of memory (“suspicious” DC6
    // result at 16mb)
    // why? i have no idea. it's convenient for the floats, at least. but you'd think it would be worse since the output should be more
    // correlated this way. who knows.
    // incidentally, there's a huge amount of design space here to explore which i have barely scratched the surface of. what bits to
    // sample, whether to sample both halves (hi and lo) of the state or just one, etc.
    // the current implementation has been arrived at experimentally using PractRand but is by no means the optimal design
    // oddly enough trying to make use of both hi and lo tends to make the results significantly worse, but it doesn't seem to matter much
    // which one is used. my initial thought was to use only lo since the right half of rule 30 is well-known to be more chaotic than the
    // left half. however hi does slightly better in practice, with no anomalies until 16mb. i suppose since it's circular the usual
    // left/right separation of rule 30 doesn't really apply?
    // ideally, it would be nice to get down to something that has good enough randomness but generates 8 bits per CA step instead of 4
    pair() {
      let x3 = 0 >>> 0, y3 = 0 >>> 0;
      for (let i4 = 0; i4 < 16; ++i4) {
        x3 = x3 << 2 | (this.hi & 65536) >>> 15 | this.hi & 1;
        y3 = y3 << 2 | (this.hi & 16777216) >>> 23 | (this.hi & 256) >>> 8;
        this.step();
      }
      return [x3, y3];
    }
    int32_first() {
      let [x3, y3] = this.pair();
      this.next = y3;
      this.int32 = this.int32_second;
      return x3;
    }
    int32_second() {
      this.int32 = this.int32_first;
      return this.next;
    }
    random() {
      const MASK_HI = 67108863 >>> 0;
      const MASK_LO = 134217727 >>> 0;
      const EXP = 134217728;
      const MANT = 9007199254740992;
      const [hi, lo] = this.pair();
      return ((hi & MASK_HI) * EXP + (lo & MASK_LO)) / MANT;
    }
    uniform(upper) {
      const mask = -1 >>> Math.clz32(upper - 1 | 1);
      let n3 = 0;
      do {
        n3 = this.int32() & mask;
      } while (n3 >= upper);
      return n3;
    }
  };

  // ../../skilltool/ActivationSamplePolicy.ts
  var ImmediatePolicy = Object.freeze({
    sample(regions, _0, _1) {
      return regions.slice(0, 1);
    },
    reconcile(other) {
      return other.reconcileImmediate(this);
    },
    reconcileImmediate(other) {
      return other;
    },
    reconcileDistributionRandom(other) {
      return other;
    },
    reconcileRandom(other) {
      return other;
    },
    reconcileStraightRandom(other) {
      return other;
    },
    reconcileAllCornerRandom(other) {
      return other;
    }
  });
  var RandomPolicy = Object.freeze({
    sample(regions, nsamples, rng) {
      if (regions.length == 0) {
        return [];
      }
      let acc = 0;
      const weights = regions.map((r3) => acc += r3.end - r3.start);
      const samples = [];
      for (let i4 = 0; i4 < nsamples; ++i4) {
        const threshold = rng.uniform(acc);
        const region = regions.find((_2, i5) => weights[i5] > threshold);
        samples.push(region.start + rng.uniform(region.end - region.start - 10));
      }
      return samples.map((pos) => new Region(pos, pos + 10));
    },
    reconcile(other) {
      return other.reconcileRandom(this);
    },
    reconcileImmediate(_2) {
      return this;
    },
    reconcileDistributionRandom(other) {
      return this;
    },
    reconcileRandom(other) {
      return other;
    },
    reconcileStraightRandom(other) {
      return other;
    },
    reconcileAllCornerRandom(other) {
      return other;
    }
  });
  var DistributionRandomPolicy = class {
    sample(regions, nsamples, rng) {
      if (regions.length == 0) {
        return [];
      }
      const range = regions.reduce((acc, r3) => acc + r3.end - r3.start, 0);
      const rs = regions.slice().sort((a4, b3) => a4.start - b3.start);
      const randoms = this.distribution(range, nsamples, rng);
      const samples = [];
      for (let i4 = 0; i4 < nsamples; ++i4) {
        let pos = randoms[i4];
        for (let j3 = 0; ; j3++) {
          pos += rs[j3].start;
          if (pos > rs[j3].end) {
            pos -= rs[j3].end;
          } else {
            samples.push(new Region(pos, rs[j3].end));
            break;
          }
        }
      }
      return samples;
    }
    reconcile(other) {
      return other.reconcileDistributionRandom(this);
    }
    reconcileImmediate(_2) {
      return this;
    }
    reconcileDistributionRandom(other) {
      return this;
    }
    // this is probably not exactly the right thing to do either, but the true random conditions do need to place a fixed trigger
    // statically ahead of time, uninfluenced by us. this means that the only alternatives are 1) this condition is coincidentally
    // fulfilled during the static random trigger or 2) the skill does not activate at all.
    // since the latter is not particularly interesting, it's safe to just ignore this sample policy and use only the true random one.
    reconcileRandom(other) {
      return other;
    }
    reconcileStraightRandom(other) {
      return other;
    }
    reconcileAllCornerRandom(other) {
      return other;
    }
  };
  var UniformRandomPolicy = class extends DistributionRandomPolicy {
    constructor() {
      super();
    }
    distribution(upper, nsamples, rng) {
      const nums = [];
      for (let i4 = 0; i4 < nsamples; ++i4) {
        nums.push(rng.uniform(upper));
      }
      return nums;
    }
  };
  var LogNormalRandomPolicy = class extends DistributionRandomPolicy {
    constructor(mu, sigma) {
      super();
      this.mu = mu;
      this.sigma = sigma;
    }
    distribution(upper, nsamples, rng) {
      let nums = [], min4 = Infinity, max5 = 0;
      const halfn = Math.ceil(nsamples / 2);
      for (let i4 = 0; i4 < halfn; ++i4) {
        let x3, y3, r22;
        do {
          x3 = rng.random() * 2 - 1;
          y3 = rng.random() * 2 - 1;
          r22 = x3 * x3 + y3 * y3;
        } while (r22 == 0 || r22 >= 1);
        const m3 = Math.sqrt(-2 * Math.log(r22) / r22) * this.sigma;
        const a4 = Math.exp(x3 * m3 + this.mu);
        const b3 = Math.exp(y3 * m3 + this.mu);
        min4 = Math.min(min4, a4, b3);
        max5 = Math.max(max5, a4, b3);
        nums.push(a4, b3);
      }
      const range = max5 - min4;
      return nums.map((n3) => Math.floor(upper * (n3 - min4) / range));
    }
  };
  var ErlangRandomPolicy = class extends DistributionRandomPolicy {
    constructor(k3, lambda) {
      super();
      this.k = k3;
      this.lambda = lambda;
    }
    distribution(upper, nsamples, rng) {
      const nums = [];
      let min4 = Infinity, max5 = 0;
      for (let i4 = 0; i4 < nsamples; ++i4) {
        let u3 = 1;
        for (let j3 = 0; j3 < this.k; ++j3) {
          u3 *= rng.random();
        }
        const n3 = -Math.log(u3) / this.lambda;
        min4 = Math.min(min4, n3);
        max5 = Math.max(max5, n3);
        nums.push(n3);
      }
      const range = nsamples == 1 ? 18 : max5 - min4;
      return nums.map((n3) => Math.floor(upper * (n3 - min4) / range));
    }
  };
  var StraightRandomPolicy = Object.freeze({
    sample(regions, nsamples, rng) {
      if (regions.length == 0) {
        return [];
      }
      const samples = [];
      for (let i4 = 0; i4 < nsamples; ++i4) {
        const r3 = regions[rng.uniform(regions.length)];
        samples.push(r3.start + rng.uniform(r3.end - r3.start - 10));
      }
      return samples.map((pos) => new Region(pos, pos + 10));
    },
    reconcile(other) {
      return other.reconcileStraightRandom(this);
    },
    reconcileImmediate(_2) {
      return this;
    },
    reconcileDistributionRandom(_2) {
      return this;
    },
    reconcileRandom(_2) {
      return this;
    },
    reconcileStraightRandom(other) {
      return other;
    },
    reconcileAllCornerRandom(other) {
      throw new Error("cannot reconcile StraightRandomPolicy with AllCornerRandomPolicy");
    }
  });
  var AllCornerRandomPolicy = Object.freeze({
    placeTriggers(regions, rng) {
      const triggers = [];
      const candidates = regions.slice();
      candidates.sort((a4, b3) => a4.start - b3.start);
      while (triggers.length < 4 && candidates.length > 0) {
        const ci = rng.uniform(candidates.length);
        const c3 = candidates[ci];
        const start2 = c3.start + rng.uniform(c3.end - c3.start - 10);
        if (start2 + 20 <= c3.end) {
          candidates.splice(ci, 1, new Region(start2 + 10, c3.end));
        } else {
          candidates.splice(ci, 1);
        }
        candidates.splice(0, ci);
        triggers.push(start2);
      }
      return new Region(triggers[0], triggers[0] + 10);
    },
    sample(regions, nsamples, rng) {
      const samples = [];
      for (let i4 = 0; i4 < nsamples; ++i4) {
        samples.push(this.placeTriggers(regions, rng));
      }
      return samples;
    },
    reconcile(other) {
      return other.reconcileAllCornerRandom(this);
    },
    reconcileImmediate(_2) {
      return this;
    },
    reconcileDistributionRandom(_2) {
      return this;
    },
    reconcileRandom(_2) {
      return this;
    },
    reconcileStraightRandom(_2) {
      throw new Error("cannot reconcile StraightRandomPolicy with AllCornerRandomPolicy");
    },
    reconcileAllCornerRandom(_2) {
      return this;
    }
  });

  // ../../skilltool/ActivationConditions.ts
  var assert3 = require_assert().strict;
  function kTrue(_2) {
    return true;
  }
  function withDefaultCond(r3) {
    if (r3 instanceof RegionList) {
      return [r3, kTrue];
    }
    return r3;
  }
  var EqOperator = class {
    constructor(condition, argument) {
      this.condition = condition;
      this.argument = argument;
      this.samplePolicy = condition.samplePolicy;
    }
    apply(regions, course, horse, extra) {
      return withDefaultCond(this.condition.filterEq(regions, this.argument, course, horse, extra));
    }
  };
  var NeqOperator = class {
    constructor(condition, argument) {
      this.condition = condition;
      this.argument = argument;
      this.samplePolicy = condition.samplePolicy;
    }
    apply(regions, course, horse, extra) {
      return withDefaultCond(this.condition.filterNeq(regions, this.argument, course, horse, extra));
    }
  };
  var LtOperator = class {
    constructor(condition, argument) {
      this.condition = condition;
      this.argument = argument;
      this.samplePolicy = condition.samplePolicy;
    }
    apply(regions, course, horse, extra) {
      return withDefaultCond(this.condition.filterLt(regions, this.argument, course, horse, extra));
    }
  };
  var LteOperator = class {
    constructor(condition, argument) {
      this.condition = condition;
      this.argument = argument;
      this.samplePolicy = condition.samplePolicy;
    }
    apply(regions, course, horse, extra) {
      return withDefaultCond(this.condition.filterLte(regions, this.argument, course, horse, extra));
    }
  };
  var GtOperator = class {
    constructor(condition, argument) {
      this.condition = condition;
      this.argument = argument;
      this.samplePolicy = condition.samplePolicy;
    }
    apply(regions, course, horse, extra) {
      return withDefaultCond(this.condition.filterGt(regions, this.argument, course, horse, extra));
    }
  };
  var GteOperator = class {
    constructor(condition, argument) {
      this.condition = condition;
      this.argument = argument;
      this.samplePolicy = condition.samplePolicy;
    }
    apply(regions, course, horse, extra) {
      return withDefaultCond(this.condition.filterGte(regions, this.argument, course, horse, extra));
    }
  };
  var AndOperator = class {
    constructor(left2, right2) {
      this.left = left2;
      this.right = right2;
      this.samplePolicy = left2.samplePolicy.reconcile(right2.samplePolicy);
    }
    apply(regions, course, horse, extra) {
      const [leftval, leftcond] = this.left.apply(regions, course, horse, extra);
      const [rightval, rightcond] = this.right.apply(leftval, course, horse, extra);
      if (leftcond === kTrue && rightcond === kTrue) {
        return [rightval, kTrue];
      }
      return [rightval, (s3) => leftcond(s3) && rightcond(s3)];
    }
  };
  var OrOperator = class {
    constructor(left2, right2) {
      this.left = left2;
      this.right = right2;
      this.samplePolicy = left2.samplePolicy.reconcile(right2.samplePolicy);
    }
    apply(regions, course, horse, extra) {
      const [leftval, leftcond] = this.left.apply(regions, course, horse, extra);
      const [rightval, rightcond] = this.right.apply(regions, course, horse, extra);
      return [leftval.union(rightval), (s3) => leftcond(s3) || rightcond(s3)];
    }
  };
  function notSupported(_0, _1, _2, _3, extra) {
    assert3(false, "unsupported comparison");
    throw 0;
  }
  function noop2(regions, _1, _2, _3, extra) {
    return regions;
  }
  var noopAll = Object.freeze({
    filterEq: noop2,
    filterNeq: noop2,
    filterLt: noop2,
    filterLte: noop2,
    filterGt: noop2,
    filterGte: noop2
  });
  var noopImmediate = Object.freeze(Object.assign({ samplePolicy: ImmediatePolicy }, noopAll));
  var noopRandom = Object.freeze(Object.assign({ samplePolicy: RandomPolicy }, noopAll));
  var defaultImmediate = Object.freeze({
    samplePolicy: ImmediatePolicy,
    filterEq: notSupported,
    filterNeq: notSupported,
    filterLt: notSupported,
    filterLte: notSupported,
    filterGt: notSupported,
    filterGte: notSupported
  });
  function immediate(o4) {
    return Object.assign({}, defaultImmediate, o4);
  }
  var defaultRandom = Object.freeze({
    samplePolicy: RandomPolicy,
    filterEq: notSupported,
    filterNeq: notSupported,
    filterLt: notSupported,
    filterLte: notSupported,
    filterGt: notSupported,
    filterGte: notSupported
  });
  function random(o4) {
    return Object.assign({}, defaultRandom, o4);
  }
  function distributionRandomFactory(cls) {
    const cache = /* @__PURE__ */ Object.create(null);
    return function(...args) {
      const o4 = args.pop();
      const key = args.join(",");
      const policy = key in cache ? cache[key] : cache[key] = Object.freeze(new cls(...args));
      return Object.assign({
        samplePolicy: policy,
        filterEq: notSupported,
        filterNeq: notSupported,
        filterLt: notSupported,
        filterLte: notSupported,
        filterGt: notSupported,
        filterGte: notSupported
      }, o4);
    };
  }
  var logNormalRandom = distributionRandomFactory(LogNormalRandomPolicy);
  var erlangRandom = distributionRandomFactory(ErlangRandomPolicy);
  var uniformRandom = distributionRandomFactory(UniformRandomPolicy);
  function noopErlangRandom(k3, lambda) {
    return erlangRandom(k3, lambda, noopAll);
  }
  var noopUniformRandom = uniformRandom(noopAll);
  function valueFilter(getValue) {
    return immediate({
      filterEq(regions, value, course, horse, extra) {
        return getValue(course, horse, extra) == value ? regions : new RegionList();
      },
      filterNeq(regions, value, course, horse, extra) {
        return getValue(course, horse, extra) != value ? regions : new RegionList();
      },
      filterLt(regions, value, course, horse, extra) {
        return getValue(course, horse, extra) < value ? regions : new RegionList();
      },
      filterLte(regions, value, course, horse, extra) {
        return getValue(course, horse, extra) <= value ? regions : new RegionList();
      },
      filterGt(regions, value, course, horse, extra) {
        return getValue(course, horse, extra) > value ? regions : new RegionList();
      },
      filterGte(regions, value, course, horse, extra) {
        return getValue(course, horse, extra) >= value ? regions : new RegionList();
      }
    });
  }
  var Conditions = Object.freeze({
    accumulatetime: immediate({
      filterGte(regions, t3, _0, _1, extra) {
        return [regions, (s3) => s3.accumulatetime.t >= t3];
      }
    }),
    activate_count_all: immediate({
      filterLte(regions, n3, _0, _1, extra) {
        return [regions, (s3) => s3.activateCount.reduce((a4, b3) => a4 + b3) <= n3];
      },
      filterGte(regions, n3, _0, _1, extra) {
        return [regions, (s3) => s3.activateCount.reduce((a4, b3) => a4 + b3) >= n3];
      }
    }),
    activate_count_end_after: immediate({
      filterGte(regions, n3, _0, _1, extra) {
        return [regions, (s3) => s3.activateCount[2] >= n3];
      }
    }),
    activate_count_heal: immediate({
      filterGte(regions, n3, _0, _1, extra) {
        return [regions, (s3) => s3.activateCountHeal >= n3];
      }
    }),
    activate_count_middle: immediate({
      filterGte(regions, n3, _0, _1, extra) {
        return [regions, (s3) => s3.activateCount[1] >= n3];
      }
    }),
    activate_count_start: immediate({
      filterGte(regions, n3, _0, _1, extra) {
        return [regions, (s3) => s3.activateCount[0] >= n3];
      }
    }),
    all_corner_random: {
      samplePolicy: AllCornerRandomPolicy,
      filterEq(regions, one2, course, _2, extra) {
        assert3(one2 == 1, "must be all_corner_random==1");
        const corners = course.corners.map((c3) => new Region(c3.start, c3.start + c3.length));
        return regions.rmap((r3) => corners.map((c3) => r3.intersect(c3)));
      },
      filterNeq: notSupported,
      filterLt: notSupported,
      filterLte: notSupported,
      filterGt: notSupported,
      filterGte: notSupported
    },
    always: noopImmediate,
    // NB. since skill conditions are processed before any skill activations, stats here are base stats (i.e. greens are not included)
    base_power: valueFilter((_2, horse, extra) => horse.power),
    base_speed: valueFilter((_2, horse, extra) => horse.speed),
    base_stamina: valueFilter((_2, horse, extra) => horse.stamina),
    base_guts: valueFilter((_2, horse, extra) => horse.guts),
    base_wiz: valueFilter((_2, horse, extra) => horse.wisdom),
    bashin_diff_behind: noopErlangRandom(3, 2),
    bashin_diff_infront: noopErlangRandom(3, 2),
    behind_near_lane_time: noopErlangRandom(3, 2),
    // NB. at least in theory _set1 should have a slightly more early-biased distribution since it's technically easier to activate, but I don't
    // really think it makes much of a difference. Same with blocked_front vs blocked_front_continuetime I suppose.
    behind_near_lane_time_set1: noopErlangRandom(3, 2),
    blocked_all_continuetime: noopErlangRandom(3, 2),
    blocked_front: noopErlangRandom(3, 2),
    blocked_front_continuetime: noopErlangRandom(3, 2),
    blocked_side_continuetime: noopErlangRandom(3, 2),
    change_order_onetime: noopErlangRandom(3, 2),
    change_order_up_end_after: erlangRandom(3, 2, {
      filterGte(regions, _0, course, _1, extra) {
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, 2), course.distance);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    change_order_up_finalcorner_after: erlangRandom(3, 2, {
      filterGte(regions, _0, course, _1, extra) {
        assert3(CourseHelpers.isSortedByStart(course.corners), "course corners must be sorted by start");
        if (course.corners.length == 0) {
          return new RegionList();
        }
        const finalCornerStart = course.corners[course.corners.length - 1].start;
        const bounds = new Region(finalCornerStart, course.distance);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    change_order_up_middle: erlangRandom(3, 2, {
      filterGte(regions, _0, course, _1, extra) {
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, 1), CourseHelpers.phaseEnd(course.distance, 1));
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    compete_fight_count: uniformRandom({
      filterGt(regions, _0, course, _1, extra) {
        assert3(CourseHelpers.isSortedByStart(course.straights), "course straights must be sorted by start");
        const lastStraight = course.straights[course.straights.length - 1];
        return regions.rmap((r3) => r3.intersect(lastStraight));
      }
    }),
    corner: immediate({
      filterEq(regions, cornerNum, course, _2, extra) {
        assert3(CourseHelpers.isSortedByStart(course.corners), "course corners must be sorted by start");
        if (cornerNum == 0) {
          let lastEnd = 0;
          const nonCorners = course.corners.map((c3) => {
            const r3 = new Region(lastEnd, c3.start);
            lastEnd = c3.start + c3.length;
            return r3;
          });
          if (lastEnd != course.distance) {
            nonCorners.push(new Region(lastEnd, course.distance));
          }
          return regions.rmap((r3) => nonCorners.map((s3) => r3.intersect(s3)));
        } else if (course.corners.length + cornerNum >= 5) {
          const corners = [];
          for (let cornerIdx = course.corners.length + cornerNum - 5; cornerIdx >= 0; cornerIdx -= 4) {
            const corner = course.corners[cornerIdx];
            corners.push(new Region(corner.start, corner.start + corner.length));
          }
          corners.reverse();
          return regions.rmap((r3) => corners.map((c3) => r3.intersect(c3)));
        } else {
          return new RegionList();
        }
      },
      filterNeq(regions, cornerNum, course, _2, extra) {
        assert3(cornerNum == 0, "only supports corner!=0");
        const corners = course.corners.map((c3) => new Region(c3.start, c3.start + c3.length));
        return regions.rmap((r3) => corners.map((c3) => r3.intersect(c3)));
      }
    }),
    corner_count: valueFilter((course, _2, extra) => course.corners.length),
    // FIXME this shouldn't actually be random, since in cases like corner_random==1@corner_random==2 it should sample
    // only from the first corner and not from the combined regions, so it needs its own sample policy
    // actually, that's slightly annoying to handle since corners come in back-to-back pairs, so their regions will
    // get merged by the union operation.
    // the real way to fix this is to finally allow placing multiple triggers, then each branch of an @ can simply
    // place its own trigger and the problem goes away.
    corner_random: random({
      filterEq(regions, cornerNum, course, _2, extra) {
        assert3(CourseHelpers.isSortedByStart(course.corners), "course corners must be sorted by start");
        if (course.corners.length + cornerNum >= 5) {
          const corner = course.corners[course.corners.length + cornerNum - 5];
          const cornerBounds = new Region(corner.start, corner.start + corner.length);
          return regions.rmap((r3) => r3.intersect(cornerBounds));
        } else {
          return new RegionList();
        }
      }
    }),
    course_distance: valueFilter((course, _2, extra) => course.distance),
    distance_diff_rate: noopImmediate,
    distance_diff_top: noopImmediate,
    distance_diff_top_float: noopImmediate,
    distance_rate: immediate({
      filterLte(regions, rate, course, _2, extra) {
        const bounds = new Region(0, course.distance * rate / 100);
        return regions.rmap((r3) => r3.intersect(bounds));
      },
      filterGte(regions, rate, course, _2, extra) {
        const bounds = new Region(course.distance * rate / 100, course.distance);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    distance_rate_after_random: random({
      filterEq(regions, rate, course, _2, extra) {
        const bounds = new Region(course.distance * rate / 100, course.distance);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    distance_type: immediate({
      filterEq(regions, distanceType, course, _2, extra) {
        CourseHelpers.assertIsDistanceType(distanceType);
        if (course.distanceType == distanceType) {
          return regions;
        } else {
          return new RegionList();
        }
      },
      filterNeq(regions, distanceType, course, _2, extra) {
        CourseHelpers.assertIsDistanceType(distanceType);
        if (course.distanceType != distanceType) {
          return regions;
        } else {
          return new RegionList();
        }
      }
    }),
    down_slope_random: random({
      filterEq(regions, one2, course, _2, extra) {
        assert3(one2 == 1, "must be down_slope_random==1");
        const slopes = course.slopes.filter((s3) => s3.slope < 0).map((s3) => new Region(s3.start, s3.start + s3.length));
        return regions.rmap((r3) => slopes.map((s3) => r3.intersect(s3)));
      }
    }),
    grade: valueFilter((_0, _1, extra) => extra.grade),
    ground_condition: valueFilter((_0, _1, extra) => extra.groundCondition),
    ground_type: valueFilter((course, _2, extra) => course.surface),
    hp_per: immediate({
      filterLte(regions, hpPer, _0, _1, extra) {
        hpPer /= 100;
        return [regions, (s3) => s3.hp.hpRatioRemaining() <= hpPer];
      },
      filterGte(regions, hpPer, _0, _1, extra) {
        hpPer /= 100;
        return [regions, (s3) => s3.hp.hpRatioRemaining() >= hpPer];
      }
    }),
    infront_near_lane_time: noopErlangRandom(3, 2),
    is_activate_other_skill_detail: immediate({
      filterEq(regions, one2, _0, _1, extra) {
        assert3(one2 == 1, "must be is_activate_other_skill_detail==1");
        return [regions, (s3) => s3.usedSkills.has(extra.skillId)];
      }
    }),
    is_basis_distance: immediate({
      filterEq(regions, flag, course, _2, extra) {
        assert3(flag == 0 || flag == 1, "must be is_basis_distance==0 or is_basis_distance==1");
        return Math.min(course.distance % 400, 1) != flag ? regions : new RegionList();
      }
    }),
    is_badstart: immediate({
      filterEq(regions, flag, _0, _1, extra) {
        assert3(flag == 0 || flag == 1, "must be is_badstart==0 or is_badstart==1");
        const f3 = flag ? (s3) => s3.startDelay > 0.08 : (s3) => s3.startDelay <= 0.08;
        return [regions, f3];
      }
    }),
    is_behind_in: noopImmediate,
    is_dirtgrade: immediate({
      filterEq(regions, flag, course, _2, extra) {
        assert3(flag == 1, "must be is_dirtgrade==1");
        return [10101, 10103, 10104, 10105].indexOf(course.raceTrackId) > -1 ? regions : new RegionList();
      }
    }),
    is_finalcorner: immediate({
      filterEq(regions, flag, course, _2, extra) {
        assert3(flag == 0 || flag == 1, "must be is_finalcorner==0 or is_finalcorner==1");
        assert3(CourseHelpers.isSortedByStart(course.corners), "course corners must be sorted by start");
        if (course.corners.length == 0) {
          return new RegionList();
        }
        const finalCornerStart = course.corners[course.corners.length - 1].start;
        const bounds = flag ? new Region(finalCornerStart, course.distance) : new Region(0, finalCornerStart);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    is_finalcorner_laterhalf: immediate({
      filterEq(regions, one2, course, _2, extra) {
        assert3(one2 == 1, "must be is_finalcorner_laterhalf==1");
        assert3(CourseHelpers.isSortedByStart(course.corners), "course corners must be sorted by start");
        if (course.corners.length == 0) {
          return new RegionList();
        }
        const fc = course.corners[course.corners.length - 1];
        const bounds = new Region((fc.start + fc.start + fc.length) / 2, fc.start + fc.length);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    is_finalcorner_random: random({
      filterEq(regions, one2, course, _2, extra) {
        assert3(one2 == 1, "must be is_finalcorner_random==1");
        assert3(CourseHelpers.isSortedByStart(course.corners), "course corners must be sorted by start");
        if (course.corners.length == 0) {
          return new RegionList();
        }
        const fc = course.corners[course.corners.length - 1];
        const bounds = new Region(fc.start, fc.start + fc.length);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    is_lastspurt: immediate({
      filterEq(regions, one2, course, _2, extra) {
        assert3(one2 == 1, "must be is_lastspurt==1");
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, 2), course.distance);
        return [regions.rmap((r3) => r3.intersect(bounds)), (s3) => s3.isLastSpurt];
      }
    }),
    is_last_straight: immediate({
      filterEq(regions, one2, course, _2, extra) {
        assert3(one2 == 1, "must be is_last_straight_onetime==1");
        assert3(CourseHelpers.isSortedByStart(course.straights), "course straights must be sorted by start");
        const lastStraight = course.straights[course.straights.length - 1];
        return regions.rmap((r3) => r3.intersect(lastStraight));
      }
    }),
    is_last_straight_onetime: immediate({
      filterEq(regions, one2, course, _2, extra) {
        assert3(one2 == 1, "must be is_last_straight_onetime==1");
        assert3(CourseHelpers.isSortedByStart(course.straights), "course straights must be sorted by start");
        const lastStraightStart = course.straights[course.straights.length - 1].start;
        const trigger = new Region(lastStraightStart, lastStraightStart + 10);
        return regions.rmap((r3) => r3.intersect(trigger));
      }
    }),
    is_move_lane: noopErlangRandom(5, 1),
    is_overtake: noopErlangRandom(1, 2),
    is_surrounded: noopErlangRandom(3, 2),
    is_used_skill_id: immediate({
      filterEq(regions, skillId, _0, _1, extra) {
        return [regions, (s3) => s3.usedSkills.has("" + skillId)];
      }
    }),
    lane_type: noopImmediate,
    lastspurt: immediate({
      filterEq(regions, case_, course, _2, extra) {
        let f3;
        switch (case_) {
          case 1:
            f3 = (s3) => s3.isLastSpurt && s3.lastSpurtTransition != -1;
            break;
          case 2:
            f3 = (s3) => s3.isLastSpurt && s3.lastSpurtTransition == -1;
            break;
          case 3:
            f3 = (s3) => !s3.isLastSpurt;
            break;
          default:
            assert3(1 <= case_ && case_ <= 3, "lastspurt case must be 1-3");
        }
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, 2), course.distance);
        return [regions.rmap((r3) => r3.intersect(bounds)), f3];
      }
    }),
    motivation: valueFilter((_0, _1, extra) => extra.mood + 3),
    // go from -2 to 2 to 1-5 scale
    near_count: noopErlangRandom(3, 2),
    order: noopImmediate,
    order_rate: noopImmediate,
    order_rate_in20_continue: noopImmediate,
    order_rate_in40_continue: noopImmediate,
    order_rate_in80_continue: noopImmediate,
    order_rate_out20_continue: noopImmediate,
    order_rate_out40_continue: noopImmediate,
    order_rate_out50_continue: noopImmediate,
    order_rate_out70_continue: noopImmediate,
    overtake_target_no_order_up_time: noopErlangRandom(3, 2),
    overtake_target_time: noopErlangRandom(3, 2),
    phase: {
      samplePolicy: ImmediatePolicy,
      filterEq(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const fudge = ["100591", "900591", "110261", "910261", "110191", "910191", "120451", "920451", "101502121"].indexOf(extra.skillId) > -1 ? 10 : 0;
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, phase), CourseHelpers.phaseEnd(course.distance, phase) + fudge);
        return regions.rmap((r3) => r3.intersect(bounds));
      },
      filterNeq: notSupported,
      filterLt(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        assert3(phase > 0, "phase == 0");
        const bounds = new Region(0, CourseHelpers.phaseStart(course.distance, phase));
        return regions.rmap((r3) => r3.intersect(bounds));
      },
      filterLte(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const bounds = new Region(0, CourseHelpers.phaseEnd(course.distance, phase));
        return regions.rmap((r3) => r3.intersect(bounds));
      },
      filterGt(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        assert3(phase < 3, "phase > 2");
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, phase + 1), course.distance);
        return regions.rmap((r3) => r3.intersect(bounds));
      },
      filterGte(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, phase), course.distance);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    },
    phase_corner_random: random({
      filterEq(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const phaseStart = CourseHelpers.phaseStart(course.distance, phase);
        const phaseEnd = CourseHelpers.phaseEnd(course.distance, phase);
        const corners = course.corners.filter((c3) => c3.start >= phaseStart && c3.start < phaseEnd || c3.start + c3.length >= phaseStart && c3.start + c3.length < phaseEnd).map((c3) => new Region(Math.max(c3.start, phaseStart), Math.min(c3.start + c3.length, phaseEnd)));
        return regions.rmap((r3) => corners.map((c3) => r3.intersect(c3)));
      }
    }),
    phase_firsthalf_random: random({
      filterEq(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const start2 = CourseHelpers.phaseStart(course.distance, phase);
        const end = CourseHelpers.phaseEnd(course.distance, phase);
        const bounds = new Region(start2, start2 + (end - start2) / 2);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    phase_firstquarter: immediate({
      filterEq(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const start2 = CourseHelpers.phaseStart(course.distance, phase);
        const end = CourseHelpers.phaseEnd(course.distance, phase);
        const bounds = new Region(start2, start2 + (end - start2) / 4);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    phase_firstquarter_random: random({
      filterEq(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const start2 = CourseHelpers.phaseStart(course.distance, phase);
        const end = CourseHelpers.phaseEnd(course.distance, phase);
        const bounds = new Region(start2, start2 + (end - start2) / 4);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    phase_laterhalf_random: random({
      filterEq(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const start2 = CourseHelpers.phaseStart(course.distance, phase);
        const end = CourseHelpers.phaseEnd(course.distance, phase);
        const bounds = new Region((start2 + end) / 2, end);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    phase_random: random({
      filterEq(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, phase), CourseHelpers.phaseEnd(course.distance, phase));
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    phase_straight_random: {
      samplePolicy: StraightRandomPolicy,
      filterEq(regions, phase, course, _2, extra) {
        CourseHelpers.assertIsPhase(phase);
        const phaseBounds = new Region(CourseHelpers.phaseStart(course.distance, phase), CourseHelpers.phaseEnd(course.distance, phase));
        return regions.rmap((r3) => course.straights.map((s3) => r3.intersect(s3))).rmap((r3) => r3.intersect(phaseBounds));
      },
      filterNeq: notSupported,
      filterLt: notSupported,
      filterLte: notSupported,
      filterGt: notSupported,
      filterGte: notSupported
    },
    popularity: noopImmediate,
    post_number: noopImmediate,
    remain_distance: immediate({
      filterLte(regions, remain, course, _2, extra) {
        const bounds = new Region(course.distance - remain, course.distance);
        return regions.rmap((r3) => r3.intersect(bounds));
      },
      filterGte(regions, remain, course, _2, extra) {
        const bounds = new Region(0, course.distance - remain);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    rotation: valueFilter((course, _2, extra) => course.turn),
    running_style: immediate({
      filterEq(regions, strategy, _2, horse, extra) {
        StrategyHelpers.assertIsStrategy(strategy);
        if (StrategyHelpers.strategyMatches(horse.strategy, strategy)) {
          return regions;
        } else {
          return new RegionList();
        }
      }
    }),
    running_style_count_same: noopImmediate,
    running_style_count_same_rate: noopImmediate,
    running_style_equal_popularity_one: noopImmediate,
    same_skill_horse_count: noopImmediate,
    season: valueFilter((_0, _1, extra) => extra.season),
    slope: immediate({
      filterEq(regions, slopeType, course, _2, extra) {
        assert3(slopeType == 0 || slopeType == 1 || slopeType == 2, "slopeType");
        assert3(CourseHelpers.isSortedByStart(course.slopes), "course slopes must be sorted by slope start");
        let lastEnd = 0;
        const slopes = course.slopes.filter((s3) => slopeType != 2 && s3.slope > 0 || slopeType != 1 && s3.slope < 0);
        const slopeR = slopeType == 0 ? slopes.map((s3) => {
          const r3 = new Region(lastEnd, s3.start);
          lastEnd = s3.start + s3.length;
          return r3;
        }) : slopes.map((s3) => new Region(s3.start, s3.start + s3.length));
        if (slopeType == 0 && lastEnd != course.distance) {
          slopeR.push(new Region(lastEnd, course.distance));
        }
        return regions.rmap((r3) => slopeR.map((s3) => r3.intersect(s3)));
      }
    }),
    straight_front_type: immediate({
      filterEq(regions, frontType, course, _2, extra) {
        assert3(frontType == 1 || frontType == 2, "frontType");
        const straights = course.straights.filter((s3) => s3.frontType == frontType);
        return regions.rmap((r3) => straights.map((s3) => r3.intersect(s3)));
      }
    }),
    straight_random: {
      samplePolicy: StraightRandomPolicy,
      filterEq(regions, one2, course, _2, extra) {
        assert3(one2 == 1, "must be straight_random==1");
        return regions.rmap((r3) => course.straights.map((s3) => r3.intersect(s3)));
      },
      filterNeq: notSupported,
      filterLt: notSupported,
      filterLte: notSupported,
      filterGt: notSupported,
      filterGte: notSupported
    },
    temptation_count: noopImmediate,
    time: valueFilter((_0, _1, extra) => extra.time),
    track_id: valueFilter((course, _2, extra) => course.raceTrackId),
    up_slope_random: random({
      filterEq(regions, one2, course, _2, extra) {
        assert3(one2 == 1, "must be up_slope_random==1");
        const slopes = course.slopes.filter((s3) => s3.slope > 0).map((s3) => new Region(s3.start, s3.start + s3.length));
        return regions.rmap((r3) => slopes.map((s3) => r3.intersect(s3)));
      }
    }),
    visiblehorse: noopImmediate,
    weather: valueFilter((_0, _1, extra) => extra.weather)
  });

  // ../../skilltool/ConditionParser.ts
  var ParseError = class extends Error {
    constructor(msg) {
      super(msg);
    }
  };
  function isId(c3) {
    return "a".charCodeAt(0) <= c3 && c3 <= "z".charCodeAt(0) || "0".charCodeAt(0) <= c3 && c3 <= "9".charCodeAt(0) || c3 == "_".charCodeAt(0);
  }
  var IntValue = class {
    constructor(value) {
      this.lbp = 0;
      this.value = value;
    }
    led(state, left2) {
      throw new ParseError("unexpected integer literal");
    }
    nud(state) {
      return { type: 0 /* Int */, value: this.value };
    }
  };
  function getParser(conditions = Conditions, operators = {
    and: AndOperator,
    // this is really stupid
    or: OrOperator,
    eq: EqOperator,
    neq: NeqOperator,
    lt: LtOperator,
    lte: LteOperator,
    gt: GtOperator,
    gte: GteOperator
  }) {
    const Eof = Object.freeze({
      lbp: 0,
      led: (state, left2) => {
        throw new ParseError("unexpected eof");
      },
      nud: (state) => {
        throw new ParseError("unexpected eof");
      }
    });
    class Identifier {
      constructor(value) {
        this.lbp = 0;
        this.value = value;
      }
      led(state, left2) {
        throw new ParseError("unexpected identifier");
      }
      nud(state) {
        return { type: 1 /* Cond */, cond: conditions[this.value] };
      }
    }
    class CmpOp {
      constructor(lbp, opclass) {
        this.lbp = lbp;
        this.opclass = opclass;
      }
      led(state, left2) {
        if (left2.type != 1 /* Cond */)
          throw new ParseError("expected condition on left hand side of comparison");
        const right2 = expression(state, this.lbp);
        if (right2.type != 0 /* Int */)
          throw new ParseError("expected number on right hand side of comparison");
        return { type: 2 /* Op */, op: new this.opclass(left2.cond, right2.value) };
      }
      nud(state) {
        throw new ParseError("expected expression");
      }
    }
    class LogicalOp {
      constructor(lbp, opclass) {
        this.lbp = lbp;
        this.opclass = opclass;
      }
      led(state, left2) {
        if (left2.type != 2 /* Op */)
          throw new ParseError("expected comparison on left hand side of operator");
        const right2 = expression(state, this.lbp);
        if (right2.type != 2 /* Op */)
          throw new ParseError("expected comparison on right hand side of operator");
        return { type: 2 /* Op */, op: new this.opclass(left2.op, right2.op) };
      }
      nud(state) {
        throw new ParseError("expected expression");
      }
    }
    const OperatorEq = Object.freeze(new CmpOp(30, operators.eq));
    const OperatorNeq = Object.freeze(new CmpOp(30, operators.neq));
    const OperatorLt = Object.freeze(new CmpOp(30, operators.lt));
    const OperatorLte = Object.freeze(new CmpOp(30, operators.lte));
    const OperatorGt = Object.freeze(new CmpOp(30, operators.gt));
    const OperatorGte = Object.freeze(new CmpOp(30, operators.gte));
    const OperatorAnd = Object.freeze(new LogicalOp(20, operators.and));
    const OperatorOr = Object.freeze(new LogicalOp(10, operators.or));
    function* tokenize(s3) {
      var i4 = 0;
      while (i4 < s3.length) {
        var c3 = s3.charCodeAt(i4);
        if ("0".charCodeAt(0) <= c3 && c3 <= "9".charCodeAt(0)) {
          var n3 = 0;
          while ("0".charCodeAt(0) <= c3 && c3 <= "9".charCodeAt(0)) {
            n3 *= 10;
            n3 += c3 - "0".charCodeAt(0);
            c3 = s3.charCodeAt(++i4);
          }
          yield new IntValue(n3);
        } else if (isId(c3)) {
          var idstart = i4;
          while (isId(c3)) {
            c3 = s3.charCodeAt(++i4);
          }
          yield new Identifier(s3.slice(idstart, i4));
        } else
          switch (s3[i4]) {
            case "=":
              if (s3[++i4] != "=")
                throw new ParseError("expected =");
              ++i4;
              yield OperatorEq;
              break;
            case "!":
              if (s3[++i4] != "=")
                throw new ParseError("expected =");
              ++i4;
              yield OperatorNeq;
              break;
            case "<":
              if (s3[++i4] == "=") {
                ++i4;
                yield OperatorLte;
              } else {
                yield OperatorLt;
              }
              break;
            case ">":
              if (s3[++i4] == "=") {
                ++i4;
                yield OperatorGte;
              } else {
                yield OperatorGt;
              }
              break;
            case "@":
              yield OperatorOr;
              ++i4;
              break;
            case "&":
              yield OperatorAnd;
              ++i4;
              break;
            default:
              throw new ParseError("invalid character");
          }
      }
      return Eof;
    }
    function parseAny(tokens) {
      const state = { current: Eof, next: tokens.next().value, tokens };
      return expression(state, 0);
    }
    function parse(tokens) {
      const node = parseAny(tokens);
      if (node.type != 2 /* Op */) {
        throw new ParseError("expected comparison or operator");
      }
      return node.op;
    }
    function expression(state, rbp) {
      state.current = state.next;
      state.next = state.tokens.next().value;
      var left2 = state.current.nud(state);
      while (rbp < state.next.lbp) {
        state.current = state.next;
        state.next = state.tokens.next().value;
        left2 = state.current.led(state, left2);
      }
      return left2;
    }
    return { tokenize, parse, parseAny };
  }

  // ../../skilltool/RaceSolver.ts
  var assert4 = require_assert().strict;
  var Speed;
  ((Speed2) => {
    Speed2.StrategyPhaseCoefficient = Object.freeze([
      [],
      // strategies start numbered at 1
      [1, 0.98, 0.962],
      [0.978, 0.991, 0.975],
      [0.938, 0.998, 0.994],
      [0.931, 1, 1],
      [1.063, 0.962, 0.95]
    ].map((a4) => Object.freeze(a4)));
    Speed2.DistanceProficiencyModifier = Object.freeze([1.05, 1, 0.9, 0.8, 0.6, 0.4, 0.2, 0.1]);
  })(Speed || (Speed = {}));
  function baseSpeed(course) {
    return 20 - (course.distance - 2e3) / 1e3;
  }
  function baseTargetSpeed(horse, course, phase) {
    return baseSpeed(course) * Speed.StrategyPhaseCoefficient[horse.strategy][phase] + +(phase == 2) * Math.sqrt(500 * horse.speed) * Speed.DistanceProficiencyModifier[horse.distanceAptitude] * 2e-3;
  }
  function lastSpurtSpeed(horse, course) {
    return (baseTargetSpeed(horse, course, 2) + 0.01 * baseSpeed(course)) * 1.05 + Math.sqrt(500 * horse.speed) * Speed.DistanceProficiencyModifier[horse.distanceAptitude] * 2e-3 + Math.pow(450 * horse.guts, 0.597) * 1e-4;
  }
  var Acceleration;
  ((Acceleration2) => {
    Acceleration2.StrategyPhaseCoefficient = Object.freeze([
      [],
      [1, 1, 0.996],
      [0.985, 1, 0.996],
      [0.975, 1, 1],
      [0.945, 1, 0.997],
      [1.17, 0.94, 0.956]
    ].map((a4) => Object.freeze(a4)));
    Acceleration2.GroundTypeProficiencyModifier = Object.freeze([1.05, 1, 0.9, 0.8, 0.7, 0.5, 0.3, 0.1]);
    Acceleration2.DistanceProficiencyModifier = Object.freeze([1, 1, 1, 1, 1, 0.6, 0.5, 0.4]);
  })(Acceleration || (Acceleration = {}));
  var BaseAccel = 6e-4;
  var UphillBaseAccel = 4e-4;
  function baseAccel(baseAccel2, horse, phase) {
    return baseAccel2 * Math.sqrt(500 * horse.power) * Acceleration.StrategyPhaseCoefficient[horse.strategy][phase] * Acceleration.GroundTypeProficiencyModifier[horse.surfaceAptitude] * Acceleration.DistanceProficiencyModifier[horse.distanceAptitude];
  }
  var PhaseDeceleration = [-1.2, -0.8, -1];
  var PositionKeep;
  ((PositionKeep2) => {
    PositionKeep2.BaseMinimumThreshold = Object.freeze([0, 0, 3, 6.5, 7.5]);
    PositionKeep2.BaseMaximumThreshold = Object.freeze([0, 0, 5, 7, 8]);
    function courseFactor(distance) {
      return 8e-4 * (distance - 1e3) + 1;
    }
    PositionKeep2.courseFactor = courseFactor;
    function minThreshold(strategy, distance) {
      return PositionKeep2.BaseMinimumThreshold[strategy] * (strategy == 2 /* Senkou */ ? 1 : courseFactor(distance));
    }
    PositionKeep2.minThreshold = minThreshold;
    function maxThreshold(strategy, distance) {
      return PositionKeep2.BaseMaximumThreshold[strategy] * courseFactor(distance);
    }
    PositionKeep2.maxThreshold = maxThreshold;
  })(PositionKeep || (PositionKeep = {}));
  var Timer2 = class {
    constructor(t3) {
      this.t = t3;
    }
  };
  var CompensatedAccumulator = class {
    constructor(acc, err = 0) {
      this.acc = acc;
      this.err = err;
    }
    add(n3) {
      const t3 = this.acc + n3;
      if (Math.abs(this.acc) >= Math.abs(n3)) {
        this.err += this.acc - t3 + n3;
      } else {
        this.err += n3 - t3 + this.acc;
      }
      this.acc = t3;
    }
  };
  var SkillType = /* @__PURE__ */ ((SkillType2) => {
    SkillType2[SkillType2["SpeedUp"] = 1] = "SpeedUp";
    SkillType2[SkillType2["StaminaUp"] = 2] = "StaminaUp";
    SkillType2[SkillType2["PowerUp"] = 3] = "PowerUp";
    SkillType2[SkillType2["GutsUp"] = 4] = "GutsUp";
    SkillType2[SkillType2["WisdomUp"] = 5] = "WisdomUp";
    SkillType2[SkillType2["Recovery"] = 9] = "Recovery";
    SkillType2[SkillType2["MultiplyStartDelay"] = 10] = "MultiplyStartDelay";
    SkillType2[SkillType2["SetStartDelay"] = 14] = "SetStartDelay";
    SkillType2[SkillType2["CurrentSpeed"] = 21] = "CurrentSpeed";
    SkillType2[SkillType2["CurrentSpeedWithNaturalDeceleration"] = 22] = "CurrentSpeedWithNaturalDeceleration";
    SkillType2[SkillType2["TargetSpeed"] = 27] = "TargetSpeed";
    SkillType2[SkillType2["Accel"] = 31] = "Accel";
    SkillType2[SkillType2["ActivateRandomGold"] = 37] = "ActivateRandomGold";
    SkillType2[SkillType2["ExtendEvolvedDuration"] = 42] = "ExtendEvolvedDuration";
    return SkillType2;
  })(SkillType || {});
  function noop3(x3) {
  }
  var RaceSolver = class {
    constructor(params) {
      this.horse = Object.assign({}, params.horse);
      this.course = params.course;
      this.hp = params.hp;
      this.pacer = params.pacer || null;
      this.rng = params.rng;
      this.pendingSkills = params.skills.slice();
      this.pendingRemoval = /* @__PURE__ */ new Set();
      this.usedSkills = /* @__PURE__ */ new Set();
      this.gorosiRng = new Rule30CARng(this.rng.int32());
      this.paceEffectRng = new Rule30CARng(this.rng.int32());
      this.timers = [];
      this.accumulatetime = this.getNewTimer();
      this.phase = 0;
      this.nextPhaseTransition = CourseHelpers.phaseStart(this.course.distance, 1);
      this.activeTargetSpeedSkills = [];
      this.activeCurrentSpeedSkills = [];
      this.activeAccelSkills = [];
      this.activateCount = [0, 0, 0];
      this.activateCountHeal = 0;
      this.onSkillActivate = params.onSkillActivate || noop3;
      this.onSkillDeactivate = params.onSkillDeactivate || noop3;
      this.sectionLength = this.course.distance / 24;
      this.isPaceDown = false;
      this.posKeepMinThreshold = PositionKeep.minThreshold(this.horse.strategy, this.course.distance);
      this.posKeepMaxThreshold = PositionKeep.maxThreshold(this.horse.strategy, this.course.distance);
      this.posKeepCooldown = this.getNewTimer();
      this.posKeepEnd = this.sectionLength * 5;
      this.posKeepSpeedCoef = 1;
      if (StrategyHelpers.strategyMatches(this.horse.strategy, 1 /* Nige */) || this.pacer == null) {
        this.updatePositionKeep = noop3;
      } else {
        this.updatePositionKeep = this.updatePositionKeepNonNige;
      }
      this.modifiers = {
        targetSpeed: new CompensatedAccumulator(0),
        currentSpeed: new CompensatedAccumulator(0),
        accel: new CompensatedAccumulator(0),
        oneFrameAccel: 0,
        specialSkillDurationScaling: 1
      };
      this.initHills();
      this.startDelay = 0.1 * this.rng.random();
      if (this.pacer) {
        this.pacer.startDelay = 0;
      }
      this.pos = 0;
      this.accel = 0;
      this.currentSpeed = 3;
      this.targetSpeed = 0.85 * baseSpeed(this.course);
      this.processSkillActivations();
      this.minSpeed = 0.85 * baseSpeed(this.course) + Math.sqrt(200 * this.horse.guts) * 1e-3;
      this.startDash = true;
      this.modifiers.accel.add(24);
      this.baseTargetSpeed = [0, 1, 2].map((phase) => baseTargetSpeed(this.horse, this.course, phase));
      this.lastSpurtSpeed = lastSpurtSpeed(this.horse, this.course);
      this.lastSpurtTransition = -1;
      this.baseAccel = [0, 1, 2, 0, 1, 2].map((phase, i4) => baseAccel(i4 > 2 ? UphillBaseAccel : BaseAccel, this.horse, phase));
    }
    initHills() {
      assert4(CourseHelpers.isSortedByStart(this.course.slopes), "slopes must be sorted by start location");
      this.nHills = this.course.slopes.length;
      this.hillStart = this.course.slopes.map((s3) => s3.start).reverse();
      this.hillEnd = this.course.slopes.map((s3) => s3.start + s3.length).reverse();
      this.hillIdx = -1;
      if (this.hillStart.length > 0 && this.hillStart[this.hillStart.length - 1] == 0) {
        if (this.course.slopes[0].slope > 0) {
          this.hillIdx = 0;
        } else {
          this.hillEnd.pop();
        }
        this.hillStart.pop();
      }
    }
    getNewTimer(t3 = 0) {
      const tm = new Timer2(t3);
      this.timers.push(tm);
      return tm;
    }
    getMaxSpeed() {
      if (this.startDash) {
        return Math.min(this.targetSpeed, 0.85 * baseSpeed(this.course));
      } else if (this.currentSpeed + this.modifiers.oneFrameAccel > this.targetSpeed) {
        return 9999;
      } else {
        return this.targetSpeed;
      }
    }
    step(dt) {
      if (this.accumulatetime.t < this.startDelay) {
        const partialFrame = this.startDelay - this.accumulatetime.t;
        if (partialFrame < dt) {
          this.timers.forEach((tm) => tm.t += partialFrame);
          dt -= partialFrame;
        } else {
          this.timers.forEach((tm) => tm.t += dt);
          return;
        }
      }
      if (this.pos < this.posKeepEnd && this.pacer != null) {
        this.pacer.step(dt);
      }
      const halfv = Math.min(this.currentSpeed + 0.5 * dt * this.accel, this.getMaxSpeed());
      const displacement = halfv + this.modifiers.currentSpeed.acc + this.modifiers.currentSpeed.err;
      this.pos += displacement * dt;
      this.hp.tick(this, dt);
      this.timers.forEach((tm) => tm.t += dt);
      this.updateHills();
      this.updatePhase();
      this.processSkillActivations();
      this.updatePositionKeep();
      this.updateLastSpurtState();
      this.updateTargetSpeed();
      this.applyForces();
      this.currentSpeed = Math.min(halfv + 0.5 * dt * this.accel + this.modifiers.oneFrameAccel, this.getMaxSpeed());
      if (!this.startDash && this.currentSpeed < this.minSpeed) {
        this.currentSpeed = this.minSpeed;
      } else if (this.startDash && this.currentSpeed >= 0.85 * baseSpeed(this.course)) {
        this.startDash = false;
        this.modifiers.accel.add(-24);
      }
      this.modifiers.oneFrameAccel = 0;
    }
    updatePositionKeepNonNige() {
      if (this.pos >= this.posKeepEnd) {
        this.isPaceDown = false;
        this.posKeepSpeedCoef = 1;
        this.updatePositionKeep = noop3;
      } else if (this.isPaceDown) {
        if (this.pacer.pos - this.pos > this.posKeepEffectExitDistance || this.pos - this.posKeepEffectStart > this.sectionLength || this.activeTargetSpeedSkills.length > 0 || this.activeCurrentSpeedSkills.length > 0) {
          this.isPaceDown = false;
          this.posKeepCooldown.t = -3;
          this.posKeepSpeedCoef = 1;
        }
      } else if (this.pacer.pos - this.pos < this.posKeepMinThreshold && this.activeTargetSpeedSkills.length == 0 && this.activeCurrentSpeedSkills.length == 0 && this.posKeepCooldown.t >= 0) {
        this.isPaceDown = true;
        this.posKeepEffectStart = this.pos;
        const min4 = this.posKeepMinThreshold;
        const max5 = this.phase == 1 ? min4 + 0.5 * (this.posKeepMaxThreshold - min4) : this.posKeepMaxThreshold;
        this.posKeepEffectExitDistance = min4 + this.paceEffectRng.random() * (max5 - min4);
        this.posKeepSpeedCoef = this.phase == 1 ? 0.945 : 0.915;
      }
    }
    updateLastSpurtState() {
      if (this.isLastSpurt || this.phase < 2)
        return;
      if (this.lastSpurtTransition == -1) {
        const v3 = this.hp.getLastSpurtPair(this, this.lastSpurtSpeed, this.baseTargetSpeed[2]);
        this.lastSpurtTransition = v3[0];
        this.lastSpurtSpeed = v3[1];
      }
      if (this.pos >= this.lastSpurtTransition) {
        this.isLastSpurt = true;
      }
    }
    updateTargetSpeed() {
      if (!this.hp.hasRemainingHp()) {
        this.targetSpeed = this.minSpeed;
      } else if (this.isLastSpurt) {
        this.targetSpeed = this.lastSpurtSpeed;
      } else {
        this.targetSpeed = this.baseTargetSpeed[this.phase] * this.posKeepSpeedCoef;
      }
      this.targetSpeed += this.modifiers.targetSpeed.acc + this.modifiers.targetSpeed.err;
      if (this.hillIdx != -1) {
        this.targetSpeed -= this.course.slopes[this.hillIdx].slope / 1e4 * 200 / this.horse.power;
        this.targetSpeed = Math.max(this.targetSpeed, this.minSpeed);
      }
    }
    applyForces() {
      if (!this.hp.hasRemainingHp()) {
        this.accel = -1.2;
        return;
      }
      if (this.currentSpeed > this.targetSpeed) {
        this.accel = this.isPaceDown ? -0.5 : PhaseDeceleration[this.phase];
        return;
      }
      this.accel = this.baseAccel[+(this.hillIdx != -1) * 3 + this.phase];
      this.accel += this.modifiers.accel.acc + this.modifiers.accel.err;
    }
    updateHills() {
      if (this.hillIdx == -1 && this.hillStart.length > 0 && this.pos >= this.hillStart[this.hillStart.length - 1]) {
        if (this.course.slopes[this.nHills - this.hillStart.length].slope > 0) {
          this.hillIdx = this.nHills - this.hillStart.length;
        } else {
          this.hillEnd.pop();
        }
        this.hillStart.pop();
      } else if (this.hillIdx != -1 && this.hillEnd.length > 0 && this.pos > this.hillEnd[this.hillEnd.length - 1]) {
        this.hillIdx = -1;
        this.hillEnd.pop();
      }
    }
    updatePhase() {
      if (this.pos >= this.nextPhaseTransition && this.phase < 2) {
        ++this.phase;
        this.nextPhaseTransition = CourseHelpers.phaseStart(this.course.distance, this.phase + 1);
      }
    }
    processSkillActivations() {
      for (let i4 = this.activeTargetSpeedSkills.length; --i4 >= 0; ) {
        const s3 = this.activeTargetSpeedSkills[i4];
        if (s3.durationTimer.t >= 0) {
          this.activeTargetSpeedSkills.splice(i4, 1);
          this.modifiers.targetSpeed.add(-s3.modifier);
          this.onSkillDeactivate(this, s3.skillId);
        }
      }
      for (let i4 = this.activeCurrentSpeedSkills.length; --i4 >= 0; ) {
        const s3 = this.activeCurrentSpeedSkills[i4];
        if (s3.durationTimer.t >= 0) {
          this.activeCurrentSpeedSkills.splice(i4, 1);
          this.modifiers.currentSpeed.add(-s3.modifier);
          if (s3.naturalDeceleration) {
            this.modifiers.oneFrameAccel += s3.modifier;
          }
          this.onSkillDeactivate(this, s3.skillId);
        }
      }
      for (let i4 = this.activeAccelSkills.length; --i4 >= 0; ) {
        const s3 = this.activeAccelSkills[i4];
        if (s3.durationTimer.t >= 0) {
          this.activeAccelSkills.splice(i4, 1);
          this.modifiers.accel.add(-s3.modifier);
          this.onSkillDeactivate(this, s3.skillId);
        }
      }
      for (let i4 = this.pendingSkills.length; --i4 >= 0; ) {
        const s3 = this.pendingSkills[i4];
        if (this.pos >= s3.trigger.end || this.pendingRemoval.has(s3.skillId)) {
          this.pendingSkills.splice(i4, 1);
          this.pendingRemoval.delete(s3.skillId);
        } else if (this.pos >= s3.trigger.start && s3.extraCondition(this)) {
          this.activateSkill(s3);
          this.pendingSkills.splice(i4, 1);
        }
      }
    }
    activateSkill(s3) {
      s3.effects.sort((a4, b3) => +(a4.type == 42) - +(b3.type == 42)).forEach((ef) => {
        const scaledDuration = ef.baseDuration * (this.course.distance / 1e3) * (s3.rarity == 6 /* Evolution */ ? this.modifiers.specialSkillDurationScaling : 1);
        switch (ef.type) {
          case 1 /* SpeedUp */:
            this.horse.speed = Math.max(this.horse.speed + ef.modifier, 1);
            break;
          case 2 /* StaminaUp */:
            this.horse.stamina = Math.max(this.horse.stamina + ef.modifier, 1);
            this.horse.rawStamina = Math.max(this.horse.rawStamina + ef.modifier, 1);
            break;
          case 3 /* PowerUp */:
            this.horse.power = Math.max(this.horse.power + ef.modifier, 1);
            break;
          case 4 /* GutsUp */:
            this.horse.guts = Math.max(this.horse.guts + ef.modifier, 1);
            break;
          case 5 /* WisdomUp */:
            this.horse.wisdom = Math.max(this.horse.wisdom + ef.modifier, 1);
            break;
          case 10 /* MultiplyStartDelay */:
            this.startDelay *= ef.modifier;
            break;
          case 14 /* SetStartDelay */:
            this.startDelay = ef.modifier;
            break;
          case 27 /* TargetSpeed */:
            this.modifiers.targetSpeed.add(ef.modifier);
            this.activeTargetSpeedSkills.push({ skillId: s3.skillId, durationTimer: this.getNewTimer(-scaledDuration), modifier: ef.modifier });
            break;
          case 31 /* Accel */:
            this.modifiers.accel.add(ef.modifier);
            this.activeAccelSkills.push({ skillId: s3.skillId, durationTimer: this.getNewTimer(-scaledDuration), modifier: ef.modifier });
            break;
          case 21 /* CurrentSpeed */:
          case 22 /* CurrentSpeedWithNaturalDeceleration */:
            this.modifiers.currentSpeed.add(ef.modifier);
            this.activeCurrentSpeedSkills.push({
              skillId: s3.skillId,
              durationTimer: this.getNewTimer(-scaledDuration),
              modifier: ef.modifier,
              naturalDeceleration: ef.type == 22 /* CurrentSpeedWithNaturalDeceleration */
            });
            break;
          case 9 /* Recovery */:
            ++this.activateCountHeal;
            this.hp.recover(ef.modifier);
            if (this.phase >= 2 && !this.isLastSpurt) {
              this.updateLastSpurtState();
            }
            break;
          case 37 /* ActivateRandomGold */:
            this.doActivateRandomGold(ef.modifier);
            break;
          case 42 /* ExtendEvolvedDuration */:
            this.modifiers.specialSkillDurationScaling = ef.modifier;
            break;
        }
      });
      ++this.activateCount[this.phase];
      this.usedSkills.add(s3.skillId);
      this.onSkillActivate(this, s3.skillId);
    }
    doActivateRandomGold(ngolds) {
      const goldIndices = this.pendingSkills.reduce((acc, skill, i4) => {
        if ((skill.rarity == 2 /* Gold */ || skill.rarity == 6 /* Evolution */) && skill.effects.every((ef) => ef.type > 5 /* WisdomUp */))
          acc.push(i4);
        return acc;
      }, []);
      for (let i4 = goldIndices.length; --i4 >= 0; ) {
        const j3 = this.gorosiRng.uniform(i4 + 1);
        [goldIndices[i4], goldIndices[j3]] = [goldIndices[j3], goldIndices[i4]];
      }
      for (let i4 = 0; i4 < Math.min(ngolds, goldIndices.length); ++i4) {
        const s3 = this.pendingSkills[goldIndices[i4]];
        this.activateSkill(s3);
        this.pendingRemoval.add(s3.skillId);
      }
    }
  };

  // ../../skilltool/HpPolicy.ts
  var NoopHpPolicy = {
    tick(_0, _1) {
    },
    hasRemainingHp() {
      return true;
    },
    hpRatioRemaining() {
      return 1;
    },
    recover(_2) {
    },
    getLastSpurtPair(_0, maxSpeed, _1) {
      return [-1, maxSpeed];
    }
  };
  var HpStrategyCoefficient = Object.freeze([0, 0.95, 0.89, 1, 0.995, 0.86]);
  var HpConsumptionGroundModifier = Object.freeze([
    [],
    [0, 1, 1, 1.02, 1.02],
    [0, 1, 1, 1.01, 1.02]
  ].map((o4) => Object.freeze(o4)));
  var GameHpPolicy = class {
    constructor(horse, course, ground, seed) {
      this.distance = course.distance;
      this.baseSpeed = 20 - (course.distance - 2e3) / 1e3;
      this.maxHp = 0.8 * HpStrategyCoefficient[horse.strategy] * horse.stamina + course.distance;
      this.hp = this.maxHp;
      this.groundModifier = HpConsumptionGroundModifier[course.surface][ground];
      this.gutsModifier = 1 + 200 / Math.sqrt(600 * horse.guts);
      this.subparAcceptChance = Math.round((15 + 0.05 * horse.wisdom) * 1e3);
      this.rng = new Rule30CARng(seed);
    }
    getStatusModifier(state) {
      let modifier = 1;
      if (state.isPaceDown) {
        modifier *= 0.6;
      }
      return modifier;
    }
    hpPerSecond(state, velocity) {
      const gutsModifier = state.phase >= 2 ? this.gutsModifier : 1;
      return 20 * Math.pow(velocity - this.baseSpeed + 12, 2) / 144 * this.getStatusModifier(state) * this.groundModifier * gutsModifier;
    }
    tick(state, dt) {
      this.hp -= this.hpPerSecond(state, state.currentSpeed) * dt;
    }
    hasRemainingHp() {
      return this.hp > 0;
    }
    hpRatioRemaining() {
      return Math.max(0, this.hp / this.maxHp);
    }
    recover(modifier) {
      this.hp = Math.min(this.maxHp, this.hp + this.maxHp * modifier);
    }
    getLastSpurtPair(state, maxSpeed, baseTargetSpeed2) {
      const maxDist = this.distance - CourseHelpers.phaseStart(this.distance, 2);
      const s3 = (maxDist - 60) / maxSpeed;
      const lastleg = { phase: 2, isPaceDown: false };
      if (this.hp >= this.hpPerSecond(lastleg, maxSpeed) * s3) {
        return [-1, maxSpeed];
      }
      const candidates = [];
      const remainDistance = this.distance - 60 - state.pos;
      const statusModifier = this.getStatusModifier(lastleg);
      for (let speed = maxSpeed - 0.1; speed >= baseTargetSpeed2; speed -= 0.1) {
        const spurtDuration = Math.min(
          remainDistance / speed,
          Math.max(
            0,
            (baseTargetSpeed2 * this.hp - this.hpPerSecond(lastleg, baseTargetSpeed2) * remainDistance) / (baseTargetSpeed2 * this.hpPerSecond(lastleg, speed) - this.hpPerSecond(lastleg, baseTargetSpeed2) * speed)
          )
        );
        const spurtDistance = spurtDuration * speed;
        candidates.push([this.distance - spurtDistance, speed]);
      }
      candidates.sort((a4, b3) => (a4[0] - state.pos) / baseTargetSpeed2 + (this.distance - a4[0]) / a4[1] - ((b3[0] - state.pos) / baseTargetSpeed2 + (this.distance - b3[0]) / b3[1]));
      for (let i4 = 0; i4 < candidates.length; ++i4) {
        if (this.rng.uniform(1e5) <= this.subparAcceptChance) {
          return candidates[i4];
        }
      }
      return candidates[candidates.length - 1];
    }
  };

  // skill_data.json
  var skill_data_default = { "100011": { alternatives: [{ baseDuration: 5e4, condition: "phase>=2&order>=2&order_rate<=50&change_order_onetime<0", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 5 }, "100021": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner==0&order==1&bashin_diff_behind>=1", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 5 }, "100031": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner==0&order<=3&bashin_diff_infront<=1&is_overtake==1", effects: [{ modifier: 4500, type: 27 }], precondition: "" }], rarity: 5 }, "100041": { alternatives: [{ baseDuration: 4e4, condition: "is_finalcorner==1&order<=5&order_rate<=50", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 5 }, "100061": { alternatives: [{ baseDuration: 5e4, condition: "order>=2&order<=5&order_rate<=50&remain_distance<=201&remain_distance>=199", effects: [{ modifier: 4500, type: 27 }], precondition: "" }], rarity: 5 }, "100071": { alternatives: [{ baseDuration: 6e4, condition: "distance_rate>=50&distance_rate<=60&order_rate>50", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 4 }, "100081": { alternatives: [{ baseDuration: 5e4, condition: "order>=3&order_rate<=50&remain_distance<=200&bashin_diff_infront<=1@order>=3&order_rate<=50&remain_distance<=200&bashin_diff_behind<=1", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 4 }, "100091": { alternatives: [{ baseDuration: 5e4, condition: "distance_rate>=50&order==1&bashin_diff_behind<=1", effects: [{ modifier: 2500, type: 27 }, { modifier: 3e3, type: 31 }], precondition: "" }], rarity: 4 }, "100101": { alternatives: [{ baseDuration: 4e4, condition: "is_finalcorner==1&corner!=0&order>=3&order_rate<=50", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 5 }, "100111": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner==0&change_order_onetime<0&order>=4", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 4 }, "100131": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner!=0&distance_diff_rate<=30", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 5 }, "100141": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner==0&hp_per>=30&order<=2", effects: [{ modifier: 2500, type: 27 }, { modifier: 3e3, type: 31 }], precondition: "" }], rarity: 4 }, "100151": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner!=0&bashin_diff_infront<=1&bashin_diff_behind<=1&blocked_side_continuetime>=2&order<=4", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 5 }, "100171": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&change_order_up_end_after>=3&corner==0", effects: [{ modifier: 4500, type: 27 }], precondition: "" }], rarity: 5 }, "100181": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner!=0&order>=4&change_order_onetime<0", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 4 }, "100231": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner!=0&change_order_onetime<0&order<=4", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 5 }, "100241": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner!=0&blocked_side_continuetime>=2&order<=3", effects: [{ modifier: 2500, type: 27 }, { modifier: 3e3, type: 31 }], precondition: "" }], rarity: 4 }, "100261": { alternatives: [{ baseDuration: 5e4, condition: "is_badstart==0&temptation_count==0&order<=3&is_finalcorner==1&corner==0", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 5 }, "100271": { alternatives: [{ baseDuration: 4e4, condition: "phase>=2&corner!=0&order_rate>=65&order_rate<=70", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 4 }, "100301": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner==0&order<=4&change_order_onetime<0", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 5 }, "100321": { alternatives: [{ baseDuration: 0, condition: "distance_rate>=50&corner!=0&order>=3&order_rate<=40", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 4 }, "100351": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner==0&order<=5&blocked_side_continuetime>=2", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 4 }, "100411": { alternatives: [{ baseDuration: 5e4, condition: "distance_rate>=50&order<=3&blocked_side_continuetime>=2", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 4 }, "100451": { alternatives: [{ baseDuration: 0, condition: "phase_random==1&order>=2&order_rate<=40", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 4 }, "100521": { alternatives: [{ baseDuration: 0, condition: "is_finalcorner==1&corner!=0&order_rate>50&near_count>=1", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 4 }, "100561": { alternatives: [{ baseDuration: 5e4, condition: "phase>=2&order>=3&blocked_front==1", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 4 }, "100601": { alternatives: [{ baseDuration: 5e4, condition: "phase>=2&order==3&bashin_diff_behind<=1", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 4 }, "100611": { alternatives: [{ baseDuration: 5e4, condition: "temptation_count==0&remain_distance<=201&remain_distance>=199&order>=5&order_rate<=60", effects: [{ modifier: 4500, type: 27 }], precondition: "" }], rarity: 4 }, "10071": { alternatives: [{ baseDuration: 6e4, condition: "distance_rate>=50&distance_rate<=60&order_rate>50", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 3 }, "10081": { alternatives: [{ baseDuration: 5e4, condition: "order>=3&order_rate<=50&remain_distance<=200&bashin_diff_infront<=1@order>=3&order_rate<=50&remain_distance<=200&bashin_diff_behind<=1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 3 }, "10091": { alternatives: [{ baseDuration: 5e4, condition: "distance_rate>=50&order==1&bashin_diff_behind<=1", effects: [{ modifier: 1500, type: 27 }, { modifier: 2e3, type: 31 }], precondition: "" }], rarity: 3 }, "10111": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner==0&change_order_onetime<0&order>=4", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 3 }, "10141": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner==0&hp_per>=30&order<=2", effects: [{ modifier: 1500, type: 27 }, { modifier: 2e3, type: 31 }], precondition: "" }], rarity: 3 }, "10181": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner!=0&order>=4&change_order_onetime<0", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 3 }, "10241": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner!=0&blocked_side_continuetime>=2&order<=3", effects: [{ modifier: 1500, type: 27 }, { modifier: 2e3, type: 31 }], precondition: "" }], rarity: 3 }, "10271": { alternatives: [{ baseDuration: 4e4, condition: "phase>=2&corner!=0&order_rate>=65&order_rate<=70", effects: [{ modifier: 3e3, type: 31 }], precondition: "" }], rarity: 3 }, "10321": { alternatives: [{ baseDuration: 0, condition: "distance_rate>=50&corner!=0&order>=3&order_rate<=40", effects: [{ modifier: 350, type: 9 }], precondition: "" }], rarity: 3 }, "10351": { alternatives: [{ baseDuration: 5e4, condition: "is_finalcorner==1&corner==0&order<=5&blocked_side_continuetime>=2", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 3 }, "10411": { alternatives: [{ baseDuration: 5e4, condition: "distance_rate>=50&order<=3&blocked_side_continuetime>=2", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 3 }, "10451": { alternatives: [{ baseDuration: 0, condition: "phase_random==1&order>=2&order_rate<=40", effects: [{ modifier: 350, type: 9 }], precondition: "" }], rarity: 3 }, "10521": { alternatives: [{ baseDuration: 0, condition: "is_finalcorner==1&corner!=0&order_rate>50&near_count>=1", effects: [{ modifier: 350, type: 9 }], precondition: "" }], rarity: 3 }, "10561": { alternatives: [{ baseDuration: 5e4, condition: "phase>=2&order>=3&blocked_front==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 3 }, "10601": { alternatives: [{ baseDuration: 5e4, condition: "phase>=2&order==3&bashin_diff_behind<=1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 3 }, "10611": { alternatives: [{ baseDuration: 5e4, condition: "temptation_count==0&remain_distance<=201&remain_distance>=199&order>=5&order_rate<=60", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 3 }, "200011": { alternatives: [{ baseDuration: -1, condition: "rotation==1", effects: [{ modifier: 6e5, type: 1 }], precondition: "" }], rarity: 1 }, "200012": { alternatives: [{ baseDuration: -1, condition: "rotation==1", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200013": { alternatives: [{ baseDuration: -1, condition: "rotation==1", effects: [{ modifier: -4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200021": { alternatives: [{ baseDuration: -1, condition: "rotation==2", effects: [{ modifier: 6e5, type: 1 }], precondition: "" }], rarity: 1 }, "200022": { alternatives: [{ baseDuration: -1, condition: "rotation==2", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200023": { alternatives: [{ baseDuration: -1, condition: "rotation==2", effects: [{ modifier: -4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200031": { alternatives: [{ baseDuration: -1, condition: "track_id==10006", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200032": { alternatives: [{ baseDuration: -1, condition: "track_id==10006", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200033": { alternatives: [{ baseDuration: -1, condition: "track_id==10006", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200041": { alternatives: [{ baseDuration: -1, condition: "track_id==10005", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200042": { alternatives: [{ baseDuration: -1, condition: "track_id==10005", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200043": { alternatives: [{ baseDuration: -1, condition: "track_id==10005", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200051": { alternatives: [{ baseDuration: -1, condition: "track_id==10009", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200052": { alternatives: [{ baseDuration: -1, condition: "track_id==10009", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200053": { alternatives: [{ baseDuration: -1, condition: "track_id==10009", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200061": { alternatives: [{ baseDuration: -1, condition: "track_id==10008", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200062": { alternatives: [{ baseDuration: -1, condition: "track_id==10008", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200063": { alternatives: [{ baseDuration: -1, condition: "track_id==10008", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200071": { alternatives: [{ baseDuration: -1, condition: "track_id==10007", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200072": { alternatives: [{ baseDuration: -1, condition: "track_id==10007", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200073": { alternatives: [{ baseDuration: -1, condition: "track_id==10007", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200081": { alternatives: [{ baseDuration: -1, condition: "track_id==10001", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200082": { alternatives: [{ baseDuration: -1, condition: "track_id==10001", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200083": { alternatives: [{ baseDuration: -1, condition: "track_id==10001", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200091": { alternatives: [{ baseDuration: -1, condition: "track_id==10002", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200092": { alternatives: [{ baseDuration: -1, condition: "track_id==10002", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200093": { alternatives: [{ baseDuration: -1, condition: "track_id==10002", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200101": { alternatives: [{ baseDuration: -1, condition: "track_id==10004", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200102": { alternatives: [{ baseDuration: -1, condition: "track_id==10004", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200103": { alternatives: [{ baseDuration: -1, condition: "track_id==10004", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200111": { alternatives: [{ baseDuration: -1, condition: "track_id==10003", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200112": { alternatives: [{ baseDuration: -1, condition: "track_id==10003", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200113": { alternatives: [{ baseDuration: -1, condition: "track_id==10003", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200121": { alternatives: [{ baseDuration: -1, condition: "track_id==10010", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200122": { alternatives: [{ baseDuration: -1, condition: "track_id==10010", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200123": { alternatives: [{ baseDuration: -1, condition: "track_id==10010", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200131": { alternatives: [{ baseDuration: -1, condition: "is_basis_distance==1", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200132": { alternatives: [{ baseDuration: -1, condition: "is_basis_distance==1", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200133": { alternatives: [{ baseDuration: -1, condition: "is_basis_distance==1", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200141": { alternatives: [{ baseDuration: -1, condition: "is_basis_distance==0", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200142": { alternatives: [{ baseDuration: -1, condition: "is_basis_distance==0", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200143": { alternatives: [{ baseDuration: -1, condition: "is_basis_distance==0", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200151": { alternatives: [{ baseDuration: -1, condition: "ground_condition==1", effects: [{ modifier: 6e5, type: 3 }], precondition: "" }], rarity: 1 }, "200152": { alternatives: [{ baseDuration: -1, condition: "ground_condition==1", effects: [{ modifier: 4e5, type: 3 }], precondition: "" }], rarity: 1 }, "200153": { alternatives: [{ baseDuration: -1, condition: "ground_condition==1", effects: [{ modifier: -4e5, type: 3 }], precondition: "" }], rarity: 1 }, "200161": { alternatives: [{ baseDuration: -1, condition: "ground_condition==2@ground_condition==3@ground_condition==4", effects: [{ modifier: 6e5, type: 3 }], precondition: "" }], rarity: 1 }, "200162": { alternatives: [{ baseDuration: -1, condition: "ground_condition==2@ground_condition==3@ground_condition==4", effects: [{ modifier: 4e5, type: 3 }], precondition: "" }], rarity: 1 }, "200163": { alternatives: [{ baseDuration: -1, condition: "ground_condition==2@ground_condition==3@ground_condition==4", effects: [{ modifier: -4e5, type: 3 }], precondition: "" }], rarity: 1 }, "200171": { alternatives: [{ baseDuration: -1, condition: "season==1@season==5", effects: [{ modifier: 6e5, type: 1 }], precondition: "" }], rarity: 1 }, "200172": { alternatives: [{ baseDuration: -1, condition: "season==1@season==5", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200173": { alternatives: [{ baseDuration: -1, condition: "season==1@season==5", effects: [{ modifier: -4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200181": { alternatives: [{ baseDuration: -1, condition: "season==2", effects: [{ modifier: 6e5, type: 1 }], precondition: "" }], rarity: 1 }, "200182": { alternatives: [{ baseDuration: -1, condition: "season==2", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200183": { alternatives: [{ baseDuration: -1, condition: "season==2", effects: [{ modifier: -4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200191": { alternatives: [{ baseDuration: -1, condition: "season==3", effects: [{ modifier: 6e5, type: 1 }], precondition: "" }], rarity: 1 }, "200192": { alternatives: [{ baseDuration: -1, condition: "season==3", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200193": { alternatives: [{ baseDuration: -1, condition: "season==3", effects: [{ modifier: -4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200201": { alternatives: [{ baseDuration: -1, condition: "season==4", effects: [{ modifier: 6e5, type: 1 }], precondition: "" }], rarity: 1 }, "200202": { alternatives: [{ baseDuration: -1, condition: "season==4", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200203": { alternatives: [{ baseDuration: -1, condition: "season==4", effects: [{ modifier: -4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200211": { alternatives: [{ baseDuration: -1, condition: "weather==1", effects: [{ modifier: 6e5, type: 4 }], precondition: "" }], rarity: 1 }, "200212": { alternatives: [{ baseDuration: -1, condition: "weather==1", effects: [{ modifier: 4e5, type: 4 }], precondition: "" }], rarity: 1 }, "200221": { alternatives: [{ baseDuration: -1, condition: "weather==2", effects: [{ modifier: 6e5, type: 4 }], precondition: "" }], rarity: 1 }, "200222": { alternatives: [{ baseDuration: -1, condition: "weather==2", effects: [{ modifier: 4e5, type: 4 }], precondition: "" }], rarity: 1 }, "200231": { alternatives: [{ baseDuration: -1, condition: "weather==3", effects: [{ modifier: 6e5, type: 4 }], precondition: "" }], rarity: 1 }, "200232": { alternatives: [{ baseDuration: -1, condition: "weather==3", effects: [{ modifier: 4e5, type: 4 }], precondition: "" }], rarity: 1 }, "200233": { alternatives: [{ baseDuration: -1, condition: "weather==3", effects: [{ modifier: -4e5, type: 4 }], precondition: "" }], rarity: 1 }, "200241": { alternatives: [{ baseDuration: -1, condition: "weather==4", effects: [{ modifier: 6e5, type: 4 }], precondition: "" }], rarity: 1 }, "200242": { alternatives: [{ baseDuration: -1, condition: "weather==4", effects: [{ modifier: 4e5, type: 4 }], precondition: "" }], rarity: 1 }, "200251": { alternatives: [{ baseDuration: -1, condition: "post_number<=3", effects: [{ modifier: 6e5, type: 5 }], precondition: "" }], rarity: 1 }, "200252": { alternatives: [{ baseDuration: -1, condition: "post_number<=3", effects: [{ modifier: 4e5, type: 5 }], precondition: "" }], rarity: 1 }, "200253": { alternatives: [{ baseDuration: -1, condition: "post_number<=3", effects: [{ modifier: -4e5, type: 5 }], precondition: "" }], rarity: 1 }, "200261": { alternatives: [{ baseDuration: -1, condition: "post_number>=6", effects: [{ modifier: 6e5, type: 1 }], precondition: "" }], rarity: 1 }, "200262": { alternatives: [{ baseDuration: -1, condition: "post_number>=6", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200263": { alternatives: [{ baseDuration: -1, condition: "post_number>=6", effects: [{ modifier: -4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200271": { alternatives: [{ baseDuration: -1, condition: "running_style_count_same<=1", effects: [{ modifier: 6e5, type: 1 }], precondition: "" }], rarity: 1 }, "200272": { alternatives: [{ baseDuration: -1, condition: "running_style_count_same<=1", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200281": { alternatives: [{ baseDuration: -1, condition: "running_style_count_same>=6", effects: [{ modifier: 6e5, type: 3 }], precondition: "" }], rarity: 1 }, "200282": { alternatives: [{ baseDuration: -1, condition: "running_style_count_same>=6", effects: [{ modifier: 4e5, type: 3 }], precondition: "" }], rarity: 1 }, "200283": { alternatives: [{ baseDuration: -1, condition: "running_style_count_same>=6", effects: [{ modifier: -4e5, type: 3 }], precondition: "" }], rarity: 1 }, "200291": { alternatives: [{ baseDuration: -1, condition: "running_style_equal_popularity_one==1", effects: [{ modifier: 6e5, type: 4 }], precondition: "" }], rarity: 1 }, "200292": { alternatives: [{ baseDuration: -1, condition: "running_style_equal_popularity_one==1", effects: [{ modifier: 4e5, type: 4 }], precondition: "" }], rarity: 1 }, "200301": { alternatives: [{ baseDuration: -1, condition: "popularity>=4", effects: [{ modifier: 6e5, type: 1 }], precondition: "" }], rarity: 1 }, "200302": { alternatives: [{ baseDuration: -1, condition: "popularity>=4", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200311": { alternatives: [{ baseDuration: -1, condition: "grade==100", effects: [{ modifier: -4e5, type: 1 }], precondition: "" }], rarity: 1 }, "200321": { alternatives: [{ baseDuration: -1, condition: "popularity==1", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200331": { alternatives: [{ baseDuration: 18e3, condition: "corner_random==1@corner_random==2@corner_random==3@corner_random==4", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200332": { alternatives: [{ baseDuration: 18e3, condition: "corner_random==1@corner_random==2@corner_random==3@corner_random==4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200333": { alternatives: [{ baseDuration: 18e3, condition: "corner_random==1@corner_random==2@corner_random==3@corner_random==4", effects: [{ modifier: -2e3, type: 21 }], precondition: "" }], rarity: 1 }, "200341": { alternatives: [{ baseDuration: 18e3, condition: "corner_random==1@corner_random==2@corner_random==3@corner_random==4", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "200342": { alternatives: [{ baseDuration: 18e3, condition: "corner_random==1@corner_random==2@corner_random==3@corner_random==4", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "200343": { alternatives: [{ baseDuration: 18e3, condition: "corner_random==1@corner_random==2@corner_random==3@corner_random==4", effects: [{ modifier: -2e3, type: 31 }], precondition: "" }], rarity: 1 }, "200351": { alternatives: [{ baseDuration: 0, condition: "corner_random==1@corner_random==2@corner_random==3@corner_random==4", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200352": { alternatives: [{ baseDuration: 0, condition: "corner_random==1@corner_random==2@corner_random==3@corner_random==4", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200353": { alternatives: [{ baseDuration: 0, condition: "corner_random==1@corner_random==2@corner_random==3@corner_random==4", effects: [{ modifier: -200, type: 9 }], precondition: "" }], rarity: 1 }, "200361": { alternatives: [{ baseDuration: 9e3, condition: "straight_random==1", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200362": { alternatives: [{ baseDuration: 9e3, condition: "straight_random==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200371": { alternatives: [{ baseDuration: 18e3, condition: "straight_random==1", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "200372": { alternatives: [{ baseDuration: 18e3, condition: "straight_random==1", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "200381": { alternatives: [{ baseDuration: 0, condition: "straight_random==1", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200382": { alternatives: [{ baseDuration: 0, condition: "straight_random==1", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200391": { alternatives: [{ baseDuration: 0, condition: "slope==1", effects: [{ modifier: -200, type: 9 }], precondition: "" }], rarity: 1 }, "200401": { alternatives: [{ baseDuration: 0, condition: "accumulatetime>=2&blocked_all_continuetime>=1", effects: [{ modifier: -200, type: 9 }], precondition: "" }], rarity: 1 }, "200411": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&is_lastspurt==1&straight_random==1&corner==0&distance_diff_rate>=75", effects: [{ modifier: -2e3, type: 21 }], precondition: "" }], rarity: 1 }, "200421": { alternatives: [{ baseDuration: 3e4, condition: "remain_distance==200&order==1&bashin_diff_behind>=1", effects: [{ modifier: -2e3, type: 21 }], precondition: "" }], rarity: 1 }, "200431": { alternatives: [{ baseDuration: 0, condition: "always==1", effects: [{ modifier: 4e3, type: 10 }], precondition: "" }], rarity: 2 }, "200432": { alternatives: [{ baseDuration: 0, condition: "always==1", effects: [{ modifier: 9e3, type: 10 }], precondition: "" }], rarity: 1 }, "200433": { alternatives: [{ baseDuration: 0, condition: "always==1", effects: [{ modifier: 15e3, type: 10 }], precondition: "" }], rarity: 1 }, "200441": { alternatives: [{ baseDuration: 0, condition: "phase==0&accumulatetime>=5&blocked_front_continuetime>=1", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200442": { alternatives: [{ baseDuration: 0, condition: "phase==0&accumulatetime>=5&blocked_front_continuetime>=1", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200451": { alternatives: [{ baseDuration: 3e4, condition: "phase_random==0", effects: [{ modifier: 350, type: 28 }], precondition: "" }], rarity: 2 }, "200452": { alternatives: [{ baseDuration: 3e4, condition: "phase_random==0", effects: [{ modifier: 250, type: 28 }], precondition: "" }], rarity: 1 }, "200461": { alternatives: [{ baseDuration: 18e3, condition: "phase==1&change_order_onetime<0", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200462": { alternatives: [{ baseDuration: 18e3, condition: "phase==1&change_order_onetime<0", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200471": { alternatives: [{ baseDuration: 0, condition: "phase==1&change_order_onetime>0", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200472": { alternatives: [{ baseDuration: 0, condition: "phase==1&change_order_onetime>0", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200481": { alternatives: [{ baseDuration: 0, condition: "phase==1&blocked_all_continuetime>=1", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200482": { alternatives: [{ baseDuration: 0, condition: "phase==1&blocked_all_continuetime>=1", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200491": { alternatives: [{ baseDuration: 3e4, condition: "blocked_front_continuetime>=1&is_lastspurt==1&hp_per>=1", effects: [{ modifier: 4e3, type: 31 }, { modifier: 250, type: 28 }], precondition: "" }], rarity: 2 }, "200492": { alternatives: [{ baseDuration: 3e4, condition: "blocked_front_continuetime>=1&is_lastspurt==1&hp_per>=1", effects: [{ modifier: 2e3, type: 31 }, { modifier: 50, type: 28 }], precondition: "" }], rarity: 1 }, "200501": { alternatives: [{ baseDuration: 3e4, condition: "phase_random==2", effects: [{ modifier: 350, type: 28 }], precondition: "" }], rarity: 2 }, "200502": { alternatives: [{ baseDuration: 3e4, condition: "phase_random==2", effects: [{ modifier: 250, type: 28 }], precondition: "" }], rarity: 1 }, "200511": { alternatives: [{ baseDuration: 18e3, condition: "is_lastspurt==1&phase_random==3", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200512": { alternatives: [{ baseDuration: 18e3, condition: "is_lastspurt==1&phase_random==3", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200521": { alternatives: [{ baseDuration: 0, condition: "accumulatetime>=2&order==1&bashin_diff_behind>=1", effects: [{ modifier: -200, type: 9 }], precondition: "" }], rarity: 1 }, "200531": { alternatives: [{ baseDuration: 12e3, condition: "running_style==1&phase==0&accumulatetime>=5", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "200532": { alternatives: [{ baseDuration: 12e3, condition: "running_style==1&phase==0&accumulatetime>=5", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "200541": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&phase_random==1&order_rate<=50", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200542": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&phase_random==1&order_rate<=50", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200551": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&is_finalcorner_random==1&order==1", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "200552": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&is_finalcorner_random==1&order==1", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "200561": { alternatives: [{ baseDuration: 0, condition: "running_style==2&phase_random==0&accumulatetime>=5&order_rate<=50", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200562": { alternatives: [{ baseDuration: 0, condition: "running_style==2&phase_random==0&accumulatetime>=5&order_rate<=50", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200571": { alternatives: [{ baseDuration: 0, condition: "running_style==2&phase_random==1&order_rate<=50", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200572": { alternatives: [{ baseDuration: 0, condition: "running_style==2&phase_random==1&order_rate<=50", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200581": { alternatives: [{ baseDuration: 12e3, condition: "running_style==2&is_finalcorner_random==1&order_rate<=50", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200582": { alternatives: [{ baseDuration: 12e3, condition: "running_style==2&is_finalcorner_random==1&order_rate<=50", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200591": { alternatives: [{ baseDuration: 18e3, condition: "running_style==3&phase_random==1&order_rate>50", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200592": { alternatives: [{ baseDuration: 18e3, condition: "running_style==3&phase_random==1&order_rate>50", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200601": { alternatives: [{ baseDuration: 18e3, condition: "running_style==3&phase_random==2&order_rate>50", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "200602": { alternatives: [{ baseDuration: 18e3, condition: "running_style==3&phase_random==2&order_rate>50", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "200611": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&is_finalcorner==1&corner!=0&is_behind_in==1&change_order_onetime<0", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200612": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&is_finalcorner==1&corner!=0&is_behind_in==1&change_order_onetime<0", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200621": { alternatives: [{ baseDuration: 0, condition: "running_style==4&phase_random==1&distance_diff_rate>=75", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200622": { alternatives: [{ baseDuration: 0, condition: "running_style==4&phase_random==1&distance_diff_rate>=75", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200631": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&phase_random==2&distance_diff_rate>=75", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200632": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&phase_random==2&distance_diff_rate>=75", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200641": { alternatives: [{ baseDuration: 9e3, condition: "running_style==4&is_lastspurt==1&corner==0", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "200642": { alternatives: [{ baseDuration: 9e3, condition: "running_style==4&is_lastspurt==1&corner==0", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "200651": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&straight_random==1", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "200652": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&straight_random==1", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "200662": { alternatives: [{ baseDuration: 0, condition: "distance_type==1&phase_random==1&order_rate>50", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200671": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&phase_random==2&order_rate>50", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200672": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&phase_random==2&order_rate>50", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200681": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&phase_random==0&accumulatetime>=5&order==1", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200682": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&phase_random==0&accumulatetime>=5&order==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200691": { alternatives: [{ baseDuration: 0, condition: "distance_type==2&phase_random==0&accumulatetime>=5&order_rate>50", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200692": { alternatives: [{ baseDuration: 0, condition: "distance_type==2&phase_random==0&accumulatetime>=5&order_rate>50", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200701": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&phase_random==2&order_rate>50", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "200702": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&phase_random==2&order_rate>50", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "200711": { alternatives: [{ baseDuration: 0, condition: "distance_type==3&phase_random==1&order==1", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200712": { alternatives: [{ baseDuration: 0, condition: "distance_type==3&phase_random==1&order==1", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200721": { alternatives: [{ baseDuration: 9e3, condition: "distance_type==3&phase_random==1&order_rate<=50", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200722": { alternatives: [{ baseDuration: 9e3, condition: "distance_type==3&phase_random==1&order_rate<=50", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200731": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&is_finalcorner==1&corner!=0&change_order_onetime>0", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200732": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&is_finalcorner==1&corner!=0&change_order_onetime>0", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200741": { alternatives: [{ baseDuration: 0, condition: "distance_type==4&straight_random==1", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200742": { alternatives: [{ baseDuration: 0, condition: "distance_type==4&straight_random==1", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200751": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&is_finalcorner==1&corner!=0&lane_type==0", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200752": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&is_finalcorner==1&corner!=0&lane_type==0", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200761": { alternatives: [{ baseDuration: 0, condition: "distance_type==4&is_hp_empty_onetime==1", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "200762": { alternatives: [{ baseDuration: 0, condition: "distance_type==4&is_hp_empty_onetime==1", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "200771": { alternatives: [{ baseDuration: 0, condition: "phase==1&order_rate<=50&temptation_count_behind>=1", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200781": { alternatives: [{ baseDuration: 0, condition: "phase==1&order_rate>50&temptation_count_infront>=1", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200791": { alternatives: [{ baseDuration: 0, condition: "running_style_temptation_count_nige>=1&is_temptation==0", effects: [{ modifier: 5e4, type: 13 }], precondition: "" }], rarity: 1 }, "200801": { alternatives: [{ baseDuration: 0, condition: "running_style_temptation_count_senko>=1&is_temptation==0", effects: [{ modifier: 5e4, type: 13 }], precondition: "" }], rarity: 1 }, "200811": { alternatives: [{ baseDuration: 0, condition: "running_style_temptation_count_sashi>=1&is_temptation==0", effects: [{ modifier: 5e4, type: 13 }], precondition: "" }], rarity: 1 }, "200821": { alternatives: [{ baseDuration: 0, condition: "running_style_temptation_count_oikomi>=1&is_temptation==0", effects: [{ modifier: 5e4, type: 13 }], precondition: "" }], rarity: 1 }, "200831": { alternatives: [{ baseDuration: 0, condition: "running_style_count_nige_otherself>=1&phase_random==0&accumulatetime>=5", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200841": { alternatives: [{ baseDuration: 0, condition: "running_style_count_nige_otherself>=1&phase_random==1", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200851": { alternatives: [{ baseDuration: 3e4, condition: "running_style_count_nige_otherself>=1&phase_random==2", effects: [{ modifier: -1500, type: 21 }], precondition: "" }], rarity: 1 }, "200861": { alternatives: [{ baseDuration: 0, condition: "running_style_count_senko_otherself>=1&phase_random==0&accumulatetime>=5", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200871": { alternatives: [{ baseDuration: 0, condition: "running_style_count_senko_otherself>=1&phase_random==1", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200881": { alternatives: [{ baseDuration: 3e4, condition: "running_style_count_senko_otherself>=1&phase_random==2", effects: [{ modifier: -1500, type: 21 }], precondition: "" }], rarity: 1 }, "200891": { alternatives: [{ baseDuration: 0, condition: "running_style_count_sashi_otherself>=1&phase_random==0&accumulatetime>=5", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200901": { alternatives: [{ baseDuration: 0, condition: "running_style_count_sashi_otherself>=1&phase_random==1", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200911": { alternatives: [{ baseDuration: 3e4, condition: "running_style_count_sashi_otherself>=1&phase_random==2", effects: [{ modifier: -1500, type: 21 }], precondition: "" }], rarity: 1 }, "200921": { alternatives: [{ baseDuration: 0, condition: "running_style_count_oikomi_otherself>=1&phase_random==0&accumulatetime>=5", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200931": { alternatives: [{ baseDuration: 0, condition: "running_style_count_oikomi_otherself>=1&phase_random==1", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "200941": { alternatives: [{ baseDuration: 3e4, condition: "running_style_count_oikomi_otherself>=1&phase_random==2", effects: [{ modifier: -1500, type: 21 }], precondition: "" }], rarity: 1 }, "200951": { alternatives: [{ baseDuration: -1, condition: "track_id==10101", effects: [{ modifier: 6e5, type: 2 }], precondition: "" }], rarity: 1 }, "200952": { alternatives: [{ baseDuration: -1, condition: "track_id==10101", effects: [{ modifier: 4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200953": { alternatives: [{ baseDuration: -1, condition: "track_id==10101", effects: [{ modifier: -4e5, type: 2 }], precondition: "" }], rarity: 1 }, "200961": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&straight_random==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "200962": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&straight_random==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200971": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&corner_random==1@distance_type==1&corner_random==2@distance_type==1&corner_random==3@distance_type==1&corner_random==4", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "200972": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&corner_random==1@distance_type==1&corner_random==2@distance_type==1&corner_random==3@distance_type==1&corner_random==4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200981": { alternatives: [{ baseDuration: 12e3, condition: "distance_type==1&phase==1&bashin_diff_behind>=5&order==1", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "200982": { alternatives: [{ baseDuration: 12e3, condition: "distance_type==1&phase==1&bashin_diff_behind>=5&order==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "200991": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&phase_random==1&order>=2&order_rate<=50", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "200992": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&phase_random==1&order>=2&order_rate<=50", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201001": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&phase_random==1", effects: [{ modifier: 350, type: 28 }, { modifier: 3e3, type: 31 }], precondition: "" }], rarity: 2 }, "201002": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&phase_random==1", effects: [{ modifier: 250, type: 28 }, { modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201012": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==1&phase_random==0&order<=3&accumulatetime>=5", effects: [{ modifier: -2e3, type: 21 }], precondition: "" }], rarity: 1 }, "201021": { alternatives: [{ baseDuration: 0, condition: "distance_type==1&phase_random==0&order_rate>50&accumulatetime>=5", effects: [{ modifier: -300, type: 9 }], precondition: "" }], rarity: 2 }, "201022": { alternatives: [{ baseDuration: 0, condition: "distance_type==1&phase_random==0&order_rate>50&accumulatetime>=5", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "201031": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&straight_random==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201032": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&straight_random==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201041": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&corner_random==1@distance_type==2&corner_random==2@distance_type==2&corner_random==3@distance_type==2&corner_random==4", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201042": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&corner_random==1@distance_type==2&corner_random==2@distance_type==2&corner_random==3@distance_type==2&corner_random==4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201051": { alternatives: [{ baseDuration: 12e3, condition: "distance_type==2&phase_random==1&order_rate<=50", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "201052": { alternatives: [{ baseDuration: 12e3, condition: "distance_type==2&phase_random==1&order_rate<=50", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201061": { alternatives: [{ baseDuration: 12e3, condition: "distance_type==2&phase==1&change_order_onetime<0", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "201062": { alternatives: [{ baseDuration: 12e3, condition: "distance_type==2&phase==1&change_order_onetime<0", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201071": { alternatives: [{ baseDuration: 18e3, condition: "distance_type==2&is_overtake==1&accumulatetime>=5", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "201072": { alternatives: [{ baseDuration: 18e3, condition: "distance_type==2&is_overtake==1&accumulatetime>=5", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201081": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&phase_random==1&order==1", effects: [{ modifier: -2e3, type: 21 }, { modifier: 2500, type: 27 }], precondition: "" }], rarity: 2 }, "201082": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&phase_random==1&order==1", effects: [{ modifier: -1500, type: 21 }, { modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201091": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&phase_random==0&order_rate>50&accumulatetime>=5", effects: [{ modifier: -3e3, type: 31 }], precondition: "" }], rarity: 2 }, "201092": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==2&phase_random==0&order_rate>50&accumulatetime>=5", effects: [{ modifier: -1e3, type: 31 }], precondition: "" }], rarity: 1 }, "201101": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&straight_random==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201102": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&straight_random==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201111": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&corner_random==1@distance_type==3&corner_random==2@distance_type==3&corner_random==3@distance_type==3&corner_random==4", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201112": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&corner_random==1@distance_type==3&corner_random==2@distance_type==3&corner_random==3@distance_type==3&corner_random==4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201121": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&phase_random==0", effects: [{ modifier: 15e4, type: 8 }], precondition: "" }], rarity: 2 }, "201122": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&phase_random==0", effects: [{ modifier: 1e5, type: 8 }], precondition: "" }], rarity: 1 }, "201131": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&phase_random==1&order_rate>50", effects: [{ modifier: 350, type: 28 }, { modifier: 3e3, type: 31 }], precondition: "" }], rarity: 2 }, "201132": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&phase_random==1&order_rate>50", effects: [{ modifier: 250, type: 28 }, { modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201141": { alternatives: [{ baseDuration: 0, condition: "distance_type==3&is_move_lane==1&accumulatetime>=10@distance_type==3&is_move_lane==2&accumulatetime>=10", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "201142": { alternatives: [{ baseDuration: 0, condition: "distance_type==3&is_move_lane==1&accumulatetime>=10@distance_type==3&is_move_lane==2&accumulatetime>=10", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201151": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&phase_random==2&order_rate>50", effects: [{ modifier: -2500, type: 21 }], precondition: "" }], rarity: 2 }, "201152": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==3&phase_random==2&order_rate>50", effects: [{ modifier: -1500, type: 21 }], precondition: "" }], rarity: 1 }, "201161": { alternatives: [{ baseDuration: 0, condition: "distance_type==3&phase==1&blocked_front_continuetime>=1", effects: [{ modifier: -300, type: 9 }], precondition: "" }], rarity: 2 }, "201162": { alternatives: [{ baseDuration: 0, condition: "distance_type==3&phase==1&blocked_front_continuetime>=1", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "201171": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&straight_random==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201172": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&straight_random==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201181": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&corner_random==1@distance_type==4&corner_random==2@distance_type==4&corner_random==3@distance_type==4&corner_random==4", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201182": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&corner_random==1@distance_type==4&corner_random==2@distance_type==4&corner_random==3@distance_type==4&corner_random==4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201191": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&phase_random==1&bashin_diff_behind>=3&order==1", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "201192": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&phase_random==1&bashin_diff_behind>=3&order==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201202": { alternatives: [{ baseDuration: 0, condition: "distance_type==4&is_overtake==1&accumulatetime>=5", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201211": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&phase==2&change_order_onetime<0", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "201212": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&phase==2&change_order_onetime<0", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201221": { alternatives: [{ baseDuration: 0, condition: "distance_type==4&phase_random==1&order>=5", effects: [{ modifier: -200, type: 9 }, { modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "201222": { alternatives: [{ baseDuration: 0, condition: "distance_type==4&phase_random==1&order>=5", effects: [{ modifier: -50, type: 9 }, { modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201231": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&phase_random==2", effects: [{ modifier: -1e5, type: 8 }], precondition: "" }], rarity: 2 }, "201232": { alternatives: [{ baseDuration: 3e4, condition: "distance_type==4&phase_random==2", effects: [{ modifier: -5e4, type: 8 }], precondition: "" }], rarity: 1 }, "201241": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&straight_random==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201242": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&straight_random==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201251": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&corner_random==1@running_style==1&corner_random==2@running_style==1&corner_random==3@running_style==1&corner_random==4", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201252": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&corner_random==1@running_style==1&corner_random==2@running_style==1&corner_random==3@running_style==1&corner_random==4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201262": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&phase==0&blocked_all_continuetime>=1", effects: [{ modifier: 250, type: 28 }], precondition: "" }], rarity: 1 }, "201272": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&phase==0&change_order_onetime>0&accumulatetime>=5", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201281": { alternatives: [{ baseDuration: 0, condition: "running_style==1&slope==1&accumulatetime>=10", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "201282": { alternatives: [{ baseDuration: 0, condition: "running_style==1&slope==1&accumulatetime>=10", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201291": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&phase_random==1&order_rate>50", effects: [{ modifier: 4e3, type: 31 }], precondition: "" }], rarity: 2 }, "201292": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&phase_random==1&order_rate>50", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201302": { alternatives: [{ baseDuration: 3e4, condition: "running_style==1&phase_random==0&order_rate>50&accumulatetime>=5", effects: [{ modifier: -1e3, type: 31 }], precondition: "" }], rarity: 1 }, "201311": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&straight_random==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201312": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&straight_random==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201321": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&corner_random==1@running_style==2&corner_random==2@running_style==2&corner_random==3@running_style==2&corner_random==4", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201322": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&corner_random==1@running_style==2&corner_random==2@running_style==2&corner_random==3@running_style==2&corner_random==4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201331": { alternatives: [{ baseDuration: 18e3, condition: "running_style==2&is_move_lane==1@running_style==2&is_move_lane==2", effects: [{ modifier: 3e3, type: 31 }], precondition: "" }], rarity: 2 }, "201332": { alternatives: [{ baseDuration: 18e3, condition: "running_style==2&is_move_lane==1@running_style==2&is_move_lane==2", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201341": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&slope==2", effects: [{ modifier: 3e3, type: 31 }], precondition: "" }], rarity: 2 }, "201342": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&slope==2", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201351": { alternatives: [{ baseDuration: 0, condition: "running_style==2&phase_random==1", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "201352": { alternatives: [{ baseDuration: 0, condition: "running_style==2&phase_random==1", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201361": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&phase_random==1&order_rate>50", effects: [{ modifier: 3e3, type: 31 }], precondition: "" }], rarity: 2 }, "201362": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&phase_random==1&order_rate>50", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201371": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&phase_random==2&order_rate<=50", effects: [{ modifier: -5e4, type: 8 }], precondition: "" }], rarity: 2 }, "201372": { alternatives: [{ baseDuration: 3e4, condition: "running_style==2&phase_random==2&order_rate<=50", effects: [{ modifier: -3e4, type: 8 }], precondition: "" }], rarity: 1 }, "201381": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&straight_random==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201382": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&straight_random==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201391": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&corner_random==1@running_style==3&corner_random==2@running_style==3&corner_random==3@running_style==3&corner_random==4", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201392": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&corner_random==1@running_style==3&corner_random==2@running_style==3&corner_random==3@running_style==3&corner_random==4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201401": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&is_overtake==1&accumulatetime>=5", effects: [{ modifier: 3e3, type: 31 }], precondition: "" }], rarity: 2 }, "201402": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&is_overtake==1&accumulatetime>=5", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201411": { alternatives: [{ baseDuration: 18e3, condition: "running_style==3&slope==1", effects: [{ modifier: 3500, type: 27 }], precondition: "" }], rarity: 2 }, "201412": { alternatives: [{ baseDuration: 18e3, condition: "running_style==3&slope==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201421": { alternatives: [{ baseDuration: 0, condition: "running_style==3&phase_random==2", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "201422": { alternatives: [{ baseDuration: 0, condition: "running_style==3&phase_random==2", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201431": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&phase_random==1", effects: [{ modifier: 15e4, type: 8 }], precondition: "" }], rarity: 2 }, "201432": { alternatives: [{ baseDuration: 3e4, condition: "running_style==3&phase_random==1", effects: [{ modifier: 5e4, type: 8 }], precondition: "" }], rarity: 1 }, "201441": { alternatives: [{ baseDuration: 0, condition: "running_style==3&phase_random==2&order_rate>50", effects: [{ modifier: -300, type: 9 }], precondition: "" }], rarity: 2 }, "201442": { alternatives: [{ baseDuration: 0, condition: "running_style==3&phase_random==2&order_rate>50", effects: [{ modifier: -100, type: 9 }], precondition: "" }], rarity: 1 }, "201451": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&straight_random==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201452": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&straight_random==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201461": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&corner_random==1@running_style==4&corner_random==2@running_style==4&corner_random==3@running_style==4&corner_random==4", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "201462": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&corner_random==1@running_style==4&corner_random==2@running_style==4&corner_random==3@running_style==4&corner_random==4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201471": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&is_move_lane==1@running_style==4&is_move_lane==2", effects: [{ modifier: 1e5, type: 8 }], precondition: "" }], rarity: 2 }, "201472": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&is_move_lane==1@running_style==4&is_move_lane==2", effects: [{ modifier: 5e4, type: 8 }], precondition: "" }], rarity: 1 }, "201481": { alternatives: [{ baseDuration: 0, condition: "running_style==4&slope==2&accumulatetime>=10", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "201482": { alternatives: [{ baseDuration: 0, condition: "running_style==4&slope==2&accumulatetime>=10", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201491": { alternatives: [{ baseDuration: 0, condition: "running_style==4&blocked_front_continuetime>=1&accumulatetime>=10", effects: [{ modifier: 550, type: 9 }], precondition: "" }], rarity: 2 }, "201492": { alternatives: [{ baseDuration: 0, condition: "running_style==4&blocked_front_continuetime>=1&accumulatetime>=10", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201501": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&phase_random==2&order_rate>50", effects: [{ modifier: 15e4, type: 8 }], precondition: "" }], rarity: 2 }, "201502": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&phase_random==2&order_rate>50", effects: [{ modifier: 5e4, type: 8 }], precondition: "" }], rarity: 1 }, "201511": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&phase_random==2&order>=2", effects: [{ modifier: -2500, type: 21 }], precondition: "" }], rarity: 2 }, "201512": { alternatives: [{ baseDuration: 3e4, condition: "running_style==4&phase_random==2&order>=2", effects: [{ modifier: -1500, type: 21 }], precondition: "" }], rarity: 1 }, "201521": { alternatives: [{ baseDuration: -1, condition: "running_style==1", effects: [{ modifier: 6e5, type: 5 }, { modifier: 1e5, type: 8 }], precondition: "" }], rarity: 1 }, "201522": { alternatives: [{ baseDuration: -1, condition: "running_style==1", effects: [{ modifier: 4e5, type: 5 }, { modifier: 5e4, type: 8 }], precondition: "" }], rarity: 1 }, "201531": { alternatives: [{ baseDuration: -1, condition: "running_style==2", effects: [{ modifier: 6e5, type: 5 }, { modifier: 1e5, type: 8 }], precondition: "" }], rarity: 1 }, "201532": { alternatives: [{ baseDuration: -1, condition: "running_style==2", effects: [{ modifier: 4e5, type: 5 }, { modifier: 5e4, type: 8 }], precondition: "" }], rarity: 1 }, "201541": { alternatives: [{ baseDuration: -1, condition: "running_style==3", effects: [{ modifier: 6e5, type: 5 }, { modifier: 1e5, type: 8 }], precondition: "" }], rarity: 1 }, "201542": { alternatives: [{ baseDuration: -1, condition: "running_style==3", effects: [{ modifier: 4e5, type: 5 }, { modifier: 5e4, type: 8 }], precondition: "" }], rarity: 1 }, "201551": { alternatives: [{ baseDuration: -1, condition: "running_style==4", effects: [{ modifier: 6e5, type: 5 }, { modifier: 1e5, type: 8 }], precondition: "" }], rarity: 1 }, "201552": { alternatives: [{ baseDuration: -1, condition: "running_style==4", effects: [{ modifier: 4e5, type: 5 }, { modifier: 5e4, type: 8 }], precondition: "" }], rarity: 1 }, "201561": { alternatives: [{ baseDuration: -1, condition: "random_lot==50&post_number==7", effects: [{ modifier: 6e5, type: 1 }, { modifier: 6e5, type: 2 }, { modifier: 6e5, type: 3 }], precondition: "" }], rarity: 2 }, "201562": { alternatives: [{ baseDuration: -1, condition: "random_lot==50&post_number==7", effects: [{ modifier: 4e5, type: 1 }, { modifier: 4e5, type: 2 }, { modifier: 4e5, type: 3 }], precondition: "" }], rarity: 1 }, "201571": { alternatives: [{ baseDuration: 0, condition: "remain_distance<=778&remain_distance>=776", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201581": { alternatives: [{ baseDuration: 3e4, condition: "slope==1", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201591": { alternatives: [{ baseDuration: 3e4, condition: "near_count==4@near_count==5@near_count==6@near_count==7", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201601": { alternatives: [{ baseDuration: 3e4, condition: "activate_count_start>=3", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "201611": { alternatives: [{ baseDuration: 3e4, condition: "activate_count_middle>=3", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201621": { alternatives: [{ baseDuration: 0, condition: "activate_count_end_after>=3", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "201631": { alternatives: [{ baseDuration: -1, condition: "same_skill_horse_count>=5", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "201641": { alternatives: [{ baseDuration: -1, condition: "same_skill_horse_count==1", effects: [{ modifier: 4e5, type: 1 }], precondition: "" }], rarity: 1 }, "201651": { alternatives: [{ baseDuration: 3e4, condition: "infront_near_lane_time>=3&accumulatetime>=10", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "201661": { alternatives: [{ baseDuration: 3e4, condition: "behind_near_lane_time>=3&accumulatetime>=10", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900011": { alternatives: [{ baseDuration: 3e4, condition: "phase>=2&order>=2&order_rate<=50&change_order_onetime<0", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900021": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner==0&order==1&bashin_diff_behind>=1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900031": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner==0&order<=3&bashin_diff_infront<=1&is_overtake==1", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "900041": { alternatives: [{ baseDuration: 24e3, condition: "is_finalcorner==1&order<=5&order_rate<=50", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "900061": { alternatives: [{ baseDuration: 3e4, condition: "order>=2&order<=5&order_rate<=50&remain_distance<=201&remain_distance>=199", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "900071": { alternatives: [{ baseDuration: 36e3, condition: "distance_rate>=50&distance_rate<=60&order_rate>50", effects: [{ modifier: 500, type: 27 }], precondition: "" }], rarity: 1 }, "900081": { alternatives: [{ baseDuration: 3e4, condition: "order>=3&order_rate<=50&remain_distance<=200&bashin_diff_infront<=1@order>=3&order_rate<=50&remain_distance<=200&bashin_diff_behind<=1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900091": { alternatives: [{ baseDuration: 3e4, condition: "distance_rate>=50&order==1&bashin_diff_behind<=1", effects: [{ modifier: 500, type: 27 }, { modifier: 1e3, type: 31 }], precondition: "" }], rarity: 1 }, "900101": { alternatives: [{ baseDuration: 24e3, condition: "is_finalcorner==1&corner!=0&order>=3&order_rate<=50", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "900111": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner==0&change_order_onetime<0&order>=4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900131": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner!=0&distance_diff_rate<=30", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900141": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner==0&hp_per>=30&order<=2", effects: [{ modifier: 500, type: 27 }, { modifier: 1e3, type: 31 }], precondition: "" }], rarity: 1 }, "900151": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner!=0&bashin_diff_infront<=1&bashin_diff_behind<=1&blocked_side_continuetime>=2&order<=4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900171": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&change_order_up_end_after>=3&corner==0", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 }, "900181": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner!=0&order>=4&change_order_onetime<0", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900231": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner!=0&change_order_onetime<0&order<=4", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900241": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner!=0&blocked_side_continuetime>=2&order<=3", effects: [{ modifier: 500, type: 27 }, { modifier: 1e3, type: 31 }], precondition: "" }], rarity: 1 }, "900261": { alternatives: [{ baseDuration: 3e4, condition: "is_badstart==0&temptation_count==0&order<=3&is_finalcorner==1&corner==0", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900271": { alternatives: [{ baseDuration: 24e3, condition: "phase>=2&corner!=0&order_rate>=65&order_rate<=70", effects: [{ modifier: 2e3, type: 31 }], precondition: "" }], rarity: 1 }, "900301": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner==0&order<=4&change_order_onetime<0", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900321": { alternatives: [{ baseDuration: 0, condition: "distance_rate>=50&corner!=0&order>=3&order_rate<=40", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "900351": { alternatives: [{ baseDuration: 3e4, condition: "is_finalcorner==1&corner==0&order<=5&blocked_side_continuetime>=2", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900411": { alternatives: [{ baseDuration: 3e4, condition: "distance_rate>=50&order<=3&blocked_side_continuetime>=2", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900451": { alternatives: [{ baseDuration: 0, condition: "phase_random==1&order>=2&order_rate<=40", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "900521": { alternatives: [{ baseDuration: 0, condition: "is_finalcorner==1&corner!=0&order_rate>50&near_count>=1", effects: [{ modifier: 150, type: 9 }], precondition: "" }], rarity: 1 }, "900561": { alternatives: [{ baseDuration: 3e4, condition: "phase>=2&order>=3&blocked_front==1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900601": { alternatives: [{ baseDuration: 3e4, condition: "phase>=2&order==3&bashin_diff_behind<=1", effects: [{ modifier: 1500, type: 27 }], precondition: "" }], rarity: 1 }, "900611": { alternatives: [{ baseDuration: 3e4, condition: "temptation_count==0&remain_distance<=201&remain_distance>=199&order>=5&order_rate<=60", effects: [{ modifier: 2500, type: 27 }], precondition: "" }], rarity: 1 } };

  // ../../skilltool/RaceSolverBuilder.ts
  var GroundSpeedModifier = Object.freeze([
    null,
    // ground types started at 1
    [0, 0, 0, 0, -50],
    [0, 0, 0, 0, -50]
  ].map((o4) => Object.freeze(o4)));
  var GroundPowerModifier = Object.freeze([
    null,
    [0, 0, -50, -50, -50],
    [0, -100, -50, -100, -100]
  ].map((o4) => Object.freeze(o4)));
  var StrategyProficiencyModifier = Object.freeze([1.1, 1, 0.85, 0.75, 0.6, 0.4, 0.2, 0.1]);
  var Asitame;
  ((Asitame2) => {
    Asitame2.StrategyDistanceCoefficient = Object.freeze([
      [],
      // distances are 1-indexed (as are strategies, hence the 0 in the first column for every row)
      [0, 1, 0.7, 0.75, 0.7, 1],
      // short (nige, senkou, sasi, oikomi, oonige)
      [0, 1, 0.8, 0.7, 0.75, 1],
      // mile
      [0, 1, 0.9, 0.875, 0.86, 1],
      // medium
      [0, 1, 0.9, 1, 0.9, 1]
      // long
    ]);
    Asitame2.BaseModifier = 875e-5;
    function calcApproximateModifier(power, strategy, distance) {
      return Asitame2.BaseModifier * Math.sqrt(power - 1200) * Asitame2.StrategyDistanceCoefficient[distance][strategy];
    }
    Asitame2.calcApproximateModifier = calcApproximateModifier;
  })(Asitame || (Asitame = {}));
  var StaminaSyoubu;
  ((StaminaSyoubu2) => {
    function distanceFactor(distance) {
      if (distance < 2101)
        return 0;
      else if (distance < 2201)
        return 0.5;
      else if (distance < 2401)
        return 1;
      else if (distance < 2601)
        return 1.2;
      else
        return 1.5;
    }
    StaminaSyoubu2.distanceFactor = distanceFactor;
    function calcApproximateModifier(stamina, distance) {
      const randomFactor = 1;
      return Math.sqrt(stamina - 1200) * 85e-4 * distanceFactor(distance) * randomFactor;
    }
    StaminaSyoubu2.calcApproximateModifier = calcApproximateModifier;
  })(StaminaSyoubu || (StaminaSyoubu = {}));
  function parseStrategy(s3) {
    if (typeof s3 != "string") {
      return s3;
    }
    switch (s3.toUpperCase()) {
      case "NIGE":
        return 1 /* Nige */;
      case "SENKOU":
        return 2 /* Senkou */;
      case "SASI":
      case "SASHI":
        return 3 /* Sasi */;
      case "OIKOMI":
        return 4 /* Oikomi */;
      case "OONIGE":
        return 5 /* Oonige */;
      default:
        throw new Error("Invalid running strategy.");
    }
  }
  function parseAptitude(a4, type2) {
    if (typeof a4 != "string") {
      return a4;
    }
    switch (a4.toUpperCase()) {
      case "S":
        return 0 /* S */;
      case "A":
        return 1 /* A */;
      case "B":
        return 2 /* B */;
      case "C":
        return 3 /* C */;
      case "D":
        return 4 /* D */;
      case "E":
        return 5 /* E */;
      case "F":
        return 6 /* F */;
      case "G":
        return 7 /* G */;
      default:
        throw new Error("Invalid " + type2 + " aptitude.");
    }
  }
  function parseGroundCondition(g3) {
    if (typeof g3 != "string") {
      return g3;
    }
    switch (g3.toUpperCase()) {
      case "GOOD":
        return 1 /* Good */;
      case "YIELDING":
        return 2 /* Yielding */;
      case "SOFT":
        return 3 /* Soft */;
      case "HEAVY":
        return 4 /* Heavy */;
      default:
        throw new Error("Invalid ground condition.");
    }
  }
  function parseWeather(w3) {
    if (typeof w3 != "string") {
      return w3;
    }
    switch (w3.toUpperCase()) {
      case "SUNNY":
        return 1 /* Sunny */;
      case "CLOUDY":
        return 2 /* Cloudy */;
      case "RAINY":
        return 3 /* Rainy */;
      case "SNOWY":
        return 4 /* Snowy */;
      default:
        throw new Error("Invalid weather.");
    }
  }
  function parseSeason(s3) {
    if (typeof s3 != "string") {
      return s3;
    }
    switch (s3.toUpperCase()) {
      case "SPRING":
        return 1 /* Spring */;
      case "SUMMER":
        return 2 /* Summer */;
      case "AUTUMN":
        return 3 /* Autumn */;
      case "WINTER":
        return 4 /* Winter */;
      case "SAKURA":
        return 5 /* Sakura */;
      default:
        throw new Error("Invalid season.");
    }
  }
  function parseTime(t3) {
    if (typeof t3 != "string") {
      return t3;
    }
    switch (t3.toUpperCase()) {
      case "NONE":
      case "NOTIME":
        return 0 /* NoTime */;
      case "MORNING":
        return 1 /* Morning */;
      case "MIDDAY":
        return 2 /* Midday */;
      case "EVENING":
        return 3 /* Evening */;
      case "NIGHT":
        return 4 /* Night */;
      default:
        throw new Error("Invalid race time.");
    }
  }
  function parseGrade(g3) {
    if (typeof g3 != "string") {
      return g3;
    }
    switch (g3.toUpperCase()) {
      case "G1":
        return 100 /* G1 */;
      case "G2":
        return 200 /* G2 */;
      case "G3":
        return 300 /* G3 */;
      case "OP":
        return 400 /* OP */;
      case "PRE-OP":
      case "PREOP":
        return 700 /* PreOP */;
      case "MAIDEN":
        return 800 /* Maiden */;
      case "DEBUT":
        return 900 /* Debut */;
      case "DAILY":
        return 999 /* Daily */;
      default:
        throw new Error("Invalid race grade.");
    }
  }
  function adjustOvercap(stat) {
    return stat > 1200 ? 1200 + Math.floor((stat - 1200) / 2) : stat;
  }
  function buildBaseStats(horseDesc, mood) {
    const motivCoef = 1 + 0.02 * mood;
    return Object.freeze({
      speed: adjustOvercap(horseDesc.speed) * motivCoef,
      stamina: adjustOvercap(horseDesc.stamina) * motivCoef,
      power: adjustOvercap(horseDesc.power) * motivCoef,
      guts: adjustOvercap(horseDesc.guts) * motivCoef,
      wisdom: adjustOvercap(horseDesc.wisdom) * motivCoef,
      strategy: parseStrategy(horseDesc.strategy),
      distanceAptitude: parseAptitude(horseDesc.distanceAptitude, "distance"),
      surfaceAptitude: parseAptitude(horseDesc.surfaceAptitude, "surface"),
      strategyAptitude: parseAptitude(horseDesc.strategyAptitude, "strategy"),
      rawStamina: horseDesc.stamina * motivCoef
    });
  }
  function buildAdjustedStats(baseStats, course, ground) {
    const raceCourseModifier = CourseHelpers.courseSpeedModifier(course, baseStats);
    return Object.freeze({
      speed: Math.max(baseStats.speed * raceCourseModifier + GroundSpeedModifier[course.surface][ground], 1),
      stamina: baseStats.stamina,
      power: Math.max(baseStats.power + GroundPowerModifier[course.surface][ground], 1),
      guts: baseStats.guts,
      wisdom: baseStats.wisdom * StrategyProficiencyModifier[baseStats.strategyAptitude],
      strategy: baseStats.strategy,
      distanceAptitude: baseStats.distanceAptitude,
      surfaceAptitude: baseStats.surfaceAptitude,
      strategyAptitude: baseStats.strategyAptitude,
      rawStamina: baseStats.rawStamina
    });
  }
  function buildSkillEffects(skill) {
    return skill.effects.reduce((acc, ef) => {
      if (SkillType.hasOwnProperty(ef.type) && ef.modifier > 0) {
        acc.push({ type: ef.type, baseDuration: skill.baseDuration / 1e4, modifier: ef.modifier / 1e4 });
      }
      return acc;
    }, []);
  }
  function buildSkillData(horse, raceParams, course, wholeCourse, parser, skillId, ignoreNullEffects = false) {
    if (!(skillId in skill_data_default)) {
      throw new Error("bad skill ID " + skillId);
    }
    const extra = Object.assign({ skillId }, raceParams);
    const alternatives = skill_data_default[skillId].alternatives;
    const triggers = [];
    for (let i4 = 0; i4 < alternatives.length; ++i4) {
      const skill = alternatives[i4];
      let full = new RegionList();
      wholeCourse.forEach((r3) => full.push(r3));
      if (skill.precondition) {
        const pre = parser.parse(parser.tokenize(skill.precondition));
        const preRegions = pre.apply(wholeCourse, course, horse, extra)[0];
        if (preRegions.length == 0) {
          continue;
        } else {
          const bounds = new Region(preRegions[0].start, wholeCourse[wholeCourse.length - 1].end);
          full = full.rmap((r3) => r3.intersect(bounds));
        }
      }
      const op = parser.parse(parser.tokenize(skill.condition));
      const [regions, extraCondition] = op.apply(full, course, horse, extra);
      if (regions.length == 0) {
        continue;
      }
      if (triggers.length > 0 && !/is_activate_other_skill_detail|is_used_skill_id/.test(skill.condition)) {
        continue;
      }
      const effects2 = buildSkillEffects(skill);
      if (effects2.length > 0 || ignoreNullEffects) {
        const rarity = skill_data_default[skillId].rarity;
        triggers.push({
          skillId,
          // for some reason 1*/2* uniques, 1*/2* upgraded to 3*, and naturally 3* uniques all have different rarity (3, 4, 5 respectively)
          rarity: rarity >= 3 && rarity <= 5 ? 3 : rarity,
          samplePolicy: op.samplePolicy,
          regions,
          extraCondition,
          effects: effects2
        });
      }
    }
    if (triggers.length > 0)
      return triggers;
    const effects = buildSkillEffects(alternatives[0]);
    if (effects.length == 0 && !ignoreNullEffects) {
      return [];
    } else {
      const afterEnd = new RegionList();
      afterEnd.push(new Region(9999, 9999));
      return [{
        skillId,
        rarity: Math.min(skill_data_default[skillId].rarity, 3),
        samplePolicy: ImmediatePolicy,
        regions: afterEnd,
        extraCondition: (_2) => false,
        effects
      }];
    }
  }
  var conditionsWithActivateCountsAsRandom = Object.freeze(Object.assign({}, Conditions, {
    activate_count_all: random({
      filterGte(regions, n3, course, _1, extra) {
        if (n3 == 7) {
          const rl = new RegionList();
          regions.forEach((r3) => rl.push(new Region(r3.start, r3.start + 11)));
          return rl;
        }
        const bounds = new Region(Math.min(n3 / 23 - 0.2, 0.6) * course.distance, Math.min(n3 / 23 + 0.2, 1) * course.distance);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    activate_count_end_after: random({
      filterGte(regions, _0, course, _1, extra) {
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, 2), CourseHelpers.phaseEnd(course.distance, 3));
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    activate_count_heal: noopRandom,
    activate_count_later_half: random({
      filterGte(regions, _0, course, _1, extra) {
        const bounds = new Region(course.distance / 2, course.distance);
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    activate_count_middle: random({
      filterGte(regions, n3, course, _1, extra) {
        const start2 = CourseHelpers.phaseStart(course.distance, 1), end = CourseHelpers.phaseEnd(course.distance, 1);
        const bounds = new Region(start2, start2 + n3 / 10 * (end - start2));
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    }),
    activate_count_start: immediate({
      // for 地固め
      filterGte(regions, _0, course, _1, extra) {
        const bounds = new Region(CourseHelpers.phaseStart(course.distance, 0), CourseHelpers.phaseEnd(course.distance, 0));
        return regions.rmap((r3) => r3.intersect(bounds));
      }
    })
  }));
  var defaultParser = getParser();
  var acrParser = getParser(conditionsWithActivateCountsAsRandom);
  var RaceSolverBuilder = class _RaceSolverBuilder {
    constructor(nsamples) {
      this.nsamples = nsamples;
      this._course = null;
      this._raceParams = {
        mood: 2,
        groundCondition: 1 /* Good */,
        weather: 1 /* Sunny */,
        season: 1 /* Spring */,
        time: 2 /* Midday */,
        grade: 100 /* G1 */,
        popularity: 1
      };
      this._horse = null;
      this._pacer = null;
      this._pacerSkills = [];
      this._rng = new Rule30CARng(Math.floor(Math.random() * (-1 >>> 0)) >>> 0);
      this._parser = defaultParser;
      this._skills = [];
      this._extraSkillHooks = [];
      this._onSkillActivate = null;
      this._onSkillDeactivate = null;
    }
    seed(seed) {
      this._rng = new Rule30CARng(seed);
      return this;
    }
    course(course) {
      if (typeof course == "number") {
        this._course = CourseHelpers.getCourse(course);
      } else {
        this._course = course;
      }
      return this;
    }
    mood(mood) {
      this._raceParams.mood = mood;
      return this;
    }
    ground(ground) {
      this._raceParams.groundCondition = parseGroundCondition(ground);
      return this;
    }
    weather(weather) {
      this._raceParams.weather = parseWeather(weather);
      return this;
    }
    season(season) {
      this._raceParams.season = parseSeason(season);
      return this;
    }
    time(time) {
      this._raceParams.time = parseTime(time);
      return this;
    }
    grade(grade) {
      this._raceParams.grade = parseGrade(grade);
      return this;
    }
    popularity(popularity) {
      this._raceParams.popularity = popularity;
      return this;
    }
    horse(horse) {
      this._horse = horse;
      return this;
    }
    pacer(horse) {
      this._pacer = horse;
      return this;
    }
    _isNige() {
      if (typeof this._horse.strategy == "string") {
        return this._horse.strategy.toUpperCase() == "NIGE" || this._horse.strategy.toUpperCase() == "OONIGE";
      } else {
        return this._horse.strategy == 1 /* Nige */ || this._horse.strategy == 5 /* Oonige */;
      }
    }
    useDefaultPacer(openingLegAccel = true) {
      if (this._isNige()) {
        return this;
      }
      this._pacer = Object.assign({}, this._horse, { strategy: "Nige" });
      if (openingLegAccel) {
        this._pacerSkills = [{
          skillId: "201601",
          rarity: 1 /* White */,
          trigger: new Region(0, 100),
          extraCondition: (_2) => true,
          effects: [{ type: 31 /* Accel */, baseDuration: 3, modifier: 0.2 }]
        }, {
          skillId: "200532",
          rarity: 1 /* White */,
          trigger: new Region(0, 100),
          extraCondition: (_2) => true,
          effects: [{ type: 31 /* Accel */, baseDuration: 1.2, modifier: 0.2 }]
        }];
      }
      return this;
    }
    withActivateCountsAsRandom() {
      this._parser = acrParser;
      return this;
    }
    // NB. must be called after horse and mood are set
    withAsiwotameru() {
      const baseDisplayedPower = this._horse.power * (1 + 0.02 * this._raceParams.mood);
      this._extraSkillHooks.push((skilldata, horse, course) => {
        const power = skilldata.reduce((acc, sd) => {
          const powerUp = sd.effects.find((ef) => ef.type == 3 /* PowerUp */);
          if (powerUp && sd.regions.length > 0 && sd.regions[0].start < 9999) {
            return acc + powerUp.modifier;
          } else {
            return acc;
          }
        }, baseDisplayedPower);
        if (power > 1200) {
          const spurtStart = new RegionList();
          spurtStart.push(new Region(CourseHelpers.phaseStart(course.distance, 2), course.distance));
          skilldata.push({
            skillId: "asitame",
            rarity: 1 /* White */,
            regions: spurtStart,
            samplePolicy: ImmediatePolicy,
            extraCondition: (_2) => true,
            effects: [{
              type: 31 /* Accel */,
              baseDuration: 3 / (course.distance / 1e3),
              modifier: Asitame.calcApproximateModifier(power, horse.strategy, course.distanceType)
            }]
          });
        }
      });
      return this;
    }
    withStaminaSyoubu() {
      this._extraSkillHooks.push((skilldata, horse, course) => {
        const stamina = skilldata.reduce((acc, sd) => {
          const staminaUp = sd.effects.find((ef) => ef.type == 2 /* StaminaUp */);
          if (staminaUp && sd.regions.length > 0 && sd.regions[0].start < 9999) {
            return acc + staminaUp.modifier;
          } else {
            return acc;
          }
        }, horse.rawStamina);
        if (stamina > 1200) {
          const spurtStart = new RegionList();
          spurtStart.push(new Region(CourseHelpers.phaseStart(course.distance, 2), course.distance));
          skilldata.push({
            skillId: "staminasyoubu",
            rarity: 1 /* White */,
            regions: spurtStart,
            samplePolicy: ImmediatePolicy,
            // TODO do current speed skills count toward reaching max speed or not?
            extraCondition: (s3) => s3.currentSpeed >= s3.lastSpurtSpeed,
            effects: [{
              type: 27 /* TargetSpeed */,
              baseDuration: 9999,
              modifier: StaminaSyoubu.calcApproximateModifier(stamina, course.distance)
            }]
          });
        }
      });
      return this;
    }
    addSkill(skillId) {
      this._skills.push(skillId);
      return this;
    }
    onSkillActivate(cb) {
      this._onSkillActivate = cb;
      return this;
    }
    onSkillDeactivate(cb) {
      this._onSkillDeactivate = cb;
      return this;
    }
    fork() {
      const clone2 = new _RaceSolverBuilder(this.nsamples);
      clone2._course = this._course;
      clone2._raceParams = Object.assign({}, this._raceParams);
      clone2._horse = this._horse;
      clone2._pacer = this._pacer;
      clone2._pacerSkills = this._pacerSkills.slice();
      clone2._rng = new Rule30CARng(this._rng.lo, this._rng.hi);
      clone2._parser = this._parser;
      clone2._skills = this._skills.slice();
      clone2._onSkillActivate = this._onSkillActivate;
      clone2._onSkillDeactivate = this._onSkillDeactivate;
      clone2._extraSkillHooks = this._extraSkillHooks.slice();
      return clone2;
    }
    *build() {
      let horse = buildBaseStats(this._horse, this._raceParams.mood);
      let solverRng = new Rule30CARng(this._rng.int32());
      let pacerRng = new Rule30CARng(this._rng.int32());
      const pacerHorse = this._pacer ? buildAdjustedStats(buildBaseStats(this._pacer, this._raceParams.mood), this._course, this._raceParams.groundCondition) : null;
      const wholeCourse = new RegionList();
      wholeCourse.push(new Region(0, this._course.distance));
      Object.freeze(wholeCourse);
      const makeSkill = buildSkillData.bind(null, horse, this._raceParams, this._course, wholeCourse, this._parser);
      const skilldata = this._skills.flatMap(makeSkill);
      this._extraSkillHooks.forEach((h3) => h3(skilldata, horse, this._course));
      const triggers = skilldata.map((sd) => sd.samplePolicy.sample(sd.regions, this.nsamples, this._rng));
      horse = buildAdjustedStats(horse, this._course, this._raceParams.groundCondition);
      for (let i4 = 0; i4 < this.nsamples; ++i4) {
        const skills = skilldata.map((sd, sdi) => ({
          skillId: sd.skillId,
          rarity: sd.rarity,
          trigger: triggers[sdi][i4 % triggers[sdi].length],
          extraCondition: sd.extraCondition,
          effects: sd.effects
        }));
        const backupPacerRng = new Rule30CARng(pacerRng.lo, pacerRng.hi);
        const backupSolverRng = new Rule30CARng(solverRng.lo, solverRng.hi);
        const pacer = pacerHorse ? new RaceSolver({
          horse: pacerHorse,
          course: this._course,
          hp: NoopHpPolicy,
          skills: this._pacerSkills,
          rng: pacerRng
        }) : null;
        const redo = yield new RaceSolver({
          horse,
          course: this._course,
          skills,
          pacer,
          hp: new GameHpPolicy(horse, this._course, this._raceParams.groundCondition, solverRng.int32()),
          rng: solverRng,
          onSkillActivate: this._onSkillActivate,
          onSkillDeactivate: this._onSkillDeactivate
        });
        if (redo) {
          --i4;
          pacerRng = backupPacerRng;
          solverRng = backupSolverRng;
        }
      }
    }
  };

  // ../components/Language.tsx
  var defaultLanguage = localStorage.getItem("language") || (navigator.language.startsWith("ja") ? "ja" : "en-ja");
  var Language = G(defaultLanguage);
  function useLanguage() {
    return q2(Language);
  }

  // ../../skilltool/tools/ConditionMatcher.ts
  var assert5 = require_assert().strict;
  function isCmpOperator(tree) {
    return "condition" in tree;
  }
  function assertIsCmpOperator(tree) {
    assert5(isCmpOperator(tree));
  }
  function assertIsLogicalOp(tree) {
    assert5("left" in tree && "right" in tree);
  }
  function flatten3(node, conds) {
    assertIsCmpOperator(node.right);
    conds.push(node.right);
    if (node.left instanceof AndOperator) {
      return flatten3(node.left, conds);
    }
    assertIsCmpOperator(node.left);
    conds.push(node.left);
    return conds;
  }
  function condMatcher(cond, node) {
    if (isCmpOperator(node)) {
      if ("argument" in cond) {
        return node.condition === cond.condition && node.argument == cond.argument && Object.getPrototypeOf(cond) === Object.getPrototypeOf(node);
      } else {
        return node.condition === cond;
      }
    }
    assertIsLogicalOp(node);
    return condMatcher(cond, node.left) || condMatcher(cond, node.right);
  }
  function andMatcher(conds, node) {
    if (node instanceof OrOperator) {
      const conds2 = conds.slice();
      return andMatcher(conds, node.left) || andMatcher(conds2, node.right);
    } else if (node instanceof AndOperator) {
      assertIsCmpOperator(node.right);
      const idx = conds.findIndex((c3) => condMatcher(c3, node.right));
      if (idx != -1) {
        conds.splice(idx, 1);
      }
      return conds.length == 0 || andMatcher(conds, node.left);
    } else {
      assertIsCmpOperator(node);
      return conds.length == 1 && condMatcher(conds[0], node);
    }
  }
  function treeMatch(match, tree) {
    switch (match.type) {
      case 2 /* Op */:
        if (match.op instanceof AndOperator) {
          return andMatcher(flatten3(match.op, []), tree);
        } else if (isCmpOperator(match.op)) {
          return condMatcher(match.op, tree);
        } else {
          throw new Error("doesn't support @ in search conditions");
        }
      case 1 /* Cond */:
        return condMatcher(match.cond, tree);
        break;
      case 0 /* Int */:
        throw new Error("doesn't support sole integer as search condition");
    }
  }
  var mockSamplePolicy = Object.freeze({
    sample(_0, _1) {
      assert5(false);
    },
    reconcile(_2) {
      return this;
    },
    reconcileAsap(_2) {
      return this;
    },
    reconcileLogNormalRandom(_2) {
      return this;
    },
    reconcileRandom(_2) {
      return this;
    },
    reconcileStraightRandom(_2) {
      return this;
    },
    reconcileAllCornerRandom(_2) {
      return this;
    }
  });
  var mockConditions = new Proxy({}, {
    get(cache, prop) {
      if (cache.hasOwnProperty(prop)) {
        return cache[prop];
      }
      return cache[prop] = { name: prop, samplePolicy: mockSamplePolicy };
    }
  });

  // ../components/Tooltip.tsx
  function Tooltip(props) {
    return /* @__PURE__ */ y("div", { class: `hasTooltip${props.tall ? " contentIsTall" : ""}` }, props.children, /* @__PURE__ */ y("div", { class: "tooltip" }, props.title, /* @__PURE__ */ y("span", { class: "arrow" })));
  }

  // skillnames.json
  var skillnames_default = { "100011": ["Shooting Star"], "100021": ["The View from the Lead Is Mine!"], "100031": ["Sky-High Teio Step"], "100041": ["Red Shift/LP1211-M"], "100051": ["Lights of Vaudeville"], "100061": ["Triumphant Pulse"], "100071": ["Anchors Aweigh!"], "100081": ["Cut and Drive!"], "100091": ["Resplendent Red Ace"], "100101": ["Shooting for Victory!"], "100111": ["Where There's a Will, There's a Way"], "100121": ["You and Me! One-on-One!"], "100131": ["The Duty of Dignity Calls"], "100141": ["Victoria por plancha \u2606"], "100151": ["This Dance Is for Vittoria!"], "100161": ["Shadow Break"], "100171": ["Behold Thine Emperor's Divine Might"], "100181": ["Blazing Pride"], "100201": ["Angling and Scheming"], "100231": ["\u2234win Q.E.D."], "100241": ["Flashy\u2606Landing"], "100261": ["G00 1st. F\u221E;"], "100271": ["Let's Pump Some Iron!"], "100301": ["Blue Rose Closer"], "100321": ["U=ma2"], "100351": ["Our Ticket to Win!"], "100371": ["Schwarzes Schwert"], "100381": ["#LookatCurren"], "100401": ["KEEP IT REAL."], "100411": ["Genius x Bakushin = Victory"], "100451": ["Pure Heart"], "100461": ["SPARKLY\u2606STARDOM"], "100501": ["Nemesis"], "100521": ["Super-Duper Climax"], "100561": ["I See Victory in My Future!"], "100581": ["I Never Goof Up!"], "100601": ["Just a Little Farther!"], "100611": ["Prideful King"], "10071": ["Warning Shot!"], "10081": ["Xceleration"], "10091": ["Red Ace"], "10111": ["Focused Mind"], "10141": ["Coraz\xF3n \u2606 Ardiente"], "10181": ["Empress's Pride"], "10241": ["1st Place Kiss\u2606"], "10271": ["Feel the Burn!"], "10321": ["Introduction to Physiology"], "10351": ["V Is for Victory!"], "10411": ["Class Rep + Speed = Bakushin"], "10451": ["Clear Heart"], "10521": ["Super-Duper Stoked"], "10561": ["Luck Be with Me!"], "10601": ["I Can Win Sometimes, Right?"], "10611": ["Call Me King"], "110011": ["Dazzl'n \u266A Diver"], "110031": ["Certain Victory"], "110041": ["A Kiss for Courage"], "110111": ["Superior Heal"], "110131": ["Legacy of the Strong"], "110141": ["Condor's Fury"], "110181": ["Eternal Moments"], "110241": ["Flowery\u2606Maneuver"], "110561": ["Bountiful Harvest"], "200011": ["Right-Handed \u25CE"], "200012": ["Right-Handed \u25CB"], "200013": ["Right-Handed \xD7"], "200021": ["Left-Handed \u25CE"], "200022": ["Left-Handed \u25CB"], "200023": ["Left-Handed \xD7"], "200031": ["Tokyo Racecourse \u25CE"], "200032": ["Tokyo Racecourse \u25CB"], "200033": ["Tokyo Racecourse \xD7"], "200041": ["Nakayama Racecourse \u25CE"], "200042": ["Nakayama Racecourse \u25CB"], "200043": ["Nakayama Racecourse \xD7"], "200051": ["Hanshin Racecourse \u25CE"], "200052": ["Hanshin Racecourse \u25CB"], "200053": ["Hanshin Racecourse \xD7"], "200061": ["Kyoto Racecourse \u25CE"], "200062": ["Kyoto Racecourse \u25CB"], "200063": ["Kyoto Racecourse \xD7"], "200071": ["Chukyo Racecourse \u25CE"], "200072": ["Chukyo Racecourse \u25CB"], "200073": ["Chukyo Racecourse \xD7"], "200081": ["Sapporo Racecourse \u25CE"], "200082": ["Sapporo Racecourse \u25CB"], "200083": ["Sapporo Racecourse \xD7"], "200091": ["Hakodate Racecourse \u25CE"], "200092": ["Hakodate Racecourse \u25CB"], "200093": ["Hakodate Racecourse \xD7"], "200101": ["Fukushima Racecourse \u25CE"], "200102": ["Fukushima Racecourse \u25CB"], "200103": ["Fukushima Racecourse \xD7"], "200111": ["Niigata Racecourse \u25CE"], "200112": ["Niigata Racecourse \u25CB"], "200113": ["Niigata Racecourse \xD7"], "200121": ["Kokura Racecourse \u25CE"], "200122": ["Kokura Racecourse \u25CB"], "200123": ["Kokura Racecourse \xD7"], "200131": ["Standard Distance \u25CE"], "200132": ["Standard Distance \u25CB"], "200133": ["Standard Distance \xD7"], "200141": ["Non-Standard Distance \u25CE"], "200142": ["Non-Standard Distance \u25CB"], "200143": ["Non-Standard Distance \xD7"], "200151": ["Firm Conditions \u25CE"], "200152": ["Firm Conditions \u25CB"], "200153": ["Firm Conditions \xD7"], "200161": ["Wet Conditions \u25CE"], "200162": ["Wet Conditions \u25CB"], "200163": ["Wet Conditions \xD7"], "200171": ["Spring Runner \u25CE"], "200172": ["Spring Runner \u25CB"], "200173": ["Spring Runner \xD7"], "200181": ["Summer Runner \u25CE"], "200182": ["Summer Runner \u25CB"], "200183": ["Summer Runner \xD7"], "200191": ["Fall Runner \u25CE"], "200192": ["Fall Runner \u25CB"], "200193": ["Fall Runner \xD7"], "200201": ["Winter Runner \u25CE"], "200202": ["Winter Runner \u25CB"], "200203": ["Winter Runner \xD7"], "200211": ["Sunny Days \u25CE"], "200212": ["Sunny Days \u25CB"], "200221": ["Cloudy Days \u25CE"], "200222": ["Cloudy Days \u25CB"], "200231": ["Rainy Days \u25CE"], "200232": ["Rainy Days \u25CB"], "200233": ["Rainy Days \xD7"], "200241": ["Snowy Days \u25CE"], "200242": ["Snowy Days \u25CB"], "200251": ["Inner Post Proficiency \u25CE"], "200252": ["Inner Post Proficiency \u25CB"], "200253": ["Inner Post Averseness"], "200261": ["Outer Post Proficiency \u25CE"], "200262": ["Outer Post Proficiency \u25CB"], "200263": ["Outer Post Averseness"], "200271": ["Maverick \u25CE"], "200272": ["Maverick \u25CB"], "200281": ["Competitive Spirit \u25CE"], "200282": ["Competitive Spirit \u25CB"], "200283": ["Wallflower"], "200291": ["Target in Sight \u25CE"], "200292": ["Target in Sight \u25CB"], "200301": ["Long Shot \u25CE"], "200302": ["Long Shot \u25CB"], "200311": ["G1 Averseness"], "200321": ["Paddock Fright"], "200331": ["Professor of Curvature"], "200332": ["Corner Adept \u25CB"], "200333": ["Corner Adept \xD7"], "200341": ["Corner Connoisseur"], "200342": ["Corner Acceleration \u25CB"], "200343": ["Corner Acceleration \xD7"], "200351": ["Swinging Maestro"], "200352": ["Corner Recovery \u25CB"], "200353": ["Corner Recovery \xD7"], "200361": ["Beeline Burst"], "200362": ["Straightaway Adept"], "200371": ["Rushing Gale!"], "200372": ["Straightaway Acceleration"], "200381": ["Breath of Fresh Air"], "200382": ["Straightaway Recovery"], "200391": ["Ramp Revulsion"], "200401": ["Packphobia"], "200411": ["Defeatist"], "200421": ["Reckless"], "200431": ["Concentration"], "200432": ["Focus"], "200433": ["Gatekept"], "200441": ["Iron Will"], "200442": ["Lay Low"], "200451": ["Center Stage"], "200452": ["Prudent Positioning"], "200461": ["It's On!"], "200462": ["Ramp Up"], "200471": ["Indomitable"], "200472": ["Pace Strategy"], "200481": ["Unruffled"], "200482": ["Calm in a Crowd"], "200491": ["No Stopping Me!"], "200492": ["Nimble Navigator"], "200501": ["Lane Legerdemain"], "200502": ["Go with the Flow"], "200511": ["In Body and Mind"], "200512": ["Homestretch Haste"], "200521": ["Running Idle"], "200531": ["Taking the Lead"], "200532": ["Early Lead"], "200541": ["Escape Artist"], "200542": ["Fast-Paced"], "200551": ["Unrestrained"], "200552": ["Final Push"], "200561": ["Calm and Collected"], "200562": ["Stamina to Spare"], "200571": ["Race Planner"], "200572": ["Preferred Position"], "200581": ["Speed Star"], "200582": ["Prepared to Pass"], "200591": ["Fast & Furious"], "200592": ["Position Pilfer"], "200601": ["On Your Left!"], "200602": ["Slick Surge"], "200611": ["Rising Dragon"], "200612": ["Outer Swell"], "200621": ["Sleeping Lion"], "200622": ["Standing By"], "200631": ["Sturm und Drang"], "200632": ["Masterful Gambit"], "200641": ["Encroaching Shadow"], "200642": ["Straightaway Spurt"], "200651": ["Turbo Sprint"], "200652": ["Sprinting Gear"], "200662": ["Wait-and-See"], "200671": ["Blinding Flash"], "200672": ["Gap Closer"], "200681": ["Mile Maven"], "200682": ["Productive Plan"], "200691": ["Keen Eye"], "200692": ["Watchful Eye"], "200701": ["Furious Feat"], "200702": ["Updrafters"], "200711": ["Trackblazer"], "200712": ["Rosy Outlook"], "200721": ["Killer Tunes"], "200722": ["Up-Tempo"], "200731": ["Unyielding"], "200732": ["Steadfast"], "200741": ["Cooldown"], "200742": ["Deep Breaths"], "200751": ["Innate Experience"], "200752": ["Inside Scoop"], "200761": ["Adrenaline Rush"], "200762": ["Extra Tank"], "200771": ["Trick (Front)"], "200781": ["Trick (Rear)"], "200791": ["Frenzied Front Runners"], "200801": ["Frenzied Pace Chasers"], "200811": ["Frenzied Late Surgers"], "200821": ["Frenzied End Closers"], "200831": ["Subdued Front Runners"], "200841": ["Flustered Front Runners"], "200851": ["Hesitant Front Runners"], "200861": ["Subdued Pace Chasers"], "200871": ["Flustered Pace Chasers"], "200881": ["Hesitant Pace Chasers"], "200891": ["Subdued Late Surgers"], "200901": ["Flustered Late Surgers"], "200911": ["Hesitant Late Surgers"], "200921": ["Subdued End Closers"], "200931": ["Flustered End Closers"], "200941": ["Hesitant End Closers"], "200951": ["Oi Racecourse \u25CE"], "200952": ["Oi Racecourse \u25CB"], "200953": ["Oi Racecourse \xD7"], "200961": ["Sprint Straightaways \u25CE"], "200962": ["Sprint Straightaways \u25CB"], "200971": ["Sprint Corners \u25CE"], "200972": ["Sprint Corners \u25CB"], "200981": ["Staggering Lead"], "200982": ["Huge Lead"], "200991": ["Plan X"], "200992": ["Countermeasure"], "201001": ["Perfect Prep!"], "201002": ["Meticulous Measures"], "201011": ["Adored by All"], "201012": ["Intimidate"], "201021": ["You've Got No Shot"], "201022": ["Stop Right There!"], "201031": ["Mile Straightaways \u25CE"], "201032": ["Mile Straightaways \u25CB"], "201041": ["Mile Corners \u25CE"], "201042": ["Mile Corners \u25CB"], "201051": ["Changing Gears"], "201052": ["Shifting Gears"], "201061": ["Step on the Gas!"], "201062": ["Acceleration"], "201071": ["Big-Sisterly"], "201072": ["Unyielding Spirit"], "201081": ["Greed for Speed"], "201082": ["Speed Eater"], "201091": ["Battle Formation"], "201092": ["Opening Gambit"], "201101": ["Medium Straightaways \u25CE"], "201102": ["Medium Straightaways \u25CB"], "201111": ["Medium Corners \u25CE"], "201112": ["Medium Corners \u25CB"], "201121": ["Clairvoyance"], "201122": ["Hawkeye"], "201131": ["Lightning Step"], "201132": ["Thunderbolt Step"], "201141": ["Miraculous Step"], "201142": ["Soft Step"], "201151": ["Dominator"], "201152": ["Tether"], "201161": ["Mystifying Murmur"], "201162": ["Murmur"], "201171": ["Long Straightaways \u25CE"], "201172": ["Long Straightaways \u25CB"], "201181": ["Long Corners \u25CE"], "201182": ["Long Corners \u25CB"], "201191": ["Vanguard Spirit"], "201192": ["Keeping the Lead"], "201202": ["Passing Pro"], "201211": ["Overwhelming Pressure"], "201212": ["Pressure"], "201221": ["Stamina Siphon"], "201222": ["Stamina Eater"], "201231": ["Illusionist"], "201232": ["Smoke Screen"], "201241": ["Front Runner Straightaways \u25CE"], "201242": ["Front Runner Straightaways \u25CB"], "201251": ["Front Runner Corners \u25CE"], "201252": ["Front Runner Corners \u25CB"], "201261": ["Sixth Sense"], "201262": ["Dodging Danger"], "201272": ["Leader's Pride"], "201281": ["Restless"], "201282": ["Moxie"], "201291": ["Reignition"], "201292": ["Second Wind"], "201302": ["Restart"], "201311": ["Pace Chaser Straightaways \u25CE"], "201312": ["Pace Chaser Straightaways \u25CB"], "201321": ["Pace Chaser Corners \u25CE"], "201322": ["Pace Chaser Corners \u25CB"], "201331": ["Technician"], "201332": ["Shrewd Step"], "201341": ["Determined Descent"], "201342": ["Straight Descent"], "201351": ["Gourmand"], "201352": ["Hydrate"], "201361": ["Shatterproof"], "201362": ["Tactical Tweak"], "201371": ["Dazzling Disorientation"], "201372": ["Disorient"], "201381": ["Late Surger Straightaways \u25CE"], "201382": ["Late Surger Straightaways \u25CB"], "201391": ["Later Surger Corners \u25CE"], "201392": ["Late Surger Corners \u25CB"], "201401": ["Hard Worker"], "201402": ["Fighter"], "201411": ["15,000,000 CC"], "201412": ["1,500,000 CC"], "201421": ["Relax"], "201422": ["A Small Breather"], "201431": ["The Bigger Picture"], "201432": ["Studious"], "201441": ["All-Seeing Eyes"], "201442": ["Sharp Gaze"], "201451": ["End Closer Straightaways \u25CE"], "201452": ["End Closer Straightaways \u25CB"], "201461": ["End Closer Corners \u25CE"], "201462": ["End Closer Corners \u25CB"], "201471": ["The Coast Is Clear!"], "201472": ["I Can See Right Through You"], "201481": ["Go-Home Specialist"], "201482": ["After-School Stroll"], "201491": ["Serenity"], "201492": ["Levelheaded"], "201501": ["Crusader"], "201502": ["Strategist"], "201511": ["Petrifying Gaze"], "201512": ["Intense Gaze"], "201521": ["Front Runner Savvy \u25CE"], "201522": ["Front Runner Savvy \u25CB"], "201531": ["Pace Chaser Savvy \u25CE"], "201532": ["Pace Chaser Savvy \u25CB"], "201541": ["Late Surger Savvy \u25CE"], "201542": ["Late Surger Savvy \u25CB"], "201551": ["End Closer Savvy \u25CE"], "201552": ["End Closer Savvy \u25CB"], "201561": ["Super Lucky Seven"], "201562": ["Lucky Seven"], "201571": ["Triple 7s"], "201581": ["Highlander"], "201591": ["Uma Stan"], "201601": ["Groundwork"], "201611": ["Tail Held High"], "201621": ["Shake It Out"], "201631": ["Sympathy"], "201641": ["Lone Wolf"], "201651": ["Slipstream"], "201661": ["Playtime's Over!"], "201671": ["Trending in the Charts!"], "201672": ["Top Pick"], "210011": ["Burning Spirit SPD"], "210012": ["Ignited Spirit SPD"], "210021": ["Burning Spirit STA"], "210022": ["Ignited Spirit STA"], "210031": ["Burning Spirit PWR"], "210032": ["Ignited Spirit PWR"], "210041": ["Burning Spirit GUTS"], "210042": ["Ignited Spirit GUTS"], "210051": ["Burning Spirit WIT"], "210052": ["Ignited Spirit WIT"], "300011": ["Unquenched Thirst"], "300021": ["Unchanging"], "900011": ["Shooting Star"], "900021": ["The View from the Lead Is Mine!"], "900031": ["Sky-High Teio Step"], "900041": ["Red Shift/LP1211-M"], "900051": ["Lights of Vaudeville"], "900061": ["Triumphant Pulse"], "900071": ["Anchors Aweigh!"], "900081": ["Cut and Drive!"], "900091": ["Resplendent Red Ace"], "900101": ["Shooting for Victory!"], "900111": ["Where There's a Will, There's a Way"], "900121": ["You and Me! One-on-One!"], "900131": ["The Duty of Dignity Calls"], "900141": ["Victoria por plancha \u2606"], "900151": ["This Dance Is for Vittoria!"], "900161": ["Shadow Break"], "900171": ["Behold Thine Emperor's Divine Might"], "900181": ["Blazing Pride"], "900201": ["Angling and Scheming"], "900231": ["\u2234win Q.E.D."], "900241": ["Flashy\u2606Landing"], "900261": ["G00 1st. F\u221E;"], "900271": ["Let's Pump Some Iron!"], "900301": ["Blue Rose Closer"], "900321": ["U=ma2"], "900351": ["Our Ticket to Win!"], "900371": ["Schwarzes Schwert"], "900381": ["#LookatCurren"], "900401": ["KEEP IT REAL."], "900411": ["Genius x Bakushin = Victory"], "900451": ["Pure Heart"], "900461": ["SPARKLY\u2606STARDOM"], "900501": ["Nemesis"], "900521": ["Super-Duper Climax"], "900561": ["I See Victory in My Future!"], "900581": ["I Never Goof Up!"], "900601": ["Just a Little Farther!"], "900611": ["Prideful King"], "90071": ["Warning Shot! (inherited)"], "90081": ["Xceleration (inherited)"], "90091": ["Red Ace (inherited)"], "90111": ["Focused Mind (inherited)"], "90141": ["Coraz\xF3n \u2606 Ardiente (inherited)"], "90181": ["Empress's Pride (inherited)"], "90241": ["1st Place Kiss\u2606 (inherited)"], "90271": ["Feel the Burn! (inherited)"], "90321": ["Introduction to Physiology (inherited)"], "90351": ["V Is for Victory! (inherited)"], "90411": ["Class Rep + Speed = Bakushin (inherited)"], "90451": ["Clear Heart (inherited)"], "90521": ["Super-Duper Stoked (inherited)"], "90561": ["Luck Be with Me! (inherited)"], "90601": ["I Can Win Sometimes, Right? (inherited)"], "90611": ["Call Me King (inherited)"], "910011": ["Dazzl'n \u266A Diver"], "910031": ["Certain Victory"], "910041": ["A Kiss for Courage"], "910111": ["Superior Heal"], "910131": ["Legacy of the Strong"], "910141": ["Condor's Fury"], "910181": ["Eternal Moments"], "910241": ["Flowery\u2606Maneuver"], "910561": ["Bountiful Harvest"] };

  // skill_meta.json
  var skill_meta_default = { "100011": { baseCost: 0, groupId: 10001, iconId: "20013", order: 10 }, "100021": { baseCost: 0, groupId: 10002, iconId: "20013", order: 10 }, "100031": { baseCost: 0, groupId: 10003, iconId: "20013", order: 10 }, "100041": { baseCost: 0, groupId: 10004, iconId: "20043", order: 10 }, "100061": { baseCost: 0, groupId: 10006, iconId: "20013", order: 10 }, "100071": { baseCost: 0, groupId: 10007, iconId: "20013", order: 10 }, "100081": { baseCost: 0, groupId: 10008, iconId: "20013", order: 10 }, "100091": { baseCost: 0, groupId: 10009, iconId: "20013", order: 10 }, "100101": { baseCost: 0, groupId: 10010, iconId: "20043", order: 10 }, "100111": { baseCost: 0, groupId: 10011, iconId: "20013", order: 10 }, "100131": { baseCost: 0, groupId: 10013, iconId: "20013", order: 10 }, "100141": { baseCost: 0, groupId: 10014, iconId: "20013", order: 10 }, "100151": { baseCost: 0, groupId: 10015, iconId: "20013", order: 10 }, "100171": { baseCost: 0, groupId: 10017, iconId: "20013", order: 10 }, "100181": { baseCost: 0, groupId: 10018, iconId: "20013", order: 10 }, "100231": { baseCost: 0, groupId: 10023, iconId: "20013", order: 10 }, "100241": { baseCost: 0, groupId: 10024, iconId: "20013", order: 10 }, "100261": { baseCost: 0, groupId: 10026, iconId: "20013", order: 10 }, "100271": { baseCost: 0, groupId: 10027, iconId: "20043", order: 10 }, "100301": { baseCost: 0, groupId: 10030, iconId: "20013", order: 10 }, "100321": { baseCost: 0, groupId: 10032, iconId: "20023", order: 10 }, "100351": { baseCost: 0, groupId: 10035, iconId: "20013", order: 10 }, "100411": { baseCost: 0, groupId: 10041, iconId: "20013", order: 10 }, "100451": { baseCost: 0, groupId: 10045, iconId: "20023", order: 10 }, "100521": { baseCost: 0, groupId: 10052, iconId: "20023", order: 10 }, "100561": { baseCost: 0, groupId: 10056, iconId: "20013", order: 10 }, "100601": { baseCost: 0, groupId: 10060, iconId: "20013", order: 10 }, "100611": { baseCost: 0, groupId: 10061, iconId: "20013", order: 10 }, "10071": { baseCost: 0, groupId: 1007, iconId: "20013", order: 10 }, "10081": { baseCost: 0, groupId: 1008, iconId: "20013", order: 10 }, "10091": { baseCost: 0, groupId: 1009, iconId: "20013", order: 10 }, "10111": { baseCost: 0, groupId: 1011, iconId: "20013", order: 10 }, "10141": { baseCost: 0, groupId: 1014, iconId: "20013", order: 10 }, "10181": { baseCost: 0, groupId: 1018, iconId: "20013", order: 10 }, "10241": { baseCost: 0, groupId: 1024, iconId: "20013", order: 10 }, "10271": { baseCost: 0, groupId: 1027, iconId: "20043", order: 10 }, "10321": { baseCost: 0, groupId: 1032, iconId: "20023", order: 10 }, "10351": { baseCost: 0, groupId: 1035, iconId: "20013", order: 10 }, "10411": { baseCost: 0, groupId: 1041, iconId: "20013", order: 10 }, "10451": { baseCost: 0, groupId: 1045, iconId: "20023", order: 10 }, "10521": { baseCost: 0, groupId: 1052, iconId: "20023", order: 10 }, "10561": { baseCost: 0, groupId: 1056, iconId: "20013", order: 10 }, "10601": { baseCost: 0, groupId: 1060, iconId: "20013", order: 10 }, "10611": { baseCost: 0, groupId: 1061, iconId: "20013", order: 10 }, "200011": { baseCost: 110, groupId: 20001, iconId: "10011", order: 1e3 }, "200012": { baseCost: 90, groupId: 20001, iconId: "10011", order: 1010 }, "200013": { baseCost: 50, groupId: 20001, iconId: "10014", order: 1020 }, "200021": { baseCost: 110, groupId: 20002, iconId: "10011", order: 1030 }, "200022": { baseCost: 90, groupId: 20002, iconId: "10011", order: 1040 }, "200023": { baseCost: 50, groupId: 20002, iconId: "10014", order: 1050 }, "200031": { baseCost: 110, groupId: 20003, iconId: "10021", order: 1060 }, "200032": { baseCost: 90, groupId: 20003, iconId: "10021", order: 1070 }, "200033": { baseCost: 50, groupId: 20003, iconId: "10024", order: 1080 }, "200041": { baseCost: 110, groupId: 20004, iconId: "10021", order: 1090 }, "200042": { baseCost: 90, groupId: 20004, iconId: "10021", order: 1100 }, "200043": { baseCost: 50, groupId: 20004, iconId: "10024", order: 1110 }, "200051": { baseCost: 110, groupId: 20005, iconId: "10021", order: 1120 }, "200052": { baseCost: 90, groupId: 20005, iconId: "10021", order: 1130 }, "200053": { baseCost: 50, groupId: 20005, iconId: "10024", order: 1140 }, "200061": { baseCost: 110, groupId: 20006, iconId: "10021", order: 1150 }, "200062": { baseCost: 90, groupId: 20006, iconId: "10021", order: 1160 }, "200063": { baseCost: 50, groupId: 20006, iconId: "10024", order: 1170 }, "200071": { baseCost: 110, groupId: 20007, iconId: "10021", order: 1180 }, "200072": { baseCost: 90, groupId: 20007, iconId: "10021", order: 1190 }, "200073": { baseCost: 50, groupId: 20007, iconId: "10024", order: 1200 }, "200081": { baseCost: 90, groupId: 20008, iconId: "10021", order: 1210 }, "200082": { baseCost: 70, groupId: 20008, iconId: "10021", order: 1220 }, "200083": { baseCost: 40, groupId: 20008, iconId: "10024", order: 1230 }, "200091": { baseCost: 90, groupId: 20009, iconId: "10021", order: 1240 }, "200092": { baseCost: 70, groupId: 20009, iconId: "10021", order: 1250 }, "200093": { baseCost: 40, groupId: 20009, iconId: "10024", order: 1260 }, "200101": { baseCost: 90, groupId: 20010, iconId: "10021", order: 1270 }, "200102": { baseCost: 70, groupId: 20010, iconId: "10021", order: 1280 }, "200103": { baseCost: 40, groupId: 20010, iconId: "10024", order: 1290 }, "200111": { baseCost: 90, groupId: 20011, iconId: "10021", order: 1300 }, "200112": { baseCost: 70, groupId: 20011, iconId: "10021", order: 1310 }, "200113": { baseCost: 40, groupId: 20011, iconId: "10024", order: 1320 }, "200121": { baseCost: 90, groupId: 20012, iconId: "10021", order: 1330 }, "200122": { baseCost: 70, groupId: 20012, iconId: "10021", order: 1340 }, "200123": { baseCost: 40, groupId: 20012, iconId: "10024", order: 1350 }, "200131": { baseCost: 110, groupId: 20013, iconId: "10021", order: 1390 }, "200132": { baseCost: 90, groupId: 20013, iconId: "10021", order: 1400 }, "200133": { baseCost: 50, groupId: 20013, iconId: "10024", order: 1410 }, "200141": { baseCost: 110, groupId: 20014, iconId: "10021", order: 1420 }, "200142": { baseCost: 90, groupId: 20014, iconId: "10021", order: 1430 }, "200143": { baseCost: 50, groupId: 20014, iconId: "10024", order: 1440 }, "200151": { baseCost: 110, groupId: 20015, iconId: "10031", order: 1450 }, "200152": { baseCost: 90, groupId: 20015, iconId: "10031", order: 1460 }, "200153": { baseCost: 50, groupId: 20015, iconId: "10034", order: 1470 }, "200161": { baseCost: 110, groupId: 20016, iconId: "10031", order: 1480 }, "200162": { baseCost: 90, groupId: 20016, iconId: "10031", order: 1490 }, "200163": { baseCost: 50, groupId: 20016, iconId: "10034", order: 1500 }, "200171": { baseCost: 110, groupId: 20017, iconId: "10011", order: 1510 }, "200172": { baseCost: 90, groupId: 20017, iconId: "10011", order: 1520 }, "200173": { baseCost: 50, groupId: 20017, iconId: "10014", order: 1530 }, "200181": { baseCost: 110, groupId: 20018, iconId: "10011", order: 1540 }, "200182": { baseCost: 90, groupId: 20018, iconId: "10011", order: 1550 }, "200183": { baseCost: 50, groupId: 20018, iconId: "10014", order: 1560 }, "200191": { baseCost: 110, groupId: 20019, iconId: "10011", order: 1570 }, "200192": { baseCost: 90, groupId: 20019, iconId: "10011", order: 1580 }, "200193": { baseCost: 50, groupId: 20019, iconId: "10014", order: 1590 }, "200201": { baseCost: 110, groupId: 20020, iconId: "10011", order: 1600 }, "200202": { baseCost: 90, groupId: 20020, iconId: "10011", order: 1610 }, "200203": { baseCost: 50, groupId: 20020, iconId: "10014", order: 1620 }, "200211": { baseCost: 110, groupId: 20021, iconId: "10041", order: 1630 }, "200212": { baseCost: 90, groupId: 20021, iconId: "10041", order: 1640 }, "200221": { baseCost: 110, groupId: 20022, iconId: "10041", order: 1650 }, "200222": { baseCost: 90, groupId: 20022, iconId: "10041", order: 1660 }, "200231": { baseCost: 110, groupId: 20023, iconId: "10041", order: 1670 }, "200232": { baseCost: 90, groupId: 20023, iconId: "10041", order: 1680 }, "200233": { baseCost: 50, groupId: 20023, iconId: "10044", order: 1690 }, "200241": { baseCost: 110, groupId: 20024, iconId: "10041", order: 1700 }, "200242": { baseCost: 90, groupId: 20024, iconId: "10041", order: 1710 }, "200251": { baseCost: 110, groupId: 20025, iconId: "10051", order: 1720 }, "200252": { baseCost: 90, groupId: 20025, iconId: "10051", order: 1730 }, "200253": { baseCost: 50, groupId: 20025, iconId: "10054", order: 1740 }, "200261": { baseCost: 110, groupId: 20026, iconId: "10011", order: 1750 }, "200262": { baseCost: 90, groupId: 20026, iconId: "10011", order: 1760 }, "200263": { baseCost: 50, groupId: 20026, iconId: "10014", order: 1770 }, "200271": { baseCost: 110, groupId: 20027, iconId: "10011", order: 1780 }, "200272": { baseCost: 90, groupId: 20027, iconId: "10011", order: 1790 }, "200281": { baseCost: 110, groupId: 20028, iconId: "10031", order: 1800 }, "200282": { baseCost: 90, groupId: 20028, iconId: "10031", order: 1810 }, "200283": { baseCost: 50, groupId: 20028, iconId: "10034", order: 1820 }, "200291": { baseCost: 110, groupId: 20029, iconId: "10041", order: 1830 }, "200292": { baseCost: 90, groupId: 20029, iconId: "10041", order: 1840 }, "200301": { baseCost: 110, groupId: 20030, iconId: "10011", order: 1850 }, "200302": { baseCost: 90, groupId: 20030, iconId: "10011", order: 1860 }, "200311": { baseCost: 50, groupId: 20031, iconId: "10014", order: 1870 }, "200321": { baseCost: 50, groupId: 20032, iconId: "10024", order: 1880 }, "200331": { baseCost: 180, groupId: 20033, iconId: "20012", order: 1890 }, "200332": { baseCost: 180, groupId: 20033, iconId: "20011", order: 1900 }, "200333": { baseCost: 100, groupId: 20033, iconId: "20014", order: 1910 }, "200341": { baseCost: 180, groupId: 20034, iconId: "20042", order: 1920 }, "200342": { baseCost: 180, groupId: 20034, iconId: "20041", order: 1930 }, "200343": { baseCost: 100, groupId: 20034, iconId: "20044", order: 1940 }, "200351": { baseCost: 170, groupId: 20035, iconId: "20022", order: 1950 }, "200352": { baseCost: 170, groupId: 20035, iconId: "20021", order: 1960 }, "200353": { baseCost: 100, groupId: 20035, iconId: "20024", order: 1970 }, "200361": { baseCost: 170, groupId: 20036, iconId: "20012", order: 1980 }, "200362": { baseCost: 170, groupId: 20036, iconId: "20011", order: 1990 }, "200371": { baseCost: 170, groupId: 20037, iconId: "20042", order: 2e3 }, "200372": { baseCost: 170, groupId: 20037, iconId: "20041", order: 2010 }, "200381": { baseCost: 170, groupId: 20038, iconId: "20022", order: 2020 }, "200382": { baseCost: 170, groupId: 20038, iconId: "20021", order: 2030 }, "200391": { baseCost: 100, groupId: 20039, iconId: "20024", order: 2040 }, "200401": { baseCost: 100, groupId: 20040, iconId: "20024", order: 2050 }, "200411": { baseCost: 100, groupId: 20041, iconId: "20014", order: 2060 }, "200421": { baseCost: 100, groupId: 20042, iconId: "20014", order: 2070 }, "200431": { baseCost: 140, groupId: 20043, iconId: "20062", order: 2080 }, "200432": { baseCost: 140, groupId: 20043, iconId: "20061", order: 2090 }, "200433": { baseCost: 70, groupId: 20043, iconId: "20064", order: 2100 }, "200441": { baseCost: 160, groupId: 20044, iconId: "20022", order: 2110 }, "200442": { baseCost: 160, groupId: 20044, iconId: "20021", order: 2120 }, "200451": { baseCost: 120, groupId: 20045, iconId: "20052", order: 2130 }, "200452": { baseCost: 120, groupId: 20045, iconId: "20051", order: 2140 }, "200461": { baseCost: 170, groupId: 20046, iconId: "20012", order: 2150 }, "200462": { baseCost: 170, groupId: 20046, iconId: "20011", order: 2160 }, "200471": { baseCost: 170, groupId: 20047, iconId: "20022", order: 2170 }, "200472": { baseCost: 170, groupId: 20047, iconId: "20021", order: 2180 }, "200481": { baseCost: 170, groupId: 20048, iconId: "20022", order: 2190 }, "200482": { baseCost: 170, groupId: 20048, iconId: "20021", order: 2200 }, "200491": { baseCost: 150, groupId: 20049, iconId: "20042", order: 2210 }, "200492": { baseCost: 150, groupId: 20049, iconId: "20041", order: 2220 }, "200501": { baseCost: 120, groupId: 20050, iconId: "20052", order: 2230 }, "200502": { baseCost: 120, groupId: 20050, iconId: "20051", order: 2240 }, "200511": { baseCost: 170, groupId: 20051, iconId: "20012", order: 2250 }, "200512": { baseCost: 170, groupId: 20051, iconId: "20011", order: 2260 }, "200521": { baseCost: 100, groupId: 20052, iconId: "20024", order: 2270 }, "200531": { baseCost: 120, groupId: 20053, iconId: "20042", order: 2280 }, "200532": { baseCost: 120, groupId: 20053, iconId: "20041", order: 2290 }, "200541": { baseCost: 180, groupId: 20054, iconId: "20012", order: 2300 }, "200542": { baseCost: 180, groupId: 20054, iconId: "20011", order: 2310 }, "200551": { baseCost: 180, groupId: 20055, iconId: "20042", order: 2320 }, "200552": { baseCost: 180, groupId: 20055, iconId: "20041", order: 2330 }, "200561": { baseCost: 180, groupId: 20056, iconId: "20022", order: 2340 }, "200562": { baseCost: 180, groupId: 20056, iconId: "20021", order: 2350 }, "200571": { baseCost: 180, groupId: 20057, iconId: "20022", order: 2360 }, "200572": { baseCost: 180, groupId: 20057, iconId: "20021", order: 2370 }, "200581": { baseCost: 180, groupId: 20058, iconId: "20012", order: 2380 }, "200582": { baseCost: 180, groupId: 20058, iconId: "20011", order: 2390 }, "200591": { baseCost: 180, groupId: 20059, iconId: "20012", order: 2400 }, "200592": { baseCost: 180, groupId: 20059, iconId: "20011", order: 2410 }, "200601": { baseCost: 180, groupId: 20060, iconId: "20042", order: 2420 }, "200602": { baseCost: 180, groupId: 20060, iconId: "20041", order: 2430 }, "200611": { baseCost: 180, groupId: 20061, iconId: "20012", order: 2440 }, "200612": { baseCost: 180, groupId: 20061, iconId: "20011", order: 2450 }, "200621": { baseCost: 180, groupId: 20062, iconId: "20022", order: 2460 }, "200622": { baseCost: 180, groupId: 20062, iconId: "20021", order: 2470 }, "200631": { baseCost: 180, groupId: 20063, iconId: "20012", order: 2480 }, "200632": { baseCost: 180, groupId: 20063, iconId: "20011", order: 2490 }, "200641": { baseCost: 180, groupId: 20064, iconId: "20042", order: 2500 }, "200642": { baseCost: 180, groupId: 20064, iconId: "20041", order: 2510 }, "200651": { baseCost: 160, groupId: 20065, iconId: "20042", order: 2520 }, "200652": { baseCost: 160, groupId: 20065, iconId: "20041", order: 2530 }, "200662": { baseCost: 160, groupId: 20066, iconId: "20021", order: 2550 }, "200671": { baseCost: 160, groupId: 20067, iconId: "20012", order: 2560 }, "200672": { baseCost: 160, groupId: 20067, iconId: "20011", order: 2570 }, "200681": { baseCost: 160, groupId: 20068, iconId: "20012", order: 2580 }, "200682": { baseCost: 160, groupId: 20068, iconId: "20011", order: 2590 }, "200691": { baseCost: 160, groupId: 20069, iconId: "20022", order: 2600 }, "200692": { baseCost: 160, groupId: 20069, iconId: "20021", order: 2610 }, "200701": { baseCost: 160, groupId: 20070, iconId: "20042", order: 2620 }, "200702": { baseCost: 160, groupId: 20070, iconId: "20041", order: 2630 }, "200711": { baseCost: 160, groupId: 20071, iconId: "20022", order: 2640 }, "200712": { baseCost: 160, groupId: 20071, iconId: "20021", order: 2650 }, "200721": { baseCost: 160, groupId: 20072, iconId: "20012", order: 2660 }, "200722": { baseCost: 160, groupId: 20072, iconId: "20011", order: 2670 }, "200731": { baseCost: 160, groupId: 20073, iconId: "20012", order: 2680 }, "200732": { baseCost: 160, groupId: 20073, iconId: "20011", order: 2690 }, "200741": { baseCost: 160, groupId: 20074, iconId: "20022", order: 2700 }, "200742": { baseCost: 160, groupId: 20074, iconId: "20021", order: 2710 }, "200751": { baseCost: 160, groupId: 20075, iconId: "20012", order: 2720 }, "200752": { baseCost: 160, groupId: 20075, iconId: "20011", order: 2730 }, "200761": { baseCost: 160, groupId: 20076, iconId: "20022", order: 2740 }, "200762": { baseCost: 160, groupId: 20076, iconId: "20021", order: 2750 }, "200771": { baseCost: 140, groupId: 20077, iconId: "30051", order: 2760 }, "200781": { baseCost: 140, groupId: 20078, iconId: "30051", order: 2770 }, "200791": { baseCost: 130, groupId: 20079, iconId: "30041", order: 2780 }, "200801": { baseCost: 130, groupId: 20080, iconId: "30041", order: 2790 }, "200811": { baseCost: 130, groupId: 20081, iconId: "30041", order: 2800 }, "200821": { baseCost: 130, groupId: 20082, iconId: "30041", order: 2810 }, "200831": { baseCost: 130, groupId: 20083, iconId: "30051", order: 2820 }, "200841": { baseCost: 130, groupId: 20084, iconId: "30051", order: 2830 }, "200851": { baseCost: 130, groupId: 20085, iconId: "30011", order: 2840 }, "200861": { baseCost: 130, groupId: 20086, iconId: "30051", order: 2850 }, "200871": { baseCost: 130, groupId: 20087, iconId: "30051", order: 2860 }, "200881": { baseCost: 130, groupId: 20088, iconId: "30011", order: 2870 }, "200891": { baseCost: 130, groupId: 20089, iconId: "30051", order: 2880 }, "200901": { baseCost: 130, groupId: 20090, iconId: "30051", order: 2890 }, "200911": { baseCost: 130, groupId: 20091, iconId: "30011", order: 2900 }, "200921": { baseCost: 130, groupId: 20092, iconId: "30051", order: 2910 }, "200931": { baseCost: 130, groupId: 20093, iconId: "30051", order: 2920 }, "200941": { baseCost: 130, groupId: 20094, iconId: "30011", order: 2930 }, "200951": { baseCost: 110, groupId: 20095, iconId: "10021", order: 1360 }, "200952": { baseCost: 90, groupId: 20095, iconId: "10021", order: 1370 }, "200953": { baseCost: 50, groupId: 20095, iconId: "10024", order: 1380 }, "200961": { baseCost: 110, groupId: 20096, iconId: "20011", order: 3e4 }, "200962": { baseCost: 100, groupId: 20096, iconId: "20011", order: 30001 }, "200971": { baseCost: 110, groupId: 20097, iconId: "20011", order: 30002 }, "200972": { baseCost: 100, groupId: 20097, iconId: "20011", order: 30003 }, "200981": { baseCost: 170, groupId: 20098, iconId: "20012", order: 30004 }, "200982": { baseCost: 170, groupId: 20098, iconId: "20011", order: 30005 }, "200991": { baseCost: 160, groupId: 20099, iconId: "20042", order: 30006 }, "200992": { baseCost: 160, groupId: 20099, iconId: "20041", order: 30007 }, "201001": { baseCost: 140, groupId: 20100, iconId: "20052", order: 30008 }, "201002": { baseCost: 140, groupId: 20100, iconId: "20051", order: 30009 }, "201012": { baseCost: 170, groupId: 20101, iconId: "30011", order: 30011 }, "201021": { baseCost: 170, groupId: 20102, iconId: "30052", order: 30012 }, "201022": { baseCost: 170, groupId: 20102, iconId: "30051", order: 30013 }, "201031": { baseCost: 110, groupId: 20103, iconId: "20011", order: 30014 }, "201032": { baseCost: 100, groupId: 20103, iconId: "20011", order: 30015 }, "201041": { baseCost: 110, groupId: 20104, iconId: "20011", order: 30016 }, "201042": { baseCost: 100, groupId: 20104, iconId: "20011", order: 30017 }, "201051": { baseCost: 160, groupId: 20105, iconId: "20012", order: 30018 }, "201052": { baseCost: 160, groupId: 20105, iconId: "20011", order: 30019 }, "201061": { baseCost: 160, groupId: 20106, iconId: "20042", order: 30020 }, "201062": { baseCost: 160, groupId: 20106, iconId: "20041", order: 30021 }, "201071": { baseCost: 120, groupId: 20107, iconId: "20012", order: 30022 }, "201072": { baseCost: 120, groupId: 20107, iconId: "20011", order: 30023 }, "201081": { baseCost: 160, groupId: 20108, iconId: "30012", order: 30024 }, "201082": { baseCost: 160, groupId: 20108, iconId: "30011", order: 30025 }, "201091": { baseCost: 160, groupId: 20109, iconId: "30022", order: 30026 }, "201092": { baseCost: 160, groupId: 20109, iconId: "30021", order: 30027 }, "201101": { baseCost: 110, groupId: 20110, iconId: "20011", order: 30028 }, "201102": { baseCost: 100, groupId: 20110, iconId: "20011", order: 30029 }, "201111": { baseCost: 110, groupId: 20111, iconId: "20011", order: 30030 }, "201112": { baseCost: 100, groupId: 20111, iconId: "20011", order: 30031 }, "201121": { baseCost: 110, groupId: 20112, iconId: "20092", order: 30032 }, "201122": { baseCost: 110, groupId: 20112, iconId: "20091", order: 30033 }, "201131": { baseCost: 140, groupId: 20113, iconId: "20052", order: 30034 }, "201132": { baseCost: 140, groupId: 20113, iconId: "20051", order: 30035 }, "201141": { baseCost: 160, groupId: 20114, iconId: "20022", order: 30036 }, "201142": { baseCost: 160, groupId: 20114, iconId: "20021", order: 30037 }, "201151": { baseCost: 160, groupId: 20115, iconId: "30012", order: 30038 }, "201152": { baseCost: 160, groupId: 20115, iconId: "30011", order: 30039 }, "201161": { baseCost: 160, groupId: 20116, iconId: "30052", order: 30040 }, "201162": { baseCost: 160, groupId: 20116, iconId: "30051", order: 30041 }, "201171": { baseCost: 110, groupId: 20117, iconId: "20011", order: 30042 }, "201172": { baseCost: 100, groupId: 20117, iconId: "20011", order: 30043 }, "201181": { baseCost: 110, groupId: 20118, iconId: "20011", order: 30044 }, "201182": { baseCost: 100, groupId: 20118, iconId: "20011", order: 30045 }, "201191": { baseCost: 160, groupId: 20119, iconId: "20012", order: 30046 }, "201192": { baseCost: 160, groupId: 20119, iconId: "20011", order: 30047 }, "201202": { baseCost: 160, groupId: 20120, iconId: "20021", order: 30049 }, "201211": { baseCost: 160, groupId: 20121, iconId: "20012", order: 30050 }, "201212": { baseCost: 160, groupId: 20121, iconId: "20011", order: 30051 }, "201221": { baseCost: 160, groupId: 20122, iconId: "30052", order: 30052 }, "201222": { baseCost: 160, groupId: 20122, iconId: "30051", order: 30053 }, "201231": { baseCost: 110, groupId: 20123, iconId: "30072", order: 30054 }, "201232": { baseCost: 110, groupId: 20123, iconId: "30071", order: 30055 }, "201241": { baseCost: 140, groupId: 20124, iconId: "20011", order: 30056 }, "201242": { baseCost: 130, groupId: 20124, iconId: "20011", order: 30057 }, "201251": { baseCost: 140, groupId: 20125, iconId: "20011", order: 30058 }, "201252": { baseCost: 130, groupId: 20125, iconId: "20011", order: 30059 }, "201262": { baseCost: 110, groupId: 20126, iconId: "20051", order: 30061 }, "201272": { baseCost: 180, groupId: 20127, iconId: "20011", order: 30063 }, "201281": { baseCost: 180, groupId: 20128, iconId: "20022", order: 30064 }, "201282": { baseCost: 180, groupId: 20128, iconId: "20021", order: 30065 }, "201291": { baseCost: 180, groupId: 20129, iconId: "20042", order: 30066 }, "201292": { baseCost: 180, groupId: 20129, iconId: "20041", order: 30067 }, "201302": { baseCost: 130, groupId: 20130, iconId: "30021", order: 30069 }, "201311": { baseCost: 140, groupId: 20131, iconId: "20011", order: 30070 }, "201312": { baseCost: 130, groupId: 20131, iconId: "20011", order: 30071 }, "201321": { baseCost: 140, groupId: 20132, iconId: "20011", order: 30072 }, "201322": { baseCost: 130, groupId: 20132, iconId: "20011", order: 30073 }, "201331": { baseCost: 120, groupId: 20133, iconId: "20042", order: 30074 }, "201332": { baseCost: 120, groupId: 20133, iconId: "20041", order: 30075 }, "201341": { baseCost: 120, groupId: 20134, iconId: "20042", order: 30076 }, "201342": { baseCost: 120, groupId: 20134, iconId: "20041", order: 30077 }, "201351": { baseCost: 180, groupId: 20135, iconId: "20022", order: 30078 }, "201352": { baseCost: 180, groupId: 20135, iconId: "20021", order: 30079 }, "201361": { baseCost: 120, groupId: 20136, iconId: "20042", order: 30080 }, "201362": { baseCost: 120, groupId: 20136, iconId: "20041", order: 30081 }, "201371": { baseCost: 110, groupId: 20137, iconId: "30072", order: 30082 }, "201372": { baseCost: 110, groupId: 20137, iconId: "30071", order: 30083 }, "201381": { baseCost: 140, groupId: 20138, iconId: "20011", order: 30084 }, "201382": { baseCost: 130, groupId: 20138, iconId: "20011", order: 30085 }, "201391": { baseCost: 140, groupId: 20139, iconId: "20011", order: 30086 }, "201392": { baseCost: 130, groupId: 20139, iconId: "20011", order: 30087 }, "201401": { baseCost: 120, groupId: 20140, iconId: "20042", order: 30088 }, "201402": { baseCost: 120, groupId: 20140, iconId: "20041", order: 30089 }, "201411": { baseCost: 120, groupId: 20141, iconId: "20012", order: 30090 }, "201412": { baseCost: 120, groupId: 20141, iconId: "20011", order: 30091 }, "201421": { baseCost: 180, groupId: 20142, iconId: "20022", order: 30092 }, "201422": { baseCost: 180, groupId: 20142, iconId: "20021", order: 30093 }, "201431": { baseCost: 120, groupId: 20143, iconId: "20092", order: 30094 }, "201432": { baseCost: 120, groupId: 20143, iconId: "20091", order: 30095 }, "201441": { baseCost: 180, groupId: 20144, iconId: "30052", order: 30096 }, "201442": { baseCost: 180, groupId: 20144, iconId: "30051", order: 30097 }, "201451": { baseCost: 140, groupId: 20145, iconId: "20011", order: 30098 }, "201452": { baseCost: 130, groupId: 20145, iconId: "20011", order: 30099 }, "201461": { baseCost: 140, groupId: 20146, iconId: "20011", order: 30100 }, "201462": { baseCost: 130, groupId: 20146, iconId: "20011", order: 30101 }, "201471": { baseCost: 110, groupId: 20147, iconId: "20092", order: 30102 }, "201472": { baseCost: 110, groupId: 20147, iconId: "20091", order: 30103 }, "201481": { baseCost: 170, groupId: 20148, iconId: "20022", order: 30104 }, "201482": { baseCost: 170, groupId: 20148, iconId: "20021", order: 30105 }, "201491": { baseCost: 180, groupId: 20149, iconId: "20022", order: 30106 }, "201492": { baseCost: 180, groupId: 20149, iconId: "20021", order: 30107 }, "201501": { baseCost: 110, groupId: 20150, iconId: "20092", order: 30108 }, "201502": { baseCost: 110, groupId: 20150, iconId: "20091", order: 30109 }, "201511": { baseCost: 180, groupId: 20151, iconId: "30012", order: 30110 }, "201512": { baseCost: 180, groupId: 20151, iconId: "30011", order: 30111 }, "201521": { baseCost: 130, groupId: 20152, iconId: "10051", order: 30112 }, "201522": { baseCost: 110, groupId: 20152, iconId: "10051", order: 30113 }, "201531": { baseCost: 130, groupId: 20153, iconId: "10051", order: 30114 }, "201532": { baseCost: 110, groupId: 20153, iconId: "10051", order: 30115 }, "201541": { baseCost: 130, groupId: 20154, iconId: "10051", order: 30116 }, "201542": { baseCost: 110, groupId: 20154, iconId: "10051", order: 30117 }, "201551": { baseCost: 130, groupId: 20155, iconId: "10051", order: 30118 }, "201552": { baseCost: 110, groupId: 20155, iconId: "10051", order: 30119 }, "201561": { baseCost: 110, groupId: 20156, iconId: "10062", order: 30120 }, "201562": { baseCost: 110, groupId: 20156, iconId: "10061", order: 30121 }, "201571": { baseCost: 160, groupId: 20157, iconId: "20021", order: 30122 }, "201581": { baseCost: 160, groupId: 20158, iconId: "20041", order: 30123 }, "201591": { baseCost: 160, groupId: 20159, iconId: "20011", order: 30124 }, "201601": { baseCost: 100, groupId: 20160, iconId: "20041", order: 30125 }, "201611": { baseCost: 100, groupId: 20161, iconId: "20011", order: 30126 }, "201621": { baseCost: 100, groupId: 20162, iconId: "20021", order: 30127 }, "201631": { baseCost: 70, groupId: 20163, iconId: "10011", order: 30128 }, "201641": { baseCost: 70, groupId: 20164, iconId: "10011", order: 30129 }, "201651": { baseCost: 160, groupId: 20165, iconId: "20011", order: 30130 }, "201661": { baseCost: 160, groupId: 20166, iconId: "20011", order: 30131 }, "900011": { baseCost: 200, groupId: 90001, iconId: "20011", order: 30 }, "900021": { baseCost: 200, groupId: 90002, iconId: "20011", order: 30 }, "900031": { baseCost: 200, groupId: 90003, iconId: "20011", order: 30 }, "900041": { baseCost: 200, groupId: 90004, iconId: "20041", order: 30 }, "900061": { baseCost: 200, groupId: 90006, iconId: "20011", order: 30 }, "900071": { baseCost: 200, groupId: 90007, iconId: "20011", order: 30 }, "900081": { baseCost: 200, groupId: 90008, iconId: "20011", order: 30 }, "900091": { baseCost: 200, groupId: 90009, iconId: "20011", order: 30 }, "900101": { baseCost: 200, groupId: 90010, iconId: "20041", order: 30 }, "900111": { baseCost: 200, groupId: 90011, iconId: "20011", order: 30 }, "900131": { baseCost: 200, groupId: 90013, iconId: "20011", order: 30 }, "900141": { baseCost: 200, groupId: 90014, iconId: "20011", order: 30 }, "900151": { baseCost: 200, groupId: 90015, iconId: "20011", order: 30 }, "900171": { baseCost: 200, groupId: 90017, iconId: "20011", order: 30 }, "900181": { baseCost: 200, groupId: 90018, iconId: "20011", order: 30 }, "900231": { baseCost: 200, groupId: 90023, iconId: "20011", order: 30 }, "900241": { baseCost: 200, groupId: 90024, iconId: "20011", order: 30 }, "900261": { baseCost: 200, groupId: 90026, iconId: "20011", order: 30 }, "900271": { baseCost: 200, groupId: 90027, iconId: "20041", order: 30 }, "900301": { baseCost: 200, groupId: 90030, iconId: "20011", order: 30 }, "900321": { baseCost: 200, groupId: 90032, iconId: "20021", order: 30 }, "900351": { baseCost: 200, groupId: 90035, iconId: "20011", order: 30 }, "900411": { baseCost: 200, groupId: 90041, iconId: "20011", order: 30 }, "900451": { baseCost: 200, groupId: 90045, iconId: "20021", order: 30 }, "900521": { baseCost: 200, groupId: 90052, iconId: "20021", order: 30 }, "900561": { baseCost: 200, groupId: 90056, iconId: "20011", order: 30 }, "900601": { baseCost: 200, groupId: 90060, iconId: "20011", order: 30 }, "900611": { baseCost: 200, groupId: 90061, iconId: "20011", order: 30 } };

  // ../components/SkillList.tsx
  function skillmeta(id3) {
    return skill_meta_default[id3.split("-")[0]];
  }
  var Parser = getParser(mockConditions);
  var STRINGS_ja = Object.freeze({
    "skillfilters": Object.freeze({
      "search": "",
      // TODO translate
      "white": "\u767D\u30B9\u30AD\u30EB",
      "gold": "\u91D1\u30B9\u30AD\u30EB",
      "pink": "\u9032\u5316\u30B9\u30AD\u30EB",
      "unique": "\u56FA\u6709\u30B9\u30AD\u30EB",
      "inherit": "\u7D99\u627F\u3057\u305F\u56FA\u6709\u30B9\u30AD\u30EB",
      "nige": "\u9003\u3052",
      "senkou": "\u5148\u884C",
      "sasi": "\u5DEE\u3057",
      "oikomi": "\u8FFD\u8FBC",
      "short": "\u77ED\u8DDD\u96E2",
      "mile": "\u30DE\u30A4\u30EB",
      "medium": "\u4E2D\u8DDD\u96E2",
      "long": "\u9577\u8DDD\u96E2",
      "turf": "\u829D",
      "dirt": "\u30C0\u30FC\u30C8",
      "phase0": "\u5E8F\u76E4",
      "phase1": "\u4E2D\u76E4",
      "phase2": "\u7D42\u76E4",
      "phase3": "\u30E9\u30B9\u30C8\u30B9\u30D1\u30FC\u30C8",
      "finalcorner": "\u6700\u7D42\u30B3\u30FC\u30CA\u30FC",
      "finalstraight": "\u6700\u7D42\u76F4\u7DDA"
    }),
    "skilleffecttypes": Object.freeze({
      "1": "\u30B9\u30D4\u30FC\u30C9\u30A2\u30C3\u30D7",
      "2": "\u30B9\u30BF\u30DF\u30CA\u30A2\u30C3\u30D7",
      "3": "\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7",
      "4": "\u6839\u6027\u30A2\u30C3\u30D7",
      "5": "\u8CE2\u3055\u30A2\u30C3\u30D7",
      "9": "\u4F53\u529B\u56DE\u5FA9",
      "21": "\u73FE\u5728\u901F\u5EA6\uFF08\u6E1B\u901F\u306A\u3057\uFF09",
      "22": "\u73FE\u5728\u901F\u5EA6",
      "27": "\u76EE\u6A19\u901F\u5EA6",
      "28": "\u30EC\u30FC\u30F3\u79FB\u52D5\u901F\u5EA6",
      "31": "\u52A0\u901F",
      "37": "Activate random gold skill",
      "42": "\u30B9\u30AD\u30EB\u306E\u52B9\u679C\u6642\u9593\u4E0A\u304C\u308A"
    }),
    "skilldetails": Object.freeze({
      "accel": "{{n}}m/s\xB2",
      "basinn": "{{n}}\u30D0\u8EAB",
      "conditions": "\u767A\u52D5\u6761\u4EF6",
      "distance_type": Object.freeze(["", "\u77ED\u8DDD\u96E2", "\u30DE\u30A4\u30EB", "\u4E2D\u8DDD\u96E2", "\u9577\u8DDD\u96E2"]),
      "baseduration": "\u57FA\u6E96\u6301\u7D9A\u6642\u9593",
      "effectiveduration": "\u52B9\u679C\u6642\u9593\uFF08{{distance}}m\uFF09",
      "durationincrease": "{{n}}\u500D",
      "effects": "\u52B9\u679C",
      "grade": Object.freeze({ 100: "G1", 200: "G2", 300: "G3", 400: "OP", 700: "Pre-OP", 800: "Maiden", 900: "\u30C7\u30D3\u30E5\u30FC", 999: "\u6BCE\u65E5" }),
      "ground_condition": Object.freeze(["", "\u826F", "\u7A0D\u91CD", "\u91CD", "\u4E0D\u826F"]),
      "ground_type": Object.freeze(["", "\u829D", "\u30C0\u30FC\u30C8"]),
      "id": "ID: ",
      "meters": "{{n}}m",
      "motivation": Object.freeze(["", "\u7D76\u4E0D\u8ABF", "\u4E0D\u8ABF", "\u666E\u901A", "\u597D\u8ABF", "\u7D76\u597D\u8ABF"]),
      "order_rate": "\u30C1\u30E3\u30F3\u30DF\uFF1A{{cm}}\u3001\u30EA\u30B0\u30D2\uFF1A{{loh}}",
      "preconditions": "\u524D\u63D0\u6761\u4EF6",
      "rotation": Object.freeze(["", "\u53F3\u56DE\u308A", "\u5DE6\u56DE\u308A"]),
      "running_style": Object.freeze(["", "\u9003\u3052", "\u5148\u884C", "\u5DEE\u3057", "\u8FFD\u8FBC"]),
      "season": Object.freeze(["", "\u65E9\u6625", "\u590F", "\u79CB", "\u51AC", "\u6625"]),
      "seconds": "{{n}}s",
      "slope": Object.freeze(["\u5E73\u5730", "\u4E0A\u308A\u5742", "\u4E0B\u308A\u5742"]),
      "speed": "{{n}}m/s",
      "time": Object.freeze(["", "\u671D", "\u663C", "\u5915\u65B9", "\u591C"]),
      "weather": Object.freeze(["", "\u6674\u308C", "\u66C7\u308A", "\u96E8", "\u96EA"])
    })
  });
  var STRINGS_en = Object.freeze({
    "skillfilters": Object.freeze({
      "search": "Search by skill name or conditions",
      "white": "White skills",
      "gold": "Gold skills",
      "pink": "Evolved skills",
      "unique": "Unique skills",
      "inherit": "Inherited uniques",
      "nige": "Runner",
      "senkou": "Leader",
      "sasi": "Betweener",
      "oikomi": "Chaser",
      "short": "Short",
      "mile": "Mile",
      "medium": "Medium",
      "long": "Long",
      "turf": "Turf",
      "dirt": "Dirt",
      "phase0": "Opening leg",
      "phase1": "Middle leg",
      "phase2": "Final leg",
      "phase3": "Last spurt",
      "finalcorner": "Final corner",
      "finalstraight": "Final straight"
    }),
    "skilleffecttypes": Object.freeze({
      "1": "Speed up",
      "2": "Stamina up",
      "3": "Power up",
      "4": "Guts up",
      "5": "Wisdom up",
      "9": "Recovery",
      "21": "Current speed",
      "22": "Current speed with natural deceleration",
      "27": "Target speed",
      "28": "Lane movement speed",
      "31": "Acceleration",
      "37": "Activate random gold skill",
      "42": "Increase skill duration"
    }),
    "skilldetails": Object.freeze({
      "accel": "{{n}}m/s\xB2",
      "basinn": "{{n}} bashin",
      "conditions": "Conditions:",
      "distance_type": Object.freeze(["", "Short", "Mile", "Medium", "Long"]),
      "baseduration": "Base duration:",
      "effectiveduration": "Effective duration ({{distance}}m):",
      "durationincrease": "{{n}}\xD7",
      "effects": "Effects:",
      "grade": Object.freeze({ 100: "G1", 200: "G2", 300: "G3", 400: "OP", 700: "Pre-OP", 800: "Maiden", 900: "Debut", 999: "Daily races" }),
      "ground_condition": Object.freeze(["", "Good", "Yielding", "Soft", "Heavy"]),
      "ground_type": Object.freeze(["", "Turf", "Dirt"]),
      "id": "ID: ",
      "meters": "{{n}}m",
      "motivation": Object.freeze(["", "Terrible", "Bad", "Normal", "Good", "Perfect"]),
      "order_rate": "CM: {{cm}}, LOH: {{loh}}",
      "preconditions": "Preconditions:",
      "rotation": Object.freeze(["", "Clockwise", "Counterclockwise"]),
      "running_style": Object.freeze(["", "Runner", "Leader", "Betweener", "Chaser"]),
      "season": Object.freeze(["", "Early spring", "Summer", "Autumn", "Winter", "Late spring"]),
      "seconds": "{{n}}s",
      "slope": Object.freeze(["Flat", "Uphill", "Downhill"]),
      "speed": "{{n}}m/s",
      "time": Object.freeze(["", "Morning", "Mid day", "Evening", "Night"]),
      "weather": Object.freeze(["", "Sunny", "Cloudy", "Rainy", "Snowy"])
    })
  });
  function C(s3) {
    return Parser.parseAny(Parser.tokenize(s3));
  }
  var filterOps = Object.freeze({
    "nige": [C("running_style==1")],
    "senkou": [C("running_style==2")],
    "sasi": [C("running_style==3")],
    "oikomi": [C("running_style==4")],
    "short": [C("distance_type==1")],
    "mile": [C("distance_type==2")],
    "medium": [C("distance_type==3")],
    "long": [C("distance_type==4")],
    "turf": [C("ground_type==1")],
    "dirt": [C("ground_type==2")],
    "phase0": [C("phase==0"), C("phase_random==0"), C("phase_firsthalf_random==0"), C("phase_laterhalf_random==0")],
    "phase1": [C("phase==1"), C("phase>=1"), C("phase_random==1"), C("phase_firsthalf_random==1"), C("phase_laterhalf_random==1")],
    "phase2": [C("phase==2"), C("phase>=2"), C("phase_random==2"), C("phase_firsthalf_random==2"), C("phase_laterhalf_random==2"), C("phase_firstquarter_random==2"), C("is_lastspurt==1")],
    "phase3": [C("phase==3"), C("phase_random==3"), C("phase_firsthalf_random==3"), C("phase_laterhalf_random==3")],
    "finalcorner": [C("is_finalcorner==1"), C("is_finalcorner_laterhalf==1"), C("is_finalcorner_random==1")],
    "finalstraight": [C("is_last_straight==1"), C("is_last_straight_onetime==1")]
  });
  var parsedConditions = {};
  Object.keys(skill_data_default).forEach((id3) => {
    parsedConditions[id3] = skill_data_default[id3].alternatives.map((ef) => Parser.parse(Parser.tokenize(ef.condition)));
  });
  function matchRarity(id3, testRarity) {
    const r3 = skill_data_default[id3].rarity;
    switch (testRarity) {
      case "white":
        return r3 == 1 /* White */ && id3[0] != "9";
      case "gold":
        return r3 == 2 /* Gold */;
      case "pink":
        return r3 == 6 /* Evolution */;
      case "unique":
        return r3 > 2 /* Gold */ && r3 < 6 /* Evolution */;
      case "inherit":
        return id3[0] == "9";
      default:
        return true;
    }
  }
  var classnames = Object.freeze(["", "skill-white", "skill-gold", "skill-unique", "skill-unique", "skill-unique", "skill-pink"]);
  function Skill(props) {
    return /* @__PURE__ */ y("div", { class: `skill ${classnames[skill_data_default[props.id].rarity]} ${props.selected ? "selected" : ""}`, "data-skillid": props.id }, /* @__PURE__ */ y("img", { class: "skillIcon", src: `/uma-tools/icons/${skillmeta(props.id).iconId}.png` }), /* @__PURE__ */ y("span", { class: "skillName" }, /* @__PURE__ */ y(Text, { id: `skillnames.${props.id}` })), props.dismissable && /* @__PURE__ */ y("span", { class: "skillDismiss" }, "\u2715"));
  }
  function fmtSeconds(arg) {
    return /* @__PURE__ */ y(Text, { id: "skilldetails.seconds", plural: arg, fields: { n: arg } });
  }
  function fmtPercent(arg) {
    return `${arg}%`;
  }
  function fmtMeters(arg) {
    return /* @__PURE__ */ y(Text, { id: "skilldetails.meters", plural: arg, fields: { n: arg } });
  }
  function fmtString(strId) {
    return function(arg) {
      return /* @__PURE__ */ y(Tooltip, { title: arg.toString(), tall: useLanguage() == "ja" }, /* @__PURE__ */ y(Text, { id: `skilldetails.${strId}.${arg}` }));
    };
  }
  var conditionFormatters = new Proxy({
    accumulatetime: fmtSeconds,
    bashin_diff_behind(arg) {
      return /* @__PURE__ */ y(Localizer, null, /* @__PURE__ */ y(Tooltip, { title: /* @__PURE__ */ y(Text, { id: "skilldetails.meters", plural: arg * 2.5, fields: { n: arg * 2.5 } }) }, /* @__PURE__ */ y(Text, { id: "skilldetails.basinn", plural: arg, fields: { n: arg } })));
    },
    bashin_diff_infront(arg) {
      return /* @__PURE__ */ y(Localizer, null, /* @__PURE__ */ y(Tooltip, { title: /* @__PURE__ */ y(Text, { id: "skilldetails.meters", plural: arg * 2.5, fields: { n: arg * 2.5 } }) }, /* @__PURE__ */ y(Text, { id: "skilldetails.basinn", plural: arg, fields: { n: arg } })));
    },
    behind_near_lane_time: fmtSeconds,
    behind_near_lane_time_set1: fmtSeconds,
    blocked_all_continuetime: fmtSeconds,
    blocked_front_continuetime: fmtSeconds,
    blocked_side_continuetime: fmtSeconds,
    course_distance: fmtMeters,
    distance_diff_rate: fmtPercent,
    distance_diff_top(arg) {
      return /* @__PURE__ */ y(Localizer, null, /* @__PURE__ */ y(Tooltip, { title: /* @__PURE__ */ y(Text, { id: "skilldetails.basinn", plural: arg / 2.5, fields: { n: arg / 2.5 } }) }, /* @__PURE__ */ y(Text, { id: "skilldetails.meters", plural: arg, fields: { n: arg } })));
    },
    distance_diff_top_float(arg) {
      return /* @__PURE__ */ y(Localizer, null, /* @__PURE__ */ y(Tooltip, { title: /* @__PURE__ */ y(Text, { id: "skilldetails.basinn", plural: arg / 25, fields: { n: arg / 25 } }) }, /* @__PURE__ */ y(Text, { id: "skilldetails.meters", plural: arg, fields: { n: (arg / 10).toFixed(1) } })));
    },
    distance_rate: fmtPercent,
    distance_rate_after_random: fmtPercent,
    distance_type: fmtString("distance_type"),
    grade: fmtString("grade"),
    ground_condition: fmtString("ground_condition"),
    ground_type: fmtString("ground_type"),
    hp_per: fmtPercent,
    infront_near_lane_time: fmtSeconds,
    motivation: fmtString("motivation"),
    order_rate(arg) {
      return /* @__PURE__ */ y(Localizer, null, /* @__PURE__ */ y(Tooltip, { title: /* @__PURE__ */ y(Text, { id: "skilldetails.order_rate", fields: { cm: Math.round(arg / 100 * 9), loh: Math.round(arg / 100 * 12) } }) }, arg));
    },
    overtake_target_no_order_up_time: fmtSeconds,
    overtake_target_time: fmtSeconds,
    random_lot: fmtPercent,
    remain_distance: fmtMeters,
    rotation: fmtString("rotation"),
    running_style: fmtString("running_style"),
    season: fmtString("season"),
    slope: fmtString("slope"),
    time: fmtString("time"),
    track_id(arg) {
      return /* @__PURE__ */ y(Tooltip, { title: arg, tall: useLanguage() == "ja" }, /* @__PURE__ */ y(Text, { id: `tracknames.${arg}` }));
    },
    weather: fmtString("weather")
  }, {
    get(o4, prop) {
      if (o4.hasOwnProperty(prop)) {
        return { name: prop, formatArg: o4[prop] };
      }
      return {
        name: prop,
        formatArg(arg) {
          return arg.toString();
        }
      };
    }
  });
  var AndFormatter = class {
    constructor(left2, right2) {
      this.left = left2;
      this.right = right2;
    }
    format() {
      return /* @__PURE__ */ y(k, null, this.left.format(), /* @__PURE__ */ y("span", { class: "operatorAnd" }, "&"), this.right.format());
    }
  };
  var OrFormatter = class {
    constructor(left2, right2) {
      this.left = left2;
      this.right = right2;
    }
    format() {
      return /* @__PURE__ */ y(k, null, this.left.format(), /* @__PURE__ */ y("span", { class: "operatorOr" }, "@", /* @__PURE__ */ y("span", { class: "operatorOrText" }, "or")), this.right.format());
    }
  };
  function CmpFormatter(op) {
    return class {
      constructor(cond, arg) {
        this.cond = cond;
        this.arg = arg;
      }
      format() {
        return /* @__PURE__ */ y("div", { class: "condition" }, /* @__PURE__ */ y("span", { class: "conditionName" }, this.cond.name), /* @__PURE__ */ y("span", { class: "conditionOp" }, op), /* @__PURE__ */ y("span", { class: "conditionArg" }, this.cond.formatArg(this.arg)));
      }
    };
  }
  var FormatParser = getParser(conditionFormatters, {
    and: AndFormatter,
    or: OrFormatter,
    eq: CmpFormatter("=="),
    neq: CmpFormatter("!="),
    lt: CmpFormatter("<"),
    lte: CmpFormatter("<="),
    gt: CmpFormatter("<"),
    gte: CmpFormatter(">=")
  });
  function forceSign(n3) {
    return n3 <= 0 ? n3.toString() : "+" + n3;
  }
  var formatStat = forceSign;
  function formatSpeed(n3) {
    return /* @__PURE__ */ y(Text, { id: "skilldetails.speed", plural: n3, fields: { n: forceSign(n3) } });
  }
  var formatEffect = Object.freeze({
    1: formatStat,
    2: formatStat,
    3: formatStat,
    4: formatStat,
    5: formatStat,
    9: (n3) => `${(n3 * 100).toFixed(1)}%`,
    21: formatSpeed,
    22: formatSpeed,
    27: formatSpeed,
    31: (n3) => /* @__PURE__ */ y(Text, { id: "skilldetails.accel", plural: n3, fields: { n: forceSign(n3) } }),
    42: (n3) => /* @__PURE__ */ y(Text, { id: "skilldetails.durationincrease", plural: n3, fields: { n: n3 } })
  });
  function ExpandedSkillDetails(props) {
    const skill = skill_data_default[props.id];
    const lang = useLanguage();
    return /* @__PURE__ */ y(IntlProvider, { definition: lang == "ja" ? STRINGS_ja : STRINGS_en }, /* @__PURE__ */ y("div", { class: `expandedSkill ${classnames[skill.rarity]}`, "data-skillid": props.id }, /* @__PURE__ */ y("div", { class: "expandedSkillHeader" }, /* @__PURE__ */ y("img", { class: "skillIcon", src: `/uma-tools/icons/${skillmeta(props.id).iconId}.png` }), /* @__PURE__ */ y("span", { class: "skillName" }, /* @__PURE__ */ y(Text, { id: `skillnames.${props.id}` })), props.dismissable && /* @__PURE__ */ y("span", { class: "skillDismiss" }, "\u2715")), /* @__PURE__ */ y("div", { class: "skillDetails" }, /* @__PURE__ */ y("div", null, /* @__PURE__ */ y(Text, { id: "skilldetails.id" }), props.id), skill_data_default[props.id].alternatives.map(
      (alt) => /* @__PURE__ */ y("div", { class: "skillDetailsSection" }, alt.precondition.length > 0 && /* @__PURE__ */ y(k, null, /* @__PURE__ */ y(Text, { id: "skilldetails.preconditions" }), /* @__PURE__ */ y("div", { class: "skillConditions" }, FormatParser.parse(FormatParser.tokenize(alt.precondition)).format())), /* @__PURE__ */ y(Text, { id: "skilldetails.conditions" }), /* @__PURE__ */ y("div", { class: "skillConditions" }, FormatParser.parse(FormatParser.tokenize(alt.condition)).format()), /* @__PURE__ */ y(Text, { id: "skilldetails.effects" }), /* @__PURE__ */ y("div", { class: "skillEffects" }, alt.effects.map(
        (ef) => /* @__PURE__ */ y("div", { class: "skillEffect" }, /* @__PURE__ */ y("span", { class: "skillEffectType" }, /* @__PURE__ */ y(Text, { id: `skilleffecttypes.${ef.type}` }, ef.type)), /* @__PURE__ */ y("span", { class: "skillEffectValue" }, ef.type in formatEffect ? formatEffect[ef.type](ef.modifier / 1e4) : ef.modifier / 1e4))
      )), alt.baseDuration > 0 && /* @__PURE__ */ y("span", { class: "skillDuration" }, /* @__PURE__ */ y(Text, { id: "skilldetails.baseduration" }), " ", /* @__PURE__ */ y(Text, { id: "skilldetails.seconds", fields: { n: alt.baseDuration / 1e4 } })), props.distanceFactor && alt.baseDuration > 0 && /* @__PURE__ */ y("span", { class: "skillDuration" }, /* @__PURE__ */ y(Text, { id: "skilldetails.effectiveduration", fields: { distance: props.distanceFactor } }), " ", /* @__PURE__ */ y(Text, { id: "skilldetails.seconds", fields: { n: +(alt.baseDuration / 1e4 * (props.distanceFactor / 1e3)).toFixed(2) } })))
    ))));
  }
  var iconIdPrefixes = Object.freeze({
    "1001": ["1001"],
    "1002": ["1002", "2018"],
    "1003": ["1003"],
    "1004": ["1004"],
    "1005": ["1005"],
    "1006": ["1006"],
    "2002": ["2002", "2011"],
    "2001": ["2001", "2010", "2014", "2015", "2016", "2019", "2021"],
    "2004": ["2004", "2012", "2017", "2020"],
    "2005": ["2005", "2013"],
    "2006": ["2006"],
    "2009": ["2009"],
    "3001": ["3001"],
    "3002": ["3002"],
    "3004": ["3004"],
    "3005": ["3005"],
    "3007": ["3007"],
    "4001": ["4001"]
  });
  var groups_filters = Object.freeze({
    "rarity": ["white", "gold", "pink", "unique", "inherit"],
    "icontype": ["1001", "1002", "1003", "1004", "1005", "1006", "4001", "2002", "2001", "2004", "2005", "2006", "2009", "3001", "3002", "3004", "3005", "3007"],
    "strategy": ["nige", "senkou", "sasi", "oikomi"],
    "distance": ["short", "mile", "medium", "long"],
    "surface": ["turf", "dirt"],
    "location": ["phase0", "phase1", "phase2", "phase3", "finalcorner", "finalstraight"]
  });
  function textSearch(id3, searchText, searchConditions) {
    const needle = searchText.toUpperCase();
    if (skillnames_default[id3].some((s3) => s3.toUpperCase().indexOf(needle) > -1)) {
      return 1;
    } else if (searchConditions) {
      let op = null;
      try {
        op = C(searchText);
      } catch (_2) {
        return 0;
      }
      return parsedConditions[id3].some((alt) => treeMatch(op, alt)) ? 2 : 0;
    } else {
      return 0;
    }
  }
  function SkillList(props) {
    const lang = useLanguage();
    const [visible, setVisible] = h2(() => new Set(props.ids));
    const active = {}, setActive = {};
    Object.keys(groups_filters).forEach((group) => {
      active[group] = {};
      setActive[group] = {};
      groups_filters[group].forEach((filter6) => {
        const [active_, setActive_] = h2(group == "icontype");
        active[group][filter6] = active_;
        setActive[group][filter6] = setActive_;
      });
    });
    const searchInput = _(null);
    const [searchText, setSearchText] = h2("");
    p2(function() {
      if (props.isOpen && searchInput.current)
        searchInput.current.focus();
    }, [props.isOpen]);
    const selectedMap = new Map(Array.from(props.selected).map((id3) => [skillmeta(id3).groupId, id3]));
    function toggleSelected(e4) {
      const se = e4.target.closest("div.skill");
      if (se == null)
        return;
      e4.stopPropagation();
      const id3 = se.dataset.skillid;
      const groupId = skillmeta(id3).groupId;
      const old = selectedMap.get(groupId) == id3;
      const newSelected = new Set(selectedMap.values());
      if (selectedMap.has(groupId)) {
        newSelected.delete(selectedMap.get(groupId));
      }
      newSelected.add(id3);
      props.setSelected(newSelected);
    }
    function updateFilters(e4) {
      if (e4.target.tagName != "BUTTON" && e4.target.tagName != "INPUT")
        return;
      e4.stopPropagation();
      const group = e4.target.parentElement.dataset.filterGroup;
      const filter6 = e4.target.dataset.filter;
      let newSearchText = searchText;
      if (group == "search") {
        newSearchText = e4.target.value;
        setSearchText(newSearchText);
      } else if (group == "icontype") {
        if (groups_filters.icontype.every((f3) => active.icontype[f3])) {
          groups_filters.icontype.forEach((f3) => f3 != filter6 && setActive.icontype[f3](active.icontype[f3] = false));
        } else {
          setActive.icontype[filter6](active.icontype[filter6] = !active.icontype[filter6]);
          if (!groups_filters.icontype.some((f3) => active.icontype[f3])) {
            groups_filters.icontype.forEach((f3) => setActive.icontype[f3](active.icontype[f3] = true));
          }
        }
      } else {
        setActive[group][filter6](active[group][filter6]);
        Object.keys(active[group]).forEach((k3) => setActive[group][k3](active[group][k3] = !active[group][k3] && k3 == filter6));
      }
      const filtered = /* @__PURE__ */ new Set();
      let allowConditionSearch = true;
      props.ids.forEach((id3) => {
        const passesTextSearch = newSearchText.length > 0 ? textSearch(id3, newSearchText, allowConditionSearch) : 3;
        if (allowConditionSearch && passesTextSearch == 1) {
          allowConditionSearch = false;
        }
        const pass = passesTextSearch && Object.keys(groups_filters).every((group2) => {
          const check = groups_filters[group2].filter((f3) => active[group2][f3]);
          if (check.length == 0)
            return true;
          if (group2 == "rarity")
            return check.some((f3) => matchRarity(id3, f3));
          else if (group2 == "icontype")
            return check.some((f3) => iconIdPrefixes[f3].some((p4) => skillmeta(id3).iconId.startsWith(p4)));
          return check.some((f3) => filterOps[f3].some((op) => parsedConditions[id3].some((alt) => treeMatch(op, alt))));
        });
        if (pass) {
          filtered.add(id3);
        }
      });
      setVisible(filtered);
    }
    function FilterGroup(props2) {
      return /* @__PURE__ */ y("div", { "data-filter-group": props2.group }, props2.children.map((c3) => F(c3, { group: props2.group })));
    }
    function FilterButton(props2) {
      return /* @__PURE__ */ y("button", { "data-filter": props2.filter, class: `filterButton ${active[props2.group][props2.filter] ? "active" : ""}` }, /* @__PURE__ */ y(Text, { id: `skillfilters.${props2.filter}` }));
    }
    function IconFilterButton(props2) {
      return /* @__PURE__ */ y("button", { "data-filter": props2.type, class: `iconFilterButton ${active[props2.group][props2.type] ? "active" : ""}`, style: `background-image:url(/uma-tools/icons/${props2.type}1.png)` });
    }
    const items = props.ids.map((id3) => /* @__PURE__ */ y("li", { key: id3, class: visible.has(id3) ? "" : "hidden" }, /* @__PURE__ */ y(Skill, { id: id3, selected: selectedMap.get(skillmeta(id3).groupId) == id3 })));
    return /* @__PURE__ */ y(IntlProvider, { definition: lang == "ja" ? STRINGS_ja : STRINGS_en }, /* @__PURE__ */ y("div", { class: "filterGroups", onClick: updateFilters }, /* @__PURE__ */ y("div", { "data-filter-group": "search" }, /* @__PURE__ */ y(Localizer, null, /* @__PURE__ */ y("input", { type: "text", class: "filterSearch", value: searchText, placeholder: /* @__PURE__ */ y(Text, { id: "skillfilters.search" }), onInput: updateFilters, ref: searchInput }))), /* @__PURE__ */ y(FilterGroup, { group: "rarity" }, /* @__PURE__ */ y(FilterButton, { filter: "white" }), /* @__PURE__ */ y(FilterButton, { filter: "gold" }), /* @__PURE__ */ y(FilterButton, { filter: "pink" }), /* @__PURE__ */ y(FilterButton, { filter: "unique" }), /* @__PURE__ */ y(FilterButton, { filter: "inherit" })), /* @__PURE__ */ y(FilterGroup, { group: "icontype" }, groups_filters["icontype"].map((t3) => /* @__PURE__ */ y(IconFilterButton, { type: t3 }))), /* @__PURE__ */ y(FilterGroup, { group: "strategy" }, /* @__PURE__ */ y(FilterButton, { filter: "nige" }), /* @__PURE__ */ y(FilterButton, { filter: "senkou" }), /* @__PURE__ */ y(FilterButton, { filter: "sasi" }), /* @__PURE__ */ y(FilterButton, { filter: "oikomi" })), /* @__PURE__ */ y(FilterGroup, { group: "distance" }, /* @__PURE__ */ y(FilterButton, { filter: "short" }), /* @__PURE__ */ y(FilterButton, { filter: "mile" }), /* @__PURE__ */ y(FilterButton, { filter: "medium" }), /* @__PURE__ */ y(FilterButton, { filter: "long" })), /* @__PURE__ */ y(FilterGroup, { group: "surface" }, /* @__PURE__ */ y(FilterButton, { filter: "turf" }), /* @__PURE__ */ y(FilterButton, { filter: "dirt" })), /* @__PURE__ */ y(FilterGroup, { group: "location" }, /* @__PURE__ */ y(FilterButton, { filter: "phase0" }), /* @__PURE__ */ y(FilterButton, { filter: "phase1" }), /* @__PURE__ */ y(FilterButton, { filter: "phase2" }), /* @__PURE__ */ y(FilterButton, { filter: "phase3" }), /* @__PURE__ */ y(FilterButton, { filter: "finalcorner" }), /* @__PURE__ */ y(FilterButton, { filter: "finalstraight" }))), /* @__PURE__ */ y("ul", { class: "skillList", onClick: toggleSelected }, items));
  }

  // tracknames.json
  var tracknames_default = {
    "10001": ["", "Sapporo"],
    "10002": ["", "Hakodate"],
    "10003": ["", "Niigata"],
    "10004": ["", "Fukushima"],
    "10005": ["", "Nakayama"],
    "10006": ["", "Tokyo"],
    "10007": ["", "Chukyo"],
    "10008": ["", "Kyoto"],
    "10009": ["", "Hanshin"],
    "10010": ["", "Kokura"],
    "10101": ["", "Ooi"]
  };

  // ../strings/common.ts
  var TRACKNAMES_ja = {};
  Object.keys(tracknames_default).forEach((k3) => TRACKNAMES_ja[k3] = tracknames_default[k3][0]);
  Object.freeze(TRACKNAMES_ja);
  var TRACKNAMES_en = {};
  Object.keys(tracknames_default).forEach((k3) => TRACKNAMES_en[k3] = tracknames_default[k3][1]);
  Object.freeze(TRACKNAMES_en);

  // ../components/RaceTrack.tsx
  var STRINGS_ja2 = Object.freeze({
    "racetrack": Object.freeze({
      "none": "\u200B",
      "inner": " \uFF08\u5185\uFF09",
      "outer": " \uFF08\u5916\uFF09",
      "outin": " \uFF08\u5916\u2192\u5185\uFF09",
      "orientation": Object.freeze(["", "\u53F3", "\u5DE6", "", "\u76F4"]),
      "turf": "\u829D",
      "dirt": "\u30C0\u30FC\u30C8",
      "straight": "\u76F4\u7DDA",
      "corner": "\u30B3\u30FC\u30CA\u30FC{{n}}",
      "uphill": "\u4E0A\u308A\u5742",
      "downhill": "\u4E0B\u308A\u5742",
      "phase0": "\u5E8F\u76E4",
      "phase1": "\u4E2D\u76E4",
      "phase2": "\u7D42\u76E4",
      "phase3": "\u30E9\u30B9\u30C8\u30B9\u30D1\u30FC\u30C8",
      "short": Object.freeze({
        "straight": "\u76F4",
        "corner": "\u30B3{{n}}",
        "uphill": "\u4E0A",
        "downhill": "\u4E0B"
      })
    }),
    "tracknames": TRACKNAMES_ja,
    "coursedesc": "{{surface}}{{distance}}m{{inout}}"
  });
  var STRINGS_en2 = Object.freeze({
    "racetrack": Object.freeze({
      "none": "\u200B",
      "inner": " (inner)",
      "outer": " (outer)",
      "outin": " (outer\u2192inner)",
      "orientation": Object.freeze(["", "(clockwise)", "(counterclockwise)", "", "(straight)"]),
      "turf": "Turf",
      "dirt": "Dirt",
      "straight": "Straight \u2192",
      "corner": "Corner \u2B8C{{n}}",
      "uphill": "Uphill \u2197",
      "downhill": "Downhill \u2198",
      "phase0": "Opening leg",
      "phase1": "Middle leg",
      "phase2": "Final leg",
      "phase3": "Last spurt",
      "short": Object.freeze({
        "straight": "\u2192",
        "corner": "\u2B8C{{n}}",
        "uphill": "\u2197",
        "downhill": "\u2198"
      })
    }),
    "tracknames": TRACKNAMES_en,
    "coursedesc": Object.freeze({
      // 1 = turf 2 = dirt
      "one": "{{distance}}m{{inout}}",
      "many": "{{surface}} {{distance}}m{{inout}}"
    })
  });
  var inoutKey = Object.freeze(["", "none", "inner", "outer", "outin"]);
  var coursesByTrack = function() {
    const o4 = /* @__PURE__ */ Object.create(null);
    Object.keys(course_data_default).forEach((cid) => {
      const tid = course_data_default[cid].raceTrackId;
      if (tid in o4) {
        o4[tid].push(+cid);
      } else {
        o4[tid] = [+cid];
      }
    });
    return Object.freeze(o4);
  }();
  function TrackSelect(props) {
    const lang = useLanguage();
    let [trackid, setTrackid] = h2(course_data_default[props.courseid].raceTrackId);
    const changeCourse = T2((e4) => props.setCourseid(+e4.target.value), [props.setCourseid]);
    function changeTrack(e4) {
      const newTrackId = +e4.target.value;
      setTrackid(newTrackId);
      props.setCourseid(coursesByTrack[newTrackId][0]);
    }
    return /* @__PURE__ */ y(IntlProvider, { definition: lang == "ja" ? STRINGS_ja2 : STRINGS_en2 }, /* @__PURE__ */ y("div", { class: "trackSelect" }, /* @__PURE__ */ y("select", { value: trackid, onChange: changeTrack, tabindex: props.tabindex }, Object.keys(tracknames_default).map((tid) => /* @__PURE__ */ y("option", { value: tid }, /* @__PURE__ */ y(Text, { id: `tracknames.${tid}` })))), /* @__PURE__ */ y("select", { value: props.courseid, onChange: changeCourse, tabindex: props.tabindex + 1 }, coursesByTrack[trackid].map(
      (cid) => /* @__PURE__ */ y("option", { value: cid }, /* @__PURE__ */ y(Text, { id: "coursedesc", plural: course_data_default[cid].surface, fields: {
        "distance": course_data_default[cid].distance,
        "inout": /* @__PURE__ */ y(Text, { id: `racetrack.${inoutKey[course_data_default[cid].course]}` }),
        "surface": /* @__PURE__ */ y(Text, { id: course_data_default[cid].surface == 1 /* Turf */ ? "racetrack.turf" : "racetrack.dirt" })
      } }))
    ))));
  }
  function DistanceMarker(props) {
    const y3 = props.up ? props.y - 11.5 : props.y;
    return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("text", { class: "distanceMarker", x: `${props.x}%`, y: `${y3 - (props.up ? -0.8 : 0.8)}%`, "font-size": "10px", "text-anchor": "middle", "dominant-baseline": props.up ? "hanging" : "auto", fill: "rgb(121,64,22)" }, `${props.d}m`), /* @__PURE__ */ y("line", { x1: `${props.x}%`, y1: `${y3}%`, x2: `${props.x}%`, y2: `${y3 + (props.up ? -2.5 : 2.5)}%`, stroke: "rgb(121,64,22)" }));
  }
  function SectionText(props) {
    return /* @__PURE__ */ y("text", { class: "sectionText", x: "50%", y: "50%", height: "40%", width: "100%", fill: "rgb(121,64,22)" }, /* @__PURE__ */ y(Text, { id: `racetrack${props.w < 0.085 ? ".short" : ""}.${props.id}`, fields: props.fields }));
  }
  function RaceTrack(props) {
    const lang = useLanguage();
    const course = CourseHelpers.getCourse(props.courseid);
    const xOffset = props.xOffset || 0, yOffset = props.yOffset || 0, xExtra = props.xExtra || 0, yExtra = props.yExtra || 0;
    function doMouseMove(e4) {
      const svg = e4.currentTarget;
      if (e4.offsetX < xOffset)
        return;
      const line = svg.querySelector(".mouseoverLine");
      const text = svg.querySelector(".mouseoverText");
      const w3 = svg.getBoundingClientRect().width - xOffset;
      const x3 = e4.offsetX - xOffset;
      const y3 = e4.offsetY - yOffset;
      line.setAttribute("x1", x3);
      line.setAttribute("x2", x3);
      text.setAttribute("x", x3 > w3 - 45 ? x3 - 45 : x3 + 5);
      text.setAttribute("y", y3);
      text.textContent = Math.round(x3 / w3 * course_data_default[svg.dataset.courseid].distance) + "m";
      props.mouseMove && props.mouseMove(x3 / w3);
    }
    function doMouseLeave(e4) {
      const svg = e4.currentTarget;
      const line = svg.querySelector(".mouseoverLine");
      const text = svg.querySelector(".mouseoverText");
      line.setAttribute("x1", -5);
      line.setAttribute("x2", -5);
      text.setAttribute("x", -5);
      text.setAttribute("y", -5);
      props.mouseLeave && props.mouseLeave();
    }
    const trackNameHeader = F2(
      () => /* @__PURE__ */ y("div", { class: "racetrackName" }, /* @__PURE__ */ y(Text, { id: `tracknames.${course.raceTrackId}` }), " ", /* @__PURE__ */ y(Text, { id: "coursedesc", plural: course.surface, fields: {
        "distance": course.distance,
        "inout": /* @__PURE__ */ y(Text, { id: `racetrack.${inoutKey[course_data_default[props.courseid].course]}` }),
        "surface": /* @__PURE__ */ y(Text, { id: course.surface == 1 /* Turf */ ? "racetrack.turf" : "racetrack.dirt" })
      } }), " ", /* @__PURE__ */ y(Text, { id: `racetrack.orientation.${course.turn}` })),
      [props.courseid]
    );
    const almostEverything = F2(function() {
      const flatLevel = 50;
      const [_2, highestPoint, lowestPoint] = course.slopes.reduce((x3, s3) => {
        const [last5, highest, lowest] = x3;
        const us = last5 + s3.slope / 1e4 * s3.length;
        if (us > highest) {
          return [us, us, lowest];
        } else if (us < lowest) {
          return [us, highest, us];
        } else {
          return [us, highest, lowest];
        }
      }, [0, 1, 0]);
      const range = highestPoint - (lowestPoint + highestPoint > -30 ? 0 : lowestPoint);
      const full = course.slopes.slice();
      let lastEnd = 0;
      course.slopes.forEach((s3, i4) => {
        if (s3.start != lastEnd) {
          full.push({ start: lastEnd, length: s3.start - lastEnd, slope: 0 });
        }
        lastEnd = s3.start + s3.length;
      });
      if (lastEnd < course.distance) {
        full.push({ start: lastEnd, length: course.distance - lastEnd, slope: 0 });
      }
      full.sort((a4, b3) => a4.start - b3.start);
      const slopeEndHeights = [50];
      const slopes = full.reduce((elems, s3, i4) => {
        const lastEndHeight = slopeEndHeights[slopeEndHeights.length - 1];
        const thisEndHeight = lastEndHeight - s3.slope / 1e4 * s3.length / range * 40;
        slopeEndHeights.push(thisEndHeight);
        if (s3.slope == 0) {
          elems.push(/* @__PURE__ */ y("rect", { x: `${s3.start / course.distance * 100}%`, y: `${lastEndHeight * 0.262}%`, width: `${s3.length / course.distance * 100}%`, height: "26.2%", fill: "rgb(211,243,68)" }));
        } else {
          elems.push(
            /* @__PURE__ */ y("svg", { class: `hillArea ${s3.slope < 0 ? "downhill" : "uphill"}`, x: `${s3.start / course.distance * 100}%`, y: "0", width: `${s3.length / course.distance * 100}%`, height: "26.2%", viewBox: "0 0 100 100", preserveAspectRatio: "none" }, /* @__PURE__ */ y("polygon", { points: `0,${lastEndHeight} 0,100 100,100 100,${thisEndHeight}`, fill: "rgb(211,243,68)" }))
          );
        }
        return elems;
      }, []);
      const sections = course.straights.concat(course.corners.map((c3) => ({ start: c3.start, end: c3.start + c3.length }))).sort((a4, b3) => a4.start - b3.start);
      const phase1Start = Math.round(CourseHelpers.phaseStart(course.distance, 1)), phase2Start = Math.round(CourseHelpers.phaseStart(course.distance, 2)), phase3Start = Math.round(CourseHelpers.phaseStart(course.distance, 3));
      let upi = 0, downi = 0;
      return /* @__PURE__ */ y(k, null, slopes, /* @__PURE__ */ y("rect", { x: "0", y: "26.2%", width: "100%", height: "1.8%", fill: "rgb(140,170,10)" }), /* @__PURE__ */ y("svg", { class: "sectionsBg", x: "0", y: "28%", width: "100%", height: "18%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", height: "90%", width: "100%", fill: "rgb(239,229,241)" }), /* @__PURE__ */ y("rect", { x: "0", y: "90%", height: "10%", width: "100%", fill: "rgb(163,106,175)" })), course.slopes.map(
        (s3) => /* @__PURE__ */ y("svg", { class: "slope", x: `${s3.start / course.distance * 100}%`, y: "28%", width: `${s3.length / course.distance * 100}%`, height: "18%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", height: "90%", width: "100%", fill: s3.slope > 0 ? upi % 2 == 0 ? "rgb(234,207,147)" : "rgb(229,196,120)" : downi % 2 == 0 ? "rgb(82,195,184)" : "rgb(116,206,198)" }), /* @__PURE__ */ y("rect", { x: "0", y: "90%", height: "10%", width: "100%", fill: s3.slope > 0 ? upi++ % 2 == 0 ? "rgb(191,143,37)" : "rgb(175,132,33)" : downi++ % 2 == 0 ? "rgb(42,123,115)" : "rgb(50,142,134)" }), /* @__PURE__ */ y(SectionText, { id: s3.slope > 0 ? "uphill" : "downhill", w: s3.length / course.distance }))
      ), course.slopes.map((s3, i4) => {
        const nodes = [];
        let markedStart = false;
        if (s3.start != 0 && (i4 == 0 || s3.start != course.slopes[i4 - 1].start + course.slopes[i4 - 1].length)) {
          markedStart = true;
          nodes.push(/* @__PURE__ */ y(DistanceMarker, { d: s3.start, x: s3.start / course.distance * 100, y: 42, up: i4 > 0 && s3.start - (course.slopes[i4 - 1].start + course.slopes[i4 - 1].length) < course.distance * 0.05 }));
        }
        if (s3.start + s3.length != course.distance) {
          nodes.push(/* @__PURE__ */ y(DistanceMarker, { d: s3.start + s3.length, x: (s3.start + s3.length) / course.distance * 100, y: 42, up: markedStart && s3.length < course.distance * 0.05 }));
        }
        return /* @__PURE__ */ y(k, null, nodes);
      }), /* @__PURE__ */ y("svg", { class: "sectionsBg", x: "0", y: "46%", width: "100%", height: "18%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", height: "90%", width: "100%", fill: "rgb(232,232,232)" }), /* @__PURE__ */ y("rect", { x: "0", y: "90%", height: "10%", width: "100%", fill: "rgb(139,139,139)" })), course.straights.map(
        (s3, i4) => /* @__PURE__ */ y("svg", { class: "straight", x: `${s3.start / course.distance * 100}%`, y: "46%", width: `${(s3.end - s3.start) / course.distance * 100}%`, height: "18%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", height: "90%", width: "100%", fill: i4 % 2 == 0 ? "rgb(209,235,255)" : "rgb(185,224,255)" }), /* @__PURE__ */ y("rect", { x: "0", y: "90%", height: "10%", width: "100%", fill: i4 % 2 == 0 ? "rgb(23,154,255)" : "rgb(9,146,254)" }), /* @__PURE__ */ y(SectionText, { id: "straight", w: (s3.end - s3.start) / course.distance * 100 }))
      ), course.corners.map(
        (c3, i4) => /* @__PURE__ */ y("svg", { class: "corner", x: `${c3.start / course.distance * 100}%`, y: "46%", width: `${c3.length / course.distance * 100}%`, height: "18%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", height: "90%", width: "100%", fill: i4 % 2 == 0 ? "rgb(255,216,185)" : "rgb(254,228,209)" }), /* @__PURE__ */ y("rect", { x: "0", y: "90%", height: "10%", width: "100%", fill: i4 % 2 == 0 ? "rgb(254,117,9)" : "rgb(250,121,27)" }), /* @__PURE__ */ y(SectionText, { id: "corner", w: c3.length / course.distance, fields: { n: 4 - (course.corners.length - i4 - 1) % 4 } }))
      ), sections.map((s3, i4) => {
        const nodes = [];
        let markedStart = false;
        if (s3.start != 0 && (i4 == 0 || s3.start != sections[i4 - 1].end)) {
          markedStart = true;
          nodes.push(/* @__PURE__ */ y(DistanceMarker, { d: s3.start, x: s3.start / course.distance * 100, y: 60, up: i4 > 0 && s3.start - sections[i4 - 1].end < course.distance * 0.05 }));
        }
        if (s3.end != course.distance) {
          nodes.push(/* @__PURE__ */ y(DistanceMarker, { d: s3.end, x: s3.end / course.distance * 100, y: 60, up: markedStart && s3.end - s3.start < course.distance * 0.05 }));
        }
        return /* @__PURE__ */ y(k, null, nodes);
      }), /* @__PURE__ */ y("svg", { class: "phase phase0", x: "0", y: "64%", width: "16.67%", height: "18%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", height: "90%", width: "100%", fill: "rgb(0,154,111)" }), " ", /* @__PURE__ */ y("rect", { x: "0", y: "90%", height: "10%", width: "100%", fill: "rgb(0,92,66)" }), " ", /* @__PURE__ */ y(SectionText, { id: "phase0", w: 0.1667 })), /* @__PURE__ */ y("svg", { class: "phase phase1", x: "16.67%", y: "64%", width: "50%", height: "18%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", height: "90%", width: "100%", fill: "rgb(242,233,103)" }), " ", /* @__PURE__ */ y("rect", { x: "0", y: "90%", height: "10%", width: "100%", fill: "rgb(190,179,16)" }), " ", /* @__PURE__ */ y(SectionText, { id: "phase1", w: 0.5 })), /* @__PURE__ */ y("svg", { class: "phase phase2", x: "66.67%", y: "64%", width: "16.67%", height: "18%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", height: "90%", width: "100%", fill: "rgb(209,134,175)" }), " ", /* @__PURE__ */ y("rect", { x: "0", y: "90%", height: "10%", width: "100%", fill: "rgb(149,56,107)" }), " ", /* @__PURE__ */ y(SectionText, { id: "phase2", w: 0.1667 })), /* @__PURE__ */ y("svg", { class: "phase phase3", x: "83.33%", y: "64%", width: "16.67%", height: "18%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", height: "90%", width: "100%", fill: "rgb(199,109,159)" }), " ", /* @__PURE__ */ y("rect", { x: "0", y: "90%", height: "10%", width: "100%", fill: "rgb(133,51,96)" }), " ", /* @__PURE__ */ y(SectionText, { id: "phase3", w: 0.1667 })), /* @__PURE__ */ y(DistanceMarker, { d: phase1Start, x: "16.67", y: 78 }), /* @__PURE__ */ y(DistanceMarker, { d: phase2Start, x: "66.67", y: 78 }), /* @__PURE__ */ y(DistanceMarker, { d: phase3Start, x: "83.33", y: 78 }), /* @__PURE__ */ y("rect", { x: "0", y: "82%", height: "18%", width: "100%", fill: "rgb(228,235,240)" }), Array.from({ length: 25 }, (_3, i4) => i4).map((i4) => /* @__PURE__ */ y("line", { x1: `${i4 / 24 * 100}%`, y1: "96%", x2: `${i4 / 24 * 100}%`, y2: "100%", stroke: "rgb(107,145,173)", "stroke-width": i4 == 0 || i4 == 24 ? "4" : "2" })), Array.from({ length: 24 }, (_3, i4) => i4 + 1).map((i4) => /* @__PURE__ */ y("text", { x: `${(1 / 48 + (i4 - 1) / 24) * 100}%`, y: "91%", "font-size": "10px", "text-anchor": "middle", "dominant-baseline": "central", fill: "rgb(107,145,173)" }, i4)), /* @__PURE__ */ y("rect", { x: "0", y: "98.2%", height: "1.8%", width: "100%", fill: "rgb(107,145,173)" }));
    }, [props.courseid]);
    const regions = F2(function() {
      return props.regions.reduce((state, desc) => {
        if (desc.type == 0 /* Immediate */ && desc.regions.length > 0) {
          let x3 = desc.regions[0].start / course.distance * 100;
          while (state.seen.has(x3)) {
            x3 += (3 + +(x3 == 0)) / props.width * 100;
          }
          state.seen.add(x3);
          state.elem.push(/* @__PURE__ */ y("line", { x1: `${x3}%`, y1: "0", x2: `${x3}%`, y2: "100%", stroke: desc.color.stroke, "stroke-width": x3 == 0 ? 4 : 2 }));
        } else if (desc.type == 2 /* Textbox */) {
          const rects = desc.regions.map((r3) => {
            const x3 = r3.start / course.distance * 100;
            const w3 = (r3.end - r3.start) / course.distance * 100;
            let i4 = 0;
            while (i4 < 10) {
              if (state.rungs[i4].some(
                (b3) => r3.start >= b3.start && r3.start < b3.end || r3.end > b3.start && r3.end <= b3.end || b3.start >= r3.start && b3.start < r3.end || b3.end > r3.start && b3.end <= r3.end
              )) {
                ++i4;
              } else {
                break;
              }
            }
            state.rungs[i4].push(r3);
            const y3 = 90 - 10 * i4;
            return /* @__PURE__ */ y("svg", { class: "textbox", x: x3 + "%", y: y3 + "%", width: w3 + "%", height: "10%" }, /* @__PURE__ */ y("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: desc.color.fill, stroke: desc.color.stroke }), /* @__PURE__ */ y("text", { x: "0", y: "50%", "font-size": "12px", "dominant-baseline": "central" }, desc.text));
          });
          state.elem.push(/* @__PURE__ */ y(k, null, rects));
        } else {
          state.elem.push(
            /* @__PURE__ */ y(k, null, desc.regions.map(
              (r3) => /* @__PURE__ */ y("rect", { x: `${r3.start / course.distance * 100}%`, y: `${100 - desc.height}%`, width: `${(r3.end - r3.start) / course.distance * 100}%`, height: `${desc.height}%`, fill: desc.color.fill, stroke: desc.color.stroke })
            ))
          );
        }
        return state;
      }, { seen: /* @__PURE__ */ new Set(), rungs: Array(10).fill(0).map((_2) => []), elem: [] }).elem;
    }, [props.regions, course.distance]);
    return /* @__PURE__ */ y(IntlProvider, { definition: lang == "ja" ? STRINGS_ja2 : STRINGS_en2 }, /* @__PURE__ */ y("div", { class: "racetrackWrapper", style: `width:${props.width + xOffset + xExtra}px` }, trackNameHeader, /* @__PURE__ */ y("svg", { version: "1.1", width: props.width + xOffset + xExtra, height: props.height + yOffset + yExtra, xmlns: "http://www.w3.org/2000/svg", class: "racetrackView", "data-courseid": props.courseid, onMouseMove: doMouseMove, onMouseLeave: doMouseLeave }, /* @__PURE__ */ y("svg", { x: props.xOffset, y: props.yOffset, width: props.width, height: props.height }, almostEverything, regions, /* @__PURE__ */ y("line", { class: "mouseoverLine", x1: "-5", y1: "0", x2: "-5", y2: "100%", stroke: "rgb(121,64,22)", "stroke-width": "2" }), /* @__PURE__ */ y("text", { class: "mouseoverText", x: "-5", y: "-5", fill: "rgb(121,64,22)" })), props.children)));
  }

  // ../node_modules/immutable-sorted/dist/immutable.es.js
  var DELETE2 = "delete";
  var SHIFT2 = 5;
  var SIZE2 = 1 << SHIFT2;
  var MASK2 = SIZE2 - 1;
  var NOT_SET2 = {};
  function MakeRef2() {
    return { value: false };
  }
  function SetRef2(ref) {
    if (ref) {
      ref.value = true;
    }
  }
  function GetRef(ref) {
    return ref.value;
  }
  function OwnerID2() {
  }
  function ensureSize2(iter) {
    if (iter.size === void 0) {
      iter.size = iter.__iterate(returnTrue2);
    }
    return iter.size;
  }
  function wrapIndex2(iter, index) {
    if (typeof index !== "number") {
      var uint32Index = index >>> 0;
      if ("" + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize2(iter) + index : index;
  }
  function returnTrue2() {
    return true;
  }
  function wholeSlice2(begin, end, size) {
    return (begin === 0 && !isNeg2(begin) || size !== void 0 && begin <= -size) && (end === void 0 || size !== void 0 && end >= size);
  }
  function resolveBegin2(begin, size) {
    return resolveIndex2(begin, size, 0);
  }
  function resolveEnd2(end, size) {
    return resolveIndex2(end, size, size);
  }
  function resolveIndex2(index, size, defaultIndex) {
    return index === void 0 ? defaultIndex : isNeg2(index) ? size === Infinity ? size : Math.max(0, size + index) | 0 : size === void 0 || size === index ? index : Math.min(size, index) | 0;
  }
  function isNeg2(value) {
    return value < 0 || value === 0 && 1 / value === -Infinity;
  }
  var IS_COLLECTION_SYMBOL2 = "@@__IMMUTABLE_ITERABLE__@@";
  function isCollection2(maybeCollection) {
    return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL2]);
  }
  var IS_KEYED_SYMBOL2 = "@@__IMMUTABLE_KEYED__@@";
  function isKeyed2(maybeKeyed) {
    return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL2]);
  }
  var IS_INDEXED_SYMBOL2 = "@@__IMMUTABLE_INDEXED__@@";
  function isIndexed2(maybeIndexed) {
    return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL2]);
  }
  function isAssociative2(maybeAssociative) {
    return isKeyed2(maybeAssociative) || isIndexed2(maybeAssociative);
  }
  var Collection3 = function Collection4(value) {
    return isCollection2(value) ? value : Seq2(value);
  };
  var KeyedCollection2 = function(Collection5) {
    function KeyedCollection3(value) {
      return isKeyed2(value) ? value : KeyedSeq2(value);
    }
    if (Collection5)
      KeyedCollection3.__proto__ = Collection5;
    KeyedCollection3.prototype = Object.create(Collection5 && Collection5.prototype);
    KeyedCollection3.prototype.constructor = KeyedCollection3;
    return KeyedCollection3;
  }(Collection3);
  var IndexedCollection2 = function(Collection5) {
    function IndexedCollection3(value) {
      return isIndexed2(value) ? value : IndexedSeq2(value);
    }
    if (Collection5)
      IndexedCollection3.__proto__ = Collection5;
    IndexedCollection3.prototype = Object.create(Collection5 && Collection5.prototype);
    IndexedCollection3.prototype.constructor = IndexedCollection3;
    return IndexedCollection3;
  }(Collection3);
  var SetCollection2 = function(Collection5) {
    function SetCollection3(value) {
      return isCollection2(value) && !isAssociative2(value) ? value : SetSeq2(value);
    }
    if (Collection5)
      SetCollection3.__proto__ = Collection5;
    SetCollection3.prototype = Object.create(Collection5 && Collection5.prototype);
    SetCollection3.prototype.constructor = SetCollection3;
    return SetCollection3;
  }(Collection3);
  Collection3.Keyed = KeyedCollection2;
  Collection3.Indexed = IndexedCollection2;
  Collection3.Set = SetCollection2;
  var IS_SEQ_SYMBOL2 = "@@__IMMUTABLE_SEQ__@@";
  function isSeq2(maybeSeq) {
    return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL2]);
  }
  var IS_RECORD_SYMBOL2 = "@@__IMMUTABLE_RECORD__@@";
  function isRecord2(maybeRecord) {
    return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL2]);
  }
  function isImmutable2(maybeImmutable) {
    return isCollection2(maybeImmutable) || isRecord2(maybeImmutable);
  }
  var IS_ORDERED_SYMBOL2 = "@@__IMMUTABLE_ORDERED__@@";
  function isOrdered2(maybeOrdered) {
    return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL2]);
  }
  var ITERATE_KEYS2 = 0;
  var ITERATE_VALUES2 = 1;
  var ITERATE_ENTRIES2 = 2;
  var REAL_ITERATOR_SYMBOL2 = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL2 = "@@iterator";
  var ITERATOR_SYMBOL2 = REAL_ITERATOR_SYMBOL2 || FAUX_ITERATOR_SYMBOL2;
  var Iterator3 = function Iterator4(next) {
    this.next = next;
  };
  Iterator3.prototype.toString = function toString5() {
    return "[Iterator]";
  };
  Iterator3.KEYS = ITERATE_KEYS2;
  Iterator3.VALUES = ITERATE_VALUES2;
  Iterator3.ENTRIES = ITERATE_ENTRIES2;
  Iterator3.prototype.inspect = Iterator3.prototype.toSource = function() {
    return this.toString();
  };
  Iterator3.prototype[ITERATOR_SYMBOL2] = function() {
    return this;
  };
  function iteratorValue2(type2, k3, v3, iteratorResult) {
    var value = type2 === 0 ? k3 : type2 === 1 ? v3 : [k3, v3];
    iteratorResult ? iteratorResult.value = value : iteratorResult = {
      value,
      done: false
    };
    return iteratorResult;
  }
  function iteratorDone2() {
    return { value: void 0, done: true };
  }
  function hasIterator2(maybeIterable) {
    return !!getIteratorFn2(maybeIterable);
  }
  function isIterator2(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === "function";
  }
  function getIterator2(iterable) {
    var iteratorFn = getIteratorFn2(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }
  function getIteratorFn2(iterable) {
    var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL2 && iterable[REAL_ITERATOR_SYMBOL2] || iterable[FAUX_ITERATOR_SYMBOL2]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }
  var hasOwnProperty2 = Object.prototype.hasOwnProperty;
  function isArrayLike2(value) {
    if (Array.isArray(value) || typeof value === "string") {
      return true;
    }
    return value && typeof value === "object" && Number.isInteger(value.length) && value.length >= 0 && (value.length === 0 ? (
      // Only {length: 0} is considered Array-like.
      Object.keys(value).length === 1
    ) : (
      // An object is only Array-like if it has a property where the last value
      // in the array-like may be found (which could be undefined).
      value.hasOwnProperty(value.length - 1)
    ));
  }
  var Seq2 = function(Collection$$1) {
    function Seq3(value) {
      return value === null || value === void 0 ? emptySequence2() : isImmutable2(value) ? value.toSeq() : seqFromValue2(value);
    }
    if (Collection$$1)
      Seq3.__proto__ = Collection$$1;
    Seq3.prototype = Object.create(Collection$$1 && Collection$$1.prototype);
    Seq3.prototype.constructor = Seq3;
    Seq3.prototype.toSeq = function toSeq5() {
      return this;
    };
    Seq3.prototype.toString = function toString8() {
      return this.__toString("Seq {", "}");
    };
    Seq3.prototype.cacheResult = function cacheResult() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };
    Seq3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      var cache = this._cache;
      if (cache) {
        var size = cache.length;
        var i4 = 0;
        while (i4 !== size) {
          var entry = cache[reverse5 ? size - ++i4 : i4++];
          if (fn(entry[1], entry[0], this$1) === false) {
            break;
          }
        }
        return i4;
      }
      return this.__iterateUncached(fn, reverse5);
    };
    Seq3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var cache = this._cache;
      if (cache) {
        var size = cache.length;
        var i4 = 0;
        return new Iterator3(function() {
          if (i4 === size) {
            return iteratorDone2();
          }
          var entry = cache[reverse5 ? size - ++i4 : i4++];
          return iteratorValue2(type2, entry[0], entry[1]);
        });
      }
      return this.__iteratorUncached(type2, reverse5);
    };
    return Seq3;
  }(Collection3);
  var KeyedSeq2 = function(Seq3) {
    function KeyedSeq3(value) {
      return value === null || value === void 0 ? emptySequence2().toKeyedSeq() : isCollection2(value) ? isKeyed2(value) ? value.toSeq() : value.fromEntrySeq() : isRecord2(value) ? value.toSeq() : keyedSeqFromValue2(value);
    }
    if (Seq3)
      KeyedSeq3.__proto__ = Seq3;
    KeyedSeq3.prototype = Object.create(Seq3 && Seq3.prototype);
    KeyedSeq3.prototype.constructor = KeyedSeq3;
    KeyedSeq3.prototype.toKeyedSeq = function toKeyedSeq5() {
      return this;
    };
    return KeyedSeq3;
  }(Seq2);
  var IndexedSeq2 = function(Seq3) {
    function IndexedSeq3(value) {
      return value === null || value === void 0 ? emptySequence2() : isCollection2(value) ? isKeyed2(value) ? value.entrySeq() : value.toIndexedSeq() : isRecord2(value) ? value.toSeq().entrySeq() : indexedSeqFromValue2(value);
    }
    if (Seq3)
      IndexedSeq3.__proto__ = Seq3;
    IndexedSeq3.prototype = Object.create(Seq3 && Seq3.prototype);
    IndexedSeq3.prototype.constructor = IndexedSeq3;
    IndexedSeq3.of = function of() {
      return IndexedSeq3(arguments);
    };
    IndexedSeq3.prototype.toIndexedSeq = function toIndexedSeq3() {
      return this;
    };
    IndexedSeq3.prototype.toString = function toString8() {
      return this.__toString("Seq [", "]");
    };
    return IndexedSeq3;
  }(Seq2);
  var SetSeq2 = function(Seq3) {
    function SetSeq3(value) {
      return (isCollection2(value) && !isAssociative2(value) ? value : IndexedSeq2(value)).toSetSeq();
    }
    if (Seq3)
      SetSeq3.__proto__ = Seq3;
    SetSeq3.prototype = Object.create(Seq3 && Seq3.prototype);
    SetSeq3.prototype.constructor = SetSeq3;
    SetSeq3.of = function of() {
      return SetSeq3(arguments);
    };
    SetSeq3.prototype.toSetSeq = function toSetSeq3() {
      return this;
    };
    return SetSeq3;
  }(Seq2);
  Seq2.isSeq = isSeq2;
  Seq2.Keyed = KeyedSeq2;
  Seq2.Set = SetSeq2;
  Seq2.Indexed = IndexedSeq2;
  Seq2.prototype[IS_SEQ_SYMBOL2] = true;
  var ArraySeq2 = function(IndexedSeq3) {
    function ArraySeq3(array3) {
      this._array = array3;
      this.size = array3.length;
    }
    if (IndexedSeq3)
      ArraySeq3.__proto__ = IndexedSeq3;
    ArraySeq3.prototype = Object.create(IndexedSeq3 && IndexedSeq3.prototype);
    ArraySeq3.prototype.constructor = ArraySeq3;
    ArraySeq3.prototype.get = function get24(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex2(this, index)] : notSetValue;
    };
    ArraySeq3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      var array3 = this._array;
      var size = array3.length;
      var i4 = 0;
      while (i4 !== size) {
        var ii = reverse5 ? size - ++i4 : i4++;
        if (fn(array3[ii], ii, this$1) === false) {
          break;
        }
      }
      return i4;
    };
    ArraySeq3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var array3 = this._array;
      var size = array3.length;
      var i4 = 0;
      return new Iterator3(function() {
        if (i4 === size) {
          return iteratorDone2();
        }
        var ii = reverse5 ? size - ++i4 : i4++;
        return iteratorValue2(type2, ii, array3[ii]);
      });
    };
    return ArraySeq3;
  }(IndexedSeq2);
  var ObjectSeq2 = function(KeyedSeq3) {
    function ObjectSeq3(object) {
      var keys3 = Object.keys(object);
      this._object = object;
      this._keys = keys3;
      this.size = keys3.length;
    }
    if (KeyedSeq3)
      ObjectSeq3.__proto__ = KeyedSeq3;
    ObjectSeq3.prototype = Object.create(KeyedSeq3 && KeyedSeq3.prototype);
    ObjectSeq3.prototype.constructor = ObjectSeq3;
    ObjectSeq3.prototype.get = function get24(key, notSetValue) {
      if (notSetValue !== void 0 && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };
    ObjectSeq3.prototype.has = function has9(key) {
      return hasOwnProperty2.call(this._object, key);
    };
    ObjectSeq3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      var object = this._object;
      var keys3 = this._keys;
      var size = keys3.length;
      var i4 = 0;
      while (i4 !== size) {
        var key = keys3[reverse5 ? size - ++i4 : i4++];
        if (fn(object[key], key, this$1) === false) {
          break;
        }
      }
      return i4;
    };
    ObjectSeq3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var object = this._object;
      var keys3 = this._keys;
      var size = keys3.length;
      var i4 = 0;
      return new Iterator3(function() {
        if (i4 === size) {
          return iteratorDone2();
        }
        var key = keys3[reverse5 ? size - ++i4 : i4++];
        return iteratorValue2(type2, key, object[key]);
      });
    };
    return ObjectSeq3;
  }(KeyedSeq2);
  ObjectSeq2.prototype[IS_ORDERED_SYMBOL2] = true;
  var CollectionSeq2 = function(IndexedSeq3) {
    function CollectionSeq3(collection) {
      this._collection = collection;
      this.size = collection.length || collection.size;
    }
    if (IndexedSeq3)
      CollectionSeq3.__proto__ = IndexedSeq3;
    CollectionSeq3.prototype = Object.create(IndexedSeq3 && IndexedSeq3.prototype);
    CollectionSeq3.prototype.constructor = CollectionSeq3;
    CollectionSeq3.prototype.__iterateUncached = function __iterateUncached(fn, reverse5) {
      var this$1 = this;
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var collection = this._collection;
      var iterator = getIterator2(collection);
      var iterations = 0;
      if (isIterator2(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this$1) === false) {
            break;
          }
        }
      }
      return iterations;
    };
    CollectionSeq3.prototype.__iteratorUncached = function __iteratorUncached(type2, reverse5) {
      if (reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      var collection = this._collection;
      var iterator = getIterator2(collection);
      if (!isIterator2(iterator)) {
        return new Iterator3(iteratorDone2);
      }
      var iterations = 0;
      return new Iterator3(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue2(type2, iterations++, step.value);
      });
    };
    return CollectionSeq3;
  }(IndexedSeq2);
  var EMPTY_SEQ2;
  function emptySequence2() {
    return EMPTY_SEQ2 || (EMPTY_SEQ2 = new ArraySeq2([]));
  }
  function keyedSeqFromValue2(value) {
    var seq = Array.isArray(value) ? new ArraySeq2(value) : hasIterator2(value) ? new CollectionSeq2(value) : void 0;
    if (seq) {
      return seq.fromEntrySeq();
    }
    if (typeof value === "object") {
      return new ObjectSeq2(value);
    }
    throw new TypeError(
      "Expected Array or collection object of [k, v] entries, or keyed object: " + value
    );
  }
  function indexedSeqFromValue2(value) {
    var seq = maybeIndexedSeqFromValue2(value);
    if (seq) {
      return seq;
    }
    throw new TypeError(
      "Expected Array or collection object of values: " + value
    );
  }
  function seqFromValue2(value) {
    var seq = maybeIndexedSeqFromValue2(value);
    if (seq) {
      return seq;
    }
    if (typeof value === "object") {
      return new ObjectSeq2(value);
    }
    throw new TypeError(
      "Expected Array or collection object of values, or keyed object: " + value
    );
  }
  function maybeIndexedSeqFromValue2(value) {
    return isArrayLike2(value) ? new ArraySeq2(value) : hasIterator2(value) ? new CollectionSeq2(value) : void 0;
  }
  var IS_MAP_SYMBOL2 = "@@__IMMUTABLE_MAP__@@";
  function isMap2(maybeMap) {
    return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL2]);
  }
  function isOrderedMap2(maybeOrderedMap) {
    return isMap2(maybeOrderedMap) && isOrdered2(maybeOrderedMap);
  }
  function isValueObject2(maybeValue) {
    return Boolean(
      maybeValue && typeof maybeValue.equals === "function" && typeof maybeValue.hashCode === "function"
    );
  }
  function is2(valueA, valueB) {
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    return !!(isValueObject2(valueA) && isValueObject2(valueB) && valueA.equals(valueB));
  }
  var IS_SORTED_SYMBOL = "@@__IMMUTABLE_SORTED__@@";
  function isSorted(maybeSorted) {
    return Boolean(maybeSorted && maybeSorted[IS_SORTED_SYMBOL]);
  }
  var imul3 = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul4(a4, b3) {
    a4 |= 0;
    b3 |= 0;
    var c3 = a4 & 65535;
    var d3 = b3 & 65535;
    return c3 * d3 + ((a4 >>> 16) * d3 + c3 * (b3 >>> 16) << 16 >>> 0) | 0;
  };
  function smi2(i32) {
    return i32 >>> 1 & 1073741824 | i32 & 3221225471;
  }
  var defaultValueOf2 = Object.prototype.valueOf;
  function hash2(o4) {
    switch (typeof o4) {
      case "boolean":
        return o4 ? 1108378657 : 1108378656;
      case "number":
        return hashNumber2(o4);
      case "string":
        return o4.length > STRING_HASH_CACHE_MIN_STRLEN2 ? cachedHashString2(o4) : hashString2(o4);
      case "object":
      case "function":
        if (o4 === null) {
          return 1108378658;
        }
        if (typeof o4.hashCode === "function") {
          return smi2(o4.hashCode(o4));
        }
        if (o4.valueOf !== defaultValueOf2 && typeof o4.valueOf === "function") {
          o4 = o4.valueOf(o4);
        }
        return hashJSObj2(o4);
      case "undefined":
        return 1108378659;
      default:
        if (typeof o4.toString === "function") {
          return hashString2(o4.toString());
        }
        throw new Error("Value type " + typeof o4 + " cannot be hashed.");
    }
  }
  function hashNumber2(n3) {
    if (n3 !== n3 || n3 === Infinity) {
      return 0;
    }
    var hash3 = n3 | 0;
    if (hash3 !== n3) {
      hash3 ^= n3 * 4294967295;
    }
    while (n3 > 4294967295) {
      n3 /= 4294967295;
      hash3 ^= n3;
    }
    return smi2(hash3);
  }
  function cachedHashString2(string) {
    var hashed = stringHashCache2[string];
    if (hashed === void 0) {
      hashed = hashString2(string);
      if (STRING_HASH_CACHE_SIZE2 === STRING_HASH_CACHE_MAX_SIZE2) {
        STRING_HASH_CACHE_SIZE2 = 0;
        stringHashCache2 = {};
      }
      STRING_HASH_CACHE_SIZE2++;
      stringHashCache2[string] = hashed;
    }
    return hashed;
  }
  function hashString2(string) {
    var hashed = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hashed = 31 * hashed + string.charCodeAt(ii) | 0;
    }
    return smi2(hashed);
  }
  function hashJSObj2(obj) {
    var hashed;
    if (usingWeakMap2) {
      hashed = weakMap2.get(obj);
      if (hashed !== void 0) {
        return hashed;
      }
    }
    hashed = obj[UID_HASH_KEY2];
    if (hashed !== void 0) {
      return hashed;
    }
    if (!canDefineProperty2) {
      hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY2];
      if (hashed !== void 0) {
        return hashed;
      }
      hashed = getIENodeHash2(obj);
      if (hashed !== void 0) {
        return hashed;
      }
    }
    hashed = ++objHashUID;
    if (objHashUID & 1073741824) {
      objHashUID = 0;
    }
    if (usingWeakMap2) {
      weakMap2.set(obj, hashed);
    } else if (isExtensible2 !== void 0 && isExtensible2(obj) === false) {
      throw new Error("Non-extensible objects are not allowed as keys.");
    } else if (canDefineProperty2) {
      Object.defineProperty(obj, UID_HASH_KEY2, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: hashed
      });
    } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(
          this,
          arguments
        );
      };
      obj.propertyIsEnumerable[UID_HASH_KEY2] = hashed;
    } else if (obj.nodeType !== void 0) {
      obj[UID_HASH_KEY2] = hashed;
    } else {
      throw new Error("Unable to set a non-enumerable property on object.");
    }
    return hashed;
  }
  var isExtensible2 = Object.isExtensible;
  var canDefineProperty2 = function() {
    try {
      Object.defineProperty({}, "@", {});
      return true;
    } catch (e4) {
      return false;
    }
  }();
  function getIENodeHash2(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1:
          return node.uniqueID;
        case 9:
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }
  var usingWeakMap2 = typeof WeakMap === "function";
  var weakMap2;
  if (usingWeakMap2) {
    weakMap2 = /* @__PURE__ */ new WeakMap();
  }
  var objHashUID = 0;
  var UID_HASH_KEY2 = "__immutablehash__";
  if (typeof Symbol === "function") {
    UID_HASH_KEY2 = Symbol(UID_HASH_KEY2);
  }
  var STRING_HASH_CACHE_MIN_STRLEN2 = 16;
  var STRING_HASH_CACHE_MAX_SIZE2 = 255;
  var STRING_HASH_CACHE_SIZE2 = 0;
  var stringHashCache2 = {};
  var swap = function(array3, i4, j3) {
    var tmp = array3[i4];
    array3[i4] = array3[j3];
    array3[j3] = tmp;
  };
  var sampleThreshold = 1e3;
  var sampleReach = 0.5;
  var quickSelectRange = function(array3, left2, right2, k3, comparator) {
    if (k3 < left2 || k3 > right2) {
      return;
    }
    while (right2 > left2) {
      if (right2 - left2 > sampleThreshold) {
        var n3 = right2 - left2 + 1;
        var i4 = k3 - left2 + 1;
        var z3 = Math.log(n3);
        var s3 = sampleReach * Math.exp(2 * z3 / 3);
        var sd = 0.5 * Math.sqrt(z3 * s3 * (n3 - s3) / n3) * Math.sign(i4 - n3 / 2);
        var newLeft = Math.max(left2, Math.floor(k3 - i4 * s3 / n3 + sd));
        var newRight = Math.min(right2, Math.floor(k3 + (n3 - i4) * s3 / n3 + sd));
        quickSelectRange(array3, newLeft, newRight, k3, comparator);
      }
      var t3 = array3[k3];
      var i$1 = left2;
      var j3 = right2;
      swap(array3, left2, k3);
      if (comparator(array3[right2], t3) > 0) {
        swap(array3, right2, left2);
      }
      while (i$1 < j3) {
        swap(array3, i$1++, j3--);
        while (comparator(array3[i$1], t3) < 0) {
          i$1++;
        }
        while (comparator(array3[j3], t3) > 0) {
          j3--;
        }
      }
      if (array3[left2] === t3) {
        swap(array3, left2, j3);
      } else {
        swap(array3, ++j3, right2);
      }
      if (j3 <= k3) {
        left2 = j3 + 1;
      }
      if (k3 <= j3) {
        right2 = j3 - 1;
      }
    }
  };
  var quickSelect = function(array3, k3, comparator) {
    if (!comparator) {
      comparator = function(a4, b3) {
        return a4 > b3 ? 1 : a4 < b3 ? -1 : 0;
      };
    }
    quickSelectRange(array3, 0, array3.length - 1, k3, comparator);
  };
  var ToKeyedSequence2 = function(KeyedSeq$$1) {
    function ToKeyedSequence3(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }
    if (KeyedSeq$$1)
      ToKeyedSequence3.__proto__ = KeyedSeq$$1;
    ToKeyedSequence3.prototype = Object.create(KeyedSeq$$1 && KeyedSeq$$1.prototype);
    ToKeyedSequence3.prototype.constructor = ToKeyedSequence3;
    ToKeyedSequence3.prototype.get = function get24(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };
    ToKeyedSequence3.prototype.has = function has9(key) {
      return this._iter.has(key);
    };
    ToKeyedSequence3.prototype.valueSeq = function valueSeq3() {
      return this._iter.valueSeq();
    };
    ToKeyedSequence3.prototype.reverse = function reverse5() {
      var this$1 = this;
      var reversedSequence = reverseFactory2(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function() {
          return this$1._iter.toSeq().reverse();
        };
      }
      return reversedSequence;
    };
    ToKeyedSequence3.prototype.map = function map5(mapper, context) {
      var this$1 = this;
      var mappedSequence = mapFactory2(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function() {
          return this$1._iter.toSeq().map(mapper, context);
        };
      }
      return mappedSequence;
    };
    ToKeyedSequence3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      return this._iter.__iterate(function(v3, k3) {
        return fn(v3, k3, this$1);
      }, reverse5);
    };
    ToKeyedSequence3.prototype.__iterator = function __iterator3(type2, reverse5) {
      return this._iter.__iterator(type2, reverse5);
    };
    return ToKeyedSequence3;
  }(KeyedSeq2);
  ToKeyedSequence2.prototype[IS_ORDERED_SYMBOL2] = true;
  var ToIndexedSequence2 = function(IndexedSeq$$1) {
    function ToIndexedSequence3(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    if (IndexedSeq$$1)
      ToIndexedSequence3.__proto__ = IndexedSeq$$1;
    ToIndexedSequence3.prototype = Object.create(IndexedSeq$$1 && IndexedSeq$$1.prototype);
    ToIndexedSequence3.prototype.constructor = ToIndexedSequence3;
    ToIndexedSequence3.prototype.includes = function includes5(value) {
      return this._iter.includes(value);
    };
    ToIndexedSequence3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      var i4 = 0;
      reverse5 && ensureSize2(this);
      return this._iter.__iterate(
        function(v3) {
          return fn(v3, reverse5 ? this$1.size - ++i4 : i4++, this$1);
        },
        reverse5
      );
    };
    ToIndexedSequence3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var this$1 = this;
      var iterator = this._iter.__iterator(ITERATE_VALUES2, reverse5);
      var i4 = 0;
      reverse5 && ensureSize2(this);
      return new Iterator3(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue2(
          type2,
          reverse5 ? this$1.size - ++i4 : i4++,
          step.value,
          step
        );
      });
    };
    return ToIndexedSequence3;
  }(IndexedSeq2);
  var ToSetSequence2 = function(SetSeq$$1) {
    function ToSetSequence3(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    if (SetSeq$$1)
      ToSetSequence3.__proto__ = SetSeq$$1;
    ToSetSequence3.prototype = Object.create(SetSeq$$1 && SetSeq$$1.prototype);
    ToSetSequence3.prototype.constructor = ToSetSequence3;
    ToSetSequence3.prototype.has = function has9(key) {
      return this._iter.includes(key);
    };
    ToSetSequence3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      return this._iter.__iterate(function(v3) {
        return fn(v3, v3, this$1);
      }, reverse5);
    };
    ToSetSequence3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var iterator = this._iter.__iterator(ITERATE_VALUES2, reverse5);
      return new Iterator3(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue2(type2, step.value, step.value, step);
      });
    };
    return ToSetSequence3;
  }(SetSeq2);
  var FromEntriesSequence2 = function(KeyedSeq$$1) {
    function FromEntriesSequence3(entries5) {
      this._iter = entries5;
      this.size = entries5.size;
    }
    if (KeyedSeq$$1)
      FromEntriesSequence3.__proto__ = KeyedSeq$$1;
    FromEntriesSequence3.prototype = Object.create(KeyedSeq$$1 && KeyedSeq$$1.prototype);
    FromEntriesSequence3.prototype.constructor = FromEntriesSequence3;
    FromEntriesSequence3.prototype.entrySeq = function entrySeq3() {
      return this._iter.toSeq();
    };
    FromEntriesSequence3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      return this._iter.__iterate(function(entry) {
        if (entry) {
          validateEntry2(entry);
          var indexedCollection = isCollection2(entry);
          return fn(
            indexedCollection ? entry.get(1) : entry[1],
            indexedCollection ? entry.get(0) : entry[0],
            this$1
          );
        }
      }, reverse5);
    };
    FromEntriesSequence3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var iterator = this._iter.__iterator(ITERATE_VALUES2, reverse5);
      return new Iterator3(function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          if (entry) {
            validateEntry2(entry);
            var indexedCollection = isCollection2(entry);
            return iteratorValue2(
              type2,
              indexedCollection ? entry.get(0) : entry[0],
              indexedCollection ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };
    return FromEntriesSequence3;
  }(KeyedSeq2);
  ToIndexedSequence2.prototype.cacheResult = ToKeyedSequence2.prototype.cacheResult = ToSetSequence2.prototype.cacheResult = FromEntriesSequence2.prototype.cacheResult = cacheResultThrough2;
  function flipFactory2(collection) {
    var flipSequence = makeSequence2(collection);
    flipSequence._iter = collection;
    flipSequence.size = collection.size;
    flipSequence.flip = function() {
      return collection;
    };
    flipSequence.reverse = function() {
      var reversedSequence = collection.reverse.apply(this);
      reversedSequence.flip = function() {
        return collection.reverse();
      };
      return reversedSequence;
    };
    flipSequence.has = function(key) {
      return collection.includes(key);
    };
    flipSequence.includes = function(key) {
      return collection.has(key);
    };
    flipSequence.cacheResult = cacheResultThrough2;
    flipSequence.__iterateUncached = function(fn, reverse5) {
      var this$1 = this;
      return collection.__iterate(function(v3, k3) {
        return fn(k3, v3, this$1) !== false;
      }, reverse5);
    };
    flipSequence.__iteratorUncached = function(type2, reverse5) {
      if (type2 === ITERATE_ENTRIES2) {
        var iterator = collection.__iterator(type2, reverse5);
        return new Iterator3(function() {
          var step = iterator.next();
          if (!step.done) {
            var k3 = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k3;
          }
          return step;
        });
      }
      return collection.__iterator(
        type2 === ITERATE_VALUES2 ? ITERATE_KEYS2 : ITERATE_VALUES2,
        reverse5
      );
    };
    return flipSequence;
  }
  function mapFactory2(collection, mapper, context) {
    var mappedSequence = makeSequence2(collection);
    mappedSequence.size = collection.size;
    mappedSequence.has = function(key) {
      return collection.has(key);
    };
    mappedSequence.get = function(key, notSetValue) {
      var v3 = collection.get(key, NOT_SET2);
      return v3 === NOT_SET2 ? notSetValue : mapper.call(context, v3, key, collection);
    };
    mappedSequence.__iterateUncached = function(fn, reverse5) {
      var this$1 = this;
      return collection.__iterate(
        function(v3, k3, c3) {
          return fn(mapper.call(context, v3, k3, c3), k3, this$1) !== false;
        },
        reverse5
      );
    };
    mappedSequence.__iteratorUncached = function(type2, reverse5) {
      var iterator = collection.__iterator(ITERATE_ENTRIES2, reverse5);
      return new Iterator3(function() {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue2(
          type2,
          key,
          mapper.call(context, entry[1], key, collection),
          step
        );
      });
    };
    return mappedSequence;
  }
  function reverseFactory2(collection, useKeys) {
    var this$1 = this;
    var reversedSequence = makeSequence2(collection);
    reversedSequence._iter = collection;
    reversedSequence.size = collection.size;
    reversedSequence.reverse = function() {
      return collection;
    };
    if (collection.flip) {
      reversedSequence.flip = function() {
        var flipSequence = flipFactory2(collection);
        flipSequence.reverse = function() {
          return collection.flip();
        };
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) {
      return collection.get(useKeys ? key : -1 - key, notSetValue);
    };
    reversedSequence.has = function(key) {
      return collection.has(useKeys ? key : -1 - key);
    };
    reversedSequence.includes = function(value) {
      return collection.includes(value);
    };
    reversedSequence.cacheResult = cacheResultThrough2;
    reversedSequence.__iterate = function(fn, reverse5) {
      var this$12 = this;
      var i4 = 0;
      reverse5 && ensureSize2(collection);
      return collection.__iterate(
        function(v3, k3) {
          return fn(v3, useKeys ? k3 : reverse5 ? this$12.size - ++i4 : i4++, this$12);
        },
        !reverse5
      );
    };
    reversedSequence.__iterator = function(type2, reverse5) {
      var i4 = 0;
      reverse5 && ensureSize2(collection);
      var iterator = collection.__iterator(ITERATE_ENTRIES2, !reverse5);
      return new Iterator3(function() {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        return iteratorValue2(
          type2,
          useKeys ? entry[0] : reverse5 ? this$1.size - ++i4 : i4++,
          entry[1],
          step
        );
      });
    };
    return reversedSequence;
  }
  function filterFactory2(collection, predicate, context, useKeys) {
    var filterSequence = makeSequence2(collection);
    if (useKeys) {
      filterSequence.has = function(key) {
        var v3 = collection.get(key, NOT_SET2);
        return v3 !== NOT_SET2 && !!predicate.call(context, v3, key, collection);
      };
      filterSequence.get = function(key, notSetValue) {
        var v3 = collection.get(key, NOT_SET2);
        return v3 !== NOT_SET2 && predicate.call(context, v3, key, collection) ? v3 : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function(fn, reverse5) {
      var this$1 = this;
      var iterations = 0;
      collection.__iterate(function(v3, k3, c3) {
        if (predicate.call(context, v3, k3, c3)) {
          iterations++;
          return fn(v3, useKeys ? k3 : iterations - 1, this$1);
        }
      }, reverse5);
      return iterations;
    };
    filterSequence.__iteratorUncached = function(type2, reverse5) {
      var iterator = collection.__iterator(ITERATE_ENTRIES2, reverse5);
      var iterations = 0;
      return new Iterator3(function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, collection)) {
            return iteratorValue2(type2, useKeys ? key : iterations++, value, step);
          }
        }
      });
    };
    return filterSequence;
  }
  function countByFactory2(collection, grouper, context) {
    var groups = Map3().asMutable();
    collection.__iterate(function(v3, k3) {
      groups.update(grouper.call(context, v3, k3, collection), 0, function(a4) {
        return a4 + 1;
      });
    });
    return groups.asImmutable();
  }
  function groupByFactory2(collection, grouper, context) {
    var isKeyedIter = isKeyed2(collection);
    var groups = (isOrdered2(collection) ? OrderedMap2() : Map3()).asMutable();
    collection.__iterate(function(v3, k3) {
      groups.update(
        grouper.call(context, v3, k3, collection),
        function(a4) {
          return a4 = a4 || [], a4.push(isKeyedIter ? [k3, v3] : v3), a4;
        }
      );
    });
    var coerce = collectionClass2(collection);
    return groups.map(function(arr) {
      return reify2(collection, coerce(arr));
    }).asImmutable();
  }
  function sliceFactory2(collection, begin, end, useKeys) {
    var originalSize = collection.size;
    if (wholeSlice2(begin, end, originalSize)) {
      return collection;
    }
    var resolvedBegin = resolveBegin2(begin, originalSize);
    var resolvedEnd = resolveEnd2(end, originalSize);
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory2(collection.toSeq().cacheResult(), begin, end, useKeys);
    }
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }
    var sliceSeq = makeSequence2(collection);
    sliceSeq.size = sliceSize === 0 ? sliceSize : collection.size && sliceSize || void 0;
    if (!useKeys && isSeq2(collection) && sliceSize >= 0) {
      sliceSeq.get = function(index, notSetValue) {
        index = wrapIndex2(this, index);
        return index >= 0 && index < sliceSize ? collection.get(index + resolvedBegin, notSetValue) : notSetValue;
      };
    }
    sliceSeq.__iterateUncached = function(fn, reverse5) {
      var this$1 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      collection.__iterate(function(v3, k3) {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v3, useKeys ? k3 : iterations - 1, this$1) !== false && iterations !== sliceSize;
        }
      });
      return iterations;
    };
    sliceSeq.__iteratorUncached = function(type2, reverse5) {
      if (sliceSize !== 0 && reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      if (sliceSize === 0) {
        return new Iterator3(iteratorDone2);
      }
      var iterator = collection.__iterator(type2, reverse5);
      var skipped = 0;
      var iterations = 0;
      return new Iterator3(function() {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone2();
        }
        var step = iterator.next();
        if (useKeys || type2 === ITERATE_VALUES2 || step.done) {
          return step;
        }
        if (type2 === ITERATE_KEYS2) {
          return iteratorValue2(type2, iterations - 1, void 0, step);
        }
        return iteratorValue2(type2, iterations - 1, step.value[1], step);
      });
    };
    return sliceSeq;
  }
  function takeWhileFactory2(collection, predicate, context) {
    var takeSequence = makeSequence2(collection);
    takeSequence.__iterateUncached = function(fn, reverse5) {
      var this$1 = this;
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var iterations = 0;
      collection.__iterate(
        function(v3, k3, c3) {
          return predicate.call(context, v3, k3, c3) && ++iterations && fn(v3, k3, this$1);
        }
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type2, reverse5) {
      var this$1 = this;
      if (reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      var iterator = collection.__iterator(ITERATE_ENTRIES2, reverse5);
      var iterating = true;
      return new Iterator3(function() {
        if (!iterating) {
          return iteratorDone2();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k3 = entry[0];
        var v3 = entry[1];
        if (!predicate.call(context, v3, k3, this$1)) {
          iterating = false;
          return iteratorDone2();
        }
        return type2 === ITERATE_ENTRIES2 ? step : iteratorValue2(type2, k3, v3, step);
      });
    };
    return takeSequence;
  }
  function skipWhileFactory2(collection, predicate, context, useKeys) {
    var skipSequence = makeSequence2(collection);
    skipSequence.__iterateUncached = function(fn, reverse5) {
      var this$1 = this;
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var isSkipping = true;
      var iterations = 0;
      collection.__iterate(function(v3, k3, c3) {
        if (!(isSkipping && (isSkipping = predicate.call(context, v3, k3, c3)))) {
          iterations++;
          return fn(v3, useKeys ? k3 : iterations - 1, this$1);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type2, reverse5) {
      var this$1 = this;
      if (reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      var iterator = collection.__iterator(ITERATE_ENTRIES2, reverse5);
      var skipping = true;
      var iterations = 0;
      return new Iterator3(function() {
        var step;
        var k3;
        var v3;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type2 === ITERATE_VALUES2) {
              return step;
            }
            if (type2 === ITERATE_KEYS2) {
              return iteratorValue2(type2, iterations++, void 0, step);
            }
            return iteratorValue2(type2, iterations++, step.value[1], step);
          }
          var entry = step.value;
          k3 = entry[0];
          v3 = entry[1];
          skipping && (skipping = predicate.call(context, v3, k3, this$1));
        } while (skipping);
        return type2 === ITERATE_ENTRIES2 ? step : iteratorValue2(type2, k3, v3, step);
      });
    };
    return skipSequence;
  }
  function concatFactory2(collection, values3) {
    var isKeyedCollection = isKeyed2(collection);
    var iters = [collection].concat(values3).map(function(v3) {
      if (!isCollection2(v3)) {
        v3 = isKeyedCollection ? keyedSeqFromValue2(v3) : indexedSeqFromValue2(Array.isArray(v3) ? v3 : [v3]);
      } else if (isKeyedCollection) {
        v3 = KeyedCollection2(v3);
      }
      return v3;
    }).filter(function(v3) {
      return v3.size !== 0;
    });
    if (iters.length === 0) {
      return collection;
    }
    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === collection || isKeyedCollection && isKeyed2(singleton) || isIndexed2(collection) && isIndexed2(singleton)) {
        return singleton;
      }
    }
    var concatSeq = new ArraySeq2(iters);
    if (isKeyedCollection) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed2(collection)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(function(sum, seq) {
      if (sum !== void 0) {
        var size = seq.size;
        if (size !== void 0) {
          return sum + size;
        }
      }
    }, 0);
    return concatSeq;
  }
  function flattenFactory2(collection, depth, useKeys) {
    var flatSequence = makeSequence2(collection);
    flatSequence.__iterateUncached = function(fn, reverse5) {
      if (reverse5) {
        return this.cacheResult().__iterate(fn, reverse5);
      }
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {
        iter.__iterate(function(v3, k3) {
          if ((!depth || currentDepth < depth) && isCollection2(v3)) {
            flatDeep(v3, currentDepth + 1);
          } else {
            iterations++;
            if (fn(v3, useKeys ? k3 : iterations - 1, flatSequence) === false) {
              stopped = true;
            }
          }
          return !stopped;
        }, reverse5);
      }
      flatDeep(collection, 0);
      return iterations;
    };
    flatSequence.__iteratorUncached = function(type2, reverse5) {
      if (reverse5) {
        return this.cacheResult().__iterator(type2, reverse5);
      }
      var iterator = collection.__iterator(type2, reverse5);
      var stack = [];
      var iterations = 0;
      return new Iterator3(function() {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v3 = step.value;
          if (type2 === ITERATE_ENTRIES2) {
            v3 = v3[1];
          }
          if ((!depth || stack.length < depth) && isCollection2(v3)) {
            stack.push(iterator);
            iterator = v3.__iterator(type2, reverse5);
          } else {
            return useKeys ? step : iteratorValue2(type2, iterations++, v3, step);
          }
        }
        return iteratorDone2();
      });
    };
    return flatSequence;
  }
  function flatMapFactory2(collection, mapper, context) {
    var coerce = collectionClass2(collection);
    return collection.toSeq().map(function(v3, k3) {
      return coerce(mapper.call(context, v3, k3, collection));
    }).flatten(true);
  }
  function interposeFactory2(collection, separator) {
    var interposedSequence = makeSequence2(collection);
    interposedSequence.size = collection.size && collection.size * 2 - 1;
    interposedSequence.__iterateUncached = function(fn, reverse5) {
      var this$1 = this;
      var iterations = 0;
      collection.__iterate(
        function(v3) {
          return (!iterations || fn(separator, iterations++, this$1) !== false) && fn(v3, iterations++, this$1) !== false;
        },
        reverse5
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type2, reverse5) {
      var iterator = collection.__iterator(ITERATE_VALUES2, reverse5);
      var iterations = 0;
      var step;
      return new Iterator3(function() {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ? iteratorValue2(type2, iterations++, separator) : iteratorValue2(type2, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }
  function sortFactory2(collection, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator2;
    }
    var isKeyedCollection = isKeyed2(collection);
    var index = 0;
    var entries5 = collection.toSeq().map(function(v3, k3) {
      return [k3, v3, index++, mapper ? mapper(v3, k3, collection) : v3];
    }).valueSeq().toArray();
    entries5.sort(function(a4, b3) {
      return comparator(a4[3], b3[3]) || a4[2] - b3[2];
    }).forEach(
      isKeyedCollection ? function(v3, i4) {
        entries5[i4].length = 2;
      } : function(v3, i4) {
        entries5[i4] = v3[1];
      }
    );
    return isKeyedCollection ? KeyedSeq2(entries5) : isIndexed2(collection) ? IndexedSeq2(entries5) : SetSeq2(entries5);
  }
  function partialSortFactory(collection, n3, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator2;
    }
    var isKeyedCollection = isKeyed2(collection);
    var index = 0;
    var entries5 = collection.toSeq().map(function(v3, k3) {
      return [k3, v3, index++, mapper ? mapper(v3, k3, collection) : v3];
    }).valueSeq().toArray();
    var cmp = function(a4, b3) {
      return comparator(a4[3], b3[3]) || a4[2] - b3[2];
    };
    quickSelect(entries5, n3, cmp);
    entries5 = entries5.slice(0, n3);
    entries5.sort(cmp).forEach(
      isKeyedCollection ? function(v3, i4) {
        entries5[i4].length = 2;
      } : function(v3, i4) {
        entries5[i4] = v3[1];
      }
    );
    return isKeyedCollection ? KeyedSeq2(entries5) : isIndexed2(collection) ? IndexedSeq2(entries5) : SetSeq2(entries5);
  }
  function incSortFactory(collection, comparator, mapper, useKeys) {
    if (!comparator) {
      comparator = defaultComparator2;
    }
    var index = 0;
    var entriesSeq = collection.toSeq().map(function(v3, k3) {
      return [k3, v3, index++, mapper ? mapper(v3, k3, collection) : v3];
    }).valueSeq();
    var sequence = makeSequence2(collection);
    sequence.__iterateUncached = function(fn, reverse5) {
      var this$1 = this;
      var entries5 = entriesSeq.toArray();
      var rcmp = reverse5 ? function(a4, b3) {
        return comparator(b3, a4);
      } : comparator;
      var cmp = function(a4, b3) {
        return rcmp(a4[3], b3[3]) || a4[2] - b3[2];
      };
      var nextn = entries5.length >> 10;
      nextn = Math.min(entries5.length, 10);
      var from = 0;
      var to = -1;
      var n3 = 0;
      var i4 = 0;
      var sortedEntries;
      function nextBatch() {
        from = to + 1;
        to = Math.min(to + nextn, entries5.length - 1);
        n3 = to - from + 1;
        i4 = 0;
        nextn <<= 2;
        quickSelectRange(entries5, from, entries5.length - 1, to, cmp);
        sortedEntries = entries5.slice(from, to + 1);
        sortedEntries.sort(cmp).forEach(function(v3, i5) {
          sortedEntries[i5].length = 2;
        });
      }
      function nextEntry() {
        if (i4 >= n3) {
          nextBatch();
        }
        return sortedEntries[i4++];
      }
      var iterations = 0;
      while (iterations < entries5.length) {
        var entry = nextEntry();
        if (fn(entry[1], useKeys ? entry[0] : iterations, this$1) === false) {
          break;
        }
        iterations++;
      }
      return iterations;
    };
    sequence.__iteratorUncached = function(type2, reverse5) {
      var entries5 = entriesSeq.toArray();
      var rcmp = reverse5 ? function(a4, b3) {
        return comparator(b3, a4);
      } : comparator;
      var cmp = function(a4, b3) {
        return rcmp(a4[3], b3[3]) || a4[2] - b3[2];
      };
      var nextn = entries5.length >> 10;
      nextn = Math.min(entries5.length, 10);
      var from = 0;
      var to = -1;
      var n3 = 0;
      var i4 = 0;
      var sortedEntries;
      function nextBatch() {
        from = to + 1;
        to = Math.min(to + nextn, entries5.length - 1);
        n3 = to - from + 1;
        i4 = 0;
        nextn <<= 2;
        quickSelectRange(entries5, from, entries5.length - 1, to, cmp);
        sortedEntries = entries5.slice(from, to + 1);
        sortedEntries.sort(cmp).forEach(function(v3, i5) {
          sortedEntries[i5].length = 2;
        });
      }
      function nextEntry() {
        if (i4 >= n3) {
          nextBatch();
        }
        return sortedEntries[i4++];
      }
      var iterations = 0;
      return new Iterator3(function() {
        if (iterations >= entries5.length) {
          return iteratorDone2();
        }
        iterations++;
        var entry = nextEntry(cmp);
        return iteratorValue2(type2, useKeys ? entry[0] : iterations, entry[1]);
      });
    };
    return sequence;
  }
  function maxFactory2(collection, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator2;
    }
    if (mapper) {
      var entry = collection.toSeq().map(function(v3, k3) {
        return [v3, mapper(v3, k3, collection)];
      }).reduce(function(a4, b3) {
        return maxCompare2(comparator, a4[1], b3[1]) ? b3 : a4;
      });
      return entry && entry[0];
    }
    return collection.reduce(function(a4, b3) {
      return maxCompare2(comparator, a4, b3) ? b3 : a4;
    });
  }
  function maxCompare2(comparator, a4, b3) {
    var comp = comparator(b3, a4);
    return comp === 0 && b3 !== a4 && (b3 === void 0 || b3 === null || b3 !== b3) || comp > 0;
  }
  function zipWithFactory2(keyIter, zipper, iters, zipAll3) {
    var zipSequence = makeSequence2(keyIter);
    var sizes = new ArraySeq2(iters).map(function(i4) {
      return i4.size;
    });
    zipSequence.size = zipAll3 ? sizes.max() : sizes.min();
    zipSequence.__iterate = function(fn, reverse5) {
      var this$1 = this;
      var iterator = this.__iterator(ITERATE_VALUES2, reverse5);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this$1) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type2, reverse5) {
      var iterators = iters.map(
        function(i4) {
          return i4 = Collection3(i4), getIterator2(reverse5 ? i4.reverse() : i4);
        }
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator3(function() {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i4) {
            return i4.next();
          });
          isDone = zipAll3 ? steps.every(function(s3) {
            return s3.done;
          }) : steps.some(function(s3) {
            return s3.done;
          });
        }
        if (isDone) {
          return iteratorDone2();
        }
        return iteratorValue2(
          type2,
          iterations++,
          zipper.apply(null, steps.map(function(s3) {
            return s3.value;
          }))
        );
      });
    };
    return zipSequence;
  }
  function reify2(iter, seq) {
    return iter === seq ? iter : isSeq2(iter) ? seq : iter.constructor(seq);
  }
  function validateEntry2(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError("Expected [K, V] tuple: " + entry);
    }
  }
  function collectionClass2(collection) {
    return isKeyed2(collection) ? KeyedCollection2 : isIndexed2(collection) ? IndexedCollection2 : SetCollection2;
  }
  function makeSequence2(collection) {
    return Object.create(
      (isKeyed2(collection) ? KeyedSeq2 : isIndexed2(collection) ? IndexedSeq2 : SetSeq2).prototype
    );
  }
  function cacheResultThrough2() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    }
    return Seq2.prototype.cacheResult.call(this);
  }
  function defaultComparator2(a4, b3) {
    if (a4 === void 0 && b3 === void 0) {
      return 0;
    }
    if (a4 === void 0) {
      return 1;
    }
    if (b3 === void 0) {
      return -1;
    }
    return a4 > b3 ? 1 : a4 < b3 ? -1 : 0;
  }
  function arrCopy2(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }
  function invariant2(condition, error) {
    if (!condition) {
      throw new Error(error);
    }
  }
  function assertNotInfinite2(size) {
    invariant2(
      size !== Infinity,
      "Cannot perform this action with an infinite size."
    );
  }
  function coerceKeyPath2(keyPath) {
    if (isArrayLike2(keyPath) && typeof keyPath !== "string") {
      return keyPath;
    }
    if (isOrdered2(keyPath)) {
      return keyPath.toArray();
    }
    throw new TypeError(
      "Invalid keyPath: expected Ordered Collection or Array: " + keyPath
    );
  }
  function isPlainObj(value) {
    return value && (typeof value.constructor !== "function" || value.constructor.name === "Object");
  }
  function isDataStructure2(value) {
    return typeof value === "object" && (isImmutable2(value) || Array.isArray(value) || isPlainObj(value));
  }
  function quoteString2(value) {
    try {
      return typeof value === "string" ? JSON.stringify(value) : String(value);
    } catch (_ignoreError) {
      return JSON.stringify(value);
    }
  }
  function has5(collection, key) {
    return isImmutable2(collection) ? collection.has(key) : isDataStructure2(collection) && hasOwnProperty2.call(collection, key);
  }
  function get13(collection, key, notSetValue) {
    return isImmutable2(collection) ? collection.get(key, notSetValue) : !has5(collection, key) ? notSetValue : typeof collection.get === "function" ? collection.get(key) : collection[key];
  }
  function shallowCopy2(from) {
    if (Array.isArray(from)) {
      return arrCopy2(from);
    }
    var to = {};
    for (var key in from) {
      if (hasOwnProperty2.call(from, key)) {
        to[key] = from[key];
      }
    }
    return to;
  }
  function remove4(collection, key) {
    if (!isDataStructure2(collection)) {
      throw new TypeError(
        "Cannot update non-data-structure value: " + collection
      );
    }
    if (isImmutable2(collection)) {
      if (!collection.remove) {
        throw new TypeError(
          "Cannot update immutable value without .remove() method: " + collection
        );
      }
      return collection.remove(key);
    }
    if (!hasOwnProperty2.call(collection, key)) {
      return collection;
    }
    var collectionCopy = shallowCopy2(collection);
    if (Array.isArray(collectionCopy)) {
      collectionCopy.splice(key, 1);
    } else {
      delete collectionCopy[key];
    }
    return collectionCopy;
  }
  function set5(collection, key, value) {
    if (!isDataStructure2(collection)) {
      throw new TypeError(
        "Cannot update non-data-structure value: " + collection
      );
    }
    if (isImmutable2(collection)) {
      if (!collection.set) {
        throw new TypeError(
          "Cannot update immutable value without .set() method: " + collection
        );
      }
      return collection.set(key, value);
    }
    if (hasOwnProperty2.call(collection, key) && value === collection[key]) {
      return collection;
    }
    var collectionCopy = shallowCopy2(collection);
    collectionCopy[key] = value;
    return collectionCopy;
  }
  function updateIn2(collection, keyPath, notSetValue, updater) {
    if (!updater) {
      updater = notSetValue;
      notSetValue = void 0;
    }
    var updatedValue = updateInDeeply2(
      isImmutable2(collection),
      collection,
      coerceKeyPath2(keyPath),
      0,
      notSetValue,
      updater
    );
    return updatedValue === NOT_SET2 ? notSetValue : updatedValue;
  }
  function updateInDeeply2(inImmutable, existing, keyPath, i4, notSetValue, updater) {
    var wasNotSet = existing === NOT_SET2;
    if (i4 === keyPath.length) {
      var existingValue = wasNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    if (!wasNotSet && !isDataStructure2(existing)) {
      throw new TypeError(
        "Cannot update within non-data-structure value in path [" + keyPath.slice(0, i4).map(quoteString2) + "]: " + existing
      );
    }
    var key = keyPath[i4];
    var nextExisting = wasNotSet ? NOT_SET2 : get13(existing, key, NOT_SET2);
    var nextUpdated = updateInDeeply2(
      nextExisting === NOT_SET2 ? inImmutable : isImmutable2(nextExisting),
      nextExisting,
      keyPath,
      i4 + 1,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET2 ? remove4(existing, key) : set5(
      wasNotSet ? inImmutable ? emptyMap2() : {} : existing,
      key,
      nextUpdated
    );
  }
  function setIn$12(collection, keyPath, value) {
    return updateIn2(collection, keyPath, NOT_SET2, function() {
      return value;
    });
  }
  function setIn$$1(keyPath, v3) {
    return setIn$12(this, keyPath, v3);
  }
  function removeIn2(collection, keyPath) {
    return updateIn2(collection, keyPath, function() {
      return NOT_SET2;
    });
  }
  function deleteIn2(keyPath) {
    return removeIn2(this, keyPath);
  }
  function update$12(collection, key, notSetValue, updater) {
    return updateIn2(collection, [key], notSetValue, updater);
  }
  function update$$1(key, notSetValue, updater) {
    return arguments.length === 1 ? key(this) : update$12(this, key, notSetValue, updater);
  }
  function updateIn$12(keyPath, notSetValue, updater) {
    return updateIn2(this, keyPath, notSetValue, updater);
  }
  function merge() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    return mergeIntoKeyedWith2(this, iters);
  }
  function mergeWith(merger) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
      iters[len] = arguments[len + 1];
    if (typeof merger !== "function") {
      throw new TypeError("Invalid merger function: " + merger);
    }
    return mergeIntoKeyedWith2(this, iters, merger);
  }
  function mergeIntoKeyedWith2(collection, collections, merger) {
    var iters = [];
    for (var ii = 0; ii < collections.length; ii++) {
      var collection$1 = KeyedCollection2(collections[ii]);
      if (collection$1.size !== 0) {
        iters.push(collection$1);
      }
    }
    if (iters.length === 0) {
      return collection;
    }
    if (collection.toSeq().size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection2) {
      var mergeIntoCollection = merger ? function(value, key) {
        update$12(
          collection2,
          key,
          NOT_SET2,
          function(oldVal) {
            return oldVal === NOT_SET2 ? value : merger(oldVal, value, key);
          }
        );
      } : function(value, key) {
        collection2.set(key, value);
      };
      for (var ii2 = 0; ii2 < iters.length; ii2++) {
        iters[ii2].forEach(mergeIntoCollection);
      }
    });
  }
  function mergeDeepWithSources2(collection, sources, merger) {
    return mergeWithSources2(collection, sources, deepMergerWith2(merger));
  }
  function mergeWithSources2(collection, sources, merger) {
    if (!isDataStructure2(collection)) {
      throw new TypeError(
        "Cannot merge into non-data-structure value: " + collection
      );
    }
    if (isImmutable2(collection)) {
      return typeof merger === "function" && collection.mergeWith ? collection.mergeWith.apply(collection, [merger].concat(sources)) : collection.merge ? collection.merge.apply(collection, sources) : collection.concat.apply(collection, sources);
    }
    var isArray = Array.isArray(collection);
    var merged = collection;
    var Collection$$1 = isArray ? IndexedCollection2 : KeyedCollection2;
    var mergeItem = isArray ? function(value) {
      if (merged === collection) {
        merged = shallowCopy2(merged);
      }
      merged.push(value);
    } : function(value, key) {
      var hasVal = hasOwnProperty2.call(merged, key);
      var nextVal = hasVal && merger ? merger(merged[key], value, key) : value;
      if (!hasVal || nextVal !== merged[key]) {
        if (merged === collection) {
          merged = shallowCopy2(merged);
        }
        merged[key] = nextVal;
      }
    };
    for (var i4 = 0; i4 < sources.length; i4++) {
      Collection$$1(sources[i4]).forEach(mergeItem);
    }
    return merged;
  }
  function deepMergerWith2(merger) {
    function deepMerger(oldValue, newValue, key) {
      return isDataStructure2(oldValue) && isDataStructure2(newValue) ? mergeWithSources2(oldValue, [newValue], deepMerger) : merger ? merger(oldValue, newValue, key) : newValue;
    }
    return deepMerger;
  }
  function mergeDeep2() {
    var iters = [], len = arguments.length;
    while (len--)
      iters[len] = arguments[len];
    return mergeDeepWithSources2(this, iters);
  }
  function mergeDeepWith2(merger) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
      iters[len] = arguments[len + 1];
    return mergeDeepWithSources2(this, iters, merger);
  }
  function mergeIn2(keyPath) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
      iters[len] = arguments[len + 1];
    return updateIn2(this, keyPath, emptyMap2(), function(m3) {
      return mergeWithSources2(m3, iters);
    });
  }
  function mergeDeepIn2(keyPath) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0)
      iters[len] = arguments[len + 1];
    return updateIn2(
      this,
      keyPath,
      emptyMap2(),
      function(m3) {
        return mergeDeepWithSources2(m3, iters);
      }
    );
  }
  function withMutations2(fn) {
    var mutable = this.asMutable();
    fn(mutable);
    return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
  }
  function asMutable2() {
    return this.__ownerID ? this : this.__ensureOwner(new OwnerID2());
  }
  function asImmutable2() {
    return this.__ensureOwner();
  }
  function wasAltered3() {
    return this.__altered;
  }
  var Map3 = function(KeyedCollection$$1) {
    function Map4(value) {
      return value === null || value === void 0 ? emptyMap2() : isMap2(value) && !isOrdered2(value) && !isSorted(value) ? value : emptyMap2().withMutations(function(map5) {
        var iter = KeyedCollection$$1(value);
        assertNotInfinite2(iter.size);
        iter.forEach(function(v3, k3) {
          return map5.set(k3, v3);
        });
      });
    }
    if (KeyedCollection$$1)
      Map4.__proto__ = KeyedCollection$$1;
    Map4.prototype = Object.create(KeyedCollection$$1 && KeyedCollection$$1.prototype);
    Map4.prototype.constructor = Map4;
    Map4.of = function of() {
      var keyValues = [], len = arguments.length;
      while (len--)
        keyValues[len] = arguments[len];
      return emptyMap2().withMutations(function(map5) {
        for (var i4 = 0; i4 < keyValues.length; i4 += 2) {
          if (i4 + 1 >= keyValues.length) {
            throw new Error("Missing value for key: " + keyValues[i4]);
          }
          map5.set(keyValues[i4], keyValues[i4 + 1]);
        }
      });
    };
    Map4.prototype.toString = function toString8() {
      return this.__toString("Map {", "}");
    };
    Map4.prototype.get = function get24(k3, notSetValue) {
      return this._root ? this._root.get(0, void 0, k3, notSetValue) : notSetValue;
    };
    Map4.prototype.set = function set7(k3, v3) {
      return updateMap2(this, k3, v3);
    };
    Map4.prototype.remove = function remove7(k3) {
      return updateMap2(this, k3, NOT_SET2);
    };
    Map4.prototype.deleteAll = function deleteAll(keys3) {
      var collection = Collection3(keys3);
      if (collection.size === 0) {
        return this;
      }
      return this.withMutations(function(map5) {
        collection.forEach(function(key) {
          return map5.remove(key);
        });
      });
    };
    Map4.prototype.clear = function clear3() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyMap2();
    };
    Map4.prototype.sort = function sort3(comparator) {
      return OrderedMap2(sortFactory2(this, comparator));
    };
    Map4.prototype.sortBy = function sortBy3(mapper, comparator) {
      return OrderedMap2(sortFactory2(this, comparator, mapper));
    };
    Map4.prototype.map = function map5(mapper, context) {
      return this.withMutations(function(map6) {
        map6.forEach(function(value, key) {
          map6.set(key, mapper.call(context, value, key, map6));
        });
      });
    };
    Map4.prototype.__iterator = function __iterator3(type2, reverse5) {
      return new MapIterator2(this, type2, reverse5);
    };
    Map4.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry) {
        iterations++;
        return fn(entry[1], entry[0], this$1);
      }, reverse5);
      return iterations;
    };
    Map4.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptyMap2();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap2(this.size, this._root, ownerID, this.__hash);
    };
    return Map4;
  }(KeyedCollection2);
  Map3.isMap = isMap2;
  var MapPrototype2 = Map3.prototype;
  MapPrototype2[IS_MAP_SYMBOL2] = true;
  MapPrototype2[DELETE2] = MapPrototype2.remove;
  MapPrototype2.removeAll = MapPrototype2.deleteAll;
  MapPrototype2.setIn = setIn$$1;
  MapPrototype2.removeIn = MapPrototype2.deleteIn = deleteIn2;
  MapPrototype2.update = update$$1;
  MapPrototype2.updateIn = updateIn$12;
  MapPrototype2.merge = MapPrototype2.concat = merge;
  MapPrototype2.mergeWith = mergeWith;
  MapPrototype2.mergeDeep = mergeDeep2;
  MapPrototype2.mergeDeepWith = mergeDeepWith2;
  MapPrototype2.mergeIn = mergeIn2;
  MapPrototype2.mergeDeepIn = mergeDeepIn2;
  MapPrototype2.withMutations = withMutations2;
  MapPrototype2.wasAltered = wasAltered3;
  MapPrototype2.asImmutable = asImmutable2;
  MapPrototype2["@@transducer/init"] = MapPrototype2.asMutable = asMutable2;
  MapPrototype2["@@transducer/step"] = function(result, arr) {
    return result.set(arr[0], arr[1]);
  };
  MapPrototype2["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  var ArrayMapNode3 = function ArrayMapNode4(ownerID, entries5) {
    this.ownerID = ownerID;
    this.entries = entries5;
  };
  ArrayMapNode3.prototype.get = function get14(shift, keyHash, key, notSetValue) {
    var entries5 = this.entries;
    for (var ii = 0, len = entries5.length; ii < len; ii++) {
      if (is2(key, entries5[ii][0])) {
        return entries5[ii][1];
      }
    }
    return notSetValue;
  };
  ArrayMapNode3.prototype.update = function update$$12(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET2;
    var entries5 = this.entries;
    var idx = 0;
    var len = entries5.length;
    for (; idx < len; idx++) {
      if (is2(key, entries5[idx][0])) {
        break;
      }
    }
    var exists = idx < len;
    if (exists ? entries5[idx][1] === value : removed) {
      return this;
    }
    SetRef2(didAlter);
    (removed || !exists) && SetRef2(didChangeSize);
    if (removed && entries5.length === 1) {
      return;
    }
    if (!exists && !removed && entries5.length >= MAX_ARRAY_MAP_SIZE2) {
      return createNodes2(ownerID, entries5, key, value);
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries5 : arrCopy2(entries5);
    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
    }
    if (isEditable) {
      this.entries = newEntries;
      return this;
    }
    return new ArrayMapNode3(ownerID, newEntries);
  };
  var BitmapIndexedNode3 = function BitmapIndexedNode4(ownerID, bitmap, nodes) {
    this.ownerID = ownerID;
    this.bitmap = bitmap;
    this.nodes = nodes;
  };
  BitmapIndexedNode3.prototype.get = function get15(shift, keyHash, key, notSetValue) {
    if (keyHash === void 0) {
      keyHash = hash2(key);
    }
    var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK2);
    var bitmap = this.bitmap;
    return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount2(bitmap & bit - 1)].get(
      shift + SHIFT2,
      keyHash,
      key,
      notSetValue
    );
  };
  BitmapIndexedNode3.prototype.update = function update$$13(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === void 0) {
      keyHash = hash2(key);
    }
    var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK2;
    var bit = 1 << keyHashFrag;
    var bitmap = this.bitmap;
    var exists = (bitmap & bit) !== 0;
    if (!exists && value === NOT_SET2) {
      return this;
    }
    var idx = popCount2(bitmap & bit - 1);
    var nodes = this.nodes;
    var node = exists ? nodes[idx] : void 0;
    var newNode = updateNode2(
      node,
      ownerID,
      shift + SHIFT2,
      keyHash,
      key,
      value,
      didChangeSize,
      didAlter
    );
    if (newNode === node) {
      return this;
    }
    if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE2) {
      return expandNodes2(ownerID, nodes, bitmap, keyHashFrag, newNode);
    }
    if (exists && !newNode && nodes.length === 2 && isLeafNode2(nodes[idx ^ 1])) {
      return nodes[idx ^ 1];
    }
    if (exists && newNode && nodes.length === 1 && isLeafNode2(newNode)) {
      return newNode;
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
    var newNodes = exists ? newNode ? setAt2(nodes, idx, newNode, isEditable) : spliceOut2(nodes, idx, isEditable) : spliceIn2(nodes, idx, newNode, isEditable);
    if (isEditable) {
      this.bitmap = newBitmap;
      this.nodes = newNodes;
      return this;
    }
    return new BitmapIndexedNode3(ownerID, newBitmap, newNodes);
  };
  var HashArrayMapNode3 = function HashArrayMapNode4(ownerID, count4, nodes) {
    this.ownerID = ownerID;
    this.count = count4;
    this.nodes = nodes;
  };
  HashArrayMapNode3.prototype.get = function get16(shift, keyHash, key, notSetValue) {
    if (keyHash === void 0) {
      keyHash = hash2(key);
    }
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK2;
    var node = this.nodes[idx];
    return node ? node.get(shift + SHIFT2, keyHash, key, notSetValue) : notSetValue;
  };
  HashArrayMapNode3.prototype.update = function update$$14(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === void 0) {
      keyHash = hash2(key);
    }
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK2;
    var removed = value === NOT_SET2;
    var nodes = this.nodes;
    var node = nodes[idx];
    if (removed && !node) {
      return this;
    }
    var newNode = updateNode2(
      node,
      ownerID,
      shift + SHIFT2,
      keyHash,
      key,
      value,
      didChangeSize,
      didAlter
    );
    if (newNode === node) {
      return this;
    }
    var newCount = this.count;
    if (!node) {
      newCount++;
    } else if (!newNode) {
      newCount--;
      if (newCount < MIN_HASH_ARRAY_MAP_SIZE2) {
        return packNodes2(ownerID, nodes, newCount, idx);
      }
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newNodes = setAt2(nodes, idx, newNode, isEditable);
    if (isEditable) {
      this.count = newCount;
      this.nodes = newNodes;
      return this;
    }
    return new HashArrayMapNode3(ownerID, newCount, newNodes);
  };
  var HashCollisionNode3 = function HashCollisionNode4(ownerID, keyHash, entries5) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entries = entries5;
  };
  HashCollisionNode3.prototype.get = function get17(shift, keyHash, key, notSetValue) {
    var entries5 = this.entries;
    for (var ii = 0, len = entries5.length; ii < len; ii++) {
      if (is2(key, entries5[ii][0])) {
        return entries5[ii][1];
      }
    }
    return notSetValue;
  };
  HashCollisionNode3.prototype.update = function update$$15(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === void 0) {
      keyHash = hash2(key);
    }
    var removed = value === NOT_SET2;
    if (keyHash !== this.keyHash) {
      if (removed) {
        return this;
      }
      SetRef2(didAlter);
      SetRef2(didChangeSize);
      return mergeIntoNode2(this, ownerID, shift, keyHash, [key, value]);
    }
    var entries5 = this.entries;
    var idx = 0;
    var len = entries5.length;
    for (; idx < len; idx++) {
      if (is2(key, entries5[idx][0])) {
        break;
      }
    }
    var exists = idx < len;
    if (exists ? entries5[idx][1] === value : removed) {
      return this;
    }
    SetRef2(didAlter);
    (removed || !exists) && SetRef2(didChangeSize);
    if (removed && len === 2) {
      return new ValueNode3(ownerID, this.keyHash, entries5[idx ^ 1]);
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries5 : arrCopy2(entries5);
    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
    }
    if (isEditable) {
      this.entries = newEntries;
      return this;
    }
    return new HashCollisionNode3(ownerID, this.keyHash, newEntries);
  };
  var ValueNode3 = function ValueNode4(ownerID, keyHash, entry) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entry = entry;
  };
  ValueNode3.prototype.get = function get18(shift, keyHash, key, notSetValue) {
    return is2(key, this.entry[0]) ? this.entry[1] : notSetValue;
  };
  ValueNode3.prototype.update = function update$$16(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET2;
    var keyMatch = is2(key, this.entry[0]);
    if (keyMatch ? value === this.entry[1] : removed) {
      return this;
    }
    SetRef2(didAlter);
    if (removed) {
      SetRef2(didChangeSize);
      return;
    }
    if (keyMatch) {
      if (ownerID && ownerID === this.ownerID) {
        this.entry[1] = value;
        return this;
      }
      return new ValueNode3(ownerID, this.keyHash, [key, value]);
    }
    SetRef2(didChangeSize);
    return mergeIntoNode2(this, ownerID, shift, hash2(key), [key, value]);
  };
  ArrayMapNode3.prototype.iterate = HashCollisionNode3.prototype.iterate = function(fn, reverse5) {
    var entries5 = this.entries;
    for (var ii = 0, maxIndex = entries5.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries5[reverse5 ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  };
  BitmapIndexedNode3.prototype.iterate = HashArrayMapNode3.prototype.iterate = function(fn, reverse5) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse5 ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse5) === false) {
        return false;
      }
    }
  };
  ValueNode3.prototype.iterate = function(fn, reverse5) {
    return fn(this.entry);
  };
  var MapIterator2 = function(Iterator$$1) {
    function MapIterator3(map5, type2, reverse5) {
      this._type = type2;
      this._reverse = reverse5;
      this._stack = map5._root && mapIteratorFrame2(map5._root);
    }
    if (Iterator$$1)
      MapIterator3.__proto__ = Iterator$$1;
    MapIterator3.prototype = Object.create(Iterator$$1 && Iterator$$1.prototype);
    MapIterator3.prototype.constructor = MapIterator3;
    MapIterator3.prototype.next = function next() {
      var this$1 = this;
      var type2 = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex = void 0;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue2(type2, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue2(
              type2,
              node.entries[this$1._reverse ? maxIndex - index : index]
            );
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this$1._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue2(type2, subNode.entry);
              }
              stack = this$1._stack = mapIteratorFrame2(subNode, stack);
            }
            continue;
          }
        }
        stack = this$1._stack = this$1._stack.__prev;
      }
      return iteratorDone2();
    };
    return MapIterator3;
  }(Iterator3);
  function mapIteratorValue2(type2, entry) {
    return iteratorValue2(type2, entry[0], entry[1]);
  }
  function mapIteratorFrame2(node, prev) {
    return {
      node,
      index: 0,
      __prev: prev
    };
  }
  function makeMap2(size, root2, ownerID, hash$$1) {
    var map5 = Object.create(MapPrototype2);
    map5.size = size;
    map5._root = root2;
    map5.__ownerID = ownerID;
    map5.__hash = hash$$1;
    map5.__altered = false;
    return map5;
  }
  var EMPTY_MAP2;
  function emptyMap2() {
    return EMPTY_MAP2 || (EMPTY_MAP2 = makeMap2(0));
  }
  function updateMap2(map5, k3, v3) {
    var newRoot;
    var newSize;
    if (!map5._root) {
      if (v3 === NOT_SET2) {
        return map5;
      }
      newSize = 1;
      newRoot = new ArrayMapNode3(map5.__ownerID, [[k3, v3]]);
    } else {
      var didChangeSize = MakeRef2();
      var didAlter = MakeRef2();
      newRoot = updateNode2(
        map5._root,
        map5.__ownerID,
        0,
        void 0,
        k3,
        v3,
        didChangeSize,
        didAlter
      );
      if (!GetRef(didAlter)) {
        return map5;
      }
      newSize = map5.size + (GetRef(didChangeSize) ? v3 === NOT_SET2 ? -1 : 1 : 0);
    }
    if (map5.__ownerID) {
      map5.size = newSize;
      map5._root = newRoot;
      map5.__hash = void 0;
      map5.__altered = true;
      return map5;
    }
    return newRoot ? makeMap2(newSize, newRoot) : emptyMap2();
  }
  function updateNode2(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET2) {
        return node;
      }
      SetRef2(didAlter);
      SetRef2(didChangeSize);
      return new ValueNode3(ownerID, keyHash, [key, value]);
    }
    return node.update(
      ownerID,
      shift,
      keyHash,
      key,
      value,
      didChangeSize,
      didAlter
    );
  }
  function isLeafNode2(node) {
    return node.constructor === ValueNode3 || node.constructor === HashCollisionNode3;
  }
  function mergeIntoNode2(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode3(ownerID, keyHash, [node.entry, entry]);
    }
    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK2;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK2;
    var newNode;
    var nodes = idx1 === idx2 ? [mergeIntoNode2(node, ownerID, shift + SHIFT2, keyHash, entry)] : (newNode = new ValueNode3(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
    return new BitmapIndexedNode3(ownerID, 1 << idx1 | 1 << idx2, nodes);
  }
  function createNodes2(ownerID, entries5, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID2();
    }
    var node = new ValueNode3(ownerID, hash2(key), [key, value]);
    for (var ii = 0; ii < entries5.length; ii++) {
      var entry = entries5[ii];
      node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
    }
    return node;
  }
  function packNodes2(ownerID, nodes, count4, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count4);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== void 0 && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode3(ownerID, bitmap, packedNodes);
  }
  function expandNodes2(ownerID, nodes, bitmap, including, node) {
    var count4 = 0;
    var expandedNodes = new Array(SIZE2);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count4++] : void 0;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode3(ownerID, count4 + 1, expandedNodes);
  }
  function popCount2(x3) {
    x3 -= x3 >> 1 & 1431655765;
    x3 = (x3 & 858993459) + (x3 >> 2 & 858993459);
    x3 = x3 + (x3 >> 4) & 252645135;
    x3 += x3 >> 8;
    x3 += x3 >> 16;
    return x3 & 127;
  }
  function setAt2(array3, idx, val, canEdit) {
    var newArray = canEdit ? array3 : arrCopy2(array3);
    newArray[idx] = val;
    return newArray;
  }
  function spliceIn2(array3, idx, val, canEdit) {
    var newLen = array3.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array3[idx] = val;
      return array3;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array3[ii + after];
      }
    }
    return newArray;
  }
  function spliceOut2(array3, idx, canEdit) {
    var newLen = array3.length - 1;
    if (canEdit && idx === newLen) {
      array3.pop();
      return array3;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array3[ii + after];
    }
    return newArray;
  }
  var MAX_ARRAY_MAP_SIZE2 = SIZE2 / 4;
  var MAX_BITMAP_INDEXED_SIZE2 = SIZE2 / 2;
  var MIN_HASH_ARRAY_MAP_SIZE2 = SIZE2 / 4;
  var IS_LIST_SYMBOL2 = "@@__IMMUTABLE_LIST__@@";
  function isList2(maybeList) {
    return Boolean(maybeList && maybeList[IS_LIST_SYMBOL2]);
  }
  var List2 = function(IndexedCollection$$1) {
    function List3(value) {
      var empty2 = emptyList2();
      if (value === null || value === void 0) {
        return empty2;
      }
      if (isList2(value)) {
        return value;
      }
      var iter = IndexedCollection$$1(value);
      var size = iter.size;
      if (size === 0) {
        return empty2;
      }
      assertNotInfinite2(size);
      if (size > 0 && size < SIZE2) {
        return makeList2(0, size, SHIFT2, null, new VNode3(iter.toArray()));
      }
      return empty2.withMutations(function(list) {
        list.setSize(size);
        iter.forEach(function(v3, i4) {
          return list.set(i4, v3);
        });
      });
    }
    if (IndexedCollection$$1)
      List3.__proto__ = IndexedCollection$$1;
    List3.prototype = Object.create(IndexedCollection$$1 && IndexedCollection$$1.prototype);
    List3.prototype.constructor = List3;
    List3.of = function of() {
      return this(arguments);
    };
    List3.prototype.toString = function toString8() {
      return this.__toString("List [", "]");
    };
    List3.prototype.get = function get24(index, notSetValue) {
      index = wrapIndex2(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor2(this, index);
        return node && node.array[index & MASK2];
      }
      return notSetValue;
    };
    List3.prototype.set = function set7(index, value) {
      return updateList2(this, index, value);
    };
    List3.prototype.remove = function remove7(index) {
      return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
    };
    List3.prototype.insert = function insert(index, value) {
      return this.splice(index, 0, value);
    };
    List3.prototype.clear = function clear3() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT2;
        this._root = this._tail = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyList2();
    };
    List3.prototype.push = function push() {
      var values3 = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list) {
        setListBounds2(list, 0, oldSize + values3.length);
        for (var ii = 0; ii < values3.length; ii++) {
          list.set(oldSize + ii, values3[ii]);
        }
      });
    };
    List3.prototype.pop = function pop() {
      return setListBounds2(this, 0, -1);
    };
    List3.prototype.unshift = function unshift() {
      var values3 = arguments;
      return this.withMutations(function(list) {
        setListBounds2(list, -values3.length);
        for (var ii = 0; ii < values3.length; ii++) {
          list.set(ii, values3[ii]);
        }
      });
    };
    List3.prototype.shift = function shift() {
      return setListBounds2(this, 1);
    };
    List3.prototype.concat = function concat3() {
      var arguments$1 = arguments;
      var seqs = [];
      for (var i4 = 0; i4 < arguments.length; i4++) {
        var argument = arguments$1[i4];
        var seq = IndexedCollection$$1(
          typeof argument !== "string" && hasIterator2(argument) ? argument : [argument]
        );
        if (seq.size !== 0) {
          seqs.push(seq);
        }
      }
      if (seqs.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
        return this.constructor(seqs[0]);
      }
      return this.withMutations(function(list) {
        seqs.forEach(function(seq2) {
          return seq2.forEach(function(value) {
            return list.push(value);
          });
        });
      });
    };
    List3.prototype.setSize = function setSize(size) {
      return setListBounds2(this, 0, size);
    };
    List3.prototype.map = function map5(mapper, context) {
      var this$1 = this;
      return this.withMutations(function(list) {
        for (var i4 = 0; i4 < this$1.size; i4++) {
          list.set(i4, mapper.call(context, list.get(i4), i4, list));
        }
      });
    };
    List3.prototype.slice = function slice7(begin, end) {
      var size = this.size;
      if (wholeSlice2(begin, end, size)) {
        return this;
      }
      return setListBounds2(
        this,
        resolveBegin2(begin, size),
        resolveEnd2(end, size)
      );
    };
    List3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var index = reverse5 ? this.size : 0;
      var values3 = iterateList2(this, reverse5);
      return new Iterator3(function() {
        var value = values3();
        return value === DONE2 ? iteratorDone2() : iteratorValue2(type2, reverse5 ? --index : index++, value);
      });
    };
    List3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      var index = reverse5 ? this.size : 0;
      var values3 = iterateList2(this, reverse5);
      var value;
      while ((value = values3()) !== DONE2) {
        if (fn(value, reverse5 ? --index : index++, this$1) === false) {
          break;
        }
      }
      return index;
    };
    List3.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptyList2();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeList2(
        this._origin,
        this._capacity,
        this._level,
        this._root,
        this._tail,
        ownerID,
        this.__hash
      );
    };
    return List3;
  }(IndexedCollection2);
  List2.isList = isList2;
  var ListPrototype2 = List2.prototype;
  ListPrototype2[IS_LIST_SYMBOL2] = true;
  ListPrototype2[DELETE2] = ListPrototype2.remove;
  ListPrototype2.merge = ListPrototype2.concat;
  ListPrototype2.setIn = setIn$$1;
  ListPrototype2.deleteIn = ListPrototype2.removeIn = deleteIn2;
  ListPrototype2.update = update$$1;
  ListPrototype2.updateIn = updateIn$12;
  ListPrototype2.mergeIn = mergeIn2;
  ListPrototype2.mergeDeepIn = mergeDeepIn2;
  ListPrototype2.withMutations = withMutations2;
  ListPrototype2.wasAltered = wasAltered3;
  ListPrototype2.asImmutable = asImmutable2;
  ListPrototype2["@@transducer/init"] = ListPrototype2.asMutable = asMutable2;
  ListPrototype2["@@transducer/step"] = function(result, arr) {
    return result.push(arr);
  };
  ListPrototype2["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  var VNode3 = function VNode4(array3, ownerID) {
    this.array = array3;
    this.ownerID = ownerID;
  };
  VNode3.prototype.removeBefore = function removeBefore2(ownerID, level, index) {
    if (index === level ? 1 << level : this.array.length === 0) {
      return this;
    }
    var originIndex = index >>> level & MASK2;
    if (originIndex >= this.array.length) {
      return new VNode3([], ownerID);
    }
    var removingFirst = originIndex === 0;
    var newChild;
    if (level > 0) {
      var oldChild = this.array[originIndex];
      newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT2, index);
      if (newChild === oldChild && removingFirst) {
        return this;
      }
    }
    if (removingFirst && !newChild) {
      return this;
    }
    var editable = editableVNode2(this, ownerID);
    if (!removingFirst) {
      for (var ii = 0; ii < originIndex; ii++) {
        editable.array[ii] = void 0;
      }
    }
    if (newChild) {
      editable.array[originIndex] = newChild;
    }
    return editable;
  };
  VNode3.prototype.removeAfter = function removeAfter2(ownerID, level, index) {
    if (index === (level ? 1 << level : 0) || this.array.length === 0) {
      return this;
    }
    var sizeIndex = index - 1 >>> level & MASK2;
    if (sizeIndex >= this.array.length) {
      return this;
    }
    var newChild;
    if (level > 0) {
      var oldChild = this.array[sizeIndex];
      newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT2, index);
      if (newChild === oldChild && sizeIndex === this.array.length - 1) {
        return this;
      }
    }
    var editable = editableVNode2(this, ownerID);
    editable.array.splice(sizeIndex + 1);
    if (newChild) {
      editable.array[sizeIndex] = newChild;
    }
    return editable;
  };
  var DONE2 = {};
  function iterateList2(list, reverse5) {
    var left2 = list._origin;
    var right2 = list._capacity;
    var tailPos = getTailOffset2(right2);
    var tail = list._tail;
    return iterateNodeOrLeaf(list._root, list._level, 0);
    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
    }
    function iterateLeaf(node, offset) {
      var array3 = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left2 ? 0 : left2 - offset;
      var to = right2 - offset;
      if (to > SIZE2) {
        to = SIZE2;
      }
      return function() {
        if (from === to) {
          return DONE2;
        }
        var idx = reverse5 ? --to : from++;
        return array3 && array3[idx];
      };
    }
    function iterateNode(node, level, offset) {
      var values3;
      var array3 = node && node.array;
      var from = offset > left2 ? 0 : left2 - offset >> level;
      var to = (right2 - offset >> level) + 1;
      if (to > SIZE2) {
        to = SIZE2;
      }
      return function() {
        while (true) {
          if (values3) {
            var value = values3();
            if (value !== DONE2) {
              return value;
            }
            values3 = null;
          }
          if (from === to) {
            return DONE2;
          }
          var idx = reverse5 ? --to : from++;
          values3 = iterateNodeOrLeaf(
            array3 && array3[idx],
            level - SHIFT2,
            offset + (idx << level)
          );
        }
      };
    }
  }
  function makeList2(origin, capacity, level, root2, tail, ownerID, hash3) {
    var list = Object.create(ListPrototype2);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root2;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash3;
    list.__altered = false;
    return list;
  }
  var EMPTY_LIST;
  function emptyList2() {
    return EMPTY_LIST || (EMPTY_LIST = makeList2(0, 0, SHIFT2));
  }
  function updateList2(list, index, value) {
    index = wrapIndex2(list, index);
    if (index !== index) {
      return list;
    }
    if (index >= list.size || index < 0) {
      return list.withMutations(function(list2) {
        index < 0 ? setListBounds2(list2, index).set(0, value) : setListBounds2(list2, 0, index + 1).set(index, value);
      });
    }
    index += list._origin;
    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef2();
    if (index >= getTailOffset2(list._capacity)) {
      newTail = updateVNode2(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode2(
        newRoot,
        list.__ownerID,
        list._level,
        index,
        value,
        didAlter
      );
    }
    if (!GetRef(didAlter)) {
      return list;
    }
    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = void 0;
      list.__altered = true;
      return list;
    }
    return makeList2(list._origin, list._capacity, list._level, newRoot, newTail);
  }
  function updateVNode2(node, ownerID, level, index, value, didAlter) {
    var idx = index >>> level & MASK2;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === void 0) {
      return node;
    }
    var newNode;
    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode2(
        lowerNode,
        ownerID,
        level - SHIFT2,
        index,
        value,
        didAlter
      );
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode2(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }
    if (nodeHas && node.array[idx] === value) {
      return node;
    }
    if (didAlter) {
      SetRef2(didAlter);
    }
    newNode = editableVNode2(node, ownerID);
    if (value === void 0 && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }
  function editableVNode2(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode3(node ? node.array.slice() : [], ownerID);
  }
  function listNodeFor2(list, rawIndex) {
    if (rawIndex >= getTailOffset2(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << list._level + SHIFT2) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[rawIndex >>> level & MASK2];
        level -= SHIFT2;
      }
      return node;
    }
  }
  function setListBounds2(list, begin, end) {
    if (begin !== void 0) {
      begin |= 0;
    }
    if (end !== void 0) {
      end |= 0;
    }
    var owner = list.__ownerID || new OwnerID2();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === void 0 ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }
    if (newOrigin >= newCapacity) {
      return list.clear();
    }
    var newLevel = list._level;
    var newRoot = list._root;
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode3(
        newRoot && newRoot.array.length ? [void 0, newRoot] : [],
        owner
      );
      newLevel += SHIFT2;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }
    var oldTailOffset = getTailOffset2(oldCapacity);
    var newTailOffset = getTailOffset2(newCapacity);
    while (newTailOffset >= 1 << newLevel + SHIFT2) {
      newRoot = new VNode3(
        newRoot && newRoot.array.length ? [newRoot] : [],
        owner
      );
      newLevel += SHIFT2;
    }
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ? listNodeFor2(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode3([], owner) : oldTail;
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode2(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT2; level -= SHIFT2) {
        var idx = oldTailOffset >>> level & MASK2;
        node = node.array[idx] = editableVNode2(node.array[idx], owner);
      }
      node.array[oldTailOffset >>> SHIFT2 & MASK2] = oldTail;
    }
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT2;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;
      while (newRoot) {
        var beginIndex = newOrigin >>> newLevel & MASK2;
        if (beginIndex !== newTailOffset >>> newLevel & MASK2) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT2;
        newRoot = newRoot.array[beginIndex];
      }
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(
          owner,
          newLevel,
          newTailOffset - offsetShift
        );
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }
    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = void 0;
      list.__altered = true;
      return list;
    }
    return makeList2(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }
  function getTailOffset2(size) {
    return size < SIZE2 ? 0 : size - 1 >>> SHIFT2 << SHIFT2;
  }
  var OrderedMap2 = function(Map$$1) {
    function OrderedMap3(value) {
      return value === null || value === void 0 ? emptyOrderedMap2() : isOrderedMap2(value) ? value : emptyOrderedMap2().withMutations(function(map5) {
        var iter = KeyedCollection2(value);
        assertNotInfinite2(iter.size);
        iter.forEach(function(v3, k3) {
          return map5.set(k3, v3);
        });
      });
    }
    if (Map$$1)
      OrderedMap3.__proto__ = Map$$1;
    OrderedMap3.prototype = Object.create(Map$$1 && Map$$1.prototype);
    OrderedMap3.prototype.constructor = OrderedMap3;
    OrderedMap3.of = function of() {
      return this(arguments);
    };
    OrderedMap3.prototype.toString = function toString8() {
      return this.__toString("OrderedMap {", "}");
    };
    OrderedMap3.prototype.get = function get24(k3, notSetValue) {
      var index = this._map.get(k3);
      return index !== void 0 ? this._list.get(index)[1] : notSetValue;
    };
    OrderedMap3.prototype.clear = function clear3() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap2();
    };
    OrderedMap3.prototype.set = function set7(k3, v3) {
      return updateOrderedMap2(this, k3, v3);
    };
    OrderedMap3.prototype.remove = function remove7(k3) {
      return updateOrderedMap2(this, k3, NOT_SET2);
    };
    OrderedMap3.prototype.wasAltered = function wasAltered5() {
      return this._map.wasAltered() || this._list.wasAltered();
    };
    OrderedMap3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      return this._list.__iterate(
        function(entry) {
          return entry && fn(entry[1], entry[0], this$1);
        },
        reverse5
      );
    };
    OrderedMap3.prototype.__iterator = function __iterator3(type2, reverse5) {
      return this._list.fromEntrySeq().__iterator(type2, reverse5);
    };
    OrderedMap3.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        if (this.size === 0) {
          return emptyOrderedMap2();
        }
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap2(newMap, newList, ownerID, this.__hash);
    };
    return OrderedMap3;
  }(Map3);
  OrderedMap2.isOrderedMap = isOrderedMap2;
  OrderedMap2.prototype[IS_ORDERED_SYMBOL2] = true;
  OrderedMap2.prototype[DELETE2] = OrderedMap2.prototype.remove;
  function makeOrderedMap2(map5, list, ownerID, hash3) {
    var omap = Object.create(OrderedMap2.prototype);
    omap.size = map5 ? map5.size : 0;
    omap._map = map5;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash3;
    return omap;
  }
  var EMPTY_ORDERED_MAP2;
  function emptyOrderedMap2() {
    return EMPTY_ORDERED_MAP2 || (EMPTY_ORDERED_MAP2 = makeOrderedMap2(emptyMap2(), emptyList2()));
  }
  function updateOrderedMap2(omap, k3, v3) {
    var map5 = omap._map;
    var list = omap._list;
    var i4 = map5.get(k3);
    var has9 = i4 !== void 0;
    var newMap;
    var newList;
    if (v3 === NOT_SET2) {
      if (!has9) {
        return omap;
      }
      if (list.size >= SIZE2 && list.size >= map5.size * 2) {
        newList = list.filter(function(entry, idx) {
          return entry !== void 0 && i4 !== idx;
        });
        newMap = newList.toKeyedSeq().map(function(entry) {
          return entry[0];
        }).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map5.remove(k3);
        newList = i4 === list.size - 1 ? list.pop() : list.set(i4, void 0);
      }
    } else if (has9) {
      if (v3 === list.get(i4)[1]) {
        return omap;
      }
      newMap = map5;
      newList = list.set(i4, [k3, v3]);
    } else {
      newMap = map5.set(k3, list.size);
      newList = list.set(list.size, [k3, v3]);
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = void 0;
      return omap;
    }
    return makeOrderedMap2(newMap, newList);
  }
  function isSortedMap(maybeSortedMap) {
    return isMap2(maybeSortedMap) && isSorted(maybeSortedMap);
  }
  var SortedMapNode = function SortedMapNode2(comparator, options, ownerID) {
    this.comparator = comparator;
    this.options = options;
    this.ownerID = ownerID;
  };
  SortedMapNode.prototype.getComparator = function getComparator() {
  };
  SortedMapNode.prototype.get = function get19(key, notSetValue) {
  };
  SortedMapNode.prototype.upsert = function upsert(ownerID, key, value, didChangeSize, didAlter) {
  };
  SortedMapNode.prototype.remove = function remove5(ownerID, key, didChangeSize, didAlter) {
  };
  SortedMapNode.prototype.fastRemove = function fastRemove(ownerID, key, didChangeSize, didAlter) {
  };
  SortedMapNode.prototype.iterate = function iterate(fn, reverse5) {
  };
  SortedMapNode.prototype.print = function print(level, maxDepth) {
  };
  SortedMapNode.prototype.checkConsistency = function checkConsistency(printFlag) {
  };
  var SortedMapPacker = function SortedMapPacker2() {
  };
  SortedMapPacker.prototype.pack = function pack(comparator, options, ownerID, collection) {
  };
  var SortedMapNodeFactory = function SortedMapNodeFactory2() {
  };
  SortedMapNodeFactory.prototype.createNode = function createNode(comparator, options, ownerID, entries5, nodes) {
  };
  SortedMapNodeFactory.prototype.createPacker = function createPacker() {
  };
  SortedMapNodeFactory.prototype.createIterator = function createIterator(map5, type2, reverse5) {
  };
  var DEFAULT_TYPE = "btree";
  var DEFAULT_BTREE_ORDER = 33;
  var SortedMapBtreeNode = function(SortedMapNode$$1) {
    function SortedMapBtreeNode2(comparator, options, ownerID, entries5, nodes) {
      SortedMapNode$$1.call(this, comparator, options, ownerID);
      this.entries = entries5;
      this.nodes = nodes;
      this.btreeOrder = options && options.btreeOrder ? options.btreeOrder : DEFAULT_BTREE_ORDER;
      this.btreeNodeSplitSize = Math.floor((this.btreeOrder - 1) / 2);
      this._calcSize();
      return this;
    }
    if (SortedMapNode$$1)
      SortedMapBtreeNode2.__proto__ = SortedMapNode$$1;
    SortedMapBtreeNode2.prototype = Object.create(SortedMapNode$$1 && SortedMapNode$$1.prototype);
    SortedMapBtreeNode2.prototype.constructor = SortedMapBtreeNode2;
    SortedMapBtreeNode2.prototype._calcSize = function _calcSize() {
      var this$1 = this;
      this.size = 0;
      for (var i4 = 0; i4 < this.entries.length; i4++) {
        if (this$1.entries[i4][1] !== NOT_SET2) {
          this$1.size++;
        }
      }
      if (this.nodes) {
        for (var i$1 = 0; i$1 < this.nodes.length; i$1++) {
          this$1.size += this$1.nodes[i$1].size;
        }
      }
    };
    SortedMapBtreeNode2.prototype.getComparator = function getComparator2() {
      return this.comparator;
    };
    SortedMapBtreeNode2.prototype.get = function get24(key, notSetValue) {
      var entries5 = this.entries;
      var didMatch = MakeRef2();
      var idx = binarySearch(this.comparator, entries5, key, didMatch);
      if (GetRef(didMatch)) {
        var value = entries5[idx][1];
        return value === NOT_SET2 ? notSetValue : value;
      }
      var nodes = this.nodes;
      if (nodes) {
        var value$1 = nodes[idx].get(key, notSetValue);
        return value$1 === NOT_SET2 ? notSetValue : value$1;
      }
      return notSetValue;
    };
    SortedMapBtreeNode2.prototype.entryAt = function entryAt(index) {
      var didMatch = MakeRef2();
      var subIndex = MakeRef2();
      var idx = this.indexSearch(index, didMatch, subIndex);
      if (GetRef(didMatch)) {
        var entry = this.entries[idx];
        var key = entry[0];
        var value = entry[1];
        return [key, value];
      }
      return this.nodes[idx].entryAt(subIndex.value);
    };
    SortedMapBtreeNode2.prototype.keyAt = function keyAt(index) {
      var didMatch = MakeRef2();
      var subIndex = MakeRef2();
      var idx = this.indexSearch(index, didMatch, subIndex);
      if (GetRef(didMatch)) {
        var entry = this.entries[idx];
        var key = entry[0];
        return key;
      }
      return this.nodes[idx].keyAt(subIndex.value);
    };
    SortedMapBtreeNode2.prototype.valueAt = function valueAt(index) {
      var didMatch = MakeRef2();
      var subIndex = MakeRef2();
      var idx = this.indexSearch(index, didMatch, subIndex);
      if (GetRef(didMatch)) {
        var entry = this.entries[idx];
        var value = entry[1];
        return value;
      }
      return this.nodes[idx].valueAt(subIndex.value);
    };
    SortedMapBtreeNode2.prototype.firstKey = function firstKey() {
      var nodes = this.nodes;
      if (nodes) {
        return nodes[0].firstKey();
      }
      var entries5 = this.entries;
      return entries5[0][0];
    };
    SortedMapBtreeNode2.prototype.lastKey = function lastKey() {
      var nodes = this.nodes;
      if (nodes) {
        return nodes[nodes.length - 1].lastKey();
      }
      var entries5 = this.entries;
      return entries5[entries5.length - 1][0];
    };
    SortedMapBtreeNode2.prototype.upsert = function upsert2(ownerID, key, value, didChangeSize, didAlter, outKvn) {
      var ret = this._upsert(
        ownerID,
        key,
        value,
        didChangeSize,
        didAlter,
        outKvn
      );
      if (this === ret && GetRef(didChangeSize)) {
        this.size++;
      }
      return ret;
    };
    SortedMapBtreeNode2.prototype._upsert = function _upsert(ownerID, key, value, didChangeSize, didAlter, outKvn) {
      if (!outKvn) {
        var subKvn = [];
        var newRoot = this.upsert(
          ownerID,
          key,
          value,
          didChangeSize,
          didAlter,
          subKvn
        );
        if (subKvn[0]) {
          var entries$1 = [subKvn[0]];
          var nodes$1 = [newRoot, subKvn[1]];
          newRoot = new SortedMapBtreeNode2(
            this.comparator,
            this.options,
            ownerID,
            entries$1,
            nodes$1
          );
        }
        return newRoot;
      }
      var entries5 = this.entries;
      var didMatch = MakeRef2();
      var idx = binarySearch(this.comparator, entries5, key, didMatch);
      var exists = GetRef(didMatch);
      var nodes = this.nodes;
      var canEdit = ownerID && ownerID === this.ownerID;
      var newEntries;
      var newNodes;
      if (exists) {
        if (entries5[idx][1] === value) {
          return this;
        } else {
          var entry = [key, value];
          SetRef2(didAlter);
          if (entries5[idx][1] === NOT_SET2) {
            SetRef2(didChangeSize);
          }
          newEntries = setIn$2(entries5, idx, entry, canEdit);
          newNodes = clone(nodes, canEdit);
        }
      } else {
        if (nodes) {
          var subKvn$1 = [];
          var updatedNode = nodes[idx].upsert(
            ownerID,
            key,
            value,
            didChangeSize,
            didAlter,
            subKvn$1
          );
          if (GetRef(didAlter)) {
            if (subKvn$1[0]) {
              if (entries5.length >= this.btreeOrder - 1) {
                return this.splitNode(
                  idx,
                  updatedNode,
                  subKvn$1,
                  outKvn,
                  ownerID,
                  canEdit
                );
              } else {
                newEntries = spliceIn$1(entries5, idx, subKvn$1[0], canEdit);
                newNodes = spliceIn$1(nodes, idx + 1, subKvn$1[1], canEdit);
                newNodes[idx] = updatedNode;
              }
            } else {
              newEntries = clone(entries5, canEdit);
              newNodes = setIn$2(nodes, idx, updatedNode, canEdit);
            }
          } else {
            return this;
          }
        } else {
          var entry$1 = [key, value];
          SetRef2(didAlter);
          SetRef2(didChangeSize);
          if (entries5.length >= this.btreeOrder - 1) {
            return this.splitLeaf(idx, entry$1, outKvn, ownerID, canEdit);
          } else {
            newEntries = spliceIn$1(entries5, idx, entry$1, canEdit);
          }
        }
      }
      return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
    };
    SortedMapBtreeNode2.prototype.fastRemove = function fastRemove2(ownerID, key, didChangeSize, didAlter) {
      var ret = this._fastRemove(ownerID, key, didChangeSize, didAlter);
      if (this === ret && GetRef(didChangeSize)) {
        this.size--;
      }
      return ret;
    };
    SortedMapBtreeNode2.prototype._fastRemove = function _fastRemove(ownerID, key, didChangeSize, didAlter) {
      var entries5 = this.entries;
      var didMatch = MakeRef2();
      var idx = binarySearch(this.comparator, entries5, key, didMatch);
      var exists = GetRef(didMatch);
      var nodes = this.nodes;
      var canEdit = ownerID && ownerID === this.ownerID;
      var newEntries;
      var newNodes;
      if (exists) {
        if (entries5[idx][1] === NOT_SET2) {
          return this;
        }
        SetRef2(didAlter);
        SetRef2(didChangeSize);
        var newEntry = [key, NOT_SET2];
        newEntries = setIn$2(entries5, idx, newEntry, canEdit);
        newNodes = clone(nodes, canEdit);
      } else {
        if (nodes) {
          var updatedNode = nodes[idx].fastRemove(
            ownerID,
            key,
            didChangeSize,
            didAlter
          );
          if (GetRef(didAlter)) {
            newEntries = clone(entries5, canEdit);
            newNodes = setIn$2(nodes, idx, updatedNode, canEdit);
          } else {
            return this;
          }
        } else {
          return this;
        }
      }
      return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
    };
    SortedMapBtreeNode2.prototype.remove = function remove7(ownerID, key, didChangeSize, didAlter, parent, parentIdx, outKvn) {
      var ret = this._remove(
        ownerID,
        key,
        didChangeSize,
        didAlter,
        parent,
        parentIdx,
        outKvn
      );
      if (this === ret && GetRef(didChangeSize)) {
        this.size--;
      }
      return ret;
    };
    SortedMapBtreeNode2.prototype._remove = function _remove(ownerID, key, didChangeSize, didAlter, parent, parentIdx, outKvn) {
      var entries5 = this.entries;
      var didMatch = MakeRef2();
      var idx = binarySearch(this.comparator, entries5, key, didMatch);
      var exists = GetRef(didMatch);
      var nodes = this.nodes;
      var canEdit = ownerID && ownerID === this.ownerID;
      var newEntries;
      var newNodes;
      if (exists) {
        if (nodes) {
          if (entries5[idx][1] === NOT_SET2) {
            return this;
          }
          SetRef2(didAlter);
          SetRef2(didChangeSize);
          var newEntry = [key, NOT_SET2];
          newEntries = setIn$2(entries5, idx, newEntry, canEdit);
          newNodes = clone(nodes, canEdit);
        } else {
          if (entries5[idx][1] === NOT_SET2) {
            return this;
          }
          SetRef2(didAlter);
          SetRef2(didChangeSize);
          if (entries5.length <= this.btreeNodeSplitSize && parent) {
            return this.consolidateLeaf(
              ownerID,
              idx,
              parent,
              parentIdx,
              canEdit,
              outKvn
            );
          }
          newEntries = spliceOut$1(entries5, idx, canEdit);
        }
      } else {
        if (nodes) {
          var subKvn = [void 0, void 0, void 0];
          var updatedNode = nodes[idx].remove(
            ownerID,
            key,
            didChangeSize,
            didAlter,
            this,
            idx,
            subKvn
          );
          if (GetRef(didAlter)) {
            return this.spliceNode(
              ownerID,
              idx,
              updatedNode,
              parent,
              parentIdx,
              canEdit,
              subKvn,
              outKvn
            );
          } else {
            return this;
          }
        } else {
          return this;
        }
      }
      return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
    };
    SortedMapBtreeNode2.prototype.makeNewNode = function makeNewNode(newEntries, newNodes, ownerID, canEdit) {
      if (newEntries.length === 0) {
        if (newNodes) {
          return newNodes[0];
        } else {
          return;
        }
      }
      if (canEdit) {
        this.entries = newEntries;
        this.nodes = newNodes;
        this._calcSize();
        return this;
      }
      return new SortedMapBtreeNode2(
        this.comparator,
        this.options,
        ownerID,
        newEntries,
        newNodes
      );
    };
    SortedMapBtreeNode2.prototype.print = function print2(level, maxDepth) {
      function w3(s3) {
        process.stdout.write(s3);
      }
      if (maxDepth && level >= maxDepth) {
        return;
      }
      var nodes = this.nodes;
      var entries5 = this.entries;
      w3(indent(level));
      w3("SIZE=" + this.size + "\n");
      if (nodes) {
        for (var i4 = 0; i4 < nodes.length; i4++) {
          var node = nodes[i4];
          w3(indent(level));
          if (!node || !(node instanceof SortedMapNode$$1)) {
            w3(
              "+ CORRUPT NODE[" + i4 + "] (L" + level + ") " + JSON.stringify(node) + "\n"
            );
          } else {
            if (node.nodes) {
              w3("+ NODE[" + i4 + "] (L" + level + ")\n");
            } else {
              w3("+ LEAF[" + i4 + "] (L" + level + ")\n");
            }
            node.print(level + 1, maxDepth);
          }
          if (i4 < entries5.length) {
            w3(indent(level));
            var entry = entries5[i4];
            if (!entry) {
              w3("- CORRUPT ENTRY[" + i4 + "]: " + JSON.stringify(entry) + "\n");
            } else if (entry[1] === NOT_SET2) {
              w3("- REMOVED ENTRY[" + i4 + "]: " + JSON.stringify(entry[0]) + "\n");
            } else {
              w3("- ENTRY[" + i4 + "]: " + JSON.stringify(entry[0]) + "\n");
            }
          }
        }
      } else {
        for (var i$1 = 0; i$1 < entries5.length; i$1++) {
          w3(indent(level));
          var entry$1 = entries5[i$1];
          if (!entry$1) {
            w3("- CORRUPT ENTRY[" + i$1 + "]: " + JSON.stringify(entry$1) + "\n");
          } else if (entry$1[1] === NOT_SET2) {
            w3("- REMOVED ENTRY[" + i$1 + "]: " + JSON.stringify(entry$1[0]) + "\n");
          } else {
            w3("- ENTRY[" + i$1 + "]: " + JSON.stringify(entry$1[0]) + "\n");
          }
        }
      }
    };
    SortedMapBtreeNode2.prototype.checkConsistency = function checkConsistency2(printFlag, level, n3, leafLevel) {
      var this$1 = this;
      function w3(f3) {
        if (printFlag) {
          var s3 = f3();
          if (s3 !== void 0) {
            process.stdout.write(indent(level));
            process.stdout.write(s3);
          }
        }
      }
      if (!level) {
        level = 0;
      }
      if (!n3) {
        n3 = 0;
      }
      if (!leafLevel) {
        leafLevel = [void 0];
      }
      if (this.nodes) {
        w3(function() {
          return "+ Checking NODE[" + n3 + "] (L" + level + ")\n";
        });
      } else {
        w3(function() {
          return "+ Checking LEAF[" + n3 + "] (L" + level + ")\n";
        });
        if (leafLevel[0] === void 0) {
          leafLevel[0] = level;
        } else if (leafLevel[0] !== level) {
          failed(112, "leaves are not on the same level");
        }
      }
      function failed(code2, msg) {
        var s3 = "Consistency Check Failed with error code " + code2 + ": " + msg;
        if (printFlag) {
          w3(function() {
            return s3 + "\n";
          });
          return code2;
        }
        throw new Error(s3);
      }
      var entries5 = this.entries;
      var nodes = this.nodes;
      if (!entries5) {
        return failed(101, "empty entries in a node");
      }
      if (!(entries5.length > 0 && entries5.length < this.btreeOrder)) {
        return failed(
          102,
          "entries length is out of range from 0 to (btreeOrder-1)"
        );
      }
      if (level > 0 && !(this.btreeNodeSplitSize <= entries5.length)) {
        return failed(103, "entries length is shorter than btreeNodeSplitSize");
      }
      if (nodes && !(nodes.length === entries5.length + 1)) {
        return failed(104, "nodes length out of sync with entries length");
      }
      var loop = function(i5) {
        var entry = entries5[i5];
        if (!entry) {
          return { v: failed(105, "empty entry") };
        }
        if (!(typeof entry === "object" && entry instanceof Array)) {
          return { v: failed(106, "entry is not Array") };
        }
        if (!(entry.length === 2)) {
          return { v: failed(107, "entry is not Array[2]") };
        }
        if (entry[1] === NOT_SET2) {
          w3(
            function() {
              return "    - Checking REMOVED ENTRY[" + i5 + "]: " + JSON.stringify(entry[0]) + "\n";
            }
          );
          if (!nodes) {
            failed(113, "NOT_SET values are not allowed in leaves");
          }
        } else {
          w3(
            function() {
              return "    - Checking ENTRY[" + i5 + "]: " + JSON.stringify(entry[0]) + "\n";
            }
          );
        }
      };
      for (var i4 = 0; i4 < entries5.length; i4++) {
        var returned = loop(i4);
        if (returned)
          return returned.v;
      }
      for (var i$1 = 0; i$1 < entries5.length - 1; i$1++) {
        if (!(this$1.comparator(entries5[i$1][0], entries5[i$1 + 1][0]) < 0)) {
          return failed(108, "the entries are not sorted");
        }
      }
      if (nodes) {
        for (var i$2 = 0; i$2 < nodes.length; i$2++) {
          var node = nodes[i$2];
          if (!node || !(node instanceof SortedMapNode$$1)) {
            return failed(109, "empty or corrupt node");
          }
          var code = node.checkConsistency(printFlag, level + 1, i$2, leafLevel);
          if (code !== 0) {
            return code;
          }
          if (i$2 > 0 && !(this$1.comparator(entries5[i$2 - 1][0], node.firstKey()) < 0)) {
            return failed(110, "the entry and right node not sorted");
          }
          if (i$2 < entries5.length && !(this$1.comparator(node.lastKey(), entries5[i$2][0]) < 0)) {
            return failed(111, "the entry and left node not sorted");
          }
        }
      }
      return 0;
    };
    return SortedMapBtreeNode2;
  }(SortedMapNode);
  SortedMapBtreeNode.prototype.iterate = function(fn, reverse5) {
    var entries5 = this.entries;
    var nodes = this.nodes;
    if (nodes) {
      for (var ii = 0, maxIndex = entries5.length - 1; ii <= maxIndex; ii++) {
        var node = nodes[reverse5 ? maxIndex + 1 - ii : ii];
        if (node.iterate(fn, reverse5) === false) {
          return false;
        }
        var entry = entries5[reverse5 ? maxIndex - ii : ii];
        if (entry[1] === NOT_SET2) {
          continue;
        }
        if (fn(entry) === false) {
          return false;
        }
      }
      var node$1 = nodes[reverse5 ? 0 : nodes.length - 1];
      if (node$1.iterate(fn, reverse5) === false) {
        return false;
      }
    } else {
      for (var ii$1 = 0, maxIndex$1 = entries5.length - 1; ii$1 <= maxIndex$1; ii$1++) {
        var entry$1 = entries5[reverse5 ? maxIndex$1 - ii$1 : ii$1];
        if (entry$1[1] === NOT_SET2) {
          continue;
        }
        if (fn(entry$1) === false) {
          return false;
        }
      }
    }
    return true;
  };
  SortedMapBtreeNode.prototype.iterateFrom = function(from, fn, reverse5) {
    var this$1 = this;
    if (reverse5) {
      return this.iterate(function(entry2) {
        if (this$1.comparator(from, entry2[0]) <= 0) {
          return fn(entry2);
        }
        return true;
      }, reverse5);
    }
    var entries5 = this.entries;
    var nodes = this.nodes;
    var didMatch = MakeRef2();
    var idx = binarySearch(this.comparator, entries5, from, didMatch);
    if (nodes) {
      for (var ii = idx, maxIndex = entries5.length - 1; ii <= maxIndex; ii++) {
        var node = nodes[ii];
        if (ii === idx && !GetRef(didMatch)) {
          if (node.iterateFrom(from, fn, reverse5) === false) {
            return false;
          }
        } else if (ii > idx) {
          if (node.iterate(fn, reverse5) === false) {
            return false;
          }
        }
        var entry = entries5[ii];
        if (entry[1] === NOT_SET2) {
          continue;
        }
        if (fn(entry) === false) {
          return false;
        }
      }
      var node$1 = nodes[nodes.length - 1];
      if (idx === nodes.length - 1) {
        if (node$1.iterateFrom(from, fn, reverse5) === false) {
          return false;
        }
      } else if (node$1.iterate(fn, reverse5) === false) {
        return false;
      }
    } else {
      for (var ii$1 = idx, maxIndex$1 = entries5.length - 1; ii$1 <= maxIndex$1; ii$1++) {
        var entry$1 = entries5[ii$1];
        if (entry$1[1] === NOT_SET2) {
          continue;
        }
        if (fn(entry$1) === false) {
          return false;
        }
      }
    }
    return true;
  };
  SortedMapBtreeNode.prototype.iterateFromBackwards = function(from, fn, reverse5) {
    var this$1 = this;
    if (reverse5) {
      return this.iterate(function(entry2) {
        if (this$1.comparator(entry2[0], from) <= 0) {
          return fn(entry2);
        }
        return true;
      }, false);
    }
    var entries5 = this.entries;
    var nodes = this.nodes;
    var didMatch = MakeRef2();
    var idx = binarySearch(this.comparator, entries5, from, didMatch);
    if (nodes) {
      for (var ii = idx; ii >= 0; ii--) {
        if (ii < idx || GetRef(didMatch)) {
          var entry = entries5[ii];
          if (entry[1] === NOT_SET2) {
            continue;
          }
          if (fn(entry) === false) {
            return false;
          }
        }
        var node = nodes[ii];
        if (ii === idx && !GetRef(didMatch)) {
          if (node.iterateFromBackwards(from, fn, reverse5) === false) {
            return false;
          }
        } else if (node.iterate(fn, true) === false) {
          return false;
        }
      }
    } else {
      for (var ii$1 = GetRef(didMatch) ? idx : idx - 1; ii$1 >= 0; ii$1--) {
        var entry$1 = entries5[ii$1];
        if (entry$1[1] === NOT_SET2) {
          continue;
        }
        if (fn(entry$1) === false) {
          return false;
        }
      }
    }
    return true;
  };
  SortedMapBtreeNode.prototype.iterateFromIndex = function(index, fn) {
    var entries5 = this.entries;
    var nodes = this.nodes;
    var didMatch = MakeRef2();
    var subIndex = MakeRef2();
    var idx = this.indexSearch(index, didMatch, subIndex);
    if (nodes) {
      for (var ii = idx, maxIndex = entries5.length - 1; ii <= maxIndex; ii++) {
        var node = nodes[ii];
        if (ii === idx && !GetRef(didMatch)) {
          if (node.iterateFromIndex(subIndex.value, fn) === false) {
            return false;
          }
        } else if (ii > idx) {
          if (node.iterate(fn, false) === false) {
            return false;
          }
        }
        var entry = entries5[ii];
        if (entry[1] === NOT_SET2) {
          continue;
        }
        if (fn(entry) === false) {
          return false;
        }
      }
      var node$1 = nodes[nodes.length - 1];
      if (idx === nodes.length - 1) {
        if (node$1.iterateFromIndex(subIndex.value, fn) === false) {
          return false;
        }
      } else if (node$1.iterate(fn, false) === false) {
        return false;
      }
    } else {
      for (var ii$1 = idx, maxIndex$1 = entries5.length - 1; ii$1 <= maxIndex$1; ii$1++) {
        var entry$1 = entries5[ii$1];
        if (entry$1[1] === NOT_SET2) {
          continue;
        }
        if (fn(entry$1) === false) {
          return false;
        }
      }
    }
    return true;
  };
  SortedMapBtreeNode.prototype.iterateFromIndexBackwards = function(index, fn) {
    var entries5 = this.entries;
    var nodes = this.nodes;
    var didMatch = MakeRef2();
    var subIndex = MakeRef2();
    var idx = this.indexSearch(index, didMatch, subIndex);
    if (nodes) {
      for (var ii = idx; ii >= 0; ii--) {
        if (ii < idx || GetRef(didMatch)) {
          var entry = entries5[ii];
          if (entry[1] === NOT_SET2) {
            continue;
          }
          if (fn(entry) === false) {
            return false;
          }
        }
        var node = nodes[ii];
        if (ii === idx && !GetRef(didMatch)) {
          if (node.iterateFromIndexBackwards(subIndex.value, fn) === false) {
            return false;
          }
        } else if (node.iterate(fn, true) === false) {
          return false;
        }
      }
    } else {
      for (var ii$1 = GetRef(didMatch) ? idx : idx - 1; ii$1 >= 0; ii$1--) {
        var entry$1 = entries5[ii$1];
        if (entry$1[1] === NOT_SET2) {
          continue;
        }
        if (fn(entry$1) === false) {
          return false;
        }
      }
    }
    return true;
  };
  var SortedMapBtreeNodeIterator = function(Iterator$$1) {
    function SortedMapBtreeNodeIterator2(map5, type2, reverse5) {
      this._type = type2;
      this._reverse = reverse5;
      this._stack = map5._root && mapIteratorFrame$1(map5._root);
    }
    if (Iterator$$1)
      SortedMapBtreeNodeIterator2.__proto__ = Iterator$$1;
    SortedMapBtreeNodeIterator2.prototype = Object.create(Iterator$$1 && Iterator$$1.prototype);
    SortedMapBtreeNodeIterator2.prototype.constructor = SortedMapBtreeNodeIterator2;
    SortedMapBtreeNodeIterator2.prototype.next = function next() {
      var this$1 = this;
      var type2 = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        if (node.nodes) {
          var maxIndex = node.entries.length + node.nodes.length - 1;
          if (index <= maxIndex) {
            if (index % 2 === 0) {
              index /= 2;
              var subNode = node.nodes[this$1._reverse ? node.nodes.length - 1 - index : index];
              if (subNode) {
                stack = this$1._stack = mapIteratorFrame$1(subNode, stack);
              }
              continue;
            } else {
              index = (index - 1) / 2;
              var entry = node.entries[this$1._reverse ? node.entries.length - 1 - index : index];
              if (entry[1] === NOT_SET2) {
                continue;
              }
              return mapIteratorValue$1(type2, entry);
            }
          }
        } else {
          var maxIndex$1 = node.entries.length - 1;
          if (index <= maxIndex$1) {
            var entry$1 = node.entries[this$1._reverse ? maxIndex$1 - index : index];
            if (entry$1[1] === NOT_SET2) {
              continue;
            }
            return mapIteratorValue$1(type2, entry$1);
          }
        }
        stack = this$1._stack = this$1._stack.__prev;
      }
      return iteratorDone2();
    };
    return SortedMapBtreeNodeIterator2;
  }(Iterator3);
  function mapIteratorValue$1(type2, entry) {
    return iteratorValue2(type2, entry[0], entry[1]);
  }
  function mapIteratorFrame$1(node, prev) {
    return {
      node,
      index: 0,
      __prev: prev
    };
  }
  function allocArray(n3) {
    var a4 = new Array(n3);
    return a4;
  }
  var _indentStr = new Array(120).join(" ");
  function indent(level) {
    var indentCnt = 4 * level;
    if (indentCnt > _indentStr.length) {
      indentCnt = _indentStr.length;
    }
    return _indentStr.substring(0, indentCnt);
  }
  function clone(array3, canEdit) {
    if (array3 === void 0) {
      return array3;
    }
    if (canEdit) {
      return array3;
    }
    var newLen = array3.length;
    var newArray = allocArray(newLen);
    for (var ii = 0; ii < newLen; ii++) {
      newArray[ii] = array3[ii];
    }
    return newArray;
  }
  function setIn$2(array3, idx, val, canEdit) {
    if (canEdit) {
      array3[idx] = val;
      return array3;
    }
    var newLen = array3.length;
    var newArray = allocArray(newLen);
    for (var ii = 0; ii < idx; ii++) {
      newArray[ii] = array3[ii];
    }
    newArray[idx] = val;
    for (var ii$1 = idx + 1; ii$1 < newLen; ii$1++) {
      newArray[ii$1] = array3[ii$1];
    }
    return newArray;
  }
  function spliceIn$1(array3, idx, val, canEdit) {
    var newLen = array3.length + 1;
    if (canEdit) {
      for (var ii = newLen - 1, stop = idx + 1; ii >= stop; ii--) {
        array3[ii] = array3[ii - 1];
      }
      array3[idx] = val;
      return array3;
    }
    var newArray = allocArray(newLen);
    for (var ii$1 = 0; ii$1 < idx; ii$1++) {
      newArray[ii$1] = array3[ii$1];
    }
    newArray[idx] = val;
    for (var ii$2 = idx + 1; ii$2 < newLen; ii$2++) {
      newArray[ii$2] = array3[ii$2 - 1];
    }
    return newArray;
  }
  function spliceOut$1(array3, idx, canEdit) {
    var newLen = array3.length - 1;
    if (canEdit) {
      for (var ii = idx; ii < newLen; ii++) {
        array3[ii] = array3[ii + 1];
      }
      array3.length = newLen;
      return array3;
    }
    var newArray = allocArray(newLen);
    for (var ii$1 = 0; ii$1 < idx; ii$1++) {
      newArray[ii$1] = array3[ii$1];
    }
    for (var ii$2 = idx; ii$2 < newLen; ii$2++) {
      newArray[ii$2] = array3[ii$2 + 1];
    }
    return newArray;
  }
  function spliceOutN(array3, idx, n3, canEdit) {
    var newLen = array3.length - n3;
    if (canEdit) {
      for (var ii = idx; ii < newLen; ii++) {
        array3[ii] = array3[ii + n3];
      }
      array3.length = newLen;
      return array3;
    }
    var newArray = allocArray(newLen);
    for (var ii$1 = 0; ii$1 < idx; ii$1++) {
      newArray[ii$1] = array3[ii$1];
    }
    for (var ii$2 = idx; ii$2 < newLen; ii$2++) {
      newArray[ii$2] = array3[ii$2 + n3];
    }
    return newArray;
  }
  function spliceOutShiftRightN(array3, idx, rightN, canEdit) {
    var newLen = array3.length - 1 + rightN;
    var newArray;
    if (canEdit) {
      array3.length = newLen;
      newArray = array3;
    } else {
      newArray = allocArray(newLen);
    }
    for (var ii = newLen - 1, stop = idx + rightN; ii >= stop; ii--) {
      newArray[ii] = array3[ii - rightN + 1];
    }
    for (var ii$1 = idx + rightN - 1; ii$1 >= rightN; ii$1--) {
      newArray[ii$1] = array3[ii$1 - rightN];
    }
    return newArray;
  }
  function setInSpliceOut(array3, setInIdx, setInValue, spliceOutIdx, canEdit) {
    var newArray = spliceOut$1(array3, spliceOutIdx, canEdit);
    if (setInIdx < spliceOutIdx) {
      newArray[setInIdx] = setInValue;
    } else if (setInIdx > spliceOutIdx) {
      newArray[setInIdx - 1] = setInValue;
    }
    return newArray;
  }
  function binarySearch(comparator, entries5, key, didMatch) {
    var first5 = 0;
    var range = entries5.length;
    while (range > 0) {
      var half = Math.floor(range / 2);
      var entry = entries5[first5 + half];
      var entryKey = entry[0];
      var cmp = comparator(key, entryKey);
      if (cmp === 0) {
        SetRef2(didMatch);
        return first5 + half;
      }
      if (cmp > 0) {
        first5 += half + 1;
        range -= half + 1;
      } else {
        range = half;
      }
    }
    return first5;
  }
  SortedMapBtreeNode.prototype.indexSearch = function(index, didMatch, subIndex) {
    if (index < 0 || index >= this.size) {
      throw new Error(
        "BtreeNode.indexSearch: index is out of bounds: " + index + " vs " + this.size
      );
    }
    var entries5 = this.entries;
    var nodes = this.nodes;
    for (var i4 = 0; i4 < entries5.length; i4++) {
      if (nodes) {
        var node = nodes[i4];
        if (index < node.size) {
          subIndex.value = index;
          return i4;
        }
        index -= node.size;
      }
      var entry = entries5[i4];
      if (entry[1] !== NOT_SET2) {
        if (index === 0) {
          SetRef2(didMatch);
          return i4;
        }
        index--;
      }
    }
    if (nodes) {
      var node$1 = nodes[nodes.length - 1];
      if (index < node$1.size) {
        subIndex.value = index;
        return nodes.length - 1;
      }
    }
    throw new Error("BtreeNode.indexSearch: inconsistent node size");
  };
  SortedMapBtreeNode.prototype.splitNode = function(idx, updatedNode, subKvn, outKvn, ownerID, canEdit) {
    var entries5 = this.entries;
    var nodes = this.nodes;
    var medianIdx = this.btreeNodeSplitSize;
    var newEntries;
    var newNodes;
    if (idx < medianIdx) {
      var rightEntries = entries5.slice(medianIdx, entries5.length);
      var rightNodes = nodes.slice(medianIdx, nodes.length);
      var rightNode = new SortedMapBtreeNode(
        this.comparator,
        this.options,
        this.ownerID,
        rightEntries,
        rightNodes
      );
      outKvn[0] = entries5[medianIdx - 1];
      outKvn[1] = rightNode;
      if (canEdit) {
        entries5.length = medianIdx;
        nodes.length = medianIdx + 1;
        for (var i4 = medianIdx - 1; i4 >= idx + 1; i4--) {
          entries5[i4] = entries5[i4 - 1];
          nodes[i4 + 1] = nodes[i4];
        }
        entries5[idx] = subKvn[0];
        nodes[idx] = updatedNode;
        nodes[idx + 1] = subKvn[1];
        newEntries = entries5;
        newNodes = nodes;
      } else {
        newEntries = allocArray(medianIdx);
        newNodes = allocArray(medianIdx + 1);
        for (var i$1 = 0; i$1 < idx; i$1++) {
          newEntries[i$1] = entries5[i$1];
          newNodes[i$1] = nodes[i$1];
        }
        newEntries[idx] = subKvn[0];
        newNodes[idx] = updatedNode;
        newNodes[idx + 1] = subKvn[1];
        for (var i$2 = idx + 1; i$2 < medianIdx; i$2++) {
          newEntries[i$2] = entries5[i$2 - 1];
          newNodes[i$2 + 1] = nodes[i$2];
        }
      }
    } else if (idx === medianIdx) {
      var rightEntries$1 = allocArray(entries5.length - medianIdx);
      var rightNodes$1 = allocArray(nodes.length - medianIdx);
      rightEntries$1[0] = entries5[medianIdx];
      rightNodes$1[0] = subKvn[1];
      for (var i$3 = 1, len = rightEntries$1.length; i$3 < len; i$3++) {
        rightEntries$1[i$3] = entries5[medianIdx + i$3];
        rightNodes$1[i$3] = nodes[medianIdx + i$3];
      }
      rightNodes$1[rightNodes$1.length - 1] = nodes[nodes.length - 1];
      var rightNode$1 = new SortedMapBtreeNode(
        this.comparator,
        this.options,
        this.ownerID,
        rightEntries$1,
        rightNodes$1
      );
      outKvn[0] = subKvn[0];
      outKvn[1] = rightNode$1;
      if (canEdit) {
        entries5.length = medianIdx;
        nodes.length = medianIdx + 1;
        nodes[idx] = updatedNode;
        newEntries = entries5;
        newNodes = nodes;
      } else {
        newEntries = allocArray(medianIdx);
        newNodes = allocArray(medianIdx + 1);
        for (var i$4 = 0; i$4 < medianIdx; i$4++) {
          newEntries[i$4] = entries5[i$4];
          newNodes[i$4] = nodes[i$4];
        }
        newNodes[idx] = updatedNode;
      }
    } else {
      var rightEntries$2 = allocArray(entries5.length - medianIdx);
      var rightNodes$2 = allocArray(nodes.length - medianIdx);
      var idx0 = medianIdx + 1;
      var rightIdx = idx - idx0;
      for (var i$5 = 0, len$1 = rightIdx; i$5 < len$1; i$5++) {
        rightEntries$2[i$5] = entries5[idx0 + i$5];
        rightNodes$2[i$5] = nodes[idx0 + i$5];
      }
      rightEntries$2[rightIdx] = subKvn[0];
      rightNodes$2[rightIdx] = updatedNode;
      rightNodes$2[rightIdx + 1] = subKvn[1];
      for (var i$6 = rightIdx + 1, len$2 = rightEntries$2.length; i$6 < len$2; i$6++) {
        rightEntries$2[i$6] = entries5[medianIdx + i$6];
        rightNodes$2[i$6 + 1] = nodes[medianIdx + i$6 + 1];
      }
      var rightNode$2 = new SortedMapBtreeNode(
        this.comparator,
        this.options,
        this.ownerID,
        rightEntries$2,
        rightNodes$2
      );
      outKvn[0] = entries5[medianIdx];
      outKvn[1] = rightNode$2;
      if (canEdit) {
        entries5.length = medianIdx;
        nodes.length = medianIdx + 1;
        newEntries = entries5;
        newNodes = nodes;
      } else {
        newEntries = entries5.slice(0, medianIdx);
        newNodes = nodes.slice(0, medianIdx + 1);
      }
    }
    return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
  };
  SortedMapBtreeNode.prototype.splitLeaf = function(idx, entry, outKvn, ownerID, canEdit) {
    var entries5 = this.entries;
    var medianIdx = this.btreeNodeSplitSize;
    var newEntries;
    var newNodes;
    if (idx < medianIdx) {
      var rightEntries = entries5.slice(medianIdx, entries5.length);
      var rightNode = new SortedMapBtreeNode(
        this.comparator,
        this.options,
        this.ownerID,
        rightEntries
      );
      outKvn[0] = entries5[medianIdx - 1];
      outKvn[1] = rightNode;
      if (canEdit) {
        entries5.length = medianIdx;
        for (var i4 = medianIdx - 1; i4 >= idx + 1; i4--) {
          entries5[i4] = entries5[i4 - 1];
        }
        entries5[idx] = entry;
        newEntries = entries5;
      } else {
        newEntries = allocArray(medianIdx);
        for (var i$1 = 0; i$1 < idx; i$1++) {
          newEntries[i$1] = entries5[i$1];
        }
        newEntries[idx] = entry;
        for (var i$2 = idx + 1; i$2 < medianIdx; i$2++) {
          newEntries[i$2] = entries5[i$2 - 1];
        }
      }
    } else if (idx === medianIdx) {
      var rightEntries$1 = allocArray(entries5.length - medianIdx);
      rightEntries$1[0] = entries5[medianIdx];
      for (var i$3 = 1, len = rightEntries$1.length; i$3 < len; i$3++) {
        rightEntries$1[i$3] = entries5[medianIdx + i$3];
      }
      var rightNode$1 = new SortedMapBtreeNode(
        this.comparator,
        this.options,
        this.ownerID,
        rightEntries$1
      );
      outKvn[0] = entry;
      outKvn[1] = rightNode$1;
      if (canEdit) {
        entries5.length = medianIdx;
        newEntries = entries5;
      } else {
        newEntries = allocArray(medianIdx);
        for (var i$4 = 0; i$4 < medianIdx; i$4++) {
          newEntries[i$4] = entries5[i$4];
        }
      }
    } else {
      var rightEntries$2 = allocArray(entries5.length - medianIdx);
      var idx0 = medianIdx + 1;
      var rightIdx = idx - idx0;
      for (var i$5 = 0, len$1 = rightIdx; i$5 < len$1; i$5++) {
        rightEntries$2[i$5] = entries5[idx0 + i$5];
      }
      rightEntries$2[rightIdx] = entry;
      for (var i$6 = rightIdx + 1, len$2 = rightEntries$2.length; i$6 < len$2; i$6++) {
        rightEntries$2[i$6] = entries5[medianIdx + i$6];
      }
      var rightNode$2 = new SortedMapBtreeNode(
        this.comparator,
        this.options,
        this.ownerID,
        rightEntries$2
      );
      outKvn[0] = entries5[medianIdx];
      outKvn[1] = rightNode$2;
      if (canEdit) {
        entries5.length = medianIdx;
        newEntries = entries5;
      } else {
        newEntries = entries5.slice(0, medianIdx);
      }
    }
    return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
  };
  SortedMapBtreeNode.prototype.spliceNode = function(ownerID, idx, updatedNode, parent, parentIdx, canEdit, subKvn, outKvn) {
    var entries5 = this.entries;
    var nodes = this.nodes;
    var newEntries;
    var newNodes;
    var updatedEntry = subKvn[0];
    var updatedNeighbor = subKvn[1];
    var updatedNeighborIsLeft = subKvn[2];
    if (updatedNeighbor === NOT_SET2) {
      if (entries5.length <= this.btreeNodeSplitSize && parent) {
        if (updatedNeighborIsLeft) {
          return this.consolidateNode(
            ownerID,
            idx,
            updatedNode,
            idx - 1,
            idx - 1,
            parent,
            parentIdx,
            canEdit,
            outKvn
          );
        } else {
          return this.consolidateNode(
            ownerID,
            idx,
            updatedNode,
            idx,
            idx + 1,
            parent,
            parentIdx,
            canEdit,
            outKvn
          );
        }
      } else {
        if (updatedNeighborIsLeft) {
          newNodes = setInSpliceOut(nodes, idx, updatedNode, idx - 1, canEdit);
          newEntries = spliceOut$1(entries5, idx - 1, canEdit);
        } else {
          newNodes = setInSpliceOut(nodes, idx, updatedNode, idx + 1, canEdit);
          newEntries = spliceOut$1(entries5, idx, canEdit);
        }
      }
    } else {
      newNodes = setIn$2(nodes, idx, updatedNode, canEdit);
      if (updatedNeighbor) {
        if (updatedNeighborIsLeft) {
          newNodes[idx - 1] = updatedNeighbor;
          newEntries = setIn$2(entries5, idx - 1, updatedEntry, canEdit);
        } else {
          newNodes[idx + 1] = updatedNeighbor;
          newEntries = setIn$2(entries5, idx, updatedEntry, canEdit);
        }
      } else if (updatedEntry) {
        newEntries = setIn$2(entries5, idx, updatedEntry, canEdit);
      } else {
        newEntries = clone(entries5, canEdit);
      }
    }
    return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
  };
  SortedMapBtreeNode.prototype.consolidateNode = function(ownerID, idx, updatedNode, removeEntryIdx, removeNodeIdx, parent, parentIdx, canEdit, outKvn) {
    var entries5 = this.entries;
    var nodes = this.nodes;
    var parentEntries = parent.entries;
    var parentNodes = parent.nodes;
    var donorNode;
    var mergeNode;
    var leftNode;
    var rightNode;
    if (parentIdx === 0) {
      rightNode = parentNodes[parentIdx + 1];
      mergeNode = donorNode = rightNode;
    } else if (parentIdx === parentNodes.length - 1) {
      leftNode = parentNodes[parentIdx - 1];
      mergeNode = donorNode = leftNode;
    } else {
      leftNode = parentNodes[parentIdx - 1];
      rightNode = parentNodes[parentIdx + 1];
      var leftAvail = (leftNode.entries.length - this.btreeNodeSplitSize + 1) / 2;
      var rightAvail = (rightNode.entries.length - this.btreeNodeSplitSize + 1) / 2;
      if (leftAvail >= rightAvail) {
        donorNode = leftNode;
        mergeNode = rightNode;
      } else {
        donorNode = rightNode;
        mergeNode = leftNode;
      }
    }
    var newEntries;
    var newNodes;
    function moveFromLeftNode(node, n3, merge2) {
      newEntries = spliceOutShiftRightN(entries5, removeEntryIdx, n3, canEdit);
      newNodes = spliceOutShiftRightN(nodes, removeNodeIdx, n3, canEdit);
      var uIdx = idx < removeNodeIdx ? idx + n3 : idx + n3 - 1;
      newNodes[uIdx] = updatedNode;
      var i4 = n3 - 1;
      newEntries[i4] = parentEntries[parentIdx - 1];
      newNodes[i4--] = node.nodes[node.nodes.length - 1];
      var j3;
      for (j3 = node.entries.length - 1; i4 >= 0; i4--, j3--) {
        newEntries[i4] = node.entries[j3];
        newNodes[i4] = node.nodes[j3];
      }
      if (merge2) {
        outKvn[1] = NOT_SET2;
      } else {
        outKvn[0] = node.entries[j3];
        var newNodeEntries = spliceOutN(
          node.entries,
          node.entries.length - n3,
          n3,
          canEdit
        );
        var newNodeNodes = spliceOutN(
          node.nodes,
          node.nodes.length - n3,
          n3,
          canEdit
        );
        outKvn[1] = node.makeNewNode(
          newNodeEntries,
          newNodeNodes,
          ownerID,
          canEdit
        );
      }
      outKvn[2] = true;
    }
    function moveFromRightNode(node, n3, merge2) {
      newEntries = spliceOut$1(entries5, removeEntryIdx, canEdit);
      newNodes = spliceOut$1(nodes, removeNodeIdx, canEdit);
      var j3 = newEntries.length;
      newEntries.length += n3;
      newNodes.length += n3;
      var uIdx = idx < removeNodeIdx ? idx : idx - 1;
      newNodes[uIdx] = updatedNode;
      newEntries[j3++] = parentEntries[parentIdx];
      newNodes[j3] = node.nodes[0];
      for (var i4 = 0, iLimit = n3 - 1; i4 < iLimit; i4++) {
        newEntries[j3 + i4] = node.entries[i4];
        newNodes[j3 + i4 + 1] = node.nodes[i4 + 1];
      }
      if (merge2) {
        outKvn[1] = NOT_SET2;
      } else {
        outKvn[0] = node.entries[n3 - 1];
        var newNodeEntries = spliceOutN(node.entries, 0, n3, canEdit);
        var newNodeNodes = spliceOutN(node.nodes, 0, n3, canEdit);
        outKvn[1] = node.makeNewNode(
          newNodeEntries,
          newNodeNodes,
          ownerID,
          canEdit
        );
      }
      outKvn[2] = false;
    }
    var donorAvail = Math.floor(
      (donorNode.entries.length - this.btreeNodeSplitSize + 1) / 2
    );
    if (donorAvail > 0) {
      if (donorNode === leftNode) {
        moveFromLeftNode(donorNode, donorAvail);
      } else {
        moveFromRightNode(donorNode, donorAvail);
      }
    } else {
      if (mergeNode === leftNode) {
        moveFromLeftNode(mergeNode, mergeNode.entries.length + 1, true);
      } else {
        moveFromRightNode(mergeNode, mergeNode.entries.length + 1, true);
      }
    }
    return this.makeNewNode(newEntries, newNodes, ownerID, canEdit);
  };
  SortedMapBtreeNode.prototype.consolidateLeaf = function(ownerID, idx, parent, parentIdx, canEdit, outKvn) {
    var entries5 = this.entries;
    var parentEntries = parent.entries;
    var parentNodes = parent.nodes;
    var donorNode;
    var leftNode;
    var rightNode;
    if (parentIdx === 0) {
      rightNode = parentNodes[parentIdx + 1];
      donorNode = rightNode;
    } else if (parentIdx === parentNodes.length - 1) {
      leftNode = parentNodes[parentIdx - 1];
      donorNode = leftNode;
    } else {
      leftNode = parentNodes[parentIdx - 1];
      rightNode = parentNodes[parentIdx + 1];
      var leftAvail = leftNode.entries.length - this.btreeNodeSplitSize;
      var rightAvail = rightNode.entries.length - this.btreeNodeSplitSize;
      if (leftAvail >= rightAvail) {
        donorNode = leftNode;
      } else {
        donorNode = rightNode;
      }
    }
    var newEntries;
    function moveFromLeftNode(node, n4, merge2) {
      newEntries = spliceOutShiftRightN(entries5, idx, n4, canEdit);
      var m3 = n4;
      if (!parentNotSet) {
        newEntries[n4 - 1] = parentEntry;
        m3--;
      }
      for (var i4 = 0; i4 < m3; i4++) {
        newEntries[i4] = node.entries[node.entries.length - m3 + i4];
      }
      if (merge2) {
        outKvn[1] = NOT_SET2;
      } else {
        m3++;
        outKvn[0] = node.entries[node.entries.length - m3];
        var newNodeEntries = spliceOutN(
          node.entries,
          node.entries.length - m3,
          m3,
          canEdit
        );
        outKvn[1] = node.makeNewNode(newNodeEntries, void 0, ownerID, canEdit);
      }
      outKvn[2] = true;
    }
    function moveFromRightNode(node, n4, merge2) {
      newEntries = spliceOut$1(entries5, idx, canEdit);
      var j3 = newEntries.length;
      newEntries.length += n4;
      var m3 = n4;
      if (!parentNotSet) {
        newEntries[j3++] = parentEntry;
        m3--;
      }
      for (var i4 = 0; i4 < m3; i4++) {
        newEntries[j3 + i4] = node.entries[i4];
      }
      if (merge2) {
        outKvn[1] = NOT_SET2;
      } else {
        outKvn[0] = node.entries[m3++];
        var newNodeEntries = spliceOutN(node.entries, 0, m3, canEdit);
        outKvn[1] = node.makeNewNode(newNodeEntries, void 0, ownerID, canEdit);
      }
      outKvn[2] = false;
    }
    var parentEntry = donorNode === leftNode ? parentEntries[parentIdx - 1] : parentEntries[parentIdx];
    var parentNotSet = parentEntry[1] === NOT_SET2;
    var parentAdj = parentNotSet ? 1 : 0;
    var donorAvail = donorNode.entries.length - this.btreeNodeSplitSize - parentAdj;
    if (donorAvail > 0) {
      var n3 = Math.floor((donorAvail + 1) / 2);
      if (donorNode === leftNode) {
        moveFromLeftNode(donorNode, n3);
      } else {
        moveFromRightNode(donorNode, n3);
      }
    } else {
      var n$1 = donorNode.entries.length + 1 - parentAdj;
      if (donorNode === leftNode) {
        moveFromLeftNode(donorNode, n$1, true);
      } else {
        moveFromRightNode(donorNode, n$1, true);
      }
    }
    return this.makeNewNode(newEntries, void 0, ownerID, canEdit);
  };
  var SortedMapBtreeNodePacker = function(SortedMapPacker$$1) {
    function SortedMapBtreeNodePacker2() {
      SortedMapPacker$$1.apply(this, arguments);
    }
    if (SortedMapPacker$$1)
      SortedMapBtreeNodePacker2.__proto__ = SortedMapPacker$$1;
    SortedMapBtreeNodePacker2.prototype = Object.create(SortedMapPacker$$1 && SortedMapPacker$$1.prototype);
    SortedMapBtreeNodePacker2.prototype.constructor = SortedMapBtreeNodePacker2;
    SortedMapBtreeNodePacker2.prototype.calcPlanCnt = function calcPlanCnt(order, height) {
      if (height < 1 || height > 20) {
        throw new Error("Height is out of supported limit");
      }
      var n3 = order - 1;
      for (var h3 = 1; h3 < height; h3++) {
        n3 = n3 * order + (order - 1);
      }
      return n3;
    };
    SortedMapBtreeNodePacker2.prototype.prepareCachedPlan = function prepareCachedPlan(order, n3) {
      var key = order.toString() + " " + n3.toString();
      var cachedPlan = SortedMapBtreeNodePacker2.cache[key];
      if (cachedPlan) {
        return cachedPlan;
      }
      var plan = this.preparePlan(order, n3);
      this.verifyPlan(plan);
      if (order < 100 && n3 <= 100 && n3 >= order && SortedMapBtreeNodePacker2.cacheSize < 500) {
        SortedMapBtreeNodePacker2.cache[key] = plan;
        SortedMapBtreeNodePacker2.cacheSize++;
      }
      return plan;
    };
    SortedMapBtreeNodePacker2.prototype.preparePlan = function preparePlan(order, n3) {
      var order1 = order - 1;
      var height = 1;
      var maxEntriesCnt = order1;
      var maxEntriesCnt1;
      while (maxEntriesCnt < n3) {
        maxEntriesCnt1 = maxEntriesCnt;
        maxEntriesCnt = maxEntriesCnt * order + order1;
        height++;
      }
      if (maxEntriesCnt === n3) {
        return {
          op: "build",
          full: true,
          height,
          order,
          repeat: 1,
          total: n3
        };
      }
      if (height === 1) {
        return {
          op: "build",
          full: false,
          height,
          order,
          repeat: 1,
          total: n3
        };
      }
      var planCnt1 = maxEntriesCnt1;
      var rootOrder = 1 + Math.floor(n3 / (planCnt1 + 1));
      if (rootOrder < 2) {
        throw new Error(
          "Something is wrong, the rootOrder is expected to be >= 2"
        );
      }
      if (rootOrder * planCnt1 + (rootOrder - 1) === n3) {
        var repeat = rootOrder;
        var repPlan = [];
        var total$1 = repeat * planCnt1 + repeat - 1;
        repPlan.push({
          op: "build",
          full: true,
          height: height - 1,
          order,
          repeat: rootOrder,
          total: total$1
        });
        return {
          op: "assemble",
          height,
          order,
          total: total$1,
          items: repPlan
        };
      }
      var plan = [];
      if (rootOrder > 2) {
        var repeat$1 = rootOrder - 2;
        var total$2 = repeat$1 * planCnt1 + repeat$1 - 1;
        var build = {
          op: "build",
          full: true,
          height: height - 1,
          order,
          repeat: repeat$1,
          total: total$2
        };
        plan.push(build);
        n3 -= total$2;
        n3--;
      }
      n3--;
      var n22 = Math.floor(n3 / 2);
      if (n3 - n22 > 0) {
        plan.push(this.prepareCachedPlan(order, n3 - n22));
      }
      if (n22 > 0) {
        plan.push(this.prepareCachedPlan(order, n22));
      }
      var total = 0;
      var ilen = plan.length;
      for (var i4 = 0; i4 < ilen; i4++) {
        total += plan[i4].total;
      }
      total += plan.length - 1;
      return {
        op: "assemble",
        height,
        order,
        total,
        items: plan
      };
    };
    SortedMapBtreeNodePacker2.prototype.verifyPlan = function verifyPlan(plan, level) {
      var this$1 = this;
      function failed(msg) {
        throw new Error(msg);
      }
      if (level === void 0) {
        level = 0;
      }
      if (plan.op === "assemble") {
        var cnt = 0;
        var ilen = plan.items.length;
        for (var i4 = 0; i4 < ilen; i4++) {
          var pl = plan.items[i4];
          cnt += pl.total;
          if (pl.op === "build") {
            if (!(pl.order >= pl.repeat)) {
              failed(
                "Plan verification test failed: pl.order >= pl.repeat: " + JSON.stringify(pl)
              );
            }
          }
          if (!(plan.height === pl.height + 1)) {
            failed("Plan verification test failed: plan.height === pl.height+1");
          }
          this$1.verifyPlan(pl, level + 1);
        }
        cnt += plan.items.length - 1;
        if (!(plan.total === cnt)) {
          failed("Count mismatch: " + plan.total + " vs " + cnt);
        }
      } else if (plan.op === "build") {
        var ec = this.calcPlanCnt(plan.order, plan.height);
        if (plan.full) {
          var cnt$1 = ec * plan.repeat + plan.repeat - 1;
          if (!(plan.total === cnt$1)) {
            failed("Plan verification test failed: plan.total === ec");
          }
        } else {
          if (!(plan.height === 1)) {
            failed(
              "Plan verification test failed: expected height 1, got instead " + plan.height
            );
          }
          if (!(plan.total < ec)) {
            failed("Plan verification test failed: plan.total < ec");
          }
          var halfSize = Math.floor((plan.order - 1) / 2);
          if (level > 0 && !(plan.total >= halfSize)) {
            failed(
              "Plan verification test failed: plan.total >= halfSize: " + plan.total + ", " + halfSize
            );
          }
        }
      } else {
        failed("Plan verification test failed: invalid op: " + plan.op);
      }
    };
    SortedMapBtreeNodePacker2.prototype.runPlan = function runPlan(plan, iter) {
      var this$1 = this;
      function failed(msg) {
        msg = "Packing Plan is corrupt: " + msg;
        throw new Error(msg);
      }
      if (plan.op === "assemble") {
        var ilen = plan.items.length;
        for (var i4 = 0; i4 < ilen; i4++) {
          if (i4 > 0) {
            this$1.populate(iter, 1);
          }
          this$1.runPlan(plan.items[i4], iter);
        }
      } else if (plan.op === "build") {
        var n3 = (plan.total - plan.repeat + 1) / plan.repeat;
        for (var i$1 = 0; i$1 < plan.repeat; i$1++) {
          if (i$1 > 0) {
            this$1.populate(iter, 1);
          }
          this$1.populate(iter, n3);
        }
      } else {
        failed("invalid op: " + plan.op);
      }
      this.flush(plan.height);
    };
    SortedMapBtreeNodePacker2.prototype.flushLevel = function flushLevel(level) {
      this.prepareLevel(level + 1);
      var node = this.stack[level];
      node._calcSize();
      this.addNode(level + 1, node);
      this.stack[level] = void 0;
    };
    SortedMapBtreeNodePacker2.prototype.flush = function flush(height) {
      var this$1 = this;
      for (var i4 = 0; i4 < height; i4++) {
        var level = i4;
        if (this$1.stack[level]) {
          this$1.flushLevel(level);
        }
      }
      this.stackLevel = height;
    };
    SortedMapBtreeNodePacker2.prototype.populate = function populate(iter, n3) {
      var this$1 = this;
      for (var i4 = 0; i4 < n3; i4++) {
        var next = iter.next();
        this$1.entriesCnt++;
        if (next.done) {
          throw new Error(
            "unexpected end of iterator at " + this$1.entriesCnt + " vs " + iter.size
          );
        }
        var entry = next.value;
        var level = this$1.stackLevel;
        this$1.prepareLevel(level);
        this$1.addEntry(level, entry);
        if (level > 0) {
          this$1.stackLevel = 0;
        } else if (this$1.stackIndices[level] === this$1.order - 1) {
          this$1.flushLevel(level);
          this$1.stackLevel++;
        }
      }
    };
    SortedMapBtreeNodePacker2.prototype.addEntry = function addEntry(level, entry) {
      this.stack[level].entries[this.stackIndices[level]++] = entry;
    };
    SortedMapBtreeNodePacker2.prototype.addNode = function addNode(level, node) {
      this.stack[level].nodes[this.stackIndices[level]] = node;
      if (this.stackIndices[level] === this.order - 1) {
        this.flushLevel(level);
        this.stackLevel++;
      }
    };
    SortedMapBtreeNodePacker2.prototype.prepareLevel = function prepareLevel(level) {
      if (!this.stack[level]) {
        var entries5 = allocArray(this.order - 1);
        entries5.length = 0;
        var nodes;
        if (level > 0) {
          nodes = allocArray(this.order);
          nodes.length = 0;
        }
        this.stack[level] = new SortedMapBtreeNode(
          this.comparator,
          this.options,
          this.ownerID,
          entries5,
          nodes
        );
        this.stackIndices[level] = 0;
      }
    };
    SortedMapBtreeNodePacker2.prototype.finish = function finish() {
      var level = this.stackLevel;
      if (level >= this.stack.length) {
        return void 0;
      }
      return this.stack[level].nodes[0];
    };
    SortedMapBtreeNodePacker2.prototype.pack = function pack2(comparator, options, ownerID, collection) {
      if (options && options.type && options.type !== DEFAULT_TYPE) {
        throw new Error("Unsuported type by btree factory: " + options.type);
      }
      this.order = options && options.btreeOrder ? options.btreeOrder : DEFAULT_BTREE_ORDER;
      var kc = KeyedCollection2(collection);
      assertNotInfinite2(kc.size);
      var plan = this.preparePlan(this.order, kc.size);
      this.comparator = comparator;
      this.options = options;
      this.ownerID = ownerID;
      this.stack = [];
      this.stackIndices = [];
      this.stackLevel = 0;
      this.entriesCnt = 0;
      var iter = kc.entries();
      this.runPlan(plan, iter);
      if (!iter.next().done) {
        throw new Error("iterator did not end when expected");
      }
      return this.finish();
    };
    return SortedMapBtreeNodePacker2;
  }(SortedMapPacker);
  SortedMapBtreeNodePacker.cache = {};
  SortedMapBtreeNodePacker.cacheSize = 0;
  var SortedMapBtreeNodeFactory = function(SortedMapNodeFactory$$1) {
    function SortedMapBtreeNodeFactory2() {
      SortedMapNodeFactory$$1.apply(this, arguments);
    }
    if (SortedMapNodeFactory$$1)
      SortedMapBtreeNodeFactory2.__proto__ = SortedMapNodeFactory$$1;
    SortedMapBtreeNodeFactory2.prototype = Object.create(SortedMapNodeFactory$$1 && SortedMapNodeFactory$$1.prototype);
    SortedMapBtreeNodeFactory2.prototype.constructor = SortedMapBtreeNodeFactory2;
    SortedMapBtreeNodeFactory2.prototype.createNode = function createNode2(comparator, options, ownerID, entries5, nodes) {
      return new SortedMapBtreeNode(comparator, options, ownerID, entries5, nodes);
    };
    SortedMapBtreeNodeFactory2.prototype.createPacker = function createPacker2() {
      return new SortedMapBtreeNodePacker();
    };
    SortedMapBtreeNodeFactory2.prototype.createIterator = function createIterator2(map5, type2, reverse5) {
      return new SortedMapBtreeNodeIterator(map5, type2, reverse5);
    };
    return SortedMapBtreeNodeFactory2;
  }(SortedMapNodeFactory);
  var SortedMap = function(Map$$1) {
    function SortedMap2(value, comparator, options) {
      if (!comparator) {
        if (this instanceof SortedMap2) {
          comparator = this.getComparator();
        }
        if (!comparator) {
          comparator = SortedMap2.defaultComparator;
        }
      }
      if (!options) {
        if (this instanceof SortedMap2) {
          options = this.getOptions();
        }
        if (!options) {
          options = SortedMap2.defaultOptions;
        }
      }
      return value === null || value === void 0 ? emptySortedMap(comparator, options) : isSortedMap(value) && value.getComparator() === comparator && value.getOptions() === options ? value : emptySortedMap(comparator, options).withMutations(function(map5) {
        map5.pack(value);
      });
    }
    if (Map$$1)
      SortedMap2.__proto__ = Map$$1;
    SortedMap2.prototype = Object.create(Map$$1 && Map$$1.prototype);
    SortedMap2.prototype.constructor = SortedMap2;
    SortedMap2.of = function of() {
      var keyValues = [], len = arguments.length;
      while (len--)
        keyValues[len] = arguments[len];
      return emptySortedMap().withMutations(function(map5) {
        for (var i4 = 0; i4 < keyValues.length; i4 += 2) {
          if (i4 + 1 >= keyValues.length) {
            throw new Error("Missing value for key: " + keyValues[i4]);
          }
          map5.set(keyValues[i4], keyValues[i4 + 1]);
        }
      });
    };
    SortedMap2.prototype.toString = function toString8() {
      return this.__toString("SortedMap {", "}");
    };
    SortedMap2.prototype.getComparator = function getComparator2() {
      return this._comparator;
    };
    SortedMap2.prototype.getOptions = function getOptions() {
      return this._options;
    };
    SortedMap2.prototype.get = function get24(k3, notSetValue) {
      return this._root ? this._root.get(k3, notSetValue) : notSetValue;
    };
    SortedMap2.prototype.entryAt = function entryAt(index) {
      return this._root ? this._root.entryAt(index) : new Error("index is out of bounds");
    };
    SortedMap2.prototype.keyAt = function keyAt(index) {
      return this._root ? this._root.keyAt(index) : new Error("index is out of bounds");
    };
    SortedMap2.prototype.valueAt = function valueAt(index) {
      return this._root ? this._root.valueAt(index) : new Error("index is out of bounds");
    };
    SortedMap2.prototype.clear = function clear3() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__altered = true;
        return this;
      }
      return emptySortedMap(this._comparator, this._options);
    };
    SortedMap2.prototype.pack = function pack2(value) {
      var this$1 = this;
      var collection;
      if (value === void 0) {
        collection = this;
      } else {
        var index = 0;
        var entries5 = KeyedCollection2(value).map(function(v3, k3) {
          return [k3, v3, index++];
        }).valueSeq().toArray();
        if (entries5.length === 0) {
          if (this.__ownerID) {
            this._root = void 0;
            this.size = 0, this.__altered = true;
            return this;
          }
          return emptySortedMap(this._comparator, this._options);
        }
        entries5.sort(function(a4, b3) {
          return this$1._comparator(a4[0], b3[0]) || a4[2] - b3[2];
        });
        var result = [];
        for (var i4 = 0, stop = entries5.length - 1; i4 < stop; i4++) {
          var entry = entries5[i4];
          var nextEntry = entries5[i4 + 1];
          if (this$1._comparator(entry[0], nextEntry[0]) < 0) {
            var newEntry = [entry[0], entry[1]];
            result.push(newEntry);
          }
        }
        var entry$1 = entries5[entries5.length - 1];
        var newEntry$1 = [entry$1[0], entry$1[1]];
        result.push(newEntry$1);
        collection = KeyedSeq2(result);
      }
      assertNotInfinite2(collection.size);
      var newSize = collection.size;
      var newRoot = this._factory.createPacker().pack(this._comparator, this._options, this.__ownerID, collection);
      if (this.__ownerID) {
        this._root = newRoot;
        this.size = newSize, this.__altered = true;
        return this;
      }
      return newRoot ? makeSortedMap(this._comparator, this._options, newSize, newRoot) : emptySortedMap(this._comparator, this._options);
    };
    SortedMap2.prototype.set = function set7(k3, v3) {
      return updateMap$1(this, k3, v3);
    };
    SortedMap2.prototype.remove = function remove7(k3) {
      return updateMap$1(this, k3, NOT_SET2);
    };
    SortedMap2.prototype.fastRemove = function fastRemove2(k3) {
      return updateMap$1(this, k3, NOT_SET2, true);
    };
    SortedMap2.prototype.sort = function sort3(comparator) {
      return SortedMap2(this, comparator, this.getOptions());
    };
    SortedMap2.prototype.sortBy = function sortBy3(mapper, comparator) {
      return SortedMap2(
        sortFactory2(this, comparator, mapper),
        comparator,
        this.getOptions()
      );
    };
    SortedMap2.prototype.__iterator = function __iterator3(type2, reverse5) {
      return this._factory.createIterator(this, type2, reverse5);
    };
    SortedMap2.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptySortedMap(this._comparator, this._options);
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeSortedMap(
        this._comparator,
        this._options,
        this.size,
        this._root,
        ownerID
      );
    };
    SortedMap2.prototype.checkConsistency = function checkConsistency2(printFlag) {
      var this$1 = this;
      if (this._root) {
        if (!(this.size > 0)) {
          return 1;
        }
        return this._root.checkConsistency(printFlag);
      } else if (!(this.size === 0)) {
        return 2;
      }
      var n3 = 0;
      var prevKey;
      this.keySeq().forEach(function(key) {
        if (n3 && !(this$1._comparator(prevKey, key) < 0)) {
          return 3;
        }
        prevKey = key;
        n3++;
      });
      if (this.size !== n3) {
        return 4;
      }
      return 0;
    };
    SortedMap2.prototype.print = function print2(maxDepth) {
      var header = "SORTED MAP: size=" + this.size;
      if (this._options) {
        header = header + ", options=" + JSON.stringify(this._options);
      }
      console.log(header);
      if (this._root) {
        this._root.print(1, maxDepth);
      }
      return this;
    };
    SortedMap2.prototype.from = function from(key, backwards) {
      var self = this;
      var sequence = Object.create(KeyedSeq2).prototype;
      sequence.__iterateUncached = function(fn, reverse5) {
        var this$1 = this;
        if (!self._root) {
          return 0;
        }
        var iterations = 0;
        if (backwards) {
          self._root.iterateFromBackwards(
            key,
            function(entry) {
              iterations++;
              return fn(entry[1], entry[0], this$1);
            },
            reverse5
          );
        } else {
          self._root.iterateFrom(
            key,
            function(entry) {
              iterations++;
              return fn(entry[1], entry[0], this$1);
            },
            reverse5
          );
        }
        return iterations;
      };
      return sequence;
    };
    SortedMap2.prototype.fromIndex = function fromIndex(index, backwards) {
      var self = this;
      var sequence = Object.create(KeyedSeq2).prototype;
      sequence.__iterateUncached = function(fn, reverse5) {
        var this$1 = this;
        if (reverse5) {
          throw new Error("fromIndex: reverse mode not supported");
        }
        if (!self._root) {
          return 0;
        }
        var iterations = 0;
        if (backwards) {
          self._root.iterateFromIndexBackwards(
            index,
            function(entry) {
              iterations++;
              return fn(entry[1], entry[0], this$1);
            },
            reverse5
          );
        } else {
          self._root.iterateFromIndex(
            index,
            function(entry) {
              iterations++;
              return fn(entry[1], entry[0], this$1);
            },
            reverse5
          );
        }
        return iterations;
      };
      return sequence;
    };
    return SortedMap2;
  }(Map3);
  SortedMap.isSortedMap = isSortedMap;
  SortedMap.defaultComparator = defaultComparator$1;
  SortedMap.defaultOptions = {
    type: "btree"
  };
  var SortedMapPrototype = SortedMap.prototype;
  SortedMapPrototype[IS_SORTED_SYMBOL] = true;
  SortedMapPrototype[DELETE2] = SortedMapPrototype.remove;
  SortedMapPrototype.removeIn = SortedMapPrototype.deleteIn;
  SortedMapPrototype.removeAll = SortedMapPrototype.deleteAll;
  function makeSortedMap(comparator, options, size, root2, ownerID) {
    var map5 = Object.create(SortedMapPrototype);
    map5._comparator = comparator || SortedMap.defaultComparator;
    map5._options = options || SortedMap.defaultOptions;
    map5.size = size;
    map5._root = root2;
    map5._factory = SortedMap.getFactory(map5._options);
    map5.__ownerID = ownerID;
    map5.__altered = false;
    if (map5._options.btreeOrder && map5._options.btreeOrder < 3) {
      throw new Error(
        "SortedMap: minimum value of options.btreeOrder is 3, but got: " + map5._options.btreeOrder
      );
    }
    if (!map5._factory) {
      throw new Error("SortedMap type not supported: " + map5._options.type);
    }
    return map5;
  }
  var DEFAULT_EMPTY_MAP;
  function emptySortedMap(comparator, options) {
    if (comparator === SortedMap.defaultComparator && options === SortedMap.defaultOptions) {
      return DEFAULT_EMPTY_MAP || (DEFAULT_EMPTY_MAP = makeSortedMap(
        SortedMap.defaultComparator,
        SortedMap.defaultOptions,
        0
      ));
    }
    return makeSortedMap(comparator, options, 0);
  }
  function updateMap$1(map5, k3, v3, fast) {
    var remove7 = v3 === NOT_SET2;
    var root2 = map5._root;
    var newRoot;
    var newSize;
    if (!root2) {
      if (remove7) {
        return map5;
      }
      newSize = 1;
      var entries5 = [[k3, v3]];
      newRoot = map5._factory.createNode(
        map5._comparator,
        map5._options,
        map5.__ownerID,
        entries5
      );
    } else {
      var didChangeSize = MakeRef2();
      var didAlter = MakeRef2();
      if (remove7) {
        if (fast) {
          newRoot = map5._root.fastRemove(
            map5.__ownerID,
            k3,
            didChangeSize,
            didAlter
          );
        } else {
          newRoot = map5._root.remove(map5.__ownerID, k3, didChangeSize, didAlter);
        }
      } else {
        newRoot = map5._root.upsert(map5.__ownerID, k3, v3, didChangeSize, didAlter);
      }
      if (!GetRef(didAlter)) {
        return map5;
      }
      newSize = map5.size + (GetRef(didChangeSize) ? remove7 ? -1 : 1 : 0);
      if (newSize === 0) {
        newRoot = void 0;
      }
    }
    if (map5.__ownerID) {
      map5.size = newSize;
      map5._root = newRoot;
      map5.__altered = true;
      return map5;
    }
    return newRoot ? makeSortedMap(map5._comparator, map5._options, newSize, newRoot) : emptySortedMap(map5._comparator, map5._options);
  }
  function defaultComparator$1(a4, b3) {
    if (is2(a4, b3)) {
      return 0;
    }
    var ta = typeof a4;
    var tb = typeof b3;
    if (ta !== tb) {
      return ta < tb ? -1 : 1;
    }
    switch (ta) {
      case "undefined":
        break;
      case "object":
        if (a4 === null) {
          return 1;
        }
        if (b3 === null) {
          return -1;
        }
        a4 = a4.toString();
        b3 = b3.toString();
        break;
      case "boolean":
        break;
      case "number":
        if (is2(a4, NaN)) {
          return 1;
        }
        if (is2(b3, NaN)) {
          return -1;
        }
        break;
      case "string":
        break;
      case "symbol":
        a4 = a4.toString();
        b3 = b3.toString();
        break;
      case "function":
        a4 = a4.toString();
        b3 = b3.toString();
        break;
      default:
        break;
    }
    return a4 < b3 ? -1 : a4 > b3 ? 1 : 0;
  }
  SortedMap.getFactory = function(options) {
    var type2 = options && options.type ? options.type : SortedMap.defaultOptions.type;
    return SortedMap.factories[type2];
  };
  SortedMap.factories = {
    btree: new SortedMapBtreeNodeFactory()
  };
  var IS_STACK_SYMBOL2 = "@@__IMMUTABLE_STACK__@@";
  function isStack2(maybeStack) {
    return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL2]);
  }
  var Stack2 = function(IndexedCollection$$1) {
    function Stack3(value) {
      return value === null || value === void 0 ? emptyStack2() : isStack2(value) ? value : emptyStack2().pushAll(value);
    }
    if (IndexedCollection$$1)
      Stack3.__proto__ = IndexedCollection$$1;
    Stack3.prototype = Object.create(IndexedCollection$$1 && IndexedCollection$$1.prototype);
    Stack3.prototype.constructor = Stack3;
    Stack3.of = function of() {
      return this(arguments);
    };
    Stack3.prototype.toString = function toString8() {
      return this.__toString("Stack [", "]");
    };
    Stack3.prototype.get = function get24(index, notSetValue) {
      var head = this._head;
      index = wrapIndex2(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };
    Stack3.prototype.peek = function peek() {
      return this._head && this._head.value;
    };
    Stack3.prototype.push = function push() {
      var arguments$1 = arguments;
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments$1[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack2(newSize, head);
    };
    Stack3.prototype.pushAll = function pushAll(iter) {
      iter = IndexedCollection$$1(iter);
      if (iter.size === 0) {
        return this;
      }
      if (this.size === 0 && isStack2(iter)) {
        return iter;
      }
      assertNotInfinite2(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.__iterate(
        function(value) {
          newSize++;
          head = {
            value,
            next: head
          };
        },
        /* reverse */
        true
      );
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack2(newSize, head);
    };
    Stack3.prototype.pop = function pop() {
      return this.slice(1);
    };
    Stack3.prototype.clear = function clear3() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = void 0;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyStack2();
    };
    Stack3.prototype.slice = function slice7(begin, end) {
      if (wholeSlice2(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin2(begin, this.size);
      var resolvedEnd = resolveEnd2(end, this.size);
      if (resolvedEnd !== this.size) {
        return IndexedCollection$$1.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack2(newSize, head);
    };
    Stack3.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptyStack2();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack2(this.size, this._head, ownerID, this.__hash);
    };
    Stack3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      if (reverse5) {
        return new ArraySeq2(this.toArray()).__iterate(
          function(v3, k3) {
            return fn(v3, k3, this$1);
          },
          reverse5
        );
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this$1) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };
    Stack3.prototype.__iterator = function __iterator3(type2, reverse5) {
      if (reverse5) {
        return new ArraySeq2(this.toArray()).__iterator(type2, reverse5);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator3(function() {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue2(type2, iterations++, value);
        }
        return iteratorDone2();
      });
    };
    return Stack3;
  }(IndexedCollection2);
  Stack2.isStack = isStack2;
  var StackPrototype2 = Stack2.prototype;
  StackPrototype2[IS_STACK_SYMBOL2] = true;
  StackPrototype2.shift = StackPrototype2.pop;
  StackPrototype2.unshift = StackPrototype2.push;
  StackPrototype2.unshiftAll = StackPrototype2.pushAll;
  StackPrototype2.withMutations = withMutations2;
  StackPrototype2.wasAltered = wasAltered3;
  StackPrototype2.asImmutable = asImmutable2;
  StackPrototype2["@@transducer/init"] = StackPrototype2.asMutable = asMutable2;
  StackPrototype2["@@transducer/step"] = function(result, arr) {
    return result.unshift(arr);
  };
  StackPrototype2["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  function makeStack2(size, head, ownerID, hash3) {
    var map5 = Object.create(StackPrototype2);
    map5.size = size;
    map5._head = head;
    map5.__ownerID = ownerID;
    map5.__hash = hash3;
    map5.__altered = false;
    return map5;
  }
  var EMPTY_STACK2;
  function emptyStack2() {
    return EMPTY_STACK2 || (EMPTY_STACK2 = makeStack2(0));
  }
  var IS_SET_SYMBOL2 = "@@__IMMUTABLE_SET__@@";
  function isSet2(maybeSet) {
    return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL2]);
  }
  function isOrderedSet2(maybeOrderedSet) {
    return isSet2(maybeOrderedSet) && isOrdered2(maybeOrderedSet);
  }
  function deepEqual2(a4, b3) {
    if (a4 === b3) {
      return true;
    }
    if (!isCollection2(b3) || a4.size !== void 0 && b3.size !== void 0 && a4.size !== b3.size || a4.__hash !== void 0 && b3.__hash !== void 0 && a4.__hash !== b3.__hash || isKeyed2(a4) !== isKeyed2(b3) || isIndexed2(a4) !== isIndexed2(b3) || isOrdered2(a4) !== isOrdered2(b3) || isSorted(a4) !== isSorted(b3)) {
      return false;
    }
    if (a4.size === 0 && b3.size === 0) {
      return true;
    }
    var notAssociative = !isAssociative2(a4);
    if (isOrdered2(a4)) {
      var entries5 = a4.entries();
      return b3.every(function(v3, k3) {
        var entry = entries5.next().value;
        return entry && is2(entry[1], v3) && (notAssociative || is2(entry[0], k3));
      }) && entries5.next().done;
    }
    var flipped = false;
    if (a4.size === void 0) {
      if (b3.size === void 0) {
        if (typeof a4.cacheResult === "function") {
          a4.cacheResult();
        }
      } else {
        flipped = true;
        var _2 = a4;
        a4 = b3;
        b3 = _2;
      }
    }
    var allEqual = true;
    var bSize = b3.__iterate(function(v3, k3) {
      if (notAssociative ? !a4.has(v3) : flipped ? !is2(v3, a4.get(k3, NOT_SET2)) : !is2(a4.get(k3, NOT_SET2), v3)) {
        allEqual = false;
        return false;
      }
    });
    return allEqual && a4.size === bSize;
  }
  function mixin2(ctor, methods) {
    var keyCopier = function(key) {
      ctor.prototype[key] = methods[key];
    };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }
  function toJS2(value) {
    if (!value || typeof value !== "object") {
      return value;
    }
    if (!isCollection2(value)) {
      if (!isDataStructure2(value)) {
        return value;
      }
      value = Seq2(value);
    }
    if (isKeyed2(value)) {
      var result$1 = {};
      value.__iterate(function(v3, k3) {
        result$1[k3] = toJS2(v3);
      });
      return result$1;
    }
    var result = [];
    value.__iterate(function(v3) {
      result.push(toJS2(v3));
    });
    return result;
  }
  function isSortedSet(maybeSortedSet) {
    return isSet2(maybeSortedSet) && isSorted(maybeSortedSet);
  }
  var Set3 = function(SetCollection$$1) {
    function Set4(value) {
      return value === null || value === void 0 ? emptySet2() : isSet2(value) && !isOrdered2(value) && !isSorted(value) ? value : emptySet2().withMutations(function(set7) {
        var iter = SetCollection$$1(value);
        assertNotInfinite2(iter.size);
        iter.forEach(function(v3) {
          return set7.add(v3);
        });
      });
    }
    if (SetCollection$$1)
      Set4.__proto__ = SetCollection$$1;
    Set4.prototype = Object.create(SetCollection$$1 && SetCollection$$1.prototype);
    Set4.prototype.constructor = Set4;
    Set4.of = function of() {
      return this(arguments);
    };
    Set4.fromKeys = function fromKeys(value) {
      return this(KeyedCollection2(value).keySeq());
    };
    Set4.intersect = function intersect(sets) {
      sets = Collection3(sets).toArray();
      return sets.length ? SetPrototype2.intersect.apply(Set4(sets.pop()), sets) : emptySet2();
    };
    Set4.union = function union(sets) {
      sets = Collection3(sets).toArray();
      return sets.length ? SetPrototype2.union.apply(Set4(sets.pop()), sets) : emptySet2();
    };
    Set4.prototype.toString = function toString8() {
      return this.__toString("Set {", "}");
    };
    Set4.prototype.has = function has9(value) {
      return this._map.has(value);
    };
    Set4.prototype.add = function add(value) {
      return updateSet2(this, this._map.set(value, value));
    };
    Set4.prototype.remove = function remove7(value) {
      return updateSet2(this, this._map.remove(value));
    };
    Set4.prototype.clear = function clear3() {
      return updateSet2(this, this._map.clear());
    };
    Set4.prototype.map = function map5(mapper, context) {
      var this$1 = this;
      var removes = [];
      var adds = [];
      this.forEach(function(value) {
        var mapped = mapper.call(context, value, value, this$1);
        if (mapped !== value) {
          removes.push(value);
          adds.push(mapped);
        }
      });
      return this.withMutations(function(set7) {
        removes.forEach(function(value) {
          return set7.remove(value);
        });
        adds.forEach(function(value) {
          return set7.add(value);
        });
      });
    };
    Set4.prototype.union = function union() {
      var iters = [], len = arguments.length;
      while (len--)
        iters[len] = arguments[len];
      iters = iters.filter(function(x3) {
        return x3.size !== 0;
      });
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set7) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetCollection$$1(iters[ii]).forEach(function(value) {
            return set7.add(value);
          });
        }
      });
    };
    Set4.prototype.intersect = function intersect() {
      var iters = [], len = arguments.length;
      while (len--)
        iters[len] = arguments[len];
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetCollection$$1(iter);
      });
      var toRemove = [];
      this.forEach(function(value) {
        if (!iters.every(function(iter) {
          return iter.includes(value);
        })) {
          toRemove.push(value);
        }
      });
      return this.withMutations(function(set7) {
        toRemove.forEach(function(value) {
          set7.remove(value);
        });
      });
    };
    Set4.prototype.subtract = function subtract() {
      var iters = [], len = arguments.length;
      while (len--)
        iters[len] = arguments[len];
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetCollection$$1(iter);
      });
      var toRemove = [];
      this.forEach(function(value) {
        if (iters.some(function(iter) {
          return iter.includes(value);
        })) {
          toRemove.push(value);
        }
      });
      return this.withMutations(function(set7) {
        toRemove.forEach(function(value) {
          set7.remove(value);
        });
      });
    };
    Set4.prototype.sort = function sort3(comparator) {
      return OrderedSet2(sortFactory2(this, comparator));
    };
    Set4.prototype.sortBy = function sortBy3(mapper, comparator) {
      return OrderedSet2(sortFactory2(this, comparator, mapper));
    };
    Set4.prototype.wasAltered = function wasAltered5() {
      return this._map.wasAltered();
    };
    Set4.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      return this._map.__iterate(function(k3) {
        return fn(k3, k3, this$1);
      }, reverse5);
    };
    Set4.prototype.__iterator = function __iterator3(type2, reverse5) {
      return this._map.__iterator(type2, reverse5);
    };
    Set4.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        if (this.size === 0) {
          return this.__empty();
        }
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };
    return Set4;
  }(SetCollection2);
  Set3.isSet = isSet2;
  var SetPrototype2 = Set3.prototype;
  SetPrototype2[IS_SET_SYMBOL2] = true;
  SetPrototype2[DELETE2] = SetPrototype2.remove;
  SetPrototype2.merge = SetPrototype2.concat = SetPrototype2.union;
  SetPrototype2.withMutations = withMutations2;
  SetPrototype2.asImmutable = asImmutable2;
  SetPrototype2["@@transducer/init"] = SetPrototype2.asMutable = asMutable2;
  SetPrototype2["@@transducer/step"] = function(result, arr) {
    return result.add(arr);
  };
  SetPrototype2["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  SetPrototype2.__empty = emptySet2;
  SetPrototype2.__make = makeSet2;
  function updateSet2(set7, newMap) {
    if (set7.__ownerID) {
      set7.size = newMap.size;
      set7._map = newMap;
      return set7;
    }
    return newMap === set7._map ? set7 : newMap.size === 0 ? set7.__empty() : set7.__make(newMap);
  }
  function makeSet2(map5, ownerID) {
    var set7 = Object.create(SetPrototype2);
    set7.size = map5 ? map5.size : 0;
    set7._map = map5;
    set7.__ownerID = ownerID;
    return set7;
  }
  var EMPTY_SET2;
  function emptySet2() {
    return EMPTY_SET2 || (EMPTY_SET2 = makeSet2(emptyMap2()));
  }
  var SortedSet = function(Set$$1) {
    function SortedSet2(value, comparator, options) {
      if (!comparator) {
        if (this instanceof SortedSet2) {
          comparator = this._map && this.getComparator();
        }
        if (!comparator) {
          comparator = SortedSet2.defaultComparator;
        }
      }
      if (!options) {
        if (this instanceof SortedSet2) {
          options = this._map && this.getOptions();
        }
        if (!options) {
          options = SortedSet2.defaultOptions;
        }
      }
      return value === null || value === void 0 ? emptySortedSet(comparator, options) : isSortedSet(value) && value.getComparator() === comparator && value.getOptions() === options ? value : emptySortedSet(comparator, options).withMutations(function(set7) {
        set7.pack(value);
      });
    }
    if (Set$$1)
      SortedSet2.__proto__ = Set$$1;
    SortedSet2.prototype = Object.create(Set$$1 && Set$$1.prototype);
    SortedSet2.prototype.constructor = SortedSet2;
    SortedSet2.of = function of() {
      return this(arguments);
    };
    SortedSet2.fromKeys = function fromKeys(value) {
      return this(KeyedCollection2(value).keySeq());
    };
    SortedSet2.prototype.toString = function toString8() {
      return this.__toString("SortedSet {", "}");
    };
    SortedSet2.prototype.getComparator = function getComparator2() {
      return this._map.getComparator();
    };
    SortedSet2.prototype.getOptions = function getOptions() {
      return this._map.getOptions();
    };
    SortedSet2.prototype.pack = function pack2(value) {
      var seq = value === void 0 ? void 0 : SetCollection2(value).toKeyedSeq().mapKeys(function(k3, v3) {
        return v3;
      });
      return updateSortedSet(this, this._map.pack(seq));
    };
    SortedSet2.prototype.from = function from(value, backwards) {
      return this._map.from(value, backwards).toSetSeq();
    };
    SortedSet2.prototype.fromIndex = function fromIndex(index, backwards) {
      return this._map.fromIndex(index, backwards).toSetSeq();
    };
    SortedSet2.prototype.sort = function sort3(comparator) {
      return SortedSet2(this, comparator, this.getOptions());
    };
    SortedSet2.prototype.sortBy = function sortBy3(mapper, comparator) {
      return SortedSet2(mapFactory2(this, mapper), comparator, this.getOptions());
    };
    SortedSet2.prototype.__ensureOwner = function __ensureOwner3(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        if (this.size === 0) {
          return this.__empty();
        }
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };
    return SortedSet2;
  }(Set3);
  SortedSet.isSortedSet = isSortedSet;
  SortedSet.defaultComparator = SortedMap.defaultComparator;
  SortedSet.defaultOptions = SortedMap.defaultOptions;
  var SortedSetPrototype = SortedSet.prototype;
  SortedSetPrototype[IS_SORTED_SYMBOL] = true;
  SortedSetPrototype.__empty = function() {
    return emptySortedSet(this.getComparator(), this.getOptions());
  };
  SortedSetPrototype.__make = makeSortedSet;
  function updateSortedSet(set7, newMap) {
    if (set7.__ownerID) {
      set7.size = newMap.size;
      set7._map = newMap;
      return set7;
    }
    return newMap === set7._map ? set7 : newMap.size === 0 ? set7.__empty() : set7.__make(newMap);
  }
  function makeSortedSet(map5, ownerID) {
    var set7 = Object.create(SortedSetPrototype);
    set7.size = map5 ? map5.size : 0;
    set7._map = map5;
    set7.__ownerID = ownerID;
    return set7;
  }
  function emptySortedSet(comparator, options) {
    return makeSortedSet(emptySortedMap(comparator, options));
  }
  var Range2 = function(IndexedSeq$$1) {
    function Range3(start2, end, step) {
      if (!(this instanceof Range3)) {
        return new Range3(start2, end, step);
      }
      invariant2(step !== 0, "Cannot step a Range by 0");
      start2 = start2 || 0;
      if (end === void 0) {
        end = Infinity;
      }
      step = step === void 0 ? 1 : Math.abs(step);
      if (end < start2) {
        step = -step;
      }
      this._start = start2;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start2) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE2) {
          return EMPTY_RANGE2;
        }
        EMPTY_RANGE2 = this;
      }
    }
    if (IndexedSeq$$1)
      Range3.__proto__ = IndexedSeq$$1;
    Range3.prototype = Object.create(IndexedSeq$$1 && IndexedSeq$$1.prototype);
    Range3.prototype.constructor = Range3;
    Range3.prototype.toString = function toString8() {
      if (this.size === 0) {
        return "Range []";
      }
      return "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
    };
    Range3.prototype.get = function get24(index, notSetValue) {
      return this.has(index) ? this._start + wrapIndex2(this, index) * this._step : notSetValue;
    };
    Range3.prototype.includes = function includes5(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
    };
    Range3.prototype.slice = function slice7(begin, end) {
      if (wholeSlice2(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin2(begin, this.size);
      end = resolveEnd2(end, this.size);
      if (end <= begin) {
        return new Range3(0, 0);
      }
      return new Range3(
        this.get(begin, this._end),
        this.get(end, this._end),
        this._step
      );
    };
    Range3.prototype.indexOf = function indexOf3(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index;
        }
      }
      return -1;
    };
    Range3.prototype.lastIndexOf = function lastIndexOf3(searchValue) {
      return this.indexOf(searchValue);
    };
    Range3.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      var size = this.size;
      var step = this._step;
      var value = reverse5 ? this._start + (size - 1) * step : this._start;
      var i4 = 0;
      while (i4 !== size) {
        if (fn(value, reverse5 ? size - ++i4 : i4++, this$1) === false) {
          break;
        }
        value += reverse5 ? -step : step;
      }
      return i4;
    };
    Range3.prototype.__iterator = function __iterator3(type2, reverse5) {
      var size = this.size;
      var step = this._step;
      var value = reverse5 ? this._start + (size - 1) * step : this._start;
      var i4 = 0;
      return new Iterator3(function() {
        if (i4 === size) {
          return iteratorDone2();
        }
        var v3 = value;
        value += reverse5 ? -step : step;
        return iteratorValue2(type2, reverse5 ? size - ++i4 : i4++, v3);
      });
    };
    Range3.prototype.equals = function equals5(other) {
      return other instanceof Range3 ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual2(this, other);
    };
    return Range3;
  }(IndexedSeq2);
  var EMPTY_RANGE2;
  function getIn$12(collection, searchKeyPath, notSetValue) {
    var keyPath = coerceKeyPath2(searchKeyPath);
    var i4 = 0;
    while (i4 !== keyPath.length) {
      collection = get13(collection, keyPath[i4++], NOT_SET2);
      if (collection === NOT_SET2) {
        return notSetValue;
      }
    }
    return collection;
  }
  function getIn$$1(searchKeyPath, notSetValue) {
    return getIn$12(this, searchKeyPath, notSetValue);
  }
  function hasIn$12(collection, keyPath) {
    return getIn$12(collection, keyPath, NOT_SET2) !== NOT_SET2;
  }
  function hasIn$$1(searchKeyPath) {
    return hasIn$12(this, searchKeyPath);
  }
  function toObject2() {
    assertNotInfinite2(this.size);
    var object = {};
    this.__iterate(function(v3, k3) {
      object[k3] = v3;
    });
    return object;
  }
  Collection3.isIterable = isCollection2;
  Collection3.isKeyed = isKeyed2;
  Collection3.isIndexed = isIndexed2;
  Collection3.isAssociative = isAssociative2;
  Collection3.isOrdered = isOrdered2;
  Collection3.Iterator = Iterator3;
  mixin2(Collection3, {
    // ### Conversion to other types
    toArray: function toArray2() {
      assertNotInfinite2(this.size);
      var array3 = new Array(this.size || 0);
      var useTuples = isKeyed2(this);
      var i4 = 0;
      this.__iterate(function(v3, k3) {
        array3[i4++] = useTuples ? [k3, v3] : v3;
      });
      return array3;
    },
    toIndexedSeq: function toIndexedSeq2() {
      return new ToIndexedSequence2(this);
    },
    toJS: function toJS$13() {
      return toJS2(this);
    },
    toKeyedSeq: function toKeyedSeq3() {
      return new ToKeyedSequence2(this, true);
    },
    toMap: function toMap2() {
      return Map3(this.toKeyedSeq());
    },
    toObject: toObject2,
    toOrderedMap: function toOrderedMap2() {
      return OrderedMap2(this.toKeyedSeq());
    },
    toSortedMap: function toSortedMap(comparator, options) {
      return SortedMap(this.toKeyedSeq(), comparator, options);
    },
    toSortedSet: function toSortedSet(comparator, options) {
      return SortedSet(
        isKeyed2(this) ? this.valueSeq() : this,
        comparator,
        options
      );
    },
    toOrderedSet: function toOrderedSet2() {
      return OrderedSet2(isKeyed2(this) ? this.valueSeq() : this);
    },
    toSet: function toSet2() {
      return Set3(isKeyed2(this) ? this.valueSeq() : this);
    },
    toSetSeq: function toSetSeq2() {
      return new ToSetSequence2(this);
    },
    toSeq: function toSeq3() {
      return isIndexed2(this) ? this.toIndexedSeq() : isKeyed2(this) ? this.toKeyedSeq() : this.toSetSeq();
    },
    toStack: function toStack2() {
      return Stack2(isKeyed2(this) ? this.valueSeq() : this);
    },
    toList: function toList2() {
      return List2(isKeyed2(this) ? this.valueSeq() : this);
    },
    // ### Common JavaScript methods and properties
    toString: function toString6() {
      return "[Collection]";
    },
    __toString: function __toString2(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    concat: function concat2() {
      var values3 = [], len = arguments.length;
      while (len--)
        values3[len] = arguments[len];
      return reify2(this, concatFactory2(this, values3));
    },
    includes: function includes3(searchValue) {
      return this.some(function(value) {
        return is2(value, searchValue);
      });
    },
    entries: function entries3() {
      return this.__iterator(ITERATE_ENTRIES2);
    },
    every: function every2(predicate, context) {
      assertNotInfinite2(this.size);
      var returnValue = true;
      this.__iterate(function(v3, k3, c3) {
        if (!predicate.call(context, v3, k3, c3)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },
    filter: function filter4(predicate, context) {
      return reify2(this, filterFactory2(this, predicate, context, true));
    },
    find: function find3(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },
    forEach: function forEach2(sideEffect, context) {
      assertNotInfinite2(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },
    join: function join2(separator) {
      assertNotInfinite2(this.size);
      separator = separator !== void 0 ? "" + separator : ",";
      var joined = "";
      var isFirst = true;
      this.__iterate(function(v3) {
        isFirst ? isFirst = false : joined += separator;
        joined += v3 !== null && v3 !== void 0 ? v3.toString() : "";
      });
      return joined;
    },
    keys: function keys2() {
      return this.__iterator(ITERATE_KEYS2);
    },
    map: function map4(mapper, context) {
      return reify2(this, mapFactory2(this, mapper, context));
    },
    reduce: function reduce$12(reducer, initialReduction, context) {
      return reduce2(
        this,
        reducer,
        initialReduction,
        context,
        arguments.length < 2,
        false
      );
    },
    reduceRight: function reduceRight2(reducer, initialReduction, context) {
      return reduce2(
        this,
        reducer,
        initialReduction,
        context,
        arguments.length < 2,
        true
      );
    },
    reverse: function reverse3() {
      return reify2(this, reverseFactory2(this, true));
    },
    slice: function slice5(begin, end) {
      return reify2(this, sliceFactory2(this, begin, end, true));
    },
    some: function some2(predicate, context) {
      return !this.every(not2(predicate), context);
    },
    sort: function sort2(comparator) {
      return reify2(this, sortFactory2(this, comparator));
    },
    partialSort: function partialSort(n3, comparator) {
      return reify2(this, partialSortFactory(this, n3, comparator));
    },
    incSort: function incSort(comparator) {
      return reify2(this, incSortFactory(this, comparator, null, true));
    },
    values: function values2() {
      return this.__iterator(ITERATE_VALUES2);
    },
    // ### More sequential methods
    butLast: function butLast2() {
      return this.slice(0, -1);
    },
    isEmpty: function isEmpty2() {
      return this.size !== void 0 ? this.size === 0 : !this.some(function() {
        return true;
      });
    },
    count: function count3(predicate, context) {
      return ensureSize2(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },
    countBy: function countBy2(grouper, context) {
      return countByFactory2(this, grouper, context);
    },
    equals: function equals3(other) {
      return deepEqual2(this, other);
    },
    entrySeq: function entrySeq2() {
      var collection = this;
      if (collection._cache) {
        return new ArraySeq2(collection._cache);
      }
      var entriesSequence = collection.toSeq().map(entryMapper2).toIndexedSeq();
      entriesSequence.fromEntrySeq = function() {
        return collection.toSeq();
      };
      return entriesSequence;
    },
    filterNot: function filterNot2(predicate, context) {
      return this.filter(not2(predicate), context);
    },
    findEntry: function findEntry2(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v3, k3, c3) {
        if (predicate.call(context, v3, k3, c3)) {
          found = [k3, v3];
          return false;
        }
      });
      return found;
    },
    findKey: function findKey2(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },
    findLast: function findLast2(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },
    findLastEntry: function findLastEntry2(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },
    findLastKey: function findLastKey2(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },
    first: function first3(notSetValue) {
      return this.find(returnTrue2, null, notSetValue);
    },
    flatMap: function flatMap2(mapper, context) {
      return reify2(this, flatMapFactory2(this, mapper, context));
    },
    flatten: function flatten4(depth) {
      return reify2(this, flattenFactory2(this, depth, true));
    },
    fromEntrySeq: function fromEntrySeq2() {
      return new FromEntriesSequence2(this);
    },
    get: function get20(searchKey, notSetValue) {
      return this.find(function(_2, key) {
        return is2(key, searchKey);
      }, void 0, notSetValue);
    },
    getIn: getIn$$1,
    groupBy: function groupBy2(grouper, context) {
      return groupByFactory2(this, grouper, context);
    },
    has: function has6(searchKey) {
      return this.get(searchKey, NOT_SET2) !== NOT_SET2;
    },
    hasIn: hasIn$$1,
    isSubset: function isSubset2(iter) {
      iter = typeof iter.includes === "function" ? iter : Collection3(iter);
      return this.every(function(value) {
        return iter.includes(value);
      });
    },
    isSuperset: function isSuperset2(iter) {
      iter = typeof iter.isSubset === "function" ? iter : Collection3(iter);
      return iter.isSubset(this);
    },
    keyOf: function keyOf2(searchValue) {
      return this.findKey(function(value) {
        return is2(value, searchValue);
      });
    },
    keySeq: function keySeq4() {
      return this.toSeq().map(keyMapper2).toIndexedSeq();
    },
    last: function last3(notSetValue) {
      return this.toSeq().reverse().first(notSetValue);
    },
    lastKeyOf: function lastKeyOf2(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },
    max: function max4(comparator) {
      return maxFactory2(this, comparator);
    },
    maxBy: function maxBy2(mapper, comparator) {
      return maxFactory2(this, comparator, mapper);
    },
    min: function min3(comparator) {
      return maxFactory2(
        this,
        comparator ? neg2(comparator) : defaultNegComparator2
      );
    },
    minBy: function minBy2(mapper, comparator) {
      return maxFactory2(
        this,
        comparator ? neg2(comparator) : defaultNegComparator2,
        mapper
      );
    },
    rest: function rest2() {
      return this.slice(1);
    },
    skip: function skip2(amount) {
      return amount === 0 ? this : this.slice(Math.max(0, amount));
    },
    skipLast: function skipLast2(amount) {
      return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
    },
    skipWhile: function skipWhile3(predicate, context) {
      return reify2(this, skipWhileFactory2(this, predicate, context, true));
    },
    skipUntil: function skipUntil2(predicate, context) {
      return this.skipWhile(not2(predicate), context);
    },
    sortBy: function sortBy2(mapper, comparator) {
      return reify2(this, sortFactory2(this, comparator, mapper));
    },
    partialSortBy: function partialSortBy(n3, mapper, comparator) {
      return reify2(this, partialSortFactory(this, n3, comparator, mapper));
    },
    incSortBy: function incSortBy(mapper, comparator) {
      return reify2(this, incSortFactory(this, comparator, mapper, true));
    },
    take: function take2(amount) {
      return this.slice(0, Math.max(0, amount));
    },
    takeLast: function takeLast2(amount) {
      return this.slice(-Math.max(0, amount));
    },
    takeWhile: function takeWhile2(predicate, context) {
      return reify2(this, takeWhileFactory2(this, predicate, context));
    },
    takeUntil: function takeUntil2(predicate, context) {
      return this.takeWhile(not2(predicate), context);
    },
    update: function update8(fn) {
      return fn(this);
    },
    valueSeq: function valueSeq2() {
      return this.toIndexedSeq();
    },
    // ### Hashable Object
    hashCode: function hashCode3() {
      return this.__hash || (this.__hash = hashCollection2(this));
    }
    // ### Internal
    // abstract __iterate(fn, reverse)
    // abstract __iterator(type, reverse)
  });
  var CollectionPrototype2 = Collection3.prototype;
  CollectionPrototype2[IS_COLLECTION_SYMBOL2] = true;
  CollectionPrototype2[ITERATOR_SYMBOL2] = CollectionPrototype2.values;
  CollectionPrototype2.toJSON = CollectionPrototype2.toArray;
  CollectionPrototype2.__toStringMapper = quoteString2;
  CollectionPrototype2.inspect = CollectionPrototype2.toSource = function() {
    return this.toString();
  };
  CollectionPrototype2.chain = CollectionPrototype2.flatMap;
  CollectionPrototype2.contains = CollectionPrototype2.includes;
  mixin2(KeyedCollection2, {
    // ### More sequential methods
    flip: function flip2() {
      return reify2(this, flipFactory2(this));
    },
    mapEntries: function mapEntries2(mapper, context) {
      var this$1 = this;
      var iterations = 0;
      return reify2(
        this,
        this.toSeq().map(function(v3, k3) {
          return mapper.call(context, [k3, v3], iterations++, this$1);
        }).fromEntrySeq()
      );
    },
    mapKeys: function mapKeys2(mapper, context) {
      var this$1 = this;
      return reify2(
        this,
        this.toSeq().flip().map(function(k3, v3) {
          return mapper.call(context, k3, v3, this$1);
        }).flip()
      );
    }
  });
  var KeyedCollectionPrototype2 = KeyedCollection2.prototype;
  KeyedCollectionPrototype2[IS_KEYED_SYMBOL2] = true;
  KeyedCollectionPrototype2[ITERATOR_SYMBOL2] = CollectionPrototype2.entries;
  KeyedCollectionPrototype2.toJSON = toObject2;
  KeyedCollectionPrototype2.__toStringMapper = function(v3, k3) {
    return quoteString2(k3) + ": " + quoteString2(v3);
  };
  mixin2(IndexedCollection2, {
    // ### Conversion to other types
    toKeyedSeq: function toKeyedSeq4() {
      return new ToKeyedSequence2(this, false);
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    filter: function filter5(predicate, context) {
      return reify2(this, filterFactory2(this, predicate, context, false));
    },
    findIndex: function findIndex2(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    indexOf: function indexOf2(searchValue) {
      var key = this.keyOf(searchValue);
      return key === void 0 ? -1 : key;
    },
    lastIndexOf: function lastIndexOf2(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === void 0 ? -1 : key;
    },
    reverse: function reverse4() {
      return reify2(this, reverseFactory2(this, false));
    },
    slice: function slice6(begin, end) {
      return reify2(this, sliceFactory2(this, begin, end, false));
    },
    splice: function splice2(index, removeNum) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum || 0, 0);
      if (numArgs === 0 || numArgs === 2 && !removeNum) {
        return this;
      }
      index = resolveBegin2(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify2(
        this,
        numArgs === 1 ? spliced : spliced.concat(arrCopy2(arguments, 2), this.slice(index + removeNum))
      );
    },
    // ### More collection methods
    findLastIndex: function findLastIndex2(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    first: function first4(notSetValue) {
      return this.get(0, notSetValue);
    },
    flatten: function flatten5(depth) {
      return reify2(this, flattenFactory2(this, depth, false));
    },
    get: function get21(index, notSetValue) {
      index = wrapIndex2(this, index);
      return index < 0 || (this.size === Infinity || this.size !== void 0 && index > this.size) ? notSetValue : this.find(function(_2, key) {
        return key === index;
      }, void 0, notSetValue);
    },
    has: function has7(index) {
      index = wrapIndex2(this, index);
      return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
    },
    interpose: function interpose2(separator) {
      return reify2(this, interposeFactory2(this, separator));
    },
    interleave: function interleave2() {
      var collections = [this].concat(arrCopy2(arguments));
      var zipped = zipWithFactory2(this.toSeq(), IndexedSeq2.of, collections);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * collections.length;
      }
      return reify2(this, interleaved);
    },
    keySeq: function keySeq5() {
      return Range2(0, this.size);
    },
    last: function last4(notSetValue) {
      return this.get(-1, notSetValue);
    },
    skipWhile: function skipWhile4(predicate, context) {
      return reify2(this, skipWhileFactory2(this, predicate, context, false));
    },
    incSort: function incSort2(comparator) {
      return reify2(this, incSortFactory(this, comparator, null, false));
    },
    incSortBy: function incSortBy2(mapper, comparator) {
      return reify2(this, incSortFactory(this, comparator, mapper, false));
    },
    zip: function zip2() {
      var collections = [this].concat(arrCopy2(arguments));
      return reify2(this, zipWithFactory2(this, defaultZipper2, collections));
    },
    zipAll: function zipAll2() {
      var collections = [this].concat(arrCopy2(arguments));
      return reify2(this, zipWithFactory2(this, defaultZipper2, collections, true));
    },
    zipWith: function zipWith2(zipper) {
      var collections = arrCopy2(arguments);
      collections[0] = this;
      return reify2(this, zipWithFactory2(this, zipper, collections));
    }
  });
  var IndexedCollectionPrototype2 = IndexedCollection2.prototype;
  IndexedCollectionPrototype2[IS_INDEXED_SYMBOL2] = true;
  IndexedCollectionPrototype2[IS_ORDERED_SYMBOL2] = true;
  mixin2(SetCollection2, {
    // ### ES6 Collection methods (ES6 Array and Map)
    get: function get22(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },
    includes: function includes4(value) {
      return this.has(value);
    },
    // ### More sequential methods
    keySeq: function keySeq6() {
      return this.valueSeq();
    }
  });
  SetCollection2.prototype.has = CollectionPrototype2.includes;
  SetCollection2.prototype.contains = SetCollection2.prototype.includes;
  mixin2(KeyedSeq2, KeyedCollection2.prototype);
  mixin2(IndexedSeq2, IndexedCollection2.prototype);
  mixin2(SetSeq2, SetCollection2.prototype);
  function reduce2(collection, reducer, reduction, context, useFirst, reverse5) {
    assertNotInfinite2(collection.size);
    collection.__iterate(function(v3, k3, c3) {
      if (useFirst) {
        useFirst = false;
        reduction = v3;
      } else {
        reduction = reducer.call(context, reduction, v3, k3, c3);
      }
    }, reverse5);
    return reduction;
  }
  function keyMapper2(v3, k3) {
    return k3;
  }
  function entryMapper2(v3, k3) {
    return [k3, v3];
  }
  function not2(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  }
  function neg2(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    };
  }
  function defaultZipper2() {
    return arrCopy2(arguments);
  }
  function defaultNegComparator2(a4, b3) {
    return a4 < b3 ? 1 : a4 > b3 ? -1 : 0;
  }
  function hashCollection2(collection) {
    if (collection.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered2(collection);
    var keyed = isKeyed2(collection);
    var h3 = ordered ? 1 : 0;
    var size = collection.__iterate(
      keyed ? ordered ? function(v3, k3) {
        h3 = 31 * h3 + hashMerge2(hash2(v3), hash2(k3)) | 0;
      } : function(v3, k3) {
        h3 = h3 + hashMerge2(hash2(v3), hash2(k3)) | 0;
      } : ordered ? function(v3) {
        h3 = 31 * h3 + hash2(v3) | 0;
      } : function(v3) {
        h3 = h3 + hash2(v3) | 0;
      }
    );
    return murmurHashOfSize2(size, h3);
  }
  function murmurHashOfSize2(size, h3) {
    h3 = imul3(h3, 3432918353);
    h3 = imul3(h3 << 15 | h3 >>> -15, 461845907);
    h3 = imul3(h3 << 13 | h3 >>> -13, 5);
    h3 = (h3 + 3864292196 | 0) ^ size;
    h3 = imul3(h3 ^ h3 >>> 16, 2246822507);
    h3 = imul3(h3 ^ h3 >>> 13, 3266489909);
    h3 = smi2(h3 ^ h3 >>> 16);
    return h3;
  }
  function hashMerge2(a4, b3) {
    return a4 ^ b3 + 2654435769 + (a4 << 6) + (a4 >> 2) | 0;
  }
  var OrderedSet2 = function(Set$$1) {
    function OrderedSet3(value) {
      return value === null || value === void 0 ? emptyOrderedSet2() : isOrderedSet2(value) ? value : emptyOrderedSet2().withMutations(function(set7) {
        var iter = SetCollection2(value);
        assertNotInfinite2(iter.size);
        iter.forEach(function(v3) {
          return set7.add(v3);
        });
      });
    }
    if (Set$$1)
      OrderedSet3.__proto__ = Set$$1;
    OrderedSet3.prototype = Object.create(Set$$1 && Set$$1.prototype);
    OrderedSet3.prototype.constructor = OrderedSet3;
    OrderedSet3.of = function of() {
      return this(arguments);
    };
    OrderedSet3.fromKeys = function fromKeys(value) {
      return this(KeyedCollection2(value).keySeq());
    };
    OrderedSet3.prototype.toString = function toString8() {
      return this.__toString("OrderedSet {", "}");
    };
    return OrderedSet3;
  }(Set3);
  OrderedSet2.isOrderedSet = isOrderedSet2;
  var OrderedSetPrototype2 = OrderedSet2.prototype;
  OrderedSetPrototype2[IS_ORDERED_SYMBOL2] = true;
  OrderedSetPrototype2.zip = IndexedCollectionPrototype2.zip;
  OrderedSetPrototype2.zipWith = IndexedCollectionPrototype2.zipWith;
  OrderedSetPrototype2.__empty = emptyOrderedSet2;
  OrderedSetPrototype2.__make = makeOrderedSet2;
  function makeOrderedSet2(map5, ownerID) {
    var set7 = Object.create(OrderedSetPrototype2);
    set7.size = map5 ? map5.size : 0;
    set7._map = map5;
    set7.__ownerID = ownerID;
    return set7;
  }
  var EMPTY_ORDERED_SET2;
  function emptyOrderedSet2() {
    return EMPTY_ORDERED_SET2 || (EMPTY_ORDERED_SET2 = makeOrderedSet2(emptyOrderedMap2()));
  }
  var Record3 = function Record4(defaultValues, name) {
    var hasInitialized;
    var RecordType = function Record5(values3) {
      var this$1 = this;
      if (values3 instanceof RecordType) {
        return values3;
      }
      if (!(this instanceof RecordType)) {
        return new RecordType(values3);
      }
      if (!hasInitialized) {
        hasInitialized = true;
        var keys3 = Object.keys(defaultValues);
        var indices = RecordTypePrototype._indices = {};
        RecordTypePrototype._name = name;
        RecordTypePrototype._keys = keys3;
        RecordTypePrototype._defaultValues = defaultValues;
        for (var i4 = 0; i4 < keys3.length; i4++) {
          var propName = keys3[i4];
          indices[propName] = i4;
          if (RecordTypePrototype[propName]) {
            typeof console === "object" && console.warn && console.warn(
              "Cannot define " + recordName2(this$1) + ' with property "' + propName + '" since that property name is part of the Record API.'
            );
          } else {
            setProp2(RecordTypePrototype, propName);
          }
        }
      }
      this.__ownerID = void 0;
      this._values = List2().withMutations(function(l4) {
        l4.setSize(this$1._keys.length);
        KeyedCollection2(values3).forEach(function(v3, k3) {
          l4.set(this$1._indices[k3], v3 === this$1._defaultValues[k3] ? void 0 : v3);
        });
      });
    };
    var RecordTypePrototype = RecordType.prototype = Object.create(
      RecordPrototype2
    );
    RecordTypePrototype.constructor = RecordType;
    if (name) {
      RecordType.displayName = name;
    }
    return RecordType;
  };
  Record3.prototype.toString = function toString7() {
    var this$1 = this;
    var str = recordName2(this) + " { ";
    var keys3 = this._keys;
    var k3;
    for (var i4 = 0, l4 = keys3.length; i4 !== l4; i4++) {
      k3 = keys3[i4];
      str += (i4 ? ", " : "") + k3 + ": " + quoteString2(this$1.get(k3));
    }
    return str + " }";
  };
  Record3.prototype.equals = function equals4(other) {
    return this === other || other && this._keys === other._keys && recordSeq2(this).equals(recordSeq2(other));
  };
  Record3.prototype.hashCode = function hashCode4() {
    return recordSeq2(this).hashCode();
  };
  Record3.prototype.has = function has8(k3) {
    return this._indices.hasOwnProperty(k3);
  };
  Record3.prototype.get = function get23(k3, notSetValue) {
    if (!this.has(k3)) {
      return notSetValue;
    }
    var index = this._indices[k3];
    var value = this._values.get(index);
    return value === void 0 ? this._defaultValues[k3] : value;
  };
  Record3.prototype.set = function set6(k3, v3) {
    if (this.has(k3)) {
      var newValues = this._values.set(
        this._indices[k3],
        v3 === this._defaultValues[k3] ? void 0 : v3
      );
      if (newValues !== this._values && !this.__ownerID) {
        return makeRecord2(this, newValues);
      }
    }
    return this;
  };
  Record3.prototype.remove = function remove6(k3) {
    return this.set(k3);
  };
  Record3.prototype.clear = function clear2() {
    var newValues = this._values.clear().setSize(this._keys.length);
    return this.__ownerID ? this : makeRecord2(this, newValues);
  };
  Record3.prototype.wasAltered = function wasAltered4() {
    return this._values.wasAltered();
  };
  Record3.prototype.toSeq = function toSeq4() {
    return recordSeq2(this);
  };
  Record3.prototype.toJS = function toJS$14() {
    return toJS2(this);
  };
  Record3.prototype.entries = function entries4() {
    return this.__iterator(ITERATE_ENTRIES2);
  };
  Record3.prototype.__iterator = function __iterator2(type2, reverse5) {
    return recordSeq2(this).__iterator(type2, reverse5);
  };
  Record3.prototype.__iterate = function __iterate2(fn, reverse5) {
    return recordSeq2(this).__iterate(fn, reverse5);
  };
  Record3.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newValues = this._values.__ensureOwner(ownerID);
    if (!ownerID) {
      this.__ownerID = ownerID;
      this._values = newValues;
      return this;
    }
    return makeRecord2(this, newValues, ownerID);
  };
  Record3.isRecord = isRecord2;
  Record3.getDescriptiveName = recordName2;
  var RecordPrototype2 = Record3.prototype;
  RecordPrototype2[IS_RECORD_SYMBOL2] = true;
  RecordPrototype2[DELETE2] = RecordPrototype2.remove;
  RecordPrototype2.deleteIn = RecordPrototype2.removeIn = deleteIn2;
  RecordPrototype2.getIn = getIn$$1;
  RecordPrototype2.hasIn = CollectionPrototype2.hasIn;
  RecordPrototype2.merge = merge;
  RecordPrototype2.mergeWith = mergeWith;
  RecordPrototype2.mergeIn = mergeIn2;
  RecordPrototype2.mergeDeep = mergeDeep2;
  RecordPrototype2.mergeDeepWith = mergeDeepWith2;
  RecordPrototype2.mergeDeepIn = mergeDeepIn2;
  RecordPrototype2.setIn = setIn$$1;
  RecordPrototype2.update = update$$1;
  RecordPrototype2.updateIn = updateIn$12;
  RecordPrototype2.withMutations = withMutations2;
  RecordPrototype2.asMutable = asMutable2;
  RecordPrototype2.asImmutable = asImmutable2;
  RecordPrototype2[ITERATOR_SYMBOL2] = RecordPrototype2.entries;
  RecordPrototype2.toJSON = RecordPrototype2.toObject = CollectionPrototype2.toObject;
  RecordPrototype2.inspect = RecordPrototype2.toSource = function() {
    return this.toString();
  };
  function makeRecord2(likeRecord, values3, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._values = values3;
    record.__ownerID = ownerID;
    return record;
  }
  function recordName2(record) {
    return record.constructor.displayName || record.constructor.name || "Record";
  }
  function recordSeq2(record) {
    return keyedSeqFromValue2(record._keys.map(function(k3) {
      return [k3, record.get(k3)];
    }));
  }
  function setProp2(prototype, name) {
    try {
      Object.defineProperty(prototype, name, {
        get: function() {
          return this.get(name);
        },
        set: function(value) {
          invariant2(this.__ownerID, "Cannot set on an immutable record.");
          this.set(name, value);
        }
      });
    } catch (error) {
    }
  }
  var Repeat = function(IndexedSeq$$1) {
    function Repeat2(value, times) {
      if (!(this instanceof Repeat2)) {
        return new Repeat2(value, times);
      }
      this._value = value;
      this.size = times === void 0 ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }
    if (IndexedSeq$$1)
      Repeat2.__proto__ = IndexedSeq$$1;
    Repeat2.prototype = Object.create(IndexedSeq$$1 && IndexedSeq$$1.prototype);
    Repeat2.prototype.constructor = Repeat2;
    Repeat2.prototype.toString = function toString8() {
      if (this.size === 0) {
        return "Repeat []";
      }
      return "Repeat [ " + this._value + " " + this.size + " times ]";
    };
    Repeat2.prototype.get = function get24(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };
    Repeat2.prototype.includes = function includes5(searchValue) {
      return is2(this._value, searchValue);
    };
    Repeat2.prototype.slice = function slice7(begin, end) {
      var size = this.size;
      return wholeSlice2(begin, end, size) ? this : new Repeat2(
        this._value,
        resolveEnd2(end, size) - resolveBegin2(begin, size)
      );
    };
    Repeat2.prototype.reverse = function reverse5() {
      return this;
    };
    Repeat2.prototype.indexOf = function indexOf3(searchValue) {
      if (is2(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };
    Repeat2.prototype.lastIndexOf = function lastIndexOf3(searchValue) {
      if (is2(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };
    Repeat2.prototype.__iterate = function __iterate3(fn, reverse5) {
      var this$1 = this;
      var size = this.size;
      var i4 = 0;
      while (i4 !== size) {
        if (fn(this$1._value, reverse5 ? size - ++i4 : i4++, this$1) === false) {
          break;
        }
      }
      return i4;
    };
    Repeat2.prototype.__iterator = function __iterator3(type2, reverse5) {
      var this$1 = this;
      var size = this.size;
      var i4 = 0;
      return new Iterator3(
        function() {
          return i4 === size ? iteratorDone2() : iteratorValue2(type2, reverse5 ? size - ++i4 : i4++, this$1._value);
        }
      );
    };
    Repeat2.prototype.equals = function equals5(other) {
      return other instanceof Repeat2 ? is2(this._value, other._value) : deepEqual2(other);
    };
    return Repeat2;
  }(IndexedSeq2);
  var EMPTY_REPEAT;

  // ../umas.json
  var umas_default = { "1001": { name: ["\u30B9\u30DA\u30B7\u30E3\u30EB\u30A6\u30A3\u30FC\u30AF", "Special Week"], outfits: { "100101": "[\u30B9\u30DA\u30B7\u30E3\u30EB\u30C9\u30EA\u30FC\u30DE\u30FC]", "100102": "[\u307B\u3063\u3074\u3093\u266A\u30D3\u30BF\u30DF\u30F3\u30CF\u30FC\u30C8]", "100103": "[\u65E5\u4E4B\u672C\u4E00\u306E\u7DCF\u5927\u5C06]" } }, "1002": { name: ["\u30B5\u30A4\u30EC\u30F3\u30B9\u30B9\u30BA\u30AB", "Silence Suzuka"], outfits: { "100201": "[\u30B5\u30A4\u30EC\u30F3\u30C8\u30A4\u30CE\u30BB\u30F3\u30B9]", "100202": "[\u6CE2\u9593\u306E\u30A8\u30E1\u30E9\u30EB\u30C9]" } }, "1003": { name: ["\u30C8\u30A6\u30AB\u30A4\u30C6\u30A4\u30AA\u30FC", "Tokai Teio"], outfits: { "100301": "[\u30C8\u30C3\u30D7\u30FB\u30AA\u30D6\u30FB\u30B8\u30E7\u30A4\u30D5\u30EB]", "100302": "[\u30D3\u30E8\u30F3\u30C9\u30FB\u30B6\u30FB\u30DB\u30E9\u30A4\u30BA\u30F3]", "100303": "[\u7D2B\u96F2\u306E\u5922\u898B\u53D6\u308A]" } }, "1004": { name: ["\u30DE\u30EB\u30BC\u30F3\u30B9\u30AD\u30FC", "Maruzensky"], outfits: { "100401": "[\u30D5\u30A9\u30FC\u30DF\u30E5\u30E9\u30AA\u30D6\u30EB\u30FC\u30B8\u30E5]", "100402": "[\u3076\u3063\u3068\u3073\u2606\u3055\u307E\u30FC\u30CA\u30A4\u30C8]", "100403": "[\u795D\u3072\u5BFF\u3050\u795E\u901F\u5929\u5973]" } }, "1005": { name: ["\u30D5\u30B8\u30AD\u30BB\u30AD", "Fuji Kiseki"], outfits: { "100501": "[\u30B7\u30E5\u30FC\u30C6\u30A3\u30F3\u30B9\u30BF\u30A1\u30FB\u30EB\u30F4\u30E5]", "100502": "[\u30B7\u30E5\u30AF\u30BB\u30FB\u30A8\u30C8\u30EF\u30FC\u30EC]" } }, "1006": { name: ["\u30AA\u30B0\u30EA\u30AD\u30E3\u30C3\u30D7", "Oguri Cap"], outfits: { "100601": "[\u30B9\u30BF\u30FC\u30E9\u30A4\u30C8\u30D3\u30FC\u30C8]", "100602": "[\u30AD\u30BB\u30AD\u306E\u767D\u661F]" } }, "1007": { name: ["\u30B4\u30FC\u30EB\u30C9\u30B7\u30C3\u30D7", "Gold Ship"], outfits: { "100701": "[\u30EC\u30C3\u30C9\u30B9\u30C8\u30E9\u30A4\u30D5]", "100702": "[RUN\uFF01\u4E71\uFF01\u30E9\u30F3\u30C1\u30E3\u30FC\uFF01\uFF01]", "100703": "[La mode 564]" } }, "1008": { name: ["\u30A6\u30AA\u30C3\u30AB", "Vodka"], outfits: { "100801": "[\u30EF\u30A4\u30EB\u30C9\u30C8\u30C3\u30D7\u30AE\u30A2]", "100802": "[\u4E0D\u51CD\u306E\u30A2\u30AF\u30A2\u30FB\u30A6\u30A3\u30BF\u30A8]" } }, "1009": { name: ["\u30C0\u30A4\u30EF\u30B9\u30AB\u30FC\u30EC\u30C3\u30C8", "Daiwa Scarlet"], outfits: { "100901": "[\u30C8\u30C3\u30D7\u30FB\u30AA\u30D6\u30FB\u30D6\u30EB\u30FC]", "100902": "[\u7DCB\u8272\u306E\u30CB\u30E5\u30A4\u30FB\u30A8\u30C8\u30EF\u30EC]" } }, "1010": { name: ["\u30BF\u30A4\u30AD\u30B7\u30E3\u30C8\u30EB", "Taiki Shuttle"], outfits: { "101001": "[\u30EF\u30A4\u30EB\u30C9\u30FB\u30D5\u30ED\u30F3\u30C6\u30A3\u30A2]", "101002": "[Bubblegum\u2606Memories]" } }, "1011": { name: ["\u30B0\u30E9\u30B9\u30EF\u30F3\u30C0\u30FC", "Grass Wonder"], outfits: { "101101": "[\u5CA9\u7A7F\u3064\u9752]", "101102": "[\u30BB\u30A4\u30F3\u30C8\u30B8\u30A7\u30FC\u30C9\u30FB\u30D2\u30FC\u30E9\u30FC]", "101103": "[\u84BC\u708E\u306E\u8A89]" } }, "1012": { name: ["\u30D2\u30B7\u30A2\u30DE\u30BE\u30F3", "Hishi Amazon"], outfits: { "101201": "[\u30A2\u30DE\u30BE\u30CD\u30B9\u30FB\u30E9\u30D4\u30B9]", "101202": "[Hungry Veil]" } }, "1013": { name: ["\u30E1\u30B8\u30ED\u30DE\u30C3\u30AF\u30A4\u30FC\u30F3", "Mejiro McQueen"], outfits: { "101301": "[\u30A8\u30EC\u30AC\u30F3\u30B9\u30FB\u30E9\u30A4\u30F3]", "101302": "[\u30A8\u30F3\u30C9\u30FB\u30AA\u30D6\u30FB\u30B9\u30AB\u30A4]", "101303": "[\u3055\u3056\u6CE2\u30D5\u30A7\u30A2\u30EC\u30C7\u30A3]" } }, "1014": { name: ["\u30A8\u30EB\u30B3\u30F3\u30C9\u30EB\u30D1\u30B5\u30FC", "El Condor Pasa"], outfits: { "101401": "[\u30A8\u30EB\u2606N\xFAmero 1]", "101402": "[\u30AF\u30AF\u30EB\u30AB\u30F3\u30FB\u30E2\u30F3\u30AF]" } }, "1015": { name: ["\u30C6\u30A4\u30A8\u30E0\u30AA\u30DA\u30E9\u30AA\u30FC", "TM Opera O"], outfits: { "101501": "[\u30AA\u30FC\u30FB\u30BD\u30EC\u30FB\u30B9\u30FC\u30AA\uFF01]", "101502": "[\u521D\u6674\u30FB\u9752\u304D\u7D62\u721B]" } }, "1016": { name: ["\u30CA\u30EA\u30BF\u30D6\u30E9\u30A4\u30A2\u30F3", "Narita Brian"], outfits: { "101601": "[Maverick]", "101602": "[\u9913\u72FC]" } }, "1017": { name: ["\u30B7\u30F3\u30DC\u30EA\u30EB\u30C9\u30EB\u30D5", "Symboli Rudolf"], outfits: { "101701": "[\u30ED\u30FC\u30C9\u30FB\u30AA\u30D6\u30FB\u30A8\u30F3\u30DA\u30E9\u30FC]", "101702": "[\u7693\u6708\u306E\u5F13\u53D6\u308A]" } }, "1018": { name: ["\u30A8\u30A2\u30B0\u30EB\u30FC\u30F4", "Air Groove"], outfits: { "101801": "[\u30A8\u30F3\u30D7\u30EC\u30B9\u30ED\u30FC\u30C9]", "101802": "[\u30AF\u30A8\u30EB\u30AF\u30B9\u30FB\u30AD\u30A6\u30A3\u30FC\u30EA\u30B9]" } }, "1019": { name: ["\u30A2\u30B0\u30CD\u30B9\u30C7\u30B8\u30BF\u30EB", "Agnes Digital"], outfits: { "101901": "[\u8D85\u7279\u6025\uFF01\u30D5\u30EB\u30AB\u30E9\u30FC\u7279\u6B8APP]", "101902": "[\u611B\u9E97\u2661\u30AD\u30E7\u30F3\u30B7\u30FC]" } }, "1020": { name: ["\u30BB\u30A4\u30A6\u30F3\u30B9\u30AB\u30A4", "Seiun Sky"], outfits: { "102001": "[\u3042\u304A\u3050\u3082\u30B5\u30DF\u30F3\u30B0]", "102002": "[\u30BD\u30EF\u30EC\u30FB\u30C9\u30FB\u30B7\u30E3\u30C8\u30F3]" } }, "1021": { name: ["\u30BF\u30DE\u30E2\u30AF\u30ED\u30B9", "Tamamo Cross"], outfits: { "102101": "[\u75BE\u98A8\u8FC5\u96F7]", "102102": "[\u731B\u30EB\u9CF4\u795E]" } }, "1022": { name: ["\u30D5\u30A1\u30A4\u30F3\u30E2\u30FC\u30B7\u30E7\u30F3", "Fine Motion"], outfits: { "102201": "[Noble Seamair]", "102202": "[Titania]" } }, "1023": { name: ["\u30D3\u30EF\u30CF\u30E4\u30D2\u30C7", "Biwa Hayahide"], outfits: { "102301": "[pf.Victory formula...]", "102302": "[\u30CE\u30A8\u30EB\u30FC\u30B8\u30E5\u30FB\u30AD\u30E3\u30ED\u30EB]", "102303": "[Engineered Victory]" } }, "1024": { name: ["\u30DE\u30E4\u30CE\u30C8\u30C3\u30D7\u30AC\u30F3", "Mayano Top Gun"], outfits: { "102401": "[\u3059\u304F\u3089\u3093\u3076\u308B\u2606\u30BE\u30FC\u30F3]", "102402": "[\u30B5\u30F3\u30E9\u30A4\u30C8\u30FB\u30D6\u30FC\u30B1]", "102403": "[\u308D\u3063\u304D\u3093\u2606MewMeow]" } }, "1025": { name: ["\u30DE\u30F3\u30CF\u30C3\u30BF\u30F3\u30AB\u30D5\u30A7", "Manhattan Cafe"], outfits: { "102501": "[Creeping Black]", "102502": "[\u67F3\u7DD1\u5C0F\u591C]" } }, "1026": { name: ["\u30DF\u30DB\u30CE\u30D6\u30EB\u30DC\u30F3", "Mihono Bourbon"], outfits: { "102601": "[MB-19890425]", "102602": "[CODE\uFF1A\u30B0\u30E9\u30B5\u30FC\u30B8\u30E5]" } }, "1027": { name: ["\u30E1\u30B8\u30ED\u30E9\u30A4\u30A2\u30F3", "Mejiro Ryan"], outfits: { "102701": "[\u30B9\u30C8\u30EC\u30FC\u30C8\u30FB\u30E9\u30A4\u30F3]", "102702": "[\u30DE\u30FC\u30AC\u30EC\u30C3\u30C8\u30FB\u30E9\u30C3\u30C6]" } }, "1028": { name: ["\u30D2\u30B7\u30A2\u30B1\u30DC\u30CE", "Hishi Akebono"], outfits: { "102801": "[\u30DC\u30FC\u30CE\u2606\u30A2\u30E9\u30E2\u30FC\u30C0]" } }, "1029": { name: ["\u30E6\u30AD\u30CE\u30D3\u30B8\u30F3", "Yukino Bijin"], outfits: { "102901": "[\u3081\u3093\u3053\u3044\u3081\u3093\u3053\u3044\u3080\u3064\u306E\u306F\u306A]", "102902": "[\u8336\u306E\u5B50\u96EA\u3093\u5B50]" } }, "1030": { name: ["\u30E9\u30A4\u30B9\u30B7\u30E3\u30EF\u30FC", "Rice Shower"], outfits: { "103001": "[\u30ED\u30FC\u30BC\u30B9\u30C9\u30EA\u30FC\u30E0]", "103002": "[Make up Vampire!]", "103003": "[Yummy Dreamy Fairy]" } }, "1031": { name: ["\u30A2\u30A4\u30CD\u30B9\u30D5\u30A6\u30B8\u30F3", "Ines Fujin"], outfits: { "103101": "[\u30AA\u30FC\u30EB\u30BF\u30A4\u30E0\u30FB\u30D5\u30A3\u30FC\u30D0\u30FC]", "103102": "[MELTY GIFT]" } }, "1032": { name: ["\u30A2\u30B0\u30CD\u30B9\u30BF\u30AD\u30AA\u30F3", "Agnes Tachyon"], outfits: { "103201": "[tach-nology]", "103202": "[Lunatic Lab]", "103203": "[\u03A3 Experiment]" } }, "1033": { name: ["\u30A2\u30C9\u30DE\u30A4\u30E4\u30D9\u30AC", "Admire Vega"], outfits: { "103301": "[Starry Nocturne]", "103302": "[Glacialis Vega]" } }, "1034": { name: ["\u30A4\u30CA\u30EA\u30EF\u30F3", "Inari One"], outfits: { "103401": "[\u7A32\u8377\u6240\u7E01\u6C5F\u6238\u7D2B]", "103402": "[\u5922\u30CE\u91D1\u539F]" } }, "1035": { name: ["\u30A6\u30A4\u30CB\u30F3\u30B0\u30C1\u30B1\u30C3\u30C8", "Winning Ticket"], outfits: { "103501": "[Go To Winning!]", "103502": "[Dream Deliverer]", "103503": "[Glorious Coat]" } }, "1036": { name: ["\u30A8\u30A2\u30B7\u30E3\u30AB\u30FC\u30EB", "Air Shakur"], outfits: { "103601": "[unsigned]", "103602": "[Belphegor's Prime]" } }, "1037": { name: ["\u30A8\u30A4\u30B7\u30F3\u30D5\u30E9\u30C3\u30B7\u30E5", "Eishin Flash"], outfits: { "103701": "[Meisterschaft]", "103702": "[\u30B3\u30EC\u30AF\u30C8\u30FB\u30B7\u30E7\u30B3\u30E9\u30C6\u30A3\u30A8]", "103703": "[Reines Pl\xE4tschern]" } }, "1038": { name: ["\u30AB\u30EC\u30F3\u30C1\u30E3\u30F3", "Curren Chan"], outfits: { "103801": "[\u30D5\u30A3\u30FC\u30E6\u30FB\u30A8\u30AF\u30EC\u30FC\u30EB]", "103802": "[\u6714\u6708\u306E\u30DE\u30FB\u30B7\u30A7\u30EA]" } }, "1039": { name: ["\u30AB\u30EF\u30AB\u30DF\u30D7\u30EA\u30F3\u30BB\u30B9", "Kawakami Princess"], outfits: { "103901": "[\u30D7\u30EA\u30F3\u30BB\u30B9\u30FB\u30AA\u30D6\u30FB\u30D4\u30F3\u30AF]", "103902": "[\u6C34\u5E72\u64AB\u5B50]" } }, "1040": { name: ["\u30B4\u30FC\u30EB\u30C9\u30B7\u30C1\u30FC", "Gold City"], outfits: { "104001": "[\u30AA\u30FC\u30BB\u30F3\u30C6\u30A3\u30C3\u30AF/1928]", "104002": "[\u79CB\u685C\u30C0\u30F3\u30C4\u30A1\u30C8\u30EA\u30FC\u30C1\u30A7]", "104003": "[Boho Flare]" } }, "1041": { name: ["\u30B5\u30AF\u30E9\u30D0\u30AF\u30B7\u30F3\u30AA\u30FC", "Sakura Bakushin O"], outfits: { "104101": "[\u30B5\u30AF\u30E9\u3001\u3059\u3059\u3081\uFF01]", "104102": "[\u30EC\u30C3\u30C9\u30DB\u30C3\u30C8\u2606\u30EA\u30FC\u30C0\u30FC]" } }, "1042": { name: ["\u30B7\u30FC\u30AD\u30F3\u30B0\u30B6\u30D1\u30FC\u30EB", "Seeking the Pearl"], outfits: { "104201": "[Rocket\u2606Star]", "104202": "[Be\u266AWitched]" } }, "1043": { name: ["\u30B7\u30F3\u30B3\u30A6\u30A6\u30A4\u30F3\u30C7\u30A3", "Shinko Windy"], outfits: { "104301": "[Wicked Punk]" } }, "1044": { name: ["\u30B9\u30A4\u30FC\u30D7\u30C8\u30A6\u30B7\u30E7\u30A6", "Sweep Tosho"], outfits: { "104401": "[\u30D7\u30E9\u30BF\u30CA\u30B9\u30FB\u30A6\u30A3\u30C3\u30C1]", "104402": "[\u30EA\u30A2\u30E9\u30A4\u30BA\u30FB\u30EB\u30FC\u30F3]" } }, "1045": { name: ["\u30B9\u30FC\u30D1\u30FC\u30AF\u30EA\u30FC\u30AF", "Super Creek"], outfits: { "104501": "[\u30DE\u30FC\u30DE\u30EA\u30F3\u30B0\u30B9\u30C8\u30EA\u30FC\u30E0]", "104502": "[\u30B7\u30D5\u30A9\u30F3\u30EA\u30DC\u30F3\u30DE\u30DF\u30FC]", "104503": "[\u6148\u96E8\u83EF\u5F71]" } }, "1046": { name: ["\u30B9\u30DE\u30FC\u30C8\u30D5\u30A1\u30EB\u30B3\u30F3", "Smart Falcon"], outfits: { "104601": "[\u3042\u3076\u305D\u308A\u3085\u30FC\u3068\u2606LOVE]", "104602": "[\u9EC4\u660F\u30C8\u30E9\u30A4\u30A2\u30F3\u30D5]", "104603": "[\u30EB\u30DF\u30CA\u30B9\u2606\u30C8\u30EF\u30E9\u30FC]" } }, "1047": { name: ["\u30BC\u30F3\u30CE\u30ED\u30D6\u30ED\u30A4", "Zenno Rob Roy"], outfits: { "104701": "[Heroic Author]", "104702": "[Inlaid Stories]" } }, "1048": { name: ["\u30C8\u30FC\u30BB\u30F3\u30B8\u30E7\u30FC\u30C0\u30F3", "Tosen Jordan"], outfits: { "104801": "[\u30DD\u30C3\u30D7\u30B9\u2606\u30B8\u30E7\u30FC\u30AB\u30FC]", "104802": "[Aurore\u2606Vacances]" } }, "1049": { name: ["\u30CA\u30AB\u30E4\u30DE\u30D5\u30A7\u30B9\u30BF", "Nakayama Festa"], outfits: { "104901": "[\u6B7B\u4E2D\u6C42\u6D3B]" } }, "1050": { name: ["\u30CA\u30EA\u30BF\u30BF\u30A4\u30B7\u30F3", "Narita Taishin"], outfits: { "105001": "[Nevertheless]", "105002": "[\u30C7\u30A3\u30D5\u30A1\u30EC\u30F3\u30B9\u30FB\u30A8\u30F3\u30B8\u30CB\u30A2]", "105003": "[\u8FF7\u5149\u30AA\u30FC\u30F4\u30A1\u30E9\u30A4\u30C9]" } }, "1051": { name: ["\u30CB\u30B7\u30CE\u30D5\u30E9\u30EF\u30FC", "Nishino Flower"], outfits: { "105101": "[\u30C6\u30A3\u30A2\u30FC\u30C9\u30FB\u30DA\u30BF\u30EB]", "105102": "[Sweet Juneberry]" } }, "1052": { name: ["\u30CF\u30EB\u30A6\u30E9\u30E9", "Haru Urara"], outfits: { "105201": "[\u3046\u3089\u3089\u3093\u4E00\u7B49\u8CDE\u266A]", "105202": "[\u521D\u3046\u3089\u3089\u266A\u3055\u304F\u3055\u304F\u3089]" } }, "1053": { name: ["\u30D0\u30F3\u30D6\u30FC\u30E1\u30E2\u30EA\u30FC", "Bamboo Memory"], outfits: { "105301": "[\u9ED2\u9244\u306E\u5927\u5FD7]", "105302": "[Ultra\u2606Marine]" } }, "1054": { name: ["\u30D3\u30B3\u30FC\u30DA\u30AC\u30B5\u30B9", "Biko Pegasus"], outfits: { "105401": "[\u75BE\u98A8\u30DA\u30AC\u30B5\u30B9\u30FB\u96F6\u5F0F]" } }, "1055": { name: ["\u30DE\u30FC\u30D9\u30E9\u30B9\u30B5\u30F3\u30C7\u30FC", "Marvelous Sunday"], outfits: { "105501": "[\u2606\u30AD\u30E9\u2605\u30C9\u30AD\u2606\u30EF\u30AF\u221E\u30DE\u30D9\u221E]" } }, "1056": { name: ["\u30DE\u30C1\u30AB\u30CD\u30D5\u30AF\u30AD\u30BF\u30EB", "Matikanefukukitaru"], outfits: { "105601": "[\u904B\u6C17\u4E0A\u6607\u2606\u5E78\u798F\u4E07\u6765]", "105602": "[\u5409\u5146\u30FB\u521D\u3042\u3089\u3057]" } }, "1057": { name: ["\u30DF\u30B9\u30BF\u30FC\u30B7\u30FC\u30D3\u30FC", "Mr. C.B."], outfits: { "105701": "[Clear Bliss]", "105702": "[\u7D62\u721B\u82B1\u9053\u6B4C\u821E\u304F\u541B]" } }, "1058": { name: ["\u30E1\u30A4\u30B7\u30E7\u30A6\u30C9\u30C8\u30A6", "Meisho Doto"], outfits: { "105801": "[\u30D6\u30EB\u30FC/\u30EC\u30A4\u30B8\u30F3\u30B0]", "105802": "[Dot-o'-Lantern]" } }, "1059": { name: ["\u30E1\u30B8\u30ED\u30C9\u30FC\u30D9\u30EB", "Mejiro Dober"], outfits: { "105901": "[\u30C4\u30A4\u30B9\u30C6\u30C3\u30C9\u30FB\u30E9\u30A4\u30F3]", "105902": "[\u30D0\u30AB\u30F3\u30B9\u30FB\u30B5\u30D5\u30A3\u30FC\u30EB]" } }, "1060": { name: ["\u30CA\u30A4\u30B9\u30CD\u30A4\u30C1\u30E3", "Nice Nature"], outfits: { "106001": "[\u30DD\u30A4\u30F3\u30BB\u30C1\u30A2\u30FB\u30EA\u30DC\u30F3]", "106002": "[RUN\uFF06WIN]", "106003": "[\u30CD\u30AC\u30A4\u30CE\u30AB\u30B5\u30CD]" } }, "1061": { name: ["\u30AD\u30F3\u30B0\u30D8\u30A4\u30ED\u30FC", "King Halo"], outfits: { "106101": "[\u30AD\u30F3\u30B0\u30FB\u30AA\u30D6\u30FB\u30A8\u30E1\u30E9\u30EB\u30C9]", "106102": "[\u767D\u304F\u6C17\u9AD8\u304D\u6FC0\u52B1\u306E\u88C5]", "106103": "[Evergreen Identity]" } }, "1062": { name: ["\u30DE\u30C1\u30AB\u30CD\u30BF\u30F3\u30DB\u30A4\u30B6", "Matikanetannhauser"], outfits: { "106201": "[\u3071\u3093\u3071\u304B\u30C6\u30A3\u30EB\u30C8\u30C3\u30C8]", "106202": "[\u30D6\u30EB\u30FC\u30FB\u30BF\u30FC\u30D3\u30E5\u30E9\u30F3\u30B9]" } }, "1063": { name: ["\u30A4\u30AF\u30CE\u30C7\u30A3\u30AF\u30BF\u30B9", "Ikuno Dictus"], outfits: { "106301": "[Mantle of Steel]" } }, "1064": { name: ["\u30E1\u30B8\u30ED\u30D1\u30FC\u30DE\u30FC", "Mejiro Palmer"], outfits: { "106401": "[Line Breakthrough]", "106402": "[\u8D64\u5FC3\u306E\u30C8\u30CA\u30AB\u30A4\u3055\u3093]" } }, "1065": { name: ["\u30C0\u30A4\u30BF\u30AF\u30D8\u30EA\u30AA\u30B9", "Daitaku Helios"], outfits: { "106501": "[Fun\u2606Fun\u2606\u3071\u308A\u306A\u3044]", "106502": "[Joyful Jamboree!]" } }, "1066": { name: ["\u30C4\u30A4\u30F3\u30BF\u30FC\u30DC", "Twin Turbo"], outfits: { "106601": "[\u7206\u8D70\uFF01\u30BF\u30FC\u30DC\u30A8\u30F3\u30B8\u30F3]" } }, "1067": { name: ["\u30B5\u30C8\u30CE\u30C0\u30A4\u30E4\u30E2\u30F3\u30C9", "Satono Diamond"], outfits: { "106701": "[Natural Brilliance]", "106702": "[\u82B1\u5F62\u30FB\u5F25\u6804\u4E4B\u7FE0]", "106703": "[\u30B7\u30E5\u30F4\u30A1\u30EA\u30A8\u30FB\u30D6\u30EB]" } }, "1068": { name: ["\u30AD\u30BF\u30B5\u30F3\u30D6\u30E9\u30C3\u30AF", "Kitasan Black"], outfits: { "106801": "[\u9326\u4E0A\u30FB\u5927\u5224\u5FA1\u8F3F]", "106802": "[\u771F\u6253\u30FB\u6176\u9DB4\u4E4B\u5FD7]", "106803": "[\u7D50\u9858\u306E\u3057\u307E\u3044\u83EF]" } }, "1069": { name: ["\u30B5\u30AF\u30E9\u30C1\u30E8\u30CE\u30AA\u30FC", "Sakura Chiyono O"], outfits: { "106901": "[\u65E5\u4E0B\u958B\u5C71\u30FB\u82B1\u3042\u304B\u308A]", "106902": "[Fleur Enneig\xE9e]" } }, "1070": { name: ["\u30B7\u30EA\u30A6\u30B9\u30B7\u30F3\u30DC\u30EA", "Sirius Symboli"], outfits: { "107001": "[F\xE9roce]", "107002": "[Louve stellaire]" } }, "1071": { name: ["\u30E1\u30B8\u30ED\u30A2\u30EB\u30C0\u30F3", "Mejiro Ardan"], outfits: { "107101": "[\u30AF\u30EA\u30CE\u30AF\u30ED\u30A2\u30FB\u30E9\u30A4\u30F3]", "107102": "[Neige \xC9meraude]" } }, "1072": { name: ["\u30E4\u30A8\u30CE\u30E0\u30C6\u30AD", "Yaeno Muteki"], outfits: { "107201": "[\u56DB\u767D\u6D41\u661F\u306E\u8972]", "107202": "[\u9ED2\u5C06Zen]" } }, "1073": { name: ["\u30C4\u30EB\u30DE\u30EB\u30C4\u30E8\u30B7", "Tsurumaru Tsuyoshi"], outfits: { "107301": "[\u5FD7\u3001\u9AD8\u3057\u3001\u5F37\u3057\uFF01]" } }, "1074": { name: ["\u30E1\u30B8\u30ED\u30D6\u30E9\u30A4\u30C8", "Mejiro Bright"], outfits: { "107401": "[\u30D6\u30EA\u30E5\u30CB\u30B5\u30FC\u30B8\u30E5\u30FB\u30E9\u30A4\u30F3]", "107402": "[\u6E05\u3089\u306B\u661F\u6F84\u3080\u30B9\u30CE\u30FC\u30ED\u30EA\u30A3\u30BF]" } }, "1075": { name: ["\u30C7\u30A2\u30EA\u30F3\u30B0\u30BF\u30AF\u30C8", "Daring Tact"], outfits: {} }, "1076": { name: ["\u30B5\u30AF\u30E9\u30ED\u30FC\u30EC\u30EB", "Sakura Laurel"], outfits: { "107601": "[Saisir le r\xEAve]" } }, "1077": { name: ["\u30CA\u30EA\u30BF\u30C8\u30C3\u30D7\u30ED\u30FC\u30C9", "Narita Top Road"], outfits: { "107701": "[The Proud Road]", "107702": "[Celestial Road]" } }, "1078": { name: ["\u30E4\u30DE\u30CB\u30F3\u30BC\u30D5\u30A1\u30FC", "Yamanin Zephyr"], outfits: { "107801": "[Fluttertail Spirit]", "107802": "[Sugary Wind]" } }, "1079": { name: ["\u30D5\u30EA\u30AA\u30FC\u30BD", "Furioso"], outfits: { "107901": "[\u8863\u9326\u9084\u90F7\u306E\u745E\u661F]" } }, "1080": { name: ["\u30C8\u30E9\u30F3\u30BB\u30F3\u30C9", "Transcend"], outfits: { "108001": "[ZOKU-ZOKU GIZMO]" } }, "1081": { name: ["\u30A8\u30B9\u30DD\u30EF\u30FC\u30EB\u30B7\u30C1\u30FC", "Espoir City"], outfits: {} }, "1082": { name: ["\u30CE\u30FC\u30B9\u30D5\u30E9\u30A4\u30C8", "North Flight"], outfits: { "108201": "[Looking Fly!]" } }, "1083": { name: ["\u30B7\u30F3\u30DC\u30EA\u30AF\u30EA\u30B9\u30A8\u30B9", "Symboli Kris S"], outfits: { "108301": "[Onyx Soldier]", "108302": "[Jetblack Automaton]" } }, "1084": { name: ["\u30BF\u30CB\u30CE\u30AE\u30E0\u30EC\u30C3\u30C8", "Tanino Gimlet"], outfits: { "108401": "[\u8EAB\u306B\u7E8F\u3046\u30B1\u30E9\u30F4\u30CE\u30B9]", "108402": "[With a Twist]" } }, "1085": { name: ["\u30C0\u30A4\u30A4\u30C1\u30EB\u30D3\u30FC", "Daiichi Ruby"], outfits: { "108501": "[\u83EF\u9E97\u306A\u308B\u7D05\u7389]", "108502": "[Flowing Blue]" } }, "1086": { name: ["\u30E1\u30B8\u30ED\u30E9\u30E2\u30FC\u30CC", "Mejiro Ramonu"], outfits: { "108601": "[\u30AA\u30CB\u30AD\u30B9\u30FB\u30E9\u30A4\u30F3]", "108602": "[Untouchable Eden]" } }, "1087": { name: ["\u30A2\u30B9\u30C8\u30F3\u30DE\u30FC\u30C1\u30E3\u30F3", "Aston Machan"], outfits: { "108701": "[Flare]", "108702": "[\u6EB6\u3051\u306A\u3044\u7802\u7CD6\u83D3\u5B50]" } }, "1088": { name: ["\u30B5\u30C8\u30CE\u30AF\u30E9\u30A6\u30F3", "Satono Crown"], outfits: { "108801": "[\u9ED2\u7FE0\u5343\u91CC\u884C]" } }, "1089": { name: ["\u30B7\u30E5\u30F4\u30A1\u30EB\u30B0\u30E9\u30F3", "Cheval Grand"], outfits: { "108901": "[Grand itin\xE9raire]" } }, "1090": { name: ["\u30F4\u30A3\u30EB\u30B7\u30FC\u30CA", "Verxina"], outfits: { "109001": "[Le beau sommet]" } }, "1091": { name: ["\u30F4\u30A3\u30D6\u30ED\u30B9", "Vivlos"], outfits: { "109101": "[Voyage \xE9tincelant]" } }, "1092": { name: ["\u30C0\u30F3\u30C4\u30D5\u30EC\u30FC\u30E0", "Dantsu Flame"], outfits: {} }, "1093": { name: ["\u30B1\u30A4\u30A8\u30B9\u30DF\u30E9\u30AF\u30EB", "K.S.Miracle"], outfits: { "109301": "[Prism]" } }, "1094": { name: ["\u30B8\u30E3\u30F3\u30B0\u30EB\u30DD\u30B1\u30C3\u30C8", "Jungle Pocket"], outfits: { "109401": "[\u738B\u8005\u306E\u558A\u58F0]" } }, "1095": { name: ["\u30D3\u30EA\u30FC\u30F4", "Believe"], outfits: {} }, "1096": { name: ["\u30CE\u30FC\u30EA\u30FC\u30BA\u30F3", "No Reason"], outfits: { "109601": "[\u7D05\u8272\u5857\u65E9\u99C6\u5177\u8DB3]" } }, "1097": { name: ["\u30B9\u30C6\u30A3\u30EB\u30A4\u30F3\u30E9\u30D6", "Still in Love"], outfits: {} }, "1098": { name: ["\u30B3\u30D1\u30CE\u30EA\u30C3\u30AD\u30FC", "Copano Rickey"], outfits: { "109801": "[\u9670\u967D\u516B\u5366\u2606\u958B\u904B\u8863]", "109802": "[\u5149\u5F69\u9678\u96E2\u2606\u62DB\u798F\u8863]" } }, "1099": { name: ["\u30DB\u30C3\u30B3\u30FC\u30BF\u30EB\u30DE\u30A8", "Hokko Tarumae"], outfits: { "109901": "[\u30B9\u30BF\u30FC\u30FB\u30E9\u30A4\u30C8\u30FB\u30B7\u30C3\u30D7]", "109902": "[\u30D1\u30B9\u30C6\u30EB\u30DE\u30EA\u30F3\u30FB\u30ED\u30B3\u30C9\u30EB]" } }, "1100": { name: ["\u30EF\u30F3\u30C0\u30FC\u30A2\u30AD\u30E5\u30FC\u30C8", "Wonder Acute"], outfits: { "110001": "[Butterfly Sting]" } }, "1102": { name: ["\u30B5\u30A6\u30F3\u30BA\u30AA\u30D6\u30A2\u30FC\u30B9", "Sounds of Earth"], outfits: { "110201": "[\u30EA\u30C8\u30E2\u30FB\u30C7\u30C3\u30E9\u30FB\u30C6\u30C3\u30E9]" } }, "1103": { name: ["\u30ED\u30A4\u30B9\u30A2\u30F3\u30C9\u30ED\u30A4\u30B9", "Royce and Royce"], outfits: {} }, "1104": { name: ["\u30AB\u30C4\u30E9\u30AE\u30A8\u30FC\u30B9", "Katsuragi Ace"], outfits: { "110401": "[\u767B\u7ADC\u4E4B\u9802]", "110402": "[\u96C5\u53F7\u30FB\u58A8\u9F8D]" } }, "1105": { name: ["\u30CD\u30AA\u30E6\u30CB\u30F4\u30A1\u30FC\u30B9", "Neo Universe"], outfits: { "110501": "[Universe-Naut]", "110502": "[Like \u201CZEER\u201D]" } }, "1106": { name: ["\u30D2\u30B7\u30DF\u30E9\u30AF\u30EB", "Hishi Miracle"], outfits: { "110601": "[\u307F\u3089\u304F\u308B\u3081\u30FC\u304F\u3042\u3063\u3077\uFF01]" } }, "1107": { name: ["\u30BF\u30C3\u30D7\u30C0\u30F3\u30B9\u30B7\u30C1\u30FC", "Tap Dance City"], outfits: { "110701": "[GLITTER!]", "110702": "[Tap! Tap! Tap!]" } }, "1108": { name: ["\u30C9\u30A5\u30E9\u30E1\u30F3\u30C6", "Duramente"], outfits: { "110801": "[Red in Black]" } }, "1109": { name: ["\u30E9\u30A4\u30F3\u30AF\u30E9\u30D5\u30C8", "Rhein Kraft"], outfits: { "110901": "[Dream Successor]" } }, "1110": { name: ["\u30B7\u30FC\u30B6\u30EA\u30AA", "Cesario"], outfits: { "111001": "[Future Weaver]", "111002": "[Twinbell Queen]" } }, "1111": { name: ["\u30A8\u30A2\u30E1\u30B5\u30A4\u30A2", "Air Messiah"], outfits: { "111101": "[Inherited Hope]" } }, "1112": { name: ["\u30C7\u30A2\u30EA\u30F3\u30B0\u30CF\u30FC\u30C8", "Daring Heart"], outfits: {} }, "1113": { name: ["\u30D5\u30B5\u30A4\u30C1\u30D1\u30F3\u30C9\u30E9", "Fusaichi Pandora"], outfits: {} }, "1114": { name: ["\u30D6\u30A8\u30CA\u30D3\u30B9\u30BF", "Buena Vista"], outfits: {} }, "1115": { name: ["\u30AA\u30EB\u30D5\u30A7\u30FC\u30F4\u30EB", "Orfevre"], outfits: { "111501": "[\u7DCF\u652C]" } }, "1116": { name: ["\u30B8\u30A7\u30F3\u30C6\u30A3\u30EB\u30C9\u30F3\u30CA", "Gentildonna"], outfits: { "111601": "[Regina dei fiori]" } }, "1117": { name: ["\u30A6\u30A4\u30F3\u30D0\u30EA\u30A2\u30B7\u30AA\u30F3", "Win Variation"], outfits: { "111701": "[\u30C9\u30E9\u30DE\u30C6\u30A3\u30C3\u30AF\u30FB\u30C1\u30E5\u30C1\u30E5]" } }, "1119": { name: ["\u30C9\u30EA\u30FC\u30E0\u30B8\u30E3\u30FC\u30CB\u30FC", "Dream Journey"], outfits: { "111901": "[\u5922\u8DEF\u306E\u3088\u3059\u304C]" } }, "1120": { name: ["\u30AB\u30EB\u30B9\u30C8\u30F3\u30E9\u30A4\u30C8\u30AA", "Calstone Light O"], outfits: { "112001": "[\u771F\u5B9F\u4E00\u8DEF]" } }, "1121": { name: ["\u30C7\u30E5\u30E9\u30F3\u30C0\u30EB", "Durandal"], outfits: { "112101": "[Chevalier fid\xE8le]" } }, "1124": { name: ["\u30D0\u30D6\u30EB\u30AC\u30E0\u30D5\u30A7\u30ED\u30FC", "Bubble Gum Fellow"], outfits: { "112401": "[POPPING!]" } }, "1127": { name: ["\u30D5\u30A7\u30CE\u30FC\u30E1\u30CE", "Fenomeno"], outfits: { "112701": "[\u7FA9\u5FC3\u306E\u9ED2\u7114]" } }, "1128": { name: ["\u30D6\u30E9\u30B9\u30C8\u30EF\u30F3\u30D4\u30FC\u30B9", "Blast Onepiece"], outfits: {} }, "1129": { name: ["\u30A2\u30FC\u30E2\u30F3\u30C9\u30A2\u30A4", "Almond Eye"], outfits: {} }, "1130": { name: ["\u30E9\u30C3\u30AD\u30FC\u30E9\u30A4\u30E9\u30C3\u30AF", "Lucky Lilac"], outfits: {} }, "1131": { name: ["\u30B0\u30E9\u30F3\u30A2\u30EC\u30B0\u30EA\u30A2", "Gran Alegria"], outfits: { "113101": "[\u3059\u307E\u3044\u308B\u30FB\u307E\u3044\u30FB\u3046\u3047\u3044\uFF01]" } }, "1132": { name: ["\u30E9\u30F4\u30BA\u30AA\u30F3\u30EA\u30FC\u30E6\u30FC", "Loves Only You"], outfits: { "113201": "[9927 Wishes]" } }, "1133": { name: ["\u30AF\u30ED\u30CE\u30B8\u30A7\u30CD\u30B7\u30B9", "Chrono Genesis"], outfits: { "113301": "[\u9678\u96E2\u306E\u7DE8\u7E82\u8005]" } }, "1134": { name: ["\u30AB\u30EC\u30F3\u30D6\u30FC\u30B1\u30C9\u30FC\u30EB", "Curren Bouquetd'or"], outfits: {} } };

  // ../icons.json
  var icons_default = { "1001": "/uma-tools/icons/chara/chr_icon_1001.png", "100101": "/uma-tools/icons/chara/trained_chr_icon_1001_100101_02.png", "100102": "/uma-tools/icons/chara/trained_chr_icon_1001_100130_02.png", "100103": "/uma-tools/icons/chara/trained_chr_icon_1001_100102_02.png", "1002": "/uma-tools/icons/chara/chr_icon_1002.png", "100201": "/uma-tools/icons/chara/trained_chr_icon_1002_100201_02.png", "100202": "/uma-tools/icons/chara/trained_chr_icon_1002_100230_02.png", "1003": "/uma-tools/icons/chara/chr_icon_1003.png", "100301": "/uma-tools/icons/chara/trained_chr_icon_1003_100301_02.png", "100302": "/uma-tools/icons/chara/trained_chr_icon_1003_100302_02.png", "100303": "/uma-tools/icons/chara/trained_chr_icon_1003_100343_02.png", "1004": "/uma-tools/icons/chara/chr_icon_1004.png", "100401": "/uma-tools/icons/chara/trained_chr_icon_1004_100401_02.png", "100402": "/uma-tools/icons/chara/trained_chr_icon_1004_100430_02.png", "100403": "/uma-tools/icons/chara/trained_chr_icon_1004_100410_02.png", "1005": "/uma-tools/icons/chara/chr_icon_1005.png", "100501": "/uma-tools/icons/chara/trained_chr_icon_1005_100501_02.png", "100502": "/uma-tools/icons/chara/trained_chr_icon_1005_100520_02.png", "1006": "/uma-tools/icons/chara/chr_icon_1006.png", "100601": "/uma-tools/icons/chara/trained_chr_icon_1006_100601_02.png", "100602": "/uma-tools/icons/chara/trained_chr_icon_1006_100646_02.png", "1007": "/uma-tools/icons/chara/chr_icon_1007.png", "100701": "/uma-tools/icons/chara/trained_chr_icon_1007_100701_02.png", "100702": "/uma-tools/icons/chara/trained_chr_icon_1007_100730_02.png", "100703": "/uma-tools/icons/chara/trained_chr_icon_1007_100702_02.png", "1008": "/uma-tools/icons/chara/chr_icon_1008.png", "100801": "/uma-tools/icons/chara/trained_chr_icon_1008_100801_02.png", "100802": "/uma-tools/icons/chara/trained_chr_icon_1008_100846_02.png", "1009": "/uma-tools/icons/chara/chr_icon_1009.png", "100901": "/uma-tools/icons/chara/trained_chr_icon_1009_100901_02.png", "100902": "/uma-tools/icons/chara/trained_chr_icon_1009_100946_02.png", "1010": "/uma-tools/icons/chara/chr_icon_1010.png", "101001": "/uma-tools/icons/chara/trained_chr_icon_1010_101001_02.png", "101002": "/uma-tools/icons/chara/trained_chr_icon_1010_101023_02.png", "1011": "/uma-tools/icons/chara/chr_icon_1011.png", "101101": "/uma-tools/icons/chara/trained_chr_icon_1011_101101_02.png", "101102": "/uma-tools/icons/chara/trained_chr_icon_1011_101116_02.png", "101103": "/uma-tools/icons/chara/trained_chr_icon_1011_101102_02.png", "1012": "/uma-tools/icons/chara/chr_icon_1012.png", "101201": "/uma-tools/icons/chara/trained_chr_icon_1012_101201_02.png", "101202": "/uma-tools/icons/chara/trained_chr_icon_1012_101226_02.png", "1013": "/uma-tools/icons/chara/chr_icon_1013.png", "101301": "/uma-tools/icons/chara/trained_chr_icon_1013_101301_02.png", "101302": "/uma-tools/icons/chara/trained_chr_icon_1013_101302_02.png", "101303": "/uma-tools/icons/chara/trained_chr_icon_1013_101330_02.png", "1014": "/uma-tools/icons/chara/chr_icon_1014.png", "101401": "/uma-tools/icons/chara/trained_chr_icon_1014_101401_02.png", "101402": "/uma-tools/icons/chara/trained_chr_icon_1014_101416_02.png", "1015": "/uma-tools/icons/chara/chr_icon_1015.png", "101501": "/uma-tools/icons/chara/trained_chr_icon_1015_101501_02.png", "101502": "/uma-tools/icons/chara/trained_chr_icon_1015_101510_02.png", "1016": "/uma-tools/icons/chara/chr_icon_1016.png", "101601": "/uma-tools/icons/chara/trained_chr_icon_1016_101601_02.png", "101602": "/uma-tools/icons/chara/trained_chr_icon_1016_101602_02.png", "1017": "/uma-tools/icons/chara/chr_icon_1017.png", "101701": "/uma-tools/icons/chara/trained_chr_icon_1017_101701_02.png", "101702": "/uma-tools/icons/chara/trained_chr_icon_1017_101743_02.png", "1018": "/uma-tools/icons/chara/chr_icon_1018.png", "101801": "/uma-tools/icons/chara/trained_chr_icon_1018_101801_02.png", "101802": "/uma-tools/icons/chara/trained_chr_icon_1018_101826_02.png", "1019": "/uma-tools/icons/chara/chr_icon_1019.png", "101901": "/uma-tools/icons/chara/trained_chr_icon_1019_101901_02.png", "101902": "/uma-tools/icons/chara/trained_chr_icon_1019_101940_02.png", "1020": "/uma-tools/icons/chara/chr_icon_1020.png", "102001": "/uma-tools/icons/chara/trained_chr_icon_1020_102001_02.png", "102002": "/uma-tools/icons/chara/trained_chr_icon_1020_102020_02.png", "1021": "/uma-tools/icons/chara/chr_icon_1021.png", "102101": "/uma-tools/icons/chara/trained_chr_icon_1021_102101_02.png", "102102": "/uma-tools/icons/chara/trained_chr_icon_1021_102143_02.png", "1022": "/uma-tools/icons/chara/chr_icon_1022.png", "102201": "/uma-tools/icons/chara/trained_chr_icon_1022_102201_02.png", "102202": "/uma-tools/icons/chara/trained_chr_icon_1022_102226_02.png", "1023": "/uma-tools/icons/chara/chr_icon_1023.png", "102301": "/uma-tools/icons/chara/trained_chr_icon_1023_102301_02.png", "102302": "/uma-tools/icons/chara/trained_chr_icon_1023_102346_02.png", "102303": "/uma-tools/icons/chara/trained_chr_icon_1023_102302_02.png", "1024": "/uma-tools/icons/chara/chr_icon_1024.png", "102401": "/uma-tools/icons/chara/trained_chr_icon_1024_102401_02.png", "102402": "/uma-tools/icons/chara/trained_chr_icon_1024_102426_02.png", "102403": "/uma-tools/icons/chara/trained_chr_icon_1024_102440_02.png", "1025": "/uma-tools/icons/chara/chr_icon_1025.png", "102501": "/uma-tools/icons/chara/trained_chr_icon_1025_102501_02.png", "102502": "/uma-tools/icons/chara/trained_chr_icon_1025_102513_02.png", "1026": "/uma-tools/icons/chara/chr_icon_1026.png", "102601": "/uma-tools/icons/chara/trained_chr_icon_1026_102601_02.png", "102602": "/uma-tools/icons/chara/trained_chr_icon_1026_102613_02.png", "1027": "/uma-tools/icons/chara/chr_icon_1027.png", "102701": "/uma-tools/icons/chara/trained_chr_icon_1027_102701_02.png", "102702": "/uma-tools/icons/chara/trained_chr_icon_1027_102713_02.png", "1028": "/uma-tools/icons/chara/chr_icon_1028.png", "102801": "/uma-tools/icons/chara/trained_chr_icon_1028_102801_02.png", "1029": "/uma-tools/icons/chara/chr_icon_1029.png", "102901": "/uma-tools/icons/chara/trained_chr_icon_1029_102901_02.png", "102902": "/uma-tools/icons/chara/trained_chr_icon_1029_102913_02.png", "1030": "/uma-tools/icons/chara/chr_icon_1030.png", "103001": "/uma-tools/icons/chara/trained_chr_icon_1030_103001_02.png", "103002": "/uma-tools/icons/chara/trained_chr_icon_1030_103040_02.png", "103003": "/uma-tools/icons/chara/trained_chr_icon_1030_103002_02.png", "1031": "/uma-tools/icons/chara/chr_icon_1031.png", "103101": "/uma-tools/icons/chara/trained_chr_icon_1031_103101_02.png", "103102": "/uma-tools/icons/chara/trained_chr_icon_1031_103113_02.png", "1032": "/uma-tools/icons/chara/chr_icon_1032.png", "103201": "/uma-tools/icons/chara/trained_chr_icon_1032_103201_02.png", "103202": "/uma-tools/icons/chara/trained_chr_icon_1032_103230_02.png", "103203": "/uma-tools/icons/chara/trained_chr_icon_1032_103202_02.png", "1033": "/uma-tools/icons/chara/chr_icon_1033.png", "103301": "/uma-tools/icons/chara/trained_chr_icon_1033_103301_02.png", "103302": "/uma-tools/icons/chara/trained_chr_icon_1033_103346_02.png", "1034": "/uma-tools/icons/chara/chr_icon_1034.png", "103401": "/uma-tools/icons/chara/trained_chr_icon_1034_103401_02.png", "103402": "/uma-tools/icons/chara/trained_chr_icon_1034_103443_02.png", "1035": "/uma-tools/icons/chara/chr_icon_1035.png", "103501": "/uma-tools/icons/chara/trained_chr_icon_1035_103501_02.png", "103502": "/uma-tools/icons/chara/trained_chr_icon_1035_103516_02.png", "103503": "/uma-tools/icons/chara/trained_chr_icon_1035_103502_02.png", "1036": "/uma-tools/icons/chara/chr_icon_1036.png", "103601": "/uma-tools/icons/chara/trained_chr_icon_1036_103601_02.png", "103602": "/uma-tools/icons/chara/trained_chr_icon_1036_103640_02.png", "1037": "/uma-tools/icons/chara/chr_icon_1037.png", "103701": "/uma-tools/icons/chara/trained_chr_icon_1037_103701_02.png", "103702": "/uma-tools/icons/chara/trained_chr_icon_1037_103713_02.png", "103703": "/uma-tools/icons/chara/trained_chr_icon_1037_103730_02.png", "1038": "/uma-tools/icons/chara/chr_icon_1038.png", "103801": "/uma-tools/icons/chara/trained_chr_icon_1038_103801_02.png", "103802": "/uma-tools/icons/chara/trained_chr_icon_1038_103826_02.png", "1039": "/uma-tools/icons/chara/chr_icon_1039.png", "103901": "/uma-tools/icons/chara/trained_chr_icon_1039_103901_02.png", "103902": "/uma-tools/icons/chara/trained_chr_icon_1039_103943_02.png", "1040": "/uma-tools/icons/chara/chr_icon_1040.png", "104001": "/uma-tools/icons/chara/trained_chr_icon_1040_104001_02.png", "104002": "/uma-tools/icons/chara/trained_chr_icon_1040_104043_02.png", "104003": "/uma-tools/icons/chara/trained_chr_icon_1040_104002_02.png", "1041": "/uma-tools/icons/chara/chr_icon_1041.png", "104101": "/uma-tools/icons/chara/trained_chr_icon_1041_104101_02.png", "104102": "/uma-tools/icons/chara/trained_chr_icon_1041_104150_02.png", "1042": "/uma-tools/icons/chara/chr_icon_1042.png", "104201": "/uma-tools/icons/chara/trained_chr_icon_1042_104201_02.png", "104202": "/uma-tools/icons/chara/trained_chr_icon_1042_104240_02.png", "1043": "/uma-tools/icons/chara/chr_icon_1043.png", "104301": "/uma-tools/icons/chara/trained_chr_icon_1043_104301_02.png", "1044": "/uma-tools/icons/chara/chr_icon_1044.png", "104401": "/uma-tools/icons/chara/trained_chr_icon_1044_104401_02.png", "104402": "/uma-tools/icons/chara/trained_chr_icon_1044_104426_02.png", "1045": "/uma-tools/icons/chara/chr_icon_1045.png", "104501": "/uma-tools/icons/chara/trained_chr_icon_1045_104501_02.png", "104502": "/uma-tools/icons/chara/trained_chr_icon_1045_104540_02.png", "104503": "/uma-tools/icons/chara/trained_chr_icon_1045_104550_02.png", "1046": "/uma-tools/icons/chara/chr_icon_1046.png", "104601": "/uma-tools/icons/chara/trained_chr_icon_1046_104601_02.png", "104602": "/uma-tools/icons/chara/trained_chr_icon_1046_104602_02.png", "104603": "/uma-tools/icons/chara/trained_chr_icon_1046_104650_02.png", "1047": "/uma-tools/icons/chara/chr_icon_1047.png", "104701": "/uma-tools/icons/chara/trained_chr_icon_1047_104701_02.png", "104702": "/uma-tools/icons/chara/trained_chr_icon_1047_104723_02.png", "1048": "/uma-tools/icons/chara/chr_icon_1048.png", "104801": "/uma-tools/icons/chara/trained_chr_icon_1048_104801_02.png", "104802": "/uma-tools/icons/chara/trained_chr_icon_1048_104823_02.png", "1049": "/uma-tools/icons/chara/chr_icon_1049.png", "104901": "/uma-tools/icons/chara/trained_chr_icon_1049_104901_02.png", "1050": "/uma-tools/icons/chara/chr_icon_1050.png", "105001": "/uma-tools/icons/chara/trained_chr_icon_1050_105001_02.png", "105002": "/uma-tools/icons/chara/trained_chr_icon_1050_105016_02.png", "105003": "/uma-tools/icons/chara/trained_chr_icon_1050_105002_02.png", "1051": "/uma-tools/icons/chara/chr_icon_1051.png", "105101": "/uma-tools/icons/chara/trained_chr_icon_1051_105101_02.png", "105102": "/uma-tools/icons/chara/trained_chr_icon_1051_105126_02.png", "1052": "/uma-tools/icons/chara/chr_icon_1052.png", "105201": "/uma-tools/icons/chara/trained_chr_icon_1052_105201_02.png", "105202": "/uma-tools/icons/chara/trained_chr_icon_1052_105210_02.png", "1053": "/uma-tools/icons/chara/chr_icon_1053.png", "105301": "/uma-tools/icons/chara/trained_chr_icon_1053_105301_02.png", "105302": "/uma-tools/icons/chara/trained_chr_icon_1053_105323_02.png", "1054": "/uma-tools/icons/chara/chr_icon_1054.png", "105401": "/uma-tools/icons/chara/trained_chr_icon_1054_105401_02.png", "1055": "/uma-tools/icons/chara/chr_icon_1055.png", "105501": "/uma-tools/icons/chara/trained_chr_icon_1055_105501_02.png", "1056": "/uma-tools/icons/chara/chr_icon_1056.png", "105601": "/uma-tools/icons/chara/trained_chr_icon_1056_105601_02.png", "105602": "/uma-tools/icons/chara/trained_chr_icon_1056_105623_02.png", "1057": "/uma-tools/icons/chara/chr_icon_1057.png", "105701": "/uma-tools/icons/chara/trained_chr_icon_1057_105701_02.png", "105702": "/uma-tools/icons/chara/trained_chr_icon_1057_105710_02.png", "1058": "/uma-tools/icons/chara/chr_icon_1058.png", "105801": "/uma-tools/icons/chara/trained_chr_icon_1058_105801_02.png", "105802": "/uma-tools/icons/chara/trained_chr_icon_1058_105840_02.png", "1059": "/uma-tools/icons/chara/chr_icon_1059.png", "105901": "/uma-tools/icons/chara/trained_chr_icon_1059_105901_02.png", "105902": "/uma-tools/icons/chara/trained_chr_icon_1059_105923_02.png", "1060": "/uma-tools/icons/chara/chr_icon_1060.png", "106001": "/uma-tools/icons/chara/trained_chr_icon_1060_106001_02.png", "106002": "/uma-tools/icons/chara/trained_chr_icon_1060_106050_02.png", "106003": "/uma-tools/icons/chara/trained_chr_icon_1060_106010_02.png", "1061": "/uma-tools/icons/chara/chr_icon_1061.png", "106101": "/uma-tools/icons/chara/trained_chr_icon_1061_106101_02.png", "106102": "/uma-tools/icons/chara/trained_chr_icon_1061_106150_02.png", "106103": "/uma-tools/icons/chara/trained_chr_icon_1061_106126_02.png", "1062": "/uma-tools/icons/chara/chr_icon_1062.png", "106201": "/uma-tools/icons/chara/trained_chr_icon_1062_106201_02.png", "106202": "/uma-tools/icons/chara/trained_chr_icon_1062_106250_02.png", "1063": "/uma-tools/icons/chara/chr_icon_1063.png", "106301": "/uma-tools/icons/chara/trained_chr_icon_1063_106301_02.png", "1064": "/uma-tools/icons/chara/chr_icon_1064.png", "106401": "/uma-tools/icons/chara/trained_chr_icon_1064_106401_02.png", "106402": "/uma-tools/icons/chara/trained_chr_icon_1064_106446_02.png", "1065": "/uma-tools/icons/chara/chr_icon_1065.png", "106501": "/uma-tools/icons/chara/trained_chr_icon_1065_106501_02.png", "106502": "/uma-tools/icons/chara/trained_chr_icon_1065_106520_02.png", "1066": "/uma-tools/icons/chara/chr_icon_1066.png", "106601": "/uma-tools/icons/chara/trained_chr_icon_1066_106601_02.png", "1067": "/uma-tools/icons/chara/chr_icon_1067.png", "106701": "/uma-tools/icons/chara/trained_chr_icon_1067_106701_02.png", "106702": "/uma-tools/icons/chara/trained_chr_icon_1067_106710_02.png", "106703": "/uma-tools/icons/chara/trained_chr_icon_1067_106702_02.png", "1068": "/uma-tools/icons/chara/chr_icon_1068.png", "106801": "/uma-tools/icons/chara/trained_chr_icon_1068_106801_02.png", "106802": "/uma-tools/icons/chara/trained_chr_icon_1068_106810_02.png", "106803": "/uma-tools/icons/chara/trained_chr_icon_1068_106802_02.png", "1069": "/uma-tools/icons/chara/chr_icon_1069.png", "106901": "/uma-tools/icons/chara/trained_chr_icon_1069_106901_02.png", "106902": "/uma-tools/icons/chara/trained_chr_icon_1069_106920_02.png", "1070": "/uma-tools/icons/chara/chr_icon_1070.png", "107001": "/uma-tools/icons/chara/trained_chr_icon_1070_107001_02.png", "107002": "/uma-tools/icons/chara/trained_chr_icon_1070_107002_02.png", "1071": "/uma-tools/icons/chara/chr_icon_1071.png", "107101": "/uma-tools/icons/chara/trained_chr_icon_1071_107101_02.png", "107102": "/uma-tools/icons/chara/trained_chr_icon_1071_107120_02.png", "1072": "/uma-tools/icons/chara/chr_icon_1072.png", "107201": "/uma-tools/icons/chara/trained_chr_icon_1072_107201_02.png", "107202": "/uma-tools/icons/chara/trained_chr_icon_1072_107250_02.png", "1073": "/uma-tools/icons/chara/chr_icon_1073.png", "107301": "/uma-tools/icons/chara/trained_chr_icon_1073_107301_02.png", "1074": "/uma-tools/icons/chara/chr_icon_1074.png", "107401": "/uma-tools/icons/chara/trained_chr_icon_1074_107401_02.png", "107402": "/uma-tools/icons/chara/trained_chr_icon_1074_107446_02.png", "1075": "/uma-tools/icons/chara/chr_icon_1075.png", "1076": "/uma-tools/icons/chara/chr_icon_1076.png", "107601": "/uma-tools/icons/chara/trained_chr_icon_1076_107601_02.png", "1077": "/uma-tools/icons/chara/chr_icon_1077.png", "107701": "/uma-tools/icons/chara/trained_chr_icon_1077_107701_02.png", "107702": "/uma-tools/icons/chara/trained_chr_icon_1077_107746_02.png", "1078": "/uma-tools/icons/chara/chr_icon_1078.png", "107801": "/uma-tools/icons/chara/trained_chr_icon_1078_107801_02.png", "107802": "/uma-tools/icons/chara/trained_chr_icon_1078_107813_02.png", "1079": "/uma-tools/icons/chara/chr_icon_1079.png", "107901": "/uma-tools/icons/chara/trained_chr_icon_1079_107901_02.png", "1080": "/uma-tools/icons/chara/chr_icon_1080.png", "108001": "/uma-tools/icons/chara/trained_chr_icon_1080_108001_02.png", "1081": "/uma-tools/icons/chara/chr_icon_1081.png", "1082": "/uma-tools/icons/chara/chr_icon_1082.png", "108201": "/uma-tools/icons/chara/trained_chr_icon_1082_108201_02.png", "1083": "/uma-tools/icons/chara/chr_icon_1083.png", "108301": "/uma-tools/icons/chara/trained_chr_icon_1083_108301_02.png", "108302": "/uma-tools/icons/chara/trained_chr_icon_1083_108340_02.png", "1084": "/uma-tools/icons/chara/chr_icon_1084.png", "108401": "/uma-tools/icons/chara/trained_chr_icon_1084_108401_02.png", "108402": "/uma-tools/icons/chara/trained_chr_icon_1084_108420_02.png", "1085": "/uma-tools/icons/chara/chr_icon_1085.png", "108501": "/uma-tools/icons/chara/trained_chr_icon_1085_108501_02.png", "108502": "/uma-tools/icons/chara/trained_chr_icon_1085_108520_02.png", "1086": "/uma-tools/icons/chara/chr_icon_1086.png", "108601": "/uma-tools/icons/chara/trained_chr_icon_1086_108601_02.png", "108602": "/uma-tools/icons/chara/trained_chr_icon_1086_108626_02.png", "1087": "/uma-tools/icons/chara/chr_icon_1087.png", "108701": "/uma-tools/icons/chara/trained_chr_icon_1087_108701_02.png", "108702": "/uma-tools/icons/chara/trained_chr_icon_1087_108713_02.png", "1088": "/uma-tools/icons/chara/chr_icon_1088.png", "108801": "/uma-tools/icons/chara/trained_chr_icon_1088_108801_02.png", "1089": "/uma-tools/icons/chara/chr_icon_1089.png", "108901": "/uma-tools/icons/chara/trained_chr_icon_1089_108901_02.png", "1090": "/uma-tools/icons/chara/chr_icon_1090.png", "109001": "/uma-tools/icons/chara/trained_chr_icon_1090_109001_02.png", "1091": "/uma-tools/icons/chara/chr_icon_1091.png", "109101": "/uma-tools/icons/chara/trained_chr_icon_1091_109101_02.png", "1092": "/uma-tools/icons/chara/chr_icon_1092.png", "1093": "/uma-tools/icons/chara/chr_icon_1093.png", "109301": "/uma-tools/icons/chara/trained_chr_icon_1093_109301_02.png", "1094": "/uma-tools/icons/chara/chr_icon_1094.png", "109401": "/uma-tools/icons/chara/trained_chr_icon_1094_109401_02.png", "1095": "/uma-tools/icons/chara/chr_icon_1095.png", "1096": "/uma-tools/icons/chara/chr_icon_1096.png", "109601": "/uma-tools/icons/chara/trained_chr_icon_1096_109601_02.png", "1097": "/uma-tools/icons/chara/chr_icon_1097.png", "1098": "/uma-tools/icons/chara/chr_icon_1098.png", "109801": "/uma-tools/icons/chara/trained_chr_icon_1098_109801_02.png", "109802": "/uma-tools/icons/chara/trained_chr_icon_1098_109850_02.png", "1099": "/uma-tools/icons/chara/chr_icon_1099.png", "109901": "/uma-tools/icons/chara/trained_chr_icon_1099_109901_02.png", "109902": "/uma-tools/icons/chara/trained_chr_icon_1099_109930_02.png", "1100": "/uma-tools/icons/chara/chr_icon_1100.png", "110001": "/uma-tools/icons/chara/trained_chr_icon_1100_110001_02.png", "1102": "/uma-tools/icons/chara/chr_icon_1102.png", "110201": "/uma-tools/icons/chara/trained_chr_icon_1102_110201_02.png", "1103": "/uma-tools/icons/chara/chr_icon_1103.png", "1104": "/uma-tools/icons/chara/chr_icon_1104.png", "110401": "/uma-tools/icons/chara/trained_chr_icon_1104_110401_02.png", "110402": "/uma-tools/icons/chara/trained_chr_icon_1104_110410_02.png", "1105": "/uma-tools/icons/chara/chr_icon_1105.png", "110501": "/uma-tools/icons/chara/trained_chr_icon_1105_110501_02.png", "110502": "/uma-tools/icons/chara/trained_chr_icon_1105_110523_02.png", "1106": "/uma-tools/icons/chara/chr_icon_1106.png", "110601": "/uma-tools/icons/chara/trained_chr_icon_1106_110601_02.png", "1107": "/uma-tools/icons/chara/chr_icon_1107.png", "110701": "/uma-tools/icons/chara/trained_chr_icon_1107_110701_02.png", "110702": "/uma-tools/icons/chara/trained_chr_icon_1107_110720_02.png", "1108": "/uma-tools/icons/chara/chr_icon_1108.png", "110801": "/uma-tools/icons/chara/trained_chr_icon_1108_110801_02.png", "1109": "/uma-tools/icons/chara/chr_icon_1109.png", "110901": "/uma-tools/icons/chara/trained_chr_icon_1109_110901_02.png", "1110": "/uma-tools/icons/chara/chr_icon_1110.png", "111001": "/uma-tools/icons/chara/trained_chr_icon_1110_111001_02.png", "111002": "/uma-tools/icons/chara/trained_chr_icon_1110_111026_02.png", "1111": "/uma-tools/icons/chara/chr_icon_1111.png", "111101": "/uma-tools/icons/chara/trained_chr_icon_1111_111101_02.png", "1112": "/uma-tools/icons/chara/chr_icon_1112.png", "1113": "/uma-tools/icons/chara/chr_icon_1113.png", "1114": "/uma-tools/icons/chara/chr_icon_1114.png", "1115": "/uma-tools/icons/chara/chr_icon_1115.png", "111501": "/uma-tools/icons/chara/trained_chr_icon_1115_111501_02.png", "1116": "/uma-tools/icons/chara/chr_icon_1116.png", "111601": "/uma-tools/icons/chara/trained_chr_icon_1116_111601_02.png", "1117": "/uma-tools/icons/chara/chr_icon_1117.png", "111701": "/uma-tools/icons/chara/trained_chr_icon_1117_111701_02.png", "1119": "/uma-tools/icons/chara/chr_icon_1119.png", "111901": "/uma-tools/icons/chara/trained_chr_icon_1119_111901_02.png", "1120": "/uma-tools/icons/chara/chr_icon_1120.png", "112001": "/uma-tools/icons/chara/trained_chr_icon_1120_112001_02.png", "1121": "/uma-tools/icons/chara/chr_icon_1121.png", "112101": "/uma-tools/icons/chara/trained_chr_icon_1121_112101_02.png", "1124": "/uma-tools/icons/chara/chr_icon_1124.png", "112401": "/uma-tools/icons/chara/trained_chr_icon_1124_112401_02.png", "1127": "/uma-tools/icons/chara/chr_icon_1127.png", "112701": "/uma-tools/icons/chara/trained_chr_icon_1127_112701_02.png", "1128": "/uma-tools/icons/chara/chr_icon_1128.png", "1129": "/uma-tools/icons/chara/chr_icon_1129.png", "1130": "/uma-tools/icons/chara/chr_icon_1130.png", "1131": "/uma-tools/icons/chara/chr_icon_1131.png", "113101": "/uma-tools/icons/chara/trained_chr_icon_1131_113101_02.png", "1132": "/uma-tools/icons/chara/chr_icon_1132.png", "113201": "/uma-tools/icons/chara/trained_chr_icon_1132_113201_02.png", "1133": "/uma-tools/icons/chara/chr_icon_1133.png", "113301": "/uma-tools/icons/chara/trained_chr_icon_1133_113301_02.png", "1134": "/uma-tools/icons/chara/chr_icon_1134.png" };

  // ../components/HorseDef.tsx
  var umaAltIds = Object.keys(umas_default).flatMap((id3) => Object.keys(umas_default[id3].outfits));
  var umaNamesForSearch = {};
  umaAltIds.forEach((id3) => {
    const u3 = umas_default[id3.slice(0, 4)];
    umaNamesForSearch[id3] = (u3.outfits[id3] + " " + u3.name[1]).toUpperCase().replace(/\./g, "");
  });
  function searchNames(query) {
    const q3 = query.toUpperCase().replace(/\./g, "");
    return umaAltIds.filter((oid) => umaNamesForSearch[oid].indexOf(q3) > -1);
  }
  function UmaSelector(props) {
    const randomMob = F2(() => `/uma-tools/icons/mob/trained_mob_chr_icon_${8e3 + Math.floor(Math.random() * 624)}_000001_01.png`, []);
    const u3 = props.value && umas_default[props.value.slice(0, 4)];
    const input = _(null);
    const suggestionsContainer = _(null);
    const [open, setOpen] = h2(false);
    const [activeIdx, setActiveIdx] = h2(-1);
    function update9(q3) {
      return { input: q3, suggestions: searchNames(q3) };
    }
    const [query, search] = s2((_2, q3) => update9(q3), u3 && u3.name[1], update9);
    function confirm(oid) {
      setOpen(false);
      props.select(oid);
      const uname = umas_default[oid.slice(0, 4)].name[1];
      search(uname);
      setActiveIdx(-1);
      input.current && input.current.blur();
    }
    function focus() {
      input.current && input.current.select();
    }
    function setActiveAndScroll(idx) {
      setActiveIdx(idx);
      if (!suggestionsContainer.current)
        return;
      const container = suggestionsContainer.current;
      const li = container.querySelector(`[data-uma-id="${query.suggestions[idx]}"]`);
      const ch = container.offsetHeight - 4;
      if (li.offsetTop < container.scrollTop) {
        container.scrollTop = li.offsetTop;
      } else if (li.offsetTop >= container.scrollTop + ch) {
        const h3 = li.offsetHeight;
        container.scrollTop = (li.offsetTop / h3 - (ch / h3 - 1)) * h3;
      }
    }
    function handleClick(e4) {
      const li = e4.target.closest(".umaSuggestion");
      if (li == null)
        return;
      e4.stopPropagation();
      confirm(li.dataset.umaId);
    }
    function handleInput(e4) {
      const q3 = e4.target.value;
      search(e4.target.value);
    }
    function handleKeyDown(e4) {
      const l4 = query.suggestions.length;
      switch (e4.keyCode) {
        case 13:
          if (activeIdx > -1)
            confirm(query.suggestions[activeIdx]);
          break;
        case 38:
          setActiveAndScroll((activeIdx - 1 + l4) % l4);
          break;
        case 40:
          setActiveAndScroll((activeIdx + 1 + l4) % l4);
          break;
      }
    }
    return /* @__PURE__ */ y("div", { class: "umaSelector" }, /* @__PURE__ */ y("div", { class: "umaSelectorIconsBox", onClick: focus }, /* @__PURE__ */ y("img", { src: props.value ? icons_default[props.value] : randomMob }), /* @__PURE__ */ y("img", { src: "/uma-tools/icons/utx_ico_umamusume_00.png" })), /* @__PURE__ */ y("div", { class: "umaEpithet" }, /* @__PURE__ */ y("span", null, props.value && u3.outfits[props.value])), /* @__PURE__ */ y("div", { class: "umaSelectWrapper" }, /* @__PURE__ */ y("input", { type: "text", class: "umaSelectInput", value: query.input, tabindex: props.tabindex, onInput: handleInput, onKeyDown: handleKeyDown, onFocus: () => setOpen(true), onBlur: () => setOpen(false), ref: input }), /* @__PURE__ */ y("ul", { class: `umaSuggestions ${open ? "open" : ""}`, onMouseDown: handleClick, ref: suggestionsContainer }, query.suggestions.map((oid, i4) => {
      const uid = oid.slice(0, 4);
      return /* @__PURE__ */ y("li", { key: oid, "data-uma-id": oid, class: `umaSuggestion ${i4 == activeIdx ? "selected" : ""}` }, /* @__PURE__ */ y("img", { src: icons_default[oid] }), /* @__PURE__ */ y("span", null, umas_default[uid].outfits[oid], " ", umas_default[uid].name[1]));
    }))));
  }
  function rankForStat(x3) {
    if (x3 > 1200) {
      return 18 + Math.floor((x3 - 1200) / 100) * 10 + Math.floor(x3 / 10) % 10;
    } else if (x3 >= 1150) {
      return 17;
    } else if (x3 >= 1100) {
      return 16;
    } else if (x3 >= 400) {
      return 8 + Math.floor((x3 - 400) / 100);
    } else {
      return Math.floor(x3 / 50);
    }
  }
  function Stat(props) {
    return /* @__PURE__ */ y("div", { class: "horseParam" }, /* @__PURE__ */ y("img", { src: `/uma-tools/icons/statusrank/ui_statusrank_${(100 + rankForStat(props.value)).toString().slice(1)}.png` }), /* @__PURE__ */ y("input", { type: "number", min: "1", max: "1999", value: props.value, tabindex: props.tabindex, onInput: (e4) => props.change(+e4.currentTarget.value) }));
  }
  var APTITUDES = Object.freeze(["S", "A", "B", "C", "D", "E", "F", "G"]);
  function AptitudeIcon(props) {
    const idx = 7 - APTITUDES.indexOf(props.a);
    return /* @__PURE__ */ y("img", { src: `/uma-tools/icons/utx_ico_statusrank_${(100 + idx).toString().slice(1)}.png` });
  }
  function AptitudeSelect(props) {
    const [open, setOpen] = h2(false);
    function setAptitude(e4) {
      e4.stopPropagation();
      props.setA(e4.currentTarget.dataset.horseAptitude);
      setOpen(false);
    }
    function selectByKey(e4) {
      const k3 = e4.key.toUpperCase();
      if (APTITUDES.indexOf(k3) > -1) {
        props.setA(k3);
      }
    }
    return /* @__PURE__ */ y("div", { class: "horseAptitudeSelect", tabindex: props.tabindex, onClick: () => setOpen(!open), onBlur: setOpen.bind(null, false), onKeyDown: selectByKey }, /* @__PURE__ */ y("span", null, /* @__PURE__ */ y(AptitudeIcon, { a: props.a })), /* @__PURE__ */ y("ul", { style: open ? "display:block" : "display:none" }, APTITUDES.map((a4) => /* @__PURE__ */ y("li", { key: a4, "data-horse-aptitude": a4, onClick: setAptitude }, /* @__PURE__ */ y(AptitudeIcon, { a: a4 })))));
  }
  function StrategySelect(props) {
    if (true) {
      return /* @__PURE__ */ y("select", { class: "horseStrategySelect", value: props.s, tabindex: props.tabindex, onInput: (e4) => props.setS(e4.currentTarget.value) }, /* @__PURE__ */ y("option", { value: "Nige" }, "Front Runner"), /* @__PURE__ */ y("option", { value: "Senkou" }, "Pace Chaser"), /* @__PURE__ */ y("option", { value: "Sasi" }, "Late Closer"), /* @__PURE__ */ y("option", { value: "Oikomi" }, "Tail End"));
    }
    return /* @__PURE__ */ y("select", { class: "horseStrategySelect", value: props.s, tabindex: props.tabindex, onInput: (e4) => props.setS(e4.currentTarget.value) }, /* @__PURE__ */ y("option", { value: "Nige" }, "\u9003\u3052"), /* @__PURE__ */ y("option", { value: "Senkou" }, "\u5148\u884C"), /* @__PURE__ */ y("option", { value: "Sasi" }, "\u5DEE\u3057"), /* @__PURE__ */ y("option", { value: "Oikomi" }, "\u8FFD\u8FBC"), /* @__PURE__ */ y("option", { value: "Oonige" }, "\u5927\u9003\u3052"));
  }
  var nonUniqueSkills = Object.keys(skill_data_default).filter((id3) => skill_data_default[id3].rarity < 3 || skill_data_default[id3].rarity > 5);
  function assertIsSkill(sid) {
    console.assert(skill_data_default[sid] != null);
  }
  function uniqueSkillForUma(oid) {
    const i4 = +oid.slice(1, -2), v3 = +oid.slice(-2);
    const sid = (1e5 + 1e4 * (v3 - 1) + i4 * 10 + 1).toString();
    assertIsSkill(sid);
    return sid;
  }
  function skillComparator(a4, b3) {
    const x3 = skill_meta_default[a4].order, y3 = skill_meta_default[b3].order;
    return +(y3 < x3) - +(x3 < y3) || +(b3 < a4) - +(a4 < b3);
  }
  function SkillSet(iterable) {
    return SortedSet(iterable, skillComparator);
  }
  var HorseState = class extends Record({
    outfitId: "",
    speed: 1850,
    stamina: 1200,
    power: 1500,
    guts: 1200,
    wisdom: 1300,
    strategy: "Senkou",
    distanceAptitude: "S",
    surfaceAptitude: "A",
    strategyAptitude: "A",
    skills: SkillSet([])
  }) {
  };
  var totalTabs = 0;
  function horseDefTabs() {
    return totalTabs;
  }
  function HorseDef(props) {
    const { state, setState } = props;
    const [skillPickerOpen, setSkillPickerOpen] = h2(false);
    const [expanded, setExpanded] = h2(() => Set2());
    const tabstart = props.tabstart();
    let tabi = 0;
    function tabnext() {
      if (++tabi > totalTabs)
        totalTabs = tabi;
      return tabstart + tabi - 1;
    }
    const umaId = state.outfitId;
    const selectableSkills = F2(() => nonUniqueSkills.filter((id3) => skill_data_default[id3].rarity != 6 || id3.startsWith(umaId)), [umaId]);
    function setter(prop) {
      return (x3) => setState(state.set(prop, x3));
    }
    const setSkills = setter("skills");
    function setUma(id3) {
      setState(
        state.set("outfitId", id3).set("skills", state.skills.filter((id4) => skill_data_default[id4].rarity < 3).add(uniqueSkillForUma(id3)))
      );
    }
    function openSkillPicker(e4) {
      e4.stopPropagation();
      setSkillPickerOpen(true);
    }
    function setSkillsAndClose(ids) {
      setSkills(SkillSet(ids));
      setSkillPickerOpen(false);
    }
    function handleSkillClick(e4) {
      e4.stopPropagation();
      const se = e4.target.closest(".skill, .expandedSkill");
      if (se == null)
        return;
      if (e4.target.classList.contains("skillDismiss")) {
        setSkills(state.skills.delete(se.dataset.skillid));
      } else if (se.classList.contains("expandedSkill")) {
        setExpanded(expanded.delete(se.dataset.skillid));
      } else {
        setExpanded(expanded.add(se.dataset.skillid));
      }
    }
    p2(function() {
      window.requestAnimationFrame(
        () => document.querySelectorAll(".horseExpandedSkill").forEach((e4) => {
          e4.style.gridRow = "span " + Math.ceil(e4.firstChild.offsetHeight / 64);
        })
      );
    }, [expanded]);
    const skillList = F2(function() {
      const u3 = uniqueSkillForUma(umaId);
      return Array.from(state.skills).map(
        (id3) => expanded.has(id3) ? /* @__PURE__ */ y("li", { key: id3, class: "horseExpandedSkill" }, /* @__PURE__ */ y(ExpandedSkillDetails, { id: id3, distanceFactor: props.courseDistance, dismissable: id3 != u3 })) : /* @__PURE__ */ y("li", { key: id3, style: "" }, /* @__PURE__ */ y(Skill, { id: id3, selected: false, dismissable: id3 != u3 }))
      );
    }, [state.skills, umaId, expanded, props.courseDistance]);
    return /* @__PURE__ */ y("div", { class: "horseDef" }, /* @__PURE__ */ y("div", { class: "horseDefHeader" }, props.children), /* @__PURE__ */ y(UmaSelector, { value: umaId, select: setUma, tabindex: tabnext() }), /* @__PURE__ */ y("div", { class: "horseParams" }, /* @__PURE__ */ y("div", { class: "horseParamHeader" }, /* @__PURE__ */ y("img", { src: "/uma-tools/icons/status_00.png" }), /* @__PURE__ */ y("span", null, "Speed")), /* @__PURE__ */ y("div", { class: "horseParamHeader" }, /* @__PURE__ */ y("img", { src: "/uma-tools/icons/status_01.png" }), /* @__PURE__ */ y("span", null, "Stamina")), /* @__PURE__ */ y("div", { class: "horseParamHeader" }, /* @__PURE__ */ y("img", { src: "/uma-tools/icons/status_02.png" }), /* @__PURE__ */ y("span", null, "Power")), /* @__PURE__ */ y("div", { class: "horseParamHeader" }, /* @__PURE__ */ y("img", { src: "/uma-tools/icons/status_03.png" }), /* @__PURE__ */ y("span", null, "Guts")), /* @__PURE__ */ y("div", { class: "horseParamHeader" }, /* @__PURE__ */ y("img", { src: "/uma-tools/icons/status_04.png" }), /* @__PURE__ */ y("span", null, true ? "Wit" : "Wisdom")), /* @__PURE__ */ y(Stat, { value: state.speed, change: setter("speed"), tabindex: tabnext() }), /* @__PURE__ */ y(Stat, { value: state.stamina, change: setter("stamina"), tabindex: tabnext() }), /* @__PURE__ */ y(Stat, { value: state.power, change: setter("power"), tabindex: tabnext() }), /* @__PURE__ */ y(Stat, { value: state.guts, change: setter("guts"), tabindex: tabnext() }), /* @__PURE__ */ y(Stat, { value: state.wisdom, change: setter("wisdom"), tabindex: tabnext() })), /* @__PURE__ */ y("div", { class: "horseAptitudes" }, /* @__PURE__ */ y("div", null, /* @__PURE__ */ y("span", null, "Surface aptitude:"), /* @__PURE__ */ y(AptitudeSelect, { a: state.surfaceAptitude, setA: setter("surfaceAptitude"), tabindex: tabnext() })), /* @__PURE__ */ y("div", null, /* @__PURE__ */ y("span", null, "Distance aptitude:"), /* @__PURE__ */ y(AptitudeSelect, { a: state.distanceAptitude, setA: setter("distanceAptitude"), tabindex: tabnext() })), /* @__PURE__ */ y("div", null, /* @__PURE__ */ y("span", null, "Strategy:"), /* @__PURE__ */ y(StrategySelect, { s: state.strategy, setS: setter("strategy"), tabindex: tabnext() })), /* @__PURE__ */ y("div", null, /* @__PURE__ */ y("span", null, "Strategy aptitude:"), /* @__PURE__ */ y(AptitudeSelect, { a: state.strategyAptitude, setA: setter("strategyAptitude"), tabindex: tabnext() }))), /* @__PURE__ */ y("div", { class: "horseSkillHeader" }, "Skills"), /* @__PURE__ */ y("div", { class: "horseSkillListWrapper", onClick: handleSkillClick }, /* @__PURE__ */ y("ul", { class: "horseSkillList" }, skillList, /* @__PURE__ */ y("li", { key: "add" }, /* @__PURE__ */ y("div", { class: "skill addSkillButton", onClick: openSkillPicker, tabindex: tabnext() }, /* @__PURE__ */ y("span", null, "+"), "Add Skill")))), /* @__PURE__ */ y("div", { class: `horseSkillPickerOverlay ${skillPickerOpen ? "open" : ""}`, onClick: setSkillPickerOpen.bind(null, false) }), /* @__PURE__ */ y("div", { class: `horseSkillPickerWrapper ${skillPickerOpen ? "open" : ""}` }, /* @__PURE__ */ y(SkillList, { ids: selectableSkills, selected: new Set(state.skills), setSelected: setSkillsAndClose, isOpen: skillPickerOpen })));
  }

  // ../umalator/app.tsx
  function skillmeta2(id3) {
    return skill_meta_default[id3.split("-")[0]];
  }
  var DEFAULT_COURSE_ID = 10906;
  var DEFAULT_SAMPLES = 500;
  function id2(x3) {
    return x3;
  }
  function binSearch(a4, x3) {
    let lo = 0, hi = a4.length - 1;
    if (x3 < a4[0])
      return 0;
    if (x3 > a4[hi])
      return hi - 1;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (x3 < a4[mid]) {
        hi = mid - 1;
      } else if (x3 > a4[mid]) {
        lo = mid + 1;
      } else {
        return mid;
      }
    }
    return Math.abs(a4[lo] - x3) < Math.abs(a4[hi] - x3) ? lo : hi;
  }
  function TimeOfDaySelect(props) {
    function click(e4) {
      e4.stopPropagation();
      if (!("timeofday" in e4.target.dataset))
        return;
      props.set(+e4.target.dataset.timeofday);
    }
    return /* @__PURE__ */ y("div", { class: "timeofdaySelect", onClick: click }, Array(3).fill(0).map((_2, i4) => /* @__PURE__ */ y(
      "img",
      {
        src: `/uma-tools/icons/utx_ico_timezone_0${i4}.png`,
        title: STRINGS_en.skilldetails.time[i4 + 2],
        class: i4 + 2 == props.value ? "selected" : "",
        "data-timeofday": i4 + 2
      }
    )));
  }
  function GroundSelect(props) {
    return /* @__PURE__ */ y("select", { class: "groundSelect", value: props.value, onInput: (e4) => props.set(+e4.currentTarget.value) }, /* @__PURE__ */ y("option", { value: "1" }, "\u826F"), /* @__PURE__ */ y("option", { value: "2" }, "\u7A0D\u91CD"), /* @__PURE__ */ y("option", { value: "3" }, "\u91CD"), /* @__PURE__ */ y("option", { value: "4" }, "\u4E0D\u826F"));
  }
  function WeatherSelect(props) {
    function click(e4) {
      e4.stopPropagation();
      if (!("weather" in e4.target.dataset))
        return;
      props.set(+e4.target.dataset.weather);
    }
    return /* @__PURE__ */ y("div", { class: "weatherSelect", onClick: click }, Array(4).fill(0).map((_2, i4) => /* @__PURE__ */ y(
      "img",
      {
        src: `/uma-tools/icons/utx_ico_weather_0${i4}.png`,
        title: STRINGS_en.skilldetails.weather[i4 + 1],
        class: i4 + 1 == props.value ? "selected" : "",
        "data-weather": i4 + 1
      }
    )));
  }
  function SeasonSelect(props) {
    function click(e4) {
      e4.stopPropagation();
      if (!("season" in e4.target.dataset))
        return;
      props.set(+e4.target.dataset.season);
    }
    return /* @__PURE__ */ y("div", { class: "seasonSelect", onClick: click }, Array(5).fill(0).map((_2, i4) => /* @__PURE__ */ y(
      "img",
      {
        src: `/uma-tools/icons/utx_txt_season_0${i4}.png`,
        title: STRINGS_en.skilldetails.season[i4 + 1],
        class: i4 + 1 == props.value ? "selected" : "",
        "data-season": i4 + 1
      }
    )));
  }
  function Histogram(props) {
    const { data, width, height } = props;
    const axes = _(null);
    const xH = 20;
    const yW = 40;
    const x3 = linear2().domain(
      data[0] == 0 && data[data.length - 1] == 0 ? [-1, 1] : [Math.min(0, Math.floor(data[0])), Math.ceil(data[data.length - 1])]
    ).range([yW, width - yW]);
    const bucketize = bin().value(id2).domain(x3.domain()).thresholds(x3.ticks(30));
    const buckets = bucketize(data);
    const y3 = linear2().domain([0, max2(buckets, (b3) => b3.length)]).range([height - xH, xH]);
    p2(function() {
      const g3 = select_default2(axes.current);
      g3.selectAll("*").remove();
      g3.append("g").attr("transform", `translate(0,${height - xH})`).call(axisBottom(x3));
      g3.append("g").attr("transform", `translate(${yW},0)`).call(axisLeft(y3));
    }, [data, width, height]);
    const rects = buckets.map(
      (b3, i4) => /* @__PURE__ */ y("rect", { key: i4, fill: "#2a77c5", stroke: "black", x: x3(b3.x0), y: y3(b3.length), width: x3(b3.x1) - x3(b3.x0), height: height - xH - y3(b3.length) })
    );
    return /* @__PURE__ */ y("svg", { id: "histogram", width, height }, /* @__PURE__ */ y("g", null, rects), /* @__PURE__ */ y("g", { ref: axes }));
  }
  function VelocityLines(props) {
    const axes = _(null);
    const data = props.data;
    const x3 = linear2().domain([0, props.courseDistance]).range([0, props.width]);
    const y3 = data && linear2().domain([0, max2(data.v, (v3) => max2(v3))]).range([props.height, 0]);
    const hpY = data && linear2().domain([0, max2(data.hp, (hp) => max2(hp))]).range([props.height, 0]);
    p2(function() {
      if (axes.current == null)
        return;
      const g3 = select_default2(axes.current);
      g3.selectAll("*").remove();
      g3.append("g").attr("transform", `translate(${props.xOffset},${props.height + 5})`).call(axisBottom(x3));
      if (data) {
        g3.append("g").attr("transform", `translate(${props.xOffset},4)`).call(axisLeft(y3));
      }
    }, [props.data, props.width, props.height]);
    const colors = ["#2a77c5", "#c52a2a"];
    const hpColors = ["#688aab", "#ab6868"];
    return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("g", { transform: `translate(${props.xOffset},5)` }, data && data.v.map(
      (v3, i4) => /* @__PURE__ */ y("path", { fill: "none", stroke: colors[i4], "stroke-width": "2.5", d: line_default().x((j3) => x3(data.p[i4][j3])).y((j3) => y3(v3[j3]))(data.p[i4].map((_2, j3) => j3)) })
    ).concat(props.showHp ? data.hp.map(
      (hp, i4) => /* @__PURE__ */ y("path", { fill: "none", stroke: hpColors[i4], "stroke-width": "2.5", d: line_default().x((j3) => x3(data.p[i4][j3])).y((j3) => hpY(hp[j3]))(data.p[i4].map((_2, j3) => j3)) })
    ) : [])), /* @__PURE__ */ y("g", { ref: axes }));
  }
  var NO_SHOW = Object.freeze([
    "10011",
    "10012",
    "10016",
    "10021",
    "10022",
    "10026",
    "10031",
    "10032",
    "10036",
    "10041",
    "10042",
    "10046",
    "10051",
    "10052",
    "10056",
    "10061",
    "10062",
    "10066",
    "40011",
    "20061",
    "20062",
    "20066"
  ]);
  var RaceParams = class extends Record({
    mood: 2,
    ground: 1 /* Good */,
    weather: 1 /* Sunny */,
    season: 1 /* Spring */,
    time: 2 /* Midday */,
    grade: 100 /* G1 */
  }) {
  };
  async function serialize(courseId, nsamples, usePosKeep, racedef, uma1, uma2) {
    const json = JSON.stringify({
      courseId,
      nsamples,
      usePosKeep,
      racedef: racedef.toJS(),
      uma1: uma1.toJS(),
      uma2: uma2.toJS()
    });
    const enc = new TextEncoder();
    const stringStream = new ReadableStream({
      start(controller) {
        controller.enqueue(enc.encode(json));
        controller.close();
      }
    });
    const zipped = stringStream.pipeThrough(new CompressionStream("gzip"));
    const reader = zipped.getReader();
    let buf = new Uint8Array();
    let result;
    while (result = await reader.read()) {
      if (result.done) {
        return encodeURIComponent(btoa(String.fromCharCode(...buf)));
      } else {
        buf = new Uint8Array([...buf, ...result.value]);
      }
    }
  }
  async function deserialize(hash3) {
    const zipped = atob(decodeURIComponent(hash3));
    const buf = new Uint8Array(zipped.split("").map((c3) => c3.charCodeAt(0)));
    const stringStream = new ReadableStream({
      start(controller) {
        controller.enqueue(buf);
        controller.close();
      }
    });
    const unzipped = stringStream.pipeThrough(new DecompressionStream("gzip"));
    const reader = unzipped.getReader();
    const decoder = new TextDecoder();
    let json = "";
    let result;
    while (result = await reader.read()) {
      if (result.done) {
        try {
          const o4 = JSON.parse(json);
          return {
            courseId: o4.courseId,
            nsamples: o4.nsamples,
            usePosKeep: o4.usePosKeep,
            racedef: new RaceParams(o4.racedef),
            uma1: new HorseState(o4.uma1).set("skills", SkillSet(o4.uma1.skills)),
            uma2: new HorseState(o4.uma2).set("skills", SkillSet(o4.uma2.skills))
          };
        } catch (_2) {
          return {
            courseId: DEFAULT_COURSE_ID,
            nsamples: DEFAULT_SAMPLES,
            usePosKeep: true,
            racedef: new RaceParams(),
            uma1: new HorseState(),
            uma2: new HorseState()
          };
        }
      } else {
        json += decoder.decode(result.value);
      }
    }
  }
  function runComparison(nsamples, course, racedef, uma1, uma2, options) {
    const standard = new RaceSolverBuilder(nsamples).seed(2615953739).course(course).mood(racedef.mood).ground(racedef.ground).weather(racedef.weather).season(racedef.season).time(racedef.time);
    const compare = standard.fork();
    standard.horse(uma1);
    compare.horse(uma2);
    const common = uma1.skills.intersect(uma2.skills).toArray().sort((a5, b4) => +a5 - +b4);
    const commonIdx = (id3) => {
      let i4 = common.indexOf(id3);
      return i4 > -1 ? i4 : common.length;
    };
    const sort3 = (a5, b4) => commonIdx(a5) - commonIdx(b4) || +a5 - +b4;
    uma1.skills.toArray().sort(sort3).forEach((id3) => standard.addSkill(id3));
    uma2.skills.toArray().sort(sort3).forEach((id3) => compare.addSkill(id3));
    if (false) {
      standard.withAsiwotameru().withStaminaSyoubu();
      compare.withAsiwotameru().withStaminaSyoubu();
    }
    if (options.usePosKeep) {
      standard.useDefaultPacer();
      compare.useDefaultPacer();
    }
    const skillPos1 = /* @__PURE__ */ new Map(), skillPos2 = /* @__PURE__ */ new Map();
    function getActivator(skillSet) {
      return function(s3, id3) {
        if (id3 != "asitame" && id3 != "staminasyoubu") {
          if (!skillSet.has(id3))
            skillSet.set(id3, []);
          skillSet.get(id3).push([s3.pos, 0]);
        }
      };
    }
    function getDeactivator(skillSet) {
      return function(s3, id3) {
        if (id3 != "asitame" && id3 != "staminasyoubu") {
          const ar = skillSet.get(id3);
          ar[ar.length - 1][1] = s3.pos;
        }
      };
    }
    standard.onSkillActivate(getActivator(skillPos1));
    standard.onSkillDeactivate(getDeactivator(skillPos1));
    compare.onSkillActivate(getActivator(skillPos2));
    compare.onSkillDeactivate(getDeactivator(skillPos2));
    let a4 = standard.build(), b3 = compare.build();
    let ai = 1, bi = 0;
    let sign = 1;
    const diff = [];
    let min4 = Infinity, max5 = -Infinity, estMean, estMedian, bestMeanDiff = Infinity, bestMedianDiff = Infinity;
    let minrun, maxrun, meanrun, medianrun;
    const sampleCutoff = Math.max(Math.floor(nsamples * 0.8), nsamples - 200);
    let retry = false;
    for (let i4 = 0; i4 < nsamples; ++i4) {
      const s1 = a4.next(retry).value;
      const s22 = b3.next(retry).value;
      const data = { t: [[], []], p: [[], []], v: [[], []], hp: [[], []], sk: [null, null], sdly: [0, 0] };
      while (s22.pos < course.distance) {
        s22.step(1 / 15);
        data.t[ai].push(s22.accumulatetime.t);
        data.p[ai].push(s22.pos);
        data.v[ai].push(s22.currentSpeed + (s22.modifiers.currentSpeed.acc + s22.modifiers.currentSpeed.err));
        data.hp[ai].push(s22.hp.hp);
      }
      data.sdly[ai] = s22.startDelay;
      data.sk[1] = new Map(skillPos2);
      skillPos2.clear();
      while (s1.accumulatetime.t < s22.accumulatetime.t) {
        s1.step(1 / 15);
        data.t[bi].push(s1.accumulatetime.t);
        data.p[bi].push(s1.pos);
        data.v[bi].push(s1.currentSpeed + (s1.modifiers.currentSpeed.acc + s1.modifiers.currentSpeed.err));
        data.hp[bi].push(s1.hp.hp);
      }
      const pos1 = s1.pos;
      while (s1.pos < course.distance) {
        s1.step(1 / 15);
        data.t[bi].push(s1.accumulatetime.t);
        data.p[bi].push(s1.pos);
        data.v[bi].push(s1.currentSpeed + (s1.modifiers.currentSpeed.acc + s1.modifiers.currentSpeed.err));
        data.hp[bi].push(s1.hp.hp);
      }
      data.sdly[bi] = s1.startDelay;
      data.sk[0] = new Map(skillPos1);
      skillPos1.clear();
      if (s22.pos < pos1) {
        [b3, a4] = [a4, b3];
        [bi, ai] = [ai, bi];
        sign *= -1;
        --i4;
        retry = true;
      } else {
        retry = false;
        const basinn = sign * (s22.pos - pos1) / 2.5;
        diff.push(basinn);
        if (basinn < min4) {
          min4 = basinn;
          minrun = data;
        }
        if (basinn > max5) {
          max5 = basinn;
          maxrun = data;
        }
        if (i4 == sampleCutoff) {
          diff.sort((a5, b4) => a5 - b4);
          estMean = diff.reduce((a5, b4) => a5 + b4) / diff.length;
          const mid = Math.floor(diff.length / 2);
          estMedian = mid > 0 && diff.length % 2 == 0 ? (diff[mid - 1] + diff[mid]) / 2 : diff[mid];
        }
        if (i4 >= sampleCutoff) {
          const meanDiff = Math.abs(basinn - estMean), medianDiff = Math.abs(basinn - estMedian);
          if (meanDiff < bestMeanDiff) {
            bestMeanDiff = meanDiff;
            meanrun = data;
          }
          if (medianDiff < bestMedianDiff) {
            bestMedianDiff = medianDiff;
            medianrun = data;
          }
        }
      }
    }
    diff.sort((a5, b4) => a5 - b4);
    return { results: diff, runData: { minrun, maxrun, meanrun, medianrun } };
  }
  var EMPTY_RESULTS_STATE = { courseId: DEFAULT_COURSE_ID, results: [], runData: null, chartData: null, displaying: "" };
  function updateResultsState(state, o4) {
    if (typeof o4 == "number") {
      return {
        courseId: o4,
        results: [],
        runData: null,
        chartData: null,
        displaying: ""
      };
    } else if (typeof o4 == "string") {
      return {
        courseId: state.courseId,
        results: state.results,
        runData: state.runData,
        chartData: state.runData[o4],
        displaying: o4
      };
    } else {
      return {
        courseId: state.courseId,
        results: o4.results,
        runData: o4.runData,
        chartData: o4.runData.meanrun,
        displaying: "meanrun"
      };
    }
  }
  var presets = [
    { type: 1 /* LOH */, date: "2025-08", courseId: 10105, season: 2 /* Summer */, Time: 2 /* Midday */ },
    { type: 0 /* CM */, date: "2025-07-25", courseId: 10906, ground: 2 /* Yielding */, weather: 2 /* Cloudy */, season: 2 /* Summer */, time: 2 /* Midday */ },
    { type: 0 /* CM */, date: "2025-06-21", courseId: 10606, ground: 1 /* Good */, weather: 1 /* Sunny */, season: 1 /* Spring */, time: 2 /* Midday */ }
  ].map((def) => ({
    type: def.type,
    date: new Date(def.date),
    courseId: def.courseId,
    racedef: new RaceParams({
      mood: 2,
      ground: def.type == 0 /* CM */ ? def.ground : 1 /* Good */,
      weather: def.type == 0 /* CM */ ? def.weather : 1 /* Sunny */,
      season: def.season,
      time: def.time,
      grade: 100 /* G1 */
    })
  })).sort((a4, b3) => +b3.date - +a4.date);
  function RacePresets(props) {
    const id3 = V();
    return /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("label", { for: id3 }, "Preset:"), /* @__PURE__ */ y("select", { id: id3, onChange: (e4) => {
      const i4 = +e4.currentTarget.value;
      i4 > -1 && props.set(presets[i4].courseId, presets[i4].racedef);
    } }, /* @__PURE__ */ y("option", { value: "-1" }), presets.map((p4, i4) => /* @__PURE__ */ y("option", { value: i4 }, p4.date.getFullYear() + "-" + (100 + p4.date.getUTCMonth() + 1).toString().slice(-2) + (p4.type == 0 /* CM */ ? " CM" : " LOH")))));
  }
  function App(props) {
    const [skillsOpen, setSkillsOpen] = h2(false);
    const [racedef, setRaceDef] = h2(() => new RaceParams());
    const [nsamples, setSamples] = h2(DEFAULT_SAMPLES);
    const [usePosKeep, togglePosKeep] = s2((b3, _2) => !b3, true);
    const [showHp, toggleShowHp] = s2((b3, _2) => !b3, false);
    const [{ courseId, results, runData, chartData, displaying }, setSimState] = s2(updateResultsState, EMPTY_RESULTS_STATE);
    const setCourseId = setSimState;
    const setResults = setSimState;
    const setChartData = setSimState;
    function racesetter(prop) {
      return (value) => setRaceDef(racedef.set(prop, value));
    }
    const course = F2(() => CourseHelpers.getCourse(courseId), [courseId]);
    const [uma1, setUma1] = h2(() => new HorseState());
    const [uma2, setUma2] = h2(() => new HorseState());
    const [currentIdx, setCurrentIdx] = h2(0);
    const [expanded, toggleExpand] = s2((s3, e4) => {
      e4.stopPropagation();
      return !s3;
    }, false);
    function loadState() {
      if (window.location.hash) {
        deserialize(window.location.hash.slice(1)).then((o4) => {
          setCourseId(o4.courseId);
          setSamples(o4.nsamples);
          if (o4.usePosKeep != usePosKeep)
            togglePosKeep(0);
          setRaceDef(o4.racedef);
          setUma1(o4.uma1);
          setUma2(o4.uma2);
        });
      }
    }
    p2(function() {
      loadState();
      window.addEventListener("hashchange", loadState);
    }, []);
    function copyStateUrl(e4) {
      e4.preventDefault();
      serialize(courseId, nsamples, usePosKeep, racedef, uma1, uma2).then((hash3) => {
        const url = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.navigator.clipboard.writeText(url + "#" + hash3);
      });
    }
    function copyUmaToRight() {
      setUma2(uma1);
    }
    function copyUmaToLeft() {
      setUma1(uma2);
    }
    const strings = { skillnames: {}, tracknames: TRACKNAMES_en };
    const langid = +(props.lang == "en");
    Object.keys(skillnames_default).forEach((id3) => strings.skillnames[id3] = skillnames_default[id3][langid]);
    function doComparison() {
      setResults(runComparison(nsamples, course, racedef, uma1, uma2, { usePosKeep }));
    }
    function rtMouseMove(pos) {
      if (chartData == null)
        return;
      document.getElementById("rtMouseOverBox").style.display = "block";
      const x3 = pos * course.distance;
      const i0 = binSearch(chartData.p[0], x3), i1 = binSearch(chartData.p[1], x3);
      document.getElementById("rtV1").textContent = `${chartData.v[0][i0].toFixed(2)} m/s  t=${chartData.t[0][i0].toFixed(2)} s  (${chartData.hp[0][i0].toFixed(0)} hp remaining)`;
      document.getElementById("rtV2").textContent = `${chartData.v[1][i1].toFixed(2)} m/s  t=${chartData.t[1][i1].toFixed(2)} s  (${chartData.hp[1][i1].toFixed(0)} hp remaining)`;
    }
    function rtMouseLeave() {
      document.getElementById("rtMouseOverBox").style.display = "none";
    }
    const mid = Math.floor(results.length / 2);
    const median = results.length % 2 == 0 ? (results[mid - 1] + results[mid]) / 2 : results[mid];
    const mean = results.reduce((a4, b3) => a4 + b3, 0) / results.length;
    const colors = [
      { stroke: "rgb(42, 119, 197)", fill: "rgba(42, 119, 197, 0.7)" },
      { stroke: "rgb(197, 42, 42)", fill: "rgba(197, 42, 42, 0.7)" }
    ];
    const skillActivations = chartData == null ? [] : chartData.sk.flatMap((a4, i4) => {
      return a4.keys().flatMap((id3) => {
        if (NO_SHOW.indexOf(skillmeta2(id3).iconId) > -1)
          return [];
        else
          return a4.get(id3).map((ar) => ({
            type: 2 /* Textbox */,
            color: colors[i4],
            text: skillnames_default[id3][0],
            regions: [{ start: ar[0], end: ar[1] }]
          }));
      }).toArray();
    });
    const umaTabs = /* @__PURE__ */ y(k, null, /* @__PURE__ */ y("div", { class: `umaTab ${currentIdx == 0 ? "selected" : ""}`, onClick: () => setCurrentIdx(0) }, "Umamusume 1"), /* @__PURE__ */ y("div", { class: `umaTab ${currentIdx == 1 ? "selected" : ""}`, onClick: () => setCurrentIdx(1) }, "Umamusume 2", /* @__PURE__ */ y("div", { id: "expandBtn", title: "Expand panel", onClick: toggleExpand }, "\u27E9")));
    return /* @__PURE__ */ y(Language.Provider, { value: props.lang }, /* @__PURE__ */ y(IntlProvider, { definition: strings }, /* @__PURE__ */ y("div", { id: "topPane", class: chartData ? "hasResults" : "" }, /* @__PURE__ */ y(RaceTrack, { courseid: courseId, width: 960, height: 240, xOffset: 20, yOffset: 15, yExtra: 20, mouseMove: rtMouseMove, mouseLeave: rtMouseLeave, regions: skillActivations }, /* @__PURE__ */ y(VelocityLines, { data: chartData, courseDistance: course.distance, width: 960, height: 250, xOffset: 20, showHp }), /* @__PURE__ */ y("g", { id: "rtMouseOverBox", style: "display:none" }, /* @__PURE__ */ y("text", { id: "rtV1", x: "25", y: "10", fill: "#2a77c5", "font-size": "10px" }), /* @__PURE__ */ y("text", { id: "rtV2", x: "25", y: "20", fill: "#c52a2a", "font-size": "10px" }))), /* @__PURE__ */ y("div", { id: "runPane" }, /* @__PURE__ */ y("label", { for: "nsamples" }, "Samples:"), /* @__PURE__ */ y("input", { type: "number", id: "nsamples", min: "1", max: "10000", value: nsamples, onInput: (e4) => setSamples(+e4.currentTarget.value) }), /* @__PURE__ */ y("div", null, /* @__PURE__ */ y("label", { for: "poskeep" }, "Simulate pos keep"), /* @__PURE__ */ y("input", { type: "checkbox", id: "poskeep", checked: usePosKeep, onClick: togglePosKeep })), /* @__PURE__ */ y("div", null, /* @__PURE__ */ y("label", { for: "showhp" }, "Show HP consumption"), /* @__PURE__ */ y("input", { type: "checkbox", id: "showhp", checked: showHp, onClick: toggleShowHp })), /* @__PURE__ */ y("button", { id: "run", onClick: doComparison, tabindex: 1 }, "COMPARE"), /* @__PURE__ */ y("a", { href: "#", onClick: copyStateUrl }, "Copy link"), /* @__PURE__ */ y(RacePresets, { set: (courseId2, racedef2) => {
      setCourseId(courseId2);
      setRaceDef(racedef2);
    } })), /* @__PURE__ */ y("div", { id: "buttonsRow" }, /* @__PURE__ */ y(TrackSelect, { key: courseId, courseid: courseId, setCourseid: setCourseId, tabindex: 2 }), /* @__PURE__ */ y("div", { id: "buttonsRowSpace" }), /* @__PURE__ */ y(TimeOfDaySelect, { value: racedef.time, set: racesetter("time") }), /* @__PURE__ */ y("div", null, /* @__PURE__ */ y(GroundSelect, { value: racedef.ground, set: racesetter("ground") }), /* @__PURE__ */ y(WeatherSelect, { value: racedef.weather, set: racesetter("weather") })), /* @__PURE__ */ y(SeasonSelect, { value: racedef.season, set: racesetter("season") }))), results.length > 0 && /* @__PURE__ */ y("div", { id: "resultsPaneWrapper" }, /* @__PURE__ */ y("div", { id: "resultsPane" }, /* @__PURE__ */ y("table", { id: "resultsSummary" }, /* @__PURE__ */ y("tfoot", null, /* @__PURE__ */ y("tr", null, Object.entries({
      minrun: ["Minimum", "Set chart display to the run with minimum bashin difference"],
      maxrun: ["Maximum", "Set chart display to the run with maximum bashin difference"],
      meanrun: ["Mean", "Set chart display to a run representative of the mean bashin difference"],
      medianrun: ["Median", "Set chart display to a run representative of the median bashin difference"]
    }).map(
      ([k3, label]) => /* @__PURE__ */ y("th", { scope: "col", class: displaying == k3 ? "selected" : "", title: label[1], onClick: () => setChartData(k3) }, label[0])
    ))), /* @__PURE__ */ y("tbody", null, /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("td", null, results[0].toFixed(2), /* @__PURE__ */ y("span", { class: "unit-basinn" }, true ? "L" : "\u30D0\u8EAB")), /* @__PURE__ */ y("td", null, results[results.length - 1].toFixed(2), /* @__PURE__ */ y("span", { class: "unit-basinn" }, true ? "L" : "\u30D0\u8EAB")), /* @__PURE__ */ y("td", null, mean.toFixed(2), /* @__PURE__ */ y("span", { class: "unit-basinn" }, true ? "L" : "\u30D0\u8EAB")), /* @__PURE__ */ y("td", null, median.toFixed(2), /* @__PURE__ */ y("span", { class: "unit-basinn" }, true ? "L" : "\u30D0\u8EAB"))))), /* @__PURE__ */ y("div", { id: "resultsHelp" }, "Negative numbers mean ", /* @__PURE__ */ y("strong", { style: "color:#2a77c5" }, "Umamusume 1"), " is faster, positive numbers mean ", /* @__PURE__ */ y("strong", { style: "color:#c52a2a" }, "Umamusume 2"), " is faster."), /* @__PURE__ */ y(Histogram, { width: 500, height: 333, data: results })), /* @__PURE__ */ y("div", { id: "infoTables" }, /* @__PURE__ */ y("table", null, /* @__PURE__ */ y("caption", { style: "color:#2a77c5" }, "Umamusume 1"), /* @__PURE__ */ y("tbody", null, /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("th", null, "Time to finish"), /* @__PURE__ */ y("td", null, chartData.t[0][chartData.t[0].length - 1].toFixed(4) + "\u202Fs")), /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("th", null, "Start delay"), /* @__PURE__ */ y("td", null, chartData.sdly[0].toFixed(4) + "\u202Fs")), /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("th", null, "Top speed"), /* @__PURE__ */ y("td", null, chartData.v[0].reduce((a4, b3) => Math.max(a4, b3), 0).toFixed(2) + "\u202Fm/s"))), chartData.sk[0].size > 0 && /* @__PURE__ */ y("tbody", null, chartData.sk[0].entries().map(([id3, ars]) => ars.flatMap((pos) => /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("th", null, skillnames_default[id3][0]), /* @__PURE__ */ y("td", null, `${pos[0].toFixed(2)}\u202Fm \u2013 ${pos[1].toFixed(2)}\u202Fm`)))).toArray())), /* @__PURE__ */ y("table", null, /* @__PURE__ */ y("caption", { style: "color:#c52a2a" }, "Umamusume 2"), /* @__PURE__ */ y("tbody", null, /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("th", null, "Time to finish"), /* @__PURE__ */ y("td", null, chartData.t[1][chartData.t[1].length - 1].toFixed(4) + "\u202Fs")), /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("th", null, "Start delay"), /* @__PURE__ */ y("td", null, chartData.sdly[1].toFixed(4) + "\u202Fs")), /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("th", null, "Top speed"), /* @__PURE__ */ y("td", null, chartData.v[1].reduce((a4, b3) => Math.max(a4, b3), 0).toFixed(2) + "\u202Fm/s"))), chartData.sk[1].size > 0 && /* @__PURE__ */ y("tbody", null, chartData.sk[1].entries().map(([id3, ars]) => ars.flatMap((pos) => /* @__PURE__ */ y("tr", null, /* @__PURE__ */ y("th", null, skillnames_default[id3][0]), /* @__PURE__ */ y("td", null, `${pos[0].toFixed(2)}\u202Fm \u2013 ${pos[1].toFixed(2)}\u202Fm`)))).toArray())))), expanded && /* @__PURE__ */ y("div", { id: "umaPane" }), /* @__PURE__ */ y("div", { id: expanded ? "umaOverlay" : "umaPane" }, /* @__PURE__ */ y("div", { class: !expanded && currentIdx == 0 ? "selected" : "" }, /* @__PURE__ */ y(HorseDef, { key: uma1.outfitId, state: uma1, setState: setUma1, courseDistance: course.distance, tabstart: () => 4 }, expanded ? "Umamusume 1" : umaTabs)), expanded && /* @__PURE__ */ y("div", { id: "copyUmaButtons" }, /* @__PURE__ */ y("div", { id: "copyUmaToRight", onClick: copyUmaToRight }), /* @__PURE__ */ y("div", { id: "copyUmaToLeft", onClick: copyUmaToLeft })), /* @__PURE__ */ y("div", { class: !expanded && currentIdx == 1 ? "selected" : "" }, /* @__PURE__ */ y(HorseDef, { key: uma2.outfitId, state: uma2, setState: setUma2, courseDistance: course.distance, tabstart: () => 4 + horseDefTabs() }, expanded ? "Umamusume 2" : umaTabs)), expanded && /* @__PURE__ */ y("div", { id: "closeUmaOverlay", title: "Close panel", onClick: toggleExpand }, "\u2715"))));
  }
  B(/* @__PURE__ */ y(App, { lang: "en-ja" }), document.getElementById("app"));
})();
/*! Bundled license information:

immutable/dist/immutable.es.js:
  (**
   * @license
   * MIT License
   * 
   * Copyright (c) 2014-present, Lee Byron and other contributors.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)
*/
