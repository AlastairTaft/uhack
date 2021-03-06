import React from 'react'
import App from './App/App.js'
import HomePage from './HomePage'
import OverviewPage from './OverviewPage'
import LessonsPage from './LessonsPage'
import { Route, IndexRoute } from 'react-router'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/overview/:id" component={OverviewPage} />
		<Route path="/lessons/:courseId" component={LessonsPage} />
	</Route>
)