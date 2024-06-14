import WebComponent, { Component } from "#WebComponent";


import css from "./styles.css?inline";

export default Component({
    tagName: "row-history",
    styleCSS: css
},
class RowHistory extends WebComponent {
render() {
    const showHeaders = this.getAttribute("show-headers") === "true";
    return `
        ${showHeaders ? this.renderHeaders() : ''}
        ${this.renderRow()}
    `;
}

renderHeaders() {
    return `
        <div class="row d-flex mt-5 align-items-center justify-content-center">
            <div class="col-3 text-uppercase px-4">
                <h1 class="text-white text-center font-size" style="min-width:60px">Result</h1>
            </div>
            <div class="col-3 text-center text-uppercase">
                <h1 class="text-white font-size">Against</h1>
            </div>
            <div class="col-3 text-center text-uppercase">
                <h1 class="text-white font-size">Earned</h1>
            </div>
            <div class="col-3 text-center text-uppercase">
                <h1 class="text-white font-size">Time</h1>
            </div>
        </div>
    `;
}

renderRow() {
    const result = this.getAttribute("result") || "";
    const text = this.getAttribute("text") || "";
    const text2 = this.getAttribute("text2") || "";
    const text3 = this.getAttribute("text3") || "";
    return `
        <div class="row d-flex mt-4 align-items-center justify-content-center">
            <div class="col-3 text-uppercase px-4 d-flex align-items-center justify-content-center justify-content-lg-start">
                ${result === "win" 
                    ? '<img src="/src/img/icons/tourneys.png" alt="victory" class="result-img"> <p class="result victory text-shadow d-none d-lg-block">Victory</p>' 
                    : '<img src="/src/img/icons/x.png" alt="defeat" class="result-img"> <p class="result defeat text-shadow d-none d-lg-block">Defeat</p>'}
            </div>

            <div class="col-3 text-center text-uppercase ">
                <h1 class="text-white text-shadow font-size">${text}</h1>
            </div>
            <div class="col-3 text-center text-uppercase">
                <h1 class="text-white text-shadow font-size">${text2}</h1>
            </div>
            <div class="col-3 text-center">
                <h1 class="text-white text-shadow font-size">${text3}</h1>
            </div>
        </div>
    `;
}
});
