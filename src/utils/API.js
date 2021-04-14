//axios to make http request too randomuser api
import axios from 'axios';

export default {
    viewEmployee: function () {
        return axios.get('https://randomuser.me/api/?results=40&nat=gb');
    }
};