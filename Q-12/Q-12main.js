//Greetings: Start with the array you used in Exercise 11, but instead of just 
//printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the 
//person’s name.
var friendsName = ["Abu Bakar", "Hina", "Iqra", "Yosuf"];
friendsName.forEach(function (dost) { return console.log("Hey ".concat(dost, ", Will meet you tomorrow")); });
