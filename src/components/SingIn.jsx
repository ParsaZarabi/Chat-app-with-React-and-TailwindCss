import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase.js";

const style = {
  wrapper: `flex justify-center`,
};

const googleSingIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SingIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSingIn} />
    </div>
  );
};

export default SingIn;
