class Student {
	#amountOfLectures = 25
	#requiredLecturesToAssess = 5

	constructor(firstName, lastName, yearOfBirth) {
		this.firstName = firstName
		this.lastName = lastName
		this.yearOfBirth = yearOfBirth
		this.grades = new Array(this.#requiredLecturesToAssess)
		this.presence = new Array(this.#amountOfLectures).fill(null)
	}

	get studentAge() {
		return new Date().getFullYear() - this.yearOfBirth
	}

	#preserveAttendance(expectedState) {
		let emptyIndex = this.presence.indexOf(null)
		if (emptyIndex !== -1) {
			this.presence[emptyIndex] = expectedState
		} else {
			console.log("No free slots to save presence/absence of Student")
		}
	}

	present() {
		this.#preserveAttendance(true)
	}

	absent() {
		this.#preserveAttendance(false)
	}

	avarageAttendence() {
		let count = 0
		this.presence.forEach(item => {
			if (item === true) {
				count++
			}
		})

		return Number(count / this.#amountOfLectures)
	}

	avarageGrade() {
		let sumOfGrades = this.grades.reduce((index, grade) => index + grade, 0)
		return Number(sumOfGrades / this.#requiredLecturesToAssess)
	}

	summary() {
		const avarageAttendence = this.avarageAttendence()
		console.log("Avarage attendence ratio", this.avarageAttendence())

		const avarageGrade = this.avarageGrade()
		console.log("Avarage Grade", this.avarageGrade())

		if (avarageAttendence > 0.9 && avarageGrade > 90) {
			return "Great job"
		} else if (avarageAttendence < 0.9 || avarageGrade < 90) {
			return "Well you can do better"
		} else {
			return "Rediska"
		}
	}
}


const primaryStudent = new Student("Oleksii", "Taran", 1987)
primaryStudent.grades = [87, 90, 96, 99, 0]
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()
primaryStudent.present()

console.log(primaryStudent.summary())