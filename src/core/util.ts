import Point from "./drawable/Point";
import Rectangle from "./drawable/Rectangle";

export const isPointInRectanle = (
	rectangle: Rectangle,
	point: { x: number; y: number }
) => {
	return (
		rectangle.x <= point.x &&
		point.x <= rectangle.x + rectangle.width &&
		rectangle.y <= point.y &&
		point.y <= rectangle.y + rectangle.height
	);
};

export const isLineIntersection = (
	p1: Point,
	p2: Point,
	p3: Point,
	p4: Point
) => {};
