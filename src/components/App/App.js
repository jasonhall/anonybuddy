import React from 'react';
// import Form from '../Form/Form.js';
import '../../css/bootstrap.min.css'
import '../../css/style.css'
// import firebase from 'firebase';
// import firebaseConfig from '../../config';
// firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  // componentDidMount() {
  //   // firebase.auth().onAuthStateChanged(user => {
  //   //   this.setState({ user });
  //   // });
  //   firebase.auth().signInAnonymously().catch(function(error) {
  //     // var errorCode = error.code;
  //     // var errorMessage = error.message;
  //   });
  // }
  // handleSignIn() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(provider);
  // }
  // handleLogOut() {
  //   firebase.auth().signOut();
  // }
  render() {
    return (
      <div className="heroImage">
      <div className="heroSection">
          <img className="heroLogo" src={require("../../assets/ab-logo-stacked-reverse.png")} alt="Anonybuddy Logo" />
          <button className="heroBtn">Buddy</button>
          <button className="heroBtn">Guest</button>

          <h4 className="paddingTop white">DISCLAIMER</h4>
          <p className="white">
              Cras sagittis arcu eget urna imperdiet, id eleifend libero tincidunt. In a velit augue. Fusce in facilisis mauris, laoreet dapibus ex. Mauris in dignissim massa, non mollis velit. Mauris ut tortor est. Sed nec consequat arcu. Quisque sit amet scelerisque tellus. Maecenas dictum semper lectus, luctus rutrum justo venenatis vel. Pellentesque risus velit, luctus sit amet congue ut, convallis a eros. 
          </p>

      </div>
  </div>
    );
  }
}

export default App;

/* <div className="app">
<div className="app__header">
  <img src={logo} className="app__logo" alt="logo" />
  { !this.state.user ? (
    <button
      className="app__button"
      onClick={this.handleSignIn.bind(this)}
    >
      Sign in
    </button>
  ) : (
    <button
      className="app__button"
      onClick={this.handleLogOut.bind(this)}
    >
      Logout
    </button>
  )}
</div>
<div className="app__list">
  <Form user={this.state.user} />
</div>
</div> */
