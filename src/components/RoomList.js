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
  this.setState({newRoomName: e.target.value })
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
    //if(!this.state.newRoomName) {return}
    //const newName= {name: this.state.newRoomName}
    this.roomsRef.push({ name: this.state.newRoomName +''});

}

toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

/*getRoomFormButton() {
  const formbutton=formbutton;

}*/




/*this.roomsRef.push({
  name: newRoomName
});*/

/*listRooms(index) {
  const rooms=this.state.rooms();
  const room=rooms[index];
  this.setState({rooms:rooms});
}*/

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
              `Here's some content for the modal`
              <form onSubmit={ (e)=> this.createRoom(e)}>
              <input type="text" value={this.state.newRoomName}
              onChange={ (e)=> this.handleChange(e)} /><input type="submit" /></form>
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
