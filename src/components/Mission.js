import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { JOIN_MISSION, LEAVE_MISSION } from '../redux/missions/missions';
import './Mission.css';

const Mission = (props) => {
  const {
    missionName, missionId, description, joined,
  } = props;
  const dispatch = useDispatch();
  Mission.propTypes = {
    missionId: PropTypes.string.isRequired,
    missionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  };

  const handleclick = () => {
    dispatch(JOIN_MISSION(missionId));
  };

  const handleCancel = () => {
    dispatch(LEAVE_MISSION(missionId));
  };

  return (
    <table className="mission-content" key={missionId}>
      <tr>
        <td className="mission-name box">{missionName}</td>
        <td className="mission-description box">{description}</td>
        <td className="status-button box">{joined ? <h5 className="active-member-btn">Active Member</h5> : <h5 className="not-member-btn">NOT A MEMBER</h5>}</td>
        <td className="join-button box">{joined ? <button type="button" className="leave-mission" onClick={handleCancel}>Leave Mission</button> : <button type="button" className="join-mission" onClick={handleclick}>Join Mission</button>}</td>
      </tr>
    </table>
  );
};

export default Mission;
