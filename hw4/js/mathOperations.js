
function validateUsersInput(primaryMsg, errorNotification = "") {
    const res = prompt(`${primaryMsg} ${errorNotification}`)
    if (res == "") {
        validateUsersInput(primaryMsg, "Input value should not be an empty")
    } else if (isNaN(res)) {
        validateUsersInput(primaryMsg, `Expected to get a Number but recieved: <<${typeof res}>> instead. Try Again`)
    }

    return Number(res)
}

(function () {
    const x = validateUsersInput("Enter first digit")
    const y = validateUsersInput("Enter second digit")
    
    alert(`Results are: \n sum = ${x+y}\n minus = ${x-y}\n multiply ${x*y}\n divide ${x/y}\n`)
})();

