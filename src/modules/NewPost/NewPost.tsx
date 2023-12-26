import React, {
    useState,
    useRef,
    ReactElement,
    SyntheticEvent,
    MouseEventHandler, useMemo, RefObject
}                               from 'react';

import CreateUpdatePostContent  from "../../components/CreateUpdatePostContent/CreateUpdatePostContent";
import TagsSelect               from "../../components/TagsSelect/TagsSelect";

type DeleteFunction = (index: number) => void;
function NewPost():ReactElement {
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

    return (
        <form>
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
        </form>
    );
}
export default NewPost;