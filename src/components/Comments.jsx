import React from "react";

import styled from "styled-components";
import { Comment } from "./Comment";

const Container = styled.div``;

export const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://feeds.abplive.com/onecms/images/uploaded-images/2021/10/15/f7be6c3b93c4e246c059e52db6ce8f71_original.jpg" />

        <Input placeholder="Enter Comment" />
      </NewComment>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

const NewComment = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.Soft};
  background: none;
  outline: none;
  padding: 5px;
  width: 100%;
`;
