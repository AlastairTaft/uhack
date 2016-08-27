import fetch from 'isomorphic-fetch'

export default function reducer(state = null, action = []) {
    
  if (action.type == 'LOAD_COURSES_SUCCESS'){
    return action.response
  }

  return state
}


export function loadCourses() {
  return {
    // Types of actions to emit before and after
    types: ['LOAD_COURSES_REQUEST', 'LOAD_COURSES_SUCCESS', 'LOAD_COURSES_FAILURE'],
    // Check the cache (optional):
    shouldCallAPI: (state) => !state.courses,
    // Perform the fetching:
    callAPI: () => fetch(__API_URL__ + `/api/courses`),
    // Arguments to inject in begin/end actions
    payload: { }
  }
}