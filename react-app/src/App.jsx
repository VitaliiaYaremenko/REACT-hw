import React, { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor';

const App = () => {
    const [content, setContent] = useState('');

    const handleContentChange = (newContent) => {
        setContent(newContent);
    };

    return (
        <div>
            <MarkdownEditor onContentChange={handleContentChange} />
            <div>
                <h3>Editor Content:</h3>
                <pre>{content}</pre>
            </div>
        </div>
    );
};

export default App;

