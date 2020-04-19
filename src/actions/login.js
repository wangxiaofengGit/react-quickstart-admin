import request from '../utils/request'
import Cookies from 'js-cookie'
export   const loginAction = data => async dispatch => {
    await request({
        url:'/todos',
        method:'post',
        data
    }).then(res =>{
        Cookies.set('userInfo',res)
    })
}
export const signOutAction = () => dispatch =>{
    Cookies.remove('userInfo')
    Cookies.remove('selectMenusKey')
}