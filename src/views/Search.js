import { useEffect, useState } from "react";
import Loading from "components/Loading/Loading";
import ClipsList from "components/ClipsList/ClipsList";
import Page from "components/AppWrapper/Page";
import Search from "components/Inputs/Search";
import { getSearchedData } from "utils/apis";

const NewClips = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(sessionStorage.getItem("last-search" || ""));
    const [data, setData] = useState(false);
    const [error, setError] = useState(false);

    const submitSearchHandler = () => {
        setLoading(true);
        sessionStorage.setItem("last-search", search);
        getSearchedData(search)
            .then((res) => {
                setData(res);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                console.log(err);
            });
    };

    useEffect(() => {
        if (search && search !== "") {
            submitSearchHandler();
        }
    }, []);

    return (
        <Page title="Search">
            <Search
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                label={"What you are looking for?"}
                onSubmit={submitSearchHandler}
            />
            {loading && <Loading />}
            {data && !loading && <ClipsList data={data} />}
            {error && <Error />}
        </Page>
    );
};

export default NewClips;
