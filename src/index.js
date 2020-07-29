import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}>
        <HashRouter>
         <ConfigProvider locale={zhCN}>
            <App />
         </ConfigProvider>
        </HashRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
