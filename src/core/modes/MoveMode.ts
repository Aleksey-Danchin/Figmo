import Mode, { ModeParams } from "../Mode.js";

class MoveMode extends Mode {
	start = () => {
		if (this.running) {
			return;
		}

		this.running = true;

		if (this.app.mode) {
			this.app.mode.stop();
		}

		this.app.mode = this;
		this.element.classList.add("action--active");
		this.app.mouse.on("mousemove", this.mousemoveHandler);
	};

	stop = () => {
		this.element.classList.remove("action--active");
		this.app.mouse.off("mousemove", this.mousemoveHandler);
		this.running = false;
	};

	mousemoveHandler = () => {
		if (this.app.mouse.left) {
			this.app.container.offsetX += this.app.mouse.dx;
			this.app.container.offsetY += this.app.mouse.dy;
		}
	};

	static create(data: ModeParams) {
		return new MoveMode(data);
	}
}

export default MoveMode;
