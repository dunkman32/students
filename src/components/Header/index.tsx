import styled from "styled-components";
import {Button, Dropdown, Menu} from "antd";
import AddModal from "../main/addDocument";
import ChangePassword from "../changePassword/changePasswordModal";
import SignOut from "../SignOut";
import {Link} from "react-router-dom";


const HeaderContainer = styled.div`
  height: 4rem;
  background-color: #212738;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  text-transform: uppercase;
  box-shadow: 0 0 20px 0 rgba(69, 90, 100, .9);
`;

const menu = (
    <Menu>
        <Menu.Item>
            <Link to={'documents'}>
                <Button type={'link'} style={{width: '100%'}} className="ant-dropdown-link">
                    დოკუმენტები
                </Button>
            </Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <AddModal />
        </Menu.Item>
        <Menu.Item>
            <ChangePassword />
        </Menu.Item>
        <Menu.Divider />
        <SignOut />
    </Menu>
);

const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu}>
        <Button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            პარამეტრები
        </Button>
    </Dropdown>
);


const Header = () => {
    return (
        <HeaderContainer>
            <Link to={'/'}>
                <div style={{ color: '#FFF', fontSize: 20 }}>სტუდენტის პორტალი</div>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <DropdownMenu />
            </div>
        </HeaderContainer>
    )
}


export default Header
