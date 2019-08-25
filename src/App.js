import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Directory from "./components/directory/directory.component";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
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

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/directory/" component={Directory} />
        <Route path="/hats/:abc" component={HatsPage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
