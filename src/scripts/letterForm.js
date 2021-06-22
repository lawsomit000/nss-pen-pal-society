import { sendLetters } from "./dataAccess.js"

export const letterForm = () => {
    let html = `
        <section class="formFields">
            <div class="field">
                <label class="label" for="authorName">Author</label>
                <select class="authorOptions" name="authorOptions">
                    <option value="Maya Angelon">Maya Angelon</option>
                    <option value="Mark Twain">Mark Twain</option>
                    <option value="Grace Hopper">Grace Hopper</option>
                </select>
            </div>
            <div>
                <label for="letterText">Letter</label>
                <textarea class="letterText" name="letterText" rows="5" cols="33"></textarea>
            </div>
            <div class="">
                <label class="topics" for="topicChoices">Topics</label>
                <input class="topicInput" type="radio" name="Business" value="Business"/>
                <label for="Business">Business</label>
                <input class="topicInput" type="radio" name="Friendly" value="Friendly"/>
                <label for="Friendly">Friendly</label>
                <input class="topicInput" type="radio" name="Family" value="Family/>
                <label for="Family">Family</label>
                <input class="topicInput" type="radio" name="Congratulations" value="Congratulations"/>
                <label for="Congratulations">Congratulations</label>
                <input class="topicInput" type="radio" name="Condolences" value="Condolences"/>
                <label for="Condolences">Condolences</label>s
            </div>
            <div class="field">
                <label class="recipient" for="recipientChoice">Recipient</label>
                <select class="recipientOptions" name="recipientOptions">
                    <option value="Maya Angelon">Maya Angelon</option>
                    <option value="Mark Twain">Mark Twain</option>
                    <option value="Grace Hopper">Grace Hopper</option>
                </select>
            </div>
        </section>
        <section>
            <button class="sendLetter">Send Letter</button>
        </section>
    `
    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.class === "sendLetter") {
        const from = document.querySelector("input[name='authorOptions']").value
        const letter = document.querySelector("input[name='letterText']").value
        // const topicText = document.querySelector("input[name='']") //not sure how to collect this value?
        const letterTo = document.querySelector("input [name='recipientOptions']".value)

        //make an object out of the user input
        const dataToSendToAPI = {
            author: from,
            letterText: letter,
            topic: topicText,
            recipient: letterTo,
            // sendDate: ,
        }

        //send the data to API for permanent storage 
        sendLetters(dataToSendToAPI)
    }
})

