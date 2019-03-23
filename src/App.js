import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
//<script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBIK-w8dhRPG8Wg5w9AIUZYGzwEq5npWAo",
    authDomain: "bloc-chat-pef.firebaseapp.com",
    databaseURL: "https://bloc-chat-pef.firebaseio.com",
    projectId: "bloc-chat-pef",
    storageBucket: "bloc-chat-pef.appspot.com",
    messagingSenderId: "1036724031834"
  };
firebase.initializeApp(config);
  //firebase.initializeApp(config);
  //this.database = firebase.database().ref().child('bloc-chat-pef');


class App extends Component {
constructor(props) {
  super(props);

  this.state= {
    activeRoom:""
  };
}

setActiveRoom(room) {
  this.setState({activeRoom: room });

}



  render() {
    return (
 //[pass set activeroom as a property to roomlist]
     //[pass active room state var to message list]
       <div className=
       "App">
       <h1>Welcome!</h1>

       <RoomList firebase={firebase}
       //selectedRoom={this.state.activeRoom}
       setActiveRoom={(room)=> this.setActiveRoom(room)}/>
    <h2>Messages</h2>
       <MessageList firebase={firebase}
       selectedRoom={this.state.activeRoom}/>

     </div>

    );
  }
}

export default App;
