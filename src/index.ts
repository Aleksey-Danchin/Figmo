import Application from "./core/Application.js";
import CurveMode from "./modes/CurveMode.js";
import MoveMode from "./modes/MoveMode.js";

Application.create({
	root: document.querySelector(".content-center") as HTMLDivElement,
	background: "#ededed",
	modes: [
		CurveMode.create({
			element: document.querySelector(
				'[data-action="curve"]'
			) as HTMLElement,
		}),
		MoveMode.create({
			element: document.querySelector(
				'[data-action="move"]'
			) as HTMLElement,
		}),
	],
});
