import Curve from "../drawable/Curve.js";
import Point from "../drawable/Point.js";
import Mode, { ModeParams } from "./Mode.js";

class CurveMode extends Mode {
	payload = new Curve();

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

		this.payload = new Curve();
		this.app.container.add(this.payload);

		this.app.mouse.on("mousemove", this.mousemoveHandler);
		this.app.mouse.on("mousedown", this.mousedownHandler);
		this.app.mouse.on("mouseup", this.mouseupHandler);
	};

	stop = () => {
		this.element.classList.remove("action--active");
		this.app.mouse.off("mousemove", this.mousemoveHandler);
		this.app.mouse.off("mousedown", this.mousedownHandler);
		this.app.mouse.off("mouseup", this.mouseupHandler);

		this.running = false;

		if (this.payload.points.size < 2) {
			this.app.container.remove(this.payload);
		}
	};

	mousemoveHandler = () => {
		if (this.app.mouse.left) {
			const point = new Point(
				this.app.mouse.x - this.app.container.offsetX,
				this.app.mouse.y - this.app.container.offsetY
			);
			this.payload.add(point);
		}
	};

	mousedownHandler = () => {
		this.app.container.add(this.payload);
	};

	mouseupHandler = () => {
		if (this.payload.points.size > 1) {
			this.payload.update();
			this.app.container.add(this.payload);

			this.payload = new Curve();
			this.app.container.add(this.payload);
		}
	};

	static create(data: ModeParams) {
		return new CurveMode(data);
	}
}

export default CurveMode;
