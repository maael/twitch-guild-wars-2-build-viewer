;(() => {
  var rh = Object.create
  var mn = Object.defineProperty,
    nh = Object.defineProperties,
    ih = Object.getOwnPropertyDescriptor,
    oh = Object.getOwnPropertyDescriptors,
    ah = Object.getOwnPropertyNames,
    Ml = Object.getOwnPropertySymbols,
    sh = Object.getPrototypeOf,
    jl = Object.prototype.hasOwnProperty,
    uh = Object.prototype.propertyIsEnumerable
  var Fl = (e, t, r) => (t in e ? mn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
    Ea = (e, t) => {
      for (var r in t || (t = {})) jl.call(t, r) && Fl(e, r, t[r])
      if (Ml) for (var r of Ml(t)) uh.call(t, r) && Fl(e, r, t[r])
      return e
    },
    xa = (e, t) => nh(e, oh(t)),
    lh = (e) => mn(e, '__esModule', { value: !0 })
  var Pe = (e, t) => () => t || e((t = { exports: {} }).exports, t), t.exports,
    Dl = (e, t) => {
      for (var r in t) mn(e, r, { get: t[r], enumerable: !0 })
    },
    ch = (e, t, r) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let n of ah(t))
          !jl.call(e, n) &&
            n !== 'default' &&
            mn(e, n, { get: () => t[n], enumerable: !(r = ih(t, n)) || r.enumerable })
      return e
    },
    rt = (e) =>
      ch(
        lh(
          mn(
            e != null ? rh(sh(e)) : {},
            'default',
            e && e.__esModule && 'default' in e
              ? { get: () => e.default, enumerable: !0 }
              : { value: e, enumerable: !0 }
          )
        ),
        e
      )
  var ka = Pe((f_, Al) => {
    'use strict'
    var Ll = Object.getOwnPropertySymbols,
      fh = Object.prototype.hasOwnProperty,
      ph = Object.prototype.propertyIsEnumerable
    function dh(e) {
      if (e == null) throw new TypeError('Object.assign cannot be called with null or undefined')
      return Object(e)
    }
    function mh() {
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
    Al.exports = mh()
      ? Object.assign
      : function (e, t) {
          for (var r, n = dh(e), i, o = 1; o < arguments.length; o++) {
            r = Object(arguments[o])
            for (var a in r) fh.call(r, a) && (n[a] = r[a])
            if (Ll) {
              i = Ll(r)
              for (var s = 0; s < i.length; s++) ph.call(r, i[s]) && (n[i[s]] = r[i[s]])
            }
          }
          return n
        }
  })
  var ec = Pe((F) => {
    'use strict'
    var Ta = ka(),
      _r = 60103,
      Ul = 60106
    F.Fragment = 60107
    F.StrictMode = 60108
    F.Profiler = 60114
    var Hl = 60109,
      zl = 60110,
      Bl = 60112
    F.Suspense = 60113
    var Wl = 60115,
      Vl = 60116
    typeof Symbol == 'function' &&
      Symbol.for &&
      ((xe = Symbol.for),
      (_r = xe('react.element')),
      (Ul = xe('react.portal')),
      (F.Fragment = xe('react.fragment')),
      (F.StrictMode = xe('react.strict_mode')),
      (F.Profiler = xe('react.profiler')),
      (Hl = xe('react.provider')),
      (zl = xe('react.context')),
      (Bl = xe('react.forward_ref')),
      (F.Suspense = xe('react.suspense')),
      (Wl = xe('react.memo')),
      (Vl = xe('react.lazy')))
    var xe,
      ql = typeof Symbol == 'function' && Symbol.iterator
    function hh(e) {
      return e === null || typeof e != 'object'
        ? null
        : ((e = (ql && e[ql]) || e['@@iterator']), typeof e == 'function' ? e : null)
    }
    function hn(e) {
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
    var $l = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Gl = {}
    function Sr(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = Gl), (this.updater = r || $l)
    }
    Sr.prototype.isReactComponent = {}
    Sr.prototype.setState = function (e, t) {
      if (typeof e != 'object' && typeof e != 'function' && e != null) throw Error(hn(85))
      this.updater.enqueueSetState(this, e, t, 'setState')
    }
    Sr.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
    }
    function Yl() {}
    Yl.prototype = Sr.prototype
    function Oa(e, t, r) {
      ;(this.props = e), (this.context = t), (this.refs = Gl), (this.updater = r || $l)
    }
    var Ia = (Oa.prototype = new Yl())
    Ia.constructor = Oa
    Ta(Ia, Sr.prototype)
    Ia.isPureReactComponent = !0
    var Ca = { current: null },
      Kl = Object.prototype.hasOwnProperty,
      Xl = { key: !0, ref: !0, __self: !0, __source: !0 }
    function Ql(e, t, r) {
      var n,
        i = {},
        o = null,
        a = null
      if (t != null)
        for (n in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = '' + t.key), t))
          Kl.call(t, n) && !Xl.hasOwnProperty(n) && (i[n] = t[n])
      var s = arguments.length - 2
      if (s === 1) i.children = r
      else if (1 < s) {
        for (var u = Array(s), l = 0; l < s; l++) u[l] = arguments[l + 2]
        i.children = u
      }
      if (e && e.defaultProps) for (n in ((s = e.defaultProps), s)) i[n] === void 0 && (i[n] = s[n])
      return { $$typeof: _r, type: e, key: o, ref: a, props: i, _owner: Ca.current }
    }
    function vh(e, t) {
      return { $$typeof: _r, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
    }
    function ba(e) {
      return typeof e == 'object' && e !== null && e.$$typeof === _r
    }
    function gh(e) {
      var t = { '=': '=0', ':': '=2' }
      return (
        '$' +
        e.replace(/[=:]/g, function (r) {
          return t[r]
        })
      )
    }
    var Jl = /\/+/g
    function Ra(e, t) {
      return typeof e == 'object' && e !== null && e.key != null ? gh('' + e.key) : t.toString(36)
    }
    function Oi(e, t, r, n, i) {
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
              case _r:
              case Ul:
                a = !0
            }
        }
      if (a)
        return (
          (a = e),
          (i = i(a)),
          (e = n === '' ? '.' + Ra(a, 0) : n),
          Array.isArray(i)
            ? ((r = ''),
              e != null && (r = e.replace(Jl, '$&/') + '/'),
              Oi(i, t, r, '', function (l) {
                return l
              }))
            : i != null &&
              (ba(i) &&
                (i = vh(i, r + (!i.key || (a && a.key === i.key) ? '' : ('' + i.key).replace(Jl, '$&/') + '/') + e)),
              t.push(i)),
          1
        )
      if (((a = 0), (n = n === '' ? '.' : n + ':'), Array.isArray(e)))
        for (var s = 0; s < e.length; s++) {
          o = e[s]
          var u = n + Ra(o, s)
          a += Oi(o, t, r, u, i)
        }
      else if (((u = hh(e)), typeof u == 'function'))
        for (e = u.call(e), s = 0; !(o = e.next()).done; ) (o = o.value), (u = n + Ra(o, s++)), (a += Oi(o, t, r, u, i))
      else if (o === 'object')
        throw (
          ((t = '' + e),
          Error(hn(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
        )
      return a
    }
    function Ii(e, t, r) {
      if (e == null) return e
      var n = [],
        i = 0
      return (
        Oi(e, n, '', '', function (o) {
          return t.call(r, o, i++)
        }),
        n
      )
    }
    function yh(e) {
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
    var Zl = { current: null }
    function nt() {
      var e = Zl.current
      if (e === null) throw Error(hn(321))
      return e
    }
    var _h = {
      ReactCurrentDispatcher: Zl,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: Ca,
      IsSomeRendererActing: { current: !1 },
      assign: Ta,
    }
    F.Children = {
      map: Ii,
      forEach: function (e, t, r) {
        Ii(
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
          Ii(e, function () {
            t++
          }),
          t
        )
      },
      toArray: function (e) {
        return (
          Ii(e, function (t) {
            return t
          }) || []
        )
      },
      only: function (e) {
        if (!ba(e)) throw Error(hn(143))
        return e
      },
    }
    F.Component = Sr
    F.PureComponent = Oa
    F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _h
    F.cloneElement = function (e, t, r) {
      if (e == null) throw Error(hn(267, e))
      var n = Ta({}, e.props),
        i = e.key,
        o = e.ref,
        a = e._owner
      if (t != null) {
        if (
          (t.ref !== void 0 && ((o = t.ref), (a = Ca.current)),
          t.key !== void 0 && (i = '' + t.key),
          e.type && e.type.defaultProps)
        )
          var s = e.type.defaultProps
        for (u in t) Kl.call(t, u) && !Xl.hasOwnProperty(u) && (n[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
      }
      var u = arguments.length - 2
      if (u === 1) n.children = r
      else if (1 < u) {
        s = Array(u)
        for (var l = 0; l < u; l++) s[l] = arguments[l + 2]
        n.children = s
      }
      return { $$typeof: _r, type: e.type, key: i, ref: o, props: n, _owner: a }
    }
    F.createContext = function (e, t) {
      return (
        t === void 0 && (t = null),
        (e = {
          $$typeof: zl,
          _calculateChangedBits: t,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (e.Provider = { $$typeof: Hl, _context: e }),
        (e.Consumer = e)
      )
    }
    F.createElement = Ql
    F.createFactory = function (e) {
      var t = Ql.bind(null, e)
      return (t.type = e), t
    }
    F.createRef = function () {
      return { current: null }
    }
    F.forwardRef = function (e) {
      return { $$typeof: Bl, render: e }
    }
    F.isValidElement = ba
    F.lazy = function (e) {
      return { $$typeof: Vl, _payload: { _status: -1, _result: e }, _init: yh }
    }
    F.memo = function (e, t) {
      return { $$typeof: Wl, type: e, compare: t === void 0 ? null : t }
    }
    F.useCallback = function (e, t) {
      return nt().useCallback(e, t)
    }
    F.useContext = function (e, t) {
      return nt().useContext(e, t)
    }
    F.useDebugValue = function () {}
    F.useEffect = function (e, t) {
      return nt().useEffect(e, t)
    }
    F.useImperativeHandle = function (e, t, r) {
      return nt().useImperativeHandle(e, t, r)
    }
    F.useLayoutEffect = function (e, t) {
      return nt().useLayoutEffect(e, t)
    }
    F.useMemo = function (e, t) {
      return nt().useMemo(e, t)
    }
    F.useReducer = function (e, t, r) {
      return nt().useReducer(e, t, r)
    }
    F.useRef = function (e) {
      return nt().useRef(e)
    }
    F.useState = function (e) {
      return nt().useState(e)
    }
    F.version = '17.0.2'
  })
  var yt = Pe((d_, tc) => {
    'use strict'
    tc.exports = ec()
  })
  var sc = Pe((D) => {
    'use strict'
    var wr, vn, Ci, Na
    typeof performance == 'object' && typeof performance.now == 'function'
      ? ((rc = performance),
        (D.unstable_now = function () {
          return rc.now()
        }))
      : ((Pa = Date),
        (nc = Pa.now()),
        (D.unstable_now = function () {
          return Pa.now() - nc
        }))
    var rc, Pa, nc
    typeof window == 'undefined' || typeof MessageChannel != 'function'
      ? ((Er = null),
        (Ma = null),
        (ja = function () {
          if (Er !== null)
            try {
              var e = D.unstable_now()
              Er(!0, e), (Er = null)
            } catch (t) {
              throw (setTimeout(ja, 0), t)
            }
        }),
        (wr = function (e) {
          Er !== null ? setTimeout(wr, 0, e) : ((Er = e), setTimeout(ja, 0))
        }),
        (vn = function (e, t) {
          Ma = setTimeout(e, t)
        }),
        (Ci = function () {
          clearTimeout(Ma)
        }),
        (D.unstable_shouldYield = function () {
          return !1
        }),
        (Na = D.unstable_forceFrameRate = function () {}))
      : ((ic = window.setTimeout),
        (oc = window.clearTimeout),
        typeof console != 'undefined' &&
          ((ac = window.cancelAnimationFrame),
          typeof window.requestAnimationFrame != 'function' &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
          typeof ac != 'function' &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            )),
        (gn = !1),
        (yn = null),
        (bi = -1),
        (Fa = 5),
        (Da = 0),
        (D.unstable_shouldYield = function () {
          return D.unstable_now() >= Da
        }),
        (Na = function () {}),
        (D.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
              )
            : (Fa = 0 < e ? Math.floor(1e3 / e) : 5)
        }),
        (La = new MessageChannel()),
        (Ri = La.port2),
        (La.port1.onmessage = function () {
          if (yn !== null) {
            var e = D.unstable_now()
            Da = e + Fa
            try {
              yn(!0, e) ? Ri.postMessage(null) : ((gn = !1), (yn = null))
            } catch (t) {
              throw (Ri.postMessage(null), t)
            }
          } else gn = !1
        }),
        (wr = function (e) {
          ;(yn = e), gn || ((gn = !0), Ri.postMessage(null))
        }),
        (vn = function (e, t) {
          bi = ic(function () {
            e(D.unstable_now())
          }, t)
        }),
        (Ci = function () {
          oc(bi), (bi = -1)
        }))
    var Er, Ma, ja, ic, oc, ac, gn, yn, bi, Fa, Da, La, Ri
    function Aa(e, t) {
      var r = e.length
      e.push(t)
      e: for (;;) {
        var n = (r - 1) >>> 1,
          i = e[n]
        if (i !== void 0 && 0 < Pi(i, t)) (e[n] = t), (e[r] = i), (r = n)
        else break e
      }
    }
    function Me(e) {
      return (e = e[0]), e === void 0 ? null : e
    }
    function Ni(e) {
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
            if (a !== void 0 && 0 > Pi(a, r))
              u !== void 0 && 0 > Pi(u, a) ? ((e[n] = u), (e[s] = r), (n = s)) : ((e[n] = a), (e[o] = r), (n = o))
            else if (u !== void 0 && 0 > Pi(u, r)) (e[n] = u), (e[s] = r), (n = s)
            else break e
          }
        }
        return t
      }
      return null
    }
    function Pi(e, t) {
      var r = e.sortIndex - t.sortIndex
      return r !== 0 ? r : e.id - t.id
    }
    var We = [],
      _t = [],
      Sh = 1,
      ke = null,
      ae = 3,
      Mi = !1,
      Yt = !1,
      _n = !1
    function Ua(e) {
      for (var t = Me(_t); t !== null; ) {
        if (t.callback === null) Ni(_t)
        else if (t.startTime <= e) Ni(_t), (t.sortIndex = t.expirationTime), Aa(We, t)
        else break
        t = Me(_t)
      }
    }
    function Ha(e) {
      if (((_n = !1), Ua(e), !Yt))
        if (Me(We) !== null) (Yt = !0), wr(za)
        else {
          var t = Me(_t)
          t !== null && vn(Ha, t.startTime - e)
        }
    }
    function za(e, t) {
      ;(Yt = !1), _n && ((_n = !1), Ci()), (Mi = !0)
      var r = ae
      try {
        for (Ua(t), ke = Me(We); ke !== null && (!(ke.expirationTime > t) || (e && !D.unstable_shouldYield())); ) {
          var n = ke.callback
          if (typeof n == 'function') {
            ;(ke.callback = null), (ae = ke.priorityLevel)
            var i = n(ke.expirationTime <= t)
            ;(t = D.unstable_now()), typeof i == 'function' ? (ke.callback = i) : ke === Me(We) && Ni(We), Ua(t)
          } else Ni(We)
          ke = Me(We)
        }
        if (ke !== null) var o = !0
        else {
          var a = Me(_t)
          a !== null && vn(Ha, a.startTime - t), (o = !1)
        }
        return o
      } finally {
        ;(ke = null), (ae = r), (Mi = !1)
      }
    }
    var wh = Na
    D.unstable_IdlePriority = 5
    D.unstable_ImmediatePriority = 1
    D.unstable_LowPriority = 4
    D.unstable_NormalPriority = 3
    D.unstable_Profiling = null
    D.unstable_UserBlockingPriority = 2
    D.unstable_cancelCallback = function (e) {
      e.callback = null
    }
    D.unstable_continueExecution = function () {
      Yt || Mi || ((Yt = !0), wr(za))
    }
    D.unstable_getCurrentPriorityLevel = function () {
      return ae
    }
    D.unstable_getFirstCallbackNode = function () {
      return Me(We)
    }
    D.unstable_next = function (e) {
      switch (ae) {
        case 1:
        case 2:
        case 3:
          var t = 3
          break
        default:
          t = ae
      }
      var r = ae
      ae = t
      try {
        return e()
      } finally {
        ae = r
      }
    }
    D.unstable_pauseExecution = function () {}
    D.unstable_requestPaint = wh
    D.unstable_runWithPriority = function (e, t) {
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
      var r = ae
      ae = e
      try {
        return t()
      } finally {
        ae = r
      }
    }
    D.unstable_scheduleCallback = function (e, t, r) {
      var n = D.unstable_now()
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
        (e = { id: Sh++, callback: t, priorityLevel: e, startTime: r, expirationTime: i, sortIndex: -1 }),
        r > n
          ? ((e.sortIndex = r), Aa(_t, e), Me(We) === null && e === Me(_t) && (_n ? Ci() : (_n = !0), vn(Ha, r - n)))
          : ((e.sortIndex = i), Aa(We, e), Yt || Mi || ((Yt = !0), wr(za))),
        e
      )
    }
    D.unstable_wrapCallback = function (e) {
      var t = ae
      return function () {
        var r = ae
        ae = t
        try {
          return e.apply(this, arguments)
        } finally {
          ae = r
        }
      }
    }
  })
  var lc = Pe((h_, uc) => {
    'use strict'
    uc.exports = sc()
  })
  var Qp = Pe((Re) => {
    'use strict'
    var ji = yt(),
      z = ka(),
      ee = lc()
    function x(e) {
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
    if (!ji) throw Error(x(227))
    var cc = new Set(),
      Sn = {}
    function Kt(e, t) {
      xr(e, t), xr(e + 'Capture', t)
    }
    function xr(e, t) {
      for (Sn[e] = t, e = 0; e < t.length; e++) cc.add(t[e])
    }
    var it = !(
        typeof window == 'undefined' ||
        typeof window.document == 'undefined' ||
        typeof window.document.createElement == 'undefined'
      ),
      Eh =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      fc = Object.prototype.hasOwnProperty,
      pc = {},
      dc = {}
    function xh(e) {
      return fc.call(dc, e) ? !0 : fc.call(pc, e) ? !1 : Eh.test(e) ? (dc[e] = !0) : ((pc[e] = !0), !1)
    }
    function kh(e, t, r, n) {
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
    function Th(e, t, r, n) {
      if (t === null || typeof t == 'undefined' || kh(e, t, r, n)) return !0
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
    function fe(e, t, r, n, i, o, a) {
      ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = n),
        (this.attributeNamespace = i),
        (this.mustUseProperty = r),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = a)
    }
    var re = {}
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function (e) {
        re[e] = new fe(e, 0, !1, e, null, !1, !1)
      })
    ;[
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0]
      re[t] = new fe(t, 1, !1, e[1], null, !1, !1)
    })
    ;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
      re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1)
    })
    ;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
      re[e] = new fe(e, 2, !1, e, null, !1, !1)
    })
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1)
      })
    ;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      re[e] = new fe(e, 3, !0, e, null, !1, !1)
    })
    ;['capture', 'download'].forEach(function (e) {
      re[e] = new fe(e, 4, !1, e, null, !1, !1)
    })
    ;['cols', 'rows', 'size', 'span'].forEach(function (e) {
      re[e] = new fe(e, 6, !1, e, null, !1, !1)
    })
    ;['rowSpan', 'start'].forEach(function (e) {
      re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1)
    })
    var Ba = /[\-:]([a-z])/g
    function Wa(e) {
      return e[1].toUpperCase()
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(Ba, Wa)
        re[t] = new fe(t, 1, !1, e, null, !1, !1)
      })
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
      var t = e.replace(Ba, Wa)
      re[t] = new fe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    })
    ;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(Ba, Wa)
      re[t] = new fe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
    })
    ;['tabIndex', 'crossOrigin'].forEach(function (e) {
      re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1)
    })
    re.xlinkHref = new fe('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
    ;['src', 'href', 'action', 'formAction'].forEach(function (e) {
      re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0)
    })
    function Va(e, t, r, n) {
      var i = re.hasOwnProperty(t) ? re[t] : null,
        o =
          i !== null
            ? i.type === 0
            : n
            ? !1
            : !(!(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N'))
      o ||
        (Th(t, r, i, n) && (r = null),
        n || i === null
          ? xh(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
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
    var Xt = ji.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      wn = 60103,
      Qt = 60106,
      St = 60107,
      qa = 60108,
      En = 60114,
      $a = 60109,
      Ga = 60110,
      Fi = 60112,
      xn = 60113,
      Di = 60120,
      Li = 60115,
      Ya = 60116,
      Ka = 60121,
      Xa = 60128,
      mc = 60129,
      Qa = 60130,
      Ja = 60131
    typeof Symbol == 'function' &&
      Symbol.for &&
      ((X = Symbol.for),
      (wn = X('react.element')),
      (Qt = X('react.portal')),
      (St = X('react.fragment')),
      (qa = X('react.strict_mode')),
      (En = X('react.profiler')),
      ($a = X('react.provider')),
      (Ga = X('react.context')),
      (Fi = X('react.forward_ref')),
      (xn = X('react.suspense')),
      (Di = X('react.suspense_list')),
      (Li = X('react.memo')),
      (Ya = X('react.lazy')),
      (Ka = X('react.block')),
      X('react.scope'),
      (Xa = X('react.opaque.id')),
      (mc = X('react.debug_trace_mode')),
      (Qa = X('react.offscreen')),
      (Ja = X('react.legacy_hidden')))
    var X,
      hc = typeof Symbol == 'function' && Symbol.iterator
    function kn(e) {
      return e === null || typeof e != 'object'
        ? null
        : ((e = (hc && e[hc]) || e['@@iterator']), typeof e == 'function' ? e : null)
    }
    var Za
    function Tn(e) {
      if (Za === void 0)
        try {
          throw Error()
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/)
          Za = (t && t[1]) || ''
        }
      return (
        `
` +
        Za +
        e
      )
    }
    var es = !1
    function Ai(e, t) {
      if (!e || es) return ''
      es = !0
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
        ;(es = !1), (Error.prepareStackTrace = r)
      }
      return (e = e ? e.displayName || e.name : '') ? Tn(e) : ''
    }
    function Oh(e) {
      switch (e.tag) {
        case 5:
          return Tn(e.type)
        case 16:
          return Tn('Lazy')
        case 13:
          return Tn('Suspense')
        case 19:
          return Tn('SuspenseList')
        case 0:
        case 2:
        case 15:
          return (e = Ai(e.type, !1)), e
        case 11:
          return (e = Ai(e.type.render, !1)), e
        case 22:
          return (e = Ai(e.type._render, !1)), e
        case 1:
          return (e = Ai(e.type, !0)), e
        default:
          return ''
      }
    }
    function kr(e) {
      if (e == null) return null
      if (typeof e == 'function') return e.displayName || e.name || null
      if (typeof e == 'string') return e
      switch (e) {
        case St:
          return 'Fragment'
        case Qt:
          return 'Portal'
        case En:
          return 'Profiler'
        case qa:
          return 'StrictMode'
        case xn:
          return 'Suspense'
        case Di:
          return 'SuspenseList'
      }
      if (typeof e == 'object')
        switch (e.$$typeof) {
          case Ga:
            return (e.displayName || 'Context') + '.Consumer'
          case $a:
            return (e._context.displayName || 'Context') + '.Provider'
          case Fi:
            var t = e.render
            return (
              (t = t.displayName || t.name || ''), e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
            )
          case Li:
            return kr(e.type)
          case Ka:
            return kr(e._render)
          case Ya:
            ;(t = e._payload), (e = e._init)
            try {
              return kr(e(t))
            } catch (r) {}
        }
      return null
    }
    function wt(e) {
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
    function vc(e) {
      var t = e.type
      return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
    }
    function Ih(e) {
      var t = vc(e) ? 'checked' : 'value',
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
    function Ui(e) {
      e._valueTracker || (e._valueTracker = Ih(e))
    }
    function gc(e) {
      if (!e) return !1
      var t = e._valueTracker
      if (!t) return !0
      var r = t.getValue(),
        n = ''
      return e && (n = vc(e) ? (e.checked ? 'true' : 'false') : e.value), (e = n), e !== r ? (t.setValue(e), !0) : !1
    }
    function Hi(e) {
      if (((e = e || (typeof document != 'undefined' ? document : void 0)), typeof e == 'undefined')) return null
      try {
        return e.activeElement || e.body
      } catch (t) {
        return e.body
      }
    }
    function ts(e, t) {
      var r = t.checked
      return z({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r != null ? r : e._wrapperState.initialChecked,
      })
    }
    function yc(e, t) {
      var r = t.defaultValue == null ? '' : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked
      ;(r = wt(t.value != null ? t.value : r)),
        (e._wrapperState = {
          initialChecked: n,
          initialValue: r,
          controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
        })
    }
    function _c(e, t) {
      ;(t = t.checked), t != null && Va(e, 'checked', t, !1)
    }
    function rs(e, t) {
      _c(e, t)
      var r = wt(t.value),
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
        ? ns(e, t.type, r)
        : t.hasOwnProperty('defaultValue') && ns(e, t.type, wt(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function Sc(e, t, r) {
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
    function ns(e, t, r) {
      ;(t !== 'number' || Hi(e.ownerDocument) !== e) &&
        (r == null
          ? (e.defaultValue = '' + e._wrapperState.initialValue)
          : e.defaultValue !== '' + r && (e.defaultValue = '' + r))
    }
    function Ch(e) {
      var t = ''
      return (
        ji.Children.forEach(e, function (r) {
          r != null && (t += r)
        }),
        t
      )
    }
    function is(e, t) {
      return (e = z({ children: void 0 }, t)), (t = Ch(t.children)) && (e.children = t), e
    }
    function Tr(e, t, r, n) {
      if (((e = e.options), t)) {
        t = {}
        for (var i = 0; i < r.length; i++) t['$' + r[i]] = !0
        for (r = 0; r < e.length; r++)
          (i = t.hasOwnProperty('$' + e[r].value)),
            e[r].selected !== i && (e[r].selected = i),
            i && n && (e[r].defaultSelected = !0)
      } else {
        for (r = '' + wt(r), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === r) {
            ;(e[i].selected = !0), n && (e[i].defaultSelected = !0)
            return
          }
          t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
      }
    }
    function os(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(x(91))
      return z({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue })
    }
    function wc(e, t) {
      var r = t.value
      if (r == null) {
        if (((r = t.children), (t = t.defaultValue), r != null)) {
          if (t != null) throw Error(x(92))
          if (Array.isArray(r)) {
            if (!(1 >= r.length)) throw Error(x(93))
            r = r[0]
          }
          t = r
        }
        t == null && (t = ''), (r = t)
      }
      e._wrapperState = { initialValue: wt(r) }
    }
    function Ec(e, t) {
      var r = wt(t.value),
        n = wt(t.defaultValue)
      r != null &&
        ((r = '' + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
        n != null && (e.defaultValue = '' + n)
    }
    function xc(e) {
      var t = e.textContent
      t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
    }
    var as = {
      html: 'http://www.w3.org/1999/xhtml',
      mathml: 'http://www.w3.org/1998/Math/MathML',
      svg: 'http://www.w3.org/2000/svg',
    }
    function kc(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg'
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML'
        default:
          return 'http://www.w3.org/1999/xhtml'
      }
    }
    function ss(e, t) {
      return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? kc(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e
    }
    var zi,
      Tc = (function (e) {
        return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
          ? function (t, r, n, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, r, n, i)
              })
            }
          : e
      })(function (e, t) {
        if (e.namespaceURI !== as.svg || 'innerHTML' in e) e.innerHTML = t
        else {
          for (
            zi = zi || document.createElement('div'),
              zi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
              t = zi.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild)
          for (; t.firstChild; ) e.appendChild(t.firstChild)
        }
      })
    function On(e, t) {
      if (t) {
        var r = e.firstChild
        if (r && r === e.lastChild && r.nodeType === 3) {
          r.nodeValue = t
          return
        }
      }
      e.textContent = t
    }
    var In = {
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
      bh = ['Webkit', 'ms', 'Moz', 'O']
    Object.keys(In).forEach(function (e) {
      bh.forEach(function (t) {
        ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e])
      })
    })
    function Oc(e, t, r) {
      return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : r || typeof t != 'number' || t === 0 || (In.hasOwnProperty(e) && In[e])
        ? ('' + t).trim()
        : t + 'px'
    }
    function Ic(e, t) {
      e = e.style
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var n = r.indexOf('--') === 0,
            i = Oc(r, t[r], n)
          r === 'float' && (r = 'cssFloat'), n ? e.setProperty(r, i) : (e[r] = i)
        }
    }
    var Rh = z(
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
    function us(e, t) {
      if (t) {
        if (Rh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(x(137, e))
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(x(60))
          if (!(typeof t.dangerouslySetInnerHTML == 'object' && '__html' in t.dangerouslySetInnerHTML))
            throw Error(x(61))
        }
        if (t.style != null && typeof t.style != 'object') throw Error(x(62))
      }
    }
    function ls(e, t) {
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
    function cs(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      )
    }
    var fs = null,
      Or = null,
      Ir = null
    function Cc(e) {
      if ((e = qn(e))) {
        if (typeof fs != 'function') throw Error(x(280))
        var t = e.stateNode
        t && ((t = so(t)), fs(e.stateNode, e.type, t))
      }
    }
    function bc(e) {
      Or ? (Ir ? Ir.push(e) : (Ir = [e])) : (Or = e)
    }
    function Rc() {
      if (Or) {
        var e = Or,
          t = Ir
        if (((Ir = Or = null), Cc(e), t)) for (e = 0; e < t.length; e++) Cc(t[e])
      }
    }
    function ps(e, t) {
      return e(t)
    }
    function Nc(e, t, r, n, i) {
      return e(t, r, n, i)
    }
    function ds() {}
    var Pc = ps,
      Jt = !1,
      ms = !1
    function hs() {
      ;(Or !== null || Ir !== null) && (ds(), Rc())
    }
    function Nh(e, t, r) {
      if (ms) return e(t, r)
      ms = !0
      try {
        return Pc(e, t, r)
      } finally {
        ;(ms = !1), hs()
      }
    }
    function Cn(e, t) {
      var r = e.stateNode
      if (r === null) return null
      var n = so(r)
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
      if (r && typeof r != 'function') throw Error(x(231, t, typeof r))
      return r
    }
    var vs = !1
    if (it)
      try {
        ;(Cr = {}),
          Object.defineProperty(Cr, 'passive', {
            get: function () {
              vs = !0
            },
          }),
          window.addEventListener('test', Cr, Cr),
          window.removeEventListener('test', Cr, Cr)
      } catch (e) {
        vs = !1
      }
    var Cr
    function Ph(e, t, r, n, i, o, a, s, u) {
      var l = Array.prototype.slice.call(arguments, 3)
      try {
        t.apply(r, l)
      } catch (c) {
        this.onError(c)
      }
    }
    var bn = !1,
      Bi = null,
      Wi = !1,
      gs = null,
      Mh = {
        onError: function (e) {
          ;(bn = !0), (Bi = e)
        },
      }
    function jh(e, t, r, n, i, o, a, s, u) {
      ;(bn = !1), (Bi = null), Ph.apply(Mh, arguments)
    }
    function Fh(e, t, r, n, i, o, a, s, u) {
      if ((jh.apply(this, arguments), bn)) {
        if (bn) {
          var l = Bi
          ;(bn = !1), (Bi = null)
        } else throw Error(x(198))
        Wi || ((Wi = !0), (gs = l))
      }
    }
    function Zt(e) {
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
    function Mc(e) {
      if (e.tag === 13) {
        var t = e.memoizedState
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
      }
      return null
    }
    function jc(e) {
      if (Zt(e) !== e) throw Error(x(188))
    }
    function Dh(e) {
      var t = e.alternate
      if (!t) {
        if (((t = Zt(e)), t === null)) throw Error(x(188))
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
            if (o === r) return jc(i), e
            if (o === n) return jc(i), t
            o = o.sibling
          }
          throw Error(x(188))
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
            if (!a) throw Error(x(189))
          }
        }
        if (r.alternate !== n) throw Error(x(190))
      }
      if (r.tag !== 3) throw Error(x(188))
      return r.stateNode.current === r ? e : t
    }
    function Fc(e) {
      if (((e = Dh(e)), !e)) return null
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
    function Dc(e, t) {
      for (var r = e.alternate; t !== null; ) {
        if (t === e || t === r) return !0
        t = t.return
      }
      return !1
    }
    var Lc,
      ys,
      Ac,
      Uc,
      _s = !1,
      Ve = [],
      Et = null,
      xt = null,
      kt = null,
      Rn = new Map(),
      Nn = new Map(),
      Pn = [],
      Hc =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
          ' '
        )
    function Ss(e, t, r, n, i) {
      return { blockedOn: e, domEventName: t, eventSystemFlags: r | 16, nativeEvent: i, targetContainers: [n] }
    }
    function zc(e, t) {
      switch (e) {
        case 'focusin':
        case 'focusout':
          Et = null
          break
        case 'dragenter':
        case 'dragleave':
          xt = null
          break
        case 'mouseover':
        case 'mouseout':
          kt = null
          break
        case 'pointerover':
        case 'pointerout':
          Rn.delete(t.pointerId)
          break
        case 'gotpointercapture':
        case 'lostpointercapture':
          Nn.delete(t.pointerId)
      }
    }
    function Mn(e, t, r, n, i, o) {
      return e === null || e.nativeEvent !== o
        ? ((e = Ss(t, r, n, i, o)), t !== null && ((t = qn(t)), t !== null && ys(t)), e)
        : ((e.eventSystemFlags |= n), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e)
    }
    function Lh(e, t, r, n, i) {
      switch (t) {
        case 'focusin':
          return (Et = Mn(Et, e, t, r, n, i)), !0
        case 'dragenter':
          return (xt = Mn(xt, e, t, r, n, i)), !0
        case 'mouseover':
          return (kt = Mn(kt, e, t, r, n, i)), !0
        case 'pointerover':
          var o = i.pointerId
          return Rn.set(o, Mn(Rn.get(o) || null, e, t, r, n, i)), !0
        case 'gotpointercapture':
          return (o = i.pointerId), Nn.set(o, Mn(Nn.get(o) || null, e, t, r, n, i)), !0
      }
      return !1
    }
    function Ah(e) {
      var t = er(e.target)
      if (t !== null) {
        var r = Zt(t)
        if (r !== null) {
          if (((t = r.tag), t === 13)) {
            if (((t = Mc(r)), t !== null)) {
              ;(e.blockedOn = t),
                Uc(e.lanePriority, function () {
                  ee.unstable_runWithPriority(e.priority, function () {
                    Ac(r)
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
    function Vi(e) {
      if (e.blockedOn !== null) return !1
      for (var t = e.targetContainers; 0 < t.length; ) {
        var r = Os(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (r !== null) return (t = qn(r)), t !== null && ys(t), (e.blockedOn = r), !1
        t.shift()
      }
      return !0
    }
    function Bc(e, t, r) {
      Vi(e) && r.delete(t)
    }
    function Uh() {
      for (_s = !1; 0 < Ve.length; ) {
        var e = Ve[0]
        if (e.blockedOn !== null) {
          ;(e = qn(e.blockedOn)), e !== null && Lc(e)
          break
        }
        for (var t = e.targetContainers; 0 < t.length; ) {
          var r = Os(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
          if (r !== null) {
            e.blockedOn = r
            break
          }
          t.shift()
        }
        e.blockedOn === null && Ve.shift()
      }
      Et !== null && Vi(Et) && (Et = null),
        xt !== null && Vi(xt) && (xt = null),
        kt !== null && Vi(kt) && (kt = null),
        Rn.forEach(Bc),
        Nn.forEach(Bc)
    }
    function jn(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null), _s || ((_s = !0), ee.unstable_scheduleCallback(ee.unstable_NormalPriority, Uh)))
    }
    function Wc(e) {
      function t(i) {
        return jn(i, e)
      }
      if (0 < Ve.length) {
        jn(Ve[0], e)
        for (var r = 1; r < Ve.length; r++) {
          var n = Ve[r]
          n.blockedOn === e && (n.blockedOn = null)
        }
      }
      for (
        Et !== null && jn(Et, e),
          xt !== null && jn(xt, e),
          kt !== null && jn(kt, e),
          Rn.forEach(t),
          Nn.forEach(t),
          r = 0;
        r < Pn.length;
        r++
      )
        (n = Pn[r]), n.blockedOn === e && (n.blockedOn = null)
      for (; 0 < Pn.length && ((r = Pn[0]), r.blockedOn === null); ) Ah(r), r.blockedOn === null && Pn.shift()
    }
    function qi(e, t) {
      var r = {}
      return (r[e.toLowerCase()] = t.toLowerCase()), (r['Webkit' + e] = 'webkit' + t), (r['Moz' + e] = 'moz' + t), r
    }
    var br = {
        animationend: qi('Animation', 'AnimationEnd'),
        animationiteration: qi('Animation', 'AnimationIteration'),
        animationstart: qi('Animation', 'AnimationStart'),
        transitionend: qi('Transition', 'TransitionEnd'),
      },
      ws = {},
      Vc = {}
    it &&
      ((Vc = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete br.animationend.animation, delete br.animationiteration.animation, delete br.animationstart.animation),
      'TransitionEvent' in window || delete br.transitionend.transition)
    function $i(e) {
      if (ws[e]) return ws[e]
      if (!br[e]) return e
      var t = br[e],
        r
      for (r in t) if (t.hasOwnProperty(r) && r in Vc) return (ws[e] = t[r])
      return e
    }
    var qc = $i('animationend'),
      $c = $i('animationiteration'),
      Gc = $i('animationstart'),
      Yc = $i('transitionend'),
      Kc = new Map(),
      Es = new Map(),
      Hh = [
        'abort',
        'abort',
        qc,
        'animationEnd',
        $c,
        'animationIteration',
        Gc,
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
        Yc,
        'transitionEnd',
        'waiting',
        'waiting',
      ]
    function xs(e, t) {
      for (var r = 0; r < e.length; r += 2) {
        var n = e[r],
          i = e[r + 1]
        ;(i = 'on' + (i[0].toUpperCase() + i.slice(1))), Es.set(n, t), Kc.set(n, i), Kt(i, [n])
      }
    }
    var zh = ee.unstable_now
    zh()
    var A = 8
    function Rr(e) {
      if ((1 & e) != 0) return (A = 15), 1
      if ((2 & e) != 0) return (A = 14), 2
      if ((4 & e) != 0) return (A = 13), 4
      var t = 24 & e
      return t !== 0
        ? ((A = 12), t)
        : (e & 32) != 0
        ? ((A = 11), 32)
        : ((t = 192 & e),
          t !== 0
            ? ((A = 10), t)
            : (e & 256) != 0
            ? ((A = 9), 256)
            : ((t = 3584 & e),
              t !== 0
                ? ((A = 8), t)
                : (e & 4096) != 0
                ? ((A = 7), 4096)
                : ((t = 4186112 & e),
                  t !== 0
                    ? ((A = 6), t)
                    : ((t = 62914560 & e),
                      t !== 0
                        ? ((A = 5), t)
                        : e & 67108864
                        ? ((A = 4), 67108864)
                        : (e & 134217728) != 0
                        ? ((A = 3), 134217728)
                        : ((t = 805306368 & e),
                          t !== 0 ? ((A = 2), t) : (1073741824 & e) != 0 ? ((A = 1), 1073741824) : ((A = 8), e))))))
    }
    function Bh(e) {
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
    function Wh(e) {
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
          throw Error(x(358, e))
      }
    }
    function Fn(e, t) {
      var r = e.pendingLanes
      if (r === 0) return (A = 0)
      var n = 0,
        i = 0,
        o = e.expiredLanes,
        a = e.suspendedLanes,
        s = e.pingedLanes
      if (o !== 0) (n = o), (i = A = 15)
      else if (((o = r & 134217727), o !== 0)) {
        var u = o & ~a
        u !== 0 ? ((n = Rr(u)), (i = A)) : ((s &= o), s !== 0 && ((n = Rr(s)), (i = A)))
      } else (o = r & ~a), o !== 0 ? ((n = Rr(o)), (i = A)) : s !== 0 && ((n = Rr(s)), (i = A))
      if (n === 0) return 0
      if (((n = 31 - Tt(n)), (n = r & (((0 > n ? 0 : 1 << n) << 1) - 1)), t !== 0 && t !== n && (t & a) == 0)) {
        if ((Rr(t), i <= A)) return t
        A = i
      }
      if (((t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= n; 0 < t; ) (r = 31 - Tt(t)), (i = 1 << r), (n |= e[r]), (t &= ~i)
      return n
    }
    function Xc(e) {
      return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Gi(e, t) {
      switch (e) {
        case 15:
          return 1
        case 14:
          return 2
        case 12:
          return (e = Nr(24 & ~t)), e === 0 ? Gi(10, t) : e
        case 10:
          return (e = Nr(192 & ~t)), e === 0 ? Gi(8, t) : e
        case 8:
          return (e = Nr(3584 & ~t)), e === 0 && ((e = Nr(4186112 & ~t)), e === 0 && (e = 512)), e
        case 2:
          return (t = Nr(805306368 & ~t)), t === 0 && (t = 268435456), t
      }
      throw Error(x(358, e))
    }
    function Nr(e) {
      return e & -e
    }
    function ks(e) {
      for (var t = [], r = 0; 31 > r; r++) t.push(e)
      return t
    }
    function Yi(e, t, r) {
      e.pendingLanes |= t
      var n = t - 1
      ;(e.suspendedLanes &= n), (e.pingedLanes &= n), (e = e.eventTimes), (t = 31 - Tt(t)), (e[t] = r)
    }
    var Tt = Math.clz32 ? Math.clz32 : $h,
      Vh = Math.log,
      qh = Math.LN2
    function $h(e) {
      return e === 0 ? 32 : (31 - ((Vh(e) / qh) | 0)) | 0
    }
    var Gh = ee.unstable_UserBlockingPriority,
      Yh = ee.unstable_runWithPriority,
      Ki = !0
    function Kh(e, t, r, n) {
      Jt || ds()
      var i = Ts,
        o = Jt
      Jt = !0
      try {
        Nc(i, e, t, r, n)
      } finally {
        ;(Jt = o) || hs()
      }
    }
    function Xh(e, t, r, n) {
      Yh(Gh, Ts.bind(null, e, t, r, n))
    }
    function Ts(e, t, r, n) {
      if (Ki) {
        var i
        if ((i = (t & 4) == 0) && 0 < Ve.length && -1 < Hc.indexOf(e)) (e = Ss(null, e, t, r, n)), Ve.push(e)
        else {
          var o = Os(e, t, r, n)
          if (o === null) i && zc(e, n)
          else {
            if (i) {
              if (-1 < Hc.indexOf(e)) {
                ;(e = Ss(o, e, t, r, n)), Ve.push(e)
                return
              }
              if (Lh(o, e, t, r, n)) return
              zc(e, n)
            }
            Of(e, t, n, null, r)
          }
        }
      }
    }
    function Os(e, t, r, n) {
      var i = cs(n)
      if (((i = er(i)), i !== null)) {
        var o = Zt(i)
        if (o === null) i = null
        else {
          var a = o.tag
          if (a === 13) {
            if (((i = Mc(o)), i !== null)) return i
            i = null
          } else if (a === 3) {
            if (o.stateNode.hydrate) return o.tag === 3 ? o.stateNode.containerInfo : null
            i = null
          } else o !== i && (i = null)
        }
      }
      return Of(e, t, n, i, r), null
    }
    var Ot = null,
      Is = null,
      Xi = null
    function Qc() {
      if (Xi) return Xi
      var e,
        t = Is,
        r = t.length,
        n,
        i = 'value' in Ot ? Ot.value : Ot.textContent,
        o = i.length
      for (e = 0; e < r && t[e] === i[e]; e++);
      var a = r - e
      for (n = 1; n <= a && t[r - n] === i[o - n]; n++);
      return (Xi = i.slice(e, 1 < n ? 1 - n : void 0))
    }
    function Qi(e) {
      var t = e.keyCode
      return (
        'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      )
    }
    function Ji() {
      return !0
    }
    function Jc() {
      return !1
    }
    function _e(e) {
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
            ? Ji
            : Jc),
          (this.isPropagationStopped = Jc),
          this
        )
      }
      return (
        z(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0
            var r = this.nativeEvent
            r &&
              (r.preventDefault ? r.preventDefault() : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
              (this.isDefaultPrevented = Ji))
          },
          stopPropagation: function () {
            var r = this.nativeEvent
            r &&
              (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
              (this.isPropagationStopped = Ji))
          },
          persist: function () {},
          isPersistent: Ji,
        }),
        t
      )
    }
    var Pr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Cs = _e(Pr),
      Dn = z({}, Pr, { view: 0, detail: 0 }),
      Qh = _e(Dn),
      bs,
      Rs,
      Ln,
      Zi = z({}, Dn, {
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
        getModifierState: Ps,
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
            : (e !== Ln &&
                (Ln && e.type === 'mousemove'
                  ? ((bs = e.screenX - Ln.screenX), (Rs = e.screenY - Ln.screenY))
                  : (Rs = bs = 0),
                (Ln = e)),
              bs)
        },
        movementY: function (e) {
          return 'movementY' in e ? e.movementY : Rs
        },
      }),
      Zc = _e(Zi),
      Jh = z({}, Zi, { dataTransfer: 0 }),
      Zh = _e(Jh),
      ev = z({}, Dn, { relatedTarget: 0 }),
      Ns = _e(ev),
      tv = z({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      rv = _e(tv),
      nv = z({}, Pr, {
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData
        },
      }),
      iv = _e(nv),
      ov = z({}, Pr, { data: 0 }),
      ef = _e(ov),
      av = {
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
      sv = {
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
      uv = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
    function lv(e) {
      var t = this.nativeEvent
      return t.getModifierState ? t.getModifierState(e) : (e = uv[e]) ? !!t[e] : !1
    }
    function Ps() {
      return lv
    }
    var cv = z({}, Dn, {
        key: function (e) {
          if (e.key) {
            var t = av[e.key] || e.key
            if (t !== 'Unidentified') return t
          }
          return e.type === 'keypress'
            ? ((e = Qi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
            : e.type === 'keydown' || e.type === 'keyup'
            ? sv[e.keyCode] || 'Unidentified'
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
        getModifierState: Ps,
        charCode: function (e) {
          return e.type === 'keypress' ? Qi(e) : 0
        },
        keyCode: function (e) {
          return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
        },
        which: function (e) {
          return e.type === 'keypress' ? Qi(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
        },
      }),
      fv = _e(cv),
      pv = z({}, Zi, {
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
      tf = _e(pv),
      dv = z({}, Dn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ps,
      }),
      mv = _e(dv),
      hv = z({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      vv = _e(hv),
      gv = z({}, Zi, {
        deltaX: function (e) {
          return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
          return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      yv = _e(gv),
      _v = [9, 13, 27, 32],
      Ms = it && 'CompositionEvent' in window,
      An = null
    it && 'documentMode' in document && (An = document.documentMode)
    var Sv = it && 'TextEvent' in window && !An,
      rf = it && (!Ms || (An && 8 < An && 11 >= An)),
      nf = String.fromCharCode(32),
      of = !1
    function af(e, t) {
      switch (e) {
        case 'keyup':
          return _v.indexOf(t.keyCode) !== -1
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
    function sf(e) {
      return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
    }
    var Mr = !1
    function wv(e, t) {
      switch (e) {
        case 'compositionend':
          return sf(t)
        case 'keypress':
          return t.which !== 32 ? null : ((of = !0), nf)
        case 'textInput':
          return (e = t.data), e === nf && of ? null : e
        default:
          return null
      }
    }
    function Ev(e, t) {
      if (Mr)
        return e === 'compositionend' || (!Ms && af(e, t)) ? ((e = Qc()), (Xi = Is = Ot = null), (Mr = !1), e) : null
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
          return rf && t.locale !== 'ko' ? null : t.data
        default:
          return null
      }
    }
    var xv = {
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
    function uf(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return t === 'input' ? !!xv[e.type] : t === 'textarea'
    }
    function lf(e, t, r, n) {
      bc(n),
        (t = no(t, 'onChange')),
        0 < t.length && ((r = new Cs('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t }))
    }
    var Un = null,
      Hn = null
    function kv(e) {
      wf(e, 0)
    }
    function eo(e) {
      var t = Ar(e)
      if (gc(t)) return e
    }
    function Tv(e, t) {
      if (e === 'change') return t
    }
    var cf = !1
    it &&
      (it
        ? ((ro = 'oninput' in document),
          ro ||
            ((js = document.createElement('div')),
            js.setAttribute('oninput', 'return;'),
            (ro = typeof js.oninput == 'function')),
          (to = ro))
        : (to = !1),
      (cf = to && (!document.documentMode || 9 < document.documentMode)))
    var to, ro, js
    function ff() {
      Un && (Un.detachEvent('onpropertychange', pf), (Hn = Un = null))
    }
    function pf(e) {
      if (e.propertyName === 'value' && eo(Hn)) {
        var t = []
        if ((lf(t, Hn, e, cs(e)), (e = kv), Jt)) e(t)
        else {
          Jt = !0
          try {
            ps(e, t)
          } finally {
            ;(Jt = !1), hs()
          }
        }
      }
    }
    function Ov(e, t, r) {
      e === 'focusin' ? (ff(), (Un = t), (Hn = r), Un.attachEvent('onpropertychange', pf)) : e === 'focusout' && ff()
    }
    function Iv(e) {
      if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return eo(Hn)
    }
    function Cv(e, t) {
      if (e === 'click') return eo(t)
    }
    function bv(e, t) {
      if (e === 'input' || e === 'change') return eo(t)
    }
    function Rv(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
    }
    var Te = typeof Object.is == 'function' ? Object.is : Rv,
      Nv = Object.prototype.hasOwnProperty
    function zn(e, t) {
      if (Te(e, t)) return !0
      if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
      var r = Object.keys(e),
        n = Object.keys(t)
      if (r.length !== n.length) return !1
      for (n = 0; n < r.length; n++) if (!Nv.call(t, r[n]) || !Te(e[r[n]], t[r[n]])) return !1
      return !0
    }
    function df(e) {
      for (; e && e.firstChild; ) e = e.firstChild
      return e
    }
    function mf(e, t) {
      var r = df(e)
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
        r = df(r)
      }
    }
    function hf(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? hf(e, t.parentNode)
          : 'contains' in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1
    }
    function vf() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = typeof t.contentWindow.location.href == 'string'
        } catch (n) {
          r = !1
        }
        if (r) e = t.contentWindow
        else break
        t = Hi(e.document)
      }
      return t
    }
    function Fs(e) {
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
    var Pv = it && 'documentMode' in document && 11 >= document.documentMode,
      jr = null,
      Ds = null,
      Bn = null,
      Ls = !1
    function gf(e, t, r) {
      var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument
      Ls ||
        jr == null ||
        jr !== Hi(n) ||
        ((n = jr),
        'selectionStart' in n && Fs(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
            (n = {
              anchorNode: n.anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
            })),
        (Bn && zn(Bn, n)) ||
          ((Bn = n),
          (n = no(Ds, 'onSelect')),
          0 < n.length &&
            ((t = new Cs('onSelect', 'select', null, t, r)), e.push({ event: t, listeners: n }), (t.target = jr))))
    }
    xs(
      'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
        ' '
      ),
      0
    )
    xs(
      'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
        ' '
      ),
      1
    )
    xs(Hh, 2)
    for (
      var yf = 'change selectionchange textInput compositionstart compositionend compositionupdate'.split(' '), As = 0;
      As < yf.length;
      As++
    )
      Es.set(yf[As], 0)
    xr('onMouseEnter', ['mouseout', 'mouseover'])
    xr('onMouseLeave', ['mouseout', 'mouseover'])
    xr('onPointerEnter', ['pointerout', 'pointerover'])
    xr('onPointerLeave', ['pointerout', 'pointerover'])
    Kt('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
    Kt('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '))
    Kt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
    Kt('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
    Kt('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
    Kt('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
    var Wn =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
      _f = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Wn))
    function Sf(e, t, r) {
      var n = e.type || 'unknown-event'
      ;(e.currentTarget = r), Fh(n, t, void 0, e), (e.currentTarget = null)
    }
    function wf(e, t) {
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
              Sf(i, s, l), (o = u)
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
              Sf(i, s, l), (o = u)
            }
        }
      }
      if (Wi) throw ((e = gs), (Wi = !1), (gs = null), e)
    }
    function U(e, t) {
      var r = Pf(t),
        n = e + '__bubble'
      r.has(n) || (Tf(t, e, 2, !1), r.add(n))
    }
    var Ef = '_reactListening' + Math.random().toString(36).slice(2)
    function xf(e) {
      e[Ef] ||
        ((e[Ef] = !0),
        cc.forEach(function (t) {
          _f.has(t) || kf(t, !1, e, null), kf(t, !0, e, null)
        }))
    }
    function kf(e, t, r, n) {
      var i = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
        o = r
      if ((e === 'selectionchange' && r.nodeType !== 9 && (o = r.ownerDocument), n !== null && !t && _f.has(e))) {
        if (e !== 'scroll') return
        ;(i |= 2), (o = n)
      }
      var a = Pf(o),
        s = e + '__' + (t ? 'capture' : 'bubble')
      a.has(s) || (t && (i |= 4), Tf(o, e, i, t), a.add(s))
    }
    function Tf(e, t, r, n) {
      var i = Es.get(t)
      switch (i === void 0 ? 2 : i) {
        case 0:
          i = Kh
          break
        case 1:
          i = Xh
          break
        default:
          i = Ts
      }
      ;(r = i.bind(null, t, r, e)),
        (i = void 0),
        !vs || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
        n
          ? i !== void 0
            ? e.addEventListener(t, r, { capture: !0, passive: i })
            : e.addEventListener(t, r, !0)
          : i !== void 0
          ? e.addEventListener(t, r, { passive: i })
          : e.addEventListener(t, r, !1)
    }
    function Of(e, t, r, n, i) {
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
              if (((a = er(s)), a === null)) return
              if (((u = a.tag), u === 5 || u === 6)) {
                n = o = a
                continue e
              }
              s = s.parentNode
            }
          }
          n = n.return
        }
      Nh(function () {
        var l = o,
          c = cs(r),
          m = []
        e: {
          var h = Kc.get(e)
          if (h !== void 0) {
            var _ = Cs,
              w = e
            switch (e) {
              case 'keypress':
                if (Qi(r) === 0) break e
              case 'keydown':
              case 'keyup':
                _ = fv
                break
              case 'focusin':
                ;(w = 'focus'), (_ = Ns)
                break
              case 'focusout':
                ;(w = 'blur'), (_ = Ns)
                break
              case 'beforeblur':
              case 'afterblur':
                _ = Ns
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
                _ = Zc
                break
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                _ = Zh
                break
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                _ = mv
                break
              case qc:
              case $c:
              case Gc:
                _ = rv
                break
              case Yc:
                _ = vv
                break
              case 'scroll':
                _ = Qh
                break
              case 'wheel':
                _ = yv
                break
              case 'copy':
              case 'cut':
              case 'paste':
                _ = iv
                break
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                _ = tf
            }
            var E = (t & 4) != 0,
              p = !E && e === 'scroll',
              f = E ? (h !== null ? h + 'Capture' : null) : h
            E = []
            for (var d = l, g; d !== null; ) {
              g = d
              var y = g.stateNode
              if (
                (g.tag === 5 &&
                  y !== null &&
                  ((g = y), f !== null && ((y = Cn(d, f)), y != null && E.push(Vn(d, y, g)))),
                p)
              )
                break
              d = d.return
            }
            0 < E.length && ((h = new _(h, w, null, r, c)), m.push({ event: h, listeners: E }))
          }
        }
        if ((t & 7) == 0) {
          e: {
            if (
              ((h = e === 'mouseover' || e === 'pointerover'),
              (_ = e === 'mouseout' || e === 'pointerout'),
              h && (t & 16) == 0 && (w = r.relatedTarget || r.fromElement) && (er(w) || w[Lr]))
            )
              break e
            if (
              (_ || h) &&
              ((h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window),
              _
                ? ((w = r.relatedTarget || r.toElement),
                  (_ = l),
                  (w = w ? er(w) : null),
                  w !== null && ((p = Zt(w)), w !== p || (w.tag !== 5 && w.tag !== 6)) && (w = null))
                : ((_ = null), (w = l)),
              _ !== w)
            ) {
              if (
                ((E = Zc),
                (y = 'onMouseLeave'),
                (f = 'onMouseEnter'),
                (d = 'mouse'),
                (e === 'pointerout' || e === 'pointerover') &&
                  ((E = tf), (y = 'onPointerLeave'), (f = 'onPointerEnter'), (d = 'pointer')),
                (p = _ == null ? h : Ar(_)),
                (g = w == null ? h : Ar(w)),
                (h = new E(y, d + 'leave', _, r, c)),
                (h.target = p),
                (h.relatedTarget = g),
                (y = null),
                er(c) === l && ((E = new E(f, d + 'enter', w, r, c)), (E.target = g), (E.relatedTarget = p), (y = E)),
                (p = y),
                _ && w)
              )
                t: {
                  for (E = _, f = w, d = 0, g = E; g; g = Fr(g)) d++
                  for (g = 0, y = f; y; y = Fr(y)) g++
                  for (; 0 < d - g; ) (E = Fr(E)), d--
                  for (; 0 < g - d; ) (f = Fr(f)), g--
                  for (; d--; ) {
                    if (E === f || (f !== null && E === f.alternate)) break t
                    ;(E = Fr(E)), (f = Fr(f))
                  }
                  E = null
                }
              else E = null
              _ !== null && If(m, h, _, E, !1), w !== null && p !== null && If(m, p, w, E, !0)
            }
          }
          e: {
            if (
              ((h = l ? Ar(l) : window),
              (_ = h.nodeName && h.nodeName.toLowerCase()),
              _ === 'select' || (_ === 'input' && h.type === 'file'))
            )
              var I = Tv
            else if (uf(h))
              if (cf) I = bv
              else {
                I = Iv
                var T = Ov
              }
            else
              (_ = h.nodeName) &&
                _.toLowerCase() === 'input' &&
                (h.type === 'checkbox' || h.type === 'radio') &&
                (I = Cv)
            if (I && (I = I(e, l))) {
              lf(m, I, r, c)
              break e
            }
            T && T(e, h, l),
              e === 'focusout' &&
                (T = h._wrapperState) &&
                T.controlled &&
                h.type === 'number' &&
                ns(h, 'number', h.value)
          }
          switch (((T = l ? Ar(l) : window), e)) {
            case 'focusin':
              ;(uf(T) || T.contentEditable === 'true') && ((jr = T), (Ds = l), (Bn = null))
              break
            case 'focusout':
              Bn = Ds = jr = null
              break
            case 'mousedown':
              Ls = !0
              break
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              ;(Ls = !1), gf(m, r, c)
              break
            case 'selectionchange':
              if (Pv) break
            case 'keydown':
            case 'keyup':
              gf(m, r, c)
          }
          var R
          if (Ms)
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
            Mr
              ? af(e, r) && (M = 'onCompositionEnd')
              : e === 'keydown' && r.keyCode === 229 && (M = 'onCompositionStart')
          M &&
            (rf &&
              r.locale !== 'ko' &&
              (Mr || M !== 'onCompositionStart'
                ? M === 'onCompositionEnd' && Mr && (R = Qc())
                : ((Ot = c), (Is = 'value' in Ot ? Ot.value : Ot.textContent), (Mr = !0))),
            (T = no(l, M)),
            0 < T.length &&
              ((M = new ef(M, e, null, r, c)),
              m.push({ event: M, listeners: T }),
              R ? (M.data = R) : ((R = sf(r)), R !== null && (M.data = R)))),
            (R = Sv ? wv(e, r) : Ev(e, r)) &&
              ((l = no(l, 'onBeforeInput')),
              0 < l.length &&
                ((c = new ef('onBeforeInput', 'beforeinput', null, r, c)),
                m.push({ event: c, listeners: l }),
                (c.data = R)))
        }
        wf(m, t)
      })
    }
    function Vn(e, t, r) {
      return { instance: e, listener: t, currentTarget: r }
    }
    function no(e, t) {
      for (var r = t + 'Capture', n = []; e !== null; ) {
        var i = e,
          o = i.stateNode
        i.tag === 5 &&
          o !== null &&
          ((i = o),
          (o = Cn(e, r)),
          o != null && n.unshift(Vn(e, o, i)),
          (o = Cn(e, t)),
          o != null && n.push(Vn(e, o, i))),
          (e = e.return)
      }
      return n
    }
    function Fr(e) {
      if (e === null) return null
      do e = e.return
      while (e && e.tag !== 5)
      return e || null
    }
    function If(e, t, r, n, i) {
      for (var o = t._reactName, a = []; r !== null && r !== n; ) {
        var s = r,
          u = s.alternate,
          l = s.stateNode
        if (u !== null && u === n) break
        s.tag === 5 &&
          l !== null &&
          ((s = l),
          i
            ? ((u = Cn(r, o)), u != null && a.unshift(Vn(r, u, s)))
            : i || ((u = Cn(r, o)), u != null && a.push(Vn(r, u, s)))),
          (r = r.return)
      }
      a.length !== 0 && e.push({ event: t, listeners: a })
    }
    function io() {}
    var Us = null,
      Hs = null
    function Cf(e, t) {
      switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          return !!t.autoFocus
      }
      return !1
    }
    function zs(e, t) {
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
    var bf = typeof setTimeout == 'function' ? setTimeout : void 0,
      Mv = typeof clearTimeout == 'function' ? clearTimeout : void 0
    function Bs(e) {
      e.nodeType === 1 ? (e.textContent = '') : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''))
    }
    function Dr(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
      }
      return e
    }
    function Rf(e) {
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
    var Ws = 0
    function jv(e) {
      return { $$typeof: Xa, toString: e, valueOf: e }
    }
    var oo = Math.random().toString(36).slice(2),
      It = '__reactFiber$' + oo,
      ao = '__reactProps$' + oo,
      Lr = '__reactContainer$' + oo,
      Nf = '__reactEvents$' + oo
    function er(e) {
      var t = e[It]
      if (t) return t
      for (var r = e.parentNode; r; ) {
        if ((t = r[Lr] || r[It])) {
          if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
            for (e = Rf(e); e !== null; ) {
              if ((r = e[It])) return r
              e = Rf(e)
            }
          return t
        }
        ;(e = r), (r = e.parentNode)
      }
      return null
    }
    function qn(e) {
      return (e = e[It] || e[Lr]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    }
    function Ar(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode
      throw Error(x(33))
    }
    function so(e) {
      return e[ao] || null
    }
    function Pf(e) {
      var t = e[Nf]
      return t === void 0 && (t = e[Nf] = new Set()), t
    }
    var Vs = [],
      Ur = -1
    function Ct(e) {
      return { current: e }
    }
    function H(e) {
      0 > Ur || ((e.current = Vs[Ur]), (Vs[Ur] = null), Ur--)
    }
    function q(e, t) {
      Ur++, (Vs[Ur] = e.current), (e.current = t)
    }
    var bt = {},
      se = Ct(bt),
      he = Ct(!1),
      tr = bt
    function Hr(e, t) {
      var r = e.type.contextTypes
      if (!r) return bt
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
    function ve(e) {
      return (e = e.childContextTypes), e != null
    }
    function uo() {
      H(he), H(se)
    }
    function Mf(e, t, r) {
      if (se.current !== bt) throw Error(x(168))
      q(se, t), q(he, r)
    }
    function jf(e, t, r) {
      var n = e.stateNode
      if (((e = t.childContextTypes), typeof n.getChildContext != 'function')) return r
      n = n.getChildContext()
      for (var i in n) if (!(i in e)) throw Error(x(108, kr(t) || 'Unknown', i))
      return z({}, r, n)
    }
    function lo(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bt),
        (tr = se.current),
        q(se, e),
        q(he, he.current),
        !0
      )
    }
    function Ff(e, t, r) {
      var n = e.stateNode
      if (!n) throw Error(x(169))
      r ? ((e = jf(e, t, tr)), (n.__reactInternalMemoizedMergedChildContext = e), H(he), H(se), q(se, e)) : H(he),
        q(he, r)
    }
    var qs = null,
      rr = null,
      Fv = ee.unstable_runWithPriority,
      $s = ee.unstable_scheduleCallback,
      Gs = ee.unstable_cancelCallback,
      Dv = ee.unstable_shouldYield,
      Df = ee.unstable_requestPaint,
      Ys = ee.unstable_now,
      Lv = ee.unstable_getCurrentPriorityLevel,
      co = ee.unstable_ImmediatePriority,
      Lf = ee.unstable_UserBlockingPriority,
      Af = ee.unstable_NormalPriority,
      Uf = ee.unstable_LowPriority,
      Hf = ee.unstable_IdlePriority,
      Ks = {},
      Av = Df !== void 0 ? Df : function () {},
      ot = null,
      fo = null,
      Xs = !1,
      zf = Ys(),
      ue =
        1e4 > zf
          ? Ys
          : function () {
              return Ys() - zf
            }
    function zr() {
      switch (Lv()) {
        case co:
          return 99
        case Lf:
          return 98
        case Af:
          return 97
        case Uf:
          return 96
        case Hf:
          return 95
        default:
          throw Error(x(332))
      }
    }
    function Bf(e) {
      switch (e) {
        case 99:
          return co
        case 98:
          return Lf
        case 97:
          return Af
        case 96:
          return Uf
        case 95:
          return Hf
        default:
          throw Error(x(332))
      }
    }
    function nr(e, t) {
      return (e = Bf(e)), Fv(e, t)
    }
    function $n(e, t, r) {
      return (e = Bf(e)), $s(e, t, r)
    }
    function qe() {
      if (fo !== null) {
        var e = fo
        ;(fo = null), Gs(e)
      }
      Wf()
    }
    function Wf() {
      if (!Xs && ot !== null) {
        Xs = !0
        var e = 0
        try {
          var t = ot
          nr(99, function () {
            for (; e < t.length; e++) {
              var r = t[e]
              do r = r(!0)
              while (r !== null)
            }
          }),
            (ot = null)
        } catch (r) {
          throw (ot !== null && (ot = ot.slice(e + 1)), $s(co, qe), r)
        } finally {
          Xs = !1
        }
      }
    }
    var Uv = Xt.ReactCurrentBatchConfig
    function je(e, t) {
      if (e && e.defaultProps) {
        ;(t = z({}, t)), (e = e.defaultProps)
        for (var r in e) t[r] === void 0 && (t[r] = e[r])
        return t
      }
      return t
    }
    var po = Ct(null),
      mo = null,
      Br = null,
      ho = null
    function Qs() {
      ho = Br = mo = null
    }
    function Js(e) {
      var t = po.current
      H(po), (e.type._context._currentValue = t)
    }
    function Vf(e, t) {
      for (; e !== null; ) {
        var r = e.alternate
        if ((e.childLanes & t) === t) {
          if (r === null || (r.childLanes & t) === t) break
          r.childLanes |= t
        } else (e.childLanes |= t), r !== null && (r.childLanes |= t)
        e = e.return
      }
    }
    function Wr(e, t) {
      ;(mo = e),
        (ho = Br = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && ((e.lanes & t) != 0 && (Fe = !0), (e.firstContext = null))
    }
    function Oe(e, t) {
      if (ho !== e && t !== !1 && t !== 0)
        if (
          ((typeof t != 'number' || t === 1073741823) && ((ho = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          Br === null)
        ) {
          if (mo === null) throw Error(x(308))
          ;(Br = t), (mo.dependencies = { lanes: 0, firstContext: t, responders: null })
        } else Br = Br.next = t
      return e._currentValue
    }
    var Rt = !1
    function Zs(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null },
        effects: null,
      }
    }
    function qf(e, t) {
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
    function Nt(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
    }
    function Pt(e, t) {
      if (((e = e.updateQueue), e !== null)) {
        e = e.shared
        var r = e.pending
        r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t)
      }
    }
    function $f(e, t) {
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
    function Gn(e, t, r, n) {
      var i = e.updateQueue
      Rt = !1
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
                w = o
              switch (((s = t), (h = r), w.tag)) {
                case 1:
                  if (((_ = w.payload), typeof _ == 'function')) {
                    m = _.call(h, m, s)
                    break e
                  }
                  m = _
                  break e
                case 3:
                  _.flags = (_.flags & -4097) | 64
                case 0:
                  if (((_ = w.payload), (s = typeof _ == 'function' ? _.call(h, m, s) : _), s == null)) break e
                  m = z({}, m, s)
                  break e
                case 2:
                  Rt = !0
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
          (oi |= a),
          (e.lanes = a),
          (e.memoizedState = m)
      }
    }
    function Gf(e, t, r) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var n = e[t],
            i = n.callback
          if (i !== null) {
            if (((n.callback = null), (n = r), typeof i != 'function')) throw Error(x(191, i))
            i.call(n)
          }
        }
    }
    var Yf = new ji.Component().refs
    function vo(e, t, r, n) {
      ;(t = e.memoizedState),
        (r = r(n, t)),
        (r = r == null ? t : z({}, t, r)),
        (e.memoizedState = r),
        e.lanes === 0 && (e.updateQueue.baseState = r)
    }
    var go = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? Zt(e) === e : !1
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternals
        var n = Se(),
          i = Ft(e),
          o = Nt(n, i)
        ;(o.payload = t), r != null && (o.callback = r), Pt(e, o), Dt(e, i, n)
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals
        var n = Se(),
          i = Ft(e),
          o = Nt(n, i)
        ;(o.tag = 1), (o.payload = t), r != null && (o.callback = r), Pt(e, o), Dt(e, i, n)
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var r = Se(),
          n = Ft(e),
          i = Nt(r, n)
        ;(i.tag = 2), t != null && (i.callback = t), Pt(e, i), Dt(e, n, r)
      },
    }
    function Kf(e, t, r, n, i, o, a) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
          ? e.shouldComponentUpdate(n, o, a)
          : t.prototype && t.prototype.isPureReactComponent
          ? !zn(r, n) || !zn(i, o)
          : !0
      )
    }
    function Xf(e, t, r) {
      var n = !1,
        i = bt,
        o = t.contextType
      return (
        typeof o == 'object' && o !== null
          ? (o = Oe(o))
          : ((i = ve(t) ? tr : se.current), (n = t.contextTypes), (o = (n = n != null) ? Hr(e, i) : bt)),
        (t = new t(r, o)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = go),
        (e.stateNode = t),
        (t._reactInternals = e),
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      )
    }
    function Qf(e, t, r, n) {
      ;(e = t.state),
        typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(r, n),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && go.enqueueReplaceState(t, t.state, null)
    }
    function eu(e, t, r, n) {
      var i = e.stateNode
      ;(i.props = r), (i.state = e.memoizedState), (i.refs = Yf), Zs(e)
      var o = t.contextType
      typeof o == 'object' && o !== null
        ? (i.context = Oe(o))
        : ((o = ve(t) ? tr : se.current), (i.context = Hr(e, o))),
        Gn(e, r, i, n),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == 'function' && (vo(e, t, o, r), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function' ||
          (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
          ((t = i.state),
          typeof i.componentWillMount == 'function' && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
          t !== i.state && go.enqueueReplaceState(i, i.state, null),
          Gn(e, r, i, n),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == 'function' && (e.flags |= 4)
    }
    var yo = Array.isArray
    function Yn(e, t, r) {
      if (((e = r.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
        if (r._owner) {
          if (((r = r._owner), r)) {
            if (r.tag !== 1) throw Error(x(309))
            var n = r.stateNode
          }
          if (!n) throw Error(x(147, e))
          var i = '' + e
          return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === i
            ? t.ref
            : ((t = function (o) {
                var a = n.refs
                a === Yf && (a = n.refs = {}), o === null ? delete a[i] : (a[i] = o)
              }),
              (t._stringRef = i),
              t)
        }
        if (typeof e != 'string') throw Error(x(284))
        if (!r._owner) throw Error(x(290, e))
      }
      return e
    }
    function _o(e, t) {
      if (e.type !== 'textarea')
        throw Error(
          x(
            31,
            Object.prototype.toString.call(t) === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : t
          )
        )
    }
    function Jf(e) {
      function t(p, f) {
        if (e) {
          var d = p.lastEffect
          d !== null ? ((d.nextEffect = f), (p.lastEffect = f)) : (p.firstEffect = p.lastEffect = f),
            (f.nextEffect = null),
            (f.flags = 8)
        }
      }
      function r(p, f) {
        if (!e) return null
        for (; f !== null; ) t(p, f), (f = f.sibling)
        return null
      }
      function n(p, f) {
        for (p = new Map(); f !== null; ) f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling)
        return p
      }
      function i(p, f) {
        return (p = Ut(p, f)), (p.index = 0), (p.sibling = null), p
      }
      function o(p, f, d) {
        return (
          (p.index = d),
          e ? ((d = p.alternate), d !== null ? ((d = d.index), d < f ? ((p.flags = 2), f) : d) : ((p.flags = 2), f)) : f
        )
      }
      function a(p) {
        return e && p.alternate === null && (p.flags = 2), p
      }
      function s(p, f, d, g) {
        return f === null || f.tag !== 6
          ? ((f = Du(d, p.mode, g)), (f.return = p), f)
          : ((f = i(f, d)), (f.return = p), f)
      }
      function u(p, f, d, g) {
        return f !== null && f.elementType === d.type
          ? ((g = i(f, d.props)), (g.ref = Yn(p, f, d)), (g.return = p), g)
          : ((g = Lo(d.type, d.key, d.props, null, p.mode, g)), (g.ref = Yn(p, f, d)), (g.return = p), g)
      }
      function l(p, f, d, g) {
        return f === null ||
          f.tag !== 4 ||
          f.stateNode.containerInfo !== d.containerInfo ||
          f.stateNode.implementation !== d.implementation
          ? ((f = Lu(d, p.mode, g)), (f.return = p), f)
          : ((f = i(f, d.children || [])), (f.return = p), f)
      }
      function c(p, f, d, g, y) {
        return f === null || f.tag !== 7
          ? ((f = Qr(d, p.mode, g, y)), (f.return = p), f)
          : ((f = i(f, d)), (f.return = p), f)
      }
      function m(p, f, d) {
        if (typeof f == 'string' || typeof f == 'number') return (f = Du('' + f, p.mode, d)), (f.return = p), f
        if (typeof f == 'object' && f !== null) {
          switch (f.$$typeof) {
            case wn:
              return (d = Lo(f.type, f.key, f.props, null, p.mode, d)), (d.ref = Yn(p, null, f)), (d.return = p), d
            case Qt:
              return (f = Lu(f, p.mode, d)), (f.return = p), f
          }
          if (yo(f) || kn(f)) return (f = Qr(f, p.mode, d, null)), (f.return = p), f
          _o(p, f)
        }
        return null
      }
      function h(p, f, d, g) {
        var y = f !== null ? f.key : null
        if (typeof d == 'string' || typeof d == 'number') return y !== null ? null : s(p, f, '' + d, g)
        if (typeof d == 'object' && d !== null) {
          switch (d.$$typeof) {
            case wn:
              return d.key === y ? (d.type === St ? c(p, f, d.props.children, g, y) : u(p, f, d, g)) : null
            case Qt:
              return d.key === y ? l(p, f, d, g) : null
          }
          if (yo(d) || kn(d)) return y !== null ? null : c(p, f, d, g, null)
          _o(p, d)
        }
        return null
      }
      function _(p, f, d, g, y) {
        if (typeof g == 'string' || typeof g == 'number') return (p = p.get(d) || null), s(f, p, '' + g, y)
        if (typeof g == 'object' && g !== null) {
          switch (g.$$typeof) {
            case wn:
              return (
                (p = p.get(g.key === null ? d : g.key) || null),
                g.type === St ? c(f, p, g.props.children, y, g.key) : u(f, p, g, y)
              )
            case Qt:
              return (p = p.get(g.key === null ? d : g.key) || null), l(f, p, g, y)
          }
          if (yo(g) || kn(g)) return (p = p.get(d) || null), c(f, p, g, y, null)
          _o(f, g)
        }
        return null
      }
      function w(p, f, d, g) {
        for (var y = null, I = null, T = f, R = (f = 0), M = null; T !== null && R < d.length; R++) {
          T.index > R ? ((M = T), (T = null)) : (M = T.sibling)
          var N = h(p, T, d[R], g)
          if (N === null) {
            T === null && (T = M)
            break
          }
          e && T && N.alternate === null && t(p, T),
            (f = o(N, f, R)),
            I === null ? (y = N) : (I.sibling = N),
            (I = N),
            (T = M)
        }
        if (R === d.length) return r(p, T), y
        if (T === null) {
          for (; R < d.length; R++)
            (T = m(p, d[R], g)), T !== null && ((f = o(T, f, R)), I === null ? (y = T) : (I.sibling = T), (I = T))
          return y
        }
        for (T = n(p, T); R < d.length; R++)
          (M = _(T, p, R, d[R], g)),
            M !== null &&
              (e && M.alternate !== null && T.delete(M.key === null ? R : M.key),
              (f = o(M, f, R)),
              I === null ? (y = M) : (I.sibling = M),
              (I = M))
        return (
          e &&
            T.forEach(function (gt) {
              return t(p, gt)
            }),
          y
        )
      }
      function E(p, f, d, g) {
        var y = kn(d)
        if (typeof y != 'function') throw Error(x(150))
        if (((d = y.call(d)), d == null)) throw Error(x(151))
        for (var I = (y = null), T = f, R = (f = 0), M = null, N = d.next(); T !== null && !N.done; R++, N = d.next()) {
          T.index > R ? ((M = T), (T = null)) : (M = T.sibling)
          var gt = h(p, T, N.value, g)
          if (gt === null) {
            T === null && (T = M)
            break
          }
          e && T && gt.alternate === null && t(p, T),
            (f = o(gt, f, R)),
            I === null ? (y = gt) : (I.sibling = gt),
            (I = gt),
            (T = M)
        }
        if (N.done) return r(p, T), y
        if (T === null) {
          for (; !N.done; R++, N = d.next())
            (N = m(p, N.value, g)), N !== null && ((f = o(N, f, R)), I === null ? (y = N) : (I.sibling = N), (I = N))
          return y
        }
        for (T = n(p, T); !N.done; R++, N = d.next())
          (N = _(T, p, R, N.value, g)),
            N !== null &&
              (e && N.alternate !== null && T.delete(N.key === null ? R : N.key),
              (f = o(N, f, R)),
              I === null ? (y = N) : (I.sibling = N),
              (I = N))
        return (
          e &&
            T.forEach(function (th) {
              return t(p, th)
            }),
          y
        )
      }
      return function (p, f, d, g) {
        var y = typeof d == 'object' && d !== null && d.type === St && d.key === null
        y && (d = d.props.children)
        var I = typeof d == 'object' && d !== null
        if (I)
          switch (d.$$typeof) {
            case wn:
              e: {
                for (I = d.key, y = f; y !== null; ) {
                  if (y.key === I) {
                    switch (y.tag) {
                      case 7:
                        if (d.type === St) {
                          r(p, y.sibling), (f = i(y, d.props.children)), (f.return = p), (p = f)
                          break e
                        }
                        break
                      default:
                        if (y.elementType === d.type) {
                          r(p, y.sibling), (f = i(y, d.props)), (f.ref = Yn(p, y, d)), (f.return = p), (p = f)
                          break e
                        }
                    }
                    r(p, y)
                    break
                  } else t(p, y)
                  y = y.sibling
                }
                d.type === St
                  ? ((f = Qr(d.props.children, p.mode, g, d.key)), (f.return = p), (p = f))
                  : ((g = Lo(d.type, d.key, d.props, null, p.mode, g)), (g.ref = Yn(p, f, d)), (g.return = p), (p = g))
              }
              return a(p)
            case Qt:
              e: {
                for (y = d.key; f !== null; ) {
                  if (f.key === y)
                    if (
                      f.tag === 4 &&
                      f.stateNode.containerInfo === d.containerInfo &&
                      f.stateNode.implementation === d.implementation
                    ) {
                      r(p, f.sibling), (f = i(f, d.children || [])), (f.return = p), (p = f)
                      break e
                    } else {
                      r(p, f)
                      break
                    }
                  else t(p, f)
                  f = f.sibling
                }
                ;(f = Lu(d, p.mode, g)), (f.return = p), (p = f)
              }
              return a(p)
          }
        if (typeof d == 'string' || typeof d == 'number')
          return (
            (d = '' + d),
            f !== null && f.tag === 6
              ? (r(p, f.sibling), (f = i(f, d)), (f.return = p), (p = f))
              : (r(p, f), (f = Du(d, p.mode, g)), (f.return = p), (p = f)),
            a(p)
          )
        if (yo(d)) return w(p, f, d, g)
        if (kn(d)) return E(p, f, d, g)
        if ((I && _o(p, d), typeof d == 'undefined' && !y))
          switch (p.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(x(152, kr(p.type) || 'Component'))
          }
        return r(p, f)
      }
    }
    var So = Jf(!0),
      Zf = Jf(!1),
      Kn = {},
      $e = Ct(Kn),
      Xn = Ct(Kn),
      Qn = Ct(Kn)
    function ir(e) {
      if (e === Kn) throw Error(x(174))
      return e
    }
    function tu(e, t) {
      switch ((q(Qn, t), q(Xn, e), q($e, Kn), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : ss(null, '')
          break
        default:
          ;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = ss(t, e))
      }
      H($e), q($e, t)
    }
    function Vr() {
      H($e), H(Xn), H(Qn)
    }
    function ep(e) {
      ir(Qn.current)
      var t = ir($e.current),
        r = ss(t, e.type)
      t !== r && (q(Xn, e), q($e, r))
    }
    function ru(e) {
      Xn.current === e && (H($e), H(Xn))
    }
    var $ = Ct(0)
    function wo(e) {
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
    var at = null,
      Mt = null,
      Ge = !1
    function tp(e, t) {
      var r = be(5, null, null, 0)
      ;(r.elementType = 'DELETED'),
        (r.type = 'DELETED'),
        (r.stateNode = t),
        (r.return = e),
        (r.flags = 8),
        e.lastEffect !== null ? ((e.lastEffect.nextEffect = r), (e.lastEffect = r)) : (e.firstEffect = e.lastEffect = r)
    }
    function rp(e, t) {
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
    function nu(e) {
      if (Ge) {
        var t = Mt
        if (t) {
          var r = t
          if (!rp(e, t)) {
            if (((t = Dr(r.nextSibling)), !t || !rp(e, t))) {
              ;(e.flags = (e.flags & -1025) | 2), (Ge = !1), (at = e)
              return
            }
            tp(at, r)
          }
          ;(at = e), (Mt = Dr(t.firstChild))
        } else (e.flags = (e.flags & -1025) | 2), (Ge = !1), (at = e)
      }
    }
    function np(e) {
      for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
      at = e
    }
    function Eo(e) {
      if (e !== at) return !1
      if (!Ge) return np(e), (Ge = !0), !1
      var t = e.type
      if (e.tag !== 5 || (t !== 'head' && t !== 'body' && !zs(t, e.memoizedProps)))
        for (t = Mt; t; ) tp(e, t), (t = Dr(t.nextSibling))
      if ((np(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(x(317))
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var r = e.data
              if (r === '/$') {
                if (t === 0) {
                  Mt = Dr(e.nextSibling)
                  break e
                }
                t--
              } else (r !== '$' && r !== '$!' && r !== '$?') || t++
            }
            e = e.nextSibling
          }
          Mt = null
        }
      } else Mt = at ? Dr(e.stateNode.nextSibling) : null
      return !0
    }
    function iu() {
      ;(Mt = at = null), (Ge = !1)
    }
    var qr = []
    function ou() {
      for (var e = 0; e < qr.length; e++) qr[e]._workInProgressVersionPrimary = null
      qr.length = 0
    }
    var Jn = Xt.ReactCurrentDispatcher,
      Ie = Xt.ReactCurrentBatchConfig,
      Zn = 0,
      Y = null,
      le = null,
      ne = null,
      xo = !1,
      ei = !1
    function ge() {
      throw Error(x(321))
    }
    function au(e, t) {
      if (t === null) return !1
      for (var r = 0; r < t.length && r < e.length; r++) if (!Te(e[r], t[r])) return !1
      return !0
    }
    function su(e, t, r, n, i, o) {
      if (
        ((Zn = o),
        (Y = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Jn.current = e === null || e.memoizedState === null ? zv : Bv),
        (e = r(n, i)),
        ei)
      ) {
        o = 0
        do {
          if (((ei = !1), !(25 > o))) throw Error(x(301))
          ;(o += 1), (ne = le = null), (t.updateQueue = null), (Jn.current = Wv), (e = r(n, i))
        } while (ei)
      }
      if (((Jn.current = Io), (t = le !== null && le.next !== null), (Zn = 0), (ne = le = Y = null), (xo = !1), t))
        throw Error(x(300))
      return e
    }
    function or() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
      return ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e), ne
    }
    function ar() {
      if (le === null) {
        var e = Y.alternate
        e = e !== null ? e.memoizedState : null
      } else e = le.next
      var t = ne === null ? Y.memoizedState : ne.next
      if (t !== null) (ne = t), (le = e)
      else {
        if (e === null) throw Error(x(310))
        ;(le = e),
          (e = {
            memoizedState: le.memoizedState,
            baseState: le.baseState,
            baseQueue: le.baseQueue,
            queue: le.queue,
            next: null,
          }),
          ne === null ? (Y.memoizedState = ne = e) : (ne = ne.next = e)
      }
      return ne
    }
    function Ye(e, t) {
      return typeof t == 'function' ? t(e) : t
    }
    function ti(e) {
      var t = ar(),
        r = t.queue
      if (r === null) throw Error(x(311))
      r.lastRenderedReducer = e
      var n = le,
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
          if ((Zn & l) === l)
            s !== null &&
              (s = s.next =
                { lane: 0, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null }),
              (n = u.eagerReducer === e ? u.eagerState : e(n, u.action))
          else {
            var c = { lane: l, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null }
            s === null ? ((a = s = c), (o = n)) : (s = s.next = c), (Y.lanes |= l), (oi |= l)
          }
          u = u.next
        } while (u !== null && u !== i)
        s === null ? (o = n) : (s.next = a),
          Te(n, t.memoizedState) || (Fe = !0),
          (t.memoizedState = n),
          (t.baseState = o),
          (t.baseQueue = s),
          (r.lastRenderedState = n)
      }
      return [t.memoizedState, r.dispatch]
    }
    function ri(e) {
      var t = ar(),
        r = t.queue
      if (r === null) throw Error(x(311))
      r.lastRenderedReducer = e
      var n = r.dispatch,
        i = r.pending,
        o = t.memoizedState
      if (i !== null) {
        r.pending = null
        var a = (i = i.next)
        do (o = e(o, a.action)), (a = a.next)
        while (a !== i)
        Te(o, t.memoizedState) || (Fe = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (r.lastRenderedState = o)
      }
      return [o, n]
    }
    function ip(e, t, r) {
      var n = t._getVersion
      n = n(t._source)
      var i = t._workInProgressVersionPrimary
      if (
        (i !== null
          ? (e = i === n)
          : ((e = e.mutableReadLanes), (e = (Zn & e) === e) && ((t._workInProgressVersionPrimary = n), qr.push(t))),
        e)
      )
        return r(t._source)
      throw (qr.push(t), Error(x(350)))
    }
    function op(e, t, r, n) {
      var i = pe
      if (i === null) throw Error(x(349))
      var o = t._getVersion,
        a = o(t._source),
        s = Jn.current,
        u = s.useState(function () {
          return ip(i, t, r)
        }),
        l = u[1],
        c = u[0]
      u = ne
      var m = e.memoizedState,
        h = m.refs,
        _ = h.getSnapshot,
        w = m.source
      m = m.subscribe
      var E = Y
      return (
        (e.memoizedState = { refs: h, source: t, subscribe: n }),
        s.useEffect(
          function () {
            ;(h.getSnapshot = r), (h.setSnapshot = l)
            var p = o(t._source)
            if (!Te(a, p)) {
              ;(p = r(t._source)),
                Te(c, p) || (l(p), (p = Ft(E)), (i.mutableReadLanes |= p & i.pendingLanes)),
                (p = i.mutableReadLanes),
                (i.entangledLanes |= p)
              for (var f = i.entanglements, d = p; 0 < d; ) {
                var g = 31 - Tt(d),
                  y = 1 << g
                ;(f[g] |= p), (d &= ~y)
              }
            }
          },
          [r, t, n]
        ),
        s.useEffect(
          function () {
            return n(t._source, function () {
              var p = h.getSnapshot,
                f = h.setSnapshot
              try {
                f(p(t._source))
                var d = Ft(E)
                i.mutableReadLanes |= d & i.pendingLanes
              } catch (g) {
                f(function () {
                  throw g
                })
              }
            })
          },
          [t, n]
        ),
        (Te(_, r) && Te(w, t) && Te(m, n)) ||
          ((e = { pending: null, dispatch: null, lastRenderedReducer: Ye, lastRenderedState: c }),
          (e.dispatch = l = fu.bind(null, Y, e)),
          (u.queue = e),
          (u.baseQueue = null),
          (c = ip(i, t, r)),
          (u.memoizedState = u.baseState = c)),
        c
      )
    }
    function ap(e, t, r) {
      var n = ar()
      return op(n, e, t, r)
    }
    function ni(e) {
      var t = or()
      return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Ye, lastRenderedState: e }),
        (e = e.dispatch = fu.bind(null, Y, e)),
        [t.memoizedState, e]
      )
    }
    function ko(e, t, r, n) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        (t = Y.updateQueue),
        t === null
          ? ((t = { lastEffect: null }), (Y.updateQueue = t), (t.lastEffect = e.next = e))
          : ((r = t.lastEffect),
            r === null ? (t.lastEffect = e.next = e) : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
        e
      )
    }
    function sp(e) {
      var t = or()
      return (e = { current: e }), (t.memoizedState = e)
    }
    function To() {
      return ar().memoizedState
    }
    function uu(e, t, r, n) {
      var i = or()
      ;(Y.flags |= e), (i.memoizedState = ko(1 | t, r, void 0, n === void 0 ? null : n))
    }
    function lu(e, t, r, n) {
      var i = ar()
      n = n === void 0 ? null : n
      var o = void 0
      if (le !== null) {
        var a = le.memoizedState
        if (((o = a.destroy), n !== null && au(n, a.deps))) {
          ko(t, r, o, n)
          return
        }
      }
      ;(Y.flags |= e), (i.memoizedState = ko(1 | t, r, o, n))
    }
    function up(e, t) {
      return uu(516, 4, e, t)
    }
    function Oo(e, t) {
      return lu(516, 4, e, t)
    }
    function lp(e, t) {
      return lu(4, 2, e, t)
    }
    function cp(e, t) {
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
    function fp(e, t, r) {
      return (r = r != null ? r.concat([e]) : null), lu(4, 2, cp.bind(null, t, e), r)
    }
    function cu() {}
    function pp(e, t) {
      var r = ar()
      t = t === void 0 ? null : t
      var n = r.memoizedState
      return n !== null && t !== null && au(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e)
    }
    function dp(e, t) {
      var r = ar()
      t = t === void 0 ? null : t
      var n = r.memoizedState
      return n !== null && t !== null && au(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e)
    }
    function Hv(e, t) {
      var r = zr()
      nr(98 > r ? 98 : r, function () {
        e(!0)
      }),
        nr(97 < r ? 97 : r, function () {
          var n = Ie.transition
          Ie.transition = 1
          try {
            e(!1), t()
          } finally {
            Ie.transition = n
          }
        })
    }
    function fu(e, t, r) {
      var n = Se(),
        i = Ft(e),
        o = { lane: i, action: r, eagerReducer: null, eagerState: null, next: null },
        a = t.pending
      if (
        (a === null ? (o.next = o) : ((o.next = a.next), (a.next = o)),
        (t.pending = o),
        (a = e.alternate),
        e === Y || (a !== null && a === Y))
      )
        ei = xo = !0
      else {
        if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
          try {
            var s = t.lastRenderedState,
              u = a(s, r)
            if (((o.eagerReducer = a), (o.eagerState = u), Te(u, s))) return
          } catch (l) {
          } finally {
          }
        Dt(e, i, n)
      }
    }
    var Io = {
        readContext: Oe,
        useCallback: ge,
        useContext: ge,
        useEffect: ge,
        useImperativeHandle: ge,
        useLayoutEffect: ge,
        useMemo: ge,
        useReducer: ge,
        useRef: ge,
        useState: ge,
        useDebugValue: ge,
        useDeferredValue: ge,
        useTransition: ge,
        useMutableSource: ge,
        useOpaqueIdentifier: ge,
        unstable_isNewReconciler: !1,
      },
      zv = {
        readContext: Oe,
        useCallback: function (e, t) {
          return (or().memoizedState = [e, t === void 0 ? null : t]), e
        },
        useContext: Oe,
        useEffect: up,
        useImperativeHandle: function (e, t, r) {
          return (r = r != null ? r.concat([e]) : null), uu(4, 2, cp.bind(null, t, e), r)
        },
        useLayoutEffect: function (e, t) {
          return uu(4, 2, e, t)
        },
        useMemo: function (e, t) {
          var r = or()
          return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
        },
        useReducer: function (e, t, r) {
          var n = or()
          return (
            (t = r !== void 0 ? r(t) : t),
            (n.memoizedState = n.baseState = t),
            (e = n.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
            (e = e.dispatch = fu.bind(null, Y, e)),
            [n.memoizedState, e]
          )
        },
        useRef: sp,
        useState: ni,
        useDebugValue: cu,
        useDeferredValue: function (e) {
          var t = ni(e),
            r = t[0],
            n = t[1]
          return (
            up(
              function () {
                var i = Ie.transition
                Ie.transition = 1
                try {
                  n(e)
                } finally {
                  Ie.transition = i
                }
              },
              [e]
            ),
            r
          )
        },
        useTransition: function () {
          var e = ni(!1),
            t = e[0]
          return (e = Hv.bind(null, e[1])), sp(e), [e, t]
        },
        useMutableSource: function (e, t, r) {
          var n = or()
          return (
            (n.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: r }), op(n, e, t, r)
          )
        },
        useOpaqueIdentifier: function () {
          if (Ge) {
            var e = !1,
              t = jv(function () {
                throw (e || ((e = !0), r('r:' + (Ws++).toString(36))), Error(x(355)))
              }),
              r = ni(t)[1]
            return (
              (Y.mode & 2) == 0 &&
                ((Y.flags |= 516),
                ko(
                  5,
                  function () {
                    r('r:' + (Ws++).toString(36))
                  },
                  void 0,
                  null
                )),
              t
            )
          }
          return (t = 'r:' + (Ws++).toString(36)), ni(t), t
        },
        unstable_isNewReconciler: !1,
      },
      Bv = {
        readContext: Oe,
        useCallback: pp,
        useContext: Oe,
        useEffect: Oo,
        useImperativeHandle: fp,
        useLayoutEffect: lp,
        useMemo: dp,
        useReducer: ti,
        useRef: To,
        useState: function () {
          return ti(Ye)
        },
        useDebugValue: cu,
        useDeferredValue: function (e) {
          var t = ti(Ye),
            r = t[0],
            n = t[1]
          return (
            Oo(
              function () {
                var i = Ie.transition
                Ie.transition = 1
                try {
                  n(e)
                } finally {
                  Ie.transition = i
                }
              },
              [e]
            ),
            r
          )
        },
        useTransition: function () {
          var e = ti(Ye)[0]
          return [To().current, e]
        },
        useMutableSource: ap,
        useOpaqueIdentifier: function () {
          return ti(Ye)[0]
        },
        unstable_isNewReconciler: !1,
      },
      Wv = {
        readContext: Oe,
        useCallback: pp,
        useContext: Oe,
        useEffect: Oo,
        useImperativeHandle: fp,
        useLayoutEffect: lp,
        useMemo: dp,
        useReducer: ri,
        useRef: To,
        useState: function () {
          return ri(Ye)
        },
        useDebugValue: cu,
        useDeferredValue: function (e) {
          var t = ri(Ye),
            r = t[0],
            n = t[1]
          return (
            Oo(
              function () {
                var i = Ie.transition
                Ie.transition = 1
                try {
                  n(e)
                } finally {
                  Ie.transition = i
                }
              },
              [e]
            ),
            r
          )
        },
        useTransition: function () {
          var e = ri(Ye)[0]
          return [To().current, e]
        },
        useMutableSource: ap,
        useOpaqueIdentifier: function () {
          return ri(Ye)[0]
        },
        unstable_isNewReconciler: !1,
      },
      Vv = Xt.ReactCurrentOwner,
      Fe = !1
    function ye(e, t, r, n) {
      t.child = e === null ? Zf(t, null, r, n) : So(t, e.child, r, n)
    }
    function mp(e, t, r, n, i) {
      r = r.render
      var o = t.ref
      return (
        Wr(t, i),
        (n = su(e, t, r, n, o, i)),
        e !== null && !Fe
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), st(e, t, i))
          : ((t.flags |= 1), ye(e, t, n, i), t.child)
      )
    }
    function hp(e, t, r, n, i, o) {
      if (e === null) {
        var a = r.type
        return typeof a == 'function' &&
          !ju(a) &&
          a.defaultProps === void 0 &&
          r.compare === null &&
          r.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), vp(e, t, a, n, i, o))
          : ((e = Lo(r.type, null, n, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e))
      }
      return (
        (a = e.child),
        (i & o) == 0 && ((i = a.memoizedProps), (r = r.compare), (r = r !== null ? r : zn), r(i, n) && e.ref === t.ref)
          ? st(e, t, o)
          : ((t.flags |= 1), (e = Ut(a, n)), (e.ref = t.ref), (e.return = t), (t.child = e))
      )
    }
    function vp(e, t, r, n, i, o) {
      if (e !== null && zn(e.memoizedProps, n) && e.ref === t.ref)
        if (((Fe = !1), (o & i) != 0)) (e.flags & 16384) != 0 && (Fe = !0)
        else return (t.lanes = e.lanes), st(e, t, o)
      return du(e, t, r, n, o)
    }
    function pu(e, t, r) {
      var n = t.pendingProps,
        i = n.children,
        o = e !== null ? e.memoizedState : null
      if (n.mode === 'hidden' || n.mode === 'unstable-defer-without-hiding')
        if ((t.mode & 4) == 0) (t.memoizedState = { baseLanes: 0 }), Do(t, r)
        else if ((r & 1073741824) != 0) (t.memoizedState = { baseLanes: 0 }), Do(t, o !== null ? o.baseLanes : r)
        else
          return (
            (e = o !== null ? o.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e }),
            Do(t, e),
            null
          )
      else o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r), Do(t, n)
      return ye(e, t, i, r), t.child
    }
    function gp(e, t) {
      var r = t.ref
      ;((e === null && r !== null) || (e !== null && e.ref !== r)) && (t.flags |= 128)
    }
    function du(e, t, r, n, i) {
      var o = ve(r) ? tr : se.current
      return (
        (o = Hr(t, o)),
        Wr(t, i),
        (r = su(e, t, r, n, o, i)),
        e !== null && !Fe
          ? ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~i), st(e, t, i))
          : ((t.flags |= 1), ye(e, t, r, i), t.child)
      )
    }
    function yp(e, t, r, n, i) {
      if (ve(r)) {
        var o = !0
        lo(t)
      } else o = !1
      if ((Wr(t, i), t.stateNode === null))
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          Xf(t, r, n),
          eu(t, r, n, i),
          (n = !0)
      else if (e === null) {
        var a = t.stateNode,
          s = t.memoizedProps
        a.props = s
        var u = a.context,
          l = r.contextType
        typeof l == 'object' && l !== null ? (l = Oe(l)) : ((l = ve(r) ? tr : se.current), (l = Hr(t, l)))
        var c = r.getDerivedStateFromProps,
          m = typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
        m ||
          (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof a.componentWillReceiveProps != 'function') ||
          ((s !== n || u !== l) && Qf(t, a, n, l)),
          (Rt = !1)
        var h = t.memoizedState
        ;(a.state = h),
          Gn(t, n, a, i),
          (u = t.memoizedState),
          s !== n || h !== u || he.current || Rt
            ? (typeof c == 'function' && (vo(t, r, c, n), (u = t.memoizedState)),
              (s = Rt || Kf(t, r, s, n, h, u, l))
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
          qf(e, t),
          (s = t.memoizedProps),
          (l = t.type === t.elementType ? s : je(t.type, s)),
          (a.props = l),
          (m = t.pendingProps),
          (h = a.context),
          (u = r.contextType),
          typeof u == 'object' && u !== null ? (u = Oe(u)) : ((u = ve(r) ? tr : se.current), (u = Hr(t, u)))
        var _ = r.getDerivedStateFromProps
        ;(c = typeof _ == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
          (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof a.componentWillReceiveProps != 'function') ||
          ((s !== m || h !== u) && Qf(t, a, n, u)),
          (Rt = !1),
          (h = t.memoizedState),
          (a.state = h),
          Gn(t, n, a, i)
        var w = t.memoizedState
        s !== m || h !== w || he.current || Rt
          ? (typeof _ == 'function' && (vo(t, r, _, n), (w = t.memoizedState)),
            (l = Rt || Kf(t, r, l, n, h, w, u))
              ? (c ||
                  (typeof a.UNSAFE_componentWillUpdate != 'function' && typeof a.componentWillUpdate != 'function') ||
                  (typeof a.componentWillUpdate == 'function' && a.componentWillUpdate(n, w, u),
                  typeof a.UNSAFE_componentWillUpdate == 'function' && a.UNSAFE_componentWillUpdate(n, w, u)),
                typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 256))
              : (typeof a.componentDidUpdate != 'function' ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != 'function' ||
                  (s === e.memoizedProps && h === e.memoizedState) ||
                  (t.flags |= 256),
                (t.memoizedProps = n),
                (t.memoizedState = w)),
            (a.props = n),
            (a.state = w),
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
      return mu(e, t, r, n, o, i)
    }
    function mu(e, t, r, n, i, o) {
      gp(e, t)
      var a = (t.flags & 64) != 0
      if (!n && !a) return i && Ff(t, r, !1), st(e, t, o)
      ;(n = t.stateNode), (Vv.current = t)
      var s = a && typeof r.getDerivedStateFromError != 'function' ? null : n.render()
      return (
        (t.flags |= 1),
        e !== null && a ? ((t.child = So(t, e.child, null, o)), (t.child = So(t, null, s, o))) : ye(e, t, s, o),
        (t.memoizedState = n.state),
        i && Ff(t, r, !0),
        t.child
      )
    }
    function _p(e) {
      var t = e.stateNode
      t.pendingContext ? Mf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Mf(e, t.context, !1),
        tu(e, t.containerInfo)
    }
    var Co = { dehydrated: null, retryLane: 0 }
    function Sp(e, t, r) {
      var n = t.pendingProps,
        i = $.current,
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
        q($, i & 1),
        e === null
          ? (n.fallback !== void 0 && nu(t),
            (e = n.children),
            (i = n.fallback),
            o
              ? ((e = wp(t, e, i, r)), (t.child.memoizedState = { baseLanes: r }), (t.memoizedState = Co), e)
              : typeof n.unstable_expectedLoadTime == 'number'
              ? ((e = wp(t, e, i, r)),
                (t.child.memoizedState = { baseLanes: r }),
                (t.memoizedState = Co),
                (t.lanes = 33554432),
                e)
              : ((r = Fu({ mode: 'visible', children: e }, t.mode, r, null)), (r.return = t), (t.child = r)))
          : e.memoizedState !== null
          ? o
            ? ((n = xp(e, t, n.children, n.fallback, r)),
              (o = t.child),
              (i = e.child.memoizedState),
              (o.memoizedState = i === null ? { baseLanes: r } : { baseLanes: i.baseLanes | r }),
              (o.childLanes = e.childLanes & ~r),
              (t.memoizedState = Co),
              n)
            : ((r = Ep(e, t, n.children, r)), (t.memoizedState = null), r)
          : o
          ? ((n = xp(e, t, n.children, n.fallback, r)),
            (o = t.child),
            (i = e.child.memoizedState),
            (o.memoizedState = i === null ? { baseLanes: r } : { baseLanes: i.baseLanes | r }),
            (o.childLanes = e.childLanes & ~r),
            (t.memoizedState = Co),
            n)
          : ((r = Ep(e, t, n.children, r)), (t.memoizedState = null), r)
      )
    }
    function wp(e, t, r, n) {
      var i = e.mode,
        o = e.child
      return (
        (t = { mode: 'hidden', children: t }),
        (i & 2) == 0 && o !== null ? ((o.childLanes = 0), (o.pendingProps = t)) : (o = Fu(t, i, 0, null)),
        (r = Qr(r, i, n, null)),
        (o.return = e),
        (r.return = e),
        (o.sibling = r),
        (e.child = o),
        r
      )
    }
    function Ep(e, t, r, n) {
      var i = e.child
      return (
        (e = i.sibling),
        (r = Ut(i, { mode: 'visible', children: r })),
        (t.mode & 2) == 0 && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
        (t.child = r)
      )
    }
    function xp(e, t, r, n, i) {
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
          : (r = Ut(a, s)),
        e !== null ? (n = Ut(e, n)) : ((n = Qr(n, o, i, null)), (n.flags |= 2)),
        (n.return = t),
        (r.return = t),
        (r.sibling = n),
        (t.child = r),
        n
      )
    }
    function kp(e, t) {
      e.lanes |= t
      var r = e.alternate
      r !== null && (r.lanes |= t), Vf(e.return, t)
    }
    function hu(e, t, r, n, i, o) {
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
    function Tp(e, t, r) {
      var n = t.pendingProps,
        i = n.revealOrder,
        o = n.tail
      if ((ye(e, t, n.children, r), (n = $.current), (n & 2) != 0)) (n = (n & 1) | 2), (t.flags |= 64)
      else {
        if (e !== null && (e.flags & 64) != 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && kp(e, r)
            else if (e.tag === 19) kp(e, r)
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
      if ((q($, n), (t.mode & 2) == 0)) t.memoizedState = null
      else
        switch (i) {
          case 'forwards':
            for (r = t.child, i = null; r !== null; )
              (e = r.alternate), e !== null && wo(e) === null && (i = r), (r = r.sibling)
            ;(r = i),
              r === null ? ((i = t.child), (t.child = null)) : ((i = r.sibling), (r.sibling = null)),
              hu(t, !1, i, r, o, t.lastEffect)
            break
          case 'backwards':
            for (r = null, i = t.child, t.child = null; i !== null; ) {
              if (((e = i.alternate), e !== null && wo(e) === null)) {
                t.child = i
                break
              }
              ;(e = i.sibling), (i.sibling = r), (r = i), (i = e)
            }
            hu(t, !0, r, null, o, t.lastEffect)
            break
          case 'together':
            hu(t, !1, null, null, void 0, t.lastEffect)
            break
          default:
            t.memoizedState = null
        }
      return t.child
    }
    function st(e, t, r) {
      if ((e !== null && (t.dependencies = e.dependencies), (oi |= t.lanes), (r & t.childLanes) != 0)) {
        if (e !== null && t.child !== e.child) throw Error(x(153))
        if (t.child !== null) {
          for (e = t.child, r = Ut(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; )
            (e = e.sibling), (r = r.sibling = Ut(e, e.pendingProps)), (r.return = t)
          r.sibling = null
        }
        return t.child
      }
      return null
    }
    var Op, vu, Ip, Cp
    Op = function (e, t) {
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
    vu = function () {}
    Ip = function (e, t, r, n) {
      var i = e.memoizedProps
      if (i !== n) {
        ;(e = t.stateNode), ir($e.current)
        var o = null
        switch (r) {
          case 'input':
            ;(i = ts(e, i)), (n = ts(e, n)), (o = [])
            break
          case 'option':
            ;(i = is(e, i)), (n = is(e, n)), (o = [])
            break
          case 'select':
            ;(i = z({}, i, { value: void 0 })), (n = z({}, n, { value: void 0 })), (o = [])
            break
          case 'textarea':
            ;(i = os(e, i)), (n = os(e, n)), (o = [])
            break
          default:
            typeof i.onClick != 'function' && typeof n.onClick == 'function' && (e.onclick = io)
        }
        us(r, n)
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
                (Sn.hasOwnProperty(l) ? o || (o = []) : (o = o || []).push(l, null))
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
                  (Sn.hasOwnProperty(l)
                    ? (u != null && l === 'onScroll' && U('scroll', e), o || s === u || (o = []))
                    : typeof u == 'object' && u !== null && u.$$typeof === Xa
                    ? u.toString()
                    : (o = o || []).push(l, u))
        }
        r && (o = o || []).push('style', r)
        var l = o
        ;(t.updateQueue = l) && (t.flags |= 4)
      }
    }
    Cp = function (e, t, r, n) {
      r !== n && (t.flags |= 4)
    }
    function ii(e, t) {
      if (!Ge)
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
    function qv(e, t, r) {
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
          return ve(t.type) && uo(), null
        case 3:
          return (
            Vr(),
            H(he),
            H(se),
            ou(),
            (n = t.stateNode),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) && (Eo(t) ? (t.flags |= 4) : n.hydrate || (t.flags |= 256)),
            vu(t),
            null
          )
        case 5:
          ru(t)
          var i = ir(Qn.current)
          if (((r = t.type), e !== null && t.stateNode != null)) Ip(e, t, r, n, i), e.ref !== t.ref && (t.flags |= 128)
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(x(166))
              return null
            }
            if (((e = ir($e.current)), Eo(t))) {
              ;(n = t.stateNode), (r = t.type)
              var o = t.memoizedProps
              switch (((n[It] = t), (n[ao] = o), r)) {
                case 'dialog':
                  U('cancel', n), U('close', n)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  U('load', n)
                  break
                case 'video':
                case 'audio':
                  for (e = 0; e < Wn.length; e++) U(Wn[e], n)
                  break
                case 'source':
                  U('error', n)
                  break
                case 'img':
                case 'image':
                case 'link':
                  U('error', n), U('load', n)
                  break
                case 'details':
                  U('toggle', n)
                  break
                case 'input':
                  yc(n, o), U('invalid', n)
                  break
                case 'select':
                  ;(n._wrapperState = { wasMultiple: !!o.multiple }), U('invalid', n)
                  break
                case 'textarea':
                  wc(n, o), U('invalid', n)
              }
              us(r, o), (e = null)
              for (var a in o)
                o.hasOwnProperty(a) &&
                  ((i = o[a]),
                  a === 'children'
                    ? typeof i == 'string'
                      ? n.textContent !== i && (e = ['children', i])
                      : typeof i == 'number' && n.textContent !== '' + i && (e = ['children', '' + i])
                    : Sn.hasOwnProperty(a) && i != null && a === 'onScroll' && U('scroll', n))
              switch (r) {
                case 'input':
                  Ui(n), Sc(n, o, !0)
                  break
                case 'textarea':
                  Ui(n), xc(n)
                  break
                case 'select':
                case 'option':
                  break
                default:
                  typeof o.onClick == 'function' && (n.onclick = io)
              }
              ;(n = e), (t.updateQueue = n), n !== null && (t.flags |= 4)
            } else {
              switch (
                ((a = i.nodeType === 9 ? i : i.ownerDocument),
                e === as.html && (e = kc(r)),
                e === as.html
                  ? r === 'script'
                    ? ((e = a.createElement('div')),
                      (e.innerHTML = '<script></script>'),
                      (e = e.removeChild(e.firstChild)))
                    : typeof n.is == 'string'
                    ? (e = a.createElement(r, { is: n.is }))
                    : ((e = a.createElement(r)),
                      r === 'select' && ((a = e), n.multiple ? (a.multiple = !0) : n.size && (a.size = n.size)))
                  : (e = a.createElementNS(e, r)),
                (e[It] = t),
                (e[ao] = n),
                Op(e, t, !1, !1),
                (t.stateNode = e),
                (a = ls(r, n)),
                r)
              ) {
                case 'dialog':
                  U('cancel', e), U('close', e), (i = n)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  U('load', e), (i = n)
                  break
                case 'video':
                case 'audio':
                  for (i = 0; i < Wn.length; i++) U(Wn[i], e)
                  i = n
                  break
                case 'source':
                  U('error', e), (i = n)
                  break
                case 'img':
                case 'image':
                case 'link':
                  U('error', e), U('load', e), (i = n)
                  break
                case 'details':
                  U('toggle', e), (i = n)
                  break
                case 'input':
                  yc(e, n), (i = ts(e, n)), U('invalid', e)
                  break
                case 'option':
                  i = is(e, n)
                  break
                case 'select':
                  ;(e._wrapperState = { wasMultiple: !!n.multiple }), (i = z({}, n, { value: void 0 })), U('invalid', e)
                  break
                case 'textarea':
                  wc(e, n), (i = os(e, n)), U('invalid', e)
                  break
                default:
                  i = n
              }
              us(r, i)
              var s = i
              for (o in s)
                if (s.hasOwnProperty(o)) {
                  var u = s[o]
                  o === 'style'
                    ? Ic(e, u)
                    : o === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Tc(e, u))
                    : o === 'children'
                    ? typeof u == 'string'
                      ? (r !== 'textarea' || u !== '') && On(e, u)
                      : typeof u == 'number' && On(e, '' + u)
                    : o !== 'suppressContentEditableWarning' &&
                      o !== 'suppressHydrationWarning' &&
                      o !== 'autoFocus' &&
                      (Sn.hasOwnProperty(o)
                        ? u != null && o === 'onScroll' && U('scroll', e)
                        : u != null && Va(e, o, u, a))
                }
              switch (r) {
                case 'input':
                  Ui(e), Sc(e, n, !1)
                  break
                case 'textarea':
                  Ui(e), xc(e)
                  break
                case 'option':
                  n.value != null && e.setAttribute('value', '' + wt(n.value))
                  break
                case 'select':
                  ;(e.multiple = !!n.multiple),
                    (o = n.value),
                    o != null
                      ? Tr(e, !!n.multiple, o, !1)
                      : n.defaultValue != null && Tr(e, !!n.multiple, n.defaultValue, !0)
                  break
                default:
                  typeof i.onClick == 'function' && (e.onclick = io)
              }
              Cf(r, n) && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 128)
          }
          return null
        case 6:
          if (e && t.stateNode != null) Cp(e, t, e.memoizedProps, n)
          else {
            if (typeof n != 'string' && t.stateNode === null) throw Error(x(166))
            ;(r = ir(Qn.current)),
              ir($e.current),
              Eo(t)
                ? ((n = t.stateNode), (r = t.memoizedProps), (n[It] = t), n.nodeValue !== r && (t.flags |= 4))
                : ((n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)), (n[It] = t), (t.stateNode = n))
          }
          return null
        case 13:
          return (
            H($),
            (n = t.memoizedState),
            (t.flags & 64) != 0
              ? ((t.lanes = r), t)
              : ((n = n !== null),
                (r = !1),
                e === null ? t.memoizedProps.fallback !== void 0 && Eo(t) : (r = e.memoizedState !== null),
                n &&
                  !r &&
                  (t.mode & 2) != 0 &&
                  ((e === null && t.memoizedProps.unstable_avoidThisFallback !== !0) || ($.current & 1) != 0
                    ? ie === 0 && (ie = 3)
                    : ((ie === 0 || ie === 3) && (ie = 4),
                      pe === null || ((oi & 134217727) == 0 && (Gr & 134217727) == 0) || Kr(pe, ce))),
                (n || r) && (t.flags |= 4),
                null)
          )
        case 4:
          return Vr(), vu(t), e === null && xf(t.stateNode.containerInfo), null
        case 10:
          return Js(t), null
        case 17:
          return ve(t.type) && uo(), null
        case 19:
          if ((H($), (n = t.memoizedState), n === null)) return null
          if (((o = (t.flags & 64) != 0), (a = n.rendering), a === null))
            if (o) ii(n, !1)
            else {
              if (ie !== 0 || (e !== null && (e.flags & 64) != 0))
                for (e = t.child; e !== null; ) {
                  if (((a = wo(e)), a !== null)) {
                    for (
                      t.flags |= 64,
                        ii(n, !1),
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
                    return q($, ($.current & 1) | 2), t.child
                  }
                  e = e.sibling
                }
              n.tail !== null && ue() > Iu && ((t.flags |= 64), (o = !0), ii(n, !1), (t.lanes = 33554432))
            }
          else {
            if (!o)
              if (((e = wo(a)), e !== null)) {
                if (
                  ((t.flags |= 64),
                  (o = !0),
                  (r = e.updateQueue),
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  ii(n, !0),
                  n.tail === null && n.tailMode === 'hidden' && !a.alternate && !Ge)
                )
                  return (t = t.lastEffect = n.lastEffect), t !== null && (t.nextEffect = null), null
              } else
                2 * ue() - n.renderingStartTime > Iu &&
                  r !== 1073741824 &&
                  ((t.flags |= 64), (o = !0), ii(n, !1), (t.lanes = 33554432))
            n.isBackwards
              ? ((a.sibling = t.child), (t.child = a))
              : ((r = n.last), r !== null ? (r.sibling = a) : (t.child = a), (n.last = a))
          }
          return n.tail !== null
            ? ((r = n.tail),
              (n.rendering = r),
              (n.tail = r.sibling),
              (n.lastEffect = t.lastEffect),
              (n.renderingStartTime = ue()),
              (r.sibling = null),
              (t = $.current),
              q($, o ? (t & 1) | 2 : t & 1),
              r)
            : null
        case 23:
        case 24:
          return (
            Mu(),
            e !== null &&
              (e.memoizedState !== null) != (t.memoizedState !== null) &&
              n.mode !== 'unstable-defer-without-hiding' &&
              (t.flags |= 4),
            null
          )
      }
      throw Error(x(156, t.tag))
    }
    function $v(e) {
      switch (e.tag) {
        case 1:
          ve(e.type) && uo()
          var t = e.flags
          return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
        case 3:
          if ((Vr(), H(he), H(se), ou(), (t = e.flags), (t & 64) != 0)) throw Error(x(285))
          return (e.flags = (t & -4097) | 64), e
        case 5:
          return ru(e), null
        case 13:
          return H($), (t = e.flags), t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
        case 19:
          return H($), null
        case 4:
          return Vr(), null
        case 10:
          return Js(e), null
        case 23:
        case 24:
          return Mu(), null
        default:
          return null
      }
    }
    function gu(e, t) {
      try {
        var r = '',
          n = t
        do (r += Oh(n)), (n = n.return)
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
    function yu(e, t) {
      try {
        console.error(t.value)
      } catch (r) {
        setTimeout(function () {
          throw r
        })
      }
    }
    var Gv = typeof WeakMap == 'function' ? WeakMap : Map
    function bp(e, t, r) {
      ;(r = Nt(-1, r)), (r.tag = 3), (r.payload = { element: null })
      var n = t.value
      return (
        (r.callback = function () {
          No || ((No = !0), (Cu = n)), yu(e, t)
        }),
        r
      )
    }
    function Rp(e, t, r) {
      ;(r = Nt(-1, r)), (r.tag = 3)
      var n = e.type.getDerivedStateFromError
      if (typeof n == 'function') {
        var i = t.value
        r.payload = function () {
          return yu(e, t), n(i)
        }
      }
      var o = e.stateNode
      return (
        o !== null &&
          typeof o.componentDidCatch == 'function' &&
          (r.callback = function () {
            typeof n != 'function' && (Ke === null ? (Ke = new Set([this])) : Ke.add(this), yu(e, t))
            var a = t.stack
            this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
          }),
        r
      )
    }
    var Yv = typeof WeakSet == 'function' ? WeakSet : Set
    function Np(e) {
      var t = e.ref
      if (t !== null)
        if (typeof t == 'function')
          try {
            t(null)
          } catch (r) {
            At(e, r)
          }
        else t.current = null
    }
    function Kv(e, t) {
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
              (t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? r : je(t.type, r), n)),
              (e.__reactInternalSnapshotBeforeUpdate = t)
          }
          return
        case 3:
          t.flags & 256 && Bs(t.stateNode.containerInfo)
          return
        case 5:
        case 6:
        case 4:
        case 17:
          return
      }
      throw Error(x(163))
    }
    function Xv(e, t, r) {
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
              ;(n = i.next), (i = i.tag), (i & 4) != 0 && (i & 1) != 0 && ($p(r, e), ig(r, e)), (e = n)
            } while (e !== t)
          }
          return
        case 1:
          ;(e = r.stateNode),
            r.flags & 4 &&
              (t === null
                ? e.componentDidMount()
                : ((n = r.elementType === r.type ? t.memoizedProps : je(r.type, t.memoizedProps)),
                  e.componentDidUpdate(n, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
            (t = r.updateQueue),
            t !== null && Gf(r, t, e)
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
            Gf(r, t, e)
          }
          return
        case 5:
          ;(e = r.stateNode), t === null && r.flags & 4 && Cf(r.type, r.memoizedProps) && e.focus()
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
            r !== null && ((r = r.memoizedState), r !== null && ((r = r.dehydrated), r !== null && Wc(r))))
          return
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return
      }
      throw Error(x(163))
    }
    function Pp(e, t) {
      for (var r = e; ; ) {
        if (r.tag === 5) {
          var n = r.stateNode
          if (t)
            (n = n.style),
              typeof n.setProperty == 'function' ? n.setProperty('display', 'none', 'important') : (n.display = 'none')
          else {
            n = r.stateNode
            var i = r.memoizedProps.style
            ;(i = i != null && i.hasOwnProperty('display') ? i.display : null), (n.style.display = Oc('display', i))
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
    function Mp(e, t) {
      if (rr && typeof rr.onCommitFiberUnmount == 'function')
        try {
          rr.onCommitFiberUnmount(qs, t)
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
                if ((n & 4) != 0) $p(t, r)
                else {
                  n = t
                  try {
                    i()
                  } catch (o) {
                    At(n, o)
                  }
                }
              r = r.next
            } while (r !== e)
          }
          break
        case 1:
          if ((Np(t), (e = t.stateNode), typeof e.componentWillUnmount == 'function'))
            try {
              ;(e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount()
            } catch (o) {
              At(t, o)
            }
          break
        case 5:
          Np(t)
          break
        case 4:
          Lp(e, t)
      }
    }
    function jp(e) {
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
    function Fp(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Dp(e) {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Fp(t)) break e
          t = t.return
        }
        throw Error(x(160))
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
          throw Error(x(161))
      }
      r.flags & 16 && (On(t, ''), (r.flags &= -17))
      e: t: for (r = e; ; ) {
        for (; r.sibling === null; ) {
          if (r.return === null || Fp(r.return)) {
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
      n ? _u(e, r, t) : Su(e, r, t)
    }
    function _u(e, t, r) {
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
              r != null || t.onclick !== null || (t.onclick = io))
      else if (n !== 4 && ((e = e.child), e !== null))
        for (_u(e, t, r), e = e.sibling; e !== null; ) _u(e, t, r), (e = e.sibling)
    }
    function Su(e, t, r) {
      var n = e.tag,
        i = n === 5 || n === 6
      if (i) (e = i ? e.stateNode : e.stateNode.instance), t ? r.insertBefore(e, t) : r.appendChild(e)
      else if (n !== 4 && ((e = e.child), e !== null))
        for (Su(e, t, r), e = e.sibling; e !== null; ) Su(e, t, r), (e = e.sibling)
    }
    function Lp(e, t) {
      for (var r = t, n = !1, i, o; ; ) {
        if (!n) {
          n = r.return
          e: for (;;) {
            if (n === null) throw Error(x(160))
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
            if ((Mp(a, u), u.child !== null && u.tag !== 4)) (u.child.return = u), (u = u.child)
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
        } else if ((Mp(e, r), r.child !== null)) {
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
    function wu(e, t) {
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
                r[ao] = n,
                  e === 'input' && n.type === 'radio' && n.name != null && _c(r, n),
                  ls(e, i),
                  t = ls(e, n),
                  i = 0;
                i < o.length;
                i += 2
              ) {
                var a = o[i],
                  s = o[i + 1]
                a === 'style'
                  ? Ic(r, s)
                  : a === 'dangerouslySetInnerHTML'
                  ? Tc(r, s)
                  : a === 'children'
                  ? On(r, s)
                  : Va(r, a, s, t)
              }
              switch (e) {
                case 'input':
                  rs(r, n)
                  break
                case 'textarea':
                  Ec(r, n)
                  break
                case 'select':
                  ;(e = r._wrapperState.wasMultiple),
                    (r._wrapperState.wasMultiple = !!n.multiple),
                    (o = n.value),
                    o != null
                      ? Tr(r, !!n.multiple, o, !1)
                      : e !== !!n.multiple &&
                        (n.defaultValue != null
                          ? Tr(r, !!n.multiple, n.defaultValue, !0)
                          : Tr(r, !!n.multiple, n.multiple ? [] : '', !1))
              }
            }
          }
          return
        case 6:
          if (t.stateNode === null) throw Error(x(162))
          t.stateNode.nodeValue = t.memoizedProps
          return
        case 3:
          ;(r = t.stateNode), r.hydrate && ((r.hydrate = !1), Wc(r.containerInfo))
          return
        case 12:
          return
        case 13:
          t.memoizedState !== null && ((Ou = ue()), Pp(t.child, !0)), Ap(t)
          return
        case 19:
          Ap(t)
          return
        case 17:
          return
        case 23:
        case 24:
          Pp(t, t.memoizedState !== null)
          return
      }
      throw Error(x(163))
    }
    function Ap(e) {
      var t = e.updateQueue
      if (t !== null) {
        e.updateQueue = null
        var r = e.stateNode
        r === null && (r = e.stateNode = new Yv()),
          t.forEach(function (n) {
            var i = sg.bind(null, e, n)
            r.has(n) || (r.add(n), n.then(i, i))
          })
      }
    }
    function Qv(e, t) {
      return e !== null && ((e = e.memoizedState), e === null || e.dehydrated !== null)
        ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
        : !1
    }
    var Jv = Math.ceil,
      bo = Xt.ReactCurrentDispatcher,
      Eu = Xt.ReactCurrentOwner,
      C = 0,
      pe = null,
      Q = null,
      ce = 0,
      sr = 0,
      xu = Ct(0),
      ie = 0,
      Ro = null,
      $r = 0,
      oi = 0,
      Gr = 0,
      ku = 0,
      Tu = null,
      Ou = 0,
      Iu = Infinity
    function Yr() {
      Iu = ue() + 500
    }
    var k = null,
      No = !1,
      Cu = null,
      Ke = null,
      jt = !1,
      ai = null,
      si = 90,
      bu = [],
      Ru = [],
      ut = null,
      ui = 0,
      Nu = null,
      Po = -1,
      lt = 0,
      Mo = 0,
      li = null,
      jo = !1
    function Se() {
      return (C & 48) != 0 ? ue() : Po !== -1 ? Po : (Po = ue())
    }
    function Ft(e) {
      if (((e = e.mode), (e & 2) == 0)) return 1
      if ((e & 4) == 0) return zr() === 99 ? 1 : 2
      if ((lt === 0 && (lt = $r), Uv.transition !== 0)) {
        Mo !== 0 && (Mo = Tu !== null ? Tu.pendingLanes : 0), (e = lt)
        var t = 4186112 & ~Mo
        return (t &= -t), t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)), t
      }
      return (e = zr()), (C & 4) != 0 && e === 98 ? (e = Gi(12, lt)) : ((e = Bh(e)), (e = Gi(e, lt))), e
    }
    function Dt(e, t, r) {
      if (50 < ui) throw ((ui = 0), (Nu = null), Error(x(185)))
      if (((e = Fo(e, t)), e === null)) return null
      Yi(e, t, r), e === pe && ((Gr |= t), ie === 4 && Kr(e, ce))
      var n = zr()
      t === 1
        ? (C & 8) != 0 && (C & 48) == 0
          ? Pu(e)
          : (Ce(e, r), C === 0 && (Yr(), qe()))
        : ((C & 4) == 0 || (n !== 98 && n !== 99) || (ut === null ? (ut = new Set([e])) : ut.add(e)), Ce(e, r)),
        (Tu = e)
    }
    function Fo(e, t) {
      e.lanes |= t
      var r = e.alternate
      for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
        (e.childLanes |= t), (r = e.alternate), r !== null && (r.childLanes |= t), (r = e), (e = e.return)
      return r.tag === 3 ? r.stateNode : null
    }
    function Ce(e, t) {
      for (
        var r = e.callbackNode, n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes;
        0 < a;

      ) {
        var s = 31 - Tt(a),
          u = 1 << s,
          l = o[s]
        if (l === -1) {
          if ((u & n) == 0 || (u & i) != 0) {
            ;(l = t), Rr(u)
            var c = A
            o[s] = 10 <= c ? l + 250 : 6 <= c ? l + 5e3 : -1
          }
        } else l <= t && (e.expiredLanes |= u)
        a &= ~u
      }
      if (((n = Fn(e, e === pe ? ce : 0)), (t = A), n === 0))
        r !== null && (r !== Ks && Gs(r), (e.callbackNode = null), (e.callbackPriority = 0))
      else {
        if (r !== null) {
          if (e.callbackPriority === t) return
          r !== Ks && Gs(r)
        }
        t === 15
          ? ((r = Pu.bind(null, e)), ot === null ? ((ot = [r]), (fo = $s(co, Wf))) : ot.push(r), (r = Ks))
          : t === 14
          ? (r = $n(99, Pu.bind(null, e)))
          : ((r = Wh(t)), (r = $n(r, Up.bind(null, e)))),
          (e.callbackPriority = t),
          (e.callbackNode = r)
      }
    }
    function Up(e) {
      if (((Po = -1), (Mo = lt = 0), (C & 48) != 0)) throw Error(x(327))
      var t = e.callbackNode
      if (Lt() && e.callbackNode !== t) return null
      var r = Fn(e, e === pe ? ce : 0)
      if (r === 0) return null
      var n = r,
        i = C
      C |= 16
      var o = Wp()
      ;(pe !== e || ce !== n) && (Yr(), Xr(e, n))
      do
        try {
          tg()
          break
        } catch (s) {
          Bp(e, s)
        }
      while (1)
      if ((Qs(), (bo.current = o), (C = i), Q !== null ? (n = 0) : ((pe = null), (ce = 0), (n = ie)), ($r & Gr) != 0))
        Xr(e, 0)
      else if (n !== 0) {
        if (
          (n === 2 &&
            ((C |= 64), e.hydrate && ((e.hydrate = !1), Bs(e.containerInfo)), (r = Xc(e)), r !== 0 && (n = ci(e, r))),
          n === 1)
        )
          throw ((t = Ro), Xr(e, 0), Kr(e, r), Ce(e, ue()), t)
        switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(x(345))
          case 2:
            ur(e)
            break
          case 3:
            if ((Kr(e, r), (r & 62914560) === r && ((n = Ou + 500 - ue()), 10 < n))) {
              if (Fn(e, 0) !== 0) break
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                Se(), (e.pingedLanes |= e.suspendedLanes & i)
                break
              }
              e.timeoutHandle = bf(ur.bind(null, e), n)
              break
            }
            ur(e)
            break
          case 4:
            if ((Kr(e, r), (r & 4186112) === r)) break
            for (n = e.eventTimes, i = -1; 0 < r; ) {
              var a = 31 - Tt(r)
              ;(o = 1 << a), (a = n[a]), a > i && (i = a), (r &= ~o)
            }
            if (
              ((r = i),
              (r = ue() - r),
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
                  : 1960 * Jv(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = bf(ur.bind(null, e), r)
              break
            }
            ur(e)
            break
          case 5:
            ur(e)
            break
          default:
            throw Error(x(329))
        }
      }
      return Ce(e, ue()), e.callbackNode === t ? Up.bind(null, e) : null
    }
    function Kr(e, t) {
      for (t &= ~ku, t &= ~Gr, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var r = 31 - Tt(t),
          n = 1 << r
        ;(e[r] = -1), (t &= ~n)
      }
    }
    function Pu(e) {
      if ((C & 48) != 0) throw Error(x(327))
      if ((Lt(), e === pe && (e.expiredLanes & ce) != 0)) {
        var t = ce,
          r = ci(e, t)
        ;($r & Gr) != 0 && ((t = Fn(e, t)), (r = ci(e, t)))
      } else (t = Fn(e, 0)), (r = ci(e, t))
      if (
        (e.tag !== 0 &&
          r === 2 &&
          ((C |= 64), e.hydrate && ((e.hydrate = !1), Bs(e.containerInfo)), (t = Xc(e)), t !== 0 && (r = ci(e, t))),
        r === 1)
      )
        throw ((r = Ro), Xr(e, 0), Kr(e, t), Ce(e, ue()), r)
      return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), ur(e), Ce(e, ue()), null
    }
    function Zv() {
      if (ut !== null) {
        var e = ut
        ;(ut = null),
          e.forEach(function (t) {
            ;(t.expiredLanes |= 24 & t.pendingLanes), Ce(t, ue())
          })
      }
      qe()
    }
    function Hp(e, t) {
      var r = C
      C |= 1
      try {
        return e(t)
      } finally {
        ;(C = r), C === 0 && (Yr(), qe())
      }
    }
    function zp(e, t) {
      var r = C
      ;(C &= -2), (C |= 8)
      try {
        return e(t)
      } finally {
        ;(C = r), C === 0 && (Yr(), qe())
      }
    }
    function Do(e, t) {
      q(xu, sr), (sr |= t), ($r |= t)
    }
    function Mu() {
      ;(sr = xu.current), H(xu)
    }
    function Xr(e, t) {
      ;(e.finishedWork = null), (e.finishedLanes = 0)
      var r = e.timeoutHandle
      if ((r !== -1 && ((e.timeoutHandle = -1), Mv(r)), Q !== null))
        for (r = Q.return; r !== null; ) {
          var n = r
          switch (n.tag) {
            case 1:
              ;(n = n.type.childContextTypes), n != null && uo()
              break
            case 3:
              Vr(), H(he), H(se), ou()
              break
            case 5:
              ru(n)
              break
            case 4:
              Vr()
              break
            case 13:
              H($)
              break
            case 19:
              H($)
              break
            case 10:
              Js(n)
              break
            case 23:
            case 24:
              Mu()
          }
          r = r.return
        }
      ;(pe = e), (Q = Ut(e.current, null)), (ce = sr = $r = t), (ie = 0), (Ro = null), (ku = Gr = oi = 0)
    }
    function Bp(e, t) {
      do {
        var r = Q
        try {
          if ((Qs(), (Jn.current = Io), xo)) {
            for (var n = Y.memoizedState; n !== null; ) {
              var i = n.queue
              i !== null && (i.pending = null), (n = n.next)
            }
            xo = !1
          }
          if (((Zn = 0), (ne = le = Y = null), (ei = !1), (Eu.current = null), r === null || r.return === null)) {
            ;(ie = 1), (Ro = t), (Q = null)
            break
          }
          e: {
            var o = e,
              a = r.return,
              s = r,
              u = t
            if (
              ((t = ce),
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
              var m = ($.current & 1) != 0,
                h = a
              do {
                var _
                if ((_ = h.tag === 13)) {
                  var w = h.memoizedState
                  if (w !== null) _ = w.dehydrated !== null
                  else {
                    var E = h.memoizedProps
                    _ = E.fallback === void 0 ? !1 : E.unstable_avoidThisFallback !== !0 ? !0 : !m
                  }
                }
                if (_) {
                  var p = h.updateQueue
                  if (p === null) {
                    var f = new Set()
                    f.add(l), (h.updateQueue = f)
                  } else p.add(l)
                  if ((h.mode & 2) == 0) {
                    if (((h.flags |= 64), (s.flags |= 16384), (s.flags &= -2981), s.tag === 1))
                      if (s.alternate === null) s.tag = 17
                      else {
                        var d = Nt(-1, 1)
                        ;(d.tag = 2), Pt(s, d)
                      }
                    s.lanes |= 1
                    break e
                  }
                  ;(u = void 0), (s = t)
                  var g = o.pingCache
                  if (
                    (g === null
                      ? ((g = o.pingCache = new Gv()), (u = new Set()), g.set(l, u))
                      : ((u = g.get(l)), u === void 0 && ((u = new Set()), g.set(l, u))),
                    !u.has(s))
                  ) {
                    u.add(s)
                    var y = ag.bind(null, o, l, s)
                    l.then(y, y)
                  }
                  ;(h.flags |= 4096), (h.lanes = t)
                  break e
                }
                h = h.return
              } while (h !== null)
              u = Error(
                (kr(s.type) || 'A React component') +
                  ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
              )
            }
            ie !== 5 && (ie = 2), (u = gu(u, s)), (h = a)
            do {
              switch (h.tag) {
                case 3:
                  ;(o = u), (h.flags |= 4096), (t &= -t), (h.lanes |= t)
                  var I = bp(h, o, t)
                  $f(h, I)
                  break e
                case 1:
                  o = u
                  var T = h.type,
                    R = h.stateNode
                  if (
                    (h.flags & 64) == 0 &&
                    (typeof T.getDerivedStateFromError == 'function' ||
                      (R !== null && typeof R.componentDidCatch == 'function' && (Ke === null || !Ke.has(R))))
                  ) {
                    ;(h.flags |= 4096), (t &= -t), (h.lanes |= t)
                    var M = Rp(h, o, t)
                    $f(h, M)
                    break e
                  }
              }
              h = h.return
            } while (h !== null)
          }
          qp(r)
        } catch (N) {
          ;(t = N), Q === r && r !== null && (Q = r = r.return)
          continue
        }
        break
      } while (1)
    }
    function Wp() {
      var e = bo.current
      return (bo.current = Io), e === null ? Io : e
    }
    function ci(e, t) {
      var r = C
      C |= 16
      var n = Wp()
      ;(pe === e && ce === t) || Xr(e, t)
      do
        try {
          eg()
          break
        } catch (i) {
          Bp(e, i)
        }
      while (1)
      if ((Qs(), (C = r), (bo.current = n), Q !== null)) throw Error(x(261))
      return (pe = null), (ce = 0), ie
    }
    function eg() {
      for (; Q !== null; ) Vp(Q)
    }
    function tg() {
      for (; Q !== null && !Dv(); ) Vp(Q)
    }
    function Vp(e) {
      var t = Yp(e.alternate, e, sr)
      ;(e.memoizedProps = e.pendingProps), t === null ? qp(e) : (Q = t), (Eu.current = null)
    }
    function qp(e) {
      var t = e
      do {
        var r = t.alternate
        if (((e = t.return), (t.flags & 2048) == 0)) {
          if (((r = qv(r, t, sr)), r !== null)) {
            Q = r
            return
          }
          if (
            ((r = t),
            (r.tag !== 24 && r.tag !== 23) || r.memoizedState === null || (sr & 1073741824) != 0 || (r.mode & 4) == 0)
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
          if (((r = $v(t)), r !== null)) {
            ;(r.flags &= 2047), (Q = r)
            return
          }
          e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048))
        }
        if (((t = t.sibling), t !== null)) {
          Q = t
          return
        }
        Q = t = e
      } while (t !== null)
      ie === 0 && (ie = 5)
    }
    function ur(e) {
      var t = zr()
      return nr(99, rg.bind(null, e, t)), null
    }
    function rg(e, t) {
      do Lt()
      while (ai !== null)
      if ((C & 48) != 0) throw Error(x(327))
      var r = e.finishedWork
      if (r === null) return null
      if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(x(177))
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
        var u = 31 - Tt(o),
          l = 1 << u
        ;(i[u] = 0), (a[u] = -1), (s[u] = -1), (o &= ~l)
      }
      if (
        (ut !== null && (n & 24) == 0 && ut.has(e) && ut.delete(e),
        e === pe && ((Q = pe = null), (ce = 0)),
        1 < r.flags
          ? r.lastEffect !== null
            ? ((r.lastEffect.nextEffect = r), (n = r.firstEffect))
            : (n = r)
          : (n = r.firstEffect),
        n !== null)
      ) {
        if (((i = C), (C |= 32), (Eu.current = null), (Us = Ki), (a = vf()), Fs(a))) {
          if ('selectionStart' in a) s = { start: a.selectionStart, end: a.selectionEnd }
          else
            e: if (
              ((s = ((s = a.ownerDocument) && s.defaultView) || window),
              (l = s.getSelection && s.getSelection()) && l.rangeCount !== 0)
            ) {
              ;(s = l.anchorNode), (o = l.anchorOffset), (u = l.focusNode), (l = l.focusOffset)
              try {
                s.nodeType, u.nodeType
              } catch (N) {
                s = null
                break e
              }
              var c = 0,
                m = -1,
                h = -1,
                _ = 0,
                w = 0,
                E = a,
                p = null
              t: for (;;) {
                for (
                  var f;
                  E !== s || (o !== 0 && E.nodeType !== 3) || (m = c + o),
                    E !== u || (l !== 0 && E.nodeType !== 3) || (h = c + l),
                    E.nodeType === 3 && (c += E.nodeValue.length),
                    (f = E.firstChild) !== null;

                )
                  (p = E), (E = f)
                for (;;) {
                  if (E === a) break t
                  if ((p === s && ++_ === o && (m = c), p === u && ++w === l && (h = c), (f = E.nextSibling) !== null))
                    break
                  ;(E = p), (p = E.parentNode)
                }
                E = f
              }
              s = m === -1 || h === -1 ? null : { start: m, end: h }
            } else s = null
          s = s || { start: 0, end: 0 }
        } else s = null
        ;(Hs = { focusedElem: a, selectionRange: s }), (Ki = !1), (li = null), (jo = !1), (k = n)
        do
          try {
            ng()
          } catch (N) {
            if (k === null) throw Error(x(330))
            At(k, N), (k = k.nextEffect)
          }
        while (k !== null)
        ;(li = null), (k = n)
        do
          try {
            for (a = e; k !== null; ) {
              var d = k.flags
              if ((d & 16 && On(k.stateNode, ''), d & 128)) {
                var g = k.alternate
                if (g !== null) {
                  var y = g.ref
                  y !== null && (typeof y == 'function' ? y(null) : (y.current = null))
                }
              }
              switch (d & 1038) {
                case 2:
                  Dp(k), (k.flags &= -3)
                  break
                case 6:
                  Dp(k), (k.flags &= -3), wu(k.alternate, k)
                  break
                case 1024:
                  k.flags &= -1025
                  break
                case 1028:
                  ;(k.flags &= -1025), wu(k.alternate, k)
                  break
                case 4:
                  wu(k.alternate, k)
                  break
                case 8:
                  ;(s = k), Lp(a, s)
                  var I = s.alternate
                  jp(s), I !== null && jp(I)
              }
              k = k.nextEffect
            }
          } catch (N) {
            if (k === null) throw Error(x(330))
            At(k, N), (k = k.nextEffect)
          }
        while (k !== null)
        if (
          ((y = Hs),
          (g = vf()),
          (d = y.focusedElem),
          (a = y.selectionRange),
          g !== d && d && d.ownerDocument && hf(d.ownerDocument.documentElement, d))
        ) {
          for (
            a !== null &&
              Fs(d) &&
              ((g = a.start),
              (y = a.end),
              y === void 0 && (y = g),
              ('selectionStart' in d)
                ? ((d.selectionStart = g), (d.selectionEnd = Math.min(y, d.value.length)))
                : ((y = ((g = d.ownerDocument || document) && g.defaultView) || window),
                  y.getSelection &&
                    ((y = y.getSelection()),
                    (s = d.textContent.length),
                    (I = Math.min(a.start, s)),
                    (a = a.end === void 0 ? I : Math.min(a.end, s)),
                    !y.extend && I > a && ((s = a), (a = I), (I = s)),
                    (s = mf(d, I)),
                    (o = mf(d, a)),
                    s &&
                      o &&
                      (y.rangeCount !== 1 ||
                        y.anchorNode !== s.node ||
                        y.anchorOffset !== s.offset ||
                        y.focusNode !== o.node ||
                        y.focusOffset !== o.offset) &&
                      ((g = g.createRange()),
                      g.setStart(s.node, s.offset),
                      y.removeAllRanges(),
                      I > a
                        ? (y.addRange(g), y.extend(o.node, o.offset))
                        : (g.setEnd(o.node, o.offset), y.addRange(g)))))),
              g = [],
              y = d;
            (y = y.parentNode);

          )
            y.nodeType === 1 && g.push({ element: y, left: y.scrollLeft, top: y.scrollTop })
          for (typeof d.focus == 'function' && d.focus(), d = 0; d < g.length; d++)
            (y = g[d]), (y.element.scrollLeft = y.left), (y.element.scrollTop = y.top)
        }
        ;(Ki = !!Us), (Hs = Us = null), (e.current = r), (k = n)
        do
          try {
            for (d = e; k !== null; ) {
              var T = k.flags
              if ((T & 36 && Xv(d, k.alternate, k), T & 128)) {
                g = void 0
                var R = k.ref
                if (R !== null) {
                  var M = k.stateNode
                  switch (k.tag) {
                    case 5:
                      g = M
                      break
                    default:
                      g = M
                  }
                  typeof R == 'function' ? R(g) : (R.current = g)
                }
              }
              k = k.nextEffect
            }
          } catch (N) {
            if (k === null) throw Error(x(330))
            At(k, N), (k = k.nextEffect)
          }
        while (k !== null)
        ;(k = null), Av(), (C = i)
      } else e.current = r
      if (jt) (jt = !1), (ai = e), (si = t)
      else
        for (k = n; k !== null; )
          (t = k.nextEffect),
            (k.nextEffect = null),
            k.flags & 8 && ((T = k), (T.sibling = null), (T.stateNode = null)),
            (k = t)
      if (
        ((n = e.pendingLanes),
        n === 0 && (Ke = null),
        n === 1 ? (e === Nu ? ui++ : ((ui = 0), (Nu = e))) : (ui = 0),
        (r = r.stateNode),
        rr && typeof rr.onCommitFiberRoot == 'function')
      )
        try {
          rr.onCommitFiberRoot(qs, r, void 0, (r.current.flags & 64) == 64)
        } catch (N) {}
      if ((Ce(e, ue()), No)) throw ((No = !1), (e = Cu), (Cu = null), e)
      return (C & 8) != 0 || qe(), null
    }
    function ng() {
      for (; k !== null; ) {
        var e = k.alternate
        jo ||
          li === null ||
          ((k.flags & 8) != 0 ? Dc(k, li) && (jo = !0) : k.tag === 13 && Qv(e, k) && Dc(k, li) && (jo = !0))
        var t = k.flags
        ;(t & 256) != 0 && Kv(e, k),
          (t & 512) == 0 ||
            jt ||
            ((jt = !0),
            $n(97, function () {
              return Lt(), null
            })),
          (k = k.nextEffect)
      }
    }
    function Lt() {
      if (si !== 90) {
        var e = 97 < si ? 97 : si
        return (si = 90), nr(e, og)
      }
      return !1
    }
    function ig(e, t) {
      bu.push(t, e),
        jt ||
          ((jt = !0),
          $n(97, function () {
            return Lt(), null
          }))
    }
    function $p(e, t) {
      Ru.push(t, e),
        jt ||
          ((jt = !0),
          $n(97, function () {
            return Lt(), null
          }))
    }
    function og() {
      if (ai === null) return !1
      var e = ai
      if (((ai = null), (C & 48) != 0)) throw Error(x(331))
      var t = C
      C |= 32
      var r = Ru
      Ru = []
      for (var n = 0; n < r.length; n += 2) {
        var i = r[n],
          o = r[n + 1],
          a = i.destroy
        if (((i.destroy = void 0), typeof a == 'function'))
          try {
            a()
          } catch (u) {
            if (o === null) throw Error(x(330))
            At(o, u)
          }
      }
      for (r = bu, bu = [], n = 0; n < r.length; n += 2) {
        ;(i = r[n]), (o = r[n + 1])
        try {
          var s = i.create
          i.destroy = s()
        } catch (u) {
          if (o === null) throw Error(x(330))
          At(o, u)
        }
      }
      for (s = e.current.firstEffect; s !== null; )
        (e = s.nextEffect), (s.nextEffect = null), s.flags & 8 && ((s.sibling = null), (s.stateNode = null)), (s = e)
      return (C = t), qe(), !0
    }
    function Gp(e, t, r) {
      ;(t = gu(r, t)), (t = bp(e, t, 1)), Pt(e, t), (t = Se()), (e = Fo(e, 1)), e !== null && (Yi(e, 1, t), Ce(e, t))
    }
    function At(e, t) {
      if (e.tag === 3) Gp(e, e, t)
      else
        for (var r = e.return; r !== null; ) {
          if (r.tag === 3) {
            Gp(r, e, t)
            break
          } else if (r.tag === 1) {
            var n = r.stateNode
            if (
              typeof r.type.getDerivedStateFromError == 'function' ||
              (typeof n.componentDidCatch == 'function' && (Ke === null || !Ke.has(n)))
            ) {
              e = gu(t, e)
              var i = Rp(r, e, 1)
              if ((Pt(r, i), (i = Se()), (r = Fo(r, 1)), r !== null)) Yi(r, 1, i), Ce(r, i)
              else if (typeof n.componentDidCatch == 'function' && (Ke === null || !Ke.has(n)))
                try {
                  n.componentDidCatch(t, e)
                } catch (o) {}
              break
            }
          }
          r = r.return
        }
    }
    function ag(e, t, r) {
      var n = e.pingCache
      n !== null && n.delete(t),
        (t = Se()),
        (e.pingedLanes |= e.suspendedLanes & r),
        pe === e &&
          (ce & r) === r &&
          (ie === 4 || (ie === 3 && (ce & 62914560) === ce && 500 > ue() - Ou) ? Xr(e, 0) : (ku |= r)),
        Ce(e, t)
    }
    function sg(e, t) {
      var r = e.stateNode
      r !== null && r.delete(t),
        (t = 0),
        t === 0 &&
          ((t = e.mode),
          (t & 2) == 0
            ? (t = 1)
            : (t & 4) == 0
            ? (t = zr() === 99 ? 1 : 2)
            : (lt === 0 && (lt = $r), (t = Nr(62914560 & ~lt)), t === 0 && (t = 4194304))),
        (r = Se()),
        (e = Fo(e, t)),
        e !== null && (Yi(e, t, r), Ce(e, r))
    }
    var Yp
    Yp = function (e, t, r) {
      var n = t.lanes
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || he.current) Fe = !0
        else if ((r & n) != 0) Fe = (e.flags & 16384) != 0
        else {
          switch (((Fe = !1), t.tag)) {
            case 3:
              _p(t), iu()
              break
            case 5:
              ep(t)
              break
            case 1:
              ve(t.type) && lo(t)
              break
            case 4:
              tu(t, t.stateNode.containerInfo)
              break
            case 10:
              n = t.memoizedProps.value
              var i = t.type._context
              q(po, i._currentValue), (i._currentValue = n)
              break
            case 13:
              if (t.memoizedState !== null)
                return (r & t.child.childLanes) != 0
                  ? Sp(e, t, r)
                  : (q($, $.current & 1), (t = st(e, t, r)), t !== null ? t.sibling : null)
              q($, $.current & 1)
              break
            case 19:
              if (((n = (r & t.childLanes) != 0), (e.flags & 64) != 0)) {
                if (n) return Tp(e, t, r)
                t.flags |= 64
              }
              if (
                ((i = t.memoizedState),
                i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
                q($, $.current),
                n)
              )
                break
              return null
            case 23:
            case 24:
              return (t.lanes = 0), pu(e, t, r)
          }
          return st(e, t, r)
        }
      else Fe = !1
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          if (
            ((n = t.type),
            e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (e = t.pendingProps),
            (i = Hr(t, se.current)),
            Wr(t, r),
            (i = su(null, t, n, e, i, r)),
            (t.flags |= 1),
            typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0)
          ) {
            if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), ve(n))) {
              var o = !0
              lo(t)
            } else o = !1
            ;(t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null), Zs(t)
            var a = n.getDerivedStateFromProps
            typeof a == 'function' && vo(t, n, a, e),
              (i.updater = go),
              (t.stateNode = i),
              (i._reactInternals = t),
              eu(t, n, e, r),
              (t = mu(null, t, n, !0, o, r))
          } else (t.tag = 0), ye(null, t, i, r), (t = t.child)
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
              (o = t.tag = lg(i)),
              (e = je(i, e)),
              o)
            ) {
              case 0:
                t = du(null, t, i, e, r)
                break e
              case 1:
                t = yp(null, t, i, e, r)
                break e
              case 11:
                t = mp(null, t, i, e, r)
                break e
              case 14:
                t = hp(null, t, i, je(i.type, e), n, r)
                break e
            }
            throw Error(x(306, i, ''))
          }
          return t
        case 0:
          return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : je(n, i)), du(e, t, n, i, r)
        case 1:
          return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : je(n, i)), yp(e, t, n, i, r)
        case 3:
          if ((_p(t), (n = t.updateQueue), e === null || n === null)) throw Error(x(282))
          if (
            ((n = t.pendingProps),
            (i = t.memoizedState),
            (i = i !== null ? i.element : null),
            qf(e, t),
            Gn(t, n, null, r),
            (n = t.memoizedState.element),
            n === i)
          )
            iu(), (t = st(e, t, r))
          else {
            if (
              ((i = t.stateNode),
              (o = i.hydrate) && ((Mt = Dr(t.stateNode.containerInfo.firstChild)), (at = t), (o = Ge = !0)),
              o)
            ) {
              if (((e = i.mutableSourceEagerHydrationData), e != null))
                for (i = 0; i < e.length; i += 2) (o = e[i]), (o._workInProgressVersionPrimary = e[i + 1]), qr.push(o)
              for (r = Zf(t, null, n, r), t.child = r; r; ) (r.flags = (r.flags & -3) | 1024), (r = r.sibling)
            } else ye(e, t, n, r), iu()
            t = t.child
          }
          return t
        case 5:
          return (
            ep(t),
            e === null && nu(t),
            (n = t.type),
            (i = t.pendingProps),
            (o = e !== null ? e.memoizedProps : null),
            (a = i.children),
            zs(n, i) ? (a = null) : o !== null && zs(n, o) && (t.flags |= 16),
            gp(e, t),
            ye(e, t, a, r),
            t.child
          )
        case 6:
          return e === null && nu(t), null
        case 13:
          return Sp(e, t, r)
        case 4:
          return (
            tu(t, t.stateNode.containerInfo),
            (n = t.pendingProps),
            e === null ? (t.child = So(t, null, n, r)) : ye(e, t, n, r),
            t.child
          )
        case 11:
          return (n = t.type), (i = t.pendingProps), (i = t.elementType === n ? i : je(n, i)), mp(e, t, n, i, r)
        case 7:
          return ye(e, t, t.pendingProps, r), t.child
        case 8:
          return ye(e, t, t.pendingProps.children, r), t.child
        case 12:
          return ye(e, t, t.pendingProps.children, r), t.child
        case 10:
          e: {
            ;(n = t.type._context), (i = t.pendingProps), (a = t.memoizedProps), (o = i.value)
            var s = t.type._context
            if ((q(po, s._currentValue), (s._currentValue = o), a !== null))
              if (
                ((s = a.value),
                (o = Te(s, o)
                  ? 0
                  : (typeof n._calculateChangedBits == 'function' ? n._calculateChangedBits(s, o) : 1073741823) | 0),
                o === 0)
              ) {
                if (a.children === i.children && !he.current) {
                  t = st(e, t, r)
                  break e
                }
              } else
                for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                  var u = s.dependencies
                  if (u !== null) {
                    a = s.child
                    for (var l = u.firstContext; l !== null; ) {
                      if (l.context === n && (l.observedBits & o) != 0) {
                        s.tag === 1 && ((l = Nt(-1, r & -r)), (l.tag = 2), Pt(s, l)),
                          (s.lanes |= r),
                          (l = s.alternate),
                          l !== null && (l.lanes |= r),
                          Vf(s.return, r),
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
            ye(e, t, i.children, r), (t = t.child)
          }
          return t
        case 9:
          return (
            (i = t.type),
            (o = t.pendingProps),
            (n = o.children),
            Wr(t, r),
            (i = Oe(i, o.unstable_observedBits)),
            (n = n(i)),
            (t.flags |= 1),
            ye(e, t, n, r),
            t.child
          )
        case 14:
          return (i = t.type), (o = je(i, t.pendingProps)), (o = je(i.type, o)), hp(e, t, i, o, n, r)
        case 15:
          return vp(e, t, t.type, t.pendingProps, n, r)
        case 17:
          return (
            (n = t.type),
            (i = t.pendingProps),
            (i = t.elementType === n ? i : je(n, i)),
            e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (t.tag = 1),
            ve(n) ? ((e = !0), lo(t)) : (e = !1),
            Wr(t, r),
            Xf(t, n, i),
            eu(t, n, i, r),
            mu(null, t, n, !0, e, r)
          )
        case 19:
          return Tp(e, t, r)
        case 23:
          return pu(e, t, r)
        case 24:
          return pu(e, t, r)
      }
      throw Error(x(156, t.tag))
    }
    function ug(e, t, r, n) {
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
    function be(e, t, r, n) {
      return new ug(e, t, r, n)
    }
    function ju(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent)
    }
    function lg(e) {
      if (typeof e == 'function') return ju(e) ? 1 : 0
      if (e != null) {
        if (((e = e.$$typeof), e === Fi)) return 11
        if (e === Li) return 14
      }
      return 2
    }
    function Ut(e, t) {
      var r = e.alternate
      return (
        r === null
          ? ((r = be(e.tag, t, e.key, e.mode)),
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
    function Lo(e, t, r, n, i, o) {
      var a = 2
      if (((n = e), typeof e == 'function')) ju(e) && (a = 1)
      else if (typeof e == 'string') a = 5
      else
        e: switch (e) {
          case St:
            return Qr(r.children, i, o, t)
          case mc:
            ;(a = 8), (i |= 16)
            break
          case qa:
            ;(a = 8), (i |= 1)
            break
          case En:
            return (e = be(12, r, t, i | 8)), (e.elementType = En), (e.type = En), (e.lanes = o), e
          case xn:
            return (e = be(13, r, t, i)), (e.type = xn), (e.elementType = xn), (e.lanes = o), e
          case Di:
            return (e = be(19, r, t, i)), (e.elementType = Di), (e.lanes = o), e
          case Qa:
            return Fu(r, i, o, t)
          case Ja:
            return (e = be(24, r, t, i)), (e.elementType = Ja), (e.lanes = o), e
          default:
            if (typeof e == 'object' && e !== null)
              switch (e.$$typeof) {
                case $a:
                  a = 10
                  break e
                case Ga:
                  a = 9
                  break e
                case Fi:
                  a = 11
                  break e
                case Li:
                  a = 14
                  break e
                case Ya:
                  ;(a = 16), (n = null)
                  break e
                case Ka:
                  a = 22
                  break e
              }
            throw Error(x(130, e == null ? e : typeof e, ''))
        }
      return (t = be(a, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
    }
    function Qr(e, t, r, n) {
      return (e = be(7, e, n, t)), (e.lanes = r), e
    }
    function Fu(e, t, r, n) {
      return (e = be(23, e, n, t)), (e.elementType = Qa), (e.lanes = r), e
    }
    function Du(e, t, r) {
      return (e = be(6, e, null, t)), (e.lanes = r), e
    }
    function Lu(e, t, r) {
      return (
        (t = be(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = r),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
      )
    }
    function cg(e, t, r) {
      ;(this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = r),
        (this.callbackNode = null),
        (this.callbackPriority = 0),
        (this.eventTimes = ks(0)),
        (this.expirationTimes = ks(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = ks(0)),
        (this.mutableSourceEagerHydrationData = null)
    }
    function fg(e, t, r) {
      var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
      return { $$typeof: Qt, key: n == null ? null : '' + n, children: e, containerInfo: t, implementation: r }
    }
    function Ao(e, t, r, n) {
      var i = t.current,
        o = Se(),
        a = Ft(i)
      e: if (r) {
        r = r._reactInternals
        t: {
          if (Zt(r) !== r || r.tag !== 1) throw Error(x(170))
          var s = r
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context
                break t
              case 1:
                if (ve(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext
                  break t
                }
            }
            s = s.return
          } while (s !== null)
          throw Error(x(171))
        }
        if (r.tag === 1) {
          var u = r.type
          if (ve(u)) {
            r = jf(r, u, s)
            break e
          }
        }
        r = s
      } else r = bt
      return (
        t.context === null ? (t.context = r) : (t.pendingContext = r),
        (t = Nt(o, a)),
        (t.payload = { element: e }),
        (n = n === void 0 ? null : n),
        n !== null && (t.callback = n),
        Pt(i, t),
        Dt(i, a, o),
        a
      )
    }
    function Au(e) {
      if (((e = e.current), !e.child)) return null
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode
        default:
          return e.child.stateNode
      }
    }
    function Kp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var r = e.retryLane
        e.retryLane = r !== 0 && r < t ? r : t
      }
    }
    function Uu(e, t) {
      Kp(e, t), (e = e.alternate) && Kp(e, t)
    }
    function pg() {
      return null
    }
    function Hu(e, t, r) {
      var n = (r != null && r.hydrationOptions != null && r.hydrationOptions.mutableSources) || null
      if (
        ((r = new cg(e, t, r != null && r.hydrate === !0)),
        (t = be(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
        (r.current = t),
        (t.stateNode = r),
        Zs(t),
        (e[Lr] = r.current),
        xf(e.nodeType === 8 ? e.parentNode : e),
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
    Hu.prototype.render = function (e) {
      Ao(e, this._internalRoot, null, null)
    }
    Hu.prototype.unmount = function () {
      var e = this._internalRoot,
        t = e.containerInfo
      Ao(null, e, null, function () {
        t[Lr] = null
      })
    }
    function fi(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
      )
    }
    function dg(e, t) {
      if (
        (t ||
          ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
          (t = !(!t || t.nodeType !== 1 || !t.hasAttribute('data-reactroot')))),
        !t)
      )
        for (var r; (r = e.lastChild); ) e.removeChild(r)
      return new Hu(e, 0, t ? { hydrate: !0 } : void 0)
    }
    function Uo(e, t, r, n, i) {
      var o = r._reactRootContainer
      if (o) {
        var a = o._internalRoot
        if (typeof i == 'function') {
          var s = i
          i = function () {
            var l = Au(a)
            s.call(l)
          }
        }
        Ao(t, a, e, i)
      } else {
        if (((o = r._reactRootContainer = dg(r, n)), (a = o._internalRoot), typeof i == 'function')) {
          var u = i
          i = function () {
            var l = Au(a)
            u.call(l)
          }
        }
        zp(function () {
          Ao(t, a, e, i)
        })
      }
      return Au(a)
    }
    Lc = function (e) {
      if (e.tag === 13) {
        var t = Se()
        Dt(e, 4, t), Uu(e, 4)
      }
    }
    ys = function (e) {
      if (e.tag === 13) {
        var t = Se()
        Dt(e, 67108864, t), Uu(e, 67108864)
      }
    }
    Ac = function (e) {
      if (e.tag === 13) {
        var t = Se(),
          r = Ft(e)
        Dt(e, r, t), Uu(e, r)
      }
    }
    Uc = function (e, t) {
      return t()
    }
    fs = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((rs(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode
            for (
              r = r.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
              t < r.length;
              t++
            ) {
              var n = r[t]
              if (n !== e && n.form === e.form) {
                var i = so(n)
                if (!i) throw Error(x(90))
                gc(n), rs(n, i)
              }
            }
          }
          break
        case 'textarea':
          Ec(e, r)
          break
        case 'select':
          ;(t = r.value), t != null && Tr(e, !!r.multiple, t, !1)
      }
    }
    ps = Hp
    Nc = function (e, t, r, n, i) {
      var o = C
      C |= 4
      try {
        return nr(98, e.bind(null, t, r, n, i))
      } finally {
        ;(C = o), C === 0 && (Yr(), qe())
      }
    }
    ds = function () {
      ;(C & 49) == 0 && (Zv(), Lt())
    }
    Pc = function (e, t) {
      var r = C
      C |= 2
      try {
        return e(t)
      } finally {
        ;(C = r), C === 0 && (Yr(), qe())
      }
    }
    function Xp(e, t) {
      var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!fi(t)) throw Error(x(200))
      return fg(e, t, null, r)
    }
    var mg = { Events: [qn, Ar, so, bc, Rc, Lt, { current: !1 }] },
      pi = { findFiberByHostInstance: er, bundleType: 0, version: '17.0.2', rendererPackageName: 'react-dom' },
      hg = {
        bundleType: pi.bundleType,
        version: pi.version,
        rendererPackageName: pi.rendererPackageName,
        rendererConfig: pi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return (e = Fc(e)), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: pi.findFiberByHostInstance || pg,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
      }
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined' &&
      ((di = __REACT_DEVTOOLS_GLOBAL_HOOK__), !di.isDisabled && di.supportsFiber)
    )
      try {
        ;(qs = di.inject(hg)), (rr = di)
      } catch (e) {}
    var di
    Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mg
    Re.createPortal = Xp
    Re.findDOMNode = function (e) {
      if (e == null) return null
      if (e.nodeType === 1) return e
      var t = e._reactInternals
      if (t === void 0) throw typeof e.render == 'function' ? Error(x(188)) : Error(x(268, Object.keys(e)))
      return (e = Fc(t)), (e = e === null ? null : e.stateNode), e
    }
    Re.flushSync = function (e, t) {
      var r = C
      if ((r & 48) != 0) return e(t)
      C |= 1
      try {
        if (e) return nr(99, e.bind(null, t))
      } finally {
        ;(C = r), qe()
      }
    }
    Re.hydrate = function (e, t, r) {
      if (!fi(t)) throw Error(x(200))
      return Uo(null, e, t, !0, r)
    }
    Re.render = function (e, t, r) {
      if (!fi(t)) throw Error(x(200))
      return Uo(null, e, t, !1, r)
    }
    Re.unmountComponentAtNode = function (e) {
      if (!fi(e)) throw Error(x(40))
      return e._reactRootContainer
        ? (zp(function () {
            Uo(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[Lr] = null)
            })
          }),
          !0)
        : !1
    }
    Re.unstable_batchedUpdates = Hp
    Re.unstable_createPortal = function (e, t) {
      return Xp(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null)
    }
    Re.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
      if (!fi(r)) throw Error(x(200))
      if (e == null || e._reactInternals === void 0) throw Error(x(38))
      return Uo(e, t, r, !1, n)
    }
    Re.version = '17.0.2'
  })
  var ed = Pe((g_, Zp) => {
    'use strict'
    function Jp() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)
        } catch (e) {
          console.error(e)
        }
    }
    Jp(), (Zp.exports = Qp())
  })
  var wd = Pe((y_, zo) => {
    var td, rd, nd, id, od, ad, sd, ud, ld, Ho, zu, cd, fd, Jr, pd, dd, md, hd, vd, gd, yd, _d, Sd
    ;(function (e) {
      var t = typeof global == 'object' ? global : typeof self == 'object' ? self : typeof this == 'object' ? this : {}
      typeof define == 'function' && define.amd
        ? define('tslib', ['exports'], function (n) {
            e(r(t, r(n)))
          })
        : typeof zo == 'object' && typeof zo.exports == 'object'
        ? e(r(t, r(zo.exports)))
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
      ;(td = function (r, n) {
        t(r, n)
        function i() {
          this.constructor = r
        }
        r.prototype = n === null ? Object.create(n) : ((i.prototype = n.prototype), new i())
      }),
        (rd =
          Object.assign ||
          function (r) {
            for (var n, i = 1, o = arguments.length; i < o; i++) {
              n = arguments[i]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a])
            }
            return r
          }),
        (nd = function (r, n) {
          var i = {}
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && n.indexOf(o) < 0 && (i[o] = r[o])
          if (r != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var a = 0, o = Object.getOwnPropertySymbols(r); a < o.length; a++)
              n.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(r, o[a]) && (i[o[a]] = r[o[a]])
          return i
        }),
        (id = function (r, n, i, o) {
          var a = arguments.length,
            s = a < 3 ? n : o === null ? (o = Object.getOwnPropertyDescriptor(n, i)) : o,
            u
          if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') s = Reflect.decorate(r, n, i, o)
          else
            for (var l = r.length - 1; l >= 0; l--)
              (u = r[l]) && (s = (a < 3 ? u(s) : a > 3 ? u(n, i, s) : u(n, i)) || s)
          return a > 3 && s && Object.defineProperty(n, i, s), s
        }),
        (od = function (r, n) {
          return function (i, o) {
            n(i, o, r)
          }
        }),
        (ad = function (r, n) {
          if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function') return Reflect.metadata(r, n)
        }),
        (sd = function (r, n, i, o) {
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
        (ud = function (r, n) {
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
        (Sd = function (r, n, i, o) {
          o === void 0 && (o = i), (r[o] = n[i])
        }),
        (ld = function (r, n) {
          for (var i in r) i !== 'default' && !n.hasOwnProperty(i) && (n[i] = r[i])
        }),
        (Ho = function (r) {
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
        (zu = function (r, n) {
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
        (cd = function () {
          for (var r = [], n = 0; n < arguments.length; n++) r = r.concat(zu(arguments[n]))
          return r
        }),
        (fd = function () {
          for (var r = 0, n = 0, i = arguments.length; n < i; n++) r += arguments[n].length
          for (var o = Array(r), a = 0, n = 0; n < i; n++)
            for (var s = arguments[n], u = 0, l = s.length; u < l; u++, a++) o[a] = s[u]
          return o
        }),
        (Jr = function (r) {
          return this instanceof Jr ? ((this.v = r), this) : new Jr(r)
        }),
        (pd = function (r, n, i) {
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
          function u(w) {
            o[w] &&
              (a[w] = function (E) {
                return new Promise(function (p, f) {
                  s.push([w, E, p, f]) > 1 || l(w, E)
                })
              })
          }
          function l(w, E) {
            try {
              c(o[w](E))
            } catch (p) {
              _(s[0][3], p)
            }
          }
          function c(w) {
            w.value instanceof Jr ? Promise.resolve(w.value.v).then(m, h) : _(s[0][2], w)
          }
          function m(w) {
            l('next', w)
          }
          function h(w) {
            l('throw', w)
          }
          function _(w, E) {
            w(E), s.shift(), s.length && l(s[0][0], s[0][1])
          }
        }),
        (dd = function (r) {
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
                  return (i = !i) ? { value: Jr(r[a](u)), done: a === 'return' } : s ? s(u) : u
                }
              : s
          }
        }),
        (md = function (r) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
          var n = r[Symbol.asyncIterator],
            i
          return n
            ? n.call(r)
            : ((r = typeof Ho == 'function' ? Ho(r) : r[Symbol.iterator]()),
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
        (hd = function (r, n) {
          return Object.defineProperty ? Object.defineProperty(r, 'raw', { value: n }) : (r.raw = n), r
        }),
        (vd = function (r) {
          if (r && r.__esModule) return r
          var n = {}
          if (r != null) for (var i in r) Object.hasOwnProperty.call(r, i) && (n[i] = r[i])
          return (n.default = r), n
        }),
        (gd = function (r) {
          return r && r.__esModule ? r : { default: r }
        }),
        (yd = function (r, n) {
          if (!n.has(r)) throw new TypeError('attempted to get private field on non-instance')
          return n.get(r)
        }),
        (_d = function (r, n, i) {
          if (!n.has(r)) throw new TypeError('attempted to set private field on non-instance')
          return n.set(r, i), i
        }),
        e('__extends', td),
        e('__assign', rd),
        e('__rest', nd),
        e('__decorate', id),
        e('__param', od),
        e('__metadata', ad),
        e('__awaiter', sd),
        e('__generator', ud),
        e('__exportStar', ld),
        e('__createBinding', Sd),
        e('__values', Ho),
        e('__read', zu),
        e('__spread', cd),
        e('__spreadArrays', fd),
        e('__await', Jr),
        e('__asyncGenerator', pd),
        e('__asyncDelegator', dd),
        e('__asyncValues', md),
        e('__makeTemplateObject', hd),
        e('__importStar', vd),
        e('__importDefault', gd),
        e('__classPrivateFieldGet', yd),
        e('__classPrivateFieldSet', _d)
    })
  })
  var cm = Pe((L) => {
    'use strict'
    var te = typeof Symbol == 'function' && Symbol.for,
      wl = te ? Symbol.for('react.element') : 60103,
      El = te ? Symbol.for('react.portal') : 60106,
      aa = te ? Symbol.for('react.fragment') : 60107,
      sa = te ? Symbol.for('react.strict_mode') : 60108,
      ua = te ? Symbol.for('react.profiler') : 60114,
      la = te ? Symbol.for('react.provider') : 60109,
      ca = te ? Symbol.for('react.context') : 60110,
      xl = te ? Symbol.for('react.async_mode') : 60111,
      fa = te ? Symbol.for('react.concurrent_mode') : 60111,
      pa = te ? Symbol.for('react.forward_ref') : 60112,
      da = te ? Symbol.for('react.suspense') : 60113,
      _y = te ? Symbol.for('react.suspense_list') : 60120,
      ma = te ? Symbol.for('react.memo') : 60115,
      ha = te ? Symbol.for('react.lazy') : 60116,
      Sy = te ? Symbol.for('react.block') : 60121,
      wy = te ? Symbol.for('react.fundamental') : 60117,
      Ey = te ? Symbol.for('react.responder') : 60118,
      xy = te ? Symbol.for('react.scope') : 60119
    function Ee(e) {
      if (typeof e == 'object' && e !== null) {
        var t = e.$$typeof
        switch (t) {
          case wl:
            switch (((e = e.type), e)) {
              case xl:
              case fa:
              case aa:
              case ua:
              case sa:
              case da:
                return e
              default:
                switch (((e = e && e.$$typeof), e)) {
                  case ca:
                  case pa:
                  case ha:
                  case ma:
                  case la:
                    return e
                  default:
                    return t
                }
            }
          case El:
            return t
        }
      }
    }
    function lm(e) {
      return Ee(e) === fa
    }
    L.AsyncMode = xl
    L.ConcurrentMode = fa
    L.ContextConsumer = ca
    L.ContextProvider = la
    L.Element = wl
    L.ForwardRef = pa
    L.Fragment = aa
    L.Lazy = ha
    L.Memo = ma
    L.Portal = El
    L.Profiler = ua
    L.StrictMode = sa
    L.Suspense = da
    L.isAsyncMode = function (e) {
      return lm(e) || Ee(e) === xl
    }
    L.isConcurrentMode = lm
    L.isContextConsumer = function (e) {
      return Ee(e) === ca
    }
    L.isContextProvider = function (e) {
      return Ee(e) === la
    }
    L.isElement = function (e) {
      return typeof e == 'object' && e !== null && e.$$typeof === wl
    }
    L.isForwardRef = function (e) {
      return Ee(e) === pa
    }
    L.isFragment = function (e) {
      return Ee(e) === aa
    }
    L.isLazy = function (e) {
      return Ee(e) === ha
    }
    L.isMemo = function (e) {
      return Ee(e) === ma
    }
    L.isPortal = function (e) {
      return Ee(e) === El
    }
    L.isProfiler = function (e) {
      return Ee(e) === ua
    }
    L.isStrictMode = function (e) {
      return Ee(e) === sa
    }
    L.isSuspense = function (e) {
      return Ee(e) === da
    }
    L.isValidElementType = function (e) {
      return (
        typeof e == 'string' ||
        typeof e == 'function' ||
        e === aa ||
        e === fa ||
        e === ua ||
        e === sa ||
        e === da ||
        e === _y ||
        (typeof e == 'object' &&
          e !== null &&
          (e.$$typeof === ha ||
            e.$$typeof === ma ||
            e.$$typeof === la ||
            e.$$typeof === ca ||
            e.$$typeof === pa ||
            e.$$typeof === wy ||
            e.$$typeof === Ey ||
            e.$$typeof === xy ||
            e.$$typeof === Sy))
      )
    }
    L.typeOf = Ee
  })
  var pm = Pe((BE, fm) => {
    'use strict'
    fm.exports = cm()
  })
  var _m = Pe((WE, ym) => {
    'use strict'
    var kl = pm(),
      ky = {
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
      Ty = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
      Oy = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
      dm = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
      Tl = {}
    Tl[kl.ForwardRef] = Oy
    Tl[kl.Memo] = dm
    function mm(e) {
      return kl.isMemo(e) ? dm : Tl[e.$$typeof] || ky
    }
    var Iy = Object.defineProperty,
      Cy = Object.getOwnPropertyNames,
      hm = Object.getOwnPropertySymbols,
      by = Object.getOwnPropertyDescriptor,
      Ry = Object.getPrototypeOf,
      vm = Object.prototype
    function gm(e, t, r) {
      if (typeof t != 'string') {
        if (vm) {
          var n = Ry(t)
          n && n !== vm && gm(e, n, r)
        }
        var i = Cy(t)
        hm && (i = i.concat(hm(t)))
        for (var o = mm(e), a = mm(t), s = 0; s < i.length; ++s) {
          var u = i[s]
          if (!Ty[u] && !(r && r[u]) && !(a && a[u]) && !(o && o[u])) {
            var l = by(t, u)
            try {
              Iy(e, u, l)
            } catch (c) {}
          }
        }
      }
      return e
    }
    ym.exports = gm
  })
  var wa = rt(yt()),
    eh = rt(ed())
  var Ed = rt(wd()),
    {
      __extends: oe,
      __assign: v,
      __rest: Bo,
      __decorate: __,
      __param: S_,
      __metadata: w_,
      __awaiter: E_,
      __generator: x_,
      __exportStar: k_,
      __createBinding: T_,
      __values: De,
      __read: Wo,
      __spread: b,
      __spreadArrays: O_,
      __await: I_,
      __asyncGenerator: C_,
      __asyncDelegator: b_,
      __asyncValues: R_,
      __makeTemplateObject: N_,
      __importStar: P_,
      __importDefault: M_,
      __classPrivateFieldGet: j_,
      __classPrivateFieldSet: F_,
    } = Ed.default
  var we
  ;(function (e) {
    ;(e.Ok = 'ok'), (e.Exited = 'exited'), (e.Crashed = 'crashed'), (e.Abnormal = 'abnormal')
  })(we || (we = {}))
  var Bu
  ;(function (e) {
    ;(e.Ok = 'ok'), (e.Errored = 'errored'), (e.Crashed = 'crashed')
  })(Bu || (Bu = {}))
  var de
  ;(function (e) {
    ;(e.Fatal = 'fatal'),
      (e.Error = 'error'),
      (e.Warning = 'warning'),
      (e.Log = 'log'),
      (e.Info = 'info'),
      (e.Debug = 'debug'),
      (e.Critical = 'critical')
  })(de || (de = {}))
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
  })(de || (de = {}))
  var Xe
  ;(function (e) {
    ;(e.Unknown = 'unknown'),
      (e.Skipped = 'skipped'),
      (e.Success = 'success'),
      (e.RateLimit = 'rate_limit'),
      (e.Invalid = 'invalid'),
      (e.Failed = 'failed')
  })(Xe || (Xe = {}))
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
  })(Xe || (Xe = {}))
  var Ht
  ;(function (e) {
    ;(e.Explicit = 'explicitly_set'),
      (e.Sampler = 'client_sampler'),
      (e.Rate = 'client_rate'),
      (e.Inheritance = 'inheritance')
  })(Ht || (Ht = {}))
  function Vo(e) {
    switch (Object.prototype.toString.call(e)) {
      case '[object Error]':
        return !0
      case '[object Exception]':
        return !0
      case '[object DOMException]':
        return !0
      default:
        return me(e, Error)
    }
  }
  function qo(e) {
    return Object.prototype.toString.call(e) === '[object ErrorEvent]'
  }
  function Wu(e) {
    return Object.prototype.toString.call(e) === '[object DOMError]'
  }
  function xd(e) {
    return Object.prototype.toString.call(e) === '[object DOMException]'
  }
  function Qe(e) {
    return Object.prototype.toString.call(e) === '[object String]'
  }
  function lr(e) {
    return e === null || (typeof e != 'object' && typeof e != 'function')
  }
  function Je(e) {
    return Object.prototype.toString.call(e) === '[object Object]'
  }
  function Zr(e) {
    return typeof Event != 'undefined' && me(e, Event)
  }
  function Vu(e) {
    return typeof Element != 'undefined' && me(e, Element)
  }
  function kd(e) {
    return Object.prototype.toString.call(e) === '[object RegExp]'
  }
  function Ze(e) {
    return Boolean(e && e.then && typeof e.then == 'function')
  }
  function Td(e) {
    return Je(e) && 'nativeEvent' in e && 'preventDefault' in e && 'stopPropagation' in e
  }
  function me(e, t) {
    try {
      return e instanceof t
    } catch (r) {
      return !1
    }
  }
  function ct(e, t) {
    try {
      for (
        var r = e, n = 5, i = 80, o = [], a = 0, s = 0, u = ' > ', l = u.length, c = void 0;
        r && a++ < n && ((c = vg(r, t)), !(c === 'html' || (a > 1 && s + o.length * l + c.length >= i)));

      )
        o.push(c), (s += c.length), (r = r.parentNode)
      return o.reverse().join(u)
    } catch (m) {
      return '<unknown>'
    }
  }
  function vg(e, t) {
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
    else if ((i.id && o.push('#' + i.id), (a = i.className), a && Qe(a)))
      for (s = a.split(/\s+/), c = 0; c < s.length; c++) o.push('.' + s[c])
    var h = ['type', 'name', 'title', 'alt']
    for (c = 0; c < h.length; c++) (u = h[c]), (l = i.getAttribute(u)), l && o.push('[' + u + '="' + l + '"]')
    return o.join('')
  }
  var Od = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? gg : yg)
  function gg(e, t) {
    return (e.__proto__ = t), e
  }
  function yg(e, t) {
    for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
    return e
  }
  var V = (function (e) {
    oe(t, e)
    function t(r) {
      var n = this.constructor,
        i = e.call(this, r) || this
      return (i.message = r), (i.name = n.prototype.constructor.name), Od(i, n.prototype), i
    }
    return t
  })(Error)
  var _g = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
    mi = 'Invalid Dsn',
    $o = (function () {
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
          var r = _g.exec(t)
          if (!r) throw new V(mi)
          var n = Wo(r.slice(1), 6),
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
            w = _.split('/')
          if ((w.length > 1 && ((h = w.slice(0, -1).join('/')), (_ = w.pop())), _)) {
            var E = _.match(/^\d+/)
            E && (_ = E[0])
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
              if (!t[r]) throw new V(mi + ': ' + r + ' missing')
            }),
            !this.projectId.match(/^\d+$/))
          )
            throw new V(mi + ': Invalid projectId ' + this.projectId)
          if (this.protocol !== 'http' && this.protocol !== 'https')
            throw new V(mi + ': Invalid protocol ' + this.protocol)
          if (this.port && isNaN(parseInt(this.port, 10))) throw new V(mi + ': Invalid port ' + this.port)
        }),
        e
      )
    })()
  function et() {
    return Object.prototype.toString.call(typeof process != 'undefined' ? process : 0) === '[object process]'
  }
  function tt(e, t) {
    return e.require(t)
  }
  function zt(e) {
    var t
    try {
      t = tt(module, e)
    } catch (n) {}
    try {
      var r = tt(module, 'process').cwd
      t = tt(module, r() + '/node_modules/' + e)
    } catch (n) {}
    return t
  }
  function cr(e, t) {
    return t === void 0 && (t = 0), typeof e != 'string' || t === 0 || e.length <= t ? e : e.substr(0, t) + '...'
  }
  function qu(e, t) {
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
  function fr(e, t) {
    return Qe(e) ? (kd(t) ? t.test(e) : typeof t == 'string' ? e.indexOf(t) !== -1 : !1) : !1
  }
  var Sg = {}
  function P() {
    return et() ? global : typeof window != 'undefined' ? window : typeof self != 'undefined' ? self : Sg
  }
  function Ne() {
    var e = P(),
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
  function Go(e) {
    if (!e) return {}
    var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)
    if (!t) return {}
    var r = t[6] || '',
      n = t[8] || ''
    return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + r + n }
  }
  function ft(e) {
    if (e.message) return e.message
    if (e.exception && e.exception.values && e.exception.values[0]) {
      var t = e.exception.values[0]
      return t.type && t.value ? t.type + ': ' + t.value : t.type || t.value || e.event_id || '<unknown>'
    }
    return e.event_id || '<unknown>'
  }
  function en(e) {
    var t = P(),
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
  function hi(e, t, r) {
    ;(e.exception = e.exception || {}),
      (e.exception.values = e.exception.values || []),
      (e.exception.values[0] = e.exception.values[0] || {}),
      (e.exception.values[0].value = e.exception.values[0].value || t || ''),
      (e.exception.values[0].type = e.exception.values[0].type || r || 'Error')
  }
  function pt(e, t) {
    t === void 0 && (t = {})
    try {
      ;(e.exception.values[0].mechanism = e.exception.values[0].mechanism || {}),
        Object.keys(t).forEach(function (r) {
          e.exception.values[0].mechanism[r] = t[r]
        })
    } catch (r) {}
  }
  function Id() {
    try {
      return document.location.href
    } catch (e) {
      return ''
    }
  }
  var wg =
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
  function Cd(e) {
    var t = e.match(wg) || [],
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
  var bd = 60 * 1e3
  function Rd(e, t) {
    if (!t) return bd
    var r = parseInt('' + t, 10)
    if (!isNaN(r)) return r * 1e3
    var n = Date.parse('' + t)
    return isNaN(n) ? bd : n - e
  }
  var pr = P(),
    $u = 'Sentry Logger ',
    Eg = (function () {
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
            en(function () {
              pr.console.log($u + '[Log]: ' + t.join(' '))
            })
        }),
        (e.prototype.warn = function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
          !this._enabled ||
            en(function () {
              pr.console.warn($u + '[Warn]: ' + t.join(' '))
            })
        }),
        (e.prototype.error = function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
          !this._enabled ||
            en(function () {
              pr.console.error($u + '[Error]: ' + t.join(' '))
            })
        }),
        e
      )
    })()
  pr.__SENTRY__ = pr.__SENTRY__ || {}
  var S = pr.__SENTRY__.logger || (pr.__SENTRY__.logger = new Eg())
  var Nd = (function () {
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
  var Gu = '<anonymous>'
  function Le(e) {
    try {
      return !e || typeof e != 'function' ? Gu : e.name || Gu
    } catch (t) {
      return Gu
    }
  }
  function B(e, t, r) {
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
  function Pd(e) {
    return Object.keys(e)
      .map(function (t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t])
      })
      .join('&')
  }
  function Md(e) {
    if (Vo(e)) {
      var t = e,
        r = { message: t.message, name: t.name, stack: t.stack }
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n])
      return r
    }
    if (Zr(e)) {
      var i = e,
        o = {}
      o.type = i.type
      try {
        o.target = Vu(i.target) ? ct(i.target) : Object.prototype.toString.call(i.target)
      } catch (a) {
        o.target = '<unknown>'
      }
      try {
        o.currentTarget = Vu(i.currentTarget) ? ct(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
      } catch (a) {
        o.currentTarget = '<unknown>'
      }
      typeof CustomEvent != 'undefined' && me(e, CustomEvent) && (o.detail = i.detail)
      for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (o[n] = i)
      return o
    }
    return e
  }
  function xg(e) {
    return ~-encodeURI(e).split(/%..|./).length
  }
  function kg(e) {
    return xg(JSON.stringify(e))
  }
  function Yu(e, t, r) {
    t === void 0 && (t = 3), r === void 0 && (r = 100 * 1024)
    var n = tn(e, t)
    return kg(n) > r ? Yu(e, t - 1, r) : n
  }
  function Tg(e) {
    var t = Object.prototype.toString.call(e)
    if (typeof e == 'string') return e
    if (t === '[object Object]') return '[Object]'
    if (t === '[object Array]') return '[Array]'
    var r = jd(e)
    return lr(r) ? r : t
  }
  function jd(e, t) {
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
      : Td(e)
      ? '[SyntheticEvent]'
      : typeof e == 'number' && e !== e
      ? '[NaN]'
      : e === void 0
      ? '[undefined]'
      : typeof e == 'function'
      ? '[Function: ' + Le(e) + ']'
      : typeof e == 'symbol'
      ? '[' + String(e) + ']'
      : typeof e == 'bigint'
      ? '[BigInt: ' + String(e) + ']'
      : e
  }
  function Fd(e, t, r, n) {
    if ((r === void 0 && (r = Infinity), n === void 0 && (n = new Nd()), r === 0)) return Tg(t)
    if (t != null && typeof t.toJSON == 'function') return t.toJSON()
    var i = jd(t, e)
    if (lr(i)) return i
    var o = Md(t),
      a = Array.isArray(t) ? [] : {}
    if (n.memoize(t)) return '[Circular ~]'
    for (var s in o) !Object.prototype.hasOwnProperty.call(o, s) || (a[s] = Fd(s, o[s], r - 1, n))
    return n.unmemoize(t), a
  }
  function tn(e, t) {
    try {
      return JSON.parse(
        JSON.stringify(e, function (r, n) {
          return Fd(r, n, t)
        })
      )
    } catch (r) {
      return '**non-serializable**'
    }
  }
  function Dd(e, t) {
    t === void 0 && (t = 40)
    var r = Object.keys(Md(e))
    if ((r.sort(), !r.length)) return '[object has no keys]'
    if (r[0].length >= t) return cr(r[0], t)
    for (var n = r.length; n > 0; n--) {
      var i = r.slice(0, n).join(', ')
      if (!(i.length > t)) return n === r.length ? i : cr(i, t)
    }
    return ''
  }
  function Ae(e) {
    var t, r
    if (Je(e)) {
      var n = e,
        i = {}
      try {
        for (var o = De(Object.keys(n)), a = o.next(); !a.done; a = o.next()) {
          var s = a.value
          typeof n[s] != 'undefined' && (i[s] = Ae(n[s]))
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
    return Array.isArray(e) ? e.map(Ae) : e
  }
  function Yo() {
    if (!('fetch' in P())) return !1
    try {
      return new Headers(), new Request(''), new Response(), !0
    } catch (e) {
      return !1
    }
  }
  function Ko(e) {
    return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  }
  function Ld() {
    if (!Yo()) return !1
    var e = P()
    if (Ko(e.fetch)) return !0
    var t = !1,
      r = e.document
    if (r && typeof r.createElement == 'function')
      try {
        var n = r.createElement('iframe')
        ;(n.hidden = !0),
          r.head.appendChild(n),
          n.contentWindow && n.contentWindow.fetch && (t = Ko(n.contentWindow.fetch)),
          r.head.removeChild(n)
      } catch (i) {
        S.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', i)
      }
    return t
  }
  function Ad() {
    if (!Yo()) return !1
    try {
      return new Request('_', { referrerPolicy: 'origin' }), !0
    } catch (e) {
      return !1
    }
  }
  function Ud() {
    var e = P(),
      t = e.chrome,
      r = t && t.app && t.app.runtime,
      n = 'history' in e && !!e.history.pushState && !!e.history.replaceState
    return !r && n
  }
  var W = P(),
    vi = {},
    Hd = {}
  function Og(e) {
    if (!Hd[e])
      switch (((Hd[e] = !0), e)) {
        case 'console':
          Ig()
          break
        case 'dom':
          Dg()
          break
        case 'xhr':
          Ng()
          break
        case 'fetch':
          Cg()
          break
        case 'history':
          Pg()
          break
        case 'error':
          Lg()
          break
        case 'unhandledrejection':
          Ag()
          break
        default:
          S.warn('unknown instrumentation type:', e)
      }
  }
  function J(e) {
    !e ||
      typeof e.type != 'string' ||
      typeof e.callback != 'function' ||
      ((vi[e.type] = vi[e.type] || []), vi[e.type].push(e.callback), Og(e.type))
  }
  function Ue(e, t) {
    var r, n
    if (!(!e || !vi[e]))
      try {
        for (var i = De(vi[e] || []), o = i.next(); !o.done; o = i.next()) {
          var a = o.value
          try {
            a(t)
          } catch (s) {
            S.error(
              `Error while triggering instrumentation handler.
Type: ` +
                e +
                `
Name: ` +
                Le(a) +
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
  function Ig() {
    'console' in W &&
      ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (e) {
        e in W.console &&
          B(W.console, e, function (t) {
            return function () {
              for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
              Ue('console', { args: r, level: e }), t && Function.prototype.apply.call(t, W.console, r)
            }
          })
      })
  }
  function Cg() {
    !Ld() ||
      B(W, 'fetch', function (e) {
        return function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
          var n = { args: t, fetchData: { method: bg(t), url: Rg(t) }, startTimestamp: Date.now() }
          return (
            Ue('fetch', v({}, n)),
            e.apply(W, t).then(
              function (i) {
                return Ue('fetch', v(v({}, n), { endTimestamp: Date.now(), response: i })), i
              },
              function (i) {
                throw (Ue('fetch', v(v({}, n), { endTimestamp: Date.now(), error: i })), i)
              }
            )
          )
        }
      })
  }
  function bg(e) {
    return (
      e === void 0 && (e = []),
      'Request' in W && me(e[0], Request) && e[0].method
        ? String(e[0].method).toUpperCase()
        : e[1] && e[1].method
        ? String(e[1].method).toUpperCase()
        : 'GET'
    )
  }
  function Rg(e) {
    return (
      e === void 0 && (e = []),
      typeof e[0] == 'string' ? e[0] : 'Request' in W && me(e[0], Request) ? e[0].url : String(e[0])
    )
  }
  function Ng() {
    if ('XMLHttpRequest' in W) {
      var e = [],
        t = [],
        r = XMLHttpRequest.prototype
      B(r, 'open', function (n) {
        return function () {
          for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o]
          var a = this,
            s = i[1]
          ;(a.__sentry_xhr__ = { method: Qe(i[0]) ? i[0].toUpperCase() : i[0], url: i[1] }),
            Qe(s) && a.__sentry_xhr__.method === 'POST' && s.match(/sentry_key/) && (a.__sentry_own_request__ = !0)
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
              Ue('xhr', { args: i, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: a })
            }
          }
          return (
            'onreadystatechange' in a && typeof a.onreadystatechange == 'function'
              ? B(a, 'onreadystatechange', function (l) {
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
        B(r, 'send', function (n) {
          return function () {
            for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o]
            return (
              e.push(this), t.push(i), Ue('xhr', { args: i, startTimestamp: Date.now(), xhr: this }), n.apply(this, i)
            )
          }
        })
    }
  }
  var Xo
  function Pg() {
    if (!Ud()) return
    var e = W.onpopstate
    W.onpopstate = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
      var i = W.location.href,
        o = Xo
      if (((Xo = i), Ue('history', { from: o, to: i }), e))
        try {
          return e.apply(this, r)
        } catch (a) {}
    }
    function t(r) {
      return function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
        var o = n.length > 2 ? n[2] : void 0
        if (o) {
          var a = Xo,
            s = String(o)
          ;(Xo = s), Ue('history', { from: a, to: s })
        }
        return r.apply(this, n)
      }
    }
    B(W.history, 'pushState', t), B(W.history, 'replaceState', t)
  }
  var Mg = 1e3,
    Qo,
    Jo
  function jg(e, t) {
    if (!e || e.type !== t.type) return !0
    try {
      if (e.target !== t.target) return !0
    } catch (r) {}
    return !1
  }
  function Fg(e) {
    if (e.type !== 'keypress') return !1
    try {
      var t = e.target
      if (!t || !t.tagName) return !0
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) return !1
    } catch (r) {}
    return !0
  }
  function zd(e, t) {
    return (
      t === void 0 && (t = !1),
      function (r) {
        if (!(!r || Jo === r) && !Fg(r)) {
          var n = r.type === 'keypress' ? 'input' : r.type
          Qo === void 0
            ? (e({ event: r, name: n, global: t }), (Jo = r))
            : jg(Jo, r) && (e({ event: r, name: n, global: t }), (Jo = r)),
            clearTimeout(Qo),
            (Qo = W.setTimeout(function () {
              Qo = void 0
            }, Mg))
        }
      }
    )
  }
  function Dg() {
    if ('document' in W) {
      var e = Ue.bind(null, 'dom'),
        t = zd(e, !0)
      W.document.addEventListener('click', t, !1),
        W.document.addEventListener('keypress', t, !1),
        ['EventTarget', 'Node'].forEach(function (r) {
          var n = W[r] && W[r].prototype
          !n ||
            !n.hasOwnProperty ||
            !n.hasOwnProperty('addEventListener') ||
            (B(n, 'addEventListener', function (i) {
              return function (o, a, s) {
                if (o === 'click' || o == 'keypress')
                  try {
                    var u = this,
                      l = (u.__sentry_instrumentation_handlers__ = u.__sentry_instrumentation_handlers__ || {}),
                      c = (l[o] = l[o] || { refCount: 0 })
                    if (!c.handler) {
                      var m = zd(e)
                      ;(c.handler = m), i.call(this, o, m, s)
                    }
                    c.refCount += 1
                  } catch (h) {}
                return i.call(this, o, a, s)
              }
            }),
            B(n, 'removeEventListener', function (i) {
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
  var Ku = null
  function Lg() {
    ;(Ku = W.onerror),
      (W.onerror = function (e, t, r, n, i) {
        return Ue('error', { column: n, error: i, line: r, msg: e, url: t }), Ku ? Ku.apply(this, arguments) : !1
      })
  }
  var Xu = null
  function Ag() {
    ;(Xu = W.onunhandledrejection),
      (W.onunhandledrejection = function (e) {
        return Ue('unhandledrejection', e), Xu ? Xu.apply(this, arguments) : !0
      })
  }
  var dt
  ;(function (e) {
    ;(e.PENDING = 'PENDING'), (e.RESOLVED = 'RESOLVED'), (e.REJECTED = 'REJECTED')
  })(dt || (dt = {}))
  var G = (function () {
    function e(t) {
      var r = this
      ;(this._state = dt.PENDING),
        (this._handlers = []),
        (this._resolve = function (n) {
          r._setResult(dt.RESOLVED, n)
        }),
        (this._reject = function (n) {
          r._setResult(dt.REJECTED, n)
        }),
        (this._setResult = function (n, i) {
          if (r._state === dt.PENDING) {
            if (Ze(i)) {
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
          if (r._state !== dt.PENDING) {
            var n = r._handlers.slice()
            ;(r._handlers = []),
              n.forEach(function (i) {
                i.done ||
                  (r._state === dt.RESOLVED && i.onfulfilled && i.onfulfilled(r._value),
                  r._state === dt.REJECTED && i.onrejected && i.onrejected(r._value),
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
  var Bd = (function () {
    function e(t) {
      ;(this._limit = t), (this._buffer = [])
    }
    return (
      (e.prototype.isReady = function () {
        return this._limit === void 0 || this.length() < this._limit
      }),
      (e.prototype.add = function (t) {
        var r = this
        if (!this.isReady()) return G.reject(new V('Not adding Promise due to buffer limit reached.'))
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
        return new G(function (n) {
          var i = setTimeout(function () {
            t && t > 0 && n(!1)
          }, t)
          G.all(r._buffer)
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
  var Qu = {
    nowSeconds: function () {
      return Date.now() / 1e3
    },
  }
  function Ug() {
    var e = P().performance
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
  function Hg() {
    try {
      var e = tt(module, 'perf_hooks')
      return e.performance
    } catch (t) {
      return
    }
  }
  var Ju = et() ? Hg() : Ug(),
    Wd =
      Ju === void 0
        ? Qu
        : {
            nowSeconds: function () {
              return (Ju.timeOrigin + Ju.now()) / 1e3
            },
          },
    rn = Qu.nowSeconds.bind(Qu),
    Zo = Wd.nowSeconds.bind(Wd),
    dr = Zo
  var ea,
    nn = (function () {
      var e = P().performance
      if (!e || !e.now) {
        ea = 'none'
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
          ? ((ea = 'timeOrigin'), e.timeOrigin)
          : ((ea = 'navigationStart'), a)
        : ((ea = 'dateNow'), n)
    })()
  var Vd = 100,
    mt = (function () {
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
              ((r._breadcrumbs = b(t._breadcrumbs)),
              (r._tags = v({}, t._tags)),
              (r._extra = v({}, t._extra)),
              (r._contexts = v({}, t._contexts)),
              (r._user = t._user),
              (r._level = t._level),
              (r._span = t._span),
              (r._session = t._session),
              (r._transactionName = t._transactionName),
              (r._fingerprint = t._fingerprint),
              (r._eventProcessors = b(t._eventProcessors)),
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
          return (this._tags = v(v({}, this._tags), t)), this._notifyScopeListeners(), this
        }),
        (e.prototype.setTag = function (t, r) {
          var n
          return (this._tags = v(v({}, this._tags), ((n = {}), (n[t] = r), n))), this._notifyScopeListeners(), this
        }),
        (e.prototype.setExtras = function (t) {
          return (this._extra = v(v({}, this._extra), t)), this._notifyScopeListeners(), this
        }),
        (e.prototype.setExtra = function (t, r) {
          var n
          return (this._extra = v(v({}, this._extra), ((n = {}), (n[t] = r), n))), this._notifyScopeListeners(), this
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
              : (this._contexts = v(v({}, this._contexts), ((n = {}), (n[t] = r), n))),
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
              ? ((this._tags = v(v({}, this._tags), t._tags)),
                (this._extra = v(v({}, this._extra), t._extra)),
                (this._contexts = v(v({}, this._contexts), t._contexts)),
                t._user && Object.keys(t._user).length && (this._user = t._user),
                t._level && (this._level = t._level),
                t._fingerprint && (this._fingerprint = t._fingerprint),
                t._requestSession && (this._requestSession = t._requestSession))
              : Je(t) &&
                ((t = t),
                (this._tags = v(v({}, this._tags), t.tags)),
                (this._extra = v(v({}, this._extra), t.extra)),
                (this._contexts = v(v({}, this._contexts), t.contexts)),
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
          var n = typeof r == 'number' ? Math.min(r, Vd) : Vd
          if (n <= 0) return this
          var i = v({ timestamp: rn() }, t)
          return (this._breadcrumbs = b(this._breadcrumbs, [i]).slice(-n)), this._notifyScopeListeners(), this
        }),
        (e.prototype.clearBreadcrumbs = function () {
          return (this._breadcrumbs = []), this._notifyScopeListeners(), this
        }),
        (e.prototype.applyToEvent = function (t, r) {
          var n
          if (
            (this._extra && Object.keys(this._extra).length && (t.extra = v(v({}, this._extra), t.extra)),
            this._tags && Object.keys(this._tags).length && (t.tags = v(v({}, this._tags), t.tags)),
            this._user && Object.keys(this._user).length && (t.user = v(v({}, this._user), t.user)),
            this._contexts && Object.keys(this._contexts).length && (t.contexts = v(v({}, this._contexts), t.contexts)),
            this._level && (t.level = this._level),
            this._transactionName && (t.transaction = this._transactionName),
            this._span)
          ) {
            t.contexts = v({ trace: this._span.getTraceContext() }, t.contexts)
            var i = (n = this._span.transaction) === null || n === void 0 ? void 0 : n.name
            i && (t.tags = v({ transaction: i }, t.tags))
          }
          return (
            this._applyFingerprint(t),
            (t.breadcrumbs = b(t.breadcrumbs || [], this._breadcrumbs)),
            (t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0),
            this._notifyEventProcessors(b(qd(), this._eventProcessors), t, r)
          )
        }),
        (e.prototype._notifyEventProcessors = function (t, r, n, i) {
          var o = this
          return (
            i === void 0 && (i = 0),
            new G(function (a, s) {
              var u = t[i]
              if (r === null || typeof u != 'function') a(r)
              else {
                var l = u(v({}, r), n)
                Ze(l)
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
  function qd() {
    var e = P()
    return (
      (e.__SENTRY__ = e.__SENTRY__ || {}),
      (e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || []),
      e.__SENTRY__.globalEventProcessors
    )
  }
  function He(e) {
    qd().push(e)
  }
  var $d = (function () {
    function e(t) {
      ;(this.errors = 0),
        (this.sid = Ne()),
        (this.duration = 0),
        (this.status = we.Ok),
        (this.init = !0),
        (this.ignoreDuration = !1)
      var r = Zo()
      ;(this.timestamp = r), (this.started = r), t && this.update(t)
    }
    return (
      (e.prototype.update = function (t) {
        if (
          (t === void 0 && (t = {}),
          t.user &&
            (!this.ipAddress && t.user.ip_address && (this.ipAddress = t.user.ip_address),
            !this.did && !t.did && (this.did = t.user.id || t.user.email || t.user.username)),
          (this.timestamp = t.timestamp || Zo()),
          t.ignoreDuration && (this.ignoreDuration = t.ignoreDuration),
          t.sid && (this.sid = t.sid.length === 32 ? t.sid : Ne()),
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
        t ? this.update({ status: t }) : this.status === we.Ok ? this.update({ status: we.Exited }) : this.update()
      }),
      (e.prototype.toJSON = function () {
        return Ae({
          sid: '' + this.sid,
          init: this.init,
          started: new Date(this.started * 1e3).toISOString(),
          timestamp: new Date(this.timestamp * 1e3).toISOString(),
          status: this.status,
          errors: this.errors,
          did: typeof this.did == 'number' || typeof this.did == 'string' ? '' + this.did : void 0,
          duration: this.duration,
          attrs: Ae({
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
  var Zu = 4,
    zg = 100,
    Bt = (function () {
      function e(t, r, n) {
        r === void 0 && (r = new mt()),
          n === void 0 && (n = Zu),
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
          var t = mt.clone(this.getScope())
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
          var n = (this._lastEventId = Ne()),
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
          return this._invokeClient('captureException', t, v(v({}, i), { event_id: n })), n
        }),
        (e.prototype.captureMessage = function (t, r, n) {
          var i = (this._lastEventId = Ne()),
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
          return this._invokeClient('captureMessage', t, r, v(v({}, o), { event_id: i })), i
        }),
        (e.prototype.captureEvent = function (t, r) {
          var n = (this._lastEventId = Ne())
          return this._invokeClient('captureEvent', t, v(v({}, r), { event_id: n })), n
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
              c = l === void 0 ? zg : l
            if (!(c <= 0)) {
              var m = rn(),
                h = v({ timestamp: m }, t),
                _ = u
                  ? en(function () {
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
          var r = gi(this)
          try {
            t(this)
          } finally {
            gi(r)
          }
        }),
        (e.prototype.getIntegration = function (t) {
          var r = this.getClient()
          if (!r) return null
          try {
            return r.getIntegration(t)
          } catch (n) {
            return S.warn('Cannot retrieve integration ' + t.id + ' from the current Hub'), null
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
            u = P(),
            l = (u.navigator || {}).userAgent,
            c = new $d(v(v(v({ release: a, environment: s }, n && { user: n.getUser() }), l && { userAgent: l }), t))
          if (n) {
            var m = n.getSession && n.getSession()
            m && m.status === we.Ok && m.update({ status: we.Exited }), this.endSession(), n.setSession(c)
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
          s && s[t] && (r = s)[t].apply(r, b(n, [a]))
        }),
        (e.prototype._callExtensionMethod = function (t) {
          for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n]
          var i = Wt(),
            o = i.__SENTRY__
          if (o && o.extensions && typeof o.extensions[t] == 'function') return o.extensions[t].apply(this, r)
          S.warn('Extension method ' + t + " couldn't be found, doing nothing.")
        }),
        e
      )
    })()
  function Wt() {
    var e = P()
    return (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e
  }
  function gi(e) {
    var t = Wt(),
      r = ze(t)
    return ta(t, e), r
  }
  function j() {
    var e = Wt()
    return (!Gd(e) || ze(e).isOlderThan(Zu)) && ta(e, new Bt()), et() ? Bg(e) : ze(e)
  }
  function Bg(e) {
    var t, r, n
    try {
      var i =
        (n =
          (r = (t = Wt().__SENTRY__) === null || t === void 0 ? void 0 : t.extensions) === null || r === void 0
            ? void 0
            : r.domain) === null || n === void 0
          ? void 0
          : n.active
      if (!i) return ze(e)
      if (!Gd(i) || ze(i).isOlderThan(Zu)) {
        var o = ze(e).getStackTop()
        ta(i, new Bt(o.client, mt.clone(o.scope)))
      }
      return ze(i)
    } catch (a) {
      return ze(e)
    }
  }
  function Gd(e) {
    return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
  }
  function ze(e) {
    return (
      (e && e.__SENTRY__ && e.__SENTRY__.hub) || ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new Bt())),
      e.__SENTRY__.hub
    )
  }
  function ta(e, t) {
    return e ? ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), !0) : !1
  }
  function el(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
    var n = j()
    if (n && n[e]) return n[e].apply(n, b(t))
    throw new Error('No hub defined or ' + e + ' was not found on the hub, please open a bug report.')
  }
  function on(e, t) {
    var r
    try {
      throw new Error('Sentry syntheticException')
    } catch (n) {
      r = n
    }
    return el('captureException', e, { captureContext: t, originalException: e, syntheticException: r })
  }
  function ra(e) {
    return el('captureEvent', e)
  }
  function an(e) {
    el('withScope', e)
  }
  var Yd = '7',
    yi = (function () {
      function e(t, r, n) {
        r === void 0 && (r = {}), (this.dsn = t), (this._dsnObject = new $o(t)), (this.metadata = r), (this._tunnel = n)
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
            i = ['Sentry sentry_version=' + Yd]
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
            r = { sentry_key: t.publicKey, sentry_version: Yd }
          return Pd(r)
        }),
        e
      )
    })()
  var Kd = []
  function Xd(e) {
    return e.reduce(function (t, r) {
      return (
        t.every(function (n) {
          return r.name !== n.name
        }) && t.push(r),
        t
      )
    }, [])
  }
  function Wg(e) {
    var t = (e.defaultIntegrations && b(e.defaultIntegrations)) || [],
      r = e.integrations,
      n = b(Xd(t))
    Array.isArray(r)
      ? (n = b(
          n.filter(function (a) {
            return r.every(function (s) {
              return s.name !== a.name
            })
          }),
          Xd(r)
        ))
      : typeof r == 'function' && ((n = r(n)), (n = Array.isArray(n) ? n : [n]))
    var i = n.map(function (a) {
        return a.name
      }),
      o = 'Debug'
    return i.indexOf(o) !== -1 && n.push.apply(n, b(n.splice(i.indexOf(o), 1))), n
  }
  function Vg(e) {
    Kd.indexOf(e.name) === -1 && (e.setupOnce(He, j), Kd.push(e.name), S.log('Integration installed: ' + e.name))
  }
  function Qd(e) {
    var t = {}
    return (
      Wg(e).forEach(function (r) {
        ;(t[r.name] = r), Vg(r)
      }),
      t
    )
  }
  var tl = (function () {
    function e(t, r) {
      ;(this._integrations = {}),
        (this._processing = 0),
        (this._backend = new t(r)),
        (this._options = r),
        r.dsn && (this._dsn = new $o(r.dsn))
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
          s = lr(t) ? this._getBackend().eventFromMessage(String(t), r, n) : this._getBackend().eventFromException(t, n)
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
          S.warn('SDK not enabled, will not capture session.')
          return
        }
        typeof t.release != 'string'
          ? S.warn('Discarded session because of missing or non-string release')
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
        this._isEnabled() && (this._integrations = Qd(this._options))
      }),
      (e.prototype.getIntegration = function (t) {
        try {
          return this._integrations[t.id] || null
        } catch (r) {
          return S.warn('Cannot retrieve integration ' + t.id + ' from the current Client'), null
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
            for (var u = De(s), l = u.next(); !l.done; l = u.next()) {
              var c = l.value,
                m = c.mechanism
              if (m && m.handled === !1) {
                o = !0
                break
              }
            }
          } catch (w) {
            n = { error: w }
          } finally {
            try {
              l && !l.done && (i = u.return) && i.call(u)
            } finally {
              if (n) throw n.error
            }
          }
        }
        var h = t.status === we.Ok,
          _ = (h && t.errors === 0) || (h && o)
        _ &&
          (t.update(v(v({}, o && { status: we.Crashed }), { errors: t.errors || Number(a || o) })),
          this.captureSession(t))
      }),
      (e.prototype._sendSession = function (t) {
        this._getBackend().sendSession(t)
      }),
      (e.prototype._isClientProcessing = function (t) {
        var r = this
        return new G(function (n) {
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
          s = v(v({}, t), {
            event_id: t.event_id || (n && n.event_id ? n.event_id : Ne()),
            timestamp: t.timestamp || rn(),
          })
        this._applyClientOptions(s), this._applyIntegrationsMetadata(s)
        var u = r
        n && n.captureContext && (u = mt.clone(u).update(n.captureContext))
        var l = G.resolve(s)
        return (
          u && (l = u.applyToEvent(s, n)),
          l.then(function (c) {
            return typeof a == 'number' && a > 0 ? i._normalizeEvent(c, a) : c
          })
        )
      }),
      (e.prototype._normalizeEvent = function (t, r) {
        if (!t) return null
        var n = v(
          v(
            v(
              v(
                v({}, t),
                t.breadcrumbs && {
                  breadcrumbs: t.breadcrumbs.map(function (i) {
                    return v(v({}, i), i.data && { data: tn(i.data, r) })
                  }),
                }
              ),
              t.user && { user: tn(t.user, r) }
            ),
            t.contexts && { contexts: tn(t.contexts, r) }
          ),
          t.extra && { extra: tn(t.extra, r) }
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
          t.message && (t.message = cr(t.message, s))
        var u = t.exception && t.exception.values && t.exception.values[0]
        u && u.value && (u.value = cr(u.value, s))
        var l = t.request
        l && l.url && (l.url = cr(l.url, s))
      }),
      (e.prototype._applyIntegrationsMetadata = function (t) {
        var r = Object.keys(this._integrations)
        r.length > 0 && ((t.sdk = t.sdk || {}), (t.sdk.integrations = b(t.sdk.integrations || [], r)))
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
            S.error(i)
          }
        )
      }),
      (e.prototype._processEvent = function (t, r, n) {
        var i = this,
          o = this.getOptions(),
          a = o.beforeSend,
          s = o.sampleRate
        if (!this._isEnabled()) return G.reject(new V('SDK not enabled, will not capture event.'))
        var u = t.type === 'transaction'
        return !u && typeof s == 'number' && Math.random() > s
          ? G.reject(
              new V("Discarding event because it's not included in the random sample (sampling rate = " + s + ')')
            )
          : this._prepareEvent(t, n, r)
              .then(function (l) {
                if (l === null) throw new V('An event processor returned null, will not send event.')
                var c = r && r.data && r.data.__sentry__ === !0
                if (c || u || !a) return l
                var m = a(l, r)
                return i._ensureBeforeSendRv(m)
              })
              .then(function (l) {
                if (l === null) throw new V('`beforeSend` returned `null`, will not send event.')
                var c = n && n.getSession && n.getSession()
                return !u && c && i._updateSessionFromEvent(c, l), i._sendEvent(l), l
              })
              .then(null, function (l) {
                throw l instanceof V
                  ? l
                  : (i.captureException(l, { data: { __sentry__: !0 }, originalException: l }),
                    new V(
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
        if (Ze(t))
          return t.then(
            function (n) {
              if (!(Je(n) || n === null)) throw new V(r)
              return n
            },
            function (n) {
              throw new V('beforeSend rejected with ' + n)
            }
          )
        if (!(Je(t) || t === null)) throw new V(r)
        return t
      }),
      e
    )
  })()
  var Jd = (function () {
    function e() {}
    return (
      (e.prototype.sendEvent = function (t) {
        return G.resolve({
          reason: 'NoopTransport: Event has been skipped because no Dsn is configured.',
          status: Xe.Skipped,
        })
      }),
      (e.prototype.close = function (t) {
        return G.resolve(!0)
      }),
      e
    )
  })()
  var rl = (function () {
    function e(t) {
      ;(this._options = t),
        this._options.dsn || S.warn('No DSN provided, backend will not do anything.'),
        (this._transport = this._setupTransport())
    }
    return (
      (e.prototype.eventFromException = function (t, r) {
        throw new V('Backend has to implement `eventFromException` method')
      }),
      (e.prototype.eventFromMessage = function (t, r, n) {
        throw new V('Backend has to implement `eventFromMessage` method')
      }),
      (e.prototype.sendEvent = function (t) {
        this._transport.sendEvent(t).then(null, function (r) {
          S.error('Error while sending event: ' + r)
        })
      }),
      (e.prototype.sendSession = function (t) {
        if (!this._transport.sendSession) {
          S.warn("Dropping session because custom transport doesn't implement sendSession")
          return
        }
        this._transport.sendSession(t).then(null, function (r) {
          S.error('Error while sending session: ' + r)
        })
      }),
      (e.prototype.getTransport = function () {
        return this._transport
      }),
      (e.prototype._setupTransport = function () {
        return new Jd()
      }),
      e
    )
  })()
  function Zd(e) {
    if (!(!e.metadata || !e.metadata.sdk)) {
      var t = e.metadata.sdk,
        r = t.name,
        n = t.version
      return { name: r, version: n }
    }
  }
  function qg(e, t) {
    return (
      t &&
        ((e.sdk = e.sdk || {}),
        (e.sdk.name = e.sdk.name || t.name),
        (e.sdk.version = e.sdk.version || t.version),
        (e.sdk.integrations = b(e.sdk.integrations || [], t.integrations || [])),
        (e.sdk.packages = b(e.sdk.packages || [], t.packages || []))),
      e
    )
  }
  function _i(e, t) {
    var r = Zd(t),
      n = JSON.stringify(
        v(
          v({ sent_at: new Date().toISOString() }, r && { sdk: r }),
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
  function Si(e, t) {
    var r = Zd(t),
      n = e.type || 'event',
      i = n === 'transaction' || t.forceEnvelope(),
      o = e.debug_meta || {},
      a = o.transactionSampling,
      s = Bo(o, ['transactionSampling']),
      u = a || {},
      l = u.method,
      c = u.rate
    Object.keys(s).length === 0 ? delete e.debug_meta : (e.debug_meta = s)
    var m = {
      body: JSON.stringify(r ? qg(e, t.metadata.sdk) : e),
      type: n,
      url: i ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth(),
    }
    if (i) {
      var h = JSON.stringify(
          v(
            v({ event_id: e.event_id, sent_at: new Date().toISOString() }, r && { sdk: r }),
            t.forceEnvelope() && { dsn: t.getDsn().toString() }
          )
        ),
        _ = JSON.stringify({ type: n, sample_rates: [{ id: l, rate: c }] }),
        w =
          h +
          `
` +
          _ +
          `
` +
          m.body
      m.body = w
    }
    return m
  }
  function nl(e, t) {
    var r
    t.debug === !0 && S.enable()
    var n = j()
    ;(r = n.getScope()) === null || r === void 0 || r.update(t.initialScope)
    var i = new e(t)
    n.bindClient(i)
  }
  var Vt = '6.8.0'
  var wi = {}
  Dl(wi, { FunctionToString: () => tm, InboundFilters: () => rm })
  var em,
    tm = (function () {
      function e() {
        this.name = e.id
      }
      return (
        (e.prototype.setupOnce = function () {
          ;(em = Function.prototype.toString),
            (Function.prototype.toString = function () {
              for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
              var n = this.__sentry_original__ || this
              return em.apply(n, t)
            })
        }),
        (e.id = 'FunctionToString'),
        e
      )
    })()
  var $g = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
    rm = (function () {
      function e(t) {
        t === void 0 && (t = {}), (this._options = t), (this.name = e.id)
      }
      return (
        (e.prototype.setupOnce = function () {
          He(function (t) {
            var r = j()
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
            ? (S.warn(
                `Event dropped due to being internal Sentry Error.
Event: ` + ft(t)
              ),
              !0)
            : this._isIgnoredError(t, r)
            ? (S.warn('Event dropped due to being matched by `ignoreErrors` option.\nEvent: ' + ft(t)), !0)
            : this._isDeniedUrl(t, r)
            ? (S.warn(
                'Event dropped due to being matched by `denyUrls` option.\nEvent: ' +
                  ft(t) +
                  `.
Url: ` +
                  this._getEventFilterUrl(t)
              ),
              !0)
            : this._isAllowedUrl(t, r)
            ? !1
            : (S.warn(
                'Event dropped due to not being matched by `allowUrls` option.\nEvent: ' +
                  ft(t) +
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
                  return fr(n, i)
                })
              })
        }),
        (e.prototype._isDeniedUrl = function (t, r) {
          if (!r.denyUrls || !r.denyUrls.length) return !1
          var n = this._getEventFilterUrl(t)
          return n
            ? r.denyUrls.some(function (i) {
                return fr(n, i)
              })
            : !1
        }),
        (e.prototype._isAllowedUrl = function (t, r) {
          if (!r.allowUrls || !r.allowUrls.length) return !0
          var n = this._getEventFilterUrl(t)
          return n
            ? r.allowUrls.some(function (i) {
                return fr(n, i)
              })
            : !0
        }),
        (e.prototype._mergeOptions = function (t) {
          return (
            t === void 0 && (t = {}),
            {
              allowUrls: b(
                this._options.whitelistUrls || [],
                this._options.allowUrls || [],
                t.whitelistUrls || [],
                t.allowUrls || []
              ),
              denyUrls: b(
                this._options.blacklistUrls || [],
                this._options.denyUrls || [],
                t.blacklistUrls || [],
                t.denyUrls || []
              ),
              ignoreErrors: b(this._options.ignoreErrors || [], t.ignoreErrors || [], $g),
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
              return S.error('Cannot extract message for event ' + ft(t)), []
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
            return S.error('Cannot extract url for event ' + ft(t)), null
          }
        }),
        (e.id = 'InboundFilters'),
        e
      )
    })()
  var sn = '?',
    ny =
      /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    iy =
      /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    oy =
      /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
    ay = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    sy = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    uy = /Minified React error #\d+;/i
  function qt(e) {
    var t = null,
      r = 0
    e && (typeof e.framesToPop == 'number' ? (r = e.framesToPop) : uy.test(e.message) && (r = 1))
    try {
      if (((t = cy(e)), t)) return nm(t, r)
    } catch (n) {}
    try {
      if (((t = ly(e)), t)) return nm(t, r)
    } catch (n) {}
    return { message: il(e), name: e && e.name, stack: [], failed: !0 }
  }
  function ly(e) {
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
      if ((o = ny.exec(r[s]))) {
        var u = o[2] && o[2].indexOf('native') === 0
        ;(n = o[2] && o[2].indexOf('eval') === 0),
          n && (i = sy.exec(o[2])) && ((o[2] = i[1]), (o[3] = i[2]), (o[4] = i[3]))
        var l = o[2] && o[2].indexOf('address at ') === 0 ? o[2].substr('address at '.length) : o[2],
          c = o[1] || sn,
          m = c.indexOf('safari-extension') !== -1,
          h = c.indexOf('safari-web-extension') !== -1
        ;(m || h) &&
          ((c = c.indexOf('@') !== -1 ? c.split('@')[0] : sn),
          (l = m ? 'safari-extension:' + l : 'safari-web-extension:' + l)),
          (a = { url: l, func: c, args: u ? [o[2]] : [], line: o[3] ? +o[3] : null, column: o[4] ? +o[4] : null })
      } else if ((o = oy.exec(r[s])))
        a = { url: o[2], func: o[1] || sn, args: [], line: +o[3], column: o[4] ? +o[4] : null }
      else if ((o = iy.exec(r[s])))
        (n = o[3] && o[3].indexOf(' > eval') > -1),
          n && (i = ay.exec(o[3]))
            ? ((o[1] = o[1] || 'eval'), (o[3] = i[1]), (o[4] = i[2]), (o[5] = ''))
            : s === 0 && !o[5] && e.columnNumber !== void 0 && (t[0].column = e.columnNumber + 1),
          (a = {
            url: o[3],
            func: o[1] || sn,
            args: o[2] ? o[2].split(',') : [],
            line: o[4] ? +o[4] : null,
            column: o[5] ? +o[5] : null,
          })
      else continue
      !a.func && a.line && (a.func = sn), t.push(a)
    }
    return t.length ? { message: il(e), name: e.name, stack: t } : null
  }
  function cy(e) {
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
        u && (!u.func && u.line && (u.func = sn), o.push(u))
    }
    return o.length ? { message: il(e), name: e.name, stack: o } : null
  }
  function nm(e, t) {
    try {
      return v(v({}, e), { stack: e.stack.slice(t) })
    } catch (r) {
      return e
    }
  }
  function il(e) {
    var t = e && e.message
    return t ? (t.error && typeof t.error.message == 'string' ? t.error.message : t) : 'No error message'
  }
  var fy = 50
  function ol(e) {
    var t = na(e.stack),
      r = { type: e.name, value: e.message }
    return (
      t && t.length && (r.stacktrace = { frames: t }),
      r.type === void 0 && r.value === '' && (r.value = 'Unrecoverable error caught'),
      r
    )
  }
  function im(e, t, r) {
    var n = {
      exception: {
        values: [
          {
            type: Zr(e) ? e.constructor.name : r ? 'UnhandledRejection' : 'Error',
            value: 'Non-Error ' + (r ? 'promise rejection' : 'exception') + ' captured with keys: ' + Dd(e),
          },
        ],
      },
      extra: { __serialized__: Yu(e) },
    }
    if (t) {
      var i = qt(t),
        o = na(i.stack)
      n.stacktrace = { frames: o }
    }
    return n
  }
  function al(e) {
    var t = ol(e)
    return { exception: { values: [t] } }
  }
  function na(e) {
    if (!e || !e.length) return []
    var t = e,
      r = t[0].func || '',
      n = t[t.length - 1].func || ''
    return (
      (r.indexOf('captureMessage') !== -1 || r.indexOf('captureException') !== -1) && (t = t.slice(1)),
      n.indexOf('sentryWrapped') !== -1 && (t = t.slice(0, -1)),
      t
        .slice(0, fy)
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
  function un(e, t, r) {
    var n = (r && r.syntheticException) || void 0,
      i = ia(t, n, { attachStacktrace: e.attachStacktrace })
    return (
      pt(i, { handled: !0, type: 'generic' }),
      (i.level = de.Error),
      r && r.event_id && (i.event_id = r.event_id),
      G.resolve(i)
    )
  }
  function sl(e, t, r, n) {
    r === void 0 && (r = de.Info)
    var i = (n && n.syntheticException) || void 0,
      o = ul(t, i, { attachStacktrace: e.attachStacktrace })
    return (o.level = r), n && n.event_id && (o.event_id = n.event_id), G.resolve(o)
  }
  function ia(e, t, r) {
    r === void 0 && (r = {})
    var n
    if (qo(e) && e.error) {
      var i = e
      return (e = i.error), (n = al(qt(e))), n
    }
    if (Wu(e) || xd(e)) {
      var o = e,
        a = o.name || (Wu(o) ? 'DOMError' : 'DOMException'),
        s = o.message ? a + ': ' + o.message : a
      return (
        (n = ul(s, t, r)), hi(n, s), 'code' in o && (n.tags = v(v({}, n.tags), { 'DOMException.code': '' + o.code })), n
      )
    }
    if (Vo(e)) return (n = al(qt(e))), n
    if (Je(e) || Zr(e)) {
      var u = e
      return (n = im(u, t, r.rejection)), pt(n, { synthetic: !0 }), n
    }
    return (n = ul(e, t, r)), hi(n, '' + e, void 0), pt(n, { synthetic: !0 }), n
  }
  function ul(e, t, r) {
    r === void 0 && (r = {})
    var n = { message: e }
    if (r.attachStacktrace && t) {
      var i = qt(t),
        o = na(i.stack)
      n.stacktrace = { frames: o }
    }
    return n
  }
  var py = { event: 'error', transaction: 'transaction', session: 'session', attachment: 'attachment' },
    oa = (function () {
      function e(t) {
        ;(this.options = t),
          (this._buffer = new Bd(30)),
          (this._rateLimits = {}),
          (this._api = new yi(t.dsn, t._metadata, t.tunnel)),
          (this.url = this._api.getStoreEndpointWithUrlEncodedAuth())
      }
      return (
        (e.prototype.sendEvent = function (t) {
          throw new V('Transport Class has to implement `sendEvent` method')
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
            s = Xe.fromHttpCode(n.status),
            u = this._handleRateLimit(i)
          if (
            (u && S.warn('Too many ' + r + ' requests, backing off until: ' + this._disabledUntil(r)), s === Xe.Success)
          ) {
            o({ status: s })
            return
          }
          a(n)
        }),
        (e.prototype._disabledUntil = function (t) {
          var r = py[t]
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
              for (var l = De(s.trim().split(',')), c = l.next(); !c.done; c = l.next()) {
                var m = c.value,
                  h = m.split(':', 2),
                  _ = parseInt(h[0], 10),
                  w = (isNaN(_) ? 60 : _) * 1e3
                try {
                  for (var E = ((i = void 0), De(h[1].split(';'))), p = E.next(); !p.done; p = E.next()) {
                    var f = p.value
                    this._rateLimits[f || 'all'] = new Date(a + w)
                  }
                } catch (d) {
                  i = { error: d }
                } finally {
                  try {
                    p && !p.done && (o = E.return) && o.call(E)
                  } finally {
                    if (i) throw i.error
                  }
                }
              }
            } catch (d) {
              r = { error: d }
            } finally {
              try {
                c && !c.done && (n = l.return) && n.call(l)
              } finally {
                if (r) throw r.error
              }
            }
            return !0
          } else if (u) return (this._rateLimits.all = new Date(a + Rd(a, u))), !0
          return !1
        }),
        e
      )
    })()
  function dy() {
    var e,
      t,
      r = P()
    if (Ko(r.fetch)) return r.fetch.bind(r)
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
        S.warn('Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ', a)
      }
    return i.bind(r)
  }
  var ll = (function (e) {
    oe(t, e)
    function t(r, n) {
      n === void 0 && (n = dy())
      var i = e.call(this, r) || this
      return (i._fetch = n), i
    }
    return (
      (t.prototype.sendEvent = function (r) {
        return this._sendRequest(Si(r, this._api), r)
      }),
      (t.prototype.sendSession = function (r) {
        return this._sendRequest(_i(r, this._api), r)
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
        var o = { body: r.body, method: 'POST', referrerPolicy: Ad() ? 'origin' : '' }
        return (
          this.options.fetchParameters !== void 0 && Object.assign(o, this.options.fetchParameters),
          this.options.headers !== void 0 && (o.headers = this.options.headers),
          this._buffer.add(function () {
            return new G(function (a, s) {
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
  })(oa)
  var cl = (function (e) {
    oe(t, e)
    function t() {
      return (e !== null && e.apply(this, arguments)) || this
    }
    return (
      (t.prototype.sendEvent = function (r) {
        return this._sendRequest(Si(r, this._api), r)
      }),
      (t.prototype.sendSession = function (r) {
        return this._sendRequest(_i(r, this._api), r)
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
              return new G(function (o, a) {
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
  })(oa)
  var om = (function (e) {
    oe(t, e)
    function t() {
      return (e !== null && e.apply(this, arguments)) || this
    }
    return (
      (t.prototype.eventFromException = function (r, n) {
        return un(this._options, r, n)
      }),
      (t.prototype.eventFromMessage = function (r, n, i) {
        return n === void 0 && (n = de.Info), sl(this._options, r, n, i)
      }),
      (t.prototype._setupTransport = function () {
        if (!this._options.dsn) return e.prototype._setupTransport.call(this)
        var r = v(v({}, this._options.transportOptions), {
          dsn: this._options.dsn,
          tunnel: this._options.tunnel,
          _metadata: this._options._metadata,
        })
        return this._options.transport ? new this._options.transport(r) : Yo() ? new ll(r) : new cl(r)
      }),
      t
    )
  })(rl)
  var fl = 0
  function pl() {
    return fl > 0
  }
  function my() {
    ;(fl += 1),
      setTimeout(function () {
        fl -= 1
      })
  }
  function mr(e, t, r) {
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
          return mr(u, t)
        })
        return e.handleEvent ? e.handleEvent.apply(this, s) : e.apply(this, s)
      } catch (u) {
        throw (
          (my(),
          an(function (l) {
            l.addEventProcessor(function (c) {
              var m = v({}, c)
              return (
                t.mechanism && (hi(m, void 0, void 0), pt(m, t.mechanism)),
                (m.extra = v(v({}, m.extra), { arguments: a })),
                m
              )
            }),
              on(u)
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
  function am(e) {
    if ((e === void 0 && (e = {}), !e.eventId)) {
      S.error('Missing eventId option in showReportDialog call')
      return
    }
    if (!e.dsn) {
      S.error('Missing dsn option in showReportDialog call')
      return
    }
    var t = document.createElement('script')
    ;(t.async = !0),
      (t.src = new yi(e.dsn).getReportDialogEndpoint(e)),
      e.onLoad && (t.onload = e.onLoad),
      (document.head || document.body).appendChild(t)
  }
  var dl = (function () {
    function e(t) {
      ;(this.name = e.id),
        (this._onErrorHandlerInstalled = !1),
        (this._onUnhandledRejectionHandlerInstalled = !1),
        (this._options = v({ onerror: !0, onunhandledrejection: !0 }, t))
    }
    return (
      (e.prototype.setupOnce = function () {
        ;(Error.stackTraceLimit = 50),
          this._options.onerror && (S.log('Global Handler attached: onerror'), this._installGlobalOnErrorHandler()),
          this._options.onunhandledrejection &&
            (S.log('Global Handler attached: onunhandledrejection'), this._installGlobalOnUnhandledRejectionHandler())
      }),
      (e.prototype._installGlobalOnErrorHandler = function () {
        var t = this
        this._onErrorHandlerInstalled ||
          (J({
            callback: function (r) {
              var n = r.error,
                i = j(),
                o = i.getIntegration(e),
                a = n && n.__sentry_own_request__ === !0
              if (!(!o || pl() || a)) {
                var s = i.getClient(),
                  u =
                    n === void 0 && Qe(r.msg)
                      ? t._eventFromIncompleteOnError(r.msg, r.url, r.line, r.column)
                      : t._enhanceEventWithInitialFrame(
                          ia(n || r.msg, void 0, {
                            attachStacktrace: s && s.getOptions().attachStacktrace,
                            rejection: !1,
                          }),
                          r.url,
                          r.line,
                          r.column
                        )
                pt(u, { handled: !1, type: 'onerror' }), i.captureEvent(u, { originalException: n })
              }
            },
            type: 'error',
          }),
          (this._onErrorHandlerInstalled = !0))
      }),
      (e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
        var t = this
        this._onUnhandledRejectionHandlerInstalled ||
          (J({
            callback: function (r) {
              var n = r
              try {
                'reason' in r ? (n = r.reason) : 'detail' in r && 'reason' in r.detail && (n = r.detail.reason)
              } catch (l) {}
              var i = j(),
                o = i.getIntegration(e),
                a = n && n.__sentry_own_request__ === !0
              if (!o || pl() || a) return !0
              var s = i.getClient(),
                u = lr(n)
                  ? t._eventFromRejectionWithPrimitive(n)
                  : ia(n, void 0, { attachStacktrace: s && s.getOptions().attachStacktrace, rejection: !0 })
              ;(u.level = de.Error),
                pt(u, { handled: !1, type: 'onunhandledrejection' }),
                i.captureEvent(u, { originalException: n })
            },
            type: 'unhandledrejection',
          }),
          (this._onUnhandledRejectionHandlerInstalled = !0))
      }),
      (e.prototype._eventFromIncompleteOnError = function (t, r, n, i) {
        var o =
            /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
          a = qo(t) ? t.message : t,
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
          s = Qe(r) && r.length > 0 ? r : Id()
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
  var hy = [
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
    ml = (function () {
      function e(t) {
        ;(this.name = e.id),
          (this._options = v(
            { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0 },
            t
          ))
      }
      return (
        (e.prototype.setupOnce = function () {
          var t = P()
          if (
            (this._options.setTimeout && B(t, 'setTimeout', this._wrapTimeFunction.bind(this)),
            this._options.setInterval && B(t, 'setInterval', this._wrapTimeFunction.bind(this)),
            this._options.requestAnimationFrame && B(t, 'requestAnimationFrame', this._wrapRAF.bind(this)),
            this._options.XMLHttpRequest &&
              'XMLHttpRequest' in t &&
              B(XMLHttpRequest.prototype, 'send', this._wrapXHR.bind(this)),
            this._options.eventTarget)
          ) {
            var r = Array.isArray(this._options.eventTarget) ? this._options.eventTarget : hy
            r.forEach(this._wrapEventTarget.bind(this))
          }
        }),
        (e.prototype._wrapTimeFunction = function (t) {
          return function () {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
            var i = r[0]
            return (
              (r[0] = mr(i, { mechanism: { data: { function: Le(t) }, handled: !0, type: 'instrument' } })),
              t.apply(this, r)
            )
          }
        }),
        (e.prototype._wrapRAF = function (t) {
          return function (r) {
            return t.call(
              this,
              mr(r, {
                mechanism: {
                  data: { function: 'requestAnimationFrame', handler: Le(t) },
                  handled: !0,
                  type: 'instrument',
                },
              })
            )
          }
        }),
        (e.prototype._wrapEventTarget = function (t) {
          var r = P(),
            n = r[t] && r[t].prototype
          !n ||
            !n.hasOwnProperty ||
            !n.hasOwnProperty('addEventListener') ||
            (B(n, 'addEventListener', function (i) {
              return function (o, a, s) {
                try {
                  typeof a.handleEvent == 'function' &&
                    (a.handleEvent = mr(a.handleEvent.bind(a), {
                      mechanism: {
                        data: { function: 'handleEvent', handler: Le(a), target: t },
                        handled: !0,
                        type: 'instrument',
                      },
                    }))
                } catch (u) {}
                return i.call(
                  this,
                  o,
                  mr(a, {
                    mechanism: {
                      data: { function: 'addEventListener', handler: Le(a), target: t },
                      handled: !0,
                      type: 'instrument',
                    },
                  }),
                  s
                )
              }
            }),
            B(n, 'removeEventListener', function (i) {
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
                  B(i, a, function (s) {
                    var u = { mechanism: { data: { function: a, handler: Le(s) }, handled: !0, type: 'instrument' } }
                    return s.__sentry_original__ && (u.mechanism.data.handler = Le(s.__sentry_original__)), mr(s, u)
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
  var Ei = (function () {
    function e(t) {
      ;(this.name = e.id), (this._options = v({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }, t))
    }
    return (
      (e.prototype.addSentryBreadcrumb = function (t) {
        !this._options.sentry ||
          j().addBreadcrumb(
            {
              category: 'sentry.' + (t.type === 'transaction' ? 'transaction' : 'event'),
              event_id: t.event_id,
              level: t.level,
              message: ft(t),
            },
            { event: t }
          )
      }),
      (e.prototype.setupOnce = function () {
        var t = this
        this._options.console &&
          J({
            callback: function () {
              for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
              t._consoleBreadcrumb.apply(t, b(r))
            },
            type: 'console',
          }),
          this._options.dom &&
            J({
              callback: function () {
                for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
                t._domBreadcrumb.apply(t, b(r))
              },
              type: 'dom',
            }),
          this._options.xhr &&
            J({
              callback: function () {
                for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
                t._xhrBreadcrumb.apply(t, b(r))
              },
              type: 'xhr',
            }),
          this._options.fetch &&
            J({
              callback: function () {
                for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
                t._fetchBreadcrumb.apply(t, b(r))
              },
              type: 'fetch',
            }),
          this._options.history &&
            J({
              callback: function () {
                for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n]
                t._historyBreadcrumb.apply(t, b(r))
              },
              type: 'history',
            })
      }),
      (e.prototype._consoleBreadcrumb = function (t) {
        var r = {
          category: 'console',
          data: { arguments: t.args, logger: 'console' },
          level: de.fromString(t.level),
          message: qu(t.args, ' '),
        }
        if (t.level === 'assert')
          if (t.args[0] === !1)
            (r.message = 'Assertion failed: ' + (qu(t.args.slice(1), ' ') || 'console.assert')),
              (r.data.arguments = t.args.slice(1))
          else return
        j().addBreadcrumb(r, { input: t.args, level: t.level })
      }),
      (e.prototype._domBreadcrumb = function (t) {
        var r,
          n = typeof this._options.dom == 'object' ? this._options.dom.serializeAttribute : void 0
        typeof n == 'string' && (n = [n])
        try {
          r = t.event.target ? ct(t.event.target, n) : ct(t.event, n)
        } catch (i) {
          r = '<unknown>'
        }
        r.length !== 0 &&
          j().addBreadcrumb(
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
          j().addBreadcrumb(
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
            ? j().addBreadcrumb(
                { category: 'fetch', data: t.fetchData, level: de.Error, type: 'http' },
                { data: t.error, input: t.args }
              )
            : j().addBreadcrumb(
                { category: 'fetch', data: v(v({}, t.fetchData), { status_code: t.response.status }), type: 'http' },
                { input: t.args, response: t.response }
              ))
      }),
      (e.prototype._historyBreadcrumb = function (t) {
        var r = P(),
          n = t.from,
          i = t.to,
          o = Go(r.location.href),
          a = Go(n),
          s = Go(i)
        a.path || (a = o),
          o.protocol === s.protocol && o.host === s.host && (i = s.relative),
          o.protocol === a.protocol && o.host === a.host && (n = a.relative),
          j().addBreadcrumb({ category: 'navigation', data: { from: n, to: i } })
      }),
      (e.id = 'Breadcrumbs'),
      e
    )
  })()
  var vy = 'cause',
    gy = 5,
    hl = (function () {
      function e(t) {
        t === void 0 && (t = {}), (this.name = e.id), (this._key = t.key || vy), (this._limit = t.limit || gy)
      }
      return (
        (e.prototype.setupOnce = function () {
          He(function (t, r) {
            var n = j().getIntegration(e)
            return n ? n._handler(t, r) : t
          })
        }),
        (e.prototype._handler = function (t, r) {
          if (!t.exception || !t.exception.values || !r || !me(r.originalException, Error)) return t
          var n = this._walkErrorTree(r.originalException, this._key)
          return (t.exception.values = b(n, t.exception.values)), t
        }),
        (e.prototype._walkErrorTree = function (t, r, n) {
          if ((n === void 0 && (n = []), !me(t[r], Error) || n.length + 1 >= this._limit)) return n
          var i = qt(t[r]),
            o = ol(i)
          return this._walkErrorTree(t[r], r, b([o], n))
        }),
        (e.id = 'LinkedErrors'),
        e
      )
    })()
  var ln = P(),
    vl = (function () {
      function e() {
        this.name = e.id
      }
      return (
        (e.prototype.setupOnce = function () {
          He(function (t) {
            var r, n, i
            if (j().getIntegration(e)) {
              if (!ln.navigator && !ln.location && !ln.document) return t
              var o =
                  ((r = t.request) === null || r === void 0 ? void 0 : r.url) ||
                  ((n = ln.location) === null || n === void 0 ? void 0 : n.href),
                a = (ln.document || {}).referrer,
                s = (ln.navigator || {}).userAgent,
                u = v(
                  v(v({}, (i = t.request) === null || i === void 0 ? void 0 : i.headers), a && { Referer: a }),
                  s && { 'User-Agent': s }
                ),
                l = v(v({}, o && { url: o }), { headers: u })
              return v(v({}, t), { request: l })
            }
            return t
          })
        }),
        (e.id = 'UserAgent'),
        e
      )
    })()
  var gl = (function () {
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
  var sm = (function (e) {
    oe(t, e)
    function t(r) {
      r === void 0 && (r = {})
      var n = this
      return (
        (r._metadata = r._metadata || {}),
        (r._metadata.sdk = r._metadata.sdk || {
          name: 'sentry.javascript.browser',
          packages: [{ name: 'npm:@sentry/browser', version: Vt }],
          version: Vt,
        }),
        (n = e.call(this, om, r) || this),
        n
      )
    }
    return (
      (t.prototype.showReportDialog = function (r) {
        r === void 0 && (r = {})
        var n = P().document
        if (!!n) {
          if (!this._isEnabled()) {
            S.error('Trying to call showReportDialog with Sentry Client disabled')
            return
          }
          am(v(v({}, r), { dsn: r.dsn || this.getDsn() }))
        }
      }),
      (t.prototype._prepareEvent = function (r, n, i) {
        return (r.platform = r.platform || 'javascript'), e.prototype._prepareEvent.call(this, r, n, i)
      }),
      (t.prototype._sendEvent = function (r) {
        var n = this.getIntegration(Ei)
        n && n.addSentryBreadcrumb(r), e.prototype._sendEvent.call(this, r)
      }),
      t
    )
  })(tl)
  var um = [
    new wi.InboundFilters(),
    new wi.FunctionToString(),
    new ml(),
    new Ei(),
    new dl(),
    new hl(),
    new gl(),
    new vl(),
  ]
  function yl(e) {
    if (
      (e === void 0 && (e = {}), e.defaultIntegrations === void 0 && (e.defaultIntegrations = um), e.release === void 0)
    ) {
      var t = P()
      t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
    }
    e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0), nl(sm, e), e.autoSessionTracking && yy()
  }
  function _l(e) {
    e === void 0 && (e = {}), e.eventId || (e.eventId = j().lastEventId())
    var t = j().getClient()
    t && t.showReportDialog(e)
  }
  function yy() {
    var e = P(),
      t = e.document
    if (typeof t == 'undefined') {
      S.warn('Session tracking in non-browser environment with @sentry/browser is not supported.')
      return
    }
    var r = j()
    typeof r.startSession != 'function' ||
      typeof r.captureSession != 'function' ||
      (r.startSession({ ignoreDuration: !0 }),
      r.captureSession(),
      J({
        callback: function (n) {
          var i = n.from,
            o = n.to
          i === void 0 || i === o || (r.startSession({ ignoreDuration: !0 }), r.captureSession())
        },
        type: 'history',
      }))
  }
  function Sl(e) {
    ;(e._metadata = e._metadata || {}),
      (e._metadata.sdk = e._metadata.sdk || {
        name: 'sentry.javascript.react',
        packages: [{ name: 'npm:@sentry/react', version: Vt }],
        version: Vt,
      }),
      yl(e)
  }
  var Ny = rt(_m()),
    hr = rt(yt()),
    Sm = Cd(hr.version)
  var wm = { componentStack: null, error: null, eventId: null }
  function Py(e, t) {
    var r = new Error(e.message)
    ;(r.name = 'React ErrorBoundary ' + r.name), (r.stack = t)
    var n = {}
    if (
      (un({}, r).then(function (o) {
        n = o
      }),
      n.exception && Array.isArray(n.exception.values) && Sm.major && Sm.major >= 17)
    ) {
      var i = {}
      return (
        un({}, e).then(function (o) {
          i = o
        }),
        i.exception &&
          Array.isArray(i.exception.values) &&
          (i.exception.values = b(n.exception.values, i.exception.values)),
        ra(i)
      )
    }
    return on(e, { contexts: { react: { componentStack: t } } })
  }
  var Ol = (function (e) {
    oe(t, e)
    function t() {
      var r = (e !== null && e.apply(this, arguments)) || this
      return (
        (r.state = wm),
        (r.resetErrorBoundary = function () {
          var n = r.props.onReset,
            i = r.state,
            o = i.error,
            a = i.componentStack,
            s = i.eventId
          n && n(o, a, s), r.setState(wm)
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
        an(function (m) {
          s && s(m, r, o)
          var h = Py(r, o)
          u && u(r, o, h), l && _l(v(v({}, c), { eventId: h })), i.setState({ error: r, componentStack: o, eventId: h })
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
          ? hr.isValidElement(r)
            ? r
            : typeof r == 'function'
            ? r({ error: i, componentStack: o, resetError: this.resetErrorBoundary, eventId: a })
            : null
          : this.props.children
      }),
      t
    )
  })(hr.Component)
  var K
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
  })(K || (K = {}))
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
  })(K || (K = {}))
  var My = new RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$')
  function xi(e) {
    e === void 0 && (e = (t = j().getClient()) === null || t === void 0 ? void 0 : t.getOptions())
    var t
    return e ? 'tracesSampleRate' in e || 'tracesSampler' in e : !1
  }
  function Em(e) {
    var t = e.match(My)
    if (t) {
      var r = void 0
      return t[3] === '1' ? (r = !0) : t[3] === '0' && (r = !1), { traceId: t[1], parentSampled: r, parentSpanId: t[2] }
    }
  }
  function vr(e) {
    e === void 0 && (e = j())
    var t, r
    return (r = (t = e) === null || t === void 0 ? void 0 : t.getScope()) === null || r === void 0
      ? void 0
      : r.getTransaction()
  }
  function Z(e) {
    return e / 1e3
  }
  function xm(e) {
    return e * 1e3
  }
  function km() {
    J({ callback: Tm, type: 'error' }), J({ callback: Tm, type: 'unhandledrejection' })
  }
  function Tm() {
    var e = vr()
    e && (S.log('[Tracing] Transaction: ' + K.InternalError + ' -> Global error occured'), e.setStatus(K.InternalError))
  }
  var va = (function () {
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
  var Om = (function () {
    function e(t) {
      if (
        ((this.traceId = Ne()),
        (this.spanId = Ne().substring(16)),
        (this.startTimestamp = dr()),
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
        var r = new e(v(v({}, t), { parentSpanId: this.spanId, sampled: this.sampled, traceId: this.traceId }))
        return (
          (r.spanRecorder = this.spanRecorder),
          r.spanRecorder && r.spanRecorder.add(r),
          (r.transaction = this.transaction),
          r
        )
      }),
      (e.prototype.setTag = function (t, r) {
        var n
        return (this.tags = v(v({}, this.tags), ((n = {}), (n[t] = r), n))), this
      }),
      (e.prototype.setData = function (t, r) {
        var n
        return (this.data = v(v({}, this.data), ((n = {}), (n[t] = r), n))), this
      }),
      (e.prototype.setStatus = function (t) {
        return (this.status = t), this
      }),
      (e.prototype.setHttpStatus = function (t) {
        this.setTag('http.status_code', String(t))
        var r = K.fromHttpCode(t)
        return r !== K.UnknownError && this.setStatus(r), this
      }),
      (e.prototype.isSuccess = function () {
        return this.status === K.Ok
      }),
      (e.prototype.finish = function (t) {
        this.endTimestamp = typeof t == 'number' ? t : dr()
      }),
      (e.prototype.toTraceparent = function () {
        var t = ''
        return this.sampled !== void 0 && (t = this.sampled ? '-1' : '-0'), this.traceId + '-' + this.spanId + t
      }),
      (e.prototype.toContext = function () {
        return Ae({
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
        return Ae({
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
        return Ae({
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
  var ga = (function (e) {
    oe(t, e)
    function t(r, n) {
      var i = e.call(this, r) || this
      return (
        (i._measurements = {}),
        (i._hub = j()),
        me(n, Bt) && (i._hub = n),
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
        r === void 0 && (r = 1e3), this.spanRecorder || (this.spanRecorder = new va(r)), this.spanRecorder.add(this)
      }),
      (t.prototype.setMeasurements = function (r) {
        this._measurements = v({}, r)
      }),
      (t.prototype.setMetadata = function (r) {
        this.metadata = v(v({}, this.metadata), r)
      }),
      (t.prototype.finish = function (r) {
        var n = this
        if (this.endTimestamp === void 0) {
          if (
            (this.name ||
              (S.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'),
              (this.name = '<unlabeled transaction>')),
            e.prototype.finish.call(this, r),
            this.sampled !== !0)
          ) {
            S.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.')
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
              (S.log(
                '[Measurements] Adding measurements to transaction',
                JSON.stringify(this._measurements, void 0, 2)
              ),
              (o.measurements = this._measurements)),
            S.log('[Tracing] Finishing ' + this.op + ' transaction: ' + this.name + '.'),
            this._hub.captureEvent(o)
          )
        }
      }),
      (t.prototype.toContext = function () {
        var r = e.prototype.toContext.call(this)
        return Ae(v(v({}, r), { name: this.name, trimEnd: this._trimEnd }))
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
  })(Om)
  var Il = 1e3,
    jy = (function (e) {
      oe(t, e)
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
              ;(r.endTimestamp = typeof i == 'number' ? i : dr()), n._popActivity(r.spanId)
            }),
            r.endTimestamp === void 0 && this._pushActivity(r.spanId)),
            e.prototype.add.call(this, r)
        }),
        t
      )
    })(va)
  var Im = (function (e) {
    oe(t, e)
    function t(r, n, i, o) {
      i === void 0 && (i = Il), o === void 0 && (o = !1)
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
          (Cm(n),
          S.log('Setting idle transaction on scope. Span ID: ' + a.spanId),
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
        if ((r === void 0 && (r = dr()), (this._finished = !0), (this.activities = {}), this.spanRecorder)) {
          S.log('[Tracing] finishing IdleTransaction', new Date(r * 1e3).toISOString(), this.op)
          try {
            for (var a = De(this._beforeFinishCallbacks), s = a.next(); !s.done; s = a.next()) {
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
              l.setStatus(K.Cancelled),
              S.log('[Tracing] cancelling span since transaction ended early', JSON.stringify(l, void 0, 2)))
            var c = l.startTimestamp < r
            return (
              c ||
                S.log(
                  '[Tracing] discarding Span since it happened after Transaction was finished',
                  JSON.stringify(l, void 0, 2)
                ),
              c
            )
          })),
            S.log('[Tracing] flushing IdleTransaction')
        } else S.log('[Tracing] No active IdleTransaction')
        return this._onScope && Cm(this._idleHub), e.prototype.finish.call(this, r)
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
          ;(this.spanRecorder = new jy(i, o, this.spanId, r)), S.log('Starting heartbeat'), this._pingHeartbeat()
        }
        this.spanRecorder.add(this)
      }),
      (t.prototype._pushActivity = function (r) {
        this._initTimeout && (clearTimeout(this._initTimeout), (this._initTimeout = void 0)),
          S.log('[Tracing] pushActivity: ' + r),
          (this.activities[r] = !0),
          S.log('[Tracing] new activities count', Object.keys(this.activities).length)
      }),
      (t.prototype._popActivity = function (r) {
        var n = this
        if (
          (this.activities[r] &&
            (S.log('[Tracing] popActivity ' + r),
            delete this.activities[r],
            S.log('[Tracing] new activities count', Object.keys(this.activities).length)),
          Object.keys(this.activities).length === 0)
        ) {
          var i = this._idleTimeout,
            o = dr() + i / 1e3
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
              ? (S.log('[Tracing] Transaction finished because of no change for 3 heart beats'),
                this.setStatus(K.DeadlineExceeded),
                this.setTag('heartbeat', 'failed'),
                this.finish())
              : this._pingHeartbeat()
        }
      }),
      (t.prototype._pingHeartbeat = function () {
        var r = this
        S.log('pinging Heartbeat -> current counter: ' + this._heartbeatCounter),
          (this._heartbeatTimer = setTimeout(function () {
            r._beat()
          }, 5e3))
      }),
      t
    )
  })(ga)
  function Cm(e) {
    if (e) {
      var t = e.getScope()
      if (t) {
        var r = t.getTransaction()
        r && t.setSpan(void 0)
      }
    }
  }
  function Fy() {
    var e = this.getScope()
    if (e) {
      var t = e.getSpan()
      if (t) return { 'sentry-trace': t.toTraceparent() }
    }
    return {}
  }
  function bm(e, t, r) {
    if (!xi()) return (e.sampled = !1), e
    if (e.sampled !== void 0) return e.setMetadata({ transactionSampling: { method: Ht.Explicit } }), e
    var n
    return (
      typeof t.tracesSampler == 'function'
        ? ((n = t.tracesSampler(r)), e.setMetadata({ transactionSampling: { method: Ht.Sampler, rate: Number(n) } }))
        : r.parentSampled !== void 0
        ? ((n = r.parentSampled), e.setMetadata({ transactionSampling: { method: Ht.Inheritance } }))
        : ((n = t.tracesSampleRate), e.setMetadata({ transactionSampling: { method: Ht.Rate, rate: Number(n) } })),
      Dy(n)
        ? n
          ? ((e.sampled = Math.random() < n),
            e.sampled
              ? (S.log('[Tracing] starting ' + e.op + ' transaction - ' + e.name), e)
              : (S.log(
                  "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
                    Number(n) +
                    ')'
                ),
                e))
          : (S.log(
              '[Tracing] Discarding transaction because ' +
                (typeof t.tracesSampler == 'function'
                  ? 'tracesSampler returned 0 or false'
                  : 'a negative sampling decision was inherited or tracesSampleRate is set to 0')
            ),
            (e.sampled = !1),
            e)
        : (S.warn('[Tracing] Discarding transaction because of invalid sample rate.'), (e.sampled = !1), e)
    )
  }
  function Dy(e) {
    return isNaN(e) || !(typeof e == 'number' || typeof e == 'boolean')
      ? (S.warn(
          '[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ' +
            JSON.stringify(e) +
            ' of type ' +
            JSON.stringify(typeof e) +
            '.'
        ),
        !1)
      : e < 0 || e > 1
      ? (S.warn('[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ' + e + '.'), !1)
      : !0
  }
  function Ly(e, t) {
    var r,
      n,
      i = ((r = this.getClient()) === null || r === void 0 ? void 0 : r.getOptions()) || {},
      o = new ga(e, this)
    return (
      (o = bm(o, i, v({ parentSampled: e.parentSampled, transactionContext: e }, t))),
      o.sampled && o.initSpanRecorder((n = i._experiments) === null || n === void 0 ? void 0 : n.maxSpans),
      o
    )
  }
  function Rm(e, t, r, n, i) {
    var o,
      a,
      s = ((o = e.getClient()) === null || o === void 0 ? void 0 : o.getOptions()) || {},
      u = new Im(t, e, r, n)
    return (
      (u = bm(u, s, v({ parentSampled: t.parentSampled, transactionContext: t }, i))),
      u.sampled && u.initSpanRecorder((a = s._experiments) === null || a === void 0 ? void 0 : a.maxSpans),
      u
    )
  }
  function Ay() {
    var e = Wt()
    !e.__SENTRY__ ||
      ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
      e.__SENTRY__.extensions.startTransaction || (e.__SENTRY__.extensions.startTransaction = Ly),
      e.__SENTRY__.extensions.traceHeaders || (e.__SENTRY__.extensions.traceHeaders = Fy))
  }
  function Uy() {
    var e = Wt()
    if (!!e.__SENTRY__) {
      var t = {
          mongodb: function () {
            var n = tt(module, './integrations/mongo')
            return new n.Mongo()
          },
          mongoose: function () {
            var n = tt(module, './integrations/mongo')
            return new n.Mongo({ mongoose: !0 })
          },
          mysql: function () {
            var n = tt(module, './integrations/mysql')
            return new n.Mysql()
          },
          pg: function () {
            var n = tt(module, './integrations/postgres')
            return new n.Postgres()
          },
        },
        r = Object.keys(t)
          .filter(function (n) {
            return !!zt(n)
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
      r.length > 0 && (e.__SENTRY__.integrations = b(e.__SENTRY__.integrations || [], r))
    }
  }
  function Nm() {
    Ay(), et() && Uy(), km()
  }
  var ya = P()
  function Pm() {
    ya && ya.document
      ? ya.document.addEventListener('visibilitychange', function () {
          var e = vr()
          ya.document.hidden &&
            e &&
            (S.log('[Tracing] Transaction: ' + K.Cancelled + ' -> since tab moved to the background, op: ' + e.op),
            e.status || e.setStatus(K.Cancelled),
            e.setTag('visibilitychange', 'document.hidden'),
            e.finish())
        })
      : S.warn('[Tracing] Could not set up background tab detection due to lack of global document')
  }
  var cn = function (e, t, r, n) {
    var i
    return function () {
      r && t.isFinal && r.disconnect(),
        t.value >= 0 &&
          (n || t.isFinal || document.visibilityState === 'hidden') &&
          ((t.delta = t.value - (i || 0)), (t.delta || t.isFinal || i === void 0) && (e(t), (i = t.value)))
    }
  }
  var Mm = function () {
    return Date.now() + '-' + (Math.floor(Math.random() * (9e12 - 1)) + 1e12)
  }
  var fn = function (e, t) {
    return t === void 0 && (t = -1), { name: e, value: t, delta: 0, entries: [], id: Mm(), isFinal: !1 }
  }
  var pn = function (e, t) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        var r = new PerformanceObserver(function (n) {
          return n.getEntries().map(t)
        })
        return r.observe({ type: e, buffered: !0 }), r
      }
    } catch (n) {}
  }
  var jm = !1,
    Fm = !1,
    Hy = function (e) {
      jm = !e.persisted
    },
    zy = function () {
      addEventListener('pagehide', Hy), addEventListener('beforeunload', function () {})
    },
    $t = function (e, t) {
      t === void 0 && (t = !1),
        Fm || (zy(), (Fm = !0)),
        addEventListener(
          'visibilitychange',
          function (r) {
            var n = r.timeStamp
            document.visibilityState === 'hidden' && e({ timeStamp: n, isUnloading: jm })
          },
          { capture: !0, once: t }
        )
    }
  var Dm = function (e, t) {
    t === void 0 && (t = !1)
    var r = fn('CLS', 0),
      n,
      i = function (a) {
        a.hadRecentInput || ((r.value += a.value), r.entries.push(a), n())
      },
      o = pn('layout-shift', i)
    o &&
      ((n = cn(e, r, o, t)),
      $t(function (a) {
        var s = a.isUnloading
        o.takeRecords().map(i), s && (r.isFinal = !0), n()
      }))
  }
  var _a,
    dn = function () {
      return (
        _a === void 0 &&
          ((_a = document.visibilityState === 'hidden' ? 0 : Infinity),
          $t(function (e) {
            var t = e.timeStamp
            return (_a = t)
          }, !0)),
        {
          get timeStamp() {
            return _a
          },
        }
      )
    }
  var Lm = function (e) {
    var t = fn('FID'),
      r = dn(),
      n = function (a) {
        a.startTime < r.timeStamp &&
          ((t.value = a.processingStart - a.startTime), t.entries.push(a), (t.isFinal = !0), o())
      },
      i = pn('first-input', n),
      o = cn(e, t, i)
    i
      ? $t(function () {
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
  var Cl,
    Am = function () {
      return (
        Cl ||
          (Cl = new Promise(function (e) {
            return ['scroll', 'keydown', 'pointerdown'].map(function (t) {
              addEventListener(t, e, { once: !0, passive: !0, capture: !0 })
            })
          })),
        Cl
      )
    }
  var Um = function (e, t) {
    t === void 0 && (t = !1)
    var r = fn('LCP'),
      n = dn(),
      i,
      o = function (u) {
        var l = u.startTime
        l < n.timeStamp ? ((r.value = l), r.entries.push(u)) : (r.isFinal = !0), i()
      },
      a = pn('largest-contentful-paint', o)
    if (a) {
      i = cn(e, r, a, t)
      var s = function () {
        r.isFinal || (a.takeRecords().map(o), (r.isFinal = !0), i())
      }
      Am().then(s), $t(s, !0)
    }
  }
  var ht = P(),
    Hm = (function () {
      function e() {
        var t
        ;(this._measurements = {}),
          (this._performanceCursor = 0),
          !et() &&
            ((t = ht) === null || t === void 0 ? void 0 : t.performance) &&
            (ht.performance.mark && ht.performance.mark('sentry-tracing-init'),
            this._trackCLS(),
            this._trackLCP(),
            this._trackFID())
      }
      return (
        (e.prototype.addPerformanceEntries = function (t) {
          var r = this
          if (!(!ht || !ht.performance || !ht.performance.getEntries || !nn)) {
            S.log('[Tracing] Adding & adjusting spans using Performance API')
            var n = Z(nn),
              i
            if (ht.document) {
              for (var o = 0; o < document.scripts.length; o++)
                if (document.scripts[o].dataset.entry === 'true') {
                  i = document.scripts[o].src
                  break
                }
            }
            var a, s, u, l
            if (
              (ht.performance
                .getEntries()
                .slice(this._performanceCursor)
                .forEach(function (m) {
                  var h = Z(m.startTime),
                    _ = Z(m.duration)
                  if (!(t.op === 'navigation' && n + h < t.startTimestamp))
                    switch (m.entryType) {
                      case 'navigation': {
                        By(t, m, n), (u = n + Z(m.responseStart)), (l = n + Z(m.requestStart))
                        break
                      }
                      case 'mark':
                      case 'paint':
                      case 'measure': {
                        var w = Wy(t, m, h, _, n)
                        s === void 0 && m.name === 'sentry-tracing-init' && (s = w)
                        var E = dn(),
                          p = m.startTime < E.timeStamp
                        m.name === 'first-paint' &&
                          p &&
                          (S.log('[Measurements] Adding FP'),
                          (r._measurements.fp = { value: m.startTime }),
                          (r._measurements['mark.fp'] = { value: w })),
                          m.name === 'first-contentful-paint' &&
                            p &&
                            (S.log('[Measurements] Adding FCP'),
                            (r._measurements.fcp = { value: m.startTime }),
                            (r._measurements['mark.fcp'] = { value: w }))
                        break
                      }
                      case 'resource': {
                        var f = m.name.replace(window.location.origin, ''),
                          d = Vy(t, m, f, h, _, n)
                        a === void 0 && (i || '').indexOf(f) > -1 && (a = d)
                        break
                      }
                      default:
                    }
                }),
              a !== void 0 &&
                s !== void 0 &&
                gr(t, { description: 'evaluation', endTimestamp: s, op: 'script', startTimestamp: a }),
              (this._performanceCursor = Math.max(performance.getEntries().length - 1, 0)),
              this._trackNavigator(t),
              t.op === 'pageload')
            ) {
              var c = Z(nn)
              typeof u == 'number' &&
                (S.log('[Measurements] Adding TTFB'),
                (this._measurements.ttfb = { value: (u - t.startTimestamp) * 1e3 }),
                typeof l == 'number' && l <= u && (this._measurements['ttfb.requestTime'] = { value: (u - l) * 1e3 })),
                ['fcp', 'fp', 'lcp'].forEach(function (m) {
                  if (!(!r._measurements[m] || c >= t.startTimestamp)) {
                    var h = r._measurements[m].value,
                      _ = c + Z(h),
                      w = Math.abs((_ - t.startTimestamp) * 1e3),
                      E = w - h
                    S.log('[Measurements] Normalized ' + m + ' from ' + h + ' to ' + w + ' (' + E + ')'),
                      (r._measurements[m].value = w)
                  }
                }),
                this._measurements['mark.fid'] &&
                  this._measurements.fid &&
                  gr(t, {
                    description: 'first input delay',
                    endTimestamp: this._measurements['mark.fid'].value + Z(this._measurements.fid.value),
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
            (S.log('[Measurements] Adding LCP Data'),
            this._lcpEntry.element && t.setTag('lcp.element', ct(this._lcpEntry.element)),
            this._lcpEntry.id && t.setTag('lcp.id', this._lcpEntry.id),
            this._lcpEntry.url && t.setTag('lcp.url', this._lcpEntry.url.trim().slice(0, 200)),
            t.setTag('lcp.size', this._lcpEntry.size)),
            this._clsEntry &&
              (S.log('[Measurements] Adding CLS Data'),
              this._clsEntry.sources.map(function (r, n) {
                return t.setTag('cls.source.' + (n + 1), ct(r.node))
              }))
        }),
        (e.prototype._trackCLS = function () {
          var t = this
          Dm(function (r) {
            var n = r.entries.pop()
            !n || (S.log('[Measurements] Adding CLS'), (t._measurements.cls = { value: r.value }), (t._clsEntry = n))
          })
        }),
        (e.prototype._trackNavigator = function (t) {
          var r = ht.navigator
          if (!!r) {
            var n = r.connection
            n &&
              (n.effectiveType && t.setTag('effectiveConnectionType', n.effectiveType),
              n.type && t.setTag('connectionType', n.type),
              Sa(n.rtt) && (this._measurements['connection.rtt'] = { value: n.rtt }),
              Sa(n.downlink) && (this._measurements['connection.downlink'] = { value: n.downlink })),
              Sa(r.deviceMemory) && t.setTag('deviceMemory', String(r.deviceMemory)),
              Sa(r.hardwareConcurrency) && t.setTag('hardwareConcurrency', String(r.hardwareConcurrency))
          }
        }),
        (e.prototype._trackLCP = function () {
          var t = this
          Um(function (r) {
            var n = r.entries.pop()
            if (!!n) {
              var i = Z(nn),
                o = Z(n.startTime)
              S.log('[Measurements] Adding LCP'),
                (t._measurements.lcp = { value: r.value }),
                (t._measurements['mark.lcp'] = { value: i + o }),
                (t._lcpEntry = n)
            }
          })
        }),
        (e.prototype._trackFID = function () {
          var t = this
          Lm(function (r) {
            var n = r.entries.pop()
            if (!!n) {
              var i = Z(nn),
                o = Z(n.startTime)
              S.log('[Measurements] Adding FID'),
                (t._measurements.fid = { value: r.value }),
                (t._measurements['mark.fid'] = { value: i + o })
            }
          })
        }),
        e
      )
    })()
  function By(e, t, r) {
    Gt({ transaction: e, entry: t, event: 'unloadEvent', timeOrigin: r }),
      Gt({ transaction: e, entry: t, event: 'redirect', timeOrigin: r }),
      Gt({ transaction: e, entry: t, event: 'domContentLoadedEvent', timeOrigin: r }),
      Gt({ transaction: e, entry: t, event: 'loadEvent', timeOrigin: r }),
      Gt({ transaction: e, entry: t, event: 'connect', timeOrigin: r }),
      Gt({
        transaction: e,
        entry: t,
        event: 'secureConnection',
        timeOrigin: r,
        eventEnd: 'connectEnd',
        description: 'TLS/SSL',
      }),
      Gt({
        transaction: e,
        entry: t,
        event: 'fetch',
        timeOrigin: r,
        eventEnd: 'domainLookupStart',
        description: 'cache',
      }),
      Gt({ transaction: e, entry: t, event: 'domainLookup', timeOrigin: r, description: 'DNS' }),
      qy(e, t, r)
  }
  function Wy(e, t, r, n, i) {
    var o = i + r,
      a = o + n
    return gr(e, { description: t.name, endTimestamp: a, op: t.entryType, startTimestamp: o }), o
  }
  function Vy(e, t, r, n, i, o) {
    if (!(t.initiatorType === 'xmlhttprequest' || t.initiatorType === 'fetch')) {
      var a = {}
      'transferSize' in t && (a['Transfer Size'] = t.transferSize),
        'encodedBodySize' in t && (a['Encoded Body Size'] = t.encodedBodySize),
        'decodedBodySize' in t && (a['Decoded Body Size'] = t.decodedBodySize)
      var s = o + n,
        u = s + i
      return (
        gr(e, {
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
  function Gt(e) {
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
      gr(t, { op: 'browser', description: a != null ? a : n, startTimestamp: i + Z(u), endTimestamp: i + Z(s) })
  }
  function qy(e, t, r) {
    gr(e, {
      op: 'browser',
      description: 'request',
      startTimestamp: r + Z(t.requestStart),
      endTimestamp: r + Z(t.responseEnd),
    }),
      gr(e, {
        op: 'browser',
        description: 'response',
        startTimestamp: r + Z(t.responseStart),
        endTimestamp: r + Z(t.responseEnd),
      })
  }
  function gr(e, t) {
    var r = t.startTimestamp,
      n = Bo(t, ['startTimestamp'])
    return r && e.startTimestamp > r && (e.startTimestamp = r), e.startChild(v({ startTimestamp: r }, n))
  }
  function Sa(e) {
    return typeof e == 'number' && isFinite(e)
  }
  var $y = ['localhost', /^\//],
    ki = { traceFetch: !0, traceXHR: !0, tracingOrigins: $y }
  function zm(e) {
    var t = v(v({}, ki), e),
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
              return fr(c, h)
            }) && !fr(c, 'sentry_key')),
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
      J({
        callback: function (c) {
          Gy(c, u, l)
        },
        type: 'fetch',
      }),
      n &&
        J({
          callback: function (c) {
            Yy(c, u, l)
          },
          type: 'xhr',
        })
  }
  function Gy(e, t, r) {
    if (!(!xi() || !(e.fetchData && t(e.fetchData.url)))) {
      if (e.endTimestamp && e.fetchData.__span) {
        var n = r[e.fetchData.__span]
        n &&
          (e.response ? n.setHttpStatus(e.response.status) : e.error && n.setStatus(K.InternalError),
          n.finish(),
          delete r[e.fetchData.__span])
        return
      }
      var i = vr()
      if (i) {
        var n = i.startChild({
          data: v(v({}, e.fetchData), { type: 'fetch' }),
          description: e.fetchData.method + ' ' + e.fetchData.url,
          op: 'http',
        })
        ;(e.fetchData.__span = n.spanId), (r[n.spanId] = n)
        var o = (e.args[0] = e.args[0]),
          a = (e.args[1] = e.args[1] || {}),
          s = a.headers
        me(o, Request) && (s = o.headers),
          s
            ? typeof s.append == 'function'
              ? s.append('sentry-trace', n.toTraceparent())
              : Array.isArray(s)
              ? (s = b(s, [['sentry-trace', n.toTraceparent()]]))
              : (s = v(v({}, s), { 'sentry-trace': n.toTraceparent() }))
            : (s = { 'sentry-trace': n.toTraceparent() }),
          (a.headers = s)
      }
    }
  }
  function Yy(e, t, r) {
    var n, i
    if (
      !(
        !xi() ||
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
      var s = vr()
      if (s) {
        var a = s.startChild({
          data: v(v({}, o.data), { type: 'xhr', method: o.method, url: o.url }),
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
  var Ti = P()
  function Bm(e, t, r) {
    if ((t === void 0 && (t = !0), r === void 0 && (r = !0), !Ti || !Ti.location)) {
      S.warn('Could not initialize routing instrumentation due to invalid location')
      return
    }
    var n = Ti.location.href,
      i
    t && (i = e({ name: Ti.location.pathname, op: 'pageload' })),
      r &&
        J({
          callback: function (o) {
            var a = o.to,
              s = o.from
            if (s === void 0 && n && n.indexOf(a) !== -1) {
              n = void 0
              return
            }
            s !== a &&
              ((n = void 0),
              i && (S.log('[Tracing] Finishing current transaction with op: ' + i.op), i.finish()),
              (i = e({ name: Ti.location.pathname, op: 'navigation' })))
          },
          type: 'history',
        })
  }
  var Ky = 600,
    Xy = v(
      {
        idleTimeout: Il,
        markBackgroundTransactions: !0,
        maxTransactionDuration: Ky,
        routingInstrumentation: Bm,
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
      },
      ki
    ),
    bl = (function () {
      function e(t) {
        ;(this.name = e.id), (this._metrics = new Hm()), (this._emitOptionsWarning = !1)
        var r = ki.tracingOrigins
        t && t.tracingOrigins && Array.isArray(t.tracingOrigins) && t.tracingOrigins.length !== 0
          ? (r = t.tracingOrigins)
          : (this._emitOptionsWarning = !0),
          (this.options = v(v(v({}, Xy), t), { tracingOrigins: r }))
      }
      return (
        (e.prototype.setupOnce = function (t, r) {
          var n = this
          ;(this._getCurrentHub = r),
            this._emitOptionsWarning &&
              (S.warn(
                '[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace.'
              ),
              S.warn('[Tracing] We added a reasonable default for you: ' + ki.tracingOrigins))
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
            u && Pm(),
            zm({ traceFetch: l, traceXHR: c, tracingOrigins: m, shouldCreateSpanForRequest: h })
        }),
        (e.prototype._createRouteTransaction = function (t) {
          var r = this
          if (!this._getCurrentHub) {
            S.warn('[Tracing] Did not create ' + t.op + ' transaction because _getCurrentHub is invalid.')
            return
          }
          var n = this.options,
            i = n.beforeNavigate,
            o = n.idleTimeout,
            a = n.maxTransactionDuration,
            s = t.op === 'pageload' ? Qy() : void 0,
            u = v(v(v({}, t), s), { trimEnd: !0 }),
            l = typeof i == 'function' ? i(u) : u,
            c = l === void 0 ? v(v({}, u), { sampled: !1 }) : l
          c.sampled === !1 && S.log('[Tracing] Will not send ' + c.op + ' transaction because of beforeNavigate.'),
            S.log('[Tracing] Starting ' + c.op + ' transaction on scope')
          var m = this._getCurrentHub(),
            h = P().location,
            _ = Rm(m, c, o, !0, { location: h })
          return (
            _.registerBeforeFinishCallback(function (w, E) {
              r._metrics.addPerformanceEntries(w), Zy(xm(a), w, E)
            }),
            _
          )
        }),
        (e.id = 'BrowserTracing'),
        e
      )
    })()
  function Qy() {
    var e = Jy('sentry-trace')
    if (e) return Em(e)
  }
  function Jy(e) {
    var t = document.querySelector('meta[name=' + e + ']')
    return t ? t.getAttribute('content') : null
  }
  function Zy(e, t, r) {
    var n = r - t.startTimestamp,
      i = r && (n > e || n < 0)
    i && (t.setStatus(K.DeadlineExceeded), t.setTag('maxTransactionDurationExceeded', 'true'))
  }
  var Rl = {}
  Dl(Rl, { Express: () => Wm, Mongo: () => Gm, Mysql: () => $m, Postgres: () => qm })
  var Wm = (function () {
    function e(t) {
      t === void 0 && (t = {}),
        (this.name = e.id),
        (this._router = t.router || t.app),
        (this._methods = (Array.isArray(t.methods) ? t.methods : []).concat('use'))
    }
    return (
      (e.prototype.setupOnce = function () {
        if (!this._router) {
          S.error('ExpressIntegration is missing an Express instance')
          return
        }
        r_(this._router, this._methods)
      }),
      (e.id = 'Express'),
      e
    )
  })()
  function Vm(e, t) {
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
            ;(m = u) === null || m === void 0 || m.finish(), o.call.apply(o, b([this], l))
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
            ;(h = l) === null || h === void 0 || h.finish(), a.call.apply(a, b([this], c))
          })
        }
      default:
        throw new Error('Express middleware takes 2-4 arguments. Got: ' + r)
    }
  }
  function e_(e, t) {
    return e.map(function (r) {
      return typeof r == 'function'
        ? Vm(r, t)
        : Array.isArray(r)
        ? r.map(function (n) {
            return typeof n == 'function' ? Vm(n, t) : n
          })
        : r
    })
  }
  function t_(e, t) {
    var r = e[t]
    return (
      (e[t] = function () {
        for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
        return r.call.apply(r, b([this], e_(n, t)))
      }),
      e
    )
  }
  function r_(e, t) {
    t === void 0 && (t = []),
      t.forEach(function (r) {
        return t_(e, r)
      })
  }
  var qm = (function () {
    function e() {
      this.name = e.id
    }
    return (
      (e.prototype.setupOnce = function (t, r) {
        var n = zt('pg')
        if (!n) {
          S.error('Postgres Integration was unable to require `pg` package.')
          return
        }
        B(n.Client.prototype, 'query', function (i) {
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
              return i.call(this, o, a, function (E, p) {
                var f
                ;(f = _) === null || f === void 0 || f.finish(), s(E, p)
              })
            if (typeof a == 'function')
              return i.call(this, o, function (E, p) {
                var f
                ;(f = _) === null || f === void 0 || f.finish(), a(E, p)
              })
            var w = typeof a != 'undefined' ? i.call(this, o, a) : i.call(this, o)
            return Ze(w)
              ? w.then(function (E) {
                  var p
                  return (p = _) === null || p === void 0 || p.finish(), E
                })
              : ((c = _) === null || c === void 0 || c.finish(), w)
          }
        })
      }),
      (e.id = 'Postgres'),
      e
    )
  })()
  var $m = (function () {
    function e() {
      this.name = e.id
    }
    return (
      (e.prototype.setupOnce = function (t, r) {
        var n = zt('mysql/lib/Connection.js')
        if (!n) {
          S.error('Mysql Integration was unable to require `mysql` package.')
          return
        }
        B(n, 'createQuery', function (i) {
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
              ? i.call(this, o, a, function (_, w, E) {
                  var p
                  ;(p = h) === null || p === void 0 || p.finish(), s(_, w, E)
                })
              : typeof a == 'function'
              ? i.call(this, o, function (_, w, E) {
                  var p
                  ;(p = h) === null || p === void 0 || p.finish(), a(_, w, E)
                })
              : i.call(this, o, a, s)
          }
        })
      }),
      (e.id = 'Mysql'),
      e
    )
  })()
  var n_ = [
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
    i_ = {
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
    Gm = (function () {
      function e(t) {
        t === void 0 && (t = {}),
          (this.name = e.id),
          (this._operations = Array.isArray(t.operations) ? t.operations : n_),
          (this._describeOperations = 'describeOperations' in t ? t.describeOperations : !0),
          (this._useMongoose = !!t.useMongoose)
      }
      return (
        (e.prototype.setupOnce = function (t, r) {
          var n = this._useMongoose ? 'mongoose' : 'mongodb',
            i = zt(n)
          if (!i) {
            S.error('Mongo Integration was unable to require `' + n + '` package.')
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
            B(t.prototype, r, function (o) {
              return function () {
                for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s]
                var u,
                  l,
                  c,
                  m,
                  h = a[a.length - 1],
                  _ = n().getScope(),
                  w = (u = _) === null || u === void 0 ? void 0 : u.getSpan()
                if (typeof h != 'function' || (r === 'mapReduce' && a.length === 2)) {
                  var E = (l = w) === null || l === void 0 ? void 0 : l.startChild(i(this, r, a)),
                    p = o.call.apply(o, b([this], a))
                  return Ze(p)
                    ? p.then(function (d) {
                        var g
                        return (g = E) === null || g === void 0 || g.finish(), d
                      })
                    : ((c = E) === null || c === void 0 || c.finish(), p)
                }
                var f = (m = w) === null || m === void 0 ? void 0 : m.startChild(i(this, r, a.slice(0, -1)))
                return o.call.apply(
                  o,
                  b([this], a.slice(0, -1), [
                    function (d, g) {
                      var y
                      ;(y = f) === null || y === void 0 || y.finish(), h(d, g)
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
            a = i_[r],
            s = Array.isArray(this._describeOperations)
              ? this._describeOperations.includes(r)
              : this._describeOperations
          if (!a || !s) return o
          try {
            if (r === 'mapReduce') {
              var u = Wo(n, 2),
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
  var Ym = v(v({}, Rl), { BrowserTracing: bl })
  Nm()
  var O = rt(yt())
  var Be = rt(yt()),
    Nl = (0, Be.createContext)({ ctx: {}, auth: {}, config: { broadcaster: {} } }),
    o_ = ({ children: e }) => {
      let [t, r] = (0, Be.useState)({}),
        [n, i] = (0, Be.useState)({}),
        [o, a] = (0, Be.useState)({ broadcaster: {} }),
        [s, u] = (0, Be.useState)()
      return (
        (0, Be.useEffect)(() => {
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
        Be.default.createElement(Nl.Provider, { value: { ctx: t, auth: n, config: o, twitch: s } }, e)
      )
    },
    Km = o_
  var vt = rt(yt()),
    Xm = () => {},
    a_ = typeof window != 'undefined',
    s_ = (e, t, r) => {
      if (!a_) return [t, Xm, Xm]
      if (!e) throw new Error('useLocalStorage key may not be falsy')
      let n = r ? (r.raw ? (l) => l : r.deserializer) : JSON.parse,
        i = (0, vt.useRef)((l) => {
          try {
            let c = r ? (r.raw ? String : r.serializer) : JSON.stringify,
              m = localStorage.getItem(l)
            return m !== null ? n(m) : (t && localStorage.setItem(l, c(t)), t)
          } catch (c) {
            return t
          }
        }),
        [o, a] = (0, vt.useState)(() => i.current(e))
      ;(0, vt.useLayoutEffect)(() => a(i.current(e)), [e])
      let s = (0, vt.useCallback)(
          (l) => {
            try {
              let c = typeof l == 'function' ? l(o) : l
              if (typeof c == 'undefined') return
              let m
              r
                ? r.raw
                  ? typeof c == 'string'
                    ? (m = c)
                    : (m = JSON.stringify(c))
                  : r.serializer
                  ? (m = r.serializer(c))
                  : (m = JSON.stringify(c))
                : (m = JSON.stringify(c)),
                localStorage.setItem(e, m),
                a(n(m))
            } catch (c) {}
          },
          [e, a]
        ),
        u = (0, vt.useCallback)(() => {
          try {
            localStorage.removeItem(e), a(void 0)
          } catch (l) {}
        }, [e, a])
      return [o, s, u]
    },
    Qm = s_
  function Pl() {
    let { twitch: e, config: t } = (0, O.useContext)(Nl),
      [r, n] = (0, O.useState)(!1),
      [i, o] = (0, O.useState)(''),
      [a, s] = (0, O.useState)(() => t.broadcaster.apiKey || ''),
      [u, l] = (0, O.useState)(() => t.broadcaster.character || ''),
      [c, m] = (0, O.useState)(() => t.broadcaster.gamemode || 'pve'),
      [h, _] = Qm('twitch-gw2-build-characters-v1', {}),
      w = (0, O.useMemo)(() => (h || {})[a] || [], [a, h])
    ;(0, O.useEffect)(() => {
      a || s(t.broadcaster.apiKey || a)
    }, [a, t.broadcaster.apiKey]),
      (0, O.useEffect)(() => {
        u || l(t.broadcaster.character || u)
      }, [u, t.broadcaster.character]),
      (0, O.useEffect)(() => {
        m(t.broadcaster.gamemode || c)
      }, [c, t.broadcaster.gamemode])
    let E = (0, O.useCallback)(
      async (d) => {
        try {
          if (!d) throw new Error('No API Key')
          try {
            o('')
            let g = await fetch(
              `https://api.guildwars2.com/v2/characters?access_token=${encodeURIComponent(d)}&ids=all`
            )
            if (g.ok) {
              let y = await g.json()
              _((I) => xa(Ea({}, I), { [d]: y }))
            } else throw new Error('There was a problem getting characters')
          } catch (g) {
            throw new Error('There was a problem getting characters')
          }
        } catch (g) {
          o(g.message)
        }
      },
      [_]
    )
    ;(0, O.useEffect)(() => {
      E(a)
    }, [a, E])
    let p = (0, O.useCallback)(
        (d) => {
          var y
          n(!1), d.preventDefault()
          let g = xa(Ea({}, t.broadcaster), {
            apiKey: (a || '').trim(),
            character: (u || ((y = w[0]) == null ? void 0 : y.name) || '').trim(),
            gamemode: (c || 'pve').trim().toLowerCase(),
          })
          e.configuration.set('broadcaster', '1.0', JSON.stringify(g)), n(!0)
        },
        [a, u, c, t.broadcaster, e, w, n]
      ),
      f = (0, O.useRef)(null)
    return O.default.createElement(
      'div',
      null,
      O.default.createElement('h2', null, 'Config'),
      O.default.createElement(
        'small',
        { style: { position: 'relative', top: -5 } },
        'After making changes here, make sure to save, and then you will need to refresh to see them.'
      ),
      O.default.createElement(
        'form',
        { ref: f, onSubmit: p, style: { flexDirection: 'column', display: 'flex', gap: 10 } },
        O.default.createElement(
          'div',
          { style: { flexDirection: 'column', display: 'flex', gap: 2 } },
          O.default.createElement('input', {
            name: 'apiKey',
            placeholder: 'API key...',
            value: a,
            onChange: (d) => s(d.target.value),
          }),
          O.default.createElement(
            'small',
            null,
            'You can get an API key from',
            ' ',
            O.default.createElement(
              'a',
              {
                href: 'https://account.arena.net/applications',
                style: { color: 'lightblue', textDecoration: 'underline' },
                target: '_blank',
                rel: 'noreferer noorigin noreferrer',
              },
              'here'
            ),
            ', with the "account", "characters", "unlocks", and "builds" permissions.'
          )
        ),
        O.default.createElement(
          'div',
          { style: { flexDirection: 'column', display: 'flex', gap: 2 } },
          O.default.createElement(
            'select',
            { name: 'character', value: u, onChange: (d) => l(d.target.value) },
            w.length === 0 ? O.default.createElement('option', { disabled: !0 }, 'Loading...') : null,
            w.map((d) => O.default.createElement('option', { key: d.name, value: d.name }, d.name))
          ),
          O.default.createElement(
            'small',
            null,
            `Guild Wars 2 doesn't let us know current character, so you have to set it manually. Add an API Key and press "Fetch Characters" to load the possible characters.`
          )
        ),
        O.default.createElement(
          'div',
          { style: { flexDirection: 'column', display: 'flex', gap: 2 } },
          O.default.createElement(
            'select',
            { name: 'gamemode', value: c, onChange: (d) => m(d.target.value) },
            O.default.createElement('option', { value: 'pve' }, 'PvE'),
            O.default.createElement('option', { value: 'pvp' }, 'PvP'),
            O.default.createElement('option', { value: 'wvw' }, 'WvW')
          ),
          O.default.createElement('small', null, 'This is the gamemode you want to show information for.')
        ),
        O.default.createElement(
          'div',
          { style: { display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 10 } },
          O.default.createElement('button', { type: 'submit' }, 'Save'),
          O.default.createElement(
            'button',
            {
              type: 'button',
              onClick: () => {
                var g
                o('')
                let d = ((g = f.current) == null ? void 0 : g.elements).apiKey.value
                if (!d) {
                  o('Requires an API key')
                  return
                }
                E(d)
              },
            },
            'Fetch Characters'
          ),
          O.default.createElement(
            'button',
            {
              type: 'reset',
              onClick: () => {
                n(!1), e.configuration.set('broadcaster', '1.0', JSON.stringify({})), n(!0)
              },
            },
            'Clear'
          )
        ),
        O.default.createElement(
          'div',
          {
            style: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 5 },
          },
          r
            ? O.default.createElement(
                'div',
                {
                  style: {
                    backgroundColor: '#34D399',
                    border: '1px solid #065F46',
                    color: '#065F46',
                    display: 'inline-block',
                    padding: '2px 5px',
                    borderRadius: '0.3rem',
                  },
                },
                'Saved'
              )
            : null,
          i
            ? O.default.createElement(
                'div',
                {
                  style: {
                    backgroundColor: '#F87171',
                    border: '1px solid #991B1B',
                    color: '#991B1B',
                    display: 'inline-block',
                    padding: '2px 5px',
                    borderRadius: '0.3rem',
                  },
                },
                'Error: ',
                i
              )
            : null
        )
      )
    )
  }
  var yr = rt(yt())
  function u_(e) {
    return (
      console.info(e),
      yr.default.createElement(
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
        yr.default.createElement('p', null, 'An error has occured'),
        yr.default.createElement('p', null, 'Error ID: ', e.eventId),
        yr.default.createElement(
          'a',
          null,
          'Get in contact with me on',
          ' ',
          yr.default.createElement(
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
  var l_ = ({ children: e }) => yr.default.createElement(Ol, { fallback: u_ }, e),
    Jm = l_
  var Zm = '1.0.1'
  console.info('[mount] Config')
  try {
    Sl({
      dsn: 'https://0ab1a10c55b14007992ed1217eb9e9e9@o304997.ingest.sentry.io/5845657',
      integrations: [new Ym.BrowserTracing()],
      tracesSampleRate: 1,
      release: Zm,
      environment: 'production',
    })
  } catch (e) {
    console.error('[sentry]', e)
  }
  eh.default.render(
    wa.default.createElement(Jm, null, wa.default.createElement(Km, null, wa.default.createElement(Pl, null))),
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
//# sourceMappingURL=config.js.map
