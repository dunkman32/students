import './style.css'
import { Fragment } from 'react';
import { useSelector } from "react-redux";
import styled from 'styled-components';
import { selectors } from '../../modules/Auth';
import SignOut from '../SignOut';
import AddModal from './addDocument'

const Index = () => {
    const user = useSelector(selectors.selectUser);

    return (
        <Fragment>
            <div>
                <HeaderContainer>
                    <div style={{ color: '#FFF', fontSize: 20 }}>სტუდენტი</div>
                    <span style={{ display: 'flex', alignItems: 'center' }}><AddModal /><SignOut /></span>
                </HeaderContainer>
                <div className="container" style={{backgroundColor: 'transparent', height: '100vh', width: '75%'}}>
                    <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
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
                                            <h6 className="mb-2 text-primary" style={{ fontSize: 20 }}>პერსონალური ინფორმაცია</h6>
                                        </div>

                                        <div style={{ marginBottom: 15 }}>
                                            <div className="form-group">
                                                <label htmlFor="fullName" style={{ marginBottom: 5, fontSize: 15 }}>კამპუსი</label>
                                                <input type="text" className="form-control" id="fullName" placeholder="Enter full name" readOnly value={user.campus} />
                                            </div>
                                        </div>
                                        <div style={{ marginBottom: 15, }}>
                                            <div className="form-group">
                                                <label htmlFor="eMail" style={{ marginBottom: 5, fontSize: 15 }}>დაბადების თარიღი</label>
                                                <input type="email" className="form-control" id="eMail" readOnly placeholder="Enter email ID" value={new Date(user.birth).toLocaleDateString('ka-GE')} />
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: 15 }}>
                                            <div className="form-group">
                                                <label htmlFor="phone" style={{ marginBottom: 5, fontSize: 15 }}>ელ-ფოსტა</label>
                                                <input type="text" className="form-control" id="phone" readOnly placeholder="Enter phone number" value={user.email} />
                                            </div>
                                        </div>
                                        <div style={{ marginBottom: 15 }}>
                                            <div className="form-group">
                                                <label htmlFor="website" style={{ marginBottom: 5, fontSize: 15 }}>ტელეფონის ნომერი</label>
                                                <input type="url" className="form-control" id="website" readOnly placeholder="ტელეფონის ნომერი" value={user.phoneNumber} />
                                            </div>
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
`;
