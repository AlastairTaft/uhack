import React, { Component } from 'react'
import CourseList from './CourseList.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		courses: state.courses.overview,
	}
}

class CourseListContainer extends Component {
	render = () => {
		return <CourseList 
			{...this.props}
		/>
	}
}

export default connect(mapStateToProps)(CourseListContainer)