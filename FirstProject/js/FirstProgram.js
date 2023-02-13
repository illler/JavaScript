"use strict";

let s = 5, w = 5;
console.log(s++);
console.log(++w);

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


for (let i = 0; i < numberOfFilms; i++) {
    const nameMovie = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('На сколько оцените его?', '');
    if (nameMovie != null && rating!=null && nameMovie!=='' && nameMovie.length<50) {
        personalMovieDB.movies[nameMovie] = rating;
    } else {
        console.log('error');
        i--;
    }

}

if (personalMovieDB.count<10){
    console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count<30){
    console.log('Вы классический зритель')
} else if (personalMovieDB.count>=30){
    console.log('Вы кономан')
}else console.log('error')


console.log(personalMovieDB)