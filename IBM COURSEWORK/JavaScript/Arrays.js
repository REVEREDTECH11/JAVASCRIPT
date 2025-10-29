//intro to arrays in js
//array.push() adds an element to the end
//array.pop() removes the last element
let myFruit = ["Apples", "Bananas"];
console.log("You have " + myFruit[0] + " and " + myFruit[1] + " in your basket")

//Set two initial fruit
let firstFruit = myFruit[0];
let secondFruit = myFruit[1];

//Print statesments
console.log("");
console.log("You first picked out " + firstFruit);
console.log("Then picked out " + secondFruit);
console.log("This means you have " + myFruit.length + " fruits.")
console.log(myFruit);
console.log("");

//practice adding with push()
myFruit[2] = "Peaches"
console.log("You picked up some peaches")
myFruit.push("Pears")
console.log("And then some pears")
console.log("You now have " + myFruit.length + " fruits"); //2
console.log(myFruit);
console.log(" ")

//practice removing pop()
myFruit.pop(); //removes the last element which is peaches
console.log("You changed your mind on pears.")
console.log(myFruit);
console.log("And added watermelon instead")
myFruit.push("Watermelon"); //adds watermelon to end of array
console.log(myFruit);
console.log("")

//Practice removing with splice()
myFruit.splice(2,1);
console.log("You decided to remove the peaches");
console.log(myFruit);
console.log("")

//Add fruit with a timed push
setTimeout(() => {
  myFruit.push('grape');
  console.log("Finally you picked up some grapes.");
  console.log("You walked out the store with " + myFruit.length + " fruits in your bag")
  console.log(myFruit); // ✅ This runs after the push
}, 5000);










