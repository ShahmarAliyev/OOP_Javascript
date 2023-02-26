// Declare a function 'DuplicatedContainer', which takes in no arguments and returns an instance of
// a 'DuplicatedContainer' object when invoked with the 'new' keyword.
// DuplicatedContainer objects should function similarly to objects - i.e., they will store elements
//as key-value pairs, and the value is the number of times the key appeared in the object.
// All DuplicatedContainer objects should contain their own 'length' property, which keeps track of
//the number of items they contain. When a DuplicatedContainer is first created, it should have a length of 0.
// - Task 1: Declare a function, 'add', which is accessible to ALL instances of 'DuplicatedContainer'.
// 'add' should take in a single argument, and when invoked on a DuplicatedContainer instance, should
// update the number of times that value appears as a key to that DuplicatedContainer, update the
// DuplicatedContainer's length property appropriately, and return the length of the DuplicatedContainer.
// - Task 2: Declare a function 'update', which is accessible to ALL instances of 'DuplicatedContainer'.
// 'update' should take in a single argument as a callback function, and when invoked on a
//DuplicatedContainer instance, should update all the values (except the ‘length’ property) by applying
//the callback to the corresponding values of the instance.
//apple:5, orange:3, soda:12
//12,5,3 length =3 ,Kcannt be more than length
// - Task 3: Declare a function, 'pick', which is accessible to ALL instances of 'DuplicatedContainer'.
// 'pick' should take in an integer K as a single argument, and when invoked on a DuplicatedContainer
// instance, should return the Kth-most frequently occurring property in the instance (counting from 1).
// If there's more than one valid answer, return any of them. If the passed-in number is not a valid pick,
// return "Invalid pick!".

function DuplicatedContainer() {
  this.length = 0;
}
DuplicatedContainer.prototype.add = function (addVal) {
  if (this[addVal] === undefined) {
    this[addVal] = 1;
    this.length = this.length + 1;
    return this.length;
  } else {
    this[addVal] = this[addVal] + 1;
    this.length = this.length + 1;
    return this.length;
  }
};

DuplicatedContainer.prototype.update = function (cb) {
  let keysOfThis = Object.keys(this).filter((key) => key !== "length");
  keysOfThis.forEach((key) => {
    this[key] = cb(this[key]);
  });

  keysOfThis.forEach((key) => {
    if (this[key] <= 0) {
      delete this[key];
      this.length = this.length - 1;
    }
  });
};
DuplicatedContainer.prototype.pick = function (K) {
  let keysArr = Object.keys(this).filter((key) => key !== "length");
  let sortedVal = keysArr.sort((a, b) => this[b] - this[a]);
  if (K > sortedVal.length) return "Invalid pick!";
  else {
    // console.log(sortedVal, sortedVal[K-1]);

    return sortedVal[K - 1];
  }
};

let useOne = function(num){
  return num-1
}

let myDupCont = new DuplicatedContainer();
console.log(myDupCont.add("orange")); //1
console.log(myDupCont.add("orange")); //2
console.log(myDupCont.add("apple")); //3
console.log(myDupCont.add("apple")); //3
console.log(myDupCont.add("soda")); //4
console.log(myDupCont.update(useOne));
console.log(myDupCont);
console.log(myDupCont.pick(4));
console.log(myDupCont.pick(3));
console.log(myDupCont.pick(2));
console.log(myDupCont.pick(1));
