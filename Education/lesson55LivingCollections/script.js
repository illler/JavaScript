'use strict';

const boxes = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxes.forEach(item => {
    if (item.matches('.this')){
        console.log(item);
    }
})

console.log(boxes[0].closest('.wrapper'));


// boxes[0].remove();
// boxesGet[0].remove();
//
// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box')
//     document.body.append(div);
// }
//
// console.log(boxes);
// console.log(boxesGet);
// // console.log(document.body.children);
//
// console.log(Array.from(boxesGet));