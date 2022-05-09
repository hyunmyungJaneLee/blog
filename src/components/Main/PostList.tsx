import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import PostThumbnail from '../../images/PostThumbnail.jpeg';

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
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
        thumbnail={PostThumbnail}
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail={PostThumbnail}
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail={PostThumbnail}
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail={PostThumbnail}
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail={PostThumbnail}
        link="link"
      />
      <PostItem
        title="title"
        date="data"
        categories={['web', 'sdfsdf', 'sdfsfd']}
        summary="summary"
        thumbnail={PostThumbnail}
        link="link"
      />
    </PostListWrapper>
  );
};

export default PostList;
