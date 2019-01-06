import axios from 'axios';

export function getRandomVideo() {
    return axios.get('https://yrandom-api-gateway.dappsr.com/yrandom/video/random')
    .then((resp) => {
        return resp;
    })
    .catch((error) => {
        return Promise.reject(error);
    })
}