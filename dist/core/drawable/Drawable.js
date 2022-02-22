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
import Rectangle from "./Rectangle.js";
var Drawable = /** @class */ (function (_super) {
    __extends(Drawable, _super);
    function Drawable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visible = true;
        _this.selected = false;
        return _this;
    }
    Drawable.prototype.draw = function (context, canvas) { };
    Drawable.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return Drawable;
}(Rectangle));
export default Drawable;
