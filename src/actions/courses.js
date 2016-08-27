import fetch from 'isomorphic-fetch'
import { loadMentor } from './mentors.js'

export default function reducer(state = {}, action = []) {
    
  if (action.type == 'LOAD_COURSES_SUCCESS'){
    var newState = Object.assign({}, state)
    newState.overview = action.response
    return newState
  }

  if (action.type == 'LOAD_COURSE_SUCCESS'){
    var newState = Object.assign({}, state)
    newState[action.id] = action.response
    return newState
  }

  return state
}


export function loadCoursesOverview() {
  return {
    types: ['LOAD_COURSES_REQUEST', 'LOAD_COURSES_SUCCESS', 'LOAD_COURSES_FAILURE'],
    shouldCallAPI: (state) => !state.courses.overview,
    callAPI: () => fetch(__API_URL__ + `/api/courses`),
  }
}

export function loadCourse(id){
  return function(dispatch){
    return dispatch({
      types: ['LOAD_COURSE_REQUEST', 'LOAD_COURSE_SUCCESS', 'LOAD_COURSE_FAILURE'],
      shouldCallAPI: (state) => !state.courses[id],
      callAPI: () => fetch(__API_URL__ + `/api/course/${id}`),
      payload: { id },
    })
    .then(result => {
      if (result != 'LOAD_COURSE_SUCCESS') return result

      // If we have a mentor then go and fetch that too
      if (result.response.mentor){
        dispatch(loadMentor(result.response.mentor))
      }
    })
  }
}