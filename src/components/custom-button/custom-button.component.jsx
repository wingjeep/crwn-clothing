import React from "react";
import "./custom-button.style.scss";
export default function CustomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherPros
}) {
  // console.log("isGoogleSignIn", isGoogleSignIn);
  return (
    <button
      className={` ${inverted ? "google-inverted-in" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherPros}
    >
      {children}
    </button>
  );
}
