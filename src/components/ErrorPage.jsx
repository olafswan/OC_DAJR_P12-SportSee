import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/sportsee_logo.png";


function PageError () {
    const error = useRouteError()
    console.log(error);
    return <>
        <div className="header__logo-container">
            <img src={logo} alt="Logo Kasa" />
        </div>
        <div className="error-page">
            <h1>Oops!</h1>
            <h2>La page est introuvable !</h2>
            <NavLink to="/">Revenir à l&#39;accueil</NavLink>
        </div>
  
    </>
}

export default PageError;