import React, { Component } from 'react';
class MessageList extends Component {
  constructor(props){
    super(props);



    this.messageRef = this.props.firebase.database().ref('message');
    this.sessionRef=this.props.firebase.database.ServerValue.TIMESTAMP;
    //const aaa=
this.state= {
  message: [],
  sentAt:""
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

getTime() {
  this.sessionRef.on('child_added', snapshot => {
    const timestamp = Date.now();
    console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
  });
}

 // This would be the timestamp you want to format




  render() {

    return (

        <div>
    <section className="message">

<h3>{(this.props.selectedRoom.name)}</h3>



<span>
     {this.state.message.filter(roomessage  =>
       this.props.selectedRoom.key === '-'+roomessage.roomId).map((roomessage,index) =>  <li key={index}>{roomessage.content + ' From ' + roomessage.username + ' Time: ' + roomessage.sentAt}</li>
     )}

</span>







</section>
</div>
);
}
}


export default MessageList;
