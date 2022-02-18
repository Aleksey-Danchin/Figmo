var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.handlers = new Map();
    }
    EventEmitter.prototype.addEventListener = function (name, handler) {
        return this.on(name, handler);
    };
    EventEmitter.prototype.on = function (name, handler) {
        var _a;
        if (!this.handlers.has(name)) {
            this.handlers.set(name, new Set());
        }
        (_a = this.handlers.get(name)) === null || _a === void 0 ? void 0 : _a.add(handler);
    };
    EventEmitter.prototype.off = function (name, handler) {
        if (!this.handlers.has(name)) {
            return;
        }
        var handlers = this.handlers.get(name);
        handlers === null || handlers === void 0 ? void 0 : handlers["delete"](handler);
        if ((handlers === null || handlers === void 0 ? void 0 : handlers.size) === 0) {
            this.handlers["delete"](name);
        }
    };
    EventEmitter.prototype.emit = function (name, event) {
        var e_1, _a;
        if (this.handlers.has(name)) {
            var handlers = this.handlers.get(name);
            if (handlers) {
                try {
                    for (var _b = __values(handlers.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var handler = _c.value;
                        handler(event);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
    };
    return EventEmitter;
}());
export default EventEmitter;
