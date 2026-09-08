/* ============================================================
   Stat counter panels (.num-strip) — count-up on scroll.
   Auto-parses each .num-v: a single number with optional
   prefix/suffix counts up ("<300ms", "100+", "6"); anything
   with a range or multiple numbers ("2-3 days", "24/7") or a
   decimal stays static. No data-* attributes needed.
   Respects prefers-reduced-motion (leaves final HTML values).
   ============================================================ */
(function () {
  var REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var strips = document.querySelectorAll('.num-strip');
  if (!strips.length) return;

  function parse(txt) {
    var m = txt.trim().match(/^([^\d]*)(\d[\d,]*)([^\d]*)$/); // single integer w/ optional prefix+suffix
    if (!m) return null;
    return { prefix: m[1], to: parseInt(m[2].replace(/,/g, ''), 10), suffix: m[3] };
  }
  function fmt(v, p) { return p.prefix + Math.round(v).toLocaleString('en-US') + p.suffix; }

  Array.prototype.forEach.call(strips, function (strip) {
    var nums = Array.prototype.map.call(strip.querySelectorAll('.num-v'), function (el) {
      return { el: el, p: parse(el.textContent) };
    }).filter(function (x) { return x.p; });
    if (!nums.length || REDUCE) return;

    nums.forEach(function (n) { n.el.textContent = fmt(0, n.p); });

    var done = false;
    function run() {
      nums.forEach(function (n) {
        var t0 = performance.now();
        (function frame(now) {
          var pr = Math.min(1, (now - t0) / 1200), e = 1 - Math.pow(1 - pr, 3);
          n.el.textContent = fmt(e * n.p.to, n.p);
          if (pr < 1) requestAnimationFrame(frame);
        })(t0);
      });
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting && !done) { done = true; run(); io.disconnect(); } });
      }, { threshold: 0.4 });
      io.observe(strip);
    } else { run(); }
  });
})();
