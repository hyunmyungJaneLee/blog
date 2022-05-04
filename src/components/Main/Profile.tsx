import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Image from '../../images/profile.jpeg';

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK = Image;

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`;

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;
