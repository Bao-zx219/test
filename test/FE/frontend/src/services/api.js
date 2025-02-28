import axios from 'axios';

const API_URL = 'http://localhost:3000/items';

export const fetchItems = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addItem = async (newItem) => {
    const response = await axios.post(API_URL, newItem);
    return response.data;
};