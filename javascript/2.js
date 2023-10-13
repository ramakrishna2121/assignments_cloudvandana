
  
function arraySort(arr) { 
    arr.sort((a,b)=>a-b); 
    arr.reverse(); 
    return arr; 
}
const array1 = [7,8,9,52,45,178]; 
console.log(arraySort(array1)); 