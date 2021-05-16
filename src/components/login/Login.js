import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer/reducer";
import "./login.css";

function Login({ dispatch }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://webdesigntips.blog/wp-content/uploads/2019/02/Slack-sparks-further-outrage-with-tweak-to-new-logo.jpg"
          alt="slack-logo"
        />
        <h1>Slack Clone</h1>
        <p>www.slackclone.com</p>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  );
}

export default Login;
