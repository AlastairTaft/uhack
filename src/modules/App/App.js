import React, { Component } from 'react'
import { Link } from 'react-router'
import { StyleSheet } from 'react-look'

StyleSheet.addCSS({
  'html, body': {
    margin: 0,
    padding: 0,
    fontFamily: "Helvetica",
  },
})

export default class App extends Component {
  render() {
    return <div>
      {this.props.children}
    </div>
  }
}