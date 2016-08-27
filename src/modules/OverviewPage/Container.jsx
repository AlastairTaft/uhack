import React, { Component } from 'react'
import OverviewPage from './OverviewPage.jsx'
import { connect } from 'react-redux'
import { loadCourse } from './../../actions/courses.js'

const mapStateToProps = (state, props) => {
	var course = state.courses[props.params.id] || {}	
	
	return {
		...course,
	}
}

class OverviewPageContainer extends Component {
	render = () => <OverviewPage {...this.props} />
}

const Container = connect(mapStateToProps)(OverviewPageContainer)

Container.needs = (props, store) => {
	return store.dispatch(loadCourse(props.params.id))
	then(result => null)
}

export default Container