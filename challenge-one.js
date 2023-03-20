// const score = parseInt(prompt("Enter your marks"))

function teststudentGradeSystem(score) {
// Categorises each student according to the score they achieved.
if (score > 79 && score <= 100) {
   return grade = "A"
} else if (score >= 60 && score <=79) {
  return grade = "B"
} else if (score >49 && score <=59) {
  return grade = "C"
} else if (score >=40 && score <=49) {
  return grade = "D"
  //If the score is below the above least score its;
} else {
  return grade = "E"
}
}
console.log(teststudentGradeSystem(50));







