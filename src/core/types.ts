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
