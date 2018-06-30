window.setTimeout(function() {
  var todo = [];

var input = prompt("What would you like to do?")



while(input !== "quit") {
	if(input === "new") {
		newItem()
	} else if (input === "list") {
		listTodos()
	} else if (input === "delete") {
		deleteMe()
	}

	input = prompt("What would you like to do?")
}

console.log("Ok, you quit the app")


function listTodos() {
	console.log("**********")
	todo.forEach(function(todo, i){
		console.log(i + ": " + todo)
	})
	console.log("**********")
}

function deleteMe() {
	var index = prompt("Enter index of todo to delete")
	todo.splice(index, 1)
}

function newItem() {
	var newtodo = prompt("Add a new to-do.")
	todo.push(newtodo)
}









}, 500);




