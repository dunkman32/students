import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Button, Form, Input, Modal, Tooltip} from 'antd';
import {EditTwoTone, FileAddTwoTone} from '@ant-design/icons'
import {addDocument} from '../../adapters/upload';
import {useSelector} from "react-redux";
import {selectors} from '../../modules/Auth';

const AddModal = () => {
    const [form] = Form.useForm();
    const user = useSelector(selectors.selectUser)
    const [visible, setVisible] = useState(false);
    const [file, setFile] = useState(null);

    const onCreate = (values: any) => {
        setVisible(false);
        add(values)
    };

    const submit = () => {
        form
            .validateFields()
            .then(values => {
                onCreate(values)
                form.resetFields();
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            })
    }
    const add = useCallback((o) => {
        console.log(user);
        addDocument({
            userId: user.uid,
            username: user.name,
            ...o,
            file,
            createdAt: new Date().getTime()
        }).then((r) => {
            console.log(r, 'success');
        }).catch((err) => console.log(err))
    }, [user, file])

    const change = (e: any) => {
        const files = e.target.files;
        setFile(files[0])
    }

    return (
        <>
            <Tooltip title="Add student" placement="bottom">
                <Button onClick={() => setVisible(true)}>
                    {
                        <FileAddTwoTone twoToneColor="#52c41a"/>
                    }
                </Button>
            </Tooltip>
            <Modal
                title="Add Student"
                centered
                visible={visible}
                onOk={submit}
                onCancel={() => setVisible(false)}
                width={1000}>
                <Form
                    form={form}
                    labelCol={{span: 4}}
                    wrapperCol={{span: 14}}
                    layout="horizontal"
                >
                    <Form.Item name={'desc'} label="აღწერა">
                        <Input/>
                    </Form.Item>
                    <Form.Item name={'file'} label="file">
                        <input type='file' onChange={change}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddModal
