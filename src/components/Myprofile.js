import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';
import './MyProfile.css';

const Myprofile = () => {
  const user = useSelector((state) => state.rockets);
  const reservedMissions = useSelector(
    (state) => state.missions.items.filter((mission) => mission.joined),
  );
  const myprofile = user.items.filter((item) => item.reserved === true);
  return (
    <div className="myprofile">
      <div className="my-profile-rocket-section">
        <h2 className="rocket-profile-headline">My Rockets</h2>
        { myprofile.length === 0 ? (
          <div className="Info">
            Ooops! You do not have any rockets yet.
            Click
            {' '}
            <NavLink to="/">here</NavLink>
            {' '}
            to rerserve.
          </div>
        )
          : myprofile.map(({
            rocketName, id, wikipedia,
          }) => (
            <div className="myprofile-cont" key={id}>

              <div className="profile-name">
                {rocketName}
                <div className="link">
                  More info about rocket
                  {' '}
                  <a href={wikipedia}>here</a>

                </div>
              </div>

            </div>
          ))}
      </div>

      <div className="my-profile-mission-section">
        <h2>My Missions</h2>
        { reservedMissions.length === 0 ? (
          <div className="Info">
            Ooops! You have no book misions.
            Click
            {' '}
            <NavLink to="/misions">here</NavLink>
            {' '}
            to book.
          </div>
        )
          : reservedMissions.length > 0 && reservedMissions
            .map(({ missionName, missionId, wikipedia }) => (
              <div className="myprofile-cont" key={missionId}>
                <div className="profile-name">
                  {missionName}
                  <div className="link">
                    More info about rocket
                    {' '}
                    <a href={wikipedia}>here</a>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Myprofile;
