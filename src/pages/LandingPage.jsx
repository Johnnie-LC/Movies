import React from 'react'
import { MoviesGrid } from '../components/MoviesGrid'
import { Search } from '../components/Search'
import { useQuery } from '../hooks/useQuery'
import { useDebounce } from '../hooks/useDebounce'

export const LandingPage = () => {
  const query = useQuery()
  const search = query.get('search')

  const useDebounceSearch = useDebounce(search, 500)

  return (
    <>
      <Search />
      <MoviesGrid key={useDebounceSearch} search={useDebounceSearch} />
    </>
  )
}
