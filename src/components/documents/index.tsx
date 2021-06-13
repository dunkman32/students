import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {actions, selectors} from "../../modules/Documents";
import {selectors as authSelector} from "../../modules/Auth";
import TableComponent from './table';
import {Tabs} from 'antd';

const { TabPane } = Tabs;

const Container = styled.div`
  box-shadow: -1px -1px 6px 1px rgba(0,0,0,0.1);
  width: 96%;
  position: relative;
  margin: 2rem auto 0;
  background-color: #282c34;
  padding: 5rem;
  border-radius: 20px;
  @media (max-width: 992px) {
    padding: 1rem;
  }
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
            <Tabs
                tabBarStyle={{
                    color: '#fefae0'
                }}
                onChange={setStatus}>
                <TabPane tab={'ყველა'} key={''} />
                <TabPane tab={'განუხილავი'} key={Status.Pending} />
                <TabPane tab={'დადასტურებული'} key={Status.Approved}/>
                <TabPane tab={'უარყოფილი'} key={Status.Rejected}/>
            </Tabs>
            {
                rows && <TableComponent data={rows} />
            }
        </Container>
    );
}

export default Index;
