import { NavLink } from "react-router-dom";
import logo from "../assets/sportsee_logo.png";
import karl from "../assets/karl-dovineau.jpeg";
import cecilia from "../assets/cecilia-ratorez.jpeg";


export default function Login() {

  return (
    <>
         <header>

        <NavLink to="/" className="header__logo-container">
            <img src={logo} alt="Logo Kasa" />
        </NavLink>
        </header>

        <nav className="login__nav">
        <NavLink to="/profile/12" className="login__link">
            <img src={karl} alt="Karl Dovineau"/>
            <p className="login__user">Karl Dovineau</p>
        </NavLink>
        <NavLink to="/profile/18" className="login__link">
            <img src={cecilia} alt="Cecilia Ratorez"/>
            <p className="login__user">Cecilia Ratorez</p>
        </NavLink>
        </nav>
    </>
  );
}
