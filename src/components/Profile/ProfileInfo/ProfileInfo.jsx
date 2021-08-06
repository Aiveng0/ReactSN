import { NavLink } from 'react-router-dom';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.page}>
            <div className={s.page_photo}>
                <div className={s.avatar_img}>
                    <img src={props.avatar} alt={props.username} />
                </div>
                <div className={s.profile_actions}>
                    <div className={s.profile_act_btn}>
                        <a id={s.profile_edit} className={s.btn} href="edit">Edit profile</a>
                    </div>
                    <div className={s.profile_act_btn}>
                    <NavLink to={'/dialogs/'} activeClassName={s.active}>
                        <a id={s.profile_message_send} className={s.btn}>Message</a>
                    </NavLink>
                    </div>
                </div>
            </div>
            <div className={s.page_block}>
                <div className={s.page_info_wrap}>
                    <div className={s.page_top}>
                        <div className={s.page_name}>
                            <h1 className={s.username}>{props.username}</h1>
                            <div className={s.profile_online}>online</div>
                        </div>
                        <div className={s.user_status}>{props.status}</div>
                    </div>
                    <div className={s.short_info}>
                        <div className={s.info_row}>
                            <div className={s.info_name}>День народження</div>
                            <div className={s.info_value}>{props.birthday}</div>
                        </div>
                        <div className={s.info_row}>
                            <div className={s.info_name}>Місто:</div>
                            <div className={s.info_value}>{props.city}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;