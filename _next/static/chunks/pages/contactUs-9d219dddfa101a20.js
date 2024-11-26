(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [664],
  {
    3738: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "contactUs.html",
        function () {
          return s(2791);
        },
      ]);
    },
    8660: function (e, t, s) {
      "use strict";
      var a = s(5893),
        n = s(948),
        i = s.n(n),
        c = s(6893),
        r = s(155),
        o = s(4578),
        l = s(3750),
        m = s(5434);
      let d = (e) => {
        let { className: t } = e;
        return (0, a.jsxs)("div", {
          className: "".concat(i().cardContainer, " ").concat(t),
          children: [
            (0, a.jsxs)("h2", {
              children: ["Speak to Us ", (0, a.jsx)("br", {}), "directly"],
            }),
            (0, a.jsxs)("p", {
              children: [
                (0, a.jsx)(c.tUt, { size: 22, className: i().icon }),
                " \xa0",
                " ",
                (0, a.jsx)("a", {
                  href: "tel:(+256) 414670237",
                  children: " (+256) 706154000",
                }),
              ],
            }),
            (0, a.jsxs)("p", {
              children: [
                (0, a.jsx)(l.RGt, { size: 22, className: i().icon }),
                " \xa0",
                " ",
                (0, a.jsx)("a", {
                  href: "https://api.whatsapp.com/send?phone=+256414670237&text=Hi,%20I%27d%20like%20to%20request%20for%20services%20from%20the%20Signum%20Advocates%20law%20firm",
                  children: "(+256) 414670237",
                }),
              ],
            }),
            (0, a.jsxs)("p", {
              children: [
                (0, a.jsx)(r.kXE, { size: 22, className: i().icon }),
                "\xa032/34, Martyr's Road(Kasumba Circular Rd.)",
              ],
            }),
            (0, a.jsxs)("p", {
              children: [
                (0, a.jsx)(o.W$o, { size: 22, className: i().icon }),
                " \xa0",
                (0, a.jsx)("a", {
                  href: "http://www.omuronadvocates.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "www.omuronadvocates.com",
                }),
              ],
            }),
            (0, a.jsxs)("p", {
              children: [
                (0, a.jsx)(m.F8X, { size: 22, className: i().icon }),
                " \xa0",
                (0, a.jsx)("a", {
                  href: "mailto:partners@omuronadvocates.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "partners@omuronadvocates.com",
                }),
              ],
            }),
            (0, a.jsx)("p", { children: "32/34, Martyr's Road(Kasumba Circular Rd.) " }),
            (0, a.jsx)("p", { children: "Ntinda K'la(U)" }),
            (0, a.jsxs)("div", {
              className: i().socialmedia_iconscasing,
              children: [
                (0, a.jsx)(l.Vs6, { className: i().socialmedia_icon }),
                (0, a.jsx)(l.k1O, { className: i().socialmedia_icon }),
                (0, a.jsx)(l.NQh, { className: i().socialmedia_icon }),
                (0, a.jsx)(l.meP, { className: i().socialmedia_icon }),
                (0, a.jsx)(l.bUO, { className: i().socialmedia_icon }),
              ],
            }),
          ],
        });
      };
      t.Z = d;
    },
    8653: function (e, t, s) {
      "use strict";
      var a = s(5893),
        n = s(3685),
        i = s(1664),
        c = s.n(i),
        r = s(1163),
        o = s(7294),
        l = s(6637),
        m = s.n(l);
      let d = () => {
        let e = (0, r.useRouter)(),
          [t, s] = (0, o.useState)(""),
          [i, l] = (0, o.useState)(""),
          [d, _] = (0, o.useState)(""),
          [p, u] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            let t = n.fr.filter((e) => "/" !== e.path).filter((e) => !e.hide),
              a = t.find((t) => e.pathname.includes(t.path));
            s(a.name),
              u(["/publications", "/csr", "/careers"].includes(a.path)),
              console.log("Router is", e);
          }, [e]),
          (0, o.useEffect)(() => {
            let t = n.fr.filter((e) => "/" !== e.path).filter((e) => !e.hide),
              s = t.find((t) => e.pathname.includes(t.path));
            l(s.longDesc), _(s.shortDesc);
          }, [e.pathname]),
          (0, a.jsx)("nav", {
            className: ""
              .concat(m().nav, " ")
              .concat(p ? m().withBackground : ""),
            children: (0, a.jsxs)("div", {
              className: m().nav_content,
              children: [
                (0, a.jsx)("div", {
                  className: m().pageLink,
                  children: (0, a.jsx)(c(), { href: "", children: t }),
                }),
                (0, a.jsxs)("div", {
                  className: m().pageDescription,
                  children: [
                    (0, a.jsx)("p", { className: m().longDesc, children: i }),
                    (0, a.jsx)("p", { className: m().shortDesc, children: d }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      t.Z = d;
    },
    1148: function (e, t, s) {
      "use strict";
      var a = s(5893);
      s(7294);
      var n = s(9008),
        i = s.n(n);
      let c = (e) => {
        let {
          description: t = "Omuron Advocates",
          keywords:
            s = "Omuron Advocates, law firm, Practice areas, Divorce, SEO, Uganda, Lawyers in Uganda, appeals, trademark, estate planning, legal solutions, consultancy, firms near me, litigation",
          title: n = "Omuron Advocates",
          websiteUrl: c = "https://omurondvocates.com",
          imageUrl:
            r = "https://drive.google.com/uc?export=view&id=1U1fHGIPFmFZrvFnfazP9CEhUnHlOB1WI",
          imageAlt: o = "Omuron Advocates caters for all your legal needs.",
          imageWidth: l = "1280",
          imageHeight: m = "630",
          imageType: d = "image/png",
        } = e;
        return (0, a.jsxs)(i(), {
          children: [
            (0, a.jsx)("title", { children: n }),
            (0, a.jsx)("meta", { name: "description", content: t }),
            (0, a.jsx)("meta", { name: "keywords", content: s }),
            (0, a.jsx)("meta", { property: "og:title", content: n }),
            (0, a.jsx)("meta", { property: "og:description", content: t }),
            (0, a.jsx)("meta", { property: "og:image", content: r }),
            (0, a.jsx)("meta", {
              property: "og:image:url",
              content: r.replace("https", "http"),
            }),
            (0, a.jsx)("meta", { property: "og:image:secure_url", content: r }),
            (0, a.jsx)("meta", { property: "og:image:alt", content: o }),
            (0, a.jsx)("meta", { property: "og:image:width", content: l }),
            (0, a.jsx)("meta", { property: "og:image:height", content: m }),
            (0, a.jsx)("meta", { property: "og:image:type", content: d }),
            (0, a.jsx)("meta", { property: "og:url", content: c }),
            (0, a.jsx)("meta", { property: "og:site_name", content: n }),
            (0, a.jsx)("meta", { name: "twitter:title", content: n }),
            (0, a.jsx)("meta", {
              name: "twitter:site",
              content: "@signumadvocates",
            }),
            (0, a.jsx)("meta", { name: "twitter:description", content: t }),
            (0, a.jsx)("meta", { name: "twitter:image:alt", content: o }),
            (0, a.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, a.jsx)("link", { rel: "canonical", href: c }),
            (0, a.jsx)("link", {
              rel: "shortcut icon",
              href: "https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr",
            }),
            (0, a.jsx)("link", {
              rel: "icon",
              href: "https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr",
              type: "image/x-icon",
            }),
            (0, a.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "https://drive.google.com/uc?export=view&id=1CbuYpHI9gFNdtj7TbH1YP7ChizBhmkRf",
            }),
            (0, a.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "https://drive.google.com/uc?export=view&id=1Km_LpcITV0cwnlQi5bMP-atM4Dt2dAdc",
            }),
            (0, a.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "https://drive.google.com/uc?export=view&id=1Rtzn5SNLknPGsjwSx1MnW4Lr3AMeNXnH",
            }),
          ],
        });
      };
      t.Z = c;
    },
    8997: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return _;
        },
      });
      var a = s(5893),
        n = s(6321),
        i = s.n(n),
        c = s(9195),
        r = s(5434),
        o = s(7294);
      let l = () => {
          let e = {
              lastname: "",
              firstname: "",
              email: "",
              phoneNumber: "",
              message: "",
            },
            [t, s] = (0, o.useState)(e),
            a = (e) => {
              s((t) => ({ ...t, [e.target.id]: e.target.value }));
            },
            n = () => {
              s(e);
            };
          return { values: t, handleChange: a, resetInputValues: n };
        },
        m = async (e) => {
          fetch("/api/sendemail", {
            method: "POST",
            body: JSON.stringify(e),
            headers: { "Content-Type": "application/json" },
          });
        },
        d = (e) => {
          let { className: t } = e,
            { values: s, handleChange: n, resetInputValues: d } = l(),
            [_, p] = (0, o.useState)(null),
            u = () => {
              c.ZP.success({
                content: "Message sent successfully",
                className: "success_message",
                style: { fontSize: "18px", fontWeight: "bold" },
              });
            },
            h = (e) => {
              e.preventDefault(), m(s), u(), d();
            };
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("form", {
              className: i().form,
              onSubmit: h,
              children: (0, a.jsxs)("div", {
                className: "".concat(i().innerContainer, " ").concat(t),
                children: [
                  (0, a.jsxs)("h3", {
                    children: ["Send Us a ", (0, a.jsx)("br", {}), " Message"],
                  }),
                  (0, a.jsxs)("div", {
                    className: i().rowcontainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: i().labelinput_container,
                        children: [
                          (0, a.jsx)("label", {
                            htmlFor: "firstname",
                            className: i().label,
                            children: "First Name",
                          }),
                          (0, a.jsx)("input", {
                            id: "firstname",
                            type: "text",
                            className: i().input,
                            value: s.firstname,
                            onChange: n,
                            required: !0,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: i().labelinput_container,
                        children: [
                          (0, a.jsx)("label", {
                            htmlFor: "lastname",
                            className: i().label,
                            children: "Last Name",
                          }),
                          (0, a.jsx)("input", {
                            id: "lastname",
                            type: "text",
                            className: i().input,
                            value: s.lastname,
                            onChange: n,
                            required: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: i().rowcontainer,
                    children: [
                      (0, a.jsxs)("div", {
                        className: i().labelinput_container,
                        children: [
                          (0, a.jsx)("label", {
                            htmlFor: "phoneNumber",
                            className: i().label,
                            children: "Phone",
                          }),
                          (0, a.jsx)("input", {
                            id: "phoneNumber",
                            type: "",
                            className: i().inputz,
                            value: s.phoneNumber,
                            onChange: n,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: i().labelinput_container,
                        children: [
                          (0, a.jsx)("label", {
                            htmlFor: "user-email",
                            className: i().label,
                            children: "Email Address",
                          }),
                          (0, a.jsx)("input", {
                            id: "email",
                            type: "email",
                            className: i().inputz,
                            value: s.email,
                            onChange: n,
                            required: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: i().application_container,
                    children: [
                      (0, a.jsx)("label", {
                        className: i().label,
                        children: "Application",
                      }),
                      (0, a.jsx)("textarea", {
                        rows: "20",
                        cols: "80",
                        className: i().textarea,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: i().message_container,
                    children: [
                      (0, a.jsx)("label", {
                        htmlFor: "message",
                        className: i().label,
                        children: "Message",
                      }),
                      (0, a.jsx)("input", {
                        id: "message",
                        type: "text",
                        className: i().inputz,
                        value: s.message,
                        onChange: n,
                        required: !0,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: i().buttonContainer,
                    children: [
                      (0, a.jsxs)("button", {
                        className: ""
                          .concat(i().button, " ")
                          .concat(i().buttonOne),
                        children: [
                          "Attach Document",
                          (0, a.jsx)(r.GTQ, {
                            style: {
                              marginBottom: "-.15rem",
                              marginLeft: ".5rem",
                            },
                          }),
                        ],
                      }),
                      (0, a.jsx)("button", {
                        className: i().button,
                        children: "Send Message",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var _ = d;
    },
    2791: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return x;
          },
        });
      var a = s(5893),
        n = s(2072),
        i = s.n(n),
        c = s(8997),
        r = s(8660),
        o = s(8653);
      s(7294);
      var l = s(1649),
        m = s(4007),
        d = s.n(m);
      let _ = () =>
          (0, a.jsx)("div", {
            className: d().container,
            children: (0, a.jsx)("a", {
              href: "https://api.whatsapp.com/send?phone=+256414670237&text=Hi,%20I%27d%20like%20to%20request%20for%20services%20from%20the%20Signum%20Advocates%20law%20firm",
              children: (0, a.jsxs)("div", {
                className: "whatsapp-popup bubble speech",
                children: [
                  (0, a.jsx)(l.ff9, { color: "#1c8721", size: 30 }),
                  (0, a.jsx)("p", {
                    className: d().text,
                    children: "Chat with us",
                  }),
                ],
              }),
            }),
          }),
        p = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(o.Z, {}),
              (0, a.jsx)(_, {}),
              (0, a.jsx)("div", {
                className: i().contactOuterContainer,
                children: (0, a.jsxs)("div", {
                  className: i().contactContainer,
                  children: [
                    (0, a.jsx)(r.Z, { className: i().cardContainer }),
                    (0, a.jsx)(c.Z, { className: i().form }),
                  ],
                }),
              }),
            ],
          });
      var u = s(1148),
        h = s(3685),
        x = function () {
          return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(u.Z, {
                  title: "SIGNUM ADVOCATES | ".concat(h.XF.ContactUs.name),
                  description: h.XF.ContactUs,
                  websiteUrl: "".concat(h._n).concat(h.XF.ContactUs.path),
                }),
                (0, a.jsx)(p, {}),
              ],
            }),
          });
        };
    },
    948: function (e) {
      e.exports = {
        cardContainer: "style_cardContainer__vMJ5b",
        icon: "style_icon__tbG62",
        socialmedia_iconscasing: "style_socialmedia_iconscasing___MIuN",
        socialmedia_icon: "style_socialmedia_icon__PWiEl",
      };
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
    6321: function (e) {
      e.exports = {
        form: "style_form__nFSVu",
        innerContainer: "style_innerContainer___jZRZ",
        labelinput_container: "style_labelinput_container__B_fEg",
        rowcontainer: "style_rowcontainer__yIG3H",
        input: "style_input__ZzfYa",
        inputz: "style_inputz__nryAa",
        label: "style_label__wbHoU",
        buttonContainer: "style_buttonContainer__E09ar",
        button: "style_button__LhF7R",
        buttonOne: "style_buttonOne__2g8l8",
        message_container: "style_message_container__S_I46",
        application_container: "style_application_container__7So_m",
        labels: "style_labels__my_zM",
        textarea: "style_textarea__qXnKo",
        success_message: "style_success_message__LRREU",
      };
    },
    4007: function (e) {
      e.exports = {
        container: "style_container__rNVPC",
        text: "style_text__xmN0E",
      };
    },
    2072: function (e) {
      e.exports = {
        contactOuterContainer: "style_contactOuterContainer__iR1aH",
        contactContainer: "style_contactContainer__3smzi",
        cardContainer: "style_cardContainer__1v8u_",
        icon: "style_icon__9v_jA",
        socialmedia_iconscasing: "style_socialmedia_iconscasing__Q2Zl6",
        socialmedia_icon: "style_socialmedia_icon__y_SDB",
        form: "style_form__8e0Nu",
      };
    },
    9008: function (e, t, s) {
      e.exports = s(2636);
    },
  },
  function (e) {
    e.O(0, [13, 228, 260, 866, 876, 848, 893, 195, 774, 888, 179], function () {
      return e((e.s = 3738));
    }),
      (_N_E = e.O());
  },
]);
