import { GET_BOOKS, GET_BOOKS_ERROR, GET_BOOKS_LOADING_OFF, GET_BOOKS_LOADING_ON } from "../actions";

const initialState = {
  content: [],
  isLoading: false,
  hasError: false,
  errorMessage: ""
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        content: action.payload
      };
    case GET_BOOKS_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload
      };
    case GET_BOOKS_LOADING_ON:
      return {
        ...state,
        isLoading: true
      };
    case GET_BOOKS_LOADING_OFF:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default booksReducer;
