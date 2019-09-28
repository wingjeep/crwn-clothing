import {
  createSelector
} from 'reselect'

const selectCart = state => state.cart; //one level only //input selector no createSelector needed


export const selectCartItems = createSelector([selectCart],

  (cart) => {
    return cart.cartItems
  }
)

export const selectCartItemsCount = createSelector([selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden);


export const selectCartItemsTotal = createSelector([selectCartItems],
  cartItems => cartItems.reduce(
    (accumulateTotal, cartItem) => accumulateTotal + cartItem.quantity * cartItem.price,
    0
  )
)