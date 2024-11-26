(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [406],
  {
    3204: function (e) {
      "use strict";
      let t = (e) => {
          let t = !1,
            n = !1,
            r = !1;
          for (let a = 0; a < e.length; a++) {
            let i = e[a];
            t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i
              ? ((e = e.slice(0, a) + "-" + e.slice(a)),
                (t = !1),
                (r = n),
                (n = !0),
                a++)
              : n && r && /[a-zA-Z]/.test(i) && i.toLowerCase() === i
              ? ((e = e.slice(0, a - 1) + "-" + e.slice(a - 1)),
                (r = n),
                (n = !1),
                (t = !0))
              : ((t = i.toLowerCase() === i && i.toUpperCase() !== i),
                (r = n),
                (n = i.toUpperCase() === i && i.toLowerCase() !== i));
          }
          return e;
        },
        n = (e, n) => {
          var r;
          if (!("string" == typeof e || Array.isArray(e)))
            throw TypeError("Expected the input to be `string | string[]`");
          if (
            ((n = Object.assign({ pascalCase: !1 }, n)),
            0 ===
              (e = Array.isArray(e)
                ? e
                    .map((e) => e.trim())
                    .filter((e) => e.length)
                    .join("-")
                : e.trim()).length)
          )
            return "";
          if (1 === e.length)
            return n.pascalCase ? e.toUpperCase() : e.toLowerCase();
          let a = e !== e.toLowerCase();
          return (
            a && (e = t(e)),
            (r = e =
              e
                .replace(/^[_.\- ]+/, "")
                .toLowerCase()
                .replace(/[_.\- ]+(\w|$)/g, (e, t) => t.toUpperCase())
                .replace(/\d+(\w|$)/g, (e) => e.toUpperCase())),
            n.pascalCase ? r.charAt(0).toUpperCase() + r.slice(1) : r
          );
        };
      (e.exports = n), (e.exports.default = n);
    },
    2255: function (e) {
      function t(e, t, n) {
        if (null != t && t < 2)
          throw Error("Maximum length must not be less than 2");
        if (null != t && t > 998)
          throw Error("Maximum length must not exceed 998");
        if (((t = t || 78), (e = e.replace(/[\r\n]+/g, "")).length <= t))
          return e;
        for (var r = "", a = 0, i = 0, s = e.length, o = 0, l = 0; a < s; ) {
          if (
            (!n && ~(i = e.lastIndexOf(" ", a + t))
              ? i > a
                ? ((r += e.slice(a, i) + "\r\n "), (a = i))
                : ((r += e.slice(a, a + t - l) + "\r\n "),
                  (a = a + t - l),
                  (n = !0))
              : ((r += e.slice(a, a + t - l) + "\r\n "), (a = a + t - l)),
            s - a < t)
          ) {
            r += e.slice(a);
            break;
          }
          0 === o && (l = 1), o++;
        }
        return r;
      }
      (t.unfold = function (e) {
        return e.replace(/\r\n\s/gm, "");
      }),
        (e.exports = t);
    },
    4568: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/team/[teamId]",
        function () {
          return n(3335);
        },
      ]);
    },
    6262: function (e, t, n) {},
    3335: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return A;
          },
          default: function () {
            return O;
          },
        });
      var r = n(5893);
      n(1952), n(6262);
      var a = n(5675),
        i = n.n(a),
        s = n(4067),
        o = n.n(s),
        l = n(3268),
        u = n.n(l),
        c = n(3750),
        d = n(7294),
        f = n(8716),
        p = n.n(f);
      let h = (e) => {
        let { teamMember: t, children: n } = e,
          a = (0, d.useRef)(null),
          [i, s] = (0, d.useState)(null),
          o = () => {
            var e;
            let n = new (p())(),
              r =
                null == t
                  ? void 0
                  : null === (e = t.name) || void 0 === e
                  ? void 0
                  : e.split(" "),
              a = r[0] || "",
              i = r[(null == r ? void 0 : r.length) - 1 || 0] || "";
            return (
              n.add("n", "".concat(i, ";").concat(a)),
              n.add("fn", null == t ? void 0 : t.name),
              n.add("title", null == t ? void 0 : t.position),
              n.add("email", null == t ? void 0 : t.email),
              n.add("tel", null == t ? void 0 : t.contact),
              n.add("org", "Signum Advocates"),
              n.toString()
            );
          };
        return (
          (0, d.useEffect)(() => {
            if (t) {
              let e = o(),
                t = new Blob([e], { type: "text/vcard" }),
                n = URL.createObjectURL(t);
              s(n);
            }
          }, [t]),
          (0, r.jsx)("a", {
            ref: a,
            href: i,
            download: "".concat(null == t ? void 0 : t.name, ".vcf"),
            children: n,
          })
        );
      };
      function m(e) {
        if (!e || "string" != typeof e) return "";
        let t = e.toLowerCase().split(" "),
          n = t.map((e) => {
            let t = e.charAt(0).toUpperCase() + e.slice(1);
            return t;
          }),
          r = n.join(" ");
        return r;
      }
      var v = n(5032),
        g = n(2096);
      let x = (e) => {
        var t, n, a, s;
        let { teamMember: l, index: d, nextTeamMemberId: f } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: o().teamMemberContainer,
              children: [
                (0, r.jsx)("div", {
                  className: o().imageWrapper,
                  children: (0, r.jsx)(i(), {
                    src: l.image_url,
                    width: 480,
                    height: 450,
                    alt: "profile image",
                    className: o().imageContainer,
                    style: { objectFit: "contain" },
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: o().memberHeading,
                  children: [
                    (0, r.jsx)("h2", { children: null == l ? void 0 : l.name }),
                    (0, r.jsx)("span", {
                      className: o().memberPosition,
                      children: null == l ? void 0 : l.position,
                    }),
                    (0, r.jsx)(h, {
                      teamMember: l,
                      children: (0, r.jsxs)("div", {
                        className: o().contactRow,
                        children: [
                          (0, r.jsxs)("div", {
                            className: o().downloadContactRow,
                            children: [
                              (0, r.jsx)(c.QNI, {
                                color: "#ffffff",
                                size: 20,
                                style: { marginRight: 0 },
                              }),
                              (0, r.jsx)(v.ZP, {
                                style: { borderWidth: 0 },
                                ghost: !0,
                                children: "Download Vcard",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: o().contactRowContent,
                            children: [
                              (0, r.jsx)("p", { children: l.email }),
                              (0, r.jsx)("p", { children: l.contact }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)(g.O.Group, {
              children: [
                (0, r.jsx)("div", {
                  className: o().tabList,
                  children: (0, r.jsxs)(g.O.List, {
                    className: u().line,
                    children: [
                      (0, r.jsx)(g.O, {
                        className: (e) => {
                          let { selected: t } = e;
                          return "".concat(t ? u().active : u().inactive);
                        },
                        children: "Overview",
                      }),
                      (0, r.jsx)(g.O, {
                        className: (e) => {
                          let { selected: t } = e;
                          return "".concat(t ? u().active : u().inactive);
                        },
                        children: "Experience",
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(g.O.Panels, {
                  children: [
                    (0, r.jsx)(g.O.Panel, {
                      className: o().gallery,
                      children: (0, r.jsxs)("div", {
                        className: o().profileContainer,
                        children: [
                          (0, r.jsxs)("div", {
                            className: o().bio,
                            children: [
                              (
                                null === (t = l.userPractices) || void 0 === t
                                  ? void 0
                                  : t.length
                              )
                                ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      (0, r.jsx)("h4", {
                                        children: "Practice area",
                                      }),
                                      (0, r.jsx)("hr", {}),
                                      (0, r.jsx)("p", {
                                        children:
                                          null === (n = l.userPractices) ||
                                          void 0 === n
                                            ? void 0
                                            : n.map((e) => e.title).join(", "),
                                      }),
                                    ],
                                  })
                                : null,
                              (0, r.jsx)("h4", { children: "Education" }),
                              (0, r.jsx)("hr", {}),
                              (0, r.jsx)("p", {
                                children: (0, r.jsx)("ul", {
                                  style: { textAlign: "justify" },
                                  children: l.userEducation
                                    .map((e) => {
                                      var t;
                                      let n = ""
                                        .concat(
                                          e.level
                                            ? ""
                                                .concat(m(e.level), " ")
                                                .concat(
                                                  (null ===
                                                    (t =
                                                      e.title[
                                                        e.title.length - 1
                                                      ]) || void 0 === t
                                                    ? void 0
                                                    : t.toLowerCase()) === "s"
                                                    ? "of"
                                                    : "in"
                                                )
                                            : "",
                                          "  "
                                        )
                                        .concat(e.title)
                                        .concat(
                                          (null == e ? void 0 : e.decoration)
                                            ? " (".concat(m(e.decoration), ")")
                                            : "",
                                          ", "
                                        )
                                        .concat(e.institute.name)
                                        .concat(
                                          e.institute.name
                                            .toLowerCase()
                                            .includes(
                                              e.institute.location.toLowerCase()
                                            )
                                            ? ""
                                            : ", " + e.institute.location
                                        )
                                        .concat(
                                          (null == e ? void 0 : e.isOngoing)
                                            ? " (ongoing)"
                                            : "",
                                          "."
                                        );
                                      return n;
                                    })
                                    .map((e) =>
                                      (0, r.jsx)("li", { children: e }, e)
                                    ),
                                }),
                              }),
                              (
                                null === (a = l.userMemberships) || void 0 === a
                                  ? void 0
                                  : a.length
                              )
                                ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      (0, r.jsx)("h4", {
                                        children: "Memberships",
                                      }),
                                      (0, r.jsx)("hr", {}),
                                      (0, r.jsx)("ul", {
                                        children:
                                          null === (s = l.userMemberships) ||
                                          void 0 === s
                                            ? void 0
                                            : s.map((e) =>
                                                (0, r.jsx)(
                                                  "li",
                                                  { children: e.name },
                                                  e._id
                                                )
                                              ),
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: o().content,
                            dangerouslySetInnerHTML: { __html: l.description },
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)(g.O.Panel, {
                      className: u().gallery,
                      children: (0, r.jsx)("div", {
                        className: o().experienceContainer,
                        children: l.experience
                          ? (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: l.experience,
                                },
                              }),
                            })
                          : null,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var b = n(1664),
        y = n.n(b),
        _ = n(6939),
        w = n.n(_),
        E = n(5434),
        j = n(1148),
        N = n(3685);
      let C = (e) => {
        let { teamMember: t, nextTeamMemberId: n } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(j.Z, {
              title: "OMURON ADVOCATES | "
                .concat(N.XF.Team.name, " | ")
                .concat(t.name),
              description: N.XF.Team.longDesc,
              websiteUrl: "".concat(N._n).concat(N.XF.Team.path),
            }),
            (0, r.jsx)(x, { teamMember: t }),
            (0, r.jsxs)("div", {
              className: w().nextPage,
              children: [
                (0, r.jsx)("h3", { children: "Want to see more?" }),
                (0, r.jsx)("hr", {}),
                (0, r.jsxs)("article", {
                  children: [
                    (0, r.jsx)(y(), {
                      href: "/team",
                      children: "More team members",
                    }),
                    (0, r.jsx)("button", { children: (0, r.jsx)(E.eDK, {}) }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var A = !0,
        O = C;
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
    4067: function (e) {
      e.exports = {
        teamMemberContainer: "style_teamMemberContainer__MAQY7",
        memberHeading: "style_memberHeading__lN4TR",
        memberPosition: "style_memberPosition__wIuwh",
        contactRow: "style_contactRow__W7Loy",
        downloadContactRow: "style_downloadContactRow__68ffG",
        contactRowContent: "style_contactRowContent__SC3w6",
        imageWrapper: "style_imageWrapper__QfcT_",
        profileContainer: "style_profileContainer__AZtrZ",
        content: "style_content__da0n1",
        bio: "style_bio__4m49h",
        nextPage: "style_nextPage__W8iub",
        tabList: "style_tabList__4x7FF",
        experienceContainer: "style_experienceContainer__QnQRz",
      };
    },
    6939: function (e) {
      e.exports = { nextPage: "style_nextPage__gOdyD" };
    },
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
    1809: function (e, t, n) {
      var r = n(3204),
        a = n(937);
      function i(e, t, n) {
        Array.isArray(e[t])
          ? e[t].push(n)
          : null != e[t]
          ? (e[t] = [e[t], n])
          : (e[t] = n);
      }
      function s(e, t) {
        var n = t.split("="),
          a = r(n[0]),
          s = n[1];
        return ((null == s || "" === s) && ((s = n[0]), (a = "type")),
        "type" === a)
          ? ('"' === s[0] &&
              '"' === s[s.length - 1] &&
              -1 !== s.indexOf(",") &&
              (s = s.slice(1, -1)),
            s
              .toLowerCase()
              .split(",")
              .forEach(function (t) {
                i(e, a, t);
              }),
            e)
          : (i(e, a, s), e);
      }
      e.exports = function (e) {
        for (
          var t = {},
            n = null,
            o = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:([\s\S]+))?$/i,
            l = e.length - 1,
            u = 1;
          u < l;
          u++
        ) {
          n = e[u];
          var c = o.exec(n);
          if (c) {
            var d = c[1].split("."),
              f = d.pop(),
              p = d.pop(),
              h = c[3],
              m = (c[2] ? c[2].replace(/^;|;$/g, "").split(";") : []).reduce(
                s,
                p ? { group: p } : {}
              ),
              v = r(f),
              g = new a(v, h, m);
            i(t, v, g);
          }
        }
        return t;
      };
    },
    937: function (e) {
      function t(e, n, r) {
        if (!(this instanceof t)) return new t(n);
        null != r && Object.assign(this, r),
          (this._field = e),
          (this._data = n),
          Object.defineProperty(this, "_field", { enumerable: !1 }),
          Object.defineProperty(this, "_data", { enumerable: !1 });
      }
      function n(e) {
        return e.replace(/([A-Z])/g, "-$1").toUpperCase();
      }
      (t.fromJSON = function (e) {
        var n = e[0],
          r = e[1];
        /text/i.test(e[2]) || (r.value = e[2]);
        var a = Array.isArray(e[3]) ? e[3].join(";") : e[3];
        return new t(n, a, r);
      }),
        (t.prototype = {
          constructor: t,
          is: function (e) {
            return (
              (e = (e + "").toLowerCase()),
              Array.isArray(this.type)
                ? this.type.indexOf(e) >= 0
                : this.type === e
            );
          },
          isEmpty: function () {
            return null == this._data && 0 === Object.keys(this).length;
          },
          clone: function () {
            return new t(this._field, this._data, this);
          },
          toString: function (e) {
            for (
              var t = (this.group ? this.group + "." : "") + n(this._field),
                r = Object.keys(this),
                a = [],
                i = 0;
              i < r.length;
              i++
            )
              if ("group" !== r[i])
                switch (t) {
                  case "TEL":
                  case "ADR":
                  case "EMAIL":
                    "2.1" === e
                      ? Array.isArray(this[r[i]])
                        ? a.push(this[r[i]].join(";"))
                        : a.push(this[r[i]])
                      : a.push(n(r[i]) + "=" + this[r[i]]);
                    break;
                  default:
                    a.push(n(r[i]) + "=" + this[r[i]]);
                }
            return "2.1" === e || "3.0" === e
              ? t +
                  (a.length
                    ? ";" + a.join(";").toUpperCase()
                    : a.toString().toUpperCase()) +
                  ":" +
                  (Array.isArray(this._data)
                    ? this._data.join(";")
                    : this._data)
              : t +
                  (a.length ? ";" + a.join(";") : a) +
                  ":" +
                  (Array.isArray(this._data)
                    ? this._data.join(";")
                    : this._data);
          },
          valueOf: function () {
            return this._data;
          },
          toJSON: function () {
            var e = Object.assign({}, this);
            "text" === e.value && ((e.value = void 0), delete e.value);
            var t = [this._field, e, this.value || "text"];
            switch (this._field) {
              default:
                t.push(this._data);
                break;
              case "adr":
              case "n":
                t.push(this._data.split(";"));
            }
            return t;
          },
        }),
        (e.exports = t);
    },
    8716: function (e, t, n) {
      function r() {
        if (!(this instanceof r)) return new r();
        (this.version = r.versions[r.versions.length - 1]), (this.data = {});
      }
      (r.mimeType = "text/vcard"),
        (r.extension = ".vcf"),
        (r.versions = ["2.1", "3.0", "4.0"]),
        (r.EOL = "\r\n"),
        (r.foldLine = n(2255)),
        (r.normalize = function (e) {
          return (e + "")
            .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
            .replace(/(\r\n)[\x09\x20]?(\r\n)|$/g, "$1")
            .replace(/\r\n[\x20\x09]/g, "");
        }),
        (r.isSupported = function (e) {
          return /^\d\.\d$/.test(e) && -1 !== r.versions.indexOf(e);
        }),
        (r.parse = function (e) {
          for (
            var t = (e + "").split(/(?=BEGIN\:VCARD)/gi), n = [], a = 0;
            a < t.length;
            a++
          )
            n.push(new r().parse(t[a]));
          return n;
        }),
        (r.parseLines = n(1809)),
        (r.fromJSON = function (e) {
          if (
            null == (e = "string" == typeof e ? JSON.parse(e) : e) ||
            !Array.isArray(e)
          )
            return new r();
          if (!/vcard/i.test(e[0])) throw Error("Object not in jCard format");
          var t = new r();
          return (
            e[1].forEach(function (e) {
              t.addProperty(r.Property.fromJSON(e));
            }),
            t
          );
        }),
        (r.format = function (e, t) {
          if (
            ((t = t || e.version || r.versions[r.versions.length - 1]),
            !r.isSupported(t))
          )
            throw Error('Unsupported vCard version "' + t + '"');
          var n = [];
          n.push("BEGIN:VCARD"), n.push("VERSION:" + t);
          for (var a = Object.keys(e.data), i = "", s = 0; s < a.length; s++)
            if ("version" !== a[s]) {
              if (Array.isArray((i = e.data[a[s]])))
                for (var o = 0; o < i.length; o++)
                  i[o].isEmpty() || n.push(r.foldLine(i[o].toString(t), 75));
              else i.isEmpty() || n.push(r.foldLine(i.toString(t), 75));
            }
          return n.push("END:VCARD"), n.join(r.EOL);
        }),
        (r.Property = n(937)),
        (r.prototype = {
          constructor: r,
          get: function (e) {
            return null == this.data[e]
              ? this.data[e]
              : Array.isArray(this.data[e])
              ? this.data[e].map(function (e) {
                  return e.clone();
                })
              : this.data[e].clone();
          },
          set: function (e, t, n) {
            return this.setProperty(new r.Property(e, t, n));
          },
          add: function (e, t, n) {
            var a = new r.Property(e, t, n);
            return this.addProperty(a), this;
          },
          setProperty: function (e) {
            return (this.data[e._field] = e), this;
          },
          addProperty: function (e) {
            var t = e._field;
            return (
              Array.isArray(this.data[t])
                ? this.data[t].push(e)
                : null != this.data[t]
                ? (this.data[t] = [this.data[t], e])
                : (this.data[t] = e),
              this
            );
          },
          parse: function (e) {
            var t = r.normalize(e).split(/\r\n/g),
              n = t[0],
              a = t[1],
              i = t[t.length - 1];
            let s = /VERSION:\d\.\d/i;
            if (!/BEGIN:VCARD/i.test(n))
              throw SyntaxError(
                'Invalid vCard: Expected "BEGIN:VCARD" but found "' + n + '"'
              );
            if (!/END:VCARD/i.test(i))
              throw SyntaxError(
                'Invalid vCard: Expected "END:VCARD" but found "' + i + '"'
              );
            if (!s.test(a) && !(a = t.find((e) => s.test(e))))
              throw SyntaxError(
                'Invalid vCard: Expected "VERSION:\\d.\\d" but none found'
              );
            if (
              ((this.version = a.substring(8, 11)),
              !r.isSupported(this.version))
            )
              throw Error('Unsupported version "' + this.version + '"');
            return (this.data = r.parseLines(t)), this;
          },
          toString: function (e, t) {
            return (e = e || this.version), r.format(this, e);
          },
          toJCard: function (e) {
            e = e || "4.0";
            for (
              var t = Object.keys(this.data),
                n = [["version", {}, "text", e]],
                r = null,
                a = 0;
              a < t.length;
              a++
            )
              if ("version" !== t[a]) {
                if (Array.isArray((r = this.data[t[a]])))
                  for (var i = 0; i < r.length; i++) n.push(r[i].toJSON());
                else n.push(r.toJSON());
              }
            return ["vcard", n];
          },
          toJSON: function () {
            return this.toJCard(this.version);
          },
        }),
        (e.exports = r);
    },
    2096: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return eo;
        },
      });
      var r,
        a,
        i,
        s,
        o,
        l,
        u,
        c,
        d,
        f,
        p,
        h,
        m = n(7294);
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
      var g =
          (((r = g || {})[(r.None = 0)] = "None"),
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
        name: s,
      }) {
        let o = _(t, e);
        if (i) return y(o, n, r, s);
        let l = null != a ? a : 0;
        if (2 & l) {
          let { static: e = !1, ...t } = o;
          if (e) return y(t, n, r, s);
        }
        if (1 & l) {
          let { unmount: e = !0, ...t } = o;
          return v(e ? 0 : 1, {
            0: () => null,
            1: () =>
              y({ ...t, hidden: !0, style: { display: "none" } }, n, r, s),
          });
        }
        return y(o, n, r, s);
      }
      function y(e, t = {}, n, r) {
        var a;
        let {
            as: i = n,
            children: s,
            refName: o = "ref",
            ...l
          } = j(e, ["unmount", "static"]),
          u = void 0 !== e.ref ? { [o]: e.ref } : {},
          c = "function" == typeof s ? s(t) : s;
        "className" in l &&
          l.className &&
          "function" == typeof l.className &&
          (l.className = l.className(t));
        let d = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, a] of Object.entries(t))
            "boolean" == typeof a && (e = !0), !0 === a && n.push(r);
          e && (d["data-headlessui-state"] = n.join(" "));
        }
        if (i === m.Fragment && Object.keys(E(l)).length > 0) {
          if (!(0, m.isValidElement)(c) || (Array.isArray(c) && c.length > 1))
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
          })(null == (a = c.props) ? void 0 : a.className, l.className);
          return (0, m.cloneElement)(
            c,
            Object.assign(
              {},
              _(c.props, E(j(l, ["ref"]))),
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
        return (0, m.createElement)(
          i,
          Object.assign(
            {},
            j(l, ["ref"]),
            i !== m.Fragment && u,
            i !== m.Fragment && d
          ),
          c
        );
      }
      function _(...e) {
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
      function w(e) {
        var t;
        return Object.assign((0, m.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function E(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function j(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      var N = Object.defineProperty,
        C = (e, t, n) =>
          t in e
            ? N(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        A = (e, t, n) => (C(e, "symbol" != typeof t ? t + "" : t, n), n);
      let O = new (class {
          constructor() {
            A(this, "current", this.detect()),
              A(this, "handoffState", "pending"),
              A(this, "currentId", 0);
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
        S = (e, t) => {
          O.isServer ? (0, m.useEffect)(e, t) : (0, m.useLayoutEffect)(e, t);
        },
        P =
          null != (h = m.useId)
            ? h
            : function () {
                let e = (function () {
                    let [e, t] = (0, m.useState)(O.isHandoffComplete);
                    return (
                      e && !1 === O.isHandoffComplete && t(!1),
                      (0, m.useEffect)(() => {
                        !0 !== e && t(!0);
                      }, [e]),
                      (0, m.useEffect)(() => O.handoff(), []),
                      e
                    );
                  })(),
                  [t, n] = m.useState(e ? () => O.nextId() : null);
                return (
                  S(() => {
                    null === t && n(O.nextId());
                  }, [t]),
                  null != t ? "" + t : void 0
                );
              };
      var I =
        (((i = I || {}).Space = " "),
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
      let T = [
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
      var L =
          (((s = L || {})[(s.First = 1)] = "First"),
          (s[(s.Previous = 2)] = "Previous"),
          (s[(s.Next = 4)] = "Next"),
          (s[(s.Last = 8)] = "Last"),
          (s[(s.WrapAround = 16)] = "WrapAround"),
          (s[(s.NoScroll = 32)] = "NoScroll"),
          s),
        R =
          (((o = R || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        F =
          (((l = F || {})[(l.Previous = -1)] = "Previous"),
          (l[(l.Next = 1)] = "Next"),
          l),
        D =
          (((u = D || {})[(u.Strict = 0)] = "Strict"),
          (u[(u.Loose = 1)] = "Loose"),
          u);
      function M(e, t = (e) => e) {
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
      function k(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: a = [] } = {}
      ) {
        var i, s, o;
        let l = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          u = Array.isArray(e)
            ? n
              ? M(e)
              : e
            : (function (e = document.body) {
                return null == e
                  ? []
                  : Array.from(e.querySelectorAll(T)).sort((e, t) =>
                      Math.sign(
                        (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (t.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(e);
        a.length > 0 && u.length > 1 && (u = u.filter((e) => !a.includes(e))),
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
          h = u.length,
          m;
        do {
          if (p >= h || p + h <= 0) return 0;
          let e = d + p;
          if (16 & t) e = (e + h) % h;
          else {
            if (e < 0) return 3;
            if (e >= h) return 1;
          }
          null == (m = u[e]) || m.focus(f), (p += c);
        } while (m !== l.activeElement);
        return (
          6 & t &&
            null !=
              (o =
                null == (s = null == (i = m) ? void 0 : i.matches)
                  ? void 0
                  : s.call(i, "textarea,input")) &&
            o &&
            m.select(),
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"),
          2
        );
      }
      function U(e) {
        let t = (0, m.useRef)(e);
        return (
          S(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      let $ = function (e) {
          let t = U(e);
          return m.useCallback((...e) => t.current(...e), [t]);
        },
        G = Symbol();
      function H(...e) {
        let t = (0, m.useRef)(e);
        (0, m.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = $((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[G]))
          ? void 0
          : n;
      }
      function W(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      var B =
        (((c = B || {})[(c.None = 1)] = "None"),
        (c[(c.Focusable = 2)] = "Focusable"),
        (c[(c.Hidden = 4)] = "Hidden"),
        c);
      let V = w(function (e, t) {
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
      function J({ onFocus: e }) {
        let [t, n] = (0, m.useState)(!0);
        return t
          ? m.createElement(V, {
              as: "button",
              type: "button",
              features: B.Focusable,
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
      let Z = m.createContext(null);
      function q({ children: e }) {
        let t = m.useRef({
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
        return m.createElement(Z.Provider, { value: t }, e);
      }
      function z(e) {
        let t = m.useContext(Z);
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
                  (e = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)
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
        return m.useEffect(() => a, []), r;
      }
      var X =
          (((d = X || {})[(d.Forwards = 0)] = "Forwards"),
          (d[(d.Backwards = 1)] = "Backwards"),
          d),
        Q =
          (((f = Q || {})[(f.Less = -1)] = "Less"),
          (f[(f.Equal = 0)] = "Equal"),
          (f[(f.Greater = 1)] = "Greater"),
          f),
        Y =
          (((p = Y || {})[(p.SetSelectedIndex = 0)] = "SetSelectedIndex"),
          (p[(p.RegisterTab = 1)] = "RegisterTab"),
          (p[(p.UnregisterTab = 2)] = "UnregisterTab"),
          (p[(p.RegisterPanel = 3)] = "RegisterPanel"),
          (p[(p.UnregisterPanel = 4)] = "UnregisterPanel"),
          p);
      let K = {
          0(e, t) {
            var n;
            let r = M(e.tabs, (e) => e.current),
              a = M(e.panels, (e) => e.current),
              i = r.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute("disabled"));
              }),
              s = { ...e, tabs: r, panels: a };
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
              return 0 === i.length
                ? s
                : {
                    ...s,
                    selectedIndex: v(n, {
                      0: () => r.indexOf(i[0]),
                      1: () => r.indexOf(i[i.length - 1]),
                    }),
                  };
            }
            let o = r.slice(0, t.index),
              l = [...r.slice(t.index), ...o].find((e) => i.includes(e));
            if (!l) return s;
            let u = null != (n = r.indexOf(l)) ? n : e.selectedIndex;
            return (
              -1 === u && (u = e.selectedIndex), { ...s, selectedIndex: u }
            );
          },
          1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
              a = M([...e.tabs, t.tab], (e) => e.current),
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
              : { ...e, panels: M([...e.panels, t.panel], (e) => e.current) },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        ee = (0, m.createContext)(null);
      function et(e) {
        let t = (0, m.useContext)(ee);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, et), t);
        }
        return t;
      }
      ee.displayName = "TabsDataContext";
      let en = (0, m.createContext)(null);
      function er(e) {
        let t = (0, m.useContext)(en);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, er), t);
        }
        return t;
      }
      function ea(e, t) {
        return v(t.type, K, e, t);
      }
      en.displayName = "TabsActionsContext";
      let ei = m.Fragment,
        es = g.RenderStrategy | g.Static,
        eo = Object.assign(
          w(function (e, t) {
            var n, r;
            let a = P(),
              { id: i = `headlessui-tabs-tab-${a}`, ...s } = e,
              {
                orientation: o,
                activation: l,
                selectedIndex: u,
                tabs: c,
                panels: d,
              } = et("Tab"),
              f = er("Tab"),
              p = et("Tab"),
              h = (0, m.useRef)(null),
              g = H(h, t);
            S(() => f.registerTab(h), [f, h]);
            let x = z("tabs"),
              y = c.indexOf(h);
            -1 === y && (y = x);
            let _ = y === u,
              w = $((e) => {
                var t;
                let n = e();
                if (n === R.Success && "auto" === l) {
                  let e =
                      null ==
                      (t = O.isServer
                        ? null
                        : h instanceof Node
                        ? h.ownerDocument
                        : null != h &&
                          h.hasOwnProperty("current") &&
                          h.current instanceof Node
                        ? h.current.ownerDocument
                        : document)
                        ? void 0
                        : t.activeElement,
                    n = p.tabs.findIndex((t) => t.current === e);
                  -1 !== n && f.change(n);
                }
                return n;
              }),
              E = $((e) => {
                let t = c.map((e) => e.current).filter(Boolean);
                if (e.key === I.Space || e.key === I.Enter) {
                  e.preventDefault(), e.stopPropagation(), f.change(y);
                  return;
                }
                switch (e.key) {
                  case I.Home:
                  case I.PageUp:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      w(() => k(t, L.First))
                    );
                  case I.End:
                  case I.PageDown:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      w(() => k(t, L.Last))
                    );
                }
                if (
                  w(() =>
                    v(o, {
                      vertical: () =>
                        e.key === I.ArrowUp
                          ? k(t, L.Previous | L.WrapAround)
                          : e.key === I.ArrowDown
                          ? k(t, L.Next | L.WrapAround)
                          : R.Error,
                      horizontal: () =>
                        e.key === I.ArrowLeft
                          ? k(t, L.Previous | L.WrapAround)
                          : e.key === I.ArrowRight
                          ? k(t, L.Next | L.WrapAround)
                          : R.Error,
                    })
                  ) === R.Success
                )
                  return e.preventDefault();
              }),
              j = (0, m.useRef)(!1),
              N = $(() => {
                var e, t;
                j.current ||
                  ((j.current = !0),
                  null == (e = h.current) || e.focus(),
                  f.change(y),
                  (t = () => {
                    j.current = !1;
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
              C = $((e) => {
                e.preventDefault();
              }),
              A = (0, m.useMemo)(() => ({ selected: _ }), [_]);
            return b({
              ourProps: {
                ref: g,
                onKeyDown: E,
                onMouseDown: C,
                onClick: N,
                id: i,
                role: "tab",
                type: (function (e, t) {
                  let [n, r] = (0, m.useState)(() => W(e));
                  return (
                    S(() => {
                      r(W(e));
                    }, [e.type, e.as]),
                    S(() => {
                      n ||
                        (t.current &&
                          t.current instanceof HTMLButtonElement &&
                          !t.current.hasAttribute("type") &&
                          r("button"));
                    }, [n, t]),
                    n
                  );
                })(e, h),
                "aria-controls":
                  null == (r = null == (n = d[y]) ? void 0 : n.current)
                    ? void 0
                    : r.id,
                "aria-selected": _,
                tabIndex: _ ? 0 : -1,
              },
              theirProps: s,
              slot: A,
              defaultTag: "button",
              name: "Tabs.Tab",
            });
          }),
          {
            Group: w(function (e, t) {
              let {
                  defaultIndex: n = 0,
                  vertical: r = !1,
                  manual: a = !1,
                  onChange: i,
                  selectedIndex: s = null,
                  ...o
                } = e,
                l = r ? "vertical" : "horizontal",
                u = a ? "manual" : "auto",
                c = null !== s,
                d = H(t),
                [f, p] = (0, m.useReducer)(ea, {
                  selectedIndex: null != s ? s : n,
                  tabs: [],
                  panels: [],
                }),
                h = (0, m.useMemo)(
                  () => ({ selectedIndex: f.selectedIndex }),
                  [f.selectedIndex]
                ),
                v = U(i || (() => {})),
                g = U(f.tabs),
                x = (0, m.useMemo)(
                  () => ({ orientation: l, activation: u, ...f }),
                  [l, u, f]
                ),
                y = $(
                  (e) => (p({ type: 1, tab: e }), () => p({ type: 2, tab: e }))
                ),
                _ = $(
                  (e) => (
                    p({ type: 3, panel: e }), () => p({ type: 4, panel: e })
                  )
                ),
                w = $((e) => {
                  E.current !== e && v.current(e),
                    c || p({ type: 0, index: e });
                }),
                E = U(c ? e.selectedIndex : f.selectedIndex),
                j = (0, m.useMemo)(
                  () => ({ registerTab: y, registerPanel: _, change: w }),
                  []
                );
              return (
                S(() => {
                  p({ type: 0, index: null != s ? s : n });
                }, [s]),
                S(() => {
                  if (void 0 === E.current || f.tabs.length <= 0) return;
                  let e = M(f.tabs, (e) => e.current);
                  e.some((e, t) => f.tabs[t] !== e) &&
                    w(e.indexOf(f.tabs[E.current]));
                }),
                m.createElement(
                  q,
                  null,
                  m.createElement(
                    en.Provider,
                    { value: j },
                    m.createElement(
                      ee.Provider,
                      { value: x },
                      x.tabs.length <= 0 &&
                        m.createElement(J, {
                          onFocus: () => {
                            var e, t;
                            for (let n of g.current)
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
                        theirProps: o,
                        slot: h,
                        defaultTag: ei,
                        name: "Tabs",
                      })
                    )
                  )
                )
              );
            }),
            List: w(function (e, t) {
              let { orientation: n, selectedIndex: r } = et("Tab.List");
              return b({
                ourProps: { ref: H(t), role: "tablist", "aria-orientation": n },
                theirProps: e,
                slot: { selectedIndex: r },
                defaultTag: "div",
                name: "Tabs.List",
              });
            }),
            Panels: w(function (e, t) {
              let { selectedIndex: n } = et("Tab.Panels");
              return b({
                ourProps: { ref: H(t) },
                theirProps: e,
                slot: (0, m.useMemo)(() => ({ selectedIndex: n }), [n]),
                defaultTag: "div",
                name: "Tabs.Panels",
              });
            }),
            Panel: w(function (e, t) {
              var n, r, a, i;
              let s = P(),
                {
                  id: o = `headlessui-tabs-panel-${s}`,
                  tabIndex: l = 0,
                  ...u
                } = e,
                { selectedIndex: c, tabs: d, panels: f } = et("Tab.Panel"),
                p = er("Tab.Panel"),
                h = (0, m.useRef)(null),
                v = H(h, t);
              S(() => p.registerPanel(h), [p, h]);
              let g = z("panels"),
                x = f.indexOf(h);
              -1 === x && (x = g);
              let y = x === c,
                _ = (0, m.useMemo)(() => ({ selected: y }), [y]),
                w = {
                  ref: v,
                  id: o,
                  role: "tabpanel",
                  "aria-labelledby":
                    null == (r = null == (n = d[x]) ? void 0 : n.current)
                      ? void 0
                      : r.id,
                  tabIndex: y ? l : -1,
                };
              return y ||
                (null != (a = u.unmount) && !a) ||
                (null != (i = u.static) && i)
                ? b({
                    ourProps: w,
                    theirProps: u,
                    slot: _,
                    defaultTag: "div",
                    features: es,
                    visible: y,
                    name: "Tabs.Panel",
                  })
                : m.createElement(V, { as: "span", ...w });
            }),
          }
        );
    },
  },
  function (e) {
    e.O(0, [13, 228, 848, 32, 420, 774, 888, 179], function () {
      return e((e.s = 4568));
    }),
      (_N_E = e.O());
  },
]);
