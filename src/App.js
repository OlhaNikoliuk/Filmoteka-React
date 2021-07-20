import { Route, Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import HomePage from "../src/views/HomePage";
import MoviesPage from "../src/views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

function App() {
  return (
    <>
      <NavBar />
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
      </Switch>
    </>
  );
}

export default App;
