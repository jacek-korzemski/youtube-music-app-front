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
            <li>
                <NavLink to="/top-clips" className={(navData) => (navData.isActive ? "active" : "")}>
                    Top clips
                </NavLink>
            </li>
            <li>
                <NavLink to="/reviews" className={(navData) => (navData.isActive ? "active" : "")}>
                    Reviews
                </NavLink>
            </li>
        </MainMenuWrapper>
    );
};

export default MainMenu;
