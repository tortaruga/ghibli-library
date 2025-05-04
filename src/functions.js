export async function getAllFilms() {
    const url = 'https://ghibliapi.vercel.app/films';
    const response = await fetch(url);
    const movies = await response.json();

    return movies;
}


export async function getFilmByTitle(title) {
    const movies = await getAllFilms();
            
    const adjustedTitle = title.toLowerCase().replace(/\s/g, '');
            
    const myMovie = movies.filter(movie => movie.title.toLowerCase().replace(/\s/g, '').includes(adjustedTitle));
    return myMovie;
}
 
        