import React from "react";
import "./custom-button.style.scss";
export default function CustomButton({
  children,
  isGoogleSignIn,
  ...otherPros
}) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherPros}
    >
      {children}
    </button>
  );
}
