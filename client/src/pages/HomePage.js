import React from 'react';
import "./HomePage.css";
import Feed from '../../src/components/feed/Feed'
import Leftbar from '../components/leftbar/Leftbar';
import Rightbar from '../components/rightbar/Rightbar';

const HomePage = () => {
  return <div className = "Home">
  <div className='devConnect'>
    <div className='homeContainer'>
    <Leftbar/>  
    <Feed/>
    <Rightbar/>
    </div>
  </div>  
</div>;
};


export default HomePage;
