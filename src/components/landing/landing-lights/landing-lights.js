"use strict";

import css from "./landing-lights.css?inline";

import { Component, WebComponent } from "#WebComponent"

export default Component(
{
    tagName: "light-point",
    styleCSS: css
},

class LightPoint extends WebComponent
{
    render() {
        const num = this.getAttribute("num") || "";
        return `<div class="light${num}"></div>`
    }
}
);