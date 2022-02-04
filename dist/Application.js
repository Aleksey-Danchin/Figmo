import Canvas from "./Canvas.js";
import Mouse from "./Mouse.js";
import Render from "./Render.js";
var Application = /** @class */ (function () {
    function Application(data) {
        var _this = this;
        this.root = data.root;
        this.canvas = new Canvas(data.background);
        this.mouse = new Mouse(this.canvas.element);
        this.render = new Render();
        this.root.append(this.canvas.element);
        this.canvas.resize();
        this.render.subscribe(function (data) {
            _this.mouse.tick();
        });
    }
    return Application;
}());
export default Application;
