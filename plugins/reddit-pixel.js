export default function (context) {
  /* eslint-disable */
  !(function (w, d) {
    if (!w.rdt) {
      const p = (w.rdt = function () {
        p.sendEvent
          ? p.sendEvent.apply(p, arguments)
          : p.callQueue.push(arguments)
      })
      p.callQueue = []
      const t = d.createElement('script')
      ;(t.src = 'https://www.redditstatic.com/ads/pixel.js'), (t.async = !0)
      const s = d.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(t, s)
    }
  })(window, document)
  // rdt('init', 't2_d1jifz233')
  // rdt('track', 'PageVisit')
}
