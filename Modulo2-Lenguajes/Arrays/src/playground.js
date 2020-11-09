const varArray = [1,2,3,4,5,6,7,8,9,10];
console.log(`Origin value: ${varArray}`);

/*------------- Head ----------------*/

const head = ([first]) => { return first};

console.log("-------HEAD-------");
console.log(head(varArray));

/*------------- Tail ----------------*/

const tail = ([,...rest]) => { return rest; }; 

console.log("-------Tail-------");
console.log(tail(varArray));

/*------------- Init ----------------*/

const init = (array = []) => {  return array.slice(0,-1); };

console.log("-------Init-------");
console.log(init(varArray));

/*
 ------------- Last ----------------
*/

const last = (array = []) => { return array[array.length -1]; };
const lastSlice = (array = []) => { return array.slice(-1); };

console.log("-------Last-------");
console.log(last(varArray));
console.log("Option2 Last")
console.log(lastSlice(varArray));


