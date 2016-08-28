import React, { Component } from 'react'
import SuggestedCourse from './SuggestedCourse.jsx'

class SuggestedCourseContainer extends Component {

	static contextTypes = {
		router: React.PropTypes.object,
	};

	onSelect = (e) => {
		const { id } = this.props
		this.context.router.push(`/overview/${id}`)
	};

	render = () => <SuggestedCourse 
		{...this.props}
		onSelect={this.onSelect}
	/>
}

export default SuggestedCourseContainer