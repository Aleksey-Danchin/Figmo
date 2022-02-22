import { Color } from "../types";
import Drawable from "./Drawable.js";

export type FrameConstructor = {
	background?: Color;
	lineWidth?: number;
	color?: Color;
};

class Frame extends Drawable {
	background = "white";
	lineWidth = 0;
	color = "black";

	constructor(data: FrameConstructor = {}) {
		super();

		if (data.hasOwnProperty("background")) {
			this.background = data.background as Color;
		}

		if (data.hasOwnProperty("lineWidth")) {
			this.lineWidth = data.lineWidth as number;
		}

		if (data.hasOwnProperty("color")) {
			this.color = data.color as Color;
		}
	}

	draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
		if (!this.visible) {
			return;
		}

		context.beginPath();
		context.rect(this.x, this.y, this.width, this.height);
		context.fillStyle = this.background;
		context.fill();

		if (this.lineWidth) {
			context.lineWidth = this.lineWidth;
			context.strokeStyle = this.color;
			context.stroke();
		}

		super.draw(context, canvas);
	}
}

export default Frame;
