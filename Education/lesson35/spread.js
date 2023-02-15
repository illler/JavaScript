"use strict";

// Неправильное копирование
let a = 5,
    b = a;

b = b + 5;
console.log(b + " " + a);

const obj = {
    a: 5,
    b: 1
};

const copyO = obj;
copyO.a = 10;
console.log(obj)
console.log(copyO);

// Копирование с помощью цикла
function copyObj(mainObj) {
    let objCopy = {};
    for (const objCopyKey in mainObj) {
        objCopy[objCopyKey] = mainObj[objCopyKey];
    }
    return objCopy;
}

let number = {
    a: 2,
    b: 3,
    c: {
        x: 3,
        y: 90
    }
}

const copy = copyObj(number)
copy.a = 10
copy.c.x = 12

console.log(copy)
console.log(number)

// Копирование с помощью assign
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign({}, add))

const arr = [1, 3, 2, 6, 4]
const newArr = arr.slice();

newArr[0] = 10;
console.log(arr);
console.log(newArr);

// копирование с помощью spread оператора
const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const test = [2, 5, 7, 4];

log(...test);

const array = ['a', 'b'];

const newAarray = [...array];
console.log(newAarray);


const q = {
    one: 1,
    two: 2
};

const newQ = {...q};

