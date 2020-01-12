import React from 'react';
import './css/bootstrap.min.css'
import './css/style.css'
import Sidebar from 'Sidebar'
import ChatBox from '../../src-designed/components/ChatBox'
import SuperChatBox from 'SuperChatBox'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="centerContainer flexRowLeft" style={{ height: '100%' }}>
          <Sidebar></Sidebar>
          <ChatBox></ChatBox>
          <SuperChatBox></SuperChatBox>
        </div>
      </div >

    );
  }
}

export default App;

