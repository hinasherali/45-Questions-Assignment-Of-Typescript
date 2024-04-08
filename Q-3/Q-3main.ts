// Name Cases: Store a person’s name in a variable, and then print that
// person’s name in lowercase, uppercase, and titlecase.

let PersonName = "Mohammad Ali Jinnah";
console.log(PersonName.toLowerCase());

console.log(PersonName.toUpperCase());

console.log(PersonName.replace(/\b\w/g, (book) => book.toUpperCase()));


