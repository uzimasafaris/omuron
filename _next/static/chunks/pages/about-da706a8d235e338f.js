(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [521],
  {
    4184: function (e, t) {
      var n;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var s = {}.hasOwnProperty;
        function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var a = typeof n;
              if ("string" === a || "number" === a) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var r = i.apply(null, n);
                  r && e.push(r);
                }
              } else if ("object" === a) {
                if (
                  n.toString !== Object.prototype.toString &&
                  !n.toString.toString().includes("[native code]")
                ) {
                  e.push(n.toString());
                  continue;
                }
                for (var o in n) s.call(n, o) && n[o] && e.push(o);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 !==
              (n = function () {
                return i;
              }.apply(t, [])) && (e.exports = n);
      })();
    },
    512: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about.html",
        function () {
          return n(7869);
        },
      ]);
    },
    8653: function (e, t, n) {
      "use strict";
      var s = n(5893),
        i = n(3685),
        a = n(1664),
        r = n.n(a),
        o = n(1163),
        c = n(7294),
        l = n(6637),
        d = n.n(l);
      let u = () => {
        let e = (0, o.useRouter)(),
          [t, n] = (0, c.useState)(""),
          [a, l] = (0, c.useState)(""),
          [u, h] = (0, c.useState)(""),
          [p, g] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            let t = i.fr.filter((e) => "/" !== e.path).filter((e) => !e.hide),
              s = t.find((t) => e.pathname.includes(t.path));
            n(s.name),
              g(["/publications", "/csr", "/careers"].includes(s.path)),
              console.log("Router is", e);
          }, [e]),
          (0, c.useEffect)(() => {
            let t = i.fr.filter((e) => "/" !== e.path).filter((e) => !e.hide),
              n = t.find((t) => e.pathname.includes(t.path));
            l(n.longDesc), h(n.shortDesc);
          }, [e.pathname]),
          (0, s.jsx)("nav", {
            className: ""
              .concat(d().nav, " ")
              .concat(p ? d().withBackground : ""),
            children: (0, s.jsxs)("div", {
              className: d().nav_content,
              children: [
                (0, s.jsx)("div", {
                  className: d().pageLink,
                  children: (0, s.jsx)(r(), { href: "", children: t }),
                }),
                (0, s.jsxs)("div", {
                  className: d().pageDescription,
                  children: [
                    (0, s.jsx)("p", { className: d().longDesc, children: a }),
                    (0, s.jsx)("p", { className: d().shortDesc, children: u }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      t.Z = u;
    },
    1148: function (e, t, n) {
      "use strict";
      var s = n(5893);
      n(7294);
      var i = n(9008),
        a = n.n(i);
      let r = (e) => {
        let {
          description: t = "Signum Advocates",
          keywords:
            n = "Signum Advocates, law firm, Practice areas, Divorce, SEO, Uganda, Lawyers in Uganda, appeals, trademark, estate planning, legal solutions, consultancy, firms near me, litigation",
          title: i = "Signum Advocates",
          websiteUrl: r = "https://omuronadvocates.com",
          imageUrl:
            o = "https://drive.google.com/uc?export=view&id=1U1fHGIPFmFZrvFnfazP9CEhUnHlOB1WI",
          imageAlt: c = "Signum Advocates caters for all your legal needs.",
          imageWidth: l = "1280",
          imageHeight: d = "630",
          imageType: u = "image/png",
        } = e;
        return (0, s.jsxs)(a(), {
          children: [
            (0, s.jsx)("title", { children: i }),
            (0, s.jsx)("meta", { name: "description", content: t }),
            (0, s.jsx)("meta", { name: "keywords", content: n }),
            (0, s.jsx)("meta", { property: "og:title", content: i }),
            (0, s.jsx)("meta", { property: "og:description", content: t }),
            (0, s.jsx)("meta", { property: "og:image", content: o }),
            (0, s.jsx)("meta", {
              property: "og:image:url",
              content: o.replace("https", "http"),
            }),
            (0, s.jsx)("meta", { property: "og:image:secure_url", content: o }),
            (0, s.jsx)("meta", { property: "og:image:alt", content: c }),
            (0, s.jsx)("meta", { property: "og:image:width", content: l }),
            (0, s.jsx)("meta", { property: "og:image:height", content: d }),
            (0, s.jsx)("meta", { property: "og:image:type", content: u }),
            (0, s.jsx)("meta", { property: "og:url", content: r }),
            (0, s.jsx)("meta", { property: "og:site_name", content: i }),
            (0, s.jsx)("meta", { name: "twitter:title", content: i }),
            (0, s.jsx)("meta", {
              name: "twitter:site",
              content: "@signumadvocates",
            }),
            (0, s.jsx)("meta", { name: "twitter:description", content: t }),
            (0, s.jsx)("meta", { name: "twitter:image:alt", content: c }),
            (0, s.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, s.jsx)("link", { rel: "canonical", href: r }),
            (0, s.jsx)("link", {
              rel: "shortcut icon",
              href: "https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              href: "https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr",
              type: "image/x-icon",
            }),
            (0, s.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "https://drive.google.com/uc?export=view&id=1CbuYpHI9gFNdtj7TbH1YP7ChizBhmkRf",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "https://drive.google.com/uc?export=view&id=1Km_LpcITV0cwnlQi5bMP-atM4Dt2dAdc",
            }),
            (0, s.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "https://drive.google.com/uc?export=view&id=1Rtzn5SNLknPGsjwSx1MnW4Lr3AMeNXnH",
            }),
          ],
        });
      };
      t.Z = r;
    },
    3209: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return s;
        },
      });
      let s = [
        {
          id: "a1",
          title: "Relationships",
          text: "Relationships are a critical value in our law firm as they are necessary for building and maintaining a strong professional network. Successful relationships depend on trust, communication, and respect. We prioritize building strong relationships with our clients, colleagues, and the community.",
        },
        {
          id: "a4",
          title: "Trust",
          text: "Trust is an essential value in any law firm. It involves being honest, transparent, and reliable in all interactions with clients and colleagues. Building trust requires a commitment to ethical behavior, confidentiality, and professionalism. It is critical in establishing strong relationships with clients and ensuring their confidence in the firm.",
        },
        {
          id: "a3",
          title: "Innovation",
          text: "The value of innovation in signum refers to the ability to embrace change, think creatively and find new ways of approaching legal issues. We stay up-to-date with new technology, legal developments and market trends to provide the best solutions for our clients.",
        },
      ];
    },
    7869: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return U;
          },
        });
      var s = n(5893),
        i = n(5675),
        a = n.n(i),
        r = n(8586),
        o = n.n(r),
        c = n(1664),
        l = n.n(c),
        d = n(678),
        u = n.n(d);
      let h = (e) => {
        let { className: t, href: n, children: i } = e;
        return (0, s.jsx)(l(), {
          href: "".concat(n),
          passHref: !0,
          children: (0, s.jsx)("button", {
            className: "".concat(u().button, " ").concat(t),
            children: i,
          }),
        });
      };
      var p = n(3750),
        g = n(6893),
        m = n(155),
        x = n(5759),
        _ = n.n(x),
        f = n(2711),
        j = n.n(f);
      n(3497);
      var v = n(7294);
      let y = (e) => {
        let { title: t } = e;
        return (
          (0, v.useEffect)(() => {
            j().init({ duration: 1e3 });
          }),
          (0, s.jsxs)("div", {
            className: _().content,
            "data-aos": "fade-right",
            children: [
              (0, s.jsx)("h2", { children: t }),
              (0, s.jsx)("p", {
                children:
                  'lorem ipsumloremipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum ',
              }),
              (0, s.jsxs)(h, {
                className: _().button,
                href: "/practices",
                children: [
                  "View our Expertise ",
                  (0, s.jsx)(p.Dwu, { className: _().icon }),
                ],
              }),
            ],
          })
        );
      };
      var w = n(8653),
        b = n(5577),
        k = n.n(b);
      let S = (e) => {
        let { title: t, text: n } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("div", {
            className: k().cardcontainer,
            children: (0, s.jsx)("div", {
              className: k().card,
              children: (0, s.jsxs)("article", {
                children: [
                  (0, s.jsx)("h2", { children: t }),
                  (0, s.jsx)("p", { children: n }),
                ],
              }),
            }),
          }),
        });
      };
      var N = n(6066),
        C = n(3209),
        D = n(9328),
        O = n.n(D);
      let T = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className: O().largeScreen,
                children: C.B.map((e) =>
                  (0, s.jsx)(S, { title: e.title, text: e.text }, e.id)
                ),
              }),
              (0, s.jsx)("div", {
                className: O().smallScreen,
                children: (0, s.jsx)(N.Z, {
                  dots: !0,
                  infinite: !0,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: !0,
                        dots: !0,
                      },
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: { slidesToShow: 1, slidesToScroll: 1 },
                    },
                  ],
                  children: C.B.map((e) =>
                    (0, s.jsx)(S, { title: e.title, text: e.text }, e.id)
                  ),
                }),
              }),
            ],
          }),
        E = () => (
          (0, v.useEffect)(() => {
            j().init({ duration: 1e3 });
          }),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(w.Z, {}),
              (0, s.jsxs)("div", {
                className: o().aboutContainer,
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", { children: "2014" }),
                      (0, s.jsxs)("p", {
                        children: [
                          "Established in 2024, our company has quickly gained recognition for",
                          (0, s.jsx)("br", {}),
                          "our exceptional legal services and dedication to client satisfaction.",
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("span", { children: "1040" }),
                      (0, s.jsx)("p", {
                        children:
                          "Over the years, we have built a strong foundation and earned the trust of many clients seeking legal expertise. Today, we are thrilled to announce that we have successfully assisted and represented over 1,040 clients.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: o().lawcontainer,
                children: [
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)(y, { title: "Our Story" }),
                  }),
                  (0, s.jsx)("div", {
                    className: o().imageLawcontainer,
                    children: (0, s.jsx)(a(), {
                      src: "/Images/scale.png",
                      width: 420,
                      height: 450,
                      alt: "Law scale image",
                      priority: !0,
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: o().bussinessContainer,
                children: [
                  (0, s.jsxs)("div", {
                    className: o().content,
                    children: [
                      (0, s.jsxs)("h2", {
                        children: [
                          "Our business ",
                          (0, s.jsx)("br", {}),
                          " approach",
                        ],
                      }),
                      (0, s.jsx)("p", {
                        children:
                          "omuron Advocates offers an innovative approach to providing legal advice and the structuring of its fee arrangements within the confines of the law. We are known for our skilful work in highly complex and emerging areas, offering breadth and excellence that is unrivalled across most practice areas.",
                      }),
                      (0, s.jsxs)(h, {
                        className: o().secbutton,
                        href: "/practices",
                        children: [
                          "View our Expertise",
                          (0, s.jsx)(p.Dwu, { className: o().icon }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: o().goalcontent,
                    children: [
                      (0, s.jsxs)("h2", {
                        children: [
                          "Our Goal ",
                          (0, s.jsx)("br", {}),
                          "is your goal",
                        ],
                      }),
                      (0, s.jsx)(a(), {
                        src: "/Images/Archer.svg",
                        width: 350,
                        height: 340,
                        alt: "Archery image",
                        priority: !0,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: o().cardcontainer,
                children: [
                  (0, s.jsxs)("article", {
                    children: [
                      (0, s.jsx)("h2", { children: "Our Values" }),
                      (0, s.jsx)("p", {
                        children:
                          "We are driven by a set of core values that guide our approach to practicing law, maintaining high standards and serving our clients.",
                      }),
                    ],
                  }),
                  (0, s.jsx)(T, {}),
                ],
              }),
              (0, s.jsxs)("div", {
                className: o().contactContainer,
                children: [
                  (0, s.jsxs)("div", {
                    className: o().contactinnerContainer,
                    children: [
                      (0, s.jsxs)("h2", {
                        children: [
                          "Contact ",
                          (0, s.jsx)("span", { children: "us" }),
                        ],
                      }),
                      (0, s.jsxs)("a", {
                        style: { color: "black" },
                        href: "tel: (+256) 414670237",
                        children: [
                          (0, s.jsx)(g.tUt, {}),
                          " \xa0  (+256) 706154000",
                        ],
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          (0, s.jsx)(m.kXE, {}),
                          " \xa0 Kampala, Uganda",
                        ],
                      }),
                      (0, s.jsxs)(h, {
                        className: o().contacttbutton,
                        href: "/contactUs",
                        children: [
                          "Contact Form ",
                          (0, s.jsx)(p.Dwu, { className: o().icon }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: o().meetContainer,
                    children: (0, s.jsxs)("article", {
                      children: [
                        (0, s.jsx)("h2", { children: "Join us!" }),
                        (0, s.jsx)("p", {
                          children:
                            "Whether you are a seasoned lawyer or just starting out in your legal career, we encourage you to explore our current job openings and apply to join our team. We offer competitive remuneration along with professional development and growth.",
                        }),
                        (0, s.jsxs)(h, {
                          className: o().joinbutton,
                          href: "/careers",
                          children: [
                            "See Offers ",
                            (0, s.jsx)(p.Dwu, { className: o().icon }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      var F = n(1148),
        A = n(3685),
        U = function () {
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(F.Z, {
                title: "SIGNUM ADVOCATES | ".concat(A.XF.AboutUs.name),
                description: A.XF.AboutUs.longDesc,
                websiteUrl: "".concat(A._n).concat(A.XF.AboutUs.path),
              }),
              (0, s.jsx)(E, {}),
            ],
          });
        };
    },
    678: function (e) {
      e.exports = { button: "style_button__GX_Un" };
    },
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
    9328: function (e) {
      e.exports = {
        largeScreen: "style_largeScreen__EIzt5",
        smallScreen: "style_smallScreen__gWPQ5",
      };
    },
    5759: function (e) {
      e.exports = {
        content: "style_content__S0sCU",
        button: "style_button__Nc0yQ",
        icon: "style_icon__quNzI",
      };
    },
    5577: function (e) {
      e.exports = {
        cardcontainer: "style_cardcontainer__jlE28",
        card: "style_card__7bFI0",
        "slick-initialized": "style_slick-initialized__7xvea",
        "slick-slide": "style_slick-slide___9Og4",
      };
    },
    8586: function (e) {
      e.exports = {
        aboutContainer: "style_aboutContainer__kgwkG",
        lawcontainer: "style_lawcontainer__UVOqR",
        bussinessContainer: "style_bussinessContainer__WCQQH",
        content: "style_content__qdO9f",
        cardcontainer: "style_cardcontainer__uwFxe",
        icon: "style_icon__JnFYC",
        secbutton: "style_secbutton__S24mC",
        goalcontent: "style_goalcontent__PETng",
        contactContainer: "style_contactContainer__QH_T_",
        contactinnerContainer: "style_contactinnerContainer__JW_bY",
        contacttbutton: "style_contacttbutton__mYC9r",
        joinbutton: "style_joinbutton__uc8Pz",
        meetContainer: "style_meetContainer__Mj_K_",
        imageLawcontainer: "style_imageLawcontainer__dTQD_",
      };
    },
  },
  function (e) {
    e.O(0, [13, 260, 306, 893, 815, 774, 888, 179], function () {
      return e((e.s = 512));
    }),
      (_N_E = e.O());
  },
]);
