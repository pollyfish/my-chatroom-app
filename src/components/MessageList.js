import React, { Component } from 'react';
class MessageList extends Component {
  constructor(props){
    super(props);
    this.roomsRef = this.props.firebase.database().ref('rooms');

this.state= {
  messages: [],
  activeroom: false
};

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const message = snapshot.val();
    message.key=snapshot.key;
    this.setState({ messages: this.state.messages.concat( message )})
  });
}





  render() {

    return (

    );
  }
}



export default MessageList;
