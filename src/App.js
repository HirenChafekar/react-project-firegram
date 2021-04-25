import React, { useState, useEffect } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import { SignIn, SignUp } from "./comps/Auth";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/config";
import { useHistory } from "react-router-dom";

function Home() {
  const [selectedImg, setSelectedImg] = useState(null);
  console.log(selectedImg);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

function App() {
  const history = useHistory();

  useEffect(
    () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          history.push("/");
        } else history.push("/signin");
      });
    }
    //console.log(user)
  );

  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
