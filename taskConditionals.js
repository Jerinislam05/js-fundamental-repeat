// Task1: free drinks
const burger = 450;
if (burger >= 500) {
  console.log("Free drink");
} else {
  console.log("pay 30tk for coke");
}

// task2: BMI Calculator and Health Category
const BMI = 40;
if (BMI < 18.5) {
  console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 24) {
  console.log("You are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are overweight");
} else {
  console.log("You are obese");
}

// task3: grade calculator
const score = 80;
if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else if (score > 100) {
  console.log("Invalid Number");
} else {
  console.log("F");
}

// task4: nested if-else
const myScore = 82;
const friendScore = 45;

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("Go for lunch");
  } else if (friendScore >= 60) {
    console.log("Good luck next time!");
  } else if (friendScore >= 40) {
    console.log("Unseen friend's message!");
  } else {
    console.log("Block your friend!");
  }
} else {
  console.log("Go home, sleep, and act sad!");
}

// task5: If-else & ternary operator
var num1 = 30;
var num2 = 15;
var result;
if (num1 > num2) {
  result = num1 * 2;
  console.log(result);
} else {
  result = num1 + num2;
  console.log(result);
}

// ternary operator
var ternaryResult = num1 > num2 ? num1 * 2 : num1 + num2;
console.log("Ternary Result", ternaryResult);

// Task6: 
var age = 20;
var ticketPrice = 800;
const isStudent = true;

if (age < 10) {
  ticketPrice = 0;
  console.log(ticketPrice);
} else if (isStudent === true) {
  ticketPrice = ticketPrice * 50/100;
  console.log(ticketPrice);
} else if (age >= 60) {
  ticketPrice = ticketPrice - ticketPrice * 15/100;
  console.log(ticketPrice);
} else {
  console.log(ticketPrice);
}