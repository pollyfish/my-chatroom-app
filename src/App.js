import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
//import User from './components/User.js';


var config = {
  apiKey: "AIzaSyBIK-w8dhRPG8Wg5w9AIUZYGzwEq5npWAo",
  authDomain: "bloc-chat-pef.firebaseapp.com",
  databaseURL: "https://bloc-chat-pef.firebaseio.com",
  projectId: "bloc-chat-pef",
  storageBucket: "bloc-chat-pef.appspot.com",
  messagingSenderId: "1036724031834"
};
firebase.initializeApp(config);



class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      activeRoom:"",
      user:""
    };
  }

setActiveRoom(room) {
    this.setState({activeRoom: room });

  }

//<User firebase={firebase} setUser={this.setUser} user={this.state.user}/>

  render() {
    return (

      <div className=
      "App">
      <h1>Welcome!</h1>

      <RoomList firebase={firebase}
      selectedRoom={this.state.activeRoom}
      setActiveRoom={(room)=> this.setActiveRoom(room)}/>
      <h2>Messages</h2>
      <MessageList firebase={firebase}
      selectedRoom={this.state.activeRoom}user={this.state.user}/>


      </div>

    );
  }
}

export default App;
