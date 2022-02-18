import Drawable from "./Drawable.js";

class Group extends Drawable {
	items = new Set<Drawable>();
	offsetX = 0;
	offsetY = 0;

	add(...items: Drawable[]) {
		for (const item of items) {
			this.items.add(item);
		}
	}

	remove(...items: Drawable[]) {
		for (const item of items) {
			this.items.delete(item);
		}
	}

	draw(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
		context.save();

		context.translate(this.offsetX, this.offsetY);

		// --downlevelIteration
		for (const item of this.items.values()) {
			item.draw(context, canvas);
		}

		context.restore();
	}

	get x() {
		return Math.min(0, ...Array.from(this.items.values()).map((x) => x.x));
	}

	get y() {
		return Math.min(0, ...Array.from(this.items.values()).map((x) => x.y));
	}

	get width() {
		const maxX = Math.max(
			0,
			...Array.from(this.items.values()).map((x) => x.x + x.width)
		);

		return maxX - this.x;
	}

	get height() {
		const maxY = Math.max(
			0,
			...Array.from(this.items.values()).map((x) => x.y + x.height)
		);

		return maxY - this.y;
	}
}

export default Group;
