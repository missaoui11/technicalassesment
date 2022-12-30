// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.

var findSpecies;
findSpecies=function(animal){
    var newarray=[];
    for(var i= 0;i<animal.length;i++){
        newarray[i]=animal[i].species
    }
    return newarray
}

