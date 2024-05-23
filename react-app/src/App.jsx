import React, { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor';

const App = () => {
    const [content, setContent] = useState('');

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    return (
        <div>
            <h1>Markdown Editor</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <MarkdownEditor onContentChange={handleContentChange} />
                </div>
                <div style={{ flex: 1, marginLeft: '20px' }}>
                    <h2>Preview:</h2>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </div>
        </div>
    );
};

export default App;


