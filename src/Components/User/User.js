import React from 'react';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import { Routes, Route } from 'react-router-dom';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />

      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
