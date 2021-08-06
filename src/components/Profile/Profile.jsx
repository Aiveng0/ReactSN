import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    let state = props.store.getState().profilePage;
    let usersElements = state.users
        .map(p => <ProfileInfo
            username={p.username}
            status={p.status}
            birthday={p.birthday}
            city={p.city}
            avatar={p.avatar}
        />)

    return (
        <div className={s.page}>
            {usersElements}
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;