import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { baseUrl } from "./core";
import axios from "axios";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import LiveScore from "./pages/LiveScore";
import LiveScoreAdmin from "./pages/LiveScoreAdmin";
<<<<<<< HEAD
=======
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "./core";
>>>>>>> e78f75a0fe773941fca2a82b569b80b794559aa8

function App() {
  let [isLogged, setIsLogged] = useState(false);
  axios
    .get(`${baseUrl}/api/v1/getcookie`, { withCredentials: true })
    .then((res) => {
      setIsLogged(true);
    })
    .catch((e) => {
      console.log("error: ", e);
      setIsLogged(false);
    });
  return (
    <>
      {isLogged ? (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/livescore">
            <LiveScore />
          </Route>
          <Route exact path="/livescore-admin">
            <LiveScoreAdmin />
          </Route>
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
    </>
  );
}

export default App;
