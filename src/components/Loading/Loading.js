import { LoadingWrapper } from "./Wrappers";

const Loading = () => {
    return (
        <LoadingWrapper>
            <div className="loading-wrapper">
                <div className="snippet" data-title=".dot-falling">
                    <div className="stage">
                        <div className="dot-falling"></div>
                    </div>
                </div>
            </div>
        </LoadingWrapper>
    );
};

export default Loading;
