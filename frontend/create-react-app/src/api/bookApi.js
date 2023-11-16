import axios from 'axios';

export const getBookById = async (id) => {
    const apiUrl = `/api/books/${id}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }    
};

export const getAllBooks = async () => {
    const apiUrl = `/api/books/`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }    
};


export const searchBooks = async (query) => {
    const apiUrl = `/api/search/?query=${query}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }    
};
