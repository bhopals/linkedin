import { auth, provider } from "../firebase";
import { SET_USER } from "./actionTypes";

export const setUser = (payload) => ({ type: SET_USER, user: payload });

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log("Payload>", payload);
        dispatch(setUser(payload.user));
      })
      .catch((error) => {
        console.log("ERROR>", error);
        alert(error.message);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("getUserAuth>", user);
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => console.log("SignOut Error>", error.message));
  };
}
