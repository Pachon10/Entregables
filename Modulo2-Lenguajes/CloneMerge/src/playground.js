const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};


/*------------- Clone ----------------*/
function clone(source) {
  return {...source}
}

let objectClone = clone(a);
console.log("------------- Clone ----------------");
console.log('Object source',a);
console.log('Object target',objectClone);
console.log(`Is equals ${objectClone === a}`);


/*------------- Merge ----------------*/
function merge(source, target) {
  return {...target, ...source}
}

console.log("------------- Merge ----------------");
console.log('Object source', a);
console.log('Object target',b);
console.log('Result:', merge(a,b));
