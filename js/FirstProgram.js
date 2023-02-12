"use strict";

let s = 5, w = 5;
console.log(s++);
console.log(++w);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}



for (let i = 0; i < numberOfFilms; i++) {
    const nameMovie = prompt('Один из последних просмотренных фильмов?', '');
    personalMovieDB.movies[nameMovie] = prompt('На сколько оцените его?', '');
}


console.log(personalMovieDB)