import Application from "./core/Application.js";
import CurveMode from "./modes/CurveMode.js";
import MoveMode from "./modes/MoveMode.js";
import SelectMode from "./modes/SelectMode.js";
var app = Application.create({
    root: document.querySelector(".content-center"),
    background: "#ededed",
    modes: [
        CurveMode.create({
            element: document.querySelector('[data-action="curve"]'),
        }),
        MoveMode.create({
            element: document.querySelector('[data-action="move"]'),
        }),
        SelectMode.create({
            element: document.querySelector('[data-action="select"]'),
        }),
    ],
});
