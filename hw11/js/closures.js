const sum = () => {
	let prev = 0

	return (current) => {
		prev += current
		return prev
	}
}

let result = sum()
console.log(result(3))
console.log(result(5))
console.log(result(28))

/*
	Expected Result: 3, 8, 28
*/