/* Задания на урок:

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const add = document.getElementsByClassName('promo__adv');
for (let i = 0; i < add.length; i++) {
    add[i].remove()
}
// 2) Изменить жанр фильма, поменять "комедия" на "драма"
let drama = document.querySelector('.promo__genre');
drama.textContent = 'Драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//     Реализовать только при помощи JS
let picture = document.querySelector('.promo__bg');
picture.style.backgroundImage ='url("img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//     Отсортировать их по алфавиту
const listMovie = document.getElementsByClassName('promo__interactive-item');
movieDB.movies.sort();
for (let i = 0; i < listMovie.length; i++) {
    listMovie[i].textContent = `${i+1}. ${movieDB.movies[i]}`;
}