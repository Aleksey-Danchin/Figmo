class Rectangle {
	x!: number;
	y!: number;
	width!: number;
	height!: number;

	constructor(
		x: number = 0,
		y: number = 0,
		width: number = 1,
		height: number = 1
	) {
		Object.assign(this, { x, y, width, height });
	}
}

export default Rectangle;
