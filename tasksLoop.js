// task1: (1 century) --> Write a loop 1 to 200. Use break to exit the loop once you find 100.
// for loop
for (let i = 1; i <= 200; i++) {
  console.log(i);
  if (i >= 100) {
    break;
  }
}
// while loop
let i = 1;
while (i <= 200) {
  console.log(i);
  if (i >= 100) {
    break;
  }
  i++;
}

// task2: (2 sum upto 100) --> Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100 
// while loop
let n = 1;
let sum = 0;
while (n <= 200) {
  sum += n;
  if (sum >= 100) {
    break;
  }
  console.log(n);
  n++;
}
console.log("Final sum:", sum, "Last Number:", n);
// for loop
let add = 0;
for (let num = 1; num <= 200; num++) {
  add += num;
  if (add >= 100) {
    break;
  }
  console.log("Final add", add, "Last number", num);
}

// task3: (1 commitment) --> "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 // for loop
 let message = "I will invest at least 6 hrs every single day for next 60 days!";
for (let i = 1; i <= 60; i++) {
  console.log(message);
}
// while loop
let j = 1;
let msg = "I will spend at least 6 hrs every single day for next 60 days!";
while (j <= 60) {
  console.log(msg);
  j++;
}

// task4: (2 odd even) --> Find all the odd numbers from 61 to 100(subtask1).
// for loop
for (let o = 61; o <= 100; o++) {
  if (o % 2!== 0) {
    console.log("Odd numbers are",o);
  }
}
// while loop
let p = 61;
while (p <= 100) {
  if (p % 2!== 0) 
    console.log("Odd numbers are",p);
  p++;
}

// Find all the even numbers from 78 to 98(subtask2).
// while loop
let e = 78;
while (e <= 98) {
  if (e % 2 === 0) {
    console.log("Even numbers are", e);
  }
  e++;
}
// for loop
for (let f = 78; f <= 98; f++) {
  if (f % 2 === 0) {
    console.log("Even numbers are", f);
  }
}