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
import Canvas from "./basic/Canvas.js";
import Mouse from "./basic/Mouse.js";
import Render from "./common/Render.js";
import Selector from "./drawable/Selector.js";
import Container from "./basic/Container.js";
var Application = /** @class */ (function () {
    function Application(data) {
        var e_1, _a, e_2, _b, e_3, _c;
        var _this = this;
        this.container = new Container();
        this.selector = new Selector();
        this.modes = [];
        this.actions = new Map();
        this.root = data.root;
        this.canvas = new Canvas(data.background);
        this.mouse = new Mouse(this.canvas.element);
        this.render = new Render();
        this.root.append(this.canvas.element);
        this.canvas.resize();
        if (data.modes) {
            this.modes = data.modes;
            try {
                for (var _d = __values(this.modes), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var mode = _e.value;
                    mode.app = this;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _f = __values(this.modes), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var mode = _g.value;
                    mode.mount();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
            try {
                for (var _h = __values(this.modes), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var mode = _j.value;
                    if (mode.autoStart) {
                        mode.start();
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        this.render.subscribe(function (data) {
            _this.mouse.tick();
            _this.canvas.clear();
            _this.canvas.draw(function (context, canvas) {
                _this.container.group.draw(context, canvas);
                _this.selector.draw(context, canvas);
            });
        });
    }
    Application.create = function (data) {
        return new Application(data);
    };
    return Application;
}());
export default Application;
