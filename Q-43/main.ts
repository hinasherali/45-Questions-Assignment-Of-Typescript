/////////////////////////////////////////////////////////////////////////////////////////
//Unchanged Magicians: Start with your work from Exercise 42. Call the function
 //make_great() with a copy of the array of magicians’ names. Because the 
 //original array will be unchanged, return the new array and store it in a 
 //separate array. Call show_magicians() with each array to show that you have 
 //one array of the original names and one array with the Great added to each 
 //magician’s name.
 /////////////////////////////////////////////////////////////////////////////

function show_magicians(magicians: String[]){
    magicians.forEach(name => console.log(name));       
}

function make_great(magicians: String[]){
    return magicians.map(name => `The Great ${name}`);
}

let magician_names = ["Kala jadugar", "clown", "Herry potter"];

let copy_magicians_names = magician_names.slice()

let copy_great_magicians = make_great(copy_magicians_names);


console.log("\noriginal array\n");

show_magicians(magician_names);

console.log("\ncopy of an Array\n");

show_magicians(copy_great_magicians);






















