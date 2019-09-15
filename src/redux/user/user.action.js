/** 
 * action is some function return an object with property
 * type
 * payload
 */

import {
  UserActionTypes
} from "./user.types";
export const setCurrentUser = user => {

  return {
    type: UserActionTypes['SET_CURRENT_USER'],
    payload: user
  }
}