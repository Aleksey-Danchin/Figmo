var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDistance = function (a) {
        return Point.getDistance(this, a);
    };
    Point.getDistance = function (a, b) {
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        return Math.pow((Math.pow(dx, 2) + Math.pow(dy, 2)), 0.5);
    };
    return Point;
}());
export default Point;
