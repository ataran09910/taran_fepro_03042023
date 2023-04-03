function getUserName(inputName) {
    if (inputName == "") {
        throw new Error("Value should not be empty. Reload the page and try again")
    } else {
        alert(`Hello ${inputName}! How are you?`)
    }
}

const namePrompt = prompt("What is your name?")
getUserName(namePrompt)