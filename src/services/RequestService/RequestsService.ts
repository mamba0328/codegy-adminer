import axios                        from "axios";

import {
    POSTS,
    LOGIN,
    VERIFY_JWT,
    REFRESH_TOKEN,
    POSTS_COMMENTS
}                                   from "./routesApi";
import {
        PostPayload,
         EditPostPayload,
        }                           from "../../types/types";

type LoginPayload = {
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

export const getSinglePost = (id:string) => {
    return get(`${POSTS}/${id}`);
}

export const createPost = (payload:PostPayload) => {
    return post(POSTS, payload);
}

export const getAllComments = () => {
    return get(POSTS_COMMENTS);
}

export const getSinglePostsComments = (post_id:string) => {
    return get(`${POSTS_COMMENTS}/?post_id=${post_id}`);
}
export const editPost = (postId:string, editPostPayload:EditPostPayload) => {
    return put(`${POSTS}/${postId}`, editPostPayload);
}
export const deletePost = (postId:string) => {
    return del(`${POSTS}/${postId}`);
}

export const sendLogin = (obj: LoginPayload) => {
    return post(LOGIN, obj);
}
export const verifyToken = () => {
    return get(VERIFY_JWT);
}
export const refreshToken = () => {
    return get(REFRESH_TOKEN);
}