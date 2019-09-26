import React from "react";
import { connect } from "react-redux"; //connect is the higher order function
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.util";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
const Header = function({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="shop">
          Shop
        </Link>
        <Link className="option" to="shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            Sign Out ({currentUser.displayName})
          </div>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
// const mapStateToProps = ({
//   user: { currentUser },
//   cart: { hidden, cartItems }
// }) => {
//   return { currentUser, hidden, cartItems };
// };

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
//mapStateToProps pass value as property
export default connect(mapStateToProps)(Header);
