import PropTypes from "react";
import { useDispatch } from "react-redux/es/exports";
import { JOIN_MISSION, LEAVE_MISSION } from "../redux/missions/missions";


const Mission = (props) => {
    const { mission_name, mission_id, description, joined } = props;
    const dispatch = useDispatch();
    Mission.propTypes = {
        mission_id: PropTypes.number.isRequired,
        mission_name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        joined: PropTypes.bool.isRequired,
    };

    const handleclick = () => {
        dispatch(JOIN_MISSION(mission_id));
    };

    const handleCancel = () => {
        dispatch(LEAVE_MISSION(mission_id));
    };

    return (
        <div className="mission-content" key={mission_id}>
            <div className="mission-name">{mission_name}</div>
            <div className="mission-description">{description}</div>
            <div className="status-button"><button type="button">NOT A MEMBER</button></div>
            <div classNname="join-button">{joined ? <div className='joined' onClick={handleCancel}>Leave Mission</div> : <div className='join-mission' onClick={handleclick}>Join Mission</div>}</div>
        </div>
    )

};

export default Mission;
