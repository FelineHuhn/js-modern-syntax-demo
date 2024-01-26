console.clear();

/* -------- Destructuring Assignment - Objects --------- */

const tree = {
  name: "oak",
  age: 1200,
  scientificName: "quercus",
};

/*
Previously we stored values of keys via dot notation:

const name = tree.name;
const age = tree.age;
const scientificName = tree.scientificName;
*/

const { name, age, scientificName } = tree;

console.log(name, age, scientificName);

// Syntax of renaming a new variable

const { name: newName, age: newAge, scientificName: newScientificName } = tree;

// Syntax of setting a default value of a property

const { keepsleavesinwinter = false } = tree;

// Rest syntax in object destructuring

const { name: treeName, ...information } = tree;

console.log(treeName, information);

/* -------- Destructuring Assignment - Arrays --------- */

const animals = ["Lion", "Tiger", "Penguin", "Bear", "Whale"];

// const [lion, tiger, penguin, bear, whale] = animals;

// Ignoring values

const [lion, , penguin, bear, whale] = animals;

console.log(penguin);
// console.log(tiger); // not defined

// Rest syntax in array destructuring

const fruits = ["Banana", "Apple", "Ananas", "Peach", "Coconut"];

const [banana, apple, ...rest] = fruits;

console.log(banana, apple);
console.log(rest, rest[1]);

/* ---------------- Rest Syntax ----------------- */

// collects values in an array

function showZooAnimals(...allAnimals) {
  console.log(allAnimals);
}

showZooAnimals("Monkey", "Crocodile", "Elephant");

/* ---------------- Spread Syntax ----------------- */

// splits an array into its elements and makes them accessible

const newAnimals = ["Whale", "Dolphin", "Wolf"];

showZooAnimals(...newAnimals);

// Add another value

const animalFood = ["Meat", "Apple", "Banana", "Carrot"];

const newAnimalFood = "Fish";

const allAnimalFood = [...animalFood, newAnimalFood];

// Spread for concatenating two arrays

const allMyAnimals = [...newAnimals, ...animals];

console.log(allMyAnimals);
