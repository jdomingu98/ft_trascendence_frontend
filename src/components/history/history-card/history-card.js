import WebComponent, { Component } from "#WebComponent";


/* import css from "./styles.css?inline"; */

import RowHistory from "./row-history/row-hisotry.js";

export default Component({
    tagName: "history-card",
    styleCSS:`
        .card{
            margin-top: 5rem;
            background-color: var(--blue);
        }
    `
},
class HistoryCard extends WebComponent {
    render() {
        let rowsHtml = '';
        const historyData = JSON.parse(this.getAttribute('data-history'));

        historyData.forEach(row =>  {
            rowsHtml += `
                <row-history
                    ${row.showHeaders ? 'show-headers="true"' : ''}
                    result="${row.result}"
                    text="${row.text}"
                    text2="${row.text2}"
                    text3="${row.text3}"
                ></row-history>
            `;
        })

        return `
            <div class=" card pb-4">
                ${rowsHtml}
            </div>
        `
    }
});