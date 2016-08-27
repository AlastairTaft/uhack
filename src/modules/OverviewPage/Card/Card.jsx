import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

class Card extends Component {
	render = () => {
		return <div className={styles.container} {...this.props}>
			{this.props.children}
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e9e9e9',
		borderRadius: 5,
		position: 'relative',
	},
})

export default Card