import {
  UserActionTypes
} from "./user.types";
export const setCurrentUser = user => {
  console.log("inside of setCurrentUser reducer", user);
  return {
    type: UserActionTypes['SET_CURRENT_USER'],
    payload: user
  }
}