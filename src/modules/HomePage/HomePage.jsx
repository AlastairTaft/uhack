import React, { Component } from 'react'
import { loadCourses } from './../../actions/courses.js'

class Home extends Component {
	
	static contextTypes = {
		store: React.PropTypes.object,
	};

	render = () => {
		return <div>

		</div>
	}

	componentDidMount = () => {
		debugger
		this.context.store.dispatch(loadCourses())
	}
}

Home.needs = (props, store) => {
	return store.dispatch(loadCourses())
}

export default Home