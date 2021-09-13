import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./SideBar";
import { Wrapper, ModalWrapper, AlertsWrapper } from "./Wrappers";
import Alert from "./Alert";
import NewClips from "views/NewClips";
import Clip from "views/Clip";
import Channels from "views/Channels";
import Channel from "views/Channel";
import Index from "views/Index";

export const AppContext = React.createContext(false);

const AppWrapper = () => {
  window.timeout = [];
  const [user, setUser] = useState(false);
  const [modal, setModal] = useState(false);
  const [alerts, setAlerts] = useState([]);

  let alertProperties = null;

  const checkUserInSession = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  const pushAlert = (alert) => {
    const id = Math.floor(Math.random() * 999999999 + 1);

    alertProperties = {
      id,
      content: alert,
    };

    setAlerts([...alerts, alertProperties]);
  };

  useEffect(() => {
    if (sessionStorage.getItem("user") && checkUserInSession(sessionStorage.getItem("user"))) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
    } else {
      if (sessionStorage.getItem("user")) {
        sessionStorage.removeItem("user");
      }
    }
  }, []);

  return (
    <AppContext.Provider value={{ user: user, setUser: setUser, modal: modal, setModal: setModal, alerts: alerts, pushAlert: pushAlert }}>
      <Router>
        <Wrapper>
          <SideBar />
          <Switch>
            <Route path="/" exact>
              <Index />
            </Route>
            <Route path="/new-clips">
              <NewClips />
            </Route>
            <Route path="/channels">
              <Channels />
            </Route>
            <Route path="/top-clips"></Route>
            <Route path="/reviews"></Route>
            <Route path="/clip/:id">
              <Clip />
            </Route>
            <Route path="/channel/:id">
              <Channel />
            </Route>
          </Switch>
        </Wrapper>
        {modal && <ModalWrapper>{modal}</ModalWrapper>}
        <AlertsWrapper>
          <Alert />
        </AlertsWrapper>
      </Router>
    </AppContext.Provider>
  );
};

export default AppWrapper;
