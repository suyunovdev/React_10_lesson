import { useEffect, useState } from "react";
import "../../SASS/singleProduct/ProductInfo.scss";

const ProductInfo = () => {
  const productsItem = JSON.parse(localStorage.getItem("products")) || [];
  const [products, setProducts] = useState(productsItem);
  const product = JSON.parse(localStorage.getItem("product"));
  const handleClick = () => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  useEffect(() => {
      setProducts([...products, product]);
  }, []);

  return (
    <div className="container product__container">
      <div className="product_img">
        <div className="product_img_box">
          <img src={product?.image} alt="" className="secondry_img" />
          <img src={product?.image} alt="" className="secondry_img" />
          <img src={product?.image} alt="" className="secondry_img" />
          <img src={product?.image} alt="" className="secondry_img" />
        </div>
        <img src={product?.image} alt="" className="main_img" />
      </div>
      <div className="data_product_card__body">
        <h2 className="product_info_title">{product?.name}</h2>
        <h4 className="product_info_price">Rp {product?.price}</h4>
        <p>{product?.description}</p>
        <button className="product__btn" onClick={handleClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
