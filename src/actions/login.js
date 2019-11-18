import request from '../utils/request'
import { LOGIN, SIGN_OUT} from './ActionTypes/types'
export   const loginAction =   data => async dispatch => {
    request({
        url:'/todos',
        method:'post',
        data
    }).then(res =>{
        sessionStorage.setItem('userInfo',JSON.stringify(res))
        dispatch({ type:LOGIN })
    })
    
}
export const signOutAction = () => dispatch =>{
    sessionStorage.removeItem('userInfo')
    dispatch({ type:SIGN_OUT })
}