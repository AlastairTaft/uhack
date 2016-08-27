import React, { Component } from 'react'
import SuggestedCourses from './SuggestedCourses'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	
	// Make the suggested courses the first three returned from the api
	var courses = state.courses.slice(0, 3)

	return {
		courses,
	}
}

class SuggestedCourseContainer extends Component {
	render = () => <SuggestedCourses
		{...this.props}
	/>
}

export default connect(mapStateToProps)(SuggestedCourseContainer)