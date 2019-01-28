import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChatBox.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://192.168.0.224:8000');

// my address 192.168.0.224

document.addEventListener("DOMContentLoaded", function() { 
    let chat = document.getElementById('chat')
    let message = document.getElementById('message')
});

socket.on('new message', function(data){
    let node = document.createElement('LI');
    node.setAttribute("class", "chat-message");
    node.innerHTML = data;
    chat.appendChild(node);
})

const ChatBox = () => {
    
  return (
    <div className="chatbox-container">

        <div className="row">
            <div className="col-md-4">
                <div className="well">

                <h3 id="user-chat">User Chat</h3>
                <ul className="list-group" id="users"> </ul>
                </div>

                <div className="col-md-8">
                    <div className="chat" id="chat"></div>

                    <form id="messageForm">
                        <div className="form-group">
                            <textarea className="form-control" id="message" placeholder="Message here" onKeyDown={function(e){
                                if (e.keyCode === 13 && e.shiftKey){
                                    e.preventDefault();
                                    e.target.value += "\n";
                                } else if (e.keyCode === 13) {
                                    let message = document.getElementById('message')
                                    e.preventDefault();
                                    message.value = message.value.replace(/\r?\n/g, '<br />');
                                    socket.emit('send message', message.value);
                                    message.value = '';

                                }
                            }}></textarea>
                            <br />
                        
                        </div>
                    </form>
                
                </div>
            
            </div>

        </div>

    </div>

  )
}

export default ChatBox;