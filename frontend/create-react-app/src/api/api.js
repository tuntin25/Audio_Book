import axios from "axios";

export const getBookById = async (id) => {
    const apiUrl = `/api/books/${id}`;

    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }    
};