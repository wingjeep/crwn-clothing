export const setCurrentUser = user => {
  console.log("inside of setCurrentUser reducer", user);
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}