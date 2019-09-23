import React from "react";
import "./collection-tiem.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  // console.log(id, name, price, imageUrl, item, "id, name, price, imageUrl");
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => {
          addItem(item);
          console.log("vitem", item);
        }}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToState = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToState
)(CollectionItem);
