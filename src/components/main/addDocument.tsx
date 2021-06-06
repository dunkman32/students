import { useCallback, useState, Fragment } from 'react';
import { Button, Form, Input, Modal, Tooltip } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { addDocument } from '../../adapters/upload';
import { useSelector } from "react-redux";
import { selectors } from '../../modules/Auth';

const AddModal = () => {
    const [form] = Form.useForm();
    const user = useSelector(selectors.selectUser)
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [file, setFile] = useState(null);

    const onCreate = (values: any) => {
        if (values.desc || values.file) {
            setConfirmLoading(true);
            uploadData(values);
        } else return null;
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

    const uploadData = useCallback((o) => {
        addDocument({
            userId: user.uid,
            username: user.name,
            ...o,
            file,
            createdAt: new Date().getTime()
        }).then(() => {
            setConfirmLoading(false);
            setVisible(false);
            form.resetFields();
        }).catch((err) => console.log(err))
    }, [user, file]);

    const onFileChoose = (e: any) => {
        const files = e.target.files;
        setFile(files[0])
    };

    return (
        <Fragment>
            <Tooltip title="დოკუმენტის ატვირთვა" placement="bottom">
                <Button onClick={() => setVisible(true)} style={{ marginRight: 10 }} type="primary" icon={<UploadOutlined style={{ fontSize: 15 }} />} size={'middle'}>
                    ატვირთვა
                </Button>
            </Tooltip>
            <Modal
                title="დოკუმენტის ატვირვა"
                centered
                visible={visible}
                onOk={onSubmit}
                confirmLoading={confirmLoading}
                onCancel={() => { setVisible(false); form.resetFields() }}
                width={700}>
                <Form
                    form={form}
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Form.Item name={'ფაილი'} label="ფაილი" rules={[{ required: true, message: 'აირჩიეთ ფაილი' }]}>
                        <Input type='file' onChange={onFileChoose} />
                    </Form.Item>
                    <Form.Item name={'desc'} label="კომენტარი" rules={[{ required: true, message: 'შეიყვანეთ კომენტარი' }]}>
                        <Input placeholder={'შეიტანეთ კომენტარი...'} />
                    </Form.Item>
                </Form>
            </Modal>
        </Fragment>
    );
};

export default AddModal;
