import React, { Component } from 'react';
class RoomList extends Component {
  constructor(props){
    super(props);
    this.roomsRef = this.props.firebase.database().ref('rooms');
    /*---this.state = {
      rooms: [{name:'room1',name:'room2',name:'room3'}]
    };---*/

    this.state = {
      rooms: []
        };
  }


componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    const room = snapshot.val();
    room.key=snapshot.key;
    this.setState({ rooms: this.state.rooms.concat( room )})
  });
}


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
            </div>
          );
   }


 }





export default RoomList;
