/**
 * IE >= 6
 * polyfill for requestAnimationFrame
 */

(function() {
  if (!window) return;
  const prefixs = ['webkit', 'moz'];
  for (let i = 0; i < prefixs.length && !window.requestAnimationFrame; ++i) {
    const prefix = prefixs[i];
    window.requestAnimationFrame = window[`${prefix}RequestAnimationFrame`];
    window.cancelAnimationFrame = window[`${prefix}CancelAnimationFrame`] || window[`${prefix}CancelRequestAnimationFrame`];
  }
  if (
    /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || // apply for iOS6
    !window.requestAnimationFrame ||
    !window.cancelAnimationFrame
  ) {
    let lastTime = 0;
    window.requestAnimationFrame = function(callback) {
      const now = new Date().getTime();
      const nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function() {
        callback((lastTime = nextTime));
      }, nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
  }
})();