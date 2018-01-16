import * as actionTypes from '../actionType'

export default function workInfo(state = {}, action) {
  switch (action.type) {
    case actionTypes.WORK_INFI:
      return action.data
    default:
      return state
  }
}