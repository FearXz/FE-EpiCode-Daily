import { SELECT_BOOK } from "../actions";

const initialState = {
  content: null
};

const bookSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BOOK:
      return {
        ...state,
        content: action.payload
      };

    default:
      return state;
  }
};

export default bookSelectedReducer;
