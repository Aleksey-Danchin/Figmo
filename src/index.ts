import Application from "./Application.js";
import Curve from "./Curve.js";
import Point from "./Point.js";
import { ApplicationMode } from "./types.js";

const app = new Application({
	root: document.querySelector(".content-center") as HTMLDivElement,
	background: "#ededed",
	mainMenu: {
		actions: [
			{
				type: ApplicationMode.Move,
				element: document.querySelector(
					'[data-action="move"]'
				) as HTMLElement,
			},
			{
				type: ApplicationMode.Curve,
				element: document.querySelector(
					'[data-action="curve"]'
				) as HTMLElement,
			},
		],
	},
});

const curve = new Curve();
curve.add(
	new Point(100, 100),
	new Point(300, 100),
	new Point(300, 300),
	new Point(100, 300),
	new Point(200, 200)
);

curve.update();

app.container.add(curve);

console.log(app);

// app.render.subscribe(() => {
// 	app.canvas.clear();
// 	app.canvas.draw((context, canvas) => app.container.draw(context, canvas));
// });
