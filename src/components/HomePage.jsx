import { useEffect, useState } from "react"
import { getAllFilms, getFilmByTitle } from "../functions";
import MoviePreviewCard from "./MoviePreviewCard";
import SearchFilters from "./SearchFilters";

export default function HomePage({formData, updateForm}) {

  const [previewCards, setPreviewCards] = useState([]);
  const [stats, setStats] = useState({
    totalFilms: 0,
    totalTime: 0
  });

  useEffect(() => {
    async function getStats() {
      const allFilms = await getAllFilms();
      const duration = allFilms.reduce((totalDuration, film) => {
        return totalDuration + Number(film.running_time);
      }, 0);

      const days = (duration / (24 * 60)).toFixed(0);
      const hours = ((duration % (24 * 60)) / 60).toFixed(0);
      const minutes = ((duration % (24 * 60)) % 60).toFixed(0);

      setStats({
        totalFilms: allFilms.length,
        totalDuration: duration,
        days: days,
        hours: hours,
        minutes: minutes
      })
    } 

    getStats();
  }, []);

  useEffect(() => {
    async function displayAllCards() {
      const movies = await getAllFilms();
      
      const previews =  movies.map(movie => {
          return (
              <MoviePreviewCard key={movie.id} movie={movie} title={movie.title} date={movie.release_date} img={movie.image} />
          )
      })

      setPreviewCards(previews);
  }

  
  async function displayFilteredCards() {
    const movies = await getFilmByTitle(formData.movie_title_query);
    
    const previews =  movies.map(movie => {
        return (
            <MoviePreviewCard key={movie.id} title={movie.title} date={movie.release_date} img={movie.image} />
        )
    })

    setPreviewCards(previews);
  }

    if (formData.filter_toggle === 'all' || formData.movie_title_query === '') {
      displayAllCards();
    } else if (formData.filter_toggle === 'search') {
      displayFilteredCards();
    }
  }, [formData])

    return (
        <div className="home">
              <h1>Ghibli<span>Library</span></h1>
             <SearchFilters formData={formData} updateForm={updateForm} />
             
          <div className="previews">
            {previewCards.length === 0 ? <p>There seems to be an issue. Please refresh the page or try again later.</p> : previewCards }
          
          </div>
         
         <div className="intro">
          {stats.totalFilms !== 0 && (
          <p>There are a total of <span>{stats.totalFilms}</span> films. To see them all it would take <span>{stats.days}</span> days, <span>{stats.hours}</span> hours and <span>{stats.minutes}</span> minutes of non-stop watching!</p>
          )}
          </div>

         <footer>
           <p>this movie catalog is built using <a href="https://ghibliapi.vercel.app/" target="_blank">Studio Ghibli API</a></p>
          </footer>

        </div>
    )
}