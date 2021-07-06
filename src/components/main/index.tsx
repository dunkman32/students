import './style.css'
import {useSelector} from "react-redux";
import {selectors} from '../../modules/Auth';
import Footer from "../Footer";

const Index = () => {
    const user = useSelector(selectors.selectUser);
    return (
        <>
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
                                            <label htmlFor="no" style={{ marginBottom: 5, fontSize: 15, cursor: 'pointer' }}>ბინის ნომერი</label>
                                            <input type="text" className="form-control" id="no" readOnly value={user.no} />
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: 15, }}>
                                        <div className="form-group">
                                            <label htmlFor="birth" style={{ marginBottom: 5, fontSize: 15, cursor: 'pointer' }}>დაბადების თარიღი</label>
                                            <input type="email" className="form-control" id="birth" readOnly value={new Date(user.birth).toLocaleDateString('ka-GE')} />
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: 15 }}>
                                        <div className="form-group">
                                            <label htmlFor="email" style={{ marginBottom: 5, fontSize: 15, cursor: 'pointer' }}>ელ-ფოსტა</label>
                                            <input type="text" className="form-control" id="email" readOnly value={user.email} />
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: 15 }}>
                                        <div className="form-group">
                                            <label htmlFor="tel" style={{ marginBottom: 5, fontSize: 15, cursor: 'pointer' }}>ტელეფონის ნომერი</label>
                                            <input type="url" className="form-control" id="tel" readOnly value={user.tel} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Index;

