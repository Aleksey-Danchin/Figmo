class Rectangle {
	$x!: number;
	$y!: number;
	$width!: number;
	$height!: number;

	constructor(
		x: number = 0,
		y: number = 0,
		width: number = 1,
		height: number = 1
	) {
		Object.assign(this, { $x: x, $y: y, $width: width, $height: height });
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
}

export default Rectangle;
