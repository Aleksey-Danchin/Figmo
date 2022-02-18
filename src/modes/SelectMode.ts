import Frame from "../core/drawable/Frame.js";
import Group from "../core/drawable/Group.js";
import Mode, { ModeParams } from "../core/Mode.js";
import { isPointInRectanle } from "../core/util.js";

class SelectMode extends Mode {
	sx = 0;
	sy = 0;

	group = new Group();
	frame = new Frame({ background: "rgba(0, 0, 255, 0.2)" });

	start = () => {
		if (this.running) {
			return;
		}

		if (this.app.mode) {
			this.app.mode.stop();
		}

		this.app.mode = this;

		this.element.classList.add("action--active");

		this.app.mouse.on("mouseup", this.mouseupHandler);
		this.app.mouse.on("mousedown", this.mousedownHandler);
		this.app.mouse.on("mousemove", this.mousemoveHandler);
	};

	stop = () => {
		this.element.classList.remove("action--active");
		this.app.container.remove(this.group, this.frame);

		this.app.mouse.off("mouseup", this.mouseupHandler);
		this.app.mouse.off("mousedown", this.mousedownHandler);
		this.app.mouse.off("mousemove", this.mousemoveHandler);
	};

	mouseupHandler = () => {
		this.app.container.remove(this.frame);
	};

	mousedownHandler = (e: MouseEvent) => {
		this.sx = this.app.mouse.x;
		this.sy = this.app.mouse.y;

		this.app.container.remove(this.group, this.frame);

		this.group = new Group();
		this.group.showBorder = true;
		this.frame = new Frame({
			background: "rgba(0, 0, 255, 0.05)",
			color: "rgba(0, 0, 255, 0.5)",
			lineWidth: 2,
		});

		this.app.container.add(this.group, this.frame);
	};

	mousemoveHandler = () => {
		if (!this.app.mouse.left) {
			return;
		}

		const { x, y } = this.app.mouse;

		const left = Math.min(x, this.sx);
		const top = Math.min(y, this.sy);
		const width = Math.abs(x - this.sx);
		const height = Math.abs(y - this.sy);

		Object.assign(this.frame, { x: left, y: top, width, height });

		this.group.items.clear();

		for (const drawable of this.app.container) {
			if (this.group.items.has(drawable) || this.frame === drawable) {
				continue;
			}

			const point1 = {
				x: drawable.x,
				y: drawable.y,
			};

			if (isPointInRectanle(this.frame, point1)) {
				this.group.add(drawable);
				continue;
			}

			const point2 = {
				x: drawable.x + drawable.width,
				y: drawable.y,
			};

			if (isPointInRectanle(this.frame, point2)) {
				this.group.add(drawable);
				continue;
			}

			const point3 = {
				x: drawable.x,
				y: drawable.y + drawable.height,
			};

			if (isPointInRectanle(this.frame, point3)) {
				this.group.add(drawable);
				continue;
			}

			const point4 = {
				x: drawable.x + drawable.width,
				y: drawable.y + drawable.height,
			};

			if (isPointInRectanle(this.frame, point4)) {
				this.group.add(drawable);
				continue;
			}
		}
	};

	static create(data: ModeParams) {
		return new SelectMode(data);
	}
}

export default SelectMode;
