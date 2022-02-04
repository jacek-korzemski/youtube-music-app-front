import { api_url } from "Config";

export function getSingleChannelData(id) {
    return fetch(api_url + "/getChannelById/" + id, { method: "GET" })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
}

export function getSearchedData(s) {
    return fetch(api_url + "/search/" + s, { method: "GET" })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
}
