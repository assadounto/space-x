
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rocket = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <div className="cont1">
      <div className="rockets">
        {
        rocket.isFailed
          ? <div>Loading Faild</div>
          : (
            <>
              {
                rocket.isLoading
                  ? <div>Loading...</div>

                  : rocket.items.map(({
                    rocket_name, id, description, flickr_images,reserved
                  }) => (
                    <Rocket
                      key={id}
                      id={id}
                      description={description}
                      flickr_images={flickr_images}
                      rocket_name={rocket_name}
                      reserved={reserved}
                    />
                  ))

              }
            </>
          )
          }
      </div>
    </div>
  );
};

export default Rockets;
