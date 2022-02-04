import { useNavigate } from "react-router-dom";
import { GoBackWrapper } from "./Wrappers";

const GoBack = () => {
    const navigate = useNavigate();

    return (
        <GoBackWrapper onClick={() => navigate(-1)}>
            <i className="fi-arrow-left"></i>
            <p>Go back</p>
        </GoBackWrapper>
    );
};

export default GoBack;
