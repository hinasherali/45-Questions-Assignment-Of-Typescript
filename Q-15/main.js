//Changing Guest List: You just heard that one of your guests can’t make 
//the dinner, so you need to send out a new set of invitations. You’ll have 
//to think of someone else to invite.
var guestlist = ["Maryam", "Zainab", "Zahra"];
var notComing = guestlist[0];
console.log(notComing, "can not come today");
guestlist.splice(0, 1, "Iqra");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to Dinner with me?")); });
