import React, { Component } from 'react';
class User extends Component {
  constructor(props){
    super(props);
    this.userRef = this.props.firebase.database().ref('user');

this.state= {

  //activeRoom:""

};

}
  render() {

    return (




}


export default User;
