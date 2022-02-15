class Point {
	x!: number;
	y!: number;

	constructor(x: number = 0, y: number = 0) {
		this.x = x;
		this.y = y;
	}

	getDistance(a: Point) {
		return Point.getDistance(this, a);
	}

	static getDistance(a: Point, b: Point) {
		const dx = a.x - b.x;
		const dy = a.y - b.y;

		return (dx ** 2 + dy ** 2) ** 0.5;
	}
}

export default Point;
