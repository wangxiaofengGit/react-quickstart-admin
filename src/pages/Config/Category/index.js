import React from 'react'
import {Input, Button, Select, Table, Space, Modal, Pagination, Row, Col } from 'antd'
import { connect } from 'react-redux';

import Request from '../../../utils/request';


const Merchants = (props) => {
  const { store } = props
  const { loading } = store
  const [data, setData] = React.useState([])

  const [ modalState, setModalstate] = React.useReducer((state,action)=> {
    return {...state, ...action};
  }, {
    brandId:'',
    visible:false,
  });
  
  const [pagination, setPagination] = React.useReducer((state,action)=> {
    return {...state, ...action};
  }, {
    pageNum:1,
    pageSize:10,
    total:0
  });

  React.useEffect(() => {
    getList()
  },[pagination.pageNum,pagination.pageSize])
  
  const getList = () => {
    Request({
      url:'/goods_category/list',
      method:'post',
      data: pagination
    }).then(res => {
      if(res.code === 200){
        setData(res.data.rows)
        setPagination({total: res.data.total})
      }
    })
  }

  const onSwitchChange = (status, brandId) => {
    if(status){
      handleUpdateStatus(status, brandId)
    }else{
      setModalstate({brandId, visible:true})
    }
  }

  const handleUpdateStatus = (status, brandId) => {
    Request({
      url:status?'/brand/enable_brand':'/brand/down_brand',
      method:'post',
      data:{ brandId }
    }).then(res => {
      if(res.code === 200){
        getList()
      }
    })
  }
  
  const onPageChange = (pageNum, pageSize) => {
    setPagination({pageNum, pageSize})
  }

  const handleOk = () => {
    handleUpdateStatus(false, modalState.brandId)
    setModalstate({visible: false})
  }

  const handleCancel =() => {
    setModalstate({visible: false})
  }

  const handleAddClick =() => [
    setModalstate({visible:true})
  ]

  const columns = [
    {
      title: '类目名称',
      dataIndex: 'brandName',
      key: 'brandName',
    },
    {
      title: '操作',
      key: 'brandId',
      dataIndex: 'brandId',
      render: brandId =>(
        <Space size="middle">
          <a>创建子类目</a>
          <a>编辑</a>
        </Space>
      )
    }
  ];

  return <div>
    <Button type="primary" onClick={handleAddClick} style={{marginBottom:15}}>新增一级类目</Button>
    <Row>
        <Col span={24}>
          <Table loading={loading} columns={columns} dataSource={data} pagination={false} rowKey={row=>row.brandId}/>
        </Col> 
        <Col span={24}>
          <div style={{marginTop:24,float:'right'}}>
            <Pagination showQuickJumper defaultCurrent={1} total={pagination.total} onChange={onPageChange} />
          </div>
        </Col>
      </Row>
    <Modal
      title="新建/编辑类目"
      visible={modalState.visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Row>
        <Col>
          <p style={{marginTop:5}}>上级类目：</p>
        </Col>
        <Col span={16}> 
          <Input/>
        </Col>
      </Row>
      <Row style={{marginTop: 5}}>
        <Col>
          <p style={{marginTop:5}}>类目名称：</p>
        </Col>
        <Col span={16}> 
          <Input/>
        </Col>
      </Row>
    </Modal>
  </div>
}

const mapState = ({loading}) => ({
  store: loading
})

export default connect(mapState, null)(Merchants)
