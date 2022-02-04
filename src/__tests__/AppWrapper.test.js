import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppWrapper from "components/AppWrapper/AppWrapper";
import LoginMenu from "components/AppWrapper/LoginMenu";
import LoginModal from "components/AppWrapper/LoginModal";
import Page from "components/AppWrapper/Page";
import RegisterModal from "components/AppWrapper/RegisterModal";
import SideBar from "components/AppWrapper/SideBar";
import TermsMenu from "components/AppWrapper/TermsMenu";
import UserMenu from "components/AppWrapper/UserMenu";
import SearchMenu from "components/AppWrapper/SearchMenu";
import MainMenu from "components/AppWrapper/MainMenu";

const componentsList = [<AppWrapper />, <LoginMenu />, <LoginModal />, <Page />, <RegisterModal />];

it("Should render every main component without crashing.", () => {
    const div = document.createElement("div");
    for (let i = 0; i < componentsList.length; i++) {
        ReactDOM.render(componentsList[i], div);
        ReactDOM.unmountComponentAtNode(div);
    }
});

const menuComponentsList = [<SideBar />, <TermsMenu />, <UserMenu />, <SearchMenu />, <MainMenu />];

it("Should render every menu component without crashing.", () => {
    const div = document.createElement("div");
    for (let i = 0; i < componentsList.length; i++) {
        ReactDOM.render(<Router>{menuComponentsList[i]}</Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});
