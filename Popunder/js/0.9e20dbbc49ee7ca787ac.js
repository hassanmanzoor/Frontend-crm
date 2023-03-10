(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "+Vid": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("COG4"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.validate = function (t) {
              return o.digits(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[digits][formControlName],[digits][formControl],[digits][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (n.DigitsValidator = u);
    },
    "+W5N": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("PoRY"),
        o = e("m9Vx");
      n.phone = function (t) {
        return function (n) {
          return o.isPresent(d.Validators.required(n))
            ? null
            : r.isValidNumber({ phone: n.value, country: t })
            ? null
            : { phone: !0 };
        };
      };
    },
    "+h4i": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("rKjJ"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.lt(this.lt);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "lt" === n &&
                  ((this.validator = o.lt(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector: "[lt][formControlName],[lt][formControl],[lt][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { lt: [{ type: d.Input }] }),
        (n.LessThanValidator = u);
    },
    "+vXQ": function (t, n, e) {
      t.exports =
        !e("C61u") &&
        !e("S4vA")(function () {
          return (
            7 !=
            Object.defineProperty(e("BfU5")("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    "/6Iq": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("3+at"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.notEqualTo(this.notEqualTo);
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { notEqualTo: [{ type: d.Input }] }),
        (n.NotEqualToValidator = u);
    },
    "/F7N": function (t, n) {
      var e = Math.ceil,
        d = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? d : e)(t);
      };
    },
    "/g4C": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("pvmI"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.validate = function (t) {
              return o.date(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[date][formControlName],[date][formControl],[date][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (n.DateValidator = u);
    },
    "/tXR": function (t, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    "0DCV": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.dateISO = function (t) {
        return r.isPresent(d.Validators.required(t))
          ? null
          : /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              t.value
            )
          ? null
          : { dateISO: !0 };
      };
    },
    "0RTF": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("5YF4"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.gte(this.gte);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "gte" === n &&
                  ((this.validator = o.gte(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[gte][formControlName],[gte][formControl],[gte][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { gte: [{ type: d.Input }] }),
        (n.GreaterThanEqualValidator = u);
    },
    "0UZX": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("ghU1"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.equalTo(this.equalTo);
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { equalTo: [{ type: d.Input }] }),
        (n.EqualToValidator = u);
    },
    "0WpP": function (t, n, e) {
      var d = e("/F7N"),
        r = Math.min;
      t.exports = function (t) {
        return t > 0 ? r(d(t), 9007199254740991) : 0;
      };
    },
    "15yF": function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("kVrb")),
        d(e("lRys"));
    },
    "177e": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.json = function (t) {
        if (r.isPresent(d.Validators.required(t))) return null;
        var n = t.value;
        try {
          var e = JSON.parse(n);
          if (Boolean(e) && "object" == typeof e) return null;
        } catch (o) {}
        return { json: !0 };
      };
    },
    "1b/I": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.lte = function (t) {
        return function (n) {
          return r.isPresent(t)
            ? r.isPresent(d.Validators.required(n))
              ? null
              : +n.value <= +t
              ? null
              : { lte: !0 }
            : null;
        };
      };
    },
    "2Gh/": function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("AHKl")),
        d(e("5QUp"));
    },
    "3+at": function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("/6Iq")),
        d(e("nPu3"));
    },
    "3ELE": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.gt = function (t) {
        return function (n) {
          return r.isPresent(t)
            ? r.isPresent(d.Validators.required(n))
              ? null
              : +n.value > +t
              ? null
              : { gt: !0 }
            : null;
        };
      };
    },
    "5ETA": function (t, n) {
      t.exports = !0;
    },
    "5OUi": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.minDate = function (t) {
        if (!(r.isDate(t) || t instanceof Function))
          throw Error("minDate value must be or return a formatted date");
        return function (n) {
          if (r.isPresent(d.Validators.required(n))) return null;
          var e = new Date(n.value);
          return r.isDate(e)
            ? (t instanceof Function && (t = t()),
              e >= new Date(t) ? null : { minDate: !0 })
            : { minDate: !0 };
        };
      };
    },
    "5QUp": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx"),
        o = {
          3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
          4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
          5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
          all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        };
      n.uuid = function (t) {
        return function (n) {
          if (r.isPresent(d.Validators.required(n))) return null;
          var e = n.value;
          return new RegExp(o[t] || o.all).test(e) ? null : { uuid: !0 };
        };
      };
    },
    "5Qd4": function (t, n, e) {
      var d = e("USwo");
      d(d.S + d.F, "Object", { assign: e("By1P") });
    },
    "5YF4": function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("0RTF")),
        d(e("u46e"));
    },
    "6jRP": function (t, n) {
      t.exports = function (t, n) {
        return { value: n, done: !!t };
      };
    },
    "7h4N": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("N2oW"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.max(this.max);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "max" === n &&
                  ((this.validator = o.max(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[max][formControlName],[max][formControl],[max][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { max: [{ type: d.Input }] }),
        (n.MaxValidator = u);
    },
    "7whZ": function (t, n) {
      var e = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = e);
    },
    "7yqV": function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("wrUr")),
        d(e("3ELE"));
    },
    "8r50": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("t1MI"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.validate = function (t) {
              return o.url(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[url][formControlName],[url][formControl],[url][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (n.UrlValidator = u);
    },
    "9eTs": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.equalTo = function (t) {
          var n = !1;
          return function (e) {
            return (
              n ||
                ((n = !0),
                t.valueChanges.subscribe(function () {
                  e.updateValueAndValidity();
                })),
              t.value === e.value ? null : { equalTo: !0 }
            );
          };
        });
    },
    A9a0: function (t, n, e) {
      var d = e("nA4W"),
        r = e("bKEA"),
        o = e("Oa1h")(!1),
        i = e("WpRT")("IE_PROTO");
      t.exports = function (t, n) {
        var e,
          u = r(t),
          a = 0,
          $ = [];
        for (e in u) e != i && d(u, e) && $.push(e);
        for (; n.length > a; ) d(u, (e = n[a++])) && (~o($, e) || $.push(e));
        return $;
      };
    },
    AHKl: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("2Gh/"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.uuid(this.uuid);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "uuid" === n &&
                  ((this.validator = o.uuid(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[uuid][formControlName],[uuid][formControl],[uuid][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { uuid: [{ type: d.Input }] }),
        (n.UUIDValidator = u);
    },
    BRsN: function (t, n, e) {
      var d = e("GhSp"),
        r = e("ENu8");
      t.exports = e("C61u")
        ? function (t, n, e) {
            return d.f(t, n, r(1, e));
          }
        : function (t, n, e) {
            return (t[n] = e), t;
          };
    },
    BfU5: function (t, n, e) {
      var d = e("ekG2"),
        r = e("7whZ").document,
        o = d(r) && d(r.createElement);
      t.exports = function (t) {
        return o ? r.createElement(t) : {};
      };
    },
    By1P: function (t, n, e) {
      "use strict";
      var d = e("C61u"),
        r = e("mHY4"),
        o = e("/tXR"),
        i = e("GRew"),
        u = e("CYMq"),
        a = e("n7vu"),
        $ = Object.assign;
      t.exports =
        !$ ||
        e("S4vA")(function () {
          var t = {},
            n = {},
            e = Symbol(),
            d = "abcdefghijklmnopqrst";
          return (
            (t[e] = 7),
            d.split("").forEach(function (t) {
              n[t] = t;
            }),
            7 != $({}, t)[e] || Object.keys($({}, n)).join("") != d
          );
        })
          ? function (t, n) {
              for (
                var e = u(t), $ = arguments.length, l = 1, c = o.f, s = i.f;
                $ > l;

              )
                for (
                  var f,
                    p = a(arguments[l++]),
                    h = c ? r(p).concat(c(p)) : r(p),
                    m = h.length,
                    v = 0;
                  m > v;

                )
                  (f = h[v++]), (d && !s.call(p, f)) || (e[f] = p[f]);
              return e;
            }
          : $;
    },
    C5kU: function (t, n, e) {
      "use strict";
      var d = e("GfoU")(!0);
      e("OTpG")(
        String,
        "String",
        function (t) {
          (this._t = String(t)), (this._i = 0);
        },
        function () {
          var t,
            n = this._t,
            e = this._i;
          return e >= n.length
            ? { value: void 0, done: !0 }
            : ((t = d(n, e)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    C61u: function (t, n, e) {
      t.exports = !e("S4vA")(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    COG4: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("+Vid")),
        d(e("VBAv"));
    },
    CSYt: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.range = function (t) {
        return function (n) {
          if (!r.isPresent(t)) return null;
          if (r.isPresent(d.Validators.required(n))) return null;
          var e = +n.value;
          return e >= t[0] && e <= t[1]
            ? null
            : { actualValue: e, requiredValue: t, range: !0 };
        };
      };
    },
    CYMq: function (t, n, e) {
      var d = e("yQFZ");
      t.exports = function (t) {
        return Object(d(t));
      };
    },
    ENu8: function (t, n) {
      t.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n,
        };
      };
    },
    F2og: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("gK5f")),
        d(e("+W5N"));
    },
    FgkJ: function (t, n) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    FyfS: function (t, n, e) {
      t.exports = { default: e("fUKC"), __esModule: !0 };
    },
    GRew: function (t, n) {
      n.f = {}.propertyIsEnumerable;
    },
    GfoU: function (t, n, e) {
      var d = e("/F7N"),
        r = e("yQFZ");
      t.exports = function (t) {
        return function (n, e) {
          var o,
            i,
            u = String(r(n)),
            a = d(e),
            $ = u.length;
          return a < 0 || a >= $
            ? t
              ? ""
              : void 0
            : (o = u.charCodeAt(a)) < 55296 ||
              o > 56319 ||
              a + 1 === $ ||
              (i = u.charCodeAt(a + 1)) < 56320 ||
              i > 57343
            ? t
              ? u.charAt(a)
              : o
            : t
            ? u.slice(a, a + 2)
            : i - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    },
    GhSp: function (t, n, e) {
      var d = e("d+lc"),
        r = e("+vXQ"),
        o = e("M5dz"),
        i = Object.defineProperty;
      n.f = e("C61u")
        ? Object.defineProperty
        : function (t, n, e) {
            if ((d(t), (n = o(n, !0)), d(e), r))
              try {
                return i(t, n, e);
              } catch (u) {}
            if ("get" in e || "set" in e)
              throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t;
          };
    },
    HHWU: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("NGZV")),
        d(e("m/yT"));
    },
    "HHX+": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.max = function (t) {
        return function (n) {
          if (!r.isPresent(t)) return null;
          if (r.isPresent(d.Validators.required(n))) return null;
          var e = +n.value;
          return e <= +t
            ? null
            : { actualValue: e, requiredValue: +t, max: !0 };
        };
      };
    },
    HT6E: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("r0XH"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.validate = function (t) {
              return o.number(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[number][formControlName],[number][formControl],[number][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (n.NumberValidator = u);
    },
    HatN: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("Lh+v")),
        d(e("inIq"));
    },
    "I90/": function (t, n, e) {
      var d = e("aqg2"),
        r = e("zBWt")("iterator"),
        o = e("ig3W");
      t.exports = e("VSTI").getIteratorMethod = function (t) {
        if (null != t) return t[r] || t["@@iterator"] || o[d(t)];
      };
    },
    IvtZ: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("c34Q")),
        d(e("h9za"));
    },
    JdLL: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("vdN6"),
        o = e("yak4"),
        i = e("pvmI"),
        u = e("pXYb"),
        a = e("COG4"),
        $ = e("HHWU"),
        l = e("HatN"),
        c = e("ghU1"),
        s = e("7yqV"),
        f = e("5YF4"),
        p = e("jl4B"),
        h = e("rKjJ"),
        m = e("NCDA"),
        v = e("N2oW"),
        g = e("S8xG"),
        y = e("cI4K"),
        _ = e("Sm/R"),
        b = e("15yF"),
        x = e("3+at"),
        k = e("r0XH"),
        O = e("F2og"),
        C = e("Tm9b"),
        M = e("IvtZ"),
        I = e("t1MI"),
        P = e("2Gh/");
      n.CustomValidators = {
        base64: r.base64,
        creditCard: o.creditCard,
        date: i.date,
        dateISO: u.dateISO,
        digits: a.digits,
        email: $.email,
        equal: l.equal,
        equalTo: c.equalTo,
        gt: s.gt,
        gte: f.gte,
        json: p.json,
        lt: h.lt,
        lte: m.lte,
        max: v.max,
        maxDate: g.maxDate,
        min: y.min,
        minDate: _.minDate,
        notEqual: b.notEqual,
        notEqualTo: x.notEqualTo,
        number: k.number,
        phone: O.phone,
        range: C.range,
        rangeLength: M.rangeLength,
        url: I.url,
        uuid: P.uuid,
      };
      var V = [
          r.Base64Validator,
          o.CreditCardValidator,
          i.DateValidator,
          u.DateISOValidator,
          a.DigitsValidator,
          $.EmailValidator,
          l.EqualValidator,
          c.EqualToValidator,
          s.GreaterThanValidator,
          f.GreaterThanEqualValidator,
          p.JSONValidator,
          h.LessThanValidator,
          m.LessThanEqualValidator,
          v.MaxValidator,
          g.MaxDateValidator,
          y.MinValidator,
          _.MinDateValidator,
          b.NotEqualValidator,
          x.NotEqualToValidator,
          k.NumberValidator,
          O.PhoneValidator,
          C.RangeValidator,
          M.RangeLengthValidator,
          I.UrlValidator,
          P.UUIDValidator,
        ],
        E = (function () {
          return function () {};
        })();
      (E.decorators = [
        { type: d.NgModule, args: [{ declarations: [V], exports: [V] }] },
      ]),
        (n.CustomFormsModule = E);
    },
    Jt1Q: function (t, n, e) {
      "use strict";
      var d = e("b08l"),
        r = e("ENu8"),
        o = e("kvAF"),
        i = {};
      e("BRsN")(i, e("zBWt")("iterator"), function () {
        return this;
      }),
        (t.exports = function (t, n, e) {
          (t.prototype = d(i, { next: r(1, e) })), o(t, n + " Iterator");
        });
    },
    KNBz: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.number = function (t) {
        return r.isPresent(d.Validators.required(t))
          ? null
          : /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t.value)
          ? null
          : { number: !0 };
      };
    },
    KTXt: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.creditCard = function (t) {
        if (r.isPresent(d.Validators.required(t))) return null;
        var n = t.value.replace(/[^0-9]+/g, "");
        if (
          !/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
            n
          )
        )
          return { creditCard: !0 };
        for (var e, o, i, u = 0, a = n.length - 1; a >= 0; a--)
          (e = n.substring(a, a + 1)),
            (o = parseInt(e, 10)),
            (u += i && (o *= 2) >= 10 ? (o % 10) + 1 : o),
            (i = !i);
        return Boolean(u % 10 == 0 && n) ? null : { creditCard: !0 };
      };
    },
    L5pH: function (t, n) {
      t.exports = function () {};
    },
    "Lh+v": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("HatN"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.equal(this.equal);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "equal" === n &&
                  ((this.validator = o.equal(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[equal][formControlName],[equal][formControl],[equal][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { equal: [{ type: d.Input }] }),
        (n.EqualValidator = u);
    },
    M5dz: function (t, n, e) {
      var d = e("ekG2");
      t.exports = function (t, n) {
        if (!d(t)) return t;
        var e, r;
        if (n && "function" == typeof (e = t.toString) && !d((r = e.call(t))))
          return r;
        if ("function" == typeof (e = t.valueOf) && !d((r = e.call(t))))
          return r;
        if (!n && "function" == typeof (e = t.toString) && !d((r = e.call(t))))
          return r;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    N2oW: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("7h4N")),
        d(e("HHX+"));
    },
    N4c9: function (t, n, e) {
      e("wYM1");
      var d = e("VSTI").Object;
      t.exports = function (t, n, e) {
        return d.defineProperty(t, n, e);
      };
    },
    NCDA: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("dYSy")),
        d(e("1b/I"));
    },
    NGZV: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("HHWU"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.validate = function (t) {
              return o.email(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[email][formControlName],[email][formControl],[email][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (n.EmailValidator = u);
    },
    NMws: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("vdN6"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.validate = function (t) {
              return o.base64(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[base64][formControlName],[base64][formControl],[base64][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (n.Base64Validator = u);
    },
    OTpG: function (t, n, e) {
      "use strict";
      var d = e("5ETA"),
        r = e("USwo"),
        o = e("ugGH"),
        i = e("BRsN"),
        u = e("ig3W"),
        a = e("Jt1Q"),
        $ = e("kvAF"),
        l = e("znrX"),
        c = e("zBWt")("iterator"),
        s = !([].keys && "next" in [].keys()),
        f = function () {
          return this;
        };
      t.exports = function (t, n, e, p, h, m, v) {
        a(e, n, p);
        var g,
          y,
          _,
          b = function (t) {
            if (!s && t in C) return C[t];
            switch (t) {
              case "keys":
              case "values":
                return function () {
                  return new e(this, t);
                };
            }
            return function () {
              return new e(this, t);
            };
          },
          x = n + " Iterator",
          k = "values" == h,
          O = !1,
          C = t.prototype,
          M = C[c] || C["@@iterator"] || (h && C[h]),
          I = M || b(h),
          P = h ? (k ? b("entries") : I) : void 0,
          V = ("Array" == n && C.entries) || M;
        if (
          (V &&
            (_ = l(V.call(new t()))) !== Object.prototype &&
            _.next &&
            ($(_, x, !0), d || "function" == typeof _[c] || i(_, c, f)),
          k &&
            M &&
            "values" !== M.name &&
            ((O = !0),
            (I = function () {
              return M.call(this);
            })),
          (d && !v) || (!s && !O && C[c]) || i(C, c, I),
          (u[n] = I),
          (u[x] = f),
          h)
        )
          if (
            ((g = {
              values: k ? I : b("values"),
              keys: m ? I : b("keys"),
              entries: P,
            }),
            v)
          )
            for (y in g) y in C || o(C, y, g[y]);
          else r(r.P + r.F * (s || O), n, g);
        return g;
      };
    },
    Oa1h: function (t, n, e) {
      var d = e("bKEA"),
        r = e("0WpP"),
        o = e("nRFE");
      t.exports = function (t) {
        return function (n, e, i) {
          var u,
            a = d(n),
            $ = r(a.length),
            l = o(i, $);
          if (t && e != e) {
            for (; $ > l; ) if ((u = a[l++]) != u) return !0;
          } else
            for (; $ > l; l++)
              if ((t || l in a) && a[l] === e) return t || l || 0;
          return !t && -1;
        };
      };
    },
    P2sY: function (t, n, e) {
      t.exports = { default: e("uccp"), __esModule: !0 };
    },
    Pdpc: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.date = function (t) {
        return r.isPresent(d.Validators.required(t))
          ? null
          : r.isDate(t.value)
          ? null
          : { date: !0 };
      };
    },
    PoRY: function (t, n, e) {
      "use strict";
      e.r(n);
      var d = e("YHbO"),
        r = e("QbLZ"),
        o = e.n(r),
        i = e("sk9p"),
        u = e.n(i),
        a = e("FyfS"),
        $ = e.n(a);
      function l() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n = arguments[1];
        "string" == typeof n && (n = "^(?:" + n + ")$");
        var e = t.match(n);
        return null !== e && e[0].length === t.length;
      }
      function c(t) {
        return t[0];
      }
      function s(t) {
        return t[1];
      }
      function f(t) {
        return t[2] || [];
      }
      function p(t) {
        return t[8];
      }
      function h(t) {
        return t[0];
      }
      function m(t) {
        return t[1];
      }
      function v(t) {
        return t[2] || [];
      }
      function g(t, n) {
        return (
          t[3] ||
          (function (t) {
            return t[4];
          })(n)
        );
      }
      function y(t, n) {
        return (
          t[4] ||
          (function (t) {
            return t[7];
          })(n)
        );
      }
      function _(t) {
        return "$1" !== t && /\d/.test(t.replace("$1", ""));
      }
      function b(t) {
        return t[5] || m(t);
      }
      function x(t, n) {
        return n.countries[n.country_phone_code_to_countries[t][0]];
      }
      function k(t) {
        return t[9];
      }
      function O(t, n) {
        return k(t) ? k(t)[n] : void 0;
      }
      function C(t) {
        return O(t, 1);
      }
      var M = {
        formatExtension: function (t, n) {
          return t + " ext. " + n;
        },
      };
      function I(t, n, e, d, r) {
        var i = (function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              n = arguments[1],
              e = arguments[2],
              d = arguments[3],
              r = arguments[4],
              i = void 0,
              u = void 0,
              a = void 0,
              $ = void 0;
            if ("string" == typeof t)
              if ("string" == typeof e)
                (i = { phone: t, country: n }),
                  (u = e),
                  r ? ((a = d), ($ = r)) : ($ = d);
              else {
                if (((i = { phone: t }), "string" != typeof n))
                  throw new Error(
                    "Format type argument not passed for `format()`"
                  );
                (u = n), d ? ((a = e), ($ = d)) : ($ = e);
              }
            else (i = t), (u = n), d ? ((a = e), ($ = d)) : ($ = e);
            if (!$) throw new Error("Metadata is required");
            switch (u) {
              case "International":
              case "E.164":
              case "International_plaintext":
              case "National":
              case "RFC3966":
                break;
              default:
                throw new Error(
                  'Unknown format type argument passed to "format()": "' +
                    u +
                    '"'
                );
            }
            return {
              input: i,
              format_type: u,
              options: (a = a ? o()({}, M, a) : M),
              metadata: $,
            };
          })(t, n, e, d, r),
          u = i.input,
          a = i.format_type,
          $ = i.options,
          l = i.metadata,
          s = void 0;
        u.country && (s = l.countries[u.country]);
        var f = Q(u.phone, l),
          p = f.country_phone_code,
          h = f.number;
        if (p) {
          if (u.country && s && p !== c(s)) return u.phone;
          s = x(p, l);
        }
        if (!s) return u.phone;
        switch (a) {
          case "International":
            if (!h) return "+" + c(s);
            var m = E(h, "International", !1, s),
              v = "+" + c(s) + " " + m;
            return u.ext || 0 === u.ext ? $.formatExtension(v, u.ext) : v;
          case "E.164":
          case "International_plaintext":
            return "+" + c(s) + u.phone;
          case "RFC3966":
            return (
              "+" +
              c(s) +
              u.phone +
              (u.ext || 0 === u.ext ? ";ext=" + u.ext : "")
            );
          case "National":
            if (!h) return "";
            var g = E(h, "National", !1, s);
            return u.ext || 0 === u.ext ? $.formatExtension(g, u.ext) : g;
        }
      }
      var P = /(\$\d)/;
      function V(t, n, e, d, r) {
        var o = new RegExp(h(n)),
          i = g(n, r),
          u = !i || (i && y(n, r) && !d);
        if (!e && !u) return t.replace(o, m(n).replace(P, i));
        var a = t.replace(o, e ? b(n) : m(n));
        return e ? A(a) : a;
      }
      function E(t, n, e, d) {
        var r = (function (t, n) {
          var e = !0,
            d = !1,
            r = void 0;
          try {
            for (var o, i = $()(t); !(e = (o = i.next()).done); e = !0) {
              var u = o.value;
              if (v(u).length > 0) {
                var a = v(u)[v(u).length - 1];
                if (0 !== n.search(a)) continue;
              }
              if (l(n, new RegExp(h(u)))) return u;
            }
          } catch (c) {
            (d = !0), (r = c);
          } finally {
            try {
              !e && i.return && i.return();
            } finally {
              if (d) throw r;
            }
          }
        })(f(d), t);
        return r ? V(t, r, "International" === n, e, d) : t;
      }
      function A(t) {
        return t.replace(new RegExp("[" + j + "]+", "g"), " ").trim();
      }
      function w(t, n, e) {
        var d = T(t, n, e),
          r = d.input;
        if (r && r.country) {
          var o = r.phone,
            i = d.metadata.countries[r.country];
          if (S(o, s(i)))
            return S(
              o,
              (function (t) {
                return O(t, 3);
              })(i)
            )
              ? "PREMIUM_RATE"
              : S(
                  o,
                  (function (t) {
                    return O(t, 2);
                  })(i)
                )
              ? "TOLL_FREE"
              : S(
                  o,
                  (function (t) {
                    return O(t, 9);
                  })(i)
                )
              ? "SHARED_COST"
              : S(
                  o,
                  (function (t) {
                    return O(t, 8);
                  })(i)
                )
              ? "VOIP"
              : S(
                  o,
                  (function (t) {
                    return O(t, 4);
                  })(i)
                )
              ? "PERSONAL_NUMBER"
              : S(
                  o,
                  (function (t) {
                    return O(t, 7);
                  })(i)
                )
              ? "PAGER"
              : S(
                  o,
                  (function (t) {
                    return O(t, 6);
                  })(i)
                )
              ? "UAN"
              : S(
                  o,
                  (function (t) {
                    return O(t, 5);
                  })(i)
                )
              ? "VOICEMAIL"
              : S(
                  o,
                  (function (t) {
                    return O(t, 0);
                  })(i)
                )
              ? C(i)
                ? S(o, C(i))
                  ? "FIXED_LINE_OR_MOBILE"
                  : "FIXED_LINE"
                : "FIXED_LINE_OR_MOBILE"
              : S(o, C(i))
              ? "MOBILE"
              : void 0;
        }
      }
      function S(t, n) {
        return l(t, n);
      }
      function T(t, n, e) {
        var d = void 0,
          r = void 0;
        if (
          ("number" == typeof t && (t = String(t)),
          "string" == typeof t
            ? "string" == typeof n || void 0 === n
              ? ((r = e), z(t) && (d = K(t, n, r)))
              : ((r = n), z(t) && (d = K(t, r)))
            : (t && t.phone && z(t.phone) && (d = t), (r = n)),
          !r || !r.countries)
        )
          throw new Error("Metadata is required");
        return { input: d, metadata: r };
      }
      var D = 3,
        R = 2,
        N = 17,
        G = 250,
        j = "-???-???????????????/???. ?????????????()????????????\\[\\]~?????????",
        L =
          ";ext=([0-9???-?????-????-??]{1,7})|[ ??\\t,]*(?:e?xt(?:ensi(?:o???|??))?n?|??????????????|[;,x???#???~???]|int|anexo|?????????)[:\\.???]?[ ??\\t,-]*([0-9???-?????-????-??]{1,7})#?|[- ]+([0-9???-?????-????-??]{1,5})#",
        q = new RegExp("(?:" + L + ")$", "i"),
        Y = new RegExp(
          "^[0-9???-?????-????-??]{" +
            R +
            "}$|^[+???]{0,1}(?:[" +
            j +
            "]*[0-9???-?????-????-??]){3,}[" +
            j +
            "0-9???-?????-????-??]*(?:" +
            L +
            ")?$",
          "i"
        ),
        F = new RegExp("[+???0-9???-?????-????-??]"),
        B = new RegExp("[^0-9???-?????-????-??]+$"),
        U = new RegExp("^[+???]+"),
        W = {
          0: "0",
          1: "1",
          2: "2",
          3: "3",
          4: "4",
          5: "5",
          6: "6",
          7: "7",
          8: "8",
          9: "9",
          "???": "0",
          "???": "1",
          "???": "2",
          "???": "3",
          "???": "4",
          "???": "5",
          "???": "6",
          "???": "7",
          "???": "8",
          "???": "9",
          "??": "0",
          "??": "1",
          "??": "2",
          "??": "3",
          "??": "4",
          "??": "5",
          "??": "6",
          "??": "7",
          "??": "8",
          "??": "9",
          "??": "0",
          "??": "1",
          "??": "2",
          "??": "3",
          "??": "4",
          "??": "5",
          "??": "6",
          "??": "7",
          "??": "8",
          "??": "9",
        },
        H = { country: {} };
      function K(t, n, e) {
        var d = (function (t, n, e) {
            var d = void 0,
              r = void 0,
              i = void 0;
            if (
              ("number" == typeof t && (t = String(t)),
              "string" == typeof t && (d = t),
              "string" == typeof n
                ? ((r = { country: { restrict: n } }), (i = e))
                : e
                ? ((r = n), (i = e))
                : (i = n),
              !i || !i.countries)
            )
              throw new Error("Metadata is required");
            return {
              text: d,
              options: (r = r ? o()({}, H, r) : H),
              metadata: i,
            };
          })(t, n, e),
          r = d.text,
          i = d.options,
          a = d.metadata;
        if (i.country.default && !a.countries[i.country.default])
          throw new Error("Unknown country code: " + i.country.default);
        if (i.country.restrict && !a.countries[i.country.restrict])
          throw new Error("Unknown country code: " + i.country.restrict);
        var f = void 0,
          p = void 0;
        if (r && 0 === r.indexOf("tel:")) {
          var h = !0,
            m = !1,
            v = void 0;
          try {
            for (
              var g, y = $()(r.split(";"));
              !(h = (g = y.next()).done);
              h = !0
            ) {
              var _ = g.value.split(":"),
                b = u()(_, 2),
                k = b[1];
              switch (b[0]) {
                case "tel":
                  f = k;
                  break;
                case "ext":
                  p = k;
                  break;
                case "phone-context":
                  "+" === k[0] && (f = k + f);
              }
            }
          } catch (S) {
            (m = !0), (v = S);
          } finally {
            try {
              !h && y.return && y.return();
            } finally {
              if (m) throw v;
            }
          }
        } else f = J(r);
        if (!z(f)) return {};
        var O = (function (t) {
          var n = t.search(q);
          if (n < 0) return {};
          var e = t.slice(0, n);
          if (!z(e)) return {};
          for (var d = t.match(q), r = 1; r < d.length; ) {
            if (null != d[r] && d[r].length > 0)
              return { number: e, extension: d[r] };
            r++;
          }
        })(f);
        O.extension && ((f = O.number), (p = O.extension));
        var C = Q(f, a),
          M = C.country_phone_code,
          I = C.number;
        if (!I) return {};
        var P = void 0,
          V = void 0,
          E = !1;
        if (M) {
          if (
            ((E = !0),
            i.country.restrict && M !== c(a.countries[i.country.restrict]))
          )
            return {};
          V = x(M, a);
        } else
          (i.country.restrict || i.country.default) &&
            ((V = a.countries[(P = i.country.restrict || i.country.default)]),
            (I = Z(f)));
        if (!V) return {};
        var A = I;
        if ((E || (A = tt(I, V)), !P)) {
          if (!(P = nt(M, A, a))) return {};
          V = a.countries[P];
        }
        if (A.length > N) return {};
        if (!l(A, new RegExp(s(V)))) return {};
        var w = { country: P, phone: A };
        return p && (w.ext = p), w;
      }
      function Z(t) {
        return (function (t, n) {
          var e = "",
            d = !0,
            r = !1,
            o = void 0;
          try {
            for (var i, u = $()(t); !(d = (i = u.next()).done); d = !0) {
              var a = n[i.value.toUpperCase()];
              void 0 !== a && (e += a);
            }
          } catch (l) {
            (r = !0), (o = l);
          } finally {
            try {
              !d && u.return && u.return();
            } finally {
              if (r) throw o;
            }
          }
          return e;
        })(t, W);
      }
      function z(t) {
        return t.length >= R && l(t, Y);
      }
      function J(t) {
        if (!t || t.length > G) return "";
        var n = t.search(F);
        return n < 0 ? "" : t.slice(n).replace(B, "");
      }
      function X(t) {
        if (!t) return "";
        var n = U.test(t);
        return (t = Z(t)), n ? "+" + t : t;
      }
      function Q(t, n) {
        if (!(t = X(t))) return {};
        if ("+" !== t[0]) return { number: t };
        if ("0" === (t = t.slice(1))[0]) return {};
        for (var e = 1; e <= D && e <= t.length; ) {
          var d = t.slice(0, e);
          if (n.country_phone_code_to_countries[d])
            return { country_phone_code: d, number: t.slice(e) };
          e++;
        }
        return {};
      }
      function tt(t, n) {
        var e = (function (t) {
          var n = t[5];
          return (
            n ||
              (n = (function (t) {
                return t[3];
              })(t)),
            n
          );
        })(n);
        if (!t || !e) return t;
        var d = new RegExp("^(?:" + e + ")"),
          r = d.exec(t);
        if (!r) return t;
        var o,
          i = r[r.length - 1],
          u = (function (t) {
            return t[6];
          })(n);
        o = u && i ? t.replace(d, u) : t.slice(r[0].length);
        var a = new RegExp(s(n));
        return l(t, a) && !l(o, a) ? t : o;
      }
      function nt(t, n, e) {
        var d = e.country_phone_code_to_countries[t];
        if (1 === d.length) return d[0];
        var r = !0,
          o = !1,
          i = void 0;
        try {
          for (var u, a = $()(d); !(r = (u = a.next()).done); r = !0) {
            var l = u.value,
              c = e.countries[l];
            if (p(c)) {
              if (n && 0 === n.search(p(c))) return l;
            } else if (w({ phone: n, country: l }, e)) return l;
          }
        } catch (s) {
          (o = !0), (i = s);
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (o) throw i;
          }
        }
      }
      function et(t, n, e) {
        var d = T(t, n, e),
          r = d.input,
          o = d.metadata;
        return !(!r || !r.country || (k(o.countries[r.country]) && !w(r, o)));
      }
      var dt = e("iCc5"),
        rt = e.n(dt),
        ot = e("V7oC"),
        it = e.n(ot),
        ut = new RegExp("9", "g"),
        at = vt("9", 15),
        $t = new RegExp("x"),
        lt = new RegExp("x", "g"),
        ct = /\[([^\[\]])*\]/g,
        st = /\d(?=[^,}][^,}])/g,
        ft = new RegExp("^[" + j + "]*(\\$\\d[" + j + "]*)+$"),
        pt = new RegExp("^[+???]{0,1}[" + j + "0-9???-?????-????-??]*$", "i"),
        ht = (function () {
          function t(n, e) {
            if ((rt()(this, t), !e || !e.countries))
              throw new Error("Metadata is required");
            n && e.countries[n] && (this.default_country = n),
              (this.metadata = e),
              this.reset();
          }
          return (
            it()(t, [
              {
                key: "input",
                value: function (t) {
                  var n = J(t);
                  return (
                    n || (t && t.indexOf("+") >= 0 && (n = "+")),
                    l(n, pt) ? this.process_input(X(n)) : this.current_output
                  );
                },
              },
              {
                key: "process_input",
                value: function (t) {
                  if (
                    ("+" === t[0] &&
                      (this.parsed_input ||
                        ((this.parsed_input += "+"), this.reset_countriness()),
                      (t = t.slice(1))),
                    (this.parsed_input += t),
                    (this.national_number += t),
                    this.is_international())
                  )
                    if (this.country_phone_code)
                      this.country || this.determine_the_country();
                    else {
                      if (!this.extract_country_phone_code())
                        return this.parsed_input;
                      this.initialize_phone_number_formats_for_this_country_phone_code(),
                        this.reset_format(),
                        this.determine_the_country();
                    }
                  else {
                    var n = this.national_prefix;
                    (this.national_number =
                      this.national_prefix + this.national_number),
                      this.extract_national_prefix(),
                      this.national_prefix !== n &&
                        ((this.matching_formats = this.available_formats),
                        this.reset_format());
                  }
                  if (!this.should_format())
                    return this.format_as_non_formatted_number();
                  this.match_formats_by_leading_digits();
                  var e = this.format_national_phone_number(t);
                  return e ? this.full_phone_number(e) : this.parsed_input;
                },
              },
              {
                key: "format_as_non_formatted_number",
                value: function () {
                  return this.is_international() && this.country_phone_code
                    ? this.national_number
                      ? ((this.template =
                          "x" +
                          vt("x", this.country_phone_code.length) +
                          " " +
                          vt("x", this.national_number.length)),
                        "+" +
                          this.country_phone_code +
                          " " +
                          this.national_number)
                      : "+" + this.country_phone_code
                    : this.parsed_input;
                },
              },
              {
                key: "format_national_phone_number",
                value: function (t) {
                  var n = void 0;
                  return (
                    this.chosen_format &&
                      (n = this.format_next_national_number_digits(t)),
                    this.attempt_to_format_complete_phone_number() ||
                      (this.choose_another_format()
                        ? this.reformat_national_number()
                        : n)
                  );
                },
              },
              {
                key: "reset",
                value: function () {
                  return (
                    (this.parsed_input = ""),
                    (this.current_output = ""),
                    (this.national_prefix = ""),
                    (this.national_number = ""),
                    this.reset_countriness(),
                    this.reset_format(),
                    this
                  );
                },
              },
              {
                key: "reset_country",
                value: function () {
                  this.country =
                    this.default_country && !this.is_international()
                      ? this.default_country
                      : void 0;
                },
              },
              {
                key: "reset_countriness",
                value: function () {
                  this.reset_country(),
                    this.default_country && !this.is_international()
                      ? ((this.country_metadata =
                          this.metadata.countries[this.default_country]),
                        (this.country_phone_code = c(this.country_metadata)),
                        this.initialize_phone_number_formats_for_this_country_phone_code())
                      : ((this.country_metadata = void 0),
                        (this.country_phone_code = void 0),
                        (this.available_formats = []),
                        (this.matching_formats = this.available_formats));
                },
              },
              {
                key: "reset_format",
                value: function () {
                  (this.chosen_format = void 0),
                    (this.template = void 0),
                    (this.partially_populated_template = void 0),
                    (this.last_match_position = -1);
                },
              },
              {
                key: "reformat_national_number",
                value: function () {
                  return this.format_next_national_number_digits(
                    this.national_number
                  );
                },
              },
              {
                key: "initialize_phone_number_formats_for_this_country_phone_code",
                value: function () {
                  (this.available_formats = f(this.country_metadata).filter(
                    function (t) {
                      return ft.test(b(t));
                    }
                  )),
                    (this.matching_formats = this.available_formats);
                },
              },
              {
                key: "match_formats_by_leading_digits",
                value: function () {
                  var t = this.national_number,
                    n = t.length - 3;
                  n < 0 && (n = 0),
                    (this.matching_formats = this.matching_formats.filter(
                      function (e) {
                        var d = v(e).length;
                        if (0 === d) return !0;
                        var r = Math.min(n, d - 1),
                          o = v(e)[r];
                        return new RegExp("^(" + o + ")").test(t);
                      }
                    )),
                    this.chosen_format &&
                      -1 ===
                        this.matching_formats.indexOf(this.chosen_format) &&
                      this.reset_format();
                },
              },
              {
                key: "should_format",
                value: function () {
                  return this.national_number >= 3;
                },
              },
              {
                key: "attempt_to_format_complete_phone_number",
                value: function () {
                  var t = !0,
                    n = !1,
                    e = void 0;
                  try {
                    for (
                      var d, r = $()(this.matching_formats);
                      !(t = (d = r.next()).done);
                      t = !0
                    ) {
                      var o = d.value;
                      if (
                        new RegExp("^(?:" + h(o) + ")$").test(
                          this.national_number
                        ) &&
                        this.validate_format(o)
                      ) {
                        this.reset_format(), (this.chosen_format = o);
                        var i = V(
                          this.national_number,
                          o,
                          this.is_international(),
                          this.national_prefix.length > 0,
                          this.country_metadata
                        );
                        if (this.create_formatting_template(o))
                          this.reformat_national_number();
                        else {
                          var u = this.full_phone_number(i);
                          (this.template = u.replace(/[\d\+]/g, "x")),
                            (this.partially_populated_template = u);
                        }
                        return i;
                      }
                    }
                  } catch (a) {
                    (n = !0), (e = a);
                  } finally {
                    try {
                      !t && r.return && r.return();
                    } finally {
                      if (n) throw e;
                    }
                  }
                },
              },
              {
                key: "full_phone_number",
                value: function (t) {
                  return this.is_international()
                    ? "+" + this.country_phone_code + " " + t
                    : t;
                },
              },
              {
                key: "extract_country_phone_code",
                value: function () {
                  if (this.national_number) {
                    var t = Q(this.parsed_input, this.metadata),
                      n = t.country_phone_code,
                      e = t.number;
                    if (n)
                      return (
                        (this.country_phone_code = n),
                        (this.national_number = e),
                        (this.country_metadata = x(n, this.metadata))
                      );
                  }
                },
              },
              {
                key: "extract_national_prefix",
                value: function () {
                  if (((this.national_prefix = ""), this.country_metadata)) {
                    var t = tt(this.national_number, this.country_metadata);
                    return (
                      t !== this.national_number &&
                        ((this.national_prefix = this.national_number.slice(
                          0,
                          this.national_number.length - t.length
                        )),
                        (this.national_number = t)),
                      this.national_prefix
                    );
                  }
                },
              },
              {
                key: "choose_another_format",
                value: function () {
                  var t = !0,
                    n = !1,
                    e = void 0;
                  try {
                    for (
                      var d, r = $()(this.matching_formats);
                      !(t = (d = r.next()).done);
                      t = !0
                    ) {
                      var o = d.value;
                      if (this.chosen_format === o) return;
                      if (
                        this.validate_format(o) &&
                        this.create_formatting_template(o)
                      )
                        return (
                          (this.chosen_format = o),
                          (this.last_match_position = -1),
                          !0
                        );
                    }
                  } catch (i) {
                    (n = !0), (e = i);
                  } finally {
                    try {
                      !t && r.return && r.return();
                    } finally {
                      if (n) throw e;
                    }
                  }
                  this.reset_country(), this.reset_format();
                },
              },
              {
                key: "validate_format",
                value: function (t) {
                  var n, e, d;
                  if (
                    this.is_international() ||
                    this.national_prefix ||
                    !(d = g((n = t), (e = this.country_metadata))) ||
                    !_(d) ||
                    y(n, e)
                  )
                    return !0;
                },
              },
              {
                key: "create_formatting_template",
                value: function (t) {
                  if (!(h(t).indexOf("|") >= 0)) {
                    var n =
                      this.get_template_for_phone_number_format_pattern(t);
                    if (n)
                      return (
                        (this.partially_populated_template = n),
                        (this.template = this.is_international()
                          ? "x" +
                            vt("x", this.country_phone_code.length) +
                            " " +
                            n
                          : n.replace(/\d/g, "x")),
                        this.template
                      );
                  }
                },
              },
              {
                key: "get_template_for_phone_number_format_pattern",
                value: function (t) {
                  var n = g(t, this.country_metadata),
                    e = h(t).replace(ct, "\\d").replace(st, "\\d"),
                    d = at.match(e)[0];
                  if (!(this.national_number.length > d.length)) {
                    var r = this.get_format_format(t, n),
                      o = new RegExp("^" + e + "$"),
                      i = this.national_number.replace(/\d/g, "9");
                    return (
                      o.test(i) && (d = i),
                      d.replace(new RegExp(e), r).replace(ut, "x")
                    );
                  }
                },
              },
              {
                key: "format_next_national_number_digits",
                value: function (t) {
                  var n = !0,
                    e = !1,
                    d = void 0;
                  try {
                    for (
                      var r, o = $()(t);
                      !(n = (r = o.next()).done);
                      n = !0
                    ) {
                      var i = r.value;
                      if (
                        -1 ===
                        this.partially_populated_template
                          .slice(this.last_match_position + 1)
                          .search($t)
                      )
                        return (
                          (this.chosen_format = void 0),
                          (this.template = void 0),
                          void (this.partially_populated_template = void 0)
                        );
                      (this.last_match_position =
                        this.partially_populated_template.search($t)),
                        (this.partially_populated_template =
                          this.partially_populated_template.replace($t, i));
                    }
                  } catch (u) {
                    (e = !0), (d = u);
                  } finally {
                    try {
                      !n && o.return && o.return();
                    } finally {
                      if (e) throw d;
                    }
                  }
                  return (function (t, n) {
                    for (
                      var e = t.slice(0, n), d = mt("(", e) - mt(")", e);
                      d > 0 && n < t.length;

                    )
                      ")" === t[n] && d--, n++;
                    return t.slice(0, n);
                  })(
                    this.partially_populated_template,
                    this.last_match_position + 1
                  ).replace(lt, " ");
                },
              },
              {
                key: "is_international",
                value: function () {
                  return this.parsed_input && "+" === this.parsed_input[0];
                },
              },
              {
                key: "get_format_format",
                value: function (t, n) {
                  var e = this.is_international() ? b(t) : m(t);
                  return (
                    n &&
                      ((!this.national_prefix && _(n)) ||
                        (e = e.replace(P, n))),
                    this.is_international() ? A(e) : e
                  );
                },
              },
              {
                key: "determine_the_country",
                value: function () {
                  this.country = nt(
                    this.country_phone_code,
                    this.national_number,
                    this.metadata
                  );
                },
              },
            ]),
            t
          );
        })();
      function mt(t, n) {
        var e = 0,
          d = !0,
          r = !1,
          o = void 0;
        try {
          for (var i, u = $()(n); !(d = (i = u.next()).done); d = !0)
            i.value === t && e++;
        } catch (a) {
          (r = !0), (o = a);
        } finally {
          try {
            !d && u.return && u.return();
          } finally {
            if (r) throw o;
          }
        }
        return e;
      }
      function vt(t, n) {
        if (n < 1) return "";
        for (var e = ""; n > 1; ) 1 & n && (e += t), (n >>= 1), (t += t);
        return e + t;
      }
      function gt() {
        var t = Array.prototype.slice.call(arguments);
        return t.push(d), K.apply(this, t);
      }
      function yt() {
        var t = Array.prototype.slice.call(arguments);
        return t.push(d), I.apply(this, t);
      }
      function _t() {
        var t = Array.prototype.slice.call(arguments);
        return t.push(d), w.apply(this, t);
      }
      function bt() {
        return _t.apply(this, arguments);
      }
      function xt() {
        var t = Array.prototype.slice.call(arguments);
        return t.push(d), et.apply(this, t);
      }
      function kt() {
        return xt.apply(this, arguments);
      }
      function Ot(t) {
        ht.call(this, t, d);
      }
      function Ct(t) {
        ht.call(this, t, d);
      }
      function Mt(t) {
        ht.call(this, t, d);
      }
      function It(t) {
        return Pt(t, d);
      }
      function Pt(t, n) {
        if (!n.countries[t]) throw new Error('Unknown country: "' + t + '"');
        return c(n.countries[t]);
      }
      e.d(n, "parse", function () {
        return gt;
      }),
        e.d(n, "format", function () {
          return yt;
        }),
        e.d(n, "getNumberType", function () {
          return _t;
        }),
        e.d(n, "get_number_type", function () {
          return bt;
        }),
        e.d(n, "isValidNumber", function () {
          return xt;
        }),
        e.d(n, "is_valid_number", function () {
          return kt;
        }),
        e.d(n, "AsYouType", function () {
          return Ot;
        }),
        e.d(n, "as_you_type", function () {
          return Ct;
        }),
        e.d(n, "asYouType", function () {
          return Mt;
        }),
        e.d(n, "getPhoneCode", function () {
          return It;
        }),
        e.d(n, "getPhoneCodeCustom", function () {
          return Pt;
        }),
        e.d(n, "parseCustom", function () {
          return K;
        }),
        e.d(n, "DIGITS", function () {
          return W;
        }),
        e.d(n, "formatCustom", function () {
          return I;
        }),
        e.d(n, "isValidNumberCustom", function () {
          return et;
        }),
        e.d(n, "getNumberTypeCustom", function () {
          return w;
        }),
        e.d(n, "AsYouTypeCustom", function () {
          return ht;
        }),
        e.d(n, "asYouTypeCustom", function () {
          return ht;
        }),
        e.d(n, "DIGIT_PLACEHOLDER", function () {
          return "x";
        }),
        ((Ot.prototype = Object.create(ht.prototype, {})).constructor = Ot),
        ((Ct.prototype = Object.create(ht.prototype, {})).constructor = Ct),
        ((Mt.prototype = Object.create(ht.prototype, {})).constructor = Mt);
    },
    QbLZ: function (t, n, e) {
      "use strict";
      n.__esModule = !0;
      var d,
        r = (d = e("P2sY")) && d.__esModule ? d : { default: d };
      n.default =
        r.default ||
        function (t) {
          for (var n = 1; n < arguments.length; n++) {
            var e = arguments[n];
            for (var d in e)
              Object.prototype.hasOwnProperty.call(e, d) && (t[d] = e[d]);
          }
          return t;
        };
    },
    QjmD: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.maxDate = function (t) {
        if (!(r.isDate(t) || t instanceof Function))
          throw Error("maxDate value must be or return a formatted date");
        return function (n) {
          if (r.isPresent(d.Validators.required(n))) return null;
          var e = new Date(n.value);
          return r.isDate(e)
            ? (t instanceof Function && (t = t()),
              e <= new Date(t) ? null : { maxDate: !0 })
            : { maxDate: !0 };
        };
      };
    },
    Qyzf: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("yak4"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.validate = function (t) {
              return o.creditCard(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (n.CreditCardValidator = u);
    },
    S4vA: function (t, n) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (n) {
          return !0;
        }
      };
    },
    S8xG: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("umdh")),
        d(e("QjmD"));
    },
    SEkw: function (t, n, e) {
      t.exports = { default: e("N4c9"), __esModule: !0 };
    },
    "Sm/R": function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("Wp8D")),
        d(e("5OUi"));
    },
    TYje: function (t, n) {
      var e = {}.toString;
      t.exports = function (t) {
        return e.call(t).slice(8, -1);
      };
    },
    Tm9b: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("wYKn")),
        d(e("CSYt"));
    },
    USwo: function (t, n, e) {
      var d = e("7whZ"),
        r = e("VSTI"),
        o = e("nAx8"),
        i = e("BRsN"),
        u = e("nA4W"),
        a = function (t, n, e) {
          var $,
            l,
            c,
            s = t & a.F,
            f = t & a.G,
            p = t & a.S,
            h = t & a.P,
            m = t & a.B,
            v = t & a.W,
            g = f ? r : r[n] || (r[n] = {}),
            y = g.prototype,
            _ = f ? d : p ? d[n] : (d[n] || {}).prototype;
          for ($ in (f && (e = n), e))
            ((l = !s && _ && void 0 !== _[$]) && u(g, $)) ||
              ((c = l ? _[$] : e[$]),
              (g[$] =
                f && "function" != typeof _[$]
                  ? e[$]
                  : m && l
                  ? o(c, d)
                  : v && _[$] == c
                  ? (function (t) {
                      var n = function (n, e, d) {
                        if (this instanceof t) {
                          switch (arguments.length) {
                            case 0:
                              return new t();
                            case 1:
                              return new t(n);
                            case 2:
                              return new t(n, e);
                          }
                          return new t(n, e, d);
                        }
                        return t.apply(this, arguments);
                      };
                      return (n.prototype = t.prototype), n;
                    })(c)
                  : h && "function" == typeof c
                  ? o(Function.call, c)
                  : c),
              h &&
                (((g.virtual || (g.virtual = {}))[$] = c),
                t & a.R && y && !y[$] && i(y, $, c)));
        };
      (a.F = 1),
        (a.G = 2),
        (a.S = 4),
        (a.P = 8),
        (a.B = 16),
        (a.W = 32),
        (a.U = 64),
        (a.R = 128),
        (t.exports = a);
    },
    V7oC: function (t, n, e) {
      "use strict";
      n.__esModule = !0;
      var d,
        r = (d = e("SEkw")) && d.__esModule ? d : { default: d };
      n.default = (function () {
        function t(t, n) {
          for (var e = 0; e < n.length; e++) {
            var d = n[e];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              (0, r.default)(t, d.key, d);
          }
        }
        return function (n, e, d) {
          return e && t(n.prototype, e), d && t(n, d), n;
        };
      })();
    },
    VBAv: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.digits = function (t) {
        return r.isPresent(d.Validators.required(t))
          ? null
          : /^\d+$/.test(t.value)
          ? null
          : { digits: !0 };
      };
    },
    VSTI: function (t, n) {
      var e = (t.exports = { version: "2.6.11" });
      "number" == typeof __e && (__e = e);
    },
    WcuY: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("cI4K"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.min(this.min);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "min" === n &&
                  ((this.validator = o.min(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[min][formControlName],[min][formControl],[min][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { min: [{ type: d.Input }] }),
        (n.MinValidator = u);
    },
    Wp8D: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("Sm/R"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.minDate(this.minDate);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "minDate" === n &&
                  ((this.validator = o.minDate(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[minDate][formControlName],[minDate][formControl],[minDate][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { minDate: [{ type: d.Input }] }),
        (n.MinDateValidator = u);
    },
    WpRT: function (t, n, e) {
      var d = e("s2er")("keys"),
        r = e("ixoo");
      t.exports = function (t) {
        return d[t] || (d[t] = r(t));
      };
    },
    YHbO: function (t) {
      t.exports = JSON.parse(
        '{"country_phone_code_to_countries":{"1":["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],"7":["RU","KZ"],"20":["EG"],"27":["ZA"],"30":["GR"],"31":["NL"],"32":["BE"],"33":["FR"],"34":["ES"],"36":["HU"],"39":["IT","VA"],"40":["RO"],"41":["CH"],"43":["AT"],"44":["GB","GG","IM","JE"],"45":["DK"],"46":["SE"],"47":["NO","SJ"],"48":["PL"],"49":["DE"],"51":["PE"],"52":["MX"],"53":["CU"],"54":["AR"],"55":["BR"],"56":["CL"],"57":["CO"],"58":["VE"],"60":["MY"],"61":["AU","CC","CX"],"62":["ID"],"63":["PH"],"64":["NZ"],"65":["SG"],"66":["TH"],"81":["JP"],"82":["KR"],"84":["VN"],"86":["CN"],"90":["TR"],"91":["IN"],"92":["PK"],"93":["AF"],"94":["LK"],"95":["MM"],"98":["IR"],"211":["SS"],"212":["MA","EH"],"213":["DZ"],"216":["TN"],"218":["LY"],"220":["GM"],"221":["SN"],"222":["MR"],"223":["ML"],"224":["GN"],"225":["CI"],"226":["BF"],"227":["NE"],"228":["TG"],"229":["BJ"],"230":["MU"],"231":["LR"],"232":["SL"],"233":["GH"],"234":["NG"],"235":["TD"],"236":["CF"],"237":["CM"],"238":["CV"],"239":["ST"],"240":["GQ"],"241":["GA"],"242":["CG"],"243":["CD"],"244":["AO"],"245":["GW"],"246":["IO"],"247":["AC"],"248":["SC"],"249":["SD"],"250":["RW"],"251":["ET"],"252":["SO"],"253":["DJ"],"254":["KE"],"255":["TZ"],"256":["UG"],"257":["BI"],"258":["MZ"],"260":["ZM"],"261":["MG"],"262":["RE","YT"],"263":["ZW"],"264":["NA"],"265":["MW"],"266":["LS"],"267":["BW"],"268":["SZ"],"269":["KM"],"290":["SH","TA"],"291":["ER"],"297":["AW"],"298":["FO"],"299":["GL"],"350":["GI"],"351":["PT"],"352":["LU"],"353":["IE"],"354":["IS"],"355":["AL"],"356":["MT"],"357":["CY"],"358":["FI","AX"],"359":["BG"],"370":["LT"],"371":["LV"],"372":["EE"],"373":["MD"],"374":["AM"],"375":["BY"],"376":["AD"],"377":["MC"],"378":["SM"],"380":["UA"],"381":["RS"],"382":["ME"],"385":["HR"],"386":["SI"],"387":["BA"],"389":["MK"],"420":["CZ"],"421":["SK"],"423":["LI"],"500":["FK"],"501":["BZ"],"502":["GT"],"503":["SV"],"504":["HN"],"505":["NI"],"506":["CR"],"507":["PA"],"508":["PM"],"509":["HT"],"590":["GP","BL","MF"],"591":["BO"],"592":["GY"],"593":["EC"],"594":["GF"],"595":["PY"],"596":["MQ"],"597":["SR"],"598":["UY"],"599":["CW","BQ"],"670":["TL"],"672":["NF"],"673":["BN"],"674":["NR"],"675":["PG"],"676":["TO"],"677":["SB"],"678":["VU"],"679":["FJ"],"680":["PW"],"681":["WF"],"682":["CK"],"683":["NU"],"685":["WS"],"686":["KI"],"687":["NC"],"688":["TV"],"689":["PF"],"690":["TK"],"691":["FM"],"692":["MH"],"800":["001"],"808":["001"],"850":["KP"],"852":["HK"],"853":["MO"],"855":["KH"],"856":["LA"],"870":["001"],"878":["001"],"880":["BD"],"881":["001"],"882":["001"],"883":["001"],"886":["TW"],"888":["001"],"960":["MV"],"961":["LB"],"962":["JO"],"963":["SY"],"964":["IQ"],"965":["KW"],"966":["SA"],"967":["YE"],"968":["OM"],"970":["PS"],"971":["AE"],"972":["IL"],"973":["BH"],"974":["QA"],"975":["BT"],"976":["MN"],"977":["NP"],"979":["001"],"992":["TJ"],"993":["TM"],"994":["AZ"],"995":["GE"],"996":["KG"],"998":["UZ"]},"countries":{"AC":["247","[46]\\\\d{4}|[01589]\\\\d{5}"],"AD":["376","[16]\\\\d{5,8}|[37-9]\\\\d{5}",[["(\\\\d{3})(\\\\d{3})","$1 $2",["[137-9]|6[0-8]"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["180","180[02]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["690"]]]],"AE":["971","[2-79]\\\\d{7,8}|800\\\\d{2,9}",[["([2-4679])(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[2-4679][2-8]"]],["(5\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["5"]],["([479]00)(\\\\d)(\\\\d{5})","$1 $2 $3",["[479]00"],"$1"],["([68]00)(\\\\d{2,9})","$1 $2",["[68]00"],"$1"]],"0","0$1"],"AF":["93","[2-7]\\\\d{8}",[["([2-7]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[2-7]"]]],"0","0$1"],"AG":["1","[2589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"268"],"AI":["1","[2589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"264"],"AL":["355","[2-57]\\\\d{7}|6\\\\d{8}|8\\\\d{5,7}|9\\\\d{5}",[["(4)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["4[0-6]"]],["(6\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["6"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2358][2-5]|4[7-9]"]],["(\\\\d{3})(\\\\d{3,5})","$1 $2",["[235][16-9]|[79]|8[016-9]"]]],"0","0$1"],"AM":["374","[1-9]\\\\d{7}",[["(\\\\d{2})(\\\\d{6})","$1 $2",["1|47"]],["(\\\\d{2})(\\\\d{6})","$1 $2",["4[1349]|[5-7]|88|9[1-9]"],"0$1"],["(\\\\d{3})(\\\\d{5})","$1 $2",["[23]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["8|90"],"0 $1"]],"0","(0$1)"],"AO":["244","[29]\\\\d{8}",[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3"]]],"AR":["54","11\\\\d{8}|[2368]\\\\d{9}|9\\\\d{10}",[["([68]\\\\d{2})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[68]"]],["(9)(11)(\\\\d{4})(\\\\d{4})","$2 15-$3-$4",["911"],null,null,"$1 $2 $3-$4"],["(9)(\\\\d{3})(\\\\d{3})(\\\\d{4})","$2 15-$3-$4",["9(?:2[2-4689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"],null,null,"$1 $2 $3-$4"],["(9)(\\\\d{4})(\\\\d{2})(\\\\d{4})","$2 15-$3-$4",["9[23]"],null,null,"$1 $2 $3-$4"],["(11)(\\\\d{4})(\\\\d{4})","$1 $2-$3",["11"],null,"true"],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"],null,"true"],["(\\\\d{4})(\\\\d{2})(\\\\d{4})","$1 $2-$3",["[23]"],null,"true"]],"0","0$1","0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?","9$1"],"AS":["1","[5689]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"684"],"AT":["43","[1-9]\\\\d{3,12}",[["(116\\\\d{3})","$1",["116"],"$1"],["(1)(\\\\d{3,12})","$1 $2",["1"]],["(5\\\\d)(\\\\d{3,5})","$1 $2",["5[079]"]],["(5\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["5[079]"]],["(5\\\\d)(\\\\d{4})(\\\\d{4,7})","$1 $2 $3",["5[079]"]],["(\\\\d{3})(\\\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"]],["(\\\\d{4})(\\\\d{3,9})","$1 $2",["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"]]],"0","0$1"],"AU":["61","1\\\\d{4,9}|[2-578]\\\\d{8}",[["([2378])(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(16)(\\\\d{3,4})","$1 $2",["16"],"0$1"],["(16)(\\\\d{3})(\\\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],["(180)(2\\\\d{3})","$1 $2",["180","1802"]],["(19\\\\d)(\\\\d{3})","$1 $2",["19[13]"]],["(19\\\\d{2})(\\\\d{4})","$1 $2",["19[679]"]],["(13)(\\\\d{2})(\\\\d{2})","$1 $2 $3",["13[1-9]"]]],"0",null,null,null,null,null,["[237]\\\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\\\d|4[0-4]))|[6-8]\\\\d{4}|9(?:[02-9]\\\\d{3}|1(?:[0-57-9]\\\\d{2}|6[0135-9]\\\\d)))\\\\d{3}","14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\\\d{6}","180(?:0\\\\d{3}|2)\\\\d{3}","19(?:0[0126]\\\\d|[679])\\\\d{5}","500\\\\d{6}",null,null,"16\\\\d{3,7}","550\\\\d{6}","13(?:00\\\\d{3}|45[0-4]|\\\\d)\\\\d{3}"]],"AW":["297","[25-9]\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"AX":["358","1\\\\d{5,11}|[35]\\\\d{5,9}|2\\\\d{4,9}|4\\\\d{5,10}|6\\\\d{7,9}|7\\\\d{4,9}|8\\\\d{6,9}",[["(\\\\d{3})(\\\\d{3,7})","$1 $2",["(?:[1-3]0|[6-8])0"]],["(75\\\\d{3})","$1",["75[12]"]],["(116\\\\d{3})","$1",["116"],"$1"],["(\\\\d{2})(\\\\d{4,10})","$1 $2",["[14]|2[09]|50|7[135]"]],["(\\\\d)(\\\\d{4,11})","$1 $2",["[25689][1-8]|3"]]],"0",null,null,null,null,null,["18[1-8]\\\\d{3,9}","4\\\\d{5,10}|50\\\\d{4,8}","800\\\\d{4,7}","[67]00\\\\d{5,6}",null,null,"[13]0\\\\d{4,8}|2(?:0(?:[016-8]\\\\d{3,7}|[2-59]\\\\d{2,7})|9\\\\d{4,8})|60(?:[12]\\\\d{5,6}|6\\\\d{7})|7(?:1\\\\d{7}|3\\\\d{8}|5[03-9]\\\\d{2,7})"]],"AZ":["994","[1-9]\\\\d{8}",[["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["1[28]|2(?:[0-36]|[45]2)|365"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[4-8]"],"0$1"],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],"0","(0$1)"],"BA":["387","[3-9]\\\\d{7,8}",[["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2-$3",["[3-5]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3 $4",["6[047]"]]],"0","0$1"],"BB":["1","[2589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"246"],"BD":["880","[2-79]\\\\d{5,9}|1\\\\d{9}|8[0-7]\\\\d{4,8}",[["(2)(\\\\d{7,8})","$1-$2",["2"]],["(\\\\d{2})(\\\\d{4,6})","$1-$2",["[3-79]1"]],["(\\\\d{4})(\\\\d{3,6})","$1-$2",["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"]],["(\\\\d{3})(\\\\d{3,7})","$1-$2",["[3-79][2-9]|8"]]],"0","0$1"],"BE":["32","[1-9]\\\\d{7,8}",[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["4[6-9]"]],["(\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[23]|4[23]|9[2-4]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[156]|7[018]|8(?:0[1-9]|[1-79])"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["(?:80|9)0"]]],"0","0$1"],"BF":["226","[25-7]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"BG":["359","[23567]\\\\d{5,7}|[489]\\\\d{6,8}",[["(2)(\\\\d)(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["2"]],["(2)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["2"]],["(\\\\d{3})(\\\\d{4})","$1 $2",["43[124-7]|70[1-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{2})","$1 $2 $3",["43[124-7]|70[1-9]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["[78]00"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["99[69]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["48|8[7-9]|9[08]"]]],"0","0$1"],"BH":["973","[136-9]\\\\d{7}",[["(\\\\d{4})(\\\\d{4})","$1 $2"]]],"BI":["257","[267]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"BJ":["229","[2689]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[2689]"]]]],"BL":["590","[56]\\\\d{8}",[["([56]\\\\d{2})(\\\\d{2})(\\\\d{4})","$1 $2-$3",["590|69[01]"]]],"0",null,null,null,null,null,["590(?:2[7-9]|5[12]|87)\\\\d{4}","69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}"]],"BM":["1","[4589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"441"],"BN":["673","[2-578]\\\\d{6}",[["([2-578]\\\\d{2})(\\\\d{4})","$1 $2",["[2-578]"]]]],"BO":["591","[23467]\\\\d{7}|8\\\\d{8}",[["([234])(\\\\d{7})","$1 $2",["[2-4]"]],["([67]\\\\d{7})","$1",["[67]"]],["(800)(\\\\d{2})(\\\\d{4})","$1 $2 $3",["800"]]],"0",null,"0(1\\\\d)?"],"BQ":["599","[347]\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1 $2",["[13-7]"]],["(9)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["9"]]],null,null,null,null,null,null,["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\\\d)\\\\d{3}","(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\\\d|9[056])\\\\d)\\\\d{3}"]],"BR":["55","[1-46-9]\\\\d{7,10}|5(?:[0-4]\\\\d{7,9}|5(?:[2-8]\\\\d{7}|9\\\\d{7,8}))",[["(\\\\d{4})(\\\\d{4})","$1-$2",["300|40[02]","300|40(?:0|20)"]],["([3589]00)(\\\\d{2,3})(\\\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)"],["(\\\\d{2})(\\\\d{5})(\\\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)"]],"0",null,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\\\d{10,11}))?","$2"],"BS":["1","[2589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"242"],"BT":["975","[1-8]\\\\d{6,7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["1|77"]],["([2-8])(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2-68]|7[246]"]]]],"BW":["267","[2-79]\\\\d{6,7}",[["(\\\\d{3})(\\\\d{4})","$1 $2",["[2-6]"]],["(7\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["7"]],["(90)(\\\\d{5})","$1 $2",["90"]]]],"BY":["375","[1-4]\\\\d{8}|8(?:0(?:0\\\\d{3,7}|[13]\\\\d{7})|(?:10|20\\\\d)\\\\d{7})|9\\\\d{9,10}",[["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["17[0-3589]|2[4-9]|[34]","17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"8 0$1"],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])","1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"],"8 0$1"],["(\\\\d{4})(\\\\d{2})(\\\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["([89]\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8[01]|9"],"8 $1"],["(82\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["82"],"8 $1"],["(800)(\\\\d{3})","$1 $2",["800"],"8 $1"],["(800)(\\\\d{2})(\\\\d{2,4})","$1 $2 $3",["800"],"8 $1"]],"8",null,"8?0?"],"BZ":["501","[2-8]\\\\d{6}|0\\\\d{10}",[["(\\\\d{3})(\\\\d{4})","$1-$2",["[2-8]"]],["(0)(800)(\\\\d{4})(\\\\d{3})","$1-$2-$3-$4",["080","0800"]]]],"CA":["1","[2-9]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,null,["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\\\d{6}",null,"8(?:00|33|44|55|66|77|88)[2-9]\\\\d{6}","900[2-9]\\\\d{6}","5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\\\d{6}"]],"CC":["61","[1458]\\\\d{5,9}",[["([2378])(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(16)(\\\\d{3,4})","$1 $2",["16"],"0$1"],["(16)(\\\\d{3})(\\\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],["(180)(2\\\\d{3})","$1 $2",["180","1802"]],["(19\\\\d)(\\\\d{3})","$1 $2",["19[13]"]],["(19\\\\d{2})(\\\\d{4})","$1 $2",["19[679]"]],["(13)(\\\\d{2})(\\\\d{2})","$1 $2 $3",["13[1-9]"]]],"0",null,null,null,null,null,["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\\\d|70[23]|959))\\\\d{3}","14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\\\d{6}","180(?:0\\\\d{3}|2)\\\\d{3}","19(?:0[0126]\\\\d|[679])\\\\d{5}","500\\\\d{6}",null,null,null,"550\\\\d{6}","13(?:00\\\\d{2})?\\\\d{4}"]],"CD":["243","[2-6]\\\\d{6}|[18]\\\\d{6,8}|9\\\\d{8}",[["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["12"]],["([89]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["8[0-2459]|9"]],["(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["88"]],["(\\\\d{2})(\\\\d{5})","$1 $2",["[1-6]"]]],"0","0$1"],"CF":["236","[278]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"CG":["242","[028]\\\\d{8}",[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["801"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[02]"]],["(\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["800"]]]],"CH":["41","[2-9]\\\\d{8}|860\\\\d{9}",[["([2-9]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[2-7]|[89]1"]],["([89]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["8[047]|90"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4 $5",["860"]]],"0","0$1"],"CI":["225","[02-8]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"CK":["682","[2-8]\\\\d{4}",[["(\\\\d{2})(\\\\d{3})","$1 $2"]]],"CL":["56","1230\\\\d{7}|[2-46-9]\\\\d{8,10}|5[1-3578]\\\\d{7}",[["(\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2[23]"],"($1)"],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]"],"($1)"],["(9)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["9"]],["(44)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["44"]],["([68]00)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[68]00"],"$1"],["(600)(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3 $4",["600"],"$1"],["(1230)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["123","1230"],"$1"],["(\\\\d{5})(\\\\d{4})","$1 $2",["219"],"($1)"]],"0","0$1","0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))"],"CM":["237","[2368]\\\\d{7,8}",[["([26])(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4 $5",["[26]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[23]|88"]]]],"CN":["86","[1-7]\\\\d{6,11}|8[0-357-9]\\\\d{6,9}|9\\\\d{7,10}",[["([48]00)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[48]00"]],["(\\\\d{2})(\\\\d{5,6})","$1 $2",["(?:10|2\\\\d)[19]","(?:10|2\\\\d)(?:10|9[56])","(?:10|2\\\\d)(?:100|9[56])"],"0$1"],["(\\\\d{3})(\\\\d{5,6})","$1 $2",["[3-9]","[3-9]\\\\d\\\\d[19]","[3-9]\\\\d\\\\d(?:10|9[56])"],"0$1"],["(21)(\\\\d{4})(\\\\d{4,6})","$1 $2 $3",["21"],"0$1","true"],["([12]\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"],"0$1","true"],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],"0$1","true"],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"],"0$1","true"],["(\\\\d{4})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["807","8078"],"0$1","true"],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["1(?:[3-57-9]|66)"]],["(10800)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["108","1080","10800"]],["(\\\\d{3})(\\\\d{7,8})","$1 $2",["950"]]],"0",null,"(1(?:[129]\\\\d{3}|79\\\\d{2}))|0"],"CO":["57","(?:[13]\\\\d{0,3}|[24-8])\\\\d{7}",[["(\\\\d)(\\\\d{7})","$1 $2",["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]","1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"],"($1)"],["(\\\\d{3})(\\\\d{7})","$1 $2",["3"]],["(1)(\\\\d{3})(\\\\d{7})","$1-$2-$3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"],"0$1",null,"$1 $2 $3"]],"0",null,"0([3579]|4(?:44|56))?"],"CR":["506","[24-9]\\\\d{7,9}",[["(\\\\d{4})(\\\\d{4})","$1 $2",["[24-7]|8[3-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[89]0"]]],null,null,"(19(?:0[012468]|1[09]|20|66|77|99))"],"CU":["53","[2-57]\\\\d{5,7}",[["(\\\\d)(\\\\d{6,7})","$1 $2",["7"]],["(\\\\d{2})(\\\\d{4,6})","$1 $2",["[2-4]"]],["(\\\\d)(\\\\d{7})","$1 $2",["5"],"0$1"]],"0","(0$1)"],"CV":["238","[259]\\\\d{6}",[["(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3"]]],"CW":["599","[134679]\\\\d{6,7}",[["(\\\\d{3})(\\\\d{4})","$1 $2",["[13-7]"]],["(9)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["9"]]],null,null,null,null,null,null,["9(?:[48]\\\\d{2}|50\\\\d|7(?:2[0-24]|[34]\\\\d|6[35-7]|77|8[7-9]))\\\\d{4}","9(?:5(?:[12467]\\\\d|3[01])|6(?:[15-9]\\\\d|3[01]))\\\\d{4}",null,null,null,null,null,"955\\\\d{5}",null,"60[0-2]\\\\d{4}"]],"CX":["61","[1458]\\\\d{5,9}",[["([2378])(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(16)(\\\\d{3,4})","$1 $2",["16"],"0$1"],["(16)(\\\\d{3})(\\\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],["(180)(2\\\\d{3})","$1 $2",["180","1802"]],["(19\\\\d)(\\\\d{3})","$1 $2",["19[13]"]],["(19\\\\d{2})(\\\\d{4})","$1 $2",["19[679]"]],["(13)(\\\\d{2})(\\\\d{2})","$1 $2 $3",["13[1-9]"]]],"0",null,null,null,null,null,["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\\\d|7(?:0[01]|1[0-2])|958))\\\\d{3}","14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\\\d{6}","180(?:0\\\\d{3}|2)\\\\d{3}","19(?:0[0126]\\\\d|[679])\\\\d{5}","500\\\\d{6}",null,null,null,"550\\\\d{6}","13(?:00\\\\d{2})?\\\\d{4}"]],"CY":["357","[257-9]\\\\d{7}",[["(\\\\d{2})(\\\\d{6})","$1 $2"]]],"CZ":["420","[2-8]\\\\d{8}|9\\\\d{8,11}",[["([2-9]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(96\\\\d)(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["96"]],["(9\\\\d)(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["9[36]"]]]],"DE":["49","[1-35-9]\\\\d{3,14}|4(?:[0-8]\\\\d{3,12}|9(?:[0-37]\\\\d|4(?:[1-35-8]|4\\\\d?)|5\\\\d{1,2}|6[1-8]\\\\d?)\\\\d{2,8})",[["(1\\\\d{2})(\\\\d{7,8})","$1 $2",["1[67]"]],["(15\\\\d{3})(\\\\d{6})","$1 $2",["15[0568]"]],["(1\\\\d{3})(\\\\d{7})","$1 $2",["15"]],["(\\\\d{2})(\\\\d{3,11})","$1 $2",["3[02]|40|[68]9"]],["(\\\\d{3})(\\\\d{3,11})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"]],["(\\\\d{4})(\\\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[1346]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"]],["(3\\\\d{4})(\\\\d{1,10})","$1 $2",["3"]],["(800)(\\\\d{7,12})","$1 $2",["800"]],["(\\\\d{3})(\\\\d)(\\\\d{4,10})","$1 $2 $3",["1(?:37|80)|900","1(?:37|80)|900[1359]"]],["(1\\\\d{2})(\\\\d{5,11})","$1 $2",["181"]],["(18\\\\d{3})(\\\\d{6})","$1 $2",["185","1850","18500"]],["(18\\\\d{2})(\\\\d{7})","$1 $2",["18[68]"]],["(18\\\\d)(\\\\d{8})","$1 $2",["18[2-579]"]],["(700)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["700"]],["(138)(\\\\d{4})","$1 $2",["138"]],["(15[013-68])(\\\\d{2})(\\\\d{8})","$1 $2 $3",["15[013-68]"]],["(15[279]\\\\d)(\\\\d{2})(\\\\d{7})","$1 $2 $3",["15[279]"]],["(1[67]\\\\d)(\\\\d{2})(\\\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"]]],"0","0$1"],"DJ":["253","[27]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"DK":["45","[2-9]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"DM":["1","[57-9]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"767"],"DO":["1","[589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"8[024]9"],"DZ":["213","(?:[1-4]|[5-9]\\\\d)\\\\d{7}",[["([1-4]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[1-4]"]],["([5-8]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[5-8]"]],["(9\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["9"]]],"0","0$1"],"EC":["593","1\\\\d{9,10}|[2-8]\\\\d{7}|9\\\\d{8}",[["(\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2-$3",["[247]|[356][2-8]"],null,null,"$1-$2-$3"],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["9"],"0$1"],["(1800)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["180","1800"],"$1"]],"0","(0$1)"],"EE":["372","[3-9]\\\\d{6,7}|800\\\\d{6,7}",[["([3-79]\\\\d{2})(\\\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],["(70)(\\\\d{2})(\\\\d{4})","$1 $2 $3",["70"]],["(8000)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["800","8000"]],["([458]\\\\d{3})(\\\\d{3,4})","$1 $2",["40|5|8(?:00|[1-5])","40|5|8(?:00[1-9]|[1-5])"]]]],"EG":["20","1\\\\d{4,9}|[24-6]\\\\d{8}|3\\\\d{7}|[89]\\\\d{8,9}",[["(\\\\d)(\\\\d{7,8})","$1 $2",["[23]"]],["(\\\\d{2})(\\\\d{6,7})","$1 $2",["1(?:3|5[239])|[4-6]|[89][2-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1[0-25]|[89]00"]]],"0","0$1"],"EH":["212","[5-9]\\\\d{8}",[["([5-7]\\\\d{2})(\\\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"]],["([58]\\\\d{3})(\\\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|92)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]],["(5\\\\d{4})(\\\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"]],["([5]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["5(?:4[067]|5[03])"]],["(8[09])(\\\\d{7})","$1-$2",["8(?:0|9[013-9])"]]],"0",null,null,null,null,"528[89]"],"ER":["291","[178]\\\\d{6}",[["(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3"]],"0","0$1"],"ES":["34","[5-9]\\\\d{8}",[["([89]00)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[89]00"]],["([5-9]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[568]|[79][0-8]"]]]],"ET":["251","[1-59]\\\\d{8}",[["([1-59]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[1-59]"]]],"0","0$1"],"FI":["358","1\\\\d{4,11}|[2-9]\\\\d{4,10}",[["(\\\\d{3})(\\\\d{3,7})","$1 $2",["(?:[1-3]0|[6-8])0"]],["(75\\\\d{3})","$1",["75[12]"]],["(116\\\\d{3})","$1",["116"],"$1"],["(\\\\d{2})(\\\\d{4,10})","$1 $2",["[14]|2[09]|50|7[135]"]],["(\\\\d)(\\\\d{4,11})","$1 $2",["[25689][1-8]|3"]]],"0","0$1",null,null,null,null,["1(?:[3569][1-8]\\\\d{3,9}|[47]\\\\d{5,10})|2[1-8]\\\\d{3,9}|3(?:[1-8]\\\\d{3,9}|9\\\\d{4,8})|[5689][1-8]\\\\d{3,9}","4(?:[0-8]\\\\d{4,9}|9\\\\d{3,8})|50\\\\d{4,8}","800\\\\d{4,7}","[67]00\\\\d{5,6}",null,null,"[13]0\\\\d{4,8}|2(?:0(?:[016-8]\\\\d{3,7}|[2-59]\\\\d{2,7})|9\\\\d{4,8})|60(?:[12]\\\\d{5,6}|6\\\\d{7})|7(?:1\\\\d{7}|3\\\\d{8}|5[03-9]\\\\d{3,7})"]],"FJ":["679","[2-9]\\\\d{6}|0\\\\d{10}",[["(\\\\d{3})(\\\\d{4})","$1 $2",["[2-9]"]],["(\\\\d{4})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["0"]]]],"FK":["500","[2-7]\\\\d{4}"],"FM":["691","[39]\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"FO":["298","[2-9]\\\\d{5}",[["(\\\\d{6})","$1"]],null,null,"(10(?:01|[12]0|88))"],"FR":["33","[1-9]\\\\d{8}",[["([1-79])(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4 $5",["[1-79]"]],["(8\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],"0","0$1"],"GA":["241","0?\\\\d{7}",[["(\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["0"]]]],"GB":["44","\\\\d{7,10}",[["(7\\\\d{3})(\\\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\\\d{5})(\\\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\\\d{3})(\\\\d{5,6})","$1 $2",["1"]],["(800)(\\\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["80"]],["(800)(\\\\d{6})","$1 $2",["800"]]],"0","0$1",null,null,null,null,["2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\\\d)\\\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\\\d)|3(?:0\\\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\\\d|9[2-57]))\\\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\\\d)|276\\\\d|6(?:26[06-9]|686))|6(?:06(?:4\\\\d|7[4-79])|295[567]|35[34]\\\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\\\d{3}|176888[2-46-8]\\\\d{2}|16977[23]\\\\d{3}","7(?:[1-3]\\\\d{3}|4(?:[0-46-9]\\\\d{2}|5(?:[0-689]\\\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\\\d|2[0-35-9])\\\\d|7(?:0(?:0[01]|[1-9]\\\\d)|[1-7]\\\\d{2}|8[02-9]\\\\d|9[0-689]\\\\d)|8(?:[014-9]\\\\d|[23][0-8])\\\\d|9(?:[024-9]\\\\d{2}|1(?:[02-9]\\\\d|1[028])|3[0-689]\\\\d))\\\\d{5}","80(?:0(?:1111|\\\\d{6,7})|8\\\\d{7})","(?:87[123]|9(?:[01]\\\\d|8[2349]))\\\\d{7}","70\\\\d{8}",null,"(?:3[0347]|55)\\\\d{8}","76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}","56\\\\d{8}","8(?:4(?:5464\\\\d|[2-5]\\\\d{7})|70\\\\d{7})"]],"GD":["1","[4589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"473"],"GE":["995","[34578]\\\\d{8}",[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["7"],"0$1"],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["5"]]],"0"],"GF":["594","[56]\\\\d{8}",[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]],"0","0$1"],"GG":["44","[135789]\\\\d{6,9}",[["(7\\\\d{3})(\\\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\\\d{5})(\\\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\\\d{3})(\\\\d{5,6})","$1 $2",["1"]],["(800)(\\\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["80"]],["(800)(\\\\d{6})","$1 $2",["800"]]],"0",null,null,null,null,null,["1481[25-9]\\\\d{5}","7(?:781\\\\d|839\\\\d|911[17])\\\\d{5}","80(?:0(?:1111|\\\\d{6,7})|8\\\\d{7})","(?:87[123]|9(?:[01]\\\\d|8[0-3]))\\\\d{7}","70\\\\d{8}",null,"(?:3[0347]|55)\\\\d{8}","76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}","56\\\\d{8}","8(?:4(?:5464\\\\d|[2-5]\\\\d{7})|70\\\\d{7})"]],"GH":["233","[235]\\\\d{8}|8\\\\d{7}",[["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[235]"]],["(\\\\d{3})(\\\\d{5})","$1 $2",["8"]]],"0","0$1"],"GI":["350","[256]\\\\d{7}",[["(\\\\d{3})(\\\\d{5})","$1 $2",["2"]]]],"GL":["299","[1-689]\\\\d{5}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3"]]],"GM":["220","[2-9]\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"GN":["224","[367]\\\\d{7,8}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["3"]],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[67]"]]]],"GP":["590","[56]\\\\d{8}",[["([56]\\\\d{2})(\\\\d{2})(\\\\d{4})","$1 $2-$3",["590|69[01]"]]],"0","0$1",null,null,null,null,["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\\\d)\\\\d{4}","69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}"]],"GQ":["240","[23589]\\\\d{8}",[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[235]"]],["(\\\\d{3})(\\\\d{6})","$1 $2",["[89]"]]]],"GR":["30","[26-9]\\\\d{9}",[["([27]\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["21|7"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2[2-9]1|[689]"]],["(2\\\\d{3})(\\\\d{6})","$1 $2",["2[2-9][02-9]"]]]],"GT":["502","[2-7]\\\\d{7}|1[89]\\\\d{9}",[["(\\\\d{4})(\\\\d{4})","$1 $2",["[2-7]"]],["(\\\\d{4})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1"]]]],"GU":["1","[5689]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"671"],"GW":["245","(?:4(?:0\\\\d{5}|4\\\\d{7})|9\\\\d{8})",[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["44|9[5-7]"]],["(\\\\d{3})(\\\\d{4})","$1 $2",["40"]]]],"GY":["592","[2-46-9]\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"HK":["852","[2-7]\\\\d{7}|8[0-3]\\\\d{6,7}|9\\\\d{4,10}",[["(\\\\d{4})(\\\\d{4})","$1 $2",["[2-7]|[89](?:0[1-9]|[1-9])"]],["(800)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["800"]],["(900)(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["900"]],["(900)(\\\\d{2,5})","$1 $2",["900"]]]],"HN":["504","[237-9]\\\\d{7}",[["(\\\\d{4})(\\\\d{4})","$1-$2"]]],"HR":["385","[1-7]\\\\d{5,8}|[89]\\\\d{6,8}",[["(1)(\\\\d{4})(\\\\d{3})","$1 $2 $3",["1"]],["([2-5]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[2-5]"]],["(9\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["9"]],["(6[01])(\\\\d{2})(\\\\d{2,3})","$1 $2 $3",["6[01]"]],["([67]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[67]"]],["(80[01])(\\\\d{2})(\\\\d{2,3})","$1 $2 $3",["80[01]"]],["(80[01])(\\\\d{3})(\\\\d{3})","$1 $2 $3",["80[01]"]]],"0","0$1"],"HT":["509","[2-489]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{4})","$1 $2 $3"]]],"HU":["36","[1-9]\\\\d{7,8}",[["(1)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[2-9]"]]],"06","($1)"],"ID":["62","(?:[1-79]\\\\d{6,10}|8\\\\d{7,11})",[["(\\\\d{2})(\\\\d{5,8})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\\\d{3})(\\\\d{5,8})","$1 $2",["2[035-9]|[36][02-9]|[4579]"],"(0$1)"],["(8\\\\d{2})(\\\\d{3,4})(\\\\d{3})","$1-$2-$3",["8[1-35-9]"]],["(8\\\\d{2})(\\\\d{4})(\\\\d{4,5})","$1-$2-$3",["8[1-35-9]"]],["(1)(500)(\\\\d{3})","$1 $2 $3",["150","1500"],"$1"],["(177)(\\\\d{6,8})","$1 $2",["177"]],["(800)(\\\\d{5,7})","$1 $2",["800"]],["(804)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["804"]],["(80\\\\d)(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["80[79]"]]],"0","0$1"],"IE":["353","[124-9]\\\\d{6,9}",[["(1)(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["1"]],["(\\\\d{2})(\\\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"]],["(\\\\d{3})(\\\\d{5})","$1 $2",["40[24]|50[45]"]],["(48)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["48"]],["(818)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["818"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[24-69]|7[14]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["76|8[35-9]"],"0$1"],["(8\\\\d)(\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3 $4",["8[35-9]5"],"0$1"],["(700)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["700"],"0$1"],["(\\\\d{4})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1(?:5|8[059])","1(?:5|8[059]0)"],"$1"]],"0","(0$1)"],"IL":["972","1\\\\d{6,11}|[2-589]\\\\d{3}(?:\\\\d{3,6})?|6\\\\d{3}|7\\\\d{6,9}",[["([2-489])(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["([57]\\\\d)(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(153)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})","$1 $2 $3 $4",["153"]],["(1)([7-9]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(1255)(\\\\d{3})","$1-$2",["125","1255"]],["(1200)(\\\\d{3})(\\\\d{3})","$1-$2-$3",["120","1200"]],["(1212)(\\\\d{2})(\\\\d{2})","$1-$2-$3",["121","1212"]],["(1599)(\\\\d{6})","$1-$2",["159","1599"]],["(151)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})","$1-$2 $3-$4",["151"]],["(\\\\d{4})","*$1",["[2-689]"]]],"0"],"IM":["44","[135789]\\\\d{6,9}",[["(7\\\\d{3})(\\\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\\\d{5})(\\\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\\\d{3})(\\\\d{5,6})","$1 $2",["1"]],["(800)(\\\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["80"]],["(800)(\\\\d{6})","$1 $2",["800"]]],"0",null,null,null,null,null,["1624[5-8]\\\\d{5}","7(?:4576|[59]24\\\\d|624[0-4689])\\\\d{5}","808162\\\\d{4}","(?:872299|90[0167]624)\\\\d{4}","70\\\\d{8}",null,"3(?:08162\\\\d|3\\\\d{5}|4(?:40[49]06|5624\\\\d)|7(?:0624\\\\d|2299\\\\d))\\\\d{3}|55\\\\d{8}",null,"56\\\\d{8}","8(?:4(?:40[49]06|5624\\\\d)|70624\\\\d)\\\\d{3}"]],"IN":["91","008\\\\d{9}|1\\\\d{7,12}|[2-9]\\\\d{9,10}",[["(\\\\d{8})","$1",["561","5616","56161"],"$1"],["(\\\\d{5})(\\\\d{5})","$1 $2",["6(?:[09]0|2[03689]|3[05-9])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9","6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9","6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[5-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-9]|80[2-46]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"]],["(\\\\d{4})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1(?:[23579]|[468][1-9])|[2-8]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})(\\\\d{3})","$1 $2 $3 $4",["008"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["140"],"$1"],["(\\\\d{4})(\\\\d{2})(\\\\d{4})","$1 $2 $3",["160","1600"],"$1"],["(\\\\d{4})(\\\\d{4,5})","$1 $2",["180","1800"],"$1"],["(\\\\d{4})(\\\\d{2,4})(\\\\d{4})","$1 $2 $3",["180","1800"],"$1"],["(\\\\d{4})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["186","1860"],"$1"],["(\\\\d{4})(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["18[06]"],"$1"]],"0","0$1",null,null,true],"IO":["246","3\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"IQ":["964","[1-7]\\\\d{7,9}",[["(1)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1"]],["([2-6]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[2-6]"]],["(7\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]]],"0","0$1"],"IR":["98","[1-8]\\\\d{5,9}|9(?:[0-4]\\\\d{8}|9\\\\d{8})",[["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[1-8]"]],["(\\\\d{2})(\\\\d{4,5})","$1 $2",["[1-8]"]],["(\\\\d{4,5})","$1",["96"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["9"]]],"0","0$1"],"IS":["354","[4-9]\\\\d{6}|38\\\\d{7}",[["(\\\\d{3})(\\\\d{4})","$1 $2",["[4-9]"]],["(3\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["3"]]]],"IT":["39","[01589]\\\\d{5,10}|3(?:[12457-9]\\\\d{8}|[36]\\\\d{7,9})",[["(\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["0[26]|55"]],["(0[26])(\\\\d{4})(\\\\d{5})","$1 $2 $3",["0[26]"]],["(0[26])(\\\\d{4,6})","$1 $2",["0[26]"]],["(0\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],["(\\\\d{3})(\\\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],["(0\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"]],["(0\\\\d{3})(\\\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["894","894[5-9]"]],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["3"]]],null,null,null,null,null,null,["0(?:[26]\\\\d{4,9}|(?:1(?:[0159]\\\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\\\d{2,7})","3(?:[12457-9]\\\\d{8}|6\\\\d{7,8}|3\\\\d{7,9})","80(?:0\\\\d{6}|3\\\\d{3})","0878\\\\d{5}|1(?:44|6[346])\\\\d{6}|89(?:2\\\\d{3}|4(?:[0-4]\\\\d{2}|[5-9]\\\\d{4})|5(?:[0-4]\\\\d{2}|[5-9]\\\\d{6})|9\\\\d{6})","1(?:78\\\\d|99)\\\\d{6}",null,null,null,"55\\\\d{8}","84(?:[08]\\\\d{6}|[17]\\\\d{3})"]],"JE":["44","[135789]\\\\d{6,9}",[["(7\\\\d{3})(\\\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\\\d{5})(\\\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\\\d{3})(\\\\d{5,6})","$1 $2",["1"]],["(800)(\\\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["80"]],["(800)(\\\\d{6})","$1 $2",["800"]]],"0",null,null,null,null,null,["1534[0-24-8]\\\\d{5}","7(?:509\\\\d|7(?:00[378]|97[7-9])|829\\\\d|937\\\\d)\\\\d{5}","80(?:07(?:35|81)|8901)\\\\d{4}","(?:871206|90(?:066[59]|1810|71(?:07|55)))\\\\d{4}","701511\\\\d{4}",null,"3(?:0(?:07(?:35|81)|8901)|3\\\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\\\d{4}|55\\\\d{8}","76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}","56\\\\d{8}","8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\\\d{4}"]],"JM":["1","[589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"876"],"JO":["962","[235-9]\\\\d{7,8}",[["(\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(7)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["7[457-9]"]],["(\\\\d{2})(\\\\d{7})","$1 $2",["70"]],["(\\\\d{3})(\\\\d{5,6})","$1 $2",["8[0158]|9"]]],"0","0$1"],"JP":["81","[1-9]\\\\d{8,9}|00(?:[36]\\\\d{7,14}|7\\\\d{5,7}|8\\\\d{7})",[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1-$2-$3",["(?:12|57|99)0"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["800"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"]],["(\\\\d{4})(\\\\d)(\\\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"]],["(\\\\d{3})(\\\\d{2})(\\\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"]],["(\\\\d{3})(\\\\d{2})(\\\\d{4})","$1-$2-$3",["2(?:[34]7|[56]9|74|9[14-79])|82|993"]],["(\\\\d)(\\\\d{4})(\\\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[2479][1-9]"]]],"0","0$1"],"KE":["254","20\\\\d{6,7}|[4-9]\\\\d{6,9}",[["(\\\\d{2})(\\\\d{5,7})","$1 $2",["[24-6]"]],["(\\\\d{3})(\\\\d{6})","$1 $2",["7"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[89]"]]],"0","0$1","005|0"],"KG":["996","[235-8]\\\\d{8,9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[25-7]|31[25]"]],["(\\\\d{4})(\\\\d{5})","$1 $2",["3(?:1[36]|[2-9])"]],["(\\\\d{3})(\\\\d{3})(\\\\d)(\\\\d{3})","$1 $2 $3 $4",["8"]]],"0","0$1"],"KH":["855","[1-9]\\\\d{7,9}",[["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["1\\\\d[1-9]|[2-9]"],"0$1"],["(1[89]00)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[89]0","1[89]00"]]],"0"],"KI":["686","[2458]\\\\d{4}|3\\\\d{4,7}|[67]\\\\d{7}",[],null,null,"0"],"KM":["269","[3478]\\\\d{6}",[["(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3"]]],"KN":["1","[589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"869"],"KP":["850","1\\\\d{9}|[28]\\\\d{7}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1"]],["(\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["8"]]],"0","0$1"],"KR":["82","00(?:3\\\\d{8,9}|7\\\\d{9,11})|[1-7]\\\\d{4,9}|8\\\\d{8}",[["(\\\\d{2})(\\\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"]],["(\\\\d{4})(\\\\d{4})","$1-$2",["1(?:5[246-9]|6[046-8]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"],"$1"],["(\\\\d{5})","$1",["1[016-9]1","1[016-9]11","1[016-9]114"]],["(\\\\d)(\\\\d{3,4})(\\\\d{4})","$1-$2-$3",["2[1-9]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["60[2-9]|80"]],["(\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1-$2-$3",["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1-$2-$3",["[57]0"]]],"0","0$1","0(8[1-46-8]|85\\\\d{2})?"],"KW":["965","[12569]\\\\d{6,7}",[["(\\\\d{4})(\\\\d{3,4})","$1 $2",["[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[024-9]"]],["(\\\\d{3})(\\\\d{5})","$1 $2",["244|5(?:[015]|6[56])"]]]],"KY":["1","[3589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"345"],"KZ":["7","(?:33\\\\d|7\\\\d{2}|80[089])\\\\d{7}",[["([3489]\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["[3489]"]],["(7\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]]],"8",null,null,null,null,null,["33622\\\\d{5}|7(?:1(?:0(?:[23]\\\\d|4[0-3]|59|63)|1(?:[23]\\\\d|4[0-79]|59)|2(?:[23]\\\\d|59)|3(?:2\\\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\\\d|3[013-9]|5[1-9])|5(?:2\\\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\\\d|5[19]|61)|72\\\\d|8(?:[27]\\\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\\\d|4[46-9]|5[3469])|2(?:2\\\\d|3[0679]|46|5[12679])|3(?:[234]\\\\d|5[139])|4(?:2\\\\d|3[1235-9]|59)|5(?:[23]\\\\d|4[01246-8]|59|61)|6(?:2\\\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\\\d|40|5[279])|8(?:[23]\\\\d|4[0-3]|59)|9(?:2\\\\d|3[124578]|59)))\\\\d{5}","7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\\\d{7}","800\\\\d{7}","809\\\\d{7}","808\\\\d{7}",null,null,null,"751\\\\d{7}"]],"LA":["856","[2-8]\\\\d{7,9}",[["(20)(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["20"]],["([2-8]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"]],["(30)(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3 $4",["30"]]],"0","0$1"],"LB":["961","[13-9]\\\\d{6,7}",[["(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["([7-9]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"]]],"0"],"LC":["1","[5789]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"758"],"LI":["423","6\\\\d{8}|[23789]\\\\d{6}",[["(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3",["[237-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["6[56]"]],["(69)(7\\\\d{2})(\\\\d{4})","$1 $2 $3",["697"]]],"0",null,"0|10(?:01|20|66)"],"LK":["94","[1-9]\\\\d{8}",[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[1-689]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]]],"0","0$1"],"LR":["231","2\\\\d{7,8}|[378]\\\\d{8}|4\\\\d{6}|5\\\\d{6,8}",[["(2\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2"]],["([4-5])(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[45]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[23578]"]]],"0","0$1"],"LS":["266","[2568]\\\\d{7}",[["(\\\\d{4})(\\\\d{4})","$1 $2"]]],"LT":["370","[3-9]\\\\d{7}",[["([34]\\\\d)(\\\\d{6})","$1 $2",["37|4(?:1|5[45]|6[2-4])"]],["([3-6]\\\\d{2})(\\\\d{5})","$1 $2",["3[148]|4(?:[24]|6[09])|528|6"]],["([7-9]\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["[7-9]"],"8 $1"],["(5)(2\\\\d{2})(\\\\d{4})","$1 $2 $3",["52[0-79]"]]],"8","(8-$1)","[08]",null,true],"LU":["352","[24-9]\\\\d{3,10}|3(?:[0-46-9]\\\\d{2,9}|5[013-9]\\\\d{1,8})",[["(\\\\d{2})(\\\\d{3})","$1 $2",["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3",["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]],["(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["20"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3 $4",["20"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,4})","$1 $2 $3 $4",["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["70|80[01]|90[015]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["6"]]],null,null,"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\\\d)"],"LV":["371","[2689]\\\\d{7}",[["([2689]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2689]"]]]],"LY":["218","[25679]\\\\d{8}",[["([25-79]\\\\d)(\\\\d{7})","$1-$2",["[25-79]"]]],"0","0$1"],"MA":["212","[5-9]\\\\d{8}",[["([5-7]\\\\d{2})(\\\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"]],["([58]\\\\d{3})(\\\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|92)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]],["(5\\\\d{4})(\\\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"]],["([5]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["5(?:4[067]|5[03])"]],["(8[09])(\\\\d{7})","$1-$2",["8(?:0|9[013-9])"]]],"0","0$1",null,null,null,null,["5(?:2(?:[015-79]\\\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\\\d|3(?:[0-48]\\\\d|[57][2-9]|6[2-8]|9[3-9])\\\\d|4[067]\\\\d{2}|5[03]\\\\d{2})\\\\d{4}","(?:6(?:[0-79]\\\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\\\d{6}","80\\\\d{7}","89\\\\d{7}",null,null,null,null,"5924[01]\\\\d{4}"]],"MC":["377","[34689]\\\\d{7,8}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[39]"],"$1"],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["4"]],["(6)(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4 $5",["6"]],["(\\\\d{3})(\\\\d{3})(\\\\d{2})","$1 $2 $3",["8"],"$1"]],"0","0$1"],"MD":["373","[235-9]\\\\d{7}",[["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["22|3"]],["([25-7]\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["2[13-9]|[5-7]"]],["([89]\\\\d{2})(\\\\d{5})","$1 $2",["[89]"]]],"0","0$1"],"ME":["382","[2-9]\\\\d{7,8}",[["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2-57-9]|6[036-9]"]]],"0","0$1"],"MF":["590","[56]\\\\d{8}",[["([56]\\\\d{2})(\\\\d{2})(\\\\d{4})","$1 $2-$3",["590|69[01]"]]],"0",null,null,null,null,null,["590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\\\d{4}","69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}"]],"MG":["261","[23]\\\\d{8}",[["([23]\\\\d)(\\\\d{2})(\\\\d{3})(\\\\d{2})","$1 $2 $3 $4",["[23]"]]],"0","0$1"],"MH":["692","[2-6]\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1-$2"]],"1"],"MK":["389","[2-578]\\\\d{7}",[["(2)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2"]],["([347]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[347]"]],["([58]\\\\d{2})(\\\\d)(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[58]"]]],"0","0$1"],"ML":["223","[246-9]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[246-9]"]]]],"MM":["95","[178]\\\\d{5,7}|[24-6]\\\\d{5,8}|9(?:[279]\\\\d{0,2}|5|[34]\\\\d{1,2}|6(?:\\\\d{1,2})?|8(?:\\\\d{2})?)\\\\d{6}",[["(\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["1|2[245]"]],["(2)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["251"]],["(\\\\d)(\\\\d{2})(\\\\d{3})","$1 $2 $3",["16|2"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["432|67|81"]],["(\\\\d{2})(\\\\d{2})(\\\\d{3,4})","$1 $2 $3",["[4-8]"]],["(9)(\\\\d{3})(\\\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"]],["(9)([34]\\\\d{4})(\\\\d{4})","$1 $2 $3",["9(?:3[0-36]|4[0-57-9])"]],["(9)(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["92[56]"]],["(9)(\\\\d{3})(\\\\d{3})(\\\\d{2})","$1 $2 $3 $4",["93"]]],"0","0$1"],"MN":["976","[12]\\\\d{7,9}|[57-9]\\\\d{7}",[["([12]\\\\d)(\\\\d{2})(\\\\d{4})","$1 $2 $3",["[12]1"]],["([12]2\\\\d)(\\\\d{5,6})","$1 $2",["[12]2[1-3]"]],["([12]\\\\d{3})(\\\\d{5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\\\d)2"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["[57-9]"],"$1"],["([12]\\\\d{4})(\\\\d{4,5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\\\d)[4-9]"]]],"0","0$1"],"MO":["853","[268]\\\\d{7}",[["([268]\\\\d{3})(\\\\d{4})","$1 $2",["[268]"]]]],"MP":["1","[5689]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"670"],"MQ":["596","[56]\\\\d{8}",[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]],"0","0$1"],"MR":["222","[2-48]\\\\d{7}",[["([2-48]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],"MS":["1","[5689]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"664"],"MT":["356","[2357-9]\\\\d{7}",[["(\\\\d{4})(\\\\d{4})","$1 $2"]]],"MU":["230","[2-9]\\\\d{6,7}",[["([2-46-9]\\\\d{2})(\\\\d{4})","$1 $2",["[2-46-9]"]],["(5\\\\d{3})(\\\\d{4})","$1 $2",["5"]]]],"MV":["960","[346-8]\\\\d{6,9}|9(?:00\\\\d{7}|\\\\d{6})",[["(\\\\d{3})(\\\\d{4})","$1-$2",["[3467]|9(?:0[1-9]|[1-9])"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[89]00"]]]],"MW":["265","(?:1(?:\\\\d{2})?|[2789]\\\\d{2})\\\\d{6}",[["(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1"]],["(2\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2"]],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[17-9]"]]],"0","0$1"],"MX":["52","[1-9]\\\\d{9,10}",[["([358]\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["33|55|81"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"]],["(1)([358]\\\\d)(\\\\d{4})(\\\\d{4})","044 $2 $3 $4",["1(?:33|55|81)"],"$1",null,"$1 $2 $3 $4"],["(1)(\\\\d{3})(\\\\d{3})(\\\\d{4})","044 $2 $3 $4",["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"],"$1",null,"$1 $2 $3 $4"]],"01","01 $1","0[12]|04[45](\\\\d{10})","1$1",true],"MY":["60","[13-9]\\\\d{7,9}",[["([4-79])(\\\\d{3})(\\\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(3)(\\\\d{4})(\\\\d{4})","$1-$2 $3",["3"],"0$1"],["([18]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1-$2 $3",["1[02-46-9][1-9]|8"],"0$1"],["(1)([36-8]00)(\\\\d{2})(\\\\d{4})","$1-$2-$3-$4",["1[36-8]0","1[36-8]00"]],["(11)(\\\\d{4})(\\\\d{4})","$1-$2 $3",["11"],"0$1"],["(15[49])(\\\\d{3})(\\\\d{4})","$1-$2 $3",["15[49]"],"0$1"]],"0"],"MZ":["258","[28]\\\\d{7,8}",[["([28]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["2|8[2-7]"]],["(80\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["80"]]]],"NA":["264","[68]\\\\d{7,8}",[["(8\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8[1-35]"]],["(6\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["6"]],["(88)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["88"]],["(870)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["870"]]],"0","0$1"],"NC":["687","[2-57-9]\\\\d{5}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1.$2.$3",["[2-46-9]|5[0-4]"]]]],"NE":["227","[0289]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["09|[289]"]],["(08)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["08"]]]],"NF":["672","[13]\\\\d{5}",[["(\\\\d{2})(\\\\d{4})","$1 $2",["1"]],["(\\\\d)(\\\\d{5})","$1 $2",["3"]]]],"NG":["234","[1-6]\\\\d{5,8}|9\\\\d{5,9}|[78]\\\\d{5,13}",[["(\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2,3})","$1 $2 $3",["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["70|8[01]|90[235-9]"]],["([78]00)(\\\\d{4})(\\\\d{4,5})","$1 $2 $3",["[78]00"]],["([78]00)(\\\\d{5})(\\\\d{5,6})","$1 $2 $3",["[78]00"]],["(78)(\\\\d{2})(\\\\d{3})","$1 $2 $3",["78"]]],"0","0$1"],"NI":["505","[125-8]\\\\d{7}",[["(\\\\d{4})(\\\\d{4})","$1 $2"]]],"NL":["31","1\\\\d{4,8}|[2-7]\\\\d{8}|[89]\\\\d{6,9}",[["([1-578]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"]],["([1-5]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"]],["(6)(\\\\d{8})","$1 $2",["6[0-57-9]"]],["(66)(\\\\d{7})","$1 $2",["66"]],["(14)(\\\\d{3,4})","$1 $2",["14"],"$1"],["([89]0\\\\d)(\\\\d{4,7})","$1 $2",["[89]0"]]],"0","0$1"],"NO":["47","0\\\\d{4}|[2-9]\\\\d{7}",[["([489]\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["[489]"]],["([235-7]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[235-7]"]]],null,null,null,null,null,null,["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\\\d{6}","(?:4[015-8]|5[89]|87|9\\\\d)\\\\d{6}","80[01]\\\\d{5}","82[09]\\\\d{5}","880\\\\d{5}",null,"0\\\\d{4}|81(?:0(?:0[7-9]|1\\\\d)|5\\\\d{2})\\\\d{3}",null,"85[0-5]\\\\d{5}","810(?:0[0-6]|[2-8]\\\\d)\\\\d{3}"]],"NP":["977","[1-8]\\\\d{7}|9(?:[1-69]\\\\d{6,8}|7[2-6]\\\\d{5,7}|8\\\\d{8})",[["(1)(\\\\d{7})","$1-$2",["1[2-6]"]],["(\\\\d{2})(\\\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-69]|7[15-9])"]],["(9\\\\d{2})(\\\\d{7})","$1-$2",["9(?:6[013]|7[245]|8)"],"$1"]],"0","0$1"],"NR":["674","[458]\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"NU":["683","[1-5]\\\\d{3}"],"NZ":["64","6[235-9]\\\\d{6}|[2-57-9]\\\\d{7,9}",[["(\\\\d)(\\\\d{3})(\\\\d{4})","$1-$2 $3",["240|[346]|7[2-57-9]|9[1-9]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["21"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,5})","$1 $2 $3",["2(?:1[1-9]|[69]|7[0-35-9])|70|86"]],["(2\\\\d)(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["2[028]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["90"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["2(?:10|74)|5|[89]0"]]],"0","0$1"],"OM":["968","(?:5|[279]\\\\d)\\\\d{6}|800\\\\d{5,6}",[["(2\\\\d)(\\\\d{6})","$1 $2",["2"]],["([79]\\\\d{3})(\\\\d{4})","$1 $2",["[79]"]],["([58]00)(\\\\d{4,6})","$1 $2",["[58]00"]]]],"PA":["507","[1-9]\\\\d{6,7}",[["(\\\\d{3})(\\\\d{4})","$1-$2",["[1-57-9]"]],["(\\\\d{4})(\\\\d{4})","$1-$2",["6"]]]],"PE":["51","[14-9]\\\\d{7,8}",[["(1)(\\\\d{7})","$1 $2",["1"]],["([4-8]\\\\d)(\\\\d{6})","$1 $2",["[4-7]|8[2-4]"]],["(\\\\d{3})(\\\\d{5})","$1 $2",["80"]],["(9\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["9"],"$1"]],"0","(0$1)"],"PF":["689","4\\\\d{5,7}|8\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["4[09]|8[79]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3",["44"]]]],"PG":["675","[1-9]\\\\d{6,7}",[["(\\\\d{3})(\\\\d{4})","$1 $2",["[13-689]|27"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["20|7"]]]],"PH":["63","1\\\\d{10,12}|2\\\\d{5,7}|[3-7]\\\\d{8}|8\\\\d{7,9}|9\\\\d{9}",[["(2)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(2)(\\\\d{5})","$1 $2",["2"],"(0$1)"],["(\\\\d{4})(\\\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\\\d{5})(\\\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["([3-8]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[3-8]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["81|9"],"0$1"],["(1800)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["180","1800"]],["(1800)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})","$1 $2 $3 $4",["180","1800"]]],"0"],"PK":["92","1\\\\d{8}|[2-8]\\\\d{5,11}|9(?:[013-9]\\\\d{4,10}|2\\\\d(?:111\\\\d{6}|\\\\d{3,7}))",[["([89]00)(\\\\d{3})(\\\\d{2})","$1 $2 $3",["[89]00"],"0$1"],["(1\\\\d{3})(\\\\d{5})","$1 $2",["1"],"$1"],["(\\\\d{2})(\\\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"]],["(\\\\d{3})(\\\\d{6,7})","$1 $2",["2[349]|45|54|60|72|8[2-5]|9[2-469]","(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\\\d[2-9]"]],["(58\\\\d{3})(\\\\d{5})","$1 $2",["58[126]"]],["(3\\\\d{2})(\\\\d{7})","$1 $2",["3"],"0$1"],["(\\\\d{2})(111)(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"]],["(\\\\d{3})(111)(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["2[349]|45|54|60|72|8[2-5]|9[2-9]","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d1","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d11","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d111"]]],"0","(0$1)"],"PL":["48","[1-57-9]\\\\d{6,8}|6\\\\d{5,8}",[["(\\\\d{3})(\\\\d{3})","$1 $2",["11[68]|64"]],["(\\\\d{5})","$1",["19"]],["(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{2,3})","$1 $2 $3",["64"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]]],"PM":["508","[45]\\\\d{5}",[["([45]\\\\d)(\\\\d{2})(\\\\d{2})","$1 $2 $3",["[45]"]]],"0","0$1"],"PR":["1","[5789]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"787|939"],"PS":["970","1\\\\d{9}|[24589]\\\\d{7,8}",[["([2489])(2\\\\d{2})(\\\\d{4})","$1 $2 $3",["[2489]2"]],["(5[69]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["5[69]"]],["(1[78]00)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[78]0","1[78]00"],"$1"]],"0","0$1"],"PT":["351","[2-46-9]\\\\d{8}",[["(2\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2[12]"]],["([2-46-9]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2[3-9]|[346-9]"]]]],"PW":["680","[2-8]\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"PY":["595","5[0-5]\\\\d{4,7}|[2-46-9]\\\\d{5,8}",[["(\\\\d{2})(\\\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\\\d{3})(\\\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\\\d{3})(\\\\d{6})","$1 $2",["9[1-9]"],"0$1"],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["870","8700"]],["(\\\\d{3})(\\\\d{4,5})","$1 $2",["[2-8][1-9]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2-8][1-9]"],"0$1"]],"0"],"QA":["974","[2-8]\\\\d{6,7}",[["([28]\\\\d{2})(\\\\d{4})","$1 $2",["[28]"]],["([3-7]\\\\d{3})(\\\\d{4})","$1 $2",["[3-7]"]]]],"RE":["262","[268]\\\\d{8}",[["([268]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[268]"]]],"0","0$1",null,null,null,"262|69|8"],"RO":["40","[23]\\\\d{5,8}|[7-9]\\\\d{8}",[["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[23]1"]],["(\\\\d{2})(\\\\d{4})","$1 $2",["[23]1"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[23][3-7]|[7-9]"]],["(2\\\\d{2})(\\\\d{3})","$1 $2",["2[3-6]"]]],"0","0$1"],"RS":["381","[126-9]\\\\d{4,11}|3(?:[0-79]\\\\d{3,10}|8[2-9]\\\\d{2,9})",[["([23]\\\\d{2})(\\\\d{4,9})","$1 $2",["(?:2[389]|39)0"]],["([1-3]\\\\d)(\\\\d{5,10})","$1 $2",["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"]],["(6\\\\d)(\\\\d{6,8})","$1 $2",["6"]],["([89]\\\\d{2})(\\\\d{3,9})","$1 $2",["[89]"]],["(7[26])(\\\\d{4,9})","$1 $2",["7[26]"]],["(7[08]\\\\d)(\\\\d{4,9})","$1 $2",["7[08]"]]],"0","0$1"],"RU":["7","[347-9]\\\\d{9}",[["([3489]\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["[3489]"]],["(7\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]]],"8","8 ($1)",null,null,true,null,["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\\\d{7}","9\\\\d{9}","80[04]\\\\d{7}","80[39]\\\\d{7}","808\\\\d{7}"]],"RW":["250","[027-9]\\\\d{7,8}",[["(2\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2"]],["([7-9]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(0\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["0"]]],"0"],"SA":["966","1\\\\d{7,8}|(?:[2-467]|92)\\\\d{7}|5\\\\d{8}|8\\\\d{9}",[["([1-467])(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[1-467]"]],["(1\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1[1-467]"]],["(5\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["5"]],["(92\\\\d{2})(\\\\d{5})","$1 $2",["92"],"$1"],["(800)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["800"],"$1"],["(811)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["811"]]],"0","0$1"],"SB":["677","[1-9]\\\\d{4,6}",[["(\\\\d{2})(\\\\d{5})","$1 $2",["[7-9]"]]]],"SC":["248","[24689]\\\\d{5,6}",[["(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[246]"]]]],"SD":["249","[19]\\\\d{8}",[["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3"]],"0","0$1"],"SE":["46","[1-35-9]\\\\d{5,11}|4\\\\d{6,8}",[["(8)(\\\\d{2,3})(\\\\d{2,3})(\\\\d{2})","$1-$2 $3 $4",["8"],null,null,"$1 $2 $3 $4"],["([1-69]\\\\d)(\\\\d{2,3})(\\\\d{2})(\\\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],null,null,"$1 $2 $3 $4"],["([1-469]\\\\d)(\\\\d{3})(\\\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90"],null,null,"$1 $2 $3"],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1-$2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],null,null,"$1 $2 $3 $4"],["(\\\\d{3})(\\\\d{2,3})(\\\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],null,null,"$1 $2 $3"],["(7\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1-$2 $3 $4",["7"],null,null,"$1 $2 $3 $4"],["(77)(\\\\d{2})(\\\\d{2})","$1-$2$3",["77"],null,null,"$1 $2 $3"],["(20)(\\\\d{2,3})(\\\\d{2})","$1-$2 $3",["20"],null,null,"$1 $2 $3"],["(9[034]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1-$2 $3 $4",["9[034]"],null,null,"$1 $2 $3 $4"],["(9[034]\\\\d)(\\\\d{4})","$1-$2",["9[034]"],null,null,"$1 $2"],["(\\\\d{3})(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1-$2 $3 $4 $5",["25[245]|67[3-6]"],null,null,"$1 $2 $3 $4 $5"]],"0","0$1"],"SG":["65","[36]\\\\d{7}|[17-9]\\\\d{7,10}",[["([3689]\\\\d{3})(\\\\d{4})","$1 $2",["[369]|8[1-9]"]],["(1[89]00)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1[89]0","1[89]00"]],["(7000)(\\\\d{4})(\\\\d{3})","$1 $2 $3",["700","7000"]],["(800)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["800"]]]],"SH":["290","[256]\\\\d{4}|8\\\\d{3}",[],null,null,null,null,null,null,["2(?:[0-57-9]\\\\d|6[4-9])\\\\d{2}","[56]\\\\d{4}",null,null,null,null,null,null,"262\\\\d{2}"]],"SI":["386","[1-7]\\\\d{6,7}|[89]\\\\d{4,7}",[["(\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[12]|[34][24-8]|5[2-8]|7[3-8]"],"(0$1)"],["([3-7]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"]],["([89][09])(\\\\d{3,6})","$1 $2",["[89][09]"]],["([58]\\\\d{2})(\\\\d{5})","$1 $2",["59|8[1-3]"]]],"0","0$1"],"SJ":["47","0\\\\d{4}|[45789]\\\\d{7}",[["([489]\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["[489]"]],["([235-7]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[235-7]"]]],null,null,null,null,null,null,["79\\\\d{6}","(?:4[015-8]|5[89]|9\\\\d)\\\\d{6}","80[01]\\\\d{5}","82[09]\\\\d{5}","880\\\\d{5}",null,"0\\\\d{4}|81(?:0(?:0[7-9]|1\\\\d)|5\\\\d{2})\\\\d{3}",null,"85[0-5]\\\\d{5}","810(?:0[0-6]|[2-8]\\\\d)\\\\d{3}"]],"SK":["421","(?:[2-68]\\\\d{5,8}|9\\\\d{6,8})",[["(2)(1[67])(\\\\d{3,4})","$1 $2 $3",["21[67]"]],["([3-5]\\\\d)(\\\\d{2})(\\\\d{2,3})","$1 $2 $3",["[3-5]"]],["(2)(\\\\d{3})(\\\\d{3})(\\\\d{2})","$1/$2 $3 $4",["2"]],["([3-5]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1/$2 $3 $4",["[3-5]"]],["([689]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[689]"]],["(9090)(\\\\d{3})","$1 $2",["909","9090"]]],"0","0$1"],"SL":["232","[2-9]\\\\d{7}",[["(\\\\d{2})(\\\\d{6})","$1 $2"]],"0","(0$1)"],"SM":["378","[05-7]\\\\d{7,9}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(0549)(\\\\d{6})","$1 $2",["054","0549"],null,null,"($1) $2"],["(\\\\d{6})","0549 $1",["[89]"],null,null,"(0549) $1"]],null,null,"([89]\\\\d{5})","0549$1"],"SN":["221","[3789]\\\\d{8}",[["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[379]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["8"]]]],"SO":["252","[1-9]\\\\d{5,8}",[["(\\\\d{6})","$1",["[134]"]],["(\\\\d)(\\\\d{6})","$1 $2",["[13-5]|2[0-79]"]],["(\\\\d)(\\\\d{7})","$1 $2",["24|[67]"]],["(\\\\d{2})(\\\\d{4})","$1 $2",["8[125]"]],["(\\\\d{2})(\\\\d{5,7})","$1 $2",["15|28|6[1-35-9]|799|9[2-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["3[59]|4[89]|6[24-6]|79|8[08]|90"]]],"0"],"SR":["597","[2-8]\\\\d{5,6}",[["(\\\\d{3})(\\\\d{3})","$1-$2",["[2-4]|5[2-58]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1-$2-$3",["56"]],["(\\\\d{3})(\\\\d{4})","$1-$2",["[6-8]"]]]],"SS":["211","[19]\\\\d{8}",[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",null,"0$1"]],"0"],"ST":["239","[29]\\\\d{6}",[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"SV":["503","[267]\\\\d{7}|[89]\\\\d{6}(?:\\\\d{4})?",[["(\\\\d{4})(\\\\d{4})","$1 $2",["[267]"]],["(\\\\d{3})(\\\\d{4})","$1 $2",["[89]"]],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[89]"]]]],"SX":["1","[5789]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"721"],"SY":["963","[1-59]\\\\d{7,8}",[["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[1-5]"]],["(9\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["9"]]],"0","0$1",null,null,true],"SZ":["268","[027]\\\\d{7}",[["(\\\\d{4})(\\\\d{4})","$1 $2",["[027]"]]]],"TA":["290","8\\\\d{3}",[],null,null,null,null,null,null,["8\\\\d{3}"]],"TC":["1","[5689]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"649"],"TD":["235","[2679]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"TG":["228","[279]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[279]"]]]],"TH":["66","1\\\\d{8,9}|[2-9]\\\\d{7,8}",[["(2)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2"]],["([13-9]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["14|[3-9]"]],["(1[89]00)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[89]0","1[89]00"],"$1"]],"0","0$1"],"TJ":["992","[3-57-9]\\\\d{8}",[["([349]\\\\d{2})(\\\\d{2})(\\\\d{4})","$1 $2 $3",["[34]7|91[78]"]],["([457-9]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["4[148]|[578]|9(?:[0235-9]|1[59])"]],["(331700)(\\\\d)(\\\\d{2})","$1 $2 $3",["331","3317","33170","331700"]],["(\\\\d{4})(\\\\d)(\\\\d{4})","$1 $2 $3",["3[1-5]","3(?:[1245]|3(?:[02-9]|1[0-589]))"]]],"8",null,null,null,true],"TK":["690","[2-47]\\\\d{3,6}"],"TL":["670","[2-489]\\\\d{6}|7\\\\d{6,7}",[["(\\\\d{3})(\\\\d{4})","$1 $2",["[2-489]|70"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["7[3-8]"]]]],"TM":["993","[1-6]\\\\d{7}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["12"]],["(\\\\d{2})(\\\\d{6})","$1 $2",["6"],"8 $1"],["(\\\\d{3})(\\\\d)(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["13|[2-5]"]]],"8","(8 $1)"],"TN":["216","[2-57-9]\\\\d{7}",[["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3"]]],"TO":["676","[02-8]\\\\d{4,6}",[["(\\\\d{2})(\\\\d{3})","$1-$2",["[1-6]|7[0-4]|8[05]"]],["(\\\\d{3})(\\\\d{4})","$1 $2",["7[5-9]|8[47-9]"]],["(\\\\d{4})(\\\\d{3})","$1 $2",["0"]]]],"TR":["90","[2-589]\\\\d{9}|444\\\\d{4}",[["(\\\\d{3})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[23]|4(?:[0-35-9]|4[0-35-9])"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["5[02-69]"],"0$1"],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["51|[89]"],"0$1"],["(444)(\\\\d{1})(\\\\d{3})","$1 $2 $3",["444"]]],"0",null,null,null,true],"TT":["1","[589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"868"],"TV":["688","[279]\\\\d{4,6}"],"TW":["886","2\\\\d{6,8}|[3-689]\\\\d{7,8}|7\\\\d{7,9}",[["(20)(\\\\d)(\\\\d{4})","$1 $2 $3",["202"]],["([258]0)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["20[013-9]|50[0-46-9]|80[0-79]"]],["([2-8])(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["[25][2-8]|[346]|[78][1-9]"]],["(9\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["9"]],["(70)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["70"]]],"0","0$1"],"TZ":["255","\\\\d{9}",[["([24]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[24]"]],["([67]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[67]"]],["([89]\\\\d{2})(\\\\d{2})(\\\\d{4})","$1 $2 $3",["[89]"]]],"0","0$1"],"UA":["380","[3-9]\\\\d{8}",[["([3-9]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]","[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"]],["([3-689]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90","3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"]],["([3-6]\\\\d{3})(\\\\d{5})","$1 $2",["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])","3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"]]],"0","0$1"],"UG":["256","\\\\d{9}",[["(\\\\d{3})(\\\\d{6})","$1 $2",["20[0-8]|4(?:6[45]|[7-9])|[7-9]","20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"]],["(\\\\d{2})(\\\\d{7})","$1 $2",["3|4(?:[1-5]|6[0-36-9])"]],["(2024)(\\\\d{5})","$1 $2",["202","2024"]]],"0","0$1"],"US":["1","[2-9]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,true,null,["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\\\d{6}",null,"8(?:00|33|44|55|66|77|88)[2-9]\\\\d{6}","900[2-9]\\\\d{6}","5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\\\d{6}"]],"UY":["598","[2489]\\\\d{6,7}",[["(\\\\d{4})(\\\\d{4})","$1 $2",["[24]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["9[1-9]"],"0$1"],["(\\\\d{3})(\\\\d{4})","$1 $2",["[89]0"],"0$1"]],"0"],"UZ":["998","[679]\\\\d{8}",[["([679]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[679]"]]],"8","8 $1"],"VA":["39","(?:0(?:878\\\\d{5}|6698\\\\d{5})|[1589]\\\\d{5,10}|3(?:[12457-9]\\\\d{8}|[36]\\\\d{7,9}))",[["(\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["0[26]|55"]],["(0[26])(\\\\d{4})(\\\\d{5})","$1 $2 $3",["0[26]"]],["(0[26])(\\\\d{4,6})","$1 $2",["0[26]"]],["(0\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],["(\\\\d{3})(\\\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],["(0\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"]],["(0\\\\d{3})(\\\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["894","894[5-9]"]],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["3"]]],null,null,null,null,null,null,["06698\\\\d{5}","3(?:[12457-9]\\\\d{8}|6\\\\d{7,8}|3\\\\d{7,9})","80(?:0\\\\d{6}|3\\\\d{3})","0878\\\\d{5}|1(?:44|6[346])\\\\d{6}|89(?:2\\\\d{3}|4(?:[0-4]\\\\d{2}|[5-9]\\\\d{4})|5(?:[0-4]\\\\d{2}|[5-9]\\\\d{6})|9\\\\d{6})","1(?:78\\\\d|99)\\\\d{6}",null,null,null,"55\\\\d{8}","84(?:[08]\\\\d{6}|[17]\\\\d{3})"]],"VC":["1","[5789]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"784"],"VE":["58","[24589]\\\\d{9}",[["(\\\\d{3})(\\\\d{7})","$1-$2"]],"0","0$1"],"VG":["1","[2589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"284"],"VI":["1","[3589]\\\\d{9}",[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"340"],"VN":["84","1\\\\d{6,9}|2\\\\d{9}|6\\\\d{6,7}|7\\\\d{6}|8\\\\d{6,8}|9\\\\d{8}",[["([17]99)(\\\\d{4})","$1 $2",["[17]99"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2[48]"]],["(80)(\\\\d{5})","$1 $2",["80"]],["(69\\\\d)(\\\\d{4,5})","$1 $2",["69"]],["(\\\\d{3})(\\\\d{4})(\\\\d{3})","$1 $2 $3",["2[0-35-79]"]],["([89]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["8(?:8|9[89])|9"]],["(1[2689]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[26]|8[68]|99)"]],["(86[89])(\\\\d{3})(\\\\d{3})","$1 $2 $3",["86[89]"]],["(1[89]00)(\\\\d{4,6})","$1 $2",["1[89]0","1[89]00"],"$1"]],"0","0$1",null,null,true],"VU":["678","[2-57-9]\\\\d{4,6}",[["(\\\\d{3})(\\\\d{4})","$1 $2",["[579]"]]]],"WF":["681","[4-8]\\\\d{5}",[["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3"]]],"WS":["685","[2-8]\\\\d{4,6}",[["(8\\\\d{2})(\\\\d{3,4})","$1 $2",["8"]],["(7\\\\d)(\\\\d{5})","$1 $2",["7"]],["(\\\\d{5})","$1",["[2-6]"]]]],"YE":["967","[1-7]\\\\d{6,8}",[["([1-7])(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"]],["(7\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["7[0137]"]]],"0","0$1"],"YT":["262","[268]\\\\d{8}",[["([268]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[268]"]]],"0",null,null,null,null,"269|63"],"ZA":["27","[1-79]\\\\d{8}|8\\\\d{4,8}",[["(860)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["860"]],["(\\\\d{2})(\\\\d{3,4})","$1 $2",["8[1-4]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2,3})","$1 $2 $3",["8[1-4]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[1-79]|8(?:[0-57]|6[1-9])"]]],"0","0$1"],"ZM":["260","[289]\\\\d{8}",[["(\\\\d{2})(\\\\d{4})","$1 $2",null,"$1"],["([1-8])(\\\\d{2})(\\\\d{4})","$1 $2 $3",["[1-8]"],"$1"],["([29]\\\\d)(\\\\d{7})","$1 $2",["[29]"]],["(800)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["800"]]],"0","0$1"],"ZW":["263","2(?:[0-57-9]\\\\d{3,8}|6(?:[14]\\\\d{7}|\\\\d{4}))|[13-69]\\\\d{4,9}|7\\\\d{8}|8[06]\\\\d{5,8}",[["([49])(\\\\d{3})(\\\\d{2,4})","$1 $2 $3",["4|9[2-9]"]],["(7\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]],["(86\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["86[24]"]],["([2356]\\\\d{2})(\\\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"]],["([1-356]\\\\d)(\\\\d{3,5})","$1 $2",["1[3-9]|2[02569]|3[0-69]|5[05689]|6"]],["([235]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[23]9|54"]],["([25]\\\\d{3})(\\\\d{3,5})","$1 $2",["(?:25|54)8","258[23]|5483"]],["(8\\\\d{3})(\\\\d{6})","$1 $2",["86"]],["(80\\\\d)(\\\\d{4})","$1 $2",["80"]]],"0","0$1"],"001":["979","\\\\d{9}",[["(\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3"]]]}}'
      );
    },
    Z5h4: function (t, n, e) {
      "use strict";
      e.d(n, "a", function () {
        return a;
      }),
        e.d(n, "b", function () {
          return $;
        });
      var d = e("CcnG"),
        r = (e("de3e"), e("Ip0R"), e("M2Lx")),
        o = (e("Fzqc"), e("Wf4p")),
        i = (e("ZYjt"), e("dWZg")),
        u = e("wFw1"),
        a =
          (e("gIcY"),
          e("lLAP"),
          d["??crt"]({
            encapsulation: 2,
            styles: [
              "@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.91026}50%{animation-timing-function:cubic-bezier(0,0,.2,.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0,0,0,1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(.4,0,1,1);stroke-dashoffset:0}to{stroke-dashoffset:-22.91026}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0,0,.2,.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(.14,0,0,1);opacity:1;transform:rotate(0)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}100%,32.8%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0,0,.2,.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}@media (-ms-high-contrast:active){.mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0,0,.2,.1),opacity 90ms cubic-bezier(0,0,.2,.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media (hover:none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.91026;stroke-dasharray:22.91026;stroke-width:2.13333px}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0);border-radius:2px}@media (-ms-high-contrast:active){.mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0s mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0s mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0s mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:.5s linear 0s mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0s mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:.3s linear 0s mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}",
            ],
            data: {},
          }));
      function $(t) {
        return d["??vid"](
          2,
          [
            d["??qud"](671088640, 1, { _inputElement: 0 }),
            d["??qud"](671088640, 2, { ripple: 0 }),
            (t()(),
            d["??eld"](
              2,
              0,
              [["label", 1]],
              null,
              16,
              "label",
              [["class", "mat-checkbox-layout"]],
              [[1, "for", 0]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            d["??eld"](
              3,
              0,
              null,
              null,
              10,
              "div",
              [["class", "mat-checkbox-inner-container"]],
              [[2, "mat-checkbox-inner-container-no-side-margin", null]],
              null,
              null,
              null,
              null
            )),
            (t()(),
            d["??eld"](
              4,
              0,
              [
                [1, 0],
                ["input", 1],
              ],
              null,
              0,
              "input",
              [
                ["class", "mat-checkbox-input cdk-visually-hidden"],
                ["type", "checkbox"],
              ],
              [
                [8, "id", 0],
                [8, "required", 0],
                [8, "checked", 0],
                [1, "value", 0],
                [8, "disabled", 0],
                [1, "name", 0],
                [8, "tabIndex", 0],
                [8, "indeterminate", 0],
                [1, "aria-label", 0],
                [1, "aria-labelledby", 0],
                [1, "aria-checked", 0],
              ],
              [
                [null, "change"],
                [null, "click"],
              ],
              function (t, n, e) {
                var d = !0,
                  r = t.component;
                return (
                  "change" === n && (d = !1 !== r._onInteractionEvent(e) && d),
                  "click" === n && (d = !1 !== r._onInputClick(e) && d),
                  d
                );
              },
              null,
              null
            )),
            (t()(),
            d["??eld"](
              5,
              0,
              null,
              null,
              3,
              "div",
              [
                ["class", "mat-checkbox-ripple mat-ripple"],
                ["matRipple", ""],
              ],
              [[2, "mat-ripple-unbounded", null]],
              null,
              null,
              null,
              null
            )),
            d["??did"](
              6,
              212992,
              [[2, 4]],
              0,
              o.x,
              [d.ElementRef, d.NgZone, i.a, [2, o.m], [2, u.a]],
              {
                centered: [0, "centered"],
                radius: [1, "radius"],
                animation: [2, "animation"],
                disabled: [3, "disabled"],
                trigger: [4, "trigger"],
              },
              null
            ),
            d["??pod"](7, { enterDuration: 0 }),
            (t()(),
            d["??eld"](
              8,
              0,
              null,
              null,
              0,
              "div",
              [["class", "mat-ripple-element mat-checkbox-persistent-ripple"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            d["??eld"](
              9,
              0,
              null,
              null,
              0,
              "div",
              [["class", "mat-checkbox-frame"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            d["??eld"](
              10,
              0,
              null,
              null,
              3,
              "div",
              [["class", "mat-checkbox-background"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            d["??eld"](
              11,
              0,
              null,
              null,
              1,
              ":svg:svg",
              [
                [":xml:space", "preserve"],
                ["class", "mat-checkbox-checkmark"],
                ["focusable", "false"],
                ["version", "1.1"],
                ["viewBox", "0 0 24 24"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            d["??eld"](
              12,
              0,
              null,
              null,
              0,
              ":svg:path",
              [
                ["class", "mat-checkbox-checkmark-path"],
                ["d", "M4.1,12.7 9,17.6 20.3,6.3"],
                ["fill", "none"],
                ["stroke", "white"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            d["??eld"](
              13,
              0,
              null,
              null,
              0,
              "div",
              [["class", "mat-checkbox-mixedmark"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(),
            d["??eld"](
              14,
              0,
              [["checkboxLabel", 1]],
              null,
              4,
              "span",
              [["class", "mat-checkbox-label"]],
              null,
              [[null, "cdkObserveContent"]],
              function (t, n, e) {
                var d = !0;
                return (
                  "cdkObserveContent" === n &&
                    (d = !1 !== t.component._onLabelTextChange() && d),
                  d
                );
              },
              null,
              null
            )),
            d["??did"](
              15,
              1196032,
              null,
              0,
              r.a,
              [r.b, d.ElementRef, d.NgZone],
              null,
              { event: "cdkObserveContent" }
            ),
            (t()(),
            d["??eld"](
              16,
              0,
              null,
              null,
              1,
              "span",
              [["style", "display:none"]],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), d["??ted"](-1, null, ["??"])),
            d["??ncd"](null, 0),
          ],
          function (t, n) {
            var e = n.component,
              r = t(n, 7, 0, 150);
            t(n, 6, 0, !0, 20, r, e._isRippleDisabled(), d["??nov"](n, 2));
          },
          function (t, n) {
            var e = n.component;
            t(n, 2, 0, e.inputId),
              t(
                n,
                3,
                0,
                !d["??nov"](n, 14).textContent ||
                  !d["??nov"](n, 14).textContent.trim()
              ),
              t(n, 4, 1, [
                e.inputId,
                e.required,
                e.checked,
                e.value,
                e.disabled,
                e.name,
                e.tabIndex,
                e.indeterminate,
                e.ariaLabel || null,
                e.ariaLabelledby,
                e._getAriaChecked(),
              ]),
              t(n, 5, 0, d["??nov"](n, 6).unbounded);
          }
        );
      }
    },
    "ZY/g": function (t, n, e) {
      e("aFj7");
      for (
        var d = e("7whZ"),
          r = e("BRsN"),
          o = e("ig3W"),
          i = e("zBWt")("toStringTag"),
          u =
            "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
              ","
            ),
          a = 0;
        a < u.length;
        a++
      ) {
        var $ = u[a],
          l = d[$],
          c = l && l.prototype;
        c && !c[i] && r(c, i, $), (o[$] = o.Array);
      }
    },
    aFj7: function (t, n, e) {
      "use strict";
      var d = e("L5pH"),
        r = e("6jRP"),
        o = e("ig3W"),
        i = e("bKEA");
      (t.exports = e("OTpG")(
        Array,
        "Array",
        function (t, n) {
          (this._t = i(t)), (this._i = 0), (this._k = n);
        },
        function () {
          var t = this._t,
            n = this._k,
            e = this._i++;
          return !t || e >= t.length
            ? ((this._t = void 0), r(1))
            : r(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]]);
        },
        "values"
      )),
        (o.Arguments = o.Array),
        d("keys"),
        d("values"),
        d("entries");
    },
    aqg2: function (t, n, e) {
      var d = e("TYje"),
        r = e("zBWt")("toStringTag"),
        o =
          "Arguments" ==
          d(
            (function () {
              return arguments;
            })()
          );
      t.exports = function (t) {
        var n, e, i;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (e = (function (t, n) {
              try {
                return t[n];
              } catch (e) {}
            })((n = Object(t)), r))
          ? e
          : o
          ? d(n)
          : "Object" == (i = d(n)) && "function" == typeof n.callee
          ? "Arguments"
          : i;
      };
    },
    b08l: function (t, n, e) {
      var d = e("d+lc"),
        r = e("heda"),
        o = e("l0Kd"),
        i = e("WpRT")("IE_PROTO"),
        u = function () {},
        a = function () {
          var t,
            n = e("BfU5")("iframe"),
            d = o.length;
          for (
            n.style.display = "none",
              e("kUGv").appendChild(n),
              n.src = "javascript:",
              (t = n.contentWindow.document).open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              a = t.F;
            d--;

          )
            delete a.prototype[o[d]];
          return a();
        };
      t.exports =
        Object.create ||
        function (t, n) {
          var e;
          return (
            null !== t
              ? ((u.prototype = d(t)),
                (e = new u()),
                (u.prototype = null),
                (e[i] = t))
              : (e = a()),
            void 0 === n ? e : r(e, n)
          );
        };
    },
    bKEA: function (t, n, e) {
      var d = e("n7vu"),
        r = e("yQFZ");
      t.exports = function (t) {
        return d(r(t));
      };
    },
    c34Q: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("IvtZ"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.rangeLength(this.rangeLength);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "rangeLength" === n &&
                  ((this.validator = o.rangeLength(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { rangeLength: [{ type: d.Input }] }),
        (n.RangeLengthValidator = u);
    },
    cI4K: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("WcuY")),
        d(e("kqoJ"));
    },
    "d+lc": function (t, n, e) {
      var d = e("ekG2");
      t.exports = function (t) {
        if (!d(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    dYSy: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("NCDA"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.lte(this.lte);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "lte" === n &&
                  ((this.validator = o.lte(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[lte][formControlName],[lte][formControl],[lte][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { lte: [{ type: d.Input }] }),
        (n.LessThanEqualValidator = u);
    },
    e56k: function (t, n, e) {
      e("ZY/g"), e("C5kU"), (t.exports = e("iqsF"));
    },
    ekG2: function (t, n) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    fUKC: function (t, n, e) {
      e("ZY/g"), e("C5kU"), (t.exports = e("sbOA"));
    },
    gK5f: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("F2og"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.phone(this.phone);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "phone" === n &&
                  ((this.validator = o.phone(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[phone][formControlName],[phone][formControl],[phone][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { phone: [{ type: d.Input }] }),
        (n.PhoneValidator = u);
    },
    ghU1: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("0UZX")),
        d(e("9eTs"));
    },
    h9za: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.rangeLength = function (t) {
        return function (n) {
          if (!r.isPresent(t)) return null;
          if (r.isPresent(d.Validators.required(n))) return null;
          var e = n.value;
          return e.length >= t[0] && e.length <= t[1]
            ? null
            : { rangeLength: !0 };
        };
      };
    },
    heda: function (t, n, e) {
      var d = e("GhSp"),
        r = e("d+lc"),
        o = e("mHY4");
      t.exports = e("C61u")
        ? Object.defineProperties
        : function (t, n) {
            r(t);
            for (var e, i = o(n), u = i.length, a = 0; u > a; )
              d.f(t, (e = i[a++]), n[e]);
            return t;
          };
    },
    iCc5: function (t, n, e) {
      "use strict";
      (n.__esModule = !0),
        (n.default = function (t, n) {
          if (!(t instanceof n))
            throw new TypeError("Cannot call a class as a function");
        });
    },
    ig3W: function (t, n) {
      t.exports = {};
    },
    inIq: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.equal = function (t) {
        return function (n) {
          return r.isPresent(d.Validators.required(n))
            ? null
            : t === n.value
            ? null
            : { equal: !0 };
        };
      };
    },
    iqsF: function (t, n, e) {
      var d = e("aqg2"),
        r = e("zBWt")("iterator"),
        o = e("ig3W");
      t.exports = e("VSTI").isIterable = function (t) {
        var n = Object(t);
        return void 0 !== n[r] || "@@iterator" in n || o.hasOwnProperty(d(n));
      };
    },
    ixoo: function (t, n) {
      var e = 0,
        d = Math.random();
      t.exports = function (t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++e + d).toString(36)
        );
      };
    },
    jl4B: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("mJH7")),
        d(e("177e"));
    },
    "k/8l": function (t, n, e) {
      t.exports = { default: e("e56k"), __esModule: !0 };
    },
    kUGv: function (t, n, e) {
      var d = e("7whZ").document;
      t.exports = d && d.documentElement;
    },
    kVrb: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("15yF"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.notEqual(this.notEqual);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "notEqual" === n &&
                  ((this.validator = o.notEqual(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { notEqual: [{ type: d.Input }] }),
        (n.NotEqualValidator = u);
    },
    kqoJ: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.min = function (t) {
        return function (n) {
          if (!r.isPresent(t)) return null;
          if (r.isPresent(d.Validators.required(n))) return null;
          var e = +n.value;
          return e >= +t
            ? null
            : { actualValue: e, requiredValue: +t, min: !0 };
        };
      };
    },
    kvAF: function (t, n, e) {
      var d = e("GhSp").f,
        r = e("nA4W"),
        o = e("zBWt")("toStringTag");
      t.exports = function (t, n, e) {
        t &&
          !r((t = e ? t : t.prototype), o) &&
          d(t, o, { configurable: !0, value: n });
      };
    },
    l0Kd: function (t, n) {
      t.exports =
        "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );
    },
    lRys: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.notEqual = function (t) {
        return function (n) {
          return r.isPresent(d.Validators.required(n))
            ? null
            : t !== n.value
            ? null
            : { notEqual: !0 };
        };
      };
    },
    "m/yT": function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.email = function (t) {
        return r.isPresent(d.Validators.required(t))
          ? null
          : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              t.value
            )
          ? null
          : { email: !0 };
      };
    },
    m9Vx: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isPresent = function (t) {
          return null != t;
        }),
        (n.isDate = function (t) {
          return !/Invalid|NaN/.test(new Date(t).toString());
        });
    },
    mHY4: function (t, n, e) {
      var d = e("A9a0"),
        r = e("l0Kd");
      t.exports =
        Object.keys ||
        function (t) {
          return d(t, r);
        };
    },
    mJH7: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("jl4B"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.validate = function (t) {
              return o.json(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[json][formControlName],[json][formControl],[json][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (n.JSONValidator = u);
    },
    n7vu: function (t, n, e) {
      var d = e("TYje");
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return "String" == d(t) ? t.split("") : Object(t);
          };
    },
    nA4W: function (t, n) {
      var e = {}.hasOwnProperty;
      t.exports = function (t, n) {
        return e.call(t, n);
      };
    },
    nAx8: function (t, n, e) {
      var d = e("FgkJ");
      t.exports = function (t, n, e) {
        if ((d(t), void 0 === n)) return t;
        switch (e) {
          case 1:
            return function (e) {
              return t.call(n, e);
            };
          case 2:
            return function (e, d) {
              return t.call(n, e, d);
            };
          case 3:
            return function (e, d, r) {
              return t.call(n, e, d, r);
            };
        }
        return function () {
          return t.apply(n, arguments);
        };
      };
    },
    nPu3: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.notEqualTo = function (t) {
          var n = !1;
          return function (e) {
            return (
              n ||
                ((n = !0),
                t.valueChanges.subscribe(function () {
                  e.updateValueAndValidity();
                })),
              t.value !== e.value ? null : { notEqualTo: !0 }
            );
          };
        });
    },
    nRFE: function (t, n, e) {
      var d = e("/F7N"),
        r = Math.max,
        o = Math.min;
      t.exports = function (t, n) {
        return (t = d(t)) < 0 ? r(t + n, 0) : o(t, n);
      };
    },
    pXYb: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("ug6e")),
        d(e("0DCV"));
    },
    pvmI: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("/g4C")),
        d(e("Pdpc"));
    },
    q5o6: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.base64 = function (t) {
        return r.isPresent(d.Validators.required(t))
          ? null
          : /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(
              t.value
            )
          ? null
          : { base64: !0 };
      };
    },
    r0XH: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("HT6E")),
        d(e("KNBz"));
    },
    rKjJ: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("+h4i")),
        d(e("wp3W"));
    },
    s2er: function (t, n, e) {
      var d = e("VSTI"),
        r = e("7whZ"),
        o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
      (t.exports = function (t, n) {
        return o[t] || (o[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: d.version,
        mode: e("5ETA") ? "pure" : "global",
        copyright: "?? 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    sbOA: function (t, n, e) {
      var d = e("d+lc"),
        r = e("I90/");
      t.exports = e("VSTI").getIterator = function (t) {
        var n = r(t);
        if ("function" != typeof n) throw TypeError(t + " is not iterable!");
        return d(n.call(t));
      };
    },
    sk9p: function (t, n, e) {
      "use strict";
      n.__esModule = !0;
      var d = o(e("k/8l")),
        r = o(e("FyfS"));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      n.default = function (t, n) {
        if (Array.isArray(t)) return t;
        if ((0, d.default)(Object(t)))
          return (function (t, n) {
            var e = [],
              d = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, a = (0, r.default)(t);
                !(d = (u = a.next()).done) &&
                (e.push(u.value), !n || e.length !== n);
                d = !0
              );
            } catch ($) {
              (o = !0), (i = $);
            } finally {
              try {
                !d && a.return && a.return();
              } finally {
                if (o) throw i;
              }
            }
            return e;
          })(t, n);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    },
    t1MI: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("8r50")),
        d(e("yazQ"));
    },
    u46e: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.gte = function (t) {
        return function (n) {
          return r.isPresent(t)
            ? r.isPresent(d.Validators.required(n))
              ? null
              : +n.value >= +t
              ? null
              : { gte: !0 }
            : null;
        };
      };
    },
    uccp: function (t, n, e) {
      e("5Qd4"), (t.exports = e("VSTI").Object.assign);
    },
    ug6e: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("pXYb"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.validate = function (t) {
              return o.dateISO(t);
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (n.DateISOValidator = u);
    },
    ugGH: function (t, n, e) {
      t.exports = e("BRsN");
    },
    umdh: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("S8xG"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.maxDate(this.maxDate);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "maxDate" === n &&
                  ((this.validator = o.maxDate(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { maxDate: [{ type: d.Input }] }),
        (n.MaxDateValidator = u);
    },
    vdN6: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("NMws")),
        d(e("q5o6"));
    },
    wYKn: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("Tm9b"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.range(this.range);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "range" === n &&
                  ((this.validator = o.range(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector:
                "[range][formControlName],[range][formControl],[range][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { range: [{ type: d.Input }] }),
        (n.RangeValidator = u);
    },
    wYM1: function (t, n, e) {
      var d = e("USwo");
      d(d.S + d.F * !e("C61u"), "Object", { defineProperty: e("GhSp").f });
    },
    wp3W: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.lt = function (t) {
        return function (n) {
          return r.isPresent(t)
            ? r.isPresent(d.Validators.required(n))
              ? null
              : +n.value < +t
              ? null
              : { lt: !0 }
            : null;
        };
      };
    },
    wrUr: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("CcnG"),
        r = e("gIcY"),
        o = e("7yqV"),
        i = {
          provide: r.NG_VALIDATORS,
          useExisting: d.forwardRef(function () {
            return u;
          }),
          multi: !0,
        },
        u = (function () {
          function t() {}
          return (
            (t.prototype.ngOnInit = function () {
              this.validator = o.gt(this.gt);
            }),
            (t.prototype.ngOnChanges = function (t) {
              for (var n in t)
                "gt" === n &&
                  ((this.validator = o.gt(t[n].currentValue)),
                  this.onChange && this.onChange());
            }),
            (t.prototype.validate = function (t) {
              return this.validator(t);
            }),
            (t.prototype.registerOnValidatorChange = function (t) {
              this.onChange = t;
            }),
            t
          );
        })();
      (u.decorators = [
        {
          type: d.Directive,
          args: [
            {
              selector: "[gt][formControlName],[gt][formControl],[gt][ngModel]",
              providers: [i],
            },
          ],
        },
      ]),
        (u.propDecorators = { gt: [{ type: d.Input }] }),
        (n.GreaterThanValidator = u);
    },
    yQFZ: function (t, n) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    yak4: function (t, n, e) {
      "use strict";
      function d(t) {
        for (var e in t) n.hasOwnProperty(e) || (n[e] = t[e]);
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        d(e("Qyzf")),
        d(e("KTXt"));
    },
    yazQ: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var d = e("gIcY"),
        r = e("m9Vx");
      n.url = function (t) {
        return r.isPresent(d.Validators.required(t))
          ? null
          : /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
              t.value
            )
          ? null
          : { url: !0 };
      };
    },
    zBWt: function (t, n, e) {
      var d = e("s2er")("wks"),
        r = e("ixoo"),
        o = e("7whZ").Symbol,
        i = "function" == typeof o;
      (t.exports = function (t) {
        return d[t] || (d[t] = (i && o[t]) || (i ? o : r)("Symbol." + t));
      }).store = d;
    },
    znrX: function (t, n, e) {
      var d = e("nA4W"),
        r = e("CYMq"),
        o = e("WpRT")("IE_PROTO"),
        i = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function (t) {
          return (
            (t = r(t)),
            d(t, o)
              ? t[o]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? i
              : null
          );
        };
    },
  },
]);
