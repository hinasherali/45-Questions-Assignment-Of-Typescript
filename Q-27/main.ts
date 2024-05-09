////////////////////////////////////////////////////////////////////////////////
//Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.

//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//////////////////////////////////////////////////////////////////////////////////

//version 1

let alienColor = "Green";

if(alienColor === "Green"){
    console.log("you shoot green alien and got 5 points earned.");
}

else if (alienColor === "Yellow"){
    console.log("you shoot Yellow alien and got 10 pionts earned.");
}

else if(alienColor === "Red"){
    console.log("you shoot Red alien and got 15 points earned.");
}


//version 2
let alienColor2 = "Yellow";

if (alienColor2 === "Blue"){
    console.log("you shoot Blue alien and got 5 points earned.");
}

else if (alienColor2 === "Yellow"){
    console.log("you shoot Yellow alien and got 10 pionts earned.");
}

else if(alienColor2 === "Red"){
    console.log("you shoot Red alien and got 15 points earned.");
}

//version 3

let alienColor3 = "red";

if (alienColor3 === "brown"){
    console.log("you shoot brown alien and got 5 points earned");
}

else if (alienColor3 === "Yellow"){
    console.log("you shoot Yellow alien and got 10 pionts earned.");
}

else if (alienColor3 === "red"){
    console.log("you shoot Red alien and got 15 points earned.");
}