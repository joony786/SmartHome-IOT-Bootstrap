!(function (a) {
  function c(d) {
    if (b[d]) return b[d].exports;
    var e = (b[d] = { exports: {}, id: d, loaded: !1 });
    return a[d].call(e.exports, e, e.exports, c), (e.loaded = !0), e.exports;
  }
  var b = {};
  return (c.m = a), (c.c = b), (c.p = ""), c(0);
})([
  function (a, b, c) {
    "use strict";
    function h(a) {
      return a && a.__esModule ? a : { default: a };
    }
    var d = c(1),
      e = h(d),
      f = c(2),
      g = h(f);
    !(function () {
      $.fn.timer = function (a) {
        return (
          (a = a || "start"),
          this.each(function () {
            $.data(this, g.default.PLUGIN_NAME) instanceof e.default ||
              $.data(this, g.default.PLUGIN_NAME, new e.default(this, a));
            var b = $.data(this, g.default.PLUGIN_NAME);
            "string" == typeof a
              ? "function" == typeof b[a] && b[a]()
              : b.start();
          })
        );
      };
    })();
  },
  function (a, b, c) {
    "use strict";
    function i(a) {
      return a && a.__esModule ? a : { default: a };
    }
    function j(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(b, "__esModule", { value: !0 });
    var d = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            (d.enumerable = d.enumerable || !1),
              (d.configurable = !0),
              "value" in d && (d.writable = !0),
              Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          return c && a(b.prototype, c), d && a(b, d), b;
        };
      })(),
      e = c(2),
      f = i(e),
      g = c(3),
      h = i(g),
      k = (function () {
        function a(b, c) {
          if (
            (j(this, a),
            (this.element = b),
            (this.originalConfig = $.extend({}, c)),
            (this.totalSeconds = 0),
            (this.intervalId = null),
            (this.html = "html"),
            ("INPUT" !== b.tagName && "TEXTAREA" !== b.tagName) ||
              (this.html = "val"),
            (this.config = h.default.getDefaultConfig()),
            c.duration &&
              (c.duration = h.default.durationTimeToSeconds(c.duration)),
            "string" != typeof c && (this.config = $.extend(this.config, c)),
            this.config.seconds && (this.totalSeconds = this.config.seconds),
            this.config.editable && h.default.makeEditable(this),
            this.config.attribute && (this.html = "attr"),
            (this.startTime = h.default.unixSeconds() - this.totalSeconds),
            this.config.duration &&
              this.config.repeat &&
              this.config.updateFrequency < 1e3 &&
              (this.config.updateFrequency = 1e3),
            this.config.countdown)
          ) {
            if (!this.config.duration)
              throw new Error("Countdown option set without duration!");
            if (this.config.editable)
              throw new Error("Cannot set editable on a countdown timer!");
            (this.config.startTime =
              h.default.unixSeconds() - this.config.duration),
              (this.totalSeconds = this.config.duration);
          }
        }
        return (
          d(a, [
            {
              key: "start",
              value: function () {
                this.state !== f.default.TIMER_RUNNING &&
                  (h.default.setState(this, f.default.TIMER_RUNNING),
                  this.render(),
                  (this.intervalId = setInterval(
                    h.default.intervalHandler.bind(null, this),
                    this.config.updateFrequency
                  )));
              },
            },
            {
              key: "pause",
              value: function () {
                this.state === f.default.TIMER_RUNNING &&
                  (h.default.setState(this, f.default.TIMER_PAUSED),
                  clearInterval(this.intervalId));
              },
            },
            {
              key: "resume",
              value: function () {
                this.state === f.default.TIMER_PAUSED &&
                  (h.default.setState(this, f.default.TIMER_RUNNING),
                  this.config.countdown
                    ? (this.startTime =
                        h.default.unixSeconds() -
                        this.config.duration +
                        this.totalSeconds)
                    : (this.startTime =
                        h.default.unixSeconds() - this.totalSeconds),
                  (this.intervalId = setInterval(
                    h.default.intervalHandler.bind(null, this),
                    this.config.updateFrequency
                  )));
              },
            },
            {
              key: "remove",
              value: function () {
                clearInterval(this.intervalId),
                  $(this.element).data(f.default.PLUGIN_NAME, null);
              },
            },
            {
              key: "reset",
              value: function () {
                var b = this.element,
                  c = this.originalConfig;
                this.remove(), $(b).timer(c);
              },
            },
            {
              key: "render",
              value: function () {
                if (this.config.format)
                  $(this.element)[this.html](
                    h.default.secondsToFormattedTime(
                      this.totalSeconds,
                      this.config.format
                    )
                  );
                else if (this.config.attribute) {
                  if (
                    ($(this.element)[this.html](
                      this.config.attribute,
                      this.totalSeconds
                    ),
                    this.config.style)
                  ) {
                    var b = 100 / parseInt(this.config.duration, 10);
                    $(this.element).css(
                      this.config.style,
                      b * this.totalSeconds + "%"
                    );
                  }
                } else
                  $(this.element)[this.html](
                    h.default.secondsToPrettyTime(this.totalSeconds)
                  );
                $(this.element).data("seconds", this.totalSeconds);
              },
            },
          ]),
          a
        );
      })();
    b.default = k;
  },
  function (a, b) {
    "use strict";
    Object.defineProperty(b, "__esModule", { value: !0 });
    var c = {
      PLUGIN_NAME: "timer",
      TIMER_RUNNING: "running",
      TIMER_PAUSED: "paused",
      DAYINSECONDS: 86400,
      THIRTYSIXHUNDRED: 3600,
      SIXTY: 60,
      TEN: 10,
    };
    b.default = c;
  },
  function (a, b, c) {
    "use strict";
    function f(a) {
      return a && a.__esModule ? a : { default: a };
    }
    Object.defineProperty(b, "__esModule", { value: !0 });
    var d = c(2),
      e = f(d),
      g = function () {
        var b =
            arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
          c = 0,
          d = 0,
          f = Math.floor(b / e.default.SIXTY),
          g = f,
          h = void 0;
        return (
          b >= e.default.DAYINSECONDS &&
            (c = Math.floor(b / e.default.DAYINSECONDS)),
          b >= e.default.THIRTYSIXHUNDRED &&
            (d = Math.floor(
              (b % e.default.DAYINSECONDS) / e.default.THIRTYSIXHUNDRED
            )),
          b >= e.default.SIXTY &&
            (g = Math.floor(
              (b % e.default.THIRTYSIXHUNDRED) / e.default.SIXTY
            )),
          (h = b % e.default.SIXTY),
          {
            days: c,
            hours: d,
            minutes: g,
            totalMinutes: f,
            seconds: h,
            totalSeconds: b,
          }
        );
      },
      h = function (b) {
        return (b = parseInt(b, 10)), b < 10 ? "0" + b : b;
      },
      i = function () {
        return {
          seconds: 0,
          editable: !1,
          duration: null,
          callback: function () {
            console.log("Time up!");
          },
          repeat: !1,
          countdown: !1,
          format: null,
          updateFrequency: 500,
        };
      },
      j = function () {
        return Math.round(Date.now() / 1e3);
      },
      k = function (b) {
        var c = g(b);
        if (c.days)
          return (
            c.days + ":" + h(c.hours) + ":" + h(c.minutes) + ":" + h(c.seconds)
          );
        if (c.hours) return c.hours + ":" + h(c.minutes) + ":" + h(c.seconds);
        var d = "";
        return (d = c.minutes
          ? c.minutes + ":" + h(c.seconds) + " min"
          : c.seconds + " sec");
      },
      l = function (b, c) {
        var d = g(b),
          e = [
            { identifier: "%d", value: d.days },
            { identifier: "%h", value: d.hours },
            { identifier: "%m", value: d.minutes },
            { identifier: "%s", value: d.seconds },
            { identifier: "%g", value: d.totalMinutes },
            { identifier: "%t", value: d.totalSeconds },
            { identifier: "%D", value: h(d.days) },
            { identifier: "%H", value: h(d.hours) },
            { identifier: "%M", value: h(d.minutes) },
            { identifier: "%S", value: h(d.seconds) },
            { identifier: "%G", value: h(d.totalMinutes) },
            { identifier: "%T", value: h(d.totalSeconds) },
          ];
        return (
          e.forEach(function (a) {
            c = c.replace(a.identifier, a.value);
          }),
          c
        );
      },
      m = function (b) {
        if (!b)
          throw new Error("durationTimeToSeconds expects a string argument!");
        if (!isNaN(Number(b))) return b;
        b = b.toLowerCase();
        var c = b.match(/\d{1,2}d/),
          d = b.match(/\d{1,2}h/),
          f = b.match(/\d{1,2}m/),
          g = b.match(/\d{1,2}s/);
        if (!(c || d || f || g))
          throw new Error("Invalid string passed in durationTimeToSeconds!");
        var h = 0;
        return (
          c && (h += Number(c[0].replace("d", "") * e.default.DAYINSECONDS)),
          d &&
            (h += Number(d[0].replace("h", "") * e.default.THIRTYSIXHUNDRED)),
          f && (h += Number(f[0].replace("m", "")) * e.default.SIXTY),
          g && (h += Number(g[0].replace("s", ""))),
          h
        );
      },
      n = function (b) {
        var c = void 0,
          d = void 0;
        return (
          b.indexOf("sec") > 0
            ? (d = Number(b.replace(/\ssec/g, "")))
            : b.indexOf("min") > 0
            ? ((b = b.replace(/\smin/g, "")),
              (c = b.split(":")),
              (d = Number(c[0] * e.default.SIXTY) + Number(c[1])))
            : b.match(/\d{1,2}:\d{2}:\d{2}:\d{2}/)
            ? ((c = b.split(":")),
              (d =
                Number(c[0] * e.default.DAYINSECONDS) +
                Number(c[1] * e.default.THIRTYSIXHUNDRED) +
                Number(c[2] * e.default.SIXTY) +
                Number(c[3])))
            : b.match(/\d{1,2}:\d{2}:\d{2}/) &&
              ((c = b.split(":")),
              (d =
                Number(c[0] * e.default.THIRTYSIXHUNDRED) +
                Number(c[1] * e.default.SIXTY) +
                Number(c[2]))),
          d
        );
      },
      o = function (b, c) {
        (b.state = c), $(b.element).data("state", c);
      },
      p = function (b) {
        $(b.element).on("focus", function () {
          b.pause();
        }),
          $(b.element).on("blur", function () {
            (b.totalSeconds = n($(b.element)[b.html]())), b.resume();
          });
      },
      q = function (b) {
        return (
          (b.totalSeconds = j() - b.startTime),
          b.config.countdown
            ? ((b.totalSeconds = b.config.duration - b.totalSeconds),
              0 === b.totalSeconds &&
                (clearInterval(b.intervalId),
                o(b, e.default.TIMER_STOPPED),
                b.config.callback(),
                $(b.element).data("seconds")),
              void b.render())
            : (b.render(),
              void (
                b.config.duration &&
                b.totalSeconds > 0 &&
                b.totalSeconds % b.config.duration === 0 &&
                (b.config.callback && b.config.callback(),
                b.config.repeat ||
                  (clearInterval(b.intervalId),
                  o(b, e.default.TIMER_STOPPED),
                  (b.config.duration = null)))
              ))
        );
      };
    b.default = {
      getDefaultConfig: i,
      unixSeconds: j,
      secondsToPrettyTime: k,
      secondsToFormattedTime: l,
      durationTimeToSeconds: m,
      prettyTimeToSeconds: n,
      setState: o,
      makeEditable: p,
      intervalHandler: q,
    };
  },
]);
