import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const reservedMissions = useSelector((state) => state.missions.items.filter((mission) => mission.joined));
  return (
    <div className="my-profile">
      <div>
        <h3>My Missions</h3>
        {reservedMissions.length > 0 && reservedMissions.map((mission) => (
          <div className="mission" key={mission.mission_id}>
            <p>{mission.mission_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
