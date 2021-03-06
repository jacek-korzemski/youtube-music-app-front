import React from "react";
import { Link } from "react-router-dom";
import { ChannelWrapper } from "./Wrappers";
import { channelImage } from "./helpers";

const Channel = ({ data }) => {
    return (
        <ChannelWrapper>
            <Link to={"/channel/" + data.id}>
                <div className="image-wrapper">
                    <img src={channelImage(data.id)} alt={data.channel_title} />
                </div>
                <div className="title-wrapper">{data.channel_title}</div>
            </Link>
        </ChannelWrapper>
    );
};

export default Channel;
