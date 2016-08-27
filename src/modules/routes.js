import React from 'react'
import App from './App/App.js'
import HomePage from './HomePage'
import { Route, IndexRoute } from 'react-router'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
	</Route>
)