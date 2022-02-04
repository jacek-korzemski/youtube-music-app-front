import { api_url } from "Config";

export async function getSingleChannelData(id) {
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

export function getAllChannels() {
    return fetch(api_url + "/getAllChannels", { method: "GET" })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
}

export function getSingleClip(id) {
    return fetch(api_url + "/getVideoById/" + id, { method: "GET" })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
}

export function getNewVideos() {
    return fetch(api_url + "/getNewVideos", { method: "GET" })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            console.log(err);
        });
}
