import styles from './css/MovieCard.module.css'
import { Link } from 'react-router-dom'

export const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    <li className={styles.movieCard}>
      <Link to={`/movie/${movie.id}`}>
        <img
          height={345}
          width={230}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  )
}
