(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    ThKZ: function (l, n, o) {
      "use strict";
      o.d(n, "a", function () {
        return u;
      });
      var e = o("CcnG"),
        t = o("vARd"),
        u = (function () {
          function l(l) {
            this.snackBar = l;
          }
          return (
            (l.prototype.openSnackBar = function (l, n) {
              void 0 === n && (n = "Ok"),
                this.snackBar.open(l, n, { duration: 2e3 });
            }),
            (l.prototype.openSnackBarAsync = function (l) {
              var n = this;
              l.toPromise().then(function (l) {
                n.snackBar.open(l, "Ok", { duration: 2e3 });
              });
            }),
            (l.ngInjectableDef = e["ɵɵdefineInjectable"]({
              factory: function () {
                return new l(e["ɵɵinject"](t.b));
              },
              token: l,
              providedIn: "root",
            })),
            l
          );
        })();
    },
    jrel: function (l, n, o) {
      "use strict";
      o.d(n, "a", function () {
        return u;
      });
      var e = o("N+K7"),
        t = o("CcnG"),
        u = (function () {
          function l(l) {
            (this.http = l),
              (this.base = this.http.base + "logs/errors"),
              (this.saveErrors = []),
              (this.saving = !1);
          }
          return (
            (l.prototype.log = function (l) {
              var n = this,
                o = new Map(),
                e = l.valueChanges.subscribe(function () {
                  var e;
                  if (l.invalid) {
                    var t = Object.entries(l.controls)
                      .filter(function (l) {
                        var n = l[0],
                          e = l[1];
                        if (!e.touched) return !1;
                        var t = Object.keys(e.errors || {}).shift();
                        return (
                          (!o.has(n) || o.get(n) !== t || !t) &&
                          (o.set(n, t), !e.valid && e.touched && t)
                        );
                      })
                      .map(function (l) {
                        return [
                          l[0],
                          location.pathname,
                          Object.keys(l[1].errors).shift(),
                        ];
                      });
                    t.length && ((e = n.saveErrors).push.apply(e, t), n.save());
                  }
                });
              return function () {
                e.unsubscribe();
              };
            }),
            (l.prototype.save = function () {
              var l = this;
              if (!this.saving && this.saveErrors.length) {
                this.saving = !0;
                var n = this.saveErrors;
                (this.saveErrors = []),
                  this.http
                    .post(this.base, { errors: n })
                    .catch(function (l) {
                      console.error(l);
                    })
                    .then(function () {
                      (l.saving = !1), l.save();
                    });
              }
            }),
            (l.ngInjectableDef = t["ɵɵdefineInjectable"]({
              factory: function () {
                return new l(t["ɵɵinject"](e.a));
              },
              token: l,
              providedIn: "root",
            })),
            l
          );
        })();
    },
    uEHW: function (l, n, o) {
      "use strict";
      o.r(n);
      var e = o("CcnG"),
        t = (function () {
          return function () {};
        })(),
        u = o("pMnS"),
        a = o("t68o"),
        r = o("zbXB"),
        i = o("NcP4"),
        d = o("xYTU"),
        s = o("bujt"),
        c = o("ZYCi"),
        m = o("Ip0R"),
        f = o("UodH"),
        p = o("lLAP"),
        g = o("wFw1"),
        v = (function () {
          function l() {}
          return (l.prototype.ngOnInit = function () {}), l;
        })(),
        h = e["ɵcrt"]({ encapsulation: 0, styles: [[""]], data: {} });
      function b(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              12,
              "div",
              [["class", "login-register"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              1,
              0,
              null,
              null,
              11,
              "div",
              [["class", "login-register-box error-card text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              2,
              0,
              null,
              null,
              1,
              "h1",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](-1, null, ["404"])),
            (l()(),
            e["ɵeld"](
              4,
              0,
              null,
              null,
              1,
              "h3",
              [["class", "text-uppercase"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](-1, null, ["Page Not Found !"])),
            (l()(),
            e["ɵeld"](
              6,
              0,
              null,
              null,
              1,
              "p",
              [["class", "text-muted m-t-30 m-b-30"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵted"](-1, null, [
              "You seem to be trying to find this way to home",
            ])),
            (l()(),
            e["ɵeld"](
              8,
              0,
              null,
              null,
              4,
              "a",
              [
                [
                  "class",
                  "btn btn-info btn-rounded waves-effect waves-light m-b-40",
                ],
                ["color", "primary"],
                ["mat-raised-button", ""],
              ],
              [
                [1, "target", 0],
                [8, "href", 4],
                [1, "tabindex", 0],
                [1, "disabled", 0],
                [1, "aria-disabled", 0],
                [2, "_mat-animation-noopable", null],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 9).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  "click" === n &&
                    (t = !1 !== e["ɵnov"](l, 11)._haltDisabledEvents(o) && t),
                  t
                );
              },
              s.c,
              s.a
            )),
            e["ɵdid"](
              9,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            e["ɵpad"](10, 1),
            e["ɵdid"](
              11,
              180224,
              null,
              0,
              f.a,
              [p.h, e.ElementRef, [2, g.a]],
              { color: [0, "color"] },
              null
            ),
            (l()(), e["ɵted"](-1, 0, ["Back to home"])),
          ],
          function (l, n) {
            var o = l(n, 10, 0, "/");
            l(n, 9, 0, o), l(n, 11, 0, "primary");
          },
          function (l, n) {
            l(
              n,
              8,
              0,
              e["ɵnov"](n, 9).target,
              e["ɵnov"](n, 9).href,
              e["ɵnov"](n, 11).disabled ? -1 : e["ɵnov"](n, 11).tabIndex || 0,
              e["ɵnov"](n, 11).disabled || null,
              e["ɵnov"](n, 11).disabled.toString(),
              "NoopAnimations" === e["ɵnov"](n, 11)._animationMode
            );
          }
        );
      }
      function _(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "app-error",
              [],
              null,
              null,
              null,
              b,
              h
            )),
            e["ɵdid"](1, 114688, null, 0, v, [], null, null),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var C = e["ɵccf"]("app-error", v, _, {}, {}, []),
        x = [
          ".bgMain[_ngcontent-%COMP%]{background-image:url(/assets/images/rabbit.png);background-color:#00bcd4}",
        ],
        y = o("MBfO"),
        F = o("Z+uX"),
        S = o("A7o+"),
        R = o("lzlj"),
        k = o("FVSy"),
        w = o("W4xs"),
        N = (function () {
          function l(l, n, o) {
            (this.auth = l), (this.route = n), (this.router = o);
          }
          return (
            (l.prototype.ngOnInit = function () {
              var l = this;
              this.route.queryParams.subscribe(function (n) {
                n && n.id && n.key
                  ? l.auth
                      .restorePassConfirm(n.id, n.key)
                      .then(function () {
                        l.success = !0;
                      })
                      .catch(function () {
                        l.error = !0;
                      })
                  : (l.error = !0);
              });
            }),
            l
          );
        })(),
        E = e["ɵcrt"]({ encapsulation: 0, styles: [[""], x], data: {} });
      function I(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "mat-progress-bar",
              [
                ["aria-valuemax", "100"],
                ["aria-valuemin", "0"],
                ["class", "mat-progress-bar"],
                ["color", "primary"],
                ["mode", "indeterminate"],
                ["role", "progressbar"],
              ],
              [
                [1, "aria-valuenow", 0],
                [1, "mode", 0],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              y.b,
              y.a
            )),
            e["ɵdid"](
              1,
              4374528,
              null,
              0,
              F.b,
              [e.ElementRef, e.NgZone, [2, g.a], [2, F.a]],
              { color: [0, "color"], mode: [1, "mode"] },
              null
            ),
          ],
          function (l, n) {
            l(n, 1, 0, "primary", "indeterminate");
          },
          function (l, n) {
            l(
              n,
              0,
              0,
              "indeterminate" === e["ɵnov"](n, 1).mode ||
                "query" === e["ɵnov"](n, 1).mode
                ? null
                : e["ɵnov"](n, 1).value,
              e["ɵnov"](n, 1).mode,
              e["ɵnov"](n, 1)._isNoopAnimation
            );
          }
        );
      }
      function L(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "p",
              [["class", "text-center font-14"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform(
                  "Auth.Forgot.Confirm.Description.error"
                )
              )
            );
          }
        );
      }
      function q(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "p",
              [["class", "text-center font-14"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform(
                  "Auth.Forgot.Confirm.Description.success"
                )
              )
            );
          }
        );
      }
      function A(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              23,
              "div",
              [["class", "login-register bgMain"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              1,
              0,
              null,
              null,
              22,
              "div",
              [["class", "login-register-box"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              2,
              0,
              null,
              null,
              21,
              "mat-card",
              [["class", "mat-card"]],
              [[2, "_mat-animation-noopable", null]],
              null,
              null,
              R.d,
              R.a
            )),
            e["ɵdid"](3, 49152, null, 0, k.a, [[2, g.a]], null, null),
            (l()(),
            e["ɵeld"](
              4,
              0,
              null,
              0,
              19,
              "mat-card-content",
              [["class", "mat-card-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](5, 16384, null, 0, k.d, [], null, null),
            (l()(),
            e["ɵeld"](
              6,
              0,
              null,
              null,
              6,
              "div",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              7,
              0,
              null,
              null,
              2,
              "a",
              [["routerLink", "/"]],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 8).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              8,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              9,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "homepage"],
                ["src", "/assets/images/logo-cyan.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              10,
              0,
              null,
              null,
              2,
              "h4",
              [["class", "m-t-0"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](11, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(), e["ɵand"](16777216, null, null, 1, null, I)),
            e["ɵdid"](
              14,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, L)),
            e["ɵdid"](
              16,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, q)),
            e["ɵdid"](
              18,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              19,
              0,
              null,
              null,
              4,
              "button",
              [
                ["class", "btn-block btn-lg m-t-20"],
                ["color", "primary"],
                ["mat-raised-button", ""],
                ["routerLink", "/login.html"],
              ],
              [
                [1, "disabled", 0],
                [2, "_mat-animation-noopable", null],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n && (t = !1 !== e["ɵnov"](l, 20).onClick() && t),
                  t
                );
              },
              s.d,
              s.b
            )),
            e["ɵdid"](
              20,
              16384,
              null,
              0,
              c.p,
              [c.o, c.a, [8, null], e.Renderer2, e.ElementRef],
              { routerLink: [0, "routerLink"] },
              null
            ),
            e["ɵdid"](
              21,
              180224,
              null,
              0,
              f.b,
              [e.ElementRef, p.h, [2, g.a]],
              { color: [0, "color"] },
              null
            ),
            (l()(), e["ɵted"](22, 0, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          function (l, n) {
            var o = n.component;
            l(n, 8, 0, "/"),
              l(n, 14, 0, !o.error && !o.success),
              l(n, 16, 0, o.error),
              l(n, 18, 0, o.success),
              l(n, 20, 0, "/login.html"),
              l(n, 21, 0, "primary");
          },
          function (l, n) {
            l(n, 2, 0, "NoopAnimations" === e["ɵnov"](n, 3)._animationMode),
              l(n, 7, 0, e["ɵnov"](n, 8).target, e["ɵnov"](n, 8).href),
              l(
                n,
                11,
                0,
                e["ɵunv"](
                  n,
                  11,
                  0,
                  e["ɵnov"](n, 12).transform("Auth.Forgot.Confirm.title")
                )
              ),
              l(
                n,
                19,
                0,
                e["ɵnov"](n, 21).disabled || null,
                "NoopAnimations" === e["ɵnov"](n, 21)._animationMode
              ),
              l(
                n,
                22,
                0,
                e["ɵunv"](
                  n,
                  22,
                  0,
                  e["ɵnov"](n, 23).transform(
                    "Auth.Forgot.Confirm.Button.signIn"
                  )
                )
              );
          }
        );
      }
      function D(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "app-forgot-confirm",
              [],
              null,
              null,
              null,
              A,
              E
            )),
            e["ɵdid"](1, 114688, null, 0, N, [w.a, c.a, c.o], null, null),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var j = e["ɵccf"]("app-forgot-confirm", N, D, {}, {}, []),
        O = o("gIcY"),
        M = o("21Lb"),
        P = o("OzfB"),
        V = o("dJrM"),
        T = o("seP3"),
        G = o("Wf4p"),
        U = o("Fzqc"),
        K = o("dWZg"),
        B = o("b716"),
        Z = o("/VYK"),
        z = o("WZG6"),
        Y = o("z0F3"),
        J = (function () {
          function l(l, n, o, e, t) {
            (this.fb = l),
              (this.router = n),
              (this.translate = o),
              (this.snack = e),
              (this.auth = t);
          }
          return (
            (l.prototype.captchaSuccess = function (l) {
              (this.captcha = l), this.onSubmit();
            }),
            (l.prototype.ngOnInit = function () {
              this.form = this.fb.group({
                login: [null, O.Validators.compose([O.Validators.required])],
              });
            }),
            (l.prototype.onSubmit = function () {
              var l = this;
              this.auth
                .restorePassSendMail(
                  this.form.controls.login.value,
                  this.captcha
                )
                .then(function () {
                  l.snack.open(
                    l.translate.instant("Auth.Restore.Message.emailSent")
                  );
                });
            }),
            l
          );
        })(),
        W = o("vARd"),
        X = e["ɵcrt"]({ encapsulation: 0, styles: [[""], x], data: {} });
      function Q(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform("Auth.Forgot.Email.Error.required")
              )
            );
          }
        );
      }
      function H(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform("Auth.Forgot.Email.Error.invalid")
              )
            );
          }
        );
      }
      function $(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              54,
              "div",
              [["class", "login-register bgMain"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              1,
              0,
              null,
              null,
              53,
              "div",
              [["class", "login-register-box"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              2,
              0,
              null,
              null,
              52,
              "mat-card",
              [["class", "mat-card"]],
              [[2, "_mat-animation-noopable", null]],
              null,
              null,
              R.d,
              R.a
            )),
            e["ɵdid"](3, 49152, null, 0, k.a, [[2, g.a]], null, null),
            (l()(),
            e["ɵeld"](
              4,
              0,
              null,
              0,
              50,
              "mat-card-content",
              [["class", "mat-card-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](5, 16384, null, 0, k.d, [], null, null),
            (l()(),
            e["ɵeld"](
              6,
              0,
              null,
              null,
              48,
              "form",
              [["novalidate", ""]],
              [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "submit"],
                [null, "reset"],
              ],
              function (l, n, o) {
                var t = !0;
                return (
                  "submit" === n &&
                    (t = !1 !== e["ɵnov"](l, 8).onSubmit(o) && t),
                  "reset" === n && (t = !1 !== e["ɵnov"](l, 8).onReset() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              7,
              16384,
              null,
              0,
              O["ɵangular_packages_forms_forms_z"],
              [],
              null,
              null
            ),
            e["ɵdid"](
              8,
              540672,
              null,
              0,
              O.FormGroupDirective,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.ControlContainer, null, [
              O.FormGroupDirective,
            ]),
            e["ɵdid"](
              10,
              16384,
              null,
              0,
              O.NgControlStatusGroup,
              [[4, O.ControlContainer]],
              null,
              null
            ),
            (l()(),
            e["ɵeld"](
              11,
              0,
              null,
              null,
              6,
              "div",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              12,
              0,
              null,
              null,
              2,
              "a",
              [["routerLink", "/"]],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 13).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              13,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              14,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "homepage"],
                ["src", "/assets/images/logo-cyan.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              15,
              0,
              null,
              null,
              2,
              "h4",
              [["class", "m-t-0"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](16, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              18,
              0,
              null,
              null,
              2,
              "p",
              [["class", "text-center font-14"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](19, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              21,
              0,
              null,
              null,
              33,
              "div",
              [
                ["fxLayout", "column"],
                ["fxLayoutAlign", "space-around"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              22,
              671744,
              null,
              0,
              M.d,
              [e.ElementRef, P.j, [2, M.k], P.f],
              { fxLayout: [0, "fxLayout"] },
              null
            ),
            e["ɵdid"](
              23,
              671744,
              null,
              0,
              M.c,
              [e.ElementRef, P.j, [2, M.i], P.f],
              { fxLayoutAlign: [0, "fxLayoutAlign"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              24,
              0,
              null,
              null,
              24,
              "div",
              [["class", "pb-1"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              25,
              0,
              null,
              null,
              19,
              "mat-form-field",
              [
                ["class", "mat-form-field"],
                ["style", "width: 100%"],
              ],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-has-label", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              V.b,
              V.a
            )),
            e["ɵdid"](
              26,
              7520256,
              null,
              9,
              T.c,
              [
                e.ElementRef,
                e.ChangeDetectorRef,
                [2, G.j],
                [2, U.b],
                [2, T.a],
                K.a,
                e.NgZone,
                [2, g.a],
              ],
              null,
              null
            ),
            e["ɵqud"](603979776, 1, { _controlNonStatic: 0 }),
            e["ɵqud"](335544320, 2, { _controlStatic: 0 }),
            e["ɵqud"](603979776, 3, { _labelChildNonStatic: 0 }),
            e["ɵqud"](335544320, 4, { _labelChildStatic: 0 }),
            e["ɵqud"](603979776, 5, { _placeholderChild: 0 }),
            e["ɵqud"](603979776, 6, { _errorChildren: 1 }),
            e["ɵqud"](603979776, 7, { _hintChildren: 1 }),
            e["ɵqud"](603979776, 8, { _prefixChildren: 1 }),
            e["ɵqud"](603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            e["ɵeld"](
              36,
              0,
              null,
              1,
              8,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
              ],
              [
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [1, "readonly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, o) {
                var t = !0;
                return (
                  "input" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 37)._handleInput(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 37).onTouched() && t),
                  "compositionstart" === n &&
                    (t = !1 !== e["ɵnov"](l, 37)._compositionStart() && t),
                  "compositionend" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 37)._compositionEnd(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 41)._focusChanged(!1) && t),
                  "focus" === n &&
                    (t = !1 !== e["ɵnov"](l, 41)._focusChanged(!0) && t),
                  "input" === n &&
                    (t = !1 !== e["ɵnov"](l, 41)._onInput() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              37,
              16384,
              null,
              0,
              O.DefaultValueAccessor,
              [e.Renderer2, e.ElementRef, [2, O.COMPOSITION_BUFFER_MODE]],
              null,
              null
            ),
            e["ɵprd"](
              1024,
              null,
              O.NG_VALUE_ACCESSOR,
              function (l) {
                return [l];
              },
              [O.DefaultValueAccessor]
            ),
            e["ɵdid"](
              39,
              540672,
              null,
              0,
              O.FormControlDirective,
              [
                [8, null],
                [8, null],
                [6, O.NG_VALUE_ACCESSOR],
                [2, O["ɵangular_packages_forms_forms_q"]],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.NgControl, null, [O.FormControlDirective]),
            e["ɵdid"](
              41,
              999424,
              null,
              0,
              B.b,
              [
                e.ElementRef,
                K.a,
                [6, O.NgControl],
                [2, O.NgForm],
                [2, O.FormGroupDirective],
                G.d,
                [8, null],
                Z.a,
                e.NgZone,
              ],
              { placeholder: [0, "placeholder"] },
              null
            ),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            e["ɵdid"](
              43,
              16384,
              null,
              0,
              O.NgControlStatus,
              [[4, O.NgControl]],
              null,
              null
            ),
            e["ɵprd"](
              2048,
              [
                [1, 4],
                [2, 4],
              ],
              T.d,
              null,
              [B.b]
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, Q)),
            e["ɵdid"](
              46,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, H)),
            e["ɵdid"](
              48,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              49,
              0,
              null,
              null,
              1,
              "re-captcha",
              [
                ["siteKey", "6Lehm2cUAAAAAJAlYdG-hJ0k6yt8xYfeNOBjrjSV"],
                ["size", "invisible"],
              ],
              [[1, "id", 0]],
              [[null, "resolved"]],
              function (l, n, o) {
                var e = !0;
                return (
                  "resolved" === n &&
                    (e = !1 !== l.component.captchaSuccess(o) && e),
                  e
                );
              },
              z.b,
              z.a
            )),
            e["ɵdid"](
              50,
              4374528,
              [["captchaRef", 4]],
              0,
              Y.g,
              [e.ElementRef, Y.i, e.NgZone, [2, Y.d]],
              { siteKey: [0, "siteKey"], size: [1, "size"] },
              { resolved: "resolved" }
            ),
            (l()(),
            e["ɵeld"](
              51,
              0,
              null,
              null,
              3,
              "button",
              [
                ["class", "btn-block btn-lg m-t-20"],
                ["color", "primary"],
                ["mat-raised-button", ""],
                ["type", "submit"],
              ],
              [
                [1, "disabled", 0],
                [2, "_mat-animation-noopable", null],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n && (t = !1 !== e["ɵnov"](l, 50).execute() && t),
                  t
                );
              },
              s.d,
              s.b
            )),
            e["ɵdid"](
              52,
              180224,
              null,
              0,
              f.b,
              [e.ElementRef, p.h, [2, g.a]],
              { disabled: [0, "disabled"], color: [1, "color"] },
              null
            ),
            (l()(), e["ɵted"](53, 0, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          function (l, n) {
            var o = n.component;
            l(n, 8, 0, o.form),
              l(n, 13, 0, "/"),
              l(n, 22, 0, "column"),
              l(n, 23, 0, "space-around"),
              l(n, 39, 0, o.form.controls.login),
              l(
                n,
                41,
                0,
                e["ɵinlineInterpolate"](
                  1,
                  "",
                  e["ɵunv"](
                    n,
                    41,
                    0,
                    e["ɵnov"](n, 42).transform("Auth.Forgot.Email.label")
                  ),
                  ""
                )
              ),
              l(
                n,
                46,
                0,
                o.form.controls.login.hasError("required") &&
                  o.form.controls.login.touched
              ),
              l(
                n,
                48,
                0,
                (null == o.form.controls.login.errors
                  ? null
                  : o.form.controls.login.errors.email) &&
                  o.form.controls.login.touched
              ),
              l(
                n,
                50,
                0,
                "6Lehm2cUAAAAAJAlYdG-hJ0k6yt8xYfeNOBjrjSV",
                "invisible"
              ),
              l(n, 52, 0, !o.form.valid, "primary");
          },
          function (l, n) {
            l(n, 2, 0, "NoopAnimations" === e["ɵnov"](n, 3)._animationMode),
              l(
                n,
                6,
                0,
                e["ɵnov"](n, 10).ngClassUntouched,
                e["ɵnov"](n, 10).ngClassTouched,
                e["ɵnov"](n, 10).ngClassPristine,
                e["ɵnov"](n, 10).ngClassDirty,
                e["ɵnov"](n, 10).ngClassValid,
                e["ɵnov"](n, 10).ngClassInvalid,
                e["ɵnov"](n, 10).ngClassPending
              ),
              l(n, 12, 0, e["ɵnov"](n, 13).target, e["ɵnov"](n, 13).href),
              l(
                n,
                16,
                0,
                e["ɵunv"](
                  n,
                  16,
                  0,
                  e["ɵnov"](n, 17).transform("Auth.Forgot.title")
                )
              ),
              l(
                n,
                19,
                0,
                e["ɵunv"](
                  n,
                  19,
                  0,
                  e["ɵnov"](n, 20).transform("Auth.Forgot.description")
                )
              ),
              l(n, 25, 1, [
                "standard" == e["ɵnov"](n, 26).appearance,
                "fill" == e["ɵnov"](n, 26).appearance,
                "outline" == e["ɵnov"](n, 26).appearance,
                "legacy" == e["ɵnov"](n, 26).appearance,
                e["ɵnov"](n, 26)._control.errorState,
                e["ɵnov"](n, 26)._canLabelFloat,
                e["ɵnov"](n, 26)._shouldLabelFloat(),
                e["ɵnov"](n, 26)._hasFloatingLabel(),
                e["ɵnov"](n, 26)._hideControlPlaceholder(),
                e["ɵnov"](n, 26)._control.disabled,
                e["ɵnov"](n, 26)._control.autofilled,
                e["ɵnov"](n, 26)._control.focused,
                "accent" == e["ɵnov"](n, 26).color,
                "warn" == e["ɵnov"](n, 26).color,
                e["ɵnov"](n, 26)._shouldForward("untouched"),
                e["ɵnov"](n, 26)._shouldForward("touched"),
                e["ɵnov"](n, 26)._shouldForward("pristine"),
                e["ɵnov"](n, 26)._shouldForward("dirty"),
                e["ɵnov"](n, 26)._shouldForward("valid"),
                e["ɵnov"](n, 26)._shouldForward("invalid"),
                e["ɵnov"](n, 26)._shouldForward("pending"),
                !e["ɵnov"](n, 26)._animationsEnabled,
              ]),
              l(n, 36, 1, [
                e["ɵnov"](n, 41)._isServer,
                e["ɵnov"](n, 41).id,
                e["ɵnov"](n, 41).placeholder,
                e["ɵnov"](n, 41).disabled,
                e["ɵnov"](n, 41).required,
                (e["ɵnov"](n, 41).readonly &&
                  !e["ɵnov"](n, 41)._isNativeSelect) ||
                  null,
                e["ɵnov"](n, 41)._ariaDescribedby || null,
                e["ɵnov"](n, 41).errorState,
                e["ɵnov"](n, 41).required.toString(),
                e["ɵnov"](n, 43).ngClassUntouched,
                e["ɵnov"](n, 43).ngClassTouched,
                e["ɵnov"](n, 43).ngClassPristine,
                e["ɵnov"](n, 43).ngClassDirty,
                e["ɵnov"](n, 43).ngClassValid,
                e["ɵnov"](n, 43).ngClassInvalid,
                e["ɵnov"](n, 43).ngClassPending,
              ]),
              l(n, 49, 0, e["ɵnov"](n, 50).id),
              l(
                n,
                51,
                0,
                e["ɵnov"](n, 52).disabled || null,
                "NoopAnimations" === e["ɵnov"](n, 52)._animationMode
              ),
              l(
                n,
                53,
                0,
                e["ɵunv"](
                  n,
                  53,
                  0,
                  e["ɵnov"](n, 54).transform("Auth.Forgot.submit")
                )
              );
          }
        );
      }
      function ll(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "app-forgot",
              [],
              null,
              null,
              null,
              $,
              X
            )),
            e["ɵdid"](
              1,
              114688,
              null,
              0,
              J,
              [O.FormBuilder, c.o, S.j, W.b, w.a],
              null,
              null
            ),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var nl = e["ɵccf"]("app-forgot", J, ll, {}, {}, []),
        ol = (function () {
          function l(l, n) {
            (this.fb = l), (this.router = n);
          }
          return (
            (l.prototype.ngOnInit = function () {
              this.form = this.fb.group({
                uname: [null, O.Validators.compose([O.Validators.required])],
              });
            }),
            (l.prototype.onSubmit = function () {
              this.router.navigate(["/"]);
            }),
            l
          );
        })(),
        el = e["ɵcrt"]({ encapsulation: 0, styles: [[""], x], data: {} });
      function tl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](-1, null, ["Username is required."])),
          ],
          null,
          null
        );
      }
      function ul(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              44,
              "div",
              [["class", "login-register bgMain"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              1,
              0,
              null,
              null,
              43,
              "div",
              [["class", "login-register-box"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              2,
              0,
              null,
              null,
              42,
              "mat-card",
              [["class", "mat-card"]],
              [[2, "_mat-animation-noopable", null]],
              null,
              null,
              R.d,
              R.a
            )),
            e["ɵdid"](3, 49152, null, 0, k.a, [[2, g.a]], null, null),
            (l()(),
            e["ɵeld"](
              4,
              0,
              null,
              0,
              40,
              "mat-card-content",
              [["class", "mat-card-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](5, 16384, null, 0, k.d, [], null, null),
            (l()(),
            e["ɵeld"](
              6,
              0,
              null,
              null,
              38,
              "form",
              [["novalidate", ""]],
              [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngSubmit"],
                [null, "submit"],
                [null, "reset"],
              ],
              function (l, n, o) {
                var t = !0,
                  u = l.component;
                return (
                  "submit" === n &&
                    (t = !1 !== e["ɵnov"](l, 8).onSubmit(o) && t),
                  "reset" === n && (t = !1 !== e["ɵnov"](l, 8).onReset() && t),
                  "ngSubmit" === n && (t = !1 !== u.onSubmit() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              7,
              16384,
              null,
              0,
              O["ɵangular_packages_forms_forms_z"],
              [],
              null,
              null
            ),
            e["ɵdid"](
              8,
              540672,
              null,
              0,
              O.FormGroupDirective,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, "form"] },
              { ngSubmit: "ngSubmit" }
            ),
            e["ɵprd"](2048, null, O.ControlContainer, null, [
              O.FormGroupDirective,
            ]),
            e["ɵdid"](
              10,
              16384,
              null,
              0,
              O.NgControlStatusGroup,
              [[4, O.ControlContainer]],
              null,
              null
            ),
            (l()(),
            e["ɵeld"](
              11,
              0,
              null,
              null,
              3,
              "div",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              12,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "user"],
                ["class", "img-circle"],
                ["src", "assets/images/users/1.jpg"],
                ["title", "user"],
                ["width", "80"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              13,
              0,
              null,
              null,
              1,
              "h4",
              [["class", "m-t-0"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](-1, null, ["David Miller"])),
            (l()(),
            e["ɵeld"](
              15,
              0,
              null,
              null,
              29,
              "div",
              [["fxLayout", "row wrap"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              16,
              671744,
              null,
              0,
              M.d,
              [e.ElementRef, P.j, [2, M.k], P.f],
              { fxLayout: [0, "fxLayout"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              17,
              0,
              null,
              null,
              22,
              "div",
              [
                ["fxFlex", "100"],
                ["fxFlex.gt-sm", "100"],
                ["fxFlex.gt-xs", "100"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              18,
              671744,
              null,
              0,
              M.b,
              [e.ElementRef, P.j, P.e, M.h, P.f],
              {
                fxFlex: [0, "fxFlex"],
                "fxFlex.gt-xs": [1, "fxFlex.gt-xs"],
                "fxFlex.gt-sm": [2, "fxFlex.gt-sm"],
              },
              null
            ),
            (l()(),
            e["ɵeld"](
              19,
              0,
              null,
              null,
              18,
              "mat-form-field",
              [
                ["class", "mat-form-field"],
                ["style", "width: 100%"],
              ],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-has-label", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              V.b,
              V.a
            )),
            e["ɵdid"](
              20,
              7520256,
              null,
              9,
              T.c,
              [
                e.ElementRef,
                e.ChangeDetectorRef,
                [2, G.j],
                [2, U.b],
                [2, T.a],
                K.a,
                e.NgZone,
                [2, g.a],
              ],
              null,
              null
            ),
            e["ɵqud"](603979776, 1, { _controlNonStatic: 0 }),
            e["ɵqud"](335544320, 2, { _controlStatic: 0 }),
            e["ɵqud"](603979776, 3, { _labelChildNonStatic: 0 }),
            e["ɵqud"](335544320, 4, { _labelChildStatic: 0 }),
            e["ɵqud"](603979776, 5, { _placeholderChild: 0 }),
            e["ɵqud"](603979776, 6, { _errorChildren: 1 }),
            e["ɵqud"](603979776, 7, { _hintChildren: 1 }),
            e["ɵqud"](603979776, 8, { _prefixChildren: 1 }),
            e["ɵqud"](603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            e["ɵeld"](
              30,
              0,
              null,
              1,
              7,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
                ["placeholder", "Username"],
              ],
              [
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [1, "readonly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, o) {
                var t = !0;
                return (
                  "input" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 31)._handleInput(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 31).onTouched() && t),
                  "compositionstart" === n &&
                    (t = !1 !== e["ɵnov"](l, 31)._compositionStart() && t),
                  "compositionend" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 31)._compositionEnd(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 35)._focusChanged(!1) && t),
                  "focus" === n &&
                    (t = !1 !== e["ɵnov"](l, 35)._focusChanged(!0) && t),
                  "input" === n &&
                    (t = !1 !== e["ɵnov"](l, 35)._onInput() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              31,
              16384,
              null,
              0,
              O.DefaultValueAccessor,
              [e.Renderer2, e.ElementRef, [2, O.COMPOSITION_BUFFER_MODE]],
              null,
              null
            ),
            e["ɵprd"](
              1024,
              null,
              O.NG_VALUE_ACCESSOR,
              function (l) {
                return [l];
              },
              [O.DefaultValueAccessor]
            ),
            e["ɵdid"](
              33,
              540672,
              null,
              0,
              O.FormControlDirective,
              [
                [8, null],
                [8, null],
                [6, O.NG_VALUE_ACCESSOR],
                [2, O["ɵangular_packages_forms_forms_q"]],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.NgControl, null, [O.FormControlDirective]),
            e["ɵdid"](
              35,
              999424,
              null,
              0,
              B.b,
              [
                e.ElementRef,
                K.a,
                [6, O.NgControl],
                [2, O.NgForm],
                [2, O.FormGroupDirective],
                G.d,
                [8, null],
                Z.a,
                e.NgZone,
              ],
              { placeholder: [0, "placeholder"] },
              null
            ),
            e["ɵdid"](
              36,
              16384,
              null,
              0,
              O.NgControlStatus,
              [[4, O.NgControl]],
              null,
              null
            ),
            e["ɵprd"](
              2048,
              [
                [1, 4],
                [2, 4],
              ],
              T.d,
              null,
              [B.b]
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, tl)),
            e["ɵdid"](
              39,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              40,
              0,
              null,
              null,
              4,
              "div",
              [
                ["fxFlex", "100"],
                ["fxFlex.gt-sm", "100"],
                ["fxFlex.gt-xs", "100"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              41,
              671744,
              null,
              0,
              M.b,
              [e.ElementRef, P.j, P.e, M.h, P.f],
              {
                fxFlex: [0, "fxFlex"],
                "fxFlex.gt-xs": [1, "fxFlex.gt-xs"],
                "fxFlex.gt-sm": [2, "fxFlex.gt-sm"],
              },
              null
            ),
            (l()(),
            e["ɵeld"](
              42,
              0,
              null,
              null,
              2,
              "button",
              [
                ["class", "btn-block btn-lg m-t-10 m-b-10"],
                ["color", "primary"],
                ["mat-raised-button", ""],
                ["type", "submit"],
              ],
              [
                [1, "disabled", 0],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              s.d,
              s.b
            )),
            e["ɵdid"](
              43,
              180224,
              null,
              0,
              f.b,
              [e.ElementRef, p.h, [2, g.a]],
              { disabled: [0, "disabled"], color: [1, "color"] },
              null
            ),
            (l()(), e["ɵted"](-1, 0, ["Unlock"])),
          ],
          function (l, n) {
            var o = n.component;
            l(n, 8, 0, o.form),
              l(n, 16, 0, "row wrap"),
              l(n, 18, 0, "100", "100", "100"),
              l(n, 33, 0, o.form.controls.uname),
              l(n, 35, 0, "Username"),
              l(
                n,
                39,
                0,
                o.form.controls.uname.hasError("required") &&
                  o.form.controls.uname.touched
              ),
              l(n, 41, 0, "100", "100", "100"),
              l(n, 43, 0, !o.form.valid, "primary");
          },
          function (l, n) {
            l(n, 2, 0, "NoopAnimations" === e["ɵnov"](n, 3)._animationMode),
              l(
                n,
                6,
                0,
                e["ɵnov"](n, 10).ngClassUntouched,
                e["ɵnov"](n, 10).ngClassTouched,
                e["ɵnov"](n, 10).ngClassPristine,
                e["ɵnov"](n, 10).ngClassDirty,
                e["ɵnov"](n, 10).ngClassValid,
                e["ɵnov"](n, 10).ngClassInvalid,
                e["ɵnov"](n, 10).ngClassPending
              ),
              l(n, 19, 1, [
                "standard" == e["ɵnov"](n, 20).appearance,
                "fill" == e["ɵnov"](n, 20).appearance,
                "outline" == e["ɵnov"](n, 20).appearance,
                "legacy" == e["ɵnov"](n, 20).appearance,
                e["ɵnov"](n, 20)._control.errorState,
                e["ɵnov"](n, 20)._canLabelFloat,
                e["ɵnov"](n, 20)._shouldLabelFloat(),
                e["ɵnov"](n, 20)._hasFloatingLabel(),
                e["ɵnov"](n, 20)._hideControlPlaceholder(),
                e["ɵnov"](n, 20)._control.disabled,
                e["ɵnov"](n, 20)._control.autofilled,
                e["ɵnov"](n, 20)._control.focused,
                "accent" == e["ɵnov"](n, 20).color,
                "warn" == e["ɵnov"](n, 20).color,
                e["ɵnov"](n, 20)._shouldForward("untouched"),
                e["ɵnov"](n, 20)._shouldForward("touched"),
                e["ɵnov"](n, 20)._shouldForward("pristine"),
                e["ɵnov"](n, 20)._shouldForward("dirty"),
                e["ɵnov"](n, 20)._shouldForward("valid"),
                e["ɵnov"](n, 20)._shouldForward("invalid"),
                e["ɵnov"](n, 20)._shouldForward("pending"),
                !e["ɵnov"](n, 20)._animationsEnabled,
              ]),
              l(n, 30, 1, [
                e["ɵnov"](n, 35)._isServer,
                e["ɵnov"](n, 35).id,
                e["ɵnov"](n, 35).placeholder,
                e["ɵnov"](n, 35).disabled,
                e["ɵnov"](n, 35).required,
                (e["ɵnov"](n, 35).readonly &&
                  !e["ɵnov"](n, 35)._isNativeSelect) ||
                  null,
                e["ɵnov"](n, 35)._ariaDescribedby || null,
                e["ɵnov"](n, 35).errorState,
                e["ɵnov"](n, 35).required.toString(),
                e["ɵnov"](n, 36).ngClassUntouched,
                e["ɵnov"](n, 36).ngClassTouched,
                e["ɵnov"](n, 36).ngClassPristine,
                e["ɵnov"](n, 36).ngClassDirty,
                e["ɵnov"](n, 36).ngClassValid,
                e["ɵnov"](n, 36).ngClassInvalid,
                e["ɵnov"](n, 36).ngClassPending,
              ]),
              l(
                n,
                42,
                0,
                e["ɵnov"](n, 43).disabled || null,
                "NoopAnimations" === e["ɵnov"](n, 43)._animationMode
              );
          }
        );
      }
      function al(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "app-lockscreen",
              [],
              null,
              null,
              null,
              ul,
              el
            )),
            e["ɵdid"](1, 114688, null, 0, ol, [O.FormBuilder, c.o], null, null),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var rl = e["ɵccf"]("app-lockscreen", ol, al, {}, {}, []),
        il = o("hUWP"),
        dl = o("vcjA"),
        sl = o("jrel"),
        cl = (function () {
          function l(l, n, o, e, t, u, a) {
            (this.fb = l),
              (this.router = n),
              (this.auth = o),
              (this.translate = e),
              (this.errorsService = t),
              (this.route = u),
              (this.errorsLogger = a),
              (this.destroyFunctions = []),
              (this.uLoginLoaded = !1),
              (this.showCaptcha = !1),
              (this.captcha = ""),
              (this.param = { value: "test" });
          }
          return (
            (l.prototype.captchaSuccess = function (l) {
              (this.captcha = l), this.onSubmit();
            }),
            (l.prototype.addScript = function (l) {
              return new Promise(function (n, o) {
                var e = document.createElement("script");
                (e.src = l),
                  (e.onerror = o),
                  (e.onload = n),
                  document.body.appendChild(e);
              });
            }),
            (l.prototype.ngOnDestroy = function () {
              this.destroyFunctions.forEach(function (l) {
                return l();
              });
            }),
            (l.prototype.ngOnInit = function () {
              var l = this;
              this.auth.user && this.toAccount(),
                this.route.params.subscribe(function (n) {
                  n &&
                    n.token &&
                    l.auth.setToken(n.token).then(function () {
                      l.router.navigate(["/", "account"]);
                    });
                }),
                this.addScript("//ulogin.ru/js/ulogin.js").then(function () {
                  return (l.uLoginLoaded = !0);
                }),
                (this.form = this.fb.group({
                  login: [null, O.Validators.compose([O.Validators.required])],
                  password: [
                    null,
                    O.Validators.compose([O.Validators.required]),
                  ],
                })),
                this.destroyFunctions.push(this.errorsLogger.log(this.form));
            }),
            (l.prototype.toAccount = function () {
              this.router.navigate(["/account"]).then(function () {});
            }),
            (l.prototype.signIn = function () {
              var l = this;
              this.auth
                .signIn(
                  this.form.controls.login.value,
                  this.form.controls.password.value,
                  this.captcha
                )
                .then(this.toAccount.bind(this))
                .catch(function (n) {
                  n.code === dl.b.needRedirectToStepLogin
                    ? l.router.navigate(["/", "loginmail"])
                    : n.code === dl.b.signInNeedCaptcha
                    ? l.captchaRef.execute()
                    : l.errorsService.displaySnackBar(n.code);
                });
            }),
            (l.prototype.onSubmit = function () {
              this.signIn();
            }),
            l
          );
        })(),
        ml = e["ɵcrt"]({ encapsulation: 0, styles: [[""], x], data: {} });
      function fl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform("SignIn.Login.Error.required")
              )
            );
          }
        );
      }
      function pl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform("SignIn.Password.Error.required")
              )
            );
          }
        );
      }
      function gl(l) {
        return e["ɵvid"](
          0,
          [
            e["ɵqud"](671088640, 1, { captchaRef: 0 }),
            (l()(),
            e["ɵeld"](
              1,
              0,
              null,
              null,
              95,
              "div",
              [["class", "login-register bgMain"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              2,
              0,
              null,
              null,
              94,
              "div",
              [["class", "login-register-box"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              3,
              0,
              null,
              null,
              93,
              "mat-card",
              [["class", "mat-card"]],
              [[2, "_mat-animation-noopable", null]],
              null,
              null,
              R.d,
              R.a
            )),
            e["ɵdid"](4, 49152, null, 0, k.a, [[2, g.a]], null, null),
            (l()(),
            e["ɵeld"](
              5,
              0,
              null,
              0,
              91,
              "mat-card-content",
              [["class", "mat-card-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](6, 16384, null, 0, k.d, [], null, null),
            (l()(),
            e["ɵeld"](
              7,
              0,
              null,
              null,
              89,
              "form",
              [["novalidate", ""]],
              [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngSubmit"],
                [null, "submit"],
                [null, "reset"],
              ],
              function (l, n, o) {
                var t = !0,
                  u = l.component;
                return (
                  "submit" === n &&
                    (t = !1 !== e["ɵnov"](l, 9).onSubmit(o) && t),
                  "reset" === n && (t = !1 !== e["ɵnov"](l, 9).onReset() && t),
                  "ngSubmit" === n && (t = !1 !== u.onSubmit() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              8,
              16384,
              null,
              0,
              O["ɵangular_packages_forms_forms_z"],
              [],
              null,
              null
            ),
            e["ɵdid"](
              9,
              540672,
              null,
              0,
              O.FormGroupDirective,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, "form"] },
              { ngSubmit: "ngSubmit" }
            ),
            e["ɵprd"](2048, null, O.ControlContainer, null, [
              O.FormGroupDirective,
            ]),
            e["ɵdid"](
              11,
              16384,
              null,
              0,
              O.NgControlStatusGroup,
              [[4, O.ControlContainer]],
              null,
              null
            ),
            (l()(),
            e["ɵeld"](
              12,
              0,
              null,
              null,
              6,
              "div",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              13,
              0,
              null,
              null,
              2,
              "a",
              [["routerLink", "/"]],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 14).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              14,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              15,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "homepage"],
                ["src", "/assets/images/logo-cyan.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              16,
              0,
              null,
              null,
              2,
              "h4",
              [["class", "m-t-0"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](17, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              19,
              0,
              null,
              null,
              77,
              "div",
              [["fxLayout", "column"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              20,
              671744,
              null,
              0,
              M.d,
              [e.ElementRef, P.j, [2, M.k], P.f],
              { fxLayout: [0, "fxLayout"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              21,
              0,
              null,
              null,
              23,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              22,
              0,
              null,
              null,
              0,
              "div",
              [
                [
                  "data-ulogin",
                  "display=small;theme=classic;fields=first_name,last_name;providers=vkontakte,odnoklassniki,mailru,facebook;hidden=other;redirect_uri=https%3A%2F%2Fnew.popunder.net%2Fback%2Fauth%2Fulogin;mobilebuttons=0;",
                ],
                ["id", "uLogin"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              23,
              0,
              null,
              null,
              19,
              "mat-form-field",
              [["class", "mat-form-field"]],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-has-label", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              V.b,
              V.a
            )),
            e["ɵdid"](
              24,
              7520256,
              null,
              9,
              T.c,
              [
                e.ElementRef,
                e.ChangeDetectorRef,
                [2, G.j],
                [2, U.b],
                [2, T.a],
                K.a,
                e.NgZone,
                [2, g.a],
              ],
              null,
              null
            ),
            e["ɵqud"](603979776, 2, { _controlNonStatic: 0 }),
            e["ɵqud"](335544320, 3, { _controlStatic: 0 }),
            e["ɵqud"](603979776, 4, { _labelChildNonStatic: 0 }),
            e["ɵqud"](335544320, 5, { _labelChildStatic: 0 }),
            e["ɵqud"](603979776, 6, { _placeholderChild: 0 }),
            e["ɵqud"](603979776, 7, { _errorChildren: 1 }),
            e["ɵqud"](603979776, 8, { _hintChildren: 1 }),
            e["ɵqud"](603979776, 9, { _prefixChildren: 1 }),
            e["ɵqud"](603979776, 10, { _suffixChildren: 1 }),
            (l()(),
            e["ɵeld"](
              34,
              0,
              null,
              1,
              8,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
                ["name", "login"],
              ],
              [
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [1, "readonly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, o) {
                var t = !0;
                return (
                  "input" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 35)._handleInput(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 35).onTouched() && t),
                  "compositionstart" === n &&
                    (t = !1 !== e["ɵnov"](l, 35)._compositionStart() && t),
                  "compositionend" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 35)._compositionEnd(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 39)._focusChanged(!1) && t),
                  "focus" === n &&
                    (t = !1 !== e["ɵnov"](l, 39)._focusChanged(!0) && t),
                  "input" === n &&
                    (t = !1 !== e["ɵnov"](l, 39)._onInput() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              35,
              16384,
              null,
              0,
              O.DefaultValueAccessor,
              [e.Renderer2, e.ElementRef, [2, O.COMPOSITION_BUFFER_MODE]],
              null,
              null
            ),
            e["ɵprd"](
              1024,
              null,
              O.NG_VALUE_ACCESSOR,
              function (l) {
                return [l];
              },
              [O.DefaultValueAccessor]
            ),
            e["ɵdid"](
              37,
              540672,
              null,
              0,
              O.FormControlDirective,
              [
                [8, null],
                [8, null],
                [6, O.NG_VALUE_ACCESSOR],
                [2, O["ɵangular_packages_forms_forms_q"]],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.NgControl, null, [O.FormControlDirective]),
            e["ɵdid"](
              39,
              999424,
              null,
              0,
              B.b,
              [
                e.ElementRef,
                K.a,
                [6, O.NgControl],
                [2, O.NgForm],
                [2, O.FormGroupDirective],
                G.d,
                [8, null],
                Z.a,
                e.NgZone,
              ],
              { placeholder: [0, "placeholder"] },
              null
            ),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            e["ɵdid"](
              41,
              16384,
              null,
              0,
              O.NgControlStatus,
              [[4, O.NgControl]],
              null,
              null
            ),
            e["ɵprd"](
              2048,
              [
                [2, 4],
                [3, 4],
              ],
              T.d,
              null,
              [B.b]
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, fl)),
            e["ɵdid"](
              44,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              45,
              0,
              null,
              null,
              22,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              46,
              0,
              null,
              null,
              19,
              "mat-form-field",
              [["class", "mat-form-field"]],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-has-label", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              V.b,
              V.a
            )),
            e["ɵdid"](
              47,
              7520256,
              null,
              9,
              T.c,
              [
                e.ElementRef,
                e.ChangeDetectorRef,
                [2, G.j],
                [2, U.b],
                [2, T.a],
                K.a,
                e.NgZone,
                [2, g.a],
              ],
              null,
              null
            ),
            e["ɵqud"](603979776, 11, { _controlNonStatic: 0 }),
            e["ɵqud"](335544320, 12, { _controlStatic: 0 }),
            e["ɵqud"](603979776, 13, { _labelChildNonStatic: 0 }),
            e["ɵqud"](335544320, 14, { _labelChildStatic: 0 }),
            e["ɵqud"](603979776, 15, { _placeholderChild: 0 }),
            e["ɵqud"](603979776, 16, { _errorChildren: 1 }),
            e["ɵqud"](603979776, 17, { _hintChildren: 1 }),
            e["ɵqud"](603979776, 18, { _prefixChildren: 1 }),
            e["ɵqud"](603979776, 19, { _suffixChildren: 1 }),
            (l()(),
            e["ɵeld"](
              57,
              0,
              null,
              1,
              8,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
                ["name", "password"],
                ["type", "password"],
              ],
              [
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [1, "readonly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, o) {
                var t = !0;
                return (
                  "input" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 58)._handleInput(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 58).onTouched() && t),
                  "compositionstart" === n &&
                    (t = !1 !== e["ɵnov"](l, 58)._compositionStart() && t),
                  "compositionend" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 58)._compositionEnd(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 62)._focusChanged(!1) && t),
                  "focus" === n &&
                    (t = !1 !== e["ɵnov"](l, 62)._focusChanged(!0) && t),
                  "input" === n &&
                    (t = !1 !== e["ɵnov"](l, 62)._onInput() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              58,
              16384,
              null,
              0,
              O.DefaultValueAccessor,
              [e.Renderer2, e.ElementRef, [2, O.COMPOSITION_BUFFER_MODE]],
              null,
              null
            ),
            e["ɵprd"](
              1024,
              null,
              O.NG_VALUE_ACCESSOR,
              function (l) {
                return [l];
              },
              [O.DefaultValueAccessor]
            ),
            e["ɵdid"](
              60,
              540672,
              null,
              0,
              O.FormControlDirective,
              [
                [8, null],
                [8, null],
                [6, O.NG_VALUE_ACCESSOR],
                [2, O["ɵangular_packages_forms_forms_q"]],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.NgControl, null, [O.FormControlDirective]),
            e["ɵdid"](
              62,
              999424,
              null,
              0,
              B.b,
              [
                e.ElementRef,
                K.a,
                [6, O.NgControl],
                [2, O.NgForm],
                [2, O.FormGroupDirective],
                G.d,
                [8, null],
                Z.a,
                e.NgZone,
              ],
              { placeholder: [0, "placeholder"], type: [1, "type"] },
              null
            ),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            e["ɵdid"](
              64,
              16384,
              null,
              0,
              O.NgControlStatus,
              [[4, O.NgControl]],
              null,
              null
            ),
            e["ɵprd"](
              2048,
              [
                [11, 4],
                [12, 4],
              ],
              T.d,
              null,
              [B.b]
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, pl)),
            e["ɵdid"](
              67,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              68,
              0,
              null,
              null,
              12,
              "div",
              [
                ["fxLayout", "row wrap"],
                ["fxLayoutGap.gt-xs", "20px"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              69,
              671744,
              null,
              0,
              M.d,
              [e.ElementRef, P.j, [2, M.k], P.f],
              { fxLayout: [0, "fxLayout"] },
              null
            ),
            e["ɵdid"](
              70,
              1720320,
              null,
              0,
              M.e,
              [e.ElementRef, e.NgZone, U.b, P.j, [2, M.j], P.f],
              { "fxLayoutGap.gt-xs": [0, "fxLayoutGap.gt-xs"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              71,
              0,
              null,
              null,
              9,
              "div",
              [["fxFlex", ""]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              72,
              671744,
              null,
              0,
              M.b,
              [e.ElementRef, P.j, P.e, M.h, P.f],
              { fxFlex: [0, "fxFlex"] },
              null
            ),
            e["ɵprd"](512, null, m["ɵNgClassImpl"], m["ɵNgClassR2Impl"], [
              e.IterableDiffers,
              e.KeyValueDiffers,
              e.ElementRef,
              e.Renderer2,
            ]),
            e["ɵdid"](
              74,
              933888,
              null,
              0,
              il.a,
              [e.ElementRef, P.j, P.f, m["ɵNgClassImpl"], [8, null]],
              { "ngClass.gt-xs": [0, "ngClass.gt-xs"] },
              null
            ),
            e["ɵpod"](75, { "text-right": 0 }),
            (l()(),
            e["ɵeld"](
              76,
              0,
              null,
              null,
              4,
              "a",
              [["class", "text-info link"]],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 77).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              77,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            e["ɵpad"](78, 1),
            (l()(), e["ɵted"](79, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              81,
              0,
              null,
              null,
              6,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              82,
              0,
              null,
              null,
              1,
              "re-captcha",
              [
                ["siteKey", "6Lehm2cUAAAAAJAlYdG-hJ0k6yt8xYfeNOBjrjSV"],
                ["size", "invisible"],
              ],
              [[1, "id", 0]],
              [[null, "resolved"]],
              function (l, n, o) {
                var e = !0;
                return (
                  "resolved" === n &&
                    (e = !1 !== l.component.captchaSuccess(o) && e),
                  e
                );
              },
              z.b,
              z.a
            )),
            e["ɵdid"](
              83,
              4374528,
              [
                [1, 4],
                ["captchaRef", 4],
              ],
              0,
              Y.g,
              [e.ElementRef, Y.i, e.NgZone, [2, Y.d]],
              { siteKey: [0, "siteKey"], size: [1, "size"] },
              { resolved: "resolved" }
            ),
            (l()(),
            e["ɵeld"](
              84,
              0,
              null,
              null,
              3,
              "button",
              [
                ["class", "btn-block btn-lg m-t-20 m-b-20"],
                ["color", "primary"],
                ["mat-raised-button", ""],
                ["type", "submit"],
              ],
              [
                [1, "disabled", 0],
                [2, "_mat-animation-noopable", null],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n && (t = !1 !== e["ɵnov"](l, 83).reset() && t), t
                );
              },
              s.d,
              s.b
            )),
            e["ɵdid"](
              85,
              180224,
              null,
              0,
              f.b,
              [e.ElementRef, p.h, [2, g.a]],
              { disabled: [0, "disabled"], color: [1, "color"] },
              null
            ),
            (l()(), e["ɵted"](86, 0, [" ", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              88,
              0,
              null,
              null,
              8,
              "div",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              89,
              0,
              null,
              null,
              7,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](90, null, ["", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              92,
              0,
              null,
              null,
              4,
              "a",
              [["class", "text-info link"]],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 93).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              93,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            e["ɵpad"](94, 1),
            (l()(), e["ɵted"](95, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          function (l, n) {
            var o = n.component;
            l(n, 9, 0, o.form),
              l(n, 14, 0, "/"),
              l(n, 20, 0, "column"),
              l(n, 37, 0, o.form.controls.login),
              l(
                n,
                39,
                0,
                e["ɵinlineInterpolate"](
                  1,
                  "",
                  e["ɵunv"](
                    n,
                    39,
                    0,
                    e["ɵnov"](n, 40).transform("SignIn.Login.label")
                  ),
                  ""
                )
              ),
              l(
                n,
                44,
                0,
                o.form.controls.login.hasError("required") &&
                  o.form.controls.login.touched
              ),
              l(n, 60, 0, o.form.controls.password),
              l(
                n,
                62,
                0,
                e["ɵinlineInterpolate"](
                  1,
                  "",
                  e["ɵunv"](
                    n,
                    62,
                    0,
                    e["ɵnov"](n, 63).transform("SignIn.Password.label")
                  ),
                  ""
                ),
                "password"
              ),
              l(
                n,
                67,
                0,
                o.form.controls.password.hasError("required") &&
                  o.form.controls.password.touched
              ),
              l(n, 69, 0, "row wrap"),
              l(n, 70, 0, "20px"),
              l(n, 72, 0, "");
            var t = l(n, 75, 0, !0);
            l(n, 74, 0, t);
            var u = l(n, 78, 0, "/forgot.html");
            l(n, 77, 0, u),
              l(
                n,
                83,
                0,
                "6Lehm2cUAAAAAJAlYdG-hJ0k6yt8xYfeNOBjrjSV",
                "invisible"
              ),
              l(n, 85, 0, !o.form.valid, "primary");
            var a = l(n, 94, 0, "/register.html");
            l(n, 93, 0, a);
          },
          function (l, n) {
            l(n, 3, 0, "NoopAnimations" === e["ɵnov"](n, 4)._animationMode),
              l(
                n,
                7,
                0,
                e["ɵnov"](n, 11).ngClassUntouched,
                e["ɵnov"](n, 11).ngClassTouched,
                e["ɵnov"](n, 11).ngClassPristine,
                e["ɵnov"](n, 11).ngClassDirty,
                e["ɵnov"](n, 11).ngClassValid,
                e["ɵnov"](n, 11).ngClassInvalid,
                e["ɵnov"](n, 11).ngClassPending
              ),
              l(n, 13, 0, e["ɵnov"](n, 14).target, e["ɵnov"](n, 14).href),
              l(
                n,
                17,
                0,
                e["ɵunv"](n, 17, 0, e["ɵnov"](n, 18).transform("SignIn.title"))
              ),
              l(n, 23, 1, [
                "standard" == e["ɵnov"](n, 24).appearance,
                "fill" == e["ɵnov"](n, 24).appearance,
                "outline" == e["ɵnov"](n, 24).appearance,
                "legacy" == e["ɵnov"](n, 24).appearance,
                e["ɵnov"](n, 24)._control.errorState,
                e["ɵnov"](n, 24)._canLabelFloat,
                e["ɵnov"](n, 24)._shouldLabelFloat(),
                e["ɵnov"](n, 24)._hasFloatingLabel(),
                e["ɵnov"](n, 24)._hideControlPlaceholder(),
                e["ɵnov"](n, 24)._control.disabled,
                e["ɵnov"](n, 24)._control.autofilled,
                e["ɵnov"](n, 24)._control.focused,
                "accent" == e["ɵnov"](n, 24).color,
                "warn" == e["ɵnov"](n, 24).color,
                e["ɵnov"](n, 24)._shouldForward("untouched"),
                e["ɵnov"](n, 24)._shouldForward("touched"),
                e["ɵnov"](n, 24)._shouldForward("pristine"),
                e["ɵnov"](n, 24)._shouldForward("dirty"),
                e["ɵnov"](n, 24)._shouldForward("valid"),
                e["ɵnov"](n, 24)._shouldForward("invalid"),
                e["ɵnov"](n, 24)._shouldForward("pending"),
                !e["ɵnov"](n, 24)._animationsEnabled,
              ]),
              l(n, 34, 1, [
                e["ɵnov"](n, 39)._isServer,
                e["ɵnov"](n, 39).id,
                e["ɵnov"](n, 39).placeholder,
                e["ɵnov"](n, 39).disabled,
                e["ɵnov"](n, 39).required,
                (e["ɵnov"](n, 39).readonly &&
                  !e["ɵnov"](n, 39)._isNativeSelect) ||
                  null,
                e["ɵnov"](n, 39)._ariaDescribedby || null,
                e["ɵnov"](n, 39).errorState,
                e["ɵnov"](n, 39).required.toString(),
                e["ɵnov"](n, 41).ngClassUntouched,
                e["ɵnov"](n, 41).ngClassTouched,
                e["ɵnov"](n, 41).ngClassPristine,
                e["ɵnov"](n, 41).ngClassDirty,
                e["ɵnov"](n, 41).ngClassValid,
                e["ɵnov"](n, 41).ngClassInvalid,
                e["ɵnov"](n, 41).ngClassPending,
              ]),
              l(n, 46, 1, [
                "standard" == e["ɵnov"](n, 47).appearance,
                "fill" == e["ɵnov"](n, 47).appearance,
                "outline" == e["ɵnov"](n, 47).appearance,
                "legacy" == e["ɵnov"](n, 47).appearance,
                e["ɵnov"](n, 47)._control.errorState,
                e["ɵnov"](n, 47)._canLabelFloat,
                e["ɵnov"](n, 47)._shouldLabelFloat(),
                e["ɵnov"](n, 47)._hasFloatingLabel(),
                e["ɵnov"](n, 47)._hideControlPlaceholder(),
                e["ɵnov"](n, 47)._control.disabled,
                e["ɵnov"](n, 47)._control.autofilled,
                e["ɵnov"](n, 47)._control.focused,
                "accent" == e["ɵnov"](n, 47).color,
                "warn" == e["ɵnov"](n, 47).color,
                e["ɵnov"](n, 47)._shouldForward("untouched"),
                e["ɵnov"](n, 47)._shouldForward("touched"),
                e["ɵnov"](n, 47)._shouldForward("pristine"),
                e["ɵnov"](n, 47)._shouldForward("dirty"),
                e["ɵnov"](n, 47)._shouldForward("valid"),
                e["ɵnov"](n, 47)._shouldForward("invalid"),
                e["ɵnov"](n, 47)._shouldForward("pending"),
                !e["ɵnov"](n, 47)._animationsEnabled,
              ]),
              l(n, 57, 1, [
                e["ɵnov"](n, 62)._isServer,
                e["ɵnov"](n, 62).id,
                e["ɵnov"](n, 62).placeholder,
                e["ɵnov"](n, 62).disabled,
                e["ɵnov"](n, 62).required,
                (e["ɵnov"](n, 62).readonly &&
                  !e["ɵnov"](n, 62)._isNativeSelect) ||
                  null,
                e["ɵnov"](n, 62)._ariaDescribedby || null,
                e["ɵnov"](n, 62).errorState,
                e["ɵnov"](n, 62).required.toString(),
                e["ɵnov"](n, 64).ngClassUntouched,
                e["ɵnov"](n, 64).ngClassTouched,
                e["ɵnov"](n, 64).ngClassPristine,
                e["ɵnov"](n, 64).ngClassDirty,
                e["ɵnov"](n, 64).ngClassValid,
                e["ɵnov"](n, 64).ngClassInvalid,
                e["ɵnov"](n, 64).ngClassPending,
              ]),
              l(n, 76, 0, e["ɵnov"](n, 77).target, e["ɵnov"](n, 77).href),
              l(
                n,
                79,
                0,
                e["ɵunv"](
                  n,
                  79,
                  0,
                  e["ɵnov"](n, 80).transform("SignIn.Button.forgot")
                )
              ),
              l(n, 82, 0, e["ɵnov"](n, 83).id),
              l(
                n,
                84,
                0,
                e["ɵnov"](n, 85).disabled || null,
                "NoopAnimations" === e["ɵnov"](n, 85)._animationMode
              ),
              l(
                n,
                86,
                0,
                e["ɵunv"](
                  n,
                  86,
                  0,
                  e["ɵnov"](n, 87).transform("SignIn.Button.signIn")
                )
              ),
              l(
                n,
                90,
                0,
                e["ɵunv"](
                  n,
                  90,
                  0,
                  e["ɵnov"](n, 91).transform("SignIn.Link.noAccount")
                )
              ),
              l(n, 92, 0, e["ɵnov"](n, 93).target, e["ɵnov"](n, 93).href),
              l(
                n,
                95,
                0,
                e["ɵunv"](
                  n,
                  95,
                  0,
                  e["ɵnov"](n, 96).transform("SignIn.Button.signUp")
                )
              );
          }
        );
      }
      function vl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "app-login",
              [],
              null,
              null,
              null,
              gl,
              ml
            )),
            e["ɵdid"](
              1,
              245760,
              null,
              0,
              cl,
              [O.FormBuilder, c.o, w.a, S.j, dl.a, c.a, sl.a],
              null,
              null
            ),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var hl = e["ɵccf"]("app-login", cl, vl, {}, {}, []),
        bl = o("ThKZ"),
        _l = o("xros"),
        Cl = (function () {
          function l(l, n, o, e, t) {
            (this.auth = l),
              (this.route = n),
              (this.router = o),
              (this.snack = e),
              (this.translate = t);
          }
          return (
            (l.prototype.ngOnInit = function () {
              var l = this;
              this.route.params.subscribe(function (n) {
                n &&
                  n.key &&
                  n.hash &&
                  l.auth
                    .signInFastSafe(n.key, n.hash)
                    .then(function () {
                      l.router.navigate(["/", "account"]);
                    })
                    .catch(function () {
                      l.snack.openSnackBar(
                        l.translate.instant(Object(_l.a)("Auth.Fast.error"))
                      ),
                        l.router.navigate(["/"]);
                    });
              });
            }),
            l
          );
        })(),
        xl = e["ɵcrt"]({ encapsulation: 0, styles: [[""]], data: {} });
      function yl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "p",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](-1, null, [" fast-login-safe works!\n"])),
          ],
          null,
          null
        );
      }
      function Fl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "app-fast-login-safe",
              [],
              null,
              null,
              null,
              yl,
              xl
            )),
            e["ɵdid"](
              1,
              114688,
              null,
              0,
              Cl,
              [w.a, c.a, c.o, bl.a, S.j],
              null,
              null
            ),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Sl = e["ɵccf"]("app-fast-login-safe", Cl, Fl, {}, {}, []),
        Rl = o("Z5h4"),
        kl = o("de3e"),
        wl = o("mrSG"),
        Nl = o("JdLL"),
        El = o("h8oB"),
        Il = o("SbLv"),
        Ll =
          (new O.FormControl("", O.Validators.required),
          (function () {
            function l(l, n, o, e, t, u, a, r) {
              (this.fb = l),
                (this.auth = n),
                (this.router = o),
                (this.translate = e),
                (this.errors = t),
                (this.ref = u),
                (this.errorsLogger = a),
                (this.cookie = r),
                (this.destroyFunctions = []),
                (this.UserType = w.c);
            }
            return (
              (l.prototype.ngOnDestroy = function () {
                this.destroyFunctions.forEach(function (l) {
                  return l();
                });
              }),
              (l.prototype.ngOnInit = function () {
                (this.form = this.fb.group({
                  email: [
                    null,
                    O.Validators.compose([
                      O.Validators.required,
                      Nl.CustomValidators.email,
                    ]),
                  ],
                  password: [null, O.Validators.required],
                  sendMail: [null],
                })),
                  this.destroyFunctions.push(this.errorsLogger.log(this.form));
              }),
              (l.prototype.onSubmit = function () {
                return Object(wl.b)(this, void 0, void 0, function () {
                  var l;
                  return Object(wl.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 3, , 4]),
                          [
                            4,
                            this.auth.signUp({
                              email: this.form.controls.email.value,
                              password: this.form.controls.password.value,
                              sendMail: this.form.controls.sendMail.value,
                              refId: this.ref.refId,
                            }),
                          ]
                        );
                      case 1:
                        return (
                          n.sent(), [4, this.router.navigate(["/account"])]
                        );
                      case 2:
                        return n.sent(), [3, 4];
                      case 3:
                        return (
                          (l = n.sent()),
                          this.errors.displaySnackBar(
                            l.code === dl.b.REGISTRATION_LOGIN_EXIST
                              ? l.code
                              : +l.message
                          ),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              l
            );
          })()),
        ql = e["ɵcrt"]({
          encapsulation: 0,
          styles: [[".userType[_ngcontent-%COMP%]{margin-bottom:15px}"], x],
          data: {},
        });
      function Al(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform("Registration.Error.Email.required")
              )
            );
          }
        );
      }
      function Dl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform("Registration.Error.Email.invalid")
              )
            );
          }
        );
      }
      function jl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform(
                  "Registration.Error.Password.required"
                )
              )
            );
          }
        );
      }
      function Ol(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              101,
              "div",
              [["class", "login-register bgMain"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              1,
              0,
              null,
              null,
              100,
              "div",
              [["class", "login-register-box"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              2,
              0,
              null,
              null,
              99,
              "mat-card",
              [["class", "mat-card"]],
              [[2, "_mat-animation-noopable", null]],
              null,
              null,
              R.d,
              R.a
            )),
            e["ɵdid"](3, 49152, null, 0, k.a, [[2, g.a]], null, null),
            (l()(),
            e["ɵeld"](
              4,
              0,
              null,
              0,
              97,
              "mat-card-content",
              [["class", "mat-card-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](5, 16384, null, 0, k.d, [], null, null),
            (l()(),
            e["ɵeld"](
              6,
              0,
              null,
              null,
              95,
              "form",
              [["novalidate", ""]],
              [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngSubmit"],
                [null, "submit"],
                [null, "reset"],
              ],
              function (l, n, o) {
                var t = !0,
                  u = l.component;
                return (
                  "submit" === n &&
                    (t = !1 !== e["ɵnov"](l, 8).onSubmit(o) && t),
                  "reset" === n && (t = !1 !== e["ɵnov"](l, 8).onReset() && t),
                  "ngSubmit" === n && (t = !1 !== u.onSubmit() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              7,
              16384,
              null,
              0,
              O["ɵangular_packages_forms_forms_z"],
              [],
              null,
              null
            ),
            e["ɵdid"](
              8,
              540672,
              null,
              0,
              O.FormGroupDirective,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, "form"] },
              { ngSubmit: "ngSubmit" }
            ),
            e["ɵprd"](2048, null, O.ControlContainer, null, [
              O.FormGroupDirective,
            ]),
            e["ɵdid"](
              10,
              16384,
              null,
              0,
              O.NgControlStatusGroup,
              [[4, O.ControlContainer]],
              null,
              null
            ),
            (l()(),
            e["ɵeld"](
              11,
              0,
              null,
              null,
              6,
              "div",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              12,
              0,
              null,
              null,
              2,
              "a",
              [["routerLink", "/"]],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 13).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              13,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              14,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "homepage"],
                ["src", "/assets/images/logo-cyan.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              15,
              0,
              null,
              null,
              2,
              "h4",
              [["class", "m-t-0"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](16, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              18,
              0,
              null,
              null,
              83,
              "div",
              [["fxLayout", "column"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              19,
              671744,
              null,
              0,
              M.d,
              [e.ElementRef, P.j, [2, M.k], P.f],
              { fxLayout: [0, "fxLayout"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              20,
              0,
              null,
              null,
              24,
              "div",
              [
                ["fxFlex", "100"],
                ["fxFlex.gt-sm", "100"],
                ["fxFlex.gt-xs", "100"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              21,
              671744,
              null,
              0,
              M.b,
              [e.ElementRef, P.j, P.e, M.h, P.f],
              {
                fxFlex: [0, "fxFlex"],
                "fxFlex.gt-xs": [1, "fxFlex.gt-xs"],
                "fxFlex.gt-sm": [2, "fxFlex.gt-sm"],
              },
              null
            ),
            (l()(),
            e["ɵeld"](
              22,
              0,
              null,
              null,
              18,
              "mat-form-field",
              [
                ["class", "mat-form-field"],
                ["style", "width: 100%"],
              ],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-has-label", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              V.b,
              V.a
            )),
            e["ɵdid"](
              23,
              7520256,
              null,
              9,
              T.c,
              [
                e.ElementRef,
                e.ChangeDetectorRef,
                [2, G.j],
                [2, U.b],
                [2, T.a],
                K.a,
                e.NgZone,
                [2, g.a],
              ],
              null,
              null
            ),
            e["ɵqud"](603979776, 1, { _controlNonStatic: 0 }),
            e["ɵqud"](335544320, 2, { _controlStatic: 0 }),
            e["ɵqud"](603979776, 3, { _labelChildNonStatic: 0 }),
            e["ɵqud"](335544320, 4, { _labelChildStatic: 0 }),
            e["ɵqud"](603979776, 5, { _placeholderChild: 0 }),
            e["ɵqud"](603979776, 6, { _errorChildren: 1 }),
            e["ɵqud"](603979776, 7, { _hintChildren: 1 }),
            e["ɵqud"](603979776, 8, { _prefixChildren: 1 }),
            e["ɵqud"](603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            e["ɵeld"](
              33,
              0,
              null,
              1,
              7,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
                ["placeholder", "Email"],
                ["type", "email"],
              ],
              [
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [1, "readonly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, o) {
                var t = !0;
                return (
                  "input" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 34)._handleInput(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 34).onTouched() && t),
                  "compositionstart" === n &&
                    (t = !1 !== e["ɵnov"](l, 34)._compositionStart() && t),
                  "compositionend" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 34)._compositionEnd(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 38)._focusChanged(!1) && t),
                  "focus" === n &&
                    (t = !1 !== e["ɵnov"](l, 38)._focusChanged(!0) && t),
                  "input" === n &&
                    (t = !1 !== e["ɵnov"](l, 38)._onInput() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              34,
              16384,
              null,
              0,
              O.DefaultValueAccessor,
              [e.Renderer2, e.ElementRef, [2, O.COMPOSITION_BUFFER_MODE]],
              null,
              null
            ),
            e["ɵprd"](
              1024,
              null,
              O.NG_VALUE_ACCESSOR,
              function (l) {
                return [l];
              },
              [O.DefaultValueAccessor]
            ),
            e["ɵdid"](
              36,
              540672,
              null,
              0,
              O.FormControlDirective,
              [
                [8, null],
                [8, null],
                [6, O.NG_VALUE_ACCESSOR],
                [2, O["ɵangular_packages_forms_forms_q"]],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.NgControl, null, [O.FormControlDirective]),
            e["ɵdid"](
              38,
              999424,
              null,
              0,
              B.b,
              [
                e.ElementRef,
                K.a,
                [6, O.NgControl],
                [2, O.NgForm],
                [2, O.FormGroupDirective],
                G.d,
                [8, null],
                Z.a,
                e.NgZone,
              ],
              { placeholder: [0, "placeholder"], type: [1, "type"] },
              null
            ),
            e["ɵdid"](
              39,
              16384,
              null,
              0,
              O.NgControlStatus,
              [[4, O.NgControl]],
              null,
              null
            ),
            e["ɵprd"](
              2048,
              [
                [1, 4],
                [2, 4],
              ],
              T.d,
              null,
              [B.b]
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, Al)),
            e["ɵdid"](
              42,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, Dl)),
            e["ɵdid"](
              44,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              45,
              0,
              null,
              null,
              23,
              "div",
              [
                ["fxFlex", "100"],
                ["fxFlex.gt-sm", "100"],
                ["fxFlex.gt-xs", "100"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              46,
              671744,
              null,
              0,
              M.b,
              [e.ElementRef, P.j, P.e, M.h, P.f],
              {
                fxFlex: [0, "fxFlex"],
                "fxFlex.gt-xs": [1, "fxFlex.gt-xs"],
                "fxFlex.gt-sm": [2, "fxFlex.gt-sm"],
              },
              null
            ),
            (l()(),
            e["ɵeld"](
              47,
              0,
              null,
              null,
              19,
              "mat-form-field",
              [
                ["class", "mat-form-field"],
                ["style", "width: 100%"],
              ],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-has-label", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              V.b,
              V.a
            )),
            e["ɵdid"](
              48,
              7520256,
              null,
              9,
              T.c,
              [
                e.ElementRef,
                e.ChangeDetectorRef,
                [2, G.j],
                [2, U.b],
                [2, T.a],
                K.a,
                e.NgZone,
                [2, g.a],
              ],
              null,
              null
            ),
            e["ɵqud"](603979776, 10, { _controlNonStatic: 0 }),
            e["ɵqud"](335544320, 11, { _controlStatic: 0 }),
            e["ɵqud"](603979776, 12, { _labelChildNonStatic: 0 }),
            e["ɵqud"](335544320, 13, { _labelChildStatic: 0 }),
            e["ɵqud"](603979776, 14, { _placeholderChild: 0 }),
            e["ɵqud"](603979776, 15, { _errorChildren: 1 }),
            e["ɵqud"](603979776, 16, { _hintChildren: 1 }),
            e["ɵqud"](603979776, 17, { _prefixChildren: 1 }),
            e["ɵqud"](603979776, 18, { _suffixChildren: 1 }),
            (l()(),
            e["ɵeld"](
              58,
              0,
              null,
              1,
              8,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
                ["type", "password"],
              ],
              [
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [1, "readonly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, o) {
                var t = !0;
                return (
                  "input" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 59)._handleInput(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 59).onTouched() && t),
                  "compositionstart" === n &&
                    (t = !1 !== e["ɵnov"](l, 59)._compositionStart() && t),
                  "compositionend" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 59)._compositionEnd(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 63)._focusChanged(!1) && t),
                  "focus" === n &&
                    (t = !1 !== e["ɵnov"](l, 63)._focusChanged(!0) && t),
                  "input" === n &&
                    (t = !1 !== e["ɵnov"](l, 63)._onInput() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              59,
              16384,
              null,
              0,
              O.DefaultValueAccessor,
              [e.Renderer2, e.ElementRef, [2, O.COMPOSITION_BUFFER_MODE]],
              null,
              null
            ),
            e["ɵprd"](
              1024,
              null,
              O.NG_VALUE_ACCESSOR,
              function (l) {
                return [l];
              },
              [O.DefaultValueAccessor]
            ),
            e["ɵdid"](
              61,
              540672,
              null,
              0,
              O.FormControlDirective,
              [
                [8, null],
                [8, null],
                [6, O.NG_VALUE_ACCESSOR],
                [2, O["ɵangular_packages_forms_forms_q"]],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.NgControl, null, [O.FormControlDirective]),
            e["ɵdid"](
              63,
              999424,
              null,
              0,
              B.b,
              [
                e.ElementRef,
                K.a,
                [6, O.NgControl],
                [2, O.NgForm],
                [2, O.FormGroupDirective],
                G.d,
                [8, null],
                Z.a,
                e.NgZone,
              ],
              { placeholder: [0, "placeholder"], type: [1, "type"] },
              null
            ),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            e["ɵdid"](
              65,
              16384,
              null,
              0,
              O.NgControlStatus,
              [[4, O.NgControl]],
              null,
              null
            ),
            e["ɵprd"](
              2048,
              [
                [10, 4],
                [11, 4],
              ],
              T.d,
              null,
              [B.b]
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, jl)),
            e["ɵdid"](
              68,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              69,
              0,
              null,
              null,
              9,
              "div",
              [
                ["fxFlex", "100"],
                ["fxFlex.gt-sm", "100"],
                ["fxFlex.gt-xs", "100"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              70,
              671744,
              null,
              0,
              M.b,
              [e.ElementRef, P.j, P.e, M.h, P.f],
              {
                fxFlex: [0, "fxFlex"],
                "fxFlex.gt-xs": [1, "fxFlex.gt-xs"],
                "fxFlex.gt-sm": [2, "fxFlex.gt-sm"],
              },
              null
            ),
            (l()(),
            e["ɵeld"](
              71,
              0,
              null,
              null,
              7,
              "mat-checkbox",
              [["class", "font-14 checkbox-wrapped mat-checkbox"]],
              [
                [8, "id", 0],
                [1, "tabindex", 0],
                [2, "mat-checkbox-indeterminate", null],
                [2, "mat-checkbox-checked", null],
                [2, "mat-checkbox-disabled", null],
                [2, "mat-checkbox-label-before", null],
                [2, "_mat-animation-noopable", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              null,
              null,
              Rl.b,
              Rl.a
            )),
            e["ɵdid"](
              72,
              8568832,
              null,
              0,
              kl.b,
              [
                e.ElementRef,
                e.ChangeDetectorRef,
                p.h,
                e.NgZone,
                [8, null],
                [2, kl.a],
                [2, g.a],
              ],
              null,
              null
            ),
            e["ɵprd"](
              1024,
              null,
              O.NG_VALUE_ACCESSOR,
              function (l) {
                return [l];
              },
              [kl.b]
            ),
            e["ɵdid"](
              74,
              540672,
              null,
              0,
              O.FormControlDirective,
              [
                [8, null],
                [8, null],
                [6, O.NG_VALUE_ACCESSOR],
                [2, O["ɵangular_packages_forms_forms_q"]],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.NgControl, null, [O.FormControlDirective]),
            e["ɵdid"](
              76,
              16384,
              null,
              0,
              O.NgControlStatus,
              [[4, O.NgControl]],
              null,
              null
            ),
            (l()(), e["ɵted"](77, 0, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              79,
              0,
              null,
              null,
              8,
              "div",
              [
                ["fxFlex", "100"],
                ["fxFlex.gt-sm", "100"],
                ["fxFlex.gt-xs", "100"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              80,
              671744,
              null,
              0,
              M.b,
              [e.ElementRef, P.j, P.e, M.h, P.f],
              {
                fxFlex: [0, "fxFlex"],
                "fxFlex.gt-xs": [1, "fxFlex.gt-xs"],
                "fxFlex.gt-sm": [2, "fxFlex.gt-sm"],
              },
              null
            ),
            (l()(),
            e["ɵeld"](
              81,
              0,
              null,
              null,
              6,
              "p",
              [["class", "text-muted"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](82, null, [" ", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              84,
              0,
              null,
              null,
              3,
              "a",
              [
                ["class", "link text-info"],
                ["routerLink", "/oferta"],
              ],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 85).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              85,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            (l()(), e["ɵted"](86, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              88,
              0,
              null,
              null,
              3,
              "button",
              [
                ["class", "btn-block btn-lg m-t-20 m-b-20"],
                ["color", "primary"],
                ["mat-raised-button", ""],
                ["type", "submit"],
              ],
              [
                [1, "disabled", 0],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              s.d,
              s.b
            )),
            e["ɵdid"](
              89,
              180224,
              null,
              0,
              f.b,
              [e.ElementRef, p.h, [2, g.a]],
              { disabled: [0, "disabled"], color: [1, "color"] },
              null
            ),
            (l()(), e["ɵted"](90, 0, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              92,
              0,
              null,
              null,
              9,
              "div",
              [
                ["class", "text-center"],
                ["fxFlex", "100"],
                ["fxFlex.gt-sm", "100"],
                ["fxFlex.gt-xs", "100"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              93,
              671744,
              null,
              0,
              M.b,
              [e.ElementRef, P.j, P.e, M.h, P.f],
              {
                fxFlex: [0, "fxFlex"],
                "fxFlex.gt-xs": [1, "fxFlex.gt-xs"],
                "fxFlex.gt-sm": [2, "fxFlex.gt-sm"],
              },
              null
            ),
            (l()(),
            e["ɵeld"](
              94,
              0,
              null,
              null,
              7,
              "span",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](95, null, ["", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              97,
              0,
              null,
              null,
              4,
              "a",
              [["class", "link text-info"]],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 98).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              98,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            e["ɵpad"](99, 1),
            (l()(), e["ɵted"](100, null, [" ", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          function (l, n) {
            var o = n.component;
            l(n, 8, 0, o.form),
              l(n, 13, 0, "/"),
              l(n, 19, 0, "column"),
              l(n, 21, 0, "100", "100", "100"),
              l(n, 36, 0, o.form.controls.email),
              l(n, 38, 0, "Email", "email"),
              l(
                n,
                42,
                0,
                o.form.controls.email.hasError("required") &&
                  o.form.controls.email.touched
              ),
              l(
                n,
                44,
                0,
                (null == o.form.controls.email.errors
                  ? null
                  : o.form.controls.email.errors.email) &&
                  o.form.controls.email.touched
              ),
              l(n, 46, 0, "100", "100", "100"),
              l(n, 61, 0, o.form.controls.password),
              l(
                n,
                63,
                0,
                e["ɵinlineInterpolate"](
                  1,
                  "",
                  e["ɵunv"](
                    n,
                    63,
                    0,
                    e["ɵnov"](n, 64).transform("Registration.Password.label")
                  ),
                  ""
                ),
                "password"
              ),
              l(
                n,
                68,
                0,
                o.form.controls.password.hasError("required") &&
                  o.form.controls.password.touched
              ),
              l(n, 70, 0, "100", "100", "100"),
              l(n, 74, 0, o.form.controls.sendMail),
              l(n, 80, 0, "100", "100", "100"),
              l(n, 85, 0, "/oferta"),
              l(n, 89, 0, !o.form.valid, "primary"),
              l(n, 93, 0, "100", "100", "100");
            var t = l(n, 99, 0, "/login.html");
            l(n, 98, 0, t);
          },
          function (l, n) {
            l(n, 2, 0, "NoopAnimations" === e["ɵnov"](n, 3)._animationMode),
              l(
                n,
                6,
                0,
                e["ɵnov"](n, 10).ngClassUntouched,
                e["ɵnov"](n, 10).ngClassTouched,
                e["ɵnov"](n, 10).ngClassPristine,
                e["ɵnov"](n, 10).ngClassDirty,
                e["ɵnov"](n, 10).ngClassValid,
                e["ɵnov"](n, 10).ngClassInvalid,
                e["ɵnov"](n, 10).ngClassPending
              ),
              l(n, 12, 0, e["ɵnov"](n, 13).target, e["ɵnov"](n, 13).href),
              l(
                n,
                16,
                0,
                e["ɵunv"](
                  n,
                  16,
                  0,
                  e["ɵnov"](n, 17).transform("Registration.title")
                )
              ),
              l(n, 22, 1, [
                "standard" == e["ɵnov"](n, 23).appearance,
                "fill" == e["ɵnov"](n, 23).appearance,
                "outline" == e["ɵnov"](n, 23).appearance,
                "legacy" == e["ɵnov"](n, 23).appearance,
                e["ɵnov"](n, 23)._control.errorState,
                e["ɵnov"](n, 23)._canLabelFloat,
                e["ɵnov"](n, 23)._shouldLabelFloat(),
                e["ɵnov"](n, 23)._hasFloatingLabel(),
                e["ɵnov"](n, 23)._hideControlPlaceholder(),
                e["ɵnov"](n, 23)._control.disabled,
                e["ɵnov"](n, 23)._control.autofilled,
                e["ɵnov"](n, 23)._control.focused,
                "accent" == e["ɵnov"](n, 23).color,
                "warn" == e["ɵnov"](n, 23).color,
                e["ɵnov"](n, 23)._shouldForward("untouched"),
                e["ɵnov"](n, 23)._shouldForward("touched"),
                e["ɵnov"](n, 23)._shouldForward("pristine"),
                e["ɵnov"](n, 23)._shouldForward("dirty"),
                e["ɵnov"](n, 23)._shouldForward("valid"),
                e["ɵnov"](n, 23)._shouldForward("invalid"),
                e["ɵnov"](n, 23)._shouldForward("pending"),
                !e["ɵnov"](n, 23)._animationsEnabled,
              ]),
              l(n, 33, 1, [
                e["ɵnov"](n, 38)._isServer,
                e["ɵnov"](n, 38).id,
                e["ɵnov"](n, 38).placeholder,
                e["ɵnov"](n, 38).disabled,
                e["ɵnov"](n, 38).required,
                (e["ɵnov"](n, 38).readonly &&
                  !e["ɵnov"](n, 38)._isNativeSelect) ||
                  null,
                e["ɵnov"](n, 38)._ariaDescribedby || null,
                e["ɵnov"](n, 38).errorState,
                e["ɵnov"](n, 38).required.toString(),
                e["ɵnov"](n, 39).ngClassUntouched,
                e["ɵnov"](n, 39).ngClassTouched,
                e["ɵnov"](n, 39).ngClassPristine,
                e["ɵnov"](n, 39).ngClassDirty,
                e["ɵnov"](n, 39).ngClassValid,
                e["ɵnov"](n, 39).ngClassInvalid,
                e["ɵnov"](n, 39).ngClassPending,
              ]),
              l(n, 47, 1, [
                "standard" == e["ɵnov"](n, 48).appearance,
                "fill" == e["ɵnov"](n, 48).appearance,
                "outline" == e["ɵnov"](n, 48).appearance,
                "legacy" == e["ɵnov"](n, 48).appearance,
                e["ɵnov"](n, 48)._control.errorState,
                e["ɵnov"](n, 48)._canLabelFloat,
                e["ɵnov"](n, 48)._shouldLabelFloat(),
                e["ɵnov"](n, 48)._hasFloatingLabel(),
                e["ɵnov"](n, 48)._hideControlPlaceholder(),
                e["ɵnov"](n, 48)._control.disabled,
                e["ɵnov"](n, 48)._control.autofilled,
                e["ɵnov"](n, 48)._control.focused,
                "accent" == e["ɵnov"](n, 48).color,
                "warn" == e["ɵnov"](n, 48).color,
                e["ɵnov"](n, 48)._shouldForward("untouched"),
                e["ɵnov"](n, 48)._shouldForward("touched"),
                e["ɵnov"](n, 48)._shouldForward("pristine"),
                e["ɵnov"](n, 48)._shouldForward("dirty"),
                e["ɵnov"](n, 48)._shouldForward("valid"),
                e["ɵnov"](n, 48)._shouldForward("invalid"),
                e["ɵnov"](n, 48)._shouldForward("pending"),
                !e["ɵnov"](n, 48)._animationsEnabled,
              ]),
              l(n, 58, 1, [
                e["ɵnov"](n, 63)._isServer,
                e["ɵnov"](n, 63).id,
                e["ɵnov"](n, 63).placeholder,
                e["ɵnov"](n, 63).disabled,
                e["ɵnov"](n, 63).required,
                (e["ɵnov"](n, 63).readonly &&
                  !e["ɵnov"](n, 63)._isNativeSelect) ||
                  null,
                e["ɵnov"](n, 63)._ariaDescribedby || null,
                e["ɵnov"](n, 63).errorState,
                e["ɵnov"](n, 63).required.toString(),
                e["ɵnov"](n, 65).ngClassUntouched,
                e["ɵnov"](n, 65).ngClassTouched,
                e["ɵnov"](n, 65).ngClassPristine,
                e["ɵnov"](n, 65).ngClassDirty,
                e["ɵnov"](n, 65).ngClassValid,
                e["ɵnov"](n, 65).ngClassInvalid,
                e["ɵnov"](n, 65).ngClassPending,
              ]),
              l(n, 71, 1, [
                e["ɵnov"](n, 72).id,
                null,
                e["ɵnov"](n, 72).indeterminate,
                e["ɵnov"](n, 72).checked,
                e["ɵnov"](n, 72).disabled,
                "before" == e["ɵnov"](n, 72).labelPosition,
                "NoopAnimations" === e["ɵnov"](n, 72)._animationMode,
                e["ɵnov"](n, 76).ngClassUntouched,
                e["ɵnov"](n, 76).ngClassTouched,
                e["ɵnov"](n, 76).ngClassPristine,
                e["ɵnov"](n, 76).ngClassDirty,
                e["ɵnov"](n, 76).ngClassValid,
                e["ɵnov"](n, 76).ngClassInvalid,
                e["ɵnov"](n, 76).ngClassPending,
              ]),
              l(
                n,
                77,
                0,
                e["ɵunv"](
                  n,
                  77,
                  0,
                  e["ɵnov"](n, 78).transform("Registration.agree")
                )
              ),
              l(
                n,
                82,
                0,
                e["ɵunv"](
                  n,
                  82,
                  0,
                  e["ɵnov"](n, 83).transform("Registration.Oferta.text")
                )
              ),
              l(n, 84, 0, e["ɵnov"](n, 85).target, e["ɵnov"](n, 85).href),
              l(
                n,
                86,
                0,
                e["ɵunv"](
                  n,
                  86,
                  0,
                  e["ɵnov"](n, 87).transform("Registration.Oferta.button")
                )
              ),
              l(
                n,
                88,
                0,
                e["ɵnov"](n, 89).disabled || null,
                "NoopAnimations" === e["ɵnov"](n, 89)._animationMode
              ),
              l(
                n,
                90,
                0,
                e["ɵunv"](
                  n,
                  90,
                  0,
                  e["ɵnov"](n, 91).transform("Registration.Button.signUp")
                )
              ),
              l(
                n,
                95,
                0,
                e["ɵunv"](
                  n,
                  95,
                  0,
                  e["ɵnov"](n, 96).transform("Registration.Button.haveAccount")
                )
              ),
              l(n, 97, 0, e["ɵnov"](n, 98).target, e["ɵnov"](n, 98).href),
              l(
                n,
                100,
                0,
                e["ɵunv"](
                  n,
                  100,
                  0,
                  e["ɵnov"](n, 101).transform("Registration.Button.signIn")
                )
              );
          }
        );
      }
      function Ml(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "app-register",
              [],
              null,
              null,
              null,
              Ol,
              ql
            )),
            e["ɵdid"](
              1,
              245760,
              null,
              0,
              Ll,
              [O.FormBuilder, w.a, c.o, S.j, dl.a, El.a, sl.a, Il.a],
              null,
              null
            ),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Pl = e["ɵccf"]("app-register", Ll, Ml, {}, {}, []),
        Vl = (function () {
          function l(l, n, o, e, t) {
            (this.auth = l),
              (this.route = n),
              (this.router = o),
              (this.fb = e),
              (this.errorsService = t);
          }
          return (
            (l.prototype.ngOnInit = function () {
              var l = this;
              (this.form = this.fb.group({
                password: [null, O.Validators.compose([O.Validators.required])],
                passwordconfirm: [
                  null,
                  O.Validators.compose([O.Validators.required]),
                ],
              })),
                this.auth.isAuthenticated() && this.router.navigate(["/"]),
                this.route.queryParamMap.subscribe(function (n) {
                  n && n.get("key") && n.get("id")
                    ? l.auth
                        .checkConfirm(+n.get("id"), n.get("key"))
                        .then(function (l) {})
                        .catch(function () {
                          l.router.navigate(["/"]);
                        })
                    : l.router.navigate(["/"]);
                });
            }),
            (l.prototype.passChange = function () {
              var l = this;
              this.auth
                .createNewLogin(
                  +this.route.snapshot.queryParamMap.get("id"),
                  this.route.snapshot.queryParamMap.get("key"),
                  this.form.controls.password.value,
                  this.form.controls.passwordconfirm.value
                )
                .then(function () {
                  l.router.navigate(["/", ""]);
                })
                .catch(function (n) {
                  n.code === dl.b.updateNewAccountError
                    ? l.router.navigate(["/"])
                    : l.errorsService.displaySnackBar(n.code);
                });
            }),
            (l.prototype.onSubmit = function () {
              this.passChange();
            }),
            l
          );
        })(),
        Tl = e["ɵcrt"]({
          encapsulation: 0,
          styles: [
            [
              ".bgMain[_ngcontent-%COMP%]{background-image:url(/assets/images/rabbit.png);background-color:#00bcd4}.confirmnewlogin[_ngcontent-%COMP%]{height:100vh;display:flex;background-size:cover;align-items:center}h4[_ngcontent-%COMP%]{color:#00498f}.confirmnewlogin-box[_ngcontent-%COMP%]{min-width:300px;max-width:450px;margin:0 auto;vertical-align:middle}",
            ],
          ],
          data: {},
        });
      function Gl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform(
                  "ConfirmEmailAuth.Passwords.errors.required"
                )
              )
            );
          }
        );
      }
      function Ul(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              2,
              "small",
              [["class", "text-danger support-text"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](1, null, ["", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          null,
          function (l, n) {
            l(
              n,
              1,
              0,
              e["ɵunv"](
                n,
                1,
                0,
                e["ɵnov"](n, 2).transform(
                  "ConfirmEmailAuth.Passwords.errors.required"
                )
              )
            );
          }
        );
      }
      function Kl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              69,
              "div",
              [["class", "confirmnewlogin bgMain"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              1,
              0,
              null,
              null,
              68,
              "div",
              [["class", "confirmnewlogin-box"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              2,
              0,
              null,
              null,
              67,
              "mat-card",
              [["class", "mat-card"]],
              [[2, "_mat-animation-noopable", null]],
              null,
              null,
              R.d,
              R.a
            )),
            e["ɵdid"](3, 49152, null, 0, k.a, [[2, g.a]], null, null),
            (l()(),
            e["ɵeld"](
              4,
              0,
              null,
              0,
              65,
              "mat-card-content",
              [["class", "mat-card-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](5, 16384, null, 0, k.d, [], null, null),
            (l()(),
            e["ɵeld"](
              6,
              0,
              null,
              null,
              63,
              "form",
              [["novalidate", ""]],
              [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "ngSubmit"],
                [null, "submit"],
                [null, "reset"],
              ],
              function (l, n, o) {
                var t = !0,
                  u = l.component;
                return (
                  "submit" === n &&
                    (t = !1 !== e["ɵnov"](l, 8).onSubmit(o) && t),
                  "reset" === n && (t = !1 !== e["ɵnov"](l, 8).onReset() && t),
                  "ngSubmit" === n && (t = !1 !== u.onSubmit() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              7,
              16384,
              null,
              0,
              O["ɵangular_packages_forms_forms_z"],
              [],
              null,
              null
            ),
            e["ɵdid"](
              8,
              540672,
              null,
              0,
              O.FormGroupDirective,
              [
                [8, null],
                [8, null],
              ],
              { form: [0, "form"] },
              { ngSubmit: "ngSubmit" }
            ),
            e["ɵprd"](2048, null, O.ControlContainer, null, [
              O.FormGroupDirective,
            ]),
            e["ɵdid"](
              10,
              16384,
              null,
              0,
              O.NgControlStatusGroup,
              [[4, O.ControlContainer]],
              null,
              null
            ),
            (l()(),
            e["ɵeld"](
              11,
              0,
              null,
              null,
              3,
              "div",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              12,
              0,
              null,
              null,
              2,
              "a",
              [["routerLink", "/"]],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 13).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              13,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              14,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "homepage"],
                ["src", "/assets/images/logo-cyan.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              15,
              0,
              null,
              null,
              54,
              "div",
              [["fxLayout", "column"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              16,
              671744,
              null,
              0,
              M.d,
              [e.ElementRef, P.j, [2, M.k], P.f],
              { fxLayout: [0, "fxLayout"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              17,
              0,
              null,
              null,
              2,
              "p",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](18, null, [" ", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              20,
              0,
              null,
              null,
              22,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              21,
              0,
              null,
              null,
              19,
              "mat-form-field",
              [["class", "mat-form-field"]],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-has-label", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              V.b,
              V.a
            )),
            e["ɵdid"](
              22,
              7520256,
              null,
              9,
              T.c,
              [
                e.ElementRef,
                e.ChangeDetectorRef,
                [2, G.j],
                [2, U.b],
                [2, T.a],
                K.a,
                e.NgZone,
                [2, g.a],
              ],
              null,
              null
            ),
            e["ɵqud"](603979776, 1, { _controlNonStatic: 0 }),
            e["ɵqud"](335544320, 2, { _controlStatic: 0 }),
            e["ɵqud"](603979776, 3, { _labelChildNonStatic: 0 }),
            e["ɵqud"](335544320, 4, { _labelChildStatic: 0 }),
            e["ɵqud"](603979776, 5, { _placeholderChild: 0 }),
            e["ɵqud"](603979776, 6, { _errorChildren: 1 }),
            e["ɵqud"](603979776, 7, { _hintChildren: 1 }),
            e["ɵqud"](603979776, 8, { _prefixChildren: 1 }),
            e["ɵqud"](603979776, 9, { _suffixChildren: 1 }),
            (l()(),
            e["ɵeld"](
              32,
              0,
              null,
              1,
              8,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
                ["type", "password"],
              ],
              [
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [1, "readonly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, o) {
                var t = !0;
                return (
                  "input" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 33)._handleInput(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 33).onTouched() && t),
                  "compositionstart" === n &&
                    (t = !1 !== e["ɵnov"](l, 33)._compositionStart() && t),
                  "compositionend" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 33)._compositionEnd(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 37)._focusChanged(!1) && t),
                  "focus" === n &&
                    (t = !1 !== e["ɵnov"](l, 37)._focusChanged(!0) && t),
                  "input" === n &&
                    (t = !1 !== e["ɵnov"](l, 37)._onInput() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              33,
              16384,
              null,
              0,
              O.DefaultValueAccessor,
              [e.Renderer2, e.ElementRef, [2, O.COMPOSITION_BUFFER_MODE]],
              null,
              null
            ),
            e["ɵprd"](
              1024,
              null,
              O.NG_VALUE_ACCESSOR,
              function (l) {
                return [l];
              },
              [O.DefaultValueAccessor]
            ),
            e["ɵdid"](
              35,
              540672,
              null,
              0,
              O.FormControlDirective,
              [
                [8, null],
                [8, null],
                [6, O.NG_VALUE_ACCESSOR],
                [2, O["ɵangular_packages_forms_forms_q"]],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.NgControl, null, [O.FormControlDirective]),
            e["ɵdid"](
              37,
              999424,
              null,
              0,
              B.b,
              [
                e.ElementRef,
                K.a,
                [6, O.NgControl],
                [2, O.NgForm],
                [2, O.FormGroupDirective],
                G.d,
                [8, null],
                Z.a,
                e.NgZone,
              ],
              { placeholder: [0, "placeholder"], type: [1, "type"] },
              null
            ),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            e["ɵdid"](
              39,
              16384,
              null,
              0,
              O.NgControlStatus,
              [[4, O.NgControl]],
              null,
              null
            ),
            e["ɵprd"](
              2048,
              [
                [1, 4],
                [2, 4],
              ],
              T.d,
              null,
              [B.b]
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, Gl)),
            e["ɵdid"](
              42,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              43,
              0,
              null,
              null,
              22,
              "div",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              44,
              0,
              null,
              null,
              19,
              "mat-form-field",
              [["class", "mat-form-field"]],
              [
                [2, "mat-form-field-appearance-standard", null],
                [2, "mat-form-field-appearance-fill", null],
                [2, "mat-form-field-appearance-outline", null],
                [2, "mat-form-field-appearance-legacy", null],
                [2, "mat-form-field-invalid", null],
                [2, "mat-form-field-can-float", null],
                [2, "mat-form-field-should-float", null],
                [2, "mat-form-field-has-label", null],
                [2, "mat-form-field-hide-placeholder", null],
                [2, "mat-form-field-disabled", null],
                [2, "mat-form-field-autofilled", null],
                [2, "mat-focused", null],
                [2, "mat-accent", null],
                [2, "mat-warn", null],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              V.b,
              V.a
            )),
            e["ɵdid"](
              45,
              7520256,
              null,
              9,
              T.c,
              [
                e.ElementRef,
                e.ChangeDetectorRef,
                [2, G.j],
                [2, U.b],
                [2, T.a],
                K.a,
                e.NgZone,
                [2, g.a],
              ],
              null,
              null
            ),
            e["ɵqud"](603979776, 10, { _controlNonStatic: 0 }),
            e["ɵqud"](335544320, 11, { _controlStatic: 0 }),
            e["ɵqud"](603979776, 12, { _labelChildNonStatic: 0 }),
            e["ɵqud"](335544320, 13, { _labelChildStatic: 0 }),
            e["ɵqud"](603979776, 14, { _placeholderChild: 0 }),
            e["ɵqud"](603979776, 15, { _errorChildren: 1 }),
            e["ɵqud"](603979776, 16, { _hintChildren: 1 }),
            e["ɵqud"](603979776, 17, { _prefixChildren: 1 }),
            e["ɵqud"](603979776, 18, { _suffixChildren: 1 }),
            (l()(),
            e["ɵeld"](
              55,
              0,
              null,
              1,
              8,
              "input",
              [
                ["class", "mat-input-element mat-form-field-autofill-control"],
                ["matInput", ""],
                ["type", "password"],
              ],
              [
                [2, "mat-input-server", null],
                [1, "id", 0],
                [1, "placeholder", 0],
                [8, "disabled", 0],
                [8, "required", 0],
                [1, "readonly", 0],
                [1, "aria-describedby", 0],
                [1, "aria-invalid", 0],
                [1, "aria-required", 0],
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null],
              ],
              [
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"],
                [null, "focus"],
              ],
              function (l, n, o) {
                var t = !0;
                return (
                  "input" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 56)._handleInput(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 56).onTouched() && t),
                  "compositionstart" === n &&
                    (t = !1 !== e["ɵnov"](l, 56)._compositionStart() && t),
                  "compositionend" === n &&
                    (t =
                      !1 !== e["ɵnov"](l, 56)._compositionEnd(o.target.value) &&
                      t),
                  "blur" === n &&
                    (t = !1 !== e["ɵnov"](l, 60)._focusChanged(!1) && t),
                  "focus" === n &&
                    (t = !1 !== e["ɵnov"](l, 60)._focusChanged(!0) && t),
                  "input" === n &&
                    (t = !1 !== e["ɵnov"](l, 60)._onInput() && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              56,
              16384,
              null,
              0,
              O.DefaultValueAccessor,
              [e.Renderer2, e.ElementRef, [2, O.COMPOSITION_BUFFER_MODE]],
              null,
              null
            ),
            e["ɵprd"](
              1024,
              null,
              O.NG_VALUE_ACCESSOR,
              function (l) {
                return [l];
              },
              [O.DefaultValueAccessor]
            ),
            e["ɵdid"](
              58,
              540672,
              null,
              0,
              O.FormControlDirective,
              [
                [8, null],
                [8, null],
                [6, O.NG_VALUE_ACCESSOR],
                [2, O["ɵangular_packages_forms_forms_q"]],
              ],
              { form: [0, "form"] },
              null
            ),
            e["ɵprd"](2048, null, O.NgControl, null, [O.FormControlDirective]),
            e["ɵdid"](
              60,
              999424,
              null,
              0,
              B.b,
              [
                e.ElementRef,
                K.a,
                [6, O.NgControl],
                [2, O.NgForm],
                [2, O.FormGroupDirective],
                G.d,
                [8, null],
                Z.a,
                e.NgZone,
              ],
              { placeholder: [0, "placeholder"], type: [1, "type"] },
              null
            ),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            e["ɵdid"](
              62,
              16384,
              null,
              0,
              O.NgControlStatus,
              [[4, O.NgControl]],
              null,
              null
            ),
            e["ɵprd"](
              2048,
              [
                [10, 4],
                [11, 4],
              ],
              T.d,
              null,
              [B.b]
            ),
            (l()(), e["ɵand"](16777216, null, null, 1, null, Ul)),
            e["ɵdid"](
              65,
              16384,
              null,
              0,
              m.NgIf,
              [e.ViewContainerRef, e.TemplateRef],
              { ngIf: [0, "ngIf"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              66,
              0,
              null,
              null,
              3,
              "button",
              [
                ["class", "btn-block btn-lg m-t-20 m-b-20"],
                ["color", "primary"],
                ["mat-raised-button", ""],
                ["type", "submit"],
              ],
              [
                [1, "disabled", 0],
                [2, "_mat-animation-noopable", null],
              ],
              null,
              null,
              s.d,
              s.b
            )),
            e["ɵdid"](
              67,
              180224,
              null,
              0,
              f.b,
              [e.ElementRef, p.h, [2, g.a]],
              { disabled: [0, "disabled"], color: [1, "color"] },
              null
            ),
            (l()(), e["ɵted"](68, 0, [" ", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          function (l, n) {
            var o = n.component;
            l(n, 8, 0, o.form),
              l(n, 13, 0, "/"),
              l(n, 16, 0, "column"),
              l(n, 35, 0, o.form.controls.password),
              l(
                n,
                37,
                0,
                e["ɵinlineInterpolate"](
                  1,
                  "",
                  e["ɵunv"](
                    n,
                    37,
                    0,
                    e["ɵnov"](n, 38).transform(
                      "ConfirmEmailAuth.Passwords.controls.password"
                    )
                  ),
                  ""
                ),
                "password"
              ),
              l(
                n,
                42,
                0,
                o.form.controls.password.hasError("required") &&
                  o.form.controls.password.touched
              ),
              l(n, 58, 0, o.form.controls.passwordconfirm),
              l(
                n,
                60,
                0,
                e["ɵinlineInterpolate"](
                  1,
                  "",
                  e["ɵunv"](
                    n,
                    60,
                    0,
                    e["ɵnov"](n, 61).transform(
                      "ConfirmEmailAuth.Passwords.controls.passwordconfirm"
                    )
                  ),
                  ""
                ),
                "password"
              ),
              l(
                n,
                65,
                0,
                o.form.controls.passwordconfirm.hasError("required") &&
                  o.form.controls.passwordconfirm.touched
              ),
              l(n, 67, 0, !o.form.valid, "primary");
          },
          function (l, n) {
            l(n, 2, 0, "NoopAnimations" === e["ɵnov"](n, 3)._animationMode),
              l(
                n,
                6,
                0,
                e["ɵnov"](n, 10).ngClassUntouched,
                e["ɵnov"](n, 10).ngClassTouched,
                e["ɵnov"](n, 10).ngClassPristine,
                e["ɵnov"](n, 10).ngClassDirty,
                e["ɵnov"](n, 10).ngClassValid,
                e["ɵnov"](n, 10).ngClassInvalid,
                e["ɵnov"](n, 10).ngClassPending
              ),
              l(n, 12, 0, e["ɵnov"](n, 13).target, e["ɵnov"](n, 13).href),
              l(
                n,
                18,
                0,
                e["ɵunv"](
                  n,
                  18,
                  0,
                  e["ɵnov"](n, 19).transform("ConfirmEmailAuth.title")
                )
              ),
              l(n, 21, 1, [
                "standard" == e["ɵnov"](n, 22).appearance,
                "fill" == e["ɵnov"](n, 22).appearance,
                "outline" == e["ɵnov"](n, 22).appearance,
                "legacy" == e["ɵnov"](n, 22).appearance,
                e["ɵnov"](n, 22)._control.errorState,
                e["ɵnov"](n, 22)._canLabelFloat,
                e["ɵnov"](n, 22)._shouldLabelFloat(),
                e["ɵnov"](n, 22)._hasFloatingLabel(),
                e["ɵnov"](n, 22)._hideControlPlaceholder(),
                e["ɵnov"](n, 22)._control.disabled,
                e["ɵnov"](n, 22)._control.autofilled,
                e["ɵnov"](n, 22)._control.focused,
                "accent" == e["ɵnov"](n, 22).color,
                "warn" == e["ɵnov"](n, 22).color,
                e["ɵnov"](n, 22)._shouldForward("untouched"),
                e["ɵnov"](n, 22)._shouldForward("touched"),
                e["ɵnov"](n, 22)._shouldForward("pristine"),
                e["ɵnov"](n, 22)._shouldForward("dirty"),
                e["ɵnov"](n, 22)._shouldForward("valid"),
                e["ɵnov"](n, 22)._shouldForward("invalid"),
                e["ɵnov"](n, 22)._shouldForward("pending"),
                !e["ɵnov"](n, 22)._animationsEnabled,
              ]),
              l(n, 32, 1, [
                e["ɵnov"](n, 37)._isServer,
                e["ɵnov"](n, 37).id,
                e["ɵnov"](n, 37).placeholder,
                e["ɵnov"](n, 37).disabled,
                e["ɵnov"](n, 37).required,
                (e["ɵnov"](n, 37).readonly &&
                  !e["ɵnov"](n, 37)._isNativeSelect) ||
                  null,
                e["ɵnov"](n, 37)._ariaDescribedby || null,
                e["ɵnov"](n, 37).errorState,
                e["ɵnov"](n, 37).required.toString(),
                e["ɵnov"](n, 39).ngClassUntouched,
                e["ɵnov"](n, 39).ngClassTouched,
                e["ɵnov"](n, 39).ngClassPristine,
                e["ɵnov"](n, 39).ngClassDirty,
                e["ɵnov"](n, 39).ngClassValid,
                e["ɵnov"](n, 39).ngClassInvalid,
                e["ɵnov"](n, 39).ngClassPending,
              ]),
              l(n, 44, 1, [
                "standard" == e["ɵnov"](n, 45).appearance,
                "fill" == e["ɵnov"](n, 45).appearance,
                "outline" == e["ɵnov"](n, 45).appearance,
                "legacy" == e["ɵnov"](n, 45).appearance,
                e["ɵnov"](n, 45)._control.errorState,
                e["ɵnov"](n, 45)._canLabelFloat,
                e["ɵnov"](n, 45)._shouldLabelFloat(),
                e["ɵnov"](n, 45)._hasFloatingLabel(),
                e["ɵnov"](n, 45)._hideControlPlaceholder(),
                e["ɵnov"](n, 45)._control.disabled,
                e["ɵnov"](n, 45)._control.autofilled,
                e["ɵnov"](n, 45)._control.focused,
                "accent" == e["ɵnov"](n, 45).color,
                "warn" == e["ɵnov"](n, 45).color,
                e["ɵnov"](n, 45)._shouldForward("untouched"),
                e["ɵnov"](n, 45)._shouldForward("touched"),
                e["ɵnov"](n, 45)._shouldForward("pristine"),
                e["ɵnov"](n, 45)._shouldForward("dirty"),
                e["ɵnov"](n, 45)._shouldForward("valid"),
                e["ɵnov"](n, 45)._shouldForward("invalid"),
                e["ɵnov"](n, 45)._shouldForward("pending"),
                !e["ɵnov"](n, 45)._animationsEnabled,
              ]),
              l(n, 55, 1, [
                e["ɵnov"](n, 60)._isServer,
                e["ɵnov"](n, 60).id,
                e["ɵnov"](n, 60).placeholder,
                e["ɵnov"](n, 60).disabled,
                e["ɵnov"](n, 60).required,
                (e["ɵnov"](n, 60).readonly &&
                  !e["ɵnov"](n, 60)._isNativeSelect) ||
                  null,
                e["ɵnov"](n, 60)._ariaDescribedby || null,
                e["ɵnov"](n, 60).errorState,
                e["ɵnov"](n, 60).required.toString(),
                e["ɵnov"](n, 62).ngClassUntouched,
                e["ɵnov"](n, 62).ngClassTouched,
                e["ɵnov"](n, 62).ngClassPristine,
                e["ɵnov"](n, 62).ngClassDirty,
                e["ɵnov"](n, 62).ngClassValid,
                e["ɵnov"](n, 62).ngClassInvalid,
                e["ɵnov"](n, 62).ngClassPending,
              ]),
              l(
                n,
                66,
                0,
                e["ɵnov"](n, 67).disabled || null,
                "NoopAnimations" === e["ɵnov"](n, 67)._animationMode
              ),
              l(
                n,
                68,
                0,
                e["ɵunv"](
                  n,
                  68,
                  0,
                  e["ɵnov"](n, 69).transform("ConfirmEmailAuth.ChangePass")
                )
              );
          }
        );
      }
      function Bl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "app-confirmnewlogin",
              [],
              null,
              null,
              null,
              Kl,
              Tl
            )),
            e["ɵdid"](
              1,
              114688,
              null,
              0,
              Vl,
              [w.a, c.a, c.o, O.FormBuilder, dl.a],
              null,
              null
            ),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Zl = e["ɵccf"]("app-confirmnewlogin", Vl, Bl, {}, {}, []),
        zl = (function () {
          function l(l, n, o) {
            (this.auth = l), (this.route = n), (this.router = o);
          }
          return (
            (l.prototype.ngOnInit = function () {
              this.auth.isAuthenticated() && this.router.navigate(["/"]);
            }),
            l
          );
        })(),
        Yl = e["ɵcrt"]({
          encapsulation: 0,
          styles: [
            [
              ".bgMain[_ngcontent-%COMP%]{background-image:url(/assets/images/rabbit.png);background-color:#00bcd4}h4[_ngcontent-%COMP%]{color:#00498f}.accountmerge[_ngcontent-%COMP%]{height:100vh;display:flex;background-size:cover;align-items:center}.accountmerge-box[_ngcontent-%COMP%]{min-width:300px;max-width:450px;margin:0 auto;vertical-align:middle}.buttonAccountMerge[_ngcontent-%COMP%]{background-color:#1e88e5;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);width:250px;margin:20px auto}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover{color:#fff}",
            ],
          ],
          data: {},
        });
      function Jl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              29,
              "div",
              [["class", "accountmerge bgMain"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              1,
              0,
              null,
              null,
              28,
              "div",
              [["class", "accountmerge-box"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              2,
              0,
              null,
              null,
              27,
              "mat-card",
              [["class", "mat-card"]],
              [[2, "_mat-animation-noopable", null]],
              null,
              null,
              R.d,
              R.a
            )),
            e["ɵdid"](3, 49152, null, 0, k.a, [[2, g.a]], null, null),
            (l()(),
            e["ɵeld"](
              4,
              0,
              null,
              0,
              25,
              "mat-card-content",
              [["class", "mat-card-content"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](5, 16384, null, 0, k.d, [], null, null),
            (l()(),
            e["ɵeld"](
              6,
              0,
              null,
              null,
              3,
              "div",
              [["class", "text-center"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              7,
              0,
              null,
              null,
              2,
              "a",
              [["routerLink", "/"]],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 8).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              8,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              9,
              0,
              null,
              null,
              0,
              "img",
              [
                ["alt", "homepage"],
                ["src", "/assets/images/logo-cyan.svg"],
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              10,
              0,
              null,
              null,
              19,
              "div",
              [["fxLayout", "column"]],
              null,
              null,
              null,
              null,
              null
            )),
            e["ɵdid"](
              11,
              671744,
              null,
              0,
              M.d,
              [e.ElementRef, P.j, [2, M.k], P.f],
              { fxLayout: [0, "fxLayout"] },
              null
            ),
            (l()(),
            e["ɵeld"](
              12,
              0,
              null,
              null,
              2,
              "h4",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](13, null, [" ", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              15,
              0,
              null,
              null,
              2,
              "p",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](16, null, [" ", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              18,
              0,
              null,
              null,
              2,
              "p",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](19, null, [" ", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              21,
              0,
              null,
              null,
              2,
              "p",
              [],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(), e["ɵted"](22, null, [" ", " "])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
            (l()(),
            e["ɵeld"](
              24,
              0,
              null,
              null,
              5,
              "div",
              [["class", "m-t-20 m-b-20 buttonAccountMerge"]],
              null,
              null,
              null,
              null,
              null
            )),
            (l()(),
            e["ɵeld"](
              25,
              0,
              null,
              null,
              4,
              "a",
              [],
              [
                [1, "target", 0],
                [8, "href", 4],
              ],
              [[null, "click"]],
              function (l, n, o) {
                var t = !0;
                return (
                  "click" === n &&
                    (t =
                      !1 !==
                        e["ɵnov"](l, 26).onClick(
                          o.button,
                          o.ctrlKey,
                          o.metaKey,
                          o.shiftKey
                        ) && t),
                  t
                );
              },
              null,
              null
            )),
            e["ɵdid"](
              26,
              671744,
              null,
              0,
              c.r,
              [c.o, c.a, m.LocationStrategy],
              { routerLink: [0, "routerLink"] },
              null
            ),
            e["ɵpad"](27, 1),
            (l()(), e["ɵted"](28, null, ["", ""])),
            e["ɵpid"](131072, S.i, [S.j, e.ChangeDetectorRef]),
          ],
          function (l, n) {
            l(n, 8, 0, "/"), l(n, 11, 0, "column");
            var o = l(n, 27, 0, "/faqlogin");
            l(n, 26, 0, o);
          },
          function (l, n) {
            l(n, 2, 0, "NoopAnimations" === e["ɵnov"](n, 3)._animationMode),
              l(n, 7, 0, e["ɵnov"](n, 8).target, e["ɵnov"](n, 8).href),
              l(
                n,
                13,
                0,
                e["ɵunv"](
                  n,
                  13,
                  0,
                  e["ɵnov"](n, 14).transform("AccountMerge.title")
                )
              ),
              l(
                n,
                16,
                0,
                e["ɵunv"](
                  n,
                  16,
                  0,
                  e["ɵnov"](n, 17).transform("AccountMerge.description")
                )
              ),
              l(
                n,
                19,
                0,
                e["ɵunv"](
                  n,
                  19,
                  0,
                  e["ɵnov"](n, 20).transform("AccountMerge.description1")
                )
              ),
              l(
                n,
                22,
                0,
                e["ɵunv"](
                  n,
                  22,
                  0,
                  e["ɵnov"](n, 23).transform("AccountMerge.description2")
                )
              ),
              l(n, 25, 0, e["ɵnov"](n, 26).target, e["ɵnov"](n, 26).href),
              l(
                n,
                28,
                0,
                e["ɵunv"](
                  n,
                  28,
                  0,
                  e["ɵnov"](n, 29).transform("AccountMerge.button")
                )
              );
          }
        );
      }
      function Wl(l) {
        return e["ɵvid"](
          0,
          [
            (l()(),
            e["ɵeld"](
              0,
              0,
              null,
              null,
              1,
              "app-accountmerge",
              [],
              null,
              null,
              null,
              Jl,
              Yl
            )),
            e["ɵdid"](1, 114688, null, 0, zl, [w.a, c.a, c.o], null, null),
          ],
          function (l, n) {
            l(n, 1, 0);
          },
          null
        );
      }
      var Xl = e["ɵccf"]("app-accountmerge", zl, Wl, {}, {}, []),
        Ql = o("M2Lx"),
        Hl = o("t/Na"),
        $l = o("Jh4W"),
        ln = o("eDkP"),
        nn = o("4tE/"),
        on = o("o3x0"),
        en = o("jQLj"),
        tn = o("mVsa"),
        un = o("uGex"),
        an = o("v9Dh"),
        rn = o("ZYjt"),
        dn = o("4epT"),
        sn = o("OkvK"),
        cn = o("wmQ5"),
        mn = o("ZfEE"),
        fn = o("ADQ8"),
        pn = o("Pgsn"),
        gn = o("eSwi"),
        vn = o("T5bB"),
        hn = o("V6ex"),
        bn = o("SMsm"),
        _n = o("3pJQ"),
        Cn = o("V9q+"),
        xn = o("VqGk"),
        yn = o("4c35"),
        Fn = o("qAlS"),
        Sn = o("u7R8"),
        Rn = o("/dO6"),
        kn = o("y4qS"),
        wn = o("BHnd"),
        Nn = o("YhbO"),
        En = o("jlZm"),
        In = o("r43C"),
        Ln = o("LC5p"),
        qn = o("0/Q6"),
        An = o("Blfk"),
        Dn = o("9It4"),
        jn = o("Nsh5"),
        On = o("kWGw"),
        Mn = o("w+lc"),
        Pn = o("Lwpp"),
        Vn = o("6Wmm"),
        Tn = o("La40"),
        Gn = o("8mMr"),
        Un = o("onrN"),
        Kn = o("Z+Mw"),
        Bn = o("5rxC"),
        Zn = o("Axip"),
        zn = o("j8Ch"),
        Yn = o("Zseb"),
        Jn = o("PCNd"),
        Wn = o("YSh2");
      function Xn(l) {
        return l;
      }
      var Qn = { title: Xn("Error.notFound") },
        Hn = { title: Xn("Auth.Forgot.Confirm.title") },
        $n = { title: Xn("Auth.Forgot.title") },
        lo = { title: Xn("SignIn.title") },
        no = { title: Xn("SignIn.title") },
        oo = { title: Xn("SignIn.title") },
        eo = { title: Xn("SignIn.title") },
        to = { title: Xn("Registration.title") },
        uo = { title: Xn("ConfirmEmailAuth.title") },
        ao = { title: Xn("AccountMerge.title") };
      o.d(n, "AuthenticationModuleNgFactory", function () {
        return ro;
      });
      var ro = e["ɵcmf"](t, [], function (l) {
        return e["ɵmod"]([
          e["ɵmpd"](
            512,
            e.ComponentFactoryResolver,
            e["ɵCodegenComponentFactoryResolver"],
            [
              [
                8,
                [
                  u.a,
                  a.a,
                  r.b,
                  r.a,
                  i.a,
                  d.a,
                  d.b,
                  C,
                  j,
                  nl,
                  rl,
                  hl,
                  Sl,
                  Pl,
                  Zl,
                  Xl,
                ],
              ],
              [3, e.ComponentFactoryResolver],
              e.NgModuleRef,
            ]
          ),
          e["ɵmpd"](4608, m.NgLocalization, m.NgLocaleLocalization, [
            e.LOCALE_ID,
            [2, m["ɵangular_packages_common_common_a"]],
          ]),
          e["ɵmpd"](4608, Ql.c, Ql.c, []),
          e["ɵmpd"](4608, G.d, G.d, []),
          e["ɵmpd"](
            5120,
            e.APP_BOOTSTRAP_LISTENER,
            function (l, n) {
              return [P.k(l, n)];
            },
            [m.DOCUMENT, e.PLATFORM_ID]
          ),
          e["ɵmpd"](
            4608,
            O["ɵangular_packages_forms_forms_o"],
            O["ɵangular_packages_forms_forms_o"],
            []
          ),
          e["ɵmpd"](4608, O.FormBuilder, O.FormBuilder, []),
          e["ɵmpd"](4608, Y.i, Y.i, [
            e.PLATFORM_ID,
            [2, Y.b],
            [2, Y.a],
            [2, Y.c],
          ]),
          e["ɵmpd"](4608, Hl.k, Hl.q, [m.DOCUMENT, e.PLATFORM_ID, Hl.o]),
          e["ɵmpd"](4608, Hl.r, Hl.r, [Hl.k, Hl.p]),
          e["ɵmpd"](
            5120,
            Hl.a,
            function (l) {
              return [l];
            },
            [Hl.r]
          ),
          e["ɵmpd"](4608, Hl.n, Hl.n, []),
          e["ɵmpd"](6144, Hl.l, null, [Hl.n]),
          e["ɵmpd"](4608, Hl.j, Hl.j, [Hl.l]),
          e["ɵmpd"](6144, Hl.b, null, [Hl.j]),
          e["ɵmpd"](4608, Hl.h, Hl.m, [Hl.b, e.Injector]),
          e["ɵmpd"](4608, Hl.c, Hl.c, [Hl.h]),
          e["ɵmpd"](5120, S.f, $l.b, [Hl.c]),
          e["ɵmpd"](4608, S.c, S.e, []),
          e["ɵmpd"](4608, S.h, S.d, []),
          e["ɵmpd"](4608, S.b, S.a, []),
          e["ɵmpd"](4608, S.j, S.j, [S.k, S.f, S.c, S.h, S.b, S.l, S.m]),
          e["ɵmpd"](4608, ln.c, ln.c, [
            ln.i,
            ln.e,
            e.ComponentFactoryResolver,
            ln.h,
            ln.f,
            e.Injector,
            e.NgZone,
            m.DOCUMENT,
            U.b,
            [2, m.Location],
          ]),
          e["ɵmpd"](5120, ln.j, ln.k, [ln.c]),
          e["ɵmpd"](5120, nn.b, nn.c, [ln.c]),
          e["ɵmpd"](5120, on.c, on.d, [ln.c]),
          e["ɵmpd"](135680, on.e, on.e, [
            ln.c,
            e.Injector,
            [2, m.Location],
            [2, on.b],
            on.c,
            [3, on.e],
            ln.e,
          ]),
          e["ɵmpd"](4608, en.i, en.i, []),
          e["ɵmpd"](5120, en.a, en.b, [ln.c]),
          e["ɵmpd"](5120, tn.c, tn.j, [ln.c]),
          e["ɵmpd"](5120, un.a, un.b, [ln.c]),
          e["ɵmpd"](5120, an.b, an.c, [ln.c]),
          e["ɵmpd"](4608, rn.e, G.e, [
            [2, G.i],
            [2, G.n],
          ]),
          e["ɵmpd"](5120, dn.c, dn.a, [[3, dn.c]]),
          e["ɵmpd"](5120, sn.d, sn.a, [[3, sn.d]]),
          e["ɵmpd"](5120, cn.g, cn.a, [[3, cn.g]]),
          e["ɵmpd"](4608, G.c, mn.b, [[2, G.h], K.a]),
          e["ɵmpd"](4608, fn.a, fn.a, [S.j, w.a]),
          e["ɵmpd"](4608, pn.a, pn.a, [w.a, c.o]),
          e["ɵmpd"](4608, gn.a, gn.a, [w.a, c.o]),
          e["ɵmpd"](4608, vn.a, vn.a, [w.a, c.o]),
          e["ɵmpd"](4608, hn.a, hn.a, [w.a]),
          e["ɵmpd"](1073742336, m.CommonModule, m.CommonModule, []),
          e["ɵmpd"](1073742336, c.s, c.s, [
            [2, c.x],
            [2, c.o],
          ]),
          e["ɵmpd"](1073742336, U.a, U.a, []),
          e["ɵmpd"](1073742336, G.n, G.n, [
            [2, G.f],
            [2, rn.f],
          ]),
          e["ɵmpd"](1073742336, bn.c, bn.c, []),
          e["ɵmpd"](1073742336, k.g, k.g, []),
          e["ɵmpd"](1073742336, K.b, K.b, []),
          e["ɵmpd"](1073742336, Z.c, Z.c, []),
          e["ɵmpd"](1073742336, Ql.d, Ql.d, []),
          e["ɵmpd"](1073742336, T.e, T.e, []),
          e["ɵmpd"](1073742336, B.c, B.c, []),
          e["ɵmpd"](1073742336, G.y, G.y, []),
          e["ɵmpd"](1073742336, kl.d, kl.d, []),
          e["ɵmpd"](1073742336, kl.c, kl.c, []),
          e["ɵmpd"](1073742336, f.c, f.c, []),
          e["ɵmpd"](1073742336, P.c, P.c, []),
          e["ɵmpd"](1073742336, M.g, M.g, []),
          e["ɵmpd"](1073742336, il.d, il.d, []),
          e["ɵmpd"](1073742336, _n.a, _n.a, []),
          e["ɵmpd"](1073742336, Cn.a, Cn.a, [[2, P.h], e.PLATFORM_ID]),
          e["ɵmpd"](
            1073742336,
            O["ɵangular_packages_forms_forms_d"],
            O["ɵangular_packages_forms_forms_d"],
            []
          ),
          e["ɵmpd"](1073742336, O.FormsModule, O.FormsModule, []),
          e["ɵmpd"](
            1073742336,
            O.ReactiveFormsModule,
            O.ReactiveFormsModule,
            []
          ),
          e["ɵmpd"](1073742336, Y.l, Y.l, []),
          e["ɵmpd"](1073742336, Y.j, Y.j, []),
          e["ɵmpd"](1073742336, S.g, S.g, []),
          e["ɵmpd"](1073742336, Hl.e, Hl.e, []),
          e["ɵmpd"](1073742336, Hl.d, Hl.d, []),
          e["ɵmpd"](1073742336, xn.a, xn.a, []),
          e["ɵmpd"](1073742336, G.w, G.w, []),
          e["ɵmpd"](1073742336, G.t, G.t, []),
          e["ɵmpd"](1073742336, yn.g, yn.g, []),
          e["ɵmpd"](1073742336, Fn.c, Fn.c, []),
          e["ɵmpd"](1073742336, ln.g, ln.g, []),
          e["ɵmpd"](1073742336, nn.e, nn.e, []),
          e["ɵmpd"](1073742336, Sn.e, Sn.e, []),
          e["ɵmpd"](1073742336, Rn.f, Rn.f, []),
          e["ɵmpd"](1073742336, kn.p, kn.p, []),
          e["ɵmpd"](1073742336, wn.p, wn.p, []),
          e["ɵmpd"](1073742336, on.k, on.k, []),
          e["ɵmpd"](1073742336, p.a, p.a, []),
          e["ɵmpd"](1073742336, en.j, en.j, []),
          e["ɵmpd"](1073742336, Nn.c, Nn.c, []),
          e["ɵmpd"](1073742336, En.d, En.d, []),
          e["ɵmpd"](1073742336, G.p, G.p, []),
          e["ɵmpd"](1073742336, In.b, In.b, []),
          e["ɵmpd"](1073742336, Ln.b, Ln.b, []),
          e["ɵmpd"](1073742336, qn.e, qn.e, []),
          e["ɵmpd"](1073742336, tn.i, tn.i, []),
          e["ɵmpd"](1073742336, tn.f, tn.f, []),
          e["ɵmpd"](1073742336, un.d, un.d, []),
          e["ɵmpd"](1073742336, an.e, an.e, []),
          e["ɵmpd"](1073742336, dn.d, dn.d, []),
          e["ɵmpd"](1073742336, F.c, F.c, []),
          e["ɵmpd"](1073742336, An.c, An.c, []),
          e["ɵmpd"](1073742336, Dn.d, Dn.d, []),
          e["ɵmpd"](1073742336, jn.h, jn.h, []),
          e["ɵmpd"](1073742336, On.d, On.d, []),
          e["ɵmpd"](1073742336, On.c, On.c, []),
          e["ɵmpd"](1073742336, Mn.b, Mn.b, []),
          e["ɵmpd"](1073742336, W.e, W.e, []),
          e["ɵmpd"](1073742336, sn.e, sn.e, []),
          e["ɵmpd"](1073742336, Pn.e, Pn.e, []),
          e["ɵmpd"](1073742336, cn.h, cn.h, []),
          e["ɵmpd"](1073742336, Vn.b, Vn.b, []),
          e["ɵmpd"](1073742336, Tn.k, Tn.k, []),
          e["ɵmpd"](1073742336, Gn.b, Gn.b, []),
          e["ɵmpd"](1073742336, G.A, G.A, []),
          e["ɵmpd"](1073742336, G.q, G.q, []),
          e["ɵmpd"](1073742336, Y.h, Y.h, []),
          e["ɵmpd"](1073742336, Un.a, Un.a, []),
          e["ɵmpd"](1073742336, Kn.c, Kn.c, []),
          e["ɵmpd"](1073742336, Bn.c, Bn.c, []),
          e["ɵmpd"](1073742336, Zn.b, Zn.b, []),
          e["ɵmpd"](1073742336, zn.b, zn.b, []),
          e["ɵmpd"](1073742336, Yn.b, Yn.b, []),
          e["ɵmpd"](1073742336, Jn.a, Jn.a, []),
          e["ɵmpd"](1073742336, t, t, []),
          e["ɵmpd"](256, Hl.o, "XSRF-TOKEN", []),
          e["ɵmpd"](256, Hl.p, "X-XSRF-TOKEN", []),
          e["ɵmpd"](256, S.m, void 0, []),
          e["ɵmpd"](256, S.l, void 0, []),
          e["ɵmpd"](256, Rn.a, { separatorKeyCodes: [Wn.g] }, []),
          e["ɵmpd"](256, G.g, Jn.b, []),
          e["ɵmpd"](
            1024,
            c.m,
            function () {
              return [
                [
                  {
                    path: "",
                    children: [
                      { path: "404", component: v, data: Qn },
                      { path: "forgotConfirm", component: N, data: Hn },
                      { path: "forgot", component: J, data: $n },
                      { path: "lockscreen", component: ol, data: lo },
                      { path: "login", component: cl, data: no },
                      { path: "login/:token", component: cl, data: oo },
                      { path: "fast/:hash/:key", component: Cl, data: eo },
                      { path: "register", component: Ll, data: to },
                      { path: "confirmnewlogin", component: Vl, data: uo },
                      { path: "loginmail", component: zl, data: ao },
                    ],
                  },
                ],
              ];
            },
            []
          ),
        ]);
      });
    },
  },
]);
