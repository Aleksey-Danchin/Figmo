import Canvas from "./Canvas.js";
import Curve from "./Curve.js";
import Group from "./Group.js";
import Mouse from "./Mouse.js";
import Point from "./Point.js";
import Render from "./Render.js";
import { ApplicationMode, Color, ActionButton } from "./types.js";

type ApplicationParams = {
	root: HTMLElement;
	background: Color;

	mainMenu?: {
		actions?: ActionButton[];
	};
};

class Application {
	root!: HTMLElement;
	canvas!: Canvas;
	mouse!: Mouse;
	render!: Render;
	container = new Group();

	mode = ApplicationMode.Move;
	payload = new Curve();
	dx = 0;
	dy = 0;

	actions = new Map<ApplicationMode, HTMLElement>();

	constructor(data: ApplicationParams) {
		this.root = data.root;
		this.canvas = new Canvas(data.background);
		this.mouse = new Mouse(this.canvas.element);
		this.render = new Render();

		this.root.append(this.canvas.element);
		this.canvas.resize();

		this.mouse.on("mousemove", () => {
			if (this.mode === ApplicationMode.Curve) {
				if (this.mouse.left) {
					const point = new Point(
						this.mouse.x - this.container.x,
						this.mouse.y - this.container.y
					);
					this.payload.add(point);
				}
			} else if (this.mode === ApplicationMode.Move) {
				if (this.mouse.left) {
					this.container.x += this.mouse.dx;
					this.container.y += this.mouse.dy;
				}
			}
		});

		this.mouse.on("mousedown", () => {
			if (this.mode === ApplicationMode.Curve) {
				this.container.add(this.payload);
			}
		});

		this.mouse.on("mouseup", () => {
			if (this.mode === ApplicationMode.Curve) {
				if (this.payload.points.size > 1) {
					this.payload.update();
					this.container.add(this.payload);

					this.payload = new Curve();
					this.container.add(this.payload);
				}
			}
		});

		this.render.subscribe((data) => {
			this.mouse.tick();

			this.canvas.clear();
			this.canvas.draw((context, canvas) =>
				this.container.draw(context, canvas)
			);
		});

		if (data.mainMenu) {
			if (data.mainMenu.actions) {
				for (const { type, element } of data.mainMenu.actions) {
					this.actions.set(type, element);

					element.addEventListener("click", () => {
						if (this.mode === type) {
							return;
						}

						this.mode = type;

						for (const element of this.actions.values()) {
							element.classList.remove("action--active");
						}

						element.classList.add("action--active");
					});
				}

				if (this.actions.has(this.mode)) {
					this.actions.get(this.mode)?.click();
				}
			}
		}
	}
}

export default Application;
