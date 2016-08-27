import React, { Component } from 'react'
import OverviewPage from './OverviewPage.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		
	}
}

class OverviewPageContainer extends Component {
	render = () => <OverviewPage {...this.props} />
}

export default OverviewPageContainer