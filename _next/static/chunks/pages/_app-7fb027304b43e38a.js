(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(6004);
        },
      ]);
    },
    8364: function (e, t, n) {
      "use strict";
      var i = n(5893),
        a = n(3264),
        o = n.n(a),
        r = n(1664),
        s = n.n(r),
        l = n(3685),
        c = n(1163);
      t.Z = function (e) {
        let { className: t } = e;
        return (
          (0, c.useRouter)(),
          (0, i.jsxs)("footer", {
            className: "".concat(o().footer, " ").concat(t),
            children: [
              (0, i.jsxs)("h4", {
                children: [
                  (0, i.jsx)("span", { children: "• " }),
                  " NEED TO CONNECT?",
                ],
              }),
              (0, i.jsxs)("section", {
                className: "".concat(o().footer_content),
                children: [
                  (0, i.jsx)("div", {
                    className: o().contact_section,
                    children: (0, i.jsx)("h1", { children: "Let’s Talk" }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "".concat(o().footerlink_container),
                    children: [
                      (0, i.jsxs)("ul", {
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(s(), {
                              href: l.XF.Home.path,
                              children: l.XF.Home.name,
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(s(), {
                              href: l.XF.Team.path,
                              children: l.XF.Team.name,
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("ul", {
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(s(), {
                              href: l.XF.AboutUs.path,
                              children: l.XF.AboutUs.name,
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(s(), {
                              href: l.XF.Practices.path,
                              children: l.XF.Practices.name,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("section", {
                className: o().copyright,
                children: [
                  (0, i.jsx)("p", { children: "\xa9 2024 omuron co. advocates" }),
                  (0, i.jsx)("span", { children: "Privacy" }),
                  (0, i.jsx)("span", { children: "T&C’s" }),
                ],
              }),
            ],
          })
        );
      };
    },
    2430: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var i = n(5893),
        a = n(1664),
        o = n.n(a),
        r = n(2547),
        s = n.n(r),
        l = n(7294),
        c = n(5675),
        u = n.n(c),
        d = {
          src: "/_next/static/media/logo.svg",
          height: 751,
          width: 1191,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/logo.svg",
          height: 440,
          width: 3180,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = {
          src: "/_next/static/media/logo.svg",
          height: 751,
          width: 1191,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = {
          src: "/_next/static/media/logo.svg",
          height: 440,
          width: 3180,
          blurWidth: 0,
          blurHeight: 0,
        };
      let g = (e) => {
        let { size: t = 1, isRed: n = !0 } = e,
          a = { height: 120 * t, width: 100 * t },
          o = { height: 0 * t, width: 0 * t },
          r = { height: 70 * t, width: 70 * t };
        return (0, i.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            height: r.height,
            width: r.width,
          },
          className: "logoContainer",
          children: [
            (0, i.jsx)(u(), {
              src: n ? h : d,
              height: a.height,
              width: a.width,
              alt: " Logo",
              className: "bisonSize",
            }),
            (0, i.jsx)(u(), {
              src: n ? m : f,
              height: o.height,
              width: o.width,
              alt: " Logo",
              style: { objectFit: "contain" },
              className: "logoTextSize",
            }),
          ],
        });
      };
      var p = n(7516),
        v = n(8357);
      function _(e) {
        return (0, v.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24", fill: "none" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",
                fill: "currentColor",
              },
            },
          ],
        })(e);
      }
      var y = n(3685),
        b = n(7650),
        x = n.n(b);
      let w = () => {
          let e = y.fr.filter((e) => "/" !== e.path).filter((e) => !e.hide);
          return (0, i.jsx)("div", {
            className: x().mobilemenuContainer,
            children: (0, i.jsxs)("div", {
              className: x().menulist,
              children: [
                (0, i.jsx)("div", {
                  className: x().navlogo,
                  children: (0, i.jsx)(o(), {
                    href: "/",
                    children: (0, i.jsx)(g, { size: 1.8 }),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: x().navmenu,
                  children: [
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)("ul", {
                        className: x().list,
                        children: e.map((e, t) =>
                          (0, i.jsx)(
                            o(),
                            {
                              href: e.path,
                              children: (0, i.jsx)(
                                "li",
                                { className: x().nav_item, children: e.name },
                                "".concat(t, "_").concat(e.id, "_").concat(t)
                              ),
                            },
                            "".concat(t, "_").concat(e.id)
                          )
                        ),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: x().feature,
                      children: [
                        (0, i.jsx)("h2", { children: "Featured Insights" }),
                        (0, i.jsxs)("article", {
                          children: [
                            (0, i.jsx)("button", {
                              className: x().featurebutton,
                              children: "Oil & Gas",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "Uganda’s Oil bill and how it affects Regional & International trade",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("article", {
                          children: [
                            (0, i.jsx)("button", {
                              className: x().featurebutton,
                              children: "Oil & Gas",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "Uganda’s Oil bill and how it affects Regional & International trade",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("article", {
                          children: [
                            (0, i.jsx)("button", {
                              className: x().featurebutton,
                              children: "Oil & Gas",
                            }),
                            (0, i.jsx)("p", {
                              children:
                                "Uganda’s Oil bill and how it affects Regional & International trade",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        j = () => {
          let [e, t] = (0, l.useState)(!1),
            n = () => {
              t(!0);
            },
            a = () => {
              t(!1);
            };
          return (0, i.jsxs)("nav", {
            className: s().nav,
            children: [
              (0, i.jsx)("div", {
                className: s().logoContainer,
                children: (0, i.jsx)(o(), {
                  href: "/",
                  children: (0, i.jsx)(g, { size: 1.8 }),
                }),
              }),
              (0, i.jsx)("div", {
                className: s().navLinkContainer,
                children: (0, i.jsx)("ul", {
                  className: ""
                    .concat(s().menulist, " ")
                    .concat(s().desktopMenu),
                  children: y.fr
                    .filter((e) => !e.hide)
                    .map((e) =>
                      (0, i.jsx)(
                        o(),
                        {
                          href: e.path,
                          className: s().nav_links,
                          children: (0, i.jsx)("li", {
                            className: s().nav_item,
                            children: e.name,
                          }),
                        },
                        e.id
                      )
                    ),
                }),
              }),
              (0, i.jsx)("div", {
                className: ""
                  .concat(s().hamburgerMenuContainer, " ")
                  .concat(s().mobileMenu),
                children: (0, i.jsx)(p.ib2, {
                  size: 30,
                  onClick: n,
                  className: s().menuicon,
                }),
              }),
              e &&
                (0, i.jsxs)("div", {
                  className: s().overlayMenu,
                  children: [
                    (0, i.jsx)("div", {
                      className: s().closeButtonCase,
                      children: (0, i.jsx)(_, {
                        size: 30,
                        onClick: a,
                        color: "#950019",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      onClick: a,
                      children: (0, i.jsx)(w, {}),
                    }),
                  ],
                }),
            ],
          });
        };
      var C = j;
    },
    3685: function (e, t, n) {
      "use strict";
      n.d(t, {
        XF: function () {
          return a;
        },
        _n: function () {
          return i;
        },
        fr: function () {
          return o;
        },
      });
      let i = "",
        a = {
          Home: {
            path: "/",
            name: "Home",
            longDesc: "Official Home site for Signum Advocates",
            shortDesc: "",
          },
          AboutUs: {
            path: "/about.html",
            name: "About",
            longDesc:
              "We are a young and dynamic law firm that is passionate about providing our clients with exceptional legal services.  Our team consists of highly skilled and experienced lawyers who are committed to achieving the best possible outcomes for our clients.",
            shortDesc:
              "We are a young and dynamic law firm that is passionate about providing our clients with exceptional legal services.  Our team consists of highly skilled and experienced lawyers committed to achieving the best for our clients.",
          },
          Practices: {
            path: "practices",
            name: "Practices",
            longDesc:
              "Our areas of expertise include Tax Advisory, Banking & Finance, Litigation & dispute resolution, and others as showed below in detail. We are dedicated to staying up-to-date with the latest developments and trends in these fields.",
            shortDesc:
              "Our areas of expertise include Tax Advisory, Banking & Finance, Litigation & dispute resolution, and others as showed below in detail. We are dedicated to staying up-to-date with the latest developments and trends.",
          },
          Team: {
            path: "team",
            name: "Team",
            longDesc:
              "Find information about the talented and experienced individuals who make up our team. Our lawyers are passionate about providing our clients with exceptional legal services, and they bring a wealth of experience and knowledge to every case they handle.",
            shortDesc:
              "Our passionate and experienced lawyers provide exceptional legal services, bringing extensive knowledge and expertise to each case. Trust our dedicated team for personalized solutions and optimal results.",
          },
          Publications: {
            hide: !0,
            path: "/publications.html",
            name: "Publications",
            longDesc:
              "Find a collection of articles, blog posts, and other publications that our team of lawyers have authored. We believe that sharing knowledge and insights is an essential part of being a successful legal practice. We strive to make our content accessible and easy to understand.",
            shortDesc:
              "Find a collection of articles and other publications that our team of lawyers have authored. We believe that sharing knowledge and insights is an essential part of being a successful legal practice.",
          },
          CSR: {
            hide: !0,
            path: "/csr",
            name: "CSR",
            longDesc:
              "We are committed to being socially responsible and contributing to the betterment of society. On this page, you will find information about the various initiatives and activities we undertake as part of our CSR efforts.",
            shortDesc:
              "We are committed to being socially responsible and contributing to the betterment of society. On this page, you will find information about the various initiatives and activities we undertake as part of our CSR efforts.",
          },
          Careers: {
            path: "careers",
            name: "Careers",
            longDesc:
              "Find information about any current job openings at Signum Advocates, as well as details about the application process and what you can expect when working with us. We encourage you to explore our website and learn more about our profiencies and the values that guide our work.",
            shortDesc:
              "Find information about any current job openings at Signum Advocates, as well as details about the application process and what you can expect when working with us.",
          },
          ContactUs: {
            path: "contactUs",
            name: "Contact Us",
            longDesc:
              "We value your interest in our services and are here to assist you with any inquiries or legal needs you may have. Contacting us is easy. Reach out to our team through the various channels provided below, and we will be delighted to respond promptly and provide the help you require.",
            shortDesc:
              "Contacting us is easy. You can reach out to our team through the various channels provided below, and we will be delighted to respond promptly.",
          },
        },
        o = Object.keys(a).map((e) => ({
          hide: !!a[e].hide,
          name: a[e].name,
          path: a[e].path,
          icon: a[e].icon,
          longDesc: a[e].longDesc,
          shortDesc: a[e].shortDesc,
          id: "".concat(a[e].name, "_").concat(a[e].path),
        }));
    },
    5786: function (e, t, n) {
      "use strict";
      var i = n(5893);
      n(7294);
      var a = n(1337),
        o = n.n(a);
      let r = () =>
        (0, i.jsxs)("div", {
          className: o().big_container,
          children: [
            (0, i.jsxs)("div", {
              className: o().foreground,
              children: [
                (0, i.jsx)("img", {
                  src: "/Images/site_under_maintenance/signum.svg",
                  className: o().image_logo,
                  alt: "Signum Logo",
                }),
                (0, i.jsxs)("div", {
                  className: o().container,
                  children: [
                    (0, i.jsx)("h2", { children: "Coming Soon" }),
                    (0, i.jsx)("p", {
                      children:
                        "Our website is undergoing some improvements and will be back soon. Apologies for any inconvenience caused.",
                    }),
                    (0, i.jsxs)("p", {
                      children: [
                        "Kindly leave us with your ",
                        (0, i.jsx)("strong", { children: "email address" }),
                        " and we will notify you once its back",
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("form", {
                  className: o().form,
                  children: [
                    (0, i.jsx)("input", {
                      type: "text",
                      placeholder: "Email address here...",
                    }),
                    (0, i.jsx)("a", {
                      className: o().anchor,
                      href: "mailto:Info@signumadvocates.com",
                      children: "Submit",
                    }),
                  ],
                }),
                (0, i.jsx)("footer", {
                  className: o().footer,
                  children: (0, i.jsxs)("p", {
                    className: o().copyright,
                    children: [
                      "Designed and developed by",
                      " ",
                      (0, i.jsx)("a", {
                        href: "http://buriafrica.com/",
                        target: "_blank",
                        className: o().buriText,
                        children: "buriafrica.com",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: o().imageContainer,
              children: (0, i.jsx)("img", {
                src: "/Images/site_under_maintenance/watermark.svg",
                alt: "watermark logo",
                className: o().imageInContainer,
              }),
            }),
            (0, i.jsx)("div", {
              id: "crystals",
              children: (0, i.jsx)("img", {
                src: "/Images/site_under_maintenance/crystals.svg",
                alt: " crystals watermark logo",
                className: o().imageBottom,
              }),
            }),
          ],
        });
      t.Z = r;
    },
    1516: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, n, i) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    3740: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = n(6495).Z,
        a = n(2648).Z,
        o = n(1598).Z,
        r = n(7273).Z,
        s = o(n(7294)),
        l = a(n(2636)),
        c = n(7757),
        u = n(3735),
        d = n(3341);
      n(4210);
      var f = a(n(7746));
      let h = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
      function m(e) {
        return void 0 !== e.default;
      }
      function g(e) {
        return "number" == typeof e || void 0 === e
          ? e
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function p(e, t, n, a, o, r, s) {
        if (!e || e["data-loaded-src"] === t) return;
        e["data-loaded-src"] = t;
        let l = "decode" in e ? e.decode() : Promise.resolve();
        l.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (("blur" === n && r(!0), null == a ? void 0 : a.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let n = !1,
                o = !1;
              a.current(
                i({}, t, {
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => n,
                  isPropagationStopped: () => o,
                  persist: () => {},
                  preventDefault: () => {
                    (n = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (o = !0), t.stopPropagation();
                  },
                })
              );
            }
            (null == o ? void 0 : o.current) && o.current(e);
          }
        });
      }
      let v = s.forwardRef((e, t) => {
          var {
              imgAttributes: n,
              heightInt: a,
              widthInt: o,
              qualityInt: l,
              className: c,
              imgStyle: u,
              blurStyle: d,
              isLazy: f,
              fill: h,
              placeholder: m,
              loading: g,
              srcString: v,
              config: _,
              unoptimized: y,
              loader: b,
              onLoadRef: x,
              onLoadingCompleteRef: w,
              setBlurComplete: j,
              setShowAltText: C,
              onLoad: k,
              onError: N,
            } = e,
            O = r(e, [
              "imgAttributes",
              "heightInt",
              "widthInt",
              "qualityInt",
              "className",
              "imgStyle",
              "blurStyle",
              "isLazy",
              "fill",
              "placeholder",
              "loading",
              "srcString",
              "config",
              "unoptimized",
              "loader",
              "onLoadRef",
              "onLoadingCompleteRef",
              "setBlurComplete",
              "setShowAltText",
              "onLoad",
              "onError",
            ]);
          return (
            (g = f ? "lazy" : g),
            s.default.createElement(
              s.default.Fragment,
              null,
              s.default.createElement(
                "img",
                Object.assign(
                  {},
                  O,
                  {
                    loading: g,
                    width: o,
                    height: a,
                    decoding: "async",
                    "data-nimg": h ? "fill" : "1",
                    className: c,
                    style: i({}, u, d),
                  },
                  n,
                  {
                    ref: s.useCallback(
                      (e) => {
                        t &&
                          ("function" == typeof t
                            ? t(e)
                            : "object" == typeof t && (t.current = e)),
                          e &&
                            (N && (e.src = e.src),
                            e.complete && p(e, v, m, x, w, j, y));
                      },
                      [v, m, x, w, j, N, y, t]
                    ),
                    onLoad: (e) => {
                      let t = e.currentTarget;
                      p(t, v, m, x, w, j, y);
                    },
                    onError: (e) => {
                      C(!0), "blur" === m && j(!0), N && N(e);
                    },
                  }
                )
              )
            )
          );
        }),
        _ = s.forwardRef((e, t) => {
          let n, a;
          var o,
            {
              src: p,
              sizes: _,
              unoptimized: y = !1,
              priority: b = !1,
              loading: x,
              className: w,
              quality: j,
              width: C,
              height: k,
              fill: N,
              style: O,
              onLoad: S,
              onLoadingComplete: E,
              placeholder: M = "empty",
              blurDataURL: L,
              layout: P,
              objectFit: R,
              objectPosition: z,
              lazyBoundary: D,
              lazyRoot: F,
            } = e,
            I = r(e, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "className",
              "quality",
              "width",
              "height",
              "fill",
              "style",
              "onLoad",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
              "layout",
              "objectFit",
              "objectPosition",
              "lazyBoundary",
              "lazyRoot",
            ]);
          let T = s.useContext(d.ImageConfigContext),
            A = s.useMemo(() => {
              let e = h || T || u.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                n = e.deviceSizes.sort((e, t) => e - t);
              return i({}, e, { allSizes: t, deviceSizes: n });
            }, [T]),
            B = I,
            W = B.loader || f.default;
          delete B.loader;
          let U = "__next_img_default" in W;
          if (U) {
            if ("custom" === A.loader)
              throw Error(
                'Image with src "'.concat(p, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
          } else {
            let e = W;
            W = (t) => {
              let { config: n } = t,
                i = r(t, ["config"]);
              return e(i);
            };
          }
          if (P) {
            "fill" === P && (N = !0);
            let e = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[P];
            e && (O = i({}, O, e));
            let t = { responsive: "100vw", fill: "100vw" }[P];
            t && !_ && (_ = t);
          }
          let H = "",
            X = g(C),
            Z = g(k);
          if ("object" == typeof (o = p) && (m(o) || void 0 !== o.src)) {
            let e = m(p) ? p.default : p;
            if (!e.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (!e.height || !e.width)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(e)
                )
              );
            if (
              ((n = e.blurWidth),
              (a = e.blurHeight),
              (L = L || e.blurDataURL),
              (H = e.src),
              !N)
            ) {
              if (X || Z) {
                if (X && !Z) {
                  let t = X / e.width;
                  Z = Math.round(e.height * t);
                } else if (!X && Z) {
                  let t = Z / e.height;
                  X = Math.round(e.width * t);
                }
              } else (X = e.width), (Z = e.height);
            }
          }
          let q = !b && ("lazy" === x || void 0 === x);
          ((p = "string" == typeof p ? p : H).startsWith("data:") ||
            p.startsWith("blob:")) &&
            ((y = !0), (q = !1)),
            A.unoptimized && (y = !0),
            U && p.endsWith(".svg") && !A.dangerouslyAllowSVG && (y = !0);
          let [Y, G] = s.useState(!1),
            [K, J] = s.useState(!1),
            V = g(j),
            Q = Object.assign(
              N
                ? {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: R,
                    objectPosition: z,
                  }
                : {},
              K ? {} : { color: "transparent" },
              O
            ),
            $ =
              "blur" === M && L && !Y
                ? {
                    backgroundSize: Q.objectFit || "cover",
                    backgroundPosition: Q.objectPosition || "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,'.concat(
                        c.getImageBlurSvg({
                          widthInt: X,
                          heightInt: Z,
                          blurWidth: n,
                          blurHeight: a,
                          blurDataURL: L,
                          objectFit: Q.objectFit,
                        }),
                        '")'
                      ),
                  }
                : {},
            ee = (function (e) {
              let {
                config: t,
                src: n,
                unoptimized: i,
                width: a,
                quality: o,
                sizes: r,
                loader: s,
              } = e;
              if (i) return { src: n, srcSet: void 0, sizes: void 0 };
              let { widths: l, kind: c } = (function (e, t, n) {
                  let { deviceSizes: i, allSizes: a } = e;
                  if (n) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let i; (i = e.exec(n)); i) t.push(parseInt(i[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return {
                        widths: a.filter((t) => t >= i[0] * e),
                        kind: "w",
                      };
                    }
                    return { widths: a, kind: "w" };
                  }
                  if ("number" != typeof t) return { widths: i, kind: "w" };
                  let o = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => a.find((t) => t >= e) || a[a.length - 1]
                      )
                    ),
                  ];
                  return { widths: o, kind: "x" };
                })(t, a, r),
                u = l.length - 1;
              return {
                sizes: r || "w" !== c ? r : "100vw",
                srcSet: l
                  .map((e, i) =>
                    ""
                      .concat(
                        s({ config: t, src: n, quality: o, width: e }),
                        " "
                      )
                      .concat("w" === c ? e : i + 1)
                      .concat(c)
                  )
                  .join(", "),
                src: s({ config: t, src: n, quality: o, width: l[u] }),
              };
            })({
              config: A,
              src: p,
              unoptimized: y,
              width: X,
              quality: V,
              sizes: _,
              loader: W,
            }),
            et = p,
            en = {
              imageSrcSet: ee.srcSet,
              imageSizes: ee.sizes,
              crossOrigin: B.crossOrigin,
            },
            ei = s.useRef(S);
          s.useEffect(() => {
            ei.current = S;
          }, [S]);
          let ea = s.useRef(E);
          s.useEffect(() => {
            ea.current = E;
          }, [E]);
          let eo = i(
            {
              isLazy: q,
              imgAttributes: ee,
              heightInt: Z,
              widthInt: X,
              qualityInt: V,
              className: w,
              imgStyle: Q,
              blurStyle: $,
              loading: x,
              config: A,
              fill: N,
              unoptimized: y,
              placeholder: M,
              loader: W,
              srcString: et,
              onLoadRef: ei,
              onLoadingCompleteRef: ea,
              setBlurComplete: G,
              setShowAltText: J,
            },
            B
          );
          return s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(v, Object.assign({}, eo, { ref: t })),
            b
              ? s.default.createElement(
                  l.default,
                  null,
                  s.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                        rel: "preload",
                        as: "image",
                        href: ee.srcSet ? void 0 : ee.src,
                      },
                      en
                    )
                  )
                )
              : null
          );
        });
      (t.default = _),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    5569: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = n(2648).Z,
        a = n(7273).Z,
        o = i(n(7294)),
        r = n(4532),
        s = n(3353),
        l = n(1410),
        c = n(9064),
        u = n(370),
        d = n(9955),
        f = n(4224),
        h = n(508),
        m = n(1516),
        g = n(4266);
      let p = new Set();
      function v(e, t, n, i, a) {
        if (a || s.isLocalURL(t)) {
          if (!i.bypassPrefetchedCheck) {
            let a =
                void 0 !== i.locale
                  ? i.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              o = t + "%" + n + "%" + a;
            if (p.has(o)) return;
            p.add(o);
          }
          Promise.resolve(e.prefetch(t, n, i)).catch((e) => {});
        }
      }
      function _(e) {
        return "string" == typeof e ? e : l.formatUrl(e);
      }
      let y = o.default.forwardRef(function (e, t) {
        let n, i;
        let {
            href: l,
            as: p,
            children: y,
            prefetch: b,
            passHref: x,
            replace: w,
            shallow: j,
            scroll: C,
            locale: k,
            onClick: N,
            onMouseEnter: O,
            onTouchStart: S,
            legacyBehavior: E = !1,
          } = e,
          M = a(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = y),
          E &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = o.default.createElement("a", null, n));
        let L = !1 !== b,
          P = o.default.useContext(d.RouterContext),
          R = o.default.useContext(f.AppRouterContext),
          z = null != P ? P : R,
          D = !P,
          { href: F, as: I } = o.default.useMemo(() => {
            if (!P) {
              let e = _(l);
              return { href: e, as: p ? _(p) : e };
            }
            let [e, t] = r.resolveHref(P, l, !0);
            return { href: e, as: p ? r.resolveHref(P, p) : t || e };
          }, [P, l, p]),
          T = o.default.useRef(F),
          A = o.default.useRef(I);
        E && (i = o.default.Children.only(n));
        let B = E ? i && "object" == typeof i && i.ref : t,
          [W, U, H] = h.useIntersection({ rootMargin: "200px" }),
          X = o.default.useCallback(
            (e) => {
              (A.current !== I || T.current !== F) &&
                (H(), (A.current = I), (T.current = F)),
                W(e),
                B &&
                  ("function" == typeof B
                    ? B(e)
                    : "object" == typeof B && (B.current = e));
            },
            [I, B, F, H, W]
          );
        o.default.useEffect(() => {
          z && U && L && v(z, F, I, { locale: k }, D);
        }, [I, F, U, k, L, null == P ? void 0 : P.locale, z, D]);
        let Z = {
          ref: X,
          onClick(e) {
            E || "function" != typeof N || N(e),
              E &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(e),
              z &&
                !e.defaultPrevented &&
                (function (e, t, n, i, a, r, l, c, u, d) {
                  let { nodeName: f } = e.currentTarget,
                    h = "A" === f.toUpperCase();
                  if (
                    h &&
                    ((function (e) {
                      let t = e.currentTarget,
                        n = t.getAttribute("target");
                      return (
                        (n && "_self" !== n) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!u && !s.isLocalURL(n)))
                  )
                    return;
                  e.preventDefault();
                  let m = () => {
                    "beforePopState" in t
                      ? t[a ? "replace" : "push"](n, i, {
                          shallow: r,
                          locale: c,
                          scroll: l,
                        })
                      : t[a ? "replace" : "push"](i || n, {
                          forceOptimisticNavigation: !d,
                        });
                  };
                  u ? o.default.startTransition(m) : m();
                })(e, z, F, I, w, j, C, k, D, L);
          },
          onMouseEnter(e) {
            E || "function" != typeof O || O(e),
              E &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              z &&
                (L || !D) &&
                v(
                  z,
                  F,
                  I,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  D
                );
          },
          onTouchStart(e) {
            E || "function" != typeof S || S(e),
              E &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              z &&
                (L || !D) &&
                v(
                  z,
                  F,
                  I,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  D
                );
          },
        };
        if (c.isAbsoluteUrl(I)) Z.href = I;
        else if (!E || x || ("a" === i.type && !("href" in i.props))) {
          let e = void 0 !== k ? k : null == P ? void 0 : P.locale,
            t =
              (null == P ? void 0 : P.isLocaleDomain) &&
              m.getDomainLocale(
                I,
                e,
                null == P ? void 0 : P.locales,
                null == P ? void 0 : P.domainLocales
              );
          Z.href =
            t ||
            g.addBasePath(
              u.addLocale(I, e, null == P ? void 0 : P.defaultLocale)
            );
        }
        return E
          ? o.default.cloneElement(i, Z)
          : o.default.createElement("a", Object.assign({}, M, Z), n);
      });
      (t.default = y),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    508: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: n, disabled: l } = e,
            c = l || !o,
            [u, d] = i.useState(!1),
            f = i.useRef(null),
            h = i.useCallback((e) => {
              f.current = e;
            }, []);
          i.useEffect(() => {
            if (o) {
              if (c || u) return;
              let e = f.current;
              if (e && e.tagName) {
                let i = (function (e, t, n) {
                  let {
                    id: i,
                    observer: a,
                    elements: o,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      i = s.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (i && (t = r.get(i))) return t;
                    let a = new Map(),
                      o = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = a.get(e.target),
                            n = e.isIntersecting || e.intersectionRatio > 0;
                          t && n && t(n);
                        });
                      }, e);
                    return (
                      (t = { id: n, observer: o, elements: a }),
                      s.push(n),
                      r.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    o.set(e, t),
                    a.observe(e),
                    function () {
                      if ((o.delete(e), a.unobserve(e), 0 === o.size)) {
                        a.disconnect(), r.delete(i);
                        let e = s.findIndex(
                          (e) => e.root === i.root && e.margin === i.margin
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
                return i;
              }
            } else if (!u) {
              let e = a.requestIdleCallback(() => d(!0));
              return () => a.cancelIdleCallback(e);
            }
          }, [c, n, t, u, f.current]);
          let m = i.useCallback(() => {
            d(!1);
          }, []);
          return [h, u, m];
        });
      var i = n(7294),
        a = n(29);
      let o = "function" == typeof IntersectionObserver,
        r = new Map(),
        s = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7757: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getImageBlurSvg = function (e) {
          let {
              widthInt: t,
              heightInt: n,
              blurWidth: i,
              blurHeight: a,
              blurDataURL: o,
              objectFit: r,
            } = e,
            s = i || t,
            l = a || n,
            c = o.startsWith("data:image/jpeg")
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : "";
          return s && l
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(s, " ")
                .concat(
                  l,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(i && a ? "1" : "20", "'/%3E")
                .concat(
                  c,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(o, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"
                .concat(
                  "contain" === r
                    ? "xMidYMid"
                    : "cover" === r
                    ? "xMidYMid slice"
                    : "none",
                  "' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(o, "'/%3E%3C/svg%3E");
        });
    },
    7746: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: i, quality: a } = e;
        return ""
          .concat(t.path, "?url=")
          .concat(encodeURIComponent(n), "&w=")
          .concat(i, "&q=")
          .concat(a || 75);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        (n.__next_img_default = !0),
        (t.default = n);
    },
    6004: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var i = n(5893),
        a = n(8364),
        o = n(2430);
      n(3814), n(4640), n(9678);
      var r = n(1163);
      function s(e) {
        let { Component: t, pageProps: n } = e,
          s = (0, r.useRouter)(),
          l = "/" !== s.pathname,
          c = "/" !== s.pathname;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            l && (0, i.jsx)(o.Z, {}),
            (0, i.jsx)(t, { ...n }),
            c && (0, i.jsx)(a.Z, {}),
          ],
        });
      }
      n(5786);
    },
    9678: function () {},
    4640: function () {},
    3814: function () {},
    3264: function (e) {
      e.exports = {
        footer: "style_footer__bkb7i",
        footer_content: "style_footer_content__IYFoq",
        contact_section: "style_contact_section__oi2F1",
        footerlink_container: "style_footerlink_container__0UG_c",
        copyright: "style_copyright__AvLW1",
      };
    },
    2547: function (e) {
      e.exports = {
        nav: "style_nav__dFsxi",
        menulist: "style_menulist__uN_Yx",
        nav_links: "style_nav_links__gBOFU",
        hamburgerMenuContainer: "style_hamburgerMenuContainer__XXHVI",
        overlayMenu: "style_overlayMenu__pyuKk",
        closeButtonCase: "style_closeButtonCase__H2mCD",
        desktopMenu: "style_desktopMenu__28ksC",
        mobileMenu: "style_mobileMenu__ah4xb",
        nav_menu: "style_nav_menu__EPfLD",
        menuicon: "style_menuicon__RLeih",
      };
    },
    7650: function (e) {
      e.exports = {
        mobilemenuContainer: "style_mobilemenuContainer__YtC6_",
        navlogo: "style_navlogo__xxMJ8",
        navmenu: "style_navmenu__3oHYt",
        list: "style_list__BhFpP",
        nav_item: "style_nav_item__3zgRM",
        feature: "style_feature__5FeRy",
        featurebutton: "style_featurebutton__208Cg",
      };
    },
    1337: function (e) {
      e.exports = {
        big_container: "style_big_container__31Cys",
        container: "style_container__1JSUr",
        foreground: "style_foreground__Caup3",
        image_logo: "style_image_logo__LCM_j",
        copyright: "style_copyright__CtBXb",
        form: "style_form__7KT_0",
        footer: "style_footer__Juq1Z",
        anchor: "style_anchor__t9BBM",
        imageContainer: "style_imageContainer__TKl25",
        imageBottom: "style_imageBottom__YQFhd",
        buriText: "style_buriText___F7iL",
        imageInContainer: "style_imageInContainer__gLX7T",
      };
    },
    5675: function (e, t, n) {
      e.exports = n(3740);
    },
    1664: function (e, t, n) {
      e.exports = n(5569);
    },
    1163: function (e, t, n) {
      e.exports = n(6885);
    },
    7516: function (e, t, n) {
      "use strict";
      n.d(t, {
        YFw: function () {
          return o;
        },
        ib2: function () {
          return a;
        },
      });
      var i = n(8357);
      function a(e) {
        return (0, i.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: { d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" },
            },
          ],
        })(e);
      }
      function o(e) {
        return (0, i.w_)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z",
              },
            },
            { tag: "path", attr: { d: "M13 7h-2v6h6v-2h-4z" } },
          ],
        })(e);
      }
    },
    8357: function (e, t, n) {
      "use strict";
      n.d(t, {
        w_: function () {
          return l;
        },
      });
      var i = n(7294),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = i.createContext && i.createContext(a),
        r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }).apply(this, arguments);
        },
        s = function (e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              0 > t.indexOf(i) &&
              (n[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, i = Object.getOwnPropertySymbols(e);
              a < i.length;
              a++
            )
              0 > t.indexOf(i[a]) &&
                Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
                (n[i[a]] = e[i[a]]);
          return n;
        };
      function l(e) {
        return function (t) {
          return i.createElement(
            c,
            r({ attr: r({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map(function (t, n) {
                  return i.createElement(
                    t.tag,
                    r({ key: n }, t.attr),
                    e(t.child)
                  );
                })
              );
            })(e.child)
          );
        };
      }
      function c(e) {
        var t = function (t) {
          var n,
            a = e.attr,
            o = e.size,
            l = e.title,
            c = s(e, ["attr", "size", "title"]),
            u = o || t.size || "1em";
          return (
            t.className && (n = t.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            i.createElement(
              "svg",
              r(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                a,
                c,
                {
                  className: n,
                  style: r(r({ color: e.color || t.color }, t.style), e.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && i.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== o
          ? i.createElement(o.Consumer, null, function (e) {
              return t(e);
            })
          : t(a);
      }
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(1118), t(6885);
    }),
      (_N_E = e.O());
  },
]);
