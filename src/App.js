// chapter 8 begin
import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Directory from "./components/directory/directory.component";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { setCurrentUser } from "./redux/user/user.action";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component {
  // call back function from auth.onAuthStateChanged return
  // will be call when unmount
  unsbscribeFromAuth = null;
  componentDidMount() {
    //get the setCurrentUserLocal from mapDispatchToProps
    const { setCurrentUserLocal } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        console.log("userAuth", userAuth);
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUserLocal({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUserLocal(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsbscribeFromAuth(); //prevent memeory leak
  }

  render() {
    return (
      <div>
        <Header currentUser />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/directory/" component={Directory} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
//mapDispatchToProps is an function that return an object of functions
//those function dispatch an object to reduce, the object with payload and type

//setCurrentUser return an object with type and payload
//dispatch redux trigger action then reduce will pick up
const mapDispatchToProps = dispatch => {
  //dispatch pass object to revery reducers

  return {
    setCurrentUserLocal: user => {
      return dispatch(setCurrentUser(user));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
