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
            <div>
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