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
import Drawable from "./Drawable.js";
var Curve = /** @class */ (function (_super) {
    __extends(Curve, _super);
    function Curve() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.points = new Set();
        _this.color = "#000";
        _this.lineWidth = 3;
        return _this;
    }
    Curve.prototype.add = function () {
        var e_1, _a;
        var points = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            points[_i] = arguments[_i];
        }
        try {
            for (var points_1 = __values(points), points_1_1 = points_1.next(); !points_1_1.done; points_1_1 = points_1.next()) {
                var point = points_1_1.value;
                this.points.add(point);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (points_1_1 && !points_1_1.done && (_a = points_1.return)) _a.call(points_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Curve.prototype.update = function () {
        var e_2, _a;
        var points = __spreadArray([], __read(this.points), false);
        var maxX = -Infinity;
        var minX = Infinity;
        var maxY = -Infinity;
        var minY = Infinity;
        try {
            for (var points_2 = __values(points), points_2_1 = points_2.next(); !points_2_1.done; points_2_1 = points_2.next()) {
                var _b = points_2_1.value, x = _b.x, y = _b.y;
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (points_2_1 && !points_2_1.done && (_a = points_2.return)) _a.call(points_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.x = minX;
        this.y = minY;
        this.width = maxX - minX;
        this.height = maxY - minY;
    };
    Curve.prototype.draw = function (context, canvas) {
        if (!this.visible || !this.points.size) {
            return false;
        }
        context.beginPath();
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.color;
        var points = __spreadArray([], __read(this.points.values()), false);
        context.moveTo(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) {
            context.lineTo(points[i].x, points[i].y);
        }
        context.stroke();
        _super.prototype.draw.call(this, context, canvas);
        return true;
    };
    return Curve;
}(Drawable));
export default Curve;
