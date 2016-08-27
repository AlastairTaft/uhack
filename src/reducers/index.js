import { combineReducers } from 'redux'
import courses from './../actions/courses.js'
import mentors from './../actions/mentors.js'
import lessons from './../actions/lessons.js'
import homePage from './../actions/homePage.js'

export default combineReducers({
  courses,
  mentors,
  lessons,
  homePage,
})