import { NavLink } from 'react-router-dom';
import { HeaderLink } from './Navigation.styled';

function Navigation() {
  return (
    <nav>
      <HeaderLink exact to='/'>Home</HeaderLink>
      <HeaderLink to='/movies'>Movies</HeaderLink>
    </nav>
  );
}

export default Navigation;
