import React, { Component } from 'react';
class User extends Component {
  //constructor(props){
  //  super(props);

//  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => { this.props.setUser(user);
    });
  }


  signInWithPopup() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
    //this.setState({isLoggedin:true});

      }

  signOut(){
  this.props.firebase.auth().signOut();
  //this.setState({isLoggedout:true});
    }

    signInOut(provider) {
    var user = this.state.signInWithPopup(provider);
    if (user) {
      return "Sign Out"
      // User is signed in.
    } else {
      return "Sign In"
      // No user is signed in.
    }
}
  render() {

    return (
<section>
<div>

    <button onClick={() => this.signInWithPopup()}>Log In</button>
    <button onClick={() => this.signOut()}>Log Out</button>

    <p>{this.props.user ? this.props.user.displayName : "Guest"}</p>
<button onClick={() => this.signInOut()}>""</button>

</div>
</section>
);
}


}


export default User;
