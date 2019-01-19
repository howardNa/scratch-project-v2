import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ChatBox.css';

const ChatBox = () => {
  return (
    <div className="chatbox-container">
        <h3>Chatbox</h3>
        <scroll-container id="chatbox">
            <div className="user-message"><strong>Howard: </strong>yo where are you guys</div>
            <div className="user-message"><strong>Braden: </strong>im omw</div>
            <div className="user-message"><strong>Carolyn: </strong>wait i can't find parking</div>

        </scroll-container>

        <div className="input-row">
            <input id="message-field"></input>
            <button id="send-button">Send</button>
        </div>

    </div>
    
  )
}

export default ChatBox;