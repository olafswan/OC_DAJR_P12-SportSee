// import { NavLink } from "react-router-dom";
import logo from "../assets/sportsee_logo.png";


export default function Header() {

  return (
    <header>
      <div className="header__logo-container">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav className="header__menu">

        <div>Accueil</div>
        <div>Profil</div>
        <div>Réglages</div>
        <div>Communauté</div>

      </nav>
    </header>
  );
}
