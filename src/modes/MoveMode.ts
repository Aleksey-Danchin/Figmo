import Mode, { ModeParams } from "../core/Mode.js";

class MoveMode extends Mode {
	start = () => {
		if (this.running) {
			return;
		}

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
	};

	mousemoveHandler = () => {
		if (this.app.mouse.left) {
			this.app.container.x += this.app.mouse.dx;
			this.app.container.y += this.app.mouse.dy;
		}
	};

	static create(data: ModeParams) {
		return new MoveMode(data);
	}
}

export default MoveMode;
