import React from 'react';
import BundledEditor from '../../components/BundleEditor';

export default function CreateUpdatePostContent(props) {
    const {onTitleChange, onEditorChange, title, initialEditorValue} = props;
    return (
        <fieldset className={'flex flex-col gap-5'}>

            <div className={'flex flex-col gap-3'}>
                <label htmlFor={'title'}>
                    Post title
                </label>
                <input
                    className={'w-full max-w-[400px] border rounded-md p-2'}
                    type={'text'}
                    id={'title'}
                    placeholder={'Enter your post\'s title'}
                    onChange={onTitleChange}
                    value={title}
                />
            </div>

            <div className={'flex flex-col gap-3'}>
                <label htmlFor={'content'}>
                    Post content
                </label>
                <BundledEditor
                    initialValue={initialEditorValue ?? '<p>I\'m gonna be the very best...</p>'}
                    id={'content'}
                    init={{
                        setup : function(ed){
                            ed.on('NodeChange', function(e){
                                onEditorChange(ed.getContent());
                            });
                        },
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

        </fieldset>
    );
}