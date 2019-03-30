import React from 'react';
import ReactQuill from 'react-quill';

export const Quill = ({ body, setBody }) => {
	const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean'],
          ['code']
        ]
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'code'
    ];

	return (
		<ReactQuill 
			value={body}
			onChange={(body) => {
			    setBody(body);
            }}
            style={{
                backgroundColor: '#fff'
            }}
			modules={modules}
			formats={formats}
			preserveWhitespace={true}
			placeholder="What's on your mind?"
    	/>
	)
}

export { Quill as default };