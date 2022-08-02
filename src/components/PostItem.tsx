import React, { FC } from 'react'
import { IPost } from '../models/IPosr'


interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
    return (
        <div className='post'>
            {post.id}. {post.title}
            {post.body}
            <button>Delete</button>
        </div>
    )
}

export default PostItem