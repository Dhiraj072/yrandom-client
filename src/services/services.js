import axios from 'axios';

export function getRandomVideo() {
    console.log("Original!");
    return axios.get('http://yrandom.ap-southeast-1.elasticbeanstalk.com/yrandom/video/random')
    .then((resp) => {
        return resp;
    })
    .catch((error) => {
        return Promise.reject(error);
    })
}