import React from 'react'
import Cookies from 'js-cookie'
import { Button ,Form, Icon,Input } from 'antd';
import { connect } from 'react-redux'
import { loginAction } from '../../actions/login'
import { Redirect } from 'react-router-dom'
function NormalLoginForm(props)  {
  const { dispatch, loading, loginTag } = props
  const { getFieldDecorator } = props.form;
  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields( (err, values) => {
      if (!err) {
        let roles = values.username ==='admin'?['admin','one','two','three']:['editer']
        let nickName = values.username ==='admin'?'管理员':'普通用户'
        let userToken = 'token'
        let headImg = undefined
        dispatch(loginAction({ roles, userToken, headImg, nickName }))      
      }
    })
  }
  const hasLogin = loginTag||Cookies.get('userInfo')
    return (
      hasLogin?
     < Redirect to='/one'/>:
      <div style={{boxSizing:'border-box',paddingTop:'15vh',background:'rgb(48, 65, 86)',width:'100vw',height:'100vh'}}>
        <Form onSubmit={handleSubmit} style={{width:350,margin:'auto',padding:45,borderRadius:5, textAlign:'center', background:'#eee'}}>
          <Form.Item>
          {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="管理员输入admin 普通用户随便输"
              />,
            )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="管理员输入admin 普通用户随便输"
              />,
            )}
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
const mapStateToProps = ({ loginReducer, loadingReducer }) =>{
  return {
    loginTag:loginReducer.loginTag,
    loading:loadingReducer.loading
  }
}
const mapDispatchToProps = dispatch =>({
  dispatch
})
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(NormalLoginForm));