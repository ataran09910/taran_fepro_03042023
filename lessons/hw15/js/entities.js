class Owner {
	constructor(firstName, age) {
		this.firstName = firstName
		this.age = age
	}

	info() {
		return { owner: this.firstName, age: this.age }
	}
}

class Car {
	carOwner = null

	constructor(manufacturer, model, year, plates) {
		this.manufacturer = manufacturer
		this.model = model
		this.year = year
		this.plates = plates
	}

	assignOwner(owner) {
		if (owner instanceof Owner) {
			if (owner.age > 18) {
				this.carOwner = owner
			} else {
				console.log("Cannot assign owner due to age limit of 18 years old")
			}
		}
	}

	info() {
		return {
			owner: this.carOwner,
			manufacturer: this.manufacturer,
			model: this.model,
			yearOfAssemble: this.year,
			plates: this.plates
		}
	}
}

const owner1 = new Owner("Tim", 23)
const owner2 = new Owner("John", 45)
const owner3 = new Owner("Cap", 44)

const car1 = new Car("Honda", "Accord", "2000", "AB1234BA")
const car2 = new Car("Mazda", "6", "2002", "AC1234BA")
const car3 = new Car("Nissan", "Leaf", "2004", "AC1234BA")

car1.assignOwner(owner1)
car2.assignOwner(owner2)
car3.assignOwner(owner3)

console.log(car1.info())
console.log(car2.info())
console.log(car3.info())
