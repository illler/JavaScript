'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

// if (block) {
//     console.log(block.textContent);
// }

console.log(block?.textContent);

console.log(1 + 2);

const userDate = {
    name: 'Ivan',
    age: null,
    say: function (){
        console.log("Hello");
    }
}
userDate.say();
userDate.sey?.();


console.log(userDate.skills?.js?.());