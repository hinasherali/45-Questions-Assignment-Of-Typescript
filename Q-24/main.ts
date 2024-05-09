//////////////////////////////////////////////////////////////////////////
//More Conditional Tests: You don’t have to limit the number of tests you 
//create to 10. If you want to try more comparisons, write more tests. Have at 
//least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array
////////////////////////////////////////////////////////////////////////////////


let corolla = "corolla";
let uppercaseCorolla = "COROLLA";
let Hundred = 100;
let SeventyFive = 75;
let NewsChannels = ["TRT WORLD", "SAMMA TV", "BBC NEWS", "AL JAZEERA"];

console.log("is corolla is equal to corolla?");
console.log("corolla" == "corolla");

console.log("\nis corolla is not equal to corolla?");
console.log(corolla != "corolla");

console.log("\nis COROLLA is equal to corolla after converting to lowercase?");
console.log(uppercaseCorolla.toLowerCase() == "corolla");

console.log("\nis COROLLA is not equal to corolla after converting to lowercase?");
console.log(uppercaseCorolla.toLowerCase()!= "corolla");

//Numericl test 
console.log("\n is SeventyFive equal to Hundred?");
console.log(SeventyFive == Hundred);

console.log("\n is SeventyFive is not equal to Hundred?");
console.log(SeventyFive != Hundred);

console.log("\n is hundred is greater than 0?");
console.log(100 > 0);

console.log("\n is 100 is less than 75?");
console.log(100 < 75);

console.log("\n 100 is greater than or equal to 75");
console.log(100 >= 75);

console.log("\n 100 is less than or equal to 75");
console.log(100 <= 75);

console.log("\n Hundred is not equal to 75 and Hundred is greater than 75");
console.log(Hundred != 75 && Hundred > 75);

console.log("\n 75 is greater than 100 OR 75 is equal to 75");
console.log(75 > 100 || 75 == 75);

console.log("\n is AL JAZEERA include in my NewsChannels array?");
console.log(NewsChannels.includes("AL JAZEERA"));

console.log("\n is SAMMA TV not include in my NewsChannels array?")
console.log(!NewsChannels.includes("SAMMA TV"));