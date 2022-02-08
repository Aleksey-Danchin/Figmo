import Canvas from "./Canvas.js";
import Curve from "./Curve.js";
import Group from "./Group.js";
import Mouse from "./Mouse.js";
import Point from "./Point.js";
import Render from "./Render.js";
import { ApplicationMode, Color } from "./types.js";

type ApplicationParams = {
	root: HTMLElement;
	background: Color;
};

class Application {
	root!: HTMLElement;
	canvas!: Canvas;
	mouse!: Mouse;
	render!: Render;
	container = new Group();

	mode = ApplicationMode.Curve;
	payload = new Curve();

	constructor(data: ApplicationParams) {
		this.root = data.root;
		this.canvas = new Canvas(data.background);
		this.mouse = new Mouse(this.canvas.element);
		this.render = new Render();

		this.root.append(this.canvas.element);
		this.canvas.resize();

		this.container.add(this.payload);

		this.mouse.on("mousemove", () => {
			if (this.mouse.left) {
				const point = new Point(this.mouse.x, this.mouse.y);
				this.payload.add(point);
			}
		});

		this.mouse.on("mousedown", () => {});

		this.mouse.on("mouseup", () => {
			if (this.payload.points.size > 1) {
				this.payload.update();
				this.container.add(this.payload);

				this.payload = new Curve();
				this.container.add(this.payload);
			}
		});

		this.render.subscribe((data) => {
			this.mouse.tick();

			this.canvas.clear();
			this.canvas.draw((context, canvas) =>
				this.container.draw(context, canvas)
			);
		});
	}
}

export default Application;
