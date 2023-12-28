import React, { useEffect, useState,}   from 'react';
import { useParams }                    from "react-router-dom";
import parse                            from 'html-react-parser';
import * as DOMPurify                   from 'dompurify';

import { getSinglePost }                from "../../services/RequestService/RequestsService";

import { Post }                         from "../../types/types";

function Post() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPost] = useState({} as Post);

    const {postId} = useParams();
    const { body, tags, title, author_id, created_at } = post;
    const sanitizedHTML = DOMPurify.sanitize(body); //to prevent XSS attacks
    const getSetPost = async () => {
        try{
            const response = await getSinglePost(postId!);
            setPost(response.data);
        } catch (error){
            console.log(error)
        } finally {
            setIsLoaded(true);
        }

    }

    useEffect(() => {
        getSetPost();
    }, [postId])

    if(!isLoaded){
        return <p>Loading...</p>
    }
    return (
        <section>
            <article>
                <h2 className={'font-bold text-2xl text-center mb-5 underline'}>{title}</h2>
                <div className={'shadow p-5 rounded-xl'}>
                    {parse(sanitizedHTML)}
                </div>
            </article>
        </section>
    );
}

export default Post;