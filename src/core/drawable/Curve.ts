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

	draw(context: CanvasRenderingContext2D) {
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

		if (this.showBorder) {
			context.beginPath();
			context.moveTo(this.x, this.y);
			context.lineTo(this.x + this.width, this.y);
			context.lineTo(this.x + this.width, this.y + this.height);
			context.lineTo(this.x, this.y + this.height);
			context.closePath();
			context.lineWidth = 1;
			context.strokeStyle = "blue";
			context.setLineDash([3, 3]);
			context.stroke();
			context.setLineDash([]);

			context.beginPath();
			context.arc(this.x, this.y, 5, 0, Math.PI * 2);
			context.lineWidth = 1;
			context.fillStyle = "white";
			context.strokeStyle = "gray";
			context.fill();
			context.stroke();

			context.beginPath();
			context.arc(this.x + this.width, this.y, 5, 0, Math.PI * 2);
			context.lineWidth = 1;
			context.fillStyle = "white";
			context.strokeStyle = "gray";
			context.fill();
			context.stroke();

			context.beginPath();
			context.arc(
				this.x + this.width,
				this.y + this.height,
				5,
				0,
				Math.PI * 2
			);
			context.lineWidth = 1;
			context.fillStyle = "white";
			context.strokeStyle = "gray";
			context.fill();
			context.stroke();

			context.beginPath();
			context.arc(this.x, this.y + this.height, 5, 0, Math.PI * 2);
			context.lineWidth = 1;
			context.fillStyle = "white";
			context.strokeStyle = "gray";
			context.fill();
			context.stroke();
		}

		return true;
	}
}

export default Curve;
