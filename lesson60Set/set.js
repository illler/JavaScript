'use strict';

const arr = ['Sendy', 'Alex', 'Anna', 'Oleg', 'Alex'];

const set = new Set(arr);

set.add('Billy').add('Oleg');

function unique(arr){
    return Array.from(new Set(arr));
}

console.log(unique(arr));
