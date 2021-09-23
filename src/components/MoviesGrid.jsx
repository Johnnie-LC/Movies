import { MovieCard } from './MovieCard'
import styles from './css/MoviesGrid.module.css'
import { useEffect, useState } from 'react'
import { get } from '../utils/httpClient'

//Los componentes de Reaqct son catalogadas como funciones puras, no pueden tener egfectso
//secundarios como la llamada a apis
//para hacer llamadas a apis usamos hooks
export const MoviesGrid = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    get('/discover/movie').then((data) => setMovies(data.results))
  }, [])

  if (!movies) {
    return null
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}
