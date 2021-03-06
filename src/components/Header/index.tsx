import styled from "styled-components";
import {Button, Dropdown, Menu, Tooltip, Badge} from "antd";
import AddModal from "../main/addDocument";
import ChangePassword from "../changePassword/changePasswordModal";
import SignOut from "../SignOut";
import {Link} from "react-router-dom";
import logo from '../../../../students/src/static/images/logo.png'
import {NotificationOutlined} from '@ant-design/icons'
import {useCommentsStream} from '../../adapters/comments'
import {useSelector} from "react-redux";
import {selectors} from '../../modules/Auth';
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


const StyedLink = styled(Link)`
  display: flex;
  gap: .325rem;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  font-weight: 600;
  font-size: 1.25rem;
  color: #FFF;
  text-transform: uppercase;
  @media (max-width: 560px) {
    display: none;
  }
`;

const LogoIMG = styled.img`
  width: 50px;
`;

const Header = () => {
    const user = useSelector(selectors.selectUser);
    const messages = useCommentsStream(user.id);
    return (
        <HeaderContainer>
            <StyedLink to={"/"}>
                <LogoIMG src={logo} alt='logo' />
                <Span>სტუდენტური პორტალი</Span>
            </StyedLink>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Tooltip title="ახალი" placement="bottom">
                    <Link to={"/unseen"}>
                        <Badge count={messages?.length}>
                            <NotificationOutlined
                                style={{ fontSize: "1.25rem", color: "#fff", marginTop: 5 }}
                            />
                        </Badge>
                    </Link>
                </Tooltip>
                <DropdownMenu />
            </div>
        </HeaderContainer>
    )
}


export default Header
