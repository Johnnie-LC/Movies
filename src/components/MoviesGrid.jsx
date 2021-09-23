import { MovieCard } from './MovieCard'
import styles from './css/MoviesGrid.module.css'
import { useEffect, useState } from 'react'
import { get } from '../utils/httpClient'
import { Spinner } from './Spinner'
//Los componentes de Reaqct son catalogadas como funciones puras, no pueden tener egfectso
//secundarios como la llamada a apis
//para hacer llamadas a apis usamos hooks
export const MoviesGrid = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    try {
      get('/discover/movie').then((data) => setMovies(data.results))
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  if (!movies) {
    return <Spinner />
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}
