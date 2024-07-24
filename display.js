document.addEventListener('DOMContentLoaded', function() {
    const moviesGrid = document.getElementById('moviesGrid');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    movies.forEach(movie => {

        const movieCard = document.createElement('div');
        movieCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'movie-card', 'animate__animated', 'animate__fadeInUp');
        
        const moviePoster = document.createElement('img');
        moviePoster.src = movie.posterURL;
        moviePoster.classList.add('movie-poster');
        movieCard.appendChild(moviePoster);

        const movieName = document.createElement('h2');
        movieName.textContent = movie.name;
        movieCard.appendChild(movieName);

        const movieReleaseDate = document.createElement('p');
        movieReleaseDate.textContent = `Release Date: ${movie.releaseDate}`;
        movieCard.appendChild(movieReleaseDate);

        const movieRating = document.createElement('p');
        movieRating.textContent = `IMDb Rating: ${movie.imdbRating}`;
        movieCard.appendChild(movieRating);
        
        moviesGrid.appendChild(movieCard);
    });
});
