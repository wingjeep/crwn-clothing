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
export const itemInclease = (cartItems, cartItemToAdd) => {
  return cartItems.map(cartItem => {
    if (cartItem.id == cartItemToAdd.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity + 1
      };
    }
  });

}

export const itemDeclease = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id ? {
      ...cartItem,
      quantity: cartItem.quantity - 1
    } :
    cartItem
  );
}
export const cleartemToCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(item => item.id != cartItemToClear.id)
}