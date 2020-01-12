import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/bootstrap.min.css'
import '../css/style.css'

export default class SupervisorBox extends React.Component {
  render() {
    return (
        <div className="flexColumn" style={{padding:'2em 1em 0'}}>
          <div>
            <img className="chat-profile" src={require("../assets/supervisor.png")} alt="Profile image" />
            <h4 className="duration">Supervisor 1<br />online for: 00:03:00</h4>
          </div>
          <div className="centerContainer flexRowSpaceBetween table">
            <div className="chat-box-grey"></div>
          </div>
          <div className="centerContainer flexRowSpaceBetween table">
            <div className="type-box-grey"></div>
          </div>
        </div>
    )
  }
}