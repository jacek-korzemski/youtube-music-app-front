import { useState, useEffect } from "react";
import Loading from "components/Loading/Loading";
import ClipsList from "components/ClipsList/ClipsList";
import Page from "components/AppWrapper/Page";
import { getNewVideos } from "utils/apis";

const NewClips = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        getNewVideos()
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
    }, []);

    return (
        <Page title="New clips">
            {error ? <div style={{ color: "white" }}>Błąd...</div> : <>{loading ? <Loading /> : <ClipsList data={data || undefined} />}</>}
        </Page>
    );
};

export default NewClips;
