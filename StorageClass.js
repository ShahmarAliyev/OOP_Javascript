// Declare a class 'Storage' with 2 properties: size and capacity. The 'size' property keeps track of the number of
//current elements in the storage. The 'capacity' property is the maximum number of elements that storage can safely
// store. 'Storage' classes should function similarly to an Array - i.e. they will store values at numbered indexes,
// starting at 0.
// - Task 1: Add a constructor to this class. The constructor takes in a single argument for the capacity property
// and initializes the size and the capacity. When a Storage is first created, it should have a size of 0.

// - Task 2: Declare a function 'add', which is accessible to ALL instances of 'Storage'. 'add' should take in a single
// argument, and when invoked on a Storage instance, should add the argument to the first available position of that
//Storage and return the size of the instance. However, if the 'capacity' is exceeded, return "Maximum size exceeded!".

// - Task 3: Declare a function 'remove', which is accessible to ALL instances of 'Storage'. 'remove' should take in
// a single argument which is the value that needs to be removed, and when invoked on a Storage instance, should
//remove all the properties with the corresponding value from the instance and return the size of that instance.
//If the value doesn’t exist, return "No values found!".

class Storage {
  constructor(capacity) {
    this.maxCap= capacity;
    this.size=0;
  }
  add(arg) {
    if (this.size + 1 > this.maxCap) {
      return "Maximum size exceeded!";
    } else {
      this[this.size] = arg;
      this.size=this.size+1;
      return this.size
    }
  }
  remove (val){
    if(!this===val) return 'No values found!'
    else{
      delete this.val;
      this.size=this.size-1;
      return this.size;
    }
  }
}
let myStorage1 = new Storage(3)
console.log(myStorage1);
console.log(myStorage1.maxCap);
console.log(myStorage1.size);
console.log(myStorage1.add('sofa'));
console.log(myStorage1.add('couch'));
console.log(myStorage1.add('cofee maker'));
console.log(myStorage1.remove('cofee maker'));
