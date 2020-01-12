import React, { Component} from 'react';
import '../css/bootstrap.min.css'
import '../css/style.css'

export default class ChatBox extends React.Component {
  render() {
    return (

      <div className="flexColumn box" style={{borderRight: '1px solid'}}>
        <div>
          <img className="chat-profile" src={require("../assets/buddy-profile.png")} alt="Profile image" />
          <h4 className="duration">User 1<br />online for: 00:03:00</h4>
        </div>
        <div className="centerContainer flexRowSpaceBetween table">
          <div className="chat-box-green"></div>
        </div>
        <div className="centerContainer flexRowSpaceBetween table">
          <div className="type-box-green"></div>
        </div>
      </div>
    
    )
  }
}

      // <div className="flexColumn" style={{padding:'2em 1em 0'}}>
      // </div>
