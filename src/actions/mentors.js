import fetch from 'isomorphic-fetch'

export default function reducer(state = {}, action = []) {
    
  if (action.type == 'LOAD_MENTOR_SUCCESS'){
    var newState = Object.assign({}, state)
    newState[action.id] = action.response
    return newState
  }

  return state
}

export function loadMentor(id){
  return {
    types: ['LOAD_MENTOR_REQUEST', 'LOAD_MENTOR_SUCCESS', 'LOAD_MENTOR_FAILURE'],
    shouldCallAPI: (state) => !state.mentors[id],
    callAPI: () => fetch(__API_URL__ + `/api/mentor/${id}`),
    payload: { id },
  }
}