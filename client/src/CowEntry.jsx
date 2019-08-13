import React from 'react';

var CowEntry = ({ cow }) => (
  <div className='cow'>
    <p>
      Hi I'm {cow.name} and {cow.description}
    </p>
  </div>
);

export default CowEntry;
