import React, { Component } from 'react';
import Modal from './Modal';
class RoomList extends Component {
  constructor(props){
    super(props);
    this.roomsRef = this.props.firebase.database().ref('rooms');
    //this.roomsRef= this.props.firebase.database().ref('newRoomName');
    /*---this.state = {
      rooms: [{name:'room1',name:'room2',name:'room3'}]
    };---*/

    this.state = {
      rooms: [],
      newRoomName:'',
      isOpen: false
        };

  }
handleChange(e) {
  this.setState({newRoomName: e.target.value });
}


componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key=snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room )})
  });
}
  createRoom(e){
    e.preventDefault();
      this.roomsRef.push({ name: this.state.newRoomName +''});
}

/*clearField(e) {
if(document.getElementById) {
document.chatform.roomname.value == " ";
}
}
clearText= () => {
  document.getElementById("roomname").value = " ";
}*/


toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

/*fillField(input,val)  {
  if(input.value=="")
  input.value=val;
};

clearField(e) {
  if(document.getElementById===e)
  document.chatform.roomname.value = "";
};*/

clearField(e) {
  if(e.value===e)
  e.value = "";
};




render() {

   return (
     <div>
            <section>
              {this.state.rooms.map((room, index) => {
                return <li key={index}>{room.name}</li>;
              })}

            </section>
            <button onClick={this.toggleModal}>
              New Room
            </button>

            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
              Create new Room
              <form id="chatform" onSubmit={ (e)=> this.createRoom(e)} onblur={ (e)=> this.clearField(e)}>
              <input type="text" id="roomname" value={this.state.newRoomName}
              onChange={ (e)=> this.handleChange(e)}  />
              <input type="submit" name="submit" value="Submit" /></form>
            </Modal>
</div>

/*<div className="Modalbox">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          `Here's some content for the modal`
        </Modal>
      </div>*/
          );



 }
}





export default RoomList;
