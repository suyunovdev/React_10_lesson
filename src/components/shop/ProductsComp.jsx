import axios from "axios";
import { useEffect, useState } from "react";
import "../../SASS/shop/Products.scss";
import { Link } from "react-router-dom";

const ProductsComp = () => {
  const [products, setProducts] = useState([]);
  const fetchApi = async () => {
    const res = await axios.get("http://localhost:3000/data");
    const data = await res.data;
    setProducts(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const hadleClick = (product) => {
    localStorage.setItem("product", JSON.stringify(product));
  };
  return (
    <div>
      <div className="product_box">
        {products.map((product) => (
          <div className="data_card " key={product.id}>
            <div className="data_bg">
              <div className="data_bg_elements">
                <Link to="/single" className="btn_link">
                  <button
                    className="data_bg_btn"
                    onClick={() => hadleClick(product)}
                  >
                    Add to cart
                  </button>
                </Link>
              </div>
            </div>
            <img src={product.image} alt="" />
            <div className="data_card__body">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h4>Rp {product.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsComp;
