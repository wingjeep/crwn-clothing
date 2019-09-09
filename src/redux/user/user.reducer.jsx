// does not need to import anything
// what reduce do is to setState
// all reduce has state, initial state much set
const INITIAL_STATE = {
  currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
      break;

    default:
      return state;
      break;
  }
};

export default userReducer;
