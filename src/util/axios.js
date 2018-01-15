import axios from 'axios'
import { Toast } from 'antd-mobile';

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  Toast.loading('加载中', 0)
  return config;
},function(err){
  return Promise.reject(err);
});

//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  return res.data;
},function(err){
  return Promise.reject(err);
})
