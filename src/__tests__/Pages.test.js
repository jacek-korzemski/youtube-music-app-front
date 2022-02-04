import React from "react";
import ReactDOM from "react-dom";
import NewClips from "views/NewClips";
import Channel from "views/Channel";
import Channels from "views/Channels";
import Clip from "views/Clip";
import Index from "views/Index";
import Search from "views/Search";

const viewsComponentsList = [<NewClips />, <Channel />, <Channels />, <Clip />, <Index />, <Search />];

it("Should render all views components without crashing.", () => {
    const div = document.createElement("div");
    for (const component of viewsComponentsList) {
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    }
});
