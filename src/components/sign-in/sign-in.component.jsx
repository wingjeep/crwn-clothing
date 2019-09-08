import React, { Component } from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";
export default class SignIn extends Component {
  //set state to store the current value
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  //update the current value
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  //event handler to catche input change and set the state
  handleChange = event => {
    const { value, name } = event.target;
    console.log(name, value, "--", event);
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons">
            {" "}
            <CustomButton type="Submit" label="Login" value="Login">
              {" "}
              {/* trigger the event handler set in form */}
              Sign in{" "}
            </CustomButton>
            <CustomButton
              type="Submit"
              label="Login"
              value="Login"
              onClick={signInWithGoogle}
              isGoogleSignIn //? where it's set
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
