(window["webpackJsonpbaseliner-extension"] =
  window["webpackJsonpbaseliner-extension"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function(e, a, t) {
      e.exports = t(11);
    },
    ,
    ,
    ,
    ,
    function(e, a, t) {},
    function(e, a, t) {},
    function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        l = t(3),
        c = t.n(l),
        i = (t(9), t(1)),
        o =
          (t(10),
          function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(
              e,
              a,
              t,
              n
            ) {
              return a + a + t + t + n + n;
            });
            var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return a
              ? {
                  r: parseInt(a[1], 16),
                  g: parseInt(a[2], 16),
                  b: parseInt(a[3], 16)
                }
              : null;
          });
      var u = function() {
        var e = chrome && chrome.tabs,
          a = r.a.useState(!1),
          t = Object(i.a)(a, 2),
          n = t[0],
          l = t[1],
          c = r.a.useState("loading..."),
          u = Object(i.a)(c, 2),
          s = u[0],
          m = u[1],
          d = r.a.useState("#ff0000"),
          g = Object(i.a)(d, 2),
          p = g[0],
          b = g[1],
          v = r.a.useState(100),
          h = Object(i.a)(v, 2),
          E = h[0],
          f = h[1],
          y = r.a.useState(8),
          w = Object(i.a)(y, 2),
          S = w[0],
          z = w[1],
          O = r.a.useState("#00ff00"),
          j = Object(i.a)(O, 2),
          C = j[0],
          N = j[1],
          T = r.a.useState(100),
          x = Object(i.a)(T, 2),
          B = x[0],
          H = x[1],
          V = r.a.useState(8),
          F = Object(i.a)(V, 2),
          k = F[0],
          I = F[1];
        function $(e) {
          "vertical" === e.currentTarget.dataset.grid
            ? b(e.currentTarget.value)
            : N(e.currentTarget.value);
        }
        function J(e) {
          "vertical" === e.currentTarget.dataset.grid
            ? z(e.currentTarget.value)
            : I(e.currentTarget.value);
        }
        function W(e) {
          "vertical" === e.currentTarget.dataset.grid
            ? f(e.currentTarget.value)
            : H(e.currentTarget.value);
        }
        return (
          r.a.useEffect(
            function() {
              if (e) {
                var a = o(p),
                  t = {
                    red: a.r,
                    green: a.g,
                    blue: a.b,
                    opacity: E,
                    baseline: S
                  },
                  n = o(C),
                  r = {
                    red: n.r,
                    green: n.g,
                    blue: n.b,
                    opacity: B,
                    baseline: k
                  };
                chrome.tabs.executeScript(
                  {
                    code: "Baseliner.generateStyles("
                      .concat(t.red, ", ")
                      .concat(t.blue, ", ")
                      .concat(t.green, ", ")
                      .concat(t.opacity, " ,")
                      .concat(t.baseline, ", ")
                      .concat(r.red, ", ")
                      .concat(r.blue, ", ")
                      .concat(r.green, ", ")
                      .concat(r.opacity, " ,")
                      .concat(r.baseline, ")")
                  },
                  function(e) {
                    e[0] &&
                      (m("Updating Baseliner"),
                      chrome.tabs.insertCSS({ code: e[0] }, function() {
                        m("Baseliner styles updated");
                      }));
                  }
                );
              }
            },
            [e, p, C, E, B, S, k]
          ),
          e &&
            !n &&
            (chrome.tabs.executeScript(null, { file: "/baseliner.js" }), l(!0)),
          r.a.createElement(
            "div",
            { className: "Popup" },
            r.a.createElement("p", null, "Status: ", s),
            r.a.createElement(
              "div",
              { className: "grid vertical" },
              r.a.createElement("h1", null, "Vertical"),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "colourVertical" },
                  "Colour"
                ),
                r.a.createElement("input", {
                  type: "color",
                  id: "colourVertical",
                  value: p,
                  "data-grid": "vertical",
                  onChange: $
                })
              ),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "opacityVertical" },
                  "Opacity"
                ),
                r.a.createElement("input", {
                  type: "range",
                  min: 0,
                  max: 100,
                  id: "opacityVertical",
                  value: E,
                  "data-grid": "vertical",
                  onChange: W
                }),
                r.a.createElement("span", null, E, "%")
              ),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "baselineVertical" },
                  "Baseline"
                ),
                r.a.createElement("input", {
                  type: "number",
                  min: 2,
                  id: "baselineVertical",
                  value: S,
                  "data-grid": "vertical",
                  onChange: J
                })
              )
            ),
            r.a.createElement(
              "div",
              { className: "grid horizontal" },
              r.a.createElement("h1", null, "Horizontal"),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "colourHorizontal" },
                  "Colour"
                ),
                r.a.createElement("input", {
                  type: "color",
                  id: "colourHorizontal",
                  value: C,
                  "data-grid": "horizontal",
                  onChange: $
                })
              ),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "opacityHorizontal" },
                  "Opacity"
                ),
                r.a.createElement("input", {
                  type: "range",
                  min: 0,
                  max: 100,
                  id: "opacityHorizontal",
                  value: B,
                  "data-grid": "horizontal",
                  onChange: W
                }),
                r.a.createElement("span", null, B, "%")
              ),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "baselineHorizontal" },
                  "Baseline"
                ),
                r.a.createElement("input", {
                  type: "number",
                  min: 2,
                  id: "baselineHorizontal",
                  value: k,
                  "data-grid": "horizontal",
                  onChange: J
                })
              )
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(r.a.createElement(u, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  ],
  [[4, 1, 2]]
]);
//# sourceMappingURL=main.bc9c58a8.chunk.js.map