import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`;

const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem
        title="Post Item Title... Post Item Title...Post Item Title...Post Item Title...Post Item Title...Post Item Title..."
        date="2020.01.29."
        categories={[
          'Web',
          'Frontend',
          'Testing',
          'Web',
          'Frontend',
          'Testing',
          'Web',
          'Frontend',
          'Testing',
        ]}
        summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!"
        thumbnail="NOIMAGE"
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail="NOIMAGE"
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail="NOIMAGE"
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail="NOIMAGE"
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail="NOIMAGE"
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail="NOIMAGE"
        link="link"
      />
    </PostListWrapper>
  );
};

export default PostList;
