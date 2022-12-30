// Create a function called makeNoise that takes in an object and returns
// the response from calling the noise method.

var animal;
var makeNoise;
var animal= {
    type: "cat",
    name: "kitty",
    methode() { console.log("meow meow") }
 };
function makeNoise(animal){
    return animal.methode()
}

