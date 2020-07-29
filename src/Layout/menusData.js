/******
@description 生成左侧菜单栏
@param key 唯一标记
@param icon antd小图标
@param title 菜单标题
@param children 子菜单
@param group 分组列
 */

const menusData = [{
  key:'sub-1',
  icon:'appstore',
  title:'管理',
  children:[
    {
      icon:'appstore',
       key:'sub-1-1',
       title:'商户管理',
       path:'/manage/merchants',
    },
    {
      icon:'appstore',
       key:'sub-1-2',
       title:'店铺管理',
       path:'/manage/store',
    }
  ]
},
{
key:'sub-2',
icon:'appstore',
title:'运营',
children:[
  {
    icon:'appstore',
    key:'sub-2-1',
    title:'配送账户充值',
    path:'/operate/recharge',
    role:'admin'
  },
  ]
},
{
key:'sub-3',
icon:'appstore',
title:'配置',
children:[
  {
    key:'sub-3-1',
    icon:'appstore',
    title:'类目管理',
    path:'/config/category'
  }
]
}
] 

// const menusData = [{
//     key:'sub-1',
//     icon:'appstore',
//     title:'示例菜单',
//     children:[
//       {
//         icon:'appstore',
//          key:'sub-1-1',
//          title:'起始页',
//          path:'/one',
//       }
//     ]
//  },
//  {
//   key:'sub-2',
//   icon:'appstore',
//   title:'权限测试页',
//   children:[
//     {
//       icon:'appstore',
//       key:'sub-2-1',
//       title:'管理员页面',
//       path:'/one/next',
//       role:'admin'
//     },
//     {
//       icon:'appstore',
//       key:'sub-2-2',
//       title:'普通用户页面',
//       path:'/four',
//       role:'editer'
//     }
//   ]
//  },
//  {
//   key:'sub-3',
//   icon:'appstore',
//   title:'分组页',
//   children:[
//     {
//       key:'sub-3-1',
//       icon:'appstore',
//       title:'示例分组',
//       group:[
//         {
//           icon:'appstore',
//           key:'sub-3-1-1',
//           title:'分组一',
//           path:'/groupone',
//         }
//       ]
//     }
//   ]
//  }
// ] 

export default menusData
