import React from 'react';

const CardActions = ({ editCard, deleteCard }) => {
  return (
    <div className='card-actions'>
      <button onClick={editCard}>Edit</button>
      <button onClick={deleteCard}>Delete</button>
    </div>
  );
};

export default CardActions;
