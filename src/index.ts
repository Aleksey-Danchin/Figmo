import Application from "./core/Application.js";
import CurveMode from "./modes/CurveMode.js";
import MoveMode from "./modes/MoveMode.js";
import SelectMode from "./modes/SelectMode.js";

const app = Application.create({
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
		SelectMode.create({
			element: document.querySelector(
				'[data-action="select"]'
			) as HTMLElement,
		}),
	],
});
