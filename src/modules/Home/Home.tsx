import React, {useState, useEffect, ReactElement} from 'react';
import { Link }                                   from "react-router-dom";

import { getAllPosts }                            from '../../services/RequestService/RequestsService';
import { Post }                                   from "../../types/types";

function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect( ()=> {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            const response = await getAllPosts();

            return setPosts(response.data)
        } catch (error){
            console.log(error)
        } finally {
            setIsLoaded(true)
        }
    }


    return !isLoaded ? <p>Loading...</p> : (
        <section>
            {renderPosts(posts)}
        </section>
    );
}


function renderPosts(posts:Array<Post>):Array<ReactElement> {
    return posts.map(item => {
        const {_id, body, title, status, author_id, created_at} = item;
        const htmlTextLimited = body.slice(0, 300);
        const textFromHtml = removeHTMLTags(htmlTextLimited);
        return (
            <Link to={`/post/${_id}`}  key={_id} >
                <article className={'w-full max-w-[600px] p-3 mb-5 flex flex-col gap-2 rounded-md shadow cursor-pointer  hover:shadow-md hover:shadow-indigo-200 transition-shadow'} onClick={() => _id} key={_id}>
                    <div className={'flex justify-between align-middle'}>
                        <h3 className={'text-xl'}>{title}</h3>
                        <span className={`inline-block w-3 h-3 rounded-full ${status === 1 ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                    </div>
                    <p className={'italic text-blue-600'}>{`by: ${author_id.username}`}</p>
                    <p className={'line-clamp-3'}>{textFromHtml}</p>
                    <p className={'text-right font-mono text-xs'}>{getFormattedDate(created_at)}</p>
                </article>
            </Link>
        )
    }).reverse()
}

function removeHTMLTags(html:string):string{
    const regX = /(<([^>]+)>|&[a-zA-Z0-9]+;)/ig;
    return html.replace(regX, "");
}
function getFormattedDate(created_at:string):string{
    const date = new Date(created_at);
    return [date.getMonth()+1, date.getDate(), date.getFullYear()].join('.') + ' '+ [date.getHours(), date.getMinutes(),].join(':');
}
export default Home;