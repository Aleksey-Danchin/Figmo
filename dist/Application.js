import Canvas from "./Canvas.js";
import Curve from "./Curve.js";
import Group from "./Group.js";
import Mouse from "./Mouse.js";
import Point from "./Point.js";
import Render from "./Render.js";
import { ApplicationMode } from "./types.js";
var Application = /** @class */ (function () {
    function Application(data) {
        var _this = this;
        this.container = new Group();
        this.mode = ApplicationMode.Curve;
        this.payload = new Curve();
        this.root = data.root;
        this.canvas = new Canvas(data.background);
        this.mouse = new Mouse(this.canvas.element);
        this.render = new Render();
        this.root.append(this.canvas.element);
        this.canvas.resize();
        this.container.add(this.payload);
        this.mouse.on("mousemove", function () {
            if (_this.mouse.left) {
                var point = new Point(_this.mouse.x, _this.mouse.y);
                _this.payload.add(point);
            }
        });
        this.mouse.on("mousedown", function () { });
        this.mouse.on("mouseup", function () {
            if (_this.payload.points.size > 1) {
                _this.payload.update();
                _this.container.add(_this.payload);
                _this.payload = new Curve();
                _this.container.add(_this.payload);
            }
        });
        this.render.subscribe(function (data) {
            _this.mouse.tick();
            _this.canvas.clear();
            _this.canvas.draw(function (context, canvas) {
                return _this.container.draw(context, canvas);
            });
        });
    }
    return Application;
}());
export default Application;
