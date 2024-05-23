import React from 'react';

const PostItem = ({ post }) => {
    return (
        <li className="posts__single-post" data-post-id={post.id}>
            <h3 className="posts__post-title">{post.title}</h3>
            <p className="posts__post-description">{post.body}</p>
        </li>
    );
};

export default PostItem;
