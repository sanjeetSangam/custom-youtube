import React from "react";
import styled from "styled-components";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import { Comments } from "../components/Comments";
import { Card } from "../components/Card";

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
          <Buttons>
            <Button>
              <ThumbUpIcon /> 12k
            </Button>
            <Button>
              {" "}
              <ThumbDownIcon /> Dislike
            </Button>
            <Button>
              {" "}
              <ShareIcon /> Share
            </Button>
          </Buttons>
        </Details>

        <Hr />

        <Channel>
          <ChannelInfo>
            <Image src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/15/f7be6c3b93c4e246c059e52db6ce8f71_original.jpg" />

            <ChannelDetails>
              <ChannelName>SUNNY PAJI</ChannelName>
              <ChannelCounter>500K subscribers</ChannelCounter>

              <ChannelDesc>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                perspiciatis deserunt quia nemo veniam at. Porro omnis dolorem
                sit! Eveniet vel omnis excepturi harum ut corrupti, aut nesciunt
                rerum aspernatur, asperiores eos necessitatibus. Ipsa velit
                pariatur eius minima corrupti doloribus saepe atque voluptatibus
                deleniti rem maxime iusto quasi odit, dolore iste commodi autem
                magnam molestias laborum. A veniam earum fugiat numquam, vitae
                deleniti sequi accusantium, iste tempore aut architecto sed
                mollitia neque autem maxime unde. Assumenda aliquam fuga dolores
                ratione! Quod, neque. Delectus ea fugit rerum cum quaerat
                soluta, beatae ad dolorum sint maiores aliquam consequuntur
                doloremque, officia dolore laudantium!
              </ChannelDesc>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>

        <Hr />

        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Subscribe = styled.button`
  background: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 600;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const ChannelDesc = styled.p`
  font-size: 14px;
`;

const Recommendation = styled.div`
  flex: 2;
`;
