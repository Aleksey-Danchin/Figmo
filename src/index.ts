import Application from "./core/Application.js";
import CurveMode from "./core/modes/CurveMode.js";
import MoveMode from "./core/modes/MoveMode.js";
import SelectMode from "./core/modes/SelectMode.js";

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
