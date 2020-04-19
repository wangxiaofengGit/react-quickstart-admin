import React from 'react'
import Cookies from 'js-cookie'
import { Button ,Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { loginAction } from '../../actions/login'
import { Redirect, useHistory } from 'react-router-dom'
function NormalLoginForm(props)  {
  const history = useHistory()
  const { dispatch, loading } = props
  const handleSubmit = async values => {
      let roles = values.username ==='admin'?['admin','one','two','three']:['editer']
      let nickName = values.username ==='admin'?'管理员':'普通用户'
      let userToken = 'token'
      let headImg = undefined
      await dispatch(loginAction({ roles, userToken, headImg, nickName }))
      history.push('/one')  
  }
  const hasLogin = Cookies.get('userInfo')
    return (
      hasLogin?
     < Redirect to='/one'/>:
      <div style={{boxSizing:'border-box',paddingTop:'15vh',background:'rgb(48, 65, 86)',width:'100vw',height:'100vh'}}>
        <Form onFinish={handleSubmit} style={{width:350,margin:'auto',padding:45,borderRadius:5, textAlign:'center', background:'#eee'}}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="管理员输入admin 普通用户随便输"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="管理员输入admin 普通用户随便输"
            />
          </Form.Item>
          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit" >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
}
const mapStateToProps = ({ loadingReducer }) =>{
  return {
    loading:loadingReducer.loading
  }
}
const mapDispatchToProps = dispatch =>({
  dispatch
})
export default connect(mapStateToProps,mapDispatchToProps)(NormalLoginForm);