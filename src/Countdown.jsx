import React from 'react';
import Wish from './Wish';

const Countdown = ({ countdownData, name }) => {
  if (!countdownData.isItBday) {
    return (
      <div>
        <h1 className='heading'>
          Countdown to <span className='highlight'>{name}'s</span> Birthday
        </h1>
        <div className='countdown-wrapper'>
          <div className='countdown-box'>
            {countdownData.days}
            <span className='legend'>Days</span>
          </div>
          <div className='countdown-box'>
            {countdownData.hours}
            <span className='legend'>Hours</span>
          </div>
          <div className='countdown-box'>
            {countdownData.minutes}
            <span className='legend'>Minutes</span>
          </div>
          <div className='countdown-box'>
            {countdownData.seconds}
            <span className='legend'>Seconds</span>
          </div>
        </div>
      </div>
    );
<<<<<<< HEAD
  } else {    
    return <Wish name={name} />;
      }
=======
  } else {
    return <Wish name={name} />;
  }
>>>>>>> be03977e48ed58e3605805e1a2d86d3607a1a5ea
};

export default Countdown;
