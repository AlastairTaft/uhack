import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import SuggestedCourse from './SuggestedCourse'

class SuggestedCourses extends Component {

	static propTypes = {
		courses: React.PropTypes.array,
	};

	static defaultProps = {
		courses: [],
	};

	state = {
		selectedCourseIndex: 0,
	};

	render = () => {
		const { selectedCourseIndex } = this.state
		const { courses } = this.props
		var selectedCourse = courses[selectedCourseIndex]
		return <div className={styles.container}>
			<div className={styles.title}>ValYou</div>
			<SuggestedCourse {...selectedCourse} />
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		height: 315,
		textAlign: 'center',
		position: 'relative',
    color: 'white',
    overflow: 'hidden',
	},
	title: {
		fontSize: 18,
		position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 1,
	},
})

export default look(SuggestedCourses)