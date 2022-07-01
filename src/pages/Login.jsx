import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 100px);
  color: ${({ theme }) => theme.text};
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to explore more</SubTitle>
        <Input placeholder="username" />
        <Input placeholder="password" type="password" />
        <Button>Sign In</Button>

        <Title>OR</Title>

        <Input placeholder="username" />
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        <Button>Sign Up</Button>
      </Wrapper>

      <More>
        Hindi (INDIA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms & Conditions</Link>
        </Links>
      </More>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background: transparent;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 10px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 20px;
`;

const Links = styled.div`
  margin-left: 40px;
`;

const Link = styled.span`
  margin-left: 10px;
`;
