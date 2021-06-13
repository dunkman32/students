import './style.css'
import { Fragment } from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { selectors } from '../../modules/Auth';
import SignOut from '../SignOut';
import AddModal from './addDocument'
import ChangePassword from "../changePassword/changePasswordModal";
import {Dropdown, Menu, Tooltip} from "antd";
import {SettingFilled} from "@ant-design/icons";


const menu = (
    <Menu>
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

const Settings = styled(SettingFilled)`
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  transform: rotate(-90deg);
  transition: all .5s ease-in-out;
  :hover {
    transform: rotate(90deg);
    transition: all .5s ease-in-out;
  }
`

const DropdownMenu = () => (
    <Dropdown key="more" overlay={menu}>
               <Settings />
    </Dropdown>
);


const Index = () => {
    const user = useSelector(selectors.selectUser);
    return (
        <Fragment>
            <HeaderContainer>
                <div style={{ color: '#FFF', fontSize: 20 }}>სტუდენტის პორტალი</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <DropdownMenu />
                </div>
            </HeaderContainer>
            <div className="container" style={{ width: '95%', marginTop: 50 }}>
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="user-card">
                            <div className="card-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div className="account-settings">
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <img src={user.img} alt="მომხმარებლის სურათი" />
                                        </div>
                                        <h5 className="user-name">{user.name}</h5>
                                        <h6 className="user-email">{user.email}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row gutters">
                                    <div style={{ fontSize: 20, marginBottom: 15 }}>
                                        <h6 className="mb-2 text-primary" style={{ fontSize: 20, textTransform: 'uppercase' }}>
                                            პერსონალური ინფორმაცია
                                        </h6>
                                    </div>

                                    <div style={{ marginBottom: 15 }}>
                                        <div className="form-group">
                                            <label htmlFor="fullName" style={{ marginBottom: 5, fontSize: 15, cursor: 'pointer' }}>კამპუსი</label>
                                            <input type="text" className="form-control" id="fullName" readOnly value={user.campus} />
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: 15 }}>
                                        <div className="form-group">
                                            <label htmlFor="fullName" style={{ marginBottom: 5, fontSize: 15, cursor: 'pointer' }}>ბინის ნომერი</label>
                                            <input type="text" className="form-control" id="fullName" readOnly value={user.no} />
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: 15, }}>
                                        <div className="form-group">
                                            <label htmlFor="eMail" style={{ marginBottom: 5, fontSize: 15, cursor: 'pointer' }}>დაბადების თარიღი</label>
                                            <input type="email" className="form-control" id="eMail" readOnly value={new Date(user.birth).toLocaleDateString('ka-GE')} />
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: 15 }}>
                                        <div className="form-group">
                                            <label htmlFor="phone" style={{ marginBottom: 5, fontSize: 15, cursor: 'pointer' }}>ელ-ფოსტა</label>
                                            <input type="text" className="form-control" id="phone" readOnly value={user.email} />
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: 15 }}>
                                        <div className="form-group">
                                            <label htmlFor="website" style={{ marginBottom: 5, fontSize: 15, cursor: 'pointer' }}>ტელეფონის ნომერი</label>
                                            <input type="url" className="form-control" id="website" readOnly value={user.phoneNumber} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Index;

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
