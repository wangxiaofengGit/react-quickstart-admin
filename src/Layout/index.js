import React,{ useState } from 'react'
import { Layout,  Breadcrumb} from 'antd'
import menusData from './Navigation'
import Menus from './Menus'
import PageContent from './Content'
import Topbar from './Topbar'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { getRoles } from '../utils/auth'
const { Header, Content, Sider } = Layout;
function LayoutContainer(props){
    const { loginTag, history } = props
    const hasLogin = loginTag||sessionStorage.getItem('userInfo')
    let initBread = [menusData[0],menusData[0].children[0]]
    const [bread, setBread] = useState(initBread)
    const  handleClick = e => {
        const { path }  = e.item.props
        let { keyPath } = e
        history.push(path)
        resetBread(keyPath)
    }
    const resetBread = (keyPath) =>{
        keyPath.reverse()
        let tempArr = []
        let pathIndex = 0
        function rankBread(child){
          let groupKey = undefined
          let result = child.find(item =>{
            if(item.group){
               return item.group.find((gruopItem) => {
                 if(gruopItem.key === keyPath[pathIndex]){
                    groupKey = gruopItem.key
                    return true
                 }
                return gruopItem.key === keyPath[pathIndex]
              })    
            }else{
                return item.key === keyPath[pathIndex]
            }
          })
          if(groupKey){
            result = result.group.find(gruopItem =>{
              return gruopItem.key === groupKey
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
      hasLogin?<Layout style={{width:'100vw',height:'100vh'}}>
      <Header className="header" style={{padding:0,display:'flex'}}>
        <Topbar/>
      </Header>
      <Layout>
        <Sider width={256} style={{background: '#fff',overflowY:'auto'}}>
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
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
              overflowY:'auto'
            }}
          >
           <PageContent/>
          </Content>
        </Layout>
      </Layout>
    </Layout>:<Redirect to='/login'/>   
    )
}
const mapStateToProps = ({ loginReducer}) =>{
  return {
    loginTag:loginReducer.loginTag
  }
}
export default connect(mapStateToProps,null)(withRouter(LayoutContainer))