export var isPointInRectanle = function (rectangle, point) {
    return (rectangle.x <= point.x &&
        point.x <= rectangle.x + rectangle.width &&
        rectangle.y <= point.y &&
        point.y <= rectangle.y + rectangle.height);
};
export var isLineIntersection = function (p1, p2, p3, p4) { };
