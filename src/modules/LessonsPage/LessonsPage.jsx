import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import Lesson from './Lesson'

class LessonsPage extends Component {

	static propTypes = {
		/**
		 * The course name / title
		 */
		name: React.PropTypes.string,

		/**
		 * The lessons
		 */
		lessons: React.PropTypes.arrayOf(React.PropTypes.shape({
			/**
			 * The lesson title.
			 */
			title: React.PropTypes.string,
			
			/**
			 * The lesson description. Can be HTML.
			 */
			description: React.PropTypes.string,

			/**
			 * Estimate number of minutes to complete the lesson, can do half sizes.
			 * e.g. 2.5 is 2 minutes 30 seconds.
			 */
			estimatedNumberOfMinutes: React.PropTypes.number,

			/** 
			 * The current step number
			 */
			step: React.PropTypes.number,

			/**
			 * The maximum step number
			 */
			maxStep: React.PropTypes.number,
		}))
	};

	static defaultProps = {
		name: 'The Keys To Cold Calling',
		lessons: [],
	};

	render = () => {
		const { name, lessons } = this.props

		return <div 
			className={styles.container}
		>
			<div className={styles.title}>{name}</div>
			<div>
				{lessons.map(l => <Lesson {...l} />)}
			</div>
		</div>
	};
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#2954f4',
	},
})

export default LessonsPage