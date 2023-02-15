"use strict";

let str = "some";
let strObj = new String();

console.dir([1, 2, 3])

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log('Hello')
    }
};

// const john = {
//     health: 100
// }

const john = Object.create(soldier);

console.log(john.armor);
