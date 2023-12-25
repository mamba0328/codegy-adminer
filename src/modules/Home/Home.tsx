import React, { useState, useEffect, }      from 'react';
import { getAllPosts }                      from '../../services/RequestService/RequestsService';
function Home() {
    const [posts, setPosts] = useState(null);

    useEffect( ()=> {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            const response = await getAllPosts();

            return setPosts(response.data)
        } catch (error){
            console.log(error)
        }
    }

    return (
        <section>

        </section>
    );
}

export default Home;