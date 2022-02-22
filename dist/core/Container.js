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
import Observer from "./common/Observer.js";
import Curve from "./drawable/Curve.js";
import Drawable from "./drawable/Drawable.js";
import Frame from "./drawable/Frame.js";
import Group from "./drawable/Group.js";
import Point from "./drawable/Point.js";
import { DrawableType } from "./types.js";
var Container = /** @class */ (function (_super) {
    __extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.$offsetX = 0;
        _this.$offsetY = 0;
        _this.$group = new Group();
        _this.changed = false;
        _this.items = new Set();
        return _this;
    }
    Container.prototype.add = function () {
        var e_1, _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var size = this.items.size;
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                if (item instanceof Drawable) {
                    this.items.add(item);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (size !== this.items.size) {
            this.changed = true;
            this.dispatch();
        }
    };
    Container.prototype.remove = function () {
        var e_2, _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var size = this.items.size;
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
        if (size !== this.items.size) {
            this.changed = true;
            this.dispatch();
        }
    };
    Container.prototype.convert = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.add.apply(this, __spreadArray([], __read(Container.convert.apply(Container, __spreadArray([], __read(items), false))), false));
    };
    Object.defineProperty(Container.prototype, "group", {
        get: function () {
            if (this.changed) {
                this.changed = false;
                this.$group = new Group({
                    offsetX: this.$offsetX,
                    offsetY: this.$offsetY,
                    items: Array.from(this.items),
                });
            }
            return this.$group;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "offsetX", {
        get: function () {
            return this.$offsetX;
        },
        set: function (offsetX) {
            this.$offsetX = offsetX;
            this.changed = true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "offsetY", {
        get: function () {
            return this.$offsetY;
        },
        set: function (offsetY) {
            this.$offsetY = offsetY;
            this.changed = true;
        },
        enumerable: false,
        configurable: true
    });
    Container.convert = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return items.map(function (item) {
            var e_3, _a;
            if (item.type === DrawableType.Curve) {
                var curve = new Curve();
                try {
                    for (var _b = __values(item.points), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = _c.value, x = _d.x, y = _d.y;
                        var point = new Point(x, y);
                        curve.add(point);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return curve;
            }
            if (item.type === DrawableType.Frame) {
                var frame = new Frame({
                    x: item.x,
                    y: item.y,
                    width: item.width,
                    height: item.height,
                });
                return frame;
            }
        });
    };
    return Container;
}(Observer));
export default Container;
