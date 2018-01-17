import * as actionTypes from '../actionType'

export default function workinfo(state = {}, action) {
  switch (action.type) {
    case actionTypes.WORK_INFO:
      return action.data
    default:
      return state
  }
}