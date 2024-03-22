import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/_layout/layout';

const Home = () => {
  /*const navigate = useNavigate();

  const handleSelectFolder = () => {
    navigate('/');
  };*/

  return (
    <Layout>
        <>
            Hola Mundo!
        </>
    </Layout>
  )
};

export default Home;