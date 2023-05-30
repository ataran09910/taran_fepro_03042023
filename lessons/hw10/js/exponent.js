const calculateExponent = (num, degree) => {
	return degree == 0 ? 1 : num * calculateExponent(num, --degree)
}

console.log(calculateExponent(5, 3))