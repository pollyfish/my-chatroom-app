import React, { Component } from 'react';
class MessageList extends Component {
  constructor(props){
    super(props);
    this.messageRef = this.props.firebase.database().ref('message');

    this.state= {
      message: [],
      roomId: "",
      username: "",
      content: "",
      sentAt: ""
  

    };
  }


componentDidMount() {
  this.messageRef.on('child_added', snapshot => {
    const roomessage = snapshot.val();
    roomessage.key=snapshot.key;
    this.setState({ message:
      this.state.message.concat( roomessage )})
    });
  }

  render() {

    return (

      <div>
      <section className="message">

      <h3>{(this.props.selectedRoom.name)}</h3>
      <h3>{(this.props.selectedRoom.key)}</h3>
      <h3>{(this.props.selectedRoom.content)}</h3>



      </section>
      </div>
    );
  }
}


export default MessageList;
