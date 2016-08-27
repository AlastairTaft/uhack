import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'

class TopicSelection extends Component {
	render = () => {
		return <div className={styles.container}>
			<ul className={styles.list}>
				<li className={styles.listItem}>New</li>
				<li className={styles.listItem}>Featured</li>
				<li className={styles.listItem}>Popular</li>
				<li className={styles.listItem}>My Courses</li>
			</ul>
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		height: 58,
		backgroundColor: '#2953f5',
		color: '#abccff',
		textAlign: 'center',
	},
	list: {
		listStyle: 'none',
		display: 'inline-block',
    margin: 0,
    paddingLeft: 0,
	},
	listItem: {
    display: 'inline-block',
    margin: '0 5px',
    padding: '0 10px',
    lineHeight: '58px',
	},
})

export default look(TopicSelection)