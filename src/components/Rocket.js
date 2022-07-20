import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { RESERVE, CANCEL } from '../redux/rockets/rockets';

function Rocket(props) {
  const {
    rocketName, id, description, flickrImages, reserved,
  } = props;
  const dispatch = useDispatch();
  Rocket.propTypes = {
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  };

  function handleclick() {
    dispatch(RESERVE(id));
  }
  function handleCancel() {
    dispatch(CANCEL(id));
  }

  return (
    <div className="rocket-cont" key={id}>
      <img src={flickrImages[1]} alt={rocketName} className="flicker-img" />
      <div className="info">
        <div className="name">{rocketName}</div>
        <div className="description">
          {
              reserved && <div className="badge">Reserved</div>
            }
          {description}
        </div>
        {reserved ? <button type="submit" className="reserve btn" onClick={handleCancel}>Cancel Reservation</button> : <button type="submit" className="cancel-reserve btn" onClick={handleclick}>Reserve Rocket</button>}
      </div>

    </div>
  );
}

export default Rocket;
