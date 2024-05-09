///////////////////////////////////////////////////////////////////////////////////
//Cars: Write a function that stores information about a car in a Object. The 
//function should always receive a manufacturer and a model name. It should then
// accept an arbitrary number of keyword arguments. Call the function with the 
//required information and two other name-value pairs, such as a color or an 
//optional feature. Print the Object that’s returned to make sure all the 
//information was stored correctly.
///////////////////////////////////////////////////////////////////////////////

function make_car(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

options.forEach(option => {
    let [Key,Value] = option.split(":");
    car[Key.trim()] = Value.trim();
});

return car;
}

let client_car = make_car("Fortuner: Vigo", "colour: Off white", "Tyre: new", "model: 2022");

console.log(client_car);