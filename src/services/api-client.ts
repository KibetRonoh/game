import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6760cc74f59646fd861ef7df8920be63' // This is a free api key you get from www.rawg.io
    },
});