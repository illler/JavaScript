'use strict';

document.addEventListener('DOMContentLoaded', function () {

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
    const listMovie = document.querySelector('.promo__interactive-list');
    movieDB.movies.sort();



// 6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
//     Новый фильм должен добавляться в movieDB.movies.
//     Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
// 7) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
//     "Добавляем любимый фильм"
// 8) Фильмы должны быть отсортированы по алфавиту

    const form = document.querySelector(".add"),
        input = form.querySelector(".adding__input"),
        checkbox = form.querySelector('[type="checkbox"]');

    form.addEventListener('submit', function (event){
        event.preventDefault();
        if (checkbox.checked){
            console.log('Добавляем любимый фильм')
        }
        movieDB.movies.push(input.value);
        movieDB.movies.sort();

        createMovieList(movieDB.movies, listMovie);

        form.reset();
    })
// 9) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    for (let i = 0; i < movieDB.movies.length; i++) {
        let oldName = movieDB.movies[i];
        if (oldName.length>21){
            movieDB.movies[i] = oldName.substring(0, 21) + "...";
        }
    }
// 10) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)




    /* 5) Добавить нумерацию выведенных фильмов */
    createMovieList(movieDB.movies, listMovie);

    function createMovieList(films, parent){
        parent.innerHTML='';
        films.sort();

        films.forEach((film,  i)=>{
            parent.innerHTML += `<li class="promo__interactive-item">${i+1}. ${film}
                            <div class="delete"></div>
                </li>`;
        })

        deleteItems();
    }

    function deleteItems() {
        const deleteItem = document.querySelectorAll('.delete');
        deleteItem.forEach((item, i) =>{
            item.addEventListener('click', () =>{
                item.parentElement.remove();
                movieDB.movies.slice(i, 1);
                createMovieList(movieDB.movies, listMovie);
            });
        });
    }
});