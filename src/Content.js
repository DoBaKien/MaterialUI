import './App.css';
import { Button, Table, Modal, Input, Form } from 'antd';
import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function Content() {
    const [isEditing, setIsEditing] = useState(false)
    const [edit, setEdit] = useState(null)
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: "John",
            email: "john@gmail.com",
            phone: "1233333333",
            address: "ass"
        },
        {
            id: 2,
            name: "bas",
            email: "asd@gmail.com",
            phone: "1233333333",
            address: "ass"
        },
        {
            id: 3,
            name: "abc",
            email: "dsd@gmail.com",
            phone: "1233333333",
            address: "aaa"
        },
        {
            id: 4,
            name: "cxz",
            email: "jdsan@gmail.com",
            phone: "1233333333",
            address: "dd"
        },
    ])
    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id"
        },
        {
            key: "2",
            title: "Name",
            dataIndex: "name"
        },
        {
            key: "3",
            title: "Email",
            dataIndex: "email"
        },
        {
            key: "4",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "5",
            title: "Address",
            dataIndex: "address"
        },
        {
            key: "6",
            title: "Action",
            render: (record) => {
                return <>
                    <EditOutlined
                        onClick={() => {
                            handleEdit(record)
                        }} />
                    <DeleteOutlined
                        onClick={() => {
                            handleDel(record)
                        }}
                        style={{ color: "red", marginLeft: 12 }} />
                </>
            }
        },
    ]

    const handleAdd = () => {
        const randomNumber = parseInt(Math.random() * 1000)
        const newStudent = {
            id: randomNumber,
            name: "Name" + randomNumber,
            email: randomNumber + "@g.com",
            phone: randomNumber * randomNumber,
            address: "address" + randomNumber
        }
        setDataSource(pre => {
            return [...pre, newStudent]
        })
    }

    const handleDel = (record) => {
        Modal.confirm({
            title: "Bạn có muốn xóa", okText: "Yes", okType: "danger", onOk: () => {
                setDataSource(pre => {
                    return pre.filter(student => student.id !== record.id)
                })
            }
        })
    }

    const handleEdit = (record) => {
        setIsEditing(true)
        setEdit({ ...record })
    }

    const handleRest = () => {
        setIsEditing(false)
        setEdit(null)
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const onFinish = (e) => {
        console.log(e);
        const randomNumber = parseInt(Math.random() * 1000)
        const newStudent = {
            id: randomNumber,
            name: name,
            email: email,
            address: address,
            phone: phone
        }
        setDataSource(pre => {
            return [...pre, newStudent]
        })
    }

    return (
        <div className="App">
            <header className='App-header'>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                ></Table>
                <Modal
                    title="Edit Student"
                    visible={isEditing}
                    okText="Save"
                    onCancel={() => {
                        handleRest()
                    }}
                    onOk={() => {
                        setDataSource(pre => {
                            return pre.map(student => {
                                if (student.id === edit.id) {
                                    return edit
                                } else {
                                    return student
                                }
                            })
                        })
                        handleRest()
                    }}
                >
                    <Input value={edit?.name} onChange={(e) => {
                        setEdit(pre => {
                            return { ...pre, name: e.target.value }
                        })
                    }} />
                    <Input className='editinput' value={edit?.email} onChange={(e) => {
                        setEdit(pre => {
                            return { ...pre, email: e.target.value }
                        })
                    }} />
                    <Input className='editinput' value={edit?.phone} onChange={(e) => {
                        setEdit(pre => {
                            return { ...pre, phone: e.target.value }
                        })
                    }} />
                    <Input className='editinput' value={edit?.address} onChange={(e) => {
                        setEdit(pre => {
                            return { ...pre, address: e.target.value }
                        })
                    }} />
                </Modal>
            </header>
            <Form onFinish={onFinish}>
                <Form.Item label="Name" name="name">
                    <Input placeholder='Name' required
                        onChange={e => setName(e.target.value)}  ></Input>
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input placeholder='Email' required type="email"
                        onChange={e => setEmail(e.target.value)} ></Input>
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                    <Input placeholder='Phone' required type="number"
                        onChange={e => setPhone(e.target.value)} ></Input>
                </Form.Item>
                <Form.Item label="Address" name="address">
                    <Input placeholder='Address' required
                        onChange={e => setAddress(e.target.value)} ></Input>
                </Form.Item>
                <Form.Item>
                    <Button block type='primary' htmlType='submit'>Create</Button>
                </Form.Item>
                <Form.Item>
                    <Button block onClick={handleAdd} type="primary">Add random</Button>
                </Form.Item>

            </Form>
        </div>
    );
}



export default Content;
