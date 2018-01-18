import * as actionTypes from '../actionType'
import axios from 'axios'
import {Toast} from 'antd-mobile';
import {LOGIN, REGISTER ,FINDINFOMATION ,SAVEINFOMATION} from 'api/user.api'
import { getRedicectPath } from "util/util";

async function userAxios (dispatch,type, url, data) {
  let result = await axios.post(url, data);
  let avatar = false;
  if(result.succeed){
    if(LOGIN == url){
      let r = await axios.post(FINDINFOMATION, {userid:result.data._id});
      let {_id,...v} = r.data;
      avatar = v;
    }
    if(SAVEINFOMATION == url){
       avatar = true;
    }
    dispatch({type: type, data:{...result.data,...avatar.data,routerTo:getRedicectPath(avatar)}});
  }else {
    Toast.fail(result.errorMessage, 1);
  }
}

export function loginAction(data) {
  return (dispatch) => {
    userAxios(dispatch,actionTypes.AUTO_LOGIN, LOGIN, data);
  }

}

export function registerAction(data) {
  return (dispatch) => {
    userAxios(dispatch, actionTypes.AUTO_LOGIN, REGISTER, data);
  }

}

export function userInfoAction(data) {
  return {
    type: actionTypes.AUTO_LOGIN,
    data,
  }

}

export function workAction(data) {
  return (dispatch) => {
    userAxios(dispatch, actionTypes.WORK_INFO,SAVEINFOMATION, data);
  }

}

export function clearUserinfAction(data) {
  return {
    type: actionTypes.AUTO_LOGIN,
    data
  }
}