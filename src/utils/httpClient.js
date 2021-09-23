const API = 'https://api.themoviedb.org/3'

export function get(path) {
  return fetch(`${API}${path}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzhlZjIxOGViYjI0YTA4YjRjZDdmMGE2YmY5NGMwNSIsInN1YiI6IjYxNGM5NjA1ZDU1YzNkMDAyNmQ4NDRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mIC8uj81jGySB7yEq8xJO6CEtHhwChzl6-nAH4DxTPk',
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((result) => result.json())
}
