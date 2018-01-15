import * as actionTypes from '../actionType'
import axios from 'axios'
import {Toast} from 'antd-mobile';
import {LOGIN, REGISTER} from 'api/user.api'

function userAxios(dispatch, url, data) {
  axios.post(url, data)
    .then(_res => {
      if (_res.succeed) {
        Toast.success(_res.errorMessage, 1);
        dispatch({type: actionTypes.AUTO_LOGIN, data: {userId: _res.data._id, type: _res.data.type}});
      } else {
        Toast.fail(_res.errorMessage, 1);
      }
    })
}

export function loginAction(data) {
  return (dispatch) => {
    userAxios(dispatch, LOGIN, data);
  }

}

export function registerAction(data) {
  return (dispatch) => {
    userAxios(dispatch, REGISTER, data);
  }

}