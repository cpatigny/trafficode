import React from 'react';
import CardActions from './CardActions';

const Card = ({ title, content, isAdmin }) => {

  return (
    <div className='card'>
      <div className='card-header'>
        <p>{ title }</p>
        { isAdmin ? <CardActions /> : null }
      </div>

      <div className='content'>{ content }</div>
    </div>
  );
};

export default Card;
