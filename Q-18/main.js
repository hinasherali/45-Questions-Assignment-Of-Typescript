//Seeing the World: Think of at least five places in the world you’d 
//like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.
//Print your array in alphabetical order without modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical order without changing the order 
//of the original list.
//Show that your array is still in its original order by printing it again.
//Reverse the order of your list. Print the array to show that its order has changed.
//Reverse the order of your list again. Print the list to show it’s back to 
//its original order.
// Sort your array so it’s stored in alphabetical order. Print the array 
//to show that its order has been changed.
//Sort to change your array so it’s stored in reverse alphabetical order. Print
//the list to show that its order has changed.
var CountriesToVisit = ["Saudia Arabia", "Japan", "Turkey", "India", "Sri Lanka",];
console.log("Original Order:", CountriesToVisit);
console.log("Alphabatical Order:", __spreadArray([], CountriesToVisit, true).sort());
console.log("still in original order:", CountriesToVisit);
console.log("Reverse order:", __spreadArray([], CountriesToVisit, true).reverse());
console.log("Still in original order:", CountriesToVisit);
console.log("Original Array reversed:", CountriesToVisit.reverse());
console.log("Back to original order:", CountriesToVisit.reverse());
console.log("Sorted in Alphabatical order:", CountriesToVisit.sort());
console.log("Original Array Reversed Again:", CountriesToVisit.reverse());
