(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [15],
  {
    9961: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/practices/[practicesId]",
        function () {
          return n(3366);
        },
      ]);
    },
    1148: function (e, t, n) {
      "use strict";
      var r = n(5893);
      n(7294);
      var a = n(9008),
        i = n.n(a);
      let o = (e) => {
        let {
          description: t = "Signum Advocates",
          keywords:
            n = "Signum Advocates, law firm, Practice areas, Divorce, SEO, Uganda, Lawyers in Uganda, appeals, trademark, estate planning, legal solutions, consultancy, firms near me, litigation",
          title: a = "Signum Advocates",
          websiteUrl: o = "https://omuronadvocates.com",
          imageUrl:
            l = "https://drive.google.com/uc?export=view&id=1U1fHGIPFmFZrvFnfazP9CEhUnHlOB1WI",
          imageAlt: s = "Signum Advocates caters for all your legal needs.",
          imageWidth: c = "1280",
          imageHeight: u = "630",
          imageType: d = "image/png",
        } = e;
        return (0, r.jsxs)(i(), {
          children: [
            (0, r.jsx)("title", { children: a }),
            (0, r.jsx)("meta", { name: "description", content: t }),
            (0, r.jsx)("meta", { name: "keywords", content: n }),
            (0, r.jsx)("meta", { property: "og:title", content: a }),
            (0, r.jsx)("meta", { property: "og:description", content: t }),
            (0, r.jsx)("meta", { property: "og:image", content: l }),
            (0, r.jsx)("meta", {
              property: "og:image:url",
              content: l.replace("https", "http"),
            }),
            (0, r.jsx)("meta", { property: "og:image:secure_url", content: l }),
            (0, r.jsx)("meta", { property: "og:image:alt", content: s }),
            (0, r.jsx)("meta", { property: "og:image:width", content: c }),
            (0, r.jsx)("meta", { property: "og:image:height", content: u }),
            (0, r.jsx)("meta", { property: "og:image:type", content: d }),
            (0, r.jsx)("meta", { property: "og:url", content: o }),
            (0, r.jsx)("meta", { property: "og:site_name", content: a }),
            (0, r.jsx)("meta", { name: "twitter:title", content: a }),
            (0, r.jsx)("meta", {
              name: "twitter:site",
              content: "@signumadvocates",
            }),
            (0, r.jsx)("meta", { name: "twitter:description", content: t }),
            (0, r.jsx)("meta", { name: "twitter:image:alt", content: s }),
            (0, r.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, r.jsx)("link", { rel: "canonical", href: o }),
            (0, r.jsx)("link", {
              rel: "shortcut icon",
              href: "https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr",
            }),
            (0, r.jsx)("link", {
              rel: "icon",
              href: "https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr",
              type: "image/x-icon",
            }),
            (0, r.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "https://drive.google.com/uc?export=view&id=1CbuYpHI9gFNdtj7TbH1YP7ChizBhmkRf",
            }),
            (0, r.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "https://drive.google.com/uc?export=view&id=1Km_LpcITV0cwnlQi5bMP-atM4Dt2dAdc",
            }),
            (0, r.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "https://drive.google.com/uc?export=view&id=1Rtzn5SNLknPGsjwSx1MnW4Lr3AMeNXnH",
            }),
          ],
        });
      };
      t.Z = o;
    },
    2545: function (e, t, n) {},
    3366: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return d;
          },
          default: function () {
            return f;
          },
        });
      var r = n(5893);
      n(2545);
      var a = n(1148),
        i = n(3268),
        o = n.n(i),
        l = n(2096);
      let s = (e) => {
        let { practice: t, practiceNumber: n, imageUrl: a, teamMembers: i } = e;
        return (
          console.log("a single teamMember is", i),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                className: o().outerContainer,
                children: (0, r.jsxs)(
                  "div",
                  {
                    className: o().practiceContainer,
                    children: [
                      (0, r.jsx)("p", { children: t.title }),
                      (0, r.jsxs)("div", {
                        className: o().heading,
                        children: [
                          (0, r.jsx)("span", { children: n }),
                          (0, r.jsx)("img", {
                            src: t.imageUrl || "/Images/practiceimg.png",
                            alt: "practice image",
                          }),
                        ],
                      }),
                    ],
                  },
                  t._id
                ),
              }),
              (0, r.jsxs)(l.O.Group, {
                children: [
                  (0, r.jsx)("div", {
                    className: o().tabContainer,
                    children: (0, r.jsxs)(l.O.List, {
                      className: o().line,
                      children: [
                        (0, r.jsx)(l.O, {
                          className: (e) => {
                            let { selected: t } = e;
                            return "".concat(t ? o().active : o().inactive);
                          },
                          children: "Services",
                        }),
                        (0, r.jsx)(l.O, {
                          className: (e) => {
                            let { selected: t } = e;
                            return "".concat(t ? o().active : o().inactive);
                          },
                          children: "Publications",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)(l.O.Panels, {
                    children: [
                      (0, r.jsx)(l.O.Panel, {
                        className: o().gallery,
                        children: (0, r.jsxs)("div", {
                          className: o().content,
                          children: [
                            (0, r.jsx)("h2", { children: t.service }),
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", { children: t.text }),
                            }),
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("div", {
                                dangerouslySetInnerHTML: { __html: t.body },
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(l.O.Panel, {
                        className: o().gallery,
                        children: (0, r.jsx)("div", { className: o().content }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var c = n(3685);
      let u = (e) => {
        let { practice: t, practiceNumber: n, teamMembers: i } = e;
        return (
          console.log("Team members received are", i),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(a.Z, {
                title: "OMURON ADVOCATES | "
                  .concat(c.XF.Practices.name, " | ")
                  .concat((null == t ? void 0 : t.title) || ""),
                description: "".concat(
                  null == t ? void 0 : t.title,
                  " at Omuron Advocates"
                ),
                websiteUrl: ""
                  .concat(c._n)
                  .concat(c.XF.Practices.path, "/")
                  .concat(null == t ? void 0 : t._id),
              }),
              (0, r.jsx)("div", {
                children: (0, r.jsx)(s, {
                  practice: t,
                  practiceNumber: n,
                  teamMembers: i,
                }),
              }),
            ],
          })
        );
      };
      var d = !0,
        f = u;
    },
    3268: function (e) {
      e.exports = {
        outerContainer: "style_outerContainer__iXKwh",
        heading: "style_heading__lz22s",
        practiceContainer: "style_practiceContainer__GrQEL",
        active: "style_active__GBm_m",
        inactive: "style_inactive__x0uZS",
        line: "style_line__J0v4p",
        content: "style_content__Oqqco",
        experienceContent: "style_experienceContent__Tg4Nw",
        experienceTab: "style_experienceTab__S8Zn4",
        tabContainer: "style_tabContainer__LoUZF",
        gallery: "style_gallery__hmJMt",
      };
    },
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
    2096: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return el;
        },
      });
      var r,
        a,
        i,
        o,
        l,
        s,
        c,
        u,
        d,
        f,
        p,
        m,
        g = n(7294);
      function h(e, t, ...n) {
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
        throw (Error.captureStackTrace && Error.captureStackTrace(r, h), r);
      }
      var v =
          (((r = v || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        x =
          (((a = x || {})[(a.Unmount = 0)] = "Unmount"),
          (a[(a.Hidden = 1)] = "Hidden"),
          a);
      function b({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: a,
        visible: i = !0,
        name: o,
      }) {
        let l = w(t, e);
        if (i) return y(l, n, r, o);
        let s = null != a ? a : 0;
        if (2 & s) {
          let { static: e = !1, ...t } = l;
          if (e) return y(t, n, r, o);
        }
        if (1 & s) {
          let { unmount: e = !0, ...t } = l;
          return h(e ? 0 : 1, {
            0: () => null,
            1: () =>
              y({ ...t, hidden: !0, style: { display: "none" } }, n, r, o),
          });
        }
        return y(l, n, r, o);
      }
      function y(e, t = {}, n, r) {
        var a;
        let {
            as: i = n,
            children: o,
            refName: l = "ref",
            ...s
          } = _(e, ["unmount", "static"]),
          c = void 0 !== e.ref ? { [l]: e.ref } : {},
          u = "function" == typeof o ? o(t) : o;
        "className" in s &&
          s.className &&
          "function" == typeof s.className &&
          (s.className = s.className(t));
        let d = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, a] of Object.entries(t))
            "boolean" == typeof a && (e = !0), !0 === a && n.push(r);
          e && (d["data-headlessui-state"] = n.join(" "));
        }
        if (i === g.Fragment && Object.keys(E(s)).length > 0) {
          if (!(0, g.isValidElement)(u) || (Array.isArray(u) && u.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(s).map((e) => `  - ${e}`).join(`
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
          })(null == (a = u.props) ? void 0 : a.className, s.className);
          return (0, g.cloneElement)(
            u,
            Object.assign(
              {},
              w(u.props, E(_(s, ["ref"]))),
              d,
              c,
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
              })(u.ref, c.ref),
              e ? { className: e } : {}
            )
          );
        }
        return (0, g.createElement)(
          i,
          Object.assign(
            {},
            _(s, ["ref"]),
            i !== g.Fragment && c,
            i !== g.Fragment && d
          ),
          u
        );
      }
      function w(...e) {
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
              for (let a of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                a(t, ...r);
              }
            },
          });
        return t;
      }
      function j(e) {
        var t;
        return Object.assign((0, g.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function E(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function _(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      var P = Object.defineProperty,
        N = (e, t, n) =>
          t in e
            ? P(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        S = (e, t, n) => (N(e, "symbol" != typeof t ? t + "" : t, n), n);
      let T = new (class {
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
        O = (e, t) => {
          T.isServer ? (0, g.useEffect)(e, t) : (0, g.useLayoutEffect)(e, t);
        },
        I =
          null != (m = g.useId)
            ? m
            : function () {
                let e = (function () {
                    let [e, t] = (0, g.useState)(T.isHandoffComplete);
                    return (
                      e && !1 === T.isHandoffComplete && t(!1),
                      (0, g.useEffect)(() => {
                        !0 !== e && t(!0);
                      }, [e]),
                      (0, g.useEffect)(() => T.handoff(), []),
                      e
                    );
                  })(),
                  [t, n] = g.useState(e ? () => T.nextId() : null);
                return (
                  O(() => {
                    null === t && n(T.nextId());
                  }, [t]),
                  null != t ? "" + t : void 0
                );
              };
      var A =
        (((i = A || {}).Space = " "),
        (i.Enter = "Enter"),
        (i.Escape = "Escape"),
        (i.Backspace = "Backspace"),
        (i.Delete = "Delete"),
        (i.ArrowLeft = "ArrowLeft"),
        (i.ArrowUp = "ArrowUp"),
        (i.ArrowRight = "ArrowRight"),
        (i.ArrowDown = "ArrowDown"),
        (i.Home = "Home"),
        (i.End = "End"),
        (i.PageUp = "PageUp"),
        (i.PageDown = "PageDown"),
        (i.Tab = "Tab"),
        i);
      let F = [
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
      var k =
          (((o = k || {})[(o.First = 1)] = "First"),
          (o[(o.Previous = 2)] = "Previous"),
          (o[(o.Next = 4)] = "Next"),
          (o[(o.Last = 8)] = "Last"),
          (o[(o.WrapAround = 16)] = "WrapAround"),
          (o[(o.NoScroll = 32)] = "NoScroll"),
          o),
        C =
          (((l = C || {})[(l.Error = 0)] = "Error"),
          (l[(l.Overflow = 1)] = "Overflow"),
          (l[(l.Success = 2)] = "Success"),
          (l[(l.Underflow = 3)] = "Underflow"),
          l),
        D =
          (((s = D || {})[(s.Previous = -1)] = "Previous"),
          (s[(s.Next = 1)] = "Next"),
          s),
        M =
          (((c = M || {})[(c.Strict = 0)] = "Strict"),
          (c[(c.Loose = 1)] = "Loose"),
          c);
      function L(e, t = (e) => e) {
        return e.slice().sort((e, n) => {
          let r = t(e),
            a = t(n);
          if (null === r || null === a) return 0;
          let i = r.compareDocumentPosition(a);
          return i & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : i & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function R(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: a = [] } = {}
      ) {
        var i, o, l;
        let s = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          c = Array.isArray(e)
            ? n
              ? L(e)
              : e
            : (function (e = document.body) {
                return null == e
                  ? []
                  : Array.from(e.querySelectorAll(F)).sort((e, t) =>
                      Math.sign(
                        (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (t.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(e);
        a.length > 0 && c.length > 1 && (c = c.filter((e) => !a.includes(e))),
          (r = null != r ? r : s.activeElement);
        let u = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, c.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, c.indexOf(r)) + 1;
            if (8 & t) return c.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          f = 32 & t ? { preventScroll: !0 } : {},
          p = 0,
          m = c.length,
          g;
        do {
          if (p >= m || p + m <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (g = c[e]) || g.focus(f), (p += u);
        } while (g !== s.activeElement);
        return (
          6 & t &&
            null !=
              (l =
                null == (o = null == (i = g) ? void 0 : i.matches)
                  ? void 0
                  : o.call(i, "textarea,input")) &&
            l &&
            g.select(),
          g.hasAttribute("tabindex") || g.setAttribute("tabindex", "0"),
          2
        );
      }
      function U(e) {
        let t = (0, g.useRef)(e);
        return (
          O(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      let H = function (e) {
          let t = U(e);
          return g.useCallback((...e) => t.current(...e), [t]);
        },
        G = Symbol();
      function q(...e) {
        let t = (0, g.useRef)(e);
        (0, g.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = H((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[G]))
          ? void 0
          : n;
      }
      function B(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      var W =
        (((u = W || {})[(u.None = 1)] = "None"),
        (u[(u.Focusable = 2)] = "Focusable"),
        (u[(u.Hidden = 4)] = "Hidden"),
        u);
      let $ = j(function (e, t) {
        let { features: n = 1, ...r } = e;
        return b({
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
      function z({ onFocus: e }) {
        let [t, n] = (0, g.useState)(!0);
        return t
          ? g.createElement($, {
              as: "button",
              type: "button",
              features: W.Focusable,
              onFocus: (t) => {
                t.preventDefault();
                let r,
                  a = 50;
                r = requestAnimationFrame(function t() {
                  if (a-- <= 0) {
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
      let V = g.createContext(null);
      function X({ children: e }) {
        let t = g.useRef({
          groups: new Map(),
          get(e, t) {
            var n;
            let r = this.groups.get(e);
            r || ((r = new Map()), this.groups.set(e, r));
            let a = null != (n = r.get(t)) ? n : 0;
            return (
              r.set(t, a + 1),
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
        return g.createElement(V.Provider, { value: t }, e);
      }
      function Z(e) {
        let t = g.useContext(V);
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
                  (e = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)
                    ? void 0
                    : e.ReactCurrentOwner)
                  ? void 0
                  : t.current)
                ? n
                : null;
            if (!r) return Symbol();
            let a = [],
              i = r;
            for (; i; ) a.push(i.index), (i = i.return);
            return "$." + a.join(".");
          })(),
          [r, a] = t.current.get(e, n);
        return g.useEffect(() => a, []), r;
      }
      var K =
          (((d = K || {})[(d.Forwards = 0)] = "Forwards"),
          (d[(d.Backwards = 1)] = "Backwards"),
          d),
        Y =
          (((f = Y || {})[(f.Less = -1)] = "Less"),
          (f[(f.Equal = 0)] = "Equal"),
          (f[(f.Greater = 1)] = "Greater"),
          f),
        J =
          (((p = J || {})[(p.SetSelectedIndex = 0)] = "SetSelectedIndex"),
          (p[(p.RegisterTab = 1)] = "RegisterTab"),
          (p[(p.UnregisterTab = 2)] = "UnregisterTab"),
          (p[(p.RegisterPanel = 3)] = "RegisterPanel"),
          (p[(p.UnregisterPanel = 4)] = "UnregisterPanel"),
          p);
      let Q = {
          0(e, t) {
            var n;
            let r = L(e.tabs, (e) => e.current),
              a = L(e.panels, (e) => e.current),
              i = r.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute("disabled"));
              }),
              o = { ...e, tabs: r, panels: a };
            if (t.index < 0 || t.index > r.length - 1) {
              let n = h(Math.sign(t.index - e.selectedIndex), {
                [-1]: () => 1,
                0: () =>
                  h(Math.sign(t.index), {
                    [-1]: () => 0,
                    0: () => 0,
                    1: () => 1,
                  }),
                1: () => 0,
              });
              return 0 === i.length
                ? o
                : {
                    ...o,
                    selectedIndex: h(n, {
                      0: () => r.indexOf(i[0]),
                      1: () => r.indexOf(i[i.length - 1]),
                    }),
                  };
            }
            let l = r.slice(0, t.index),
              s = [...r.slice(t.index), ...l].find((e) => i.includes(e));
            if (!s) return o;
            let c = null != (n = r.indexOf(s)) ? n : e.selectedIndex;
            return (
              -1 === c && (c = e.selectedIndex), { ...o, selectedIndex: c }
            );
          },
          1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
              a = L([...e.tabs, t.tab], (e) => e.current),
              i = null != (n = a.indexOf(r)) ? n : e.selectedIndex;
            return (
              -1 === i && (i = e.selectedIndex),
              { ...e, tabs: a, selectedIndex: i }
            );
          },
          2: (e, t) => ({ ...e, tabs: e.tabs.filter((e) => e !== t.tab) }),
          3: (e, t) =>
            e.panels.includes(t.panel)
              ? e
              : { ...e, panels: L([...e.panels, t.panel], (e) => e.current) },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        ee = (0, g.createContext)(null);
      function et(e) {
        let t = (0, g.useContext)(ee);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, et), t);
        }
        return t;
      }
      ee.displayName = "TabsDataContext";
      let en = (0, g.createContext)(null);
      function er(e) {
        let t = (0, g.useContext)(en);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, er), t);
        }
        return t;
      }
      function ea(e, t) {
        return h(t.type, Q, e, t);
      }
      en.displayName = "TabsActionsContext";
      let ei = g.Fragment,
        eo = v.RenderStrategy | v.Static,
        el = Object.assign(
          j(function (e, t) {
            var n, r;
            let a = I(),
              { id: i = `headlessui-tabs-tab-${a}`, ...o } = e,
              {
                orientation: l,
                activation: s,
                selectedIndex: c,
                tabs: u,
                panels: d,
              } = et("Tab"),
              f = er("Tab"),
              p = et("Tab"),
              m = (0, g.useRef)(null),
              v = q(m, t);
            O(() => f.registerTab(m), [f, m]);
            let x = Z("tabs"),
              y = u.indexOf(m);
            -1 === y && (y = x);
            let w = y === c,
              j = H((e) => {
                var t;
                let n = e();
                if (n === C.Success && "auto" === s) {
                  let e =
                      null ==
                      (t = T.isServer
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
              E = H((e) => {
                let t = u.map((e) => e.current).filter(Boolean);
                if (e.key === A.Space || e.key === A.Enter) {
                  e.preventDefault(), e.stopPropagation(), f.change(y);
                  return;
                }
                switch (e.key) {
                  case A.Home:
                  case A.PageUp:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      j(() => R(t, k.First))
                    );
                  case A.End:
                  case A.PageDown:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      j(() => R(t, k.Last))
                    );
                }
                if (
                  j(() =>
                    h(l, {
                      vertical: () =>
                        e.key === A.ArrowUp
                          ? R(t, k.Previous | k.WrapAround)
                          : e.key === A.ArrowDown
                          ? R(t, k.Next | k.WrapAround)
                          : C.Error,
                      horizontal: () =>
                        e.key === A.ArrowLeft
                          ? R(t, k.Previous | k.WrapAround)
                          : e.key === A.ArrowRight
                          ? R(t, k.Next | k.WrapAround)
                          : C.Error,
                    })
                  ) === C.Success
                )
                  return e.preventDefault();
              }),
              _ = (0, g.useRef)(!1),
              P = H(() => {
                var e, t;
                _.current ||
                  ((_.current = !0),
                  null == (e = m.current) || e.focus(),
                  f.change(y),
                  (t = () => {
                    _.current = !1;
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
              N = H((e) => {
                e.preventDefault();
              }),
              S = (0, g.useMemo)(() => ({ selected: w }), [w]);
            return b({
              ourProps: {
                ref: v,
                onKeyDown: E,
                onMouseDown: N,
                onClick: P,
                id: i,
                role: "tab",
                type: (function (e, t) {
                  let [n, r] = (0, g.useState)(() => B(e));
                  return (
                    O(() => {
                      r(B(e));
                    }, [e.type, e.as]),
                    O(() => {
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
                  null == (r = null == (n = d[y]) ? void 0 : n.current)
                    ? void 0
                    : r.id,
                "aria-selected": w,
                tabIndex: w ? 0 : -1,
              },
              theirProps: o,
              slot: S,
              defaultTag: "button",
              name: "Tabs.Tab",
            });
          }),
          {
            Group: j(function (e, t) {
              let {
                  defaultIndex: n = 0,
                  vertical: r = !1,
                  manual: a = !1,
                  onChange: i,
                  selectedIndex: o = null,
                  ...l
                } = e,
                s = r ? "vertical" : "horizontal",
                c = a ? "manual" : "auto",
                u = null !== o,
                d = q(t),
                [f, p] = (0, g.useReducer)(ea, {
                  selectedIndex: null != o ? o : n,
                  tabs: [],
                  panels: [],
                }),
                m = (0, g.useMemo)(
                  () => ({ selectedIndex: f.selectedIndex }),
                  [f.selectedIndex]
                ),
                h = U(i || (() => {})),
                v = U(f.tabs),
                x = (0, g.useMemo)(
                  () => ({ orientation: s, activation: c, ...f }),
                  [s, c, f]
                ),
                y = H(
                  (e) => (p({ type: 1, tab: e }), () => p({ type: 2, tab: e }))
                ),
                w = H(
                  (e) => (
                    p({ type: 3, panel: e }), () => p({ type: 4, panel: e })
                  )
                ),
                j = H((e) => {
                  E.current !== e && h.current(e),
                    u || p({ type: 0, index: e });
                }),
                E = U(u ? e.selectedIndex : f.selectedIndex),
                _ = (0, g.useMemo)(
                  () => ({ registerTab: y, registerPanel: w, change: j }),
                  []
                );
              return (
                O(() => {
                  p({ type: 0, index: null != o ? o : n });
                }, [o]),
                O(() => {
                  if (void 0 === E.current || f.tabs.length <= 0) return;
                  let e = L(f.tabs, (e) => e.current);
                  e.some((e, t) => f.tabs[t] !== e) &&
                    j(e.indexOf(f.tabs[E.current]));
                }),
                g.createElement(
                  X,
                  null,
                  g.createElement(
                    en.Provider,
                    { value: _ },
                    g.createElement(
                      ee.Provider,
                      { value: x },
                      x.tabs.length <= 0 &&
                        g.createElement(z, {
                          onFocus: () => {
                            var e, t;
                            for (let n of v.current)
                              if (
                                (null == (e = n.current)
                                  ? void 0
                                  : e.tabIndex) === 0
                              )
                                return null == (t = n.current) || t.focus(), !0;
                            return !1;
                          },
                        }),
                      b({
                        ourProps: { ref: d },
                        theirProps: l,
                        slot: m,
                        defaultTag: ei,
                        name: "Tabs",
                      })
                    )
                  )
                )
              );
            }),
            List: j(function (e, t) {
              let { orientation: n, selectedIndex: r } = et("Tab.List");
              return b({
                ourProps: { ref: q(t), role: "tablist", "aria-orientation": n },
                theirProps: e,
                slot: { selectedIndex: r },
                defaultTag: "div",
                name: "Tabs.List",
              });
            }),
            Panels: j(function (e, t) {
              let { selectedIndex: n } = et("Tab.Panels");
              return b({
                ourProps: { ref: q(t) },
                theirProps: e,
                slot: (0, g.useMemo)(() => ({ selectedIndex: n }), [n]),
                defaultTag: "div",
                name: "Tabs.Panels",
              });
            }),
            Panel: j(function (e, t) {
              var n, r, a, i;
              let o = I(),
                {
                  id: l = `headlessui-tabs-panel-${o}`,
                  tabIndex: s = 0,
                  ...c
                } = e,
                { selectedIndex: u, tabs: d, panels: f } = et("Tab.Panel"),
                p = er("Tab.Panel"),
                m = (0, g.useRef)(null),
                h = q(m, t);
              O(() => p.registerPanel(m), [p, m]);
              let v = Z("panels"),
                x = f.indexOf(m);
              -1 === x && (x = v);
              let y = x === u,
                w = (0, g.useMemo)(() => ({ selected: y }), [y]),
                j = {
                  ref: h,
                  id: l,
                  role: "tabpanel",
                  "aria-labelledby":
                    null == (r = null == (n = d[x]) ? void 0 : n.current)
                      ? void 0
                      : r.id,
                  tabIndex: y ? s : -1,
                };
              return y ||
                (null != (a = c.unmount) && !a) ||
                (null != (i = c.static) && i)
                ? b({
                    ourProps: j,
                    theirProps: c,
                    slot: w,
                    defaultTag: "div",
                    features: eo,
                    visible: y,
                    name: "Tabs.Panel",
                  })
                : g.createElement($, { as: "span", ...j });
            }),
          }
        );
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 9961));
    }),
      (_N_E = e.O());
  },
]);
