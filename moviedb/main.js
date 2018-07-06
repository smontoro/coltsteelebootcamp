 var movies = 
 	[
	 	{
	 	 title: "In Bruges",
	 	 rating: 5,
	 	 watched: true
	 	},
	 	 {
	 	 title: "Frozen",
	 	 rating: 4.5,
	 	 watched: false
	 	 },
	 	 {
	 	title: "Mad Max",
	 	rating: 5,
	 	watched: true
	 	 },
	 	 {
	 	title: "Les Meserables",
	 	rating: 3.5,
	 	watched: false
	 	 }
 	]
 

 movies.forEach(function(movie){
 	var result = "You have "
 	if(movie.watched){
 		result += "watched "
 	} else {
 		result += "not seen "
 	}
 	result += movie.title + " - " + movie.rating + " stars"
 	console.log(result)
 })