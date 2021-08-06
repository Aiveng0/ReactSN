import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message_item}>
            <div className={s.message_body}>
                <div className={s.avatar}>
                    <img src={props.avatar} alt="avatar" />
                </div>
                <div className={s.wrap}>
                    <div className={s.user_data}>
                        <span className={s.name}>{props.name}</span>
                        <span className={s.date}>{props.time}</span>
                    </div>
                    <div className={s.message}>{props.message}</div>
                </div>
            </div>
        </div>
    )
}


export default Message;