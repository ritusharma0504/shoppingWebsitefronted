import React from 'react';
import Navbar from './Components/Navbar';
import Carsouel from './Components/Carsouel';
import Card from './Components/Card';
function Home() {
  return (
    <>
     <Navbar/>
     <Carsouel/>
     <div className="container">
        <div className="row">
          <div className="col ">
            <Card />
          </div>
          <div className="col ">
            <Card />
          </div>
          <div className="col ">
            <Card />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;