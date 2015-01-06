$(document).ready(function(){

	var cities = ["Los Angeles", "Miami", "New York", "Chicago", "Boston", "New Jersey", "New Orleans", "Las Vegas", "San Diego", "San Francisco", "Santa Monica", "Daytona", "Houston", "Seattle", "Phoenix"];
 
 $('#tags').autocomplete({
    source: cities
 }); 

});