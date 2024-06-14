import WebComponent, { Component } from "#WebComponent";


/* import css from "./styles.css?inline"; */
import { ClearBtn } from "../../common/my-buttons/clear-btn/clear-btn.js"



export default Component({
tagName: "history-btn",
    styleCSS:`
        .card{
            margin-top: 5rem;
            background-color: var(--blue);
        }    
    `
},
class HistoryButton extends WebComponent {
    render() {
        return `
            <div class="card mb-5">
                <div class="d-flex flex-row justify-content-center align-items-center text-center  gap-0 gap-md-5">
                    <div class="d-flex justify-content-center ">
                        <button class="btn text-light fs-3" style="min-width:150px;"> < Prev</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <span class="text-light fs-3" style="min-width:150px;">1 of 50</span>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button class="btn text-light fs-3 " style="min-width:150px;">Next ></button>
                    </div>
                </div>
            </div>
        `
    }
});