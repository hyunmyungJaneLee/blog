import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/Profile';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 400px;
  margin: 0 auto;
  line-height: 80px;
  font-size: 35px;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 100%;
    height: 230px;
    padding: 0 20px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;
  span {
    font-size: 20px;
    vertical-align: top;
    position: relative;
    &.bracket {
      font-size: 20px;
      color: #34c1ed;
    }
    &.tagname {
      font-size: 25px;
      margin: 0 1px;
      letter-spacing: -2px;
      color: #326faf;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
    span {
      &.tagname {
        font-size: 21px;
        display: none;
      }
    }
  }
`;

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <Title>
          <span className="bracket">&lt;</span>
          <span className="tagname">h1</span>
          <span className="bracket">&gt;</span>
          Today I Learned; 기억 아카이브
          <span className="bracket">&lt;/</span>
          <span className="tagname">h1</span>
          <span className="bracket">&gt;</span>
        </Title>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
