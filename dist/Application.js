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
import Canvas from "./Canvas.js";
import Curve from "./Curve.js";
import Group from "./Group.js";
import Mouse from "./Mouse.js";
import Point from "./Point.js";
import Render from "./Render.js";
import { ApplicationMode } from "./types.js";
var Application = /** @class */ (function () {
    function Application(data) {
        var e_1, _a;
        var _this = this;
        var _b;
        this.container = new Group();
        this.mode = ApplicationMode.Move;
        this.payload = new Curve();
        this.dx = 0;
        this.dy = 0;
        this.actions = new Map();
        this.root = data.root;
        this.canvas = new Canvas(data.background);
        this.mouse = new Mouse(this.canvas.element);
        this.render = new Render();
        this.root.append(this.canvas.element);
        this.canvas.resize();
        this.mouse.on("mousemove", function () {
            if (_this.mode === ApplicationMode.Curve) {
                if (_this.mouse.left) {
                    var point = new Point(_this.mouse.x - _this.container.x, _this.mouse.y - _this.container.y);
                    _this.payload.add(point);
                }
            }
            else if (_this.mode === ApplicationMode.Move) {
                if (_this.mouse.left) {
                    _this.container.x += _this.mouse.dx;
                    _this.container.y += _this.mouse.dy;
                }
            }
        });
        this.mouse.on("mousedown", function () {
            if (_this.mode === ApplicationMode.Curve) {
                _this.container.add(_this.payload);
            }
        });
        this.mouse.on("mouseup", function () {
            if (_this.mode === ApplicationMode.Curve) {
                if (_this.payload.points.size > 1) {
                    _this.payload.update();
                    _this.container.add(_this.payload);
                    _this.payload = new Curve();
                    _this.container.add(_this.payload);
                }
            }
        });
        this.render.subscribe(function (data) {
            _this.mouse.tick();
            _this.canvas.clear();
            _this.canvas.draw(function (context, canvas) {
                return _this.container.draw(context, canvas);
            });
        });
        if (data.mainMenu) {
            if (data.mainMenu.actions) {
                var _loop_1 = function (type, element) {
                    this_1.actions.set(type, element);
                    element.addEventListener("click", function () {
                        var e_2, _a;
                        if (_this.mode === type) {
                            return;
                        }
                        _this.mode = type;
                        try {
                            for (var _b = (e_2 = void 0, __values(_this.actions.values())), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var element_1 = _c.value;
                                element_1.classList.remove("action--active");
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        element.classList.add("action--active");
                    });
                };
                var this_1 = this;
                try {
                    for (var _c = __values(data.mainMenu.actions), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var _e = _d.value, type = _e.type, element = _e.element;
                        _loop_1(type, element);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                if (this.actions.has(this.mode)) {
                    (_b = this.actions.get(this.mode)) === null || _b === void 0 ? void 0 : _b.click();
                }
            }
        }
    }
    return Application;
}());
export default Application;
