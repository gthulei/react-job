import {combineReducers} from 'redux'
import userinfo from '../reducer/userinfo'
import workinfo from '../reducer/workinfo'

export default combineReducers({userinfo,workinfo})