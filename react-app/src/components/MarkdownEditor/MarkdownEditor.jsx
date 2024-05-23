import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editorInstance = new Editor({
            el: editorRef.current,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: '500px',
            events: {
                change: () => {
                    const markdown = editorInstance.getMarkdown();
                    onContentChange(markdown);
                },
            },
        });

        return () => {
            editorInstance.destroy();
        };
    }, [onContentChange]);

    return <div ref={editorRef}></div>;
};

export default MarkdownEditor;
