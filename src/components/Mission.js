import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { JOIN_MISSION, LEAVE_MISSION } from '../redux/missions/missions';
import './Mission.css';

const Mission = (props) => {
  const {
    mission_name, mission_id, description, joined,
  } = props;
  const dispatch = useDispatch();
  Mission.propTypes = {
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  };

  const handleclick = () => {
    console.log(JOIN_MISSION(mission_id));
    dispatch(JOIN_MISSION(mission_id));
  };

  const handleCancel = () => {
    console.log(LEAVE_MISSION(mission_id));
    dispatch(LEAVE_MISSION(mission_id));
  };

  return (
    <table className="mission-content" key={mission_id}>
        <tr>
        <td className="mission-name box">{mission_name}</td>
        <td className="mission-description box">{description}</td>
        <td className="status-button box">{joined ? <h5 className="active-member-btn">Active Member</h5> : <h5 className="not-member-btn">NOT A MEMBER</h5>}</td>
        <td className="join-button box">{joined ? <button type="button" className="leave-mission" onClick={handleCancel}>Leave Mission</button> : <button type="button" className="join-mission" onClick={handleclick}>Join Mission</button>}</td>
        </tr>
    </table>
  );
};

export default Mission;
