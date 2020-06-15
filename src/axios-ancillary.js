import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ancillary-management.firebaseio.com/'
});

// instance.interceptors.request.use((request) => {
//     return request;
// }, err => {
//     Promise.reject(err);
// });

// instance.interceptors.response.use((resp) => {
//     return resp;
// }, err => {
//     Promise.reject(err);
// })

export default instance;