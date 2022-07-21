import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MyProfile from './components/Myprofile';
import Rockets from './components/RocketList';
import Missions from './components/MissionList';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/misions" element={<Missions />} />
        <Route path="/my-profiles" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
