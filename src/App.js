import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
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
  render() {
    return (

      <div>
       <h1>Welcome!</h1>
       <RoomList firebase={firebase} />
     </div>
      /*all this can be deleted- <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
  }
}

export default App;
