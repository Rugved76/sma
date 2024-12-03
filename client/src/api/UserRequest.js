import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

//  Sending the Token back to our backend for it to verify 

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})


export const getuser = (userId) => API.get(`/user/${userId}`);

export const updateuser = (id, formData) => API.put(`/user/${id}`, formData);

export const getalluser = () => API.get('/user');

export const followuser = (id, data) => API.put(`/user/${id}/follow`, data);

export const unfollowuser = (id, data) => API.put(`/user/${id}/unfollow`, data);