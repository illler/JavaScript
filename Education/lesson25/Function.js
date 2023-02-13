"use strict";


let num = 20;

function showFirstMessage(text){
    console.log(text);
    let num = 10;
    console.log(num)
}

showFirstMessage('Hello World');
console.log(num)

function calc(a, b){
    return a+b;
}

console.log(calc(4, 3));


const logger = function (){
    console.log('Hello');
};

logger();

const calc2 = (a, b) => {
    return a+b;
}
