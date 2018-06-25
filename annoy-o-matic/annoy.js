var answer= prompt("are we there yet?");

//yes does not take up an index inside the anwer
while(answer.indexOf('yes') === -1) {
	var answer = prompt("are we there yet?")
}

alter("yay, we made it!")

