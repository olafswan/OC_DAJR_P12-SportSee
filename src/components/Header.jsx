// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/sportsee_logo.png";


export default function Header() {

  return (
    <header>

        <NavLink to="/" className="header__logo-container">
            <img src={logo} alt="Logo Kasa" />
        </NavLink>
      <nav className="header__menu">

        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>

      </nav>
    </header>
  );
}
