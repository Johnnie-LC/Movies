import { MovieCard } from './MovieCard'
import styles from './css/MoviesGrid.module.css'
import { useEffect, useState } from 'react'
import { get } from '../utils/httpClient'
import { Spinner } from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Empty } from './Empty'
//Los componentes de Reaqct son catalogadas como funciones puras, no pueden tener egfectso
//secundarios como la llamada a apis
//para hacer llamadas a apis usamos hooks

export const MoviesGrid = ({ search }) => {
  const [movies, setMovies] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const searchUrl = search
      ? `/search/movie?query=${search}&page=${page}`
      : `/discover/movie?page=${page}`
    try {
      setIsloading(true)
      get(searchUrl).then((data) => {
        setMovies((prevMovies) => prevMovies.concat(data.results))
        setHasMore(data.page < data.total_pages)
        setIsloading(false)
      })
    } catch (error) {
      console.log(error.message)
    }
  }, [search, page])

  if (isloading && !movies) {
    return <Spinner />
  }

  if (!isloading && movies.length === 0) {
    return <Empty />
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  )
}
