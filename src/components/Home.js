// App.js
import React from 'react';
import Sidebar from './UI/Sidebar';
import MainContent from './UI/MainContent';

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <MainContent />
      
    </div>
  );
};

export default Home;