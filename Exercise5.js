
/*
Exercise #5 
    For each of the exercises below, assume you are starting with the following people 
    array. 
    let people = ["Maria", "Dani", "Luis", "Juan", "Camila"]; 
    1. Write a command that prints out all of the people in the list. 
    2. Write the command to remove "Dani" from the array. 
    3. Write the command to remove "Juan" from the array. 
    4. Write the command to move "Luis" to the front of the array. 
    5. Write the command to add your name to the end of the array. 
    6. Using a loop, iterate through this array and after console.log "Maria", exit from 
    the loop. 
    7. Write the command that gives the indexOf where "Maria" is located. 
    At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"]; 

// #1
console.log("Orden inicial:", people.join(", "));

function removePerson(arr, name) {
    return arr.filter(person => person !== name);
}

// #2 remove "Dani"
people = removePerson(people, "Dani");
console.log("Después de borrar:", people);

// #3 remove "Juan"
people = removePerson(people, "Juan");
console.log("Después de borrar:", people);

// #4 move "Luis" to the front
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
console.log("Después de mover Luis:", people);

// #5 add your name
people.push("Victoria");
console.log("Después de agregar mi nombre:", people);

// #6 iterate through this array and after console.log "Maria"
for (let person of people) {
    if (person === "Maria"){
        console.log(person);
        break;
    }     
}


// #7 indexOf where "Maria" is located
console.log("Índice de Maria:", people.indexOf("Maria"));

console.log("Lista final:", people.join(", "));