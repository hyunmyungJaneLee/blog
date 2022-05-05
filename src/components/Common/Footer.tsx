import { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😊
      <br />© 2022 hyunmyung Lee, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;
