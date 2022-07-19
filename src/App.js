import React from 'react';
import Header from "./components/header"
import {Routes,Route} from 'react-router-dom'
import bookService from './services/services'; 
import Rockets from './components/RocketList';
import Missions from './components/MissionList';
function App() {
    return(
      <>
        <Header/> 
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/misions" element={<Missions />} />
          <Route path="/my-profiles" element={<h1>My Profile</h1>} />
        </Routes>
      </>
    )
}
let b =bookService.getRockets().then(res=>res.data).then(data=>data.map((key) => ({
  rocket_name: key.rocket_name,
  id: key.id,
  description: key.description,
  flickr_images: key.flickr_images,
  
})))
console.log(b)

export default App