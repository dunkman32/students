import {Button, Tooltip} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {auth} from "../../adapters/helpers";
import {actions} from '../../modules/Auth';


const SignOut = () => {
    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut().then(() =>
            dispatch(actions.user.remove())
        ).catch((e) => console.log(e))
    }
    return (
        <Tooltip title="გამოსვლა">
            <Button onClick={signOut} style={{ width: '100%' }} type="primary" icon={<LogoutOutlined style={{ fontSize: 15 }} />} size={'middle'}>
                გასვლა
            </Button>
        </Tooltip>
    )
};

export default SignOut;

