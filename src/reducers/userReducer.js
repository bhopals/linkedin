import { SET_USER } from "./../actions/actionTypes";

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log("ACTION.TYPE>", action.type);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;

// Reducers === STATE UPDATER
