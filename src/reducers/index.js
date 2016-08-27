import { combineReducers } from 'redux'
import courses from './../actions/courses.js'
import mentors from './../actions/mentors.js'

export default combineReducers({
  courses,
  mentors,
})