import { auth, provider } from "../firebase";

export function signInAPI() {
  return (dispatch) => {
    auth
      .singInWithPopup(provider)
      .then((payload) => {
        console.log("Payload>", payload);
      })
      .catch((error) => {
        console.log("ERROR>", error);
        alert(error.message);
      });
  };
}
