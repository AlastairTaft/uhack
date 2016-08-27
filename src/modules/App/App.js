import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return <div>
      <h1>UHack</h1>

      {this.props.children}

    </div>
  }
}