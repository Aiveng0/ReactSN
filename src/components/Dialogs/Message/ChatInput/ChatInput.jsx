import React from 'react';
import s from './ChatInput.module.css';

const ChatInput = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        if (!text) {
            return;
        } else {
            props.addMessage(text);
            newMessageElement.current.value = '';
        }
    }

    return (
        <div className={s.body}>
            <div className={s.item_more_wrap}>
                <a href="" className={s.item_more}>
                    <span></span>
                </a>
            </div>
            <div className={s.chat_input_wrap}>
                <textarea ref={newMessageElement} className={s.chat_input} rows="1" placeholder='Напишіть повідомлення' />
            </div>
            <div className={s.send_btn_wrap}>
                <a onClick={addMessage} href="#" className={s.send_btn}>
                    <span></span>
                </a>
            </div>
        </div>
    )
}


export default ChatInput;