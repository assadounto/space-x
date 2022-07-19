import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMission } from "../redux/missions/missions";
import Mission from "./Mission";

const Missions = () => {
    const mission = useSelector((state) => state.missions);
    console.log(mission);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMission());
    },[dispatch]);
    return (
        <div className="mission-container">
            <div className="headings">
                <div className="mission-name"><h4>Mission</h4></div>
                <div className="mission-description"><h4>description</h4></div>
                <div className="mission-status"><h4>status</h4></div>
                <div className="mission-blank"></div>
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
                    mission_name, mission_id, description, joined
                  }) => (
                    <Mission
                      key={mission_id}
                      id={mission_id}
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
    )
};
export default Missions;