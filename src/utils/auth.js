import Cookies from 'js-cookie'
export const getToken = () =>{
    return JSON.parse(Cookies.get('userInfo')).userToken
}
export const getHeadImg = () =>{
    return JSON.parse(Cookies.get('userInfo')).headImg
}
export const getRoles = () =>{
    return JSON.parse(Cookies.get('userInfo')).roles
}
export const getName = () =>{
    return JSON.parse(Cookies.get('userInfo')).nickName
}