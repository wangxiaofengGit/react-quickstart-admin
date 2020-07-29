import React from 'react'
import Cookies from 'js-cookie'
import { Button ,Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

import request from '../../utils/request'

function NormalLoginForm(props)  {
  const history = useHistory()
  const { store } = props
  const { loading } = store

  const handleSubmit = async values => {
    await request({
      url:'/admin/login',
      method:'post',
      data:values
    }).then(res =>{ 
      console.log(res)
      Cookies.set('userInfo',{ roles:['admin']})
      history.push('/manage/merchants') 
    })
  }
  
  const hasLogin = Cookies.get('userInfo')

    return (
      hasLogin?
     < Redirect to='/manage/merchants'/>:
      <div style={{boxSizing:'border-box',paddingTop:'15vh',background:'rgb(48, 65, 86)',width:'100vw',height:'100vh'}}>
        <Form onFinish={handleSubmit} style={{width:350,margin:'auto',padding:45,borderRadius:5, textAlign:'center', background:'#eee'}}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入登陆账号"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
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

const mapState = ({loading}) => ({
  store: loading
})

export default connect(mapState, null)(NormalLoginForm)
