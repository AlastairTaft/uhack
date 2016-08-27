import fetch from 'isomorphic-fetch'
import { loadMentor } from './mentors.js'

export default function reducer(state = {}, action = []) {
    
  if (action.type == 'LOAD_LESSONS_SUCCESS'){
    var newState = Object.assign({}, state)
    newState[action.courseId] = action.response
    return newState
  }

  return state
}

export function loadLessons(courseId){
  return {
    types: ['LOAD_LESSONS_REQUEST', 'LOAD_LESSONS_SUCCESS', 'LOAD_LESSONS_FAILURE'],
    shouldCallAPI: (state) => !state.lessons[courseId],
    callAPI: () => fetch(__API_URL__ + `/api/lessons/${courseId}`),
    payload: { courseId },
  }
}