import axios from 'axios';

const callHelloCammis = (helloCammisURL) => {
    return axios.get('/api/v2/hello/new_person')
}

export default callHelloCammis;