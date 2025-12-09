/*
Exercise #4 (sugerencia filter() e includes()) 
    let student1Courses = ['Math', 'English', 'Programming']; 
    let student2Courses = ['Geography', 'Spanish', 'Programming']; 
    Create a program that loops over the 2 arrays; if there are any common courses print 
    them out to the console.
*/

let student1Courses = ['Math', 'English', 'Programming']; 
let student2Courses = ['Geography', 'Spanish', 'Programming']; 

const courses = student1Courses.filter(item => student2Courses.includes(item));
console.log(courses);