import React from 'react';
import { addMessageActionCreator } from '../../../redux/dialogs-reducer';
import ChatInput from './ChatInput';

const ChatInputContainer = (props) => {

    let onAddMessage = (text) => {
        props.store.dispatch(addMessageActionCreator(text));
    }

    return <ChatInput addMessage={onAddMessage} />
}


export default ChatInputContainer;