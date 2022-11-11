//拦截器
import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:9001';
//请求拦截器
axios.interceptors.request.use((config)=>{
    config.headers['token']='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjgxNzY4MjgsInVzZXJuYW1lIjoiYWRtaW4ifQ.lNQvoiAwmekt21Ga9OIu97Ytu-RsQ3ydkULWyZB3j0g';
    return config;
})

//响应拦截器
axios.interceptors.response.use(res => {
    return res
}),err=>{
    return Promise.reject(err);
}

export default axios