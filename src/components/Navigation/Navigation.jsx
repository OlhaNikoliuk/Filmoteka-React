import { NavLink } from 'react-router-dom';
// import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink
      exact
        to='/'
        className="NavLink"
        activeClassName="ActiveLink"
      >
        Home
      </NavLink>
      <NavLink
        to='/movies'
        className="NavLink"
        activeClassName="ActiveLink"
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
