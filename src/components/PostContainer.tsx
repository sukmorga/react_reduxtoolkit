import React, { FC, useEffect, useState } from 'react';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer: FC = () => {
    const [limit, setLimit] = useState(10);
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit)
    // const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    //     pollingInterval: 1000
    // })

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3);
        // }, 2000)
    }, [])


    return (
        <div>
            <div className='post__list'>
                {/* <button onClick={() => refetch()}>REFETCH</button> */}
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Ошибка при загрузке</h1>}
                {posts && posts.map(post =>
                    <PostItem key={post.id} post={post} />
                )}
            </div>
        </div>
    )
}

export default PostContainer