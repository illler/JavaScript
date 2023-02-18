'use strict';

const box = document.getElementById("box"),
            button = document.getElementsByTagName('button'),
            circles = document.getElementsByClassName('circle'),
            hearts = document.querySelectorAll('.heart'),
            oneHeart = document.querySelector('.heart'),
            wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: red; width: 500px`;

button[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.cssText = 'background-color: blue'
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'
});

const div = document.createElement('div');
// const text = document.createTextNode('Hi there!');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[2]);

// circles[0].remove()
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = '<h1>Hello world</h1>';

div.textContent = '<h1>Hello world</h1>'

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');