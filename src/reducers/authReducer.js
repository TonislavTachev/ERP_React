import {
  LOGIN_USER,
  REGISTER_USER,
  SET_FIELD,
} from "../types/authTypes/actionTypes";
const initialState = {
  isLoggedIn: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.payload.type]: action.payload.value,
      };
    case REGISTER_USER:
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
