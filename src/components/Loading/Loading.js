import React from 'react';

import './Loading.css';

const Loading = () => (
  <div className='loading'>
    <div className="dots">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
    <p>Chargement...</p>
  </div>
);

export default Loading;
