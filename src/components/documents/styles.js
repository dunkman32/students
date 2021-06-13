import styled from "styled-components";
import {Table} from "antd";

const Img = styled.img`
  max-width: 100px;
  height: 50px;
  cursor: pointer;
  border: 1px solid #282c34;
`
const Document = styled.img`
  width: 150px;
  cursor: pointer;
  border: 1px solid #282c34;
  @media (max-width: 560px) {
    width: 100%;
  }
`
const Doc = styled.div`
  display: none;
  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
  }
`

const Doc2 = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 560px) {
    display: none;
  }
`

const Doc2Info = styled.div`
  display: flex;
  margin-left: 1rem;
  flex-direction: column;
  gap: .5rem;
  justify-content: center;
  align-items: flex-end;
`

const Span = styled.span`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`

const Span2 = styled.span`
  font-size: 1.5rem;
  color: #fff;
`

const Span3 = styled.span`
  font-size: 1rem;
  color: #fff;
  max-width: fit-content;
`

const SmallInfoDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`


export {
    Img,
    Document,
    Doc,
    Doc2,
    Span,
    Doc2Info,
    Span2,
    Span3,
    SmallInfoDiv,
}

