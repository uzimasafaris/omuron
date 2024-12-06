(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [698],
  {
    9687: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/careers.html",
        function () {
          return a(6918);
        },
      ]);
    },
    8653: function (e, t, a) {
      "use strict";
      var n = a(5893),
        i = a(3685),
        r = a(1664),
        s = a.n(r),
        o = a(1163),
        l = a(7294),
        c = a(6637),
        d = a.n(c);
      let u = () => {
        let e = (0, o.useRouter)(),
          [t, a] = (0, l.useState)(""),
          [r, c] = (0, l.useState)(""),
          [u, p] = (0, l.useState)(""),
          [m, g] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            let t = i.fr.filter((e) => "/" !== e.path).filter((e) => !e.hide),
              n = t.find((t) => e.pathname.includes(t.path));
            a(n.name),
              g(["/publications", "/csr", "/careers"].includes(n.path)),
              console.log("Router is", e);
          }, [e]),
          (0, l.useEffect)(() => {
            let t = i.fr.filter((e) => "/" !== e.path).filter((e) => !e.hide),
              a = t.find((t) => e.pathname.includes(t.path));
            c(a.longDesc), p(a.shortDesc);
          }, [e.pathname]),
          (0, n.jsx)("nav", {
            className: ""
              .concat(d().nav, " ")
              .concat(m ? d().withBackground : ""),
            children: (0, n.jsxs)("div", {
              className: d().nav_content,
              children: [
                (0, n.jsx)("div", {
                  className: d().pageLink,
                  children: (0, n.jsx)(s(), { href: "", children: t }),
                }),
                (0, n.jsxs)("div", {
                  className: d().pageDescription,
                  children: [
                    (0, n.jsx)("p", { className: d().longDesc, children: r }),
                    (0, n.jsx)("p", { className: d().shortDesc, children: u }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      t.Z = u;
    },
    1148: function (e, t, a) {
      "use strict";
      var n = a(5893);
      a(7294);
      var i = a(9008),
        r = a.n(i);
      let s = (e) => {
        let {
          description: t = "Signum Advocates",
          keywords:
            a = "Signum Advocates, law firm, Practice areas, Divorce, SEO, Uganda, Lawyers in Uganda, appeals, trademark, estate planning, legal solutions, consultancy, firms near me, litigation",
          title: i = "Signum Advocates",
          websiteUrl: s = "https://signumadvocates.com",
          imageUrl:
            o = "https://drive.google.com/uc?export=view&id=1U1fHGIPFmFZrvFnfazP9CEhUnHlOB1WI",
          imageAlt: l = "Signum Advocates caters for all your legal needs.",
          imageWidth: c = "1280",
          imageHeight: d = "630",
          imageType: u = "image/png",
        } = e;
        return (0, n.jsxs)(r(), {
          children: [
            (0, n.jsx)("title", { children: i }),
            (0, n.jsx)("meta", { name: "description", content: t }),
            (0, n.jsx)("meta", { name: "keywords", content: a }),
            (0, n.jsx)("meta", { property: "og:title", content: i }),
            (0, n.jsx)("meta", { property: "og:description", content: t }),
            (0, n.jsx)("meta", { property: "og:image", content: o }),
            (0, n.jsx)("meta", {
              property: "og:image:url",
              content: o.replace("https", "http"),
            }),
            (0, n.jsx)("meta", { property: "og:image:secure_url", content: o }),
            (0, n.jsx)("meta", { property: "og:image:alt", content: l }),
            (0, n.jsx)("meta", { property: "og:image:width", content: c }),
            (0, n.jsx)("meta", { property: "og:image:height", content: d }),
            (0, n.jsx)("meta", { property: "og:image:type", content: u }),
            (0, n.jsx)("meta", { property: "og:url", content: s }),
            (0, n.jsx)("meta", { property: "og:site_name", content: i }),
            (0, n.jsx)("meta", { name: "twitter:title", content: i }),
            (0, n.jsx)("meta", {
              name: "twitter:site",
              content: "@signumadvocates",
            }),
            (0, n.jsx)("meta", { name: "twitter:description", content: t }),
            (0, n.jsx)("meta", { name: "twitter:image:alt", content: l }),
            (0, n.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, n.jsx)("link", { rel: "canonical", href: s }),
            (0, n.jsx)("link", {
              rel: "shortcut icon",
              href: "https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              href: "https://drive.google.com/uc?export=view&id=1VUqOFOvvfck5gVmKjBuett9Hs8qDuVfr",
              type: "image/x-icon",
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "https://drive.google.com/uc?export=view&id=1CbuYpHI9gFNdtj7TbH1YP7ChizBhmkRf",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "https://drive.google.com/uc?export=view&id=1Km_LpcITV0cwnlQi5bMP-atM4Dt2dAdc",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "https://drive.google.com/uc?export=view&id=1Rtzn5SNLknPGsjwSx1MnW4Lr3AMeNXnH",
            }),
          ],
        });
      };
      t.Z = s;
    },
    656: function (e, t, a) {
      "use strict";
      a.d(t, {
        q: function () {
          return n;
        },
      });
      let n = [
        // {
        //   id: "c2",
        //   title: "Junior Associate",
        //   description:
        //     "Candidate will be responsible for assisting senior attorneys in all aspects of legal work, including legal research, drafting legal documents, and client communication.",
        //   date: "Deadline 25th January 2023",
        //   roles: [
        //     "As a junior associate at our law firm, you will be involved in conducting legal research and analysis to support senior attorneys. You will assist in reviewing statutes, regulations, and case law relevant to ongoing cases.",
        //     "Join our team as a junior associate and play a crucial role in document preparation and case management. You will assist in drafting legal documents, such as contracts, pleadings, and motions.",
        //   ],
        // },
        // {
        //   id: "c4",
        //   title: "Finance Administrators",
        //   description:
        //     "Ideal candidate should be able to process financial transactions such as accounts payable and receivable.",
        //   date: "Deadline 5th February 2023",
        //   roles: [
        //     "As a finance administrator at our law firm, you will be responsible for maintaining accurate financial records and generating regular reports.",
        //     "Join our team as a finance administrator and play a vital role in managing accounts payable and receivable processes. You will oversee invoicing, payment processing, and reconciliation of client accounts.",
        //   ],
        // },
        // {
        //   id: "c5",
        //   title: "Legal Assistant",
        //   description:
        //     "We are looking for a skilled legal assistant to provide administrative support to our legal team. The ideal candidate will be organized, and able to handle multiple tasks.",
        //   date: "Deadline 25th March 2023",
        //   roles: [
        //     "As a legal assistant at our law firm, you will be responsible for conducting thorough legal research and analysis on various cases and legal issues.",
        //     "Join our team as a legal assistant and play a vital role in document preparation and management. You will assist attorneys in drafting and proofreading legal documents, such as contracts, briefs, and motions.",
        //   ],
        // },
        // {
        //   id: "c6",
        //   title: "Senior Associate",
        //   description:
        //     "Candidate should be able to lead legal projects and providing strategic advice to clients, 5+ years of experience in a legal department.",
        //   date: "Deadline 12th January 2023",
        //   roles: [
        //     "As an associate attorney at our law firm, you will be responsible for conducting legal research, analyzing cases, and providing expert advice to our clients.",
        //     "Assist senior attorneys in preparing legal documents, drafting contracts, and representing clients in court proceedings.",
        //   ],
        // },
        // {
        //   id: "c7",
        //   title: "Law Clerks",
        //   description:
        //     "We are looking for a highly motivated Law Clerk to provide support to our legal team. The successful candidate will work closely with our attorneys and other staff members.",
        //   date: "Deadline 25th April 2023",
        //   roles: [
        //     "As a law clerk at our law firm, you will play a crucial role in conducting legal research and drafting legal documents. You will assist attorneys in analyzing statutes, regulations, and case law to support ongoing cases.",
        //     "Join our team as a law clerk and provide essential support in case management and administration. You will assist attorneys in organizing and maintaining case files.",
        //   ],
        // },
        // {
        //   id: "c8",
        //   title: "Internship",
        //   description:
        //     "Are you looking to kickstart your legal career and gain practical experience in a dynamic law firm? Join our internship program and embark on an exciting journey of professional growth",
        //   date: "Deadline 25th April 2023",
        //   roles: [
        //     "As an intern at our law firm, you will have the opportunity to gain hands-on experience in legal research and provide valuable support to the legal team.",
        //     " Join our internship program and contribute to the efficient management of cases and administrative tasks. You will assist in organizing and maintaining case files, scheduling meetings and appointments.",
        //   ],
        // },
      ];
    },
    6918: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSP: function () {
            return N;
          },
          default: function () {
            return A;
          },
        });
      var n = a(5893),
        i = a(1148),
        r = a(656),
        s = a(5675),
        o = a.n(s),
        l = a(7018),
        c = a.n(l),
        d = a(7516);
      let u = (e) => {
        let { career: t, onClick: a } = e;
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            className: c().card,
            children: [
              (0, n.jsx)("h2", { children: t.title }),
              (0, n.jsx)("p", { children: t.description }),
              (0, n.jsxs)("p", {
                children: [
                  (0, n.jsx)(d.YFw, { className: c().timeicon }),
                  t.date,
                ],
              }),
              (0, n.jsxs)("button", {
                onClick: () => a(t),
                children: [
                  "More details",
                  (0, n.jsx)("span", {
                    children: (0, n.jsx)(o(), {
                      src: "/Images/arrow_right.svg",
                      height: 15,
                      width: 15,
                      className: c().icon,
                      alt: "direction arrow",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var p = a(7294),
        m = a(7009),
        g = a.n(m);
      let h = (e) => {
        let { text: t, partnerImages: a } = e,
          i = (0, p.useMemo)(() => {
            if (!(null == a ? void 0 : a.length)) return null;
            {
              let e = 100 / a.length,
                t = a.map((t, a) => "".concat(a * e, "% 50%")).join(", ");
              return {
                backgroundRepeat: "no-repeat",
                backgroundSize: "".concat(e, "% auto"),
                backgroundPosition: t,
                backgroundImage: "".concat(
                  a.map((e) => 'url("'.concat(e.image_url, '")')).join(", ")
                ),
              };
            }
          }, [a]);
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("div", {
            className: g().careerContainer,
            children: (0, n.jsxs)("article", {
              children: [
                (0, n.jsx)("h1", { style: i, children: "Careers." }),
                (0, n.jsx)("p", { children: t }),
              ],
            }),
          }),
        });
      };
      a(8653);
      let f = () =>
        (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(h, {
            text: "There is no job opportunity available available at this time. We appreciate your interest in pursuing a career with Signum, and we encourage you to keep checking our website or job boards for any future job postings that may match your skills and qualifications.",
          }),
        });
      var x = a(5318),
        j = a.n(x),
        _ = a(1664),
        y = a.n(_),
        v = a(6035),
        w = a.n(v);
      let b = (e) => {
          let { onClose: t, career: a } = e,
            i = (0, p.useRef)();
          return (
            (0, p.useEffect)(() => {
              function e(e) {
                i.current && !i.current.contains(e.target) && t();
              }
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [i, t]),
            (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)("div", {
                className: w().modal_container,
                children: (0, n.jsxs)("div", {
                  className: w().modal,
                  ref: i,
                  children: [
                    (0, n.jsx)("h2", { children: a.title }),
                    (0, n.jsx)("p", {
                      className: w().modaltext,
                      children: a.description,
                    }),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("h4", {
                      style: {
                        color: "#55555",
                        fontSize: "1.5rem",
                        lineHeight: "24px",
                      },
                      children: "Roles",
                    }),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("ul", {
                      className: w().rolelist,
                      children: a.roles.map((e) =>
                        (0, n.jsx)("li", { children: e })
                      ),
                    }),
                    (0, n.jsx)("br", {}),
                    (0, n.jsxs)("article", {
                      children: [
                        (0, n.jsx)("span", {
                          className: w().date,
                          children: a.date,
                        }),
                        (0, n.jsx)(y(), {
                          href: "/careers/apply}",
                          children: (0, n.jsx)("button", {
                            className: w().button,
                            onClick: t,
                            children: "Click here to Apply",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        k = (e) => {
          let { onButtonClick: t, teamMembers: a } = e,
            [i, s] = (0, p.useState)(null),
            o = (e) => {
              s(e);
            };
          return (0, n.jsxs)(n.Fragment, {
            children: [
              r.q.length > 0
                ? (0, n.jsxs)("div", {
                    className: j().careerContainer,
                    children: [
                      (0, n.jsx)(h, {
                        partnerImages: a,
                        text: "As a dynamic and innovative law firm, we are always on the lookout for talented individuals to join our team. We pride ourselves on our commitment to professional development and creating a supportive and inclusive workplace culture. Our Careers page provides information about our current job opportunities, as well as insights into what it's like to work with us.",
                      }),
                      (0, n.jsx)("div", {
                        className: j().cardContainer,
                        children: r.q.map((e) =>
                          (0, n.jsx)(u, { career: e, onClick: o }, e.id)
                        ),
                      }),
                    ],
                  })
                : (0, n.jsx)(f, {}),
              i && (0, n.jsx)(b, { career: i, onClose: () => s(null) }),
            ],
          });
        };
      var C = a(3685),
        N = !0,
        A = function (e) {
          let { teamMembers: t } = e,
            [a, r] = (0, p.useState)(!1),
            s = () => {
              r((e) => !e);
            };
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(i.Z, {
                title: "SIGNUM ADVOCATES | ".concat(C.XF.Careers.name),
                description: C.XF.Careers.longDesc,
                websiteUrl: "".concat(C._n).concat(C.XF.Careers.path),
              }),
              (0, n.jsx)(k, { onButtonClick: s, teamMembers: t }),
              a && (0, n.jsx)(b, { onClose: s }),
            ],
          });
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
    7009: function (e) {
      e.exports = { careerContainer: "style_careerContainer__s3PVu" };
    },
    7018: function (e) {
      e.exports = {
        card: "style_card__uYMrA",
        icon: "style_icon__mEpra",
        timeicon: "style_timeicon__RG6m9",
      };
    },
    6035: function (e) {
      e.exports = {
        modal_container: "style_modal_container__zkj_M",
        modal: "style_modal__Lrk24",
        modaltext: "style_modaltext__jFa1J",
        rolelist: "style_rolelist__2aUD0",
        date: "style_date__1moJU",
        button: "style_button__UWsst",
      };
    },
    5318: function (e) {
      e.exports = {
        cardContainer: "style_cardContainer__QBj1W",
        careerContainer: "style_careerContainer__ERVT1",
      };
    },
    9008: function (e, t, a) {
      e.exports = a(2636);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 9687));
    }),
      (_N_E = e.O());
  },
]);
