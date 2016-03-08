// Add a property to the person object called favoriteBands that is an array made up of band names
// Add a property to the person object called familyMembers that is an array made up of these people objects
// Add a property to each of the new familyMembers that is called familyRole that is either "brother", "sister", etc.

var person2 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Stacy",
     lastName: "Doe",
     age: 180,
     eyeColor: "Orange",
     familyRole: "sister"
}; 

var person3 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Suzy",
     lastName: "Q",
     age: 140,
     eyeColor: "Green",
     familyRole: "brother"
};

var person = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue",
     favoriteBands: ["The Decemberists", "Maroon 5", "Of Monsters and Men"],
     familyMembers: [person2, person3]
};


