import { useEffect, useState } from "react";
import "../../SASS/cart/Cart.scss";
import delImg from "../../assets/images/del_img.svg";

const ProductItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
  }, []);

  const handleDecrement = (id) => {
    setProducts((products) =>
      products.map((item) =>
        id == item.id
          ? { ...item, count: item.count - (item.count > 1 ? 1 : 0) }
          : item
      )
    );
  };
  const hadleIncrement = (id) => {
    setProducts((products) =>
      products.map((item) =>
        id == item.id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  const hadleDelete = (id) => {
    setProducts((products) =>
      products.filter((pr) => (pr.id !== id ? { ...pr, pr } : ""))
    );
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  });
  let sum = products.map(pr=>pr.price*pr.count).reduce((a,b)=> a+b,0)
  console.log(sum)

  return (
    <div className="container product_item__container">
      <table>
        <thead>
          <tr className="table__head">
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr className="table_product" key={product.id}>
              <td>
                <div className="product_item_img">
                  <img src={product.image} alt="" />
                </div>
              </td>
              <td>
                <h2>{product.name}</h2>
              </td>
              <td>
                <h4>Rp {product.price}</h4>
              </td>
              <td>
                <div className="btn_box">
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <p className="product_count">{product.count}</p>
                  <button onClick={() => hadleIncrement(product.id)}>+</button>
                </div>
              </td>
              <td>
                <h4>Rp {product.price * product.count}.00</h4>
              </td>
              <td>
                <button
                  className="del_btn"
                  onClick={() => hadleDelete(product.id)}
                >
                  <img src={delImg} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="card_costs_box">
        <h2>Cart Totals</h2>
        <div className="card_costs">
          {
            products.map(product=>(
              <div className="cost_box" key={product.id}>
                <h3>Subtotal</h3>
                <p>Rs. {product.price * product.count}.00</p>
              </div>
            ))
          }
        </div>
        <div className="cost_box">
          <h3>Total</h3>
          <p>{sum}</p>
        </div>
        <button className="product__btn">Check Out</button>
      </div>
    </div>
  );
};

export default ProductItem;
