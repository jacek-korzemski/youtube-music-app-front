import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./Wrappers";

const ClipsList = ({ data }) => {
    return (
        <Wrapper>
            {data &&
                data.map((elem, index) => (
                    <Link to={"/clip/" + elem.id} key={index}>
                        <div className="item">
                            <img src={elem.high_thumbnail} alt={elem.title} />
                            <h2>{elem.title}</h2>
                            <p className="channel">
                                Channel: <strong>{elem.channel_title}</strong>
                            </p>
                            <p className="date">
                                Date: <strong>{elem.published_at}</strong>
                            </p>
                        </div>
                    </Link>
                ))}
        </Wrapper>
    );
};

export default ClipsList;
