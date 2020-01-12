import React, { Component } from 'react';
import './css/bootstrap.min.css'
import './css/style.css'
import Sidebar from 'Sidebar'
import ChatBox from '../../src-designed/components/ChatBox'
import SuperChatBox from 'SuperChatBox'
import firebase from 'firebase';
import firebaseConfig from '../../config';
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  componentDidMount() {
    // firebase.auth().onAuthStateChanged(user => {
    //   this.setState({ user });
    // });
    firebase.auth().signInAnonymously().catch(function(error) {
      // var errorCode = error.code;
      // var errorMessage = error.message;
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="App">
        <div className="centerContainer flexRowLeft" style={{ height: '100%' }}>
          <Sidebar></Sidebar>
          <ChatBox></ChatBox>
          <Form user={this.state.user} />
          {/* <SuperChatBox></SuperChatBox> */}
        </div>
      </div >

    );
  }
}
