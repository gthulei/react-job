import * as actionTypes from '../actionType'

export default function userinfo(state = {}, action) {
  switch (action.type) {
    case actionTypes.AUTO_LOGIN:
      return action.data
    default:
      return state
  }
}