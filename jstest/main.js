console.log("print all numbers between -10 and 19")

for(i = -10; i < 20; i++) {
	console.log(i)
}

console.log("print all even numbers between 10 and 40")

for(var i=10; i <= 40; i+=2) {
	console.log(i)
}

console.log("print all odd numbers between 300 an 333")

for(var i = 300; i <= 333; i++) {
	if(i % 2 !==0) {
		console.log(i)
	}
}

console.log("print all numbers divisible by 5 AND 3 between 5 & 50")

for(i = 5; i <= 50; i++) {
	if(i % 3 === 0 && i % 5 === 0) {
		console.log(i)
	}
}