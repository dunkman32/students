import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: -10rem;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20rem;
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`
const Username = styled.span`
  color: #fefae0;
  font-size: 1.25rem;
  font-weight: bold;
`

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: #282c34 1px solid;
  border-radius: 20px;
`

const Index = ({ user }: any) => {
  return user && (
    <Container>
      <FlexDiv>
        <Img src={user.img} alt={'student'} />
        <Username>{user.name}'s documents list</Username>
      </FlexDiv>
    </Container>
  );
}

export default Index;
