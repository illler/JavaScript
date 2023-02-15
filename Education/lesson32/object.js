"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    }
};

console.log(options['colors']['background']);

delete options.name;
console.log(options)

for (let optionsKey in options) {
    if (typeof (options[optionsKey]) === 'object'){
        for (const optionsKeyKey in options[optionsKey]) {
            console.log(`Свойство ${optionsKeyKey} имеет значение ${options[optionsKey][optionsKeyKey]}`)
        }
    }
    else {
        console.log(`Свойство ${optionsKey} имеет значение ${options[optionsKey]}`)
    }
}