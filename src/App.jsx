import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SingleProduct from "./components/SingleProduct";
import Contact from "./components/Contact";
import Favourities from "./components/Favourities";

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/favourities" element={<Favourities/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
