import React, { useState } from "react";
import "./styles.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import { useDataLayerValue } from "./StateProvider";

export default function App() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="App">
      <Router>
        {user === null ? (
          <Login dispatch={dispatch} />
        ) : (
          <>
            <Header />
            <div className="app_body">
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Home page</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}
