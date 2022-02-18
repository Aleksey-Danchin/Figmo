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

		super.draw(context, canvas);

		context.restore();
	}

	*[Symbol.iterator](): Generator<Drawable> {
		for (const item of this.items) {
			if (item instanceof Group) {
				yield* item[Symbol.iterator]();
			} else {
				yield item;
			}
		}
	}

	get x() {
		const xs = Array.from(this.items.values()).map((x) => x.x);

		if (xs.length) {
			return Math.min(...xs);
		}

		return 0;
	}

	get y() {
		const ys = Array.from(this.items.values()).map((x) => x.y);

		if (ys.length) {
			return Math.min(...ys);
		}

		return 0;
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
