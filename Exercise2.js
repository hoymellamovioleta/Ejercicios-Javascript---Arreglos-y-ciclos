/*
    Exercise #2 (sugerencia map()) 
    Write a function that: 
    ● Takes in an array of numbers. 
    ● Doubles the value of each number in the array. 
    ● Prints out the new updated array. 
    Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/
let arrTwo = [1, 2, 4, 5];

arrTwo = arrTwo.map(numero => numero * 2);
console.log(arrTwo);