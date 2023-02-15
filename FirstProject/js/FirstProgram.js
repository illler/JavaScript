"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const nameMovie = prompt('Один из последних просмотренных фильмов?', '').trim(),
            rating = prompt('На сколько оцените его?', '').trim();
        if (nameMovie != null && rating!=null && nameMovie!=='' && nameMovie.length<50) {
            personalMovieDB.movies[nameMovie] = rating;
        } else {
            console.log('error');
            i--;
        }

    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count<10){
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count<30){
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count>=30){
        console.log('Вы кономан')
    }else console.log('error')
}

detectPersonalLevel();

function writeYourGenres(){
    for (let i = 0; i < 3; i++) {
        let ans = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        personalMovieDB.genres[i] = ans;
    }
}

writeYourGenres();
function showMyDB(){
    if (personalMovieDB.privat===false){
        console.log(personalMovieDB)
    }
}

showMyDB();