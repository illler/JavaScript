class Movie {
    constructor(movies) {
        this.movies = movies;
    }

    removeAds() {
        const ads = document.querySelector('.promo__adv');
        ads.remove();
    }

    changeGenre() {
        const genre = document.querySelector('.promo__genre');
        genre.textContent = 'Драма';
    }

    changeBackground() {
        const bg = document.querySelector('.promo__bg');
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    }

    sortMovies() {
        this.movies.sort();
    }

    addMovie(movieTitle, isFavorite) {
        if (isFavorite) {
            console.log('Добавляем любимый фильм');
        }
        this.movies.push(movieTitle);
        this.sortMovies();
        this.updateMovieList();
    }

    truncateMovieTitle() {
        for (let i = 0; i < this.movies.length; i++) {
            let oldName = this.movies[i];
            if (oldName.length > 21) {
                this.movies[i] = oldName.substring(0, 21) + "...";
            }
        }
    }

    updateMovieList() {
        const list = document.querySelector('.promo__interactive-list');
        list.innerHTML = '';

        this.movies.forEach((movie, i) => {
            const listItem = document.createElement('li');
            listItem.classList.add('promo__interactive-item');
            listItem.textContent = `${i+1}. ${movie}`;

            const deleteButton = document.createElement('div');
            deleteButton.classList.add('delete');
            listItem.appendChild(deleteButton);

            list.appendChild(listItem);
        });

        this.attachDeleteHandlers();
    }

    attachDeleteHandlers() {
        const deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach((button, i) => {
            button.addEventListener('click', () => {
                this.movies.splice(i, 1);
                this.updateMovieList();
            });
        });
    }

}

const movieDB = new Movie([
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
]);

document.addEventListener('DOMContentLoaded', () => {
    movieDB.removeAds();
    movieDB.changeGenre();
    movieDB.changeBackground();
    movieDB.sortMovies();
    movieDB.truncateMovieTitle();
    movieDB.updateMovieList();

    const form = document.querySelector('.add');
    const input = form.querySelector('.adding__input');
    const checkbox = form.querySelector('[type="checkbox"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const isFavorite = checkbox.checked;
        const movieTitle = input.value.trim();

        if (movieTitle) {
            movieDB.addMovie(movieTitle, isFavorite);
            form.reset();
        }
    });
});