import {Button} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {auth} from "../../adapters/helpers";
import {actions} from '../../modules/Auth';
import styled from "styled-components";


const BTN = styled(Button)`
  background-color: transparent;
  border-color: transparent;
`

const SignOut = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        auth.signOut().then(() =>
            dispatch(actions.user.remove())
        ).catch((e) => console.log(e))
    }
    return (
        <BTN onClick={signOut} style={{width: '100%'}} icon={<LogoutOutlined style={{fontSize: 15}}/>}
                size={'middle'}>
            გასვლა
        </BTN>
    )
};

export default SignOut;

