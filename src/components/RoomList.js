import React, { Component } from 'react';
import Modal from './modal';
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



componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key=snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room )})
  });
}
  createRoom(){
    this.roomsRef.on('child_added', snapshot => {
      const room= snapshot.val();
      room.key=snapshot.key;
      this.setState({newRoomName: this.state.newRoomName.push( room)})
    });

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
