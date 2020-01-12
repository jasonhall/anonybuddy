import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './Sidebar.css';
import { Link } from 'react-router';
export default class Sidebar extends Component {
    render() {
        return (
        <div className="sidebar">
            <img src={logo} className="app__logo" alt="logo" />
            <ul>
            <li>About</li>
            <li>FAQ</li>
            <li>Help</li>
            <li>Links</li>
            </ul>
      </div>
    )
  }
}