import React from 'react'
import { Form, Input, Button, Select, Table, Switch, Modal, Pagination, Row, Col } from 'antd'
import { connect } from 'react-redux';

import Request from '../../../utils/request';

const { Option } = Select;

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
    mobile:'',
    status:'',
    pageNum:1,
    pageSize:10,
    total:0
  });

  React.useEffect(() => {
    getList()
  },[pagination.mobile,pagination.status,pagination.pageNum,pagination.pageSize])
  
  const getList = () => {
    Request({
      url:'/brand/list',
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
  
  const onFinish = values => {
    setPagination(values)
  };
  
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

  const columns = [
    {
      title: '姓名',
      dataIndex: 'brandName',
      key: 'brandName',
    },
    {
      title: '联系电话',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: '类型',
      dataIndex: 'brandType',
      key: 'brandType',
      render: brandType => (
        <span>{brandType ===1 ?'企业':'个人'}</span>
      ),
    },
    {
      title: '联系地址',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: '审核状态',
      key: 'tags',
      dataIndex: 'tags',
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
        onChange={(status)=>onSwitchChange(status, record.brandId)} />
      )
    },
    {
      title: '操作',
      key: 'brandId',
      dataIndex: 'brandId',
      render: brandId =>(
        <a>查看</a>
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
        label="手机号"
        name="mobile"
      >
        <Input />
      </Form.Item>
      </Col> 
      <Col span={8} style={{marginLeft:30}}>
      <Form.Item
        label="状态"
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
        <Table loading={loading} columns={columns} dataSource={data} pagination={false} rowKey={row=>row.brandId}/>
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
  </div>
}

const mapState = ({loading}) => ({
  store: loading
})

export default connect(mapState, null)(Merchants)
