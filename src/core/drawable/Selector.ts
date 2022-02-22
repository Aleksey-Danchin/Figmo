import Frame from "./Frame.js";
import Group from "./Group.js";

class Selector extends Group {
	frame = new Frame({
		background: "rgba(0, 0, 255, 0.05)",
		color: "rgba(0, 0, 255, 0.5)",
		lineWidth: 2,
	});

	draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
		context.save();
		context.translate(this.offsetX, this.offsetY);
		this.frame.draw(context, canvas);

		if (this.items.size) {
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
		}

		context.restore();
	}
}

export default Selector;
