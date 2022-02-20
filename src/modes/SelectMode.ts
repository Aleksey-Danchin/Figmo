import Frame from "../core/drawable/Frame.js";
import Group from "../core/drawable/Group.js";
import Mode, { ModeParams } from "../core/Mode.js";
import { isRectanglesIntersection } from "../core/util.js";

class SelectMode extends Mode {
	sx = 0;
	sy = 0;

	offsetX = 0;
	offsetY = 0;

	moving = false;

	group = new Group();
	frame = new Frame({ background: "rgba(0, 0, 255, 0.2)" });

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

	stop = () => {
		this.element.classList.remove("action--active");
		this.app.container.remove(this.group, this.frame);
		this.running = false;

		this.app.mouse.off("mouseup", this.mouseupHandler);
		this.app.mouse.off("mousedown", this.mousedownHandler);
		this.app.mouse.off("mousemove", this.mousemoveHandler);
	};

	mouseupHandler = () => {
		this.app.container.remove(this.frame);
		this.moving = false;
	};

	mousedownHandler = () => {
		this.sx = this.app.mouse.x - this.app.container.offsetX;
		this.sy = this.app.mouse.y - this.app.container.offsetY;

		if (
			this.group.pointIsUnder({
				x: this.app.mouse.x - this.app.container.offsetX,
				y: this.app.mouse.y - this.app.container.offsetY,
			})
		) {
			this.offsetX = this.app.mouse.x - this.group.clientX;
			this.offsetY = this.app.mouse.y - this.group.clientY;
			this.moving = true;
		} else {
			this.app.container.remove(this.group, this.frame);

			this.group = new Group();
			this.group.showBorder = true;
			this.frame = new Frame({
				background: "rgba(0, 0, 255, 0.05)",
				color: "rgba(0, 0, 255, 0.5)",
				lineWidth: 2,
			});

			this.app.container.add(this.group, this.frame);
		}
	};

	mousemoveHandler = () => {
		if (!this.app.mouse.left) {
			return;
		}

		if (this.moving) {
			for (const drawable of this.group) {
				drawable.move(this.app.mouse.dx, this.app.mouse.dy);
			}
		} else {
			const x = this.app.mouse.x - this.app.container.offsetX;
			const y = this.app.mouse.y - this.app.container.offsetY;

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

				if (isRectanglesIntersection(this.frame, drawable)) {
					this.group.add(drawable);
				}
			}
		}
	};

	static create(data: ModeParams) {
		return new SelectMode(data);
	}
}

export default SelectMode;
