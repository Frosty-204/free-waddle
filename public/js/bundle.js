(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all3) => {
    for (var name in all3)
      __defProp(target, name, { get: all3[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/core-js/modules/_global.js
  var require_global = __commonJS({
    "node_modules/core-js/modules/_global.js"(exports, module) {
      var global2 = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
      if (typeof __g == "number")
        __g = global2;
    }
  });

  // node_modules/core-js/modules/_has.js
  var require_has = __commonJS({
    "node_modules/core-js/modules/_has.js"(exports, module) {
      var hasOwnProperty2 = {}.hasOwnProperty;
      module.exports = function(it, key) {
        return hasOwnProperty2.call(it, key);
      };
    }
  });

  // node_modules/core-js/modules/_fails.js
  var require_fails = __commonJS({
    "node_modules/core-js/modules/_fails.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/modules/_descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js/modules/_descriptors.js"(exports, module) {
      module.exports = !require_fails()(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }
  });

  // node_modules/core-js/modules/_core.js
  var require_core = __commonJS({
    "node_modules/core-js/modules/_core.js"(exports, module) {
      var core = module.exports = { version: "2.6.12" };
      if (typeof __e == "number")
        __e = core;
    }
  });

  // node_modules/core-js/modules/_is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js/modules/_is-object.js"(exports, module) {
      module.exports = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };
    }
  });

  // node_modules/core-js/modules/_an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js/modules/_an-object.js"(exports, module) {
      var isObject3 = require_is_object();
      module.exports = function(it) {
        if (!isObject3(it))
          throw TypeError(it + " is not an object!");
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_dom-create.js
  var require_dom_create = __commonJS({
    "node_modules/core-js/modules/_dom-create.js"(exports, module) {
      var isObject3 = require_is_object();
      var document2 = require_global().document;
      var is = isObject3(document2) && isObject3(document2.createElement);
      module.exports = function(it) {
        return is ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/modules/_ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js/modules/_ie8-dom-define.js"(exports, module) {
      module.exports = !require_descriptors() && !require_fails()(function() {
        return Object.defineProperty(require_dom_create()("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }
  });

  // node_modules/core-js/modules/_to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js/modules/_to-primitive.js"(exports, module) {
      var isObject3 = require_is_object();
      module.exports = function(it, S) {
        if (!isObject3(it))
          return it;
        var fn2, val;
        if (S && typeof (fn2 = it.toString) == "function" && !isObject3(val = fn2.call(it)))
          return val;
        if (typeof (fn2 = it.valueOf) == "function" && !isObject3(val = fn2.call(it)))
          return val;
        if (!S && typeof (fn2 = it.toString) == "function" && !isObject3(val = fn2.call(it)))
          return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/modules/_object-dp.js
  var require_object_dp = __commonJS({
    "node_modules/core-js/modules/_object-dp.js"(exports) {
      var anObject = require_an_object();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var toPrimitive = require_to_primitive();
      var dP = Object.defineProperty;
      exports.f = require_descriptors() ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return dP(O, P, Attributes);
          } catch (e) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError("Accessors not supported!");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/modules/_property-desc.js
  var require_property_desc = __commonJS({
    "node_modules/core-js/modules/_property-desc.js"(exports, module) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/modules/_hide.js
  var require_hide = __commonJS({
    "node_modules/core-js/modules/_hide.js"(exports, module) {
      var dP = require_object_dp();
      var createDesc = require_property_desc();
      module.exports = require_descriptors() ? function(object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/modules/_uid.js
  var require_uid = __commonJS({
    "node_modules/core-js/modules/_uid.js"(exports, module) {
      var id = 0;
      var px = Math.random();
      module.exports = function(key) {
        return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
      };
    }
  });

  // node_modules/core-js/modules/_library.js
  var require_library = __commonJS({
    "node_modules/core-js/modules/_library.js"(exports, module) {
      module.exports = false;
    }
  });

  // node_modules/core-js/modules/_shared.js
  var require_shared = __commonJS({
    "node_modules/core-js/modules/_shared.js"(exports, module) {
      var core = require_core();
      var global2 = require_global();
      var SHARED = "__core-js_shared__";
      var store = global2[SHARED] || (global2[SHARED] = {});
      (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== void 0 ? value : {});
      })("versions", []).push({
        version: core.version,
        mode: require_library() ? "pure" : "global",
        copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
      });
    }
  });

  // node_modules/core-js/modules/_function-to-string.js
  var require_function_to_string = __commonJS({
    "node_modules/core-js/modules/_function-to-string.js"(exports, module) {
      module.exports = require_shared()("native-function-to-string", Function.toString);
    }
  });

  // node_modules/core-js/modules/_redefine.js
  var require_redefine = __commonJS({
    "node_modules/core-js/modules/_redefine.js"(exports, module) {
      var global2 = require_global();
      var hide2 = require_hide();
      var has = require_has();
      var SRC = require_uid()("src");
      var $toString = require_function_to_string();
      var TO_STRING = "toString";
      var TPL = ("" + $toString).split(TO_STRING);
      require_core().inspectSource = function(it) {
        return $toString.call(it);
      };
      (module.exports = function(O, key, val, safe) {
        var isFunction2 = typeof val == "function";
        if (isFunction2)
          has(val, "name") || hide2(val, "name", key);
        if (O[key] === val)
          return;
        if (isFunction2)
          has(val, SRC) || hide2(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
        if (O === global2) {
          O[key] = val;
        } else if (!safe) {
          delete O[key];
          hide2(O, key, val);
        } else if (O[key]) {
          O[key] = val;
        } else {
          hide2(O, key, val);
        }
      })(Function.prototype, TO_STRING, function toString3() {
        return typeof this == "function" && this[SRC] || $toString.call(this);
      });
    }
  });

  // node_modules/core-js/modules/_a-function.js
  var require_a_function = __commonJS({
    "node_modules/core-js/modules/_a-function.js"(exports, module) {
      module.exports = function(it) {
        if (typeof it != "function")
          throw TypeError(it + " is not a function!");
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_ctx.js
  var require_ctx = __commonJS({
    "node_modules/core-js/modules/_ctx.js"(exports, module) {
      var aFunction = require_a_function();
      module.exports = function(fn2, that, length) {
        aFunction(fn2);
        if (that === void 0)
          return fn2;
        switch (length) {
          case 1:
            return function(a) {
              return fn2.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn2.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn2.call(that, a, b, c);
            };
        }
        return function() {
          return fn2.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js/modules/_export.js
  var require_export = __commonJS({
    "node_modules/core-js/modules/_export.js"(exports, module) {
      var global2 = require_global();
      var core = require_core();
      var hide2 = require_hide();
      var redefine = require_redefine();
      var ctx = require_ctx();
      var PROTOTYPE = "prototype";
      var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? global2 : IS_STATIC ? global2[name] || (global2[name] = {}) : (global2[name] || {})[PROTOTYPE];
        var exports2 = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports2[PROTOTYPE] || (exports2[PROTOTYPE] = {});
        var key, own, out, exp;
        if (IS_GLOBAL)
          source = name;
        for (key in source) {
          own = !IS_FORCED && target && target[key] !== void 0;
          out = (own ? target : source)[key];
          exp = IS_BIND && own ? ctx(out, global2) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
          if (target)
            redefine(target, key, out, type & $export.U);
          if (exports2[key] != out)
            hide2(exports2, key, exp);
          if (IS_PROTO && expProto[key] != out)
            expProto[key] = out;
        }
      };
      global2.core = core;
      $export.F = 1;
      $export.G = 2;
      $export.S = 4;
      $export.P = 8;
      $export.B = 16;
      $export.W = 32;
      $export.U = 64;
      $export.R = 128;
      module.exports = $export;
    }
  });

  // node_modules/core-js/modules/_meta.js
  var require_meta = __commonJS({
    "node_modules/core-js/modules/_meta.js"(exports, module) {
      var META = require_uid()("meta");
      var isObject3 = require_is_object();
      var has = require_has();
      var setDesc = require_object_dp().f;
      var id = 0;
      var isExtensible = Object.isExtensible || function() {
        return true;
      };
      var FREEZE = !require_fails()(function() {
        return isExtensible(Object.preventExtensions({}));
      });
      var setMeta = function(it) {
        setDesc(it, META, { value: {
          i: "O" + ++id,
          // object ID
          w: {}
          // weak collections IDs
        } });
      };
      var fastKey = function(it, create) {
        if (!isObject3(it))
          return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
        if (!has(it, META)) {
          if (!isExtensible(it))
            return "F";
          if (!create)
            return "E";
          setMeta(it);
        }
        return it[META].i;
      };
      var getWeak = function(it, create) {
        if (!has(it, META)) {
          if (!isExtensible(it))
            return true;
          if (!create)
            return false;
          setMeta(it);
        }
        return it[META].w;
      };
      var onFreeze = function(it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
          setMeta(it);
        return it;
      };
      var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey,
        getWeak,
        onFreeze
      };
    }
  });

  // node_modules/core-js/modules/_wks.js
  var require_wks = __commonJS({
    "node_modules/core-js/modules/_wks.js"(exports, module) {
      var store = require_shared()("wks");
      var uid = require_uid();
      var Symbol2 = require_global().Symbol;
      var USE_SYMBOL = typeof Symbol2 == "function";
      var $exports = module.exports = function(name) {
        return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
      };
      $exports.store = store;
    }
  });

  // node_modules/core-js/modules/_set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "node_modules/core-js/modules/_set-to-string-tag.js"(exports, module) {
      var def = require_object_dp().f;
      var has = require_has();
      var TAG = require_wks()("toStringTag");
      module.exports = function(it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG))
          def(it, TAG, { configurable: true, value: tag });
      };
    }
  });

  // node_modules/core-js/modules/_wks-ext.js
  var require_wks_ext = __commonJS({
    "node_modules/core-js/modules/_wks-ext.js"(exports) {
      exports.f = require_wks();
    }
  });

  // node_modules/core-js/modules/_wks-define.js
  var require_wks_define = __commonJS({
    "node_modules/core-js/modules/_wks-define.js"(exports, module) {
      var global2 = require_global();
      var core = require_core();
      var LIBRARY = require_library();
      var wksExt = require_wks_ext();
      var defineProperty = require_object_dp().f;
      module.exports = function(name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global2.Symbol || {});
        if (name.charAt(0) != "_" && !(name in $Symbol))
          defineProperty($Symbol, name, { value: wksExt.f(name) });
      };
    }
  });

  // node_modules/core-js/modules/_cof.js
  var require_cof = __commonJS({
    "node_modules/core-js/modules/_cof.js"(exports, module) {
      var toString3 = {}.toString;
      module.exports = function(it) {
        return toString3.call(it).slice(8, -1);
      };
    }
  });

  // node_modules/core-js/modules/_iobject.js
  var require_iobject = __commonJS({
    "node_modules/core-js/modules/_iobject.js"(exports, module) {
      var cof = require_cof();
      module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
        return cof(it) == "String" ? it.split("") : Object(it);
      };
    }
  });

  // node_modules/core-js/modules/_defined.js
  var require_defined = __commonJS({
    "node_modules/core-js/modules/_defined.js"(exports, module) {
      module.exports = function(it) {
        if (it == void 0)
          throw TypeError("Can't call method on  " + it);
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_to-iobject.js
  var require_to_iobject = __commonJS({
    "node_modules/core-js/modules/_to-iobject.js"(exports, module) {
      var IObject = require_iobject();
      var defined = require_defined();
      module.exports = function(it) {
        return IObject(defined(it));
      };
    }
  });

  // node_modules/core-js/modules/_to-integer.js
  var require_to_integer = __commonJS({
    "node_modules/core-js/modules/_to-integer.js"(exports, module) {
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    }
  });

  // node_modules/core-js/modules/_to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js/modules/_to-length.js"(exports, module) {
      var toInteger = require_to_integer();
      var min2 = Math.min;
      module.exports = function(it) {
        return it > 0 ? min2(toInteger(it), 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js/modules/_to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js/modules/_to-absolute-index.js"(exports, module) {
      var toInteger = require_to_integer();
      var max2 = Math.max;
      var min2 = Math.min;
      module.exports = function(index, length) {
        index = toInteger(index);
        return index < 0 ? max2(index + length, 0) : min2(index, length);
      };
    }
  });

  // node_modules/core-js/modules/_array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js/modules/_array-includes.js"(exports, module) {
      var toIObject = require_to_iobject();
      var toLength = require_to_length();
      var toAbsoluteIndex = require_to_absolute_index();
      module.exports = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value)
                return true;
            }
          else
            for (; length > index; index++)
              if (IS_INCLUDES || index in O) {
                if (O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
          return !IS_INCLUDES && -1;
        };
      };
    }
  });

  // node_modules/core-js/modules/_shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js/modules/_shared-key.js"(exports, module) {
      var shared = require_shared()("keys");
      var uid = require_uid();
      module.exports = function(key) {
        return shared[key] || (shared[key] = uid(key));
      };
    }
  });

  // node_modules/core-js/modules/_object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js/modules/_object-keys-internal.js"(exports, module) {
      var has = require_has();
      var toIObject = require_to_iobject();
      var arrayIndexOf = require_array_includes()(false);
      var IE_PROTO = require_shared_key()("IE_PROTO");
      module.exports = function(object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O)
          if (key != IE_PROTO)
            has(O, key) && result.push(key);
        while (names.length > i)
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        return result;
      };
    }
  });

  // node_modules/core-js/modules/_enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js/modules/_enum-bug-keys.js"(exports, module) {
      module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }
  });

  // node_modules/core-js/modules/_object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js/modules/_object-keys.js"(exports, module) {
      var $keys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };
    }
  });

  // node_modules/core-js/modules/_object-gops.js
  var require_object_gops = __commonJS({
    "node_modules/core-js/modules/_object-gops.js"(exports) {
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js/modules/_object-pie.js
  var require_object_pie = __commonJS({
    "node_modules/core-js/modules/_object-pie.js"(exports) {
      exports.f = {}.propertyIsEnumerable;
    }
  });

  // node_modules/core-js/modules/_enum-keys.js
  var require_enum_keys = __commonJS({
    "node_modules/core-js/modules/_enum-keys.js"(exports, module) {
      var getKeys = require_object_keys();
      var gOPS = require_object_gops();
      var pIE = require_object_pie();
      module.exports = function(it) {
        var result = getKeys(it);
        var getSymbols = gOPS.f;
        if (getSymbols) {
          var symbols = getSymbols(it);
          var isEnum = pIE.f;
          var i = 0;
          var key;
          while (symbols.length > i)
            if (isEnum.call(it, key = symbols[i++]))
              result.push(key);
        }
        return result;
      };
    }
  });

  // node_modules/core-js/modules/_is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js/modules/_is-array.js"(exports, module) {
      var cof = require_cof();
      module.exports = Array.isArray || function isArray2(arg) {
        return cof(arg) == "Array";
      };
    }
  });

  // node_modules/core-js/modules/_to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js/modules/_to-object.js"(exports, module) {
      var defined = require_defined();
      module.exports = function(it) {
        return Object(defined(it));
      };
    }
  });

  // node_modules/core-js/modules/_object-dps.js
  var require_object_dps = __commonJS({
    "node_modules/core-js/modules/_object-dps.js"(exports, module) {
      var dP = require_object_dp();
      var anObject = require_an_object();
      var getKeys = require_object_keys();
      module.exports = require_descriptors() ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = getKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;
        while (length > i)
          dP.f(O, P = keys[i++], Properties[P]);
        return O;
      };
    }
  });

  // node_modules/core-js/modules/_html.js
  var require_html = __commonJS({
    "node_modules/core-js/modules/_html.js"(exports, module) {
      var document2 = require_global().document;
      module.exports = document2 && document2.documentElement;
    }
  });

  // node_modules/core-js/modules/_object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js/modules/_object-create.js"(exports, module) {
      var anObject = require_an_object();
      var dPs = require_object_dps();
      var enumBugKeys = require_enum_bug_keys();
      var IE_PROTO = require_shared_key()("IE_PROTO");
      var Empty = function() {
      };
      var PROTOTYPE = "prototype";
      var createDict = function() {
        var iframe = require_dom_create()("iframe");
        var i = enumBugKeys.length;
        var lt = "<";
        var gt = ">";
        var iframeDocument;
        iframe.style.display = "none";
        require_html().appendChild(iframe);
        iframe.src = "javascript:";
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--)
          delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
      };
      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null;
          result[IE_PROTO] = O;
        } else
          result = createDict();
        return Properties === void 0 ? result : dPs(result, Properties);
      };
    }
  });

  // node_modules/core-js/modules/_object-gopn.js
  var require_object_gopn = __commonJS({
    "node_modules/core-js/modules/_object-gopn.js"(exports) {
      var $keys = require_object_keys_internal();
      var hiddenKeys = require_enum_bug_keys().concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return $keys(O, hiddenKeys);
      };
    }
  });

  // node_modules/core-js/modules/_object-gopn-ext.js
  var require_object_gopn_ext = __commonJS({
    "node_modules/core-js/modules/_object-gopn-ext.js"(exports, module) {
      var toIObject = require_to_iobject();
      var gOPN = require_object_gopn().f;
      var toString3 = {}.toString;
      var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      var getWindowNames = function(it) {
        try {
          return gOPN(it);
        } catch (e) {
          return windowNames.slice();
        }
      };
      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString3.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
      };
    }
  });

  // node_modules/core-js/modules/_object-gopd.js
  var require_object_gopd = __commonJS({
    "node_modules/core-js/modules/_object-gopd.js"(exports) {
      var pIE = require_object_pie();
      var createDesc = require_property_desc();
      var toIObject = require_to_iobject();
      var toPrimitive = require_to_primitive();
      var has = require_has();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var gOPD = Object.getOwnPropertyDescriptor;
      exports.f = require_descriptors() ? gOPD : function getOwnPropertyDescriptor(O, P) {
        O = toIObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE)
          try {
            return gOPD(O, P);
          } catch (e) {
          }
        if (has(O, P))
          return createDesc(!pIE.f.call(O, P), O[P]);
      };
    }
  });

  // node_modules/core-js/modules/es6.symbol.js
  var require_es6_symbol = __commonJS({
    "node_modules/core-js/modules/es6.symbol.js"() {
      "use strict";
      var global2 = require_global();
      var has = require_has();
      var DESCRIPTORS = require_descriptors();
      var $export = require_export();
      var redefine = require_redefine();
      var META = require_meta().KEY;
      var $fails = require_fails();
      var shared = require_shared();
      var setToStringTag = require_set_to_string_tag();
      var uid = require_uid();
      var wks = require_wks();
      var wksExt = require_wks_ext();
      var wksDefine = require_wks_define();
      var enumKeys = require_enum_keys();
      var isArray2 = require_is_array();
      var anObject = require_an_object();
      var isObject3 = require_is_object();
      var toObject = require_to_object();
      var toIObject = require_to_iobject();
      var toPrimitive = require_to_primitive();
      var createDesc = require_property_desc();
      var _create = require_object_create();
      var gOPNExt = require_object_gopn_ext();
      var $GOPD = require_object_gopd();
      var $GOPS = require_object_gops();
      var $DP = require_object_dp();
      var $keys = require_object_keys();
      var gOPD = $GOPD.f;
      var dP = $DP.f;
      var gOPN = gOPNExt.f;
      var $Symbol = global2.Symbol;
      var $JSON = global2.JSON;
      var _stringify = $JSON && $JSON.stringify;
      var PROTOTYPE = "prototype";
      var HIDDEN = wks("_hidden");
      var TO_PRIMITIVE = wks("toPrimitive");
      var isEnum = {}.propertyIsEnumerable;
      var SymbolRegistry = shared("symbol-registry");
      var AllSymbols = shared("symbols");
      var OPSymbols = shared("op-symbols");
      var ObjectProto = Object[PROTOTYPE];
      var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
      var QObject = global2.QObject;
      var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
      var setSymbolDesc = DESCRIPTORS && $fails(function() {
        return _create(dP({}, "a", {
          get: function() {
            return dP(this, "a", { value: 7 }).a;
          }
        })).a != 7;
      }) ? function(it, key, D) {
        var protoDesc = gOPD(ObjectProto, key);
        if (protoDesc)
          delete ObjectProto[key];
        dP(it, key, D);
        if (protoDesc && it !== ObjectProto)
          dP(ObjectProto, key, protoDesc);
      } : dP;
      var wrap = function(tag) {
        var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
        sym._k = tag;
        return sym;
      };
      var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        return it instanceof $Symbol;
      };
      var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto)
          $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN))
              dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key])
              it[HIDDEN][key] = false;
            D = _create(D, { enumerable: createDesc(0, false) });
          }
          return setSymbolDesc(it, key, D);
        }
        return dP(it, key, D);
      };
      var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys(P = toIObject(P));
        var i = 0;
        var l = keys.length;
        var key;
        while (l > i)
          $defineProperty(it, key = keys[i++], P[key]);
        return it;
      };
      var $create = function create(it, P) {
        return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, key = toPrimitive(key, true));
        if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
          return false;
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
          return;
        var D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
          D.enumerable = true;
        return D;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = gOPN(toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)
            result.push(key);
        }
        return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectProto;
        var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))
            result.push(AllSymbols[key]);
        }
        return result;
      };
      if (!USE_NATIVE) {
        $Symbol = function Symbol2() {
          if (this instanceof $Symbol)
            throw TypeError("Symbol is not a constructor!");
          var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
          var $set = function(value) {
            if (this === ObjectProto)
              $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag))
              this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          };
          if (DESCRIPTORS && setter)
            setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
          return wrap(tag);
        };
        redefine($Symbol[PROTOTYPE], "toString", function toString3() {
          return this._k;
        });
        $GOPD.f = $getOwnPropertyDescriptor;
        $DP.f = $defineProperty;
        require_object_gopn().f = gOPNExt.f = $getOwnPropertyNames;
        require_object_pie().f = $propertyIsEnumerable;
        $GOPS.f = $getOwnPropertySymbols;
        if (DESCRIPTORS && !require_library()) {
          redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
        }
        wksExt.f = function(name) {
          return wrap(wks(name));
        };
      }
      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
      for (es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), j = 0; es6Symbols.length > j; )
        wks(es6Symbols[j++]);
      var es6Symbols;
      var j;
      for (wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; )
        wksDefine(wellKnownSymbols[k++]);
      var wellKnownSymbols;
      var k;
      $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
        // 19.4.2.1 Symbol.for(key)
        "for": function(key) {
          return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym))
            throw TypeError(sym + " is not a symbol!");
          for (var key in SymbolRegistry)
            if (SymbolRegistry[key] === sym)
              return key;
        },
        useSetter: function() {
          setter = true;
        },
        useSimple: function() {
          setter = false;
        }
      });
      $export($export.S + $export.F * !USE_NATIVE, "Object", {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols
      });
      var FAILS_ON_PRIMITIVES = $fails(function() {
        $GOPS.f(1);
      });
      $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
          return $GOPS.f(toObject(it));
        }
      });
      $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
        var S = $Symbol();
        return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
      })), "JSON", {
        stringify: function stringify2(it) {
          var args = [it];
          var i = 1;
          var replacer, $replacer;
          while (arguments.length > i)
            args.push(arguments[i++]);
          $replacer = replacer = args[1];
          if (!isObject3(replacer) && it === void 0 || isSymbol(it))
            return;
          if (!isArray2(replacer))
            replacer = function(key, value) {
              if (typeof $replacer == "function")
                value = $replacer.call(this, key, value);
              if (!isSymbol(value))
                return value;
            };
          args[1] = replacer;
          return _stringify.apply($JSON, args);
        }
      });
      $Symbol[PROTOTYPE][TO_PRIMITIVE] || require_hide()($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
      setToStringTag($Symbol, "Symbol");
      setToStringTag(Math, "Math", true);
      setToStringTag(global2.JSON, "JSON", true);
    }
  });

  // node_modules/core-js/modules/es6.object.create.js
  var require_es6_object_create = __commonJS({
    "node_modules/core-js/modules/es6.object.create.js"() {
      var $export = require_export();
      $export($export.S, "Object", { create: require_object_create() });
    }
  });

  // node_modules/core-js/modules/es6.object.define-property.js
  var require_es6_object_define_property = __commonJS({
    "node_modules/core-js/modules/es6.object.define-property.js"() {
      var $export = require_export();
      $export($export.S + $export.F * !require_descriptors(), "Object", { defineProperty: require_object_dp().f });
    }
  });

  // node_modules/core-js/modules/es6.object.define-properties.js
  var require_es6_object_define_properties = __commonJS({
    "node_modules/core-js/modules/es6.object.define-properties.js"() {
      var $export = require_export();
      $export($export.S + $export.F * !require_descriptors(), "Object", { defineProperties: require_object_dps() });
    }
  });

  // node_modules/core-js/modules/_object-sap.js
  var require_object_sap = __commonJS({
    "node_modules/core-js/modules/_object-sap.js"(exports, module) {
      var $export = require_export();
      var core = require_core();
      var fails = require_fails();
      module.exports = function(KEY, exec) {
        var fn2 = (core.Object || {})[KEY] || Object[KEY];
        var exp = {};
        exp[KEY] = exec(fn2);
        $export($export.S + $export.F * fails(function() {
          fn2(1);
        }), "Object", exp);
      };
    }
  });

  // node_modules/core-js/modules/es6.object.get-own-property-descriptor.js
  var require_es6_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/modules/es6.object.get-own-property-descriptor.js"() {
      var toIObject = require_to_iobject();
      var $getOwnPropertyDescriptor = require_object_gopd().f;
      require_object_sap()("getOwnPropertyDescriptor", function() {
        return function getOwnPropertyDescriptor(it, key) {
          return $getOwnPropertyDescriptor(toIObject(it), key);
        };
      });
    }
  });

  // node_modules/core-js/modules/_object-gpo.js
  var require_object_gpo = __commonJS({
    "node_modules/core-js/modules/_object-gpo.js"(exports, module) {
      var has = require_has();
      var toObject = require_to_object();
      var IE_PROTO = require_shared_key()("IE_PROTO");
      var ObjectProto = Object.prototype;
      module.exports = Object.getPrototypeOf || function(O) {
        O = toObject(O);
        if (has(O, IE_PROTO))
          return O[IE_PROTO];
        if (typeof O.constructor == "function" && O instanceof O.constructor) {
          return O.constructor.prototype;
        }
        return O instanceof Object ? ObjectProto : null;
      };
    }
  });

  // node_modules/core-js/modules/es6.object.get-prototype-of.js
  var require_es6_object_get_prototype_of = __commonJS({
    "node_modules/core-js/modules/es6.object.get-prototype-of.js"() {
      var toObject = require_to_object();
      var $getPrototypeOf = require_object_gpo();
      require_object_sap()("getPrototypeOf", function() {
        return function getPrototypeOf2(it) {
          return $getPrototypeOf(toObject(it));
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.keys.js
  var require_es6_object_keys = __commonJS({
    "node_modules/core-js/modules/es6.object.keys.js"() {
      var toObject = require_to_object();
      var $keys = require_object_keys();
      require_object_sap()("keys", function() {
        return function keys(it) {
          return $keys(toObject(it));
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.get-own-property-names.js
  var require_es6_object_get_own_property_names = __commonJS({
    "node_modules/core-js/modules/es6.object.get-own-property-names.js"() {
      require_object_sap()("getOwnPropertyNames", function() {
        return require_object_gopn_ext().f;
      });
    }
  });

  // node_modules/core-js/modules/es6.object.freeze.js
  var require_es6_object_freeze = __commonJS({
    "node_modules/core-js/modules/es6.object.freeze.js"() {
      var isObject3 = require_is_object();
      var meta = require_meta().onFreeze;
      require_object_sap()("freeze", function($freeze) {
        return function freeze(it) {
          return $freeze && isObject3(it) ? $freeze(meta(it)) : it;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.seal.js
  var require_es6_object_seal = __commonJS({
    "node_modules/core-js/modules/es6.object.seal.js"() {
      var isObject3 = require_is_object();
      var meta = require_meta().onFreeze;
      require_object_sap()("seal", function($seal) {
        return function seal(it) {
          return $seal && isObject3(it) ? $seal(meta(it)) : it;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.prevent-extensions.js
  var require_es6_object_prevent_extensions = __commonJS({
    "node_modules/core-js/modules/es6.object.prevent-extensions.js"() {
      var isObject3 = require_is_object();
      var meta = require_meta().onFreeze;
      require_object_sap()("preventExtensions", function($preventExtensions) {
        return function preventExtensions(it) {
          return $preventExtensions && isObject3(it) ? $preventExtensions(meta(it)) : it;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.is-frozen.js
  var require_es6_object_is_frozen = __commonJS({
    "node_modules/core-js/modules/es6.object.is-frozen.js"() {
      var isObject3 = require_is_object();
      require_object_sap()("isFrozen", function($isFrozen) {
        return function isFrozen(it) {
          return isObject3(it) ? $isFrozen ? $isFrozen(it) : false : true;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.is-sealed.js
  var require_es6_object_is_sealed = __commonJS({
    "node_modules/core-js/modules/es6.object.is-sealed.js"() {
      var isObject3 = require_is_object();
      require_object_sap()("isSealed", function($isSealed) {
        return function isSealed(it) {
          return isObject3(it) ? $isSealed ? $isSealed(it) : false : true;
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.object.is-extensible.js
  var require_es6_object_is_extensible = __commonJS({
    "node_modules/core-js/modules/es6.object.is-extensible.js"() {
      var isObject3 = require_is_object();
      require_object_sap()("isExtensible", function($isExtensible) {
        return function isExtensible(it) {
          return isObject3(it) ? $isExtensible ? $isExtensible(it) : true : false;
        };
      });
    }
  });

  // node_modules/core-js/modules/_object-assign.js
  var require_object_assign = __commonJS({
    "node_modules/core-js/modules/_object-assign.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var getKeys = require_object_keys();
      var gOPS = require_object_gops();
      var pIE = require_object_pie();
      var toObject = require_to_object();
      var IObject = require_iobject();
      var $assign = Object.assign;
      module.exports = !$assign || require_fails()(function() {
        var A = {};
        var B = {};
        var S = Symbol();
        var K = "abcdefghijklmnopqrst";
        A[S] = 7;
        K.split("").forEach(function(k) {
          B[k] = k;
        });
        return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
      }) ? function assign(target, source) {
        var T = toObject(target);
        var aLen = arguments.length;
        var index = 1;
        var getSymbols = gOPS.f;
        var isEnum = pIE.f;
        while (aLen > index) {
          var S = IObject(arguments[index++]);
          var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || isEnum.call(S, key))
              T[key] = S[key];
          }
        }
        return T;
      } : $assign;
    }
  });

  // node_modules/core-js/modules/es6.object.assign.js
  var require_es6_object_assign = __commonJS({
    "node_modules/core-js/modules/es6.object.assign.js"() {
      var $export = require_export();
      $export($export.S + $export.F, "Object", { assign: require_object_assign() });
    }
  });

  // node_modules/core-js/modules/_same-value.js
  var require_same_value = __commonJS({
    "node_modules/core-js/modules/_same-value.js"(exports, module) {
      module.exports = Object.is || function is(x, y) {
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
      };
    }
  });

  // node_modules/core-js/modules/es6.object.is.js
  var require_es6_object_is = __commonJS({
    "node_modules/core-js/modules/es6.object.is.js"() {
      var $export = require_export();
      $export($export.S, "Object", { is: require_same_value() });
    }
  });

  // node_modules/core-js/modules/_set-proto.js
  var require_set_proto = __commonJS({
    "node_modules/core-js/modules/_set-proto.js"(exports, module) {
      var isObject3 = require_is_object();
      var anObject = require_an_object();
      var check = function(O, proto) {
        anObject(O);
        if (!isObject3(proto) && proto !== null)
          throw TypeError(proto + ": can't set as prototype!");
      };
      module.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? (
          // eslint-disable-line
          function(test, buggy, set) {
            try {
              set = require_ctx()(Function.call, require_object_gopd().f(Object.prototype, "__proto__").set, 2);
              set(test, []);
              buggy = !(test instanceof Array);
            } catch (e) {
              buggy = true;
            }
            return function setPrototypeOf(O, proto) {
              check(O, proto);
              if (buggy)
                O.__proto__ = proto;
              else
                set(O, proto);
              return O;
            };
          }({}, false)
        ) : void 0),
        check
      };
    }
  });

  // node_modules/core-js/modules/es6.object.set-prototype-of.js
  var require_es6_object_set_prototype_of = __commonJS({
    "node_modules/core-js/modules/es6.object.set-prototype-of.js"() {
      var $export = require_export();
      $export($export.S, "Object", { setPrototypeOf: require_set_proto().set });
    }
  });

  // node_modules/core-js/modules/_classof.js
  var require_classof = __commonJS({
    "node_modules/core-js/modules/_classof.js"(exports, module) {
      var cof = require_cof();
      var TAG = require_wks()("toStringTag");
      var ARG = cof(/* @__PURE__ */ function() {
        return arguments;
      }()) == "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (e) {
        }
      };
      module.exports = function(it) {
        var O, T, B;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
      };
    }
  });

  // node_modules/core-js/modules/es6.object.to-string.js
  var require_es6_object_to_string = __commonJS({
    "node_modules/core-js/modules/es6.object.to-string.js"() {
      "use strict";
      var classof = require_classof();
      var test = {};
      test[require_wks()("toStringTag")] = "z";
      if (test + "" != "[object z]") {
        require_redefine()(Object.prototype, "toString", function toString3() {
          return "[object " + classof(this) + "]";
        }, true);
      }
    }
  });

  // node_modules/core-js/modules/_invoke.js
  var require_invoke = __commonJS({
    "node_modules/core-js/modules/_invoke.js"(exports, module) {
      module.exports = function(fn2, args, that) {
        var un = that === void 0;
        switch (args.length) {
          case 0:
            return un ? fn2() : fn2.call(that);
          case 1:
            return un ? fn2(args[0]) : fn2.call(that, args[0]);
          case 2:
            return un ? fn2(args[0], args[1]) : fn2.call(that, args[0], args[1]);
          case 3:
            return un ? fn2(args[0], args[1], args[2]) : fn2.call(that, args[0], args[1], args[2]);
          case 4:
            return un ? fn2(args[0], args[1], args[2], args[3]) : fn2.call(that, args[0], args[1], args[2], args[3]);
        }
        return fn2.apply(that, args);
      };
    }
  });

  // node_modules/core-js/modules/_bind.js
  var require_bind = __commonJS({
    "node_modules/core-js/modules/_bind.js"(exports, module) {
      "use strict";
      var aFunction = require_a_function();
      var isObject3 = require_is_object();
      var invoke = require_invoke();
      var arraySlice = [].slice;
      var factories = {};
      var construct = function(F, len, args) {
        if (!(len in factories)) {
          for (var n = [], i = 0; i < len; i++)
            n[i] = "a[" + i + "]";
          factories[len] = Function("F,a", "return new F(" + n.join(",") + ")");
        }
        return factories[len](F, args);
      };
      module.exports = Function.bind || function bind2(that) {
        var fn2 = aFunction(this);
        var partArgs = arraySlice.call(arguments, 1);
        var bound = function() {
          var args = partArgs.concat(arraySlice.call(arguments));
          return this instanceof bound ? construct(fn2, args.length, args) : invoke(fn2, args, that);
        };
        if (isObject3(fn2.prototype))
          bound.prototype = fn2.prototype;
        return bound;
      };
    }
  });

  // node_modules/core-js/modules/es6.function.bind.js
  var require_es6_function_bind = __commonJS({
    "node_modules/core-js/modules/es6.function.bind.js"() {
      var $export = require_export();
      $export($export.P, "Function", { bind: require_bind() });
    }
  });

  // node_modules/core-js/modules/es6.function.name.js
  var require_es6_function_name = __commonJS({
    "node_modules/core-js/modules/es6.function.name.js"() {
      var dP = require_object_dp().f;
      var FProto = Function.prototype;
      var nameRE = /^\s*function ([^ (]*)/;
      var NAME2 = "name";
      NAME2 in FProto || require_descriptors() && dP(FProto, NAME2, {
        configurable: true,
        get: function() {
          try {
            return ("" + this).match(nameRE)[1];
          } catch (e) {
            return "";
          }
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.function.has-instance.js
  var require_es6_function_has_instance = __commonJS({
    "node_modules/core-js/modules/es6.function.has-instance.js"() {
      "use strict";
      var isObject3 = require_is_object();
      var getPrototypeOf2 = require_object_gpo();
      var HAS_INSTANCE = require_wks()("hasInstance");
      var FunctionProto = Function.prototype;
      if (!(HAS_INSTANCE in FunctionProto))
        require_object_dp().f(FunctionProto, HAS_INSTANCE, { value: function(O) {
          if (typeof this != "function" || !isObject3(O))
            return false;
          if (!isObject3(this.prototype))
            return O instanceof this;
          while (O = getPrototypeOf2(O))
            if (this.prototype === O)
              return true;
          return false;
        } });
    }
  });

  // node_modules/core-js/modules/_string-ws.js
  var require_string_ws = __commonJS({
    "node_modules/core-js/modules/_string-ws.js"(exports, module) {
      module.exports = "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
    }
  });

  // node_modules/core-js/modules/_string-trim.js
  var require_string_trim = __commonJS({
    "node_modules/core-js/modules/_string-trim.js"(exports, module) {
      var $export = require_export();
      var defined = require_defined();
      var fails = require_fails();
      var spaces = require_string_ws();
      var space = "[" + spaces + "]";
      var non = "\u200B\x85";
      var ltrim = RegExp("^" + space + space + "*");
      var rtrim = RegExp(space + space + "*$");
      var exporter = function(KEY, exec, ALIAS) {
        var exp = {};
        var FORCE = fails(function() {
          return !!spaces[KEY]() || non[KEY]() != non;
        });
        var fn2 = exp[KEY] = FORCE ? exec(trim2) : spaces[KEY];
        if (ALIAS)
          exp[ALIAS] = fn2;
        $export($export.P + $export.F * FORCE, "String", exp);
      };
      var trim2 = exporter.trim = function(string, TYPE) {
        string = String(defined(string));
        if (TYPE & 1)
          string = string.replace(ltrim, "");
        if (TYPE & 2)
          string = string.replace(rtrim, "");
        return string;
      };
      module.exports = exporter;
    }
  });

  // node_modules/core-js/modules/_parse-int.js
  var require_parse_int = __commonJS({
    "node_modules/core-js/modules/_parse-int.js"(exports, module) {
      var $parseInt = require_global().parseInt;
      var $trim = require_string_trim().trim;
      var ws = require_string_ws();
      var hex = /^[-+]?0[xX]/;
      module.exports = $parseInt(ws + "08") !== 8 || $parseInt(ws + "0x16") !== 22 ? function parseInt2(str, radix) {
        var string = $trim(String(str), 3);
        return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
      } : $parseInt;
    }
  });

  // node_modules/core-js/modules/es6.parse-int.js
  var require_es6_parse_int = __commonJS({
    "node_modules/core-js/modules/es6.parse-int.js"() {
      var $export = require_export();
      var $parseInt = require_parse_int();
      $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
    }
  });

  // node_modules/core-js/modules/_parse-float.js
  var require_parse_float = __commonJS({
    "node_modules/core-js/modules/_parse-float.js"(exports, module) {
      var $parseFloat = require_global().parseFloat;
      var $trim = require_string_trim().trim;
      module.exports = 1 / $parseFloat(require_string_ws() + "-0") !== -Infinity ? function parseFloat2(str) {
        var string = $trim(String(str), 3);
        var result = $parseFloat(string);
        return result === 0 && string.charAt(0) == "-" ? -0 : result;
      } : $parseFloat;
    }
  });

  // node_modules/core-js/modules/es6.parse-float.js
  var require_es6_parse_float = __commonJS({
    "node_modules/core-js/modules/es6.parse-float.js"() {
      var $export = require_export();
      var $parseFloat = require_parse_float();
      $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
    }
  });

  // node_modules/core-js/modules/_inherit-if-required.js
  var require_inherit_if_required = __commonJS({
    "node_modules/core-js/modules/_inherit-if-required.js"(exports, module) {
      var isObject3 = require_is_object();
      var setPrototypeOf = require_set_proto().set;
      module.exports = function(that, target, C) {
        var S = target.constructor;
        var P;
        if (S !== C && typeof S == "function" && (P = S.prototype) !== C.prototype && isObject3(P) && setPrototypeOf) {
          setPrototypeOf(that, P);
        }
        return that;
      };
    }
  });

  // node_modules/core-js/modules/es6.number.constructor.js
  var require_es6_number_constructor = __commonJS({
    "node_modules/core-js/modules/es6.number.constructor.js"() {
      "use strict";
      var global2 = require_global();
      var has = require_has();
      var cof = require_cof();
      var inheritIfRequired = require_inherit_if_required();
      var toPrimitive = require_to_primitive();
      var fails = require_fails();
      var gOPN = require_object_gopn().f;
      var gOPD = require_object_gopd().f;
      var dP = require_object_dp().f;
      var $trim = require_string_trim().trim;
      var NUMBER = "Number";
      var $Number = global2[NUMBER];
      var Base = $Number;
      var proto = $Number.prototype;
      var BROKEN_COF = cof(require_object_create()(proto)) == NUMBER;
      var TRIM = "trim" in String.prototype;
      var toNumber = function(argument) {
        var it = toPrimitive(argument, false);
        if (typeof it == "string" && it.length > 2) {
          it = TRIM ? it.trim() : $trim(it, 3);
          var first = it.charCodeAt(0);
          var third, radix, maxCode;
          if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120)
              return NaN;
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66:
              case 98:
                radix = 2;
                maxCode = 49;
                break;
              case 79:
              case 111:
                radix = 8;
                maxCode = 55;
                break;
              default:
                return +it;
            }
            for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
              code = digits.charCodeAt(i);
              if (code < 48 || code > maxCode)
                return NaN;
            }
            return parseInt(digits, radix);
          }
        }
        return +it;
      };
      if (!$Number(" 0o1") || !$Number("0b1") || $Number("+0x1")) {
        $Number = function Number2(value) {
          var it = arguments.length < 1 ? 0 : value;
          var that = this;
          return that instanceof $Number && (BROKEN_COF ? fails(function() {
            proto.valueOf.call(that);
          }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
        };
        for (keys = require_descriptors() ? gOPN(Base) : (
          // ES3:
          "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(",")
        ), j = 0; keys.length > j; j++) {
          if (has(Base, key = keys[j]) && !has($Number, key)) {
            dP($Number, key, gOPD(Base, key));
          }
        }
        $Number.prototype = proto;
        proto.constructor = $Number;
        require_redefine()(global2, NUMBER, $Number);
      }
      var keys;
      var j;
      var key;
    }
  });

  // node_modules/core-js/modules/_a-number-value.js
  var require_a_number_value = __commonJS({
    "node_modules/core-js/modules/_a-number-value.js"(exports, module) {
      var cof = require_cof();
      module.exports = function(it, msg) {
        if (typeof it != "number" && cof(it) != "Number")
          throw TypeError(msg);
        return +it;
      };
    }
  });

  // node_modules/core-js/modules/_string-repeat.js
  var require_string_repeat = __commonJS({
    "node_modules/core-js/modules/_string-repeat.js"(exports, module) {
      "use strict";
      var toInteger = require_to_integer();
      var defined = require_defined();
      module.exports = function repeat(count) {
        var str = String(defined(this));
        var res = "";
        var n = toInteger(count);
        if (n < 0 || n == Infinity)
          throw RangeError("Count can't be negative");
        for (; n > 0; (n >>>= 1) && (str += str))
          if (n & 1)
            res += str;
        return res;
      };
    }
  });

  // node_modules/core-js/modules/es6.number.to-fixed.js
  var require_es6_number_to_fixed = __commonJS({
    "node_modules/core-js/modules/es6.number.to-fixed.js"() {
      "use strict";
      var $export = require_export();
      var toInteger = require_to_integer();
      var aNumberValue = require_a_number_value();
      var repeat = require_string_repeat();
      var $toFixed = 1 .toFixed;
      var floor = Math.floor;
      var data = [0, 0, 0, 0, 0, 0];
      var ERROR = "Number.toFixed: incorrect invocation!";
      var ZERO = "0";
      var multiply = function(n, c) {
        var i = -1;
        var c2 = c;
        while (++i < 6) {
          c2 += n * data[i];
          data[i] = c2 % 1e7;
          c2 = floor(c2 / 1e7);
        }
      };
      var divide = function(n) {
        var i = 6;
        var c = 0;
        while (--i >= 0) {
          c += data[i];
          data[i] = floor(c / n);
          c = c % n * 1e7;
        }
      };
      var numToString = function() {
        var i = 6;
        var s = "";
        while (--i >= 0) {
          if (s !== "" || i === 0 || data[i] !== 0) {
            var t = String(data[i]);
            s = s === "" ? t : s + repeat.call(ZERO, 7 - t.length) + t;
          }
        }
        return s;
      };
      var pow = function(x, n, acc) {
        return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
      };
      var log = function(x) {
        var n = 0;
        var x2 = x;
        while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
        }
        while (x2 >= 2) {
          n += 1;
          x2 /= 2;
        }
        return n;
      };
      $export($export.P + $export.F * (!!$toFixed && (8e-5.toFixed(3) !== "0.000" || 0.9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 1000000000000000100 .toFixed(0) !== "1000000000000000128") || !require_fails()(function() {
        $toFixed.call({});
      })), "Number", {
        toFixed: function toFixed(fractionDigits) {
          var x = aNumberValue(this, ERROR);
          var f = toInteger(fractionDigits);
          var s = "";
          var m = ZERO;
          var e, z, j, k;
          if (f < 0 || f > 20)
            throw RangeError(ERROR);
          if (x != x)
            return "NaN";
          if (x <= -1e21 || x >= 1e21)
            return String(x);
          if (x < 0) {
            s = "-";
            x = -x;
          }
          if (x > 1e-21) {
            e = log(x * pow(2, 69, 1)) - 69;
            z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
            z *= 4503599627370496;
            e = 52 - e;
            if (e > 0) {
              multiply(0, z);
              j = f;
              while (j >= 7) {
                multiply(1e7, 0);
                j -= 7;
              }
              multiply(pow(10, j, 1), 0);
              j = e - 1;
              while (j >= 23) {
                divide(1 << 23);
                j -= 23;
              }
              divide(1 << j);
              multiply(1, 1);
              divide(2);
              m = numToString();
            } else {
              multiply(0, z);
              multiply(1 << -e, 0);
              m = numToString() + repeat.call(ZERO, f);
            }
          }
          if (f > 0) {
            k = m.length;
            m = s + (k <= f ? "0." + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + "." + m.slice(k - f));
          } else {
            m = s + m;
          }
          return m;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.number.to-precision.js
  var require_es6_number_to_precision = __commonJS({
    "node_modules/core-js/modules/es6.number.to-precision.js"() {
      "use strict";
      var $export = require_export();
      var $fails = require_fails();
      var aNumberValue = require_a_number_value();
      var $toPrecision = 1 .toPrecision;
      $export($export.P + $export.F * ($fails(function() {
        return $toPrecision.call(1, void 0) !== "1";
      }) || !$fails(function() {
        $toPrecision.call({});
      })), "Number", {
        toPrecision: function toPrecision(precision) {
          var that = aNumberValue(this, "Number#toPrecision: incorrect invocation!");
          return precision === void 0 ? $toPrecision.call(that) : $toPrecision.call(that, precision);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.number.epsilon.js
  var require_es6_number_epsilon = __commonJS({
    "node_modules/core-js/modules/es6.number.epsilon.js"() {
      var $export = require_export();
      $export($export.S, "Number", { EPSILON: Math.pow(2, -52) });
    }
  });

  // node_modules/core-js/modules/es6.number.is-finite.js
  var require_es6_number_is_finite = __commonJS({
    "node_modules/core-js/modules/es6.number.is-finite.js"() {
      var $export = require_export();
      var _isFinite = require_global().isFinite;
      $export($export.S, "Number", {
        isFinite: function isFinite2(it) {
          return typeof it == "number" && _isFinite(it);
        }
      });
    }
  });

  // node_modules/core-js/modules/_is-integer.js
  var require_is_integer = __commonJS({
    "node_modules/core-js/modules/_is-integer.js"(exports, module) {
      var isObject3 = require_is_object();
      var floor = Math.floor;
      module.exports = function isInteger(it) {
        return !isObject3(it) && isFinite(it) && floor(it) === it;
      };
    }
  });

  // node_modules/core-js/modules/es6.number.is-integer.js
  var require_es6_number_is_integer = __commonJS({
    "node_modules/core-js/modules/es6.number.is-integer.js"() {
      var $export = require_export();
      $export($export.S, "Number", { isInteger: require_is_integer() });
    }
  });

  // node_modules/core-js/modules/es6.number.is-nan.js
  var require_es6_number_is_nan = __commonJS({
    "node_modules/core-js/modules/es6.number.is-nan.js"() {
      var $export = require_export();
      $export($export.S, "Number", {
        isNaN: function isNaN2(number) {
          return number != number;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.number.is-safe-integer.js
  var require_es6_number_is_safe_integer = __commonJS({
    "node_modules/core-js/modules/es6.number.is-safe-integer.js"() {
      var $export = require_export();
      var isInteger = require_is_integer();
      var abs = Math.abs;
      $export($export.S, "Number", {
        isSafeInteger: function isSafeInteger(number) {
          return isInteger(number) && abs(number) <= 9007199254740991;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.number.max-safe-integer.js
  var require_es6_number_max_safe_integer = __commonJS({
    "node_modules/core-js/modules/es6.number.max-safe-integer.js"() {
      var $export = require_export();
      $export($export.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
    }
  });

  // node_modules/core-js/modules/es6.number.min-safe-integer.js
  var require_es6_number_min_safe_integer = __commonJS({
    "node_modules/core-js/modules/es6.number.min-safe-integer.js"() {
      var $export = require_export();
      $export($export.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
    }
  });

  // node_modules/core-js/modules/es6.number.parse-float.js
  var require_es6_number_parse_float = __commonJS({
    "node_modules/core-js/modules/es6.number.parse-float.js"() {
      var $export = require_export();
      var $parseFloat = require_parse_float();
      $export($export.S + $export.F * (Number.parseFloat != $parseFloat), "Number", { parseFloat: $parseFloat });
    }
  });

  // node_modules/core-js/modules/es6.number.parse-int.js
  var require_es6_number_parse_int = __commonJS({
    "node_modules/core-js/modules/es6.number.parse-int.js"() {
      var $export = require_export();
      var $parseInt = require_parse_int();
      $export($export.S + $export.F * (Number.parseInt != $parseInt), "Number", { parseInt: $parseInt });
    }
  });

  // node_modules/core-js/modules/_math-log1p.js
  var require_math_log1p = __commonJS({
    "node_modules/core-js/modules/_math-log1p.js"(exports, module) {
      module.exports = Math.log1p || function log1p(x) {
        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
      };
    }
  });

  // node_modules/core-js/modules/es6.math.acosh.js
  var require_es6_math_acosh = __commonJS({
    "node_modules/core-js/modules/es6.math.acosh.js"() {
      var $export = require_export();
      var log1p = require_math_log1p();
      var sqrt = Math.sqrt;
      var $acosh = Math.acosh;
      $export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710 && $acosh(Infinity) == Infinity), "Math", {
        acosh: function acosh(x) {
          return (x = +x) < 1 ? NaN : x > 9490626562425156e-8 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.asinh.js
  var require_es6_math_asinh = __commonJS({
    "node_modules/core-js/modules/es6.math.asinh.js"() {
      var $export = require_export();
      var $asinh = Math.asinh;
      function asinh(x) {
        return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
      }
      $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), "Math", { asinh });
    }
  });

  // node_modules/core-js/modules/es6.math.atanh.js
  var require_es6_math_atanh = __commonJS({
    "node_modules/core-js/modules/es6.math.atanh.js"() {
      var $export = require_export();
      var $atanh = Math.atanh;
      $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), "Math", {
        atanh: function atanh(x) {
          return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
        }
      });
    }
  });

  // node_modules/core-js/modules/_math-sign.js
  var require_math_sign = __commonJS({
    "node_modules/core-js/modules/_math-sign.js"(exports, module) {
      module.exports = Math.sign || function sign(x) {
        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
      };
    }
  });

  // node_modules/core-js/modules/es6.math.cbrt.js
  var require_es6_math_cbrt = __commonJS({
    "node_modules/core-js/modules/es6.math.cbrt.js"() {
      var $export = require_export();
      var sign = require_math_sign();
      $export($export.S, "Math", {
        cbrt: function cbrt(x) {
          return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.clz32.js
  var require_es6_math_clz32 = __commonJS({
    "node_modules/core-js/modules/es6.math.clz32.js"() {
      var $export = require_export();
      $export($export.S, "Math", {
        clz32: function clz32(x) {
          return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.cosh.js
  var require_es6_math_cosh = __commonJS({
    "node_modules/core-js/modules/es6.math.cosh.js"() {
      var $export = require_export();
      var exp = Math.exp;
      $export($export.S, "Math", {
        cosh: function cosh(x) {
          return (exp(x = +x) + exp(-x)) / 2;
        }
      });
    }
  });

  // node_modules/core-js/modules/_math-expm1.js
  var require_math_expm1 = __commonJS({
    "node_modules/core-js/modules/_math-expm1.js"(exports, module) {
      var $expm1 = Math.expm1;
      module.exports = !$expm1 || $expm1(10) > 22025.465794806718 || $expm1(10) < 22025.465794806718 || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
        return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
      } : $expm1;
    }
  });

  // node_modules/core-js/modules/es6.math.expm1.js
  var require_es6_math_expm1 = __commonJS({
    "node_modules/core-js/modules/es6.math.expm1.js"() {
      var $export = require_export();
      var $expm1 = require_math_expm1();
      $export($export.S + $export.F * ($expm1 != Math.expm1), "Math", { expm1: $expm1 });
    }
  });

  // node_modules/core-js/modules/_math-fround.js
  var require_math_fround = __commonJS({
    "node_modules/core-js/modules/_math-fround.js"(exports, module) {
      var sign = require_math_sign();
      var pow = Math.pow;
      var EPSILON = pow(2, -52);
      var EPSILON32 = pow(2, -23);
      var MAX32 = pow(2, 127) * (2 - EPSILON32);
      var MIN32 = pow(2, -126);
      var roundTiesToEven = function(n) {
        return n + 1 / EPSILON - 1 / EPSILON;
      };
      module.exports = Math.fround || function fround(x) {
        var $abs = Math.abs(x);
        var $sign = sign(x);
        var a, result;
        if ($abs < MIN32)
          return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
        a = (1 + EPSILON32 / EPSILON) * $abs;
        result = a - (a - $abs);
        if (result > MAX32 || result != result)
          return $sign * Infinity;
        return $sign * result;
      };
    }
  });

  // node_modules/core-js/modules/es6.math.fround.js
  var require_es6_math_fround = __commonJS({
    "node_modules/core-js/modules/es6.math.fround.js"() {
      var $export = require_export();
      $export($export.S, "Math", { fround: require_math_fround() });
    }
  });

  // node_modules/core-js/modules/es6.math.hypot.js
  var require_es6_math_hypot = __commonJS({
    "node_modules/core-js/modules/es6.math.hypot.js"() {
      var $export = require_export();
      var abs = Math.abs;
      $export($export.S, "Math", {
        hypot: function hypot(value1, value2) {
          var sum = 0;
          var i = 0;
          var aLen = arguments.length;
          var larg = 0;
          var arg, div;
          while (i < aLen) {
            arg = abs(arguments[i++]);
            if (larg < arg) {
              div = larg / arg;
              sum = sum * div * div + 1;
              larg = arg;
            } else if (arg > 0) {
              div = arg / larg;
              sum += div * div;
            } else
              sum += arg;
          }
          return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.imul.js
  var require_es6_math_imul = __commonJS({
    "node_modules/core-js/modules/es6.math.imul.js"() {
      var $export = require_export();
      var $imul = Math.imul;
      $export($export.S + $export.F * require_fails()(function() {
        return $imul(4294967295, 5) != -5 || $imul.length != 2;
      }), "Math", {
        imul: function imul(x, y) {
          var UINT16 = 65535;
          var xn = +x;
          var yn = +y;
          var xl = UINT16 & xn;
          var yl = UINT16 & yn;
          return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.log10.js
  var require_es6_math_log10 = __commonJS({
    "node_modules/core-js/modules/es6.math.log10.js"() {
      var $export = require_export();
      $export($export.S, "Math", {
        log10: function log10(x) {
          return Math.log(x) * Math.LOG10E;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.log1p.js
  var require_es6_math_log1p = __commonJS({
    "node_modules/core-js/modules/es6.math.log1p.js"() {
      var $export = require_export();
      $export($export.S, "Math", { log1p: require_math_log1p() });
    }
  });

  // node_modules/core-js/modules/es6.math.log2.js
  var require_es6_math_log2 = __commonJS({
    "node_modules/core-js/modules/es6.math.log2.js"() {
      var $export = require_export();
      $export($export.S, "Math", {
        log2: function log2(x) {
          return Math.log(x) / Math.LN2;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.sign.js
  var require_es6_math_sign = __commonJS({
    "node_modules/core-js/modules/es6.math.sign.js"() {
      var $export = require_export();
      $export($export.S, "Math", { sign: require_math_sign() });
    }
  });

  // node_modules/core-js/modules/es6.math.sinh.js
  var require_es6_math_sinh = __commonJS({
    "node_modules/core-js/modules/es6.math.sinh.js"() {
      var $export = require_export();
      var expm1 = require_math_expm1();
      var exp = Math.exp;
      $export($export.S + $export.F * require_fails()(function() {
        return !Math.sinh(-2e-17) != -2e-17;
      }), "Math", {
        sinh: function sinh(x) {
          return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.tanh.js
  var require_es6_math_tanh = __commonJS({
    "node_modules/core-js/modules/es6.math.tanh.js"() {
      var $export = require_export();
      var expm1 = require_math_expm1();
      var exp = Math.exp;
      $export($export.S, "Math", {
        tanh: function tanh(x) {
          var a = expm1(x = +x);
          var b = expm1(-x);
          return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.math.trunc.js
  var require_es6_math_trunc = __commonJS({
    "node_modules/core-js/modules/es6.math.trunc.js"() {
      var $export = require_export();
      $export($export.S, "Math", {
        trunc: function trunc(it) {
          return (it > 0 ? Math.floor : Math.ceil)(it);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.from-code-point.js
  var require_es6_string_from_code_point = __commonJS({
    "node_modules/core-js/modules/es6.string.from-code-point.js"() {
      var $export = require_export();
      var toAbsoluteIndex = require_to_absolute_index();
      var fromCharCode = String.fromCharCode;
      var $fromCodePoint = String.fromCodePoint;
      $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", {
        // 21.1.2.2 String.fromCodePoint(...codePoints)
        fromCodePoint: function fromCodePoint(x) {
          var res = [];
          var aLen = arguments.length;
          var i = 0;
          var code;
          while (aLen > i) {
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 1114111) !== code)
              throw RangeError(code + " is not a valid code point");
            res.push(
              code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320)
            );
          }
          return res.join("");
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.raw.js
  var require_es6_string_raw = __commonJS({
    "node_modules/core-js/modules/es6.string.raw.js"() {
      var $export = require_export();
      var toIObject = require_to_iobject();
      var toLength = require_to_length();
      $export($export.S, "String", {
        // 21.1.2.4 String.raw(callSite, ...substitutions)
        raw: function raw(callSite) {
          var tpl = toIObject(callSite.raw);
          var len = toLength(tpl.length);
          var aLen = arguments.length;
          var res = [];
          var i = 0;
          while (len > i) {
            res.push(String(tpl[i++]));
            if (i < aLen)
              res.push(String(arguments[i]));
          }
          return res.join("");
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.trim.js
  var require_es6_string_trim = __commonJS({
    "node_modules/core-js/modules/es6.string.trim.js"() {
      "use strict";
      require_string_trim()("trim", function($trim) {
        return function trim2() {
          return $trim(this, 3);
        };
      });
    }
  });

  // node_modules/core-js/modules/_string-at.js
  var require_string_at = __commonJS({
    "node_modules/core-js/modules/_string-at.js"(exports, module) {
      var toInteger = require_to_integer();
      var defined = require_defined();
      module.exports = function(TO_STRING) {
        return function(that, pos) {
          var s = String(defined(that));
          var i = toInteger(pos);
          var l = s.length;
          var a, b;
          if (i < 0 || i >= l)
            return TO_STRING ? "" : void 0;
          a = s.charCodeAt(i);
          return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
        };
      };
    }
  });

  // node_modules/core-js/modules/_iterators.js
  var require_iterators = __commonJS({
    "node_modules/core-js/modules/_iterators.js"(exports, module) {
      module.exports = {};
    }
  });

  // node_modules/core-js/modules/_iter-create.js
  var require_iter_create = __commonJS({
    "node_modules/core-js/modules/_iter-create.js"(exports, module) {
      "use strict";
      var create = require_object_create();
      var descriptor = require_property_desc();
      var setToStringTag = require_set_to_string_tag();
      var IteratorPrototype = {};
      require_hide()(IteratorPrototype, require_wks()("iterator"), function() {
        return this;
      });
      module.exports = function(Constructor, NAME2, next) {
        Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
        setToStringTag(Constructor, NAME2 + " Iterator");
      };
    }
  });

  // node_modules/core-js/modules/_iter-define.js
  var require_iter_define = __commonJS({
    "node_modules/core-js/modules/_iter-define.js"(exports, module) {
      "use strict";
      var LIBRARY = require_library();
      var $export = require_export();
      var redefine = require_redefine();
      var hide2 = require_hide();
      var Iterators = require_iterators();
      var $iterCreate = require_iter_create();
      var setToStringTag = require_set_to_string_tag();
      var getPrototypeOf2 = require_object_gpo();
      var ITERATOR = require_wks()("iterator");
      var BUGGY = !([].keys && "next" in [].keys());
      var FF_ITERATOR = "@@iterator";
      var KEYS = "keys";
      var VALUES = "values";
      var returnThis = function() {
        return this;
      };
      module.exports = function(Base, NAME2, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME2, next);
        var getMethod = function(kind) {
          if (!BUGGY && kind in proto)
            return proto[kind];
          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };
            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }
          return function entries() {
            return new Constructor(this, kind);
          };
        };
        var TAG = NAME2 + " Iterator";
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
        var $anyNative = NAME2 == "Array" ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype;
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf2($anyNative.call(new Base()));
          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            setToStringTag(IteratorPrototype, TAG, true);
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
              hide2(IteratorPrototype, ITERATOR, returnThis);
          }
        }
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;
          $default = function values() {
            return $native.call(this);
          };
        }
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide2(proto, ITERATOR, $default);
        }
        Iterators[NAME2] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          };
          if (FORCED)
            for (key in methods) {
              if (!(key in proto))
                redefine(proto, key, methods[key]);
            }
          else
            $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME2, methods);
        }
        return methods;
      };
    }
  });

  // node_modules/core-js/modules/es6.string.iterator.js
  var require_es6_string_iterator = __commonJS({
    "node_modules/core-js/modules/es6.string.iterator.js"() {
      "use strict";
      var $at = require_string_at()(true);
      require_iter_define()(String, "String", function(iterated) {
        this._t = String(iterated);
        this._i = 0;
      }, function() {
        var O = this._t;
        var index = this._i;
        var point;
        if (index >= O.length)
          return { value: void 0, done: true };
        point = $at(O, index);
        this._i += point.length;
        return { value: point, done: false };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.code-point-at.js
  var require_es6_string_code_point_at = __commonJS({
    "node_modules/core-js/modules/es6.string.code-point-at.js"() {
      "use strict";
      var $export = require_export();
      var $at = require_string_at()(false);
      $export($export.P, "String", {
        // 21.1.3.3 String.prototype.codePointAt(pos)
        codePointAt: function codePointAt(pos) {
          return $at(this, pos);
        }
      });
    }
  });

  // node_modules/core-js/modules/_is-regexp.js
  var require_is_regexp = __commonJS({
    "node_modules/core-js/modules/_is-regexp.js"(exports, module) {
      var isObject3 = require_is_object();
      var cof = require_cof();
      var MATCH = require_wks()("match");
      module.exports = function(it) {
        var isRegExp2;
        return isObject3(it) && ((isRegExp2 = it[MATCH]) !== void 0 ? !!isRegExp2 : cof(it) == "RegExp");
      };
    }
  });

  // node_modules/core-js/modules/_string-context.js
  var require_string_context = __commonJS({
    "node_modules/core-js/modules/_string-context.js"(exports, module) {
      var isRegExp2 = require_is_regexp();
      var defined = require_defined();
      module.exports = function(that, searchString, NAME2) {
        if (isRegExp2(searchString))
          throw TypeError("String#" + NAME2 + " doesn't accept regex!");
        return String(defined(that));
      };
    }
  });

  // node_modules/core-js/modules/_fails-is-regexp.js
  var require_fails_is_regexp = __commonJS({
    "node_modules/core-js/modules/_fails-is-regexp.js"(exports, module) {
      var MATCH = require_wks()("match");
      module.exports = function(KEY) {
        var re = /./;
        try {
          "/./"[KEY](re);
        } catch (e) {
          try {
            re[MATCH] = false;
            return !"/./"[KEY](re);
          } catch (f) {
          }
        }
        return true;
      };
    }
  });

  // node_modules/core-js/modules/es6.string.ends-with.js
  var require_es6_string_ends_with = __commonJS({
    "node_modules/core-js/modules/es6.string.ends-with.js"() {
      "use strict";
      var $export = require_export();
      var toLength = require_to_length();
      var context = require_string_context();
      var ENDS_WITH = "endsWith";
      var $endsWith = ""[ENDS_WITH];
      $export($export.P + $export.F * require_fails_is_regexp()(ENDS_WITH), "String", {
        endsWith: function endsWith2(searchString) {
          var that = context(this, searchString, ENDS_WITH);
          var endPosition = arguments.length > 1 ? arguments[1] : void 0;
          var len = toLength(that.length);
          var end2 = endPosition === void 0 ? len : Math.min(toLength(endPosition), len);
          var search = String(searchString);
          return $endsWith ? $endsWith.call(that, search, end2) : that.slice(end2 - search.length, end2) === search;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.includes.js
  var require_es6_string_includes = __commonJS({
    "node_modules/core-js/modules/es6.string.includes.js"() {
      "use strict";
      var $export = require_export();
      var context = require_string_context();
      var INCLUDES = "includes";
      $export($export.P + $export.F * require_fails_is_regexp()(INCLUDES), "String", {
        includes: function includes(searchString) {
          return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.string.repeat.js
  var require_es6_string_repeat = __commonJS({
    "node_modules/core-js/modules/es6.string.repeat.js"() {
      var $export = require_export();
      $export($export.P, "String", {
        // 21.1.3.13 String.prototype.repeat(count)
        repeat: require_string_repeat()
      });
    }
  });

  // node_modules/core-js/modules/es6.string.starts-with.js
  var require_es6_string_starts_with = __commonJS({
    "node_modules/core-js/modules/es6.string.starts-with.js"() {
      "use strict";
      var $export = require_export();
      var toLength = require_to_length();
      var context = require_string_context();
      var STARTS_WITH = "startsWith";
      var $startsWith = ""[STARTS_WITH];
      $export($export.P + $export.F * require_fails_is_regexp()(STARTS_WITH), "String", {
        startsWith: function startsWith(searchString) {
          var that = context(this, searchString, STARTS_WITH);
          var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : void 0, that.length));
          var search = String(searchString);
          return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
        }
      });
    }
  });

  // node_modules/core-js/modules/_string-html.js
  var require_string_html = __commonJS({
    "node_modules/core-js/modules/_string-html.js"(exports, module) {
      var $export = require_export();
      var fails = require_fails();
      var defined = require_defined();
      var quot = /"/g;
      var createHTML = function(string, tag, attribute, value) {
        var S = String(defined(string));
        var p1 = "<" + tag;
        if (attribute !== "")
          p1 += " " + attribute + '="' + String(value).replace(quot, "&quot;") + '"';
        return p1 + ">" + S + "</" + tag + ">";
      };
      module.exports = function(NAME2, exec) {
        var O = {};
        O[NAME2] = exec(createHTML);
        $export($export.P + $export.F * fails(function() {
          var test = ""[NAME2]('"');
          return test !== test.toLowerCase() || test.split('"').length > 3;
        }), "String", O);
      };
    }
  });

  // node_modules/core-js/modules/es6.string.anchor.js
  var require_es6_string_anchor = __commonJS({
    "node_modules/core-js/modules/es6.string.anchor.js"() {
      "use strict";
      require_string_html()("anchor", function(createHTML) {
        return function anchor(name) {
          return createHTML(this, "a", "name", name);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.big.js
  var require_es6_string_big = __commonJS({
    "node_modules/core-js/modules/es6.string.big.js"() {
      "use strict";
      require_string_html()("big", function(createHTML) {
        return function big() {
          return createHTML(this, "big", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.blink.js
  var require_es6_string_blink = __commonJS({
    "node_modules/core-js/modules/es6.string.blink.js"() {
      "use strict";
      require_string_html()("blink", function(createHTML) {
        return function blink() {
          return createHTML(this, "blink", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.bold.js
  var require_es6_string_bold = __commonJS({
    "node_modules/core-js/modules/es6.string.bold.js"() {
      "use strict";
      require_string_html()("bold", function(createHTML) {
        return function bold() {
          return createHTML(this, "b", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.fixed.js
  var require_es6_string_fixed = __commonJS({
    "node_modules/core-js/modules/es6.string.fixed.js"() {
      "use strict";
      require_string_html()("fixed", function(createHTML) {
        return function fixed() {
          return createHTML(this, "tt", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.fontcolor.js
  var require_es6_string_fontcolor = __commonJS({
    "node_modules/core-js/modules/es6.string.fontcolor.js"() {
      "use strict";
      require_string_html()("fontcolor", function(createHTML) {
        return function fontcolor(color) {
          return createHTML(this, "font", "color", color);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.fontsize.js
  var require_es6_string_fontsize = __commonJS({
    "node_modules/core-js/modules/es6.string.fontsize.js"() {
      "use strict";
      require_string_html()("fontsize", function(createHTML) {
        return function fontsize(size) {
          return createHTML(this, "font", "size", size);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.italics.js
  var require_es6_string_italics = __commonJS({
    "node_modules/core-js/modules/es6.string.italics.js"() {
      "use strict";
      require_string_html()("italics", function(createHTML) {
        return function italics() {
          return createHTML(this, "i", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.link.js
  var require_es6_string_link = __commonJS({
    "node_modules/core-js/modules/es6.string.link.js"() {
      "use strict";
      require_string_html()("link", function(createHTML) {
        return function link(url) {
          return createHTML(this, "a", "href", url);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.small.js
  var require_es6_string_small = __commonJS({
    "node_modules/core-js/modules/es6.string.small.js"() {
      "use strict";
      require_string_html()("small", function(createHTML) {
        return function small() {
          return createHTML(this, "small", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.strike.js
  var require_es6_string_strike = __commonJS({
    "node_modules/core-js/modules/es6.string.strike.js"() {
      "use strict";
      require_string_html()("strike", function(createHTML) {
        return function strike() {
          return createHTML(this, "strike", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.sub.js
  var require_es6_string_sub = __commonJS({
    "node_modules/core-js/modules/es6.string.sub.js"() {
      "use strict";
      require_string_html()("sub", function(createHTML) {
        return function sub() {
          return createHTML(this, "sub", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.string.sup.js
  var require_es6_string_sup = __commonJS({
    "node_modules/core-js/modules/es6.string.sup.js"() {
      "use strict";
      require_string_html()("sup", function(createHTML) {
        return function sup() {
          return createHTML(this, "sup", "", "");
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.date.now.js
  var require_es6_date_now = __commonJS({
    "node_modules/core-js/modules/es6.date.now.js"() {
      var $export = require_export();
      $export($export.S, "Date", { now: function() {
        return (/* @__PURE__ */ new Date()).getTime();
      } });
    }
  });

  // node_modules/core-js/modules/es6.date.to-json.js
  var require_es6_date_to_json = __commonJS({
    "node_modules/core-js/modules/es6.date.to-json.js"() {
      "use strict";
      var $export = require_export();
      var toObject = require_to_object();
      var toPrimitive = require_to_primitive();
      $export($export.P + $export.F * require_fails()(function() {
        return (/* @__PURE__ */ new Date(NaN)).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
          return 1;
        } }) !== 1;
      }), "Date", {
        // eslint-disable-next-line no-unused-vars
        toJSON: function toJSON2(key) {
          var O = toObject(this);
          var pv = toPrimitive(O);
          return typeof pv == "number" && !isFinite(pv) ? null : O.toISOString();
        }
      });
    }
  });

  // node_modules/core-js/modules/_date-to-iso-string.js
  var require_date_to_iso_string = __commonJS({
    "node_modules/core-js/modules/_date-to-iso-string.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var getTime = Date.prototype.getTime;
      var $toISOString = Date.prototype.toISOString;
      var lz = function(num) {
        return num > 9 ? num : "0" + num;
      };
      module.exports = fails(function() {
        return $toISOString.call(new Date(-5e13 - 1)) != "0385-07-25T07:06:39.999Z";
      }) || !fails(function() {
        $toISOString.call(/* @__PURE__ */ new Date(NaN));
      }) ? function toISOString() {
        if (!isFinite(getTime.call(this)))
          throw RangeError("Invalid time value");
        var d = this;
        var y = d.getUTCFullYear();
        var m = d.getUTCMilliseconds();
        var s = y < 0 ? "-" : y > 9999 ? "+" : "";
        return s + ("00000" + Math.abs(y)).slice(s ? -6 : -4) + "-" + lz(d.getUTCMonth() + 1) + "-" + lz(d.getUTCDate()) + "T" + lz(d.getUTCHours()) + ":" + lz(d.getUTCMinutes()) + ":" + lz(d.getUTCSeconds()) + "." + (m > 99 ? m : "0" + lz(m)) + "Z";
      } : $toISOString;
    }
  });

  // node_modules/core-js/modules/es6.date.to-iso-string.js
  var require_es6_date_to_iso_string = __commonJS({
    "node_modules/core-js/modules/es6.date.to-iso-string.js"() {
      var $export = require_export();
      var toISOString = require_date_to_iso_string();
      $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), "Date", {
        toISOString
      });
    }
  });

  // node_modules/core-js/modules/es6.date.to-string.js
  var require_es6_date_to_string = __commonJS({
    "node_modules/core-js/modules/es6.date.to-string.js"() {
      var DateProto = Date.prototype;
      var INVALID_DATE = "Invalid Date";
      var TO_STRING = "toString";
      var $toString = DateProto[TO_STRING];
      var getTime = DateProto.getTime;
      if (/* @__PURE__ */ new Date(NaN) + "" != INVALID_DATE) {
        require_redefine()(DateProto, TO_STRING, function toString3() {
          var value = getTime.call(this);
          return value === value ? $toString.call(this) : INVALID_DATE;
        });
      }
    }
  });

  // node_modules/core-js/modules/_date-to-primitive.js
  var require_date_to_primitive = __commonJS({
    "node_modules/core-js/modules/_date-to-primitive.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var toPrimitive = require_to_primitive();
      var NUMBER = "number";
      module.exports = function(hint) {
        if (hint !== "string" && hint !== NUMBER && hint !== "default")
          throw TypeError("Incorrect hint");
        return toPrimitive(anObject(this), hint != NUMBER);
      };
    }
  });

  // node_modules/core-js/modules/es6.date.to-primitive.js
  var require_es6_date_to_primitive = __commonJS({
    "node_modules/core-js/modules/es6.date.to-primitive.js"() {
      var TO_PRIMITIVE = require_wks()("toPrimitive");
      var proto = Date.prototype;
      if (!(TO_PRIMITIVE in proto))
        require_hide()(proto, TO_PRIMITIVE, require_date_to_primitive());
    }
  });

  // node_modules/core-js/modules/es6.array.is-array.js
  var require_es6_array_is_array = __commonJS({
    "node_modules/core-js/modules/es6.array.is-array.js"() {
      var $export = require_export();
      $export($export.S, "Array", { isArray: require_is_array() });
    }
  });

  // node_modules/core-js/modules/_iter-call.js
  var require_iter_call = __commonJS({
    "node_modules/core-js/modules/_iter-call.js"(exports, module) {
      var anObject = require_an_object();
      module.exports = function(iterator, fn2, value, entries) {
        try {
          return entries ? fn2(anObject(value)[0], value[1]) : fn2(value);
        } catch (e) {
          var ret = iterator["return"];
          if (ret !== void 0)
            anObject(ret.call(iterator));
          throw e;
        }
      };
    }
  });

  // node_modules/core-js/modules/_is-array-iter.js
  var require_is_array_iter = __commonJS({
    "node_modules/core-js/modules/_is-array-iter.js"(exports, module) {
      var Iterators = require_iterators();
      var ITERATOR = require_wks()("iterator");
      var ArrayProto = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
      };
    }
  });

  // node_modules/core-js/modules/_create-property.js
  var require_create_property = __commonJS({
    "node_modules/core-js/modules/_create-property.js"(exports, module) {
      "use strict";
      var $defineProperty = require_object_dp();
      var createDesc = require_property_desc();
      module.exports = function(object, index, value) {
        if (index in object)
          $defineProperty.f(object, index, createDesc(0, value));
        else
          object[index] = value;
      };
    }
  });

  // node_modules/core-js/modules/core.get-iterator-method.js
  var require_core_get_iterator_method = __commonJS({
    "node_modules/core-js/modules/core.get-iterator-method.js"(exports, module) {
      var classof = require_classof();
      var ITERATOR = require_wks()("iterator");
      var Iterators = require_iterators();
      module.exports = require_core().getIteratorMethod = function(it) {
        if (it != void 0)
          return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
      };
    }
  });

  // node_modules/core-js/modules/_iter-detect.js
  var require_iter_detect = __commonJS({
    "node_modules/core-js/modules/_iter-detect.js"(exports, module) {
      var ITERATOR = require_wks()("iterator");
      var SAFE_CLOSING = false;
      try {
        riter = [7][ITERATOR]();
        riter["return"] = function() {
          SAFE_CLOSING = true;
        };
        Array.from(riter, function() {
          throw 2;
        });
      } catch (e) {
      }
      var riter;
      module.exports = function(exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING)
          return false;
        var safe = false;
        try {
          var arr = [7];
          var iter = arr[ITERATOR]();
          iter.next = function() {
            return { done: safe = true };
          };
          arr[ITERATOR] = function() {
            return iter;
          };
          exec(arr);
        } catch (e) {
        }
        return safe;
      };
    }
  });

  // node_modules/core-js/modules/es6.array.from.js
  var require_es6_array_from = __commonJS({
    "node_modules/core-js/modules/es6.array.from.js"() {
      "use strict";
      var ctx = require_ctx();
      var $export = require_export();
      var toObject = require_to_object();
      var call = require_iter_call();
      var isArrayIter = require_is_array_iter();
      var toLength = require_to_length();
      var createProperty = require_create_property();
      var getIterFn = require_core_get_iterator_method();
      $export($export.S + $export.F * !require_iter_detect()(function(iter) {
        Array.from(iter);
      }), "Array", {
        // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
        from: function from(arrayLike) {
          var O = toObject(arrayLike);
          var C = typeof this == "function" ? this : Array;
          var aLen = arguments.length;
          var mapfn = aLen > 1 ? arguments[1] : void 0;
          var mapping = mapfn !== void 0;
          var index = 0;
          var iterFn = getIterFn(O);
          var length, result, step, iterator;
          if (mapping)
            mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
          if (iterFn != void 0 && !(C == Array && isArrayIter(iterFn))) {
            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
              createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
            }
          } else {
            length = toLength(O.length);
            for (result = new C(length); length > index; index++) {
              createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
            }
          }
          result.length = index;
          return result;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.of.js
  var require_es6_array_of = __commonJS({
    "node_modules/core-js/modules/es6.array.of.js"() {
      "use strict";
      var $export = require_export();
      var createProperty = require_create_property();
      $export($export.S + $export.F * require_fails()(function() {
        function F() {
        }
        return !(Array.of.call(F) instanceof F);
      }), "Array", {
        // 22.1.2.3 Array.of( ...items)
        of: function of() {
          var index = 0;
          var aLen = arguments.length;
          var result = new (typeof this == "function" ? this : Array)(aLen);
          while (aLen > index)
            createProperty(result, index, arguments[index++]);
          result.length = aLen;
          return result;
        }
      });
    }
  });

  // node_modules/core-js/modules/_strict-method.js
  var require_strict_method = __commonJS({
    "node_modules/core-js/modules/_strict-method.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = function(method, arg) {
        return !!method && fails(function() {
          arg ? method.call(null, function() {
          }, 1) : method.call(null);
        });
      };
    }
  });

  // node_modules/core-js/modules/es6.array.join.js
  var require_es6_array_join = __commonJS({
    "node_modules/core-js/modules/es6.array.join.js"() {
      "use strict";
      var $export = require_export();
      var toIObject = require_to_iobject();
      var arrayJoin = [].join;
      $export($export.P + $export.F * (require_iobject() != Object || !require_strict_method()(arrayJoin)), "Array", {
        join: function join(separator) {
          return arrayJoin.call(toIObject(this), separator === void 0 ? "," : separator);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.slice.js
  var require_es6_array_slice = __commonJS({
    "node_modules/core-js/modules/es6.array.slice.js"() {
      "use strict";
      var $export = require_export();
      var html = require_html();
      var cof = require_cof();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      var arraySlice = [].slice;
      $export($export.P + $export.F * require_fails()(function() {
        if (html)
          arraySlice.call(html);
      }), "Array", {
        slice: function slice(begin, end2) {
          var len = toLength(this.length);
          var klass = cof(this);
          end2 = end2 === void 0 ? len : end2;
          if (klass == "Array")
            return arraySlice.call(this, begin, end2);
          var start2 = toAbsoluteIndex(begin, len);
          var upTo = toAbsoluteIndex(end2, len);
          var size = toLength(upTo - start2);
          var cloned = new Array(size);
          var i = 0;
          for (; i < size; i++)
            cloned[i] = klass == "String" ? this.charAt(start2 + i) : this[start2 + i];
          return cloned;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.sort.js
  var require_es6_array_sort = __commonJS({
    "node_modules/core-js/modules/es6.array.sort.js"() {
      "use strict";
      var $export = require_export();
      var aFunction = require_a_function();
      var toObject = require_to_object();
      var fails = require_fails();
      var $sort = [].sort;
      var test = [1, 2, 3];
      $export($export.P + $export.F * (fails(function() {
        test.sort(void 0);
      }) || !fails(function() {
        test.sort(null);
      }) || !require_strict_method()($sort)), "Array", {
        // 22.1.3.25 Array.prototype.sort(comparefn)
        sort: function sort(comparefn) {
          return comparefn === void 0 ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
        }
      });
    }
  });

  // node_modules/core-js/modules/_array-species-constructor.js
  var require_array_species_constructor = __commonJS({
    "node_modules/core-js/modules/_array-species-constructor.js"(exports, module) {
      var isObject3 = require_is_object();
      var isArray2 = require_is_array();
      var SPECIES = require_wks()("species");
      module.exports = function(original) {
        var C;
        if (isArray2(original)) {
          C = original.constructor;
          if (typeof C == "function" && (C === Array || isArray2(C.prototype)))
            C = void 0;
          if (isObject3(C)) {
            C = C[SPECIES];
            if (C === null)
              C = void 0;
          }
        }
        return C === void 0 ? Array : C;
      };
    }
  });

  // node_modules/core-js/modules/_array-species-create.js
  var require_array_species_create = __commonJS({
    "node_modules/core-js/modules/_array-species-create.js"(exports, module) {
      var speciesConstructor = require_array_species_constructor();
      module.exports = function(original, length) {
        return new (speciesConstructor(original))(length);
      };
    }
  });

  // node_modules/core-js/modules/_array-methods.js
  var require_array_methods = __commonJS({
    "node_modules/core-js/modules/_array-methods.js"(exports, module) {
      var ctx = require_ctx();
      var IObject = require_iobject();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var asc = require_array_species_create();
      module.exports = function(TYPE, $create) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        var create = $create || asc;
        return function($this, callbackfn, that) {
          var O = toObject($this);
          var self2 = IObject(O);
          var f = ctx(callbackfn, that, 3);
          var length = toLength(self2.length);
          var index = 0;
          var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
          var val, res;
          for (; length > index; index++)
            if (NO_HOLES || index in self2) {
              val = self2[index];
              res = f(val, index, O);
              if (TYPE) {
                if (IS_MAP)
                  result[index] = res;
                else if (res)
                  switch (TYPE) {
                    case 3:
                      return true;
                    case 5:
                      return val;
                    case 6:
                      return index;
                    case 2:
                      result.push(val);
                  }
                else if (IS_EVERY)
                  return false;
              }
            }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
        };
      };
    }
  });

  // node_modules/core-js/modules/es6.array.for-each.js
  var require_es6_array_for_each = __commonJS({
    "node_modules/core-js/modules/es6.array.for-each.js"() {
      "use strict";
      var $export = require_export();
      var $forEach = require_array_methods()(0);
      var STRICT = require_strict_method()([].forEach, true);
      $export($export.P + $export.F * !STRICT, "Array", {
        // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
        forEach: function forEach2(callbackfn) {
          return $forEach(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.map.js
  var require_es6_array_map = __commonJS({
    "node_modules/core-js/modules/es6.array.map.js"() {
      "use strict";
      var $export = require_export();
      var $map = require_array_methods()(1);
      $export($export.P + $export.F * !require_strict_method()([].map, true), "Array", {
        // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
        map: function map(callbackfn) {
          return $map(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.filter.js
  var require_es6_array_filter = __commonJS({
    "node_modules/core-js/modules/es6.array.filter.js"() {
      "use strict";
      var $export = require_export();
      var $filter = require_array_methods()(2);
      $export($export.P + $export.F * !require_strict_method()([].filter, true), "Array", {
        // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
        filter: function filter2(callbackfn) {
          return $filter(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.some.js
  var require_es6_array_some = __commonJS({
    "node_modules/core-js/modules/es6.array.some.js"() {
      "use strict";
      var $export = require_export();
      var $some = require_array_methods()(3);
      $export($export.P + $export.F * !require_strict_method()([].some, true), "Array", {
        // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
        some: function some(callbackfn) {
          return $some(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.every.js
  var require_es6_array_every = __commonJS({
    "node_modules/core-js/modules/es6.array.every.js"() {
      "use strict";
      var $export = require_export();
      var $every = require_array_methods()(4);
      $export($export.P + $export.F * !require_strict_method()([].every, true), "Array", {
        // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
        every: function every(callbackfn) {
          return $every(this, callbackfn, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/_array-reduce.js
  var require_array_reduce = __commonJS({
    "node_modules/core-js/modules/_array-reduce.js"(exports, module) {
      var aFunction = require_a_function();
      var toObject = require_to_object();
      var IObject = require_iobject();
      var toLength = require_to_length();
      module.exports = function(that, callbackfn, aLen, memo, isRight) {
        aFunction(callbackfn);
        var O = toObject(that);
        var self2 = IObject(O);
        var length = toLength(O.length);
        var index = isRight ? length - 1 : 0;
        var i = isRight ? -1 : 1;
        if (aLen < 2)
          for (; ; ) {
            if (index in self2) {
              memo = self2[index];
              index += i;
              break;
            }
            index += i;
            if (isRight ? index < 0 : length <= index) {
              throw TypeError("Reduce of empty array with no initial value");
            }
          }
        for (; isRight ? index >= 0 : length > index; index += i)
          if (index in self2) {
            memo = callbackfn(memo, self2[index], index, O);
          }
        return memo;
      };
    }
  });

  // node_modules/core-js/modules/es6.array.reduce.js
  var require_es6_array_reduce = __commonJS({
    "node_modules/core-js/modules/es6.array.reduce.js"() {
      "use strict";
      var $export = require_export();
      var $reduce = require_array_reduce();
      $export($export.P + $export.F * !require_strict_method()([].reduce, true), "Array", {
        // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
        reduce: function reduce(callbackfn) {
          return $reduce(this, callbackfn, arguments.length, arguments[1], false);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.reduce-right.js
  var require_es6_array_reduce_right = __commonJS({
    "node_modules/core-js/modules/es6.array.reduce-right.js"() {
      "use strict";
      var $export = require_export();
      var $reduce = require_array_reduce();
      $export($export.P + $export.F * !require_strict_method()([].reduceRight, true), "Array", {
        // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
        reduceRight: function reduceRight(callbackfn) {
          return $reduce(this, callbackfn, arguments.length, arguments[1], true);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.index-of.js
  var require_es6_array_index_of = __commonJS({
    "node_modules/core-js/modules/es6.array.index-of.js"() {
      "use strict";
      var $export = require_export();
      var $indexOf = require_array_includes()(false);
      var $native = [].indexOf;
      var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
      $export($export.P + $export.F * (NEGATIVE_ZERO || !require_strict_method()($native)), "Array", {
        // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
        indexOf: function indexOf(searchElement) {
          return NEGATIVE_ZERO ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.array.last-index-of.js
  var require_es6_array_last_index_of = __commonJS({
    "node_modules/core-js/modules/es6.array.last-index-of.js"() {
      "use strict";
      var $export = require_export();
      var toIObject = require_to_iobject();
      var toInteger = require_to_integer();
      var toLength = require_to_length();
      var $native = [].lastIndexOf;
      var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
      $export($export.P + $export.F * (NEGATIVE_ZERO || !require_strict_method()($native)), "Array", {
        // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
        lastIndexOf: function lastIndexOf(searchElement) {
          if (NEGATIVE_ZERO)
            return $native.apply(this, arguments) || 0;
          var O = toIObject(this);
          var length = toLength(O.length);
          var index = length - 1;
          if (arguments.length > 1)
            index = Math.min(index, toInteger(arguments[1]));
          if (index < 0)
            index = length + index;
          for (; index >= 0; index--)
            if (index in O) {
              if (O[index] === searchElement)
                return index || 0;
            }
          return -1;
        }
      });
    }
  });

  // node_modules/core-js/modules/_array-copy-within.js
  var require_array_copy_within = __commonJS({
    "node_modules/core-js/modules/_array-copy-within.js"(exports, module) {
      "use strict";
      var toObject = require_to_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      module.exports = [].copyWithin || function copyWithin(target, start2) {
        var O = toObject(this);
        var len = toLength(O.length);
        var to = toAbsoluteIndex(target, len);
        var from = toAbsoluteIndex(start2, len);
        var end2 = arguments.length > 2 ? arguments[2] : void 0;
        var count = Math.min((end2 === void 0 ? len : toAbsoluteIndex(end2, len)) - from, len - to);
        var inc = 1;
        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }
        while (count-- > 0) {
          if (from in O)
            O[to] = O[from];
          else
            delete O[to];
          to += inc;
          from += inc;
        }
        return O;
      };
    }
  });

  // node_modules/core-js/modules/_add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js/modules/_add-to-unscopables.js"(exports, module) {
      var UNSCOPABLES = require_wks()("unscopables");
      var ArrayProto = Array.prototype;
      if (ArrayProto[UNSCOPABLES] == void 0)
        require_hide()(ArrayProto, UNSCOPABLES, {});
      module.exports = function(key) {
        ArrayProto[UNSCOPABLES][key] = true;
      };
    }
  });

  // node_modules/core-js/modules/es6.array.copy-within.js
  var require_es6_array_copy_within = __commonJS({
    "node_modules/core-js/modules/es6.array.copy-within.js"() {
      var $export = require_export();
      $export($export.P, "Array", { copyWithin: require_array_copy_within() });
      require_add_to_unscopables()("copyWithin");
    }
  });

  // node_modules/core-js/modules/_array-fill.js
  var require_array_fill = __commonJS({
    "node_modules/core-js/modules/_array-fill.js"(exports, module) {
      "use strict";
      var toObject = require_to_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      module.exports = function fill(value) {
        var O = toObject(this);
        var length = toLength(O.length);
        var aLen = arguments.length;
        var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : void 0, length);
        var end2 = aLen > 2 ? arguments[2] : void 0;
        var endPos = end2 === void 0 ? length : toAbsoluteIndex(end2, length);
        while (endPos > index)
          O[index++] = value;
        return O;
      };
    }
  });

  // node_modules/core-js/modules/es6.array.fill.js
  var require_es6_array_fill = __commonJS({
    "node_modules/core-js/modules/es6.array.fill.js"() {
      var $export = require_export();
      $export($export.P, "Array", { fill: require_array_fill() });
      require_add_to_unscopables()("fill");
    }
  });

  // node_modules/core-js/modules/es6.array.find.js
  var require_es6_array_find = __commonJS({
    "node_modules/core-js/modules/es6.array.find.js"() {
      "use strict";
      var $export = require_export();
      var $find = require_array_methods()(5);
      var KEY = "find";
      var forced = true;
      if (KEY in [])
        Array(1)[KEY](function() {
          forced = false;
        });
      $export($export.P + $export.F * forced, "Array", {
        find: function find(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      require_add_to_unscopables()(KEY);
    }
  });

  // node_modules/core-js/modules/es6.array.find-index.js
  var require_es6_array_find_index = __commonJS({
    "node_modules/core-js/modules/es6.array.find-index.js"() {
      "use strict";
      var $export = require_export();
      var $find = require_array_methods()(6);
      var KEY = "findIndex";
      var forced = true;
      if (KEY in [])
        Array(1)[KEY](function() {
          forced = false;
        });
      $export($export.P + $export.F * forced, "Array", {
        findIndex: function findIndex(callbackfn) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      require_add_to_unscopables()(KEY);
    }
  });

  // node_modules/core-js/modules/_set-species.js
  var require_set_species = __commonJS({
    "node_modules/core-js/modules/_set-species.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var dP = require_object_dp();
      var DESCRIPTORS = require_descriptors();
      var SPECIES = require_wks()("species");
      module.exports = function(KEY) {
        var C = global2[KEY];
        if (DESCRIPTORS && C && !C[SPECIES])
          dP.f(C, SPECIES, {
            configurable: true,
            get: function() {
              return this;
            }
          });
      };
    }
  });

  // node_modules/core-js/modules/es6.array.species.js
  var require_es6_array_species = __commonJS({
    "node_modules/core-js/modules/es6.array.species.js"() {
      require_set_species()("Array");
    }
  });

  // node_modules/core-js/modules/_iter-step.js
  var require_iter_step = __commonJS({
    "node_modules/core-js/modules/_iter-step.js"(exports, module) {
      module.exports = function(done, value) {
        return { value, done: !!done };
      };
    }
  });

  // node_modules/core-js/modules/es6.array.iterator.js
  var require_es6_array_iterator = __commonJS({
    "node_modules/core-js/modules/es6.array.iterator.js"(exports, module) {
      "use strict";
      var addToUnscopables = require_add_to_unscopables();
      var step = require_iter_step();
      var Iterators = require_iterators();
      var toIObject = require_to_iobject();
      module.exports = require_iter_define()(Array, "Array", function(iterated, kind) {
        this._t = toIObject(iterated);
        this._i = 0;
        this._k = kind;
      }, function() {
        var O = this._t;
        var kind = this._k;
        var index = this._i++;
        if (!O || index >= O.length) {
          this._t = void 0;
          return step(1);
        }
        if (kind == "keys")
          return step(0, index);
        if (kind == "values")
          return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, "values");
      Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
    }
  });

  // node_modules/core-js/modules/_flags.js
  var require_flags = __commonJS({
    "node_modules/core-js/modules/_flags.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      module.exports = function() {
        var that = anObject(this);
        var result = "";
        if (that.global)
          result += "g";
        if (that.ignoreCase)
          result += "i";
        if (that.multiline)
          result += "m";
        if (that.unicode)
          result += "u";
        if (that.sticky)
          result += "y";
        return result;
      };
    }
  });

  // node_modules/core-js/modules/es6.regexp.constructor.js
  var require_es6_regexp_constructor = __commonJS({
    "node_modules/core-js/modules/es6.regexp.constructor.js"() {
      var global2 = require_global();
      var inheritIfRequired = require_inherit_if_required();
      var dP = require_object_dp().f;
      var gOPN = require_object_gopn().f;
      var isRegExp2 = require_is_regexp();
      var $flags = require_flags();
      var $RegExp = global2.RegExp;
      var Base = $RegExp;
      var proto = $RegExp.prototype;
      var re1 = /a/g;
      var re2 = /a/g;
      var CORRECT_NEW = new $RegExp(re1) !== re1;
      if (require_descriptors() && (!CORRECT_NEW || require_fails()(function() {
        re2[require_wks()("match")] = false;
        return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, "i") != "/a/i";
      }))) {
        $RegExp = function RegExp2(p, f) {
          var tiRE = this instanceof $RegExp;
          var piRE = isRegExp2(p);
          var fiU = f === void 0;
          return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(
            CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f),
            tiRE ? this : proto,
            $RegExp
          );
        };
        proxy = function(key) {
          key in $RegExp || dP($RegExp, key, {
            configurable: true,
            get: function() {
              return Base[key];
            },
            set: function(it) {
              Base[key] = it;
            }
          });
        };
        for (keys = gOPN(Base), i = 0; keys.length > i; )
          proxy(keys[i++]);
        proto.constructor = $RegExp;
        $RegExp.prototype = proto;
        require_redefine()(global2, "RegExp", $RegExp);
      }
      var proxy;
      var keys;
      var i;
      require_set_species()("RegExp");
    }
  });

  // node_modules/core-js/modules/_regexp-exec.js
  var require_regexp_exec = __commonJS({
    "node_modules/core-js/modules/_regexp-exec.js"(exports, module) {
      "use strict";
      var regexpFlags = require_flags();
      var nativeExec = RegExp.prototype.exec;
      var nativeReplace = String.prototype.replace;
      var patchedExec = nativeExec;
      var LAST_INDEX = "lastIndex";
      var UPDATES_LAST_INDEX_WRONG = function() {
        var re1 = /a/, re2 = /b*/g;
        nativeExec.call(re1, "a");
        nativeExec.call(re2, "a");
        return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
      }();
      var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;
      if (PATCH) {
        patchedExec = function exec(str) {
          var re = this;
          var lastIndex, reCopy, match, i;
          if (NPCG_INCLUDED) {
            reCopy = new RegExp("^" + re.source + "$(?!\\s)", regexpFlags.call(re));
          }
          if (UPDATES_LAST_INDEX_WRONG)
            lastIndex = re[LAST_INDEX];
          match = nativeExec.call(re, str);
          if (UPDATES_LAST_INDEX_WRONG && match) {
            re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
          }
          if (NPCG_INCLUDED && match && match.length > 1) {
            nativeReplace.call(match[0], reCopy, function() {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === void 0)
                  match[i] = void 0;
              }
            });
          }
          return match;
        };
      }
      module.exports = patchedExec;
    }
  });

  // node_modules/core-js/modules/es6.regexp.exec.js
  var require_es6_regexp_exec = __commonJS({
    "node_modules/core-js/modules/es6.regexp.exec.js"() {
      "use strict";
      var regexpExec = require_regexp_exec();
      require_export()({
        target: "RegExp",
        proto: true,
        forced: regexpExec !== /./.exec
      }, {
        exec: regexpExec
      });
    }
  });

  // node_modules/core-js/modules/es6.regexp.flags.js
  var require_es6_regexp_flags = __commonJS({
    "node_modules/core-js/modules/es6.regexp.flags.js"() {
      if (require_descriptors() && /./g.flags != "g")
        require_object_dp().f(RegExp.prototype, "flags", {
          configurable: true,
          get: require_flags()
        });
    }
  });

  // node_modules/core-js/modules/es6.regexp.to-string.js
  var require_es6_regexp_to_string = __commonJS({
    "node_modules/core-js/modules/es6.regexp.to-string.js"() {
      "use strict";
      require_es6_regexp_flags();
      var anObject = require_an_object();
      var $flags = require_flags();
      var DESCRIPTORS = require_descriptors();
      var TO_STRING = "toString";
      var $toString = /./[TO_STRING];
      var define = function(fn2) {
        require_redefine()(RegExp.prototype, TO_STRING, fn2, true);
      };
      if (require_fails()(function() {
        return $toString.call({ source: "a", flags: "b" }) != "/a/b";
      })) {
        define(function toString3() {
          var R = anObject(this);
          return "/".concat(
            R.source,
            "/",
            "flags" in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : void 0
          );
        });
      } else if ($toString.name != TO_STRING) {
        define(function toString3() {
          return $toString.call(this);
        });
      }
    }
  });

  // node_modules/core-js/modules/_advance-string-index.js
  var require_advance_string_index = __commonJS({
    "node_modules/core-js/modules/_advance-string-index.js"(exports, module) {
      "use strict";
      var at = require_string_at()(true);
      module.exports = function(S, index, unicode) {
        return index + (unicode ? at(S, index).length : 1);
      };
    }
  });

  // node_modules/core-js/modules/_regexp-exec-abstract.js
  var require_regexp_exec_abstract = __commonJS({
    "node_modules/core-js/modules/_regexp-exec-abstract.js"(exports, module) {
      "use strict";
      var classof = require_classof();
      var builtinExec = RegExp.prototype.exec;
      module.exports = function(R, S) {
        var exec = R.exec;
        if (typeof exec === "function") {
          var result = exec.call(R, S);
          if (typeof result !== "object") {
            throw new TypeError("RegExp exec method returned something other than an Object or null");
          }
          return result;
        }
        if (classof(R) !== "RegExp") {
          throw new TypeError("RegExp#exec called on incompatible receiver");
        }
        return builtinExec.call(R, S);
      };
    }
  });

  // node_modules/core-js/modules/_fix-re-wks.js
  var require_fix_re_wks = __commonJS({
    "node_modules/core-js/modules/_fix-re-wks.js"(exports, module) {
      "use strict";
      require_es6_regexp_exec();
      var redefine = require_redefine();
      var hide2 = require_hide();
      var fails = require_fails();
      var defined = require_defined();
      var wks = require_wks();
      var regexpExec = require_regexp_exec();
      var SPECIES = wks("species");
      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
        var re = /./;
        re.exec = function() {
          var result = [];
          result.groups = { a: "7" };
          return result;
        };
        return "".replace(re, "$<a>") !== "7";
      });
      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
        var re = /(?:)/;
        var originalExec = re.exec;
        re.exec = function() {
          return originalExec.apply(this, arguments);
        };
        var result = "ab".split(re);
        return result.length === 2 && result[0] === "a" && result[1] === "b";
      }();
      module.exports = function(KEY, length, exec) {
        var SYMBOL = wks(KEY);
        var DELEGATES_TO_SYMBOL = !fails(function() {
          var O = {};
          O[SYMBOL] = function() {
            return 7;
          };
          return ""[KEY](O) != 7;
        });
        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
          var execCalled = false;
          var re = /a/;
          re.exec = function() {
            execCalled = true;
            return null;
          };
          if (KEY === "split") {
            re.constructor = {};
            re.constructor[SPECIES] = function() {
              return re;
            };
          }
          re[SYMBOL]("");
          return !execCalled;
        }) : void 0;
        if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === "replace" && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
          var nativeRegExpMethod = /./[SYMBOL];
          var fns = exec(
            defined,
            SYMBOL,
            ""[KEY],
            function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
              if (regexp.exec === regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                  return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
                }
                return { done: true, value: nativeMethod.call(str, regexp, arg2) };
              }
              return { done: false };
            }
          );
          var strfn = fns[0];
          var rxfn = fns[1];
          redefine(String.prototype, KEY, strfn);
          hide2(
            RegExp.prototype,
            SYMBOL,
            length == 2 ? function(string, arg) {
              return rxfn.call(string, this, arg);
            } : function(string) {
              return rxfn.call(string, this);
            }
          );
        }
      };
    }
  });

  // node_modules/core-js/modules/es6.regexp.match.js
  var require_es6_regexp_match = __commonJS({
    "node_modules/core-js/modules/es6.regexp.match.js"() {
      "use strict";
      var anObject = require_an_object();
      var toLength = require_to_length();
      var advanceStringIndex = require_advance_string_index();
      var regExpExec = require_regexp_exec_abstract();
      require_fix_re_wks()("match", 1, function(defined, MATCH, $match, maybeCallNative) {
        return [
          // `String.prototype.match` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.match
          function match(regexp) {
            var O = defined(this);
            var fn2 = regexp == void 0 ? void 0 : regexp[MATCH];
            return fn2 !== void 0 ? fn2.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
          },
          // `RegExp.prototype[@@match]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
          function(regexp) {
            var res = maybeCallNative($match, regexp, this);
            if (res.done)
              return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            if (!rx.global)
              return regExpExec(rx, S);
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
            var A = [];
            var n = 0;
            var result;
            while ((result = regExpExec(rx, S)) !== null) {
              var matchStr = String(result[0]);
              A[n] = matchStr;
              if (matchStr === "")
                rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
              n++;
            }
            return n === 0 ? null : A;
          }
        ];
      });
    }
  });

  // node_modules/core-js/modules/es6.regexp.replace.js
  var require_es6_regexp_replace = __commonJS({
    "node_modules/core-js/modules/es6.regexp.replace.js"() {
      "use strict";
      var anObject = require_an_object();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var toInteger = require_to_integer();
      var advanceStringIndex = require_advance_string_index();
      var regExpExec = require_regexp_exec_abstract();
      var max2 = Math.max;
      var min2 = Math.min;
      var floor = Math.floor;
      var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;
      var maybeToString = function(it) {
        return it === void 0 ? it : String(it);
      };
      require_fix_re_wks()("replace", 2, function(defined, REPLACE, $replace, maybeCallNative) {
        return [
          // `String.prototype.replace` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.replace
          function replace(searchValue, replaceValue) {
            var O = defined(this);
            var fn2 = searchValue == void 0 ? void 0 : searchValue[REPLACE];
            return fn2 !== void 0 ? fn2.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
          },
          // `RegExp.prototype[@@replace]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
          function(regexp, replaceValue) {
            var res = maybeCallNative($replace, regexp, this, replaceValue);
            if (res.done)
              return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var functionalReplace = typeof replaceValue === "function";
            if (!functionalReplace)
              replaceValue = String(replaceValue);
            var global2 = rx.global;
            if (global2) {
              var fullUnicode = rx.unicode;
              rx.lastIndex = 0;
            }
            var results = [];
            while (true) {
              var result = regExpExec(rx, S);
              if (result === null)
                break;
              results.push(result);
              if (!global2)
                break;
              var matchStr = String(result[0]);
              if (matchStr === "")
                rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            }
            var accumulatedResult = "";
            var nextSourcePosition = 0;
            for (var i = 0; i < results.length; i++) {
              result = results[i];
              var matched = String(result[0]);
              var position = max2(min2(toInteger(result.index), S.length), 0);
              var captures = [];
              for (var j = 1; j < result.length; j++)
                captures.push(maybeToString(result[j]));
              var namedCaptures = result.groups;
              if (functionalReplace) {
                var replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== void 0)
                  replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(void 0, replacerArgs));
              } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
              }
              if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
              }
            }
            return accumulatedResult + S.slice(nextSourcePosition);
          }
        ];
        function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
          var tailPos = position + matched.length;
          var m = captures.length;
          var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
          if (namedCaptures !== void 0) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
          }
          return $replace.call(replacement, symbols, function(match, ch) {
            var capture;
            switch (ch.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return matched;
              case "`":
                return str.slice(0, position);
              case "'":
                return str.slice(tailPos);
              case "<":
                capture = namedCaptures[ch.slice(1, -1)];
                break;
              default:
                var n = +ch;
                if (n === 0)
                  return match;
                if (n > m) {
                  var f = floor(n / 10);
                  if (f === 0)
                    return match;
                  if (f <= m)
                    return captures[f - 1] === void 0 ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                  return match;
                }
                capture = captures[n - 1];
            }
            return capture === void 0 ? "" : capture;
          });
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.regexp.search.js
  var require_es6_regexp_search = __commonJS({
    "node_modules/core-js/modules/es6.regexp.search.js"() {
      "use strict";
      var anObject = require_an_object();
      var sameValue = require_same_value();
      var regExpExec = require_regexp_exec_abstract();
      require_fix_re_wks()("search", 1, function(defined, SEARCH, $search, maybeCallNative) {
        return [
          // `String.prototype.search` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.search
          function search(regexp) {
            var O = defined(this);
            var fn2 = regexp == void 0 ? void 0 : regexp[SEARCH];
            return fn2 !== void 0 ? fn2.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
          },
          // `RegExp.prototype[@@search]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
          function(regexp) {
            var res = maybeCallNative($search, regexp, this);
            if (res.done)
              return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var previousLastIndex = rx.lastIndex;
            if (!sameValue(previousLastIndex, 0))
              rx.lastIndex = 0;
            var result = regExpExec(rx, S);
            if (!sameValue(rx.lastIndex, previousLastIndex))
              rx.lastIndex = previousLastIndex;
            return result === null ? -1 : result.index;
          }
        ];
      });
    }
  });

  // node_modules/core-js/modules/_species-constructor.js
  var require_species_constructor = __commonJS({
    "node_modules/core-js/modules/_species-constructor.js"(exports, module) {
      var anObject = require_an_object();
      var aFunction = require_a_function();
      var SPECIES = require_wks()("species");
      module.exports = function(O, D) {
        var C = anObject(O).constructor;
        var S;
        return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? D : aFunction(S);
      };
    }
  });

  // node_modules/core-js/modules/es6.regexp.split.js
  var require_es6_regexp_split = __commonJS({
    "node_modules/core-js/modules/es6.regexp.split.js"() {
      "use strict";
      var isRegExp2 = require_is_regexp();
      var anObject = require_an_object();
      var speciesConstructor = require_species_constructor();
      var advanceStringIndex = require_advance_string_index();
      var toLength = require_to_length();
      var callRegExpExec = require_regexp_exec_abstract();
      var regexpExec = require_regexp_exec();
      var fails = require_fails();
      var $min = Math.min;
      var $push = [].push;
      var $SPLIT = "split";
      var LENGTH = "length";
      var LAST_INDEX = "lastIndex";
      var MAX_UINT32 = 4294967295;
      var SUPPORTS_Y = !fails(function() {
        RegExp(MAX_UINT32, "y");
      });
      require_fix_re_wks()("split", 2, function(defined, SPLIT, $split, maybeCallNative) {
        var internalSplit;
        if ("abbc"[$SPLIT](/(b)*/)[1] == "c" || "test"[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || "ab"[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || "."[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || "."[$SPLIT](/()()/)[LENGTH] > 1 || ""[$SPLIT](/.?/)[LENGTH]) {
          internalSplit = function(separator, limit) {
            var string = String(this);
            if (separator === void 0 && limit === 0)
              return [];
            if (!isRegExp2(separator))
              return $split.call(string, separator, limit);
            var output = [];
            var flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.unicode ? "u" : "") + (separator.sticky ? "y" : "");
            var lastLastIndex = 0;
            var splitLimit = limit === void 0 ? MAX_UINT32 : limit >>> 0;
            var separatorCopy = new RegExp(separator.source, flags + "g");
            var match, lastIndex, lastLength;
            while (match = regexpExec.call(separatorCopy, string)) {
              lastIndex = separatorCopy[LAST_INDEX];
              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match[LENGTH] > 1 && match.index < string[LENGTH])
                  $push.apply(output, match.slice(1));
                lastLength = match[0][LENGTH];
                lastLastIndex = lastIndex;
                if (output[LENGTH] >= splitLimit)
                  break;
              }
              if (separatorCopy[LAST_INDEX] === match.index)
                separatorCopy[LAST_INDEX]++;
            }
            if (lastLastIndex === string[LENGTH]) {
              if (lastLength || !separatorCopy.test(""))
                output.push("");
            } else
              output.push(string.slice(lastLastIndex));
            return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
          };
        } else if ("0"[$SPLIT](void 0, 0)[LENGTH]) {
          internalSplit = function(separator, limit) {
            return separator === void 0 && limit === 0 ? [] : $split.call(this, separator, limit);
          };
        } else {
          internalSplit = $split;
        }
        return [
          // `String.prototype.split` method
          // https://tc39.github.io/ecma262/#sec-string.prototype.split
          function split(separator, limit) {
            var O = defined(this);
            var splitter = separator == void 0 ? void 0 : separator[SPLIT];
            return splitter !== void 0 ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
          },
          // `RegExp.prototype[@@split]` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
          //
          // NOTE: This cannot be properly polyfilled in engines that don't support
          // the 'y' flag.
          function(regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
            if (res.done)
              return res.value;
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? "i" : "") + (rx.multiline ? "m" : "") + (rx.unicode ? "u" : "") + (SUPPORTS_Y ? "y" : "g");
            var splitter = new C(SUPPORTS_Y ? rx : "^(?:" + rx.source + ")", flags);
            var lim = limit === void 0 ? MAX_UINT32 : limit >>> 0;
            if (lim === 0)
              return [];
            if (S.length === 0)
              return callRegExpExec(splitter, S) === null ? [S] : [];
            var p = 0;
            var q = 0;
            var A = [];
            while (q < S.length) {
              splitter.lastIndex = SUPPORTS_Y ? q : 0;
              var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
              var e;
              if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                q = advanceStringIndex(S, q, unicodeMatching);
              } else {
                A.push(S.slice(p, q));
                if (A.length === lim)
                  return A;
                for (var i = 1; i <= z.length - 1; i++) {
                  A.push(z[i]);
                  if (A.length === lim)
                    return A;
                }
                q = p = e;
              }
            }
            A.push(S.slice(p));
            return A;
          }
        ];
      });
    }
  });

  // node_modules/core-js/modules/_an-instance.js
  var require_an_instance = __commonJS({
    "node_modules/core-js/modules/_an-instance.js"(exports, module) {
      module.exports = function(it, Constructor, name, forbiddenField) {
        if (!(it instanceof Constructor) || forbiddenField !== void 0 && forbiddenField in it) {
          throw TypeError(name + ": incorrect invocation!");
        }
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_for-of.js
  var require_for_of = __commonJS({
    "node_modules/core-js/modules/_for-of.js"(exports, module) {
      var ctx = require_ctx();
      var call = require_iter_call();
      var isArrayIter = require_is_array_iter();
      var anObject = require_an_object();
      var toLength = require_to_length();
      var getIterFn = require_core_get_iterator_method();
      var BREAK = {};
      var RETURN = {};
      var exports = module.exports = function(iterable, entries, fn2, that, ITERATOR) {
        var iterFn = ITERATOR ? function() {
          return iterable;
        } : getIterFn(iterable);
        var f = ctx(fn2, that, entries ? 2 : 1);
        var index = 0;
        var length, step, iterator, result;
        if (typeof iterFn != "function")
          throw TypeError(iterable + " is not iterable!");
        if (isArrayIter(iterFn))
          for (length = toLength(iterable.length); length > index; index++) {
            result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
            if (result === BREAK || result === RETURN)
              return result;
          }
        else
          for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
            result = call(iterator, f, step.value, entries);
            if (result === BREAK || result === RETURN)
              return result;
          }
      };
      exports.BREAK = BREAK;
      exports.RETURN = RETURN;
    }
  });

  // node_modules/core-js/modules/_task.js
  var require_task = __commonJS({
    "node_modules/core-js/modules/_task.js"(exports, module) {
      var ctx = require_ctx();
      var invoke = require_invoke();
      var html = require_html();
      var cel = require_dom_create();
      var global2 = require_global();
      var process2 = global2.process;
      var setTask = global2.setImmediate;
      var clearTask = global2.clearImmediate;
      var MessageChannel = global2.MessageChannel;
      var Dispatch = global2.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = "onreadystatechange";
      var defer;
      var channel;
      var port;
      var run = function() {
        var id = +this;
        if (queue.hasOwnProperty(id)) {
          var fn2 = queue[id];
          delete queue[id];
          fn2();
        }
      };
      var listener = function(event) {
        run.call(event.data);
      };
      if (!setTask || !clearTask) {
        setTask = function setImmediate(fn2) {
          var args = [];
          var i = 1;
          while (arguments.length > i)
            args.push(arguments[i++]);
          queue[++counter] = function() {
            invoke(typeof fn2 == "function" ? fn2 : Function(fn2), args);
          };
          defer(counter);
          return counter;
        };
        clearTask = function clearImmediate(id) {
          delete queue[id];
        };
        if (require_cof()(process2) == "process") {
          defer = function(id) {
            process2.nextTick(ctx(run, id, 1));
          };
        } else if (Dispatch && Dispatch.now) {
          defer = function(id) {
            Dispatch.now(ctx(run, id, 1));
          };
        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = ctx(port.postMessage, port, 1);
        } else if (global2.addEventListener && typeof postMessage == "function" && !global2.importScripts) {
          defer = function(id) {
            global2.postMessage(id + "", "*");
          };
          global2.addEventListener("message", listener, false);
        } else if (ONREADYSTATECHANGE in cel("script")) {
          defer = function(id) {
            html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
              html.removeChild(this);
              run.call(id);
            };
          };
        } else {
          defer = function(id) {
            setTimeout(ctx(run, id, 1), 0);
          };
        }
      }
      module.exports = {
        set: setTask,
        clear: clearTask
      };
    }
  });

  // node_modules/core-js/modules/_microtask.js
  var require_microtask = __commonJS({
    "node_modules/core-js/modules/_microtask.js"(exports, module) {
      var global2 = require_global();
      var macrotask = require_task().set;
      var Observer = global2.MutationObserver || global2.WebKitMutationObserver;
      var process2 = global2.process;
      var Promise2 = global2.Promise;
      var isNode = require_cof()(process2) == "process";
      module.exports = function() {
        var head, last, notify;
        var flush = function() {
          var parent, fn2;
          if (isNode && (parent = process2.domain))
            parent.exit();
          while (head) {
            fn2 = head.fn;
            head = head.next;
            try {
              fn2();
            } catch (e) {
              if (head)
                notify();
              else
                last = void 0;
              throw e;
            }
          }
          last = void 0;
          if (parent)
            parent.enter();
        };
        if (isNode) {
          notify = function() {
            process2.nextTick(flush);
          };
        } else if (Observer && !(global2.navigator && global2.navigator.standalone)) {
          var toggle = true;
          var node = document.createTextNode("");
          new Observer(flush).observe(node, { characterData: true });
          notify = function() {
            node.data = toggle = !toggle;
          };
        } else if (Promise2 && Promise2.resolve) {
          var promise = Promise2.resolve(void 0);
          notify = function() {
            promise.then(flush);
          };
        } else {
          notify = function() {
            macrotask.call(global2, flush);
          };
        }
        return function(fn2) {
          var task = { fn: fn2, next: void 0 };
          if (last)
            last.next = task;
          if (!head) {
            head = task;
            notify();
          }
          last = task;
        };
      };
    }
  });

  // node_modules/core-js/modules/_new-promise-capability.js
  var require_new_promise_capability = __commonJS({
    "node_modules/core-js/modules/_new-promise-capability.js"(exports, module) {
      "use strict";
      var aFunction = require_a_function();
      function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function($$resolve, $$reject) {
          if (resolve !== void 0 || reject !== void 0)
            throw TypeError("Bad Promise constructor");
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      }
      module.exports.f = function(C) {
        return new PromiseCapability(C);
      };
    }
  });

  // node_modules/core-js/modules/_perform.js
  var require_perform = __commonJS({
    "node_modules/core-js/modules/_perform.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return { e: false, v: exec() };
        } catch (e) {
          return { e: true, v: e };
        }
      };
    }
  });

  // node_modules/core-js/modules/_user-agent.js
  var require_user_agent = __commonJS({
    "node_modules/core-js/modules/_user-agent.js"(exports, module) {
      var global2 = require_global();
      var navigator2 = global2.navigator;
      module.exports = navigator2 && navigator2.userAgent || "";
    }
  });

  // node_modules/core-js/modules/_promise-resolve.js
  var require_promise_resolve = __commonJS({
    "node_modules/core-js/modules/_promise-resolve.js"(exports, module) {
      var anObject = require_an_object();
      var isObject3 = require_is_object();
      var newPromiseCapability = require_new_promise_capability();
      module.exports = function(C, x) {
        anObject(C);
        if (isObject3(x) && x.constructor === C)
          return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };
    }
  });

  // node_modules/core-js/modules/_redefine-all.js
  var require_redefine_all = __commonJS({
    "node_modules/core-js/modules/_redefine-all.js"(exports, module) {
      var redefine = require_redefine();
      module.exports = function(target, src, safe) {
        for (var key in src)
          redefine(target, key, src[key], safe);
        return target;
      };
    }
  });

  // node_modules/core-js/modules/es6.promise.js
  var require_es6_promise = __commonJS({
    "node_modules/core-js/modules/es6.promise.js"() {
      "use strict";
      var LIBRARY = require_library();
      var global2 = require_global();
      var ctx = require_ctx();
      var classof = require_classof();
      var $export = require_export();
      var isObject3 = require_is_object();
      var aFunction = require_a_function();
      var anInstance = require_an_instance();
      var forOf = require_for_of();
      var speciesConstructor = require_species_constructor();
      var task = require_task().set;
      var microtask = require_microtask()();
      var newPromiseCapabilityModule = require_new_promise_capability();
      var perform = require_perform();
      var userAgent = require_user_agent();
      var promiseResolve = require_promise_resolve();
      var PROMISE = "Promise";
      var TypeError2 = global2.TypeError;
      var process2 = global2.process;
      var versions = process2 && process2.versions;
      var v8 = versions && versions.v8 || "";
      var $Promise = global2[PROMISE];
      var isNode = classof(process2) == "process";
      var empty = function() {
      };
      var Internal;
      var newGenericPromiseCapability;
      var OwnPromiseCapability;
      var Wrapper;
      var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
      var USE_NATIVE = !!function() {
        try {
          var promise = $Promise.resolve(1);
          var FakePromise = (promise.constructor = {})[require_wks()("species")] = function(exec) {
            exec(empty, empty);
          };
          return (isNode || typeof PromiseRejectionEvent == "function") && promise.then(empty) instanceof FakePromise && v8.indexOf("6.6") !== 0 && userAgent.indexOf("Chrome/66") === -1;
        } catch (e) {
        }
      }();
      var isThenable2 = function(it) {
        var then;
        return isObject3(it) && typeof (then = it.then) == "function" ? then : false;
      };
      var notify = function(promise, isReject) {
        if (promise._n)
          return;
        promise._n = true;
        var chain = promise._c;
        microtask(function() {
          var value = promise._v;
          var ok = promise._s == 1;
          var i = 0;
          var run = function(reaction) {
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
              if (handler) {
                if (!ok) {
                  if (promise._h == 2)
                    onHandleUnhandled(promise);
                  promise._h = 1;
                }
                if (handler === true)
                  result = value;
                else {
                  if (domain)
                    domain.enter();
                  result = handler(value);
                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }
                if (result === reaction.promise) {
                  reject(TypeError2("Promise-chain cycle"));
                } else if (then = isThenable2(result)) {
                  then.call(result, resolve, reject);
                } else
                  resolve(result);
              } else
                reject(value);
            } catch (e) {
              if (domain && !exited)
                domain.exit();
              reject(e);
            }
          };
          while (chain.length > i)
            run(chain[i++]);
          promise._c = [];
          promise._n = false;
          if (isReject && !promise._h)
            onUnhandled(promise);
        });
      };
      var onUnhandled = function(promise) {
        task.call(global2, function() {
          var value = promise._v;
          var unhandled = isUnhandled(promise);
          var result, handler, console2;
          if (unhandled) {
            result = perform(function() {
              if (isNode) {
                process2.emit("unhandledRejection", value, promise);
              } else if (handler = global2.onunhandledrejection) {
                handler({ promise, reason: value });
              } else if ((console2 = global2.console) && console2.error) {
                console2.error("Unhandled promise rejection", value);
              }
            });
            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
          }
          promise._a = void 0;
          if (unhandled && result.e)
            throw result.v;
        });
      };
      var isUnhandled = function(promise) {
        return promise._h !== 1 && (promise._a || promise._c).length === 0;
      };
      var onHandleUnhandled = function(promise) {
        task.call(global2, function() {
          var handler;
          if (isNode) {
            process2.emit("rejectionHandled", promise);
          } else if (handler = global2.onrejectionhandled) {
            handler({ promise, reason: promise._v });
          }
        });
      };
      var $reject = function(value) {
        var promise = this;
        if (promise._d)
          return;
        promise._d = true;
        promise = promise._w || promise;
        promise._v = value;
        promise._s = 2;
        if (!promise._a)
          promise._a = promise._c.slice();
        notify(promise, true);
      };
      var $resolve = function(value) {
        var promise = this;
        var then;
        if (promise._d)
          return;
        promise._d = true;
        promise = promise._w || promise;
        try {
          if (promise === value)
            throw TypeError2("Promise can't be resolved itself");
          if (then = isThenable2(value)) {
            microtask(function() {
              var wrapper = { _w: promise, _d: false };
              try {
                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
              } catch (e) {
                $reject.call(wrapper, e);
              }
            });
          } else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
          }
        } catch (e) {
          $reject.call({ _w: promise, _d: false }, e);
        }
      };
      if (!USE_NATIVE) {
        $Promise = function Promise2(executor) {
          anInstance(this, $Promise, PROMISE, "_h");
          aFunction(executor);
          Internal.call(this);
          try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
          } catch (err) {
            $reject.call(this, err);
          }
        };
        Internal = function Promise2(executor) {
          this._c = [];
          this._a = void 0;
          this._s = 0;
          this._d = false;
          this._v = void 0;
          this._h = 0;
          this._n = false;
        };
        Internal.prototype = require_redefine_all()($Promise.prototype, {
          // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
          then: function then(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
            reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
            reaction.fail = typeof onRejected == "function" && onRejected;
            reaction.domain = isNode ? process2.domain : void 0;
            this._c.push(reaction);
            if (this._a)
              this._a.push(reaction);
            if (this._s)
              notify(this, false);
            return reaction.promise;
          },
          // 25.4.5.1 Promise.prototype.catch(onRejected)
          "catch": function(onRejected) {
            return this.then(void 0, onRejected);
          }
        });
        OwnPromiseCapability = function() {
          var promise = new Internal();
          this.promise = promise;
          this.resolve = ctx($resolve, promise, 1);
          this.reject = ctx($reject, promise, 1);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
          return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };
      }
      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
      require_set_to_string_tag()($Promise, PROMISE);
      require_set_species()(PROMISE);
      Wrapper = require_core()[PROMISE];
      $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          var $$reject = capability.reject;
          $$reject(r);
          return capability.promise;
        }
      });
      $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(x) {
          return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
        }
      });
      $export($export.S + $export.F * !(USE_NATIVE && require_iter_detect()(function(iter) {
        $Promise.all(iter)["catch"](empty);
      })), PROMISE, {
        // 25.4.4.1 Promise.all(iterable)
        all: function all3(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function() {
            var values = [];
            var index = 0;
            var remaining = 1;
            forOf(iterable, false, function(promise) {
              var $index = index++;
              var alreadyCalled = false;
              values.push(void 0);
              remaining++;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                values[$index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.e)
            reject(result.v);
          return capability.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = perform(function() {
            forOf(iterable, false, function(promise) {
              C.resolve(promise).then(capability.resolve, reject);
            });
          });
          if (result.e)
            reject(result.v);
          return capability.promise;
        }
      });
    }
  });

  // node_modules/core-js/modules/_validate-collection.js
  var require_validate_collection = __commonJS({
    "node_modules/core-js/modules/_validate-collection.js"(exports, module) {
      var isObject3 = require_is_object();
      module.exports = function(it, TYPE) {
        if (!isObject3(it) || it._t !== TYPE)
          throw TypeError("Incompatible receiver, " + TYPE + " required!");
        return it;
      };
    }
  });

  // node_modules/core-js/modules/_collection-strong.js
  var require_collection_strong = __commonJS({
    "node_modules/core-js/modules/_collection-strong.js"(exports, module) {
      "use strict";
      var dP = require_object_dp().f;
      var create = require_object_create();
      var redefineAll = require_redefine_all();
      var ctx = require_ctx();
      var anInstance = require_an_instance();
      var forOf = require_for_of();
      var $iterDefine = require_iter_define();
      var step = require_iter_step();
      var setSpecies = require_set_species();
      var DESCRIPTORS = require_descriptors();
      var fastKey = require_meta().fastKey;
      var validate = require_validate_collection();
      var SIZE = DESCRIPTORS ? "_s" : "size";
      var getEntry = function(that, key) {
        var index = fastKey(key);
        var entry;
        if (index !== "F")
          return that._i[index];
        for (entry = that._f; entry; entry = entry.n) {
          if (entry.k == key)
            return entry;
        }
      };
      module.exports = {
        getConstructor: function(wrapper, NAME2, IS_MAP, ADDER) {
          var C = wrapper(function(that, iterable) {
            anInstance(that, C, NAME2, "_i");
            that._t = NAME2;
            that._i = create(null);
            that._f = void 0;
            that._l = void 0;
            that[SIZE] = 0;
            if (iterable != void 0)
              forOf(iterable, IS_MAP, that[ADDER], that);
          });
          redefineAll(C.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function clear() {
              for (var that = validate(this, NAME2), data = that._i, entry = that._f; entry; entry = entry.n) {
                entry.r = true;
                if (entry.p)
                  entry.p = entry.p.n = void 0;
                delete data[entry.i];
              }
              that._f = that._l = void 0;
              that[SIZE] = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            "delete": function(key) {
              var that = validate(this, NAME2);
              var entry = getEntry(that, key);
              if (entry) {
                var next = entry.n;
                var prev = entry.p;
                delete that._i[entry.i];
                entry.r = true;
                if (prev)
                  prev.n = next;
                if (next)
                  next.p = prev;
                if (that._f == entry)
                  that._f = next;
                if (that._l == entry)
                  that._l = prev;
                that[SIZE]--;
              }
              return !!entry;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function forEach2(callbackfn) {
              validate(this, NAME2);
              var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
              var entry;
              while (entry = entry ? entry.n : this._f) {
                f(entry.v, entry.k, this);
                while (entry && entry.r)
                  entry = entry.p;
              }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
              return !!getEntry(validate(this, NAME2), key);
            }
          });
          if (DESCRIPTORS)
            dP(C.prototype, "size", {
              get: function() {
                return validate(this, NAME2)[SIZE];
              }
            });
          return C;
        },
        def: function(that, key, value) {
          var entry = getEntry(that, key);
          var prev, index;
          if (entry) {
            entry.v = value;
          } else {
            that._l = entry = {
              i: index = fastKey(key, true),
              // <- index
              k: key,
              // <- key
              v: value,
              // <- value
              p: prev = that._l,
              // <- previous entry
              n: void 0,
              // <- next entry
              r: false
              // <- removed
            };
            if (!that._f)
              that._f = entry;
            if (prev)
              prev.n = entry;
            that[SIZE]++;
            if (index !== "F")
              that._i[index] = entry;
          }
          return that;
        },
        getEntry,
        setStrong: function(C, NAME2, IS_MAP) {
          $iterDefine(C, NAME2, function(iterated, kind) {
            this._t = validate(iterated, NAME2);
            this._k = kind;
            this._l = void 0;
          }, function() {
            var that = this;
            var kind = that._k;
            var entry = that._l;
            while (entry && entry.r)
              entry = entry.p;
            if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
              that._t = void 0;
              return step(1);
            }
            if (kind == "keys")
              return step(0, entry.k);
            if (kind == "values")
              return step(0, entry.v);
            return step(0, [entry.k, entry.v]);
          }, IS_MAP ? "entries" : "values", !IS_MAP, true);
          setSpecies(NAME2);
        }
      };
    }
  });

  // node_modules/core-js/modules/_collection.js
  var require_collection = __commonJS({
    "node_modules/core-js/modules/_collection.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var $export = require_export();
      var redefine = require_redefine();
      var redefineAll = require_redefine_all();
      var meta = require_meta();
      var forOf = require_for_of();
      var anInstance = require_an_instance();
      var isObject3 = require_is_object();
      var fails = require_fails();
      var $iterDetect = require_iter_detect();
      var setToStringTag = require_set_to_string_tag();
      var inheritIfRequired = require_inherit_if_required();
      module.exports = function(NAME2, wrapper, methods, common, IS_MAP, IS_WEAK) {
        var Base = global2[NAME2];
        var C = Base;
        var ADDER = IS_MAP ? "set" : "add";
        var proto = C && C.prototype;
        var O = {};
        var fixMethod = function(KEY) {
          var fn2 = proto[KEY];
          redefine(
            proto,
            KEY,
            KEY == "delete" ? function(a) {
              return IS_WEAK && !isObject3(a) ? false : fn2.call(this, a === 0 ? 0 : a);
            } : KEY == "has" ? function has(a) {
              return IS_WEAK && !isObject3(a) ? false : fn2.call(this, a === 0 ? 0 : a);
            } : KEY == "get" ? function get(a) {
              return IS_WEAK && !isObject3(a) ? void 0 : fn2.call(this, a === 0 ? 0 : a);
            } : KEY == "add" ? function add(a) {
              fn2.call(this, a === 0 ? 0 : a);
              return this;
            } : function set(a, b) {
              fn2.call(this, a === 0 ? 0 : a, b);
              return this;
            }
          );
        };
        if (typeof C != "function" || !(IS_WEAK || proto.forEach && !fails(function() {
          new C().entries().next();
        }))) {
          C = common.getConstructor(wrapper, NAME2, IS_MAP, ADDER);
          redefineAll(C.prototype, methods);
          meta.NEED = true;
        } else {
          var instance = new C();
          var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
          var THROWS_ON_PRIMITIVES = fails(function() {
            instance.has(1);
          });
          var ACCEPT_ITERABLES = $iterDetect(function(iter) {
            new C(iter);
          });
          var BUGGY_ZERO = !IS_WEAK && fails(function() {
            var $instance = new C();
            var index = 5;
            while (index--)
              $instance[ADDER](index, index);
            return !$instance.has(-0);
          });
          if (!ACCEPT_ITERABLES) {
            C = wrapper(function(target, iterable) {
              anInstance(target, C, NAME2);
              var that = inheritIfRequired(new Base(), target, C);
              if (iterable != void 0)
                forOf(iterable, IS_MAP, that[ADDER], that);
              return that;
            });
            C.prototype = proto;
            proto.constructor = C;
          }
          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod("delete");
            fixMethod("has");
            IS_MAP && fixMethod("get");
          }
          if (BUGGY_ZERO || HASNT_CHAINING)
            fixMethod(ADDER);
          if (IS_WEAK && proto.clear)
            delete proto.clear;
        }
        setToStringTag(C, NAME2);
        O[NAME2] = C;
        $export($export.G + $export.W + $export.F * (C != Base), O);
        if (!IS_WEAK)
          common.setStrong(C, NAME2, IS_MAP);
        return C;
      };
    }
  });

  // node_modules/core-js/modules/es6.map.js
  var require_es6_map = __commonJS({
    "node_modules/core-js/modules/es6.map.js"(exports, module) {
      "use strict";
      var strong = require_collection_strong();
      var validate = require_validate_collection();
      var MAP = "Map";
      module.exports = require_collection()(MAP, function(get) {
        return function Map2() {
          return get(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        // 23.1.3.6 Map.prototype.get(key)
        get: function get(key) {
          var entry = strong.getEntry(validate(this, MAP), key);
          return entry && entry.v;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function set(key, value) {
          return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
        }
      }, strong, true);
    }
  });

  // node_modules/core-js/modules/es6.set.js
  var require_es6_set = __commonJS({
    "node_modules/core-js/modules/es6.set.js"(exports, module) {
      "use strict";
      var strong = require_collection_strong();
      var validate = require_validate_collection();
      var SET = "Set";
      module.exports = require_collection()(SET, function(get) {
        return function Set2() {
          return get(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        // 23.2.3.1 Set.prototype.add(value)
        add: function add(value) {
          return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
        }
      }, strong);
    }
  });

  // node_modules/core-js/modules/_collection-weak.js
  var require_collection_weak = __commonJS({
    "node_modules/core-js/modules/_collection-weak.js"(exports, module) {
      "use strict";
      var redefineAll = require_redefine_all();
      var getWeak = require_meta().getWeak;
      var anObject = require_an_object();
      var isObject3 = require_is_object();
      var anInstance = require_an_instance();
      var forOf = require_for_of();
      var createArrayMethod = require_array_methods();
      var $has = require_has();
      var validate = require_validate_collection();
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var id = 0;
      var uncaughtFrozenStore = function(that) {
        return that._l || (that._l = new UncaughtFrozenStore());
      };
      var UncaughtFrozenStore = function() {
        this.a = [];
      };
      var findUncaughtFrozen = function(store, key) {
        return arrayFind(store.a, function(it) {
          return it[0] === key;
        });
      };
      UncaughtFrozenStore.prototype = {
        get: function(key) {
          var entry = findUncaughtFrozen(this, key);
          if (entry)
            return entry[1];
        },
        has: function(key) {
          return !!findUncaughtFrozen(this, key);
        },
        set: function(key, value) {
          var entry = findUncaughtFrozen(this, key);
          if (entry)
            entry[1] = value;
          else
            this.a.push([key, value]);
        },
        "delete": function(key) {
          var index = arrayFindIndex(this.a, function(it) {
            return it[0] === key;
          });
          if (~index)
            this.a.splice(index, 1);
          return !!~index;
        }
      };
      module.exports = {
        getConstructor: function(wrapper, NAME2, IS_MAP, ADDER) {
          var C = wrapper(function(that, iterable) {
            anInstance(that, C, NAME2, "_i");
            that._t = NAME2;
            that._i = id++;
            that._l = void 0;
            if (iterable != void 0)
              forOf(iterable, IS_MAP, that[ADDER], that);
          });
          redefineAll(C.prototype, {
            // 23.3.3.2 WeakMap.prototype.delete(key)
            // 23.4.3.3 WeakSet.prototype.delete(value)
            "delete": function(key) {
              if (!isObject3(key))
                return false;
              var data = getWeak(key);
              if (data === true)
                return uncaughtFrozenStore(validate(this, NAME2))["delete"](key);
              return data && $has(data, this._i) && delete data[this._i];
            },
            // 23.3.3.4 WeakMap.prototype.has(key)
            // 23.4.3.4 WeakSet.prototype.has(value)
            has: function has(key) {
              if (!isObject3(key))
                return false;
              var data = getWeak(key);
              if (data === true)
                return uncaughtFrozenStore(validate(this, NAME2)).has(key);
              return data && $has(data, this._i);
            }
          });
          return C;
        },
        def: function(that, key, value) {
          var data = getWeak(anObject(key), true);
          if (data === true)
            uncaughtFrozenStore(that).set(key, value);
          else
            data[that._i] = value;
          return that;
        },
        ufstore: uncaughtFrozenStore
      };
    }
  });

  // node_modules/core-js/modules/es6.weak-map.js
  var require_es6_weak_map = __commonJS({
    "node_modules/core-js/modules/es6.weak-map.js"(exports, module) {
      "use strict";
      var global2 = require_global();
      var each = require_array_methods()(0);
      var redefine = require_redefine();
      var meta = require_meta();
      var assign = require_object_assign();
      var weak = require_collection_weak();
      var isObject3 = require_is_object();
      var validate = require_validate_collection();
      var NATIVE_WEAK_MAP = require_validate_collection();
      var IS_IE11 = !global2.ActiveXObject && "ActiveXObject" in global2;
      var WEAK_MAP = "WeakMap";
      var getWeak = meta.getWeak;
      var isExtensible = Object.isExtensible;
      var uncaughtFrozenStore = weak.ufstore;
      var InternalMap;
      var wrapper = function(get) {
        return function WeakMap2() {
          return get(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      };
      var methods = {
        // 23.3.3.3 WeakMap.prototype.get(key)
        get: function get(key) {
          if (isObject3(key)) {
            var data = getWeak(key);
            if (data === true)
              return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
            return data ? data[this._i] : void 0;
          }
        },
        // 23.3.3.5 WeakMap.prototype.set(key, value)
        set: function set(key, value) {
          return weak.def(validate(this, WEAK_MAP), key, value);
        }
      };
      var $WeakMap = module.exports = require_collection()(WEAK_MAP, wrapper, methods, weak, true, true);
      if (NATIVE_WEAK_MAP && IS_IE11) {
        InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
        assign(InternalMap.prototype, methods);
        meta.NEED = true;
        each(["delete", "has", "get", "set"], function(key) {
          var proto = $WeakMap.prototype;
          var method = proto[key];
          redefine(proto, key, function(a, b) {
            if (isObject3(a) && !isExtensible(a)) {
              if (!this._f)
                this._f = new InternalMap();
              var result = this._f[key](a, b);
              return key == "set" ? this : result;
            }
            return method.call(this, a, b);
          });
        });
      }
    }
  });

  // node_modules/core-js/modules/es6.weak-set.js
  var require_es6_weak_set = __commonJS({
    "node_modules/core-js/modules/es6.weak-set.js"() {
      "use strict";
      var weak = require_collection_weak();
      var validate = require_validate_collection();
      var WEAK_SET = "WeakSet";
      require_collection()(WEAK_SET, function(get) {
        return function WeakSet2() {
          return get(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        // 23.4.3.1 WeakSet.prototype.add(value)
        add: function add(value) {
          return weak.def(validate(this, WEAK_SET), value, true);
        }
      }, weak, false, true);
    }
  });

  // node_modules/core-js/modules/_typed.js
  var require_typed = __commonJS({
    "node_modules/core-js/modules/_typed.js"(exports, module) {
      var global2 = require_global();
      var hide2 = require_hide();
      var uid = require_uid();
      var TYPED = uid("typed_array");
      var VIEW = uid("view");
      var ABV = !!(global2.ArrayBuffer && global2.DataView);
      var CONSTR = ABV;
      var i = 0;
      var l = 9;
      var Typed;
      var TypedArrayConstructors = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
      while (i < l) {
        if (Typed = global2[TypedArrayConstructors[i++]]) {
          hide2(Typed.prototype, TYPED, true);
          hide2(Typed.prototype, VIEW, true);
        } else
          CONSTR = false;
      }
      module.exports = {
        ABV,
        CONSTR,
        TYPED,
        VIEW
      };
    }
  });

  // node_modules/core-js/modules/_to-index.js
  var require_to_index = __commonJS({
    "node_modules/core-js/modules/_to-index.js"(exports, module) {
      var toInteger = require_to_integer();
      var toLength = require_to_length();
      module.exports = function(it) {
        if (it === void 0)
          return 0;
        var number = toInteger(it);
        var length = toLength(number);
        if (number !== length)
          throw RangeError("Wrong length!");
        return length;
      };
    }
  });

  // node_modules/core-js/modules/_typed-buffer.js
  var require_typed_buffer = __commonJS({
    "node_modules/core-js/modules/_typed-buffer.js"(exports) {
      "use strict";
      var global2 = require_global();
      var DESCRIPTORS = require_descriptors();
      var LIBRARY = require_library();
      var $typed = require_typed();
      var hide2 = require_hide();
      var redefineAll = require_redefine_all();
      var fails = require_fails();
      var anInstance = require_an_instance();
      var toInteger = require_to_integer();
      var toLength = require_to_length();
      var toIndex = require_to_index();
      var gOPN = require_object_gopn().f;
      var dP = require_object_dp().f;
      var arrayFill = require_array_fill();
      var setToStringTag = require_set_to_string_tag();
      var ARRAY_BUFFER = "ArrayBuffer";
      var DATA_VIEW = "DataView";
      var PROTOTYPE = "prototype";
      var WRONG_LENGTH = "Wrong length!";
      var WRONG_INDEX = "Wrong index!";
      var $ArrayBuffer = global2[ARRAY_BUFFER];
      var $DataView = global2[DATA_VIEW];
      var Math2 = global2.Math;
      var RangeError2 = global2.RangeError;
      var Infinity2 = global2.Infinity;
      var BaseBuffer = $ArrayBuffer;
      var abs = Math2.abs;
      var pow = Math2.pow;
      var floor = Math2.floor;
      var log = Math2.log;
      var LN2 = Math2.LN2;
      var BUFFER = "buffer";
      var BYTE_LENGTH = "byteLength";
      var BYTE_OFFSET = "byteOffset";
      var $BUFFER = DESCRIPTORS ? "_b" : BUFFER;
      var $LENGTH = DESCRIPTORS ? "_l" : BYTE_LENGTH;
      var $OFFSET = DESCRIPTORS ? "_o" : BYTE_OFFSET;
      function packIEEE754(value, mLen, nBytes) {
        var buffer = new Array(nBytes);
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
        var i = 0;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        var e, m, c;
        value = abs(value);
        if (value != value || value === Infinity2) {
          m = value != value ? 1 : 0;
          e = eMax;
        } else {
          e = floor(log(value) / LN2);
          if (value * (c = pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * pow(2, eBias - 1) * pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8)
          ;
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8)
          ;
        buffer[--i] |= s * 128;
        return buffer;
      }
      function unpackIEEE754(buffer, mLen, nBytes) {
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = eLen - 7;
        var i = nBytes - 1;
        var s = buffer[i--];
        var e = s & 127;
        var m;
        s >>= 7;
        for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8)
          ;
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8)
          ;
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : s ? -Infinity2 : Infinity2;
        } else {
          m = m + pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * pow(2, e - mLen);
      }
      function unpackI32(bytes) {
        return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
      }
      function packI8(it) {
        return [it & 255];
      }
      function packI16(it) {
        return [it & 255, it >> 8 & 255];
      }
      function packI32(it) {
        return [it & 255, it >> 8 & 255, it >> 16 & 255, it >> 24 & 255];
      }
      function packF64(it) {
        return packIEEE754(it, 52, 8);
      }
      function packF32(it) {
        return packIEEE754(it, 23, 4);
      }
      function addGetter(C, key2, internal) {
        dP(C[PROTOTYPE], key2, { get: function() {
          return this[internal];
        } });
      }
      function get(view2, bytes, index, isLittleEndian) {
        var numIndex = +index;
        var intIndex = toIndex(numIndex);
        if (intIndex + bytes > view2[$LENGTH])
          throw RangeError2(WRONG_INDEX);
        var store = view2[$BUFFER]._b;
        var start2 = intIndex + view2[$OFFSET];
        var pack = store.slice(start2, start2 + bytes);
        return isLittleEndian ? pack : pack.reverse();
      }
      function set(view2, bytes, index, conversion, value, isLittleEndian) {
        var numIndex = +index;
        var intIndex = toIndex(numIndex);
        if (intIndex + bytes > view2[$LENGTH])
          throw RangeError2(WRONG_INDEX);
        var store = view2[$BUFFER]._b;
        var start2 = intIndex + view2[$OFFSET];
        var pack = conversion(+value);
        for (var i = 0; i < bytes; i++)
          store[start2 + i] = pack[isLittleEndian ? i : bytes - i - 1];
      }
      if (!$typed.ABV) {
        $ArrayBuffer = function ArrayBuffer2(length) {
          anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
          var byteLength = toIndex(length);
          this._b = arrayFill.call(new Array(byteLength), 0);
          this[$LENGTH] = byteLength;
        };
        $DataView = function DataView2(buffer, byteOffset, byteLength) {
          anInstance(this, $DataView, DATA_VIEW);
          anInstance(buffer, $ArrayBuffer, DATA_VIEW);
          var bufferLength = buffer[$LENGTH];
          var offset2 = toInteger(byteOffset);
          if (offset2 < 0 || offset2 > bufferLength)
            throw RangeError2("Wrong offset!");
          byteLength = byteLength === void 0 ? bufferLength - offset2 : toLength(byteLength);
          if (offset2 + byteLength > bufferLength)
            throw RangeError2(WRONG_LENGTH);
          this[$BUFFER] = buffer;
          this[$OFFSET] = offset2;
          this[$LENGTH] = byteLength;
        };
        if (DESCRIPTORS) {
          addGetter($ArrayBuffer, BYTE_LENGTH, "_l");
          addGetter($DataView, BUFFER, "_b");
          addGetter($DataView, BYTE_LENGTH, "_l");
          addGetter($DataView, BYTE_OFFSET, "_o");
        }
        redefineAll($DataView[PROTOTYPE], {
          getInt8: function getInt8(byteOffset) {
            return get(this, 1, byteOffset)[0] << 24 >> 24;
          },
          getUint8: function getUint8(byteOffset) {
            return get(this, 1, byteOffset)[0];
          },
          getInt16: function getInt16(byteOffset) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
          },
          getUint16: function getUint16(byteOffset) {
            var bytes = get(this, 2, byteOffset, arguments[1]);
            return bytes[1] << 8 | bytes[0];
          },
          getInt32: function getInt32(byteOffset) {
            return unpackI32(get(this, 4, byteOffset, arguments[1]));
          },
          getUint32: function getUint32(byteOffset) {
            return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
          },
          getFloat32: function getFloat32(byteOffset) {
            return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
          },
          getFloat64: function getFloat64(byteOffset) {
            return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
          },
          setInt8: function setInt8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
          },
          setUint8: function setUint8(byteOffset, value) {
            set(this, 1, byteOffset, packI8, value);
          },
          setInt16: function setInt16(byteOffset, value) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
          },
          setUint16: function setUint16(byteOffset, value) {
            set(this, 2, byteOffset, packI16, value, arguments[2]);
          },
          setInt32: function setInt32(byteOffset, value) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
          },
          setUint32: function setUint32(byteOffset, value) {
            set(this, 4, byteOffset, packI32, value, arguments[2]);
          },
          setFloat32: function setFloat32(byteOffset, value) {
            set(this, 4, byteOffset, packF32, value, arguments[2]);
          },
          setFloat64: function setFloat64(byteOffset, value) {
            set(this, 8, byteOffset, packF64, value, arguments[2]);
          }
        });
      } else {
        if (!fails(function() {
          $ArrayBuffer(1);
        }) || !fails(function() {
          new $ArrayBuffer(-1);
        }) || fails(function() {
          new $ArrayBuffer();
          new $ArrayBuffer(1.5);
          new $ArrayBuffer(NaN);
          return $ArrayBuffer.name != ARRAY_BUFFER;
        })) {
          $ArrayBuffer = function ArrayBuffer2(length) {
            anInstance(this, $ArrayBuffer);
            return new BaseBuffer(toIndex(length));
          };
          ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
          for (keys = gOPN(BaseBuffer), j = 0; keys.length > j; ) {
            if (!((key = keys[j++]) in $ArrayBuffer))
              hide2($ArrayBuffer, key, BaseBuffer[key]);
          }
          if (!LIBRARY)
            ArrayBufferProto.constructor = $ArrayBuffer;
        }
        view = new $DataView(new $ArrayBuffer(2));
        $setInt8 = $DataView[PROTOTYPE].setInt8;
        view.setInt8(0, 2147483648);
        view.setInt8(1, 2147483649);
        if (view.getInt8(0) || !view.getInt8(1))
          redefineAll($DataView[PROTOTYPE], {
            setInt8: function setInt8(byteOffset, value) {
              $setInt8.call(this, byteOffset, value << 24 >> 24);
            },
            setUint8: function setUint8(byteOffset, value) {
              $setInt8.call(this, byteOffset, value << 24 >> 24);
            }
          }, true);
      }
      var ArrayBufferProto;
      var keys;
      var j;
      var key;
      var view;
      var $setInt8;
      setToStringTag($ArrayBuffer, ARRAY_BUFFER);
      setToStringTag($DataView, DATA_VIEW);
      hide2($DataView[PROTOTYPE], $typed.VIEW, true);
      exports[ARRAY_BUFFER] = $ArrayBuffer;
      exports[DATA_VIEW] = $DataView;
    }
  });

  // node_modules/core-js/modules/es6.typed.array-buffer.js
  var require_es6_typed_array_buffer = __commonJS({
    "node_modules/core-js/modules/es6.typed.array-buffer.js"() {
      "use strict";
      var $export = require_export();
      var $typed = require_typed();
      var buffer = require_typed_buffer();
      var anObject = require_an_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var toLength = require_to_length();
      var isObject3 = require_is_object();
      var ArrayBuffer2 = require_global().ArrayBuffer;
      var speciesConstructor = require_species_constructor();
      var $ArrayBuffer = buffer.ArrayBuffer;
      var $DataView = buffer.DataView;
      var $isView = $typed.ABV && ArrayBuffer2.isView;
      var $slice = $ArrayBuffer.prototype.slice;
      var VIEW = $typed.VIEW;
      var ARRAY_BUFFER = "ArrayBuffer";
      $export($export.G + $export.W + $export.F * (ArrayBuffer2 !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });
      $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
        // 24.1.3.1 ArrayBuffer.isView(arg)
        isView: function isView(it) {
          return $isView && $isView(it) || isObject3(it) && VIEW in it;
        }
      });
      $export($export.P + $export.U + $export.F * require_fails()(function() {
        return !new $ArrayBuffer(2).slice(1, void 0).byteLength;
      }), ARRAY_BUFFER, {
        // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
        slice: function slice(start2, end2) {
          if ($slice !== void 0 && end2 === void 0)
            return $slice.call(anObject(this), start2);
          var len = anObject(this).byteLength;
          var first = toAbsoluteIndex(start2, len);
          var fin = toAbsoluteIndex(end2 === void 0 ? len : end2, len);
          var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
          var viewS = new $DataView(this);
          var viewT = new $DataView(result);
          var index = 0;
          while (first < fin) {
            viewT.setUint8(index++, viewS.getUint8(first++));
          }
          return result;
        }
      });
      require_set_species()(ARRAY_BUFFER);
    }
  });

  // node_modules/core-js/modules/es6.typed.data-view.js
  var require_es6_typed_data_view = __commonJS({
    "node_modules/core-js/modules/es6.typed.data-view.js"() {
      var $export = require_export();
      $export($export.G + $export.W + $export.F * !require_typed().ABV, {
        DataView: require_typed_buffer().DataView
      });
    }
  });

  // node_modules/core-js/modules/_typed-array.js
  var require_typed_array = __commonJS({
    "node_modules/core-js/modules/_typed-array.js"(exports, module) {
      "use strict";
      if (require_descriptors()) {
        LIBRARY = require_library();
        global2 = require_global();
        fails = require_fails();
        $export = require_export();
        $typed = require_typed();
        $buffer = require_typed_buffer();
        ctx = require_ctx();
        anInstance = require_an_instance();
        propertyDesc = require_property_desc();
        hide2 = require_hide();
        redefineAll = require_redefine_all();
        toInteger = require_to_integer();
        toLength = require_to_length();
        toIndex = require_to_index();
        toAbsoluteIndex = require_to_absolute_index();
        toPrimitive = require_to_primitive();
        has = require_has();
        classof = require_classof();
        isObject3 = require_is_object();
        toObject = require_to_object();
        isArrayIter = require_is_array_iter();
        create = require_object_create();
        getPrototypeOf2 = require_object_gpo();
        gOPN = require_object_gopn().f;
        getIterFn = require_core_get_iterator_method();
        uid = require_uid();
        wks = require_wks();
        createArrayMethod = require_array_methods();
        createArrayIncludes = require_array_includes();
        speciesConstructor = require_species_constructor();
        ArrayIterators = require_es6_array_iterator();
        Iterators = require_iterators();
        $iterDetect = require_iter_detect();
        setSpecies = require_set_species();
        arrayFill = require_array_fill();
        arrayCopyWithin = require_array_copy_within();
        $DP = require_object_dp();
        $GOPD = require_object_gopd();
        dP = $DP.f;
        gOPD = $GOPD.f;
        RangeError2 = global2.RangeError;
        TypeError2 = global2.TypeError;
        Uint8Array2 = global2.Uint8Array;
        ARRAY_BUFFER = "ArrayBuffer";
        SHARED_BUFFER = "Shared" + ARRAY_BUFFER;
        BYTES_PER_ELEMENT = "BYTES_PER_ELEMENT";
        PROTOTYPE = "prototype";
        ArrayProto = Array[PROTOTYPE];
        $ArrayBuffer = $buffer.ArrayBuffer;
        $DataView = $buffer.DataView;
        arrayForEach = createArrayMethod(0);
        arrayFilter = createArrayMethod(2);
        arraySome = createArrayMethod(3);
        arrayEvery = createArrayMethod(4);
        arrayFind = createArrayMethod(5);
        arrayFindIndex = createArrayMethod(6);
        arrayIncludes = createArrayIncludes(true);
        arrayIndexOf = createArrayIncludes(false);
        arrayValues = ArrayIterators.values;
        arrayKeys = ArrayIterators.keys;
        arrayEntries = ArrayIterators.entries;
        arrayLastIndexOf = ArrayProto.lastIndexOf;
        arrayReduce = ArrayProto.reduce;
        arrayReduceRight = ArrayProto.reduceRight;
        arrayJoin = ArrayProto.join;
        arraySort = ArrayProto.sort;
        arraySlice = ArrayProto.slice;
        arrayToString = ArrayProto.toString;
        arrayToLocaleString = ArrayProto.toLocaleString;
        ITERATOR = wks("iterator");
        TAG = wks("toStringTag");
        TYPED_CONSTRUCTOR = uid("typed_constructor");
        DEF_CONSTRUCTOR = uid("def_constructor");
        ALL_CONSTRUCTORS = $typed.CONSTR;
        TYPED_ARRAY = $typed.TYPED;
        VIEW = $typed.VIEW;
        WRONG_LENGTH = "Wrong length!";
        $map = createArrayMethod(1, function(O, length) {
          return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
        });
        LITTLE_ENDIAN = fails(function() {
          return new Uint8Array2(new Uint16Array([1]).buffer)[0] === 1;
        });
        FORCED_SET = !!Uint8Array2 && !!Uint8Array2[PROTOTYPE].set && fails(function() {
          new Uint8Array2(1).set({});
        });
        toOffset = function(it, BYTES) {
          var offset2 = toInteger(it);
          if (offset2 < 0 || offset2 % BYTES)
            throw RangeError2("Wrong offset!");
          return offset2;
        };
        validate = function(it) {
          if (isObject3(it) && TYPED_ARRAY in it)
            return it;
          throw TypeError2(it + " is not a typed array!");
        };
        allocate = function(C, length) {
          if (!(isObject3(C) && TYPED_CONSTRUCTOR in C)) {
            throw TypeError2("It is not a typed array constructor!");
          }
          return new C(length);
        };
        speciesFromList = function(O, list) {
          return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
        };
        fromList = function(C, list) {
          var index = 0;
          var length = list.length;
          var result = allocate(C, length);
          while (length > index)
            result[index] = list[index++];
          return result;
        };
        addGetter = function(it, key, internal) {
          dP(it, key, { get: function() {
            return this._d[internal];
          } });
        };
        $from = function from(source) {
          var O = toObject(source);
          var aLen = arguments.length;
          var mapfn = aLen > 1 ? arguments[1] : void 0;
          var mapping = mapfn !== void 0;
          var iterFn = getIterFn(O);
          var i, length, values, result, step, iterator;
          if (iterFn != void 0 && !isArrayIter(iterFn)) {
            for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
              values.push(step.value);
            }
            O = values;
          }
          if (mapping && aLen > 2)
            mapfn = ctx(mapfn, arguments[2], 2);
          for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
            result[i] = mapping ? mapfn(O[i], i) : O[i];
          }
          return result;
        };
        $of = function of() {
          var index = 0;
          var length = arguments.length;
          var result = allocate(this, length);
          while (length > index)
            result[index] = arguments[index++];
          return result;
        };
        TO_LOCALE_BUG = !!Uint8Array2 && fails(function() {
          arrayToLocaleString.call(new Uint8Array2(1));
        });
        $toLocaleString = function toLocaleString() {
          return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
        };
        proto = {
          copyWithin: function copyWithin(target, start2) {
            return arrayCopyWithin.call(validate(this), target, start2, arguments.length > 2 ? arguments[2] : void 0);
          },
          every: function every(callbackfn) {
            return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function fill(value) {
            return arrayFill.apply(validate(this), arguments);
          },
          filter: function filter2(callbackfn) {
            return speciesFromList(this, arrayFilter(
              validate(this),
              callbackfn,
              arguments.length > 1 ? arguments[1] : void 0
            ));
          },
          find: function find(predicate) {
            return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
          },
          findIndex: function findIndex(predicate) {
            return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : void 0);
          },
          forEach: function forEach2(callbackfn) {
            arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function indexOf(searchElement) {
            return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
          },
          includes: function includes(searchElement) {
            return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : void 0);
          },
          join: function join(separator) {
            return arrayJoin.apply(validate(this), arguments);
          },
          lastIndexOf: function lastIndexOf(searchElement) {
            return arrayLastIndexOf.apply(validate(this), arguments);
          },
          map: function map(mapfn) {
            return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : void 0);
          },
          reduce: function reduce(callbackfn) {
            return arrayReduce.apply(validate(this), arguments);
          },
          reduceRight: function reduceRight(callbackfn) {
            return arrayReduceRight.apply(validate(this), arguments);
          },
          reverse: function reverse() {
            var that = this;
            var length = validate(that).length;
            var middle = Math.floor(length / 2);
            var index = 0;
            var value;
            while (index < middle) {
              value = that[index];
              that[index++] = that[--length];
              that[length] = value;
            }
            return that;
          },
          some: function some(callbackfn) {
            return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function sort(comparefn) {
            return arraySort.call(validate(this), comparefn);
          },
          subarray: function subarray(begin, end2) {
            var O = validate(this);
            var length = O.length;
            var $begin = toAbsoluteIndex(begin, length);
            return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
              O.buffer,
              O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
              toLength((end2 === void 0 ? length : toAbsoluteIndex(end2, length)) - $begin)
            );
          }
        };
        $slice = function slice(start2, end2) {
          return speciesFromList(this, arraySlice.call(validate(this), start2, end2));
        };
        $set = function set(arrayLike) {
          validate(this);
          var offset2 = toOffset(arguments[1], 1);
          var length = this.length;
          var src = toObject(arrayLike);
          var len = toLength(src.length);
          var index = 0;
          if (len + offset2 > length)
            throw RangeError2(WRONG_LENGTH);
          while (index < len)
            this[offset2 + index] = src[index++];
        };
        $iterators = {
          entries: function entries() {
            return arrayEntries.call(validate(this));
          },
          keys: function keys() {
            return arrayKeys.call(validate(this));
          },
          values: function values() {
            return arrayValues.call(validate(this));
          }
        };
        isTAIndex = function(target, key) {
          return isObject3(target) && target[TYPED_ARRAY] && typeof key != "symbol" && key in target && String(+key) == String(key);
        };
        $getDesc = function getOwnPropertyDescriptor(target, key) {
          return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
        };
        $setDesc = function defineProperty(target, key, desc) {
          if (isTAIndex(target, key = toPrimitive(key, true)) && isObject3(desc) && has(desc, "value") && !has(desc, "get") && !has(desc, "set") && !desc.configurable && (!has(desc, "writable") || desc.writable) && (!has(desc, "enumerable") || desc.enumerable)) {
            target[key] = desc.value;
            return target;
          }
          return dP(target, key, desc);
        };
        if (!ALL_CONSTRUCTORS) {
          $GOPD.f = $getDesc;
          $DP.f = $setDesc;
        }
        $export($export.S + $export.F * !ALL_CONSTRUCTORS, "Object", {
          getOwnPropertyDescriptor: $getDesc,
          defineProperty: $setDesc
        });
        if (fails(function() {
          arrayToString.call({});
        })) {
          arrayToString = arrayToLocaleString = function toString3() {
            return arrayJoin.call(this);
          };
        }
        $TypedArrayPrototype$ = redefineAll({}, proto);
        redefineAll($TypedArrayPrototype$, $iterators);
        hide2($TypedArrayPrototype$, ITERATOR, $iterators.values);
        redefineAll($TypedArrayPrototype$, {
          slice: $slice,
          set: $set,
          constructor: function() {
          },
          toString: arrayToString,
          toLocaleString: $toLocaleString
        });
        addGetter($TypedArrayPrototype$, "buffer", "b");
        addGetter($TypedArrayPrototype$, "byteOffset", "o");
        addGetter($TypedArrayPrototype$, "byteLength", "l");
        addGetter($TypedArrayPrototype$, "length", "e");
        dP($TypedArrayPrototype$, TAG, {
          get: function() {
            return this[TYPED_ARRAY];
          }
        });
        module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
          CLAMPED = !!CLAMPED;
          var NAME2 = KEY + (CLAMPED ? "Clamped" : "") + "Array";
          var GETTER = "get" + KEY;
          var SETTER = "set" + KEY;
          var TypedArray = global2[NAME2];
          var Base = TypedArray || {};
          var TAC = TypedArray && getPrototypeOf2(TypedArray);
          var FORCED = !TypedArray || !$typed.ABV;
          var O = {};
          var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
          var getter = function(that, index) {
            var data = that._d;
            return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
          };
          var setter = function(that, index, value) {
            var data = that._d;
            if (CLAMPED)
              value = (value = Math.round(value)) < 0 ? 0 : value > 255 ? 255 : value & 255;
            data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
          };
          var addElement = function(that, index) {
            dP(that, index, {
              get: function() {
                return getter(this, index);
              },
              set: function(value) {
                return setter(this, index, value);
              },
              enumerable: true
            });
          };
          if (FORCED) {
            TypedArray = wrapper(function(that, data, $offset, $length) {
              anInstance(that, TypedArray, NAME2, "_d");
              var index = 0;
              var offset2 = 0;
              var buffer, byteLength, length, klass;
              if (!isObject3(data)) {
                length = toIndex(data);
                byteLength = length * BYTES;
                buffer = new $ArrayBuffer(byteLength);
              } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                buffer = data;
                offset2 = toOffset($offset, BYTES);
                var $len = data.byteLength;
                if ($length === void 0) {
                  if ($len % BYTES)
                    throw RangeError2(WRONG_LENGTH);
                  byteLength = $len - offset2;
                  if (byteLength < 0)
                    throw RangeError2(WRONG_LENGTH);
                } else {
                  byteLength = toLength($length) * BYTES;
                  if (byteLength + offset2 > $len)
                    throw RangeError2(WRONG_LENGTH);
                }
                length = byteLength / BYTES;
              } else if (TYPED_ARRAY in data) {
                return fromList(TypedArray, data);
              } else {
                return $from.call(TypedArray, data);
              }
              hide2(that, "_d", {
                b: buffer,
                o: offset2,
                l: byteLength,
                e: length,
                v: new $DataView(buffer)
              });
              while (index < length)
                addElement(that, index++);
            });
            TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
            hide2(TypedArrayPrototype, "constructor", TypedArray);
          } else if (!fails(function() {
            TypedArray(1);
          }) || !fails(function() {
            new TypedArray(-1);
          }) || !$iterDetect(function(iter) {
            new TypedArray();
            new TypedArray(null);
            new TypedArray(1.5);
            new TypedArray(iter);
          }, true)) {
            TypedArray = wrapper(function(that, data, $offset, $length) {
              anInstance(that, TypedArray, NAME2);
              var klass;
              if (!isObject3(data))
                return new Base(toIndex(data));
              if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                return $length !== void 0 ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== void 0 ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
              }
              if (TYPED_ARRAY in data)
                return fromList(TypedArray, data);
              return $from.call(TypedArray, data);
            });
            arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
              if (!(key in TypedArray))
                hide2(TypedArray, key, Base[key]);
            });
            TypedArray[PROTOTYPE] = TypedArrayPrototype;
            if (!LIBRARY)
              TypedArrayPrototype.constructor = TypedArray;
          }
          var $nativeIterator = TypedArrayPrototype[ITERATOR];
          var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == "values" || $nativeIterator.name == void 0);
          var $iterator = $iterators.values;
          hide2(TypedArray, TYPED_CONSTRUCTOR, true);
          hide2(TypedArrayPrototype, TYPED_ARRAY, NAME2);
          hide2(TypedArrayPrototype, VIEW, true);
          hide2(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
          if (CLAMPED ? new TypedArray(1)[TAG] != NAME2 : !(TAG in TypedArrayPrototype)) {
            dP(TypedArrayPrototype, TAG, {
              get: function() {
                return NAME2;
              }
            });
          }
          O[NAME2] = TypedArray;
          $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
          $export($export.S, NAME2, {
            BYTES_PER_ELEMENT: BYTES
          });
          $export($export.S + $export.F * fails(function() {
            Base.of.call(TypedArray, 1);
          }), NAME2, {
            from: $from,
            of: $of
          });
          if (!(BYTES_PER_ELEMENT in TypedArrayPrototype))
            hide2(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
          $export($export.P, NAME2, proto);
          setSpecies(NAME2);
          $export($export.P + $export.F * FORCED_SET, NAME2, { set: $set });
          $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME2, $iterators);
          if (!LIBRARY && TypedArrayPrototype.toString != arrayToString)
            TypedArrayPrototype.toString = arrayToString;
          $export($export.P + $export.F * fails(function() {
            new TypedArray(1).slice();
          }), NAME2, { slice: $slice });
          $export($export.P + $export.F * (fails(function() {
            return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
          }) || !fails(function() {
            TypedArrayPrototype.toLocaleString.call([1, 2]);
          })), NAME2, { toLocaleString: $toLocaleString });
          Iterators[NAME2] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
          if (!LIBRARY && !CORRECT_ITER_NAME)
            hide2(TypedArrayPrototype, ITERATOR, $iterator);
        };
      } else
        module.exports = function() {
        };
      var LIBRARY;
      var global2;
      var fails;
      var $export;
      var $typed;
      var $buffer;
      var ctx;
      var anInstance;
      var propertyDesc;
      var hide2;
      var redefineAll;
      var toInteger;
      var toLength;
      var toIndex;
      var toAbsoluteIndex;
      var toPrimitive;
      var has;
      var classof;
      var isObject3;
      var toObject;
      var isArrayIter;
      var create;
      var getPrototypeOf2;
      var gOPN;
      var getIterFn;
      var uid;
      var wks;
      var createArrayMethod;
      var createArrayIncludes;
      var speciesConstructor;
      var ArrayIterators;
      var Iterators;
      var $iterDetect;
      var setSpecies;
      var arrayFill;
      var arrayCopyWithin;
      var $DP;
      var $GOPD;
      var dP;
      var gOPD;
      var RangeError2;
      var TypeError2;
      var Uint8Array2;
      var ARRAY_BUFFER;
      var SHARED_BUFFER;
      var BYTES_PER_ELEMENT;
      var PROTOTYPE;
      var ArrayProto;
      var $ArrayBuffer;
      var $DataView;
      var arrayForEach;
      var arrayFilter;
      var arraySome;
      var arrayEvery;
      var arrayFind;
      var arrayFindIndex;
      var arrayIncludes;
      var arrayIndexOf;
      var arrayValues;
      var arrayKeys;
      var arrayEntries;
      var arrayLastIndexOf;
      var arrayReduce;
      var arrayReduceRight;
      var arrayJoin;
      var arraySort;
      var arraySlice;
      var arrayToString;
      var arrayToLocaleString;
      var ITERATOR;
      var TAG;
      var TYPED_CONSTRUCTOR;
      var DEF_CONSTRUCTOR;
      var ALL_CONSTRUCTORS;
      var TYPED_ARRAY;
      var VIEW;
      var WRONG_LENGTH;
      var $map;
      var LITTLE_ENDIAN;
      var FORCED_SET;
      var toOffset;
      var validate;
      var allocate;
      var speciesFromList;
      var fromList;
      var addGetter;
      var $from;
      var $of;
      var TO_LOCALE_BUG;
      var $toLocaleString;
      var proto;
      var $slice;
      var $set;
      var $iterators;
      var isTAIndex;
      var $getDesc;
      var $setDesc;
      var $TypedArrayPrototype$;
    }
  });

  // node_modules/core-js/modules/es6.typed.int8-array.js
  var require_es6_typed_int8_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.int8-array.js"() {
      require_typed_array()("Int8", 1, function(init) {
        return function Int8Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.uint8-array.js
  var require_es6_typed_uint8_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.uint8-array.js"() {
      require_typed_array()("Uint8", 1, function(init) {
        return function Uint8Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.uint8-clamped-array.js
  var require_es6_typed_uint8_clamped_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.uint8-clamped-array.js"() {
      require_typed_array()("Uint8", 1, function(init) {
        return function Uint8ClampedArray2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      }, true);
    }
  });

  // node_modules/core-js/modules/es6.typed.int16-array.js
  var require_es6_typed_int16_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.int16-array.js"() {
      require_typed_array()("Int16", 2, function(init) {
        return function Int16Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.uint16-array.js
  var require_es6_typed_uint16_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.uint16-array.js"() {
      require_typed_array()("Uint16", 2, function(init) {
        return function Uint16Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.int32-array.js
  var require_es6_typed_int32_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.int32-array.js"() {
      require_typed_array()("Int32", 4, function(init) {
        return function Int32Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.uint32-array.js
  var require_es6_typed_uint32_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.uint32-array.js"() {
      require_typed_array()("Uint32", 4, function(init) {
        return function Uint32Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.float32-array.js
  var require_es6_typed_float32_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.float32-array.js"() {
      require_typed_array()("Float32", 4, function(init) {
        return function Float32Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.typed.float64-array.js
  var require_es6_typed_float64_array = __commonJS({
    "node_modules/core-js/modules/es6.typed.float64-array.js"() {
      require_typed_array()("Float64", 8, function(init) {
        return function Float64Array2(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.apply.js
  var require_es6_reflect_apply = __commonJS({
    "node_modules/core-js/modules/es6.reflect.apply.js"() {
      var $export = require_export();
      var aFunction = require_a_function();
      var anObject = require_an_object();
      var rApply = (require_global().Reflect || {}).apply;
      var fApply = Function.apply;
      $export($export.S + $export.F * !require_fails()(function() {
        rApply(function() {
        });
      }), "Reflect", {
        apply: function apply(target, thisArgument, argumentsList) {
          var T = aFunction(target);
          var L = anObject(argumentsList);
          return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.construct.js
  var require_es6_reflect_construct = __commonJS({
    "node_modules/core-js/modules/es6.reflect.construct.js"() {
      var $export = require_export();
      var create = require_object_create();
      var aFunction = require_a_function();
      var anObject = require_an_object();
      var isObject3 = require_is_object();
      var fails = require_fails();
      var bind2 = require_bind();
      var rConstruct = (require_global().Reflect || {}).construct;
      var NEW_TARGET_BUG = fails(function() {
        function F() {
        }
        return !(rConstruct(function() {
        }, [], F) instanceof F);
      });
      var ARGS_BUG = !fails(function() {
        rConstruct(function() {
        });
      });
      $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), "Reflect", {
        construct: function construct(Target, args) {
          aFunction(Target);
          anObject(args);
          var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
          if (ARGS_BUG && !NEW_TARGET_BUG)
            return rConstruct(Target, args, newTarget);
          if (Target == newTarget) {
            switch (args.length) {
              case 0:
                return new Target();
              case 1:
                return new Target(args[0]);
              case 2:
                return new Target(args[0], args[1]);
              case 3:
                return new Target(args[0], args[1], args[2]);
              case 4:
                return new Target(args[0], args[1], args[2], args[3]);
            }
            var $args = [null];
            $args.push.apply($args, args);
            return new (bind2.apply(Target, $args))();
          }
          var proto = newTarget.prototype;
          var instance = create(isObject3(proto) ? proto : Object.prototype);
          var result = Function.apply.call(Target, instance, args);
          return isObject3(result) ? result : instance;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.define-property.js
  var require_es6_reflect_define_property = __commonJS({
    "node_modules/core-js/modules/es6.reflect.define-property.js"() {
      var dP = require_object_dp();
      var $export = require_export();
      var anObject = require_an_object();
      var toPrimitive = require_to_primitive();
      $export($export.S + $export.F * require_fails()(function() {
        Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
      }), "Reflect", {
        defineProperty: function defineProperty(target, propertyKey, attributes) {
          anObject(target);
          propertyKey = toPrimitive(propertyKey, true);
          anObject(attributes);
          try {
            dP.f(target, propertyKey, attributes);
            return true;
          } catch (e) {
            return false;
          }
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.delete-property.js
  var require_es6_reflect_delete_property = __commonJS({
    "node_modules/core-js/modules/es6.reflect.delete-property.js"() {
      var $export = require_export();
      var gOPD = require_object_gopd().f;
      var anObject = require_an_object();
      $export($export.S, "Reflect", {
        deleteProperty: function deleteProperty(target, propertyKey) {
          var desc = gOPD(anObject(target), propertyKey);
          return desc && !desc.configurable ? false : delete target[propertyKey];
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.enumerate.js
  var require_es6_reflect_enumerate = __commonJS({
    "node_modules/core-js/modules/es6.reflect.enumerate.js"() {
      "use strict";
      var $export = require_export();
      var anObject = require_an_object();
      var Enumerate = function(iterated) {
        this._t = anObject(iterated);
        this._i = 0;
        var keys = this._k = [];
        var key;
        for (key in iterated)
          keys.push(key);
      };
      require_iter_create()(Enumerate, "Object", function() {
        var that = this;
        var keys = that._k;
        var key;
        do {
          if (that._i >= keys.length)
            return { value: void 0, done: true };
        } while (!((key = keys[that._i++]) in that._t));
        return { value: key, done: false };
      });
      $export($export.S, "Reflect", {
        enumerate: function enumerate(target) {
          return new Enumerate(target);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.get.js
  var require_es6_reflect_get = __commonJS({
    "node_modules/core-js/modules/es6.reflect.get.js"() {
      var gOPD = require_object_gopd();
      var getPrototypeOf2 = require_object_gpo();
      var has = require_has();
      var $export = require_export();
      var isObject3 = require_is_object();
      var anObject = require_an_object();
      function get(target, propertyKey) {
        var receiver = arguments.length < 3 ? target : arguments[2];
        var desc, proto;
        if (anObject(target) === receiver)
          return target[propertyKey];
        if (desc = gOPD.f(target, propertyKey))
          return has(desc, "value") ? desc.value : desc.get !== void 0 ? desc.get.call(receiver) : void 0;
        if (isObject3(proto = getPrototypeOf2(target)))
          return get(proto, propertyKey, receiver);
      }
      $export($export.S, "Reflect", { get });
    }
  });

  // node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js
  var require_es6_reflect_get_own_property_descriptor = __commonJS({
    "node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js"() {
      var gOPD = require_object_gopd();
      var $export = require_export();
      var anObject = require_an_object();
      $export($export.S, "Reflect", {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
          return gOPD.f(anObject(target), propertyKey);
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.get-prototype-of.js
  var require_es6_reflect_get_prototype_of = __commonJS({
    "node_modules/core-js/modules/es6.reflect.get-prototype-of.js"() {
      var $export = require_export();
      var getProto = require_object_gpo();
      var anObject = require_an_object();
      $export($export.S, "Reflect", {
        getPrototypeOf: function getPrototypeOf2(target) {
          return getProto(anObject(target));
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.has.js
  var require_es6_reflect_has = __commonJS({
    "node_modules/core-js/modules/es6.reflect.has.js"() {
      var $export = require_export();
      $export($export.S, "Reflect", {
        has: function has(target, propertyKey) {
          return propertyKey in target;
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.is-extensible.js
  var require_es6_reflect_is_extensible = __commonJS({
    "node_modules/core-js/modules/es6.reflect.is-extensible.js"() {
      var $export = require_export();
      var anObject = require_an_object();
      var $isExtensible = Object.isExtensible;
      $export($export.S, "Reflect", {
        isExtensible: function isExtensible(target) {
          anObject(target);
          return $isExtensible ? $isExtensible(target) : true;
        }
      });
    }
  });

  // node_modules/core-js/modules/_own-keys.js
  var require_own_keys = __commonJS({
    "node_modules/core-js/modules/_own-keys.js"(exports, module) {
      var gOPN = require_object_gopn();
      var gOPS = require_object_gops();
      var anObject = require_an_object();
      var Reflect2 = require_global().Reflect;
      module.exports = Reflect2 && Reflect2.ownKeys || function ownKeys(it) {
        var keys = gOPN.f(anObject(it));
        var getSymbols = gOPS.f;
        return getSymbols ? keys.concat(getSymbols(it)) : keys;
      };
    }
  });

  // node_modules/core-js/modules/es6.reflect.own-keys.js
  var require_es6_reflect_own_keys = __commonJS({
    "node_modules/core-js/modules/es6.reflect.own-keys.js"() {
      var $export = require_export();
      $export($export.S, "Reflect", { ownKeys: require_own_keys() });
    }
  });

  // node_modules/core-js/modules/es6.reflect.prevent-extensions.js
  var require_es6_reflect_prevent_extensions = __commonJS({
    "node_modules/core-js/modules/es6.reflect.prevent-extensions.js"() {
      var $export = require_export();
      var anObject = require_an_object();
      var $preventExtensions = Object.preventExtensions;
      $export($export.S, "Reflect", {
        preventExtensions: function preventExtensions(target) {
          anObject(target);
          try {
            if ($preventExtensions)
              $preventExtensions(target);
            return true;
          } catch (e) {
            return false;
          }
        }
      });
    }
  });

  // node_modules/core-js/modules/es6.reflect.set.js
  var require_es6_reflect_set = __commonJS({
    "node_modules/core-js/modules/es6.reflect.set.js"() {
      var dP = require_object_dp();
      var gOPD = require_object_gopd();
      var getPrototypeOf2 = require_object_gpo();
      var has = require_has();
      var $export = require_export();
      var createDesc = require_property_desc();
      var anObject = require_an_object();
      var isObject3 = require_is_object();
      function set(target, propertyKey, V) {
        var receiver = arguments.length < 4 ? target : arguments[3];
        var ownDesc = gOPD.f(anObject(target), propertyKey);
        var existingDescriptor, proto;
        if (!ownDesc) {
          if (isObject3(proto = getPrototypeOf2(target))) {
            return set(proto, propertyKey, V, receiver);
          }
          ownDesc = createDesc(0);
        }
        if (has(ownDesc, "value")) {
          if (ownDesc.writable === false || !isObject3(receiver))
            return false;
          if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
            if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false)
              return false;
            existingDescriptor.value = V;
            dP.f(receiver, propertyKey, existingDescriptor);
          } else
            dP.f(receiver, propertyKey, createDesc(0, V));
          return true;
        }
        return ownDesc.set === void 0 ? false : (ownDesc.set.call(receiver, V), true);
      }
      $export($export.S, "Reflect", { set });
    }
  });

  // node_modules/core-js/modules/es6.reflect.set-prototype-of.js
  var require_es6_reflect_set_prototype_of = __commonJS({
    "node_modules/core-js/modules/es6.reflect.set-prototype-of.js"() {
      var $export = require_export();
      var setProto = require_set_proto();
      if (setProto)
        $export($export.S, "Reflect", {
          setPrototypeOf: function setPrototypeOf(target, proto) {
            setProto.check(target, proto);
            try {
              setProto.set(target, proto);
              return true;
            } catch (e) {
              return false;
            }
          }
        });
    }
  });

  // node_modules/core-js/es6/index.js
  var require_es6 = __commonJS({
    "node_modules/core-js/es6/index.js"(exports, module) {
      require_es6_symbol();
      require_es6_object_create();
      require_es6_object_define_property();
      require_es6_object_define_properties();
      require_es6_object_get_own_property_descriptor();
      require_es6_object_get_prototype_of();
      require_es6_object_keys();
      require_es6_object_get_own_property_names();
      require_es6_object_freeze();
      require_es6_object_seal();
      require_es6_object_prevent_extensions();
      require_es6_object_is_frozen();
      require_es6_object_is_sealed();
      require_es6_object_is_extensible();
      require_es6_object_assign();
      require_es6_object_is();
      require_es6_object_set_prototype_of();
      require_es6_object_to_string();
      require_es6_function_bind();
      require_es6_function_name();
      require_es6_function_has_instance();
      require_es6_parse_int();
      require_es6_parse_float();
      require_es6_number_constructor();
      require_es6_number_to_fixed();
      require_es6_number_to_precision();
      require_es6_number_epsilon();
      require_es6_number_is_finite();
      require_es6_number_is_integer();
      require_es6_number_is_nan();
      require_es6_number_is_safe_integer();
      require_es6_number_max_safe_integer();
      require_es6_number_min_safe_integer();
      require_es6_number_parse_float();
      require_es6_number_parse_int();
      require_es6_math_acosh();
      require_es6_math_asinh();
      require_es6_math_atanh();
      require_es6_math_cbrt();
      require_es6_math_clz32();
      require_es6_math_cosh();
      require_es6_math_expm1();
      require_es6_math_fround();
      require_es6_math_hypot();
      require_es6_math_imul();
      require_es6_math_log10();
      require_es6_math_log1p();
      require_es6_math_log2();
      require_es6_math_sign();
      require_es6_math_sinh();
      require_es6_math_tanh();
      require_es6_math_trunc();
      require_es6_string_from_code_point();
      require_es6_string_raw();
      require_es6_string_trim();
      require_es6_string_iterator();
      require_es6_string_code_point_at();
      require_es6_string_ends_with();
      require_es6_string_includes();
      require_es6_string_repeat();
      require_es6_string_starts_with();
      require_es6_string_anchor();
      require_es6_string_big();
      require_es6_string_blink();
      require_es6_string_bold();
      require_es6_string_fixed();
      require_es6_string_fontcolor();
      require_es6_string_fontsize();
      require_es6_string_italics();
      require_es6_string_link();
      require_es6_string_small();
      require_es6_string_strike();
      require_es6_string_sub();
      require_es6_string_sup();
      require_es6_date_now();
      require_es6_date_to_json();
      require_es6_date_to_iso_string();
      require_es6_date_to_string();
      require_es6_date_to_primitive();
      require_es6_array_is_array();
      require_es6_array_from();
      require_es6_array_of();
      require_es6_array_join();
      require_es6_array_slice();
      require_es6_array_sort();
      require_es6_array_for_each();
      require_es6_array_map();
      require_es6_array_filter();
      require_es6_array_some();
      require_es6_array_every();
      require_es6_array_reduce();
      require_es6_array_reduce_right();
      require_es6_array_index_of();
      require_es6_array_last_index_of();
      require_es6_array_copy_within();
      require_es6_array_fill();
      require_es6_array_find();
      require_es6_array_find_index();
      require_es6_array_species();
      require_es6_array_iterator();
      require_es6_regexp_constructor();
      require_es6_regexp_exec();
      require_es6_regexp_to_string();
      require_es6_regexp_flags();
      require_es6_regexp_match();
      require_es6_regexp_replace();
      require_es6_regexp_search();
      require_es6_regexp_split();
      require_es6_promise();
      require_es6_map();
      require_es6_set();
      require_es6_weak_map();
      require_es6_weak_set();
      require_es6_typed_array_buffer();
      require_es6_typed_data_view();
      require_es6_typed_int8_array();
      require_es6_typed_uint8_array();
      require_es6_typed_uint8_clamped_array();
      require_es6_typed_int16_array();
      require_es6_typed_uint16_array();
      require_es6_typed_int32_array();
      require_es6_typed_uint32_array();
      require_es6_typed_float32_array();
      require_es6_typed_float64_array();
      require_es6_reflect_apply();
      require_es6_reflect_construct();
      require_es6_reflect_define_property();
      require_es6_reflect_delete_property();
      require_es6_reflect_enumerate();
      require_es6_reflect_get();
      require_es6_reflect_get_own_property_descriptor();
      require_es6_reflect_get_prototype_of();
      require_es6_reflect_has();
      require_es6_reflect_is_extensible();
      require_es6_reflect_own_keys();
      require_es6_reflect_prevent_extensions();
      require_es6_reflect_set();
      require_es6_reflect_set_prototype_of();
      module.exports = require_core();
    }
  });

  // node_modules/core-js/modules/es7.array.includes.js
  var require_es7_array_includes = __commonJS({
    "node_modules/core-js/modules/es7.array.includes.js"() {
      "use strict";
      var $export = require_export();
      var $includes = require_array_includes()(true);
      $export($export.P, "Array", {
        includes: function includes(el) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
      require_add_to_unscopables()("includes");
    }
  });

  // node_modules/core-js/fn/array/includes.js
  var require_includes = __commonJS({
    "node_modules/core-js/fn/array/includes.js"(exports, module) {
      require_es7_array_includes();
      module.exports = require_core().Array.includes;
    }
  });

  // node_modules/core-js/modules/_flatten-into-array.js
  var require_flatten_into_array = __commonJS({
    "node_modules/core-js/modules/_flatten-into-array.js"(exports, module) {
      "use strict";
      var isArray2 = require_is_array();
      var isObject3 = require_is_object();
      var toLength = require_to_length();
      var ctx = require_ctx();
      var IS_CONCAT_SPREADABLE = require_wks()("isConcatSpreadable");
      function flattenIntoArray(target, original, source, sourceLen, start2, depth, mapper, thisArg) {
        var targetIndex = start2;
        var sourceIndex = 0;
        var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
        var element, spreadable;
        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
            spreadable = false;
            if (isObject3(element)) {
              spreadable = element[IS_CONCAT_SPREADABLE];
              spreadable = spreadable !== void 0 ? !!spreadable : isArray2(element);
            }
            if (spreadable && depth > 0) {
              targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 9007199254740991)
                throw TypeError();
              target[targetIndex] = element;
            }
            targetIndex++;
          }
          sourceIndex++;
        }
        return targetIndex;
      }
      module.exports = flattenIntoArray;
    }
  });

  // node_modules/core-js/modules/es7.array.flat-map.js
  var require_es7_array_flat_map = __commonJS({
    "node_modules/core-js/modules/es7.array.flat-map.js"() {
      "use strict";
      var $export = require_export();
      var flattenIntoArray = require_flatten_into_array();
      var toObject = require_to_object();
      var toLength = require_to_length();
      var aFunction = require_a_function();
      var arraySpeciesCreate = require_array_species_create();
      $export($export.P, "Array", {
        flatMap: function flatMap(callbackfn) {
          var O = toObject(this);
          var sourceLen, A;
          aFunction(callbackfn);
          sourceLen = toLength(O.length);
          A = arraySpeciesCreate(O, 0);
          flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
          return A;
        }
      });
      require_add_to_unscopables()("flatMap");
    }
  });

  // node_modules/core-js/fn/array/flat-map.js
  var require_flat_map = __commonJS({
    "node_modules/core-js/fn/array/flat-map.js"(exports, module) {
      require_es7_array_flat_map();
      module.exports = require_core().Array.flatMap;
    }
  });

  // node_modules/core-js/modules/_string-pad.js
  var require_string_pad = __commonJS({
    "node_modules/core-js/modules/_string-pad.js"(exports, module) {
      var toLength = require_to_length();
      var repeat = require_string_repeat();
      var defined = require_defined();
      module.exports = function(that, maxLength, fillString, left2) {
        var S = String(defined(that));
        var stringLength = S.length;
        var fillStr = fillString === void 0 ? " " : String(fillString);
        var intMaxLength = toLength(maxLength);
        if (intMaxLength <= stringLength || fillStr == "")
          return S;
        var fillLen = intMaxLength - stringLength;
        var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen)
          stringFiller = stringFiller.slice(0, fillLen);
        return left2 ? stringFiller + S : S + stringFiller;
      };
    }
  });

  // node_modules/core-js/modules/es7.string.pad-start.js
  var require_es7_string_pad_start = __commonJS({
    "node_modules/core-js/modules/es7.string.pad-start.js"() {
      "use strict";
      var $export = require_export();
      var $pad = require_string_pad();
      var userAgent = require_user_agent();
      var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
      $export($export.P + $export.F * WEBKIT_BUG, "String", {
        padStart: function padStart(maxLength) {
          return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : void 0, true);
        }
      });
    }
  });

  // node_modules/core-js/fn/string/pad-start.js
  var require_pad_start = __commonJS({
    "node_modules/core-js/fn/string/pad-start.js"(exports, module) {
      require_es7_string_pad_start();
      module.exports = require_core().String.padStart;
    }
  });

  // node_modules/core-js/modules/es7.string.pad-end.js
  var require_es7_string_pad_end = __commonJS({
    "node_modules/core-js/modules/es7.string.pad-end.js"() {
      "use strict";
      var $export = require_export();
      var $pad = require_string_pad();
      var userAgent = require_user_agent();
      var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
      $export($export.P + $export.F * WEBKIT_BUG, "String", {
        padEnd: function padEnd(maxLength) {
          return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : void 0, false);
        }
      });
    }
  });

  // node_modules/core-js/fn/string/pad-end.js
  var require_pad_end = __commonJS({
    "node_modules/core-js/fn/string/pad-end.js"(exports, module) {
      require_es7_string_pad_end();
      module.exports = require_core().String.padEnd;
    }
  });

  // node_modules/core-js/modules/es7.string.trim-left.js
  var require_es7_string_trim_left = __commonJS({
    "node_modules/core-js/modules/es7.string.trim-left.js"() {
      "use strict";
      require_string_trim()("trimLeft", function($trim) {
        return function trimLeft() {
          return $trim(this, 1);
        };
      }, "trimStart");
    }
  });

  // node_modules/core-js/fn/string/trim-start.js
  var require_trim_start = __commonJS({
    "node_modules/core-js/fn/string/trim-start.js"(exports, module) {
      require_es7_string_trim_left();
      module.exports = require_core().String.trimLeft;
    }
  });

  // node_modules/core-js/modules/es7.string.trim-right.js
  var require_es7_string_trim_right = __commonJS({
    "node_modules/core-js/modules/es7.string.trim-right.js"() {
      "use strict";
      require_string_trim()("trimRight", function($trim) {
        return function trimRight() {
          return $trim(this, 2);
        };
      }, "trimEnd");
    }
  });

  // node_modules/core-js/fn/string/trim-end.js
  var require_trim_end = __commonJS({
    "node_modules/core-js/fn/string/trim-end.js"(exports, module) {
      require_es7_string_trim_right();
      module.exports = require_core().String.trimRight;
    }
  });

  // node_modules/core-js/modules/es7.symbol.async-iterator.js
  var require_es7_symbol_async_iterator = __commonJS({
    "node_modules/core-js/modules/es7.symbol.async-iterator.js"() {
      require_wks_define()("asyncIterator");
    }
  });

  // node_modules/core-js/fn/symbol/async-iterator.js
  var require_async_iterator = __commonJS({
    "node_modules/core-js/fn/symbol/async-iterator.js"(exports, module) {
      require_es7_symbol_async_iterator();
      module.exports = require_wks_ext().f("asyncIterator");
    }
  });

  // node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
  var require_es7_object_get_own_property_descriptors = __commonJS({
    "node_modules/core-js/modules/es7.object.get-own-property-descriptors.js"() {
      var $export = require_export();
      var ownKeys = require_own_keys();
      var toIObject = require_to_iobject();
      var gOPD = require_object_gopd();
      var createProperty = require_create_property();
      $export($export.S, "Object", {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
          var O = toIObject(object);
          var getDesc = gOPD.f;
          var keys = ownKeys(O);
          var result = {};
          var i = 0;
          var key, desc;
          while (keys.length > i) {
            desc = getDesc(O, key = keys[i++]);
            if (desc !== void 0)
              createProperty(result, key, desc);
          }
          return result;
        }
      });
    }
  });

  // node_modules/core-js/fn/object/get-own-property-descriptors.js
  var require_get_own_property_descriptors = __commonJS({
    "node_modules/core-js/fn/object/get-own-property-descriptors.js"(exports, module) {
      require_es7_object_get_own_property_descriptors();
      module.exports = require_core().Object.getOwnPropertyDescriptors;
    }
  });

  // node_modules/core-js/modules/_object-to-array.js
  var require_object_to_array = __commonJS({
    "node_modules/core-js/modules/_object-to-array.js"(exports, module) {
      var DESCRIPTORS = require_descriptors();
      var getKeys = require_object_keys();
      var toIObject = require_to_iobject();
      var isEnum = require_object_pie().f;
      module.exports = function(isEntries) {
        return function(it) {
          var O = toIObject(it);
          var keys = getKeys(O);
          var length = keys.length;
          var i = 0;
          var result = [];
          var key;
          while (length > i) {
            key = keys[i++];
            if (!DESCRIPTORS || isEnum.call(O, key)) {
              result.push(isEntries ? [key, O[key]] : O[key]);
            }
          }
          return result;
        };
      };
    }
  });

  // node_modules/core-js/modules/es7.object.values.js
  var require_es7_object_values = __commonJS({
    "node_modules/core-js/modules/es7.object.values.js"() {
      var $export = require_export();
      var $values = require_object_to_array()(false);
      $export($export.S, "Object", {
        values: function values(it) {
          return $values(it);
        }
      });
    }
  });

  // node_modules/core-js/fn/object/values.js
  var require_values = __commonJS({
    "node_modules/core-js/fn/object/values.js"(exports, module) {
      require_es7_object_values();
      module.exports = require_core().Object.values;
    }
  });

  // node_modules/core-js/modules/es7.object.entries.js
  var require_es7_object_entries = __commonJS({
    "node_modules/core-js/modules/es7.object.entries.js"() {
      var $export = require_export();
      var $entries = require_object_to_array()(true);
      $export($export.S, "Object", {
        entries: function entries(it) {
          return $entries(it);
        }
      });
    }
  });

  // node_modules/core-js/fn/object/entries.js
  var require_entries = __commonJS({
    "node_modules/core-js/fn/object/entries.js"(exports, module) {
      require_es7_object_entries();
      module.exports = require_core().Object.entries;
    }
  });

  // node_modules/core-js/modules/es7.promise.finally.js
  var require_es7_promise_finally = __commonJS({
    "node_modules/core-js/modules/es7.promise.finally.js"() {
      "use strict";
      var $export = require_export();
      var core = require_core();
      var global2 = require_global();
      var speciesConstructor = require_species_constructor();
      var promiseResolve = require_promise_resolve();
      $export($export.P + $export.R, "Promise", { "finally": function(onFinally) {
        var C = speciesConstructor(this, core.Promise || global2.Promise);
        var isFunction2 = typeof onFinally == "function";
        return this.then(
          isFunction2 ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
              return x;
            });
          } : onFinally,
          isFunction2 ? function(e) {
            return promiseResolve(C, onFinally()).then(function() {
              throw e;
            });
          } : onFinally
        );
      } });
    }
  });

  // node_modules/core-js/fn/promise/finally.js
  var require_finally = __commonJS({
    "node_modules/core-js/fn/promise/finally.js"(exports, module) {
      "use strict";
      require_es6_promise();
      require_es7_promise_finally();
      module.exports = require_core().Promise["finally"];
    }
  });

  // node_modules/core-js/modules/web.timers.js
  var require_web_timers = __commonJS({
    "node_modules/core-js/modules/web.timers.js"() {
      var global2 = require_global();
      var $export = require_export();
      var userAgent = require_user_agent();
      var slice = [].slice;
      var MSIE = /MSIE .\./.test(userAgent);
      var wrap = function(set) {
        return function(fn2, time) {
          var boundArgs = arguments.length > 2;
          var args = boundArgs ? slice.call(arguments, 2) : false;
          return set(boundArgs ? function() {
            (typeof fn2 == "function" ? fn2 : Function(fn2)).apply(this, args);
          } : fn2, time);
        };
      };
      $export($export.G + $export.B + $export.F * MSIE, {
        setTimeout: wrap(global2.setTimeout),
        setInterval: wrap(global2.setInterval)
      });
    }
  });

  // node_modules/core-js/modules/web.immediate.js
  var require_web_immediate = __commonJS({
    "node_modules/core-js/modules/web.immediate.js"() {
      var $export = require_export();
      var $task = require_task();
      $export($export.G + $export.B, {
        setImmediate: $task.set,
        clearImmediate: $task.clear
      });
    }
  });

  // node_modules/core-js/modules/web.dom.iterable.js
  var require_web_dom_iterable = __commonJS({
    "node_modules/core-js/modules/web.dom.iterable.js"() {
      var $iterators = require_es6_array_iterator();
      var getKeys = require_object_keys();
      var redefine = require_redefine();
      var global2 = require_global();
      var hide2 = require_hide();
      var Iterators = require_iterators();
      var wks = require_wks();
      var ITERATOR = wks("iterator");
      var TO_STRING_TAG = wks("toStringTag");
      var ArrayValues = Iterators.Array;
      var DOMIterables = {
        CSSRuleList: true,
        // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true,
        // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true,
        // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false
      };
      for (collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
        NAME2 = collections[i];
        explicit = DOMIterables[NAME2];
        Collection = global2[NAME2];
        proto = Collection && Collection.prototype;
        if (proto) {
          if (!proto[ITERATOR])
            hide2(proto, ITERATOR, ArrayValues);
          if (!proto[TO_STRING_TAG])
            hide2(proto, TO_STRING_TAG, NAME2);
          Iterators[NAME2] = ArrayValues;
          if (explicit) {
            for (key in $iterators)
              if (!proto[key])
                redefine(proto, key, $iterators[key], true);
          }
        }
      }
      var NAME2;
      var explicit;
      var Collection;
      var proto;
      var key;
      var collections;
      var i;
    }
  });

  // node_modules/core-js/web/index.js
  var require_web = __commonJS({
    "node_modules/core-js/web/index.js"(exports, module) {
      require_web_timers();
      require_web_immediate();
      require_web_dom_iterable();
      module.exports = require_core();
    }
  });

  // node_modules/regenerator-runtime/runtime.js
  var require_runtime = __commonJS({
    "node_modules/regenerator-runtime/runtime.js"(exports, module) {
      var runtime = function(exports2) {
        "use strict";
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var defineProperty = Object.defineProperty || function(obj, key, desc) {
          obj[key] = desc.value;
        };
        var undefined2;
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }
        try {
          define({}, "");
        } catch (err) {
          define = function(obj, key, value) {
            return obj[key] = value;
          };
        }
        function wrap(innerFn, outerFn, self2, tryLocsList) {
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []);
          defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self2, context) });
          return generator;
        }
        exports2.wrap = wrap;
        function tryCatch(fn2, obj, arg) {
          try {
            return { type: "normal", arg: fn2.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";
        var ContinueSentinel = {};
        function Generator() {
        }
        function GeneratorFunction() {
        }
        function GeneratorFunctionPrototype() {
        }
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function() {
          return this;
        });
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          IteratorPrototype = NativeIteratorPrototype;
        }
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = GeneratorFunctionPrototype;
        defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
        defineProperty(
          GeneratorFunctionPrototype,
          "constructor",
          { value: GeneratorFunction, configurable: true }
        );
        GeneratorFunction.displayName = define(
          GeneratorFunctionPrototype,
          toStringTagSymbol,
          "GeneratorFunction"
        );
        function defineIteratorMethods(prototype3) {
          ["next", "throw", "return"].forEach(function(method) {
            define(prototype3, method, function(arg) {
              return this._invoke(method, arg);
            });
          });
        }
        exports2.isGeneratorFunction = function(genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports2.mark = function(genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
          }
          genFun.prototype = Object.create(Gp);
          return genFun;
        };
        exports2.awrap = function(arg) {
          return { __await: arg };
        };
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;
              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function(value2) {
                  invoke("next", value2, resolve, reject);
                }, function(err) {
                  invoke("throw", err, resolve, reject);
                });
              }
              return PromiseImpl.resolve(value).then(function(unwrapped) {
                result.value = unwrapped;
                resolve(result);
              }, function(error) {
                return invoke("throw", error, resolve, reject);
              });
            }
          }
          var previousPromise;
          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function(resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(
              callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg
            ) : callInvokeWithMethodAndArg();
          }
          defineProperty(this, "_invoke", { value: enqueue });
        }
        defineIteratorMethods(AsyncIterator.prototype);
        define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
          return this;
        });
        exports2.AsyncIterator = AsyncIterator;
        exports2.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0)
            PromiseImpl = Promise;
          var iter = new AsyncIterator(
            wrap(innerFn, outerFn, self2, tryLocsList),
            PromiseImpl
          );
          return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
        };
        function makeInvokeMethod(innerFn, self2, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }
            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              }
              return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while (true) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel)
                    continue;
                  return delegateResult;
                }
              }
              if (context.method === "next") {
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }
                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }
              state = GenStateExecuting;
              var record = tryCatch(innerFn, self2, context);
              if (record.type === "normal") {
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                if (record.arg === ContinueSentinel) {
                  continue;
                }
                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted;
                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var methodName = context.method;
          var method = delegate.iterator[methodName];
          if (method === undefined2) {
            context.delegate = null;
            if (methodName === "throw" && delegate.iterator["return"]) {
              context.method = "return";
              context.arg = undefined2;
              maybeInvokeDelegate(delegate, context);
              if (context.method === "throw") {
                return ContinueSentinel;
              }
            }
            if (methodName !== "return") {
              context.method = "throw";
              context.arg = new TypeError(
                "The iterator does not provide a '" + methodName + "' method"
              );
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }
          var info = record.arg;
          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined2;
            }
          } else {
            return info;
          }
          context.delegate = null;
          return ContinueSentinel;
        }
        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator");
        define(Gp, iteratorSymbol, function() {
          return this;
        });
        define(Gp, "toString", function() {
          return "[object Generator]";
        });
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          if (1 in locs) {
            entry.catchLoc = locs[1];
          }
          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }
          this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }
        function Context(tryLocsList) {
          this.tryEntries = [{ tryLoc: "root" }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }
        exports2.keys = function(val) {
          var object = Object(val);
          var keys = [];
          for (var key in object) {
            keys.push(key);
          }
          keys.reverse();
          return function next() {
            while (keys.length) {
              var key2 = keys.pop();
              if (key2 in object) {
                next.value = key2;
                next.done = false;
                return next;
              }
            }
            next.done = true;
            return next;
          };
        };
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }
            if (typeof iterable.next === "function") {
              return iterable;
            }
            if (!isNaN(iterable.length)) {
              var i = -1, next = function next2() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next2.value = iterable[i];
                    next2.done = false;
                    return next2;
                  }
                }
                next2.value = undefined2;
                next2.done = true;
                return next2;
              };
              return next.next = next;
            }
          }
          return { next: doneResult };
        }
        exports2.values = values;
        function doneResult() {
          return { value: undefined2, done: true };
        }
        Context.prototype = {
          constructor: Context,
          reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined2;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined2;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
              for (var name in this) {
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined2;
                }
              }
            }
          },
          stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }
            return this.rval;
          },
          dispatchException: function(exception) {
            if (this.done) {
              throw exception;
            }
            var context = this;
            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;
              if (caught) {
                context.method = "next";
                context.arg = undefined2;
              }
              return !!caught;
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;
              if (entry.tryLoc === "root") {
                return handle("end");
              }
              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");
                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              finallyEntry = null;
            }
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }
            return this.complete(record);
          },
          complete: function(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }
            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }
            return ContinueSentinel;
          },
          finish: function(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;
                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }
                return thrown;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName,
              nextLoc
            };
            if (this.method === "next") {
              this.arg = undefined2;
            }
            return ContinueSentinel;
          }
        };
        return exports2;
      }(
        // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
        typeof module === "object" ? module.exports : {}
      );
      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
    }
  });

  // node_modules/@babel/polyfill/lib/noConflict.js
  var require_noConflict = __commonJS({
    "node_modules/@babel/polyfill/lib/noConflict.js"() {
      "use strict";
      require_es6();
      require_includes();
      require_flat_map();
      require_pad_start();
      require_pad_end();
      require_trim_start();
      require_trim_end();
      require_async_iterator();
      require_get_own_property_descriptors();
      require_values();
      require_entries();
      require_finally();
      require_web();
      require_runtime();
    }
  });

  // node_modules/core-js/library/modules/_global.js
  var require_global2 = __commonJS({
    "node_modules/core-js/library/modules/_global.js"(exports, module) {
      var global2 = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
      if (typeof __g == "number")
        __g = global2;
    }
  });

  // node_modules/core-js/library/modules/_core.js
  var require_core2 = __commonJS({
    "node_modules/core-js/library/modules/_core.js"(exports, module) {
      var core = module.exports = { version: "2.6.12" };
      if (typeof __e == "number")
        __e = core;
    }
  });

  // node_modules/core-js/library/modules/_a-function.js
  var require_a_function2 = __commonJS({
    "node_modules/core-js/library/modules/_a-function.js"(exports, module) {
      module.exports = function(it) {
        if (typeof it != "function")
          throw TypeError(it + " is not a function!");
        return it;
      };
    }
  });

  // node_modules/core-js/library/modules/_ctx.js
  var require_ctx2 = __commonJS({
    "node_modules/core-js/library/modules/_ctx.js"(exports, module) {
      var aFunction = require_a_function2();
      module.exports = function(fn2, that, length) {
        aFunction(fn2);
        if (that === void 0)
          return fn2;
        switch (length) {
          case 1:
            return function(a) {
              return fn2.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn2.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn2.call(that, a, b, c);
            };
        }
        return function() {
          return fn2.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js/library/modules/_is-object.js
  var require_is_object2 = __commonJS({
    "node_modules/core-js/library/modules/_is-object.js"(exports, module) {
      module.exports = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };
    }
  });

  // node_modules/core-js/library/modules/_an-object.js
  var require_an_object2 = __commonJS({
    "node_modules/core-js/library/modules/_an-object.js"(exports, module) {
      var isObject3 = require_is_object2();
      module.exports = function(it) {
        if (!isObject3(it))
          throw TypeError(it + " is not an object!");
        return it;
      };
    }
  });

  // node_modules/core-js/library/modules/_fails.js
  var require_fails2 = __commonJS({
    "node_modules/core-js/library/modules/_fails.js"(exports, module) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js/library/modules/_descriptors.js
  var require_descriptors2 = __commonJS({
    "node_modules/core-js/library/modules/_descriptors.js"(exports, module) {
      module.exports = !require_fails2()(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }
  });

  // node_modules/core-js/library/modules/_dom-create.js
  var require_dom_create2 = __commonJS({
    "node_modules/core-js/library/modules/_dom-create.js"(exports, module) {
      var isObject3 = require_is_object2();
      var document2 = require_global2().document;
      var is = isObject3(document2) && isObject3(document2.createElement);
      module.exports = function(it) {
        return is ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js/library/modules/_ie8-dom-define.js
  var require_ie8_dom_define2 = __commonJS({
    "node_modules/core-js/library/modules/_ie8-dom-define.js"(exports, module) {
      module.exports = !require_descriptors2() && !require_fails2()(function() {
        return Object.defineProperty(require_dom_create2()("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }
  });

  // node_modules/core-js/library/modules/_to-primitive.js
  var require_to_primitive2 = __commonJS({
    "node_modules/core-js/library/modules/_to-primitive.js"(exports, module) {
      var isObject3 = require_is_object2();
      module.exports = function(it, S) {
        if (!isObject3(it))
          return it;
        var fn2, val;
        if (S && typeof (fn2 = it.toString) == "function" && !isObject3(val = fn2.call(it)))
          return val;
        if (typeof (fn2 = it.valueOf) == "function" && !isObject3(val = fn2.call(it)))
          return val;
        if (!S && typeof (fn2 = it.toString) == "function" && !isObject3(val = fn2.call(it)))
          return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js/library/modules/_object-dp.js
  var require_object_dp2 = __commonJS({
    "node_modules/core-js/library/modules/_object-dp.js"(exports) {
      var anObject = require_an_object2();
      var IE8_DOM_DEFINE = require_ie8_dom_define2();
      var toPrimitive = require_to_primitive2();
      var dP = Object.defineProperty;
      exports.f = require_descriptors2() ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE)
          try {
            return dP(O, P, Attributes);
          } catch (e) {
          }
        if ("get" in Attributes || "set" in Attributes)
          throw TypeError("Accessors not supported!");
        if ("value" in Attributes)
          O[P] = Attributes.value;
        return O;
      };
    }
  });

  // node_modules/core-js/library/modules/_property-desc.js
  var require_property_desc2 = __commonJS({
    "node_modules/core-js/library/modules/_property-desc.js"(exports, module) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js/library/modules/_hide.js
  var require_hide2 = __commonJS({
    "node_modules/core-js/library/modules/_hide.js"(exports, module) {
      var dP = require_object_dp2();
      var createDesc = require_property_desc2();
      module.exports = require_descriptors2() ? function(object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js/library/modules/_has.js
  var require_has2 = __commonJS({
    "node_modules/core-js/library/modules/_has.js"(exports, module) {
      var hasOwnProperty2 = {}.hasOwnProperty;
      module.exports = function(it, key) {
        return hasOwnProperty2.call(it, key);
      };
    }
  });

  // node_modules/core-js/library/modules/_export.js
  var require_export2 = __commonJS({
    "node_modules/core-js/library/modules/_export.js"(exports, module) {
      var global2 = require_global2();
      var core = require_core2();
      var ctx = require_ctx2();
      var hide2 = require_hide2();
      var has = require_has2();
      var PROTOTYPE = "prototype";
      var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var IS_WRAP = type & $export.W;
        var exports2 = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports2[PROTOTYPE];
        var target = IS_GLOBAL ? global2 : IS_STATIC ? global2[name] : (global2[name] || {})[PROTOTYPE];
        var key, own, out;
        if (IS_GLOBAL)
          source = name;
        for (key in source) {
          own = !IS_FORCED && target && target[key] !== void 0;
          if (own && has(exports2, key))
            continue;
          out = own ? target[key] : source[key];
          exports2[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global2) : IS_WRAP && target[key] == out ? function(C) {
            var F = function(a, b, c) {
              if (this instanceof C) {
                switch (arguments.length) {
                  case 0:
                    return new C();
                  case 1:
                    return new C(a);
                  case 2:
                    return new C(a, b);
                }
                return new C(a, b, c);
              }
              return C.apply(this, arguments);
            };
            F[PROTOTYPE] = C[PROTOTYPE];
            return F;
          }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
          if (IS_PROTO) {
            (exports2.virtual || (exports2.virtual = {}))[key] = out;
            if (type & $export.R && expProto && !expProto[key])
              hide2(expProto, key, out);
          }
        }
      };
      $export.F = 1;
      $export.G = 2;
      $export.S = 4;
      $export.P = 8;
      $export.B = 16;
      $export.W = 32;
      $export.U = 64;
      $export.R = 128;
      module.exports = $export;
    }
  });

  // node_modules/core-js/library/modules/es7.global.js
  var require_es7_global = __commonJS({
    "node_modules/core-js/library/modules/es7.global.js"() {
      var $export = require_export2();
      $export($export.G, { global: require_global2() });
    }
  });

  // node_modules/core-js/library/fn/global.js
  var require_global3 = __commonJS({
    "node_modules/core-js/library/fn/global.js"(exports, module) {
      require_es7_global();
      module.exports = require_core2().global;
    }
  });

  // node_modules/es-errors/index.js
  var require_es_errors = __commonJS({
    "node_modules/es-errors/index.js"(exports, module) {
      "use strict";
      module.exports = Error;
    }
  });

  // node_modules/es-errors/eval.js
  var require_eval = __commonJS({
    "node_modules/es-errors/eval.js"(exports, module) {
      "use strict";
      module.exports = EvalError;
    }
  });

  // node_modules/es-errors/range.js
  var require_range = __commonJS({
    "node_modules/es-errors/range.js"(exports, module) {
      "use strict";
      module.exports = RangeError;
    }
  });

  // node_modules/es-errors/ref.js
  var require_ref = __commonJS({
    "node_modules/es-errors/ref.js"(exports, module) {
      "use strict";
      module.exports = ReferenceError;
    }
  });

  // node_modules/es-errors/syntax.js
  var require_syntax = __commonJS({
    "node_modules/es-errors/syntax.js"(exports, module) {
      "use strict";
      module.exports = SyntaxError;
    }
  });

  // node_modules/es-errors/type.js
  var require_type = __commonJS({
    "node_modules/es-errors/type.js"(exports, module) {
      "use strict";
      module.exports = TypeError;
    }
  });

  // node_modules/es-errors/uri.js
  var require_uri = __commonJS({
    "node_modules/es-errors/uri.js"(exports, module) {
      "use strict";
      module.exports = URIError;
    }
  });

  // node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/has-symbols/shams.js"(exports, module) {
      "use strict";
      module.exports = function hasSymbols() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(exports, module) {
      "use strict";
      var origSymbol = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham = require_shams();
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham();
      };
    }
  });

  // node_modules/has-proto/index.js
  var require_has_proto = __commonJS({
    "node_modules/has-proto/index.js"(exports, module) {
      "use strict";
      var test = {
        __proto__: null,
        foo: {}
      };
      var $Object = Object;
      module.exports = function hasProto() {
        return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
      };
    }
  });

  // node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(exports, module) {
      "use strict";
      var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
      var toStr = Object.prototype.toString;
      var max2 = Math.max;
      var funcType = "[object Function]";
      var concatty = function concatty2(a, b) {
        var arr = [];
        for (var i = 0; i < a.length; i += 1) {
          arr[i] = a[i];
        }
        for (var j = 0; j < b.length; j += 1) {
          arr[j + a.length] = b[j];
        }
        return arr;
      };
      var slicy = function slicy2(arrLike, offset2) {
        var arr = [];
        for (var i = offset2 || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
          arr[j] = arrLike[i];
        }
        return arr;
      };
      var joiny = function(arr, joiner) {
        var str = "";
        for (var i = 0; i < arr.length; i += 1) {
          str += arr[i];
          if (i + 1 < arr.length) {
            str += joiner;
          }
        }
        return str;
      };
      module.exports = function bind2(that) {
        var target = this;
        if (typeof target !== "function" || toStr.apply(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slicy(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(
              this,
              concatty(args, arguments)
            );
            if (Object(result) === result) {
              return result;
            }
            return this;
          }
          return target.apply(
            that,
            concatty(args, arguments)
          );
        };
        var boundLength = max2(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs[i] = "$" + i;
        }
        bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(exports, module) {
      "use strict";
      var implementation = require_implementation();
      module.exports = Function.prototype.bind || implementation;
    }
  });

  // node_modules/hasown/index.js
  var require_hasown = __commonJS({
    "node_modules/hasown/index.js"(exports, module) {
      "use strict";
      var call = Function.prototype.call;
      var $hasOwn = Object.prototype.hasOwnProperty;
      var bind2 = require_function_bind();
      module.exports = bind2.call(call, $hasOwn);
    }
  });

  // node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(exports, module) {
      "use strict";
      var undefined2;
      var $Error = require_es_errors();
      var $EvalError = require_eval();
      var $RangeError = require_range();
      var $ReferenceError = require_ref();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var $URIError = require_uri();
      var $Function = Function;
      var getEvalledConstructor = function(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD = Object.getOwnPropertyDescriptor;
      if ($gOPD) {
        try {
          $gOPD({}, "");
        } catch (e) {
          $gOPD = null;
        }
      }
      var throwTypeError = function() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? function() {
        try {
          arguments.callee;
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            return $gOPD(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      }() : throwTypeError;
      var hasSymbols = require_has_symbols()();
      var hasProto = require_has_proto()();
      var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
        return x.__proto__;
      } : null);
      var needsEval = {};
      var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
      var INTRINSICS = {
        __proto__: null,
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval,
        "%AsyncGenerator%": needsEval,
        "%AsyncGeneratorFunction%": needsEval,
        "%AsyncIteratorPrototype%": needsEval,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": $Error,
        "%eval%": eval,
        // eslint-disable-line no-eval
        "%EvalError%": $EvalError,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function,
        "%GeneratorFunction%": needsEval,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": $RangeError,
        "%ReferenceError%": $ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError,
        "%ThrowTypeError%": ThrowTypeError,
        "%TypedArray%": TypedArray,
        "%TypeError%": $TypeError,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": $URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
      };
      if (getProto) {
        try {
          null.error;
        } catch (e) {
          errorProto = getProto(getProto(e));
          INTRINSICS["%Error.prototype%"] = errorProto;
        }
      }
      var errorProto;
      var doEval = function doEval2(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn2 = doEval2("%AsyncGeneratorFunction%");
          if (fn2) {
            value = fn2.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval2("%AsyncGenerator%");
          if (gen && getProto) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        __proto__: null,
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind2 = require_function_bind();
      var hasOwn = require_hasown();
      var $concat = bind2.call(Function.call, Array.prototype.concat);
      var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
      var $replace = bind2.call(Function.call, String.prototype.replace);
      var $strSlice = bind2.call(Function.call, String.prototype.slice);
      var $exec = bind2.call(Function.call, RegExp.prototype.exec);
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = function stringToPath2(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace(string, rePropName, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
        });
        return result;
      };
      var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        if ($exec(/^%?[^%]*%?$/, name) === null) {
          throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // node_modules/es-define-property/index.js
  var require_es_define_property = __commonJS({
    "node_modules/es-define-property/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var $defineProperty = GetIntrinsic("%Object.defineProperty%", true) || false;
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = false;
        }
      }
      module.exports = $defineProperty;
    }
  });

  // node_modules/gopd/index.js
  var require_gopd = __commonJS({
    "node_modules/gopd/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      if ($gOPD) {
        try {
          $gOPD([], "length");
        } catch (e) {
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }
  });

  // node_modules/define-data-property/index.js
  var require_define_data_property = __commonJS({
    "node_modules/define-data-property/index.js"(exports, module) {
      "use strict";
      var $defineProperty = require_es_define_property();
      var $SyntaxError = require_syntax();
      var $TypeError = require_type();
      var gopd = require_gopd();
      module.exports = function defineDataProperty(obj, property, value) {
        if (!obj || typeof obj !== "object" && typeof obj !== "function") {
          throw new $TypeError("`obj` must be an object or a function`");
        }
        if (typeof property !== "string" && typeof property !== "symbol") {
          throw new $TypeError("`property` must be a string or a symbol`");
        }
        if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
          throw new $TypeError("`nonEnumerable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
          throw new $TypeError("`nonWritable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
          throw new $TypeError("`nonConfigurable`, if provided, must be a boolean or null");
        }
        if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
          throw new $TypeError("`loose`, if provided, must be a boolean");
        }
        var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
        var nonWritable = arguments.length > 4 ? arguments[4] : null;
        var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
        var loose = arguments.length > 6 ? arguments[6] : false;
        var desc = !!gopd && gopd(obj, property);
        if ($defineProperty) {
          $defineProperty(obj, property, {
            configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
            enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
            value,
            writable: nonWritable === null && desc ? desc.writable : !nonWritable
          });
        } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
          obj[property] = value;
        } else {
          throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
        }
      };
    }
  });

  // node_modules/has-property-descriptors/index.js
  var require_has_property_descriptors = __commonJS({
    "node_modules/has-property-descriptors/index.js"(exports, module) {
      "use strict";
      var $defineProperty = require_es_define_property();
      var hasPropertyDescriptors = function hasPropertyDescriptors2() {
        return !!$defineProperty;
      };
      hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
        if (!$defineProperty) {
          return null;
        }
        try {
          return $defineProperty([], "length", { value: 1 }).length !== 1;
        } catch (e) {
          return true;
        }
      };
      module.exports = hasPropertyDescriptors;
    }
  });

  // node_modules/set-function-length/index.js
  var require_set_function_length = __commonJS({
    "node_modules/set-function-length/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var define = require_define_data_property();
      var hasDescriptors = require_has_property_descriptors()();
      var gOPD = require_gopd();
      var $TypeError = require_type();
      var $floor = GetIntrinsic("%Math.floor%");
      module.exports = function setFunctionLength(fn2, length) {
        if (typeof fn2 !== "function") {
          throw new $TypeError("`fn` is not a function");
        }
        if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
          throw new $TypeError("`length` must be a positive 32-bit integer");
        }
        var loose = arguments.length > 2 && !!arguments[2];
        var functionLengthIsConfigurable = true;
        var functionLengthIsWritable = true;
        if ("length" in fn2 && gOPD) {
          var desc = gOPD(fn2, "length");
          if (desc && !desc.configurable) {
            functionLengthIsConfigurable = false;
          }
          if (desc && !desc.writable) {
            functionLengthIsWritable = false;
          }
        }
        if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
          if (hasDescriptors) {
            define(
              /** @type {Parameters<define>[0]} */
              fn2,
              "length",
              length,
              true,
              true
            );
          } else {
            define(
              /** @type {Parameters<define>[0]} */
              fn2,
              "length",
              length
            );
          }
        }
        return fn2;
      };
    }
  });

  // node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "node_modules/call-bind/index.js"(exports, module) {
      "use strict";
      var bind2 = require_function_bind();
      var GetIntrinsic = require_get_intrinsic();
      var setFunctionLength = require_set_function_length();
      var $TypeError = require_type();
      var $apply = GetIntrinsic("%Function.prototype.apply%");
      var $call = GetIntrinsic("%Function.prototype.call%");
      var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind2.call($call, $apply);
      var $defineProperty = require_es_define_property();
      var $max = GetIntrinsic("%Math.max%");
      module.exports = function callBind(originalFunction) {
        if (typeof originalFunction !== "function") {
          throw new $TypeError("a function is required");
        }
        var func = $reflectApply(bind2, $call, arguments);
        return setFunctionLength(
          func,
          1 + $max(0, originalFunction.length - (arguments.length - 1)),
          true
        );
      };
      var applyBind = function applyBind2() {
        return $reflectApply(bind2, $apply, arguments);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // node_modules/call-bind/callBound.js
  var require_callBound = __commonJS({
    "node_modules/call-bind/callBound.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBind = require_call_bind();
      var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        var intrinsic = GetIntrinsic(name, !!allowMissing);
        if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
          return callBind(intrinsic);
        }
        return intrinsic;
      };
    }
  });

  // (disabled):node_modules/object-inspect/util.inspect
  var require_util = __commonJS({
    "(disabled):node_modules/object-inspect/util.inspect"() {
    }
  });

  // node_modules/object-inspect/index.js
  var require_object_inspect = __commonJS({
    "node_modules/object-inspect/index.js"(exports, module) {
      var hasMap = typeof Map === "function" && Map.prototype;
      var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
      var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
      var mapForEach = hasMap && Map.prototype.forEach;
      var hasSet = typeof Set === "function" && Set.prototype;
      var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
      var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
      var setForEach = hasSet && Set.prototype.forEach;
      var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
      var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
      var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
      var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
      var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
      var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
      var booleanValueOf = Boolean.prototype.valueOf;
      var objectToString = Object.prototype.toString;
      var functionToString = Function.prototype.toString;
      var $match = String.prototype.match;
      var $slice = String.prototype.slice;
      var $replace = String.prototype.replace;
      var $toUpperCase = String.prototype.toUpperCase;
      var $toLowerCase = String.prototype.toLowerCase;
      var $test = RegExp.prototype.test;
      var $concat = Array.prototype.concat;
      var $join = Array.prototype.join;
      var $arrSlice = Array.prototype.slice;
      var $floor = Math.floor;
      var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
      var gOPS = Object.getOwnPropertySymbols;
      var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
      var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
      var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
      var isEnumerable = Object.prototype.propertyIsEnumerable;
      var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
        return O.__proto__;
      } : null);
      function addNumericSeparator(num, str) {
        if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
          return str;
        }
        var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof num === "number") {
          var int = num < 0 ? -$floor(-num) : $floor(num);
          if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
          }
        }
        return $replace.call(str, sepRegex, "$&_");
      }
      var utilInspect = require_util();
      var inspectCustom = utilInspect.custom;
      var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
      module.exports = function inspect_(obj, options, depth, seen) {
        var opts = options || {};
        if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
        }
        if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
          throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        }
        var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
        if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
          throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        }
        if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
          throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        }
        if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
          throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        }
        var numericSeparator = opts.numericSeparator;
        if (typeof obj === "undefined") {
          return "undefined";
        }
        if (obj === null) {
          return "null";
        }
        if (typeof obj === "boolean") {
          return obj ? "true" : "false";
        }
        if (typeof obj === "string") {
          return inspectString(obj, opts);
        }
        if (typeof obj === "number") {
          if (obj === 0) {
            return Infinity / obj > 0 ? "0" : "-0";
          }
          var str = String(obj);
          return numericSeparator ? addNumericSeparator(obj, str) : str;
        }
        if (typeof obj === "bigint") {
          var bigIntStr = String(obj) + "n";
          return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
        }
        var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
        if (typeof depth === "undefined") {
          depth = 0;
        }
        if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
          return isArray2(obj) ? "[Array]" : "[Object]";
        }
        var indent = getIndent(opts, depth);
        if (typeof seen === "undefined") {
          seen = [];
        } else if (indexOf(seen, obj) >= 0) {
          return "[Circular]";
        }
        function inspect(value, from, noIndent) {
          if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
          }
          if (noIndent) {
            var newOpts = {
              depth: opts.depth
            };
            if (has(opts, "quoteStyle")) {
              newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
          }
          return inspect_(value, opts, depth + 1, seen);
        }
        if (typeof obj === "function" && !isRegExp2(obj)) {
          var name = nameOf(obj);
          var keys = arrObjKeys(obj, inspect);
          return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
        }
        if (isSymbol(obj)) {
          var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
          return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
        }
        if (isElement3(obj)) {
          var s = "<" + $toLowerCase.call(String(obj.nodeName));
          var attrs = obj.attributes || [];
          for (var i = 0; i < attrs.length; i++) {
            s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
          }
          s += ">";
          if (obj.childNodes && obj.childNodes.length) {
            s += "...";
          }
          s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
          return s;
        }
        if (isArray2(obj)) {
          if (obj.length === 0) {
            return "[]";
          }
          var xs = arrObjKeys(obj, inspect);
          if (indent && !singleLineValues(xs)) {
            return "[" + indentedJoin(xs, indent) + "]";
          }
          return "[ " + $join.call(xs, ", ") + " ]";
        }
        if (isError(obj)) {
          var parts = arrObjKeys(obj, inspect);
          if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
            return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
          }
          if (parts.length === 0) {
            return "[" + String(obj) + "]";
          }
          return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
        }
        if (typeof obj === "object" && customInspect) {
          if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
          } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
            return obj.inspect();
          }
        }
        if (isMap(obj)) {
          var mapParts = [];
          if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
              mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
            });
          }
          return collectionOf("Map", mapSize.call(obj), mapParts, indent);
        }
        if (isSet(obj)) {
          var setParts = [];
          if (setForEach) {
            setForEach.call(obj, function(value) {
              setParts.push(inspect(value, obj));
            });
          }
          return collectionOf("Set", setSize.call(obj), setParts, indent);
        }
        if (isWeakMap(obj)) {
          return weakCollectionOf("WeakMap");
        }
        if (isWeakSet(obj)) {
          return weakCollectionOf("WeakSet");
        }
        if (isWeakRef(obj)) {
          return weakCollectionOf("WeakRef");
        }
        if (isNumber2(obj)) {
          return markBoxed(inspect(Number(obj)));
        }
        if (isBigInt(obj)) {
          return markBoxed(inspect(bigIntValueOf.call(obj)));
        }
        if (isBoolean2(obj)) {
          return markBoxed(booleanValueOf.call(obj));
        }
        if (isString2(obj)) {
          return markBoxed(inspect(String(obj)));
        }
        if (typeof window !== "undefined" && obj === window) {
          return "{ [object Window] }";
        }
        if (obj === global) {
          return "{ [object globalThis] }";
        }
        if (!isDate2(obj) && !isRegExp2(obj)) {
          var ys = arrObjKeys(obj, inspect);
          var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
          var protoTag = obj instanceof Object ? "" : "null prototype";
          var stringTag = !isPlainObject2 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
          var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
          var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
          if (ys.length === 0) {
            return tag + "{}";
          }
          if (indent) {
            return tag + "{" + indentedJoin(ys, indent) + "}";
          }
          return tag + "{ " + $join.call(ys, ", ") + " }";
        }
        return String(obj);
      };
      function wrapQuotes(s, defaultStyle, opts) {
        var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
        return quoteChar + s + quoteChar;
      }
      function quote(s) {
        return $replace.call(String(s), /"/g, "&quot;");
      }
      function isArray2(obj) {
        return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isDate2(obj) {
        return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isRegExp2(obj) {
        return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isError(obj) {
        return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isString2(obj) {
        return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isNumber2(obj) {
        return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isBoolean2(obj) {
        return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
      }
      function isSymbol(obj) {
        if (hasShammedSymbols) {
          return obj && typeof obj === "object" && obj instanceof Symbol;
        }
        if (typeof obj === "symbol") {
          return true;
        }
        if (!obj || typeof obj !== "object" || !symToString) {
          return false;
        }
        try {
          symToString.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isBigInt(obj) {
        if (!obj || typeof obj !== "object" || !bigIntValueOf) {
          return false;
        }
        try {
          bigIntValueOf.call(obj);
          return true;
        } catch (e) {
        }
        return false;
      }
      var hasOwn = Object.prototype.hasOwnProperty || function(key) {
        return key in this;
      };
      function has(obj, key) {
        return hasOwn.call(obj, key);
      }
      function toStr(obj) {
        return objectToString.call(obj);
      }
      function nameOf(f) {
        if (f.name) {
          return f.name;
        }
        var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
        if (m) {
          return m[1];
        }
        return null;
      }
      function indexOf(xs, x) {
        if (xs.indexOf) {
          return xs.indexOf(x);
        }
        for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x) {
            return i;
          }
        }
        return -1;
      }
      function isMap(x) {
        if (!mapSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          mapSize.call(x);
          try {
            setSize.call(x);
          } catch (s) {
            return true;
          }
          return x instanceof Map;
        } catch (e) {
        }
        return false;
      }
      function isWeakMap(x) {
        if (!weakMapHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakMapHas.call(x, weakMapHas);
          try {
            weakSetHas.call(x, weakSetHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakMap;
        } catch (e) {
        }
        return false;
      }
      function isWeakRef(x) {
        if (!weakRefDeref || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakRefDeref.call(x);
          return true;
        } catch (e) {
        }
        return false;
      }
      function isSet(x) {
        if (!setSize || !x || typeof x !== "object") {
          return false;
        }
        try {
          setSize.call(x);
          try {
            mapSize.call(x);
          } catch (m) {
            return true;
          }
          return x instanceof Set;
        } catch (e) {
        }
        return false;
      }
      function isWeakSet(x) {
        if (!weakSetHas || !x || typeof x !== "object") {
          return false;
        }
        try {
          weakSetHas.call(x, weakSetHas);
          try {
            weakMapHas.call(x, weakMapHas);
          } catch (s) {
            return true;
          }
          return x instanceof WeakSet;
        } catch (e) {
        }
        return false;
      }
      function isElement3(x) {
        if (!x || typeof x !== "object") {
          return false;
        }
        if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
          return true;
        }
        return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
      }
      function inspectString(str, opts) {
        if (str.length > opts.maxStringLength) {
          var remaining = str.length - opts.maxStringLength;
          var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
          return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
        }
        var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
        return wrapQuotes(s, "single", opts);
      }
      function lowbyte(c) {
        var n = c.charCodeAt(0);
        var x = {
          8: "b",
          9: "t",
          10: "n",
          12: "f",
          13: "r"
        }[n];
        if (x) {
          return "\\" + x;
        }
        return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
      }
      function markBoxed(str) {
        return "Object(" + str + ")";
      }
      function weakCollectionOf(type) {
        return type + " { ? }";
      }
      function collectionOf(type, size, entries, indent) {
        var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
        return type + " (" + size + ") {" + joinedEntries + "}";
      }
      function singleLineValues(xs) {
        for (var i = 0; i < xs.length; i++) {
          if (indexOf(xs[i], "\n") >= 0) {
            return false;
          }
        }
        return true;
      }
      function getIndent(opts, depth) {
        var baseIndent;
        if (opts.indent === "	") {
          baseIndent = "	";
        } else if (typeof opts.indent === "number" && opts.indent > 0) {
          baseIndent = $join.call(Array(opts.indent + 1), " ");
        } else {
          return null;
        }
        return {
          base: baseIndent,
          prev: $join.call(Array(depth + 1), baseIndent)
        };
      }
      function indentedJoin(xs, indent) {
        if (xs.length === 0) {
          return "";
        }
        var lineJoiner = "\n" + indent.prev + indent.base;
        return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
      }
      function arrObjKeys(obj, inspect) {
        var isArr = isArray2(obj);
        var xs = [];
        if (isArr) {
          xs.length = obj.length;
          for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
          }
        }
        var syms = typeof gOPS === "function" ? gOPS(obj) : [];
        var symMap;
        if (hasShammedSymbols) {
          symMap = {};
          for (var k = 0; k < syms.length; k++) {
            symMap["$" + syms[k]] = syms[k];
          }
        }
        for (var key in obj) {
          if (!has(obj, key)) {
            continue;
          }
          if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
          }
          if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
            continue;
          } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
          } else {
            xs.push(key + ": " + inspect(obj[key], obj));
          }
        }
        if (typeof gOPS === "function") {
          for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
              xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
            }
          }
        }
        return xs;
      }
    }
  });

  // node_modules/side-channel/index.js
  var require_side_channel = __commonJS({
    "node_modules/side-channel/index.js"(exports, module) {
      "use strict";
      var GetIntrinsic = require_get_intrinsic();
      var callBound = require_callBound();
      var inspect = require_object_inspect();
      var $TypeError = require_type();
      var $WeakMap = GetIntrinsic("%WeakMap%", true);
      var $Map = GetIntrinsic("%Map%", true);
      var $weakMapGet = callBound("WeakMap.prototype.get", true);
      var $weakMapSet = callBound("WeakMap.prototype.set", true);
      var $weakMapHas = callBound("WeakMap.prototype.has", true);
      var $mapGet = callBound("Map.prototype.get", true);
      var $mapSet = callBound("Map.prototype.set", true);
      var $mapHas = callBound("Map.prototype.has", true);
      var listGetNode = function(list, key) {
        var prev = list;
        var curr;
        for (; (curr = prev.next) !== null; prev = curr) {
          if (curr.key === key) {
            prev.next = curr.next;
            curr.next = /** @type {NonNullable<typeof list.next>} */
            list.next;
            list.next = curr;
            return curr;
          }
        }
      };
      var listGet = function(objects, key) {
        var node = listGetNode(objects, key);
        return node && node.value;
      };
      var listSet = function(objects, key, value) {
        var node = listGetNode(objects, key);
        if (node) {
          node.value = value;
        } else {
          objects.next = /** @type {import('.').ListNode<typeof value>} */
          {
            // eslint-disable-line no-param-reassign, no-extra-parens
            key,
            next: objects.next,
            value
          };
        }
      };
      var listHas = function(objects, key) {
        return !!listGetNode(objects, key);
      };
      module.exports = function getSideChannel() {
        var $wm;
        var $m;
        var $o;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapGet($wm, key);
              }
            } else if ($Map) {
              if ($m) {
                return $mapGet($m, key);
              }
            } else {
              if ($o) {
                return listGet($o, key);
              }
            }
          },
          has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapHas($wm, key);
              }
            } else if ($Map) {
              if ($m) {
                return $mapHas($m, key);
              }
            } else {
              if ($o) {
                return listHas($o, key);
              }
            }
            return false;
          },
          set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if (!$wm) {
                $wm = new $WeakMap();
              }
              $weakMapSet($wm, key, value);
            } else if ($Map) {
              if (!$m) {
                $m = new $Map();
              }
              $mapSet($m, key, value);
            } else {
              if (!$o) {
                $o = { key: {}, next: null };
              }
              listSet($o, key, value);
            }
          }
        };
        return channel;
      };
    }
  });

  // node_modules/qs/lib/formats.js
  var require_formats = __commonJS({
    "node_modules/qs/lib/formats.js"(exports, module) {
      "use strict";
      var replace = String.prototype.replace;
      var percentTwenties = /%20/g;
      var Format = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
      };
      module.exports = {
        "default": Format.RFC3986,
        formatters: {
          RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
          },
          RFC3986: function(value) {
            return String(value);
          }
        },
        RFC1738: Format.RFC1738,
        RFC3986: Format.RFC3986
      };
    }
  });

  // node_modules/qs/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/qs/lib/utils.js"(exports, module) {
      "use strict";
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var isArray2 = Array.isArray;
      var hexTable = function() {
        var array = [];
        for (var i = 0; i < 256; ++i) {
          array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
        }
        return array;
      }();
      var compactQueue = function compactQueue2(queue) {
        while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];
          if (isArray2(obj)) {
            var compacted = [];
            for (var j = 0; j < obj.length; ++j) {
              if (typeof obj[j] !== "undefined") {
                compacted.push(obj[j]);
              }
            }
            item.obj[item.prop] = compacted;
          }
        }
      };
      var arrayToObject2 = function arrayToObject3(source, options) {
        var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== "undefined") {
            obj[i] = source[i];
          }
        }
        return obj;
      };
      var merge2 = function merge3(target, source, options) {
        if (!source) {
          return target;
        }
        if (typeof source !== "object") {
          if (isArray2(target)) {
            target.push(source);
          } else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
              target[source] = true;
            }
          } else {
            return [target, source];
          }
          return target;
        }
        if (!target || typeof target !== "object") {
          return [target].concat(source);
        }
        var mergeTarget = target;
        if (isArray2(target) && !isArray2(source)) {
          mergeTarget = arrayToObject2(target, options);
        }
        if (isArray2(target) && isArray2(source)) {
          source.forEach(function(item, i) {
            if (has.call(target, i)) {
              var targetItem = target[i];
              if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
                target[i] = merge3(targetItem, item, options);
              } else {
                target.push(item);
              }
            } else {
              target[i] = item;
            }
          });
          return target;
        }
        return Object.keys(source).reduce(function(acc, key) {
          var value = source[key];
          if (has.call(acc, key)) {
            acc[key] = merge3(acc[key], value, options);
          } else {
            acc[key] = value;
          }
          return acc;
        }, mergeTarget);
      };
      var assign = function assignSingleSource(target, source) {
        return Object.keys(source).reduce(function(acc, key) {
          acc[key] = source[key];
          return acc;
        }, target);
      };
      var decode = function(str, decoder, charset) {
        var strWithoutPlus = str.replace(/\+/g, " ");
        if (charset === "iso-8859-1") {
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
        }
        try {
          return decodeURIComponent(strWithoutPlus);
        } catch (e) {
          return strWithoutPlus;
        }
      };
      var encode3 = function encode4(str, defaultEncoder, charset, kind, format) {
        if (str.length === 0) {
          return str;
        }
        var string = str;
        if (typeof str === "symbol") {
          string = Symbol.prototype.toString.call(str);
        } else if (typeof str !== "string") {
          string = String(str);
        }
        if (charset === "iso-8859-1") {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
          });
        }
        var out = "";
        for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            out += string.charAt(i);
            continue;
          }
          if (c < 128) {
            out = out + hexTable[c];
            continue;
          }
          if (c < 2048) {
            out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
            continue;
          }
          if (c < 55296 || c >= 57344) {
            out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
          out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        return out;
      };
      var compact = function compact2(value) {
        var queue = [{ obj: { o: value }, prop: "o" }];
        var refs = [];
        for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];
          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
              queue.push({ obj, prop: key });
              refs.push(val);
            }
          }
        }
        compactQueue(queue);
        return value;
      };
      var isRegExp2 = function isRegExp3(obj) {
        return Object.prototype.toString.call(obj) === "[object RegExp]";
      };
      var isBuffer2 = function isBuffer3(obj) {
        if (!obj || typeof obj !== "object") {
          return false;
        }
        return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
      };
      var combine = function combine2(a, b) {
        return [].concat(a, b);
      };
      var maybeMap = function maybeMap2(val, fn2) {
        if (isArray2(val)) {
          var mapped = [];
          for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn2(val[i]));
          }
          return mapped;
        }
        return fn2(val);
      };
      module.exports = {
        arrayToObject: arrayToObject2,
        assign,
        combine,
        compact,
        decode,
        encode: encode3,
        isBuffer: isBuffer2,
        isRegExp: isRegExp2,
        maybeMap,
        merge: merge2
      };
    }
  });

  // node_modules/qs/lib/stringify.js
  var require_stringify = __commonJS({
    "node_modules/qs/lib/stringify.js"(exports, module) {
      "use strict";
      var getSideChannel = require_side_channel();
      var utils = require_utils();
      var formats = require_formats();
      var has = Object.prototype.hasOwnProperty;
      var arrayPrefixGenerators = {
        brackets: function brackets(prefix) {
          return prefix + "[]";
        },
        comma: "comma",
        indices: function indices(prefix, key) {
          return prefix + "[" + key + "]";
        },
        repeat: function repeat(prefix) {
          return prefix;
        }
      };
      var isArray2 = Array.isArray;
      var split = String.prototype.split;
      var push = Array.prototype.push;
      var pushToArray = function(arr, valueOrArray) {
        push.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
      };
      var toISO = Date.prototype.toISOString;
      var defaultFormat = formats["default"];
      var defaults2 = {
        addQueryPrefix: false,
        allowDots: false,
        charset: "utf-8",
        charsetSentinel: false,
        delimiter: "&",
        encode: true,
        encoder: utils.encode,
        encodeValuesOnly: false,
        format: defaultFormat,
        formatter: formats.formatters[defaultFormat],
        // deprecated
        indices: false,
        serializeDate: function serializeDate(date) {
          return toISO.call(date);
        },
        skipNulls: false,
        strictNullHandling: false
      };
      var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
        return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
      };
      var sentinel = {};
      var stringify2 = function stringify3(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter2, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
        var obj = object;
        var tmpSc = sideChannel;
        var step = 0;
        var findFlag = false;
        while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
          var pos = tmpSc.get(object);
          step += 1;
          if (typeof pos !== "undefined") {
            if (pos === step) {
              throw new RangeError("Cyclic object value");
            } else {
              findFlag = true;
            }
          }
          if (typeof tmpSc.get(sentinel) === "undefined") {
            step = 0;
          }
        }
        if (typeof filter2 === "function") {
          obj = filter2(prefix, obj);
        } else if (obj instanceof Date) {
          obj = serializeDate(obj);
        } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
          obj = utils.maybeMap(obj, function(value2) {
            if (value2 instanceof Date) {
              return serializeDate(value2);
            }
            return value2;
          });
        }
        if (obj === null) {
          if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults2.encoder, charset, "key", format) : prefix;
          }
          obj = "";
        }
        if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults2.encoder, charset, "key", format);
            if (generateArrayPrefix === "comma" && encodeValuesOnly) {
              var valuesArray = split.call(String(obj), ",");
              var valuesJoined = "";
              for (var i = 0; i < valuesArray.length; ++i) {
                valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults2.encoder, charset, "value", format));
              }
              return [formatter(keyValue) + (commaRoundTrip && isArray2(obj) && valuesArray.length === 1 ? "[]" : "") + "=" + valuesJoined];
            }
            return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults2.encoder, charset, "value", format))];
          }
          return [formatter(prefix) + "=" + formatter(String(obj))];
        }
        var values = [];
        if (typeof obj === "undefined") {
          return values;
        }
        var objKeys;
        if (generateArrayPrefix === "comma" && isArray2(obj)) {
          objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
        } else if (isArray2(filter2)) {
          objKeys = filter2;
        } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
        }
        var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? prefix + "[]" : prefix;
        for (var j = 0; j < objKeys.length; ++j) {
          var key = objKeys[j];
          var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
          if (skipNulls && value === null) {
            continue;
          }
          var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
          sideChannel.set(object, step);
          var valueSideChannel = getSideChannel();
          valueSideChannel.set(sentinel, sideChannel);
          pushToArray(values, stringify3(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            encoder,
            filter2,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
          ));
        }
        return values;
      };
      var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
        if (!opts) {
          return defaults2;
        }
        if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
          throw new TypeError("Encoder has to be a function.");
        }
        var charset = opts.charset || defaults2.charset;
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var format = formats["default"];
        if (typeof opts.format !== "undefined") {
          if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError("Unknown format option provided.");
          }
          format = opts.format;
        }
        var formatter = formats.formatters[format];
        var filter2 = defaults2.filter;
        if (typeof opts.filter === "function" || isArray2(opts.filter)) {
          filter2 = opts.filter;
        }
        return {
          addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults2.addQueryPrefix,
          allowDots: typeof opts.allowDots === "undefined" ? defaults2.allowDots : !!opts.allowDots,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
          delimiter: typeof opts.delimiter === "undefined" ? defaults2.delimiter : opts.delimiter,
          encode: typeof opts.encode === "boolean" ? opts.encode : defaults2.encode,
          encoder: typeof opts.encoder === "function" ? opts.encoder : defaults2.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults2.encodeValuesOnly,
          filter: filter2,
          format,
          formatter,
          serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults2.serializeDate,
          skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults2.skipNulls,
          sort: typeof opts.sort === "function" ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
        };
      };
      module.exports = function(object, opts) {
        var obj = object;
        var options = normalizeStringifyOptions(opts);
        var objKeys;
        var filter2;
        if (typeof options.filter === "function") {
          filter2 = options.filter;
          obj = filter2("", obj);
        } else if (isArray2(options.filter)) {
          filter2 = options.filter;
          objKeys = filter2;
        }
        var keys = [];
        if (typeof obj !== "object" || obj === null) {
          return "";
        }
        var arrayFormat;
        if (opts && opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
        } else if (opts && "indices" in opts) {
          arrayFormat = opts.indices ? "indices" : "repeat";
        } else {
          arrayFormat = "indices";
        }
        var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
        if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
          throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        }
        var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
        if (!objKeys) {
          objKeys = Object.keys(obj);
        }
        if (options.sort) {
          objKeys.sort(options.sort);
        }
        var sideChannel = getSideChannel();
        for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];
          if (options.skipNulls && obj[key] === null) {
            continue;
          }
          pushToArray(keys, stringify2(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
          ));
        }
        var joined = keys.join(options.delimiter);
        var prefix = options.addQueryPrefix === true ? "?" : "";
        if (options.charsetSentinel) {
          if (options.charset === "iso-8859-1") {
            prefix += "utf8=%26%2310003%3B&";
          } else {
            prefix += "utf8=%E2%9C%93&";
          }
        }
        return joined.length > 0 ? prefix + joined : "";
      };
    }
  });

  // node_modules/qs/lib/parse.js
  var require_parse = __commonJS({
    "node_modules/qs/lib/parse.js"(exports, module) {
      "use strict";
      var utils = require_utils();
      var has = Object.prototype.hasOwnProperty;
      var isArray2 = Array.isArray;
      var defaults2 = {
        allowDots: false,
        allowPrototypes: false,
        allowSparse: false,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: false,
        comma: false,
        decoder: utils.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: false,
        interpretNumericEntities: false,
        parameterLimit: 1e3,
        parseArrays: true,
        plainObjects: false,
        strictNullHandling: false
      };
      var interpretNumericEntities = function(str) {
        return str.replace(/&#(\d+);/g, function($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
        });
      };
      var parseArrayValue = function(val, options) {
        if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
          return val.split(",");
        }
        return val;
      };
      var isoSentinel = "utf8=%26%2310003%3B";
      var charsetSentinel = "utf8=%E2%9C%93";
      var parseValues = function parseQueryStringValues(str, options) {
        var obj = {};
        var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
        var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
        var parts = cleanStr.split(options.delimiter, limit);
        var skipIndex = -1;
        var i;
        var charset = options.charset;
        if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf("utf8=") === 0) {
              if (parts[i] === charsetSentinel) {
                charset = "utf-8";
              } else if (parts[i] === isoSentinel) {
                charset = "iso-8859-1";
              }
              skipIndex = i;
              i = parts.length;
            }
          }
        }
        for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
            continue;
          }
          var part = parts[i];
          var bracketEqualsPos = part.indexOf("]=");
          var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
          var key, val;
          if (pos === -1) {
            key = options.decoder(part, defaults2.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
          } else {
            key = options.decoder(part.slice(0, pos), defaults2.decoder, charset, "key");
            val = utils.maybeMap(
              parseArrayValue(part.slice(pos + 1), options),
              function(encodedVal) {
                return options.decoder(encodedVal, defaults2.decoder, charset, "value");
              }
            );
          }
          if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
            val = interpretNumericEntities(val);
          }
          if (part.indexOf("[]=") > -1) {
            val = isArray2(val) ? [val] : val;
          }
          if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
          } else {
            obj[key] = val;
          }
        }
        return obj;
      };
      var parseObject = function(chain, val, options, valuesParsed) {
        var leaf = valuesParsed ? val : parseArrayValue(val, options);
        for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];
          if (root === "[]" && options.parseArrays) {
            obj = [].concat(leaf);
          } else {
            obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") {
              obj = { 0: leaf };
            } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
              obj = [];
              obj[index] = leaf;
            } else if (cleanRoot !== "__proto__") {
              obj[cleanRoot] = leaf;
            }
          }
          leaf = obj;
        }
        return leaf;
      };
      var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
        if (!givenKey) {
          return;
        }
        var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
        var brackets = /(\[[^[\]]*])/;
        var child = /(\[[^[\]]*])/g;
        var segment = options.depth > 0 && brackets.exec(key);
        var parent = segment ? key.slice(0, segment.index) : key;
        var keys = [];
        if (parent) {
          if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys.push(parent);
        }
        var i = 0;
        while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
              return;
            }
          }
          keys.push(segment[1]);
        }
        if (segment) {
          keys.push("[" + key.slice(segment.index) + "]");
        }
        return parseObject(keys, val, options, valuesParsed);
      };
      var normalizeParseOptions = function normalizeParseOptions2(opts) {
        if (!opts) {
          return defaults2;
        }
        if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
          throw new TypeError("Decoder has to be a function.");
        }
        if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        }
        var charset = typeof opts.charset === "undefined" ? defaults2.charset : opts.charset;
        return {
          allowDots: typeof opts.allowDots === "undefined" ? defaults2.allowDots : !!opts.allowDots,
          allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults2.allowPrototypes,
          allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults2.allowSparse,
          arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults2.arrayLimit,
          charset,
          charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
          comma: typeof opts.comma === "boolean" ? opts.comma : defaults2.comma,
          decoder: typeof opts.decoder === "function" ? opts.decoder : defaults2.decoder,
          delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults2.delimiter,
          // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults2.depth,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults2.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults2.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults2.plainObjects,
          strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
        };
      };
      module.exports = function(str, opts) {
        var options = normalizeParseOptions(opts);
        if (str === "" || str === null || typeof str === "undefined") {
          return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        }
        var tempObj = typeof str === "string" ? parseValues(str, options) : str;
        var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var keys = Object.keys(tempObj);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
          obj = utils.merge(obj, newObj, options);
        }
        if (options.allowSparse === true) {
          return obj;
        }
        return utils.compact(obj);
      };
    }
  });

  // node_modules/qs/lib/index.js
  var require_lib = __commonJS({
    "node_modules/qs/lib/index.js"(exports, module) {
      "use strict";
      var stringify2 = require_stringify();
      var parse = require_parse();
      var formats = require_formats();
      module.exports = {
        formats,
        parse,
        stringify: stringify2
      };
    }
  });

  // node_modules/@babel/polyfill/lib/index.js
  require_noConflict();
  var _global = _interopRequireDefault(require_global3());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
    console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.");
  }
  _global["default"]._babelPolyfill = true;

  // node_modules/@popperjs/core/lib/index.js
  var lib_exports = {};
  __export(lib_exports, {
    afterMain: () => afterMain,
    afterRead: () => afterRead,
    afterWrite: () => afterWrite,
    applyStyles: () => applyStyles_default,
    arrow: () => arrow_default,
    auto: () => auto,
    basePlacements: () => basePlacements,
    beforeMain: () => beforeMain,
    beforeRead: () => beforeRead,
    beforeWrite: () => beforeWrite,
    bottom: () => bottom,
    clippingParents: () => clippingParents,
    computeStyles: () => computeStyles_default,
    createPopper: () => createPopper3,
    createPopperBase: () => createPopper,
    createPopperLite: () => createPopper2,
    detectOverflow: () => detectOverflow,
    end: () => end,
    eventListeners: () => eventListeners_default,
    flip: () => flip_default,
    hide: () => hide_default,
    left: () => left,
    main: () => main,
    modifierPhases: () => modifierPhases,
    offset: () => offset_default,
    placements: () => placements,
    popper: () => popper,
    popperGenerator: () => popperGenerator,
    popperOffsets: () => popperOffsets_default,
    preventOverflow: () => preventOverflow_default,
    read: () => read,
    reference: () => reference,
    right: () => right,
    start: () => start,
    top: () => top,
    variationPlacements: () => variationPlacements,
    viewport: () => viewport,
    write: () => write
  });

  // node_modules/@popperjs/core/lib/enums.js
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  // node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindow.js
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }

  // node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // node_modules/@popperjs/core/lib/modifiers/applyStyles.js
  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state.elements).forEach(function(name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property) {
          style2[property] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect,
    requires: ["computeStyles"]
  };

  // node_modules/@popperjs/core/lib/utils/getBasePlacement.js
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }

  // node_modules/@popperjs/core/lib/utils/math.js
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  // node_modules/@popperjs/core/lib/utils/userAgent.js
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }

  // node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  // node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/contains.js
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }

  // node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }

  // node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle2(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle2(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle2(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }

  // node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }

  // node_modules/@popperjs/core/lib/utils/within.js
  function within(min2, value, max2) {
    return max(min2, min(value, max2));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }

  // node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  // node_modules/@popperjs/core/lib/utils/expandToHashMap.js
  function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  // node_modules/@popperjs/core/lib/modifiers/arrow.js
  var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect2(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }
    state.elements.arrow = arrowElement;
  }
  var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect2,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  // node_modules/@popperjs/core/lib/utils/getVariation.js
  function getVariation(placement) {
    return placement.split("-")[1];
  }

  // node_modules/@popperjs/core/lib/modifiers/computeStyles.js
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration,
      isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-placement": state.placement
    });
  }
  var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };

  // node_modules/@popperjs/core/lib/modifiers/eventListeners.js
  var passive = {
    passive: true
  };
  function effect3(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect: effect3,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
  var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash[matched];
    });
  }

  // node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
  var hash2 = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash2[matched];
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  // node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle2(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  // node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }

  // node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }

  // node_modules/@popperjs/core/lib/utils/rectToClientRect.js
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  // node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  // node_modules/@popperjs/core/lib/utils/computeOffsets.js
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
        default:
      }
    }
    return offsets;
  }

  // node_modules/@popperjs/core/lib/utils/detectOverflow.js
  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }

  // node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements2;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }

  // node_modules/@popperjs/core/lib/modifiers/flip.js
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    }
    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  }
  var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };

  // node_modules/@popperjs/core/lib/modifiers/hide.js
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };

  // node_modules/@popperjs/core/lib/modifiers/offset.js
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
  }
  var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };

  // node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
  function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: "absolute",
      placement: state.placement
    });
  }
  var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };

  // node_modules/@popperjs/core/lib/utils/getAltAxis.js
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }

  // node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
  function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min2 = offset2 + overflow[mainSide];
      var max2 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
  var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };

  // node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  // node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  // node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // node_modules/@popperjs/core/lib/utils/orderModifiers.js
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  // node_modules/@popperjs/core/lib/utils/debounce.js
  function debounce(fn2) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn2());
          });
        });
      }
      return pending;
    };
  }

  // node_modules/@popperjs/core/lib/utils/mergeByName.js
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }

  // node_modules/@popperjs/core/lib/createPopper.js
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper4(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions;
      }
      var state = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options2);
          state.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
          state.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state.reset = false;
          state.placement = state.options.placement;
          state.orderedModifiers.forEach(function(modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }
            var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn2 === "function") {
              state = fn2({
                state,
                options: _options,
                name,
                instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state2) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state2);
        }
      });
      function runModifierEffects() {
        state.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
          if (typeof effect4 === "function") {
            var cleanupFn = effect4({
              state,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn2) {
          return fn2();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var createPopper = /* @__PURE__ */ popperGenerator();

  // node_modules/@popperjs/core/lib/popper-lite.js
  var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
  var createPopper2 = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });

  // node_modules/@popperjs/core/lib/popper.js
  var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
  var createPopper3 = /* @__PURE__ */ popperGenerator({
    defaultModifiers: defaultModifiers2
  });

  // node_modules/bootstrap/dist/js/bootstrap.esm.js
  var elementMap = /* @__PURE__ */ new Map();
  var Data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  var MAX_UID = 1e6;
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement2 = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement2(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement2(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn2) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn2);
      }
      return fn2.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn2) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn2);
          }
          return fn2.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn3) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn3.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn2 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn2.delegationSelector = isDelegated ? handler : null;
    fn2.callable = callable;
    fn2.oneOff = oneOff;
    fn2.uidEvent = uid;
    handlers[uid] = fn2;
    element.addEventListener(typeEvent, fn2, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn2 = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn2) {
      return;
    }
    element.removeEventListener(typeEvent, fn2, Boolean(delegationSelector));
    delete events[typeEvent][fn2.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement2(element) ? Manipulator.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement2(element) ? Manipulator.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement2(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  };
  var VERSION = "5.3.3";
  var BaseComponent = class extends Config {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return Data.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };
  var NAME$f = "alert";
  var DATA_KEY$a = "bs.alert";
  var EVENT_KEY$b = `.${DATA_KEY$a}`;
  var EVENT_CLOSE = `close${EVENT_KEY$b}`;
  var EVENT_CLOSED = `closed${EVENT_KEY$b}`;
  var CLASS_NAME_FADE$5 = "fade";
  var CLASS_NAME_SHOW$8 = "show";
  var Alert = class _Alert extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$f;
    }
    // Public
    close() {
      const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
      if (closeEvent.defaultPrevented) {
        return;
      }
      this._element.classList.remove(CLASS_NAME_SHOW$8);
      const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
      this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
    }
    // Private
    _destroyElement() {
      this._element.remove();
      EventHandler.trigger(this._element, EVENT_CLOSED);
      this.dispose();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Alert.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  enableDismissTrigger(Alert, "close");
  defineJQueryPlugin(Alert);
  var NAME$e = "button";
  var DATA_KEY$9 = "bs.button";
  var EVENT_KEY$a = `.${DATA_KEY$9}`;
  var DATA_API_KEY$6 = ".data-api";
  var CLASS_NAME_ACTIVE$3 = "active";
  var SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
  var Button = class _Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME$e;
    }
    // Public
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Button.getOrCreateInstance(this);
        if (config === "toggle") {
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  defineJQueryPlugin(Button);
  var NAME$d = "swipe";
  var EVENT_KEY$9 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends Config {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default$c;
    }
    static get DefaultType() {
      return DefaultType$c;
    }
    static get NAME() {
      return NAME$d;
    }
    // Public
    dispose() {
      EventHandler.off(this._element, EVENT_KEY$9);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var NAME$c = "carousel";
  var DATA_KEY$8 = "bs.carousel";
  var EVENT_KEY$8 = `.${DATA_KEY$8}`;
  var DATA_API_KEY$5 = ".data-api";
  var ARROW_LEFT_KEY$1 = "ArrowLeft";
  var ARROW_RIGHT_KEY$1 = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY$8}`;
  var EVENT_SLID = `slid${EVENT_KEY$8}`;
  var EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
  var EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
  var EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
  var EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE$2 = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
  };
  var Default$b = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default$b;
    }
    static get DefaultType() {
      return DefaultType$b;
    }
    static get NAME() {
      return NAME$c;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order2, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
        EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
      }
      if (this._config.touch && Swipe.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
        EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order2, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order2 === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return EventHandler.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order2),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return SelectorEngine.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order2) {
      if (isRTL()) {
        return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
    const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var NAME$b = "collapse";
  var DATA_KEY$7 = "bs.collapse";
  var EVENT_KEY$7 = `.${DATA_KEY$7}`;
  var DATA_API_KEY$4 = ".data-api";
  var EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
  var EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
  var EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
  var EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
  var EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
  var CLASS_NAME_SHOW$7 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
  var Default$a = {
    parent: null,
    toggle: true
  };
  var DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
      for (const elem of toggleList) {
        const selector = SelectorEngine.getSelectorFromElement(elem);
        const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default$a;
    }
    static get DefaultType() {
      return DefaultType$a;
    }
    static get NAME() {
      return NAME$b;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, {
          toggle: false
        }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
        this._element.style[dimension] = "";
        EventHandler.trigger(this._element, EVENT_SHOWN$6);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      for (const trigger of this._triggerArray) {
        const element = SelectorEngine.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        EventHandler.trigger(this._element, EVENT_HIDDEN$6);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW$7);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
      for (const element of children) {
        const selected = SelectorEngine.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, {
        toggle: false
      }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);
  var NAME$a = "dropdown";
  var DATA_KEY$6 = "bs.dropdown";
  var EVENT_KEY$6 = `.${DATA_KEY$6}`;
  var DATA_API_KEY$3 = ".data-api";
  var ESCAPE_KEY$2 = "Escape";
  var TAB_KEY$1 = "Tab";
  var ARROW_UP_KEY$1 = "ArrowUp";
  var ARROW_DOWN_KEY$1 = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
  var EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
  var EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
  var EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
  var EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
  var CLASS_NAME_SHOW$6 = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default$9;
    }
    static get DefaultType() {
      return DefaultType$9;
    }
    static get NAME() {
      return NAME$a;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW$6);
      this._element.classList.add(CLASS_NAME_SHOW$6);
      EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW$6);
      this._element.classList.remove(CLASS_NAME_SHOW$6);
      this._element.setAttribute("aria-expanded", "false");
      Manipulator.removeDataAttribute(this._menu, "popper");
      EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement2(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement2(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = createPopper3(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      if (this._inNavbar || this._config.display === "static") {
        Manipulator.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({
      key,
      target
    }) {
      const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
        return;
      }
      const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = {
          relatedTarget: context._element
        };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY$2;
      const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);
  var NAME$9 = "backdrop";
  var CLASS_NAME_FADE$4 = "fade";
  var CLASS_NAME_SHOW$5 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
  var Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default$8;
    }
    static get DefaultType() {
      return DefaultType$8;
    }
    static get NAME() {
      return NAME$9;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW$5);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE$4);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var NAME$8 = "focustrap";
  var DATA_KEY$5 = "bs.focustrap";
  var EVENT_KEY$5 = `.${DATA_KEY$5}`;
  var EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
  var TAB_KEY = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default$7 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default$7;
    }
    static get DefaultType() {
      return DefaultType$7;
    }
    static get NAME() {
      return NAME$8;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY$5);
      EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY$5);
    }
    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement2(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var NAME$7 = "modal";
  var DATA_KEY$4 = "bs.modal";
  var EVENT_KEY$4 = `.${DATA_KEY$4}`;
  var DATA_API_KEY$2 = ".data-api";
  var ESCAPE_KEY$1 = "Escape";
  var EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
  var EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
  var EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
  var EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
  var EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
  var EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
  var EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
  var EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
  var EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
  var EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
  var CLASS_NAME_OPEN = "modal-open";
  var CLASS_NAME_FADE$3 = "fade";
  var CLASS_NAME_SHOW$4 = "show";
  var CLASS_NAME_STATIC = "modal-static";
  var OPEN_SELECTOR$1 = ".modal.show";
  var SELECTOR_DIALOG = ".modal-dialog";
  var SELECTOR_MODAL_BODY = ".modal-body";
  var SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
  var Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  var DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  var Modal = class _Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$6;
    }
    static get DefaultType() {
      return DefaultType$6;
    }
    static get NAME() {
      return NAME$7;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW$4);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY$4);
      EventHandler.off(this._dialog, EVENT_KEY$4);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW$4);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN$4, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
        if (event.key !== ESCAPE_KEY$1) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE$1, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN$4);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = "hidden";
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }
    /**
     * The following methods are used to handle overflowing modals
     */
    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = isRTL() ? "paddingLeft" : "paddingRight";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = isRTL() ? "paddingRight" : "paddingLeft";
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    }
    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function() {
        const data = _Modal.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
      if (showEvent.defaultPrevented) {
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN$4, () => {
        if (isVisible(this)) {
          this.focus();
        }
      });
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  enableDismissTrigger(Modal);
  defineJQueryPlugin(Modal);
  var NAME$6 = "offcanvas";
  var DATA_KEY$3 = "bs.offcanvas";
  var EVENT_KEY$3 = `.${DATA_KEY$3}`;
  var DATA_API_KEY$1 = ".data-api";
  var EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var ESCAPE_KEY = "Escape";
  var CLASS_NAME_SHOW$3 = "show";
  var CLASS_NAME_SHOWING$1 = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
  var EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
  var EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
  var EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY$3}`;
  var EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
  var SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
  var Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default$5;
    }
    static get DefaultType() {
      return DefaultType$5;
    }
    static get NAME() {
      return NAME$6;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING$1);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW$3);
        this._element.classList.remove(CLASS_NAME_SHOWING$1);
        EventHandler.trigger(this._element, EVENT_SHOWN$3, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN$3);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$3, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  var allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }
  var NAME$5 = "TemplateFactory";
  var Default$4 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  var DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  var DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  var TemplateFactory = class extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default$4;
    }
    static get DefaultType() {
      return DefaultType$4;
    }
    static get NAME() {
      return NAME$5;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = {
        ...this._config.content,
        ...content
      };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({
          selector,
          entry: content
        }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = SelectorEngine.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement2(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  };
  var NAME$4 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var CLASS_NAME_FADE$2 = "fade";
  var CLASS_NAME_MODAL = "modal";
  var CLASS_NAME_SHOW$2 = "show";
  var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  var EVENT_MODAL_HIDE = "hide.bs.modal";
  var TRIGGER_HOVER = "hover";
  var TRIGGER_FOCUS = "focus";
  var TRIGGER_CLICK = "click";
  var TRIGGER_MANUAL = "manual";
  var EVENT_HIDE$2 = "hide";
  var EVENT_HIDDEN$2 = "hidden";
  var EVENT_SHOW$2 = "show";
  var EVENT_SHOWN$2 = "shown";
  var EVENT_INSERTED = "inserted";
  var EVENT_CLICK$1 = "click";
  var EVENT_FOCUSIN$1 = "focusin";
  var EVENT_FOCUSOUT$1 = "focusout";
  var EVENT_MOUSEENTER = "mouseenter";
  var EVENT_MOUSELEAVE = "mouseleave";
  var AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  var Default$3 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  var DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  var Tooltip = class _Tooltip extends BaseComponent {
    constructor(element, config) {
      if (typeof lib_exports === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default$3;
    }
    static get DefaultType() {
      return DefaultType$3;
    }
    static get NAME() {
      return NAME$4;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const {
        container
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW$2);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          EventHandler.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE$2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new TemplateFactory({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return createPopper3(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const {
        offset: offset2
      } = this._config;
      if (typeof offset2 === "string") {
        return offset2.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset2 === "function") {
        return (popperData) => offset2(popperData, this._element);
      }
      return offset2;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: true,
          phase: "beforeMain",
          fn: (data) => {
            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
          }
        }]
      };
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
          EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = Manipulator.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...typeof config === "object" && config ? config : {}
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var NAME$3 = "popover";
  var SELECTOR_TITLE = ".popover-header";
  var SELECTOR_CONTENT = ".popover-body";
  var Default$2 = {
    ...Tooltip.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
  };
  var DefaultType$2 = {
    ...Tooltip.DefaultType,
    content: "(null|string|element|function)"
  };
  var Popover = class _Popover extends Tooltip {
    // Getters
    static get Default() {
      return Default$2;
    }
    static get DefaultType() {
      return DefaultType$2;
    }
    static get NAME() {
      return NAME$3;
    }
    // Overrides
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    // Private
    _getContentForTemplate() {
      return {
        [SELECTOR_TITLE]: this._getTitle(),
        [SELECTOR_CONTENT]: this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Popover.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Popover);
  var NAME$2 = "scrollspy";
  var DATA_KEY$2 = "bs.scrollspy";
  var EVENT_KEY$2 = `.${DATA_KEY$2}`;
  var DATA_API_KEY = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
  var EVENT_CLICK = `click${EVENT_KEY$2}`;
  var EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE$1 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
  var Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default$1;
    }
    static get DefaultType() {
      return DefaultType$1;
    }
    static get NAME() {
      return NAME$2;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      EventHandler.off(this._config.target, EVENT_CLICK);
      EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({
              top: height,
              behavior: "smooth"
            });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE$1);
      this._activateParents(target);
      EventHandler.trigger(this._element, EVENT_ACTIVATE, {
        relatedTarget: target
      });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
        return;
      }
      for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE$1);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE$1);
      const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE$1);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
    for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);
  var NAME$1 = "tab";
  var DATA_KEY$1 = "bs.tab";
  var EVENT_KEY$1 = `.${DATA_KEY$1}`;
  var EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
  var EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
  var EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
  var EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_FADE$1 = "fade";
  var CLASS_NAME_SHOW$1 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends BaseComponent {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME$1;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
        relatedTarget: innerElem
      }) : null;
      const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
        relatedTarget: active
      });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE);
      this._activate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW$1);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        EventHandler.trigger(element, EVENT_SHOWN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE);
      element.blur();
      this._deactivate(SelectorEngine.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW$1);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        EventHandler.trigger(element, EVENT_HIDDEN$1, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({
          preventScroll: true
        });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = SelectorEngine.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = SelectorEngine.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);
  var NAME = "toast";
  var DATA_KEY = "bs.toast";
  var EVENT_KEY = `.${DATA_KEY}`;
  var EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
  var EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  var EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_HIDE = "hide";
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_SHOWING = "showing";
  var DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  };
  var Default = {
    animation: true,
    autohide: true,
    delay: 5e3
  };
  var Toast = class _Toast extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    show() {
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._clearTimeout();
      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE);
      }
      const complete = () => {
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN);
        this._maybeScheduleHide();
      };
      this._element.classList.remove(CLASS_NAME_HIDE);
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
      if (!this.isShown()) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const complete = () => {
        this._element.classList.add(CLASS_NAME_HIDE);
        this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._element.classList.add(CLASS_NAME_SHOWING);
      this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(CLASS_NAME_SHOW);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(CLASS_NAME_SHOW);
    }
    // Private
    _maybeScheduleHide() {
      if (!this._config.autohide) {
        return;
      }
      if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
        return;
      }
      this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
      switch (event.type) {
        case "mouseover":
        case "mouseout": {
          this._hasMouseInteraction = isInteracting;
          break;
        }
        case "focusin":
        case "focusout": {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
      }
      if (isInteracting) {
        this._clearTimeout();
        return;
      }
      const nextElement = event.relatedTarget;
      if (this._element === nextElement || this._element.contains(nextElement)) {
        return;
      }
      this._maybeScheduleHide();
    }
    _setListeners() {
      EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
      EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
      EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Toast.getOrCreateInstance(this, config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config](this);
        }
      });
    }
  };
  enableDismissTrigger(Toast);
  defineJQueryPlugin(Toast);

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn2, thisArg) {
    return function wrap() {
      return fn2.apply(thisArg, arguments);
    };
  }

  // node_modules/axios/lib/utils.js
  var { toString } = Object.prototype;
  var { getPrototypeOf } = Object;
  var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type) => {
    type = type.toLowerCase();
    return (thing) => kindOf(thing) === type;
  };
  var typeOfTest = (type) => (thing) => typeof thing === type;
  var { isArray } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString = typeOfTest("string");
  var isFunction = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject = (thing) => thing !== null && typeof thing === "object";
  var isBoolean = (thing) => thing === true || thing === false;
  var isPlainObject = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject(val) && isFunction(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn2, { allOwnKeys = false } = {}) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i;
    let l;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (i = 0, l = obj.length; i < l; i++) {
        fn2.call(null, obj[i], i, obj);
      }
    } else {
      const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys.length;
      let key;
      for (i = 0; i < len; i++) {
        key = keys[i];
        fn2.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while (i-- > 0) {
      _key = keys[i];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global2 = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global2;
  function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i = 0, l = arguments.length; i < l; i++) {
      arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
  }
  var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
    forEach(b, (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    }, { allOwnKeys });
    return a;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing)
      return null;
    if (isArray(thing))
      return thing;
    let i = thing.length;
    if (!isNumber(i))
      return null;
    const arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  };
  var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn2) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn2.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(
      /[-_\s]([a-z\d])(\w*)/g,
      function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
      }
    );
  };
  var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name) => {
      let ret;
      if ((ret = reducer(descriptor, name, obj)) !== false) {
        reducedDescriptors[name] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name) => {
      if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
        return false;
      }
      const value = obj[name];
      if (!isFunction(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop2 = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  var ALPHA = "abcdefghijklmnopqrstuvwxyz";
  var DIGIT = "0123456789";
  var ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
    let str = "";
    const { length } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i) => {
      if (isObject(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i] = source;
          const target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
  var utils_default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop: noop2,
    toFiniteNumber,
    findKey,
    global: _global2,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = { value: code };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", { value: true });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop) => {
      return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/axios/lib/helpers/null.js
  var null_default = null;

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i) {
      token = removeBrackets(token);
      return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
  });
  function toFormData(obj, formData, options) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options = utils_default.toFlatObject(options, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
          formData,
          el,
          utils_default.isString(key) ? key.trim() : key,
          path,
          exposedHelpers
        );
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && toFormData_default(params, this, options);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name, value) {
    this._pairs.push([name, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options) {
    if (!params) {
      return url;
    }
    const _encode = options && options.encode || encode2;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn2) {
      utils_default.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn2(h);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // node_modules/axios/lib/platform/browser/index.js
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv
  });
  var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  var hasStandardBrowserEnv = ((product) => {
    return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
  })(typeof navigator !== "undefined" && navigator.product);
  var hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();

  // node_modules/axios/lib/platform/index.js
  var platform_default = {
    ...utils_exports,
    ...browser_default
  };

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options));
  }

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name = path[index++];
      if (name === "__proto__")
        return true;
      const isNumericKey = Number.isFinite(+name);
      const isLast = index >= path.length;
      name = !name && utils_default.isArray(target) ? target.length : name;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name)) {
          target[name] = [target[name], value];
        } else {
          target[name] = value;
        }
        return !isNumericKey;
      }
      if (!target[name] || !utils_default.isObject(target[name])) {
        target[name] = [];
      }
      const result = buildPath(path, value, target[name], index);
      if (result && utils_default.isArray(target[name])) {
        target[name] = arrayToObject(target[name]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name, value) => {
        buildPath(parsePropPath(name), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform_default.classes.FormData,
      Blob: platform_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i = line.indexOf(":");
      key = line.substring(0, i).trim().toLowerCase();
      val = line.substring(i + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value))
      return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys = Object.keys(this);
      let i = keys.length;
      let deleted = false;
      while (i--) {
        const key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat(...targets) {
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
      const computed = new this(first);
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform(fn2) {
      data = fn2.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default(
        "Request failed with status code " + response.status,
        [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  }

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name, value, expires, path, domain, secure) {
        const cookie = [name + "=" + encodeURIComponent(value)];
        utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils_default.isString(path) && cookie.push("path=" + path);
        utils_default.isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
      },
      read(name) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove(name) {
        this.write(name, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }()
  );

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min2) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min2 = min2 !== void 0 ? min2 : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i = tail;
      let bytesCount = 0;
      while (i !== head) {
        bytesCount += bytes[i++];
        i = i % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min2) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/axios/lib/adapters/xhr.js
  function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener(data);
    };
  }
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
      let { responseType, withXSRFToken } = config;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      let contentType;
      if (utils_default.isFormData(requestData)) {
        if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false);
        } else if ((contentType = requestHeaders.getContentType()) !== false) {
          const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
          requestHeaders.setContentType([type || "multipart/form-data", ...tokens].join("; "));
        }
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from(
          "getAllResponseHeaders" in request && request.getAllResponseHeaders()
        );
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = config.transitional || transitional_default;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          request
        ));
        request = null;
      };
      if (platform_default.hasStandardBrowserEnv) {
        withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
        if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(fullPath)) {
          const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
          if (xsrfValue) {
            requestHeaders.set(config.xsrfHeaderName, xsrfValue);
          }
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default
  };
  utils_default.forEach(knownAdapters, (fn2, value) => {
    if (fn2) {
      try {
        Object.defineProperty(fn2, "name", { value });
      } catch (e) {
      }
      Object.defineProperty(fn2, "adapterName", { value });
    }
  });
  var renderReason = (reason) => `- ${reason}`;
  var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
  var adapters_default = {
    getAdapter: (adapters) => {
      adapters = utils_default.isArray(adapters) ? adapters : [adapters];
      const { length } = adapters;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i = 0; i < length; i++) {
        nameOrAdapter = adapters[i];
        let id;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError_default(`Unknown adapter '${id}'`);
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id || "#" + i] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map(
          ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
        );
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError_default(
          `There is no suitable adapter to dispatch the request ` + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(
      config,
      config.transformRequest
    );
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(
        config,
        config.transformResponse,
        response
      );
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            config.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/axios/lib/core/mergeConfig.js
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({ caseless }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a, b, caseless) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(a, b, caseless);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a, caseless);
      }
    }
    function valueFromConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      }
    }
    function defaultToConfig2(a, b) {
      if (!utils_default.isUndefined(b)) {
        return getMergedValue(void 0, b);
      } else if (!utils_default.isUndefined(a)) {
        return getMergedValue(void 0, a);
      }
    }
    function mergeDirectKeys(a, b, prop) {
      if (prop in config2) {
        return getMergedValue(a, b);
      } else if (prop in config1) {
        return getMergedValue(void 0, a);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
      const merge2 = mergeMap[prop] || mergeDeepProperties;
      const configValue = merge2(config1[prop], config2[prop], prop);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  }

  // node_modules/axios/lib/env/data.js
  var VERSION2 = "1.6.8";

  // node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
    validators[type] = function validator(thing) {
      return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION2 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(
          formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
          AxiosError_default.ERR_DEPRECATED
        );
      }
      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(
          formatMessage(
            opt,
            " has been deprecated since v" + version + " and will be removed in the near future"
          )
        );
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while (i-- > 0) {
      const opt = keys[i];
      const validator = schema[opt];
      if (validator) {
        const value = options[opt];
        const result = value === void 0 || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    async request(configOrUrl, config) {
      try {
        return await this._request(configOrUrl, config);
      } catch (err) {
        if (err instanceof Error) {
          let dummy;
          Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
          const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack;
          }
        }
        throw err;
      }
    }
    _request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const { transitional: transitional2, paramsSerializer, headers } = config;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(
        headers.common,
        headers[config.method]
      );
      headers && utils_default.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (method) => {
          delete headers[method];
        }
      );
      config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i = 0;
      while (i < len) {
        const onFulfilled = requestInterceptorChain[i++];
        const onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i = token._listeners.length;
        while (i-- > 0) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  }

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach(([key, value]) => {
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
    utils_default.extend(instance, context, null, { allOwnKeys: true });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION2;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION3,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter,
    mergeConfig: mergeConfig2
  } = axios_default;

  // public/js/alert.js
  var hideAlert = () => {
    const el = document.querySelector(".alert");
    if (el)
      el.parentElement.removeChild(el);
  };
  var showAlert2 = (type, msg) => {
    hideAlert();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout(hideAlert, 5e3);
  };

  // public/js/login.js
  var login = async (email, password) => {
    try {
      const res = await axios_default({
        method: "POST",
        url: "/api/v1/users/login",
        data: {
          email,
          password
        }
      });
      if (res.data.status === "success") {
        showAlert2("success", "Logged in successfully");
        window.setTimeout(() => {
          location.assign("/");
        }, 500);
      }
    } catch (err) {
      showAlert2("error", err.response.data.message);
    }
  };
  var logout = async () => {
    try {
      const res = await axios_default({
        method: "GET",
        url: "/api/v1/users/logout"
      });
      if (res.data.status = "success")
        location.reload(true);
    } catch (err) {
      console.log(err);
      showAlert2("error", "Error logging out! Try again");
    }
  };

  // public/js/updateSettings.js
  var updateSettings = async (data, type) => {
    try {
      const url = type === "password" ? "/api/v1/users/updateMyPassword" : "/api/v1/users/updateMe";
      const res = await axios_default({
        method: "PATCH",
        url,
        data
      });
      if (res.data.status === "success") {
        showAlert2("success", `${type.toUpperCase()} updated successfully`);
      }
    } catch (err) {
      showAlert2("error", err.response.data.message);
    }
  };

  // node_modules/stripe/esm/net/HttpClient.js
  var HttpClient = class _HttpClient {
    /** The client name used for diagnostics. */
    getClientName() {
      throw new Error("getClientName not implemented.");
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
      throw new Error("makeRequest not implemented.");
    }
    /** Helper to make a consistent timeout error across implementations. */
    static makeTimeoutError() {
      const timeoutErr = new TypeError(_HttpClient.TIMEOUT_ERROR_CODE);
      timeoutErr.code = _HttpClient.TIMEOUT_ERROR_CODE;
      return timeoutErr;
    }
  };
  HttpClient.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"];
  HttpClient.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
  var HttpClientResponse = class {
    constructor(statusCode, headers) {
      this._statusCode = statusCode;
      this._headers = headers;
    }
    getStatusCode() {
      return this._statusCode;
    }
    getHeaders() {
      return this._headers;
    }
    getRawResponse() {
      throw new Error("getRawResponse not implemented.");
    }
    toStream(streamCompleteCallback) {
      throw new Error("toStream not implemented.");
    }
    toJSON() {
      throw new Error("toJSON not implemented.");
    }
  };

  // node_modules/stripe/esm/net/FetchHttpClient.js
  var FetchHttpClient = class extends HttpClient {
    constructor(fetchFn) {
      super();
      this._fetchFn = fetchFn;
    }
    /** @override. */
    getClientName() {
      return "fetch";
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
      const isInsecureConnection = protocol === "http";
      const url = new URL(path, `${isInsecureConnection ? "http" : "https"}://${host}`);
      url.port = port;
      const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
      const body = requestData || (methodHasPayload ? "" : void 0);
      const fetchFn = this._fetchFn || fetch;
      const fetchPromise = fetchFn(url.toString(), {
        method,
        // @ts-ignore
        headers,
        // @ts-ignore
        body
      });
      let pendingTimeoutId;
      const timeoutPromise = new Promise((_, reject) => {
        pendingTimeoutId = setTimeout(() => {
          pendingTimeoutId = null;
          reject(HttpClient.makeTimeoutError());
        }, timeout);
      });
      return Promise.race([fetchPromise, timeoutPromise]).then((res) => {
        return new FetchHttpClientResponse(res);
      }).finally(() => {
        if (pendingTimeoutId) {
          clearTimeout(pendingTimeoutId);
        }
      });
    }
  };
  var FetchHttpClientResponse = class _FetchHttpClientResponse extends HttpClientResponse {
    constructor(res) {
      super(res.status, _FetchHttpClientResponse._transformHeadersToObject(res.headers));
      this._res = res;
    }
    getRawResponse() {
      return this._res;
    }
    toStream(streamCompleteCallback) {
      streamCompleteCallback();
      return this._res.body;
    }
    toJSON() {
      return this._res.json();
    }
    static _transformHeadersToObject(headers) {
      const headersObj = {};
      for (const entry of headers) {
        if (!Array.isArray(entry) || entry.length != 2) {
          throw new Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");
        }
        headersObj[entry[0]] = entry[1];
      }
      return headersObj;
    }
  };

  // node_modules/stripe/esm/crypto/CryptoProvider.js
  var CryptoProvider = class {
    /**
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */
    computeHMACSignature(payload, secret) {
      throw new Error("computeHMACSignature not implemented.");
    }
    /**
     * Asynchronous version of `computeHMACSignature`. Some implementations may
     * only allow support async signature computation.
     *
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */
    computeHMACSignatureAsync(payload, secret) {
      throw new Error("computeHMACSignatureAsync not implemented.");
    }
  };
  var CryptoProviderOnlySupportsAsyncError = class extends Error {
  };

  // node_modules/stripe/esm/crypto/SubtleCryptoProvider.js
  var SubtleCryptoProvider = class extends CryptoProvider {
    constructor(subtleCrypto) {
      super();
      this.subtleCrypto = subtleCrypto || crypto.subtle;
    }
    /** @override */
    computeHMACSignature(payload, secret) {
      throw new CryptoProviderOnlySupportsAsyncError("SubtleCryptoProvider cannot be used in a synchronous context.");
    }
    /** @override */
    async computeHMACSignatureAsync(payload, secret) {
      const encoder = new TextEncoder();
      const key = await this.subtleCrypto.importKey("raw", encoder.encode(secret), {
        name: "HMAC",
        hash: { name: "SHA-256" }
      }, false, ["sign"]);
      const signatureBuffer = await this.subtleCrypto.sign("hmac", key, encoder.encode(payload));
      const signatureBytes = new Uint8Array(signatureBuffer);
      const signatureHexCodes = new Array(signatureBytes.length);
      for (let i = 0; i < signatureBytes.length; i++) {
        signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
      }
      return signatureHexCodes.join("");
    }
  };
  var byteHexMapping = new Array(256);
  for (let i = 0; i < byteHexMapping.length; i++) {
    byteHexMapping[i] = i.toString(16).padStart(2, "0");
  }

  // node_modules/stripe/esm/platform/PlatformFunctions.js
  var PlatformFunctions = class {
    constructor() {
      this._fetchFn = null;
      this._agent = null;
    }
    /**
     * Gets uname with Node's built-in `exec` function, if available.
     */
    getUname() {
      throw new Error("getUname not implemented.");
    }
    /**
     * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
     */
    uuid4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    }
    /**
     * Compares strings in constant time.
     */
    secureCompare(a, b) {
      if (a.length !== b.length) {
        return false;
      }
      const len = a.length;
      let result = 0;
      for (let i = 0; i < len; ++i) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
      }
      return result === 0;
    }
    /**
     * Creates an event emitter.
     */
    createEmitter() {
      throw new Error("createEmitter not implemented.");
    }
    /**
     * Checks if the request data is a stream. If so, read the entire stream
     * to a buffer and return the buffer.
     */
    tryBufferData(data) {
      throw new Error("tryBufferData not implemented.");
    }
    /**
     * Creates an HTTP client which uses the Node `http` and `https` packages
     * to issue requests.
     */
    createNodeHttpClient(agent) {
      throw new Error("createNodeHttpClient not implemented.");
    }
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */
    createFetchHttpClient(fetchFn) {
      return new FetchHttpClient(fetchFn);
    }
    /**
     * Creates an HTTP client using runtime-specific APIs.
     */
    createDefaultHttpClient() {
      throw new Error("createDefaultHttpClient not implemented.");
    }
    /**
     * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
     */
    createNodeCryptoProvider() {
      throw new Error("createNodeCryptoProvider not implemented.");
    }
    /**
     * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
     */
    createSubtleCryptoProvider(subtleCrypto) {
      return new SubtleCryptoProvider(subtleCrypto);
    }
    createDefaultCryptoProvider() {
      throw new Error("createDefaultCryptoProvider not implemented.");
    }
  };

  // node_modules/stripe/esm/StripeEmitter.js
  var _StripeEvent = class extends Event {
    constructor(eventName, data) {
      super(eventName);
      this.data = data;
    }
  };
  var StripeEmitter = class {
    constructor() {
      this.eventTarget = new EventTarget();
      this.listenerMapping = /* @__PURE__ */ new Map();
    }
    on(eventName, listener) {
      const listenerWrapper = (event) => {
        listener(event.data);
      };
      this.listenerMapping.set(listener, listenerWrapper);
      return this.eventTarget.addEventListener(eventName, listenerWrapper);
    }
    removeListener(eventName, listener) {
      const listenerWrapper = this.listenerMapping.get(listener);
      this.listenerMapping.delete(listener);
      return this.eventTarget.removeEventListener(eventName, listenerWrapper);
    }
    once(eventName, listener) {
      const listenerWrapper = (event) => {
        listener(event.data);
      };
      this.listenerMapping.set(listener, listenerWrapper);
      return this.eventTarget.addEventListener(eventName, listenerWrapper, {
        once: true
      });
    }
    emit(eventName, data) {
      return this.eventTarget.dispatchEvent(new _StripeEvent(eventName, data));
    }
  };

  // node_modules/stripe/esm/platform/WebPlatformFunctions.js
  var WebPlatformFunctions = class extends PlatformFunctions {
    /** @override */
    getUname() {
      return Promise.resolve(null);
    }
    /** @override */
    createEmitter() {
      return new StripeEmitter();
    }
    /** @override */
    tryBufferData(data) {
      if (data.file.data instanceof ReadableStream) {
        throw new Error("Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.");
      }
      return Promise.resolve(data);
    }
    /** @override */
    createNodeHttpClient() {
      throw new Error("Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.");
    }
    /** @override */
    createDefaultHttpClient() {
      return super.createFetchHttpClient();
    }
    /** @override */
    createNodeCryptoProvider() {
      throw new Error("Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.");
    }
    /** @override */
    createDefaultCryptoProvider() {
      return this.createSubtleCryptoProvider();
    }
  };

  // node_modules/stripe/esm/Error.js
  var Error_exports = {};
  __export(Error_exports, {
    StripeAPIError: () => StripeAPIError,
    StripeAuthenticationError: () => StripeAuthenticationError,
    StripeCardError: () => StripeCardError,
    StripeConnectionError: () => StripeConnectionError,
    StripeError: () => StripeError,
    StripeIdempotencyError: () => StripeIdempotencyError,
    StripeInvalidGrantError: () => StripeInvalidGrantError,
    StripeInvalidRequestError: () => StripeInvalidRequestError,
    StripePermissionError: () => StripePermissionError,
    StripeRateLimitError: () => StripeRateLimitError,
    StripeSignatureVerificationError: () => StripeSignatureVerificationError,
    StripeUnknownError: () => StripeUnknownError,
    generate: () => generate
  });
  var generate = (rawStripeError) => {
    switch (rawStripeError.type) {
      case "card_error":
        return new StripeCardError(rawStripeError);
      case "invalid_request_error":
        return new StripeInvalidRequestError(rawStripeError);
      case "api_error":
        return new StripeAPIError(rawStripeError);
      case "authentication_error":
        return new StripeAuthenticationError(rawStripeError);
      case "rate_limit_error":
        return new StripeRateLimitError(rawStripeError);
      case "idempotency_error":
        return new StripeIdempotencyError(rawStripeError);
      case "invalid_grant":
        return new StripeInvalidGrantError(rawStripeError);
      default:
        return new StripeUnknownError(rawStripeError);
    }
  };
  var StripeError = class extends Error {
    constructor(raw = {}) {
      super(raw.message);
      this.type = this.constructor.name;
      this.raw = raw;
      this.rawType = raw.type;
      this.code = raw.code;
      this.doc_url = raw.doc_url;
      this.param = raw.param;
      this.detail = raw.detail;
      this.headers = raw.headers;
      this.requestId = raw.requestId;
      this.statusCode = raw.statusCode;
      this.message = raw.message;
      this.charge = raw.charge;
      this.decline_code = raw.decline_code;
      this.payment_intent = raw.payment_intent;
      this.payment_method = raw.payment_method;
      this.payment_method_type = raw.payment_method_type;
      this.setup_intent = raw.setup_intent;
      this.source = raw.source;
    }
  };
  StripeError.generate = generate;
  var StripeCardError = class extends StripeError {
  };
  var StripeInvalidRequestError = class extends StripeError {
  };
  var StripeAPIError = class extends StripeError {
  };
  var StripeAuthenticationError = class extends StripeError {
  };
  var StripePermissionError = class extends StripeError {
  };
  var StripeRateLimitError = class extends StripeError {
  };
  var StripeConnectionError = class extends StripeError {
  };
  var StripeSignatureVerificationError = class extends StripeError {
    constructor(header, payload, raw = {}) {
      super(raw);
      this.header = header;
      this.payload = payload;
    }
  };
  var StripeIdempotencyError = class extends StripeError {
  };
  var StripeInvalidGrantError = class extends StripeError {
  };
  var StripeUnknownError = class extends StripeError {
  };

  // node_modules/stripe/esm/apiVersion.js
  var ApiVersion = "2022-11-15";

  // node_modules/stripe/esm/resources.js
  var resources_exports = {};
  __export(resources_exports, {
    Account: () => Accounts2,
    AccountLinks: () => AccountLinks,
    Accounts: () => Accounts2,
    ApplePayDomains: () => ApplePayDomains,
    ApplicationFees: () => ApplicationFees,
    Apps: () => Apps,
    Balance: () => Balance,
    BalanceTransactions: () => BalanceTransactions,
    BillingPortal: () => BillingPortal,
    Charges: () => Charges,
    Checkout: () => Checkout,
    CountrySpecs: () => CountrySpecs,
    Coupons: () => Coupons,
    CreditNotes: () => CreditNotes,
    Customers: () => Customers2,
    Disputes: () => Disputes2,
    EphemeralKeys: () => EphemeralKeys,
    Events: () => Events,
    ExchangeRates: () => ExchangeRates,
    FileLinks: () => FileLinks,
    Files: () => Files,
    FinancialConnections: () => FinancialConnections,
    Identity: () => Identity,
    InvoiceItems: () => InvoiceItems,
    Invoices: () => Invoices,
    Issuing: () => Issuing,
    Mandates: () => Mandates,
    OAuth: () => OAuth,
    PaymentIntents: () => PaymentIntents,
    PaymentLinks: () => PaymentLinks,
    PaymentMethods: () => PaymentMethods,
    Payouts: () => Payouts,
    Plans: () => Plans,
    Prices: () => Prices,
    Products: () => Products,
    PromotionCodes: () => PromotionCodes,
    Quotes: () => Quotes,
    Radar: () => Radar,
    Refunds: () => Refunds2,
    Reporting: () => Reporting,
    Reviews: () => Reviews,
    SetupAttempts: () => SetupAttempts,
    SetupIntents: () => SetupIntents,
    ShippingRates: () => ShippingRates,
    Sigma: () => Sigma,
    Sources: () => Sources,
    SubscriptionItems: () => SubscriptionItems,
    SubscriptionSchedules: () => SubscriptionSchedules,
    Subscriptions: () => Subscriptions,
    Tax: () => Tax,
    TaxCodes: () => TaxCodes,
    TaxRates: () => TaxRates,
    Terminal: () => Terminal,
    TestHelpers: () => TestHelpers,
    Tokens: () => Tokens,
    Topups: () => Topups,
    Transfers: () => Transfers,
    Treasury: () => Treasury,
    WebhookEndpoints: () => WebhookEndpoints
  });

  // node_modules/stripe/esm/ResourceNamespace.js
  function ResourceNamespace(stripe, resources) {
    for (const name in resources) {
      const camelCaseName = name[0].toLowerCase() + name.substring(1);
      const resource = new resources[name](stripe);
      this[camelCaseName] = resource;
    }
  }
  function resourceNamespace(namespace, resources) {
    return function(stripe) {
      return new ResourceNamespace(stripe, resources);
    };
  }

  // node_modules/stripe/esm/utils.js
  var qs = __toESM(require_lib(), 1);
  var OPTIONS_KEYS = [
    "apiKey",
    "idempotencyKey",
    "stripeAccount",
    "apiVersion",
    "maxNetworkRetries",
    "timeout",
    "host"
  ];
  function isOptionsHash(o) {
    return o && typeof o === "object" && OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop));
  }
  function stringifyRequestData(data) {
    return qs.stringify(data, {
      serializeDate: (d) => Math.floor(d.getTime() / 1e3).toString()
    }).replace(/%5B/g, "[").replace(/%5D/g, "]");
  }
  var makeURLInterpolator = /* @__PURE__ */ (() => {
    const rc = {
      "\n": "\\n",
      '"': '\\"',
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    return (str) => {
      const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
      return (outputs) => {
        return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) => (
          // @ts-ignore
          encodeURIComponent(outputs[$1] || "")
        ));
      };
    };
  })();
  function extractUrlParams(path) {
    const params = path.match(/\{\w+\}/g);
    if (!params) {
      return [];
    }
    return params.map((param) => param.replace(/[{}]/g, ""));
  }
  function getDataFromArgs(args) {
    if (!Array.isArray(args) || !args[0] || typeof args[0] !== "object") {
      return {};
    }
    if (!isOptionsHash(args[0])) {
      return args.shift();
    }
    const argKeys = Object.keys(args[0]);
    const optionKeysInArgs = argKeys.filter((key) => OPTIONS_KEYS.includes(key));
    if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
      emitWarning(`Options found in arguments (${optionKeysInArgs.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`);
    }
    return {};
  }
  function getOptionsFromArgs(args) {
    const opts = {
      auth: null,
      host: null,
      headers: {},
      settings: {}
    };
    if (args.length > 0) {
      const arg = args[args.length - 1];
      if (typeof arg === "string") {
        opts.auth = args.pop();
      } else if (isOptionsHash(arg)) {
        const params = Object.assign({}, args.pop());
        const extraKeys = Object.keys(params).filter((key) => !OPTIONS_KEYS.includes(key));
        if (extraKeys.length) {
          emitWarning(`Invalid options found (${extraKeys.join(", ")}); ignoring.`);
        }
        if (params.apiKey) {
          opts.auth = params.apiKey;
        }
        if (params.idempotencyKey) {
          opts.headers["Idempotency-Key"] = params.idempotencyKey;
        }
        if (params.stripeAccount) {
          opts.headers["Stripe-Account"] = params.stripeAccount;
        }
        if (params.apiVersion) {
          opts.headers["Stripe-Version"] = params.apiVersion;
        }
        if (Number.isInteger(params.maxNetworkRetries)) {
          opts.settings.maxNetworkRetries = params.maxNetworkRetries;
        }
        if (Number.isInteger(params.timeout)) {
          opts.settings.timeout = params.timeout;
        }
        if (params.host) {
          opts.host = params.host;
        }
      }
    }
    return opts;
  }
  function protoExtend(sub) {
    const Super = this;
    const Constructor = Object.prototype.hasOwnProperty.call(sub, "constructor") ? sub.constructor : function(...args) {
      Super.apply(this, args);
    };
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);
    return Constructor;
  }
  function removeNullish(obj) {
    if (typeof obj !== "object") {
      throw new Error("Argument must be an object");
    }
    return Object.keys(obj).reduce((result, key) => {
      if (obj[key] != null) {
        result[key] = obj[key];
      }
      return result;
    }, {});
  }
  function normalizeHeaders(obj) {
    if (!(obj && typeof obj === "object")) {
      return obj;
    }
    return Object.keys(obj).reduce((result, header) => {
      result[normalizeHeader2(header)] = obj[header];
      return result;
    }, {});
  }
  function normalizeHeader2(header) {
    return header.split("-").map((text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()).join("-");
  }
  function callbackifyPromiseWithTimeout(promise, callback) {
    if (callback) {
      return promise.then((res) => {
        setTimeout(() => {
          callback(null, res);
        }, 0);
      }, (err) => {
        setTimeout(() => {
          callback(err, null);
        }, 0);
      });
    }
    return promise;
  }
  function pascalToCamelCase(name) {
    if (name === "OAuth") {
      return "oauth";
    } else {
      return name[0].toLowerCase() + name.substring(1);
    }
  }
  function emitWarning(warning) {
    if (typeof process.emitWarning !== "function") {
      return console.warn(`Stripe: ${warning}`);
    }
    return process.emitWarning(warning, "Stripe");
  }
  function isObject2(obj) {
    const type = typeof obj;
    return (type === "function" || type === "object") && !!obj;
  }
  function flattenAndStringify(data) {
    const result = {};
    const step = (obj, prevKey) => {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        const newKey = prevKey ? `${prevKey}[${key}]` : key;
        if (isObject2(value)) {
          if (!(value instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(value, "data")) {
            return step(value, newKey);
          } else {
            result[newKey] = value;
          }
        } else {
          result[newKey] = String(value);
        }
      });
    };
    step(data, null);
    return result;
  }
  function validateInteger(name, n, defaultVal) {
    if (!Number.isInteger(n)) {
      if (defaultVal !== void 0) {
        return defaultVal;
      } else {
        throw new Error(`${name} must be an integer`);
      }
    }
    return n;
  }
  function determineProcessUserAgentProperties() {
    return typeof process === "undefined" ? {} : {
      lang_version: process.version,
      platform: process.platform
    };
  }

  // node_modules/stripe/esm/autoPagination.js
  var StripeIterator = class {
    constructor(firstPagePromise, requestArgs, spec, stripeResource) {
      this.index = 0;
      this.pagePromise = firstPagePromise;
      this.promiseCache = { currentPromise: null };
      this.requestArgs = requestArgs;
      this.spec = spec;
      this.stripeResource = stripeResource;
    }
    async iterate(pageResult) {
      if (!(pageResult && pageResult.data && typeof pageResult.data.length === "number")) {
        throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
      }
      const reverseIteration = isReverseIteration(this.requestArgs);
      if (this.index < pageResult.data.length) {
        const idx = reverseIteration ? pageResult.data.length - 1 - this.index : this.index;
        const value = pageResult.data[idx];
        this.index += 1;
        return { value, done: false };
      } else if (pageResult.has_more) {
        this.index = 0;
        this.pagePromise = this.getNextPage(pageResult);
        const nextPageResult = await this.pagePromise;
        return this.iterate(nextPageResult);
      }
      return { done: true, value: void 0 };
    }
    /** @abstract */
    getNextPage(_pageResult) {
      throw new Error("Unimplemented");
    }
    async _next() {
      return this.iterate(await this.pagePromise);
    }
    next() {
      if (this.promiseCache.currentPromise) {
        return this.promiseCache.currentPromise;
      }
      const nextPromise = (async () => {
        const ret = await this._next();
        this.promiseCache.currentPromise = null;
        return ret;
      })();
      this.promiseCache.currentPromise = nextPromise;
      return nextPromise;
    }
  };
  var ListIterator = class extends StripeIterator {
    getNextPage(pageResult) {
      const reverseIteration = isReverseIteration(this.requestArgs);
      const lastId = getLastId(pageResult, reverseIteration);
      return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
        [reverseIteration ? "ending_before" : "starting_after"]: lastId
      });
    }
  };
  var SearchIterator = class extends StripeIterator {
    getNextPage(pageResult) {
      if (!pageResult.next_page) {
        throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
      }
      return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
        page: pageResult.next_page
      });
    }
  };
  var makeAutoPaginationMethods = (stripeResource, requestArgs, spec, firstPagePromise) => {
    if (spec.methodType === "search") {
      return makeAutoPaginationMethodsFromIterator(new SearchIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    if (spec.methodType === "list") {
      return makeAutoPaginationMethodsFromIterator(new ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    return null;
  };
  var makeAutoPaginationMethodsFromIterator = (iterator) => {
    const autoPagingEach = makeAutoPagingEach((...args) => iterator.next(...args));
    const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
    const autoPaginationMethods = {
      autoPagingEach,
      autoPagingToArray,
      // Async iterator functions:
      next: () => iterator.next(),
      return: () => {
        return {};
      },
      [getAsyncIteratorSymbol()]: () => {
        return autoPaginationMethods;
      }
    };
    return autoPaginationMethods;
  };
  function getAsyncIteratorSymbol() {
    if (typeof Symbol !== "undefined" && Symbol.asyncIterator) {
      return Symbol.asyncIterator;
    }
    return "@@asyncIterator";
  }
  function getDoneCallback(args) {
    if (args.length < 2) {
      return null;
    }
    const onDone = args[1];
    if (typeof onDone !== "function") {
      throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`);
    }
    return onDone;
  }
  function getItemCallback(args) {
    if (args.length === 0) {
      return void 0;
    }
    const onItem = args[0];
    if (typeof onItem !== "function") {
      throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`);
    }
    if (onItem.length === 2) {
      return onItem;
    }
    if (onItem.length > 2) {
      throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`);
    }
    return function _onItem(item, next) {
      const shouldContinue = onItem(item);
      next(shouldContinue);
    };
  }
  function getLastId(listResult, reverseIteration) {
    const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
    const lastItem = listResult.data[lastIdx];
    const lastId = lastItem && lastItem.id;
    if (!lastId) {
      throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
    }
    return lastId;
  }
  function makeAutoPagingEach(asyncIteratorNext) {
    return function autoPagingEach() {
      const args = [].slice.call(arguments);
      const onItem = getItemCallback(args);
      const onDone = getDoneCallback(args);
      if (args.length > 2) {
        throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
      }
      const autoPagePromise = wrapAsyncIteratorWithCallback(
        asyncIteratorNext,
        // @ts-ignore we might need a null check
        onItem
      );
      return callbackifyPromiseWithTimeout(autoPagePromise, onDone);
    };
  }
  function makeAutoPagingToArray(autoPagingEach) {
    return function autoPagingToArray(opts, onDone) {
      const limit = opts && opts.limit;
      if (!limit) {
        throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
      }
      if (limit > 1e4) {
        throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
      }
      const promise = new Promise((resolve, reject) => {
        const items = [];
        autoPagingEach((item) => {
          items.push(item);
          if (items.length >= limit) {
            return false;
          }
        }).then(() => {
          resolve(items);
        }).catch(reject);
      });
      return callbackifyPromiseWithTimeout(promise, onDone);
    };
  }
  function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
    return new Promise((resolve, reject) => {
      function handleIteration(iterResult) {
        if (iterResult.done) {
          resolve();
          return;
        }
        const item = iterResult.value;
        return new Promise((next) => {
          onItem(item, next);
        }).then((shouldContinue) => {
          if (shouldContinue === false) {
            return handleIteration({ done: true, value: void 0 });
          } else {
            return asyncIteratorNext().then(handleIteration);
          }
        });
      }
      asyncIteratorNext().then(handleIteration).catch(reject);
    });
  }
  function isReverseIteration(requestArgs) {
    const args = [].slice.call(requestArgs);
    const dataFromArgs = getDataFromArgs(args);
    return !!dataFromArgs.ending_before;
  }

  // node_modules/stripe/esm/StripeMethod.js
  function stripeMethod(spec) {
    if (spec.path !== void 0 && spec.fullPath !== void 0) {
      throw new Error(`Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`);
    }
    return function(...args) {
      const callback = typeof args[args.length - 1] == "function" && args.pop();
      spec.urlParams = extractUrlParams(spec.fullPath || this.createResourcePathWithSymbols(spec.path || ""));
      const requestPromise = callbackifyPromiseWithTimeout(this._makeRequest(args, spec, {}), callback);
      Object.assign(requestPromise, makeAutoPaginationMethods(this, args, spec, requestPromise));
      return requestPromise;
    };
  }

  // node_modules/stripe/esm/StripeResource.js
  StripeResource.extend = protoExtend;
  StripeResource.method = stripeMethod;
  StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
  function StripeResource(stripe, deprecatedUrlData) {
    this._stripe = stripe;
    if (deprecatedUrlData) {
      throw new Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");
    }
    this.basePath = makeURLInterpolator(
      // @ts-ignore changing type of basePath
      this.basePath || stripe.getApiField("basePath")
    );
    this.resourcePath = this.path;
    this.path = makeURLInterpolator(this.path);
    this.initialize(...arguments);
  }
  StripeResource.prototype = {
    _stripe: null,
    // @ts-ignore the type of path changes in ctor
    path: "",
    resourcePath: "",
    // Methods that don't use the API's default '/v1' path can override it with this setting.
    basePath: null,
    initialize() {
    },
    // Function to override the default data processor. This allows full control
    // over how a StripeResource's request data will get converted into an HTTP
    // body. This is useful for non-standard HTTP requests. The function should
    // take method name, data, and headers as arguments.
    requestDataProcessor: null,
    // Function to add a validation checks before sending the request, errors should
    // be thrown, and they will be passed to the callback/promise.
    validateRequest: null,
    createFullPath(commandPath, urlData) {
      const urlParts = [this.basePath(urlData), this.path(urlData)];
      if (typeof commandPath === "function") {
        const computedCommandPath = commandPath(urlData);
        if (computedCommandPath) {
          urlParts.push(computedCommandPath);
        }
      } else {
        urlParts.push(commandPath);
      }
      return this._joinUrlParts(urlParts);
    },
    // Creates a relative resource path with symbols left in (unlike
    // createFullPath which takes some data to replace them with). For example it
    // might produce: /invoices/{id}
    createResourcePathWithSymbols(pathWithSymbols) {
      if (pathWithSymbols) {
        return `/${this._joinUrlParts([this.resourcePath, pathWithSymbols])}`;
      } else {
        return `/${this.resourcePath}`;
      }
    },
    _joinUrlParts(parts) {
      return parts.join("/").replace(/\/{2,}/g, "/");
    },
    _getRequestOpts(requestArgs, spec, overrideData) {
      const requestMethod = (spec.method || "GET").toUpperCase();
      const urlParams = spec.urlParams || [];
      const encode3 = spec.encode || ((data2) => data2);
      const isUsingFullPath = !!spec.fullPath;
      const commandPath = makeURLInterpolator(isUsingFullPath ? spec.fullPath : spec.path || "");
      const path = isUsingFullPath ? spec.fullPath : this.createResourcePathWithSymbols(spec.path);
      const args = [].slice.call(requestArgs);
      const urlData = urlParams.reduce((urlData2, param) => {
        const arg = args.shift();
        if (typeof arg !== "string") {
          throw new Error(`Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`);
        }
        urlData2[param] = arg;
        return urlData2;
      }, {});
      const dataFromArgs = getDataFromArgs(args);
      const data = encode3(Object.assign({}, dataFromArgs, overrideData));
      const options = getOptionsFromArgs(args);
      const host = options.host || spec.host;
      const streaming = !!spec.streaming;
      if (args.filter((x) => x != null).length) {
        throw new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`);
      }
      const requestPath = isUsingFullPath ? commandPath(urlData) : this.createFullPath(commandPath, urlData);
      const headers = Object.assign(options.headers, spec.headers);
      if (spec.validator) {
        spec.validator(data, { headers });
      }
      const dataInQuery = spec.method === "GET" || spec.method === "DELETE";
      const bodyData = dataInQuery ? {} : data;
      const queryData = dataInQuery ? data : {};
      return {
        requestMethod,
        requestPath,
        bodyData,
        queryData,
        auth: options.auth,
        headers,
        host: host !== null && host !== void 0 ? host : null,
        streaming,
        settings: options.settings
      };
    },
    _makeRequest(requestArgs, spec, overrideData) {
      return new Promise((resolve, reject) => {
        var _a;
        let opts;
        try {
          opts = this._getRequestOpts(requestArgs, spec, overrideData);
        } catch (err) {
          reject(err);
          return;
        }
        function requestCallback(err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
          }
        }
        const emptyQuery = Object.keys(opts.queryData).length === 0;
        const path = [
          opts.requestPath,
          emptyQuery ? "" : "?",
          stringifyRequestData(opts.queryData)
        ].join("");
        const { headers, settings } = opts;
        this._stripe._requestSender._request(opts.requestMethod, opts.host, path, opts.bodyData, opts.auth, { headers, settings, streaming: opts.streaming }, requestCallback, (_a = this.requestDataProcessor) === null || _a === void 0 ? void 0 : _a.bind(this));
      });
    }
  };

  // node_modules/stripe/esm/resources/FinancialConnections/Accounts.js
  var stripeMethod2 = StripeResource.method;
  var Accounts = StripeResource.extend({
    retrieve: stripeMethod2({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts/{account}"
    }),
    list: stripeMethod2({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts",
      methodType: "list"
    }),
    disconnect: stripeMethod2({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/disconnect"
    }),
    listOwners: stripeMethod2({
      method: "GET",
      fullPath: "/v1/financial_connections/accounts/{account}/owners",
      methodType: "list"
    }),
    refresh: stripeMethod2({
      method: "POST",
      fullPath: "/v1/financial_connections/accounts/{account}/refresh"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Authorizations.js
  var stripeMethod3 = StripeResource.method;
  var Authorizations = StripeResource.extend({
    retrieve: stripeMethod3({
      method: "GET",
      fullPath: "/v1/issuing/authorizations/{authorization}"
    }),
    update: stripeMethod3({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}"
    }),
    list: stripeMethod3({
      method: "GET",
      fullPath: "/v1/issuing/authorizations",
      methodType: "list"
    }),
    approve: stripeMethod3({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}/approve"
    }),
    decline: stripeMethod3({
      method: "POST",
      fullPath: "/v1/issuing/authorizations/{authorization}/decline"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Calculations.js
  var stripeMethod4 = StripeResource.method;
  var Calculations = StripeResource.extend({
    create: stripeMethod4({ method: "POST", fullPath: "/v1/tax/calculations" }),
    listLineItems: stripeMethod4({
      method: "GET",
      fullPath: "/v1/tax/calculations/{calculation}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Cardholders.js
  var stripeMethod5 = StripeResource.method;
  var Cardholders = StripeResource.extend({
    create: stripeMethod5({ method: "POST", fullPath: "/v1/issuing/cardholders" }),
    retrieve: stripeMethod5({
      method: "GET",
      fullPath: "/v1/issuing/cardholders/{cardholder}"
    }),
    update: stripeMethod5({
      method: "POST",
      fullPath: "/v1/issuing/cardholders/{cardholder}"
    }),
    list: stripeMethod5({
      method: "GET",
      fullPath: "/v1/issuing/cardholders",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Issuing/Cards.js
  var stripeMethod6 = StripeResource.method;
  var Cards = StripeResource.extend({
    deliverCard: stripeMethod6({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
    }),
    failCard: stripeMethod6({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
    }),
    returnCard: stripeMethod6({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
    }),
    shipCard: stripeMethod6({
      method: "POST",
      fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Cards.js
  var stripeMethod7 = StripeResource.method;
  var Cards2 = StripeResource.extend({
    create: stripeMethod7({ method: "POST", fullPath: "/v1/issuing/cards" }),
    retrieve: stripeMethod7({ method: "GET", fullPath: "/v1/issuing/cards/{card}" }),
    update: stripeMethod7({ method: "POST", fullPath: "/v1/issuing/cards/{card}" }),
    list: stripeMethod7({
      method: "GET",
      fullPath: "/v1/issuing/cards",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/BillingPortal/Configurations.js
  var stripeMethod8 = StripeResource.method;
  var Configurations = StripeResource.extend({
    create: stripeMethod8({
      method: "POST",
      fullPath: "/v1/billing_portal/configurations"
    }),
    retrieve: stripeMethod8({
      method: "GET",
      fullPath: "/v1/billing_portal/configurations/{configuration}"
    }),
    update: stripeMethod8({
      method: "POST",
      fullPath: "/v1/billing_portal/configurations/{configuration}"
    }),
    list: stripeMethod8({
      method: "GET",
      fullPath: "/v1/billing_portal/configurations",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/Configurations.js
  var stripeMethod9 = StripeResource.method;
  var Configurations2 = StripeResource.extend({
    create: stripeMethod9({
      method: "POST",
      fullPath: "/v1/terminal/configurations"
    }),
    retrieve: stripeMethod9({
      method: "GET",
      fullPath: "/v1/terminal/configurations/{configuration}"
    }),
    update: stripeMethod9({
      method: "POST",
      fullPath: "/v1/terminal/configurations/{configuration}"
    }),
    list: stripeMethod9({
      method: "GET",
      fullPath: "/v1/terminal/configurations",
      methodType: "list"
    }),
    del: stripeMethod9({
      method: "DELETE",
      fullPath: "/v1/terminal/configurations/{configuration}"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/ConnectionTokens.js
  var stripeMethod10 = StripeResource.method;
  var ConnectionTokens = StripeResource.extend({
    create: stripeMethod10({
      method: "POST",
      fullPath: "/v1/terminal/connection_tokens"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/CreditReversals.js
  var stripeMethod11 = StripeResource.method;
  var CreditReversals = StripeResource.extend({
    create: stripeMethod11({
      method: "POST",
      fullPath: "/v1/treasury/credit_reversals"
    }),
    retrieve: stripeMethod11({
      method: "GET",
      fullPath: "/v1/treasury/credit_reversals/{credit_reversal}"
    }),
    list: stripeMethod11({
      method: "GET",
      fullPath: "/v1/treasury/credit_reversals",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Customers.js
  var stripeMethod12 = StripeResource.method;
  var Customers = StripeResource.extend({
    fundCashBalance: stripeMethod12({
      method: "POST",
      fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/DebitReversals.js
  var stripeMethod13 = StripeResource.method;
  var DebitReversals = StripeResource.extend({
    create: stripeMethod13({
      method: "POST",
      fullPath: "/v1/treasury/debit_reversals"
    }),
    retrieve: stripeMethod13({
      method: "GET",
      fullPath: "/v1/treasury/debit_reversals/{debit_reversal}"
    }),
    list: stripeMethod13({
      method: "GET",
      fullPath: "/v1/treasury/debit_reversals",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Disputes.js
  var stripeMethod14 = StripeResource.method;
  var Disputes = StripeResource.extend({
    create: stripeMethod14({ method: "POST", fullPath: "/v1/issuing/disputes" }),
    retrieve: stripeMethod14({
      method: "GET",
      fullPath: "/v1/issuing/disputes/{dispute}"
    }),
    update: stripeMethod14({
      method: "POST",
      fullPath: "/v1/issuing/disputes/{dispute}"
    }),
    list: stripeMethod14({
      method: "GET",
      fullPath: "/v1/issuing/disputes",
      methodType: "list"
    }),
    submit: stripeMethod14({
      method: "POST",
      fullPath: "/v1/issuing/disputes/{dispute}/submit"
    })
  });

  // node_modules/stripe/esm/resources/Radar/EarlyFraudWarnings.js
  var stripeMethod15 = StripeResource.method;
  var EarlyFraudWarnings = StripeResource.extend({
    retrieve: stripeMethod15({
      method: "GET",
      fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
    }),
    list: stripeMethod15({
      method: "GET",
      fullPath: "/v1/radar/early_fraud_warnings",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/FinancialAccounts.js
  var stripeMethod16 = StripeResource.method;
  var FinancialAccounts = StripeResource.extend({
    create: stripeMethod16({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts"
    }),
    retrieve: stripeMethod16({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}"
    }),
    update: stripeMethod16({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}"
    }),
    list: stripeMethod16({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts",
      methodType: "list"
    }),
    retrieveFeatures: stripeMethod16({
      method: "GET",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
    }),
    updateFeatures: stripeMethod16({
      method: "POST",
      fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/InboundTransfers.js
  var stripeMethod17 = StripeResource.method;
  var InboundTransfers = StripeResource.extend({
    fail: stripeMethod17({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
    }),
    returnInboundTransfer: stripeMethod17({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
    }),
    succeed: stripeMethod17({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/InboundTransfers.js
  var stripeMethod18 = StripeResource.method;
  var InboundTransfers2 = StripeResource.extend({
    create: stripeMethod18({
      method: "POST",
      fullPath: "/v1/treasury/inbound_transfers"
    }),
    retrieve: stripeMethod18({
      method: "GET",
      fullPath: "/v1/treasury/inbound_transfers/{id}"
    }),
    list: stripeMethod18({
      method: "GET",
      fullPath: "/v1/treasury/inbound_transfers",
      methodType: "list"
    }),
    cancel: stripeMethod18({
      method: "POST",
      fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/Locations.js
  var stripeMethod19 = StripeResource.method;
  var Locations = StripeResource.extend({
    create: stripeMethod19({ method: "POST", fullPath: "/v1/terminal/locations" }),
    retrieve: stripeMethod19({
      method: "GET",
      fullPath: "/v1/terminal/locations/{location}"
    }),
    update: stripeMethod19({
      method: "POST",
      fullPath: "/v1/terminal/locations/{location}"
    }),
    list: stripeMethod19({
      method: "GET",
      fullPath: "/v1/terminal/locations",
      methodType: "list"
    }),
    del: stripeMethod19({
      method: "DELETE",
      fullPath: "/v1/terminal/locations/{location}"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundPayments.js
  var stripeMethod20 = StripeResource.method;
  var OutboundPayments = StripeResource.extend({
    fail: stripeMethod20({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail"
    }),
    post: stripeMethod20({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post"
    }),
    returnOutboundPayment: stripeMethod20({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/OutboundPayments.js
  var stripeMethod21 = StripeResource.method;
  var OutboundPayments2 = StripeResource.extend({
    create: stripeMethod21({
      method: "POST",
      fullPath: "/v1/treasury/outbound_payments"
    }),
    retrieve: stripeMethod21({
      method: "GET",
      fullPath: "/v1/treasury/outbound_payments/{id}"
    }),
    list: stripeMethod21({
      method: "GET",
      fullPath: "/v1/treasury/outbound_payments",
      methodType: "list"
    }),
    cancel: stripeMethod21({
      method: "POST",
      fullPath: "/v1/treasury/outbound_payments/{id}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundTransfers.js
  var stripeMethod22 = StripeResource.method;
  var OutboundTransfers = StripeResource.extend({
    fail: stripeMethod22({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"
    }),
    post: stripeMethod22({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"
    }),
    returnOutboundTransfer: stripeMethod22({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/OutboundTransfers.js
  var stripeMethod23 = StripeResource.method;
  var OutboundTransfers2 = StripeResource.extend({
    create: stripeMethod23({
      method: "POST",
      fullPath: "/v1/treasury/outbound_transfers"
    }),
    retrieve: stripeMethod23({
      method: "GET",
      fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}"
    }),
    list: stripeMethod23({
      method: "GET",
      fullPath: "/v1/treasury/outbound_transfers",
      methodType: "list"
    }),
    cancel: stripeMethod23({
      method: "POST",
      fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Terminal/Readers.js
  var stripeMethod24 = StripeResource.method;
  var Readers = StripeResource.extend({
    presentPaymentMethod: stripeMethod24({
      method: "POST",
      fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
    })
  });

  // node_modules/stripe/esm/resources/Terminal/Readers.js
  var stripeMethod25 = StripeResource.method;
  var Readers2 = StripeResource.extend({
    create: stripeMethod25({ method: "POST", fullPath: "/v1/terminal/readers" }),
    retrieve: stripeMethod25({
      method: "GET",
      fullPath: "/v1/terminal/readers/{reader}"
    }),
    update: stripeMethod25({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}"
    }),
    list: stripeMethod25({
      method: "GET",
      fullPath: "/v1/terminal/readers",
      methodType: "list"
    }),
    del: stripeMethod25({
      method: "DELETE",
      fullPath: "/v1/terminal/readers/{reader}"
    }),
    cancelAction: stripeMethod25({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/cancel_action"
    }),
    processPaymentIntent: stripeMethod25({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/process_payment_intent"
    }),
    processSetupIntent: stripeMethod25({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/process_setup_intent"
    }),
    refundPayment: stripeMethod25({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/refund_payment"
    }),
    setReaderDisplay: stripeMethod25({
      method: "POST",
      fullPath: "/v1/terminal/readers/{reader}/set_reader_display"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedCredits.js
  var stripeMethod26 = StripeResource.method;
  var ReceivedCredits = StripeResource.extend({
    create: stripeMethod26({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/received_credits"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/ReceivedCredits.js
  var stripeMethod27 = StripeResource.method;
  var ReceivedCredits2 = StripeResource.extend({
    retrieve: stripeMethod27({
      method: "GET",
      fullPath: "/v1/treasury/received_credits/{id}"
    }),
    list: stripeMethod27({
      method: "GET",
      fullPath: "/v1/treasury/received_credits",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedDebits.js
  var stripeMethod28 = StripeResource.method;
  var ReceivedDebits = StripeResource.extend({
    create: stripeMethod28({
      method: "POST",
      fullPath: "/v1/test_helpers/treasury/received_debits"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/ReceivedDebits.js
  var stripeMethod29 = StripeResource.method;
  var ReceivedDebits2 = StripeResource.extend({
    retrieve: stripeMethod29({
      method: "GET",
      fullPath: "/v1/treasury/received_debits/{id}"
    }),
    list: stripeMethod29({
      method: "GET",
      fullPath: "/v1/treasury/received_debits",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TestHelpers/Refunds.js
  var stripeMethod30 = StripeResource.method;
  var Refunds = StripeResource.extend({
    expire: stripeMethod30({
      method: "POST",
      fullPath: "/v1/test_helpers/refunds/{refund}/expire"
    })
  });

  // node_modules/stripe/esm/resources/Reporting/ReportRuns.js
  var stripeMethod31 = StripeResource.method;
  var ReportRuns = StripeResource.extend({
    create: stripeMethod31({ method: "POST", fullPath: "/v1/reporting/report_runs" }),
    retrieve: stripeMethod31({
      method: "GET",
      fullPath: "/v1/reporting/report_runs/{report_run}"
    }),
    list: stripeMethod31({
      method: "GET",
      fullPath: "/v1/reporting/report_runs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Reporting/ReportTypes.js
  var stripeMethod32 = StripeResource.method;
  var ReportTypes = StripeResource.extend({
    retrieve: stripeMethod32({
      method: "GET",
      fullPath: "/v1/reporting/report_types/{report_type}"
    }),
    list: stripeMethod32({
      method: "GET",
      fullPath: "/v1/reporting/report_types",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Sigma/ScheduledQueryRuns.js
  var stripeMethod33 = StripeResource.method;
  var ScheduledQueryRuns = StripeResource.extend({
    retrieve: stripeMethod33({
      method: "GET",
      fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
    }),
    list: stripeMethod33({
      method: "GET",
      fullPath: "/v1/sigma/scheduled_query_runs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Apps/Secrets.js
  var stripeMethod34 = StripeResource.method;
  var Secrets = StripeResource.extend({
    create: stripeMethod34({ method: "POST", fullPath: "/v1/apps/secrets" }),
    list: stripeMethod34({
      method: "GET",
      fullPath: "/v1/apps/secrets",
      methodType: "list"
    }),
    deleteWhere: stripeMethod34({
      method: "POST",
      fullPath: "/v1/apps/secrets/delete"
    }),
    find: stripeMethod34({ method: "GET", fullPath: "/v1/apps/secrets/find" })
  });

  // node_modules/stripe/esm/resources/BillingPortal/Sessions.js
  var stripeMethod35 = StripeResource.method;
  var Sessions = StripeResource.extend({
    create: stripeMethod35({
      method: "POST",
      fullPath: "/v1/billing_portal/sessions"
    })
  });

  // node_modules/stripe/esm/resources/Checkout/Sessions.js
  var stripeMethod36 = StripeResource.method;
  var Sessions2 = StripeResource.extend({
    create: stripeMethod36({ method: "POST", fullPath: "/v1/checkout/sessions" }),
    retrieve: stripeMethod36({
      method: "GET",
      fullPath: "/v1/checkout/sessions/{session}"
    }),
    list: stripeMethod36({
      method: "GET",
      fullPath: "/v1/checkout/sessions",
      methodType: "list"
    }),
    expire: stripeMethod36({
      method: "POST",
      fullPath: "/v1/checkout/sessions/{session}/expire"
    }),
    listLineItems: stripeMethod36({
      method: "GET",
      fullPath: "/v1/checkout/sessions/{session}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/FinancialConnections/Sessions.js
  var stripeMethod37 = StripeResource.method;
  var Sessions3 = StripeResource.extend({
    create: stripeMethod37({
      method: "POST",
      fullPath: "/v1/financial_connections/sessions"
    }),
    retrieve: stripeMethod37({
      method: "GET",
      fullPath: "/v1/financial_connections/sessions/{session}"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Settings.js
  var stripeMethod38 = StripeResource.method;
  var Settings = StripeResource.extend({
    retrieve: stripeMethod38({ method: "GET", fullPath: "/v1/tax/settings" }),
    update: stripeMethod38({ method: "POST", fullPath: "/v1/tax/settings" })
  });

  // node_modules/stripe/esm/resources/TestHelpers/TestClocks.js
  var stripeMethod39 = StripeResource.method;
  var TestClocks = StripeResource.extend({
    create: stripeMethod39({
      method: "POST",
      fullPath: "/v1/test_helpers/test_clocks"
    }),
    retrieve: stripeMethod39({
      method: "GET",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
    }),
    list: stripeMethod39({
      method: "GET",
      fullPath: "/v1/test_helpers/test_clocks",
      methodType: "list"
    }),
    del: stripeMethod39({
      method: "DELETE",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
    }),
    advance: stripeMethod39({
      method: "POST",
      fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/TransactionEntries.js
  var stripeMethod40 = StripeResource.method;
  var TransactionEntries = StripeResource.extend({
    retrieve: stripeMethod40({
      method: "GET",
      fullPath: "/v1/treasury/transaction_entries/{id}"
    }),
    list: stripeMethod40({
      method: "GET",
      fullPath: "/v1/treasury/transaction_entries",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Issuing/Transactions.js
  var stripeMethod41 = StripeResource.method;
  var Transactions = StripeResource.extend({
    retrieve: stripeMethod41({
      method: "GET",
      fullPath: "/v1/issuing/transactions/{transaction}"
    }),
    update: stripeMethod41({
      method: "POST",
      fullPath: "/v1/issuing/transactions/{transaction}"
    }),
    list: stripeMethod41({
      method: "GET",
      fullPath: "/v1/issuing/transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Tax/Transactions.js
  var stripeMethod42 = StripeResource.method;
  var Transactions2 = StripeResource.extend({
    retrieve: stripeMethod42({
      method: "GET",
      fullPath: "/v1/tax/transactions/{transaction}"
    }),
    createFromCalculation: stripeMethod42({
      method: "POST",
      fullPath: "/v1/tax/transactions/create_from_calculation"
    }),
    createReversal: stripeMethod42({
      method: "POST",
      fullPath: "/v1/tax/transactions/create_reversal"
    }),
    listLineItems: stripeMethod42({
      method: "GET",
      fullPath: "/v1/tax/transactions/{transaction}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Treasury/Transactions.js
  var stripeMethod43 = StripeResource.method;
  var Transactions3 = StripeResource.extend({
    retrieve: stripeMethod43({
      method: "GET",
      fullPath: "/v1/treasury/transactions/{id}"
    }),
    list: stripeMethod43({
      method: "GET",
      fullPath: "/v1/treasury/transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Radar/ValueListItems.js
  var stripeMethod44 = StripeResource.method;
  var ValueListItems = StripeResource.extend({
    create: stripeMethod44({
      method: "POST",
      fullPath: "/v1/radar/value_list_items"
    }),
    retrieve: stripeMethod44({
      method: "GET",
      fullPath: "/v1/radar/value_list_items/{item}"
    }),
    list: stripeMethod44({
      method: "GET",
      fullPath: "/v1/radar/value_list_items",
      methodType: "list"
    }),
    del: stripeMethod44({
      method: "DELETE",
      fullPath: "/v1/radar/value_list_items/{item}"
    })
  });

  // node_modules/stripe/esm/resources/Radar/ValueLists.js
  var stripeMethod45 = StripeResource.method;
  var ValueLists = StripeResource.extend({
    create: stripeMethod45({ method: "POST", fullPath: "/v1/radar/value_lists" }),
    retrieve: stripeMethod45({
      method: "GET",
      fullPath: "/v1/radar/value_lists/{value_list}"
    }),
    update: stripeMethod45({
      method: "POST",
      fullPath: "/v1/radar/value_lists/{value_list}"
    }),
    list: stripeMethod45({
      method: "GET",
      fullPath: "/v1/radar/value_lists",
      methodType: "list"
    }),
    del: stripeMethod45({
      method: "DELETE",
      fullPath: "/v1/radar/value_lists/{value_list}"
    })
  });

  // node_modules/stripe/esm/resources/Identity/VerificationReports.js
  var stripeMethod46 = StripeResource.method;
  var VerificationReports = StripeResource.extend({
    retrieve: stripeMethod46({
      method: "GET",
      fullPath: "/v1/identity/verification_reports/{report}"
    }),
    list: stripeMethod46({
      method: "GET",
      fullPath: "/v1/identity/verification_reports",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Identity/VerificationSessions.js
  var stripeMethod47 = StripeResource.method;
  var VerificationSessions = StripeResource.extend({
    create: stripeMethod47({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions"
    }),
    retrieve: stripeMethod47({
      method: "GET",
      fullPath: "/v1/identity/verification_sessions/{session}"
    }),
    update: stripeMethod47({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}"
    }),
    list: stripeMethod47({
      method: "GET",
      fullPath: "/v1/identity/verification_sessions",
      methodType: "list"
    }),
    cancel: stripeMethod47({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}/cancel"
    }),
    redact: stripeMethod47({
      method: "POST",
      fullPath: "/v1/identity/verification_sessions/{session}/redact"
    })
  });

  // node_modules/stripe/esm/resources/Accounts.js
  var stripeMethod48 = StripeResource.method;
  var Accounts2 = StripeResource.extend({
    create: stripeMethod48({ method: "POST", fullPath: "/v1/accounts" }),
    retrieve(id, ...args) {
      if (typeof id === "string") {
        return stripeMethod48({
          method: "GET",
          fullPath: "/v1/accounts/{id}"
        }).apply(this, [id, ...args]);
      } else {
        if (id === null || id === void 0) {
          [].shift.apply([id, ...args]);
        }
        return stripeMethod48({
          method: "GET",
          fullPath: "/v1/account"
        }).apply(this, [id, ...args]);
      }
    },
    update: stripeMethod48({ method: "POST", fullPath: "/v1/accounts/{account}" }),
    list: stripeMethod48({
      method: "GET",
      fullPath: "/v1/accounts",
      methodType: "list"
    }),
    del: stripeMethod48({ method: "DELETE", fullPath: "/v1/accounts/{account}" }),
    createExternalAccount: stripeMethod48({
      method: "POST",
      fullPath: "/v1/accounts/{account}/external_accounts"
    }),
    createLoginLink: stripeMethod48({
      method: "POST",
      fullPath: "/v1/accounts/{account}/login_links"
    }),
    createPerson: stripeMethod48({
      method: "POST",
      fullPath: "/v1/accounts/{account}/persons"
    }),
    deleteExternalAccount: stripeMethod48({
      method: "DELETE",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    deletePerson: stripeMethod48({
      method: "DELETE",
      fullPath: "/v1/accounts/{account}/persons/{person}"
    }),
    listCapabilities: stripeMethod48({
      method: "GET",
      fullPath: "/v1/accounts/{account}/capabilities",
      methodType: "list"
    }),
    listExternalAccounts: stripeMethod48({
      method: "GET",
      fullPath: "/v1/accounts/{account}/external_accounts",
      methodType: "list"
    }),
    listPersons: stripeMethod48({
      method: "GET",
      fullPath: "/v1/accounts/{account}/persons",
      methodType: "list"
    }),
    reject: stripeMethod48({
      method: "POST",
      fullPath: "/v1/accounts/{account}/reject"
    }),
    retrieveCapability: stripeMethod48({
      method: "GET",
      fullPath: "/v1/accounts/{account}/capabilities/{capability}"
    }),
    retrieveExternalAccount: stripeMethod48({
      method: "GET",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    retrievePerson: stripeMethod48({
      method: "GET",
      fullPath: "/v1/accounts/{account}/persons/{person}"
    }),
    updateCapability: stripeMethod48({
      method: "POST",
      fullPath: "/v1/accounts/{account}/capabilities/{capability}"
    }),
    updateExternalAccount: stripeMethod48({
      method: "POST",
      fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    updatePerson: stripeMethod48({
      method: "POST",
      fullPath: "/v1/accounts/{account}/persons/{person}"
    })
  });

  // node_modules/stripe/esm/resources/AccountLinks.js
  var stripeMethod49 = StripeResource.method;
  var AccountLinks = StripeResource.extend({
    create: stripeMethod49({ method: "POST", fullPath: "/v1/account_links" })
  });

  // node_modules/stripe/esm/resources/ApplePayDomains.js
  var stripeMethod50 = StripeResource.method;
  var ApplePayDomains = StripeResource.extend({
    create: stripeMethod50({ method: "POST", fullPath: "/v1/apple_pay/domains" }),
    retrieve: stripeMethod50({
      method: "GET",
      fullPath: "/v1/apple_pay/domains/{domain}"
    }),
    list: stripeMethod50({
      method: "GET",
      fullPath: "/v1/apple_pay/domains",
      methodType: "list"
    }),
    del: stripeMethod50({
      method: "DELETE",
      fullPath: "/v1/apple_pay/domains/{domain}"
    })
  });

  // node_modules/stripe/esm/resources/ApplicationFees.js
  var stripeMethod51 = StripeResource.method;
  var ApplicationFees = StripeResource.extend({
    retrieve: stripeMethod51({
      method: "GET",
      fullPath: "/v1/application_fees/{id}"
    }),
    list: stripeMethod51({
      method: "GET",
      fullPath: "/v1/application_fees",
      methodType: "list"
    }),
    createRefund: stripeMethod51({
      method: "POST",
      fullPath: "/v1/application_fees/{id}/refunds"
    }),
    listRefunds: stripeMethod51({
      method: "GET",
      fullPath: "/v1/application_fees/{id}/refunds",
      methodType: "list"
    }),
    retrieveRefund: stripeMethod51({
      method: "GET",
      fullPath: "/v1/application_fees/{fee}/refunds/{id}"
    }),
    updateRefund: stripeMethod51({
      method: "POST",
      fullPath: "/v1/application_fees/{fee}/refunds/{id}"
    })
  });

  // node_modules/stripe/esm/resources/Balance.js
  var stripeMethod52 = StripeResource.method;
  var Balance = StripeResource.extend({
    retrieve: stripeMethod52({ method: "GET", fullPath: "/v1/balance" })
  });

  // node_modules/stripe/esm/resources/BalanceTransactions.js
  var stripeMethod53 = StripeResource.method;
  var BalanceTransactions = StripeResource.extend({
    retrieve: stripeMethod53({
      method: "GET",
      fullPath: "/v1/balance_transactions/{id}"
    }),
    list: stripeMethod53({
      method: "GET",
      fullPath: "/v1/balance_transactions",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Charges.js
  var stripeMethod54 = StripeResource.method;
  var Charges = StripeResource.extend({
    create: stripeMethod54({ method: "POST", fullPath: "/v1/charges" }),
    retrieve: stripeMethod54({ method: "GET", fullPath: "/v1/charges/{charge}" }),
    update: stripeMethod54({ method: "POST", fullPath: "/v1/charges/{charge}" }),
    list: stripeMethod54({
      method: "GET",
      fullPath: "/v1/charges",
      methodType: "list"
    }),
    capture: stripeMethod54({
      method: "POST",
      fullPath: "/v1/charges/{charge}/capture"
    }),
    search: stripeMethod54({
      method: "GET",
      fullPath: "/v1/charges/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/CountrySpecs.js
  var stripeMethod55 = StripeResource.method;
  var CountrySpecs = StripeResource.extend({
    retrieve: stripeMethod55({
      method: "GET",
      fullPath: "/v1/country_specs/{country}"
    }),
    list: stripeMethod55({
      method: "GET",
      fullPath: "/v1/country_specs",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Coupons.js
  var stripeMethod56 = StripeResource.method;
  var Coupons = StripeResource.extend({
    create: stripeMethod56({ method: "POST", fullPath: "/v1/coupons" }),
    retrieve: stripeMethod56({ method: "GET", fullPath: "/v1/coupons/{coupon}" }),
    update: stripeMethod56({ method: "POST", fullPath: "/v1/coupons/{coupon}" }),
    list: stripeMethod56({
      method: "GET",
      fullPath: "/v1/coupons",
      methodType: "list"
    }),
    del: stripeMethod56({ method: "DELETE", fullPath: "/v1/coupons/{coupon}" })
  });

  // node_modules/stripe/esm/resources/CreditNotes.js
  var stripeMethod57 = StripeResource.method;
  var CreditNotes = StripeResource.extend({
    create: stripeMethod57({ method: "POST", fullPath: "/v1/credit_notes" }),
    retrieve: stripeMethod57({ method: "GET", fullPath: "/v1/credit_notes/{id}" }),
    update: stripeMethod57({ method: "POST", fullPath: "/v1/credit_notes/{id}" }),
    list: stripeMethod57({
      method: "GET",
      fullPath: "/v1/credit_notes",
      methodType: "list"
    }),
    listLineItems: stripeMethod57({
      method: "GET",
      fullPath: "/v1/credit_notes/{credit_note}/lines",
      methodType: "list"
    }),
    listPreviewLineItems: stripeMethod57({
      method: "GET",
      fullPath: "/v1/credit_notes/preview/lines",
      methodType: "list"
    }),
    preview: stripeMethod57({ method: "GET", fullPath: "/v1/credit_notes/preview" }),
    voidCreditNote: stripeMethod57({
      method: "POST",
      fullPath: "/v1/credit_notes/{id}/void"
    })
  });

  // node_modules/stripe/esm/resources/Customers.js
  var stripeMethod58 = StripeResource.method;
  var Customers2 = StripeResource.extend({
    create: stripeMethod58({ method: "POST", fullPath: "/v1/customers" }),
    retrieve: stripeMethod58({ method: "GET", fullPath: "/v1/customers/{customer}" }),
    update: stripeMethod58({ method: "POST", fullPath: "/v1/customers/{customer}" }),
    list: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers",
      methodType: "list"
    }),
    del: stripeMethod58({ method: "DELETE", fullPath: "/v1/customers/{customer}" }),
    createFundingInstructions: stripeMethod58({
      method: "POST",
      fullPath: "/v1/customers/{customer}/funding_instructions"
    }),
    createBalanceTransaction: stripeMethod58({
      method: "POST",
      fullPath: "/v1/customers/{customer}/balance_transactions"
    }),
    createSource: stripeMethod58({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources"
    }),
    createTaxId: stripeMethod58({
      method: "POST",
      fullPath: "/v1/customers/{customer}/tax_ids"
    }),
    deleteDiscount: stripeMethod58({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/discount"
    }),
    deleteSource: stripeMethod58({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    deleteTaxId: stripeMethod58({
      method: "DELETE",
      fullPath: "/v1/customers/{customer}/tax_ids/{id}"
    }),
    listPaymentMethods: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/payment_methods",
      methodType: "list"
    }),
    listBalanceTransactions: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/balance_transactions",
      methodType: "list"
    }),
    listCashBalanceTransactions: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance_transactions",
      methodType: "list"
    }),
    listSources: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/sources",
      methodType: "list"
    }),
    listTaxIds: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/tax_ids",
      methodType: "list"
    }),
    retrievePaymentMethod: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}"
    }),
    retrieveBalanceTransaction: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
    }),
    retrieveCashBalance: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance"
    }),
    retrieveCashBalanceTransaction: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/cash_balance_transactions/{transaction}"
    }),
    retrieveSource: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    retrieveTaxId: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/{customer}/tax_ids/{id}"
    }),
    search: stripeMethod58({
      method: "GET",
      fullPath: "/v1/customers/search",
      methodType: "search"
    }),
    updateBalanceTransaction: stripeMethod58({
      method: "POST",
      fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
    }),
    updateCashBalance: stripeMethod58({
      method: "POST",
      fullPath: "/v1/customers/{customer}/cash_balance"
    }),
    updateSource: stripeMethod58({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    verifySource: stripeMethod58({
      method: "POST",
      fullPath: "/v1/customers/{customer}/sources/{id}/verify"
    })
  });

  // node_modules/stripe/esm/resources/Disputes.js
  var stripeMethod59 = StripeResource.method;
  var Disputes2 = StripeResource.extend({
    retrieve: stripeMethod59({ method: "GET", fullPath: "/v1/disputes/{dispute}" }),
    update: stripeMethod59({ method: "POST", fullPath: "/v1/disputes/{dispute}" }),
    list: stripeMethod59({
      method: "GET",
      fullPath: "/v1/disputes",
      methodType: "list"
    }),
    close: stripeMethod59({
      method: "POST",
      fullPath: "/v1/disputes/{dispute}/close"
    })
  });

  // node_modules/stripe/esm/resources/EphemeralKeys.js
  var stripeMethod60 = StripeResource.method;
  var EphemeralKeys = StripeResource.extend({
    create: stripeMethod60({
      method: "POST",
      fullPath: "/v1/ephemeral_keys",
      validator: (data, options) => {
        if (!options.headers || !options.headers["Stripe-Version"]) {
          throw new Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
        }
      }
    }),
    del: stripeMethod60({ method: "DELETE", fullPath: "/v1/ephemeral_keys/{key}" })
  });

  // node_modules/stripe/esm/resources/Events.js
  var stripeMethod61 = StripeResource.method;
  var Events = StripeResource.extend({
    retrieve: stripeMethod61({ method: "GET", fullPath: "/v1/events/{id}" }),
    list: stripeMethod61({
      method: "GET",
      fullPath: "/v1/events",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/ExchangeRates.js
  var stripeMethod62 = StripeResource.method;
  var ExchangeRates = StripeResource.extend({
    retrieve: stripeMethod62({
      method: "GET",
      fullPath: "/v1/exchange_rates/{rate_id}"
    }),
    list: stripeMethod62({
      method: "GET",
      fullPath: "/v1/exchange_rates",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/FileLinks.js
  var stripeMethod63 = StripeResource.method;
  var FileLinks = StripeResource.extend({
    create: stripeMethod63({ method: "POST", fullPath: "/v1/file_links" }),
    retrieve: stripeMethod63({ method: "GET", fullPath: "/v1/file_links/{link}" }),
    update: stripeMethod63({ method: "POST", fullPath: "/v1/file_links/{link}" }),
    list: stripeMethod63({
      method: "GET",
      fullPath: "/v1/file_links",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/multipart.js
  var multipartDataGenerator = (method, data, headers) => {
    const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
    headers["Content-Type"] = `multipart/form-data; boundary=${segno}`;
    const textEncoder = new TextEncoder();
    let buffer = new Uint8Array(0);
    const endBuffer = textEncoder.encode("\r\n");
    function push(l) {
      const prevBuffer = buffer;
      const newBuffer = l instanceof Uint8Array ? l : new Uint8Array(textEncoder.encode(l));
      buffer = new Uint8Array(prevBuffer.length + newBuffer.length + 2);
      buffer.set(prevBuffer);
      buffer.set(newBuffer, prevBuffer.length);
      buffer.set(endBuffer, buffer.length - 2);
    }
    function q(s) {
      return `"${s.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
    }
    const flattenedData = flattenAndStringify(data);
    for (const k in flattenedData) {
      const v = flattenedData[k];
      push(`--${segno}`);
      if (Object.prototype.hasOwnProperty.call(v, "data")) {
        const typedEntry = v;
        push(`Content-Disposition: form-data; name=${q(k)}; filename=${q(typedEntry.name || "blob")}`);
        push(`Content-Type: ${typedEntry.type || "application/octet-stream"}`);
        push("");
        push(typedEntry.data);
      } else {
        push(`Content-Disposition: form-data; name=${q(k)}`);
        push("");
        push(v);
      }
    }
    push(`--${segno}--`);
    return buffer;
  };
  function multipartRequestDataProcessor(method, data, headers, callback) {
    data = data || {};
    if (method !== "POST") {
      return callback(null, stringifyRequestData(data));
    }
    this._stripe._platformFunctions.tryBufferData(data).then((bufferedData) => {
      const buffer = multipartDataGenerator(method, bufferedData, headers);
      return callback(null, buffer);
    }).catch((err) => callback(err, null));
  }

  // node_modules/stripe/esm/resources/Files.js
  var stripeMethod64 = StripeResource.method;
  var Files = StripeResource.extend({
    create: stripeMethod64({
      method: "POST",
      fullPath: "/v1/files",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      host: "files.stripe.com"
    }),
    retrieve: stripeMethod64({ method: "GET", fullPath: "/v1/files/{file}" }),
    list: stripeMethod64({
      method: "GET",
      fullPath: "/v1/files",
      methodType: "list"
    }),
    requestDataProcessor: multipartRequestDataProcessor
  });

  // node_modules/stripe/esm/resources/InvoiceItems.js
  var stripeMethod65 = StripeResource.method;
  var InvoiceItems = StripeResource.extend({
    create: stripeMethod65({ method: "POST", fullPath: "/v1/invoiceitems" }),
    retrieve: stripeMethod65({
      method: "GET",
      fullPath: "/v1/invoiceitems/{invoiceitem}"
    }),
    update: stripeMethod65({
      method: "POST",
      fullPath: "/v1/invoiceitems/{invoiceitem}"
    }),
    list: stripeMethod65({
      method: "GET",
      fullPath: "/v1/invoiceitems",
      methodType: "list"
    }),
    del: stripeMethod65({
      method: "DELETE",
      fullPath: "/v1/invoiceitems/{invoiceitem}"
    })
  });

  // node_modules/stripe/esm/resources/Invoices.js
  var stripeMethod66 = StripeResource.method;
  var Invoices = StripeResource.extend({
    create: stripeMethod66({ method: "POST", fullPath: "/v1/invoices" }),
    retrieve: stripeMethod66({ method: "GET", fullPath: "/v1/invoices/{invoice}" }),
    update: stripeMethod66({ method: "POST", fullPath: "/v1/invoices/{invoice}" }),
    list: stripeMethod66({
      method: "GET",
      fullPath: "/v1/invoices",
      methodType: "list"
    }),
    del: stripeMethod66({ method: "DELETE", fullPath: "/v1/invoices/{invoice}" }),
    finalizeInvoice: stripeMethod66({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/finalize"
    }),
    listLineItems: stripeMethod66({
      method: "GET",
      fullPath: "/v1/invoices/{invoice}/lines",
      methodType: "list"
    }),
    listUpcomingLines: stripeMethod66({
      method: "GET",
      fullPath: "/v1/invoices/upcoming/lines",
      methodType: "list"
    }),
    markUncollectible: stripeMethod66({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/mark_uncollectible"
    }),
    pay: stripeMethod66({ method: "POST", fullPath: "/v1/invoices/{invoice}/pay" }),
    retrieveUpcoming: stripeMethod66({
      method: "GET",
      fullPath: "/v1/invoices/upcoming"
    }),
    search: stripeMethod66({
      method: "GET",
      fullPath: "/v1/invoices/search",
      methodType: "search"
    }),
    sendInvoice: stripeMethod66({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/send"
    }),
    voidInvoice: stripeMethod66({
      method: "POST",
      fullPath: "/v1/invoices/{invoice}/void"
    })
  });

  // node_modules/stripe/esm/resources/Mandates.js
  var stripeMethod67 = StripeResource.method;
  var Mandates = StripeResource.extend({
    retrieve: stripeMethod67({ method: "GET", fullPath: "/v1/mandates/{mandate}" })
  });

  // node_modules/stripe/esm/resources/OAuth.js
  var stripeMethod68 = StripeResource.method;
  var oAuthHost = "connect.stripe.com";
  var OAuth = StripeResource.extend({
    basePath: "/",
    authorizeUrl(params, options) {
      params = params || {};
      options = options || {};
      let path = "oauth/authorize";
      if (options.express) {
        path = `express/${path}`;
      }
      if (!params.response_type) {
        params.response_type = "code";
      }
      if (!params.client_id) {
        params.client_id = this._stripe.getClientId();
      }
      if (!params.scope) {
        params.scope = "read_write";
      }
      return `https://${oAuthHost}/${path}?${stringifyRequestData(params)}`;
    },
    token: stripeMethod68({
      method: "POST",
      path: "oauth/token",
      host: oAuthHost
    }),
    deauthorize(spec, ...args) {
      if (!spec.client_id) {
        spec.client_id = this._stripe.getClientId();
      }
      return stripeMethod68({
        method: "POST",
        path: "oauth/deauthorize",
        host: oAuthHost
      }).apply(this, [spec, ...args]);
    }
  });

  // node_modules/stripe/esm/resources/PaymentIntents.js
  var stripeMethod69 = StripeResource.method;
  var PaymentIntents = StripeResource.extend({
    create: stripeMethod69({ method: "POST", fullPath: "/v1/payment_intents" }),
    retrieve: stripeMethod69({
      method: "GET",
      fullPath: "/v1/payment_intents/{intent}"
    }),
    update: stripeMethod69({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}"
    }),
    list: stripeMethod69({
      method: "GET",
      fullPath: "/v1/payment_intents",
      methodType: "list"
    }),
    applyCustomerBalance: stripeMethod69({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/apply_customer_balance"
    }),
    cancel: stripeMethod69({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/cancel"
    }),
    capture: stripeMethod69({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/capture"
    }),
    confirm: stripeMethod69({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/confirm"
    }),
    incrementAuthorization: stripeMethod69({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/increment_authorization"
    }),
    search: stripeMethod69({
      method: "GET",
      fullPath: "/v1/payment_intents/search",
      methodType: "search"
    }),
    verifyMicrodeposits: stripeMethod69({
      method: "POST",
      fullPath: "/v1/payment_intents/{intent}/verify_microdeposits"
    })
  });

  // node_modules/stripe/esm/resources/PaymentLinks.js
  var stripeMethod70 = StripeResource.method;
  var PaymentLinks = StripeResource.extend({
    create: stripeMethod70({ method: "POST", fullPath: "/v1/payment_links" }),
    retrieve: stripeMethod70({
      method: "GET",
      fullPath: "/v1/payment_links/{payment_link}"
    }),
    update: stripeMethod70({
      method: "POST",
      fullPath: "/v1/payment_links/{payment_link}"
    }),
    list: stripeMethod70({
      method: "GET",
      fullPath: "/v1/payment_links",
      methodType: "list"
    }),
    listLineItems: stripeMethod70({
      method: "GET",
      fullPath: "/v1/payment_links/{payment_link}/line_items",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/PaymentMethods.js
  var stripeMethod71 = StripeResource.method;
  var PaymentMethods = StripeResource.extend({
    create: stripeMethod71({ method: "POST", fullPath: "/v1/payment_methods" }),
    retrieve: stripeMethod71({
      method: "GET",
      fullPath: "/v1/payment_methods/{payment_method}"
    }),
    update: stripeMethod71({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}"
    }),
    list: stripeMethod71({
      method: "GET",
      fullPath: "/v1/payment_methods",
      methodType: "list"
    }),
    attach: stripeMethod71({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}/attach"
    }),
    detach: stripeMethod71({
      method: "POST",
      fullPath: "/v1/payment_methods/{payment_method}/detach"
    })
  });

  // node_modules/stripe/esm/resources/Payouts.js
  var stripeMethod72 = StripeResource.method;
  var Payouts = StripeResource.extend({
    create: stripeMethod72({ method: "POST", fullPath: "/v1/payouts" }),
    retrieve: stripeMethod72({ method: "GET", fullPath: "/v1/payouts/{payout}" }),
    update: stripeMethod72({ method: "POST", fullPath: "/v1/payouts/{payout}" }),
    list: stripeMethod72({
      method: "GET",
      fullPath: "/v1/payouts",
      methodType: "list"
    }),
    cancel: stripeMethod72({
      method: "POST",
      fullPath: "/v1/payouts/{payout}/cancel"
    }),
    reverse: stripeMethod72({
      method: "POST",
      fullPath: "/v1/payouts/{payout}/reverse"
    })
  });

  // node_modules/stripe/esm/resources/Plans.js
  var stripeMethod73 = StripeResource.method;
  var Plans = StripeResource.extend({
    create: stripeMethod73({ method: "POST", fullPath: "/v1/plans" }),
    retrieve: stripeMethod73({ method: "GET", fullPath: "/v1/plans/{plan}" }),
    update: stripeMethod73({ method: "POST", fullPath: "/v1/plans/{plan}" }),
    list: stripeMethod73({
      method: "GET",
      fullPath: "/v1/plans",
      methodType: "list"
    }),
    del: stripeMethod73({ method: "DELETE", fullPath: "/v1/plans/{plan}" })
  });

  // node_modules/stripe/esm/resources/Prices.js
  var stripeMethod74 = StripeResource.method;
  var Prices = StripeResource.extend({
    create: stripeMethod74({ method: "POST", fullPath: "/v1/prices" }),
    retrieve: stripeMethod74({ method: "GET", fullPath: "/v1/prices/{price}" }),
    update: stripeMethod74({ method: "POST", fullPath: "/v1/prices/{price}" }),
    list: stripeMethod74({
      method: "GET",
      fullPath: "/v1/prices",
      methodType: "list"
    }),
    search: stripeMethod74({
      method: "GET",
      fullPath: "/v1/prices/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/Products.js
  var stripeMethod75 = StripeResource.method;
  var Products = StripeResource.extend({
    create: stripeMethod75({ method: "POST", fullPath: "/v1/products" }),
    retrieve: stripeMethod75({ method: "GET", fullPath: "/v1/products/{id}" }),
    update: stripeMethod75({ method: "POST", fullPath: "/v1/products/{id}" }),
    list: stripeMethod75({
      method: "GET",
      fullPath: "/v1/products",
      methodType: "list"
    }),
    del: stripeMethod75({ method: "DELETE", fullPath: "/v1/products/{id}" }),
    search: stripeMethod75({
      method: "GET",
      fullPath: "/v1/products/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/PromotionCodes.js
  var stripeMethod76 = StripeResource.method;
  var PromotionCodes = StripeResource.extend({
    create: stripeMethod76({ method: "POST", fullPath: "/v1/promotion_codes" }),
    retrieve: stripeMethod76({
      method: "GET",
      fullPath: "/v1/promotion_codes/{promotion_code}"
    }),
    update: stripeMethod76({
      method: "POST",
      fullPath: "/v1/promotion_codes/{promotion_code}"
    }),
    list: stripeMethod76({
      method: "GET",
      fullPath: "/v1/promotion_codes",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Quotes.js
  var stripeMethod77 = StripeResource.method;
  var Quotes = StripeResource.extend({
    create: stripeMethod77({ method: "POST", fullPath: "/v1/quotes" }),
    retrieve: stripeMethod77({ method: "GET", fullPath: "/v1/quotes/{quote}" }),
    update: stripeMethod77({ method: "POST", fullPath: "/v1/quotes/{quote}" }),
    list: stripeMethod77({
      method: "GET",
      fullPath: "/v1/quotes",
      methodType: "list"
    }),
    accept: stripeMethod77({ method: "POST", fullPath: "/v1/quotes/{quote}/accept" }),
    cancel: stripeMethod77({ method: "POST", fullPath: "/v1/quotes/{quote}/cancel" }),
    finalizeQuote: stripeMethod77({
      method: "POST",
      fullPath: "/v1/quotes/{quote}/finalize"
    }),
    listComputedUpfrontLineItems: stripeMethod77({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
      methodType: "list"
    }),
    listLineItems: stripeMethod77({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/line_items",
      methodType: "list"
    }),
    pdf: stripeMethod77({
      method: "GET",
      fullPath: "/v1/quotes/{quote}/pdf",
      host: "files.stripe.com",
      streaming: true
    })
  });

  // node_modules/stripe/esm/resources/Refunds.js
  var stripeMethod78 = StripeResource.method;
  var Refunds2 = StripeResource.extend({
    create: stripeMethod78({ method: "POST", fullPath: "/v1/refunds" }),
    retrieve: stripeMethod78({ method: "GET", fullPath: "/v1/refunds/{refund}" }),
    update: stripeMethod78({ method: "POST", fullPath: "/v1/refunds/{refund}" }),
    list: stripeMethod78({
      method: "GET",
      fullPath: "/v1/refunds",
      methodType: "list"
    }),
    cancel: stripeMethod78({
      method: "POST",
      fullPath: "/v1/refunds/{refund}/cancel"
    })
  });

  // node_modules/stripe/esm/resources/Reviews.js
  var stripeMethod79 = StripeResource.method;
  var Reviews = StripeResource.extend({
    retrieve: stripeMethod79({ method: "GET", fullPath: "/v1/reviews/{review}" }),
    list: stripeMethod79({
      method: "GET",
      fullPath: "/v1/reviews",
      methodType: "list"
    }),
    approve: stripeMethod79({
      method: "POST",
      fullPath: "/v1/reviews/{review}/approve"
    })
  });

  // node_modules/stripe/esm/resources/SetupAttempts.js
  var stripeMethod80 = StripeResource.method;
  var SetupAttempts = StripeResource.extend({
    list: stripeMethod80({
      method: "GET",
      fullPath: "/v1/setup_attempts",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/SetupIntents.js
  var stripeMethod81 = StripeResource.method;
  var SetupIntents = StripeResource.extend({
    create: stripeMethod81({ method: "POST", fullPath: "/v1/setup_intents" }),
    retrieve: stripeMethod81({
      method: "GET",
      fullPath: "/v1/setup_intents/{intent}"
    }),
    update: stripeMethod81({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}"
    }),
    list: stripeMethod81({
      method: "GET",
      fullPath: "/v1/setup_intents",
      methodType: "list"
    }),
    cancel: stripeMethod81({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/cancel"
    }),
    confirm: stripeMethod81({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/confirm"
    }),
    verifyMicrodeposits: stripeMethod81({
      method: "POST",
      fullPath: "/v1/setup_intents/{intent}/verify_microdeposits"
    })
  });

  // node_modules/stripe/esm/resources/ShippingRates.js
  var stripeMethod82 = StripeResource.method;
  var ShippingRates = StripeResource.extend({
    create: stripeMethod82({ method: "POST", fullPath: "/v1/shipping_rates" }),
    retrieve: stripeMethod82({
      method: "GET",
      fullPath: "/v1/shipping_rates/{shipping_rate_token}"
    }),
    update: stripeMethod82({
      method: "POST",
      fullPath: "/v1/shipping_rates/{shipping_rate_token}"
    }),
    list: stripeMethod82({
      method: "GET",
      fullPath: "/v1/shipping_rates",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Sources.js
  var stripeMethod83 = StripeResource.method;
  var Sources = StripeResource.extend({
    create: stripeMethod83({ method: "POST", fullPath: "/v1/sources" }),
    retrieve: stripeMethod83({ method: "GET", fullPath: "/v1/sources/{source}" }),
    update: stripeMethod83({ method: "POST", fullPath: "/v1/sources/{source}" }),
    listSourceTransactions: stripeMethod83({
      method: "GET",
      fullPath: "/v1/sources/{source}/source_transactions",
      methodType: "list"
    }),
    verify: stripeMethod83({
      method: "POST",
      fullPath: "/v1/sources/{source}/verify"
    })
  });

  // node_modules/stripe/esm/resources/SubscriptionItems.js
  var stripeMethod84 = StripeResource.method;
  var SubscriptionItems = StripeResource.extend({
    create: stripeMethod84({ method: "POST", fullPath: "/v1/subscription_items" }),
    retrieve: stripeMethod84({
      method: "GET",
      fullPath: "/v1/subscription_items/{item}"
    }),
    update: stripeMethod84({
      method: "POST",
      fullPath: "/v1/subscription_items/{item}"
    }),
    list: stripeMethod84({
      method: "GET",
      fullPath: "/v1/subscription_items",
      methodType: "list"
    }),
    del: stripeMethod84({
      method: "DELETE",
      fullPath: "/v1/subscription_items/{item}"
    }),
    createUsageRecord: stripeMethod84({
      method: "POST",
      fullPath: "/v1/subscription_items/{subscription_item}/usage_records"
    }),
    listUsageRecordSummaries: stripeMethod84({
      method: "GET",
      fullPath: "/v1/subscription_items/{subscription_item}/usage_record_summaries",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/SubscriptionSchedules.js
  var stripeMethod85 = StripeResource.method;
  var SubscriptionSchedules = StripeResource.extend({
    create: stripeMethod85({
      method: "POST",
      fullPath: "/v1/subscription_schedules"
    }),
    retrieve: stripeMethod85({
      method: "GET",
      fullPath: "/v1/subscription_schedules/{schedule}"
    }),
    update: stripeMethod85({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}"
    }),
    list: stripeMethod85({
      method: "GET",
      fullPath: "/v1/subscription_schedules",
      methodType: "list"
    }),
    cancel: stripeMethod85({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}/cancel"
    }),
    release: stripeMethod85({
      method: "POST",
      fullPath: "/v1/subscription_schedules/{schedule}/release"
    })
  });

  // node_modules/stripe/esm/resources/Subscriptions.js
  var stripeMethod86 = StripeResource.method;
  var Subscriptions = StripeResource.extend({
    create: stripeMethod86({ method: "POST", fullPath: "/v1/subscriptions" }),
    retrieve: stripeMethod86({
      method: "GET",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    update: stripeMethod86({
      method: "POST",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    list: stripeMethod86({
      method: "GET",
      fullPath: "/v1/subscriptions",
      methodType: "list"
    }),
    cancel: stripeMethod86({
      method: "DELETE",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    del: stripeMethod86({
      method: "DELETE",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    deleteDiscount: stripeMethod86({
      method: "DELETE",
      fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount"
    }),
    resume: stripeMethod86({
      method: "POST",
      fullPath: "/v1/subscriptions/{subscription}/resume"
    }),
    search: stripeMethod86({
      method: "GET",
      fullPath: "/v1/subscriptions/search",
      methodType: "search"
    })
  });

  // node_modules/stripe/esm/resources/TaxCodes.js
  var stripeMethod87 = StripeResource.method;
  var TaxCodes = StripeResource.extend({
    retrieve: stripeMethod87({ method: "GET", fullPath: "/v1/tax_codes/{id}" }),
    list: stripeMethod87({
      method: "GET",
      fullPath: "/v1/tax_codes",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/TaxRates.js
  var stripeMethod88 = StripeResource.method;
  var TaxRates = StripeResource.extend({
    create: stripeMethod88({ method: "POST", fullPath: "/v1/tax_rates" }),
    retrieve: stripeMethod88({ method: "GET", fullPath: "/v1/tax_rates/{tax_rate}" }),
    update: stripeMethod88({ method: "POST", fullPath: "/v1/tax_rates/{tax_rate}" }),
    list: stripeMethod88({
      method: "GET",
      fullPath: "/v1/tax_rates",
      methodType: "list"
    })
  });

  // node_modules/stripe/esm/resources/Tokens.js
  var stripeMethod89 = StripeResource.method;
  var Tokens = StripeResource.extend({
    create: stripeMethod89({ method: "POST", fullPath: "/v1/tokens" }),
    retrieve: stripeMethod89({ method: "GET", fullPath: "/v1/tokens/{token}" })
  });

  // node_modules/stripe/esm/resources/Topups.js
  var stripeMethod90 = StripeResource.method;
  var Topups = StripeResource.extend({
    create: stripeMethod90({ method: "POST", fullPath: "/v1/topups" }),
    retrieve: stripeMethod90({ method: "GET", fullPath: "/v1/topups/{topup}" }),
    update: stripeMethod90({ method: "POST", fullPath: "/v1/topups/{topup}" }),
    list: stripeMethod90({
      method: "GET",
      fullPath: "/v1/topups",
      methodType: "list"
    }),
    cancel: stripeMethod90({ method: "POST", fullPath: "/v1/topups/{topup}/cancel" })
  });

  // node_modules/stripe/esm/resources/Transfers.js
  var stripeMethod91 = StripeResource.method;
  var Transfers = StripeResource.extend({
    create: stripeMethod91({ method: "POST", fullPath: "/v1/transfers" }),
    retrieve: stripeMethod91({ method: "GET", fullPath: "/v1/transfers/{transfer}" }),
    update: stripeMethod91({ method: "POST", fullPath: "/v1/transfers/{transfer}" }),
    list: stripeMethod91({
      method: "GET",
      fullPath: "/v1/transfers",
      methodType: "list"
    }),
    createReversal: stripeMethod91({
      method: "POST",
      fullPath: "/v1/transfers/{id}/reversals"
    }),
    listReversals: stripeMethod91({
      method: "GET",
      fullPath: "/v1/transfers/{id}/reversals",
      methodType: "list"
    }),
    retrieveReversal: stripeMethod91({
      method: "GET",
      fullPath: "/v1/transfers/{transfer}/reversals/{id}"
    }),
    updateReversal: stripeMethod91({
      method: "POST",
      fullPath: "/v1/transfers/{transfer}/reversals/{id}"
    })
  });

  // node_modules/stripe/esm/resources/WebhookEndpoints.js
  var stripeMethod92 = StripeResource.method;
  var WebhookEndpoints = StripeResource.extend({
    create: stripeMethod92({ method: "POST", fullPath: "/v1/webhook_endpoints" }),
    retrieve: stripeMethod92({
      method: "GET",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    }),
    update: stripeMethod92({
      method: "POST",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    }),
    list: stripeMethod92({
      method: "GET",
      fullPath: "/v1/webhook_endpoints",
      methodType: "list"
    }),
    del: stripeMethod92({
      method: "DELETE",
      fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    })
  });

  // node_modules/stripe/esm/resources.js
  var Apps = resourceNamespace("apps", { Secrets });
  var BillingPortal = resourceNamespace("billingPortal", {
    Configurations,
    Sessions
  });
  var Checkout = resourceNamespace("checkout", {
    Sessions: Sessions2
  });
  var FinancialConnections = resourceNamespace("financialConnections", {
    Accounts,
    Sessions: Sessions3
  });
  var Identity = resourceNamespace("identity", {
    VerificationReports,
    VerificationSessions
  });
  var Issuing = resourceNamespace("issuing", {
    Authorizations,
    Cardholders,
    Cards: Cards2,
    Disputes,
    Transactions
  });
  var Radar = resourceNamespace("radar", {
    EarlyFraudWarnings,
    ValueListItems,
    ValueLists
  });
  var Reporting = resourceNamespace("reporting", {
    ReportRuns,
    ReportTypes
  });
  var Sigma = resourceNamespace("sigma", {
    ScheduledQueryRuns
  });
  var Tax = resourceNamespace("tax", {
    Calculations,
    Settings,
    Transactions: Transactions2
  });
  var Terminal = resourceNamespace("terminal", {
    Configurations: Configurations2,
    ConnectionTokens,
    Locations,
    Readers: Readers2
  });
  var TestHelpers = resourceNamespace("testHelpers", {
    Customers,
    Refunds,
    TestClocks,
    Issuing: resourceNamespace("issuing", { Cards }),
    Terminal: resourceNamespace("terminal", {
      Readers
    }),
    Treasury: resourceNamespace("treasury", {
      InboundTransfers,
      OutboundPayments,
      OutboundTransfers,
      ReceivedCredits,
      ReceivedDebits
    })
  });
  var Treasury = resourceNamespace("treasury", {
    CreditReversals,
    DebitReversals,
    FinancialAccounts,
    InboundTransfers: InboundTransfers2,
    OutboundPayments: OutboundPayments2,
    OutboundTransfers: OutboundTransfers2,
    ReceivedCredits: ReceivedCredits2,
    ReceivedDebits: ReceivedDebits2,
    TransactionEntries,
    Transactions: Transactions3
  });

  // node_modules/stripe/esm/RequestSender.js
  var MAX_RETRY_AFTER_WAIT = 60;
  var RequestSender = class _RequestSender {
    constructor(stripe, maxBufferedRequestMetric) {
      this._stripe = stripe;
      this._maxBufferedRequestMetric = maxBufferedRequestMetric;
    }
    _addHeadersDirectlyToObject(obj, headers) {
      obj.requestId = headers["request-id"];
      obj.stripeAccount = obj.stripeAccount || headers["stripe-account"];
      obj.apiVersion = obj.apiVersion || headers["stripe-version"];
      obj.idempotencyKey = obj.idempotencyKey || headers["idempotency-key"];
    }
    _makeResponseEvent(requestEvent, statusCode, headers) {
      const requestEndTime = Date.now();
      const requestDurationMs = requestEndTime - requestEvent.request_start_time;
      return removeNullish({
        api_version: headers["stripe-version"],
        account: headers["stripe-account"],
        idempotency_key: headers["idempotency-key"],
        method: requestEvent.method,
        path: requestEvent.path,
        status: statusCode,
        request_id: this._getRequestId(headers),
        elapsed: requestDurationMs,
        request_start_time: requestEvent.request_start_time,
        request_end_time: requestEndTime
      });
    }
    _getRequestId(headers) {
      return headers["request-id"];
    }
    /**
     * Used by methods with spec.streaming === true. For these methods, we do not
     * buffer successful responses into memory or do parse them into stripe
     * objects, we delegate that all of that to the user and pass back the raw
     * http.Response object to the callback.
     *
     * (Unsuccessful responses shouldn't make it here, they should
     * still be buffered/parsed and handled by _jsonResponseHandler -- see
     * makeRequest)
     */
    _streamingResponseHandler(requestEvent, callback) {
      return (res) => {
        const headers = res.getHeaders();
        const streamCompleteCallback = () => {
          const responseEvent = this._makeResponseEvent(requestEvent, res.getStatusCode(), headers);
          this._stripe._emitter.emit("response", responseEvent);
          this._recordRequestMetrics(this._getRequestId(headers), responseEvent.elapsed);
        };
        const stream = res.toStream(streamCompleteCallback);
        this._addHeadersDirectlyToObject(stream, headers);
        return callback(null, stream);
      };
    }
    /**
     * Default handler for Stripe responses. Buffers the response into memory,
     * parses the JSON and returns it (i.e. passes it to the callback) if there
     * is no "error" field. Otherwise constructs/passes an appropriate Error.
     */
    _jsonResponseHandler(requestEvent, callback) {
      return (res) => {
        const headers = res.getHeaders();
        const requestId = this._getRequestId(headers);
        const statusCode = res.getStatusCode();
        const responseEvent = this._makeResponseEvent(requestEvent, statusCode, headers);
        this._stripe._emitter.emit("response", responseEvent);
        res.toJSON().then((jsonResponse) => {
          if (jsonResponse.error) {
            let err;
            if (typeof jsonResponse.error === "string") {
              jsonResponse.error = {
                type: jsonResponse.error,
                message: jsonResponse.error_description
              };
            }
            jsonResponse.error.headers = headers;
            jsonResponse.error.statusCode = statusCode;
            jsonResponse.error.requestId = requestId;
            if (statusCode === 401) {
              err = new StripeAuthenticationError(jsonResponse.error);
            } else if (statusCode === 403) {
              err = new StripePermissionError(jsonResponse.error);
            } else if (statusCode === 429) {
              err = new StripeRateLimitError(jsonResponse.error);
            } else {
              err = StripeError.generate(jsonResponse.error);
            }
            throw err;
          }
          return jsonResponse;
        }, (e) => {
          throw new StripeAPIError({
            message: "Invalid JSON received from the Stripe API",
            exception: e,
            requestId: headers["request-id"]
          });
        }).then((jsonResponse) => {
          this._recordRequestMetrics(requestId, responseEvent.elapsed);
          const rawResponse = res.getRawResponse();
          this._addHeadersDirectlyToObject(rawResponse, headers);
          Object.defineProperty(jsonResponse, "lastResponse", {
            enumerable: false,
            writable: false,
            value: rawResponse
          });
          callback(null, jsonResponse);
        }, (e) => callback(e, null));
      };
    }
    static _generateConnectionErrorMessage(requestRetries) {
      return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ""}`;
    }
    // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
    static _shouldRetry(res, numRetries, maxRetries, error) {
      if (error && numRetries === 0 && HttpClient.CONNECTION_CLOSED_ERROR_CODES.includes(error.code)) {
        return true;
      }
      if (numRetries >= maxRetries) {
        return false;
      }
      if (!res) {
        return true;
      }
      if (res.getHeaders()["stripe-should-retry"] === "false") {
        return false;
      }
      if (res.getHeaders()["stripe-should-retry"] === "true") {
        return true;
      }
      if (res.getStatusCode() === 409) {
        return true;
      }
      if (res.getStatusCode() >= 500) {
        return true;
      }
      return false;
    }
    _getSleepTimeInMS(numRetries, retryAfter = null) {
      const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
      const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
      let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(numRetries - 1, 2), maxNetworkRetryDelay);
      sleepSeconds *= 0.5 * (1 + Math.random());
      sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
      if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
        sleepSeconds = Math.max(sleepSeconds, retryAfter);
      }
      return sleepSeconds * 1e3;
    }
    // Max retries can be set on a per request basis. Favor those over the global setting
    _getMaxNetworkRetries(settings = {}) {
      return settings.maxNetworkRetries && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
    }
    _defaultIdempotencyKey(method, settings) {
      const maxRetries = this._getMaxNetworkRetries(settings);
      if (method === "POST" && maxRetries > 0) {
        return `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;
      }
      return null;
    }
    _makeHeaders(auth, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings) {
      const defaultHeaders = {
        // Use specified auth token or use default from this stripe instance:
        Authorization: auth ? `Bearer ${auth}` : this._stripe.getApiField("auth"),
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": this._getUserAgentString(),
        "X-Stripe-Client-User-Agent": clientUserAgent,
        "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
        "Stripe-Version": apiVersion,
        "Stripe-Account": this._stripe.getApiField("stripeAccount"),
        "Idempotency-Key": this._defaultIdempotencyKey(method, userSuppliedSettings)
      };
      const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
      if (methodHasPayload || contentLength) {
        if (!methodHasPayload) {
          emitWarning(`${method} method had non-zero contentLength but no payload is expected for this verb`);
        }
        defaultHeaders["Content-Length"] = contentLength;
      }
      return Object.assign(
        removeNullish(defaultHeaders),
        // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
        normalizeHeaders(userSuppliedHeaders)
      );
    }
    _getUserAgentString() {
      const packageVersion = this._stripe.getConstant("PACKAGE_VERSION");
      const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
      return `Stripe/v1 NodeBindings/${packageVersion} ${appInfo}`.trim();
    }
    _getTelemetryHeader() {
      if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
        const metrics = this._stripe._prevRequestMetrics.shift();
        return JSON.stringify({
          last_request_metrics: metrics
        });
      }
    }
    _recordRequestMetrics(requestId, requestDurationMs) {
      if (this._stripe.getTelemetryEnabled() && requestId) {
        if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric) {
          emitWarning("Request metrics buffer is full, dropping telemetry message.");
        } else {
          this._stripe._prevRequestMetrics.push({
            request_id: requestId,
            request_duration_ms: requestDurationMs
          });
        }
      }
    }
    _request(method, host, path, data, auth, options = {}, callback, requestDataProcessor = null) {
      let requestData;
      const retryRequest = (requestFn, apiVersion, headers, requestRetries, retryAfter) => {
        return setTimeout(requestFn, this._getSleepTimeInMS(requestRetries, retryAfter), apiVersion, headers, requestRetries + 1);
      };
      const makeRequest = (apiVersion, headers, numRetries) => {
        const timeout = options.settings && options.settings.timeout && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField("timeout");
        const req = this._stripe.getApiField("httpClient").makeRequest(host || this._stripe.getApiField("host"), this._stripe.getApiField("port"), path, method, headers, requestData, this._stripe.getApiField("protocol"), timeout);
        const requestStartTime = Date.now();
        const requestEvent = removeNullish({
          api_version: apiVersion,
          account: headers["Stripe-Account"],
          idempotency_key: headers["Idempotency-Key"],
          method,
          path,
          request_start_time: requestStartTime
        });
        const requestRetries = numRetries || 0;
        const maxRetries = this._getMaxNetworkRetries(options.settings || {});
        this._stripe._emitter.emit("request", requestEvent);
        req.then((res) => {
          if (_RequestSender._shouldRetry(res, requestRetries, maxRetries)) {
            return retryRequest(
              makeRequest,
              apiVersion,
              headers,
              requestRetries,
              // @ts-ignore
              res.getHeaders()["retry-after"]
            );
          } else if (options.streaming && res.getStatusCode() < 400) {
            return this._streamingResponseHandler(requestEvent, callback)(res);
          } else {
            return this._jsonResponseHandler(requestEvent, callback)(res);
          }
        }).catch((error) => {
          if (_RequestSender._shouldRetry(null, requestRetries, maxRetries, error)) {
            return retryRequest(makeRequest, apiVersion, headers, requestRetries, null);
          } else {
            const isTimeoutError = error.code && error.code === HttpClient.TIMEOUT_ERROR_CODE;
            return callback(new StripeConnectionError({
              message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : _RequestSender._generateConnectionErrorMessage(requestRetries),
              // @ts-ignore
              detail: error
            }));
          }
        });
      };
      const prepareAndMakeRequest = (error, data2) => {
        if (error) {
          return callback(error);
        }
        requestData = data2;
        this._stripe.getClientUserAgent((clientUserAgent) => {
          var _a, _b;
          const apiVersion = this._stripe.getApiField("version");
          const headers = this._makeHeaders(auth, requestData.length, apiVersion, clientUserAgent, method, (_a = options.headers) !== null && _a !== void 0 ? _a : null, (_b = options.settings) !== null && _b !== void 0 ? _b : {});
          makeRequest(apiVersion, headers, 0);
        });
      };
      if (requestDataProcessor) {
        requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
      } else {
        prepareAndMakeRequest(null, stringifyRequestData(data || {}));
      }
    }
  };

  // node_modules/stripe/esm/Webhooks.js
  function createWebhooks(platformFunctions) {
    const Webhook = {
      DEFAULT_TOLERANCE: 300,
      // @ts-ignore
      signature: null,
      constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
        try {
          this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
        } catch (e) {
          if (e instanceof CryptoProviderOnlySupportsAsyncError) {
            e.message += "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`";
          }
          throw e;
        }
        const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
        return jsonPayload;
      },
      async constructEventAsync(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
        await this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
        const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
        return jsonPayload;
      },
      /**
       * Generates a header to be used for webhook mocking
       *
       * @typedef {object} opts
       * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
       * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
       * @property {string} secret - Stripe webhook secret 'whsec_...'
       * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
       * @property {string} signature - Computed webhook signature
       * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
       */
      generateTestHeaderString: function(opts) {
        if (!opts) {
          throw new StripeError({
            message: "Options are required"
          });
        }
        opts.timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1e3);
        opts.scheme = opts.scheme || signature.EXPECTED_SCHEME;
        opts.cryptoProvider = opts.cryptoProvider || getCryptoProvider();
        opts.signature = opts.signature || opts.cryptoProvider.computeHMACSignature(opts.timestamp + "." + opts.payload, opts.secret);
        const generatedHeader = [
          "t=" + opts.timestamp,
          opts.scheme + "=" + opts.signature
        ].join(",");
        return generatedHeader;
      }
    };
    const signature = {
      EXPECTED_SCHEME: "v1",
      verifyHeader(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
        const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        const secretContainsWhitespace = /\s/.test(secret);
        cryptoProvider = cryptoProvider || getCryptoProvider();
        const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
        validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
        return true;
      },
      async verifyHeaderAsync(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
        const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
        const secretContainsWhitespace = /\s/.test(secret);
        cryptoProvider = cryptoProvider || getCryptoProvider();
        const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
        return validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
      }
    };
    function makeHMACContent(payload, details) {
      return `${details.timestamp}.${payload}`;
    }
    function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
      if (!encodedPayload) {
        throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
          message: "No webhook payload was provided."
        });
      }
      const suspectPayloadType = typeof encodedPayload != "string" && !(encodedPayload instanceof Uint8Array);
      const textDecoder = new TextDecoder("utf8");
      const decodedPayload = encodedPayload instanceof Uint8Array ? textDecoder.decode(encodedPayload) : encodedPayload;
      if (Array.isArray(encodedHeader)) {
        throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
      }
      if (encodedHeader == null || encodedHeader == "") {
        throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
          message: "No stripe-signature header value was provided."
        });
      }
      const decodedHeader = encodedHeader instanceof Uint8Array ? textDecoder.decode(encodedHeader) : encodedHeader;
      const details = parseHeader(decodedHeader, expectedScheme);
      if (!details || details.timestamp === -1) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
          message: "Unable to extract timestamp and signatures from header"
        });
      }
      if (!details.signatures.length) {
        throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
          message: "No signatures found with expected scheme"
        });
      }
      return {
        decodedPayload,
        decodedHeader,
        details,
        suspectPayloadType
      };
    }
    function validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt) {
      const signatureFound = !!details.signatures.filter(platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)).length;
      const docsLocation = "\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://github.com/stripe/stripe-node#webhook-signing";
      const whitespaceMessage = secretContainsWhitespace ? "\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value" : "";
      if (!signatureFound) {
        if (suspectPayloadType) {
          throw new StripeSignatureVerificationError(header, payload, {
            message: "Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n" + docsLocation + "\n" + whitespaceMessage
          });
        }
        throw new StripeSignatureVerificationError(header, payload, {
          message: "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n" + docsLocation + "\n" + whitespaceMessage
        });
      }
      const timestampAge = Math.floor((typeof receivedAt === "number" ? receivedAt : Date.now()) / 1e3) - details.timestamp;
      if (tolerance > 0 && timestampAge > tolerance) {
        throw new StripeSignatureVerificationError(header, payload, {
          message: "Timestamp outside the tolerance zone"
        });
      }
      return true;
    }
    function parseHeader(header, scheme) {
      if (typeof header !== "string") {
        return null;
      }
      return header.split(",").reduce((accum, item) => {
        const kv = item.split("=");
        if (kv[0] === "t") {
          accum.timestamp = parseInt(kv[1], 10);
        }
        if (kv[0] === scheme) {
          accum.signatures.push(kv[1]);
        }
        return accum;
      }, {
        timestamp: -1,
        signatures: []
      });
    }
    let webhooksCryptoProviderInstance = null;
    function getCryptoProvider() {
      if (!webhooksCryptoProviderInstance) {
        webhooksCryptoProviderInstance = platformFunctions.createDefaultCryptoProvider();
      }
      return webhooksCryptoProviderInstance;
    }
    Webhook.signature = signature;
    return Webhook;
  }

  // node_modules/stripe/esm/stripe.core.js
  var DEFAULT_HOST = "api.stripe.com";
  var DEFAULT_PORT = "443";
  var DEFAULT_BASE_PATH = "/v1/";
  var DEFAULT_API_VERSION = ApiVersion;
  var DEFAULT_TIMEOUT = 8e4;
  var MAX_NETWORK_RETRY_DELAY_SEC = 2;
  var INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
  var APP_INFO_PROPERTIES = ["name", "version", "url", "partner_id"];
  var ALLOWED_CONFIG_PROPERTIES = [
    "apiVersion",
    "typescript",
    "maxNetworkRetries",
    "httpAgent",
    "httpClient",
    "timeout",
    "host",
    "port",
    "protocol",
    "telemetry",
    "appInfo",
    "stripeAccount"
  ];
  var defaultRequestSenderFactory = (stripe) => new RequestSender(stripe, StripeResource.MAX_BUFFERED_REQUEST_METRICS);
  function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
    Stripe2.PACKAGE_VERSION = "12.18.0";
    Stripe2.USER_AGENT = Object.assign({ bindings_version: Stripe2.PACKAGE_VERSION, lang: "node", publisher: "stripe", uname: null, typescript: false }, determineProcessUserAgentProperties());
    Stripe2.StripeResource = StripeResource;
    Stripe2.resources = resources_exports;
    Stripe2.HttpClient = HttpClient;
    Stripe2.HttpClientResponse = HttpClientResponse;
    Stripe2.CryptoProvider = CryptoProvider;
    function Stripe2(key, config = {}) {
      if (!(this instanceof Stripe2)) {
        return new Stripe2(key, config);
      }
      const props = this._getPropsFromConfig(config);
      this._platformFunctions = platformFunctions;
      Object.defineProperty(this, "_emitter", {
        value: this._platformFunctions.createEmitter(),
        enumerable: false,
        configurable: false,
        writable: false
      });
      this.VERSION = Stripe2.PACKAGE_VERSION;
      this.on = this._emitter.on.bind(this._emitter);
      this.once = this._emitter.once.bind(this._emitter);
      this.off = this._emitter.removeListener.bind(this._emitter);
      if (props.protocol && props.protocol !== "https" && (!props.host || /\.stripe\.com$/.test(props.host))) {
        throw new Error("The `https` protocol must be used when sending requests to `*.stripe.com`");
      }
      const agent = props.httpAgent || null;
      this._api = {
        auth: null,
        host: props.host || DEFAULT_HOST,
        port: props.port || DEFAULT_PORT,
        protocol: props.protocol || "https",
        basePath: DEFAULT_BASE_PATH,
        version: props.apiVersion || DEFAULT_API_VERSION,
        timeout: validateInteger("timeout", props.timeout, DEFAULT_TIMEOUT),
        maxNetworkRetries: validateInteger("maxNetworkRetries", props.maxNetworkRetries, 0),
        agent,
        httpClient: props.httpClient || (agent ? this._platformFunctions.createNodeHttpClient(agent) : this._platformFunctions.createDefaultHttpClient()),
        dev: false,
        stripeAccount: props.stripeAccount || null
      };
      const typescript = props.typescript || false;
      if (typescript !== Stripe2.USER_AGENT.typescript) {
        Stripe2.USER_AGENT.typescript = typescript;
      }
      if (props.appInfo) {
        this._setAppInfo(props.appInfo);
      }
      this._prepResources();
      this._setApiKey(key);
      this.errors = Error_exports;
      this.webhooks = createWebhooks(platformFunctions);
      this._prevRequestMetrics = [];
      this._enableTelemetry = props.telemetry !== false;
      this._requestSender = requestSender(this);
      this.StripeResource = Stripe2.StripeResource;
    }
    Stripe2.errors = Error_exports;
    Stripe2.webhooks = createWebhooks;
    Stripe2.createNodeHttpClient = platformFunctions.createNodeHttpClient;
    Stripe2.createFetchHttpClient = platformFunctions.createFetchHttpClient;
    Stripe2.createNodeCryptoProvider = platformFunctions.createNodeCryptoProvider;
    Stripe2.createSubtleCryptoProvider = platformFunctions.createSubtleCryptoProvider;
    Stripe2.prototype = {
      // Properties are set in the constructor above
      _appInfo: void 0,
      on: null,
      off: null,
      once: null,
      VERSION: null,
      StripeResource: null,
      webhooks: null,
      errors: null,
      _api: null,
      _prevRequestMetrics: null,
      _emitter: null,
      _enableTelemetry: null,
      _requestSender: null,
      _platformFunctions: null,
      /**
       * @private
       */
      _setApiKey(key) {
        if (key) {
          this._setApiField("auth", `Bearer ${key}`);
        }
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _setAppInfo(info) {
        if (info && typeof info !== "object") {
          throw new Error("AppInfo must be an object.");
        }
        if (info && !info.name) {
          throw new Error("AppInfo.name is required");
        }
        info = info || {};
        this._appInfo = APP_INFO_PROPERTIES.reduce(
          (accum, prop) => {
            if (typeof info[prop] == "string") {
              accum = accum || {};
              accum[prop] = info[prop];
            }
            return accum;
          },
          // @ts-ignore
          void 0
        );
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _setApiField(key, value) {
        this._api[key] = value;
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       */
      getApiField(key) {
        return this._api[key];
      },
      setClientId(clientId) {
        this._clientId = clientId;
      },
      getClientId() {
        return this._clientId;
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       */
      getConstant: (c) => {
        switch (c) {
          case "DEFAULT_HOST":
            return DEFAULT_HOST;
          case "DEFAULT_PORT":
            return DEFAULT_PORT;
          case "DEFAULT_BASE_PATH":
            return DEFAULT_BASE_PATH;
          case "DEFAULT_API_VERSION":
            return DEFAULT_API_VERSION;
          case "DEFAULT_TIMEOUT":
            return DEFAULT_TIMEOUT;
          case "MAX_NETWORK_RETRY_DELAY_SEC":
            return MAX_NETWORK_RETRY_DELAY_SEC;
          case "INITIAL_NETWORK_RETRY_DELAY_SEC":
            return INITIAL_NETWORK_RETRY_DELAY_SEC;
        }
        return Stripe2[c];
      },
      getMaxNetworkRetries() {
        return this.getApiField("maxNetworkRetries");
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _setApiNumberField(prop, n, defaultVal) {
        const val = validateInteger(prop, n, defaultVal);
        this._setApiField(prop, val);
      },
      getMaxNetworkRetryDelay() {
        return MAX_NETWORK_RETRY_DELAY_SEC;
      },
      getInitialNetworkRetryDelay() {
        return INITIAL_NETWORK_RETRY_DELAY_SEC;
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       *
       * Gets a JSON version of a User-Agent and uses a cached version for a slight
       * speed advantage.
       */
      getClientUserAgent(cb) {
        return this.getClientUserAgentSeeded(Stripe2.USER_AGENT, cb);
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       *
       * Gets a JSON version of a User-Agent by encoding a seeded object and
       * fetching a uname from the system.
       */
      getClientUserAgentSeeded(seed, cb) {
        this._platformFunctions.getUname().then((uname) => {
          var _a;
          const userAgent = {};
          for (const field in seed) {
            userAgent[field] = encodeURIComponent((_a = seed[field]) !== null && _a !== void 0 ? _a : "null");
          }
          userAgent.uname = encodeURIComponent(uname || "UNKNOWN");
          const client = this.getApiField("httpClient");
          if (client) {
            userAgent.httplib = encodeURIComponent(client.getClientName());
          }
          if (this._appInfo) {
            userAgent.application = this._appInfo;
          }
          cb(JSON.stringify(userAgent));
        });
      },
      /**
       * @private
       * Please open or upvote an issue at github.com/stripe/stripe-node
       * if you use this, detailing your use-case.
       *
       * It may be deprecated and removed in the future.
       */
      getAppInfoAsString() {
        if (!this._appInfo) {
          return "";
        }
        let formatted = this._appInfo.name;
        if (this._appInfo.version) {
          formatted += `/${this._appInfo.version}`;
        }
        if (this._appInfo.url) {
          formatted += ` (${this._appInfo.url})`;
        }
        return formatted;
      },
      getTelemetryEnabled() {
        return this._enableTelemetry;
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _prepResources() {
        for (const name in resources_exports) {
          this[pascalToCamelCase(name)] = new resources_exports[name](this);
        }
      },
      /**
       * @private
       * This may be removed in the future.
       */
      _getPropsFromConfig(config) {
        if (!config) {
          return {};
        }
        const isString2 = typeof config === "string";
        const isObject3 = config === Object(config) && !Array.isArray(config);
        if (!isObject3 && !isString2) {
          throw new Error("Config must either be an object or a string");
        }
        if (isString2) {
          return {
            apiVersion: config
          };
        }
        const values = Object.keys(config).filter((value) => !ALLOWED_CONFIG_PROPERTIES.includes(value));
        if (values.length > 0) {
          throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(", ")}`);
        }
        return config;
      }
    };
    return Stripe2;
  }

  // node_modules/stripe/esm/stripe.esm.worker.js
  var Stripe = createStripe(new WebPlatformFunctions());
  var stripe_esm_worker_default = Stripe;

  // public/js/stripe.js
  var bookTour = async (tourId) => {
    try {
      const stripePublic = "pk_test_51P0laACR8u9v4Hti4JkIdBQu48qGD1ZYzUS92dMsjmaVkqXqHc86uP5qGi3DHrvlpNV0wSZXP0ORkItacrZ2LFpX00fWNw77hn";
      const stripe = new stripe_esm_worker_default(stripePublic);
      const session = await axios_default(`/api/v1/bookings/checkout-session/${tourId}`);
      window.location.replace(session.data.session.url);
    } catch (err) {
      showAlert2("error", err);
    }
  };

  // public/js/manageTours.js
  var addTourBtn = document.querySelector("#add-tour-btn");
  var locationBtn = document.querySelector("#location-btn");
  if (addTourBtn)
    addTourBtn.addEventListener("click", (e) => {
      const addTourModal = new Modal("#add-tour-modal");
      addTourModal.show();
    });
  if (locationBtn)
    locationBtn.addEventListener("click", (e) => {
      const locationModal = new Modal("#location-modal");
      locationModal.show();
    });
  var addTour = async (tour) => {
    try {
      console.log("step 33:", tour);
      const res = await axios_default.post("/api/v1/tours", tour);
      if (res.data.status === "success") {
        showAlert("success", "Logged in successfully");
        window.setTimeout(() => {
          location.assign("/manage-users");
        }, 1e3);
      }
    } catch (error) {
      console.log("step 55", error);
    }
  };

  // public/js/manageUsers.js
  var addUser = async (user) => {
    try {
      console.log("step 33:", user);
      const res = await axios_default.post("/api/v1/users", user);
      if (res.data.status === "success") {
        showAlert2("success", "Logged in successfully");
        window.setTimeout(() => {
          location.assign("/manage-users");
        }, 1e3);
      }
    } catch (error) {
      console.log("step 55", error);
    }
  };
  var editUser = async (user, id) => {
    try {
      console.log("step 33:", user, id);
      const res = await axios_default.put("/api/v1/users/" + id, user);
      if (res.data.status === "success") {
      }
    } catch (error) {
      console.log("step 55", error);
    }
  };
  var deleteUser = async (id) => {
    try {
      const res = await axios_default.delete("/api/v1/users/" + id);
      if (res.data.status === "success") {
        window.setTimeout(() => {
          location.assign("/manage-users");
        }, 1e3);
      }
    } catch (error) {
      console.log("step 55", error);
    }
  };

  // public/js/index.js
  var loginForm = document.querySelector("form.form--login");
  var logOutBtn = document.querySelector(".nav__el--logout");
  var userDataForm = document.querySelector(".form-user-data");
  var userPasswordForm = document.querySelector(".form-user-password");
  var bookBtn = document.querySelector("#book-tour");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      await login(email, password);
    });
  }
  if (logOutBtn)
    logOutBtn.addEventListener("click", logout);
  if (userDataForm)
    userDataForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append("name", document.getElementById("name").value);
      form.append("email", document.getElementById("email").value);
      form.append("photo", document.getElementById("photo").files[0]);
      updateSettings(form, "data");
    });
  if (userPasswordForm)
    userPasswordForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      document.querySelector(".btn--save-password").textContent = "Updating...";
      const passwordCurrent = document.getElementById("password-current").value;
      const password = document.getElementById("password").value;
      const passwordConfirm = document.getElementById("password-confirm").value;
      await updateSettings(
        { passwordCurrent, password, passwordConfirm },
        "password"
      );
      document.querySelector(".btn--save-password").textContent = "Save password";
      document.getElementById("password-current").value = document.getElementById("password").value = document.getElementById("password-confirm").value = "";
    });
  if (bookBtn) {
    bookBtn.addEventListener("click", (e) => {
      e.target.textContent = "Processing";
      const { tourId } = e.target.dataset;
      bookTour(tourId);
    });
  }
  var addUserForm = document.querySelector("#add-user-form");
  if (addUserForm) {
    console.log("step 22 :", addUserForm);
    const addUserModal = new Modal("#userModal");
    addUserForm.addEventListener("submit", async (e) => {
      console.log("d");
      e.preventDefault();
      const form = new FormData();
      form.append("name", document.querySelector("#name_manage_users").value);
      form.append("email", document.querySelector("#email_manage_users").value);
      form.append("role", document.querySelector("#role_manage_users").value);
      form.append("password", document.querySelector("#password_manage_users").value);
      form.append("photo", document.getElementById("photo").files[0]);
      console.log("form", form);
      await addUser(form);
      document.querySelector("#name_manage_users").value = "";
      document.querySelector("#email_manage_users").value = "";
      document.querySelector("#password_manage_users").value = "";
      document.getElementById("photo").files[0] = "";
      addUserModal.hide();
    });
  }
  var searchUser = document.querySelector("#search-manage-users");
  if (searchUser) {
    searchUser.addEventListener("submit", (e) => {
      e.preventDefault();
      location.assign(location.origin + location.pathname + "?search=" + document.querySelector("#search-name-manage-users").value);
    });
  }
  var editUserForm = document.querySelector("#edit-user-form");
  if (editUserForm) {
    const userModal2 = new Modal("#editUserModal");
    editUserForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = new FormData();
      const id = document.querySelector("form#edit-user-form #edit_id_manage_users").value;
      form.append("name", document.querySelector("form#edit-user-form #edit_name_manage_users").value);
      form.append("email", document.querySelector("form#edit-user-form #edit_email_manage_users").value);
      form.append("role", document.querySelector("form#edit-user-form #edit_role_manage_users").value);
      if (document.querySelector("form#edit-user-form #edit_password_manage_users").value)
        form.append("password", document.querySelector("form#edit-user-form #edit_password_manage_users").value);
      if (document.querySelector("form#edit-user-form #edit_photo").files[0])
        form.append("photo", document.querySelector("form#edit-user-form #edit_photo").files[0]);
      console.log("photo :", document.querySelector("form#edit-user-form #edit_photo").files);
      console.log("form", form);
      await editUser(form, id);
      userModal2.hide();
    });
  }
  var editUserBtn = document.querySelectorAll("#edit-user-btn");
  if (editUserBtn) {
    editUserBtn.forEach((node, index) => {
      node.addEventListener("click", () => {
        console.log("id", document.querySelector(`#user-table table.table.table-success tbody tr #id-${index}`).innerHTML);
        document.querySelector("#edit_id_manage_users").value = document.querySelector(`#user-table table.table.table-success tbody tr #id-${index}`).innerHTML;
        document.querySelector("#edit_name_manage_users").value = document.querySelector(`#user-table table.table.table-success tbody tr #name-${index}`).innerHTML;
        document.querySelector("#edit_email_manage_users").value = document.querySelector(`#user-table table.table.table-success tbody tr #email-${index}`).innerHTML;
        document.querySelector("#edit_role_manage_users").value = document.querySelector(`#user-table table.table.table-success tbody tr #role-${index}`).innerHTML;
        userModal.show();
      });
    });
  }
  var deleteBtns = document.querySelectorAll("#user-table.table-responsive tbody tr td a#delete-btn");
  if (deleteBtns) {
    deleteBtns.forEach((node, index) => {
      const id = document.querySelector(`#user-table table.table.table-success tbody tr #id-${index}`).innerHTML;
      node.addEventListener("click", async () => {
        const result = confirm("Are you sure ?");
        console.log("res", result);
        if (result)
          await deleteUser(id);
      });
    });
  }
  var addTourBtn2 = document.querySelector("#add-tour-btn");
  if (addTourBtn2) {
    addTourBtn2.addEventListener("click", () => {
    });
  }
  var addTourForm = document.querySelector("#add-tour-form");
  if (addTourForm) {
    console.log("step 22 :", addUserForm);
    addTourForm.addEventListener("submit", async (e) => {
      console.log("d");
      e.preventDefault();
      const form = new FormData();
      let guides = [];
      form.append("name", document.querySelector("#name_manage_tours").value);
      form.append("slug", document.querySelector("#link_name_manage_tours").value);
      form.append("duration", document.querySelector("#duration_manage_tours").value);
      form.append("difficulty", document.querySelector("#difficulty_manage_tours").value);
      form.append("price", document.querySelector("#price_manage_tours").value);
      document.querySelectorAll("#guides_checkbox").forEach((node) => {
        if (node.checked)
          guides.push(node.value);
      });
      form.append("guides", guides);
      form.append("maxGroupSize", document.querySelector("#participants_manage_tours").value);
      form.append("summary", document.querySelector("#summary_manage_tours").value);
      form.append("description", document.querySelector("#description_manage_tours").value);
      form.append("imageCover", document.getElementById("image_cover_manage_tours").files[0]);
      console.log("form", form);
      await addTour(form);
      document.querySelector("#name_manage_tours").value = "";
      document.querySelector("#link_name_manage_tours").value = "";
      document.querySelector("#duration_manage_tours").value = "";
      document.querySelector("#duration_manage_tours").value = "";
      document.querySelector("#price_manage_tours").value = "";
      document.querySelector("#participants_manage_tours").value = "";
      document.querySelector("#summary_manage_tours").value = "";
      document.querySelector("#description_manage_tours").value = "";
      document.querySelector("tour-modal-close").click();
    });
  }
})();
/*! Bundled license information:

bootstrap/dist/js/bootstrap.esm.js:
  (*!
    * Bootstrap v5.3.3 (https://getbootstrap.com/)
    * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=bundle.js.map
