import axios                        from "axios";
import {
    POSTS,
    LOGIN,
    VERIFY_JWT,
    REFRESH_TOKEN,
}                                   from "./routesApi";

type loginPayload = {
    username: string;
    password: string;
    is_author: boolean;
};

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = localStorage.getItem('token');
        if (authToken) {
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

const { get, post, put, delete: del, } = axiosInstance;
export const getAllPosts = () => {
    return get(POSTS);
}

export const sendLogin = (obj: loginPayload) => {
    return post(LOGIN, obj);
}
export const verifyToken = () => {
    return get(VERIFY_JWT);
}
export const refreshToken = () => {
    return get(REFRESH_TOKEN);
}