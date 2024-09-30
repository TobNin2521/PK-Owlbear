import { Get } from "./Network";

const SearchApi = (value, cb) => {
    Get("https://api.open5e.com/v1/search/?text=" + encodeURIComponent(value), (res) => {
        cb(res.results);
    });
};

export {SearchApi};