import React, { Component } from 'react'
import look, { StyleSheet } from 'react-look'
import Course from './Course'

class CourseList extends Component {

	static propTypes = {
		courses: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string,
    }))
	};

	static defaultProps = {
		courses: [],
	};

	render = () => {
		const { courses } = this.props
		return <div className={styles.container}>
			{courses.map(c => <Course {...c} />)}
		</div>
	}
}

const styles = StyleSheet.create({
	container: {
		border: '1px solid green',
	},
})

export default look(CourseList)