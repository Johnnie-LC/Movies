import styles from './css/Search.module.css'
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router'
import { useQuery } from '../hooks/useQuery'

export const Search = () => {
  //in react to capture and event of a form, we can use state
  const history = useHistory()

  const query = useQuery()
  const search = query.get('search')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search || ''}
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value
            history.push(`/Movies/?search=${value}`)
          }}
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch style={{ color: 'white' }} size={20} />
        </button>
      </div>
    </form>
  )
}

// https://www.youtube.com/watch?v=3z-Y4kbLrTM
// 36:21
