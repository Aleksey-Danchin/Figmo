import Canvas from "./basic/Canvas.js";
import Mode from "./modes/Mode.js";
import Mouse from "./basic/Mouse.js";
import Render from "./common/Render.js";
import { ApplicationMode, Color } from "./types.js";
import Selector from "./drawable/Selector.js";
import Container from "./basic/Container.js";

type ApplicationParams = {
	root: HTMLElement;
	background: Color;

	modes?: Mode[];
};

class Application {
	root!: HTMLElement;
	canvas!: Canvas;
	mouse!: Mouse;
	render!: Render;
	container = new Container();
	selector = new Selector();

	modes = [] as Mode[];
	mode!: Mode;

	actions = new Map<ApplicationMode, HTMLElement>();

	constructor(data: ApplicationParams) {
		this.root = data.root;
		this.canvas = new Canvas(data.background);
		this.mouse = new Mouse(this.canvas.element);
		this.render = new Render();

		this.root.append(this.canvas.element);
		this.canvas.resize();

		if (data.modes) {
			this.modes = data.modes;

			for (const mode of this.modes) {
				mode.app = this;
			}

			for (const mode of this.modes) {
				mode.mount();
			}

			for (const mode of this.modes) {
				if (mode.autoStart) {
					mode.start();
				}
			}
		}

		this.render.subscribe((data) => {
			this.mouse.tick();

			this.canvas.clear();

			this.canvas.draw((context, canvas) => {
				this.container.group.draw(context, canvas);
				this.selector.draw(context, canvas);
			});
		});
	}

	static create(data: ApplicationParams) {
		return new Application(data);
	}
}

export default Application;
