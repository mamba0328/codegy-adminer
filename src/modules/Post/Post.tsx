import React, {
    useEffect,
    useState,
    useMemo, SyntheticEvent, RefObject,
} from 'react';
import { useParams, useNavigate }       from "react-router-dom";
import parse                            from 'html-react-parser';
import * as DOMPurify                   from 'dompurify';

import {
    getSinglePost,
    editPost,
    deletePost, createPost,
} from "../../services/RequestService/RequestsService";
import {Post, PostPayload} from "../../types/types";
import { POST_STATUS }                  from "../../consts/post-consts";
import CreateUpdatePostContent from "../../components/CreateUpdatePostContent/CreateUpdatePostContent";
import TagsSelect from "../../components/TagsSelect/TagsSelect";

const trashcanImg  = require('../../assets/imgs/trashcan.svg') as string;
const penImg  = require('../../assets/imgs/pen.svg') as string;

type DeleteFunction = (index: number) => void;
type SubmitFunction = (e: SyntheticEvent) => void;

function Post() {
    //TODO: backIcon from edit mode;
    //TODO: comments
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPost] = useState({} as Post);

    const navigate = useNavigate();
    const {postId} = useParams();

    const { body, tags, title, author_id, created_at } = post;
    const authorName = post?.author_id?.username;
    const sanitizedHTML = DOMPurify.sanitize(body); //to prevent XSS attacks
    const statusName:string = POST_STATUS[`${post.status}` as keyof object];

    //EditMode values
    const [isEditMode, setIsEditMode] = useState(false);
    const [editTags, setEditTags] = useState(['']);
    const [editBody, setEditBody] = useState('');
    const [editTitle, setEditTitle] = useState('');


    useEffect(() => {
        getSetPost();

    }, [postId])


    const getSetPost = async () => {
        try{
            const response = await getSinglePost(postId!);
            await setPost(response.data);
            await setEditValues(response.data);
        } catch (error){
            console.log(error)
        } finally {
            setIsLoaded(true);
        }
    }

    const setEditValues = (post:Post) => {
        setEditTags(post.tags)
        setEditBody(post.body)
        setEditTitle(post.title)
    }

    const deleteTag:DeleteFunction = (index) => {
        console.log(index)
        // @ts-ignore
        setEditTags(editTags.toSpliced(index, 1));
    };

    const addTag = (inputRef:RefObject<any>):void  => {
        const input:HTMLInputElement = inputRef.current!;
        const value:string = input.value;
        const valueIsEmpty:boolean = !value.trim();

        if(valueIsEmpty){
            return
        }

        setEditTags([...editTags, value])
        input.value = '';
    }

    const deleteCurrentPost = async () => {
        try {
            if(!confirm('Are you sure?')){
                throw Error('Delete aborted')
            }
            await deletePost(postId!);
            navigate('/');
        } catch (error){
            console.log(error)
        }
    }

    const toggleStatus = async () => {
        try {
            if(!confirm('Are you sure?')){
                throw Error('Delete aborted')
            }

            const payload = {status: post.status === 1 ? 2 : 1,}
            const response = await editPost(postId!, payload);
            setPost(response.data);
        } catch (error){
            console.log(error)
        }
    }

    const handleSubmit:SubmitFunction = async (e) => {
        try{
            setIsLoaded(false);
            e.preventDefault();

            const post:PostPayload = {
                title: editTitle,
                body: editBody,
                tags: editTags
            }
            const response = await editPost(postId!, post);

            setPost(response.data);
            setIsEditMode(false);
        } catch (error){
            console.log(error);
        } finally {
            setIsLoaded(true)
        }
    }

    if(!isLoaded){
        return <p>Loading...</p>
    }

    if(isEditMode){
        return(
            <form className={'shadow p-5 rounded-xl'}>
                <CreateUpdatePostContent
                    onTitleChange={(e:SyntheticEvent) => setEditTitle((e.target as HTMLButtonElement).value )}
                    onEditorChange={(value:string) => setEditBody(value)}
                    initialEditorValue={post.body}
                    title={editTitle}
                />
                <TagsSelect
                    deleteTag={deleteTag}
                    addTag={addTag}
                    tags={editTags}
                />

                <button type={'submit'} onClick={handleSubmit} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Edit post</button>
            </form>
        )
    }

    return (
        <section>
            <article className={'post'}>
                <div className={'flex justify-between'}>
                    <div>
                        <button onClick={toggleStatus}>
                            <span className={'capitalize inline-block pr-2'}>{statusName}</span>
                            <span className={`inline-block w-3 h-3 rounded-full ${post.status === 1 ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                        </button>
                    </div>

                    <div className={'flex gap-5'}>
                        <button className={'cursor-pointer'} onClick={() => setIsEditMode(true)}><img src={penImg} className={'w-5 hover:rotate-45 transition-transform'}/></button>
                        <button className={'cursor-pointer'} onClick={deleteCurrentPost}><img src={trashcanImg} className={'w-5'}/></button>
                    </div>
                </div>

                <div className={'relative mb-5'}>
                    <h2 after-dynamic-value={`by ${authorName}`}  className={`font-bold text-2xl text-center mb-1 underline after:content-[attr(after-dynamic-value)] after:text-sm after:inline-block after:no-underline after:absolute after:-bottom-5 after:italic after:right-1/2  after:translate-x-1/2 after:transform`}>
                        {title}
                    </h2>
                </div>
                <div className={'flex w-full gap-2 flex-wrap mb-5 text-center pt-2'}>
                    <span className={'font-bold text-sm text-center w-full text-amber-500'}>{`[${tags.join(', ')}]`}</span>
                </div>
                <div className={'shadow p-5 rounded-xl mb-5'}>
                    {parse(sanitizedHTML)}
                </div>
            </article>
        </section>
    );
}

export default Post;