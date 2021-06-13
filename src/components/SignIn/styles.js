import styled from "styled-components";
import { Button, Form, Input } from "antd";

const StyledDiv = styled.div`
  display: flex;
  background: linear-gradient(#fefae0, #e5e5e5);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StyledForm = styled(Form)`
  box-shadow: -1px -1px 6px 1px rgba(0,0,0,0.1);
  background-color: #f8f9fa;
  border-radius: 10px;
  z-index: 1;
  padding: 20px 20px;
  min-width: 300px;
`;

const StyledInput = styled(Input)`
  outline: none;
  border: none;
  color: #333;
  line-height: 1.2;
  font-size: 14px;
  display: block;
  width: 100%;
  background: 0 0;
  height: 60px;
  padding: 0 20px;
`
const InputWrapper = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
`;

const StyledButton = styled(Button)`
  height: 60px;
  background-color: #333;
  color: white;
  padding: 15px;
  border-radius: 6px;
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
  width: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color .4s;
  &:hover {
    background-color: #5c6b73
  };
  &:active {
    background-color: #000
  }
`;

const ErrorWrapper = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 20px;
  text-transform: uppercase;
  color: red; 
`;

const LoginText = styled.div`
  position: relative;
  top: -5px;
  bottom: 50px;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  color: #212738;
`;

export {
  StyledDiv,
  StyledForm,
  StyledInput,
  StyledButton,
  InputWrapper,
  ErrorWrapper,
  LoginText
};