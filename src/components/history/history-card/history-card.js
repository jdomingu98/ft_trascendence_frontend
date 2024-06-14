import WebComponent, { Component } from "#WebComponent";


/* import css from "./styles.css?inline"; */

import RowHistory from "./row-history/row-hisotry.js";

export default Component({
    tagName: "history-card",
    styleCSS:`
        .card{
            margin-top: 6rem;
            background-color: var(--blue);
        }
    `
},
class HistoryCard extends WebComponent {
    render() {
        let rowsHtml = '';
        
        const historyData = [
            { result: "win", text: "Atrujill", text2: "329 pts", text3: "1min 30s", showHeaders: true },
            { result: "lose", text: "Aruzafa", text2: "-87pts", text3: "5min" },
            { result: "win", text: "Cmorales", text2: "1 pts", text3: "4min 10s" },
            { result: "lose", text: "Jdomingu", text2: "-87pts", text3: "5min" },
            { result: "win", text: "Arojas", text2: "39 pts", text3: "3min 32s" },
            { result: "lose", text: "Prodriguez", text2: "-7pts", text3: "5min" },
            { result: "win", text: "Dgomez", text2: "2oo pts", text3: "3min 30s" }
        ];

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
            <div class="card pb-4">
                ${rowsHtml}
            </div>
        `
    }
});