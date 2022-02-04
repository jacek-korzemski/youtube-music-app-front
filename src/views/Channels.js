import { useState, useEffect } from "react";
import Page from "components/AppWrapper/Page";
import Loading from "components/Loading/Loading";
import ChannelsList from "components/ChannelsList/ChannelsList";
import { getAllChannels } from "utils/apis";

const Channels = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAllChannels()
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <Page title="Channels">
            {error ? <div style={{ color: "white" }}>Błąd...</div> : <>{loading ? <Loading /> : <ChannelsList data={data} />}</>}
        </Page>
    );
};

export default Channels;
