import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

export const Comment = () => {
  return (
    <Container>
      <Avatar src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/15/f7be6c3b93c4e246c059e52db6ce8f71_original.jpg" />
      <Details>
        <Name>
          SaNU <Date>15 Aug, 199</Date>
        </Name>

        <Text>How are you? Snny</Text>
      </Details>
    </Container>
  );
};

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;
