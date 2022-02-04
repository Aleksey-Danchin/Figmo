import Application from "./Application.js";
var app = new Application({
    root: document.querySelector(".content-center"),
    background: "#ededed",
});
app.render.subscribe(function () {
    app.canvas.clear();
    app.canvas.draw(function (context) {
        if (app.mouse.under) {
            context.beginPath();
            context.arc(app.mouse.x, app.mouse.y, 5, 0, Math.PI * 2);
            context.fillStyle = app.mouse.left ? "green" : "red";
            context.fill();
        }
    });
});
