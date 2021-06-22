import {letterForm } from "./letterForm.js"
import {lettersSent} from "./lettersSent.js"

export const penPal = () => { 
    return `
        <h1>Pen Pal Society</h1>
        <setion class="letterForm">
            ${letterForm()}
        </section>
        <h1>Letters</h1>
        <section class="lettersSent">
            ${lettersSent()}
        </section>
    `
}