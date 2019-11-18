import request from '../utils/request'
import { LOGIN, SIGN_OUT} from './ActionTypes/types'
import Cookies from 'js-cookie'
export   const loginAction =   data => dispatch => {
    request({
        url:'/todos',
        method:'post',
        data
    }).then(res =>{
        Cookies.set('userInfo',res)
        dispatch({ type:LOGIN })
    })
    
}
export const signOutAction = () => dispatch =>{
    Cookies.remove('userInfo')
    dispatch({ type:SIGN_OUT })
}