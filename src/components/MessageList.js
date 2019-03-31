import React, { Component } from 'react';
class MessageList extends Component {
  constructor(props){
    super(props);

    this.messageRef = this.props.firebase.database().ref('message');
    this.sessionRef=this.props.firebase.database.ServerValue.TIMESTAMP;
    //const aaa=
this.state= {
  message: [],
  sentAt:"",
  newMessage: ""
  //activeRoom:""
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



createMessage() {
  this.messageRef.push({
    content:this.state.newMessage,
    sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
    roomId: this.props.selectedRoom.key,
    username: this.props.username
});
}
handleNewMessageClick(e) {
  e.preventDefault();
  if (!this.state.newMessage) {
    return;
  }
this.createMessage(this.state.newMessage);
this.setState({newMessage: ""});
  }
  handleChange(e) {
    const newName= e.target.value;
    this.setState({ newMessage:newName});
  }
  render() {

    return (

        <div>
    <section className="message">

<h3>{(this.props.selectedRoom.name)}</h3>
<span>
     {this.state.message.filter(roomessage  =>
       this.props.selectedRoom.key === roomessage.roomId).map((roomessage,index) =>  <li key={index}>{roomessage.content + ' From ' + roomessage.username + ' Time: ' + new Date(roomessage.sentAt).toString()}</li>
     )}

</span>
<p>
Create new Messages
<form id="message" onSubmit={ (e) =>
this.handleNewMessageClick(e)} >
<input type="textarea" placeholder="put message Here" id="message" value={this.state.newMessage}
onChange={ (e)=> this.handleChange(e)} />
<input type="submit"name="submit"value="Send"/></form>



</p>






</section>
</div>
);
}
}


export default MessageList;
