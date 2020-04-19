import React,{ useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { Layout,  Breadcrumb } from 'antd'
import menusData from './Navigation'
import Menus from './Menus'
import PageContent from './Content'
import Topbar from './Topbar'
import { useHistory , Redirect } from 'react-router-dom'
import { getRoles } from '../utils/auth'
const { Header, Content, Sider } = Layout;
function LayoutContainer(){
    const history = useHistory();
    const hasLogin = Cookies.get('userInfo')
    let initBread = [menusData[0],menusData[0].children[0]]
    const [bread, setBread] = useState(initBread)
    useEffect(() =>{
      if(Cookies.get('selectMenusKey')){
        console.log(Cookies.get('selectMenusKey'))
        resetBread(Cookies.get('selectMenusKey').split(','))
      }
    },[])
    const  handleClick = e => {
        const { path }  = e.item.props
        let { keyPath } = e
        history.push(path)
        resetBread(keyPath)
        Cookies.set('selectMenusKey', keyPath.reverse().join(','))
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
      hasLogin?<Layout style={{width:'100vw',height:'100vh',overflowY:'auto'}}>
      <Header className="header" style={{padding:0,display:'flex'}}>
        <Topbar/>
      </Header>
      <Layout> 
        <Sider width={256} style={{background: '#fff',overflowY:'auto', overflowX:'hidden'}} >
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
              margin: 0
            }}
          >
           <PageContent/>
          </Content>
        </Layout>
      </Layout>
    </Layout>:<Redirect to='/login'/>   
    )
}

export default LayoutContainer