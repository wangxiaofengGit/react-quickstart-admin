import React from 'react'
import { Menu ,Icon  } from 'antd'
const { SubMenu } = Menu;
function Menus(props) {
  const { roles, menusData,handleClick } = props
  const menuItemRender = (nextChild) =>{
    return <Menu.Item path={nextChild.path} key={nextChild.key}>{nextChild.icon&&<Icon type={nextChild.icon}/>}{nextChild.title}</Menu.Item>
  }  
  const checkGroup = (child) =>{
    return child.group?<Menu.ItemGroup key={child.key} title={child.title}>
      {
        child.group.map(nextChild =>{
          return menuItemRender(nextChild)
      })
      }
    </Menu.ItemGroup>
    :menuItemRender(child)
  }
  const checkRender = (nextChild) =>{
    return nextChild.children?
    <SubMenu
        key={nextChild.key}
        title={
          <span>
            {nextChild.icon&&<Icon type={nextChild.icon}/>}
            <span>{nextChild.title}</span>
          </span>
        }
        >
        {checkSubRole(nextChild.children)
        }
    </SubMenu>
        :menuItemRender(nextChild)
  }
  const checkRole = (nextChild) =>{
    return nextChild.role?
      roles.indexOf(nextChild.role)!==-1?checkRender(nextChild)
      :null
      :checkRender(nextChild)      
  }
  const checkSubRender = (child) =>{
    return child.children?
      <SubMenu
        key={child.key}
        title={
          <span>
            {child.icon&&<Icon type={child.icon}/>}
            <span>{child.title}</span>
          </span>
        }
        >
        {
          child.children.map(nextChild =>{
            return nextChild.group?checkGroup(nextChild)
            :checkRole(nextChild)
        })
        }
      </SubMenu>
      :checkGroup(child)
  }
  const checkSubRole = (menusData) =>{
    return menusData.map(child =>{
      return child.role?
      roles.indexOf(child.role)!== -1?
      checkSubRender(child)
      :null
      :checkSubRender(child)
    })
  } 
    return (
      <Menu
      onClick={handleClick}
      style={{ width: 256}}
      defaultSelectedKeys={[menusData[0].children[0].key]}
      defaultOpenKeys={[menusData[0].key]}
      mode="inline"
    >
      {
        checkSubRole(menusData)
      }
    </Menu>
    );
  }
export default Menus