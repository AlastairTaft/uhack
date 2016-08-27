import React, { Component } from 'react'
import OverviewPage from './OverviewPage.jsx'
import { connect } from 'react-redux'
import { loadCourse } from './../../actions/courses.js'
import { loadMentor } from './../../actions/mentors.js'

const mapStateToProps = (state, props) => {
	
	var newProps = {}

	var course = state.courses[props.params.id]
	
	// If we have a course then we can know the author of that course 
	if (course){
		newProps.backdrop = course.backdrop
		newProps.mentorId = course.mentor
		newProps.description = course.description
		newProps.courseOutline = course.courseOutline
	}

	if (newProps.mentorId && state.mentors[newProps.mentorId]){
		var mentor = state.mentors[newProps.mentorId]
		newProps.mentorName = mentor.name
		newProps.mentorThumbnail = mentor.thumbnail
		newProps.mentorTitle = mentor.title
		newProps.mentorDescription = mentor.description
	}

	return newProps
}

class OverviewPageContainer extends Component {

	static contextTypes = {
		router: React.PropTypes.object,
	};

	componentDidMount = () => this.checkProps();
	componentDidUpdate = () => this.checkProps();

	checkProps = () => {
		const { dispatch, mentorId } = this.props
		dispatch(loadMentor(mentorId))
	};

	onBuy = () => {
		this.context.router.push(`/lessons/${this.props.params.id}`)
	};

	render = () => <OverviewPage 
		{...this.props} 
		onBuy={this.onBuy}
	/>
}

const Container = connect(mapStateToProps)(OverviewPageContainer)

Container.needs = (props, store) => {
	return Promise.resolve(store.dispatch(loadCourse(props.params.id)))
	then(result => null)
}

export default Container