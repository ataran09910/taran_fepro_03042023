class User {
    constructor(yearOfBirth, city, sport) {
        this.yearOfBirth = yearOfBirth
        this.city = city
        this.sport = sport
    }

    getAge() {
        return new Date().getFullYear() - this.yearOfBirth || false
    }

    getHomeTownOfUser(givenCity) {
        return geoData.find(item => item.city === givenCity) || false
    }

    getFavouriteSport(givenSport) {
        return sportData.find(item => item.sport === givenSport) || false
    }
}

function answeredOrNot(messageText, messageType) {
    const promtObj = prompt(messageText)
    if (promtObj == null) {
        alert(`Too bad that you dont wanna input your ${messageType}`)
        return "[Not Entered]"
    }

    return promtObj
}

var geoData = [
    { city: "Kyiv", country: "Ukraine", capital: true },
    { city: "Washington", country: "USA", capital: true },
    { city: "London", country: "England", capital: true }
]

var sportData = [
    { sport: "basket", champ: "Micheal Jordan", favourite: true },
    { sport: "football", champ: "Pele", favourite: true },
    { sport: "f1", champ: "M. Schumacher", favourite: true },
]

const givenYear = answeredOrNot("What is your year of Birth?", "Year of Birth")
const givenCity = answeredOrNot("Where do you live?", "City of Living")
const givenSport = answeredOrNot("What is your favourite sport?", "Sport")

let userDetails = new User(givenYear, givenCity, givenSport)

const myAge = userDetails.getAge() ? `Your age is ${userDetails.getAge()}`
    : `Your age is ${givenYear}`

const cityDetails = userDetails.getHomeTownOfUser(givenCity)
const whereIlive = cityDetails.capital ? `You are living in the capital of ${cityDetails.country}`
    : `You are living in the city of ${givenCity}`

const sportDetails = userDetails.getFavouriteSport(givenSport)
const whatIsMyFavSport = sportDetails.favourite ? `Cool! You wanna be ${sportDetails.champ}`
    : `Your favourite sport is ${givenSport}`

alert(`${myAge}\n${whereIlive}\n${whatIsMyFavSport}`)