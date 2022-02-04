import Canvas from "./Canvas.js";
import Mouse from "./Mouse.js";
import Render from "./Render.js";
import { Color } from "./types.js";

type ApplicationParams = {
	root: HTMLElement;
	background: Color;
};

class Application {
	root!: HTMLElement;
	canvas!: Canvas;
	mouse!: Mouse;
	render!: Render;

	constructor(data: ApplicationParams) {
		this.root = data.root;
		this.canvas = new Canvas(data.background);
		this.mouse = new Mouse(this.canvas.element);
		this.render = new Render();

		this.root.append(this.canvas.element);
		this.canvas.resize();

		this.render.subscribe((data) => {
			this.mouse.tick();
		});
	}
}

export default Application;
