import React, {useState, useEffect, ReactElement} from 'react';
import { getAllPosts }                            from '../../services/RequestService/RequestsService';

type post = {
    _id: string,
    body: string,
    title:string,
    status:number,
}
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


function renderPosts(posts:Array<post>):Array<ReactElement> {
    return posts.map(item => {
        const {_id, body, title, status} = item;
        return (
            <article className={'w-full max-w-[600px] p-3 mb-5 flex flex-col gap-2 rounded-md shadow-2xl cursor-pointer  hover:shadow-inner hover:shadow-indigo-200 transition-shadow'} onClick={() => _id}>
                <div className={'flex justify-between align-middle'}>
                    <h3 className={'text-xl'}>{title}</h3>
                    <span className={`inline-block w-3 h-3 rounded-full ${status === 1 ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                </div>
                <p className={'line-clamp-3'}>{body}</p>
            </article>
        )
    }).reverse()
}
export default Home;