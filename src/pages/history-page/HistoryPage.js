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

    return `
    <div class="container-fluid history">
        <div class="row">
            <div class="col-2 d-flex flex-column align-items-center justify-content-start" style="background-color: #13124F;">
                <lateral-nav></lateral-nav>
            </div>
            <div class="col-10">
                <div class="container"">
                    <history-card></history-card>
                    <history-btn></history-btn>
                </div>
            </div>
        </div>
    </div>
    `
  }
})