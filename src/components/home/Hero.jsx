import "../../SASS/home/Hero.scss";
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero__container">
        <div className="hero__content">
        <p className="hero__sup_title">New Arrival</p>
        <h2 className="hero__title">Discover Our New Collection</h2>
        <p className="hero__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <NavLink to="/shop">
        <button className="hero__btn">BUY NOW</button>
        </NavLink>
      </div>
      </div>
    </div>
  );
};

export default Hero;
