import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

const c = StyleSheet.combineStyles

class Card extends Component {
	render = () => {

		var { className } = this.props
		if (className){
			className = c(styles.container, className)
		} else {
			className = styles.container
		}

		return <div {...this.props} className={className}>
			{this.props.children}
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		textAlign: 'center',
		backgroundColor: 'white',
	},
})

export default look(Card)