import React from 'react';

import AnnotationsHomeList from "../components/AnnotationsHomeList";
import StatementsHomeList from "../components/StatementsHomeList";

const Home = () => {
  return (
    <div className="home-grid-container" >
      <StatementsHomeList />
      <AnnotationsHomeList />
    </div>
  );
};

export default Home;
