import React, { useRef } from 'react';
import BundledEditor from '../../components/BundleEditor';

export default function NewPost() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <section className={'flex flex-col gap-5'}>

            <div className={'flex flex-col gap-3'}>
                <label htmlFor={'title'}>
                    Post title
                </label>
                <input
                    className={'w-full max-w-[400px] border rounded-md p-2'}
                    type={'text'}
                    id={'title'}
                    placeholder={'Enter your post\'s title'}
                />
            </div>

            <div className={'flex flex-col gap-3'}>
                <label htmlFor={'content'}>
                    Post content
                </label>
                <BundledEditor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue='<h3 style="text-align: center;">Sub heading</h3>'
                    id={'content'}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist',
                            'anchor',
                            'autolink',
                            // 'help', // causes error because plugin is 404
                            'image',
                            'link',
                            'lists',
                            'searchreplace',
                            'table',
                            'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' + ' image',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </div>

            <div className={'flex flex-col gap-3'}>
                <button onClick={log}>Log editor content</button>
            </div>
        </section>
    );
}