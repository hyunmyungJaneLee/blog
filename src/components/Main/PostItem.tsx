import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type PostItemProps = {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: string;
  link: string;
};

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link,
}) {
  return (
    <PostItemWrapper to="/">
      <ThumbnailImage src={thumbnail} alt="Post Item Image" />
      <PostItemContent></PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
