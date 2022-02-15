import Application from "./core/Application.js";
import CurveMode from "./modes/CurveMode.js";
import MoveMode from "./modes/MoveMode.js";
Application.create({
    root: document.querySelector(".content-center"),
    background: "#ededed",
    modes: [
        CurveMode.create({
            autoStart: true,
            element: document.querySelector('[data-action="curve"]'),
        }),
        MoveMode.create({
            element: document.querySelector('[data-action="move"]'),
        }),
    ],
});
