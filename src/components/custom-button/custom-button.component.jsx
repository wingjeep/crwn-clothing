import React from "react";
import "./custom-button.style.scss";
export default function CustomButton({ children, label, ...otherPros }) {
  return <button {...otherPros}>{children}</button>;
}
