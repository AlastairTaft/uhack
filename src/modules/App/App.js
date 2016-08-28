import React, { Component } from 'react'
import { Link } from 'react-router'
import { StyleSheet } from 'react-look'
import BackButton from './../BackButton'

StyleSheet.addCSS({
  'html, body': {
    margin: 0,
    padding: 0,
    fontFamily: "Helvetica",
    color: '#2f2f2f',
  },
  'html': {
    overflowX: 'hidden',
  },
})

const latoFontStyles = {fontWeight: 300}
const latoFiles = [require('./fonts/Lato-Light.ttf')]
StyleSheet.font('Lato', latoFiles, latoFontStyles)

const latoBoldFontStyles = {fontWeight: 600}
const latoBoldFiles = [require('./fonts/Lato-Regular.ttf')]
StyleSheet.font('LatoBold', latoBoldFiles, latoBoldFontStyles)

export default class App extends Component {

  static contextTypes = {
    router: React.PropTypes.object,
  };

  render() {
    return <div>
      <BackButton 
        style={{
          position: 'absolute',
          top: 5,
          left: 5,
        }} 
        onClick={() => this.context.router.goBack()}
      />
      {this.props.children}
    </div>
  }
}