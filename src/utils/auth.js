export const getToken = () =>{
    return JSON.parse(sessionStorage.getItem('userInfo')).userToken
}
export const getHeadImg = () =>{
    return JSON.parse(sessionStorage.getItem('userInfo')).headImg
}
export const getRoles = () =>{
    return JSON.parse(sessionStorage.getItem('userInfo')).roles
}
export const getName = () =>{
    return JSON.parse(sessionStorage.getItem('userInfo')).nickName
}