import { useSelector } from 'react-redux/es/exports';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
=======
import './MyProfile.css';
>>>>>>> 8265633233e70b4434783a2a3d90275f5468ca12

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
        { myprofile.map(({
          rocketName, id,
        }) => (
          <div className="myprofile-cont" key={id}>

            <div className="profile-name">{rocketName}</div>
          </div>
        ))}
      </div>

      <div className="my-profile-mission-section">
        <h2>My Missions</h2>
        {reservedMissions.length > 0 && reservedMissions.map((mission) => (
          <div className="myprofile-cont" key={mission.missionId}>
            <p className="profile-name">{mission.missionName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myprofile;
