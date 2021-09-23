import styles from './css/Search.module.css'
import { FaSearch } from 'react-icons/fa'

export const Search = () => {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} type="text" />
        <button className={styles.searchButton} type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  )
}
