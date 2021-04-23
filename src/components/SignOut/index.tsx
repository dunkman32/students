import {auth} from "../../adapters/helpers";
import React from "react";
import {Button, Tooltip} from "antd";
import {LogoutOutlined} from "@ant-design/icons";
const SignOut = () => {
    const signOut = () => {
        auth.signOut().then(() => {}).catch((e) => console.log(e))
    }
    return (
        <Tooltip title="Sign Out">
            <Button onClick={signOut} icon={<LogoutOutlined/>}/>
        </Tooltip>
    )
}

export default SignOut
