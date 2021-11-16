import styles from './css/MovieCard.module.css'
import { Link } from 'react-router-dom'
import { getMoviesImg } from '../utils/getMoviesImg'

export const MovieCard = ({ movie }) => {
  const imageUrl = getMoviesImg(movie.poster_path, 300)
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
