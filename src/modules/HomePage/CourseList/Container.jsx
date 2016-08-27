import React, { Component } from 'react'
import CourseList from './CourseList.jsx'
import { connect } from 'react-redux'
import { TOPICS } from './../../../actions/homePage.js'

const mapStateToProps = (state) => {

	var courses = state.courses.overview
	if (!courses) return {
		selectedTopic: state.homePage.selectedTopic,
	}

	// Clone courses so we can sort the array however we like
  courses = courses.slice()

	var selectedTopic = state.homePage.selectedTopic
	if (selectedTopic == TOPICS.NEW){
		// Pull out the latest courses
		courses.sort(function(a, b){
			var aEpoch = (new Date(a.date)).valueOf(),
			  bEpoch = (new Date(b.date)).valueOf()

			if (aEpoch < bEpoch) return -1
			if (bEpoch < aEpoch) return 1
			return 0
		})
	}

	if (selectedTopic == TOPICS.POPULAR){
		// Pull out the courses with the best reviews
		courses.sort(function(a, b){
			
			if (a.rating < b.rating) return 1
			if (b.rating < a.rating) return -1
			return 0
		})
	}

	if (selectedTopic == TOPICS.MY_COURSES){
		courses = []
	}

	return {
		courses: courses.slice(0, 4),
		selectedTopic,
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