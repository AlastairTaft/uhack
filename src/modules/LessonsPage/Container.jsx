import React, { Component } from 'react'
import LessonsPage from './LessonsPage.jsx'
import { connect } from 'react-redux'
import { loadLessons } from './../../actions/lessons.js'

const mapStateToProps = (state, props) => {
	
	var courseId = props.params.courseId
	var course = state.courses[courseId]

	return {
		lessons: state.lessons[courseId],
		name: course ? course.name : undefined,
	}
};

class LessonsPageContainer extends Component {
	render = () => <LessonsPage {...this.props} />
}

const Container = connect(mapStateToProps)(LessonsPageContainer)

Container.needs = (props, store) => {
	return Promise.resolve(store.dispatch(loadLessons(props.params.courseId)))
	then(result => null)
}

export default Container