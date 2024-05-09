/////////////////////////////////////////////////////////////////////////////////
//Magicians: Make a array of magician’s names. Pass the array to a function 
//called show_magicians(), which prints the name of each magician in the array.

//////////////////////////////////////////////////////////////////////////////
function show_magicians(magicians: String[]){
        magicians.forEach(name => console.log(name));       
}

let magician_names = ["Kala jadugar", "clown", "Herry potter"]

console.log(magician_names);