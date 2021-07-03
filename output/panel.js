;(() => {
  var $v = Object.create
  var Ii = Object.defineProperty,
    Gv = Object.defineProperties,
    Yv = Object.getOwnPropertyDescriptor,
    Xv = Object.getOwnPropertyDescriptors,
    Kv = Object.getOwnPropertyNames,
    vc = Object.getOwnPropertySymbols,
    Qv = Object.getPrototypeOf,
    gc = Object.prototype.hasOwnProperty,
    Jv = Object.prototype.propertyIsEnumerable
  var yc = (e, t, r) => (t in e ? Ii(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    Yo = (e, t) => {
      for (var r in t || (t = {})) gc.call(t, r) && yc(e, r, t[r])
      if (vc) for (var r of vc(t)) Jv.call(t, r) && yc(e, r, t[r])
      return e
    },
    _c = (e, t) => Gv(e, Xv(t)),
    Zv = (e) => Ii(e, '__esModule', { value: !0 })
  var ct = (e, t) => () => t || e((t = { exports: {} }).exports, t), t.exports,
    wc = (e, t) => {
      for (var r in t) Ii(e, r, { get: t[r], enumerable: !0 })
    },
    eg = (e, t, r) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let n of Kv(t))
          !gc.call(e, n) &&
            n !== 'default' &&
            Ii(e, n, { get: () => t[n], enumerable: !(r = Yv(t, n)) || r.enumerable })
      return e
    },
    Ze = (e) =>
      eg(
        Zv(
          Ii(
            e != null ? $v(Qv(e)) : {},
            'default',
            e && e.__esModule && 'default' in e
              ? { get: () => e.default, enumerable: !0 }
              : { value: e, enumerable: !0 }
          )
        ),
        e
      )
  var Zs = ct((rw, Sc) => {
    'use strict'
    var Ec = Object.getOwnPropertySymbols,
      tg = Object.prototype.hasOwnProperty,
      rg = Object.prototype.propertyIsEnumerable
    function ng(e) {
      if (e == null) throw new TypeError('Object.assign cannot be called with null or undefined')
      return Object(e)
    }
    function ig() {
      try {
        if (!Object.assign) return !1
        var e = new String('abc')
        if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1
        for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r
        var n = Object.getOwnPropertyNames(t).map(function (o) {
          return t[o]
        })
        if (n.join('') !== '0123456789') return !1
        var i = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (o) {
            i[o] = o
          }),
          Object.keys(Object.assign({}, i)).join('') === 'abcdefghijklmnopqrst'
        )
      } catch (o) {
        return !1
      }
    }
    Sc.exports = ig()
      ? Object.assign
      : function (e, t) {
          for (var r, n = ng(e), i, o = 1; o < arguments.length; o++) {
            r = Object(arguments[o])
            for (var a in r) tg.call(r, a) && (n[a] = r[a])
            if (Ec) {
              i = Ec(r)
              for (var s = 0; s < i.length; s++) rg.call(r, i[s]) && (n[i[s]] = r[i[s]])
            }
          }
          return n
        }
  })
  var jc = ct((ne) => {
    'use strict'
    var eu = Zs(),
      Mn = 60103,
      xc = 60106
    ne.Fragment = 60107
    ne.StrictMode = 60108
    ne.Profiler = 60114
    var Tc = 60109,
      kc = 60110,
      Oc = 60112
    ne.Suspense = 60113
    var bc = 60115,
      Pc = 60116
    typeof Symbol == 'function' &&
      Symbol.for &&
      ((_t = Symbol.for),
      (Mn = _t('react.element')),
      (xc = _t('react.portal')),
      (ne.Fragment = _t('react.fragment')),
      (ne.StrictMode = _t('react.strict_mode')),
      (ne.Profiler = _t('react.profiler')),
      (Tc = _t('react.provider')),
      (kc = _t('react.context')),
      (Oc = _t('react.forward_ref')),
      (ne.Suspense = _t('react.suspense')),
      (bc = _t('react.memo')),
      (Pc = _t('react.lazy')))
    var _t,
      Cc = typeof Symbol == 'function' && Symbol.iterator
    function og(e) {
      return e === null || typeof e != 'object'
        ? null
        : ((e = (Cc && e[Cc]) || e['@@iterator']), typeof e == 'function' ? e : null)
    }
    function Mi(e) {
      for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1; r < arguments.length; r++)
        t += '&args[]=' + encodeURIComponent(arguments[r])
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      )
    }
    var Ic = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Mc = {}
    function Dn(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = Mc), (this.updater = r || Ic)
    }
    Dn.prototype.isReactComponent = {}
    Dn.prototype.setState = function (e, t) {
      if (typeof e != 'object' && typeof e != 'function' && e != null) throw Error(Mi(85))
      this.updater.enqueueSetState(this, e, t, 'setState')
    }
    Dn.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
    }
    function Dc() {}
    Dc.prototype = Dn.prototype
    function tu(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = Mc), (this.updater = r || Ic)
    }
    var ru = (tu.prototype = new Dc())
    ru.constructor = tu
    eu(ru, Dn.prototype)
    ru.isPureReactComponent = !0
    var nu = { current: null },
      Rc = Object.prototype.hasOwnProperty,
      Nc = { key: !0, ref: !0, __self: !0, __source: !0 }
    function Lc(e, t, r) {
      var n,
        i = {},
        o = null,
        a = null
      if (t != null)
        for (n in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = '' + t.key), t))
          Rc.call(t, n) && !Nc.hasOwnProperty(n) && (i[n] = t[n])
      var s = arguments.length - 2
      if (s === 1) i.children = r
      else if (1 < s) {
        for (var u = Array(s), l = 0; l < s; l++) u[l] = arguments[l + 2]
        i.children = u
      }
      if (e && e.defaultProps) for (n in ((s = e.defaultProps), s)) i[n] === void 0 && (i[n] = s[n])
      return { $$typeof: Mn, type: e, key: o, ref: a, props: i, _owner: nu.current }
    }
    function ag(e, t) {
      return { $$typeof: Mn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
    }
    function iu(e) {
      return typeof e == 'object' && e !== null && e.$$typeof === Mn
    }
    function sg(e) {
      var t = { '=': '=0', ':': '=2' }
      return (
        '$' +
        e.replace(/[=:]/g, function (r) {
          return t[r]
        })
      )
    }
    var Fc = /\/+/g
    function ou(e, t) {
      return typeof e == 'object' && e !== null && e.key != null ? sg('' + e.key) : t.toString(36)
    }
    function Xo(e, t, r, n, i) {
      var o = typeof e
      ;(o === 'undefined' || o === 'boolean') && (e = null)
      var a = !1
      if (e === null) a = !0
      else
        switch (o) {
          case 'string':
          case 'number':
            a = !0
            break
          case 'object':
            switch (e.$$typeof) {
              case Mn:
              case xc:
                a = !0
            }
        }
      if (a)
        return (
          (a = e),
          (i = i(a)),
          (e = n === '' ? '.' + ou(a, 0) : n),
          Array.isArray(i)
            ? ((r = ''),
              e != null && (r = e.replace(Fc, '$&/') + '/'),
              Xo(i, t, r, '', function (l) {
                return l
              }))
            : i != null &&
              (iu(i) &&
                (i = ag(i, r + (!i.key || (a && a.key === i.key) ? '' : ('' + i.key).replace(Fc, '$&/') + '/') + e)),
              t.push(i)),
          1
        )
      if (((a = 0), (n = n === '' ? '.' : n + ':'), Array.isArray(e)))
        for (var s = 0; s < e.length; s++) {
          o = e[s]
          var u = n + ou(o, s)
          a += Xo(o, t, r, u, i)
        }
      else if (((u = og(e)), typeof u == 'function'))
        for (e = u.call(e), s = 0; !(o = e.next()).done; ) (o = o.value), (u = n + ou(o, s++)), (a += Xo(o, t, r, u, i))
      else if (o === 'object')
        throw (
          ((t = '' + e),
          Error(Mi(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
        )
      return a
    }
    function Ko(e, t, r) {
      if (e == null) return e
      var n = [],
        i = 0
      return (
        Xo(e, n, '', '', function (o) {
          return t.call(r, o, i++)
        }),
        n
      )
    }
    function ug(e) {
      if (e._status === -1) {
        var t = e._result
        ;(t = t()),
          (e._status = 0),
          (e._result = t),
          t.then(
            function (r) {
              e._status === 0 && ((r = r.default), (e._status = 1), (e._result = r))
            },
            function (r) {
              e._status === 0 && ((e._status = 2), (e._result = r))
            }
          )
      }
      if (e._status === 1) return e._result
      throw e._result
    }
    var Ac = { current: null }
    function nr() {
      var e = Ac.current
      if (e === null) throw Error(Mi(321))
      return e
    }
    var lg = {
      ReactCurrentDispatcher: Ac,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: nu,
      IsSomeRendererActing: { current: !1 },
      assign: eu,
    }
    ne.Children = {
      map: Ko,
      forEach: function (e, t, r) {
        Ko(
          e,
          function () {
            t.apply(this, arguments)
          },
          r
        )
      },
      count: function (e) {
        var t = 0
        return (
          Ko(e, function () {
            t++
          }),
          t
        )
      },
      toArray: function (e) {
        return (
          Ko(e, function (t) {
            return t
          }) || []
        )
      },
      only: function (e) {
        if (!iu(e)) throw Error(Mi(143))
        return e
      },
    }
    ne.Component = Dn
    ne.PureComponent = tu
    ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg
    ne.cloneElement = function (e, t, r) {
      if (e == null) throw Error(Mi(267, e))
      var n = eu({}, e.props),
        i = e.key,
        o = e.ref,
        a = e._owner
      if (t != null) {
        if (
          (t.ref !== void 0 && ((o = t.ref), (a = nu.current)),
          t.key !== void 0 && (i = '' + t.key),
          e.type && e.type.defaultProps)
        )
          var s = e.type.defaultProps
        for (u in t) Rc.call(t, u) && !Nc.hasOwnProperty(u) && (n[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
      }
      var u = arguments.length - 2
      if (u === 1) n.children = r
      else if (1 < u) {
        s = Array(u)
        for (var l = 0; l < u; l++) s[l] = arguments[l + 2]
        n.children = s
      }
      return { $$typeof: Mn, type: e.type, key: i, ref: o, props: n, _owner: a }
    }
    ne.createContext = function (e, t) {
      return (
        t === void 0 && (t = null),
        (e = {
          $$typeof: kc,
          _calculateChangedBits: t,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (e.Provider = { $$typeof: Tc, _context: e }),
        (e.Consumer = e)
      )
    }
    ne.createElement = Lc
    ne.createFactory = function (e) {
      var t = Lc.bind(null, e)
      return (t.type = e), t
    }
    ne.createRef = function () {
      return { current: null }
    }
    ne.forwardRef = function (e) {
      return { $$typeof: Oc, render: e }
    }
    ne.isValidElement = iu
    ne.lazy = function (e) {
      return { $$typeof: Pc, _payload: { _status: -1, _result: e }, _init: ug }
    }
    ne.memo = function (e, t) {
      return { $$typeof: bc, type: e, compare: t === void 0 ? null : t }
    }
    ne.useCallback = function (e, t) {
      return nr().useCallback(e, t)
    }
    ne.useContext = function (e, t) {
      return nr().useContext(e, t)
    }
    ne.useDebugValue = function () {}
    ne.useEffect = function (e, t) {
      return nr().useEffect(e, t)
    }
    ne.useImperativeHandle = function (e, t, r) {
      return nr().useImperativeHandle(e, t, r)
    }
    ne.useLayoutEffect = function (e, t) {
      return nr().useLayoutEffect(e, t)
    }
    ne.useMemo = function (e, t) {
      return nr().useMemo(e, t)
    }
    ne.useReducer = function (e, t, r) {
      return nr().useReducer(e, t, r)
    }
    ne.useRef = function (e) {
      return nr().useRef(e)
    }
    ne.useState = function (e) {
      return nr().useState(e)
    }
    ne.version = '17.0.2'
  })
  var et = ct((iw, Hc) => {
    'use strict'
    Hc.exports = jc()
  })
  var Vc = ct((oe) => {
    'use strict'
    var Rn, Di, Qo, au
    typeof performance == 'object' && typeof performance.now == 'function'
      ? ((Bc = performance),
        (oe.unstable_now = function () {
          return Bc.now()
        }))
      : ((su = Date),
        (Uc = su.now()),
        (oe.unstable_now = function () {
          return su.now() - Uc
        }))
    var Bc, su, Uc
    typeof window == 'undefined' || typeof MessageChannel != 'function'
      ? ((Nn = null),
        (uu = null),
        (lu = function () {
          if (Nn !== null)
            try {
              var e = oe.unstable_now()
              Nn(!0, e), (Nn = null)
            } catch (t) {
              throw (setTimeout(lu, 0), t)
            }
        }),
        (Rn = function (e) {
          Nn !== null ? setTimeout(Rn, 0, e) : ((Nn = e), setTimeout(lu, 0))
        }),
        (Di = function (e, t) {
          uu = setTimeout(e, t)
        }),
        (Qo = function () {
          clearTimeout(uu)
        }),
        (oe.unstable_shouldYield = function () {
          return !1
        }),
        (au = oe.unstable_forceFrameRate = function () {}))
      : ((zc = window.setTimeout),
        (Wc = window.clearTimeout),
        typeof console != 'undefined' &&
          ((qc = window.cancelAnimationFrame),
          typeof window.requestAnimationFrame != 'function' &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
          typeof qc != 'function' &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            )),
        (Ri = !1),
        (Ni = null),
        (Jo = -1),
        (fu = 5),
        (cu = 0),
        (oe.unstable_shouldYield = function () {
          return oe.unstable_now() >= cu
        }),
        (au = function () {}),
        (oe.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
              )
            : (fu = 0 < e ? Math.floor(1e3 / e) : 5)
        }),
        (du = new MessageChannel()),
        (Zo = du.port2),
        (du.port1.onmessage = function () {
          if (Ni !== null) {
            var e = oe.unstable_now()
            cu = e + fu
            try {
              Ni(!0, e) ? Zo.postMessage(null) : ((Ri = !1), (Ni = null))
            } catch (t) {
              throw (Zo.postMessage(null), t)
            }
          } else Ri = !1
        }),
        (Rn = function (e) {
          ;(Ni = e), Ri || ((Ri = !0), Zo.postMessage(null))
        }),
        (Di = function (e, t) {
          Jo = zc(function () {
            e(oe.unstable_now())
          }, t)
        }),
        (Qo = function () {
          Wc(Jo), (Jo = -1)
        }))
    var Nn, uu, lu, zc, Wc, qc, Ri, Ni, Jo, fu, cu, du, Zo
    function pu(e, t) {
      var r = e.length
      e.push(t)
      e: for (;;) {
        var n = (r - 1) >>> 1,
          i = e[n]
        if (i !== void 0 && 0 < ta(i, t)) (e[n] = t), (e[r] = i), (r = n)
        else break e
      }
    }
    function Mt(e) {
      return (e = e[0]), e === void 0 ? null : e
    }
    function ea(e) {
      var t = e[0]
      if (t !== void 0) {
        var r = e.pop()
        if (r !== t) {
          e[0] = r
          e: for (var n = 0, i = e.length; n < i; ) {
            var o = 2 * (n + 1) - 1,
              a = e[o],
              s = o + 1,
              u = e[s]
            if (a !== void 0 && 0 > ta(a, r))
              u !== void 0 && 0 > ta(u, a) ? ((e[n] = u), (e[s] = r), (n = s)) : ((e[n] = a), (e[o] = r), (n = o))
            else if (u !== void 0 && 0 > ta(u, r)) (e[n] = u), (e[s] = r), (n = s)
            else break e
          }
        }
        return t
      }
      return null
    }
    function ta(e, t) {
      var r = e.sortIndex - t.sortIndex
      return r !== 0 ? r : e.id - t.id
    }
    var Ut = [],
      wr = [],
      fg = 1,
      wt = null,
      Ge = 3,
      ra = !1,
      en = !1,
      Li = !1
    function mu(e) {
      for (var t = Mt(wr); t !== null; ) {
        if (t.callback === null) ea(wr)
        else if (t.startTime <= e) ea(wr), (t.sortIndex = t.expirationTime), pu(Ut, t)
        else break
        t = Mt(wr)
      }
    }
    function hu(e) {
      if (((Li = !1), mu(e), !en))
        if (Mt(Ut) !== null) (en = !0), Rn(vu)
        else {
          var t = Mt(wr)
          t !== null && Di(hu, t.startTime - e)
        }
    }
    function vu(e, t) {
      ;(en = !1), Li && ((Li = !1), Qo()), (ra = !0)
      var r = Ge
      try {
        for (mu(t), wt = Mt(Ut); wt !== null && (!(wt.expirationTime > t) || (e && !oe.unstable_shouldYield())); ) {
          var n = wt.callback
          if (typeof n == 'function') {
            ;(wt.callback = null), (Ge = wt.priorityLevel)
            var i = n(wt.expirationTime <= t)
            ;(t = oe.unstable_now()), typeof i == 'function' ? (wt.callback = i) : wt === Mt(Ut) && ea(Ut), mu(t)
          } else ea(Ut)
          wt = Mt(Ut)
        }
        if (wt !== null) var o = !0
        else {
          var a = Mt(wr)
          a !== null && Di(hu, a.startTime - t), (o = !1)
        }
        return o
      } finally {
        ;(wt = null), (Ge = r), (ra = !1)
      }
    }
    var cg = au
    oe.unstable_IdlePriority = 5
    oe.unstable_ImmediatePriority = 1
    oe.unstable_LowPriority = 4
    oe.unstable_NormalPriority = 3
    oe.unstable_Profiling = null
    oe.unstable_UserBlockingPriority = 2
    oe.unstable_cancelCallback = function (e) {
      e.callback = null
    }
    oe.unstable_continueExecution = function () {
      en || ra || ((en = !0), Rn(vu))
    }
    oe.unstable_getCurrentPriorityLevel = function () {
      return Ge
    }
    oe.unstable_getFirstCallbackNode = function () {
      return Mt(Ut)
    }
    oe.unstable_next = function (e) {
      switch (Ge) {
        case 1:
        case 2:
        case 3:
          var t = 3
          break
        default:
          t = Ge
      }
      var r = Ge
      Ge = t
      try {
        return e()
      } finally {
        Ge = r
      }
    }
    oe.unstable_pauseExecution = function () {}
    oe.unstable_requestPaint = cg
    oe.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          e = 3
      }
      var r = Ge
      Ge = e
      try {
        return t()
      } finally {
        Ge = r
      }
    }
    oe.unstable_scheduleCallback = function (e, t, r) {
      var n = oe.unstable_now()
      switch (
        (typeof r == 'object' && r !== null
          ? ((r = r.delay), (r = typeof r == 'number' && 0 < r ? n + r : n))
          : (r = n),
        e)
      ) {
        case 1:
          var i = -1
          break
        case 2:
          i = 250
          break
        case 5:
          i = 1073741823
          break
        case 4:
          i = 1e4
          break
        default:
          i = 5e3
      }
      return (
        (i = r + i),
        (e = { id: fg++, callback: t, priorityLevel: e, startTime: r, expirationTime: i, sortIndex: -1 }),
        r > n
          ? ((e.sortIndex = r), pu(wr, e), Mt(Ut) === null && e === Mt(wr) && (Li ? Qo() : (Li = !0), Di(hu, r - n)))
          : ((e.sortIndex = i), pu(Ut, e), en || ra || ((en = !0), Rn(vu))),
        e
      )
    }
    oe.unstable_wrapCallback = function (e) {
      var t = Ge
      return function () {
        var r = Ge
        Ge = t
        try {
          return e.apply(this, arguments)
        } finally {
          Ge = r
        }
      }
    }
  })
  var Gc = ct((aw, $c) => {
    'use strict'
    $c.exports = Vc()
  })
  var Nm = ct((Ot) => {
    'use strict'
    var na = et(),
      ve = Zs(),
      Fe = Gc()
    function L(e) {
      for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1; r < arguments.length; r++)
        t += '&args[]=' + encodeURIComponent(arguments[r])
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      )
    }
    if (!na) throw Error(L(227))
    var Yc = new Set(),
      Fi = {}
    function tn(e, t) {
      Ln(e, t), Ln(e + 'Capture', t)
    }
    function Ln(e, t) {
      for (Fi[e] = t, e = 0; e < t.length; e++) Yc.add(t[e])
    }
    var ir = !(
        typeof window == 'undefined' ||
        typeof window.document == 'undefined' ||
        typeof window.document.createElement == 'undefined'
      ),
      dg =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Xc = Object.prototype.hasOwnProperty,
      Kc = {},
      Qc = {}
    function pg(e) {
      return Xc.call(Qc, e) ? !0 : Xc.call(Kc, e) ? !1 : dg.test(e) ? (Qc[e] = !0) : ((Kc[e] = !0), !1)
    }
    function mg(e, t, r, n) {
      if (r !== null && r.type === 0) return !1
      switch (typeof t) {
        case 'function':
        case 'symbol':
          return !0
        case 'boolean':
          return n
            ? !1
            : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
        default:
          return !1
      }
    }
    function hg(e, t, r, n) {
      if (t === null || typeof t == 'undefined' || mg(e, t, r, n)) return !0
      if (n) return !1
      if (r !== null)
        switch (r.type) {
          case 3:
            return !t
          case 4:
            return t === !1
          case 5:
            return isNaN(t)
          case 6:
            return isNaN(t) || 1 > t
        }
      return !1
    }
    function tt(e, t, r, n, i, o, a) {
      ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = n),
        (this.attributeNamespace = i),
        (this.mustUseProperty = r),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = a)
    }
    var ze = {}
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function (e) {
        ze[e] = new tt(e, 0, !1, e, null, !1, !1)
      })
    ;[
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0]
      ze[t] = new tt(t, 1, !1, e[1], null, !1, !1)
    })
    ;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      ze[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1)
    })
    ;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
      ze[e] = new tt(e, 2, !1, e, null, !1, !1)
    })
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        ze[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1)
      })
    ;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      ze[e] = new tt(e, 3, !0, e, null, !1, !1)
    })
    ;['capture', 'download'].forEach(function (e) {
      ze[e] = new tt(e, 4, !1, e, null, !1, !1)
    })
    ;['cols', 'rows', 'size', 'span'].forEach(function (e) {
      ze[e] = new tt(e, 6, !1, e, null, !1, !1)
    })
    ;['rowSpan', 'start'].forEach(function (e) {
      ze[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })
    var gu = /[\-:]([a-z])/g
    function yu(e) {
      return e[1].toUpperCase()
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(gu, yu)
        ze[t] = new tt(t, 1, !1, e, null, !1, !1)
      })
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
      var t = e.replace(gu, yu)
      ze[t] = new tt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    })
    ;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(gu, yu)
      ze[t] = new tt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
    })
    ;['tabIndex', 'crossOrigin'].forEach(function (e) {
      ze[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1)
    })
    ze.xlinkHref = new tt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
    ;['src', 'href', 'action', 'formAction'].forEach(function (e) {
      ze[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })
    function _u(e, t, r, n) {
      var i = ze.hasOwnProperty(t) ? ze[t] : null,
        o =
          i !== null
            ? i.type === 0
            : n
            ? !1
            : !(!(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N'))
      o ||
        (hg(t, r, i, n) && (r = null),
        n || i === null
          ? pg(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
          : i.mustUseProperty
          ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : '') : r)
          : ((t = i.attributeName),
            (n = i.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((i = i.type),
                (r = i === 3 || (i === 4 && r === !0) ? '' : '' + r),
                n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
    }
    var rn = na.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      Ai = 60103,
      nn = 60106,
      Er = 60107,
      wu = 60108,
      ji = 60114,
      Eu = 60109,
      Su = 60110,
      ia = 60112,
      Hi = 60113,
      oa = 60120,
      aa = 60115,
      xu = 60116,
      Tu = 60121,
      ku = 60128,
      Jc = 60129,
      Ou = 60130,
      bu = 60131
    typeof Symbol == 'function' &&
      Symbol.for &&
      ((Ie = Symbol.for),
      (Ai = Ie('react.element')),
      (nn = Ie('react.portal')),
      (Er = Ie('react.fragment')),
      (wu = Ie('react.strict_mode')),
      (ji = Ie('react.profiler')),
      (Eu = Ie('react.provider')),
      (Su = Ie('react.context')),
      (ia = Ie('react.forward_ref')),
      (Hi = Ie('react.suspense')),
      (oa = Ie('react.suspense_list')),
      (aa = Ie('react.memo')),
      (xu = Ie('react.lazy')),
      (Tu = Ie('react.block')),
      Ie('react.scope'),
      (ku = Ie('react.opaque.id')),
      (Jc = Ie('react.debug_trace_mode')),
      (Ou = Ie('react.offscreen')),
      (bu = Ie('react.legacy_hidden')))
    var Ie,
      Zc = typeof Symbol == 'function' && Symbol.iterator
    function Bi(e) {
      return e === null || typeof e != 'object'
        ? null
        : ((e = (Zc && e[Zc]) || e['@@iterator']), typeof e == 'function' ? e : null)
    }
    var Pu
    function Ui(e) {
      if (Pu === void 0)
        try {
          throw Error()
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/)
          Pu = (t && t[1]) || ''
        }
      return (
        `
` +
        Pu +
        e
      )
    }
    var Cu = !1
    function sa(e, t) {
      if (!e || Cu) return ''
      Cu = !0
      var r = Error.prepareStackTrace
      Error.prepareStackTrace = void 0
      try {
        if (t)
          if (
            ((t = function () {
              throw Error()
            }),
            Object.defineProperty(t.prototype, 'props', {
              set: function () {
                throw Error()
              },
            }),
            typeof Reflect == 'object' && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, [])
            } catch (u) {
              var n = u
            }
            Reflect.construct(e, [], t)
          } else {
            try {
              t.call()
            } catch (u) {
              n = u
            }
            e.call(t.prototype)
          }
        else {
          try {
            throw Error()
          } catch (u) {
            n = u
          }
          e()
        }
      } catch (u) {
        if (u && n && typeof u.stack == 'string') {
          for (
            var i = u.stack.split(`
`),
              o = n.stack.split(`
`),
              a = i.length - 1,
              s = o.length - 1;
            1 <= a && 0 <= s && i[a] !== o[s];

          )
            s--
          for (; 1 <= a && 0 <= s; a--, s--)
            if (i[a] !== o[s]) {
              if (a !== 1 || s !== 1)
                do
                  if ((a--, s--, 0 > s || i[a] !== o[s]))
                    return (
                      `
` + i[a].replace(' at new ', ' at ')
                    )
                while (1 <= a && 0 <= s)
              break
            }
        }
      } finally {
        ;(Cu = !1), (Error.prepareStackTrace = r)
      }
      return (e = e ? e.displayName || e.name : '') ? Ui(e) : ''
    }
    function vg(e) {
      switch (e.tag) {
        case 5:
          return Ui(e.type)
        case 16:
          return Ui('Lazy')
        case 13:
          return Ui('Suspense')
        case 19:
          return Ui('SuspenseList')
        case 0:
        case 2:
        case 15:
          return (e = sa(e.type, !1)), e
        case 11:
          return (e = sa(e.type.render, !1)), e
        case 22:
          return (e = sa(e.type._render, !1)), e
        case 1:
          return (e = sa(e.type, !0)), e
        default:
          return ''
      }
    }
    function Fn(e) {
      if (e == null) return null
      if (typeof e == 'function') return e.displayName || e.name || null
      if (typeof e == 'string') return e
      switch (e) {
        case Er:
          return 'Fragment'
        case nn:
          return 'Portal'
        case ji:
          return 'Profiler'
        case wu:
          return 'StrictMode'
        case Hi:
          return 'Suspense'
        case oa:
          return 'SuspenseList'
      }
      if (typeof e == 'object')
        switch (e.$$typeof) {
          case Su:
            return (e.displayName || 'Context') + '.Consumer'
          case Eu:
            return (e._context.displayName || 'Context') + '.Provider'
          case ia:
            var t = e.render
            return (
              (t = t.displayName || t.name || ''), e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
            )
          case aa:
            return Fn(e.type)
          case Tu:
            return Fn(e._render)
          case xu:
            ;(t = e._payload), (e = e._init)
            try {
              return Fn(e(t))
            } catch (r) {}
        }
      return null
    }
    function Sr(e) {
      switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'object':
        case 'string':
        case 'undefined':
          return e
        default:
          return ''
      }
    }
    function ed(e) {
      var t = e.type
      return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
    }
    function gg(e) {
      var t = ed(e) ? 'checked' : 'value',
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = '' + e[t]
      if (!e.hasOwnProperty(t) && typeof r != 'undefined' && typeof r.get == 'function' && typeof r.set == 'function') {
        var i = r.get,
          o = r.set
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this)
            },
            set: function (a) {
              ;(n = '' + a), o.call(this, a)
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n
            },
            setValue: function (a) {
              n = '' + a
            },
            stopTracking: function () {
              ;(e._valueTracker = null), delete e[t]
            },
          }
        )
      }
    }
    function ua(e) {
      e._valueTracker || (e._valueTracker = gg(e))
    }
    function td(e) {
      if (!e) return !1
      var t = e._valueTracker
      if (!t) return !0
      var r = t.getValue(),
        n = ''
      return e && (n = ed(e) ? (e.checked ? 'true' : 'false') : e.value), (e = n), e !== r ? (t.setValue(e), !0) : !1
    }
    function la(e) {
      if (((e = e || (typeof document != 'undefined' ? document : void 0)), typeof e == 'undefined')) return null
      try {
        return e.activeElement || e.body
      } catch (t) {
        return e.body
      }
    }
    function Iu(e, t) {
      var r = t.checked
      return ve({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r != null ? r : e._wrapperState.initialChecked,
      })
    }
    function rd(e, t) {
      var r = t.defaultValue == null ? '' : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked
      ;(r = Sr(t.value != null ? t.value : r)),
        (e._wrapperState = {
          initialChecked: n,
          initialValue: r,
          controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
        })
    }
    function nd(e, t) {
      ;(t = t.checked), t != null && _u(e, 'checked', t, !1)
    }
    function Mu(e, t) {
      nd(e, t)
      var r = Sr(t.value),
        n = t.type
      if (r != null)
        n === 'number'
          ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
          : e.value !== '' + r && (e.value = '' + r)
      else if (n === 'submit' || n === 'reset') {
        e.removeAttribute('value')
        return
      }
      t.hasOwnProperty('value')
        ? Du(e, t.type, r)
        : t.hasOwnProperty('defaultValue') && Du(e, t.type, Sr(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function id(e, t, r) {
      if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var n = t.type
        if (!((n !== 'submit' && n !== 'reset') || (t.value !== void 0 && t.value !== null))) return
        ;(t = '' + e._wrapperState.initialValue), r || t === e.value || (e.value = t), (e.defaultValue = t)
      }
      ;(r = e.name),
        r !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        r !== '' && (e.name = r)
    }
    function Du(e, t, r) {
      ;(t !== 'number' || la(e.ownerDocument) !== e) &&
        (r == null
          ? (e.defaultValue = '' + e._wrapperState.initialValue)
          : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
    }
    function yg(e) {
      var t = ''
      return (
        na.Children.forEach(e, function (r) {
          r != null && (t += r)
        }),
        t
      )
    }
    function Ru(e, t) {
      return (e = ve({ children: void 0 }, t)), (t = yg(t.children)) && (e.children = t), e
    }
    function An(e, t, r, n) {
      if (((e = e.options), t)) {
        t = {}
        for (var i = 0; i < r.length; i++) t['$' + r[i]] = !0
        for (r = 0; r < e.length; r++)
          (i = t.hasOwnProperty('$' + e[r].value)),
            e[r].selected !== i && (e[r].selected = i),
            i && n && (e[r].defaultSelected = !0)
      } else {
        for (r = '' + Sr(r), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === r) {
            ;(e[i].selected = !0), n && (e[i].defaultSelected = !0)
            return
          }
          t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
      }
    }
    function Nu(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(L(91))
      return ve({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
    }
    function od(e, t) {
      var r = t.value
      if (r == null) {
        if (((r = t.children), (t = t.defaultValue), r != null)) {
          if (t != null) throw Error(L(92))
          if (Array.isArray(r)) {
            if (!(1 >= r.length)) throw Error(L(93))
            r = r[0]
          }
          t = r
        }
        t == null && (t = ''), (r = t)
      }
      e._wrapperState = { initialValue: Sr(r) }
    }
    function ad(e, t) {
      var r = Sr(t.value),
        n = Sr(t.defaultValue)
      r != null &&
        ((r = '' + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
        n != null && (e.defaultValue = '' + n)
    }
    function sd(e) {
      var t = e.textContent
      t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
    }
    var Lu = {
      html: 'http://www.w3.org/1999/xhtml',
      mathml: 'http://www.w3.org/1998/Math/MathML',
      svg: 'http://www.w3.org/2000/svg',
    }
    function ud(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg'
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML'
        default:
          return 'http://www.w3.org/1999/xhtml'
      }
    }
    function Fu(e, t) {
      return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? ud(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e
    }
    var fa,
      ld = (function (e) {
        return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
          ? function (t, r, n, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, r, n, i)
              })
            }
          : e
      })(function (e, t) {
        if (e.namespaceURI !== Lu.svg || 'innerHTML' in e) e.innerHTML = t
        else {
          for (
            fa = fa || document.createElement('div'),
              fa.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
              t = fa.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild)
          for (; t.firstChild; ) e.appendChild(t.firstChild)
        }
      })
    function zi(e, t) {
      if (t) {
        var r = e.firstChild
        if (r && r === e.lastChild && r.nodeType === 3) {
          r.nodeValue = t
          return
        }
      }
      e.textContent = t
    }
    var Wi = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      _g = ['Webkit', 'ms', 'Moz', 'O']
    Object.keys(Wi).forEach(function (e) {
      _g.forEach(function (t) {
        ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wi[t] = Wi[e])
      })
    })
    function fd(e, t, r) {
      return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : r || typeof t != 'number' || t === 0 || (Wi.hasOwnProperty(e) && Wi[e])
        ? ('' + t).trim()
        : t + 'px'
    }
    function cd(e, t) {
      e = e.style
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var n = r.indexOf('--') === 0,
            i = fd(r, t[r], n)
          r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, i) : (e[r] = i)
        }
    }
    var wg = ve(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    )
    function Au(e, t) {
      if (t) {
        if (wg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e))
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(L(60))
          if (!(typeof t.dangerouslySetInnerHTML == 'object' && '__html' in t.dangerouslySetInnerHTML))
            throw Error(L(61))
        }
        if (t.style != null && typeof t.style != 'object') throw Error(L(62))
      }
    }
    function ju(e, t) {
      if (e.indexOf('-') === -1) return typeof t.is == 'string'
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1
        default:
          return !0
      }
    }
    function Hu(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      )
    }
    var Bu = null,
      jn = null,
      Hn = null
    function dd(e) {
      if ((e = so(e))) {
        if (typeof Bu != 'function') throw Error(L(280))
        var t = e.stateNode
        t && ((t = Ia(t)), Bu(e.stateNode, e.type, t))
      }
    }
    function pd(e) {
      jn ? (Hn ? Hn.push(e) : (Hn = [e])) : (jn = e)
    }
    function md() {
      if (jn) {
        var e = jn,
          t = Hn
        if (((Hn = jn = null), dd(e), t)) for (e = 0; e < t.length; e++) dd(t[e])
      }
    }
    function Uu(e, t) {
      return e(t)
    }
    function hd(e, t, r, n, i) {
      return e(t, r, n, i)
    }
    function zu() {}
    var vd = Uu,
      on = !1,
      Wu = !1
    function qu() {
      ;(jn !== null || Hn !== null) && (zu(), md())
    }
    function Eg(e, t, r) {
      if (Wu) return e(t, r)
      Wu = !0
      try {
        return vd(e, t, r)
      } finally {
        ;(Wu = !1), qu()
      }
    }
    function qi(e, t) {
      var r = e.stateNode
      if (r === null) return null
      var n = Ia(r)
      if (n === null) return null
      r = n[t]
      e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          ;(n = !n.disabled) ||
            ((e = e.type), (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
            (e = !n)
          break e
        default:
          e = !1
      }
      if (e) return null
      if (r && typeof r != 'function') throw Error(L(231, t, typeof r))
      return r
    }
    var Vu = !1
    if (ir)
      try {
        ;(Bn = {}),
          Object.defineProperty(Bn, 'passive', {
            get: function () {
              Vu = !0
            },
          }),
          window.addEventListener('test', Bn, Bn),
          window.removeEventListener('test', Bn, Bn)
      } catch (e) {
        Vu = !1
      }
    var Bn
    function Sg(e, t, r, n, i, o, a, s, u) {
      var l = Array.prototype.slice.call(arguments, 3)
      try {
        t.apply(r, l)
      } catch (c) {
        this.onError(c)
      }
    }
    var Vi = !1,
      ca = null,
      da = !1,
      $u = null,
      xg = {
        onError: function (e) {
          ;(Vi = !0), (ca = e)
        },
      }
    function Tg(e, t, r, n, i, o, a, s, u) {
      ;(Vi = !1), (ca = null), Sg.apply(xg, arguments)
    }
    function kg(e, t, r, n, i, o, a, s, u) {
      if ((Tg.apply(this, arguments), Vi)) {
        if (Vi) {
          var l = ca
          ;(Vi = !1), (ca = null)
        } else throw Error(L(198))
        da || ((da = !0), ($u = l))
      }
    }
    function an(e) {
      var t = e,
        r = e
      if (e.alternate) for (; t.return; ) t = t.return
      else {
        e = t
        do (t = e), (t.flags & 1026) != 0 && (r = t.return), (e = t.return)
        while (e)
      }
      return t.tag === 3 ? r : null
    }
    function gd(e) {
      if (e.tag === 13) {
        var t = e.memoizedState
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
      }
      return null
    }
    function yd(e) {
      if (an(e) !== e) throw Error(L(188))
    }
    function Og(e) {
      var t = e.alternate
      if (!t) {
        if (((t = an(e)), t === null)) throw Error(L(188))
        return t !== e ? null : e
      }
      for (var r = e, n = t; ; ) {
        var i = r.return
        if (i === null) break
        var o = i.alternate
        if (o === null) {
          if (((n = i.return), n !== null)) {
            r = n
            continue
          }
          break
        }
        if (i.child === o.child) {
          for (o = i.child; o; ) {
            if (o === r) return yd(i), e
            if (o === n) return yd(i), t
            o = o.sibling
          }
          throw Error(L(188))
        }
        if (r.return !== n.return) (r = i), (n = o)
        else {
          for (var a = !1, s = i.child; s; ) {
            if (s === r) {
              ;(a = !0), (r = i), (n = o)
              break
            }
            if (s === n) {
              ;(a = !0), (n = i), (r = o)
              break
            }
            s = s.sibling
          }
          if (!a) {
            for (s = o.child; s; ) {
              if (s === r) {
                ;(a = !0), (r = o), (n = i)
                break
              }
              if (s === n) {
                ;(a = !0), (n = o), (r = i)
                break
              }
              s = s.sibling
            }
            if (!a) throw Error(L(189))
          }
        }
        if (r.alternate !== n) throw Error(L(190))
      }
      if (r.tag !== 3) throw Error(L(188))
      return r.stateNode.current === r ? e : t
    }
    function _d(e) {
      if (((e = Og(e)), !e)) return null
      for (var t = e; ; ) {
        if (t.tag === 5 || t.tag === 6) return t
        if (t.child) (t.child.return = t), (t = t.child)
        else {
          if (t === e) break
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null
            t = t.return
          }
          ;(t.sibling.return = t.return), (t = t.sibling)
        }
      }
      return null
    }
    function wd(e, t) {
      for (var r = e.alternate; t !== null; ) {
        if (t === e || t === r) return !0
        t = t.return
      }
      return !1
    }
    var Ed,
      Gu,
      Sd,
      xd,
      Yu = !1,
      zt = [],
      xr = null,
      Tr = null,
      kr = null,
      $i = new Map(),
      Gi = new Map(),
      Yi = [],
      Td =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
          ' '
        )
    function Xu(e, t, r, n, i) {
      return { blockedOn: e, domEventName: t, eventSystemFlags: r | 16, nativeEvent: i, targetContainers: [n] }
    }
    function kd(e, t) {
      switch (e) {
        case 'focusin':
        case 'focusout':
          xr = null
          break
        case 'dragenter':
        case 'dragleave':
          Tr = null
          break
        case 'mouseover':
        case 'mouseout':
          kr = null
          break
        case 'pointerover':
        case 'pointerout':
          $i.delete(t.pointerId)
          break
        case 'gotpointercapture':
        case 'lostpointercapture':
          Gi.delete(t.pointerId)
      }
    }
    function Xi(e, t, r, n, i, o) {
      return e === null || e.nativeEvent !== o
        ? ((e = Xu(t, r, n, i, o)), t !== null && ((t = so(t)), t !== null && Gu(t)), e)
        : ((e.eventSystemFlags |= n), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e)
    }
    function bg(e, t, r, n, i) {
      switch (t) {
        case 'focusin':
          return (xr = Xi(xr, e, t, r, n, i)), !0
        case 'dragenter':
          return (Tr = Xi(Tr, e, t, r, n, i)), !0
        case 'mouseover':
          return (kr = Xi(kr, e, t, r, n, i)), !0
        case 'pointerover':
          var o = i.pointerId
          return $i.set(o, Xi($i.get(o) || null, e, t, r, n, i)), !0
        case 'gotpointercapture':
          return (o = i.pointerId), Gi.set(o, Xi(Gi.get(o) || null, e, t, r, n, i)), !0
      }
      return !1
    }
    function Pg(e) {
      var t = sn(e.target)
      if (t !== null) {
        var r = an(t)
        if (r !== null) {
          if (((t = r.tag), t === 13)) {
            if (((t = gd(r)), t !== null)) {
              ;(e.blockedOn = t),
                xd(e.lanePriority, function () {
                  Fe.unstable_runWithPriority(e.priority, function () {
                    Sd(r)
                  })
                })
              return
            }
          } else if (t === 3 && r.stateNode.hydrate) {
            e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null
            return
          }
        }
      }
      e.blockedOn = null
    }
    function pa(e) {
      if (e.blockedOn !== null) return !1
      for (var t = e.targetContainers; 0 < t.length; ) {
        var r = tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (r !== null) return (t = so(r)), t !== null && Gu(t), (e.blockedOn = r), !1
        t.shift()
      }
      return !0
    }
    function Od(e, t, r) {
      pa(e) && r.delete(t)
    }
    function Cg() {
      for (Yu = !1; 0 < zt.length; ) {
        var e = zt[0]
        if (e.blockedOn !== null) {
          ;(e = so(e.blockedOn)), e !== null && Ed(e)
          break
        }
        for (var t = e.targetContainers; 0 < t.length; ) {
          var r = tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
          if (r !== null) {
            e.blockedOn = r
            break
          }
          t.shift()
        }
        e.blockedOn === null && zt.shift()
      }
      xr !== null && pa(xr) && (xr = null),
        Tr !== null && pa(Tr) && (Tr = null),
        kr !== null && pa(kr) && (kr = null),
        $i.forEach(Od),
        Gi.forEach(Od)
    }
    function Ki(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null), Yu || ((Yu = !0), Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority, Cg)))
    }
    function bd(e) {
      function t(i) {
        return Ki(i, e)
      }
      if (0 < zt.length) {
        Ki(zt[0], e)
        for (var r = 1; r < zt.length; r++) {
          var n = zt[r]
          n.blockedOn === e && (n.blockedOn = null)
        }
      }
      for (
        xr !== null && Ki(xr, e),
          Tr !== null && Ki(Tr, e),
          kr !== null && Ki(kr, e),
          $i.forEach(t),
          Gi.forEach(t),
          r = 0;
        r < Yi.length;
        r++
      )
        (n = Yi[r]), n.blockedOn === e && (n.blockedOn = null)
      for (; 0 < Yi.length && ((r = Yi[0]), r.blockedOn === null); ) Pg(r), r.blockedOn === null && Yi.shift()
    }
    function ma(e, t) {
      var r = {}
      return (r[e.toLowerCase()] = t.toLowerCase()), (r['Webkit' + e] = 'webkit' + t), (r['Moz' + e] = 'moz' + t), r
    }
    var Un = {
        animationend: ma('Animation', 'AnimationEnd'),
        animationiteration: ma('Animation', 'AnimationIteration'),
        animationstart: ma('Animation', 'AnimationStart'),
        transitionend: ma('Transition', 'TransitionEnd'),
      },
      Ku = {},
      Pd = {}
    ir &&
      ((Pd = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete Un.animationend.animation, delete Un.animationiteration.animation, delete Un.animationstart.animation),
      'TransitionEvent' in window || delete Un.transitionend.transition)
    function ha(e) {
      if (Ku[e]) return Ku[e]
      if (!Un[e]) return e
      var t = Un[e],
        r
      for (r in t) if (t.hasOwnProperty(r) && r in Pd) return (Ku[e] = t[r])
      return e
    }
    var Cd = ha('animationend'),
      Id = ha('animationiteration'),
      Md = ha('animationstart'),
      Dd = ha('transitionend'),
      Rd = new Map(),
      Qu = new Map(),
      Ig = [
        'abort',
        'abort',
        Cd,
        'animationEnd',
        Id,
        'animationIteration',
        Md,
        'animationStart',
        'canplay',
        'canPlay',
        'canplaythrough',
        'canPlayThrough',
        'durationchange',
        'durationChange',
        'emptied',
        'emptied',
        'encrypted',
        'encrypted',
        'ended',
        'ended',
        'error',
        'error',
        'gotpointercapture',
        'gotPointerCapture',
        'load',
        'load',
        'loadeddata',
        'loadedData',
        'loadedmetadata',
        'loadedMetadata',
        'loadstart',
        'loadStart',
        'lostpointercapture',
        'lostPointerCapture',
        'playing',
        'playing',
        'progress',
        'progress',
        'seeking',
        'seeking',
        'stalled',
        'stalled',
        'suspend',
        'suspend',
        'timeupdate',
        'timeUpdate',
        Dd,
        'transitionEnd',
        'waiting',
        'waiting',
      ]
    function Ju(e, t) {
      for (var r = 0; r < e.length; r += 2) {
        var n = e[r],
          i = e[r + 1]
        ;(i = 'on' + (i[0].toUpperCase() + i.slice(1))), Qu.set(n, t), Rd.set(n, i), tn(i, [n])
      }
    }
    var Mg = Fe.unstable_now
    Mg()
    var fe = 8
    function zn(e) {
      if ((1 & e) != 0) return (fe = 15), 1
      if ((2 & e) != 0) return (fe = 14), 2
      if ((4 & e) != 0) return (fe = 13), 4
      var t = 24 & e
      return t !== 0
        ? ((fe = 12), t)
        : (e & 32) != 0
        ? ((fe = 11), 32)
        : ((t = 192 & e),
          t !== 0
            ? ((fe = 10), t)
            : (e & 256) != 0
            ? ((fe = 9), 256)
            : ((t = 3584 & e),
              t !== 0
                ? ((fe = 8), t)
                : (e & 4096) != 0
                ? ((fe = 7), 4096)
                : ((t = 4186112 & e),
                  t !== 0
                    ? ((fe = 6), t)
                    : ((t = 62914560 & e),
                      t !== 0
                        ? ((fe = 5), t)
                        : e & 67108864
                        ? ((fe = 4), 67108864)
                        : (e & 134217728) != 0
                        ? ((fe = 3), 134217728)
                        : ((t = 805306368 & e),
                          t !== 0 ? ((fe = 2), t) : (1073741824 & e) != 0 ? ((fe = 1), 1073741824) : ((fe = 8), e))))))
    }
    function Dg(e) {
      switch (e) {
        case 99:
          return 15
        case 98:
          return 10
        case 97:
        case 96:
          return 8
        case 95:
          return 2
        default:
          return 0
      }
    }
    function Rg(e) {
      switch (e) {
        case 15:
        case 14:
          return 99
        case 13:
        case 12:
        case 11:
        case 10:
          return 98
        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
          return 97
        case 3:
        case 2:
        case 1:
          return 95
        case 0:
          return 90
        default:
          throw Error(L(358, e))
      }
    }
    function Qi(e, t) {
      var r = e.pendingLanes
      if (r === 0) return (fe = 0)
      var n = 0,
        i = 0,
        o = e.expiredLanes,
        a = e.suspendedLanes,
        s = e.pingedLanes
      if (o !== 0) (n = o), (i = fe = 15)
      else if (((o = r & 134217727), o !== 0)) {
        var u = o & ~a
        u !== 0 ? ((n = zn(u)), (i = fe)) : ((s &= o), s !== 0 && ((n = zn(s)), (i = fe)))
      } else (o = r & ~a), o !== 0 ? ((n = zn(o)), (i = fe)) : s !== 0 && ((n = zn(s)), (i = fe))
      if (n === 0) return 0
      if (((n = 31 - Or(n)), (n = r & (((0 > n ? 0 : 1 << n) << 1) - 1)), t !== 0 && t !== n && (t & a) == 0)) {
        if ((zn(t), i <= fe)) return t
        fe = i
      }
      if (((t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= n; 0 < t; ) (r = 31 - Or(t)), (i = 1 << r), (n |= e[r]), (t &= ~i)
      return n
    }
    function Nd(e) {
      return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function va(e, t) {
      switch (e) {
        case 15:
          return 1
        case 14:
          return 2
        case 12:
          return (e = Wn(24 & ~t)), e === 0 ? va(10, t) : e
        case 10:
          return (e = Wn(192 & ~t)), e === 0 ? va(8, t) : e
        case 8:
          return (e = Wn(3584 & ~t)), e === 0 && ((e = Wn(4186112 & ~t)), e === 0 && (e = 512)), e
        case 2:
          return (t = Wn(805306368 & ~t)), t === 0 && (t = 268435456), t
      }
      throw Error(L(358, e))
    }
    function Wn(e) {
      return e & -e
    }
    function Zu(e) {
      for (var t = [], r = 0; 31 > r; r++) t.push(e)
      return t
    }
    function ga(e, t, r) {
      e.pendingLanes |= t
      var n = t - 1
      ;(e.suspendedLanes &= n), (e.pingedLanes &= n), (e = e.eventTimes), (t = 31 - Or(t)), (e[t] = r)
    }
    var Or = Math.clz32 ? Math.clz32 : Fg,
      Ng = Math.log,
      Lg = Math.LN2
    function Fg(e) {
      return e === 0 ? 32 : (31 - ((Ng(e) / Lg) | 0)) | 0
    }
    var Ag = Fe.unstable_UserBlockingPriority,
      jg = Fe.unstable_runWithPriority,
      ya = !0
    function Hg(e, t, r, n) {
      on || zu()
      var i = el,
        o = on
      on = !0
      try {
        hd(i, e, t, r, n)
      } finally {
        ;(on = o) || qu()
      }
    }
    function Bg(e, t, r, n) {
      jg(Ag, el.bind(null, e, t, r, n))
    }
    function el(e, t, r, n) {
      if (ya) {
        var i
        if ((i = (t & 4) == 0) && 0 < zt.length && -1 < Td.indexOf(e)) (e = Xu(null, e, t, r, n)), zt.push(e)
        else {
          var o = tl(e, t, r, n)
          if (o === null) i && kd(e, n)
          else {
            if (i) {
              if (-1 < Td.indexOf(e)) {
                ;(e = Xu(o, e, t, r, n)), zt.push(e)
                return
              }
              if (bg(o, e, t, r, n)) return
              kd(e, n)
            }
            lp(e, t, n, null, r)
          }
        }
      }
    }
    function tl(e, t, r, n) {
      var i = Hu(n)
      if (((i = sn(i)), i !== null)) {
        var o = an(i)
        if (o === null) i = null
        else {
          var a = o.tag
          if (a === 13) {
            if (((i = gd(o)), i !== null)) return i
            i = null
          } else if (a === 3) {
            if (o.stateNode.hydrate) return o.tag === 3 ? o.stateNode.containerInfo : null
            i = null
          } else o !== i && (i = null)
        }
      }
      return lp(e, t, n, i, r), null
    }
    var br = null,
      rl = null,
      _a = null
    function Ld() {
      if (_a) return _a
      var e,
        t = rl,
        r = t.length,
        n,
        i = 'value' in br ? br.value : br.textContent,
        o = i.length
      for (e = 0; e < r && t[e] === i[e]; e++);
      var a = r - e
      for (n = 1; n <= a && t[r - n] === i[o - n]; n++);
      return (_a = i.slice(e, 1 < n ? 1 - n : void 0))
    }
    function wa(e) {
      var t = e.keyCode
      return (
        'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      )
    }
    function Ea() {
      return !0
    }
    function Fd() {
      return !1
    }
    function dt(e) {
      function t(r, n, i, o, a) {
        ;(this._reactName = r),
          (this._targetInst = i),
          (this.type = n),
          (this.nativeEvent = o),
          (this.target = a),
          (this.currentTarget = null)
        for (var s in e) e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(o) : o[s]))
        return (
          (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1)
            ? Ea
            : Fd),
          (this.isPropagationStopped = Fd),
          this
        )
      }
      return (
        ve(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0
            var r = this.nativeEvent
            r &&
              (r.preventDefault ? r.preventDefault() : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
              (this.isDefaultPrevented = Ea))
          },
          stopPropagation: function () {
            var r = this.nativeEvent
            r &&
              (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
              (this.isPropagationStopped = Ea))
          },
          persist: function () {},
          isPersistent: Ea,
        }),
        t
      )
    }
    var qn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      nl = dt(qn),
      Ji = ve({}, qn, { view: 0, detail: 0 }),
      Ug = dt(Ji),
      il,
      ol,
      Zi,
      Sa = ve({}, Ji, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: sl,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget
        },
        movementX: function (e) {
          return 'movementX' in e
            ? e.movementX
            : (e !== Zi &&
                (Zi && e.type === 'mousemove'
                  ? ((il = e.screenX - Zi.screenX), (ol = e.screenY - Zi.screenY))
                  : (ol = il = 0),
                (Zi = e)),
              il)
        },
        movementY: function (e) {
          return 'movementY' in e ? e.movementY : ol
        },
      }),
      Ad = dt(Sa),
      zg = ve({}, Sa, { dataTransfer: 0 }),
      Wg = dt(zg),
      qg = ve({}, Ji, { relatedTarget: 0 }),
      al = dt(qg),
      Vg = ve({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      $g = dt(Vg),
      Gg = ve({}, qn, {
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData
        },
      }),
      Yg = dt(Gg),
      Xg = ve({}, qn, { data: 0 }),
      jd = dt(Xg),
      Kg = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      Qg = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      Jg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
    function Zg(e) {
      var t = this.nativeEvent
      return t.getModifierState ? t.getModifierState(e) : (e = Jg[e]) ? !!t[e] : !1
    }
    function sl() {
      return Zg
    }
    var ey = ve({}, Ji, {
        key: function (e) {
          if (e.key) {
            var t = Kg[e.key] || e.key
            if (t !== 'Unidentified') return t
          }
          return e.type === 'keypress'
            ? ((e = wa(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
            : e.type === 'keydown' || e.type === 'keyup'
            ? Qg[e.keyCode] || 'Unidentified'
            : ''
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: sl,
        charCode: function (e) {
          return e.type === 'keypress' ? wa(e) : 0
        },
        keyCode: function (e) {
          return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
        },
        which: function (e) {
          return e.type === 'keypress' ? wa(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
        },
      }),
      ty = dt(ey),
      ry = ve({}, Sa, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Hd = dt(ry),
      ny = ve({}, Ji, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: sl,
      }),
      iy = dt(ny),
      oy = ve({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ay = dt(oy),
      sy = ve({}, Sa, {
        deltaX: function (e) {
          return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
          return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      uy = dt(sy),
      ly = [9, 13, 27, 32],
      ul = ir && 'CompositionEvent' in window,
      eo = null
    ir && 'documentMode' in document && (eo = document.documentMode)
    var fy = ir && 'TextEvent' in window && !eo,
      Bd = ir && (!ul || (eo && 8 < eo && 11 >= eo)),
      Ud = String.fromCharCode(32),
      zd = !1
    function Wd(e, t) {
      switch (e) {
        case 'keyup':
          return ly.indexOf(t.keyCode) !== -1
        case 'keydown':
          return t.keyCode !== 229
        case 'keypress':
        case 'mousedown':
        case 'focusout':
          return !0
        default:
          return !1
      }
    }
    function qd(e) {
      return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
    }
    var Vn = !1
    function cy(e, t) {
      switch (e) {
        case 'compositionend':
          return qd(t)
        case 'keypress':
          return t.which !== 32 ? null : ((zd = !0), Ud)
        case 'textInput':
          return (e = t.data), e === Ud && zd ? null : e
        default:
          return null
      }
    }
    function dy(e, t) {
      if (Vn)
        return e === 'compositionend' || (!ul && Wd(e, t)) ? ((e = Ld()), (_a = rl = br = null), (Vn = !1), e) : null
      switch (e) {
        case 'paste':
          return null
        case 'keypress':
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char
            if (t.which) return String.fromCharCode(t.which)
          }
          return null
        case 'compositionend':
          return Bd && t.locale !== 'ko' ? null : t.data
        default:
          return null
      }
    }
    var py = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    }
    function Vd(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return t === 'input' ? !!py[e.type] : t === 'textarea'
    }
    function $d(e, t, r, n) {
      pd(n),
        (t = Oa(t, 'onChange')),
        0 < t.length && ((r = new nl('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t }))
    }
    var to = null,
      ro = null
    function my(e) {
      ip(e, 0)
    }
    function xa(e) {
      var t = Kn(e)
      if (td(t)) return e
    }
    function hy(e, t) {
      if (e === 'change') return t
    }
    var Gd = !1
    ir &&
      (ir
        ? ((ka = 'oninput' in document),
          ka ||
            ((ll = document.createElement('div')),
            ll.setAttribute('oninput', 'return;'),
            (ka = typeof ll.oninput == 'function')),
          (Ta = ka))
        : (Ta = !1),
      (Gd = Ta && (!document.documentMode || 9 < document.documentMode)))
    var Ta, ka, ll
    function Yd() {
      to && (to.detachEvent('onpropertychange', Xd), (ro = to = null))
    }
    function Xd(e) {
      if (e.propertyName === 'value' && xa(ro)) {
        var t = []
        if (($d(t, ro, e, Hu(e)), (e = my), on)) e(t)
        else {
          on = !0
          try {
            Uu(e, t)
          } finally {
            ;(on = !1), qu()
          }
        }
      }
    }
    function vy(e, t, r) {
      e === 'focusin' ? (Yd(), (to = t), (ro = r), to.attachEvent('onpropertychange', Xd)) : e === 'focusout' && Yd()
    }
    function gy(e) {
      if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return xa(ro)
    }
    function yy(e, t) {
      if (e === 'click') return xa(t)
    }
    function _y(e, t) {
      if (e === 'input' || e === 'change') return xa(t)
    }
    function wy(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
    }
    var Et = typeof Object.is == 'function' ? Object.is : wy,
      Ey = Object.prototype.hasOwnProperty
    function no(e, t) {
      if (Et(e, t)) return !0
      if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
      var r = Object.keys(e),
        n = Object.keys(t)
      if (r.length !== n.length) return !1
      for (n = 0; n < r.length; n++) if (!Ey.call(t, r[n]) || !Et(e[r[n]], t[r[n]])) return !1
      return !0
    }
    function Kd(e) {
      for (; e && e.firstChild; ) e = e.firstChild
      return e
    }
    function Qd(e, t) {
      var r = Kd(e)
      e = 0
      for (var n; r; ) {
        if (r.nodeType === 3) {
          if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e }
          e = n
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling
              break e
            }
            r = r.parentNode
          }
          r = void 0
        }
        r = Kd(r)
      }
    }
    function Jd(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? Jd(e, t.parentNode)
          : 'contains' in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1
    }
    function Zd() {
      for (var e = window, t = la(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = typeof t.contentWindow.location.href == 'string'
        } catch (n) {
          r = !1
        }
        if (r) e = t.contentWindow
        else break
        t = la(e.document)
      }
      return t
    }
    function fl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return (
        t &&
        ((t === 'input' &&
          (e.type === 'text' ||
            e.type === 'search' ||
            e.type === 'tel' ||
            e.type === 'url' ||
            e.type === 'password')) ||
          t === 'textarea' ||
          e.contentEditable === 'true')
      )
    }
    var Sy = ir && 'documentMode' in document && 11 >= document.documentMode,
      $n = null,
      cl = null,
      io = null,
      dl = !1
    function ep(e, t, r) {
      var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
      dl ||
        $n == null ||
        $n !== la(n) ||
        ((n = $n),
        'selectionStart' in n && fl(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
            (n = {
              anchorNode: n.anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
            })),
        (io && no(io, n)) ||
          ((io = n),
          (n = Oa(cl, 'onSelect')),
          0 < n.length &&
            ((t = new nl('onSelect', 'select', null, t, r)), e.push({ event: t, listeners: n }), (t.target = $n))))
    }
    Ju(
      'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
        ' '
      ),
      0
    )
    Ju(
      'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
        ' '
      ),
      1
    )
    Ju(Ig, 2)
    for (
      var tp = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(' '), pl = 0;
      pl < tp.length;
      pl++
    )
      Qu.set(tp[pl], 0)
    Ln('onMouseEnter', ['mouseout', 'mouseover'])
    Ln('onMouseLeave', ['mouseout', 'mouseover'])
    Ln('onPointerEnter', ['pointerout', 'pointerover'])
    Ln('onPointerLeave', ['pointerout', 'pointerover'])
    tn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
    tn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
    tn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
    tn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
    tn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
    tn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
    var oo =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
      rp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(oo))
    function np(e, t, r) {
      var n = e.type || 'unknown-event'
      ;(e.currentTarget = r), kg(n, t, void 0, e), (e.currentTarget = null)
    }
    function ip(e, t) {
      t = (t & 4) != 0
      for (var r = 0; r < e.length; r++) {
        var n = e[r],
          i = n.event
        n = n.listeners
        e: {
          var o = void 0
          if (t)
            for (var a = n.length - 1; 0 <= a; a--) {
              var s = n[a],
                u = s.instance,
                l = s.currentTarget
              if (((s = s.listener), u !== o && i.isPropagationStopped())) break e
              np(i, s, l), (o = u)
            }
          else
            for (a = 0; a < n.length; a++) {
              if (
                ((s = n[a]),
                (u = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                u !== o && i.isPropagationStopped())
              )
                break e
              np(i, s, l), (o = u)
            }
        }
      }
      if (da) throw ((e = $u), (da = !1), ($u = null), e)
    }
    function de(e, t) {
      var r = hp(t),
        n = e + '__bubble'
      r.has(n) || (up(t, e, 2, !1), r.add(n))
    }
    var op = '_reactListening' + Math.random().toString(36).slice(2)
    function ap(e) {
      e[op] ||
        ((e[op] = !0),
        Yc.forEach(function (t) {
          rp.has(t) || sp(t, !1, e, null), sp(t, !0, e, null)
        }))
    }
    function sp(e, t, r, n) {
      var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
        o = r
      if ((e === 'selectionchange' && r.nodeType !== 9 && (o = r.ownerDocument), n !== null && !t && rp.has(e))) {
        if (e !== 'scroll') return
        ;(i |= 2), (o = n)
      }
      var a = hp(o),
        s = e + '__' + (t ? 'capture' : 'bubble')
      a.has(s) || (t && (i |= 4), up(o, e, i, t), a.add(s))
    }
    function up(e, t, r, n) {
      var i = Qu.get(t)
      switch (i === void 0 ? 2 : i) {
        case 0:
          i = Hg
          break
        case 1:
          i = Bg
          break
        default:
          i = el
      }
      ;(r = i.bind(null, t, r, e)),
        (i = void 0),
        !Vu || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
        n
          ? i !== void 0
            ? e.addEventListener(t, r, { capture: !0, passive: i })
            : e.addEventListener(t, r, !0)
          : i !== void 0
          ? e.addEventListener(t, r, { passive: i })
          : e.addEventListener(t, r, !1)
    }
    function lp(e, t, r, n, i) {
      var o = n
      if ((t & 1) == 0 && (t & 2) == 0 && n !== null)
        e: for (;;) {
          if (n === null) return
          var a = n.tag
          if (a === 3 || a === 4) {
            var s = n.stateNode.containerInfo
            if (s === i || (s.nodeType === 8 && s.parentNode === i)) break
            if (a === 4)
              for (a = n.return; a !== null; ) {
                var u = a.tag
                if (
                  (u === 3 || u === 4) &&
                  ((u = a.stateNode.containerInfo), u === i || (u.nodeType === 8 && u.parentNode === i))
                )
                  return
                a = a.return
              }
            for (; s !== null; ) {
              if (((a = sn(s)), a === null)) return
              if (((u = a.tag), u === 5 || u === 6)) {
                n = o = a
                continue e
              }
              s = s.parentNode
            }
          }
          n = n.return
        }
      Eg(function () {
        var l = o,
          c = Hu(r),
          m = []
        e: {
          var h = Rd.get(e)
          if (h !== void 0) {
            var _ = nl,
              S = e
            switch (e) {
              case 'keypress':
                if (wa(r) === 0) break e
              case 'keydown':
              case 'keyup':
                _ = ty
                break
              case 'focusin':
                ;(S = 'focus'), (_ = al)
                break
              case 'focusout':
                ;(S = 'blur'), (_ = al)
                break
              case 'beforeblur':
              case 'afterblur':
                _ = al
                break
              case 'click':
                if (r.button === 2) break e
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                _ = Ad
                break
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                _ = Wg
                break
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                _ = iy
                break
              case Cd:
              case Id:
              case Md:
                _ = $g
                break
              case Dd:
                _ = ay
                break
              case 'scroll':
                _ = Ug
                break
              case 'wheel':
                _ = uy
                break
              case 'copy':
              case 'cut':
              case 'paste':
                _ = Yg
                break
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                _ = Hd
            }
            var x = (t & 4) != 0,
              p = !x && e === 'scroll',
              d = x ? (h !== null ? h + 'Capture' : null) : h
            x = []
            for (var v = l, y; v !== null; ) {
              y = v
              var E = y.stateNode
              if (
                (y.tag === 5 &&
                  E !== null &&
                  ((y = E), d !== null && ((E = qi(v, d)), E != null && x.push(ao(v, E, y)))),
                p)
              )
                break
              v = v.return
            }
            0 < x.length && ((h = new _(h, S, null, r, c)), m.push({ event: h, listeners: x }))
          }
        }
        if ((t & 7) == 0) {
          e: {
            if (
              ((h = e === 'mouseover' || e === 'pointerover'),
              (_ = e === 'mouseout' || e === 'pointerout'),
              h && (t & 16) == 0 && (S = r.relatedTarget || r.fromElement) && (sn(S) || S[Xn]))
            )
              break e
            if (
              (_ || h) &&
              ((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
              _
                ? ((S = r.relatedTarget || r.toElement),
                  (_ = l),
                  (S = S ? sn(S) : null),
                  S !== null && ((p = an(S)), S !== p || (S.tag !== 5 && S.tag !== 6)) && (S = null))
                : ((_ = null), (S = l)),
              _ !== S)
            ) {
              if (
                ((x = Ad),
                (E = 'onMouseLeave'),
                (d = 'onMouseEnter'),
                (v = 'mouse'),
                (e === 'pointerout' || e === 'pointerover') &&
                  ((x = Hd), (E = 'onPointerLeave'), (d = 'onPointerEnter'), (v = 'pointer')),
                (p = _ == null ? h : Kn(_)),
                (y = S == null ? h : Kn(S)),
                (h = new x(E, v + 'leave', _, r, c)),
                (h.target = p),
                (h.relatedTarget = y),
                (E = null),
                sn(c) === l && ((x = new x(d, v + 'enter', S, r, c)), (x.target = y), (x.relatedTarget = p), (E = x)),
                (p = E),
                _ && S)
              )
                t: {
                  for (x = _, d = S, v = 0, y = x; y; y = Gn(y)) v++
                  for (y = 0, E = d; E; E = Gn(E)) y++
                  for (; 0 < v - y; ) (x = Gn(x)), v--
                  for (; 0 < y - v; ) (d = Gn(d)), y--
                  for (; v--; ) {
                    if (x === d || (d !== null && x === d.alternate)) break t
                    ;(x = Gn(x)), (d = Gn(d))
                  }
                  x = null
                }
              else x = null
              _ !== null && fp(m, h, _, x, !1), S !== null && p !== null && fp(m, p, S, x, !0)
            }
          }
          e: {
            if (
              ((h = l ? Kn(l) : window),
              (_ = h.nodeName && h.nodeName.toLowerCase()),
              _ === 'select' || (_ === 'input' && h.type === 'file'))
            )
              var D = hy
            else if (Vd(h))
              if (Gd) D = _y
              else {
                D = gy
                var b = vy
              }
            else
              (_ = h.nodeName) &&
                _.toLowerCase() === 'input' &&
                (h.type === 'checkbox' || h.type === 'radio') &&
                (D = yy)
            if (D && (D = D(e, l))) {
              $d(m, D, r, c)
              break e
            }
            b && b(e, h, l),
              e === 'focusout' &&
                (b = h._wrapperState) &&
                b.controlled &&
                h.type === 'number' &&
                Du(h, 'number', h.value)
          }
          switch (((b = l ? Kn(l) : window), e)) {
            case 'focusin':
              ;(Vd(b) || b.contentEditable === 'true') && (($n = b), (cl = l), (io = null))
              break
            case 'focusout':
              io = cl = $n = null
              break
            case 'mousedown':
              dl = !0
              break
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              ;(dl = !1), ep(m, r, c)
              break
            case 'selectionchange':
              if (Sy) break
            case 'keydown':
            case 'keyup':
              ep(m, r, c)
          }
          var P
          if (ul)
            e: {
              switch (e) {
                case 'compositionstart':
                  var M = 'onCompositionStart'
                  break e
                case 'compositionend':
                  M = 'onCompositionEnd'
                  break e
                case 'compositionupdate':
                  M = 'onCompositionUpdate'
                  break e
              }
              M = void 0
            }
          else
            Vn
              ? Wd(e, r) && (M = 'onCompositionEnd')
              : e === 'keydown' && r.keyCode === 229 && (M = 'onCompositionStart')
          M &&
            (Bd &&
              r.locale !== 'ko' &&
              (Vn || M !== 'onCompositionStart'
                ? M === 'onCompositionEnd' && Vn && (P = Ld())
                : ((br = c), (rl = 'value' in br ? br.value : br.textContent), (Vn = !0))),
            (b = Oa(l, M)),
            0 < b.length &&
              ((M = new jd(M, e, null, r, c)),
              m.push({ event: M, listeners: b }),
              P ? (M.data = P) : ((P = qd(r)), P !== null && (M.data = P)))),
            (P = fy ? cy(e, r) : dy(e, r)) &&
              ((l = Oa(l, 'onBeforeInput')),
              0 < l.length &&
                ((c = new jd('onBeforeInput', 'beforeinput', null, r, c)),
                m.push({ event: c, listeners: l }),
                (c.data = P)))
        }
        ip(m, t)
      })
    }
    function ao(e, t, r) {
      return { instance: e, listener: t, currentTarget: r }
    }
    function Oa(e, t) {
      for (var r = t + 'Capture', n = []; e !== null; ) {
        var i = e,
          o = i.stateNode
        i.tag === 5 &&
          o !== null &&
          ((i = o),
          (o = qi(e, r)),
          o != null && n.unshift(ao(e, o, i)),
          (o = qi(e, t)),
          o != null && n.push(ao(e, o, i))),
          (e = e.return)
      }
      return n
    }
    function Gn(e) {
      if (e === null) return null
      do e = e.return
      while (e && e.tag !== 5)
      return e || null
    }
    function fp(e, t, r, n, i) {
      for (var o = t._reactName, a = []; r !== null && r !== n; ) {
        var s = r,
          u = s.alternate,
          l = s.stateNode
        if (u !== null && u === n) break
        s.tag === 5 &&
          l !== null &&
          ((s = l),
          i
            ? ((u = qi(r, o)), u != null && a.unshift(ao(r, u, s)))
            : i || ((u = qi(r, o)), u != null && a.push(ao(r, u, s)))),
          (r = r.return)
      }
      a.length !== 0 && e.push({ event: t, listeners: a })
    }
    function ba() {}
    var ml = null,
      hl = null
    function cp(e, t) {
      switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          return !!t.autoFocus
      }
      return !1
    }
    function vl(e, t) {
      return (
        e === 'textarea' ||
        e === 'option' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      )
    }
    var dp = typeof setTimeout == 'function' ? setTimeout : void 0,
      xy = typeof clearTimeout == 'function' ? clearTimeout : void 0
    function gl(e) {
      e.nodeType === 1 ? (e.textContent = '') : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''))
    }
    function Yn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
      }
      return e
    }
    function pp(e) {
      e = e.previousSibling
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data
          if (r === '$' || r === '$!' || r === '$?') {
            if (t === 0) return e
            t--
          } else r === '/$' && t++
        }
        e = e.previousSibling
      }
      return null
    }
    var yl = 0
    function Ty(e) {
      return { $$typeof: ku, toString: e, valueOf: e }
    }
    var Pa = Math.random().toString(36).slice(2),
      Pr = '__reactFiber$' + Pa,
      Ca = '__reactProps$' + Pa,
      Xn = '__reactContainer$' + Pa,
      mp = '__reactEvents$' + Pa
    function sn(e) {
      var t = e[Pr]
      if (t) return t
      for (var r = e.parentNode; r; ) {
        if ((t = r[Xn] || r[Pr])) {
          if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
            for (e = pp(e); e !== null; ) {
              if ((r = e[Pr])) return r
              e = pp(e)
            }
          return t
        }
        ;(e = r), (r = e.parentNode)
      }
      return null
    }
    function so(e) {
      return (e = e[Pr] || e[Xn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    }
    function Kn(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode
      throw Error(L(33))
    }
    function Ia(e) {
      return e[Ca] || null
    }
    function hp(e) {
      var t = e[mp]
      return t === void 0 && (t = e[mp] = new Set()), t
    }
    var _l = [],
      Qn = -1
    function Cr(e) {
      return { current: e }
    }
    function pe(e) {
      0 > Qn || ((e.current = _l[Qn]), (_l[Qn] = null), Qn--)
    }
    function xe(e, t) {
      Qn++, (_l[Qn] = e.current), (e.current = t)
    }
    var Ir = {},
      Ye = Cr(Ir),
      ot = Cr(!1),
      un = Ir
    function Jn(e, t) {
      var r = e.type.contextTypes
      if (!r) return Ir
      var n = e.stateNode
      if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext
      var i = {},
        o
      for (o in r) i[o] = t[o]
      return (
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      )
    }
    function at(e) {
      return (e = e.childContextTypes), e != null
    }
    function Ma() {
      pe(ot), pe(Ye)
    }
    function vp(e, t, r) {
      if (Ye.current !== Ir) throw Error(L(168))
      xe(Ye, t), xe(ot, r)
    }
    function gp(e, t, r) {
      var n = e.stateNode
      if (((e = t.childContextTypes), typeof n.getChildContext != 'function')) return r
      n = n.getChildContext()
      for (var i in n) if (!(i in e)) throw Error(L(108, Fn(t) || 'Unknown', i))
      return ve({}, r, n)
    }
    function Da(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ir),
        (un = Ye.current),
        xe(Ye, e),
        xe(ot, ot.current),
        !0
      )
    }
    function yp(e, t, r) {
      var n = e.stateNode
      if (!n) throw Error(L(169))
      r ? ((e = gp(e, t, un)), (n.__reactInternalMemoizedMergedChildContext = e), pe(ot), pe(Ye), xe(Ye, e)) : pe(ot),
        xe(ot, r)
    }
    var wl = null,
      ln = null,
      ky = Fe.unstable_runWithPriority,
      El = Fe.unstable_scheduleCallback,
      Sl = Fe.unstable_cancelCallback,
      Oy = Fe.unstable_shouldYield,
      _p = Fe.unstable_requestPaint,
      xl = Fe.unstable_now,
      by = Fe.unstable_getCurrentPriorityLevel,
      Ra = Fe.unstable_ImmediatePriority,
      wp = Fe.unstable_UserBlockingPriority,
      Ep = Fe.unstable_NormalPriority,
      Sp = Fe.unstable_LowPriority,
      xp = Fe.unstable_IdlePriority,
      Tl = {},
      Py = _p !== void 0 ? _p : function () {},
      or = null,
      Na = null,
      kl = !1,
      Tp = xl(),
      Xe =
        1e4 > Tp
          ? xl
          : function () {
              return xl() - Tp
            }
    function Zn() {
      switch (by()) {
        case Ra:
          return 99
        case wp:
          return 98
        case Ep:
          return 97
        case Sp:
          return 96
        case xp:
          return 95
        default:
          throw Error(L(332))
      }
    }
    function kp(e) {
      switch (e) {
        case 99:
          return Ra
        case 98:
          return wp
        case 97:
          return Ep
        case 96:
          return Sp
        case 95:
          return xp
        default:
          throw Error(L(332))
      }
    }
    function fn(e, t) {
      return (e = kp(e)), ky(e, t)
    }
    function uo(e, t, r) {
      return (e = kp(e)), El(e, t, r)
    }
    function Wt() {
      if (Na !== null) {
        var e = Na
        ;(Na = null), Sl(e)
      }
      Op()
    }
    function Op() {
      if (!kl && or !== null) {
        kl = !0
        var e = 0
        try {
          var t = or
          fn(99, function () {
            for (; e < t.length; e++) {
              var r = t[e]
              do r = r(!0)
              while (r !== null)
            }
          }),
            (or = null)
        } catch (r) {
          throw (or !== null && (or = or.slice(e + 1)), El(Ra, Wt), r)
        } finally {
          kl = !1
        }
      }
    }
    var Cy = rn.ReactCurrentBatchConfig
    function Dt(e, t) {
      if (e && e.defaultProps) {
        ;(t = ve({}, t)), (e = e.defaultProps)
        for (var r in e) t[r] === void 0 && (t[r] = e[r])
        return t
      }
      return t
    }
    var La = Cr(null),
      Fa = null,
      ei = null,
      Aa = null
    function Ol() {
      Aa = ei = Fa = null
    }
    function bl(e) {
      var t = La.current
      pe(La), (e.type._context._currentValue = t)
    }
    function bp(e, t) {
      for (; e !== null; ) {
        var r = e.alternate
        if ((e.childLanes & t) === t) {
          if (r === null || (r.childLanes & t) === t) break
          r.childLanes |= t
        } else (e.childLanes |= t), r !== null && (r.childLanes |= t)
        e = e.return
      }
    }
    function ti(e, t) {
      ;(Fa = e),
        (Aa = ei = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && ((e.lanes & t) != 0 && (Rt = !0), (e.firstContext = null))
    }
    function St(e, t) {
      if (Aa !== e && t !== !1 && t !== 0)
        if (
          ((typeof t != 'number' || t === 1073741823) && ((Aa = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          ei === null)
        ) {
          if (Fa === null) throw Error(L(308))
          ;(ei = t), (Fa.dependencies = { lanes: 0, firstContext: t, responders: null })
        } else ei = ei.next = t
      return e._currentValue
    }
    var Mr = !1
    function Pl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null },
        effects: null,
      }
    }
    function Pp(e, t) {
      ;(e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          })
    }
    function Dr(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
    }
    function Rr(e, t) {
      if (((e = e.updateQueue), e !== null)) {
        e = e.shared
        var r = e.pending
        r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
      }
    }
    function Cp(e, t) {
      var r = e.updateQueue,
        n = e.alternate
      if (n !== null && ((n = n.updateQueue), r === n)) {
        var i = null,
          o = null
        if (((r = r.firstBaseUpdate), r !== null)) {
          do {
            var a = {
              eventTime: r.eventTime,
              lane: r.lane,
              tag: r.tag,
              payload: r.payload,
              callback: r.callback,
              next: null,
            }
            o === null ? (i = o = a) : (o = o.next = a), (r = r.next)
          } while (r !== null)
          o === null ? (i = o = t) : (o = o.next = t)
        } else i = o = t
        ;(r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: n.shared, effects: n.effects }),
          (e.updateQueue = r)
        return
      }
      ;(e = r.lastBaseUpdate), e === null ? (r.firstBaseUpdate = t) : (e.next = t), (r.lastBaseUpdate = t)
    }
    function lo(e, t, r, n) {
      var i = e.updateQueue
      Mr = !1
      var o = i.firstBaseUpdate,
        a = i.lastBaseUpdate,
        s = i.shared.pending
      if (s !== null) {
        i.shared.pending = null
        var u = s,
          l = u.next
        ;(u.next = null), a === null ? (o = l) : (a.next = l), (a = u)
        var c = e.alternate
        if (c !== null) {
          c = c.updateQueue
          var m = c.lastBaseUpdate
          m !== a && (m === null ? (c.firstBaseUpdate = l) : (m.next = l), (c.lastBaseUpdate = u))
        }
      }
      if (o !== null) {
        ;(m = i.baseState), (a = 0), (c = l = u = null)
        do {
          s = o.lane
          var h = o.eventTime
          if ((n & s) === s) {
            c !== null &&
              (c = c.next = { eventTime: h, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null })
            e: {
              var _ = e,
                S = o
              switch (((s = t), (h = r), S.tag)) {
                case 1:
                  if (((_ = S.payload), typeof _ == 'function')) {
                    m = _.call(h, m, s)
                    break e
                  }
                  m = _
                  break e
                case 3:
                  _.flags = (_.flags & -4097) | 64
                case 0:
                  if (((_ = S.payload), (s = typeof _ == 'function' ? _.call(h, m, s) : _), s == null)) break e
                  m = ve({}, m, s)
                  break e
                case 2:
                  Mr = !0
              }
            }
            o.callback !== null && ((e.flags |= 32), (s = i.effects), s === null ? (i.effects = [o]) : s.push(o))
          } else
            (h = { eventTime: h, lane: s, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
              c === null ? ((l = c = h), (u = m)) : (c = c.next = h),
              (a |= s)
          if (((o = o.next), o === null)) {
            if (((s = i.shared.pending), s === null)) break
            ;(o = s.next), (s.next = null), (i.lastBaseUpdate = s), (i.shared.pending = null)
          }
        } while (1)
        c === null && (u = m),
          (i.baseState = u),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = c),
          (So |= a),
          (e.lanes = a),
          (e.memoizedState = m)
      }
    }
    function Ip(e, t, r) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var n = e[t],
            i = n.callback
          if (i !== null) {
            if (((n.callback = null), (n = r), typeof i != 'function')) throw Error(L(191, i))
            i.call(n)
          }
        }
    }
    var Mp = new na.Component().refs
    function ja(e, t, r, n) {
      ;(t = e.memoizedState),
        (r = r(n, t)),
        (r = r == null ? t : ve({}, t, r)),
        (e.memoizedState = r),
        e.lanes === 0 && (e.updateQueue.baseState = r)
    }
    var Ha = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? an(e) === e : !1
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternals
        var n = pt(),
          i = Fr(e),
          o = Dr(n, i)
        ;(o.payload = t), r != null && (o.callback = r), Rr(e, o), Ar(e, i, n)
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals
        var n = pt(),
          i = Fr(e),
          o = Dr(n, i)
        ;(o.tag = 1), (o.payload = t), r != null && (o.callback = r), Rr(e, o), Ar(e, i, n)
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var r = pt(),
          n = Fr(e),
          i = Dr(r, n)
        ;(i.tag = 2), t != null && (i.callback = t), Rr(e, i), Ar(e, n, r)
      },
    }
    function Dp(e, t, r, n, i, o, a) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
          ? e.shouldComponentUpdate(n, o, a)
          : t.prototype && t.prototype.isPureReactComponent
          ? !no(r, n) || !no(i, o)
          : !0
      )
    }
    function Rp(e, t, r) {
      var n = !1,
        i = Ir,
        o = t.contextType
      return (
        typeof o == 'object' && o !== null
          ? (o = St(o))
          : ((i = at(t) ? un : Ye.current), (n = t.contextTypes), (o = (n = n != null) ? Jn(e, i) : Ir)),
        (t = new t(r, o)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ha),
        (e.stateNode = t),
        (t._reactInternals = e),
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      )
    }
    function Np(e, t, r, n) {
      ;(e = t.state),
        typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, n),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && Ha.enqueueReplaceState(t, t.state, null)
    }
    function Cl(e, t, r, n) {
      var i = e.stateNode
      ;(i.props = r), (i.state = e.memoizedState), (i.refs = Mp), Pl(e)
      var o = t.contextType
      typeof o == 'object' && o !== null
        ? (i.context = St(o))
        : ((o = at(t) ? un : Ye.current), (i.context = Jn(e, o))),
        lo(e, r, i, n),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == 'function' && (ja(e, t, o, r), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function' ||
          (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
          ((t = i.state),
          typeof i.componentWillMount == 'function' && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
          t !== i.state && Ha.enqueueReplaceState(i, i.state, null),
          lo(e, r, i, n),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == 'function' && (e.flags |= 4)
    }
    var Ba = Array.isArray
    function fo(e, t, r) {
      if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
        if (r._owner) {
          if (((r = r._owner), r)) {
            if (r.tag !== 1) throw Error(L(309))
            var n = r.stateNode
          }
          if (!n) throw Error(L(147, e))
          var i = '' + e
          return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
            ? t.ref
            : ((t = function (o) {
                var a = n.refs
                a === Mp && (a = n.refs = {}), o === null ? delete a[i] : (a[i] = o)
              }),
              (t._stringRef = i),
              t)
        }
        if (typeof e != 'string') throw Error(L(284))
        if (!r._owner) throw Error(L(290, e))
      }
      return e
    }
    function Ua(e, t) {
      if (e.type !== 'textarea')
        throw Error(
          L(
            31,
            Object.prototype.toString.call(t) === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : t
          )
        )
    }
    function Lp(e) {
      function t(p, d) {
        if (e) {
          var v = p.lastEffect
          v !== null ? ((v.nextEffect = d), (p.lastEffect = d)) : (p.firstEffect = p.lastEffect = d),
            (d.nextEffect = null),
            (d.flags = 8)
        }
      }
      function r(p, d) {
        if (!e) return null
        for (; d !== null; ) t(p, d), (d = d.sibling)
        return null
      }
      function n(p, d) {
        for (p = new Map(); d !== null; ) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), (d = d.sibling)
        return p
      }
      function i(p, d) {
        return (p = Br(p, d)), (p.index = 0), (p.sibling = null), p
      }
      function o(p, d, v) {
        return (
          (p.index = v),
          e ? ((v = p.alternate), v !== null ? ((v = v.index), v < d ? ((p.flags = 2), d) : v) : ((p.flags = 2), d)) : d
        )
      }
      function a(p) {
        return e && p.alternate === null && (p.flags = 2), p
      }
      function s(p, d, v, y) {
        return d === null || d.tag !== 6
          ? ((d = df(v, p.mode, y)), (d.return = p), d)
          : ((d = i(d, v)), (d.return = p), d)
      }
      function u(p, d, v, y) {
        return d !== null && d.elementType === v.type
          ? ((y = i(d, v.props)), (y.ref = fo(p, d, v)), (y.return = p), y)
          : ((y = os(v.type, v.key, v.props, null, p.mode, y)), (y.ref = fo(p, d, v)), (y.return = p), y)
      }
      function l(p, d, v, y) {
        return d === null ||
          d.tag !== 4 ||
          d.stateNode.containerInfo !== v.containerInfo ||
          d.stateNode.implementation !== v.implementation
          ? ((d = pf(v, p.mode, y)), (d.return = p), d)
          : ((d = i(d, v.children || [])), (d.return = p), d)
      }
      function c(p, d, v, y, E) {
        return d === null || d.tag !== 7
          ? ((d = li(v, p.mode, y, E)), (d.return = p), d)
          : ((d = i(d, v)), (d.return = p), d)
      }
      function m(p, d, v) {
        if (typeof d == 'string' || typeof d == 'number') return (d = df('' + d, p.mode, v)), (d.return = p), d
        if (typeof d == 'object' && d !== null) {
          switch (d.$$typeof) {
            case Ai:
              return (v = os(d.type, d.key, d.props, null, p.mode, v)), (v.ref = fo(p, null, d)), (v.return = p), v
            case nn:
              return (d = pf(d, p.mode, v)), (d.return = p), d
          }
          if (Ba(d) || Bi(d)) return (d = li(d, p.mode, v, null)), (d.return = p), d
          Ua(p, d)
        }
        return null
      }
      function h(p, d, v, y) {
        var E = d !== null ? d.key : null
        if (typeof v == 'string' || typeof v == 'number') return E !== null ? null : s(p, d, '' + v, y)
        if (typeof v == 'object' && v !== null) {
          switch (v.$$typeof) {
            case Ai:
              return v.key === E ? (v.type === Er ? c(p, d, v.props.children, y, E) : u(p, d, v, y)) : null
            case nn:
              return v.key === E ? l(p, d, v, y) : null
          }
          if (Ba(v) || Bi(v)) return E !== null ? null : c(p, d, v, y, null)
          Ua(p, v)
        }
        return null
      }
      function _(p, d, v, y, E) {
        if (typeof y == 'string' || typeof y == 'number') return (p = p.get(v) || null), s(d, p, '' + y, E)
        if (typeof y == 'object' && y !== null) {
          switch (y.$$typeof) {
            case Ai:
              return (
                (p = p.get(y.key === null ? v : y.key) || null),
                y.type === Er ? c(d, p, y.props.children, E, y.key) : u(d, p, y, E)
              )
            case nn:
              return (p = p.get(y.key === null ? v : y.key) || null), l(d, p, y, E)
          }
          if (Ba(y) || Bi(y)) return (p = p.get(v) || null), c(d, p, y, E, null)
          Ua(d, y)
        }
        return null
      }
      function S(p, d, v, y) {
        for (var E = null, D = null, b = d, P = (d = 0), M = null; b !== null && P < v.length; P++) {
          b.index > P ? ((M = b), (b = null)) : (M = b.sibling)
          var O = h(p, b, v[P], y)
          if (O === null) {
            b === null && (b = M)
            break
          }
          e && b && O.alternate === null && t(p, b),
            (d = o(O, d, P)),
            D === null ? (E = O) : (D.sibling = O),
            (D = O),
            (b = M)
        }
        if (P === v.length) return r(p, b), E
        if (b === null) {
          for (; P < v.length; P++)
            (b = m(p, v[P], y)), b !== null && ((d = o(b, d, P)), D === null ? (E = b) : (D.sibling = b), (D = b))
          return E
        }
        for (b = n(p, b); P < v.length; P++)
          (M = _(b, p, P, v[P], y)),
            M !== null &&
              (e && M.alternate !== null && b.delete(M.key === null ? P : M.key),
              (d = o(M, d, P)),
              D === null ? (E = M) : (D.sibling = M),
              (D = M))
        return (
          e &&
            b.forEach(function (A) {
              return t(p, A)
            }),
          E
        )
      }
      function x(p, d, v, y) {
        var E = Bi(v)
        if (typeof E != 'function') throw Error(L(150))
        if (((v = E.call(v)), v == null)) throw Error(L(151))
        for (var D = (E = null), b = d, P = (d = 0), M = null, O = v.next(); b !== null && !O.done; P++, O = v.next()) {
          b.index > P ? ((M = b), (b = null)) : (M = b.sibling)
          var A = h(p, b, O.value, y)
          if (A === null) {
            b === null && (b = M)
            break
          }
          e && b && A.alternate === null && t(p, b),
            (d = o(A, d, P)),
            D === null ? (E = A) : (D.sibling = A),
            (D = A),
            (b = M)
        }
        if (O.done) return r(p, b), E
        if (b === null) {
          for (; !O.done; P++, O = v.next())
            (O = m(p, O.value, y)), O !== null && ((d = o(O, d, P)), D === null ? (E = O) : (D.sibling = O), (D = O))
          return E
        }
        for (b = n(p, b); !O.done; P++, O = v.next())
          (O = _(b, p, P, O.value, y)),
            O !== null &&
              (e && O.alternate !== null && b.delete(O.key === null ? P : O.key),
              (d = o(O, d, P)),
              D === null ? (E = O) : (D.sibling = O),
              (D = O))
        return (
          e &&
            b.forEach(function (z) {
              return t(p, z)
            }),
          E
        )
      }
      return function (p, d, v, y) {
        var E = typeof v == 'object' && v !== null && v.type === Er && v.key === null
        E && (v = v.props.children)
        var D = typeof v == 'object' && v !== null
        if (D)
          switch (v.$$typeof) {
            case Ai:
              e: {
                for (D = v.key, E = d; E !== null; ) {
                  if (E.key === D) {
                    switch (E.tag) {
                      case 7:
                        if (v.type === Er) {
                          r(p, E.sibling), (d = i(E, v.props.children)), (d.return = p), (p = d)
                          break e
                        }
                        break
                      default:
                        if (E.elementType === v.type) {
                          r(p, E.sibling), (d = i(E, v.props)), (d.ref = fo(p, E, v)), (d.return = p), (p = d)
                          break e
                        }
                    }
                    r(p, E)
                    break
                  } else t(p, E)
                  E = E.sibling
                }
                v.type === Er
                  ? ((d = li(v.props.children, p.mode, y, v.key)), (d.return = p), (p = d))
                  : ((y = os(v.type, v.key, v.props, null, p.mode, y)), (y.ref = fo(p, d, v)), (y.return = p), (p = y))
              }
              return a(p)
            case nn:
              e: {
                for (E = v.key; d !== null; ) {
                  if (d.key === E)
                    if (
                      d.tag === 4 &&
                      d.stateNode.containerInfo === v.containerInfo &&
                      d.stateNode.implementation === v.implementation
                    ) {
                      r(p, d.sibling), (d = i(d, v.children || [])), (d.return = p), (p = d)
                      break e
                    } else {
                      r(p, d)
                      break
                    }
                  else t(p, d)
                  d = d.sibling
                }
                ;(d = pf(v, p.mode, y)), (d.return = p), (p = d)
              }
              return a(p)
          }
        if (typeof v == 'string' || typeof v == 'number')
          return (
            (v = '' + v),
            d !== null && d.tag === 6
              ? (r(p, d.sibling), (d = i(d, v)), (d.return = p), (p = d))
              : (r(p, d), (d = df(v, p.mode, y)), (d.return = p), (p = d)),
            a(p)
          )
        if (Ba(v)) return S(p, d, v, y)
        if (Bi(v)) return x(p, d, v, y)
        if ((D && Ua(p, v), typeof v == 'undefined' && !E))
          switch (p.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(L(152, Fn(p.type) || 'Component'))
          }
        return r(p, d)
      }
    }
    var za = Lp(!0),
      Fp = Lp(!1),
      co = {},
      qt = Cr(co),
      po = Cr(co),
      mo = Cr(co)
    function cn(e) {
      if (e === co) throw Error(L(174))
      return e
    }
    function Il(e, t) {
      switch ((xe(mo, t), xe(po, e), xe(qt, co), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Fu(null, '')
          break
        default:
          ;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Fu(t, e))
      }
      pe(qt), xe(qt, t)
    }
    function ri() {
      pe(qt), pe(po), pe(mo)
    }
    function Ap(e) {
      cn(mo.current)
      var t = cn(qt.current),
        r = Fu(t, e.type)
      t !== r && (xe(po, e), xe(qt, r))
    }
    function Ml(e) {
      po.current === e && (pe(qt), pe(po))
    }
    var Te = Cr(0)
    function Wa(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var r = t.memoizedState
          if (r !== null && ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 64) != 0) return t
        } else if (t.child !== null) {
          ;(t.child.return = t), (t = t.child)
          continue
        }
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
      return null
    }
    var ar = null,
      Nr = null,
      Vt = !1
    function jp(e, t) {
      var r = kt(5, null, null, 0)
      ;(r.elementType = 'DELETED'),
        (r.type = 'DELETED'),
        (r.stateNode = t),
        (r.return = e),
        (r.flags = 8),
        e.lastEffect !== null ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r)) : (e.firstEffect = e.lastEffect = r)
    }
    function Hp(e, t) {
      switch (e.tag) {
        case 5:
          var r = e.type
          return (
            (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
            t !== null ? ((e.stateNode = t), !0) : !1
          )
        case 6:
          return (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), !0) : !1
        case 13:
          return !1
        default:
          return !1
      }
    }
    function Dl(e) {
      if (Vt) {
        var t = Nr
        if (t) {
          var r = t
          if (!Hp(e, t)) {
            if (((t = Yn(r.nextSibling)), !t || !Hp(e, t))) {
              ;(e.flags = (e.flags & -1025) | 2), (Vt = !1), (ar = e)
              return
            }
            jp(ar, r)
          }
          ;(ar = e), (Nr = Yn(t.firstChild))
        } else (e.flags = (e.flags & -1025) | 2), (Vt = !1), (ar = e)
      }
    }
    function Bp(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
      ar = e
    }
    function qa(e) {
      if (e !== ar) return !1
      if (!Vt) return Bp(e), (Vt = !0), !1
      var t = e.type
      if (e.tag !== 5 || (t !== 'head' && t !== 'body' && !vl(t, e.memoizedProps)))
        for (t = Nr; t; ) jp(e, t), (t = Yn(t.nextSibling))
      if ((Bp(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(L(317))
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var r = e.data
              if (r === '/$') {
                if (t === 0) {
                  Nr = Yn(e.nextSibling)
                  break e
                }
                t--
              } else (r !== '$' && r !== '$!' && r !== '$?') || t++
            }
            e = e.nextSibling
          }
          Nr = null
        }
      } else Nr = ar ? Yn(e.stateNode.nextSibling) : null
      return !0
    }
    function Rl() {
      ;(Nr = ar = null), (Vt = !1)
    }
    var ni = []
    function Nl() {
      for (var e = 0; e < ni.length; e++) ni[e]._workInProgressVersionPrimary = null
      ni.length = 0
    }
    var ho = rn.ReactCurrentDispatcher,
      xt = rn.ReactCurrentBatchConfig,
      vo = 0,
      be = null,
      Ke = null,
      We = null,
      Va = !1,
      go = !1
    function st() {
      throw Error(L(321))
    }
    function Ll(e, t) {
      if (t === null) return !1
      for (var r = 0; r < t.length && r < e.length; r++) if (!Et(e[r], t[r])) return !1
      return !0
    }
    function Fl(e, t, r, n, i, o) {
      if (
        ((vo = o),
        (be = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ho.current = e === null || e.memoizedState === null ? My : Dy),
        (e = r(n, i)),
        go)
      ) {
        o = 0
        do {
          if (((go = !1), !(25 > o))) throw Error(L(301))
          ;(o += 1), (We = Ke = null), (t.updateQueue = null), (ho.current = Ry), (e = r(n, i))
        } while (go)
      }
      if (((ho.current = Xa), (t = Ke !== null && Ke.next !== null), (vo = 0), (We = Ke = be = null), (Va = !1), t))
        throw Error(L(300))
      return e
    }
    function dn() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
      return We === null ? (be.memoizedState = We = e) : (We = We.next = e), We
    }
    function pn() {
      if (Ke === null) {
        var e = be.alternate
        e = e !== null ? e.memoizedState : null
      } else e = Ke.next
      var t = We === null ? be.memoizedState : We.next
      if (t !== null) (We = t), (Ke = e)
      else {
        if (e === null) throw Error(L(310))
        ;(Ke = e),
          (e = {
            memoizedState: Ke.memoizedState,
            baseState: Ke.baseState,
            baseQueue: Ke.baseQueue,
            queue: Ke.queue,
            next: null,
          }),
          We === null ? (be.memoizedState = We = e) : (We = We.next = e)
      }
      return We
    }
    function $t(e, t) {
      return typeof t == 'function' ? t(e) : t
    }
    function yo(e) {
      var t = pn(),
        r = t.queue
      if (r === null) throw Error(L(311))
      r.lastRenderedReducer = e
      var n = Ke,
        i = n.baseQueue,
        o = r.pending
      if (o !== null) {
        if (i !== null) {
          var a = i.next
          ;(i.next = o.next), (o.next = a)
        }
        ;(n.baseQueue = i = o), (r.pending = null)
      }
      if (i !== null) {
        ;(i = i.next), (n = n.baseState)
        var s = (a = o = null),
          u = i
        do {
          var l = u.lane
          if ((vo & l) === l)
            s !== null &&
              (s = s.next =
                { lane: 0, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null }),
              (n = u.eagerReducer === e ? u.eagerState : e(n, u.action))
          else {
            var c = { lane: l, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null }
            s === null ? ((a = s = c), (o = n)) : (s = s.next = c), (be.lanes |= l), (So |= l)
          }
          u = u.next
        } while (u !== null && u !== i)
        s === null ? (o = n) : (s.next = a),
          Et(n, t.memoizedState) || (Rt = !0),
          (t.memoizedState = n),
          (t.baseState = o),
          (t.baseQueue = s),
          (r.lastRenderedState = n)
      }
      return [t.memoizedState, r.dispatch]
    }
    function _o(e) {
      var t = pn(),
        r = t.queue
      if (r === null) throw Error(L(311))
      r.lastRenderedReducer = e
      var n = r.dispatch,
        i = r.pending,
        o = t.memoizedState
      if (i !== null) {
        r.pending = null
        var a = (i = i.next)
        do (o = e(o, a.action)), (a = a.next)
        while (a !== i)
        Et(o, t.memoizedState) || (Rt = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (r.lastRenderedState = o)
      }
      return [o, n]
    }
    function Up(e, t, r) {
      var n = t._getVersion
      n = n(t._source)
      var i = t._workInProgressVersionPrimary
      if (
        (i !== null
          ? (e = i === n)
          : ((e = e.mutableReadLanes), (e = (vo & e) === e) && ((t._workInProgressVersionPrimary = n), ni.push(t))),
        e)
      )
        return r(t._source)
      throw (ni.push(t), Error(L(350)))
    }
    function zp(e, t, r, n) {
      var i = rt
      if (i === null) throw Error(L(349))
      var o = t._getVersion,
        a = o(t._source),
        s = ho.current,
        u = s.useState(function () {
          return Up(i, t, r)
        }),
        l = u[1],
        c = u[0]
      u = We
      var m = e.memoizedState,
        h = m.refs,
        _ = h.getSnapshot,
        S = m.source
      m = m.subscribe
      var x = be
      return (
        (e.memoizedState = { refs: h, source: t, subscribe: n }),
        s.useEffect(
          function () {
            ;(h.getSnapshot = r), (h.setSnapshot = l)
            var p = o(t._source)
            if (!Et(a, p)) {
              ;(p = r(t._source)),
                Et(c, p) || (l(p), (p = Fr(x)), (i.mutableReadLanes |= p & i.pendingLanes)),
                (p = i.mutableReadLanes),
                (i.entangledLanes |= p)
              for (var d = i.entanglements, v = p; 0 < v; ) {
                var y = 31 - Or(v),
                  E = 1 << y
                ;(d[y] |= p), (v &= ~E)
              }
            }
          },
          [r, t, n]
        ),
        s.useEffect(
          function () {
            return n(t._source, function () {
              var p = h.getSnapshot,
                d = h.setSnapshot
              try {
                d(p(t._source))
                var v = Fr(x)
                i.mutableReadLanes |= v & i.pendingLanes
              } catch (y) {
                d(function () {
                  throw y
                })
              }
            })
          },
          [t, n]
        ),
        (Et(_, r) && Et(S, t) && Et(m, n)) ||
          ((e = { pending: null, dispatch: null, lastRenderedReducer: $t, lastRenderedState: c }),
          (e.dispatch = l = Bl.bind(null, be, e)),
          (u.queue = e),
          (u.baseQueue = null),
          (c = Up(i, t, r)),
          (u.memoizedState = u.baseState = c)),
        c
      )
    }
    function Wp(e, t, r) {
      var n = pn()
      return zp(n, e, t, r)
    }
    function wo(e) {
      var t = dn()
      return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: $t, lastRenderedState: e }),
        (e = e.dispatch = Bl.bind(null, be, e)),
        [t.memoizedState, e]
      )
    }
    function $a(e, t, r, n) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        (t = be.updateQueue),
        t === null
          ? ((t = { lastEffect: null }), (be.updateQueue = t), (t.lastEffect = e.next = e))
          : ((r = t.lastEffect),
            r === null ? (t.lastEffect = e.next = e) : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
        e
      )
    }
    function qp(e) {
      var t = dn()
      return (e = { current: e }), (t.memoizedState = e)
    }
    function Ga() {
      return pn().memoizedState
    }
    function Al(e, t, r, n) {
      var i = dn()
      ;(be.flags |= e), (i.memoizedState = $a(1 | t, r, void 0, n === void 0 ? null : n))
    }
    function jl(e, t, r, n) {
      var i = pn()
      n = n === void 0 ? null : n
      var o = void 0
      if (Ke !== null) {
        var a = Ke.memoizedState
        if (((o = a.destroy), n !== null && Ll(n, a.deps))) {
          $a(t, r, o, n)
          return
        }
      }
      ;(be.flags |= e), (i.memoizedState = $a(1 | t, r, o, n))
    }
    function Vp(e, t) {
      return Al(516, 4, e, t)
    }
    function Ya(e, t) {
      return jl(516, 4, e, t)
    }
    function $p(e, t) {
      return jl(4, 2, e, t)
    }
    function Gp(e, t) {
      if (typeof t == 'function')
        return (
          (e = e()),
          t(e),
          function () {
            t(null)
          }
        )
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null
          }
        )
    }
    function Yp(e, t, r) {
      return (r = r != null ? r.concat([e]) : null), jl(4, 2, Gp.bind(null, t, e), r)
    }
    function Hl() {}
    function Xp(e, t) {
      var r = pn()
      t = t === void 0 ? null : t
      var n = r.memoizedState
      return n !== null && t !== null && Ll(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e)
    }
    function Kp(e, t) {
      var r = pn()
      t = t === void 0 ? null : t
      var n = r.memoizedState
      return n !== null && t !== null && Ll(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e)
    }
    function Iy(e, t) {
      var r = Zn()
      fn(98 > r ? 98 : r, function () {
        e(!0)
      }),
        fn(97 < r ? 97 : r, function () {
          var n = xt.transition
          xt.transition = 1
          try {
            e(!1), t()
          } finally {
            xt.transition = n
          }
        })
    }
    function Bl(e, t, r) {
      var n = pt(),
        i = Fr(e),
        o = { lane: i, action: r, eagerReducer: null, eagerState: null, next: null },
        a = t.pending
      if (
        (a === null ? (o.next = o) : ((o.next = a.next), (a.next = o)),
        (t.pending = o),
        (a = e.alternate),
        e === be || (a !== null && a === be))
      )
        go = Va = !0
      else {
        if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
          try {
            var s = t.lastRenderedState,
              u = a(s, r)
            if (((o.eagerReducer = a), (o.eagerState = u), Et(u, s))) return
          } catch (l) {
          } finally {
          }
        Ar(e, i, n)
      }
    }
    var Xa = {
        readContext: St,
        useCallback: st,
        useContext: st,
        useEffect: st,
        useImperativeHandle: st,
        useLayoutEffect: st,
        useMemo: st,
        useReducer: st,
        useRef: st,
        useState: st,
        useDebugValue: st,
        useDeferredValue: st,
        useTransition: st,
        useMutableSource: st,
        useOpaqueIdentifier: st,
        unstable_isNewReconciler: !1,
      },
      My = {
        readContext: St,
        useCallback: function (e, t) {
          return (dn().memoizedState = [e, t === void 0 ? null : t]), e
        },
        useContext: St,
        useEffect: Vp,
        useImperativeHandle: function (e, t, r) {
          return (r = r != null ? r.concat([e]) : null), Al(4, 2, Gp.bind(null, t, e), r)
        },
        useLayoutEffect: function (e, t) {
          return Al(4, 2, e, t)
        },
        useMemo: function (e, t) {
          var r = dn()
          return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
        },
        useReducer: function (e, t, r) {
          var n = dn()
          return (
            (t = r !== void 0 ? r(t) : t),
            (n.memoizedState = n.baseState = t),
            (e = n.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
            (e = e.dispatch = Bl.bind(null, be, e)),
            [n.memoizedState, e]
          )
        },
        useRef: qp,
        useState: wo,
        useDebugValue: Hl,
        useDeferredValue: function (e) {
          var t = wo(e),
            r = t[0],
            n = t[1]
          return (
            Vp(
              function () {
                var i = xt.transition
                xt.transition = 1
                try {
                  n(e)
                } finally {
                  xt.transition = i
                }
              },
              [e]
            ),
            r
          )
        },
        useTransition: function () {
          var e = wo(!1),
            t = e[0]
          return (e = Iy.bind(null, e[1])), qp(e), [e, t]
        },
        useMutableSource: function (e, t, r) {
          var n = dn()
          return (
            (n.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: r }), zp(n, e, t, r)
          )
        },
        useOpaqueIdentifier: function () {
          if (Vt) {
            var e = !1,
              t = Ty(function () {
                throw (e || ((e = !0), r('r:' + (yl++).toString(36))), Error(L(355)))
              }),
              r = wo(t)[1]
            return (
              (be.mode & 2) == 0 &&
                ((be.flags |= 516),
                $a(
                  5,
                  function () {
                    r('r:' + (yl++).toString(36))
                  },
                  void 0,
                  null
                )),
              t
            )
          }
          return (t = 'r:' + (yl++).toString(36)), wo(t), t
        },
        unstable_isNewReconciler: !1,
      },
      Dy = {
        readContext: St,
        useCallback: Xp,
        useContext: St,
        useEffect: Ya,
        useImperativeHandle: Yp,
        useLayoutEffect: $p,
        useMemo: Kp,
        useReducer: yo,
        useRef: Ga,
        useState: function () {
          return yo($t)
        },
        useDebugValue: Hl,
        useDeferredValue: function (e) {
          var t = yo($t),
            r = t[0],
            n = t[1]
          return (
            Ya(
              function () {
                var i = xt.transition
                xt.transition = 1
                try {
                  n(e)
                } finally {
                  xt.transition = i
                }
              },
              [e]
            ),
            r
          )
        },
        useTransition: function () {
          var e = yo($t)[0]
          return [Ga().current, e]
        },
        useMutableSource: Wp,
        useOpaqueIdentifier: function () {
          return yo($t)[0]
        },
        unstable_isNewReconciler: !1,
      },
      Ry = {
        readContext: St,
        useCallback: Xp,
        useContext: St,
        useEffect: Ya,
        useImperativeHandle: Yp,
        useLayoutEffect: $p,
        useMemo: Kp,
        useReducer: _o,
        useRef: Ga,
        useState: function () {
          return _o($t)
        },
        useDebugValue: Hl,
        useDeferredValue: function (e) {
          var t = _o($t),
            r = t[0],
            n = t[1]
          return (
            Ya(
              function () {
                var i = xt.transition
                xt.transition = 1
                try {
                  n(e)
                } finally {
                  xt.transition = i
                }
              },
              [e]
            ),
            r
          )
        },
        useTransition: function () {
          var e = _o($t)[0]
          return [Ga().current, e]
        },
        useMutableSource: Wp,
        useOpaqueIdentifier: function () {
          return _o($t)[0]
        },
        unstable_isNewReconciler: !1,
      },
      Ny = rn.ReactCurrentOwner,
      Rt = !1
    function ut(e, t, r, n) {
      t.child = e === null ? Fp(t, null, r, n) : za(t, e.child, r, n)
    }
    function Qp(e, t, r, n, i) {
      r = r.render
      var o = t.ref
      return (
        ti(t, i),
        (n = Fl(e, t, r, n, o, i)),
        e !== null && !Rt
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), sr(e, t, i))
          : ((t.flags |= 1), ut(e, t, n, i), t.child)
      )
    }
    function Jp(e, t, r, n, i, o) {
      if (e === null) {
        var a = r.type
        return typeof a == 'function' &&
          !ff(a) &&
          a.defaultProps === void 0 &&
          r.compare === null &&
          r.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), Zp(e, t, a, n, i, o))
          : ((e = os(r.type, null, n, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
      }
      return (
        (a = e.child),
        (i & o) == 0 && ((i = a.memoizedProps), (r = r.compare), (r = r !== null ? r : no), r(i, n) && e.ref === t.ref)
          ? sr(e, t, o)
          : ((t.flags |= 1), (e = Br(a, n)), (e.ref = t.ref), (e.return = t), (t.child = e))
      )
    }
    function Zp(e, t, r, n, i, o) {
      if (e !== null && no(e.memoizedProps, n) && e.ref === t.ref)
        if (((Rt = !1), (o & i) != 0)) (e.flags & 16384) != 0 && (Rt = !0)
        else return (t.lanes = e.lanes), sr(e, t, o)
      return zl(e, t, r, n, o)
    }
    function Ul(e, t, r) {
      var n = t.pendingProps,
        i = n.children,
        o = e !== null ? e.memoizedState : null
      if (n.mode === 'hidden' || n.mode === 'unstable-defer-without-hiding')
        if ((t.mode & 4) == 0) (t.memoizedState = { baseLanes: 0 }), is(t, r)
        else if ((r & 1073741824) != 0) (t.memoizedState = { baseLanes: 0 }), is(t, o !== null ? o.baseLanes : r)
        else
          return (
            (e = o !== null ? o.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e }),
            is(t, e),
            null
          )
      else o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r), is(t, n)
      return ut(e, t, i, r), t.child
    }
    function em(e, t) {
      var r = t.ref
      ;((e === null && r !== null) || (e !== null && e.ref !== r)) && (t.flags |= 128)
    }
    function zl(e, t, r, n, i) {
      var o = at(r) ? un : Ye.current
      return (
        (o = Jn(t, o)),
        ti(t, i),
        (r = Fl(e, t, r, n, o, i)),
        e !== null && !Rt
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), sr(e, t, i))
          : ((t.flags |= 1), ut(e, t, r, i), t.child)
      )
    }
    function tm(e, t, r, n, i) {
      if (at(r)) {
        var o = !0
        Da(t)
      } else o = !1
      if ((ti(t, i), t.stateNode === null))
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          Rp(t, r, n),
          Cl(t, r, n, i),
          (n = !0)
      else if (e === null) {
        var a = t.stateNode,
          s = t.memoizedProps
        a.props = s
        var u = a.context,
          l = r.contextType
        typeof l == 'object' && l !== null ? (l = St(l)) : ((l = at(r) ? un : Ye.current), (l = Jn(t, l)))
        var c = r.getDerivedStateFromProps,
          m = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
        m ||
          (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof a.componentWillReceiveProps != 'function') ||
          ((s !== n || u !== l) && Np(t, a, n, l)),
          (Mr = !1)
        var h = t.memoizedState
        ;(a.state = h),
          lo(t, n, a, i),
          (u = t.memoizedState),
          s !== n || h !== u || ot.current || Mr
            ? (typeof c == 'function' && (ja(t, r, c, n), (u = t.memoizedState)),
              (s = Mr || Dp(t, r, s, n, h, u, l))
                ? (m ||
                    (typeof a.UNSAFE_componentWillMount != 'function' && typeof a.componentWillMount != 'function') ||
                    (typeof a.componentWillMount == 'function' && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == 'function' && (t.flags |= 4))
                : (typeof a.componentDidMount == 'function' && (t.flags |= 4),
                  (t.memoizedProps = n),
                  (t.memoizedState = u)),
              (a.props = n),
              (a.state = u),
              (a.context = l),
              (n = s))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4), (n = !1))
      } else {
        ;(a = t.stateNode),
          Pp(e, t),
          (s = t.memoizedProps),
          (l = t.type === t.elementType ? s : Dt(t.type, s)),
          (a.props = l),
          (m = t.pendingProps),
          (h = a.context),
          (u = r.contextType),
          typeof u == 'object' && u !== null ? (u = St(u)) : ((u = at(r) ? un : Ye.current), (u = Jn(t, u)))
        var _ = r.getDerivedStateFromProps
        ;(c = typeof _ == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
          (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof a.componentWillReceiveProps != 'function') ||
          ((s !== m || h !== u) && Np(t, a, n, u)),
          (Mr = !1),
          (h = t.memoizedState),
          (a.state = h),
          lo(t, n, a, i)
        var S = t.memoizedState
        s !== m || h !== S || ot.current || Mr
          ? (typeof _ == 'function' && (ja(t, r, _, n), (S = t.memoizedState)),
            (l = Mr || Dp(t, r, l, n, h, S, u))
              ? (c ||
                  (typeof a.UNSAFE_componentWillUpdate != 'function' && typeof a.componentWillUpdate != 'function') ||
                  (typeof a.componentWillUpdate == 'function' && a.componentWillUpdate(n, S, u),
                  typeof a.UNSAFE_componentWillUpdate == 'function' && a.UNSAFE_componentWillUpdate(n, S, u)),
                typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 256))
              : (typeof a.componentDidUpdate != 'function' ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != 'function' ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 256),
                (t.memoizedProps = n),
                (t.memoizedState = S)),
            (a.props = n),
            (a.state = S),
            (a.context = u),
            (n = l))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 256),
            (n = !1))
      }
      return Wl(e, t, r, n, o, i)
    }
    function Wl(e, t, r, n, i, o) {
      em(e, t)
      var a = (t.flags & 64) != 0
      if (!n && !a) return i && yp(t, r, !1), sr(e, t, o)
      ;(n = t.stateNode), (Ny.current = t)
      var s = a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
      return (
        (t.flags |= 1),
        e !== null && a ? ((t.child = za(t, e.child, null, o)), (t.child = za(t, null, s, o))) : ut(e, t, s, o),
        (t.memoizedState = n.state),
        i && yp(t, r, !0),
        t.child
      )
    }
    function rm(e) {
      var t = e.stateNode
      t.pendingContext ? vp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vp(e, t.context, !1),
        Il(e, t.containerInfo)
    }
    var Ka = { dehydrated: null, retryLane: 0 }
    function nm(e, t, r) {
      var n = t.pendingProps,
        i = Te.current,
        o = !1,
        a
      return (
        (a = (t.flags & 64) != 0) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) != 0),
        a
          ? ((o = !0), (t.flags &= -65))
          : (e !== null && e.memoizedState === null) ||
            n.fallback === void 0 ||
            n.unstable_avoidThisFallback === !0 ||
            (i |= 1),
        xe(Te, i & 1),
        e === null
          ? (n.fallback !== void 0 && Dl(t),
            (e = n.children),
            (i = n.fallback),
            o
              ? ((e = im(t, e, i, r)), (t.child.memoizedState = { baseLanes: r }), (t.memoizedState = Ka), e)
              : typeof n.unstable_expectedLoadTime == 'number'
              ? ((e = im(t, e, i, r)),
                (t.child.memoizedState = { baseLanes: r }),
                (t.memoizedState = Ka),
                (t.lanes = 33554432),
                e)
              : ((r = cf({ mode: 'visible', children: e }, t.mode, r, null)), (r.return = t), (t.child = r)))
          : e.memoizedState !== null
          ? o
            ? ((n = am(e, t, n.children, n.fallback, r)),
              (o = t.child),
              (i = e.child.memoizedState),
              (o.memoizedState = i === null ? { baseLanes: r } : { baseLanes: i.baseLanes | r }),
              (o.childLanes = e.childLanes & ~r),
              (t.memoizedState = Ka),
              n)
            : ((r = om(e, t, n.children, r)), (t.memoizedState = null), r)
          : o
          ? ((n = am(e, t, n.children, n.fallback, r)),
            (o = t.child),
            (i = e.child.memoizedState),
            (o.memoizedState = i === null ? { baseLanes: r } : { baseLanes: i.baseLanes | r }),
            (o.childLanes = e.childLanes & ~r),
            (t.memoizedState = Ka),
            n)
          : ((r = om(e, t, n.children, r)), (t.memoizedState = null), r)
      )
    }
    function im(e, t, r, n) {
      var i = e.mode,
        o = e.child
      return (
        (t = { mode: 'hidden', children: t }),
        (i & 2) == 0 && o !== null ? ((o.childLanes = 0), (o.pendingProps = t)) : (o = cf(t, i, 0, null)),
        (r = li(r, i, n, null)),
        (o.return = e),
        (r.return = e),
        (o.sibling = r),
        (e.child = o),
        r
      )
    }
    function om(e, t, r, n) {
      var i = e.child
      return (
        (e = i.sibling),
        (r = Br(i, { mode: 'visible', children: r })),
        (t.mode & 2) == 0 && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
        (t.child = r)
      )
    }
    function am(e, t, r, n, i) {
      var o = t.mode,
        a = e.child
      e = a.sibling
      var s = { mode: 'hidden', children: r }
      return (
        (o & 2) == 0 && t.child !== a
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (a = r.lastEffect),
            a !== null
              ? ((t.firstEffect = r.firstEffect), (t.lastEffect = a), (a.nextEffect = null))
              : (t.firstEffect = t.lastEffect = null))
          : (r = Br(a, s)),
        e !== null ? (n = Br(e, n)) : ((n = li(n, o, i, null)), (n.flags |= 2)),
        (n.return = t),
        (r.return = t),
        (r.sibling = n),
        (t.child = r),
        n
      )
    }
    function sm(e, t) {
      e.lanes |= t
      var r = e.alternate
      r !== null && (r.lanes |= t), bp(e.return, t)
    }
    function ql(e, t, r, n, i, o) {
      var a = e.memoizedState
      a === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: r,
            tailMode: i,
            lastEffect: o,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = n),
          (a.tail = r),
          (a.tailMode = i),
          (a.lastEffect = o))
    }
    function um(e, t, r) {
      var n = t.pendingProps,
        i = n.revealOrder,
        o = n.tail
      if ((ut(e, t, n.children, r), (n = Te.current), (n & 2) != 0)) (n = (n & 1) | 2), (t.flags |= 64)
      else {
        if (e !== null && (e.flags & 64) != 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && sm(e, r)
            else if (e.tag === 19) sm(e, r)
            else if (e.child !== null) {
              ;(e.child.return = e), (e = e.child)
              continue
            }
            if (e === t) break e
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e
              e = e.return
            }
            ;(e.sibling.return = e.return), (e = e.sibling)
          }
        n &= 1
      }
      if ((xe(Te, n), (t.mode & 2) == 0)) t.memoizedState = null
      else
        switch (i) {
          case 'forwards':
            for (r = t.child, i = null; r !== null; )
              (e = r.alternate), e !== null && Wa(e) === null && (i = r), (r = r.sibling)
            ;(r = i),
              r === null ? ((i = t.child), (t.child = null)) : ((i = r.sibling), (r.sibling = null)),
              ql(t, !1, i, r, o, t.lastEffect)
            break
          case 'backwards':
            for (r = null, i = t.child, t.child = null; i !== null; ) {
              if (((e = i.alternate), e !== null && Wa(e) === null)) {
                t.child = i
                break
              }
              ;(e = i.sibling), (i.sibling = r), (r = i), (i = e)
            }
            ql(t, !0, r, null, o, t.lastEffect)
            break
          case 'together':
            ql(t, !1, null, null, void 0, t.lastEffect)
            break
          default:
            t.memoizedState = null
        }
      return t.child
    }
    function sr(e, t, r) {
      if ((e !== null && (t.dependencies = e.dependencies), (So |= t.lanes), (r & t.childLanes) != 0)) {
        if (e !== null && t.child !== e.child) throw Error(L(153))
        if (t.child !== null) {
          for (e = t.child, r = Br(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
            (e = e.sibling), (r = r.sibling = Br(e, e.pendingProps)), (r.return = t)
          r.sibling = null
        }
        return t.child
      }
      return null
    }
    var lm, Vl, fm, cm
    lm = function (e, t) {
      for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode)
        else if (r.tag !== 4 && r.child !== null) {
          ;(r.child.return = r), (r = r.child)
          continue
        }
        if (r === t) break
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return
          r = r.return
        }
        ;(r.sibling.return = r.return), (r = r.sibling)
      }
    }
    Vl = function () {}
    fm = function (e, t, r, n) {
      var i = e.memoizedProps
      if (i !== n) {
        ;(e = t.stateNode), cn(qt.current)
        var o = null
        switch (r) {
          case 'input':
            ;(i = Iu(e, i)), (n = Iu(e, n)), (o = [])
            break
          case 'option':
            ;(i = Ru(e, i)), (n = Ru(e, n)), (o = [])
            break
          case 'select':
            ;(i = ve({}, i, { value: void 0 })), (n = ve({}, n, { value: void 0 })), (o = [])
            break
          case 'textarea':
            ;(i = Nu(e, i)), (n = Nu(e, n)), (o = [])
            break
          default:
            typeof i.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = ba)
        }
        Au(r, n)
        var a
        r = null
        for (l in i)
          if (!n.hasOwnProperty(l) && i.hasOwnProperty(l) && i[l] != null)
            if (l === 'style') {
              var s = i[l]
              for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''))
            } else
              l !== 'dangerouslySetInnerHTML' &&
                l !== 'children' &&
                l !== 'suppressContentEditableWarning' &&
                l !== 'suppressHydrationWarning' &&
                l !== 'autoFocus' &&
                (Fi.hasOwnProperty(l) ? o || (o = []) : (o = o || []).push(l, null))
        for (l in n) {
          var u = n[l]
          if (((s = i != null ? i[l] : void 0), n.hasOwnProperty(l) && u !== s && (u != null || s != null)))
            if (l === 'style')
              if (s) {
                for (a in s) !s.hasOwnProperty(a) || (u && u.hasOwnProperty(a)) || (r || (r = {}), (r[a] = ''))
                for (a in u) u.hasOwnProperty(a) && s[a] !== u[a] && (r || (r = {}), (r[a] = u[a]))
              } else r || (o || (o = []), o.push(l, r)), (r = u)
            else
              l === 'dangerouslySetInnerHTML'
                ? ((u = u ? u.__html : void 0),
                  (s = s ? s.__html : void 0),
                  u != null && s !== u && (o = o || []).push(l, u))
                : l === 'children'
                ? (typeof u != 'string' && typeof u != 'number') || (o = o || []).push(l, '' + u)
                : l !== 'suppressContentEditableWarning' &&
                  l !== 'suppressHydrationWarning' &&
                  (Fi.hasOwnProperty(l)
                    ? (u != null && l === 'onScroll' && de('scroll', e), o || s === u || (o = []))
                    : typeof u == 'object' && u !== null && u.$$typeof === ku
                    ? u.toString()
                    : (o = o || []).push(l, u))
        }
        r && (o = o || []).push('style', r)
        var l = o
        ;(t.updateQueue = l) && (t.flags |= 4)
      }
    }
    cm = function (e, t, r, n) {
      r !== n && (t.flags |= 4)
    }
    function Eo(e, t) {
      if (!Vt)
        switch (e.tailMode) {
          case 'hidden':
            t = e.tail
            for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling)
            r === null ? (e.tail = null) : (r.sibling = null)
            break
          case 'collapsed':
            r = e.tail
            for (var n = null; r !== null; ) r.alternate !== null && (n = r), (r = r.sibling)
            n === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (n.sibling = null)
        }
    }
    function Ly(e, t, r) {
      var n = t.pendingProps
      switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null
        case 1:
          return at(t.type) && Ma(), null
        case 3:
          return (
            ri(),
            pe(ot),
            pe(Ye),
            Nl(),
            (n = t.stateNode),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) && (qa(t) ? (t.flags |= 4) : n.hydrate || (t.flags |= 256)),
            Vl(t),
            null
          )
        case 5:
          Ml(t)
          var i = cn(mo.current)
          if (((r = t.type), e !== null && t.stateNode != null)) fm(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 128)
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(L(166))
              return null
            }
            if (((e = cn(qt.current)), qa(t))) {
              ;(n = t.stateNode), (r = t.type)
              var o = t.memoizedProps
              switch (((n[Pr] = t), (n[Ca] = o), r)) {
                case 'dialog':
                  de('cancel', n), de('close', n)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  de('load', n)
                  break
                case 'video':
                case 'audio':
                  for (e = 0; e < oo.length; e++) de(oo[e], n)
                  break
                case 'source':
                  de('error', n)
                  break
                case 'img':
                case 'image':
                case 'link':
                  de('error', n), de('load', n)
                  break
                case 'details':
                  de('toggle', n)
                  break
                case 'input':
                  rd(n, o), de('invalid', n)
                  break
                case 'select':
                  ;(n._wrapperState = { wasMultiple: !!o.multiple }), de('invalid', n)
                  break
                case 'textarea':
                  od(n, o), de('invalid', n)
              }
              Au(r, o), (e = null)
              for (var a in o)
                o.hasOwnProperty(a) &&
                  ((i = o[a]),
                  a === 'children'
                    ? typeof i == 'string'
                      ? n.textContent !== i && (e = ['children', i])
                      : typeof i == 'number' && n.textContent !== '' + i && (e = ['children', '' + i])
                    : Fi.hasOwnProperty(a) && i != null && a === 'onScroll' && de('scroll', n))
              switch (r) {
                case 'input':
                  ua(n), id(n, o, !0)
                  break
                case 'textarea':
                  ua(n), sd(n)
                  break
                case 'select':
                case 'option':
                  break
                default:
                  typeof o.onClick == 'function' && (n.onclick = ba)
              }
              ;(n = e), (t.updateQueue = n), n !== null && (t.flags |= 4)
            } else {
              switch (
                ((a = i.nodeType === 9 ? i : i.ownerDocument),
                e === Lu.html && (e = ud(r)),
                e === Lu.html
                  ? r === 'script'
                    ? ((e = a.createElement('div')),
                      (e.innerHTML = '<script></script>'),
                      (e = e.removeChild(e.firstChild)))
                    : typeof n.is == 'string'
                    ? (e = a.createElement(r, { is: n.is }))
                    : ((e = a.createElement(r)),
                      r === 'select' && ((a = e), n.multiple ? (a.multiple = !0) : n.size && (a.size = n.size)))
                  : (e = a.createElementNS(e, r)),
                (e[Pr] = t),
                (e[Ca] = n),
                lm(e, t, !1, !1),
                (t.stateNode = e),
                (a = ju(r, n)),
                r)
              ) {
                case 'dialog':
                  de('cancel', e), de('close', e), (i = n)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  de('load', e), (i = n)
                  break
                case 'video':
                case 'audio':
                  for (i = 0; i < oo.length; i++) de(oo[i], e)
                  i = n
                  break
                case 'source':
                  de('error', e), (i = n)
                  break
                case 'img':
                case 'image':
                case 'link':
                  de('error', e), de('load', e), (i = n)
                  break
                case 'details':
                  de('toggle', e), (i = n)
                  break
                case 'input':
                  rd(e, n), (i = Iu(e, n)), de('invalid', e)
                  break
                case 'option':
                  i = Ru(e, n)
                  break
                case 'select':
                  ;(e._wrapperState = { wasMultiple: !!n.multiple }),
                    (i = ve({}, n, { value: void 0 })),
                    de('invalid', e)
                  break
                case 'textarea':
                  od(e, n), (i = Nu(e, n)), de('invalid', e)
                  break
                default:
                  i = n
              }
              Au(r, i)
              var s = i
              for (o in s)
                if (s.hasOwnProperty(o)) {
                  var u = s[o]
                  o === 'style'
                    ? cd(e, u)
                    : o === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && ld(e, u))
                    : o === 'children'
                    ? typeof u == 'string'
                      ? (r !== 'textarea' || u !== '') && zi(e, u)
                      : typeof u == 'number' && zi(e, '' + u)
                    : o !== 'suppressContentEditableWarning' &&
                      o !== 'suppressHydrationWarning' &&
                      o !== 'autoFocus' &&
                      (Fi.hasOwnProperty(o)
                        ? u != null && o === 'onScroll' && de('scroll', e)
                        : u != null && _u(e, o, u, a))
                }
              switch (r) {
                case 'input':
                  ua(e), id(e, n, !1)
                  break
                case 'textarea':
                  ua(e), sd(e)
                  break
                case 'option':
                  n.value != null && e.setAttribute('value', '' + Sr(n.value))
                  break
                case 'select':
                  ;(e.multiple = !!n.multiple),
                    (o = n.value),
                    o != null
                      ? An(e, !!n.multiple, o, !1)
                      : n.defaultValue != null && An(e, !!n.multiple, n.defaultValue, !0)
                  break
                default:
                  typeof i.onClick == 'function' && (e.onclick = ba)
              }
              cp(r, n) && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 128)
          }
          return null
        case 6:
          if (e && t.stateNode != null) cm(e, t, e.memoizedProps, n)
          else {
            if (typeof n != 'string' && t.stateNode === null) throw Error(L(166))
            ;(r = cn(mo.current)),
              cn(qt.current),
              qa(t)
                ? ((n = t.stateNode), (r = t.memoizedProps), (n[Pr] = t), n.nodeValue !== r && (t.flags |= 4))
                : ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)), (n[Pr] = t), (t.stateNode = n))
          }
          return null
        case 13:
          return (
            pe(Te),
            (n = t.memoizedState),
            (t.flags & 64) != 0
              ? ((t.lanes = r), t)
              : ((n = n !== null),
                (r = !1),
                e === null ? t.memoizedProps.fallback !== void 0 && qa(t) : (r = e.memoizedState !== null),
                n &&
                  !r &&
                  (t.mode & 2) != 0 &&
                  ((e === null && t.memoizedProps.unstable_avoidThisFallback !== !0) || (Te.current & 1) != 0
                    ? qe === 0 && (qe = 3)
                    : ((qe === 0 || qe === 3) && (qe = 4),
                      rt === null || ((So & 134217727) == 0 && (oi & 134217727) == 0) || si(rt, Qe))),
                (n || r) && (t.flags |= 4),
                null)
          )
        case 4:
          return ri(), Vl(t), e === null && ap(t.stateNode.containerInfo), null
        case 10:
          return bl(t), null
        case 17:
          return at(t.type) && Ma(), null
        case 19:
          if ((pe(Te), (n = t.memoizedState), n === null)) return null
          if (((o = (t.flags & 64) != 0), (a = n.rendering), a === null))
            if (o) Eo(n, !1)
            else {
              if (qe !== 0 || (e !== null && (e.flags & 64) != 0))
                for (e = t.child; e !== null; ) {
                  if (((a = Wa(e)), a !== null)) {
                    for (
                      t.flags |= 64,
                        Eo(n, !1),
                        o = a.updateQueue,
                        o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                        n.lastEffect === null && (t.firstEffect = null),
                        t.lastEffect = n.lastEffect,
                        n = r,
                        r = t.child;
                      r !== null;

                    )
                      (o = r),
                        (e = n),
                        (o.flags &= 2),
                        (o.nextEffect = null),
                        (o.firstEffect = null),
                        (o.lastEffect = null),
                        (a = o.alternate),
                        a === null
                          ? ((o.childLanes = 0),
                            (o.lanes = e),
                            (o.child = null),
                            (o.memoizedProps = null),
                            (o.memoizedState = null),
                            (o.updateQueue = null),
                            (o.dependencies = null),
                            (o.stateNode = null))
                          : ((o.childLanes = a.childLanes),
                            (o.lanes = a.lanes),
                            (o.child = a.child),
                            (o.memoizedProps = a.memoizedProps),
                            (o.memoizedState = a.memoizedState),
                            (o.updateQueue = a.updateQueue),
                            (o.type = a.type),
                            (e = a.dependencies),
                            (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                        (r = r.sibling)
                    return xe(Te, (Te.current & 1) | 2), t.child
                  }
                  e = e.sibling
                }
              n.tail !== null && Xe() > rf && ((t.flags |= 64), (o = !0), Eo(n, !1), (t.lanes = 33554432))
            }
          else {
            if (!o)
              if (((e = Wa(a)), e !== null)) {
                if (
                  ((t.flags |= 64),
                  (o = !0),
                  (r = e.updateQueue),
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  Eo(n, !0),
                  n.tail === null && n.tailMode === 'hidden' && !a.alternate && !Vt)
                )
                  return (t = t.lastEffect = n.lastEffect), t !== null && (t.nextEffect = null), null
              } else
                2 * Xe() - n.renderingStartTime > rf &&
                  r !== 1073741824 &&
                  ((t.flags |= 64), (o = !0), Eo(n, !1), (t.lanes = 33554432))
            n.isBackwards
              ? ((a.sibling = t.child), (t.child = a))
              : ((r = n.last), r !== null ? (r.sibling = a) : (t.child = a), (n.last = a))
          }
          return n.tail !== null
            ? ((r = n.tail),
              (n.rendering = r),
              (n.tail = r.sibling),
              (n.lastEffect = t.lastEffect),
              (n.renderingStartTime = Xe()),
              (r.sibling = null),
              (t = Te.current),
              xe(Te, o ? (t & 1) | 2 : t & 1),
              r)
            : null
        case 23:
        case 24:
          return (
            lf(),
            e !== null &&
              (e.memoizedState !== null) != (t.memoizedState !== null) &&
              n.mode !== 'unstable-defer-without-hiding' &&
              (t.flags |= 4),
            null
          )
      }
      throw Error(L(156, t.tag))
    }
    function Fy(e) {
      switch (e.tag) {
        case 1:
          at(e.type) && Ma()
          var t = e.flags
          return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
        case 3:
          if ((ri(), pe(ot), pe(Ye), Nl(), (t = e.flags), (t & 64) != 0)) throw Error(L(285))
          return (e.flags = (t & -4097) | 64), e
        case 5:
          return Ml(e), null
        case 13:
          return pe(Te), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
        case 19:
          return pe(Te), null
        case 4:
          return ri(), null
        case 10:
          return bl(e), null
        case 23:
        case 24:
          return lf(), null
        default:
          return null
      }
    }
    function $l(e, t) {
      try {
        var r = '',
          n = t
        do (r += vg(n)), (n = n.return)
        while (n)
        var i = r
      } catch (o) {
        i =
          `
Error generating stack: ` +
          o.message +
          `
` +
          o.stack
      }
      return { value: e, source: t, stack: i }
    }
    function Gl(e, t) {
      try {
        console.error(t.value)
      } catch (r) {
        setTimeout(function () {
          throw r
        })
      }
    }
    var Ay = typeof WeakMap == 'function' ? WeakMap : Map
    function dm(e, t, r) {
      ;(r = Dr(-1, r)), (r.tag = 3), (r.payload = { element: null })
      var n = t.value
      return (
        (r.callback = function () {
          Za || ((Za = !0), (nf = n)), Gl(e, t)
        }),
        r
      )
    }
    function pm(e, t, r) {
      ;(r = Dr(-1, r)), (r.tag = 3)
      var n = e.type.getDerivedStateFromError
      if (typeof n == 'function') {
        var i = t.value
        r.payload = function () {
          return Gl(e, t), n(i)
        }
      }
      var o = e.stateNode
      return (
        o !== null &&
          typeof o.componentDidCatch == 'function' &&
          (r.callback = function () {
            typeof n != 'function' && (Gt === null ? (Gt = new Set([this])) : Gt.add(this), Gl(e, t))
            var a = t.stack
            this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
          }),
        r
      )
    }
    var jy = typeof WeakSet == 'function' ? WeakSet : Set
    function mm(e) {
      var t = e.ref
      if (t !== null)
        if (typeof t == 'function')
          try {
            t(null)
          } catch (r) {
            Hr(e, r)
          }
        else t.current = null
    }
    function Hy(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return
        case 1:
          if (t.flags & 256 && e !== null) {
            var r = e.memoizedProps,
              n = e.memoizedState
            ;(e = t.stateNode),
              (t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? r : Dt(t.type, r), n)),
              (e.__reactInternalSnapshotBeforeUpdate = t)
          }
          return
        case 3:
          t.flags & 256 && gl(t.stateNode.containerInfo)
          return
        case 5:
        case 6:
        case 4:
        case 17:
          return
      }
      throw Error(L(163))
    }
    function By(e, t, r) {
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          if (((t = r.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
            e = t = t.next
            do {
              if ((e.tag & 3) == 3) {
                var n = e.create
                e.destroy = n()
              }
              e = e.next
            } while (e !== t)
          }
          if (((t = r.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
            e = t = t.next
            do {
              var i = e
              ;(n = i.next), (i = i.tag), (i & 4) != 0 && (i & 1) != 0 && (Cm(r, e), Yy(r, e)), (e = n)
            } while (e !== t)
          }
          return
        case 1:
          ;(e = r.stateNode),
            r.flags & 4 &&
              (t === null
                ? e.componentDidMount()
                : ((n = r.elementType === r.type ? t.memoizedProps : Dt(r.type, t.memoizedProps)),
                  e.componentDidUpdate(n, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
            (t = r.updateQueue),
            t !== null && Ip(r, t, e)
          return
        case 3:
          if (((t = r.updateQueue), t !== null)) {
            if (((e = null), r.child !== null))
              switch (r.child.tag) {
                case 5:
                  e = r.child.stateNode
                  break
                case 1:
                  e = r.child.stateNode
              }
            Ip(r, t, e)
          }
          return
        case 5:
          ;(e = r.stateNode), t === null && r.flags & 4 && cp(r.type, r.memoizedProps) && e.focus()
          return
        case 6:
          return
        case 4:
          return
        case 12:
          return
        case 13:
          r.memoizedState === null &&
            ((r = r.alternate),
            r !== null && ((r = r.memoizedState), r !== null && ((r = r.dehydrated), r !== null && bd(r))))
          return
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return
      }
      throw Error(L(163))
    }
    function hm(e, t) {
      for (var r = e; ; ) {
        if (r.tag === 5) {
          var n = r.stateNode
          if (t)
            (n = n.style),
              typeof n.setProperty == 'function' ? n.setProperty('display', 'none', 'important') : (n.display = 'none')
          else {
            n = r.stateNode
            var i = r.memoizedProps.style
            ;(i = i != null && i.hasOwnProperty('display') ? i.display : null), (n.style.display = fd('display', i))
          }
        } else if (r.tag === 6) r.stateNode.nodeValue = t ? '' : r.memoizedProps
        else if (((r.tag !== 23 && r.tag !== 24) || r.memoizedState === null || r === e) && r.child !== null) {
          ;(r.child.return = r), (r = r.child)
          continue
        }
        if (r === e) break
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e) return
          r = r.return
        }
        ;(r.sibling.return = r.return), (r = r.sibling)
      }
    }
    function vm(e, t) {
      if (ln && typeof ln.onCommitFiberUnmount == 'function')
        try {
          ln.onCommitFiberUnmount(wl, t)
        } catch (o) {}
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
            var r = (e = e.next)
            do {
              var n = r,
                i = n.destroy
              if (((n = n.tag), i !== void 0))
                if ((n & 4) != 0) Cm(t, r)
                else {
                  n = t
                  try {
                    i()
                  } catch (o) {
                    Hr(n, o)
                  }
                }
              r = r.next
            } while (r !== e)
          }
          break
        case 1:
          if ((mm(t), (e = t.stateNode), typeof e.componentWillUnmount == 'function'))
            try {
              ;(e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount()
            } catch (o) {
              Hr(t, o)
            }
          break
        case 5:
          mm(t)
          break
        case 4:
          wm(e, t)
      }
    }
    function gm(e) {
      ;(e.alternate = null),
        (e.child = null),
        (e.dependencies = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.return = null),
        (e.updateQueue = null)
    }
    function ym(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function _m(e) {
      e: {
        for (var t = e.return; t !== null; ) {
          if (ym(t)) break e
          t = t.return
        }
        throw Error(L(160))
      }
      var r = t
      switch (((t = r.stateNode), r.tag)) {
        case 5:
          var n = !1
          break
        case 3:
          ;(t = t.containerInfo), (n = !0)
          break
        case 4:
          ;(t = t.containerInfo), (n = !0)
          break
        default:
          throw Error(L(161))
      }
      r.flags & 16 && (zi(t, ''), (r.flags &= -17))
      e: t: for (r = e; ; ) {
        for (; r.sibling === null; ) {
          if (r.return === null || ym(r.return)) {
            r = null
            break e
          }
          r = r.return
        }
        for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18; ) {
          if (r.flags & 2 || r.child === null || r.tag === 4) continue t
          ;(r.child.return = r), (r = r.child)
        }
        if (!(r.flags & 2)) {
          r = r.stateNode
          break e
        }
      }
      n ? Yl(e, r, t) : Xl(e, r, t)
    }
    function Yl(e, t, r) {
      var n = e.tag,
        i = n === 5 || n === 6
      if (i)
        (e = i ? e.stateNode : e.stateNode.instance),
          t
            ? r.nodeType === 8
              ? r.parentNode.insertBefore(e, t)
              : r.insertBefore(e, t)
            : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)),
              (r = r._reactRootContainer),
              r != null || t.onclick !== null || (t.onclick = ba))
      else if (n !== 4 && ((e = e.child), e !== null))
        for (Yl(e, t, r), e = e.sibling; e !== null; ) Yl(e, t, r), (e = e.sibling)
    }
    function Xl(e, t, r) {
      var n = e.tag,
        i = n === 5 || n === 6
      if (i) (e = i ? e.stateNode : e.stateNode.instance), t ? r.insertBefore(e, t) : r.appendChild(e)
      else if (n !== 4 && ((e = e.child), e !== null))
        for (Xl(e, t, r), e = e.sibling; e !== null; ) Xl(e, t, r), (e = e.sibling)
    }
    function wm(e, t) {
      for (var r = t, n = !1, i, o; ; ) {
        if (!n) {
          n = r.return
          e: for (;;) {
            if (n === null) throw Error(L(160))
            switch (((i = n.stateNode), n.tag)) {
              case 5:
                o = !1
                break e
              case 3:
                ;(i = i.containerInfo), (o = !0)
                break e
              case 4:
                ;(i = i.containerInfo), (o = !0)
                break e
            }
            n = n.return
          }
          n = !0
        }
        if (r.tag === 5 || r.tag === 6) {
          e: for (var a = e, s = r, u = s; ; )
            if ((vm(a, u), u.child !== null && u.tag !== 4)) (u.child.return = u), (u = u.child)
            else {
              if (u === s) break e
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === s) break e
                u = u.return
              }
              ;(u.sibling.return = u.return), (u = u.sibling)
            }
          o
            ? ((a = i), (s = r.stateNode), a.nodeType === 8 ? a.parentNode.removeChild(s) : a.removeChild(s))
            : i.removeChild(r.stateNode)
        } else if (r.tag === 4) {
          if (r.child !== null) {
            ;(i = r.stateNode.containerInfo), (o = !0), (r.child.return = r), (r = r.child)
            continue
          }
        } else if ((vm(e, r), r.child !== null)) {
          ;(r.child.return = r), (r = r.child)
          continue
        }
        if (r === t) break
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return
          ;(r = r.return), r.tag === 4 && (n = !1)
        }
        ;(r.sibling.return = r.return), (r = r.sibling)
      }
    }
    function Kl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var r = t.updateQueue
          if (((r = r !== null ? r.lastEffect : null), r !== null)) {
            var n = (r = r.next)
            do (n.tag & 3) == 3 && ((e = n.destroy), (n.destroy = void 0), e !== void 0 && e()), (n = n.next)
            while (n !== r)
          }
          return
        case 1:
          return
        case 5:
          if (((r = t.stateNode), r != null)) {
            n = t.memoizedProps
            var i = e !== null ? e.memoizedProps : n
            e = t.type
            var o = t.updateQueue
            if (((t.updateQueue = null), o !== null)) {
              for (
                r[Ca] = n,
                  e === 'input' && n.type === 'radio' && n.name != null && nd(r, n),
                  ju(e, i),
                  t = ju(e, n),
                  i = 0;
                i < o.length;
                i += 2
              ) {
                var a = o[i],
                  s = o[i + 1]
                a === 'style'
                  ? cd(r, s)
                  : a === 'dangerouslySetInnerHTML'
                  ? ld(r, s)
                  : a === 'children'
                  ? zi(r, s)
                  : _u(r, a, s, t)
              }
              switch (e) {
                case 'input':
                  Mu(r, n)
                  break
                case 'textarea':
                  ad(r, n)
                  break
                case 'select':
                  ;(e = r._wrapperState.wasMultiple),
                    (r._wrapperState.wasMultiple = !!n.multiple),
                    (o = n.value),
                    o != null
                      ? An(r, !!n.multiple, o, !1)
                      : e !== !!n.multiple &&
                        (n.defaultValue != null
                          ? An(r, !!n.multiple, n.defaultValue, !0)
                          : An(r, !!n.multiple, n.multiple ? [] : '', !1))
              }
            }
          }
          return
        case 6:
          if (t.stateNode === null) throw Error(L(162))
          t.stateNode.nodeValue = t.memoizedProps
          return
        case 3:
          ;(r = t.stateNode), r.hydrate && ((r.hydrate = !1), bd(r.containerInfo))
          return
        case 12:
          return
        case 13:
          t.memoizedState !== null && ((tf = Xe()), hm(t.child, !0)), Em(t)
          return
        case 19:
          Em(t)
          return
        case 17:
          return
        case 23:
        case 24:
          hm(t, t.memoizedState !== null)
          return
      }
      throw Error(L(163))
    }
    function Em(e) {
      var t = e.updateQueue
      if (t !== null) {
        e.updateQueue = null
        var r = e.stateNode
        r === null && (r = e.stateNode = new jy()),
          t.forEach(function (n) {
            var i = Qy.bind(null, e, n)
            r.has(n) || (r.add(n), n.then(i, i))
          })
      }
    }
    function Uy(e, t) {
      return e !== null && ((e = e.memoizedState), e === null || e.dehydrated !== null)
        ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
        : !1
    }
    var zy = Math.ceil,
      Qa = rn.ReactCurrentDispatcher,
      Ql = rn.ReactCurrentOwner,
      G = 0,
      rt = null,
      Me = null,
      Qe = 0,
      mn = 0,
      Jl = Cr(0),
      qe = 0,
      Ja = null,
      ii = 0,
      So = 0,
      oi = 0,
      Zl = 0,
      ef = null,
      tf = 0,
      rf = Infinity
    function ai() {
      rf = Xe() + 500
    }
    var B = null,
      Za = !1,
      nf = null,
      Gt = null,
      Lr = !1,
      xo = null,
      To = 90,
      of = [],
      af = [],
      ur = null,
      ko = 0,
      sf = null,
      es = -1,
      lr = 0,
      ts = 0,
      Oo = null,
      rs = !1
    function pt() {
      return (G & 48) != 0 ? Xe() : es !== -1 ? es : (es = Xe())
    }
    function Fr(e) {
      if (((e = e.mode), (e & 2) == 0)) return 1
      if ((e & 4) == 0) return Zn() === 99 ? 1 : 2
      if ((lr === 0 && (lr = ii), Cy.transition !== 0)) {
        ts !== 0 && (ts = ef !== null ? ef.pendingLanes : 0), (e = lr)
        var t = 4186112 & ~ts
        return (t &= -t), t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)), t
      }
      return (e = Zn()), (G & 4) != 0 && e === 98 ? (e = va(12, lr)) : ((e = Dg(e)), (e = va(e, lr))), e
    }
    function Ar(e, t, r) {
      if (50 < ko) throw ((ko = 0), (sf = null), Error(L(185)))
      if (((e = ns(e, t)), e === null)) return null
      ga(e, t, r), e === rt && ((oi |= t), qe === 4 && si(e, Qe))
      var n = Zn()
      t === 1
        ? (G & 8) != 0 && (G & 48) == 0
          ? uf(e)
          : (Tt(e, r), G === 0 && (ai(), Wt()))
        : ((G & 4) == 0 || (n !== 98 && n !== 99) || (ur === null ? (ur = new Set([e])) : ur.add(e)), Tt(e, r)),
        (ef = e)
    }
    function ns(e, t) {
      e.lanes |= t
      var r = e.alternate
      for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
        (e.childLanes |= t), (r = e.alternate), r !== null && (r.childLanes |= t), (r = e), (e = e.return)
      return r.tag === 3 ? r.stateNode : null
    }
    function Tt(e, t) {
      for (
        var r = e.callbackNode, n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes;
        0 < a;

      ) {
        var s = 31 - Or(a),
          u = 1 << s,
          l = o[s]
        if (l === -1) {
          if ((u & n) == 0 || (u & i) != 0) {
            ;(l = t), zn(u)
            var c = fe
            o[s] = 10 <= c ? l + 250 : 6 <= c ? l + 5e3 : -1
          }
        } else l <= t && (e.expiredLanes |= u)
        a &= ~u
      }
      if (((n = Qi(e, e === rt ? Qe : 0)), (t = fe), n === 0))
        r !== null && (r !== Tl && Sl(r), (e.callbackNode = null), (e.callbackPriority = 0))
      else {
        if (r !== null) {
          if (e.callbackPriority === t) return
          r !== Tl && Sl(r)
        }
        t === 15
          ? ((r = uf.bind(null, e)), or === null ? ((or = [r]), (Na = El(Ra, Op))) : or.push(r), (r = Tl))
          : t === 14
          ? (r = uo(99, uf.bind(null, e)))
          : ((r = Rg(t)), (r = uo(r, Sm.bind(null, e)))),
          (e.callbackPriority = t),
          (e.callbackNode = r)
      }
    }
    function Sm(e) {
      if (((es = -1), (ts = lr = 0), (G & 48) != 0)) throw Error(L(327))
      var t = e.callbackNode
      if (jr() && e.callbackNode !== t) return null
      var r = Qi(e, e === rt ? Qe : 0)
      if (r === 0) return null
      var n = r,
        i = G
      G |= 16
      var o = Om()
      ;(rt !== e || Qe !== n) && (ai(), ui(e, n))
      do
        try {
          Vy()
          break
        } catch (s) {
          km(e, s)
        }
      while (1)
      if ((Ol(), (Qa.current = o), (G = i), Me !== null ? (n = 0) : ((rt = null), (Qe = 0), (n = qe)), (ii & oi) != 0))
        ui(e, 0)
      else if (n !== 0) {
        if (
          (n === 2 &&
            ((G |= 64), e.hydrate && ((e.hydrate = !1), gl(e.containerInfo)), (r = Nd(e)), r !== 0 && (n = bo(e, r))),
          n === 1)
        )
          throw ((t = Ja), ui(e, 0), si(e, r), Tt(e, Xe()), t)
        switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(L(345))
          case 2:
            hn(e)
            break
          case 3:
            if ((si(e, r), (r & 62914560) === r && ((n = tf + 500 - Xe()), 10 < n))) {
              if (Qi(e, 0) !== 0) break
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                pt(), (e.pingedLanes |= e.suspendedLanes & i)
                break
              }
              e.timeoutHandle = dp(hn.bind(null, e), n)
              break
            }
            hn(e)
            break
          case 4:
            if ((si(e, r), (r & 4186112) === r)) break
            for (n = e.eventTimes, i = -1; 0 < r; ) {
              var a = 31 - Or(r)
              ;(o = 1 << a), (a = n[a]), a > i && (i = a), (r &= ~o)
            }
            if (
              ((r = i),
              (r = Xe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * zy(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = dp(hn.bind(null, e), r)
              break
            }
            hn(e)
            break
          case 5:
            hn(e)
            break
          default:
            throw Error(L(329))
        }
      }
      return Tt(e, Xe()), e.callbackNode === t ? Sm.bind(null, e) : null
    }
    function si(e, t) {
      for (t &= ~Zl, t &= ~oi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var r = 31 - Or(t),
          n = 1 << r
        ;(e[r] = -1), (t &= ~n)
      }
    }
    function uf(e) {
      if ((G & 48) != 0) throw Error(L(327))
      if ((jr(), e === rt && (e.expiredLanes & Qe) != 0)) {
        var t = Qe,
          r = bo(e, t)
        ;(ii & oi) != 0 && ((t = Qi(e, t)), (r = bo(e, t)))
      } else (t = Qi(e, 0)), (r = bo(e, t))
      if (
        (e.tag !== 0 &&
          r === 2 &&
          ((G |= 64), e.hydrate && ((e.hydrate = !1), gl(e.containerInfo)), (t = Nd(e)), t !== 0 && (r = bo(e, t))),
        r === 1)
      )
        throw ((r = Ja), ui(e, 0), si(e, t), Tt(e, Xe()), r)
      return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), hn(e), Tt(e, Xe()), null
    }
    function Wy() {
      if (ur !== null) {
        var e = ur
        ;(ur = null),
          e.forEach(function (t) {
            ;(t.expiredLanes |= 24 & t.pendingLanes), Tt(t, Xe())
          })
      }
      Wt()
    }
    function xm(e, t) {
      var r = G
      G |= 1
      try {
        return e(t)
      } finally {
        ;(G = r), G === 0 && (ai(), Wt())
      }
    }
    function Tm(e, t) {
      var r = G
      ;(G &= -2), (G |= 8)
      try {
        return e(t)
      } finally {
        ;(G = r), G === 0 && (ai(), Wt())
      }
    }
    function is(e, t) {
      xe(Jl, mn), (mn |= t), (ii |= t)
    }
    function lf() {
      ;(mn = Jl.current), pe(Jl)
    }
    function ui(e, t) {
      ;(e.finishedWork = null), (e.finishedLanes = 0)
      var r = e.timeoutHandle
      if ((r !== -1 && ((e.timeoutHandle = -1), xy(r)), Me !== null))
        for (r = Me.return; r !== null; ) {
          var n = r
          switch (n.tag) {
            case 1:
              ;(n = n.type.childContextTypes), n != null && Ma()
              break
            case 3:
              ri(), pe(ot), pe(Ye), Nl()
              break
            case 5:
              Ml(n)
              break
            case 4:
              ri()
              break
            case 13:
              pe(Te)
              break
            case 19:
              pe(Te)
              break
            case 10:
              bl(n)
              break
            case 23:
            case 24:
              lf()
          }
          r = r.return
        }
      ;(rt = e), (Me = Br(e.current, null)), (Qe = mn = ii = t), (qe = 0), (Ja = null), (Zl = oi = So = 0)
    }
    function km(e, t) {
      do {
        var r = Me
        try {
          if ((Ol(), (ho.current = Xa), Va)) {
            for (var n = be.memoizedState; n !== null; ) {
              var i = n.queue
              i !== null && (i.pending = null), (n = n.next)
            }
            Va = !1
          }
          if (((vo = 0), (We = Ke = be = null), (go = !1), (Ql.current = null), r === null || r.return === null)) {
            ;(qe = 1), (Ja = t), (Me = null)
            break
          }
          e: {
            var o = e,
              a = r.return,
              s = r,
              u = t
            if (
              ((t = Qe),
              (s.flags |= 2048),
              (s.firstEffect = s.lastEffect = null),
              u !== null && typeof u == 'object' && typeof u.then == 'function')
            ) {
              var l = u
              if ((s.mode & 2) == 0) {
                var c = s.alternate
                c
                  ? ((s.updateQueue = c.updateQueue), (s.memoizedState = c.memoizedState), (s.lanes = c.lanes))
                  : ((s.updateQueue = null), (s.memoizedState = null))
              }
              var m = (Te.current & 1) != 0,
                h = a
              do {
                var _
                if ((_ = h.tag === 13)) {
                  var S = h.memoizedState
                  if (S !== null) _ = S.dehydrated !== null
                  else {
                    var x = h.memoizedProps
                    _ = x.fallback === void 0 ? !1 : x.unstable_avoidThisFallback !== !0 ? !0 : !m
                  }
                }
                if (_) {
                  var p = h.updateQueue
                  if (p === null) {
                    var d = new Set()
                    d.add(l), (h.updateQueue = d)
                  } else p.add(l)
                  if ((h.mode & 2) == 0) {
                    if (((h.flags |= 64), (s.flags |= 16384), (s.flags &= -2981), s.tag === 1))
                      if (s.alternate === null) s.tag = 17
                      else {
                        var v = Dr(-1, 1)
                        ;(v.tag = 2), Rr(s, v)
                      }
                    s.lanes |= 1
                    break e
                  }
                  ;(u = void 0), (s = t)
                  var y = o.pingCache
                  if (
                    (y === null
                      ? ((y = o.pingCache = new Ay()), (u = new Set()), y.set(l, u))
                      : ((u = y.get(l)), u === void 0 && ((u = new Set()), y.set(l, u))),
                    !u.has(s))
                  ) {
                    u.add(s)
                    var E = Ky.bind(null, o, l, s)
                    l.then(E, E)
                  }
                  ;(h.flags |= 4096), (h.lanes = t)
                  break e
                }
                h = h.return
              } while (h !== null)
              u = Error(
                (Fn(s.type) || 'A React component') +
                  ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
              )
            }
            qe !== 5 && (qe = 2), (u = $l(u, s)), (h = a)
            do {
              switch (h.tag) {
                case 3:
                  ;(o = u), (h.flags |= 4096), (t &= -t), (h.lanes |= t)
                  var D = dm(h, o, t)
                  Cp(h, D)
                  break e
                case 1:
                  o = u
                  var b = h.type,
                    P = h.stateNode
                  if (
                    (h.flags & 64) == 0 &&
                    (typeof b.getDerivedStateFromError == 'function' ||
                      (P !== null && typeof P.componentDidCatch == 'function' && (Gt === null || !Gt.has(P))))
                  ) {
                    ;(h.flags |= 4096), (t &= -t), (h.lanes |= t)
                    var M = pm(h, o, t)
                    Cp(h, M)
                    break e
                  }
              }
              h = h.return
            } while (h !== null)
          }
          Pm(r)
        } catch (O) {
          ;(t = O), Me === r && r !== null && (Me = r = r.return)
          continue
        }
        break
      } while (1)
    }
    function Om() {
      var e = Qa.current
      return (Qa.current = Xa), e === null ? Xa : e
    }
    function bo(e, t) {
      var r = G
      G |= 16
      var n = Om()
      ;(rt === e && Qe === t) || ui(e, t)
      do
        try {
          qy()
          break
        } catch (i) {
          km(e, i)
        }
      while (1)
      if ((Ol(), (G = r), (Qa.current = n), Me !== null)) throw Error(L(261))
      return (rt = null), (Qe = 0), qe
    }
    function qy() {
      for (; Me !== null; ) bm(Me)
    }
    function Vy() {
      for (; Me !== null && !Oy(); ) bm(Me)
    }
    function bm(e) {
      var t = Mm(e.alternate, e, mn)
      ;(e.memoizedProps = e.pendingProps), t === null ? Pm(e) : (Me = t), (Ql.current = null)
    }
    function Pm(e) {
      var t = e
      do {
        var r = t.alternate
        if (((e = t.return), (t.flags & 2048) == 0)) {
          if (((r = Ly(r, t, mn)), r !== null)) {
            Me = r
            return
          }
          if (
            ((r = t),
            (r.tag !== 24 && r.tag !== 23) || r.memoizedState === null || (mn & 1073741824) != 0 || (r.mode & 4) == 0)
          ) {
            for (var n = 0, i = r.child; i !== null; ) (n |= i.lanes | i.childLanes), (i = i.sibling)
            r.childLanes = n
          }
          e !== null &&
            (e.flags & 2048) == 0 &&
            (e.firstEffect === null && (e.firstEffect = t.firstEffect),
            t.lastEffect !== null &&
              (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
            1 < t.flags &&
              (e.lastEffect !== null ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)))
        } else {
          if (((r = Fy(t)), r !== null)) {
            ;(r.flags &= 2047), (Me = r)
            return
          }
          e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048))
        }
        if (((t = t.sibling), t !== null)) {
          Me = t
          return
        }
        Me = t = e
      } while (t !== null)
      qe === 0 && (qe = 5)
    }
    function hn(e) {
      var t = Zn()
      return fn(99, $y.bind(null, e, t)), null
    }
    function $y(e, t) {
      do jr()
      while (xo !== null)
      if ((G & 48) != 0) throw Error(L(327))
      var r = e.finishedWork
      if (r === null) return null
      if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(L(177))
      e.callbackNode = null
      var n = r.lanes | r.childLanes,
        i = n,
        o = e.pendingLanes & ~i
      ;(e.pendingLanes = i),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= i),
        (e.mutableReadLanes &= i),
        (e.entangledLanes &= i),
        (i = e.entanglements)
      for (var a = e.eventTimes, s = e.expirationTimes; 0 < o; ) {
        var u = 31 - Or(o),
          l = 1 << u
        ;(i[u] = 0), (a[u] = -1), (s[u] = -1), (o &= ~l)
      }
      if (
        (ur !== null && (n & 24) == 0 && ur.has(e) && ur.delete(e),
        e === rt && ((Me = rt = null), (Qe = 0)),
        1 < r.flags
          ? r.lastEffect !== null
            ? ((r.lastEffect.nextEffect = r), (n = r.firstEffect))
            : (n = r)
          : (n = r.firstEffect),
        n !== null)
      ) {
        if (((i = G), (G |= 32), (Ql.current = null), (ml = ya), (a = Zd()), fl(a))) {
          if ('selectionStart' in a) s = { start: a.selectionStart, end: a.selectionEnd }
          else
            e: if (
              ((s = ((s = a.ownerDocument) && s.defaultView) || window),
              (l = s.getSelection && s.getSelection()) && l.rangeCount !== 0)
            ) {
              ;(s = l.anchorNode), (o = l.anchorOffset), (u = l.focusNode), (l = l.focusOffset)
              try {
                s.nodeType, u.nodeType
              } catch (O) {
                s = null
                break e
              }
              var c = 0,
                m = -1,
                h = -1,
                _ = 0,
                S = 0,
                x = a,
                p = null
              t: for (;;) {
                for (
                  var d;
                  x !== s || (o !== 0 && x.nodeType !== 3) || (m = c + o),
                    x !== u || (l !== 0 && x.nodeType !== 3) || (h = c + l),
                    x.nodeType === 3 && (c += x.nodeValue.length),
                    (d = x.firstChild) !== null;

                )
                  (p = x), (x = d)
                for (;;) {
                  if (x === a) break t
                  if ((p === s && ++_ === o && (m = c), p === u && ++S === l && (h = c), (d = x.nextSibling) !== null))
                    break
                  ;(x = p), (p = x.parentNode)
                }
                x = d
              }
              s = m === -1 || h === -1 ? null : { start: m, end: h }
            } else s = null
          s = s || { start: 0, end: 0 }
        } else s = null
        ;(hl = { focusedElem: a, selectionRange: s }), (ya = !1), (Oo = null), (rs = !1), (B = n)
        do
          try {
            Gy()
          } catch (O) {
            if (B === null) throw Error(L(330))
            Hr(B, O), (B = B.nextEffect)
          }
        while (B !== null)
        ;(Oo = null), (B = n)
        do
          try {
            for (a = e; B !== null; ) {
              var v = B.flags
              if ((v & 16 && zi(B.stateNode, ''), v & 128)) {
                var y = B.alternate
                if (y !== null) {
                  var E = y.ref
                  E !== null && (typeof E == 'function' ? E(null) : (E.current = null))
                }
              }
              switch (v & 1038) {
                case 2:
                  _m(B), (B.flags &= -3)
                  break
                case 6:
                  _m(B), (B.flags &= -3), Kl(B.alternate, B)
                  break
                case 1024:
                  B.flags &= -1025
                  break
                case 1028:
                  ;(B.flags &= -1025), Kl(B.alternate, B)
                  break
                case 4:
                  Kl(B.alternate, B)
                  break
                case 8:
                  ;(s = B), wm(a, s)
                  var D = s.alternate
                  gm(s), D !== null && gm(D)
              }
              B = B.nextEffect
            }
          } catch (O) {
            if (B === null) throw Error(L(330))
            Hr(B, O), (B = B.nextEffect)
          }
        while (B !== null)
        if (
          ((E = hl),
          (y = Zd()),
          (v = E.focusedElem),
          (a = E.selectionRange),
          y !== v && v && v.ownerDocument && Jd(v.ownerDocument.documentElement, v))
        ) {
          for (
            a !== null &&
              fl(v) &&
              ((y = a.start),
              (E = a.end),
              E === void 0 && (E = y),
              ('selectionStart' in v)
                ? ((v.selectionStart = y), (v.selectionEnd = Math.min(E, v.value.length)))
                : ((E = ((y = v.ownerDocument || document) && y.defaultView) || window),
                  E.getSelection &&
                    ((E = E.getSelection()),
                    (s = v.textContent.length),
                    (D = Math.min(a.start, s)),
                    (a = a.end === void 0 ? D : Math.min(a.end, s)),
                    !E.extend && D > a && ((s = a), (a = D), (D = s)),
                    (s = Qd(v, D)),
                    (o = Qd(v, a)),
                    s &&
                      o &&
                      (E.rangeCount !== 1 ||
                        E.anchorNode !== s.node ||
                        E.anchorOffset !== s.offset ||
                        E.focusNode !== o.node ||
                        E.focusOffset !== o.offset) &&
                      ((y = y.createRange()),
                      y.setStart(s.node, s.offset),
                      E.removeAllRanges(),
                      D > a
                        ? (E.addRange(y), E.extend(o.node, o.offset))
                        : (y.setEnd(o.node, o.offset), E.addRange(y)))))),
              y = [],
              E = v;
            (E = E.parentNode);

          )
            E.nodeType === 1 && y.push({ element: E, left: E.scrollLeft, top: E.scrollTop })
          for (typeof v.focus == 'function' && v.focus(), v = 0; v < y.length; v++)
            (E = y[v]), (E.element.scrollLeft = E.left), (E.element.scrollTop = E.top)
        }
        ;(ya = !!ml), (hl = ml = null), (e.current = r), (B = n)
        do
          try {
            for (v = e; B !== null; ) {
              var b = B.flags
              if ((b & 36 && By(v, B.alternate, B), b & 128)) {
                y = void 0
                var P = B.ref
                if (P !== null) {
                  var M = B.stateNode
                  switch (B.tag) {
                    case 5:
                      y = M
                      break
                    default:
                      y = M
                  }
                  typeof P == 'function' ? P(y) : (P.current = y)
                }
              }
              B = B.nextEffect
            }
          } catch (O) {
            if (B === null) throw Error(L(330))
            Hr(B, O), (B = B.nextEffect)
          }
        while (B !== null)
        ;(B = null), Py(), (G = i)
      } else e.current = r
      if (Lr) (Lr = !1), (xo = e), (To = t)
      else
        for (B = n; B !== null; )
          (t = B.nextEffect),
            (B.nextEffect = null),
            B.flags & 8 && ((b = B), (b.sibling = null), (b.stateNode = null)),
            (B = t)
      if (
        ((n = e.pendingLanes),
        n === 0 && (Gt = null),
        n === 1 ? (e === sf ? ko++ : ((ko = 0), (sf = e))) : (ko = 0),
        (r = r.stateNode),
        ln && typeof ln.onCommitFiberRoot == 'function')
      )
        try {
          ln.onCommitFiberRoot(wl, r, void 0, (r.current.flags & 64) == 64)
        } catch (O) {}
      if ((Tt(e, Xe()), Za)) throw ((Za = !1), (e = nf), (nf = null), e)
      return (G & 8) != 0 || Wt(), null
    }
    function Gy() {
      for (; B !== null; ) {
        var e = B.alternate
        rs ||
          Oo === null ||
          ((B.flags & 8) != 0 ? wd(B, Oo) && (rs = !0) : B.tag === 13 && Uy(e, B) && wd(B, Oo) && (rs = !0))
        var t = B.flags
        ;(t & 256) != 0 && Hy(e, B),
          (t & 512) == 0 ||
            Lr ||
            ((Lr = !0),
            uo(97, function () {
              return jr(), null
            })),
          (B = B.nextEffect)
      }
    }
    function jr() {
      if (To !== 90) {
        var e = 97 < To ? 97 : To
        return (To = 90), fn(e, Xy)
      }
      return !1
    }
    function Yy(e, t) {
      of.push(t, e),
        Lr ||
          ((Lr = !0),
          uo(97, function () {
            return jr(), null
          }))
    }
    function Cm(e, t) {
      af.push(t, e),
        Lr ||
          ((Lr = !0),
          uo(97, function () {
            return jr(), null
          }))
    }
    function Xy() {
      if (xo === null) return !1
      var e = xo
      if (((xo = null), (G & 48) != 0)) throw Error(L(331))
      var t = G
      G |= 32
      var r = af
      af = []
      for (var n = 0; n < r.length; n += 2) {
        var i = r[n],
          o = r[n + 1],
          a = i.destroy
        if (((i.destroy = void 0), typeof a == 'function'))
          try {
            a()
          } catch (u) {
            if (o === null) throw Error(L(330))
            Hr(o, u)
          }
      }
      for (r = of, of = [], n = 0; n < r.length; n += 2) {
        ;(i = r[n]), (o = r[n + 1])
        try {
          var s = i.create
          i.destroy = s()
        } catch (u) {
          if (o === null) throw Error(L(330))
          Hr(o, u)
        }
      }
      for (s = e.current.firstEffect; s !== null; )
        (e = s.nextEffect), (s.nextEffect = null), s.flags & 8 && ((s.sibling = null), (s.stateNode = null)), (s = e)
      return (G = t), Wt(), !0
    }
    function Im(e, t, r) {
      ;(t = $l(r, t)), (t = dm(e, t, 1)), Rr(e, t), (t = pt()), (e = ns(e, 1)), e !== null && (ga(e, 1, t), Tt(e, t))
    }
    function Hr(e, t) {
      if (e.tag === 3) Im(e, e, t)
      else
        for (var r = e.return; r !== null; ) {
          if (r.tag === 3) {
            Im(r, e, t)
            break
          } else if (r.tag === 1) {
            var n = r.stateNode
            if (
              typeof r.type.getDerivedStateFromError == 'function' ||
              (typeof n.componentDidCatch == 'function' && (Gt === null || !Gt.has(n)))
            ) {
              e = $l(t, e)
              var i = pm(r, e, 1)
              if ((Rr(r, i), (i = pt()), (r = ns(r, 1)), r !== null)) ga(r, 1, i), Tt(r, i)
              else if (typeof n.componentDidCatch == 'function' && (Gt === null || !Gt.has(n)))
                try {
                  n.componentDidCatch(t, e)
                } catch (o) {}
              break
            }
          }
          r = r.return
        }
    }
    function Ky(e, t, r) {
      var n = e.pingCache
      n !== null && n.delete(t),
        (t = pt()),
        (e.pingedLanes |= e.suspendedLanes & r),
        rt === e &&
          (Qe & r) === r &&
          (qe === 4 || (qe === 3 && (Qe & 62914560) === Qe && 500 > Xe() - tf) ? ui(e, 0) : (Zl |= r)),
        Tt(e, t)
    }
    function Qy(e, t) {
      var r = e.stateNode
      r !== null && r.delete(t),
        (t = 0),
        t === 0 &&
          ((t = e.mode),
          (t & 2) == 0
            ? (t = 1)
            : (t & 4) == 0
            ? (t = Zn() === 99 ? 1 : 2)
            : (lr === 0 && (lr = ii), (t = Wn(62914560 & ~lr)), t === 0 && (t = 4194304))),
        (r = pt()),
        (e = ns(e, t)),
        e !== null && (ga(e, t, r), Tt(e, r))
    }
    var Mm
    Mm = function (e, t, r) {
      var n = t.lanes
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ot.current) Rt = !0
        else if ((r & n) != 0) Rt = (e.flags & 16384) != 0
        else {
          switch (((Rt = !1), t.tag)) {
            case 3:
              rm(t), Rl()
              break
            case 5:
              Ap(t)
              break
            case 1:
              at(t.type) && Da(t)
              break
            case 4:
              Il(t, t.stateNode.containerInfo)
              break
            case 10:
              n = t.memoizedProps.value
              var i = t.type._context
              xe(La, i._currentValue), (i._currentValue = n)
              break
            case 13:
              if (t.memoizedState !== null)
                return (r & t.child.childLanes) != 0
                  ? nm(e, t, r)
                  : (xe(Te, Te.current & 1), (t = sr(e, t, r)), t !== null ? t.sibling : null)
              xe(Te, Te.current & 1)
              break
            case 19:
              if (((n = (r & t.childLanes) != 0), (e.flags & 64) != 0)) {
                if (n) return um(e, t, r)
                t.flags |= 64
              }
              if (
                ((i = t.memoizedState),
                i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                xe(Te, Te.current),
                n)
              )
                break
              return null
            case 23:
            case 24:
              return (t.lanes = 0), Ul(e, t, r)
          }
          return sr(e, t, r)
        }
      else Rt = !1
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          if (
            ((n = t.type),
            e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (e = t.pendingProps),
            (i = Jn(t, Ye.current)),
            ti(t, r),
            (i = Fl(null, t, n, e, i, r)),
            (t.flags |= 1),
            typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0)
          ) {
            if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), at(n))) {
              var o = !0
              Da(t)
            } else o = !1
            ;(t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null), Pl(t)
            var a = n.getDerivedStateFromProps
            typeof a == 'function' && ja(t, n, a, e),
              (i.updater = Ha),
              (t.stateNode = i),
              (i._reactInternals = t),
              Cl(t, n, e, r),
              (t = Wl(null, t, n, !0, o, r))
          } else (t.tag = 0), ut(null, t, i, r), (t = t.child)
          return t
        case 16:
          i = t.elementType
          e: {
            switch (
              (e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (o = i._init),
              (i = o(i._payload)),
              (t.type = i),
              (o = t.tag = Zy(i)),
              (e = Dt(i, e)),
              o)
            ) {
              case 0:
                t = zl(null, t, i, e, r)
                break e
              case 1:
                t = tm(null, t, i, e, r)
                break e
              case 11:
                t = Qp(null, t, i, e, r)
                break e
              case 14:
                t = Jp(null, t, i, Dt(i.type, e), n, r)
                break e
            }
            throw Error(L(306, i, ''))
          }
          return t
        case 0:
          return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : Dt(n, i)), zl(e, t, n, i, r)
        case 1:
          return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : Dt(n, i)), tm(e, t, n, i, r)
        case 3:
          if ((rm(t), (n = t.updateQueue), e === null || n === null)) throw Error(L(282))
          if (
            ((n = t.pendingProps),
            (i = t.memoizedState),
            (i = i !== null ? i.element : null),
            Pp(e, t),
            lo(t, n, null, r),
            (n = t.memoizedState.element),
            n === i)
          )
            Rl(), (t = sr(e, t, r))
          else {
            if (
              ((i = t.stateNode),
              (o = i.hydrate) && ((Nr = Yn(t.stateNode.containerInfo.firstChild)), (ar = t), (o = Vt = !0)),
              o)
            ) {
              if (((e = i.mutableSourceEagerHydrationData), e != null))
                for (i = 0; i < e.length; i += 2) (o = e[i]), (o._workInProgressVersionPrimary = e[i + 1]), ni.push(o)
              for (r = Fp(t, null, n, r), t.child = r; r; ) (r.flags = (r.flags & -3) | 1024), (r = r.sibling)
            } else ut(e, t, n, r), Rl()
            t = t.child
          }
          return t
        case 5:
          return (
            Ap(t),
            e === null && Dl(t),
            (n = t.type),
            (i = t.pendingProps),
            (o = e !== null ? e.memoizedProps : null),
            (a = i.children),
            vl(n, i) ? (a = null) : o !== null && vl(n, o) && (t.flags |= 16),
            em(e, t),
            ut(e, t, a, r),
            t.child
          )
        case 6:
          return e === null && Dl(t), null
        case 13:
          return nm(e, t, r)
        case 4:
          return (
            Il(t, t.stateNode.containerInfo),
            (n = t.pendingProps),
            e === null ? (t.child = za(t, null, n, r)) : ut(e, t, n, r),
            t.child
          )
        case 11:
          return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : Dt(n, i)), Qp(e, t, n, i, r)
        case 7:
          return ut(e, t, t.pendingProps, r), t.child
        case 8:
          return ut(e, t, t.pendingProps.children, r), t.child
        case 12:
          return ut(e, t, t.pendingProps.children, r), t.child
        case 10:
          e: {
            ;(n = t.type._context), (i = t.pendingProps), (a = t.memoizedProps), (o = i.value)
            var s = t.type._context
            if ((xe(La, s._currentValue), (s._currentValue = o), a !== null))
              if (
                ((s = a.value),
                (o = Et(s, o)
                  ? 0
                  : (typeof n._calculateChangedBits == 'function' ? n._calculateChangedBits(s, o) : 1073741823) | 0),
                o === 0)
              ) {
                if (a.children === i.children && !ot.current) {
                  t = sr(e, t, r)
                  break e
                }
              } else
                for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                  var u = s.dependencies
                  if (u !== null) {
                    a = s.child
                    for (var l = u.firstContext; l !== null; ) {
                      if (l.context === n && (l.observedBits & o) != 0) {
                        s.tag === 1 && ((l = Dr(-1, r & -r)), (l.tag = 2), Rr(s, l)),
                          (s.lanes |= r),
                          (l = s.alternate),
                          l !== null && (l.lanes |= r),
                          bp(s.return, r),
                          (u.lanes |= r)
                        break
                      }
                      l = l.next
                    }
                  } else a = s.tag === 10 && s.type === t.type ? null : s.child
                  if (a !== null) a.return = s
                  else
                    for (a = s; a !== null; ) {
                      if (a === t) {
                        a = null
                        break
                      }
                      if (((s = a.sibling), s !== null)) {
                        ;(s.return = a.return), (a = s)
                        break
                      }
                      a = a.return
                    }
                  s = a
                }
            ut(e, t, i.children, r), (t = t.child)
          }
          return t
        case 9:
          return (
            (i = t.type),
            (o = t.pendingProps),
            (n = o.children),
            ti(t, r),
            (i = St(i, o.unstable_observedBits)),
            (n = n(i)),
            (t.flags |= 1),
            ut(e, t, n, r),
            t.child
          )
        case 14:
          return (i = t.type), (o = Dt(i, t.pendingProps)), (o = Dt(i.type, o)), Jp(e, t, i, o, n, r)
        case 15:
          return Zp(e, t, t.type, t.pendingProps, n, r)
        case 17:
          return (
            (n = t.type),
            (i = t.pendingProps),
            (i = t.elementType === n ? i : Dt(n, i)),
            e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (t.tag = 1),
            at(n) ? ((e = !0), Da(t)) : (e = !1),
            ti(t, r),
            Rp(t, n, i),
            Cl(t, n, i, r),
            Wl(null, t, n, !0, e, r)
          )
        case 19:
          return um(e, t, r)
        case 23:
          return Ul(e, t, r)
        case 24:
          return Ul(e, t, r)
      }
      throw Error(L(156, t.tag))
    }
    function Jy(e, t, r, n) {
      ;(this.tag = e),
        (this.key = r),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = n),
        (this.flags = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null)
    }
    function kt(e, t, r, n) {
      return new Jy(e, t, r, n)
    }
    function ff(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent)
    }
    function Zy(e) {
      if (typeof e == 'function') return ff(e) ? 1 : 0
      if (e != null) {
        if (((e = e.$$typeof), e === ia)) return 11
        if (e === aa) return 14
      }
      return 2
    }
    function Br(e, t) {
      var r = e.alternate
      return (
        r === null
          ? ((r = kt(e.tag, t, e.key, e.mode)),
            (r.elementType = e.elementType),
            (r.type = e.type),
            (r.stateNode = e.stateNode),
            (r.alternate = e),
            (e.alternate = r))
          : ((r.pendingProps = t),
            (r.type = e.type),
            (r.flags = 0),
            (r.nextEffect = null),
            (r.firstEffect = null),
            (r.lastEffect = null)),
        (r.childLanes = e.childLanes),
        (r.lanes = e.lanes),
        (r.child = e.child),
        (r.memoizedProps = e.memoizedProps),
        (r.memoizedState = e.memoizedState),
        (r.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (r.sibling = e.sibling),
        (r.index = e.index),
        (r.ref = e.ref),
        r
      )
    }
    function os(e, t, r, n, i, o) {
      var a = 2
      if (((n = e), typeof e == 'function')) ff(e) && (a = 1)
      else if (typeof e == 'string') a = 5
      else
        e: switch (e) {
          case Er:
            return li(r.children, i, o, t)
          case Jc:
            ;(a = 8), (i |= 16)
            break
          case wu:
            ;(a = 8), (i |= 1)
            break
          case ji:
            return (e = kt(12, r, t, i | 8)), (e.elementType = ji), (e.type = ji), (e.lanes = o), e
          case Hi:
            return (e = kt(13, r, t, i)), (e.type = Hi), (e.elementType = Hi), (e.lanes = o), e
          case oa:
            return (e = kt(19, r, t, i)), (e.elementType = oa), (e.lanes = o), e
          case Ou:
            return cf(r, i, o, t)
          case bu:
            return (e = kt(24, r, t, i)), (e.elementType = bu), (e.lanes = o), e
          default:
            if (typeof e == 'object' && e !== null)
              switch (e.$$typeof) {
                case Eu:
                  a = 10
                  break e
                case Su:
                  a = 9
                  break e
                case ia:
                  a = 11
                  break e
                case aa:
                  a = 14
                  break e
                case xu:
                  ;(a = 16), (n = null)
                  break e
                case Tu:
                  a = 22
                  break e
              }
            throw Error(L(130, e == null ? e : typeof e, ''))
        }
      return (t = kt(a, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
    }
    function li(e, t, r, n) {
      return (e = kt(7, e, n, t)), (e.lanes = r), e
    }
    function cf(e, t, r, n) {
      return (e = kt(23, e, n, t)), (e.elementType = Ou), (e.lanes = r), e
    }
    function df(e, t, r) {
      return (e = kt(6, e, null, t)), (e.lanes = r), e
    }
    function pf(e, t, r) {
      return (
        (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = r),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
      )
    }
    function e0(e, t, r) {
      ;(this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = r),
        (this.callbackNode = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Zu(0)),
        (this.expirationTimes = Zu(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Zu(0)),
        (this.mutableSourceEagerHydrationData = null)
    }
    function t0(e, t, r) {
      var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
      return { $$typeof: nn, key: n == null ? null : '' + n, children: e, containerInfo: t, implementation: r }
    }
    function as(e, t, r, n) {
      var i = t.current,
        o = pt(),
        a = Fr(i)
      e: if (r) {
        r = r._reactInternals
        t: {
          if (an(r) !== r || r.tag !== 1) throw Error(L(170))
          var s = r
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context
                break t
              case 1:
                if (at(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext
                  break t
                }
            }
            s = s.return
          } while (s !== null)
          throw Error(L(171))
        }
        if (r.tag === 1) {
          var u = r.type
          if (at(u)) {
            r = gp(r, u, s)
            break e
          }
        }
        r = s
      } else r = Ir
      return (
        t.context === null ? (t.context = r) : (t.pendingContext = r),
        (t = Dr(o, a)),
        (t.payload = { element: e }),
        (n = n === void 0 ? null : n),
        n !== null && (t.callback = n),
        Rr(i, t),
        Ar(i, a, o),
        a
      )
    }
    function mf(e) {
      if (((e = e.current), !e.child)) return null
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode
        default:
          return e.child.stateNode
      }
    }
    function Dm(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var r = e.retryLane
        e.retryLane = r !== 0 && r < t ? r : t
      }
    }
    function hf(e, t) {
      Dm(e, t), (e = e.alternate) && Dm(e, t)
    }
    function r0() {
      return null
    }
    function vf(e, t, r) {
      var n = (r != null && r.hydrationOptions != null && r.hydrationOptions.mutableSources) || null
      if (
        ((r = new e0(e, t, r != null && r.hydrate === !0)),
        (t = kt(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
        (r.current = t),
        (t.stateNode = r),
        Pl(t),
        (e[Xn] = r.current),
        ap(e.nodeType === 8 ? e.parentNode : e),
        n)
      )
        for (e = 0; e < n.length; e++) {
          t = n[e]
          var i = t._getVersion
          ;(i = i(t._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [t, i])
              : r.mutableSourceEagerHydrationData.push(t, i)
        }
      this._internalRoot = r
    }
    vf.prototype.render = function (e) {
      as(e, this._internalRoot, null, null)
    }
    vf.prototype.unmount = function () {
      var e = this._internalRoot,
        t = e.containerInfo
      as(null, e, null, function () {
        t[Xn] = null
      })
    }
    function Po(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
      )
    }
    function n0(e, t) {
      if (
        (t ||
          ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
          (t = !(!t || t.nodeType !== 1 || !t.hasAttribute('data-reactroot')))),
        !t)
      )
        for (var r; (r = e.lastChild); ) e.removeChild(r)
      return new vf(e, 0, t ? { hydrate: !0 } : void 0)
    }
    function ss(e, t, r, n, i) {
      var o = r._reactRootContainer
      if (o) {
        var a = o._internalRoot
        if (typeof i == 'function') {
          var s = i
          i = function () {
            var l = mf(a)
            s.call(l)
          }
        }
        as(t, a, e, i)
      } else {
        if (((o = r._reactRootContainer = n0(r, n)), (a = o._internalRoot), typeof i == 'function')) {
          var u = i
          i = function () {
            var l = mf(a)
            u.call(l)
          }
        }
        Tm(function () {
          as(t, a, e, i)
        })
      }
      return mf(a)
    }
    Ed = function (e) {
      if (e.tag === 13) {
        var t = pt()
        Ar(e, 4, t), hf(e, 4)
      }
    }
    Gu = function (e) {
      if (e.tag === 13) {
        var t = pt()
        Ar(e, 67108864, t), hf(e, 67108864)
      }
    }
    Sd = function (e) {
      if (e.tag === 13) {
        var t = pt(),
          r = Fr(e)
        Ar(e, r, t), hf(e, r)
      }
    }
    xd = function (e, t) {
      return t()
    }
    Bu = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((Mu(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode
            for (
              r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
              t < r.length;
              t++
            ) {
              var n = r[t]
              if (n !== e && n.form === e.form) {
                var i = Ia(n)
                if (!i) throw Error(L(90))
                td(n), Mu(n, i)
              }
            }
          }
          break
        case 'textarea':
          ad(e, r)
          break
        case 'select':
          ;(t = r.value), t != null && An(e, !!r.multiple, t, !1)
      }
    }
    Uu = xm
    hd = function (e, t, r, n, i) {
      var o = G
      G |= 4
      try {
        return fn(98, e.bind(null, t, r, n, i))
      } finally {
        ;(G = o), G === 0 && (ai(), Wt())
      }
    }
    zu = function () {
      ;(G & 49) == 0 && (Wy(), jr())
    }
    vd = function (e, t) {
      var r = G
      G |= 2
      try {
        return e(t)
      } finally {
        ;(G = r), G === 0 && (ai(), Wt())
      }
    }
    function Rm(e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!Po(t)) throw Error(L(200))
      return t0(e, t, null, r)
    }
    var i0 = { Events: [so, Kn, Ia, pd, md, jr, { current: !1 }] },
      Co = { findFiberByHostInstance: sn, bundleType: 0, version: '17.0.2', rendererPackageName: 'react-dom' },
      o0 = {
        bundleType: Co.bundleType,
        version: Co.version,
        rendererPackageName: Co.rendererPackageName,
        rendererConfig: Co.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: rn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return (e = _d(e)), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Co.findFiberByHostInstance || r0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
      }
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined' &&
      ((Io = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Io.isDisabled && Io.supportsFiber)
    )
      try {
        ;(wl = Io.inject(o0)), (ln = Io)
      } catch (e) {}
    var Io
    Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i0
    Ot.createPortal = Rm
    Ot.findDOMNode = function (e) {
      if (e == null) return null
      if (e.nodeType === 1) return e
      var t = e._reactInternals
      if (t === void 0) throw typeof e.render == 'function' ? Error(L(188)) : Error(L(268, Object.keys(e)))
      return (e = _d(t)), (e = e === null ? null : e.stateNode), e
    }
    Ot.flushSync = function (e, t) {
      var r = G
      if ((r & 48) != 0) return e(t)
      G |= 1
      try {
        if (e) return fn(99, e.bind(null, t))
      } finally {
        ;(G = r), Wt()
      }
    }
    Ot.hydrate = function (e, t, r) {
      if (!Po(t)) throw Error(L(200))
      return ss(null, e, t, !0, r)
    }
    Ot.render = function (e, t, r) {
      if (!Po(t)) throw Error(L(200))
      return ss(null, e, t, !1, r)
    }
    Ot.unmountComponentAtNode = function (e) {
      if (!Po(e)) throw Error(L(40))
      return e._reactRootContainer
        ? (Tm(function () {
            ss(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[Xn] = null)
            })
          }),
          !0)
        : !1
    }
    Ot.unstable_batchedUpdates = xm
    Ot.unstable_createPortal = function (e, t) {
      return Rm(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null)
    }
    Ot.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
      if (!Po(r)) throw Error(L(200))
      if (e == null || e._reactInternals === void 0) throw Error(L(38))
      return ss(e, t, r, !1, n)
    }
    Ot.version = '17.0.2'
  })
  var us = ct((uw, Fm) => {
    'use strict'
    function Lm() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lm)
        } catch (e) {
          console.error(e)
        }
    }
    Lm(), (Fm.exports = Nm())
  })
  var nh = ct((lw, fs) => {
    var Am, jm, Hm, Bm, Um, zm, Wm, qm, Vm, ls, gf, $m, Gm, fi, Ym, Xm, Km, Qm, Jm, Zm, eh, th, rh
    ;(function (e) {
      var t = typeof global == 'object' ? global : typeof self == 'object' ? self : typeof this == 'object' ? this : {}
      typeof define == 'function' && define.amd
        ? define('tslib', ['exports'], function (n) {
            e(r(t, r(n)))
          })
        : typeof fs == 'object' && typeof fs.exports == 'object'
        ? e(r(t, r(fs.exports)))
        : e(r(t))
      function r(n, i) {
        return (
          n !== t &&
            (typeof Object.create == 'function'
              ? Object.defineProperty(n, '__esModule', { value: !0 })
              : (n.__esModule = !0)),
          function (o, a) {
            return (n[o] = i ? i(o, a) : a)
          }
        )
      }
    })(function (e) {
      var t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n
          }) ||
        function (r, n) {
          for (var i in n) n.hasOwnProperty(i) && (r[i] = n[i])
        }
      ;(Am = function (r, n) {
        t(r, n)
        function i() {
          this.constructor = r
        }
        r.prototype = n === null ? Object.create(n) : ((i.prototype = n.prototype), new i())
      }),
        (jm =
          Object.assign ||
          function (r) {
            for (var n, i = 1, o = arguments.length; i < o; i++) {
              n = arguments[i]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a])
            }
            return r
          }),
        (Hm = function (r, n) {
          var i = {}
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && n.indexOf(o) < 0 && (i[o] = r[o])
          if (r != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var a = 0, o = Object.getOwnPropertySymbols(r); a < o.length; a++)
              n.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, o[a]) && (i[o[a]] = r[o[a]])
          return i
        }),
        (Bm = function (r, n, i, o) {
          var a = arguments.length,
            s = a < 3 ? n : o === null ? (o = Object.getOwnPropertyDescriptor(n, i)) : o,
            u
          if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') s = Reflect.decorate(r, n, i, o)
          else
            for (var l = r.length - 1; l >= 0; l--)
              (u = r[l]) && (s = (a < 3 ? u(s) : a > 3 ? u(n, i, s) : u(n, i)) || s)
          return a > 3 && s && Object.defineProperty(n, i, s), s
        }),
        (Um = function (r, n) {
          return function (i, o) {
            n(i, o, r)
          }
        }),
        (zm = function (r, n) {
          if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function') return Reflect.metadata(r, n)
        }),
        (Wm = function (r, n, i, o) {
          function a(s) {
            return s instanceof i
              ? s
              : new i(function (u) {
                  u(s)
                })
          }
          return new (i || (i = Promise))(function (s, u) {
            function l(h) {
              try {
                m(o.next(h))
              } catch (_) {
                u(_)
              }
            }
            function c(h) {
              try {
                m(o.throw(h))
              } catch (_) {
                u(_)
              }
            }
            function m(h) {
              h.done ? s(h.value) : a(h.value).then(l, c)
            }
            m((o = o.apply(r, n || [])).next())
          })
        }),
        (qm = function (r, n) {
          var i = {
              label: 0,
              sent: function () {
                if (s[0] & 1) throw s[1]
                return s[1]
              },
              trys: [],
              ops: [],
            },
            o,
            a,
            s,
            u
          return (
            (u = { next: l(0), throw: l(1), return: l(2) }),
            typeof Symbol == 'function' &&
              (u[Symbol.iterator] = function () {
                return this
              }),
            u
          )
          function l(m) {
            return function (h) {
              return c([m, h])
            }
          }
          function c(m) {
            if (o) throw new TypeError('Generator is already executing.')
            for (; i; )
              try {
                if (
                  ((o = 1),
                  a &&
                    (s = m[0] & 2 ? a.return : m[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) &&
                    !(s = s.call(a, m[1])).done)
                )
                  return s
                switch (((a = 0), s && (m = [m[0] & 2, s.value]), m[0])) {
                  case 0:
                  case 1:
                    s = m
                    break
                  case 4:
                    return i.label++, { value: m[1], done: !1 }
                  case 5:
                    i.label++, (a = m[1]), (m = [0])
                    continue
                  case 7:
                    ;(m = i.ops.pop()), i.trys.pop()
                    continue
                  default:
                    if (((s = i.trys), !(s = s.length > 0 && s[s.length - 1]) && (m[0] === 6 || m[0] === 2))) {
                      i = 0
                      continue
                    }
                    if (m[0] === 3 && (!s || (m[1] > s[0] && m[1] < s[3]))) {
                      i.label = m[1]
                      break
                    }
                    if (m[0] === 6 && i.label < s[1]) {
                      ;(i.label = s[1]), (s = m)
                      break
                    }
                    if (s && i.label < s[2]) {
                      ;(i.label = s[2]), i.ops.push(m)
                      break
                    }
                    s[2] && i.ops.pop(), i.trys.pop()
                    continue
                }
                m = n.call(r, i)
              } catch (h) {
                ;(m = [6, h]), (a = 0)
              } finally {
                o = s = 0
              }
            if (m[0] & 5) throw m[1]
            return { value: m[0] ? m[1] : void 0, done: !0 }
          }
        }),
        (rh = function (r, n, i, o) {
          o === void 0 && (o = i), (r[o] = n[i])
        }),
        (Vm = function (r, n) {
          for (var i in r) i !== 'default' && !n.hasOwnProperty(i) && (n[i] = r[i])
        }),
        (ls = function (r) {
          var n = typeof Symbol == 'function' && Symbol.iterator,
            i = n && r[n],
            o = 0
          if (i) return i.call(r)
          if (r && typeof r.length == 'number')
            return {
              next: function () {
                return r && o >= r.length && (r = void 0), { value: r && r[o++], done: !r }
              },
            }
          throw new TypeError(n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
        }),
        (gf = function (r, n) {
          var i = typeof Symbol == 'function' && r[Symbol.iterator]
          if (!i) return r
          var o = i.call(r),
            a,
            s = [],
            u
          try {
            for (; (n === void 0 || n-- > 0) && !(a = o.next()).done; ) s.push(a.value)
          } catch (l) {
            u = { error: l }
          } finally {
            try {
              a && !a.done && (i = o.return) && i.call(o)
            } finally {
              if (u) throw u.error
            }
          }
          return s
        }),
        ($m = function () {
          for (var r = [], n = 0; n < arguments.length; n++) r = r.concat(gf(arguments[n]))
          return r
        }),
        (Gm = function () {
          for (var r = 0, n = 0, i = arguments.length; n < i; n++) r += arguments[n].length
          for (var o = Array(r), a = 0, n = 0; n < i; n++)
            for (var s = arguments[n], u = 0, l = s.length; u < l; u++, a++) o[a] = s[u]
          return o
        }),
        (fi = function (r) {
          return this instanceof fi ? ((this.v = r), this) : new fi(r)
        }),
        (Ym = function (r, n, i) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
          var o = i.apply(r, n || []),
            a,
            s = []
          return (
            (a = {}),
            u('next'),
            u('throw'),
            u('return'),
            (a[Symbol.asyncIterator] = function () {
              return this
            }),
            a
          )
          function u(S) {
            o[S] &&
              (a[S] = function (x) {
                return new Promise(function (p, d) {
                  s.push([S, x, p, d]) > 1 || l(S, x)
                })
              })
          }
          function l(S, x) {
            try {
              c(o[S](x))
            } catch (p) {
              _(s[0][3], p)
            }
          }
          function c(S) {
            S.value instanceof fi ? Promise.resolve(S.value.v).then(m, h) : _(s[0][2], S)
          }
          function m(S) {
            l('next', S)
          }
          function h(S) {
            l('throw', S)
          }
          function _(S, x) {
            S(x), s.shift(), s.length && l(s[0][0], s[0][1])
          }
        }),
        (Xm = function (r) {
          var n, i
          return (
            (n = {}),
            o('next'),
            o('throw', function (a) {
              throw a
            }),
            o('return'),
            (n[Symbol.iterator] = function () {
              return this
            }),
            n
          )
          function o(a, s) {
            n[a] = r[a]
              ? function (u) {
                  return (i = !i) ? { value: fi(r[a](u)), done: a === 'return' } : s ? s(u) : u
                }
              : s
          }
        }),
        (Km = function (r) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
          var n = r[Symbol.asyncIterator],
            i
          return n
            ? n.call(r)
            : ((r = typeof ls == 'function' ? ls(r) : r[Symbol.iterator]()),
              (i = {}),
              o('next'),
              o('throw'),
              o('return'),
              (i[Symbol.asyncIterator] = function () {
                return this
              }),
              i)
          function o(s) {
            i[s] =
              r[s] &&
              function (u) {
                return new Promise(function (l, c) {
                  ;(u = r[s](u)), a(l, c, u.done, u.value)
                })
              }
          }
          function a(s, u, l, c) {
            Promise.resolve(c).then(function (m) {
              s({ value: m, done: l })
            }, u)
          }
        }),
        (Qm = function (r, n) {
          return Object.defineProperty ? Object.defineProperty(r, 'raw', { value: n }) : (r.raw = n), r
        }),
        (Jm = function (r) {
          if (r && r.__esModule) return r
          var n = {}
          if (r != null) for (var i in r) Object.hasOwnProperty.call(r, i) && (n[i] = r[i])
          return (n.default = r), n
        }),
        (Zm = function (r) {
          return r && r.__esModule ? r : { default: r }
        }),
        (eh = function (r, n) {
          if (!n.has(r)) throw new TypeError('attempted to get private field on non-instance')
          return n.get(r)
        }),
        (th = function (r, n, i) {
          if (!n.has(r)) throw new TypeError('attempted to set private field on non-instance')
          return n.set(r, i), i
        }),
        e('__extends', Am),
        e('__assign', jm),
        e('__rest', Hm),
        e('__decorate', Bm),
        e('__param', Um),
        e('__metadata', zm),
        e('__awaiter', Wm),
        e('__generator', qm),
        e('__exportStar', Vm),
        e('__createBinding', rh),
        e('__values', ls),
        e('__read', gf),
        e('__spread', $m),
        e('__spreadArrays', Gm),
        e('__await', fi),
        e('__asyncGenerator', Ym),
        e('__asyncDelegator', Xm),
        e('__asyncValues', Km),
        e('__makeTemplateObject', Qm),
        e('__importStar', Jm),
        e('__importDefault', Zm),
        e('__classPrivateFieldGet', eh),
        e('__classPrivateFieldSet', th)
    })
  })
  var $h = ct((ae) => {
    'use strict'
    var Ae = typeof Symbol == 'function' && Symbol.for,
      Qf = Ae ? Symbol.for('react.element') : 60103,
      Jf = Ae ? Symbol.for('react.portal') : 60106,
      Cs = Ae ? Symbol.for('react.fragment') : 60107,
      Is = Ae ? Symbol.for('react.strict_mode') : 60108,
      Ms = Ae ? Symbol.for('react.profiler') : 60114,
      Ds = Ae ? Symbol.for('react.provider') : 60109,
      Rs = Ae ? Symbol.for('react.context') : 60110,
      Zf = Ae ? Symbol.for('react.async_mode') : 60111,
      Ns = Ae ? Symbol.for('react.concurrent_mode') : 60111,
      Ls = Ae ? Symbol.for('react.forward_ref') : 60112,
      Fs = Ae ? Symbol.for('react.suspense') : 60113,
      l_ = Ae ? Symbol.for('react.suspense_list') : 60120,
      As = Ae ? Symbol.for('react.memo') : 60115,
      js = Ae ? Symbol.for('react.lazy') : 60116,
      f_ = Ae ? Symbol.for('react.block') : 60121,
      c_ = Ae ? Symbol.for('react.fundamental') : 60117,
      d_ = Ae ? Symbol.for('react.responder') : 60118,
      p_ = Ae ? Symbol.for('react.scope') : 60119
    function ht(e) {
      if (typeof e == 'object' && e !== null) {
        var t = e.$$typeof
        switch (t) {
          case Qf:
            switch (((e = e.type), e)) {
              case Zf:
              case Ns:
              case Cs:
              case Ms:
              case Is:
              case Fs:
                return e
              default:
                switch (((e = e && e.$$typeof), e)) {
                  case Rs:
                  case Ls:
                  case js:
                  case As:
                  case Ds:
                    return e
                  default:
                    return t
                }
            }
          case Jf:
            return t
        }
      }
    }
    function Vh(e) {
      return ht(e) === Ns
    }
    ae.AsyncMode = Zf
    ae.ConcurrentMode = Ns
    ae.ContextConsumer = Rs
    ae.ContextProvider = Ds
    ae.Element = Qf
    ae.ForwardRef = Ls
    ae.Fragment = Cs
    ae.Lazy = js
    ae.Memo = As
    ae.Portal = Jf
    ae.Profiler = Ms
    ae.StrictMode = Is
    ae.Suspense = Fs
    ae.isAsyncMode = function (e) {
      return Vh(e) || ht(e) === Zf
    }
    ae.isConcurrentMode = Vh
    ae.isContextConsumer = function (e) {
      return ht(e) === Rs
    }
    ae.isContextProvider = function (e) {
      return ht(e) === Ds
    }
    ae.isElement = function (e) {
      return typeof e == 'object' && e !== null && e.$$typeof === Qf
    }
    ae.isForwardRef = function (e) {
      return ht(e) === Ls
    }
    ae.isFragment = function (e) {
      return ht(e) === Cs
    }
    ae.isLazy = function (e) {
      return ht(e) === js
    }
    ae.isMemo = function (e) {
      return ht(e) === As
    }
    ae.isPortal = function (e) {
      return ht(e) === Jf
    }
    ae.isProfiler = function (e) {
      return ht(e) === Ms
    }
    ae.isStrictMode = function (e) {
      return ht(e) === Is
    }
    ae.isSuspense = function (e) {
      return ht(e) === Fs
    }
    ae.isValidElementType = function (e) {
      return (
        typeof e == 'string' ||
        typeof e == 'function' ||
        e === Cs ||
        e === Ns ||
        e === Ms ||
        e === Is ||
        e === Fs ||
        e === l_ ||
        (typeof e == 'object' &&
          e !== null &&
          (e.$$typeof === js ||
            e.$$typeof === As ||
            e.$$typeof === Ds ||
            e.$$typeof === Rs ||
            e.$$typeof === Ls ||
            e.$$typeof === c_ ||
            e.$$typeof === d_ ||
            e.$$typeof === p_ ||
            e.$$typeof === f_))
      )
    }
    ae.typeOf = ht
  })
  var Yh = ct((Rx, Gh) => {
    'use strict'
    Gh.exports = $h()
  })
  var tv = ct((Nx, ev) => {
    'use strict'
    var ec = Yh(),
      m_ = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      h_ = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
      v_ = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
      Xh = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
      tc = {}
    tc[ec.ForwardRef] = v_
    tc[ec.Memo] = Xh
    function Kh(e) {
      return ec.isMemo(e) ? Xh : tc[e.$$typeof] || m_
    }
    var g_ = Object.defineProperty,
      y_ = Object.getOwnPropertyNames,
      Qh = Object.getOwnPropertySymbols,
      __ = Object.getOwnPropertyDescriptor,
      w_ = Object.getPrototypeOf,
      Jh = Object.prototype
    function Zh(e, t, r) {
      if (typeof t != 'string') {
        if (Jh) {
          var n = w_(t)
          n && n !== Jh && Zh(e, n, r)
        }
        var i = y_(t)
        Qh && (i = i.concat(Qh(t)))
        for (var o = Kh(e), a = Kh(t), s = 0; s < i.length; ++s) {
          var u = i[s]
          if (!h_[u] && !(r && r[u]) && !(a && a[u]) && !(o && o[u])) {
            var l = __(t, u)
            try {
              g_(e, u, l)
            } catch (c) {}
          }
        }
      }
      return e
    }
    ev.exports = Zh
  })
  var cc = ct((lc, fc) => {
    ;(function (e, t) {
      typeof lc == 'object' && typeof fc != 'undefined'
        ? (fc.exports = t())
        : typeof define == 'function' && define.amd
        ? define(t)
        : (e.Popper = t())
    })(lc, function () {
      'use strict'
      var e = typeof window != 'undefined' && typeof document != 'undefined' && typeof navigator != 'undefined',
        t = (function () {
          for (var f = ['Edge', 'Trident', 'Firefox'], g = 0; g < f.length; g += 1)
            if (e && navigator.userAgent.indexOf(f[g]) >= 0) return 1
          return 0
        })()
      function r(f) {
        var g = !1
        return function () {
          g ||
            ((g = !0),
            window.Promise.resolve().then(function () {
              ;(g = !1), f()
            }))
        }
      }
      function n(f) {
        var g = !1
        return function () {
          g ||
            ((g = !0),
            setTimeout(function () {
              ;(g = !1), f()
            }, t))
        }
      }
      var i = e && window.Promise,
        o = i ? r : n
      function a(f) {
        var g = {}
        return f && g.toString.call(f) === '[object Function]'
      }
      function s(f, g) {
        if (f.nodeType !== 1) return []
        var w = f.ownerDocument.defaultView,
          T = w.getComputedStyle(f, null)
        return g ? T[g] : T
      }
      function u(f) {
        return f.nodeName === 'HTML' ? f : f.parentNode || f.host
      }
      function l(f) {
        if (!f) return document.body
        switch (f.nodeName) {
          case 'HTML':
          case 'BODY':
            return f.ownerDocument.body
          case '#document':
            return f.body
        }
        var g = s(f),
          w = g.overflow,
          T = g.overflowX,
          I = g.overflowY
        return /(auto|scroll|overlay)/.test(w + I + T) ? f : l(u(f))
      }
      function c(f) {
        return f && f.referenceNode ? f.referenceNode : f
      }
      var m = e && !!(window.MSInputMethodContext && document.documentMode),
        h = e && /MSIE 10/.test(navigator.userAgent)
      function _(f) {
        return f === 11 ? m : f === 10 ? h : m || h
      }
      function S(f) {
        if (!f) return document.documentElement
        for (var g = _(10) ? document.body : null, w = f.offsetParent || null; w === g && f.nextElementSibling; )
          w = (f = f.nextElementSibling).offsetParent
        var T = w && w.nodeName
        return !T || T === 'BODY' || T === 'HTML'
          ? f
            ? f.ownerDocument.documentElement
            : document.documentElement
          : ['TH', 'TD', 'TABLE'].indexOf(w.nodeName) !== -1 && s(w, 'position') === 'static'
          ? S(w)
          : w
      }
      function x(f) {
        var g = f.nodeName
        return g === 'BODY' ? !1 : g === 'HTML' || S(f.firstElementChild) === f
      }
      function p(f) {
        return f.parentNode !== null ? p(f.parentNode) : f
      }
      function d(f, g) {
        if (!f || !f.nodeType || !g || !g.nodeType) return document.documentElement
        var w = f.compareDocumentPosition(g) & Node.DOCUMENT_POSITION_FOLLOWING,
          T = w ? f : g,
          I = w ? g : f,
          C = document.createRange()
        C.setStart(T, 0), C.setEnd(I, 0)
        var N = C.commonAncestorContainer
        if ((f !== N && g !== N) || T.contains(I)) return x(N) ? N : S(N)
        var F = p(f)
        return F.host ? d(F.host, g) : d(f, p(g).host)
      }
      function v(f) {
        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'top',
          w = g === 'top' ? 'scrollTop' : 'scrollLeft',
          T = f.nodeName
        if (T === 'BODY' || T === 'HTML') {
          var I = f.ownerDocument.documentElement,
            C = f.ownerDocument.scrollingElement || I
          return C[w]
        }
        return f[w]
      }
      function y(f, g) {
        var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
          T = v(g, 'top'),
          I = v(g, 'left'),
          C = w ? -1 : 1
        return (f.top += T * C), (f.bottom += T * C), (f.left += I * C), (f.right += I * C), f
      }
      function E(f, g) {
        var w = g === 'x' ? 'Left' : 'Top',
          T = w === 'Left' ? 'Right' : 'Bottom'
        return parseFloat(f['border' + w + 'Width']) + parseFloat(f['border' + T + 'Width'])
      }
      function D(f, g, w, T) {
        return Math.max(
          g['offset' + f],
          g['scroll' + f],
          w['client' + f],
          w['offset' + f],
          w['scroll' + f],
          _(10)
            ? parseInt(w['offset' + f]) +
                parseInt(T['margin' + (f === 'Height' ? 'Top' : 'Left')]) +
                parseInt(T['margin' + (f === 'Height' ? 'Bottom' : 'Right')])
            : 0
        )
      }
      function b(f) {
        var g = f.body,
          w = f.documentElement,
          T = _(10) && getComputedStyle(w)
        return { height: D('Height', g, w, T), width: D('Width', g, w, T) }
      }
      var P = function (f, g) {
          if (!(f instanceof g)) throw new TypeError('Cannot call a class as a function')
        },
        M = (function () {
          function f(g, w) {
            for (var T = 0; T < w.length; T++) {
              var I = w[T]
              ;(I.enumerable = I.enumerable || !1),
                (I.configurable = !0),
                'value' in I && (I.writable = !0),
                Object.defineProperty(g, I.key, I)
            }
          }
          return function (g, w, T) {
            return w && f(g.prototype, w), T && f(g, T), g
          }
        })(),
        O = function (f, g, w) {
          return (
            g in f
              ? Object.defineProperty(f, g, { value: w, enumerable: !0, configurable: !0, writable: !0 })
              : (f[g] = w),
            f
          )
        },
        A =
          Object.assign ||
          function (f) {
            for (var g = 1; g < arguments.length; g++) {
              var w = arguments[g]
              for (var T in w) Object.prototype.hasOwnProperty.call(w, T) && (f[T] = w[T])
            }
            return f
          }
      function z(f) {
        return A({}, f, { right: f.left + f.width, bottom: f.top + f.height })
      }
      function te(f) {
        var g = {}
        try {
          if (_(10)) {
            g = f.getBoundingClientRect()
            var w = v(f, 'top'),
              T = v(f, 'left')
            ;(g.top += w), (g.left += T), (g.bottom += w), (g.right += T)
          } else g = f.getBoundingClientRect()
        } catch (U) {}
        var I = { left: g.left, top: g.top, width: g.right - g.left, height: g.bottom - g.top },
          C = f.nodeName === 'HTML' ? b(f.ownerDocument) : {},
          N = C.width || f.clientWidth || I.width,
          F = C.height || f.clientHeight || I.height,
          H = f.offsetWidth - N,
          W = f.offsetHeight - F
        if (H || W) {
          var V = s(f)
          ;(H -= E(V, 'x')), (W -= E(V, 'y')), (I.width -= H), (I.height -= W)
        }
        return z(I)
      }
      function se(f, g) {
        var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
          T = _(10),
          I = g.nodeName === 'HTML',
          C = te(f),
          N = te(g),
          F = l(f),
          H = s(g),
          W = parseFloat(H.borderTopWidth),
          V = parseFloat(H.borderLeftWidth)
        w && I && ((N.top = Math.max(N.top, 0)), (N.left = Math.max(N.left, 0)))
        var U = z({ top: C.top - N.top - W, left: C.left - N.left - V, width: C.width, height: C.height })
        if (((U.marginTop = 0), (U.marginLeft = 0), !T && I)) {
          var Q = parseFloat(H.marginTop),
            X = parseFloat(H.marginLeft)
          ;(U.top -= W - Q),
            (U.bottom -= W - Q),
            (U.left -= V - X),
            (U.right -= V - X),
            (U.marginTop = Q),
            (U.marginLeft = X)
        }
        return (T && !w ? g.contains(F) : g === F && F.nodeName !== 'BODY') && (U = y(U, g)), U
      }
      function ce(f) {
        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          w = f.ownerDocument.documentElement,
          T = se(f, w),
          I = Math.max(w.clientWidth, window.innerWidth || 0),
          C = Math.max(w.clientHeight, window.innerHeight || 0),
          N = g ? 0 : v(w),
          F = g ? 0 : v(w, 'left'),
          H = { top: N - T.top + T.marginTop, left: F - T.left + T.marginLeft, width: I, height: C }
        return z(H)
      }
      function _e(f) {
        var g = f.nodeName
        if (g === 'BODY' || g === 'HTML') return !1
        if (s(f, 'position') === 'fixed') return !0
        var w = u(f)
        return w ? _e(w) : !1
      }
      function Oe(f) {
        if (!f || !f.parentElement || _()) return document.documentElement
        for (var g = f.parentElement; g && s(g, 'transform') === 'none'; ) g = g.parentElement
        return g || document.documentElement
      }
      function je(f, g, w, T) {
        var I = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
          C = { top: 0, left: 0 },
          N = I ? Oe(f) : d(f, c(g))
        if (T === 'viewport') C = ce(N, I)
        else {
          var F = void 0
          T === 'scrollParent'
            ? ((F = l(u(g))), F.nodeName === 'BODY' && (F = f.ownerDocument.documentElement))
            : T === 'window'
            ? (F = f.ownerDocument.documentElement)
            : (F = T)
          var H = se(F, N, I)
          if (F.nodeName === 'HTML' && !_e(N)) {
            var W = b(f.ownerDocument),
              V = W.height,
              U = W.width
            ;(C.top += H.top - H.marginTop),
              (C.bottom = V + H.top),
              (C.left += H.left - H.marginLeft),
              (C.right = U + H.left)
          } else C = H
        }
        w = w || 0
        var Q = typeof w == 'number'
        return (
          (C.left += Q ? w : w.left || 0),
          (C.top += Q ? w : w.top || 0),
          (C.right -= Q ? w : w.right || 0),
          (C.bottom -= Q ? w : w.bottom || 0),
          C
        )
      }
      function He(f) {
        var g = f.width,
          w = f.height
        return g * w
      }
      function Pt(f, g, w, T, I) {
        var C = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0
        if (f.indexOf('auto') === -1) return f
        var N = je(w, T, C, I),
          F = {
            top: { width: N.width, height: g.top - N.top },
            right: { width: N.right - g.right, height: N.height },
            bottom: { width: N.width, height: N.bottom - g.bottom },
            left: { width: g.left - N.left, height: N.height },
          },
          H = Object.keys(F)
            .map(function (Q) {
              return A({ key: Q }, F[Q], { area: He(F[Q]) })
            })
            .sort(function (Q, X) {
              return X.area - Q.area
            }),
          W = H.filter(function (Q) {
            var X = Q.width,
              J = Q.height
            return X >= w.clientWidth && J >= w.clientHeight
          }),
          V = W.length > 0 ? W[0].key : H[0].key,
          U = f.split('-')[1]
        return V + (U ? '-' + U : '')
      }
      function Be(f, g, w) {
        var T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
          I = T ? Oe(g) : d(g, c(w))
        return se(w, I, T)
      }
      function bn(f) {
        var g = f.ownerDocument.defaultView,
          w = g.getComputedStyle(f),
          T = parseFloat(w.marginTop || 0) + parseFloat(w.marginBottom || 0),
          I = parseFloat(w.marginLeft || 0) + parseFloat(w.marginRight || 0),
          C = { width: f.offsetWidth + I, height: f.offsetHeight + T }
        return C
      }
      function lt(f) {
        var g = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
        return f.replace(/left|right|bottom|top/g, function (w) {
          return g[w]
        })
      }
      function Ce(f, g, w) {
        w = w.split('-')[0]
        var T = bn(f),
          I = { width: T.width, height: T.height },
          C = ['right', 'left'].indexOf(w) !== -1,
          N = C ? 'top' : 'left',
          F = C ? 'left' : 'top',
          H = C ? 'height' : 'width',
          W = C ? 'width' : 'height'
        return (I[N] = g[N] + g[H] / 2 - T[H] / 2), w === F ? (I[F] = g[F] - T[W]) : (I[F] = g[lt(F)]), I
      }
      function gt(f, g) {
        return Array.prototype.find ? f.find(g) : f.filter(g)[0]
      }
      function Xr(f, g, w) {
        if (Array.prototype.findIndex)
          return f.findIndex(function (I) {
            return I[g] === w
          })
        var T = gt(f, function (I) {
          return I[g] === w
        })
        return f.indexOf(T)
      }
      function Ct(f, g, w) {
        var T = w === void 0 ? f : f.slice(0, Xr(f, 'name', w))
        return (
          T.forEach(function (I) {
            I.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!')
            var C = I.function || I.fn
            I.enabled &&
              a(C) &&
              ((g.offsets.popper = z(g.offsets.popper)), (g.offsets.reference = z(g.offsets.reference)), (g = C(g, I)))
          }),
          g
        )
      }
      function Pn() {
        if (!this.state.isDestroyed) {
          var f = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }
          ;(f.offsets.reference = Be(this.state, this.popper, this.reference, this.options.positionFixed)),
            (f.placement = Pt(
              this.options.placement,
              f.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding
            )),
            (f.originalPlacement = f.placement),
            (f.positionFixed = this.options.positionFixed),
            (f.offsets.popper = Ce(this.popper, f.offsets.reference, f.placement)),
            (f.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'),
            (f = Ct(this.modifiers, f)),
            this.state.isCreated ? this.options.onUpdate(f) : ((this.state.isCreated = !0), this.options.onCreate(f))
        }
      }
      function vr(f, g) {
        return f.some(function (w) {
          var T = w.name,
            I = w.enabled
          return I && T === g
        })
      }
      function Kr(f) {
        for (
          var g = [!1, 'ms', 'Webkit', 'Moz', 'O'], w = f.charAt(0).toUpperCase() + f.slice(1), T = 0;
          T < g.length;
          T++
        ) {
          var I = g[T],
            C = I ? '' + I + w : f
          if (typeof document.body.style[C] != 'undefined') return C
        }
        return null
      }
      function Oi() {
        return (
          (this.state.isDestroyed = !0),
          vr(this.modifiers, 'applyStyle') &&
            (this.popper.removeAttribute('x-placement'),
            (this.popper.style.position = ''),
            (this.popper.style.top = ''),
            (this.popper.style.left = ''),
            (this.popper.style.right = ''),
            (this.popper.style.bottom = ''),
            (this.popper.style.willChange = ''),
            (this.popper.style[Kr('transform')] = '')),
          this.disableEventListeners(),
          this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
          this
        )
      }
      function Cn(f) {
        var g = f.ownerDocument
        return g ? g.defaultView : window
      }
      function In(f, g, w, T) {
        var I = f.nodeName === 'BODY',
          C = I ? f.ownerDocument.defaultView : f
        C.addEventListener(g, w, { passive: !0 }), I || In(l(C.parentNode), g, w, T), T.push(C)
      }
      function we(f, g, w, T) {
        ;(w.updateBound = T), Cn(f).addEventListener('resize', w.updateBound, { passive: !0 })
        var I = l(f)
        return In(I, 'scroll', w.updateBound, w.scrollParents), (w.scrollElement = I), (w.eventsEnabled = !0), w
      }
      function Ks() {
        this.state.eventsEnabled || (this.state = we(this.reference, this.options, this.state, this.scheduleUpdate))
      }
      function Qs(f, g) {
        return (
          Cn(f).removeEventListener('resize', g.updateBound),
          g.scrollParents.forEach(function (w) {
            w.removeEventListener('scroll', g.updateBound)
          }),
          (g.updateBound = null),
          (g.scrollParents = []),
          (g.scrollElement = null),
          (g.eventsEnabled = !1),
          g
        )
      }
      function Js() {
        this.state.eventsEnabled &&
          (cancelAnimationFrame(this.scheduleUpdate), (this.state = Qs(this.reference, this.state)))
      }
      function tr(f) {
        return f !== '' && !isNaN(parseFloat(f)) && isFinite(f)
      }
      function ue(f, g) {
        Object.keys(g).forEach(function (w) {
          var T = ''
          ;['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(w) !== -1 && tr(g[w]) && (T = 'px'),
            (f.style[w] = g[w] + T)
        })
      }
      function ie(f, g) {
        Object.keys(g).forEach(function (w) {
          var T = g[w]
          T !== !1 ? f.setAttribute(w, g[w]) : f.removeAttribute(w)
        })
      }
      function j(f) {
        return (
          ue(f.instance.popper, f.styles),
          ie(f.instance.popper, f.attributes),
          f.arrowElement && Object.keys(f.arrowStyles).length && ue(f.arrowElement, f.arrowStyles),
          f
        )
      }
      function K(f, g, w, T, I) {
        var C = Be(I, g, f, w.positionFixed),
          N = Pt(w.placement, C, g, f, w.modifiers.flip.boundariesElement, w.modifiers.flip.padding)
        return g.setAttribute('x-placement', N), ue(g, { position: w.positionFixed ? 'fixed' : 'absolute' }), w
      }
      function me(f, g) {
        var w = f.offsets,
          T = w.popper,
          I = w.reference,
          C = Math.round,
          N = Math.floor,
          F = function (_r) {
            return _r
          },
          H = C(I.width),
          W = C(T.width),
          V = ['left', 'right'].indexOf(f.placement) !== -1,
          U = f.placement.indexOf('-') !== -1,
          Q = H % 2 == W % 2,
          X = H % 2 == 1 && W % 2 == 1,
          J = g ? (V || U || Q ? C : N) : F,
          Se = g ? C : F
        return { left: J(X && !U && g ? T.left - 1 : T.left), top: Se(T.top), bottom: Se(T.bottom), right: J(T.right) }
      }
      var $ = e && /Firefox/i.test(navigator.userAgent)
      function le(f, g) {
        var w = g.x,
          T = g.y,
          I = f.offsets.popper,
          C = gt(f.instance.modifiers, function (Zr) {
            return Zr.name === 'applyStyle'
          }).gpuAcceleration
        C !== void 0 &&
          console.warn(
            'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
          )
        var N = C !== void 0 ? C : g.gpuAcceleration,
          F = S(f.instance.popper),
          H = te(F),
          W = { position: I.position },
          V = me(f, window.devicePixelRatio < 2 || !$),
          U = w === 'bottom' ? 'top' : 'bottom',
          Q = T === 'right' ? 'left' : 'right',
          X = Kr('transform'),
          J = void 0,
          Se = void 0
        if (
          (U === 'bottom'
            ? F.nodeName === 'HTML'
              ? (Se = -F.clientHeight + V.bottom)
              : (Se = -H.height + V.bottom)
            : (Se = V.top),
          Q === 'right'
            ? F.nodeName === 'HTML'
              ? (J = -F.clientWidth + V.right)
              : (J = -H.width + V.right)
            : (J = V.left),
          N && X)
        )
          (W[X] = 'translate3d(' + J + 'px, ' + Se + 'px, 0)'), (W[U] = 0), (W[Q] = 0), (W.willChange = 'transform')
        else {
          var rr = U === 'bottom' ? -1 : 1,
            _r = Q === 'right' ? -1 : 1
          ;(W[U] = Se * rr), (W[Q] = J * _r), (W.willChange = U + ', ' + Q)
        }
        var yt = { 'x-placement': f.placement }
        return (
          (f.attributes = A({}, yt, f.attributes)),
          (f.styles = A({}, W, f.styles)),
          (f.arrowStyles = A({}, f.offsets.arrow, f.arrowStyles)),
          f
        )
      }
      function he(f, g, w) {
        var T = gt(f, function (F) {
            var H = F.name
            return H === g
          }),
          I =
            !!T &&
            f.some(function (F) {
              return F.name === w && F.enabled && F.order < T.order
            })
        if (!I) {
          var C = '`' + g + '`',
            N = '`' + w + '`'
          console.warn(
            N + ' modifier is required by ' + C + ' modifier in order to work, be sure to include it before ' + C + '!'
          )
        }
        return I
      }
      function Le(f, g) {
        var w
        if (!he(f.instance.modifiers, 'arrow', 'keepTogether')) return f
        var T = g.element
        if (typeof T == 'string') {
          if (((T = f.instance.popper.querySelector(T)), !T)) return f
        } else if (!f.instance.popper.contains(T)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), f
        var I = f.placement.split('-')[0],
          C = f.offsets,
          N = C.popper,
          F = C.reference,
          H = ['left', 'right'].indexOf(I) !== -1,
          W = H ? 'height' : 'width',
          V = H ? 'Top' : 'Left',
          U = V.toLowerCase(),
          Q = H ? 'left' : 'top',
          X = H ? 'bottom' : 'right',
          J = bn(T)[W]
        F[X] - J < N[U] && (f.offsets.popper[U] -= N[U] - (F[X] - J)),
          F[U] + J > N[X] && (f.offsets.popper[U] += F[U] + J - N[X]),
          (f.offsets.popper = z(f.offsets.popper))
        var Se = F[U] + F[W] / 2 - J / 2,
          rr = s(f.instance.popper),
          _r = parseFloat(rr['margin' + V]),
          yt = parseFloat(rr['border' + V + 'Width']),
          Zr = Se - f.offsets.popper[U] - _r - yt
        return (
          (Zr = Math.max(Math.min(N[W] - J, Zr), 0)),
          (f.arrowElement = T),
          (f.offsets.arrow = ((w = {}), O(w, U, Math.round(Zr)), O(w, Q, ''), w)),
          f
        )
      }
      function ft(f) {
        return f === 'end' ? 'start' : f === 'start' ? 'end' : f
      }
      var Ue = [
          'auto-start',
          'auto',
          'auto-end',
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'bottom-end',
          'bottom',
          'bottom-start',
          'left-end',
          'left',
          'left-start',
        ],
        $e = Ue.slice(3)
      function It(f) {
        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          w = $e.indexOf(f),
          T = $e.slice(w + 1).concat($e.slice(0, w))
        return g ? T.reverse() : T
      }
      var gr = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' }
      function bi(f, g) {
        if (vr(f.instance.modifiers, 'inner') || (f.flipped && f.placement === f.originalPlacement)) return f
        var w = je(f.instance.popper, f.instance.reference, g.padding, g.boundariesElement, f.positionFixed),
          T = f.placement.split('-')[0],
          I = lt(T),
          C = f.placement.split('-')[1] || '',
          N = []
        switch (g.behavior) {
          case gr.FLIP:
            N = [T, I]
            break
          case gr.CLOCKWISE:
            N = It(T)
            break
          case gr.COUNTERCLOCKWISE:
            N = It(T, !0)
            break
          default:
            N = g.behavior
        }
        return (
          N.forEach(function (F, H) {
            if (T !== F || N.length === H + 1) return f
            ;(T = f.placement.split('-')[0]), (I = lt(T))
            var W = f.offsets.popper,
              V = f.offsets.reference,
              U = Math.floor,
              Q =
                (T === 'left' && U(W.right) > U(V.left)) ||
                (T === 'right' && U(W.left) < U(V.right)) ||
                (T === 'top' && U(W.bottom) > U(V.top)) ||
                (T === 'bottom' && U(W.top) < U(V.bottom)),
              X = U(W.left) < U(w.left),
              J = U(W.right) > U(w.right),
              Se = U(W.top) < U(w.top),
              rr = U(W.bottom) > U(w.bottom),
              _r = (T === 'left' && X) || (T === 'right' && J) || (T === 'top' && Se) || (T === 'bottom' && rr),
              yt = ['top', 'bottom'].indexOf(T) !== -1,
              Zr =
                !!g.flipVariations &&
                ((yt && C === 'start' && X) ||
                  (yt && C === 'end' && J) ||
                  (!yt && C === 'start' && Se) ||
                  (!yt && C === 'end' && rr)),
              Vv =
                !!g.flipVariationsByContent &&
                ((yt && C === 'start' && J) ||
                  (yt && C === 'end' && X) ||
                  (!yt && C === 'start' && rr) ||
                  (!yt && C === 'end' && Se)),
              hc = Zr || Vv
            ;(Q || _r || hc) &&
              ((f.flipped = !0),
              (Q || _r) && (T = N[H + 1]),
              hc && (C = ft(C)),
              (f.placement = T + (C ? '-' + C : '')),
              (f.offsets.popper = A({}, f.offsets.popper, Ce(f.instance.popper, f.offsets.reference, f.placement))),
              (f = Ct(f.instance.modifiers, f, 'flip')))
          }),
          f
        )
      }
      function Pi(f) {
        var g = f.offsets,
          w = g.popper,
          T = g.reference,
          I = f.placement.split('-')[0],
          C = Math.floor,
          N = ['top', 'bottom'].indexOf(I) !== -1,
          F = N ? 'right' : 'bottom',
          H = N ? 'left' : 'top',
          W = N ? 'width' : 'height'
        return (
          w[F] < C(T[H]) && (f.offsets.popper[H] = C(T[H]) - w[W]), w[H] > C(T[F]) && (f.offsets.popper[H] = C(T[F])), f
        )
      }
      function $o(f, g, w, T) {
        var I = f.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
          C = +I[1],
          N = I[2]
        if (!C) return f
        if (N.indexOf('%') === 0) {
          var F = void 0
          switch (N) {
            case '%p':
              F = w
              break
            case '%':
            case '%r':
            default:
              F = T
          }
          var H = z(F)
          return (H[g] / 100) * C
        } else if (N === 'vh' || N === 'vw') {
          var W = void 0
          return (
            N === 'vh'
              ? (W = Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
              : (W = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)),
            (W / 100) * C
          )
        } else return C
      }
      function Qr(f, g, w, T) {
        var I = [0, 0],
          C = ['right', 'left'].indexOf(T) !== -1,
          N = f.split(/(\+|\-)/).map(function (V) {
            return V.trim()
          }),
          F = N.indexOf(
            gt(N, function (V) {
              return V.search(/,|\s/) !== -1
            })
          )
        N[F] &&
          N[F].indexOf(',') === -1 &&
          console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.')
        var H = /\s*,\s*|\s+/,
          W = F !== -1 ? [N.slice(0, F).concat([N[F].split(H)[0]]), [N[F].split(H)[1]].concat(N.slice(F + 1))] : [N]
        return (
          (W = W.map(function (V, U) {
            var Q = (U === 1 ? !C : C) ? 'height' : 'width',
              X = !1
            return V.reduce(function (J, Se) {
              return J[J.length - 1] === '' && ['+', '-'].indexOf(Se) !== -1
                ? ((J[J.length - 1] = Se), (X = !0), J)
                : X
                ? ((J[J.length - 1] += Se), (X = !1), J)
                : J.concat(Se)
            }, []).map(function (J) {
              return $o(J, Q, g, w)
            })
          })),
          W.forEach(function (V, U) {
            V.forEach(function (Q, X) {
              tr(Q) && (I[U] += Q * (V[X - 1] === '-' ? -1 : 1))
            })
          }),
          I
        )
      }
      function Ci(f, g) {
        var w = g.offset,
          T = f.placement,
          I = f.offsets,
          C = I.popper,
          N = I.reference,
          F = T.split('-')[0],
          H = void 0
        return (
          tr(+w) ? (H = [+w, 0]) : (H = Qr(w, C, N, F)),
          F === 'left'
            ? ((C.top += H[0]), (C.left -= H[1]))
            : F === 'right'
            ? ((C.top += H[0]), (C.left += H[1]))
            : F === 'top'
            ? ((C.left += H[0]), (C.top -= H[1]))
            : F === 'bottom' && ((C.left += H[0]), (C.top += H[1])),
          (f.popper = C),
          f
        )
      }
      function yr(f, g) {
        var w = g.boundariesElement || S(f.instance.popper)
        f.instance.reference === w && (w = S(w))
        var T = Kr('transform'),
          I = f.instance.popper.style,
          C = I.top,
          N = I.left,
          F = I[T]
        ;(I.top = ''), (I.left = ''), (I[T] = '')
        var H = je(f.instance.popper, f.instance.reference, g.padding, w, f.positionFixed)
        ;(I.top = C), (I.left = N), (I[T] = F), (g.boundaries = H)
        var W = g.priority,
          V = f.offsets.popper,
          U = {
            primary: function (X) {
              var J = V[X]
              return V[X] < H[X] && !g.escapeWithReference && (J = Math.max(V[X], H[X])), O({}, X, J)
            },
            secondary: function (X) {
              var J = X === 'right' ? 'left' : 'top',
                Se = V[J]
              return (
                V[X] > H[X] &&
                  !g.escapeWithReference &&
                  (Se = Math.min(V[J], H[X] - (X === 'right' ? V.width : V.height))),
                O({}, J, Se)
              )
            },
          }
        return (
          W.forEach(function (Q) {
            var X = ['left', 'top'].indexOf(Q) !== -1 ? 'primary' : 'secondary'
            V = A({}, V, U[X](Q))
          }),
          (f.offsets.popper = V),
          f
        )
      }
      function Jr(f) {
        var g = f.placement,
          w = g.split('-')[0],
          T = g.split('-')[1]
        if (T) {
          var I = f.offsets,
            C = I.reference,
            N = I.popper,
            F = ['bottom', 'top'].indexOf(w) !== -1,
            H = F ? 'left' : 'top',
            W = F ? 'width' : 'height',
            V = { start: O({}, H, C[H]), end: O({}, H, C[H] + C[W] - N[W]) }
          f.offsets.popper = A({}, N, V[T])
        }
        return f
      }
      function Je(f) {
        if (!he(f.instance.modifiers, 'hide', 'preventOverflow')) return f
        var g = f.offsets.reference,
          w = gt(f.instance.modifiers, function (T) {
            return T.name === 'preventOverflow'
          }).boundaries
        if (g.bottom < w.top || g.left > w.right || g.top > w.bottom || g.right < w.left) {
          if (f.hide === !0) return f
          ;(f.hide = !0), (f.attributes['x-out-of-boundaries'] = '')
        } else {
          if (f.hide === !1) return f
          ;(f.hide = !1), (f.attributes['x-out-of-boundaries'] = !1)
        }
        return f
      }
      function zv(f) {
        var g = f.placement,
          w = g.split('-')[0],
          T = f.offsets,
          I = T.popper,
          C = T.reference,
          N = ['left', 'right'].indexOf(w) !== -1,
          F = ['top', 'left'].indexOf(w) === -1
        return (
          (I[N ? 'left' : 'top'] = C[w] - (F ? I[N ? 'width' : 'height'] : 0)),
          (f.placement = lt(g)),
          (f.offsets.popper = z(I)),
          f
        )
      }
      var Wv = {
          shift: { order: 100, enabled: !0, fn: Jr },
          offset: { order: 200, enabled: !0, fn: Ci, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: yr,
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent',
          },
          keepTogether: { order: 400, enabled: !0, fn: Pi },
          arrow: { order: 500, enabled: !0, fn: Le, element: '[x-arrow]' },
          flip: {
            order: 600,
            enabled: !0,
            fn: bi,
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: { order: 700, enabled: !1, fn: zv },
          hide: { order: 800, enabled: !0, fn: Je },
          computeStyle: { order: 850, enabled: !0, fn: le, gpuAcceleration: !0, x: 'bottom', y: 'right' },
          applyStyle: { order: 900, enabled: !0, fn: j, onLoad: K, gpuAcceleration: void 0 },
        },
        qv = {
          placement: 'bottom',
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: Wv,
        },
        Go = (function () {
          function f(g, w) {
            var T = this,
              I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
            P(this, f),
              (this.scheduleUpdate = function () {
                return requestAnimationFrame(T.update)
              }),
              (this.update = o(this.update.bind(this))),
              (this.options = A({}, f.Defaults, I)),
              (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
              (this.reference = g && g.jquery ? g[0] : g),
              (this.popper = w && w.jquery ? w[0] : w),
              (this.options.modifiers = {}),
              Object.keys(A({}, f.Defaults.modifiers, I.modifiers)).forEach(function (N) {
                T.options.modifiers[N] = A({}, f.Defaults.modifiers[N] || {}, I.modifiers ? I.modifiers[N] : {})
              }),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function (N) {
                  return A({ name: N }, T.options.modifiers[N])
                })
                .sort(function (N, F) {
                  return N.order - F.order
                })),
              this.modifiers.forEach(function (N) {
                N.enabled && a(N.onLoad) && N.onLoad(T.reference, T.popper, T.options, N, T.state)
              }),
              this.update()
            var C = this.options.eventsEnabled
            C && this.enableEventListeners(), (this.state.eventsEnabled = C)
          }
          return (
            M(f, [
              {
                key: 'update',
                value: function () {
                  return Pn.call(this)
                },
              },
              {
                key: 'destroy',
                value: function () {
                  return Oi.call(this)
                },
              },
              {
                key: 'enableEventListeners',
                value: function () {
                  return Ks.call(this)
                },
              },
              {
                key: 'disableEventListeners',
                value: function () {
                  return Js.call(this)
                },
              },
            ]),
            f
          )
        })()
      return (
        (Go.Utils = (typeof window != 'undefined' ? window : global).PopperUtils),
        (Go.placements = Ue),
        (Go.Defaults = qv),
        Go
      )
    })
  })
  var Fv = ct((qo, dc) => {
    ;(function (t, r) {
      typeof qo == 'object' && typeof dc == 'object'
        ? (dc.exports = r(et(), cc(), us()))
        : typeof define == 'function' && define.amd
        ? define('reactTippy', ['react', 'popper.js', 'react-dom'], r)
        : typeof qo == 'object'
        ? (qo.reactTippy = r(et(), cc(), us()))
        : (t.reactTippy = r(t.React, t.Popper, t.ReactDOM))
    })(qo, function (e, t, r) {
      return (function (n) {
        var i = {}
        function o(a) {
          if (i[a]) return i[a].exports
          var s = (i[a] = { i: a, l: !1, exports: {} })
          return n[a].call(s.exports, s, s.exports, o), (s.l = !0), s.exports
        }
        return (
          (o.m = n),
          (o.c = i),
          (o.i = function (a) {
            return a
          }),
          (o.d = function (a, s, u) {
            o.o(a, s) || Object.defineProperty(a, s, { configurable: !1, enumerable: !0, get: u })
          }),
          (o.n = function (a) {
            var s =
              a && a.__esModule
                ? function () {
                    return a.default
                  }
                : function () {
                    return a
                  }
            return o.d(s, 'a', s), s
          }),
          (o.o = function (a, s) {
            return Object.prototype.hasOwnProperty.call(a, s)
          }),
          (o.p = ''),
          o((o.s = 15))
        )
      })([
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 })
          var a = (i.Browser = {})
          typeof window != 'undefined' &&
            ((a.SUPPORTED = 'requestAnimationFrame' in window),
            (a.SUPPORTS_TOUCH = 'ontouchstart' in window),
            (a.touch = !1),
            (a.dynamicInputDetection = !0),
            (a.iOS = function () {
              return /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream
            }))
          var s = (i.Store = []),
            u = (i.Selectors = {
              POPPER: '.tippy-popper',
              TOOLTIP: '.tippy-tooltip',
              CONTENT: '.tippy-tooltip-content',
              CIRCLE: '[x-circle]',
              ARROW: '[x-arrow]',
              TOOLTIPPED_EL: '[data-tooltipped]',
              CONTROLLER: '[data-tippy-controller]',
            }),
            l = (i.Defaults = {
              html: !1,
              position: 'top',
              animation: 'shift',
              animateFill: !0,
              arrow: !1,
              arrowSize: 'regular',
              delay: 0,
              trigger: 'mouseenter focus',
              duration: 350,
              interactive: !1,
              interactiveBorder: 2,
              theme: 'dark',
              size: 'regular',
              distance: 10,
              offset: 0,
              hideOnClick: !0,
              multiple: !1,
              followCursor: !1,
              inertia: !1,
              flipDuration: 350,
              sticky: !1,
              stickyDuration: 200,
              appendTo: function () {
                return document.body
              },
              zIndex: 9999,
              touchHold: !1,
              performance: !1,
              dynamicTitle: !1,
              useContext: !1,
              reactInstance: void 0,
              popperOptions: {},
              open: void 0,
              onRequestClose: function () {},
            }),
            c = (i.DefaultsKeys = a.SUPPORTED && Object.keys(l))
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s) {
            for (var u = [!1, 'webkit'], l = s.charAt(0).toUpperCase() + s.slice(1), c = 0; c < u.length; c++) {
              var m = u[c],
                h = m ? '' + m + l : s
              if (typeof window.document.body.style[h] != 'undefined') return h
            }
            return null
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s, u) {
            return Array.prototype.find ? s.find(u) : s.filter(u)[0]
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s) {
            return s.replace(/-.+/, '')
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = s)
          var a = o(8)
          function s(u, l) {
            var c =
              Element.prototype.closest ||
              function (m) {
                for (var h = this; h; ) {
                  if (a.matches.call(h, m)) return h
                  h = h.parentElement
                }
              }
            return c.call(u, l)
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s) {
            window.requestAnimationFrame(function () {
              setTimeout(s, 0)
            })
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = s)
          var a = o(0)
          function s(u) {
            return {
              tooltip: u.querySelector(a.Selectors.TOOLTIP),
              circle: u.querySelector(a.Selectors.CIRCLE),
              content: u.querySelector(a.Selectors.CONTENT),
            }
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s) {
            return s.style.visibility === 'visible'
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 })
          function a(u) {
            for (
              var l = (this.document || this.ownerDocument).querySelectorAll(u), c = l.length;
              --c >= 0 && l.item(c) !== this;

            );
            return c > -1
          }
          var s = (i.matches =
            typeof window == 'undefined'
              ? a
              : Element.prototype.matches ||
                Element.prototype.matchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                a)
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 })
          var a =
              Object.assign ||
              function (b) {
                for (var P = 1; P < arguments.length; P++) {
                  var M = arguments[P]
                  for (var O in M) Object.prototype.hasOwnProperty.call(M, O) && (b[O] = M[O])
                }
                return b
              },
            s = (function () {
              function b(P, M) {
                for (var O = 0; O < M.length; O++) {
                  var A = M[O]
                  ;(A.enumerable = A.enumerable || !1),
                    (A.configurable = !0),
                    'value' in A && (A.writable = !0),
                    Object.defineProperty(P, A.key, A)
                }
              }
              return function (P, M, O) {
                return M && b(P.prototype, M), O && b(P, O), P
              }
            })(),
            u = o(13),
            l = _(u),
            c = o(30),
            m = _(c),
            h = o(0)
          function _(b) {
            return b && b.__esModule ? b : { default: b }
          }
          function S(b, P) {
            if (!(b instanceof P)) throw new TypeError('Cannot call a class as a function')
          }
          function x(b, P) {
            if (!b) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return P && (typeof P == 'object' || typeof P == 'function') ? P : b
          }
          function p(b, P) {
            if (typeof P != 'function' && P !== null)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof P)
            ;(b.prototype = Object.create(P && P.prototype, {
              constructor: { value: b, enumerable: !1, writable: !0, configurable: !0 },
            })),
              P && (Object.setPrototypeOf ? Object.setPrototypeOf(b, P) : (b.__proto__ = P))
          }
          var d = function (P) {
              return P.stopPropagation()
            },
            v = {
              html: null,
              position: 'top',
              animation: 'shift',
              animateFill: !0,
              arrow: !1,
              delay: 0,
              hideDelay: 0,
              trigger: 'mouseenter focus',
              duration: 375,
              hideDuration: 375,
              interactive: !1,
              interactiveBorder: 2,
              theme: 'dark',
              offset: 0,
              hideOnClick: !0,
              multiple: !1,
              followCursor: !1,
              inertia: !1,
              popperOptions: {},
              onShow: function () {},
              onShown: function () {},
              onHide: function () {},
              onHidden: function () {},
              disabled: !1,
              arrowSize: 'regular',
              size: 'regular',
              className: '',
              style: {},
              distance: 10,
              onRequestClose: function () {},
              sticky: !1,
              stickyDuration: 200,
              tag: 'div',
              touchHold: !1,
              unmountHTMLWhenHide: !1,
              zIndex: 9999,
            },
            y = Object.keys(v),
            E = function (P, M) {
              var O = []
              return (
                y.forEach(function (A) {
                  P[A] !== M[A] && O.push(A)
                }),
                O
              )
            },
            D = (function (b) {
              p(P, b)
              function P(M) {
                S(this, P)
                var O = x(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, M))
                return (
                  (O.initTippy = O._initTippy.bind(O)),
                  (O.destroyTippy = O._destroyTippy.bind(O)),
                  (O.updateTippy = O._updateTippy.bind(O)),
                  (O.updateReactDom = O._updateReactDom.bind(O)),
                  (O.showTooltip = O._showTooltip.bind(O)),
                  (O.hideTooltip = O._hideTooltip.bind(O)),
                  (O.updateSettings = O._updateSettings.bind(O)),
                  (O.state = { reactDOMValue: null }),
                  O
                )
              }
              return (
                s(P, [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      typeof window == 'undefined' || typeof document == 'undefined' || this.initTippy()
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      typeof window == 'undefined' || typeof document == 'undefined' || this.destroyTippy()
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function (O) {
                      var A = this
                      if (!(typeof window == 'undefined' || typeof document == 'undefined')) {
                        if (this.props.disabled === !1 && O.disabled === !0) {
                          this.updateSettings('disabled', !1), this.destroyTippy(), this.initTippy()
                          return
                        }
                        if (this.props.disabled === !0 && O.disabled === !1) {
                          this.updateSettings('disabled', !0), this.destroyTippy()
                          return
                        }
                        this.props.open === !0 &&
                          !O.open &&
                          (this.updateSettings('open', !0),
                          setTimeout(function () {
                            A.showTooltip()
                          }, 0)),
                          this.props.open === !1 &&
                            O.open === !0 &&
                            (this.updateSettings('open', !1), this.hideTooltip()),
                          this.props.html !== O.html && this.updateReactDom(),
                          this.props.title !== O.title && this.updateTippy()
                        var z = E(this.props, O)
                        z.forEach(function (te) {
                          A.updateSettings(te, A.props[te])
                        })
                      }
                    },
                  },
                  {
                    key: '_showTooltip',
                    value: function () {
                      if (!(typeof window == 'undefined' || typeof document == 'undefined') && this.tippy) {
                        var O = this.tippy.getPopperElement(this.tooltipDOM)
                        this.tippy.show(O, this.props.duration)
                      }
                    },
                  },
                  {
                    key: '_hideTooltip',
                    value: function () {
                      if (!(typeof window == 'undefined' || typeof document == 'undefined') && this.tippy) {
                        var O = this.tippy.getPopperElement(this.tooltipDOM)
                        this.tippy.hide(O, this.props.hideDuration)
                      }
                    },
                  },
                  {
                    key: '_updateSettings',
                    value: function (O, A) {
                      if (!(typeof window == 'undefined' || typeof document == 'undefined') && this.tippy) {
                        var z = this.tippy.getPopperElement(this.tooltipDOM)
                        this.tippy.updateSettings(z, O, A)
                      }
                    },
                  },
                  {
                    key: '_updateReactDom',
                    value: function () {
                      if (!(typeof window == 'undefined' || typeof document == 'undefined') && this.tippy) {
                        this.updateSettings('reactDOM', this.props.html)
                        var O = this.tippy.getPopperElement(this.tooltipDOM),
                          A = O.style.visibility === 'visible' || this.props.open
                        A && this.tippy.updateForReact(O, this.props.html)
                      }
                    },
                  },
                  {
                    key: '_updateTippy',
                    value: function () {
                      if (!(typeof window == 'undefined' || typeof document == 'undefined') && this.tippy) {
                        var O = this.tippy.getPopperElement(this.tooltipDOM)
                        this.tippy.update(O)
                      }
                    },
                  },
                  {
                    key: '_initTippy',
                    value: function () {
                      var O = this
                      typeof window == 'undefined' ||
                        typeof document == 'undefined' ||
                        !h.Browser.SUPPORTED ||
                        (this.props.disabled
                          ? (this.tippy = null)
                          : (this.props.title && this.tooltipDOM.setAttribute('title', this.props.title),
                            (this.tippy = (0, m.default)(this.tooltipDOM, {
                              disabled: this.props.disabled,
                              position: this.props.position,
                              animation: this.props.animation,
                              animateFill: this.props.animateFill,
                              arrow: this.props.arrow,
                              arrowSize: this.props.arrowSize,
                              delay: this.props.delay,
                              hideDelay: this.props.hideDelay,
                              trigger: this.props.trigger,
                              duration: this.props.duration,
                              hideDuration: this.props.hideDuration,
                              interactive: this.props.interactive,
                              interactiveBorder: this.props.interactiveBorder,
                              theme: this.props.theme,
                              offset: this.props.offset,
                              hideOnClick: this.props.hideOnClick,
                              multiple: this.props.multiple,
                              size: this.props.size,
                              followCursor: this.props.followCursor,
                              inertia: this.props.inertia,
                              popperOptions: this.props.popperOptions,
                              onShow: this.props.onShow,
                              onShown: this.props.onShown,
                              onHide: this.props.onHide,
                              onHidden: this.props.onHidden,
                              distance: this.props.distance,
                              reactDOM: this.props.html,
                              setReactDOMValue: function (z) {
                                return O.setState({ reactDOMValue: z })
                              },
                              unmountHTMLWhenHide: this.props.unmountHTMLWhenHide,
                              open: this.props.open,
                              sticky: this.props.sticky,
                              stickyDuration: this.props.stickyDuration,
                              tag: this.props.tag,
                              touchHold: this.props.touchHold,
                              onRequestClose: this.props.onRequestClose,
                              useContext: this.props.useContext,
                              reactInstance: this.props.useContext ? this : void 0,
                              performance: !0,
                              html: this.props.rawTemplate ? this.props.rawTemplate : void 0,
                              zIndex: this.props.zIndex,
                            })),
                            this.props.open && this.showTooltip()))
                    },
                  },
                  {
                    key: '_destroyTippy',
                    value: function () {
                      if (!(typeof window == 'undefined' || typeof document == 'undefined') && this.tippy) {
                        var O = this.tippy.getPopperElement(this.tooltipDOM)
                        this.updateSettings('open', !1),
                          this.tippy.hide(O, 0),
                          this.tippy.destroy(O),
                          (this.tippy = null)
                      }
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var O = this,
                        A = this.props.tag
                      return l.default.createElement(
                        l.default.Fragment,
                        null,
                        l.default.createElement(
                          A,
                          {
                            ref: function (te) {
                              O.tooltipDOM = te
                            },
                            title: this.props.title,
                            className: this.props.className,
                            tabIndex: this.props.tabIndex,
                            style: a({ display: 'inline' }, this.props.style),
                          },
                          this.props.children
                        ),
                        this.state.reactDOMValue &&
                          l.default.createElement(
                            'div',
                            {
                              onClick: d,
                              onContextMenu: d,
                              onDoubleClick: d,
                              onDrag: d,
                              onDragEnd: d,
                              onDragEnter: d,
                              onDragExit: d,
                              onDragLeave: d,
                              onDragOver: d,
                              onDragStart: d,
                              onDrop: d,
                              onMouseDown: d,
                              onMouseEnter: d,
                              onMouseLeave: d,
                              onMouseMove: d,
                              onMouseOver: d,
                              onMouseOut: d,
                              onMouseUp: d,
                              onKeyDown: d,
                              onKeyPress: d,
                              onKeyUp: d,
                              onFocus: d,
                              onBlur: d,
                              onChange: d,
                              onInput: d,
                              onInvalid: d,
                              onSubmit: d,
                            },
                            this.state.reactDOMValue
                          )
                      )
                    },
                  },
                ]),
                P
              )
            })(u.Component)
          ;(D.defaultProps = v), (i.default = D)
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = p)
          var a = o(0),
            s = o(3),
            u = x(s),
            l = o(2),
            c = x(l),
            m = o(1),
            h = x(m),
            _ = o(4),
            S = x(_)
          function x(d) {
            return d && d.__esModule ? d : { default: d }
          }
          function p(d) {
            var v = this,
              y = (0, c.default)(a.Store, function (je) {
                return je.el === v
              })
            if (!!y) {
              var E = y.popper,
                D = y.settings.offset,
                b = (0, u.default)(E.getAttribute('x-placement')),
                P = Math.round(E.offsetWidth / 2),
                M = Math.round(E.offsetHeight / 2),
                O = 5,
                A = document.documentElement.offsetWidth || document.body.offsetWidth,
                z = d.pageX,
                te = d.pageY,
                se = void 0,
                ce = void 0
              switch (b) {
                case 'top':
                  ;(se = z - P + D), (ce = te - 2.25 * M)
                  break
                case 'left':
                  ;(se = z - 2 * P - 10), (ce = te - M + D)
                  break
                case 'right':
                  ;(se = z + M), (ce = te - M + D)
                  break
                case 'bottom':
                  ;(se = z - P + D), (ce = te + M / 1.5)
                  break
              }
              var _e = z + O + P + D > A,
                Oe = z - O - P + D < 0
              ;(b === 'top' || b === 'bottom') && (_e && (se = A - O - 2 * P), Oe && (se = O)),
                (E.style[(0, h.default)('transform')] = 'translate3d(' + se + 'px, ' + ce + 'px, 0)')
            }
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = s)
          var a = o(0)
          function s(u) {
            return -(u - a.Defaults.distance) + 'px'
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s) {
            var u = s.getAttribute('title')
            u && s.setAttribute('data-original-title', u), s.removeAttribute('title')
          }
        },
        function (n, i) {
          n.exports = e
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 })
          var a = o(13),
            s = c(a),
            u = o(9),
            l = c(u)
          function c(_) {
            return _ && _.__esModule ? _ : { default: _ }
          }
          function m(_, S) {
            var x = {}
            for (var p in _) S.indexOf(p) >= 0 || !Object.prototype.hasOwnProperty.call(_, p) || (x[p] = _[p])
            return x
          }
          var h = function (S) {
            var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
            return function (p) {
              var d = m(p, [])
              return s.default.createElement(l.default, x, s.default.createElement(S, d))
            }
          }
          i.default = h
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.withTooltip = i.Tooltip = void 0)
          var a = o(9),
            s = c(a),
            u = o(14),
            l = c(u)
          function c(m) {
            return m && m.__esModule ? m : { default: m }
          }
          ;(i.Tooltip = s.default), (i.withTooltip = l.default)
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = x)
          var a = o(0),
            s = o(25),
            u = S(s),
            l = o(4),
            c = S(l),
            m = o(2),
            h = S(m),
            _ = o(8)
          function S(p) {
            return p && p.__esModule ? p : { default: p }
          }
          function x() {
            var p = function () {
                ;(a.Browser.touch = !0),
                  a.Browser.iOS() && document.body.classList.add('tippy-touch'),
                  a.Browser.dynamicInputDetection && window.performance && document.addEventListener('mousemove', d)
              },
              d = (function () {
                var E = void 0
                return function () {
                  var D = performance.now()
                  D - E < 20 &&
                    ((a.Browser.touch = !1),
                    document.removeEventListener('mousemove', d),
                    a.Browser.iOS() || document.body.classList.remove('tippy-touch')),
                    (E = D)
                }
              })(),
              v = function (D) {
                if (!(D.target instanceof Element)) return (0, u.default)()
                var b = (0, c.default)(D.target, a.Selectors.TOOLTIPPED_EL),
                  P = (0, c.default)(D.target, a.Selectors.POPPER)
                if (P) {
                  var M = (0, h.default)(a.Store, function (_e) {
                    return _e.popper === P
                  })
                  if (!M) return
                  var O = M.settings.interactive
                  if (O) return
                }
                if (b) {
                  var A = (0, h.default)(a.Store, function (_e) {
                    return _e.el === b
                  })
                  if (!A) return
                  var z = A.settings,
                    te = z.hideOnClick,
                    se = z.multiple,
                    ce = z.trigger
                  if ((!se && a.Browser.touch) || (!se && ce.indexOf('click') !== -1)) return (0, u.default)(A)
                  if (te !== !0 || ce.indexOf('click') !== -1) return
                }
                ;(0, c.default)(D.target, a.Selectors.CONTROLLER) ||
                  !document.querySelector(a.Selectors.POPPER) ||
                  (0, u.default)()
              },
              y = function (D) {
                var b = document,
                  P = b.activeElement
                P && P.blur && _.matches.call(P, a.Selectors.TOOLTIPPED_EL) && P.blur()
              }
            document.addEventListener('click', v),
              document.addEventListener('touchstart', p),
              window.addEventListener('blur', y),
              !a.Browser.SUPPORTS_TOUCH &&
                (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) &&
                document.addEventListener('pointerdown', p)
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = m)
          var a = o(3),
            s = c(a),
            u = o(11),
            l = c(u)
          function c(h) {
            return h && h.__esModule ? h : { default: h }
          }
          function m(h, _, S) {
            var x = S.position,
              p = S.distance,
              d = S.arrow,
              v = S.animateFill,
              y = S.inertia,
              E = S.animation,
              D = S.arrowSize,
              b = S.size,
              P = S.theme,
              M = S.html,
              O = S.zIndex,
              A = S.interactive,
              z = document.createElement('div')
            z.setAttribute('class', 'tippy-popper'),
              z.setAttribute('role', 'tooltip'),
              z.setAttribute('aria-hidden', 'true'),
              z.setAttribute('id', 'tippy-tooltip-' + h),
              (z.style.zIndex = O)
            var te = document.createElement('div')
            if (
              (te.setAttribute('class', 'tippy-tooltip tippy-tooltip--' + b + ' leave'),
              te.setAttribute('data-animation', E),
              P.split(' ').forEach(function (je) {
                te.classList.add(je + '-theme')
              }),
              d)
            ) {
              var se = document.createElement('div')
              se.setAttribute('class', 'arrow-' + D), se.setAttribute('x-arrow', ''), te.appendChild(se)
            }
            if (v) {
              te.setAttribute('data-animatefill', '')
              var ce = document.createElement('div')
              ce.setAttribute('class', 'leave'), ce.setAttribute('x-circle', ''), te.appendChild(ce)
            }
            y && te.setAttribute('data-inertia', ''), A && te.setAttribute('data-interactive', '')
            var _e = document.createElement('div')
            if ((_e.setAttribute('class', 'tippy-tooltip-content'), M)) {
              var Oe = void 0
              M instanceof Element
                ? (_e.appendChild(M), (Oe = '#' + M.id || 'tippy-html-template'))
                : ((_e.innerHTML = document.getElementById(M.replace('#', '')).innerHTML), (Oe = M)),
                z.classList.add('html-template'),
                A && z.setAttribute('tabindex', '-1'),
                te.setAttribute('data-template-id', Oe)
            } else _e.innerHTML = _
            return (te.style[(0, s.default)(x)] = (0, l.default)(p)), te.appendChild(_e), z.appendChild(te), z
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 })
          var a =
            Object.assign ||
            function (D) {
              for (var b = 1; b < arguments.length; b++) {
                var P = arguments[b]
                for (var M in P) Object.prototype.hasOwnProperty.call(P, M) && (D[M] = P[M])
              }
              return D
            }
          i.default = E
          var s = o(38),
            u = y(s),
            l = o(5),
            c = y(l),
            m = o(1),
            h = y(m),
            _ = o(3),
            S = y(_),
            x = o(6),
            p = y(x),
            d = o(11),
            v = y(d)
          function y(D) {
            return D && D.__esModule ? D : { default: D }
          }
          function E(D) {
            var b = D.el,
              P = D.popper,
              M = D.settings,
              O = M.position,
              A = M.popperOptions,
              z = M.offset,
              te = M.distance,
              se = M.flipDuration,
              ce = (0, p.default)(P),
              _e = ce.tooltip,
              Oe = a({ placement: O }, A || {}, {
                modifiers: a({}, A ? A.modifiers : {}, {
                  flip: a({ padding: te + 5 }, A && A.modifiers ? A.modifiers.flip : {}),
                  offset: a({ offset: z }, A && A.modifiers ? A.modifiers.offset : {}),
                }),
                onUpdate: function () {
                  var Be = _e.style
                  ;(Be.top = ''),
                    (Be.bottom = ''),
                    (Be.left = ''),
                    (Be.right = ''),
                    (Be[(0, S.default)(P.getAttribute('x-placement'))] = (0, v.default)(te))
                },
              })
            if (window.MutationObserver) {
              var je = P.style,
                He = new MutationObserver(function () {
                  ;(je[(0, h.default)('transitionDuration')] = '0ms'),
                    D.popperInstance.update(),
                    (0, c.default)(function () {
                      je[(0, h.default)('transitionDuration')] = se + 'ms'
                    })
                })
              He.observe(P, { childList: !0, subtree: !0, characterData: !0 }), (D._mutationObserver = He)
            }
            return new u.default(b, P, Oe)
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = D)
          var a = o(24),
            s = y(a),
            u = o(17),
            l = y(u),
            c = o(20),
            m = y(c),
            h = o(23),
            _ = y(h),
            S = o(21),
            x = y(S),
            p = o(12),
            d = y(p),
            v = o(0)
          function y(b) {
            return b && b.__esModule ? b : { default: b }
          }
          var E = 1
          function D(b) {
            var P = this
            return b.reduce(function (M, O) {
              var A = E,
                z = (0, x.default)(P.settings.performance ? P.settings : (0, s.default)(O, P.settings)),
                te = z.html,
                se = z.reactDOM,
                ce = z.trigger,
                _e = z.touchHold,
                Oe = O.getAttribute('title')
              if (!Oe && !te && !se) return M
              O.setAttribute('data-tooltipped', ''),
                O.setAttribute('aria-describedby', 'tippy-tooltip-' + A),
                (0, d.default)(O)
              var je = (0, l.default)(A, Oe, z),
                He = _.default.call(P, O, je, z),
                Pt = []
              return (
                ce
                  .trim()
                  .split(' ')
                  .forEach(function (Be) {
                    return (Pt = Pt.concat((0, m.default)(Be, O, He, _e)))
                  }),
                M.push({ id: A, el: O, popper: je, settings: z, listeners: Pt, tippyInstance: P }),
                E++,
                M
              )
            }, [])
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = s)
          var a = o(0)
          function s(u, l, c, m) {
            var h = []
            return (
              u === 'manual' ||
                (l.addEventListener(u, c.handleTrigger),
                h.push({ event: u, handler: c.handleTrigger }),
                u === 'mouseenter' &&
                  (a.Browser.SUPPORTS_TOUCH &&
                    m &&
                    (l.addEventListener('touchstart', c.handleTrigger),
                    h.push({ event: 'touchstart', handler: c.handleTrigger }),
                    l.addEventListener('touchend', c.handleMouseleave),
                    h.push({ event: 'touchend', handler: c.handleMouseleave })),
                  l.addEventListener('mouseleave', c.handleMouseleave),
                  h.push({ event: 'mouseleave', handler: c.handleMouseleave })),
                u === 'focus' &&
                  (l.addEventListener('blur', c.handleBlur), h.push({ event: 'blur', handler: c.handleBlur }))),
              h
            )
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s) {
            return (
              s.arrow && (s.animateFill = !1),
              s.appendTo && typeof s.appendTo == 'function' && (s.appendTo = s.appendTo()),
              s
            )
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s) {
            return s instanceof Element ? [s] : Array.isArray(s) ? s : [].slice.call(document.querySelectorAll(s))
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = S)
          var a = o(0),
            s = o(7),
            u = _(s),
            l = o(4),
            c = _(l),
            m = o(32),
            h = _(m)
          function _(x) {
            return x && x.__esModule ? x : { default: x }
          }
          function S(x, p, d) {
            var v = this,
              y = d.position,
              E = d.delay,
              D = d.duration,
              b = d.interactive,
              P = d.interactiveBorder,
              M = d.distance,
              O = d.hideOnClick,
              A = d.trigger,
              z = d.touchHold,
              te = d.touchWait,
              se = void 0,
              ce = void 0,
              _e = function () {
                clearTimeout(se), clearTimeout(ce)
              },
              Oe = function () {
                if ((_e(), !(0, u.default)(p))) {
                  var Ce = Array.isArray(E) ? E[0] : E
                  E
                    ? (se = setTimeout(function () {
                        return v.show(p)
                      }, Ce))
                    : v.show(p)
                }
              },
              je = function (Ce) {
                return v.callbacks.wait ? v.callbacks.wait.call(p, Oe, Ce) : Oe()
              },
              He = function () {
                _e()
                var Ce = Array.isArray(E) ? E[1] : E
                E
                  ? (ce = setTimeout(function () {
                      return v.hide(p)
                    }, Ce))
                  : v.hide(p)
              },
              Pt = function (Ce) {
                var gt = Ce.type === 'mouseenter' && a.Browser.SUPPORTS_TOUCH && a.Browser.touch
                if (!(gt && z)) {
                  var Xr = Ce.type === 'click',
                    Ct = O !== 'persistent'
                  Xr && (0, u.default)(p) && Ct ? He() : je(Ce), gt && a.Browser.iOS() && x.click && x.click()
                }
              },
              Be = function (Ce) {
                if (!(Ce.type === 'mouseleave' && a.Browser.SUPPORTS_TOUCH && a.Browser.touch && z)) {
                  if (b) {
                    var gt = function Xr(Ct) {
                      var Pn = function () {
                          document.body.removeEventListener('mouseleave', He),
                            document.removeEventListener('mousemove', Xr),
                            He()
                        },
                        vr = (0, c.default)(Ct.target, a.Selectors.TOOLTIPPED_EL),
                        Kr = (0, c.default)(Ct.target, a.Selectors.POPPER) === p,
                        Oi = vr === x,
                        Cn = A.indexOf('click') !== -1,
                        In = vr && vr !== x
                      if (In) return Pn()
                      Kr || Oi || Cn || ((0, h.default)(Ct, p, d) && Pn())
                    }
                    document.body.addEventListener('mouseleave', He), document.addEventListener('mousemove', gt)
                    return
                  }
                  He()
                }
              },
              bn = function (Ce) {
                !Ce.relatedTarget || a.Browser.touch || (0, c.default)(Ce.relatedTarget, a.Selectors.POPPER) || He()
              }
            return { handleTrigger: Pt, handleMouseleave: Be, handleBlur: bn }
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = s)
          var a = o(0)
          function s(u, l) {
            var c = a.DefaultsKeys.reduce(function (m, h) {
              var _ = u.getAttribute('data-' + h.toLowerCase()) || l[h]
              return (
                _ === 'false' && (_ = !1),
                _ === 'true' && (_ = !0),
                isFinite(_) && !isNaN(parseFloat(_)) && (_ = parseFloat(_)),
                typeof _ == 'string' && _.trim().charAt(0) === '[' && (_ = JSON.parse(_)),
                (m[h] = _),
                m
              )
            }, {})
            return Object.assign({}, l, c)
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = s)
          var a = o(0)
          function s(u) {
            a.Store.forEach(function (l) {
              var c = l.popper,
                m = l.tippyInstance,
                h = l.settings,
                _ = h.appendTo,
                S = h.hideOnClick,
                x = h.trigger
              if (!!_.contains(c)) {
                var p = S === !0 || x.indexOf('focus') !== -1,
                  d = !u || c !== u.popper
                p && d && (l.settings.onRequestClose(), m.hide(c))
              }
            })
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = l)
          var a = o(16),
            s = u(a)
          function u(c) {
            return c && c.__esModule ? c : { default: c }
          }
          function l() {
            return l.done ? !1 : ((l.done = !0), (0, s.default)(), !0)
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = _)
          var a = o(5),
            s = h(a),
            u = o(1),
            l = h(u),
            c = o(7),
            m = h(c)
          function h(S) {
            return S && S.__esModule ? S : { default: S }
          }
          function _(S) {
            var x = S.popper,
              p = S.popperInstance,
              d = S.settings.stickyDuration,
              v = function () {
                return (x.style[(0, l.default)('transitionDuration')] = d + 'ms')
              },
              y = function () {
                return (x.style[(0, l.default)('transitionDuration')] = '')
              },
              E = function D() {
                p && p.scheduleUpdate(), v(), (0, m.default)(x) ? window.requestAnimationFrame(D) : y()
              }
            ;(0, s.default)(E)
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = S)
          var a = o(0),
            s = o(10),
            u = _(s),
            l = o(18),
            c = _(l),
            m = o(1),
            h = _(m)
          function _(x) {
            return x && x.__esModule ? x : { default: x }
          }
          function S(x) {
            var p = x.el,
              d = x.popper,
              v = x.settings,
              y = v.appendTo,
              E = v.followCursor
            y.contains(d) ||
              (y.appendChild(d),
              x.popperInstance
                ? (x.popperInstance.update(), (!E || a.Browser.touch) && x.popperInstance.enableEventListeners())
                : (x.popperInstance = (0, c.default)(x)),
              E &&
                !a.Browser.touch &&
                (p.addEventListener('mousemove', u.default), x.popperInstance.disableEventListeners()))
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = c)
          var a = o(0),
            s = o(6),
            u = l(s)
          function l(m) {
            return m && m.__esModule ? m : { default: m }
          }
          function c(m, h, _) {
            if (!h) return _()
            var S = (0, u.default)(m.popper),
              x = S.tooltip,
              p = !1,
              d = function (y) {
                y.target === x && !p && ((p = !0), _())
              }
            x.addEventListener('webkitTransitionEnd', d),
              x.addEventListener('transitionend', d),
              clearTimeout(m._transitionendTimeout),
              (m._transitionendTimeout = setTimeout(function () {
                p || _()
              }, h))
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 })
          var a =
              Object.assign ||
              function (ue) {
                for (var ie = 1; ie < arguments.length; ie++) {
                  var j = arguments[ie]
                  for (var K in j) Object.prototype.hasOwnProperty.call(j, K) && (ue[K] = j[K])
                }
                return ue
              },
            s = (function () {
              function ue(ie, j) {
                for (var K = 0; K < j.length; K++) {
                  var me = j[K]
                  ;(me.enumerable = me.enumerable || !1),
                    (me.configurable = !0),
                    'value' in me && (me.writable = !0),
                    Object.defineProperty(ie, me.key, me)
                }
              }
              return function (ie, j, K) {
                return j && ue(ie.prototype, j), K && ue(ie, K), ie
              }
            })(),
            u = o(0),
            l = o(39),
            c = we(l),
            m = o(26),
            h = we(m),
            _ = o(5),
            S = we(_),
            x = o(1),
            p = we(x),
            d = o(2),
            v = we(d),
            y = o(34),
            E = we(y),
            D = o(12),
            b = we(D),
            P = o(33),
            M = we(P),
            O = o(37),
            A = we(O),
            z = o(35),
            te = we(z),
            se = o(6),
            ce = we(se),
            _e = o(31),
            Oe = we(_e),
            je = o(7),
            He = we(je),
            Pt = o(36),
            Be = we(Pt),
            bn = o(10),
            lt = we(bn),
            Ce = o(22),
            gt = we(Ce),
            Xr = o(29),
            Ct = we(Xr),
            Pn = o(28),
            vr = we(Pn),
            Kr = o(27),
            Oi = we(Kr),
            Cn = o(19),
            In = we(Cn)
          function we(ue) {
            return ue && ue.__esModule ? ue : { default: ue }
          }
          function Ks(ue, ie, j) {
            return (
              ie in ue
                ? Object.defineProperty(ue, ie, { value: j, enumerable: !0, configurable: !0, writable: !0 })
                : (ue[ie] = j),
              ue
            )
          }
          function Qs(ue, ie) {
            if (!(ue instanceof ie)) throw new TypeError('Cannot call a class as a function')
          }
          var Js = (function () {
            function ue(ie) {
              var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              Qs(this, ue),
                !!u.Browser.SUPPORTED &&
                  ((0, h.default)(),
                  (this.state = { destroyed: !1 }),
                  (this.selector = ie),
                  (this.settings = a({}, u.Defaults, j)),
                  (j.show || j.shown || j.hide || j.hidden) &&
                    console.warn(
                      'Callbacks without the `on` prefix are deprecated (with the exception of `wait`). Use onShow, onShown, onHide, and onHidden instead.'
                    ),
                  (this.callbacks = {
                    wait: j.wait,
                    show: j.onShow || j.show || Be.default,
                    shown: j.onShown || j.shown || Be.default,
                    hide: j.onHide || j.hide || Be.default,
                    hidden: j.onHidden || j.hidden || Be.default,
                  }),
                  (this.store = In.default.call(this, (0, gt.default)(ie))),
                  u.Store.push.apply(u.Store, this.store))
            }
            return (
              s(ue, [
                {
                  key: 'getPopperElement',
                  value: function (j) {
                    try {
                      return (0, v.default)(this.store, function (K) {
                        return K.el === j
                      }).popper
                    } catch (K) {
                      console.error('[getPopperElement]: Element passed as the argument does not exist in the instance')
                    }
                  },
                },
                {
                  key: 'getReferenceElement',
                  value: function (j) {
                    try {
                      return (0, v.default)(this.store, function (K) {
                        return K.popper === j
                      }).el
                    } catch (K) {
                      console.error(
                        '[getReferenceElement]: Popper passed as the argument does not exist in the instance'
                      )
                    }
                  },
                },
                {
                  key: 'getReferenceData',
                  value: function (j) {
                    return (0, v.default)(this.store, function (K) {
                      return K.el === j || K.popper === j
                    })
                  },
                },
                {
                  key: 'updateSettings',
                  value: function (j, K, me) {
                    var $ = (0, v.default)(this.store, function (he) {
                      return he.popper === j
                    })
                    if (!!$) {
                      var le = a({}, $.settings, Ks({}, K, me))
                      $.settings = le
                    }
                  },
                },
                {
                  key: 'updateForReact',
                  value: function (j, K) {
                    var me = j.querySelector(u.Selectors.CONTENT),
                      $ = (0, v.default)(this.store, function (ft) {
                        return ft.popper === j
                      })
                    if (!!$) {
                      var le = $.settings,
                        he = le.useContext,
                        Le = le.setReactDOMValue
                      he ? Le(c.default.createPortal(K, me)) : c.default.render(K, me)
                    }
                  },
                },
                {
                  key: 'show',
                  value: function (j, K) {
                    var me = this
                    if (!this.state.destroyed) {
                      var $ = (0, v.default)(this.store, function (Je) {
                        return Je.popper === j
                      })
                      if (!!$) {
                        var le = (0, ce.default)(j),
                          he = le.tooltip,
                          Le = le.circle,
                          ft = le.content
                        if (!document.body.contains($.el)) {
                          this.destroy(j)
                          return
                        }
                        if ((this.callbacks.show.call(j), !($.settings && $.settings.open === !1))) {
                          $.settings.reactDOM && this.updateForReact(j, $.settings.reactDOM)
                          var Ue = $.el,
                            $e = $.settings,
                            It = $e.appendTo,
                            gr = $e.sticky,
                            bi = $e.interactive,
                            Pi = $e.followCursor,
                            $o = $e.flipDuration,
                            Qr = $e.duration,
                            Ci = $e.dynamicTitle
                          if (Ci) {
                            var yr = Ue.getAttribute('title')
                            yr && ((ft.innerHTML = yr), (0, b.default)(Ue))
                          }
                          var Jr = K !== void 0 ? K : Array.isArray(Qr) ? Qr[0] : Qr
                          ;(0, Oe.default)([j, he, Le], 0),
                            (0, vr.default)($),
                            (j.style.visibility = 'visible'),
                            j.setAttribute('aria-hidden', 'false'),
                            (0, S.default)(function () {
                              ;(!Pi || u.Browser.touch) && ($.popperInstance.update(), (0, Oe.default)([j], $o)),
                                (0, Oe.default)([he, Le], Jr),
                                Le && (ft.style.opacity = 1),
                                bi && Ue.classList.add('active'),
                                gr && (0, Oi.default)($),
                                (0, A.default)(he, Le),
                                (0, te.default)([he, Le], function (Je) {
                                  Je.contains('tippy-notransition') && Je.remove('tippy-notransition'),
                                    Je.remove('leave'),
                                    Je.add('enter')
                                }),
                                (0, Ct.default)($, Jr, function () {
                                  !(0, He.default)(j) ||
                                    $._onShownFired ||
                                    (bi && j.focus(),
                                    he.classList.add('tippy-notransition'),
                                    ($._onShownFired = !0),
                                    me.callbacks.shown.call(j))
                                })
                            })
                        }
                      }
                    }
                  },
                },
                {
                  key: 'hide',
                  value: function (j, K) {
                    var me = this
                    if (!this.state.destroyed) {
                      this.callbacks.hide.call(j)
                      var $ = (0, v.default)(this.store, function (Je) {
                        return Je.popper === j
                      })
                      if (!!$) {
                        var le = (0, ce.default)(j),
                          he = le.tooltip,
                          Le = le.circle,
                          ft = le.content
                        if (!($.settings.disabled === !1 && $ && $.settings.open)) {
                          var Ue = $ && $.settings && $.settings.unmountHTMLWhenHide && $.settings.reactDOM,
                            $e = $.el,
                            It = $.settings,
                            gr = It.appendTo,
                            bi = It.sticky,
                            Pi = It.interactive,
                            $o = It.followCursor,
                            Qr = It.html,
                            Ci = It.trigger,
                            yr = It.duration,
                            Jr = K !== void 0 ? K : Array.isArray(yr) ? yr[1] : yr
                          ;($._onShownFired = !1),
                            Pi && $e.classList.remove('active'),
                            (j.style.visibility = 'hidden'),
                            j.setAttribute('aria-hidden', 'true'),
                            (0, Oe.default)([he, Le, Le ? ft : null], Jr),
                            Le && (ft.style.opacity = 0),
                            (0, te.default)([he, Le], function (Je) {
                              Je.contains('tippy-tooltip') && Je.remove('tippy-notransition'),
                                Je.remove('enter'),
                                Je.add('leave')
                            }),
                            Qr && Ci.indexOf('click') !== -1 && (0, M.default)($e) && $e.focus(),
                            (0, Ct.default)($, Jr, function () {
                              ;(0, He.default)(j) ||
                                !gr.contains(j) ||
                                getComputedStyle(he).opacity === '1' ||
                                ($e.removeEventListener('mousemove', lt.default),
                                $.popperInstance.disableEventListeners(),
                                gr.removeChild(j),
                                me.callbacks.hidden.call(j),
                                Ue && c.default.unmountComponentAtNode(ft))
                            })
                        }
                      }
                    }
                  },
                },
                {
                  key: 'update',
                  value: function (j) {
                    if (!this.state.destroyed) {
                      var K = (0, v.default)(this.store, function (Le) {
                        return Le.popper === j
                      })
                      if (!!K) {
                        var me = (0, ce.default)(j),
                          $ = me.content,
                          le = K.el,
                          he = K.settings.html
                        if (he instanceof Element) {
                          console.warn('Aborted: update() should not be used if `html` is a DOM element')
                          return
                        }
                        ;($.innerHTML = he
                          ? document.getElementById(he.replace('#', '')).innerHTML
                          : le.getAttribute('title') || le.getAttribute('data-original-title')),
                          he || (0, b.default)(le)
                      }
                    }
                  },
                },
                {
                  key: 'destroy',
                  value: function (j, K) {
                    var me = this
                    if (!this.state.destroyed) {
                      var $ = (0, v.default)(this.store, function (Ue) {
                        return Ue.popper === j
                      })
                      if (!!$) {
                        var le = $.el,
                          he = $.popperInstance,
                          Le = $.listeners,
                          ft = $._mutationObserver
                        ;(0, He.default)(j) && this.hide(j, 0),
                          Le.forEach(function (Ue) {
                            return le.removeEventListener(Ue.event, Ue.handler)
                          }),
                          le.setAttribute('title', le.getAttribute('data-original-title')),
                          le.removeAttribute('data-original-title'),
                          le.removeAttribute('data-tooltipped'),
                          le.removeAttribute('aria-describedby'),
                          he && he.destroy(),
                          ft && ft.disconnect(),
                          u.Store.splice(
                            (0, E.default)(u.Store, function (Ue) {
                              return Ue.popper === j
                            }),
                            1
                          ),
                          (K === void 0 || K) &&
                            (this.store = u.Store.filter(function (Ue) {
                              return Ue.tippyInstance === me
                            }))
                      }
                    }
                  },
                },
                {
                  key: 'destroyAll',
                  value: function () {
                    var j = this
                    if (!this.state.destroyed) {
                      var K = this.store.length
                      this.store.forEach(function (me, $) {
                        var le = me.popper
                        j.destroy(le, $ === K - 1)
                      }),
                        (this.store = null),
                        (this.state.destroyed = !0)
                    }
                  },
                },
              ]),
              ue
            )
          })()
          function tr(ue, ie) {
            return new Js(ue, ie)
          }
          ;(tr.Browser = u.Browser),
            (tr.Defaults = u.Defaults),
            (tr.disableDynamicInputDetection = function () {
              return (u.Browser.dynamicInputDetection = !1)
            }),
            (tr.enableDynamicInputDetection = function () {
              return (u.Browser.dynamicInputDetection = !0)
            }),
            (i.default = tr)
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = m)
          var a = o(0),
            s = o(1),
            u = c(s),
            l = o(8)
          function c(h) {
            return h && h.__esModule ? h : { default: h }
          }
          function m(h, _) {
            h.forEach(function (S) {
              if (!!S) {
                var x = l.matches.call(S, a.Selectors.CONTENT),
                  p = x ? Math.round(_ / 1.3) : _
                S.style[(0, u.default)('transitionDuration')] = p + 'ms'
              }
            })
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = l)
          var a = o(3),
            s = u(a)
          function u(c) {
            return c && c.__esModule ? c : { default: c }
          }
          function l(c, m, h) {
            if (!m.getAttribute('x-placement')) return !0
            var _ = c.clientX,
              S = c.clientY,
              x = h.interactiveBorder,
              p = h.distance,
              d = m.getBoundingClientRect(),
              v = (0, s.default)(m.getAttribute('x-placement')),
              y = x + p,
              E = { top: d.top - S > x, bottom: S - d.bottom > x, left: d.left - _ > x, right: _ - d.right > x }
            switch (v) {
              case 'top':
                E.top = d.top - S > y
                break
              case 'bottom':
                E.bottom = S - d.bottom > y
                break
              case 'left':
                E.left = d.left - _ > y
                break
              case 'right':
                E.right = _ - d.right > y
                break
            }
            return E.top || E.bottom || E.left || E.right
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s) {
            var u = s.getBoundingClientRect()
            return (
              u.top >= 0 &&
              u.left >= 0 &&
              u.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              u.right <= (window.innerWidth || document.documentElement.clientWidth)
            )
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = l)
          var a = o(2),
            s = u(a)
          function u(c) {
            return c && c.__esModule ? c : { default: c }
          }
          function l(c, m) {
            return Array.prototype.findIndex ? c.findIndex(m) : c.indexOf((0, s.default)(c, m))
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a(s, u) {
            s.forEach(function (l) {
              !l || u(l.classList)
            })
          }
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = a)
          function a() {}
        },
        function (n, i, o) {
          'use strict'
          Object.defineProperty(i, '__esModule', { value: !0 }), (i.default = l)
          var a = o(1),
            s = u(a)
          function u(c) {
            return c && c.__esModule ? c : { default: c }
          }
          function l(c, m) {
            m ? window.getComputedStyle(m)[(0, s.default)('transform')] : window.getComputedStyle(c).opacity
          }
        },
        function (n, i) {
          n.exports = t
        },
        function (n, i) {
          n.exports = r
        },
      ])
    })
  })
  var Xs = Ze(et()),
    Uv = Ze(us())
  var ih = Ze(nh()),
    {
      __extends: Ve,
      __assign: k,
      __rest: cs,
      __decorate: fw,
      __param: cw,
      __metadata: dw,
      __awaiter: pw,
      __generator: mw,
      __exportStar: hw,
      __createBinding: vw,
      __values: Nt,
      __read: ds,
      __spread: Y,
      __spreadArrays: gw,
      __await: yw,
      __asyncGenerator: _w,
      __asyncDelegator: ww,
      __asyncValues: Ew,
      __makeTemplateObject: Sw,
      __importStar: xw,
      __importDefault: Tw,
      __classPrivateFieldGet: kw,
      __classPrivateFieldSet: Ow,
    } = ih.default
  var mt
  ;(function (e) {
    ;(e.Ok = 'ok'), (e.Exited = 'exited'), (e.Crashed = 'crashed'), (e.Abnormal = 'abnormal')
  })(mt || (mt = {}))
  var yf
  ;(function (e) {
    ;(e.Ok = 'ok'), (e.Errored = 'errored'), (e.Crashed = 'crashed')
  })(yf || (yf = {}))
  var nt
  ;(function (e) {
    ;(e.Fatal = 'fatal'),
      (e.Error = 'error'),
      (e.Warning = 'warning'),
      (e.Log = 'log'),
      (e.Info = 'info'),
      (e.Debug = 'debug'),
      (e.Critical = 'critical')
  })(nt || (nt = {}))
  ;(function (e) {
    function t(r) {
      switch (r) {
        case 'debug':
          return e.Debug
        case 'info':
          return e.Info
        case 'warn':
        case 'warning':
          return e.Warning
        case 'error':
          return e.Error
        case 'fatal':
          return e.Fatal
        case 'critical':
          return e.Critical
        case 'log':
        default:
          return e.Log
      }
    }
    e.fromString = t
  })(nt || (nt = {}))
  var Yt
  ;(function (e) {
    ;(e.Unknown = 'unknown'),
      (e.Skipped = 'skipped'),
      (e.Success = 'success'),
      (e.RateLimit = 'rate_limit'),
      (e.Invalid = 'invalid'),
      (e.Failed = 'failed')
  })(Yt || (Yt = {}))
  ;(function (e) {
    function t(r) {
      return r >= 200 && r < 300
        ? e.Success
        : r === 429
        ? e.RateLimit
        : r >= 400 && r < 500
        ? e.Invalid
        : r >= 500
        ? e.Failed
        : e.Unknown
    }
    e.fromHttpCode = t
  })(Yt || (Yt = {}))
  var Ur
  ;(function (e) {
    ;(e.Explicit = 'explicitly_set'),
      (e.Sampler = 'client_sampler'),
      (e.Rate = 'client_rate'),
      (e.Inheritance = 'inheritance')
  })(Ur || (Ur = {}))
  function ps(e) {
    switch (Object.prototype.toString.call(e)) {
      case '[object Error]':
        return !0
      case '[object Exception]':
        return !0
      case '[object DOMException]':
        return !0
      default:
        return it(e, Error)
    }
  }
  function ms(e) {
    return Object.prototype.toString.call(e) === '[object ErrorEvent]'
  }
  function _f(e) {
    return Object.prototype.toString.call(e) === '[object DOMError]'
  }
  function oh(e) {
    return Object.prototype.toString.call(e) === '[object DOMException]'
  }
  function Xt(e) {
    return Object.prototype.toString.call(e) === '[object String]'
  }
  function vn(e) {
    return e === null || (typeof e != 'object' && typeof e != 'function')
  }
  function Kt(e) {
    return Object.prototype.toString.call(e) === '[object Object]'
  }
  function ci(e) {
    return typeof Event != 'undefined' && it(e, Event)
  }
  function wf(e) {
    return typeof Element != 'undefined' && it(e, Element)
  }
  function ah(e) {
    return Object.prototype.toString.call(e) === '[object RegExp]'
  }
  function Qt(e) {
    return Boolean(e && e.then && typeof e.then == 'function')
  }
  function sh(e) {
    return Kt(e) && 'nativeEvent' in e && 'preventDefault' in e && 'stopPropagation' in e
  }
  function it(e, t) {
    try {
      return e instanceof t
    } catch (r) {
      return !1
    }
  }
  function fr(e, t) {
    try {
      for (
        var r = e, n = 5, i = 80, o = [], a = 0, s = 0, u = ' > ', l = u.length, c = void 0;
        r && a++ < n && ((c = a0(r, t)), !(c === 'html' || (a > 1 && s + o.length * l + c.length >= i)));

      )
        o.push(c), (s += c.length), (r = r.parentNode)
      return o.reverse().join(u)
    } catch (m) {
      return '<unknown>'
    }
  }
  function a0(e, t) {
    var r,
      n,
      i = e,
      o = [],
      a,
      s,
      u,
      l,
      c
    if (!i || !i.tagName) return ''
    o.push(i.tagName.toLowerCase())
    var m = ((r = t) === null || r === void 0 ? void 0 : r.length)
      ? t
          .filter(function (_) {
            return i.getAttribute(_)
          })
          .map(function (_) {
            return [_, i.getAttribute(_)]
          })
      : null
    if ((n = m) === null || n === void 0 ? void 0 : n.length)
      m.forEach(function (_) {
        o.push('[' + _[0] + '="' + _[1] + '"]')
      })
    else if ((i.id && o.push('#' + i.id), (a = i.className), a && Xt(a)))
      for (s = a.split(/\s+/), c = 0; c < s.length; c++) o.push('.' + s[c])
    var h = ['type', 'name', 'title', 'alt']
    for (c = 0; c < h.length; c++) (u = h[c]), (l = i.getAttribute(u)), l && o.push('[' + u + '="' + l + '"]')
    return o.join('')
  }
  var uh = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? s0 : u0)
  function s0(e, t) {
    return (e.__proto__ = t), e
  }
  function u0(e, t) {
    for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
    return e
  }
  var Ee = (function (e) {
    Ve(t, e)
    function t(r) {
      var n = this.constructor,
        i = e.call(this, r) || this
      return (i.message = r), (i.name = n.prototype.constructor.name), uh(i, n.prototype), i
    }
    return t
  })(Error)
  var l0 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
    Mo = 'Invalid Dsn',
    hs = (function () {
      function e(t) {
        typeof t == 'string' ? this._fromString(t) : this._fromComponents(t), this._validate()
      }
      return (
        (e.prototype.toString = function (t) {
          t === void 0 && (t = !1)
          var r = this,
            n = r.host,
            i = r.path,
            o = r.pass,
            a = r.port,
            s = r.projectId,
            u = r.protocol,
            l = r.publicKey
          return u + '://' + l + (t && o ? ':' + o : '') + ('@' + n + (a ? ':' + a : '') + '/' + (i && i + '/') + s)
        }),
        (e.prototype._fromString = function (t) {
          var r = l0.exec(t)
          if (!r) throw new Ee(Mo)
          var n = ds(r.slice(1), 6),
            i = n[0],
            o = n[1],
            a = n[2],
            s = a === void 0 ? '' : a,
            u = n[3],
            l = n[4],
            c = l === void 0 ? '' : l,
            m = n[5],
            h = '',
            _ = m,
            S = _.split('/')
          if ((S.length > 1 && ((h = S.slice(0, -1).join('/')), (_ = S.pop())), _)) {
            var x = _.match(/^\d+/)
            x && (_ = x[0])
          }
          this._fromComponents({ host: u, pass: s, path: h, projectId: _, port: c, protocol: i, publicKey: o })
        }),
        (e.prototype._fromComponents = function (t) {
          'user' in t && !('publicKey' in t) && (t.publicKey = t.user),
            (this.user = t.publicKey || ''),
            (this.protocol = t.protocol),
            (this.publicKey = t.publicKey || ''),
            (this.pass = t.pass || ''),
            (this.host = t.host),
            (this.port = t.port || ''),
            (this.path = t.path || ''),
            (this.projectId = t.projectId)
        }),
        (e.prototype._validate = function () {
          var t = this
          if (
            (['protocol', 'publicKey', 'host', 'projectId'].forEach(function (r) {
              if (!t[r]) throw new Ee(Mo + ': ' + r + ' missing')
            }),
            !this.projectId.match(/^\d+$/))
          )
            throw new Ee(Mo + ': Invalid projectId ' + this.projectId)
          if (this.protocol !== 'http' && this.protocol !== 'https')
            throw new Ee(Mo + ': Invalid protocol ' + this.protocol)
          if (this.port && isNaN(parseInt(this.port, 10))) throw new Ee(Mo + ': Invalid port ' + this.port)
        }),
        e
      )
    })()
  function Jt() {
    return Object.prototype.toString.call(typeof process != 'undefined' ? process : 0) === '[object process]'
  }
  function Zt(e, t) {
    return e.require(t)
  }
  function zr(e) {
    var t
    try {
      t = Zt(module, e)
    } catch (n) {}
    try {
      var r = Zt(module, 'process').cwd
      t = Zt(module, r() + '/node_modules/' + e)
    } catch (n) {}
    return t
  }
  function gn(e, t) {
    return t === void 0 && (t = 0), typeof e != 'string' || t === 0 || e.length <= t ? e : e.substr(0, t) + '...'
  }
  function Ef(e, t) {
    if (!Array.isArray(e)) return ''
    for (var r = [], n = 0; n < e.length; n++) {
      var i = e[n]
      try {
        r.push(String(i))
      } catch (o) {
        r.push('[value cannot be serialized]')
      }
    }
    return r.join(t)
  }
  function yn(e, t) {
    return Xt(e) ? (ah(t) ? t.test(e) : typeof t == 'string' ? e.indexOf(t) !== -1 : !1) : !1
  }
  var f0 = {}
  function Z() {
    return Jt() ? global : typeof window != 'undefined' ? window : typeof self != 'undefined' ? self : f0
  }
  function bt() {
    var e = Z(),
      t = e.crypto || e.msCrypto
    if (t !== void 0 && t.getRandomValues) {
      var r = new Uint16Array(8)
      t.getRandomValues(r), (r[3] = (r[3] & 4095) | 16384), (r[4] = (r[4] & 16383) | 32768)
      var n = function (i) {
        for (var o = i.toString(16); o.length < 4; ) o = '0' + o
        return o
      }
      return n(r[0]) + n(r[1]) + n(r[2]) + n(r[3]) + n(r[4]) + n(r[5]) + n(r[6]) + n(r[7])
    }
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (i) {
      var o = (Math.random() * 16) | 0,
        a = i === 'x' ? o : (o & 3) | 8
      return a.toString(16)
    })
  }
  function vs(e) {
    if (!e) return {}
    var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
    if (!t) return {}
    var r = t[6] || '',
      n = t[8] || ''
    return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + r + n }
  }
  function cr(e) {
    if (e.message) return e.message
    if (e.exception && e.exception.values && e.exception.values[0]) {
      var t = e.exception.values[0]
      return t.type && t.value ? t.type + ': ' + t.value : t.type || t.value || e.event_id || '<unknown>'
    }
    return e.event_id || '<unknown>'
  }
  function di(e) {
    var t = Z(),
      r = ['debug', 'info', 'warn', 'error', 'log', 'assert']
    if (!('console' in t)) return e()
    var n = t.console,
      i = {}
    r.forEach(function (a) {
      a in t.console && n[a].__sentry_original__ && ((i[a] = n[a]), (n[a] = n[a].__sentry_original__))
    })
    var o = e()
    return (
      Object.keys(i).forEach(function (a) {
        n[a] = i[a]
      }),
      o
    )
  }
  function Do(e, t, r) {
    ;(e.exception = e.exception || {}),
      (e.exception.values = e.exception.values || []),
      (e.exception.values[0] = e.exception.values[0] || {}),
      (e.exception.values[0].value = e.exception.values[0].value || t || ''),
      (e.exception.values[0].type = e.exception.values[0].type || r || 'Error')
  }
  function dr(e, t) {
    t === void 0 && (t = {})
    try {
      ;(e.exception.values[0].mechanism = e.exception.values[0].mechanism || {}),
        Object.keys(t).forEach(function (r) {
          e.exception.values[0].mechanism[r] = t[r]
        })
    } catch (r) {}
  }
  function lh() {
    try {
      return document.location.href
    } catch (e) {
      return ''
    }
  }
  var c0 =
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
  function fh(e) {
    var t = e.match(c0) || [],
      r = parseInt(t[1], 10),
      n = parseInt(t[2], 10),
      i = parseInt(t[3], 10)
    return {
      buildmetadata: t[5],
      major: isNaN(r) ? void 0 : r,
      minor: isNaN(n) ? void 0 : n,
      patch: isNaN(i) ? void 0 : i,
      prerelease: t[4],
    }
  }
  var ch = 60 * 1e3
  function dh(e, t) {
    if (!t) return ch
    var r = parseInt('' + t, 10)
    if (!isNaN(r)) return r * 1e3
    var n = Date.parse('' + t)
    return isNaN(n) ? ch : n - e
  }
  var _n = Z(),
    Sf = 'Sentry Logger ',
    d0 = (function () {
      function e() {
        this._enabled = !1
      }
      return (
        (e.prototype.disable = function () {
          this._enabled = !1
        }),
        (e.prototype.enable = function () {
          this._enabled = !0
        }),
        (e.prototype.log = function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
          !this._enabled ||
            di(function () {
              _n.console.log(Sf + '[Log]: ' + t.join(' '))
            })
        }),
        (e.prototype.warn = function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
          !this._enabled ||
            di(function () {
              _n.console.warn(Sf + '[Warn]: ' + t.join(' '))
            })
        }),
        (e.prototype.error = function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
          !this._enabled ||
            di(function () {
              _n.console.error(Sf + '[Error]: ' + t.join(' '))
            })
        }),
        e
      )
    })()
  _n.__SENTRY__ = _n.__SENTRY__ || {}
  var R = _n.__SENTRY__.logger || (_n.__SENTRY__.logger = new d0())
  var ph = (function () {
    function e() {
      ;(this._hasWeakSet = typeof WeakSet == 'function'), (this._inner = this._hasWeakSet ? new WeakSet() : [])
    }
    return (
      (e.prototype.memoize = function (t) {
        if (this._hasWeakSet) return this._inner.has(t) ? !0 : (this._inner.add(t), !1)
        for (var r = 0; r < this._inner.length; r++) {
          var n = this._inner[r]
          if (n === t) return !0
        }
        return this._inner.push(t), !1
      }),
      (e.prototype.unmemoize = function (t) {
        if (this._hasWeakSet) this._inner.delete(t)
        else
          for (var r = 0; r < this._inner.length; r++)
            if (this._inner[r] === t) {
              this._inner.splice(r, 1)
              break
            }
      }),
      e
    )
  })()
  var xf = '<anonymous>'
  function Lt(e) {
    try {
      return !e || typeof e != 'function' ? xf : e.name || xf
    } catch (t) {
      return xf
    }
  }
  function ge(e, t, r) {
    if (t in e) {
      var n = e[t],
        i = r(n)
      if (typeof i == 'function')
        try {
          ;(i.prototype = i.prototype || {}),
            Object.defineProperties(i, { __sentry_original__: { enumerable: !1, value: n } })
        } catch (o) {}
      e[t] = i
    }
  }
  function mh(e) {
    return Object.keys(e)
      .map(function (t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t])
      })
      .join('&')
  }
  function hh(e) {
    if (ps(e)) {
      var t = e,
        r = { message: t.message, name: t.name, stack: t.stack }
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n])
      return r
    }
    if (ci(e)) {
      var i = e,
        o = {}
      o.type = i.type
      try {
        o.target = wf(i.target) ? fr(i.target) : Object.prototype.toString.call(i.target)
      } catch (a) {
        o.target = '<unknown>'
      }
      try {
        o.currentTarget = wf(i.currentTarget) ? fr(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
      } catch (a) {
        o.currentTarget = '<unknown>'
      }
      typeof CustomEvent != 'undefined' && it(e, CustomEvent) && (o.detail = i.detail)
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (o[n] = i)
      return o
    }
    return e
  }
  function p0(e) {
    return ~-encodeURI(e).split(/%..|./).length
  }
  function m0(e) {
    return p0(JSON.stringify(e))
  }
  function Tf(e, t, r) {
    t === void 0 && (t = 3), r === void 0 && (r = 100 * 1024)
    var n = pi(e, t)
    return m0(n) > r ? Tf(e, t - 1, r) : n
  }
  function h0(e) {
    var t = Object.prototype.toString.call(e)
    if (typeof e == 'string') return e
    if (t === '[object Object]') return '[Object]'
    if (t === '[object Array]') return '[Array]'
    var r = vh(e)
    return vn(r) ? r : t
  }
  function vh(e, t) {
    return t === 'domain' && e && typeof e == 'object' && e._events
      ? '[Domain]'
      : t === 'domainEmitter'
      ? '[DomainEmitter]'
      : typeof global != 'undefined' && e === global
      ? '[Global]'
      : typeof window != 'undefined' && e === window
      ? '[Window]'
      : typeof document != 'undefined' && e === document
      ? '[Document]'
      : sh(e)
      ? '[SyntheticEvent]'
      : typeof e == 'number' && e !== e
      ? '[NaN]'
      : e === void 0
      ? '[undefined]'
      : typeof e == 'function'
      ? '[Function: ' + Lt(e) + ']'
      : typeof e == 'symbol'
      ? '[' + String(e) + ']'
      : typeof e == 'bigint'
      ? '[BigInt: ' + String(e) + ']'
      : e
  }
  function gh(e, t, r, n) {
    if ((r === void 0 && (r = Infinity), n === void 0 && (n = new ph()), r === 0)) return h0(t)
    if (t != null && typeof t.toJSON == 'function') return t.toJSON()
    var i = vh(t, e)
    if (vn(i)) return i
    var o = hh(t),
      a = Array.isArray(t) ? [] : {}
    if (n.memoize(t)) return '[Circular ~]'
    for (var s in o) !Object.prototype.hasOwnProperty.call(o, s) || (a[s] = gh(s, o[s], r - 1, n))
    return n.unmemoize(t), a
  }
  function pi(e, t) {
    try {
      return JSON.parse(
        JSON.stringify(e, function (r, n) {
          return gh(r, n, t)
        })
      )
    } catch (r) {
      return '**non-serializable**'
    }
  }
  function yh(e, t) {
    t === void 0 && (t = 40)
    var r = Object.keys(hh(e))
    if ((r.sort(), !r.length)) return '[object has no keys]'
    if (r[0].length >= t) return gn(r[0], t)
    for (var n = r.length; n > 0; n--) {
      var i = r.slice(0, n).join(', ')
      if (!(i.length > t)) return n === r.length ? i : gn(i, t)
    }
    return ''
  }
  function Ft(e) {
    var t, r
    if (Kt(e)) {
      var n = e,
        i = {}
      try {
        for (var o = Nt(Object.keys(n)), a = o.next(); !a.done; a = o.next()) {
          var s = a.value
          typeof n[s] != 'undefined' && (i[s] = Ft(n[s]))
        }
      } catch (u) {
        t = { error: u }
      } finally {
        try {
          a && !a.done && (r = o.return) && r.call(o)
        } finally {
          if (t) throw t.error
        }
      }
      return i
    }
    return Array.isArray(e) ? e.map(Ft) : e
  }
  function gs() {
    if (!('fetch' in Z())) return !1
    try {
      return new Headers(), new Request(''), new Response(), !0
    } catch (e) {
      return !1
    }
  }
  function ys(e) {
    return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  }
  function _h() {
    if (!gs()) return !1
    var e = Z()
    if (ys(e.fetch)) return !0
    var t = !1,
      r = e.document
    if (r && typeof r.createElement == 'function')
      try {
        var n = r.createElement('iframe')
        ;(n.hidden = !0),
          r.head.appendChild(n),
          n.contentWindow && n.contentWindow.fetch && (t = ys(n.contentWindow.fetch)),
          r.head.removeChild(n)
      } catch (i) {
        R.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', i)
      }
    return t
  }
  function wh() {
    if (!gs()) return !1
    try {
      return new Request('_', { referrerPolicy: 'origin' }), !0
    } catch (e) {
      return !1
    }
  }
  function Eh() {
    var e = Z(),
      t = e.chrome,
      r = t && t.app && t.app.runtime,
      n = 'history' in e && !!e.history.pushState && !!e.history.replaceState
    return !r && n
  }
  var ye = Z(),
    Ro = {},
    Sh = {}
  function v0(e) {
    if (!Sh[e])
      switch (((Sh[e] = !0), e)) {
        case 'console':
          g0()
          break
        case 'dom':
          O0()
          break
        case 'xhr':
          E0()
          break
        case 'fetch':
          y0()
          break
        case 'history':
          S0()
          break
        case 'error':
          b0()
          break
        case 'unhandledrejection':
          P0()
          break
        default:
          R.warn('unknown instrumentation type:', e)
      }
  }
  function De(e) {
    !e ||
      typeof e.type != 'string' ||
      typeof e.callback != 'function' ||
      ((Ro[e.type] = Ro[e.type] || []), Ro[e.type].push(e.callback), v0(e.type))
  }
  function At(e, t) {
    var r, n
    if (!(!e || !Ro[e]))
      try {
        for (var i = Nt(Ro[e] || []), o = i.next(); !o.done; o = i.next()) {
          var a = o.value
          try {
            a(t)
          } catch (s) {
            R.error(
              `Error while triggering instrumentation handler.
Type: ` +
                e +
                `
Name: ` +
                Lt(a) +
                `
Error: ` +
                s
            )
          }
        }
      } catch (s) {
        r = { error: s }
      } finally {
        try {
          o && !o.done && (n = i.return) && n.call(i)
        } finally {
          if (r) throw r.error
        }
      }
  }
  function g0() {
    'console' in ye &&
      ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (e) {
        e in ye.console &&
          ge(ye.console, e, function (t) {
            return function () {
              for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
              At('console', { args: r, level: e }), t && Function.prototype.apply.call(t, ye.console, r)
            }
          })
      })
  }
  function y0() {
    !_h() ||
      ge(ye, 'fetch', function (e) {
        return function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
          var n = { args: t, fetchData: { method: _0(t), url: w0(t) }, startTimestamp: Date.now() }
          return (
            At('fetch', k({}, n)),
            e.apply(ye, t).then(
              function (i) {
                return At('fetch', k(k({}, n), { endTimestamp: Date.now(), response: i })), i
              },
              function (i) {
                throw (At('fetch', k(k({}, n), { endTimestamp: Date.now(), error: i })), i)
              }
            )
          )
        }
      })
  }
  function _0(e) {
    return (
      e === void 0 && (e = []),
      'Request' in ye && it(e[0], Request) && e[0].method
        ? String(e[0].method).toUpperCase()
        : e[1] && e[1].method
        ? String(e[1].method).toUpperCase()
        : 'GET'
    )
  }
  function w0(e) {
    return (
      e === void 0 && (e = []),
      typeof e[0] == 'string' ? e[0] : 'Request' in ye && it(e[0], Request) ? e[0].url : String(e[0])
    )
  }
  function E0() {
    if ('XMLHttpRequest' in ye) {
      var e = [],
        t = [],
        r = XMLHttpRequest.prototype
      ge(r, 'open', function (n) {
        return function () {
          for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o]
          var a = this,
            s = i[1]
          ;(a.__sentry_xhr__ = { method: Xt(i[0]) ? i[0].toUpperCase() : i[0], url: i[1] }),
            Xt(s) && a.__sentry_xhr__.method === 'POST' && s.match(/sentry_key/) && (a.__sentry_own_request__ = !0)
          var u = function () {
            if (a.readyState === 4) {
              try {
                a.__sentry_xhr__ && (a.__sentry_xhr__.status_code = a.status)
              } catch (m) {}
              try {
                var l = e.indexOf(a)
                if (l !== -1) {
                  e.splice(l)
                  var c = t.splice(l)[0]
                  a.__sentry_xhr__ && c[0] !== void 0 && (a.__sentry_xhr__.body = c[0])
                }
              } catch (m) {}
              At('xhr', { args: i, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: a })
            }
          }
          return (
            'onreadystatechange' in a && typeof a.onreadystatechange == 'function'
              ? ge(a, 'onreadystatechange', function (l) {
                  return function () {
                    for (var c = [], m = 0; m < arguments.length; m++) c[m] = arguments[m]
                    return u(), l.apply(a, c)
                  }
                })
              : a.addEventListener('readystatechange', u),
            n.apply(a, i)
          )
        }
      }),
        ge(r, 'send', function (n) {
          return function () {
            for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o]
            return (
              e.push(this), t.push(i), At('xhr', { args: i, startTimestamp: Date.now(), xhr: this }), n.apply(this, i)
            )
          }
        })
    }
  }
  var _s
  function S0() {
    if (!Eh()) return
    var e = ye.onpopstate
    ye.onpopstate = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
      var i = ye.location.href,
        o = _s
      if (((_s = i), At('history', { from: o, to: i }), e))
        try {
          return e.apply(this, r)
        } catch (a) {}
    }
    function t(r) {
      return function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
        var o = n.length > 2 ? n[2] : void 0
        if (o) {
          var a = _s,
            s = String(o)
          ;(_s = s), At('history', { from: a, to: s })
        }
        return r.apply(this, n)
      }
    }
    ge(ye.history, 'pushState', t), ge(ye.history, 'replaceState', t)
  }
  var x0 = 1e3,
    ws,
    Es
  function T0(e, t) {
    if (!e || e.type !== t.type) return !0
    try {
      if (e.target !== t.target) return !0
    } catch (r) {}
    return !1
  }
  function k0(e) {
    if (e.type !== 'keypress') return !1
    try {
      var t = e.target
      if (!t || !t.tagName) return !0
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) return !1
    } catch (r) {}
    return !0
  }
  function xh(e, t) {
    return (
      t === void 0 && (t = !1),
      function (r) {
        if (!(!r || Es === r) && !k0(r)) {
          var n = r.type === 'keypress' ? 'input' : r.type
          ws === void 0
            ? (e({ event: r, name: n, global: t }), (Es = r))
            : T0(Es, r) && (e({ event: r, name: n, global: t }), (Es = r)),
            clearTimeout(ws),
            (ws = ye.setTimeout(function () {
              ws = void 0
            }, x0))
        }
      }
    )
  }
  function O0() {
    if ('document' in ye) {
      var e = At.bind(null, 'dom'),
        t = xh(e, !0)
      ye.document.addEventListener('click', t, !1),
        ye.document.addEventListener('keypress', t, !1),
        ['EventTarget', 'Node'].forEach(function (r) {
          var n = ye[r] && ye[r].prototype
          !n ||
            !n.hasOwnProperty ||
            !n.hasOwnProperty('addEventListener') ||
            (ge(n, 'addEventListener', function (i) {
              return function (o, a, s) {
                if (o === 'click' || o == 'keypress')
                  try {
                    var u = this,
                      l = (u.__sentry_instrumentation_handlers__ = u.__sentry_instrumentation_handlers__ || {}),
                      c = (l[o] = l[o] || { refCount: 0 })
                    if (!c.handler) {
                      var m = xh(e)
                      ;(c.handler = m), i.call(this, o, m, s)
                    }
                    c.refCount += 1
                  } catch (h) {}
                return i.call(this, o, a, s)
              }
            }),
            ge(n, 'removeEventListener', function (i) {
              return function (o, a, s) {
                if (o === 'click' || o == 'keypress')
                  try {
                    var u = this,
                      l = u.__sentry_instrumentation_handlers__ || {},
                      c = l[o]
                    c &&
                      ((c.refCount -= 1),
                      c.refCount <= 0 && (i.call(this, o, c.handler, s), (c.handler = void 0), delete l[o]),
                      Object.keys(l).length === 0 && delete u.__sentry_instrumentation_handlers__)
                  } catch (m) {}
                return i.call(this, o, a, s)
              }
            }))
        })
    }
  }
  var kf = null
  function b0() {
    ;(kf = ye.onerror),
      (ye.onerror = function (e, t, r, n, i) {
        return At('error', { column: n, error: i, line: r, msg: e, url: t }), kf ? kf.apply(this, arguments) : !1
      })
  }
  var Of = null
  function P0() {
    ;(Of = ye.onunhandledrejection),
      (ye.onunhandledrejection = function (e) {
        return At('unhandledrejection', e), Of ? Of.apply(this, arguments) : !0
      })
  }
  var pr
  ;(function (e) {
    ;(e.PENDING = 'PENDING'), (e.RESOLVED = 'RESOLVED'), (e.REJECTED = 'REJECTED')
  })(pr || (pr = {}))
  var ke = (function () {
    function e(t) {
      var r = this
      ;(this._state = pr.PENDING),
        (this._handlers = []),
        (this._resolve = function (n) {
          r._setResult(pr.RESOLVED, n)
        }),
        (this._reject = function (n) {
          r._setResult(pr.REJECTED, n)
        }),
        (this._setResult = function (n, i) {
          if (r._state === pr.PENDING) {
            if (Qt(i)) {
              i.then(r._resolve, r._reject)
              return
            }
            ;(r._state = n), (r._value = i), r._executeHandlers()
          }
        }),
        (this._attachHandler = function (n) {
          ;(r._handlers = r._handlers.concat(n)), r._executeHandlers()
        }),
        (this._executeHandlers = function () {
          if (r._state !== pr.PENDING) {
            var n = r._handlers.slice()
            ;(r._handlers = []),
              n.forEach(function (i) {
                i.done ||
                  (r._state === pr.RESOLVED && i.onfulfilled && i.onfulfilled(r._value),
                  r._state === pr.REJECTED && i.onrejected && i.onrejected(r._value),
                  (i.done = !0))
              })
          }
        })
      try {
        t(this._resolve, this._reject)
      } catch (n) {
        this._reject(n)
      }
    }
    return (
      (e.resolve = function (t) {
        return new e(function (r) {
          r(t)
        })
      }),
      (e.reject = function (t) {
        return new e(function (r, n) {
          n(t)
        })
      }),
      (e.all = function (t) {
        return new e(function (r, n) {
          if (!Array.isArray(t)) {
            n(new TypeError('Promise.all requires an array as input.'))
            return
          }
          if (t.length === 0) {
            r([])
            return
          }
          var i = t.length,
            o = []
          t.forEach(function (a, s) {
            e.resolve(a)
              .then(function (u) {
                ;(o[s] = u), (i -= 1), i === 0 && r(o)
              })
              .then(null, n)
          })
        })
      }),
      (e.prototype.then = function (t, r) {
        var n = this
        return new e(function (i, o) {
          n._attachHandler({
            done: !1,
            onfulfilled: function (a) {
              if (!t) {
                i(a)
                return
              }
              try {
                i(t(a))
                return
              } catch (s) {
                o(s)
                return
              }
            },
            onrejected: function (a) {
              if (!r) {
                o(a)
                return
              }
              try {
                i(r(a))
                return
              } catch (s) {
                o(s)
                return
              }
            },
          })
        })
      }),
      (e.prototype.catch = function (t) {
        return this.then(function (r) {
          return r
        }, t)
      }),
      (e.prototype.finally = function (t) {
        var r = this
        return new e(function (n, i) {
          var o, a
          return r
            .then(
              function (s) {
                ;(a = !1), (o = s), t && t()
              },
              function (s) {
                ;(a = !0), (o = s), t && t()
              }
            )
            .then(function () {
              if (a) {
                i(o)
                return
              }
              n(o)
            })
        })
      }),
      (e.prototype.toString = function () {
        return '[object SyncPromise]'
      }),
      e
    )
  })()
  var Th = (function () {
    function e(t) {
      ;(this._limit = t), (this._buffer = [])
    }
    return (
      (e.prototype.isReady = function () {
        return this._limit === void 0 || this.length() < this._limit
      }),
      (e.prototype.add = function (t) {
        var r = this
        if (!this.isReady()) return ke.reject(new Ee('Not adding Promise due to buffer limit reached.'))
        var n = t()
        return (
          this._buffer.indexOf(n) === -1 && this._buffer.push(n),
          n
            .then(function () {
              return r.remove(n)
            })
            .then(null, function () {
              return r.remove(n).then(null, function () {})
            }),
          n
        )
      }),
      (e.prototype.remove = function (t) {
        var r = this._buffer.splice(this._buffer.indexOf(t), 1)[0]
        return r
      }),
      (e.prototype.length = function () {
        return this._buffer.length
      }),
      (e.prototype.drain = function (t) {
        var r = this
        return new ke(function (n) {
          var i = setTimeout(function () {
            t && t > 0 && n(!1)
          }, t)
          ke.all(r._buffer)
            .then(function () {
              clearTimeout(i), n(!0)
            })
            .then(null, function () {
              n(!0)
            })
        })
      }),
      e
    )
  })()
  var bf = {
    nowSeconds: function () {
      return Date.now() / 1e3
    },
  }
  function C0() {
    var e = Z().performance
    if (!(!e || !e.now)) {
      var t = Date.now() - e.now()
      return {
        now: function () {
          return e.now()
        },
        timeOrigin: t,
      }
    }
  }
  function I0() {
    try {
      var e = Zt(module, 'perf_hooks')
      return e.performance
    } catch (t) {
      return
    }
  }
  var Pf = Jt() ? I0() : C0(),
    kh =
      Pf === void 0
        ? bf
        : {
            nowSeconds: function () {
              return (Pf.timeOrigin + Pf.now()) / 1e3
            },
          },
    mi = bf.nowSeconds.bind(bf),
    Ss = kh.nowSeconds.bind(kh),
    wn = Ss
  var xs,
    hi = (function () {
      var e = Z().performance
      if (!e || !e.now) {
        xs = 'none'
        return
      }
      var t = 3600 * 1e3,
        r = e.now(),
        n = Date.now(),
        i = e.timeOrigin ? Math.abs(e.timeOrigin + r - n) : t,
        o = i < t,
        a = e.timing && e.timing.navigationStart,
        s = typeof a == 'number',
        u = s ? Math.abs(a + r - n) : t,
        l = u < t
      return o || l
        ? i <= u
          ? ((xs = 'timeOrigin'), e.timeOrigin)
          : ((xs = 'navigationStart'), a)
        : ((xs = 'dateNow'), n)
    })()
  var Oh = 100,
    mr = (function () {
      function e() {
        ;(this._notifyingListeners = !1),
          (this._scopeListeners = []),
          (this._eventProcessors = []),
          (this._breadcrumbs = []),
          (this._user = {}),
          (this._tags = {}),
          (this._extra = {}),
          (this._contexts = {})
      }
      return (
        (e.clone = function (t) {
          var r = new e()
          return (
            t &&
              ((r._breadcrumbs = Y(t._breadcrumbs)),
              (r._tags = k({}, t._tags)),
              (r._extra = k({}, t._extra)),
              (r._contexts = k({}, t._contexts)),
              (r._user = t._user),
              (r._level = t._level),
              (r._span = t._span),
              (r._session = t._session),
              (r._transactionName = t._transactionName),
              (r._fingerprint = t._fingerprint),
              (r._eventProcessors = Y(t._eventProcessors)),
              (r._requestSession = t._requestSession)),
            r
          )
        }),
        (e.prototype.addScopeListener = function (t) {
          this._scopeListeners.push(t)
        }),
        (e.prototype.addEventProcessor = function (t) {
          return this._eventProcessors.push(t), this
        }),
        (e.prototype.setUser = function (t) {
          return (
            (this._user = t || {}),
            this._session && this._session.update({ user: t }),
            this._notifyScopeListeners(),
            this
          )
        }),
        (e.prototype.getUser = function () {
          return this._user
        }),
        (e.prototype.getRequestSession = function () {
          return this._requestSession
        }),
        (e.prototype.setRequestSession = function (t) {
          return (this._requestSession = t), this
        }),
        (e.prototype.setTags = function (t) {
          return (this._tags = k(k({}, this._tags), t)), this._notifyScopeListeners(), this
        }),
        (e.prototype.setTag = function (t, r) {
          var n
          return (this._tags = k(k({}, this._tags), ((n = {}), (n[t] = r), n))), this._notifyScopeListeners(), this
        }),
        (e.prototype.setExtras = function (t) {
          return (this._extra = k(k({}, this._extra), t)), this._notifyScopeListeners(), this
        }),
        (e.prototype.setExtra = function (t, r) {
          var n
          return (this._extra = k(k({}, this._extra), ((n = {}), (n[t] = r), n))), this._notifyScopeListeners(), this
        }),
        (e.prototype.setFingerprint = function (t) {
          return (this._fingerprint = t), this._notifyScopeListeners(), this
        }),
        (e.prototype.setLevel = function (t) {
          return (this._level = t), this._notifyScopeListeners(), this
        }),
        (e.prototype.setTransactionName = function (t) {
          return (this._transactionName = t), this._notifyScopeListeners(), this
        }),
        (e.prototype.setTransaction = function (t) {
          return this.setTransactionName(t)
        }),
        (e.prototype.setContext = function (t, r) {
          var n
          return (
            r === null
              ? delete this._contexts[t]
              : (this._contexts = k(k({}, this._contexts), ((n = {}), (n[t] = r), n))),
            this._notifyScopeListeners(),
            this
          )
        }),
        (e.prototype.setSpan = function (t) {
          return (this._span = t), this._notifyScopeListeners(), this
        }),
        (e.prototype.getSpan = function () {
          return this._span
        }),
        (e.prototype.getTransaction = function () {
          var t,
            r,
            n,
            i,
            o = this.getSpan()
          if ((t = o) === null || t === void 0 ? void 0 : t.transaction)
            return (r = o) === null || r === void 0 ? void 0 : r.transaction
          if (
            (i = (n = o) === null || n === void 0 ? void 0 : n.spanRecorder) === null || i === void 0
              ? void 0
              : i.spans[0]
          )
            return o.spanRecorder.spans[0]
        }),
        (e.prototype.setSession = function (t) {
          return t ? (this._session = t) : delete this._session, this._notifyScopeListeners(), this
        }),
        (e.prototype.getSession = function () {
          return this._session
        }),
        (e.prototype.update = function (t) {
          if (!t) return this
          if (typeof t == 'function') {
            var r = t(this)
            return r instanceof e ? r : this
          }
          return (
            t instanceof e
              ? ((this._tags = k(k({}, this._tags), t._tags)),
                (this._extra = k(k({}, this._extra), t._extra)),
                (this._contexts = k(k({}, this._contexts), t._contexts)),
                t._user && Object.keys(t._user).length && (this._user = t._user),
                t._level && (this._level = t._level),
                t._fingerprint && (this._fingerprint = t._fingerprint),
                t._requestSession && (this._requestSession = t._requestSession))
              : Kt(t) &&
                ((t = t),
                (this._tags = k(k({}, this._tags), t.tags)),
                (this._extra = k(k({}, this._extra), t.extra)),
                (this._contexts = k(k({}, this._contexts), t.contexts)),
                t.user && (this._user = t.user),
                t.level && (this._level = t.level),
                t.fingerprint && (this._fingerprint = t.fingerprint),
                t.requestSession && (this._requestSession = t.requestSession)),
            this
          )
        }),
        (e.prototype.clear = function () {
          return (
            (this._breadcrumbs = []),
            (this._tags = {}),
            (this._extra = {}),
            (this._user = {}),
            (this._contexts = {}),
            (this._level = void 0),
            (this._transactionName = void 0),
            (this._fingerprint = void 0),
            (this._requestSession = void 0),
            (this._span = void 0),
            (this._session = void 0),
            this._notifyScopeListeners(),
            this
          )
        }),
        (e.prototype.addBreadcrumb = function (t, r) {
          var n = typeof r == 'number' ? Math.min(r, Oh) : Oh
          if (n <= 0) return this
          var i = k({ timestamp: mi() }, t)
          return (this._breadcrumbs = Y(this._breadcrumbs, [i]).slice(-n)), this._notifyScopeListeners(), this
        }),
        (e.prototype.clearBreadcrumbs = function () {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this
        }),
        (e.prototype.applyToEvent = function (t, r) {
          var n
          if (
            (this._extra && Object.keys(this._extra).length && (t.extra = k(k({}, this._extra), t.extra)),
            this._tags && Object.keys(this._tags).length && (t.tags = k(k({}, this._tags), t.tags)),
            this._user && Object.keys(this._user).length && (t.user = k(k({}, this._user), t.user)),
            this._contexts && Object.keys(this._contexts).length && (t.contexts = k(k({}, this._contexts), t.contexts)),
            this._level && (t.level = this._level),
            this._transactionName && (t.transaction = this._transactionName),
            this._span)
          ) {
            t.contexts = k({ trace: this._span.getTraceContext() }, t.contexts)
            var i = (n = this._span.transaction) === null || n === void 0 ? void 0 : n.name
            i && (t.tags = k({ transaction: i }, t.tags))
          }
          return (
            this._applyFingerprint(t),
            (t.breadcrumbs = Y(t.breadcrumbs || [], this._breadcrumbs)),
            (t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
            this._notifyEventProcessors(Y(bh(), this._eventProcessors), t, r)
          )
        }),
        (e.prototype._notifyEventProcessors = function (t, r, n, i) {
          var o = this
          return (
            i === void 0 && (i = 0),
            new ke(function (a, s) {
              var u = t[i]
              if (r === null || typeof u != 'function') a(r)
              else {
                var l = u(k({}, r), n)
                Qt(l)
                  ? l
                      .then(function (c) {
                        return o._notifyEventProcessors(t, c, n, i + 1).then(a)
                      })
                      .then(null, s)
                  : o
                      ._notifyEventProcessors(t, l, n, i + 1)
                      .then(a)
                      .then(null, s)
              }
            })
          )
        }),
        (e.prototype._notifyScopeListeners = function () {
          var t = this
          this._notifyingListeners ||
            ((this._notifyingListeners = !0),
            this._scopeListeners.forEach(function (r) {
              r(t)
            }),
            (this._notifyingListeners = !1))
        }),
        (e.prototype._applyFingerprint = function (t) {
          ;(t.fingerprint = t.fingerprint ? (Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint]) : []),
            this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
            t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }),
        e
      )
    })()
  function bh() {
    var e = Z()
    return (
      (e.__SENTRY__ = e.__SENTRY__ || {}),
      (e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || []),
      e.__SENTRY__.globalEventProcessors
    )
  }
  function jt(e) {
    bh().push(e)
  }
  var Ph = (function () {
    function e(t) {
      ;(this.errors = 0),
        (this.sid = bt()),
        (this.duration = 0),
        (this.status = mt.Ok),
        (this.init = !0),
        (this.ignoreDuration = !1)
      var r = Ss()
      ;(this.timestamp = r), (this.started = r), t && this.update(t)
    }
    return (
      (e.prototype.update = function (t) {
        if (
          (t === void 0 && (t = {}),
          t.user &&
            (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address),
            !this.did && !t.did && (this.did = t.user.id || t.user.email || t.user.username)),
          (this.timestamp = t.timestamp || Ss()),
          t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
          t.sid && (this.sid = t.sid.length === 32 ? t.sid : bt()),
          t.init !== void 0 && (this.init = t.init),
          !this.did && t.did && (this.did = '' + t.did),
          typeof t.started == 'number' && (this.started = t.started),
          this.ignoreDuration)
        )
          this.duration = void 0
        else if (typeof t.duration == 'number') this.duration = t.duration
        else {
          var r = this.timestamp - this.started
          this.duration = r >= 0 ? r : 0
        }
        t.release && (this.release = t.release),
          t.environment && (this.environment = t.environment),
          !this.ipAddress && t.ipAddress && (this.ipAddress = t.ipAddress),
          !this.userAgent && t.userAgent && (this.userAgent = t.userAgent),
          typeof t.errors == 'number' && (this.errors = t.errors),
          t.status && (this.status = t.status)
      }),
      (e.prototype.close = function (t) {
        t ? this.update({ status: t }) : this.status === mt.Ok ? this.update({ status: mt.Exited }) : this.update()
      }),
      (e.prototype.toJSON = function () {
        return Ft({
          sid: '' + this.sid,
          init: this.init,
          started: new Date(this.started * 1e3).toISOString(),
          timestamp: new Date(this.timestamp * 1e3).toISOString(),
          status: this.status,
          errors: this.errors,
          did: typeof this.did == 'number' || typeof this.did == 'string' ? '' + this.did : void 0,
          duration: this.duration,
          attrs: Ft({
            release: this.release,
            environment: this.environment,
            ip_address: this.ipAddress,
            user_agent: this.userAgent,
          }),
        })
      }),
      e
    )
  })()
  var Cf = 4,
    M0 = 100,
    Wr = (function () {
      function e(t, r, n) {
        r === void 0 && (r = new mr()),
          n === void 0 && (n = Cf),
          (this._version = n),
          (this._stack = [{}]),
          (this.getStackTop().scope = r),
          this.bindClient(t)
      }
      return (
        (e.prototype.isOlderThan = function (t) {
          return this._version < t
        }),
        (e.prototype.bindClient = function (t) {
          var r = this.getStackTop()
          ;(r.client = t), t && t.setupIntegrations && t.setupIntegrations()
        }),
        (e.prototype.pushScope = function () {
          var t = mr.clone(this.getScope())
          return this.getStack().push({ client: this.getClient(), scope: t }), t
        }),
        (e.prototype.popScope = function () {
          return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }),
        (e.prototype.withScope = function (t) {
          var r = this.pushScope()
          try {
            t(r)
          } finally {
            this.popScope()
          }
        }),
        (e.prototype.getClient = function () {
          return this.getStackTop().client
        }),
        (e.prototype.getScope = function () {
          return this.getStackTop().scope
        }),
        (e.prototype.getStack = function () {
          return this._stack
        }),
        (e.prototype.getStackTop = function () {
          return this._stack[this._stack.length - 1]
        }),
        (e.prototype.captureException = function (t, r) {
          var n = (this._lastEventId = bt()),
            i = r
          if (!r) {
            var o = void 0
            try {
              throw new Error('Sentry syntheticException')
            } catch (a) {
              o = a
            }
            i = { originalException: t, syntheticException: o }
          }
          return this._invokeClient('captureException', t, k(k({}, i), { event_id: n })), n
        }),
        (e.prototype.captureMessage = function (t, r, n) {
          var i = (this._lastEventId = bt()),
            o = n
          if (!n) {
            var a = void 0
            try {
              throw new Error(t)
            } catch (s) {
              a = s
            }
            o = { originalException: t, syntheticException: a }
          }
          return this._invokeClient('captureMessage', t, r, k(k({}, o), { event_id: i })), i
        }),
        (e.prototype.captureEvent = function (t, r) {
          var n = (this._lastEventId = bt())
          return this._invokeClient('captureEvent', t, k(k({}, r), { event_id: n })), n
        }),
        (e.prototype.lastEventId = function () {
          return this._lastEventId
        }),
        (e.prototype.addBreadcrumb = function (t, r) {
          var n = this.getStackTop(),
            i = n.scope,
            o = n.client
          if (!(!i || !o)) {
            var a = (o.getOptions && o.getOptions()) || {},
              s = a.beforeBreadcrumb,
              u = s === void 0 ? null : s,
              l = a.maxBreadcrumbs,
              c = l === void 0 ? M0 : l
            if (!(c <= 0)) {
              var m = mi(),
                h = k({ timestamp: m }, t),
                _ = u
                  ? di(function () {
                      return u(h, r)
                    })
                  : h
              _ !== null && i.addBreadcrumb(_, c)
            }
          }
        }),
        (e.prototype.setUser = function (t) {
          var r = this.getScope()
          r && r.setUser(t)
        }),
        (e.prototype.setTags = function (t) {
          var r = this.getScope()
          r && r.setTags(t)
        }),
        (e.prototype.setExtras = function (t) {
          var r = this.getScope()
          r && r.setExtras(t)
        }),
        (e.prototype.setTag = function (t, r) {
          var n = this.getScope()
          n && n.setTag(t, r)
        }),
        (e.prototype.setExtra = function (t, r) {
          var n = this.getScope()
          n && n.setExtra(t, r)
        }),
        (e.prototype.setContext = function (t, r) {
          var n = this.getScope()
          n && n.setContext(t, r)
        }),
        (e.prototype.configureScope = function (t) {
          var r = this.getStackTop(),
            n = r.scope,
            i = r.client
          n && i && t(n)
        }),
        (e.prototype.run = function (t) {
          var r = No(this)
          try {
            t(this)
          } finally {
            No(r)
          }
        }),
        (e.prototype.getIntegration = function (t) {
          var r = this.getClient()
          if (!r) return null
          try {
            return r.getIntegration(t)
          } catch (n) {
            return R.warn('Cannot retrieve integration ' + t.id + ' from the current Hub'), null
          }
        }),
        (e.prototype.startSpan = function (t) {
          return this._callExtensionMethod('startSpan', t)
        }),
        (e.prototype.startTransaction = function (t, r) {
          return this._callExtensionMethod('startTransaction', t, r)
        }),
        (e.prototype.traceHeaders = function () {
          return this._callExtensionMethod('traceHeaders')
        }),
        (e.prototype.captureSession = function (t) {
          if ((t === void 0 && (t = !1), t)) return this.endSession()
          this._sendSessionUpdate()
        }),
        (e.prototype.endSession = function () {
          var t, r, n, i, o
          ;(n =
            (r = (t = this.getStackTop()) === null || t === void 0 ? void 0 : t.scope) === null || r === void 0
              ? void 0
              : r.getSession()) === null ||
            n === void 0 ||
            n.close(),
            this._sendSessionUpdate(),
            (o = (i = this.getStackTop()) === null || i === void 0 ? void 0 : i.scope) === null ||
              o === void 0 ||
              o.setSession()
        }),
        (e.prototype.startSession = function (t) {
          var r = this.getStackTop(),
            n = r.scope,
            i = r.client,
            o = (i && i.getOptions()) || {},
            a = o.release,
            s = o.environment,
            u = Z(),
            l = (u.navigator || {}).userAgent,
            c = new Ph(k(k(k({ release: a, environment: s }, n && { user: n.getUser() }), l && { userAgent: l }), t))
          if (n) {
            var m = n.getSession && n.getSession()
            m && m.status === mt.Ok && m.update({ status: mt.Exited }), this.endSession(), n.setSession(c)
          }
          return c
        }),
        (e.prototype._sendSessionUpdate = function () {
          var t = this.getStackTop(),
            r = t.scope,
            n = t.client
          if (!!r) {
            var i = r.getSession && r.getSession()
            i && n && n.captureSession && n.captureSession(i)
          }
        }),
        (e.prototype._invokeClient = function (t) {
          for (var r, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i]
          var o = this.getStackTop(),
            a = o.scope,
            s = o.client
          s && s[t] && (r = s)[t].apply(r, Y(n, [a]))
        }),
        (e.prototype._callExtensionMethod = function (t) {
          for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n]
          var i = qr(),
            o = i.__SENTRY__
          if (o && o.extensions && typeof o.extensions[t] == 'function') return o.extensions[t].apply(this, r)
          R.warn('Extension method ' + t + " couldn't be found, doing nothing.")
        }),
        e
      )
    })()
  function qr() {
    var e = Z()
    return (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e
  }
  function No(e) {
    var t = qr(),
      r = Ht(t)
    return Ts(t, e), r
  }
  function re() {
    var e = qr()
    return (!Ch(e) || Ht(e).isOlderThan(Cf)) && Ts(e, new Wr()), Jt() ? D0(e) : Ht(e)
  }
  function D0(e) {
    var t, r, n
    try {
      var i =
        (n =
          (r = (t = qr().__SENTRY__) === null || t === void 0 ? void 0 : t.extensions) === null || r === void 0
            ? void 0
            : r.domain) === null || n === void 0
          ? void 0
          : n.active
      if (!i) return Ht(e)
      if (!Ch(i) || Ht(i).isOlderThan(Cf)) {
        var o = Ht(e).getStackTop()
        Ts(i, new Wr(o.client, mr.clone(o.scope)))
      }
      return Ht(i)
    } catch (a) {
      return Ht(e)
    }
  }
  function Ch(e) {
    return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
  }
  function Ht(e) {
    return (
      (e && e.__SENTRY__ && e.__SENTRY__.hub) || ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new Wr())),
      e.__SENTRY__.hub
    )
  }
  function Ts(e, t) {
    return e ? ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), !0) : !1
  }
  function If(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
    var n = re()
    if (n && n[e]) return n[e].apply(n, Y(t))
    throw new Error('No hub defined or ' + e + ' was not found on the hub, please open a bug report.')
  }
  function vi(e, t) {
    var r
    try {
      throw new Error('Sentry syntheticException')
    } catch (n) {
      r = n
    }
    return If('captureException', e, { captureContext: t, originalException: e, syntheticException: r })
  }
  function ks(e) {
    return If('captureEvent', e)
  }
  function gi(e) {
    If('withScope', e)
  }
  var Ih = '7',
    Lo = (function () {
      function e(t, r, n) {
        r === void 0 && (r = {}), (this.dsn = t), (this._dsnObject = new hs(t)), (this.metadata = r), (this._tunnel = n)
      }
      return (
        (e.prototype.getDsn = function () {
          return this._dsnObject
        }),
        (e.prototype.forceEnvelope = function () {
          return !!this._tunnel
        }),
        (e.prototype.getBaseApiEndpoint = function () {
          var t = this.getDsn(),
            r = t.protocol ? t.protocol + ':' : '',
            n = t.port ? ':' + t.port : ''
          return r + '//' + t.host + n + (t.path ? '/' + t.path : '') + '/api/'
        }),
        (e.prototype.getStoreEndpoint = function () {
          return this._getIngestEndpoint('store')
        }),
        (e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
          return this.getStoreEndpoint() + '?' + this._encodedAuth()
        }),
        (e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
          return this.forceEnvelope() ? this._tunnel : this._getEnvelopeEndpoint() + '?' + this._encodedAuth()
        }),
        (e.prototype.getStoreEndpointPath = function () {
          var t = this.getDsn()
          return (t.path ? '/' + t.path : '') + '/api/' + t.projectId + '/store/'
        }),
        (e.prototype.getRequestHeaders = function (t, r) {
          var n = this.getDsn(),
            i = ['Sentry sentry_version=' + Ih]
          return (
            i.push('sentry_client=' + t + '/' + r),
            i.push('sentry_key=' + n.publicKey),
            n.pass && i.push('sentry_secret=' + n.pass),
            { 'Content-Type': 'application/json', 'X-Sentry-Auth': i.join(', ') }
          )
        }),
        (e.prototype.getReportDialogEndpoint = function (t) {
          t === void 0 && (t = {})
          var r = this.getDsn(),
            n = this.getBaseApiEndpoint() + 'embed/error-page/',
            i = []
          i.push('dsn=' + r.toString())
          for (var o in t)
            if (o !== 'dsn')
              if (o === 'user') {
                if (!t.user) continue
                t.user.name && i.push('name=' + encodeURIComponent(t.user.name)),
                  t.user.email && i.push('email=' + encodeURIComponent(t.user.email))
              } else i.push(encodeURIComponent(o) + '=' + encodeURIComponent(t[o]))
          return i.length ? n + '?' + i.join('&') : n
        }),
        (e.prototype._getEnvelopeEndpoint = function () {
          return this._getIngestEndpoint('envelope')
        }),
        (e.prototype._getIngestEndpoint = function (t) {
          if (this._tunnel) return this._tunnel
          var r = this.getBaseApiEndpoint(),
            n = this.getDsn()
          return '' + r + n.projectId + '/' + t + '/'
        }),
        (e.prototype._encodedAuth = function () {
          var t = this.getDsn(),
            r = { sentry_key: t.publicKey, sentry_version: Ih }
          return mh(r)
        }),
        e
      )
    })()
  var Mh = []
  function Dh(e) {
    return e.reduce(function (t, r) {
      return (
        t.every(function (n) {
          return r.name !== n.name
        }) && t.push(r),
        t
      )
    }, [])
  }
  function R0(e) {
    var t = (e.defaultIntegrations && Y(e.defaultIntegrations)) || [],
      r = e.integrations,
      n = Y(Dh(t))
    Array.isArray(r)
      ? (n = Y(
          n.filter(function (a) {
            return r.every(function (s) {
              return s.name !== a.name
            })
          }),
          Dh(r)
        ))
      : typeof r == 'function' && ((n = r(n)), (n = Array.isArray(n) ? n : [n]))
    var i = n.map(function (a) {
        return a.name
      }),
      o = 'Debug'
    return i.indexOf(o) !== -1 && n.push.apply(n, Y(n.splice(i.indexOf(o), 1))), n
  }
  function N0(e) {
    Mh.indexOf(e.name) === -1 && (e.setupOnce(jt, re), Mh.push(e.name), R.log('Integration installed: ' + e.name))
  }
  function Rh(e) {
    var t = {}
    return (
      R0(e).forEach(function (r) {
        ;(t[r.name] = r), N0(r)
      }),
      t
    )
  }
  var Mf = (function () {
    function e(t, r) {
      ;(this._integrations = {}),
        (this._processing = 0),
        (this._backend = new t(r)),
        (this._options = r),
        r.dsn && (this._dsn = new hs(r.dsn))
    }
    return (
      (e.prototype.captureException = function (t, r, n) {
        var i = this,
          o = r && r.event_id
        return (
          this._process(
            this._getBackend()
              .eventFromException(t, r)
              .then(function (a) {
                return i._captureEvent(a, r, n)
              })
              .then(function (a) {
                o = a
              })
          ),
          o
        )
      }),
      (e.prototype.captureMessage = function (t, r, n, i) {
        var o = this,
          a = n && n.event_id,
          s = vn(t) ? this._getBackend().eventFromMessage(String(t), r, n) : this._getBackend().eventFromException(t, n)
        return (
          this._process(
            s
              .then(function (u) {
                return o._captureEvent(u, n, i)
              })
              .then(function (u) {
                a = u
              })
          ),
          a
        )
      }),
      (e.prototype.captureEvent = function (t, r, n) {
        var i = r && r.event_id
        return (
          this._process(
            this._captureEvent(t, r, n).then(function (o) {
              i = o
            })
          ),
          i
        )
      }),
      (e.prototype.captureSession = function (t) {
        if (!this._isEnabled()) {
          R.warn('SDK not enabled, will not capture session.')
          return
        }
        typeof t.release != 'string'
          ? R.warn('Discarded session because of missing or non-string release')
          : (this._sendSession(t), t.update({ init: !1 }))
      }),
      (e.prototype.getDsn = function () {
        return this._dsn
      }),
      (e.prototype.getOptions = function () {
        return this._options
      }),
      (e.prototype.flush = function (t) {
        var r = this
        return this._isClientProcessing(t).then(function (n) {
          return r
            ._getBackend()
            .getTransport()
            .close(t)
            .then(function (i) {
              return n && i
            })
        })
      }),
      (e.prototype.close = function (t) {
        var r = this
        return this.flush(t).then(function (n) {
          return (r.getOptions().enabled = !1), n
        })
      }),
      (e.prototype.setupIntegrations = function () {
        this._isEnabled() && (this._integrations = Rh(this._options))
      }),
      (e.prototype.getIntegration = function (t) {
        try {
          return this._integrations[t.id] || null
        } catch (r) {
          return R.warn('Cannot retrieve integration ' + t.id + ' from the current Client'), null
        }
      }),
      (e.prototype._updateSessionFromEvent = function (t, r) {
        var n,
          i,
          o = !1,
          a = !1,
          s = r.exception && r.exception.values
        if (s) {
          a = !0
          try {
            for (var u = Nt(s), l = u.next(); !l.done; l = u.next()) {
              var c = l.value,
                m = c.mechanism
              if (m && m.handled === !1) {
                o = !0
                break
              }
            }
          } catch (S) {
            n = { error: S }
          } finally {
            try {
              l && !l.done && (i = u.return) && i.call(u)
            } finally {
              if (n) throw n.error
            }
          }
        }
        var h = t.status === mt.Ok,
          _ = (h && t.errors === 0) || (h && o)
        _ &&
          (t.update(k(k({}, o && { status: mt.Crashed }), { errors: t.errors || Number(a || o) })),
          this.captureSession(t))
      }),
      (e.prototype._sendSession = function (t) {
        this._getBackend().sendSession(t)
      }),
      (e.prototype._isClientProcessing = function (t) {
        var r = this
        return new ke(function (n) {
          var i = 0,
            o = 1,
            a = setInterval(function () {
              r._processing == 0 ? (clearInterval(a), n(!0)) : ((i += o), t && i >= t && (clearInterval(a), n(!1)))
            }, o)
        })
      }),
      (e.prototype._getBackend = function () {
        return this._backend
      }),
      (e.prototype._isEnabled = function () {
        return this.getOptions().enabled !== !1 && this._dsn !== void 0
      }),
      (e.prototype._prepareEvent = function (t, r, n) {
        var i = this,
          o = this.getOptions().normalizeDepth,
          a = o === void 0 ? 3 : o,
          s = k(k({}, t), {
            event_id: t.event_id || (n && n.event_id ? n.event_id : bt()),
            timestamp: t.timestamp || mi(),
          })
        this._applyClientOptions(s), this._applyIntegrationsMetadata(s)
        var u = r
        n && n.captureContext && (u = mr.clone(u).update(n.captureContext))
        var l = ke.resolve(s)
        return (
          u && (l = u.applyToEvent(s, n)),
          l.then(function (c) {
            return typeof a == 'number' && a > 0 ? i._normalizeEvent(c, a) : c
          })
        )
      }),
      (e.prototype._normalizeEvent = function (t, r) {
        if (!t) return null
        var n = k(
          k(
            k(
              k(
                k({}, t),
                t.breadcrumbs && {
                  breadcrumbs: t.breadcrumbs.map(function (i) {
                    return k(k({}, i), i.data && { data: pi(i.data, r) })
                  }),
                }
              ),
              t.user && { user: pi(t.user, r) }
            ),
            t.contexts && { contexts: pi(t.contexts, r) }
          ),
          t.extra && { extra: pi(t.extra, r) }
        )
        return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace), n
      }),
      (e.prototype._applyClientOptions = function (t) {
        var r = this.getOptions(),
          n = r.environment,
          i = r.release,
          o = r.dist,
          a = r.maxValueLength,
          s = a === void 0 ? 250 : a
        'environment' in t || (t.environment = 'environment' in r ? n : 'production'),
          t.release === void 0 && i !== void 0 && (t.release = i),
          t.dist === void 0 && o !== void 0 && (t.dist = o),
          t.message && (t.message = gn(t.message, s))
        var u = t.exception && t.exception.values && t.exception.values[0]
        u && u.value && (u.value = gn(u.value, s))
        var l = t.request
        l && l.url && (l.url = gn(l.url, s))
      }),
      (e.prototype._applyIntegrationsMetadata = function (t) {
        var r = Object.keys(this._integrations)
        r.length > 0 && ((t.sdk = t.sdk || {}), (t.sdk.integrations = Y(t.sdk.integrations || [], r)))
      }),
      (e.prototype._sendEvent = function (t) {
        this._getBackend().sendEvent(t)
      }),
      (e.prototype._captureEvent = function (t, r, n) {
        return this._processEvent(t, r, n).then(
          function (i) {
            return i.event_id
          },
          function (i) {
            R.error(i)
          }
        )
      }),
      (e.prototype._processEvent = function (t, r, n) {
        var i = this,
          o = this.getOptions(),
          a = o.beforeSend,
          s = o.sampleRate
        if (!this._isEnabled()) return ke.reject(new Ee('SDK not enabled, will not capture event.'))
        var u = t.type === 'transaction'
        return !u && typeof s == 'number' && Math.random() > s
          ? ke.reject(
              new Ee("Discarding event because it's not included in the random sample (sampling rate = " + s + ')')
            )
          : this._prepareEvent(t, n, r)
              .then(function (l) {
                if (l === null) throw new Ee('An event processor returned null, will not send event.')
                var c = r && r.data && r.data.__sentry__ === !0
                if (c || u || !a) return l
                var m = a(l, r)
                return i._ensureBeforeSendRv(m)
              })
              .then(function (l) {
                if (l === null) throw new Ee('`beforeSend` returned `null`, will not send event.')
                var c = n && n.getSession && n.getSession()
                return !u && c && i._updateSessionFromEvent(c, l), i._sendEvent(l), l
              })
              .then(null, function (l) {
                throw l instanceof Ee
                  ? l
                  : (i.captureException(l, { data: { __sentry__: !0 }, originalException: l }),
                    new Ee(
                      `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ` + l
                    ))
              })
      }),
      (e.prototype._process = function (t) {
        var r = this
        ;(this._processing += 1),
          t.then(
            function (n) {
              return (r._processing -= 1), n
            },
            function (n) {
              return (r._processing -= 1), n
            }
          )
      }),
      (e.prototype._ensureBeforeSendRv = function (t) {
        var r = '`beforeSend` method has to return `null` or a valid event.'
        if (Qt(t))
          return t.then(
            function (n) {
              if (!(Kt(n) || n === null)) throw new Ee(r)
              return n
            },
            function (n) {
              throw new Ee('beforeSend rejected with ' + n)
            }
          )
        if (!(Kt(t) || t === null)) throw new Ee(r)
        return t
      }),
      e
    )
  })()
  var Nh = (function () {
    function e() {}
    return (
      (e.prototype.sendEvent = function (t) {
        return ke.resolve({
          reason: 'NoopTransport: Event has been skipped because no Dsn is configured.',
          status: Yt.Skipped,
        })
      }),
      (e.prototype.close = function (t) {
        return ke.resolve(!0)
      }),
      e
    )
  })()
  var Df = (function () {
    function e(t) {
      ;(this._options = t),
        this._options.dsn || R.warn('No DSN provided, backend will not do anything.'),
        (this._transport = this._setupTransport())
    }
    return (
      (e.prototype.eventFromException = function (t, r) {
        throw new Ee('Backend has to implement `eventFromException` method')
      }),
      (e.prototype.eventFromMessage = function (t, r, n) {
        throw new Ee('Backend has to implement `eventFromMessage` method')
      }),
      (e.prototype.sendEvent = function (t) {
        this._transport.sendEvent(t).then(null, function (r) {
          R.error('Error while sending event: ' + r)
        })
      }),
      (e.prototype.sendSession = function (t) {
        if (!this._transport.sendSession) {
          R.warn("Dropping session because custom transport doesn't implement sendSession")
          return
        }
        this._transport.sendSession(t).then(null, function (r) {
          R.error('Error while sending session: ' + r)
        })
      }),
      (e.prototype.getTransport = function () {
        return this._transport
      }),
      (e.prototype._setupTransport = function () {
        return new Nh()
      }),
      e
    )
  })()
  function Lh(e) {
    if (!(!e.metadata || !e.metadata.sdk)) {
      var t = e.metadata.sdk,
        r = t.name,
        n = t.version
      return { name: r, version: n }
    }
  }
  function L0(e, t) {
    return (
      t &&
        ((e.sdk = e.sdk || {}),
        (e.sdk.name = e.sdk.name || t.name),
        (e.sdk.version = e.sdk.version || t.version),
        (e.sdk.integrations = Y(e.sdk.integrations || [], t.integrations || [])),
        (e.sdk.packages = Y(e.sdk.packages || [], t.packages || []))),
      e
    )
  }
  function Fo(e, t) {
    var r = Lh(t),
      n = JSON.stringify(
        k(
          k({ sent_at: new Date().toISOString() }, r && { sdk: r }),
          t.forceEnvelope() && { dsn: t.getDsn().toString() }
        )
      ),
      i = 'aggregates' in e ? 'sessions' : 'session',
      o = JSON.stringify({ type: i })
    return {
      body:
        n +
        `
` +
        o +
        `
` +
        JSON.stringify(e),
      type: i,
      url: t.getEnvelopeEndpointWithUrlEncodedAuth(),
    }
  }
  function Ao(e, t) {
    var r = Lh(t),
      n = e.type || 'event',
      i = n === 'transaction' || t.forceEnvelope(),
      o = e.debug_meta || {},
      a = o.transactionSampling,
      s = cs(o, ['transactionSampling']),
      u = a || {},
      l = u.method,
      c = u.rate
    Object.keys(s).length === 0 ? delete e.debug_meta : (e.debug_meta = s)
    var m = {
      body: JSON.stringify(r ? L0(e, t.metadata.sdk) : e),
      type: n,
      url: i ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth(),
    }
    if (i) {
      var h = JSON.stringify(
          k(
            k({ event_id: e.event_id, sent_at: new Date().toISOString() }, r && { sdk: r }),
            t.forceEnvelope() && { dsn: t.getDsn().toString() }
          )
        ),
        _ = JSON.stringify({ type: n, sample_rates: [{ id: l, rate: c }] }),
        S =
          h +
          `
` +
          _ +
          `
` +
          m.body
      m.body = S
    }
    return m
  }
  function Rf(e, t) {
    var r
    t.debug === !0 && R.enable()
    var n = re()
    ;(r = n.getScope()) === null || r === void 0 || r.update(t.initialScope)
    var i = new e(t)
    n.bindClient(i)
  }
  var Vr = '6.8.0'
  var jo = {}
  wc(jo, { FunctionToString: () => Ah, InboundFilters: () => jh })
  var Fh,
    Ah = (function () {
      function e() {
        this.name = e.id
      }
      return (
        (e.prototype.setupOnce = function () {
          ;(Fh = Function.prototype.toString),
            (Function.prototype.toString = function () {
              for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
              var n = this.__sentry_original__ || this
              return Fh.apply(n, t)
            })
        }),
        (e.id = 'FunctionToString'),
        e
      )
    })()
  var F0 = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
    jh = (function () {
      function e(t) {
        t === void 0 && (t = {}), (this._options = t), (this.name = e.id)
      }
      return (
        (e.prototype.setupOnce = function () {
          jt(function (t) {
            var r = re()
            if (!r) return t
            var n = r.getIntegration(e)
            if (n) {
              var i = r.getClient(),
                o = i ? i.getOptions() : {},
                a = typeof n._mergeOptions == 'function' ? n._mergeOptions(o) : {}
              return typeof n._shouldDropEvent != 'function' ? t : n._shouldDropEvent(t, a) ? null : t
            }
            return t
          })
        }),
        (e.prototype._shouldDropEvent = function (t, r) {
          return this._isSentryError(t, r)
            ? (R.warn(
                `Event dropped due to being internal Sentry Error.
Event: ` + cr(t)
              ),
              !0)
            : this._isIgnoredError(t, r)
            ? (R.warn('Event dropped due to being matched by `ignoreErrors` option.\nEvent: ' + cr(t)), !0)
            : this._isDeniedUrl(t, r)
            ? (R.warn(
                'Event dropped due to being matched by `denyUrls` option.\nEvent: ' +
                  cr(t) +
                  `.
Url: ` +
                  this._getEventFilterUrl(t)
              ),
              !0)
            : this._isAllowedUrl(t, r)
            ? !1
            : (R.warn(
                'Event dropped due to not being matched by `allowUrls` option.\nEvent: ' +
                  cr(t) +
                  `.
Url: ` +
                  this._getEventFilterUrl(t)
              ),
              !0)
        }),
        (e.prototype._isSentryError = function (t, r) {
          if (!r.ignoreInternal) return !1
          try {
            return (
              (t &&
                t.exception &&
                t.exception.values &&
                t.exception.values[0] &&
                t.exception.values[0].type === 'SentryError') ||
              !1
            )
          } catch (n) {
            return !1
          }
        }),
        (e.prototype._isIgnoredError = function (t, r) {
          return !r.ignoreErrors || !r.ignoreErrors.length
            ? !1
            : this._getPossibleEventMessages(t).some(function (n) {
                return r.ignoreErrors.some(function (i) {
                  return yn(n, i)
                })
              })
        }),
        (e.prototype._isDeniedUrl = function (t, r) {
          if (!r.denyUrls || !r.denyUrls.length) return !1
          var n = this._getEventFilterUrl(t)
          return n
            ? r.denyUrls.some(function (i) {
                return yn(n, i)
              })
            : !1
        }),
        (e.prototype._isAllowedUrl = function (t, r) {
          if (!r.allowUrls || !r.allowUrls.length) return !0
          var n = this._getEventFilterUrl(t)
          return n
            ? r.allowUrls.some(function (i) {
                return yn(n, i)
              })
            : !0
        }),
        (e.prototype._mergeOptions = function (t) {
          return (
            t === void 0 && (t = {}),
            {
              allowUrls: Y(
                this._options.whitelistUrls || [],
                this._options.allowUrls || [],
                t.whitelistUrls || [],
                t.allowUrls || []
              ),
              denyUrls: Y(
                this._options.blacklistUrls || [],
                this._options.denyUrls || [],
                t.blacklistUrls || [],
                t.denyUrls || []
              ),
              ignoreErrors: Y(this._options.ignoreErrors || [], t.ignoreErrors || [], F0),
              ignoreInternal: typeof this._options.ignoreInternal != 'undefined' ? this._options.ignoreInternal : !0,
            }
          )
        }),
        (e.prototype._getPossibleEventMessages = function (t) {
          if (t.message) return [t.message]
          if (t.exception)
            try {
              var r = (t.exception.values && t.exception.values[0]) || {},
                n = r.type,
                i = n === void 0 ? '' : n,
                o = r.value,
                a = o === void 0 ? '' : o
              return ['' + a, i + ': ' + a]
            } catch (s) {
              return R.error('Cannot extract message for event ' + cr(t)), []
            }
          return []
        }),
        (e.prototype._getEventFilterUrl = function (t) {
          try {
            if (t.stacktrace) {
              var r = t.stacktrace.frames
              return (r && r[r.length - 1].filename) || null
            }
            if (t.exception) {
              var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames
              return (n && n[n.length - 1].filename) || null
            }
            return null
          } catch (i) {
            return R.error('Cannot extract url for event ' + cr(t)), null
          }
        }),
        (e.id = 'InboundFilters'),
        e
      )
    })()
  var yi = '?',
    G0 =
      /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    Y0 =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    X0 =
      /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    K0 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    Q0 = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    J0 = /Minified React error #\d+;/i
  function $r(e) {
    var t = null,
      r = 0
    e && (typeof e.framesToPop == 'number' ? (r = e.framesToPop) : J0.test(e.message) && (r = 1))
    try {
      if (((t = e_(e)), t)) return Hh(t, r)
    } catch (n) {}
    try {
      if (((t = Z0(e)), t)) return Hh(t, r)
    } catch (n) {}
    return { message: Nf(e), name: e && e.name, stack: [], failed: !0 }
  }
  function Z0(e) {
    if (!e || !e.stack) return null
    for (
      var t = [],
        r = e.stack.split(`
`),
        n,
        i,
        o,
        a,
        s = 0;
      s < r.length;
      ++s
    ) {
      if ((o = G0.exec(r[s]))) {
        var u = o[2] && o[2].indexOf('native') === 0
        ;(n = o[2] && o[2].indexOf('eval') === 0),
          n && (i = Q0.exec(o[2])) && ((o[2] = i[1]), (o[3] = i[2]), (o[4] = i[3]))
        var l = o[2] && o[2].indexOf('address at ') === 0 ? o[2].substr('address at '.length) : o[2],
          c = o[1] || yi,
          m = c.indexOf('safari-extension') !== -1,
          h = c.indexOf('safari-web-extension') !== -1
        ;(m || h) &&
          ((c = c.indexOf('@') !== -1 ? c.split('@')[0] : yi),
          (l = m ? 'safari-extension:' + l : 'safari-web-extension:' + l)),
          (a = { url: l, func: c, args: u ? [o[2]] : [], line: o[3] ? +o[3] : null, column: o[4] ? +o[4] : null })
      } else if ((o = X0.exec(r[s])))
        a = { url: o[2], func: o[1] || yi, args: [], line: +o[3], column: o[4] ? +o[4] : null }
      else if ((o = Y0.exec(r[s])))
        (n = o[3] && o[3].indexOf(' > eval') > -1),
          n && (i = K0.exec(o[3]))
            ? ((o[1] = o[1] || 'eval'), (o[3] = i[1]), (o[4] = i[2]), (o[5] = ''))
            : s === 0 && !o[5] && e.columnNumber !== void 0 && (t[0].column = e.columnNumber + 1),
          (a = {
            url: o[3],
            func: o[1] || yi,
            args: o[2] ? o[2].split(',') : [],
            line: o[4] ? +o[4] : null,
            column: o[5] ? +o[5] : null,
          })
      else continue
      !a.func && a.line && (a.func = yi), t.push(a)
    }
    return t.length ? { message: Nf(e), name: e.name, stack: t } : null
  }
  function e_(e) {
    if (!e || !e.stacktrace) return null
    for (
      var t = e.stacktrace,
        r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
        n = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
        i = t.split(`
`),
        o = [],
        a,
        s = 0;
      s < i.length;
      s += 2
    ) {
      var u = null
      ;(a = r.exec(i[s]))
        ? (u = { url: a[2], func: a[3], args: [], line: +a[1], column: null })
        : (a = n.exec(i[s])) &&
          (u = { url: a[6], func: a[3] || a[4], args: a[5] ? a[5].split(',') : [], line: +a[1], column: +a[2] }),
        u && (!u.func && u.line && (u.func = yi), o.push(u))
    }
    return o.length ? { message: Nf(e), name: e.name, stack: o } : null
  }
  function Hh(e, t) {
    try {
      return k(k({}, e), { stack: e.stack.slice(t) })
    } catch (r) {
      return e
    }
  }
  function Nf(e) {
    var t = e && e.message
    return t ? (t.error && typeof t.error.message == 'string' ? t.error.message : t) : 'No error message'
  }
  var t_ = 50
  function Lf(e) {
    var t = Os(e.stack),
      r = { type: e.name, value: e.message }
    return (
      t && t.length && (r.stacktrace = { frames: t }),
      r.type === void 0 && r.value === '' && (r.value = 'Unrecoverable error caught'),
      r
    )
  }
  function Bh(e, t, r) {
    var n = {
      exception: {
        values: [
          {
            type: ci(e) ? e.constructor.name : r ? 'UnhandledRejection' : 'Error',
            value: 'Non-Error ' + (r ? 'promise rejection' : 'exception') + ' captured with keys: ' + yh(e),
          },
        ],
      },
      extra: { __serialized__: Tf(e) },
    }
    if (t) {
      var i = $r(t),
        o = Os(i.stack)
      n.stacktrace = { frames: o }
    }
    return n
  }
  function Ff(e) {
    var t = Lf(e)
    return { exception: { values: [t] } }
  }
  function Os(e) {
    if (!e || !e.length) return []
    var t = e,
      r = t[0].func || '',
      n = t[t.length - 1].func || ''
    return (
      (r.indexOf('captureMessage') !== -1 || r.indexOf('captureException') !== -1) && (t = t.slice(1)),
      n.indexOf('sentryWrapped') !== -1 && (t = t.slice(0, -1)),
      t
        .slice(0, t_)
        .map(function (i) {
          return {
            colno: i.column === null ? void 0 : i.column,
            filename: i.url || t[0].url,
            function: i.func || '?',
            in_app: !0,
            lineno: i.line === null ? void 0 : i.line,
          }
        })
        .reverse()
    )
  }
  function _i(e, t, r) {
    var n = (r && r.syntheticException) || void 0,
      i = bs(t, n, { attachStacktrace: e.attachStacktrace })
    return (
      dr(i, { handled: !0, type: 'generic' }),
      (i.level = nt.Error),
      r && r.event_id && (i.event_id = r.event_id),
      ke.resolve(i)
    )
  }
  function Af(e, t, r, n) {
    r === void 0 && (r = nt.Info)
    var i = (n && n.syntheticException) || void 0,
      o = jf(t, i, { attachStacktrace: e.attachStacktrace })
    return (o.level = r), n && n.event_id && (o.event_id = n.event_id), ke.resolve(o)
  }
  function bs(e, t, r) {
    r === void 0 && (r = {})
    var n
    if (ms(e) && e.error) {
      var i = e
      return (e = i.error), (n = Ff($r(e))), n
    }
    if (_f(e) || oh(e)) {
      var o = e,
        a = o.name || (_f(o) ? 'DOMError' : 'DOMException'),
        s = o.message ? a + ': ' + o.message : a
      return (
        (n = jf(s, t, r)), Do(n, s), 'code' in o && (n.tags = k(k({}, n.tags), { 'DOMException.code': '' + o.code })), n
      )
    }
    if (ps(e)) return (n = Ff($r(e))), n
    if (Kt(e) || ci(e)) {
      var u = e
      return (n = Bh(u, t, r.rejection)), dr(n, { synthetic: !0 }), n
    }
    return (n = jf(e, t, r)), Do(n, '' + e, void 0), dr(n, { synthetic: !0 }), n
  }
  function jf(e, t, r) {
    r === void 0 && (r = {})
    var n = { message: e }
    if (r.attachStacktrace && t) {
      var i = $r(t),
        o = Os(i.stack)
      n.stacktrace = { frames: o }
    }
    return n
  }
  var r_ = { event: 'error', transaction: 'transaction', session: 'session', attachment: 'attachment' },
    Ps = (function () {
      function e(t) {
        ;(this.options = t),
          (this._buffer = new Th(30)),
          (this._rateLimits = {}),
          (this._api = new Lo(t.dsn, t._metadata, t.tunnel)),
          (this.url = this._api.getStoreEndpointWithUrlEncodedAuth())
      }
      return (
        (e.prototype.sendEvent = function (t) {
          throw new Ee('Transport Class has to implement `sendEvent` method')
        }),
        (e.prototype.close = function (t) {
          return this._buffer.drain(t)
        }),
        (e.prototype._handleResponse = function (t) {
          var r = t.requestType,
            n = t.response,
            i = t.headers,
            o = t.resolve,
            a = t.reject,
            s = Yt.fromHttpCode(n.status),
            u = this._handleRateLimit(i)
          if (
            (u && R.warn('Too many ' + r + ' requests, backing off until: ' + this._disabledUntil(r)), s === Yt.Success)
          ) {
            o({ status: s })
            return
          }
          a(n)
        }),
        (e.prototype._disabledUntil = function (t) {
          var r = r_[t]
          return this._rateLimits[r] || this._rateLimits.all
        }),
        (e.prototype._isRateLimited = function (t) {
          return this._disabledUntil(t) > new Date(Date.now())
        }),
        (e.prototype._handleRateLimit = function (t) {
          var r,
            n,
            i,
            o,
            a = Date.now(),
            s = t['x-sentry-rate-limits'],
            u = t['retry-after']
          if (s) {
            try {
              for (var l = Nt(s.trim().split(',')), c = l.next(); !c.done; c = l.next()) {
                var m = c.value,
                  h = m.split(':', 2),
                  _ = parseInt(h[0], 10),
                  S = (isNaN(_) ? 60 : _) * 1e3
                try {
                  for (var x = ((i = void 0), Nt(h[1].split(';'))), p = x.next(); !p.done; p = x.next()) {
                    var d = p.value
                    this._rateLimits[d || 'all'] = new Date(a + S)
                  }
                } catch (v) {
                  i = { error: v }
                } finally {
                  try {
                    p && !p.done && (o = x.return) && o.call(x)
                  } finally {
                    if (i) throw i.error
                  }
                }
              }
            } catch (v) {
              r = { error: v }
            } finally {
              try {
                c && !c.done && (n = l.return) && n.call(l)
              } finally {
                if (r) throw r.error
              }
            }
            return !0
          } else if (u) return (this._rateLimits.all = new Date(a + dh(a, u))), !0
          return !1
        }),
        e
      )
    })()
  function n_() {
    var e,
      t,
      r = Z()
    if (ys(r.fetch)) return r.fetch.bind(r)
    var n = r.document,
      i = r.fetch
    if (typeof ((e = n) === null || e === void 0 ? void 0 : e.createElement) == 'function')
      try {
        var o = n.createElement('iframe')
        ;(o.hidden = !0),
          n.head.appendChild(o),
          ((t = o.contentWindow) === null || t === void 0 ? void 0 : t.fetch) && (i = o.contentWindow.fetch),
          n.head.removeChild(o)
      } catch (a) {
        R.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', a)
      }
    return i.bind(r)
  }
  var Hf = (function (e) {
    Ve(t, e)
    function t(r, n) {
      n === void 0 && (n = n_())
      var i = e.call(this, r) || this
      return (i._fetch = n), i
    }
    return (
      (t.prototype.sendEvent = function (r) {
        return this._sendRequest(Ao(r, this._api), r)
      }),
      (t.prototype.sendSession = function (r) {
        return this._sendRequest(Fo(r, this._api), r)
      }),
      (t.prototype._sendRequest = function (r, n) {
        var i = this
        if (this._isRateLimited(r.type))
          return Promise.reject({
            event: n,
            type: r.type,
            reason:
              'Transport for ' +
              r.type +
              ' requests locked till ' +
              this._disabledUntil(r.type) +
              ' due to too many requests.',
            status: 429,
          })
        var o = { body: r.body, method: 'POST', referrerPolicy: wh() ? 'origin' : '' }
        return (
          this.options.fetchParameters !== void 0 && Object.assign(o, this.options.fetchParameters),
          this.options.headers !== void 0 && (o.headers = this.options.headers),
          this._buffer.add(function () {
            return new ke(function (a, s) {
              i._fetch(r.url, o)
                .then(function (u) {
                  var l = {
                    'x-sentry-rate-limits': u.headers.get('X-Sentry-Rate-Limits'),
                    'retry-after': u.headers.get('Retry-After'),
                  }
                  i._handleResponse({ requestType: r.type, response: u, headers: l, resolve: a, reject: s })
                })
                .catch(s)
            })
          })
        )
      }),
      t
    )
  })(Ps)
  var Bf = (function (e) {
    Ve(t, e)
    function t() {
      return (e !== null && e.apply(this, arguments)) || this
    }
    return (
      (t.prototype.sendEvent = function (r) {
        return this._sendRequest(Ao(r, this._api), r)
      }),
      (t.prototype.sendSession = function (r) {
        return this._sendRequest(Fo(r, this._api), r)
      }),
      (t.prototype._sendRequest = function (r, n) {
        var i = this
        return this._isRateLimited(r.type)
          ? Promise.reject({
              event: n,
              type: r.type,
              reason:
                'Transport for ' +
                r.type +
                ' requests locked till ' +
                this._disabledUntil(r.type) +
                ' due to too many requests.',
              status: 429,
            })
          : this._buffer.add(function () {
              return new ke(function (o, a) {
                var s = new XMLHttpRequest()
                ;(s.onreadystatechange = function () {
                  if (s.readyState === 4) {
                    var l = {
                      'x-sentry-rate-limits': s.getResponseHeader('X-Sentry-Rate-Limits'),
                      'retry-after': s.getResponseHeader('Retry-After'),
                    }
                    i._handleResponse({ requestType: r.type, response: s, headers: l, resolve: o, reject: a })
                  }
                }),
                  s.open('POST', r.url)
                for (var u in i.options.headers)
                  i.options.headers.hasOwnProperty(u) && s.setRequestHeader(u, i.options.headers[u])
                s.send(r.body)
              })
            })
      }),
      t
    )
  })(Ps)
  var Uh = (function (e) {
    Ve(t, e)
    function t() {
      return (e !== null && e.apply(this, arguments)) || this
    }
    return (
      (t.prototype.eventFromException = function (r, n) {
        return _i(this._options, r, n)
      }),
      (t.prototype.eventFromMessage = function (r, n, i) {
        return n === void 0 && (n = nt.Info), Af(this._options, r, n, i)
      }),
      (t.prototype._setupTransport = function () {
        if (!this._options.dsn) return e.prototype._setupTransport.call(this)
        var r = k(k({}, this._options.transportOptions), {
          dsn: this._options.dsn,
          tunnel: this._options.tunnel,
          _metadata: this._options._metadata,
        })
        return this._options.transport ? new this._options.transport(r) : gs() ? new Hf(r) : new Bf(r)
      }),
      t
    )
  })(Df)
  var Uf = 0
  function zf() {
    return Uf > 0
  }
  function i_() {
    ;(Uf += 1),
      setTimeout(function () {
        Uf -= 1
      })
  }
  function En(e, t, r) {
    if ((t === void 0 && (t = {}), typeof e != 'function')) return e
    try {
      if (e.__sentry__) return e
      if (e.__sentry_wrapped__) return e.__sentry_wrapped__
    } catch (a) {
      return e
    }
    var n = function () {
      var a = Array.prototype.slice.call(arguments)
      try {
        r && typeof r == 'function' && r.apply(this, arguments)
        var s = a.map(function (u) {
          return En(u, t)
        })
        return e.handleEvent ? e.handleEvent.apply(this, s) : e.apply(this, s)
      } catch (u) {
        throw (
          (i_(),
          gi(function (l) {
            l.addEventProcessor(function (c) {
              var m = k({}, c)
              return (
                t.mechanism && (Do(m, void 0, void 0), dr(m, t.mechanism)),
                (m.extra = k(k({}, m.extra), { arguments: a })),
                m
              )
            }),
              vi(u)
          }),
          u)
        )
      }
    }
    try {
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i])
    } catch (a) {}
    ;(e.prototype = e.prototype || {}),
      (n.prototype = e.prototype),
      Object.defineProperty(e, '__sentry_wrapped__', { enumerable: !1, value: n }),
      Object.defineProperties(n, {
        __sentry__: { enumerable: !1, value: !0 },
        __sentry_original__: { enumerable: !1, value: e },
      })
    try {
      var o = Object.getOwnPropertyDescriptor(n, 'name')
      o.configurable &&
        Object.defineProperty(n, 'name', {
          get: function () {
            return e.name
          },
        })
    } catch (a) {}
    return n
  }
  function zh(e) {
    if ((e === void 0 && (e = {}), !e.eventId)) {
      R.error('Missing eventId option in showReportDialog call')
      return
    }
    if (!e.dsn) {
      R.error('Missing dsn option in showReportDialog call')
      return
    }
    var t = document.createElement('script')
    ;(t.async = !0),
      (t.src = new Lo(e.dsn).getReportDialogEndpoint(e)),
      e.onLoad && (t.onload = e.onLoad),
      (document.head || document.body).appendChild(t)
  }
  var Wf = (function () {
    function e(t) {
      ;(this.name = e.id),
        (this._onErrorHandlerInstalled = !1),
        (this._onUnhandledRejectionHandlerInstalled = !1),
        (this._options = k({ onerror: !0, onunhandledrejection: !0 }, t))
    }
    return (
      (e.prototype.setupOnce = function () {
        ;(Error.stackTraceLimit = 50),
          this._options.onerror && (R.log('Global Handler attached: onerror'), this._installGlobalOnErrorHandler()),
          this._options.onunhandledrejection &&
            (R.log('Global Handler attached: onunhandledrejection'), this._installGlobalOnUnhandledRejectionHandler())
      }),
      (e.prototype._installGlobalOnErrorHandler = function () {
        var t = this
        this._onErrorHandlerInstalled ||
          (De({
            callback: function (r) {
              var n = r.error,
                i = re(),
                o = i.getIntegration(e),
                a = n && n.__sentry_own_request__ === !0
              if (!(!o || zf() || a)) {
                var s = i.getClient(),
                  u =
                    n === void 0 && Xt(r.msg)
                      ? t._eventFromIncompleteOnError(r.msg, r.url, r.line, r.column)
                      : t._enhanceEventWithInitialFrame(
                          bs(n || r.msg, void 0, {
                            attachStacktrace: s && s.getOptions().attachStacktrace,
                            rejection: !1,
                          }),
                          r.url,
                          r.line,
                          r.column
                        )
                dr(u, { handled: !1, type: 'onerror' }), i.captureEvent(u, { originalException: n })
              }
            },
            type: 'error',
          }),
          (this._onErrorHandlerInstalled = !0))
      }),
      (e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
        var t = this
        this._onUnhandledRejectionHandlerInstalled ||
          (De({
            callback: function (r) {
              var n = r
              try {
                'reason' in r ? (n = r.reason) : 'detail' in r && 'reason' in r.detail && (n = r.detail.reason)
              } catch (l) {}
              var i = re(),
                o = i.getIntegration(e),
                a = n && n.__sentry_own_request__ === !0
              if (!o || zf() || a) return !0
              var s = i.getClient(),
                u = vn(n)
                  ? t._eventFromRejectionWithPrimitive(n)
                  : bs(n, void 0, { attachStacktrace: s && s.getOptions().attachStacktrace, rejection: !0 })
              ;(u.level = nt.Error),
                dr(u, { handled: !1, type: 'onunhandledrejection' }),
                i.captureEvent(u, { originalException: n })
            },
            type: 'unhandledrejection',
          }),
          (this._onUnhandledRejectionHandlerInstalled = !0))
      }),
      (e.prototype._eventFromIncompleteOnError = function (t, r, n, i) {
        var o =
            /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
          a = ms(t) ? t.message : t,
          s,
          u = a.match(o)
        u && ((s = u[1]), (a = u[2]))
        var l = { exception: { values: [{ type: s || 'Error', value: a }] } }
        return this._enhanceEventWithInitialFrame(l, r, n, i)
      }),
      (e.prototype._eventFromRejectionWithPrimitive = function (t) {
        return {
          exception: {
            values: [
              { type: 'UnhandledRejection', value: 'Non-Error promise rejection captured with value: ' + String(t) },
            ],
          },
        }
      }),
      (e.prototype._enhanceEventWithInitialFrame = function (t, r, n, i) {
        ;(t.exception = t.exception || {}),
          (t.exception.values = t.exception.values || []),
          (t.exception.values[0] = t.exception.values[0] || {}),
          (t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {}),
          (t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [])
        var o = isNaN(parseInt(i, 10)) ? void 0 : i,
          a = isNaN(parseInt(n, 10)) ? void 0 : n,
          s = Xt(r) && r.length > 0 ? r : lh()
        return (
          t.exception.values[0].stacktrace.frames.length === 0 &&
            t.exception.values[0].stacktrace.frames.push({
              colno: o,
              filename: s,
              function: '?',
              in_app: !0,
              lineno: a,
            }),
          t
        )
      }),
      (e.id = 'GlobalHandlers'),
      e
    )
  })()
  var o_ = [
      'EventTarget',
      'Window',
      'Node',
      'ApplicationCache',
      'AudioTrackList',
      'ChannelMergerNode',
      'CryptoOperation',
      'EventSource',
      'FileReader',
      'HTMLUnknownElement',
      'IDBDatabase',
      'IDBRequest',
      'IDBTransaction',
      'KeyOperation',
      'MediaController',
      'MessagePort',
      'ModalWindow',
      'Notification',
      'SVGElementInstance',
      'Screen',
      'TextTrack',
      'TextTrackCue',
      'TextTrackList',
      'WebSocket',
      'WebSocketWorker',
      'Worker',
      'XMLHttpRequest',
      'XMLHttpRequestEventTarget',
      'XMLHttpRequestUpload',
    ],
    qf = (function () {
      function e(t) {
        ;(this.name = e.id),
          (this._options = k(
            { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0 },
            t
          ))
      }
      return (
        (e.prototype.setupOnce = function () {
          var t = Z()
          if (
            (this._options.setTimeout && ge(t, 'setTimeout', this._wrapTimeFunction.bind(this)),
            this._options.setInterval && ge(t, 'setInterval', this._wrapTimeFunction.bind(this)),
            this._options.requestAnimationFrame && ge(t, 'requestAnimationFrame', this._wrapRAF.bind(this)),
            this._options.XMLHttpRequest &&
              'XMLHttpRequest' in t &&
              ge(XMLHttpRequest.prototype, 'send', this._wrapXHR.bind(this)),
            this._options.eventTarget)
          ) {
            var r = Array.isArray(this._options.eventTarget) ? this._options.eventTarget : o_
            r.forEach(this._wrapEventTarget.bind(this))
          }
        }),
        (e.prototype._wrapTimeFunction = function (t) {
          return function () {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
            var i = r[0]
            return (
              (r[0] = En(i, { mechanism: { data: { function: Lt(t) }, handled: !0, type: 'instrument' } })),
              t.apply(this, r)
            )
          }
        }),
        (e.prototype._wrapRAF = function (t) {
          return function (r) {
            return t.call(
              this,
              En(r, {
                mechanism: {
                  data: { function: 'requestAnimationFrame', handler: Lt(t) },
                  handled: !0,
                  type: 'instrument',
                },
              })
            )
          }
        }),
        (e.prototype._wrapEventTarget = function (t) {
          var r = Z(),
            n = r[t] && r[t].prototype
          !n ||
            !n.hasOwnProperty ||
            !n.hasOwnProperty('addEventListener') ||
            (ge(n, 'addEventListener', function (i) {
              return function (o, a, s) {
                try {
                  typeof a.handleEvent == 'function' &&
                    (a.handleEvent = En(a.handleEvent.bind(a), {
                      mechanism: {
                        data: { function: 'handleEvent', handler: Lt(a), target: t },
                        handled: !0,
                        type: 'instrument',
                      },
                    }))
                } catch (u) {}
                return i.call(
                  this,
                  o,
                  En(a, {
                    mechanism: {
                      data: { function: 'addEventListener', handler: Lt(a), target: t },
                      handled: !0,
                      type: 'instrument',
                    },
                  }),
                  s
                )
              }
            }),
            ge(n, 'removeEventListener', function (i) {
              return function (o, a, s) {
                var u,
                  l = a
                try {
                  var c = (u = l) === null || u === void 0 ? void 0 : u.__sentry_wrapped__
                  c && i.call(this, o, c, s)
                } catch (m) {}
                return i.call(this, o, l, s)
              }
            }))
        }),
        (e.prototype._wrapXHR = function (t) {
          return function () {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
            var i = this,
              o = ['onload', 'onerror', 'onprogress', 'onreadystatechange']
            return (
              o.forEach(function (a) {
                a in i &&
                  typeof i[a] == 'function' &&
                  ge(i, a, function (s) {
                    var u = { mechanism: { data: { function: a, handler: Lt(s) }, handled: !0, type: 'instrument' } }
                    return s.__sentry_original__ && (u.mechanism.data.handler = Lt(s.__sentry_original__)), En(s, u)
                  })
              }),
              t.apply(this, r)
            )
          }
        }),
        (e.id = 'TryCatch'),
        e
      )
    })()
  var Ho = (function () {
    function e(t) {
      ;(this.name = e.id), (this._options = k({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }, t))
    }
    return (
      (e.prototype.addSentryBreadcrumb = function (t) {
        !this._options.sentry ||
          re().addBreadcrumb(
            {
              category: 'sentry.' + (t.type === 'transaction' ? 'transaction' : 'event'),
              event_id: t.event_id,
              level: t.level,
              message: cr(t),
            },
            { event: t }
          )
      }),
      (e.prototype.setupOnce = function () {
        var t = this
        this._options.console &&
          De({
            callback: function () {
              for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
              t._consoleBreadcrumb.apply(t, Y(r))
            },
            type: 'console',
          }),
          this._options.dom &&
            De({
              callback: function () {
                for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
                t._domBreadcrumb.apply(t, Y(r))
              },
              type: 'dom',
            }),
          this._options.xhr &&
            De({
              callback: function () {
                for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
                t._xhrBreadcrumb.apply(t, Y(r))
              },
              type: 'xhr',
            }),
          this._options.fetch &&
            De({
              callback: function () {
                for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
                t._fetchBreadcrumb.apply(t, Y(r))
              },
              type: 'fetch',
            }),
          this._options.history &&
            De({
              callback: function () {
                for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
                t._historyBreadcrumb.apply(t, Y(r))
              },
              type: 'history',
            })
      }),
      (e.prototype._consoleBreadcrumb = function (t) {
        var r = {
          category: 'console',
          data: { arguments: t.args, logger: 'console' },
          level: nt.fromString(t.level),
          message: Ef(t.args, ' '),
        }
        if (t.level === 'assert')
          if (t.args[0] === !1)
            (r.message = 'Assertion failed: ' + (Ef(t.args.slice(1), ' ') || 'console.assert')),
              (r.data.arguments = t.args.slice(1))
          else return
        re().addBreadcrumb(r, { input: t.args, level: t.level })
      }),
      (e.prototype._domBreadcrumb = function (t) {
        var r,
          n = typeof this._options.dom == 'object' ? this._options.dom.serializeAttribute : void 0
        typeof n == 'string' && (n = [n])
        try {
          r = t.event.target ? fr(t.event.target, n) : fr(t.event, n)
        } catch (i) {
          r = '<unknown>'
        }
        r.length !== 0 &&
          re().addBreadcrumb(
            { category: 'ui.' + t.name, message: r },
            { event: t.event, name: t.name, global: t.global }
          )
      }),
      (e.prototype._xhrBreadcrumb = function (t) {
        if (t.endTimestamp) {
          if (t.xhr.__sentry_own_request__) return
          var r = t.xhr.__sentry_xhr__ || {},
            n = r.method,
            i = r.url,
            o = r.status_code,
            a = r.body
          re().addBreadcrumb(
            { category: 'xhr', data: { method: n, url: i, status_code: o }, type: 'http' },
            { xhr: t.xhr, input: a }
          )
          return
        }
      }),
      (e.prototype._fetchBreadcrumb = function (t) {
        !t.endTimestamp ||
          (t.fetchData.url.match(/sentry_key/) && t.fetchData.method === 'POST') ||
          (t.error
            ? re().addBreadcrumb(
                { category: 'fetch', data: t.fetchData, level: nt.Error, type: 'http' },
                { data: t.error, input: t.args }
              )
            : re().addBreadcrumb(
                { category: 'fetch', data: k(k({}, t.fetchData), { status_code: t.response.status }), type: 'http' },
                { input: t.args, response: t.response }
              ))
      }),
      (e.prototype._historyBreadcrumb = function (t) {
        var r = Z(),
          n = t.from,
          i = t.to,
          o = vs(r.location.href),
          a = vs(n),
          s = vs(i)
        a.path || (a = o),
          o.protocol === s.protocol && o.host === s.host && (i = s.relative),
          o.protocol === a.protocol && o.host === a.host && (n = a.relative),
          re().addBreadcrumb({ category: 'navigation', data: { from: n, to: i } })
      }),
      (e.id = 'Breadcrumbs'),
      e
    )
  })()
  var a_ = 'cause',
    s_ = 5,
    Vf = (function () {
      function e(t) {
        t === void 0 && (t = {}), (this.name = e.id), (this._key = t.key || a_), (this._limit = t.limit || s_)
      }
      return (
        (e.prototype.setupOnce = function () {
          jt(function (t, r) {
            var n = re().getIntegration(e)
            return n ? n._handler(t, r) : t
          })
        }),
        (e.prototype._handler = function (t, r) {
          if (!t.exception || !t.exception.values || !r || !it(r.originalException, Error)) return t
          var n = this._walkErrorTree(r.originalException, this._key)
          return (t.exception.values = Y(n, t.exception.values)), t
        }),
        (e.prototype._walkErrorTree = function (t, r, n) {
          if ((n === void 0 && (n = []), !it(t[r], Error) || n.length + 1 >= this._limit)) return n
          var i = $r(t[r]),
            o = Lf(i)
          return this._walkErrorTree(t[r], r, Y([o], n))
        }),
        (e.id = 'LinkedErrors'),
        e
      )
    })()
  var wi = Z(),
    $f = (function () {
      function e() {
        this.name = e.id
      }
      return (
        (e.prototype.setupOnce = function () {
          jt(function (t) {
            var r, n, i
            if (re().getIntegration(e)) {
              if (!wi.navigator && !wi.location && !wi.document) return t
              var o =
                  ((r = t.request) === null || r === void 0 ? void 0 : r.url) ||
                  ((n = wi.location) === null || n === void 0 ? void 0 : n.href),
                a = (wi.document || {}).referrer,
                s = (wi.navigator || {}).userAgent,
                u = k(
                  k(k({}, (i = t.request) === null || i === void 0 ? void 0 : i.headers), a && { Referer: a }),
                  s && { 'User-Agent': s }
                ),
                l = k(k({}, o && { url: o }), { headers: u })
              return k(k({}, t), { request: l })
            }
            return t
          })
        }),
        (e.id = 'UserAgent'),
        e
      )
    })()
  var Gf = (function () {
    function e() {
      this.name = e.id
    }
    return (
      (e.prototype.setupOnce = function (t, r) {
        t(function (n) {
          var i = r().getIntegration(e)
          if (i) {
            try {
              if (i._shouldDropEvent(n, i._previousEvent)) return null
            } catch (o) {
              return (i._previousEvent = n)
            }
            return (i._previousEvent = n)
          }
          return n
        })
      }),
      (e.prototype._shouldDropEvent = function (t, r) {
        return r ? !!(this._isSameMessageEvent(t, r) || this._isSameExceptionEvent(t, r)) : !1
      }),
      (e.prototype._isSameMessageEvent = function (t, r) {
        var n = t.message,
          i = r.message
        return !(
          (!n && !i) ||
          (n && !i) ||
          (!n && i) ||
          n !== i ||
          !this._isSameFingerprint(t, r) ||
          !this._isSameStacktrace(t, r)
        )
      }),
      (e.prototype._getFramesFromEvent = function (t) {
        var r = t.exception
        if (r)
          try {
            return r.values[0].stacktrace.frames
          } catch (n) {
            return
          }
        else if (t.stacktrace) return t.stacktrace.frames
      }),
      (e.prototype._isSameStacktrace = function (t, r) {
        var n = this._getFramesFromEvent(t),
          i = this._getFramesFromEvent(r)
        if (!n && !i) return !0
        if ((n && !i) || (!n && i) || ((n = n), (i = i), i.length !== n.length)) return !1
        for (var o = 0; o < i.length; o++) {
          var a = i[o],
            s = n[o]
          if (a.filename !== s.filename || a.lineno !== s.lineno || a.colno !== s.colno || a.function !== s.function)
            return !1
        }
        return !0
      }),
      (e.prototype._getExceptionFromEvent = function (t) {
        return t.exception && t.exception.values && t.exception.values[0]
      }),
      (e.prototype._isSameExceptionEvent = function (t, r) {
        var n = this._getExceptionFromEvent(r),
          i = this._getExceptionFromEvent(t)
        return !(
          !n ||
          !i ||
          n.type !== i.type ||
          n.value !== i.value ||
          !this._isSameFingerprint(t, r) ||
          !this._isSameStacktrace(t, r)
        )
      }),
      (e.prototype._isSameFingerprint = function (t, r) {
        var n = t.fingerprint,
          i = r.fingerprint
        if (!n && !i) return !0
        if ((n && !i) || (!n && i)) return !1
        ;(n = n), (i = i)
        try {
          return n.join('') === i.join('')
        } catch (o) {
          return !1
        }
      }),
      (e.id = 'Dedupe'),
      e
    )
  })()
  var Wh = (function (e) {
    Ve(t, e)
    function t(r) {
      r === void 0 && (r = {})
      var n = this
      return (
        (r._metadata = r._metadata || {}),
        (r._metadata.sdk = r._metadata.sdk || {
          name: 'sentry.javascript.browser',
          packages: [{ name: 'npm:@sentry/browser', version: Vr }],
          version: Vr,
        }),
        (n = e.call(this, Uh, r) || this),
        n
      )
    }
    return (
      (t.prototype.showReportDialog = function (r) {
        r === void 0 && (r = {})
        var n = Z().document
        if (!!n) {
          if (!this._isEnabled()) {
            R.error('Trying to call showReportDialog with Sentry Client disabled')
            return
          }
          zh(k(k({}, r), { dsn: r.dsn || this.getDsn() }))
        }
      }),
      (t.prototype._prepareEvent = function (r, n, i) {
        return (r.platform = r.platform || 'javascript'), e.prototype._prepareEvent.call(this, r, n, i)
      }),
      (t.prototype._sendEvent = function (r) {
        var n = this.getIntegration(Ho)
        n && n.addSentryBreadcrumb(r), e.prototype._sendEvent.call(this, r)
      }),
      t
    )
  })(Mf)
  var qh = [
    new jo.InboundFilters(),
    new jo.FunctionToString(),
    new qf(),
    new Ho(),
    new Wf(),
    new Vf(),
    new Gf(),
    new $f(),
  ]
  function Yf(e) {
    if (
      (e === void 0 && (e = {}), e.defaultIntegrations === void 0 && (e.defaultIntegrations = qh), e.release === void 0)
    ) {
      var t = Z()
      t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
    }
    e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0), Rf(Wh, e), e.autoSessionTracking && u_()
  }
  function Xf(e) {
    e === void 0 && (e = {}), e.eventId || (e.eventId = re().lastEventId())
    var t = re().getClient()
    t && t.showReportDialog(e)
  }
  function u_() {
    var e = Z(),
      t = e.document
    if (typeof t == 'undefined') {
      R.warn('Session tracking in non-browser environment with @sentry/browser is not supported.')
      return
    }
    var r = re()
    typeof r.startSession != 'function' ||
      typeof r.captureSession != 'function' ||
      (r.startSession({ ignoreDuration: !0 }),
      r.captureSession(),
      De({
        callback: function (n) {
          var i = n.from,
            o = n.to
          i === void 0 || i === o || (r.startSession({ ignoreDuration: !0 }), r.captureSession())
        },
        type: 'history',
      }))
  }
  function Kf(e) {
    ;(e._metadata = e._metadata || {}),
      (e._metadata.sdk = e._metadata.sdk || {
        name: 'sentry.javascript.react',
        packages: [{ name: 'npm:@sentry/react', version: Vr }],
        version: Vr,
      }),
      Yf(e)
  }
  var E_ = Ze(tv()),
    Sn = Ze(et()),
    rv = fh(Sn.version)
  var nv = { componentStack: null, error: null, eventId: null }
  function S_(e, t) {
    var r = new Error(e.message)
    ;(r.name = 'React ErrorBoundary ' + r.name), (r.stack = t)
    var n = {}
    if (
      (_i({}, r).then(function (o) {
        n = o
      }),
      n.exception && Array.isArray(n.exception.values) && rv.major && rv.major >= 17)
    ) {
      var i = {}
      return (
        _i({}, e).then(function (o) {
          i = o
        }),
        i.exception &&
          Array.isArray(i.exception.values) &&
          (i.exception.values = Y(n.exception.values, i.exception.values)),
        ks(i)
      )
    }
    return vi(e, { contexts: { react: { componentStack: t } } })
  }
  var rc = (function (e) {
    Ve(t, e)
    function t() {
      var r = (e !== null && e.apply(this, arguments)) || this
      return (
        (r.state = nv),
        (r.resetErrorBoundary = function () {
          var n = r.props.onReset,
            i = r.state,
            o = i.error,
            a = i.componentStack,
            s = i.eventId
          n && n(o, a, s), r.setState(nv)
        }),
        r
      )
    }
    return (
      (t.prototype.componentDidCatch = function (r, n) {
        var i = this,
          o = n.componentStack,
          a = this.props,
          s = a.beforeCapture,
          u = a.onError,
          l = a.showDialog,
          c = a.dialogOptions
        gi(function (m) {
          s && s(m, r, o)
          var h = S_(r, o)
          u && u(r, o, h), l && Xf(k(k({}, c), { eventId: h })), i.setState({ error: r, componentStack: o, eventId: h })
        })
      }),
      (t.prototype.componentDidMount = function () {
        var r = this.props.onMount
        r && r()
      }),
      (t.prototype.componentWillUnmount = function () {
        var r = this.state,
          n = r.error,
          i = r.componentStack,
          o = r.eventId,
          a = this.props.onUnmount
        a && a(n, i, o)
      }),
      (t.prototype.render = function () {
        var r = this.props.fallback,
          n = this.state,
          i = n.error,
          o = n.componentStack,
          a = n.eventId
        return i
          ? Sn.isValidElement(r)
            ? r
            : typeof r == 'function'
            ? r({ error: i, componentStack: o, resetError: this.resetErrorBoundary, eventId: a })
            : null
          : this.props.children
      }),
      t
    )
  })(Sn.Component)
  var Pe
  ;(function (e) {
    ;(e.Ok = 'ok'),
      (e.DeadlineExceeded = 'deadline_exceeded'),
      (e.Unauthenticated = 'unauthenticated'),
      (e.PermissionDenied = 'permission_denied'),
      (e.NotFound = 'not_found'),
      (e.ResourceExhausted = 'resource_exhausted'),
      (e.InvalidArgument = 'invalid_argument'),
      (e.Unimplemented = 'unimplemented'),
      (e.Unavailable = 'unavailable'),
      (e.InternalError = 'internal_error'),
      (e.UnknownError = 'unknown_error'),
      (e.Cancelled = 'cancelled'),
      (e.AlreadyExists = 'already_exists'),
      (e.FailedPrecondition = 'failed_precondition'),
      (e.Aborted = 'aborted'),
      (e.OutOfRange = 'out_of_range'),
      (e.DataLoss = 'data_loss')
  })(Pe || (Pe = {}))
  ;(function (e) {
    function t(r) {
      if (r < 400) return e.Ok
      if (r >= 400 && r < 500)
        switch (r) {
          case 401:
            return e.Unauthenticated
          case 403:
            return e.PermissionDenied
          case 404:
            return e.NotFound
          case 409:
            return e.AlreadyExists
          case 413:
            return e.FailedPrecondition
          case 429:
            return e.ResourceExhausted
          default:
            return e.InvalidArgument
        }
      if (r >= 500 && r < 600)
        switch (r) {
          case 501:
            return e.Unimplemented
          case 503:
            return e.Unavailable
          case 504:
            return e.DeadlineExceeded
          default:
            return e.InternalError
        }
      return e.UnknownError
    }
    e.fromHttpCode = t
  })(Pe || (Pe = {}))
  var x_ = new RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$')
  function Bo(e) {
    e === void 0 && (e = (t = re().getClient()) === null || t === void 0 ? void 0 : t.getOptions())
    var t
    return e ? 'tracesSampleRate' in e || 'tracesSampler' in e : !1
  }
  function iv(e) {
    var t = e.match(x_)
    if (t) {
      var r = void 0
      return t[3] === '1' ? (r = !0) : t[3] === '0' && (r = !1), { traceId: t[1], parentSampled: r, parentSpanId: t[2] }
    }
  }
  function xn(e) {
    e === void 0 && (e = re())
    var t, r
    return (r = (t = e) === null || t === void 0 ? void 0 : t.getScope()) === null || r === void 0
      ? void 0
      : r.getTransaction()
  }
  function Re(e) {
    return e / 1e3
  }
  function ov(e) {
    return e * 1e3
  }
  function av() {
    De({ callback: sv, type: 'error' }), De({ callback: sv, type: 'unhandledrejection' })
  }
  function sv() {
    var e = xn()
    e &&
      (R.log('[Tracing] Transaction: ' + Pe.InternalError + ' -> Global error occured'), e.setStatus(Pe.InternalError))
  }
  var Hs = (function () {
    function e(t) {
      t === void 0 && (t = 1e3), (this.spans = []), (this._maxlen = t)
    }
    return (
      (e.prototype.add = function (t) {
        this.spans.length > this._maxlen ? (t.spanRecorder = void 0) : this.spans.push(t)
      }),
      e
    )
  })()
  var uv = (function () {
    function e(t) {
      if (
        ((this.traceId = bt()),
        (this.spanId = bt().substring(16)),
        (this.startTimestamp = wn()),
        (this.tags = {}),
        (this.data = {}),
        !t)
      )
        return this
      t.traceId && (this.traceId = t.traceId),
        t.spanId && (this.spanId = t.spanId),
        t.parentSpanId && (this.parentSpanId = t.parentSpanId),
        'sampled' in t && (this.sampled = t.sampled),
        t.op && (this.op = t.op),
        t.description && (this.description = t.description),
        t.data && (this.data = t.data),
        t.tags && (this.tags = t.tags),
        t.status && (this.status = t.status),
        t.startTimestamp && (this.startTimestamp = t.startTimestamp),
        t.endTimestamp && (this.endTimestamp = t.endTimestamp)
    }
    return (
      (e.prototype.child = function (t) {
        return this.startChild(t)
      }),
      (e.prototype.startChild = function (t) {
        var r = new e(k(k({}, t), { parentSpanId: this.spanId, sampled: this.sampled, traceId: this.traceId }))
        return (
          (r.spanRecorder = this.spanRecorder),
          r.spanRecorder && r.spanRecorder.add(r),
          (r.transaction = this.transaction),
          r
        )
      }),
      (e.prototype.setTag = function (t, r) {
        var n
        return (this.tags = k(k({}, this.tags), ((n = {}), (n[t] = r), n))), this
      }),
      (e.prototype.setData = function (t, r) {
        var n
        return (this.data = k(k({}, this.data), ((n = {}), (n[t] = r), n))), this
      }),
      (e.prototype.setStatus = function (t) {
        return (this.status = t), this
      }),
      (e.prototype.setHttpStatus = function (t) {
        this.setTag('http.status_code', String(t))
        var r = Pe.fromHttpCode(t)
        return r !== Pe.UnknownError && this.setStatus(r), this
      }),
      (e.prototype.isSuccess = function () {
        return this.status === Pe.Ok
      }),
      (e.prototype.finish = function (t) {
        this.endTimestamp = typeof t == 'number' ? t : wn()
      }),
      (e.prototype.toTraceparent = function () {
        var t = ''
        return this.sampled !== void 0 && (t = this.sampled ? '-1' : '-0'), this.traceId + '-' + this.spanId + t
      }),
      (e.prototype.toContext = function () {
        return Ft({
          data: this.data,
          description: this.description,
          endTimestamp: this.endTimestamp,
          op: this.op,
          parentSpanId: this.parentSpanId,
          sampled: this.sampled,
          spanId: this.spanId,
          startTimestamp: this.startTimestamp,
          status: this.status,
          tags: this.tags,
          traceId: this.traceId,
        })
      }),
      (e.prototype.updateWithContext = function (t) {
        var r, n, i, o, a
        return (
          (this.data = ((r = t.data), r != null ? r : {})),
          (this.description = t.description),
          (this.endTimestamp = t.endTimestamp),
          (this.op = t.op),
          (this.parentSpanId = t.parentSpanId),
          (this.sampled = t.sampled),
          (this.spanId = ((n = t.spanId), n != null ? n : this.spanId)),
          (this.startTimestamp = ((i = t.startTimestamp), i != null ? i : this.startTimestamp)),
          (this.status = t.status),
          (this.tags = ((o = t.tags), o != null ? o : {})),
          (this.traceId = ((a = t.traceId), a != null ? a : this.traceId)),
          this
        )
      }),
      (e.prototype.getTraceContext = function () {
        return Ft({
          data: Object.keys(this.data).length > 0 ? this.data : void 0,
          description: this.description,
          op: this.op,
          parent_span_id: this.parentSpanId,
          span_id: this.spanId,
          status: this.status,
          tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
          trace_id: this.traceId,
        })
      }),
      (e.prototype.toJSON = function () {
        return Ft({
          data: Object.keys(this.data).length > 0 ? this.data : void 0,
          description: this.description,
          op: this.op,
          parent_span_id: this.parentSpanId,
          span_id: this.spanId,
          start_timestamp: this.startTimestamp,
          status: this.status,
          tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
          timestamp: this.endTimestamp,
          trace_id: this.traceId,
        })
      }),
      e
    )
  })()
  var Bs = (function (e) {
    Ve(t, e)
    function t(r, n) {
      var i = e.call(this, r) || this
      return (
        (i._measurements = {}),
        (i._hub = re()),
        it(n, Wr) && (i._hub = n),
        (i.name = r.name || ''),
        (i.metadata = r.metadata || {}),
        (i._trimEnd = r.trimEnd),
        (i.transaction = i),
        i
      )
    }
    return (
      (t.prototype.setName = function (r) {
        this.name = r
      }),
      (t.prototype.initSpanRecorder = function (r) {
        r === void 0 && (r = 1e3), this.spanRecorder || (this.spanRecorder = new Hs(r)), this.spanRecorder.add(this)
      }),
      (t.prototype.setMeasurements = function (r) {
        this._measurements = k({}, r)
      }),
      (t.prototype.setMetadata = function (r) {
        this.metadata = k(k({}, this.metadata), r)
      }),
      (t.prototype.finish = function (r) {
        var n = this
        if (this.endTimestamp === void 0) {
          if (
            (this.name ||
              (R.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
              (this.name = '<unlabeled transaction>')),
            e.prototype.finish.call(this, r),
            this.sampled !== !0)
          ) {
            R.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.')
            return
          }
          var i = this.spanRecorder
            ? this.spanRecorder.spans.filter(function (s) {
                return s !== n && s.endTimestamp
              })
            : []
          this._trimEnd &&
            i.length > 0 &&
            (this.endTimestamp = i.reduce(function (s, u) {
              return s.endTimestamp && u.endTimestamp ? (s.endTimestamp > u.endTimestamp ? s : u) : s
            }).endTimestamp)
          var o = {
              contexts: { trace: this.getTraceContext() },
              spans: i,
              start_timestamp: this.startTimestamp,
              tags: this.tags,
              timestamp: this.endTimestamp,
              transaction: this.name,
              type: 'transaction',
              debug_meta: this.metadata,
            },
            a = Object.keys(this._measurements).length > 0
          return (
            a &&
              (R.log(
                '[Measurements] Adding measurements to transaction',
                JSON.stringify(this._measurements, void 0, 2)
              ),
              (o.measurements = this._measurements)),
            R.log('[Tracing] Finishing ' + this.op + ' transaction: ' + this.name + '.'),
            this._hub.captureEvent(o)
          )
        }
      }),
      (t.prototype.toContext = function () {
        var r = e.prototype.toContext.call(this)
        return Ft(k(k({}, r), { name: this.name, trimEnd: this._trimEnd }))
      }),
      (t.prototype.updateWithContext = function (r) {
        var n
        return (
          e.prototype.updateWithContext.call(this, r),
          (this.name = ((n = r.name), n != null ? n : '')),
          (this._trimEnd = r.trimEnd),
          this
        )
      }),
      t
    )
  })(uv)
  var nc = 1e3,
    T_ = (function (e) {
      Ve(t, e)
      function t(r, n, i, o) {
        i === void 0 && (i = '')
        var a = e.call(this, o) || this
        return (a._pushActivity = r), (a._popActivity = n), (a.transactionSpanId = i), a
      }
      return (
        (t.prototype.add = function (r) {
          var n = this
          r.spanId !== this.transactionSpanId &&
            ((r.finish = function (i) {
              ;(r.endTimestamp = typeof i == 'number' ? i : wn()), n._popActivity(r.spanId)
            }),
            r.endTimestamp === void 0 && this._pushActivity(r.spanId)),
            e.prototype.add.call(this, r)
        }),
        t
      )
    })(Hs)
  var lv = (function (e) {
    Ve(t, e)
    function t(r, n, i, o) {
      i === void 0 && (i = nc), o === void 0 && (o = !1)
      var a = e.call(this, r, n) || this
      return (
        (a._idleHub = n),
        (a._idleTimeout = i),
        (a._onScope = o),
        (a.activities = {}),
        (a._heartbeatTimer = 0),
        (a._heartbeatCounter = 0),
        (a._finished = !1),
        (a._beforeFinishCallbacks = []),
        n &&
          o &&
          (fv(n),
          R.log('Setting idle transaction on scope. Span ID: ' + a.spanId),
          n.configureScope(function (s) {
            return s.setSpan(a)
          })),
        (a._initTimeout = setTimeout(function () {
          a._finished || a.finish()
        }, a._idleTimeout)),
        a
      )
    }
    return (
      (t.prototype.finish = function (r) {
        var n,
          i,
          o = this
        if ((r === void 0 && (r = wn()), (this._finished = !0), (this.activities = {}), this.spanRecorder)) {
          R.log('[Tracing] finishing IdleTransaction', new Date(r * 1e3).toISOString(), this.op)
          try {
            for (var a = Nt(this._beforeFinishCallbacks), s = a.next(); !s.done; s = a.next()) {
              var u = s.value
              u(this, r)
            }
          } catch (l) {
            n = { error: l }
          } finally {
            try {
              s && !s.done && (i = a.return) && i.call(a)
            } finally {
              if (n) throw n.error
            }
          }
          ;(this.spanRecorder.spans = this.spanRecorder.spans.filter(function (l) {
            if (l.spanId === o.spanId) return !0
            l.endTimestamp ||
              ((l.endTimestamp = r),
              l.setStatus(Pe.Cancelled),
              R.log('[Tracing] cancelling span since transaction ended early', JSON.stringify(l, void 0, 2)))
            var c = l.startTimestamp < r
            return (
              c ||
                R.log(
                  '[Tracing] discarding Span since it happened after Transaction was finished',
                  JSON.stringify(l, void 0, 2)
                ),
              c
            )
          })),
            R.log('[Tracing] flushing IdleTransaction')
        } else R.log('[Tracing] No active IdleTransaction')
        return this._onScope && fv(this._idleHub), e.prototype.finish.call(this, r)
      }),
      (t.prototype.registerBeforeFinishCallback = function (r) {
        this._beforeFinishCallbacks.push(r)
      }),
      (t.prototype.initSpanRecorder = function (r) {
        var n = this
        if (!this.spanRecorder) {
          var i = function (a) {
              n._finished || n._pushActivity(a)
            },
            o = function (a) {
              n._finished || n._popActivity(a)
            }
          ;(this.spanRecorder = new T_(i, o, this.spanId, r)), R.log('Starting heartbeat'), this._pingHeartbeat()
        }
        this.spanRecorder.add(this)
      }),
      (t.prototype._pushActivity = function (r) {
        this._initTimeout && (clearTimeout(this._initTimeout), (this._initTimeout = void 0)),
          R.log('[Tracing] pushActivity: ' + r),
          (this.activities[r] = !0),
          R.log('[Tracing] new activities count', Object.keys(this.activities).length)
      }),
      (t.prototype._popActivity = function (r) {
        var n = this
        if (
          (this.activities[r] &&
            (R.log('[Tracing] popActivity ' + r),
            delete this.activities[r],
            R.log('[Tracing] new activities count', Object.keys(this.activities).length)),
          Object.keys(this.activities).length === 0)
        ) {
          var i = this._idleTimeout,
            o = wn() + i / 1e3
          setTimeout(function () {
            n._finished || n.finish(o)
          }, i)
        }
      }),
      (t.prototype._beat = function () {
        if ((clearTimeout(this._heartbeatTimer), !this._finished)) {
          var r = Object.keys(this.activities),
            n = r.length
              ? r.reduce(function (i, o) {
                  return i + o
                })
              : ''
          n === this._prevHeartbeatString ? (this._heartbeatCounter += 1) : (this._heartbeatCounter = 1),
            (this._prevHeartbeatString = n),
            this._heartbeatCounter >= 3
              ? (R.log('[Tracing] Transaction finished because of no change for 3 heart beats'),
                this.setStatus(Pe.DeadlineExceeded),
                this.setTag('heartbeat', 'failed'),
                this.finish())
              : this._pingHeartbeat()
        }
      }),
      (t.prototype._pingHeartbeat = function () {
        var r = this
        R.log('pinging Heartbeat -> current counter: ' + this._heartbeatCounter),
          (this._heartbeatTimer = setTimeout(function () {
            r._beat()
          }, 5e3))
      }),
      t
    )
  })(Bs)
  function fv(e) {
    if (e) {
      var t = e.getScope()
      if (t) {
        var r = t.getTransaction()
        r && t.setSpan(void 0)
      }
    }
  }
  function k_() {
    var e = this.getScope()
    if (e) {
      var t = e.getSpan()
      if (t) return { 'sentry-trace': t.toTraceparent() }
    }
    return {}
  }
  function cv(e, t, r) {
    if (!Bo()) return (e.sampled = !1), e
    if (e.sampled !== void 0) return e.setMetadata({ transactionSampling: { method: Ur.Explicit } }), e
    var n
    return (
      typeof t.tracesSampler == 'function'
        ? ((n = t.tracesSampler(r)), e.setMetadata({ transactionSampling: { method: Ur.Sampler, rate: Number(n) } }))
        : r.parentSampled !== void 0
        ? ((n = r.parentSampled), e.setMetadata({ transactionSampling: { method: Ur.Inheritance } }))
        : ((n = t.tracesSampleRate), e.setMetadata({ transactionSampling: { method: Ur.Rate, rate: Number(n) } })),
      O_(n)
        ? n
          ? ((e.sampled = Math.random() < n),
            e.sampled
              ? (R.log('[Tracing] starting ' + e.op + ' transaction - ' + e.name), e)
              : (R.log(
                  "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
                    Number(n) +
                    ')'
                ),
                e))
          : (R.log(
              '[Tracing] Discarding transaction because ' +
                (typeof t.tracesSampler == 'function'
                  ? 'tracesSampler returned 0 or false'
                  : 'a negative sampling decision was inherited or tracesSampleRate is set to 0')
            ),
            (e.sampled = !1),
            e)
        : (R.warn('[Tracing] Discarding transaction because of invalid sample rate.'), (e.sampled = !1), e)
    )
  }
  function O_(e) {
    return isNaN(e) || !(typeof e == 'number' || typeof e == 'boolean')
      ? (R.warn(
          '[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ' +
            JSON.stringify(e) +
            ' of type ' +
            JSON.stringify(typeof e) +
            '.'
        ),
        !1)
      : e < 0 || e > 1
      ? (R.warn('[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ' + e + '.'), !1)
      : !0
  }
  function b_(e, t) {
    var r,
      n,
      i = ((r = this.getClient()) === null || r === void 0 ? void 0 : r.getOptions()) || {},
      o = new Bs(e, this)
    return (
      (o = cv(o, i, k({ parentSampled: e.parentSampled, transactionContext: e }, t))),
      o.sampled && o.initSpanRecorder((n = i._experiments) === null || n === void 0 ? void 0 : n.maxSpans),
      o
    )
  }
  function dv(e, t, r, n, i) {
    var o,
      a,
      s = ((o = e.getClient()) === null || o === void 0 ? void 0 : o.getOptions()) || {},
      u = new lv(t, e, r, n)
    return (
      (u = cv(u, s, k({ parentSampled: t.parentSampled, transactionContext: t }, i))),
      u.sampled && u.initSpanRecorder((a = s._experiments) === null || a === void 0 ? void 0 : a.maxSpans),
      u
    )
  }
  function P_() {
    var e = qr()
    !e.__SENTRY__ ||
      ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
      e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = b_),
      e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = k_))
  }
  function C_() {
    var e = qr()
    if (!!e.__SENTRY__) {
      var t = {
          mongodb: function () {
            var n = Zt(module, './integrations/mongo')
            return new n.Mongo()
          },
          mongoose: function () {
            var n = Zt(module, './integrations/mongo')
            return new n.Mongo({ mongoose: !0 })
          },
          mysql: function () {
            var n = Zt(module, './integrations/mysql')
            return new n.Mysql()
          },
          pg: function () {
            var n = Zt(module, './integrations/postgres')
            return new n.Postgres()
          },
        },
        r = Object.keys(t)
          .filter(function (n) {
            return !!zr(n)
          })
          .map(function (n) {
            try {
              return t[n]()
            } catch (i) {
              return
            }
          })
          .filter(function (n) {
            return n
          })
      r.length > 0 && (e.__SENTRY__.integrations = Y(e.__SENTRY__.integrations || [], r))
    }
  }
  function pv() {
    P_(), Jt() && C_(), av()
  }
  var Us = Z()
  function mv() {
    Us && Us.document
      ? Us.document.addEventListener('visibilitychange', function () {
          var e = xn()
          Us.document.hidden &&
            e &&
            (R.log('[Tracing] Transaction: ' + Pe.Cancelled + ' -> since tab moved to the background, op: ' + e.op),
            e.status || e.setStatus(Pe.Cancelled),
            e.setTag('visibilitychange', 'document.hidden'),
            e.finish())
        })
      : R.warn('[Tracing] Could not set up background tab detection due to lack of global document')
  }
  var Ei = function (e, t, r, n) {
    var i
    return function () {
      r && t.isFinal && r.disconnect(),
        t.value >= 0 &&
          (n || t.isFinal || document.visibilityState === 'hidden') &&
          ((t.delta = t.value - (i || 0)), (t.delta || t.isFinal || i === void 0) && (e(t), (i = t.value)))
    }
  }
  var hv = function () {
    return Date.now() + '-' + (Math.floor(Math.random() * (9e12 - 1)) + 1e12)
  }
  var Si = function (e, t) {
    return t === void 0 && (t = -1), { name: e, value: t, delta: 0, entries: [], id: hv(), isFinal: !1 }
  }
  var xi = function (e, t) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        var r = new PerformanceObserver(function (n) {
          return n.getEntries().map(t)
        })
        return r.observe({ type: e, buffered: !0 }), r
      }
    } catch (n) {}
  }
  var vv = !1,
    gv = !1,
    I_ = function (e) {
      vv = !e.persisted
    },
    M_ = function () {
      addEventListener('pagehide', I_), addEventListener('beforeunload', function () {})
    },
    Gr = function (e, t) {
      t === void 0 && (t = !1),
        gv || (M_(), (gv = !0)),
        addEventListener(
          'visibilitychange',
          function (r) {
            var n = r.timeStamp
            document.visibilityState === 'hidden' && e({ timeStamp: n, isUnloading: vv })
          },
          { capture: !0, once: t }
        )
    }
  var yv = function (e, t) {
    t === void 0 && (t = !1)
    var r = Si('CLS', 0),
      n,
      i = function (a) {
        a.hadRecentInput || ((r.value += a.value), r.entries.push(a), n())
      },
      o = xi('layout-shift', i)
    o &&
      ((n = Ei(e, r, o, t)),
      Gr(function (a) {
        var s = a.isUnloading
        o.takeRecords().map(i), s && (r.isFinal = !0), n()
      }))
  }
  var zs,
    Ti = function () {
      return (
        zs === void 0 &&
          ((zs = document.visibilityState === 'hidden' ? 0 : Infinity),
          Gr(function (e) {
            var t = e.timeStamp
            return (zs = t)
          }, !0)),
        {
          get timeStamp() {
            return zs
          },
        }
      )
    }
  var _v = function (e) {
    var t = Si('FID'),
      r = Ti(),
      n = function (a) {
        a.startTime < r.timeStamp &&
          ((t.value = a.processingStart - a.startTime), t.entries.push(a), (t.isFinal = !0), o())
      },
      i = xi('first-input', n),
      o = Ei(e, t, i)
    i
      ? Gr(function () {
          i.takeRecords().map(n), i.disconnect()
        }, !0)
      : window.perfMetrics &&
        window.perfMetrics.onFirstInputDelay &&
        window.perfMetrics.onFirstInputDelay(function (a, s) {
          s.timeStamp < r.timeStamp &&
            ((t.value = a),
            (t.isFinal = !0),
            (t.entries = [
              {
                entryType: 'first-input',
                name: s.type,
                target: s.target,
                cancelable: s.cancelable,
                startTime: s.timeStamp,
                processingStart: s.timeStamp + a,
              },
            ]),
            o())
        })
  }
  var ic,
    wv = function () {
      return (
        ic ||
          (ic = new Promise(function (e) {
            return ['scroll', 'keydown', 'pointerdown'].map(function (t) {
              addEventListener(t, e, { once: !0, passive: !0, capture: !0 })
            })
          })),
        ic
      )
    }
  var Ev = function (e, t) {
    t === void 0 && (t = !1)
    var r = Si('LCP'),
      n = Ti(),
      i,
      o = function (u) {
        var l = u.startTime
        l < n.timeStamp ? ((r.value = l), r.entries.push(u)) : (r.isFinal = !0), i()
      },
      a = xi('largest-contentful-paint', o)
    if (a) {
      i = Ei(e, r, a, t)
      var s = function () {
        r.isFinal || (a.takeRecords().map(o), (r.isFinal = !0), i())
      }
      wv().then(s), Gr(s, !0)
    }
  }
  var hr = Z(),
    Sv = (function () {
      function e() {
        var t
        ;(this._measurements = {}),
          (this._performanceCursor = 0),
          !Jt() &&
            ((t = hr) === null || t === void 0 ? void 0 : t.performance) &&
            (hr.performance.mark && hr.performance.mark('sentry-tracing-init'),
            this._trackCLS(),
            this._trackLCP(),
            this._trackFID())
      }
      return (
        (e.prototype.addPerformanceEntries = function (t) {
          var r = this
          if (!(!hr || !hr.performance || !hr.performance.getEntries || !hi)) {
            R.log('[Tracing] Adding & adjusting spans using Performance API')
            var n = Re(hi),
              i
            if (hr.document) {
              for (var o = 0; o < document.scripts.length; o++)
                if (document.scripts[o].dataset.entry === 'true') {
                  i = document.scripts[o].src
                  break
                }
            }
            var a, s, u, l
            if (
              (hr.performance
                .getEntries()
                .slice(this._performanceCursor)
                .forEach(function (m) {
                  var h = Re(m.startTime),
                    _ = Re(m.duration)
                  if (!(t.op === 'navigation' && n + h < t.startTimestamp))
                    switch (m.entryType) {
                      case 'navigation': {
                        D_(t, m, n), (u = n + Re(m.responseStart)), (l = n + Re(m.requestStart))
                        break
                      }
                      case 'mark':
                      case 'paint':
                      case 'measure': {
                        var S = R_(t, m, h, _, n)
                        s === void 0 && m.name === 'sentry-tracing-init' && (s = S)
                        var x = Ti(),
                          p = m.startTime < x.timeStamp
                        m.name === 'first-paint' &&
                          p &&
                          (R.log('[Measurements] Adding FP'),
                          (r._measurements.fp = { value: m.startTime }),
                          (r._measurements['mark.fp'] = { value: S })),
                          m.name === 'first-contentful-paint' &&
                            p &&
                            (R.log('[Measurements] Adding FCP'),
                            (r._measurements.fcp = { value: m.startTime }),
                            (r._measurements['mark.fcp'] = { value: S }))
                        break
                      }
                      case 'resource': {
                        var d = m.name.replace(window.location.origin, ''),
                          v = N_(t, m, d, h, _, n)
                        a === void 0 && (i || '').indexOf(d) > -1 && (a = v)
                        break
                      }
                      default:
                    }
                }),
              a !== void 0 &&
                s !== void 0 &&
                Tn(t, { description: 'evaluation', endTimestamp: s, op: 'script', startTimestamp: a }),
              (this._performanceCursor = Math.max(performance.getEntries().length - 1, 0)),
              this._trackNavigator(t),
              t.op === 'pageload')
            ) {
              var c = Re(hi)
              typeof u == 'number' &&
                (R.log('[Measurements] Adding TTFB'),
                (this._measurements.ttfb = { value: (u - t.startTimestamp) * 1e3 }),
                typeof l == 'number' && l <= u && (this._measurements['ttfb.requestTime'] = { value: (u - l) * 1e3 })),
                ['fcp', 'fp', 'lcp'].forEach(function (m) {
                  if (!(!r._measurements[m] || c >= t.startTimestamp)) {
                    var h = r._measurements[m].value,
                      _ = c + Re(h),
                      S = Math.abs((_ - t.startTimestamp) * 1e3),
                      x = S - h
                    R.log('[Measurements] Normalized ' + m + ' from ' + h + ' to ' + S + ' (' + x + ')'),
                      (r._measurements[m].value = S)
                  }
                }),
                this._measurements['mark.fid'] &&
                  this._measurements.fid &&
                  Tn(t, {
                    description: 'first input delay',
                    endTimestamp: this._measurements['mark.fid'].value + Re(this._measurements.fid.value),
                    op: 'web.vitals',
                    startTimestamp: this._measurements['mark.fid'].value,
                  }),
                t.setMeasurements(this._measurements),
                this._tagMetricInfo(t)
            }
          }
        }),
        (e.prototype._tagMetricInfo = function (t) {
          this._lcpEntry &&
            (R.log('[Measurements] Adding LCP Data'),
            this._lcpEntry.element && t.setTag('lcp.element', fr(this._lcpEntry.element)),
            this._lcpEntry.id && t.setTag('lcp.id', this._lcpEntry.id),
            this._lcpEntry.url && t.setTag('lcp.url', this._lcpEntry.url.trim().slice(0, 200)),
            t.setTag('lcp.size', this._lcpEntry.size)),
            this._clsEntry &&
              (R.log('[Measurements] Adding CLS Data'),
              this._clsEntry.sources.map(function (r, n) {
                return t.setTag('cls.source.' + (n + 1), fr(r.node))
              }))
        }),
        (e.prototype._trackCLS = function () {
          var t = this
          yv(function (r) {
            var n = r.entries.pop()
            !n || (R.log('[Measurements] Adding CLS'), (t._measurements.cls = { value: r.value }), (t._clsEntry = n))
          })
        }),
        (e.prototype._trackNavigator = function (t) {
          var r = hr.navigator
          if (!!r) {
            var n = r.connection
            n &&
              (n.effectiveType && t.setTag('effectiveConnectionType', n.effectiveType),
              n.type && t.setTag('connectionType', n.type),
              Ws(n.rtt) && (this._measurements['connection.rtt'] = { value: n.rtt }),
              Ws(n.downlink) && (this._measurements['connection.downlink'] = { value: n.downlink })),
              Ws(r.deviceMemory) && t.setTag('deviceMemory', String(r.deviceMemory)),
              Ws(r.hardwareConcurrency) && t.setTag('hardwareConcurrency', String(r.hardwareConcurrency))
          }
        }),
        (e.prototype._trackLCP = function () {
          var t = this
          Ev(function (r) {
            var n = r.entries.pop()
            if (!!n) {
              var i = Re(hi),
                o = Re(n.startTime)
              R.log('[Measurements] Adding LCP'),
                (t._measurements.lcp = { value: r.value }),
                (t._measurements['mark.lcp'] = { value: i + o }),
                (t._lcpEntry = n)
            }
          })
        }),
        (e.prototype._trackFID = function () {
          var t = this
          _v(function (r) {
            var n = r.entries.pop()
            if (!!n) {
              var i = Re(hi),
                o = Re(n.startTime)
              R.log('[Measurements] Adding FID'),
                (t._measurements.fid = { value: r.value }),
                (t._measurements['mark.fid'] = { value: i + o })
            }
          })
        }),
        e
      )
    })()
  function D_(e, t, r) {
    Yr({ transaction: e, entry: t, event: 'unloadEvent', timeOrigin: r }),
      Yr({ transaction: e, entry: t, event: 'redirect', timeOrigin: r }),
      Yr({ transaction: e, entry: t, event: 'domContentLoadedEvent', timeOrigin: r }),
      Yr({ transaction: e, entry: t, event: 'loadEvent', timeOrigin: r }),
      Yr({ transaction: e, entry: t, event: 'connect', timeOrigin: r }),
      Yr({
        transaction: e,
        entry: t,
        event: 'secureConnection',
        timeOrigin: r,
        eventEnd: 'connectEnd',
        description: 'TLS/SSL',
      }),
      Yr({
        transaction: e,
        entry: t,
        event: 'fetch',
        timeOrigin: r,
        eventEnd: 'domainLookupStart',
        description: 'cache',
      }),
      Yr({ transaction: e, entry: t, event: 'domainLookup', timeOrigin: r, description: 'DNS' }),
      L_(e, t, r)
  }
  function R_(e, t, r, n, i) {
    var o = i + r,
      a = o + n
    return Tn(e, { description: t.name, endTimestamp: a, op: t.entryType, startTimestamp: o }), o
  }
  function N_(e, t, r, n, i, o) {
    if (!(t.initiatorType === 'xmlhttprequest' || t.initiatorType === 'fetch')) {
      var a = {}
      'transferSize' in t && (a['Transfer Size'] = t.transferSize),
        'encodedBodySize' in t && (a['Encoded Body Size'] = t.encodedBodySize),
        'decodedBodySize' in t && (a['Decoded Body Size'] = t.decodedBodySize)
      var s = o + n,
        u = s + i
      return (
        Tn(e, {
          description: r,
          endTimestamp: u,
          op: t.initiatorType ? 'resource.' + t.initiatorType : 'resource',
          startTimestamp: s,
          data: a,
        }),
        u
      )
    }
  }
  function Yr(e) {
    var t = e.transaction,
      r = e.entry,
      n = e.event,
      i = e.timeOrigin,
      o = e.eventEnd,
      a = e.description,
      s = o ? r[o] : r[n + 'End'],
      u = r[n + 'Start']
    !u ||
      !s ||
      Tn(t, { op: 'browser', description: a != null ? a : n, startTimestamp: i + Re(u), endTimestamp: i + Re(s) })
  }
  function L_(e, t, r) {
    Tn(e, {
      op: 'browser',
      description: 'request',
      startTimestamp: r + Re(t.requestStart),
      endTimestamp: r + Re(t.responseEnd),
    }),
      Tn(e, {
        op: 'browser',
        description: 'response',
        startTimestamp: r + Re(t.responseStart),
        endTimestamp: r + Re(t.responseEnd),
      })
  }
  function Tn(e, t) {
    var r = t.startTimestamp,
      n = cs(t, ['startTimestamp'])
    return r && e.startTimestamp > r && (e.startTimestamp = r), e.startChild(k({ startTimestamp: r }, n))
  }
  function Ws(e) {
    return typeof e == 'number' && isFinite(e)
  }
  var F_ = ['localhost', /^\//],
    Uo = { traceFetch: !0, traceXHR: !0, tracingOrigins: F_ }
  function xv(e) {
    var t = k(k({}, Uo), e),
      r = t.traceFetch,
      n = t.traceXHR,
      i = t.tracingOrigins,
      o = t.shouldCreateSpanForRequest,
      a = {},
      s = function (c) {
        if (a[c]) return a[c]
        var m = i
        return (
          (a[c] =
            m.some(function (h) {
              return yn(c, h)
            }) && !yn(c, 'sentry_key')),
          a[c]
        )
      },
      u = s
    typeof o == 'function' &&
      (u = function (c) {
        return s(c) && o(c)
      })
    var l = {}
    r &&
      De({
        callback: function (c) {
          A_(c, u, l)
        },
        type: 'fetch',
      }),
      n &&
        De({
          callback: function (c) {
            j_(c, u, l)
          },
          type: 'xhr',
        })
  }
  function A_(e, t, r) {
    if (!(!Bo() || !(e.fetchData && t(e.fetchData.url)))) {
      if (e.endTimestamp && e.fetchData.__span) {
        var n = r[e.fetchData.__span]
        n &&
          (e.response ? n.setHttpStatus(e.response.status) : e.error && n.setStatus(Pe.InternalError),
          n.finish(),
          delete r[e.fetchData.__span])
        return
      }
      var i = xn()
      if (i) {
        var n = i.startChild({
          data: k(k({}, e.fetchData), { type: 'fetch' }),
          description: e.fetchData.method + ' ' + e.fetchData.url,
          op: 'http',
        })
        ;(e.fetchData.__span = n.spanId), (r[n.spanId] = n)
        var o = (e.args[0] = e.args[0]),
          a = (e.args[1] = e.args[1] || {}),
          s = a.headers
        it(o, Request) && (s = o.headers),
          s
            ? typeof s.append == 'function'
              ? s.append('sentry-trace', n.toTraceparent())
              : Array.isArray(s)
              ? (s = Y(s, [['sentry-trace', n.toTraceparent()]]))
              : (s = k(k({}, s), { 'sentry-trace': n.toTraceparent() }))
            : (s = { 'sentry-trace': n.toTraceparent() }),
          (a.headers = s)
      }
    }
  }
  function j_(e, t, r) {
    var n, i
    if (
      !(
        !Bo() ||
        ((n = e.xhr) === null || n === void 0 ? void 0 : n.__sentry_own_request__) ||
        !(((i = e.xhr) === null || i === void 0 ? void 0 : i.__sentry_xhr__) && t(e.xhr.__sentry_xhr__.url))
      )
    ) {
      var o = e.xhr.__sentry_xhr__
      if (e.endTimestamp && e.xhr.__sentry_xhr_span_id__) {
        var a = r[e.xhr.__sentry_xhr_span_id__]
        a && (a.setHttpStatus(o.status_code), a.finish(), delete r[e.xhr.__sentry_xhr_span_id__])
        return
      }
      var s = xn()
      if (s) {
        var a = s.startChild({
          data: k(k({}, o.data), { type: 'xhr', method: o.method, url: o.url }),
          description: o.method + ' ' + o.url,
          op: 'http',
        })
        if (((e.xhr.__sentry_xhr_span_id__ = a.spanId), (r[e.xhr.__sentry_xhr_span_id__] = a), e.xhr.setRequestHeader))
          try {
            e.xhr.setRequestHeader('sentry-trace', a.toTraceparent())
          } catch (l) {}
      }
    }
  }
  var zo = Z()
  function Tv(e, t, r) {
    if ((t === void 0 && (t = !0), r === void 0 && (r = !0), !zo || !zo.location)) {
      R.warn('Could not initialize routing instrumentation due to invalid location')
      return
    }
    var n = zo.location.href,
      i
    t && (i = e({ name: zo.location.pathname, op: 'pageload' })),
      r &&
        De({
          callback: function (o) {
            var a = o.to,
              s = o.from
            if (s === void 0 && n && n.indexOf(a) !== -1) {
              n = void 0
              return
            }
            s !== a &&
              ((n = void 0),
              i && (R.log('[Tracing] Finishing current transaction with op: ' + i.op), i.finish()),
              (i = e({ name: zo.location.pathname, op: 'navigation' })))
          },
          type: 'history',
        })
  }
  var H_ = 600,
    B_ = k(
      {
        idleTimeout: nc,
        markBackgroundTransactions: !0,
        maxTransactionDuration: H_,
        routingInstrumentation: Tv,
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
      },
      Uo
    ),
    oc = (function () {
      function e(t) {
        ;(this.name = e.id), (this._metrics = new Sv()), (this._emitOptionsWarning = !1)
        var r = Uo.tracingOrigins
        t && t.tracingOrigins && Array.isArray(t.tracingOrigins) && t.tracingOrigins.length !== 0
          ? (r = t.tracingOrigins)
          : (this._emitOptionsWarning = !0),
          (this.options = k(k(k({}, B_), t), { tracingOrigins: r }))
      }
      return (
        (e.prototype.setupOnce = function (t, r) {
          var n = this
          ;(this._getCurrentHub = r),
            this._emitOptionsWarning &&
              (R.warn(
                '[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.'
              ),
              R.warn('[Tracing] We added a reasonable default for you: ' + Uo.tracingOrigins))
          var i = this.options,
            o = i.routingInstrumentation,
            a = i.startTransactionOnLocationChange,
            s = i.startTransactionOnPageLoad,
            u = i.markBackgroundTransactions,
            l = i.traceFetch,
            c = i.traceXHR,
            m = i.tracingOrigins,
            h = i.shouldCreateSpanForRequest
          o(
            function (_) {
              return n._createRouteTransaction(_)
            },
            s,
            a
          ),
            u && mv(),
            xv({ traceFetch: l, traceXHR: c, tracingOrigins: m, shouldCreateSpanForRequest: h })
        }),
        (e.prototype._createRouteTransaction = function (t) {
          var r = this
          if (!this._getCurrentHub) {
            R.warn('[Tracing] Did not create ' + t.op + ' transaction because _getCurrentHub is invalid.')
            return
          }
          var n = this.options,
            i = n.beforeNavigate,
            o = n.idleTimeout,
            a = n.maxTransactionDuration,
            s = t.op === 'pageload' ? U_() : void 0,
            u = k(k(k({}, t), s), { trimEnd: !0 }),
            l = typeof i == 'function' ? i(u) : u,
            c = l === void 0 ? k(k({}, u), { sampled: !1 }) : l
          c.sampled === !1 && R.log('[Tracing] Will not send ' + c.op + ' transaction because of beforeNavigate.'),
            R.log('[Tracing] Starting ' + c.op + ' transaction on scope')
          var m = this._getCurrentHub(),
            h = Z().location,
            _ = dv(m, c, o, !0, { location: h })
          return (
            _.registerBeforeFinishCallback(function (S, x) {
              r._metrics.addPerformanceEntries(S), W_(ov(a), S, x)
            }),
            _
          )
        }),
        (e.id = 'BrowserTracing'),
        e
      )
    })()
  function U_() {
    var e = z_('sentry-trace')
    if (e) return iv(e)
  }
  function z_(e) {
    var t = document.querySelector('meta[name=' + e + ']')
    return t ? t.getAttribute('content') : null
  }
  function W_(e, t, r) {
    var n = r - t.startTimestamp,
      i = r && (n > e || n < 0)
    i && (t.setStatus(Pe.DeadlineExceeded), t.setTag('maxTransactionDurationExceeded', 'true'))
  }
  var ac = {}
  wc(ac, { Express: () => kv, Mongo: () => Cv, Mysql: () => Pv, Postgres: () => bv })
  var kv = (function () {
    function e(t) {
      t === void 0 && (t = {}),
        (this.name = e.id),
        (this._router = t.router || t.app),
        (this._methods = (Array.isArray(t.methods) ? t.methods : []).concat('use'))
    }
    return (
      (e.prototype.setupOnce = function () {
        if (!this._router) {
          R.error('ExpressIntegration is missing an Express instance')
          return
        }
        $_(this._router, this._methods)
      }),
      (e.id = 'Express'),
      e
    )
  })()
  function Ov(e, t) {
    var r = e.length
    switch (r) {
      case 2:
        return function (n, i) {
          var o = i.__sentry_transaction
          if (o) {
            var a = o.startChild({ description: e.name, op: 'middleware.' + t })
            i.once('finish', function () {
              a.finish()
            })
          }
          return e.call(this, n, i)
        }
      case 3:
        return function (n, i, o) {
          var a,
            s = i.__sentry_transaction,
            u = (a = s) === null || a === void 0 ? void 0 : a.startChild({ description: e.name, op: 'middleware.' + t })
          e.call(this, n, i, function () {
            for (var l = [], c = 0; c < arguments.length; c++) l[c] = arguments[c]
            var m
            ;(m = u) === null || m === void 0 || m.finish(), o.call.apply(o, Y([this], l))
          })
        }
      case 4:
        return function (n, i, o, a) {
          var s,
            u = o.__sentry_transaction,
            l = (s = u) === null || s === void 0 ? void 0 : s.startChild({ description: e.name, op: 'middleware.' + t })
          e.call(this, n, i, o, function () {
            for (var c = [], m = 0; m < arguments.length; m++) c[m] = arguments[m]
            var h
            ;(h = l) === null || h === void 0 || h.finish(), a.call.apply(a, Y([this], c))
          })
        }
      default:
        throw new Error('Express middleware takes 2-4 arguments. Got: ' + r)
    }
  }
  function q_(e, t) {
    return e.map(function (r) {
      return typeof r == 'function'
        ? Ov(r, t)
        : Array.isArray(r)
        ? r.map(function (n) {
            return typeof n == 'function' ? Ov(n, t) : n
          })
        : r
    })
  }
  function V_(e, t) {
    var r = e[t]
    return (
      (e[t] = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
        return r.call.apply(r, Y([this], q_(n, t)))
      }),
      e
    )
  }
  function $_(e, t) {
    t === void 0 && (t = []),
      t.forEach(function (r) {
        return V_(e, r)
      })
  }
  var bv = (function () {
    function e() {
      this.name = e.id
    }
    return (
      (e.prototype.setupOnce = function (t, r) {
        var n = zr('pg')
        if (!n) {
          R.error('Postgres Integration was unable to require `pg` package.')
          return
        }
        ge(n.Client.prototype, 'query', function (i) {
          return function (o, a, s) {
            var u,
              l,
              c,
              m = r().getScope(),
              h = (u = m) === null || u === void 0 ? void 0 : u.getSpan(),
              _ =
                (l = h) === null || l === void 0
                  ? void 0
                  : l.startChild({ description: typeof o == 'string' ? o : o.text, op: 'db' })
            if (typeof s == 'function')
              return i.call(this, o, a, function (x, p) {
                var d
                ;(d = _) === null || d === void 0 || d.finish(), s(x, p)
              })
            if (typeof a == 'function')
              return i.call(this, o, function (x, p) {
                var d
                ;(d = _) === null || d === void 0 || d.finish(), a(x, p)
              })
            var S = typeof a != 'undefined' ? i.call(this, o, a) : i.call(this, o)
            return Qt(S)
              ? S.then(function (x) {
                  var p
                  return (p = _) === null || p === void 0 || p.finish(), x
                })
              : ((c = _) === null || c === void 0 || c.finish(), S)
          }
        })
      }),
      (e.id = 'Postgres'),
      e
    )
  })()
  var Pv = (function () {
    function e() {
      this.name = e.id
    }
    return (
      (e.prototype.setupOnce = function (t, r) {
        var n = zr('mysql/lib/Connection.js')
        if (!n) {
          R.error('Mysql Integration was unable to require `mysql` package.')
          return
        }
        ge(n, 'createQuery', function (i) {
          return function (o, a, s) {
            var u,
              l,
              c = r().getScope(),
              m = (u = c) === null || u === void 0 ? void 0 : u.getSpan(),
              h =
                (l = m) === null || l === void 0
                  ? void 0
                  : l.startChild({ description: typeof o == 'string' ? o : o.sql, op: 'db' })
            return typeof s == 'function'
              ? i.call(this, o, a, function (_, S, x) {
                  var p
                  ;(p = h) === null || p === void 0 || p.finish(), s(_, S, x)
                })
              : typeof a == 'function'
              ? i.call(this, o, function (_, S, x) {
                  var p
                  ;(p = h) === null || p === void 0 || p.finish(), a(_, S, x)
                })
              : i.call(this, o, a, s)
          }
        })
      }),
      (e.id = 'Mysql'),
      e
    )
  })()
  var G_ = [
      'aggregate',
      'bulkWrite',
      'countDocuments',
      'createIndex',
      'createIndexes',
      'deleteMany',
      'deleteOne',
      'distinct',
      'drop',
      'dropIndex',
      'dropIndexes',
      'estimatedDocumentCount',
      'find',
      'findOne',
      'findOneAndDelete',
      'findOneAndReplace',
      'findOneAndUpdate',
      'indexes',
      'indexExists',
      'indexInformation',
      'initializeOrderedBulkOp',
      'insertMany',
      'insertOne',
      'isCapped',
      'mapReduce',
      'options',
      'parallelCollectionScan',
      'rename',
      'replaceOne',
      'stats',
      'updateMany',
      'updateOne',
    ],
    Y_ = {
      bulkWrite: ['operations'],
      countDocuments: ['query'],
      createIndex: ['fieldOrSpec'],
      createIndexes: ['indexSpecs'],
      deleteMany: ['filter'],
      deleteOne: ['filter'],
      distinct: ['key', 'query'],
      dropIndex: ['indexName'],
      find: ['query'],
      findOne: ['query'],
      findOneAndDelete: ['filter'],
      findOneAndReplace: ['filter', 'replacement'],
      findOneAndUpdate: ['filter', 'update'],
      indexExists: ['indexes'],
      insertMany: ['docs'],
      insertOne: ['doc'],
      mapReduce: ['map', 'reduce'],
      rename: ['newName'],
      replaceOne: ['filter', 'doc'],
      updateMany: ['filter', 'update'],
      updateOne: ['filter', 'update'],
    },
    Cv = (function () {
      function e(t) {
        t === void 0 && (t = {}),
          (this.name = e.id),
          (this._operations = Array.isArray(t.operations) ? t.operations : G_),
          (this._describeOperations = 'describeOperations' in t ? t.describeOperations : !0),
          (this._useMongoose = !!t.useMongoose)
      }
      return (
        (e.prototype.setupOnce = function (t, r) {
          var n = this._useMongoose ? 'mongoose' : 'mongodb',
            i = zr(n)
          if (!i) {
            R.error('Mongo Integration was unable to require `' + n + '` package.')
            return
          }
          this._instrumentOperations(i.Collection, this._operations, r)
        }),
        (e.prototype._instrumentOperations = function (t, r, n) {
          var i = this
          r.forEach(function (o) {
            return i._patchOperation(t, o, n)
          })
        }),
        (e.prototype._patchOperation = function (t, r, n) {
          if (r in t.prototype) {
            var i = this._getSpanContextFromOperationArguments.bind(this)
            ge(t.prototype, r, function (o) {
              return function () {
                for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s]
                var u,
                  l,
                  c,
                  m,
                  h = a[a.length - 1],
                  _ = n().getScope(),
                  S = (u = _) === null || u === void 0 ? void 0 : u.getSpan()
                if (typeof h != 'function' || (r === 'mapReduce' && a.length === 2)) {
                  var x = (l = S) === null || l === void 0 ? void 0 : l.startChild(i(this, r, a)),
                    p = o.call.apply(o, Y([this], a))
                  return Qt(p)
                    ? p.then(function (v) {
                        var y
                        return (y = x) === null || y === void 0 || y.finish(), v
                      })
                    : ((c = x) === null || c === void 0 || c.finish(), p)
                }
                var d = (m = S) === null || m === void 0 ? void 0 : m.startChild(i(this, r, a.slice(0, -1)))
                return o.call.apply(
                  o,
                  Y([this], a.slice(0, -1), [
                    function (v, y) {
                      var E
                      ;(E = d) === null || E === void 0 || E.finish(), h(v, y)
                    },
                  ])
                )
              }
            })
          }
        }),
        (e.prototype._getSpanContextFromOperationArguments = function (t, r, n) {
          var i = { collectionName: t.collectionName, dbName: t.dbName, namespace: t.namespace },
            o = { op: 'db', description: r, data: i },
            a = Y_[r],
            s = Array.isArray(this._describeOperations)
              ? this._describeOperations.includes(r)
              : this._describeOperations
          if (!a || !s) return o
          try {
            if (r === 'mapReduce') {
              var u = ds(n, 2),
                l = u[0],
                c = u[1]
              ;(i[a[0]] = typeof l == 'string' ? l : l.name || '<anonymous>'),
                (i[a[1]] = typeof c == 'string' ? c : c.name || '<anonymous>')
            } else for (var m = 0; m < a.length; m++) i[a[m]] = JSON.stringify(n[m])
          } catch (h) {}
          return o
        }),
        (e.id = 'Mongo'),
        e
      )
    })()
  var Iv = k(k({}, ac), { BrowserTracing: oc })
  pv()
  var q = Ze(et())
  var Bt = Ze(et()),
    kn = (0, Bt.createContext)({ ctx: {}, auth: {}, config: { broadcaster: {} } }),
    X_ = ({ children: e }) => {
      let [t, r] = (0, Bt.useState)({}),
        [n, i] = (0, Bt.useState)({}),
        [o, a] = (0, Bt.useState)({ broadcaster: {} }),
        [s, u] = (0, Bt.useState)()
      return (
        (0, Bt.useEffect)(() => {
          var c
          let l = window.Twitch.ext
          !l ||
            (u(window.Twitch.ext),
            console.info(l, l.configuration),
            a({ broadcaster: JSON.parse(((c = l.configuration.broadcaster) == null ? void 0 : c.content) || '{}') }),
            l.configuration.onChanged((m) => {
              var h
              console.info('conf', m),
                a({ broadcaster: JSON.parse(((h = l.configuration.broadcaster) == null ? void 0 : h.content) || '{}') })
            }),
            l.onAuthorized((m) => {
              i(m), l.configuration.broadcaster || l.configuration.set('broadcaster', '1.0', '{}')
            }),
            l.onContext((m) => {
              document.body.classList.toggle('dark', m.theme === 'dark'), r(m)
            }))
        }, []),
        Bt.default.createElement(kn.Provider, { value: { ctx: t, auth: n, config: o, twitch: s } }, e)
      )
    },
    Mv = X_
  var vt = Ze(et())
  function sc() {
    let { config: e } = (0, vt.useContext)(kn),
      [t, r] = (0, vt.useState)(),
      [n, i] = (0, vt.useState)(new Map()),
      [o, a] = (0, vt.useState)(new Map()),
      [s, u] = (0, vt.useState)(new Map()),
      [l, c] = (0, vt.useState)(new Map()),
      [m, h] = (0, vt.useState)(new Map()),
      _ = e.broadcaster.gamemode || 'pve',
      S = (0, vt.useCallback)(
        async (p) => {
          try {
            if (!p) return
            let d = await fetch(
              `https://cachedproxy.xyz/api/gw2-build/${encodeURIComponent(p)}/${e.broadcaster.character}`
            )
            if (d.ok) {
              let v = await d.json(),
                y = v.characterData,
                E = new Map(v.equipmentData),
                D = new Map(v.skinData),
                b = new Map(v.skillData),
                P = new Map(v.traitData),
                M = new Map(v.specializationData),
                O = v.amuletData
              r(y)
              let A = new Map(
                y.equipment.map((z) => [z.slot, _c(Yo({}, z), { item: E.get(z.id), skin: D.get(z.skin) })])
              )
              A.set('PvP_Amulet', { item: O }),
                y.equipment_pvp && A.set('PvP_Rune', { item: E.get(y.equipment_pvp.rune) }),
                a(E),
                i(A),
                u(b),
                c(P),
                h(M)
            } else console.error('Not okay', d.status, d.ok, (await d.text()) || 'Empty')
          } catch (d) {
            console.error('Not okay', d)
          }
        },
        [e.broadcaster.character]
      )
    return (
      (0, vt.useEffect)(() => {
        S(e.broadcaster.apiKey)
      }, [e.broadcaster.apiKey, S]),
      {
        eliteSpec: [...m.values()].find(({ elite: p }) => p),
        character: t,
        equipment: n,
        equipmentById: o,
        skills: s,
        traits: l,
        specializations: m,
        gamemode: _,
      }
    )
  }
  var Rv = Ze(et())
  var qs = class {
    constructor(t) {
      this.profession = 1
      this.specializations = [
        { id: 0, traits: [0, 0, 0] },
        { id: 0, traits: [0, 0, 0] },
        { id: 0, traits: [0, 0, 0] },
      ]
      this.skills = {
        terrestrial: { heal: 0, utilities: [0, 0, 0], elite: 0 },
        aquatic: { heal: 0, utilities: [0, 0, 0], elite: 0 },
      }
      this.specific = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      t !== void 0 && this.parse(t)
    }
    parse(t) {
      let r = /\[&((?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?)\]/,
        n = t.match(r)
      if (n !== null && n.length === 2) {
        let i = atob(n[1]),
          o = new Array(i.length)
        for (let a = 0; a < i.length; a++) o[a] = i.charCodeAt(a)
        if (o.length > 0 && o[0] !== 13) throw 'Wrong header type'
        if (o.length >= 44) {
          this.profession = o[1]
          for (let a = 0; a < 3; a++) {
            let s = a * 2
            this.specializations[a].id = o[s + 2]
            for (let u = 0; u < 3; u++) this.specializations[a].traits[u] = (o[s + 3] >> (u * 2)) & 3
          }
          ;(this.skills.terrestrial.heal = o[8] + (o[9] << 8)), (this.skills.aquatic.heal = o[10] + (o[11] << 8))
          for (let a = 0; a < 3; a++) {
            let s = a * 4 + 12
            ;(this.skills.terrestrial.utilities[a] = o[s] + (o[s + 1] << 8)),
              (this.skills.aquatic.utilities[a] = o[s + 2] + (o[s + 3] << 8))
          }
          ;(this.skills.terrestrial.elite = o[24] + (o[25] << 8)),
            (this.skills.aquatic.elite = o[26] + (o[27] << 8)),
            (this.specific = o.slice(28))
        } else throw 'Invalid build template'
      } else throw 'Invalid format'
    }
    toString() {
      let t = [13]
      t.push(this.profession)
      for (let r = 0; r < 3; r++)
        t.push(this.specializations[r].id),
          t.push(
            (this.specializations[r].traits[2] << 4) |
              (this.specializations[r].traits[1] << 2) |
              this.specializations[r].traits[0]
          )
      t.push(this.skills.terrestrial.heal & 255, (this.skills.terrestrial.heal >> 8) & 255),
        t.push(this.skills.aquatic.heal & 255, (this.skills.aquatic.heal >> 8) & 255)
      for (let r = 0; r < 3; r++)
        t.push(this.skills.terrestrial.utilities[r] & 255, (this.skills.terrestrial.utilities[r] >> 8) & 255),
          t.push(this.skills.aquatic.utilities[r] & 255, (this.skills.aquatic.utilities[r] >> 8) & 255)
      t.push(this.skills.terrestrial.elite & 255, (this.skills.terrestrial.elite >> 8) & 255),
        t.push(this.skills.aquatic.elite & 255, (this.skills.aquatic.elite >> 8) & 255)
      for (let r = 0; r < this.specific.length; r++) t.push(this.specific[r])
      return '[&' + btoa(String.fromCharCode.apply(null, t)) + ']'
    }
  }
  var Vs = {
      BoonDuration: 'Concentration',
      ConditionDamage: 'Condition Damage',
      ConditionDuration: 'Expertise',
      CritDamage: 'Ferocity',
      HealingPower: 'Healing Power',
    },
    Wo = {
      Basic: 'var(--color-text)',
      Fine: '#62A4DA',
      Masterwork: '#1a9306',
      Rare: '#fcd00b',
      Exotic: '#ffa405',
      Ascended: '#fb3e8d',
      Legendary: '#a26ded',
    },
    Dv = {
      Guardian: 1,
      Warrior: 2,
      Engineer: 3,
      Ranger: 4,
      Thief: 5,
      Elementalist: 6,
      Mesmer: 7,
      Necromancer: 8,
      Revenant: 9,
    }
  function uc(e, t, r) {
    return (0, Rv.useMemo)(() => {
      try {
        let n = Dv[e == null ? void 0 : e.profession],
          i = (e == null ? void 0 : e.specializations[r]) || [],
          o = new qs()
        ;(o.profession = n),
          i.forEach(({ id: s, traits: u }, l) => {
            ;(o.specializations[l].id = s),
              (o.specializations[l].traits = u.map((c) => {
                var h
                let m = (h = t.get(c)) == null ? void 0 : h.order
                return m > -1 ? m + 1 : 0
              }))
          })
        let a = e == null ? void 0 : e.skills[r]
        return (
          (o.skills.terrestrial.heal = (a == null ? void 0 : a.heal) || 0),
          (o.skills.terrestrial.utilities = (a == null ? void 0 : a.utilities) || []),
          (o.skills.terrestrial.elite = (a == null ? void 0 : a.elite) || 0),
          o.toString()
        )
      } catch (n) {
        return n.message !== 'btoa is not defined' && console.error(n), ''
      }
    }, [e, r, t])
  }
  var er = Ze(et()),
    K_ = (e, t = { resetTimeout: 1e3 }) => {
      let r = (u) => {
          var _, S, x, p
          let l = document.createElement('textarea')
          ;(l.value = u),
            l.setAttribute('readonly', ''),
            (l.style.position = 'absolute'),
            (l.style.left = '-9999px'),
            document.body.appendChild(l)
          let m =
            (((_ = document.getSelection()) == null ? void 0 : _.rangeCount) || 0) > 0
              ? (S = document.getSelection()) == null
                ? void 0
                : S.getRangeAt(0)
              : !1
          l.select()
          let h = document.execCommand('copy')
          return (
            document.body.removeChild(l),
            m &&
              ((x = document.getSelection()) == null || x.removeAllRanges(),
              (p = document.getSelection()) == null || p.addRange(m)),
            h
          )
        },
        n = er.useRef(!1),
        i = er.useRef(),
        [o, a] = er.useState(!1)
      er.useEffect(
        () => (
          (n.current = !0),
          () => {
            i.current && clearTimeout(i.current), (n.current = !1)
          }
        ),
        []
      )
      let s = er.useCallback(() => {
        i.current && clearTimeout(i.current), a(r(e)), (i.current = setTimeout(() => a(!1), t.resetTimeout))
      }, [e, t.resetTimeout])
      return (
        er.useEffect(
          () => () => {
            a(!1)
          },
          [e]
        ),
        [o, s]
      )
    },
    Nv = K_
  var Lv = Ze(et()),
    Q_ = ({ children: e, style: t }) =>
      Lv.createElement(
        'h2',
        { style: Yo({ fontSize: '1rem', lineHeight: '1rem', textAlign: 'center', marginTop: 10, marginBottom: 8 }, t) },
        e
      ),
    $s = Q_
  var ee = Ze(et())
  var Gs = Ze(et()),
    Av = Ze(Fv())
  var J_ = ({ html: e, children: t }) => {
      let { ctx: r } = (0, Gs.useContext)(kn)
      return Gs.default.createElement(
        Av.Tooltip,
        {
          position: 'top',
          animateFill: !1,
          arrow: !0,
          arrowSize: 'big',
          duration: 150,
          animation: 'fade',
          html: e,
          style: { cursor: 'pointer' },
          theme: r.theme,
        },
        t
      )
    },
    Ys = J_
  function pc(e) {
    return e.percent
      ? `${e.text}: ${e.percent}%`
      : e.distance
      ? `${e.text}: ${e.distance}`
      : e.status
      ? `${e.status} (${e.duration}s): ${e.description}`
      : e.type === 'Number' || e.type === 'Recharge'
      ? `${e.text}: ${e.value}`
      : e.description || e.text
  }
  function Vo(e) {
    return (e || '')
      .replace(/<c(.+?)>/g, (r, n) => `<span class='description-${n.replace(/^=@/, '').trim()}'>`)
      .replace(/<\/c>/g, '</span>')
      .replace(/<c.+?>(.+?)<\/c>/g, (r, n) => n)
      .replace(/\\n/g, '<br>')
  }
  function Ne({ equipment: e, equipmentById: t, slot: r }) {
    var u, l, c, m, h, _, S, x, p, d, v
    let n = e.get(r)
    if (!n) return null
    let i = ((u = n.skin) == null ? void 0 : u.icon) || ((l = n.item) == null ? void 0 : l.icon),
      o = (n.upgrades || []).map((y) => t.get(y)),
      a = (n.infusions || []).map((y) => t.get(y)),
      s = ee.default.createElement(
        'div',
        null,
        ee.default.createElement(
          'div',
          {
            style: {
              fontWeight: 'bold',
              fontSize: '0.9rem',
              color: Wo[(c = n.item) == null ? void 0 : c.rarity] || Wo.Basic,
            },
          },
          (m = n.item) == null ? void 0 : m.name
        ),
        n.skin
          ? ee.default.createElement(
              'div',
              { style: { fontSize: '0.8rem', marginBottom: '0.2em' } },
              'Skin: ',
              n.skin.name
            )
          : null,
        ee.default.createElement(
          'div',
          { style: { fontSize: '0.8rem' } },
          Object.entries(((h = n.stats) == null ? void 0 : h.attributes) || {}).map(([y, E]) =>
            ee.default.createElement('div', { key: y }, '+ ', E, ' ', Vs[y] || y)
          ),
          Object.entries(((_ = n.item) == null ? void 0 : _.attributes) || {}).map(([y, E]) =>
            ee.default.createElement('div', { key: y }, '+ ', E, ' ', Vs[y] || y)
          ),
          (
            ((p = (x = (S = n.item) == null ? void 0 : S.details) == null ? void 0 : x.infix_upgrade) == null
              ? void 0
              : p.attributes) || []
          ).map((y) =>
            ee.default.createElement('div', { key: y.attribute }, '+ ', y.modifier, ' ', Vs[y.attribute] || y.attribute)
          ),
          (((v = (d = n.item) == null ? void 0 : d.details) == null ? void 0 : v.bonuses) || []).map((y, E) =>
            ee.default.createElement('div', { key: E }, y)
          )
        ),
        ee.default.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: 5 } },
          o.map((y) => {
            var E, D, b, P, M
            return ee.default.createElement(
              'div',
              { key: y.id, style: { color: Wo[y.rarity] } },
              ee.default.createElement('p', { style: { fontSize: '0.9rem' } }, y.name),
              ee.default.createElement('p', {
                style: { fontSize: '0.8rem' },
                dangerouslySetInnerHTML: {
                  __html: Vo(
                    (b = (D = (E = y.details) == null ? void 0 : E.infix_upgrade) == null ? void 0 : D.buff) == null
                      ? void 0
                      : b.description
                  ),
                },
              }),
              ee.default.createElement('p', {
                style: { fontSize: '0.7rem' },
                dangerouslySetInnerHTML: {
                  __html: (M = (P = y.details) == null ? void 0 : P.bonuses) == null ? void 0 : M.join('<br>'),
                },
              })
            )
          })
        ),
        ee.default.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'column', gap: 5 } },
          a.map((y) => {
            var E, D, b, P, M
            return ee.default.createElement(
              'div',
              { key: y.id, style: { color: Wo[y.rarity] } },
              ee.default.createElement('p', { style: { fontSize: '0.9rem' } }, y.name),
              ee.default.createElement('p', {
                style: { fontSize: '0.8rem' },
                dangerouslySetInnerHTML: {
                  __html: Vo(
                    (b = (D = (E = y.details) == null ? void 0 : E.infix_upgrade) == null ? void 0 : D.buff) == null
                      ? void 0
                      : b.description
                  ),
                },
              }),
              ee.default.createElement('p', {
                style: { fontSize: '0.7rem' },
                dangerouslySetInnerHTML: {
                  __html: (M = (P = y.details) == null ? void 0 : P.bonuses) == null ? void 0 : M.join('<br>'),
                },
              })
            )
          })
        )
      )
    return ee.default.createElement(Ys, { html: s }, ee.default.createElement('img', { src: i, height: 35, width: 40 }))
  }
  function ki({ skills: e, id: t }) {
    let r = e.get(t)
    if (!r) return null
    let n = ee.default.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '0.1rem' } },
      ee.default.createElement('div', { style: { fontWeight: 'bold', color: 'var(--color-tooltip-title)' } }, r.name),
      ee.default.createElement('p', {
        style: { fontSize: '0.8rem' },
        dangerouslySetInnerHTML: { __html: Vo(r.description) },
      }),
      ee.default.createElement(
        'div',
        { style: { display: 'flex', flexDirection: 'column', gap: 2 } },
        r.facts.map((i, o) =>
          ee.default.createElement(
            'div',
            { key: o, style: { display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' } },
            i.icon ? ee.default.createElement('img', { height: 25, width: 25, src: i.icon }) : null,
            ee.default.createElement('div', { style: { textAlign: 'left', fontSize: '0.8rem' } }, pc(i))
          )
        )
      )
    )
    return ee.default.createElement(
      Ys,
      { html: n },
      ee.default.createElement('img', { src: r == null ? void 0 : r.icon, height: 40, width: 40 })
    )
  }
  function jv({ traits: e, id: t }) {
    let r = e.get(t)
    if (!r) return null
    let n = ee.default.createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', gap: '0.1rem' } },
      ee.default.createElement('div', { style: { fontWeight: 'bold', color: 'var(--color-tooltip-title)' } }, r.name),
      r.description
        ? ee.default.createElement('p', {
            style: { fontSize: '0.9rem' },
            dangerouslySetInnerHTML: { __html: Vo(r.description) },
          })
        : ee.default.createElement(
            'div',
            { style: { display: 'flex', flexDirection: 'column', gap: 2 } },
            r.facts.map((i, o) =>
              ee.default.createElement(
                'div',
                { key: o, style: { display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' } },
                i.icon ? ee.default.createElement('img', { height: 25, width: 25, src: i.icon }) : null,
                ee.default.createElement('div', { style: { textAlign: 'left', fontSize: '0.8rem' } }, pc(i))
              )
            )
          )
    )
    return ee.default.createElement(
      Ys,
      { html: n },
      ee.default.createElement('img', { src: r == null ? void 0 : r.icon, height: 30, width: 30 })
    )
  }
  function mc() {
    var h, _, S, x, p, d, v
    let { config: e } = (0, q.useContext)(kn),
      {
        character: t,
        eliteSpec: r,
        equipment: n,
        gamemode: i,
        equipmentById: o,
        skills: a,
        specializations: s,
        traits: u,
      } = sc(),
      l = uc(t, u, i),
      [c, m] = Nv(l)
    return q.default.createElement(
      'div',
      { style: { padding: 5, marginTop: -6, overflow: 'hidden', display: 'flex', flexDirection: 'column' } },
      t
        ? q.default.createElement(
            q.default.Fragment,
            null,
            q.default.createElement(
              $s,
              { style: { color: `var(--color-${(h = t.profession) == null ? void 0 : h.toLowerCase()})` } },
              t.name,
              ' (',
              r ? r.name : t.profession,
              ')'
            ),
            q.default.createElement(
              'div',
              { style: { display: 'flex', flexDirection: 'row', gap: 15, justifyContent: 'center' } },
              i === 'pvp'
                ? null
                : q.default.createElement(
                    'div',
                    { style: { display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' } },
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Helm' }),
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Shoulders' }),
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Coat' }),
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Gloves' }),
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Leggings' }),
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Boots' })
                  ),
              q.default.createElement(
                'div',
                {
                  style: { display: 'flex', flexDirection: 'column', gap: i === 'pvp' ? 5 : 45, alignItems: 'center' },
                },
                i === 'pvp'
                  ? null
                  : q.default.createElement(
                      'div',
                      { style: { display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center' } },
                      q.default.createElement(
                        'div',
                        { style: { display: 'flex', flexDirection: 'row', gap: 5 } },
                        q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Backpack' }),
                        q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Accessory1' }),
                        q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Accessory2' })
                      ),
                      q.default.createElement(
                        'div',
                        { style: { display: 'flex', flexDirection: 'row', gap: 5 } },
                        q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Amulet' }),
                        q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Ring1' }),
                        q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'Ring2' })
                      )
                    ),
                i === 'pvp'
                  ? q.default.createElement(
                      'div',
                      { style: { display: 'flex', flexDirection: 'row', gap: 5 } },
                      q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'PvP_Amulet' }),
                      q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'PvP_Rune' })
                    )
                  : null,
                q.default.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column', gap: 5 } },
                  q.default.createElement(
                    'div',
                    { style: { display: 'flex', flexDirection: 'row', gap: 5 } },
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'WeaponA1' }),
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'WeaponA2' })
                  ),
                  q.default.createElement(
                    'div',
                    { style: { display: 'flex', flexDirection: 'row', gap: 5 } },
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'WeaponB1' }),
                    q.default.createElement(Ne, { equipment: n, equipmentById: o, slot: 'WeaponB2' })
                  )
                )
              )
            ),
            t.skills
              ? q.default.createElement(
                  q.default.Fragment,
                  null,
                  q.default.createElement($s, null, 'Skills'),
                  q.default.createElement(
                    'div',
                    { style: { display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center' } },
                    q.default.createElement(ki, { skills: a, id: (_ = t.skills[i]) == null ? void 0 : _.heal }),
                    q.default.createElement(ki, { skills: a, id: (S = t.skills[i]) == null ? void 0 : S.utilities[0] }),
                    q.default.createElement(ki, { skills: a, id: (x = t.skills[i]) == null ? void 0 : x.utilities[1] }),
                    q.default.createElement(ki, { skills: a, id: (p = t.skills[i]) == null ? void 0 : p.utilities[2] }),
                    q.default.createElement(ki, { skills: a, id: (d = t.skills[i]) == null ? void 0 : d.elite })
                  )
                )
              : null,
            t.specializations
              ? q.default.createElement(
                  q.default.Fragment,
                  null,
                  q.default.createElement($s, null, 'Traits'),
                  (v = t.specializations[i]) == null
                    ? void 0
                    : v.map((y) => {
                        var E
                        return q.default.createElement(
                          'div',
                          { key: y.id },
                          q.default.createElement(
                            'div',
                            { style: { display: 'flex', flexDirection: 'row', gap: 5, justifyContent: 'center' } },
                            q.default.createElement(
                              'div',
                              { style: { flex: 1 } },
                              (E = s.get(y.id)) == null ? void 0 : E.name
                            ),
                            q.default.createElement(
                              'div',
                              {
                                style: {
                                  display: 'flex',
                                  flexDirection: 'row',
                                  gap: 5,
                                  justifyContent: 'center',
                                  flex: 2,
                                },
                              },
                              y.traits.map((D) => q.default.createElement(jv, { key: D, traits: u, id: D }))
                            )
                          )
                        )
                      })
                )
              : null,
            q.default.createElement(
              'button',
              {
                style: {
                  textAlign: 'right',
                  fontSize: '0.7rem',
                  position: 'absolute',
                  bottom: 4,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  opacity: 0.8,
                  cursor: 'copy',
                  padding: '1px 2px',
                  lineHeight: '0.7rem',
                },
                onClick: m,
              },
              c ? 'Copied!' : 'Copy Build Template'
            )
          )
        : q.default.createElement(
            'div',
            { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' } },
            e.broadcaster.apiKey ? 'Loading' : 'Not configured'
          )
    )
  }
  var On = Ze(et())
  function Z_(e) {
    return (
      console.info(e),
      On.default.createElement(
        'div',
        {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          },
        },
        On.default.createElement('p', null, 'An error has occured'),
        On.default.createElement('p', null, 'Error ID: ', e.eventId),
        On.default.createElement(
          'a',
          null,
          'Get in contact with me on',
          ' ',
          On.default.createElement(
            'a',
            {
              style: { color: 'var(--color-mesmer)' },
              href: 'https://reddit.com/user/Maael',
              target: '_blank',
              rel: 'noreferrer',
            },
            'Reddit'
          ),
          ' ',
          'or email me'
        )
      )
    )
  }
  var ew = ({ children: e }) => On.default.createElement(rc, { fallback: Z_ }, e),
    Hv = ew
  var Bv = '1.0.1'
  console.info('[mount] Panel')
  try {
    Kf({
      dsn: 'https://0ab1a10c55b14007992ed1217eb9e9e9@o304997.ingest.sentry.io/5845657',
      integrations: [new Iv.BrowserTracing()],
      tracesSampleRate: 1,
      release: Bv,
      environment: 'production',
    })
  } catch (e) {
    console.error('[sentry]', e)
  }
  Uv.default.render(
    Xs.default.createElement(Hv, null, Xs.default.createElement(Mv, null, Xs.default.createElement(mc, null))),
    document.querySelector('#app')
  )
})()
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
//# sourceMappingURL=panel.js.map
