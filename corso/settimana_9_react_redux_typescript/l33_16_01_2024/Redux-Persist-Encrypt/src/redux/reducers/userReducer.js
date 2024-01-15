import { SET_USER_NAME } from "../actions";

const initialState = {
  content: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
