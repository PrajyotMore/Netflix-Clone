import axios from 'axios';

// the base url which will be static
const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})

export default instance;