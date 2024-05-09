//More Guests: You just found a bigger dinner table, so now more space is 
//available. Think of three more guests to invite to dinner.
var guestlist = ["Maryam", "Zainab", "Zahra"];
var notComing = guestlist[0];
console.log(notComing, "can not come today");
guestlist.splice(0, 1, "Iqra");
console.log("Good News Hurrah!!!,We Have Found A Bigger Table For Dinner.");
guestlist.unshift("Abu Bakar");
guestlist.push("Yousuf");
var middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(3, 0, "Ali");
console.log("Update List Of Our Guests");
guestlist.forEach(function (Oneguest) { return console.log("As Salam O Alaikum ".concat(Oneguest, ", Would you like to have a Dinner with me?")); });
