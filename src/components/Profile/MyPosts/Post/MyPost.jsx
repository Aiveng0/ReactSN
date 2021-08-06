import { NavLink } from 'react-router-dom';
import s from './MyPost.module.css';

const Post = (props) => {
    return (
        // <NavLink to='/profile' className={s.post}>
        // </NavLink>
        <div className={s.post}>
            <div className={s.post_header}>
                <div className={s.avatar}>
                    <img src='https://sun6-22.userapi.com/s/v1/ig2/Yb50voMjhO5vzpa93mG-os7rkr343zc81lfKVZ-RAt1ddzBhkjvLd_B_Rqn21Qjjj18O4kbSiDItKpgFrlN03HQB.jpg?size=50x0&quality=96&crop=0,116,640,640&ava=1' alt="avatar" />
                </div>
                <div className={s.post_name}>
                    <div className={s.author}>Ваня Царик</div>
                    <div className={s.date}>17 лип о 2:19</div>
                </div>
            </div>
            <div className={s.post_body}>
                <p className={s.text}>{props.text}</p>
                {/* <img src={props.img} alt='' /> */}
            </div>
            <div className={s.like_body}>
                <div className={s.like_cont}>
                    <div className={s.like_btns}>
                        <div className={s.like_btn}>
                            <div className={s.like_btn_img}></div>
                            <div className={s.like_count}>{props.likesCount}</div>
                        </div>
                        <div className={s.like_btn + ' ' + s.comment}>
                            <div className={s.comment_btn_img}></div>
                            <div className={s.like_count}>0</div>
                        </div>
                    </div>
                    {/* <div className={s.like_views + ' ' + s.like_count}>31</div> */}
                </div>
            </div>
        </div>
    )
}

export default Post;