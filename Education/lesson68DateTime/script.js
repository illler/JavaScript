"use strict";

const now = new Date('2023-03-12');
// new Date.parse('2023-03-12');
// console.log(now.setHours(16));
// console.log(now);
//
// console.log(now.getUTCHours());
//
// console.log(now.getTimezoneOffset())
// console.log(now.getTime())

const start = new Date();

for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
        let s = i*j/3;
    }
    let some = i**3;
}

let end = new Date();
console.log(end-start)
