import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./SideBar";
import { Wrapper, ModalWrapper, AlertsWrapper } from "./Wrappers";
import Alert from "./Alert";
import NewClips from "views/NewClips";
import Clip from "views/Clip";
import Channels from "views/Channels";
import Channel from "views/Channel";
import Index from "views/Index";

export const AppContext = React.createContext();

const AppWrapper = () => {
    const [user, setUser] = useState(false);
    const [modal, setModal] = useState(false);
    const [alerts, setAlerts] = useState([]);

    const randomIdForAlertGenerator = (length) => {
        let result = "";
        let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const unmountHandler = () => {
        let _alerts = [...alerts];
        _alerts.shift();
        setAlerts(_alerts);
    };

    const addAlert = (content) => {
        let new_alerts = [...alerts, { id: randomIdForAlertGenerator(64), content: content }];
        setAlerts(new_alerts);
    };

    return (
        <AppContext.Provider value={{ user: user, setUser: setUser, modal: modal, setModal: setModal, addAlert: addAlert }}>
            <Router>
                <Wrapper>
                    <SideBar />
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/new-clips" element={<NewClips />} />
                        <Route path="/channels" element={<Channels />} />
                        <Route path="/top-clips"></Route>
                        <Route path="/reviews"></Route>
                        <Route path="/clip/:id" element={<Clip />} />
                        <Route path="/channel/:id" element={<Channel />} />
                    </Routes>
                </Wrapper>
                {modal && <ModalWrapper>{modal}</ModalWrapper>}
                <AlertsWrapper>
                    {alerts?.map((elem) => (
                        <Alert value={elem.content} key={elem.id} onUnmount={unmountHandler} />
                    ))}
                </AlertsWrapper>
            </Router>
        </AppContext.Provider>
    );
};

export default AppWrapper;
