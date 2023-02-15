"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const nameMovie = prompt('Один из последних просмотренных фильмов?', '').trim(),
                rating = prompt('На сколько оцените его?', '').trim();
            if (nameMovie != null && rating != null && nameMovie !== '' && nameMovie.length < 50) {
                personalMovieDB.movies[nameMovie] = rating;
            } else {
                console.log('error');
                i--;
            }

        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель')
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы кономан')
        } else console.log('error')
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let ans = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            while (ans === null || ans === '') {
                alert('Введи хоть что то!!!!')
                ans = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            }
            personalMovieDB.genres[i] = ans;
        }
        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`)
        });
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB)
        }
    },

    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
}