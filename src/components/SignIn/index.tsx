import { Form } from 'antd';
import { auth } from '../../adapters/helpers';
import {
    StyledButton,
    StyledDiv,
    StyledForm,
    StyledInput,
    InputWrapper
} from './styles'

const SignIn = () => {
    const onFinish = async (values: any) => {
        console.log(values)
        await auth.signInWithEmailAndPassword(values.username, values.password)
    };
    return (
        <StyledDiv>
            <StyledForm
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
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
            </StyledForm>
        </StyledDiv>
    )
}

export default SignIn
