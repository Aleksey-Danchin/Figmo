import Rectangle from "./Rectangle.js";

class Drawable extends Rectangle {
	visible: boolean = true;
	selected: Boolean = false;

	draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {}

	move(dx: number, dy: number) {
		this.x += dx;
		this.y += dy;
	}
}

export default Drawable;
