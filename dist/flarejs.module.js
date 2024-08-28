var e,
    t = {
        glowRadius: 50,
        bgColor: null,
        flareColor: 'rgba(254, 1, 154, 0.5)',
        fluentFlares: !1,
        onDestroy: function (e) {},
        onReset: function (e) {},
        onStop: function (e) {},
        onStart: function (e) {},
    },
    r = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
    },
    n = {
        px: { px: 1, cm: 96 / 2.54, mm: 96 / 25.4, in: 96, pt: 96 / 72, pc: 16 },
        cm: { px: 2.54 / 96, cm: 1, mm: 0.1, in: 2.54, pt: 2.54 / 72, pc: 2.54 / 6 },
        mm: { px: 25.4 / 96, cm: 10, mm: 1, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6 },
        in: { px: 1 / 96, cm: 1 / 2.54, mm: 1 / 25.4, in: 1, pt: 1 / 72, pc: 1 / 6 },
        pt: { px: 0.75, cm: 72 / 2.54, mm: 72 / 25.4, in: 72, pt: 1, pc: 12 },
        pc: { px: 6 / 96, cm: 6 / 2.54, mm: 6 / 25.4, in: 6, pt: 6 / 72, pc: 1 },
        deg: { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 },
        grad: { deg: 400 / 360, grad: 1, rad: 200 / Math.PI, turn: 400 },
        rad: { deg: Math.PI / 180, grad: Math.PI / 200, rad: 1, turn: 2 * Math.PI },
        turn: { deg: 1 / 360, grad: 1 / 400, rad: 0.5 / Math.PI, turn: 1 },
        s: { s: 1, ms: 0.001 },
        ms: { s: 1e3, ms: 1 },
        Hz: { Hz: 1, kHz: 1e3 },
        kHz: { Hz: 0.001, kHz: 1 },
        dpi: { dpi: 1, dpcm: 1 / 2.54, dppx: 1 / 96 },
        dpcm: { dpi: 2.54, dpcm: 1, dppx: 2.54 / 96 },
        dppx: { dpi: 96, dpcm: 96 / 2.54, dppx: 1 },
    },
    a = function (e, t, r, a) {
        if (!n.hasOwnProperty(r)) throw new Error('Cannot convert to ' + r);
        if (!n[r].hasOwnProperty(t)) throw new Error('Cannot convert from ' + t + ' to ' + r);
        var o = n[r][t] * e;
        return !1 !== a ? ((a = Math.pow(10, parseInt(a) || 5)), Math.round(o * a) / a) : o;
    },
    o =
        ((function (e, t) {
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.fromRgba = y),
                (t.fromRgb = b),
                (t.fromHsla = k),
                (t.fromHsl = w),
                (t.fromString = x),
                (t.default = void 0);
            var n = i(r),
                o = i(a);
            function i(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function s(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                            var r = [],
                                n = !0,
                                a = !1,
                                o = void 0;
                            try {
                                for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                            } catch (e) {
                                (a = !0), (o = e);
                            } finally {
                                try {
                                    n || null == s.return || s.return();
                                } finally {
                                    if (a) throw o;
                                }
                            }
                            return r;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return l(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return (
                                'Object' === r && e.constructor && (r = e.constructor.name),
                                'Map' === r || 'Set' === r
                                    ? Array.from(e)
                                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                                      ? l(e, t)
                                      : void 0
                            );
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var u = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?$/,
                d = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?$/,
                c = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,
                g = /^rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,
                h = /^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,
                p = /^rgba?\(\s*(\d+%)\s+(\d+%)\s+(\d+%)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/,
                f = /^hsla?\(\s*(\d+)(deg|rad|grad|turn)?\s*,\s*(\d+)%\s*,\s*(\d+)%(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
            function m(e, t) {
                return e.indexOf(t) > -1;
            }
            var v = /*#__PURE__*/ (function () {
                function e(t) {
                    var r = s(t, 4),
                        n = r[0],
                        a = r[1],
                        o = r[2],
                        i = r[3];
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
                    })(this, e),
                        (this.values = [
                            Math.max(Math.min(parseInt(n, 10), 255), 0),
                            Math.max(Math.min(parseInt(a, 10), 255), 0),
                            Math.max(Math.min(parseInt(o, 10), 255), 0),
                            null == i ? 1 : Math.max(Math.min(parseFloat(i), 255), 0),
                        ]);
                }
                var t;
                return (
                    (t = [
                        {
                            key: 'toRgbString',
                            value: function () {
                                var e = s(this.values, 4),
                                    t = e[0],
                                    r = e[1],
                                    n = e[2],
                                    a = e[3];
                                return 1 === a
                                    ? 'rgb('.concat(t, ', ').concat(r, ', ').concat(n, ')')
                                    : 'rgba('.concat(t, ', ').concat(r, ', ').concat(n, ', ').concat(a, ')');
                            },
                        },
                        {
                            key: 'toHslString',
                            value: function () {
                                var e = s(this.toHslaArray(), 4),
                                    t = e[0],
                                    r = e[1],
                                    n = e[2],
                                    a = e[3];
                                return 1 === a
                                    ? 'hsl('.concat(t, ', ').concat(r, '%, ').concat(n, '%)')
                                    : 'hsla('.concat(t, ', ').concat(r, '%, ').concat(n, '%, ').concat(a, ')');
                            },
                        },
                        {
                            key: 'toHexString',
                            value: function () {
                                var e = s(this.values, 4),
                                    t = e[0],
                                    r = e[1],
                                    n = e[2],
                                    a = e[3];
                                return (
                                    (t = Number(t).toString(16).padStart(2, '0')),
                                    (r = Number(r).toString(16).padStart(2, '0')),
                                    (n = Number(n).toString(16).padStart(2, '0')),
                                    (a =
                                        a < 1
                                            ? parseInt(255 * a, 10)
                                                  .toString(16)
                                                  .padStart(2, '0')
                                            : ''),
                                    '#'.concat(t).concat(r).concat(n).concat(a)
                                );
                            },
                        },
                        {
                            key: 'toRgbaArray',
                            value: function () {
                                return this.values;
                            },
                        },
                        {
                            key: 'toHslaArray',
                            value: function () {
                                var e = s(this.values, 4),
                                    t = e[3],
                                    r = s(
                                        (function (e, t, r) {
                                            var n = e / 255,
                                                a = t / 255,
                                                o = r / 255,
                                                i = Math.max(n, a, o),
                                                s = Math.min(n, a, o),
                                                l = i - s,
                                                u = (i + s) / 2;
                                            if (0 === l) return [0, 0, 100 * u];
                                            var d = l / (1 - Math.abs(2 * u - 1));
                                            return [
                                                60 *
                                                    (function () {
                                                        switch (i) {
                                                            case n:
                                                                return ((a - o) / l) % 6;
                                                            case a:
                                                                return (o - n) / l + 2;
                                                            default:
                                                                return (n - a) / l + 4;
                                                        }
                                                    })(),
                                                100 * d,
                                                100 * u,
                                            ];
                                        })(e[0], e[1], e[2]),
                                        3
                                    );
                                return [r[0], r[1], r[2], t];
                            },
                        },
                    ]) &&
                        (function (e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                (n.enumerable = n.enumerable || !1),
                                    (n.configurable = !0),
                                    'value' in n && (n.writable = !0),
                                    Object.defineProperty(e, n.key, n);
                            }
                        })(e.prototype, t),
                    e
                );
            })();
            function y(e) {
                var t = s(e, 4);
                return new v([t[0], t[1], t[2], t[3]]);
            }
            function b(e) {
                var t = s(e, 3);
                return y([t[0], t[1], t[2], 1]);
            }
            function k(e) {
                var t,
                    r,
                    n,
                    a,
                    o,
                    i,
                    l,
                    u = s(e, 4),
                    d = u[3],
                    c =
                        ((t = u[0] / 60),
                        (r = u[1] / 100),
                        (n = u[2] / 100),
                        (o = (a = (1 - Math.abs(2 * n - 1)) * r) * (1 - Math.abs((t % 2) - 1))),
                        (i = n - a / 2),
                        [
                            255 *
                                ((l = s(
                                    t < 1 ? [a, o, 0] : t < 2 ? [o, a, 0] : t < 3 ? [0, a, o] : t < 4 ? [0, o, a] : t < 5 ? [o, 0, a] : [a, 0, o],
                                    3
                                ))[0] +
                                    i),
                            255 * (l[1] + i),
                            255 * (l[2] + i),
                        ]),
                    g = s(c, 3);
                return y([g[0], g[1], g[2], d]);
            }
            function w(e) {
                var t = s(e, 3);
                return k([t[0], t[1], t[2], 1]);
            }
            function x(e) {
                return n.default[e]
                    ? b(n.default[e])
                    : u.test(e) || d.test(e)
                      ? (function (e) {
                            var t = s(u.exec(e) || d.exec(e), 5),
                                r = t[1],
                                n = t[2],
                                a = t[3],
                                o = t[4];
                            return y([
                                (r = parseInt(r.length < 2 ? r.repeat(2) : r, 16)),
                                (n = parseInt(n.length < 2 ? n.repeat(2) : n, 16)),
                                (a = parseInt(a.length < 2 ? a.repeat(2) : a, 16)),
                                (o = (o && (parseInt(o.length < 2 ? o.repeat(2) : o, 16) / 255).toPrecision(1)) || 1),
                            ]);
                        })(e)
                      : c.test(e) || h.test(e) || g.test(e) || p.test(e)
                        ? (function (e) {
                              var t = s(c.exec(e) || h.exec(e) || g.exec(e) || p.exec(e), 5),
                                  r = t[1],
                                  n = t[2],
                                  a = t[3],
                                  o = t[4];
                              return y([
                                  (r = m(r, '%') ? (255 * parseInt(r, 10)) / 100 : parseInt(r, 10)),
                                  (n = m(n, '%') ? (255 * parseInt(n, 10)) / 100 : parseInt(n, 10)),
                                  (a = m(a, '%') > 0 ? (255 * parseInt(a, 10)) / 100 : parseInt(a, 10)),
                                  (o = void 0 === o ? 1 : parseFloat(o) / (m(o, '%') ? 100 : 1)),
                              ]);
                          })(e)
                        : f.test(e)
                          ? (function (e) {
                                var t = s(f.exec(e), 6),
                                    r = t[1],
                                    n = t[2],
                                    a = t[3],
                                    i = t[4],
                                    l = t[5];
                                return (
                                    (n = n || 'deg'),
                                    k([
                                        (r = (0, o.default)(parseFloat(r), n, 'deg')),
                                        (a = parseFloat(a)),
                                        (i = parseFloat(i)),
                                        (l = void 0 === l ? 1 : parseFloat(l) / (m(l, '%') ? 100 : 1)),
                                    ])
                                );
                            })(e)
                          : null;
            }
            t.default = { fromString: x, fromRgb: b, fromRgba: y, fromHsl: w, fromHsla: k };
        })((e = { exports: {} }), e.exports),
        e.exports),
    i = new /*#__PURE__*/ ((function () {
        function e() {}
        return (
            (e.prototype.load = function (e, r, n) {
                e.selector = n;
                var a = document.querySelectorAll(n);
                a.length &&
                    ((e.options = Object.assign({}, t, r)),
                    (e.glowElements = []),
                    a.forEach(function (t) {
                        var r = window.getComputedStyle(t, null).getPropertyValue('background-color'),
                            n = e.options.bgColor;
                        null !== n && (n = o.fromString(n).toRgbString()), e.glowElements.push({ element: t, defaultBackground: null === n ? r : n });
                    }),
                    (e.glowRadius = e.options.glowRadius),
                    (e.flareColor = o.fromString(e.options.flareColor).toRgbString()),
                    (e.eventHandlers = []),
                    (e.isPaused = !1),
                    (e.initialized = !0));
            }),
            e
        );
    })())(),
    s = /*#__PURE__*/ (function () {
        function e(e, t) {
            i.load(this, t, e), this.initialized ? this.initFlares() : console.error("Couldn't initialize FlareJS");
        }
        var t = e.prototype;
        return (
            (t.toggle = function () {
                this.isPaused ? this.start() : this.stop();
            }),
            (t.start = function () {
                this.isPaused && ((this.isPaused = !1), this.options.onStart(this));
            }),
            (t.stop = function () {
                var e = this;
                this.isPaused ||
                    ((this.isPaused = !0),
                    this.glowElements.forEach(function (t) {
                        e.resetBackground(t);
                    }),
                    this.options.onStop(this));
            }),
            (t.destroy = function () {
                this.eventHandlers.forEach(function (e) {
                    e.element.removeEventListener(e.event, e.eventHandler);
                }),
                    (this.eventHandlers = []),
                    (this.initialized = !1),
                    this.options.onDestroy(this);
            }),
            (t.reset = function () {
                this.destroy(), this.options.onReset(this), this.constructor(this.selector, this.options);
            }),
            (t.initFlares = function () {
                var e = this;
                this.glowElements.forEach(function (t) {
                    e.addFlareEvents(t);
                });
            }),
            (t.addFlareEvents = function (e) {
                var t = this;
                this.resetBackground(e);
                var r,
                    n = e.element;
                n.addEventListener(
                    'mousemove',
                    (r = this.options.fluentFlares
                        ? function (e) {
                              t.glowElements.forEach(function (r) {
                                  t.handleFlareEvent(e, r);
                              });
                          }
                        : function (r) {
                              return t.handleFlareEvent(r, e);
                          })
                );
                var a = function () {
                    return t.resetBackground(e);
                };
                n.addEventListener('mouseleave', a),
                    this.eventHandlers.push({ element: n, event: 'mousemove', eventHandler: r }),
                    this.eventHandlers.push({ element: n, event: 'mouseleave', eventHandler: a });
            }),
            (t.resetBackground = function (e) {
                this.isPaused || (e.element.style.background = e.defaultBackground);
            }),
            (t.handleFlareEvent = function (e, t) {
                if (!this.isPaused) {
                    var r = t.element,
                        n = t.defaultBackground,
                        a = e.pageX - r.offsetLeft,
                        o = e.pageY + document.querySelector('body').scrollTop - r.offsetTop;
                    r.style.background = this.generateGradientString(a, o, n);
                }
            }),
            (t.generateGradientString = function (e, t, r) {
                return 'radial-gradient(circle ' + this.glowRadius + 'px at ' + e + 'px ' + t + 'px, ' + this.flareColor + ', ' + r + ')';
            }),
            e
        );
    })();
export { s as default };
//# sourceMappingURL=flarejs.module.js.map
