import { Button, Tooltip } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { auth } from "../../adapters/helpers";
import { actions } from '../../modules/Auth';

const iconStyles = {
    fontSize: 15, justifyContent: 'center', alignItems: 'center', display: 'flex'
};

const SignOut = () => {
    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut().then(() =>
            dispatch(actions.user.remove())
        ).catch((e) => console.log(e))
    }
    return (

        <Tooltip title="გამოსვლა">
            <Button onClick={signOut} type='default' icon={<LogoutOutlined style={iconStyles} />} size={'middle'} />
        </Tooltip>
    )
};

export default SignOut;

