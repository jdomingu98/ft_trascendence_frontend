import WebComponent, { Component } from "#WebComponent";
import css from './HistoryPage.css?inline'

import "/src/components/app/app-lateral-nav/app-lateral-nav.js"
import "/src/components/history/history-card/history-card.js"
import "/src/components/history/history-btn/history-btn.js"
/* import "/src/components/history" */


export default Component({
  tagName: 'history-page',
  styleCSS: css
},
class HistoryPage extends WebComponent
{
  render() {

    const historyData = [
      { result: "win", text: "Atrujill", text2: "329 pts", text3: "1min 30s", showHeaders: true },
      { result: "lose", text: "Aruzafa", text2: "-87pts", text3: "5min" },
      { result: "win", text: "Cmorales", text2: "1 pts", text3: "4min 10s" },
      { result: "lose", text: "Jdomingu", text2: "-87pts", text3: "5min" },
      { result: "win", text: "Arojas", text2: "39 pts", text3: "3min 32s" },
      { result: "lose", text: "Prodriguez", text2: "-7pts", text3: "5min" },
      { result: "win", text: "Dgomez", text2: "2oo pts", text3: "3min 30s" }
  ];

    return `
    <div class="container-fluid history">
        <div class="row">
            <div class="col-2 d-flex flex-column align-items-center justify-content-start" style="background-color: #13124F;">
                <lateral-nav></lateral-nav>
            </div>
            <div class="col-10">
                <div class="container"">
                    <history-card data-history='${JSON.stringify(historyData)}'></history-card>
                    <history-btn></history-btn>
                </div>
            </div>
        </div>
    </div>
    `
  }
})