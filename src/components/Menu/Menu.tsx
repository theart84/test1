import { NavLink } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'menu__link menu__link-active' : 'menu__link';

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink className={linkClass} to="/RA_router-menu/" end>Главная</NavLink>
        </li>
        <li className="menu__item">
          <NavLink className={linkClass} to="/RA_router-menu/drift">Дрифт-такси</NavLink>
        </li>
        <li className="menu__item">
          <NavLink className={linkClass} to="/RA_router-menu/timeattack">Time Attack</NavLink>
        </li>
        <li className="menu__item">
          <NavLink className={linkClass} to="/RA_router-menu/forza">Forza Karting</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
