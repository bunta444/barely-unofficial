import "./App.css";
import Navbar from "./components/Navbar";
import CarouselComponent from "./components/Carousel";
import Products from "./components/Products";
import Footer from "./components/Footer";
import About from "./components/About";
import ProductPage from "./components/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { useState } from "react";
import CheckoutPage from "./components/CheckoutPage";
import ThankYouPage from "./components/ThankYouPage";
import WatchUs from "./components/WatchUs";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (cartItem) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.product.id === cartItem.product.id && item.size === cartItem.size
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const existingQuantity = parseInt(
        updatedCartItems[existingItemIndex].quantity
      );
      const newQuantity = parseInt(cartItem.quantity);
      updatedCartItems[existingItemIndex].quantity = (
        existingQuantity + newQuantity
      ).toString();
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, cartItem]);
    }
  };

  const removeItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router basename="/barely-unofficial/">
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CarouselComponent />
              <Products />
              <About />
            </>
          }
        />

        <Route
          path="/:productId"
          element={<ProductPage addToCart={addToCart} />}
        />
        <Route path="/products" element={<Products />} />
        <Route path="/watch-us" element={<WatchUs />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeItem={removeItem} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage cartItems={cartItems} clearCart={clearCart} />}
        />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
