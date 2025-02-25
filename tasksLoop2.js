// task5: (sum) --> Display sum of all the odd numbers from 91 to 129(subtasks)
// for loop
let sum = 0;
for (let n = 91; n <= 129; n++) {
    if (n % 2 !== 0) {
        console.log(n);
        sum += n;
    }
}
console.log("Final sum", sum);
// while loop
let total = 0;
let i = 91;
while (i <= 129) {
    if (i % 2 !== 0) {
        console.log(i);
        total += i;
    }
    i++;
}

console.log("Final total", total);


// Display sum of all the even numbers from 51 to 85.
// for loop
let sum2 = 0;
for (let i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        console.log(i);
        sum2 += i;
    }
}
console.log("Final sum of even numbers", sum2);
// while loop
let n = 51;
let total2 = 0;
while (n <= 85) {
    if (n % 2 == 0){
        console.log(n);
        total2 += n;
    }
    n++;
}

console.log("Final total of even numbers", total2);