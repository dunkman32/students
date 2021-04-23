import React, {useEffect, useState} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Main from '../components/main'
import SignIn from '../components/SignIn'
import {auth} from '../adapters/helpers'

const Components = () => {
    const [user, setUser] = useState<any>(null)
    useEffect(() => {
        auth.onAuthStateChanged((user: any) => {
            setUser(user)
        });
    }, []);

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
