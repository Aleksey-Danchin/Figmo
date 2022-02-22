import Application from "./core/Application.js";
import CurveMode from "./core/modes/CurveMode.js";
import MoveMode from "./core/modes/MoveMode.js";
import SelectMode from "./core/modes/SelectMode.js";
Application.create({
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
