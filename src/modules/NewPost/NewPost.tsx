import React, {
    useState,
    ReactElement,
    SyntheticEvent,
    RefObject
}                               from 'react';

import CreateUpdatePostContent  from "../../components/CreateUpdatePostContent/CreateUpdatePostContent";
import TagsSelect               from "../../components/TagsSelect/TagsSelect";

import { createPost }           from "../../services/RequestService/RequestsService";

type Post = {
    title: string,
    body: string,
    tags: string[],
}

type DeleteFunction = (index: number) => void;
type SubmitFunction = (e: SyntheticEvent) => void;
function NewPost():ReactElement {
    const [isLoaded, setIsLoaded] = useState(true);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState(['JS', 'HTML', ]);

    const deleteTag:DeleteFunction = (index) => {
        // @ts-ignore
        console.log(tags.toSpliced(index, 1))
        // @ts-ignore
        setTags(tags.toSpliced(index, 1));
    };

    const addTag = (inputRef:RefObject<any>):void  => {
        const input:HTMLInputElement = inputRef.current!;
        const value:string = input.value;
        const valueIsEmpty:boolean = !value.trim();

        if(valueIsEmpty){
            return
        }

        setTags([...tags, value])
        input.value = '';
    }

    const resetForm = () => {
        setTitle('');
        setBody('');
        setTags(['JS', 'HTML', ]);
    }

    const handleSubmit:SubmitFunction = async (e) => {
        try{
            setIsLoaded(false);
            e.preventDefault();

            const post:Post = {
                title,
                body,
                tags
            }
            await createPost(post);
            resetForm();
        } catch (error){
            console.log(error);
        } finally {
            setIsLoaded(true)
        }
    }

    if(!isLoaded){
        return <p>...Loading</p>
    }

    return (
        <form className={'shadow p-5 rounded-xl'}>
            <CreateUpdatePostContent
                onTitleChange={(e:SyntheticEvent) => setTitle((e.target as HTMLButtonElement).value )}
                onEditorChange={(value:string) => setBody(value)}
                title={title}
            />
            <TagsSelect
                deleteTag={deleteTag}
                addTag={addTag}
                tags={tags}
            />

            <button type={'submit'} onClick={handleSubmit} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Create new post</button>
        </form>
    );
}
export default NewPost;