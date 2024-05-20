import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Modal from "./components/Modal/Modal";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const closeModal = () => {
    setShowLogin(false);
  };
  return (
    <>
      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Modal isOpen={showLogin} onClose={closeModal}>
        <LoginPopup showLogin={showLogin} setShowLogin={setShowLogin} />
      </Modal>
      <Footer />
    </>
  );
}

export default App;
