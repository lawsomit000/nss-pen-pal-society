import {penPal} from "./penPal.js"

const mainContainer = document.querySelector(".container")

// const render = () => {
//     fetchRequests().then(
//         () => {
//             mainContainer.innerHTML = penPal() 
//         }
//     )
// }
// render ()

const render = () => {
    mainContainer.innerHTML = penPal()
}
render()