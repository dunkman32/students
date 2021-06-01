import React from 'react';
import SignOut from '../SignOut';
import {selectors} from '../../modules/Auth';
import {useSelector} from "react-redux";

const Index = () => {
    const user = useSelector(selectors.selectUser)
    console.log(user);
    return (
        <div className="App">
          <h1>welcome back {user.name}</h1>
            <SignOut />
        </div>
    );
}

export default Index;
