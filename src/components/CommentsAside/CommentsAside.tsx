import React, {
                useState,
                useEffect,
                ReactElement
              }                         from 'react';

import {
            getAllComments,
            getSinglePostsComments,
        }                               from '../../services/RequestService/RequestsService'
import { getFormattedDate }             from "../../helpers/dateHelpers";


import { Comment }                      from "../../types/types";

type Props = {
    postId: string,
}
function CommentsAside({postId, ...props} : Props) {
    const [ comments, setComments ] = useState([{}]);
    const [ isLoaded, setIsLoaded ] = useState(false);
    const getComments = postId ? () => getSinglePostsComments(postId) : getAllComments;

    useEffect(() => {
        try{
            getSetPosts();
        } catch (error){
            console.log(error)
        } finally {
            setIsLoaded(true)
        }
    }, [postId])

    const getSetPosts = async () => {
        const response = await getComments();
        setComments(response.data);
    }

    const renderComments = ():ReactElement => {
        if(!isLoaded){
            return <p>Loading...</p>
        }

        return (
            <ul className={'flex flex-col gap-5 min-desktop:max-h-[90vh] overflow-auto'}>
                {comments.map((item:Comment, index) => {
                    return (
                        <li className={'flex flex-col p-5 shadow rounded-xl '} key={index}>
                            <div className={'flex justify-start items-baseline min-desktop:flex-col'}>
                                <h4 className={'text-lg font-bold '}>{item.user_id?.username}</h4>
                                <span className={'inline-block text-sm'}>{getFormattedDate(item.created_at)}</span>
                            </div>
                            <p>{item.body}</p>
                        </li>
                    )
                })}
            </ul>
        )
    }


    return (
        <aside className={'mb-5 p-3 shadow rounded-xl w-full min-desktop:w-[350px] min-desktop:fixed min-desktop:right-10 min-desktop:top-8'}>
            <h4 className={'font-bold text-xl p-3 underline'}>Comments: </h4>
            {renderComments()}
        </aside>
    );
}
export default CommentsAside;