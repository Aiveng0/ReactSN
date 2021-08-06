import React from 'react';
import { addPostActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = (text) => {
        props.store.dispatch(addPostActionCreator(text));
    }

    return (<MyPosts
        addPost={addPost}
        posts={state.profilePage.posts}
    />)
}

export default MyPostsContainer;