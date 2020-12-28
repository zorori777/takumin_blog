import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
// import About from '../sections/About';
// import Projects from '../sections/Projects';
import Post from '../sections/Post';

const IndexPage = () => (
  <Layout>
    <Landing />
    <Post />
  </Layout>
);

export default IndexPage;
