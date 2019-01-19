import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ChatBox.css';

const ChatBox = () => {
  return (
    <div className="chatbox-container">
        <h3>Chatbox</h3>
        <scroll-container id="chatbox">
            {/* <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div>
            <div>boom baaam messages hey hi wsup</div> */}
        </scroll-container>

        <div className="input-row">
            <input id="message-field"></input>
            <button id="send-button">Send</button>
        </div>

    </div>
    
  )
}

export default ChatBox;