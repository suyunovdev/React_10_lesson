import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import SingleProduct from "./pages/SingleProduct"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/single" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App