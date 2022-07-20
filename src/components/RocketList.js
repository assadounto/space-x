import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const rocket = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rocket.items.length === 0) {
      dispatch(getRockets());
    }
  });
  return (
    <div className="cont1">
      <div className="rockets">
        {
        rocket.isFailed
          ? <div>Loading Failed</div>
          : (
            <>
              {
                rocket.isLoading
                  ? <div>Loading...</div>

                  : rocket.items.map(({
                    rocketName, id, description, flickrImages, reserved,
                  }) => (
                    <Rocket
                      key={id}
                      id={id}
                      description={description}
                      flickrImages={flickrImages}
                      rocketName={rocketName}
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
