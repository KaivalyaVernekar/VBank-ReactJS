import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <Container>
        <FormWrap>
          <Icon to="/">VBank</Icon>

          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="sumbit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </div>
  );
};

export default SignIn;

const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #000;
`;

const FormWrap = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  } ;
`;

const Icon = styled(LinkR)`
  margin-left: 52px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  } ;
`;

const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  } ;
`;

const Form = styled.form`
  background: #333;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 5px 8px rgba(34, 228, 214, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  } ;
`;

const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

const FormInput = styled.input`
  margin-bottom: 32px;
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
`;

const FormButton = styled.button`
  background: rgba(34, 228, 214, 0.8);
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5);
  }
`;

const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;
