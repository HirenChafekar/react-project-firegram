import React from "react";
import { auth } from "../firebase/config";
import { useHistory } from "react-router-dom";
const Title = () => {
  const history = useHistory();
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        history.push("/signin");
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className="title">
        <h1>Photo Gallery</h1>
        <button
          onClick={handleSignout}
          className="btn waves-effect waves-light "
          style={{ background: "#ff4a4a", float: "right" }}
        >
          SignOut
        </button>
        <h2>In ❤️ with React</h2>
        <p>Let's add our memories here. </p>
      </div>
    </>
  );
};

export default Title;
