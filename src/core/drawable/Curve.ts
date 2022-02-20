import Drawable from "./Drawable.js";
import Point from "./Point.js";
import { Color } from "../types.js";

class Curve extends Drawable {
	points = new Set<Point>();
	color: Color = "#000";
	lineWidth = 3;

	add(...points: Point[]) {
		for (const point of points) {
			this.points.add(point);
		}
	}

	update() {
		const points = [...this.points];

		let maxX = -Infinity;
		let minX = Infinity;
		let maxY = -Infinity;
		let minY = Infinity;

		for (const { x, y } of points) {
			minX = Math.min(minX, x);
			maxX = Math.max(maxX, x);

			minY = Math.min(minY, y);
			maxY = Math.max(maxY, y);
		}

		this.x = minX;
		this.y = minY;

		this.width = maxX - minX;
		this.height = maxY - minY;
	}

	draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
		if (!this.visible || !this.points.size) {
			return false;
		}

		context.beginPath();
		context.lineWidth = this.lineWidth;
		context.strokeStyle = this.color;

		const points = [...this.points.values()];

		context.moveTo(points[0].x, points[0].y);

		for (let i = 1; i < points.length; i++) {
			context.lineTo(points[i].x, points[i].y);
		}

		context.stroke();

		super.draw(context, canvas);

		return true;
	}

	move(dx: number, dy: number) {
		for (const point of this.points) {
			point.x += dx;
			point.y += dy;
		}

		this.update();
	}
}

export default Curve;
