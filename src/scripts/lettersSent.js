//builds html for all letters sent

import { getLetters } from "./dataAccess.js";

export const lettersSent = () => {
    const letters = getLetters()
    return `
    <ul class="allLetters">
        ${
            letters.map(letter => {
                return `
                <li class="listItem"> Dear ${letter.recipient}, <br>
                    ${letter.letterText}<br>
                    Sincerly, ${letter.author}
                </li>`
            }).join("")
        }
    </ul>
`
}
