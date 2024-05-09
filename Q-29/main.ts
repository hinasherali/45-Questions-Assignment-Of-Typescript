////////////////////////////////////////////////////////////////////////////////
//Favorite Fruit: Make a array of your favorite fruits, and then write a 
//series of independent if statements that check for certain fruits in your array.

//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit 
//is in your array. If the fruit is in your array, the if block should print a
 //statement, such as You really like bananas!
 //////////////////////////////////////////////////////////////////////////////////

let favorite_fruits = ["Mango", "Pineapple", "Strawberry", "Orange"]

if (favorite_fruits.includes("Orange")){
    console.log("I love Oranges");
}

if (favorite_fruits.includes("Pineapple")){
    console.log("I love Pineapples");
}

if (favorite_fruits.includes("Kiwi")){
    console.log("I love Kiwies");
}

if (favorite_fruits.includes("Strawberry")){
    console.log("I love Strawberries");
}

if (favorite_fruits.includes("Mango")){
    console.log("I love Mangoes");
}