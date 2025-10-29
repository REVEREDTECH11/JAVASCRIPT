// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
  this.getName = function() {
    return this.make + ' ' + this.model + ' ' + this.year;


  }

}

var c = new Car ("Ford" , "F150", "Year")
//alert(c.getName());
console.log(c.getName());
