import axios from 'axios'
import {ROOT_API} from "../redux/type";
import {OptCookie} from "../helpers/Cookies";


let headers = {}
// console.log(OptCookie('get','token'))
const axiosInstance = axios.create({
    baseURL:ROOT_API,
    headers:{
        ...headers,
        'Authorization': `Bearer ${OptCookie('get','token')}`
    }
})

axiosInstance.isCancel = axios.isCancel;

axiosInstance.interceptors.response.use(
    (res)=>

        new Promise((resolve,reject)=>{
            resolve(res)
        }),

    (err)=>{
        if (!err.response){
            return new Promise((resolve,reject)=> {
                reject(err)
            })
        }
        if  (err.response.status === 401){
            console.warn(err.response.status)
            // console.log(err.response.status)
        }else{
            return new Promise((resolve,reject)=> {
                reject(err)
            })
        }
    }

)

export default axiosInstance;

