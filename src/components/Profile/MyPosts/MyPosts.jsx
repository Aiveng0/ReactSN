import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MyPosts.module.css';
import Post from './Post/MyPost';

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post
            text={p.text}
            likesCount={p.likesCount}
            img={p.img}
        />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        let text = newPostElement.current.value;
        if (!text) {
            return;
        } else {
            props.addPost(text);
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={s.posts__page}>
            <h3 ></h3>
            <div className={s.new_post}>
                <NavLink to='/profile'>
                    <div className={s.avatar}>
                        <img src='https://sun6-22.userapi.com/s/v1/ig2/Yb50voMjhO5vzpa93mG-os7rkr343zc81lfKVZ-RAt1ddzBhkjvLd_B_Rqn21Qjjj18O4kbSiDItKpgFrlN03HQB.jpg?size=50x0&quality=96&crop=0,116,640,640&ava=1' alt="avatar" />
                    </div>
                </NavLink>
                <div className={s.new_post_text}>
                    {/* <input ref={newPostElement} placeholder='Що у вас нового?' /> */}
                    <textarea ref={newPostElement} placeholder='Що у вас нового?' rows='1' />
                </div>
                <div>
                    <button onClick={onAddPost} className={s.add_btn}>Add post</button>
                </div>
            </div>

            <h3></h3>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;