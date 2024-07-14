import axios from 'axios';

export const API = {
    get: async <T>(url: string, params?: T) => {
        const response = await axios.get(url, { params });
        return response.data;
    },
};
