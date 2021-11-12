import { SET_LOADING_STATUS, GET_ARTICLES } from "../actions/actionTypes";

export const initState = {
  articles: [],
  loading: false,
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
      break;
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
      break;
    default:
      return state;
  }
};

export default articleReducer;
