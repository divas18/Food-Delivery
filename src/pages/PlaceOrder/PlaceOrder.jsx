import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();

  const { getTotalCartAmount } = useContext(StoreContext);

  const totalCartAmount = getTotalCartAmount();
  const deliveryFee = totalCartAmount > 0 ? 2 : 0;

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip-code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Enter Phone Number" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalCartAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${totalCartAmount + deliveryFee}</b>
            </div>
          </div>
          <button
            type="button"
            disabled={totalCartAmount === 0}
            onClick={() => navigate("/order")}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
