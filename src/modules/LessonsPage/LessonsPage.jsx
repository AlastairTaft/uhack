import React, { Component } from 'react'

class LessonsPage extends Component {

	static propTypes = {
		/**
		 * The course name / title
		 */
		name: React.PropTypes.string,
	};

	render = () => {
		return <div>
			Lessons Page
		</div>
	};
}

export default LessonsPage