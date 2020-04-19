import React,{ Fragment } from 'react'
import { connect } from 'react-redux'
import { Avatar, Dropdown, Menu } from 'antd'
import { getHeadImg ,getName } from '../utils/auth'
import { useHistory } from 'react-router-dom'
import { signOutAction } from '../actions/login'
function Topbar(props){
    const history = useHistory();
    const { dispatch } = props
    const signOut = () =>{
        dispatch(signOutAction())
        history.push('/login')
      }  
      const menu = (
        <Menu>
          <Menu.Item onClick={signOut}>退出登录</Menu.Item>
        </Menu>
      )
    return(
        <Fragment>
            <div className="logo" style={{width:256,height:'100%',float:'left',display:'flex'}}>
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
const mapDispatchToProps = dispatch =>({
    dispatch
})
export default connect(null,mapDispatchToProps)(Topbar)