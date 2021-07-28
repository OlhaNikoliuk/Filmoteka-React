import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import NavBar from "../src/components/NavBar/NavBar";
import { Spinner } from "./components/Spinner/Spinner";
// import HomePage from '../src/views/HomePage';
// import MoviesPage from '../src/views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';// убираем статический импорт, так, как вебпак автоматически доавит его в сборку

const HomePage = lazy(() =>
  import("./views/HomePage.js" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage.js" /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage.js" /* webpackChunkName: "movie-details" */)
);

function App() {
  return (
    <>
      <Container>
        <NavBar />
      </Container>
      <Suspense fallback={<Spinner />}>
        <Container>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/movies" exact>
              <MoviesPage />
            </Route>

            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>

            <Route>
              <HomePage />
            </Route>
          </Switch>
        </Container>
      </Suspense>
    </>
  );
}

export default App;
