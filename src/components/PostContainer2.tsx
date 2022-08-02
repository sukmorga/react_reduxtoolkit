import React, { FC } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer2: FC = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10)
    return (
        <div>
            <div className='post__list'>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Ошибка при загрузке</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post} />
                )}
            </div>
        </div>
    )
}

export default PostContainer2