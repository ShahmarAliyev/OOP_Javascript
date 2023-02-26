// Declare a function 'Chars', which takes in one (called 'initialString') or no arguments and returns an instance of a 'Chars' object when invoked with the 'new' keyword. Chars should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. All Chars objects should contain their own 'length' property to keep track of the number of charaters in the object. When a Chars is first created, it should initialize the length property to the length of 'initialString' if it is passed in or 0 if it's not. And in case the initialString is provided, add each character of it to the object.
// - Task 1: Declare a function 'affix', which is accessible to ALL instances of 'Chars'. 'affix' should take in a string as a single argument, and when invoked on a Chars instance, should add the string to the instance character by character. Update the length property appropriately and return it.
// - Task 2: Declare a function 'split', which is accessible to ALL instances of 'Chars'. 'split' should take in a string (called 'delimiter') as a single argument, and when invoked on a Chars instance, should return an array of strings splitted by the delimiter.
// - Task 3: Declare a function 'join', which is accessible to ALL instances of 'Chars'. 'join' should take in a string (called 'linkedBy') as a single argument, and when invoked on a Char instance, should return another 'Chars' instance with all characters are joined by the passed-in string.
// - Task 4: Declare a function 'chain', which is accessible to ALL instances of 'Chars'. 'chain' should take in another 'Chars' instance, and when invoked on a 'Chars' instance, should return a new instance with all characters from the passed-in instance appended to the current instance.
// - Task 5: Declare a function 'replaceAll', which is accessible to ALL instances of 'Chars'. 'replaceAll' should take in two strings (called 'pattern' and 'replacedBy') as arguments, and when invoked on a 'Chars' instance, should return a new 'Chars' instance with all patterns replaced by the 'replacedBy' string.
function Chars(initialString) {
  this.length = initialString ? initialString.length : 0;
  if (initialString) {
    for (let i = 0; i < initialString.length; i++) {
      this[i] = initialString[i];
    }
  }
}
Chars.prototype.affix = function (str) {
  for (let i = 0; i < str.length; i++) {
    this[this.length + i] = str[i];
  }
  this.length += str.length;
};
Chars.prototype.join = function (linkedBy) {
  let values = Object.values(this)
    .filter((el, i) => {
      return typeof el === "string";
    })
    .join(linkedBy);
  return values;
};
Chars.prototype.replaceAll = function (pattern, replacedBy) {
  let keys = Object.keys(this).filter((el) => el !== "length");
  keys.forEach((el) => {
    if (this[el] === pattern) {
      this[el] = replacedBy;
    }
  });
  
  return this;
};
Chars.prototype.split = function (delimiter) {
  let values = Object.values(this).filter((el) => {
    return typeof el === "string";
  });
  return values.join("").split(delimiter);
};
let myChars = new Chars("hello,world,today");
console.log(myChars);
console.log(myChars.split(","));
let myChars2 = new Chars("texas");
console.log(myChars2.affix("-"));
console.log(myChars2.affix("california"));
console.log(myChars2.replaceAll("-","*"));
console.log(myChars2.split('*'));
