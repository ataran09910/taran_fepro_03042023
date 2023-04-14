
function hoursToSecondsConverter(hoursToConvert) {
    const amountOfSeconds = 3600
    return Number(hoursToConvert) * amountOfSeconds
}

const givenHours = prompt("Enter desired hours for conversion ... ")

alert(`Given hours of ${givenHours} gonna be ${hoursToSecondsConverter(givenHours)} in seconds`)


