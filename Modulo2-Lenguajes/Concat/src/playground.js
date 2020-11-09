const varArray1 = [1,2,3,4,5];
const varArray2 = [6,7,8,9,10];
const varArray3 = [11,12,13,14,15];
const varArray4 = [16,17,18,19,20];

/*------------- Concat ----------------*/

const concat = (a, b) => { return [...a, ...b] };

const concatEx = (...arguments) => { 
  return arguments.reduce(concat);
};

console.log("Two Array");
console.log(`Origin value1: ${varArray1}`);
console.log(`Origin value1: ${varArray2}`);
console.log(concat(varArray1,varArray2));

console.log("Any Array");
console.log(`Origin value1: ${varArray1}`);
console.log(`Origin value1: ${varArray2}`);
console.log(`Origin value1: ${varArray3}`);
console.log(`Origin value1: ${varArray4}`);
console.log(concatEx(varArray1,varArray2,varArray3,varArray4));