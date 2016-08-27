import { combineReducers } from 'redux'
import courses from './../actions/courses.js'

export default combineReducers({
  test: (state = null, action) => state,
  courses,
})