import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

export const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/QTSKOghd7aw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>

        <Title>INDIA TEST MATCH</Title>

        <Details>
          <Info>54,546,621 views • 1 mint ago</Info>
          <Buttons></Buttons>
        </Details>
      </Content>
      <Recommendation>Content</Recommendation>
    </Container>
  );
};

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Details = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

// const ChannelName = styled.h2`
//   font-size: 14px;
//   color: ${({ theme }) => theme.textSoft};
//   margin: 9px 0;
// `;

const Info = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div``;

const Recommendation = styled.div`
  flex: 2;
`;
