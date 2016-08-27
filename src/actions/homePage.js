import fetch from 'isomorphic-fetch'
import { loadMentor } from './mentors.js'

export const TOPICS = {
  NEW: 'new',
  FEATURED: 'featured',
  POPULAR: 'popular',
  MY_COURSES: 'my_courses',
};

const defaultState = {
  selectedTopic: TOPICS.FEATURED,
}

export default function reducer(state = defaultState, action = []) {
    
  if (action.type == 'UPDATE_SELECTED_TOPIC'){
    var newState = Object.assign({}, state)
    newState.selectedTopic = action.value
    return newState
  }

  return state
}

export function updateSelectedTopic(topic){
  return {
    type: 'UPDATE_SELECTED_TOPIC',
    value: topic,
  }
}