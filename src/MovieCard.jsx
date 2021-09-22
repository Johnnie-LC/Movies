import styles from './MovieCard.module.css'

export const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  return (
    <li className={styles.movieCard}>
      <img
        height={345}
        width={230}
        className={styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      <div>{movie.title}</div>
    </li>
  )
}
