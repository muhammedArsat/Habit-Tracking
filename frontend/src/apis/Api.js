import axios from 'axios';

const API = axios.create({
    baseURL: 'https://habit-tracking-backend.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const addNewHabit = (name) => API.post('/habit', { name });

export const getAllHabit = () => API.get(`/habit`);

export const getHabitById = (id) => API.get(`habit/${id}`);

export const updateHabitById = (id, index, value) =>
    API.put(`habit/${id}/${index}?action=${value}`);
export const deleteById = (id) => API.delete(`habit/${id}`);
