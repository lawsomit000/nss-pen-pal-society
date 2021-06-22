import {penPal} from "./penPal.js"
import { fetchLetters } from "./dataAccess.js"

const mainContainer = document.querySelector(".container")

const render = () => {
    fetchLetters().then(
        () => {
            mainContainer.innerHTML = penPal() 
        }
    )
}

render ()

mainContainer.addEventListener(
    "stateChanged",
    CustomEvent => {
        render()
    }
)