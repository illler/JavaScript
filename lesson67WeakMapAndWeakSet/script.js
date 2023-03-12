"use strict";

// let user = {
//     name: "Ivan"
// }
// let map = new WeakMap();
// map.set(user, 'data');
//
// user = null;
//
// console.log(map);

let cash = new WeakMap();

function cacheUser(user){
    if (!cash.has(user)){
        cash.set(user, Date.now());
    }
    return cash.get(user);
}

let lena = {name: "Elena"};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cash.has(lena));
console.log(cash.has(alex));


let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: 'JS', from: 'Elina'},
    {text: 'Java', from: 'Max'},
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
// readMessages.add(messages[1]);

messages.shift();
console.log(readMessages.has(messages[0]));

