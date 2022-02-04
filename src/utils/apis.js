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
