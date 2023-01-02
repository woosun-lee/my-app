import React from 'react';
import { Navigate } from 'react-router-dom';

function Profile({ authenticated, user }) {
  
  if (!authenticated) return <Navigate to="/login" />;

  const { data, password, name } = user || {};

  console.log(authenticated);
  console.log(user);

  return (
    <>
      <h1>Profile</h1>
      <dt>Email</dt>
      <dd>{data}</dd>
      <dt>Password</dt>
      <dd>{password}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
    </>
  );
}

export default Profile;