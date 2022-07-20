
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { RESERVE,CANCEL } from '../redux/rockets/rockets';



function Rocket(props) {
  const {
    rocket_name,id, description, flickr_images,reserved
  } = props;
  const dispatch = useDispatch();
  Rocket.propTypes = {
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.array.isRequired,
    reserved:PropTypes.bool.isRequired
  };
  
  function handleclick() {
   dispatch(RESERVE(id))
  }
  function handleCancel() {
    dispatch(CANCEL(id))
   }

  return (
    <div className="rocket-cont" key={id}>
        <img src={flickr_images[1]} alt={rocket_name} className='flicker-img'></img>
        <div className='info'>
            <div className='name'>{rocket_name}</div>
            <div className='description'>{ 
              reserved && <div className='badge'>Reserved</div>
            }
              {description}</div>
              {reserved ? <div className='reserve' onClick={handleCancel}>Cancel Reservation</div> : <div className='reserve' onClick={handleclick}>Reserve Rocket</div>}
        </div>
        
    </div>
  );
}

export default Rocket;
