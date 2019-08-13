import React from 'react';
import CowEntry from './CowEntry.jsx';

var CowList = ({ cows }) => (
  <div className='CowList'>
    <ul>
      <li>
        {cows.map(cow => {
          return <CowEntry cow={cow} />;
        })}
      </li>
    </ul>
  </div>
);

export default CowList;
