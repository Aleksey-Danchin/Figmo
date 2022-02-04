import Application from "./Application.js";

const app = new Application({
	root: document.querySelector(".content-center") as HTMLDivElement,
	background: "#ededed",
});

app.render.subscribe(() => {
	app.canvas.clear();
	app.canvas.draw((context) => {
		if (app.mouse.under) {
			context.beginPath();
			context.arc(app.mouse.x, app.mouse.y, 5, 0, Math.PI * 2);
			context.fillStyle = app.mouse.left ? "green" : "red";
			context.fill();
		}
	});
});
