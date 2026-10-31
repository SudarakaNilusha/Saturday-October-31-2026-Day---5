/*let students = [
    {
        name: "John",
        age: 20,
        isstudent: true
        marks: [
            { subject: "Math", score: 85 },
            { subject: "Science", score: 90 }
        ]
    }
];
console.log(students);
console.log(students[1].age);
console.log(students[0].marks[1].marks);*/

let x = 5;
let y = 10;

console.log(x === y);

if (false || false) {
    console.log("working");
}else {
    console.log("not working");
}

let a = 10;
let b = 20;
if (a > b) {
    console.log("x is greater than y");
}else{
    console.log("x is less than y");
}

mark = 90;
if (mark >= 90) {
    console.log("A+");
}else if (mark >= 75) {
    console.log("B");
}else if (mark >= 65) {
    console.log("C");
}else if (mark >= 50) {
    console.log("D");
}else {
    console.log("F");
}

let date = "6";
switch (date) {
    case "1":
        console.log("monday!");
        break;
    case "2":
        console.log("tuseday!");
        break;
    case "3":
        console.log("wednesday!");
        break;
    case "4":
        console.log("thursday!");
        break;
    case "5":
        console.log("friday!");
        break;  
    case "6":
        console.log("saturday!");
        break;
    case "7":
        console.log("sunday!");
        break;
    default:
        console.log("invalid date!");
        break;
}