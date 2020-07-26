import React from 'react'
import Cookies from 'js-cookie'
import { Layout,  Breadcrumb } from 'antd'
import { useHistory , Redirect } from 'react-router-dom'

import menusData from './menusData'
import Menus from './Menus'
import PageContent from './Content'
import Topbar from './Topbar'
import { getRoles } from '../utils/auth'

const { Header, Sider } = Layout;

function LayoutContainer(){
    const history = useHistory();
    const hasLogin = Cookies.get('userInfo')

    // 面包屑默认选中第一个页面
    let initBread = [menusData[0],menusData[0].children[0]]
    const [bread, setBread] = React.useState(initBread)

    // 如果缓存有的话则是刷新页面，所以读取cookie获得上一次选中的页面
    React.useEffect(() =>{
      if(Cookies.get('selectMenusKey')){
        resetBread(Cookies.get('selectMenusKey').split(','))
      }
    },[])

    const  handleClick = e => {
        const { path }  = e.item.props
        let { keyPath } = e
        history.push(path)
        resetBread(keyPath)
        // 点击的时候把当前选中页面存入cookie，用于刷新的时候重新选中
        Cookies.set('selectMenusKey', keyPath.reverse().join(','))
    }

    // 点击的时候重新调整面包屑
    const resetBread = (keyPath) =>{
        keyPath.reverse()
        let tempArr = []
        let pathIndex = 0
        function rankBread(child){
          let groupKey;
          let result = child.find(item =>{
            if(item.group){
               return item.group.find(groupItem => {
                 if(groupItem.key === keyPath[pathIndex]){
                    groupKey = groupItem.key
                    return groupItem
                 }
                return groupItem.key === keyPath[pathIndex]
              })    
            }else{
                return item.key === keyPath[pathIndex]
            }
          })
          if(groupKey){
            result = result.group.find(groupItem =>{
              return groupItem.key === groupKey
            })
          }
          pathIndex++
          tempArr.push(result)
          if(result.children){
            rankBread(result.children)
          } 
        }
        rankBread(menusData)
        setBread(tempArr)    
      }

    return(
      hasLogin?<Layout style={{width:'100vw',height:'100vh',overflowY:'auto'}}>
      <Header style={{padding:0,display:'flex'}}>
        <Topbar/>
      </Header>
      <Layout> 
        <Sider width={256} style={{background: '#fff',overflowY:'auto',overflowX:'hidden'}} > 
        <Menus
          roles={getRoles()}
          menusData={menusData}
          handleClick={handleClick}
        />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {
              bread.map(item =>{
                return <Breadcrumb.Item key={item.key}>{item.title}</Breadcrumb.Item>
              })
            }
          </Breadcrumb>
          <div
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 'calc(100vh - 150px)'
            }}
          >
           <PageContent/>
          </div>
        </Layout>
      </Layout>
    </Layout>:<Redirect to='/login'/>   
    )
}

export default LayoutContainer