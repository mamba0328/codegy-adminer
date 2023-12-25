import axios                        from "axios";
import {
    POSTS,
    VERIFY_JWT,
}                                   from "./routesApi";

const authToken = localStorage.getItem('token');

const axiosInstance = axios.create({
    headers: {
        common: {
            Authorization: `Bearer ${authToken}`
        }
    }
});

const { get, post, put, delete: del, } = axiosInstance;
export const getAllPosts = () => {
    return get(POSTS);
}

export const verifyToken = () => {
    return get(VERIFY_JWT);
}