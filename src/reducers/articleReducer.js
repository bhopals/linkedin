import { SET_LOADING_STATUS } from "./../actions/actionTypes";

export const initState = {
  loading: false,
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
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
