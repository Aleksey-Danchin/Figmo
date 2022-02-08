import Application from "./Application.js";
import Curve from "./Curve.js";
import Point from "./Point.js";
var app = new Application({
    root: document.querySelector(".content-center"),
    background: "#ededed",
});
var curve = new Curve();
curve.add(new Point(100, 100), new Point(300, 100), new Point(300, 300), new Point(100, 300), new Point(200, 200));
app.container.add(curve);
// app.render.subscribe(() => {
// 	app.canvas.clear();
// 	app.canvas.draw((context, canvas) => app.container.draw(context, canvas));
// });
