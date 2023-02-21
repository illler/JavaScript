'use strict';

// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling)

for (let string of document.body.childNodes) {
    if (string.nodeName==='#text'){
        continue;
    }
    console.log(string);
}


