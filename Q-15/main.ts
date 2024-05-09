//Changing Guest List: You just heard that one of your guests can’t make 
//the dinner, so you need to send out a new set of invitations. You’ll have 
//to think of someone else to invite.

let guestlist = ["Maryam", "Zainab", "Zahra"];

let notComing = guestlist [0];

console.log(notComing, "can not come today");

guestlist.splice(0, 1, "Iqra");


guestlist.forEach(guest => console.log(`salam ${guest}, would you like to Dinner with me?`));





