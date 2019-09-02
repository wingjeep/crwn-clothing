import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Directory from "./components/directory/directory.component";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth } from "./firebase/firebase.util";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <Link to="/">Home</Link>
      <button onClick={() => props.history.push("/")}>Home2</button>
      <h1>HATS PAGE </h1>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  // call back function from auth.onAuthStateChanged return
  // will be call when unmount
  unsbscribeFromAuth = null;
  componentDidMount() {
    this.unsbscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsbscribeFromAuth(); //prevent memeory leak
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/directory/" component={Directory} />
          <Route path="/hats/:abc" component={HatsPage} />
          <Route path="/hats" component={HatsPage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
