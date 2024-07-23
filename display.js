document.addEventListener('DOMContentLoaded', function() {
    const moviesGrid = document.getElementById('moviesGrid');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    movies.forEach(movie => {
        // Create the movie card
        const movieCard = document.createElement('div');
        movieCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'movie-card', 'animate__animated', 'animate__fadeInUp');

        // Create and append the movie poster
        const moviePoster = document.createElement('img');
        moviePoster.src = movie.posterURL;
        moviePoster.alt = `${movie.name} Poster`;
        moviePoster.classList.add('movie-poster');
        movieCard.appendChild(moviePoster);

        // Create and append the movie name
        const movieName = document.createElement('h2');
        movieName.textContent = movie.name;
        movieCard.appendChild(movieName);

        // Create and append the movie release date
        const movieReleaseDate = document.createElement('p');
        movieReleaseDate.textContent = `Release Date: ${movie.releaseDate}`;
        movieCard.appendChild(movieReleaseDate);

        // Create and append the IMDb rating
        const movieRating = document.createElement('p');
        movieRating.textContent = `IMDb Rating: ${movie.imdbRating}`;
        movieCard.appendChild(movieRating);

        // Append the movie card to the grid
        moviesGrid.appendChild(movieCard);
    });
});
