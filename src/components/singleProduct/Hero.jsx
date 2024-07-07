import { Link } from 'react-router-dom';
import '../../SASS/singleProduct/Hero.scss'

const Hero = () => {
  const productsItem = JSON.parse(localStorage.getItem("product")) || [];
  return (
    <div className="hero_single_product">
        <div className="container hero_single_product__container">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <Link to="/shop">Shop</Link>
        <span>&gt;</span>
        <p className="hero_single__text">{productsItem.name}</p>
        </div>
    </div>
  )
}

export default Hero