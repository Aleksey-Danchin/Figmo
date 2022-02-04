enum Button {
	left = 0,
}

class Mouse {
	element!: HTMLElement;

	under: boolean = false;
	punder: boolean = false;

	x: number = 0;
	y: number = 0;

	private px: number = 0;
	private py: number = 0;

	dx: number = 0;
	dy: number = 0;

	left: boolean = false;
	pleft: boolean = false;

	constructor(element: HTMLElement) {
		this.element = element;

		this.mousemoveHandler = this.mousemoveHandler.bind(this);
		this.mouseleaveHandler = this.mouseleaveHandler.bind(this);
		this.mousedownHandler = this.mousedownHandler.bind(this);
		this.mouseupHandler = this.mouseupHandler.bind(this);

		this.element.addEventListener("mousemove", this.mousemoveHandler);
		this.element.addEventListener("mouseleave", this.mouseleaveHandler);
		this.element.addEventListener("mouseenter", this.mousemoveHandler);
		this.element.addEventListener("mousedown", this.mousedownHandler);
		this.element.addEventListener("mouseup", this.mouseupHandler);
	}

	mousemoveHandler(e: MouseEvent) {
		const { clientX, clientY } = e;
		const { left, top } = this.element.getBoundingClientRect();

		const x = clientX - left;
		const y = clientY - top;

		Object.assign(this, { x, y, px: this.x, py: this.y, under: true });
	}

	mouseleaveHandler(e: MouseEvent) {
		this.under = false;
	}

	mousedownHandler(e: MouseEvent) {
		if (e.button === Button.left) {
			this.left = true;
		}
	}

	mouseupHandler(e: MouseEvent) {
		if (e.button === Button.left) {
			this.left = false;
		}
	}

	tick() {
		Object.assign({
			dx: this.x - this.px,
			dy: this.y - this.py,
			pleft: this.left,
			punder: this.under,
		});
	}
}

export default Mouse;
