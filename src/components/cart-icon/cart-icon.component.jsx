import React, { Component } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import "./cart-icon.style.scss";

import { toggleCartHidden } from "../../redux/cart/cart.action"; // get action from (another component)
function testOnlick() {
  console.log("click card item");
}
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//     0
//   )
// });

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
