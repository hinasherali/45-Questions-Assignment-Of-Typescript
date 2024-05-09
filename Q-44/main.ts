///////////////////////////////////////////////////////////////////////////////////
//Sandwiches: Write a function that accepts a array of items a person wants on a
 //sandwich. The function should have one parameter that collects as many items as
 // the function call provides, and it should print a summary of the sandwich that
 //  is being ordered. Call the function three times, using a different number of 
 //  arguments each time.
/////////////////////////////////////////////////////////////////////////////////

function makeSandwich(...items: String[]){
    console.log("\nMaking a sandwich with a following items: \n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("\nEnjoy Your Sandwich Please");
}

makeSandwich("cheese", "Butter", "EGG",);
makeSandwich("CHICKEN", "Olives", "Bread");
makeSandwich("cheese", "Butter", "EGG", "CHICKEN", "Olives", "Bread");