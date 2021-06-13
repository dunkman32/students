import {Fragment, useState} from 'react';
import {Button, Dropdown, Form, Input, Modal, notification, Tooltip, Menu} from 'antd';
import {ToolTwoTone, EllipsisOutlined} from '@ant-design/icons';
import {changePassword} from '../../adapters/users'
import styled from "styled-components";

interface Values {
    new: string,
    current: string,
    confirm: string
}

const M = styled(Modal)`
  border-radius: 10px;

  .ant-modal-header {
    border-radius: 10px 10px 0 0;
  }

  .ant-modal-content {
    border-radius: 10px;
  }

  .ant-modal-footer {
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ChangePassword = () => {
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const onCreate = (values: Values) => {
        setConfirmLoading(true);
        if (values.new === values.confirm) {
            changePassword(values.current, values.new).then((r: boolean) => {
                if (r) {
                    setVisible(false)
                    notification.success({message: 'პაროლი წარმატებით შეიცვალა'})
                }
            }).catch(() => {
                notification.error({message: 'პაროლის ცვლილება ვერ მოხერხდა'})
            }).finally(() => {
                setConfirmLoading(false);
            })
        } else {
            notification.error({message: 'მითითებული პაროლები არ დაემთხვა'})
        }
    };

    const onSubmit = () => {
        form
            .validateFields()
            .then(values => {
                onCreate(values)
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            })
    };

    return (
        <Fragment>
            <Tooltip title="შეცვალე პაროლი" placement="bottom">
                <Button onClick={() => setVisible(true)} style={{width: '100%'}} type="primary"
                        icon={<ToolTwoTone style={{fontSize: 15}}/>} size={'middle'}>
                    შეცვალე პაროლი
                </Button>
            </Tooltip>
            <M
                style={{
                    borderRadius: 10
                }}
                okText={'შეცვალე პაროლი'}
                cancelText={'დახურვა'}
                title="შეცვალე პაროლი"
                centered
                visible={visible}
                onOk={onSubmit}
                confirmLoading={confirmLoading}
                onCancel={() => {
                    setVisible(false);
                    form.resetFields()
                }}>
                <Form
                    form={form}
                    labelCol={{span: 4}}
                    wrapperCol={{span: 14}}
                    layout="horizontal"
                >
                    <Form.Item
                        wrapperCol={{sm: 24}}
                        required
                        name={'current'}
                        rules={[{required: true, message: 'გთხოვთ შეიყვანოთ მიმდინარე პაროლი'}]}
                    >
                        <Input.Password placeholder={'მიმდინარე პაროლი... '}/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{sm: 24}}
                        required
                        name={'new'}
                        rules={[{required: true, message: 'გთხოვთ შეიყვანოთ ახალი პაროლი'}]}
                    >
                        <Input.Password placeholder={'ახალი პაროლი...'}/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{sm: 24}}
                        required
                        name={'confirm'}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('new') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}>
                        <Input.Password placeholder={'დაადასტურე პაროლი...'}/>
                    </Form.Item>
                </Form>
            </M>
        </Fragment>
    );
};

export default ChangePassword;
