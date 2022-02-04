import { NavLink } from "react-router-dom";
import { MainMenuWrapper } from "./Wrappers";

const MainMenu = () => {
    return (
        <MainMenuWrapper>
            <li>
                <NavLink to="/new-clips" className={(navData) => (navData.isActive ? "active" : "")}>
                    New clips
                </NavLink>
            </li>
            <li>
                <NavLink to="/channels" className={(navData) => (navData.isActive ? "active" : "")}>
                    Channels
                </NavLink>
            </li>
        </MainMenuWrapper>
    );
};

export default MainMenu;
