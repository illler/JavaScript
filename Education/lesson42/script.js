'use strict';

const box = document.getElementById("box");
console.log(box);

const buttons = document.getElementsByTagName('button');

console.log(buttons);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(function (i){
    console.log(i)
})



const oneHeart = document.getElementsByTagName('div')
console.log(oneHeart)