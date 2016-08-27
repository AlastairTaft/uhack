import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import { TOPICS } from './../../../actions/homePage.js'

class TopicSelection extends Component {
	
	static propTypes = {
		/**
		 * Fired when a new topic is selected.
		 */
		onChange: React.PropTypes.func,

		/**
		 * The selected topic
		 */
		selectedTopic: React.PropTypes.string,
	};

	render = () => {

		var { onChange, selectedTopic } = this.props
		// Noop the onChange
		if (!onChange) onChange = () => {}

		return <div className={styles.container}>
			<ul className={styles.list}>
				<li 
					className={selectedTopic == TOPICS.NEW ? styles.selectedListItem : styles.listItem} 
					onClick={(e) => onChange(e, TOPICS.NEW)}
				>
					New
				</li>
				<li 
					className={selectedTopic == TOPICS.FEATURED ? styles.selectedListItem : styles.listItem} 
					onClick={(e) => onChange(e, TOPICS.FEATURED)}
				>
					Featured
				</li>
				<li 
					className={selectedTopic == TOPICS.POPULAR ? styles.selectedListItem : styles.listItem} 
					onClick={(e) => onChange(e, TOPICS.POPULAR)}
				>
					Popular
				</li>
				<li 
					className={selectedTopic == TOPICS.MY_COURSES ? styles.selectedListItem : styles.listItem} 
					onClick={(e) => onChange(e, TOPICS.MY_COURSES)}
				>
					My Courses
				</li>
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
    color: '#b6dce9',
	},
	selectedListItem: {
    display: 'inline-block',
    margin: '0 5px',
    padding: '0 10px',
    lineHeight: '58px',
    color: 'white',
	},
})

export default look(TopicSelection)