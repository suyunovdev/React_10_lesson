import { Link, NavLink } from "react-router-dom";
import "../SASS/Footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__body">
          <div className="footer__box">
            <Link to="/">
              <h2>Funiro.</h2>
            </Link>
            <p className="footer__text_p">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="footer__box">
            <p className="footer__box_text">Links</p>
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <p className="footer__box_text">Help</p>
            <ul className="footer__list">
              <li className="footer__item">
                <NavLink to="/pay">Payment Options</NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/return">Returns</NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/pp">Privacy Policies</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <p className="footer__box_text">Newsletter</p>
            <form className="footer__form">
              <input type="text" placeholder="Enter Your Email Address" className="footer__input"/>
              <button className="footer__btn">Subscribe</button>
            </form>
          </div>
        </div>
        <hr />
        <div className="footer__end">
          <p className="footer__end_text">2023 furino. All rights reverved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
