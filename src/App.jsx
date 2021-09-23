import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { MovieDetails } from './pages/MovieDetails'
import { LandingPage } from './pages/LandingPage'
import styles from './App.module.css'

export const App = () => {
  return (
    <>
      <Router>
        <header>
          <Link to="/">
            <h1 className={styles.title}>Movies</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path={`/movie/:movieId`} component={MovieDetails} />
            <Route>404</Route>
          </Switch>
        </main>
      </Router>
    </>
  )
}
