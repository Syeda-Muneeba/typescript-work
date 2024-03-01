// Function to store information about a car in an object
function createCar(manufacturer, modelName, ...extras) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add additional properties to the car object
    for (let i = 0; i < extras.length; i += 2) {
        car[extras[i]] = extras[i + 1];
    }

    return car;
}

// Call the function with required information and additional properties
let carInfo = createCar("Toyota", "Camry", "color", "blue", "year", 2022);

// Print the object to ensure all information was stored correctly
console.log(carInfo);
