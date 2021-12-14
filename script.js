// Scrivere una funzione (e lanciarla) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// creo un array con dei numeri
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);
let newNums = [];
// imposto una funzione
function newArray(array, a, b) {
  const numsInside = array.forEach((numero) => {
    if (numero < b && numero > a) {
      // console.log(numero);
      newNums.push(numero);
      
      
    }
  });
  return numsInside;
}

newArray(nums, 1, 8);
console.log(newNums);

for (let i = 0; i < newNums.length; i++) {
  const element = newNums[i];
  
  
}



// let risultaro = nums.slice(2, 10);
// console.log(risultaro);