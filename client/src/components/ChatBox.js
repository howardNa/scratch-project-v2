import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChatBox.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');


document.addEventListener("DOMContentLoaded", function() { 
    let socket = io.connect();
    let messageForm = document.getElementById('messageForm')
    let message = document.getElementById('message')
    let chat = document.getElementById('chat')

    messageForm.submit(function(e){
        e.preventDefault();
        console.log("Submitted");
        socket.emit('send message', message.val());
        message.val('');
    })

    socket.on('new message', function(data){
         chat.append(<div className='well'>+data.message+</div>)
    })

});

const ChatBox = () => {
  return (
    <div className="chatbox-container">

        <div className="row">
            <div className="col-md-4">
                <div className="well">

                <h3>Users</h3>
                <ul className="list-group" id="users"> </ul>
                </div>

                <div className="col-md-8">
                    <div className="chat" id="chat"></div>

                    <form id="messageForm">
                        <div className="form-group">

                            <label>Enter Message</label>
                            <textarea className="form-control" id="message"></textarea>
                            <br />
                            
                            <input type="submit" classname="btn btn-primary" value="Send Message"></input>
                        
                        </div>
                    </form>
                
                </div>
            
            </div>

        </div>

    </div>

  )
}

export default ChatBox;