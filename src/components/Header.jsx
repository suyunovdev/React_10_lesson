import { NavLink } from "react-router-dom";
import logoImg from "../assets/images/logo.svg";
import IconsCopm from "./IconsCopm";
import '../SASS/Header.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container header__container">
      <div className="header__logo">
        <img src={logoImg} alt="logo img" />
      </div>
      <nav className="header__nav">
        <NavLink to="/" className="header__link">Home</NavLink>
        <NavLink to="/shop" className="header__link">Shop</NavLink>
        <NavLink to="/about" className="header__link">About</NavLink>
        <NavLink to="/contact" className="header__link">Contact</NavLink>
      </nav>
      <IconsCopm />
      <FontAwesomeIcon icon={faBarsStaggered} size="2xl" className="icon menu_bar"/>
    </div>
  );
};

export default Header;
