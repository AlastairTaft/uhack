import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

const image = require('./back-button.png')

class BackButton extends Component {
	render = () => {
		return <div className={styles.container} {...this.props} />
	}
}

const styles = StyleSheet.create({
	container:{
		width: 50,
		height: 50,
		backgroundImage: `url(${image})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		zIndex: 999,
		backgroundSize: '60%',
	}
})

export default BackButton