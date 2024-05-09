//They think of something you could store in a TypeScript Object. Write a
// program that creates Objects containing these items.

interface PersonalBusiness {
    BusinessName: String;
    Location: String;
    NoOfEmployees: Number;
}

let PersonalBusiness = {
     BusinessName : "Pillows & Patterns",
     Location     : "Karachi",
     NoOfEmployees : 10,
};

console.log(PersonalBusiness);