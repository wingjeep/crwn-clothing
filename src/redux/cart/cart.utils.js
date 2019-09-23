export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      if (cartItem.id == existingCartItem.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        };
      } else {
        return cartItem;
      }
    });
  } else {
    return [
      ...cartItems,
      {
        ...cartItemToAdd,
        quantity: 1
      }
    ];
  }
};
