import styles from './css/MovieDetails.module.css'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { get } from '../utils/httpClient'
import { Spinner } from '../components/Spinner'

export const MovieDetails = () => {
  let { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      setIsLoading(true)
      get(`/movie/${movieId}`).then((data) => {
        setIsLoading(false)
        setMovie(data)
      })
    } catch (error) {
      console.log(error.message)
    }
  }, [movieId])

  if (isLoading) {
    return <Spinner />
  }
  if (!movie) {
    return null
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <div className={styles.detailsContainer}>
      <img
        width={320}
        height={480}
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>
          {movie.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  )
}
//https://www.youtube.com/watch?v=afxLq1UFEfQ

//58:22
