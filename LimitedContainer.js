// Declare a function 'LimitedContainer', which takes in a single argument (called 'threshold') and returns
//  an instance of a 'LimitedContainer' object when invoked with the 'new' keyword.
// LimitedContainer objects should function similarly to objects - i.e., they will store elements as
// key-value pairs, and the value is the number of times the key appeared in the object.
// All LimitedContainer objects should contain their own size and threshold properties. The size keeps
//  track of the number of items a LimitedContainer instance contains and the threshold is the upper-limit
// of a value in the object. When a LimitedContainer is first created, it should have a size of 0.
// - Task 1: Declare a function, 'add', which is accessible to ALL instances of 'LimitedContainer'.
// 'add' should take in a single argument as a string, and when invoked on a LimitedContainer instance,
//  should update the number of times that value appears as a key to that LimitedContainer. However,
// if any value is equal to the threshold, remove the corresponding property from the instance.
// Update the LimitedContainer's size property appropriately, and return the new size of the LimitedContainer.
// - Task 2: Declare a function 'group', which is accessible to ALL instances of 'LimitedContainer'.
//  'group' should take in no arguments, and when invoked on a LimitedContainer instance, should group
//  all keys with the same value as a property with the key is the value and the value is an array
//  containing all the keys. The LimitedContainer's threshold remains unchanged but the size property
//  needs to be appropriately updated.
// - Task 3: Declare a function 'check', which is accessible to ALL instances of 'LimitedContainer'.
// 'check' should take in a single argument as a string, and when invoked on a LimitedContainer instance,
// should return the number of times that argument appeared in the instance.
// - Task 4: Declare a function 'ungroup', which is accessible to ALL instances of 'LimitedContainer'.
//'ungroup' should take in no arguments, and when invoked on a LimitedContainer instance,
//should ungroup all properties with the keys are the original properties as strings and the values
// are the number of time a particular key appeared in the instance as integers.
//The LimitedContainer's threshold remains unchanged but the size property needs to be appropriately updated.
function LimitedContainer(threshold) {
  this.size = 0;
  this.threshold = threshold;
  this.grouped = false
}
LimitedContainer.prototype.check = function (str) {
  let exist = false;
  if (this[str]) return this[str];
  let keysArr = Object.keys(this).filter(
    (el) => el !== "size" && el !== "threshold"
  );
  if (this[str] === undefined) {
    for (let i = 0; i < keysArr.length; i++) {
      for (let j = 0; j < this[keysArr[i]].length; j++) {
        if (this[keysArr[i]][j] === str) {
          exist = true;
          return Number(keysArr[i]);
        }
      }
    }
    if (!exist) return "This key does not exist!";
  }
};
LimitedContainer.prototype.add = function (arg) {
  if(!this.grouped){
    if (this[arg] === undefined) {
  
      this[arg] = 1;
      this.size = this.size + 1;
      return this.size;
    } else if (this.size + 1 > this.threshold) {
      this.size = this.size - this.threshold;
      delete this[arg];
      return this.size;
    } else {
      this[arg] = this[arg] + 1;
      this.size = this.size + 1;
      return this.size;
    }
  }else{

    let addedKey= this.check(arg);
    console.log(addedKey);
    
      if(typeof(addedKey)==='string'){
        this[1].push(arg)
        this.size =this.size +1 

      }else{
        this[addedKey]= this[addedKey].filter(el=>el!==arg)
          this[addedKey+1].push(arg)
      }
  }
};
let myCont = new LimitedContainer(15);
console.log(myCont.add("b"));
console.log(myCont.add("a"));
console.log(myCont.add("n"));
console.log(myCont.add("a"));
console.log(myCont.add("n"));
console.log(myCont.add("a"));
console.log(myCont.add("b"));
console.log(myCont.add("o"));
console.log(myCont.add("r"));
console.log(myCont.add("n"));
console.log(myCont.add("s"));

console.log(myCont);
LimitedContainer.prototype.group = function () {
  let keysArr = Object.keys(this).filter(
    (key) => key !== "size" && key !== "threshold" && key!=='grouped'
  );
  for (let i = 0; i < keysArr.length; i++) {
    if (this[this[keysArr[i]]] === undefined) {
      this[this[keysArr[i]]] = [];
      this[this[keysArr[i]]].push(keysArr[i]);
      delete this[keysArr[i]];
    } else if (this[this[keysArr[i]]] !== undefined) {
      this[this[keysArr[i]]].push(keysArr[i]);
      delete this[keysArr[i]];
    }
  }
  let keysArr2 = Object.keys(this).filter(
    (key) => key !== "size" && key !== "threshold" && key!=='grouped'
  );
  this.size  = keysArr2.length
  this.grouped = true
  return this;
};
console.log(myCont.group());
LimitedContainer.prototype.ungroup = function (str) {
  let keysArr = Object.keys(this).filter(
    (el) => el !== "size" && el !== "threshold" && el!=='grouped'
  );

  for (let i = 0; i < keysArr.length; i++) {
    for (let j = 0; j < this[keysArr[i]].length; j++)
      this[this[keysArr[i]][j]] = Number( keysArr[i]);
    delete this[keysArr[i]];
  }
  let keysArr2 = Object.keys(this).filter(
    (el) => el !== "size" && el !== "threshold" && el!=='grouped'
  );
  this.size = keysArr2.reduce((acc,curr)=>acc+this[curr],0)

  this.grouped=false
};
console.log(myCont.ungroup());

// * Bonus: Make the function 'add' works properly when the instance is grouped!
console.log(myCont.add("s"));
console.log(myCont);
