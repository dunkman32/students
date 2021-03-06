import {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from '../components/main'
import Document from '../components/documents'
import Footer from '../components/Footer'
import SignIn from '../components/SignIn'
import {auth} from '../adapters/helpers'
import {getStudent} from '../adapters/users'
import {useDispatch, useSelector} from 'react-redux'
import {actions, selectors} from '../modules/Auth';
import Header from "./Header";
import UnSeenMessages from "./UnSeenMessages";

const Components = () => {
    const user = useSelector(selectors.selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((user: any) => {
            if (user) {
                const tmpUser = {
                    ...user.providerData[0],
                    id: user.uid
                }
                getStudent(user.uid).then((r) => {
                    dispatch(actions.user.add({
                        ...tmpUser,
                        ...r.data()
                    }))
                }).catch((e) => console.log(e))
            }
        });
    }, [dispatch]);

    return user ? (
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path={'/documents'} exact component={Document} />
                    <Route path={'/unseen'} exact component={UnSeenMessages} />
                </Switch>
            </Router>
        ) :
        (<SignIn/>)
}

export default Components;
