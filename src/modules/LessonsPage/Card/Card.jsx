import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

class Card extends Component {
	render = () => {
		return <div className={styles.container}>

		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		textAlign: 'center',
	},
})

export default look(Card)