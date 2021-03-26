import React from 'react';
import Userpost from './endpoints/Userpost';
import TokenPost from './endpoints/TokenPost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <Userpost />

      <h2>Token POST</h2>
      <TokenPost />

      <h2>Photo POST</h2>
      <PhotoPost />

      <h2>Photo POST</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
