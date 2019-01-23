import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ChatBox.css';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');


document.addEventListener("DOMContentLoaded", function() { 
    let socket = openSocket.connect();
    let chat = document.getElementById('chat')

    document.getElementById('form_button').addEventListener('submit', function(e){
        e.preventDefault();
        console.log("Submitted");
        socket.emit('send message', message.value);
        message.value = '';
        return false;
    })
    let message = document.getElementById('message')
    
    // messageForm.submit(function(e){
    //     e.preventDefault();
    //     console.log("Submitted");
    //     socket.emit('send message', message.val());
    //     message.val('');
    //     return false;
    // })


});

socket.on('new message', function(data){
    console.log("inside chat append: ", data)
    chat.innerHTML = data;
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
                            <textarea className="form-control" id="message" placeholder="Message here"></textarea>
                            <br />
                            
                            <input type="submit" onClick={function(e){
                                let message = document.getElementById('message')
                                console.log(message.value)
        e.preventDefault();
        console.log("Submitted");
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