import  React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

export function Result403(){
  return(
  <Result
    status="403"
    title="403"
    subTitle="你没有此页面的访问权限。"
    extra={<Link to='/one'>
      <Button type="primary">回首页</Button>
    </Link>}/>
  )
}

export function Result404(){
  return(
    <Result
      status="404"
      title="404"
      subTitle="此页面未找到。"
      extra={<Link to='/one'>
        <Button type="primary">回首页</Button>
      </Link>}/>
  )
}