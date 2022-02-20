import Rectangle from "./Rectangle.js";

class Drawable extends Rectangle {
	visible: boolean = true;
	showBorder: boolean = false;

	draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
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
	}

	move(dx: number, dy: number) {
		this.x += dx;
		this.y += dy;
	}
}

export default Drawable;
