(this.webpackJsonptesx=this.webpackJsonptesx||[]).push([[0],{165:function(e,t,n){e.exports=n(334)},174:function(e,t,n){},333:function(e,t,n){},334:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),l=n.n(o),i=n(58),c=n(145),u=n(146);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={loginTag:!1},d=Object(i.c)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return p({},e,{loginTag:!0});case"SIGN_OUT":return p({},e,{loginTag:!1});default:return e}}}),f=Object(i.d)(d,Object(i.a)(c.a)),h=n(38),g=n(37),y=(n(174),n(41)),b=n(162),E=n(337),v=n(342),k=[{key:"sub-1",icon:"appstore",title:"\u793a\u4f8b\u83dc\u5355",children:[{icon:"appstore",key:"sub-1-1",title:"\u8d77\u59cb\u9875",path:"/one"}]},{key:"sub-2",icon:"appstore",title:"\u6743\u9650\u6d4b\u8bd5\u9875",children:[{icon:"appstore",key:"sub-2-1",title:"\u7ba1\u7406\u5458\u9875\u9762",path:"/five",role:"admin"},{icon:"appstore",key:"sub-2-2",title:"\u666e\u901a\u7528\u6237\u9875\u9762",path:"/four",role:"editer"}]},{key:"sub-3",icon:"appstore",title:"\u5206\u7ec4\u9875",children:[{key:"sub-3-1",icon:"appstore",title:"\u793a\u4f8b\u5206\u7ec4",group:[{icon:"appstore",key:"sub-3-1-1",title:"\u5206\u7ec4\u4e00",path:"/groupone"},{icon:"appstore",key:"sub-3-1-2",title:"\u5206\u7ec4\u4e8c",path:"/grouptwo"},{icon:"appstore",key:"sub-3-1-3",title:"\u5206\u7ec4\u4e09",path:"/groupthree"}]}]},{key:"sub-4",icon:"appstore",title:"\u65e0\u9650\u9012\u5f52\u83dc\u5355",children:[{icon:"appstore",key:"sub-4-1",title:"\u65e0\u9650\u9012\u5f52\u83dc\u5355",children:[{icon:"appstore",key:"sub-4-1-1",title:"\u65e0\u9650\u9012\u5f52\u83dc\u5355",children:[{icon:"appstore",key:"sub-4-1-1-1",title:"\u65e0\u9650\u9012\u5f52\u83dc\u5355",children:[{icon:"appstore",key:"sub-4-1-1-1-1",title:"\u65e0\u9650\u9012\u5f52\u83dc\u5355",path:"/three"}]}]}]}]}],O=n(118),w=n(6),j=O.a.SubMenu;var I=function(e){var t=e.roles,n=e.menusData,r=e.handleClick,o=function(e){return a.a.createElement(O.a.Item,{path:e.path,key:e.key},e.icon&&a.a.createElement(w.a,{type:e.icon}),e.title)},l=function(e){return e.group?a.a.createElement(O.a.ItemGroup,{key:e.key,title:e.title},e.group.map((function(e){return o(e)}))):o(e)},i=function(e){return e.children?a.a.createElement(j,{key:e.key,title:a.a.createElement("span",null,e.icon&&a.a.createElement(w.a,{type:e.icon}),a.a.createElement("span",null,e.title))},u(e.children)):o(e)},c=function(e){return e.children?a.a.createElement(j,{key:e.key,title:a.a.createElement("span",null,e.icon&&a.a.createElement(w.a,{type:e.icon}),a.a.createElement("span",null,e.title))},e.children.map((function(e){return e.group?l(e):function(e){return e.role?-1!==t.indexOf(e.role)?i(e):null:i(e)}(e)}))):l(e)},u=function(e){return e.map((function(e){return e.role?-1!==t.indexOf(e.role)?c(e):null:c(e)}))};return a.a.createElement(O.a,{onClick:r,style:{width:256},defaultSelectedKeys:[n[0].children[0].key],defaultOpenKeys:[n[0].key],mode:"inline"},u(n))},S=n(335),x=n(340),T=n(50);function P(){return a.a.createElement(x.a,{status:"403",title:"403",subTitle:"\u4f60\u6ca1\u6709\u6b64\u9875\u9762\u7684\u8bbf\u95ee\u6743\u9650\u3002",extra:a.a.createElement(T.a,{type:"primary"},"\u56de\u9996\u9875")})}function N(){return a.a.createElement(x.a,{status:"404",title:"404",subTitle:"\u6b64\u9875\u9762\u672a\u627e\u5230\u3002",extra:a.a.createElement(T.a,{type:"primary"},"\u56de\u9996\u9875")})}var z=function(){return JSON.parse(sessionStorage.getItem("userInfo")).headImg},D=function(){return JSON.parse(sessionStorage.getItem("userInfo")).roles},R=function(){return JSON.parse(sessionStorage.getItem("userInfo")).nickName};var C=function(e){var t=e.children,n=e.auth;return D().includes(n)?t:a.a.createElement(y.a,{to:"/403"})},J=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,344))})),L=Object(r.lazy)((function(){return n.e(10).then(n.bind(null,345))})),F=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,346))})),G=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,347))})),U=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,348))})),_=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,349))})),q=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,350))})),B=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,351))}));var H=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(y.d,null,a.a.createElement(y.b,{path:"/one",exact:!0,component:J}),a.a.createElement(y.b,{path:"/one/next",component:L}),a.a.createElement(y.b,{path:"/three",component:F}),a.a.createElement(y.b,{path:"/four",render:function(){return a.a.createElement(C,{auth:"editer"},a.a.createElement(G,null))}}),a.a.createElement(y.b,{path:"/five",render:function(){return a.a.createElement(C,{auth:"admin"},a.a.createElement(U,null))}}),a.a.createElement(y.b,{path:"/groupone",component:_}),a.a.createElement(y.b,{path:"/grouptwo",component:q}),a.a.createElement(y.b,{path:"/groupthree",component:B}),a.a.createElement(y.b,{path:"/403",component:P}),a.a.createElement(y.b,{path:"/*",component:N})),"#/"===window.location.hash&&a.a.createElement(y.a,{to:"/one"}))},K=a.a.createElement(w.a,{type:"loading",style:{fontSize:24},spin:!0}),W=function(){return a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}},a.a.createElement(S.a,{indicator:K}))};var Y=function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(W,null)},a.a.createElement(H,null))},A=n(343),M=n(336),V=n(117),X=n.n(V),$=n(155),Q=n(156),Z=n.n(Q),ee=n(341),te={200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u8bf7\u91cd\u65b0\u767b\u5f55\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002"},ne=Z.a.create({baseURL:"development"===Object({NODE_ENV:"production",PUBLIC_URL:"."})?"/api":"https://jsonplaceholder.typicode.com/",timeout:5e3});ne.interceptors.request.use((function(e){return sessionStorage.getItem("userInfo")&&(e.headers["X-Token"]=JSON.parse(sessionStorage.getItem("userInfo")).userToken),e}),(function(e){return console.log(e),Promise.reject(e)})),ne.interceptors.response.use((function(e){var t=e.status;return 201!==t?(ee.a.error(te[t]),50008!==t&&50012!==t&&50014!==t||f.dispatch(oe()),Promise.reject(new Error(e.message||"Error"))):e.data}),(function(e){return console.log("err"+e),ee.a.error(e.message),Promise.reject(e)}));var re=ne,ae=function(e){return function(){var t=Object($.a)(X.a.mark((function t(n){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:re({url:"/todos",method:"post",data:e}).then((function(e){sessionStorage.setItem("userInfo",JSON.stringify(e)),n({type:"LOGIN"})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},oe=function(){return function(e){sessionStorage.removeItem("userInfo"),e({type:"SIGN_OUT"})}};var le=Object(h.b)(null,(function(e){return{dispatch:e}}))(Object(y.g)((function(e){var t=e.history,n=e.dispatch,o=a.a.createElement(O.a,null,a.a.createElement(O.a.Item,{onClick:function(){n(oe()),t.push("/login")}},"\u9000\u51fa\u767b\u5f55"));return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"logo",style:{width:256,height:"100%",float:"left",display:"flex"}},a.a.createElement("div",{style:{margin:"auto",borderRadius:5,width:"70%",height:"60%",background:"rgba(255, 255, 255, 0.2)"}})),a.a.createElement("div",{style:{flex:1,color:"#fff"}},a.a.createElement("div",{style:{float:"right",marginRight:40}},a.a.createElement(A.a,{overlay:o},a.a.createElement("div",null,a.a.createElement(M.a,{size:"large",src:z()}),a.a.createElement("span",{style:{marginLeft:5}},R()))))))}))),ie=E.a.Header,ce=E.a.Content,ue=E.a.Sider;var se=Object(h.b)((function(e){return{loginTag:e.loginReducer.loginTag}}),null)(Object(y.g)((function(e){var t=e.loginTag,n=e.history,o=t||sessionStorage.getItem("userInfo"),l=[k[0],k[0].children[0]],i=Object(r.useState)(l),c=Object(b.a)(i,2),u=c[0],s=c[1],p=function(e){e.reverse();var t=[];!function n(r){var a=void 0,o=r.find((function(t){return t.group?t.group.find((function(t){return t.key===e[0]?(a=t.key,!0):t.key===e[0]})):t.key===e[0]}));a&&(o=o.group.find((function(e){return e.key===a}))),e.splice(0,1),t.push(o),o.children&&n(o.children)}(k),s(t)};return o?a.a.createElement(E.a,{style:{width:"100vw",height:"100vh"}},a.a.createElement(ie,{className:"header",style:{padding:0,display:"flex"}},a.a.createElement(le,null)),a.a.createElement(E.a,null,a.a.createElement(ue,{width:256,style:{background:"#fff",overflowY:"auto"}},a.a.createElement(I,{roles:D(),menusData:k,handleClick:function(e){var t=e.item.props.path,r=e.keyPath;n.push(t),p(r)}})),a.a.createElement(E.a,{style:{padding:"0 24px 24px"}},a.a.createElement(v.a,{style:{margin:"16px 0"}},u.map((function(e){return a.a.createElement(v.a.Item,{key:e.key},e.title)}))),a.a.createElement(ce,{style:{background:"#fff",padding:24,margin:0,minHeight:280,overflowY:"auto"}},a.a.createElement(Y,null))))):a.a.createElement(y.a,{to:"/login"})}))),pe=n(338),me=n(339);var de=Object(h.b)((function(e){return{loginTag:e.loginReducer.loginTag}}),(function(e){return{dispatch:e}}))(pe.a.create()((function(e){var t=e.dispatch,n=e.loginTag,r=e.form.getFieldDecorator;return n||sessionStorage.getItem("userInfo")?a.a.createElement(y.a,{to:"/one"}):a.a.createElement("div",{style:{boxSizing:"border-box",paddingTop:"15vh",background:"rgb(48, 65, 86)",width:"100vw",height:"100vh"}},a.a.createElement(pe.a,{onSubmit:function(n){n.preventDefault(),e.form.validateFields((function(e,n){if(!e){var r="admin"===n.username?["admin"]:["editer"],a="admin"===n.username?"\u7ba1\u7406\u5458":"\u666e\u901a\u7528\u6237";t(ae({roles:r,userToken:"token",headImg:void 0,nickName:a}))}}))},style:{width:350,margin:"auto",padding:45,borderRadius:5,textAlign:"center",background:"#eee"}},a.a.createElement(pe.a.Item,null,r("username",{rules:[{required:!0,message:"Please input your username!"}]})(a.a.createElement(me.a,{prefix:a.a.createElement(w.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7ba1\u7406\u5458\u8f93\u5165admin,\u666e\u901a\u7528\u6237\u968f\u4fbf\u8f93"}))),a.a.createElement(pe.a.Item,null,r("password",{rules:[{required:!0,message:"Please input your Password!"}]})(a.a.createElement(me.a,{prefix:a.a.createElement(w.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u7ba1\u7406\u5458\u8f93\u5165admin,\u666e\u901a\u7528\u6237\u968f\u4fbf\u8f93"}))),a.a.createElement(pe.a.Item,null,a.a.createElement(T.a,{type:"primary",htmlType:"submit"},"\u767b\u5f55"))))})));n(333);var fe=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(y.d,null,a.a.createElement(y.b,{path:"/login",component:de}),a.a.createElement(y.b,{path:"/",component:se})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(h.a,{store:f},a.a.createElement(g.a,null,a.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[165,1,2]]]);
//# sourceMappingURL=main.f0440eac.chunk.js.map