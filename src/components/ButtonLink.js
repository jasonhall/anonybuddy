import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ButtonLink extends React.Component {
    render() {
        return <Link to={this.props.to} />;
    }
}