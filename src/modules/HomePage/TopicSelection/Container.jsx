import React, { Component } from 'react'
import TopicSelection from './TopicSelection'
import { updateSelectedTopic } from './../../../actions/homePage.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		selectedTopic: state.homePage.selectedTopic,
	}
};

class Container extends Component {

	onChange = (e, value) => {
		const { dispatch } = this.props
		dispatch(updateSelectedTopic(value))
	};

	render = () => <TopicSelection 
		{...this.props} 
		onChange={this.onChange}
	/>
}

export default connect(mapStateToProps)(Container)