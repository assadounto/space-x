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
    mission_id: PropTypes.number.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool.isRequired,
  };

  const handleclick = () => {
    dispatch(JOIN_MISSION({ mission_id }));
  };

  const handleCancel = () => {
    dispatch(LEAVE_MISSION(mission_id));
  };

  return (
    <div className="mission-content" key={mission_id}>
      <div className="mission-name">{mission_name}</div>
      <div className="mission-description">{description}</div>
      <div className="status-button">{joined ? <h5>Active Member</h5> : <h5>NOT A MEMBER</h5>}</div>
      <div className="join-button">{joined ? <button type="button" className="joined" onClick={handleCancel}>Leave Mission</button> : <button type="button" className="join-mission" onClick={handleclick}>Join Mission</button>}</div>
    </div>
  );
};

export default Mission;
