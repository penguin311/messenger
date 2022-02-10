import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const NewMessage = () => {
    const [newContent, setNewContent] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if (newContent.trim().length === 0) {
            return;
        }

        console.log(newContent);
        setNewContent('');
    };

    const typingCheckHandler = (event) => {
        const typingContent = event.target.value;

        setNewContent(typingContent);
    };

    const testHanlder = () => {
        const typingContentLength = newContent.trim().length;
        let isTyping;

        if (typingContentLength > 0) {
            isTyping = true;
        } else if (typingContentLength === 0) {
            isTyping = false;
        }
        console.log(isTyping);
        return isTyping;
    };

    useEffect(() => {
        testHanlder();
    }, [newContent]);

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="newMSG"></label>
            <UserInput
                id="newMSG"
                type="text"
                value={newContent}
                onChange={typingCheckHandler}
                placeholder="Enter message"
            />
            <SendButton type="submit" isTyping={testHanlder()}>
                보내기
            </SendButton>
        </form>
    );
};

const UserInput = styled.input`
    width: 80%;
    height: 50px;
`;

const SendButton = styled.button`
    weight: 36px;
    height: 36px;
    padding: 0;
    border: 0;
    border-radius: 2px;
    background-color: ${(props) => (props.isTyping ? '#478bff' : '#e6e6e8')};
    margin-right: 4px;
    cursor: pointer;
`;

export default NewMessage;
