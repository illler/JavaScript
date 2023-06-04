class Movie {
    constructor(movies) {
        this.movies = movies;
        this.ratings = Array.from({length: movies.length}, () => Math.floor(Math.random() * 10) + 1);
        this.showingRatings = false;
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
        this.ratings.sort();
    }

    addMovie(movieTitle, isFavorite) {
        if (isFavorite) {
            console.log('Добавляем любимый фильм');
        }
        this.movies.push(movieTitle);
        this.ratings.push(Math.floor(Math.random() * 10) + 1);
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

        if (this.showingRatings) {
            for (let i = 0; i < this.movies.length; i++) {
                const listItem = document.createElement('li');
                listItem.classList.add('promo__interactive-item');
                listItem.textContent = `${i + 1}. ${this.movies[i]} - ${this.ratings[i]}/10`;

                const deleteButton = document.createElement('div');
                deleteButton.classList.add('delete');
                listItem.appendChild(deleteButton);

                list.appendChild(listItem);
            }
        } else {
            for (let i = 0; i < this.movies.length; i++) {
                const listItem = document.createElement('li');
                listItem.classList.add('promo__interactive-item');
                listItem.textContent = `${i + 1}. ${this.movies[i]}`;

                const deleteButton = document.createElement('div');
                deleteButton.classList.add('delete');
                listItem.appendChild(deleteButton);

                list.appendChild(listItem);
            }
        }

        this.attachDeleteHandlers();
    }

    attachDeleteHandlers() {
        const deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach((button, i) => {
            button.addEventListener('click', () => {
                this.movies.splice(i, 1);
                this.ratings.splice(i, 1);
                this.updateMovieList();
            });
        });
    }

    applyFunctionToMovies(fn) {
        this.movies = this.movies.map(fn);
        this.updateMovieList();
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
    const btn = document.querySelector(".show-rating");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const isFavorite = checkbox.checked;
        const movieTitle = input.value.trim();

        if (movieTitle) {
            movieDB.addMovie(movieTitle, isFavorite);
            form.reset();
        }
    });

    btn.addEventListener('click', () => {
        if (movieDB.showingRatings) {
            movieDB.showingRatings = false;
            btn.textContent = 'Показать рейтинг';
        } else {
            movieDB.showingRatings = true;
            btn.textContent = 'Скрыть рейтинг';
        }
        movieDB.updateMovieList();
    });

    // Пример использования метода для приведения всех названий фильмов к нижнему регистру
    const lowerCaseBtn = document.querySelector(".reverse");
    lowerCaseBtn.addEventListener('click', () => {
        movieDB.applyFunctionToMovies((movie) => movie.split('').reverse().join(''));
    });
});