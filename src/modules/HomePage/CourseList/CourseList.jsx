import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import Course from './Course'
import { TOPICS } from './../../../actions/homePage.js'

class CourseList extends Component {

	static propTypes = {
		/**
		 * The courses to display in the list.
		 */
		courses: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string,
    })),

    /**
     * The selected topic, only useful to show a custom message when there's 
     * no courses on the users MY_COURSES tab.
     */
    selectedTopic: React.PropTypes.string,
	};

	static defaultProps = {
		courses: [],
	};

	render = () => {
		const { courses } = this.props
		return <div className={styles.container}>
			{courses.map(c => <Course {...c} />)}
			{courses.length == 0 ? this.renderNoCourses() : null}
		</div>
	}

	renderNoCourses = () => {
		const { selectedTopic } = this.props
		if (selectedTopic == TOPICS.MY_COURSES){
			return <div style={{textAlign: 'center',}}>
				<p className={styles.messageLabel}>You haven't started any courses yet :(</p>
			</div>
		}
		return <div style={{textAlign: 'center',}}>
			<p className={styles.messageLabel}>No courses to show :(</p>
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
	},
	messageLabel: {
		padding: 10,
		color: 'grey',
	},
})

export default look(CourseList)