import React, {Component} from 'react';
// import logo from '../../images/logo.svg';
import '../css/bootstrap.min.css'
import '../css/style.css'
export default class Sidebar extends Component {
    render() {
        return (
        <nav className="nav flex-column" style={{height:"100vh"}}>
          <img className="nav_logo" src={require("../assets/ab-logo-stacked-reverse.png")} alt="LOGO IMAGE" />

          <h5><a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">about</a>
              <hr className="navBarDivider" />
          </h5>

          <h5><a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">faq</a>
              <hr className="navBarDivider" />
          </h5>

          <h5><a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">help</a>
              <hr className="navBarDivider" />
          </h5>

          <h5><a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">links</a></h5>
        </nav>
      )
  }
}