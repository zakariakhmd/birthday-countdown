import React from 'react';

const Wish = ({ name }) => {
  return (
    <div>
      <h1 className='wish-message'>
        HAPPY BIRTHDAY <span className='highlight'>{name.toUpperCase()}</span> !!!
      </h1>
      <div className='wish-detail'>
      <br /><br />Most things in life dont come easy; tough decission, make smart choices -- being prepared is the only way to know to ensure that we are going to win. <br /><br />But the most important things that we should remember is; we are not living in fear, we are living in faith. <br /><br />Keep the faith hold on, things will get better. It might be stormy now, but there is golden sky await. <br /><br />Happy birthday to the person i love the most. Hope all your wishes come true. <br /><br />For now, lets hold my hand and facing this world together - WE RIDE! :D
      </div>
    </div>
  );
};

export default Wish;
