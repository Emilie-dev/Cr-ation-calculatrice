function addition (a, b) {
	return a + b;
}

function soustraction (a, b) {
	return a - b;
}

function multiplication (a, b) {
	return a * b;
}

function division(a, b) {
	if (b > 0) {
		return a / b;
	}else{
		console.log(division("Can't divide by 0"))
	}
}

$("button")