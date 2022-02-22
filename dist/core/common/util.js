export var isPointInRectanle = function (rectangle, point) {
    return rectangle.x <= point.x &&
        point.x <= rectangle.x + rectangle.width &&
        rectangle.y <= point.y &&
        point.y <= rectangle.y + rectangle.height;
};
export var isLineIntersection = function (p1, p2, p3, p4) {
    var x1 = p1.x, y1 = p1.y;
    var x2 = p2.x, y2 = p2.y;
    var x3 = p3.x, y3 = p3.y;
    var x4 = p4.x, y4 = p4.y;
    var q = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    var a = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
    var b = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
    if (q === 0) {
        if (a === 0 && b === 0) {
            return true;
        }
        return false;
    }
    var ua = a / q;
    var ub = b / q;
    return 0 <= ua && ua <= 1 && 0 <= ub && ub <= 1;
};
export var isRectanglesIntersection = function (a, b) {
    var x2 = b.x, y2 = b.y, w2 = b.width, h2 = b.height;
    var bPoints = [
        { x: x2, y: y2 },
        { x: x2 + w2, y: y2 },
        { x: x2 + w2, y: y2 + h2 },
        { x: x2, y: y2 + h2 },
    ];
    if (isPointInRectanle(a, bPoints[0]) ||
        isPointInRectanle(a, bPoints[1]) ||
        isPointInRectanle(a, bPoints[2]) ||
        isPointInRectanle(a, bPoints[3])) {
        return true;
    }
    var x1 = a.x, y1 = a.y, w1 = a.width, h1 = a.height;
    var aPoints = [
        { x: x1, y: y1 },
        { x: x1 + w1, y: y1 },
        { x: x1 + w1, y: y1 + h1 },
        { x: x1, y: y1 + h1 },
    ];
    if (isPointInRectanle(b, aPoints[0]) ||
        isPointInRectanle(b, aPoints[1]) ||
        isPointInRectanle(b, aPoints[2]) ||
        isPointInRectanle(b, aPoints[3])) {
        return true;
    }
    if (isLineIntersection(aPoints[0], aPoints[1], bPoints[1], bPoints[2]) ||
        isLineIntersection(aPoints[0], aPoints[1], bPoints[0], bPoints[3]) ||
        isLineIntersection(aPoints[2], aPoints[3], bPoints[1], bPoints[2]) ||
        isLineIntersection(aPoints[2], aPoints[3], bPoints[0], bPoints[3])) {
        return true;
    }
    if (isLineIntersection(aPoints[0], aPoints[3], bPoints[0], bPoints[1]) ||
        isLineIntersection(aPoints[0], aPoints[3], bPoints[2], bPoints[3]) ||
        isLineIntersection(aPoints[1], aPoints[2], bPoints[0], bPoints[1]) ||
        isLineIntersection(aPoints[1], aPoints[2], bPoints[2], bPoints[3])) {
        return true;
    }
    return false;
};
