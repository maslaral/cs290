function Automobile(year, make, model, type) {
  this.year = year; //integer (ex. 2001, 1995)
  this.make = make; //string (ex. Honda, Ford)
  this.model = model; //string (ex. Accord, Focus)
  this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [
  new Automobile(1995, "Honda", "Accord", "Sedan"),
  new Automobile(1990, "Ford", "F-150", "Pickup"),
  new Automobile(2000, "GMC", "Tahoe", "SUV"),
  new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
  new Automobile(2005, "Lotus", "Elise", "Roadster"),
  new Automobile(2008, "Subaru", "Outback", "Wagon")
];

Automobile.prototype.logMe = function(bool) {
  if (bool) {
    console.log(
      this.year + " " + this.make + " " + this.model + " " + this.type
    );
  } else {
    console.log(this.year + " " + this.make + " " + this.model);
  }
};

function sortArr(comparator, array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (comparator(array[j], array[j + 1])) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function yearComparator(auto1, auto2) {
  if (auto1.year < auto2.year) {
    return true;
  } else {
    return false;
  }
}

function makeComparator(auto1, auto2) {
  if (auto1.make.toUpperCase() > auto2.make.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

function typeComparator(auto1, auto2) {
  // reversed to handle when not equal to any and returns index of -1
  var types = ["WAGON", "SUV", "PICKUP", "ROADSTER"];

  var auto1Position = types.indexOf(auto1.type.toUpperCase());
  var auto2Position = types.indexOf(auto2.type.toUpperCase());

  if (auto1Position < auto2Position) {
    return true;
  } else if (auto1Position === auto2Position && auto1.year < auto2.year) {
    return true;
  } else {
    return false;
  }
}

function printAutomobiles(bool) {
  for (let i = 0; i < automobiles.length; i++) {
    automobiles[i].logMe(bool);
  }
}

console.log("*****");

console.log("The cars sorted by year are:");
sortArr(yearComparator, automobiles);

printAutomobiles(false);

console.log("The cars sorted by make are:");
sortArr(makeComparator, automobiles);

printAutomobiles(false);

console.log("The cars sorted by type are:");
sortArr(typeComparator, automobiles);

printAutomobiles(true);

console.log("*****");
