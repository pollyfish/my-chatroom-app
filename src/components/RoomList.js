import React, { Component } from 'react';
import Modal from './modal';
class RoomList extends Component {
  constructor(props){
    super(props);
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.createRoom = this.createRoom.bind(this);

    this.state = {
      rooms: [],
      newRoomName:'',
      isOpen: false,

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
createRoom(e) {
  e.preventDefault();
  if (!this.state.newRoomName) { return };
  this.roomsRef.push({ name: this.state.newRoomName });
  this.setState({ newRoomName: '' });
}

toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

render() {

   return (

     <section>
     <div>
               {
                 this.state.rooms.map((room,index) =>
                   <div
                   key={index}
                   onClick={()=> this.props.setActiveRoom(room)}
                   >
                   {room.name}
                   </div>
                 )
               }
             </div>
            <button onClick={this.toggleModal}>
              New Room
            </button>

            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
              Create new Room
              <form id="chatform" onSubmit={ (e)=> this.createRoom(e)} >
              <input type="text" id="roomname" value={this.state.newRoomName}
              onChange={ (e)=> this.handleChange(e)}  />
              <input type="submit" name="submit" value="Submit" /></form>
            </Modal>

 </section>
          );
 }
}





export default RoomList;
