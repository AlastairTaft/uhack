import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

class SuggestedCourses extends Component {
	render = () => {
		return <div className={styles.container}>
			<div className={styles.title}>ValYou</div>
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		border: '1px solid red',
		height: 200,
		textAlign: 'center',
	},
	title: {
		fontSize: 18,
	},
})

export default look(SuggestedCourses)