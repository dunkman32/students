import React, {useEffect} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Main from '../components/main'
import SignIn from '../components/SignIn'
import {auth} from '../adapters/helpers'
import {getStudent} from '../adapters/users'
import {useDispatch, useSelector} from 'react-redux'
import {actions, selectors} from '../modules/Auth';

const Components = () => {
    const user = useSelector(selectors.selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((user: any) => {
            if(user) {
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

    console.log(user, 'this is me');

    return user ? (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Main/>
                    </Route>
                </Switch>
            </Router>
        ) :
        (<SignIn/>)
}

export default Components;
