// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const compareArrayLengths = (arr) => {
  return () => {
    const closureArr = [1, 2, 3, 4]
    if (arr.length > closureArr.length) {
      console.log('The outer array length is greater than the inner array length')
    } else if (arr.length === closureArr.length) {
      console.log('The outer array length is equal to the inner array length')
    }
    else {
      console.log('The outer array length is less than the inner array length')
    }
  }
}

const X = compareArrayLengths([1, 2, 3, 4])

console.log(X)  //returns Function

X() // returns 'The outer array length is equal to the inner array length'

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
