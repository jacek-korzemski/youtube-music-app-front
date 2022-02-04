import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Page from "components/AppWrapper/Page";
import { Error as ErrorComponent } from "components/Error/Error";
import Player from "components/Player/Player";
import Loading from "components/Loading/Loading";
import { getSingleClip } from "utils/apis";

const Clip = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getSingleClip(id)
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
        <Page title={data ? data.title : "..."}>
            {error && <ErrorComponent code={404} />}
            {loading ? <Loading /> : <Player data={data} />}
        </Page>
    );
};

export default Clip;
