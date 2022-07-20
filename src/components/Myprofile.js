import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom';

const Myprofile = () => {
  const user = useSelector((state) => state.rockets);
  const reservedMissions = useSelector(
    (state) => state.missions.items.filter((mission) => mission.joined),
  );
  const myprofile = user.items.filter((item) => item.reserved === true);
  return (
    <div className="myprofile">
      <h2>My Rockets</h2>
      {myprofile.length === 0 ? (
        <div className="Info">
          You have no Reserved Rockets.
          To Reserve a rocket click
          {' '}
          <NavLink to="/">here</NavLink>
          {' '}
          and check back here.
        </div>
      )
        : myprofile.map(({
          rocketName, id,
        }) => (
          <div className="myprofile-cont" key={id}>

            <div className="profile-name">{rocketName}</div>
          </div>
        ))}

      <div className="my-profile-section">
        <h2>My Missions</h2>
        <div className="myprofile-cont">
          {reservedMissions.length > 0 && reservedMissions.map((mission) => (
            <div key={mission.mission_id}>
              <p>{mission.mission_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
