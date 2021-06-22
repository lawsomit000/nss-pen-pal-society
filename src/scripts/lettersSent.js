import { getLetters } from "./dataAccess.js";

export const lettersSent = () => {
    const letters = getLetters()
    return `
    <ul class="allLetters">
        ${
            letters.map(letter => {
                return `
                <li class="listItem>${letter.author}
                </li>`
            }).join("")
        }
    </ul>
`
}
