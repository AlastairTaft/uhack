import React, { Component } from 'react'
import CourseList from './CourseList.jsx'
import { connect } from 'react-redux'
import { TOPICS } from './../../../actions/homePage.js'

const mapStateToProps = (state) => {

	var selectedTopic = state.homePage.selectedTopic
	if (selectedTopic == TOPICS.NEW){
		// Pull out the latest courses
	}

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