import { sendLetters } from "./dataAccess.js"

export const letterForm = () => {
    let html = `
    <div class="form">
        <section class="formFields">
            <div class="field">
                <label class="label" for="authorName">Author</label>
                <select class="fieldChild" id="authorOptions" name="authorOptions">
                    <option value="Maya Angelon">Maya Angelon</option>
                    <option value="Mark Twain">Mark Twain</option>
                    <option value="Grace Hopper">Grace Hopper</option>
                </select>
            </div>
            <div class="field">
                <label class="label" for="letterText">Letter</label>
                <textarea class="fieldChild" id="letterText" name="letterText" rows="5" cols="33"></textarea>
            </div>
            <div class="field" id="radio">
                <label class="label" for="topicChoices">Topics</label>
                <div class="" id="topicChoices">
                    <input class="topicInput" type="radio" name="Business" value="Business"/>
                    <label for="Business">Business</label>
                    <input class="topicInput" type="radio" name="Friendly" value="Friendly"/>
                    <label for="Friendly">Friendly</label>
                    <input class="topicInput" type="radio" name="Family" value="Family/>
                    <label for="Family">Family</label>
                    <input class="topicInput" type="radio" name="Congratulations" value="Congratulations"/>
                    <label for="Congratulations">Congratulations</label>
                    <input class="topicInput" type="radio" name="Condolences" value="Condolences"/>
                    <label for="Condolences">Condolences</label>
                </div>
            </div>
            <div class="field">
                <label class="label" for="recipientChoice">Recipient</label>
                <select class="fieldChild" id="recipientOptions" name="recipientOptions">
                    <option value="Maya Angelon">Maya Angelon</option>
                    <option value="Mark Twain">Mark Twain</option>
                    <option value="Grace Hopper">Grace Hopper</option>
                </select>
            </div>
            <section class="button">
                <button class="buttonChild" id="sendLetter">Send Letter</button>
            </section>
        </section>
    </div>
    `
    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        const fromSelectedIndex = document.getElementById('authorOptions').options.selectedIndex
        const from = document.getElementById('authorOptions').options[fromSelectedIndex].text
        const letter = document.getElementById('letterText').value
        const topicChoices = document.querySelectorAll('.topicInput.c').value
        const letterToSelectedIndex = document.getElementById('recipientOptions').options.selectedIndex
        const letterTo = document.getElementById('recipientOptions').options[letterToSelectedIndex].text
        
        //make an object out of the user inputs
        const dataToSendToAPI = {
            author: from,
            letterText: letter,
            topic: topicChoices,
            //need to figure out how to store all topicChoices into an array 
            recipient: letterTo
        }

        //send the data to API for permanent storage 
        sendLetters(dataToSendToAPI)
    }
})

