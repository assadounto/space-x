import { useSelector } from "react-redux/es/exports";

const Myprofile = () => {
  const user = useSelector((state) => state.rockets);
  const myprofile=user.items.filter((item)=>item.reserved===true);
  return (
    <div className="myprofile">
        <h2>My Rockets</h2>
    { myprofile.map(({
        rocket_name, id
      }) => (
        <div className="myprofile-cont" key={id}>
    
          <div className='profile-name'>{rocket_name}</div>
        </div>  
      ))}
       </div>
  );
   
}

export default Myprofile;
import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reservedMissions = useSelector((state) => state.missions.items.filter((mission) => mission.joined));
  return (
    <div className="my-profile-section">
      <div>
        <h3>My Missions</h3>
        {reservedMissions.length > 0 && reservedMissions.map((mission) => (
          <div key={mission.mission_id}>
            <p>{mission.mission_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
