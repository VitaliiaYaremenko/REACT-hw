import React, { useEffect, useState } from 'react';
import PostList from './PostList';

const PostCatalog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="posts">
            <PostList posts={posts} />
        </div>
    );
};

export default PostCatalog;
