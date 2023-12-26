import React, {MouseEventHandler, ReactElement, RefObject, useRef} from 'react';

type Props = {
    addTag: (inputRef:RefObject<any>) => void,
    tags: string[],
    deleteTag: (index:number) => void,
}


type DeleteFunction = (index: number) => void;
function TagsSelect({addTag, tags, deleteTag}:Props) {

    const tagsInputRef = useRef(null)
    return (
        <fieldset className={'pt-5 flex flex-col gap-2 '}>
            <div className={'flex w-full max-w-[400px] justify-between'}>
                <input
                    className={'w-full max-w-[290px] border rounded-md p-2'}
                    ref={tagsInputRef}
                    placeholder={'Write a tag, for example: TypeScript'}
                    type={'text'}
                />
                <button
                    className={'w-full max-w-[90px] border rounded-md p-2'}
                    type={"button"}
                    onClick={() => addTag(tagsInputRef)}
                >
                    Add a tag
                </button>
            </div>
            <div className={'flex w-full max-w-[400px] gap-2  flex-wrap'}>
                {renderTags(tags, deleteTag)}
            </div>
        </fieldset>
    );
}

function renderTags(tags:string[], deleteTag:DeleteFunction):ReactElement[]{
    return tags.map((tag, index )=> {
        return <button key={index} className={"border rounded-md p-2 pr-[40px] relative red-x hover:border-red-600"} type={"button"} onClick={() => deleteTag(index)}>{tag}</button>
    })
}

export default TagsSelect;

