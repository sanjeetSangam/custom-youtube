import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  width: ${({ type }) => type !== "sm" && "360px"};
  margin-bottom: ${({ type }) => (type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  z-index: 2;
  display: ${({ type }) => type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${({ type }) => (type === "sm" ? "120px" : "202px")};
  background: #999;
  flex: 1;
`;

export const Card = ({ type }) => {
  return (
    <Link to="/video/test">
      <Container type={type}>
        <Image
          type={type}
          src="https://images.mygoodtimes.in/wp-content/uploads/2019/11/08053906/gadar.jpg"
        />

        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/15/f7be6c3b93c4e246c059e52db6ce8f71_original.jpg"
          />

          <Texts>
            <Title>Ek Prem Katha</Title>
            <ChannelName>Sunny Paji</ChannelName>
            <Info>54,546,621 views • 1 mint ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #999;
  display: ${({ type }) => type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
