import React from 'react';
import { Button } from 'antd';

import Request from '../../../utils/request';

const Recharge = () => {

    React.useEffect(() => {
      Request({
        url:'/brand_account/get',
        method:'post',
        data:{}
      }).then(res =>{

      })
    },[])

    const handleRecharge = () => {
      Request({
        url:'/order/Recharge',
        method:'post',
        data:{}
      }).then(res =>{

      })
    }

    return <div>
        <div>账户余额</div>
        <div style={{marginTop: 5}}>
            <span style={{marginRight: 15, fontWeight:'bold', color:'#000'}}>￥123123</span>
            <Button onClick={handleRecharge}>充值</Button>
        </div>
    </div>
}

export default Recharge;