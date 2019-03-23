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

/*<span> when this is in render return area it returns messages from all rooms- just saving for now up here because comments shouldnt be in render
     {this.state.message.map((roomessage, index) => {
       return <li key={index}>{roomessage.content}</li>;
     })}


</span>*/
/*<nav>
     {this.state.message
       .filter((index, content) => this.props.selectedRoom.key===content.value)
       .map((index,message)=>
               <div key={index}>
               <div>{message.content}</div>
               </div>
             )
         }
        </nav>*/

  render() {

    return (

        <div>
    <section className="message">

<h3>{(this.props.selectedRoom.name)}</h3>
<h3>{(this.props.selectedRoom.key)}</h3>


<span>
     {this.state.message.filter(roomessage  =>
       roomessage.roomId===this.state.message.key).map((roomessage, index) => {return <li key={index}>{roomessage.content}</li>;
     })}


</span>







</section>
</div>
);
}
}


export default MessageList;
