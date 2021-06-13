import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "../../modules/Documents";
import { selectors as authSelector} from "../../modules/Auth";
import TableComponent from './table';
import User from './user';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Container = styled.div`
  box-shadow: -1px -1px 6px 1px rgba(0,0,0,0.1);
  width: 96%;
  position: relative;
  margin: 10rem auto 0;
  background-color: #282c34;
  padding: 5rem;
  border-radius: 20px;
`

enum Status {
    Pending= 'Pending',
    Approved= 'Approved',
    Rejected= 'Rejected',
}

const Index = () => {
    const dispatch = useDispatch()
    const [status, setStatus] = useState('')
    const user = useSelector(authSelector.selectUser)
    const {data: rows} = useSelector(selectors.selectList)
    console.log(rows, 'ssss');
    useEffect(() => {
        dispatch(actions.listById.request(user.uid, status))
    }, [dispatch, user.uid, status])

    return (
        <Container>
            <User user={user} />
            <Tabs
                tabBarStyle={{
                    color: '#fefae0'
                }}
                onChange={setStatus}>
                <TabPane tab={'All'} key={''} />
                <TabPane tab={Status.Pending} key={Status.Pending} />
                <TabPane tab={Status.Approved} key={Status.Approved}/>
                <TabPane tab={Status.Rejected} key={Status.Rejected}/>
            </Tabs>
            {
                rows && <TableComponent data={rows} />
            }
        </Container>
    );
}

export default Index;
