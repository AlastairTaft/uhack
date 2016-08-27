import React, { Component } from 'react'
import { loadCoursesOverview } from './../../actions/courses.js'
import SuggestedCourses from './SuggestedCourses'
import TopicSelection from './TopicSelection'
import CourseList from './CourseList'

class Home extends Component {
	
	/*static contextTypes = {
		store: React.PropTypes.object,
	};*/

	render = () => {
		return <div>
			<SuggestedCourses />
			<TopicSelection />
			<CourseList />
		</div>
	}

	/*componentDidMount = () => {
		debugger
		this.context.store.dispatch(loadCourses())
	}*/
}

Home.needs = (props, store) => {
	return store.dispatch(loadCoursesOverview())
	.then(result => null)
}

export default Home