import Mode, { ModeParams } from "./Mode.js";
import { isRectanglesIntersection } from "../common/util.js";

class SelectMode extends Mode {
	sx = 0;
	sy = 0;

	offsetX = 0;
	offsetY = 0;

	moving = false;

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

		this.app.mouse.on("mouseup", this.mouseupHandler);
		this.app.mouse.on("mousedown", this.mousedownHandler);
		this.app.mouse.on("mousemove", this.mousemoveHandler);

		this.app.selector.frame.visible = false;
		this.app.selector.clear();

		this.app.selector.offsetX = this.app.container.offsetX;
		this.app.selector.offsetY = this.app.container.offsetY;
	};

	stop = () => {
		this.element.classList.remove("action--active");

		this.app.selector.frame.visible = false;
		this.app.selector.clear();
		this.running = false;

		this.app.mouse.off("mouseup", this.mouseupHandler);
		this.app.mouse.off("mousedown", this.mousedownHandler);
		this.app.mouse.off("mousemove", this.mousemoveHandler);
	};

	mouseupHandler = () => {
		this.app.selector.frame.visible = false;
		this.moving = false;
	};

	mousedownHandler = () => {
		this.sx = this.app.mouse.x - this.app.container.offsetX;
		this.sy = this.app.mouse.y - this.app.container.offsetY;

		if (
			this.app.selector.pointIsUnder({
				x: this.app.mouse.x - this.app.container.offsetX,
				y: this.app.mouse.y - this.app.container.offsetY,
			})
		) {
			this.offsetX = this.app.mouse.x - this.app.selector.clientX;
			this.offsetY = this.app.mouse.y - this.app.selector.clientY;
			this.moving = true;
		} else {
			this.app.selector.frame.visible = true;
			this.app.selector.frame.width = 0;
			this.app.selector.frame.height = 0;
		}
	};

	mousemoveHandler = () => {
		if (!this.app.mouse.left) {
			return;
		}

		if (this.moving) {
			for (const drawable of this.app.selector) {
				drawable.move(this.app.mouse.dx, this.app.mouse.dy);
			}
		} else {
			const x = this.app.mouse.x - this.app.container.offsetX;
			const y = this.app.mouse.y - this.app.container.offsetY;

			const left = Math.min(x, this.sx);
			const top = Math.min(y, this.sy);
			const width = Math.abs(x - this.sx);
			const height = Math.abs(y - this.sy);

			Object.assign(this.app.selector.frame, {
				x: left,
				y: top,
				width,
				height,
			});

			this.app.selector.clear();

			for (const drawable of this.app.container.group) {
				if (
					isRectanglesIntersection(this.app.selector.frame, drawable)
				) {
					this.app.selector.add(drawable);
				}
			}
		}
	};

	static create(data: ModeParams) {
		return new SelectMode(data);
	}
}

export default SelectMode;
