// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancle

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) =>{
        e.preventDefault()
        console.log(e.targetTouches[0].pageY);
    });
    //
    // box.addEventListener('touchend', (e) =>{
    //     e.preventDefault();
    //     console.log('End');
    // });


});

// touches
// targetTouches
// changedTouches

