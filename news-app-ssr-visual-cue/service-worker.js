(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
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
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
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
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
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
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

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
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


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
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
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
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
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
      complete: function complete(record, afterLoc) {
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
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
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
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" ? module.exports : {});

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }

  function generateCard(article) {
    var today = new Date();
    var added = new Date(article.added);
    var difference = parseInt((today - added) / (1000 * 3600));
    return "\n<div class=\"col-md-4\">\n  <div class=\"card mb-4 shadow-sm\" data-cache=\"http://localhost:3000/api/news/".concat(article.id, "\">\n    <div class=\"card-body\">\n      <p class=\"card-text\">").concat(article.slug, "</p>\n      <div class=\"d-flex justify-content-between align-items-center\">\n        <div class=\"btn-group\">\n          <a href=\"news/").concat(article.id, "\" class=\"btn btn-sm btn-outline-primary read-more\">Read more</a>\n          <a class=\"btn btn-sm btn-outline-secondary read-later\" data-cache=\"http://localhost:3000/api/news/").concat(article.id, "\" on>Read later</a>\n        </div>\n        <small class=\"text-muted\">").concat(difference === 1 ? "".concat(difference, " hour ago") : "".concat(difference, " hours ago"), "</small>\n      </div>\n    </div>\n  </div>\n</div>");
  }
  function generateArticle(article) {
    var today = new Date();
    var added = new Date(article.added);
    var difference = parseInt((today - added) / (1000 * 3600));
    return "<div class=\"col-md-12\">\n    <h2>".concat(article.title, "</h2>\n    <p>Written by <strong>").concat(article.author, "</strong> <small class=\"text-muted\">").concat(difference === 1 ? "".concat(difference, " hour ago") : "".concat(difference, " hours ago"), "</small></p>\n    <p>").concat(article.body, "</p>\n    <p><small><a href=\"/\">Go back</small></p>\n  </div>");
  }

  try {
    self['workbox:core:6.0.2'] && _();
  } catch (e) {}

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  var _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : ''
  };

  /**
   * A class that wraps common IndexedDB functionality in a promise-based API.
   * It exposes all the underlying power and functionality of IndexedDB, but
   * wraps the most commonly used features in a way that's much simpler to use.
   *
   * @private
   */

  var DBWrapper = /*#__PURE__*/function () {
    /**
     * @param {string} name
     * @param {number} version
     * @param {Object=} [callback]
     * @param {!Function} [callbacks.onupgradeneeded]
     * @param {!Function} [callbacks.onversionchange] Defaults to
     *     DBWrapper.prototype._onversionchange when not specified.
     * @private
     */
    function DBWrapper(name, version) {
      var _this = this;

      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          onupgradeneeded = _ref.onupgradeneeded,
          onversionchange = _ref.onversionchange;

      _classCallCheck(this, DBWrapper);

      this._db = null;
      this._name = name;
      this._version = version;
      this._onupgradeneeded = onupgradeneeded;

      this._onversionchange = onversionchange || function () {
        return _this.close();
      };
    }
    /**
     * Returns the IDBDatabase instance (not normally needed).
     * @return {IDBDatabase|undefined}
     *
     * @private
     */


    _createClass(DBWrapper, [{
      key: "open",

      /**
       * Opens a connected to an IDBDatabase, invokes any onupgradedneeded
       * callback, and added an onversionchange callback to the database.
       *
       * @return {IDBDatabase}
       * @private
       */
      value: function () {
        var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this2 = this;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!this._db) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _context.next = 4;
                  return new Promise(function (resolve, reject) {
                    // This flag is flipped to true if the timeout callback runs prior
                    // to the request failing or succeeding. Note: we use a timeout instead
                    // of an onblocked handler since there are cases where onblocked will
                    // never never run. A timeout better handles all possible scenarios:
                    // https://github.com/w3c/IndexedDB/issues/223
                    var openRequestTimedOut = false;
                    setTimeout(function () {
                      openRequestTimedOut = true;
                      reject(new Error('The open request was blocked and timed out'));
                    }, _this2.OPEN_TIMEOUT);
                    var openRequest = indexedDB.open(_this2._name, _this2._version);

                    openRequest.onerror = function () {
                      return reject(openRequest.error);
                    };

                    openRequest.onupgradeneeded = function (evt) {
                      if (openRequestTimedOut) {
                        openRequest.transaction.abort();
                        openRequest.result.close();
                      } else if (typeof _this2._onupgradeneeded === 'function') {
                        _this2._onupgradeneeded(evt);
                      }
                    };

                    openRequest.onsuccess = function () {
                      var db = openRequest.result;

                      if (openRequestTimedOut) {
                        db.close();
                      } else {
                        db.onversionchange = _this2._onversionchange.bind(_this2);
                        resolve(db);
                      }
                    };
                  });

                case 4:
                  this._db = _context.sent;
                  return _context.abrupt("return", this);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function open() {
          return _open.apply(this, arguments);
        }

        return open;
      }()
      /**
       * Polyfills the native `getKey()` method. Note, this is overridden at
       * runtime if the browser supports the native method.
       *
       * @param {string} storeName
       * @param {*} query
       * @return {Array}
       * @private
       */

    }, {
      key: "getKey",
      value: function () {
        var _getKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(storeName, query) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.getAllKeys(storeName, query, 1);

                case 2:
                  return _context2.abrupt("return", _context2.sent[0]);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function getKey(_x, _x2) {
          return _getKey.apply(this, arguments);
        }

        return getKey;
      }()
      /**
       * Polyfills the native `getAll()` method. Note, this is overridden at
       * runtime if the browser supports the native method.
       *
       * @param {string} storeName
       * @param {*} query
       * @param {number} count
       * @return {Array}
       * @private
       */

    }, {
      key: "getAll",
      value: function () {
        var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(storeName, query, count) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.getAllMatching(storeName, {
                    query: query,
                    count: count
                  });

                case 2:
                  return _context3.abrupt("return", _context3.sent);

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function getAll(_x3, _x4, _x5) {
          return _getAll.apply(this, arguments);
        }

        return getAll;
      }()
      /**
       * Polyfills the native `getAllKeys()` method. Note, this is overridden at
       * runtime if the browser supports the native method.
       *
       * @param {string} storeName
       * @param {*} query
       * @param {number} count
       * @return {Array}
       * @private
       */

    }, {
      key: "getAllKeys",
      value: function () {
        var _getAllKeys = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(storeName, query, count) {
          var entries;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.getAllMatching(storeName, {
                    query: query,
                    count: count,
                    includeKeys: true
                  });

                case 2:
                  entries = _context4.sent;
                  return _context4.abrupt("return", entries.map(function (entry) {
                    return entry.key;
                  }));

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function getAllKeys(_x6, _x7, _x8) {
          return _getAllKeys.apply(this, arguments);
        }

        return getAllKeys;
      }()
      /**
       * Supports flexible lookup in an object store by specifying an index,
       * query, direction, and count. This method returns an array of objects
       * with the signature .
       *
       * @param {string} storeName
       * @param {Object} [opts]
       * @param {string} [opts.index] The index to use (if specified).
       * @param {*} [opts.query]
       * @param {IDBCursorDirection} [opts.direction]
       * @param {number} [opts.count] The max number of results to return.
       * @param {boolean} [opts.includeKeys] When true, the structure of the
       *     returned objects is changed from an array of values to an array of
       *     objects in the form {key, primaryKey, value}.
       * @return {Array}
       * @private
       */

    }, {
      key: "getAllMatching",
      value: function () {
        var _getAllMatching = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(storeName) {
          var _ref2,
              index,
              _ref2$query,
              query,
              _ref2$direction,
              direction,
              count,
              _ref2$includeKeys,
              includeKeys,
              _args5 = arguments;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _ref2 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, index = _ref2.index, _ref2$query = _ref2.query, query = _ref2$query === void 0 ? null : _ref2$query, _ref2$direction = _ref2.direction, direction = _ref2$direction === void 0 ? 'next' : _ref2$direction, count = _ref2.count, _ref2$includeKeys = _ref2.includeKeys, includeKeys = _ref2$includeKeys === void 0 ? false : _ref2$includeKeys;
                  _context5.next = 3;
                  return this.transaction([storeName], 'readonly', function (txn, done) {
                    var store = txn.objectStore(storeName);
                    var target = index ? store.index(index) : store;
                    var results = [];
                    var request = target.openCursor(query, direction);

                    request.onsuccess = function () {
                      var cursor = request.result;

                      if (cursor) {
                        results.push(includeKeys ? cursor : cursor.value);

                        if (count && results.length >= count) {
                          done(results);
                        } else {
                          cursor["continue"]();
                        }
                      } else {
                        done(results);
                      }
                    };
                  });

                case 3:
                  return _context5.abrupt("return", _context5.sent);

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function getAllMatching(_x9) {
          return _getAllMatching.apply(this, arguments);
        }

        return getAllMatching;
      }()
      /**
       * Accepts a list of stores, a transaction type, and a callback and
       * performs a transaction. A promise is returned that resolves to whatever
       * value the callback chooses. The callback holds all the transaction logic
       * and is invoked with two arguments:
       *   1. The IDBTransaction object
       *   2. A `done` function, that's used to resolve the promise when
       *      when the transaction is done, if passed a value, the promise is
       *      resolved to that value.
       *
       * @param {Array<string>} storeNames An array of object store names
       *     involved in the transaction.
       * @param {string} type Can be `readonly` or `readwrite`.
       * @param {!Function} callback
       * @return {*} The result of the transaction ran by the callback.
       * @private
       */

    }, {
      key: "transaction",
      value: function () {
        var _transaction = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(storeNames, type, callback) {
          var _this3 = this;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.open();

                case 2:
                  _context6.next = 4;
                  return new Promise(function (resolve, reject) {
                    var txn = _this3._db.transaction(storeNames, type);

                    txn.onabort = function () {
                      return reject(txn.error);
                    };

                    txn.oncomplete = function () {
                      return resolve();
                    };

                    callback(txn, function (value) {
                      return resolve(value);
                    });
                  });

                case 4:
                  return _context6.abrupt("return", _context6.sent);

                case 5:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function transaction(_x10, _x11, _x12) {
          return _transaction.apply(this, arguments);
        }

        return transaction;
      }()
      /**
       * Delegates async to a native IDBObjectStore method.
       *
       * @param {string} method The method name.
       * @param {string} storeName The object store name.
       * @param {string} type Can be `readonly` or `readwrite`.
       * @param {...*} args The list of args to pass to the native method.
       * @return {*} The result of the transaction.
       * @private
       */

    }, {
      key: "_call",
      value: function () {
        var _call2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(method, storeName, type) {
          var _len,
              args,
              _key,
              callback,
              _args7 = arguments;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  for (_len = _args7.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                    args[_key - 3] = _args7[_key];
                  }

                  callback = function callback(txn, done) {
                    var objStore = txn.objectStore(storeName); // TODO(philipwalton): Fix this underlying TS2684 error.
                    // @ts-ignore

                    var request = objStore[method].apply(objStore, args);

                    request.onsuccess = function () {
                      return done(request.result);
                    };
                  };

                  _context7.next = 4;
                  return this.transaction([storeName], type, callback);

                case 4:
                  return _context7.abrupt("return", _context7.sent);

                case 5:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        function _call(_x13, _x14, _x15) {
          return _call2.apply(this, arguments);
        }

        return _call;
      }()
      /**
       * Closes the connection opened by `DBWrapper.open()`. Generally this method
       * doesn't need to be called since:
       *   1. It's usually better to keep a connection open since opening
       *      a new connection is somewhat slow.
       *   2. Connections are automatically closed when the reference is
       *      garbage collected.
       * The primary use case for needing to close a connection is when another
       * reference (typically in another tab) needs to upgrade it and would be
       * blocked by the current, open connection.
       *
       * @private
       */

    }, {
      key: "close",
      value: function close() {
        if (this._db) {
          this._db.close();

          this._db = null;
        }
      }
    }, {
      key: "db",
      get: function get() {
        return this._db;
      }
    }]);

    return DBWrapper;
  }(); // Exposed on the prototype to let users modify the default timeout on a
  // per-instance or global basis.

  DBWrapper.prototype.OPEN_TIMEOUT = 2000; // Wrap native IDBObjectStore methods according to their mode.

  var methodsToWrap = {
    readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
    readwrite: ['add', 'put', 'clear', 'delete']
  };

  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        mode = _Object$entries$_i[0],
        methods = _Object$entries$_i[1];

    var _iterator = _createForOfIteratorHelper(methods),
        _step;

    try {
      var _loop2 = function _loop2() {
        var method = _step.value;

        if (method in IDBObjectStore.prototype) {
          // Don't use arrow functions here since we're outside of the class.
          DBWrapper.prototype[method] = /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(storeName) {
              var _len2,
                  args,
                  _key2,
                  _args8 = arguments;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      for (_len2 = _args8.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                        args[_key2 - 1] = _args8[_key2];
                      }

                      _context8.next = 3;
                      return this._call.apply(this, [method, storeName, mode].concat(args));

                    case 3:
                      return _context8.abrupt("return", _context8.sent);

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            return function (_x16) {
              return _ref3.apply(this, arguments);
            };
          }();
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  for (var _i = 0, _Object$entries = Object.entries(methodsToWrap); _i < _Object$entries.length; _i++) {
    _loop();
  }

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Claim any currently available clients once the service worker
   * becomes active. This is normally used in conjunction with `skipWaiting()`.
   *
   * @memberof module:workbox-core
   */

  function clientsClaim() {
    self.addEventListener('activate', function () {
      return self.clients.claim();
    });
  }

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * This method is deprecated, and will be removed in Workbox v7.
   *
   * Calling self.skipWaiting() is equivalent, and should be used instead.
   *
   * @memberof module:workbox-core
   */

  function skipWaiting() {

    self.skipWaiting();
  }

  try {
    self['workbox:core:6.0.2'] && _();
  } catch (e) {}

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */

  var fallback = function fallback(code) {
    var msg = code;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length > 0) {
      msg += " :: ".concat(JSON.stringify(args));
    }

    return msg;
  };

  var messageGenerator =  fallback ;

  /**
   * Workbox errors should be thrown with this class.
   * This allows use to ensure the type easily in tests,
   * helps developers identify errors from workbox
   * easily and allows use to optimise error
   * messages correctly.
   *
   * @private
   */

  var WorkboxError = /*#__PURE__*/function (_Error) {
    _inherits(WorkboxError, _Error);

    var _super = _createSuper(WorkboxError);

    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    function WorkboxError(errorCode, details) {
      var _this;

      _classCallCheck(this, WorkboxError);

      var message = messageGenerator(errorCode, details);
      _this = _super.call(this, message);
      _this.name = errorCode;
      _this.details = details;
      return _this;
    }

    return WorkboxError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  var _cacheNameDetails$1 = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : ''
  };

  var _createCacheName = function _createCacheName(cacheName) {
    return [_cacheNameDetails$1.prefix, cacheName, _cacheNameDetails$1.suffix].filter(function (value) {
      return value && value.length > 0;
    }).join('-');
  };

  var eachCacheNameDetail = function eachCacheNameDetail(fn) {
    for (var _i = 0, _Object$keys = Object.keys(_cacheNameDetails$1); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      fn(key);
    }
  };

  var cacheNames = {
    updateDetails: function updateDetails(details) {
      eachCacheNameDetail(function (key) {
        if (typeof details[key] === 'string') {
          _cacheNameDetails$1[key] = details[key];
        }
      });
    },
    getGoogleAnalyticsName: function getGoogleAnalyticsName(userCacheName) {
      return userCacheName || _createCacheName(_cacheNameDetails$1.googleAnalytics);
    },
    getPrecacheName: function getPrecacheName(userCacheName) {
      return userCacheName || _createCacheName(_cacheNameDetails$1.precache);
    },
    getPrefix: function getPrefix() {
      return _cacheNameDetails$1.prefix;
    },
    getRuntimeName: function getRuntimeName(userCacheName) {
      return userCacheName || _createCacheName(_cacheNameDetails$1.runtime);
    },
    getSuffix: function getSuffix() {
      return _cacheNameDetails$1.suffix;
    }
  };

  var logger =  null ;

  /*
    Copyright 2020 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * A utility method that makes it easier to use `event.waitUntil` with
   * async functions and return the result.
   *
   * @param {ExtendableEvent} event
   * @param {Function} asyncFn
   * @return {Function}
   * @private
   */

  function waitUntil(event, asyncFn) {
    var returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
  }

  try {
    self['workbox:precaching:6.0.2'] && _();
  } catch (e) {}

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */

  var REVISION_SEARCH_PARAM = '__WB_REVISION__';
  /**
   * Converts a manifest entry into a versioned URL suitable for precaching.
   *
   * @param {Object|string} entry
   * @return {string} A URL with versioning info.
   *
   * @private
   * @memberof module:workbox-precaching
   */

  function createCacheKey(entry) {
    if (!entry) {
      throw new WorkboxError('add-to-cache-list-unexpected-type', {
        entry: entry
      });
    } // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.


    if (typeof entry === 'string') {
      var urlObject = new URL(entry, location.href);
      return {
        cacheKey: urlObject.href,
        url: urlObject.href
      };
    }

    var revision = entry.revision,
        url = entry.url;

    if (!url) {
      throw new WorkboxError('add-to-cache-list-unexpected-type', {
        entry: entry
      });
    } // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.


    if (!revision) {
      var _urlObject = new URL(url, location.href);

      return {
        cacheKey: _urlObject.href,
        url: _urlObject.href
      };
    } // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.


    var cacheKeyURL = new URL(url, location.href);
    var originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
      cacheKey: cacheKeyURL.href,
      url: originalURL.href
    };
  }

  /**
   * A plugin, designed to be used with PrecacheController, to determine the
   * of assets that were updated (or not updated) during the install event.
   *
   * @private
   */

  var PrecacheInstallReportPlugin = function PrecacheInstallReportPlugin() {
    var _this = this;

    _classCallCheck(this, PrecacheInstallReportPlugin);

    this.updatedURLs = [];
    this.notUpdatedURLs = [];

    this.handlerWillStart = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var request, state;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, state = _ref.state;

                // TODO: `state` should never be undefined...
                if (state) {
                  state.originalRequest = request;
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    this.cachedResponseWillBeUsed = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
        var event, state, cachedResponse, url;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event = _ref3.event, state = _ref3.state, cachedResponse = _ref3.cachedResponse;

                if (event.type === 'install') {
                  // TODO: `state` should never be undefined...
                  url = state.originalRequest.url;

                  if (cachedResponse) {
                    _this.notUpdatedURLs.push(url);
                  } else {
                    _this.updatedURLs.push(url);
                  }
                }

                return _context2.abrupt("return", cachedResponse);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }();
  };

  /**
   * A plugin, designed to be used with PrecacheController, to translate URLs into
   * the corresponding cache key, based on the current revision info.
   *
   * @private
   */

  var PrecacheCacheKeyPlugin = function PrecacheCacheKeyPlugin(_ref) {
    var _this = this;

    var precacheController = _ref.precacheController;

    _classCallCheck(this, PrecacheCacheKeyPlugin);

    this.cacheKeyWillBeUsed = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
        var request, params, cacheKey;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref2.request, params = _ref2.params;
                cacheKey = params && params.cacheKey || _this._precacheController.getCacheKeyForURL(request.url);
                return _context.abrupt("return", cacheKey ? new Request(cacheKey) : request);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    this._precacheController = precacheController;
  };

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  var supportStatus;
  /**
   * A utility function that determines whether the current browser supports
   * constructing a new `Response` from a `response.body` stream.
   *
   * @return {boolean} `true`, if the current browser can successfully
   *     construct a `Response` from a `response.body` stream, `false` otherwise.
   *
   * @private
   */

  function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
      var testResponse = new Response('');

      if ('body' in testResponse) {
        try {
          new Response(testResponse.body);
          supportStatus = true;
        } catch (error) {
          supportStatus = false;
        }
      }

      supportStatus = false;
    }

    return supportStatus;
  }

  /**
   * Allows developers to copy a response and modify its `headers`, `status`,
   * or `statusText` values (the values settable via a
   * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
   * object in the constructor).
   * To modify these values, pass a function as the second argument. That
   * function will be invoked with a single object with the response properties
   * `{headers, status, statusText}`. The return value of this function will
   * be used as the `ResponseInit` for the new `Response`. To change the values
   * either modify the passed parameter(s) and return it, or return a totally
   * new object.
   *
   * This method is intentionally limited to same-origin responses, regardless of
   * whether CORS was used or not.
   *
   * @param {Response} response
   * @param {Function} modifier
   * @memberof module:workbox-core
   */

  function copyResponse(_x, _x2) {
    return _copyResponse.apply(this, arguments);
  }

  function _copyResponse() {
    _copyResponse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response, modifier) {
      var origin, responseURL, clonedResponse, responseInit, modifiedResponseInit, body;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              origin = null; // If response.url isn't set, assume it's cross-origin and keep origin null.

              if (response.url) {
                responseURL = new URL(response.url);
                origin = responseURL.origin;
              }

              if (!(origin !== self.location.origin)) {
                _context.next = 4;
                break;
              }

              throw new WorkboxError('cross-origin-copy-response', {
                origin: origin
              });

            case 4:
              clonedResponse = response.clone(); // Create a fresh `ResponseInit` object by cloning the headers.

              responseInit = {
                headers: new Headers(clonedResponse.headers),
                status: clonedResponse.status,
                statusText: clonedResponse.statusText
              }; // Apply any user modifications.

              modifiedResponseInit = modifier ? modifier(responseInit) : responseInit; // Create the new response from the body stream and `ResponseInit`
              // modifications. Note: not all browsers support the Response.body stream,
              // so fall back to reading the entire body into memory as a blob.

              if (!canConstructResponseFromBodyStream()) {
                _context.next = 11;
                break;
              }

              _context.t0 = clonedResponse.body;
              _context.next = 14;
              break;

            case 11:
              _context.next = 13;
              return clonedResponse.blob();

            case 13:
              _context.t0 = _context.sent;

            case 14:
              body = _context.t0;
              return _context.abrupt("return", new Response(body, modifiedResponseInit));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _copyResponse.apply(this, arguments);
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */

  var getFriendlyURL = function getFriendlyURL(url) {
    var urlObj = new URL(String(url), location.href); // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.

    return urlObj.href.replace(new RegExp("^".concat(location.origin)), '');
  };

  try {
    self['workbox:core:6.0.2'] && _();
  } catch (e) {}

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  var _cacheNameDetails$2 = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : ''
  };

  var _createCacheName$1 = function _createCacheName(cacheName) {
    return [_cacheNameDetails$2.prefix, cacheName, _cacheNameDetails$2.suffix].filter(function (value) {
      return value && value.length > 0;
    }).join('-');
  };

  var eachCacheNameDetail$1 = function eachCacheNameDetail(fn) {
    for (var _i = 0, _Object$keys = Object.keys(_cacheNameDetails$2); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      fn(key);
    }
  };

  var cacheNames$1 = {
    updateDetails: function updateDetails(details) {
      eachCacheNameDetail$1(function (key) {
        if (typeof details[key] === 'string') {
          _cacheNameDetails$2[key] = details[key];
        }
      });
    },
    getGoogleAnalyticsName: function getGoogleAnalyticsName(userCacheName) {
      return userCacheName || _createCacheName$1(_cacheNameDetails$2.googleAnalytics);
    },
    getPrecacheName: function getPrecacheName(userCacheName) {
      return userCacheName || _createCacheName$1(_cacheNameDetails$2.precache);
    },
    getPrefix: function getPrefix() {
      return _cacheNameDetails$2.prefix;
    },
    getRuntimeName: function getRuntimeName(userCacheName) {
      return userCacheName || _createCacheName$1(_cacheNameDetails$2.runtime);
    },
    getSuffix: function getSuffix() {
      return _cacheNameDetails$2.suffix;
    }
  };

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */

  var fallback$1 = function fallback(code) {
    var msg = code;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length > 0) {
      msg += " :: ".concat(JSON.stringify(args));
    }

    return msg;
  };

  var messageGenerator$1 =  fallback$1 ;

  /**
   * Workbox errors should be thrown with this class.
   * This allows use to ensure the type easily in tests,
   * helps developers identify errors from workbox
   * easily and allows use to optimise error
   * messages correctly.
   *
   * @private
   */

  var WorkboxError$1 = /*#__PURE__*/function (_Error) {
    _inherits(WorkboxError, _Error);

    var _super = _createSuper(WorkboxError);

    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    function WorkboxError(errorCode, details) {
      var _this;

      _classCallCheck(this, WorkboxError);

      var message = messageGenerator$1(errorCode, details);
      _this = _super.call(this, message);
      _this.name = errorCode;
      _this.details = details;
      return _this;
    }

    return WorkboxError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */

  var getFriendlyURL$1 = function getFriendlyURL(url) {
    var urlObj = new URL(String(url), location.href); // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.

    return urlObj.href.replace(new RegExp("^".concat(location.origin)), '');
  };

  function stripParams(fullURL, ignoreParams) {
    var strippedURL = new URL(fullURL);

    var _iterator = _createForOfIteratorHelper(ignoreParams),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var param = _step.value;
        strippedURL.searchParams["delete"](param);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return strippedURL.href;
  }
  /**
   * Matches an item in the cache, ignoring specific URL params. This is similar
   * to the `ignoreSearch` option, but it allows you to ignore just specific
   * params (while continuing to match on the others).
   *
   * @private
   * @param {Cache} cache
   * @param {Request} request
   * @param {Object} matchOptions
   * @param {Array<string>} ignoreParams
   * @return {Promise<Response|undefined>}
   */


  function cacheMatchIgnoreParams(_x, _x2, _x3, _x4) {
    return _cacheMatchIgnoreParams.apply(this, arguments);
  }

  function _cacheMatchIgnoreParams() {
    _cacheMatchIgnoreParams = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cache, request, ignoreParams, matchOptions) {
      var strippedRequestURL, keysOptions, cacheKeys, _iterator2, _step2, cacheKey, strippedCacheKeyURL;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              strippedRequestURL = stripParams(request.url, ignoreParams); // If the request doesn't include any ignored params, match as normal.

              if (!(request.url === strippedRequestURL)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", cache.match(request, matchOptions));

            case 3:
              // Otherwise, match by comparing keys
              keysOptions = _objectSpread2(_objectSpread2({}, matchOptions), {}, {
                ignoreSearch: true
              });
              _context.next = 6;
              return cache.keys(request, keysOptions);

            case 6:
              cacheKeys = _context.sent;
              _iterator2 = _createForOfIteratorHelper(cacheKeys);
              _context.prev = 8;

              _iterator2.s();

            case 10:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 17;
                break;
              }

              cacheKey = _step2.value;
              strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);

              if (!(strippedRequestURL === strippedCacheKeyURL)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", cache.match(cacheKey, matchOptions));

            case 15:
              _context.next = 10;
              break;

            case 17:
              _context.next = 22;
              break;

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](8);

              _iterator2.e(_context.t0);

            case 22:
              _context.prev = 22;

              _iterator2.f();

              return _context.finish(22);

            case 25:
              return _context.abrupt("return");

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 19, 22, 25]]);
    }));
    return _cacheMatchIgnoreParams.apply(this, arguments);
  }

  /**
   * The Deferred class composes Promises in a way that allows for them to be
   * resolved or rejected from outside the constructor. In most cases promises
   * should be used directly, but Deferreds can be necessary when the logic to
   * resolve a promise must be separate.
   *
   * @private
   */

  var Deferred =
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  function Deferred() {
    var _this = this;

    _classCallCheck(this, Deferred);

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  };

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */

  var quotaErrorCallbacks = new Set();

  /**
   * Runs all of the callback functions, one at a time sequentially, in the order
   * in which they were registered.
   *
   * @memberof module:workbox-core
   * @private
   */

  function executeQuotaErrorCallbacks() {
    return _executeQuotaErrorCallbacks.apply(this, arguments);
  }

  function _executeQuotaErrorCallbacks() {
    _executeQuotaErrorCallbacks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _iterator, _step, callback;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:

              _iterator = _createForOfIteratorHelper(quotaErrorCallbacks);
              _context.prev = 2;

              _iterator.s();

            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 11;
                break;
              }

              callback = _step.value;
              _context.next = 8;
              return callback();

            case 8:

            case 9:
              _context.next = 4;
              break;

            case 11:
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);

              _iterator.e(_context.t0);

            case 16:
              _context.prev = 16;

              _iterator.f();

              return _context.finish(16);

            case 19:

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13, 16, 19]]);
    }));
    return _executeQuotaErrorCallbacks.apply(this, arguments);
  }

  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Returns a promise that resolves and the passed number of milliseconds.
   * This utility is an async/await-friendly version of `setTimeout`.
   *
   * @param {number} ms
   * @return {Promise}
   * @private
   */

  function timeout(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }

  try {
    self['workbox:strategies:6.0.2'] && _();
  } catch (e) {}

  function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
  }
  /**
   * A class created every time a Strategy instance instance calls
   * [handle()]{@link module:workbox-strategies.Strategy~handle} or
   * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
   * cache actions around plugin callbacks and keeps track of when the strategy
   * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
   *
   * @memberof module:workbox-strategies
   */


  var StrategyHandler = /*#__PURE__*/function () {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {module:workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     *     [match callback]{@link module:workbox-routing~matchCallback},
     *     (if applicable).
     */
    function StrategyHandler(strategy, options) {
      _classCallCheck(this, StrategyHandler);

      this._cacheKeys = {};

      Object.assign(this, options);
      this.event = options.event;
      this._strategy = strategy;
      this._handlerDeferred = new Deferred();
      this._extendLifetimePromises = []; // Copy the plugins list (since it's mutable on the strategy),
      // so any mutations don't affect this handler instance.

      this._plugins = _toConsumableArray(strategy.plugins);
      this._pluginStateMap = new Map();

      var _iterator = _createForOfIteratorHelper(this._plugins),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var plugin = _step.value;

          this._pluginStateMap.set(plugin, {});
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` and `plugins` defined on the strategy
     * object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */


    _createClass(StrategyHandler, [{
      key: "fetch",
      value: function (_fetch) {
        function fetch(_x) {
          return _fetch.apply(this, arguments);
        }

        fetch.toString = function () {
          return _fetch.toString();
        };

        return fetch;
      }(function (input) {
        var _this = this;

        return this.waitUntil(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var event, request, possiblePreloadResponse, originalRequest, _iterator2, _step2, cb, pluginFilteredRequest, fetchResponse, _iterator3, _step3, callback;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  event = _this.event;
                  request = toRequest(input);

                  if (!(request.mode === 'navigate' && event instanceof FetchEvent && event.preloadResponse)) {
                    _context.next = 9;
                    break;
                  }

                  _context.next = 5;
                  return event.preloadResponse;

                case 5:
                  possiblePreloadResponse = _context.sent;

                  if (!possiblePreloadResponse) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return", possiblePreloadResponse);

                case 9:
                  // If there is a fetchDidFail plugin, we need to save a clone of the
                  // original request before it's either modified by a requestWillFetch
                  // plugin or before the original request's body is consumed via fetch().
                  originalRequest = _this.hasCallback('fetchDidFail') ? request.clone() : null;
                  _context.prev = 10;
                  _iterator2 = _createForOfIteratorHelper(_this.iterateCallbacks('requestWillFetch'));
                  _context.prev = 12;

                  _iterator2.s();

                case 14:
                  if ((_step2 = _iterator2.n()).done) {
                    _context.next = 21;
                    break;
                  }

                  cb = _step2.value;
                  _context.next = 18;
                  return cb({
                    request: request.clone(),
                    event: event
                  });

                case 18:
                  request = _context.sent;

                case 19:
                  _context.next = 14;
                  break;

                case 21:
                  _context.next = 26;
                  break;

                case 23:
                  _context.prev = 23;
                  _context.t0 = _context["catch"](12);

                  _iterator2.e(_context.t0);

                case 26:
                  _context.prev = 26;

                  _iterator2.f();

                  return _context.finish(26);

                case 29:
                  _context.next = 34;
                  break;

                case 31:
                  _context.prev = 31;
                  _context.t1 = _context["catch"](10);
                  throw new WorkboxError$1('plugin-error-request-will-fetch', {
                    thrownError: _context.t1
                  });

                case 34:
                  // The request can be altered by plugins with `requestWillFetch` making
                  // the original request (most likely from a `fetch` event) different
                  // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
                  pluginFilteredRequest = request.clone();
                  _context.prev = 35;
                  _context.next = 38;
                  return fetch(request, request.mode === 'navigate' ? undefined : _this._strategy.fetchOptions);

                case 38:
                  fetchResponse = _context.sent;

                  _iterator3 = _createForOfIteratorHelper(_this.iterateCallbacks('fetchDidSucceed'));
                  _context.prev = 41;

                  _iterator3.s();

                case 43:
                  if ((_step3 = _iterator3.n()).done) {
                    _context.next = 50;
                    break;
                  }

                  callback = _step3.value;
                  _context.next = 47;
                  return callback({
                    event: event,
                    request: pluginFilteredRequest,
                    response: fetchResponse
                  });

                case 47:
                  fetchResponse = _context.sent;

                case 48:
                  _context.next = 43;
                  break;

                case 50:
                  _context.next = 55;
                  break;

                case 52:
                  _context.prev = 52;
                  _context.t2 = _context["catch"](41);

                  _iterator3.e(_context.t2);

                case 55:
                  _context.prev = 55;

                  _iterator3.f();

                  return _context.finish(55);

                case 58:
                  return _context.abrupt("return", fetchResponse);

                case 61:
                  _context.prev = 61;
                  _context.t3 = _context["catch"](35);
                  // is being used (see above).


                  if (!originalRequest) {
                    _context.next = 67;
                    break;
                  }

                  _context.next = 67;
                  return _this.runCallbacks('fetchDidFail', {
                    error: _context.t3,
                    event: event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone()
                  });

                case 67:
                  throw _context.t3;

                case 68:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[10, 31], [12, 23, 26, 29], [35, 61], [41, 52, 55, 58]]);
        }))());
      })
      /**
       * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
       * the response generated by `this.fetch()`.
       *
       * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
       * so you do not have to manually call `waitUntil()` on the event.
       *
       * @param {Request|string} input The request or URL to fetch and cache.
       * @return {Promise<Response>}
       */

    }, {
      key: "fetchAndCachePut",
      value: function () {
        var _fetchAndCachePut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input) {
          var response, responseClone;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.fetch(input);

                case 2:
                  response = _context2.sent;
                  responseClone = response.clone();
                  this.waitUntil(this.cachePut(input, responseClone));
                  return _context2.abrupt("return", response);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function fetchAndCachePut(_x2) {
          return _fetchAndCachePut.apply(this, arguments);
        }

        return fetchAndCachePut;
      }()
      /**
       * Matches a request from the cache (and invokes any applicable plugin
       * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
       * defined on the strategy object.
       *
       * The following plugin lifecycle methods are invoked when using this method:
       * - cacheKeyWillByUsed()
       * - cachedResponseWillByUsed()
       *
       * @param {Request|string} key The Request or URL to use as the cache key.
       * @return {Promise<Response|undefined>} A matching response, if found.
       */

    }, {
      key: "cacheMatch",
      value: function cacheMatch(key) {
        var _this2 = this;

        return this.waitUntil(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var request, cachedResponse, _this2$_strategy, cacheName, matchOptions, effectiveRequest, multiMatchOptions, _iterator4, _step4, callback;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  request = toRequest(key);
                  _this2$_strategy = _this2._strategy, cacheName = _this2$_strategy.cacheName, matchOptions = _this2$_strategy.matchOptions;
                  _context3.next = 4;
                  return _this2.getCacheKey(request, 'read');

                case 4:
                  effectiveRequest = _context3.sent;
                  multiMatchOptions = _objectSpread2(_objectSpread2({}, matchOptions), {
                    cacheName: cacheName
                  });
                  _context3.next = 8;
                  return caches.match(effectiveRequest, multiMatchOptions);

                case 8:
                  cachedResponse = _context3.sent;

                  _iterator4 = _createForOfIteratorHelper(_this2.iterateCallbacks('cachedResponseWillBeUsed'));
                  _context3.prev = 11;

                  _iterator4.s();

                case 13:
                  if ((_step4 = _iterator4.n()).done) {
                    _context3.next = 23;
                    break;
                  }

                  callback = _step4.value;
                  _context3.next = 17;
                  return callback({
                    cacheName: cacheName,
                    matchOptions: matchOptions,
                    cachedResponse: cachedResponse,
                    request: effectiveRequest,
                    event: _this2.event
                  });

                case 17:
                  _context3.t0 = _context3.sent;

                  if (_context3.t0) {
                    _context3.next = 20;
                    break;
                  }

                  _context3.t0 = undefined;

                case 20:
                  cachedResponse = _context3.t0;

                case 21:
                  _context3.next = 13;
                  break;

                case 23:
                  _context3.next = 28;
                  break;

                case 25:
                  _context3.prev = 25;
                  _context3.t1 = _context3["catch"](11);

                  _iterator4.e(_context3.t1);

                case 28:
                  _context3.prev = 28;

                  _iterator4.f();

                  return _context3.finish(28);

                case 31:
                  return _context3.abrupt("return", cachedResponse);

                case 32:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[11, 25, 28, 31]]);
        }))());
      }
      /**
       * Puts a request/response pair in the cache (and invokes any applicable
       * plugin callback methods) using the `cacheName` and `plugins` defined on
       * the strategy object.
       *
       * The following plugin lifecycle methods are invoked when using this method:
       * - cacheKeyWillByUsed()
       * - cacheWillUpdate()
       * - cacheDidUpdate()
       *
       * @param {Request|string} key The request or URL to use as the cache key.
       * @param {Promise<void>} response The response to cache.
       */

    }, {
      key: "cachePut",
      value: function () {
        var _cachePut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key, response) {
          var request, effectiveRequest, responseToCache, _this$_strategy, cacheName, matchOptions, cache, hasCacheUpdateCallback, oldResponse, _iterator5, _step5, callback;

          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  request = toRequest(key); // Run in the next task to avoid blocking other cache reads.
                  // https://github.com/w3c/ServiceWorker/issues/1397

                  _context4.next = 3;
                  return timeout(0);

                case 3:
                  _context4.next = 5;
                  return this.getCacheKey(request, 'write');

                case 5:
                  effectiveRequest = _context4.sent;

                  {
                    _context4.next = 9;
                    break;
                  }

                case 9:
                  if (response) {
                    _context4.next = 12;
                    break;
                  }

                  throw new WorkboxError$1('cache-put-with-no-response', {
                    url: getFriendlyURL$1(effectiveRequest.url)
                  });

                case 12:
                  _context4.next = 14;
                  return this._ensureResponseSafeToCache(response);

                case 14:
                  responseToCache = _context4.sent;

                  if (responseToCache) {
                    _context4.next = 18;
                    break;
                  }

                  return _context4.abrupt("return");

                case 18:
                  _this$_strategy = this._strategy, cacheName = _this$_strategy.cacheName, matchOptions = _this$_strategy.matchOptions;
                  _context4.next = 21;
                  return self.caches.open(cacheName);

                case 21:
                  cache = _context4.sent;
                  hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');

                  if (!hasCacheUpdateCallback) {
                    _context4.next = 29;
                    break;
                  }

                  _context4.next = 26;
                  return cacheMatchIgnoreParams( // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
                  // feature. Consider into ways to only add this behavior if using
                  // precaching.
                  cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions);

                case 26:
                  _context4.t0 = _context4.sent;
                  _context4.next = 30;
                  break;

                case 29:
                  _context4.t0 = null;

                case 30:
                  oldResponse = _context4.t0;

                  _context4.prev = 32;
                  _context4.next = 35;
                  return cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);

                case 35:
                  _context4.next = 43;
                  break;

                case 37:
                  _context4.prev = 37;
                  _context4.t1 = _context4["catch"](32);

                  if (!(_context4.t1.name === 'QuotaExceededError')) {
                    _context4.next = 42;
                    break;
                  }

                  _context4.next = 42;
                  return executeQuotaErrorCallbacks();

                case 42:
                  throw _context4.t1;

                case 43:
                  _iterator5 = _createForOfIteratorHelper(this.iterateCallbacks('cacheDidUpdate'));
                  _context4.prev = 44;

                  _iterator5.s();

                case 46:
                  if ((_step5 = _iterator5.n()).done) {
                    _context4.next = 52;
                    break;
                  }

                  callback = _step5.value;
                  _context4.next = 50;
                  return callback({
                    cacheName: cacheName,
                    oldResponse: oldResponse,
                    newResponse: responseToCache.clone(),
                    request: effectiveRequest,
                    event: this.event
                  });

                case 50:
                  _context4.next = 46;
                  break;

                case 52:
                  _context4.next = 57;
                  break;

                case 54:
                  _context4.prev = 54;
                  _context4.t2 = _context4["catch"](44);

                  _iterator5.e(_context4.t2);

                case 57:
                  _context4.prev = 57;

                  _iterator5.f();

                  return _context4.finish(57);

                case 60:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this, [[32, 37], [44, 54, 57, 60]]);
        }));

        function cachePut(_x3, _x4) {
          return _cachePut.apply(this, arguments);
        }

        return cachePut;
      }()
      /**
       * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
       * executes any of those callbacks found in sequence. The final `Request`
       * object returned by the last plugin is treated as the cache key for cache
       * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
       * been registered, the passed request is returned unmodified
       *
       * @param {Request} request
       * @param {string} mode
       * @return {Promise<Request>}
       */

    }, {
      key: "getCacheKey",
      value: function () {
        var _getCacheKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, mode) {
          var effectiveRequest, _iterator6, _step6, callback;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (this._cacheKeys[mode]) {
                    _context5.next = 23;
                    break;
                  }

                  effectiveRequest = request;
                  _iterator6 = _createForOfIteratorHelper(this.iterateCallbacks('cacheKeyWillBeUsed'));
                  _context5.prev = 3;

                  _iterator6.s();

                case 5:
                  if ((_step6 = _iterator6.n()).done) {
                    _context5.next = 14;
                    break;
                  }

                  callback = _step6.value;
                  _context5.t0 = toRequest;
                  _context5.next = 10;
                  return callback({
                    mode: mode,
                    request: effectiveRequest,
                    event: this.event,
                    params: this.params
                  });

                case 10:
                  _context5.t1 = _context5.sent;
                  effectiveRequest = (0, _context5.t0)(_context5.t1);

                case 12:
                  _context5.next = 5;
                  break;

                case 14:
                  _context5.next = 19;
                  break;

                case 16:
                  _context5.prev = 16;
                  _context5.t2 = _context5["catch"](3);

                  _iterator6.e(_context5.t2);

                case 19:
                  _context5.prev = 19;

                  _iterator6.f();

                  return _context5.finish(19);

                case 22:
                  this._cacheKeys[mode] = effectiveRequest;

                case 23:
                  return _context5.abrupt("return", this._cacheKeys[mode]);

                case 24:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this, [[3, 16, 19, 22]]);
        }));

        function getCacheKey(_x5, _x6) {
          return _getCacheKey.apply(this, arguments);
        }

        return getCacheKey;
      }()
      /**
       * Returns true if the strategy has at least one plugin with the given
       * callback.
       *
       * @param {string} name The name of the callback to check for.
       * @return {boolean}
       */

    }, {
      key: "hasCallback",
      value: function hasCallback(name) {
        var _iterator7 = _createForOfIteratorHelper(this._strategy.plugins),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var plugin = _step7.value;

            if (name in plugin) {
              return true;
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        return false;
      }
      /**
       * Runs all plugin callbacks matching the given name, in order, passing the
       * given param object (merged ith the current plugin state) as the only
       * argument.
       *
       * Note: since this method runs all plugins, it's not suitable for cases
       * where the return value of a callback needs to be applied prior to calling
       * the next callback. See
       * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
       * below for how to handle that case.
       *
       * @param {string} name The name of the callback to run within each plugin.
       * @param {Object} param The object to pass as the first (and only) param
       *     when executing each callback. This object will be merged with the
       *     current plugin state prior to callback execution.
       */

    }, {
      key: "runCallbacks",
      value: function () {
        var _runCallbacks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(name, param) {
          var _iterator8, _step8, callback;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _iterator8 = _createForOfIteratorHelper(this.iterateCallbacks(name));
                  _context6.prev = 1;

                  _iterator8.s();

                case 3:
                  if ((_step8 = _iterator8.n()).done) {
                    _context6.next = 9;
                    break;
                  }

                  callback = _step8.value;
                  _context6.next = 7;
                  return callback(param);

                case 7:
                  _context6.next = 3;
                  break;

                case 9:
                  _context6.next = 14;
                  break;

                case 11:
                  _context6.prev = 11;
                  _context6.t0 = _context6["catch"](1);

                  _iterator8.e(_context6.t0);

                case 14:
                  _context6.prev = 14;

                  _iterator8.f();

                  return _context6.finish(14);

                case 17:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this, [[1, 11, 14, 17]]);
        }));

        function runCallbacks(_x7, _x8) {
          return _runCallbacks.apply(this, arguments);
        }

        return runCallbacks;
      }()
      /**
       * Accepts a callback and returns an iterable of matching plugin callbacks,
       * where each callback is wrapped with the current handler state (i.e. when
       * you call each callback, whatever object parameter you pass it will
       * be merged with the plugin's current state).
       *
       * @param {string} name The name fo the callback to run
       * @return {Array<Function>}
       */

    }, {
      key: "iterateCallbacks",
      value: /*#__PURE__*/regeneratorRuntime.mark(function iterateCallbacks(name) {
        var _this3 = this;

        var _iterator9, _step9, _loop;

        return regeneratorRuntime.wrap(function iterateCallbacks$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _iterator9 = _createForOfIteratorHelper(this._strategy.plugins);
                _context8.prev = 1;
                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                  var plugin, state, statefulCallback;
                  return regeneratorRuntime.wrap(function _loop$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          plugin = _step9.value;

                          if (!(typeof plugin[name] === 'function')) {
                            _context7.next = 6;
                            break;
                          }

                          state = _this3._pluginStateMap.get(plugin);

                          statefulCallback = function statefulCallback(param) {
                            var statefulParam = _objectSpread2(_objectSpread2({}, param), {}, {
                              state: state
                            }); // TODO(philipwalton): not sure why `any` is needed. It seems like
                            // this should work with `as WorkboxPluginCallbackParam[C]`.


                            return plugin[name](statefulParam);
                          };

                          _context7.next = 6;
                          return statefulCallback;

                        case 6:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _loop);
                });

                _iterator9.s();

              case 4:
                if ((_step9 = _iterator9.n()).done) {
                  _context8.next = 8;
                  break;
                }

                return _context8.delegateYield(_loop(), "t0", 6);

              case 6:
                _context8.next = 4;
                break;

              case 8:
                _context8.next = 13;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t1 = _context8["catch"](1);

                _iterator9.e(_context8.t1);

              case 13:
                _context8.prev = 13;

                _iterator9.f();

                return _context8.finish(13);

              case 16:
              case "end":
                return _context8.stop();
            }
          }
        }, iterateCallbacks, this, [[1, 10, 13, 16]]);
      })
      /**
       * Adds a promise to the
       * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
       * of the event event associated with the request being handled (usually a
       * `FetchEvent`).
       *
       * Note: you can await
       * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
       * to know when all added promises have settled.
       *
       * @param {Promise} promise A promise to add to the extend lifetime promises
       *     of the event that triggered the request.
       */

    }, {
      key: "waitUntil",
      value: function waitUntil(promise) {
        this._extendLifetimePromises.push(promise);

        return promise;
      }
      /**
       * Returns a promise that resolves once all promises passed to
       * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
       * have settled.
       *
       * Note: any work done after `doneWaiting()` settles should be manually
       * passed to an event's `waitUntil()` method (not this handler's
       * `waitUntil()` method), otherwise the service worker thread my be killed
       * prior to your work completing.
       */

    }, {
      key: "doneWaiting",
      value: function () {
        var _doneWaiting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          var promise;
          return regeneratorRuntime.wrap(function _callee7$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  if (!(promise = this._extendLifetimePromises.shift())) {
                    _context9.next = 5;
                    break;
                  }

                  _context9.next = 3;
                  return promise;

                case 3:
                  _context9.next = 0;
                  break;

                case 5:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee7, this);
        }));

        function doneWaiting() {
          return _doneWaiting.apply(this, arguments);
        }

        return doneWaiting;
      }()
      /**
       * Stops running the strategy and immediately resolves any pending
       * `waitUntil()` promises.
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._handlerDeferred.resolve();
      }
      /**
       * This method will call cacheWillUpdate on the available plugins (or use
       * status === 200) to determine if the Response is safe and valid to cache.
       *
       * @param {Request} options.request
       * @param {Response} options.response
       * @return {Promise<Response|undefined>}
       *
       * @private
       */

    }, {
      key: "_ensureResponseSafeToCache",
      value: function () {
        var _ensureResponseSafeToCache2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(response) {
          var responseToCache, pluginsUsed, _iterator10, _step10, callback;

          return regeneratorRuntime.wrap(function _callee8$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  responseToCache = response;
                  pluginsUsed = false;
                  _iterator10 = _createForOfIteratorHelper(this.iterateCallbacks('cacheWillUpdate'));
                  _context10.prev = 3;

                  _iterator10.s();

                case 5:
                  if ((_step10 = _iterator10.n()).done) {
                    _context10.next = 18;
                    break;
                  }

                  callback = _step10.value;
                  _context10.next = 9;
                  return callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event
                  });

                case 9:
                  _context10.t0 = _context10.sent;

                  if (_context10.t0) {
                    _context10.next = 12;
                    break;
                  }

                  _context10.t0 = undefined;

                case 12:
                  responseToCache = _context10.t0;
                  pluginsUsed = true;

                  if (responseToCache) {
                    _context10.next = 16;
                    break;
                  }

                  return _context10.abrupt("break", 18);

                case 16:
                  _context10.next = 5;
                  break;

                case 18:
                  _context10.next = 23;
                  break;

                case 20:
                  _context10.prev = 20;
                  _context10.t1 = _context10["catch"](3);

                  _iterator10.e(_context10.t1);

                case 23:
                  _context10.prev = 23;

                  _iterator10.f();

                  return _context10.finish(23);

                case 26:
                  if (!pluginsUsed) {
                    if (responseToCache && responseToCache.status !== 200) {
                      responseToCache = undefined;
                    }
                  }

                  return _context10.abrupt("return", responseToCache);

                case 28:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee8, this, [[3, 20, 23, 26]]);
        }));

        function _ensureResponseSafeToCache(_x9) {
          return _ensureResponseSafeToCache2.apply(this, arguments);
        }

        return _ensureResponseSafeToCache;
      }()
    }]);

    return StrategyHandler;
  }();

  /**
   * An abstract base class that all other strategy classes must extend from:
   *
   * @memberof module:workbox-strategies
   */

  var Strategy = /*#__PURE__*/function () {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    function Strategy() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Strategy);

      /**
       * Cache name to store and retrieve
       * requests. Defaults to the cache names provided by
       * [workbox-core]{@link module:workbox-core.cacheNames}.
       *
       * @type {string}
       */
      this.cacheName = cacheNames$1.getRuntimeName(options.cacheName);
      /**
       * The list
       * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * used by this strategy.
       *
       * @type {Array<Object>}
       */

      this.plugins = options.plugins || [];
      /**
       * Values passed along to the
       * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
       * of all fetch() requests made by this strategy.
       *
       * @type {Object}
       */

      this.fetchOptions = options.fetchOptions;
      /**
       * The
       * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
       * for any `cache.match()` or `cache.put()` calls made by this strategy.
       *
       * @type {Object}
       */

      this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * [route]{@link module:workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */


    _createClass(Strategy, [{
      key: "handle",
      value: function handle(options) {
        var _this$handleAll = this.handleAll(options),
            _this$handleAll2 = _slicedToArray(_this$handleAll, 1),
            responseDone = _this$handleAll2[0];

        return responseDone;
      }
      /**
       * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
       * instead of just returning a `Promise` that resolves to a `Response` it
       * it will return an tuple of [response, done] promises, where the former
       * (`response`) is equivalent to what `handle()` returns, and the latter is a
       * Promise that will resolve once any promises that were added to
       * `event.waitUntil()` as part of performing the strategy have completed.
       *
       * You can await the `done` promise to ensure any extra work performed by
       * the strategy (usually caching responses) completes successfully.
       *
       * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
       *     properties listed below.
       * @param {Request|string} options.request A request to run this strategy for.
       * @param {ExtendableEvent} options.event The event associated with the
       *     request.
       * @param {URL} [options.url]
       * @param {*} [options.params]
       * @return {Array<Promise>} A tuple of [response, done]
       *     promises that can be used to determine when the response resolves as
       *     well as when the handler has completed all its work.
       */

    }, {
      key: "handleAll",
      value: function handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
          options = {
            event: options,
            request: options.request
          };
        }

        var event = options.event;
        var request = typeof options.request === 'string' ? new Request(options.request) : options.request;
        var params = 'params' in options ? options.params : undefined;
        var handler = new StrategyHandler(this, {
          event: event,
          request: request,
          params: params
        });

        var responseDone = this._getResponse(handler, request, event);

        var handlerDone = this._awaitComplete(responseDone, handler, request, event); // Return an array of promises, suitable for use with Promise.all().


        return [responseDone, handlerDone];
      }
    }, {
      key: "_getResponse",
      value: function () {
        var _getResponse2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(handler, request, event) {
          var response, _iterator, _step, callback, _iterator2, _step2, _callback;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return handler.runCallbacks('handlerWillStart', {
                    event: event,
                    request: request
                  });

                case 2:
                  response = undefined;
                  _context.prev = 3;
                  _context.next = 6;
                  return this._handle(request, handler);

                case 6:
                  response = _context.sent;

                  if (!(!response || response.type === 'error')) {
                    _context.next = 9;
                    break;
                  }

                  throw new WorkboxError$1('no-response', {
                    url: request.url
                  });

                case 9:
                  _context.next = 38;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](3);
                  _iterator = _createForOfIteratorHelper(handler.iterateCallbacks('handlerDidError'));
                  _context.prev = 14;

                  _iterator.s();

                case 16:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 25;
                    break;
                  }

                  callback = _step.value;
                  _context.next = 20;
                  return callback({
                    error: _context.t0,
                    event: event,
                    request: request
                  });

                case 20:
                  response = _context.sent;

                  if (!response) {
                    _context.next = 23;
                    break;
                  }

                  return _context.abrupt("break", 25);

                case 23:
                  _context.next = 16;
                  break;

                case 25:
                  _context.next = 30;
                  break;

                case 27:
                  _context.prev = 27;
                  _context.t1 = _context["catch"](14);

                  _iterator.e(_context.t1);

                case 30:
                  _context.prev = 30;

                  _iterator.f();

                  return _context.finish(30);

                case 33:
                  if (response) {
                    _context.next = 37;
                    break;
                  }

                  throw _context.t0;

                case 37:

                case 38:
                  _iterator2 = _createForOfIteratorHelper(handler.iterateCallbacks('handlerWillRespond'));
                  _context.prev = 39;

                  _iterator2.s();

                case 41:
                  if ((_step2 = _iterator2.n()).done) {
                    _context.next = 48;
                    break;
                  }

                  _callback = _step2.value;
                  _context.next = 45;
                  return _callback({
                    event: event,
                    request: request,
                    response: response
                  });

                case 45:
                  response = _context.sent;

                case 46:
                  _context.next = 41;
                  break;

                case 48:
                  _context.next = 53;
                  break;

                case 50:
                  _context.prev = 50;
                  _context.t2 = _context["catch"](39);

                  _iterator2.e(_context.t2);

                case 53:
                  _context.prev = 53;

                  _iterator2.f();

                  return _context.finish(53);

                case 56:
                  return _context.abrupt("return", response);

                case 57:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 11], [14, 27, 30, 33], [39, 50, 53, 56]]);
        }));

        function _getResponse(_x, _x2, _x3) {
          return _getResponse2.apply(this, arguments);
        }

        return _getResponse;
      }()
    }, {
      key: "_awaitComplete",
      value: function () {
        var _awaitComplete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(responseDone, handler, request, event) {
          var response, error;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return responseDone;

                case 3:
                  response = _context2.sent;
                  _context2.next = 8;
                  break;

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);

                case 8:
                  _context2.prev = 8;
                  _context2.next = 11;
                  return handler.runCallbacks('handlerDidRespond', {
                    event: event,
                    request: request,
                    response: response
                  });

                case 11:
                  _context2.next = 13;
                  return handler.doneWaiting();

                case 13:
                  _context2.next = 18;
                  break;

                case 15:
                  _context2.prev = 15;
                  _context2.t1 = _context2["catch"](8);
                  error = _context2.t1;

                case 18:
                  _context2.next = 20;
                  return handler.runCallbacks('handlerDidComplete', {
                    event: event,
                    request: request,
                    response: response,
                    error: error
                  });

                case 20:
                  handler.destroy();

                  if (!error) {
                    _context2.next = 23;
                    break;
                  }

                  throw error;

                case 23:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 6], [8, 15]]);
        }));

        function _awaitComplete(_x4, _x5, _x6, _x7) {
          return _awaitComplete2.apply(this, arguments);
        }

        return _awaitComplete;
      }()
    }]);

    return Strategy;
  }();
  /**
   * Classes extending the `Strategy` based class should implement this method,
   * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
   * arg to perform all fetching and cache logic, which will ensure all relevant
   * cache, cache options, fetch options and plugins are used (per the current
   * strategy instance).
   *
   * @name _handle
   * @instance
   * @abstract
   * @function
   * @param {Request} request
   * @param {module:workbox-strategies.StrategyHandler} handler
   * @return {Promise<Response>}
   *
   * @memberof module:workbox-strategies.Strategy
   */

  var copyRedirectedCacheableResponsesPlugin = {
    cacheWillUpdate: function cacheWillUpdate(_ref) {
      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                response = _ref.response;

                if (!response.redirected) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return copyResponse(response);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = response;

              case 8:
                return _context.abrupt("return", _context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  };
  /**
   * A [Strategy]{@link module:workbox-strategies.Strategy} implementation
   * specifically designed to work with
   * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
   * to both cache and fetch precached assets.
   *
   * Note: an instance of this class is created automatically when creating a
   * `PrecacheController`; it's generally not necessary to create this yourself.
   *
   * @extends module:workbox-strategies.Strategy
   * @memberof module:workbox-precaching
   */

  var PrecacheStrategy = /*#__PURE__*/function (_Strategy) {
    _inherits(PrecacheStrategy, _Strategy);

    var _super = _createSuper(PrecacheStrategy);

    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    function PrecacheStrategy() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, PrecacheStrategy);

      options.cacheName = cacheNames.getPrecacheName(options.cacheName);
      _this = _super.call(this, options);
      _this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true; // Redirected responses cannot be used to satisfy a navigation request, so
      // any redirected response must be "copied" rather than cloned, so the new
      // response doesn't contain the `redirected` flag. See:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1

      _this.plugins.push(copyRedirectedCacheableResponsesPlugin);

      return _this;
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */


    _createClass(PrecacheStrategy, [{
      key: "_handle",
      value: function () {
        var _handle2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, handler) {
          var response;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return handler.cacheMatch(request);

                case 2:
                  response = _context2.sent;

                  if (response) {
                    _context2.next = 11;
                    break;
                  }

                  if (!(handler.event && handler.event.type === 'install')) {
                    _context2.next = 8;
                    break;
                  }

                  _context2.next = 7;
                  return this._handleInstall(request, handler);

                case 7:
                  return _context2.abrupt("return", _context2.sent);

                case 8:
                  _context2.next = 10;
                  return this._handleFetch(request, handler);

                case 10:
                  return _context2.abrupt("return", _context2.sent);

                case 11:
                  return _context2.abrupt("return", response);

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _handle(_x, _x2) {
          return _handle2.apply(this, arguments);
        }

        return _handle;
      }()
    }, {
      key: "_handleFetch",
      value: function () {
        var _handleFetch2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, handler) {
          var response, cacheKey;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!this._fallbackToNetwork) {
                    _context3.next = 7;
                    break;
                  }

                  _context3.next = 4;
                  return handler.fetch(request);

                case 4:
                  response = _context3.sent;
                  _context3.next = 8;
                  break;

                case 7:
                  throw new WorkboxError('missing-precache-entry', {
                    cacheName: this.cacheName,
                    url: request.url
                  });

                case 8:
                  {
                    _context3.next = 24;
                    break;
                  }

                case 13:
                  _context3.t0 = _context3.sent;

                case 14:
                  cacheKey = _context3.t0;
                  // Workbox is going to handle the route.
                  // print the routing details to the console.
                  logger.groupCollapsed("Precaching is responding to: " + getFriendlyURL(request.url));
                  logger.log("Serving the precached url: ".concat(getFriendlyURL(cacheKey.url)));
                  logger.groupCollapsed("View request details here.");
                  logger.log(request);
                  logger.groupEnd();
                  logger.groupCollapsed("View response details here.");
                  logger.log(response);
                  logger.groupEnd();
                  logger.groupEnd();

                case 24:
                  return _context3.abrupt("return", response);

                case 25:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function _handleFetch(_x3, _x4) {
          return _handleFetch2.apply(this, arguments);
        }

        return _handleFetch;
      }()
    }, {
      key: "_handleInstall",
      value: function () {
        var _handleInstall2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(request, handler) {
          var response, responseSafeToPrecache;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return handler.fetchAndCachePut(request);

                case 2:
                  response = _context4.sent;
                  // Any time there's no response, consider it a precaching error.
                  responseSafeToPrecache = Boolean(response); // Also consider it an error if the user didn't pass their own
                  // cacheWillUpdate plugin, and the response is a 400+ (note: this means
                  // that by default opaque responses can be precached).

                  if (response && response.status >= 400 && !this._usesCustomCacheableResponseLogic()) {
                    responseSafeToPrecache = false;
                  }

                  if (responseSafeToPrecache) {
                    _context4.next = 7;
                    break;
                  }

                  throw new WorkboxError('bad-precaching-response', {
                    url: request.url,
                    status: response.status
                  });

                case 7:
                  return _context4.abrupt("return", response);

                case 8:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function _handleInstall(_x5, _x6) {
          return _handleInstall2.apply(this, arguments);
        }

        return _handleInstall;
      }()
      /**
       * Returns true if any users plugins were added containing their own
       * `cacheWillUpdate` callback.
       *
       * This method indicates whether the default cacheable response logic (i.e.
       * <400, including opaque responses) should be used. If a custom plugin
       * with a `cacheWillUpdate` callback is passed, then the strategy should
       * defer to that plugin's logic.
       *
       * @private
       */

    }, {
      key: "_usesCustomCacheableResponseLogic",
      value: function _usesCustomCacheableResponseLogic() {
        return this.plugins.some(function (plugin) {
          return plugin.cacheWillUpdate && plugin !== copyRedirectedCacheableResponsesPlugin;
        });
      }
    }]);

    return PrecacheStrategy;
  }(Strategy);

  /**
   * Performs efficient precaching of assets.
   *
   * @memberof module:workbox-precaching
   */

  var PrecacheController = /*#__PURE__*/function () {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    function PrecacheController() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          cacheName = _ref.cacheName,
          _ref$plugins = _ref.plugins,
          plugins = _ref$plugins === void 0 ? [] : _ref$plugins,
          _ref$fallbackToNetwor = _ref.fallbackToNetwork,
          fallbackToNetwork = _ref$fallbackToNetwor === void 0 ? true : _ref$fallbackToNetwor;

      _classCallCheck(this, PrecacheController);

      this._urlsToCacheKeys = new Map();
      this._urlsToCacheModes = new Map();
      this._cacheKeysToIntegrities = new Map();
      this._strategy = new PrecacheStrategy({
        cacheName: cacheNames.getPrecacheName(cacheName),
        plugins: [].concat(_toConsumableArray(plugins), [new PrecacheCacheKeyPlugin({
          precacheController: this
        })]),
        fallbackToNetwork: fallbackToNetwork
      }); // Bind the install and activate methods to the instance.

      this.install = this.install.bind(this);
      this.activate = this.activate.bind(this);
    }
    /**
     * @type {module:workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */


    _createClass(PrecacheController, [{
      key: "precache",

      /**
       * Adds items to the precache list, removing any duplicates and
       * stores the files in the
       * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
       * worker installs.
       *
       * This method can be called multiple times.
       *
       * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
       */
      value: function precache(entries) {
        this.addToCacheList(entries);

        if (!this._installAndActiveListenersAdded) {
          self.addEventListener('install', this.install);
          self.addEventListener('activate', this.activate);
          this._installAndActiveListenersAdded = true;
        }
      }
      /**
       * This method will add items to the precache list, removing duplicates
       * and ensuring the information is valid.
       *
       * @param {Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
       *     Array of entries to precache.
       */

    }, {
      key: "addToCacheList",
      value: function addToCacheList(entries) {

        var urlsToWarnAbout = [];

        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
              urlsToWarnAbout.push(entry);
            } else if (entry && entry.revision === undefined) {
              urlsToWarnAbout.push(entry.url);
            }

            var _createCacheKey = createCacheKey(entry),
                cacheKey = _createCacheKey.cacheKey,
                url = _createCacheKey.url;

            var cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';

            if (this._urlsToCacheKeys.has(url) && this._urlsToCacheKeys.get(url) !== cacheKey) {
              throw new WorkboxError('add-to-cache-list-conflicting-entries', {
                firstEntry: this._urlsToCacheKeys.get(url),
                secondEntry: cacheKey
              });
            }

            if (typeof entry !== 'string' && entry.integrity) {
              if (this._cacheKeysToIntegrities.has(cacheKey) && this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                throw new WorkboxError('add-to-cache-list-conflicting-integrities', {
                  url: url
                });
              }

              this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }

            this._urlsToCacheKeys.set(url, cacheKey);

            this._urlsToCacheModes.set(url, cacheMode);

            if (urlsToWarnAbout.length > 0) {
              var warningMessage = "Workbox is precaching URLs without revision " + "info: ".concat(urlsToWarnAbout.join(', '), "\nThis is generally NOT safe. ") + "Learn more at https://bit.ly/wb-precache";

              if ("production" === 'production') {
                // Use console directly to display this warning without bloating
                // bundle sizes by pulling in all of the logger codebase in prod.
                console.warn(warningMessage);
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      /**
       * Precaches new and updated assets. Call this method from the service worker
       * install event.
       *
       * Note: this method calls `event.waitUntil()` for you, so you do not need
       * to call it yourself in your event handlers.
       *
       * @param {Object} options
       * @param {Event} options.event The install event.
       * @return {Promise<module:workbox-precaching.InstallResult>}
       */

    }, {
      key: "install",
      value: function install(event) {
        var _this = this;

        return waitUntil(event, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var installReportPlugin, _iterator2, _step2, _step2$value, url, cacheKey, integrity, cacheMode, request, updatedURLs, notUpdatedURLs;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  installReportPlugin = new PrecacheInstallReportPlugin();

                  _this.strategy.plugins.push(installReportPlugin); // Cache entries one at a time.
                  // See https://github.com/GoogleChrome/workbox/issues/2528


                  _iterator2 = _createForOfIteratorHelper(_this._urlsToCacheKeys);
                  _context.prev = 3;

                  _iterator2.s();

                case 5:
                  if ((_step2 = _iterator2.n()).done) {
                    _context.next = 14;
                    break;
                  }

                  _step2$value = _slicedToArray(_step2.value, 2), url = _step2$value[0], cacheKey = _step2$value[1];
                  integrity = _this._cacheKeysToIntegrities.get(cacheKey);
                  cacheMode = _this._urlsToCacheModes.get(url);
                  request = new Request(url, {
                    integrity: integrity,
                    cache: cacheMode,
                    credentials: 'same-origin'
                  });
                  _context.next = 12;
                  return Promise.all(_this.strategy.handleAll({
                    params: {
                      cacheKey: cacheKey
                    },
                    request: request,
                    event: event
                  }));

                case 12:
                  _context.next = 5;
                  break;

                case 14:
                  _context.next = 19;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context["catch"](3);

                  _iterator2.e(_context.t0);

                case 19:
                  _context.prev = 19;

                  _iterator2.f();

                  return _context.finish(19);

                case 22:
                  updatedURLs = installReportPlugin.updatedURLs, notUpdatedURLs = installReportPlugin.notUpdatedURLs;

                  return _context.abrupt("return", {
                    updatedURLs: updatedURLs,
                    notUpdatedURLs: notUpdatedURLs
                  });

                case 25:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[3, 16, 19, 22]]);
        })));
      }
      /**
       * Deletes assets that are no longer present in the current precache manifest.
       * Call this method from the service worker activate event.
       *
       * Note: this method calls `event.waitUntil()` for you, so you do not need
       * to call it yourself in your event handlers.
       *
       * @param {ExtendableEvent}
       * @return {Promise<module:workbox-precaching.CleanupResult>}
       */

    }, {
      key: "activate",
      value: function activate(event) {
        var _this2 = this;

        return waitUntil(event, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var cache, currentlyCachedRequests, expectedCacheKeys, deletedURLs, _iterator3, _step3, request;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return self.caches.open(_this2.strategy.cacheName);

                case 2:
                  cache = _context2.sent;
                  _context2.next = 5;
                  return cache.keys();

                case 5:
                  currentlyCachedRequests = _context2.sent;
                  expectedCacheKeys = new Set(_this2._urlsToCacheKeys.values());
                  deletedURLs = [];
                  _iterator3 = _createForOfIteratorHelper(currentlyCachedRequests);
                  _context2.prev = 9;

                  _iterator3.s();

                case 11:
                  if ((_step3 = _iterator3.n()).done) {
                    _context2.next = 19;
                    break;
                  }

                  request = _step3.value;

                  if (expectedCacheKeys.has(request.url)) {
                    _context2.next = 17;
                    break;
                  }

                  _context2.next = 16;
                  return cache["delete"](request);

                case 16:
                  deletedURLs.push(request.url);

                case 17:
                  _context2.next = 11;
                  break;

                case 19:
                  _context2.next = 24;
                  break;

                case 21:
                  _context2.prev = 21;
                  _context2.t0 = _context2["catch"](9);

                  _iterator3.e(_context2.t0);

                case 24:
                  _context2.prev = 24;

                  _iterator3.f();

                  return _context2.finish(24);

                case 27:

                  return _context2.abrupt("return", {
                    deletedURLs: deletedURLs
                  });

                case 29:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[9, 21, 24, 27]]);
        })));
      }
      /**
       * Returns a mapping of a precached URL to the corresponding cache key, taking
       * into account the revision information for the URL.
       *
       * @return {Map<string, string>} A URL to cache key mapping.
       */

    }, {
      key: "getURLsToCacheKeys",
      value: function getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
      }
      /**
       * Returns a list of all the URLs that have been precached by the current
       * service worker.
       *
       * @return {Array<string>} The precached URLs.
       */

    }, {
      key: "getCachedURLs",
      value: function getCachedURLs() {
        return _toConsumableArray(this._urlsToCacheKeys.keys());
      }
      /**
       * Returns the cache key used for storing a given URL. If that URL is
       * unversioned, like `/index.html', then the cache key will be the original
       * URL with a search parameter appended to it.
       *
       * @param {string} url A URL whose cache key you want to look up.
       * @return {string} The versioned URL that corresponds to a cache key
       * for the original URL, or undefined if that URL isn't precached.
       */

    }, {
      key: "getCacheKeyForURL",
      value: function getCacheKeyForURL(url) {
        var urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
      }
      /**
       * This acts as a drop-in replacement for
       * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
       * with the following differences:
       *
       * - It knows what the name of the precache is, and only checks in that cache.
       * - It allows you to pass in an "original" URL without versioning parameters,
       * and it will automatically look up the correct cache key for the currently
       * active revision of that URL.
       *
       * E.g., `matchPrecache('index.html')` will find the correct precached
       * response for the currently active service worker, even if the actual cache
       * key is `'/index.html?__WB_REVISION__=1234abcd'`.
       *
       * @param {string|Request} request The key (without revisioning parameters)
       * to look up in the precache.
       * @return {Promise<Response|undefined>}
       */

    }, {
      key: "matchPrecache",
      value: function () {
        var _matchPrecache = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request) {
          var url, cacheKey, cache;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  url = request instanceof Request ? request.url : request;
                  cacheKey = this.getCacheKeyForURL(url);

                  if (!cacheKey) {
                    _context3.next = 7;
                    break;
                  }

                  _context3.next = 5;
                  return self.caches.open(this.strategy.cacheName);

                case 5:
                  cache = _context3.sent;
                  return _context3.abrupt("return", cache.match(cacheKey));

                case 7:
                  return _context3.abrupt("return", undefined);

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function matchPrecache(_x) {
          return _matchPrecache.apply(this, arguments);
        }

        return matchPrecache;
      }()
      /**
       * Returns a function that looks up `url` in the precache (taking into
       * account revision information), and returns the corresponding `Response`.
       *
       * @param {string} url The precached URL which will be used to lookup the
       * `Response`.
       * @return {module:workbox-routing~handlerCallback}
       */

    }, {
      key: "createHandlerBoundToURL",
      value: function createHandlerBoundToURL(url) {
        var _this3 = this;

        var cacheKey = this.getCacheKeyForURL(url);

        if (!cacheKey) {
          throw new WorkboxError('non-precached-url', {
            url: url
          });
        }

        return function (options) {
          options.request = new Request(url);
          options.params = _objectSpread2({
            cacheKey: cacheKey
          }, options.params);
          return _this3.strategy.handle(options);
        };
      }
    }, {
      key: "strategy",
      get: function get() {
        return this._strategy;
      }
    }]);

    return PrecacheController;
  }();

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  var precacheController;
  /**
   * @return {PrecacheController}
   * @private
   */

  var getOrCreatePrecacheController = function getOrCreatePrecacheController() {
    if (!precacheController) {
      precacheController = new PrecacheController();
    }

    return precacheController;
  };

  try {
    self['workbox:core:6.0.2'] && _();
  } catch (e) {}

  var logger$1 =  null ;

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */

  var fallback$2 = function fallback(code) {
    var msg = code;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length > 0) {
      msg += " :: ".concat(JSON.stringify(args));
    }

    return msg;
  };

  var messageGenerator$2 =  fallback$2 ;

  /**
   * Workbox errors should be thrown with this class.
   * This allows use to ensure the type easily in tests,
   * helps developers identify errors from workbox
   * easily and allows use to optimise error
   * messages correctly.
   *
   * @private
   */

  var WorkboxError$2 = /*#__PURE__*/function (_Error) {
    _inherits(WorkboxError, _Error);

    var _super = _createSuper(WorkboxError);

    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    function WorkboxError(errorCode, details) {
      var _this;

      _classCallCheck(this, WorkboxError);

      var message = messageGenerator$2(errorCode, details);
      _this = _super.call(this, message);
      _this.name = errorCode;
      _this.details = details;
      return _this;
    }

    return WorkboxError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  try {
    self['workbox:routing:6.0.2'] && _();
  } catch (e) {}

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * The default HTTP method, 'GET', used when there's no specific method
   * configured for a route.
   *
   * @type {string}
   *
   * @private
   */

  var defaultMethod = 'GET';

  /**
   * @param {function()|Object} handler Either a function, or an object with a
   * 'handle' method.
   * @return {Object} An object with a handle method.
   *
   * @private
   */

  var normalizeHandler = function normalizeHandler(handler) {
    if (handler && _typeof(handler) === 'object') {

      return handler;
    } else {

      return {
        handle: handler
      };
    }
  };

  /**
   * A `Route` consists of a pair of callback functions, "match" and "handler".
   * The "match" callback determine if a route should be used to "handle" a
   * request by returning a non-falsy value if it can. The "handler" callback
   * is called when there is a match and should return a Promise that resolves
   * to a `Response`.
   *
   * @memberof module:workbox-routing
   */

  var Route =
  /**
   * Constructor for Route class.
   *
   * @param {module:workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  function Route(match, handler) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultMethod;

    _classCallCheck(this, Route);
    // altered by minificaton.


    this.handler = normalizeHandler(handler);
    this.match = match;
    this.method = method;
  };

  /**
   * RegExpRoute makes it easy to create a regular expression based
   * [Route]{@link module:workbox-routing.Route}.
   *
   * For same-origin requests the RegExp only needs to match part of the URL. For
   * requests against third-party servers, you must define a RegExp that matches
   * the start of the URL.
   *
   * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
   *
   * @memberof module:workbox-routing
   * @extends module:workbox-routing.Route
   */

  var RegExpRoute = /*#__PURE__*/function (_Route) {
    _inherits(RegExpRoute, _Route);

    var _super = _createSuper(RegExpRoute);

    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * [handler's]{@link module:workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    function RegExpRoute(regExp, handler, method) {
      _classCallCheck(this, RegExpRoute);

      var match = function match(_ref) {
        var url = _ref.url;
        var result = regExp.exec(url.href); // Return immediately if there's no match.

        if (!result) {
          return;
        } // Require that the match start at the first character in the URL string
        // if it's a cross-origin request.
        // See https://github.com/GoogleChrome/workbox/issues/281 for the context
        // behind this behavior.


        if (url.origin !== location.origin && result.index !== 0) {

          return;
        } // If the route matches, but there aren't any capture groups defined, then
        // this will return [], which is truthy and therefore sufficient to
        // indicate a match.
        // If there are capture groups, then it will return their values.


        return result.slice(1);
      };

      return _super.call(this, match, handler, method);
    }

    return RegExpRoute;
  }(Route);

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */

  var getFriendlyURL$2 = function getFriendlyURL(url) {
    var urlObj = new URL(String(url), location.href); // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.

    return urlObj.href.replace(new RegExp("^".concat(location.origin)), '');
  };

  /**
   * The Router can be used to process a FetchEvent through one or more
   * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
   * a matching route exists.
   *
   * If no route matches a given a request, the Router will use a "default"
   * handler if one is defined.
   *
   * Should the matching Route throw an error, the Router will use a "catch"
   * handler if one is defined to gracefully deal with issues and respond with a
   * Request.
   *
   * If a request matches multiple routes, the **earliest** registered route will
   * be used to respond to the request.
   *
   * @memberof module:workbox-routing
   */

  var Router = /*#__PURE__*/function () {
    /**
     * Initializes a new Router.
     */
    function Router() {
      _classCallCheck(this, Router);

      this._routes = new Map();
      this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */


    _createClass(Router, [{
      key: "addFetchListener",

      /**
       * Adds a fetch event listener to respond to events when a route matches
       * the event's request.
       */
      value: function addFetchListener() {
        var _this = this;

        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', function (event) {
          var request = event.request;

          var responsePromise = _this.handleRequest({
            request: request,
            event: event
          });

          if (responsePromise) {
            event.respondWith(responsePromise);
          }
        });
      }
      /**
       * Adds a message event listener for URLs to cache from the window.
       * This is useful to cache resources loaded on the page prior to when the
       * service worker started controlling it.
       *
       * The format of the message data sent from the window should be as follows.
       * Where the `urlsToCache` array may consist of URL strings or an array of
       * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
       *
       * ```
       * {
       *   type: 'CACHE_URLS',
       *   payload: {
       *     urlsToCache: [
       *       './script1.js',
       *       './script2.js',
       *       ['./script3.js', {mode: 'no-cors'}],
       *     ],
       *   },
       * }
       * ```
       */

    }, {
      key: "addCacheListener",
      value: function addCacheListener() {
        var _this2 = this;

        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', function (event) {
          if (event.data && event.data.type === 'CACHE_URLS') {
            var payload = event.data.payload;

            var requestPromises = Promise.all(payload.urlsToCache.map(function (entry) {
              if (typeof entry === 'string') {
                entry = [entry];
              }

              var request = _construct(Request, _toConsumableArray(entry));

              return _this2.handleRequest({
                request: request,
                event: event
              }); // TODO(philipwalton): TypeScript errors without this typecast for
              // some reason (probably a bug). The real type here should work but
              // doesn't: `Array<Promise<Response> | undefined>`.
            })); // TypeScript

            event.waitUntil(requestPromises); // If a MessageChannel was used, reply to the message on success.

            if (event.ports && event.ports[0]) {
              requestPromises.then(function () {
                return event.ports[0].postMessage(true);
              });
            }
          }
        });
      }
      /**
       * Apply the routing rules to a FetchEvent object to get a Response from an
       * appropriate Route's handler.
       *
       * @param {Object} options
       * @param {Request} options.request The request to handle.
       * @param {ExtendableEvent} options.event The event that triggered the
       *     request.
       * @return {Promise<Response>|undefined} A promise is returned if a
       *     registered route can handle the request. If there is no matching
       *     route and there's no `defaultHandler`, `undefined` is returned.
       */

    }, {
      key: "handleRequest",
      value: function handleRequest(_ref) {
        var _this3 = this;

        var request = _ref.request,
            event = _ref.event;

        var url = new URL(request.url, location.href);

        if (!url.protocol.startsWith('http')) {

          return;
        }

        var sameOrigin = url.origin === location.origin;

        var _this$findMatchingRou = this.findMatchingRoute({
          event: event,
          request: request,
          sameOrigin: sameOrigin,
          url: url
        }),
            params = _this$findMatchingRou.params,
            route = _this$findMatchingRou.route;

        var handler = route && route.handler;
        // fall back to defaultHandler if that's defined.


        var method = request.method;

        if (!handler && this._defaultHandlerMap.has(method)) {

          handler = this._defaultHandlerMap.get(method);
        }

        if (!handler) {

          return;
        }
        // error. It should still callback to the catch handler.


        var responsePromise;

        try {
          responsePromise = handler.handle({
            url: url,
            request: request,
            event: event,
            params: params
          });
        } catch (err) {
          responsePromise = Promise.reject(err);
        }

        if (responsePromise instanceof Promise && this._catchHandler) {
          responsePromise = responsePromise["catch"](function (err) {

            return _this3._catchHandler.handle({
              url: url,
              request: request,
              event: event
            });
          });
        }

        return responsePromise;
      }
      /**
       * Checks a request and URL (and optionally an event) against the list of
       * registered routes, and if there's a match, returns the corresponding
       * route along with any params generated by the match.
       *
       * @param {Object} options
       * @param {URL} options.url
       * @param {Request} options.request The request to match.
       * @param {Event} options.event The corresponding event.
       * @return {Object} An object with `route` and `params` properties.
       *     They are populated if a matching route was found or `undefined`
       *     otherwise.
       */

    }, {
      key: "findMatchingRoute",
      value: function findMatchingRoute(_ref2) {
        var url = _ref2.url,
            sameOrigin = _ref2.sameOrigin,
            request = _ref2.request,
            event = _ref2.event;
        var routes = this._routes.get(request.method) || [];

        var _iterator = _createForOfIteratorHelper(routes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var route = _step.value;
            var params = void 0;
            var matchResult = route.match({
              url: url,
              sameOrigin: sameOrigin,
              request: request,
              event: event
            });

            if (matchResult) {
              if ("production" !== 'production') ; // See https://github.com/GoogleChrome/workbox/issues/2079


              params = matchResult;

              if (Array.isArray(matchResult) && matchResult.length === 0) {
                // Instead of passing an empty array in as params, use undefined.
                params = undefined;
              } else if (matchResult.constructor === Object && Object.keys(matchResult).length === 0) {
                // Instead of passing an empty object in as params, use undefined.
                params = undefined;
              } else if (typeof matchResult === 'boolean') {
                // For the boolean value true (rather than just something truth-y),
                // don't set params.
                // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                params = undefined;
              } // Return early if have a match.


              return {
                route: route,
                params: params
              };
            }
          } // If no match was found above, return and empty object.

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return {};
      }
      /**
       * Define a default `handler` that's called when no routes explicitly
       * match the incoming request.
       *
       * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
       *
       * Without a default handler, unmatched requests will go against the
       * network as if there were no service worker present.
       *
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       * @param {string} [method='GET'] The HTTP method to associate with this
       * default handler. Each method has its own default.
       */

    }, {
      key: "setDefaultHandler",
      value: function setDefaultHandler(handler) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMethod;

        this._defaultHandlerMap.set(method, normalizeHandler(handler));
      }
      /**
       * If a Route throws an error while handling a request, this `handler`
       * will be called and given a chance to provide a response.
       *
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       */

    }, {
      key: "setCatchHandler",
      value: function setCatchHandler(handler) {
        this._catchHandler = normalizeHandler(handler);
      }
      /**
       * Registers a route with the router.
       *
       * @param {module:workbox-routing.Route} route The route to register.
       */

    }, {
      key: "registerRoute",
      value: function registerRoute(route) {

        if (!this._routes.has(route.method)) {
          this._routes.set(route.method, []);
        } // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.


        this._routes.get(route.method).push(route);
      }
      /**
       * Unregisters a route with the router.
       *
       * @param {module:workbox-routing.Route} route The route to unregister.
       */

    }, {
      key: "unregisterRoute",
      value: function unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
          throw new WorkboxError$2('unregister-route-but-not-found-with-method', {
            method: route.method
          });
        }

        var routeIndex = this._routes.get(route.method).indexOf(route);

        if (routeIndex > -1) {
          this._routes.get(route.method).splice(routeIndex, 1);
        } else {
          throw new WorkboxError$2('unregister-route-route-not-registered');
        }
      }
    }, {
      key: "routes",
      get: function get() {
        return this._routes;
      }
    }]);

    return Router;
  }();

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  var defaultRouter;
  /**
   * Creates a new, singleton Router instance if one does not exist. If one
   * does already exist, that instance is returned.
   *
   * @private
   * @return {Router}
   */

  var getOrCreateDefaultRouter = function getOrCreateDefaultRouter() {
    if (!defaultRouter) {
      defaultRouter = new Router(); // The helpers that use the default Router assume these listeners exist.

      defaultRouter.addFetchListener();
      defaultRouter.addCacheListener();
    }

    return defaultRouter;
  };

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Easily register a RegExp, string, or function with a caching
   * strategy to a singleton Router instance.
   *
   * This method will generate a Route for you if needed and
   * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
   *
   * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
   * If the capture param is a `Route`, all other arguments will be ignored.
   * @param {module:workbox-routing~handlerCallback} [handler] A callback
   * function that returns a Promise resulting in a Response. This parameter
   * is required if `capture` is not a `Route` object.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   * @return {module:workbox-routing.Route} The generated `Route`(Useful for
   * unregistering).
   *
   * @memberof module:workbox-routing
   */

  function registerRoute(capture, handler, method) {
    var route;

    if (typeof capture === 'string') {
      var captureUrl = new URL(capture, location.href);

      var matchCallback = function matchCallback(_ref) {
        var url = _ref.url;

        return url.href === captureUrl.href;
      }; // If `capture` is a string then `handler` and `method` must be present.


      route = new Route(matchCallback, handler, method);
    } else if (capture instanceof RegExp) {
      // If `capture` is a `RegExp` then `handler` and `method` must be present.
      route = new RegExpRoute(capture, handler, method);
    } else if (typeof capture === 'function') {
      // If `capture` is a function then `handler` and `method` must be present.
      route = new Route(capture, handler, method);
    } else if (capture instanceof Route) {
      route = capture;
    } else {
      throw new WorkboxError$2('unsupported-route-type', {
        moduleName: 'workbox-routing',
        funcName: 'registerRoute',
        paramName: 'capture'
      });
    }

    var defaultRouter = getOrCreateDefaultRouter();
    defaultRouter.registerRoute(route);
    return route;
  }

  /**
   * Removes any URL search parameters that should be ignored.
   *
   * @param {URL} urlObject The original URL.
   * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
   * each search parameter name. Matches mean that the search parameter should be
   * ignored.
   * @return {URL} The URL with any ignored search parameters removed.
   *
   * @private
   * @memberof module:workbox-precaching
   */

  function removeIgnoredSearchParams(urlObject) {
    var ignoreURLParametersMatching = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var _loop = function _loop() {
      var paramName = _arr[_i];

      if (ignoreURLParametersMatching.some(function (regExp) {
        return regExp.test(paramName);
      })) {
        urlObject.searchParams["delete"](paramName);
      }
    };

    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (var _i = 0, _arr = _toConsumableArray(urlObject.searchParams.keys()); _i < _arr.length; _i++) {
      _loop();
    }

    return urlObject;
  }

  var _marked = /*#__PURE__*/regeneratorRuntime.mark(generateURLVariations);
  /**
   * Generator function that yields possible variations on the original URL to
   * check, one at a time.
   *
   * @param {string} url
   * @param {Object} options
   *
   * @private
   * @memberof module:workbox-precaching
   */

  function generateURLVariations(url) {
    var _ref,
        _ref$ignoreURLParamet,
        ignoreURLParametersMatching,
        _ref$directoryIndex,
        directoryIndex,
        _ref$cleanURLs,
        cleanURLs,
        urlManipulation,
        urlObject,
        urlWithoutIgnoredParams,
        directoryURL,
        cleanURL,
        additionalURLs,
        _iterator,
        _step,
        urlToAttempt,
        _args = arguments;

    return regeneratorRuntime.wrap(function generateURLVariations$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref$ignoreURLParamet = _ref.ignoreURLParametersMatching, ignoreURLParametersMatching = _ref$ignoreURLParamet === void 0 ? [/^utm_/, /^fbclid$/] : _ref$ignoreURLParamet, _ref$directoryIndex = _ref.directoryIndex, directoryIndex = _ref$directoryIndex === void 0 ? 'index.html' : _ref$directoryIndex, _ref$cleanURLs = _ref.cleanURLs, cleanURLs = _ref$cleanURLs === void 0 ? true : _ref$cleanURLs, urlManipulation = _ref.urlManipulation;
            urlObject = new URL(url, location.href);
            urlObject.hash = '';
            _context.next = 5;
            return urlObject.href;

          case 5:
            urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
            _context.next = 8;
            return urlWithoutIgnoredParams.href;

          case 8:
            if (!(directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/'))) {
              _context.next = 13;
              break;
            }

            directoryURL = new URL(urlWithoutIgnoredParams.href);
            directoryURL.pathname += directoryIndex;
            _context.next = 13;
            return directoryURL.href;

          case 13:
            if (!cleanURLs) {
              _context.next = 18;
              break;
            }

            cleanURL = new URL(urlWithoutIgnoredParams.href);
            cleanURL.pathname += '.html';
            _context.next = 18;
            return cleanURL.href;

          case 18:
            if (!urlManipulation) {
              _context.next = 37;
              break;
            }

            additionalURLs = urlManipulation({
              url: urlObject
            });
            _iterator = _createForOfIteratorHelper(additionalURLs);
            _context.prev = 21;

            _iterator.s();

          case 23:
            if ((_step = _iterator.n()).done) {
              _context.next = 29;
              break;
            }

            urlToAttempt = _step.value;
            _context.next = 27;
            return urlToAttempt.href;

          case 27:
            _context.next = 23;
            break;

          case 29:
            _context.next = 34;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](21);

            _iterator.e(_context.t0);

          case 34:
            _context.prev = 34;

            _iterator.f();

            return _context.finish(34);

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, null, [[21, 31, 34, 37]]);
  }

  /**
   * A subclass of [Route]{@link module:workbox-routing.Route} that takes a
   * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
   * instance and uses it to match incoming requests and handle fetching
   * responses from the precache.
   *
   * @memberof module:workbox-precaching
   * @extends module:workbox-routing.Route
   */

  var PrecacheRoute = /*#__PURE__*/function (_Route) {
    _inherits(PrecacheRoute, _Route);

    var _super = _createSuper(PrecacheRoute);

    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    function PrecacheRoute(precacheController, options) {
      _classCallCheck(this, PrecacheRoute);

      var match = function match(_ref) {
        var request = _ref.request;
        var urlsToCacheKeys = precacheController.getURLsToCacheKeys();

        var _iterator = _createForOfIteratorHelper(generateURLVariations(request.url, options)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var possibleURL = _step.value;
            var cacheKey = urlsToCacheKeys.get(possibleURL);

            if (cacheKey) {
              return {
                cacheKey: cacheKey
              };
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return;
      };

      return _super.call(this, match, precacheController.strategy);
    }

    return PrecacheRoute;
  }(Route);

  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Add a `fetch` listener to the service worker that will
   * respond to
   * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
   * with precached assets.
   *
   * Requests for assets that aren't precached, the `FetchEvent` will not be
   * responded to, allowing the event to fall through to other `fetch` event
   * listeners.
   *
   * @param {Object} [options] See
   * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
   *
   * @memberof module:workbox-precaching
   */

  function addRoute(options) {
    var precacheController = getOrCreatePrecacheController();
    var precacheRoute = new PrecacheRoute(precacheController, options);
    registerRoute(precacheRoute);
  }

  var SUBSTRING_TO_FIND = '-precache-';
  /**
   * Cleans up incompatible precaches that were created by older versions of
   * Workbox, by a service worker registered under the current scope.
   *
   * This is meant to be called as part of the `activate` event.
   *
   * This should be safe to use as long as you don't include `substringToFind`
   * (defaulting to `-precache-`) in your non-precache cache names.
   *
   * @param {string} currentPrecacheName The cache name currently in use for
   * precaching. This cache won't be deleted.
   * @param {string} [substringToFind='-precache-'] Cache names which include this
   * substring will be deleted (excluding `currentPrecacheName`).
   * @return {Array<string>} A list of all the cache names that were deleted.
   *
   * @private
   * @memberof module:workbox-precaching
   */

  var deleteOutdatedCaches = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(currentPrecacheName) {
      var substringToFind,
          cacheNames,
          cacheNamesToDelete,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              substringToFind = _args.length > 1 && _args[1] !== undefined ? _args[1] : SUBSTRING_TO_FIND;
              _context.next = 3;
              return self.caches.keys();

            case 3:
              cacheNames = _context.sent;
              cacheNamesToDelete = cacheNames.filter(function (cacheName) {
                return cacheName.includes(substringToFind) && cacheName.includes(self.registration.scope) && cacheName !== currentPrecacheName;
              });
              _context.next = 7;
              return Promise.all(cacheNamesToDelete.map(function (cacheName) {
                return self.caches["delete"](cacheName);
              }));

            case 7:
              return _context.abrupt("return", cacheNamesToDelete);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function deleteOutdatedCaches(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Adds an `activate` event listener which will clean up incompatible
   * precaches that were created by older versions of Workbox.
   *
   * @memberof module:workbox-precaching
   */

  function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', function (event) {
      var cacheName = cacheNames.getPrecacheName();
      event.waitUntil(deleteOutdatedCaches(cacheName).then(function (cachesDeleted) {
      }));
    });
  }

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Helper function that calls
   * {@link PrecacheController#matchPrecache} on the default
   * {@link PrecacheController} instance.
   *
   * If you are creating your own {@link PrecacheController}, then call
   * {@link PrecacheController#matchPrecache} on that instance,
   * instead of using this function.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   *
   * @memberof module:workbox-precaching
   */

  function matchPrecache(request) {
    var precacheController = getOrCreatePrecacheController();
    return precacheController.matchPrecache(request);
  }

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * Please note: This method **will not** serve any of the cached files for you.
   * It only precaches files. To respond to a network request you call
   * [addRoute()]{@link module:workbox-precaching.addRoute}.
   *
   * If you have a single array of files to precache, you can just call
   * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   *
   * @memberof module:workbox-precaching
   */

  function precache(entries) {
    var precacheController = getOrCreatePrecacheController();
    precacheController.precache(entries);
  }

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * This method will add entries to the precache list and add a route to
   * respond to fetch events.
   *
   * This is a convenience method that will call
   * [precache()]{@link module:workbox-precaching.precache} and
   * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
   *
   * @param {Array<Object|string>} entries Array of entries to precache.
   * @param {Object} [options] See
   * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
   *
   * @memberof module:workbox-precaching
   */

  function precacheAndRoute(entries, options) {
    precache(entries);
    addRoute(options);
  }

  /**
   * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
   * request strategy.
   *
   * A cache first strategy is useful for assets that have been revisioned,
   * such as URLs like `/styles/example.a8f5f1.css`, since they
   * can be cached for long periods of time.
   *
   * If the network request fails, and there is no cache match, this will throw
   * a `WorkboxError` exception.
   *
   * @extends module:workbox-strategies.Strategy
   * @memberof module:workbox-strategies
   */

  var CacheFirst = /*#__PURE__*/function (_Strategy) {
    _inherits(CacheFirst, _Strategy);

    var _super = _createSuper(CacheFirst);

    function CacheFirst() {
      _classCallCheck(this, CacheFirst);

      return _super.apply(this, arguments);
    }

    _createClass(CacheFirst, [{
      key: "_handle",

      /**
       * @private
       * @param {Request|string} request A request to run this strategy for.
       * @param {module:workbox-strategies.StrategyHandler} handler The event that
       *     triggered the request.
       * @return {Promise<Response>}
       */
      value: function () {
        var _handle2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
          var response, error;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:

                  _context.next = 4;
                  return handler.cacheMatch(request);

                case 4:
                  response = _context.sent;

                  if (response) {
                    _context.next = 19;
                    break;
                  }

                  _context.prev = 7;
                  _context.next = 10;
                  return handler.fetchAndCachePut(request);

                case 10:
                  response = _context.sent;
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](7);
                  error = _context.t0;

                case 16:

                  _context.next = 20;
                  break;

                case 19:

                case 20:

                  if (response) {
                    _context.next = 23;
                    break;
                  }

                  throw new WorkboxError$1('no-response', {
                    url: request.url,
                    error: error
                  });

                case 23:
                  return _context.abrupt("return", response);

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[7, 13]]);
        }));

        function _handle(_x, _x2) {
          return _handle2.apply(this, arguments);
        }

        return _handle;
      }()
    }]);

    return CacheFirst;
  }(Strategy);

  var cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: function () {
      var _cacheWillUpdate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                response = _ref.response;

                if (!(response.status === 200 || response.status === 0)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", response);

              case 3:
                return _context.abrupt("return", null);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function cacheWillUpdate(_x) {
        return _cacheWillUpdate.apply(this, arguments);
      }

      return cacheWillUpdate;
    }()
  };

  /**
   * An implementation of a
   * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
   * request strategy.
   *
   * Resources are requested from both the cache and the network in parallel.
   * The strategy will respond with the cached version if available, otherwise
   * wait for the network response. The cache is updated with the network response
   * with each successful request.
   *
   * By default, this strategy will cache responses with a 200 status code as
   * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
   * Opaque responses are cross-origin requests where the response doesn't
   * support [CORS]{@link https://enable-cors.org/}.
   *
   * If the network request fails, and there is no cache match, this will throw
   * a `WorkboxError` exception.
   *
   * @extends module:workbox-strategies.Strategy
   * @memberof module:workbox-strategies
   */

  var StaleWhileRevalidate = /*#__PURE__*/function (_Strategy) {
    _inherits(StaleWhileRevalidate, _Strategy);

    var _super = _createSuper(StaleWhileRevalidate);

    /**
     * @param {Object} options
     * @param {string} options.cacheName Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} options.fetchOptions Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of all fetch() requests made by this strategy.
     * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    function StaleWhileRevalidate(options) {
      var _this;

      _classCallCheck(this, StaleWhileRevalidate);

      _this = _super.call(this, options); // If this instance contains no plugins with a 'cacheWillUpdate' callback,
      // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.

      if (!_this.plugins.some(function (p) {
        return 'cacheWillUpdate' in p;
      })) {
        _this.plugins.unshift(cacheOkAndOpaquePlugin);
      }

      return _this;
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */


    _createClass(StaleWhileRevalidate, [{
      key: "_handle",
      value: function () {
        var _handle2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
          var fetchAndCachePromise, response, error;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:

                  fetchAndCachePromise = handler.fetchAndCachePut(request)["catch"](function () {// Swallow this error because a 'no-response' error will be thrown in
                    // main handler return flow. This will be in the `waitUntil()` flow.
                  });
                  _context.next = 5;
                  return handler.cacheMatch(request);

                case 5:
                  response = _context.sent;

                  if (!response) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 20;
                  break;

                case 10:

                  _context.prev = 11;
                  _context.next = 14;
                  return fetchAndCachePromise;

                case 14:
                  response = _context.sent;
                  _context.next = 20;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context["catch"](11);
                  error = _context.t0;

                case 20:

                  if (response) {
                    _context.next = 23;
                    break;
                  }

                  throw new WorkboxError$1('no-response', {
                    url: request.url,
                    error: error
                  });

                case 23:
                  return _context.abrupt("return", response);

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[11, 17]]);
        }));

        function _handle(_x, _x2) {
          return _handle2.apply(this, arguments);
        }

        return _handle;
      }()
    }]);

    return StaleWhileRevalidate;
  }(Strategy);

  try {
    self['workbox:core:6.0.2'] && _();
  } catch (e) {}

  /**
   * The Deferred class composes Promises in a way that allows for them to be
   * resolved or rejected from outside the constructor. In most cases promises
   * should be used directly, but Deferreds can be necessary when the logic to
   * resolve a promise must be separate.
   *
   * @private
   */

  var Deferred$1 =
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  function Deferred() {
    var _this = this;

    _classCallCheck(this, Deferred);

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  };

  try {
    self['workbox:streams:6.0.2'] && _();
  } catch (e) {}

  /**
   * Takes either a Response, a ReadableStream, or a
   * [BodyInit](https://fetch.spec.whatwg.org/#bodyinit) and returns the
   * ReadableStreamReader object associated with it.
   *
   * @param {module:workbox-streams.StreamSource} source
   * @return {ReadableStreamReader}
   * @private
   */

  function _getReaderFromSource(source) {
    if (source instanceof Response) {
      return source.body.getReader();
    }

    if (source instanceof ReadableStream) {
      return source.getReader();
    }

    return new Response(source).body.getReader();
  }
  /**
   * Takes multiple source Promises, each of which could resolve to a Response, a
   * ReadableStream, or a [BodyInit](https://fetch.spec.whatwg.org/#bodyinit).
   *
   * Returns an object exposing a ReadableStream with each individual stream's
   * data returned in sequence, along with a Promise which signals when the
   * stream is finished (useful for passing to a FetchEvent's waitUntil()).
   *
   * @param {Array<Promise<module:workbox-streams.StreamSource>>} sourcePromises
   * @return {Object<{done: Promise, stream: ReadableStream}>}
   *
   * @memberof module:workbox-streams
   */


  function concatenate(sourcePromises) {

    var readerPromises = sourcePromises.map(function (sourcePromise) {
      return Promise.resolve(sourcePromise).then(function (source) {
        return _getReaderFromSource(source);
      });
    });
    var streamDeferred = new Deferred$1();
    var i = 0;
    var stream = new ReadableStream({
      pull: function pull(controller) {
        var _this = this;

        return readerPromises[i].then(function (reader) {
          return reader.read();
        }).then(function (result) {
          if (result.done) {

            i++;

            if (i >= readerPromises.length) {

              controller.close();
              streamDeferred.resolve();
              return;
            } // The `pull` method is defined because we're inside it.


            return _this.pull(controller);
          } else {
            controller.enqueue(result.value);
          }
        })["catch"](function (error) {

          streamDeferred.reject(error);
          throw error;
        });
      },
      cancel: function cancel() {

        streamDeferred.resolve();
      }
    });
    return {
      done: streamDeferred.promise,
      stream: stream
    };
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * This is a utility method that determines whether the current browser supports
   * the features required to create streamed responses. Currently, it checks if
   * [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
   * is available.
   *
   * @private
   * @param {HeadersInit} [headersInit] If there's no `Content-Type` specified,
   * `'text/html'` will be used by default.
   * @return {boolean} `true`, if the current browser meets the requirements for
   * streaming responses, and `false` otherwise.
   *
   * @memberof module:workbox-streams
   */

  function createHeaders() {
    var headersInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // See https://github.com/GoogleChrome/workbox/issues/1461
    var headers = new Headers(headersInit);

    if (!headers.has('content-type')) {
      headers.set('content-type', 'text/html');
    }

    return headers;
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * Takes multiple source Promises, each of which could resolve to a Response, a
   * ReadableStream, or a [BodyInit](https://fetch.spec.whatwg.org/#bodyinit),
   * along with a
   * [HeadersInit](https://fetch.spec.whatwg.org/#typedefdef-headersinit).
   *
   * Returns an object exposing a Response whose body consists of each individual
   * stream's data returned in sequence, along with a Promise which signals when
   * the stream is finished (useful for passing to a FetchEvent's waitUntil()).
   *
   * @param {Array<Promise<module:workbox-streams.StreamSource>>} sourcePromises
   * @param {HeadersInit} [headersInit] If there's no `Content-Type` specified,
   * `'text/html'` will be used by default.
   * @return {Object<{done: Promise, response: Response}>}
   *
   * @memberof module:workbox-streams
   */

  function concatenateToResponse(sourcePromises, headersInit) {
    var _concatenate = concatenate(sourcePromises),
        done = _concatenate.done,
        stream = _concatenate.stream;

    var headers = createHeaders(headersInit);
    var response = new Response(stream, {
      headers: headers
    });
    return {
      done: done,
      response: response
    };
  }

  /*
    Copyright 2019 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  var supportStatus$1;
  /**
   * A utility function that determines whether the current browser supports
   * constructing a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
   * object.
   *
   * @return {boolean} `true`, if the current browser can successfully
   *     construct a `ReadableStream`, `false` otherwise.
   *
   * @private
   */

  function canConstructReadableStream() {
    if (supportStatus$1 === undefined) {
      // See https://github.com/GoogleChrome/workbox/issues/1473
      try {
        new ReadableStream({
          start: function start() {}
        });
        supportStatus$1 = true;
      } catch (error) {
        supportStatus$1 = false;
      }
    }

    return supportStatus$1;
  }

  /*
    Copyright 2018 Google LLC

    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  /**
   * This is a utility method that determines whether the current browser supports
   * the features required to create streamed responses. Currently, it checks if
   * [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
   * can be created.
   *
   * @return {boolean} `true`, if the current browser meets the requirements for
   * streaming responses, and `false` otherwise.
   *
   * @memberof module:workbox-streams
   */

  function isSupported() {
    return canConstructReadableStream();
  }

  /**
   * A shortcut to create a strategy that could be dropped-in to Workbox's router.
   *
   * On browsers that do not support constructing new `ReadableStream`s, this
   * strategy will automatically wait for all the `sourceFunctions` to complete,
   * and create a final response that concatenates their values together.
   *
   * @param {Array<function({event, request, url, params})>} sourceFunctions
   * An array of functions similar to {@link module:workbox-routing~handlerCallback}
   * but that instead return a {@link module:workbox-streams.StreamSource} (or a
   * Promise which resolves to one).
   * @param {HeadersInit} [headersInit] If there's no `Content-Type` specified,
   * `'text/html'` will be used by default.
   * @return {module:workbox-routing~handlerCallback}
   * @memberof module:workbox-streams
   */

  function strategy(sourceFunctions, headersInit) {
    return /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
        var event, request, url, params, sourcePromises, _concatenateToRespons, done, response, blobPartsPromises, blobParts, headers;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event = _ref.event, request = _ref.request, url = _ref.url, params = _ref.params;
                sourcePromises = sourceFunctions.map(function (fn) {
                  // Ensure the return value of the function is always a promise.
                  return Promise.resolve(fn({
                    event: event,
                    request: request,
                    url: url,
                    params: params
                  }));
                });

                if (!isSupported()) {
                  _context2.next = 6;
                  break;
                }

                _concatenateToRespons = concatenateToResponse(sourcePromises, headersInit), done = _concatenateToRespons.done, response = _concatenateToRespons.response;

                if (event) {
                  event.waitUntil(done);
                }

                return _context2.abrupt("return", response);

              case 6:
                // responses.


                blobPartsPromises = sourcePromises.map( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(sourcePromise) {
                    var source;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return sourcePromise;

                          case 2:
                            source = _context.sent;

                            if (!(source instanceof Response)) {
                              _context.next = 7;
                              break;
                            }

                            return _context.abrupt("return", source.blob());

                          case 7:
                            return _context.abrupt("return", new Response(source).blob());

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }());
                _context2.next = 10;
                return Promise.all(blobPartsPromises);

              case 10:
                blobParts = _context2.sent;
                headers = createHeaders(headersInit); // Constructing a new Response from a Blob source is well-supported.
                // So is constructing a new Blob from multiple source Blobs or strings.

                return _context2.abrupt("return", new Response(new Blob(blobParts), {
                  headers: headers
                }));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
  }

  precacheAndRoute([{"revision":"023b3876bb73aa541367fc40a193d2b7","url":"node_modules/bootstrap/dist/css/bootstrap.min.css"},{"revision":"7f389f5d2622ce2090eca7c36bcb90bc","url":"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"},{"revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a","url":"node_modules/jquery/dist/jquery.min.js"},{"revision":"bef8804ac792065d0979fe124e99132f","url":"assets/icons/android-icon-144x144.png"},{"revision":"14955c89fbbb488a6f42bccfdff500a9","url":"assets/icons/android-icon-192x192.png"},{"revision":"9119b8498a1cf558b9c8a453b18bdcc2","url":"assets/icons/android-icon-36x36.png"},{"revision":"ebfd8c223bef69a29e77c4cb33b3b968","url":"assets/icons/android-icon-48x48.png"},{"revision":"3a89376f3c8b29886eca32b5d363f03d","url":"assets/icons/android-icon-72x72.png"},{"revision":"1cd347774ecceae5a1d58c6cda110e6b","url":"assets/icons/android-icon-96x96.png"},{"revision":"61e7f5e1e93d52c90df455a8c922a9a5","url":"assets/icons/apple-icon-114x114.png"},{"revision":"accabae3409ba247f42ff040b8fedbc6","url":"assets/icons/apple-icon-120x120.png"},{"revision":"bef8804ac792065d0979fe124e99132f","url":"assets/icons/apple-icon-144x144.png"},{"revision":"1178f37d7c7aa523d443fd9c91d7d840","url":"assets/icons/apple-icon-152x152.png"},{"revision":"4c9bdb47ef728e33d8bffa4bb47b736f","url":"assets/icons/apple-icon-180x180.png"},{"revision":"8caffd092dd5139981ac228f0953b7c2","url":"assets/icons/apple-icon-57x57.png"},{"revision":"30dc13ba1e39720d7a5013ead866344f","url":"assets/icons/apple-icon-60x60.png"},{"revision":"3a89376f3c8b29886eca32b5d363f03d","url":"assets/icons/apple-icon-72x72.png"},{"revision":"3e9ca1af32ffd73cfea86cb33218bc2c","url":"assets/icons/apple-icon-76x76.png"},{"revision":"4ff2d1147023f526309bcbdef4ef6ada","url":"assets/icons/apple-icon-precomposed.png"},{"revision":"4ff2d1147023f526309bcbdef4ef6ada","url":"assets/icons/apple-icon.png"},{"revision":"624d2a0f99f3cd064546c4bb0edf6383","url":"assets/icons/favicon-16x16.png"},{"revision":"d8b2e8faab65187d013716f9e9d81cc5","url":"assets/icons/favicon-32x32.png"},{"revision":"1cd347774ecceae5a1d58c6cda110e6b","url":"assets/icons/favicon-96x96.png"},{"revision":"4ff2d1147023f526309bcbdef4ef6ada","url":"assets/icons/icon.png"},{"revision":"bef8804ac792065d0979fe124e99132f","url":"assets/icons/ms-icon-144x144.png"},{"revision":"9156c4852adc113f83009213c14861ab","url":"assets/icons/ms-icon-150x150.png"},{"revision":"b03a3c761218e60f9f57a89c41c3f17b","url":"assets/icons/ms-icon-310x310.png"},{"revision":"c5f25fa6a93484231f681a6a8d4ef7cd","url":"assets/icons/ms-icon-70x70.png"},{"revision":"46d53e970855681637d6bf13956de769","url":"app.css"},{"revision":"c61ee52b74c56809d4789be550ba4922","url":"app.js"},{"revision":"c2605b03676b91d0e701d2a283ee7997","url":"partials/about.html"},{"revision":"97e852233f256b6af2d4a2f5670a6560","url":"partials/articles-close.html"},{"revision":"0b7f9a154844185398a7794772d6af16","url":"partials/articles.html"},{"revision":"94632274930407ebb8b717387342fa06","url":"partials/footer.html"},{"revision":"d7f0cb234d7706e6bee52947b7c290dc","url":"partials/header.html"},{"revision":"111b4215fe3b72868aca41618e0915cd","url":"partials/hero.html"},{"revision":"c31c83bbba2ee3acaceb47e1dc6c2bb0","url":"partials/info.html"}]);
  cleanupOutdatedCaches();
  var apiRoute = "http://localhost:3000/api/news";
  var cacheStrategy = new CacheFirst();
  var apiStrategy = new StaleWhileRevalidate({
    cacheName: 'api-cache'
  });
  registerRoute('/', strategy([function () {
    return matchPrecache('partials/header.html');
  }, function () {
    return matchPrecache('partials/info.html');
  }, function () {
    return matchPrecache('partials/hero.html');
  }, function () {
    return matchPrecache('partials/articles.html');
  }, /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var event, url, response, articles, cards;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event = _ref.event, url = _ref.url;
              _context.prev = 1;
              _context.next = 4;
              return apiStrategy.handle({
                event: event,
                request: apiRoute
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              articles = _context.sent;
              cards = '';
              articles.forEach(function (article) {
                cards += generateCard(article);
              });
              return _context.abrupt("return", cards);

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), function () {
    return matchPrecache('partials/articles-close.html');
  }, function () {
    return matchPrecache('partials/footer.html');
  }]));
  registerRoute(new RegExp('/news/[0-9]+'), strategy([function () {
    return matchPrecache('partials/header.html');
  }, function () {
    return matchPrecache('partials/info.html');
  }, function () {
    return matchPrecache('partials/hero.html');
  }, /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
      var event, url, id, response, article;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event = _ref3.event, url = _ref3.url;
              id = url.pathname.split('/')[2];
              _context2.prev = 2;
              _context2.next = 5;
              return apiStrategy.handle({
                event: event,
                request: "".concat(apiRoute, "/").concat(id)
              });

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              article = _context2.sent;
              return _context2.abrupt("return", generateArticle(article[0]));

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](2);
              console.error(_context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 12]]);
    }));

    return function (_x2) {
      return _ref4.apply(this, arguments);
    };
  }(), function () {
    return matchPrecache('partials/articles-close.html');
  }, function () {
    return matchPrecache('partials/footer.html');
  }]));
  registerRoute(new RegExp("/about.html"), strategy([function () {
    return matchPrecache('partials/header.html');
  }, function () {
    return matchPrecache('partials/info.html');
  }, function () {
    return matchPrecache('partials/about.html');
  }, function () {
    return matchPrecache('partials/footer.html');
  }]));
  skipWaiting();
  clientsClaim();

})));
//# sourceMappingURL=service-worker.js.map
