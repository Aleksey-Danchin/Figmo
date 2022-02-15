import Application from "./Application.js";
import EventEmitter from "./EventEmitter.js";

export type ModeParams = {
	autoStart?: boolean;
	element: HTMLElement;
};

class Mode extends EventEmitter<CustomEvent> {
	element!: HTMLElement;
	app!: Application;
	running = false;
	autoStart = false;

	constructor(data: ModeParams) {
		super();
		this.element = data.element;

		if (data.autoStart) {
			this.autoStart = data.autoStart;
		}
	}

	mount = () => {
		this.element.addEventListener("click", this.start);
	};

	unmount = () => {
		this.element.removeEventListener("click", this.start);
	};

	start = () => {};
	pause = () => {};
	resume = () => {};
	stop = () => {};
}

export default Mode;
