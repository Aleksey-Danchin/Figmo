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
import Frame from "../core/drawable/Frame.js";
import Group from "../core/drawable/Group.js";
import Mode from "../core/Mode.js";
import { isRectanglesIntersection } from "../core/util.js";
var SelectMode = /** @class */ (function (_super) {
    __extends(SelectMode, _super);
    function SelectMode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sx = 0;
        _this.sy = 0;
        _this.offsetX = 0;
        _this.offsetY = 0;
        _this.moving = false;
        _this.group = new Group();
        _this.frame = new Frame({ background: "rgba(0, 0, 255, 0.2)" });
        _this.start = function () {
            if (_this.running) {
                return;
            }
            _this.running = true;
            if (_this.app.mode) {
                _this.app.mode.stop();
            }
            _this.app.mode = _this;
            _this.element.classList.add("action--active");
            _this.app.mouse.on("mouseup", _this.mouseupHandler);
            _this.app.mouse.on("mousedown", _this.mousedownHandler);
            _this.app.mouse.on("mousemove", _this.mousemoveHandler);
            _this.app.container.remove(_this.group, _this.frame);
            _this.group = new Group();
            _this.group.showBorder = true;
            _this.frame = new Frame({
                background: "rgba(0, 0, 255, 0.05)",
                color: "rgba(0, 0, 255, 0.5)",
                lineWidth: 2,
            });
            _this.app.container.add(_this.group, _this.frame);
        };
        _this.stop = function () {
            _this.element.classList.remove("action--active");
            _this.app.container.remove(_this.group, _this.frame);
            _this.running = false;
            _this.app.mouse.off("mouseup", _this.mouseupHandler);
            _this.app.mouse.off("mousedown", _this.mousedownHandler);
            _this.app.mouse.off("mousemove", _this.mousemoveHandler);
        };
        _this.mouseupHandler = function () {
            _this.app.container.remove(_this.frame);
            _this.moving = false;
        };
        _this.mousedownHandler = function () {
            _this.sx = _this.app.mouse.x - _this.app.container.offsetX;
            _this.sy = _this.app.mouse.y - _this.app.container.offsetY;
            if (_this.group.pointIsUnder({
                x: _this.app.mouse.x - _this.app.container.offsetX,
                y: _this.app.mouse.y - _this.app.container.offsetY,
            })) {
                _this.offsetX = _this.app.mouse.x - _this.group.clientX;
                _this.offsetY = _this.app.mouse.y - _this.group.clientY;
                _this.moving = true;
            }
            else {
                _this.app.container.remove(_this.group, _this.frame);
                _this.group = new Group();
                _this.group.showBorder = true;
                _this.frame = new Frame({
                    background: "rgba(0, 0, 255, 0.05)",
                    color: "rgba(0, 0, 255, 0.5)",
                    lineWidth: 2,
                });
                _this.app.container.add(_this.group, _this.frame);
            }
        };
        _this.mousemoveHandler = function () {
            var e_1, _a, e_2, _b;
            if (!_this.app.mouse.left) {
                return;
            }
            if (_this.moving) {
                try {
                    for (var _c = __values(_this.group), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var drawable = _d.value;
                        drawable.move(_this.app.mouse.dx, _this.app.mouse.dy);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                var x = _this.app.mouse.x - _this.app.container.offsetX;
                var y = _this.app.mouse.y - _this.app.container.offsetY;
                var left = Math.min(x, _this.sx);
                var top_1 = Math.min(y, _this.sy);
                var width = Math.abs(x - _this.sx);
                var height = Math.abs(y - _this.sy);
                Object.assign(_this.frame, { x: left, y: top_1, width: width, height: height });
                _this.group.items.clear();
                try {
                    for (var _e = __values(_this.app.container), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var drawable = _f.value;
                        if (_this.group.items.has(drawable) || _this.frame === drawable) {
                            continue;
                        }
                        if (isRectanglesIntersection(_this.frame, drawable)) {
                            _this.group.add(drawable);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        };
        return _this;
    }
    SelectMode.create = function (data) {
        return new SelectMode(data);
    };
    return SelectMode;
}(Mode));
export default SelectMode;
