import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Image from '../../images/profile.jpeg';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin: 30px 0;
  border-radius: 50%;
  isolation: isolate;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

type ProfileImageProps = {
  profileImage: IGatsbyImageData;
};

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />;
};

export default ProfileImage;
