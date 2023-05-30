class Human {
	constructor(firstName, gender) {
		this.firstName = firstName
		this.gender = gender
	}
}

class Apartment {
	tenants = []

	addTenant(tenant) {
		if (tenant instanceof Human) {
			this.tenants.push(tenant)
		}
	}
}

class Building {
	apartments = []
	maxCapacity = null

	constructor(capacity) {
		this.maxCapacity = capacity
	}

	addApartment(apartment) {
		if (apartment instanceof Apartment) {
			apartment.tenants.map(item => {
				if (this.maxCapacity > this.apartments.length) {
					console.log(`added apartment for: ${item.firstName}`)
					this.apartments.push(item)
				} else {
					console.log(`Failed to add apartment for ${item.firstName} due to setted limit of ${this.maxCapacity}`)
				}
			})
		}
	}
}

let tenentOne = new Human("Alex", "male")
let tenantTwo = new Human("Tim", "male")
let tenantThree = new Human("Tiff", "female")

let apartment = new Apartment()
apartment.addTenant(tenentOne)
apartment.addTenant(tenantTwo)
apartment.addTenant(tenantThree)

let building = new Building(2)
building.addApartment(apartment)

console.log(building)
console.log(apartment)


/*
Expected Results: 
- "added apartment for: Alex"
- "added apartment for: Tim"
- "Failed to add apartment for Tiff due to setted limit of 2"

[Building object]: 
{
  apartments: [{
  firstName: "Alex",
  gender: "male"
}, {
  firstName: "Tim",
  gender: "male"
}],
  maxCapacity: 2
}

[Apartments object]: 
{
  apartments: [{
  firstName: "Alex",
  gender: "male"
}, {
  firstName: "Tim",
  gender: "male"
}],
  maxCapacity: 2
}

*/
