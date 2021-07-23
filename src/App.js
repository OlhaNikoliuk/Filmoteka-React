import { Route, Switch } from "react-router-dom";
import Container from "./components/Container/Container";
import NavBar from "../src/components/NavBar/NavBar";
import HomePage from "../src/views/HomePage";
import MoviesPage from "../src/views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

function App() {
  return (
    <>
      {/* <Container> */}
      <NavBar />
      {/* </Container> */}

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
        </Switch>
      </Container>
    </>
  );
}

export default App;
