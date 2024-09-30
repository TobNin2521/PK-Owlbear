

const Get = (url, cb) => {
    fetch(url).then(res => res.json()).then(json => cb(json));
};

export {Get}