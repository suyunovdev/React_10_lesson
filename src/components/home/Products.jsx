import axios from "axios";
import { useEffect, useState } from "react";
import "../../SASS/home/Products.scss";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchApi = async () => {
    const res = await axios.get("http://localhost:3000/data");
    const data = await res.data;
    setProducts(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container products__container">
      <h2 className="products__title">Our Products</h2>
      <div className="product_box">
        {products.map((product) => (
          <div className="data_card" key={product.id}>
            <img src={product.image} alt="" />
            <div className="data_card__body">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h4>Rp {product.price}</h4>
            </div>
          </div>
        ))}
      </div>
      <button className="products__btn">Show More</button>
    </div>
  );
};

export default Products;
