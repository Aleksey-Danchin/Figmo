var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Drawable from "./Drawable.js";
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = new Set();
        _this.offsetX = 0;
        _this.offsetY = 0;
        return _this;
    }
    Group.prototype.add = function () {
        var e_1, _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                this.items.add(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Group.prototype.remove = function () {
        var e_2, _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        try {
            for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                var item = items_2_1.value;
                this.items.delete(item);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (items_2_1 && !items_2_1.done && (_a = items_2.return)) _a.call(items_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Group.prototype.draw = function (context, canvas) {
        var e_3, _a;
        context.save();
        context.translate(this.offsetX, this.offsetY);
        try {
            // --downlevelIteration
            for (var _b = __values(this.items.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.draw(context, canvas);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        _super.prototype.draw.call(this, context, canvas);
        context.restore();
    };
    Group.prototype[Symbol.iterator] = function () {
        var _a, _b, item, e_4_1;
        var e_4, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 7, 8, 9]);
                    _a = __values(this.items), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 6];
                    item = _b.value;
                    if (!(item instanceof Group)) return [3 /*break*/, 3];
                    return [5 /*yield**/, __values(item[Symbol.iterator]())];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, item];
                case 4:
                    _d.sent();
                    _d.label = 5;
                case 5:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_4_1 = _d.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    };
    Object.defineProperty(Group.prototype, "x", {
        get: function () {
            var xs = Array.from(this.items.values()).map(function (x) { return x.x; });
            if (xs.length) {
                return Math.min.apply(Math, __spreadArray([], __read(xs), false));
            }
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "y", {
        get: function () {
            var ys = Array.from(this.items.values()).map(function (x) { return x.y; });
            if (ys.length) {
                return Math.min.apply(Math, __spreadArray([], __read(ys), false));
            }
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "width", {
        get: function () {
            var maxX = Math.max.apply(Math, __spreadArray([0], __read(Array.from(this.items.values()).map(function (x) { return x.x + x.width; })), false));
            return maxX - this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "height", {
        get: function () {
            var maxY = Math.max.apply(Math, __spreadArray([0], __read(Array.from(this.items.values()).map(function (x) { return x.y + x.height; })), false));
            return maxY - this.y;
        },
        enumerable: false,
        configurable: true
    });
    return Group;
}(Drawable));
export default Group;
