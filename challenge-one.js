let marks = prompt("Enter student marks:");
let Grades;

if (marks < 0 || marks > 100) {
  console.log("Invalid input!");
} else {
 
  if (marks >= 80) {
    Grades = "A";
  } else if (marks >= 60 && marks < 80) {
    Grades = "B";
  } else if (marks >= 50 && marks < 60) {
    Grades = "C";
  } else if (marks >= 40 && marks < 50) {
    Grades = "D";
  } else {
    Grades = "E";
  }
}

console.log(Grades);







