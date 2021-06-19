import {letterForm } from "./letterForm.js"

export const penPal = () => { 
    return `
        <h1>Pen Pal Society</h1>
        <setion class="letterForm">
            ${letterForm()}
        </section>

        <setion class="">
        </section>
    `
}