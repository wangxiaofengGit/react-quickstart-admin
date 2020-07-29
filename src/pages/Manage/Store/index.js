import React from 'react'
import { Form, Input, Button, Select, Table, DatePicker, Switch, Modal, Pagination, Row, Col } from 'antd'
import { connect } from 'react-redux';
import moment from 'moment';

import Request from '../../../utils/request';

const { Option } = Select;

const Merchants = (props) => {
  const { store } = props
  const { loading } = store
  const [data, setData] = React.useState([])
  const [ modalState, setModalstate] = React.useReducer((state,action)=> {
    return {...state, ...action};
  }, {
    storeId:'',
    visible:false,
  });

  const [ dateModal, setDateModal] = React.useReducer((state,action)=> {
    return {...state, ...action};
  }, {
    brandId:'',
    storeId:'',
    validityDate:'',
    visible:false,
  });
  
  const [pagination, setPagination] = React.useReducer((state,action)=> {
    return {...state, ...action};
  }, {
    storeName:'',
    status:'',
    pageNum:1,
    pageSize:10,
    total:0
  });

  React.useEffect(() => {
    getList()
  },[pagination.storeName,pagination.status,pagination.pageNum,pagination.pageSize])
  
  const getList = () => {
    Request({
      url:'/store/list',
      method:'post',
      data: pagination
    }).then(res => {
      if(res.code === 200){
        setData(res.data.rows)
        setPagination({total: res.data.total})
      }
    })
  }

  const handleDate = (storeId, brandId,validityDate) => {
    setDateModal({ storeId,brandId,validityDate,visible:true})
  }

  const onDateChange =(date) => {
    setDateModal({validityDate: new Date(date)})
  }

  const onSwitchChange = (status, storeId) => {
    if(status){
      handleUpdateStatus(status, storeId)
    }else{
      setModalstate({storeId, visible:true})
    }
  }

  const handleUpdateStatus = (status, storeId) => {
    Request({
      url:status?'/store/enable_store':'/store/down_store',
      method:'post',
      data:{ storeId }
    }).then(res => {
      if(res.code === 200){
        getList()
      }
    })
  }

  const onFinish = values => {
    setPagination(values)
  };
  
  const onPageChange = (pageNum, pageSize) => {
    setPagination({pageNum, pageSize})
  }

  const handleOk = () => {
      handleUpdateStatus(false, modalState.storeId)
      setModalstate({visible: false})
  }

  const handleCancel =() => {
    setModalstate({visible: false})
  }

  const handleDateOk = () => {
    const { storeId, brandId, validityDate} = dateModal
    Request({
      url:'/store/update_validity_date',
      method:'post',
      data: {storeId, brandId, validityDate}
    }).then(res => {
      if(res.code === 200){
        getList()
      }
    })
    setDateModal({visible: false})
  }

  const handleDateCancel =() => {
    setDateModal({visible: false})
  }

  const columns = [
    {
      title: '店铺名称',
      dataIndex: 'storeName',
      key: 'storeName',
    },
    {
      title: '店铺管理员',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: '联系电话',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: '联系地址',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: '有效期至',
      key: 'validityDate',
      dataIndex: 'validityDate',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      render: (status, record) => (
        <Switch 
        checked={status === 1?true:false}
        checkedChildren="启用"
        unCheckedChildren="禁用"
        onChange={(status)=>onSwitchChange(status, record.storeId)} />
      )
    },
    {
      title: '操作',
      key: 'storeId',
      dataIndex: 'storeId',
      render: (storeId, record) =>(
        <a onClick={() =>handleDate(storeId, record.brandId, record.validityDate)}>编辑有效期</a>
      )
    }
  ];

  return <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Row>
      <Col span={8}>
      <Form.Item
        label="店铺信息"
        name="storeName"
      >
        <Input placeholder="店铺名称搜索"/>
      </Form.Item>
      </Col> 
      <Col span={8} style={{marginLeft:30}}>
      <Form.Item
        label="主营类目"
        name="status"
      >
      <Select placeholder="请选择">
        <Option value="1">启用</Option>
        <Option value="0">禁用</Option>
      </Select>
      </Form.Item>
      </Col>
      <Col style={{marginLeft:30}}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Col>
      </Row>
    </Form>
    <Row>
      <Col span={24}>
        <Table loading={loading} columns={columns} dataSource={data} pagination={false} rowKey={row=>row.storeId}/>
      </Col> 
      <Col span={24}>
        <div style={{marginTop:24,float:'right'}}>
          <Pagination showQuickJumper defaultCurrent={1} total={pagination.total} onChange={onPageChange} />
        </div>
      </Col>
    </Row>
    <Modal
      title="提示"
      visible={modalState.visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>禁用之后，账户内账号均无法登陆，确认禁用吗？</p>
    </Modal>
    <Modal
      title="编辑有效期"
      visible={dateModal.visible}
      onOk={handleDateOk}
      onCancel={handleDateCancel}
    >
      <div>
        <span style={{marginRight: 15}}>有效期至</span>
        <DatePicker defaultValue={moment(dateModal.validityDate?new Date(dateModal.validityDate):new Date(), 'YYYY/MM/DD')} onChange={onDateChange} style={{width:'60%'}}/>
      </div>
    </Modal>
  </div>
}

const mapState = ({loading}) => ({
  store: loading
})

export default connect(mapState, null)(Merchants)
