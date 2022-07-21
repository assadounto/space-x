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
        <div className="mission-description-headline box-2"><h3>Description</h3></div>
        <div className="mission-status box-3"><h3>Status</h3></div>
        <div className="mission-blank box-3" />
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
                    missionName, missionId, description, joined,
                  }) => (
                    <Mission
                      key={missionId}
                      missionId={missionId}
                      description={description}
                      missionName={missionName}
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
