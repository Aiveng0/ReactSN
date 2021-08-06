import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import ChatInputContainer from './Message/ChatInput/ChatInputContainer';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs
        .map(d => <DialogItem
            id={d.id}
            name={d.name}
            date={d.date}
            avatar={d.avatar}
            previous_name={d.previous_name}
            previous_message={d.previous_message}
            new_message_count={d.new_message_count}
        />)

    let messagesElements = state.messages
        .map(m => <Message
            name={m.name}
            message={m.message}
            time={m.time}
            avatar={m.avatar}
        />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <ChatInputContainer
                    store={props.store}
                />
            </div>
        </div>
    )
}

export default Dialogs;