import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
const CartDropdown = function({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(carItem => (
          <CartItem key={carItem.id} item={carItem} />
        ))}
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToPros = ({ cart: { cartItems } }) => ({
  cartItems: cartItems
});

export default connect(mapStateToPros)(CartDropdown);
