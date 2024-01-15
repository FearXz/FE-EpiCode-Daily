import { SET_ADMIN_NAME } from "../actions";

const initialState = {
  content: ""
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_NAME:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
};

export default adminReducer;
