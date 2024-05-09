//More Guests: You just found a bigger dinner table, so now more space is 
//available. Think of three more guests to invite to dinner.


let guestlist = ["Maryam", "Zainab", "Zahra"];

let notComing = guestlist[0];

console.log(notComing, "can not come today");

guestlist.splice(0, 1, "Iqra");

console.log("Good News Hurrah!!!,We Have Found A Bigger Table For Dinner.");

guestlist.unshift("Abu Bakar");

guestlist.push("Yousuf");

let middleIndex: Number = Math.floor(guestlist.length / 2);

guestlist.splice(3, 0, "Ali");

console.log("Update List Of Our Guests");

guestlist.forEach(Oneguest => console.log(`As Salam O Alaikum ${Oneguest}, Would you like to have a Dinner with me?`));

