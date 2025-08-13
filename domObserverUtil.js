// Lightweight shared DOM utilities injected first (see manifest order).
(function() {
    function ensureBody(cb) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => cb(document.body), { once: true });
            return;
        }
        if (document.body) return cb(document.body);
        const id = setInterval(() => {
            if (document.body) {
                clearInterval(id);
                cb(document.body);
            }
        }, 50);
    }

    // Observe DOM mutations and invoke callback (debounced to next frame).
    // options: { immediate=true, root=document.body, observerOptions=MutationObserverInit }
    function observeDom(callback, options = {}) {
        const {
            immediate = true,
            root = document.body,
            observerOptions = { childList: true, subtree: true, characterData: true }
        } = options;
        if (!root) return () => {};
        let scheduled = false;
        const run = () => { scheduled = false; callback(); };
        const schedule = () => {
            if (scheduled) return;
            scheduled = true;
            (typeof requestAnimationFrame === 'function' ? requestAnimationFrame : setTimeout)(run);
        };
        if (immediate) callback();
        const observer = new MutationObserver(schedule);
        observer.observe(root, observerOptions);
        return () => observer.disconnect();
    }

    // Expose globals (avoid overwriting if already present)
    window.ensureBody = window.ensureBody || ensureBody;
    window.observeDom = window.observeDom || observeDom;
})();
