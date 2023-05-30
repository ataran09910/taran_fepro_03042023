// ========

function showDigitsFromTo(begin, end, step) {

    const times = (end - begin) / step
    let outcome = ""

    for (let i = 0; i < times; i++) {
        let res = begin + step
        begin = res
        outcome += `${res} `
    }

    return outcome
}

console.log(showDigitsFromTo(10, 20, 0.5))

// =========

function currencyConverter(rate, min, max, step) {
    const times = (max - min) / step
    let outcome = []

    for (let i = 0; i < times; i++) {
        outcome.push({ uah: min * rate, usd: min, rate: rate })
        min = min + step
    }

    return outcome
}

console.log(currencyConverter(27, 10, 100, 10))

// ========

const squeredFromGivenNumber = (givenNum) => {
    let arr = []
    for (let i = 1; i < givenNum; i++) {
        if (Math.sqrt(i) % 1 == 0) {
            arr.push(i)
        }
    }
    return arr
}

console.log(squeredFromGivenNumber(100))

// ======= 

function checkIfNumberIsPrime(inputNum) {
    if (inputNum <= 1) {
        console.log("Given number should be more then 1")
    } else if (inputNum % 2 != 0) {
        console.log(`${inputNum} is Prime`)
    } else {
        console.log(`${inputNum} is not Prime`)
    }
}

checkIfNumberIsPrime(1)


function getAllPrimes(range) {
    let primeStorage = []

    if (range <= 1) {
        console.log("Given number should be more then 1")
    } else {
        for (let i = 2; i <= range; i++) {
            if (i % 2 != 0) {
                primeStorage.push(i)
            }
        }
    }

    return primeStorage
}

console.log(getAllPrimes(15))

/* Expected result (range = 15): 
    [3, 5, 7, 9, 11, 13, 15]
*/

function defineUnknownToExpUsingForLoop(valueToFind) {
    let knownNumber = 3
    let n = 1
    let isValuesEquals = false
    let staticRetry = valueToFind / knownNumber


    for (let i = 0; i < staticRetry; i++) {
        let exp = knownNumber * 3
        n++

        if (valueToFind !== exp) {
            console.log(`${exp} !== ${valueToFind}, looking forward`)
            knownNumber = exp
        } else if (valueToFind === exp) {
            console.log(`To get ${valueToFind} via exp.. we need to do 3*(n), where n === ${n}`)
            isValuesEquals = true
            break
        }

        if (!isValuesEquals && exp > valueToFind) {
            console.log(`Impossible to get ${valueToFind} by exp.. 3*(n) where n === ${n} as its value equals to ${exp}`)
            break
        }

    }

}

defineUnknownToExpUsingForLoop(82)

function defineUnknownToExpUsingWhile(valueToFind) {
    let knownNumber = 3
    let n = 1
    let isValuesEquals = false

    while (!isValuesEquals) {
        let exp = knownNumber * 3
        n++

        if (valueToFind === exp) {
            console.log(`To get ${valueToFind} via exp.. we need to do 3*(n), where n === ${n}`)
            isValuesEquals = true
        } else if (valueToFind !== exp) {
            console.log(`${exp} !== ${valueToFind}, looking forward`)
            knownNumber = exp
        }

        if (!isValuesEquals && exp > valueToFind) {
            console.log(`Impossible to get ${valueToFind} by exp.. 3*(n) where n === ${n} as its value equals to ${exp}`)
            break
        }
    }
}

defineUnknownToExpUsingWhile(8)