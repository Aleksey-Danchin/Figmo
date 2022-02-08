import Rectangle from "./Rectangle.js";

class Drawable extends Rectangle {
	visible: boolean = true;
	showBorder: boolean = true;

	draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
		throw Error(
			"Метод draw должен быть переопределен в классах наследниках."
		);
	}
}

export default Drawable;
