import Drawable from "./Drawable.js";

class Group extends Drawable {
	items = new Set<Drawable>();

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

		context.translate(this.x, this.y);

		// --downlevelIteration
		for (const item of this.items.values()) {
			item.draw(context, canvas);
		}

		context.restore();
	}
}

export default Group;
