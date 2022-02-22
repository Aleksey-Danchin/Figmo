export type Color = string;

export enum ApplicationMode {
	Translate, // перемещение экрана
	Move, // перемещение элемента
	Curve, // рисование кривой
	Selecting, // Натягивание фрейма селектора
}

export type ActionButton = {
	type: ApplicationMode;
	element: HTMLElement;
};

export type Position = {
	x: number;
	y: number;
};

export enum DrawableType {
	Curve = "curve",
	Frame = "frame",
}

export type ContainerMember =
	| {
			type: DrawableType.Curve;
			points: Position[];
	  }
	| {
			type: DrawableType.Frame;
			x: number;
			y: number;
			width: number;
			height: number;
	  };
