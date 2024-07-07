import { Link } from 'react-router-dom';
import '../../SASS/shop/Hero.scss'

const HeroComp = () => {
  const text = location.pathname.split("/")[1]
  return (
    <div className="shop">
      <div className="container hero_shop__container">
        <h2 className="hero_shop__title">{text}</h2>
        <div className="hero__link_box">
        <Link to="/" className='hero__link'>Home</Link>
        <span>&gt;</span>
        <p className='hero__text'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
