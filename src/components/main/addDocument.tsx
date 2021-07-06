import {useCallback, useState, Fragment} from 'react';
import {Button, Form, Input, Modal, Select} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {addDocument} from '../../adapters/upload';
import {useSelector} from "react-redux";
import {selectors} from '../../modules/Auth';

const {Option} = Select;

const {TextArea} = Input;

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
                console.log(values);
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
    }, [user, file, form]);

    const onFileChoose = (e: any) => {
        const files = e.target.files;
        setFile(files[0])
    };

    return (
        <Fragment>
            <Button onClick={() => setVisible(true)} style={{width: '100%'}} type="primary"
                    icon={<UploadOutlined style={{fontSize: 15}}/>} size={'middle'}>
                ატვირთვა
            </Button>
            <Modal
                okText={'ატვირთვა'}
                cancelText={'დახურვა'}
                title="დოკუმენტის ატვირვა"
                centered
                visible={visible}
                onOk={onSubmit}
                confirmLoading={confirmLoading}
                onCancel={() => {
                    setVisible(false);
                    form.resetFields()
                }}
                width={700}>
                <Form
                    form={form}
                    labelCol={{span: 4}}
                    wrapperCol={{span: 14}}
                    layout="horizontal"
                >
                    <Form.Item
                        name={'ფაილი'}
                        label="ფაილი"
                        rules={[{required: true, message: 'აირჩიეთ ფაილი'}]}
                    >
                        <Input type='file' onChange={onFileChoose}/>
                    </Form.Item>
                    <Form.Item
                        name={'month'}
                        label="თვე"
                        rules={[{required: true, message: 'აირჩიეთ თვე'}]}
                    >
                        <Select
                            showSearch
                            style={{width: 200}}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            filterOption={(input: string, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                MonthArray.map((m) => (
                                    <Option value={m.value}>{m.label}</Option>

                                ))
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={'desc'}
                        label="კომენტარი"
                        rules={[{required: true, message: 'შეიყვანეთ კომენტარი'}]}
                    >
                        <TextArea showCount maxLength={100} placeholder={'შეიყვანეთ კომენტარი...'}/>
                    </Form.Item>
                </Form>
            </Modal>
        </Fragment>
    );
};

const MonthArray = [
    {value: 0, label: 'იანვარი'},
    {value: 1, label: 'თებერვალი'},
    {value: 2, label: 'მარტი'},
    {value: 3, label: 'აპრილი'},
    {value: 4, label: 'მაისი'},
    {value: 5, label: 'ივნისი'},
    {value: 6, label: 'ივლისი'},
    {value: 7, label: 'აგვისტო'},
    {value: 8, label: 'სექტემბერი'},
    {value: 9, label: 'ოქტომბერი'},
    {value: 10, label: 'ნოემბერი'},
    {value: 11, label: 'დეკემბერი'},
]


export default AddModal;
