// Declare a function 'NumArray', which takes in at most two arguments (length and initialValue) and returns an
//instance of a 'NumArray' object when invoked with the 'new' keyword. NumArray should function similarly to arrays
// - i.e. they will store values at numbered indexes, starting at 0. All NumArray objects should contain their
//own 'length' property to keep track of the number of elements in the array. When a NumArray is first created,
// it should initialize the length property to the length passed-in and set all values to the initial value
//passed-in (if the initial value is not provided, initialize all values to 0), and if the length is not passed-in, initialize the length property to 0.
// - Task 1: Declare a function 'addAt', which is accessible to ALL instances of 'NumArray'. 'addAt' should
//take in two arguments (an index and a value), and when invoked on a NumArray instance, should add the value
// to that NumArray at the passed-in index. Update the NumArray's length property appropriately and return the
// length of the NumArray.
// - Task 2: Declare a function 'applyFunc', which is accessible to ALL instances of 'NumArray'. 'applyFunc'
// should take in a callback function as a single argument, and when invoked on a NumArray instance, should
//run the callback on every element in the NumArray (except the length) and return an instance of NumArray.

// - Task 3: Declare a function 'removeFrom', which is accessible to ALL instances of 'NumArray'. 'removeFrom'
//should take in at most two arguments (an index and a number K), and when invoked on a NumArray instance, should
// remove K elements from the NumArray starting from the index (inclusive). If the number K is not passed-in,
//remove only one element at the index. Remember to update the length property properly.


function NumArray(length, initialValue) {
  if (length) {
    this.length = length;
    if (initialValue) {
      for (let i = 0; i < this.length; i++) {
        this[i] = initialValue;
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        this[i] = 0;
      }
    }
  } else {
    this.length = 0;
  }
}

NumArray.prototype.addAt = function (index, value) {
  this[index] = value;
  this.length++;
};
NumArray.prototype.applyFunc = function (callback) {
  let keys = Object.keys(this).filter((key) => key !== "length");
  keys.forEach((key) => {
    this[key] = callback(this[key]);
  });
};

NumArray.prototype.removeFrom = function (index, K) {
  if (K) {
    for (let i = 0; i < K; i++) {
      delete this[index + i];
    }
    for (let i = 0; i < this.length - K - index; i++) {
      this[index + i] = this[index + K + i];
    }
    for (let i = 0; i < this.length - K - index; i++) {
      delete this[index + K + i];
    }
    this.length -= K;
  } else {
    K = 1;
    for (let i = 0; i < K; i++) {
      delete this[index + i];
    }
    for (let i = 0; i < this.length - K - index; i++) {
      this[index + i] = this[index + K + i];
    }
    delete this[this.length - 1];
    this.length -= K;
  }
};
let myNum = new NumArray();
console.log(myNum);
myNum.addAt(0, 12);
myNum.addAt(1, 15);
myNum.addAt(2, 22);
myNum.addAt(3, 9);
myNum.addAt(4, 7);
myNum.addAt(5, 99);
// myNum.applyFunc((n)=> Number(n)+1)
myNum.removeFrom(2);
myNum.removeFrom(2,2);

