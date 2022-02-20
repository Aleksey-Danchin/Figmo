import { isPointInRectanle } from "../util.js";
import Group from "./Group";

class Rectangle {
	$x!: number;
	$y!: number;
	$width!: number;
	$height!: number;

	parent!: Group;

	constructor(
		x: number = 0,
		y: number = 0,
		width: number = 1,
		height: number = 1
	) {
		Object.assign(this, {
			$x: x,
			$y: y,
			$width: width,
			$height: height,
		});
	}

	pointIsUnder(point: { x: number; y: number }) {
		return isPointInRectanle(
			{
				x: this.clientX,
				y: this.clientY,
				width: this.width,
				height: this.height,
			},
			point
		);
	}

	get x() {
		return this.$x;
	}

	set x(value) {
		this.$x = value;
	}

	get y() {
		return this.$y;
	}

	set y(value) {
		this.$y = value;
	}

	get width() {
		return this.$width;
	}

	set width(value) {
		this.$width = value;
	}

	get height() {
		return this.$height;
	}

	set height(value) {
		this.$height = value;
	}

	get root(): Group {
		let root = this.parent;

		while (root) {
			root = root.parent;
		}

		return root;
	}

	get absoluteX(): number {
		if (this.parent) {
			return this.parent.absoluteX + this.x;
		}

		return this.x;
	}

	get absoluteY(): number {
		if (this.parent) {
			return this.parent.absoluteY + this.y;
		}

		return this.y;
	}

	get clientX(): number {
		if (this.root) {
			return this.root.offsetX + this.x;
		}

		return this.x;
	}

	get clientY(): number {
		if (this.root) {
			return this.root.offsetY + this.y;
		}

		return this.y;
	}
}

export default Rectangle;
