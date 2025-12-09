let numeros = [64, 34, 25, 12, 22, 11, 90];

function bubbleSortBasico(arr) {
  
  let tamanioArr = arr.length;
  
  // Primer bucle: controla las rondas 
  for (let i = 0; i < tamanioArr; i++) {
    
    // Segundo bucle: hace las comparaciones en cada ronda
    for (let j = 0; j < tamanioArr - 1; j++) {
      
      // COMPARACIÓN: ¿el actual es mayor que el siguiente?
      if (arr[j] > arr[j + 1]) {
        
        // INTERCAMBIO: cambiamos sus posiciones
        let temp = arr[j];        // Guardamos temporalmente
        arr[j] = arr[j + 1];      // Movemos el segundo al primero
        arr[j + 1] = temp;        // Movemos el primero al segundo
      }
    }
  }
  
  return arr; // Array ordenado
}

console.log("Números sin orden:", [64, 34, 25, 12, 22, 11, 90]);
console.log("Números ordenados:", bubbleSortBasico([64, 34, 25, 12, 22, 11, 90]));