function isEven(num) {
	return num % 2 === 0;
}


function factorial(num) {
	//define results variable
	var result = 1;
	//calculate factorial and store value in result
	for(i; i <= num; i++){
		result = result * i;
	}
	//return the result variable
	return result
}

//factorial(4) 4x3x2x1


function kababToSnake(str) {
	//replace all '-' with '_'
	var newStr = str.replace(/-/g, "_")
	//return str
	return newStr
}