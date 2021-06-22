let applicationState = {
}

const mainContainer = document.querySelector(".container")

const API = "http://localhost:8088"

//creating a function that fetches all 
export const fetchLetters = () => {
    return fetch(`${API}/letters`)
    .then(response => response.json())
    .then(
        (sentLetters) => {
            //store the external state in the application state
            applicationState.letters = sentLetters
        }
    )
}

//create function to loop through all objects in application state and return 

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}));
}

export const sendLetters = (userLetterSend) => {
    const fetchOptions = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetterSend)
        //json.stringify converts js object into JSON
    }
    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent ("stateChanged"))
    })
}
//deleteRequest if needed goes here. 
