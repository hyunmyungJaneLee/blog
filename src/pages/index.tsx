import React, { FunctionComponent } from 'react';
import Text from 'components/Text';
import { Link } from 'gatsby';
import GlobalStyle from 'components/Common/GlobalStyle';
import ProfileImage from 'components/Main/Profile';
import styled from '@emotion/styled';
import Introduction from 'components/Main/Introduction';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
    </Container>
  );
};

export default IndexPage;
