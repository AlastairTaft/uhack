import React, { Component } from 'react'
import Course from './Course.jsx'

class CourseContainer extends Component {

	static contextTypes = {
		router: React.PropTypes.object,
	};

	onSelect = () => {
		const { id } = this.props
		this.context.router.push(`/overview/${id}`)
	};

	render = () => <Course 
		{...this.props} 
		onSelect={this.onSelect}
	/>
};

export default CourseContainer