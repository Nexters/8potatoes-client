import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

export const API = {
    get: async <T, D = unknown>(url: string, config?: AxiosRequestConfig) =>{
        const response = await axios.get<T, AxiosResponse<T, D>, D>(url, {
            ...config,
        });
        return response.data;
    },
    post: async <T, D>(url: string, data: D, config?: AxiosRequestConfig) => {
        const response = await axios.post<T, AxiosResponse<T, D>, D>(
            url,
            data,
            {
                ...config,
            },
        );
        return response.data;
    },
    patch: async <T, D>(url: string, data: D, config?: AxiosRequestConfig) => {
        const response = await axios.patch<T, AxiosResponse<T, D>, D>(
            url,
            data,
            {
                ...config,
            },
        );

        return response.data;
    },
    put: async <T, D>(url: string, data: D, config?: AxiosRequestConfig) => {
        const response = await axios.patch<T, AxiosResponse<T, D>, D>(
            url,
            data,
            {
                ...config,
            },
        );

        return response.data;
    },
    delete: async <T, D>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig,
    ) => {
        const response = await axios.delete<T, AxiosResponse<T, unknown>, unknown>(
            url,
            {
                ...config,
                data,
            },
        );
    
        return response.data;
    }
};
