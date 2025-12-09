/*
Exercise #3 (sugerencia reduce()) 
Write a program to compute the sum and product (multiplication) of an array of 
numbers. Print out the sum and the product. 
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.


*/
let arrTree = [1, 2, 3, 4];

//Sum
const add = arrTree.reduce((cont, number) => cont + number, 0);
console.log(add);

//Product
const product = arrTree.reduce((cont, number) => cont*number,1);
console.log(product);