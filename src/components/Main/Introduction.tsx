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
  height: 310px;
  margin: 0 auto;
  line-height: 80px;
  font-size: 35px;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 100%;
    height: 130px;
    padding: 0 20px;
    .gatsby-image-wrapper {
      display: none;
    }
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  /* color: #5e4307; */
  span {
    font-size: 20px;
    vertical-align: top;
    position: relative;
    &.bracket {
      font-size: 30px;
      color: #34c1ed;
    }
    &.slash {
      font-size: 25px;
      color: #34c1ed;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
    span {
      &.bracket {
        font-size: 20px;
      }
      &.slash {
        font-size: 20px;
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
          {/* <span className="tagname">h1</span> */}
          <span className="bracket">&gt;</span>
          TIL; 기억 아카이브
          <span className="bracket">&lt;</span>
          <span className="slash">/</span>
          {/* <span className="tagname">h1</span> */}
          <span className="bracket">&gt;</span>
        </Title>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
