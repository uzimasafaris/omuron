(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [38],
  {
    2711: function (e) {
      e.exports = (function (e) {
        function t(r) {
          if (n[r]) return n[r].exports;
          var o = (n[r] = { exports: {}, id: r, loaded: !1 });
          return (
            e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
          );
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
      })([
        function (e, t, n) {
          "use strict";
          function r(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var o =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              },
            a = (r(n(1)), n(6)),
            i = r(a),
            s = r(n(7)),
            l = r(n(8)),
            u = r(n(9)),
            c = r(n(10)),
            d = r(n(11)),
            f = r(n(14)),
            p = [],
            m = !1,
            b = {
              offset: 120,
              delay: 0,
              easing: "ease",
              duration: 400,
              disable: !1,
              once: !1,
              startEvent: "DOMContentLoaded",
              throttleDelay: 99,
              debounceDelay: 50,
              disableMutationObserver: !1,
            },
            v = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if ((e && (m = !0), m))
                return (p = (0, d.default)(p, b)), (0, c.default)(p, b.once), p;
            },
            h = function () {
              (p = (0, f.default)()), v();
            },
            g = function () {
              p.forEach(function (e, t) {
                e.node.removeAttribute("data-aos"),
                  e.node.removeAttribute("data-aos-easing"),
                  e.node.removeAttribute("data-aos-duration"),
                  e.node.removeAttribute("data-aos-delay");
              });
            };
          e.exports = {
            init: function (e) {
              (b = o(b, e)), (p = (0, f.default)());
              var t,
                n = document.all && !window.atob;
              return !0 === (t = b.disable) ||
                ("mobile" === t && u.default.mobile()) ||
                ("phone" === t && u.default.phone()) ||
                ("tablet" === t && u.default.tablet()) ||
                ("function" == typeof t && !0 === t()) ||
                n
                ? g()
                : (b.disableMutationObserver ||
                    l.default.isSupported() ||
                    (console.info(
                      '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                    ),
                    (b.disableMutationObserver = !0)),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", b.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", b.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", b.delay),
                  "DOMContentLoaded" === b.startEvent &&
                  ["complete", "interactive"].indexOf(document.readyState) > -1
                    ? v(!0)
                    : "load" === b.startEvent
                    ? window.addEventListener(b.startEvent, function () {
                        v(!0);
                      })
                    : document.addEventListener(b.startEvent, function () {
                        v(!0);
                      }),
                  window.addEventListener(
                    "resize",
                    (0, s.default)(v, b.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "orientationchange",
                    (0, s.default)(v, b.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "scroll",
                    (0, i.default)(function () {
                      (0, c.default)(p, b.once);
                    }, b.throttleDelay)
                  ),
                  b.disableMutationObserver || l.default.ready("[data-aos]", h),
                  p);
            },
            refresh: v,
            refreshHard: h,
          };
        },
        function (e, t) {},
        ,
        ,
        ,
        ,
        function (e, t) {
          (function (t) {
            "use strict";
            function n(e) {
              var t = void 0 === e ? "undefined" : o(e);
              return !!e && ("object" == t || "function" == t);
            }
            function r(e) {
              if ("number" == typeof e) return e;
              if (
                "symbol" == (void 0 === (t = e) ? "undefined" : o(t)) ||
                (t &&
                  "object" == (void 0 === t ? "undefined" : o(t)) &&
                  v.call(t) == s)
              )
                return i;
              if (n(e)) {
                var t,
                  r = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = n(r) ? r + "" : r;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              var a = c.test((e = e.replace(l, "")));
              return a || d.test(e)
                ? f(e.slice(2), a ? 2 : 8)
                : u.test(e)
                ? i
                : +e;
            }
            var o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              a = "Expected a function",
              i = NaN,
              s = "[object Symbol]",
              l = /^\s+|\s+$/g,
              u = /^[-+]0x[0-9a-f]+$/i,
              c = /^0b[01]+$/i,
              d = /^0o[0-7]+$/i,
              f = parseInt,
              p =
                "object" == (void 0 === t ? "undefined" : o(t)) &&
                t &&
                t.Object === Object &&
                t,
              m =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : o(self)) &&
                self &&
                self.Object === Object &&
                self,
              b = p || m || Function("return this")(),
              v = Object.prototype.toString,
              h = Math.max,
              g = Math.min,
              y = function () {
                return b.Date.now();
              };
            e.exports = function (e, t, o) {
              var i = !0,
                s = !0;
              if ("function" != typeof e) throw TypeError(a);
              return (
                n(o) &&
                  ((i = "leading" in o ? !!o.leading : i),
                  (s = "trailing" in o ? !!o.trailing : s)),
                (function (e, t, o) {
                  function i(t) {
                    var n = d,
                      r = f;
                    return (d = f = void 0), (w = t), (m = e.apply(r, n));
                  }
                  function s(e) {
                    var n = e - v,
                      r = e - w;
                    return void 0 === v || n >= t || n < 0 || (_ && r >= p);
                  }
                  function l() {
                    var e,
                      n,
                      r,
                      o = y();
                    return s(o)
                      ? u(o)
                      : void (b = setTimeout(
                          l,
                          ((e = o - v),
                          (n = o - w),
                          (r = t - e),
                          _ ? g(r, p - n) : r)
                        ));
                  }
                  function u(e) {
                    return (b = void 0), k && d ? i(e) : ((d = f = void 0), m);
                  }
                  function c() {
                    var e,
                      n = y(),
                      r = s(n);
                    if (((d = arguments), (f = this), (v = n), r)) {
                      if (void 0 === b)
                        return (
                          (w = e = v), (b = setTimeout(l, t)), x ? i(e) : m
                        );
                      if (_) return (b = setTimeout(l, t)), i(v);
                    }
                    return void 0 === b && (b = setTimeout(l, t)), m;
                  }
                  var d,
                    f,
                    p,
                    m,
                    b,
                    v,
                    w = 0,
                    x = !1,
                    _ = !1,
                    k = !0;
                  if ("function" != typeof e) throw TypeError(a);
                  return (
                    (t = r(t) || 0),
                    n(o) &&
                      ((x = !!o.leading),
                      (p = (_ = "maxWait" in o) ? h(r(o.maxWait) || 0, t) : p),
                      (k = "trailing" in o ? !!o.trailing : k)),
                    (c.cancel = function () {
                      void 0 !== b && clearTimeout(b),
                        (w = 0),
                        (d = v = f = b = void 0);
                    }),
                    (c.flush = function () {
                      return void 0 === b ? m : u(y());
                    }),
                    c
                  );
                })(e, t, { leading: i, maxWait: t, trailing: s })
              );
            };
          }).call(
            t,
            (function () {
              return this;
            })()
          );
        },
        function (e, t) {
          (function (t) {
            "use strict";
            function n(e) {
              var t = void 0 === e ? "undefined" : o(e);
              return !!e && ("object" == t || "function" == t);
            }
            function r(e) {
              if ("number" == typeof e) return e;
              if (
                "symbol" == (void 0 === (t = e) ? "undefined" : o(t)) ||
                (t &&
                  "object" == (void 0 === t ? "undefined" : o(t)) &&
                  b.call(t) == i)
              )
                return a;
              if (n(e)) {
                var t,
                  r = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = n(r) ? r + "" : r;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              var f = u.test((e = e.replace(s, "")));
              return f || c.test(e)
                ? d(e.slice(2), f ? 2 : 8)
                : l.test(e)
                ? a
                : +e;
            }
            var o =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              a = NaN,
              i = "[object Symbol]",
              s = /^\s+|\s+$/g,
              l = /^[-+]0x[0-9a-f]+$/i,
              u = /^0b[01]+$/i,
              c = /^0o[0-7]+$/i,
              d = parseInt,
              f =
                "object" == (void 0 === t ? "undefined" : o(t)) &&
                t &&
                t.Object === Object &&
                t,
              p =
                "object" ==
                  ("undefined" == typeof self ? "undefined" : o(self)) &&
                self &&
                self.Object === Object &&
                self,
              m = f || p || Function("return this")(),
              b = Object.prototype.toString,
              v = Math.max,
              h = Math.min,
              g = function () {
                return m.Date.now();
              };
            e.exports = function (e, t, o) {
              function a(t) {
                var n = c,
                  r = d;
                return (c = d = void 0), (y = t), (p = e.apply(r, n));
              }
              function i(e) {
                var n = e - b,
                  r = e - y;
                return void 0 === b || n >= t || n < 0 || (x && r >= f);
              }
              function s() {
                var e,
                  n,
                  r,
                  o = g();
                return i(o)
                  ? l(o)
                  : void (m = setTimeout(
                      s,
                      ((e = o - b),
                      (n = o - y),
                      (r = t - e),
                      x ? h(r, f - n) : r)
                    ));
              }
              function l(e) {
                return (m = void 0), _ && c ? a(e) : ((c = d = void 0), p);
              }
              function u() {
                var e,
                  n = g(),
                  r = i(n);
                if (((c = arguments), (d = this), (b = n), r)) {
                  if (void 0 === m)
                    return (y = e = b), (m = setTimeout(s, t)), w ? a(e) : p;
                  if (x) return (m = setTimeout(s, t)), a(b);
                }
                return void 0 === m && (m = setTimeout(s, t)), p;
              }
              var c,
                d,
                f,
                p,
                m,
                b,
                y = 0,
                w = !1,
                x = !1,
                _ = !0;
              if ("function" != typeof e)
                throw TypeError("Expected a function");
              return (
                (t = r(t) || 0),
                n(o) &&
                  ((w = !!o.leading),
                  (f = (x = "maxWait" in o) ? v(r(o.maxWait) || 0, t) : f),
                  (_ = "trailing" in o ? !!o.trailing : _)),
                (u.cancel = function () {
                  void 0 !== m && clearTimeout(m),
                    (y = 0),
                    (c = b = d = m = void 0);
                }),
                (u.flush = function () {
                  return void 0 === m ? p : l(g());
                }),
                u
              );
            };
          }).call(
            t,
            (function () {
              return this;
            })()
          );
        },
        function (e, t) {
          "use strict";
          function n() {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          }
          function r(e) {
            e &&
              e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                  n = Array.prototype.slice.call(e.removedNodes);
                if (
                  (function e(t) {
                    var n = void 0,
                      r = void 0;
                    for (n = 0; n < t.length; n += 1)
                      if (
                        ((r = t[n]).dataset && r.dataset.aos) ||
                        (r.children && e(r.children))
                      )
                        return !0;
                    return !1;
                  })(t.concat(n))
                )
                  return o();
              });
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = function () {};
          t.default = {
            isSupported: function () {
              return !!n();
            },
            ready: function (e, t) {
              var a = window.document,
                i = new (n())(r);
              (o = t),
                i.observe(a.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            },
          };
        },
        function (e, t) {
          "use strict";
          function n() {
            return (
              navigator.userAgent || navigator.vendor || window.opera || ""
            );
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            o =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            a =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            i =
              /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            s =
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw TypeError("Cannot call a class as a function");
                })(this, e);
              }
              return (
                r(e, [
                  {
                    key: "phone",
                    value: function () {
                      var e = n();
                      return !(!o.test(e) && !a.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "mobile",
                    value: function () {
                      var e = n();
                      return !(!i.test(e) && !s.test(e.substr(0, 4)));
                    },
                  },
                  {
                    key: "tablet",
                    value: function () {
                      return this.mobile() && !this.phone();
                    },
                  },
                ]),
                e
              );
            })();
          t.default = new l();
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var n = function (e, t, n) {
            var r = e.node.getAttribute("data-aos-once");
            t > e.position
              ? e.node.classList.add("aos-animate")
              : void 0 === r ||
                ("false" !== r && (n || "true" === r)) ||
                e.node.classList.remove("aos-animate");
          };
          t.default = function (e, t) {
            var r = window.pageYOffset,
              o = window.innerHeight;
            e.forEach(function (e, a) {
              n(e, o + r, t);
            });
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r,
            o = (r = n(12)) && r.__esModule ? r : { default: r };
          t.default = function (e, t) {
            return (
              e.forEach(function (e, n) {
                e.node.classList.add("aos-init"),
                  (e.position = (0, o.default)(e.node, t.offset));
              }),
              e
            );
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r,
            o = (r = n(13)) && r.__esModule ? r : { default: r };
          t.default = function (e, t) {
            var n = 0,
              r = 0,
              a = window.innerHeight,
              i = {
                offset: e.getAttribute("data-aos-offset"),
                anchor: e.getAttribute("data-aos-anchor"),
                anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (i.offset && !isNaN(i.offset) && (r = parseInt(i.offset)),
              i.anchor &&
                document.querySelectorAll(i.anchor) &&
                (e = document.querySelectorAll(i.anchor)[0]),
              (n = (0, o.default)(e).top),
              i.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                n += e.offsetHeight / 2;
                break;
              case "bottom-bottom":
                n += e.offsetHeight;
                break;
              case "top-center":
                n += a / 2;
                break;
              case "bottom-center":
                n += a / 2 + e.offsetHeight;
                break;
              case "center-center":
                n += a / 2 + e.offsetHeight / 2;
                break;
              case "top-top":
                n += a;
                break;
              case "bottom-top":
                n += e.offsetHeight + a;
                break;
              case "center-top":
                n += e.offsetHeight / 2 + a;
            }
            return i.anchorPlacement || i.offset || isNaN(t) || (r = t), n + r;
          };
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e) {
              for (
                var t = 0, n = 0;
                e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

              )
                (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                  (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                  (e = e.offsetParent);
              return { top: n, left: t };
            });
        },
        function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function (e) {
              return (
                (e = e || document.querySelectorAll("[data-aos]")),
                Array.prototype.map.call(e, function (e) {
                  return { node: e };
                })
              );
            });
        },
      ]);
    },
    4184: function (e, t) {
      var n;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var a = typeof n;
              if ("string" === a || "number" === a) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var i = o.apply(null, n);
                  i && e.push(i);
                }
              } else if ("object" === a) {
                if (
                  n.toString !== Object.prototype.toString &&
                  !n.toString.toString().includes("[native code]")
                ) {
                  e.push(n.toString());
                  continue;
                }
                for (var s in n) r.call(n, s) && n[s] && e.push(s);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 !==
              (n = function () {
                return o;
              }.apply(t, [])) && (e.exports = n);
      })();
    },
    2268: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "team.html",
        function () {
          return n(7178);
        },
      ]);
    },
    8653: function (e, t, n) {
      "use strict";
      var r = n(5893),
        o = n(3685),
        a = n(1664),
        i = n.n(a),
        s = n(1163),
        l = n(7294),
        u = n(6637),
        c = n.n(u);
      let d = () => {
        let e = (0, s.useRouter)(),
          [t, n] = (0, l.useState)(""),
          [a, u] = (0, l.useState)(""),
          [d, f] = (0, l.useState)(""),
          [p, m] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            let t = o.fr.filter((e) => "/" !== e.path).filter((e) => !e.hide),
              r = t.find((t) => e.pathname.includes(t.path));
            n(r.name),
              m(["/publications", "/csr", "/careers"].includes(r.path)),
              console.log("Router is", e);
          }, [e]),
          (0, l.useEffect)(() => {
            let t = o.fr.filter((e) => "/" !== e.path).filter((e) => !e.hide),
              n = t.find((t) => e.pathname.includes(t.path));
            u(n.longDesc), f(n.shortDesc);
          }, [e.pathname]),
          (0, r.jsx)("nav", {
            className: ""
              .concat(c().nav, " ")
              .concat(p ? c().withBackground : ""),
            children: (0, r.jsxs)("div", {
              className: c().nav_content,
              children: [
                (0, r.jsx)("div", {
                  className: c().pageLink,
                  children: (0, r.jsx)(i(), { href: "", children: t }),
                }),
                (0, r.jsxs)("div", {
                  className: c().pageDescription,
                  children: [
                    (0, r.jsx)("p", { className: c().longDesc, children: a }),
                    (0, r.jsx)("p", { className: c().shortDesc, children: d }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      t.Z = d;
    },
    7178: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return g;
          },
          default: function () {
            return y;
          },
        });
      var r = n(5893),
        o = n(8653);
      n(1952);
      var a = n(2096),
        i = n(5675),
        s = n.n(i),
        l = n(1664),
        u = n.n(l),
        c = n(1122),
        d = n.n(c);
      n(4184);
      var f = n(7294),
        p = n(2711),
        m = n.n(p);
      n(3497);
      var b = function (e) {
          let { teamMembers: t, image_url: n } = e,
            { Partners: o, Lawyers: i, Administrators: l } = t;
          (0, f.useEffect)(() => {
            m().init({ duration: 2e3 });
          });
          let c = (e) =>
            (0, r.jsx)(u(), {
              href: "/team/".concat(e._id),
              children: (0, r.jsxs)(
                "div",
                {
                  className: d().teamMember,
                  "data-aos": "zoom-in",
                  children: [
                    (0, r.jsx)(s(), {
                      src: e.image_url,
                      width: 280,
                      height: 360,
                      style: { objectFit: "cover" },
                      alt: "Picture of ".concat(e.name),
                    }),
                    (0, r.jsx)("p", { children: e.name }),
                    (0, r.jsx)("p", { children: e.position }),
                  ],
                },
                e._id
              ),
            });
          return (0, r.jsxs)(a.O.Group, {
            children: [
              (0, r.jsx)("div", {
                className: d().tabContainer,
                children: (0, r.jsxs)(a.O.List, {
                  className: d().line,
                  children: [
                    (0, r.jsx)(a.O, {
                      className: (e) => {
                        let { selected: t } = e;
                        return "".concat(t ? d().active : d().inactive);
                      },
                      children: "Partners",
                    }),
                    (0, r.jsx)(a.O, {
                      className: (e) => {
                        let { selected: t } = e;
                        return "".concat(t ? d().active : d().inactive);
                      },
                      children: "Lawyers",
                    }),
                    (0, r.jsx)(a.O, {
                      className: (e) => {
                        let { selected: t } = e;
                        return "".concat(t ? d().active : d().inactive);
                      },
                      children: "Admin",
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)(a.O.Panels, {
                children: [
                  (0, r.jsx)(a.O.Panel, {
                    className: d().gallery,
                    children: o
                      .sort((e, t) => e.feOrder - t.feOrder)
                      .map((e, t) => c(e)),
                  }),
                  (0, r.jsx)(a.O.Panel, {
                    className: d().gallery,
                    children: i
                      .sort((e, t) => e.feOrder - t.feOrder)
                      .map((e, t) => c(e)),
                  }),
                  (0, r.jsx)(a.O.Panel, {
                    className: d().gallery,
                    children: l
                      .sort((e, t) => e.feOrder - t.feOrder)
                      .map((e, t) => c(e)),
                  }),
                ],
              }),
            ],
          });
        },
        v = n(1148),
        h = n(3685),
        g = !0,
        y = function (e) {
          let { teamMembers: t } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(v.Z, {
                title: "SIGNUM ADVOCATES | ".concat(h.XF.Team.name),
                description: h.XF.Team.longDesc,
                websiteUrl: "".concat(h._n).concat(h.XF.Team.path),
              }),
              (0, r.jsx)(o.Z, {}),
              (0, r.jsx)(b, { teamMembers: t }),
            ],
          });
        };
    },
    3497: function () {},
    6637: function (e) {
      e.exports = {
        nav: "style_nav__mhziF",
        withBackground: "style_withBackground__tMv_r",
        logo: "style_logo__Cj1J6",
        nav_content: "style_nav_content__z0bHD",
        pageLink: "style_pageLink__jhScr",
        pageDescription: "style_pageDescription__z8Rp7",
        longDesc: "style_longDesc__uBywf",
        shortDesc: "style_shortDesc__84O0h",
      };
    },
    1122: function (e) {
      e.exports = {
        tabContainer: "style_tabContainer__KytP2",
        active: "style_active__b_aIM",
        inactive: "style_inactive__6qspN",
        line: "style_line__SJve5",
        gallery: "style_gallery__abF5t",
        teamMember: "style_teamMember__ARkrY",
      };
    },
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
    2096: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return es;
        },
      });
      var r,
        o,
        a,
        i,
        s,
        l,
        u,
        c,
        d,
        f,
        p,
        m,
        b = n(7294);
      function v(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let r = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(r, v), r);
      }
      var h =
          (((r = h || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        g =
          (((o = g || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function y({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: o,
        visible: a = !0,
        name: i,
      }) {
        let s = x(t, e);
        if (a) return w(s, n, r, i);
        let l = null != o ? o : 0;
        if (2 & l) {
          let { static: e = !1, ...t } = s;
          if (e) return w(t, n, r, i);
        }
        if (1 & l) {
          let { unmount: e = !0, ...t } = s;
          return v(e ? 0 : 1, {
            0: () => null,
            1: () =>
              w({ ...t, hidden: !0, style: { display: "none" } }, n, r, i),
          });
        }
        return w(s, n, r, i);
      }
      function w(e, t = {}, n, r) {
        var o;
        let {
            as: a = n,
            children: i,
            refName: s = "ref",
            ...l
          } = O(e, ["unmount", "static"]),
          u = void 0 !== e.ref ? { [s]: e.ref } : {},
          c = "function" == typeof i ? i(t) : i;
        "className" in l &&
          l.className &&
          "function" == typeof l.className &&
          (l.className = l.className(t));
        let d = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
          e && (d["data-headlessui-state"] = n.join(" "));
        }
        if (a === b.Fragment && Object.keys(k(l)).length > 0) {
          if (!(0, b.isValidElement)(c) || (Array.isArray(c) && c.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(l).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = (function (...e) {
            return e.filter(Boolean).join(" ");
          })(null == (o = c.props) ? void 0 : o.className, l.className);
          return (0, b.cloneElement)(
            c,
            Object.assign(
              {},
              x(c.props, k(O(l, ["ref"]))),
              d,
              u,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let n of e)
                          null != n &&
                            ("function" == typeof n ? n(t) : (n.current = t));
                      },
                };
              })(c.ref, u.ref),
              e ? { className: e } : {}
            )
          );
        }
        return (0, b.createElement)(
          a,
          Object.assign(
            {},
            O(l, ["ref"]),
            a !== b.Fragment && u,
            a !== b.Fragment && d
          ),
          c
        );
      }
      function x(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function _(e) {
        var t;
        return Object.assign((0, b.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function k(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function O(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      var E = Object.defineProperty,
        j = (e, t, n) =>
          t in e
            ? E(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        S = (e, t, n) => (j(e, "symbol" != typeof t ? t + "" : t, n), n);
      let N = new (class {
          constructor() {
            S(this, "current", this.detect()),
              S(this, "handoffState", "pending"),
              S(this, "currentId", 0);
          }
          set(e) {
            this.current !== e &&
              ((this.handoffState = "pending"),
              (this.currentId = 0),
              (this.current = e));
          }
          reset() {
            this.set(this.detect());
          }
          nextId() {
            return ++this.currentId;
          }
          get isServer() {
            return "server" === this.current;
          }
          get isClient() {
            return "client" === this.current;
          }
          detect() {
            return "undefined" == typeof window ||
              "undefined" == typeof document
              ? "server"
              : "client";
          }
          handoff() {
            "pending" === this.handoffState && (this.handoffState = "complete");
          }
          get isHandoffComplete() {
            return "complete" === this.handoffState;
          }
        })(),
        P = (e, t) => {
          N.isServer ? (0, b.useEffect)(e, t) : (0, b.useLayoutEffect)(e, t);
        },
        T =
          null != (m = b.useId)
            ? m
            : function () {
                let e = (function () {
                    let [e, t] = (0, b.useState)(N.isHandoffComplete);
                    return (
                      e && !1 === N.isHandoffComplete && t(!1),
                      (0, b.useEffect)(() => {
                        !0 !== e && t(!0);
                      }, [e]),
                      (0, b.useEffect)(() => N.handoff(), []),
                      e
                    );
                  })(),
                  [t, n] = b.useState(e ? () => N.nextId() : null);
                return (
                  P(() => {
                    null === t && n(N.nextId());
                  }, [t]),
                  null != t ? "" + t : void 0
                );
              };
      var A =
        (((a = A || {}).Space = " "),
        (a.Enter = "Enter"),
        (a.Escape = "Escape"),
        (a.Backspace = "Backspace"),
        (a.Delete = "Delete"),
        (a.ArrowLeft = "ArrowLeft"),
        (a.ArrowUp = "ArrowUp"),
        (a.ArrowRight = "ArrowRight"),
        (a.ArrowDown = "ArrowDown"),
        (a.Home = "Home"),
        (a.End = "End"),
        (a.PageUp = "PageUp"),
        (a.PageDown = "PageDown"),
        (a.Tab = "Tab"),
        a);
      let I = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var M =
          (((i = M || {})[(i.First = 1)] = "First"),
          (i[(i.Previous = 2)] = "Previous"),
          (i[(i.Next = 4)] = "Next"),
          (i[(i.Last = 8)] = "Last"),
          (i[(i.WrapAround = 16)] = "WrapAround"),
          (i[(i.NoScroll = 32)] = "NoScroll"),
          i),
        D =
          (((s = D || {})[(s.Error = 0)] = "Error"),
          (s[(s.Overflow = 1)] = "Overflow"),
          (s[(s.Success = 2)] = "Success"),
          (s[(s.Underflow = 3)] = "Underflow"),
          s),
        F =
          (((l = F || {})[(l.Previous = -1)] = "Previous"),
          (l[(l.Next = 1)] = "Next"),
          l),
        L =
          (((u = L || {})[(u.Strict = 0)] = "Strict"),
          (u[(u.Loose = 1)] = "Loose"),
          u);
      function C(e, t = (e) => e) {
        return e.slice().sort((e, n) => {
          let r = t(e),
            o = t(n);
          if (null === r || null === o) return 0;
          let a = r.compareDocumentPosition(o);
          return a & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : a & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function R(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
      ) {
        var a, i, s;
        let l = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          u = Array.isArray(e)
            ? n
              ? C(e)
              : e
            : (function (e = document.body) {
                return null == e
                  ? []
                  : Array.from(e.querySelectorAll(I)).sort((e, t) =>
                      Math.sign(
                        (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (t.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(e);
        o.length > 0 && u.length > 1 && (u = u.filter((e) => !o.includes(e))),
          (r = null != r ? r : l.activeElement);
        let c = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, u.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, u.indexOf(r)) + 1;
            if (8 & t) return u.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          p = 0,
          m = u.length,
          b;
        do {
          if (p >= m || p + m <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (b = u[e]) || b.focus(f), (p += c);
        } while (b !== l.activeElement);
        return (
          6 & t &&
            null !=
              (s =
                null == (i = null == (a = b) ? void 0 : a.matches)
                  ? void 0
                  : i.call(a, "textarea,input")) &&
            s &&
            b.select(),
          b.hasAttribute("tabindex") || b.setAttribute("tabindex", "0"),
          2
        );
      }
      function z(e) {
        let t = (0, b.useRef)(e);
        return (
          P(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      let q = function (e) {
          let t = z(e);
          return b.useCallback((...e) => t.current(...e), [t]);
        },
        H = Symbol();
      function U(...e) {
        let t = (0, b.useRef)(e);
        (0, b.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = q((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[H]))
          ? void 0
          : n;
      }
      function $(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      var W =
        (((c = W || {})[(c.None = 1)] = "None"),
        (c[(c.Focusable = 2)] = "Focusable"),
        (c[(c.Hidden = 4)] = "Hidden"),
        c);
      let B = _(function (e, t) {
        let { features: n = 1, ...r } = e;
        return y({
          ourProps: {
            ref: t,
            "aria-hidden": (2 & n) == 2 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & n) == 4 && (2 & n) != 2 && { display: "none" }),
            },
          },
          theirProps: r,
          slot: {},
          defaultTag: "div",
          name: "Hidden",
        });
      });
      function G({ onFocus: e }) {
        let [t, n] = (0, b.useState)(!0);
        return t
          ? b.createElement(B, {
              as: "button",
              type: "button",
              features: W.Focusable,
              onFocus: (t) => {
                t.preventDefault();
                let r,
                  o = 50;
                r = requestAnimationFrame(function t() {
                  if (o-- <= 0) {
                    r && cancelAnimationFrame(r);
                    return;
                  }
                  if (e()) {
                    n(!1), cancelAnimationFrame(r);
                    return;
                  }
                  r = requestAnimationFrame(t);
                });
              },
            })
          : null;
      }
      let Y = b.createContext(null);
      function X({ children: e }) {
        let t = b.useRef({
          groups: new Map(),
          get(e, t) {
            var n;
            let r = this.groups.get(e);
            r || ((r = new Map()), this.groups.set(e, r));
            let o = null != (n = r.get(t)) ? n : 0;
            return (
              r.set(t, o + 1),
              [
                Array.from(r.keys()).indexOf(t),
                function () {
                  let e = r.get(t);
                  e > 1 ? r.set(t, e - 1) : r.delete(t);
                },
              ]
            );
          },
        });
        return b.createElement(Y.Provider, { value: t }, e);
      }
      function K(e) {
        let t = b.useContext(Y);
        if (!t)
          throw Error("You must wrap your component in a <StableCollection>");
        let n = (function () {
            var e, t, n;
            let r =
              null !=
              (n =
                null ==
                (t =
                  null ==
                  (e = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)
                    ? void 0
                    : e.ReactCurrentOwner)
                  ? void 0
                  : t.current)
                ? n
                : null;
            if (!r) return Symbol();
            let o = [],
              a = r;
            for (; a; ) o.push(a.index), (a = a.return);
            return "$." + o.join(".");
          })(),
          [r, o] = t.current.get(e, n);
        return b.useEffect(() => o, []), r;
      }
      var Z =
          (((d = Z || {})[(d.Forwards = 0)] = "Forwards"),
          (d[(d.Backwards = 1)] = "Backwards"),
          d),
        J =
          (((f = J || {})[(f.Less = -1)] = "Less"),
          (f[(f.Equal = 0)] = "Equal"),
          (f[(f.Greater = 1)] = "Greater"),
          f),
        V =
          (((p = V || {})[(p.SetSelectedIndex = 0)] = "SetSelectedIndex"),
          (p[(p.RegisterTab = 1)] = "RegisterTab"),
          (p[(p.UnregisterTab = 2)] = "UnregisterTab"),
          (p[(p.RegisterPanel = 3)] = "RegisterPanel"),
          (p[(p.UnregisterPanel = 4)] = "UnregisterPanel"),
          p);
      let Q = {
          0(e, t) {
            var n;
            let r = C(e.tabs, (e) => e.current),
              o = C(e.panels, (e) => e.current),
              a = r.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute("disabled"));
              }),
              i = { ...e, tabs: r, panels: o };
            if (t.index < 0 || t.index > r.length - 1) {
              let n = v(Math.sign(t.index - e.selectedIndex), {
                [-1]: () => 1,
                0: () =>
                  v(Math.sign(t.index), {
                    [-1]: () => 0,
                    0: () => 0,
                    1: () => 1,
                  }),
                1: () => 0,
              });
              return 0 === a.length
                ? i
                : {
                    ...i,
                    selectedIndex: v(n, {
                      0: () => r.indexOf(a[0]),
                      1: () => r.indexOf(a[a.length - 1]),
                    }),
                  };
            }
            let s = r.slice(0, t.index),
              l = [...r.slice(t.index), ...s].find((e) => a.includes(e));
            if (!l) return i;
            let u = null != (n = r.indexOf(l)) ? n : e.selectedIndex;
            return (
              -1 === u && (u = e.selectedIndex), { ...i, selectedIndex: u }
            );
          },
          1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
              o = C([...e.tabs, t.tab], (e) => e.current),
              a = null != (n = o.indexOf(r)) ? n : e.selectedIndex;
            return (
              -1 === a && (a = e.selectedIndex),
              { ...e, tabs: o, selectedIndex: a }
            );
          },
          2: (e, t) => ({ ...e, tabs: e.tabs.filter((e) => e !== t.tab) }),
          3: (e, t) =>
            e.panels.includes(t.panel)
              ? e
              : { ...e, panels: C([...e.panels, t.panel], (e) => e.current) },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        ee = (0, b.createContext)(null);
      function et(e) {
        let t = (0, b.useContext)(ee);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, et), t);
        }
        return t;
      }
      ee.displayName = "TabsDataContext";
      let en = (0, b.createContext)(null);
      function er(e) {
        let t = (0, b.useContext)(en);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, er), t);
        }
        return t;
      }
      function eo(e, t) {
        return v(t.type, Q, e, t);
      }
      en.displayName = "TabsActionsContext";
      let ea = b.Fragment,
        ei = h.RenderStrategy | h.Static,
        es = Object.assign(
          _(function (e, t) {
            var n, r;
            let o = T(),
              { id: a = `headlessui-tabs-tab-${o}`, ...i } = e,
              {
                orientation: s,
                activation: l,
                selectedIndex: u,
                tabs: c,
                panels: d,
              } = et("Tab"),
              f = er("Tab"),
              p = et("Tab"),
              m = (0, b.useRef)(null),
              h = U(m, t);
            P(() => f.registerTab(m), [f, m]);
            let g = K("tabs"),
              w = c.indexOf(m);
            -1 === w && (w = g);
            let x = w === u,
              _ = q((e) => {
                var t;
                let n = e();
                if (n === D.Success && "auto" === l) {
                  let e =
                      null ==
                      (t = N.isServer
                        ? null
                        : m instanceof Node
                        ? m.ownerDocument
                        : null != m &&
                          m.hasOwnProperty("current") &&
                          m.current instanceof Node
                        ? m.current.ownerDocument
                        : document)
                        ? void 0
                        : t.activeElement,
                    n = p.tabs.findIndex((t) => t.current === e);
                  -1 !== n && f.change(n);
                }
                return n;
              }),
              k = q((e) => {
                let t = c.map((e) => e.current).filter(Boolean);
                if (e.key === A.Space || e.key === A.Enter) {
                  e.preventDefault(), e.stopPropagation(), f.change(w);
                  return;
                }
                switch (e.key) {
                  case A.Home:
                  case A.PageUp:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      _(() => R(t, M.First))
                    );
                  case A.End:
                  case A.PageDown:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      _(() => R(t, M.Last))
                    );
                }
                if (
                  _(() =>
                    v(s, {
                      vertical: () =>
                        e.key === A.ArrowUp
                          ? R(t, M.Previous | M.WrapAround)
                          : e.key === A.ArrowDown
                          ? R(t, M.Next | M.WrapAround)
                          : D.Error,
                      horizontal: () =>
                        e.key === A.ArrowLeft
                          ? R(t, M.Previous | M.WrapAround)
                          : e.key === A.ArrowRight
                          ? R(t, M.Next | M.WrapAround)
                          : D.Error,
                    })
                  ) === D.Success
                )
                  return e.preventDefault();
              }),
              O = (0, b.useRef)(!1),
              E = q(() => {
                var e, t;
                O.current ||
                  ((O.current = !0),
                  null == (e = m.current) || e.focus(),
                  f.change(w),
                  (t = () => {
                    O.current = !1;
                  }),
                  "function" == typeof queueMicrotask
                    ? queueMicrotask(t)
                    : Promise.resolve()
                        .then(t)
                        .catch((e) =>
                          setTimeout(() => {
                            throw e;
                          })
                        ));
              }),
              j = q((e) => {
                e.preventDefault();
              }),
              S = (0, b.useMemo)(() => ({ selected: x }), [x]);
            return y({
              ourProps: {
                ref: h,
                onKeyDown: k,
                onMouseDown: j,
                onClick: E,
                id: a,
                role: "tab",
                type: (function (e, t) {
                  let [n, r] = (0, b.useState)(() => $(e));
                  return (
                    P(() => {
                      r($(e));
                    }, [e.type, e.as]),
                    P(() => {
                      n ||
                        (t.current &&
                          t.current instanceof HTMLButtonElement &&
                          !t.current.hasAttribute("type") &&
                          r("button"));
                    }, [n, t]),
                    n
                  );
                })(e, m),
                "aria-controls":
                  null == (r = null == (n = d[w]) ? void 0 : n.current)
                    ? void 0
                    : r.id,
                "aria-selected": x,
                tabIndex: x ? 0 : -1,
              },
              theirProps: i,
              slot: S,
              defaultTag: "button",
              name: "Tabs.Tab",
            });
          }),
          {
            Group: _(function (e, t) {
              let {
                  defaultIndex: n = 0,
                  vertical: r = !1,
                  manual: o = !1,
                  onChange: a,
                  selectedIndex: i = null,
                  ...s
                } = e,
                l = r ? "vertical" : "horizontal",
                u = o ? "manual" : "auto",
                c = null !== i,
                d = U(t),
                [f, p] = (0, b.useReducer)(eo, {
                  selectedIndex: null != i ? i : n,
                  tabs: [],
                  panels: [],
                }),
                m = (0, b.useMemo)(
                  () => ({ selectedIndex: f.selectedIndex }),
                  [f.selectedIndex]
                ),
                v = z(a || (() => {})),
                h = z(f.tabs),
                g = (0, b.useMemo)(
                  () => ({ orientation: l, activation: u, ...f }),
                  [l, u, f]
                ),
                w = q(
                  (e) => (p({ type: 1, tab: e }), () => p({ type: 2, tab: e }))
                ),
                x = q(
                  (e) => (
                    p({ type: 3, panel: e }), () => p({ type: 4, panel: e })
                  )
                ),
                _ = q((e) => {
                  k.current !== e && v.current(e),
                    c || p({ type: 0, index: e });
                }),
                k = z(c ? e.selectedIndex : f.selectedIndex),
                O = (0, b.useMemo)(
                  () => ({ registerTab: w, registerPanel: x, change: _ }),
                  []
                );
              return (
                P(() => {
                  p({ type: 0, index: null != i ? i : n });
                }, [i]),
                P(() => {
                  if (void 0 === k.current || f.tabs.length <= 0) return;
                  let e = C(f.tabs, (e) => e.current);
                  e.some((e, t) => f.tabs[t] !== e) &&
                    _(e.indexOf(f.tabs[k.current]));
                }),
                b.createElement(
                  X,
                  null,
                  b.createElement(
                    en.Provider,
                    { value: O },
                    b.createElement(
                      ee.Provider,
                      { value: g },
                      g.tabs.length <= 0 &&
                        b.createElement(G, {
                          onFocus: () => {
                            var e, t;
                            for (let n of h.current)
                              if (
                                (null == (e = n.current)
                                  ? void 0
                                  : e.tabIndex) === 0
                              )
                                return null == (t = n.current) || t.focus(), !0;
                            return !1;
                          },
                        }),
                      y({
                        ourProps: { ref: d },
                        theirProps: s,
                        slot: m,
                        defaultTag: ea,
                        name: "Tabs",
                      })
                    )
                  )
                )
              );
            }),
            List: _(function (e, t) {
              let { orientation: n, selectedIndex: r } = et("Tab.List");
              return y({
                ourProps: { ref: U(t), role: "tablist", "aria-orientation": n },
                theirProps: e,
                slot: { selectedIndex: r },
                defaultTag: "div",
                name: "Tabs.List",
              });
            }),
            Panels: _(function (e, t) {
              let { selectedIndex: n } = et("Tab.Panels");
              return y({
                ourProps: { ref: U(t) },
                theirProps: e,
                slot: (0, b.useMemo)(() => ({ selectedIndex: n }), [n]),
                defaultTag: "div",
                name: "Tabs.Panels",
              });
            }),
            Panel: _(function (e, t) {
              var n, r, o, a;
              let i = T(),
                {
                  id: s = `headlessui-tabs-panel-${i}`,
                  tabIndex: l = 0,
                  ...u
                } = e,
                { selectedIndex: c, tabs: d, panels: f } = et("Tab.Panel"),
                p = er("Tab.Panel"),
                m = (0, b.useRef)(null),
                v = U(m, t);
              P(() => p.registerPanel(m), [p, m]);
              let h = K("panels"),
                g = f.indexOf(m);
              -1 === g && (g = h);
              let w = g === c,
                x = (0, b.useMemo)(() => ({ selected: w }), [w]),
                _ = {
                  ref: v,
                  id: s,
                  role: "tabpanel",
                  "aria-labelledby":
                    null == (r = null == (n = d[g]) ? void 0 : n.current)
                      ? void 0
                      : r.id,
                  tabIndex: w ? l : -1,
                };
              return w ||
                (null != (o = u.unmount) && !o) ||
                (null != (a = u.static) && a)
                ? y({
                    ourProps: _,
                    theirProps: u,
                    slot: x,
                    defaultTag: "div",
                    features: ei,
                    visible: w,
                    name: "Tabs.Panel",
                  })
                : b.createElement(B, { as: "span", ..._ });
            }),
          }
        );
    },
  },
  function (e) {
    e.O(0, [306, 420, 774, 888, 179], function () {
      return e((e.s = 2268));
    }),
      (_N_E = e.O());
  },
]);
