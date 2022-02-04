import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Error as ErrorComponent } from "components/Error/Error";
import Page from "components/AppWrapper/Page";
import ClipsList from "components/ClipsList/ClipsList";
import Loading from "components/Loading/Loading";
import { getSingleChannelData } from "utils/apis";

const Channel = () => {
    const [loading, setLoading] = useState(true);
    const [chanelTitle, setChannelTitle] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        getSingleChannelData(id)
            .then((res) => {
                setData(res);
                setChannelTitle(res[0].channel_title);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
        // eslint-disable-next-line
    }, [id]);

    return (
        <Page title={chanelTitle}>{error ? <ErrorComponent code={404} /> : <>{loading ? <Loading /> : <ClipsList data={data} />}</>}</Page>
    );
};

export default Channel;
