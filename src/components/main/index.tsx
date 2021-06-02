import React from 'react';
import SignOut from '../SignOut';
import {selectors} from '../../modules/Auth';
import {useSelector} from "react-redux";
import AddModal from './addDocument'
const Index = () => {
    const user = useSelector(selectors.selectUser)

    return (
        <div className="App">
            <AddModal />
          <h1>welcome back {user.name}</h1>
            <SignOut />
        </div>
    );
}

export default Index;
