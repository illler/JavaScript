const btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function (){
//     alert('click')
// };
// btn.onclick = function (){
//     alert('click')
// };

let i = 0;
const clear = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i===1){
    //     btn.removeEventListener('click', clear)
    // }
};

// btn.addEventListener('click', clear);
// overlay.addEventListener('click', clear);

btn.forEach(item =>{
    item.addEventListener('click', clear, {once: true})
});

const link = document.querySelector('a');

link.addEventListener('click', (event) =>{
    event.preventDefault();

    console.log(event.target);
})