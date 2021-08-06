import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
                <div className={s.dialog_body}>
                    <div className={s.avatar}>
                        <img src={props.avatar} alt="avatar" />
                    </div>
                    <div className={s.dialog_info}>
                        <div className={s.dialog_name}>
                            <span className={s.name}>{props.name}</span>
                            <span className={s.date}>{props.date}</span>
                        </div>
                        <div className={s.text_preview}>
                            <div>
                                <span className={s.who}>{props.previous_name + ':'}&nbsp;</span>
                                <span className={s.preview}>{props.previous_message}</span>
                            </div>
                            <div className={s.new_message_count}>{props.new_message_count}</div>

                        </div>


                    </div>
                </div>

            </NavLink>
        </div>
    )
}

export default DialogItem;