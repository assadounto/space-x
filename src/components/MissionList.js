import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMission } from '../redux/missions/missions';
import Mission from './Mission';
import './Missionlist.css';

const Missions = () => {
  const mission = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mission.items.length === 0) {
      dispatch(getMission());
    }
  });
  return (
    <div className="mission-container">
      <div className="headings">
        <div className="mission-heading box-1"><h3>Mission</h3></div>
        <div className="mission-description box-2"><h3>description</h3></div>
        <div className="mission-status box-3"><h3>status</h3></div>
        <div className="mission-blank" />
      </div>
      <div className="mission-items">
        {
             mission.isFailed
               ? <div>Loading Failed</div>
               : (
                 <>
                   {
                mission.isLoading
                  ? <div>Loading...</div>

                  : mission.items.map(({
                    mission_name, mission_id, description, joined,
                  }) => (
                    <Mission
                      key={mission_id}
                      mission_id={mission_id}
                      description={description}
                      mission_name={mission_name}
                      joined={joined}
                    />
                  ))

              }
                 </>
               )
          }
      </div>
    </div>
  );
};
export default Missions;
