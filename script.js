document.getElementById('movieform').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const releaseDate = document.getElementById('releaseDate').value;
    const posterURL = document.getElementById('posterURL').value;
    const imdbRating = document.getElementById('imdbRating').value;

    const movie = {
        name: name,
        releaseDate: releaseDate,
        posterURL: posterURL,
        imdbRating: imdbRating
    }


    let movies = JSON.parse(localStorage.getItem('movies')) || []
    
    movies.push(movie);

    localStorage.setItem('movies', JSON.stringify(movies));

    document.getElementById('movieform').reset();
    

})