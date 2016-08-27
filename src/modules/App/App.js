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

const fontStyles = {fontWeight: 300}
const files = [require('./fonts/Lato-Hairline.ttf')]
StyleSheet.font('Lato', files, fontStyles)

export default class App extends Component {
  render() {
    return <div>
      {this.props.children}
    </div>
  }
}