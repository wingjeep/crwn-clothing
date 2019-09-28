import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import "./cart-dropdown.styles.scss";
const CartDropdown = function({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length == 0 ? (
          <div>No Items</div>
        ) : (
          cartItems.map(carItem => <CartItem key={carItem.id} item={carItem} />)
        )}
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToPros = ({ cart: { cartItems } }) => ({
  cartItems: cartItems
});

export default withRouter(connect(mapStateToPros)(CartDropdown));
