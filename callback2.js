const students = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 23 }
];
function sortAge(a,b){
    return a.age-b.age;
}
students.sort(sortAge);
console.log(students);