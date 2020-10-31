/*------------- Head ----------------*/

const head = ([first]) => { return first};

/*------------- Tail ----------------*/

const tail = ([,...rest]) => { return rest; }; 

/*------------- Init ----------------*/

const init = (array = []) => {  return array.slice(0,-1); };

/*
 ------------- Last ----------------
*/

//Con este devolveriamos el valor del ultimo elemento
const last = (array = []) => { return array[array.length -1]; };
//Devolveriamos un array solo con el ultimo elemento.
const lastSlice = (array = []) => { return array.slice(-1); };
