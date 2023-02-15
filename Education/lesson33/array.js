"use strict";

const arr = [1, 234, 3, 4, 5];
arr.push(33)
console.log(arr)

for (const arrKey of arr) {
    console.log(arrKey)
}

arr.forEach(function (item, i, arr){
    console.log(`${i}: ${item} in ${arr} `)
});

console.log(arr.sort(function (a, b){
    return a-b;
}));

// const str = prompt('', '');
// const product = str.split(',');
// console.log(product);