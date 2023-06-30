const options = { method: 'GET', headers: { accept: 'application/json' } };

fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

//peliculas por genero
fetch("https://api.themovidb.org/3/genre/movie/list?language0en", options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const genres = data.genres:
            console.log(genres);
    })
    .catch(err => console.error(err));