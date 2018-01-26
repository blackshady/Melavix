/** the reducer takes the information of what happen and then the current state */
import {USER_LOGGED_IN} from '../types';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    default:
      return state;
  }
}
