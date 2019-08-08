import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-8f0ad.firebaseio.com/'

});

export default instance;