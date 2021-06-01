import { useState } from 'react';
import { Form } from 'antd';
import { auth } from '../../adapters/helpers';
import {
    StyledButton,
    StyledDiv,
    StyledForm,
    StyledInput,
    InputWrapper,
    ErrorWrapper
} from './styles'

interface ErrState {
    code?: string,
    message?: string,
    a?: unknown
}

const SignIn = () => {
    const [loginErr, setLoginErr] = useState<ErrState>({});
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        try {
            await auth.signInWithEmailAndPassword(values.username, values.password);
            setLoginErr({});
        } catch (error) {
            onReset();
            setLoginErr(error);
        }
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <StyledDiv>
            <StyledForm
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onReset={onReset}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                    style={{ marginBottom: 25, color: 'red' }}
                >
                    <InputWrapper>
                        <StyledInput type={'email'} placeholder={'Enter Email'} />
                    </InputWrapper>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                    style={{ color: 'red' }}
                >
                    <InputWrapper>
                        <StyledInput type="password" placeholder={'Enter Password'} />
                    </InputWrapper>
                </Form.Item>
                <Form.Item>
                    <StyledButton
                        block
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        Log in
                    </StyledButton>
                </Form.Item>
                {Object.keys(loginErr).length ? <ErrorWrapper>
                    {loginErr?.code === 'auth/user-not-found' ? "User doesn't exist" : 'Incorect Credintials'}
                </ErrorWrapper> : null}
            </StyledForm>
        </StyledDiv>
    )
}

export default SignIn
