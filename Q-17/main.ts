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

////////////////////////////////////

console.log("Unfortunately, our dinner table is not arriving on time, So i can only invite two Guests with me today");

while(guestlist.length > 2) {
     let removedguest = guestlist.pop();
     console.log(`Sorry,${removedguest} I Can't Invite You For Today's Dinner`);

}
console.log("Invitations to the last two guests");
guestlist.forEach(lasttwo => console.log(`Alhamdulillah, ${lasttwo} You are still in my invitation list for today's dinner`));

guestlist.pop();
guestlist.pop();
console.log("Empty List:",guestlist);
