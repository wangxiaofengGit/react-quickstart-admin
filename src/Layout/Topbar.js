import React,{ Fragment } from 'react'
import { Avatar, Dropdown, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import { getHeadImg, getName } from '../utils/auth'

function Topbar(){
  const history = useHistory();

  const signOut = () =>{
    Cookies.remove('userInfo')
    Cookies.remove('selectMenusKey')
    history.push('/login')
  }  

  const menu = (
    <Menu>
      <Menu.Item onClick={signOut}>退出登录</Menu.Item>
    </Menu>
  )

  return(
    <Fragment>
      <div style={{width:256,height:'100%',float:'left',display:'flex'}}>
        <div style={{margin:'auto',borderRadius:5,width:'70%',height:'60%',background:'rgba(255, 255, 255, 0.2)'}}/>
      </div>
      <div style={{flex:1,color:'#fff'}}>
        <div style={{float:'right',marginRight:40}}>
        <Dropdown overlay={menu}>
        <div>
          <Avatar size="large" src={getHeadImg()} />
          <span style={{marginLeft:5}}>{getName()}</span>
        </div>
        </Dropdown>
        </div>
      </div>
    </Fragment>
  )
}

export default Topbar
