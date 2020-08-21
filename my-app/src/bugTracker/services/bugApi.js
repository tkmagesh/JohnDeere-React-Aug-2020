import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/bugs';

const bugApi = {
    getAll(){
        return axios.get(serviceEndPoint)
            .then(response => response.data)
    }
}

export default bugApi;