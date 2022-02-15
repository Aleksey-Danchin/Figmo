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
import EventEmitter from "./EventEmitter.js";
var Mode = /** @class */ (function (_super) {
    __extends(Mode, _super);
    function Mode(data) {
        var _this = _super.call(this) || this;
        _this.running = false;
        _this.autoStart = false;
        _this.mount = function () {
            _this.element.addEventListener("click", _this.start);
        };
        _this.unmount = function () {
            _this.element.removeEventListener("click", _this.start);
        };
        _this.start = function () { };
        _this.pause = function () { };
        _this.resume = function () { };
        _this.stop = function () { };
        _this.element = data.element;
        if (data.autoStart) {
            _this.autoStart = data.autoStart;
        }
        return _this;
    }
    return Mode;
}(EventEmitter));
export default Mode;
