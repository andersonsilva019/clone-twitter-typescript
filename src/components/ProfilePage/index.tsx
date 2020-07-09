import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  EditButton,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Anderson silva</h1>
        <h2>@andersonsilva019</h2>

        <p>Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Ceará, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 15 de janeiro de 2001
          </li>
        </ul>
        <Followage>
          <span>
            Seguindo <strong>36</strong>
          </span>
          <span>
            <strong>36 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
