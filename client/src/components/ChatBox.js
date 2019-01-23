import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChatBox.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');


document.addEventListener("DOMContentLoaded", function() { 
    let socket = io.connect();
    let chat = document.getElementById('chat')

    if(e){
        document.getElementById('form_button').addEventListener('submit', function(e){
            e.preventDefault();
            console.log("Top Submitted");
            socket.emit('send message', message.value);
            message.value = '';
        });
    }
   

    let message = document.getElementById('message')

});


socket.on('new message', function(data){
    console.log("inside chat append: ", data);
    let node = document.createElement('LI');
    node.setAttribute("class", "chat-message");
    // let textNode = document.createElement(data);
    node.innerHTML = data;
    // node.appendChild(textNode);
    chat.appendChild(node);
})

const ChatBox = () => {
    
  return (
    <div className="chatbox-container">

        <div className="row">
            <div className="col-md-4">
                <div className="well">

                <h3>User Chat</h3>
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
                            
                            <input type="submit" onClick={function(e){
                                let message = document.getElementById('message')
                                console.log(message.value)
                                e.preventDefault();
                                console.log("Bottom Submitted");
                                socket.emit('send message', message.value);
                                message.value = '';
                            }} className="form_button" value="Send Message"></input>
                        
                        </div>
                    </form>
                
                </div>
            
            </div>

        </div>

    </div>

  )
}

export default ChatBox;